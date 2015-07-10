===========================
End-user Odoo documentation
===========================

Building requirements:

* Python 2.7
* recent `Sphinx <http://sphinx-doc.org>`_ (at least Sphinx 1.2)

  you can check if Sphinx is installed by trying to launch

  .. code-block:: console

     $ sphinx-build --version

After checking out, at the root of the documentation just type

.. code-block:: console

   $ make html

the HTML content will be built to ``_build/html/index.html``.

Contributions
=============

For simple edition (typo, just add paragraphs of text without markup),
the Github web interface can be used directly.

For more complex edition, to add images or advanced directives, edit
locally. **Do not commit if there are warnings or errors when building
the documentation** fix them first. rST is fairly sensitive to
whitespace and newlines (especially the lack of newlines). It's a bit
annoying but it's not hard to learn.

Issues can be reported on the repository's bug tracker as usual.

Custom features
===============

Extensions
----------

Two custom directives are provided for integration with Odoo's demo
system:

* ``demo:fields:: {external_id}`` lists all the fields with a
  tooltip (``help``) of the action whose ``external_id`` is provided.

  - Uses the ``form`` view by default, can be customized by specifying
    ``:view:``.
  - The list of fields displayed can be filtered with ``:only:`` which
    should be a list of space-separated fields to display. Note that
    this will further reduce the number of fields displayed, it will
    not force fields to be listed when they don't have a ``help``.

  .. code-block:: restructuredtext

     .. demo:fields:: account_asset.action_account_asset_asset_list_normal_sale
        :only: name

  will display a table of just the ``name`` field and its ``help`` (or
  nothing if the ``name`` field does not have a ``help``)

* ``demo:action:: {external_id}`` will create a link button to the
  action (specified by external id) on the demo site. The text of the
  button should be provided as the directive's content:

  .. code-block:: restructuredtext

     .. demo:action:: account_asset.action_account_asset_asset_list_normal_sale

        View *Asset Types*

Theme Customisations
--------------------

* The Odoo theme supports *Banner Images* at the top of
  documents. These banners are configured by setting a ``:banner:``
  field at the top of the document (before the page title), the banner
  images will be looked up in the ``_static`` folder at the root of
  the project

  .. code-block:: restructuredtext

     :banner: banners/accounting.png

     ==========
     Accounting
     ==========

     [...]

  .. warning::

     because banners are wide images and each page may have one, it is
     strongly recommended to compress them well. For PNG, use
     `pngquant <https://pngquant.org>`_ (or a UI to it) to reduce the
     number of colors in the image followed by regular PNG
     recompression tools like `pngcrush
     <http://pmt.sourceforge.net/pngcrush/>`_ and `pngout
     <http://www.advsys.net/ken/util/pngout.htm>`_.



Importing existing documents
============================

For documents which already exist in an other format or in Google
docs, it's possible to get a head-start by converting the existing
document using `Pandoc <http://pandoc.org>`_. The main issue is that
anything but trivial original documents will need fixing up (possibly
lots of it) to get *good* rST (or possibly working rST at all).

Example::

  pandoc -f docx -t rst path/to/document.docx -o new_doc.rst --extract-media=.

will convert ``path/to/document.docx`` to ``new_doc.rst`` and export
all images to ``./media`` (and link them from the document). While
there are issues with the exported document, it's much more convenient
than manually re-typing the original.
