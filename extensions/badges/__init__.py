from docutils import nodes
from sphinx.util.docutils import SphinxRole

COLORS = {
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
}


def setup(app):
    for color in COLORS:
        app.add_role(f'badge-{color}', Badge(color))
        app.add_role(f'badge-rounded-{color}', Badge(color, rounded=True))

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }


def badge_classes(color, rounded=False):
    classes = ['badge', f'bg-{color}']

    if color in ('warning', 'info', 'light'):
        classes.extend(['text-dark'])

    if rounded:
        classes.extend(['rounded-pill'])

    return classes


class Badge(SphinxRole):
    def __init__(self, color, rounded=False):
        super().__init__()
        self.color = color
        self.rounded = rounded

    def run(self):
        node = nodes.inline(
            self.rawtext,
            self.text,
            classes=badge_classes(self.color, self.rounded)
        )

        return [node], []
