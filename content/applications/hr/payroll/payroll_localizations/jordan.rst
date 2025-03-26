======
Jordan
======

The Jordan **Payroll** localization package offers a comprehensive solution for managing payroll in
compliance with Jordanian labor laws. It supports income tax calculations using progressive tax
brackets, social security contributions from both employees and employers and basic salary
calculations, including allowances such as housing and transportation.

Configuration
=============

:ref:`Install <general/install>` the following modules to get all the features of the Jordan
**Payroll** localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Jordan - Payroll`
     - `l10n_jo_hr_payroll`
     - Payroll module supporting basic calculation, tax income brackets, and national contribution
       tax and social security
   * - :guilabel:`Jordan - Payroll with Accounting`
     - `l10n_jo_hr_payroll_account`
     - Bridge module between **Payroll** and **Accounting**

.. seealso::
   :doc:`Jordan fiscal localization documentation <../../../finance/fiscal_localizations/jordan>`

Basic calculations
==================

The Jordan **Payroll** localization package in Odoo provides foundational payroll management tools
that are compliant with Jordan's labor laws and regulations. Key features include:

- **Basic salary calculations**: Odoo supports the computation of employee salaries based on
  predefined salary structures, ensuring accurate payroll processing.
- **Social security contributions**: It handles social security deductions for employees and
  employer contributions, aligning with local regulations.
- **Taxation support**: The system is configured to handle income tax calculations in Jordan,
  including deductions based on progressive tax brackets as required by Jordanian labor and tax
  laws.
- **Custom allowances and deductions**: The localization supports additional allowances, deductions,
  or overtime as part of payroll computation.

These features ensure businesses can manage payroll effectively and comply with Jordanian-specific
legal requirements. For enhanced functionality, businesses may leverage Odoo's flexibility to
customize payroll workflows.

Social security
===============

The Jordan **Payroll** localization package in Odoo simplifies social security management by
automating calculations for both employees and employers. Contributions are based on a percentage of
the employee's basic salary, with a maximum insurable wage cap in line with Jordanian Social
Security Corporation (SSC) regulations.

Employee contributions
----------------------

Odoo calculates the employee's social security deduction as 7.5% of their basic salary, up to the
insurable wage cap of 3,000 JOD. If the employee's salary exceeds this cap, the deduction is based
on the capped amount. This ensures compliance with :abbr:`SSC (Jordanian Social Security
Corporation)` requirements and reflects accurately on the employee's payslip.

Employer contributions
----------------------

For employers, Odoo computes social security contributions as 14.25% of the employee's basic salary,
also capped at 3,000 JOD. Like the employee contributions, if the salary exceeds this cap, the
employer's contribution is calculated based on the capped amount. These contributions include
pensions, workplace injury insurance, and other mandated benefits.

Key features
------------

- **Capped contributions**: The system ensures that both employee and employer contributions are
  aligned with the SSC-mandated insurance cap.
- **Automated calculations**: Contributions are automatically calculated and included in payroll,
  reducing errors and administrative work.
- **Compliance with regulations**: Odoo's configuration ensures full compliance with Jordanian
  social security laws, reflecting the correct rates and caps for both sides.

Income tax calculation
======================

The Jordan **Payroll** localization package automates income tax calculations using progressive tax
brackets, ensuring compliance with Jordanian labor laws. The system applies income tax rates based
on the employee's annual gross income, with higher brackets subject to increased percentages. The
calculations are divided into six brackets, and the appropriate tax is deducted monthly.

Tax brackets
------------

- **5% bracket**: Applicable to annual gross income up to 5,000 JOD. Odoo calculates 5% of the
  income within this range. If the gross income is below 5,000 JOD, the entire amount is taxed at
  5%.
- **10% bracket**: Applicable to annual gross income between 5,001 and 10,000 JOD. Only the portion
  of income exceeding 5,000 JOD is taxed at 10%. For example, if the gross income is 7,000 JOD, only
  2,000 JOD is taxed at 10%.
- **15% bracket**: Applicable to annual gross income between 10,001 and 15,000 JOD. The portion of
  income exceeding 10,000 JOD up to 15,000 JOD is taxed at 15%. For instance, if the gross income is
  12,000 JOD, only 2,000 JOD is taxed at 15%.
- **20% bracket**: Applicable to annual gross income between 15,001 and 20,000 JOD. Income within
  this range is taxed at 20%, with deductions automatically adjusted by Odoo.
- **25% bracket**: Applicable to annual gross income between 20,001 and 1,000,000 JOD. Income beyond
  20,000 JOD up to 1,000,000 JOD is taxed at 25%. For higher incomes, Odoo ensures accurate
  calculations by applying the cap of this range.
- **30% bracket**: Applicable to annual gross income exceeding 1,000,000 JOD. Any income above this
  amount is taxed at 30%, with the system ensuring accurate monthly deductions for high-income
  earners.

Automated process
-----------------

Odoo determines the appropriate tax bracket for each employee based on their gross annual income and
applies the corresponding rates. These deductions are prorated and deducted monthly, simplifying
payroll management and ensuring compliance.

Key features
------------

- **Progressive tax system**: Calculates taxes for each income range individually, ensuring fairness
  and accuracy.
- **Automated deductions**: Ensures a smooth payroll workflows with accurate and timely monthly tax
  deductions.
- **Alignment with Jordanian regulations**: Fully complies with Jordanian tax laws, minimizing
  manual intervention and errors.
