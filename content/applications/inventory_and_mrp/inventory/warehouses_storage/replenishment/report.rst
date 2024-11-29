====================
Replenishment report
====================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

The *replenishment report* is an interactive dashboard that uses :doc:`reordering rules
<reordering_rules>`, lead times, and upcoming demands to forecast quantities of products that need
restocking.

This enables users to anticipate future needs, keep less products on hand without the risk of
running out, plan and consolidate orders.

This document details more hidden aspects of the replenishment report, such as:

- :ref:`Forecasted date <inventory/warehouses_storage/just-in-time>`: how many days into the future
  Odoo considers demands to determine the forecasted quantities
- :ref:`Visibility days <inventory/product_management/visibility-days>`: additional feature that
  allow businesses to optimize reordering rules by strategically grouping purchase orders for
  upcoming needs

.. seealso::
   :ref:`More information about the other fields <inventory/warehouses_storage/rr-fields>`

.. _inventory/warehouses_storage/just-in-time:

Just in time logic
==================

On the replenishment report (:menuselection:`Inventory app --> Operations --> Replenishment`), the
:guilabel:`Forecast` quantities represent the demand from confirmed sales or manufacturing orders
for a specific date in the future.

This future date, known in Odoo as the **forecasted date**, is calculated by summing the
following lead times:

- :ref:`Vendor Lead Time <inventory/management/purchase-lt>`: Time required by the vendor to deliver
  the products
- :ref:`Purchase Security Lead Time <inventory/management/purchase-security-lt>`: Additional buffer
  time for handling delays
- :ref:`Days to Purchase <inventory/warehouses_storage/days-to-purchase>`: Time needed to process
  and place the order

The total of these lead times, added to the current date, determines the when Odoo checks for
demanded stock.

.. note::
   To view the *forecasted date*, go to the replenishment report and click the
   :icon:`fa-info-circle` :guilabel:`(i)` icon for the desired reordering rule. The
   :guilabel:`Replenishment Information` pop-up window displays the :guilabel:`Forecasted Date` and
   various lead times.

The *just-in-time* logic ensures replenishment only occurs for the forecasted date's demand.

Thus, the **To Order** quantity is the total demand on the forecasted date.

By timing purchase orders based on the combined lead times, Odoo optimizes stock levels, keeping
inventory minimal while ensuring future requirements are ordered at the last possible
moment—strategic procrastination without the stress!

.. example::
   A manual reordering rule is set up with no minimum or maximum quantities.

   - Vendor lead time is 4 days, the purchase security lead time is 1 day, and the days to purchase
     is 2 days
   - Today's date is November 26
   - These add up to 7 days, making the forecasted date, December 3rd

   A confirmed |SO| for 5 units has a delivery date of December 3rd (7 days from today). This demand
   will appear on the replenishment report today, in the **To Order** field.

   .. image:: report/replenishment-info.png
      :alt: Show Forecasted Date on the lead times info page.

   However, if the delivery date were later than December 3rd, it would not yet appear on the
   report. Odoo only displays quantities to replenish when they fall within the forecasted date
   window, ensuring orders are placed precisely when needed.

Common confusion about forecasted quantities
--------------------------------------------

|SOs| due **after** the :guilabel:`Forecasted Date` are not accounted for in the
:guilabel:`Forecast` quantities on the replenishment report.

They are, however, accounted for on the forecasted report that is opened by clicking the
:icon:`fa-area-chart` :guilabel:`(graph)` icon on the replenishment report.

.. example::

   .. figure:: report/zero-forecast.png
      :alt: Forecast and To Order is zero.

      Continuing the above example, when the sales order's deadline is adjusted to December 4th, the
      :guilabel:`Forecast`and :guilabel:`To Order` quantities are zero.

   .. figure:: report/five-forecast.png
      :alt: alt text.

      Opening the :guilabel:`Forecasted Report` shows the :guilabel:`Forecasted` units is `5.00`.

.. _inventory/product_management/visibility-days:

Visibility days
===============

Visibility days in Odoo are additional days to push forward the :ref:`forecasted date
<inventory/warehouses_storage/just-in-time>` by a specified amount of days.

They allow businesses to optimize reordering rules by strategically grouping purchase
orders for upcoming needs. This reduces transport costs and leverages supplier discounts for larger
orders by consolidating quantities required now and in the near future.

.. example::

   A product replenished from Asia has a vendor lead time of 30 days and a combined shipping cost
   (with :doc:`landed costs <../../product_management/inventory_valuation/integrating_landed_costs>`
   and international tariffs included) of $100 because it travels by cargo ship.

   - Today's date is November 4th, so December 4th is 30 days later
   - |SO| 1's delivery date is December 4th, so Odoo plans to replenish these quantities today
   - Placing the order today costs $100.

   .. image:: report/forecasted-date.png
      :alt: Show forecasted date visualization.

   - |SO| 2's delivery date is December 19, so it will be displayed on the replenishment report on
     November 19. Ordering it then will cost an additional $100.
   - |SO| 3 is due to deliver on December 25, and November 25 is the idea day to order it. Ordering
     the quantities for these items separately will total in $300 in shipping costs.

To set visibility days to incorporate orders for a specified number of days in the future, navigate
to :menuselection:`Inventory app --> Operations --> Replenishment`.

Next, enable the :guilabel:`Visibility Days` field by clicking the :guilabel:`(sliders)` icon to the
far right and choosing the feature from the drop-down menu. Then, enter the desired visibility days.

.. example::
   Continuing with the example above, setting the :guilabel:`Visibility Days` to 20 adds an
   additional twenty days to forecast for, allowing even |SO| 3's due date (50 days from 11/4) to be
   considered.

   .. image:: report/visibility-days.png
      :alt: Visibility days visualization

