=================================
Search, filter, and group records
=================================

Odoo allows for the searching, filtering, and grouping of records in a view to display only the most
relevant records. The search bar is located at the top of the view: start typing to :ref:`search for
values <search/values>`, or click the :icon:`fa-caret-down` :guilabel:`(dropdown)` icon to access
the :ref:`Filter <search/filters>`, :ref:`Group By <search/group>`, and :ref:`Favorites
<search/favorites>` drop-down menus.

.. _search/values:

Search for values
=================

Use the search field to look for specific values, and add them as a filter. Type the value to search
for (like a salesperson's name or a product), and select the desired option from the drop-down menu
to apply the search filter.

.. example::
   Instead of adding a :ref:`custom filter <search/custom-filters>` to select records where
   *Mitchell Admin* is the salesperson on the *Sales Analysis* report (:menuselection:`Sales app -->
   Reporting --> Sales`), search for `Mitch`, and click the :icon:`fa-caret-right`
   :guilabel:`(submenu)` icon next to :guilabel:`Search Salesperson for: Mitch`, and select
   :guilabel:`Mitchell Admin`.

   .. image:: search/search-values.png
      :alt: Searching for a specific value on the Sales Analysis report

.. note::
   Using the search field is equivalent to using the *contains* operator when adding a :ref:`custom
   filter <search/custom-filters>`. If a partial value is entered, and the desired field is directly
   selected (without selecting the :icon:`fa-caret-right` :guilabel:`(submenu)`, *all* records
   containing the typed characters for the selected field are included.

.. _search/filters:

Filters
=======

Filters are used to select records that meet specific criteria. The default selection of records is
specific to each view, but can be modified by selecting one (or several) :ref:`preconfigured filters
<search/preconfigured-filters>`, or by adding a :ref:`custom filter <search/custom-filters>`.

.. _search/preconfigured-filters:

Preconfigured filters
---------------------

Modify the default selection of records by clicking the :icon:`fa-caret-down` :guilabel:`(dropdown)`
from the search bar, and selecting one (or several) *preconfigured filters* from the
:guilabel:`Filters` drop-down menu.

.. example::
   On the *Sales Analysis* report (:menuselection:`Sales app --> Reporting --> Sales`), only records
   that are at the *sales order* stage, with an *order date* within the last 365 days, are selected
   by default.

   To also include records at the *quotation* stage, select :guilabel:`Quotations` from the
   :guilabel:`Filters`.

   Furthermore, to *only* include sales order and quotation records from a specific year, like 2024,
   for example, first remove the existing `Order Date: Last 365 Days` filter by clicking
   :icon:`fa-times` :guilabel:`(cancel)`, then select the :menuselection:`Order Date --> 2024`
   filter.

   .. image:: search/preconfigured-filters.png
      :alt: Using preconfigured filters on the Sales Analysis report

.. note::
   The preconfigured :guilabel:`Filters` are grouped, and each group is separated by a horizontal
   line. Selecting preconfigured filters from the same group allows records to match *any* of the
   applied conditions. However, selecting filters from different groups requires records to match
   *all* of the applied conditions.

.. _search/custom-filters:

Custom filters
--------------

If the :ref:`preconfigured filters <search/preconfigured-filters>` are not specific enough, add a
custom filter. To do so, click the :icon:`fa-caret-down` :guilabel:`(dropdown)` icon in the search
bar, then select :menuselection:`Filters --> Add Custom Filter`.

The :guilabel:`Add Custom Filter` pop-up window displays the matching option, filter rule, and a
toggle to :guilabel:`Include archived` records.

.. image:: search/custom-filter.png
   :alt: The Add Custom Filter pop-up window.

The default matching configuration is to :guilabel:`Match any of the following rules`, indicating
that each filter rule is applied independently. To change the matching configuration to
:guilabel:`Match all of the following rules`, at least two filter rules must be added to the custom
filter.

- :guilabel:`Match all` :icon:`fa-caret-down` :guilabel:`of the following rules`: **All** of the
  filter rules must be met. Think of this as an *AND* (`&`) operation.
- :guilabel:`Match any` :icon:`fa-caret-down` :guilabel:`of the following rules`: **Any** of the
  filter rules can be met. Think of this as an *OR* (`|`) operation.

By default, a single filter rule is added to the custom filter. The following describes the
structure of a filter rule:

#. The first inline field is the *field name* to filter by. Some fields have refined parameters that
   are nested within another field. These fields have a :icon:`fa-caret-right` :guilabel:`(submenu)`
   icon beside them, which can be selected to reveal the nested fields.
#. The second inline field is the conditional *operator* used to compare the field name to the
   value. The :ref:`available conditional operators <reference/orm/domains>` are specific to the
   field's data type.
#. The third inline field is the variable *value* of the field name. The value input may appear as a
   drop-down menu, a text input, a number input, a date/time input, a boolean selector, or it may be
   blank, depending on the operator used and the field's data type.

Three inline buttons are also available to the right of the rule's filter criteria:

#. :icon:`fa-plus` :guilabel:`(plus)`: Adds a new rule below the existing rule.
#. :icon:`fa-sitemap` :guilabel:`(node)`: Adds a new group of rules below the existing rule, with
   the :guilabel:`any` and :guilabel:`all` matching options available to define how each rule within
   this branch is applied to the filter. If the matching option is set to the same as the parent
   group, the fields are moved to join the parent group.

   .. example::
      If the matching option is set to :guilabel:`Match all` :icon:`fa-caret-down` :guilabel:`of the
      following rules`, and a new branch is added with its matching option changed from
      :guilabel:`any` :icon:`fa-caret-down` :guilabel:`of` to :guilabel:`all` :icon:`fa-caret-down`
      :guilabel:`of`, the newly-added branch disappears, and its group of rules are moved to the
      parent group.

#. :icon:`fa-trash` :guilabel:`(delete)`: Deletes the node. If a branch node is deleted, all
   children of that node are deleted, as well.

A new filter rule can be added to the custom filter by clicking the :guilabel:`New Rule` button.

Once the filter criteria are defined, click :guilabel:`Add` to add the custom filter to the view.

.. example::
   To target all leads and opportunities from the :menuselection:`CRM` app that are in the *Won*
   stage, and have an expected revenue greater than $1,000, the following should be entered:

   :guilabel:`Match all` :icon:`fa-caret-down` :guilabel:`of the following rules:`

   #. :guilabel:`Stage` :guilabel:`is in` :guilabel:`Won`
   #. :guilabel:`Expected Revenue` :guilabel:`>` `1,000`
   #. :guilabel:`any` :icon:`fa-caret-down` :guilabel:`of:`

      - :guilabel:`Type` :guilabel:`=` :guilabel:`Lead`
      - :guilabel:`Type` :guilabel:`=` :guilabel:`Opportunity`

   .. image:: search/custom-filter-example.png
      :alt: Adding a custom filter to filter specific records in CRM.

.. tip::
   Activate :ref:`developer-mode` to reveal each field's technical name and data type, as well as
   the :guilabel:`# Code editor` text area below the filter rules, to view and edit the domain
   manually.

.. _search/group:

Group records
=============

The display of records in a view can be clustered together, according to one of the *preconfigured
groups*. To do so, click the :icon:`fa-caret-down` :guilabel:`(dropdown)` icon in the search bar,
then select one of the :guilabel:`Group By` options from the drop-down menu.

.. example::
   To group the records by salesperson on the *Sales Analysis* report (:menuselection:`Sales app -->
   Reporting --> Sales`), click the :guilabel:`Salesperson` option from the :guilabel:`Group By`
   drop-down menu. The view changes to group the records by salesperson, without filtering out any
   records.

   .. image:: search/group.png
      :alt: Grouping records on the Sales Analysis report

It is possible to *customize groups* by using a field present on the model. To do so, click
:menuselection:`Add Custom Group`, and select a field from the drop-down menu.

.. note::
   Several groups can be used at the same time. The first group that is selected is the main
   cluster, the next one that is added further divides the main group's categories, and so on.
   Furthermore, filters and groups can be used together to refine the view even more.

.. _search/comparison:

Comparison
==========

Certain reporting dashboards include a :guilabel:`Comparison` section in the drop-down menus of
their search bars. This includes the :doc:`Overall Equipment Effectiveness
<../inventory_and_mrp/manufacturing/reporting/oee>` report for the **Manufacturing** app and the
:doc:`Purchase <../inventory_and_mrp/purchase/advanced/analyze>` report for the **Purchase** app,
among others.

The options in the :icon:`fa-adjust` :guilabel:`Comparison` section are used to compare data from
two different time periods. Pick between the two comparison options: :guilabel:`(Time Filter):
Previous Period` and :guilabel:`(Time Filter): Previous Year`.

.. important::
   For some reports, the :guilabel:`Comparison` section **only** appears in the search bar drop-down
    menu if one (or more) time periods have been selected in the :guilabel:`Filters` column. This is
    because there is nothing to compare if no time period is specified.

   Additionally, some reports only allow use of the :guilabel:`Comparison` feature when the
   :icon:`fa-pie-chart` :guilabel:`(Pie Chart)` graph type or the :icon:`oi-view-pivot`
   :guilabel:`(Pivot)` view, is selected. A :guilabel:`Comparison` option can be selected even if
   another view is enabled, but doing so does **not** change the way data is displayed on the
   report.

.. image:: search/comparison-section.png
   :alt: The search bar for the production analysis report.

To view data using one of the two comparisons, begin by selecting a time period in the
:guilabel:`Filters` column of the search bar drop-down menu. Then, select either :guilabel:`(Time
Filter): Previous Period` or :guilabel:`(Time Filter): Previous Year` in the :guilabel:`Comparison`
section.

With one of the :guilabel:`Comparison` options enabled, the report compares the data for the
selected period, with the data for the same unit of time (month, quarter, year), one period or year
prior. The way the data is displayed depends on the selected view:

- The :icon:`fa-bar-chart` :guilabel:`(Bar Chart)` shows two bars, side-by-side, for each unit of
  time for the selected time period. The left bar represents the selected time period, while the
  right bar represents the previous time period.
- The :icon:`fa-line-chart` :guilabel:`(Line Chart)` is displayed with two lines, one representing
  the selected time period, and the other representing the previous time period.
- The :icon:`fa-pie-chart` :guilabel:`(Pie Chart)` appears as a large circle with a smaller circle
  inside. The larger circle represents the selected time period, while the smaller circle represents
  the previous time period.
- The :icon:`oi-view-pivot` :guilabel:`(Pivot)` is displayed with each column split into two smaller
  columns. The right column represents the selected time period, while the left column represents
  the previous time period.

.. example::
   In the :guilabel:`Production Analysis` report of the :menuselection:`Manufacturing` app, data for
   the second quarter of 2024 is compared to data for the second quarter of 2023. :guilabel:`Q2` is
   selected in the :guilabel:`End Date` filter section of the search bar drop-down
   menu. In the :guilabel:`Comparison` section, :guilabel:`End Date: Previous Year` is selected.

   The current year is 2024, so the larger circle shows data for the second quarter (Q2) of 2024.
   The smaller circle shows data for the second quarter (Q2) of 2023, which is the same time period,
   but one *year* prior.

   If :guilabel:`End Date: Previous Period` is selected instead, the smaller circle shows data for
   the first quarter (Q1) of 2024, which is the same time period, but one *period* prior.

   .. image:: search/comparison.png
      :alt: The comparison view of the Production Analysis report.

.. _search/favorites:

Favorites
=========

Favorites are a way to save a specific search for future use, or as the new default filter for the
view.

To save the current view as a favorite, click the :icon:`fa-caret-down` :guilabel:`(dropdown)` icon
in the search bar, then select the :guilabel:`Save current search` drop-down menu to display the
following options:

- :guilabel:`Filter name`: Name of the favorited search.
- :guilabel:`Default filter`: Sets the favorited search as the default filter for the view.
- :guilabel:`Shared`: Makes the favorited search available to all users. Otherwise, by default, the
  favorited search is only available to the user who created it.

Once the options are set, click :guilabel:`Save` to save the favorited search.

.. image:: search/favorites.png
   :alt: Saving a favorite search on the Sales Analysis report.

Saved favorites can be accessed by clicking the :icon:`fa-trash` :guilabel:`(delete)` icon in the
search bar, then selecting the saved filter in the :guilabel:`Favorites` drop-down menu. To remove a
saved favorite, click the :icon:`fa-trash` :guilabel:`(delete)` icon next to the favorited search.

.. tip::
   To view *all* favorited searches, first activate :ref:`developer-mode`, and navigate to
   :menuselection:`Settings app --> Technical --> User Interface: User-defined Filters`. From here,
   all favorited searches can be viewed, edited, archived, or deleted.
