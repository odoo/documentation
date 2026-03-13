==============================
TikTok Shop connector features
==============================

The **TikTok Shop Connector** streamlines your social commerce operations by synchronizing orders,
products, and inventory between TikTok Shop and Odoo. It reduces manual data entry between systems
and enhances order management, enabling efficient tracking of TikTok Shop sales within Odoo.

Supported features
==================

The **TikTok Shop Connector** is able to:

- Synchronize (TikTok Shop to Odoo) all confirmed orders (:abbr:`FBS (Fulfilled By Seller)`) with
  status :guilabel:`AWAITING_SHIPMENT` or :guilabel:`AWAITING_COLLECTION`, including:

  - Product name
  - Item ID reference
  - Quantity

- Synchronize (Odoo to TikTok Shop) all available product quantities (:abbr:`FBS (Fulfilled By
  Seller)`).

- Synchronize the TikTok Shop product catalog into Odoo or map existing Odoo products to TikTok
  Shop Item IDs.

- Arrange package pickups with supported logistics providers directly in Odoo.

- Support multiple seller accounts, with one TikTok Shop marketplace (shop) per account.

.. note::
   The **TikTok Shop Connector** is designed to synchronize sales orders and inventory. Other
   actions, such as downloading monthly fee reports, handling disputes, or issuing refunds **must**
   be managed from the *TikTok Shop Partner Center*, as usual.

TikTok Shop supported marketplaces
==================================

+------------------------------------------------------+
| **The Americas**                                     |
+======================+===============================+
| Brazil               | seller-br.tiktok.com          |
+----------------------+-------------------------------+
| Mexico               | seller-mx.tiktok.com          |
+----------------------+-------------------------------+
| US                   | seller-us.tiktok.com          |
+----------------------+-------------------------------+

+------------------------------------------------------+
| **Asia**                                             |
+======================+===============================+
| Indonesia            | seller-id.tiktok.com          |
+----------------------+-------------------------------+
| Japan                | seller-jp.tiktok.com          |
+----------------------+-------------------------------+
| Malaysia             | seller-my.tiktok.com          |
+----------------------+-------------------------------+
| Philippines          | seller-ph.tiktok.com          |
+----------------------+-------------------------------+
| Singapore            | seller-sg.tiktok.com          |
+----------------------+-------------------------------+
| Thailand             | seller-th.tiktok.com          |
+----------------------+-------------------------------+
| Vietnam              | seller-vn.tiktok.com          |
+----------------------+-------------------------------+

+------------------------------------------------------+
| **Europe**                                           |
+======================+===============================+
| Germany              | seller-de-accounts.tiktok.com |
+----------------------+-------------------------------+
| Spain                | seller-es-accounts.tiktok.com |
+----------------------+-------------------------------+
| France               | seller-fr.tiktok.com          |
+----------------------+-------------------------------+
| UK                   | seller-uk-accounts.tiktok.com |
+----------------------+-------------------------------+
| Italy                | seller-it-accounts.tiktok.com |
+----------------------+-------------------------------+
| Ireland              | seller-ie-accounts.tiktok.com |
+----------------------+-------------------------------+

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
