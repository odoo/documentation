======
Stripe
======

`Stripe <https://stripe.com/>`_ is a United States-based online payment solution
provider, allowing businesses to accept **credit cards** and other payment methods.

Enable Local Payment Methods
============================

Local payment methods are payment methods that are only available for certain merchants
and customers countries and currencies.

The Stripe connector in Odoo supports the following local payment methods:

- Bancontact
- EPS
- Giropay
- iDeal:
- Przelewy24 (P24)

To enable specific Local Payment Methods with Stripe, list them as supported payment icons.
To do so, go to :menuselection:`Payment Acquirers --> Stripe --> Configuration` and add the desired payment methods in
the **Supported Payment Icons** field. If the desired payment method is already listed, you don't have anything to do.

.. image:: media/stripe_enable_local_payment_method.png
   :align: center
   :alt: Select and add icons of payment methods you want to enable

.. note::
    If a payment method icon doesn't exist at all in the database, the corresponding local payment method is always offered
    to customers.
