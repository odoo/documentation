======
Paypal
======

`Paypal <https://www.paypal.com//>` is available and popular worldwide. It doesn't charge any
subscription fee and creating an account is very easy. That's why we definitely recommend it for
starters in Odoo. It works as a seamless flow where the customer is routed to Paypal website to
register the payment.

Settings in Odoo
================

.. seealso::
   - :ref:`payment_acquirers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your PayPal account, which comprise:

- **Email ID**: your login email address in Paypal.
- **Merchant ID**: the code of the merchant account used to identify your Paypal account.
- **Use IPN**: either you want to use Instant Payment Notification. Already checked, you don't have
  to change it.

You can copy your credentials from your Paypal account, and paste them in the related fields under
the **Credentials** tab.

To retrieve them, log into your Paypal account, and go to :menuselection:`Your account menu -->
Account settings --> Business Profile --> Business Information`

.. important::
   If you are trying Paypal as a test, with a *sandbox account*, change the **State** to *Test
   Mode*. We recommend doing this on a test Odoo database, rather than on your main database.

Configuration tab
-----------------

You can charge extra fees to your customers for paying with Paypal;
This to cover the transaction fees Paypal charges you. Once redirected to Paypal, your customer sees
an extra applied to the order amount.

To activate this, go to the Configuration tab of Paypal configuration in Odoo and check *Add Extra
Fees*.

You can refer to `Paypal Fees <https://www.paypal.com/webapps/mpp/paypal-fees>`_ to set up fees.

.. note::
   `Traders in the EU <https://europa.eu/youreurope/citizens/consumers/shopping/pricing-payments/
   index_en.htm>`_ are not allowed to charge extra fees for paying with credit cards.

Settings in Paypal
==================

First, let’s see how to set up your Paypal account in order to build a seamless customer experience
with Odoo.

Log in and open the settings. Go to :menuselection:`Your account menu --> Account settings -->
Product & Services --> Website payments` and click **Update** on **Website preferences**.

Auto Return
-----------

*Auto Return* automatically redirects your customers to Odoo once the payment is processed. Check
*Auto Return* and enter your domain name with the suffix ``/shop/confirmation`` as *Return URL*
(e.g. `https://yourcompany.odoo.com/shop/confirmation`).

This URL is requested in Paypal but not used in practice as Odoo transmits it at each transaction.
Don’t worry if you manage several sales channels or Odoo databases.

Payment Data Transfer (PDT)
---------------------------

*Payment Data Transfer* delivers the payment confirmation to Odoo as soon as it is processed.
Without it, Odoo cannot end the sales flow. This setting must be activated as well. When saving, an
*Identity Token* is generated. You will be later requested to enter it in Odoo.

Paypal Account Optional
-----------------------

We advise you to not prompt customers to log in with a Paypal account when they get to pay. Let them
pay with debit/credit cards as well, or you might lose some deals. Make sure this setting is turned
on.

Instant Payment Notification (IPN)
----------------------------------

PDT sends order confirmations once and only once. As a result, your site must be running when it
happens; otherwise, it will never receive the message. That’s why we advise to activate the *Instant
Payment Notification* (IPN) on top. With IPN, delivery of order confirmations is virtually
guaranteed since IPN resends a confirmation until your site acknowledges receipt.

| To activate IPN, get back to *Website payments* menu and click *Update* in *Instant Payment
  Notification*.
| The *Notification URL* to set is your domain name + “payment/paypal/ipn” (e.g.
  `https://yourcompany.odoo.com/payment/paypal/ipn`).

Payment Messages Format
-----------------------

If you use accented characters (or anything else than basic Latin characters) for your customer
names, addresses... you MUST configure the encoding format of the payment request sent by Odoo to
Paypal.

.. danger::
   If you don't configure this setting, some transactions fail without notice.

To do so, open:

- `this page for a test account <https://sandbox.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-language-encoding>`_
- `this page for a production account <https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-language-encoding>`_

Then, click *More Options* and set the two default encoding formats as **UTF-8**.

Your Paypal account is ready!

.. tip::
   For Encrypted Website Payments & EWP_SETTINGS error, please check the `Paypal documentation
   <https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/
   encryptedwebpayments#encrypted-website-payments-ewp>`_.

Test environment
================

You can test the entire payment flow in Odoo thanks to Paypal Sandbox accounts.

Log in to `Paypal Developer Site <https://developer.paypal.com/>`__ with your Paypal credentials.

This will create two sandbox accounts:

-  A business account (to use as merchant, e.g. `pp.merch01-facilitator@example.com <mailto:pp.merch01-facilitator@example.com>`__).

-  A default personal account (to use as shopper, e.g. `pp.merch01-buyer@example.com <mailto:pp.merch01-buyer@example.com>`__).

Log in to Paypal Sandbox with the merchant account and follow the same configuration instructions.
Enter your sandbox credentials in Odoo and make sure Paypal is still set on *Test Mode*. We
recommend doing this on a test Odoo database, rather than on your main database.

Run a test transaction from Odoo using the sandbox personal account.

.. seealso::
   - :doc:`../payment_acquirers`
