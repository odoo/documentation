# Odoo documentation

## Build the documentation locally

### Requirements

- [Git](https://www.odoo.com/documentation/13.0/contributing/documentation/introduction_guide.html#install-git)
- [Python 3.6, 3.7, or 3.8](https://www.odoo.com/documentation/13.0/contributing/documentation/introduction_guide.html#python)
- Python dependencies listed in the file [`requirements.txt`](https://github.com/odoo/documentation/tree/13.0/requirements.txt).
- [Make](https://www.odoo.com/documentation/13.0/contributing/documentation/introduction_guide.html#make)
- A local copy of the [odoo/odoo repository in 13.0](https://github.com/odoo/odoo/tree/13.0) (Optional)

### Instructions

1. In a terminal, navigate to the root directory and compile the documentation to HTML with the
   following command:

   ```sh
   make
   ```

   Additional commands are available with `make help`.

2. Open the file `documentation/_build/html/index.html` in your web browser to display the render.

3. See [this guide](https://www.odoo.com/documentation/13.0/contributing/documentation/introduction_guide.html#preview-your-changes)
   for more detailed instructions.

Optional: to fully build the developer documentation with inline docstrings for documented Python
functions, place your local copy of the `odoo/odoo` repository in the root directory. Alternatively,
create a symbolic link with `odoo` as link name. If the Odoo sources are not found, a warning will
be shown.

## Contribute to the documentation

For contributions to the content of the documentation, please refer to the
[Introduction Guide](https://www.odoo.com/documentation/13.0/contributing/documentation/introduction_guide.html).

To **report a content issue**, **request new content** or **ask a question**, use the
[repository's issue tracker](https://github.com/odoo/documentation-user/issues) as usual.

If you have a pull request that is ready for review, request one from the
[odoo/doc-review](https://github.com/orgs/odoo/teams/doc-review) team.


## Learn More

To learn more about Odoo, in addition to the documentation, have a look at
[the official eLearning](https://odoo.com/slides) and
[Scale-up, The Business Game](https://www.odoo.com/page/scale-up-business-game).