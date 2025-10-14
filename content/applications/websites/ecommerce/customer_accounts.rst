=================
Customer accounts
=================

Using customer accounts for an ecommerce shop enables you to :ref:`manage customers
<ecommerce/customer_accounts/account-creation>`, control access to the :ref:`shop
<ecommerce/customer_accounts/shop-access>`, the :ref:`checkout
<ecommerce/customer_accounts/checkout-access>`, or the :ref:`customer portal <portal/access>`,
and support both :doc:`B2B and B2C operations <b2b_b2c>`.

After logging in, customers can access their :doc:`customer portal <../../general/users/portal>`
by clicking their username in the top-right corner of the screen and selecting :guilabel:`My
Account`. From there, they can view all their documents in one place, such as quotations, orders,
invoices, and more.

.. image:: customer_accounts/account-log.png
   :alt: Customer account access

.. tip::
   The customer account page can be customized with building blocks and other features through
   the :doc:`website builder <../website/web_design>`.

.. _ecommerce/customer_accounts/account-creation:

Customer account creation
=========================

You can choose whether customer accounts and document access are available to everyone or restricted
to invited users only. To do so, go to :menuselection:`Website --> Configuration --> Settings`,
and navigate to the :guilabel:`General` section. Under :guilabel:`Customer Account`, select one
of the following options:

- :guilabel:`On invitation`: Customers can only create an account if the website owner sends them
  an invitation.
- :guilabel:`Free sign up`: Every website visitor can create an account and sign in. They will
  get access to the :doc:`portal <../../general/users/portal>` by default.

.. _ecommerce/customer_accounts/grant-access:

To send an email invitation to a customer:

- Go to :menuselection:`Website --> eCommerce --> Customers`.
- Select a customer or click :guilabel:`New` to create one, ensuring an :guilabel:`Email` address
  is set.
- Click the :icon:`fa-cog` :guilabel:`(Actions)` icon next to the record's name at the top-left and
  select :guilabel:`Grant portal access`.
- In the :guilabel:`Portal Access Management` pop-up, click :guilabel:`Grant Access` to send the
  invitation.

.. tip::
   To invite multiple customers at once, switch to the customers :icon:`oi-view-list`
   :guilabel:`List` view, select several customers, click the :icon:`fa-cog` :guilabel:`Actions`
   button, and select :guilabel:`Grant portal access`.

Once done, the customer(s) receive an email confirming their account creation, including
instructions on setting a password and activating their account.

.. note::
   - When selecting the :guilabel:`Free sign up`, a clickable :guilabel:`Don't have an account?`
     link appears under the login form on the website.
   - The :guilabel:`On invitation` option is especially useful for :ref:`B2B
     <ecommerce/b2b_b2c/prices>` businesses that prefer to keep :ref:`prices hidden
     <ecommerce/prices/hide-prices>` on the website and grant access only to invited customers.

.. tip::
   It is possible to configure a website form with a :guilabel:`Create a Customer` :ref:`action
   <website/building_blocks/action>` to automatically create a customer record in the backend when
   filled in.

Access restriction
==================

Once a customer account is created, it is still possible to adjust the access rights
either globally or for individual users:

- :ref:`Revoke access or re-invite a customer <portal/access>`
  using the related buttons in the :guilabel:`Portal Access Management` pop-up.
- Restrict :ref:`access to the shop <ecommerce/customer_accounts/shop-access>`;
- Decide whether customers need to create an account to :ref:`complete the checkout
  <ecommerce/customer_accounts/checkout-access>`.

.. tip::
   It is also possible to define the types of documents customers have access to. To do so, click
   your username in the upper-right corner of the website, select :guilabel:`My Account` and open
   the :doc:`website builder <../website/web_design>`. On the :guilabel:`Style` tab, enable or
   disable access to specific documents as needed.

.. _ecommerce/customer_accounts/shop-access:

Shop access
-----------

To restrict access to the entire online shop for users who are not logged-in, go to
:menuselection:`Website --> Configuration --> Settings`, scroll to the :guilabel:`eCommerce` section
and under :guilabel:`Ecommerce Access`, select :guilabel:`Logged in users`. Select :guilabel:`All
users` if the shop should be visible to every website visitor.

.. tip::
   To restrict access to the shop's pricing, use :ref:`pricelists <ecommerce/prices/pricelists>`
   with :ref:`country groups <ecommerce/prices/country-groups>`.

.. _ecommerce/customer_accounts/checkout-access:

Checkout access
---------------

To allow customers to checkout as guests or force them to sign in/create an account, go to
:menuselection:`Website --> Configuration --> Settings`, scroll down to the :guilabel:`eCommerce`
section, and configure the :guilabel:`Sign in/up at checkout` setting. The following options are
available:

- :guilabel:`Optional`: Customers can check out as guests and register later via the order
  confirmation email to track their order.
- :guilabel:`Disabled`: Customers can checkout as guests without creating an account.
- :guilabel:`Mandatory`: Customers must sign in or create an account at the
  :ref:`Order summary <ecommerce/checkout/review_order>` step to complete their purchase.

.. note::
   - Settings are specific to each website, allowing you to configure a B2C website with guest
     checkout and a B2B website that requires customers to sign in.
   - To use the :ref:`wishlist <ecommerce/products/wishlists>` feature, customers must
     create an account to save their favorite items for later.

.. _ecommerce/customer_accounts/multiple-websites:

Multi-website account
=====================

When managing multiple websites, it is possible to make customer accounts available across *all*
websites, allowing each customer to use a single account. To do so, go to :menuselection:`Website
--> Configuration --> Settings`, in the :guilabel:`General` section, enable the :guilabel:`Shared
Customer Accounts` option.

.. note::
   When operating both :ref:`B2B and B2C online shops <ecommerce/b2b_b2c/multiple-websites>`, it is
   recommended to use separate websites for each business model.
