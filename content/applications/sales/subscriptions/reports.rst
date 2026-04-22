====================
Subscription reports
====================

.. |MRR| replace:: :abbr:`MRR (Monthly Recurring Revenue)`
.. |ARR| replace:: :abbr:`ARR (Annual Recurring Revenue)`

The Odoo **Subscriptions** app provides a series of reporting pages to help companies analyze how
subscriptions are performing. There are four different reports: *Subscriptions Analysis*, *Retention
Analysis*, *MRR Breakdown*, and *MRR Analysis*.

Each report is viewed in its own dedicated reporting page, and shares common elements with the
others, as well as unique elements.

Reporting page elements
=======================

The following sections describe elements found on each reporting page.

Filters and groupings
---------------------

*Filters* are used to narrow down metrics to show specific analytics. *Group By* is used to gather
the data from specific sections into groups for more organized analysis. Visit the :doc:`Search,
filter, and group records <../../essentials/search>` documentation for more information about custom
filters and groups.

Filters
~~~~~~~

The :icon:`fa-filter` :guilabel:`Filters` section allows users to add pre-made and custom filters to
the search criteria. Multiple filters can be added to a single search.

- :guilabel:`My Subscriptions`: Show subscriptions created by the current database user.
- :guilabel:`Quotations`: Show subscriptions that are currently in the *Quotation* stage.
- :guilabel:`In Progress`: Show subscriptions that are currently in the *In Progress* stage.
- :guilabel:`Paused`: Show subscriptions that are currently in the *Paused* stage.
- :guilabel:`Churned`: Show subscriptions that are currently marked *Churned*.
- :guilabel:`To renew`: Show subscriptions that are currently marked *To renew*.
- :guilabel:`Recurring`: Shows subscriptions that renew at specific intervals.
- :guilabel:`Non-recurring`: Shows one-time subscriptions.
- :guilabel:`First contract date`: Show subscriptions with a specific first contract date.
- :guilabel:`Next Invoice Date`: Show subscriptions with a specific next invoice date.
- :guilabel:`End Date`: Show subscriptions with a specific end date.
- :guilabel:`Custom Filter`: Allows the user to create a custom filter with numerous options.

Groupings
~~~~~~~~~

The :icon:`oi-group` :guilabel:`Group By` section allows users to add pre-made and custom groupings
to the search results. Multiple groupings can be added to split results into more manageable chunks.
The order of the selected groupings determines how results are displayed, as each grouping is
applied in sequence.

- :guilabel:`Subscription State`: Groups the results by the current state of each subscription
  (Quotation, In Progress, Churned, etc.)
- :guilabel:`Sales Team`: Groups the results by the Sales Team to whom a subscription is assigned.
- :guilabel:`Salesperson`: Groups the results by the Salesperson to whom a subscription is assigned.
- :guilabel:`Referrer`: Groups the results by the referrer from which a subscription originated.
- :guilabel:`Customer`: Groups the results by the customer to which a subscription belongs.
- :guilabel:`Country`: Groups the results by the country from which a subscription originated.
- :guilabel:`Template`: Groups the results by the quotation template used as the basis for the
  subscription.
- :guilabel:`Plan`: Groups the results by the recurring plan type of the subscription.
- :guilabel:`Product`: Groups the results by the products included in the subscription.
- :guilabel:`First Contract Date`: Groups the results by the date the subscription was created.
- :guilabel:`Next Invoice Date`: Groups the results by the next invoice date of the subscription.
- :guilabel:`End Date`: Groups the results by end date of the subscription, whether or not the
  subscription has ended.
- :guilabel:`Custom Group`: Allows the database user to create a custom group with numerous options.

Views
-----

On the :guilabel:`Subscription Analysis`, :guilabel:`MRR Breakdown`, and :guilabel:`MRR Analysis`
reporting pages, three different view options are located in the upper-right corner. There are no
other view options available on the :guilabel:`Retention Analysis` reporting page.

The available view options are:

- :icon:`fa-area-chart` :guilabel:`Graph` view: Displays the total number of subscriptions in a
  graph, allowing for quick visual comparisons of subscriptions. This is the default view across the
  reporting pages.
- :icon:`oi-view-pivot` :guilabel:`Pivot` view: Displays the detailed Monthly Recurring Revenue by
  both stage and month in a customizable table. This can be modified to display information into
  more detailed categories, such as salesperson, referrer, and more.
- :icon:`oi-view-list` :guilabel:`List` view: Displays the subscriptions in a detailed list,
  allowing for easy viewing of detailed individual records.

Measures
--------

The pivot view has its own metric-specific :guilabel:`Measures` drop-down menu of data-related
options to choose from when creating a subscriptions report.

When the :guilabel:`Measures` button is clicked, a series of selectable measures becomes available,
via a drop-down menu. When any of the options are selected from the :guilabel:`Measures` drop-down
menu, the chosen metrics related to that specific measure appear on the pivot table.

In the :guilabel:`Subscriptions Analysis` page, those measures are:

- :guilabel:`Expected Cost`: Measures the cost of the subscriptions for the business as determined
  by the untaxed amount minus the margin.
- :guilabel:`Monthly Recurring`: Measures the gross monthly recurring revenue for the subscriptions.
- :guilabel:`Quantity`: Measures the number of products included in the subscriptions.
- :guilabel:`Recurring Revenue`: Measures the recurring revenue for the subscriptions based on their
  next recurrence period (weekly, monthly, annually, etc.).
- :guilabel:`Unit Price`: Measures the price for the business of each product in the subscription.
- :guilabel:`Untaxed Amount Delivered`: Measures the cost of the physical products in the
  subscription that aren't subject to a tax and have been delivered to the customer.
- :guilabel:`Untaxed Total`: Measures the total cost of the products in the subscription that aren't
  subject to a tax.
- :guilabel:`Yearly Recurring`: Measures the projected yearly revenue for the subscriptions,
  regardless of their recurrence period.

In the :guilabel:`MRR Breakdown` and :guilabel:`MRR Analysis` pages, those measures are:

- :guilabel:`Active Subscriptions Change`: Measures the net change in active subscriptions.
- :guilabel:`ARR Change`: Measures the total change in annual recurring revenue for all
  subscriptions.
- :guilabel:`MRR Change`: Measures the total change in monthly recurring revenue for all
  subscriptions.

The :guilabel:`Retention Analysis` page offers wholly unique measures, including:

- :guilabel:`Amount To Pay In POS`: Measures the amount to be paid in still-to-be-invoiced
  subscriptions.
- :guilabel:`Margin`: Measures the total margin of the subscriptions.
- :guilabel:`Prepayment percentage`: Measures the percentage of subscriptions revenue that has been
  prepaid.
- :guilabel:`Shipping Weight`: Measures the shipping weight of physical products included in the
  subscriptions.
- :guilabel:`Count`: Measures the count of non-subscription products in the subscriptions.

Reporting pages
===============

To access, analyze, and customize various reports related to subscriptions, navigate to the
:menuselection:`Subscriptions` app and click the :guilabel:`Reporting` drop-down menu in the header
to reveal the following reporting pages:

- :guilabel:`Subscriptions Analysis`: Accessible by navigating to :menuselection:`Subscriptions app
  --> Reporting --> Subscriptions`. Users can view specific data related to recurring subscriptions,
  quantity of subscriptions, in-progress or paused subscriptions, and more. By default, the
  :guilabel:`Subscriptions Analysis` page uses the :guilabel:`Graph` view with the :guilabel:`Bar
  Chart` option and :guilabel:`Stacked` options enabled. The :guilabel:`In Progress or Paused`
  filters and :guilabel:`Recurring` grouping are also enabled by default.
- :guilabel:`Retention Analysis`: Accessible by navigating to :menuselection:`Subscriptions app -->
  Reporting --> Retention`. The :guilabel:`Retention Analysis` reporting page differs from the other
  **Subscriptions** app reporting pages in that it does **not** provide any additional view options.
  The data on this page is only presented in a customizable data chart. The :guilabel:`Count`
  measure option is selected by default.
- :guilabel:`MRR Breakdown`: Accessible by navigating to :menuselection:`Subscriptions app -->
  Reporting --> MRR Breakdown`. This page clearly divides |MRR| and |ARR| metrics for subscriptions
  into various graphs, lists, and charts. By default, the data displayed on the :guilabel:`MRR
  Breakdown` reporting page is in graph view with the :guilabel:`Bar Chart` and :guilabel:`Stacked`
  options selected. The :guilabel:`MRR Change` measure option is selected by default.
- :guilabel:`MRR Analysis`: Accessible by navigating to :menuselection:`Subscriptions app -->
  Reporting --> MRR Analysis`. This page offers a time-based collection of analytics showcasing how
  subscription |MRR| and |ARR| have changed over the course of any given period of time. By default,
  the data displayed on the :guilabel:`MRR Analysis` reporting page is in graph view, with the
  :guilabel:`Line Chart`, :guilabel:`Stacked`, and :guilabel:`Cumulative` options enabled. The
  :guilabel:`MRR Change` measure option is selected by default.

.. seealso::
   :doc:`../subscriptions`
