=====================
Ordering and checkout
=====================

Odoo eCommerce provides several options to organize the ordering and checkout process. It offers
different :ref:`order button <ecommerce/checkout/order-buttons>` options and sequential
:ref:`checkout steps <ecommerce/checkout/steps>`, some of which support additional features. The
related buttons and checkout pages can be customized using the :doc:`website editor
<../website/web_design>`.

.. _ecommerce/checkout/order-buttons:

Order buttons
=============

To customize the ordering process in Odoo eCommerce, you can:

- change the :ref:`Add to Cart <ecommerce/checkout/add-to-cart>` button's behavior;
- replace it with a :ref:`customized <ecommerce/checkout/prevent-sale>` button;
- add a :ref:`Buy now <ecommerce/checkout/buy-now>` button.

.. _ecommerce/checkout/add-to-cart:

Add to cart options
-------------------

Default add to cart behavior
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When clicking the :guilabel:`Add to cart` button, different actions can be triggered. To configure
them, go to :menuselection:`Website --> Configuration --> Settings`, scroll down to the
:guilabel:`eCommerce` section, and select one of the following options for the
:guilabel:`Add to cart` feature:

- :guilabel:`Stay on Product Page`: The customer can choose if they want to :guilabel:`Add
  to cart` and continue shopping or :guilabel:`Go to the Checkout`.
- :guilabel:`Go to cart`: The customer is immediately redirected to the cart.

.. _ecommerce/checkout/prevent-sale:

Button customization
~~~~~~~~~~~~~~~~~~~~

You can replace the :guilabel:`Add to Cart` button with a :guilabel:`Contact Us` button, which
redirects users to the default contact form.

.. note::
   Removing the ability to add products to the cart is often used by businesses that want to display
   an online catalog but cannot share prices publicly (e.g., to offer custom or variable pricing).

To do so, go to :menuselection:`Website --> Configuration --> Settings`. Under the
:guilabel:`eCommerce` section, enable :guilabel:`Prevent Sale of Zero Priced Product`, and enter
the redirect URL in the :guilabel:`Button URL` field.

Then, for all products that should display the :guilabel:`Contact Us` button, set their price to
`0` using the product form or a :doc:`pricelist <../../sales/sales/products_prices/prices/pricing>`.

.. image:: checkout/cart-contact-us.png
   :alt: Contact us button on product page

.. note::
   The :guilabel:`Contact Us` button label, URL, and the *Not Available For Sale* text beneath the
   product title and description can be modified on the product's page while in :guilabel:`Edit`
   mode.

Additional add to cart buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can add additional :guilabel:`Add to Cart` buttons and link them to specific products on any
website page.

To add them, open the website editor and place the :guilabel:`Add to Cart Button` inner content
building block. Once placed, click the button, scroll to the :guilabel:`Add to Cart Button`
section, and configure the following:

- :guilabel:`Product`: Select the product to link the button with.
- :guilabel:`Action`: Choose if it should be an :guilabel:`Add to Cart` or :ref:`Buy Now
  <ecommerce/checkout/buy-now>` button.

.. note::
   - If the product has variants, either choose one or leave the option on :guilabel:`Visitor's
     Choice`, which prompts the customer to select a variant and then :guilabel:`Add to Cart` and
     continue shopping or :guilabel:`Go to Checkout`.
   - The default :guilabel:`Add to Cart` button does not offer those options, but its label can be
     changed.

.. tip::
   In the website editor, it is also possible to show or hide the :icon:`fa-shopping-cart`
   (:guilabel:`cart`) icon in the page's header. Click the header and then the
   :icon:`fa-shopping-cart` (:guilabel:`cart`) button next to the :guilabel:`Show Empty` option
   under the :guilabel:`Style` tab.

.. _ecommerce/checkout/buy-now:

Buy now
-------

To let customers choose to go to the :ref:`Order summary <ecommerce/checkout/review_order>` step
directly, you can add an additional :guilabel:`Buy now` button. To do so, go to any product's page,
open the website editor, go to the :guilabel:`Style` tab, and click the :icon:`fa-bolt`
:guilabel:`Buy Now` button next to the :guilabel:`Purchase Options`.

.. image:: checkout/cart-buy-now.png
   :alt: Buy now button

.. _ecommerce/checkout/reorder:

Reorder products
----------------

Customers can reorder items from a previous sales order:

- from their customer portal, using the :guilabel:`Order Again` button. All products from the
  selected order are automatically added to the cart, and customers can then :guilabel:`Remove` any
  items they don't want to reorder.

  .. image:: checkout/order-again-button.png
     :alt: Reorder button

- from the cart, by clicking :guilabel:`Quick reorder` at the :ref:`Order summary step
  <ecommerce/checkout/review_order>`. Customers can then adjust quantities as needed and click the
  :icon:`fa-cart-plus` :guilabel:`(cart)` button next to the product(s) they want to reorder.

  .. image:: checkout/cart-quick-reorder.png
     :alt: Quick reorder button

.. _ecommerce/checkout/policy:

Checkout policy
===============

To allow customers to checkout as guests or force them to sign in/create an account, go to
:menuselection:`Website --> Configuration --> Settings`, scroll down to the :guilabel:`eCommerce`
section, and configure the :guilabel:`Sign in/up at checkout` setting. The following options are
available:

- :guilabel:`Optional`: Customers can check out as guests and register later via the order
  confirmation email to track their order.
- :guilabel:`Disabled`: Customers can check out as guests without creating an account.
- :guilabel:`Mandatory`: Customers must sign in or create an account at the :ref:`Order summary
  <ecommerce/checkout/review_order>` step to complete their purchase.

B2B access management
---------------------

To restrict checkout to selected B2B customers:

#. Go to :menuselection:`Website --> Configuration --> Settings` and enable the
   :ref:`Mandatory <ecommerce/checkout/policy>` option in the :guilabel:`eCommerce`
   section.
#. In the :guilabel:`General` section of the settings, set the :guilabel:`Customer Account` option
   to :guilabel:`On invitation`.
#. Go to :menuselection:`Website --> eCommerce --> Customers`, switch to the :guilabel:`List` view,
   and select the customers you wish to grant access to your :doc:`portal
   <../../general/users/portal>`.
#. Click the :icon:`fa-cog` :guilabel:`Actions` button, then :guilabel:`Grant portal access`.
#. Review the selected customers in the :guilabel:`Portal Access Management` pop-up and click
   :guilabel:`Grant Access`.

Once done, the relevant customers receive an email confirming their account creation, including
instructions on setting a password and activating their account.

.. note::
   - You can revoke access or re-invite a customer using the related buttons in the
     :guilabel:`Portal Access Management` pop-up.
   - Users can only have one :doc:`portal access <../../general/users/portal>` per email.
   - Settings are website-specific, so you could set up a B2C website that allows guest checkout and
     a B2B website with mandatory sign-in.

.. seealso::
   - :doc:`Customer accounts documentation <customer_accounts>`
   - :doc:`Portal access documentation <../../general/users/portal>`

.. _ecommerce/checkout/steps:

Checkout steps
==============

During the checkout process, customers are taken through the following steps:

- :ref:`Order summary <ecommerce/checkout/review_order>`
- :ref:`Address and delivery <ecommerce/checkout/delivery>`
- :ref:`Extra info (if enabled) <ecommerce/checkout/extra_step>`
- :ref:`Payment <ecommerce/checkout/payment>`
- :ref:`Order confirmation <ecommerce/checkout/order_confirmation>`

.. _ecommerce/checkout/customize_steps:

Each step can be customized using the website editor by adding :doc:`building blocks
<../website/web_design/building_blocks>` or opening the :guilabel:`Style` tab to enable various
checkout options.

.. note::
   Content added through building blocks is **specific** to each step.

.. _ecommerce/checkout/review_order:

Order summary
-------------

The :guilabel:`Order summary` step allows customers to see the items they added to their cart,
adjust quantities, :guilabel:`Remove` products, and :ref:`reorder products from a previous order
<ecommerce/checkout/reorder>`. Information related to the product prices and
taxes applied are also displayed. Customers can then click the :guilabel:`Checkout` button to
continue to the :ref:`Address and delivery <ecommerce/checkout/delivery>` step.

Open the website editor to :ref:`enable <ecommerce/checkout/customize_steps>` checkout options such
as:

- :guilabel:`Suggested Accessories`: to showcase :ref:`accessory products
  <ecommerce/cross_upselling/accessory>`;
- :guilabel:`Promo Code`: to allow customers to redeem :ref:`gift cards <ewallet_gift/gift-cards>`
  or apply :doc:`discount codes <../../sales/sales/products_prices/loyalty_discount>`;
- :guilabel:`Add to Wishlist`: :ref:`Enable wishlists <ecommerce/products/wishlists>` to allow
  signed-in users to remove a product from their cart and add it to their wishlist using the
  :guilabel:`Save for later` option.

.. note::
   - If a :doc:`fiscal position <../../finance/accounting/taxes/fiscal_positions>` is detected
     automatically, the product tax is determined based on the customer's IP address.
   - If the installed :doc:`payment provider <../../finance/payment_providers>` supports
     :ref:`express checkout <payment_providers/express_checkout>`, a dedicated button is displayed,
     allowing customers to go straight from the cart to the confirmation page without filling out
     the contact form.

.. _ecommerce/checkout/delivery:

Address and delivery
--------------------

Once they have reviewed their order:

- Unsigned-in customers are prompted to :guilabel:`Sign in` or enter their :guilabel:`Email
  address`, along with their delivery address and phone details;
- Signed-in customers can select the appropriate :guilabel:`Delivery address`.

They can then :doc:`choose a delivery method <shipping>`, select or enter their :guilabel:`Billing
Address` (or toggle the :guilabel:`Same as delivery address` switch if the billing and delivery
addresses are identical), and click :guilabel:`Confirm` to proceed to the next step.

.. tip::
   - For B2B customers, you can also :ref:`enable <ecommerce/checkout/customize_steps>` optional
     :guilabel:`VAT` and :guilabel:`Company name` fields by toggling the :guilabel:`Show B2B Fields`
     option in the website editor.
   - You can add a checkbox for users without an account to sign up for a newsletter. To do so, go
     to :menuselection:`Website --> Configuration --> Settings`, scroll down to the
     :guilabel:`eCommerce` section, enable the :guilabel:`Newsletter` feature, and select a
     :guilabel:`Newsletter List`.

.. _ecommerce/checkout/extra_step:

Extra info
----------

You can add an :guilabel:`Extra Info` step in the checkout process to collect additional customer
information through an online form, which is then included in the :ref:`sales order
<handling/sales>`. To do so, :ref:`enable <ecommerce/checkout/customize_steps>` the :guilabel:`Extra
Step` option in the website editor. The form can be :ref:`customized <website/building_blocks/form>`
as needed.

.. _ecommerce/checkout/payment:

Payment
-------

At the :guilabel:`Payment` step, customers can :guilabel:`Choose a payment method`, enter their
payment details, and click :guilabel:`Pay now`.

To make payment methods available to customers, configure and enable one or more :doc:`payment
provider(s) </applications/finance/payment_providers>`. To do so, go to :menuselection:`Website -->
Configuration --> Payment Providers`, :guilabel:`Activate` the relevant payment provider, and
:ref:`configure <payment_providers/add_new>` it.

.. tip::
   The options displayed at checkout depend on the active payment providers, the
   enabled :ref:`payment methods <payment_providers/payment_methods>`, the :ref:`customer’s country
   and currency <payment_providers/currencies_countries>`, and, optionally, the :ref:`maximum
   amount <payment_providers/maximum_amount>` set for the provider.

   To display an :ref:`availability <payment_providers/availability>` report for payment
   providers and payment methods and help diagnose potential availability issues on the payment
   form, enable the :ref:`developer mode <developer-mode>` and click the :icon:`fa-bug`
   (:guilabel:`bug`) icon.

Terms and conditions
~~~~~~~~~~~~~~~~~~~~

To require customers to agree to the :doc:`terms and conditions
<../../finance/accounting/customer_invoices/terms_conditions>` before payment, open the website
editor and toggle the :guilabel:`Accept Terms` switch in the :guilabel:`Style` tab.

eWallets and gift cards
~~~~~~~~~~~~~~~~~~~~~~~

Customers can pay with an eWallet or gift card during checkout. To offer these options, go to
:menuselection:`Website --> Configuration --> Settings` and enable :menuselection:`Discounts,
Loyalty & Gift Card` in the :guilabel:`eCommerce` section. Then, go to :menuselection:`Website -->
eCommerce --> Gift cards & eWallet` and :doc:`create a gift card and/or eWallet program
</applications/sales/sales/products_prices/ewallets_giftcards>`.

.. image:: checkout/payments-ewallets-giftcards.png
   :alt: Gift card and eWallet options at checkout

.. _ecommerce/checkout/order_confirmation:

Order confirmation
------------------

The final step of the checkout process is the :guilabel:`Order confirmation`, which provides a
summary of the customer's purchase details.

.. seealso::
   :doc:`Order handling documentation <order_handling>`
