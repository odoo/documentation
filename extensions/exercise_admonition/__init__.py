""" Add a new "exercise" admonition directive. """

from docutils import nodes
from docutils.parsers.rst.directives import admonitions
from sphinx.locale import admonitionlabels


class exercise(nodes.Admonition, nodes.Element):
    pass


class Exercise(admonitions.BaseAdmonition):
    node_class = exercise


def setup(app):
    app.add_directive('exercise', Exercise)
    app.add_node(exercise, html=(
        lambda self, node: self.visit_admonition(node, 'exercise'),
        lambda self, node: self.depart_admonition(node),
    ))

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True
    }

admonitionlabels['exercise'] = 'Exercise'
