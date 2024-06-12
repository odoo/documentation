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

.. important::
   The stock synchronization does **not** currently support selling the same product as :abbr:`FBM
   (Fulfilled By Merchant)` *and* :abbr:`FBA (Fulfilled By Amazon)`.

   At times, when stock is sent for all products, it triggers a stock problem with Amazon, where
   Amazon incorrectly thinks the :abbr:`FBM (Fulfilled By Merchant)` product has some quantity in
   :abbr:`FBM (Fulfilled By Merchant)`.

   As a result, Amazon then sells it as :abbr:`FBM (Fulfilled By Merchant)`, instead of taking from
   their own warehouse. Odoo developers are currently working on resolving this issue to avoid
   future discrepancies.

.. note::
   The Amazon Connector is designed to synchronize the data of sales orders. Other actions, such as
   downloading monthly fees reports, handling disputes, or issuing refunds, **must** be managed from
   the *Amazon Seller Central*, as usual.

.. warning::
   As of February 19, 2024, in North American marketplaces, :abbr:`FBA (Fulfilled by Amazon)` orders
   created with the *Amazon Connector*, do not get the customer's name passed onto the
   sales/delivery order in Odoo. This is due to the fact that Amazon now calculates, and remits,
   sales tax on behalf of sellers. In other words, personally identifiable customer information is
   not transmitted to the seller any longer, after a :abbr:`FBA (Fulfilled by Amazon)` order.

.. _amazon/supported-marketplaces:

Supported marketplaces
======================

If a marketplace is not listed in your Amazon marketplaces, it's possible to :ref:`add a new
marketplace <amazon/add-new-marketplace>`.

+-------------------------------+
| **North America region**      |
+===============+===============+
| Canada        | Amazon.ca     |
+---------------+---------------+
| Mexico        | Amazon.com.mx |
+---------------+---------------+
| US            | Amazon.com    |
+---------------+---------------+

+-------------------------------+
| **Europe region**             |
+===============+===============+
| Germany       | Amazon.de     |
+---------------+---------------+
| Spain         | Amazon.es     |
+---------------+---------------+
| France        | Amazon.fr     |
+---------------+---------------+
| UK            | Amazon.co.uk  |
+---------------+---------------+
| Italy         | Amazon.it     |
+---------------+---------------+
| Netherlands   | Amazon.nl     |
+---------------+---------------+

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
