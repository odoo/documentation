===========================
Reassign lot/serial numbers
===========================

Changing a product's tracking settings to use lots or serial numbers, *after* storing products in
Odoo without them, can lead to inconsistent records. Follow this documentation to learn how to use
an inventory adjustment to assign lot or serial numbers to products that were **not** originally
assigned any.

To enable lots and serial numbers, go to :menuselection:`Inventory app --> Configuration -->
Settings`, then in the :guilabel:`Traceability` section,  select :guilabel:`Lots & Serial Numbers`.

.. note::
   This document outlines the process of using two inventory adjustments: one to remove incorrect
   records *without* lot numbers, and another to save the quantities *with* the lot numbers.

.. important::
   After an item is entered into inventory, that product **cannot** be tracked. Only *unpurchased*
   or *unsold* inventoried items can have tracking enabled and have lots and serial numbers added.

   Additionally, the :guilabel:`Track Inventory` option **must** be enabled for the product to
   follow the process outlined in this document.

Change product tracking and perform inventory adjustments
=========================================================

To change the product's settings to track by lots or serial numbers, begin by navigating to
:menuselection:`Inventory app --> Products --> Products`, and select the intended product.

Change the :guilabel:`Track Inventory` value to :guilabel:`By Lots` or :guilabel:`By Unique Serial
Number`. A message appears that explains that an inventory adjustment is required to add lot or
serial numbers to existing inventory.

Hover over the :guilabel:`Quantity On Hand` field and an :guilabel:`Update` link appears.

.. image:: reassign/update-link.png
   :alt: The Update link appears to the right of the Quantity On Hand field.

Click the :guilabel:`Update` link and an :guilabel:`Update Quantity` page opens. Update the
:guilabel:`On Hand Quantity` field to `0`, then click the :guilabel:`Save` button.

.. note::
   If the product is stored in multiple locations, make sure the **total** on hand quantity at
   **all** locations is zero.

.. image:: reassign/remove-quant.png
   :alt: The Update Quantity page, highlighting the On Hand Quantity field.

Then, click the :guilabel:`New` button. Add a lot or serial number in the :guilabel:`Lot/Serial
Number` field, and specify a quantity. Click the :guilabel:`Save` button. Repeat this process for
all lots or serial numbers for the product in the inventory.

.. image:: reassign/update-quantity.png
   :alt: Fill in the Lot/Serial Number and On Hand Quantity fields.

.. tip::
   To find the original quantity, and adjust the :guilabel:`On Hand Quantity` accordingly, click the
   :icon:`fa-history` :guilabel:`History` button on the far-right of the edited line.

   .. image:: reassign/adjustment.png
      :alt: Show the History button on the Inventory Adjustments page.

   The inventory adjustment that changed the on-hand quantity to zero is displayed in the
   :guilabel:`Quantity` field.

    .. image:: reassign/history.png
       :alt: Show the history entry.

.. seealso::
   - :doc:`Set up and use lot numbers <lots>`
   - :doc:`Use serial numbers <serial_numbers>`
   - :doc:`../../warehouses_storage/inventory_management/count_products`
