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
     - Includes all salary rules, leave logic, and compensation rules compliant with Jordan Labor
       Law.
   * - :guilabel:`Jordan - Payroll with Accounting`
     - `l10n_jo_hr_payroll_account`
     - Adds account mappings related to payroll calculations.

.. seealso::
   :doc:`Jordan fiscal localization documentation <../../../finance/fiscal_localizations/jordan>`

Employee overview
=================

The following contractual information related to employees working in Jordan is found under the
`Payroll` tab in the **Employees** app:

- :guilabel:`Is Blind`: If marked *True*, the employee's full salary will be tax-exempt.
- :guilabel:`Has Dependents`: If the employee has dependents, such as a spouse, children, or
  parents, they will receive an additional exemption on their taxable salary.
- :guilabel:`Is Eligible for EOS`: Some employees might not be eligible for the end-of-service
  benefit, and by default, it is set to *True*.
- :guilabel:`Annual Leave Balance`: This displays the available balance of annual leave days for the
  employee, the time off type that is considered *Annual leave* is defined in the payroll settings
  with the field *Annual Leave Time-off Type*.
- :guilabel:`Non-resident`: Non-residents of Jordan who have an income from a Jordanian source are
  *not* eligible for the personal exemption.
- :guilabel:`Number of Leave days`: This is used to calculate the annual leave days provision amount
  and it has a default value of 14.

Social Insurance
================

Social insurance rules calculate the contribution amounts that are to be paid by the employer and
employee to the :abbr:`Social Security Corporation (SSC)`. This is only available for Jordanian
employees.

The employer contributes 14.25% of the employee's salary to the :abbr:`Social Security Corporation
(SSC)`, while the employee contributes 7.5% of their salary, which is deducted from their payslip.

For both employer and employee contributions, the base amount on which they are calculated is bound
by a cap that gets updated every year.

Leaves
======

The following leave types are available to employees working in Jordan:

- :guilabel:`Annual leave`: Employee's are eligible for 21 days of annual leave, and if the employee
  requires more days, they have to be requested from HR managers accordingly.

.. important::
   Since the annual leave is fully paid, it is not connected to a salary rule, but it will appear on
   the worked days on the payslip form and on the PDF printout.

- :guilabel:`Sick leave`: Employee's working in Jordan are entitled to 14 days of paid sick leave
  per year, with the possibility of an additional 14 days if hospitalized. No deductions are applied
  to the employee in those cases.

- :guilabel:`Other leave types`: These leave types are fully paid and do not affect the final
  payslip, but are tracked for reporting purposes:

  - :guilabel:`Maternity leave`
  - :guilabel:`Paternity Leave`
  - :guilabel:`Pilgrimage Leave`
  - :guilabel:`Study leave`

Income Tax
==========

In Jordan, employees are subject to a progressive income tax system, where tax rates increase with
higher annual income brackets.

Tax brackets
------------

Depending on the annual income of the employee, the following rates apply:

.. list-table::
   :header-rows: 1
   :stub-columns: 0

   * - Taxable Bracket
     - Range
   * - 5%
     - 0-5,000
   * - 10%
     - 5,001 - 10,000
   * - 15%
     - 10,001 - 15,000
   * - 20%
     - 15,001 - 20,000
   * - 25%
     - 20,001 - 1,000,000
   * - 30%
     - More than 1,000,000

.. note::
   Tax brackets are applied progressively. This means each portion of an employee's income is taxed
   at its respective rate within each bracket, rather than their entire income being taxed at the
   rate of the highest bracket they fall into.

Exemptions
----------

Several factors contribute to exempting part of an employee's gross income, including:

- **Jordanian residency**: Residents are entitled to a yearly exemption of 12,000 JOD.
- **Blindness**: Individuals who are blind are fully exempt from income tax.
- **Dependents**: An additional 12,000 JOD exemption per year for employees with dependents.

Overtime
========

Employees are entitled to additional pay for overtime worked, depending on when the overtime hours
are worked:

- On working days: Overtime is paid at 1.25 times the regular hourly wage.
- On rest days: Overtime is compensated at 1.5 times the regular hourly wage.

These percentages are recorded in the input parameters model.

.. note::
   The number of overtime hours is registered as other inputs directly on payslips

Provisions
==========

Provisions are the amounts computed by the employer to account for the payments made to the employee
for :abbr:`end-of-service (EOS)` benefits or annual leaves. It is computed on a monthly basis.

- **End of service benefit provision**: This is computed by dividing the monthly gross salary by 12

  .. math::

     \frac{\text{Basic} + \text{Allowances}}{12}

- **Annual leave provision**: This is computed by dividing the gross salary by 30 to get the daily
  salary, then multiplying that by the number of leave days, and dividing the result by 12.

  .. math::

     \left(\frac{\text{Basic} + \text{Allowances}}{30}\right)
     \times
     \left(\frac{\text{Number of Leave Days}}{12}\right)

End of Service
==============

At the end of the employee's service, if they are eligible for end-of-service benefits, they should
receive the following two benefits:

- **Unused leaves compensation**: The Annual Leave Balance is shown on the employee's record. It is
  based on the annual leave type defined in the **Payroll** app settings and is calculated as the
  total remaining allocations for that specific leave type assigned to the employee.

  The balance represents the total remaining leave allocated to the employee but does not reflect
  the portion of leave days the employee has earned up to the current month.

  When calculating the benefit value, the deserved leave balance is determined based on the portion
  of the year worked. The benefit value is then calculated by multiplying this deserved balance by
  the employee's daily rate.

  .. example::
     If an employee is entitled to 14 leave days per year and has worked for 6 months, they deserve
     7 leave days so far. If their daily rate is 50 JOD, the benefit value is: 7 days × 50 JOD = 350
     JOD

  .. important::
     The flow mentioned above requires the allocation for the annual leave to be given fully upfront
     in the beginning of the year for that employee

- **End of Service Benefit**: The calculation begins by determining the total number of days the
  employee has worked at the company, starting from their joining date up to their last working day.

  The total service duration is calculated out of a 365-day year.

  The resulting period in years is then multiplied by the employee's gross salary, which includes
  the basic salary and the allowances defined in the payroll tab on the employee record.

  .. math::

   (\text{Basic} + \text{Allowances}) \times \left(\frac{\text{Number of Days}}{365}\right)
