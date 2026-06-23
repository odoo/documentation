==========
Luxembourg
==========

.. |LU| replace:: :abbr:`LU (Luxembourg)`
.. |SECUline| replace:: :abbr:`SECUline (Secure Electronic Communications Utility)`
.. |CCSS| replace:: :abbr:`CCSS (Centre Commun de la Sécurité Sociale)`
.. |BIK| replace:: :abbr:`BIK (Benefit in Kind)`
.. |CIS| replace:: :abbr:`CIS (Crédit d'Impôt Salarié)`
.. |CIP| replace:: :abbr:`CIP (Crédit d'Impôt Pensionné)`
.. |CIM| replace:: :abbr:`CIM (Crédit d'Impôt Monoparental)`

The **Luxembourg Payroll** localization provides a complete implementation of Luxembourg's
payroll regulations. It includes automatic wage indexation (*échelle mobile des salaires*),
progressive withholding tax for four tax classifications, employee and retiree tax credits,
benefits in kind and meal vouchers management, three payroll structures (monthly, 13th month,
and gratification), and the mandatory monthly SECUline social security declarations
(**DECSAL** and **DECMAL**).

Before configuring the Luxembourg localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/lu_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Luxembourg payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Luxembourg - Payroll`
     - ``l10n_lu_hr_payroll``
     - Provides wage indexation, progressive withholding tax, tax credits, BIK management,
       three salary structures, and SECUline reporting for Luxembourg.
   * - :guilabel:`Luxembourg - Payroll with Accounting`
     - ``l10n_lu_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Luxembourg localization.

General configuration
=====================

Navigate to :menuselection:`Settings app --> Users & Companies --> Companies`, select the
company, and open the :guilabel:`Luxembourg` tab to configure the following:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Official Social Security Number`
     - Company matricule issued by |CCSS|. Printed on payslips and required for SECUline.
   * - :guilabel:`SECUline Number`
     - Reporting identifier assigned by |CCSS| for electronic declarations.
   * - :guilabel:`Accident Insurance Factor`
     - Bonus-malus factor applied to the base accident-insurance rate (AAA).
       Choose from 0.85, 1.00, 1.10, 1.30, or 1.50.
   * - :guilabel:`Mutuality Employer Class`
     - Sickness-fund class (1–4) based on the company's activity sector. Determines the
       employer's mutuality contribution rate.

Employee configuration
======================

Open the employee record and go to the :guilabel:`Tax Withholding` tab to configure
all Luxembourg-specific payroll data.

Tax information
---------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Tax ID Number`
     - Employee's 13-digit Luxembourg national tax number (*matricule fiscal*). Printed on
       the payslip.
   * - :guilabel:`Tax Classification`
     - Determines which withholding-tax table applies:

       - **Class 1** — Single, widowed, or divorced without dependent children.
       - **Class 1a** — Single parent, widower/divorcee with dependent children, or
         taxpayer aged 65+.
       - **Class 2** — Married, civil-partnership, or legally-separated taxpayers.
       - **Without classification** — Foreign employees or special cases; a custom rate
         field becomes available.
   * - :guilabel:`Custom Tax Rate`
     - Fixed withholding percentage applied when classification is *without*. Only visible
       when that classification is selected.

Tax credits
-----------

Enable the applicable tax credits for the employee. Each activates the corresponding
salary rule on every payslip:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Credit
     - Description
   * - :guilabel:`Employee Tax Credit (CIS)`
     - |CIS|: for active employees. Degressive from EUR 600 to EUR 300/year based on yearly
       gross (EUR 936 – EUR 79,999).
   * - :guilabel:`Retiree Tax Credit (CIP)`
     - |CIP|: for pensioners. Same bracket structure as CIS with pension-specific thresholds.
   * - :guilabel:`Single-Parent Tax Credit (CIM)`
     - |CIM|: up to EUR 3,504/year for single parents, degressive between EUR 60,000 and
       EUR 105,000 yearly gross.

.. note::
   The **CISSM** (social-minimum tax credit, max EUR 81/month in 2025) is computed
   automatically based on gross wage relative to the minimum social salary — no checkbox
   is required.

Tax deductions
--------------

Daily deduction amounts are entered in the :guilabel:`Tax Deductions & Packages` section.
Odoo automatically converts each to monthly (× 25 days) and yearly (× 300 days) for
reference.

.. list-table::
   :header-rows: 1
   :widths: 12 20 68

   * - Code
     - Name
     - Description
   * - FD
     - Travel Expenses
     - Daily commuting expenses.
   * - AC/AE
     - Spousal / Extra-professional Deduction
     - Deduction for working spouse or extra-professional charges.
   * - CE
     - Extraordinary Charges
     - Extraordinary personal charges (illness, disability).
   * - DS
     - Special Expenses
     - Deductible personal expenses.
   * - FO
     - Obtaining Fees
     - Professional fees for obtaining income.
   * - AMD
     - Sustainable Mobility Deduction
     - Eco-friendly commuting (bicycle, public transport).
   * - FFO
     - Package for Obtaining Fees
     - Flat-rate alternative to itemised FO.
   * - FDS
     - Package for Special Expenses
     - Flat-rate alternative to itemised DS.

Contract configuration
======================

The following fields appear on the employee's contract to configure benefits:

Wage indexation
---------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Index at Contract Signature`
     - Automatically set to the current official index value when the contract is confirmed.
   * - :guilabel:`Indexed Wage`
     - Computed field: Contract Wage × (Current Index ÷ Index at Signature).
   * - :guilabel:`Current Index`
     - Reflects the ``l10n_lu_index`` rule parameter. Update this parameter each time
       Luxembourg announces a new index trigger.

Meal vouchers
-------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Meal Voucher Amount (daily)`
     - Face value of one meal voucher.
   * - :guilabel:`Employee Computation Method`
     - How the employee share is handled:

       - **Removed from net** — The employee contribution (min. EUR 2.80/day) is deducted
         from take-home pay.
       - **Benefit in Kind** — Treated as a taxable |BIK|.
   * - :guilabel:`BIK Exceeding Amount`
     - Portion of the meal voucher above the regulatory maximum (EUR 15 as of 2024).
       Automatically flagged as taxable |BIK|.

Benefits in kind (BIK)
-----------------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Vehicle BIK`
     - Monthly taxable value of a company vehicle for private use.
   * - :guilabel:`VAT Included in Vehicle BIK`
     - Tick if the vehicle |BIK| amount already includes VAT (17% from 2025). Odoo
       will reverse the VAT to obtain the taxable base.
   * - :guilabel:`Other Benefits in Kind`
     - Any other monthly |BIK| (accommodation, loans, etc.).
   * - :guilabel:`Vehicle Package Allowance`
     - Non-taxable monthly vehicle expense reimbursement (distinct from |BIK|).

Salary structures
=================

Three payroll structures are available, all linked to the
**Luxembourg: Employee** structure type (monthly frequency only).

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Structure
     - Description
   * - **Luxembourg: Regular Pay** (``LUX_MONTHLY``)
     - Standard monthly payslip. Includes worked-day lines, absence management, prorating
       for partial months, full tax and social-security computation.
   * - **Luxembourg: 13th Month** (``LUX_13TH_MONTH``)
     - Annual 13th-month bonus. Gross is derived from a simulated annualized gross ÷ 12,
       adjusted for the fraction of the year worked. Taxed as periodic income.
   * - **Luxembourg: Gratification** (``LUX_GRATIFICATION``)
     - One-time bonus. The gross amount is entered manually, rounded to the nearest EUR 5,
       and taxed using the **annual non-periodic withholding table** — as required by
       Luxembourg tax law for irregular payments.

Social security contributions
==============================

Employee contributions (deducted from gross):

.. list-table::
   :header-rows: 1
   :widths: 45 25 30

   * - Fund
     - Rate (2025)
     - Base
   * - Health Fund (CNS)
     - 2.80 %
     - Gross salary
   * - Cash Sickness Fund
     - 0.25 %
     - Gross salary
   * - Retirement Fund (CNAP)
     - 8.00 %
     - Gross salary
   * - Dependency Insurance
     - 1.40 %
     - Gross salary

.. note::
   All rates are stored as rule parameters and can be updated under
   :menuselection:`Payroll app --> Configuration --> Rule Parameters`.

Withholding tax
===============

The withholding tax is calculated using a progressive table specific to the employee's
tax classification (1, 1a, 2, or without). For each payslip:

#. Look up the monthly progressive table for the employee's classification.
#. Compare the taxable amount to the monthly threshold:

   - Below threshold → apply the table rate + 7% increase.
   - Above threshold → apply the table rate + 9% increase.

#. Round to the nearest EUR 0.10 for monthly payslips (EUR 0.01 for daily).

For **without classification**, the custom fixed rate is applied directly.

Partial month prorating
=======================

When an employee starts or leaves mid-month, Odoo prorates the indexed wage and all
daily deductions (FD, AC/AE, etc.) using the following logic:

- **Taxable days**: Working days (Monday–Saturday) in the pay period vs. the full month.
- **Presence prorata**: Paid hours in the period ÷ total available hours in the month.
- **Prorated wage**: Indexed wage × presence prorata.

.. important::
   Luxembourg regulations require that the payslip ``date_from`` and ``date_to`` fall within
   the **same calendar month**. Odoo enforces this with a validation constraint.

SECUline social security reporting
====================================

Luxembourg employers must submit monthly declarations to the |CCSS| via the SECUline
platform. Odoo generates the mandatory ``.dta`` files directly.

Navigate to :menuselection:`Payroll app --> Reporting --> Luxembourg` to access the
SECUline report wizard.

DECSAL — Monthly salary declaration
-------------------------------------

Declares each employee's wages, hours, and contributions for the reporting month.

To generate a DECSAL file:

#. Click :guilabel:`New` and set:

   - :guilabel:`Report Type` → :guilabel:`DECSAL`
   - :guilabel:`Action` → :guilabel:`Information`
   - :guilabel:`Year` and :guilabel:`Month`

#. Click :guilabel:`Generate Report`.
#. Download the ``.dta`` file and submit it to SECUline.

DECMAL — Work incapacity declaration
--------------------------------------

Declares periods of incapacity (sick leave, maternity, family reasons, etc.)
for each affected employee.

SECUline codes are configured on each work entry type
(:menuselection:`Payroll app --> Configuration --> Work Entry Types`):

.. list-table::
   :header-rows: 1
   :widths: 15 85

   * - Code
     - Work entry type
   * - 1
     - Sick Leave
   * - 2
     - Family Reason Time Off
   * - 3
     - Maternity Leave
   * - 4
     - Welcome Leave
   * - 5
     - Caring Leave

To generate a DECMAL file:

#. Click :guilabel:`New` and set:

   - :guilabel:`Report Type` → :guilabel:`DECMAL`
   - :guilabel:`Action` → :guilabel:`Information` (or :guilabel:`Correction`)
   - :guilabel:`Year` and :guilabel:`Month`

#. For **correction** reports, select the specific employees in the
   :guilabel:`Employees` field.
#. Add any **Situational Unemployment** entries if applicable.
#. Click :guilabel:`Generate Report` and download the ``.dta`` file.

.. tip::
   If you add custom work entry types for incapacity, assign the appropriate SECUline
   code to ensure they are included in DECMAL reports.
