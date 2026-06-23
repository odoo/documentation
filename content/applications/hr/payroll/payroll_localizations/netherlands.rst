===========
Netherlands
===========

The **Netherlands Payroll** localization provides a complete implementation of Dutch
payroll regulations, including progressive income tax (:abbr:`IB (Inkomstenbelasting)`),
national insurance contributions (AOW, Anw, Wlz), employer social security contributions
(Zvw, WW, WAO/WIA, Whk), and support for the **30% reimbursement ruling**
(*30%-regeling*) for highly skilled migrants.

Before configuring the Netherlands localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/nl_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Netherlands payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Netherlands - Payroll`
     - ``l10n_nl_hr_payroll``
     - Provides the salary structure, income tax, national insurance, employer contributions,
       and 30% ruling support for Dutch payroll.
   * - :guilabel:`Netherlands - Payroll with Accounting`
     - ``l10n_nl_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Netherlands localization.

Employee and contract configuration
=====================================

The only Netherlands-specific field is found on the employee's active contract:

:guilabel:`30% Reimbursement Ruling`: Tick this checkbox for employees who qualify for
the *30%-regeling* — a tax advantage allowing the employer to pay a **30% tax-free
allowance** (on top of the normal salary) to compensate the extra costs incurred by
highly skilled migrants relocating to the Netherlands.

When enabled:

- The **taxable base** for income tax is reduced to **70%** of gross salary.
- National insurance contributions (AOW, Anw, Wlz) are also calculated on 70% of gross.
- The employer contribution for **Whk** (return-to-work fund) applies the non-resident rate
  (15.3%) instead of the resident rate (1.53%).

Salary structure
================

When the Netherlands localization is installed, a single salary structure is available:
**Netherlands: Regular Pay** (code ``NLMONTHLY``), linked to the
**Netherlands: Employee** structure type with a monthly payment schedule.

Salary rules
------------

**Earnings**

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``BASIC``
     - Monthly wage as defined on the contract.
   * - ``GROSS``
     - Sum of basic salary and all allowances.
   * - ``REIMBURSEMENT``
     - Expense reimbursement (payslip input, added to net pay).

**Employee national insurance contributions**

.. list-table::
   :header-rows: 1
   :widths: 12 15 10 63

   * - Code
     - Name
     - Rate
     - Notes
   * - ``AOW``
     - Old Age Insurance
     - 17.9 %
     - Capped at EUR 35,129/year. For non-residents with 30% ruling: applied on 70% of gross.
   * - ``Anw``
     - Survivor Dependant Insurance
     - 0.1 % / 1.0 %
     - 0.1% for residents; 1.0% for non-residents. Same cap as AOW.
   * - ``Wlz``
     - Long-term Care Insurance
     - 9.65 %
     - Applicable to all employees. Same cap as AOW.

**Taxable income and income tax**

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Code
     - Description
   * - ``TAXABLE``
     - Taxable income: 70% of gross (if 30% ruling) or 100% gross, plus all deductions.
   * - ``INCOMETAX``
     - Progressive income tax on the taxable income (see `Income tax`_ below).

**Employer social security contributions** (not shown on payslip)

.. list-table::
   :header-rows: 1
   :widths: 12 18 12 58

   * - Code
     - Name
     - Rate
     - Notes
   * - ``Zvw``
     - Health Insurance
     - 6.75 %
     - Employer's health insurance premium; capped annually.
   * - ``WW``
     - Unemployment Insurance
     - 2.64 %
     - Employer contribution to the unemployment fund; capped annually.
   * - ``WWFund``
     - Sector Unemployment Fund
     - 0.77 %
     - Employer sector-specific unemployment fund; capped annually.
   * - ``WAO/WIA``
     - Disability Insurance
     - 7.11 %
     - Work disability insurance; capped annually.
   * - ``Whk``
     - Return to Work Fund
     - 1.53 % / 15.3 %
     - 1.53% for residents; 15.3% for non-residents (or 30%-ruling employees).

Income tax
==========

Income tax is calculated monthly on the **taxable income** using three progressive
brackets (2023):

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual income (EUR)
     - Rate
     - Notes
   * - Up to 35,742
     - 9.28 %
     -
   * - 35,743 – 73,031
     - 36.93 %
     -
   * - Above 73,031
     - 49.50 %
     -

For each payslip, Odoo divides the annual bracket thresholds by 12 to obtain monthly
equivalents and applies the tax progressively.

.. note::
   Separate rate tables are available for **non-resident** employees. The appropriate
   table is selected automatically based on whether the employee is a resident or
   non-resident.

Rule parameters
===============

All tax rates, brackets, and social security caps are stored as rule parameters. Navigate
to :menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

Key parameters:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Parameter
     - Description
   * - ``l10n_nl_income_tax_rates_resident``
     - Progressive income tax brackets for Dutch residents (3 bands)
   * - ``l10n_nl_income_tax_rates_non_resident``
     - Progressive income tax brackets for non-residents (3 bands)
   * - ``l10n_nl_social_security_rates_employee``
     - AOW, Anw, and Wlz rates and annual caps with resident/non-resident distinction
   * - ``l10n_nl_social_security_rates_employer``
     - Zvw, WW, WWFund, WAO/WIA, and Whk rates and annual caps

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Dutch tax or social security regulations.
