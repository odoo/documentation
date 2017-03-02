=========================
How to import my products
=========================

How to start
============

Download the following import templates: 

1. Partners: customers, vendors (no relation field, can be imported as is)
2. Products (no relation field, can be imported as is)
3. Product Website Categories
4. Product Attributes & Values
5. Products with Categories & Attributes (3 & 4 must be imported first)

Download link: https://drive.google.com/drive/folders/0B1uIL9E_zXrrTEp5eGI2dXJSUjg?usp=sharing

You can open them with any spreadsheets software (Microsoft Office, OpenOffice, Google Drive, etc.).

How to customize the file
=========================

* Remove columns you don't need. Don't remove the first one (called *ID*, see
  why here below).
* Don't change labels of columns you want to import. Otherwse Odoo won't match
  the columns automatically.
* Feel free to add new columns but the fields need to exist in Odoo. If Odoo fails
  in matching the column name with a field, you can make it manually when importing
  by browsing a list of available fields.
* Once modified, keep your file in .csv format.

How to import the file
======================

1. Go to the Products menu in Sales, Purchase, Website Admin, etc.
2. Switch to list view (top-right corner).
3. Click the *Import* button (top-left corner).
4. Make sure all the columns match an existing field. If not select it
   manually from the drop-down list.
5. Press * Validate* to test the import.
6. If you get "Everything seems valid." as result message, press *Import*
   to process the real import. Otherwise correct the issues spotted during the test.

Why an “ID” column
==================

The ID is an unique identifier for the line item. Feel free to use the one of your
previous software to ease the transition to Odoo.

Setting an ID is not mandatory when importing but it helps in many cases:

* Update imports: you can import the same file several times without creating duplicates;
* Import relation fields (see here below).

How to import relation fields
=============================

An Odoo object is always related to many other objects (e.g. a product is linked
to product categories, attributes, vendors, etc.). To import those relations you need to
import the records of the related object first from their own list menu.

You can do it using either the name of the related record or its ID. The ID is expected when
two records have the same name. In such a case add " / ID" at the end of the column title
(e.g. for product attributes: Product Attributes / Attribute / ID).
