==================
Internal transfers
==================

Internal money transfers can be handled in Odoo. At least two bank or cash accounts are needed to
make internal transfers.

.. seealso::
   :ref:`How to add an additional bank account <accounting/bank/create_account>`

Configuration
=============

An internal transfer account is automatically created on your database based on your company's
:doc:`localization <../../fiscal_localizations>` and depending on your country’s legislation. To
modify the default :guilabel:`Internal Transfer` account, go to :menuselection:`Accounting -->
Configuration --> Settings` and scroll down to the :guilabel:`Default Accounts` section.

Register an internal transfer from one bank to another
======================================================

When money is transferred from one bank or cash account to another, that amount appears as two
transactions on the corresponding journals, whether the transactions are created manually, via
import, or via :doc:`bank synchronization <bank_synchronization>`. When reconciling the transaction,
select the :guilabel:`Internal Transfers` :doc:`reconciliation model <reconciliation_models>`
button. This reconciliation model button writes the transaction off to the :guilabel:`Internal
Transfer` account.

.. tip::
   Remember to reconcile the transaction for both the outgoing transaction on the journal that sends
   the payment and the incoming transaction on the journal that receives the payment.

.. example::
   Take, for example, a transfer of $1000 from Bank A to Bank B:

   - Bank journal (Bank A)

     .. list-table::
        :header-rows: 1
        :stub-columns: 1

        * - **Account**
          - **Debit**
          - **Credit**
        * - Bank A account
          -
          - $1,000
        * - **Internal transfer account**
          - **$1,000**
          -

   - Bank journal (Bank B)


     .. list-table::
        :header-rows: 1
        :stub-columns: 1

        * - **Account**
          - **Debit**
          - **Credit**
        * - Bank B account
          - $1,000
          -
        * - **Internal transfer account**
          -
          - **$1,000**

.. seealso::
   :doc:`reconciliation`
   :doc:`reconciliation_models`
