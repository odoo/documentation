=========
Reporting
=========

The **Time Off** app's reporting feature allows managers to view time off for their team, either by
employee, type of time off, or by time off balances. This allows managers to see :ref:`which
employees are taking time off and how much <time_off/by_employee>`, :ref:`what time off types are
being used <time_off/by_type>`, and :ref:`how much time each employee has used, and still has
available <time_off/balance>`.

Any report can be added to a spreadsheet, when in either the :icon:`fa-area-chart`
:guilabel:`(Graph)` or :icon:`oi-view-pivot` :guilabel:`(Pivot)` view, through the *Insert in
Spreadsheet* button that appears in the top-left of a report.

.. note::
   If the **Documents** app is installed, an option to add the report to a spreadsheet appears. If
   not, the report can be added to a *Dashboard*.

.. _time_off/by_employee:

By employee
===========

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

.. image:: reporting/employee-report.png
   :alt: Report of time off, shown by each employee in a list view.

The report can be displayed in other ways, as well. Click the corresponding button option in the
top-right corner of the page to view the data in that specific way. The various options are a
:icon:`oi-view-list` :guilabel:`(List)`, or default view, :icon:`fa-area-chart` :guilabel:`(Graph)`,
:icon:`oi-view-pivot` :guilabel:`(Pivot)` table, or :icon:`fa-calendar` :guilabel:`(Calendar)` view.

When a selection has been made, additional options appear for that particular selection. For more
detailed information on the reports and their various options, refer to the :doc:`reporting
<../../essentials/reporting>` documentation.

.. _time_off/by_type:

By type
=======

To view a graph of all time off, organized by time off type, navigate to :menuselection:`Time Off
app --> Reporting --> by Type`. This shows all time off requests in a default bar chart.

Hover over a bar to view the :guilabel:`Duration (Days)` of that specific time off type.

.. image:: reporting/bar-chart.png
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
<../../essentials/reporting>` documentation.

.. _time_off/balance:

Balance
=======

To view a pivot table of all time off balances, organized by time off type, then further organized
by how many days and hours are :guilabel:`Left` and :guilabel:`Planned`, navigate to
:menuselection:`Time Off app --> Reporting --> Balance`.

This shows all time off balances in a default pivot table. The employees populate the rows, while
the various time off types and balances populate the columns.

.. image:: reporting/balance.png
   :alt: The various time off balances, in a pivot table.
