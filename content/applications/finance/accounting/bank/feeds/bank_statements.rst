===============
Bank statements
===============

Importing your bank statements in Odoo Accounting allows you to keep track of the financial
movements that occur on your bank accounts and reconcile them with the transactions recorded in your
accounting.

We recommend you use bank synchronization for more efficiency. Please read the related
documentation: :doc:`bank_synchronization`.

However, if you don't want to use bank synchronization or if your bank is not a supported
institution, you still have other options:

#. Import the bank statement files delivered by your bank
#. Register the bank statements manually

Import bank statements files
============================

Odoo supports multiple file formats to import bank statements:

- SEPA recommended Cash Management format (CAMT.053)
- Comma-separated values (.CSV)
- Open Financial Exchange (.OFX)
- Quicken Interchange Format (.QIF)
- Belgium: Coded Statement of Account (.CODA)

To import them, go to :menuselection:`Accounting --> Overview --> Bank`, click on *Import
Statements*, or on the three dots, and then on *Import Statement*.

.. image:: bank_statements/bank-statements-01.png
   :align: center
   :alt: Import a bank statement file in Odoo Accounting

Next, select the file you want to import and click on *Import*.

Odoo opens an **import widget** to help you set the **Formatting Options** and **map** the
different columns you want to import.

.. image:: bank_statements/bank-statements-02.png
   :align: center
   :alt: Register bank statements manually in Odoo Accounting

.. note::
   Quicken Interchange Format (.QIF) is an older file format that is no longer supported since 2005. 
   If possible, prefer OFX files over QIF.

Register bank statements manually
=================================

If needed, you can also record your bank statements manually.

To do so, go to :menuselection:`Accounting --> Overview --> Bank`, click on *Create Statements*, or
on the three dots, and then on *New Statement*.

Add a new line for each transaction written on the original bank statement.

To ease the reconciliation process, make sure to fill out the *Partner* field. You can also write
the payments’ references in the *Label* field.

.. image:: bank_statements/bank-statements-03.png
   :align: center
   :alt: Register bank statements manually in Odoo Accounting

.. note::
   The *Ending Balance* and the *Computed Balance* should have the same amount. If it is not the
   case, make sure that there is no mistake in the transactions’ amounts.

.. seealso::
   * :doc:`bank_synchronization`
.. todo:: add doc link to new documentation about reconciliation
