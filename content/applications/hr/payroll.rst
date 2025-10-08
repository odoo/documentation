:show-content:

=======
Payroll
=======

Odoo *Payroll* is used to process work entries and create payslips for employees. *Payroll* works in
conjunction with other Odoo apps, such as *Employees*, *Time Off*, *Attendances*, and *Planning*.

The *Payroll* app helps ensure there are no issues or conflicts when validating work entries. It
also handles country-specific localizations to ensure payslips follow local rules and taxes, and
allows for salary assignments.

Settings
========

Configure the *Payroll* app by navigating to :menuselection:`Payroll app --> Configuration -->
Settings`. The various settings for accounting, localizations, time off, alerts, and payslips are
specified here.

.. _payroll-accounting:

Accounting
----------

The accounting section of the configuration menu relates to three options:

- :guilabel:`Payroll Entries`: enable this option to post payroll slips in accounting.
- :guilabel:`Payroll SEPA`: enable this option to create SEPA payments.
- :guilabel:`Batch Account Move Lines`: enable this option to have a single account move line
  created from all the accounting entries from the same period. This disables the generation of
  single payments.

Time off
--------

- :guilabel:`Deferred Time Off`: if time off is taken after payslips are validated, the time off
  needs to be applied to the following pay period. Select the person that will be notified for
  these specific time off situations using the drop-down menu in the :guilabel:`Responsible` field.

  .. example::
     An employee is paid on the 15th of the month and the last day of the month. Payslips are
     typically processed a day before.

     If an employee's payslip is approved and processed on the 30th, but that same employee takes an
     unexpected sick day on the 31st, the time off needs to be logged.

     Since the employee is already paid for a regular work day on the 31st, to keep the time off
     balances correct, the sick day is moved/applied to the 1st of the next month (the next pay
     period).

Payroll
-------

- :guilabel:`Contract Expiration Notice Period`: enter the number of :guilabel:`Days` before a
  contract expires, and Odoo notifies the responsible person about the upcoming expiration at that
  time.
- :guilabel:`Work Permit Expiration Notice Period`: enter the number of :guilabel:`Days` before a
  work permit expires, and Odoo notifies the responsible person about the upcoming expiration at
  that time.
- :guilabel:`Payslip PDF Display`: enable this option to show the payslip's PDF when the state is
  validated.

.. _payroll/work-entries:

Work entries
============

A *work entry* is an individual record on an employee's timesheet. Work entries can be configured to
account for all types of work and time off, such as :guilabel:`Attendance`, :guilabel:`Sick Time
Off`, :guilabel:`Training`, or :guilabel:`Public Holiday`.

.. seealso::
   :doc:`Manage work entries <payroll/work_entries>`

Work entry types
----------------

When creating a work entry in the *Payroll* application, or when an employee enters new time off types
in *Time Off* application, a :guilabel:`Work Entry Type` needs to be selected. The list of
:guilabel:`Work Entry Types` is automatically created based on localization settings set in the
database.

To view the current work entry types available, go to :menuselection:`Payroll app --> Configuration
--> Work Entries --> Work Entry Types`.

Each work entry type has a code to aid in the creation of payslips, and to ensure all taxes and fees
are correctly entered.

.. image:: payroll/work-entry-types.png
   :align: center
   :alt: List of all work entry types currently available for use, with the payroll code and color.

New work entry type
~~~~~~~~~~~~~~~~~~~

To create a new :guilabel:`Work Entry Type`, click the :guilabel:`New` button, and enter the
information for the following sections on the form.

General information section
***************************

- :guilabel:`Work Entry Type Name`: the name should be short and descriptive, such as `Sick Time` or
  `Public Holiday`.
- :guilabel:`Payroll Code`: this code appears with the work entry type on timesheets and payslips.
  Since the code is used in conjunction with the *Accounting* application, it is advised to check
  with the accounting department for a code to use.
- :guilabel:`External Code`: this code is used for exporting data to a third-party payroll service.
  Check with the third-party being used to determine the :guilabel:`External Code` to enter for the
  new work entry type.
- :guilabel:`Color`: select a color for the particular work entry type.

Display in payslip section
**************************

- :guilabel:`Rounding`: the rounding method selected determines how quantities on timesheet entries
  are displayed on the payslip.

  - :guilabel:`No Rounding`: entry is not modified.
  - :guilabel:`Half Day`: entry is rounded to the closest half day amount.
  - :guilabel:`Day`: entry is rounded to the closest full day amount.

.. example::
   If the working time is set to an 8-hour work day (40-hour work week), and an employee enters a
   time of 5.5 hours on a work entry, and :guilabel:`Rounding` is set to :guilabel:`No Rounding`, the
   entry remains 5.5 hours. If :guilabel:`Rounding` is set to :guilabel:`Half Day`, the entry is
   changed to 4 hours. If it is set to :guilabel:`Day`, it is changed to 8 hours.

Unpaid section
**************

- :guilabel:`Unpaid in Structures Types`: if the work entry is for work that is not paid, specify
  which pay structure the unpaid work entry applies to from the drop-down menu. Some situations
  where work is logged on a payslip, but no compensation given would be for unpaid internships,
  unpaid training, or volunteer work.

Valid for advantages section
****************************

- :guilabel:`Meal Voucher`: if the work entry should count towards a meal voucher, check the box.
- :guilabel:`Representation Fees`: if the work entry should count towards representation fees, check
  the box.
- :guilabel:`Private Car Reimbursement`: if the work entry should count towards a private car
  reimbursement, check the box.

Time off options section
************************

- :guilabel:`Time Off`: check this box if the work entry type can be selected for a time off
  request, or entry, in the *Time Off* application.

  If :guilabel:`Time Off` is checked, a :guilabel:`Time Off Type` field appears. This field has a
  drop-down menu to select the specific types of time off, such as `Paid Time Off`, `Sick Time Off`,
  or `Extra Hours`, for example.

  A new type of time off can be entered in the field, if the listed types of time off in the
  drop-down menu do **not** display the type of time off needed.

Reporting section
*****************

- :guilabel:`Unforeseen Absence`: if the work entry should be visible on the unforeseen absences
  report, check this box.

.. image:: payroll/new-work-entry-type.png
   :align: center
   :alt: New work entry type form with all fields to be filled in.

.. _payroll/working-times:

Working schedules
-----------------

To view the currently configured working schedules, go to :menuselection:`Payroll app -->
Configuration --> Work Entries --> Working Schedules`. The working schedules that are available for
an employee's contracts are found in this list.

Working schedules are company-specific. Each company **must** identify each type of working schedule
they use. If the database is created for only one company, the company column is not available.

.. example::
   An Odoo database containing multiple companies that use a standard 40-hour work week needs to
   have a separate working schedule entry for each company that uses the 40-hour standard work week.

   A database with five companies that all use a standard 40-hour work week needs to have five
   separate 40-hour working schedules configured.

.. image:: payroll/working-schedules.png
   :align: center
   :alt: All working schedules available to use currently set up in the database for the company.

.. _payroll/new-working-schedule:

New working schedule
~~~~~~~~~~~~~~~~~~~~

To create a new working schedule, click the :guilabel:`New` button, and enter the information on the
form.

The fields are auto-populated for a regular 40-hour work week but can be modified. First, change the
name of the working time by modifying the text in the :guilabel:`Name` field. Next, make any
adjustments to the days and times that apply to the new working time.

In the :guilabel:`Working Hours` tab, modify the :guilabel:`Day of Week`, :guilabel:`Day Period`,
and :guilabel:`Work Entry Type` selections by clicking on the drop-down menus in each column and
making the desired selection. The :guilabel:`Work From` and :guilabel:`Work To` columns are modified
by typing in the time.

.. note::
   The :guilabel:`Work From` and :guilabel:`Work To` times must be in a 24-hour format. For example,
   `2:00 PM` would be entered as `14:00`.

If the working time should be in a two-week configuration, click the :guilabel:`Switch to 2 weeks
calendar` button in the top-left. This creates entries for an :guilabel:`Even week` and an
:guilabel:`Odd week`.

.. image:: payroll/new-working-schedule.png
   :align: center
   :alt: New working schedule form.

.. _payroll/salary-attachment-types:

Salary package configurator
===========================

The various options under the :guilabel:`Salary Package Configurator` section of the
:menuselection:`Payroll app --> Configuration --> Salary Package Configurator` menu all affect an
employee's potential salary.

Depending on what information an employee enters (such as deductions, dependents, etc.), their
salary is adjusted accordingly. When an applicant applies for a job on the company website, the
sections under :guilabel:`Salary Package Configurator` directly affect what the applicant sees, and
what is populated, as the applicant enters information.

Benefits
--------

When offering potential employees a position, there can be certain benefits set in Odoo, in addition
to the salary, to make an offer more appealing (such as extra time off, the use of a company car,
reimbursement for a phone or internet, etc.).

To view the benefits, go to :menuselection:`Payroll app --> Configuration --> Salary Package
Configurator: Benefits`. Benefits are grouped by :guilabel:`Structure type`, and the benefit listed
for a particular structure type is only available for that specific structure.

.. image:: payroll/benefits.png
   :align: center
   :alt: A list view of all the benefits available for each structure type.

.. example::
   A company has two structure types, one labeled :guilabel:`Employee`, and another labeled
   :guilabel:`Intern`. The :guilabel:`Employee` structure type contains the benefit of using a
   company car, while the :guilabel:`Intern` structure type has a meal voucher benefit available.

   A person hired under the :guilabel:`Employee` structure type can use the company car benefit, but
   cannot have meal vouchers. A person hired under the :guilabel:`Intern` structure type would have
   meal voucher benefits available to them, not the use of a company car.

To make a new benefit, click the :guilabel:`New` button, and enter the information in the fields on
the blank benefits form.

The various fields for creating a benefit are as follows:

General information section
~~~~~~~~~~~~~~~~~~~~~~~~~~~

- :guilabel:`Contract Related Field`: select from the drop-down menu a field from the contract.
  The choosen value from the employee will be recorded to that field.
- :guilabel:`Benefits`: enter the name for the benefit. This field is required.
- :guilabel:`Benefit Type`: select from the drop-down menu what type of benefit it is. Select from
  :guilabel:`Monthly Benefit in Kind`, :guilabel:`Monthly Benefit in Net`, :guilabel:`Monthly
  Benefit in Cash`, :guilabel:`Yearly Benefits in Cash`, or :guilabel:`Non Financial Benefits`. This
  field is required.
- :guilabel:`Cost Field`: select from the drop-down menu a field from the contract. The field will
  define the cost of the benefit and by extention the impact on the salary,
  :guilabel:`Wage`, :guilabel:`Wage with Holidays`, and :guilabel:`Work time rate`. Depending on the
  localization settings, additional options are available.
- :guilabel:`Related Type`: select from the drop-down menu what type of benefit it is. Select from
  :guilabel:`Monthly Benefit in Kind`, :guilabel:`Monthly Benefit in Net`, :guilabel:`Monthly
  Benefit in Cash`, :guilabel:`Yearly Benefits in Cash`, or :guilabel:`Non Financial Benefits`. This
  field is required.
- :guilabel:`Impacts Net Salary`: tick the checkbox if the benefit should impact the employee's net
  salary.
- :guilabel:`Requested Documents`: select any document that is required to be submitted for this
  benefit, from the drop-down menu.
- :guilabel:`Mandatory Benefits`: using the drop-down menu, select the benefit that is required in
  order for this specific benefit to be offered to the employee.

  For example, a benefit for car insurance would populate `Company Car` in this field. This would
  allow the car insurance benefit to **only** be displayed if the employee has selected/enabled the
  benefit of a company car.
- :guilabel:`Salary Structure Type`: select from the drop-down menu which salary structure type this
  benefit applies to. This field is required.
- :guilabel:`Unit of Measure`: select the metric that the benefit is granted, using the drop-down
  menu. The options are :guilabel:`Days`, :guilabel:`Percent`, or :guilabel:`Currency`.

.. image:: payroll/new-benefit.png
   :align: center
   :alt: A new benefit form filled out for an internet subscription.

Display section
~~~~~~~~~~~~~~~

- :guilabel:`Show Name`: tick the checkbox to have the benefit name appear in the salary package
  configurator.
- :guilabel:`Display Type`: select from the drop-down menu how this benefit is displayed. The
  options are :guilabel:`Always Selected`, :guilabel:`Dropdown`, :guilabel:`Dropdown Group`,
  :guilabel:`Slider`, :guilabel:`Radio Buttons`, :guilabel:`Manual Input`, or :guilabel:`Text`. This
  field is required.

  Depending on the selection made, additional configurations need to be made. For example, if
  :guilabel:`Radio Buttons` is selected, the individual radio buttons must be entered.
- :guilabel:`Icon`: an icon from the `Font Awesome 4 library <https://fontawesome.com/v4/icons/>`_
  can be visible for this benefit. Enter the text code for the icon in this field. For example, to
  display a suitcase icon, the code `fa fa-suitcase` is entered on this line.
- :guilabel:`Hide Description`: tick the checkbox to hide the benefit description if the benefit is
  not selected by the employee.
- :guilabel:`Folded`: if the benefit should be folded, or hidden, because it is dependant on another
  benefit selection, tick the checkbox. The following fields appear when this is active:

  - :guilabel:`Fold Label`: enter a name for the folded section of the benefit.
  - :guilabel:`Fold Res Field`: select the contract field this benefit is tied to using the
    drop-down menu. If this field is selected on the contract, then this benefit becomes visible.

Activity section
~~~~~~~~~~~~~~~~

- :guilabel:`Activity Type`: from the drop-down menu, select the activity type that is automatically
  created when this benefit is selected by the employee.
- :guilabel:`Activity Creation`: select when the activity is created, either when the
  :guilabel:`Employee signs his contract`, or when the :guilabel:`Contract is countersigned`. Click
  the radio button next to the desired selection.
- :guilabel:`Activity Creation Type`: select the parameters for when the activity is created, either
  :guilabel:`When the benefit is set` or :guilabel:`When the benefit is modified`. Click the radio
  button next to the desired selection.
- :guilabel:`Assigned to`: select the user the activity is automatically assigned to, using the
  drop-down menu.

Sign section
~~~~~~~~~~~~

- :guilabel:`Template to Sign`: if the employee is required to sign a document when selecting this
  benefit, select the document template from the drop-down menu.

  For example, a benefit regarding the use of a company car may require the employee to sign a
  document acknowledging the company's car policies.

Description tab
~~~~~~~~~~~~~~~

Provide any additional information in this tab to help clarify the benefit.

Personal info
-------------

Every employee in Odoo has an *employee card* which is created when a candidate becomes an
employee. This card includes all of their personal information, resume, work information, and
documents.

The personal information is gathered from the salary package configurator section that a
candidate fills out after being offered a position. This personal information is then transferred to
the employee card when they are hired.

To view an employee's card, go to the main :menuselection:`Employees` app dashboard, and click on
the employee's card.

.. note::
   An employee card can be thought of as an employee personal file.

The :guilabel:`Personal Info` section lists all of the fields that are available to enter on the
employee's card. To access this section, go to :menuselection:`Payroll app --> Configuration -->
Salary Package Configurator: Personal Info`.

.. image:: payroll/personal-info.png
   :align: center
   :alt: A list of all the personal information that appears on the employee card to enter.

To edit a personal info entry, select an entry from the list on the :guilabel:`Personal Info` page,
and modify the personal info on the form that appears.

To create a new personal info entry, click the :guilabel:`New` button.

The required fields, aside from entering the :guilabel:`Information` name, are :guilabel:`Related
Model`, :guilabel:`Related Field`, and :guilabel:`Category`.

Select a :guilabel:`Related Model` from the drop-down menu. :guilabel:`Employee` populates the field
by default, but the :guilabel:`Bank Account` option is also available if the information is related
to a bank account, instead.

Select a :guilabel:`Related Field` from the drop-down menu that best describes what kind of personal
information this entry is, and where it is stored in the backend. Then, select a
:guilabel:`Category` from the drop-down menu that the personal information should be under, such as
:guilabel:`Address` or :guilabel:`Personal Documents`.

The two most important fields on the personal info form are :guilabel:`Is Required` and
:guilabel:`Display Type`.

Checking the :guilabel:`Is Required` box makes the field mandatory on the employee's card. The
:guilabel:`Display Type` drop-down menu allows for the information to be entered in a variety of
ways, like a :guilabel:`Text` box, to a customizable :guilabel:`Radio` button, a
:guilabel:`Checkbox`, a :guilabel:`Document`, and more.

.. image:: payroll/personal-new.png
   :align: center
   :alt: New personal information entry.

Resumé
------

The resumé section, housed within the salary package configurator section of the settings menu, is
how salary information rules are configured when offering a position to potential employees.

When an offer is sent to a prospective employee, the values for the offer are computed from these
settings, and appear on the offer page.

To configure this section, navigate to :menuselection:`Payroll app --> Configuration --> Salary
Package Configurator: Resumé`.

By default, there are three :guilabel:`Salary Structure Types` pre-configured in Odoo:
:guilabel:`Worker`, :guilabel:`Employee`, and :guilabel:`None`.

Each :guilabel:`Salary Structure Type` has several rules configured. These affect how an offer is
calculated using that particular :guilabel:`Salary Structure Type`.

To create a new rule, click the :guilabel:`New` button, and a blank :guilabel:`Contract Salary
Resumé` form loads.

Enter the following information on the form:

- :guilabel:`Information`: type in a name for this field.
- :guilabel:`Category`: select the category this value is housed under, using the drop-down menu.
  The default options are :guilabel:`Monthly Salary`, :guilabel:`Monthly Benefits`,
  :guilabel:`Yearly Benefits`, and :guilabel:`Total`.

  New categories can be made if needed.

  Click the :guilabel:`New` button, then enter the name for the new category in the :guilabel:`Name`
  field. Next, select the :guilabel:`Periodicity` from the drop-down menu, either
  :guilabel:`Monthly` or :guilabel:`Yearly`. Last, enter a number for the sequence. This corresponds
  to where this rule appears in the  :guilabel:`Salary Structure Type` rule list.

  Finally, click :guilabel:`Save & Close`.
- :guilabel:`Impacts Monthly Total`: tick the checkbox if this value is added in the monthly total
  calculation.
- :guilabel:`Unit of Measure`: select what kind of value this rule is, either :guilabel:`Currency`,
  :guilabel:`Days`, or :guilabel:`Percent`.

  :guilabel:`Currency` is for a set monetary value, :guilabel:`Days` is for compensation in the form
  of time off, and :guilabel:`Percent` is for a monetary value awarded that is based upon another
  metric, such as commissions.
- :guilabel:`Salary Structure Type`: select which :guilabel:`Salary Structure Type` this rule is
  nested under, from the drop-down menu.
- :guilabel:`Value Type`: select how the value is computed, using the drop-down menu. The default
  options are :guilabel:`Fixed Value`, :guilabel:`Contract Value`, :guilabel:`Payslip Value`,
  :guilabel:`Sum of Benefits Values`, and :guilabel:`Monthly Total`.
- :guilabel:`Code`: select the code this rule applies to from the drop-down menu.

.. image:: payroll/resume-net.png
   :align: center
   :alt: The net wage rule form filled out, with all the information for net pay.

Jobs
====

Since the *Payroll* application is responsible for paying employees for specific job positions, the
complete list of job positions can be found in both the *Payroll* and *Recruitment* applications.

.. _payroll/job-positions:

Job positions
-------------

The job positions listed in the *Payroll* application are identical to the job positions listed in
the *Recruitment* application. If a new job position is added in the *Recruitment* application, it
is also visible in the *Payroll* application, and vice versa.

To view the job positions, navigate to :menuselection:`Payroll app --> Configuration --> Jobs: Job
Positions`.

A list of all the job positions appear, along with the corresponding department, on the
:guilabel:`Job Position` page.

.. image:: payroll/job-positions.png
   :align: center
   :alt: A list of all the job positions and corresponding departments.

To create a new job description, click the :guilabel:`New` button and a job form appears.

Enter the information on the form for the new position. The information is identical as to the
information entered when creating a new job position in the *Recruitment* application.

Refer to the :doc:`../hr/recruitment/new_job` documentation for more details on how to fill out this
form.

.. seealso::
   - :doc:`payroll/contracts`
   - :doc:`payroll/salaries`
   - :doc:`payroll/work_entries`
   - :doc:`payroll/time_off_to_report`
   - :doc:`payroll/salary_attachments`
   - :doc:`payroll/payslips`
   - :doc:`payroll/batches`
   - :doc:`payroll/commissions`
   - :doc:`payroll/reporting`
   - :doc:`payroll/headcount`
   - :doc:`payroll/work_entry_analysis`
   - :doc:`payroll/payroll_localizations`

.. toctree::
   :titlesonly:

   payroll/contracts
   payroll/salaries
   payroll/work_entries
   payroll/time_off_to_report
   payroll/salary_attachments
   payroll/payslips
   payroll/batches
   payroll/commissions
   payroll/reporting
   payroll/headcount
   payroll/work_entry_analysis
   payroll/payroll_localizations
