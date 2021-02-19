# Makefile for Sphinx documentation

SPHINX_BUILD   = sphinx-build
CONFIG_DIR     = .
SPHINXOPTS     = -D project_root=$(ROOT) -D canonical_version=$(CANONICAL_VERSION) \
                 -D versions=$(VERSIONS) -D languages=$(LANGUAGES) -D language=$(CURRENT_LANG) \
                 -A google_analytics_key=$(GOOGLE_ANALYTICS_KEY)
SOURCE_DIR     = content
BUILD_DIR      = _build

# Rely on COMSPEC, which is a variable present in all Windows platforms, to determine the OS
ifdef COMSPEC
  RM_CMD ?= del
else
  RM_CMD ?= rm -rf
endif

# In first position to build the documentation from scratch by default
all: html

help:
	@echo "Please use 'make <target>' where <target> is one of"
	@echo "  html         to build the documentation to HTML"
	@echo "  fast         to build the documentation to HTML with shallow menu (faster)"
	@echo "  clean        to delete the build files"

clean:
	@echo "Cleaning build files..."
	$(RM_CMD) $(BUILD_DIR)/*
	$(RM_CMD) extensions/odoo_theme/static/style.css
	@echo "Cleaning finished."

#edi: SPHINXOPTS += -A collapse_menu=True  # If needed, comment rather than setting False
edi: VERSIONS += 12.0,13.0,14.0
edi: CANONICAL_VERSION += 14.0
edi: LANGUAGES += en,fr,es
edi: CURRENT_LANG += fr
edi: clean html

static: extensions/odoo_theme/static extensions/odoo_theme/static/style.css
	cp -r extensions/odoo_theme/static/* _build/html/_static/

html: extensions/odoo_theme/static/style.css
	@echo "Starting build..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b html $(SPHINXOPTS) $(SOURCE_DIR) $(BUILD_DIR)/html
	@echo "Build finished."

fast: SPHINXOPTS += -A collapse_menu=True
fast: html

extensions/odoo_theme/static/style.css: extensions/odoo_theme/static/*.scss
	@echo "Compiling stylesheets..."
	pysassc $(subst .css,.scss,$@) $@
	@echo "Compilation finished."
