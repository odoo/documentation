import re
import sys

import sphinxlint
from unittest.mock import patch


CUSTOM_RST_DIRECTIVES = [
    'card', 'cards',  # cards
    'example', 'exercise',  # custom_admonitions
    'spoiler',  # spoilers
    'tab', 'tabs', 'group-tab', 'code-tab',  # sphinx_tabs
]

ALLOWED_HEADING_CHARS = ['=', '-', '~', '*', '^']  # In the same order as in the guidelines.
MAIN_HEADING_CHAR = ALLOWED_HEADING_CHARS[0]
MAIN_HEADING_RE = re.compile(rf'{MAIN_HEADING_CHAR}+\n[^\n]+\n{MAIN_HEADING_CHAR}+\n')
HEADING_DELIMITER_RE = re.compile(
    '^(' + '|'.join(rf'\{char}+' for char in ALLOWED_HEADING_CHARS) + ')\n$'
)
FORBIDDEN_HEADING_CHARS = [
    '#', '"', '\'', '+', '`', '@', '!', ',', '.', '/'
]  # Exhaustive list at https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#sections.
FORBIDDEN_HEADING_DELIMITER_RE = re.compile(
    '^(' + '|'.join(rf'\{char}+' for char in FORBIDDEN_HEADING_CHARS) + ')\n$'
)


@sphinxlint.checker('.rst')
def check_heading_delimiters_characters(file, lines, options=None):
    """ Check that heading delimiters use only allowed characters. """
    for lno, line in enumerate(lines):
        if FORBIDDEN_HEADING_DELIMITER_RE.search(line):
            yield lno + 1, f"illegal use of the character {line[0]} in heading delimiters; use" \
                           f" any of {', '.join(ALLOWED_HEADING_CHARS)} instead"


@sphinxlint.checker('.rst')
def check_heading_delimiters_order(file, lines, options=None):
    """ Check that heading delimiters appear in the correct order. """
    last_delimiter_char_index = -1  # The index of the heading delimiter char in the ordered list.
    for lno, line in enumerate(lines):
        if HEADING_DELIMITER_RE.search(line):  # The line is a heading delimiter.
            delimiter_char = line[0]
            delimiter_char_index = ALLOWED_HEADING_CHARS.index(delimiter_char)
            if delimiter_char_index > last_delimiter_char_index + 1:
                # There is a leap of more than 1 in the chars used for the heading delimiters.
                last_delimiter_char = ALLOWED_HEADING_CHARS[last_delimiter_char_index] \
                    if last_delimiter_char_index != -1 else None
                yield lno + 1, f"the heading delimiter {delimiter_char} is not allowed after a" \
                               f" heading with {last_delimiter_char} as delimiter; follow this" \
                               f" order: {', '.join(ALLOWED_HEADING_CHARS)}"
            last_delimiter_char_index = delimiter_char_index


@sphinxlint.checker('.rst')
def check_max_one_main_heading(file, lines, options=None):
    """ Check that there is at most one main heading (h1) per document. """
    code = "".join(lines)
    nb_main_headings = len(MAIN_HEADING_RE.findall(code))
    if nb_main_headings > 1:
        yield 0, "the document should have only one main heading"


@sphinxlint.checker('.rst')
def check_min_one_main_heading(file, lines, options=None):
    """ Check that there is a main heading (h1) on document when it contains other headings. """
    heading_found, main_heading_found = False, False
    for lno, line in enumerate(lines):
        if HEADING_DELIMITER_RE.search(line):  # The line is a heading delimiter.
            heading_found = True
            if MAIN_HEADING_RE.search(''.join(lines[lno - 2:lno + 1])):  # Lower delimiter of h1.
                main_heading_found = True
                break

    if heading_found and not main_heading_found:
        yield 0, "the document should have a main heading (h1)"


@sphinxlint.checker('.rst')
def check_heading_delimiters_length(file, lines, options=None):
    """ Check that heading delimiters have the same length as their heading. """
    for lno, line in enumerate(lines):
        if HEADING_DELIMITER_RE.search(line):  # The line is a heading delimiter.
            if MAIN_HEADING_RE.search(''.join(lines[lno:lno+3])):  # Upper delimiter of h1.
                heading_lno = lno + 1
            else:  # Lower delimiter of a heading of any level.
                heading_lno = lno - 1
            if len(line.rstrip()) != len(lines[heading_lno].rstrip()):
                yield lno + 1, "the heading delimiter should have the same length as its heading"


@sphinxlint.checker('.rst')
def check_heading_spacing(file, lines, options=None):
    """ Check that headings are preceded and followed by at least one blank line. """
    for lno, line in enumerate(lines):
        if HEADING_DELIMITER_RE.search(line):  # The line is a heading delimiter.
            if MAIN_HEADING_RE.search(''.join(lines[lno:lno+3])):  # Upper delimiter of h1.
                continue  # We handle this heading via its lower delimiter.

            heading_lno = lno - 1
            if MAIN_HEADING_RE.search(''.join(lines[lno-2:lno+1])):  # Lower delimiter of h1.
                main_heading = True
            else:  # Lower delimiter of a heading of level 2-6.
                main_heading = False
            lno_before_heading = heading_lno - (2 if main_heading else 1)
            if lno_before_heading >= 0 and lines[lno_before_heading] != '\n':
                # Heading doesn't have to be preceded by a blank line if on first line of the file.
                yield heading_lno + 1, "the heading should be preceded by a blank line"
            if lines[heading_lno + 2] != '\n':
                yield heading_lno + 1, "the heading should be followed by a blank line"


"""
The following checkers are selected.

Base checkers:
- backtick-before-role: Search for roles preceded by a backtick.
- bad-dedent: Check for mis-alignment in indentation in code blocks.
- carriage-return: Check for carriage returns (\r) in lines.
- directive-missing-colons: Search for directive wrongly typed as comments.
- directive-with-three-dots: Search for directives with three dots instead of two.
- horizontal-tab: Check for horizontal tabs (\t) in lines.
- hyperlink-reference-missing-backtick: Search for missing backticks in front of hyperlink
  references.
- missing-backtick-after-role: Search for roles missing their closing backticks.
- missing-colon-in-role: Search for missing colons in roles.
- missing-final-newline: Check that the last line of the file ends with a newline.
- missing-space-after-literal: Search for inline literals immediately followed by a character.
- missing-space-after-role: Search for roles immediately followed by a character.
- missing-space-before-default-role: Search for missing spaces before default role.
- missing-space-before-role: Search for missing spaces before roles.
- missing-space-in-hyperlink: Search for hyperlinks missing a space.
- missing-underscore-after-hyperlink: Search for hyperlinks missing underscore after their closing
  backtick.
- python-syntax: Search invalid syntax in Python examples.
- role-with-double-backticks: Search for roles with double backticks.
- role-without-backticks: Search roles without backticks.
- trailing-whitespace: Check for trailing whitespaces at end of lines.
- unbalanced-inline-literals-delimiters: Search for unbalanced inline literals delimiters.

Optional checkers:
- line-too-long: Check for line length; this checker is not run by default.

Custom checkers:
- all the checkers defined in this file.
"""
if __name__ == '__main__':
    # Patch sphinxlint's global constants to include our custom directives and parse their content.
    with patch(
        'sphinxlint.DIRECTIVES_CONTAINING_RST',
        sphinxlint.DIRECTIVES_CONTAINING_RST + CUSTOM_RST_DIRECTIVES,
    ), patch(
        'sphinxlint.DIRECTIVES_CONTAINING_RST_RE',
        '(' + '|'.join(sphinxlint.DIRECTIVES_CONTAINING_RST) + ')',
    ), patch(
        'sphinxlint.ALL_DIRECTIVES',
        '(' + '|'.join(sphinxlint.DIRECTIVES_CONTAINING_RST
            + sphinxlint.DIRECTIVES_CONTAINING_ARBITRARY_CONTENT)
            + ')',
    ), patch(
        'sphinxlint.seems_directive_re',
        re.compile(rf"^\s*(?<!\.)\.\. {sphinxlint.ALL_DIRECTIVES}([^a-z:]|:(?!:))"),
    ), patch(
        'sphinxlint.three_dot_directive_re',
        re.compile(rf'\.\.\. {sphinxlint.ALL_DIRECTIVES}::'),
    ):
        sys.exit(sphinxlint.main())
