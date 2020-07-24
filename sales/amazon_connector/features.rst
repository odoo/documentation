====================================
Amazon Connector: supported features
====================================

The **Amazon Connector** synchronizes the orders between Amazon and your Odoo database, which
reduces considerably the amount of time spent on your Amazon Seller Central dashboard, making your
daily routine a lot easier.

The connector is able to:

- Synchronize (Amazon to Odoo) all confirmed orders (both FBA and FBM) and their order items which
  include:

  - the product’s name, description and quantity
  - the shipping costs for the product
  - the gift wrapping charges

- Create on Odoo any missing partner related to an order (contact types supported: contact and
  delivery).
- Notify Amazon of a shipping confirmed on Odoo (FBM) in order to get paid.
- Notify Amazon of an order manually canceled on Odoo.

  .. todo:: remove in forward-port as of 13.1

- Support multiple seller accounts.
- Support multiple marketplaces per seller account.

+----------------------+----------------------------+-------------------------------------+
|                      | Fulfilled By Amazon (FBA)  | Fulfilled By Merchant (FBM)         |
+======================+============================+=====================================+
| **Orders**           | Synchronize shipped and    | Synchronize unshipped and canceled  |
|                      | canceled orders            | orders                              |
+----------------------+----------------------------+-------------------------------------+
| **Shipping**         | - Charges                  | - Charges                           |
|                      |                            | - Delivery created                  |
+----------------------+----------------------------+-------------------------------------+
| **Gift Wrapping**    | Handled by Amazon          | - Gift wrapping charges             |
|                      |                            | - Gift message                      |
+----------------------+----------------------------+-------------------------------------+
| **Stock Management** | One stock move created     | Handled by the delivery             |
|                      | per sales order item       |                                     |
+----------------------+----------------------------+-------------------------------------+
| **Confirmation**     | Handled by Amazon          | Notify Amazon when confirming       |
|                      |                            | delivery                            |
+----------------------+----------------------------+-------------------------------------+
| **Cancellation**     | Notify Amazon on manually  | Notify Amazon on manually           |
|                      | canceled sales orders      | canceled sales orders               |
+----------------------+----------------------------+-------------------------------------+

.. note::
   The connector is designed to synchronize orders' data as detailed above. Other actions, such as
   downloading monthly fees report, handling disputes, or issuing refunds must be managed from
   Amazon Seller Central, as usual.

.. seealso::
   - :doc:`setup`
   - :doc:`manage`
