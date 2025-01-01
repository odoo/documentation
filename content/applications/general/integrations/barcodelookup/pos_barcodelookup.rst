==================
POS Barcode Lookup
==================

Ensure you have configured the API key for the Barcode Lookup feature in Odoo.
If not, refer to the :doc:`Barcodelookup API key <../generic_barcodelookup>`.

Instant Product Creation from Point-of-sale
-------------------------------------------

To instantly create and use a product in the Point of Sale module:

- Open the Point of Sale module.

- Navigate to :guilabel:`Create Product` from the :guilabel:`options` menu at the top right of the navbar.

    .. image:: pos_barcodelookup/creationordermenu.png

- Product creation popup will appear. You can use this example barcode to test the feature. Scan the barcode using a barcode scanner or manually enter its value.

    .. image:: ../generic_barcodelookup/barcodelookup_product.png

- Within moments of scanning, all relevant product details will be displayed. You can then set additional options such as category, inventory tracking, and tax settings. Once everything is configured, click :guilabel:`Save` to finalize the process.

    .. image:: pos_barcodelookup/autofill.png

- The newly created product will be immediately available on the screen, ready for use, as shown below.

    .. image:: pos_barcodelookup/readytouse.png
