:show-content:

======
Rental
======

The Odoo **Rental** application provides comprehensive solutions to configure and manage rentals.

Send quotations, confirm orders, schedule rentals, register products when they are picked up and
returned, and invoice customers from this single platform.

.. seealso::
   - `Odoo Rental: product page <https://www.odoo.com/app/rental>`_
   - `Odoo Tutorials: Rental <https://www.odoo.com/slides/rental-48>`_

.. cards::

   .. card:: Manage deposits
      :target: rental/manage_deposits
      :large:

      Learn how to create a refundable deposit for rental products.

Dashboard
=========

Upon opening the **Rental** application, the :guilabel:`Rental Orders` dashboard is revealed.

.. image:: rental/rental-orders-dashboard.png
   :alt: Example of the Rental Orders dashboard available in the Odoo Rental application.

In the default Kanban view, all rentals are visible. Each rental card displays the customer name,
the price of the rental, the related sales order number, along with the status of the rental.

On the left sidebar, the :guilabel:`Rental Status` for each rental can be found. Beneath that, the
:guilabel:`Invoice Status` of the rentals is accessible. Clicking any option in the left sidebar
filters the displayed rentals on the dashboard.

Settings
========

To configure additional rental delay costs, availability of rental items, or minimum time of rental,
navigate to :menuselection:`Rental app --> Configuration --> Settings`.

.. image:: rental/rental-settings.png
   :alt: How the Settings page appears in the Odoo Rental application.

In the :guilabel:`Rental` section, there are options to configure :guilabel:`Default Delay Costs`
and :guilabel:`Default Padding Time`. Also, there is the option to activate :guilabel:`Rental
Transfers`.

- :guilabel:`Default Delay Costs` are additional costs for late returns.
- :guilabel:`Default Padding Time` represents the minimum amount of time between two rentals.
- :guilabel:`Rental Transfers` means stock deliveries and receipts can be used for rental orders.

In the :guilabel:`Rent Online` section, there are options to configure a :guilabel:`Minimal Rental
Duration` and designate :guilabel:`Unavailability days`, or days during which pickup and return are
not possible.

Rental products
===============

To view all products that can rented in the database, navigate to :menuselection:`Rentals app -->
Products`. By default, the :guilabel:`Rental` search filter appears in the search bar.

Each product Kanban card displays that product's name, rental price, and product image (if
applicable).

.. seealso::
   :doc:`rental/manage_deposits`

.. _rental/pricing:

Rental pricing
==============

To adjust the rental pricing on a product, go to the :guilabel:`Products` page in the **Rental**
app, then select the desired product or click :guilabel:`New` to create a new product from scratch.

On the product form, ensure the :guilabel:`Rental` checkbox is ticked. Then, open the
:guilabel:`Rental prices` tab.

.. image:: rental/rental-prices-tab.png
   :alt: How the Settings page appears in the Odoo Rental application.

Pricing
-------

Under the :guilabel:`Pricing` section of the :guilabel:`Rental prices` tab, designate custom rental
prices and rental periods for the product.

To add pricing for a rental, click :guilabel:`Add a price`. Then, choose a *pricing period*
(:dfn:`the unit of duration of the rental`) in the :guilabel:`Period` column, or create a new
pricing period by typing in the name and clicking :guilabel:`Create`.

Next, decide whether or not to apply this custom rental price to a specific :guilabel:`Pricelist`.

Lastly, enter the desired :guilabel:`Price` for that specific :guilabel:`Period`.

.. note::
   No limit exists on how many pricing lines can be added. Multiple pricing options for rental
   products are typically used to give discounts for customers who agree to longer rental durations.

.. note::
    Remember when considering pricing that renting for a day is usually limited to operating hours,
    not 24 hours. When determining pricing, keep in mind that a rental day typically refers to
    operating hours, not a full 24-hour period.

Reservations
------------

Under the :guilabel:`Reservations` section of the :guilabel:`Rental prices` tab, there is the option
to configure additional fines for any :guilabel:`Hourly Fine` or :guilabel:`Daily Fine` that the
customer takes to return a rental.

Also, there is the option to set the :guilabel:`Reserve product` time, expressed in hours, to make the rental
product temporarily unavailable between two rental orders. Such a feature may prove useful if
maintenance or cleaning is required between rentals.

Price computing
---------------

Odoo always uses two rules to compute the price of a product when a rental order is created:

#. Only one price line is used.
#. The cheapest line is selected.

.. exercise::
   Consider the following rental pricing configuration for a product:

   - 1 day: $100
   - 3 days: $250
   - 1 week: $500

   A customer wants to rent this product for eight days. What price will they pay?

   After an order is created, Odoo selects the second line as this is the cheapest option. The
   customer has to pay three times '3 days' to cover the rental's eight days, for a total of $750.

.. toctree::
   rental/products
   rental/manage_deposits

