==========================
Instructions quality check
==========================

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`
.. |QCP| replace:: :abbr:`QCP (Quality Control Point)`

In Odoo *Quality*, an *Instructions* check is one of the quality check types that can be selected
when creating a new quality check or quality control point (QCP). *Instructions* checks consist of a
text entry field that allows the creator to provide instructions for how to complete the check.

For a full overview of how to configure a quality check or a |QCP|, see the documentation on
:ref:`quality checks <quality/quality_management/quality-checks>` and :ref:`quality control points
<quality/quality_management/quality-control-points>`.

Process an Instructions quality check
=====================================

There are multiple ways that *Instructions* quality checks can be processed. If a quality check is
assigned to a specific manufacturing, inventory, or work order, the check can be processed on the
order itself. Alternatively, a check can be processed from the check's page.

Process from the quality check's page
-------------------------------------

To process an *Instructions* quality check from the check's page, begin by navigating to
:menuselection:`Quality --> Quality Control --> Quality Checks`, and select a quality check. Follow
the :guilabel:`Instructions` for how to complete the check.

If the product passes the check, click the :guilabel:`Pass` button above the quality check form. If
the product does not pass the check, click the :guilabel:`Fail` button, instead.

Process quality check on an order
---------------------------------

To process an *Instructions* quality check on an order, select a manufacturing order or inventory
order (receipt, delivery, return, etc.) for which a check is required. Manufacturing orders can be
selected by navigating to :menuselection:`Manufacturing --> Operations --> Manufacturing Orders`,
and clicking on an order. Inventory orders can be selected by navigating to
:menuselection:`Inventory`, clicking the :guilabel:`# To Process` button on an operation card, and
selecting an order.

On the selected manufacturing or inventory order, a purple :guilabel:`Quality Checks` button appears
above the order. Click the button to open the :guilabel:`Quality Check` pop-up window, from which
any quality checks created for the order can be processed.

.. image:: instructions_check/quality-check-pop-up.png
   :align: center
   :alt: The Quality Check pop-up window on a manufacturing or inventory order.

To complete an *Instructions* quality check, follow the instructions detailed in the
:guilabel:`Quality Check` pop-up window. Finally, click :guilabel:`Validate` to confirm that the
check has been completed.

If an issue or defect is found during the quality check, a quality alert may need to be created to
notify a quality team. To do so, click the :guilabel:`Quality Alert` button that appears at the top
of the manufacturing or inventory order after the check is validated.

Clicking :guilabel:`Quality Alert` opens a quality alert form on a new page. For a complete guide on
how to fill out quality alert forms, view the documentation on :ref:`quality alerts
<quality/quality_management/quality-alerts>`.

Process work order quality check
--------------------------------

When configuring a |QCP| that is triggered by a manufacturing order, a specific work order can also
be specified in the :guilabel:`Work Order Operation` field on the |QCP| form. If a work order is
specified, an *Instructions* quality check is created for that specific work order, rather than the
|MO| as a whole.

Quality checks configured for work orders **must** be completed from the *Shop Floor* module. To do
so, begin by navigating to :menuselection:`Manufacturing --> Operations --> Manufacturing Orders`.
Select an |MO| that includes a work order for which an *Instructions* quality check is required.

On the |MO|, select the :guilabel:`Work Orders` tab, and click the :guilabel:`Open Work Order
(square with arrow coming out of it)` button on the line of the work order to be processed. On the
resulting :guilabel:`Work Orders` pop-up window, click the :guilabel:`Open Shop Floor` button to
open the *Shop Floor* module.

When accessed from a specific work order, the *Shop Floor* module opens to the page for the work
center where the order is configured to be processed, and isolates the work order's card so that no
other cards are shown.

Begin processing the work order's steps until the *Instructions* quality check step is reached.
Click on the step to open a pop-up window that details how to complete the quality check. Once
completed, click the :guilabel:`Next` button to complete the check, and move on to the next step.

.. image:: instructions_check/instructions-check-shop-floor.png
   :align: center
   :alt: An Instruction check as it appears in the Shop Floor module.

Alternatively, an *Instructions* quality check can be completed by clicking the checkbox that
appears on the right side of the step's line on the work order card. When using this method, the
quality check automatically passes, without a pop-up window appearing.

.. note::
   For a full guide to the *Shop Floor* module, see the :ref:`Shop Floor overview
   <manufacturing/shop_floor/shop_floor_overview>` documentation.
