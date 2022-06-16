====================
Outstanding accounts
====================

By default, payments are registered through transitory accounts named **outstanding accounts**,
before being recorded in your bank account.

- An **outstanding payments account** is where outgoing payments are posted until they are linked
  with a withdrawal from your bank statement.
- An **outstanding receipts account** is where incoming payments are posted until they are linked
  with a deposit from your bank statement.

These accounts should be of :ref:`type <chart-of-account/type>` :guilabel:`Current Assets`.

.. note::
   The movement from an outstanding account to a bank account is done automatically when you
   reconcile the bank account with a bank statement.

Configuration
=============

Default accounts configuration
------------------------------

The outstanding accounts are defined by default. If necessary, you can update them by going to
:menuselection:`Accounting --> Configuration --> Settings --> Default Accounts` and update your
:guilabel:`Outstanding Receipts Account` and :guilabel:`Outstanding Payments Account`.

Bank and cash journals configuration
------------------------------------

You can also set specific outstanding accounts for any journal with the :ref:`type
<chart-of-account/type>` :guilabel:`Bank` or :guilabel:`Cash`.

From your :guilabel:`Accounting Dashboard`, click on the menu selection ⋮ of the journal you want to
configure, and click on :guilabel:`Configuration`, then open the :guilabel:`Incoming/Outgoing
Payments` tab. To display the outstanding accounts column, click on the toggle button and check the
:guilabel:`Outstanding Receipts/Payments accounts`, then update the account.

.. image:: outstanding_accounts/toggle-button.png
   :align: center
   :alt: Select the toggle button and click on outstanding Accounts

.. note::
   - If you do not specify an outstanding payments account or an outstanding receipts account for a
     specific journal, Odoo uses the default outstanding accounts.
   - If your main bank account is added as an outstanding receipts account or outstanding payments
     account, when a payment is registered, the invoice or bill's status is directly set to
     :guilabel:`Paid`.
