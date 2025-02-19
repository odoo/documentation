==========================
Configure reordering rules
==========================

For certain products, it is necessary to ensure that there is always a minimum amount available on
hand at any given time. Maintaining a minimum stock level ensures that businesses can meet customer
demand without delays, and keep operations running smoothly. It also helps buffer against supply
chain disruptions and unexpected spikes in demand. Inefficiencies may arise from inaccurate demand
forecasting, supply chain delays, and warehouse mismanagement, all of which can lead to increased
operational costs and wasted resources.

Keep highly demanded products in-stock at all times using reordering rules, that trigger a RFQ
(Request for Quotation) each time the forecasted stock quantities fall below the minimum.
:abbr:`RFQs (Requests for Quotation)` generated from reordering rules have the vendor, price,
quantity needed to reorder, which makes things faster and more convenient.

.. important::
   The **Inventory** app must be installed to use reordering rules, as it keeps track of stock
   quantity.

Configure products for reordering
=================================

Products must be configured in a specific way before a reordering rule can be added to them.

Starting from the :menuselection:`Inventory`, :menuselection:`Manufacturing`,
:menuselection:`Purchase`, or :menuselection:`Sales` app, navigate to :menuselection:`Products -->
Products` and then click :guilabel:`New` to make a new product. Alternatively, find a product that
already exists in the database and click into it's product form.

Next, on the product form, enable reordering by ticking the :guilabel:`Purchase` checkbox
underneath the :guilabel:`Product` name field. Then, under the :guilabel:`General Information` tab,
set the :guilabel:`Product Type` to :guilabel:`Goods`. Finally, tick the checkbox labeled
:guilabel:`Track Inventory`, and select an :doc:`option
<../../inventory/product_management/product_tracking>` from the drop-down.

.. image:: reordering/product-configured-for-reordering.png
   :alt: Configure a product for reordering in Odoo.

Add a reordering rule to a product
==================================

After properly configuring a product, a reordering rule can be added to it by selecting the now
visible :icon:`fa-refresh` :guilabel:`Reordering Rules` smart button at the top of that product's
form, then clicking :guilabel:`Create` on the :guilabel:`Reordering Rules` dashboard.

.. tip::
   If the :icon:`fa-refresh` :guilabel:`Reordering Rules` smart button is not visible, click
   :guilabel:`More`.

Once created, the reordering rule can be configured to generate purchase orders automatically by
defining the following fields:

- :guilabel:`Location` specifies where the ordered quantities should be stored once they are
  received and entered into stock.
- :guilabel:`Min Quantity` sets the lower threshold for the reordering rule while :guilabel:`Max
  Quantity` sets the upper threshold. If the stock on hand falls below the minimum quantity, a new
  purchase order is then created to replenish it up to the maximum quantity.

   .. example::
      If :guilabel:`Min Quantity` is set to `5` and :guilabel:`Max Quantity` is set to `25` and the
      stock on hand falls to four, a purchase order is then created for 21 units of the product.

- :guilabel:`Multiple Quantity` can be configured so that products are only ordered in batches of a
  certain quantity. Depending on the number entered, this can result in the creation of a purchase
  order that would put the resulting stock on hand above what is specified in the :guilabel:`Max
  Quantity` field.

   .. example::
      If :guilabel:`Max Quantity` is set to `100` but :guilabel:`Multiple Quantity` is set to order
      the product in batches of `200`, a purchase order is then created for 200 units of the
      product.

- :guilabel:`Unit` specifies the unit of measurement by which the quantity is to be ordered. For
  discrete products, this should be set to `Units`. However, it can also be set to units of
  measurement like `Volume` or `Weight` for non-discrete products like water or bricks.

.. image:: reordering/reordering-rule-configuration.png
   :alt: Configure the reordering rule in Odoo.

.. seealso::
   :doc:`../../inventory/warehouses_storage/replenishment/reordering_rules`

Manually trigger reordering rules using the scheduler
=====================================================

Reordering rules are automatically triggered by the scheduler, which runs once a day by default. To
trigger reordering rules manually, turn on developer mode, navigate to :menuselection:`Inventory app
--> Operations --> Procurement: Run Scheduler`. On the pop-up window, confirm the manual action by
clicking :guilabel:`Run Scheduler`.

.. note::
   Manually triggering reordering rules will also trigger any other scheduled actions.

Manage reordering rules
=======================

To manage the reordering rules for a single product, navigate to that product page's form and select
the :guilabel:`Reordering Rules` smart button at the top of the form.

To manage all reordering rules for every product, go to :menuselection:`Inventory app --> Operations
--> Replenishment`. From this dashboard, typical bulk actions in Odoo can be performed such as
exporting data or archiving rules that are no longer needed. As well, the :guilabel:`Filters`,
:guilabel:`Group By` or triple-dotted menu on the form are available to search for and/or organize
the reordering rules as desired.
