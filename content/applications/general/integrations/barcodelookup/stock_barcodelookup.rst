===========================
Barcode Lookup in transfers
===========================

Ensure you have configured the API key for the Barcode Lookup feature in Odoo.
If not, refer to the :doc:`Barcodelookup API key <../generic_barcodelookup>`.

Create product in Transfers
---------------------------

- During any type of transfers, you encounter a product that is not available in the system.
- You can just scan the barcode of the product using a barcode scanner.
- Now you will have a toaster message saying that the product is not available in the system, would you like to create it.
- You can use this example barcode to test the feature. Scan the barcode using a barcode scanner or manually enter its value.

    .. image:: ../generic_barcodelookup/barcodelookup_product.png

- Click on the create button and you will be redirected to the product creation popup prefilled with the product information of the scanned barcode.

    .. image:: stock_barcodelookup/toaster.png

- A new line will be created for the scanned barcode in the transfer.

    .. image:: stock_barcodelookup/new_product_added.png
