=====
Egypt
=====

The Egypt **Payroll** localization package enables payroll processing that fully complies with
Egyptian labor laws. It calculates progressive income tax, employee- and employer-paid social
security, and core salary components, including housing and transportation allowances.

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

Egyptian employee contracts
===========================

Once an employee has been :doc:`created in the database <../../employees/new_employee>`, a
:ref:`contract must be created <payroll/new-contract>`.

To check if the user already has a contract, navigate to the **Employees** app, then click on the
employee's Kanban card. The :icon:`fa-book` :guilabel:`Contracts` smart button displays a red zero
when no contract exists. Otherwise, it displays :guilabel:`In contract since (contract start date)`
in green.

.. note::
   Contracts can also be found by navigating to :menuselection:`Employees app --> Employees -->
   Contracts`. All contracts appear in a list view, grouped by status.

Populate the following contractual information in the :guilabel:`Salary Information` tab of the
contract:

- :guilabel:`Social Insurance Reference Amount`: Used as the base amount for calculating the
  :ref:`social insurance employee and employer portions
  <payroll/payroll_localizations/social-insurance>`.
- :guilabel:`Number of Leave Days`: Used for calculating the :ref:`provision amount for the annual
  leave for the employee <payroll/payroll_localizations/provisions>`.
- :guilabel:`Provision Number of Days`: Corresponds with the number of days used in the calculation
  of the :ref:`provision value of the end of service for the employee
  <payroll/payroll_localizations/provisions>`.
- :guilabel:`Total Number of Days`: Refers to the number of days used to calculate the
  :ref:`end-of-service benefit paid to the employee when their employment with the company ends
  <payroll/payroll_localizations/end-of-service>`.

.. _payroll/payroll_localizations/social-insurance:

Social insurance
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

The following leave types are available to employees working in Egypt: :ref:`Annual leave
<payroll/payroll_localizations/annual>`, :ref:`Sick leave <payroll/payroll_localizations/sick>`,
:ref:`Unpaid leave <payroll/payroll_localizations/unpaid>`, and :ref:`Other leave types
<payroll/payroll_localizations/other>`.

.. _payroll/payroll_localizations/annual:

Annual leave
------------

Employees are eligible for 21 days of annual leave, and if the employee requires more days, they
have to be :ref:`requested from HR managers <time_off/request-allocation>` accordingly.

.. important::
   Since the annual leave is fully paid, it is not connected to a salary rule, but it will appear on
   the worked days on the payslip form and on the PDF printout.

.. _payroll/payroll_localizations/sick:

Sick leave
----------

Three cases exist for sick leaves in terms of the amount to be deducted from the employee:

- :guilabel:`Fully paid`: first 30 calendar days each year (affects only working entries; no payroll
  deduction).

  **Payroll computation** =(Daily Wage)

- :guilabel:`75% paid`: next 60 days; payroll rule deducts 25% of an employee's salary.

  **Payroll computation** =(Daily Wage * 0.25)

- :guilabel:`0% paid`: after 90 days; payroll rule deducts 100% of an employee's salary.

  **Payroll computation** =(Daily Wage * 0.00)

.. _payroll/payroll_localizations/unpaid:

Unpaid leave
------------

Deductions are applied on the employee's salary based on the number of unpaid leave days taken, and
it is calculated by dividing the monthly salary for the employee by 30 to get the daily salary and
then multiplying it by the number of unpaid leave days taken.

.. _payroll/payroll_localizations/other:

Other leave types
-----------------

These are leave types considered fully paid and do not affect the end payslip, but are tracked in
the working entries:

- Maternity leave
- Hajj leave
- Death leave

Income tax
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
     - 600k - 699k
     - 700k - 799k
     - 800k - 899k
     - 900k - 1.2M
     - >1.2M
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

Employees are eligible to an EGP 20,000 personal exception on their gross income.

Overtime
========

Depending on the time of day and the time at which the overtime is recorded in, the additional
amount to be paid to the employee can be as follows:

- During daytime hours on working days, the amount is 1.35x times the employee's hourly wage.
- During nighttime hours on working days, the amount is 1.70x times the employee's hourly wage.
- On rest days and public holidays: The amount is 2.0x times the employee's hourly wage.

.. note::
   Overtime hours are registered as other inputs directly on payslips.

.. _payroll/payroll_localizations/provisions:

Provisions
==========

Provisions are the amounts computed by the employer to account for the payments made to the employee
for :abbr:`EOS (end-of-service)` benefits or annual leave. And it is computed on a monthly basis.

End of service benefit provision
--------------------------------

It is computed by dividing the end of service Provision Number of Days by 12 and multiplying the
result by the daily salary for the employee.

.. math::
   :class: overflow-scroll

   \text{Payroll computation} = \frac{\text{Provision Number of Days}}{12} \times \frac{\text{Wage} + \text{Allowances}}{30}

Annual leave provision
----------------------

It is computed by dividing the number of leave days by 12 and multiplying the result by the daily
salary for the employee.

.. math::
   :class: overflow-scroll

   \text{Payroll computation} = \frac{\text{Number of Leave Days}}{12} \times \frac{\text{Wage} + \text{Allowances}}{30}

.. _payroll/payroll_localizations/end-of-service:

End of service
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

End of service benefit
----------------------

It is calculated by multiplying the daily wage of the employee by the number of days for the end of
service that is set in the employee's contract.

.. math::
   :class: overflow-scroll

   \text{Payroll computation} = \frac{\text{Wage + Allowances}}{30} \times \text{End of Service Number of Days}

Out of contract
===============

Out-of-contract days are the days that fall within the payslip period but are not included in the
employee's contract period. The corresponding amount is added as a deduction on the payslip and is
calculated by multiplying the number of out-of-contract days by the employee's daily wage.

.. math::
   :class: overflow-scroll

   \text{Payroll computation} = \frac{\text Wage + Allowances}{\text{Days in the Month}} \times \text{Out of Contract Days}
