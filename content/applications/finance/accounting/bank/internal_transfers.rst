==================
Internal transfers
==================

Internal money transfers can be handled in Odoo. At least two bank or cash accounts are needed to
make internal transfers.

.. seealso::
   :ref:`How to add an additional bank account <accounting/bank/create>`

Configuration
=============

An internal transfer account is automatically created in your database based on your company's
:doc:`localization <../../fiscal_localizations>` and depending on your country’s legislation. To
modify the default :guilabel:`Internal Transfer` account, go to :menuselection:`Accounting -->
Configuration --> Settings` and scroll down to the :guilabel:`Default Accounts` section.

While it is possible to manually :ref:`write off <accounting/reconciliation/set-account>` internal
transfers to this internal transfers account, it is recommended to instead use the
:guilabel:`Internal Transfers` :doc:`reconciliation model <reconciliation_models>`. If the
:guilabel:`Internal Transfers` reconciliation model does not exist, create it manually:

#. :ref:`Create a new reconciliation model <accounting/rec-models/config>`, and fill in the
   :guilabel:`Name` field (e.g., `Internal Transfers`).
#. Do not select specific :ref:`matching conditions <accounting/rec-models/conditions>`, and leave
   the model set to :guilabel:`Manual` to ensure the model is available to be selected for all
   transactions.
#. In the :guilabel:`Counterpart Items` tab, click :guilabel:`Add a line`.
#. Set the :guilabel:`Account` to the internal transfer account (the specific account name and code
   vary by localization).
#. Leave the :guilabel:`Amount Type` and :guilabel:`Amount` as their default values of
   :guilabel:`Percentage of balance` and :guilabel:`100`.
#. Add a :guilabel:`Label` to identify transactions that are matched using this reconciliation model
   (e.g., `Internal Transfers`).

Register an internal transfer from one bank to another
======================================================

.. note::
   For the sake of clarity, this process is explained with the incoming :doc:`transaction
   <transactions>` being reconciled with the :guilabel:`Internal Transfers` reconciliation model
   button and the outgoing transaction then being reconciled with the journal item of the incoming
   transaction. It is possible to switch which transaction is reconciled with the
   :guilabel:`Internal Transfers` reconciliation model button without any negative implications.

When money is transferred from one bank or cash account to another, that amount appears as one
incoming :doc:`transaction <transactions>` and one outgoing transaction in their corresponding
journals, whether the transactions are created manually, via import, or via :doc:`bank
synchronization <bank_synchronization>`. :ref:`Reconcile <accounting/reconciliation/reconcile>` the
two transactions as follows:

#. Reconcile the incoming transaction by selecting the :guilabel:`Internal Transfers`
   :doc:`reconciliation model <reconciliation_models>` button. This action writes the transaction
   off to the :guilabel:`Internal Transfers` account.
#. Reconcile the outgoing transaction with the journal item of the incoming transaction:

   a. Click the :icon:`fa-ellipsis-v` (vertical ellipsis icon).
   #. Click :guilabel:`Reconcile`.
   #. In the :guilabel:`Search: Journal Items to Match` popup, click the journal item of the
      incoming transaction. This action balances the :guilabel:`Internal Transfers` account and
      links the two transactions.

.. example::
   When transferring $1,000 from Bank Account A to Bank Account B, each of the two bank journals has
   one journal entry:

   - The outgoing transaction in the Bank Account A journal:

     .. list-table::
        :header-rows: 1
        :stub-columns: 1

        * - **Account**
          - **Debit**
          - **Credit**
        * - Bank Account A
          -
          - $1,000
        * - **Internal transfer account**
          - **$1,000**
          -

   - The incoming transaction in the Bank Account B journal:


     .. list-table::
        :header-rows: 1
        :stub-columns: 1

        * - **Account**
          - **Debit**
          - **Credit**
        * - Bank Account B
          - $1,000
          -
        * - **Internal transfer account**
          -
          - **$1,000**

.. seealso::
   - :doc:`reconciliation`
   - :doc:`reconciliation_models`
