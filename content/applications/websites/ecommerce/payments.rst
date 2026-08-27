========
Payments
========

E-commerce orders can be paid:

- via a payment method made available through a :ref:`supported payment provider
  <payment_providers/supported_providers>`, such as debit and credit cards;
- via a :doc:`bank payment </applications/finance/payment_providers/bank_payments>`;
- in person, either :ref:`on site <ecommerce/payments/pay-on-site>` or
  :ref:`upon delivery <ecommerce/payments/cash-on-delivery>`;
- later, :ref:`after receiving an invoice <ecommerce/payments/pay-on-invoice>`.

.. note::
   The payment options displayed at :ref:`checkout <ecommerce/checkout/steps>` depend on the
   :ref:`active payment providers <payment_providers/add_new>`, the enabled :ref:`payment methods
   <payment_providers/payment_methods>`, the :ref:`availability options
   <payment_providers/availability>` set for the provider, the :ref:`customer's country and currency
   <payment_providers/currencies_countries>`, and the :doc:`delivery method <shipping>` selected by
   the customer.

Payment providers
=================

Several :ref:`payment providers are supported <payment_providers/supported_providers>`. Each
provider supports a specific list of :ref:`countries and currencies
<payment_providers/currencies_countries>` and offers specific :ref:`payment methods
<payment_providers/payment_methods>`, which can be individually (de)activated to match business
requirements.

To make a payment provider's payment methods available to customers at :ref:`checkout
<ecommerce/checkout/payment>`, go to :menuselection:`Website --> Configuration --> Payments`,
:guilabel:`Install` the relevant provider, :ref:`configure it, and publish it
<payment_providers/add_new>`.

.. _ecommerce/payments/pay-on-site:

Pay on site
===========

To allow customers to reserve products online and pay when collecting them in-store, enable and
configure the :ref:`Click & Collect feature <ecommerce/shipping/instore-pickup>`. The
:guilabel:`Pay on Site` payment provider is then automatically installed and published.

.. note::
   This payment method is available at checkout only for customers who select the :guilabel:`Pick
   up in store` delivery method.

.. _ecommerce/payments/cash-on-delivery:

Cash on delivery
================

The :guilabel:`Cash on Delivery` payment method allows customers to pay for their order at the time of
delivery. To make it available to customers, follow these steps:

#. :doc:`Navigate to the relevant delivery method form <shipping>`.
#. Enable :guilabel:`Cash on Delivery`.
#. Go to :menuselection:`Website --> Configuration --> Payments`.
#. Select the :guilabel:`Cash on Delivery` payment provider and :ref:`publish it
   <payment_providers/add_new>`.

.. _ecommerce/payments/pay-on-invoice:

Pay on invoice
==============

The :guilabel:`Pay on Invoice` payment method allows customers to place an order without upfront
payment. The sales order is confirmed automatically, and payment is made based on the invoice issued
for it. This method is particularly useful for :doc:`B2B customers
</applications/websites/ecommerce/configuration/b2b_b2c>`, who commonly settle invoices after
delivery rather than at the time of purchase.

To configure it, go to :menuselection:`Website --> Configuration --> Payments` and select the
:guilabel:`Pay on Invoice` payment provider. Then, :ref:`restrict its availability
<payment_providers/availability>` if needed (e.g., by selecting a B2B-specific
:ref:`pricelist <ecommerce/prices/pricelists>`) and :ref:`publish it <payment_providers/add_new>`.

.. tip::
   Enable the :ref:`Automatic Invoicing <ecommerce/handling/invoices>` feature in the eCommerce
   settings to automatically send an invoice to the customer.
