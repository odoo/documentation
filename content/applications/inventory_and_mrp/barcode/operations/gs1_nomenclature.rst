========================
GS1 barcode nomenclature
========================

.. _barcode/operations/gs1:

.. |AI| replace:: :abbr:`A.I. (Application Identifier)`
.. |GTIN| replace:: :abbr:`GTIN (Global Trade Item Number)`
.. |GTINs| replace:: :abbr:`GTINs (Global Trade Item Numbers)`


`GS1 nomenclature <https://www.gs1us.org/>`_ consolidates various product and supply chain data into
a single barcode. Odoo takes in `unique Global Trade Item Numbers
<https://www.gs1.org/standards/get-barcodes>`_ (GTIN), purchased by businesses, to enable global
shipping, sales, and eCommerce product listing.

Configure GS1 nomenclature to scan barcodes of sealed boxes and identify essential product
information, such as |GTIN|, lot number, quantity information, and more.

.. important::
   |GTINs| are unique product identification that **must** be `purchased from GS1
   <https://www.gs1.org/standards/get-barcodes>`_ to use GS1 barcodes.

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
   :alt: Choose GS1 from dropdown and click the external link to see the list of GS1 rules.

The list of GS1 *rules* and *barcode patterns* Odoo supports by default is accessible by clicking
the :guilabel:`➡️ (arrow)` icon to the right of the :guilabel:`Barcode Nomenclature` selection.

In the :guilabel:`Open: Nomenclature` pop-up table, view and edit the GS1 :guilabel:`Rule Names`
available in Odoo. The table contains all the information that can be condensed with a GS1 barcode,
along with the corresponding :guilabel:`Barcode Pattern`.

.. tip::
   After setting GS1 as the barcode nomenclature, the :menuselection:`Barcode Nomenclatures`
   settings can also be accessed by a hidden menu that's discoverable after enabling :ref:`developer
   mode <developer-mode>`. Once enabled, navigate to the :menuselection:`Inventory app -->
   Configuration --> Barcode Nomenclatures` menu and finally, select :guilabel:`Default GS1
   Nomenclature`.

.. _barcode/operations/create-GS1-barcode:

Use GS1 barcodes in Odoo
========================

For product identification using GS1 barcodes in Odoo, businesses obtain a `unique GTIN
<https://www.gs1.org/standards/get-barcodes>`_ as an internationally distinct product identifier
purchased from GS1. This |GTIN| is combined with specific product details following GS1's designated
*barcode pattern*. The barcode pattern's arrangement of numbers and letters must adhere to GS1
conventions for accurate interpretation by global systems along the supply chain.

Every barcode starts with a 2-4 digit `application identifier
<https://www.gs1.org/standards/barcodes/application-identifiers>`_ (A.I.). This required prefix
universally indicates what kind of information the barcode contains. Odoo follows GS1 rules for
identifying information, as detailed in the :ref:`default GS1 rules list
<barcode/operations/default-gs1-nomenclature-list>`. Including the relevant |AI| from the list
enables Odoo to correctly interpret GS1 barcodes. While most barcode patterns have a fixed length
requirement, certain ones, such as lots and serial numbers, have flexible length.

.. tip::
   For flexible-length barcode patterns not placed at the end of the GS1 barcode, use the FNC1
   separator (`\\x1D`) to end the barcode.

   Example: The barcode pattern for lot numbers is 20 characters long. Instead of creating a
   20-character lot number barcode, like `LOT00000000000000001`, use the FNC1 separator to make it
   shorter: `LOT001\x1D`.

Refer to the :ref:`GS1 nomenclature list <barcode/operations/default-gs1-nomenclature-list>` to see
a comprehensive list of all barcode patterns and rules to follow. Otherwise, refer to :ref:`this
GS1 usage doc <barcode/operations/gs1_usage>` for specific examples of combining |GTIN| to product
information and configuring the workflow.

.. seealso::
   - :ref:`Lots workflow <barcode/operations/gs1-lots>`
   - :ref:`Non-unit quantities workflow <barcode/operations/quantity-ex>`

.. _barcode/operations/create-new-rules:

Create rules
------------

GS1 rules are a specific format of information contained in the barcode, beginning with an |AI| and
containing a defined length of characters. Scanning GS1 barcodes from the :ref:`default GS1 list
<barcode/operations/default-gs1-nomenclature-list>` auto-fills corresponding data in the Odoo
database.

Adding GS1 barcode rules in Odoo ensures accurate interpretation of unique, non-standard GS1
formats.

To do so, begin by turning on :ref:`developer mode <developer-mode>` and navigating to the
:guilabel:`Barcode Nomenclatures` list in :menuselection:`Inventory app --> Configuration -->
Barcode Nomenclatures`. Then, select the :guilabel:`Default GS1 Nomenclature` list item.

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

#. Test barcodes containing multiple encoded fields, piece by piece, to figure out which field is
   causing the issue.

   .. example::
      When testing a barcode containing the |GTIN|, lot number, and quantity, start by scanning the
      |GTIN| alone. Then, test the |GTIN| with the lot number, and finally, try scanning the whole
      barcode.

#. After diagnosing the encoded field is unknown, :ref:`add new rules
   <barcode/operations/create-new-rules>` to Odoo's default list to recognize GS1 barcodes with
   unique specifications.

   .. important::
      While the new field will be read, the information won't link to an existing field in Odoo
      without developer customizations. However, adding new rules is necessary to ensure the rest of
      the fields in the barcode are interpreted correctly.

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
