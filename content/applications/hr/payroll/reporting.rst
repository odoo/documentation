=========
Reporting
=========

The *Reporting* section of the *Payroll* app offers a variety of reports to choose from, organized
by location.

The *Payroll* report, *Work Entry Analysis* report, and *Salary Attachment Report* are default
reports in the *Payroll* app, and are available for all companies, regardless of location.

Beneath the three default reports are all localization-based reports, organized by country, in
alphabetical order. These reports contain all the various information for the offered benefits and
local tax laws.

To view all the available reports for the database, including all the localization-specific ones,
navigate to :menuselection:`Payroll app --> Reporting` to view the available reports in a drop-down
menu. Click on a specific report to view it.

.. image:: reporting/reports.png
   :align: center
   :alt: Report dashboard view showing extra reports for Belgium databases.

If a report is unavailable to a user, an :guilabel:`Invalid Operation` pop-up window appears,
stating: :guilabel:`You must be logged in to a (country) company to use this feature`, where
"(country)" is the specific country the company is configured for.

Default reports
===============

Work entry analysis
-------------------

The default :guilabel:`Work entry analysis` report provides an overview of the validated work
entries for the current month. To view this report, navigate to :menuselection:`Payroll app -->
Reporting --> Work Entry Analysis`.

The work entries appear in a pivot table, with the default filters of `Current month: (Month)(Year)`
and `Validated`. The various types of :doc:`work_entries` are listed on the left-hand side (x-axis),
while the :guilabel:`Total` values appear along the top (the y-axis).

To change the displayed view, click the :guilabel:`➕ (plus)` icon next to the word
:guilabel:`Total`, then click on one of the grouping options. The available options are
:guilabel:`Work Entry Type`, :guilabel:`Employee`, and :guilabel:`Department`. If in a multi-company
database, a :guilabel:`Company` option also appears.

To add a new group to sort the data, click :guilabel:`Add Custom Group`, then click one of the
presented options.

.. tip::
   Wherever a :guilabel:`➕ (plus)` icon appears on a pivot table, the information can be further
   grouped. Click on a :guilabel:`➕ (plus)` icon to reveal the available grouping options.

   Click on a :guilabel:`➖ (minus)` icon anywhere on the pivot table to remove that respective
   grouping.

It is possible to compare the current :guilabel:`Work entry analysis` report to the previous month
or the previous year. To view these comparisons, click the :guilabel:`⬇️ (down arrow)` icon in the
search bar to reveal the various :ref:`filter <payroll/filters>` and grouping options.

In the section titled :guilabel:`Comparison`, click on either :guilabel:`Current Month: Previous
Period` or :guilabel:`Current Month: Previous Year`. The report updates and displays the previous
time period values, as well as the :guilabel:`Variation` between the two.

.. image:: reporting/work-entry-comparison.png
   :align: center
   :alt: A pivot table comparing the work entries of the current month and the previous month.

To export the data in an XLSX format, click the :guilabel:`Download xlsx` button, represented by a
:guilabel:`⬇️ (down arrow above a horizontal bar)` icon, located at the far-right of the available
icons. The information is then downloaded into a spreadsheet.

The data can also be inserted into a spreadsheet. Click the :guilabel:`Insert in Spreadsheet` button
and a :guilabel:`Select a spreadsheet to insert your (type of report)` pop-up window appears, asking
which spreadsheet to place the information in. Select an existing spreadsheet or dashboard, or
select a new :guilabel:`Blank spreadsheet`. Click the :guilabel:`Confirm` button to move to a
spreadsheet view with the report added to it.

.. note::
   The work entry analysis spreadsheet is :ref:`stored in the same locations <payroll/doc-storage>`
   as a pivot table.

Salary attachment report
------------------------

The :guilabel:`Salary Attachment Report` shows all deductions or allocations per employee, such as
child support payments and wage garnishments. To view this report, navigate to
:menuselection:`Payroll app --> Reporting --> Salary Attachment Report`.

.. image:: reporting/attachment-of-salary.png
   :align: center
   :alt: View the Attachment of Salary report that shows all salary garnishments.

The employees are listed in the left-side column, while the different deductions are listed in the
top row, organized by deduction and monthly individual payslips.

The report can be exported as an XLSX file, or inserted into a spreadsheet, using the corresponding
buttons at the top.

Click the :guilabel:`Measures` button to reveal the options of what data can be displayed.
:guilabel:`Assignment of salary`, :guilabel:`Attachment of salary`, :guilabel:`Child support`, and
:guilabel:`Count` can all be selected or deselected by clicking on the item. If an item has a
checkmark next to it, that information is displayed.

.. image:: reporting/attachment-measures.png
   :align: center
   :alt: Select the options to be displayed in the Salary Attachment Report.

The :guilabel:`Salary Attachment Report` can be compared to the report for the previous time period
or the previous year. To view these comparisons, click the :guilabel:`⬇️ (down arrow)` icon in the
search bar to reveal the various :ref:`filter <payroll/filters>` and grouping options.

In the section titled :guilabel:`Comparison`, click on either :guilabel:`Payslip End Date: Previous
Period` or :guilabel:`Payslip End Date: Previous Year`. The report updates and displays the
previous time period values, as well as the :guilabel:`Variation` between the two.

.. _payroll/filters:

Filters
=======

At the top of each report, the default filters are shown inside the :guilabel:`Search...` box.

Click the :guilabel:`⬇️ (down arrow)` icon in the search bar to display the available
:guilabel:`Filters`. Filters show information that match the specific filter parameters.

.. example::
   The :guilabel:`Work Entries Analysis` report has two default filters, the `Current month:(Month)
   (Year)` filter, and the `Validated` filter.

   .. image:: reporting/custom-filter.png
      :align: center
      :alt: Filters enabled for the Work Entries Analysis report.

   The :guilabel:`Payroll` report has only one default filter, the `Last 365 Days Payslip` filter.

   The :guilabel:`Salary Attachment Report` has only one default filter, the `Payslip End Date:
   (Year)` filter.

All reports can include custom filters, or group information, by different metrics (employee,
department, company, etc.).

Some reports have the option to compare the current report to the previous time period or year (a
:guilabel:`Comparison` option).

Click on a parameter to select it and activate it. The report is immediately updated with the new
parameters.

The updated report can be set as a *favorite* report, meaning the parameters are stored for quick
access in the future. To do that, click :guilabel:`Save the current search`, under the
:guilabel:`Favorites` section, located in the search bar drop-down mega menu of filter options.
Doing so reveals two options and a :guilabel:`Save` button.

To set the current report as the default configuration when the report is accessed, check the box
next to :guilabel:`Default filter`. If the current report should be accessible to everyone in the
database, check the box next to :guilabel:`Share`.

Finally, click :guilabel:`Save`, which saves the currently configured report. Then, it appears
beneath the :guilabel:`Favorites` in the search bar drop-down mega menu of filter options.
