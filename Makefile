# Makefile for Sphinx documentation

SPHINX_BUILD   = sphinx-build
CONFIG_DIR     = .
SPHINXOPTS     = -D project_root=$(ROOT) -D canonical_version=$(CANONICAL_VERSION) \
                 -D versions=$(VERSIONS) -D languages=$(LANGUAGES) -D language=$(CURRENT_LANG) \
                 -D is_remote_build=$(IS_REMOTE_BUILD) \
                 -A google_analytics_key=$(GOOGLE_ANALYTICS_KEY)
SOURCE_DIR     = content
BUILD_DIR      = _build

HTML_BUILD_DIR = $(BUILD_DIR)/html
ifdef VERSIONS
  HTML_BUILD_DIR := $(HTML_BUILD_DIR)/12.0
endif
ifneq ($(CURRENT_LANG),en)
  HTML_BUILD_DIR := $(HTML_BUILD_DIR)/$(CURRENT_LANG)
endif

#=== Standard rules ===#

# In first position to build the documentation from scratch by default
all: html

help:
	@echo "Please use 'make <target>' where <target> is one of"
	@echo "  html         to build the documentation to HTML"
	@echo "  fast         to build the documentation to HTML with shallow menu (faster)"
	@echo "  clean        to delete the build files"

clean:
	@echo "Cleaning build files..."
	rm -rf $(BUILD_DIR)/*
	rm extensions/odoo_theme/static/style.css
	@echo "Cleaning finished."

html: extensions/odoo_theme/static/style.css
	@echo "Starting build..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b html $(SPHINXOPTS) $(SOURCE_DIR) $(HTML_BUILD_DIR)
	@echo "Build finished."

# To call *after* `make html`
# Binary dependencies (Debian): texlive-fonts-recommended texlive-latex-extra
# texlive-generic-recommended texlive-fonts-extra
latexpdf:
	@echo "Starting build..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b latex $(SPHINXOPTS) $(SOURCE_DIR) $(BUILD_DIR)/latex
	$(MAKE) -C $(BUILD_DIR)/latex
	cp $(BUILD_DIR)/latex/*.pdf $(BUILD_DIR)/html/
	@echo "Build finished."

l10n:
	@echo "Generating translatable files..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b gettext $(SOURCE_DIR) $(BUILD_DIR)/gettext
	@echo "Generation finished."
	@echo "Localizing translation strings..."
	sphinx-intl update -p $(BUILD_DIR)/gettext -l $(L10N_LANGUAGES)
	@echo "Localization finished."

extensions/odoo_theme/static/style.css: extensions/odoo_theme/static/style.scss extensions/odoo_theme/static/scss/*.scss
	@echo "Compiling stylesheets..."
	pysassc $(subst .css,.scss,$@) $@
	@echo "Compilation finished."

#=== Development and debugging rules ===#

fast: SPHINXOPTS += -A collapse_menu=True
fast: html

static: extensions/odoo_theme/static/style.css
	cp -r extensions/odoo_theme/static/* _build/html/_static/
	cp -r static/* _build/html/_static/

lang:
	make fast LANGUAGES=en,fr CURRENT_LANG=en
	make fast LANGUAGES=en,fr CURRENT_LANG=fr

version:
	make fast CANONICAL_VERSION=12.0 VERSIONS=12.0,13.0,14.0,master

both:
	make fast CANONICAL_VERSION=12.0 VERSIONS=12.0,13.0,14.0,master LANGUAGES=en,fr CURRENT_LANG=en
	make fast CANONICAL_VERSION=12.0 VERSIONS=12.0,13.0,14.0,master LANGUAGES=en,fr CURRENT_LANG=fr