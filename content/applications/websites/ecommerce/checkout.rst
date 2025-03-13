========
Checkout
========

Once customers have added their desired products to the cart, they can access it by clicking the
:icon:`fa-shopping-cart` button in the header to start the checkout process. In Odoo eCommerce, this
process consists of sequential :ref:`steps <ecommerce/checkout/steps>`, some of which support
additional features. The related checkout pages can be :ref:`customized
<ecommerce/checkout/customize_steps>` using the website editor.

.. _ecommerce/checkout/policy:

Checkout policy
===============

To allow customers to checkout as guests or force them to sign in/create an account, go to
:menuselection:`Website --> Configuration --> Settings`, scroll down to the
:guilabel:`Shop - Checkout Process` section, and configure the :guilabel:`Sign in/up at checkout`
setting. The following options are available:

- :guilabel:`Optional`: Customers can check out as guests and register later via the order
  confirmation email to track their order.
- :guilabel:`Disabled (buy as guest)`: Customers can checkout as guests without creating an account.
- :guilabel:`Mandatory (no guest checkout)`: Customers must sign in or create an account at
  the :ref:`Review Order <ecommerce/checkout/review_order>` step to complete their purchase.

B2B access management
---------------------

To restrict checkout to selected B2B customers, follow these steps:

#. Go to :menuselection:`Website --> Configuration --> Settings`, and in the
   :guilabel:`Shop - Checkout Process` section, enable the
   :ref:`Mandatory (no guest checkout) <ecommerce/checkout/policy>` option.
#. Scroll down to the :guilabel:`Privacy` section, go to :guilabel:`Customer Account`, and select
   :guilabel:`On invitation`.
#. Go to :menuselection:`Website --> eCommerce --> Customers`, switch to the :guilabel:`List` view,
   and select the customers you wish to grant access to your
   :doc:`portal </applications/general/users/portal>`.
#. Click the :icon:`fa-cog` :guilabel:`Actions` button, then :guilabel:`Grant portal access`.
#. Review the selected customers in the :guilabel:`Portal Access Management` pop-up and click
   :guilabel:`Grant Access`.

Once done, the relevant customers receive an email confirming their account creation, including
instructions on setting a password and activating their account.

.. note::
   - You can revoke access or re-invite a customer using the related buttons in the
     :guilabel:`Portal Access Management` pop-up.
   - Users can only have one :doc:`portal access </applications/general/users/portal>` per email.
   - Settings are website-specific, so you could set up a B2C website that allows guest checkout and
     B2B website with mandatory sign-in.

.. seealso::
   - :doc:`Customer accounts <customer_accounts>`
   - :doc:`Portal access </applications/general/users/portal>`

.. _ecommerce/checkout/steps:

Checkout steps
==============

During the checkout process, customers are taken through the following steps:

- :ref:`Review order <ecommerce/checkout/review_order>`
- :ref:`Delivery <ecommerce/checkout/delivery>`
- :ref:`Extra info (if enabled) <ecommerce/checkout/extra_step>`
- :ref:`Payment <ecommerce/checkout/payment>`
- :ref:`Order confirmation <ecommerce/checkout/order_confirmation>`

.. _ecommerce/checkout/customize_steps:

Each step can be customized using the website editor: Click :guilabel:`Edit` to add
:doc:`building blocks <../website/web_design/building_blocks>` from the :guilabel:`Blocks` tab or
open to the :guilabel:`Customize` tab to enable various checkout options.

.. note::
   Content added through building blocks is **specific** to each step.

.. _ecommerce/checkout/review_order:

Review order
------------

The :guilabel:`Review Order` step allows customers to see the items they added to their cart, adjust
quantities, or :guilabel:`Remove` products. Information related to the product prices and taxes
applied are also displayed. Customers can then click the :guilabel:`Checkout` button to continue to
the :ref:`Delivery <ecommerce/checkout/delivery>` step.

Open the website editor to :ref:`enable <ecommerce/checkout/customize_steps>` checkout options such
as:

- :guilabel:`Suggested Accessories`: to showcase :ref:`accessory products
  <ecommerce/cross_upselling/accessory>`;
- :guilabel:`Promo Code`: to allow customers to redeem :ref:`gift cards <ewallet_gift/gift-cards>`
  or apply :doc:`discount codes </applications/sales/sales/products_prices/loyalty_discount>`;
- :guilabel:`Add to Wishlist`: To allow signed-in users to remove a product from their cart and add
  it to their wishlist, go to :menuselection:`Website --> Configuration --> Settings`, scroll to
  the :guilabel:`Shop - Products` section, and enable :guilabel:`Wishlists`. The :guilabel:`Add to
  Wishlist` option is then enabled by default in the website editor.

.. note::
   - If a :doc:`fiscal position </applications/finance/fiscal_localizations>` is detected automatically,
     the product tax is determined based on the customer's IP address.
   - If the installed :doc:`payment provider </applications/finance/payment_providers>` supports
     :ref:`express checkout <payment_providers/express_checkout>`, a dedicated button is displayed,
     allowing customers to go straight from the cart to the confirmation page without filling out
     the contact form.

.. _ecommerce/checkout/delivery:

Delivery
--------

Once they have reviewed their order:

- Unsigned-in customers are prompted to :guilabel:`Sign in` or enter their
  :guilabel:`Email address`, along with their delivery address and phone details;
- Signed-in customers can select the appropriate :guilabel:`Delivery address`.

They can then :doc:`choose a delivery method <shipping>`, select or enter their :guilabel:`Billing
Address` (or toggle the :guilabel:`Same as delivery address` switch if the billing and delivery
addresses are identical), and click :guilabel:`Confirm` to proceed to the next step.

.. tip::
   For B2B customers, you can also :ref:`enable <ecommerce/checkout/customize_steps>` optional
   :guilabel:`VAT` and :guilabel:`Company name` fields by toggling the :guilabel:`Show B2B Fields`
   option in the website editor.

.. _ecommerce/checkout/extra_step:

Extra info
----------

You can add an :guilabel:`Extra Info` step in the checkout process to collect additional
customer information through an online form, which is then included in the :ref:`sales order
<handling/sales>`. To do so :ref:`enable <ecommerce/checkout/customize_steps>` the :guilabel:`Extra
Step` option in the website editor. The form can be :ref:`customized <website/dynamic_content/form>`
as needed.

.. tip::
   Alternatively, go to :menuselection:`Website --> Configuration --> Settings`, scroll to the
   :guilabel:`Shop - Checkout Process` section, enable :guilabel:`Extra Step During Checkout`, and
   click :guilabel:`Save`. Click :icon:`fa-arrow-right` :guilabel:`Configure Form` to customize the
   form.

.. _ecommerce/checkout/payment:

Payment
-------

At the :guilabel:`Payment` step, customers :guilabel:`Choose a payment method`, enter their
payment details, and click :guilabel:`Pay now`.

You can require customers to agree to your :doc:`terms and conditions
</applications/finance/accounting/customer_invoices/terms_conditions>` before payment. To
:ref:`enable <ecommerce/checkout/customize_steps>` this option, go to the website editor and toggle
the :guilabel:`Accept Terms & Conditions` feature.

.. tip::
   Enable the :ref:`developer mode <developer-mode>` and click the :icon:`fa-bug` :guilabel:`bug`
   icon to display an :ref:`availability <payment_providers/availability>` report for payment
   providers and payment methods, which helps diagnose potential availability issues on the payment
   form.

.. _ecommerce/checkout/order_confirmation:

Order confirmation
------------------

The final step of the checkout process is the :guilabel:`Order confirmation`, which provides a
summary of the customer's purchase details.

.. seealso::
   :doc:`Order handling <order_handling>`
