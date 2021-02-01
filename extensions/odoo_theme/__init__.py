from . import pygments_override
from . import translator

import sphinx.builders.html
from sphinx import addnodes
from sphinx.environment.adapters import toctree
from docutils import nodes


def setup(app):
    app.set_translator('html', translator.BootstrapTranslator)

    # VFE TODO check if default meta initialization is necessary.
    # If not, remove update_meta method
    app.connect('html-page-context', update_meta)


def update_meta(app, pagename, templatename, context, doctree):
    meta = context.get('meta')
    if meta is None:
        meta = context['meta'] = {}

# TODO VFE detailed explanation of the patch logic and use.

class Monkey(object):
    def __init__(self, obj):
        self.obj = obj
    def __call__(self, fn):
        name = fn.__name__
        old = getattr(self.obj, name)
        setattr(self.obj, name, lambda self_, *args, **kwargs: fn(old, self_, *args, **kwargs))

@Monkey(toctree.TocTree)
def resolve(old_resolve, tree, docname, *args, **kwargs):
    resolved_toc = old_resolve(tree, docname, *args, **kwargs)
    if resolved_toc:
        # Not sure set_class really does what we want.
        _toctree_add_empty_class(tree, resolved_toc, docname)
        resolved_toc['classes'].append('testtesttest')
    return resolved_toc

def _toctree_add_empty_class(tree, node, docname) -> None:
    for subnode in node.children:
        if isinstance(subnode, (
            addnodes.compact_paragraph,
            nodes.list_item,
            nodes.bullet_list
        )):
            # for <p>, <li> and <ul> just recurse
            _toctree_add_empty_class(tree, subnode, docname)
        elif isinstance(subnode, nodes.reference):
            toc_ref = get_reference(subnode, docname)
            if toc_ref and 'empty_page' in tree.env.metadata[toc_ref]:
                subnode['classes'].append('o_empty_page')

def get_reference(node, docname):
    ref = node['refuri'].replace('.html', '') # applications.html
    if ref.find('..') < 0:
        # direct reference
        return ref
    splitted_refuri = ref.split('/')
    count = 0 # Number of ../ in refuri
    for split in splitted_refuri:
        if split == "..":
            count += 1
    # ref = ../../../contributing/documentation
    # docname = services/legal/terms/enterprise
    # res = contributing/documentation
    res = docname.split('/')[:-(count+1)] + splitted_refuri[count:]
    return "/".join(
        res
    )
