from pathlib import Path

from docutils import nodes
from docutils.parsers.rst import directives
from sphinx import addnodes
from sphinx.util.docutils import SphinxDirective
from sphinx.util.nodes import set_source_info


class Cards(SphinxDirective):
    """ Implement a `cards` directive as a Bootstrap `row`. """
    has_content = True

    def run(self):
        """ Process the content of the directive.

        We use custom node classes to represent HTML elements (e.g., 'div') rather than the
        corresponding sphinx.nodes.* class (e.g., sphinx.nodes.container) to prevent automatically
        setting the name of the node as class (e.g., "container") on the element.
        """
        self.assert_has_content()

        div_row = Div(classes=[
            'row', 'row-cols-1', 'row-cols-md-2', 'row-cols-xl-3', 'row-cols-xxl-4', 'g-4', 'mb-4'
        ])
        self.state.nested_parse(self.content, self.content_offset, div_row)
        return [div_row]


class Card(SphinxDirective):
    """ Implement a `card` directive with Bootstrap's card component. """
    required_arguments = 1
    final_argument_whitespace = True
    option_spec = {
        'target': directives.unchanged_required,
        'tag': directives.unchanged,
        'large': directives.flag,
    }
    has_content = True

    def run(self):
        """ Process the content of the directive.

        We use custom node classes to represent HTML elements (e.g., 'div') rather than the
        corresponding sphinx.nodes.* class (e.g., sphinx.nodes.container) to prevent automatically
        setting the name of the node as class (e.g., "container") on the element.
        """
        self.assert_has_content()

        current_document = f'{self.env.docname}.rst'
        target_document = f'{self.options["target"]}.rst'
        if target_document.startswith('/'):
            raise self.warning(f"card directive's target starts with a '/'")
        target_file = Path(self.env.srcdir) / Path(current_document).parent / target_document
        if not target_file.exists():
            raise self.warning(f"card directive targets nonexisting document '{target_document}'")

        a_col_href = target_document.replace('.rst', '.html')
        a_col_classes = ['o_toctree_card']
        if 'large' in self.options:
            a_col_classes += ['col-md-12', 'col-xl-8', 'col-xxl-6']
        else:
            a_col_classes += ['col']
        a_col = A(href=a_col_href, classes=a_col_classes)

        div_card = Div(classes=['card', 'h-100'])
        a_col += div_card

        div_card_body = Div(classes=['card-body', 'pb-0'])
        div_card += div_card_body

        title_nodes, _ = self.state.inline_text(self.arguments[0], self.lineno)
        h4_title = H4('', *title_nodes, classes=['card-title', 'text-primary', 'mb-1'])
        set_source_info(self, h4_title)
        div_card_body += h4_title

        text_nodes, _ = self.state.inline_text('\n'.join(self.content), self.lineno)
        p_card_text = nodes.paragraph('', *text_nodes, classes=['card-text', 'text-dark', 'fw-normal'])
        set_source_info(self, p_card_text)
        div_card_body += p_card_text

        div_card_footer = Div(classes=['card-footer', 'border-0'])
        div_card += div_card_footer

        if 'tag' in self.options:
            tag_nodes, _ = self.state.inline_text(self.options['tag'], self.lineno)
            span_badge = Span('', *tag_nodes, classes=['badge', 'rounded-pill', 'bg-dark', 'mt-auto', 'mb-2'])
            set_source_info(self, span_badge)
            div_card_footer += span_badge

        return [a_col]


class Div(nodes.General, nodes.Element):
    custom_tag_name = 'div'


class A(nodes.General, nodes.Element):
    custom_tag_name = 'a'


class TranslatableMixin(addnodes.translatable):
    """
    Mixin to make a node translatable.
    """
    def preserve_original_messages(self):
        # Store the original text (msgid) if not already saved.
        if 'rawtext' not in self:
            self['rawcontent'] = self.astext()

    def apply_translated_message(self, original_message, translated_message):
        # Replace the node's children (content) with the translated text.
        self.children = [nodes.Text(translated_message)]

    def extract_original_messages(self):
        # Retrieve the preserved msgid.
        return [self['rawcontent']]


class Span(nodes.General, nodes.Element, TranslatableMixin):
    custom_tag_name = 'span'


class H4(nodes.General, nodes.Element, TranslatableMixin):
    custom_tag_name = 'h4'


def visit_node(translator, node):
    custom_attr = {k: v for k, v in node.attributes.items() if k not in node.known_attributes and k != 'rawtext'}
    translator.body.append(translator.starttag(node, node.custom_tag_name, **custom_attr).rstrip())


def depart_node(translator, node):
    translator.body.append(f'</{node.custom_tag_name}>')


def setup(app):
    app.add_directive('cards', Cards)
    app.add_directive('card', Card)
    app.add_node(Div, html=(visit_node, depart_node))
    app.add_node(A, html=(visit_node, depart_node))
    app.add_node(Span, html=(visit_node, depart_node))
    app.add_node(H4, html=(visit_node, depart_node))

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
