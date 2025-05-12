====================
Attendance reporting
====================

The **Attendances** app report helps managers find attendance issues with employees before they
become a problem. The report can give insights on trends by determining :ref:`which employees are
working more overtime <attendances/overtime>`, and who is :ref:`not working their full shifts
<attendances/absent>`.

View report
===========

To view the attendance report, click :guilabel:`Reporting` in the top menu. The default report
displays attendance information for current employees over the past three months, in a default
:icon:`oi-view-pivot` :guilabel:`Pivot table`. The rows are populated by employee, while the columns
are populated by the various attendance records. All entries are grouped by month.

The columns presented are:

- :guilabel:`Worked Hours`: The total logged time the employee worked for the month.
- :guilabel:`Expected Hours`: The number of hours the employee should have worked for the month,
  calculated from their :ref:`working schedule <employees/schedule>`, configured on their employee
  form.
- :guilabel:`Difference`: The difference from the :guilabel:`Expected Hours` and the
  :guilabel:`Worked Hours` for the employee that month.
- :guilabel:`Balance`: The difference between the *approved* overtime, and the *total* overtime
  worked.

To present different information, adjust the :ref:`filters and groups <attendances/filters-groups>`
in the same way as in the :guilabel:`Overview` dashboard.

.. image:: attendance_ reporting/reporting.png
   :alt: The default report view, with all the optional view buttons highlighted.

.. _attendances/overtime:

Use case: monthly overtime
==========================

Overtime affects a company's bottom line, as most companies budget for employee salaries. When
salaries exceed the expected amount, companies may see a rise in overhead costs when salary budgets
are exceeded. This is why the attendance report is needed, to ensure no excessive overtime is
logged.

To view a specific month's overtime, by employee, click :guilabel:`Reporting` in the top menu of the
**Attendances** app. Remove the default :icon:`oi-group` :guilabel:`Date: Month > Employee` grouping
in the search bar. Click the :icon:`fa-caret-down` :guilabel:`(Toggle Search Panel)` icon at the end
of the search bar, then click :icon:`fa-caret-down` :guilabel:`Date`, and click the desired month.

Next, click the :guilabel:`Measures` :icon:`fa-caret-down` button in the upper-left corner, and
deselect :guilabel:`Expected Hours` and :guilabel:`Worked Hours`. This presents the
:guilabel:`Difference` and :guilabel:`Balance` attendance data for the selected month, grouped by
employee.

The :guilabel:`Difference` shows the month's total overtime logged, and the :guilabel:`Balance`
shows the portion still unapproved. Click the :guilabel:`Difference` column to sort by the amount of
overtime. The highest positive number is the most overtime logged for that month.

.. example::
   In the below example, a total of 38 hours and 53 minutes of overtime was approved for the month
   of April. :guilabel:`Michael Williams` has the most overtime, with 10 hours and 25 minutes
   logged. Of that overtime, only 25 minutes was unapproved, for a total of ten paid overtime hours.

   .. image:: attendance_ reporting/overtime.png
      :alt: The attendances report, showing only overtime for the month of April.

.. _attendances/absent:

Use case: absenteeism
=====================

Employees with a negative :guilabel:`Difference` indicate that they have not worked their expected
shifts. This can be from forgetting to log in and out of work, or for working less hours than
expected, without any approved time off.

To view the attendance data for the last three months, to identify any trends, first open the
**Attendances** app report. Next, click the :guilabel:`Measures` :icon:`fa-caret-down` button in the
upper-left corner, and ensure  **only** :guilabel:`Difference` is selected.

Next, reset the row data by clicking :icon:`fa-minus-square-o` :guilabel:`Total` at the top of the
rows. Then click :icon:`fa-plus-square` :guilabel:`Total` and select :guilabel:`Employee`. Click the
:guilabel:`Difference` column name to sort by the total difference in logged hours from the expected
hours.

The employee who worked the least has the highest negative balance. Click on any of the numbers for
the employee to view the detailed individual attendance records.

.. example::
   In the below example, the company has only been opened for two months, so data is only available
   for the last two months, even though the filter :guilabel:`Last 3 Months` is active.

   From this report, it is determined that :guilabel:`Abigail Peterson` worked the least amount of
   hours over the past two months, working 25 hours less than was expected.

   .. image:: attendance_ reporting/absentee.png
      :alt: The attendance report showing the highest absences for the last two months.
