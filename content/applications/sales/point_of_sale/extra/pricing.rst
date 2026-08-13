================
Pricing features
================

.. _pos/pricing/discounts:

Discounts
=========

Discounts allow users to reduce the price of item lines in POS orders. The discount can be applied
as a percentage of a product's sale price or the total order amount.

To activate discounts, navigate to the :ref:`POS settings <pos/use/settings>`, scroll down to the
:guilabel:`Pricing` section, and enable:

   - :guilabel:`Global Discounts` to allow users to set a discount on the entire order.
     Modify the default discount percentage in the :guilabel:`Discount %` field if needed.
   - :guilabel:`Line Discounts` to allow users to set discounts on specific products in the cart.

.. seealso::
   :doc:`../../sales/products_prices/prices/discounts`

Global discounts
----------------

To apply a discount on the whole order from the :ref:`POS register <pos/use/open-register>`, click
the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon, then :icon:`fa-tag`
:guilabel:`Discount`. Set the discount percentage and click :guilabel:`Confirm`.

Line discounts
--------------

To set a discount on a specific product, select the product from the cart, click the :guilabel:`%`
cart modifier from the pad, then use the numpad to set the discount.

.. note::
   - Adding other products to the cart switches the cart modifier back to :guilabel:`Qty`
     automatically.
   - To remove a discount, select the product from the cart, click :guilabel:`%`, then click
     :guilabel:`⌫`

.. _pos/pricing/loyalty:

Discount and loyalty programs
=============================

Discount and loyalty programs provide flexible, customer-facing pricing strategies. Unlike
:doc:`pricelists <../../sales/products_prices/prices/pricing>`, which define structured
pricing rules, discount and loyalty programs are designed for promotional, time-sensitive, and
public offers, such as seasonal sales, limited-time deals, or customer rewards.

To activate discount and loyalty programs in Point of Sale, navigate to the :ref:`POS
settings <pos/use/settings>`, scroll down to the :guilabel:`Pricing` section, and enable
:guilabel:`Promotions, Coupons, Gift Card & Loyalty Program`.

Once the feature has been activated, go to :menuselection:`Point of Sale --> Products -->
Discount & Loyalty` and :ref:`configure the desired discount and loyalty programs
<sales/loyalty_discount/configure-programs>`. These programs are triggered when an order meets the defined
requirements. Depending on the :ref:`program type <sales/pricing_management/program-types>`, rewards
are either applied automatically or manually by the cashier.

.. seealso::
   :doc:`../../sales/products_prices/loyalty_discount`

.. _pos/pricing/loyalty/codes:

Codes
-----

To apply a gift card, discount code, or coupon, click the :icon:`fa-ellipsis-v` (:guilabel:`vertical
ellipsis`) icon, select :icon:`fa-barcode` :guilabel:`Enter Code`, enter or scan the code, and
click :guilabel:`Apply`.

.. note::
   Coupon and next-order coupon codes are printed directly on customer receipts.

Promotions
----------

Promotions are fully automated. They are applied to the order as soon as all program conditions
(such as minimum spent or specific products) are met.

Buy X get Y
-----------

When the order qualifies for a **Buy X get Y** deal, the reward must be added manually. Click the
:icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon, select :icon:`fa-star`
:guilabel:`Reward`, and choose the desired item from the list.

Loyalty cards
-------------

To track or spend loyalty points, you must first :ref:`select a customer
<pos/use/customers>` in the POS register. Once selected, their :guilabel:`Loyalty point(s)` are
displayed at the bottom of the cart and updated in real-time.

To redeem points for a reward, click the :icon:`oi-ellipsis-v` (:guilabel:`vertical ellipsis`) icon,
select :icon:`fa-star` :guilabel:`Reward`, and choose the desired item from the list.

.. _pos/pricing/pricelists:

Pricelists
==========

Pricelists allow you to automate price adjustments based on specific criteria. They can be used to
set POS-specific prices, create temporary discount periods, reward loyal customers, or offer
bulk-buy discounts.

Configuration
-------------

To enable pricelists in the Point of Sale app:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. In the :guilabel:`Pricing` section, activate the :guilabel:`Flexible Pricelists` feature and
   :guilabel:`Save`.
#. Once the page reloads, click :icon:`oi-arrow-right` :guilabel:`Pricelists` to :ref:`configure
   the pricelists <sales/products/pricelist-configuration>`.
#. When configured, return to the :ref:`POS settings <pos/use/settings>` to add all relevant
   pricelists to the :guilabel:`Available` field, and select the one to be used as the
   :guilabel:`Default`.

Assign pricelists
-----------------

To manually assign a pricelist to an order from the :ref:`POS register <pos/use/open-register>`,
click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon and the :icon:`fa-th-list`
icon, followed by the currently selected pricelist's name. Then, click the new pricelist to apply.

.. tip::
   You can also set a pricelist to be selected automatically for a specific :ref:`customer
   <pos/use/customers>`. To do so, go to :menuselection:`Point of Sale --> Orders --> Customers`,
   select the relevant customer, and assign a pricelist in the :guilabel:`Pricelist` field of the
   :guilabel:`Sales` section in the :guilabel:`Sales & Purchase` tab.

.. seealso::
   - :doc:`../../sales/products_prices/prices/pricing`
   - :ref:`Pricelists in eCommerce <ecommerce/prices/pricelists>`

.. _pos/pricing/rounding:

Cash rounding
=============

Cash rounding is used when the smallest physical currency denomination (the smallest
coin) is higher than the minimum unit of account.

For example, in countries that have phased out one-cent and two-cent coins, businesses must round
the total amount of a cash transaction to the nearest five cents. In Odoo, each point of sale can
be individually configured to apply these rounding rules to bills and receipts.

Configuration
-------------

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. In the :guilabel:`Payment` section, enable :guilabel:`Cash Rounding`.
#. Enable :guilabel:`Apply only on cash methods` to deactivate rounding for :doc:`card
   payments <../payment_methods>`.
#. In the :guilabel:`Rounding Method` field, select an existing method or click :guilabel:`Create`
   to define a new one.

When creating a new rounding method, define the following:

- :guilabel:`Rounding Precision`: The value of the smallest coinage available (e.g., 0.05).
- :guilabel:`Rounding Strategy`: Choose how the adjustment is recorded:

    - :guilabel:`Modify tax amount`: The rounding difference is applied in the taxes section.
    - :guilabel:`Add a rounding line`: The rounding difference is added as a separate line on the
      receipt and the invoice.
- :guilabel:`Profit Account` and :guilabel:`Loss Account`: The accounts used to record the rounding
  discrepancies.
- :guilabel:`Rounding Method`: The tie-breaking rule used to determine the direction of the rounding
  (:guilabel:`Up`, :guilabel:`Down`, or :guilabel:`Nearest`).

.. important::
   Odoo Point of Sale only supports the :guilabel:`Add a rounding line` rounding strategy.

.. example::

   Example: Rounding a $19.92 total with a **rounding precision** of 0.05.

   The final total changes depending on the **rounding method** selected in the configuration:

   .. list-table::
      :header-rows: 1
      :stub-columns: 1
      :widths: 20 20 60
      :class: table-striped

      * - Rounding method
        - Resulting total
        - Logic
      * - :guilabel:`Up`
        - $19.95
        - Always rounds toward the higher value.
      * - :guilabel:`Down`
        -  $19.90
        - Always rounds toward the lower value.
      * - :guilabel:`Nearest`
        - $19.90
        - Rounds to the nearest 0.05.

.. note::
   Rounding only applies to the **Total** of the receipt, not to individual product prices.

.. _pos/pricing/taxes:

Flexible taxes (fiscal positions)
=================================

When running a business, you may need to apply different taxes and record transactions on various
accounts based on the location and type of business of your customers and providers.

Fiscal positions allow you to define rules that automatically select the appropriate taxes and
accounts used for each transaction.

.. seealso::
   - :doc:`../../../finance/accounting/taxes/fiscal_positions`
   - :doc:`../../../finance/accounting/taxes`

Configuration
-------------

To use fiscal positions, go to :menuselection:`Point of Sale --> Configuration -->
Settings`, scroll down to the :guilabel:`Accounting` section, and enable :guilabel:`Flexible Taxes`.

Then, configure the fiscal position for your POS:

- Set the default fiscal position to be automatically applied to all sales in the selected POS
  using the :guilabel:`Default` field.
- Select additional fiscal positions in the :guilabel:`Allowed` field to make them selectable during
  sales.

Depending on the installed :doc:`fiscal localization package
</applications/finance/fiscal_localizations>`, several fiscal positions are already preconfigured
and ready to use in the POS. You can also :ref:`create new ones <fiscal_positions/configuration>`
if needed.

.. note::
   - :ref:`A default fiscal position can also be assigned to a customer
     <accounting/fiscal_positions/partner>`.
   - If no fiscal position is configured, the tax defined in the product's :guilabel:`Sales Taxes`
     field is applied.

Apply fiscal positions
----------------------

To apply a fiscal position to a POS order in the :ref:`POS register <pos/use/open-register>`,
click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon, click the :icon:`fa-book`
:guilabel:`Tax` button, and choose the desired fiscal position from the list.
