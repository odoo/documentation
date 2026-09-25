# Odoo Documentation

## Build the documentation

### Requirements

- [Git](https://git-scm.com/install)
- [Python 3.10 to 3.14](https://www.python.org/downloads/)
- Make
- Python dependencies from `requirements.txt` (see instructions below)
- A local copy of the [odoo/odoo](https://github.com/odoo/odoo) repository (optional)
- A local copy of the [odoo/upgrade-util](https://github.com/odoo/upgrade-util) repository (optional)

---

### Quick start

1. **Create and activate a virtual environment**

   - On Linux and macOS:
     ```bash
     python3 -m venv .venv && source .venv/bin/activate
     ```
   - On Windows (PowerShell):
     ```powershell
     py -m venv .venv; .\.venv\Scripts\Activate.ps1
     ```

2. **Install the Python dependencies**
   ```bash
   pip install -r requirements.txt
