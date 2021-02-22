from docutils import nodes
from sphinx import addnodes
from sphinx.environment.adapters import toctree

from . import pygments_override, translator


def setup(app):
    app.set_translator('html', translator.BootstrapTranslator)

    app.connect('html-page-context', set_missing_meta)

    app.add_js_file('js/utils.js')  # Keep in first position
    app.add_js_file('js/layout.js')
    app.add_js_file('js/menu.js')
    app.add_js_file('js/page_toc.js')


def set_missing_meta(app, pagename, templatename, context, doctree):
    if context.get('meta') is None:  # Pages without title (used with `include::`) have no meta
        context['meta'] = {}

class Monkey(object):
    """ Replace patched method of an object by a new method receiving the old one in argument. """
    def __init__(self, obj):
        self.obj = obj
    def __call__(self, fn):
        name = fn.__name__
        old = getattr(self.obj, name)
        setattr(self.obj, name, lambda self_, *args, **kwargs: fn(old, self_, *args, **kwargs))

@Monkey(toctree.TocTree)
def resolve(old_resolve, tree, docname, *args, **kwargs):

    def _clear_empty_pages_reference(_node) -> None:
        """ Disable references to 'empty' toctree pages.

        Inspect node's children to determine whether the page is a toc and, if so, clear its
        reference URL. (<a href="#"/>)
        If the page has the `show_content` metadata, don't clear the reference.

        Internal structure of nodes:
        <ul>
            <li>
                <p><a/></p>
                <ul>
                    ...
                </ul>
            </li>
            <li/>
        <ul/>
        """
        if isinstance(_node, nodes.reference):  # The node is a reference (<a/>)
            _subnode_docname = _get_docname(_node)
            if _subnode_docname and any(
                isinstance(_subnode, nodes.bullet_list)
                for _subnode in _node.parent.parent.children
            ):  # The node references a toc
                if 'show_content' not in tree.env.metadata[_subnode_docname]:
                    _node['refuri'] = '#'  # The page must not be accessible
        elif isinstance(_node, (addnodes.compact_paragraph, nodes.bullet_list, nodes.list_item)):
            for _subnode in _node.children:
                _clear_empty_pages_reference(_subnode)

    def _get_docname(_node):
        """
        docname = a/b/c/the_page_being_rendered
        _ref = ../../contributing/documentation
        _path_parts = ['..', '..', 'contributing', 'documentation']
        _res = ['a', 'contributing', 'documentation']
        _docname = a/contributing/documentation
        """
        _ref = _node['refuri'].replace('.html', '')
        _parent_directory_occurrences = _ref.count('..')
        if not _parent_directory_occurrences:  # The ref is already the docname
            _docname = _ref
        else:
            _path_parts = _ref.split('/')
            _res = docname.split('/')[:-(_parent_directory_occurrences+1)] \
                   + _path_parts[_parent_directory_occurrences:]
            _docname = '/'.join(_res)
        return _docname

    resolved_toc = old_resolve(tree, docname, *args, **kwargs)
    if resolved_toc:  # `resolve` returns None if the depth of the TOC to resolve is too high
        _clear_empty_pages_reference(resolved_toc)
    return resolved_toc
