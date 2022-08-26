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

To enable some of these local payment methods with Stripe, list them as supported payment icons. To
do so, go to :menuselection:`Payment Acquirers --> Stripe --> Configuration` and add the desired
payment methods in the **Supported Payment Icons** field. If the desired payment method is already
listed, you don't have anything to do.

.. image:: stripe/stripe_enable_local_payment_method.png
   :align: center
   :alt: Select and add icons of the payment methods you want to enable

.. note::
   If your local payment method is not listed above but is supported by Stripe, we cannot guarantee
   that your local payment method works with Odoo.

.. important::
   When configuring a payment acquirer with the payment flow :guilabel:`Payment from Odoo`, the
   payment acquirer is visible only to people who have an account and are logged-in on the related
   database. To add a payment acquirer visible to everyone, the payment flow has to be set to
   :guilabel:`Redirection to the acquirer website`.