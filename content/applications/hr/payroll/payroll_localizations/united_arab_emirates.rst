====================
United Arab Emirates
====================

.. |UAE| replace:: :abbr:`UAE (United Arab Emirates)`
.. |GCC| replace:: :abbr:`GCC (Gulf Cooperation Council)`
.. |DEWS| replace:: :abbr:`DEWS (Daman Investments End of Service Programme)`
.. |EOS| replace:: :abbr:`EOS (End Of Service)`
.. |WPS| replace:: :abbr:`WPS (Wages Protection System)`

Configuration
=============

:ref:`Install <general/install>` the following modules to get all the features of the **United Arab
Emirates** **Payroll** localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`United Arab Emirates - Payroll`
     - `l10n_ae_hr_payroll`
     - Includes all rules, calculations, and salary structures.
   * - :guilabel:`United Arab Emirates - Payroll with Accounting`
     - `l10n_ae_hr_payroll_account`
     - Includes all accounts related to the payroll module.

.. seealso::
   :doc:`United Arab Emirates fiscal localization documentation
   <../../../finance/fiscal_localizations/united_arab_emirates>`

Employees
=========

First, configure the :doc:`employee general information <../../employees/new_employee>` and then
configure the following fields under the :guilabel:`Private Information` tab:

- :guilabel:`Nationality (Country)`: The nationality affects an employee's payslips, whether they
  are nationals or expats.
- :guilabel:`Identification Number`: Used to extract the :ref:`WPS report
  <payroll/l10n_ae/wps-reports>`.
- :guilabel:`Bank Account`: Used to extract the :ref:`WPS report <payroll/l10n_ae/wps-reports>` and
  generate payments for those employees.

.. note::
   The :guilabel:`Nationality (Country)` field needs to be set even if the employee is a |UAE|
   national since there is a different type of handling if they are citizens of a |GCC| country.

Contracts
=========

Once the employee form has been created, ensure the :doc:`contract <../contracts>` is enabled by
clicking on the :icon:`fa-book` :guilabel:`Contracts` smart button, or going to
:menuselection:`Employees --> Contracts`.

The following contractual information related to employees working in the United Arab Emirates are
found under the :guilabel:`Salary Information` tab:

- :guilabel:`Wage Type`: select :guilabel:`Fixed Wage` for Full-time or Part-time employees, or
  :guilabel:`Hourly Wage` for employees who are paid hourly.
- :guilabel:`Scheduled Pay`: the frequency of payslip issuance.
- :guilabel:`Wage`: :guilabel:`Monthly` or :guilabel:`Hourly` depending on the :guilabel:`Wage
  Type`.
- :guilabel:`Housing Allowance`
- :guilabel:`Transportation Allowance`
- :guilabel:`Other Allowance`

.. note::
   The allowance values set on the contract are used on the payslip lines as allowances.

- :guilabel:`Number of Leave Days`: Used to specify the number of annual leave days that an employee
  deserves in a particular year. Regardless of the actual number of leaves that the employee gets
  (extra leave days for some internal company reasons), the final calculation of the end of service
  and unpaid leaves is dependent on the number set on this field.

  .. note::
     The :guilabel:`Number of Leave Days` affects the calculation for unpaid leave provisions.

- :guilabel:`Is DEWS Applied`: DIFC Employee Workplace Savings (DEWS), if the employee is a
  |UAE| national and has |DEWS| applied, tick this checkbox.
- :guilabel:`Computed Based On Daily Salary`: Defines the way that the end of service is calculated:

  - Do not tick this checkbox if the standard calculation is to be used. This computes the
    compensation amount by dividing the monthly salary by **30** and then multiplying it by **21**.
  - Tick this checkbox and directly set the actual :guilabel:`Daily Salary` so that it is
    used in the end of service calculation.

Salary structures and salary rules
==================================

Other input rules
-----------------

The following are the different allowances that can be defined directly on the :doc:`payslip form
<../payslips>` to allow for the values that are set against these inputs to affect the |WPS|
calculations as monthly variable salaries for the specific employee that they are linked to.

Rules that are related to the |WPS| setup, are linked to other input types, and whenever they are
used, their values are reflected on the |WPS| as monthly variable salary for that specific employee.

+--------------------------------------+---------------------+
| **Type**                             | **Code**            |
+--------------------------------------+---------------------+
| :guilabel:`Conveyance Allowance`     | `CONVALLOW`         |
+--------------------------------------+---------------------+
| :guilabel:`Housing Allowance`        | `HOUALLOW`          |
+--------------------------------------+---------------------+
| :guilabel:`Medical Allowance`        | `MEDALLOW`          |
+--------------------------------------+---------------------+
| :guilabel:`Annual Passage Allowance` | `ANNUALPASSALLOW`   |
+--------------------------------------+---------------------+
| :guilabel:`Overtime Allowance`       | `OVERTIMEALLOW`     |
+--------------------------------------+---------------------+
| :guilabel:`Other Allowance`          | `OTALLOW`           |
+--------------------------------------+---------------------+
| :guilabel:`Leave Encashment`         | `LEAVEENCASH`       |
+--------------------------------------+---------------------+

End of service (EOS)
--------------------

End of service (EOS) provides the calculation for the allowance that the employee gets at the end of
their service. It is triggered when the employee's departure reason is set by archiving the
employee's record.

There are several different calculations depending on the scenario:

#. *The Employee spent less than a year in the company*: The employee does not get any |EOS|
   allowance since they are not eligible for it (they are eligible once they complete their first
   year in the company).
#. *The Employee spent more than a year and less than 5 years in the company*: The employee is
   eligible for an equivalent of **21** days of salary for each year they spent on the company.

   .. note::
      There are two ways for calculating the daily wage that gets paid for the employee against the
      21 days of the |EOS|: Either by the default way of dividing the monthly basic wage by 30. Or,
      it can be manually input on the contract of the employee under the *Daily Salary* field.

#. *The Employee spent more than 5 years in the company*: The employee is eligible for an equivalent
   of **30** days of salary for each year they spent on the company. In this case, if the default
   method is used, then the employee gets paid an equivalent of 1 month of salary, and the set
   *Daily Salary* field, they will get the amount for the day multiplied by 30.

   .. note::
      There are two payslips printout formats, one for normal salaries and one for end of service
      payslips, it is based on the employee being archived and having a departure reason or not.

End of service provision (EOS Provision)
----------------------------------------

The |EOS| provision provides the calculation for the end-of-service provision amount that the
company puts aside every month to count for the |EOS| that will be paid to them as an |EOS|
allowance.

Unlike the |EOS|, the provision is part of the employee's payslip from the start of their contract.

Just like the |EOS|, the provision has two calculations depending on the period spent by the
employee in the company:

- Less than 5 years: :math:`\frac{\text{Monthly Wage}}{30}\times{\frac{21}{12}}`
- More than 5 years: :math:`\frac{\text{Monthly Wage}}{30}\times{\frac{30}{12}}`

  .. note::
     This rule is not shown to the employee on the payslip printout and it does not affect their net
     payable, it is only for internal use by the company.

Annual leave provisions
-----------------------

Annual leave provisions are used for calculating the annual leave provision accumulated each month,
just like the |EOS| provision, it does not affect the total amount paid to the employee, it is for
internal use by the company.

It is calculated by dividing the employee's total salary (Total Salary = Wage + Allowances) by
**30** to get the daily salary. The daily salary is then multiplied by the eligible leave days and
divided by **12** to determine the monthly provision amount.

.. math::
   :class: overflow-scroll

   \text{Monthly Leave Provision} = \frac{\text{Total Salary} \times \text{Number of Leave Days}}{30}
   \div 12

Social insurance contributions
------------------------------

Social insurance contributions calculate the *social insurance*, which is only available to |UAE|
nationals.

The company contributes **15%** of the total monthly salary for the employee if the company is in
**Abu Dhabi** and **12.5%** if the company is in **another Emirate**.

.. note::
   The total monthly salary for the employee = [basic + all allowances set on the contract].

On the other hand, the employee contributes **5%** of their total monthly salary and that amount
gets deducted from the payslip amount.

Annual remaining leave balance rules
------------------------------------

Annual remaining leave balance rules are used for calculating the amount to be paid to or taken from
the employee based on the number of leave days deserved by the employee during the current year.

The annual leave :ref:`time off type <time_off/time-off-types>` is specified using the :guilabel:`Is
Annual Leave` checkbox.

If enabled, the rule calculates the amount of leave days deserved by the employee up to the current
date and subtracts the number of annual leave days taken, and if the result is positive, this means
that the employee should be compensated for remaining amount and if negative this means that the
employee is liable to the company for the difference.

Sick leave rules
----------------

Sick leave rules provide the calculation for cases where the employee is on sick leave and decides
how the payslip should be affected.

There are **3 cases** for the employee to have:

#. **Fully paid sick leave:** The employee can upload a sick leave certificate (SLI). Employees are
   eligible for **15 days** of this type of leave per calendar year.

   .. tip::
      The SLI is not mandatory in Odoo but can be done from the setup of the :ref:`time off types
      <time_off/time-off-types>`.

#. **50% paid sick leave:** Same as the fully paid one, but the employees are eligible for
   **30 days** from this leave type. These 30 days are counted after the first **15** fully paid
   days.
#. **0% paid sick leave:** Same as the fully paid one, but the employees are eligible for **45
   days** from this leave type. These **45 days** are counted after the first **15/30**
   fully/half-paid days.

.. important::
   As per the labor law of the United Arab Emirates, the 15, 30, 45 days are not specified as
   working days or calendar days so this point will rely on the company policy.

The amount paid for the employee per sick leave day is counted as
follows:

.. math::
   :class: overflow-scroll

   \frac{\text{Number of Leave Days} \times \text{Gross Per Month}}{30} \times \text{Percentage}

Where the gross per month is the basic + all other allowances set on the employee's contract.

Daman investments end of service programme (DEWS)
-------------------------------------------------

|DEWS| allows for calculating the |DEWS| amounts for the employees who are eligible for it and would
like to be registered on it under their current contract with the company.

It is calculated based on the number of years that employees have spent in the company:

- **Less than 5 years:** 5.83% is deducted from the employee's **BASIC** salary towards the DEWS.
- **More than 5 years:** 8.33% of The employee's **BASIC** is deducted from the total payable for
  that employee.

Unpaid leaves
-------------

Unpaid leaves allows for calculating the amount to be deducted when an employee takes an unpaid
leave. It is calculated by the following equation:

.. math::
   :class: overflow-scroll

   \frac{\text{Total Number of Unpaid Leave Days} \times \text{Gross Per Month}}{30}

Where the gross per month is the basic + all other allowances set on the employee's contract.

Out of contract days
--------------------

The out of contract days rule provides a calculation for the days before/after the contract period
that overlaps with the contract of days on the employee's payslips.

.. example::
   Payslips are generated for the period of 1st-30th of September but the contract expires on the
   21st, in this case, there are 7 days flagged as out of contract.

It is calculated by the following equation:

.. math::
   :class: overflow-scroll

   \frac{\text{Total Number of Unpaid Leave Days} \times \text{Gross Per Month}}{\text{Number of Days in Current Month}}

Manual deductions
-----------------

Manual deductions allows the user to add manual deductions to be applied to employees per payslip.

The amount to be deducted and the description of the deduction is to be set directly on the payslip
manually as other inputs.

Net salary
----------

Net salary showcases the net amount that the employee will get based on the payslip.

It is calculated by adding basic to all allowances and deducting all deductions from it.

.. important::
   The approach taken for the rules above is to first get the full amounts for all static amounts
   that are set on the contract and then deduct the amounts that should be deducted such as unpaid
   leaves, sick leaves, manual deductions, commission, etc.

Generating accounting entries from payslips
===========================================

The accounts are linked to each payroll rule as a debit or credit so that when a draft entry is
generated from a payslip, the amounts are reflected on the accounts accordingly.

The accounts need to be set in a way that would make the end-result entry balanced, otherwise a
warning is raised if it is not balanced and it will not generate the entry.

After reviewing the payslips and making sure that all the amounts are correct, generate a draft
entry, either one entry for all employees or an entry per employee depending on the setup done on
the settings.

.. example::
   Debit and credit accounts set up for the basic and allowance rules.

   .. image:: united_arab_emirates/accounting-setup-for-rules.png
      :alt: Accounting setup for the rules.

Pay employees
=============

After a batch or a payslip's journal entry has been posted, the company can proceed to pay their
employees.

In the batch itself or on the payslip, by clicking on the pay button, a payment is created and
linked to the posted entry for the payslip. The same can be done for batch payslips if one payment
is done from a single/multiple payment bank/cash journal.

.. note::
   Once the payslip is generated, the employee will be able to access the slips from their portal
   users. They will automatically receive an email mentioning that the payslips are now available to
   be viewed on their portal view.

Payslip printouts
=================

Two printout formats can be extracted from the payslip, it depends on the type of the payslip either
a *Monthly* payslip or an *End of Service* Payslip. It is triggered if the employee for the payslip
is generated is archived during that month.

Master report
=============

The *Master report* provides a detailed view of the amounts paid to employees for a specific period
based on the payslips that are generated for them during that period with payslip lines being set as
columns in an Excel report.

It is mainly used to make the auditing process for the human resources department easier and faster.

To access this report, go to :menuselection:`Payroll --> Reporting --> Master Report`.

.. _payroll/l10n_ae/wps-reports:

Wages protection system (WPS) reports
=====================================

The |WPS| is a report that needs to be submitted by the company to prove that they paid their
employees the right amounts on the right dates. It can either be generated per payslip or batch.

The following steps need to be followed before generating the report:

#. Go to :menuselection:`Payroll --> Configuration --> Settings` and under the :guilabel:`UAE
   Payroll WPS Settings` section, configure the following:

   - :guilabel:`Employer Unique ID`: Set a unique identifier for the company to be used in the |WPS|
     report.
   - :guilabel:`Salaries Bank Account`: Select a bank account or start typing to :guilabel:`Create
     and edit` a new bank account.

     .. important::
        When setting the :guilabel:`Salaries Bank Account` make sure to complete the following:

        - :guilabel:`Account Holder`: set as the company.
        - :guilabel:`Account Number`: has to be a valid IBAN.
        - :guilabel:`Bank`: has to have the :guilabel:`UAE Routing Code Agent ID` set.
        - :guilabel:`Send Money`: should be enabled and set to :guilabel:`Trusted`.

#. Set the unique identifier on all of the employees who are a part of the target of the
   batch/payslip.

   The :guilabel:`Identification No` field can be found on the employee's page under the
   :guilabel:`Private Information` tab.

Once the initial setup is done, the |WPS| can be generated either for one payslip or for a batch as
follows:

#. Generate the payslip one by one or as a batch.
#. Post the draft entity related to the payslips.
#. Create the payment report and set the :guilabel:`Export Format` to :guilabel:`UAE WPS`.

.. note::
   The report comes in a :file:`.sif` format as per the governmental requirements, so either use
   software that can open :file:`.sif` files or convert it to another format (:file:`.xslx`) to be
   able to review it.

The resulting file consists of the following:

#. **Employee Detail Record** (**EDR**): includes details of the employees on the batch. There
   should be one :abbr:`EDR (Employee Detail Record)` record per employee.
#. **Employee Variable Pay** (**EVP**): includes the details of the variable salary the employee got
   on that payslip. If the employee has any. The variable amounts are calculated from when other
   inputs are used that are linked to the salary rules (:menuselection:`Payroll --> Configuration
   --> Rules`).
#. **Salary Control Record** (**SCR**): There should only be one :abbr:`SCR (Salary Control Record)`
   per |WPS| file as it indicates the employer details and the totals for the payslips.
