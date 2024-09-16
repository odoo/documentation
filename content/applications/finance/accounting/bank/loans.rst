================
Loans management
================

Odoo's loan management gives a comprehensive list of all loans undertaken by your company in order
to maintain a holistic and forecasted view of upcoming due dates (e.g., cash forecast). Set up
amortization schedules—or import them—and let Odoo automatically handle monthly interest and
principal adjustments so that your financial reports are always accurate with minimal effort.

Create a new loan
-----------------

Create a new loan by going to :menuselection:`Accounting --> Accounting --> Loans`. When creating a
new loan, there are three options for how to create amortization schedules:

- importing it from a supported file;
- calculating it from multiple input values (e.g., the :guilabel:`Amount Borrowed`, the
  :guilabel:`Duration`, etc.) using the :guilabel:`Compute` button;
- manually filling in the lines of the schedule.

In each case, three different fields are required for each line of the amortization schedule: the
:guilabel:`Date`, the :guilabel:`Principal`, and the :guilabel:`Interest`.

The :guilabel:`Amount Borrowed`, :guilabel:`Interest`, and :guilabel:`Duration` fields will be red
if the sum of the lines does not match the total of the amortization schedule lines.

Loan entries mechanism
----------------------

When the amount borrowed is credited to a bank account, it should be transferred to a long-term
account (defined in the :guilabel:`Loan Settings` tab). Then, upon the validation of the loan, Odoo
creates the necessary journal entries so that there is always a holistic and forecasted view of
upcoming due dates. The entire process is completely automated with a long-term and short-term
principal reclassification mechanism.

For each line of the amortization schedule, Odoo creates the following entries:

A payment entry on the same date that
  - debits the principal amount to the long-term account;
  - debits the interest amount to the expense account;
  - credits the payment amount to the short-term account: this is the amount that will be
    withdrawn by the bank.

A reclassification entry on the same date that
  - debits the sum of the principal amounts of the next 12 months to the long-term account;
  - credits the sum of the principal amounts of the next 12 months to the short-term account.

A reversed entry of the reclassification entry on *the next day* that simply reverses the previous
one.

With this mechanism, month after month, the short-term account is always up to date with the
current short-term due amounts.

Closing a loan
--------------

By default, a loan will be closed whenever its last payment entry is posted. However, it can also
be manually closed (e.g., because it is being paid off early) by clicking on the :guilabel:`Close`
button. A wizard will appear asking from which date the loan should be closed. All draft entries
after this date will be deleted too.

A loan can also be cancelled. In that case, all entries will be deleted even if they were already
posted.

Loans Analysis Report
---------------------

By going to :menuselection:`Accounting --> Reporting --> Loans Analysis`, you can access a
report with a pivot view of your ongoing loans. By default, the report shows the principal,
interest, and total payment for each year for the loan duration.
