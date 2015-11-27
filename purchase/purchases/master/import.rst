==================================
How to import supplier pricelists?
==================================

Introduction
============

Big companies use to import supplier pricelists day to day. Indeed,
prices are always changing and you need to get price up to date to deal
with a high number of products.

To manage supplier prices on product form, read this document (:doc:`suppliers`). 
Here we will show you how to import customer prices.

Required configuration
======================

In purchase settings, you have 2 options:

-  Manage vendor price on the product form

-  Allow using and importing vendor pricelists

Here we are selecting: **Allow using and importing vendor pricelists**

.. image:: media/import05.png
    :align: center

Import vendor pricelists
========================

There are 2 scenarios: import the vendor pricelist for the first time,
or update an existing vendor pricelist. In both scenarios, we assume
your product list and vendor list is updated and you want to import the
price list of vendors for a given product.

.. todo::
    note when import page has been written To understand the principles of import of data, we invite you to read the following document.

To import a list from a document, the best pratice is to export first to
get an example of data formating and a proper header to reimport.

.. image:: media/import07.png
    :align: center

.. image:: media/import04.png
    :align: center

Import the list for the first time
----------------------------------

Prepare the document
~~~~~~~~~~~~~~~~~~~~

In :menuselection:`Purchase --> Purchase --> Supplier Pricelists`, 
export a template of document to get import/export compatible and 
get the right format to import in mass. Create manually a data and export it 
(:menuselection:`select --> Action --> Export`)

.. image:: media/import07.png
    :align: center

Here is the list of fields you can import:

+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| **Header of the document to import (csv, xls)**     | **Meaning and how to get it**                                 | **Example**                            |
+=====================================================+===============================================================+========================================+
| name_id                                             | Vendor ID -> export supplier list to get it                   | \_\_export\_\_.res\_partner\_12        |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| product_code                                        | Vendor product Code -> free text                              | 569874                                 |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| price                                               | Vendor Price -> free text                                     | 1500                                   |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| product_tmpl_id.id                                  | Product Template ID -> export you product list to get it      | \_\_export\_\_.product_template_13     |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| currency_id.id                                      | Currency -> to get it export the currency list                |                                        |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| date_end                                            | End date of the price validity                                | 2015-10-22                             |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| min_qty                                             | Minimal quantity to purchase from this vendor                 | 2                                      |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| product_id.id                                       | Product Variante name -> export your variant list to get it   | \_\_export\_\_.product\_13             |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+
| date_start                                          | Start date of price validity                                  | 2015-12-31                             |
+-----------------------------------------------------+---------------------------------------------------------------+----------------------------------------+

You obtain a document which can be imported, fill in your vendor pices

.. image:: media/import02.png
    :align: center

Import this document in Odoo. Click on **Import** in the list view and
upload your document. You can validate and check error. Once the system
tells you everything is ok, you can import the list.

.. image:: media/import01.png
    :align: center

.. image:: media/import06.png
    :align: center

After the import, the **Vendors** section in **Inventory** tab of the
product form is filled in.

Update the vendor pricelist
~~~~~~~~~~~~~~~~~~~~~~~~~~~

When the pricelist of your suppliers change, it is necessary to update
existing prices.

Follow the procedure of the first scenario in order to export existing
data from :menuselection:`Purchases --> Purchase --> Vendor Pricelist`. 
Select everything, and export from the **Action** menu.

Change price, end date, add a line, change a supplier, ... and then
reimport in Odoo. Thanks to the ID, the list will be updated. Either the
id is recognized and the line is updated or the ID is not known by Odoo
and it will create a new pricelist line.

After the import, the **Vendors** section in **Inventory** tab of the
product form is updated.

.. image:: media/import03.png
    :align: center
