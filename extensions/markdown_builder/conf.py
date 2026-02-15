"""
Sphinx configuration for Markdown build.
This file imports and adapts the base configuration for markdown output.
"""

import os
import sys
from pathlib import Path

# Add documentation directory to path so we can import from it
# This file is at extensions/markdown_builder/conf.py, so parent.parent.parent = documentation/
_doc_dir = Path(__file__).resolve().parent.parent.parent
sys.path.insert(0, str(_doc_dir))
sys.path.insert(0, str(_doc_dir / 'extensions'))

# Change CWD to the documentation/ directory so that the base conf.py
# resolves relative paths (Path('odoo'), Path('../odoo')) correctly.
os.chdir(str(_doc_dir))

# Import everything from the base conf
from conf import *  # noqa: F401, F403

# Override the extensions list: remove HTML-only extensions
_html_only_extensions = {
    'odoo_theme',
    'redirects',
    'github_link',
    'sphinx.ext.linkcode',
}

extensions = [ext for ext in extensions if ext not in _html_only_extensions]

# Add our custom markdown builder
extensions.append('markdown_builder')

# Use the default Sphinx theme (not odoo_theme which requires HTML)
html_theme = 'basic'
html_theme_path = []

# Filter out 'duplicate object description' warnings (from Odoo source autodoc)
import logging as _logging

class _DuplicateObjectFilter(_logging.Filter):
    def filter(self, record):
        return 'duplicate object description' not in record.getMessage()

for _logger_name in ('sphinx.domains.python', 'sphinx'):
    _logging.getLogger(_logger_name).addFilter(_DuplicateObjectFilter())

# Disable HTML-specific settings
html_scaled_image_link = False
html_permalinks = False
html_static_path = []
html_js_files = []
html_css_files = []
html_favicon = None
templates_path = []

# Override setup to skip HTML-only event handlers
_original_setup = setup  # noqa: F405


def setup(app):
    """Modified setup that skips HTML-only event handlers."""
    app.add_config_value('project_root', None, 'env')
    app.add_config_value('canonical_version', None, 'env')
    app.add_config_value('versions', None, 'env')
    app.add_config_value('languages', None, 'env')
    app.add_config_value('is_remote_build', None, 'env')
    app.add_config_value('source_read_replace_vals', {}, 'env')
    app.connect('source-read', source_read_replace)  # noqa: F405
    app.connect('object-description-transform', upgrade_util_signature_rewrite)  # noqa: F405

    from pygments.lexers import JsonLexer, XmlLexer
    app.add_lexer('json', JsonLexer)
    app.add_lexer('xml', XmlLexer)

    # Add condition option on directives (same as base conf)
    app.add_config_value('odoo_dir_in_path', None, 'env')

    def context_eval(expr):
        return eval(expr, {confval.name: confval.value for confval in app.config})

    import sphinx
    import docutils

    def patch(to_patch):
        to_patch.option_spec['condition'] = context_eval
        original_run = to_patch.run
        def new_run(self):
            if not self.options.get('condition', True):
                return []
            return original_run(self)
        to_patch.run = new_run

    for to_patch in (
        sphinx.directives.code.LiteralInclude,
        docutils.parsers.rst.directives.tables.CSVTable,
    ):
        patch(to_patch)

    # Register the :icon: role (originally defined in odoo_theme which is excluded).
    # In Markdown output, we render icons as bold text with the icon name.
    from docutils import nodes
    from docutils.parsers.rst import roles

    def icon_role_md(name, rawtext, text, lineno, inliner, options=None, content=None):
        """Markdown-compatible :icon: role — renders icon classes as descriptive text."""
        # Extract the meaningful part of the icon name (e.g., fa-pencil -> pencil)
        icon_name = text.strip().split()[-1]  # take last class if multiple
        for prefix in ('fa-', 'oi-', 'os-'):
            if icon_name.startswith(prefix):
                icon_name = icon_name[len(prefix):]
                break
        # Render as a simple italic marker
        node = nodes.emphasis('', f'({icon_name})')
        return [node], []

    roles.register_canonical_role('icon', icon_role_md)
