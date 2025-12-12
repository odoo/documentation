:show-content:

==============
Barcode Lookup
==============

`Barcode Lookup <https://www.barcodelookup.com/>`_ allows you to scan (or enter) products' barcodes
(:abbr:`UPC (Universal Product Code)`, :abbr:`EAN (European Article Number)`, or :abbr:`ISBN
(International Standard Book Number)`) to automatically create them in your Odoo database, complete
with product names, descriptions, images, categories, etc.

.. _barcodelookup/configuration:

Configuration
-------------

If your database is hosted on **Odoo Online**, you can use Barcode Lookup without configuration.

If your database is hosted on **Odoo.sh** or **on-premise**, proceed as follows:

#. Visit the `Barcode Lookup website <https://www.barcodelookup.com/api>`_ and click
   :guilabel:`Sign Up for the API`.
#. Choose the appropriate plan based on the number of barcodes you need to scan.
#. Fill in the required details and complete the registration process.
#. Copy the API key.
#. In Odoo, open the Settings app, scroll down to the :guilabel:`Integrations` section, and, under
   :guilabel:`Barcode Database`, paste the Barcode Lookup :guilabel:`API Key`.

Use
---

To fill in product information using Barcode Lookup, create a new product and fill in the
:guilabel:`Barcode` field. The product's details are then automatically imported from Barcode
Lookup, updating the following fields: :guilabel:`Name`, :guilabel:`Price`, :guilabel:`Description`,
:guilabel:`Tax`, :guilabel:`Image`, :guilabel:`Weight`, :guilabel:`Attributes`, :guilabel:`Product
category`, and :guilabel:`Volume`. You can then modify any field(s) as needed.

.. seealso::
   :ref:`Create new products during internal transfers using the Barcode Lookup database
   <barcode/setup/barcodelookup>`.
