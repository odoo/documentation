=========================
Lazada Connector features
=========================

The **Lazada Connector** synchronizes orders, products, and inventory between Lazada and Odoo,
streamlining your operations across Southeast Asia's marketplaces. It reduces manual data entry
between systems and enhances order management, enabling efficient tracking of Lazada sales within
Odoo.

Supported features
==================

The **Lazada Connector** is able to:

- Synchronize (Lazada to Odoo) all confirmed orders (:abbr:`FBM (Fulfilled By Merchant)`) with
  status :guilabel:`PENDING`, including:

  - Product name
  - SKU reference
  - Quantity

- Synchronize (Odoo to Lazada) all available product quantities (:abbr:`FBM (Fulfilled By
  Merchant)`).

- Synchronize the Lazada product catalog into Odoo or map existing Odoo products to Lazada SKUs.

The following table lists capabilities provided by Odoo when using the Lazada Connector:

+---------------------------+----------------------------+-------------------------------------+
|                           | Fulfilled By Lazada (FBL)  | Fulfilled By Merchant (FBM)         |
+===========================+============================+=====================================+
| **Orders**                | Synchronize completed      | Synchronize all confirmed and       |
|                           | orders.                    | unshipped orders.                   |
+---------------------------+----------------------------+-------------------------------------+
| **Stock Management**      | Managed by Lazada, and     | Managed in Odoo Inventory app, and  |
|                           | synchronized with a virtual| synchronized with Lazada.           |
|                           | location to track it in    |                                     |
|                           | Odoo.                      |                                     |
+---------------------------+----------------------------+-------------------------------------+
| **Delivery Notifications**| Handled by Lazada.         | Delivery information is fetched     |
|                           |                            | from Lazada, and synchronized       |
|                           |                            | in Odoo.                            |
+---------------------------+----------------------------+-------------------------------------+

.. note::
   The **Lazada Connector** is designed to synchronize sales orders and inventory. Other
   actions, such as downloading monthly fee reports, handling disputes, or issuing refunds,
   **must** be managed from the *Lazada Seller Center*, as usual.

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
