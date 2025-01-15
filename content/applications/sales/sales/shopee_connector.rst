:show-content:

================
Shopee Connector
================

The **Shopee Connector** synchronizes orders between Shopee and Odoo, which considerably reduces the
amount of time spent manually entering Shopee orders (from the Shopee Seller account) into Odoo. It
also allows users to accurately keep track of Shopee sales in Odoo.

Supported features
==================

The **Shopee Connector** is able to:

- Synchronize (Shopee to Odoo) all confirmed orders, and their order items, which include:

  - Product name
  - SKU reference
  - Quantity

- Synchronize (Odoo to Shopee) all available quantities of your products (:abbr:`FBM (Fulfilled by
  Merchant)`).
- Support multiple seller accounts.
- Support multiple Shopee marketplaces (shops) per seller account.

.. note::
   The **Shopee Connector** is designed to synchronize sales orders data. Other actions, such as
   downloading weekly/monthly income/fees reports, handling disputes, or issuing refunds, **must**
   be managed from the *Shopee Seller Central*, as usual.

Shopee supported marketplaces
=============================

+-------------------------------+
| **APAC region**               |
+===============+===============+
| Indonesia     | Shopee.co.id  |
+---------------+---------------+
| Taiwan        | Shopee.tw     |
+---------------+---------------+
| Vietnam       | Shopee.vn     |
+---------------+---------------+
| Thailand      | Shopee.co.th  |
+---------------+---------------+
| Philippines   | Shopee.ph     |
+---------------+---------------+
| Malaysia      | Shopee.com.my |
+---------------+---------------+
| Singapore     | Shopee.sg     |
+---------------+---------------+

+-------------------------------+
| **South America region**      |
+===============+===============+
| Brazil        | Shopee.com.br |
+---------------+---------------+
| Chile         | Shopee.cl     |
+---------------+---------------+
| Colombia      | Shopee.com.co |
+---------------+---------------+
| Mexico        | Shopee.com.mx |
+---------------+---------------+

.. seealso::
   - :doc:`shopee_connector/setup`
   - :doc:`shopee_connector/manage`

.. toctree::
   :titlesonly:

   shopee_connector/setup
   shopee_connector/manage
