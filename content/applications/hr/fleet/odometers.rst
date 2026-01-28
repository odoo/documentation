========================
Odometer analysis report
========================

The **Fleet** app allows for analysis of all odometer readings logged in the system.

.. _fleet/total-costs:

Total odometer readings
=======================

To view the *Odometer Analysis* report, navigate to :menuselection:`Fleet app --> Reporting -->
Odometers`. The default report shows a line chart of the changes in odometer values, grouped by
month, then vehicle category.

.. example::
   In this report, it is possible to determine that June had the highest total costs, with almost
   $14,000 dollars in contract and repair costs, while January had the lowest costs, with less than
   $2,000 of contract costs and no repairs.


.. _fleet/by-vehicle:

Total odometer values
=====================

To view the total odometer value for all vehicles in the fleet, open the :guilabel:`Odometer
Analysis` report by navigating to :menuselection:`Fleet app --> Reporting --> Odometers`. Click on
the :guilabel:`Measures` button, and select :guilabel:`Odometer Value` from the drop-down menu.

This presents all the odometer values, grouped by month and category. This allows companies to learn
which vehicle type logs the most miles, and is therefore on the road or in use the most.

.. example::
   In this report, it can be determined that the delivery vehicles (the blue line in the graph)
   drives the most miles each month, almost double the other vehicles. The repair vehicles and
   employee vehicles drive a comparable amount of miles each month, with  employee vehicles logging
   slightly more miles in the last month.

     .. image:: odometers/odometer-total.png
        :alt: The odometer report showing total odometer values, by month and category.

To view these metrics, open the default :ref:`cost analysis report <fleet/total-costs>`. Next, click
into the search bar, and click :guilabel:`Vehicle` under the :icon:`oi-group` :guilabel:`Group By`
column.

.. example::
   From this report, it can be determined the `Toyota Corolla` with the license plate `STU-1718`
   cost the most, with almost $14,000 in costs for the year. Additionally, the both `Nissan Micro`
   vehicles and the `Ford Focus` cost the least, with under $5,000 in total costs each.
