==================
Just in time logic
==================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

*Just-in-time logic* in Odoo minimizes storage costs by placing orders precisely to meet deadlines.
This is achieved using the :ref:`forecasted date <inventory/warehouses_storage/forecasted-date>`,
which determines when replenishment is necessary to avoid overstocking. For example, for a product
with a 5-day total lead time and a sales order delivery date in 10 days, Odoo waits 5 days to place
the order, ensuring it arrives just in time for delivery.

The forecasted date is the **earliest possible date** to receive a product if the replenishment
process starts immediately. It is calculated by summing the lead times linked to the replenishment
process, such as :ref:`vendor lead times <inventory/warehouses_storage/purchase-lt>` and
:ref:`purchasing delays <inventory/warehouses_storage/purchase-security-lt>` for purchases, or
:ref:`manufacturing lead times <inventory/warehouses_storage/manuf-lt>` for production. This works
with both automatic and manual reordering rules.

.. tip::
  If utilizing just-in-time logic feels risky, consider adding buffer time or :doc:`adjusting lead
  times <lead_times>` for more flexibility. While lead times and just-in-time logic provide
  additional control, reordering rules work perfectly fine without them. Keeping delivery dates on
  |SOs| as their *creation date* ensures purchases are immediately triggered when needed.

.. _inventory/warehouses_storage/forecasted-date:

Forecasted date and to order quantity
=====================================

The *forecasted date* is the earliest receipt date for a product, if it is ordered right now. It is
calculated by summing the lead times linked to the product's replenishment process. The total of
these lead times, added to the current date, determines when Odoo checks for demanded stock.

To view the forecasted date go to :menuselection:`Inventory app --> Operations --> Replenishment` to
access the :doc:`replenishment report <report>`, then click the :icon:`fa-info-circle`
:guilabel:`(info)` icon for the desired reordering rule. The :guilabel:`Replenishment Information`
pop-up window displays the :guilabel:`Forecasted Date` and various lead times.

The just-in-time logic ensures replenishment occurs only when required to meet forecasted demand,
reducing the risk of overstocking.

.. note::
   Just-in-time logic determines the exact timing of replenishment. If you want to extend this logic
   to also consider near-future demand beyond the forecast date, see :ref:`Horizon Days
   <inventory/warehouses_storage/horizon-days>`

If the forecasted quantity falls below the minimum on the forecasted date, replenishment is
triggered immediately to prevent shortages. If the quantity falls below the minimum after the
forecasted date, replenishment is deferred.

The :guilabel:`To Order` quantity is defined as the total demand on the forecasted date.

By scheduling purchase orders according to combined lead times, Odoo minimizes inventory while
ensuring that future demand is met on time.

.. example::
   A manual reordering rule is set up with no minimum or maximum quantities.

   - Vendor lead time is 4 days, and the days to purchase is 2 days.
   - Today's date is October 2.
   - These add up to 6 days, making the forecasted date, October 8.

   A confirmed |SO| for 5 units has a delivery date of October 8th (6 days from today). This demand
   will appear on the replenishment report today, in the :guilabel:`To Order` field.

   However, if the delivery date were later than October 8th, it would not yet appear on the report.
   Odoo only displays quantities to replenish when they fall within the forecasted date window,
   ensuring orders are placed precisely when needed.

   .. image:: just_in_time/replenishment-info.png
      :alt: Show forecasted date in Odoo.

.. important::
  |SOs| scheduled after the :guilabel:`Forecasted Date` are not included in the :guilabel:`Forecast`
  quantities of a reordering rule. However, they do appear in the forecasted report, since it
  reflects the long-term forecasted quantity. To access the forecasted report, click
  :icon:`fa-area-chart` :guilabel:`(area chart)` icon on the replenishment report.

.. seealso::
   - :doc:`Reordering Rules <reordering_rules>`
   - :doc:`Replenishment Report <report>`
   - :doc:`Lead Times <lead_times>`
