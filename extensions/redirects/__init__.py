# Adapted from https://github.com/sphinx-contrib/redirects

import re
from pathlib import Path

from sphinx.builders import html as builders
from sphinx.util import logging as logging

TEMPLATE = '<html><head><meta http-equiv="refresh" content="0; url=%s"/></head></html>'

logger = logging.getLogger(__name__)


def generate_redirects(app):
    redirects_dir = Path(app.confdir, app.config.redirects_dir)
    if not redirects_dir.exists():
        logger.warning("Could not find redirects dir at '%s'", redirects_dir)
        return

    if not type(app.builder) == builders.StandaloneHTMLBuilder:
        logger.info("Redirects are only supported by the 'html' builder. Skipping...")
        return

    source_suffix = next(iter(app.config.source_suffix))
    escaped_source_suffix = source_suffix.replace('.', r'\.')
    pattern = re.compile(
        r'^[ \t]*([\w\-/]+{0})[ \t]+([\w\-/]+{0})[ \t]*(?:#.*)?$'.format(escaped_source_suffix)
    )
    for redirects_file in redirects_dir.iterdir():
        if redirects_file.is_dir() or redirects_file.suffix != '.txt':
            continue

        with redirects_file.open(mode='r') as f:
            for line in f.readlines():
                # Exclude comment or empty lines.
                if not line.rstrip() or line.startswith('#'):
                    continue

                # Match a redirect rule in the line.
                match_result = pattern.match(line)

                # Exclude malformed rules.
                if not match_result:
                    logger.error(
                        "Ignoring malformed redirect rule: %s\n"
                        "See redirects/MANUAL.md to learn how to make redirect rules.", line
                    )
                    continue

                # Parse the rule.
                from_file, to_file = match_result.groups()
                logger.debug("Redirecting '%s' to '%s'", from_file, to_file)

                # Prepare the source and destination paths.
                to_path_prefix = '../' * from_file.count('/')
                from_html_file = from_file.replace(source_suffix, '.html')
                to_html_file = to_path_prefix + to_file.replace(source_suffix, '.html')
                absolute_from_path = Path(app.builder.outdir) / from_html_file

                # Create the redirection.
                absolute_from_path.parent.mkdir(parents=True, exist_ok=True)
                absolute_from_path.write_text(TEMPLATE % to_html_file)


def setup(app):
    app.add_config_value('redirects_dir', 'redirects', 'env')
    app.connect('builder-inited', generate_redirects)

    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True
    }
