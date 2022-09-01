=================
Chart of accounts
=================

The **chart of accounts (COA)** is the list of all the accounts used to record financial
transactions in the general ledger of an organization.

The accounts are usually listed in the order of appearance in the financial reports. Most of the
time, they are listed as follows :

- Balance Sheet accounts:

  - Assets
  - Liabilities
  - Equity

- Profit & Loss:

  - Income
  - Expense

When browsing your chart of accounts, you can filter the accounts by number, in the left column, and
also group them by :guilabel:`Account Type`.

.. image:: chart_of_accounts/chart-of-accounts.png
   :align: center
   :alt: Group the accounts by type in Odoo Accounting

Configuration of an account
===========================

The country you select at the creation of your database (or additional company on your database)
determines which **fiscal localization package** is installed by default. This package includes a
standard chart of accounts already configured according to the country's regulations. You can use
it directly or set it according to your company's needs.

.. warning::
   It is not possible to modify the **fiscal localization** of a company once a journal entry has
   been posted.

To create a new account, go to :menuselection:`Accounting --> Configuration --> Chart of Accounts`,
click on :guilabel:`Create`, and fill out the form.

Code and name
-------------

Each account is identified by its **code** and **name**, which also indicates the account's purpose.

.. _chart-of-account/type:

Type
----

Correctly configuring the **account type** is critical as it serves multiple purposes:

- Information on the account's purpose and behavior
- Generate country-specific legal and financial reports
- Set the rules to close a fiscal year
- Generate opening entries

To configure an account type, open the :guilabel:`Type` field's drop-down selector and select the
right type among the following list:

+---------------+--------------+-------------------------+
| Report        | Category     | Account Types           |
+===============+==============+=========================+
| Balance Sheet | Assets       | Receivable              |
|               |              +-------------------------+
|               |              | Bank and Cash           |
|               |              +-------------------------+
|               |              | Current Assets          |
|               |              +-------------------------+
|               |              | Non-current Assets      |
|               |              +-------------------------+
|               |              | Prepayments             |
|               |              +-------------------------+
|               |              | Fixed Assets            |
|               +--------------+-------------------------+
|               | Liabilities  | Payable                 |
|               |              +-------------------------+
|               |              | Credit Card             |
|               |              +-------------------------+
|               |              | Current Liabilities     |
|               |              +-------------------------+
|               |              | Non-current Liabilities |
|               +--------------+-------------------------+
|               | Equity       | Equity                  |
|               |              +-------------------------+
|               |              | Current Year Earnings   |
+---------------+--------------+-------------------------+
| Profit & Loss | Income       | Income                  |
|               |              +-------------------------+
|               |              | Other Income            |
|               +--------------+-------------------------+
|               | Expense      | Expense                 |
|               |              +-------------------------+
|               |              | Depreciation            |
|               |              +-------------------------+
|               |              | Cost of Revenue         |
+---------------+--------------+-------------------------+
|Other          | Other        | Off-Balance Sheet       |
+---------------+--------------+-------------------------+

Assets, deferred expenses, and deferred revenues automation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some **account types** display a new field **to automate** the creation of :ref:`assets
<assets-automation>` entries, :ref:`deferred expenses <deferred-expenses-automation>` entries,
and :ref:`deferred revenues <deferred-revenues-automation>` entries.

You have three choices for the :guilabel:`Automation` field:

#. :guilabel:`No`: this is the default value. Nothing happens.
#. :guilabel:`Create in draft`: whenever a transaction is posted on the account, a draft entry is
   created, but not validated. You must first fill out the corresponding form.
#. :guilabel:`Create and validate`: you must also select a **model**. Whenever a transaction is
   posted on the account, an entry is created and immediately validated.

Default taxes
-------------

Select a **default tax** that will be applied when this account is chosen for a product sale or
purchase.

Tags
----

Some accounting reports require **tags** to be set on the relevant accounts. By default, you can
choose among the tags that are used by the *Cash Flow Statement*.

Account groups
--------------

**Account groups** are useful to list multiple accounts as *sub-accounts* of a bigger account and
thus consolidate reports such as the **Trial Balance**. By default, groups are handled automatically
based on the code of the group. For example, a new account `131200` is going to be part of the group
`131000`.

Create account groups manually
------------------------------

.. note::
   Regular users should not need to create account groups manually. The following section is only
   intended for rare and advanced use cases.

To create a new account group, :ref:`developer mode <developer-mode>` and head to
:menuselection:`Accounting app --> Configuration --> Account Groups`. Here, create a new group and
enter the :guilabel:`name, code prefix, and company` to which that group account should be
available. Note that you must enter the same code prefix in both :guilabel:`From` and :guilabel:`to`
fields.

.. image:: chart_of_accounts/account-groups.png
   :align: center
   :alt: Account groups creation.

To display your **Trial Balance** report with your account groups, go to :menuselection:`Accounting
app-->Reporting-->Trial Balance`, then open the :guilabel:`Options` menu and select
:guilabel:`Hierarchy and Subtotals`.

.. image:: chart_of_accounts/trial-balance.png
   :align: center
   :alt: Account Groups in the Trial Balance in Odoo Accounting

Allow reconciliation
--------------------

Some accounts, such as accounts made to record the transactions of a payment method, can be used for
the reconciliation of journal entries.

For example, an invoice paid with a credit card can be marked as :guilabel:`paid` if reconciled with
its payment. Therefore, the account used to record credit card payments needs to be configured as
**allowing reconciliation**.

To do so, check the :guilabel:`Allow Reconciliation` box in the account's settings, and save.

Deprecated
----------

It is not possible to delete an account once a transaction has been recorded on it. You can make
them unusable by using the **Deprecated** feature.

To do so, check the :guilabel:`Deprecated` box in the account's settings, and save.

.. seealso::
   * :doc:`../../payables/supplier_bills/assets`
   * :doc:`../../payables/supplier_bills/deferred_expenses`
   * :doc:`../../receivables/customer_invoices/deferred_revenues`
   * :doc:`../../fiscal_localizations/overview/fiscal_localization_packages`
