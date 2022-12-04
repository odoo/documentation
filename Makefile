# Makefile for Sphinx documentation

# Pass WORKERS=1 for single-worker build
ifndef WORKERS
  WORKERS = auto
endif

ifndef BUILD_DIR
  BUILD_DIR    = _build
endif

ifndef CURRENT_LANG
  CURRENT_LANG = zh_CN
endif

SPHINX_BUILD   = sphinx-build
CONFIG_DIR     = .
SPHINXOPTS     = -D project_root=$(ROOT) -D canonical_version=$(CANONICAL_VERSION) \
                 -D versions=$(VERSIONS) -D languages=$(LANGUAGES) -D language=$(CURRENT_LANG) \
                 -D is_remote_build=$(IS_REMOTE_BUILD) \
                 -A google_analytics_key=$(GOOGLE_ANALYTICS_KEY) \
                 -A plausible_script=$(PLAUSIBLE_SCRIPT) \
                 -A plausible_domain=$(PLAUSIBLE_DOMAIN) \
				 -j $(WORKERS)
SOURCE_DIR     = content

HTML_BUILD_DIR = $(BUILD_DIR)/html
ifdef VERSIONS
  HTML_BUILD_DIR := $(HTML_BUILD_DIR)/16.0
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
	@echo "Cleaning finished."

html: $(HTML_BUILD_DIR)/_static/style.css
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

gettext:
	@echo "Generating translatable files..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b gettext $(SOURCE_DIR) locale/sources
	@echo "Generation finished."

$(HTML_BUILD_DIR)/_static/style.css: extensions/odoo_theme/static/style.scss extensions/odoo_theme/static/scss/*.scss
	@echo "Compiling stylesheets..."
	mkdir -p $(HTML_BUILD_DIR)/_static
	python3 -m pysassc extensions/odoo_theme/static/style.scss $(HTML_BUILD_DIR)/_static/style.css
	@echo "Compilation finished."

#=== Development and debugging rules ===#

fast: SPHINXOPTS += -A collapse_menu=True
fast: html

static: $(HTML_BUILD_DIR)/_static/style.css
	cp -r extensions/odoo_theme/static/* $(HTML_BUILD_DIR)/_static/
	cp -r static/* $(HTML_BUILD_DIR)/_static/
