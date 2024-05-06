============
Work entries
============

Work entries are created automatically in the *Payroll* app, based on the employee's :ref:`salary
structure type <payroll/structure-types>`, and from the *Planning*, *Attendances*, and *Time Off*
applications.

The *Work Entries* dashboard of the *Payroll* application provides a visual overview of the
individual work entries for every employee.

To open the dashboard, navigate to :menuselection:`Payroll app --> Work Entries --> Work Entries`.

On the :guilabel:`Work Entry` dashboard, work entries appear in alphabetical order, based on the
first name of the employees. The entire month is displayed, with the current day highlighted in pale
yellow.

If any entries have :ref:`conflicts <payroll/conflicts>` that need to be resolved, the dashboard
defaults to filter only the :guilabel:`Conflicting` entries.

To remove the filter from the :guilabel:`Search...` bar to view all work entries, click the
:guilabel:`✖️ (remove)` icon on the :guilabel:`Conflicting` filter in the :guilabel:`Search...` bar,
and all work entries appear in the list.

.. image:: work_entries/work-entries-overview.png
   :align: center
   :alt: Conflicts dashboard view showing all employee's conflicts in work entries.

.. _payroll/adjust-view:

To change the view, so only the entries for a single day, week, or month are shown, click on
:guilabel:`Month`. A drop-down menu appears with the options of :guilabel:`Day`, :guilabel:`Week`,
or :guilabel:`Month`. Click on one of the options to only display data for that specific selection.

Use the :guilabel:`⬅️ (left arrow)` and :guilabel:`➡️ (right arrow)` icons on the left and right
side of the :guilabel:`Month` button to adjust the displayed dates. The arrows adjust the date based
on the type of time selected.

For example, if :guilabel:`Month` is selected, the arrows move one month with each click of the
arrow. If :guilabel:`Week` or :guilabel:`Day` is selected, the time moves by either a week or a day
for each click of the arrow, respectively.

At any point, to return to a view containing the current day, click the :guilabel:`Today` button.

.. _payroll/new-work-entry:

Add a new work entry
====================

If a work entry is missing and needs to be added, such as sick time, or if an employee forgot to
clock in and out for a shift, click :guilabel:`New` on the :guilabel:`Work Entry` dashboard, to
create a new work entry.

A :guilabel:`Create` work entry pop-up form appears.

Enter the following information on the form:

- :guilabel:`Description`: enter a short description for the work entry, such as `Sick Time`. If
  this field is left blank, it automatically populates once an employee is selected. The default
  entry is `Attendance: (Employee)`.
- :guilabel:`Employee`: select the employee the work entry is for, using the drop-down menu.
- :guilabel:`Work Entry Type`: select the :ref:`work entry type <payroll/work-entries-config>` using
  the drop-down menu.
- :guilabel:`From` and :guilabel:`To`: enter the start (:guilabel:`From`) and end (:guilabel:`To`)
  dates and times for the work entry.

  First, click on either the :guilabel:`From` or :guilabel:`To` line to reveal a calendar pop-up
  window. Select the date by navigating to the correct month and year, using the :guilabel:`< (left
  arrow)` and :guilabel:`> (right arrow)` icons, then click on the specific day.

  Next, select the time, by clicking on either the hour or minute fields at the bottom of the
  calendar, and select the desired time for both the hour and minutes.

  When the date and time are correct for the entry, click the :guilabel:`Apply` button.
- :guilabel:`Duration`: displays the hours based on the :guilabel:`To` and :guilabel:`From` entries.
  Modifying this field modifies the :guilabel:`To` field (the :guilabel:`From` field does not
  change).

Once the desired information is entered, click :guilabel:`Save & Close` to save the entry, and close
the pop-up form.

.. image:: work_entries/create.png
   :align: center
   :alt: Filling in the work entry Create form in Odoo.

.. _payroll/conflicts:

Conflicts
=========

A conflict appears for any request that has not been approved, such as sick time or vacation, or if
there are any errors on the work entry, such as required fields being left blank. Conflicts are
required to be resolved before payslips can be generated.

Any work entry that has a conflict to be resolved is indicated on the main :guilabel:`Work Entry`
dashboard, which can be accessed by navigating to :menuselection:`Payroll app --> Work Entries -->
Work Entries`. Only conflicts needing resolution are shown by default.

Conflicts are indicated with an orange triangle in the top-left corner of each individual work
entry. Click on an individual work entry to see the date and time for the specific work entry, then
click :guilabel:`Edit` to view the conflict details in a pop-up window.

.. image:: work_entries/conflict-pop-up.png
   :align: center
   :alt: A row of conflicts, with one entry showing details for the conflict.

The conflict is briefly explained in an orange text box in the :guilabel:`Open` pop-up window that
appears.

The :guilabel:`Description`, :guilabel:`Employee`, and :guilabel:`Work Entry Type` are listed on
the left side of the pop-up window. The :guilabel:`From` and :guilabel:`To` date and time range, as
well as the total time (in hours) in the :guilabel:`Duration` field, appears on the right side.

If the conflict is due to a time off request that has not been approved yet, a :guilabel:`Time Off`
field appears on the left side, with the type of time off requested in the description.

.. image:: work_entries/conflict-details.png
   :align: center
   :alt: The detailed conflict pop-up window that appears when Edit is clicked.

Time off conflicts
------------------

The most common work entry conflicts are for time off requests that have been submitted, but not yet
approved, which results in duplicate work entries for that employee (one for time off and another
for regular work).

If there is a conflict because a time off request is in the system for the same time that a regular
work entry already exists, the time off request is entered in the :guilabel:`Time Off` field.

The time off conflict can be resolved either on the work entry pop-up window, or on a detailed time
off request pop-up window.

Resolve on work entry
~~~~~~~~~~~~~~~~~~~~~

To resolve the time off conflict on this work entry pop-up window, click the :guilabel:`Approve Time
Off` button to approve the time off request, and resolve the work entry conflict.

The :guilabel:`Approve Time Off` and :guilabel:`Refuse Time Off` buttons disappear. Click the
:guilabel:`Save & Close` button to close the pop-up window. The conflict disappears from the
:guilabel:`Work Entry` dashboard, since the conflict is resolved.

Resolve on time off request
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To resolve the time off conflict on the detailed time off request pop-up window, click the
:guilabel:`Internal Link` button at the end of the :guilabel:`Time Off` entry line, and the time off
request details appear in a new pop-up window. The request can be modified, if needed.

Click the :guilabel:`Approve` button to approve the request, then click the :guilabel:`Save & Close`
button to save the changes, and go back to the work entry conflict pop-up window.

.. image:: work_entries/time-off-details.png
   :align: center
   :alt: The detailed time off request form.

Now, the :guilabel:`Approve Time Off` button is hidden, only the :guilabel:`Refuse Time Off` button
is visible.

If the approval was a mistake, the request can be refused here, by clicking the :guilabel:`Refuse
Time Off` button.

Since the time off was approved in the time off window, click the :guilabel:`X` in the top-right
corner to close the window. The conflict disappears from the :guilabel:`Work Entry` dashboard, since
it has been resolved.

.. _payroll/regenerate-work-entries:

Regenerate work entries
=======================

When regenerating work entries, any manual changes, such as resolved conflicts, are overwritten,
and work entries are regenerated (or recreated) from the applications that created them.

This method for correcting a large amount of conflicts is recommended to keep all records correct.
While :ref:`conflicts <payroll/conflicts>` *can* be resolved individually, if the conflicts are
caused from another application, it is best practice to ensure the records in the other applications
are also correct. That is why it is recommended to resolve these conflicts in the applications that
created the conflict.

Another reason this method is recommended is because, when work entries are regenerated, the
conflicts reappear, if the issue in the related application is **not** resolved.

First, ensure the issues are resolved in the specific applications that caused the work entry
conflicts.

Next, click the :guilabel:`Regenerate Work Entries` button at the top of the :guilabel:`Work
Entries` dashboard, and a :guilabel:`Work Entry Regeneration` pop-up window appears.

Select the :guilabel:`Employees` to regenerate work entries for from the drop-down menu, and adjust
the :guilabel:`From` and :guilabel:`To` fields, so the correct date range is displayed.

Click the :guilabel:`Regenerate Work Entries` button, and the work entries are recreated. Once
finished, the pop-up window closes.

.. image:: work_entries/regenerate-details.png
   :align: center
   :alt: Regenerate a work entry for a particular employee.

.. example::
   An employee has incorrect work entries generated from the *Planning* app because they were
   incorrectly assigned to two work stations simultaneously. This should be fixed in the *Planning*
   app, instead of the *Payroll* app.

   To correct this issue, modify the employee's schedule in the *Planning* app, so they are
   correctly assigned to only one work station. Then, in the *Payroll* app, regenerate work entries
   for that employee, for that specific time period.

   The *Payroll* app then pulls the new, corrected data form the *Planning* app, and recreates the
   correct work entries for that employee. All conflicts for that employee are now resolved.

Generating payslips
===================

To generate payslips, :ref:`navigate to the time period <payroll/adjust-view>` the payslips should
be generated for. Ensure the :guilabel:`Conflicting` filter is removed. When the desired pay period
is displayed, click the :guilabel:`Generate Payslips` button.

.. tip::
   If the :guilabel:`Generate Payslips` button is not active (appears pale purple, instead of dark
   purple), that indicates there are conflicts, or the date selected includes dates in the future.
   Resolve all conflicts before generating payslips.

When the :guilabel:`Generate Payslips` button is clicked, a batch entry appears on a separate page
for the time period selected.

The batch name populates the :guilabel:`Batch Name` field in a default `From (date) to (date)`
format.

The date range to which the payslips apply appears in the :guilabel:`Period` field, and the company
appears in the :guilabel:`Company` field. It is **not** possible to make changes to this form.

Click the :guilabel:`Create Draft Entry` button to create the payslips for the batch.

Click the :guilabel:`Payslips` smart button at the top of the page to view all the payslips for the
batch.

.. image:: work_entries/generate-payslips.png
   :align: center
   :alt: Information that appears when generating payslips.

Printing payslips
-----------------

To print payslips, first view the individual payslips by clicking the :guilabel:`Payslips` smart
button on the batch form.

Next, select the payslips to print from the :guilabel:`Payslips` list. Click the box next to each
payslip to print, or click the box to the left of the :guilabel:`Reference` column title, to select
all the payslips in the list at once.

Click the :guilabel:`Print` button, and a PDF file is created with all the specified payslips.

.. image:: work_entries/print-payslips.png
   :align: center
   :alt: Print button for printing the payslips.

.. note::
   The :guilabel:`Print` button does **not** appear until at least one payslip is selected in the
   list.

Time off to report
==================

If a time off request is submitted for a time period that was already processed on a payslip, the
time off request appears in the *Time Off* page in the *Payroll* app, which is accessible by
navigating to :menuselection:`Payroll app --> Work Entries --> Time Off to Report`.

On the :guilabel:`Time Off` page, the request appears with a status of :guilabel:`To defer to next
payslip`. This is because the employee was already paid for that day, and it was logged as time
spent at work, as a typical work day.

In order to keep the employee's time off balances correct, the time off request **must** be applied
to the following pay period. This not only ensures time off request balances are current, it also
eliminates the need to redo work entries, cancel paychecks, and reissue paychecks.

The most common scenario when this situation occurs, is when payslips are processed a day or two
before the pay period ends, and an employee is unexpectedly sick on one of the last days of the pay
period. The employee puts in a time off request for a day that was already processed on a payslip as
a regular work day. Instead of canceling the payslip, modifying the work entries, and reissuing the
paycheck, Odoo allows for those time off requests to be applied to the following pay period,
instead.

To view all the time off requests that need to be deferred to the next payslip, navigate to
:menuselection:`Payroll app --> Work Entries --> Time Off to Report`. The default filter for this
report is :guilabel:`To Defer`.

All time off requests that need to be applied to the following pay period appear with a
:guilabel:`Payslip State` of :guilabel:`To defer to next payslip`.

.. image:: work_entries/time-off-to-report.png
   :align: center
   :alt: A list of all time off requests that were not approved before payslips were generated.

Defer multiple time off entries
-------------------------------

To select the work entries to defer, click the box to the left of the work entry line. To select all
work entries in the list, click the box to the left of the :guilabel:`Employees` column title, at
the top of the list.

Once any work entry is selected, two buttons appear at the top of the report: a :guilabel:`(#)
Selected` button, and an :guilabel:`Actions` button. The :guilabel:`(#) Selected` button indicates
how many entries are currently selected.

When all the desired work entries are selected, click the :guilabel:`Actions` button, and a menu
appears with several choices. Click :guilabel:`Defer to Next Month` in the list, and all selected
entries are deferred to the following month.

.. image:: work_entries/batch-defer.png
   :align: center
   :alt: The actions button and # Selected buttons that appear after any selections are made.

Defer individual time off entries
---------------------------------

Time off requests appearing on the :guilabel:`Time Off to Report` list can be deferred individually.

Click on an individual time off request, and the details for that request load.

The specific details for the time off request appear on the left-hand side, and all of the
employee's submitted time off requests appear on the right-hand side (including the request in the
details on the left-hand side).

To defer the time off request to the next payslip, click the :guilabel:`Report to Next Month` button
at the top. Once processed, the :guilabel:`Report to Next Month` button disappears, and the
:guilabel:`Payslip State` changes from :guilabel:`To defer to next payslip` to :guilabel:`Computed
in Current Payslip`.

To go back to the :guilabel:`Time Off to Report` list, click on :guilabel:`Time Off` in the
breadcrumb menu.

.. image:: work_entries/single-defer.png
   :align: center
   :alt: The time off details for an individual request that needs to be deferred.

.. seealso::
   :ref:`Configure work entries <payroll/work-entries-config>`
