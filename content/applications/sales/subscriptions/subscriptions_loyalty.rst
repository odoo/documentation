.. meta::
   :description: This page explains how loyalty and discount programs apply to subscription products
                 through the Recurring option for conditional rules and rewards, and which program
                 types support Recurring for rules, rewards, or both.

==================================
Subscriptions and loyalty programs
==================================

In addition to standard pricelists and per-order discounts, the Odoo **Subscriptions** app is
compatible with dedicated loyalty and discount programs. Once :ref:`loyalty and discount programs
have been enabled <sales/loyalty_discount/configure-settings>`, subscription-specific programs may
be created.

Configure loyalty programs for subscriptions
============================================

The process for creating a subscription-specific program is similar to :ref:`the normal process
<sales/loyalty_discount/configure-programs>`, but there are a few considerations to keep in mind.
With the **Subscriptions** app installed, both :guilabel:`conditional rules` and :guilabel:`rewards`
may be marked as :guilabel:`Recurring`.

However, not every program can be saved and utilized when both checkboxes are checked. Attempting to
enable the :guilabel:`Recurring` checkbox for *conditional rules* when the program doesn't support
it results in a *Validation Error* pop-up when saving the program.

Programs that support recurring rules and rewards
-------------------------------------------------

Loyalty cards
~~~~~~~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for both rules and rewards. Enabling the checkbox
for rules ensures that customers may earn loyalty points during each renewal period, so long as they
meet the requirements. Enabling the checkbox for rewards ensures that earned loyalty points are
automatically exchanged for applied rewards during each period.

Next order coupons
~~~~~~~~~~~~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for both rules and rewards. Enabling the checkbox
for rules ensures that customers may earn coupons good for their next order during each renewal
period, so long as they meet the requirements. Enabling the checkbox for rewards ensures that earned
coupons are automatically exchanged for applied rewards during each period.

Programs that only support recurring rules
------------------------------------------

Coupons
~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for rewards only. Doing so ensures that earned
coupons are automatically applied during each renewal period.

Promotions
~~~~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for rewards only. Doing so ensures that earned
promotional rewards are automatically applied during each renewal period.

Discount code
~~~~~~~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for rewards only. Doing so ensures that earned
discount codes are automatically applied during each renewal period.

Buy X, Get Y
~~~~~~~~~~~~

The :guilabel:`Recurring` checkbox may be enabled for rewards only. Doing so ensures that earned
rewards are automatically applied during each renewal period.

.. seealso::
   - :doc:`../sales/products_prices/prices/pricing`
   - :doc:`../sales/products_prices/prices/discounts`
   - :doc:`../sales/products_prices/loyalty_discount`
