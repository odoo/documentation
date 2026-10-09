====================
Replenishment report
====================

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

The *replenishment report* is an interactive dashboard that uses :doc:`manual reordering rules
<reordering_rules>`, lead times, and upcoming demands to forecast quantities of products that need
restocking.

Reordering rules used on this dashboard are normal reordering rules, but the user benefits from a
monitoring menu with extra options to manage suggestions for replenishment.

This enables users to anticipate future needs, keep less products on hand without the risk of
running out, plan and consolidate orders.

Navigate the replenishment report
=================================

To access the replenishment report, go to :menuselection:`Inventory app --> Operations -->
Replenishment.`

.. note::
   Automatic reordering rules are available on this menu as well, but are hidden by default.

The fields and features unique to the replenishment dashboard are displayed below. For definitions
of the other fields, go to the :ref:`Create reordering rules section
<inventory/warehouses_storage/rr-fields>`.

By default, the quantity in the :guilabel:`To Order` field is the quantity required to reach the set
:guilabel:`Max Quantity`. However, the :guilabel:`To Order` quantity can be adjusted by clicking on
the field and changing the value. To replenish a product manually, click :icon:`fa-truck`
:guilabel:`Order`.

Click :icon:`fa-bell-slash` :guilabel:`Snooze` to temporarily deactivate the reordering rule for the
set period, hiding the entry from the replenishment dashboard, when it is supposed to appear.

.. tip::
   Defining a :guilabel:`Vendor` allows filtering or grouping demands by the vendor. This simplifies
   the process of identifying products to order and can reduce shipment costs. Click the
   :icon:`oi-settings-adjust` :guilabel:`(adjust settings)` icon and select :guilabel:`Vendor` from
   the drop-down list to view the field on the report.

.. image:: report/replenishment-dashboard.png
   :alt: Replenishment report that displays recommended quantities to order.

Order to max
------------

If a reordering rule does not forecast the product to arrive below the minimum, the replenishment
cannot be triggered, because it is seen as *unnecessary*. However, there can be instances where a
product needs to be replenished even if it is not deemed *necessary*, such as when an order needs to
be maximized to obtain better discounts, or to save on delivery costs.

First, select one or more products by selecting the appropriate checkbox. Then, click
:guilabel:`Order`. Doing so creates a request for quotation (RFQ) for the first possible
replenishment date for each product for the maximum specified in the reordering rule.

.. image:: report/order-to-max.png
   :alt: Create orders for products on the replenishment dashboard.

.. _inventory/warehouses_storage/horizon-days:

Horizon days
------------

*Horizon days* determine how many days ahead Odoo checks if the forecasted quantity will drop below
reordering rule's minimum. The feature is meant to help users plan replenishment in advance, by
increasing the :ref:`forecasted date <inventory/warehouses_storage/forecasted-date>` on the
:doc:`replenishment report <report>`. Horizon days look ahead a specified number of days and trigger
reordering rules as soon as the forecasted quantity falls below the minimum within that window, even
if no replenishment is needed today.

.. example::
   Setting horizon days to `7` ensures all manual reordering rules set to trigger within the next
   seven days appear on the replenishment report, allowing users to review and decide which products
   to order in advance.

To set horizon days, go to :menuselection:`Inventory app --> Operations --> Replenishment`, and
click :icon:`oi-panel-right` :icon:`fa-folder` :guilabel:`Manual` in the left sidebar. In the
menu that appears, set the number of :guilabel:`Horizon` days.

.. example::
   - Current date: October 2
   - On hand quantity: 10
   - Reordering rule: Min: 5, Max 10
   - Vendor lead time: 1 day

   8 units are needed for an |SO| on October 8. That means, on October 8, there will only be 2 units
   in stock.

   **Without horizon days**

   - The demand appears on the replenishment report only on Feb 22, one day before the delivery
     date.
   - Forecasted date: Feb 19 (current date + vendor lead time)

   **With horizon days (4 or more days)**

   - Odoo considers demand up to Feb 23 as relevant today (Feb 18)
   - The need for 8 more units appears immediately in the replenishment report
   - Forecasted date: Feb 23 (current date + vendor lead time + horizon days)

   .. image:: report/horizon-days.png
      :alt: Show forecasted date brought forward.

Recalculate minimum and maximum based on order history
------------------------------------------------------

Use the *Suggest* button to update reordering rules based on previous order history.

On the *Replenishment* report, select at least one product whose reordering rules should be
recalculated. Click :guilabel:`Suggest` at the top of the screen.

The *Suggest Min-Max* pop-up window opens. In this window, specify the time frame that Odoo should
use to calculate the minimum and maximum. This can be a period of time (for example, the past 7
days), the current month, a previous month, or a previous quarter. Click :guilabel:`Update`.

.. image:: report/suggest-min-max.png
   :alt: The minimum and maximum will be computed based on daily demands from the last three months.

The minimum and maximum order amount is updated for each selected product.

Replenishment information
=========================

In each line of the replenishment report, clicking the :icon:`fa-info-circle`
:guilabel:`(Replenishment Information)` icon opens the *Replenishment Information* pop-up window,
which displays the *replenishment time* and *forecasted date*.

Odoo also suggests a minimum and maximum order amount based on a specified period of time and a
percentage that should be purchased (e.g., a 25% sales increase is expected, so the percentage is
set to `125`%). The minimum (:guilabel:`Min`) quantity should be covered for the specified amount of
:guilabel:`days`. The maximum (:guilabel:`Max`) shows the forecasted stock level when replenishing,
along with the replenishment frequency, or number of days between replenishment requests.

.. image:: report/replenishment-information.png
   :alt: The replenishment time (15 days) and suggested minimum and maximum order amount are listed.

For detailed information on how to use this feature for replenishment, go to the :doc:`just-in-time
<just_in_time>` section.

Select a warehouse
------------------

If a warehouse's replenishment method is :doc:`resupply from another warehouse
<resupply_warehouses>`, check for available product quantities in other warehouses by opening the
*Replenishment Information* pop-up window. Warehouses that can replenish the stock are listed under
the *Warehouses* tab, and the :guilabel:`Available Quantity` shows the on-hand stock in each
warehouse.

After selecting a sourcing warehouse, click :guilabel:`Select Route`. When :guilabel:`Order` is
clicked, the reordering rule will revert to its preferred route (Buy or Manufacture), and a transfer
is created for the inter-warehouse move.

.. image:: report/select-warehouse.png
   :alt: The warehouse tab on the Replenishment Information pop-up window.

.. seealso::
   :ref:`Temporary Reordering Rules <purchase/check-replenishment>`
