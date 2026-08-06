.. meta::
   :description: This page explains how to apply discounts, discount codes, promotions, and loyalty
                 programs in Point of Sale, along with configuring pricelists, cash rounding, and
                 fiscal positions for flexible tax handling.

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

   - :guilabel:`Global Discounts` to allow users to set a discount on the entire order. Modify the
     default discount percentage in the :guilabel:`Discount %` field if needed.
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
:doc:`pricelists <../../sales/products_prices/prices/pricing>`, which define structured pricing
rules, discount and loyalty programs are designed for promotional, time-sensitive, and public
offers, such as seasonal sales, limited-time deals, or customer rewards.

To activate discount and loyalty programs in Point of Sale, navigate to the :ref:`POS settings
<pos/use/settings>`, scroll down to the :guilabel:`Pricing` section, and enable
:guilabel:`Promotions, Coupons, Gift Card & Loyalty Program`.

Once the feature has been activated, go to :menuselection:`Point of Sale --> Products --> Discount &
Loyalty` and :ref:`configure the desired discount and loyalty programs
<sales/loyalty_discount/configure-programs>`. These programs are triggered when an order meets the
defined requirements. Depending on the :ref:`program type <sales/loyalty_discount/program-types>`,
rewards are either applied automatically or manually by the cashier.

.. seealso::
   :doc:`../../sales/products_prices/loyalty_discount`

.. _pos/pricing/loyalty/codes:

Codes
-----

To apply a discount code or a coupon, click the :icon:`fa-ellipsis-v` (:guilabel:`vertical
ellipsis`) icon, select :icon:`fa-barcode` :guilabel:`Enter Code`, enter or scan the code, and click
:guilabel:`Apply`.

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

To track or spend loyalty points, you must first :ref:`select a customer <pos/use/customers>` in the
POS register. Once selected, their :guilabel:`Loyalty point(s)` are displayed at the bottom of the
cart and updated in real-time.

To redeem points for a reward, click the :icon:`oi-ellipsis-v` (:guilabel:`vertical ellipsis`) icon,
select :icon:`fa-star` :guilabel:`Reward`, and choose the desired item from the list.

.. _pos/pricing/giftcards_ewallet:

Gift cards and eWallets
=======================

Gift cards and eWallets are used by customers to pay for orders using a prepaid balance. Gift cards
can be purchased, while eWallets hold store credit linked to the customer's account.

To activate gift cards and eWallets in Point of Sale, navigate to the :ref:`POS settings
<pos/use/settings>`, scroll down to the :guilabel:`Pricing` section, enable the
:guilabel:`Promotions, Coupons, Gift Card & Loyalty Program` setting, and click :guilabel:`Save`.
Once activated, click :icon:`oi-arrow-right` :guilabel:`Gift cards & eWallet` under the same setting
to configure the desired :ref:`gift card <ewallet_gift/gift-cards>` and :ref:`eWallet
<sales/ewallets_giftcards/ewallets>` programs and generate gift cards and eWallets.

.. tip::
   Alternatively, to configure and edit gift cards and eWallets, go to :menuselection:`Point of Sale
   --> Products --> Gift cards & eWallet`.

.. seealso::
   :doc:`../../sales/products_prices/ewallets_giftcards`

Gift cards
----------

Sell a gift card
~~~~~~~~~~~~~~~~

After a :ref:`gift card program <ewallet_gift/gift-cards>` has been configured, to sell new gift
cards from the :ref:`POS register <pos/use/open-register>`, follow these steps:

#. Add the gift card product to the order.
#. Select the appropriate gift card program in the popover, if multiple programs exist.
#. Adjust the price and quantity, if necessary.
#. Click :guilabel:`Payment` and complete the transaction.

   .. tip::
      After the payment is validated, the gift card is automatically downloaded as a PDF containing
      the gift card code, based on the template selected in the :guilabel:`Print Report` field of
      the :ref:`gift card program <ewallet_gift/gift-cards>`.

#. Print the generated gift card for the customer.

.. tip::
   To email a gift card to a customer, navigate to :menuselection:`Point of Sale --> Products -->
   Gift cards & eWallet`, select the program, and click the :icon:`fa-tags`
   :guilabel:`Gift cards` smart button. Then, click :icon:`fa-paper-plane-o` :guilabel:`Send`
   on the gift card's row.

Sell a physical gift card
~~~~~~~~~~~~~~~~~~~~~~~~~

After a :ref:`gift card program <ewallet_gift/gift-cards>` has been configured and gift cards
generated, to sell pre-printed physical gift cards from the :ref:`POS register
<pos/use/open-register>`, follow these steps:

#. Add the gift card product to the order.
#. Select the appropriate gift card program in the popover, if multiple programs exist.
#. Click :guilabel:`Sell physical gift card?` under the gift card product in the cart.
#. Enter or scan the physical gift card code in the popover.
#. Adjust the amount and expiration date, if necessary.
#. Click :guilabel:`Add Balance`.

   .. tip::
      If the gift card code already exists in Odoo, click :guilabel:`Add existing Gift Card` to
      attach it to the order.

#. Click :guilabel:`Payment` and complete the transaction.
#. Hand the physical card to the customer.

Print gift cards from the backend
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Gift cards sold through the POS can be accessed and printed from the backend at any time. To print a
gift card, follow these steps:

#. Go to :menuselection:`Point of Sale --> Products --> Gift cards & eWallet`.
#. Select a gift card program.
#. Click the :icon:`fa-tags` :guilabel:`Gift cards` smart button.
#. Choose a gift card from the list.
#. Click the :icon:`fa-cog` (:guilabel:`Actions`) icon, then go to :menuselection:`Print -->
   Gift Card`.

Redeem a gift card
~~~~~~~~~~~~~~~~~~

After a :ref:`gift card program <ewallet_gift/gift-cards>` has been configured and gift cards
generated, to redeem gift cards from the :ref:`POS register <pos/use/open-register>`, follow these
steps:

#. Click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon.
#. Select :icon:`fa-percent` :guilabel:`Enter Code`.
#. Enter or scan the code.
#. Click :guilabel:`Apply`.

.. note::
   A warning popover appears if the gift card was not previously purchased through the POS. To
   accept the gift card and continue, click :guilabel:`Ok`.

eWallets
--------

Credit an eWallet
~~~~~~~~~~~~~~~~~

After an :ref:`eWallet program <sales/ewallets_giftcards/ewallets>` has been configured, to credit a
customer's eWallet from the :ref:`POS register <pos/use/open-register>`, follow these steps:

#. Click :guilabel:`Customer`, then select the relevant customer or :ref:`create a new one
   <pos/use/customers>`.
#. Add the eWallet top-up product to the order.
#. Select the appropriate eWallet program in the popover, if multiple programs exist.
#. Adjust the top-up amount by modifying the product price, if needed.
#. Click :guilabel:`Payment` and complete the transaction.

Use an eWallet balance
~~~~~~~~~~~~~~~~~~~~~~

After an :ref:`eWallet program <sales/ewallets_giftcards/ewallets>` has been configured, to use an
eWallet balance from the :ref:`POS register <pos/use/open-register>`, follow these steps:

#. Click :guilabel:`Customer` and locate the desired customer in the list.
#. Click the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon.
#. Select :icon:`fa-credit-card` :guilabel:`eWallet Pay`.
#. Select the desired program from the popover if multiple eWallets exist.

.. note::
   - Each eWallet is linked to a specific customer. A customer **must** be :ref:`assigned to the
     order <pos/use/customers>` for the :icon:`fa-credit-card` :guilabel:`eWallet Pay` option to be
     displayed.
   - If customers have only one eWallet program, the available balance is applied automatically.

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
#. Once the page reloads, click :icon:`oi-arrow-right` :guilabel:`Pricelists` to :ref:`configure the
   pricelists <sales/products/pricelist-configuration>`.
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

Cash rounding is used when the smallest physical currency denomination (the smallest coin) is higher
than the minimum unit of account.

For example, in countries that have phased out one-cent and two-cent coins, businesses must round
the total amount of a cash transaction to the nearest five cents. In Odoo, each point of sale can be
individually configured to apply these rounding rules to bills and receipts.

Configuration
-------------

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. In the :guilabel:`Payment` section, enable :guilabel:`Cash Rounding`.
#. Enable :guilabel:`Apply only on cash methods` to deactivate rounding for :doc:`card payments
   <../payment_methods>`.
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

To use fiscal positions, go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll
down to the :guilabel:`Accounting` section, and enable :guilabel:`Flexible Taxes`.

Then, configure the fiscal position for your POS:

- Set the default fiscal position to be automatically applied to all sales in the selected POS using
  the :guilabel:`Default` field.
- Select additional fiscal positions in the :guilabel:`Allowed` field to make them selectable during
  sales.

Depending on the installed :doc:`fiscal localization package
</applications/finance/fiscal_localizations>`, several fiscal positions are already preconfigured
and ready to use in the POS. You can also :ref:`create new ones <fiscal_positions/configuration>` if
needed.

.. note::
   - :ref:`A default fiscal position can also be assigned to a customer
     <accounting/fiscal_positions/partner>`.
   - If no fiscal position is configured, the tax defined in the product's :guilabel:`Sales Taxes`
     field is applied.

Apply fiscal positions
----------------------

To apply a fiscal position to a POS order in the :ref:`POS register <pos/use/open-register>`, click
the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon, click the :icon:`fa-book`
:guilabel:`Tax` button, and choose the desired fiscal position from the list.
