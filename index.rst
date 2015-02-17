:classes: stripe

==========================================
Understanding Accounting For Entrepreneurs
==========================================

Financial accounting is used to know the situation of a company (its balance
sheet) and its performance (Profit and Loss, P&L). It is set up by reporting
every financial transaction in the relevant accounts of a Chart of Accounts.

.. rst-class:: intro-list

* .. rst-class:: intro-p-l

  **P&L** is always analysed on a specific period rather than since the
  company's founding (e.g. 2014, Q3 2012, …).

* .. rst-class:: intro-gross-profit

  **Gross profits** is revenues (sales, interest, royalties) minus cost of
  goods sold (raw materials, storage costs, production labor costs).

* .. rst-class:: intro-opex

  **Operating expenses** include administration, sales and R&D salaries as
  well as rent and utilities, legal costs, insurance, ... anything beyond
  fabrication itself.

* .. rst-class:: intro-balance

  The **Balance sheet** is a snapshot of the situation at a specific moment,
  listing the company's assets and its liabilities at that point.

* .. rst-class:: intro-assets

  **Assets** represent the company's wealth. A person's assets would be a
  house or car ("fixed" or "tangible" assets), bank accounts or cash ("liquid"
  or "current" assets). For a company, a client owing money is an asset. An
  employee is not an asset as it is not owned by the company (slavery being
  illegal under the International Covenant on Civil and Political Rights's
  article 8).

* .. rst-class:: intro-liabilities

  **Liabilities** are obligations from past events resulting in future use or
  transfer of current assets (utility bills, debts, payroll, unpaid
  suppliers).

* .. rst-class:: intro-equity

  **Equity** is assets which have no liability counterpart: shares, other
  stocks and surplus.

Assets have necessarily been financed via liabilities or equity: a company can
buy work space through profits, borrowing money or injected capital (for
shares).

A difference is made between assets (e.g. a building) and expenses (e.g. fuel)
in assets having intrinsic value over time, versus expenses having value in
them being consumed for the company to "work".

.. rst-class:: force-right accounts-table

.. figure:: images/accounts.png
   :align: center

   Assets = Liabilities + Equity

   What is owned has been financed through debts to reimburse or acquired
   assets (profits, capical).

Journals
========

Accounting journals record business financial transactions as *journal
entries* before posting entries to account-specific ledgers.

To each financial document (invoice, bank statement, receipt, loan agreement)
corresponds a *journal entry*.

Each journal entry is composed of multiple *journal items*.

Each journal item represents a single change (debit or credit) to a single
account.

In *double-entry bookkeeping*, a journal entry must be balanced by having the
sum of all its debits be equal to the sum of all its credits. A journal entry
is thus composed of at least two *journal items*, a debit and a credit, and
involves at least two accounts.

Conventionally, all *debits* in journal entries are written first, with the
account name flush with their column, followed by all *credits* indented
slightly (to match the position/offset of the corresponding amount
column). Journal entries can include a note providing context for the
transaction.

A journal entry almost always corresponds to a separate justifying document:
invoice, pay slip, …. Financial audits may include matching "hard" evidence to
journal entries.

Journal entries are generally triaged into accounting journals based on their
classification or frequency. Common accounting journals are:

* Sales journals with all client transactions
* Purchase journals with supplier transactions
* Bank journals with bank statements
* Cash journals for each cash account or post

.. rst-class:: force-right

Transactions
------------

.. h:div:: journals

   needs javascript

Ledgers
=======

Where journals are general transaction logs (usually contextual on transaction
type or frequency), ledgers are change logs for a single account (or as a
central repository for all account changes when it comes to *general
ledgers*).

.. todo:: is there a concept of ledger in Odoo?

Ledgers are collections of T-accounts which summarize operations affecting a
specific account. T-accounts are shaped thus because they are shaped as a T,
with debits under the left arm and all credits under the right arm of the T:

T-accounts can also be used as temporary scratch space when preparing
transactions by hand.

.. rst-class:: force-right

T-accounts for the transactions
-------------------------------

.. h:div:: t-accounts

   needs javascript

Chart of Accounts
=================

The **chart of accounts** lists all balance sheet (assets, liabilities) and
P&L (revenue, expense) accounts. These accounts are used to organize and
classify the finances of the company to better understand the company's
financial state, and the chart can be used to get a snapshot of a company's
financial period.

.. rst-class:: force-right

Balance = debit - credit
------------------------

.. h:div:: chart-of-accounts

   Requires javascript

Debit and credit
================

Accounting debit and credit don't necessarily match non-accountant intuition:
whether a credit may increase or decrease the amount in the account depending
on the account's nature, same for the debit: debits will increase debit
accounts and decrease credit accounts while credits will increase credit
accounts while decreasing debit accounts.

A way to find out what is debit and what is credit is to start from a known
operation.

For instance to know the entries associated to a client's invoice, remembering
that adding money to a bank account is a *debit* (in accounting terms):

* when the invoice is paid, money is added to the bank account -> debit on the
  bank account
* the bank statement on payment will thus be a debit on the bank account and a
  credit on the receivable
* the invoice must thus be a debit on receivable and a credit on income.

.. rst-class:: force-right

Follow the money
----------------

1. Customer Payment: Increase bank account, it's a Debit. Thus, the receivable
   is a credit.

   +---------------------+-----+------+
   |                     |Debit|Credit|
   +=====================+=====+======+
   |Bank Account         | 109 |      |
   +---------------------+-----+------+
   ||  Account Receivable|     | 109  |
   +---------------------+-----+------+
   ||   Payment by customer XXX       |
   +---------------------+-----+------+

2. As the invoice should compensate the receivable

   +---------------------+-----+------+
   |                     |Debit|Credit|
   +=====================+=====+======+
   |Account Receivable   | 109 |      |
   +---------------------+-----+------+
   ||  Income            |      | 100 |
   +---------------------+-----+------+
   ||  Taxes             |      |   9 |
   +---------------------+-----+------+
   ||   Invoicing of customer XXX     |
   +---------------------+-----+------+

→ The income should be negative (a credit)

Closing Fiscal Years
====================

While the balance sheet is a snapshot of the company's situation at a specific
moment (taking in account all events since the company's founding) P&L is
always analysed over a period.

In most jurisdictions, a fiscal year is a mandatory P&L report during which
profits and losses are tallied and committed: the P&L is reset to 0, and the
net income (revenue - expenses) is either distributed to shareholders (as
*dividends*) or moved to *retained earnings*. If the company loses money,
retained earnings may be negative (aka retained losses, accumulated losses or
accumulated deficit).

E.g. if a company had 1000€ revenue and 600€ expenses it had a 400€ net
income. At FY closure the following closure operation is applied: net income
(debit 400) to retained earnings (credit 400).

.. rst-class:: force-right

Ledger for a fiscal year
------------------------

.. h:div:: fiscal-year-closing

   +--------------------------+-------------------------+-------------------------+
   |                          |Debit                    |Credit                   |
   +==========================+=========================+=========================+
   |Cash                      | 800                     |                         |
   +--------------------------+-------------------------+-------------------------+
   |Accounts Receivable       | 200                     |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Revenue                |                         | 1000                    |
   +--------------------------+-------------------------+-------------------------+
   ||   Consolidation of revenues                                                 |
   +--------------------------+-------------------------+-------------------------+
   |                          |                         |                         |
   +--------------------------+-------------------------+-------------------------+
   |Revenue                   | 1000                    |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Income Summary         |                         | 1000                    |
   +--------------------------+-------------------------+-------------------------+
   |                          |                         |                         |
   +--------------------------+-------------------------+-------------------------+
   |Expenses                  | 600                     |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Cash                   |                         | 100                     |
   +--------------------------+-------------------------+-------------------------+
   ||  Accounts Payable       |                         | 500                     |
   +--------------------------+-------------------------+-------------------------+
   ||   Consolidation of expenses                                                 |
   +--------------------------+-------------------------+-------------------------+
   |                          |                         |                         |
   +--------------------------+-------------------------+-------------------------+
   |Income Summary            | 600                     |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Expenses               |                         | 600                     |
   +--------------------------+-------------------------+-------------------------+
   |                          |                         |                         |
   +--------------------------+-------------------------+-------------------------+
   |Income Summary            | 400                     |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Retained Earnings      |                         | 400                     |
   +--------------------------+-------------------------+-------------------------+
   |                          |                         |                         |
   +--------------------------+-------------------------+-------------------------+
   |Retained Earnings         | 200                     |                         |
   +--------------------------+-------------------------+-------------------------+
   ||  Dividends Payable      |                         | 200                     |
   +--------------------------+-------------------------+-------------------------+


Reconciliation
==============

Operations in a company's account are independent e.g. the invoices a company
emits and the payments it receives are separate journal entries and the
account operations are not correlated.

It's thus easy to know how much was sold (income account) and how the company
is still owed overall (receivables) but not how much a specific client owes
or which specific invoices are still unpaid (e.g. to send reminders).

Reconciliation is the process of correlating and linking journal items,
matching the credits and debits of a specific account.

The reconciliation process is thus: look for non-reconciliated items for an
account, and link debits with credits, possibly with multiple items on one
side. For instance a 121€ invoice (debit to the receceivable) with two
payments for 50€ and 71€ (credit to the receivable).

The system can then use reconciliation to automatically mark invoices as paid,
prepare and send reminders, flag accounting issues, …

.. h:div:: force-right

    An invoice is sent:

    +---------------------+-------------------------+------+
    |                     |Debit                    |Credit|
    +=====================+=========================+======+
    |Accounts Receivable  |.. h:div:: arrow         |      |
    |                     |                         |      |
    |                     |    100                  |      |
    +---------------------+-------------------------+------+
    ||  Sales             |                         |100   |
    +---------------------+-------------------------+------+
    ||   Sale to XXX                                       |
    +------------------------------------------------------+

    A payment is received:

    +-------------------------+-----+-------------------------+
    |                         |Debit|Credit                   |
    +=========================+=====+=========================+
    |Cash                     |90   |                         |
    +-------------------------+-----+-------------------------+
    |Rebate                   |10   |                         |
    +-------------------------+-----+-------------------------+
    ||  Accounts Receivable   |     |.. h:div:: arrow         |
    |                         |     |                         |
    |                         |     |    100                  |
    +-------------------------+-----+-------------------------+
    ||   Payment by XXX                                       |
    ||   Advance payment rebate                               |
    +---------------------------------------------------------+

Bank Reconciliation
===================

Bank reconciliation is the process of finding and explaining the differences
between the bank statements provided by banks and the company's own
accounting. It is used to both import the bank's operations into the internal
books (e.g. banking or overdraft fees) and discover issues (missing records,
checks not passed to banks, operation inversions, …).

There are two main ways to perform bank reconciliation:

Intermediate account
--------------------

Bank statements can be encoded in a dedicated "bank" account, which is then
reconciled normally.

.. h:div:: force-right

   Send a check:

   +--------------------+-----+------+
   |                    |Debit|Credit|
   +--------------------+-----+------+
   |Accounts Payable    |121  |      |
   +--------------------+-----+------+
   ||  Emitted Checks   |     |121   |
   +--------------------+-----+------+

   Get the bank statement and encode it:

   +-----------------+-----+------+
   |                 |Debit|Credit|
   +-----------------+-----+------+
   |Emitted Checks   |121  |      |
   +-----------------+-----+------+
   ||  Bank          |     | 121  |
   +-----------------+-----+------+

   Then reconcile on the Emitted Checks account, it's a normal reconciliation
   process between two journal items.

Bank reconciliation
-------------------

The operation can also be implemented specifically, this is used e.g. in the
US. In that situation, each act having to do with a potential bank account
operation (bank transfer, check, payment notification) is immediately encoded
to a journal entry and when the bank statement is received its entries are
correlated to the previously encoded entries.

In that case, the bank statement does not generate entries, it only points
to/validates previously created entries.

.. note:: In Odoo, that would be Pay Invoice -> Import Bank Statement, only
          added to master mid-january.
