===========================
Flipkart Connector Features
===========================

The **Flipkart Connector** synchronizes the orders between Flipkart and your Odoo database, which
reduces considerably the amount of time spent on your Flipkart Seller dashboard, making your
daily routine a lot easier.

.. _flipkart/supported_features:

Supported Features
==================

The connector is able to:

- Synchronize (Flipkart to Odoo) all confirmed orders (both FBF and FBS) and their order items which
  include:

  - the product’s SKU, selling price, flipkart discount and quantity
  - If the product's SKU is not available in the database,
    a new product is created with the listed name and SKU of the product
  - the shipping costs for the product

- Create on Odoo any missing partner related to an order (contact types supported: contact and
  delivery).
- Notify Flipkart of a shipping confirmed on Odoo (FBS) in order to pickup the shipment.


+----------------------+------------------------------+-------------------------------------+
|                      | Fulfilled By Flipkart (FBF)  | Fulfilled By Seller   (FBS)         |
+======================+==============================+=====================================+
| **Orders**           | Synchronize shipped and      | Synchronize unshipped and canceled  |
|                      | canceled orders              | orders                              |
+----------------------+------------------------------+-------------------------------------+
| **Shipping**         | - Handled By Flipkart        | - Delivery created                  |
|                      |                              | - Generate Shipping Label           |
|                      |                              | - Fetch Shipping Label              |
+----------------------+------------------------------+-------------------------------------+
| **Stock Management** | One stock move created       | - Handled by the delivery           |
|                      | per sales order item         | - Products available quantity       |
|                      |                              |   updated from Odoo to Flipkart     |
+----------------------+------------------------------+-------------------------------------+
| **Confirmation**     | Handled by Flipkart          | Notify Flipkart when confirming     |
|                      |                              | delivery                            |
+----------------------+------------------------------+-------------------------------------+

.. note::
   The connector is designed to synchronize orders' data as detailed above. Other actions, such as
   listing management and managing products, must be managed from Flipkart Seller dashboard.

.. seealso::
   - :doc:`setup`
   - :doc:`verify`
