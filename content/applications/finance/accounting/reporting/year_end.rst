================
Year-end closing
================

Year-end closing is vital for maintaining financial accuracy, complying with regulations, making
informed decisions, and ensuring transparency in reporting.

.. _year-end/fiscal-years:

Fiscal years
============

By default, the fiscal year is set to last 12 months and end on December 31st. However, its duration
and end date can vary due to cultural, administrative, and economic considerations.

To modify these values, go to :menuselection:`Accounting --> Configuration --> Settings`. Under the
:guilabel:`Fiscal Periods` section, change the :guilabel:`Last Day` field if necessary.

If the period lasts *more* than or *less* than 12 months, enable :guilabel:`Fiscal Years` and
:guilabel:`Save`. Go back to the :guilabel:`Fiscal Periods` section and click :guilabel:`➜ Fiscal
Years`. From there, click :guilabel:`Create`, give it a :guilabel:`Name`, and both a
:guilabel:`Start Date` and :guilabel:`End Date`.

.. note::
   Once the set fiscal period is over, Odoo automatically reverts to the default periodicity, taking
   into account the value specified in the :guilabel:`Last Day` field.

.. _year-end/checklist:

Year-end checklist
==================

Before closure
--------------

Before closing a fiscal year, ensure first everything is accurate and up-to-date:

- Make sure all bank accounts are fully :doc:`reconciled <../bank/reconciliation>` up to year-end,
  and confirm that the ending book balances match the bank statement balances.
- Verify that all :doc:`customer invoices <../customer_invoices>` have been entered and
  approved and that there are no draft invoices.
- Confirm that all :doc:`vendor bills  <../vendor_bills>` have been entered and agreed upon.
- Validate all :doc:`expenses <../../expenses>`, ensuring their accuracy.
- Corroborate that all :doc:`received payments <../payments>` have been encoded and recorded
  accurately.
- Close all :ref:`suspense accounts <bank_accounts/suspense>`.
- Book all :doc:`depreciation <../vendor_bills/assets>` and :doc:`deferred revenue
  <../customer_invoices/deferred_revenues>` entries.

Closing a fiscal year
---------------------

Then, to close the fiscal year:

- Run a :ref:`tax report <reporting/tax-report>`, and verify that all tax information is correct.
- Reconcile all accounts on the :ref:`balance sheet <reporting/balance-sheet>`:

  - Update the bank balances in Odoo according to the actual balances found on the bank statements.
  - Reconcile all transactions in the cash and bank accounts by running the :ref:`aged receivables
    <reporting/aged-receivable>` and :ref:`aged payables <reporting/aged-payable>` reports.
  - Audit all accounts, being sure to fully understand all transactions and their nature, making
    sure to include loans and fixed assets.
  - Optionally, run :ref:`payments matching <payments/matching>` to validate any open vendor bills
    and customer invoices with their payments. While this step is optional, it could assist the
    year-end closing process if all outstanding payments and invoices are reconciled, potentially
    finding errors or mistakes in the system.

Next, the accountant likely verifies balance sheet items and book entries for:

  - year-end manual adjustments,
  - work in progress,
  - depreciation journal entries,
  - loans,
  - tax adjustments,
  - etc.

If the accountant is going through the year-end audit, they may want to have paper copies of all
balance sheet items (such as loans, bank accounts, prepayments, sales tax statements, etc.) to
compare these with the balances in Odoo.

.. tip::
   During this process, it is good practice to set a :guilabel:`Journal Entries Lock Date` to the
   last day (inclusive) of the preceding fiscal year by going to :menuselection:`Accounting -->
   Accounting --> Lock Dates`. This way, the accountant can be confident that nobody changes the
   transactions while auditing the books. Users from the *accountant* access group can still create
   and modify entries.

Current year's earnings
~~~~~~~~~~~~~~~~~~~~~~~

Odoo uses a unique account type called **current year's earnings** to display the amount difference
between the **income** and **expenses** accounts.

.. note::
   The chart of accounts can only contain one account of this type. By default, it is a 999999
   account named :guilabel:`Undistributed Profits/Losses`.

To allocate the current year's earnings, create a miscellaneous entry to book them to any equity
account. Once done, confirm whether or not the current year's earnings in the **balance sheet** is
correctly reporting a balance of zero. If that is the case, set an :guilabel:`All Users Lock Date`
to the last day of the fiscal year by going to :menuselection:`Accounting --> Accounting --> Lock
Dates`.

.. warning::
   Setting an :guilabel:`All Users Lock Date` is **irreversible** and cannot be removed.

.. note::
   A specific year-end closing entry is **optional** in order to close out the **profit and loss
   statement**. The reports are created in real-time, meaning that the profit and loss statement
   corresponds directly with the year-end date specified in Odoo. Therefore, any time the **income
   statement** is generated, the beginning date corresponds with the beginning of the **fiscal
   year** and all account balances should equal zero.
