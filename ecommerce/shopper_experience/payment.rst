=============================
How to set up payment methods
=============================

To collect payments, you can either request your customers to process it
manually (e.g. wire transfer) or redirect them to payment acquirers. The payment
process described hereunder is common to both eCommerce and online quotations.

Payment methods
===============

Wire transfer
-------------

Wire Transfer is the default payment method available. The aim is providing your
customers with your bank details so that they can pay via their bank. This is very
easy to start with but slow and inefficient process-wise. Opt for online acquirers
as soon as you can!

.. tip::
    For B2B users: you can create new manually-processed payment methods (check,
    purchase order, etc.) by renaming 'Wire Transfer' or duplicating it.

Online payment acquirers
------------------------

Redirect your customers to payment acquirer platforms to collect money effortless.
Odoo supports more and more platforms over time: Paypal, Ingenico, Authorize.net,
etc. Once the payment accepted, orders are confirmed in Odoo so that the delivery
& invoicing processes are triggered automatically.

Custom (advanced)
-----------------

Can be used to request payments to any payment acquirer not listed in Odoo. 

Edit a payment method
=======================

To make payment methods intuitive for your customers feel free to customize them by editing:

* the name,

* the picture,

* the notification messages (thank you & next step, error, cancellation).

Go to :menuselection:`Website Admin --> Configuration --> Payment Acquirers` to do so.

Generic setup
=============

1. Review the elements here above.

2. Enter your credentials (online acquirers only).

3. Choose your order confirmation preference (see below).

4. Publish the payment method.

5. Test the payment flow in *Test* mode (default mode).

6. Switch to *Production* mode.

7. Se your default payment acquirer in :menuselection:`Accounting --> Configuration --> Settings`.
   It will be auto-selected for your customers when they enter the payment screen.

.. note::
    Rely on the documentation related to your payment acquirer to go through step 2, 5 and 6. Some
    acquirers provides you with specific credentials for test and production modes (Paypal). Others
    let you switch mode in their setup interface (Authorize.net).

.. tip::
    With Ingenico and Authorize.net, you can let your customers save and reuse a payment card to
    accelerate the process on next checkouts. See *Store Card Data* in Configuration tab.

Payment flow
============

1. When choosing the payment method, the customer is taken to the payment acquirer interface to
   process the payment.

2. Once done he is taken back to Odoo's confirmation page. The transaction status shows up:

* *Pending*: the order will be confirmed as soon as you authorize the transaction in the acquirer interface.

* *Confirmed*: the payment has been authorized automatically.

3. A confirmation email is sent to the customer with a copy of the order in pdf. It shows the payment status.

4. Launch the delivery and invoicing from:

* eCommerce: :menuselection:`Website Admin --> Orders --> (Unpaid) Orders`,

* online quotations: :menuselection:`Sales --> Sales --> Quotations/Sales Orders`.

For internal tracking purposes, a link to the transaction status is provided in the sales order.

.. note::
    If the customer cancels the payment while on the payment acquirer form, it is taken back to
    the store page (or online quotation) in order to reprocess the order. The payment is
    marked as *Cancelled* in Odoo.

.. tip::
    You can edit the confirmation email template from
    :menuselection:`Website Admin --> Configuration --> Settings`.

Order confirmation preferences
==============================

There are 4 different behaviors available for any payment acquirer.

No automatic confirmation
-------------------------

This is the default mode for *Wire Transfer*. It means Odoo does not confirm orders but keep
them in an intermediary stage (*Quotation Sent* = *Unpaid Order*). Once you get the payment,
you are expected to confirm the order manually to pursue the process (delivery, invoicing).

Authorize the amount and confirm the SO on acquirer confirmation (capture manually)
-----------------------------------------------------------------------------------

Odoo confirms the order as soon as the payment success notification comes in. To get the
money however, you need to capture it from your payment transaction. In lots of countries
you are indeed requested to deliver your goods before capturing the amount.

Authorize & capture the amount and confirm the SO on acquirer confirmation
--------------------------------------------------------------------------

This is the default mode for payment acquirers. The amount is captured automatically.

.. tip::
    For B2B: if you use a manual payment method like *Wire Transfer* and don't expect any
    upfront payment to launch the delivery, switch to this mode as well.

Authorize & capture the amount, confirm the SO and auto-validate the invoice on acquirer confirmation
-----------------------------------------------------------------------------------------------------

If you invoice upfront and not at the delivery, switch to this last mode to automate everything.
You are requested to select a Payment Journal to record such payments
(see :doc:`../../accounting/receivables/customer_payments/credit_cards`).

Custom payment acquirers (advanced)
===================================

Odoo can submit payment requests and redirect to any payment acquirer. In such a case, you need
to confirm the sale manually in Odoo once you get paid because Odoo cannot read any payment
status sent by the acquirer.

To configure this:

* switch to developer mode,

* edit the *Custom* payment method,

* set up the payment form (S2S Form Template) as instructed by your payment acquirer. You can
  start from *default_acquirer_button* that you can duplicate. 

Recurring payments & Installment plans
======================================

The Ingenico integration allows you to process and manage recurring payments from Odoo
Subscriptions app out-of-the-box (more information coming soon).

With some customization, Odoo can also trigger installment plans if this is permitted by
your payment acquirer’s API:

e.g. Paypal Installment Plans (see https://developer.paypal.com/docs/classic/paypal-payments-standard/integration-guide/installment_buttons).

Such a service is made on-demand by our technical experts based on your own requirements.
Ask our business advisors at info@odoo.com.

.. seealso::

  * :doc:`paypal`
