=====================
Subscription products
=====================

By integrating closely with the Odoo *Sales* app, the *Subscriptions* app enables users to sell
subscription products alongside regular sales products. While regular products are sold on a
one-time basis, subscription products are sold on a renewing basis, generating recurring revenue.

In Odoo, subscription products are also called *recurring* products.

Configure recurrence periods
============================

To get started with subscriptions, first make sure that the *recurrence periods* are configured as
needed.

Recurrence periods are the time periods in which subscriptions renew. They designate how often the
customer pays for (and receives) subscription products.

To configure recurrence periods, go to :menuselection:`Subscriptions --> Configuration -->
Recurrence Periods`.

The *Subscriptions* app comes with some basic recurrence periods already configured: Daily, Monthly,
Quarterly, Weekly, Yearly, 3 Years, and 5 Years. These can be edited as needed, and any number of
new recurrence periods can be added.

To create a new recurrence period, click :guilabel:`New` on the recurrence periods dashboard. Then,
type in the :guilabel:`Name` and :guilabel:`Duration` of the recurrence period, and select the
:guilabel:`Unit` that defines the duration.

.. example::
   To create a recurrence period for a subscription that will renew every two weeks, set the
   :guilabel:`Duration` to `2` and the :guilabel:`Unit` to `Weeks`.

   .. image:: products/recurrence-period-form.png
      :align: center
      :alt: A recurrence period of 2 weeks.

Configure the product form
==========================

To create a new subscription product, navigate to the :menuselection:`Subscriptions` app. Then go to
:menuselection:`Subscriptions --> Products`, and click :guilabel:`New` to create a new product.
Enter a :guilabel:`Product Name`.

The :guilabel:`Product Type` for the new product is automatically set to :guilabel:`Service`.
Subscription products can be set to other types as well; however, they currently *cannot* be set to
:guilabel:`Storable Product`.

The new product automatically has the :guilabel:`Recurring` checkbox activated. This enables Odoo to
recognize it as a subscription product. Be sure to leave the :guilabel:`Recurring` and
:guilabel:`Can be Sold` options enabled.

.. image:: products/recurring-product-form.png
   :align: center
   :alt: The "Recurring" checkbox on the product form.

Time-based pricing
------------------

Next, configure the :guilabel:`Time-based pricing` tab on the product form.

Click :guilabel:`Add a price` to begin defining recurring prices. In the :guilabel:`Period` column,
select a recurrence period. In the :guilabel:`Price` column, enter the price for that recurrence
period.

.. note::
   :guilabel:`Daily` and :guilabel:`Hourly` periods cannot be used on recurring products.

Add as many lines as needed to the :guilabel:`Time-based pricing` table.

.. note::
   An existing product can be made into a subscription product simply by marking it as
   :guilabel:`Recurring` and configuring :guilabel:`Time-based pricing` on the product form.

   A subscription product can still be sold as a regular product by adding it to a quotation and
   *not* selecting a :guilabel:`Recurrence` on the quotation.

Pricelists
~~~~~~~~~~

Use :doc:`pricelists </applications/sales/sales/products_prices/prices/pricing>` with subscription
products to give special pricing to customers included in pricelists. This can be configured either
in the :guilabel:`Time-based pricing` tab of the product form, or on the pricelist form in the
*Sales* app.

To create recurring price rules for specific pricelists in the :guilabel:`Time-based pricing` tab of
the product form, select a pricelist in the :guilabel:`Pricelist` column.

.. image:: products/pricelist-time-based-pricing.png
   :align: center
   :alt: Pricelists in the "Time-based pricing" tab of the product form.

When pricelists are added to the :guilabel:`Time-based pricing` tab, the pricelist form in the
*Sales* app is automatically updated.

Time-based pricing rules can also be configured directly on the pricelist form. To do this, go to
:menuselection:`Sales --> Products --> Pricelists` and select a pricelist (or click :guilabel:`New`
to create a new pricelist). In the :guilabel:`Time-based rules` tab, click :guilabel:`Add a line`.

Then, select a subscription product in the :guilabel:`Products` column, and select a recurrence
period in the :guilabel:`Period` column. Enter a :guilabel:`Price` for that particular product and
period. Add as many lines as needed.

When :guilabel:`Time-based rules` are added to the pricelist form, the :guilabel:`Time-based
pricing` tab of the product form is automatically updated.
