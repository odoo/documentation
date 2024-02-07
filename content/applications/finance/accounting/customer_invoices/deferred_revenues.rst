=================
Deferred revenues
=================

**Deferred revenues**, or **unearned revenues**, are invoices addressed to customers
for goods yet to be delivered or services yet to be rendered.

The company cannot report them on the current **profit and loss statement**, or *income statement*,
since the goods and services will be effectively delivered/rendered in the future.

These future revenues must be deferred on the company's balance sheet among the current liabilities
until they can be **recognized**, at once or over a defined period, on the profit and loss
statement.

For example, let's say a business sells a software license of $1200 for 1 year. They immediately
invoice it to the customer but can't consider it earned yet, as the future months of licensing have
not yet been delivered. Therefore, they post this new revenue in a deferred revenue account and
recognize it on a monthly basis. Each month, for the next 12 months, $100 will be recognized as
revenue.

Odoo Accounting handles deferred revenues by spreading them in multiple entries that are posted
periodically.

.. note::
   The server checks once a day if an entry must be posted. It might then take up to 24 hours before
   you see a change from :guilabel:`Draft` to :guilabel:`Posted`.

Configuration
=============

Make sure the default settings are correctly configured for your business. To do so, go to
:menuselection:`Accounting --> Configuration --> Settings`. The following options are available:

Journal
  The deferral entries are posted in this journal.
Deferred Expense Account
  Expenses are deferred on this Current Asset account until they are recognized.
Deferred Revenue Account
  Revenues are deferred on this Current Liability account until they are recognized.
Generate Entries
  By default, Odoo :ref:`automatically generates <customer_invoices/deferred/generate_on_validation>`
  the deferral entries when you post a customer invoice. However, you can also choose to
  :ref:`generate them manually <customer_invoices/deferred/generate_manually>` by selecting the
  :guilabel:`Manually & Grouped` option instead.
Amount Computation
  Suppose an invoice of $1200 must be deferred over 12 months. The :guilabel:`Equal per month`
  computation accounts for $100 each month, while the :guilabel:`Based on days` computation
  accounts for different amounts depending on the number of days in each month.

.. _customer_invoices/deferred/generate_on_validation:

Generate deferral entries on validation
=======================================

.. tip::
   Make sure the :guilabel:`Start Date` and :guilabel:`End Date` fields are visible in the
   :guilabel:`Invoice Lines` tab. In most cases, the :guilabel:`Start Date` should be in the same
   month as the :guilabel:`Invoice Date`.

For each line of the invoice that should be deferred, specify the start and end dates of the
deferral period.

If the :guilabel:`Generate Entries` field in the **Settings** is set to :guilabel:`On invoice/bill
validation`, Odoo automatically generates the deferral entries when the invoice is validated. Click
the :guilabel:`Deferred Entries` smart button to see them.

One entry, dated on the same day as the invoice's accounting date, moves the invoice amounts from
the income account to the deferred account. The other entries are deferral entries which, month
after month, move the invoice amounts from the deferred account to the income account to recognize
the revenue.

.. example::
   You can defer a January invoice of $1200 over 12 months by specifying a start date of 01/01/2023
   and an end date of 12/31/2023. At the end of August, $800 is recognized as an income,
   whereas $400 remains on the deferred account.

Reporting
=========

The deferred revenue report computes an overview of the necessary deferral entries for each account.
To access it, go to :menuselection:`Accounting --> Reporting --> Deferred Revenue`.

To view the journal items of each account, click on the account name and then :guilabel:`Journal
Items`.

.. image:: deferred_revenues/deferred_revenue_report.png
   :alt: Deferred revenue report

.. note::
    Only invoices whose accounting date is before the end of the period of the report
    are taken into account.

.. _customer_invoices/deferred/generate_manually:

Generate grouped deferral entries manually
==========================================

If you have a lot of deferred revenues and wish to reduce the number of journal entries created, you
can generate deferral entries manually. To do so, set the :guilabel:`Generate Entries` field in the
**Settings** to :guilabel:`Manually & Grouped`. Odoo then aggregates the deferred amounts in a
single entry.

At the end of each month, go to :menuselection:`Accounting --> Reporting --> Deferred Revenue` and
click the :guilabel:`Generate Entries` button. This generates two deferral entries:

- One dated at the end of the month which aggregates, for each account, all the deferred amounts
  of that month. This means that a part of the deferred revenue is recognized at the end of that
  period.
- The reversal of this created entry, dated on the following day (i.e., the first day of the
  next month) to cancel the previous entry.

.. example::
   There are two invoices:

   - Invoice A: $1200 to be deferred from 01/01/2023 to 12/31/2023
   - Invoice B: $600 to be deferred from 01/01/2023 to 12/31/2023

   In January
      At the end of January, after clicking the :guilabel:`Generate Entries` button, there are the
      following entries:

      - Entry 1 dated on the 31st January:

        - Line 1: Expense account -1200 -600 = **-1800** (cancelling the total of both invoices)
        - Line 2: Expense account 100 + 50 = **150** (recognizing 1/12 of invoice A and invoice B)
        - Line 3: Deferred account 1800 - 150 = **1650** (amount that has yet to be deferred later
          on)

      - Entry 2 dated on the 1st February, the reversal of the previous entry:

        - Line 1: Expense account **1800**
        - Line 2: Deferred account **-150**
        - Line 3: Expense account **-1650**

   In February
      At the end of February, after clicking the :guilabel:`Generate Entries` button, there are the
      following entries:

      - Entry 1 dated on the 28th February:

        - Line 1: Expense account -1200 -600 = **-1800** (cancelling the total of both invoices)
        - Line 2: Expense account 200 + 100 = **300** (recognizing 2/12 of invoice A and invoice B)
        - Line 3: Deferred account 1800 - 300 = **1500** (amount that has yet to be deferred later
          on)

      - Entry 2 dated on the 1st March, the reversal of the previous entry.

   From March to October
      The same computation is done for each month until October.

   In November
      At the end of November, after clicking the :guilabel:`Generate Entries` button, there are the
      following entries:

      - Entry 1 dated on the 30th November:

        - Line 1: Expense account -1200 -600 = **-1800** (cancelling the total of both invoices)
        - Line 2: Expense account 1100 + 550 = **1650** (recognizing 11/12 of invoice A and invoice
          B)
        - Line 3: Deferred account 1800 - 1650 = **150** (amount that has yet to be deferred later
          on)

      - Entry 2 dated on the 1st December, the reversal of the previous entry.

   In December
      There is no need to generate entries in December. Indeed, if we do the computation for
      December, we have an amount of 0 to be deferred.

   In total
      If we aggregate everything, we would have:

      - invoice A and invoice B
      - two entries (one for the deferral and one for the reversal) for each month from January to
        November

      Therefore, at the end of December, invoices A and B are fully recognized as income
      only once in spite of all the created entries thanks to the reversal mechanism.
