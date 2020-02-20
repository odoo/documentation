===========================
End-user Odoo documentation
===========================

Build the documentation
=======================

Requirements
------------

- `Git <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#install-git>`_

- | `Python 3 <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#python>`_
  | If you don't know which subversion to choose, pick the last one.
  | Python dependencies are listed in the file ``requirements.txt`` located in the root
    directory.

  - Sphinx 2.4.0 or above.
  - Werkzeug 0.14.1

- `Make <https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#make>`_

Instructions
------------

In a terminal, navigate to the root directory and execute the following command:

.. code-block:: console

   $ make html

This compiles the documentation to HTML.

Open ``documentation-user/_build/html/index.html`` in your web browser to display the render.

See `this guide
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html#prepare-your-version>`_
for more detailed instructions.

Contribute to the documentation
===============================

For contributions to the content of the documentation, please refer to the `Introduction Guide
<https://www.odoo.com/documentation/user/contributing/documentation/introduction_guide.html>`_.

To **report a content issue**, **request new content** or **ask a question**, use the `repository's
issue tracker <https://github.com/odoo/documentation-user/issues>`_ as usual.