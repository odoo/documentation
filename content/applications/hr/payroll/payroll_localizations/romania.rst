=======
Romania
=======

The **Romania Payroll** localization provides a complete implementation of Romanian payroll
regulations, including the mandatory employee social security contributions —
:abbr:`CAS (Contribuția de Asigurări Sociale)` (25%) and
:abbr:`CASS (Contribuția de Asigurări Sociale de Sănătate)` (10%) — a flat 10% income tax,
and employer contributions for work insurance (:abbr:`CAM`) and additional pension
obligations based on working conditions. The localization also handles the optional
contribution for the employment of disabled people (*contribuția pentru persoanele cu
handicap*).

Before configuring the Romania localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/ro_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Romania payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Romania - Payroll`
     - ``l10n_ro_hr_payroll``
     - Provides the salary structure, CAS, CASS, income tax, CAM, and work-type pension
       contributions for Romanian payroll.
   * - :guilabel:`Romania - Payroll with Accounting`
     - ``l10n_ro_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Romania
       localization.

Salary structure
================

When the Romania localization is installed, a single salary structure is available:
**Romania: Regular Pay** (code ``ROMONTHLY``), linked to the
**Romania: Employee** structure type with a monthly payment schedule.

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
   * - ``GROSS``
     - Sum of basic salary and all allowances.
   * - ``REIMBURSEMENT``
     - Expense reimbursement added to net pay (payslip input).

**Employee contributions** (deducted from gross)

.. list-table::
   :header-rows: 1
   :widths: 12 15 73

   * - Code
     - Rate
     - Description
   * - ``CAS``
     - 25 %
     - Social security contribution (pension-related). Applied to gross.
   * - ``CASS``
     - 10 %
     - Health insurance contribution. Applied to gross.
   * - ``INCOMETAX``
     - 10 %
     - Flat personal income tax. Applied to gross.

**Mandatory deductions**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``ATTACH_SALARY``
     - Court-ordered salary attachment.
   * - ``ASSIG_SALARY``
     - Voluntary salary assignment.
   * - ``CHILD_SUPPORT``
     - Court-ordered child support.
   * - ``DEDUCTION``
     - Miscellaneous deduction (payslip input).
   * - ``NET``
     - Final take-home pay.

**Employer contributions** (not shown on payslip)

.. list-table::
   :header-rows: 1
   :widths: 12 15 73

   * - Code
     - Rate
     - Description
   * - ``CAM``
     - 2.25 %
     - Work Accident and Occupational Disease Insurance (*Contribuția Asiguratorie
       pentru Muncă*). Applied to gross.
   * - ``UNEMPDISABLED``
     - 0 % / 4 %
     - Contribution for the employment of disabled people. Applies at 4% when the company
       has more than 50 employees and does not meet its disabled-employment quota.
   * - ``PENSION``
     - 0 % / 4 % / 8 %
     - Additional employer pension contribution based on **work type** (see below).

Work type and employer pension
==============================

Romanian law requires employers to make additional pension contributions for employees
working in hazardous or special conditions. The contribution rate is set per employee
via the :guilabel:`Work Type` input on the payslip:

.. list-table::
   :header-rows: 1
   :widths: 15 25 60

   * - Value
     - Work type
     - Employer pension rate
   * - 1
     - Normal Conditions
     - 0 % (no additional contribution)
   * - 2
     - Particular Conditions
     - 4 % additional employer pension
   * - 3
     - Special Conditions
     - 8 % additional employer pension

To set the work type for an employee, add the :guilabel:`Work Type` input to the payslip's
:guilabel:`Worked Days & Inputs` tab and enter the appropriate value (1, 2, or 3).

.. note::
   The :guilabel:`Work Type` input defaults to **1 (Normal Conditions)** if not specified.
   The employer pension contribution (``PENSION``) is never shown on the employee payslip.

Contribution for disabled employment
======================================

The ``UNEMPDISABLED`` rule calculates whether the company owes a contribution for not
meeting the statutory disabled-employment quota:

- If the company has **50 or more** active employees in the payslip period and has not
  hired the required proportion of disabled workers, a **4%** contribution on gross is
  charged.
- If the company has fewer than 50 employees, no contribution is due (0%).

This employer cost is computed automatically and is not shown on individual employee
payslips.

Rule parameters
===============

All rates are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Romanian tax or social security regulations.
