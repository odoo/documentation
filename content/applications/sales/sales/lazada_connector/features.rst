=========================
Lazada Connector Features
=========================

The **Lazada Connector** synchronizes orders, products and inventory between Lazada and Odoo,
streamlining your marketplace operations in Southeast Asia. It reduces manual data entry between systems
and enhances order management, enabling efficient tracking of Lazada sales within Odoo.

Supported features
==================

The **Lazada Connector** is able to:

- Synchronize (Lazada to Odoo) all confirmed orders (:abbr:`FBM (Fulfilled By Merchant)`) with status
  :guilabel:`READY_TO_SHIP` or :guilabel:`PROCESSED`, including:

  - Product name
  - SKU reference
  - Quantity

- Synchronize (Odoo to Lazada) all available quantities of your products (:abbr:`FBM (Fulfilled By
  Merchant)`).

- Synchronize the Lazada product catalog into Odoo or map existing Odoo products to Lazada SKUs.

- Synchronize platform fees (e.g., commissions, transaction fees) to the order receipt in Odoo.

- Arrange package pickups with supported logistics providers directly in Odoo.

- Support multiple seller accounts.

- Support multiple Lazada marketplaces (shops) per seller account.

- Enable configuration of specific warehouses for stock fetching (:abbr:`FBM (Fulfilled By Merchant)`).

The following table lists capabilities provided by Odoo when using the Lazada Connector:

+---------------------------+----------------------------+-------------------------------------+
|                           | Fulfilled By Lazada (FBL)  | Fulfilled By Merchant (FBM)         |
+===========================+============================+=====================================+
| **Orders**                | Synchronize completed      | Synchronize all confirmed and       |
|                           | orders.                    | unshipped orders.                   |
+---------------------------+----------------------------+-------------------------------------+
| **Shipping**              | Shipping cost is computed  | Shipping cost is computed by Lazada |
|                           | by Lazada, and included in | and included in the synchronized    |
|                           | the synchronized order.    | orders.                             |
|                           +----------------------------+-------------------------------------+
|                           | Shipping done by Lazada.   | A delivery order is automatically   |
|                           |                            | created in Odoo for each new order. |
+---------------------------+----------------------------+-------------------------------------+
| **Stock Management**      | Managed by Lazada, and     | Managed in Odoo Inventory app, and  |
|                           | synchronized with a virtual| synchronized with Lazada.           |
|                           | location to follow it in   |                                     |
|                           | Odoo.                      |                                     |
+---------------------------+----------------------------+-------------------------------------+
| **Delivery Notifications**| Handled by Lazada.         | Delivery information are fetched    |
|                           |                            | from Lazada,and synchronized        |
|                           |                            | in Odoo.                            |
+---------------------------+----------------------------+-------------------------------------+

.. note::
   The **Lazada Connector** is designed to synchronize sales orders, inventory, and fee data. Other
   actions, such as downloading monthly fee reports, handling disputes, or issuing refunds, **must**
   be managed from the *Lazada Seller Center*, as usual.

Lazada supported marketplaces
=============================

+----------------------------+
| **Southeast Asia region**  |
+============+===============+
| Indonesia  | Lazada.co.id  |
+------------+---------------+
| Malaysia   | Lazada.com.my |
+------------+---------------+
| Philippines| Lazada.com.ph |
+------------+---------------+
| Singapore  | Lazada.sg     |
+------------+---------------+
| Thailand   | Lazada.co.th  |
+------------+---------------+
| Vietnam    | Lazada.vn     |
+------------+---------------+

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
