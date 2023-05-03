========================
GS1 barcode nomenclature
========================

`GS1 nomenclature <https://www.gs1us.org/>`_ consolidates multiple pieces of information in a single
barcode. Each piece needs to follow a specific barcode pattern—which is a defined format of numbers,
letters, special characters, and character length—to ensure proper interpretation of the barcode. By
scanning the barcode on an unopened box, GS1 nomenclature can identify the product, lot number,
number of units contained, and more.

.. seealso::
   - `All GS1 barcodes <https://www.gs1.org/standards/barcodes/application-identifiers>`_
   - :ref:`Odoo's default GS1 rules <barcode/operations/default-gs1-nomenclature-list>`
   - :ref:`Why's my barcode not working? <barcode/operations/troubleshooting>`

.. _barcode/operations/set-up-barcode-nomenclature:

Set up barcode nomenclature
===========================

To use GS1 nomenclature, navigate to the :menuselection:`Inventory app --> Configuration -->
Settings`. Then under the :guilabel:`Barcode` section, check the :guilabel:`Barcode Scanner` box.
Next, select :menuselection:`Barcode Nomenclature --> Default GS1 Nomenclature` from the default
barcode nomenclature options.

.. image:: gs1_nomenclature/setup-gs1-nomenclature.png
   :align: center
   :alt: Choose GS1 from dropdown and click the internal link to see the list of GS1 rules.

To view and edit a list of GS1 *rules* and *barcode patterns* Odoo supports by default, click the
:guilabel:`➡️ (External link)` icon to the right of the :guilabel:`Barcode Nomenclature` selection.

Opening the pop-up table provides an editable view of GS1 :guilabel:`Rule Names` available in Odoo.
The table contains all the information that can be condensed with a GS1 barcode, along with the
corresponding :guilabel:`Barcode Pattern`.

.. tip::
   After setting GS1 as the barcode nomenclature, :menuselection:`Barcode Nomenclatures` can also be
   accessed by first enabling :ref:`developer mode <developer-mode>`. Navigate to
   :menuselection:`Inventory app --> Configuration --> Barcode Nomenclatures` and finally, select
   :guilabel:`Default GS1 Nomenclature`.

.. _barcode/operations/create-GS1-barcode:

Use GS1 barcode
===============

To build GS1 barcodes in Odoo, combine multiple pieces of information using the specified barcode
pattern. The `application identifier
<https://www.gs1.org/standards/barcodes/application-identifiers>`_ (A.I.) serves as the universal
prefix for GS1 for barcode identification. Odoo uses regular expressions to describe barcode
patterns concisely. Each barcode pattern begins with a required 2-4 digit :abbr:`A.I. (application
identifier)`, which corresponds to the rule defined in the system's :ref:`barcode nomenclature list
<barcode/operations/set-up-barcode-nomenclature>`. By including the appropriate :abbr:`A.I.
(application identifier)` from the list, Odoo can accurately interpret GS1 barcodes. While most
barcode patterns have a flexible length, some specific patterns, such as barcodes for dates, have
defined length requirements.

.. tip::
   Use the FNC1 separator (`\x1D`) to end the barcode without needing to reach the maximum character
   length.

Refer to the :ref:`GS1 nomenclature list <barcode/operations/default-gs1-nomenclature-list>` to see
a comprehensive list of all barcode patterns and rules to follow. Otherwise, the following section
contains examples of how to generate a barcode for common items in a warehouse.

Product + quantity + lot
------------------------

To build a GS1 barcode for a box that contains a product, number of units in it, and the lot number,
the following barcode patterns are used:

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
~~~~~~~~~~~~~

To track products using lots, first enable the :ref:`Lots and Serial Numbers
<inventory/management/track_products_by_lots>` feature. To do so, navigate to
:menuselection:`Inventory app --> Configuration --> Settings`. Next, under the
:guilabel:`Traceability` heading, check the box for :guilabel:`Lots & Serial Numbers`.

Then, set up the product barcode by navigating to the intended product form in
:menuselection:`Inventory app --> Products --> Products` and selecting the product. On the product
form, click :guilabel:`Edit`. Then, in the :guilabel:`General Information` tab, fill in the
:guilabel:`Barcode` field with the 14-digit `Global Trade Item Number (GTIN)
<https://www.gs1.org/standards/get-barcodes>`_, which is a universal and unique identifying number
from GS1.

.. important::
   On the product form, omit the :abbr:`A.I. (application identifier)` `01` for GTIN product barcode
   pattern, as it is only used to encode multiple barcodes into a single barcode that contains
   detailed information about the package contents.

.. example::
   To create a barcode for the product, `Fuji Apple`, enter the 14-digit GTIN `12345678901231` in
   the :guilabel:`Barcode` field on the product form.

   .. image:: gs1_nomenclature/barcode-field.png
      :align: center
      :alt: Enter 14-digit GTIN into the Barcode field on product form.

.. tip::
   It is also possible to view a list of all products and barcodes. To access this list, go to
   :menuselection:`Inventory --> Configuration --> Settings`. Under the :guilabel:`Barcode` heading,
   click on the :guilabel:`Configure Product Barcodes` button under the :guilabel:`Barcode Scanner`
   section. Enter the 14-digit GTIN into the :guilabel:`Barcode` column, then click
   :guilabel:`Save`.

   .. image:: gs1_nomenclature/product-barcodes-page.png
      :align: center
      :alt: View the Product Barcodes page from inventory settings.

.. _barcode/operations/lot-setup-on-product:

Next, enable lots and serial number tracking on the product. Select the :guilabel:`Inventory` tab on
the product form. Under :guilabel:`Tracking`, choose the :guilabel:`By Lots` radio button.

.. image:: gs1_nomenclature/track-by-lots.png
   :align: center
   :alt: Enable product tracking by lots in the "Inventory" tab of the product form.

Scan barcode on receipt
~~~~~~~~~~~~~~~~~~~~~~~

To ensure accurate lot interpretation in Odoo on product barcodes scanned during a receipt
operation, navigate to the :menuselection:`Barcode` app to manage the :ref:`receipt picking process
<barcode/operations/scan-received-products>`.

From the :guilabel:`Barcode Scanning` dashboard, click the :guilabel:`Operations` button, then the
:guilabel:`Receipts` button to view the list of vendor receptions to process. Receipts generated
from :abbr:`POs (Purchase Orders)` are listed, but new receipt operations can also be created
directly through the :menuselection:`Barcode` app using the :guilabel:`Create` button.

On the list of receipts, click on the warehouse operation (`WH/IN`) and scan product barcodes and
lot numbers with a barcode scanner. The scanned product then appears on the list. Use the
:guilabel:`✏️ (pencil)` button to open a window and manually enter quantities for specific lot
numbers.

.. example::
   After placing a :abbr:`PO (Purchase Order)` for 50 apples, navigate to the associated receipt.
   Scan the product barcode, and Odoo will prompt for the lot number.

   .. image:: gs1_nomenclature/receive-50-apples.png
      :align: center
      :alt: Scan the barcode for a product on the reception picking page in the *Barcode* app.

   Scan the lot number to process 1 of 50 apples. To avoid scanning 49 remaining barcodes, click
   the :guilabel:`✏️ (pencil)` button next to the desired lot number.

   .. image:: gs1_nomenclature/scan-apple-lot-number.png
      :align: center
      :alt: Scan lot number and click the pencil to edit quantities.

   Doing so opens a mobile-friendly keypad page to specify received quantities. Use the keypad to
   specify the :guilabel:`Units` for the lot number. When finished, click :guilabel:`Confirm`.

   .. image:: gs1_nomenclature/edit-lot-quantities.png
      :align: center
      :alt: Change scanned quantities using pencil button.

Repeat this process to specify additional lot numbers and quantities in this receipt. Once the
:guilabel:`Units` are all accounted for, finish the reception by clicking the :guilabel:`Validate`
button.

Alternatively, scan the barcode containing the product, lot number, and quantity to complete the
receipt operation in fewer steps.

Product + non-unit quantity
---------------------------

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
~~~~~~~~~~~~~~~~~~~~~~~

To confirm that quantities are correctly interpreted in Odoo, place an order in the *Purchase* app
using the appropriate unit of measure (:guilabel:`UoM`) for the quantity of products to be
purchased.

.. seealso::
   :ref:`Simplify vendor unit conversions with UoMs <inventory/management/uom-example>`

After the order is placed, navigate to the :menuselection:`Barcode` app to :ref:`receive the vendor
shipment <barcode/operations/scan-received-products>`.

.. example::
   On the receipt in the *Barcode* app, receive an order for `52.1 kg` of peaches by scanning the
   barcode. If `52.1 / 52.1` :guilabel:`kg` appears on the page, this means the reception was
   processed without issue. Finally, press :guilabel:`Validate`.

   Note: the :abbr:`A.I. (application identifier)` for kilograms, `310` + `1`, was used to represent
   `52.1` kg as a barcode: `000521`. This is because the `1` represents how many digits from the
   right to place the decimal point.

   .. image:: gs1_nomenclature/scan-barcode-peaches.png
      :align: center
      :alt: Scan barcode screen for a reception operation in the Barcode app.

For additional verification purposes, the quantities of received products are also recorded on the
:guilabel:`Product Moves` report, accessible by navigating to :menuselection:`Inventory app -->
Reporting --> Product Moves`.

The items on the :guilabel:`Product Moves` report are grouped by product by default. To confirm the
received quantities, click on a product line to open its collapsible drop-down menu, which displays
a list of *stock move lines* for the product. The latest stock move matches the warehouse reception
reference number (e.g. `WH/IN/00013`) and quantity processed in the barcode scan, demonstrating that
the records processed in the *Barcode* app were properly stored in *Inventory*.

.. image:: gs1_nomenclature/stock-moves-peach.png
   :align: center
   :alt: Reception stock move record for 52.1 kg of peaches.

.. _barcode/operations/create-new-rules:

Create rules
------------

If a supplier uses a GS1 barcode with a field not supported by Odoo's :ref:`default GS1 list
<barcode/operations/default-gs1-nomenclature-list>`, Odoo will fail to interpret the entire barcode.
To ensure the complete reading of the barcode, it is necessary to add the missing barcode to Odoo's
list.

.. important::
   While the new field will be read, the information won't link to an existing field in Odoo without
   developer customizations. However, adding new rules is still useful to ensure the rest of the
   fields in the barcode are interpreted correctly.

Begin by turning on :ref:`developer mode <developer-mode>` and navigating to the :guilabel:`Barcode
Nomenclatures` list in :menuselection:`Inventory app --> Configuration --> Barcode Nomenclatures`.
Then, select the :guilabel:`Default GS1 Nomenclature` list item.

On the :guilabel:`Default GS1 Nomenclature` page, select :guilabel:`Add a line` at the bottom of the
table, which opens a window to create a new rule. The :guilabel:`Rule Name` field is used internally
to identify what the barcode represents. The barcode :guilabel:`Types` are different classifications
of information that can be understood by the system (e.g. product, quantity, best before date,
package, coupon). The :guilabel:`Sequence` represents the priority of the rule; this means the
smaller the value, the higher the rule appears on the table. Odoo follows the sequential order of
this table and will use the first rule it matches based on the sequence. The :guilabel:`Barcode
Pattern` is how the sequence of letters or numbers is recognized by the system to contain
information about the product.

After filling in the information, click the :guilabel:`Save & New` button to make another rule or
click :guilabel:`Save & Close` to save and return to the table of rules.

.. _barcode/operations/troubleshooting:

Barcode troubleshooting
=======================

Since GS1 barcodes are challenging to work with, here are some checks to try when the barcodes are
not working as expected:

#. Ensure that the :guilabel:`Barcode Nomenclature` setting is set as :menuselection:`Default GS1
   Nomenclature`. Jump to the :ref:`nomenclature setup section
   <barcode/operations/set-up-barcode-nomenclature>` for more details.
#. Ensure that the fields scanned in the barcode are enabled in Odoo. For example, to scan a barcode
   containing lots and serial numbers, make sure the :guilabel:`Lots & Serial Numbers` feature is
   enabled in :ref:`Odoo's settings <barcode/operations/lot-setup>` and :ref:`on the product
   <barcode/operations/lot-setup-on-product>`.
#. Omit punctuation such as parentheses `()` or brackets `[]` between the :abbr:`A.I. (Application
   Identifier)` and the barcode sequence. These are typically used in examples for ease of reading
   and should **not** be included in the final barcode. For more details on building GS1 barcodes,
   go to :ref:`this section <barcode/operations/create-GS1-barcode>`.
#. When a single barcode contains multiple encoded fields, Odoo requires all rules to be listed in
   the barcode nomenclature for Odoo to read the barcode. :ref:`This section
   <barcode/operations/create-new-rules>` details how to add new rules in the barcode nomenclature.

.. _barcode/operations/default-gs1-nomenclature-list:

GS1 nomenclature list
=====================

The table below contains Odoo's default list of GS1 rules. Barcode patterns are written in regular
expressions. Only the first three rules require a `check digit
<https://www.gs1.org/services/check-digit-calculator>`_ as the final character.

+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
|                Rule Name                |    Type     |       Barcode Pattern        |  GS1 Content Type  |      Odoo field       |
+=========================================+=============+==============================+====================+=======================+
| Serial Shipping Container Code          | Package     | (00)(\\d{18})                | Numeric identifier | Package name          |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Global Trade Item Number (GTIN)         | Unit        | (01)(\\d{14})                | Numeric identifier | :guilabel:`Barcode`   |
|                                         | Product     |                              |                    | field on product form |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| GTIN of contained trade items           | Unit        | (02)(\\d{14})                | Numeric identifier | Packaging             |
|                                         | Product     |                              |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Ship to / Deliver to global             | Destination | (410)(\\d{13})               | Numeric identifier | Destination           |
| location                                | location    |                              |                    | location              |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Ship / Deliver for forward              | Destination | (413)(\\d{13})               | Numeric identifier | Source location       |
|                                         | location    |                              |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| I.D. of a physical location             | Location    | (414)(\\d{13})               | Numeric identifier | Location              |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Batch or lot number                     | Lot         | (10)                         | Alpha-numeric name | Lot                   |
|                                         |             | ([!"%-/0-9:-?A-Z_a-z]{0,20}) |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Serial number                           | Lot         | (21)                         | Alpha-numeric name | Serial number         |
|                                         |             | ([!"%-/0-9:-?A-Z_a-z]{0,20}) |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Packaging date (YYMMDD)                 | Packaging   | (13)(\\d{6})                 | Date               | Pack date             |
|                                         | Date        |                              |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Best before date (YYMMDD)               | Best before | (15)(\\d{6})                 | Date               | Best before date      |
|                                         | Date        |                              |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Expiration date (YYMMDD)                | Expiration  | (17)(\\d{6})                 | Date               | Expiry date           |
|                                         | Date        |                              |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Variable count of items                 | Quantity    | (30)(\\d{0,8})               | Measure            | UoM: Units            |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Count of trade items                    | Quantity    | (37)(\\d{0,8})               | Measure            | Qty in units for      |
|                                         |             |                              |                    | containers (AI 02)    |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Net weight: kilograms (kg)              | Quantity    | (310[0-5])(\\d{6})           | Measure            | Qty in kg             |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Length in meters (m)                    | Quantity    | (311[0-5])(\\d{6})           | Measure            | Qty in m              |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Net volume: liters (L)                  | Quantity    | (315[0-5])(\\d{6})           | Measure            | Qty in L              |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Net volume: cubic meters (m\ :sup:`3`)  | Quantity    | (316[0-5])(\\d{6})           | Measure            | Qty in m\ :sup:`3`    |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Length in inches (in)                   | Quantity    | (321[0-5])(\\d{6})           | Measure            | Qty in inches         |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Net weight/volume: ounces (oz)          | Quantity    | (357[0-5])(\\d{6})           | Measure            | Qty in oz             |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Net volume: cubic feet (ft\ :sup:`3`)   | Quantity    | (365[0-5])(\\d{6})           | Measure            | Qty in ft\ :sup:`3`   |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
| Packaging type                          | Packaging   | (91)                         | Alpha-numeric name | Package type          |
|                                         | Type        | ([!"%-/0-9:-?A-Z_a-z]{0,90}) |                    |                       |
+-----------------------------------------+-------------+------------------------------+--------------------+-----------------------+
