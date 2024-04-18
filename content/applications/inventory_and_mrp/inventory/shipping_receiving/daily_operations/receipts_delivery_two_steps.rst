============================================
Process receipts and deliveries in two steps
============================================

.. _inventory/receipts_delivery_two_steps:

Depending on a company's business processes, multiple steps may be needed before receiving or
shipping products. In the two-step receipt process, products are received in an input area, then
transferred to stock. Two-step receipts work best when various storage locations are being used,
such as locked or secured areas, freezers and refrigerators, or various shelves.

Products can be sorted according to where they are going to be stored, and employees can stock all
the products going to a specific location. The products are not available for further processing
until they are transferred into stock.

In the two-step delivery process, products that are part of a delivery order are picked from the
warehouse according to their removal strategy, and brought to an output location before being
shipped.

One situation where this would be useful is when using either a :abbr:`FIFO (First In, First Out)`,
:abbr:`LIFO (Last In, First Out)`, or :abbr:`FEFO (First Expired, First Out)` removal strategy,
where the products that are being picked need to be selected based on their receipt date or
expiration date.

Odoo is configured by default to :ref:`receive and deliver goods in one step
<inventory/receipts_delivery_one_step>`, so the settings need to be changed in order to utilize
two-step receipts and deliveries. Incoming and outgoing shipments do not need to be set to have the
same steps. For example, products can be received in two steps, but shipped in one step. In the
following example, two steps will be used for both receipts and deliveries.

Configure multi-step routes
===========================

First, make sure the :guilabel:`Multi-Step Routes` option is enabled in :menuselection:`Inventory
--> Configuration --> Settings`, under the :guilabel:`Warehouse` heading. After enabling the
setting, :guilabel:`Save` the changes.

.. note::
   Activating the :guilabel:`Multi-Step Routes` setting will also activate the :guilabel:`Storage
   Locations` feature.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-settings.png
   :align: center
   :alt: Activate multi-step routes and storage locations in inventory settings.

Next, the warehouse needs to be configured for two-step receipts and deliveries. Go to
:menuselection:`Inventory --> Configuration --> Warehouses`, and click on the warehouse to change
the warehouse settings.

Then, select :guilabel:`Receive goods in input and then stock (2 steps)` for :guilabel:`Incoming
Shipments`, and :guilabel:`Send goods in output and then deliver (2 steps)` for :guilabel:`Outgoing
Shipments`.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-shipments.png
   :align: center
   :alt: Set incoming and outgoing shipment options to receive and deliver in two steps.

.. tip::
   Activating two-step receipts and deliveries will create new *input* and *output* locations, which
   by default, are labeled :guilabel:`WH/Input` and :guilabel:`WH/Output`, respectively, on the
   :guilabel:`Locations` dashboard. To rename these locations, go to :menuselection:`Configuration
   --> Locations`, and select the :guilabel:`Location` to change. On the location form, update the
   :guilabel:`Location Name`, and make any other changes (if necessary).

Process a receipt in two steps (input + stock)
==============================================

Create a purchase order
-----------------------

On the main :menuselection:`Purchase` application dashboard, start by making a new quote by clicking
:guilabel:`New`. Then, select (or create) a :guilabel:`Vendor` from the drop-down field, add a
storable :guilabel:`Product` to the order lines, and click :guilabel:`Confirm Order` to finalize the
quote as a new purchase order.

.. important::
   For businesses with multiple warehouses that have different step configurations, the
   :guilabel:`Deliver To` field on the :abbr:`PO (Purchase Order)` form may need to be specified as
   the correct *input location* connected to the two-step warehouse, which can be done by selecting
   the warehouse from the drop-down selection that includes the `Receipts` label at the end of the
   name.

After confirming the :abbr:`PO (Purchase Order)`, a :guilabel:`Receipt` smart button appears at the
top of the :abbr:`PO (Purchase Order)` form. Click it to reveal the new receipt (WH/IN) operation.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-smart-button.png
   :align: center
   :alt: After confirming a purchase order, a Receipt smart button will appear.

Process the receipt
-------------------

Once the purchase order is confirmed, a receipt is generated and ready to process.

Navigate to the :menuselection:`Inventory app`, and locate the :guilabel:`Receipts` task card on the
:guilabel:`Inventory Overview` dashboard. This reveals a list of all receipts to process.

Click on the :guilabel:`Receipt` associated with the purchase order, then click :guilabel:`Validate`
to complete the receipt and move the product to :guilabel:`WH/Input`.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-receipt-form.png
   :align: center
   :alt: Receipt form for product move to WH/Input.

Process the internal transfer
-----------------------------

Once the receipt is validated, an internal transfer is created and ready to process.

Click back to the :guilabel:`Inventory Overview` in the breadcrumbs, and locate the
:guilabel:`Internal Transfers` task card.

Click the :guilabel:`# To Process` button to reveal a list of all internal transfers to process, and
select the transfer associated with the previously validated receipt.

Click :guilabel:`Validate` to complete the transfer and move the product from :guilabel:`WH/Input`
to :guilabel:`WH/Stock`.

Once the transfer is validated, the product enters inventory and is available for customer
deliveries or manufacturing orders.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-internal-transfer.png
   :align: center
   :alt: Validate the internal transfer to move the item to stock.

Process a delivery order in two steps (pick + ship)
===================================================

Create a sales order
--------------------

In the :menuselection:`Sales` application, create a new quote by clicking :guilabel:`New`. Select
(or create) a :guilabel:`Customer`, add a storable :guilabel:`Product` to the order lines, and then
click :guilabel:`Confirm`.

After confirming the :abbr:`SO (Sales Order)`, a :guilabel:`Delivery` smart button will appear in
the top, above the :abbr:`SO (Sales Order)` form. Click the :guilabel:`Delivery` smart button to
reveal the associated receipt.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-delivery-button.png
   :align: center
   :alt: Delivery smart button on sales order form.

.. tip::
   Sales order receipts can also be found in the :menuselection:`Inventory` application. In the
   :guilabel:`Overview` dashboard, click the :guilabel:`# To Process` smart button in the
   :guilabel:`Pick` Kanban card.

Process the picking
-------------------

Once the sales order is confirmed, a picking order is generated and ready to process.

Navigate to the :menuselection:`Inventory app`, and locate the :guilabel:`Pick` task card on the
:guilabel:`Inventory Overview` dashboard. This reveals a list of all pickings to process.

Click on the picking (WH/PICK) operation associated with the sales order to reveal the picking
order.

Click :guilabel:`Check Availability` on the picking order form. If the product is in stock, Odoo
automatically reserves the product. Quantities can also be manually set by changing the value in the
:guilabel:`Quantity` column to match the value in the :guilabel:`Demand` column.

Once ready, click :guilabel:`Validate` to complete the picking and move the product from
:guilabel:`WH/Stock` to :guilabel:`WH/Output.`

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-picking-form.png
   :align: center
   :alt: Picking operation form moving product to WH/Output.

Process the delivery
--------------------

Once the picking has been processed, the delivery order is generated, and can be processed.

Navigate back to the original sales order by going to :menuselection:`Sales app`, and selecting the
associated sales order.

The :guilabel:`Delivery` smart button now indicates there are two transfers. Click the
:guilabel:`Delivery` smart button to reveal each transfer tied to this sales order: the completed
picking, and the new delivery (WH/OUT) operation. Click the delivery operation to open the delivery
order.

Once ready, click :guilabel:`Validate` to complete the delivery.

.. image:: receipts_delivery_two_steps/receipts-delivery-two-steps-delivery-order.png
   :align: center
   :alt: Delivery operation form moving product to customer location.
