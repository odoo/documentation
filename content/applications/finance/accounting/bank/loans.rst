:show-content:

================
Loans management
================

Odoo lets you manage your loans to have a comprehensive list of all loans undertaken by your company
in order to maintain a holistic and forecasted view of upcoming due dates (e.g., cash forecast).
Set up your amortization schedule—or import it—and let Odoo automatically handle monthly interest
and principal adjustments such that your financial reports are always accurate with minimal effort.

Create a new loan
-----------------

You can create a new loan by going to :menuselection:`Accounting --> Accounting --> Loans`. When
creating a new loan, you can create your amortization schedule in three ways:

- By importing it from a supported file;
- By calculating it from a couple of values (e.g. the :guilabel:`Amount Borrowed`, the
  :guilabel:`Duration`, etc.);
- By manually filling in the lines of the schedule.

In either case, 3 different fields are required for each line of the amortization schedule: the
:guilabel:`Date`, the :guilabel:`Principal` and the :guilabel:`Interest`.

The :guilabel:`Amount Borrowed`, :guilabel:`Interest` and :guilabel:`Duration` fields will be red
if the sum of the lines does not match the totals amounts you have entered.

Loan entries mechanism
----------------------

When the amount borrowed is credited to your bank account, it should be transferred to a long-term
account (defined in the loan settings). Then, upon the validation of the loan, Odoo will create all
the necessary journal entries such that you can always have a holistic and forecast view of upcoming
due dates. The entire process is completely automated with a reclassification of long-term and
short-term principal reclassification mechanism.

For each line of the amortization schedule, Odoo creates the following entries:

A payment entry on the same date that
  - debits the principal amount from the long-term account;
  - debit the interest amount from the expense account;
  - credits the payment amount to the short-term account: this is the amount that will be
    withdrawn by the bank

A reclassification entry on the same date that
  - debits the sum of the principal amounts of the next 12 months from the long-term account;
  - credits the sum of the principal amounts of the next 12 months to the short-term account.

A reversed entry of the reclassification entry on *the next day* that
  - simply reverses the previous one

With this mechanism, month after month, the short-term account is always up to date, with the
current short-term due amounts.

Closing a loan
--------------

By default, a loan will be closed whenever its last payment entry is posted. However, if can also
be manually closed (e.g. because it is being paid off early) by clicking on the :guilabel:`Close`
button. A wizard will appear asking you from which date the loan should be closed. All draft entries
after this date will be deleted too.

A loan can also be cancelled. In that case, all entries will be deleted even if they were already
posted.

Loans Analysis Report
---------------------

By going to :menuselection:`Accounting --> Reporting --> Loans Analysis`, you can access a
report where you will see a pivot view of your ongoing loans. By default, the report shows
the principal, interest and total payment for each year for the duration of the loan.
