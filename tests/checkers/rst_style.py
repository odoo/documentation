import re

import sphinxlint


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
GIT_CONFLICT_MARKERS = ['<' * 7, '>' * 7]
ALLOWED_EARLY_BREAK_RE = re.compile(r'^\s*(\.\. |:\S+:\s+)', re.IGNORECASE)  # Contains markup.


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


@sphinxlint.checker('.rst', enabled=False)
def check_early_line_breaks(file, lines, options=None):
    """ Checks that no line breaks early, i.e., before using as much of the max length as possible.

    Note: `make review` only
    """

    def is_valid_line(line_, forbidden_starting_chars_):
        """ Allowed to break early - handle tables and bullets """
        return not ALLOWED_EARLY_BREAK_RE.search(line_) \
            and not HEADING_DELIMITER_RE.search(line_) \
            and not line_.startswith('\n') \
            and not line_.lstrip().startswith(forbidden_starting_chars_) \
            and len(line_) <= options.max_line_length

    def get_next_line_first_word(next_line_):
        """ Return the first word of the next line """
        if next_line_.startswith(' '):
            next_line_dict = {
                '*': lambda x: x.split('* ', 1)[0],
                '-': lambda x: x.split('- ', 1)[0],
                '#.': lambda x: x.split('#. ', 1)[0],
                'default': lambda x: x.split(' ', 1)[0]
            }
            return next_line_dict.get(next_line_.lstrip()[:2], next_line_dict["default"])(
                next_line_.lstrip()
            )
        else:
            return next_line_.split(' ', 1)[0]

    for lno, line in enumerate(lines):
        if lno + 1 < len(lines):
            next_line = lines[lno + 1]
            if (is_valid_line(line, ('+', '|'))
                and is_valid_line(next_line, ('+', '|', '- ', '* ', '#. '))
            ):
                current_line_remaining_space = options.max_line_length - len(line)
                next_line_first_word = get_next_line_first_word(next_line)
                if current_line_remaining_space > len(next_line_first_word):
                    yield lno + 1, f"consider moving \"{next_line_first_word}\" to line {lno + 1}"


@sphinxlint.checker('.rst', '.py', '.js', '.xml', '.css', '.sass', '.less', '.po', '.pot')
def check_git_conflict_markers(file, lines, options=None):
    """ Check that there are no conflict markers. """
    for lno, line in enumerate(lines):
        if any(marker in line for marker in GIT_CONFLICT_MARKERS):
            yield lno + 1, "the git conflict should be resolved"
