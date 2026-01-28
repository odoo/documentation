:show-content:

======
Rental
======

The Odoo **Rental** application provides comprehensive solutions for configuring and managing
rentals.

Send quotations, confirm orders, schedule rentals, register products at pickup and return, and
invoice customers from a single platform.

.. seealso::
   - `Odoo Rental: product page <https://www.odoo.com/app/rental>`_
   - `Odoo Tutorials: Rental <https://www.odoo.com/slides/rental-48>`_

.. cards::

   .. card:: Rental products
      :target: rental/products
      :large:

      Explore how to create and manage rental products.

   .. card:: Service products
      :target: rental/service_products
      :large:

      Discover how to rent services alongside products.
   .. card:: Manage deposits
      :target: rental/manage_deposits
      :large:

      Learn how to create a refundable deposit for rental products.

Settings
========

To configure transfer locations and rental item availability, go to :menuselection:`Rental app -->
Configuration --> Settings`.

.. image:: rental/rental-settings.png
   :alt: Settings page in the Odoo Rental application.

In the :guilabel:`Rental` section, enable :guilabel:`Rental Transfers` to use stock deliveries and
receipts for rental orders.

If a rental business has :ref:`multiple locations <rental/multi-location-management>`, rental
products can be transferred and tracked between them.

In the :guilabel:`Rent Online` section, designate :guilabel:`Unavailability days` when pickup and
return are not allowed.

.. _rental/pricing:

Price computing
===============

Odoo uses two rules to compute the price of a product when a rental order is created:

#. Only one price line is used.
#. The cheapest line is selected.

.. example::
   A bike rental company offers the following rental prices for its electric bikes:

   - 1 day: $100
   - 3 days: $250
   - 1 week: $500

   A customer wants to rent this product for eight days. What price will they pay?

   After the order is created, Odoo chooses the second line because it is the lowest price. The
   customer pays three times the '3 days' rate to cover eight days, totaling $750.

   .. math::
      1~\text{day} * 8 &= 8~\text{days} \\
      3~\text{days} + 3~\text{days} + 3~\text{days} &= 9~\text{days} \\
      1~\text{week} + 1~\text{week} &= 14~\text{days} \\
      \\
      100 * 8 &= $800 \\
      250 + 250 + 250 &= $750 \\
      500 + 500 &= $1000

   Therefore, the customer pays $750 for the eight-day rental period.

Rental pricelist rules
======================

Extra rental prices are configured in the product's :guilabel:`Prices` tab. The prices are
configured like advanced :doc:`sales/products_prices/prices/pricing`, where the following fields
work as conditions for the price to be applied:

- :guilabel:`Pricelist`: The pricelist for which the pricelist rule is valid.
- :guilabel:`Min Quantity`: To trigger the Pricelist rule, the quantity must meet or exceed the
  minimum quantity value. The unit of measure follows the product's :guilabel:`Periodicity` setting.
- :guilabel:`Validity`: The starting date or date range when the pricelist rule is active.
- :guilabel:`Company`: The company for which the pricelist rule is valid.

How Minimum Quantity is computed
--------------------------------

Configuring discounted prices based on rental duration requires price rules with a :guilabel:`Min.
Quantity`. The :guilabel:`Min. Quantity` field is computed differently for the **Rental** app than
for the **Sales** and **Subscription** apps.

The :guilabel:`Min. Quantity` is computed based on the rental duration and the quantity on the
:abbr:`SOL (sales order line )`. The unit of time for the :guilabel:`Min. Quantity` field is based
on the product's :guilabel:`Periodicity` setting.

The formula used is:

.. math::
   \text{Min. Quantity} = \text{Quantity on SOL}*\text{Rental duration}

.. example::
   A sports store rents sleeping bags, and for the summer, they offer 20% off their standard rental
   rate of $20 per night. They set up a rental pricelist rule with a :guilabel:`Min. Quantity` of
   four nights to apply the discount.

   .. image:: rental/example-sleeping-bag-pricelist.png
      :alt: Sleeping bag pricelist for four nights.

   The following customer orders can trigger the discount:

   A group of people rents four sleeping bags for one night.

   .. image:: rental/example-four-sleeping-bag-one-night.png
      :alt: Rental order for four sleeping bags for one night.

   A person rents one sleeping bag for four nights.

   .. image:: rental/example-one-sleeping-bag-four-nights.png
      :alt: Rental order for one sleeping bag for four nights.

   Two people rent two sleeping bags for two nights.

   .. image:: rental/example-two-sleeping-bag-two-nights.png
      :alt: Rental order for two sleeping bags for two nights.

.. toctree::
   rental/products
   rental/service_products
   rental/manage_deposits

