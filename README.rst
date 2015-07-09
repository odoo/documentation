===========================
End-user Odoo documentation
===========================

Building requirements:

* Python 2.7
* recent `Sphinx <http://sphinx-doc.org>`_

After checking out, at the root of the documentation just type ``make
html``, the HTML content will be built to ``_build/html/index.html``.

Edition
=======

For simple edition (typo, just add paragraphs of text without markup),
the Github web interface can be used directly.

For more complex edition, to add images or advanced directives, edit
locally. **Do not commit if there are warnings or errors when building
the documentation** fix them first. rST is fairly sensitive to
whitespace and newlines (especially the lack of newlines). It's a bit
annoying but it's not hard to learn...

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
