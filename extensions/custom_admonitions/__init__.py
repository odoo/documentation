""" Add new custom admonition directives. """

from docutils import nodes
from docutils.parsers.rst.directives import admonitions
from sphinx.locale import admonitionlabels


class example(nodes.Admonition, nodes.Element):
    pass


class Example(admonitions.BaseAdmonition):
    node_class = example


class exercise(nodes.Admonition, nodes.Element):
    pass


class Exercise(admonitions.BaseAdmonition):
    node_class = exercise


def setup(app):
    app.add_directive('example', Example)
    app.add_node(example, html=(
        lambda self, node: self.visit_admonition(node, 'example'),
        lambda self, node: self.depart_admonition(node),
    ))
    app.add_directive('exercise', Exercise)
    app.add_node(exercise, html=(
        lambda self, node: self.visit_admonition(node, 'exercise'),
        lambda self, node: self.depart_admonition(node),
    ))

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True
    }


admonitionlabels['example'] = 'Example'
admonitionlabels['exercise'] = 'Exercise'
