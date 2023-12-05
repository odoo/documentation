=========================
Pass - Fail quality check
=========================

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`
.. |QCP| replace:: :abbr:`QCP (Quality Control Point)`
.. |QCPs| replace:: :abbr:`QCP (Quality Control Points)`

In Odoo *Quality*, a *Pass - Fail* check is one of the quality check types that can be selected when
creating a new quality check or quality control point (QCP). *Pass - Fail* checks consist of a text
field that allows the creator to specify a certain criteria that a product must meet to pass the
check.

Create a Pass - Fail quality check
==================================

There are two distinct ways that *Pass - Fail* quality checks can be created. A single check can be
manually created. Alternatively, a |QCP| can be configured that automatically creates checks at a
predetermined interval.

This documentation only details the configuration options that are unique to *Pass - Fail* quality
checks and |QCPs|. For a full overview of all the configuration options available when creating a
single check or a |QCP|, see the documentation on :ref:`quality checks
<quality/quality_management/quality-checks>` and :ref:`quality control points
<quality/quality_management/quality-control-points>`.

Quality check
-------------

To create a single *Pass - Fail* quality check, navigate to :menuselection:`Quality --> Quality
Control --> Quality Checks`, and click :guilabel:`New`. Fill out the new quality check form as
follows:

- In the :guilabel:`Type` drop-down field, select the :guilabel:`Pass - Fail` quality check type.
- In the :guilabel:`Team` drop-down field, select the quality team responsible for managing the
  check.
- In the :guilabel:`Instructions` text field of the :guilabel:`Notes` tab, enter instructions for
  how to complete the quality check and the criteria that must be met for the check to pass.

.. image:: pass_fail_check/quality-check-form.png
   :align: center
   :alt: A quality check form configured for a Pass - Fail quality check.

Quality Control Point (QCP)
---------------------------

To create a |QCP| that generates *Pass - Fail* quality checks automatically, begin by navigating to
:menuselection:`Quality --> Quality Control --> Control Points`, and click :guilabel:`New`. Fill out
the new |QCP| form as follows:

- In the :guilabel:`Type` drop-down field, select the :guilabel:`Pass - Fail` quality check type.
- In the :guilabel:`Team` drop-down field, select the quality team responsible for managing the
  checks created by the |QCP|.
- In the :guilabel:`Instructions` text field, enter instructions for how to complete the quality
  check and the criteria that must be met for the check to pass.

.. image:: pass_fail_check/qcp-form.png
   :align: center
   :alt: A Quality Control Point (QCP) form configured to create a Pass - Fail quality check.

Process a Pass - Fail quality check
===================================

Once created, there are multiple ways that *Measure* quality checks can be processed. If a quality
check is assigned to a specific inventory, manufacturing, or work order, the check can be processed
on the order itself. Alternatively, a check can be processed from the check's page.

From the check's page
---------------------

To process a *Measure* quality check from the check's page, begin by navigating to
:menuselection:`Quality --> Quality Control --> Quality Checks`, and select a quality check. Follow
the :guilabel:`Instructions` for how to complete the check.

If the criteria for the check is met, click the :guilabel:`Pass` button at the top-left corner of
the page. If the criteria is not met, click the :guilabel:`Fail` button.

On an order
-----------

To process a *Pass - Fail* quality check on an order, select a manufacturing order or inventory
order (receipt, delivery, return, etc.), for which a check is required. Manufacturing orders can be
selected by navigating to :menuselection:`Manufacturing --> Operations --> Manufacturing Orders`,
and clicking on an order. Inventory orders can be selected by navigating to
:menuselection:`Inventory`, clicking the :guilabel:`# To Process` button on an operation card, and
selecting an order.

On the selected manufacturing or inventory order, a purple :guilabel:`Quality Checks` button appears
at the top of the order. Click the button to open the :guilabel:`Quality Check` pop-up window, which
shows all of the quality checks required for that order.

To process a *Pass - Fail* quality check, follow the instructions shown on the :guilabel:`Quality
Check` pop-up window. If the criteria for the check is met, click the :guilabel:`Pass` button at the
bottom of the window. If the criteria is not met, click the :guilabel:`Fail` button.

.. image:: pass_fail_check/pass-fail-check-pop-up.png
   :align: center
   :alt: A Pass - Fail quality check pop-up window on a manufacturing or inventory order.

If a quality alert must be created, click the :guilabel:`Quality Alert` button that appears at the
top of the manufacturing or inventory order after the check fails. Clicking :guilabel:`Quality
Alert` opens a quality alert form on a new page.

.. seealso::
   For a complete guide on how to fill out quality alert forms, view the documentation on
   :ref:`quality alerts <quality/quality_management/quality-alerts>`.

On a work order
---------------

When configuring a |QCP| that is triggered during manufacturing, a specific work order can also be
specified in the :guilabel:`Work Order Operation` field on the |QCP| form. If a work order is
specified, a *Pass - Fail* quality check is created for that specific work order, rather than the
manufacturing order as a whole.

*Pass - Fail* quality checks configured for work orders **must** be completed from the *Shop Floor*
module. To do so, begin by navigating to :menuselection:`Manufacturing --> Operations -->
Manufacturing Orders`. Select an |MO| that includes a work order for which a *Pass - Fail* quality
check is required.

On the |MO|, select the :guilabel:`Work Orders` tab, and then click the :guilabel:`Open Work Order
(external link icon)` button on the line of the work order to be processed. On the resulting
:guilabel:`Work Orders` pop-up window, click the :guilabel:`Open Shop Floor` button to open the
*Shop Floor* module.

When accessed from a specific work order, the *Shop Floor* module opens to the page for the work
center where the order is configured to be processed, and isolates the work order's card so that no
other cards are shown.

Begin processing the work order's steps until the *Pass - Fail* quality check step is reached. Click
on the step to open a pop-up window that details the criteria for whether the check passes or fails.
Click the :guilabel:`Pass` button at the bottom of the pop-up window if the check passes, or the
:guilabel:`Fail` button if it fails.

If the :guilabel:`Pass` button is clicked, the pop-up window moves to the next step for the work
order. If the :guilabel:`Fail` button is clicked, a :guilabel:`Quality Check Failed` pop-up window
appears, detailing what should be done next.

.. image:: pass_fail_check/pass-fail-check-shop-floor.png
   :align: center
   :alt: A Pass - Fail check as it appears in the Shop Floor module.

.. tip::
   Alternatively, instead of clicking on the step to open the pop-up window, a *Pass - Fail* quality
   check can be completed by clicking the checkbox that appears on the right side of the step's line
   on the work order card. When using this method, the quality check passes automatically, without a
   pop-up window appearing.
