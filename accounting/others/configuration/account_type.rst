==================================================
What is an account type and how do I configure it?
==================================================

What is an account type ? 
==========================

An account type is a name or code given to an account that indicates the
account's purpose.

In Odoo, Account Types are used for information purpose, to generate
country-specific legal reports, set the rules to close a fiscal year and
generate opening entries.

Basically Account types categorize general account with some specific
category according to its behaviour or purpose.

Which are the account types in Odoo ?
=====================================

Odoo covers all accounting types. Therefore, you cannot create new
account types. Just pick the one related to your account.

+-----------------------------+
| **List of account types**   |
+=============================+
| Receivable                  |
+-----------------------------+
| Payable                     |
+-----------------------------+
| Bank and Cash               |
+-----------------------------+
| Current Assets              |
+-----------------------------+
| Non-current Assets          |
+-----------------------------+
| Prepayments                 |
+-----------------------------+
| Fixed Assets                |
+-----------------------------+
| Current Liabilities         |
+-----------------------------+
| Non-current Liabilities     |
+-----------------------------+
| Equity                      |
+-----------------------------+
| Current Year Earnings       |
+-----------------------------+
| Other Income                |
+-----------------------------+
| Income                      |
+-----------------------------+
| Depreciation                |
+-----------------------------+
| Expenses                    |
+-----------------------------+
| Direct Costs                |
+-----------------------------+

How do I configure my accounts?
===============================

Account types are automatically created when installing a chart of
account. By default, Odoo provides a lot of chart of accounts, just
install the one related to your country.

It will install generic accounts. But if it does not cover all your
cases, you can create your own accounts too.

.. note::

	If you are a Saas User, your country chart of account is
	automatically installed.

To create a new accounts, go to the Accounting application. Open the
menu :menuselection:`Adviser --> Chart of Accounts`, the click on the
**Create** button.

.. image:: ./media/type01.png
   :align: center

.. demo:fields:: account.action_account_form

.. demo:action:: account.action_account_form

   View *Create Account* in our Online Demonstration
