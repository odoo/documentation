=====
China
=====

.. _china/configuration:

Configuration
=============

.. _china/configuration/modules:

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Chinese
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`China - Accounting`
     - `l10n_cn`
     - This module includes two fiscal localization packages: "China - Accounting Standards for
       Business Enterprises" and "China - Accounting Standards for Small Business Enterprises".
   * - :guilabel:`China - Accounting Reports`
     - `l10n_cn_reports`
     - This module includes the accounting reports for China.

.. _china/configuration/company:

Company information
-------------------

To configure company information, navigate to the :guilabel:`Contacts` app, search for the company,
and select the record. Then, configure the following fields:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

   - In the :guilabel:`Street` field, enter the street name, number, and any additional address
     information.

- :guilabel:`Tax ID`: Tax identification number (Unified social credit code)
- :guilabel:`Phone`
- :guilabel:`Email`

.. _china/chart_of_accounts:

Chart of accounts
=================

Two independent charts of accounts are available depending on the selected localization package:
**China - Accounting Standards for Business Enterprises** and **China - Accounting Standards for
Small Business Enterprises**.

.. _china/taxes:

Taxes
=====

.. _china/taxes/value_added_tax:

Value Added Tax
---------------

Both packages share the following default :doc:`taxes <../accounting/taxes>` configuration:

- VAT 13%
- VAT 9%
- VAT 6%
- VAT 5%
- VAT 3%
- VAT 0% Exemption, Credit and Refund
- VAT 0% Exemption and Refund
- Tax Exemption
- 3% levy rate reduced to 2%
- 3% levy rate reduced to 1%
- 3% levy rate reduced to 1.5%

.. note::
   Output VAT
      Taxes with the same rate are further divided by fapiao type.
   Input VAT
      Taxes are categorized as either deductible or non-deductible.
   Specific scenarios
      Additional independent tax grids accommodate specific situations, such as items subject to refund upon collection and input tax transferred out.

.. _china/tax_report:

Tax report
==========

The following tax report is available under China localization:

- VAT Return (General Taxpayer)

  This report includes four components:

  - Main Form
  - Schedule 1 - Sales Details
  - Schedule 2 - Input Tax Details
  - Surtaxes and Surcharges Schedule

To access it, navigate to :menuselection:`Accounting --> Reporting --> Tax Report`.

.. _china/vat_differential_taxation:

VAT differential taxation
=========================

.. _china/vat_differential_taxation/configuration:

Configuration
-------------

Go to :menuselection:`Accounting --> Configuration --> Settings`. Under the **Taxes** section, activate :guilabel:`VAT Differential Taxation`.

**Update** the default :guilabel:`Journal` and :guilabel:`Offset Account` if needed.

   .. image:: china/vat-differential-taxation-setting.png
      :alt: VAT Differential Taxation Setting

.. _china/vat_differential_taxation/workflow:

Workflow
--------

.. _china/vat_differential_taxation/workflow/vat_differential_fapiao:

VAT differential fapiao creation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1. Navigate to :menuselection:`Accounting --> Customers --> Invoices` and **create a new invoice**.
2. Select :guilabel:`Full Amount Fapiao` or :guilabel:`Net Amount Fapiao` in the :guilabel:`VAT Differential Taxation Method` field.

   .. image:: china/vat-differential-taxation-method.png
      :alt: VAT Differential Taxation Method

3. Add the :guilabel:`Invoice Lines`.
4. Fill in the :guilabel:`Balance Deduction` details.

   .. image:: china/balance-deduction.png
      :alt: Balance Deduction

5. Confirm the invoice.

.. _china/vat_differential_taxation/workflow/output_vat_offset_entry:

Output VAT offset entry
~~~~~~~~~~~~~~~~~~~~~~~

Depending on the selected :guilabel:`VAT Differential Taxation Method`, the system automatically handles the journal entries differently:

- **Net Amount Fapiao:**
  Upon confirmation, the system automatically posts an output VAT offset entry.

  .. note::
     A :guilabel:`Net Amount Fapiao` invoice cannot be confirmed if the :guilabel:`Balance Deduction` details are missing.

- **Full Amount Fapiao:**
  Filling in the :guilabel:`Balance Deduction` details prior to invoice confirmation is optional. The timing of the output VAT offset entry depends on when these details are provided:

  - **Before confirmation:** The system automatically posts the entry upon invoice confirmation.
  - **After confirmation:** If left blank initially, the system automatically posts the entry upon saving the balance deduction details later.

If the tax rate of an invoice line is 0%, the system posts no output VAT offset entry.

The system automatically posts a reversal entry for credit notes.

Calculation logic
*****************

The system calculates the output VAT offset based on the tax-exclusive value of the deduction amount.

The formula applied per invoice line is:
**Output VAT offset** = [Total deduction amount / (1 + Tax rate)] * Tax rate

.. example::
   If the deduction amount is 113.00 and the tax rate is 13%, the output VAT offset is calculated as:
   [113.00 / (1 + 0.13)] * 0.13 = **13.00**

.. note::
   To ensure data alignment between the balance deduction details and the posted journal entries, automatically posted output VAT offset entries cannot be reset to draft directly from :menuselection:`Accounting --> Accounting --> Journal Entries`.

   To correct an entry, navigate to the related invoice and reset the entire invoice to **draft** (for :guilabel:`Net Amount Fapiao`), or reset the specific balance deduction details to **draft** (for :guilabel:`Full Amount Fapiao`).

.. _china/vat_differential_taxation/workflow/balance_deductions_ledger:

Balance deductions ledger
~~~~~~~~~~~~~~~~~~~~~~~~~

To cross-check the data between the balance deduction details and the posted output VAT offset journal entries, navigate to :menuselection:`Accounting --> Reporting --> Balance Deductions`.

.. _china/accounting_voucher:

Accounting voucher
==================

Accounting vouchers are available to download in PDF format. To print a voucher, navigate to any of the following locations:

- :menuselection:`Accounting --> Customers --> Invoices`
- :menuselection:`Accounting --> Vendors --> Bills`
- :menuselection:`Accounting --> Accounting --> Journal Entries`

Multiple records can be selected from the list view to print the vouchers in batch.
