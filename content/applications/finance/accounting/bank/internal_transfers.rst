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

When money is transferred from one bank or cash account to another, that amount appears as two
transactions on the corresponding journals, whether the transactions are created manually, via
import, or via :doc:`bank synchronization <bank_synchronization>`. When :ref:`reconciling the
transaction <accounting/reconciliation/reconcile>`, select the :guilabel:`Internal Transfers`
:doc:`reconciliation model <reconciliation_models>` button. This action writes the transaction off
to the :guilabel:`Internal Transfer` account.

.. important::
   Remember to reconcile both the outgoing transaction (on the journal that sends the payment) and
   the incoming transaction (on the journal that receives the payment) with the internal transfers
   account using the :guilabel:`Internal Transfers` reconciliation model button.

Once each bank journal's transaction is reconciled using the :guilabel:`Internal Transfers`
reconciliation model, the internal transfer account is balanced, and the balances of both bank
accounts are updated to reflect the transfer.

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
