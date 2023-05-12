===========================================
Manage a bank account in a foreign currency
===========================================

In Odoo, every transaction is recorded in the default currency of the company, and reports are all
based on that default currency. When you have a bank account in a foreign currency, for every
transaction, Odoo stores two values:

-  The debit/credit in the currency of the *company*;
-  The debit/credit in the currency of the *bank account*.

Currency rates are updated automatically using the web services of a banking institution. By
default, Odoo uses the European Central Bank's web services but other options are available.

Configuration
=============

Activate multi-currencies
-------------------------

To work with multiple currencies, go to :menuselection:`Accounting --> Configuration --> Settings
--> Currencies` and tick :guilabel:`Multi-Currencies`. Under :guilabel:`Post Exchange difference
entries in:`, provide a :guilabel:`Journal`, a :guilabel:`Gain Account`, a :guilabel:`Loss Account`,
and then click on :guilabel:`Save`.

Configure currencies
--------------------

Once Odoo is configured to support multiple currencies, they are all created by default, but not
necessarily active. To activate the new currencies, click on :guilabel:`Activate Other Currencies`
under the :guilabel:`Multi-Currencies` setting or go to :menuselection:`Accounting --> Configuration
--> Accounting: Currencies`.

When the currencies are activated, you can choose to **automate** the currency rate update, or leave
it on **manual**. To configure the rate update, go back to :menuselection:`Accounting -->
Configuration --> Settings --> Currencies`, check :guilabel:`Automatic Currency Rates`, set
:guilabel:`Interval` to your desired frequency, and then click on :guilabel:`Save`. You also have
the option to choose the :guilabel:`Service` you wish to obtain currency rates from.

Click on the Update now button (:guilabel:`🗘`) besides the :guilabel:`Next Run` field to update
the currency rates manually.

Create a new bank account
-------------------------

In the accounting application, go to :menuselection:`Accounting --> Configuration --> Journals` and
create a new one. Enter a :guilabel:`Journal Name` and set the :guilabel:`Type` to `Bank`. In the
:guilabel:`Journal Entries` tab, enter a **short code**, a **currency**, and then finally click on
the :guilabel:`Bank Account` field to create a new account. In the pop-up window of the account
creation, enter a name, a code (ex.: 550007), set its type to `Bank and Cash`, set a currency type,
and save. When you are back on the **journal**, click on the :guilabel:`Account Number` field, and
in the pop-up window, fill out the :guilabel:`Account Number`, :guilabel:`Bank` of your account, and
save.

.. image:: foreign_currency/foreign-journal.png
   :align: center
   :alt: Example of a created bank journal.

Upon creation of the journal, Odoo automatically links the bank account to the journal. It can be
found under :menuselection:`Accounting --> Configuration --> Accounting: Chart of Accounts`.

Vendor bill in a foreign currency
=================================

To pay a bill in a foreign currency, simply select the currency next to the :guilabel:`Journal`
field and register the payment. Odoo automatically creates and posts the foreign **exchange gain or
loss** as a new journal entry.

.. image:: foreign_currency/foreign-bill-currency.png
   :align: center
   :alt: How to set a bill currency.

.. note::
   Note that you can pay a foreign bill with another currency. In that case, Odoo automatically
   converts between the two currencies.

Unrealized Currency Gains/Losses Report
=======================================

This report gives an overview of all unrealized amounts in a foreign currency on your balance sheet,
and allows you to adjust an entry or manually set an exchange rate. To access this report, go to
:menuselection:`Reporting --> Management: Unrealized Currency Gains/Losses`. From here, you have
access to all open entries in your **balance sheet**.

.. image:: foreign_currency/foreign-gains-losses.png
   :align: center
   :alt: View of the Unrealized Gains/Losses journal.

If you wish to use a different currency rate than the one set in :menuselection:`Accounting -->
Configuration --> Settings --> Currencies`, click the :guilabel:`Exchange Rates` button and change
the rate of the foreign currencies in the report.

.. image:: foreign_currency/foreign-exchange-rates.png
   :align: center
   :alt: Menu to manually change exchange rates.

When manually changing **exchange rates**, a yellow banner appears allowing you to reset back to
Odoo's rate. To do so, simply click on :guilabel:`Reset to Odoo's Rate`.

.. image:: foreign_currency/foreign-reset-rates.png
   :align: center
   :alt: Banner to reset back to Odoo's rates.

In order to update your **balance sheet** with the amount of the :guilabel:`adjustment` column,
click on the :guilabel:`Adjustment Entry` button. In the pop-up window, select a
:guilabel:`Journal`, :guilabel:`Expense Account` and :guilabel:`Income Account` to calculate and
process the **unrealized gains and losses**.

You can set the date of the report in the :guilabel:`Date` field. Odoo automatically reverses the
booking entry to the date set in :guilabel:`Reversal Date`.

Once posted, the :guilabel:`adjustment` column should indicate `0.00`, meaning all **unrealized
gains/losses** have been adjusted.

.. image:: foreign_currency/foreign-adjustment.png
   :align: center
   :alt: Unrealized Currency Gains/Losses report once adjusted.
