:show-content:

======================
Bank and cash accounts
======================

You can manage as many bank or cash accounts as needed on your database. Configuring them correctly
allows you to have all your banking data up-to-date and ready for :doc:`reconciliation
<bank/reconciliation>` with your journal entries.

In Odoo Accounting, each bank account has a dedicated journal set to post all entries in a dedicated
account. Both the journal and the account are automatically created and configured whenever you add
a bank account.

.. note::
   :ref:`Cash journals <accounting/journals/cash>` and accounts must be configured manually.

Bank journals are displayed by default on the :guilabel:`Accounting Dashboard` in the form of cards
which include action buttons.

.. image:: bank/card.png
   :alt: Bank journals are displayed on the Accounting Dashboard and contain action buttons

.. _accounting/bank/manage:

Manage bank and cash accounts
=============================

Connect a bank for automatic synchronization
--------------------------------------------

To connect your bank account to your database, go to the :guilabel:`Accounting Dashboard` and on the
kanban card of an unconnected bank, click :guilabel:`Search over 26000 banks`. Select your bank from
the list, click on :guilabel:`Connect`, and follow the instructions.

.. seealso::
   :doc:`bank/bank_synchronization`

.. _accounting/bank/create:

Create a bank account
---------------------

If your banking institution is not available in Odoo, or if you don't want to connect your bank
account to your database, you can configure your bank account manually.

To manually add a bank account, go to the :guilabel:`Accounting Dashboard` and on the kanban card of
an unconnected bank, click :guilabel:`Search over 26000 banks`. Then, click on :guilabel:`Record
transactions manually` (at the bottom right), fill out the bank information, and click
:guilabel:`Create`.

.. note::
   - Odoo automatically detects the bank account type (e.g., IBAN) and enables some features
     accordingly.
   - A default :ref:`bank journal <accounting/journals/bank>` is available and can be used to
     configure your bank account by going to :menuselection:`Accounting --> Configuration -->
     Accounting: Journals --> Bank`. Open it and edit the different fields to match your bank
     account information.

.. toctree::
   :titlesonly:

   bank/bank_synchronization
   bank/transactions
   bank/reconciliation
   bank/reconciliation_models
   bank/internal_transfers
   bank/foreign_currency
   bank/loans
