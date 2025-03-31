# 📖 Odoo Documentation  

This repository contains the **official documentation for Odoo**, an open-source suite of business applications that includes **CRM, eCommerce, accounting, inventory, project management, and more**.  

The documentation provides **comprehensive guides, technical references, and best practices** for **developers, administrators, and end users**.


## Build the documentation locally

### Requirements

- Git
- Python 3.6, 3.7, or 3.8
- Python dependencies listed in the file `requirements.txt`.
- Make
- A local copy of the [odoo/odoo repository](https://github.com/odoo/odoo) (optional)
- A local copy of the [odoo/upgrade-util repository](https://github.com/odoo/upgrade-util) (optional)

### Instructions

1. In a terminal, navigate to the root directory of the documentation and build it `make`.
   Additional commands are available with `make help`.
2. Open the file `documentation/_build/html/index.html` in your web browser.
3. See [this guide](https://www.odoo.com/documentation/latest/contributing/documentation.html)
   for more detailed instructions.

Optional: place your local copy of the `odoo/odoo` and `odoo/upgrade-util` repositories in
the parent directory or in the root directory of the documentation to build the latter
with the documented Python docstrings.

## Contribute to the documentation

For contributions to the content of the documentation, please refer to the
[Introduction Guide](https://www.odoo.com/documentation/latest/contributing/documentation.html).

To **report a content issue**, **request new content** or **ask a question**, use the
[repository's issue tracker](https://github.com/odoo/documentation/issues).

## Learn More

To learn more about Odoo, in addition to the documentation, have a look at
[the official eLearning](https://odoo.com/slides) and
[Scale-up, The Business Game](https://www.odoo.com/page/scale-up-business-game).
