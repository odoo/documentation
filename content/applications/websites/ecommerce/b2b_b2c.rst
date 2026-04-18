===========
B2B and B2C
===========

Odoo eCommerce is designed to fulfill the needs of both B2B and B2C companies. It allows you to
configure :doc:`prices <products/prices>`, manage :doc:`access <customer_accounts>` for specific
customers, and :ref:`customize the website <ecommerce/b2b_b2c/multiple-websites>` to support B2B,
B2C, or both business models.

.. _ecommerce/b2b_b2c/prices:

Prices
======

While B2C businesses sell directly to the end consumer with a :ref:`tax-included
<ecommerce-price-management-tax-display>` price, B2B businesses usually :ref:`exclude taxes
<ecommerce-price-management-tax-display>` and may even prefer to hide prices altogether, showcasing
only their products instead.
To configure a B2B-specific ecommerce shop, make sure the :ref:`Tax-Excluded
<ecommerce/prices/taxes>` option is enabled, and complete the configuration to :ref:`hide the
pricing <ecommerce/prices/hide-prices>`.

.. tip::
   To make sure that only customers with an :ref:`account and granted access
   <ecommerce/customer_accounts/account-creation>` can see the prices, go to
   :menuselection:`Website --> eCommerce --> Customers`, click the :icon:`fa-caret-down`
   :guilabel:`(dropdown)` icon from the search bar, and select the :guilabel:`Archived` filter.
   Then click the :guilabel:`Public user` card, go to the :guilabel:`Sales & Purchase` tab, and
   add the zero-priced pricelist configured to :ref:`cover all countries
   <ecommerce/prices/country-groups>`. Keep the :guilabel:`Public User` contact :guilabel:`Archived`
   at all times. Website visitors now see the products without prices, while only customers with an
   :ref:`account invitation <ecommerce/customer_accounts/account-creation>` and an assigned
   :ref:`pricelist <ecommerce/prices/pricelists>` can view the pricing in the customer portal.

.. seealso::
   - :doc:`/applications/finance/accounting/taxes/B2B_B2C`
   - :ref:`Discounts <ecommerce/prices/discounts>`

Access request
==============

When running a B2B business, you usually :ref:`hide the pricing <ecommerce/b2b_b2c/prices>` on the
web shop and make it available for :ref:`logged-in users <ecommerce/customer_accounts/shop-access>`
only. To prevent anyone from signing up freely, set the :ref:`Customer Account
<ecommerce/customer_accounts/account-creation>` setting option to :guilabel:`On invitation`.
To create a page where customers request access, open the :doc:`website editor
<../website/web_design>`, :ref:`create a form <website/building_blocks/form>`, customize it, and in
the :guilabel:`Action` field, select :guilabel:`Create a customer`.

.. tip::
   You can assign tags created on a contact form under :menuselection:`Website --> Configuration
   --> Customers` to identify what kind of customers have submitted the form. To do so, select
   a field in the form while in :guilabel:`Edit` mode, click the :guilabel:`+ Field` button under
   the :guilabel:`Customize` tab, and set the field's :guilabel:`Type` to :guilabel:`Tags`.
   Toggle the tags that should be automatically assigned when a customer fills in the form and set
   the field's :guilabel:`Visibility` to :guilabel:`Hidden`.

When a customer submits the form, a new contact is automatically created in the database. The
contact is assigned the first pricelist from the list of available pricelists, and, if applicable,
the specified tags.

Submitted requests can be found under the :menuselection:`Website --> eCommerce --> Customers`.
Select the customer you want to :ref:`grant portal access
<ecommerce/customer_accounts/grant-access>` to. Once done, the selected customer is able to
view the B2B prices and products. Make sure the correct pricelist is assigned to their
contact form.

.. tip::
   - It is also possible to hide the entire shop from the public using the :ref:`Ecommerce Access
     <ecommerce/customer_accounts/shop-access>` setting and only make it available for logged-in
     customers.
   - Configure the :ref:`checkout policy <ecommerce/customer_accounts/checkout-access>` to
     allow/disallow guest checkout for B2C businesses.
   - Enable the :ref:`Shared Customer Accounts <ecommerce/customer_accounts/multiple-websites>`
     feature to allow customers to use the same account on :ref:`all
     <ecommerce/b2b_b2c/multiple-websites>` your websites.

.. seealso::
   :doc:`customer_accounts`

.. _ecommerce/b2b_b2c/multiple-websites:

Multiple websites
=================

Settings are website-specific, which means it is possible to configure different behaviors for
each website. For example, you can set up a B2C website that allows :ref:`guest checkout
<ecommerce/customer_accounts/checkout-access>` and displays :ref:`tax-included prices
<ecommerce-price-management-tax-display>`, and a B2B website that requires :ref:`sign-in
<ecommerce/customer_accounts/checkout-access>` and shows :ref:`tax-excluded prices
<ecommerce-price-management-tax-display>`. However, each :ref:`pricelist
<ecommerce/prices/pricelists>` can only be assigned to one website at a time. If you want to use
the same pricelist on several websites, duplicate the pricelist and assign each copy to its
corresponding website.

.. tip::
   If you are running a B2B and B2C business, we *strongly* recommend to create two :doc:`separate
   websites <../website/configuration/multi_website>` and assign a :ref:`zero-priced pricelist
   <ecommerce/b2b_b2c/prices>` to the B2B website and a regular pricelist to the B2C website.
   In case, you prefer using a single website, configure it using :ref:`country groups
   <ecommerce/prices/country-groups>` and assigning :ref:`pricelists <ecommerce/prices/pricelists>`
   to customers, and deactivate the :ref:`Selectable <ecommerce/prices/selectable-pricelists>`
   option.

Additional features
===================

Invoice
-------

Depending on the type of business (B2B or B2C), you might want to issue an invoice. An invoice can
either be generated automatically (for B2B) or on demand of the customer (for B2C). This process
can be automated if (and when) the online payment is :ref:`confirmed <handling/sales>`.
To automate invoicing, enable the :ref:`Automatic Invoice <handling/legal>` setting. If this
feature has not been enabled, the customer only receives an order confirmation.

.. _ecommerce/b2b_b2c/b2b-fields:

B2B fields at checkout
----------------------

Use the :guilabel:`Show B2B fields` toggle in the :doc:`website editor <../website/web_design>`
to display B2B-specific additional fields like :guilabel:`VAT` or
:guilabel:`Company Name` during the :ref:`delivery <ecommerce/checkout/delivery>` step.
