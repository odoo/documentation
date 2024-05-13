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

Accounting
----------

The accounting section of the configuration menu relates to three options:

- :guilabel:`Payroll Entries`: enable this option to post payroll slips in accounting.
- :guilabel:`Payroll SEPA`: enable this option to create SEPA payments.
- :guilabel:`Batch Account Move Lines`: enable this option to have a single account move line
  created from all the accounting entries from the same period. This disables the generation of
  single payments.

Localizations
-------------

*Localizations* are country-specific settings pre-configured in Odoo at the creation of the
database, which account for all taxes, fees, and allowances for that particular country.

The :guilabel:`Localization` section of the *Payroll* app :guilabel:`Settings` page may include
specific settings that need to be set for the specific locality. This selection also provides a
detailed view of all benefits provided to employees.

The settings and options shown in this section varies, depending on the localization enabled for the
database.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required.

.. note::
   Odoo can handle a multi-company configuration. This is generally done when there is a main
   company or office location, such as a headquarters, and there are other offices/branches around
   the country or globe, that fall under that main company or headquarters. In Odoo, each company,
   including the headquarters, would be set up as their own company/branch using the multi-company
   method.

   Each individual company can have a different localization setting configured for that specific
   company, since company locations can vary and be located anywhere in the world, where rules and
   laws differ.

   For more information on companies, refer to the :doc:`Companies <../general/companies>`
   documentation, which covers how to set up companies.

Time off
--------

- :guilabel:`Deferred Time Off`: if time off is taken after payslips are validated, the time off
  needs to be applied to the following pay period. Select the person responsible for validating
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
- :guilabel:`Payslip PDF Display`: enable this option to have payslips display a PDF file on the
  payslip form.

.. _payroll/work-entries-config:

Contracts
=========

In order for an employee to be paid, they **must** have an active contract for a specific type of
employment. Creating and viewing contract templates, and creating and viewing employment types, is
possible from this section of the configuration header menu.

.. _payroll/contract-templates:

Templates
---------

Contract templates are used with the *Recruitment* application when sending an offer to a candidate.
The contract template forms the basis of an offer, and can be modified for specific candidates or
employees, when necessary. If a contract template is created or modified in the *Payroll*
application, the changes are also reflected in the *Recruitment* application.

.. important::
   To access contract templates, the *Salary Configurator* (`hr_contract_salary`) module **must** be
   :ref:`installed <general/install>`.

To view all the current contract templates in the database, navigate to :menuselection:`Payroll app
--> Configuration --> Contracts: Templates`.

On the :guilabel:`Contract Templates` page, all current contract templates appear in a list view. To
view the details of a contract template, click anywhere on the line to open the contract form. The
contract template can be modified from this form. Proceed to make any desired changes to the
contract.

To create a new contract template, click the :guilabel:`New` button. Then, enter the following
information on the blank contract template form that appears:

- :guilabel:`Contract Reference`: enter a brief description for the template. This should be clear
  and easily understood, as this name appears in the *Recruitment* application, as well.
- :guilabel:`Working Schedule`: select the desired working schedule the contract applies to from the
  drop-down menu. If a new working schedule is needed, create a :ref:`new working schedule
  <payroll/new-working-schedule>`.
- :guilabel:`Work Entry Source`: select how the work entries are generated. Choices are either:

  - :guilabel:`Working Schedule`: work entries are generated based on the selected working schedule.
  - :guilabel:`Attendances`: work entries are generated based on the employee's attendance, as they
    are logged in the *Attendances* application. Refer to the :ref:`Attendances
    <attendances/check-in>` documentation for information on checking in and out.
  - :guilabel:`Planning`: work entries are generated based on the employee's planning in the
    *Planning* application.

- :guilabel:`Salary Structure Type`: select the :ref:`salary structure type
  <payroll/structure-types>` from the drop-down menu.
- :guilabel:`Department`: select the department the contract template applies to from the drop-down
  menu. If blank, the template applies to all departments.
- :guilabel:`Job Position`: select the :ref:`job position <payroll/job-positions>` the contract
  template applies to from the drop-down menu. If blank, the template applies to all job positions.
- :guilabel:`Wage on Payroll`: enter the monthly wage in the field.
- :guilabel:`Contract Type`: select the type of contract from the drop-down menu. This list is the
  same as the :ref:`Employment Types <payroll/employment-types>`.
- :guilabel:`HR Responsible`: select the employee responsible for validating contracts, using this
  template, from the drop-down menu.
- :guilabel:`New Contract Document Template`: select a default document that a new employee has to
  sign to accept an offer.
- :guilabel:`Contract Update Document Template`: select a default document that a current employee
  has to sign to update their contract.

.. image:: payroll/contract-template.png
   :align: center
   :alt: A new contract template form, with the fields filled in.

Salary information tab
~~~~~~~~~~~~~~~~~~~~~~

- :guilabel:`Wage Type`: select either :guilabel:`Fixed Wage` or :guilabel:`Hourly Wage` from the
  drop-down menu.
- :guilabel:`Schedule Pay`: using the drop-down menu, select how often the employee is paid. Options
  include :guilabel:`Annually`, :guilabel:`Semi-annually`, :guilabel:`Quarterly`,
  :guilabel:`Bi-monthly`, :guilabel:`Monthly`, :guilabel:`Semi-monthly`, :guilabel:`Bi-weekly`,
  :guilabel:`Weekly`, or :guilabel:`Daily`.
- :guilabel:`Wage`: enter the gross wage. The time period presented in this field is based on what
  is selected for the :guilabel:`Scheduled Pay` field. It is recommended to populate the
  :guilabel:`Yearly Cost (Real)` field *first*, since that entry updates this field automatically.
- :guilabel:`Yearly Cost (Real)`: enter the total yearly cost the employee costs the employer. When
  this value is entered, the :guilabel:`Monthly Cost (Real)` is automatically updated.
- :guilabel:`Monthly Cost (Real)`: this field is **not** editable. The value is automatically
  populated after the :guilabel:`Yearly Cost (Real)` is entered.

.. important::
   The :guilabel:`Schedule Pay`, :guilabel:`Wage`, and :guilabel:`Yearly Cost (Real)` fields are all
   linked. If any of these fields are updated, the other two fields automatically update to reflect
   the change. It is best practice to check these three fields if any modifications have been made,
   to ensure they are accurate.

.. image:: payroll/salary-information.png
   :align: center
   :alt: The salary information tab, with the fields filled in.

Pre-tax benefits and post-tax deductions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Depending on the localization settings set for the company, the entries presented in this section
either vary, or may not appear at all.

For example, some entries may pertain to retirement accounts, health insurance benefits, and
commuter benefits.

Enter the monetary amounts or percentages to specify how much of the employee's salary goes to the
various benefits and/or deductions.

.. _payroll/employment-types:

Employment types
----------------

To view all the pre-configured employment types, navigate to :menuselection:`Payroll application -->
Configuration --> Contracts: Employment Types`.

The employment types are presented in a list view on the :guilabel:`Employment Types` page.

The default employment types are :guilabel:`Permanent`, :guilabel:`Temporary`, :guilabel:`Seasonal`,
:guilabel:`Interim`, :guilabel:`Full-Time`, :guilabel:`Part-Time`, and :guilabel:`Permanent`.

To make a new employment type, click the :guilabel:`New` button in the upper-left corner, and a
blank line appears at the bottom of the :guilabel:`Employment Types` page.

On this new blank line, enter the name of the employment type in the :guilabel:`Name` column. If the
employment type is country-specific, select the country using the drop-down menu in the
:guilabel:`Country` column. If a country is selected, then the employment type is *only* applicable
for that specific country.

To rearrange the order of the employment types, click the :guilabel:`six small gray boxes` icon to
the left of the employment type :guilabel:`Name`, and drag the line to the desired position on the
list.

.. image:: payroll/employment-types.png
   :align: center
   :alt: The employment types in the database by default, in a list view.

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

When creating a work entry in the *Payroll* application, or when an employee enters information in
the *Timesheets* application, a :guilabel:`Work Entry Type` needs to be selected. The list of
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
- :guilabel:`DMFA code`: this code is used to identify :abbr:`DMFA (De Multifunctionele Aangifte)`
  entries on a corresponding :abbr:`DMFA (De Multifunctionele Aangifte)` report. The :abbr:`DMFA
  (De Multifunctionele Aangifte)` report is a quarterly report that Belgian-based companies are
  required to submit for social security reporting purposes. This report states the work done by the
  employees during the quarter, as well as the salaries paid to those employees.
- :guilabel:`External Code`: this code is used for exporting data to a third-party payroll service.
  Check with the third-party being used to determine the :guilabel:`External Code` to enter for the
  new work entry type.
- :guilabel:`SDWorx code`: this code is only for companies that use SDWorx, a payroll service
  provider.
- :guilabel:`Color`: select a color for the particular work entry type.

Display in payslip section
**************************

- :guilabel:`Rounding`: the rounding method selected determines how quantities on timesheet entries
  are displayed on the payslip.

  - :guilabel:`No Rounding`: a timesheet entry is not modified.
  - :guilabel:`Half Day`: a timesheet entry is rounded to the closest half day amount.
  - :guilabel:`Day`: a timesheet entry is rounded to the closest full day amount.

.. example::
   If the working time is set to an 8-hour work day (40-hour work week), and an employee enters a
   time of 5.5 hours on a timesheet, and :guilabel:`Rounding` is set to :guilabel:`No Rounding`, the
   entry remains 5.5 hours. If :guilabel:`Rounding` is set to :guilabel:`Half Day`, the entry is
   changed to 4 hours. If it is set to :guilabel:`Day`, it is changed to 8 hours.

Unpaid section
**************

- :guilabel:`Unpaid in Structures Types`: if the work entry is for work that is not paid, specify
  which pay structure the unpaid work entry applies to from the drop-down menu. Some situations
  where work is logged on a timesheet, but no compensation given would be for unpaid internships,
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
  drop-down menu to select the specific type of time off, such as `Paid Time Off`, `Sick Time Off`,
  or `Extra Hours`, for example.

  A new type of time off can be entered in the field, if the listed types of time off in the
  drop-down menu do **not** display the type of time off needed.
- :guilabel:`Keep Time Off Right`: this is for Belgian-specific companies **only**, and does
  **not** appear for other localizations. Check this box if the work entry is for time off that
  affects the time off benefits for the following year. Workers are given time off each year,
  according to the government, and in some cases, time off taken during a specific time period can
  affect how much time off the employee receives or accrues the following year.

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
an employee's contracts and work entries are found in this list.

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

Salary
======

.. _payroll/structure-types:

Structure types
---------------

In Odoo, an employee's payslip is based on *structures* and *structure types*, which both affect how
an employee enters timesheets. Each structure type is an individual set of rules for processing a
timesheet entry, which consists of different structures nested within it. Structure types define how
often an employee gets paid, the working hours, and if wages are based on a salary (fixed) or how
many hours the employee worked (varied).

For example, a structure type could be `Employee`, and that structure type could have two different
structures in it: a `Regular Pay` structure which includes all the separate rules for processing
regular pay, as well as a structure for an `End of Year Bonus` which includes the rules only for the
end of year bonus. Both the `Regular Pay` structure and `End of Year Bonus` structure are structures
within the `Employee` structure type.

The different :guilabel:`Structure Types` can be seen by navigating to :menuselection:`Payroll app
--> Configuration --> Salary: Structure Types`.

Two default structure types are configured in Odoo: :guilabel:`Employee` and :guilabel:`Worker`.

Typically, :guilabel:`Employee` is used for salaried employees, which is why the wage type is
:guilabel:`Monthly Fixed Wage`, and :guilabel:`Worker` is typically used for employees paid by the
hour, so the wage type is :guilabel:`Hourly Wage`.

.. image:: payroll/structure-type.png
   :align: center
   :alt: List of all currently configured structure types available to use.

.. _payroll/new-structure-type:

New structure type
~~~~~~~~~~~~~~~~~~

To make a new structure type, click the :guilabel:`New` button, and a blank structure type form
appears.

Proceed to enter information in the fields. Most fields are pre-populated, but all the fields can be
modified.

- :guilabel:`Structure Type`: enter the name for the new structure type, such as `Employee` or
  `Worker`.
- :guilabel:`Country`: select the country that the new structure type applies to from the drop-down
  menu.
- :guilabel:`Wage Type`: select what type of wage the new structure type uses, either
  :guilabel:`Fixed Wage` or :guilabel:`Hourly Wage`.

  If the type is to be used for salaried employees, who receive the same wage every pay period,
  select :guilabel:`Fixed Wage`.

  If the type is to be used for employees, who receive wages based on how many hours they worked
  during a pay period, select :guilabel:`Hourly Wage`.
- :guilabel:`Default Scheduled Pay`: select the typical pay schedule for the new structure type from
  the drop-down menu. Options are :guilabel:`Monthly`, :guilabel:`Quarterly`,
  :guilabel:`Semi-annually`, :guilabel:`Annually`, :guilabel:`Weekly`, :guilabel:`Bi-weekly`,
  :guilabel:`Bi-monthly`. This indicates how often this specific type of structure is paid out.
- :guilabel:`Default Working Hours`: select the default working hours for the new structure type
  from the drop-down menu. All available working hours for the currently selected company appear in
  the drop-down menu. The default working hours that are pre-configured in Odoo is the
  :guilabel:`Standard 40 hours/week` option. If the needed working hours do not appear in the list,
  a :ref:`new set of default working hours can be created <new-default-working-hours>`.
- :guilabel:`Regular Pay Structure`: type in the name for the regular pay structure.
- :guilabel:`Default Work Entry Type`: select the default type of work entry the new structure type
  falls under from the drop-down menu. The default options include :guilabel:`Attendance`,
  :guilabel:`Overtime Hours`, :guilabel:`Generic Time Off`, :guilabel:`Compensatory Time Off`,
  :guilabel:`Home Working`, :guilabel:`Unpaid`, :guilabel:`Sick Time Off`, :guilabel:`Paid Time
  Off`, :guilabel:`Out Of Contract`, :guilabel:`Extra Hours`, and :guilabel:`Long Term Time Off`.

  To view all the options for the :guilabel:`Default Work Entry Type`, click the :guilabel:`Search
  More..` button at the bottom of the drop-down list.

  Depending on the localization settings, this list may contain more options in addition to the
  default options.

.. image:: payroll/new-structure.png
   :align: center
   :alt: New structure type form to fill out when creating a new structure type.

.. _new-default-working-hours:

New default working hours
~~~~~~~~~~~~~~~~~~~~~~~~~

To make new default working hours, type the name for the new working hours in the :guilabel:`Default
Working Hours` field on the new structure type form. Click :guilabel:`Create and edit`. A default
working hours form pops up. The default working hours form has two sections, a general information
section and a tab listing out all the individual working hours by day and time. When the form is
completed, click :guilabel:`Save & Close`.

- :guilabel:`Name`: type in the name for the new default working hours. This should be descriptive
  and clear to understand, such as `Standard 20 Hours/Week`.
- :guilabel:`Company`: select the company that can use these new default working hours from the
  drop-down menu. Keep in mind, working hours are company-specific, and cannot be shared between
  companies. Each company needs to have their own working hours set.
- :guilabel:`Average Hour Per Day`: the average hours per day field is auto-populated, based on the
  working hours configured in the :guilabel:`Working Hours` tab. This entry affects resource
  planning, since the average daily hours affect what resources can be used, and in what quantity,
  per work day.
- :guilabel:`Timezone`: select the time zone to be used for the new default working hours from the
  drop-down menu.
- :guilabel:`Company Full Time`: enter the number of hours per week an employee would need to work
  to be considered a full-time employee. Typically, this is approximately 40 hours, and this number
  affects what types of benefits an employee can receive, based on their employment status
  (full-time vs part-time).
- :guilabel:`Work Time Rate`: this percentage is auto-generated based on the entry for the
  :guilabel:`Company Full Time` and the working hours configured in the :guilabel:`Working Hours`
  tab. This number should be between `0.00%` and `100%`, so if the percentage is above `100%`, it is
  an indication that the working times and/or :guilabel:`Company Full Time` hours need adjustment.
- :guilabel:`Working Hours` Tab: this tab is where each day's specific working hours are listed.
  When a new default working hour form is created, the :guilabel:`Working Hours` tab is
  pre-populated with a default 40-hour week, with each day divided into three timed sections.

  Every day has morning (8:00-12:00), lunch (12:00-13:00), and evening (13:00-17:00) hours
  configured, using a 24 hour time format.

  To adjust any of these hours, click on the specific field to adjust, and make the adjustment using
  the drop-down menus, or in the specific case of the times, type in the desired time.

  Keep in mind, working hours are company-specific, and cannot be shared between companies. Each
  company needs to have their own working hours set.

  .. note::
     If the working hours are not consistent each week, and the hours are on a bi-weekly schedule
     instead, click the :guilabel:`Switch to 2 week calendar` button at the top of the new default
     working hours form. This changes the :guilabel:`Working Hours` tab to display two weeks of
     working times that can be adjusted.

Structures
----------

*Salary structures* are the different ways an employee gets paid within a specific *structure*, and
are specifically defined by various rules.

The amount of structures a company needs for each structure type depends on how many different ways
employees are paid, and how their pay is calculated. For example, a common structure that could be
useful to add may be a `Bonus`.

To view all the various structures for each structure type, go to :menuselection:`Payroll app -->
Configuration --> Salary --> Structures`.

Each :ref:`structure type <payroll/structure-types>` lists the various structures associated with
it. Each structure contains a set of rules that define it.

.. image:: payroll/salary-structure.png
   :align: center
   :alt: All available salary structures.

Click on a structure to view its :guilabel:`Salary Rules`. These rules are what calculate the
payslip for the employee.

.. image:: payroll/structure-regular-pay-rules.png
   :align: center
   :alt: Salary structure details for Regular Pay, listing all the specific Salary Rules.

Rules
-----

Each structure has a set of *salary rules* to follow for accounting purposes. These rules are
configured by the localization, and affect actions in the *Accounting* application, so modifications
to the default rules, or the creation of new rules, should only be done when necessary.

To view all the rules, go to :menuselection:`Payroll app --> Configuration --> Salary --> Rules`.
Click on a structure (such as :guilabel:`Regular Pay`) to view all the rules.

To make a new rule, click :guilabel:`New`. A new rule form appears. Enter the following information
in the fields.

Top section
~~~~~~~~~~~

- :guilabel:`Rule Name`: enter a name for the rule. This field is required.
- :guilabel:`Category`: select a category the rule applies to from the drop-down menu, or enter a
  new one. This field is required.
- :guilabel:`Code`: enter a code to be used for this new rule. It is recommended to coordinate with
  the accounting department for a code to use as this affects accounting reports and payroll
  processing. This field is required.
- :guilabel:`Sequence`: enter a number indicating when this rule is calculated in the sequence of
  all other rules.
- :guilabel:`Salary Structure`: select a salary structure the rule applies to from the drop-down
  menu, or enter a new one. This field is required.
- :guilabel:`Active`: enable this toggle, so the rule is available for use. Disable the toggle to
  hide the rule without deleting it in the database.
- :guilabel:`Appears on payslip`: tick the checkbox to have the rule appear on employee payslips.
- :guilabel:`View on Employer Cost Dashboard`: tick the checkbox to have the rule appear on the
  :guilabel:`Employer Cost` report, located on the *Payroll* app dashboard.
- :guilabel:`View on Payroll Reporting`: tick the checkbox to have the rule appear on payroll
  reports.

.. image:: payroll/new-rule.png
   :align: center
   :alt: Enter the information for the new rule on the new rule form.

General tab
~~~~~~~~~~~

Conditions
**********

- :guilabel:`Condition Based on`: select from the drop-down menu whether the rule is
  :guilabel:`Always True` (always applies), a :guilabel:`Range` (applies to a specific range, which
  is entered beneath the selection), or a :guilabel:`Python Expression` (the code is entered beneath
  the selection). This field is required.

Computation
***********

- :guilabel:`Amount Type`: select from the drop-down menu whether the amount is a :guilabel:`Fixed
  Amount`, a :guilabel:`Percentage (%)`, or a :guilabel:`Python Code`. Depending on what is
  selected, the fixed amount, percentage, or Python code needs to be entered next. This field is
  required.

Company contribution
********************

- :guilabel:`Partner`: if another company financially contributes to this rule, select the company
  from the drop-down menu.

Description tab
~~~~~~~~~~~~~~~

Provide any additional information in this tab to help clarify the rule. This tab only appears in
the rule form.

Accounting tab
~~~~~~~~~~~~~~

- :guilabel:`Debit Account`: select the debit account from the drop-down menu the rule affects.
- :guilabel:`Credit Account`: select the credit account from the drop-down menu the rule affects.
- :guilabel:`Not computed in net accountability`: tick the checkbox to delete the value of this rule
  in the `Net Salary` rule.

Rule parameters
---------------

.. note::
   Currently, the :guilabel:`Rule Parameters` feature found inside the :menuselection:`Payroll app
   --> Configuration --> Salary --> Rule Parameters` menu is still in development and only serves a
   specific use case for Belgian markets. The documentation will be updated when this section has
   matured to more markets.

Other input types
-----------------

When creating payslips, it is sometimes necessary to add other entries for specific circumstances,
like expenses, reimbursements, or deductions. These other inputs can be configured by navigating to
:menuselection:`Payroll app --> Configuration --> Salary --> Other Input Types`.

.. image:: payroll/other-input.png
   :align: center
   :alt: A list of other input types for payroll that can be selected when creating a new entry for
         a payslip.

To create a new input type, click the :guilabel:`New` button. Enter the :guilabel:`Description`, the
:guilabel:`Code`, and which structure it applies to in the :guilabel:`Availability in Structure`
field.

.. important::
   The :guilabel:`Code` is used in the salary rules to compute payslips. If the
   :guilabel:`Availability in Structure` field is left blank, it indicates that the new input type
   is available for all payslips and is not exclusive to a specific structure.

.. image:: payroll/input-type-new.png
   :align: center
   :alt: A new Input Type form filled in.

.. _payroll/salary-attachment-types:

Salary attachment types
-----------------------

Salary attachments, also thought of as "wage garnishments", are portions of earnings taken out of a
payslip for something specific. Much like all other aspects of payroll configurations, the types of
salary attachments **must** be defined.

To view the currently configured salary attachments, navigate to :menuselection:`Payroll app -->
Configuration --> Salary --> Salary Attachment Types`. The default salary attachment types are
:guilabel:`Attachment of Salary`, :guilabel:`Assignment of Salary`, and :guilabel:`Child Support`.

To make a new type of salary attachment, click the :guilabel:`New` button. Then, enter the
:guilabel:`Name`, the :guilabel:`Code` (used in the salary rules to compute payslips), and decide if
it should have :guilabel:`No End Date`.

.. image:: payroll/new-attachment.png
   :align: center
   :alt: A new salary attachment form filled in.

Salary package configurator
===========================

The various options under the :guilabel:`Salary Package Configurator` section of the
:menuselection:`Payroll app --> Configuration --> Salary Package Configurator` menu all affect an
employee's potential salary. These sections (:guilabel:`Benefits`, :guilabel:`Personal Info`,
and :guilabel:`Resume`) specify what benefits can be offered to an employee in their salary package.

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

- :guilabel:`Benefits`: enter the name for the benefit. This field is required.
- :guilabel:`Benefit Field`: select from the drop-down menu the type of benefit this is.
- :guilabel:`Cost Field`: select from the drop-down menu the type of cost incurred by the company
  for this specific benefit. The default options are :guilabel:`Calendar Changed`, :guilabel:`Yearly
  Cost (Real)`, :guilabel:`Extra Time Off`, :guilabel:`Hourly Wage`, :guilabel:`Part Time`,
  :guilabel:`Wage`, :guilabel:`Wage with Holidays`, and :guilabel:`Work time rate`. Depending on the
  localization settings, additional options are available.
- :guilabel:`Related Type`: select from the drop-down menu what type of benefit it is. Select from
  :guilabel:`Monthly Benefit in Kind`, :guilabel:`Monthly Benefit in Net`, :guilabel:`Monthly
  Benefit in Cash`, :guilabel:`Yearly Benefits in Cash`, or :guilabel:`Non Financial Benefits`. This
  field is required.
- :guilabel:`Benefit Field`: select from the drop-down menu the specific field on the contract the
  benefit appears.
- :guilabel:`Cost Field`: select the specific field on the contract that the cost of the benefit is
  linked to, using the drop-down menu. If this field is left blank, the cost of the benefit is not
  computed in the employee budget.
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
   An employee card can be thought of as an employee personnel file.

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
   - :doc:`payroll/payslips`
   - :doc:`payroll/work_entries`
   - :doc:`payroll/reporting`

.. toctree::
   :titlesonly:

   payroll/contracts
   payroll/work_entries
   payroll/payslips
   payroll/reporting
