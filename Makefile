# Makefile for Sphinx documentation

SPHINX_BUILD   = sphinx-build
CONFIG_DIR     = .
SPHINXOPTS     = -A google_analytics_key=$(GOOGLE_ANALYTICS_KEY)
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

edi: SPHINXOPTS += -A collapse_menu=True
edi: clean html

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
