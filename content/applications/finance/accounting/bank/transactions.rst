============
Transactions
============

Importing transactions from your bank statements allows keeping track of bank account transactions
and reconciling them with the ones recorded in your accounting.

:doc:`Bank synchronization <bank_synchronization>` automates the process. However, if you do not
want to use it or if your bank is not yet supported, other options exist:

- :ref:`Import bank transactions <import-statements>` delivered by your bank;
- :ref:`Register bank transactions <register-transactions>` manually.

.. _import-statements:

Import transactions
===================

Odoo supports multiple file formats to import transactions:

- SEPA recommended Cash Management format (CAMT.053);
- Comma-separated values (.CSV);
- Open Financial Exchange (.OFX);
- Quicken Interchange Format (.QIF);
- Belgium: Coded Statement of Account (.CODA).

To import a file, go to the :guilabel:`Accounting Dashboard`, and in the :guilabel:`Bank` journal,
click on :guilabel:`Import Transactions`.

.. image:: transactions/import-transactions.png
   :align: center
   :alt: Import bank transactions from bank journal

Next, select the file and upload it.

After setting the necessary formatting options and mapping the needed columns, you can run a
:guilabel:`Test` and :guilabel:`Import` your bank transactions.

.. _register-transactions:

Register bank transactions manually
===================================

You can also record your bank transactions manually. To do so, go to :guilabel:`Accounting
Dashboard`, click on the :guilabel:`Bank` journal, and then on :guilabel:`New`. Make sure to fill
out the :guilabel:`Partner` and :guilabel:`Label` fields to ease the reconciliation process.
