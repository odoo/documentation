from pathlib import Path

from docutils import nodes
from docutils.parsers.rst import directives
from sphinx.util.docutils import SphinxDirective


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

        h4_title = H4(classes=['card-title', 'text-primary', 'mb-1'])
        h4_title += nodes.Text(self.arguments[0])
        div_card_body += h4_title

        p_card_text = nodes.paragraph(classes=['card-text', 'text-dark', 'fw-normal'])
        p_card_text += nodes.Text('\n'.join(self.content))
        div_card_body += p_card_text

        div_card_footer = Div(classes=['card-footer', 'border-0'])
        div_card += div_card_footer

        if 'tag' in self.options:
            span_badge = Span(classes=['badge', 'rounded-pill', 'bg-dark', 'mt-auto', 'mb-2'])
            div_card_footer += span_badge
            span_badge += nodes.Text(self.options['tag'])

        return [a_col]


class Div(nodes.General, nodes.Element):
    custom_tag_name = 'div'


class A(nodes.General, nodes.Element):
    custom_tag_name = 'a'


class Span(nodes.General, nodes.Element):
    custom_tag_name = 'span'


class H4(nodes.General, nodes.Element):
    custom_tag_name = 'h4'


def visit_node(translator, node):
    custom_attr = {k: v for k, v in node.attributes.items() if k not in node.known_attributes}
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
