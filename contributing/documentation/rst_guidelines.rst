:banner: banners/contributing.png

==============
RST guidelines
==============

.. _contributing/relative-links:

Use relative links for internal URLs
====================================

If you need to reference an internal documentation page or a file that is not sitting in the same
directory as your current page, always make use of *relative file paths* rather than *absolute file
paths*. An absolute file path indicates the location of the target from the root of its file tree. A
relative file path makes use of smart notations (such as ``../`` git that redirects to the parent
folder) to indicate the location of the target *relative* to that of the source document.

Example
-------

Given the following source file tree:

::

  documentation-user
  ├── sales
  │   └── products_prices
  │   │   └── products
  │   │   │   └── import.rst
  │   │   │   └── variants.rst
  │   │   └── prices.rst

A reference to the rendered :file:`prices.html` and :file:`variants.html` could be made from
:file:`import.rst` as follows:

#. Absolute:

   - ``https://odoo.com/documentation/user/13.0/sales/products_prices/prices.html``
   - ``https://odoo.com/documentation/user/13.0/sales/products_prices/products/variants.html``

#. Relative:

   - ``../prices.html``
   - ``variants.html``

The relative links are clearly superior in terms of readability and stability: the references
survive version updates, folder name changes and file tree restructurations.

.. _contributing/line-length-limit:

Start a new line before the 100th character
===========================================

In RST, it is possible to break a line without forcing a line break on the rendered HTML. Make use
of this feature to write **lines of maximum 100 characters**. A line break in a sentence results in
an additional whitespace in HTML. That means that you do not need to leave a trailing whitespace at
the end of a line to separate words.

.. tip::
   You can safely break a line around the separators (``-->``) of ``menuselection`` directives and
   anywhere in a hyperlink reference. For the ``doc``, ``ref`` and ``download`` directives, this is
   only true for the label part of the reference.

Example: Line breaks within directive and inline markup
-------------------------------------------------------

.. code-block:: rst

   To register your seller account in Odoo, navigate to :menuselection:`Sales --> Configuration
   --> Settings --> Amazon Connector --> Amazon Accounts` and click on **CREATE**. The **Seller
   ID** can be found under the link **Your Merchant Token**.

Be consistent with indentation
==============================

Use only spaces (never tabs).

Use as many spaces at the beginning of an indented line as needed to align it with the first
character of the directive in the line above. This usually implies 3 spaces but you only need 2 for
bulleted lists.

Example: The first ``:`` is below the ``i`` (3 spaces)
------------------------------------------------------

.. code-block:: rst

   .. image:: media/example.png
      :align: center
      :alt: example

Example: The ``:titlesonly:`` and page references start below the ``t`` (3 spaces)
----------------------------------------------------------------------------------

.. code-block:: rst

   .. toctree::
      :titlesonly:

      payables/supplier_bills
      payables/pay

Example: Continuation lines resume below the ``I``’s of “Invoice” (2 spaces)
----------------------------------------------------------------------------

.. code-block:: rst

   - Invoice on ordered quantity: invoice the full order as soon as the sales order is confirmed.
   - Invoice on delivered quantity: invoice on what you delivered even if it's a partial delivery.

.. _contributing/menuselection:

Use the menuselection directive
===============================

Although chaining characters ``‣`` and menu names works fine to indicate a user which menus to
click, it is best to use the ``menuselection`` directive (see
:ref:`contributing/specialized-directives`) for the same result. Indeed, it renders the menus chain
consistently with the rest of the documentation and would automatically adapt to the new graphic
chart if we were to switch to a new one. This directive is used inline as follows:
``:menuselection:`Settings --> Products --> Variants```.

.. _contributing/resilient-code:

Write resilient code
====================

- Prefer the use of ``#.`` in numbered lists instead of ``1.``, ``2.``, etc. This removes the risk
  of breaking the numbering when adding new elements to the list and is easier to maintain.
- Avoid using implicit hyperlink targets and prefer internal hyperlink targets instead. Referencing
  the implicit target ``How to print quotations?`` is more prone to break than a reference to the
  explicit target ``_print_quotation`` which never appears in the rendered HTML and is thus even
  less likely to be modified.

.. _contributing/hyperlink-target-prefix:

Prefix hyperlink targets with application names
===============================================

As hyperlink targets are visible from the entire documentation when referenced with the ``ref``
directive, it is recommended to prefix the target name with that of the related application. For
instance, naming a target ``_amazon/form`` instead of ``_form`` avoids unwanted behaviors and makes
the purpose of the target clear.

.. _contributing/hyperlink-target-resilience:

Don’t break hyperlink targets
=============================

When refactoring (improving without adding new content) section headings or hyperlink targets, take
care not to break any hyperlink reference to these targets or update them accordingly.

.. _contributing/single-underscore:

Use single-underscore suffixes for hyperlink references
=======================================================

| Although using a double-underscore suffix works most of the time for classic hyperlink references,
  it is not recommended as double-underscores normally indicate an anonymous hyperlink reference.
  This is a special kind of hyperlink reference that makes use of nameless hyperlink targets
  consisting only of two underscore.
| tl;dr: Double-underscore suffixes work until they don’t and are bad practice, use
  single-underscore suffixes instead.
