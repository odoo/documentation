===========
Offboarding
===========

When an employee leaves the company, it is important to ensure their employee record is updated to
reflect their departure, log the reason why, close any open activities associated with the
employee, and provide them with any important documents.

Archive an employee
===================

In Odoo, when an employee leaves the company they must be *archived*. To archive an employee, first
navigate to the :menuselection:`Employees app`. From here, locate the employee who is leaving the
company, and click on their employee card.

The employee form loads, displaying all their information. Click the :icon:`fa-gear`
:guilabel:`(gear)` icon in the top-left corner, and a drop-down menu appears. Click
:icon:`oi-archive` :guilabel:`Archive`, and an :guilabel:`Employee Termination` pop-up window
appears.

Fill out the following fields on the form:

- :guilabel:`Departure Reason`: Select a reason the employee is leaving from the drop-down menu. The
  default options are:

  - :guilabel:`Fired`: Select this option when an employee is being let go, and the company has
    given notice.
  - :guilabel:`Resigned`: Select this option when the employee no longer wishes to be employed, and
    the employee has given notice.
  - :guilabel:`Retired`: Select this option when the employee is retiring.
  - :guilabel:`Became Freelance`: Select this option when the employee is no longer working for the
    company, but is becoming a freelance worker instead.

- :guilabel:`Contract End Date`: Using the calendar selector, select the last day the employee is
  working for the company.
- :guilabel:`Detailed Reason`: Enter a short description for the employee's departure in this field.
- :guilabel:`Close Activities`: Tick the checkbox next to each type of activity to close or delete
  any open activities associated with it. It is recommended to tick **all** checkboxes that are
  applicable. The available options are:

  - :guilabel:`Appraisals`: cancels all appraisals scheduled after the contract end date.
  - :guilabel:`Contract`: applies an end date for the current contract.
  - :guilabel:`Company Car`: removes the employee as the driver for their current company car, and
    :ref:`assigns the next driver <fleet/new_vehicle/new-driver>`, if applicable.
  - :guilabel:`Time Off`: cancels any time off requests after the contract end date.
  - :guilabel:`Allocations`: removes the employee from any accrual plans they are on.

- :guilabel:`HR Info`: Tick the checkbox next to :guilabel:`Send Access Link` to send a download
  link to the employee's personal email address, containing all their personal HR files.
- :guilabel:`Private Email`: This field appears if the :guilabel:`HR Info` checkbox is ticked. Enter
  the private email address for the employee.

When the form is complete, click :guilabel:`Apply`. The employee record is archived, an email with a
download link to their personal documents is sent to the employee's private email address (if
selected), and a red :guilabel:`Archived` banner appears in the top-right corner of the employee
form. The chatter logs the :guilabel:`Departure Date` and :guilabel:`Departure Reason`, and if an
access link was emailed.

.. image:: offboarding/termination.png
   :align: center
   :alt: The employee termination form with all fields filled out.

.. note::
   While attempting to send the HR documents access link, an :guilabel:`Invalid Operation` pop-up
   window may appear, displaying the following error message:

   :guilabel:`Employee's related user and private email must be set to use "Send Access Link"
   function: (Employee Name)`

   If this error appears, click :guilabel:`Close` to close the pop-up window, then tick the
   :guilabel:`Send Access Link` checkbox to deselect it on the :guilabel:`Employee Termination`
   pop-up window.

   Click :guilabel:`Apply` to archive the employee and close the selected activities on the
   :guilabel:`Employee Termination` pop-up window, returning to the employee form.

   Once the employee form, ensure the following fields are populated:

   - :guilabel:`Private Information` tab: Ensure an email address is entered in the
     :guilabel:`Email` field.
   - :guilabel:`HR Settings` tab: Ensure a :guilabel:`Related User` is selected in the corresponding
     field.

   After the necessary information is entered, :ref:`resend the HR documents access link
   <employees/send-link>`

.. _employees/send-link:

Send HR documents access link
-----------------------------

If the access link was not sent when first archiving the employee on the *Employee Termination*
form, it can be sent after the employee is archived at any point.

After an employee is archived, they are no longer visible on the main **Employees** app dashboard.
To view the archived employees, navigate to the :menuselection:`Employees app` dashboard, and click
the :icon:`fa-caret-down` :guilabel:`(down arrow)` in the search bar to reveal a drop-down menu.
Select :guilabel:`Archived`, towards the bottom of the :icon:`fa-filter` :guilabel:`Filters` column,
then click away from the drop-down window to close it.

Now, only archived employees appear on the dashboard. Click on the desired employee to open their
employee form. On this form, click the :icon:`fa-gear` :guilabel:`(gear)` icon in the top-left
corner, then click :guilabel:`Send HR Documents Access Link` from the resulting drop-down menu. The
chatter logs that the link was sent.
