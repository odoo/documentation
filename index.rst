:classes: stripe

====================================
Accounting Memento For Entrepreneurs
====================================

.. rst-class:: intro-list

* .. rst-class:: intro-p-l

  The **Profit and Loss** (P&L) report shows the performance of the company
  over a specific period (usually the current year).

  * .. rst-class:: intro-gross-profit

    The **Gross Profit** equals the revenues from sales minus the cost of
    goods sold.

  * .. rst-class:: intro-opex

    **Operating Expenses** (OPEX) include admininstration, sales and R&D
    salaries as well as rent and utilities, miscellaneous costs, insurances, …
    anything beyond the costs of products sold.

* .. rst-class:: intro-balance

  The **Balance Sheet** is a snapshot of the company's finances at a specific
  date (as opposed to the Profit and Loss which is an analysis over a period)

  * .. rst-class:: intro-assets

    **Assets** represent the company's wealth, things it owns. Fixed assets
    includes building and offices, current assets include bank accounts and
    cash. A client owing money is an asset. An employee is not an asset.

  * .. rst-class:: intro-liabilities

    **Liabilities** are obligations from past events resulting in future use
    or transfer of current assets (utility bills, debts, unpaid suppliers).

  * .. rst-class:: intro-equity

    **Equity** the amount of the funds contributed by the owners (founders or
    shareholders) plus previously retained retained earnings (or losses).

A difference is made between buying an assets (e.g. a building) and expenses
(e.g. fuel). Assets have an intrinsic value over time, versus expenses having
value in them being consumed for the company to "work".

Assets have necessarily been financed via liabilities or equity: a company can
buy work space through profits, debts or injected capital (fund raising).

.. h:div:: force-right accounts-table

   .. placeholder

What is owned (assets) has been financed through debts to reimburse
(liabilities) or equity (profits, capital).

.. rst-class:: force-right

.. highlights:: Assets = Liabilities + Equity

Chart of Accounts
=================

The **chart of accounts** lists all the accounts used by the company, whether
they are balance sheet accounts or P&L accounts. Every financial transaction
(e.g. a payment, an invoice) impacts accounts by moving value from one account
(credit) to an other account (debit).

.. h:div:: force-right

   .. h:div:: chart-of-accounts

      .. placeholder

   .. highlights:: Balance = Debit - Credit

Journal Entries
===============

Every financial document of the company (e.g. an invoice, a bank statement, a
pay slip, a capital increase contract) is recorded as a journal entry,
impacting several accounts.

For a journal entry to be *balanced*, the sum of all its debits must be equal
to the sum of all its credits.

.. h:div:: force-right journal-entries

   examples of accounting entries for various transactions. Example:

   Example 1: Customer Invoice:

   Explanation:

     - You generate a revenue of $1,000
     - You have a tax to pay of $90
     - The customer owes $1,090

   Configuration:

     - Income: defined on the product, or the product category
     - Account Receivable: defined on the customer
     - Tax: defined on the tax set on the invoice line

     The fiscal position used on the invoice may have a rule that
     replaces the Income Account or the tax defined on the product by another
     one.

   Example 2: Customer Payment:

   Explanation:

     - Your customer owes $1,090 less
     - Your receive $1,090 on your bank account

   Configuration:

     - Bank Account: defined on the related bank journal
     - Account Receivable: defined on the customer

Reconciliation
==============

At a financial level, journal entries (and the corresponding operations in a
company's account) are independent from one another: the invoices a company
emits and the payments it receives are separate journal entries.

It's thus easy to know how much was sold (by tallying the income account) and
how the company is still owed overall (receivables) but not how much a
specific client owes or which specific invoices are still unpaid (in order to
send reminders for instance).

Reconciliation is the process of correlating and linking journal items,
matching the credits and debits of a specific account:

* within a single account, look for all non-reconciled items (usually with a
  specific second party, e.g. all operations on *Accounts Receivable*
  concerning the same client)
* link debiting items with crediting items, each side (debiting and crediting)
  can have multiple items.

The system can then use reconciliation to automatically mark invoices as paid
(or partially paid), prepare and send reminders, flag accounting issues, …

.. rst-class:: force-right

Example
-------

Reconciling on *Accounts Receivable* with all operations involving that
specific customer will result in:

.. rst-class:: table-condensed d-c-table

+-------------------------+-------------------------+-------------------------+
|Accounts Receivable      |Debit                    |Credit                   |
+=========================+=========================+=========================+
|Invoice 1                |100                      |                         |
+-------------------------+-------------------------+-------------------------+
|Payment 1.1              |                         |70                       |
+-------------------------+-------------------------+-------------------------+
|Invoice 2                |65                       |                         |
+-------------------------+-------------------------+-------------------------+
|Payment 1.2              |                         |30                       |
+-------------------------+-------------------------+-------------------------+
|Payment 2                |                         |65                       |
+-------------------------+-------------------------+-------------------------+
|Invoice 3                |50                       |                         |
+-------------------------+-------------------------+-------------------------+
|                         |                         |                         |
+-------------------------+-------------------------+-------------------------+
|Total To Pay             |50                       |                         |
+-------------------------+-------------------------+-------------------------+

Bank Reconciliation
-------------------

Bank reconciliation is the process of finding and explaining the differences
between the bank statements provided by banks and the company's own
accounting. It is used to both import the bank's operations into the internal
books (e.g. banking or overdraft fees) and discover issues (missing records,
checks not passed to banks, operation inversions, …).

There are two main ways to perform bank reconciliation:

Intermediate account
~~~~~~~~~~~~~~~~~~~~

Bank statements can be encoded in a dedicated "bank" account, which is then
reconciled normally.

.. h:div:: force-right

   * encode a check being sent:

     .. rst-class:: table-condensed d-c-table

     +--------------------+-----+------+
     |                    |Debit|Credit|
     +====================+=====+======+
     |Accounts Payable    |121  |      |
     +--------------------+-----+------+
     |Emitted Checks      |     |121   |
     +--------------------+-----+------+

   * get the bank statement and encode it:

     .. rst-class:: table-condensed d-c-table

     +-----------------+-----+------+
     |                 |Debit|Credit|
     +=================+=====+======+
     |Emitted Checks   |121  |      |
     +-----------------+-----+------+
     |Bank             |     | 121  |
     +-----------------+-----+------+

   * reconcile on the Emitted Checks account, it is a normal reconciliation
     process between two journal items

Bank reconciliation
~~~~~~~~~~~~~~~~~~~

The operation can also be implemented specifically, this is used e.g. in the
US. In that situation, each act having to do with a potential bank account
operation (bank transfer, check, payment notification) is immediately encoded
to a journal entry and when the bank statement is received its entries are
correlated to the previously encoded entries.

In that case, the bank statement does not generate entries, it only points
to/validates previously created entries.

.. note:: In Odoo, that would be Pay Invoice -> Import Bank Statement, only
          added to master mid-january.
