=========================
Amazon Connector features
=========================

The *Amazon Connector* synchronizes orders between Amazon and Odoo, which considerably reduces the
amount of time spent manually entering Amazon orders (from the Amazon Seller account) into Odoo. It
also allows users to accurately keep track of Amazon sales in Odoo.

Supported features
==================

The Amazon Connector is able to:

- Synchronize (Amazon to Odoo) all confirmed orders (both FBA and FBM), and their order items, which
  include:

  - product name, description, and quantity
  - shipping costs for the product
  - gift wrapping charges

- Create any missing partner related to an order in Odoo (contact types supported: contact and
  delivery address).

- Notify Amazon of confirmed shipment in Odoo (FBM) to get paid.

- Synchronize (Odoo to Amazon) all available quantities of your products (FBM).

- Support multiple seller accounts.

- Support multiple marketplaces per seller account.

The following table lists capabilities provided by Odoo when using the Amazon Connector:

+---------------------------+----------------------------+-------------------------------------+
|                           | Fulfilled By Amazon (FBA)  | Fulfilled By Merchant (FBM)         |
+===========================+============================+=====================================+
| **Orders**                | Synchronize shipped and    | Synchronize unshipped and canceled  |
|                           | canceled orders.           | orders.                             |
+---------------------------+----------------------------+-------------------------------------+
| **Shipping**              | Shipping cost is computed  | Shipping cost is computed by Amazon |
|                           | by Amazon, and included in | and included in the synchronized    |
|                           | the synchronized order.    | orders.                             |
|                           +----------------------------+-------------------------------------+
|                           | Shipping done by Amazon.   | A delivery order is automatically   |
|                           |                            | created in Odoo for each new order. |
|                           |                            | Once it has been processed in Odoo, |
|                           |                            | the status is then synchronized in  |
|                           |                            | Amazon.                             |
+---------------------------+----------------------------+-------------------------------------+
| **Gift Wrapping**         | Handled by Amazon.         | Cost is computed by Amazon, and     |
|                           |                            | included in the synchronized order. |
|                           |                            | Gift message is added on a line of  |
|                           |                            | the order and on the delivery order.|
|                           |                            | Then it is up to the user.          |
+---------------------------+----------------------------+-------------------------------------+
| **Stock Management**      | Managed by Amazon, and     | Managed in Odoo Inventory app, and  |
|                           | synchronized with a virtual| synchronized with Amazon.           |
|                           | location to follow it in   |                                     |
|                           | Odoo.                      |                                     |
+---------------------------+----------------------------+-------------------------------------+
| **Delivery Notifications**| Handled by Amazon.         | Send by Amazon, based on delivery   |
|                           |                            | status synchronized from Odoo.      |
+---------------------------+----------------------------+-------------------------------------+

.. note::
   The Amazon Connector is designed to synchronize the data of sales orders. Other actions, such as
   downloading monthly fees reports, handling disputes, or issuing refunds, **must** be managed from
   the *Amazon Seller Central*, as usual.

.. _amazon/supported-marketplaces:

Supported marketplaces
======================

The Amazon Connector supports all the current marketplaces.

If a marketplace is not listed in your Amazon marketplaces, it's possible to :ref:`add a new
marketplace <amazon/add-new-marketplace>`.

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
