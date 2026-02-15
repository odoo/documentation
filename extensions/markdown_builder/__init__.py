"""
Sphinx Markdown Builder - Custom builder for converting RST documentation to Markdown.
Compatible with Sphinx 4.3.2 and Odoo's custom extensions.

Converts :doc: and :ref: cross-references to relative .md file links,
preserves directory structure, and handles custom Odoo directives
(cards, spoilers, tabs, embedded videos, custom admonitions).
"""

from .builder import MarkdownBuilder
from .translator import MarkdownTranslator


def _noop_visit(self, node):
    pass


def _noop_depart(self, node):
    pass


def setup(app):
    app.add_builder(MarkdownBuilder)

    # Register Odoo custom node types with markdown-compatible visitors.
    # This prevents "unknown node" errors during the markdown build.

    # ── Cards extension nodes ─────────────────────────────────
    try:
        from cards import Div as CardsDiv, A as CardsA, Span as CardsSpan, H4 as CardsH4

        def visit_cards_a(translator, node):
            href = node.get('href', '')
            if href:
                translator._in_card = True
                translator._card_target = href.replace('.html', '.md')

        def depart_cards_a(translator, node):
            if translator._in_card:
                translator._in_card = False
                if translator._card_title and translator._card_target:
                    translator._add(f'- [{translator._card_title}]({translator._card_target})\n')
                translator._card_title = ''
                translator._card_target = ''

        def visit_cards_h4(translator, node):
            translator._in_title = True
            translator._title_text = ''

        def depart_cards_h4(translator, node):
            translator._in_title = False
            if translator._in_card:
                translator._card_title = translator._title_text

        app.add_node(CardsDiv, markdown=(_noop_visit, _noop_depart), override=True)
        app.add_node(CardsA, markdown=(visit_cards_a, depart_cards_a), override=True)
        app.add_node(CardsH4, markdown=(visit_cards_h4, depart_cards_h4), override=True)
        app.add_node(CardsSpan, markdown=(_noop_visit, _noop_depart), override=True)
    except ImportError:
        pass

    # ── Spoilers extension nodes ──────────────────────────────
    try:
        from spoilers import Container as SpoilerContainer, Header as SpoilerHeader, \
            Button as SpoilerButton

        def visit_spoiler_container(translator, node):
            classes = node.get('classes', [])
            if 'o_spoiler' in classes:
                translator._ensure_blank_line()
                translator._add('<details>\n')
            elif 'accordion-body' in classes:
                translator._add('\n')

        def depart_spoiler_container(translator, node):
            classes = node.get('classes', [])
            if 'o_spoiler' in classes:
                translator._add('</details>\n\n')

        def visit_spoiler_button(translator, node):
            translator._add('<summary>')

        def depart_spoiler_button(translator, node):
            translator._add('</summary>\n')

        app.add_node(SpoilerContainer, markdown=(visit_spoiler_container, depart_spoiler_container),
                     override=True)
        app.add_node(SpoilerHeader, markdown=(_noop_visit, _noop_depart), override=True)
        app.add_node(SpoilerButton, markdown=(visit_spoiler_button, depart_spoiler_button),
                     override=True)
    except ImportError:
        pass

    # ── Custom admonitions nodes ──────────────────────────────
    try:
        from custom_admonitions import example, exercise, DfnSpan

        def visit_example(translator, node):
            translator._start_admonition('example', node)

        def depart_example(translator, node):
            translator._finish_admonition()

        def visit_exercise(translator, node):
            translator._start_admonition('exercise', node)

        def depart_exercise(translator, node):
            translator._finish_admonition()

        app.add_node(example, markdown=(visit_example, depart_example), override=True)
        app.add_node(exercise, markdown=(visit_exercise, depart_exercise), override=True)
        app.add_node(DfnSpan, markdown=(_noop_visit, _noop_depart), override=True)
    except ImportError:
        pass

    # ── HTML domain nodes ─────────────────────────────────────
    try:
        from html_domain import (div as HtmlDiv, address as HtmlAddress, cite as HtmlCite,
                                 mark, insert, delete, strikethrough, underline, small,
                                 kbd, var, samp)

        app.add_node(HtmlDiv, markdown=(_noop_visit, _noop_depart), override=True)
        app.add_node(HtmlAddress, markdown=(_noop_visit, _noop_depart), override=True)
        app.add_node(HtmlCite, markdown=(_noop_visit, _noop_depart), override=True)
        for node_cls in (mark, insert, delete, strikethrough, underline, small, kbd, var, samp):
            app.add_node(node_cls, markdown=(_noop_visit, _noop_depart), override=True)
    except ImportError:
        pass

    return {
        'version': '1.0',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
