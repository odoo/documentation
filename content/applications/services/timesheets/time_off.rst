==========================================
Create Timesheets upon Time Off Validation
==========================================

Odoo automatically timesheets on project/tasks upon time off requests. This allows for better
overall control over the validation of timesheets, as it does not leave place for forgetfulness
and questions after hours that have not been timesheeted by the employee.

Activate the :ref:`developer mode <developer-mode>`, go to *Timesheets*, and change the *Project*
and *Task* set by default, if you like.

.. image:: time_off/record_time_off.png
   :align: center
   :alt: View of Timesheets setting enabling the feature record time off in Odoo Timesheets

Go to :menuselection:`Time Off --> Configuration --> Time Off Types`. Select or create the
needed type, and decide if you would like the requests to be validated or not.

.. image:: time_off/time_off_types.png
   :align: center
   :alt: View of a time off types form emphasizing the time off requests and timesheets section in
         Odoo Time Off

| Now, once the employee has requested his time off and the request has been validated (or not,
  depending on the setting chosen), the time is automatically allocated on *Timesheets*, under the
  respective project and task.
| On the example below, the user requested *Paid Time off* from July 13th to 15th.

.. image:: time_off/time_off_request.png
   :align: center
   :alt: View of the time off request form in Odoo Time Off

Considering that validation is not required, the requested time off is automatically displayed in
*Timesheets*. If validation is necessary, the time is automatically allocated after the responsible
person for validating does it so.

.. image:: time_off/timesheets.png
   :align: center
   :alt: Video of timesheets emphasizing the requested time off from the employee in Odoo Timesheets

Click on the magnifying glass, hovering over the concerned cell, to access all the aggregated data
on that cell (day), and see details regarding the project/task.

.. image:: time_off/timesheet_description.png
   :align: center
   :alt: View of the details of a project/task in Odoo Timeheets
