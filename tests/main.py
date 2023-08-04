import re
import sys
from itertools import chain
from unittest.mock import patch

import sphinxlint

import checkers


CUSTOM_RST_DIRECTIVES = [
    'card', 'cards',  # cards
    'example', 'exercise',  # custom_admonitions
    'spoiler',  # spoilers
    'tab', 'tabs', 'group-tab', 'code-tab',  # sphinx_tabs
]


def run_additional_checks(argv=None):
    _enabled_checkers, args = sphinxlint.parse_args(argv)
    for path in chain.from_iterable(sphinxlint.walk(path, args.ignore) for path in args.paths):
        checkers.resource_files.check_image_size(path)


"""
The following checkers are selected for `make test`.
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
---
- all the checkers defined in checkers/* files.

The following checkers are only selected for `make review`.
- line-too-long: Check for line length.
- early-line-break: Check for early line breaks.

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
        run_additional_checks()
        sys.exit(sphinxlint.main())
