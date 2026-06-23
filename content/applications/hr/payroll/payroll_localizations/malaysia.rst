========
Malaysia
========

The **Malaysia Payroll** localization provides a complete implementation of Malaysian payroll
regulations, including :abbr:`EPF (Employees Provident Fund)` contributions,
:abbr:`SOCSO (Social Security Organisation)` contributions under different acts,
and :abbr:`EIS (Employment Insurance Scheme)` deductions. The localization supports
SOCSO-exempted employees (seniors and foreign workers above 55 years) with an alternative
contribution calculation.

Before configuring the Malaysia localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/my_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Malaysia payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Malaysia - Payroll`
     - ``l10n_my_hr_payroll``
     - Provides the salary structure, EPF, SOCSO, and EIS contribution rules for Malaysian
       payroll.
   * - :guilabel:`Malaysia - Payroll with Accounting`
     - ``l10n_my_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Malaysia localization.

Employee configuration
======================

The following field on the employee record is specific to the Malaysia localization:

:guilabel:`SOCSO Exempted`: Tick this checkbox for employees who are exempt from SOCSO
First Category contributions. Exemption applies to:

- Employees aged 60 and above.
- Employees aged 55 and above who had no prior SOCSO contributions.
- Foreign workers aged 55 and above (effective 1 July 2024).

When this flag is set, the employer contribution switches to the **SOCSO Act 4 Second
Category** (lower employer-only rates), and no employee SOCSO deduction is applied.

Contract allowances
===================

The following allowances can be added to individual payslips as input lines:

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Code
     - Description
   * - ``MY_GENERIC_ALW``
     - Generic allowance (any non-specific allowance).
   * - ``MY_DA``
     - Dearness Allowance.
   * - ``MY_HRA``
     - House Rent Allowance.
   * - ``MY_CONV_ALW``
     - Conveyance Allowance.

Salary structure
================

When the Malaysia localization is installed, a single salary structure is available:
**Malaysia: Regular Pay** (code ``MYMONTHLY``), linked to the
**Malaysia: Employee** structure type with a monthly payment schedule.

Salary rules
------------

**Earnings and gross**

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Code
     - Description
   * - ``BASIC``
     - Monthly wage as defined on the contract.
   * - Allowance rules
     - Payslip input lines (``MY_GENERIC_ALW``, ``MY_DA``, ``MY_HRA``, ``MY_CONV_ALW``).
   * - ``GROSS``
     - Sum of basic salary and all allowances.

**EPF contributions**

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Code
     - Description
   * - ``EPF_EMP``
     - Employee EPF contribution (11% of basic, deducted from pay).
   * - ``EPF_EMPLR``
     - Employer EPF contribution (13% for wages ≤ MYR 5,000; 12% above). Not shown on
       the employee payslip.

**SOCSO contributions**

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Code
     - Description
   * - ``SOCSO_800_EMP``
     - SOCSO Act 800 employee contribution (self-employment/voluntary; wage-banded).
   * - ``SOCSO_4_EMP``
     - SOCSO Act 4 First Category employee contribution (wage-banded).
   * - ``SOCSO_4_EMPLR``
     - SOCSO Act 4 employer contribution (First or Second Category depending on exemption).
       Not shown on payslip.
   * - ``SOCSO_EMP``
     - Total employee SOCSO contribution (visible on payslip).
   * - ``SOCSO_EMPLR``
     - Total employer SOCSO contribution. Not shown on payslip.

**EIS contributions**

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Code
     - Description
   * - ``EIS_EMP``
     - Employee EIS contribution (0.2% of basic).
   * - ``EIS_EMPLR``
     - Employer EIS contribution (0.2% of basic). Not shown on payslip.

EPF contributions
=================

The :abbr:`EPF (Employees Provident Fund)` is Malaysia's mandatory retirement savings scheme.

.. list-table::
   :header-rows: 1
   :widths: 35 20 45

   * - Period
     - Employee rate
     - Employer rate
   * - Standard (from 2022)
     - 11 %
     - 13% (wages ≤ MYR 5,000) / 12% (above)
   * - Temporary reduction 2020
     - 7 %
     - 13% / 12%
   * - Temporary reduction 2021
     - 9 %
     - 13% / 12%

SOCSO contributions
===================

SOCSO contributions are wage-banded — exact amounts are looked up in the contribution
tables rather than calculated as a flat percentage.

**Act 4 — First Category (regular employees):**

Both employee and employer contribute based on wage brackets ranging from MYR 30 to
MYR 6,000+. This is the standard schedule for most employees.

**Act 4 — Second Category (SOCSO-exempted employees):**

Only the employer contributes. This applies when the :guilabel:`SOCSO Exempted` flag is
enabled on the employee record.

**Act 800 (self-employed / voluntary scheme):**

Lower contribution rates, applicable to voluntarily enrolled workers.

EIS contributions
=================

The :abbr:`EIS (Employment Insurance Scheme)` provides short-term unemployment benefits.
Both employee and employer contribute at a rate of **0.2%** of the employee's monthly
basic salary.

Rule parameters
===============

All contribution rates, tables, and thresholds are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

Key parameters:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Parameter
     - Description
   * - ``l10n_my_epf_rate_employee``
     - Employee EPF rate (11% from 2022)
   * - ``l10n_my_epf_rate_employer_low``
     - Employer EPF rate for wages ≤ MYR 5,000 (13%)
   * - ``l10n_my_epf_rate_employer_high``
     - Employer EPF rate for wages > MYR 5,000 (12%)
   * - ``l10n_my_epf_threshold_employer``
     - Wage threshold separating employer EPF rates (MYR 5,000)
   * - ``l10n_my_socso_act_4_first_category_employee``
     - SOCSO Act 4 First Category employee contribution table
   * - ``l10n_my_socso_act_4_first_category_employer``
     - SOCSO Act 4 First Category employer contribution table
   * - ``l10n_my_socso_act_4_second_category_employer``
     - SOCSO Act 4 Second Category employer contribution table
   * - ``l10n_my_eis_rate_employee``
     - EIS employee rate (0.2%)
   * - ``l10n_my_eis_rate_employer``
     - EIS employer rate (0.2%)

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Malaysian social security or EPF regulations.
