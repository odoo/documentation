===============
Shared Accounts
===============

In Odoo, accounts can be shared between multiple companies. This feature is particularly useful for
businesses that operate under a **multi-company structure** and might benefit from a
**unified chart of accounts**.

Two ways are available to set up said feature: the :ref:`basic setup <setting_up_shared_accounts>`
or using the :ref:`merge tool <merge_tool>`.

The merge tool allows existing multi-company environments to use the new shared accounts feature.
An :ref:`unmerge tool <unmerge_tool>` is also available to discontinue its use.

This feature can also facilitate the :doc:`consolidation` of financial data across a multi-company
environment, providing a **global view** of the financial situation for a group with child
companies under a parent company.

.. _shared_accounts_benefits:

Benefits of Shared Accounts
===========================

1. Lighter load of accounts to handle
-------------------------------------

The main benefit of the shared accounts feature is to **reduce the amount of accounts** that have
to be handled by the main accountant of a multi-company environment.

.. example::
   In environments with two companies using the same country’s generic chart of accounts, each
   account used to appear twice. With the shared accounts feature, each account can now appear only
   once.

2. Simplified and Cleaner Reporting
-----------------------------------

The shared accounts feature **simplifies audit reports** while **keeping all data visible and
accessible**, making the accounts easier to understand and manage.

.. example::
   In the balance sheet report, shared accounts between a company and its child company appear in a
   single group with a column differentiating which company each line refers to.

3. Macro and Micro Management
-----------------------------

The shared accounts feature allows accountants to manage accounts at the appropriate level for each
company. Main accountants can oversee the accounts of all child companies, clearly identifying each
account’s purpose, even if the codes differ across companies. Meanwhile, child companies'
accountants can manage their own accounts without worrying about their impact on other companies
using the same account.

.. example::
   An accountant can modify the account's properties for a single company without affecting the
   others, providing flexibility in account management.

.. _setting_up_shared_accounts:

Setting Up Shared Accounts
==========================

Enable Multi-Company
--------------------

To enable account sharing and :doc:`multi-company </applications/general/multi_company>` features,
set up multiple companies in the database.

Configure Shared Accounts
-------------------------

To configure a shared account, go to :menuselection:`Accounting --> Configuration --> Chart of
Accounts` and click :guilabel:`View` on the account line. In the :guilabel:`Mapping` tab, enter
a 6-digit code in the corresponding company :guilabel:`Code` column to share the account.

The account will then be included in the :doc:`consolidation` process. To make it available for
invoices in companies where a code has been configured, go to the :guilabel:`Accounting` tab and
add a second company to the list of :guilabel:`Companies` that can use this account.

.. _merge_tool:

Merge Tool
==========

Use cases
---------

The merging tool simplifies creating shared accounts and is particularly useful when a
**multi-company environment has been set up** with separate accounts that need to be merged.

Steps
-----

To use the merge tool, select all the companies with an account that needs to be merged in the
company selector in the top right corner of the screen.

.. image:: shared_accounts/shared_accounts_merge_tool_select_companies.png
   :alt: Selecting all companies that have accounts to be merged.

Then, go to :menuselection:`Accounting --> Configuration --> Chart of Accounts` and select the
accounts to merge. Click the :icon:`fa-cog` :guilabel:`Actions` menu and select :guilabel:`Merge
accounts`.

In the :guilabel:`Merge accounts` window, enable the :guilabel:`Group by name?` option if needed and
click :guilabel:`Merge`.

The selected accounts are then merged into a single shared account, accessible by all the chosen
companies, just as if the account had been directly created to be shared.

.. _unmerge_tool:

Unmerge Tool
============

Use cases
---------

The unmerge tool simplifies stopping the sharing of specific accounts and allows **dissociating
accounts from certain companies** without losing their data.

Steps
-----

To unmerge accounts, select a company with a shared account in the top right corner of the screen.
Then, go to :menuselection:`Accounting --> Configuration --> Chart of Accounts` and select the
account to unmerge. Click the :icon:`fa-cog` :guilabel:`Actions` menu and select
:guilabel:`Unmerge accounts`.

An :guilabel:`Odoo Warning` confirmation pop-up window will appear, listing how the accounts will
be split.

.. image:: shared_accounts/shared_accounts_unmerge_tool_confirmation_wizard.png
   :alt: Confirmation wizard for the Unmerge Tool of the shared accounts feature.

A new account linked to each company will be created for the previously shared account.
