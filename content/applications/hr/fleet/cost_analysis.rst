====================
Cost analysis report
====================

The **Fleet** app allows for analysis on :ref:`total vehicle costs <fleet/total-costs>`, including
both contract costs and service and repair charges. Data can be adjusted to view total costs by
:ref:`vehicle <fleet/by-vehicle>` or :ref:`driver <fleet/by-driver>`. Additionally, costs can be
compared with the previous year, quarter, or month, to view changes in fleet costs over time.

.. _fleet/total-costs:

Total costs
===========

To view the *Cost Analysis Report*, navigate to :menuselection:`Fleet app --> Reporting --> Costs`.
The default report shows a bar chart of service and contract costs for the current year, organized
by month.

.. example::
   In this report, it is possible to determine that June had the highest total costs, with almost
   $14,000 dollars in contract and repair costs, while January had the lowest costs, with less than
   $2,000 of contract costs and no repairs.

   .. image:: cost_analysis/cost-analysis.png
      :alt: The default cost analysis report showing contract and service costs.

.. _fleet/by-vehicle:

Cost by vehicle
===============

Some companies want to view costs not by month, but by vehicle. This allows fleet managers to
determine which vehicles cost the most to keep on the road, aiding in decision making for future
purchases and repairs.

To view these metrics, open the default :ref:`cost analysis report <fleet/total-costs>`. Next, click
into the search bar, and click :guilabel:`Vehicle` under the :icon:`oi-group` :guilabel:`Group By`
column.

.. example::
   From this report, it can be determined the `Toyota Corolla` with the license plate `STU-1718`
   cost the most, with almost $14,000 in costs for the year. Additionally, the both `Nissan Micro`
   vehicles and the `Ford Focus` cost the least, with under $5,000 in total costs each.

   .. image:: cost_analysis/by-vehicle.png
      :alt: The cost analysis report showing annual costs by vehicle.

.. _fleet/by-driver:

Cost by driver
==============

Another useful metric is to determine which drivers incur the most repair costs, allowing fleet
managers to determine which vehicles to assign which drivers. To view this configuration, open the
default :ref:`cost analysis report <fleet/total-costs>`. Next, click into the search bar, and click
:guilabel:`Driver` under the :icon:`oi-group` :guilabel:`Group By` column. Finally, click the
:icon:`oi-view-pivot` :guilabel:`(Pivot)` icon.

The report now shows the totals for both :guilabel:`Contract` and :guilabel:`Service` costs for each
driver in the database. This allows fleet managers to see which drivers incur the most repair costs.

.. example::
   This report shows that `Sandra Elvis` had no service costs for the year, while both `Doris Cole`
   and `David Armstrong` had almost $9,000 in repairs. While this does not explain why those two
   drivers incurred the most costs, it is possible for the fleet manager to :ref:`investigate the
   service records <fleet/view-services>` for those two drivers, to determine why there were such
   high costs for the year.

   .. image:: cost_analysis/by-driver.png
      :alt: The cost analysis report showing costs by driver in a pivot table.

Detailed comparison
===================

All reports in the **Fleet** app are able to compare costs from previous time periods, either year,
quarter, or month. To view a detailed cost comparison between the third and fourth quarter, open the
default :ref:`cost analysis report <fleet/total-costs>`, then click the :icon:`oi-view-pivot`
:guilabel:`(Pivot)` icon. Next, click into the search bar and click :guilabel:`Q4` in the
:icon:`fa-filter` :guilabel:`Filters` column, then :guilabel:`Date: Previous Period` in the
:icon:`fa-adjust` :guilabel:`Comparison` column.

The report now shows detailed contract and service costs for each vehicle, with a
:guilabel:`Variation` column, showing increases or decreases in costs from the third and fourth
quarter of the current year.


.. example::
   In this example, it can be determined that the `Ford Focus` had the greatest change in terms of
   lowered total costs, with a 75.25% reduction in costs. Additionally, the `Nissan Micro` with the
   license plate of `DEF-456` was the only vehicle with an overall increase in total costs, with an
   increase of 41.78%.

   .. image:: cost_analysis/detailed-costs.png
      :alt: A pivot table with a detailed cost comparison between the current and previous year.


