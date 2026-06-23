========
Pakistan
========

The **Pakistan Payroll** localization provides a complete implementation of Pakistani
payroll regulations, including progressive annual income tax withholding, an
end-of-year tax adjustment wizard, and a statutory **End of Service (Gratuity)** benefit
for employees completing five or more years of service.

Before configuring the Pakistan localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/pk_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Pakistan payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Pakistan - Payroll`
     - ``l10n_pk_hr_payroll``
     - Provides the salary structure, progressive income tax, gratuity calculation, and
       end-of-year tax adjustment for Pakistani payroll.
   * - :guilabel:`Pakistan - Payroll with Accounting`
     - ``l10n_pk_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Pakistan localization.

Salary structure
================

When the Pakistan localization is installed, a single salary structure is available:
**Pakistan: Regular Pay** (code ``PKMONTHLY``), linked to the
**Pakistan: Employee** structure type with a monthly payment schedule.

Salary rules
------------

.. list-table::
   :header-rows: 1
   :widths: 22 30 48

   * - Code
     - Name
     - Description
   * - ``BASIC``
     - Basic Salary
     - Monthly wage as defined on the contract.
   * - ``GROSS``
     - Taxable Salary
     - Sum of basic salary and all allowances.
   * - ``GROSSY``
     - Gross Yearly
     - Annualised gross (GROSS × 12), used to determine the tax bracket.
   * - ``TXB``
     - Tax Bracket Yearly
     - Annual tax liability computed from the progressive bracket table.
   * - ``TXW``
     - Income Tax Withheld
     - Monthly withholding: annual tax ÷ 12. Only applied if annual gross exceeds
       PKR 600,000.
   * - ``EOS``
     - End of Service (Gratuity)
     - Lump-sum payment on termination for employees with 5+ years of service
       (see `End of service`_).
   * - ``TAX_CORRECT_POS``
     - Positive Tax Correction
     - Upward tax adjustment at year-end in favour of the employee (reduces tax owed).
   * - ``TAX_CORRECT_NEG``
     - Negative Tax Correction
     - Downward tax adjustment at year-end in favour of the company (additional tax).
   * - ``ATTACH_SALARY``
     - Attachment of Salary
     - Court-ordered salary attachment.
   * - ``ASSIG_SALARY``
     - Assignment of Salary
     - Voluntary salary assignment.
   * - ``CHILD_SUPPORT``
     - Child Support
     - Court-ordered child support.
   * - ``DEDUCTION``
     - General Deduction
     - Miscellaneous deduction (payslip input).
   * - ``REIMBURSEMENT``
     - Reimbursement
     - Expense reimbursement added to net pay.
   * - ``NET``
     - Net Salary
     - Final take-home pay.

Income tax
==========

Income tax is withheld monthly as one-twelfth of the annual liability.

No tax is withheld if the annualised gross (GROSS × 12) is **PKR 600,000 or below**.

Progressive tax brackets
------------------------

**2024 brackets (effective from 1 June 2024):**

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual taxable income (PKR)
     - Rate
     - Fixed component (PKR)
   * - Up to 600,000
     - 0 %
     - 0
   * - 600,001 – 1,200,000
     - 2.5 %
     - 15,000
   * - 1,200,001 – 2,400,000
     - 12.5 %
     - 150,000
   * - 2,400,001 – 3,600,000
     - 22.5 %
     - 270,000
   * - 3,600,001 – 6,000,000
     - 27.5 %
     - 660,000
   * - Above 6,000,000
     - 35 %
     - —

**2026 brackets (effective from 30 June 2025):**

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual taxable income (PKR)
     - Rate
     - Fixed component (PKR)
   * - Up to 600,000
     - 0 %
     - 0
   * - 600,001 – 1,200,000
     - 1 %
     - 6,000
   * - 1,200,001 – 2,200,000
     - 11 %
     - 116,000
   * - 2,200,001 – 3,200,000
     - 23 %
     - 346,000
   * - 3,200,001 – 4,100,000
     - 30 %
     - 616,000
   * - 4,100,001 – 10,000,000
     - 35 %
     - 2,681,000
   * - Above 10,000,000
     - Surcharge applies
     - Based on published formula

End-of-year tax adjustment
===========================

At the end of the tax year (or when an employee's contract ends), the total tax actually
withheld during the year may differ from the tax due on the actual year-to-date gross.
Use the built-in wizard to correct this difference.

To open the wizard, open the employee's draft payslip for the final month and click
:guilabel:`End of Year Tax Adjustment (PK)`.

The wizard shows:

- :guilabel:`Year-to-Date Gross` — total validated gross income for the current year
  (editable if needed).
- :guilabel:`Year-to-Date Tax Withheld` — total tax already deducted (editable if needed).

After reviewing the figures, click :guilabel:`Confirm`. Odoo calculates the difference
between the expected tax and the tax already withheld:

- If the employee was **over-taxed**: a positive correction (``TAX_CORRECT_POS``) is added
  to net pay.
- If the employee was **under-taxed**: a negative correction (``TAX_CORRECT_NEG``) deducts
  the shortfall.

.. tip::
   A warning appears in the wizard if the payslip is **not** for the last month of the tax
   year or for the employee's departure month. In such cases, verify whether an adjustment
   is actually needed before confirming.

End of service
==============

The **End of Service (Gratuity)** benefit is triggered automatically when an employee
with a departure date is processed on a payslip.

**Eligibility:** The employee must have completed at least **5 years** of service
(calculated from the contract start date to the departure date).

**Formula:**

.. math::

   \text{Gratuity} = \frac{\text{Monthly Wage} \times 30 \times \text{Service Years}}{26}

If the remaining months after the last full year total **6 or more**, an additional year
is counted.

Rule parameters
===============

The tax bracket tables are stored as rule parameters with date-based versioning. Navigate
to :menuselection:`Payroll app --> Configuration --> Rule Parameters` and search for
``l10n_pk_tax_brackets`` to view the current and future bracket definitions.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Pakistani income tax regulations.
