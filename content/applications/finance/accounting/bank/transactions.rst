============
Transactions
============

Importing transactions from your bank statements allows keeping track of bank account transactions
and reconciling them with the ones recorded in your accounting.

:doc:`Bank synchronization <bank_synchronization>` automates the process. However, if you do not
want to use it or if your bank is not yet supported, other options exist:

- :ref:`Import bank transactions <transactions/import>` delivered by your bank;
- :ref:`Register bank transactions <transactions/register>` manually.

.. note::
   :ref:`Grouping transactions by statement <transactions/statements>` is optional.

.. _transactions/import:

Import transactions
===================

Odoo supports multiple file formats to import transactions:

- SEPA recommended Cash Management format (CAMT.053)
- Comma-separated values (CSV)
- Open Financial Exchange (OFX)
- Quicken Interchange Format (QIF)
- Belgium: Coded Statement of Account (CODA)

To import a file, go to the :guilabel:`Accounting Dashboard`, and in the :guilabel:`Bank` journal,
click on :guilabel:`Import File`.

.. tip::
   Alternatively, you can also:

   - click the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon on the :guilabel:`Bank`
     journal and select :guilabel:`Import file`;
   - or access the transaction list by clicking the :icon:`fa-ellipsis-v` :guilabel:`(ellipsis)`
     icon on the :guilabel:`Bank` journal and selecting :guilabel:`Transactions`, then click
     the :icon:`fa-cog` :guilabel:`(gear)` icon and select :guilabel:`Import records`.

Next, select the file and upload it.

After setting the necessary formatting options and mapping the file columns with their related Odoo
fields, you can run a :guilabel:`Test` and :guilabel:`Import` your bank transactions.

.. seealso::
   :doc:`/applications/essentials/export_import_data`

.. _transactions/register:

Register bank transactions manually
===================================

You can also record your bank transactions manually. To do so, go to :guilabel:`Accounting
Dashboard`, click on the :guilabel:`Bank` journal, and then on :guilabel:`New`. Make sure to fill
out the :guilabel:`Partner` and :guilabel:`Label` fields to ease the reconciliation process.

.. _transactions/statements:

Statements
==========

A **bank statement** is a document provided by a bank or financial institution that lists the
transactions that have occurred in a particular bank account over a specified period of time.

In Odoo Accounting, it is optional to group transactions by their related statement, but depending
on your business flow, you may want to record them for control purposes.

.. important::
   If you want to compare the ending balances of your bank statements with the ending balances of
   your financial records, *don't forget to create an opening transaction* to record the bank
   account balance as of the date you begin synchronizing or importing transactions. This is
   necessary to ensure the accuracy of your accounting.

To access a list of existing statements, go to the :guilabel:`Accounting Dashboard`, click the
:icon:`fa-ellipsis-v` :guilabel:`(ellipsis)` icon next to the bank or cash journal you want to
check, then click :guilabel:`Statements`.

.. _transactions/statement-kanban:

Statement creation from the kanban view
---------------------------------------

Open the bank reconciliation (kanban) view from the :guilabel:`Accounting Dashboard` by clicking on
the name of the bank journal and identify the transaction corresponding to the last (most recent)
transaction of your bank statement. Click on the :guilabel:`Statement` button when hovering on the
upper separator line to create a statement from that transaction down to the oldest transaction that
is not yet part of a statement.

.. image:: transactions/statements-kanban.png
   :alt: A "Statement" button is visible when hovering on the line separating two transactions.

In the :guilabel:`Create Statement` window, fill out the statement's :guilabel:`Reference`, verify
its :guilabel:`Starting Balance` and :guilabel:`Ending Balance`, and click :guilabel:`Save`.

.. _transactions/statement-list:

Statement creation from the list view
-------------------------------------

Open the list of transactions by clicking on the name of the bank journal and switching to the list
view. Select all the transactions corresponding to the bank statement, and, in the
:guilabel:`Statement` column, select an existing statement or create a new one by typing its
reference, clicking on :guilabel:`Create and edit...`, filling out the statement's details, and
saving.

.. _transactions/view-edit-print:

Statement viewing, editing, and printing
----------------------------------------

To view an existing statement, click on the statement amount in the reconciliation (kanban) view or
click on the statement name in the bank transaction list view. From here, you can edit the
:guilabel:`Reference`, :guilabel:`Starting Balance`, or :guilabel:`Ending Balance`.

.. note::
   Manually updating the :guilabel:`Starting Balance` automatically updates the :guilabel:`Ending
   Balance` based on the new value of the :guilabel:`Starting Balance` and the value of the
   statement's transactions.

.. warning::
   If the :guilabel:`Starting Balance` doesn't equal the previous statement's :guilabel:`Ending
   Balance`, or if the :guilabel:`Ending Balance` doesn't equal the running balance
   (:guilabel:`Starting Balance` plus the statement's transactions), a warning appears explaining
   the issue. To maintain flexibility, it is still possible to save without first resolving the
   issue.

To attach a digital copy (i.e., JPEG, PNG, or PDF) of the bank statement for enhanced recordkeeping,
click the :icon:`fa-paperclip` :guilabel:`Attachments` button and select the file to attach.

To generate and print a PDF of the bank statement, click the :guilabel:`Print` button (if accessed
via the reconciliation view) or click on the :icon:`fa-cog`:guilabel:`(gear)` icon and click
:icon:`fa-print`:guilabel:`Statement` (if accessed via the list view).

.. note::
   When a bank statement is generated to be printed, it is automatically added to the
   :guilabel:`Attachments`.
