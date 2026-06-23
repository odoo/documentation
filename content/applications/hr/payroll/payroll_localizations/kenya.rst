=====
Kenya
=====

The **Kenya Payroll** localization provides a complete implementation of Kenyan payroll
regulations, including :abbr:`PAYE (Pay As You Earn)` progressive income tax,
:abbr:`NSSF (National Social Security Fund)` contributions (Tiers 1 and 2),
:abbr:`SHIF (Social Health Insurance Fund)` contributions,
:abbr:`AHL (Affordable Housing Levy)`, and a wide range of taxed and untaxed allowances.
The localization also generates the mandatory **P9 Tax Deduction Card** for annual employee
tax reporting.

Before configuring the Kenya localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/ke_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Kenya payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Kenya - Payroll`
     - ``l10n_ke_hr_payroll``
     - Provides the salary structure, PAYE tax, NSSF, SHIF, AHL, allowances, reliefs, and
       P9 tax deduction card for Kenyan payroll.
   * - :guilabel:`Kenya - Payroll with Accounting`
     - ``l10n_ke_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Kenya
       localization.

General configuration
=====================

Navigate to :menuselection:`Payroll app --> Configuration --> Settings` and complete the
following fields under the :guilabel:`Kenya Localization` section:

- :guilabel:`NSSF Number`: The company's registration number with the National Social
  Security Fund.
- :guilabel:`KRA PIN`: The company's Kenya Revenue Authority Personal Identification Number,
  used in PAYE reporting.

Employee configuration
======================

Configure the following fields on each employee record to ensure correct payroll
calculations. These are found under the :guilabel:`Private Information` tab:

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Field
     - Description
   * - :guilabel:`KRA PIN`
     - Employee's Kenya Revenue Authority PIN. Required for PAYE reporting.
   * - :guilabel:`NSSF Number`
     - Employee's NSSF membership number.
   * - :guilabel:`NHIF Number`
     - Employee's :abbr:`NHIF (National Hospital Insurance Fund)` number (now largely
       superseded by SHIF from October 2024, but kept for historical records).
   * - :guilabel:`SHIF Number`
     - Employee's Social Health Insurance Fund number (applicable from October 2024).
   * - :guilabel:`HELB Number`
     - Employee's :abbr:`HELB (Higher Education Loans Board)` number, if repaying a student
       loan.

Contract configuration
======================

The following fields appear on the employee's contract and control how allowances and
deductions are calculated:

Allowances
----------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Food Allowance (daily)`
     - Amounts up to KES 5,000/month are untaxed; any excess is added to taxable income.
   * - :guilabel:`Airtime Allowance (monthly)`
     - Amounts up to KES 3,000/month are untaxed; any excess is taxable.
   * - :guilabel:`Pension Allowance (monthly)`
     - Amounts up to KES 20,000/month are untaxed; any excess is taxable.
   * - :guilabel:`Commuter Allowance (monthly)`
     - Fully taxable allowance for commuting costs.
   * - :guilabel:`Housing Allowance`
     - Can be set as a fixed monthly amount or as a percentage of basic salary
       (select the unit in the :guilabel:`Housing Allowance Unit` field).

Insurance and pension
---------------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Voluntary Medical Insurance`
     - Monthly premium. Qualifies for 15% insurance relief (up to the total relief cap).
   * - :guilabel:`Life Insurance`
     - Monthly premium. Qualifies for 15% insurance relief.
   * - :guilabel:`Life Insurance Managed by Employee`
     - When enabled, only the tax relief is deducted — the premium itself is not deducted
       from the payslip (the employee pays directly).
   * - :guilabel:`Education Fund`
     - Monthly contribution. Qualifies for 15% insurance relief.
   * - :guilabel:`Pension Contribution (Tier 3)`
     - Voluntary additional pension contribution.
   * - :guilabel:`NSSF Tier 2 Remittance`
     - Choose whether Tier 2 NSSF is remitted to NSSF or to a registered insurance scheme.
   * - :guilabel:`Pension Remittance`
     - Same choice for Tier 3 / pension contributions.

Mortgage
--------

:guilabel:`Mortgage Interest (monthly)`: Tax-deductible mortgage interest, validated to a
maximum of KES 30,000/year. Enter the monthly interest amount; Odoo automatically checks
the annual ceiling.

Secondary employment
--------------------

:guilabel:`Secondary Contract`: Tick this checkbox if this contract is for a secondary
employment. Secondary employment income is taxed at a **flat 35% PAYE rate** instead of
the standard progressive bands.

Salary structure
================

When the Kenya localization is installed, a single salary structure is available:
**Kenya: Regular Pay** (code ``KENMONTHLY``), linked to the
**Kenya: Employee** structure type with a monthly payment schedule.

Earnings
--------

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``BASIC``
     - Basic salary as defined on the contract.
   * - ``UNTAXED_FOOD_ALLOWANCE``
     - Food allowance up to KES 5,000 (untaxed portion).
   * - ``UNTAXED_AIRTIME_ALLOWANCE``
     - Airtime allowance up to KES 3,000 (untaxed portion).
   * - ``UNTAXED_PENSION_ALLOWANCE``
     - Pension allowance up to KES 20,000 (untaxed portion).
   * - ``TAXED_FOOD_ALLOWANCE``
     - Food allowance above KES 5,000 (taxable excess).
   * - ``TAXED_AIRTIME_ALLOWANCE``
     - Airtime allowance above KES 3,000 (taxable excess).
   * - ``TAXED_PENSION_ALLOWANCE``
     - Pension allowance above KES 20,000 (taxable excess).
   * - ``TAXED_COMMUTER_ALLOWANCE``
     - Commuter allowance (fully taxable).
   * - ``TAXED_HOUSING_ALLOWANCE``
     - Housing allowance (fixed or percentage-based; fully taxable).
   * - ``BONUS``
     - Optional fixed bonus (payslip input).
   * - ``COMMISSION``
     - Optional fixed commission (payslip input).

Deductions — statutory
----------------------

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``NSSF_AMOUNT``
     - NSSF employee contribution (Tier 1 + Tier 2).
   * - ``AHL_AMOUNT``
     - Affordable Housing Levy employee share (1.5% of basic).
   * - ``SHIF_AMOUNT``
     - SHIF employee contribution (2.75% of gross, minimum KES 300).
   * - ``PAYE``
     - Pay As You Earn income tax (after reliefs).

Deductions — voluntary
-----------------------

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``HELB``
     - HELB loan repayment (minimum KES 1,500 per month).
   * - ``MED_INSURANCE``
     - Voluntary medical insurance premium.
   * - ``LIFE_INSURANCE``
     - Life insurance premium (unless managed by employee).
   * - ``EDUCATION``
     - Education fund contribution.
   * - ``NSSF_EMPLOYEE_TIER_3``
     - Voluntary Tier 3 / pension contribution.
   * - ``FRINGE_BENEFIT``
     - Fringe benefit deduction (payslip input).
   * - ``NON_CASH_BENEFIT``
     - Non-cash benefit deduction (payslip input).

NSSF contributions
==================

The NSSF contribution system uses a three-tier structure. Both the employee and employer
contribute equally at each tier.

**Tier 1** (mandatory): 6% of basic salary on the lower earnings limit.

**Tier 2** (mandatory): 6% of basic salary on earnings between the lower and upper limits.

**Tier 3** (voluntary): Additional contributions configured on the contract.

.. list-table::
   :header-rows: 1
   :widths: 30 35 35

   * - Period
     - Lower limit (KES)
     - Upper limit (KES)
   * - 2024
     - 6,000
     - 36,000
   * - 2025
     - 6,000
     - 72,000
   * - From February 2026
     - 9,000
     - 108,000

In addition, the employer pays:

- :guilabel:`NSSF Employer` — matches the employee NSSF contribution.
- :guilabel:`AHL Employer` — 1.5% of basic salary (mirrors the employee levy).
- :guilabel:`NITA` — a fixed KES 50 employer contribution to the National Industrial
  Training Authority.

Social health contributions
===========================

SHIF (from October 2024)
--------------------------

The :abbr:`SHIF (Social Health Insurance Fund)` replaced NHIF effective 10 October 2024.
The employee contributes **2.75% of gross salary**, subject to a minimum of KES 300/month
(for employees earning below KES 10,909 gross).

.. note::
   NHIF (National Hospital Insurance Fund) was suspended on the same date. NHIF fields are
   retained on the employee record for historical records but the rule no longer generates
   a deduction.

Affordable Housing Levy (from December 2024)
--------------------------------------------

The :abbr:`AHL (Affordable Housing Levy)` is a mandatory levy effective 27 December 2024:

- Employee: 1.5% of basic salary.
- Employer: 1.5% of basic salary.
- Employees with a disability whose basic salary is below KES 150,000 are exempt.

AHL qualifies for a tax relief of 15% of the levy paid (capped at KES 9,000/year;
effective 19 March 2024 – December 2026).

PAYE income tax
===============

The PAYE calculation differs for primary and secondary employment:

**Secondary employment:** flat rate of 35% on gross taxable income.

**Primary employment:** progressive tax brackets:

.. list-table::
   :header-rows: 1
   :widths: 45 25 30

   * - Monthly taxable income (KES)
     - Rate
     - Maximum tax (KES)
   * - Up to 24,000
     - 10 %
     - 2,400
   * - 24,001 – 32,333
     - 25 %
     - 2,083
   * - 32,334 – 500,000
     - 30 %
     - 140,000
   * - 500,001 – 800,000
     - 32.5 %
     - 97,500
   * - Above 800,000
     - 35 %
     - —

Gross taxable income is computed as:

   Gross – Untaxed allowances – Mortgage interest – Pension contributions – SHIF – AHL

Tax reliefs
-----------

The following reliefs are deducted from the tax calculated above:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Relief
     - Description
   * - Personal Relief
     - KES 2,400 flat monthly relief for all employees.
   * - Medical Insurance Relief
     - 15% of voluntary medical insurance premium.
   * - Life Insurance Relief
     - 15% of life insurance premium.
   * - Education Relief
     - 15% of education fund contribution.
   * - NHIF Relief
     - 15% of NHIF premium (if still applicable).
   * - Total Insurance Relief cap
     - KES 5,000/month maximum on all insurance-related reliefs combined.
   * - AHL Relief
     - 15% of AHL paid (max KES 9,000/year; effective March 2024 – December 2026).

P9 Tax Deduction Card
=====================

The P9 form is the annual employee tax deduction card required by the
:abbr:`KRA (Kenya Revenue Authority)`.

To generate P9 forms, navigate to :menuselection:`Payroll app --> Reporting --> Tax
Deduction Card`. Enter the desired tax year and select the employees to include, then
generate the report.

The P9 form shows 12 monthly rows plus a yearly total, covering:

- Basic salary and benefits
- All allowances (gross pay)
- Retirement contributions (up to three schemes)
- Mortgage interest deduction
- Chargeable pay, tax charged
- Insurance reliefs and personal relief
- PAYE tax withheld

NSSF and SHIF reports
=====================

To generate contribution reports for submission to the respective authorities, navigate to:

- :menuselection:`Payroll app --> Reporting --> NSSF Report` — generates the employer and
  employee NSSF contribution report.
- :menuselection:`Payroll app --> Reporting --> SHIF Report` — generates the SHIF
  contribution report (available from October 2024 onwards).

.. note::
   Both reports are filtered to Kenya companies only and will not appear in multi-company
   environments with non-Kenyan companies.
