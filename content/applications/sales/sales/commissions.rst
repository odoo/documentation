.. meta::
   :description: Enable the Commissions feature in the Odoo Sales app and create commission plans
                 that reward salespeople or sales teams, using either a Linear structure with a
                 single commission rate or a Tiered structure with commission levels based on the
                 percentage of sales targets reached.

===========
Commissions
===========

.. |SOs| replace:: :abbr:`SOs (Sales Orders)`

Commissions are a powerful tool to motivate sales team members. They incentivize performance, boost
productivity, and encourage healthy competition. The *Commissions* feature in Odoo's **Sales**
application provides a way to reward salespeople or sales teams based on their performance. This
feature supports the creation of flexible, measurable commission structures that align with business
goals, whether that means driving revenue, volume, profit, or recurring contracts.

Configuration
=============

To enable the *Commissions* feature, navigate to :menuselection:`Sales app --> Configuration -->
Settings`. Scroll to the :guilabel:`Invoicing` section, and select the :guilabel:`Commissions`
checkbox. Then, click :guilabel:`Save`. Doing so causes a new :guilabel:`Commissions` menu to appear
in the menu bar.

.. _sales/commissions/commission-plan:

Create a commission plan
========================

To create a new commission plan, navigate to :menuselection:`Commissions --> Commission Plans` and
click :guilabel:`New`. The commission plan form can be separated into two parts, :ref:`general
settings <sales/commissions/general-settings>` and settings that are dependent on the type of plan
chosen: :ref:`Linear <sales/commissions/linear>` or :ref:`Tiered <sales/commissions/tiered>`.

.. _sales/commissions/general-settings:

Configure the general settings
------------------------------

To configure the general settings of a commission plan, follow these steps:

#. Enter the name of the plan in the :guilabel:`Commission Plan` field.
#. Select either :ref:`Linear <sales/commissions/linear>` or :ref:`Tiered
   <sales/commissions/tiered>` in the :guilabel:`Structure` drop-down menu to determine how the
   commissions are awarded.

   - :guilabel:`Linear`: Salespeople earn a percentage of their achievement value as commission.
   - :guilabel:`Tiered`: Commissions are awarded based on the percentage of sales.

#. Choose whether the plan applies to a :guilabel:`Salesperson` or an entire :guilabel:`Sales Team`
   in the :guilabel:`per` drop-down menu.
#. Optional: If :guilabel:`Sales Team` is chosen for the :guilabel:`per` field, select which team
   from the :guilabel:`Sale team` drop-down menu.
#. Optional: If :guilabel:`Tiered` is chosen for the :guilabel:`Structure` field, enter a monetary
   value for the :guilabel:`On Target Commission` (OTC) field.
#. Select the beginning and end dates for the :guilabel:`Effective Period` field. The date range
   cannot be more than a year.
#. Select one of the :guilabel:`Target Frequency` drop-down menu options to set how often targets
   reset: :guilabel:`Monthly`, :guilabel:`Quarterly`, or :guilabel:`Yearly`.

   + *Monthly*: Short-term goals with frequent payouts.
   + *Quarterly*: Aligns with business cycles and provides mid-range objectives.
   + *Yearly*: Long-term sales goals for strategic planning.

#. Select a :guilabel:`Dynamic Target` from the drop-down menu. The dynamic target of a salesperson
   is the sum of the targets of their subordinates on the following plans. Leave this field empty to
   specify a static target in the *Targets* tab.

.. _sales/commissions/achievement-metric:

Add achievement rules for the plan
----------------------------------

Performance can be measured in several ways in commission plans. These are configured in the
*Achievements Rules* tab of each plan. It is possible to track achievements by the following:

- :guilabel:`Amount Sold`: The total value of sales orders (SOs).
- :guilabel:`Amount Invoiced`: The total value of confirmed invoices.
- :guilabel:`Amount Paid in Full`: The total value of fully paid invoices based on the date they
  were paid.
- :guilabel:`Quantity Sold`: The total number of units sold via |SOs|.
- :guilabel:`Quantity Invoiced`: The total number of units invoiced.
- :guilabel:`Margin`: The profit margin (selling price minus cost price).
- :guilabel:`MRR`: The *Monthly Recurring Revenue* from subscription sales. This option is **only**
  available if the :doc:`Subscriptions <../../sales/subscriptions>` app is installed.

.. note::
   Regardless of what the :guilabel:`Structure` of a plan is, each plan needs *Achievements Rules*
   configured.

To add an achievement rule, follow these steps:

1. Click the :guilabel:`Add a new achievement` link.
#. Select an option for the :guilabel:`Type` column from the drop-down menu.
#. Optional: If the achievement rule is for an individual product, select a product for the
   :guilabel:`Product` column from the drop-down menu.
#. Optional: If the achievement rule is for a category, select a product for the
   :guilabel:`Category` column from the drop-menu
#. Enter a value for the :guilabel:`Rate` column.

To remove an achievement rule, click the :icon:`delete` :guilabel:`(delete)` icon.

.. image:: commissions/new-commission-plan.png
   :alt: A new commission plan detail form.

.. _sales/commissions/periods:

Configure the periods and targets
---------------------------------

The *Periods* tab populates based on the selection of the :guilabel:`Target Frequency` field. This
tab is also dependent on the type of :guilabel:`Structure` chosen for the commission plan.

When creating a *Linear*-based plan, the :guilabel:`From`, :guilabel:`To`, and :guilabel:`Target`
columns in the tab are disabled by default. To enable them, click the :icon:`tune`
:guilabel:`(filter)` icon and select the preferred options in the drop-down menu.

When creating a *Tiered*-based plan, the tab changes to *Targets* and the :guilabel:`Target` column
is enabled by default.

To enter a target value for a :guilabel:`Period`, click on the field in the :guilabel:`Target`
column and enter the monetary value. Click the :icon:`delete` :guilabel:`(Delete)` icon to remove a
period and its target.

.. _sales/commissions/salespeople:

Assign salespeople
------------------

To allow for more robust achievement tracking, the **Sales** app makes it possible to list the same
salesperson twice on the list to take into account team membership changes. In a team leader plan
scenario, the team lead can be listed multiple times to track when a team member leaves or joins.

To assign salespeople to a commission plan, follow these steps:

1. Select the appropriate staff to assign to the commission plan in the *Salespeople* tab. In the
   :guilabel:`Salesperson` column, click either :guilabel:`Add a new Salesperson` to add them
   individually, or the :guilabel:`Add Multiple Salespersons` button to bulk-add several at once.

   .. note::
      The :guilabel:`Add Multiple Salespersons` button is only available if
      :doc:`../../general/developer_mode` is active.

#. Select a date from the calendar pop-up window for the :guilabel:`From` and :guilabel:`To` columns
   to create the date range during which the commission plan tracks the staff's progress.
#. Select the appropriate staff for the :guilabel:`Sum of achievements` column. The |SOs| and
   invoices of these users are added to the achievements of the assigned salesperson. This column is
   only available if :guilabel:`Salesperson` is selected for the :guilabel:`per` field.
#. If the salesperson is a part of another commission plan, that plan auto-populates in the
   :guilabel:`Other plans` column.

Commission structures
---------------------

The **Sales** app offers two commission structures: :ref:`Linear <sales/commissions/linear>` and
:ref:`Tiered <sales/commissions/tiered>`. The *Tiered* structure allows for customized
:ref:`commission levels <sales/commissions/commission-levels>`.

.. _sales/commissions/linear:

Linear-based commission plans
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In a *Linear*-based commission plan, also known as an achievement-based plan, salespeople earn a
percentage of their invoice value as a commission. Achievement-based plans are ideal for rewarding
sales activity consistently, regardless of specific goals. For example, a plan might offer a `5%`
commission on all invoiced amounts, regardless of how much is sold.

.. tip::
   Achievement-based plans differ from *Tiered*-based plans because they are calculated based on
   actual achievements using a flat, consistent rate. They are beneficial for ongoing,
   non-goal-based compensation plans.

To create a Linear-based commission plan, follow the :ref:`create a commission plan
<sales/commissions/commission-plan>` steps.

.. _sales/commissions/tiered:

Tiered-based commission plans
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In a *Tiered*-based commission plan, commissions are awarded based on the percentage of sales
targets reached. Tiered-based plans are ideal for setting clear, measurable goals, such as invoicing
a specific amount in sales per quarter, then rewarding salespeople progressively based on how close
they come to reaching or exceeding that goal.

.. tip::
   *Tiered*-based plans differ from *Linear*-based plans because they are based on reaching a fixed,
   predefined goal. They focus on goal-based incentives and performance milestones.

To configure a new *Tiered*-based commission plan, follow the :ref:`create a commission plan
<sales/commissions/commission-plan>` and the :ref:`commission level
<sales/commissions/commission-levels>` steps.

.. _sales/commissions/commission-levels:

Commission levels
~~~~~~~~~~~~~~~~~

To provide additional incentive, *commission levels* can be added to *Tiered*-based plans. These
tiers allow salespeople to earn varying commission amounts based on their performance levels. Levels
can start at `0%` and increase incrementally. This allows salespeople to earn commission even if
they do not achieve `100%` of the target, and to earn more if they exceed it. Commission levels can
be set from the *Commissions* tab when creating a *Tiered*-based commission plan.

If no levels are added above `100%`, salespeople are **not** able to earn above the stated
commission.

To add a commission level, follow these steps:

1. In the *Commissions* tab, click :guilabel:`Add a new commission level` to add commission levels
   for the plan.
#. In the new line, enter the percentage value for the :guilabel:`Target completion (%)` column and
   the monetary value in the :guilabel:`Commission` column.

To filter the *Commissions* tab list:

- Click the :icon:`arrow_upward` :guilabel:`(up arrow)` icon to sort the list from highest level to
  lowest or the :icon:`arrow_downward` :guilabel:`(down arrow)` icon for lowest to highest. The
  :icon:`swap_vert` :guilabel:`(up down arrows)` icon resets the list to the default listing (lowest
  to highest).
- Click the :icon:`tune` :guilabel:`(filter)` icon to open the drop-down menu to enable the
  :guilabel:`OTC %` column.
- Click the :icon:`delete` :guilabel:`(delete)` icon to remove a commission level entry from the
  list.

.. example::
   In the plan below, the levels start at `0%` and continue until `300%`. If a salesperson exceeds
   `100%` of the expected target, their expected payout continues to increase up to `300%`.

   .. image:: commissions/commission-levels.png
      :alt: An example of commission levels, with levels above 100 percent.

.. _sales/commissions/plan-approval:

Approve a commission plan
=========================

After confirming the details of the new plan, click :guilabel:`Approve`. This moves the plan from
the :guilabel:`Draft` stage into the :guilabel:`Approved` stage.

.. important::
   Commission plans in the :guilabel:`Approved` stage **cannot** be edited. To edit an approved
   plan, first click :guilabel:`Reset to Draft`.

After a plan is approved, Odoo automatically tracks performance and calculates commissions based on
the established parameters, and a :icon:`attach_money` :guilabel:`Commissions` smart button appears
at the top of the form.

.. seealso::
   :doc:`Commissions <../../hr/payroll/commissions>`
