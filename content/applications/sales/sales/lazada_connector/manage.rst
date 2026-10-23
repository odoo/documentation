=======================
Lazada order management
=======================

This guide explains how to manage Lazada orders, inventory, deliveries, and sales reporting within
Odoo using the **Lazada Connector**. It covers product catalog mapping, order synchronization,
delivery processes, and sales analysis to streamline your marketplace operations in Southeast Asia.

Product catalog mapping
=======================

New Odoo customers with no existing products
--------------------------------------------

If you are starting a new Odoo database and your products exist only on Lazada, you can import your
Lazada product catalog into Odoo.

1. In `Lazada Seller Center <https://sellercenter.lazada.com.ph/>`_, use the :guilabel:`Bulk Manage`
   drop-down to export your product catalog, including Lazada SKUs.

   .. image:: manage/lazada-bulk-edit.png

2. Import the exported catalog into Odoo via :menuselection:`Inventory --> Products --> Import`.
   Map the Lazada SKU to the :guilabel:`Internal Reference` field in Odoo to link your Lazada and
   Odoo products.

Existing Odoo customers with products already in Odoo
-----------------------------------------------------

If you have an existing product catalog in Odoo, map your Lazada listings to these products.

- Use the :guilabel:`Sync Product Catalogue` button in Odoo to automatically match active Lazada
  products.

   .. image:: manage/lazada-sync-product.png

.. important::
   Product catalog synchronization is an automated process initiated by the synchronization.

Order synchronization
=====================

Orders are automatically fetched from Lazada and synchronized in Odoo at regular intervals
(every 60 minutes).

- Only orders with status :guilabel:`PENDING` are fetched, and Waybill is fetched for 
  orders with status :guilabel:`PACKED` or :guilabel:`READY_TO_SHIP`.
- When an order is canceled on Lazada, its status updates in Odoo. However, cancelling an order in
  Odoo does not reflect on Lazada.
- For each synchronized order, Odoo creates a sales order and a customer (contact) if the customer
  has not been previously imported or does not exist in the database.

.. note::
   Only orders requiring shipment are synchronized. Orders with statuses :guilabel:`SHIPPED`,
   :guilabel:`CANCEL`, :guilabel:`UNPAID`, or :guilabel:`COMPLETED` are excluded during
   synchronization.

Force synchronization
=====================

For every order synchronization, Odoo will be fetching all orders and the information that has been
updated since the last synchronization.

To synchronize an order whose status hasn't changed since the last synchronization:

1. Navigate to :menuselection:`Sales app --> Configuration --> Lazada --> Shops`.
2. Select the Lazada Shop and modify the :guilabel:`Last Order Sync` date under
   :guilabel:`Synchronization Information` to a date prior to the order's creation time.
3. Save to trigger synchronization.

.. tip::
   For manual flow, access the Lazada shop in Odoo and click :guilabel:`Sync Orders` to immediately
   synchronize orders or :guilabel:`Sync Inventory` for inventory updates.

Manage deliveries in FBM
========================

For :abbr:`FBM (Fulfilled By Merchant)` orders, the **Lazada Connector** creates a picking in the
:menuselection:`Inventory` app, along with a sales order and customer record, upon synchronization.

1. Arrange by comfirming the picking in Odoo, then navigate to *Lazada Seller Center* and click
   :guilabel:`Pack Lazada Package` to generate the tracking number. Odoo retrieves the shipping
   label and attahces it to the corresponding delivery order.
2. Validate the stock movement in Odoo to update inventory levels and confirm the order has left
   the warehouse.

Lazada package statuses
-----------------------

Understanding Lazada package statuses is crucial for effective order management:

- :guilabel:`Package Pending on Lazada`: The package is awaiting receipt, tagging, or processing in
  the warehouse system.
- :guilabel:`Package Confirmed on Lazada`: The package has been packed by the seller or warehouse
  and is confirmed ready for courier pickup or dropoff. Lazada is notified and updates the order
  status.
- :guilabel:`Ready to Ship on Lazada`: The order is ready for shipment. Lazada is notified and
  updates the order status.
- :guilabel:`Delivered on Lazada`: The parcel has been dropped off or picked up by the logistics
  provider.
- :guilabel:`Canceled on Lazada`: The order has been canceled.
- :guilabel:`Manual handling required`: The package cannot be processed on Odoo and requires manual
  handling on Lazada.

.. important::
   Lazada requires a tracking reference for each delivery. If the carrier doesn't provide one
   automatically, set it manually in *Lazada Seller Center*. Check supported logistics providers
   for your region (e.g., Malaysia).

Order fulfillment process
-------------------------

1. Lazada orders are automatically created in Odoo as sales orders. Select the desired sales order
   in the **Sales app**.
2. Click :guilabel:`Pack Lazada Package` to arrange shipment in the delivery transfer if you are
   using supported logistics providers. Odoo imports the shipping label (delivery note) and
   tracking number, associating them with the sales order.
3. Confirm the stock movement in Odoo to reduce inventory levels.

Invoice and register payments
=============================

Due to Lazada's policy of not sharing customer email addresses, invoices cannot be sent directly
from Odoo. Instead:

1. Generate invoices in Odoo and manually upload them to *Lazada Seller Center*.
2. Register Payments:

   - Create a dedicated :guilabel:`Bank Journal` (e.g., "Lazada Payments") with a Bank and Cash
     intermediary account.
   - Since Lazada processes batch payments weekly or monthly, select all invoices linked to a
     payment in Odoo.
   - Use :guilabel:`Batch Deposit` as the Payment Method, select the invoices, and go to
     :menuselection:`Actions --> Create Batch Payment --> Validate`.

3. Reconcile the payments after Lazada deposits the balance. Record it in the bank statement and
   credit the Lazada intermediary account.

.. tip::
   Apply the same process for vendor bills related to Lazada commissions.

Analyzing Lazada sales with Odoo Reporting
==========================================

Odoo's dashboard consolidates sales data from all channels. To analyze Lazada sales specifically:

1. Set Up Sales Teams:

   - Navigate to :menuselection:`Sales app --> Configuration --> Settings --> Connectors --> Lazada
     --> Shops`.
   - Assign a dedicated sales team to each Lazada shop for isolated reporting.

2. Use the dashboard filters to view sales data for the assigned Lazada sales team.

.. tip::
   Configure separate sales teams for each Lazada marketplace to generate detailed performance
   reports.

.. seealso::
   - :doc:`features`
   - :doc:`setup`
