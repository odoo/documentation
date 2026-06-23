=========
Indonesia
=========

The **Indonesia Payroll** localization provides a complete implementation of Indonesian payroll
regulations, including :abbr:`PPH21 (Pajak Penghasilan 21 — Personal Income Tax)` computation
based on :abbr:`PTKP (Penghasilan Tidak Kena Pajak — Non-Taxable Income)` categories, mandatory
:abbr:`BPJS (Badan Penyelenggara Jaminan Sosial — Social Security Administration)` contributions
for health and employment insurance, and an end-of-year tax settlement mechanism.

Before configuring the Indonesia localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/id_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Indonesia payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Indonesia - Payroll`
     - ``l10n_id_hr_payroll``
     - Provides the salary structure, PPH21 tax computation, BPJS contributions, and PTKP
       category management for Indonesian payroll.
   * - :guilabel:`Indonesia - Payroll with Accounting`
     - ``l10n_id_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Indonesia
       localization.

General configuration
=====================

Navigate to :menuselection:`Payroll app --> Configuration --> Settings` to configure the
default :guilabel:`BPJS JKK` (Work Accident Insurance) rate that applies to new employee
contracts. The default value is **0.24%** and can be adjusted to reflect the company's
industry risk classification.

Employee configuration
======================

Configure the following fields on each employee's active contract to enable correct tax
and insurance calculations.

PTKP code
---------

The :guilabel:`PTKP Code` determines the employee's non-taxable income threshold and
influences which progressive PPH21 rate table applies. Set this field under the
:guilabel:`Indonesia Payroll` section of the contract:

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Meaning
   * - TK/0
     - Single, no dependants
   * - TK/1
     - Single, 1 dependant
   * - TK/2
     - Single, 2 dependants
   * - TK/3
     - Single, 3 dependants
   * - K/0
     - Married, no dependants
   * - K/1
     - Married, 1 dependant
   * - K/2
     - Married, 2 dependants
   * - K/3
     - Married, 3 dependants

.. note::
   Codes ``KI/0`` through ``KI/3`` are available for widowed employees with children.

Fixed allowance
---------------

A :guilabel:`Fixed Allowance` can be set on the contract. This amount is added to every
payslip alongside the basic salary and is included in all insurance and tax bases.

BPJS JKK rate
-------------

The :guilabel:`BPJS JKK` field on the contract allows overriding the company-default
work accident insurance rate for individual employees (e.g., employees in different risk
categories).

Salary structure
================

When the Indonesia localization is installed, a single salary structure is available:
**Indonesia: Regular Pay** (code ``IDMONTHLY``), linked to the
**Indonesia: Employee** structure type with a monthly payment schedule.

Salary rules
------------

**Earnings**

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Code
     - Name
     - Description
   * - ``BASIC``
     - Basic Salary
     - Employee's monthly wage as defined on the contract.
   * - ``FIXED_ALW``
     - Fixed Allowance
     - Recurring allowance defined on the contract.
   * - ``TRANSPORT_ALW``
     - Transport Allowance
     - Payslip input for monthly transport reimbursement.
   * - ``INSURANCE``
     - Insurance
     - Payslip input for additional insurance payments.
   * - ``LAPTOP``
     - Laptop
     - Payslip input for laptop or equipment allowance.
   * - ``INSENTIF``
     - Incentive
     - Payslip input for performance incentives.
   * - ``THR``
     - THR (Holiday Bonus)
     - Payslip input for the *Tunjangan Hari Raya* religious holiday bonus.
   * - ``MEAL``
     - Meal Allowance
     - Payslip input for meal subsidy.
   * - ``LEVEL``
     - Level Allowance
     - Payslip input for grade or seniority allowance.

**BPJS employer contributions (added to gross)**

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Code
     - Name
     - Description
   * - ``BPJS_JKK``
     - BPJS JKK (Work Accident)
     - Employer share of work accident insurance (rate from contract).
   * - ``BPJS_JKM``
     - BPJS JKM (Death Benefit)
     - Employer share of death benefit insurance (0.3% of basic).
   * - ``BPJS_Kesehatan``
     - BPJS Kesehatan (Health)
     - Employer share of health insurance (4% of capped basic).

**Employee deductions**

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Code
     - Name
     - Description
   * - ``JHT``
     - JHT (Old Age Savings)
     - 2% of basic deducted from employee.
   * - ``BPJS_KESEHATAN_DED``
     - BPJS Kesehatan Deduction
     - 1% of capped basic deducted from employee.
   * - ``JP``
     - JP (Pension Insurance)
     - 1% of capped basic deducted from employee.
   * - ``PPH21``
     - PPH 21
     - Monthly income tax withholding (see `Income tax (PPH21)`_ below).

**Net**

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``NET``
     - Final take-home pay (basic + allowances − BPJS deductions − PPH21).

BPJS contributions
==================

Indonesia's social security system (**BPJS**) covers two programmes:

BPJS Ketenagakerjaan (Employment)
-----------------------------------

.. list-table::
   :header-rows: 1
   :widths: 35 15 15 35

   * - Component
     - Employee
     - Employer
     - Notes
   * - JKK (Work Accident)
     - —
     - Configurable
     - Rate set per employee/contract based on risk level
   * - JKM (Death Benefit)
     - —
     - 0.30 %
     - Calculated on basic salary
   * - JHT (Old Age Savings)
     - 2.00 %
     - —
     - Capped at the JHT threshold (IDR 9,559,600)
   * - JP (Pension Insurance)
     - 1.00 %
     - —
     - Capped at the JP threshold (IDR 10,547,400 from 2025)

BPJS Kesehatan (Health)
-----------------------

.. list-table::
   :header-rows: 1
   :widths: 35 15 15 35

   * - Component
     - Employee
     - Employer
     - Notes
   * - Health Insurance
     - 1.00 %
     - 4.00 %
     - Calculated on basic salary capped at IDR 12,000,000

.. note::
   The JKK and JKM inclusions can be toggled for individual payslips using the
   :guilabel:`Include JKK/JKM` and :guilabel:`Include BPJS Kesehatan` options in the
   payslip's :guilabel:`Worked Days & Inputs` tab. Both are enabled by default.

Income tax (PPH21)
==================

PPH21 is withheld monthly. The calculation depends on the employee's **PTKP code**,
which determines the applicable rate table.

PTKP category mapping
---------------------

.. list-table::
   :header-rows: 1
   :widths: 40 60

   * - PTKP codes
     - Annual non-taxable income (IDR)
   * - TK/0, TK/1, K/0
     - 54,000,000 (Category A)
   * - TK/2, TK/3, K/1, K/2
     - 63,000,000 (Category B)
   * - K/3
     - 112,500,000 (Category C)

Monthly PPH21 calculation
--------------------------

Each month, Odoo projects the current month's gross salary to a yearly figure and
applies the progressive rate table for the employee's PTKP category.

The yearly progressive brackets are:

.. list-table::
   :header-rows: 1
   :widths: 55 20 25

   * - Annual taxable income (IDR)
     - Rate
     - Notes
   * - Up to 60,000,000
     - 5 %
     -
   * - 60,000,001 – 250,000,000
     - 15 %
     -
   * - 250,000,001 – 500,000,000
     - 25 %
     -
   * - 500,000,001 – 5,000,000,000
     - 30 %
     -
   * - Above 5,000,000,000
     - 35 %
     -

End-of-year and end-of-contract settlement
------------------------------------------

In the last payslip of the year (month 12), or when an employee's contract ends, Odoo
automatically enables the :guilabel:`Include PKP/PTKP computation` option on the payslip.

This triggers a full annual recalculation:

#. The accumulated **Biaya Jabatan** (occupational cost deduction, 5% of gross, capped at
   IDR 6,000,000/year) is applied.
#. The accumulated **JHT and JP** contributions for the year are deducted from taxable income.
#. The **PTKP** threshold is applied to arrive at the **PKP** (taxable net income), rounded
   down to the nearest IDR 1,000.
#. Tax is calculated on the PKP using the progressive brackets.
#. Any PPH21 already withheld during the year is subtracted — the resulting amount is the
   final settlement for that month.

Rule parameters
===============

All contribution rates and thresholds are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change in
   Indonesian tax or social security regulations.

Key parameters include:

.. list-table::
   :header-rows: 1
   :widths: 45 55

   * - Parameter
     - Description
   * - ``l10n_id_bpjs_salary_threshold``
     - BPJS Kesehatan salary cap (IDR 12,000,000)
   * - ``l10n_id_jp_threshold``
     - JP salary cap (IDR 10,547,400 from 2025)
   * - ``l10n_id_jht_threshold``
     - JHT salary cap (IDR 9,559,600)
   * - ``l10n_id_biaya_jabatan_salary_threshold``
     - Monthly Biaya Jabatan cap (IDR 6,000,000)
   * - ``l10n_id_biaya_jabatan_percent``
     - Biaya Jabatan rate (5%)
   * - ``l10n_id_pph21_percentage_a/b/c``
     - Progressive PPH21 rate tables for categories A, B, and C
