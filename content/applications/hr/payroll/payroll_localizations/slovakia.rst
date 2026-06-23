========
Slovakia
========

The **Slovakia Payroll** localization provides a complete implementation of Slovak payroll
regulations, including progressive income tax (19% up to the annual threshold, 25% above),
comprehensive employee and employer social security contributions, health insurance, and a
meal voucher system split between employer and employee contributions.

Before configuring the Slovakia localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/sk_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Slovakia payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Slovakia - Payroll`
     - ``l10n_sk_hr_payroll``
     - Provides the salary structure, progressive income tax, social security, health
       insurance, meal vouchers, and payslip report for Slovak payroll.
   * - :guilabel:`Slovakia - Payroll with Accounting`
     - ``l10n_sk_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Slovakia localization.

Employee and contract configuration
=====================================

Two fields specific to the Slovakia localization appear on the employee's active contract
and on contract templates:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Meal Voucher (Employee share)`
     - The employee's contribution per voucher (entered as a daily amount). This amount is
       deducted from the employee's net salary for each working day in the month.
   * - :guilabel:`Meal Voucher (Employer share)`
     - The employer's contribution per voucher. This amount is an employer cost and is
       subtracted from the payslip to show the employee's effective take-home pay.

.. note::
   Meal vouchers are only generated for actual working days. They scale automatically with
   the number of :guilabel:`WORK100` (regular attendance) days in the payslip period.

Salary structure
================

When the Slovakia localization is installed, a single salary structure is available:
**Slovakia: Regular Pay** (code ``SKMONTHLY``), linked to the
**Slovakia: Employee** structure type with a monthly payment schedule.

Salary rules
------------

**Earnings**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``BASIC``
     - Monthly wage as defined on the contract.
   * - ``MEALEMPLOYEE``
     - Employee meal voucher allowance — added to take-home, then deducted via
       ``MEALEMPLOYER``.
   * - ``GROSS``
     - Sum of basic salary and all allowances.

**Employee social security contributions** (deducted from gross, capped at EUR 8,477/month)

.. list-table::
   :header-rows: 1
   :widths: 22 15 63

   * - Code
     - Rate
     - Description
   * - ``SICK``
     - 1.4 %
     - Sickness insurance.
   * - ``PENSION``
     - 4.0 %
     - Pension contribution.
   * - ``DISABILITY``
     - 3.0 %
     - Disability insurance.
   * - ``UNEMPLOYMENT``
     - 1.0 %
     - Unemployment insurance.
   * - ``HEALTH``
     - 4.0 %
     - Health insurance (applied to gross salary, not capped).

**Income tax**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``INCOMETAX19``
     - 19% income tax on the portion of taxable income up to the annual threshold
       (EUR 41,445.46). Tracks YTD income to avoid over-taxing at year end.
   * - ``INCOMETAX25``
     - 25% income tax on the portion of taxable income above the annual threshold.

**Meal voucher deduction**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``MEALEMPLOYER``
     - Employer meal voucher contribution — deducted from the employee's payslip
       (net effect: employee receives their share only).

**Net and totals**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``SOCIALEMPLOYEETOTAL``
     - Sum of all employee social security and health contributions.
   * - ``INCOMETAXTOTAL``
     - Total income tax (19% + 25%).
   * - ``NET``
     - Final take-home pay.

**Employer contributions** (not shown on payslip)

.. list-table::
   :header-rows: 1
   :widths: 22 15 63

   * - Code
     - Rate
     - Description
   * - ``SICKEMPLOYER``
     - 1.4 %
     - Employer sickness insurance.
   * - ``PENSIONEMPLOYER``
     - 14.0 %
     - Employer pension contribution.
   * - ``DISABILITYEMPLOYER``
     - 3.0 %
     - Employer disability insurance.
   * - ``UNEMPLOYMENTEMPLOYER``
     - 0.5 %
     - Employer unemployment insurance.
   * - ``SHORTTIMEEMPLOYER``
     - 0.5 %
     - Short-time work insurance (employer only).
   * - ``GUARANTEEEMPLOYER``
     - 0.25 %
     - Guarantee insurance (employer only).
   * - ``ACCIDENT``
     - 0.80 %
     - Accident insurance (employer only).
   * - ``RESERVEFUNDEMPLOYER``
     - 4.75 %
     - Reserve fund (employer only).
   * - ``HEALTHEMPLOYER``
     - 10.0 %
     - Employer health insurance contribution.

Income tax
==========

Slovak income tax uses a two-bracket progressive system with an annual threshold.

The tax calculation is **year-to-date aware** — Odoo accumulates each employee's validated
gross income during the calendar year to determine which bracket applies.

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual taxable income (EUR)
     - Rate
     - Notes
   * - Up to 41,445.46
     - 19 %
     -
   * - Above 41,445.46
     - 25 %
     - On the portion above the threshold only

Social security assessment base
=================================

Most social security contributions (sickness, pension, disability, unemployment) are
calculated on the employee's gross salary **capped at EUR 8,477 per month** (2017
parameter). Contributions above this base are not charged.

Health insurance (4% employee, 10% employer) is calculated on the **full gross salary**
without a cap.

Rule parameters
===============

All rates and thresholds are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

Key parameters:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Parameter
     - Description
   * - ``l10n_sk_monthly_taxable_max``
     - Maximum monthly assessment base (EUR 8,477)
   * - ``l10n_sk_income_tax_threshold``
     - Annual income tax threshold (EUR 41,445.46)

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Slovak tax or social security regulations.
