===========================================
Manage a bank account in a foreign currency
===========================================

In Odoo, every transaction is recorded in the default currency of the company, and reports are all
based on that default currency. With a bank account in a foreign currency, for every
transaction, Odoo stores two values:

-  The debit/credit in the currency of the company.
-  The debit/credit in the currency of the bank account.

Currency rates are updated automatically using a banking institution's web services. By default,
Odoo uses the European Central Bank's web services but other options are available.

.. _accounting/foreign_currency/config:

Configuration
=============

.. _accounting/foreign_currency/config-currencies:

Configure currencies
--------------------

To work with multiple currencies, go to
:menuselection:`Accounting --> Configuration --> Currencies`, then
:doc:`activate and configure new currencies <../get_started/multi_currency>`. Set up manual or
automatic :ref:`currency rate <multi-currency/config-rates>` updates and define the accounts and
journals used to record gains or losses incurred on
:ref:`exchange rate differences <multi-currency/config-exch-diff>`.

.. seealso::
   :doc:`Multi-currency system <../get_started/multi_currency>`

.. _accounting/foreign_currency/create-bank-journal-and-account:

Create bank journals and accounts in foreign currencies
-------------------------------------------------------

To set up a bank account in a foreign currency, first :ref:`create a new bank journal
<accounting/journals/bank>` via :menuselection:`Accounting --> Configuration --> Journals`. Set the
journal's currency to the foreign currency, then create a new bank account:

#. In the :guilabel:`Bank Account` field of the journal, enter the name as it should appear in the
   chart of accounts.
#. Click :guilabel:`Create and edit`.
#. In the resulting :guilabel:`Create Default Account` window, :ref:`configure the account
   <chart-of-account/create>`.
#. Optionally, set the :guilabel:`Currency` on the bank account to the desired foreign currency.
   
   - Setting a currency on an account in the chart of accounts restricts the journal items targeting
     the account to the selected currency.
   - Leaving the :guilabel:`Currency` field blank on an account in the chart of accounts allows
     journal items of any currency to target that account. In this case, journal items in the
     foreign currency bank journal are limited to the currency specified on the journal itself. To
     allow increased flexibility, leaving the :guilabel:`Currency` field blank is recommended.

#. Click :guilabel:`Save`.

On the journal, add a :ref:`bank <accounting/batch/create-bank>` and a :ref:`bank account
<accounting/batch/create-bank-account>` if necessary (such as in the case of creating batch payment
files).

.. seealso::
   - :doc:`Journals <../get_started/journals>`
   - :ref:`Manage bank and cash accounts <accounting/bank/manage>`

.. _accounting/foreign_currency/report:

Unrealized Currencies report
============================

The :guilabel:`Unrealized Currencies` report gives an overview of all unrealized amounts in a
foreign currency on the balance sheet, and allows  an exchange rate to be set manually or entries to
be adjusted. To access the report, go to
:menuselection:`Accounting --> Review --> Unrealized Currencies`.

.. image:: foreign_currency/foreign-gains-losses.png
   :alt: View of the Unrealized Gains/Losses journal.

To use a different currency rate than the one set in
:menuselection:`Accounting --> Configuration --> Currencies`, click the :guilabel:`Exchange Rates`
button and change the rate of the foreign currencies in the report.

When manually changing exchange rates, a yellow banner appears allowing the rate to be reset to
Odoo's rate. To do so, simply click :guilabel:`Reset to Odoo's Rate`.

To update the balance sheet with the amount of the :guilabel:`Adjustment` column,
click the :guilabel:`Adjustment Entry` button in the top-left corner. In the pop-up window,
select a :guilabel:`Journal`, an :guilabel:`Expense Account` and an :guilabel:`Income Account` to
calculate and process the unrealized gains and/or losses.

You can set the date of the report in the :guilabel:`Date` field. Odoo automatically reverses the
booking entry to the date set in :guilabel:`Reversal Date`.

Once posted, the :guilabel:`Adjustment` column should indicate `0.00`, meaning all unrealized
gains and/or losses have been adjusted.

