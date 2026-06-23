==========
Bangladesh
==========

The **Bangladesh Payroll** localization provides a complete salary structure for Bangladeshi
employees, including progressive income tax calculation with special exemptions for different
categories of taxpayers, support for investment-based tax credits, and provident and gratuity
fund contributions.

Before configuring the Bangladesh localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/bd_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Bangladesh payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Bangladesh - Payroll`
     - ``l10n_bd_hr_payroll``
     - Provides the salary structure, progressive income tax slabs, special exemptions, and
       compliance rules for Bangladeshi payroll.
   * - :guilabel:`Bangladesh - Payroll with Accounting`
     - ``l10n_bd_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Bangladesh
       localization.

Salary structure
================

When the Bangladesh localization is installed, a single salary structure is available:
**Bangladesh: Regular Pay** (code ``BDMONTHLY``), linked to the
**Bangladeshi Employee** structure type with a monthly payment schedule.

Salary rules
------------

The structure contains the following salary rules:

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Code
     - Name
     - Description
   * - ``BASIC``
     - Basic Salary
     - Employee's gross monthly wage as defined on the contract.
   * - ``OTHER_ALLOW``
     - Other Allowances
     - Optional miscellaneous allowances entered as a payslip input.
   * - ``SALARY_ARREARS``
     - Salary Arrears
     - Arrears from previous periods entered as a payslip input.
   * - ``EXTRA_HOURS``
     - Extra Hours
     - Overtime compensation entered as a payslip input.
   * - ``PROV_FUND``
     - Provident Fund
     - Optional provident fund contribution entered as a payslip input.
   * - ``GRAT_FUND``
     - Gratuity Fund
     - Optional gratuity fund contribution entered as a payslip input.
   * - ``GROSS``
     - Taxable Salary
     - Sum of basic salary and all allowances.
   * - ``TAX_CREDITS``
     - Tax Credits (Investments)
     - Eligible investment amounts that reduce taxable income, entered as a payslip input.
   * - ``TAXABLE_AMOUNT``
     - Taxable Amount
     - Gross salary minus tax credits and the annual income exemption, divided by 12.
   * - ``GWARDEDUCTION``
     - Freedom Fighter Deduction
     - Payslip input flag for Gazetted War-Founded Freedom Fighters — activates the higher
       exemption threshold.
   * - ``DISABLEDDEDUCTION``
     - Disabled Dependent Deduction
     - Number of disabled dependants entered as a payslip input — each increases the annual
       exemption by BDT 50,000.
   * - ``TAXES``
     - Income Tax
     - Monthly income tax computed using the progressive slab system described below.
   * - ``ATTACH_SALARY``
     - Attachment of Salary
     - Court-ordered salary attachment deducted from net pay.
   * - ``ASSIG_SALARY``
     - Assignment of Salary
     - Voluntary salary assignment deducted from net pay.
   * - ``CHILD_SUPPORT``
     - Child Support
     - Court-ordered child support payment deducted from net pay.
   * - ``DEDUCTION``
     - General Deduction
     - Miscellaneous deduction entered as a payslip input.
   * - ``REIMBURSEMENT``
     - Reimbursement
     - Expense reimbursement added back to net pay.
   * - ``NET``
     - Net Salary
     - Final take-home pay (basic + allowances + deductions).

Income tax
==========

Annual exemption thresholds
----------------------------

Each employee's taxable income is reduced by an annual exemption before applying the tax
slabs. The threshold varies by category:

.. list-table::
   :header-rows: 1
   :widths: 60 40

   * - Category
     - Annual exemption (BDT)
   * - Female, third gender, or senior (age 65+)
     - 400,000
   * - Male
     - 350,000
   * - Disabled employee
     - 475,000
   * - Gazetted War-Founded Freedom Fighter
     - 500,000
   * - Additional exemption per disabled dependant
     - 50,000

.. note::
   Foreign employees who are not Bangladesh tax residents are subject to a **flat 30% tax
   rate** instead of the progressive slab system.

Progressive tax slabs
---------------------

After applying the annual exemption, the remaining taxable income is taxed using the
following progressive brackets (2024):

.. list-table::
   :header-rows: 1
   :widths: 50 25 25

   * - Annual taxable income (BDT)
     - Rate
     - Maximum tax (BDT)
   * - Up to 100,000
     - 5 %
     - 5,000
   * - 100,001 – 400,000
     - 10 %
     - 30,000
   * - 400,001 – 700,000
     - 15 %
     - 45,000
   * - 700,001 – 1,100,000
     - 20 %
     - 80,000
   * - Above 1,100,000
     - 25 %
     - —

.. important::
   A **minimum annual tax** of BDT 5,000 applies. If the progressive calculation produces a
   lower amount, the minimum is charged instead.

Rule parameters
---------------

All thresholds and rates are stored as rule parameters and can be reviewed under
:menuselection:`Payroll app --> Configuration --> Rule Parameters`. Odoo updates these
values whenever the Bangladesh tax authority announces changes.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change in
   Bangladesh tax regulations.

Payslip inputs
==============

Several salary rules require manual inputs on the payslip. Go to the
:guilabel:`Worked Days & Inputs` tab of the payslip and add the relevant input type:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Input type
     - When to use
   * - :guilabel:`Other Allowances`
     - Any miscellaneous allowance not covered by a dedicated rule.
   * - :guilabel:`Salary Arrears`
     - Back-pay owed from previous months.
   * - :guilabel:`Extra Hours`
     - Overtime or additional hours compensation.
   * - :guilabel:`Provident Fund`
     - Employee contribution to a provident fund.
   * - :guilabel:`Gratuity Fund`
     - Employee contribution to a gratuity fund.
   * - :guilabel:`Tax Credits (Investments)`
     - Total qualifying investment amounts for the year divided by 12.
   * - :guilabel:`Freedom Fighter Deduction`
     - Enter **1** to activate the Gazetted War-Founded Freedom Fighter exemption.
   * - :guilabel:`Disabled Dependent Deduction`
     - Enter the number of disabled dependants (each adds BDT 50,000 to the exemption).
