======
Paypal
======

`Paypal <https://www.paypal.com/>`_ is available and popular worldwide. It doesn't charge any
subscription fee, and creating an account is very easy. That's why we recommend it for starters in
Odoo. It works as a seamless flow where the customer is routed to the Paypal website to register the
payment.

Settings in Odoo
================

.. seealso::
   - :ref:`payment_providers/add_new`

Credentials tab
---------------

Odoo needs your **API Credentials** to connect with your PayPal account, which comprise:

- **Email**: your login email address in Paypal.
- **Merchant Account ID**: the code of the merchant account used to identify your Paypal account.
- **PDT Identity Token**: the key used to verify the authenticity of transactions.
- **Use IPN**: whether you want to use Instant Payment Notification. Already checked, you don't have
  to change it.

You can copy your credentials from your Paypal account and paste them into the related fields under
the **Credentials** tab.

To retrieve the **Merchant Account ID**, log into your Paypal account and go to
:menuselection:`Account menu --> Account Settings --> Business information`.

To set the **PDT Identity Token**, switch to :ref:`developer mode <developer-mode>` and retrieve the
token by following the configuration step :ref:`paypal/enable-pdt`.

.. important::
   If you are trying Paypal as a test, using a :ref:`Paypal Sandbox account <paypal/testing>`,
   change the **State** to *Test Mode*. We recommend doing this on a test Odoo database rather than
   on your main database.

Configuration tab
-----------------

You can charge extra fees to your customers for paying with Paypal to cover the transaction fees
Paypal charges you. Once redirected to Paypal, your customer sees an extra amount applied to the
order amount.

To activate this, go to Paypal configuration's Configuration tab in Odoo and activate *Add Extra
Fees*.

You can refer to `Paypal Fees <https://www.paypal.com/webapps/mpp/paypal-fees>`_ to set up fees.

.. note::
   `Traders in the EU <https://europa.eu/youreurope/citizens/consumers/shopping/pricing-payments/
   index_en.htm>`_ are not allowed to charge extra fees for paying with credit cards.

Settings in Paypal
==================

First, set up your Paypal account to build a seamless customer experience with Odoo.

Log into your PayPal account and open the account settings. Then, go to :menuselection:`Account menu
--> Account settings --> Website payments`.

Enable Auto Return
------------------

The *Auto Return* feature automatically redirects your customers to Odoo once the payment is
processed.

From the *Website payments* settings page, go to :menuselection:`Website preferences --> Update -->
Auto return for website payments` and select **On**. Enter the address of your Odoo database (e.g.,
`https://yourcompany.odoo.com`) in the **Return URL** field.

.. note::
   Any URL will do the job. Odoo only needs the setting to be enabled since it uses another URL.

.. _paypal/enable-pdt:

Enable Payment Data Transfer (PDT)
----------------------------------

Enable the *Payment Data Transfer* feature to receive payment confirmations immediately. This
feature also displays the payment status to the customers and verifies the authenticity of the
payments.

From the *Website payments* settings page, go to :menuselection:`Website preferences --> Update -->
Payment data transfer` and select **On**. PayPal displays your **PDT Identity Token** as soon as
the change is saved.

Paypal Account Optional
-----------------------

We advise you to not prompt customers to log in with a Paypal account when they get to pay. Let them
pay with debit/credit cards as well, or you might lose some deals. Make sure this setting is turned
on.

Payment Messages Format
-----------------------

Suppose you use accented characters (or anything else than primary Latin characters) for your
customer names or addresses. In that case, you **must** configure the encoding format of the payment
request sent by Odoo to Paypal. Otherwise, some transactions fail without notice.

To do so, go to `your production account <https://www.paypal.com/cgi-bin/customerprofileweb
?cmd=_profile-language-encoding>`_. Then, click *More Options* and set the two default encoding
formats as **UTF-8**.

Your Paypal account is ready!

.. tip::
   - For Encrypted Website Payments & EWP_SETTINGS error, please check the `Paypal documentation
     <https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/
     encryptedwebpayments#encrypted-website-payments-ewp>`_.
   - Configure your :ref:`Paypal Sandbox account <paypal/testing>`, then follow this
     `link <https://sandbox.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-language-encoding>`_
     to configure the encoding format in a test environment.

.. _paypal/testing:

Test environment
================

Configuration
-------------

Thanks to Paypal Sandbox accounts, you can test the entire payment flow in Odoo.

Log into the `Paypal Developer Site <https://developer.paypal.com/>`_ using your Paypal
credentials, which creates two sandbox accounts:

-  A business account (to use as merchants, e.g.,
   `pp.merch01-facilitator@example.com <mailto:pp.merch01-facilitator@example.com>`_).
-  A default personal account (to use as shoppers, e.g.,
   `pp.merch01-buyer@example.com <mailto:pp.merch01-buyer@example.com>`_).

Log into Paypal Sandbox using the merchant account and follow the same configuration instructions.
Enter your sandbox credentials in Odoo and ensure Paypal is set on *Test Mode*. We recommend doing
this on a test Odoo database rather than your main database.

Run a test transaction from Odoo using the sandbox personal account.

.. seealso::
   - :doc:`../payment_providers`
