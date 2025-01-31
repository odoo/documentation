:show-content:

========
Payments
========

In Odoo, payments can either be automatically linked to an invoice or bill or be stand-alone records
for use at a later date:

- If a payment is **linked to an invoice or bill**, it reduces/settles the amount due on the
  invoice. Multiple payments on the same invoice are possible.

- If a payment is **not linked to an invoice or bill**, the customer has an outstanding credit with
  the company, or the company has an outstanding debit with a vendor. Those outstanding amounts
  reduce/settle unpaid invoices/bills.

.. seealso::
   - :doc:`Internal transfers <payments/internal_transfers>`
   - :doc:`bank/reconciliation`
   - `Odoo Tutorials: Bank Configuration
     <https://www.odoo.com/slides/slide/bank-configuration-6832>`_

.. _accounting/payments/from-invoice-bill:

Registering payment from an invoice or bill
===========================================

Clicking :guilabel:`Register payment` in a customer invoice or vendor bill generates a new journal
entry and sets the amount due according to the payment amount. The counterpart is reflected in an
:ref:`outstanding <bank/outstanding-accounts>` **receipts** or **payments** account. At this point,
the customer invoice or vendor bill is marked as :guilabel:`In payment` or :ref:`Partially paid
<accounting/payments/partial-payment>`. Then, when the outstanding account is reconciled with a bank
transaction, the invoice or vendor bill changes to the :guilabel:`Paid` status.

To open the :guilabel:`Journal Entry Info` window and display more information about the payment,
click the :icon:`fa-info-circle` :guilabel:`(information)` icon in the footer of the
:guilabel:`Invoice Lines` tab. To access additional information, such as the related journal entry,
click :guilabel:`View`.

.. image:: payments/information-icon.png
   :alt: See detailed information of a payment.

.. note::
   - The customer invoice or vendor bill must be in the :guilabel:`Posted` status to register the
     payment.
   - If a payment is unreconciled, it still appears in the books but is no longer linked to the
     invoice.
   - If a payment is (un)reconciled in a different currency, a journal entry is automatically
     created to post the currency exchange gains/losses (reversal) amount.
   - If a payment is (un)reconciled on an invoice with cash-basis taxes, a journal entry is
     automatically created to post the cash-basis tax (reversal) amount.

.. tip::
   If the main bank account is set as the :ref:`outstanding account <bank/outstanding-accounts>` on
   the bank journal's payment method, registering the full payment on an invoice or bill moves the
   invoice/bill directly to the :guilabel:`Paid` status without requiring bank reconciliation.

.. _accounting/payments/not-tied:

Registering payments not tied to an invoice or bill
===================================================

When a new payment is registered via :menuselection:`Customers / Vendors --> Payments`, it is not
directly linked to an invoice or bill. Instead, the account receivable or the account payable is
matched with the **outstanding account** until it is manually matched with its related invoice or
bill. Then, :doc:`reconciling <bank/reconciliation>` the payment with the bank transaction completes
the payment workflow.

.. _accounting/payments/payments-matching:

Payments matching
-----------------

.. note::
   During the :doc:`bank reconciliation <bank/reconciliation>` process, a remaining balance is
   identified if the total debits and credits do not match when records are compared with bank
   transactions. This balance must either be reconciled later or written off immediately.

.. _accounting/payments/matching-invoices-bills:

For a single invoice or bill
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A blue banner appears when validating a new invoice/bill and an **outstanding payment** exists for
this specific customer or vendor. To match it with the invoice or bill, click :guilabel:`Add`
under :guilabel:`Outstanding Credits` or :guilabel:`Outstanding Debits`.

.. image:: payments/add-option.png
   :alt: Shows the Add option to reconcile an invoice or a bill with a payment.

The invoice or bill is then marked as :guilabel:`In payment` until the payment is :doc:`reconciled
<bank/reconciliation>` with its corresponding :doc:`bank transaction(s) <bank/transactions>`.

.. _accounting/payments/auto-reconcile-tool:

Matching payments
~~~~~~~~~~~~~~~~~

The :guilabel:`Payments matching` or :guilabel:`Auto-reconcile` tool allows reconciling journal
items with each other (i.e., payments with customer invoices or vendor bills) either individually or
in batches. Access the :guilabel:`Accounting Dashboard`, click the :icon:`fa-ellipsis-v`
(:guilabel:`dropdown menu`) button from the :guilabel:`Customer Invoices` or :guilabel:`Vendor
Bills` journals, and select :guilabel:`Payments Matching`. Alternatively, go to
:menuselection:`Accounting --> Accounting --> Reconcile`.

To manually :guilabel:`Reconcile` journal items, select the individual items from the list view and
click :guilabel:`Reconcile`.

Auto-Reconcile Feature
**********************

To use the :guilabel:`Auto-Reconcile` feature, follow these steps:

#. In the :guilabel:`Journal Items to reconcile` list view, click :guilabel:`Auto-Reconcile` next to
   the receivable or payable account (or a specific contact's journal item in that account).
#. In the :guilabel:`Find Entries to Reconcile Automatically` window, set the :guilabel:`Reconcile`
   field depending on how you want to match journal items:

   - :guilabel:`Opposite balances one by one`: Each debit journal item will be matched with the
     corresponding credit journal item of the same value.
   - :guilabel:`Accounts with zero balances`: All reconciled journal items will have the same
     matching number.

#. Click :guilabel:`Launch`.

Invoices and bills are automatically matched to their corresponding payments and marked as
:guilabel:`In payment` until they are :doc:`reconciled <bank/reconciliation>` with their
corresponding :doc:`bank transactions <bank/transactions>`.

.. _accounting/payments/group-payments:

Registering payments on multiple invoices or bills (group payments)
===================================================================

To register payments on multiple invoices/bills, follow these steps:

#. Go to :menuselection:`Accounting --> Customers --> Invoices/Credit Notes` or
   :menuselection:`Accounting --> Vendors --> Bills/Refunds`.
#. In the list view, select the relevant invoices/credit notes or bills/refunds.
#. Click :icon:`fa-cog` :guilabel:`Actions` and select :guilabel:`Register Payment`.
#. In the :guilabel:`Register Payment` window, select the :guilabel:`Journal`, the
   :guilabel:`Payment Method`, and the :guilabel:`Payment Date`.
#. To combine all payments from the same contact into a single payment, enable the :guilabel:`Group
   Payments` option, or leave it unchecked to create separate payments.
#. Click :guilabel:`Create payment`.

The invoices or bills are then marked as :guilabel:`In payment` until the bank transactions are
:doc:`reconciled <bank/reconciliation>` with the payments.

.. _accounting/payments/batch-payments:

Registering a single payment for multiple customers or vendors (batch payments)
===============================================================================

Batch payments allow grouping payments from multiple customers to ease :doc:`reconciliation
<bank/reconciliation>`. They are also useful when depositing :doc:`checks <payments/checks>` or
cash payments to the bank or for generating bank payment files such as :doc:`SEPA
<payments/pay_sepa>` or :ref:`NACHA <l10n_us/nacha>`.

.. seealso::
   :doc:`payments/batch`

.. _accounting/payments/partial-payment:

Registering a partial payment
=============================

To register a partial payment, click on :guilabel:`Register Payment` from the related invoice or
bill. In the case of a partial payment (when the :guilabel:`Amount` paid is less than the total
remaining amount on the invoice or the bill), the :guilabel:`Payment Difference` field displays the
outstanding balance. There are two options:

- :guilabel:`Keep open`: Keep the invoice or the bill open and mark it with a :guilabel:`Partial`
  banner;
- :guilabel:`Mark as fully paid`: Select an account in the :guilabel:`Post Difference In` field and
  change the :guilabel:`Label` if needed. A journal entry will be created to balance the accounts
  payable or receivable with the selected account.

.. image:: payments/partial-payment.png
   :alt: register a partial payment

.. _accounting/payments/reconciling-payments:

Reconciling payments with bank transactions
===========================================

Once a payment has been registered, the status of the invoice or bill is :guilabel:`In payment`. The
next step is :doc:`reconciling <bank/reconciliation>` the payment with the related :doc:`bank
transaction <bank/transactions>` line to finalize the payment workflow and mark the invoice or bill
as :guilabel:`Paid`.

.. toctree::
   :titlesonly:

   payments/online
   payments/checks
   payments/batch
   payments/batch_sdd
   payments/follow_up
   payments/internal_transfers
   payments/pay_sepa
   payments/pay_checks
   payments/forecast
   payments/trusted_accounts
