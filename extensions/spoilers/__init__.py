from docutils import nodes
from sphinx.locale import _
from sphinx.util.docutils import SphinxDirective


class Spoiler(SphinxDirective):
    """ Implement a `spoiler` directive. """

    required_arguments = 0
    optional_arguments = 1
    final_argument_whitespace = True
    has_content = True

    def run(self):
        self.assert_has_content()

        label = self.arguments[0] if self.arguments else _("Spoiler")
        spoiler_id = f'o_spoiler_{self.env.new_serialno("spoiler")}'

        # Create the main container for the spoiler.
        spoiler_container = nodes.container()
        spoiler_container['classes'].append('o_spoiler')

        # Create the spoiler button.
        spoiler_button = SpoilerButton(label=label, spoiler_target=f'.{spoiler_id}')
        spoiler_container += spoiler_button

        # Create the container for the spoiler content.
        spoiler_content = nodes.container()
        spoiler_content['classes'].extend(['collapse', 'o_spoiler_content', spoiler_id])
        self.state.nested_parse(self.content, self.content_offset, spoiler_content)
        spoiler_container += spoiler_content

        return [spoiler_container]


class SpoilerButton(nodes.General, nodes.Element):
    """ Represent a spoiler button. """

    def __init__(self, rawsource='', label=None, *children, **attributes):
        super().__init__(rawsource, *children, **attributes)
        self.label = label

    @staticmethod
    def visit(translator, node):
        node['classes'].extend(['btn', 'btn-primary'])
        attributes = {
            'type': 'button',
            'data-bs-toggle': 'collapse',
            'data-bs-target': node['spoiler_target'],
        }
        translator.body.append(translator.starttag(node, 'button', **attributes).rstrip())
        translator.body.append(node.label)

    @staticmethod
    def depart(translator, node):
        translator.body.append('</button>')


def setup(app):
    app.add_directive('spoiler', Spoiler)
    app.add_node(SpoilerButton, html=(SpoilerButton.visit, SpoilerButton.depart))
    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
