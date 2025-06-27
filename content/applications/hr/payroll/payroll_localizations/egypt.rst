=====
Egypt
=====

The Egypt **Payroll** localization package offers a comprehensive solution for managing payroll in
compliance with Egyptian labor laws. It supports income tax calculations using progressive tax
brackets, social security contributions from both employees and employers and basic salary
calculations, including allowances such as housing and transportation.

Configuration
=============

:ref:`Install <general/install>` the following modules to get all the features of the Egypt
**Payroll** localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Egypt - Payroll`
     - `l10n_eg_hr_payroll`
     - Payroll module includes all salary rules, leave logic, and compensation rules compliant with
       Egyptian Labor Law.
   * - :guilabel:`Egypt - Payroll with Accounting`
     - `l10n_eg_hr_payroll_account`
     - Adds account mappings related to payroll calculations.

.. seealso::
   :doc:`Egypt fiscal localization documentation <../../../finance/fiscal_localizations/egypt>`

Egyptian Employee Contracts
===========================

Once an employee has been :doc:`created in the database <../../employees/new_employee>`, a
:ref:`contract must be created <payroll/new-contract>`.

To check if the user already has a contract, navigate to the **Employees** app, then click on the
employee's Kanban card. If no contract has been created, the :icon:`fa-book` :guilabel:`Contracts`
smart button displays a red zero. If there is a contract, the :icon:`fa-book` :guilabel:`Contracts`
smart button displays :guilabel:`In contract since (contract start date)`, in green.

.. note::
   Contracts can also be found by navigating to :menuselection:`Employees app --> Employees -->
   Contracts`. All contracts appear in a list view, grouped by status.

Populate the following contractual information in the :guilabel:`Salary Information` tab of the
contract:

- :guilabel:`Social Insurance Reference Amount`: This is the amount that is used as the base amount
  for calculating the :ref:`social insurance employee and employer portions
  <payroll/l10n_eg_hr_payroll/social_insurance>`.
- :guilabel:`Number of Leave Days`: This value is used for calculating the :ref:`provision amount
  for the annual leave for the employee <payroll/l10n_eg_hr_payroll/provisions>`.
- :guilabel:`Provision Number of Days`: This corresponds to the number of days used in the
  calculation of the :ref:`provision value of the end of service for the employee
  <payroll/l10n_eg_hr_payroll/provisions>`.
- :guilabel:`Total Number of Days`: It refers to the number of days used to calculate the
  :ref:`end-of-service benefit paid to the employee when their employment with the company ends
  <payroll/l10n_eg_hr_payroll/end_of_service>`.

.. _payroll/l10n_eg_hr_payroll/social_insurance:

Social Insurance
================

Social insurance rules calculate the contribution amounts that are to be paid by the employer and
employee to the :abbr:`NOSI (National Organization for Social Insurance)`. This is only available
for Egyptian employees.

The employer contributes 18.75% of the social insurance reference amount for the employee. On the
other hand, the employee contributes 11% of their insurance reference amount, and that amount gets
deducted from the payslip amount.

.. important::
   The social insurance reference amount is set per employee in their contracts.

Leaves
======

The following leave types are available to employees working in Egypt:

Annual leave
------------

Employees are eligible for 21 days of annual leave, and if the employee requires more days, they
have to be :ref:`requested from HR managers <time_off/request-allocation>` accordingly.

.. important::
   Since the annual leave is fully paid, it is not connected to a salary rule, but it will appear on
   the worked days on the payslip form and on the PDF printout.

Sick leave
----------

Three cases exist for sick leaves in terms of the amount to be deducted from the employee:

- :guilabel:`Fully paid`: This is the case for the first 30 sick leave calendar days in a year, and
  since they are fully paid, they are not connected to a payroll rule and only affect the working
  entries of the employee.
- :guilabel:`75% paid`: This is the case for the next 60 sick leave calendar days in a year, and
  based on the number of leaves taken from this type, a deduction is applied to the employee of 25%
  of their salary.

  - **Payroll computation:** (Daily Wage * 0.25)

- :guilabel:`0% paid`: This is the case for any sick leave calendar day after the first 90 days of
  sick leave days in a year, and based on the number of the leaves taken from this type, a deduction
  is applied on the employee of 25% of their salary times the number of days taken.

  - **Payroll computation:** (Daily Wage * 0.25)

Unpaid leave
------------

Deductions are applied on the employee's salary based on the number of unpaid leave days taken, and
it is calculated by dividing the monthly salary for the employee by 30 to get the daily salary and
then multiplying it by the number of unpaid leave days taken.

Other leave types
-----------------

These are leave types considered fully paid and do not affect the end payslip, but are tracked in
the working entries:

- Maternity leave
- Hajj leave
- Death leave

Income Tax
==========

In Egypt, employees are subject to a progressive income tax system, where tax rates increase with
higher annual income brackets.

Tax brackets
------------

Depending on the annual income of the employee, the following rates apply:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Taxable Amount
     - <600k
     - 600k< & <700k
     - 700k< & <800k
     - 800k< & <900k
     - 900k< & <1.2M
     - 1.2M<
   * - 0%
     - 1-40k
     - -
     - -
     - -
     - -
     - -
   * - 10%
     - More than 40k to 55k
     - 1 - 55k
     - -
     - -
     - -
     - -
   * - 15%
     - More than 55k to 70k
     - More than 55k to 70k
     - 1 - 70k
     - -
     - -
     - -
   * - 20%
     - More than 70k to 200k
     - More than 70k to 200k
     - More than 70k to 200k
     - 1 - 200k
     - -
     - -
   * - 22.5%
     - More than 200k to 400k
     - More than 200k to 400k
     - More than 200k to 400k
     - More than 200k to 400k
     - 1 - 400k
     - -
   * - 25%
     - More than 400k
     - More than 400k
     - More than 400k
     - More than 400k
     - More than 400k
     - 1 - 1.2M
   * - 27.5%
     - -
     - -
     - -
     - -
     - -
     - More than 1.2M

Exemptions
----------

Employees with a yearly gross salary below EGP 600,000 are eligible for an EGP 20,000 exemption on
their taxable salary.

OverTime
========

Depending on the time of day and the time at which the overtime is recorded in, the additional
amount to be paid to the employee can be as follows:

- During daytime hours on working days, the amount is 1.35 times the employee's hourly wage.
- During nighttime hours on working days, the amount is 1.70x times the employee's hourly wage.
- On rest days and public holidays: The amount is 2.0x times the employee's hourly wage.

.. note::
   Overtime hours are registered as other inputs directly on payslips.

.. _payroll/l10n_eg_hr_payroll/provisions:

Provisions
==========

Provisions are the amounts computed by the employer to account for the payments made to the employee
for :abbr:`end-of-service (EOS)` benefits or annual leave. And it is computed on a monthly basis.

End of service benefit provision
--------------------------------

It is computed by dividing the end of service Provision Number of Days by 12 and multiplying the
result by the daily salary for the employee.

- **Payroll computation:** (Provision Number of Days /12 ) * ((Wage + Allowaneces) /30)

Annual leave provision
----------------------

It is computed by dividing the number of leave days by 12 and multiplying the result by the daily
salary for the employee.

- **Payroll computation:** (Number of Leave Days /12 ) * ((Wage + Allowaneces) /30)

.. _payroll/l10n_eg_hr_payroll/end_of_service:

End of Service
==============

At the end of the service slip that is generated for the employee, there are the following points
that are unique only to the payslip:

Unused leaves compensation
--------------------------

The number of available annual leaves is shown on the employee's record. It is based on the annual
leave type defined in the Payroll settings. It is calculated as the total remaining allocations for
that specific leave type assigned to the employee.

That number is then multiplied by the daily rate for the employee and added as an allowance on their
payslip.

End of Service Benefit
----------------------

It is calculated by multiplying the daily wage of the employee by the number of days for the end of
service that is set in the employee's contract.

- **Payroll computation:** ((Wage + Allowances) /30 ) * (End of Service Number of Days)

Out of Contract
===============

Out-of-contract days are the days that fall within the payslip period but are not included in the
employee's contract period. The corresponding amount is added as a deduction on the payslip and is
calculated by multiplying the number of out-of-contract days by the employee's daily wage.

- **Payroll computation:** ((Wage + Allowances) /Number of Days in the months ) * (Out of contract
  days)
