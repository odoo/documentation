=========
Lithuania
=========

The **Lithuania Payroll** localization provides a complete implementation of Lithuanian
payroll regulations, including progressive
:abbr:`PIT (Personal Income Tax)` at rates of 20%, 15% (on sick leave), and 32% (above the
annual threshold), mandatory social security contributions (:abbr:`SSC`), pension scheme
participation, and special disability-based tax exemptions. It generates a localised
payslip report and stores the company's social security registration number.

Before configuring the Lithuania localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/lt_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Lithuania payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Lithuania - Payroll`
     - ``l10n_lt_hr_payroll``
     - Provides the salary structure, progressive PIT, SSC contributions, disability
       exemptions, and payslip report for Lithuanian payroll.
   * - :guilabel:`Lithuania - Payroll with Accounting`
     - ``l10n_lt_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the
       Lithuania localization.

General configuration
=====================

Navigate to :menuselection:`Settings app --> Users & Companies --> Companies`, select the
company, and enter the :guilabel:`Official Social Security Number` in the
:guilabel:`Lithuania` section. This number is used on the payslip report and in statutory
declarations.

Salary structure
================

When the Lithuania localization is installed, a single salary structure is available:
**Lithuania: Regular Pay** (code ``LTMONTHLY``), linked to the
**Lithuania: Employee** structure type with a monthly payment schedule.

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
     - Employee's gross monthly wage as defined on the contract.
   * - ``BIK``
     - Benefit in Kind
     - Taxable non-cash benefit entered as a payslip input.
   * - ``GROSS``
     - Taxable Salary
     - Sum of basic salary and all allowances.
   * - ``TAXABLEAMOUNTDISABLED``
     - Disability Tax Exemption
     - Additional non-taxable amount for employees with a recognised disability
       (see `Disability exemptions`_ below).
   * - ``TAXABLEAMOUNT``
     - Taxable Amount
     - Gross income reduced by the applicable non-taxable threshold.
   * - ``SICKAMOUNT``
     - Sick Leave Amount
     - Earnings derived from sick-leave worked-day lines.
   * - ``PIT``
     - Personal Income Tax
     - 20% PIT on the taxable amount (see `Income tax`_).
   * - ``PITSICK``
     - PIT on Sick Leave
     - 15% PIT on sick-leave earnings.
   * - ``PITLAST``
     - PIT Exceeding Amount (last year)
     - Payslip input for additional 32% tax due on income above the annual threshold
       in the previous year.
   * - ``SSC``
     - Social Security Contribution
     - Employee SSC at 19.5% (standard) or 22.5% (time-limited contracts).
   * - ``PENSION``
     - Pension Scheme Contribution
     - Optional 3.0% pension contribution (enable via payslip input).
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

Non-taxable thresholds
----------------------

Before applying PIT, a non-taxable amount is subtracted from gross income. The threshold
is calculated progressively:

- Employees earning up to EUR 642/month receive the **basic exemption** of EUR 400.
- The exemption reduces linearly for incomes between EUR 642 and EUR 2,864.22.
- No exemption applies above EUR 2,864.22/month.

The formula is:

.. math::

   \text{Exemption} = 400 - 0.18 \times \max(0,\; \text{Gross} - 642)

PIT rates
---------

.. list-table::
   :header-rows: 1
   :widths: 55 20 25

   * - Income type / threshold
     - Rate
     - Notes
   * - Standard employment income (up to EUR 90,246/year)
     - 20 %
     - Applied after non-taxable threshold
   * - Sick leave earnings
     - 15 %
     - Applied on sick-leave days only
   * - Income exceeding EUR 90,246/year
     - 32 %
     - Enter the additional tax via the ``PITLAST`` payslip input

Disability exemptions
---------------------

Employees with a recognised disability receive an additional non-taxable amount on top
of the standard threshold:

.. list-table::
   :header-rows: 1
   :widths: 55 45

   * - Working capacity
     - Additional monthly exemption (EUR)
   * - 0 – 25 %
     - 645
   * - 30 – 55 %
     - 600
   * - 60 – 100 % (standard)
     - No additional exemption

The disability percentage is read from the employee record.

Social security contributions
=============================

.. list-table::
   :header-rows: 1
   :widths: 50 25 25

   * - Contribution type
     - Employee
     - Employer
   * - Social Security (standard contract)
     - 19.5 %
     - 1.77 %
   * - Social Security (time-limited contract)
     - 22.5 %
     - 2.49 %
   * - Pension scheme (voluntary)
     - 3.0 %
     - —

.. note::
   The higher SSC rates for time-limited contracts reflect the additional obligations
   imposed by Lithuanian labour law on fixed-term employment.

To enable the voluntary **pension scheme** deduction, add a boolean input labelled
:guilabel:`Pension` to the payslip.

Rule parameters
===============

All rates and thresholds are stored as rule parameters. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review and update
them if the Lithuanian authorities announce changes.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Lithuanian tax or social security regulations.
