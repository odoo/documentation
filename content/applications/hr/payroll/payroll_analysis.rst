================
Payroll analysis
================

The *Payroll Analysis* report displays the total net wage for the company, for the last 365 days.
This report allows companies to view their payroll costs and identify any trends.

To view the *Payroll Analysis* report, navigate to :menuselection:`Payroll app --> Reporting -->
Payroll`.

:guilabel:`Net Wage` is the default metric displayed in the report, but other measures can be
displayed if desired, such as *gross wage* or *days of paid time off*. Click the
:guilabel:`Measures` :icon:`fa-caret-down` button to view a drop-down menu of other metrics to
display. Click on the desired measure to display the results.

.. image:: payroll_analysis/payroll-report.png
   :alt: Payroll overview report showing payroll for the last 365 days.

.. _payroll_analysis/multiple:

View multiple metrics
=====================

It is possible to view multiple metrics at one time by viewing the report in the *pivot table* view.
This can aid management to determine other trends, such as which departments do not take time off,
or which departments have the highest payroll costs.

.. note::
   **Only one** measure is able to be displayed in the default :icon:`fa-area-chart`
   :guilabel:`Graph` view. Multiple measures are **only** possible in the :icon:`oi-view-pivot`
   :guilabel:`Pivot` view.

To display the data in a pivot table, click on the :icon:`oi-view-pivot` :guilabel:`Pivot` button.

The default information displayed includes the number of payslips (:guilabel:`# Payslip`), the
number of :guilabel:`Days of Paid Time Off` and :guilabel:`Days of Unpaid Time Off`, along with the
:guilabel:`Net Wage` and :guilabel:`Gross Wage`. All the information is organized by department.

To display more information on the report, click the :guilabel:`Measures` :icon:`fa-caret-down`
button to reveal a drop-down menu. Click on any metric to display it on the pivot table.

.. image:: payroll_analysis/pivot.png
   :alt: Pivot table view with the various metrics on display.

Use case: comparing payroll costs
=================================

Managers can compare payroll costs, and determine which departments have raised their payroll costs,
either by hiring more employees, or by raising salaries.

To compare previous periods of time, first view the *Payroll Analysis* report in a :ref:`pivot table
<payroll_analysis/multiple>`. Then, click the :icon:`fa-caret-down` :guilabel:`(Toggle Search
Panel)` icon in the search bar, and click  :guilabel:`Start Date` :icon:`fa-caret-down` to reveal a
list of time periods (months, quarters, and years). Click on a desired time period, and a
:icon:`fa-adjust` :guilabel:`Comparison` section appears in the search bar. Click on one of the two
available options, either :guilabel:`Start Date: Previous Period`, or :guilabel:`Start Date:
Previous Year`.

The report now displays three columns of information for every displayed measure: a column for the
current time period, a column for the previous time period, and a :guilabel:`Variation` column,
which displays the difference between the two time periods in a color-coded percentage (green for
increases, red for decreases.)

.. example::
   In this example, the data shows an overall increase in the number of payslips. Since the company
   pays all employees every two weeks, an increase in the number of payslips (:guilabel:`#
   Payslips`) means that more employees were hired, in this example, a 500% increase.

   Additionally, both the :guilabel:`Net Wage` and :guilabel:`Gross Wage` increased. The department
   :guilabel:`RD US` showed the largest growth, with both metrics increasing by approximately 350%.

   .. image:: payroll_analysis/comparison.png
      :alt: Pivot table view comparing two years of data.

.. seealso::
   :doc:`../../essentials/reporting`
