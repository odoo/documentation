====================
Cost analysis report
====================

The **Fleet** app allows for analysis on :ref:`total vehicle costs <fleet/total-costs>`, including
both vehicle contract costs and service and repair charges. Data can be adjusted to view total costs
by :ref:`vehicle <fleet/by-vehicle>`, :ref:`driver <fleet/by-driver>`, or :ref:`period
<fleet/by-period>`, to view changes in fleet costs over time.

.. _fleet/total-costs:

Total costs
===========

To view the *Costs Analysis* report, navigate to :menuselection:`Fleet app --> Reporting -->
Costs`. The default report shows a stacked bar chart of service and contract costs for the current
year, organized by month.

.. example::
   In this report, it is possible to determine that January had the highest total costs, with more
   than $21,000 in contract costs, while September had the highest service costs.

   .. image:: cost_analysis/cost-analysis.png
      :alt: The default cost analysis report showing contract and service costs per month.

.. _fleet/by-vehicle:

Cost by vehicle
===============

Some companies want to view costs not by month, but by vehicle. This allows fleet managers to
determine which vehicles cost the most to keep on the road, aiding in decision making for future
purchases and repairs.

To view these metrics, open the default :ref:`cost analysis report <fleet/total-costs>`. Next, click
into the search bar, and click :guilabel:`Vehicle` under the :icon:`stacks_f` :guilabel:`Group By`
column.

.. example::
   From this report, it can be determined the `Toyota Corolla TS` with the license plate `1-MER-001`
   cost the most, with more than $17,000 in costs for the year, while the `Nissan Micra` with the
   license plate `1-ACK-205` cost the least, with about $500 in total costs.

   .. image:: cost_analysis/by-vehicle.png
      :alt: The cost analysis report showing annual costs by vehicle.

.. _fleet/by-driver:

Cost by driver
==============

Another useful metric is to determine which drivers incur the most repair costs, allowing fleet
managers to determine which vehicles to assign which drivers. To view this configuration, open the
default :ref:`cost analysis report <fleet/total-costs>`. Next, click into the search bar, and click
:guilabel:`Driver` under the :icon:`stacks_f` :guilabel:`Group By` column. Finally, click the
:icon:`oi_view-pivot` :guilabel:`(Pivot)` icon.

The report now shows the totals for both :guilabel:`Contract` and :guilabel:`Service` costs for each
driver in the database. This allows fleet managers to see which drivers incur the most repair costs.

.. example::
   This report shows that `Beth Evans` had few service costs for the year, while `Abigail Peterson`
   had $1,000 in repairs. While this does not explain why this driver incurred the most
   costs, it is possible for the fleet manager to :ref:`investigate the service records
   <fleet/view-services>` for this driver, to determine why there were such high costs for the year.

   .. image:: cost_analysis/by-driver.png
      :alt: The cost analysis report showing costs by driver in a pivot table.

.. _fleet/by-period:

Cost by period
==============

To view the evolution of the contract and service costs over the year, open the default :ref:`cost
analysis report <fleet/total-costs>`, then click the :icon:`oi_view-pivot` :guilabel:`(Pivot)` icon.
Click the :guilabel:`Total` row header to collapse it, then click it again to reveal a drop-down
menu. Select :guilabel:`Date` in the :guilabel:`Custom Group` field. The costs are now displayed per
month, with the :guilabel:`Contract` and :guilabel:`Service` costs in separate columns.

To focus on a specific period, click into the search bar and select the desired period (such as
:guilabel:`Q3` or :guilabel:`Q4`) under the :guilabel:`Date` filter in the :icon:`filter_alt_f`
:guilabel:`Filters` column.

.. example::
   In this example, the service costs were the highest in September and October, while the
   contract costs stayed at about $400 per month after January.

   .. image:: cost_analysis/costs-by-month.png
      :alt: A pivot table with the contract and service costs per month.

