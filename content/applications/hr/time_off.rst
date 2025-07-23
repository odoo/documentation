:show-content:

========
Time off
========

Odoo's **Time Off** application serves as a centralized hub for all time-off-related information.
This application manages requests, balances, allocations, approvals, and reports.

Users can :doc:`request time off <../hr/time_off/request_time_off>`, and see an overview of their
requests and time off balances. Managers can :doc:`allocate time off <time_off/allocations>` to
individuals, teams, or the whole company, and :ref:`approve time off requests
<time_off/manage-time-off>`.

Detailed :ref:`reports <time_off/reporting>` can be run to see how much time off (and what kinds of
time off) are being used, :ref:`accrual plans <time_off/accrual-plans>` can be created, and
:ref:`public holidays <time_off/public-holidays>` can be set.

.. note::
   Be advised, only users with specific access rights can see all aspects of the **Time Off** app.

   All users can access the *My Time Off* and *Overview* sections of the **Time Off** app. All other
   sections require specific access rights.

   To better understand how access rights affect the **Time Off** app, refer to the
   :doc:`employees/new_employee` document, specifically the section about configuring the *Work
   Information* tab.

.. seealso::
   :doc:`../general/users/access_rights`

Configuration
=============

In order to allocate time off to employees, and for employees to request and use their time off, the
various time off types must be configured first, then allocated to employees (if allocation is
required).

.. _time_off/time-off-types:

Time off types
--------------

To view the currently configured time off types, navigate to :menuselection:`Time Off app -->
Configuration --> Time Off Types`. The time off types are presented in a list view.

The **Time Off** app comes with four preconfigured time off types: :guilabel:`Paid Time Off`,
:guilabel:`Sick Time Off`, :guilabel:`Unpaid`, :guilabel:`Compensatory Days`, and :guilabel:`Extra
Hours`. These can be modified to suit business needs, or used as-is.

Create time off type
~~~~~~~~~~~~~~~~~~~~

To create a new time off type, navigate to :menuselection:`Time Off app --> Configuration --> Time
Off Types`. From here, click the :guilabel:`New` button to reveal a blank time off type form.

Enter the name for the particular type of time off in the blank line at the top of the form, such as
`Vacation` or `Bereavement`. Then, enter the following information on the form.

.. note::
   The only **required** fields on the time off type form are the name of the :guilabel:`Time Off
   Type`, the :guilabel:`Take Time Off In`, and the :guilabel:`Kind of Time Off`. In addition, the
   :guilabel:`Time Off Requests` and :guilabel:`Allocation Requests` sections **must** be
   configured.

Time off requests section
*************************

This section determines how approvals are handled for time off requests for this time off type.

- :guilabel:`Approval`: select what specific kind of approval is required for the time off type. The
  options are:

  - :guilabel:`No Validation`: No approvals are required when requesting this type of time off. The
    time off request is automatically approved.
  - :guilabel:`By Time Off Officer`: Only the specified :ref:`Time Off Officer
    <time_off/time-off-officer>`, set on this form in the :guilabel:`Notified Time Off Officer`
    field, is required to approve the time off request. This option is selected, by default.
  - :guilabel:`By Employee's Approver`: Only the employee's specified approver for time off, which
    is set on the *Work Information* tab on the :ref:`employee's form <employees/work-info-tab>`, is
    required to approve the time off request.
  - :guilabel:`By Employee's Approver and Time Off Officer`: Both the employee's :ref:`specified
    time off approver <employees/work-info-tab>` and the :ref:`Time Off Officer
    <time_off/time-off-officer>` are required to approve the time off request.

Allocation requests section
***************************

This section determines how allocation requests are handled for this time off type.

- :guilabel:`Requires allocation`: If the time off must be allocated to employees, select
  :guilabel:`Yes`. If the time off can be requested without time off being previously allocated,
  select :guilabel:`No Limit`. If :guilabel:`No Limit` is selected, the following options do not
  appear on the form.
- :guilabel:`Employee Requests`: Select :guilabel:`Extra Days Requests Allowed` if the employee is
  able to request more time off than was allocated.

  If employees should **not** be able to make requests for more time off than what was allocated,
  select the :guilabel:`Not Allowed` option.

  .. example::
     Ten days are allocated to the employee for this particular type of time off, and the
     :guilabel:`Extra Days Requests Allowed` option is enabled. The employee wants to take a
     vacation for twelve days. They may submit a request for two additional days, since the
     :guilabel:`Extra Days Requests Allowed` option is enabled.

  .. important::
     It is important to note that requesting additional time off does **not** guarantee that time
     off is granted.

- :guilabel:`Approval`: Select the type of approvals required for the allocation of this particular
  time off type.

  - :guilabel:`No Validation`: No approvals are required when requesting additional allocations for
    the time off type. The allocation request is automatically approved.
  - :guilabel:`By Time Off Officer`: Only the specified :ref:`Time Off Officer
    <time_off/time-off-officer>`, set on this form in the :guilabel:`Notified Time Off Officer`
    field, is required to approve the allocation request. This option is selected, by default.
  - :guilabel:`By Employee's Approver`: Only the employee's specified approver for time off, which
    is set on the *Work Information* tab on the :ref:`employee's form <employees/work-info-tab>`, is
    required to approve the allocation request.
  - :guilabel:`By Employee's Approver and Time Off Officer`: Both the employee's :ref:`specified
    time off approver <employees/work-info-tab>` and the :ref:`Time Off Officer
    <time_off/time-off-officer>` are required to approve the allocation request.


Configuration section
*********************

This section determines all other details regarding the time off type, aside from approvals and
allocations. This includes how the time off must be taken (hours, half days, or days), if the time
off is visible to other users, and how the time off affects the **Payroll** app.

.. _`time_off/time-off-officer`:

- :guilabel:`Notified Time Off Officer`: Select the user who is notified and responsible for
  approving requests and allocations for this specific type of time off.
- :guilabel:`Take Time Off in`: Select the format the time off is requested in from the drop-down
  menu. The options are:

  - :guilabel:`Day`: if time off can only be requested in full day increments (8 hours).
  - :guilabel:`Half Day`: if time off can only be requested in half day increments (4 hours).
  - :guilabel:`Hours`: if the time off can be taken in hourly increments.

  .. _`time_off/deduct-extra-hours`:

- :guilabel:`Deduct Extra Hours`: Enable this option if the time off request should factor in any
  extra time accrued by the employee.

  .. example::
     If an employee works two extra hours for the week, and requests five hours of time off, the
     request would be for three hours, since the two extra worked hours are used first, and deducted
     from the request.

- :guilabel:`Public Holiday Included`: Enable this option if public holidays should be excluded from
  a time off request.

  .. example::
     An employee in the United States requests time off for the week of July 4th, for a total of
     five days. Since the 4th of July is a holiday in the United States, the time off request is
     automatically modified for four days off instead of five. That is because the holiday is
     included, and the user does not need to use their own vacation time for a public holiday.

     This option reduces extra work for users, enabling them to make only one time off request for
     the entire week, instead of making two separate requests, one for the days *before* the
     holiday, and another one for the days *after* the holiday.

- :guilabel:`Allow To Attach Supporting Document`: Enable this option to allow the employee to
  attach documents to the time off request. This is useful in situations where documentation is
  required, such as long-term medical leave.
- :guilabel:`Kind of Time Off`: From the drop-down menu, select the type of time off, either
  :guilabel:`Worked Time` or :guilabel:`Absence`. :guilabel:`Worked Time` indicates the time off
  taken counts toward worked time for any type of accrual the employee is working towards, whereas
  :guilabel:`Absence` does not count toward any type of accrual.
- :guilabel:`Company`: If multiple companies are created in the database, and this time off type
  only applies to one company, select the company from the drop-down menu. If this field is left
  blank, the time off type applies to all companies in the database. This field **only** appears in
  a multi-company database.

Negative cap section
********************

Enable the :guilabel:`Allow Negative Cap` option if employees are able to request more time off than
they currently have, allowing a negative balance. If enabled, an :guilabel:`Maximum Excess Amount`
field appears. In this field, enter the maximum amount of negative time allowed, in days.

.. example::
   Sara currently has three days of the time off type `Vacation`. She is planning a trip that
   requires five days of time off.

   The `Vacation` time off type has the :guilabel:`Allow Negative Cap` option enabled, and the
   :guilabel:`Maximum Excess Amount` is set to five.

   These settings allow Sara to submit a request for five days of the `Vacation` time off type. If
   approved, her `Vacation` time off balance will be negative two (-2) days.

.. image:: time_off/time-off-type-form-top.png
   :alt: The top half of the time off type form, with all the information filled out for sick time
         off.

Payroll section
***************

If the time off type should create :doc:`../hr/payroll/work_entries` in the **Payroll** app, select
the :guilabel:`Work Entry Type` from the drop-down list.

Timesheets section
******************

.. note::
   The :guilabel:`Timesheets` section only appears if the user is in developer mode. Refer to the
   :ref:`developer-mode` document for details on how to access the developer mode.

When an employee takes time off, and is also using timesheets, Odoo creates entries in the
**Timesheets** app for the time off. This section defines how they are entered.

- :guilabel:`Project`: Select the project the time off type entries appear in.
- :guilabel:`Task`: Select the task that appears in the timesheet for this time off type. The
  default options are: :guilabel:`Time Off`, :guilabel:`Meeting`, or :guilabel:`Training`.

Display option section
**********************

- :guilabel:`Color`: Select a color to be used in the **Time Off** app dashboard.
- :guilabel:`Cover Image`: Select an icon to be used in the **Time Off** app dashboard.

.. image:: time_off/time-off-type-form-bottom.png
   :alt: The lower half of the time off type form, with all the information filled out for sick time
         off.

.. _time_off/accrual-plans:

Accrual plans
-------------

Some time off is earned through an accrual plan, meaning that for every specified amount of time an
employee works (hour, day, week, etc), they earn or *accrue* a specified amount of time off.

.. example::
   If an employee accrues a vacation day for every week they work, they would earn 0.2 vacation days
   for each hour they work. At the end of a forty hour work week, they would earn one whole vacation
   day (8 hours).

Create accrual plan
~~~~~~~~~~~~~~~~~~~

To create a new accrual plan, navigate to :menuselection:`Time Off app --> Configuration --> Accrual
Plans`. Then, click the :guilabel:`New` button, which reveals a blank accrual plan form.

Enter the following information on the form:

- :guilabel:`Name`: Enter the accrual plan name.
- :guilabel:`Accrued Gain Time`: Select when the employee begins to accrue time off, either
  :guilabel:`At the start of the accrual period` or :guilabel:`At the end of the accrual period`.
- :guilabel:`Carry-Over Time`: Select when the employee received previously earned time. The options
  are:

  - :guilabel:`At the start of the year`: Select this if the accrual rolls over on January 1 of the
    upcoming year.
  - :guilabel:`At the allocation date`: Select this if the accrual rolls over as soon as time is
    allocated to the employee.
  - :guilabel:`Other`: Select this option if neither of the other two options are applicable. When
    selected, a :guilabel:`Carry-Over Date` field appears. Select the date using the two drop-down
    menus, one for the day and one for the month.

- :guilabel:`Based on worked time`: Enable this option if time off accrual is determined by the
  employee's worked hours. Days **not** considered as worked time do **not** contribute to the
  accrual plan in Odoo.

  .. example::
     An employee is granted time off from an accrual plan configured to accrue one day of vacation
     for every five days worked. The accrual plan is based on the employee's worked time (the
     :guilabel:`Based on worked time` checkbox is ticked), which means they **only** earn vacation
     time for the five weekdays they work, *not* the entire seven day week period.

     The employee works standard 40-hour weeks. According to the accrual plan, they should earn four
     vacation days per month.

     The employee takes five days off using a :ref:`time off type <time_off/time-off-types>` with
     the :guilabel:`Kind of Time Off` set as an :guilabel:`Absence`. Because the plan grants
     vacation only for worked time, those five days do not count toward accrual.

     As a result, the employee accrues only three vacation days that month instead of four.

- :guilabel:`Milestone Transition`: This field is **only** visible after a minimum of two
  :ref:`rules <time_off/rules>` have been configured on the accrual plan. This selection determines
  when employees move up to a new milestone. If they qualify to change milestones in the middle of a
  pay period, decide whether the employee changes milestones :guilabel:`Immediately` or
  :guilabel:`After this accrual's period` (after the current pay period).
- :guilabel:`Company`: This field **only** appears in a multi-company database. Using the drop-down
  menu, select the company the accrual plan applies to. If left blank, the accrual plan is available
  for all companies.

.. image:: time_off/accrual-plan-form.png
   :alt: An accrual plan form with all the entries filled out.

.. _time_off/rules:

Rules
*****

Rules must be created in order for employees to accrue time off from the accrual plan.

To create a new rule, click the :guilabel:`New Milestone` button in the gray :guilabel:`Rules`
section, and a :guilabel:`Create Milestone` modal form appears.

Fill out the following fields on the form:

.. _time_off/accrue:

- :guilabel:`Employee accrue`: Select the parameters for earned time off in this section.

  First, select either :guilabel:`Days` or :guilabel:`Hours` for the increment of accrued time using
  the drop-down menu.

  Next, enter the numerical amount of the selected parameter that is accrued. The numerical format
  is `X.XXXX`, so that partial days or hours can also be configured.

  Last, select how often the time is accrued using the drop-down menu. The default options are
  :guilabel:`Hourly`, :guilabel:`Daily`, :guilabel:`Weekly`, :guilabel:`Twice a month`,
  :guilabel:`Monthly`, :guilabel:`Twice a year`, and :guilabel:`Yearly`.

  Depending on which option is selected, additional fields may appear. For example, if
  :guilabel:`Twice a month` is selected, two additional fields appear, to specify the two days of
  each month the milestone occurs.
- :guilabel:`Cap accrued time`: If there is a maximum amount of time the employee can accrue with
  this plan, enable this option.

  When enabled, two additional fields appear to the right of the checkbox. The second field is
  populated with either :guilabel:`Days` or :guilabel:`Hours`, matching the selection made in the
  :ref:`Employee Accrue <time_off/accrue>` section.

  Enter a numerical value in the first field to specify the maximum amount of time that can be
  accrued, in the specified increments.
- :guilabel:`Start Accruing`: Enter the number and value of the time period that must pass before
  the employee starts to accumulate time off.

  Use the first field to enter a numerical value, then set the second field to the desired time
  increment (either :guilabel:`Days`, :guilabel:`Months`, or :guilabel:`Years`).
- :guilabel:`Carry over`: select how any unused time off is handled. The options are either:

  - :guilabel:`None. Accrued time reset to 0`: Any unused time off is lost.
  - :guilabel:`All accrued time carried over`: All unused time off is rolled over to the next
    calendar year.
  - :guilabel:`Carry over with a maximum`: Unused time off is rolled over to the next calendar year,
    but there is a cap. An :guilabel:`Up to` field appears if this is selected.

    Enter the maximum number of :guilabel:`Hours` or :guilabel:`Days` that can roll over to the
    following year. The presented time increment is determined by how the :ref:`Employee Accrue
    <time_off/accrue>` section is configured.

    Any time off beyond this parameter is lost.

.. important::
   If the :guilabel:`Carry over` field is set to :guilabel:`None. Accrued time reset to 0`, that
   rule *overrides* the :guilabel:`Carry-Over Time` set on the accrual plan.

   If a company creates an accrual plan, granting employees time off :guilabel:`At the start of the
   accrual period` (i.e., the beginning of the year), and sets the :guilabel:`Carry-Over Time` on
   the *accrual plan* to :guilabel:`At the start of the year`, it allows unused vacation time to
   rollover to the following year.

   Then, the company adds rules to the accrual plan, allocating five days of vacation, annually, on
   the first of the year (one week of vacation allocated on January 1st).

   If the :guilabel:`Carry over` field is set to :guilabel:`None. Accrual time reset to 0` on the
   :guilabel:`Create Milestone` pop-up for, any unused vacation time *does not* carry over, even
   though on the :guilabel:`Accrual Plan` form, the :guilabel:`Carry-Over Time` is set to
   :guilabel:`At the start of the year`.

   The carry over set on the *rule* takes precedence over the carry over set on the *accrual plan
   form*.

- :guilabel:`Milestone cap`: Tick this checkbox to set a limit on the total amount of time that can
  be accrued every calendar year. Enter the total maximum number of :guilabel:`Hours` or
  :guilabel:`Days` the employee can accrue during a year. The presented time increment is determined
  by how the :ref:`Employee Accrue <time_off/accrue>`  section is configured.

  If the :guilabel:`Carry over` field is set to :guilabel:`None. Accrued time reset to 0`, the
  :guilabel:`Milestone cap` field does not appear.
- :guilabel:`Carry Over Validity`: Tick this checkbox to set a time-limit on how long the employee
  has to use any rolled over time off. First, set the second field to the desired time-period using
  the drop-down menu, either :guilabel:`Days` or :guilabel:`Months`.

  Next, enter the maximum number of :guilabel:`Days` or :guilabel:`Months` the employee has to use
  their rolled over time off. After that time period passes, any unused rolled over time will
  expire.

  If the :guilabel:`Carry over` field is set to :guilabel:`None. Accrued time reset to 0`, the
  :guilabel:`Carry Over Validity` field does not appear.

Once the form is completed, click :guilabel:`Save & Close` to save the :guilabel:`Create Milestone`
form, and close the modal, or click :guilabel:`Save & New` to save the form and create another
milestone. Add as many milestones as desired.

.. example::
   This milestone form is configured so the employee earns five days a year. They start to earn this
   time yearly, on January 1st.

   The employee can never accrue more than 120 days of time off with this accrual plan. Anytime they
   have 120 days banked, they will stop accruing more time off.

   Additionally, they can roll over up to 100 days of time off to the next year, and they have three
   months to use that rollover time.

   Note that due to the :guilabel:`Capped accrued time` of 120 days, the employee cannot carry over
   any time off that exceeds 120 days in total.

   .. image:: time_off/milestone.png
      :alt: A milestone form with all the entries filled out.

.. _time_off/public-holidays:

Public holidays
---------------

Since holidays vary from country to country, or even city to city, there are no public holidays
preconfigured in Odoo. To observe public or national holidays, and provide extra days off as
holidays to employees, configure the observed public holidays in Odoo.

It is important to configure public holidays in Odoo, so employees are aware of the days they have
off, and do not request time off on days that are already set as a public holiday (non-working
days).

Additionally, all public holidays configured in the **Time Off** app are also reflected in any app
that uses working schedules, such as **Calendar**, **Planning**, **Manufacturing**, and more.

Due to Odoo's integration with other apps that use working schedules, it is considered best practice
to ensure *all* public holidays are configured.

Create public holidays
~~~~~~~~~~~~~~~~~~~~~~

To create a public holiday, navigate to :menuselection:`Time Off app --> Configuration --> Public
Holidays`. All currently configured public holidays appear in a default list view.

Click the :guilabel:`New` button, and a new line appears at the bottom of the list.

Enter the following information on that new line:

- :guilabel:`Name`: Enter the name of the holiday.
- :guilabel:`Company`: If in a multi-company database, the current company populates this field by
  default. It is **not** possible to edit this field.

  .. note::
     The :guilabel:`Company` field is hidden, by default. To view this field, click the
     :icon:`oi-settings-adjust` :guilabel:`(settings adjusts)` icon in the top-right corner of the
     list, to the far-right of the column titles, and activate the :guilabel:`Company` selection
     from the drop-down menu that appears.

- :guilabel:`Start Date`: Using the date and time picker, select the date and time the holiday
  starts, then click :icon:`fa-check` :guilabel:`Apply`. By default, this field is configured for
  the current date. The start time is set according to the start time for the company (according to
  the :ref:`working schedules <payroll/working-times>`). If the user's computer is set to a
  different time zone, the start time is adjusted accordingly, compared to the company's time zone.
- :guilabel:`End Date`: Using the date and time picker, select the date and time the holiday ends,
  then click :icon:`fa-check` :guilabel:`Apply`. By default, this field is configured for the
  current date, and the time is set to the end time for the company (according to the :ref:`working
  schedules <payroll/working-times>`). If the user's computer is set to a different time zone, the
  start time is adjusted accordingly, compared to the company's time zone.

  .. example::
     A company located in San Francisco operates from 9:00 AM - 6:00 PM, with an eight hour work day
     and one hour lunch break.

     For a user in New York, with a computer time zone set to Eastern Standard Time, a created
     public holiday displays a start time of 12:00 PM - 9:00 PM, accounting for the three hour time
     zone difference.

     Similarly, a user located in Los Angeles, with a computer time zone set to Pacific Standard
     Time, sees a public holiday time as 9:00 AM - 6:00 PM.

- :guilabel:`Working Hours`: If the holiday should only apply to employees who have a specific set
  of working hours, select the working hours from the drop-down menu. If left blank, the holiday
  applies to all employees.
- :guilabel:`Work Entry Type`: If using the **Payroll** app, this field defines how the :ref:`work
  entries <payroll/work-entries>` for the holiday appear. Select the work entry type from the
  drop-down menu.

.. image:: time_off/holidays.png
   :alt: The list of public holidays in the configuration menu.

Mandatory days
--------------

Some companies have special days where specific departments, or the entire staff, is required to be
present, and time off is not allowed on those specific days.

These types of days are called *mandatory days* in Odoo. These can be configured to be company-wide,
or department specific. When configured, employees in the specified department or company are unable
to submit time off requests for these mandatory days.

Create mandatory days
~~~~~~~~~~~~~~~~~~~~~

No mandatory days are configured in Odoo by default. To create a mandatory day, navigate to
:menuselection:`Time Off app --> Configuration --> Mandatory Days`.

Click the :guilabel:`New` button in the top-left corner, and a blank line appears in the list.

Enter the following information on that new line:

- :guilabel:`Name`: Enter the name of the mandatory day.
- :guilabel:`Company`: If in a multi-company database, this field is visible, and the current
  company populates this field, by default. Using the drop-down menu, select the company the
  mandatory day is for.
- :guilabel:`Departments`: This column is hidden by default. First, click the
  :icon:`oi-settings-adjust` :guilabel:`(additional options)` icon in the top-right corner, next to
  :guilabel:`Color`, and then tick the checkbox next to :guilabel:`Departments` to reveal that
  column.

  Next, select the desired departments from the drop-down menu. Multiple departments can be
  selected, and there is no limit to the amount of departments that can be added.

  If this field is left blank, the mandatory day applies to the entire company.
- :guilabel:`Start Date`: Using the calendar picker, select the date the mandatory day starts.
- :guilabel:`End Date`: Using the calendar picker, select the date the mandatory day ends. If
  creating a single mandatory day, the end date should be the same as the start date.
- :guilabel:`Color`: If desired, select a color from the available presented options. If no color is
  desired, select the `No color` option, represented by a white box with. The selected color appears
  on the main **Time Off** app dashboard, in both the calendar and in the legend.

.. image:: time_off/mandatory.png
   :alt: The Mandatory Days section with three configured days.

Overview
========

To view a color-coded schedule of the user's time off, and/or of the team managed by them, navigate
to :menuselection:`Time Off app --> Overview`. This presents a calendar with the default filter of
`My Team`, in a quarterly (three month) view.

To change the time period displayed, click on the :icon:`fa-calendar` :guilabel:`(time period)`
button to reveal a drop-down menu. Then, select either :guilabel:`Today`, :guilabel:`This week`,
:guilabel:`This month`, :guilabel:`This year`, or a custom time period, to present the calendar in
that corresponding view.

To navigate forward or backward in time, in the selected increment (:guilabel:`Month`,
:guilabel:`Week`, etc.), click the :icon:`oi-arrow-left` :guilabel:`(left arrow)` or
:icon:`oi-arrow-right` :guilabel:`(right arrow)` buttons to move either forward or backward in that
specified amount of time. For example, if :guilabel:`Month` is selected, the arrows adjust the view
by one month.

To return to a view containing the current day, click the :icon:`fa-crosshairs` :guilabel:`(Focus
Today)` button at any time.

Team members are listed alphabetically on individual lines, and their requested time off, regardless
of the status (*validated* or *to approve*), is visible on the calendar.

Each employee is color-coded. The employee's color is selected at random, and does *not* correspond
to the type of time off they requested.

The status of the time off is represented by the color detail of the request, either appearing solid
(*validated*) or striped (*to approve*).

The number of days or hours requested is written on the request (if there is enough space).

At the bottom of the calendar, in the :guilabel:`Total` line, a bar graph shows how many people are
projected to be out on any given day. The number on each individual bar represents the number of
employees out for those highlighted days.

Click on a time off entry to view the details for the specific time off entry. The total number of
hours or days are listed, along with the start and end time of the time off. To view the details of
the time off request in a modal, click the :guilabel:`View` button.

.. image:: time_off/overview.png
   :alt: Overview of the user's team, with time off requests shown.

.. _time_off/reporting:

Reporting
=========

The reporting feature allows users to view time off for their team, either by employee or type of
time off. This allows users to see which employees are taking time off, how much time off they are
taking, and what time off types are being used.

Any report can be added to a spreadsheet, when in either the :icon:`fa-area-chart`
:guilabel:`(Graph)` or :icon:`oi-view-pivot` :guilabel:`(Pivot)` view, through the *Insert in
Spreadsheet* button that appears in the top-left of a report.

.. note::
   If the **Documents** app is installed, an option to add the report to a spreadsheet appears. If
   not, the report can be added to a *Dashboard*.

By employee
-----------

To view a list of employee time off requests, navigate to :menuselection:`Time Off app --> Reporting
--> by Employee`.

The default report presents the current year's data in a list view, displaying all the employees in
alphabetical order. Each employee's line is collapsed by default. To expand a line, click anywhere
on the line.

The view expands, and has the time off requests organized by time off type. Click anywhere on a time
off type line to expand it, and view all the individual time off requests that fall under that type.

The information shown in the list includes: the :guilabel:`Employee` name, :guilabel:`Number of
Days` off requested, the :guilabel:`Start Date`, :guilabel:`End Date`, :guilabel:`Status`, and
:guilabel:`Description`.

.. image:: time_off/employee-report.png
   :alt: Report of time off, shown by each employee in a list view.

The report can be displayed in other ways, as well. Click the corresponding button option in the
top-right corner of the page to view the data in that specific way. The various options are a
:icon:`oi-view-list` :guilabel:`(List)`, or default view, :icon:`fa-area-chart` :guilabel:`(Graph)`,
:icon:`oi-view-pivot` :guilabel:`(Pivot)` table, or :icon:`fa-calendar` :guilabel:`(Calendar)` view.

When a selection has been made, additional options appear for that particular selection. For more
detailed information on the reports and their various options, refer to the :doc:`reporting
<../essentials/reporting>` documentation.

By type
-------

To view a graph of all time off, organized by time off type, navigate to :menuselection:`Time Off
app --> Reporting --> by Type`. This shows all time off requests in a default bar chart.

Hover over a bar to view the :guilabel:`Duration (Days)` of that specific time off type.

.. image:: time_off/bar-chart.png
   :alt: The various time off types, and how many days requested, in a bar chart. Details are
         highlighted in a red box.

Click on a bar to go to a detailed list view of all the time off requests for that time off type.

Each request is listed, with the following information displayed: the :guilabel:`Employee`,
:guilabel:`Number of Days`, :guilabel:`Request Type`, :guilabel:`Start Date`, :guilabel:`End Date`,
:guilabel:`Status`, and the :guilabel:`Description`.

The report can be displayed in other ways, as well. Click the corresponding button option in the
top-right corner of the page to view the data in that way. The various options are a
:icon:`fa-area-chart` :guilabel:`(Graph)` (the default view), :icon:`oi-view-list`
:guilabel:`(List)`, or :icon:`oi-view-pivot` :guilabel:`(Pivot)` table.

When a selection has been made, additional options appear for that particular selection. For more
detailed information on the reports, and their various options, refer to the :doc:`reporting
<../essentials/reporting>` documentation.

Balance
-------

To view a pivot table of all time off balances, organized by time off type, then further organized
by how many days and hours are :guilabel:`Left` and :guilabel:`Planned`, navigate to
:menuselection:`Time Off app --> Reporting --> Balance`.

This shows all time off balances in a default pivot table. The employees populate the rows, while
the various time off types and balances populate the columns.

.. image:: time_off/balance.png
   :alt: The various time off balances, in a pivot table.

.. seealso::
   - :doc:`time_off/allocations`
   - :doc:`time_off/request_time_off`
   - :doc:`time_off/my_time`
   - :doc:`time_off/management`

.. toctree::
   :titlesonly:

   time_off/allocations
   time_off/request_time_off
   time_off/my_time
   time_off/management
