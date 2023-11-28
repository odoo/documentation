=================
Withholding taxes
=================

A **withholding tax**, also known as retention tax, mandates the payer of a customer invoice to
deduct a tax from the payment and remit it to the government. Typically, a tax is included in the
subtotal to calculate the total amount paid, while withholding taxes are directly subtracted from
the payment.

Configuration
=============

In Odoo, a withholding tax is defined by creating a negative tax. To create one, go
to :menuselection:`Accounting --> Configuration --> Taxes` and, in the :guilabel:`Amount` field,
enter a negative amount.

.. image:: retention/negative-amount.png
   :alt:  negative tax amount in field

Then, go to the :menuselection:`Advanced Options` tab and create a retention :guilabel:`Tax Group`.

.. image:: retention/tax-group.png
   :alt: tax group for retention tax.

.. tip::
   If the retention is a percentage of a regular tax, create a :guilabel:`Tax` with a
   :guilabel:`Tax Computation` as a :guilabel:`Group of Taxes`. Then, set both the regular tax and
   the retention one in the :guilabel:`Definition` tab.

Retention taxes on invoices
===========================

Once the retention tax has been created, it can be used on customer forms, sales orders, and
customer invoices.
Several taxes can be applied on a single customer invoice line.

.. image:: retention/invoice-tax.png
   :alt: invoice lines with taxes

.. seealso::

   :doc:`../taxes`
