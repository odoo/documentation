====================
Manage user accounts
====================

In Odoo's **Lunch** application, users pay for products directly from their **Lunch** app account.
For funds to appear in their account, a **Lunch** app manager must transfer funds into each user's
account.

.. important::
   To add funds and manage user accounts, the user must have *Administrator* :doc:`access rights
   <../../general/users/access_rights/>` for the **Lunch** application. Access rights can be managed
   by navigating to the :menuselection:`Settings app` app and clicking :icon:`oi-arrow-right`
   :guilabel:`Manage Users`. Click on a user to view their individual access rights.

The **Lunch** application does **not** directly interface in any way with software or products
linked to any monetary accounts or billing. Money **cannot** be transferred from users' bank
accounts, nor can users' credit cards be charged.

Odoo's **Lunch** application **only** allows for manual entries of cash exchanges that are handled
by the **Lunch** app manager. It is up to each individual company to create the method with which
lunch accounts are replenished.

.. example::
   Some examples of how money can be organized and transferred within a company:

   - Cash is handed to the **Lunch** app manager, who then updates the user's account.
   - Money is automatically deducted from the user's paychecks, then the **Lunch** app manager
     updates the account when paychecks are issued. This requires :ref:`adding a salary attachment
     <payroll/worked-days-inputs>` for the user's payslip in the **Payroll** app.
   - Companies can sell "lunch tickets" at a set price (for example, one ticket costs $5.00). Users
     can purchase tickets from a **Lunch** app manager, who then updates the user's account.

.. _lunch/cash-moves:

Cash Moves
==========

To add funds to user accounts, each cash move must be individually logged. To view all cash move
records, or create a new cash move, navigate to :menuselection:`Lunch app --> Manager --> Cash
Moves`. Doing so reveals the :guilabel:`Cash Moves` dashboard.

On the :guilabel:`Cash Moves` dashboard, all cash moves are presented in a default list view,
displaying each record's :guilabel:`Date`, :guilabel:`User`, :guilabel:`Description`, and
:guilabel:`Amount`. The total of all the cash moves is displayed at the bottom of the
:guilabel:`Amount` column.

.. image:: user-accounts/cash.png
   :alt: The list view of all cash moves.

Add funds
---------

To add funds to a lunch account, click the :guilabel:`New` button, located in the top-left corner of
the :guilabel:`Cash Moves` dashboard.

A blank :guilabel:`Cash Moves` form loads. Enter the following information on the form:

- :guilabel:`User`: Select the user depositing cash into their account from the drop-down menu. If
  the user is not in the database, they can be created by typing their name in the :guilabel:`User`
  field, and clicking either :guilabel:`Create "user"` or :guilabel:`Create and edit...` to create
  the user and edit the :guilabel:`Create User` form.
- :guilabel:`Date`: Select the date the transaction occurred using the calendar popover.
- :guilabel:`Amount`: Enter the amount being added to the lunch account.
- :guilabel:`Description`: Enter a brief description of the transaction.

.. image:: user-accounts/cash-move-form.png
   :alt: The cash move form filled out for a transaction of $25.00.

Control Accounts
================

The main *Control Accounts* dashboard provides an overview of every transaction in the **Lunch**
app, including all cash deposits and purchases. To access this dashboard, navigate to
:menuselection:`Lunch app --> Manager --> Control Accounts.`

Transactions are grouped :guilabel:`By Employee`, and listed alphabetically by the user's first
name. Their available balance is displayed in the :guilabel:`Amount` column. This takes into account
all deposits and transactions to their lunch account.

Individual transactions are hidden in the default view. To view all transactions for a specific
user, click the :icon:`fa-caret-right` :guilabel:`(triangle)` icon to the left of their name to
expand the full list of transactions associated with their lunch account.

Each line includes the transaction :guilabel:`Date`, :guilabel:`User`, :guilabel:`Description`, and
:guilabel:`Amount`.

.. image:: user-accounts/control-accounts.png
   :alt: The Control Accounts dashboard with two employee's transactions expanded.

.. important::
   The :guilabel:`Control Accounts` dashboard is a view-only list of transactions within the
   **Lunch** app, and does **not** allow modifications to be made to any records listed.

   Cash moves can be modified through the :ref:`Cash Moves <lunch/cash-moves>` dashboard, only.

   Product-related records **cannot** be modified.
