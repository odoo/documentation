================
Time off entries
================

Odoo automatically generates timesheet entries on projects and tasks once a time off request is
approved. This streamlines timesheet validation by ensuring approved time off is accurately
reflected in timesheets.

.. _timesheets/config:

Configuration
=============

First, activate the :ref:`developer mode <developer-mode>`, then open the **Timesheets** app, and
navigate to :menuselection:`Configuration --> Settings`. Scroll to the :guilabel:`Time Off` section
and enable the :guilabel:`Time Off` checkbox. Enabling this option creates timesheet entries for
validated time off requests and public holidays.

Once enabled, two fields appear: :guilabel:`Project` and :guilabel:`Task`. The default selection
for :guilabel:`Project` is :guilabel:`Internal`, and the default selection for :guilabel:`Task` is
:guilabel:`Time Off`. These inform Odoo where to log the time off requests, which project, and task.
These can be modified, if desired, using the drop-down menu.

.. note::
   The available options presented vary based on the installed applications.

.. tip::
   Time off categories without validation requirements create timesheet records instantly. Requests
   requiring validation creates timesheet entries *after* the time off request is approved.

   To check if a time off type requires approval, check the :guilabel:`Approvals` section of the
   :ref:`time off type form <time_off/time-off-requests>`.

Workflow
========

Once the employee has :doc:`requested time off <../../hr/time_off/request_time_off>`, and the
request has been validated, if necessary, the time is automatically logged on the **Timesheets**
app, under the respective project and task.

To view the logged entry, open the **Timesheets** app and navigate to the relevant time period. The
time off appears in the corresponding field, according to the :ref:`configuration
<timesheets/config>`.

To view the timesheet entry details, click the :icon:`fa-search` :guilabel:`(magnifying glass)` icon
that appears when hovering over the entry, and the detailed timesheet information appears.

.. example::
   An employee is attending internal training the week of December 15-19, 2025, and logs their time
   in the **Timesheets** app under the `Internal` project, with a task of `Training`. On December
   19, 2025, the employee is home sick, and requests the day off in the **Time Off** app.

   The time off type they request is *Sick Time off*, which is configured to **not** require
   validation. The employee's time off request is automatically approved, and is logged in the
   **Timesheets** app, under the `Internal` project, and the `Time Off` task.

   .. image:: time_off/timesheet-sick-time.png
      :alt: A timecard reflecting training hours and sick time off.
