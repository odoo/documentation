from docutils import nodes
from sphinx.locale import admonitionlabels
from sphinx.writers.html5 import HTML5Translator


# Translators inheritance chain:
# Docutils Base HTML translator: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/writers/_html_base.py
# └── Docutils Polyglot html5 translator: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/writers/html5_polyglot/__init__.py
#     └── Sphinx Translator: https://github.com/sphinx-doc/sphinx/blob/master/sphinx/writers/html5.py
#         └── Odoo Translator

ADMONITION_MAPPING = {
    'note': 'alert-primary',
    'seealso': 'alert-primary',
    'example': 'alert-primary',
    'exercise': 'alert-primary',

    'important': 'alert-info',

    'tip': 'alert-success',

    'warning': 'alert-warning',
    'attention': 'alert-warning',
    'caution': 'alert-warning',

    'danger': 'alert-danger',
    'error': 'alert-danger',
}  # The alert classes have been replaced by default BS classes to reduce number of scss lines.

# Interactive sessions, whose lines are not numbered.
SESSION_LANGUAGES = ('console', 'doscon', 'pycon')


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
        self.meta.append('<meta http-equiv="X-UA-Compatible" content="IE=edge">')
        self.meta.append('<meta name="viewport" content="width=device-width, initial-scale=1">')

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
        node_classes = ["alert", ADMONITION_MAPPING[name] if name else 'alert-primary']
        self.body.append(self.starttag(
            node, 'div', CLASS=" ".join(node_classes)))
        if name:
            node.insert(0, nodes.title(name, admonitionlabels[name]))

    # overwritten
    # `visit_admonition` above always emits a plain <div> without pushing a
    # closing tag onto `self.context` (unlike Sphinx's own implementation), so
    # depart must close it directly instead of popping `self.context`.
    def depart_admonition(self, node=None):
        self.body.append('</div>\n')

    # overwritten
    # Appends alert-title class to <p> if parent is an Admonition.
    def visit_title(self, node):
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

    def visit_literal_block(self, node):
        """ Override to number the lines of the code blocks that have several. """
        if (
            node.rawsource == node.astext()  # Not a parsed literal, which is not highlighted
            and '\n' in node.rawsource.strip()
            and node.get('language') not in SESSION_LANGUAGES
        ):
            node['linenos'] = True
        return super().visit_literal_block(node)

    def visit_literal_strong(self, node):
        """ Override to add the class `o_code` to all `command` roles. """
        if 'command' in node['classes']:
            node['classes'].append('o_code')
        return super().visit_literal_strong(node)

    # overwritten
    # Ensure table class is present for tables
    def visit_table(self, node):
        # c/p of https://github.com/pydata/pydata-sphinx-theme/pull/509/files
        self._table_row_indices.append(0)

        classes = [cls.strip(' \t\n')
                   for cls in self.settings.table_style.split(',')]
        classes.insert(0, "docutils")  # compat
        classes.insert(0, "table")  # compat

        if 'align' in node:
            classes.append('align-%s' % node['align'])
        tag = self.starttag(node, 'table', CLASS=' '.join(classes))
        if 'table-sticky-header' not in node['classes']:  # Sticky headers need the page to scroll
            self.body.append('<div class="table-responsive">')
        self.body.append(tag)

    def depart_table(self, node):
        super().depart_table(node)
        if 'table-sticky-header' not in node['classes']:
            self.body.append('</div>\n')
