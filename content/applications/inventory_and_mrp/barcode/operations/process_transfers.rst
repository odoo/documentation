=================
Process transfers
=================

The Odoo **Barcode** app can be used to process *Batch*, *Wave*, and *Cluster* transfers that are
created in the **Inventory** app.

Process the batch
-----------------

First, navigate to :menuselection:`Barcode app --> Operations --> Delivery Orders`. From here,
select the card for the appropriate batch transfer, and click the :guilabel:`BATCH`smart button.

On the batch transfer screen, the products in the picking are grouped by location, and each line is
color-coded to associate products in the same picking together.

Then, follow the prompt to :guilabel:`Scan the source location` barcode for the storage location of
the first product. Then, scan the barcode for the product and package to process the transfer.

Repeat this for all products, and click the :guilabel:`Validate` button.

.. note::
   To find the package barcode, navigate to :menuselection:`Inventory app --> Products -->
   Packages`, select the desired package, click the :icon:`fa-gear` :guilabel:`Actions` icon at the
   top of the package form, and select the :guilabel:`Print` option.

.. tip::
   After creating a batch transfer and assigning a package to a picking, Odoo suggests the specified
   package by displaying the name *in italics* under the product name, ensuring pickers place
   products into the correct boxes.
