============
Transactions
============

Importing transactions from your bank statements allows keeping track of bank account transactions
and reconciling them with the ones recorded in your accounting.

:doc:`Bank synchronization <bank_synchronization>` automates the process. However, if you do not
want to use it or if your bank is not yet supported, other options exist:

- :ref:`Import bank transactions <accounting/transactions/import>` delivered by your bank;
- :ref:`Register bank transactions <accounting/transactions/register>` manually.

.. note::
   :ref:`Grouping transactions by statement <accounting/transactions/statements>` is optional.

.. _accounting/transactions/view:

Transaction view
================

The list of transactions for the bank journal is displayed in the :guilabel:`Bank Matching` view. To
access it, go to the :guilabel:`Accounting Dashboard`, then either:

- click the journal name (e.g., :guilabel:`Bank`) or its :guilabel:`Transactions` button to display
  all transactions, including those previously reconciled, or
- click the :guilabel:`x to reconcile` button to display only unreconciled transactions. To include
  previously reconciled transactions, remove the :guilabel:`Not Matched` filter from the search bar.

Unreconciled transactions display the following information while collapsed:

- The date of the transaction
- A button linked to the chatter. The icon of this button can vary:

  - The :icon:`fa-comments-o` :guilabel:`(comments)` icon displays only on hover and indicates that
    there are no attachments or activities for the transaction.
  - The :icon:`fa-paperclip` :guilabel:`(attachments)` icon indicates that there is an attachment on
    the journal entry.
  - The :icon:`fa-clock-o` :guilabel:`(activities)` icon indicates that there is an activity
    scheduled on the journal entry.

- The label of the transaction
- The partner of the transaction (if one is set)
- Up to two :ref:`action buttons <accounting/reconciliation/action-buttons>`, depending on the
  details of the transaction
- The balance of the transaction

.. note::
   - When the chatter of a transaction is open, a blue tag highlights the related transaction.
   - The chatter can be opened and closed by clicking the :icon:`fa-comments-o`
     :guilabel:`(comments)` icon and the :icon:`fa-times` :guilabel:`(close)` icon in the top right
     of the view.
   - Once a transaction is :doc:`reconciled <reconciliation>`, its action buttons are replaced with
     the labels of the item(s) it was reconciled with or the account if it was reconciled with the
     :guilabel:`Set Account` action button.

.. _accounting/transactions/duplicate:

Duplicate transactions
======================

Duplicate transactions occur when either by human error or :doc:`bank sync <bank_synchronization>`
error, the same transaction is created multiple times. The duplicate transaction view identifies
potential duplicate transactions so they can be selected and deleted. To access the duplicate
transaction view, first access the :guilabel:`Bank Matching` view by going to the
:guilabel:`Accounting Dashboard` and clicking the bank journal's name, then open the :icon:`fa-cog`
:guilabel:`Actions` menu and click :guilabel:`Find Duplicate Transactions`.

Potential duplicate transactions are identified based on their amount, date, and account number, or
(if the transaction is created via :doc:`bank sync <bank_synchronization>`) the transaction ID.

Select a :guilabel:`Starting Date` to view the corresponding potential duplicate transactions, then
select the transactions to delete and click :icon:`fa-trash` :guilabel:`Delete Selected`.

.. note::
   Any transactions created by :doc:`bank sync <bank_synchronization>` that the bank sync provider
   determines to be potential duplicates are displayed in the :guilabel:`Provider Duplicates` tab.
   This tab is only visible if there are any potential duplicates according to the provider.

.. _accounting/transactions/import:

Import transactions
===================

Odoo supports multiple file formats to import transactions:

- SEPA recommended Cash Management format (CAMT.053)
- Comma-separated values (CSV)
- Excel (XLSX)
- Open Financial Exchange (OFX)
- Quicken Interchange Format (QIF)
- Belgium: Coded Statement of Account (CODA)

To import a file, go to the :guilabel:`Accounting Dashboard`, click the :icon:`fa-ellipsis-v`
:guilabel:`(ellipsis)` icon on the :guilabel:`Bank` journal, and select :guilabel:`Import file`.
Next, select the file and upload it.

.. tip::
   Alternatively, access the transaction list by:
    - clicking on the :guilabel:`Bank` journal's name, then clicking :guilabel:`Upload`
    - dragging and dropping a file on the bank journal on the :guilabel:`Accounting Dashboard`
    - dragging and dropping a file on the :guilabel:`Bank Matching` view

Certain file types such as CSV and XLSX, then require setting the necessary formatting options and
mapping the file columns with their related Odoo fields, after which you can run a :guilabel:`Test`
and :guilabel:`Import` your bank transactions. Other file types are mapped automatically.

.. seealso::
   :doc:`/applications/essentials/export_import_data`

.. _accounting/transactions/register:

Register bank transactions manually
===================================

You can also record your bank transactions manually. To do so, go to the :guilabel:`Accounting
Dashboard`, click the :guilabel:`Bank` journal's name, and then on :guilabel:`New`. The
:guilabel:`Partner` field is optional to ease the reconciliation process, but the :guilabel:`Label`
and :guilabel:`Date` fields are mandatory.

.. _accounting/transactions/statements:

Statements
==========

A **bank statement** is a document provided by a bank or financial institution that lists the
transactions that have occurred in a particular bank account over a specified period of time.

In Odoo Accounting, it is optional to group transactions by their related statement, but depending
on your business flow, you may want to record them for record-keeping and organizational purposes.

To access a list of existing statements, go to the :guilabel:`Accounting Dashboard`, click the
:icon:`fa-ellipsis-v` :guilabel:`(dropdown menu)` icon next to the bank or cash journal you want to
check, then click :guilabel:`Statements`.

.. important::
   To ensure the ending balances of your bank statements in Odoo align with the ending balances of
   the statements that are provided by your bank, create an opening transaction to record the bank
   account balance as of the date you begin synchronizing or importing transactions. This is
   necessary to ensure the accuracy of your accounting.

.. tip::
   To access a statement's transactions, click :guilabel:`Transactions` directly from the
   :guilabel:`Bank Statements` list view or open a statement and click the :guilabel:`Statement
   lines` smart button.

.. _accounting/transactions/statement-kanban:

Statement creation
------------------

The :guilabel:`Bank Matching` view displays transactions from most recent to oldest and groups them
by statement, with any recent transactions that do not belong to a statement at the top. To add
transactions to a statement, hover on the most recent transaction that should be included in the
statement, and click the :guilabel:`Statement` button that appears on the upper separator line.
Doing so creates a statement from that transaction down to the oldest transaction that is not yet
part of a statement.

.. image:: transactions/statements-kanban.png
   :alt: A "Statement" button is visible when hovering on a transaction.

In the :guilabel:`Create Statement` window, fill out the statement's :guilabel:`Reference`, verify
its :guilabel:`Starting Balance` and :guilabel:`Ending Balance`, add an attachment such as a PDF
of the statement if desired, and click :guilabel:`Save`.

.. tip::
   Transactions can also be added to statements from the list view. Select all the transactions
   corresponding to the bank statement, and, in the :guilabel:`Statement` column, select an existing
   statement or create a new one by typing its reference, clicking on :guilabel:`Create and
   edit...`, filling out the statement's details, and saving.

.. _accounting/transactions/view-edit-print:

Statement viewing, editing, and printing
----------------------------------------

To view an existing statement, click the statement amount in the :guilabel:`Bank Matching` view
or click the statement name and then the :icon:`fa-arrow-right` :guilabel:`(Internal link)` icon in
the :guilabel:`Bank Matching` list view. From here, you can edit the :guilabel:`Reference`,
:guilabel:`Starting Balance`, :guilabel:`Ending Balance`, and :guilabel:`Attachments`.

.. note::
   - Manually updating the :guilabel:`Starting Balance` automatically updates the :guilabel:`Ending
     Balance` based on the new value of the :guilabel:`Starting Balance` and the value of the
     statement's transactions.
   - If the :guilabel:`Starting Balance` doesn't equal the previous statement's :guilabel:`Ending
     Balance`, or if the :guilabel:`Ending Balance` doesn't equal the running balance
     (:guilabel:`Starting Balance` plus the statement's transactions), a warning appears explaining
     the issue. To maintain flexibility, it is still possible to save without first resolving the
     issue.

To generate and print a PDF of the bank statement, click the :icon:`fa-cog` :guilabel:`(gear)` icon
and click :icon:`fa-print` :guilabel:`Statement`.

.. note::
   When a bank statement is generated to be printed, it is automatically added to the
   :guilabel:`Attachments` if no file was attached when creating the statement.
