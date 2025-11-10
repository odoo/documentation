================
Year-end closing
================

Year-end closing is essential for maintaining financial accuracy, complying with regulations, making
informed decisions, and ensuring transparency in reporting.

.. seealso::
   :doc:`Tax return <tax_returns>`

.. _accounting/year-end/fiscal-years:

Fiscal years
============

By default, the fiscal year is set to last 12 months and ends on December 31st. However, its
duration and end date can vary due to cultural, administrative, and economic considerations.

To modify these values, go to :menuselection:`Accounting --> Configuration --> Settings`. Under the
:guilabel:`Fiscal Periods` section, change the :guilabel:`Last Day` field if necessary.

If the period lasts *more* than or *less* than 12 months, enable :guilabel:`Fiscal Years` and
:guilabel:`Save`. Go back to the :guilabel:`Fiscal Periods` section and click :icon:`oi-arrow-right`
:guilabel:`Fiscal Years`. Then, click :guilabel:`New`, give it a :guilabel:`Name` and both a
:guilabel:`Start Date` and :guilabel:`End Date`.

.. note::
   Once the set fiscal period is over, Odoo automatically reverts to the default periodicity,
   considering the value specified in the :guilabel:`Last Day` field.

.. _accounting/year-end/checklist:

Year-end checklist
==================

.. _accounting/year-end/before-closure:

Before closure
--------------

Before closing a fiscal year, ensure that everything is accurate and up-to-date:

- Make sure all bank accounts are fully :doc:`reconciled <../bank/reconciliation>` up to year-end
  and confirm that the ending book balances match the bank statement balances.
- Confirm that all :doc:`customer invoices <../customer_invoices>` and :doc:`vendor bills
  <../vendor_bills>` have been created and all draft entries have been either confirmed or
  cancelled, as needed.
- Ensure the accuracy of all :doc:`expenses <../../expenses>` and validate them.
- Check that all :doc:`received payments <../payments>` have been encoded and confirmed.
- Close all :ref:`suspense accounts <accounting/journals/bank-cash-cc>`.
- Ensure :doc:`loans <../bank/loans>` are properly registered for automatic amortization
  calculations.
- Review overdue payables and receivables aged over 60 days, and assess whether a provision for
  uncertain liabilities or an allowance for doubtful accounts is required.
- Book all :doc:`depreciation <../vendor_bills/assets>` and :doc:`deferred revenue
  <../customer_invoices/deferred_revenues>` entries.

.. _accounting/year-end/closing-a-fiscal-year:

Closing a fiscal year
---------------------

Then, to close the fiscal year:

- Run a :ref:`tax report <accounting/reporting/tax-report>`, and verify that all tax information is
  correct.
- Reconcile all accounts on the :ref:`balance sheet <accounting/reporting/balance-sheet>`:

  - Update the bank balances in Odoo to reflect the actual balances as per the bank statements.
  - Reconcile all transactions in the cash and bank accounts by running the :ref:`aged receivables
    <accounting/reporting/aged-receivable>` and :ref:`aged payables
    <accounting/reporting/aged-payable>` reports.
  - Audit all accounts, fully understanding all transactions and their nature, including :doc:`loans
    <../bank/loans>` and :doc:`fixed assets <../vendor_bills/assets>`.
  - Optionally, :ref:`match payments <accounting/payments/payments-matching>` to validate any open
    vendor bills and customer invoices with their payments. While this step is optional, it could
    assist the year-end closing process if all outstanding payments and invoices are reconciled,
    potentially finding errors or mistakes in the system.

Next, the accountant likely verifies balance sheet items and book entries for:

  - year-end manual adjustments,
  - work in progress,
  - depreciation journal entries,
  - loans,
  - tax adjustments,
  - etc.

During the year-end audit, the accountant may print paper copies of all balance sheet items (e.g.,
loans, bank accounts, prepayments, sales tax statements) to compare them against the balances
recorded in Odoo.

.. tip::
   As part of this process, setting a :ref:`Lock Everything
   <accounting/year-end/lock-everything-date>` date to the last day (inclusive) of the preceding
   fiscal year is good practice. This ensures that journal entries with an accounting date on or
   before the lock date cannot be created or modified during the audit. Users with *administrator*
   access rights can still create and edit entries if an :ref:`exception is configured
   <accounting/year-end/lock-date-exception>`.

.. _accounting/year-end/lock-everything-date:

Lock everything date
~~~~~~~~~~~~~~~~~~~~

Setting a lock date prevents modifications to any posted journal entries with an accounting date on
or before the lock date. It also prevents posting new entries with an accounting date on or before
the lock date. In such cases, the system automatically sets the accounting date to the day after the
lock date.

To set a :guilabel:`Lock Everything` date, go to :menuselection:`Accounting --> Accounting --> Lock
Dates`. In the :guilabel:`Lock Journal Entries` window, set the :guilabel:`Lock Everything` date and
:guilabel:`Save`.

After setting the :guilabel:`Lock Everything` date, an :ref:`exception
<accounting/year-end/lock-date-exception>` can be made if a modification is necessary.

.. _accounting/year-end/lock-date-exception:

Lock date exception
*******************

Users with :ref:`Administrator <accounting/accountant-access-rights>` access rights to the
Accounting app can create exceptions. To do so:

#. After setting and saving a lock date, go to :menuselection:`Accounting --> Accounting --> Lock
   Dates`. In the :guilabel:`Lock Journal Entries` window, remove the :guilabel:`Lock Everything`
   date.
#. In the :guilabel:`Exception` banner, choose if this exception should be set :guilabel:`for me`
   (the current user) or :guilabel:`for everyone`, and how long it should last.
#. A :guilabel:`Reason` for this exception can be added.
#. All of this information is logged in the chatter of the :doc:`company record
   </applications/general/companies>`.

.. tip::
   To remove a lock date after it has been saved, configure the exception to apply :guilabel:`for
   everyone` and set the duration to :guilabel:`forever`. This does not apply to the
   :guilabel:`Hard Lock` date, which is irreversible to ensure inalterability and to meet accounting
   requirements in certain countries.

.. _accounting/year-end/current-year-earnings:

Current year's earnings
~~~~~~~~~~~~~~~~~~~~~~~

Odoo uses a unique account type called **current year's earnings** to display the difference
between the **income** and **expense** accounts.

.. note::
   The chart of accounts can only contain one account of this type. By default, it is a 999999
   account named :guilabel:`Undistributed Profits/Losses`.

To allocate the current year's earnings, create a new miscellaneous entry with a date set to the end
of the fiscal year to book them to any equity account.

Then, verify whether the current year's earnings on the **balance sheet** correctly show a zero
balance. If so, a :guilabel:`Hard Lock date` can be set to the last day of the fiscal year in
:menuselection:`Accounting --> Accounting --> Lock Dates`.

.. tip::
   The :guilabel:`Hard Lock date` field is irreversible and is intended to ensure data
   inalterability required to comply with accounting regulations in certain countries. If such
   compliance is not applicable, setting this field may not be necessary. However, if required, the
   date should only be set once it is confirmed to be correct, as it **cannot be changed or
   overridden**, regardless of access rights.

.. _accounting/year-end/annual-closing:

Annual closing
==============

To complete the fiscal year-end process and finalize the annual closing, go to the Accounting
dashboard and click :guilabel:`Tax Returns` on the :guilabel:`Tax Returns` journal from the
Accounting dashboard. Alternatively, go to :menuselection:`Accounting --> Accounting --> Tax
Returns`.

This view displays a chronological list of all pending returns including :ref:`tax returns
<accounting/tax-returns/vat-report>`, :ref:`advance payments
<accounting/tax-returns/advance-payments>` (based on the :doc:`fiscal localization
<../../fiscal_localizations>`), and annual closings. A pending :guilabel:`Annual Closing` follows
two steps: :ref:`review <accounting/year-end/annual-closing/review>` and :ref:`submit
<accounting/year-end/annual-closing/submit>`. The :guilabel:`Annual Closing` item includes:

- A period (year).
- A deadline date.
- The related company and :ref:`branch(es) <general/branches>`, if applicable.
- Action steps, such as :ref:`Review <accounting/year-end/annual-closing/review>` and :ref:`Submit
  <accounting/year-end/annual-closing/submit>`, which turn green when completed.
- Action buttons for key tasks.
- A :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` menu for additional options.

.. note::
   - Before the annual closing is reviewed, the number of :guilabel:`Pending` or :guilabel:`Passed`
     closing validation checks is displayed in red or green, respectively.
   - If the :guilabel:`Deadline` date has passed, it appears in red.

.. _accounting/year-end/annual-closing/review:

Review
------

To start reviewing an annual closing, click the annual closing line. The annual closing checks view
displays the following, depending on the :doc:`fiscal localization <../../fiscal_localizations>`:

  - :guilabel:`Aged payables per partner`: Review payables without a partner.
  - :guilabel:`Aged receivables per partner`: Review receivables without a partner.
  - :guilabel:`Bank Reconciliation`: Reconcile all bank account transactions up to year-end.
  - :guilabel:`Deferred Entries`: Ensure start and end dates are correctly set on bills and
    invoices.
  - :guilabel:`Earnings Allocation`: After adjustments, transfer the undistributed profits/losses to
    an equity account.
  - :guilabel:`Fixed Assets`: Ensure assets are properly registered for automatic depreciation
    calculation.
  - :guilabel:`Loans`: Ensure loans are properly registered for automatic amortization calculations.
  - :guilabel:`Manual Adjustments`: Complete any necessary manual adjustments and internal checks.
  - :guilabel:`No draft entries`: Review and post draft invoices, bills, and entries in the period,
    or change their accounting date.
  - :guilabel:`Overdue payables`: Review overdue payables aged over 60 days and assess the need for
    an allowance for uncertain liabilities.
  - :guilabel:`Overdue receivables`: Review overdue receivables aged over 60 days and assess the
    need for an allowance for doubtful accounts or expected credit loss provision, as per IFRS 9
    guidelines.
  - :guilabel:`Total Receivables`: Verify that the total aged receivables equals the customer
    account balance.
  - :guilabel:`Total payables`: Verify that the total aged payables equals the vendor account
    balance.

Some of the checks are performed automatically, while others serve as reminders to review essential
tasks. Each check card is either labeled as:

- :guilabel:`Reviewed` (highlighted in green): The check has passed.
- :guilabel:`To review` (highlighted in grey): Action is required before the check can be manually
  marked as :guilabel:`Reviewed` or :guilabel:`Supervised`.
- :guilabel:`Anomaly` (highlighted in red): The automatic check detects an issue. There are two
  options:

  - Click the failed check's card to fix the issue.
  - Click :guilabel:`Anomaly` and select :guilabel:`Reviewed` or :guilabel:`Supervised` to pass the
    check without fixing the issue.

Once all closing validation checks have passed, either labeled as :guilabel:`Reviewed` or
:guilabel:`Supervised`, click :guilabel:`Validate` to complete the :guilabel:`Review` step. The
annual closing can then be :ref:`submitted <accounting/year-end/annual-closing/submit>`.

.. tip::
   - To add customized checks, activate :ref:`developer mode <developer-mode>`, and go to
     :menuselection:`Accounting --> Configuration --> Check`. Then, click :guilabel:`New` and
     complete the necessary fields.
   - All check status changes are logged in the chatter.

.. _accounting/year-end/annual-closing/submit:

Submit
------

Once a tax return has completed the :ref:`Review <accounting/tax-returns/vat-return-review>` step,
click :guilabel:`Submit`.

If a :guilabel:`Submission Instructions` pop-up window appears, depending on the :doc:`fiscal
localization <../../fiscal_localizations>`, follow the local :guilabel:`Instructions`, and click
:guilabel:`Mark as Submitted`.

.. tip::
   To review checks before submitting the annual closing, click the :icon:`fa-ellipsis-v`
   :guilabel:`(vertical ellipsis)` icon on the annual closing line and select :guilabel:`Reset`.
