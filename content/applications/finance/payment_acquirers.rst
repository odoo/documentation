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

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: auto

   * -
     - Payment flow from
     - :ref:`Save cards for later <payment_acquirers/features/tokenization>`
     - :ref:`Manual capture <payment_acquirers/features/manual_capture>`
     - :ref:`Refunds <payment_acquirers/features/refund>`
   * - :doc:`Adyen <payment_acquirers/adyen>`
     - Odoo
     - |V|
     -
     - Full and partial
   * - :doc:`Alipay <payment_acquirers/alipay>`
     - The acquirer website
     -
     -
     -
   * - :doc:`Authorize.Net <payment_acquirers/authorize>`
     - Odoo
     - |V|
     - Full only
     -
   * - :doc:`Buckaroo <payment_acquirers/buckaroo>`
     - The acquirer website
     -
     -
     -
   * - :doc:`Mollie <payment_acquirers/mollie>`
     - The acquirer website
     -
     -
     -
   * - :doc:`Ogone <payment_acquirers/ogone>`
     - The acquirer website
     - |V|
     -
     -
   * - :doc:`PayPal <payment_acquirers/paypal>`
     - The acquirer website
     -
     -
     -
   * - PayU Latam
     - The acquirer website
     -
     -
     -
   * - PayUMoney
     - The acquirer website
     -
     -
     -
   * - :doc:`SIPS <payment_acquirers/sips>`
     - The acquirer website
     -
     -
     -
   * - :doc:`Stripe <payment_acquirers/stripe>`
     - The acquirer website
     - |V|
     -
     -

.. |V| replace:: ✔

.. note::
   Some of these online payment providers can also be added as :doc:`bank accounts
   <../finance/accounting/bank>`, but this is **not** the same process as adding
   them as payment acquirers. Payment acquirers allow customers to pay online, and bank accounts are
   added and configured on your Accounting app to do a bank reconciliation, which is an accounting
   control process.

.. _payment_acquirers/bank_payments:

Bank payments
-------------

- | :doc:`Wire Transfer <payment_acquirers/wire_transfer>`
  | When selected, Odoo displays your payment information with a payment reference. You have to
    approve the payment manually once you have received it on your bank account.
- | :doc:`SEPA Direct Debit <../finance/accounting/payments/batch_sdd>`
  | Your customers can sign a SEPA Direct Debit mandate online and get their bank account charged
    directly.

.. _payment_acquirers/features:

Additional features
===================

Some payment acquirers support additional features for the payment flow. Refer to the :ref:`table
above <payment_acquirers/online_acquirers>` to check if your payment acquirer supports these
features.

.. _payment_acquirers/features/tokenization:

Save cards for later
--------------------

If your payment acquirer supports this feature, customers can choose to save their card details as a
**payment token** in Odoo. When they do, they will not have to enter their card details again when
making a subsequent payment. This is particularly useful for the eCommerce conversion rate and for
subscriptions that use recurring payments.

Enable this feature by navigating to the :guilabel:`Configuration` tab from your payment acquirer
and by ticking the :guilabel:`Allow Saving Payment Methods` checkbox.

.. note::
   You remain fully PCI-compliant when you enable this feature because Odoo does not store the card
   details directly. Instead, it creates a payment token that only holds a reference to the card
   details stored on the payment acquirer's server.

.. _payment_acquirers/features/manual_capture:

Manual capture
--------------

If your payment acquirer supports this feature, you can authorize and capture payments in two steps
instead of one. When you authorize a payment, the funds are reserved on the customer's payment
method but they are not immediately charged. The charge is only made when you manually capture the
payment later on. You can also void the authorization to release the reserved funds; this is
equivalent to a regular cancellation. Capturing payments manually can prove itself useful in many
situations:

  - Receive the payment confirmation and wait until the order is shipped to capture the payment.
  - Review and verify that orders are legitimate before the payment is completed and the fulfillment
    process starts.
  - Avoid potentially high processing fees for cancelled payments: payment acquirers will not charge
    you for voiding an authorization.
  - Hold a security deposit to return later, minus any deductions (e.g., after a damage).

Enable this feature by navigating to the :guilabel:`Configuration` tab from your payment acquirer
and by ticking the :guilabel:`Capture Amount Manually` checkbox.

To capture the payment after it was authorized, go to the related sales order or invoice and click
on the :guilabel:`CAPTURE TRANSACTION` button. To release the funds, click on the :guilabel:`VOID
TRANSACTION` button.

.. note::
   - Some payment acquirers support capturing only part of the authorized amount. The remaining
     amount can then be either captured or voided. These acquirers have the value **Full and
     partial** in the :ref:`table above <payment_acquirers/online_acquirers>`. The acquirers that
     only support capturing or voiding the full amount have the value **Full only**.
   - The funds are likely not reserved forever. After a certain time, they may be automatically
     released back to the customer's payment method. Refer to your payment acquirer's documentation
     for the exact reservation duration.
   - Odoo does not support this feature for all payment acquirers but some allow the manual capture
     from their website interface.

.. _payment_acquirers/features/refund:

Refunds
-------

If your payment acquirer supports this feature, you can refund payments directly from Odoo. It does
not need to be enabled first. To refund a customer payment, navigate to it and click on the
:guilabel:`REFUND` button.

.. note::
   - Some payment acquirers support refunding only part of the amount. The remaining amount can then
     optionally be refunded too. These acquirers have the value **Full and partial** in the
     :ref:`table above <payment_acquirers/online_acquirers>`. The acquirers that only support
     refunding the full amount have the value **Full only**.
   - Odoo does not support this feature for all payment acquirers but some allow to refund payments
     from their website interface.

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

.. image:: payment_acquirers/bank_journal.png
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
