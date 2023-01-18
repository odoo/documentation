import os
import re
import sys
from pathlib import Path

import sphinx
from pygments.lexers import JsonLexer, XmlLexer
from sphinx.util import logging

_logger = logging.getLogger(__name__)


#=== General configuration ===#

# General information about the project.
project = 'Odoo'
copyright = 'Odoo S.A.'

# `version` is the version info for the project being documented, acts as replacement for |version|,
# also used in various other places throughout the built documents.
# `release` is the full version, including alpha/beta/rc tags. Acts as replacement for |release|.
version = release = '14.0'

# `current_branch` is the technical name of the current branch.
# E.g., saas-15.4 -> saas-15.4; 12.0 -> 12.0, master -> master (*).
current_branch = version
# `current_version` is the Odoo version linked to the current branch.
# E.g., saas-15.4 -> 15.4; 12.0 -> 12; master -> master (*).
current_version = current_branch.replace('saas-', '').replace('.0', '')
# `current_major_branch` is the technical name of the major branch before the current branch.
# E.g., saas-15.4 -> 15.0; 12.0 -> 12.0; master -> master (*).
current_major_branch = re.sub(r'\.\d', '.0', current_branch.replace('saas-', ''))
# `current_major_version` is the Odoo version linked to the current major branch.
# E.g., saas-15.4 -> 15; 12.0 -> 12; master -> master (*).
current_major_version = current_major_branch.replace('.0', '')
# (*): We don't care for master.

# The minimal Sphinx version required to build the documentation.
needs_sphinx = '3.0.0'

# The default language in which the documentation is written. It is set to `None` because Sphinx
# considers that no language means 'en'.
language = None

# The suffix of source filenames.
source_suffix = '.rst'

# The master toctree document.
master_doc = 'index'

# List of patterns, relative to source directory, that match files and directories to ignore when
# looking for source files.
exclude_patterns = [
    'locale',
    'README.*',
    'bin', 'include', 'lib',
    'odoo',
]

# The RST text role to use when the role is not specified. E.g.: `example`.
# We use 'literal' as default role for markdown compatibility: `foo` behaves like ``foo``.
# See https://docutils.sourceforge.io/docs/ref/rst/roles.html#standard-roles for other roles.
default_role = 'literal'


# Whether scaled down images should be be wrapped in a `<a/>` tag linking to the image file or not.
html_scaled_image_link = False

# If true, '()' will be appended to :func: etc. cross-reference text
add_function_parentheses = True

#=== Extensions configuration ===#

source_read_replace_vals = {
    'BRANCH': current_branch,
    'CURRENT_BRANCH': current_branch,
    'CURRENT_VERSION': current_version,
    'CURRENT_MAJOR_BRANCH': current_major_branch,
    'CURRENT_MAJOR_VERSION': current_major_version,
    'GITHUB_PATH': f'https://github.com/odoo/odoo/blob/{version}',
    'GITHUB_ENT_PATH': f'https://github.com/odoo/enterprise/blob/{version}',
}

# Add extensions directory to PYTHONPATH
extension_dir = Path('extensions')
sys.path.insert(0, str(extension_dir.absolute()))

# Search for the directory of odoo sources to know whether autodoc should be used on the dev doc
odoo_sources_candidate_dirs = (Path('odoo'), Path('../odoo'))
odoo_sources_dirs = [
    d for d in odoo_sources_candidate_dirs if d.is_dir() and (d / 'odoo-bin').exists()
]
odoo_dir_in_path = False

if not odoo_sources_dirs:
    _logger.warning(
        "Could not find Odoo sources directory in neither of the following folders:\n"
        "%(dir_list)s\n"
        "The 'Developer' documentation will be built but autodoc directives will be skipped.\n"
        "In order to fully build the 'Developer' documentation, clone the repository with "
        "`git clone https://github.com/odoo/odoo` or create a symbolic link.",
        {'dir_list': '\n'.join([f'\t- {d.resolve()}' for d in odoo_sources_candidate_dirs])},
    )
else:
    odoo_dir = odoo_sources_dirs[0].resolve()
    source_read_replace_vals['ODOO_RELPATH'] = '/../' + str(odoo_sources_dirs[0])
    sys.path.insert(0, str(odoo_dir))
    from odoo import release as odoo_release  # Don't collide with Sphinx's 'release' config option
    odoo_version = odoo_release.version if 'alpha' not in odoo_release.version else 'master'
    if release != odoo_version:
        _logger.warning(
            "Found Odoo sources in %(directory)s but with version '%(odoo_version)s' incompatible "
            "with documentation version '%(doc_version)s'.\n"
            "The 'Developer' documentation will be built but autodoc directives will be skipped.\n"
            "In order to fully build the 'Developer' documentation, checkout the matching branch"
            " with `cd odoo && git checkout %(doc_version)s`.",
            {'directory': odoo_dir, 'odoo_version': odoo_version, 'doc_version': version},
        )
    else:
        _logger.info(
            "Found Odoo sources in %(directory)s matching documentation version '%(version)s'.",
            {'directory': odoo_dir, 'version': release},
        )
        odoo_dir_in_path = True

# The Sphinx extensions to use, as module names.
# They can be extensions coming with Sphinx (named 'sphinx.ext.*') or custom ones.
extensions = [
    # Parse Python docstrings (autodoc, automodule, autoattribute directives)
    'sphinx.ext.autodoc' if odoo_dir_in_path else 'autodoc_placeholder',

    # Link sources in other projects (used to build the reference doc)
    'sphinx.ext.intersphinx',

    # Support the specialized to-do directives
    'sphinx.ext.todo',

    # Custom Odoo theme
    'odoo_theme',

    # Youtube and Vimeo videos integration (youtube, vimeo directives)
    'embedded_video',

    'custom_admonitions',

    # Redirection generator
    'redirects',

    # Content tabs
    'sphinx_tabs.tabs',

    # Cards
    'cards',

    # Spoilers
    'spoilers',

    # Strange html domain logic used in memento pages
    'html_domain',
]

if odoo_dir_in_path:
    # GitHub links generation
    extensions += [
        'sphinx.ext.linkcode',
        'github_link',
    ]

todo_include_todos = False

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'werkzeug': ('https://werkzeug.palletsprojects.com/en/1.0.x/', None),
}

github_user = 'odoo'
github_project = 'documentation'

locale_dirs = ['../locale/']
templates_path = ['../extensions']

# custom docname_to_domain to divide the translations of applications in subdirectories
sphinx.transforms.i18n.docname_to_domain = (
    sphinx.util.i18n.docname_to_domain
) = lambda docname, compact: docname.split('/')[1 if docname.startswith('applications/') else 0]

# The version names that should be shown in the version switcher, if the config option `versions`
# is populated. If a version is passed to `versions` but is not listed here, it will not be shown.
versions_names = {
    'master': "Master",
    '16.0': "Odoo 16",
    'saas-15.2': "Odoo Online",
    '15.0': "Odoo 15",
    '14.0': "Odoo 14",
    '13.0': "Odoo 13",
}

# The language names that should be shown in the language switcher, if the config option `languages`
# is populated. If a language is passed to `languages` but is not listed here, it will not be shown.
languages_names = {
    'de': 'DE',
    'en': 'EN',
    'es': 'ES',
    'fr': 'FR',
    'nl': 'NL',
    'pt_BR': 'PT',
    'ro': 'RO',
    'uk': 'UA',
    'zh_CN': 'ZH',
}

# The directory in which files holding redirect rules used by the 'redirects' extension are listed.
redirects_dir = 'redirects/'

sphinx_tabs_disable_tab_closing = True
sphinx_tabs_disable_css_loading = True

#=== Options for HTML output ===#

html_theme = 'odoo_theme'

# The name of the Pygments (syntax highlighting) style to use.
# See extensions/odoo_theme/pygments_override.py
pygments_style = 'odoo'

# The paths that contain custom themes, relative to this directory.
html_theme_path = ['extensions']

# The name of an image file (within the static path) to use as favicon of the docs.
# This file should be a Windows icon file (.ico) being 16x16 or 32x32 pixels large.
html_favicon = os.path.join(html_theme_path[0], html_theme, 'static', 'img', 'favicon.ico')

# The paths that contain custom static files, relative to this directory.
# They are copied after the builtin static files, so a file named "default.css" will overwrite the
# builtin "default.css".
html_static_path = ['static']
html_permalinks = True

# Additional JS & CSS files that can be imported with the 'custom-js' and 'custom-css' metadata.
# Lists are empty because the files are specified in extensions/themes.
html_js_files = []
html_css_files = []

# PHP lexer option to not require <?php
highlight_options = {
  'php': {'startinline': True},
}

#=== Options for LaTeX output ===#

latex_elements = {
    # The paper size ('letterpaper' or 'a4paper').
    'papersize': 'a4paper',

    # Additional stuff for the LaTeX preamble.
    'preamble': r'\usepackage{odoo}',
    'tableofcontents': '',  # no TOC

    # Output manually in latex docs
    'releasename': release,
}

latex_additional_files = ['static/latex/odoo.sty']

# Grouping the document tree into LaTeX files. List of tuples:
# (source start file, target name, title, author, documentclass [howto, manual, or own class]).
latex_documents = [
    ('legal/terms/enterprise_tex', 'odoo_enterprise_agreement.tex',
     'Odoo Enterprise Subscription Agreement', '', 'howto'),
    ('legal/terms/partnership_tex',
     'odoo_partnership_agreement.tex', 'Odoo Partnership Agreement', '', 'howto'),
    ('legal/terms/terms_of_sale',
     'terms_of_sale.tex', 'Odoo Terms of Sale', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_fr', 'odoo_enterprise_agreement_fr.tex',
     'Odoo Enterprise Subscription Agreement (FR)', '', 'howto'),
    ('legal/terms/i18n/partnership_tex_fr',
     'odoo_partnership_agreement_fr.tex', 'Odoo Partnership Agreement (FR)', '', 'howto'),
    ('legal/terms/i18n/terms_of_sale_fr', 'terms_of_sale_fr.tex',
     'Conditions Générales de Vente Odoo', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_nl', 'odoo_enterprise_agreement_nl.tex',
     'Odoo Enterprise Subscription Agreement (NL)', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_de', 'odoo_enterprise_agreement_de.tex',
     'Odoo Enterprise Subscription Agreement (DE)', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_es', 'odoo_enterprise_agreement_es.tex',
     'Odoo Enterprise Subscription Agreement (ES)', '', 'howto'),
    ('legal/terms/i18n/partnership_tex_es',
     'odoo_partnership_agreement_es.tex', 'Odoo Partnership Agreement (ES)', '', 'howto'),
]

# The name of an image file (relative to this directory) to place at the top of the title page.
latex_logo = 'static/img/odoo_logo.png'

# If true, show URL addresses after external links.
latex_show_urls = 'True'

# https://github.com/sphinx-doc/sphinx/issues/4054#issuecomment-329097229
def source_read_replace(app, docname, source):
    """Substitute parts of strings with computed values.
    Since the RST substitution is not working everywhere, i.e. in directives'
    options, we need to be able to input those values when reading the sources.
    This is using the config `source_read_replace_vals`, mapping a name to its
    replacement. This will look for the name surrounded by curly braces in the source.
    Meant to be connected to the `source-read` event.
    """
    result = source[0]
    for key in app.config.source_read_replace_vals:
        result = result.replace(f"{{{key}}}", app.config.source_read_replace_vals[key])
    source[0] = result

def setup(app):
    # Generate all alternate URLs for each document
    app.add_config_value('project_root', None, 'env')
    app.add_config_value('canonical_version', None, 'env')
    app.add_config_value('versions', None, 'env')
    app.add_config_value('languages', None, 'env')
    app.add_config_value('is_remote_build', None, 'env')  # Whether the build is remotely deployed
    app.add_config_value('source_read_replace_vals', {}, 'env')
    app.connect('source-read', source_read_replace)

    app.add_lexer('json', JsonLexer)
    app.add_lexer('xml', XmlLexer)

    app.connect('html-page-context', _generate_alternate_urls)


def _generate_alternate_urls(app, pagename, templatename, context, doctree):
    """ Add keys of required alternate URLs for the current document in the rendering context.

    Alternate URLS are required for:
      - The canonical link tag
      - The version switcher
      - The language switcher and related link tags
    """

    def _canonicalize():
        """ Add the canonical URL for the current document in the rendering context.

        The canonical version is the last released version of the documentation.
        For a given language, the canonical root of a page is in the same language so that web
        searches in that language don't redirect users to the english version of that page.

        E.g.:
        - /documentation/sale.html -> canonical = /documentation/14.0/sale.html
        - /documentation/11.0/fr/website.html -> canonical = /documentation/14.0/fr/website.html
        """
        # If the canonical version is not set, assume that the project has a single version
        _canonical_version = app.config.canonical_version or app.config.version
        _canonical_lang = 'en'  # Always 'en'. Don't take the value of the config option.
        context['canonical'] = _build_url(_version=_canonical_version, _lang=_canonical_lang)

    def _versionize():
        """ Add the pairs of (version, url) for the current document in the rendering context.

        The entry 'version' is added by Sphinx in the rendering context.
        """
        context['version_display_name'] = versions_names[version]

        # If the list of versions is not set, assume the project has no alternate version
        _provided_versions = app.config.versions and app.config.versions.split(',') or []

        # Map alternate versions to their display names and URLs.
        context['alternate_versions'] = []
        for _alternate_version, _display_name in versions_names.items():
            if _alternate_version in _provided_versions and _alternate_version != version:
                context['alternate_versions'].append(
                    (_display_name, _build_url(_alternate_version))
                )

    def _localize():
        """ Add the pairs of (lang, code, url) for the current document in the rendering context.

        E.g.: ('French', 'fr', 'https://.../fr_BE/...')

        The entry 'language' is added by Sphinx in the rendering context.
        """
        _current_lang = app.config.language or 'en'
        # Replace the context value by its upper-cased value ("FR" instead of "fr")
        context['language'] = languages_names.get(_current_lang)
        context['language_code'] = _current_lang

        # If the list of languages is not set, assume that the project has no alternate language
        _provided_languages = app.config.languages and app.config.languages.split(',') or []

        # Map alternate languages to their display names and URLs.
        context['alternate_languages'] = []
        for _alternate_lang, _display_name in languages_names.items():
            if _alternate_lang in _provided_languages and _alternate_lang != _current_lang:
                context['alternate_languages'].append(
                    (
                        _display_name,
                        _alternate_lang.split('_')[0] if _alternate_lang != 'en' else 'x-default',
                        _build_url(_lang=_alternate_lang),
                    )
                )

    def _build_url(_version=None, _lang=None):
        if app.config.is_remote_build:
            # Project root like https://www.odoo.com/documentation
            _root = app.config.project_root
        else:
            # Project root like .../documentation/_build/html/14.0/fr
            _root = re.sub(rf'(/{app.config.version})?(/{app.config.language})?$', '', app.outdir)
        # If the canonical version is not set, assume that the project has a single version
        _canonical_version = app.config.canonical_version or app.config.version
        _version = _version or app.config.version
        _lang = _lang or app.config.language or 'en'
        _canonical_page = f'{pagename}.html'
        if app.config.is_remote_build:
            _canonical_page = _canonical_page.replace('index.html', '')
        return f'{_root}' \
               f'{f"/{_version}" if app.config.versions else ""}' \
               f'{f"/{_lang}" if _lang != "en" else ""}' \
               f'/{_canonical_page}'

    _canonicalize()
    _versionize()
    _localize()
