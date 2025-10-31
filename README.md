# Odoo documentation

## Build the documentation

### Requirements

- [Git](https://git-scm.com/install)
- [Python 3.10 to 3.14](https://www.python.org/downloads/).
- Make
- Python dependencies from `requirements.txt` (see instructions below)
- A local copy of the [odoo/odoo](https://github.com/odoo/odoo) repository (optional)
- A local copy of the [odoo/upgrade-util](https://github.com/odoo/upgrade-util) repository
  (optional)

### Quick start

1. Create and activate a virtual environment.
   - On Linux and macOS: `python3 -m venv .venv && source .venv/bin/activate`
   - On Windows (PowerShell): `py3 -m venv .venv; .\.venv\Scripts\Activate.ps1`
2. Install the Python dependencies: `pip install -r requirements.txt`
3. Build the documentation: `make html` (see more commands with `make help`)
4. Open `documentation/_build/html/index.html` in your web browser.

### Additional build options

- `make fast` to build the documentation with a shallow menu (faster).
- `make clean` to delete the build files.
- `make test` to run the guidelines tests.
- `make html CURRENT_LANG=fr` to build the documentation only in French.
- `make html CURRENT_LANG=fr LANGUAGES=en,fr,de` to build the documentation in French and enable the
  language switcher, with the specified LANGUAGES as available languages. This command must be
  invoked for each CURRENT_LANG you want to build.
- `make html VERSIONS=17.0,18.0,saas-18.4,19.0,master` to build the documentation in the **current
  version** and enable the version switcher, with the specified VERSIONS as available versions. This
  command must be invoked for each of the VERSIONS you want to build.

The list of available languages can be found in `conf.py`, in the `languages_names` variable.

When building the documentation for a specific language or version, the build files are created in
`documentation/_build/html/<language>/`, `documentation/_build/html/<version>/` or
`documentation/_build/html/<version>/<language>/`.

### Using local Odoo sources

If you have local checkouts of `odoo/odoo` and/or `odoo/upgrade-util`, place them either:
- as siblings of this repository (in the parent directory), or
- inside the `documentation` directory.

When present in one of these locations, the build will include Python docstrings from those
repositories if their version matches the documentation's version.

### Troubleshooting

- Verify your Python version: `python3 --version` (must be 3.10–3.14)
- Ensure your virtual environment is active and dependencies are installed.
- If you have made changes to the file structure, try `make clean` before building.
- If the language or version switchers redirect to a missing file, check that you have built the
  documentation for all available languages and versions.
- The "Developer" documentation is only available in English.

## Contribute to the documentation

For contributions to the content of the documentation, see the
[Introduction Guide](https://www.odoo.com/documentation/latest/contributing/documentation.html).

To report a content issue, request new content, or ask a question, use the
[issue tracker](https://github.com/odoo/documentation/issues).
