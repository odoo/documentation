==================
Just in time logic
==================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

*Just-in-time logic* in Odoo minimizes storage costs by placing orders precisely to meet deadlines.
This is achieved using the :ref:`forecasted date <inventory/warehouses_storage/forecasted-date>`,
which determines when replenishment is necessary to avoid overstocking.

The forecasted date is the **earliest possible date** to receive a product if the replenishment
process starts immediately. It is calculated by summing the lead times linked to the replenishment
process, such as :ref:`vendor lead times <inventory/warehouses_storage/purchase-lt>` and
:ref:`purchasing delays <inventory/warehouses_storage/purchase-security-lt>` for purchases, or
:ref:`manufacturing lead times <inventory/warehouses_storage/manuf-lt>` for production. Both
automatic and manual reordering rules work this way.

.. example::
   For a product with a 5-day total lead time and a sales order delivery date in 10 days, Odoo waits
   5 days to place the order, ensuring it arrives just in time for delivery.

Important considerations:

- **If this feels risky**, consider adding buffer time or :doc:`adjusting lead times <lead_times>`
  for more flexibility.
- While lead times and just-in-time logic provide additional control, **reordering rules work
  perfectly fine without them**. Keeping delivery dates on sales orders as their *creation date*
  ensures purchases are immediately triggered when needed

.. _inventory/warehouses_storage/forecasted-date:

Forecasted date and To Order quantity
-------------------------------------

The *forecasted date* is the earliest receipt date for a product, if it is ordered right now. It is
calculated by summing the lead times linked to the product's replenishment process. The total of
these lead times, added to the current date, determines when Odoo checks for demanded stock.

To view the forecasted date go to the replenishment report and click the :icon:`fa-info-circle`
:guilabel:`(info)` icon for the desired reordering rule. The :guilabel:`Replenishment Information`
pop-up window displays the :guilabel:`Forecasted Date` and various lead times.

.. example::
   A manual reordering rule is set up with no minimum or maximum quantities.

   - Vendor lead time is 4 days, the purchase security lead time is 1 day, and the days to purchase
     is 2 days.
   - Today's date is November 26.
   - These add up to 7 days, making the forecasted date, December 3rd.

   A confirmed |SO| for 5 units has a delivery date of December 3rd (7 days from today). This demand
   will appear on the replenishment report today, in the **To Order** field.

   However, if the delivery date were later than December 3rd, it would not yet appear on the
   report. Odoo only displays quantities to replenish when they fall within the forecasted date
   window, ensuring orders are placed precisely when needed.

   .. image:: just_in_time/replenishment-info.png
      :alt: Show forecasted date in Odoo.

The *just-in-time* logic ensures replenishment happens only when it's necessary for the forecasted
date's demand, helping avoid overstocking.

For example:

- If the forecasted quantity drops below the minimum **on** the forecasted date, replenishment must
  begin immediately to avoid shortages.
- If the quantity drops below the minimum **after** the forecasted date, replenishment can wait.

The **To Order** quantity is the total demand on the forecasted date.

By timing purchase orders based on the combined lead times, Odoo optimizes stock levels, keeping
inventory minimal while ensuring future requirements are ordered at the last possible
moment—strategic procrastination without the stress!

Common confusion about forecasted quantities
--------------------------------------------

|SOs| due **after** the :guilabel:`Forecasted Date` are not accounted for in the
:guilabel:`Forecast` quantities of the reordering rule.

They are, however, accounted for on the forecasted report that is opened by clicking the
:icon:`fa-area-chart` :guilabel:`(graph)` icon on the replenishment report, as this one represents
the **long-term forecasted quantity**.

.. example::

   .. figure:: just_in_time/zero-forecast.png
      :alt: Forecast and To Order quantities is zero.

      Continuing the above example, when the sales order's deadline is adjusted to December 4th, the
      :guilabel:`Forecast` and :guilabel:`To Order` quantities are zero.

   .. figure:: just_in_time/five-forecast.png
      :alt: Show forecasted report.

      Opening the :guilabel:`Forecasted Report` shows the :guilabel:`Forecasted` units is `5.00`.
