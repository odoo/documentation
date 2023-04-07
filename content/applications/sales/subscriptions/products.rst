==================
Recurring products
==================

When creating a subscription, at least one product on the order lines must be configured as
:ref:`recurring <subscriptions/product/recurring>`.

If a single product is sold using more than one recurrence period, configure the product's
:ref:`time-based pricing <subscriptions/product/time-based-pricing>` to automatically adapt the unit
price on the subscription based on the recurrence set.

.. _subscriptions/product/recurring:

Configuration
=============

To create a recurring product, go to :menuselection:`Subscriptions --> Subscriptions --> Products`
and click :guilabel:`New`. Choose a :guilabel:`Product Name` and leave :guilabel:`Recurring` and
:guilabel:`Can be Sold` enabled.

.. _subscriptions/product/time-based-pricing:

Time-based pricing
------------------

To set a recurring product's time-based pricing, go to :menuselection:`Subscriptions -->
Subscriptions --> Products`, select a product, and open the :guilabel:`Time-based pricing` tab.
Click :guilabel:`Add a price`, select a :guilabel:`Period`, and set a :guilabel:`Price`. Add as many
prices as needed.

.. note::
   :guilabel:`Daily` and :guilabel:`Hourly` periods cannot be used on recurring products.

.. _subscriptions/product/pricelists:

Pricelists
~~~~~~~~~~

:doc:`Pricelists <../sales/products_prices/prices/pricing>` can be used with recurring products. To
do so, go to :menuselection:`Sales --> Products --> Pricelists`, click :guilabel:`New`, name the
pricelist, and open the :guilabel:`Time-based rules` tab. Click :guilabel:`Add a line`, select a
:guilabel:`Period`, and set a :guilabel:`Price`. Add as many lines as needed. Once done, the
product's :ref:`time-based pricing <subscriptions/product/time-based-pricing>` tab is automatically
updated.

.. _subscriptions/product/ecommerce:

eCommerce
~~~~~~~~~

When a recurring product uses :ref:`time-based pricing <subscriptions/product/time-based-pricing>`,
only the shortest period is used on the eCommerce product page by default.

To let the customer select the period, go to :menuselection:`Subscriptions --> Subscriptions -->
Products`, select a product, and open the :guilabel:`Attributes & Variants` tab. Name the
:guilabel:`Attribute`, create :guilabel:`Values` for the different periods that should be available,
and save manually. Open the :guilabel:`Time-based pricing` tab and select the correct
:guilabel:`Product Variants` for each :guilabel:`Period`.

.. seealso::
   :doc:`../../websites/ecommerce/managing_products/variants`
