============================
Tax return (VAT declaration)
============================

Companies with a registered :abbr:`VAT (Value Added Tax)` number must submit a **tax return** on
a monthly or quarterly basis, depending on their turnover and the registration regulation. A tax
return - or VAT return - gives the tax authorities information about the taxable transactions made
by the company. The **output tax** is charged on the number of goods and services sold by a
business, while the **input tax** is the tax added to the price when goods or services are
purchased. Based on these values, the company can calculate the tax amount they have to pay or be
refunded.

.. note::
   You can find additional information about VAT and its mechanism on this page from the European
   Commission: `"What is VAT?" <https://ec.europa.eu/taxation_customs/business/vat/what-is-vat_en>`_.

.. _tax-returns/prerequisites:

Prerequisites
=============

.. _tax-returns/periodicity:

Tax Return Periodicity
----------------------

The configuration of the **Tax Return Periodicity** allows Odoo to compute your tax return correctly
and also to send you a reminder to never miss a tax return deadline.

To do so, go to :menuselection:`Accounting --> Configuration --> Settings`. Under the
:guilabel:`Tax Return Periodicity`, you can set:

- :guilabel:`Periodicity`: define here whether you submit your tax return on a monthly or quarterly
  basis;
- :guilabel:`Reminder`: define when Odoo should remind you to submit your tax return;
- :guilabel:`Journal`: select the journal in which to record the tax return.


.. note::
   This is usually configured during the :doc:`app's initial set up <../get_started>`.

.. _tax-returns/tax-grids:

Tax Grids
---------

Odoo generates tax reports based on the :guilabel:`Tax Grids` settings that are configured on your
taxes. Therefore, it is crucial to make sure that all recorded transactions use the right taxes.
You can see the :guilabel:`Tax Grids` by opening the :guilabel:`Journal Items` tab of any
invoice and bill.

.. image:: tax_returns/tax_return_grids.png
   :alt: see which tax grids are used to record transactions in Odoo Accounting

To configure your tax grids, go to :menuselection:`Accounting --> Configuration --> Taxes`,
and open the tax you want to modify. There, you can edit your tax settings, along with the tax
grids that are used to record invoices or refunds.

.. note::
   Taxes and reports are usually already pre-configured in Odoo: a :ref:`fiscal localization package
   <fiscal_localizations/packages>` is installed according to the country you select at the creation
   of your database.

.. _tax-returns/close:

Close a tax period
==================

.. _tax-returns/lock-date:

Tax lock date
-------------

Any new transaction whose accounting date prior to the :guilabel:`Lock Tax Return` date has its tax
values moved to the next open tax period. This is useful to make sure that no change can be made to
a report once its period is closed.

Therefore, we recommend locking your tax date before working on your
:guilabel:`Closing Journal Entry`.
This way, other users cannot modify or add transactions that would have an impact on the
:guilabel:`Closing Journal Entry`, which can help you avoid some tax declaration errors.

To check the current :guilabel:`Lock Tax Return` date, or to edit it, go to
:menuselection:`Accounting --> Accounting --> Lock Dates`.

.. _tax-returns/report:

Tax return
----------

Once all the transactions involving taxes have been posted for the period you want to report, open
the :guilabel:`Tax Return` report by going to :menuselection:`Accounting --> Reporting --> Tax
Return`. Select the period you want to declare using the date filter to have an overview of the tax
return. Then, click :guilabel:`Closing Entry` to create a tax closing journal entry. Odoo
automatically proposes the details of the journal entry. Make any necessary changes and click
:guilabel:`Post`.

From the report, click :guilabel:`PDF` to download a PDF of the tax return. Alternatively, click the
:icon:`fa-cog` (:guilabel:`gear`) icon, then click :guilabel:`Download Excel` to download an XLSX of
the tax return. To save the report to the Documents app, click the :icon:`fa-cog` (:guilabel:`gear`)
icon, then click :guilabel:`Copy to Documents`. Select the format to :guilabel:`Export to`, the
:guilabel:`Documents Name`, the :guilabel:`Folder` to store it in, and add any :guilabel:`Tags`.

The report includes all the values to report to the tax authorities, along with the amount to be
paid or refunded.

.. note::
   If you forgot to lock your tax date before clicking on :guilabel:`Closing Journal Entry`, then
   Odoo automatically locks your fiscal period on the same date as the accounting date of your
   entry. This safety mechanism can prevent some fiscal errors, but it is advised to lock your tax
   date manually before, as described above.

.. seealso::
   * :doc:`../taxes`
   * :doc:`../get_started`
   * :doc:`../../fiscal_localizations`
