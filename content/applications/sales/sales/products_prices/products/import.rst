===================================================
How to import Products with Categories and Variants
===================================================

Import templates are provided in the **Import Tool** of the most common data to
import (contacts, products, bank statements, etc.).
You can open them with any spreadsheet software (Microsoft Office,
OpenOffice, Google Drive, etc.).

How to customize the file
=========================

* Remove columns you don't need. However, we advise you to not remove the *ID* column (see
  why below).
* Set a unique ID to every single record by dragging down the ID sequencing.
* Don't change the labels of columns you want to import. Otherwise, Odoo won't recognize
  them anymore, and you will have to map them on your own in the import screen.
* Feel free to add new columns, but the fields need to exist in Odoo. If Odoo fails
  in matching the column name with a field, you can match it manually when importing
  by browsing a list of available fields.


Why an “ID” column?
===================

The ID is a truly unique identifier for the line item. Feel free to use one from your
previous software to ease the transition into Odoo.

Setting an ID is not mandatory when importing, but it helps in many cases:

* Update imports: you can import the same file several times without creating duplicates.
* Import relation fields (see here below).

How to import relation fields
=============================

An Odoo object is always related to many other objects (e.g., a product is linked
to product categories, attributes, vendors, etc.). To import those relations, you need to
import the records of the related object first from their own list menu.

You can do this using the name of the related record or its ID. The ID is expected when
two records have the same name. In such a case, add " / ID" at the end of the column title
(e.g., for product attributes: Product Attributes / Attribute / ID).
