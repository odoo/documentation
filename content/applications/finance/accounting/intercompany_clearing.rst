.. _intercompany_clearing:

=====================
Intercompany Clearing
=====================

The **Intercompany Clearing** feature automates accounting entries when one company receives a payment for an invoice issued by another company within the same database.

When a payment is processed by a secondary entity, Odoo automatically reconciles the customer's open invoice in the issuing company and creates balancing intercompany entries between both entities. This eliminates manual spreadsheet tracking and keeps intercompany accounts balanced in real time.


Configuration
=============

Before the system can automatically post intercompany entries, you must configure the default reciprocal accounts and journals for **every** participating company.

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. In the :guilabel:`Default Accounts` section, scroll to :guilabel:`Inter-Company Transactions` and ensure the feature is enabled.
#. Define the following fields for your currently active legal entity:

   * :guilabel:`Journal`: The dedicated journal used to log cross-entity clearing transfers.
   * :guilabel:`Account Payable`: The clearing payable account used to record debts owed to other entities within the group.
   * :guilabel:`Account Receivable`: The clearing receivable account used to record claims against other entities within the group.

#. Switch to your other company using the company switcher in the top right menu and **repeat the process**.

.. important::
   These settings must be populated in **all** involved entities.

.. example::
   * **Company A** issues a customer invoice for $100.
   * The customer pays via an online gateway belonging to **Company B**.
   * Upon receiving the payment, Odoo:

      #. Settles the customer receivable in **Companies A and B**.
      #. Reclassifies Company A's receivable as a claim against **Company B**.
      #. Records Company B's received funds as a payable owed to **Company A**.