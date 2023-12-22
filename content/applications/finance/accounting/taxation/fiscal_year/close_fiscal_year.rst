===========================================
Do a year end in Odoo (close a fiscal year)
===========================================

Before going ahead with closing a fiscal year, a few steps should be taken to ensure that your
accounting is correct, up-to-date, and accurate.

- Make sure you have fully :doc:`reconciled your bank account(s)
  <../../bank/reconciliation/use_cases>` up to year-end and confirm that your ending book balances
  match your bank statement balances.
- Verify that all :doc:`customer invoices <../../getting_started/process_overview/customer_invoice>`
  have been entered and approved and that there are no draft invoices.
- Confirm that you have entered and agreed on all :doc:`vendor bills
  <../../getting_started/process_overview/supplier_bill>`.
- Validate all **expenses**, ensuring their accuracy.
- Corroborate that all **received payments** have been encoded and recorded accurately.
- Close all **suspense accounts**.
- Book all :doc:`depreciation <../../payables/supplier_bills/assets>` and :doc:`deferred
  revenues <../../receivables/customer_invoices/deferred_revenues>` entries.

Year-end checklist
==================

- Run a **tax report**, and verify that your tax information is correct.
- Reconcile all accounts on your :doc:`balance sheet <../../getting_started/cheat_sheet>`:

  - Update your bank balances in Odoo according to your actual bank balances on your statements.
  - Reconcile all transactions in your cash and bank accounts by running the **aged receivables**
    and **aged payables** reports.
  - Audit your accounts, being sure to fully understand the transactions affecting them and the
    nature of the transactions, making sure to include loans and fixed assets.
  - Run the optional **payments matching** feature - found under the dropdown selection button
    (:guilabel:`⋮`) on the dashboard - to validate any open vendor bills and customer invoices with
    their payments. This step is optional; however it may assist the year-end process if all
    outstanding payments and invoices are reconciled, and could lead to finding errors or mistakes
    in the system.

- Your accountant/bookkeeper will likely verify your balance sheet items and book entries for:

  - year-end manual adjustments,
  - work in progress,
  - depreciation journal entries,
  - loans, and
  - tax adjustments.

If your accountant/bookkeeper is going through the year-end audit, they may want to have paper
copies of all balance sheet items (such as loans, bank accounts, prepayments, sales tax statements,
etc.) to compare these with your Odoo balances.

.. important::
   During this process, it is good practice to set the **lock date for non-advisers** to the last
   day of the preceding financial year (:menuselection:`Accounting --> Accounting --> Lock Dates`).
   This way, the accountant can be confident that nobody is changing the previous year transactions
   while auditing the books.

   .. warning::
      Setting a **lock date for all-users** is irreversible and cannot be removed.

Closing the fiscal year
=======================

There is no need to do a specific year-end closing entry in order to close out your **profit and
loss statement**.

The reports are created in real-time, meaning that your profit and loss statement corresponds
directly with the year-end date you specify in Odoo. Therefore, any time you generate the **income
statement**, the beginning date corresponds with the beginning of the **fiscal year** and the
account balances will all be 0.

Once the accountant/bookkeeper has created the journal entry to allocate the **current year
earnings**, you should set the **lock date** to the last day of the fiscal year. Before doing so,
make to confirm whether or not the current year earnings in the **balance sheet** is correctly
reporting a balance of 0.

.. seealso::
   :doc:`fiscal_year`
