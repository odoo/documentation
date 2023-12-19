=================
Chart of accounts
=================

The **chart of accounts (COA)** is the list of all the accounts used to record financial
transactions in the general ledger of an organization. The chart of accounts can be found under
:menuselection:`Accounting --> Configuration --> Chart of Accounts`.

When browsing your chart of accounts, you can sort the accounts by :guilabel:`Code`,
:guilabel:`Account Name`, or :guilabel:`Type`, but other options are available in the drop-down menu

.. image:: chart_of_accounts/drop-down.png
   :alt: Drop-down toggle button

.. image:: chart_of_accounts/chart-of-accounts-sort.png
   :alt: Group the accounts by type in Odoo Accounting

Configuration of an account
===========================

The country you select during the creation of your database (or additional company in your database)
determines which :doc:`fiscal localization package <../../fiscal_localizations>` is installed by
default. This package includes a standard chart of accounts already configured according to the
country's regulations. You can use it directly or set it according to your company's needs.

To create a new account, go to :menuselection:`Accounting --> Configuration --> Chart of Accounts`,
click :guilabel:`Create`, and fill in (at the minimum) the required fields
(:guilabel:`Code, Account Name, Type`).

.. warning::
   It is not possible to modify the **fiscal localization** of a company once a journal entry has
   been posted.

Code and name
-------------

Each account is identified by its :guilabel:`Code` and :guilabel:`Name`, which also indicate the
account's purpose.

.. _chart-of-account/type:

Type
----

Correctly configuring the **account type** is critical as it serves multiple purposes:

- Information on the account's purpose and behavior
- Generate country-specific legal and financial reports
- Set the rules to close a fiscal year
- Generate opening entries

To configure an account type, open the :guilabel:`Type` field's drop-down selector and select the
corresponding type from the following list:

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

Assets
~~~~~~

Some **account types** can **automate** the creation of :ref:`asset <assets-automation>` entries.
To **automate** entries, click :guilabel:`View` on an account line and go to the
:guilabel:`Automation` tab.

You have three choices for the :guilabel:`Automation` tab:

#. :guilabel:`No`: this is the default value. Nothing happens.
#. :guilabel:`Create in draft`: whenever a transaction is posted on the account, a draft entry is
   created but not validated. You must first fill out the corresponding form.
#. :guilabel:`Create and validate`: you must also select a :guilabel:`Deferred Expense Model`.
   Whenever a transaction is posted on the account, an entry is created and immediately validated.

Default taxes
-------------

In the :guilabel:`View` menu of an account, select a **default tax** to be applied when this
account is chosen for a product sale or purchase.

Tags
----

Some accounting reports require **tags** to be set on the relevant accounts. To add a tag, under
:guilabel:`View`, click the :guilabel:`Tags` field and select an existing tag or :guilabel:`Create`
a new one.

Account groups
--------------

**Account groups** are useful to list multiple accounts as *sub-accounts* of a bigger account and
thus consolidate reports such as the **Trial Balance**. By default, groups are handled automatically
based on the code of the group. For example, a new account `131200` is going to be part of the group
`131000`. You can attribute a specific group to an account in the :guilabel:`Group` field under
:guilabel:`View`.

Create account groups manually
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::
   Regular users should not need to create account groups manually. The following section is only
   intended for rare and advanced use cases.

To create a new account group, activate :ref:`developer mode <developer-mode>` and head to
:menuselection:`Accounting --> Configuration --> Account Groups`. Here, create a new group and enter
the :guilabel:`name, code prefix, and company` to which that group account should be available. Note
that you must enter the same code prefix in both :guilabel:`From` and :guilabel:`to` fields.

.. image:: chart_of_accounts/account-groups.png
   :alt: Account groups creation.

To display your **Trial Balance** report with your account groups, go to
:menuselection:`Accounting --> Reporting --> Trial Balance`, then open the :guilabel:`Options` menu
and select :guilabel:`Hierarchy and Subtotals`.

.. image:: chart_of_accounts/chart-of-accounts-groups.png
   :alt: Account Groups in the Trial Balance in Odoo Accounting

Allow reconciliation
--------------------

Some accounts, such as accounts made to record the transactions of a payment method, can be used for
the reconciliation of journal entries.

For example, an invoice paid with a credit card can be marked as :guilabel:`paid` if reconciled with
its payment. Therefore, the account used to record credit card payments needs to be configured as
**allowing reconciliation**.

To do so, check the :guilabel:`Allow Reconciliation` box in the account's settings, and
:guilabel:`Save`; or enable the button from the chart of accounts view.

.. image:: chart_of_accounts/chart-of-accounts-reconciliation.png
   :alt: Allow reconciliation for accounts in Odoo Accounting

Deprecated
----------

It is not possible to delete an account once a transaction has been recorded on it. You can make
them unusable by using the **Deprecated** feature: check the :guilabel:`Deprecated` box in the
account's settings, and :guilabel:`Save`.

.. seealso::
   * :doc:`cheat_sheet`
   * :doc:`../vendor_bills/assets`
   * :doc:`../vendor_bills/deferred_expenses`
   * :doc:`../customer_invoices/deferred_revenues`
   * :doc:`../../fiscal_localizations`
   * `Odoo Tutorials: Chart of accounts <https://www.odoo.com/slides/slide/chart-of-accounts-1630>`_
   * `Odoo Tutorials: Update your chart of accounts
     <https://www.odoo.com/slides/slide/update-your-chart-of-accounts-1658>`_
