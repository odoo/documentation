==============================
TikTok Shop Connector Features
==============================

The **TikTok Shop Connector** synchronizes orders, products and inventory between TikTok Shop
and Odoo, streamlining your social commerce operations. It reduces manual data entry, enhances order
management, and includes advanced features like platform fee synchronization and order splitting,
enabling efficient management of TikTok Shop sales within Odoo.

Supported features
==================

The **TikTok Shop Connector** is able to:

- Synchronize (TikTok Shop to Odoo) orders with status :guilabel:`AWAITING_SHIPMENT` or
  :guilabel:`AWAITING_COLLECTION`, including:

  - Product name
  - Item ID reference
  - Quantity

- Synchronize (Odoo to TikTok Shop) all available quantities of your products (:abbr:`FBM (Fulfilled
  By Merchant)`).
- Synchronize the TikTok Shop product catalog into Odoo or map existing Odoo products to TikTok Shop
  Item IDs.
- Arrange package pickups with supported logistics providers directly in Odoo.
- Support multiple seller accounts.
- Support multiple TikTok Shop marketplaces (shops) per seller account.
- Enable configuration of specific warehouses for stock fetching (:abbr:`FBM (Fulfilled By Merchant)`).

.. note::
   The **TikTok Shop Connector** is designed to synchronize sales orders, inventory, and fee data.
   Other actions, such as downloading monthly fee reports, handling disputes, or issuing refunds,
   **must** be managed from the *TikTok Shop Partner Center*, as usual.

TikTok Shop supported marketplaces
==================================

Here are the following countries where sellers can create a TikTok Shop account and sell 
products in the following countries

+------------------------------------------------------+
| **America seller**                                   |
+======================+===============================+
| Brazil Seller        | seller-br.tiktok.com          |
+----------------------+-------------------------------+
| Mexico Seller        | seller-mx.tiktok.com          |
+----------------------+-------------------------------+
| US Seller.           | seller-us.tiktok.com          |
+----------------------+-------------------------------+

+------------------------------------------------------+
| **Asia seller**                                      |
+======================+===============================+
| Indonesia Seller     | seller-id.tiktok.com          |
+----------------------+-------------------------------+
| Japan Seller         | seller-jp.tiktok.com          |
+----------------------+-------------------------------+
| Malaysia Seller      | seller-my.tiktok.com          |
+----------------------+-------------------------------+
| Philippines Seller   | seller-ph.tiktok.com          |
+----------------------+-------------------------------+
| Singapore Seller     | seller-sg.tiktok.com          |
+----------------------+-------------------------------+
| Thailand Seller      | seller-th.tiktok.com          |
+----------------------+-------------------------------+
| Vitenam Seller       | seller-vn.tiktok.com          |
+----------------------+-------------------------------+

+----------------------+-------------------------------+
| **Europe region**                                    |
+======================+===============================+
| Germany Seller       | seller-de-accounts.tiktok.com |
+----------------------+-------------------------------+
| Spain Seller         | seller-es-accounts.tiktok.com |
+----------------------+-------------------------------+
| France Seller        | seller-fr.tiktok.com          |
+----------------------+-------------------------------+
| UK Seller            | seller-uk-accounts.tiktok.com |               
+----------------------+-------------------------------+
| Italy Seller         | seller-it-accounts.tiktok.com |
+----------------------+-------------------------------+
| Ireland Seller       | seller-ie-accounts.tiktok.com |
+----------------------+-------------------------------+

.. note::
 Availability can change (e.g., invite-only in some regions). 
 Always verify via official sign-up  `The Tiktok Shop Seller Center <https://seller.tiktok.com/>`_.

 Requirements include business verification, local bank accounts, and compliance (e.g., taxes in US).

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
   