:show-content:

=================================================
Payment acquirers (credit cards, online payments)
=================================================

.. toctree::
   :titlesonly:

   payment_acquirers/wire_transfer
   payment_acquirers/adyen
   payment_acquirers/alipay
   payment_acquirers/authorize
   payment_acquirers/buckaroo
   payment_acquirers/mollie
   payment_acquirers/ogone
   payment_acquirers/paypal
   payment_acquirers/sips
   payment_acquirers/stripe

Odoo embeds several **payment acquirers** that allow your customers to pay on their *Customer
Portals* or your *eCommerce website*. They can pay sales orders, invoices, or subscriptions with
recurring payments with their favorite payment methods such as **Credit Cards**.

Offering several payment methods increases the chances of getting paid in time, or even immediately,
as you make it more convenient for your customers to pay with the payment method they prefer and
trust.

.. image:: payment_acquirers/online-payment.png
   :align: center
   :alt: Pay online in the customer portal and select which payment acquirer to use.

.. note::
   Odoo apps delegate the handling of sensitive information to the certified payment acquirer so
   that you don't ever have to worry about PCI compliance.

   This means that no sensitive information (such as credit card numbers) is stored on Odoo servers
   or Odoo databases hosted elsewhere. Instead, Odoo apps use a unique reference number to the data
   stored safely in the payment acquirers' systems.

.. _payment_acquirers/supported_acquirers:

Supported payment acquirers
===========================

From an accounting perspective, we can distinguish two types of payment acquirers: the payment
acquirers that are third-party services and require you to follow another accounting workflow, and
the payments that go directly on the bank account and follow the usual reconciliation workflow.

.. _payment_acquirers/online_acquirers:

Online payment acquirers
------------------------

+-------------------------------+----------------------+------------+-----------------+-----------+
|                               | Payment flow         | Save cards | Capture amount  | Refund    |
|                               |                      |            | manually        | from Odoo |
+===============================+======================+============+=================+===========+
| :doc:`Adyen                   | Payment from Odoo    | |V|        | |V|             | |V|       |
| <payment_acquirers/adyen>`    |                      |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Alipay                  | Redirection to the   |            |                 |           |
| <payment_acquirers/alipay>`   | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Authorize.Net           | Payment from Odoo    | |V|        | |V|             |           |
| <payment_acquirers/authorize>`|                      |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Buckaroo                | Redirection to the   |            |                 |           |
| <payment_acquirers/buckaroo>` | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Mollie                  | Redirection to the   |            |                 |           |
| <payment_acquirers/mollie>`   | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Ogone                   | Redirection to the   | |V|        |                 |           |
| <payment_acquirers/ogone>`    | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`PayPal                  | Redirection to the   |            |                 |           |
| <payment_acquirers/paypal>`   | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| PayU Latam                    | Redirection to the   |            |                 |           |
|                               | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| PayUMoney                     | Redirection to the   |            |                 |           |
|                               | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`SIPS                    | Redirection to the   |            |                 |           |
| <payment_acquirers/sips>`     | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+
| :doc:`Stripe                  | Redirection to the   | |V|        | |V|             |           |
| <payment_acquirers/stripe>`   | acquirer website     |            |                 |           |
+-------------------------------+----------------------+------------+-----------------+-----------+

.. |V| replace:: ✔

.. note::
   Some of these online payment providers can also be added as :doc:`bank accounts
   <../finance/accounting/bank/setup/bank_accounts>`, but this is **not** the same process as adding
   them as payment acquirers. Payment acquirers allow customers to pay online, and bank accounts are
   added and configured on your Accounting app to do a bank reconciliation, which is an accounting
   control process.

.. _payment_acquirers/bank_payments:

Bank payments
-------------

- | :doc:`Wire Transfer <payment_acquirers/wire_transfer>`
  | When selected, Odoo displays your payment information with a payment reference. You have to
    approve the payment manually once you have received it on your bank account.
- | SEPA Direct Debit
  | Your customers can sign a SEPA Direct Debit mandate online and get their bank account charged
    directly. :doc:`Click here <../finance/accounting/receivables/customer_payments/batch_sdd>` for
    more information about this payment method.

.. _payment_acquirers/configuration:

Configuration
=============

.. note::
   Each acquirer has its specific configuration flow, depending on :ref:`which feature is available
   <payment_acquirers/online_acquirers>`.

.. _payment_acquirers/add_new:

Add a new payment acquirer
--------------------------

To add a new payment acquirer and make it available to your customers, go to
:menuselection:`Accounting --> Configuration --> Payment Acquirers`, look for your payment acquirer,
install the related module, and activate it. To do so, open the payment acquirer and change its
state from *Disabled* to *Enabled*.

.. image:: payment_acquirers/activation.png
   :align: center
   :alt: Click on install, then on activate to make the payment acquirer available on Odoo.

.. warning::
   We recommend using the *Test Mode* on a duplicated database or a test database. The Test Mode is
   meant to be used with your test/sandbox credentials, but Odoo generates Sales Orders and Invoices
   as usual. It isn't always possible to cancel an invoice, and this could create some issues with
   your invoices numbering if you were to test your payment acquirers on your main database.

.. _payment_acquirers/credentials_tab:

Credentials tab
~~~~~~~~~~~~~~~

If not done yet, go to the online payment provider website, create an account, and make sure to have
the credentials required for third-party use. Odoo requires these credentials to communicate with
the payment acquirer.

The form in this section is specific to the payment acquirer you are configuring. Please refer to
the related documentation for more information.

.. _payment_acquirers/configuration_tab:

Configuration tab
~~~~~~~~~~~~~~~~~

You can change the payment acquirer's front-end appearance by modifying its name under the
**Displayed as** field and which credit card icons to display under the **Supported Payment Icons**
field.

.. _payment_acquirers/save_cards:

Save and reuse credit cards
***************************

With the **Save Cards** feature, Odoo can store **Payment Tokens** in your database, which can be
used for subsequent payments, without having to reenter the payment details. This is particularly
useful for the eCommerce conversion rate and subscriptions' recurring payments.

.. _payment_acquirers/capture_amount:

Place a hold on a card
**********************

If you wish to manually capture an amount instead of having an immediate capture, you can enable the
manual capture. Capturing payments manually has many advantages:

  - Receive the payment confirmation and wait until the order is shipped to capture the payment.
  - Review and verify that orders are legitimate before the payment is completed and the fulfillment
    process starts.
  - Avoid potentially high credit card fees in the event of overselling or cancelled orders.

The **Capture Amount Manually** field is under the **Configuration** tab. If enabled, the funds are
reserved for a few days on the customer's card, but not charged yet. Please refer to your acquirer's
documentation for the exact reservation duration.

.. image:: payment_acquirers/media/capture_manually.png
   :align: center
   :alt: Configuration tab on Odoo

To capture the payment, you must then go to the related sales order or invoice and manually
*capture* the funds before its automatic cancellation, or *void the transaction* to unlock the funds
from the customer's card.

.. image:: payment_acquirers/media/capture.png
   :align: center
   :alt: Hold the credit card payment until you capture or revoke it on Odoo

.. note::
   Odoo may not yet support the manual capture for all acquirers, but some acquirers allow managing
   the capture from their interfaces.

.. _payment_acquirers/countries:

Countries
*********

Restrict the use of the payment acquirer to a selection of countries. Leave this field blank to make
the payment acquirer available to all countries.

.. _payment_acquirers/journal:

Payment journal
***************

The **Payment journal** selected for your payment acquirer must be a *Bank* journal.

.. _payment_acquirers/accounting:

Accounting perspective
======================

The **Bank Payments** that go directly to one of your bank accounts follow their usual
reconciliation workflows. However, payments recorded with **Online Payment Providers** require you
to consider how you want to record your payments' journal entries. We recommend you to ask your
accountant for advice.

You need to select a *Payment Journal* on your acquirer configuration to record the payments,
on a **Outstanding Account**. The Journal's **type** must be *Bank Journal*.

You can use a single journal for many payment methods. And for each payment method, you can either:

- Define an **Accounting Account** to separate these payments from another payment method.
- Leave blank to fallback on the default account, which you can see or change in the settings.

.. image:: payment_acquirers/media/bank_journal.png
   :align: center
   :alt: A bank journal in the "Incoming Payments Tab".

You can have the same bank account for the whole company, or for some journals only, or a single
payment method... What best suit your needs.

.. seealso::
   - :doc:`payment_acquirers/wire_transfer`
   - :doc:`payment_acquirers/adyen`
   - :doc:`payment_acquirers/alipay`
   - :doc:`payment_acquirers/authorize`
   - :doc:`payment_acquirers/buckaroo`
   - :doc:`payment_acquirers/mollie`
   - :doc:`payment_acquirers/ogone`
   - :doc:`payment_acquirers/paypal`
   - :doc:`payment_acquirers/sips`
   - :doc:`payment_acquirers/stripe`
   - :doc:`../websites/ecommerce/shopper_experience/payment_acquirer`
