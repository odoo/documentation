from docutils import nodes
from sphinx.locale import admonitionlabels
from sphinx.writers.html5 import HTML5Translator


# Translators inheritance chain:
# Docutils Base HTML translator: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/writers/_html_base.py
# └── Docutils Polyglot html5 translator: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/writers/html5_polyglot/__init__.py
#     └── Sphinx Translator: https://github.com/sphinx-doc/sphinx/blob/master/sphinx/writers/html5.py
#         └── Odoo Translator

ADMONITION_MAPPING = {
    # ???: 'alert-success',

    'note': 'alert-note',

    'hint': 'alert-info',

    'tip': 'alert-tip',

    'seealso': 'alert-go_to',

    'warning': 'alert-warning',
    'attention': 'alert-warning',
    'caution': 'alert-warning',
    'important': 'alert-warning',

    'danger': 'alert-danger',
    'error': 'alert-danger',

    'example': 'alert-example',
    'exercise': 'alert-exercise',
}


class BootstrapTranslator(HTML5Translator):
    # Docutils specifications
    head_prefix = 'head_prefix'
    head = 'head'
    stylesheet = 'stylesheet'
    body_prefix = 'body_prefix'
    body_pre_docinfo = 'body_pre_docinfo'
    docinfo = 'docinfo'
    body_suffix = 'body_suffix'
    subtitle = 'subtitle'
    header = 'header'
    footer = 'footer'
    html_prolog = 'html_prolog'
    html_head = 'html_head'
    html_title = 'html_title'
    html_subtitle = 'html_subtitle'

    def __init__(self, builder, *args, **kwds):
        super().__init__(builder, *args, **kwds)

        # Meta
        self.meta = ['', '']  # HTMLWriter strips out the first two items from Translator.meta
        self.add_meta('<meta http-equiv="X-UA-Compatible" content="IE=edge">')
        self.add_meta('<meta name="viewport" content="width=device-width, initial-scale=1">')

        # Body
        self.body = []
        self.fragment = self.body
        self.html_body = self.body
        # document title
        self.title = []
        self.start_document_title = 0
        self.first_title = False

        self.context = []
        self.section_level = 0

        self.first_param = 1
        self.param_separator = ','

    def encode(self, text):
        return str(text).translate({
            ord('&'): '&amp;',
            ord('<'): '&lt;',
            ord('"'): '&quot;',
            ord('>'): '&gt;',
            0xa0: '&nbsp;'
        })

    def unknown_visit(self, node):
        print("unknown node", node.__class__.__name__)
        self.body.append(f'[UNKNOWN NODE {node.__class__.__name__}]')
        raise nodes.SkipNode

    # NOTE: seems that when we remove/comment this, we get the titles 5 times in the global toc
    def visit_document(self, node):
        self.first_title = True
    def depart_document(self, node):
        pass

    # Breaks Accounting memento if commented
    def visit_section(self, node):
        # close "parent" or preceding section, unless this is the opening of
        # the first section
        if self.section_level:
            self.body.append('</section>')
        self.section_level += 1

        self.body.append(self.starttag(node, 'section'))
    def depart_section(self, node):
        self.section_level -= 1
        # close last section of document
        if not self.section_level:
            self.body.append('</section>')

    # overwritten
    # Class mapping:
    # admonition [name] -> alert-[name]
    # Enforce presence of [name]-title as class on the <p> containing the title
    def visit_admonition(self, node, name=''):
        # type: (nodes.Node, unicode) -> None
        node_classes = ["alert"]
        if name:
            node_classes.append(ADMONITION_MAPPING[name])
        self.body.append(self.starttag(
            node, 'div', CLASS=" ".join(node_classes)))
        if name:
            node.insert(0, nodes.title(name, admonitionlabels[name]))

    # overwritten
    # Appends alert-title class to <p> if parent is an Admonition.
    def visit_title(self, node):
        # type: (nodes.Node) -> None
        if isinstance(node.parent, nodes.Admonition):
            self.body.append(self.starttag(node, 'p', CLASS='alert-title'))
        else:
            super().visit_title(node)

    def depart_title(self, node):
        if isinstance(node.parent, nodes.Admonition):
            self.body.append("</p>")
        else:
            super().depart_title(node)

    def visit_literal(self, node):
        """ Override to add the class `o_code` to all `literal`, `code`, and `file` roles. """
        node['classes'].append('o_code')
        return super().visit_literal(node)

    def visit_literal_strong(self, node):
        """ Override to add the class `o_code` to all `command` roles. """
        if 'command' in node['classes']:
            node['classes'].append('o_code')
        return super().visit_literal_strong(node)

    # overwritten
    # Ensure table class is present for tables
    def visit_table(self, node):
        # type: (nodes.Node) -> None
        self.generate_targets_for_table(node)

        # c/p of https://github.com/pydata/pydata-sphinx-theme/pull/509/files
        self._table_row_indices.append(0)

        classes = [cls.strip(' \t\n')
                   for cls in self.settings.table_style.split(',')]
        classes.insert(0, "docutils")  # compat
        classes.insert(0, "table")  # compat

        if 'align' in node:
            classes.append('align-%s' % node['align'])
        tag = self.starttag(node, 'table', CLASS=' '.join(classes))
        self.body.append(tag)
