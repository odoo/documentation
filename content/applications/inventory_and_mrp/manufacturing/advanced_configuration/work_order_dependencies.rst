=======================
Work order dependencies
=======================

.. |BOM| replace:: :abbr:`BoM (Bill of Materials)`

When manufacturing certain products, specific operations may need to be completed before others can
begin. To ensure operations are carried out in the correct order, the **Manufacturing** app features
a *work order dependencies* setting. Enabling this setting blocks the bill of materials (BoM)
operations when other operations should occur first.

Configuration
=============

The *work order dependencies* setting is not enabled by default. To enable it, begin by navigating
to :menuselection:`Manufacturing app --> Configuration --> Settings`. Then, enable the
:guilabel:`Work Orders` setting if it is not already active.

After enabling the :guilabel:`Work Orders` setting, the :guilabel:`Work Order Dependencies` setting
appears below it. Enable :guilabel:`Work Order Dependencies`, then click :guilabel:`Save` to confirm
the changes.

Add dependencies to BoM
=======================

Work order dependencies are configured on a product's |BOM|. To do so, navigate to
:menuselection:`Manufacturing app --> Products --> Bills of Materials`, then select a |BOM|, or
create a new one by clicking :guilabel:`New`.

On the |BOM|, open the *Miscellaneous* tab, then select the :guilabel:`Operation Dependencies`
checkbox. The :guilabel:`Blocked By` option becomes available under the :icon:`oi-settings-adjust`
:guilabel:`(settings)` menu of the *Operations* tab.

.. image:: work_order_dependencies/operation-dependencies.png
   :alt: The Operation Dependencies checkbox on the Miscellaneous tab of a BoM.

Open the *Operations* tab. Click the :icon:`oi-settings-adjust` :guilabel:`(settings)` icon, then
enable the :guilabel:`Blocked By` checkbox. The :guilabel:`Blocked By` field appears for each
operation in the tab.

.. image:: work_order_dependencies/operations-settings.png
   :alt: The settings for the Operations tab on a BoM.

In the line of the operation that should be blocked by another operation, click the
:guilabel:`Blocked By` field. The *Open: Operations* pop-up window opens. In the :guilabel:`Blocked
By` field, select the blocking operation that must be completed *before* the operation that is
blocked.

.. image:: work_order_dependencies/blocked-by.png
   :alt: The Blocked By drop-down field for an operation on a BoM.

Finally, save the |BOM| by clicking :icon:`fa-cloud-upload` :guilabel:`(Save manually)`.

.. seealso::
   :doc:`../basic_setup/bill_configuration`

Plan work orders using dependencies
===================================

After work order dependencies are configured for a |BOM|, the *Manufacturing* app can plan work
order schedules based on those dependencies. To plan the work orders for a manufacturing order,
navigate to :menuselection:`Manufacturing app --> Operations --> Manufacturing Orders`.

Next, select a manufacturing order for a product with work order dependencies set on its |BOM|, or
create a new manufacturing order by clicking :guilabel:`New`. If a new manufacturing order is
created, select a |BOM| configured with work order dependencies from the :guilabel:`Bill of
Material` drop-down field, then click :guilabel:`Confirm`.

After confirming the manufacturing order, open the :guilabel:`Work Orders` tab to view the work
orders required to complete it. Any work orders that are *not* blocked by a different work order
display a :guilabel:`Ready` tag in the *Status* column.

Work orders that are blocked by other work orders display a :guilabel:`Waiting for another WO` tag
instead. After the blocking work orders are completed, the tag updates to :guilabel:`Ready`.

.. image:: work_order_dependencies/work-order-status.png
   :alt: The status tags for work orders on a manufacturing order.

To schedule the manufacturing order's work orders, click the :guilabel:`Plan` button at the top of
the page. After doing so, the :guilabel:`Start` field for each work order on the *Work Orders* tab
populates with a scheduled start date and time. A blocked work order is scheduled at the end of the
time period specified in the :guilabel:`Expected Duration` field of the work order that precedes it.

.. image:: work_order_dependencies/scheduled-start-date.png
   :alt: The Start field for work orders on a manufacturing order.

.. example::
   A manufacturing order is created for Product A. The manufacturing order has two operations: Cut
   and Assemble. Each operation has an expected duration of 60 minutes, and the Assemble operation
   is blocked by the Cut operation.

   The :guilabel:`Plan` button for the manufacturing order is clicked at 1:30 pm, and the Cut
   operation is scheduled to begin immediately. Since the Cut operation has an expected duration of
   60 minutes, the Assemble operation is scheduled to begin at 2:30 pm.

Planning views
--------------

Two work order planning views are available to display a visual representation of how work orders
are planned:

- :menuselection:`Manufacturing app --> Planning --> Planning by Production`
- :menuselection:`Manufacturing app --> Planning --> Planning by Workcenter`

Both open a *Work Orders Planning* page. This page shows a timeline of all the work orders scheduled
for each operation.

:guilabel:`Planning by Production` is best used to view work orders grouped by manufacturing order.
This view is ideal for providing estimated delivery times or determining if an order will be
completed on schedule.

:guilabel:`Planning by Workcenter` is best used to view work orders grouped by the work center at
which they take place. This view can help identify overloaded machines or bottlenecks in production.

In both views, if one work order is blocked by the completion of another, the work order that is
blocked is shown as scheduled to start after the work order that blocks it. In addition, a grey
arrow connects the two work orders, leading from the blocking operation to the blocked operation.

.. image:: work_order_dependencies/planning-arrow.png
   :alt: The arrow connecting a blocked work order to the work order blocking it.

Resolving inconsistencies
~~~~~~~~~~~~~~~~~~~~~~~~~

The arrows on the *Work Orders Planning* page can also point out inconsistencies in the
manufacturing order and how to correct them. When the arrow changes color, an inconsistency has been
introduced.

.. example::
   A workshop is manufacturing a table in three work orders:

   #. Assemble
   #. Apply finish
   #. Dry

   If the third work order is moved before the second work order, the third work order and the arrow
   pointing to it turn red to indicate that the planned schedule violates the defined work order
   dependency.

   .. image:: work_order_dependencies/out-of-order.png
      :alt: A red line appears between two work orders.

Inconsistencies can be resolved in three ways:

- :ref:`manufacturing/advanced_configuration/edit-wo-schedule`
- :ref:`manufacturing/advanced_configuration/use-icons`
- :ref:`manufacturing/advanced_configuration/in-mo`

.. _manufacturing/advanced_configuration/edit-wo-schedule:

Editing the work order schedule
*******************************

To resolve the scheduling conflict and keep the dependency, select the red work order. Click the
:guilabel:`Edit` button, and the *Open* window appears. Click the red
:icon:`fa-exclamation-triangle` :guilabel:`(exclamation triangle)` icon next to the :guilabel:`Start
Date`, and the *Scheduling Information* pop-up window appears.

.. image:: work_order_dependencies/replan-work-order.png
   :alt: Click the Replan button to reschedule the inconsistent work order.

Click the :guilabel:`Replan` button, then click :guilabel:`Save & Close` to save the changes to the
work order. The work order is rescheduled after the previous work order in a way that maintains the
work order dependency.

.. _manufacturing/advanced_configuration/use-icons:

Using icons on the line
***********************

When hovering over the connecting line, three icons appear. The left and right arrows can be used to
reschedule work orders to help maintain the correct work order dependencies.

.. image:: work_order_dependencies/three-icons.png
   :alt: A left arrow, X, and right arrow appear on the line for out-of-order work orders.

- **Left arrow**: The work order is scheduled to be performed earlier than its linked step.
- **Cancel button**: When clicking this button, Odoo assumes the dependencies no longer apply due to
  an exception, and the link between the steps is broken. To remove the dependency, hover over the
  connecting line. Click the **X** (cancel) button that appears, and the arrow between the two work
  orders disappears.
- **Right arrow**: The work order is scheduled to be performed later than its linked step.

.. _manufacturing/advanced_configuration/in-mo:

In the manufacturing order
**************************

Problems with scheduled work orders are visible in the *Work Orders* tab of the manufacturing order.
Problems are indicated by the red :icon:`fa-exclamation-triangle` :guilabel:`(exclamation triangle)`
icon on the work order line.

.. image:: work_order_dependencies/mo-scheduling-problem.png
   :alt: A scheduling problem shows in the second operation in a group of three work orders.

Click the red :icon:`fa-exclamation-triangle` :guilabel:`(exclamation triangle)` icon, then click
:guilabel:`Replan` in the *Scheduling Information* pop-up window. The work order is rescheduled to
maintain its dependencies.
