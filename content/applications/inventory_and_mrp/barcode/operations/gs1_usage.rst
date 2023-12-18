=================
GS1 barcode usage
=================

.. _barcode/operations/gs1_usage:

.. |AI| replace:: :abbr:`A.I. (Application Identifier)`
.. |GTIN| replace:: :abbr:`GTIN (Global Trade Item Number)`

GS1 barcodes provide a standardized format that barcode scanners can interpret. They encode
information in a :ref:`specific structure recognized globally <barcode/operations/gs1>`, allowing
scanners to understand and process supply chain data consistently.

Odoo *Barcode* interprets and prints GS1 barcodes, automating product identification and tracking
in warehouse operations such as receiving, picking, and shipping.

The following sections contain examples of how Odoo uses GS1 barcodes provided by the business to
identify common warehouse items and automate certain warehouse workflows.

.. important::
   Odoo **does not** create GS1 barcodes. Businesses must purchase a unique Global Trade Item Number
   (GTIN) from GS1. Then, they can combine their existing GS1 barcodes with product and supply chain
   information (also provided by GS1) to create barcodes in Odoo.

.. seealso::
   - `Purchase GTINs <https://www.gs1.org/standards/get-barcodes>`_
   - :ref:`GS1 nomenclature <barcode/operations/gs1>`

.. _barcode/operations/gs1-lots:

Configure barcodes for product, quantity, and lots
==================================================

To build a GS1 barcode that contains information about a product, its quantities, and the lot
number, the following barcode patterns and Application Identifiers (A.I.) are used:

+------------+--------------------------+------+----------------------------------+------------------------------------------+
|    Name    |        Rule Name         | A.I. |       Barcode Pattern            |              Field in Odoo               |
+============+==========================+======+==================================+==========================================+
| Product    | Global Trade Item Number | 01   | (01)(\\d{14})                    | :guilabel:`Barcode` field on product form|
|            | (GTIN)                   |      |                                  |                                          |
+------------+--------------------------+------+----------------------------------+------------------------------------------+
| Quantity   | Variable count of items  | 30   | (30)(\\d{0,8})                   | :guilabel:`Units` field on transfer form |
+------------+--------------------------+------+----------------------------------+------------------------------------------+
| Lot Number | Batch or lot number      | 10   | (10)([!"%-/0-9:-?A-Z_a-z]{0,20}) | :guilabel:`Lot` on Detailed Operations   |
|            |                          |      |                                  | pop-up                                   |
+------------+--------------------------+------+----------------------------------+------------------------------------------+

.. _barcode/operations/lot-setup:

Configuration
-------------

First, :ref:`enable product tracking using lots <inventory/management/track_products_by_lots>` by
navigating to :menuselection:`Inventory app --> Configuration --> Settings`, and checking the box
for :guilabel:`Lots & Serial Numbers` under the :guilabel:`Traceability` heading.

Then, set up the product barcode by navigating to the intended product form in
:menuselection:`Inventory app --> Products --> Products` and selecting the product. On the product
form, click :guilabel:`Edit`. Then, in the :guilabel:`General Information` tab, fill in the
:guilabel:`Barcode` field with the unique 14-digit `Global Trade Item Number (GTIN)
<https://www.gs1.org/standards/get-barcodes>`_, which is a universally recognized identifying number
that is provided by GS1.

.. important::
   On the product form, omit the |AI| `01` for |GTIN| product barcode pattern, as it is only used to
   encode multiple barcodes into a single barcode that contains detailed information about the
   package contents.

.. example::

   To record the GS1 barcode for the product, `Fuji Apple`, enter the 14-digit |GTIN|
   `20611628936004` in the :guilabel:`Barcode` field on the product form.

   .. image:: gs1_usage/barcode-field.png
      :align: center
      :alt: Enter 14-digit GTIN into the Barcode field on product form.

.. tip::
   To view a list of *all* products and their corresponding barcodes in the Odoo database, navigate
   to :menuselection:`Inventory app --> Configuration --> Settings`. Under the :guilabel:`Barcode`
   heading, click on the :guilabel:`Configure Product Barcodes` button under the :guilabel:`Barcode
   Scanner` section. Enter the 14-digit |GTIN| into the :guilabel:`Barcode` column, then click
   :guilabel:`Save`.

   .. image:: gs1_usage/product-barcodes-page.png
      :align: center
      :alt: View the Product Barcodes page from inventory settings.

.. _barcode/operations/lot-setup-on-product:

After activating tracking by lots and serial numbers from the settings page, specify that this
feature is to be applied on each product by navigating to the :guilabel:`Inventory` tab on the
product form. Under :guilabel:`Tracking`, choose the :guilabel:`By Lots` radio button.

.. image:: gs1_usage/track-by-lots.png
   :align: center
   :alt: Enable product tracking by lots in the "Inventory" tab of the product form.

Scan barcode on receipt
-----------------------

To ensure accurate lot interpretation in Odoo on product barcodes scanned during a receipt
operation, navigate to the :menuselection:`Barcode` app to manage the :ref:`receipt picking process
<barcode/operations/scan-received-products>`.

From the :guilabel:`Barcode Scanning` dashboard, click the :guilabel:`Operations` button, then the
:guilabel:`Receipts` button to view the list of vendor receipts to process. Receipts generated from
:abbr:`POs (Purchase Orders)` are listed, but new receipt operations can also be created directly
through the :menuselection:`Barcode` app using the :guilabel:`Create` button.

On the list of receipts, click on the warehouse operation (`WH/IN`) and scan product barcodes and
lot numbers with a barcode scanner. The scanned product then appears on the list. Use the
:guilabel:`✏️ (pencil)` button to open a window and manually enter quantities for specific lot
numbers.

.. example::
   After placing a :abbr:`PO (Purchase Order)` for fifty apples, navigate to the associated receipt
   in the *Barcode* app.

   Scan the barcode containing the |GTIN|, quantity, and lot number. For testing with a barcode
   scanner, below is an example barcode for the fifty Fuji apples in Lot 2.

   .. list-table::
      :widths: 50 50
      :header-rows: 1
      :stub-columns: 1

      * - 50 Fuji apples in Lot0002
        -
      * - 2D Matrix
        - .. image:: gs1_usage/fuji-apples-barcode.png
             :alt: 2D matrix of GS1 barcode of 50 fuji apples with an assigned lot number.
      * - |AI| (product)
        - 01
      * - GS1 Barcode (product)
        - 20611628936004
      * - |AI| (quantity)
        - 30
      * - GS1 Barcode (quantity)
        - 00000050
      * - |AI| (lot)
        - 10
      * - GS1 Barcode (lot #)
        - LOT0002
      * - Full GS1 barcode
        - 0120611628936004 3000000050 10LOT0002

   :ref:`If the configuration is correct <barcode/operations/troubleshooting>`, `50/50`
   :guilabel:`Units` processed will be displayed and the :guilabel:`Validate` button turns green.
   Click the :guilabel:`Validate` button to complete the reception.

   .. image:: gs1_usage/receive-50-apples.png
      :align: center
      :alt: Scan the barcode for a product on the reception picking page in the *Barcode* app.

.. _barcode/operations/quantity-ex:

Configure barcode for product and non-unit quantity
===================================================

To build a GS1 barcode that contains products measured in a non-unit quantity, like kilograms, for
example, the following barcode patterns are used:

+-------------+--------------------------+----------+--------------------+----------------------------+
|    Name     |        Rule Name         |   A.I.   |  Barcode Pattern   |       Field in Odoo        |
+=============+==========================+==========+====================+============================+
| Product     | Global Trade Item Number | 01       | (01)(\\d{14})      | :guilabel:`Barcode` field  |
|             | (GTIN)                   |          |                    | on product form            |
+-------------+--------------------------+----------+--------------------+----------------------------+
| Quantity in | Variable count of items  | 310[0-5] | (310[0-5])(\\d{6}) | :guilabel:`Units` field on |
| kilograms   |                          |          |                    | transfer form              |
+-------------+--------------------------+----------+--------------------+----------------------------+

Scan barcode on receipt
-----------------------

To confirm that quantities are correctly interpreted in Odoo, place an order in the *Purchase* app
using the appropriate unit of measure (:guilabel:`UoM`) for the quantity of products to be
purchased.

.. seealso::
   :ref:`Simplify vendor unit conversions with UoMs <inventory/management/uom-example>`

After the order is placed, navigate to the :menuselection:`Barcode` app to :ref:`receive the vendor
shipment <barcode/operations/scan-received-products>`.

.. example::
   On the receipt in the *Barcode* app, receive an order for `52.1 kg` of peaches by scanning the
   barcode containing the |GTIN| and quantity of peaches in kilograms.

   .. list-table::
      :widths: 50 50
      :header-rows: 1
      :stub-columns: 1

      * - 52.1 kg of Peaches
        -
      * - 2D Matrix
        - .. image:: gs1_usage/peaches-barcode.png
             :alt: 2D matrix of GS1 barcode of 52.1 kg of peaches.
      * - |AI| (product)
        - 01
      * - GS1 Barcode (product)
        - 00614141000012
      * - |AI| (kg, 1 decimal point)
        - 3101
      * - GS1 Barcode (quantity)
        - 000521
      * - Full GS1 barcode
        - 0100614141000012 3101000521

   :ref:`If the configuration is correct <barcode/operations/troubleshooting>`, `52.1 / 52.1`
   :guilabel:`kg` will be displayed and the :guilabel:`Validate` button turns green. Finally, press
   :guilabel:`Validate` to complete the validation.

   .. image:: gs1_usage/scan-barcode-peaches.png
      :align: center
      :alt: Scan barcode screen for a reception operation in the Barcode app.

Verify product moves
====================

For additional verification, the quantities of received products are also recorded on the
:guilabel:`Product Moves` report, accessible by navigating to :menuselection:`Inventory app -->
Reporting --> Product Moves`.

The items on the :guilabel:`Product Moves` report are grouped by product by default. To confirm the
received quantities, click on a product line to open its collapsible drop-down menu, which displays
a list of *stock move lines* for the product. The latest stock move matches the warehouse reception
reference number (e.g. `WH/IN/00013`) and quantity processed in the barcode scan, demonstrating that
the records processed in the *Barcode* app were properly stored in *Inventory*.

.. image:: gs1_usage/stock-moves-peach.png
   :align: center
   :alt: Reception stock move record for 52.1 kg of peaches.
