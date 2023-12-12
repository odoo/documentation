============================
Take a Picture quality check
============================

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`
.. |QCP| replace:: :abbr:`QCP (Quality Control Point)`
.. |QCPs| replace:: :abbr:`QCP (Quality Control Points)`

In Odoo *Quality*, a *Take a Picture* check is one of the quality check types that can be selected
when creating a new quality check or quality control point (QCP). *Take a Picture* checks require a
picture to be attached to the check, which can then be reviewed by a quality team.

Create a Take a Picture quality check
=====================================

There are two distinct ways that *Take a Picture* quality checks can be created. A single check can
be manually created. Alternatively, a |QCP| can be configured that automatically creates checks at a
predetermined interval.

This documentation only details the configuration options that are unique to *Take a Picture*
quality checks and |QCPs|. For a full overview of all the configuration options available when
creating a single check or a |QCP|, see the documentation on :ref:`quality checks
<quality/quality_management/quality-checks>` and :ref:`quality control points
<quality/quality_management/quality-control-points>`.

Quality check
-------------

To create a single *Take a Picture* quality check, navigate to :menuselection:`Quality --> Quality
Control --> Quality Checks`, and click :guilabel:`New`. Fill out the new quality check form as
follows:

- In the :guilabel:`Type` drop-down field, select the :guilabel:`Take a Picture` quality check type.
- In the :guilabel:`Team` drop-down field, select the quality team responsible for managing the
  check.
- In the :guilabel:`Instructions` text field of the :guilabel:`Notes` tab, enter instructions for
  how the picture should be taken.

.. image:: picture_check/picture-check-form.png
   :align: center
   :alt: A quality check form configured for a Take a Picture quality check.

Quality control point
---------------------

To create a |QCP| that generates *Take a Picture* quality checks automatically, navigate to
:menuselection:`Quality --> Quality Control --> Control Points`, and click :guilabel:`New`. Fill out
the new |QCP| form as follows:

- In the :guilabel:`Type` drop-down field, select the :guilabel:`Take a Picture` quality check type.
- If the *Maintenance* app is installed, a :guilabel:`Device` field appears after selecting the
  *Take a Picture* check type. Use this field to specify a device that should be used to take
  quality check pictures. For information about managing devices in the *Maintenance* app, see the
  documentation on :ref:`adding new equipment <maintenance/equipment_management/add_new_equipment>`.
- In the :guilabel:`Team` drop-down field, select the quality team responsible for managing the
  checks created by the |QCP|.
- In the :guilabel:`Instructions` text field, enter instructions for how the picture should be
  taken.

.. image:: picture_check/picture-qcp-form.png
   :align: center
   :alt: A Quality Control Point (QCP) form configured to create a Take a Picture quality check.

Process a Take a Picture quality check
======================================

Once created, there are multiple ways that *Take a Picture* quality checks can be processed. If a
quality check is assigned to a specific inventory, manufacturing, or work order, the check can be
processed on the order itself. Alternatively, a check can be processed from the check's page.

From the check's page
---------------------

To process a *Take a Picture* quality check from the check's page, begin by navigating to
:menuselection:`Quality --> Quality Control --> Quality Checks`, and then select a quality check.
Follow the :guilabel:`Instructions` for how to take the picture.

After taking the picture, make sure it is stored on the device being used to process the quality
check (computer, tablet, etc.). Then, click the :guilabel:`✏️ (pencil)` button in the
:guilabel:`Picture` section to open the device's file manager. In the file manager, navigate to the
picture, select it, and click :guilabel:`Open` to attach it.

.. image:: picture_check/picture-edit-button.png
   :align: center
   :alt: The edit button (pencil) on a Take a Picture quality check.

On an order
-----------

To process a *Take a Picture* quality check on an order, select a manufacturing order or inventory
order (receipt, delivery, return, etc.), for which a check is required. Manufacturing orders can be
selected by navigating to :menuselection:`Manufacturing --> Operations --> Manufacturing Orders`,
and clicking on an order. Inventory orders can be selected by navigating to
:menuselection:`Inventory`, clicking the :guilabel:`# To Process` button on an operation card, and
selecting an order.

On the selected manufacturing or inventory order, a purple :guilabel:`Quality Checks` button appears
at the top of the page. Click the button to open the :guilabel:`Quality Check` pop-up window, which
shows all of the quality checks required for that order.

Follow the instructions detailing how to take the picture, which are shown on the :guilabel:`Quality
Check` pop-up window. After taking the picture, make sure it is stored on the device being used to
process the quality check (computer, tablet, etc.).

Then, click the :guilabel:`Take a Picture` button in the :guilabel:`Picture` section to open the
device's file manager. In the file manager, navigate to the picture, select it, and click
:guilabel:`Open` to attach it. Finally, click :guilabel:`Validate` on the :guilabel:`Quality Check`
pop-up window to complete the quality check.

.. image:: picture_check/picture-check-pop-up.png
   :align: center
   :alt: A Take a Picture quality check pop-up window on a manufacturing or inventory order.

If a quality alert must be created, click the :guilabel:`Quality Alert` button that appears at the
top of the manufacturing or inventory order after the check is validated. Clicking
:guilabel:`Quality Alert` opens a quality alert form on a new page. For a complete guide on how to
fill out quality alert forms, view the documentation on :ref:`quality alerts
<quality/quality_management/quality-alerts>`.

On a work order
---------------

When configuring a |QCP| that is triggered during manufacturing, a specific work order can also be
specified in the :guilabel:`Work Order Operation` field on the |QCP| form. If a work order is
specified, a *Take a Picture* quality check is created for that specific work order, rather than the
manufacturing order as a whole.

*Take a Picture* quality checks configured for work orders **must** be completed from the *Shop
Floor* module. To do so, begin by navigating to :menuselection:`Manufacturing --> Operations -->
Manufacturing Orders`. Then, select an |MO| that includes a work order for which a *Take a Picture*
quality check is required.

On the |MO|, select the :guilabel:`Work Orders` tab, and then click the :guilabel:`Open Work Order
(external link icon)` button on the line of the work order to be processed. On the resulting
:guilabel:`Work Orders` pop-up window, click the :guilabel:`Open Shop Floor` button to open the
*Shop Floor* module.

When accessed from a specific work order, the *Shop Floor* module opens to the page for the work
center where the order is configured to be processed, and isolates the work order's card, so no
other cards are shown.

Process the work order's steps until the *Take a Picture* quality check step is reached. Click on
the step to open a pop-up window that includes instructions for how the picture should be taken.
After taking the picture, make sure it is stored on the device being used to process the quality
check (computer, tablet, etc.).

Then, click the :guilabel:`Take a Picture` button on the pop-up window to open the device's file
manager. In the file manager, navigate to the picture, select it, and click :guilabel:`Open` to
attach it.

Finally, click :guilabel:`Validate` at the bottom of the pop-up window to complete the quality
check. The pop-up window then moves on to the next step of the work order.

.. image:: picture_check/picture-check-shop-floor.png
   :align: center
   :alt: A Take a Picture check in the Shop Floor module.

If a quality alert must be created, exit the pop-up window by clicking the :guilabel:`X (close)`
button in the top-right corner.

Then, click the :guilabel:`⋮ (three vertical dots)` button on the bottom-right corner of the work
order card to open the :guilabel:`What do you want to do?` pop-up window.

On the :guilabel:`What do you want to do?` pop-up window, select the :guilabel:`Create a Quality
Alert` button. Doing so opens a blank quality alert form in a new :guilabel:`Quality Alerts` pop-up
window.

.. seealso::
   For a complete guide on how to fill out quality alert forms, view the documentation on
   :doc:`quality alerts <../quality_management/quality_alerts>`.

Review picture attached to quality check
========================================

After a picture has been attached to a check, it can then be reviewed by quality team members or
other users. To do so, navigate to :menuselection:`Quality --> Quality Control --> Quality Checks`,
and select a quality check to review.

The attached picture appears in the :guilabel:`Picture` section of the quality check form. After
reviewing the picture, click the :guilabel:`Pass` button if the check passes, or the
:guilabel:`Fail` button if the check fails.

.. image:: picture_check/review-picture-check.png
   :align: center
   :alt: A Take a Picture check with a picture attached.
