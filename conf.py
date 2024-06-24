import os
import queue
import re
import shutil
import sys
from multiprocessing import Manager
from pathlib import Path
from xml.etree import ElementTree

import docutils
import sphinx
from pygments.lexers import JsonLexer, XmlLexer
from sphinx.ext import graphviz
from sphinx.util import logging

_logger = logging.getLogger(__name__)


#=== General configuration ===#

# General information about the project.
project = 'Odoo'
copyright = 'Odoo S.A.'

# `version` is the version info for the project being documented, acts as replacement for |version|,
# also used in various other places throughout the built documents.
# `release` is the full version, including alpha/beta/rc tags. Acts as replacement for |release|.
version = release = '16.0'

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
    'OWL_PATH': f'https://github.com/odoo/owl/blob/master',
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
    if (3, 6) < sys.version_info < (3, 7):
        # Running odoo needs python 3.7 min but monkey patch version_info to be compatible with 3.6.
        sys.version_info = (3, 7, 0)
    odoo_dir = odoo_sources_dirs[0].resolve()
    source_read_replace_vals['ODOO_RELPATH'] = '/../' + str(odoo_sources_dirs[0])
    sys.path.insert(0, str(odoo_dir))
    import odoo.addons
    odoo.addons.__path__.append(str(odoo_dir) + '/addons')
    from odoo import release as odoo_release  # Don't collide with Sphinx's 'release' config option
    odoo_version = '.'.join(str(s) for s in odoo_release.version_info[:2]).replace('~', '-')  # Change saas~XX.Y to saas-XX.Y
    odoo_version = 'master' if 'alpha' in odoo_release.version else odoo_version
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

if odoo_dir_in_path:
    upgrade_util_dir = next(filter(Path.exists, [Path('upgrade-util'), Path('../upgrade-util')]), None)
    if not upgrade_util_dir:
        _logger.warning(
            "Could not find Upgrade Utils sources directory in `upgrade_util`.\n"
            "The developer documentation will be built but autodoc directives will be skipped.\n"
            "In order to fully build the 'Developer' documentation, clone the repository with "
            "`git clone https://github.com/odoo/upgrade-util` or create a symbolic link."
        )
        odoo_dir_in_path = False
    else:
        _logger.info(
            "Found Upgrade Util sources in %(directory)s",
            {'directory': upgrade_util_dir.resolve()},
        )
        from odoo import upgrade
        upgrade.__path__.append(str((upgrade_util_dir / 'src').resolve()))

# Mapping between odoo models related to master data and the declaration of the
# data. This is used to point users to available xml_ids when giving values for
# a field with the autodoc_field extension.
model_references = {
    'account.account.type': 'addons/account/data/data_account_type.xml',
    'res.country': 'odoo/addons/base/data/res_country_data.xml',
    'res.currency': 'odoo/addons/base/data/res_currency_data.xml',
}

# The Sphinx extensions to use, as module names.
# They can be extensions coming with Sphinx (named 'sphinx.ext.*') or custom ones.
extensions = [
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
        # Parse Python docstrings (autodoc, automodule, autoattribute directives)
        'sphinx.ext.autodoc',
        'autodoc_field',
    ]
else:
    extensions += [
        'autodoc_placeholder',
    ]
extensions.append('sphinx.ext.graphviz' if shutil.which('dot') else 'graphviz_placeholder')

todo_include_todos = False

intersphinx_mapping = {
    'pillow': ('https://pillow.readthedocs.io/en/stable/', None),
    'python': ('https://docs.python.org/3/', None),
    'werkzeug': ('https://werkzeug.palletsprojects.com/en/2.3.x/', None),
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
    'saas-17.2': "Odoo Online",
    'saas-17.1': "Odoo Online",
    '17.0': "Odoo 17",
    'saas-16.4': "Odoo Online",
    'saas-16.3': "Odoo Online",
    'saas-16.2': "Odoo Online",
    'saas-16.1': "Odoo Online",
    '16.0': "Odoo 16",
    'saas-15.2': "Odoo Online",
    '15.0': "Odoo 15",
    '14.0': "Odoo 14",
}

# The language names that should be shown in the language switcher, if the config option `languages`
# is populated. If a language is passed to `languages` but is not listed here, it will not be shown.
languages_names = {
    'de': 'DE',
    'en': 'EN',
    'es': 'ES',
    'fr': 'FR',
    'it': 'IT',
    'ko': 'KO',
    'nl': 'NL',
    'pt_BR': 'PT',
    'ro': 'RO',
    'sv': 'SV',
    'uk': 'UA',
    'zh_CN': 'ZH (CN)',
    'zh_TW': 'ZH (TW)'
}

# The directory in which files holding redirect rules used by the 'redirects' extension are listed.
redirects_dir = 'redirects/'

sphinx_tabs_disable_tab_closing = True
sphinx_tabs_disable_css_loading = True

# Autodoc ordering
autodoc_member_order = 'bysource'

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
    ('legal/terms/i18n/terms_of_sale_de', 'terms_of_sale_de.tex',
     'Allgemeine Verkaufsbedingungen Odoo', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_es', 'odoo_enterprise_agreement_es.tex',
     'Odoo Enterprise Subscription Agreement (ES)', '', 'howto'),
    ('legal/terms/i18n/partnership_tex_es',
     'odoo_partnership_agreement_es.tex', 'Odoo Partnership Agreement (ES)', '', 'howto'),
    ('legal/terms/i18n/terms_of_sale_es', 'terms_of_sale_es.tex',
     'Términos Generales de Venta Odoo', '', 'howto'),

    ('legal/terms/i18n/enterprise_tex_pt_BR', 'odoo_enterprise_agreement_pt_BR.tex',
     'Odoo Enterprise Subscription Agreement (PT)', '', 'howto'),
]

# List of languages that have legal translations (excluding EN). The keys must be in
# `languages_names`. These translations will have a link to their versions of the legal
# contracts, instead of the default EN one. The main legal documents are not part of the
# translations since they have legal meaning.
legal_translations = ['de', 'es', 'fr', 'nl', 'pt_BR']

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
    # sitemap related:
    if not app.config.language or app.config.language == 'en':
        # As the URLs are the same for all languages except for the language code,
        # we will only generate for the english (default) language and assume only the language code change
        app.connect("builder-inited", _create_sitemap_queue)
        app.connect("html-page-context", _add_html_url)
        app.connect("build-finished", _create_sitemap)
    else:
        _logger.info("No sitemap generation as non-english language.")

    # Add a `condition` option on directives to ignore them based on config values
    app.add_config_value('odoo_dir_in_path', None, 'env')
    def context_eval(expr):
        return eval(expr, {confval.name: confval.value for confval in app.config})

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

def _get_root(app):
    if app.config.is_remote_build:
        # Project root like https://www.odoo.com/documentation
        return app.config.project_root
    # Project root like .../documentation/_build/html/14.0/fr
    return re.sub(rf'(/{app.config.version})?(/{app.config.language})?$', '', app.outdir)

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
        context['language'] = languages_names.get(_current_lang, _current_lang.upper())
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

        # Dynamic generation of localized legal doc links
        context['legal_translations'] = legal_translations

    def _build_url(_version=None, _lang=None):
        _root = _get_root(app)
        # If the canonical version is not set, assume that the project has a single version
        _canonical_version = app.config.canonical_version or app.config.version
        _version = _version or app.config.version
        _lang = _lang or app.config.language or 'en'
        _canonical_page = f'{pagename}.html'

        # legal translations have different URLs schemes as they are not managed on transifex
        # e.g. FR translation of /terms/enterprise => /fr/terms/enterprise_fr
        if pagename.startswith('legal/terms/'):
            if _lang in legal_translations and not pagename.endswith(f"_{_lang}"):
                # remove language code for current translation, set target one
                _page = re.sub("_[a-z]{2}$", "", pagename)
                if 'terms/i18n' not in _page:
                    _page = _page.replace("/terms/", "/terms/i18n/")
                _canonical_page = f'{_page}_{_lang}.html'
            elif _lang == 'en' and pagename.endswith(tuple(f"_{l}" for l in legal_translations)):
                # remove language code for current translation, link to original EN one
                _page = re.sub("_[a-z]{2}$", "", pagename)
                _canonical_page = f'{_page.replace("/i18n/", "/")}.html'

        if app.config.is_remote_build:
            _canonical_page = _canonical_page.replace('index.html', '')

        return f'{_root}' \
               f'{f"/{_version}" if app.config.versions else ""}' \
               f'{f"/{_lang}" if _lang != "en" else ""}' \
               f'/{_canonical_page}'

    _canonicalize()
    _versionize()
    _localize()

def _create_sitemap_queue(app):
    builder = getattr(app, "builder", None)
    if builder is None:
        return
    builder.env.app.sitemap_urls = Manager().Queue()

def _add_html_url(app, pagename: str, templatename, context, doctree):
    app.builder.env.app.sitemap_urls.put(pagename + '.html')

def _create_sitemap(app, exception):
    if app.env.app.sitemap_urls.empty():  # type: ignore
        _logger.info("No pages generated for sitemap.xml")
        return
    
    site_url = _get_root(app)

    ElementTree.register_namespace("xhtml", "http://www.w3.org/1999/xhtml")

    root = ElementTree.Element(
        "urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    )

    locales = languages_names.keys()
    version_= app.builder.config.version
    odoo_url_scheme = "/{version}{lang}/{url}"

    while True:
        try:
            url = app.env.app.sitemap_urls.get_nowait()
        except queue.Empty:
            break

        url_xml = ElementTree.SubElement(root, "url")
        ElementTree.SubElement(url_xml, "loc").text = site_url + odoo_url_scheme.format(version=version_, url=url, lang='')

        for lang in locales:
            # A .../en/... URL will not work in odoo's documentation, so we use .../... for the english language
            lang_in_url = '' if lang == 'en' else '/' + lang
            ElementTree.SubElement(
                url_xml,
                "{http://www.w3.org/1999/xhtml}link",
                rel="alternate",
                hreflang=lang.replace('_', '-'),
                href=site_url + odoo_url_scheme.format(version=version_, url=url, lang=lang_in_url),
            )

    filename = Path(app.outdir) / 'sitemap.xml'
    ElementTree.ElementTree(root).write(
        filename, xml_declaration=True, encoding="utf-8", method="xml"
    )

    _logger.info("sitemap: sitemap.xml was generated for URL %s in %s", site_url, filename)
