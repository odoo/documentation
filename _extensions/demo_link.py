import collections
import threading
import werkzeug

try:
    import xmlrpclib
except ImportError:
    # P3
    import xmlrpc.client as xmlrpclib

try:
    import Queue
except ImportError:
    # P3
    import queue as Queue

from xml.etree import ElementTree as ET

from docutils import nodes, utils
from docutils.parsers.rst import Directive, directives
from sphinx.domains import Domain

def setup(app):
    app.add_domain(OdooDemoDomain)

class Fields(Directive):
    """Fetches and lists the fields linked to a specific action.

    Required argument: external ID of the action

    Options:

    view
        defaults to "form"
    fields
        comma-separated whitelist of fields. By default, lists all
        fields returned by fields_view_get
    """
    required_arguments = 1
    option_spec = {
        'view': directives.unchanged,
        'only': directives.unchanged,
    }
    def __init__(self, name, arguments, options, content, lineno,
                 content_offset, block_text, state, state_machine):
        super(Fields, self).__init__(
            name, arguments, options, content, lineno,
            content_offset, block_text, state, state_machine)
        xid = arguments[0]
        self.future_fields = self._get_fields(xid, options.get('view') or 'form')

    def run(self):
        try:
            fields = self.future_fields.get(timeout=30)
        except Queue.Empty:
            return [self.state_machine.reporter.error(
                "Timed out while fetching fields related to action [%s]" % self.arguments[0]
            )]
        if fields is None:
            return [self.state_machine.reporter.warning(
                "Could not find any field related to the action [%s]" % self.arguments[0]
            )]
        if isinstance(fields, str):
            return [self.state_machine.reporter.warning(
                "Error while fetching fields related to the action [%s]: %s" % (
                    self.arguments[0], fields))]

        whitelist = set(self.options.get('only', '').split())
        return [nodes.field_list('', *(
            nodes.field('',
                nodes.field_name(text=v['string'] or k),
                nodes.field_body('',
                    # keep help formatting around (e.g. newlines for lists)
                    nodes.line_block('', *(
                        nodes.line(text=line)
                        for line in v['help'].split('\n')
                    ))
                )
            )
            for k, v in fields.items()
            # if there's a whitelist, only display whitelisted fields
            if not whitelist or k in whitelist
            # only display if there's a help text
            if v.get('help')
        ))]

    def _get_fields(self, xid, view='form'):
        q = Queue.Queue(1)
        _submit(q, xid, view)
        return q

class Action(Directive):
    required_arguments = 1
    final_argument_whitespace = True
    has_content = True

    def run(self):
        self.assert_has_content()
        external_id = self.arguments[0]
        text = "action button"
        node = nodes.reference(
            refuri='https://demo.odoo.com?{}'.format(werkzeug.urls.url_encode({
                'module': external_id
            })),
            classes=['btn', 'btn-primary', 'btn-lg', 'btn-block', 'center-block']
        )
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]

class OdooDemoDomain(Domain):
    name = 'demo'
    label = 'Odoo Demo'
    directives = {
        'fields': Fields,
        'action': Action,
    }

FETCH_THREADS = 4
launcher_lock = threading.Lock()
launcher = None
work_queue = Queue.Queue()
Task = collections.namedtuple('Task', 'result xid view')
def _submit(result_queue, xid, view='form'):
    global launcher
    # enqueue task before checking launcher, that way if the launcher
    # is already started (likely) a worker can immediately get to work
    work_queue.put(Task(result_queue, xid, view))

    with launcher_lock:
        if launcher is None:
            launcher = threading.Thread(target=_launcher, name="Fetch threads launcher")
            launcher.daemon = True
            launcher.start()

def _launcher():
    try:
        info = xmlrpclib.ServerProxy('https://demo.odoo.com/start').start()
    except xmlrpclib.Fault as e:
        threading.Thread(
            target=_fault_requests,
            args=["Demo start() failed: %s" % e.faultString],
            name="fields_get login failed").start()
        return
    url, db, username, password = \
        info['host'], info['database'], info['user'], info['password']

    uid = xmlrpclib.ServerProxy('{}/xmlrpc/2/common'.format(url))\
                   .authenticate(db, username, password, {})

    for i in range(FETCH_THREADS):
        # daemon because Launcher is daemon
        threading.Thread(target=_fetch_fields, kwargs={
            'db': db,
            'uid': uid,
            'password': password,
            'url': '{}/xmlrpc/2/object'.format(url)
        }, name="fields_get fetcher thread %d/%d" % (i, FETCH_THREADS)).start()

def _fault_requests(error):
    while True:
        task = work_queue.get()
        task.result.put(error)
        work_queue.task_done()

def _fetch_fields(url, db, uid, password):
    server = xmlrpclib.ServerProxy(url)
    while True:
        task = work_queue.get()

        # resolve xid
        model, id_ = server.execute_kw(
            db, uid, password,
            'ir.model.data', 'xmlid_to_res_model_res_id', [task.xid])
        if not id_: # didn't find xid
            result = None
        elif model != 'ir.actions.act_window': # we only handle action windows, rest is unknown
            result = None
        else:
            action = server.execute_kw(db, uid, password, model, 'read', [id_, ['res_model', 'views']])
            view_id = next((id_ for type, id_ in action[0]['views'] if type == task.view), False)
            fvg = server.execute_kw(
                db, uid, password,
                action[0]['res_model'], 'fields_view_get', [], {
                    'view_id': view_id,
                    'view_type': task.view
                })
            result = collections.OrderedDict()
            # reorder fields to be in view order, and add @help from view if any
            arch = ET.fromstring(fvg['arch'])
            for node in arch.iter(tag='field'):
                field = node.get('name')

                result[field] = fvg['fields'][field]
                # bit trashy but should work well enough to update
                # @string and @help
                result[field].update(node.attrib)
                if node.get('nolabel'):
                    # native @string suppressed, look for <label
                    # for=@name>.  invisible means a field could have
                    # multiple <label> but that's basically impossible
                    # to handle so jusr get the first one
                    label = arch.find(".//label[@for='%s']" % field)
                    if label is not None:
                        result[field]['string'] = label.get('string')

        task.result.put(result)
        work_queue.task_done()
