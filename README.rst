===========================
End-user Odoo documentation
===========================

Build the documentation
=======================

Requirements
------------

- :ref:`Git <contributing/install-git>`

- | :ref:`Python 3 <contributing/python>`
  | If you don't know which subversion to choose, pick the last one.
  | Python dependencies are listed in the file :file:`requirements.txt` located in the root
    directory.

  - Sphinx 2.4.0 or above.
  - Werkzeug 0.14.1

- :ref:`Make <contributing/make>`

Instructions
------------

In a terminal, navigate to the root directory and execute the following command:

.. code-block:: console

   $ make html

This compiles the documentation to HTML.

Open :file:`_build/html/index.html` in your web browser to display the render.

See :ref:`contributing/prepare-version` for more detailed instructions.

Contribute to the documentation
===============================

For contributions to the content of the documentation, please refer to
:doc:`contributing/documentation/introduction_guide`.

To **report a content issue**, **request new content** or **ask a question**, use the `repository's
issue tracker <https://github.com/odoo/documentation-user/issues>`_ as usual.