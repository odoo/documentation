============================
TikTok Shop Order Management
============================

This guide explains how to manage TikTok Shop orders, inventory, deliveries, and sales reporting
within Odoo using the **TikTok Shop Connector**. It covers product catalog mapping, order
synchronization, delivery processes, platform fee handling, and sales analysis to streamline
your social commerce operations across supported regions.

Product Catalog Mapping
=======================

New Odoo Customers with No Existing Products
--------------------------------------------

If you are starting a new Odoo database and your products exist only on TikTok Shop, you can
import your TikTok Shop product catalog into Odoo.

1. Export TikTok Shop Catalog: In *TikTok Shop Partner Center*, use the :menuselection:`Bulk action --> Bulk edit products`
   feature to export your product catalog, including TikTok Shop Item IDs.

   .. image:: manage/tiktok-bulk-edit-products.png

2. Import into Odoo: Import the exported catalog into Odoo via :menuselection:`Inventory -->
   Products --> Import`. Map the TikTok Shop Item ID to the :guilabel:`Reference` field
   in Odoo to link your TikTok Shop and Odoo products.

Existing Odoo Customers with Products Already in Odoo
-----------------------------------------------------

If you have an existing product catalog in Odoo, map your TikTok Shop listings to these products.

1. Use the :guilabel:`Sync Product Catalogue` button in Odoo to automatically match active Lazada products.

   .. image:: manage/tiktok-sync-product-catalog.png

.. important::
   Product catalog synchronization is an automated process initiated from the synchromization. 
   Ensure accurate SKU mapping to avoid duplication errors.

Order Synchronization
=====================

Orders are automatically fetched from TikTok Shop and synchronized in Odoo at regular intervals
(every 60 minutes), covering orders from the last 15 days starting from the
:guilabel:`Last Sync Date`.

- Synchronization Scope: Only orders with status :guilabel:`AWAITING_SHIPMENT` or
  :guilabel:`AWAITING_COLLECTION` are fetched, as these require shipping action.
- Status Updates: When an order is canceled on TikTok Shop, its status updates in Odoo. However,
  canceling an order in Odoo does not reflect on TikTok Shop.
- Customer Creation: For each synchronized order, Odoo creates a sales order and a customer
  (contact) if the customer hasn't been previously imported or doesn't exist in the database,
  using the :guilabel:`tokopedia_buyer_identifier` to search for existing contacts.
- Default Products: If a product or delivery carrier isn't found, Odoo uses a default product or
  carrier, searched by :guilabel:`Internal Reference` or name, respectively.

.. note::
   Only orders requiring shipment are synchronized. Orders with statuses :guilabel:`SHIPPED`,
   :guilabel:`CANCEL`, :guilabel:`UNPAID`, or :guilabel:`COMPLETED` are excluded during
   synchronization.

Force Synchronization
=====================

To synchronize an order whose status hasn't changed since the last synchronization:

1. Navigate to :menuselection:`Sales --> Configuration --> TikTok Shops -->
   Sync Orders`.
2. Select the TikTok account and modify the :guilabel:`Last Order Sync` date under
   :guilabel:`Orders Follow-up` to a date prior to the order's last status change.
3. Save to trigger synchronization.

.. tip::
   In Debug Mode, access the TikTok account in Odoo and click :guilabel:`Sync Orders` to
   immediately synchronize orders or :guilabel:`Sync Inventory` for inventory updates.

Manage Deliveries in FBM
========================

For :abbr:`FBM (Fulfilled By Merchant)` orders, the **TikTok Shop Connector** creates a picking
in the :menuselection:`Inventory` app, along with a sales order and customer record, upon
synchronization.

1. Arrange Shipment: Confirm the picking in Odoo, then navigate to *TikTok Shop Partner Center*
   and arrange shipment to generate the shipping label and tracking number.
2. Fetch Shipping Label: Odoo retrieves the shipping label and tracking number, attaching them
   to the corresponding delivery order. If PDF generation fails, a link to the label is provided.
3. Validate Stock Out: Validate the stock movement in Odoo to update inventory levels and
   confirm the order has left the warehouse.

TikTok Shop Delivery Statuses
-----------------------------

Understanding TikTok Shop delivery statuses is crucial for effective order management:

- :guilabel:`Awaiting Shipment`: The order is ready for shipment arrangement.
- :guilabel:`Awaiting Collection`: The seller has arranged shipment and received a tracking
  number from the logistics provider.
- :guilabel:`Shipped`: The parcel has been dropped off or picked up by the logistics provider.
- :guilabel:`Cancelled`: The order has been canceled.
- :guilabel:`Pickup Failed`: The logistics provider failed to pick up the parcel, requiring
  the seller to rearrange shipment.

.. important::
   TikTok Shop requires a tracking reference for each delivery. If the carrier doesn't provide
   one automatically, set it manually in *TikTok Shop Partner Center*. Check supported
   logistics providers for your region (e.g., Indonesia).

.. note::
   When using a development shop, avoid changing the status from :guilabel:`Awaiting Collection`
   to :guilabel:`Awaiting Shipment` in :guilabel:`Customer View`, as it may get stuck. Use
   :guilabel:`Seller View` instead.

Order Fulfillment Process
-------------------------

1. New Order Creation: TikTok Shop orders are automatically created in Odoo as sales orders.
2. Arrange Shipment on TikTok Shop: Arrange shipment in *TikTok Shop Partner Center*, selecting
   a logistics provider and generating a shipping label.
3. Fetch Shipping Label: Odoo imports the shipping label (delivery note) and tracking number,
   associating them with the sales order.
4. Validate Stock Out: Confirm the stock movement in Odoo to reduce inventory levels.
5. Inventory Update on TikTok Shop: Odoo pushes updated stock levels to TikTok Shop (if
   inventory sync is enabled) to prevent overselling.

Invoice and Register Payments
=============================

Due to TikTok Shop's policy of not sharing customer email addresses, invoices cannot be sent
directly from Odoo. Instead:

1. Issue Invoices: Generate invoices in Odoo and manually upload them to *TikTok Shop Partner
   Center*.
2. Register Payments:

   - Create a dedicated :guilabel:`Bank Journal` (e.g., "TikTok Payments") with a Bank and
     Cash intermediary account.
   - Since TikTok Shop processes weekly or monthly batch payments, select all invoices linked
     to a payment in Odoo.
   - Use :guilabel:`Batch Deposit` as the Payment Method, select the invoices, and go to
     :menuselection:`Actions --> Create Batch Payment --> Validate`.

3. Reconcile Payments: When TikTok Shop deposits the balance, record it in the bank statement
   and credit the TikTok intermediary account.

.. tip::
   Apply the same process for vendor bills related to TikTok Shop commissions.

Analyzing TikTok Shop Sales with Odoo's Reporting
=================================================

Odoo's dashboard consolidates sales data from all channels. To analyze TikTok Shop sales
specifically:

1. Set Up Sales Teams:

   - Navigate to :menuselection:`Sales --> Configuration --> Settings --> Connectors -->
     TikTok Sync --> TikTok Accounts`.
   - Assign a dedicated sales team to each TikTok Shop for isolated reporting.

2. Filter Sales Data: Use the dashboard filters to view sales data for the assigned TikTok
   sales team.

.. tip::
   Configure separate sales teams for each TikTok Shop marketplace to generate detailed
   performance reports.

.. seealso::
   - :doc:`features`
   - :doc:`setup`
