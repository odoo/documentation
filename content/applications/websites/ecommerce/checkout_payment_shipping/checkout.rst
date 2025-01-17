========
Checkout
========

The checkout process in Odoo eCommerce is made of different :ref:`steps <ecommerce/checkout/steps>`
that can be :ref:`configured <ecommerce/checkout/configuration>`.

.. _ecommerce/checkout/configuration:

Configuration
=============

Go to :menuselection:`Website --> Configuration --> Settings` and scroll to the
:guilabel:`Shop - Checkout Process` section to enable features such as
:ref:`Extra Step During Checkout <ecommerce/checkout/extra_step>`,
:ref:`Sign-in/up at checkout <ecommerce/checkout/policy>`, or :ref:`Buy Now <ecommerce/cart/buy-now>`.

.. _ecommerce/checkout/steps:

Checkout steps
==============

When customers click the :icon:`fa-shopping-cart` :guilabel:`Add to cart` button on a
:doc:`product <../products>` page, the product is :doc:`added to their cart
<../../ecommerce/checkout_payment_shipping/cart>`, and customers remain
:ref:`by default <cart/action_customization>` on the product’s page.

.. _ecommerce/checkout/customize_steps:

You can use the website editor to customize any checkout :ref:`step <ecommerce/checkout/steps>` by
clicking :guilabel:`Edit`. Go to the :guilabel:`Blocks` tab to add
:doc:`building blocks <../../website/web_design/building_blocks>` or to the :guilabel:`Customize`
tab to enable various checkout options.

.. note::
   Content added through building blocks is **specific** to each step.

.. _ecommerce/checkout/review_order:

Review order
------------

The :guilabel:`Review Order` step allows clients to see the items they added to their cart, adjust
quantities, or :guilabel:`Remove` products. Information related to the product prices and
taxes applied are also displayed. Customers can then click the
:guilabel:`Checkout` button to continue to the :ref:`Delivery <ecommerce/checkout/delivery>` step.

.. note::
   - If a :doc:`fiscal position <../../../finance/fiscal_localizations>` is detected automatically,
     the product tax is determined based on the person's IP address.
   - The :guilabel:`Pay with Demo` button is displayed if the payment provider
     :doc:`Demo <../../../finance/payment_providers/demo>` is installed.

Go to the website editor to :ref:`enable <ecommerce/checkout/customize_steps>` checkout options such
as :ref:`suggested accessories <ecommerce/checkout/suggested_accessories>`,
:ref:`promo code <ecommerce/checkout/promo_code>`, or
:ref:`add to wishlist <ecommerce/checkout/wishlist>`.

.. _ecommerce/checkout/suggested_accessories:

- :guilabel:`Suggested Accessories`: Toggle the :guilabel:`Suggested Accessories` feature to showcase
  :ref:`accessory products <ecommerce/cross_upselling/accessory>`.

.. _ecommerce/checkout/promo_code:

- :guilabel:`Promo Code`: Toggle the :guilabel:`Promo Code` option so customers can redeem
  :ref:`gift cards <ewallet_gift/gift-cards>` or apply :doc:`discount <../../../sales/sales/products_prices/loyalty_discount>`
  codes.

.. _ecommerce/checkout/wishlist:

- :guilabel:`Add to Wishlist`: Toggle :guilabel:`Add to Wishlist` to display the
  :guilabel:`Save for Later` option, which allows signed-in users to remove a product from their
  cart and save it in their wishlist.

.. note::
   Go to :menuselection:`Website --> Configuration --> Settings`, scroll to the
   :guilabel:`Shop - Products` section and enable :guilabel:`Wishlists` to have the
   :guilabel:`Add to Wishlist` option available in the website editor.

.. _ecommerce/checkout/delivery:

Delivery
--------

Once they have reviewed their order:

- Unsigned-in customers are prompted to :guilabel:`Sign in` or enter their
  :guilabel:`Email address`, along with their delivery address and phone details;

- Signed-in customers can select the appropriate :guilabel:`Delivery address`.

Next, customers can
:doc:`Choose a delivery method <../../ecommerce/checkout_payment_shipping/shipping>`, select or
enter their :guilabel:`Billing Address` (or toggle the :guilabel:`Same as delivery address` switch
if the billing and delivery addresses are identical), and click :guilabel:`Confirm` to proceed to
the next step.

For B2B customers, you can :ref:`enable <ecommerce/checkout/customize_steps>` optional
:guilabel:`VAT` and :guilabel:`Company name` fields during the
:ref:`Delivery <ecommerce/checkout/delivery>` step by toggling the :guilabel:`Show B2B Fields`
option in the website editor. These fields appear in the :guilabel:`Delivery address` form to
accommodate business requirements.

.. _ecommerce/checkout/extra_step:

Extra info
----------

During the checkout process, you can add an :guilabel:`Extra Info` step to collect additional
customer information via an online :ref:`form <website/dynamic_content/form>`.

To :ref:`enable <ecommerce/checkout/customize_steps>` this option, toggle the :guilabel:`Extra Step`
option in the website editor.

.. tip::
   Alternatively, go to :menuselection:`Website --> Configuration --> Settings`, scroll to the
   :guilabel:`Shop - Checkout Process` section, enable :guilabel:`Extra Step During Checkout`, and
   click :guilabel:`Save`. Click :icon:`fa-arrow-right` :guilabel:`Configure Form` to customize the
   form.

Depending on your :ref:`checkout policy <ecommerce/checkout/policy>`, customers not logged in are
prompted to either sign in or proceed as guests. Logged-in customers benefit from auto-filled
details, streamlining the process. Once ready, they can click
:guilabel:`Continue Checkout to proceed` to the next step.

.. _ecommerce/checkout/payment:

Payment
-------

At the :guilabel:`Payment` step, customers :guilabel:`choose a payment method`, enter their
payment details, and click :guilabel:`Pay now`.

You can require customers to agree to your :doc:`terms and conditions <../../../finance/accounting/customer_invoices/terms_conditions>`
before payment. To :ref:`enable <ecommerce/checkout/customize_steps>` this option, go to the website
editor and toggle the :guilabel:`Accept Terms & Conditions` feature.

.. tip::
   Click the :icon:`fa-bug` :guilabel:`bug` icon to an
   :ref:`availability <payment_providers/availability>` report for payment providers and payment
   methods, which helps diagnose potential availability issues on the payment form.

.. _ecommerce/checkout/order_confirmation:

Order confirmation
------------------

The final step of the checkout process is the :guilabel:`Order confirmation`, which provides a
summary of the customer's purchase details.

.. seealso::
   :doc:`Order handling <../../ecommerce/ecommerce_management/order_handling>`

.. _ecommerce/checkout/policy:

Checkout policy
===============

You can allow customers to checkout as guests or require them to sign in or create an account by
going to :menuselection:`Website --> Configuration --> Settings`, scrolling down to the
:guilabel:`Shop - Checkout Process` section, and adjusting the :guilabel:`Sign in/up at checkout`
option:

- :guilabel:`Optional`: Customers can check out as guests and register later via the order
  confirmation email to track their order;

- :guilabel:`Disabled (buy as guest)`: Customers can checkout as guests without creating an account;

- :guilabel:`Mandatory (no guest checkout)`: Customers must sign in or create an account at
  the :ref:`Review Oder <ecommerce/checkout/review_order>` step to complete their purchase.

.. seealso::
   - :doc:`Customer accounts <../ecommerce_management/customer_accounts>`
   - :doc:`Portal access <../../../general/users/portal>`

B2B access restriction
======================

To restrict checkout to selected B2B customers:

#. Enable the :ref:`Mandatory (no guest checkout) <ecommerce/checkout/policy>` option;

#. Go to :menuselection:`Website --> eCommerce --> Customers`, select the :guilabel:`List` view and
   select the customers you wish to grant access to;

#. Click the :icon:`fa-cog` :guilabel:`Actions` button, and :guilabel:`Grant portal access`. In the
   :guilabel:`Portal Access Management` pop-up, you can view all the customers who have access,
   :guilabel:`Revoke Access`, or :guilabel:`Re-Invite` them.

.. note::
   - Users can only have one :doc:`portal access <../../../general/users/portal>` per email.
   - Settings are website-specific, so you can set up a B2C website that allows guest checkout and
     another for B2B customers with mandatory sign-in.
