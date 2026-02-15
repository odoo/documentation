"""
Markdown translator for Sphinx doctree nodes.
Converts all standard Sphinx/docutils nodes + Odoo custom nodes to Markdown.
Cross-references (:doc:, :ref:) are converted to relative .md file links.
"""

import os
import posixpath
import re
import textwrap

from docutils import nodes
from sphinx import addnodes
from sphinx.util import logging

logger = logging.getLogger(__name__)

# Map of standard admonition types to Markdown callout prefixes
ADMONITION_MAP = {
    'note': 'Note',
    'warning': 'Warning',
    'tip': 'Tip',
    'important': 'Important',
    'danger': 'Danger',
    'caution': 'Caution',
    'attention': 'Attention',
    'hint': 'Hint',
    'error': 'Error',
    'seealso': 'See also',
    'todo': 'Todo',
    'example': 'Example',
    'exercise': 'Exercise',
}


class MarkdownTranslator(nodes.NodeVisitor):

    def __init__(self, document, builder=None, docname=''):
        super().__init__(document)
        self.builder = builder
        self.docname = docname
        self.body = []
        self.context = []
        self.section_level = 0
        self.list_style = []  # stack of 'bullet' or 'enumerated'
        self.list_counters = []  # stack of counters for enumerated lists
        self.indent_stack = []
        self._current_indent = ''
        self._in_literal_block = False
        self._in_table = False
        self._in_admonition = False
        self._admonition_type = ''
        self._admonition_body = []
        self._in_title = False
        self._title_text = ''
        self._in_field_list = False
        self._field_name = ''
        self._in_reference = False
        self._ref_text = ''
        self._ref_uri = ''
        self._in_desc = False
        self._desc_type = ''
        self._in_toctree = False
        self._toc_entries = []
        self._in_image = False
        self._table_rows = []
        self._current_row = []
        self._current_cell = []
        self._in_cell = False
        self._in_line_block = False
        self._line_block_indent = 0
        self._in_definition_list = False
        self._def_term = ''
        self._in_footnote = False
        self._footnote_label = ''
        self._footnotes = []
        self._in_topic = False
        self._in_sidebar = False
        self._in_rubric = False
        self._in_raw = False
        self._raw_format = ''
        self._in_only = False
        self._pending_newlines = 0
        self._in_tab_set = False
        self._tab_title = ''
        self._in_tab = False
        self._in_spoiler = False
        self._spoiler_title = ''
        self._in_card_set = False
        self._in_card = False
        self._card_title = ''
        self._card_target = ''
        self._suppress_output = False
        self._inline_code = False

    # ── Helpers ──────────────────────────────────────────────

    def _add(self, text):
        if self._suppress_output:
            return
        if self._in_admonition:
            self._admonition_body.append(text)
        elif self._in_cell:
            self._current_cell.append(text)
        else:
            self.body.append(text)

    def _add_line(self, text=''):
        self._add(text + '\n')

    def _ensure_newline(self):
        if self.body and not self.body[-1].endswith('\n'):
            self._add('\n')

    def _ensure_blank_line(self):
        self._ensure_newline()
        if self.body and not self.body[-1].endswith('\n\n'):
            self._add('\n')

    def _get_relpath(self, target_docname):
        """Compute relative path from current doc to target doc, with .md extension."""
        if not target_docname:
            return ''
        source_dir = posixpath.dirname(self.docname)
        rel = posixpath.relpath(target_docname, source_dir)
        return rel + '.md'

    def _resolve_doc_ref(self, refuri):
        """Convert a :doc: refuri to a relative .md path."""
        if not refuri:
            return ''
        # Remove .html suffix if present
        target = refuri.replace('.html', '')
        # Remove anchor
        anchor = ''
        if '#' in target:
            target, anchor = target.split('#', 1)
            anchor = '#' + anchor
        # If the target is already relative (starts with .. or a name), compute properly
        if target.startswith('/'):
            target = target[1:]  # absolute from source root
            rel = self._get_relpath(target)
        else:
            rel = target + '.md'
        return rel + anchor

    def get_output(self):
        output = ''.join(self.body)
        # Append collected footnotes
        if self._footnotes:
            output += '\n\n---\n\n'
            output += '\n'.join(self._footnotes)
            output += '\n'
        # Clean up excessive blank lines
        output = re.sub(r'\n{4,}', '\n\n\n', output)
        return output

    # ── Document ─────────────────────────────────────────────

    def visit_document(self, node):
        pass

    def depart_document(self, node):
        pass

    # ── Sections & titles ─────────────────────────────────────

    def visit_section(self, node):
        self.section_level += 1

    def depart_section(self, node):
        self.section_level -= 1

    def visit_title(self, node):
        self._in_title = True
        self._title_text = ''

    def depart_title(self, node):
        self._in_title = False
        if self._in_admonition or self._in_topic or self._in_sidebar:
            return
        if self._in_rubric:
            self._ensure_blank_line()
            self._add_line(f'**{self._title_text}**')
            self._add_line()
            return
        level = min(self.section_level, 6)
        if level < 1:
            level = 1
        prefix = '#' * level
        self._ensure_blank_line()
        self._add_line(f'{prefix} {self._title_text}')
        self._add_line()

    def visit_subtitle(self, node):
        self._in_title = True
        self._title_text = ''

    def depart_subtitle(self, node):
        self._in_title = False
        self._ensure_blank_line()
        level = min(self.section_level + 1, 6)
        prefix = '#' * level
        self._add_line(f'{prefix} {self._title_text}')
        self._add_line()

    # ── Paragraphs ───────────────────────────────────────────

    def visit_paragraph(self, node):
        if self._in_cell or self._in_title:
            return

    def depart_paragraph(self, node):
        if self._in_cell:
            return
        if self._in_title:
            return
        self._add('\n')
        # Add blank line after paragraph unless inside list item (single para)
        if not self.list_style:
            self._add('\n')

    # ── Text ─────────────────────────────────────────────────

    def visit_Text(self, node):
        text = node.astext()
        if self._in_title:
            self._title_text += text
            return
        if self._in_literal_block or self._in_raw:
            self._add(text)
            return
        if self._in_reference:
            self._ref_text += text
            return
        if self._in_cell:
            # Escape pipes in table cells
            text = text.replace('|', '\\|').replace('\n', ' ')
        self._add(text)

    def depart_Text(self, node):
        pass

    # ── Inline markup ────────────────────────────────────────

    def visit_emphasis(self, node):
        self._add('*')

    def depart_emphasis(self, node):
        self._add('*')

    def visit_strong(self, node):
        self._add('**')

    def depart_strong(self, node):
        self._add('**')

    def visit_literal(self, node):
        self._inline_code = True
        self._add('`')

    def depart_literal(self, node):
        self._add('`')
        self._inline_code = False

    def visit_title_reference(self, node):
        self._add('*')

    def depart_title_reference(self, node):
        self._add('*')

    def visit_subscript(self, node):
        self._add('<sub>')

    def depart_subscript(self, node):
        self._add('</sub>')

    def visit_superscript(self, node):
        self._add('<sup>')

    def depart_superscript(self, node):
        self._add('</sup>')

    # ── References & links ───────────────────────────────────

    def visit_reference(self, node):
        self._in_reference = True
        self._ref_text = ''
        uri = node.get('refuri', '')
        refid = node.get('refid', '')
        # Determine the URI
        if uri:
            if uri.endswith('.html') or '.html#' in uri:
                self._ref_uri = self._resolve_doc_ref(uri)
            else:
                self._ref_uri = uri
        elif refid:
            self._ref_uri = '#' + refid
        else:
            self._ref_uri = ''

    def depart_reference(self, node):
        self._in_reference = False
        text = self._ref_text.strip()
        uri = self._ref_uri
        if not text and not uri:
            return
        if uri and text:
            if uri == text:
                # Plain URL
                self._add(f'<{uri}>')
            else:
                self._add(f'[{text}]({uri})')
        elif uri:
            self._add(f'<{uri}>')
        else:
            self._add(text)

    def visit_target(self, node):
        # Skip HTML anchor tags — not needed in pure Markdown
        pass

    def depart_target(self, node):
        pass

    # ── Sphinx cross-references ──────────────────────────────

    def visit_pending_xref(self, node):
        # Sphinx resolves these during build, but for markdown we handle them directly
        self._in_reference = True
        self._ref_text = ''
        reftype = node.get('reftype', '')
        reftarget = node.get('reftarget', '')
        if reftype == 'doc':
            self._ref_uri = self._get_relpath(reftarget.lstrip('/'))
        elif reftype in ('ref', 'any'):
            # For :ref: links, try to resolve to a doc path
            if reftarget:
                self._ref_uri = '#' + reftarget.replace(' ', '-').lower()
            else:
                self._ref_uri = ''
        elif reftype == 'meth':
            self._ref_uri = ''  # Methods don't have file targets
        else:
            self._ref_uri = ''

    def depart_pending_xref(self, node):
        self._in_reference = False
        text = self._ref_text.strip()
        uri = self._ref_uri
        if uri and text:
            self._add(f'[{text}]({uri})')
        elif text:
            self._add(f'`{text}`')
        else:
            self._add(uri or '')

    # ── Sphinx desc (API descriptions) ───────────────────────

    def visit_desc(self, node):
        self._in_desc = True
        self._desc_type = node.get('objtype', '')
        self._ensure_blank_line()

    def depart_desc(self, node):
        self._in_desc = False
        self._add('\n')

    def visit_desc_signature(self, node):
        self._add('`')

    def depart_desc_signature(self, node):
        self._add('`\n')

    def visit_desc_name(self, node):
        self._add('**')

    def depart_desc_name(self, node):
        self._add('**')

    def visit_desc_addname(self, node):
        pass

    def depart_desc_addname(self, node):
        pass

    def visit_desc_parameterlist(self, node):
        self._add('(')

    def depart_desc_parameterlist(self, node):
        self._add(')')

    def visit_desc_parameter(self, node):
        if node.get('first', True) is False or \
           (node.parent and list(node.parent).index(node) > 0):
            self._add(', ')

    def depart_desc_parameter(self, node):
        pass

    def visit_desc_optional(self, node):
        self._add('[')

    def depart_desc_optional(self, node):
        self._add(']')

    def visit_desc_returns(self, node):
        self._add(' -> ')

    def depart_desc_returns(self, node):
        pass

    def visit_desc_annotation(self, node):
        pass

    def depart_desc_annotation(self, node):
        pass

    def visit_desc_content(self, node):
        self._add('\n')

    def depart_desc_content(self, node):
        pass

    def visit_desc_type(self, node):
        pass

    def depart_desc_type(self, node):
        pass

    def visit_desc_sig_space(self, node):
        self._add(' ')

    def depart_desc_sig_space(self, node):
        pass

    # ── Lists ────────────────────────────────────────────────

    def visit_bullet_list(self, node):
        self.list_style.append('bullet')
        self.list_counters.append(0)
        if self.body and not self.body[-1].endswith('\n'):
            self._add('\n')

    def depart_bullet_list(self, node):
        self.list_style.pop()
        self.list_counters.pop()
        if not self.list_style:
            self._add('\n')

    def visit_enumerated_list(self, node):
        self.list_style.append('enumerated')
        self.list_counters.append(0)
        if self.body and not self.body[-1].endswith('\n'):
            self._add('\n')

    def depart_enumerated_list(self, node):
        self.list_style.pop()
        self.list_counters.pop()
        if not self.list_style:
            self._add('\n')

    def visit_list_item(self, node):
        indent = '  ' * (len(self.list_style) - 1)
        if self.list_style[-1] == 'bullet':
            self._add(f'{indent}- ')
        else:
            self.list_counters[-1] += 1
            self._add(f'{indent}{self.list_counters[-1]}. ')

    def depart_list_item(self, node):
        if not self.body[-1].endswith('\n'):
            self._add('\n')

    # ── Definition lists ─────────────────────────────────────

    def visit_definition_list(self, node):
        self._in_definition_list = True
        self._ensure_blank_line()

    def depart_definition_list(self, node):
        self._in_definition_list = False
        self._add('\n')

    def visit_definition_list_item(self, node):
        pass

    def depart_definition_list_item(self, node):
        self._add('\n')

    def visit_term(self, node):
        self._add('**')

    def depart_term(self, node):
        self._add('**\n')

    def visit_classifier(self, node):
        self._add(' *')

    def depart_classifier(self, node):
        self._add('*')

    def visit_definition(self, node):
        self._add(': ')

    def depart_definition(self, node):
        pass

    # ── Field lists ──────────────────────────────────────────

    def visit_field_list(self, node):
        self._in_field_list = True
        self._ensure_blank_line()

    def depart_field_list(self, node):
        self._in_field_list = False
        self._add('\n')

    def visit_field(self, node):
        pass

    def depart_field(self, node):
        pass

    def visit_field_name(self, node):
        self._add('**')

    def depart_field_name(self, node):
        self._add(':** ')

    def visit_field_body(self, node):
        pass

    def depart_field_body(self, node):
        self._add('\n')

    # ── Option lists ─────────────────────────────────────────

    def visit_option_list(self, node):
        self._ensure_blank_line()

    def depart_option_list(self, node):
        self._add('\n')

    def visit_option_list_item(self, node):
        pass

    def depart_option_list_item(self, node):
        self._add('\n')

    def visit_option_group(self, node):
        self._add('`')

    def depart_option_group(self, node):
        self._add('`')

    def visit_option(self, node):
        pass

    def depart_option(self, node):
        pass

    def visit_option_string(self, node):
        pass

    def depart_option_string(self, node):
        pass

    def visit_option_argument(self, node):
        self._add(' ')

    def depart_option_argument(self, node):
        pass

    def visit_description(self, node):
        self._add(' : ')

    def depart_description(self, node):
        pass

    # ── Code blocks ──────────────────────────────────────────

    def visit_literal_block(self, node):
        self._in_literal_block = True
        self._ensure_blank_line()
        lang = node.get('language', '')
        if not lang:
            classes = node.get('classes', [])
            for c in classes:
                if c not in ('highlight', 'code'):
                    lang = c
                    break
        # Sphinx uses 'default' for :: blocks — this maps to python (Pygments default)
        if lang == 'default':
            lang = 'python'
        self._add(f'```{lang}\n')

    def depart_literal_block(self, node):
        self._in_literal_block = False
        if not self.body[-1].endswith('\n'):
            self._add('\n')
        self._add('```\n\n')

    def visit_doctest_block(self, node):
        self.visit_literal_block(node)

    def depart_doctest_block(self, node):
        self.depart_literal_block(node)

    def visit_inline(self, node):
        classes = node.get('classes', [])
        if 'guilabel' in classes or 'menuselection' in classes:
            self._add('**')
        elif 'command' in classes or 'file' in classes:
            self._add('`')

    def depart_inline(self, node):
        classes = node.get('classes', [])
        if 'guilabel' in classes or 'menuselection' in classes:
            self._add('**')
        elif 'command' in classes or 'file' in classes:
            self._add('`')

    def visit_highlightlang(self, node):
        raise nodes.SkipNode

    # ── Images ───────────────────────────────────────────────

    def visit_image(self, node):
        uri = node.get('uri', '')
        alt = node.get('alt', '')
        self._ensure_blank_line()
        self._add(f'![{alt}]({uri})\n\n')
        raise nodes.SkipNode

    def visit_figure(self, node):
        pass

    def depart_figure(self, node):
        pass

    def visit_caption(self, node):
        self._add('*')

    def depart_caption(self, node):
        self._add('*\n\n')

    def visit_legend(self, node):
        pass

    def depart_legend(self, node):
        pass

    # ── Tables ───────────────────────────────────────────────

    def visit_table(self, node):
        self._in_table = True
        self._table_rows = []
        self._ensure_blank_line()

    def depart_table(self, node):
        self._in_table = False
        if not self._table_rows:
            return
        # Compute column widths
        num_cols = max(len(row) for row in self._table_rows) if self._table_rows else 0
        col_widths = [3] * num_cols
        for row in self._table_rows:
            for i, cell in enumerate(row):
                if i < num_cols:
                    col_widths[i] = max(col_widths[i], len(cell))
        # Output table
        for row_idx, row in enumerate(self._table_rows):
            cells = []
            for i in range(num_cols):
                cell = row[i] if i < len(row) else ''
                cells.append(cell.ljust(col_widths[i]))
            self._add('| ' + ' | '.join(cells) + ' |\n')
            if row_idx == 0:
                sep = ['---'.ljust(col_widths[i], '-') for i in range(num_cols)]
                self._add('| ' + ' | '.join(sep) + ' |\n')
        self._add('\n')

    def visit_tgroup(self, node):
        pass

    def depart_tgroup(self, node):
        pass

    def visit_colspec(self, node):
        raise nodes.SkipNode

    def visit_thead(self, node):
        pass

    def depart_thead(self, node):
        pass

    def visit_tbody(self, node):
        pass

    def depart_tbody(self, node):
        pass

    def visit_row(self, node):
        self._current_row = []

    def depart_row(self, node):
        self._table_rows.append(self._current_row)

    def visit_entry(self, node):
        self._in_cell = True
        self._current_cell = []

    def depart_entry(self, node):
        self._in_cell = False
        cell_text = ''.join(self._current_cell).strip().replace('\n', ' ')
        self._current_row.append(cell_text)

    # ── Admonitions ──────────────────────────────────────────

    def visit_admonition(self, node):
        self._start_admonition('note', node)

    def _start_admonition(self, admonition_type, node):
        self._in_admonition = True
        self._admonition_type = ADMONITION_MAP.get(admonition_type, admonition_type.title())
        self._admonition_body = []

    def depart_admonition(self, node):
        self._finish_admonition()

    def _finish_admonition(self):
        self._in_admonition = False
        body_text = ''.join(self._admonition_body).strip()
        self._ensure_blank_line()
        self._add(f'> **{self._admonition_type}**\n')
        for line in body_text.split('\n'):
            self._add(f'> {line}\n')
        self._add('\n')
        self._admonition_body = []

    def visit_note(self, node):
        self._start_admonition('note', node)

    def depart_note(self, node):
        self._finish_admonition()

    def visit_warning(self, node):
        self._start_admonition('warning', node)

    def depart_warning(self, node):
        self._finish_admonition()

    def visit_tip(self, node):
        self._start_admonition('tip', node)

    def depart_tip(self, node):
        self._finish_admonition()

    def visit_important(self, node):
        self._start_admonition('important', node)

    def depart_important(self, node):
        self._finish_admonition()

    def visit_danger(self, node):
        self._start_admonition('danger', node)

    def depart_danger(self, node):
        self._finish_admonition()

    def visit_caution(self, node):
        self._start_admonition('caution', node)

    def depart_caution(self, node):
        self._finish_admonition()

    def visit_attention(self, node):
        self._start_admonition('attention', node)

    def depart_attention(self, node):
        self._finish_admonition()

    def visit_hint(self, node):
        self._start_admonition('hint', node)

    def depart_hint(self, node):
        self._finish_admonition()

    def visit_error(self, node):
        self._start_admonition('error', node)

    def depart_error(self, node):
        self._finish_admonition()

    # ── Custom Odoo admonitions (example, exercise) ──────────

    def _visit_custom_admonition(self, node, admonition_type):
        self._start_admonition(admonition_type, node)

    def _depart_custom_admonition(self, node):
        self._finish_admonition()

    # ── See also ─────────────────────────────────────────────

    def visit_seealso(self, node):
        self._start_admonition('seealso', node)

    def depart_seealso(self, node):
        self._finish_admonition()

    # ── Toctree ──────────────────────────────────────────────

    def visit_compound(self, node):
        classes = node.get('classes', [])
        if 'toctree-wrapper' in classes:
            self._in_toctree = True
            self._toc_entries = []

    def depart_compound(self, node):
        if self._in_toctree:
            self._in_toctree = False
            if self._toc_entries:
                self._ensure_blank_line()
                for title, ref in self._toc_entries:
                    md_ref = self._resolve_doc_ref(ref)
                    self._add_line(f'- [{title}]({md_ref})')
                self._add('\n')

    # ── Transitions (horizontal rules) ───────────────────────

    def visit_transition(self, node):
        self._ensure_blank_line()
        self._add_line('---')
        self._add_line()

    def depart_transition(self, node):
        pass

    # ── Block quotes ─────────────────────────────────────────

    def visit_block_quote(self, node):
        # We'll handle via indentation approach using > prefix
        pass

    def depart_block_quote(self, node):
        pass

    # ── Line blocks ──────────────────────────────────────────

    def visit_line_block(self, node):
        self._in_line_block = True
        self._line_block_indent += 1

    def depart_line_block(self, node):
        self._line_block_indent -= 1
        if self._line_block_indent <= 0:
            self._in_line_block = False
            self._line_block_indent = 0
            self._add('\n')

    def visit_line(self, node):
        if self._in_line_block:
            indent = '  ' * (self._line_block_indent - 1)
            self._add(indent)

    def depart_line(self, node):
        self._add('  \n')  # two spaces for hard line break

    # ── Raw content ──────────────────────────────────────────

    def visit_raw(self, node):
        fmt = node.get('format', '')
        self._raw_format = fmt
        if fmt == 'html':
            self._in_raw = True
            self._ensure_blank_line()
        else:
            raise nodes.SkipNode

    def depart_raw(self, node):
        if self._in_raw:
            self._in_raw = False
            self._add('\n\n')

    # ── Comments ─────────────────────────────────────────────

    def visit_comment(self, node):
        self._ensure_blank_line()
        self._add('<!-- ')

    def depart_comment(self, node):
        self._add(' -->\n\n')

    # ── Footnotes ────────────────────────────────────────────

    def visit_footnote(self, node):
        self._in_footnote = True
        names = node.get('names', [])
        ids = node.get('ids', [])
        self._footnote_label = (names[0] if names else '') or (ids[0] if ids else 'fn')

    def depart_footnote(self, node):
        self._in_footnote = False

    def visit_footnote_reference(self, node):
        refid = node.get('refid', '')
        self._add(f'[^{refid}]')
        raise nodes.SkipNode

    def visit_label(self, node):
        if self._in_footnote:
            self._footnotes.append(f'[^{self._footnote_label}]: ')
            raise nodes.SkipNode

    def depart_label(self, node):
        pass

    # ── Rubric ───────────────────────────────────────────────

    def visit_rubric(self, node):
        self._in_rubric = True
        self._in_title = True
        self._title_text = ''

    def depart_rubric(self, node):
        self._in_title = False
        self._in_rubric = False
        self._ensure_blank_line()
        self._add_line(f'**{self._title_text}**')
        self._add_line()

    # ── Topic / sidebar ──────────────────────────────────────

    def visit_topic(self, node):
        self._in_topic = True

    def depart_topic(self, node):
        self._in_topic = False

    def visit_sidebar(self, node):
        self._in_sidebar = True

    def depart_sidebar(self, node):
        self._in_sidebar = False

    # ── Containers ───────────────────────────────────────────

    def visit_container(self, node):
        pass

    def depart_container(self, node):
        pass

    # ── Problematic / system_message / generated ─────────────

    def visit_problematic(self, node):
        self._add('`')

    def depart_problematic(self, node):
        self._add('`')

    def visit_system_message(self, node):
        raise nodes.SkipNode

    def visit_generated(self, node):
        raise nodes.SkipNode

    # ── Sphinx-specific nodes ────────────────────────────────

    def visit_index(self, node):
        raise nodes.SkipNode

    def visit_tabular_col_spec(self, node):
        raise nodes.SkipNode

    def visit_meta(self, node):
        raise nodes.SkipNode

    def visit_only(self, node):
        pass

    def depart_only(self, node):
        pass

    def visit_versionmodified(self, node):
        self._add('*')

    def depart_versionmodified(self, node):
        self._add('*\n\n')

    def visit_production(self, node):
        raise nodes.SkipNode

    def visit_productionlist(self, node):
        raise nodes.SkipNode

    def visit_substitution_definition(self, node):
        raise nodes.SkipNode

    def visit_substitution_reference(self, node):
        pass

    def depart_substitution_reference(self, node):
        pass

    # ── Toctree node (from Sphinx addnodes) ──────────────────

    def visit_toctree(self, node):
        """Handle Sphinx toctree directive - extract entries as links."""
        if not self._in_toctree:
            self._ensure_blank_line()
        entries = node.get('entries', [])
        for title, docname in entries:
            if not title:
                # Use the document title - we'll just use the docname as fallback
                title = docname.split('/')[-1].replace('_', ' ').replace('-', ' ').title()
            md_ref = self._get_relpath(docname)
            self._add_line(f'- [{title}]({md_ref})')
        if entries:
            self._add('\n')
        raise nodes.SkipNode

    # ── Sphinx compact paragraph ─────────────────────────────

    def visit_compact_paragraph(self, node):
        pass

    def depart_compact_paragraph(self, node):
        pass

    # ── Sphinx download reference ────────────────────────────

    def visit_download_reference(self, node):
        self._in_reference = True
        self._ref_text = ''
        self._ref_uri = node.get('reftarget', '')

    def depart_download_reference(self, node):
        self._in_reference = False
        text = self._ref_text.strip() or self._ref_uri
        self._add(f'[{text}]({self._ref_uri})')

    # ── Sphinx number_reference ──────────────────────────────

    def visit_number_reference(self, node):
        self._in_reference = True
        self._ref_text = ''
        self._ref_uri = node.get('refuri', '#')

    def depart_number_reference(self, node):
        self._in_reference = False
        text = self._ref_text.strip() or '#'
        self._add(f'[{text}]({self._ref_uri})')

    # ── Sphinx glossary ──────────────────────────────────────

    def visit_glossary(self, node):
        pass

    def depart_glossary(self, node):
        pass

    # ── Sphinx manpage ───────────────────────────────────────

    def visit_manpage(self, node):
        self._add('`')

    def depart_manpage(self, node):
        self._add('`')

    # ── Abbreviation ─────────────────────────────────────────

    def visit_abbreviation(self, node):
        pass

    def depart_abbreviation(self, node):
        explanation = node.get('explanation', '')
        if explanation:
            self._add(f' ({explanation})')

    # ── Centered ─────────────────────────────────────────────

    def visit_centered(self, node):
        pass

    def depart_centered(self, node):
        pass

    # ── Math ─────────────────────────────────────────────────

    def visit_math(self, node):
        self._add(f'${node.astext()}$')
        raise nodes.SkipNode

    def visit_math_block(self, node):
        self._ensure_blank_line()
        self._add(f'$$\n{node.astext()}\n$$\n\n')
        raise nodes.SkipNode

    def visit_displaymath(self, node):
        self._ensure_blank_line()
        latex = node.get('latex', node.astext())
        self._add(f'$$\n{latex}\n$$\n\n')
        raise nodes.SkipNode

    # ── Containers and generic block handling ────────────────

    def visit_decoration(self, node):
        raise nodes.SkipNode

    def visit_header(self, node):
        raise nodes.SkipNode

    def visit_footer(self, node):
        raise nodes.SkipNode

    # ── Pending nodes ────────────────────────────────────────

    def visit_pending(self, node):
        raise nodes.SkipNode

    # ── Citation ─────────────────────────────────────────────

    def visit_citation(self, node):
        pass

    def depart_citation(self, node):
        pass

    def visit_citation_reference(self, node):
        self._add('[')

    def depart_citation_reference(self, node):
        self._add(']')

    # ── Odoo custom extension nodes ──────────────────────────

    # Cards extension nodes (cards/__init__.py)
    def _visit_card_div(self, node):
        """Handle cards.Div - row container for card grid."""
        pass

    def _depart_card_div(self, node):
        pass

    def _visit_card_a(self, node):
        """Handle cards.A - card link wrapper. Extract href for the card."""
        href = node.get('href', '')
        if href:
            self._in_card = True
            self._card_target = href.replace('.html', '.md')

    def _depart_card_a(self, node):
        if self._in_card:
            self._in_card = False
            if self._card_title and self._card_target:
                self._add(f'[{self._card_title}]({self._card_target})')
            self._card_title = ''
            self._card_target = ''
            self._add('\n')

    def _visit_card_h4(self, node):
        """Handle cards.H4 - card title."""
        self._in_title = True
        self._title_text = ''

    def _depart_card_h4(self, node):
        self._in_title = False
        if self._in_card:
            self._card_title = self._title_text

    def _visit_card_span(self, node):
        """Handle cards.Span - card badge/tag."""
        pass

    def _depart_card_span(self, node):
        pass

    # Spoilers extension nodes (spoilers/__init__.py)
    def _visit_spoiler_container(self, node):
        """Handle spoilers.Container - accordion containers."""
        classes = node.get('classes', [])
        if 'o_spoiler' in classes:
            self._in_spoiler = True
            self._spoiler_title = ''
            self._ensure_blank_line()
        elif 'accordion-body' in classes:
            pass  # content container, just pass through

    def _depart_spoiler_container(self, node):
        classes = node.get('classes', [])
        if 'o_spoiler' in classes:
            self._in_spoiler = False
            self._add('\n')

    def _visit_spoiler_header(self, node):
        """Handle spoilers.Header - accordion header."""
        pass

    def _depart_spoiler_header(self, node):
        pass

    def _visit_spoiler_button(self, node):
        """Handle spoilers.Button - accordion toggle button."""
        pass

    def _depart_spoiler_button(self, node):
        # The button text is the spoiler title
        pass

    # HTML domain nodes (html_domain/__init__.py)
    def _visit_html_div(self, node):
        pass

    def _depart_html_div(self, node):
        pass

    def _visit_html_address(self, node):
        pass

    def _depart_html_address(self, node):
        self._add('\n')

    def _visit_html_inline(self, node):
        """Handle inline HTML elements (mark, ins, del, s, u, small, kbd, var, samp)."""
        pass

    def _depart_html_inline(self, node):
        pass

    def _visit_html_cite(self, node):
        pass

    def _depart_html_cite(self, node):
        pass

    # Custom admonitions nodes (custom_admonitions/__init__.py)
    def _visit_example(self, node):
        self._start_admonition('example', node)

    def _depart_example(self, node):
        self._finish_admonition()

    def _visit_exercise(self, node):
        self._start_admonition('exercise', node)

    def _depart_exercise(self, node):
        self._finish_admonition()

    def _visit_dfn_span(self, node):
        pass

    def _depart_dfn_span(self, node):
        pass

    # ── Generic catch-all for unknown nodes ──────────────────

    def unknown_visit(self, node):
        node_name = node.__class__.__name__
        logger.debug("Unknown node type: %s", node_name)

    def unknown_departure(self, node):
        pass
