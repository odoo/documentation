=======================
Lazada Order Management
=======================

This guide explains how to manage Lazada orders, inventory, deliveries, and sales reporting within
Odoo using the **Lazada Connector**. It covers product catalog mapping, order synchronization,
delivery processes, platform fee handling, and sales analysis to streamline your marketplace
operations in Southeast Asia.

Product Catalog Mapping
=======================

New Odoo Customers with No Existing Products
--------------------------------------------

If you are starting a new Odoo database and your products exist only on Lazada, you can import
your Lazada product catalog into Odoo.

1. Export Lazada Catalog: In `Lazada Seller Center
<https://sellercenter.lazada.com.ph/>`, use the :guilabel:`Bulk Manage` drop-down
to export your product catalog, including Lazada SKUs.

   .. image:: manage/lazada-bulk-edit.png

2. Import into Odoo: Import the exported catalog into Odoo via :menuselection:`Inventory -->
   Products --> Import`. Map the Lazada SKU to the :guilabel:`Internal Reference` field in Odoo
   to link your Lazada and Odoo products.

Existing Odoo Customers with Products Already in Odoo
-----------------------------------------------------

If you have an existing product catalog in Odoo, map your Lazada listings to these products.

- Use the :guilabel:`Sync Product Catalogue` button in Odoo to automatically match active Lazada products.

   .. image:: manage/lazada-sync-product.png

.. important::
   Product catalog synchronization is an automated process initiated from the synchromization. Ensure accurate
   SKU mapping to avoid duplication errors.

Order Synchronization
=====================

Orders are automatically fetched from Lazada and synchronized in Odoo at regular intervals
(every 60 minutes).

- Synchronization Scope: Only orders with status :guilabel:`READY_TO_SHIP` or
  :guilabel:`PROCESSED` are fetched, as these require shipping action.
- Status Updates: When an order is canceled on Lazada, its status updates in Odoo. However,
  canceling an order in Odoo does not reflect on Lazada.
- Customer Creation: For each synchronized order, Odoo creates a sales order and a customer
  (contact) if the customer hasn't been previously imported or doesn't exist in the database.

.. note::
   Only orders requiring shipment are synchronized. Orders with statuses :guilabel:`SHIPPED`,
   :guilabel:`CANCEL`, :guilabel:`UNPAID`, or :guilabel:`COMPLETED` are excluded during
   synchronization.

Force Synchronization
=====================

To synchronize an order whose status hasn't changed since the last synchronization:

1. Navigate to :menuselection:`Sales --> Configuration --> Lazada --> Shops`.
2. Select the Lazada Shop and modify the :guilabel:`Last Order Sync` date under
   :guilabel:`Synchronization Information` to a date prior to the order's last status change.
3. Save to trigger synchronization.

.. tip::
   In Debug Mode, access the Lazada account in Odoo and click :guilabel:`Sync Orders` to
   immediately synchronize orders or :guilabel:`Sync Inventory` for inventory updates.

Manage Deliveries in FBM
========================

For :abbr:`FBM (Fulfilled By Merchant)` orders, the **Lazada Connector** creates a picking in
the :menuselection:`Inventory` app, along with a sales order and customer record, upon
synchronization.

1. Arrange Shipment: Confirm the picking in Odoo, then navigate to *Lazada Seller Center*
   and click :guilabel:`Arrange Shipment` to generate the shipping label and tracking number.
2. Fetch Shipping Label: Odoo retrieves the shipping label and tracking number, attaching
   them to the corresponding delivery order.
3. Validate Stock Out: Validate the stock movement in Odoo to update inventory levels and
   confirm the order has left the warehouse.

Lazada Delivery Statuses
------------------------

Understanding Lazada delivery statuses is crucial for effective order management:

- :guilabel:`Package Pending`: The package has arrived at the logistics facility but is awaiting receipt, tagging, or processing in the warehouse system.
- :guilabel:`Package Confirmed`: The package has been packed by the seller or warehouse and is confirmed ready for courier pickup or dropoff.
- :guilabel:`Ready to Ship`: The order is ready for shipment arrangement.
- :guilabel:`Shipment Arranged`: The seller has arranged shipment and received a tracking
  number from the logistics provider.
- :guilabel:`Shipped`: The parcel has been dropped off or picked up by the logistics provider.
- :guilabel:`Cancelled`: The order has been canceled.
- :guilabel:`Pickup Failed`: The logistics provider failed to pick up the parcel, requiring
  the seller to rearrange shipment.

.. important::
   Lazada requires a tracking reference for each delivery. If the carrier doesn't provide one
   automatically, set it manually in *Lazada Seller Center*. Check supported logistics
   providers for your region (e.g., Malaysia).

Order Fulfillment Process
-------------------------

1. New Order Creation: Lazada orders are automatically created in Odoo as sales orders.
2. Arrange Shipment on Lazada: Arrange shipment in *Lazada Seller Center*, selecting a
   logistics provider and generating a shipping label.
3. Fetch Shipping Label: Odoo imports the shipping label (delivery note) and tracking number,
   associating them with the sales order.
4. Validate Stock Out: Confirm the stock movement in Odoo to reduce inventory levels.
5. Inventory Update on Lazada: Odoo pushes updated stock levels to Lazada to prevent
   overselling.

Invoice and Register Payments
=============================

Due to Lazada's policy of not sharing customer email addresses, invoices cannot be sent
directly from Odoo. Instead:

1. Issue Invoices: Generate invoices in Odoo and manually upload them to *Lazada Seller
   Center*.
2. Register Payments:

   - Create a dedicated :guilabel:`Bank Journal` (e.g., "Lazada Payments") with a Bank
     and Cash intermediary account.
   - Since Lazada processes weekly or monthly batch payments, select all invoices linked
     to a payment in Odoo.
   - Use :guilabel:`Batch Deposit` as the Payment Method, select the invoices, and go to
     :menuselection:`Actions --> Create Batch Payment --> Validate`.

3. Reconcile Payments: When Lazada deposits the balance, record it in the bank statement
   and credit the Lazada intermediary account.

.. tip::
   Apply the same process for vendor bills related to Lazada commissions.

Analyzing Lazada Sales with Odoo's Reporting
============================================

Odoo's dashboard consolidates sales data from all channels. To analyze Lazada sales
specifically:

1. Set Up Sales Teams:

   - Navigate to :menuselection:`Sales --> Configuration --> Settings --> Connectors -->
     Lazada Sync --> Lazada Accounts`.
   - Assign a dedicated sales team to each Lazada shop for isolated reporting.

2. Filter Sales Data: Use the dashboard filters to view sales data for the assigned
   Lazada sales team.

.. tip::
   Configure separate sales teams for each Lazada marketplace to generate detailed
   performance reports.

.. seealso::
   - :doc:`features`
   - :doc:`manage`
