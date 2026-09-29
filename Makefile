# Makefile for Sphinx documentation

# Pass WORKERS=1 for single-worker build
ifndef WORKERS
  WORKERS = auto
endif

ifndef BUILD_DIR
  BUILD_DIR    = _build
endif

ifndef CURRENT_LANG
  CURRENT_LANG = en
endif

ifndef EXPORT_PATH
  EXPORT_PATH = locale/sources
endif

SPHINX_BUILD   = sphinx-build
CONFIG_DIR     = .
SPHINXOPTS     = -D project_root=$(ROOT) -D canonical_version=$(CANONICAL_VERSION) \
                 -D versions=$(VERSIONS) -D languages=$(LANGUAGES) -D language=$(CURRENT_LANG) \
                 -D is_remote_build=$(IS_REMOTE_BUILD) \
                 -T \
                 -A google_analytics_key=$(GOOGLE_ANALYTICS_KEY) \
                 -A plausible_script=$(PLAUSIBLE_SCRIPT) \
                 -A plausible_domain=$(PLAUSIBLE_DOMAIN) \
				 -j $(WORKERS)
SOURCE_DIR     = content

HTML_BUILD_DIR = $(BUILD_DIR)/html
ifdef VERSIONS
  HTML_BUILD_DIR := $(HTML_BUILD_DIR)/17.0
endif
ifneq ($(CURRENT_LANG),en)
  HTML_BUILD_DIR := $(HTML_BUILD_DIR)/$(CURRENT_LANG)
endif

#=== Standard rules ===#

.PHONY: all help clean html latexpdf gettext fast static test review linkcheck

# In first position to build the documentation from scratch by default
all: html

help:
	@echo "Please use 'make <target>' where <target> is one of"
	@echo "  html         to build the documentation to HTML"
	@echo "  fast         to build the documentation to HTML with shallow menu (faster)"
	@echo "  clean        to delete the build files"
	@echo "  test         to run the guidelines tests"
	@echo "  linkcheck    to check the external links of a file or folder"

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
# texlive-fonts-extra
latexpdf:
	@echo "Starting build..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b latex $(SPHINXOPTS) $(SOURCE_DIR) $(BUILD_DIR)/latex
	$(MAKE) -C $(BUILD_DIR)/latex
	cp $(BUILD_DIR)/latex/*.pdf $(BUILD_DIR)/html/
	@echo "Build finished."

gettext:
	@echo "Generating translatable files..."
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b gettext $(SOURCE_DIR) $(EXPORT_PATH)
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

# Called by runbot for the ci/documentation_guideline check.
test:
	@python tests/main.py $(SOURCE_DIR)/administration $(SOURCE_DIR)/applications $(SOURCE_DIR)/contributing $(SOURCE_DIR)/developer redirects

# Similar to `test`, but called only manually by content reviewers to specify a path and a max line
# length.
review:
	@read -p "Enter relative content path: " path; read -p "Enter max line length (default: 100): " line_length; \
	if [ -z "$$path" ]; then echo "Error: Path cannot be empty"; exit 1; fi; \
	if echo $$path | grep -q 'content/'; then path=`echo $$path | sed 's|content/||'`; fi; \
	if [ -z "$$line_length" ]; then line_length=100; fi; \
	export REVIEW=1; \
	python tests/main.py --max-line-length=$$line_length $(SOURCE_DIR)/$$path

# Called manually by content writers to check the external links of a file or folder.
linkcheck:
	@read -p "Enter relative content path: " path; \
	if [ -z "$$path" ]; then echo "Error: Path cannot be empty"; exit 1; fi; \
	if echo $$path | grep -q 'content/'; then path=`echo $$path | sed 's|content/||'`; fi; \
	files=`find $(SOURCE_DIR)/$$path -name '*.rst' 2>/dev/null`; \
	if [ -z "$$files" ]; then echo "Error: No .rst files found at $$path"; exit 1; fi; \
	$(SPHINX_BUILD) -c $(CONFIG_DIR) -b linkcheck -q -j $(WORKERS) $(SOURCE_DIR) $(BUILD_DIR)/linkcheck $$files; \
	if [ -t 1 ]; then \
		bold=`printf '\033[1m'`; red=`printf '\033[31m'`; yellow=`printf '\033[33m'`; \
		green=`printf '\033[32m'`; reset=`printf '\033[0m'`; \
	fi; \
	if [ -s $(BUILD_DIR)/linkcheck/output.txt ]; then \
		echo ""; \
		echo "----------------------------------------"; \
		echo "$${bold}Links that need attention:$${reset}"; \
		echo "----------------------------------------"; \
		awk -v red="$$red" -v yellow="$$yellow" -v reset="$$reset" \
			'/\[broken\]/ {print red "❌  " $$0 reset; next} /\[redirected/ {print yellow "⚠️  " $$0 reset; next} {print}' \
			$(BUILD_DIR)/linkcheck/output.txt; \
		echo ""; \
		echo "Full results saved in $(BUILD_DIR)/linkcheck/output.txt"; \
		echo "Note: This file is replaced each time make linkcheck is run."; \
	else \
		echo "$${green}✅ No broken or redirected links found.$${reset}"; \
	fi
