:show-content:

===========
Attendances
===========

Odoo's **Attendances** application functions as a time clock. Employees are able to check in and out
of work using a :ref:`dedicated device in kiosk mode <attendances/kiosk-mode-entry>`, while users
are also able to check in and out of work :ref:`directly from the database <attendances/check-in>`.
Managers can see who is available at any given time, create reports to see everyone's hours, and
gain insights on which employees are working overtime or checking out of work earlier than expected.

.. _attendances/access-rights:

Access rights
=============

Understanding access rights is essential to navigating the **Attendances** application.

Every user in the database is able to check in and out directly from the database, without needing
access to the **Attendances** app. Additionally, all users can access their own attendance records
from their employee form in the **Employees** app.

Access to both the **Attendances** application and the various features within the application is
determined by access rights.

To see what access rights a user has, navigate to the :menuselection:`Settings app --> Users &
Companies --> Users`, and click on an individual user. The :guilabel:`Access Rights` tab is visible
by default. Scroll down to the *Human Resources* section to view the settings. For the
:guilabel:`Attendances` field, the following options appear:

- :guilabel:`No`: The user does **not** have access to the **Attendances** application, and is
  **not** able to open the app, even though it appears on the main database dashboard. An *Access
  Error* pop-up message appears when the application is clicked. The user can only check in and out
  of the database either through an :ref:`attendance kiosk <attendances/kiosk-mode-entry>` or the
  :doc:`attendance icon <attendances/check_in_check_out>` in the top-right corner of the Odoo
  database, which is visible at all times, in every application).
- :guilabel:`Officer: Manage all attendances`: The user has full access to all employee attendance
  records, including the ability to modify and create records, but does **not** have access to the
  configuration menu and settings.
- :guilabel:`Administrator`: The user has full access to the entire **Attendances** application,
  with no restrictions. They can view all employee attendance records, enter :ref:`kiosk mode
  <attendances/enable-kiosk-mode>` from the application, access all :doc:`reporting
  <attendances/attendance_reporting>` metrics, and make modifications to the settings.

.. _attendances/approvers:

Approvers
---------

An approver is a user assigned to review and manage an employee's attendance records. An approver is
typically a manager, though that is not required. Approvers without administrative rights can access
and modify attendance records **only** for the employees they are assigned to. This is the only
exception where non-admin users can view records in the **Attendances** app.

To view the attendance approver for an employee, navigate to the :menuselection:`Employees`
application and click on the specific employee. Click on the :guilabel:`Settings` tab, scroll to the
*Approvers* section, and check the :guilabel:`Attendance` field. The person selected is able to view
that employee's attendance records, both on the **Attendances** application dashboard as well as in
the attendance reports, and make modifications to their records.

Configuration
=============

Few configurations are needed in the **Attendances** app. Determining how employees check in and
out, defining how the kiosks function, and determining how extra hours are computed are all
configured in the settings menu. Navigate to the :menuselection:`Attendances app --> Configuration
--> Settings` to access the settings menu.

.. note::
   Any configuration item with a :icon:`fa-building-o` :guilabel:`(building)` icon is a
   company-specific configuration. Items without a :icon:`fa-building-o` :guilabel:`(building)` icon
   apply to all companies within the database.

.. _attendances/modes:

Modes
-----

This section specifies how employees log in and out, and how absences are handled.

- :guilabel:`Attendances from Backend` :icon:`fa-building-o`: Activate this feature to allow users
  to check in and out directly from the Odoo database. If this is not activated, users must use a
  kiosk to check in and out of work.
- :guilabel:`Automatic Check-Out` :icon:`fa-building-o`: Activate this feature to automatically
  check out employees according to their working schedule, after a buffer of time has passed. When
  enabled, a :guilabel:`Tolerance` field appears below this option. Enter the amount of time, in
  hours, that must elapse after an employee's working hours have ended, before they are
  automatically checked out.

  .. example::
     With the :guilabel:`Automatic Check-Out` option enabled, and the :guilabel:`Tolerance` set to
     `2.00` hours, an employee checks in to work at 9:00 AM and forgets to check out at 5:00 PM. At
     7:00 PM, they are automatically checked out.

- :guilabel:`Absence Management` :icon:`fa-building-o`: Activate this feature to log any absences
  that are not associated with a time off request, such as vacation time or sick time, on the
  :doc:`attendance report <attendances/attendance_reporting>`. This does **not** apply for employees
  with a flexible working schedule.

Extra Hours
-----------

This section specifies how extra time (sometimes referred to as *overtime*) is calculated, including
when extra time is counted and what time is not logged.

- :guilabel:`Tolerance Time In Favor Of Company`: Enter the amount of time, in minutes, that is
  **not** counted towards an employee's overtime. When an employee checks out, and the extra time
  logged is below the specified minutes, the extra time is **not** counted as overtime for the
  employee. When an employee checks out, and the extra time logged is more than the specified
  minutes, the extra time **is** counted as overtime for the employee.

  .. example::
     A company sets the :guilabel:`Tolerance Time In Favor Of Company` to `15` minutes, and the
     working hours for the entire company are set from 9:00 AM to 5:00 PM.

     An employee checks in at 9:00 AM. If the employee checks out at 5:14 PM, the extra 14 minutes
     are **not** counted towards their overtime. If the employee checks out at 5:17 PM, they earn 17
     minutes of overtime.

- :guilabel:`Tolerance Time In Favor Of Employee`: Enter the amount of time, in minutes, that an
  employee is given, which does **not** adversely affect their attendance if they log less time than
  their working hours. When an employee checks out, and the total time logged for the day is less
  than their specified working hours and less than this specified grace period, they are **not**
  penalized for their reduced hours. When an employee checks out, and the total time logged for the
  day is less than their specified working hours and more than this specified grace period, they
  **are** penalized for their reduced hours.

  .. example::
     A company sets the :guilabel:`Tolerance Time In Favor Of Employee` fields to `15` minutes, and
     the working hours for the entire company are set from 9:00 AM to 5:00 PM.

     An employee checks in at 9:05 AM. If the employee checks out at 4:55 PM, even though they
     logged a total of 10 minutes less than their full working hours, they are **not** penalized for
     this discrepancy, and they are logged as working a full eight-hour day. If the employee checks
     out at 4:40 PM, they **are** penalized, and they are logged as only working 7 hours and 35
     minutes.

- :guilabel:`Extra Hours Validation` :icon:`fa-building-o`: Click on either the radio button next to
  :guilabel:`Automatically Approved` to have all extra time automatically approved, or
  :guilabel:`Approved by Manager` if all extra time should be reviewed and approved by a manager.

- :guilabel:`Display Extra Hours`: Activate this box to display the extra hours logged by an
  employee when they check out with a kiosk, or when a user checks out in the database.

.. note::
   Approved extra hours can be :ref:`deducted from an approved time off request
   <time_off/deduct-extra-hours>`.

Overview
========

When entering the **Attendances** application, the :guilabel:`Overview` dashboard is presented,
containing all the user's check in and check out information. If the user has the required
:ref:`access rights <attendances/access-rights>` or is an :ref:`approver <attendances/approvers>`
for specific employees, those employees' check-in and check-out information also appears on the
:guilabel:`Overview` dashboard.

The **Attendance** dashboard allows switching between :icon:`fa-tasks` :guilabel:`(Gantt)` and
:icon:`oi-view-list` :guilabel:`(List)` views, and selecting a period to analyze. The current period
is automatically highlighted in yellow for real-time attendance records, while the
:icon:`fa-crosshairs` :guilabel:`(Focus Today)` button instantly returns the dashboard to the
present date.

.. image:: attendances/overview.png
   :alt: The overview dashboard presenting the information for the week, with the current day
         highlighted.

.. note::
   Any entries that have errors appear in red, indicating they need to be resolved by a user with
   the proper :ref:`access rights <attendances/access-rights>` and/or are :ref:`approvers
   <attendances/approvers>` for the employees with the errors.

.. _attendances/filters-groups:

Filters and groups
==================

Sometimes, attendance officers and managers need to view specific records, such as all automatic
checkouts, to determine which employees chronically forget to check out, or by department, to
determine which team is working the most overtime.

For these cases, use the search bar to select a :icon:`fa-filter` :guilabel:`Filters` or
:icon:`oi-group` :guilabel:`Group By`, or combine both to present the desired information.

.. seealso::
   :doc:`../essentials/search`

High-value filters
------------------

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 40 60

   * - Filter
     - Common use case
   * - At Work
     - Verify employees still on-site before shutting down the building for the night, or to perform
       a head count.
   * - Errors
     - View all errors to correct them prior to payroll processing.
   * - Automatically Checked-Out
     - Perform an audit to determine employees who chronically forget to check-out of work.
   * - Date
     - Limit results to a specific pay-period or audit window.
   * - Active/Archived Employees
     - Switch between current staff and former employees when auditing historical data.

Insightful groupings
--------------------

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 40 60

   * - Group by
     - When it helps
   * - Employee
     - Review individual attendance records during a 1:1 meeting.
   * - Department
     - Compare staffing levels and working hours to determine over-working and under-working teams.
   * - Manager
     - Determine where attendance follow-up questions can be directed to for an employee.
   * - Method
     - Spot trends in attendance methods to potentially resolve hardware issues.
   * - Date (Day/Week/Month)
     - Identify absenteeism spikes or seasonal patterns.

.. _attendances/errors:

Attendance log details
======================

Odoo records both the time and location for every check-in and check-out, with fields varying by the
method used. These detailed attendance logs can confirm where an employee was on any given workday.
This can be useful for companies with hybrid working schedules, who may need to perform audits to
ensure proper compliance.

The detailed attendance log contains the following information:

Main details
------------

- :guilabel:`Employee`: The name of the employee.
- :guilabel:`Check In`: The date and time the employee checked in.
- :guilabel:`Check Out`: The date and time the employee checked out. This **only** appears if the
  employee has checked out.
- :guilabel:`Worked Time`: The total amount of time the employee logged for the day, across multiple
  check-ins and outs, in an hour and minute format (HH:MM).
- :guilabel:`Worked Extra Hours`: Unpaid overtime hours worked beyond the expected working schedule
  (shows **only** when present for the employee).
- :guilabel:`Extra Hours`: Approved overtime (the :guilabel:`Worked Time` minus the approved
  :guilabel:`Worked Extra Hours`.

Check in/check out details
--------------------------

The following information appears for both the :guilabel:`Check In` and :guilabel:`Check Out`
sections.

- :guilabel:`Mode`: Attendance submission method. Can be :ref:`Systray <attendances/check-in>`,
  :ref:`Kiosk <attendances/kiosk-mode-entry>`, or :guilabel:`Manual` entry.
- :guilabel:`IP Address`: The device's IP address used to log in or out.
- :guilabel:`Browser`: The web browser the employee used to log in or out.
- :guilabel:`Localisation`: The city and country associated with the computer's IP address.
- :guilabel:`GPS Coordinates`: The specific coordinates when the user logged in or out. To view the
  specific coordinates on a map, click the :icon:`oi-arrow-right` :guilabel:`View on Maps` button
  beneath the :guilabel:`GPS Coordinates`. This opens a map in a new browser tab, with the specific
  location pointed out.

.. image:: attendances/details.png
   :alt: The detailed information for an attendance entry.

Attendance errors
=================

Entries that contain an error appear on the overview dashboard in red. In the :icon:`fa-tasks`
:guilabel:`(Gantt)` view, the entry appears with a red background; in the :icon:`oi-view-list`
:guilabel:`(List)` view, the entry text appears in red.

An error occurs when an employee has checked in but not checked out within 24 hours, or when a
single check-in period exceeds 16 hours.

To fix the error, the attendance entry must be modified or deleted. Click on the entry to reveal a
pop-up containing the details for that particular entry. To modify the :guilabel:`Check In` and/or
:guilabel:`Check Out` information, click on the :guilabel:`Check In` or :guilabel:`Check Out` field,
and a calendar selector appears. Click on the desired date, then use the time selector beneath the
calendar to select the specific time for the entry. When the information is correct, click
:guilabel:`Apply.`

When all the information on the pop-up is correct, click :guilabel:`Save & Close`. When the entry no
longer has an error, the entry appears in gray instead of red.

To delete an entry, click the red :guilabel:`Delete` button on the pop-up window instead of making
modifications to the entry.

.. seealso::
   - :doc:`attendances/check_in_check_out`
   - :doc:`attendances/kiosks`
   - :doc:`attendances/management`
   - :doc:`attendances/hardware`
   - :doc:`attendances/attendance_reporting`

.. toctree::
   :titlesonly:

   attendances/check_in_check_out
   attendances/kiosks
   attendances/management
   attendances/hardware
   attendances/attendance_reporting
