:show-content:

===========
Attendances
===========

Odoo's **Attendances** application functions as a time clock. Employees are able to check in and out
of work using a :ref:`dedicated device in kiosk mode <attendances/kiosk-mode-entry>`, while users
are also able to check in and out of work :ref:`directly from the database <attendances/check-in>`.
Managers can see who is available at any given time, validate the logged hours, create reports to
see everyone's hours, and gain insights on which employees are working overtime or checking out of
work earlier than expected.

.. _attendances/access-rights:

Access rights
=============

Understanding access rights is essential to navigating the **Attendances** application.

Every user in the database is able to check in and out directly from the database, without needing
access to the **Attendances** app, as long as the :guilabel:`Attendances from Backend` setting is
enabled. Additionally, all users can access their own attendance records from their employee form in
the **Employees** app.

Access to both the **Attendances** application and the various features within the application is
determined by access rights.

To see what access rights a user has, navigate to the :menuselection:`Settings app --> Users &
Companies --> Users`, and click on an individual user. The :guilabel:`Access Rights` tab is visible
by default. Scroll down to the *Human Resources* section to view the settings. For the
:guilabel:`Attendances` field, the following options appear:

- :guilabel:`No`: The user does **not** have access to the **Attendances** application. The user
  can only check in and out of the database either through an :ref:`attendance kiosk
  <attendances/kiosk-mode-entry>` or the :doc:`attendance icon <attendances/check_in_check_out>` in
  the top-right corner of the Odoo database, which is visible at all times, in every application.
- :guilabel:`Self Attendance Edit`: The user can access the **Attendances** app to view their own
  attendances, create them, and modify them. When attendances must be :ref:`validated
  <attendances/modes>`, the user can no longer modify their attendances once they are validated.
  This is the default access right of new users.
- :guilabel:`Officer: Manage all attendances`: The user has full access to all employee attendance
  records, including the ability to modify, create, validate, and refuse records, but does **not**
  have access to the configuration menu and settings.
- :guilabel:`Administrator`: The user has full access to the entire **Attendances** application,
  with no restrictions. They can view all employee attendance records, enter :ref:`kiosk mode
  <attendances/enable-kiosk-mode>` from the application, access all :doc:`reporting
  <attendances/attendance_reporting>` metrics, and make modifications to the settings and
  :doc:`automatic rules <attendances/overtime>`.

.. _attendances/approvers:

Approvers
---------

An approver is a user assigned to review and manage an employee's attendance records. An approver is
typically a manager, though that is not required. Approvers without administrative rights can
access, modify, validate, and refuse attendance records **only** for the employees they are assigned
to.

To view the attendance approver for an employee, navigate to the :menuselection:`Employees`
application and click on the specific employee. Click on the :guilabel:`Settings` tab, and check
the :guilabel:`Attendance` field in the *Approvers* section. The person selected is able to view
that employee's attendance records, both on the **Attendances** application dashboards as well as
in the attendance reports, and make modifications to their records.

.. note::
   When a user is selected as an attendance approver, they automatically receive the access rights
   needed to manage the attendances of the employees they approve. These rights are removed when
   they no longer approve any employee.

Configuration
=============

Few configurations are needed in the **Attendances** app. Determining how employees check in and
out, how attendances are validated, and defining how the kiosks function are all configured in the
settings menu. Navigate to the :menuselection:`Attendances app --> Configuration --> Settings` to
access the settings menu.

.. note::
   In a multi-company database, any configuration item with a :icon:`business` :guilabel:`(Values
   set here are company-specific.)` icon is a company-specific configuration. Items without this
   icon apply to all companies within the database.

.. _attendances/modes:

Attendance rules and enforcement
--------------------------------

This section specifies how employees check in and out, how their attendances are validated, and
how absences are handled.

- :guilabel:`Attendance Validation` :icon:`business`: Select how attendances are validated:

  - :guilabel:`Worked days are automatically approved`: All attendances are validated as soon as
    they are recorded.
  - :guilabel:`Worked days require manual approval`: All attendances must be :ref:`validated by an
    officer <attendances/approve-refuse>`.
  - :guilabel:`Worked days require approval if outside tolerance`: Enter a :guilabel:`Tolerance`, in
    hours. An attendance is validated automatically when its duration differs from the employee's
    expected hours for the day by no more than the tolerance (or when no hours are expected that
    day); otherwise, it must be validated by an officer.

  Only validated attendances are taken into account by the :doc:`automatic rules
  <attendances/overtime>` and to compute the employee's pay.

- :guilabel:`Automatic Check-Out` :icon:`business`: Activate this feature to automatically
  check out employees who forgot to check out. Select the method in the :guilabel:`Based on` field:

  - :guilabel:`Tolerance`: Employees are checked out according to their working schedule, after a
    buffer of time has passed. Enter the amount of time, in hours, that must elapse after an
    employee's working hours have ended, before they are automatically checked out.
  - :guilabel:`Specific Time`: Employees are checked out at the specified time of the day.

  This does **not** apply to employees with a flexible working schedule.

  .. example::
     With the :guilabel:`Automatic Check-Out` option enabled, based on a :guilabel:`Tolerance` of
     `2.00` hours, an employee checks in to work at 9:00 AM and forgets to check out at 5:00 PM. At
     7:00 PM, they are automatically checked out.

  When the :guilabel:`Tolerance` method is selected, the :guilabel:`Single Check-In Attendance
  System` option appears. When enabled, only the first check-in within the scheduled working hours
  is recorded: employees cannot check out themselves, and can check in again only after they have
  been automatically checked out.

- :guilabel:`Absence Management` :icon:`business`: Activate this feature to record the days
  where employees with a working schedule did not log any attendance, such as days of absence not
  covered by a time off request. Odoo creates a technical attendance for these days, so that an
  :doc:`automatic rule <attendances/overtime>` detecting the time worked :guilabel:`Less than` the
  schedule can record the missing hours. This does **not** apply for employees with a flexible
  working schedule.
- :guilabel:`Attendances from Backend` :icon:`business`: Activate this feature to allow users
  to check in and out directly from the Odoo database. If this is not activated, users must use a
  kiosk to check in and out of work.
- :guilabel:`Device & Location Tracking` :icon:`business`: Activate this feature to record the
  GPS location, IP address, and browser of the device used to check in and out. These details are
  displayed on the :ref:`attendance logs <attendances/check-in-out-details>`.
- :guilabel:`Take Pictures on Check-In` :icon:`business`: Activate this feature to take a
  picture of the employee with the device's camera (if available) when they check in.
- :guilabel:`Break Management on Checkout` :icon:`business`: Activate this feature to allow
  employees to record the total duration of their breaks after checking out. Breaks are deducted
  from the worked hours.
- :guilabel:`Attendance Work Entry Type` :icon:`business`: Select the default :ref:`time type
  <payroll/work-entry-types>` given to attendances. This time type is used by the :doc:`automatic
  rules <attendances/overtime>`, and to compute the employee's pay.

Kiosk settings
--------------

The :guilabel:`Kiosk Settings` section defines how employees are identified at a kiosk. Refer to the
:doc:`kiosk documentation <attendances/kiosks>` for more information.

Overtime
--------

Overtime (extra hours), as well as undertime, is computed by :doc:`automatic rules
<attendances/overtime>`. To configure them, navigate to :menuselection:`Attendances app -->
Configuration --> Automatic Rules`.

The time types used by attendances and automatic rules are configured in :menuselection:`Attendances
app --> Configuration --> Time Types`. Refer to the :ref:`time types documentation
<payroll/work-entry-types>` for more information.

.. note::
   When the **Payroll** app is installed, the pay of an employee can be computed from their
   attendances instead of their working schedule. To do so, enable the :guilabel:`Attendance Based`
   option in the *Schedule* section of the :guilabel:`Payroll` tab of the employee form. Refer to
   the :doc:`worked time documentation <payroll/work_entries>` for more information.

.. seealso::
   - :doc:`attendances/check_in_check_out`
   - :doc:`attendances/kiosks`
   - :doc:`attendances/biotime_integration`
   - :doc:`attendances/attendance_onboarding`
   - :doc:`attendances/management`
   - :doc:`attendances/attendance_logs`
   - :doc:`attendances/overtime`
   - :doc:`attendances/hardware`
   - :doc:`attendances/attendance_reporting`
   - :doc:`attendances/time_off_ledger`

.. toctree::
   :titlesonly:

   attendances/check_in_check_out
   attendances/kiosks
   attendances/biotime_integration
   attendances/attendance_onboarding
   attendances/management
   attendances/attendance_logs
   attendances/overtime
   attendances/hardware
   attendances/attendance_reporting
   attendances/time_off_ledger
