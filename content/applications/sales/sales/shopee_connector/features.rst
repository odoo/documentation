=========================
Shopee Connector features
=========================

The *Shopee Connector* synchronizes orders between Shopee and Odoo, which considerably reduces the
amount of time spent manually entering Shopee orders (from the Shopee Seller account) into Odoo. It
also allows users to accurately keep track of Shopee sales in Odoo.

Supported features
==================

The Shopee Connector is able to:

- Synchronize (Shopee to Odoo) all confirmed orders, and their order items, which
  include:

  - product name, SKU reference, and quantity
  - shipping costs for the product
  - price differences (discounts and vouchers)

- Synchronize (Odoo to Shopee) all available quantities of your products (FBM).

- Support multiple seller accounts.

- Support multiple Shopee marketplaces (shops) per seller account.

.. note::
   The Shopee Connector is designed to synchronize sales orders data. Other actions, such as
   downloading weekly/monthly income/fees reports, handling disputes, or issuing refunds, **must** be managed from
   the *Shopee Seller Central*, as usual.

.. _amazon/supported-marketplaces:

Shopee Supported marketplaces
======================


+-------------------------------+
|        **APAC region**        |
+===============+===============+
| Indonesia     | shopee.co.id  |
+---------------+---------------+
| Taiwan        | shopee.tw     |
+---------------+---------------+
| Vietnam       | shopee.vn     |
+---------------+---------------+  
| Thailand      | shopee.co.th  |
+---------------+---------------+
| Philippines   | shopee.ph     |
+---------------+---------------+
| Malaysia      | shopee.com.my |
+---------------+---------------+
| Singapore     | shopee.sg     |
+---------------+---------------+

.. seealso::
   - :doc:`prerequisites`
   - :doc:`setup`
   - :doc:`manage`
