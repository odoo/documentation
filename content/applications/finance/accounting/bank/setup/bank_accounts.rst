=============
Bank Accounts
=============

You can manage as many **Bank Accounts** as needed on your database. Configuring them well allows
you to make sure that all your banking data is up to date and ready for the reconciliation with your
*Journal Entries*.

In Odoo Accounting, each Bank Account is configured to have a dedicated *Journal* which is
configured to post all entries in a dedicated *Account*.

.. note:: Whenever you add a Bank Account, a dedicated journal and a dedicated account are
   automatically created and configured.

Every **Bank Journal** is displayed by default on the **Accounting Overview** in the form of a
convenient card. It includes action buttons that are displayed when appropriate.

.. image:: bank_accounts/bank_accounts_card.png
   :align: center
   :alt: Bank Journals Cards are displayed on the Accounting Overview in Odoo Accounting

.. _bank_accounts_add:

Add a new Bank Account
======================

You can either connect your bank account to your Odoo database, or configure your bank account
manually and :doc:`upload the bank statements manually <../feeds/bank_statements>`.

Bank Synchronization
--------------------

Connect your bank account to your database and have your bank statements synced automatically.

To synchronize a new bank account, go to :menuselection:`Accounting --> Configuration`, click on
*Add a Bank Account*, then find your bank in the list, click on *Connect*, and follow the
instructions on-screen.

.. note::
   :doc:`Click here <../../bank/feeds/bank_synchronization>` for more information about this bank
   synchronization.

.. image:: bank_accounts/bank_accounts_connect.png
   :align: center
   :alt: Select a bank institution in the list and connect it to Odoo Accounting

Manual configuration
--------------------

If your Bank Institution can’t be synchronized automatically, or if you prefer not to sync it with
your database, you may also configure your bank account manually.

To add a new bank account manually, go to :menuselection:`Accounting --> Configuration`, click on
*Add a Bank Account*, then on *Create it*, and fill out the form.

- **Name**: the bank account's name, as displayed on Odoo.
- **Account Number**: your bank account number (IBAN in Europe).
- **Bank**: click on *Create and Edit* to configure the bank's details. Add the bank institution's
  name and its Identifier Code (BIC or SWIFT).
- **Code**: this code is your Journal's *Short Code*, as displayed on Odoo. By default, Odoo creates
  a new Journal with this Short Code.
- **Journal**: This field is displayed if you have an existing Bank Journal that is not linked yet
  to a bank account. If so, then select the *Journal* you want to use to record the financial
  transactions linked to this bank account or create a new one by clicking on *Create and Edit*.

.. note::
   Odoo detects the bank account type (e.g., IBAN) and enables some features accordingly.

.. image:: bank_accounts/bank_accounts_manual.png
   :align: center
   :alt: Add manually a new bank account in Odoo Accounting
.. _bank_accounts_configuration:

Advanced configuration
======================

To edit an existing bank account, go to :menuselection:`Accounting --> Configuration --> Bank
Accounts`, and open the bank account you want to modify.

If you need to edit the bank account details, go to the *Bank Account* field and click on the
*External Link* button next to the list arrow. There, you can edit the bank account's number,
Account Holder, Account Holder Name, and your Bank Institution's details by clicking on the
*External Link* next to the *Bank* field. These details are used to register some payments.

You can configure which types of payments are enabled in the **Payment Method Types** section and
how the bank statements are recorded and posted in the **Bank Statements** section.

.. image:: bank_accounts/bank_accounts_configuration.png
   :align: center
   :alt: Advanced configuration of a bank account in Odoo Accounting

.. seealso::
   * :doc:`../../bank/feeds/bank_synchronization`
   * :doc:`../feeds/bank_statements`
   * `Odoo Tutorials: Accounting Basics <https://www.odoo.com/r/lsZ>`_