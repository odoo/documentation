============
FIFO removal
============

The *First In, First Out* (FIFO) removal strategy selects products with the earliest arrival dates.
This method is useful for companies selling products that have short demand cycles, like clothes,
for example. By using :abbr:`FIFO (First In, First Out)`, companies can prevent prolonged stock
retention of specific styles.

.. seealso::
   :doc:`About removal strategies <../removal_strategies>`

.. example::
   Various quantities of the product, `T-shirt`, tracked by lot numbers, arrive on August 1st and
   August 25th. For an order made on September 1st, the :abbr:`FIFO (First In, First Out)` removal
   strategy prioritizes lots that have been in stock the longest. So, products received on August
   1st are selected first for picking.

   .. image:: fifo/fifo-example.png
      :align: center
      :alt: Illustration of FIFO selecting the oldest products in stock.

.. seealso::
   :ref:`Lot/serial number setup details <inventory/warehouses_storage/lots-setup>`

.. _inventory/warehouses_storage/arrival_date:

Arrival date
============

To see the product lot or serial number that arrived in inventory first, navigate to
:menuselection:`Inventory app --> Products --> Lots/Serial Numbers`.

Then, select the :guilabel:`▶️ (right-pointing arrow)` icon on the left of a product line, in order
to reveal a list of the product's lots or serial numbers that are in stock. The :guilabel:`Created
On` field shows the lot/serial number creation date, which is, essentially, the arrival date.

.. example::
   Serial number `00000000500` of the product, `Cabinet with Doors`, arrived on December 29th, as
   displayed in the :guilabel:`Created On` field.

   .. image:: fifo/created-on.png
      :align: center
      :alt: Display arrival date of a lot for an item.

Workflow
========

To understand how :abbr:`FIFO (First In, First Out)` rotates products out, consider the following
example, focusing on three lots of white shirts.

The shirts are from the *All/Clothes* category, where :abbr:`FIFO (First In, First Out)` is set as
the :guilabel:`Force Removal Strategy`.

The white shirts are tracked :guilabel:`By Lots` in the :guilabel:`Inventory` tab of the product
form.

.. seealso::
   - :ref:`Set up force removal strategy <inventory/warehouses_storage/removal-config>`
   - :ref:`Enable lots tracking <inventory/warehouses_storage/lots-setup>`

The following table represents the on-hand stock and lot number details of white shirts.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * -
     - LOT1
     - LOT2
     - LOT3
   * - On-hand stock
     - 5
     - 3
     - 2
   * - :ref:`Created on <inventory/warehouses_storage/arrival_date>`
     - March 1
     - April 1
     - May 1

To see the removal strategy in action, create a :ref:`delivery order <inventory/delivery/one-step>`
for six white shirts by navigating to the :menuselection:`Sales app` and creating a new quotation.

After clicking :guilabel:`Confirm` on the sales order, a delivery order with the oldest lot numbers
for shirts are reserved, using the :abbr:`FIFO (First In, First Out)` removal strategy.

To view the detailed pickings, click the :guilabel:`⦙≣ (bulleted list)` icon, located on the
far-right of the white shirt's product line in the :guilabel:`Operations` tab of the delivery order.
Doing so opens the :guilabel:`Open: Stock move` pop-up window.

In the :guilabel:`Open: Stock move` pop-up window, the :guilabel:`Pick from` field displays where
the quantities to fulfill the :guilabel:`Demand` are picked from. Since the order demanded six
shirts, all five shirts from `LOT1`, and one shirt from `LOT2`, are selected.

.. image:: fifo/white-shirt-picking.png
   :align: center
   :alt: Two lots being reserved for a sales order with the FIFO strategy.
