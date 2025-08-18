===================
Bank reconciliation
===================

**Bank reconciliation** is the process of validating :doc:`bank transactions <transactions>`. Many
of these transactions are matched with counterpart items related to business records such as
:doc:`customer invoices <../customer_invoices>`, :doc:`vendor bills <../vendor_bills>`, and
:doc:`payments <../payments>`, while others that may not have a matching counterpart item (such as
bank fees) can be written off :ref:`manually <accounting/reconciliation/set-account>` or with
:ref:`reconciliation models <accounting/reconciliation/model>`. Not only is bank reconciliation
compulsory for most businesses, but it also offers several benefits, such as reduced risk of errors
in financial reports, detection of fraudulent activities, and improved cash flow management.

Thanks to the :ref:`default matching rules <accounting/reconciliation/reconcile>` and customizable
bank :doc:`reconciliation models <reconciliation_models>`, Odoo selects the matching items
automatically when possible.

.. seealso::
   - `Odoo Tutorials: Bank reconciliation
     <https://www.odoo.com/slides/slide/bank-reconciliation-6562>`_
   - :doc:`bank_synchronization`
   - :doc:`transactions`

.. _accounting/reconciliation/access:

Bank reconciliation view
========================

To access a journal's :guilabel:`Bank Matching` view, go to the :guilabel:`Accounting Dashboard` and
either:

- click the journal name (e.g., :guilabel:`Bank`) or its :guilabel:`Transactions` button to display
  all transactions, including those previously reconciled, or
- click the :guilabel:`x to reconcile` button to display only unreconciled transactions. To include
  previously reconciled transactions, remove the :guilabel:`Not Matched` filter from the search bar.

.. image:: reconciliation/bank-card.png
   :alt: Reaching the bank reconciliation tool from the accounting dashboard

The :guilabel:`Bank Matching` view is composed of lines for each transaction of the journal with the
newest displayed first. Each transaction has a date, a label, a partner (if set), :ref:`action
buttons <accounting/reconciliation/action-buttons>`, and the transaction amount. Each line can be
expanded to show additional information and buttons.

.. image:: reconciliation/user-interface.png
   :alt: The user interface of the bank matching view of a bank journal.

.. note::
   Once a :doc:`transaction <transactions>` is reconciled, the suggested action button(s) is
   replaced with the counterpart entry/entries it was matched with or the account(s) it was written
   off to.

.. _accounting/reconciliation/transactions:

Transactions
------------

Every :doc:`transaction <transactions>` is linked to a journal entry that debits/credits the
journal's main account and its suspense account until it is fully reconciled. At that point, the
suspense account is replaced with the account of the counterpart item or, in the case of
:ref:`manual matching <accounting/reconciliation/set-account>`, the selected account.

.. seealso::
   - :ref:`Duplicate transactions <accounting/bank-synchronization/duplicate-transactions>`
   - :ref:`Missing transactions <accounting/bank-synchronization/missing-transactions>`

.. _accounting/reconciliation/action-buttons:

Possible action buttons
~~~~~~~~~~~~~~~~~~~~~~~

Up to two suggested action buttons are available as primary buttons, but all available action
buttons are displayed when the transaction is expanded. The following action buttons are available
depending on the details of the transaction:

- :guilabel:`Set Partner`: Open a search view to add a partner to the transaction.
- :guilabel:`Set Account`: Open a search view to manually select an account to write off the full
  amount of the transaction with this account. If necessary, :ref:`edit the line
  <accounting/reconciliation/edit>` to change the amount.
- :guilabel:`Receivable`: Write off the transaction to the receivable account of the partner.
- :guilabel:`Sales`: Open a list view of sales orders belonging to the transaction's
  :guilabel:`Partner` (or proceed directly to the form view if only one relevant sales order
  exists). Select the relevant sales order(s) and click :guilabel:`Create Invoices`, then return to
  the :guilabel:`Bank Matching` view and match the invoice(s) using the :guilabel:`Reconcile` action
  button.
- :guilabel:`Payable`: Write off the transaction to the payable account of the partner.
- :guilabel:`Reconcile`: Open a search view of existing items from records such as customer
  invoices, vendor bills, and payments. Select one or multiple items to add counterpart items with
  the corresponding accounts of those items.
- :guilabel:`Batches`: Open a short list of :doc:`batch payments <../payments/batch>`. To view all
  batch payments, click :guilabel:`Search More ...`. Select a batch payment to add a counterpart
  item for each payment of the batch with the corresponding account of each payment.
- :doc:`reconciliation_models`: Each manual reconciliation model that could apply to the transaction
  is displayed. Click the reconciliation model's action button to generate the counterpart items
  defined on the reconciliation model.

.. note::
   To remove the partner from a transaction, click the :icon:`fa-times` :guilabel:`(close)` icon
   next to the partner's name.

Click the :icon:`fa-chevron-down` :guilabel:`(chevron down)` button next to the possible action
buttons of an expanded line to display any of the above action buttons that are hidden due to space
limitations, as well as the following:

- :guilabel:`Upload bills`: Upload one or more bills to be :doc:`digitized
  <../vendor_bills/invoice_digitization>`. After digitization, the bills are available for matching
  via the :guilabel:`Reconcile` action button.
- :guilabel:`Manage Models`: Open the list view of :doc:`reconciliation_models`.
- :guilabel:`Open Journal Entry`: Open the journal entry of this transaction.
- :guilabel:`Delete Transaction`: Delete this transaction.

.. note::
   Uploading bills from the :guilabel:`Bank Matching` view does not automatically reconcile them
   with the active transaction.

.. seealso::
   :doc:`../../../essentials/in_app_purchase`

.. _accounting/reconciliation/reconcile:

Reconcile transactions
======================

When possible, Odoo automatically reconciles transactions based on their fields.

If no partner is set on the transaction, the transaction's :guilabel:`Label` is compared with the
:guilabel:`Number`, :guilabel:`Customer Reference`, :guilabel:`Bill Reference`, and
:guilabel:`Payment Reference` of existing invoices, bills, and payments.

If a partner is set on the transaction, the transaction is instead matched with invoices, bills, and
payments of the partner based on the :guilabel:`Amount`. The following rules are used in a
sequential order to identify and apply a match:

- Exact match
- Discounted match: for payment terms with discounts for early payments
- Tolerance match: within 3% to account for merchant fees, rounding differences, and user errors
- Currency match: when the transaction is in a different currency than the invoice, bill, or
  payment (with a 3% tolerance for exchange rate differences)
- Amount in label: if the invoice :guilabel:`Amount` is found in the transaction's
  :guilabel:`Label`

In addition to using these fixed matching rules, transactions can be matched automatically with the
use of :doc:`reconciliation models <reconciliation_models>`. Otherwise, reconcile transactions
manually by following these steps:

#. Expand the desired line among unmatched bank transactions to display all available action
   buttons.
#. Define the counterpart. There are several options for defining a counterpart, including
   :ref:`matching existing items <accounting/reconciliation/existing-items>`, :ref:`manually setting
   the account <accounting/reconciliation/set-account>`, matching with :doc:`batch payments
   <../payments/batch>`, and using :ref:`reconciliation model buttons
   <accounting/reconciliation/model>`.
#. If the resulting entry is not fully balanced, add another existing counterpart item or write it
   off by :ref:`setting the account <accounting/reconciliation/set-account>` of the remaining
   amount.

.. _accounting/reconciliation/existing-items:

Existing items
--------------

To reconcile transactions with existing items related to records such as customer invoices, vendor
bills, and payments, click the :guilabel:`Reconcile` action button, select the matching journal
item(s) in the list, and click :guilabel:`Select`.

.. note::
   If the :guilabel:`Partner` is set, this list is automatically filtered to only include items
   related to that partner.

.. tip::
   Use the search bar within the :guilabel:`Search: Journal Items to Match` window to search for
   specific journal items.

If a transaction amount is lower than the invoice or bill it is reconciled with, the transaction is
fully reconciled, but the difference remains open on the counterpart item. The remaining amount can
be left open to be reconciled later or the invoice or bill can be marked as fully paid. To mark the
invoice or bill as fully paid, :ref:`edit <accounting/reconciliation/edit>` the line, click
:guilabel:`fully paid`, and :guilabel:`Save`. To reverse this, :ref:`edit
<accounting/reconciliation/edit>` the line again, click :guilabel:`partial payment`, and
:guilabel:`Save`.

If a transaction amount is greater than the invoice or bill it is reconciled with, the transaction
is only partially reconciled. The remaining balance can be reconciled as any other transaction
amount.

.. note::
   Existing items of draft entries can be matched. Eventual automatic moves (like currency exchange
   or cash basis moves) are created in draft simultaneously with the reconciliation. Posting the
   original entry also posts the automatic move.

.. _accounting/reconciliation/set-account:

Set account
-----------

If no existing item matches the selected transaction, you can still write off the transaction
manually: Click :guilabel:`Set Account`, then choose the appropriate account. To write off only part
of the transaction, :ref:`edit the line <accounting/reconciliation/edit>` to reflect the correct
value and reconcile the remaining amount as desired.

.. tip::
   If the partner is set, write the amount off to their receivable or payable account directly by
   clicking the :guilabel:`Receivable` or :guilabel:`Payable` :ref:`action button
   <accounting/reconciliation/action-buttons>`.

.. _accounting/reconciliation/model:

Reconciliation models
---------------------

Use :doc:`reconciliation models <reconciliation_models>` to create custom rules that can be applied
automatically or manually via custom buttons for operations that are frequently repeated. These
custom buttons allow you to quickly reconcile bank transactions manually and can also be combined
with other reconciliation models and with counterpart items when reconciling transactions.

.. example::
   An outgoing bank transaction for $103 is partially matched with a vendor bill for $100, leaving
   $3 of the transaction still unreconciled. Use the :guilabel:`Bank Fees` reconciliation model to
   create a new counterpart item for $3 and reconcile it with the remaining $3 of the bank
   transaction.

.. _accounting/reconciliation/edit:

Edit lines and unreconcile transactions
=======================================

To edit a counterpart item, expand the line, click the :icon:`fa-pencil` :guilabel:`(pencil)` icon,
and edit the necessary fields in :guilabel:`Edit Line` window.

.. note::
   When the counterpart item is an existing journal item, some fields are read-only.

If a transaction is partially matched with a counterpart item, use the link to mark the invoice as
:guilabel:`fully paid` or to switch back to a :guilabel:`partial payment`.

To unreconcile a transaction, delete all counterpart items associated with the transaction by
clicking on the :icon:`fa-trash` :guilabel:`(trash)` icon.

.. _accounting/reconciliation/netting:

Netting
=======

Netting (also known as AP/AR offsetting) is the process of balancing incoming debts from and
outgoing debts to the same partner. Reconciling the incoming and outgoing debts creates a new
journal entry that balances the debts. Two main scenarios exist:

- :ref:`A bank transaction balances <accounting/reconciliation/net-transaction>` (either fully or
  partially) the incoming and outgoing debts.
- :ref:`No bank transaction balances <accounting/reconciliation/net-no-transaction>` the incoming
  and outgoing debts. This situation can occur either when the debts balance each other completely
  or when the debts remain unbalanced.

.. _accounting/reconciliation/net-transaction:

Netting with bank transactions
------------------------------

When a bank transaction balances (either fully or partially) the incoming and outgoing debts,
reconcile the bank transaction from the :guilabel:`Bank Matching` view like any other :ref:`existing
items <accounting/reconciliation/existing-items>`:

#. Click :guilabel:`Reconcile` on the transaction.
#. Select all the relevant counterpart items on both the payable and receivable side.
#. Click :guilabel:`Select`.
#. If a balance remains, depending on the details, the following situations are possible:

   - An invoice, bill, or other item is not fully reconciled, and the remaining balance can be
     :ref:`reconciled <accounting/reconciliation/reconcile>` with other bank transactions.
   - The bank transaction itself is not fully reconciled, and the remaining balance can be
     :ref:`reconciled <accounting/reconciliation/reconcile>` as in any other situation.

.. _accounting/reconciliation/net-no-transaction:

Netting without bank transactions
---------------------------------

When no bank transaction balances the incoming and outgoing debts, there is nothing to reconcile
from the :guilabel:`Bank Matching` view. However, the debt amount is visible in both the account
receivable and the account payable. To balance these debts so that they no longer appear on the
partner ledger, follow these steps:

#. Go to :menuselection:`Accounting --> Accounting --> Reconcile`.
#. Select the journal items that debit or credit the account receivable and account payable and
   represent the debts to be netted.
#. Click :guilabel:`Reconcile`.
#. If the debts don't balance each other perfectly, a :guilabel:`Write-Off Entry` popup window
   appears, allowing you to decide how to resolve the remaining balance:

   - Select :guilabel:`Allow partials` to only partially reconcile the account receivable and
     account payable and leave the remaining balance open.
   - Use a :doc:`reconciliation model button <reconciliation_models>` to write off the balance.
   - Manually choose an :guilabel:`Account`, and optionally adjust the :guilabel:`Tax`,
     :guilabel:`Journal`, :guilabel:`Label`, :guilabel:`Date`, and :guilabel:`To Check` fields.

The items are then matched, and their balance is removed from the partner ledger, representing that
no payment is due for these debts.

.. note::
   The workflow is the same whether there are only two equal debts in the receivable and payable
   accounts or multiple debts in each account.
