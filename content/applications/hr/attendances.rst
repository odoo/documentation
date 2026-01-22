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
by default. Scroll down to the :guilabel:`HUMAN RESOURCES` section to view the settings. For the
:guilabel:`Attendances` field, the options are either to leave the field blank or select
:guilabel:`Administrator`.

If the :guilabel:`Administrator` option is selected, the user has full access to the entire
**Attendances** application, with no restrictions. They can view all employee attendance records,
enter *Kiosk Mode* from the application, access all reporting metrics, and make modifications to the
settings. If left blank, the user does **not** have access to the **Attendances** application.

.. note::
   If a user does **not** have :guilabel:`Administrator` rights for the **Attendances** app, they
   are **not** able to open the app, even though it appears on the main database dashboard. An
   :guilabel:`Access Error` pop-up message appears, stating:

   `You do not have enough rights to access the fields "attendance_manager_id" on Employee
   (hr.employee). Please contact your system administrator.`

   Users who cannot access the **Attendances** app can still :doc:`check in and check out
   <../hr/attendances/check_in_check_out>` of work within the database, using the :icon:`fa-circle`
   :guilabel:`(red circle)` or :icon:`fa-circle` :guilabel:`(green circle)` that are always
   available at the top of the database.

.. _attendances/approvers:

Approvers
---------

An approver is a user assigned to review and manage an employee's attendance records. An approver is
typically a manager, though that is not required. Approvers without administrative rights can access
and modify attendance records **only** for the employees they are assigned to. This is the only
exception where non-admin users can view records in the **Attendances** app.

To view who the attendance approver for an employee is, navigate to the :menuselection:`Employees
application` and click on the specific employee. Click on the :guilabel:`Work Information` tab,
scroll to the :guilabel:`APPROVERS` section, and check the :guilabel:`Attendance` field. The person
selected is able to view that employee's attendance records, both on the **Attendances** application
dashboard as well as in the attendance reports, and make modifications to their records.

Configuration
=============

Few configurations are needed in the **Attendances** app. Determining how employees check in and
out, defining how the kiosks function, and determining how extra hours are computed are all set in
the Configuration menu. Navigate to the :menuselection:`Attendances application --> Configuration`
to access the configuration menu.

.. note::
   Any configuration item with a :icon:`fa-building-o` :guilabel:`(building)` icon is a
   company-specific configuration. Items without an :icon:`fa-building-o` :guilabel:`(building)`
   icon apply to all companies within the database.

.. _attendances/modes:

Modes
-----

- :guilabel:`Attendances from Backend` :icon:`fa-building-o`: Activate this feature to allow users
  to check in and out directly from the Odoo database. If this is not activated, users must use a
  kiosk to check in and out of work.
- :guilabel:`Automatic Check-Out` :icon:`fa-building-o`: Activate this feature to automatically
  check out employees according to their working schedule, after a buffer of time has passed.
- :guilabel:`Tolerance`: This field appears only when the :guilabel:`Automatic Check-Out`
  :icon:`fa-building-o` feature is enabled. Enter the amount of time, in hours, that must elapse
  after an employee's working hours have ended, before they are automatically checked out.

.. example::
   With the :guilabel:`Automatic Check-Out` option enabled, and the :guilabel:`Tolerance` set to
   `2.00` hours, an employee checks in to work at 9:00 AM and forgets to check out at 5:00 PM. At
   7:00 PM, they are automatically checked out.

- :guilabel:`Absence Management` :icon:`fa-building-o`: Activate this feature to log any absences
  that are not associated with a time off request, such as vacation time or sick time, on the
  :doc:`attendance report <attendances/attendance_reporting>`.

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

.. seealso::
   - :doc:`attendances/check_in_check_out`
   - :doc:`attendances/kiosks`
   - :doc:`attendances/management`
   - :doc:`attendances/attendance_logs`
   - :doc:`attendances/hardware`
   - :doc:`attendances/attendance_reporting`

.. toctree::
   :titlesonly:

   attendances/check_in_check_out
   attendances/kiosks
   attendances/management
   attendances/attendance_logs
   attendances/hardware
   attendances/attendance_reporting
