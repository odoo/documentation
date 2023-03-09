import re
from pathlib import Path

import sphinxlint


REDIRECT_RULE_RE = re.compile(r'^[ \t]*([\w\-/]+\.rst)[ \t]+([\w\-/]+\.rst)[ \t]*(?:#.*)?$')
REDIRECTS_FILE_VERSION_RE = re.compile('(?:redirects/)?(?:saas-)?(\d\d\.\d)\.txt')


@sphinxlint.checker('.txt')
def check_redirect_rules_format(file, lines, options=None):
    """ Check that redirect rules are correctly formatted. """
    if file.startswith('redirects/'):  # Only check text files in the /redirects folder.
        for lno, line in enumerate(lines):
            if not line.rstrip() or line.startswith('#'):
                continue
            if not REDIRECT_RULE_RE.search(line):
                yield lno + 1, "invalid redirect rule format; learn more at redirects/MANUAL.md"


@sphinxlint.checker('.txt')
def check_redirect_rules_target(file, lines, options=None):
    """ Check that redirect rules refer to existing files. """
    def get_redirects_file_version(file_name_):
        match_ = REDIRECTS_FILE_VERSION_RE.search(file_name_)
        if match_:
            return float(match_.group(1))
        return -1.0

    if file.startswith('redirects/'):  # Only check text files in the /redirects folder.
        # Find the current version, which is that of the file with the latest version.
        redirects_dir = Path('redirects')
        latest_redirects_version = 0.0
        for redirect_file in redirects_dir.iterdir():
            if redirect_file.is_dir() or redirect_file.suffix != '.txt':
                continue
            latest_redirects_version = max(
                latest_redirects_version, get_redirects_file_version(redirect_file.name)
            )

        # Only check the existence of the redirection target if we are in the right version.
        current_file_version = get_redirects_file_version(file)
        if current_file_version < latest_redirects_version:
            return

        for lno, line in enumerate(lines):
            if not line.rstrip() or line.startswith('#'):
                continue
            match_res = REDIRECT_RULE_RE.search(line)
            if match_res:
                _old_path, new_path = match_res.groups()
                redirect_file = Path('content') / new_path
                if not redirect_file.is_file():
                    yield lno + 1, f"the redirect rule targets the non-existing file {new_path}"
