======
Poland
======

The **Poland Payroll** localization provides a complete implementation of Polish payroll
regulations, including progressive income tax with two brackets (12% and 32%), mandatory
social security contributions (ZUS), health insurance, and a childcare tax relief. All
employer contributions are tracked separately for costing purposes and do not appear on
the employee's payslip.

Before configuring the Poland localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/pl_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Poland payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Poland - Payroll`
     - ``l10n_pl_hr_payroll``
     - Provides the salary structure, ZUS contributions, income tax, childcare relief, and
       payslip report for Polish payroll.
   * - :guilabel:`Poland - Payroll with Accounting`
     - ``l10n_pl_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Poland
       localization.

Salary structure
================

When the Poland localization is installed, a single salary structure is available:
**Poland: Regular Pay** (code ``PLMONTHLY``), linked to the
**Poland: Employee** structure type with a monthly payment schedule.

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

**Employee ZUS contributions** (deducted from gross)

.. list-table::
   :header-rows: 1
   :widths: 22 15 63

   * - Code
     - Rate
     - Description
   * - ``PENSION``
     - 9.76 %
     - Employee pension contribution, subject to the annual cap of PLN 177,660.
   * - ``DISABILITY``
     - 1.50 %
     - Disability insurance contribution.
   * - ``SICKNESS``
     - 2.45 %
     - Sickness insurance contribution.
   * - ``SOCIAL.TOTAL``
     - —
     - Aggregated employee ZUS (shown on payslip).

**Tax computation**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``STANDARD.EARNING``
     - Fixed deduction of PLN 250 from gross (standard earning costs).
   * - ``TAXABLE``
     - Taxable income: GROSS + STANDARD.EARNING.
   * - ``TAX``
     - Progressive withholding tax (see `Income tax`_ below).
   * - ``HEALTH``
     - Health insurance: 9% of gross (deducted from employee; not tax-deductible).
   * - ``CHILD``
     - Childcare relief (reduces net tax; see `Childcare relief`_ below).

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

**Employer ZUS contributions** (not shown on payslip)

.. list-table::
   :header-rows: 1
   :widths: 22 15 63

   * - Code
     - Rate
     - Description
   * - ``PENSION.EMPLOYER``
     - 9.76 %
     - Employer pension contribution (capped at PLN 177,660/year).
   * - ``DISABILITY.EMPLOYER``
     - 6.50 %
     - Employer disability insurance contribution.
   * - ``ACCIDENT.EMPLOYER``
     - 1.67 %
     - Employer accident insurance contribution.
   * - ``LABOUR.EMPLOYER``
     - 2.45 %
     - Labour Fund and Solidarity Fund employer contribution.
   * - ``SOCIAL.TOTAL.EMPLOYER``
     - —
     - Aggregated employer ZUS.

Income tax
==========

Polish income tax is withheld monthly using a progressive two-bracket system. Tax is
computed on the **year-to-date (YTD)** basis — Odoo accumulates the gross from all
validated payslips in the current calendar year to determine the applicable bracket
for each new payslip.

**Tax brackets:**

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual taxable income (PLN)
     - Rate
     - Notes
   * - Up to 30,000
     - 0 % (exempt)
     - Tax-free allowance
   * - 30,001 – 120,000
     - 12 %
     - On the amount exceeding PLN 30,000
   * - Above 120,000
     - 32 %
     - On the amount exceeding PLN 120,000

**Standard earning costs:** PLN 250/month is deducted from gross before calculating
taxable income.

Childcare relief
================

Employees with dependent children benefit from a monthly tax reduction that applies
**after** the income tax is calculated:

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Children
     - Monthly relief (PLN)
   * - 1
     - 92.67
   * - 2
     - 185.34 (92.67 × 2)
   * - 3
     - 351.97 (92.67 + 92.67 + 166.67)
   * - Each additional child
     - 225.00 per extra child beyond 3

The number of qualifying children is read from the employee's record.

Social security cap
===================

The employee pension contribution (9.76%) and the employer pension contribution (9.76%)
are both subject to an annual contribution cap:

- **2024 cap:** PLN 177,660

Once the employee's year-to-date gross exceeds this threshold, the pension contributions
stop for the remainder of the year.

Rule parameters
===============

All rates, thresholds, and relief amounts are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

Key parameters:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Parameter
     - Description
   * - ``l10n_pl_social_security_cap``
     - Annual social security cap (PLN 177,660)
   * - ``l10n_pl_withholding_tax_threshold_low``
     - Lower tax threshold (PLN 30,000)
   * - ``l10n_pl_withholding_tax_threshold_high``
     - Upper tax threshold (PLN 120,000)
   * - ``l10n_pl_withholding_tax_rate_low``
     - Lower bracket tax rate (12%)
   * - ``l10n_pl_withholding_tax_rate_high``
     - Upper bracket tax rate (32%)
   * - ``l10n_pl_health_employee_rate``
     - Health insurance rate (9%)
   * - ``l10n_pl_childcare_relief``
     - Relief amounts per child [92.67, 92.67, 166.67, 225.00]
   * - ``l10n_pl_standard_earning``
     - Standard earning costs deduction (PLN 250)

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Polish tax or social security regulations.
