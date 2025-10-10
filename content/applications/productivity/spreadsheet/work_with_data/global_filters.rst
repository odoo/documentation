==============
Global filters
==============

Global filters, represented by the :icon:`os-global-filters` :guilabel:`Filters` icon at the top
right of an Odoo spreadsheet, allow you to apply one or more filters to all the Odoo data that has
been :doc:`inserted in that spreadsheet <../insert>`.

These filters are particularly useful for reports and dashboards as users can easily and dynamically
customize the view to answer complex business questions spanning multiple data sources.

.. tip::
   When a spreadsheet with global filters is added to a dashboard, the filters appear as dropdown
   menus at the top of the dashboard. In a spreadsheet, they appear in a pane to the right of the
   spreadsheet.

   .. image:: global_filters/dashboard-global-filters.png
      :alt: Global filters at the top of a dashboard

Three types of global filters are available:

- :ref:`Date <spreadsheet/global-filters/create-date>`: filters data based on a specific time range,
  with the options :guilabel:`Month / Quarter`, :guilabel:`Relative Period`, or :guilabel:`From /
  To`.
- :ref:`Relation <spreadsheet/global-filters/create-relation>`: filters data based on a relational
  field in a related model, e.g., by :guilabel:`Salesperson` with the *User* model set as the
  related model.
- :ref:`Text <spreadsheet/global-filters/create-text>`: filters data based on a string of text or a
  range of predefined values, e.g., a product reference or barcode.

Unlike the standard :icon:`fa-filter` :guilabel:`(Add filters)` spreadsheet function, which lets you
sort and temporarily hide data, global filters act on the underlying :ref:`data sources
<spreadsheet/insert/data-sources>`, filtering data *before* it is loaded into the spreadsheet.

When a global filter is created, :ref:`field matching <spreadsheet/global-filters/field-matching>`
for each data source ensures the filter acts on the correct database :doc:`fields
</applications/studio/fields>`.

.. tip::
   - Global filters work by adding extra conditions to the domains of all the data sources in the
     spreadsheet. Therefore, if you intend to use global filters, do not use the same conditions
     when configuring the initial list, pivot table, or chart in your database.
   - Setting default values, where relevant, ensures that the spreadsheet or dashboard loads quickly
     and provides a useful initial view that can be further customized if needed. For example, a
     :guilabel:`Date` filter could be set to show data from the last 30 days by default.

.. _spreadsheet/global-filters/field-matching:

Field matching
==============

.. important::
   This process is crucial, as matching the wrong fields, or not setting matching fields at all,
   results in global filters that do not show the desired results.

To function as intended, a global filter needs to act on the correct database fields. Consider
a :guilabel:`Date` filter applied to sales data. As the *Sales Order* model contains several date
fields, it is crucial to determine which field is relevant for the filter, e.g., the order date, the
delivery date, the expected date, or the expiration date.

When :ref:`creating a global filter <spreadsheet/global-filters/create>`, the :guilabel:`Field
matching` section of the :guilabel:`Filter properties` allows you to determine, for each
:ref:`data source <spreadsheet/insert/data-sources>` in the spreadsheet, which database field the
filter should act on, or match with.

Field matching is further explained in the relevant sections on creating
:ref:`Date <spreadsheet/global-filters/create-date>`,
:ref:`Relation <spreadsheet/global-filters/create-relation>`, and
:ref:`Text <spreadsheet/global-filters/create-text>` global filters.

.. _spreadsheet/global-filters/create:

Create global filters
=====================

Open the desired spreadsheet from the **Odoo Documents** app or via the **Odoo Dashboards** app if
you are adding filters to a dashboard.

.. tip::
   To access the underlying spreadsheet of a dashboard, with the **Dashboards** app open,
   :ref:`activate developer mode <developer-mode>`, then click the :icon:`fa-pencil`
   :guilabel:`(Edit)` icon that appears when hovering over the dashboard name.

To add a new filter, click :icon:`os-global-filters` :guilabel:`Filters`, then, under :guilabel:`Add
a new filter...` click :guilabel:`Date`, :guilabel:`Relation`, or :guilabel:`Text` as appropriate.
The :guilabel:`Filter properties` pane opens.

When saving a global filter, if any required information is missing or if any information provided
in the :ref:`Field matching <spreadsheet/global-filters/field-matching>` section is not appropriate,
an error is shown stating :guilabel:`Some required fields are not valid`.

.. _spreadsheet/global-filters/create-date:

Date
----

.. note::
   A :guilabel:`Date` filter can only match with a :ref:`Date <studio/fields/simple-fields-date>`
   or :ref:`Date & Time <studio/fields/simple-fields-date-time>` field.

With the :guilabel:`Filter properties` pane open:

#. Enter a name for the new date filter in the :guilabel:`Label` field.
#. From the :guilabel:`Time range` dropdown menu, select one of the following:

   - :guilabel:`Month / Quarter`: enables a dropdown menu of specific months and/or quarters and a
     year selector for the year. The values :guilabel:`Months` and :guilabel:`Quarters` are enabled
     by default. Disabling both of these values allows filtering by year only.

     To set a :guilabel:`Default value`, enable
     :guilabel:`Automatically filter on the current period` and choose whether to filter on the
     current :guilabel:`Month`, :guilabel:`Quarter` or :guilabel:`Year`.

   - :guilabel:`Relative Period`: enables a dropdown menu of specific time ranges relative to the
     current date (e.g., :guilabel:`Year to Date`, :guilabel:`Last 7 Days`,
     :guilabel:`Last 30 Days`, etc.).

     To set a :guilabel:`Default value`, select one of the available values.

   - :guilabel:`From / To`: enables :guilabel:`Date from...` and :guilabel:`Date to...` date
     selection fields to define a specific time range (e.g., `06/05/2024` to `06/27/2024`).

#. In the :guilabel:`Field matching` section, for each data source, click below :guilabel:`Date
   field` and select the field the filter should match with.

   The :guilabel:`Period offset` feature enables comparisons to be made by shifting the time
   range by one or two periods in the past or future. By default, no period offset is set. The
   offsets available are: :guilabel:`Previous`, :guilabel:`Before previous`, :guilabel:`Next`, and
   :guilabel:`After next`.

   .. tip::

      To compare data effectively using the :guilabel:`Period offset` feature, :ref:`duplicate the
      relevant inserted list <spreadsheet/insert/list-duplicate>` or :ref:`pivot table
      <spreadsheet/insert/pivot-table-duplicate>`, then, when setting up field matching, set a
      period offset for the second data source but not the first.

      When applying the filter, the original list or pivot table shows data for the time range
      selected, while the second shows data for a period before or after that time range, as
      defined.

#. Click :guilabel:`Save`.

.. example::
   In the example below, a :guilabel:`Date` global filter has been created to allow the pivot table
   and chart to show sales data per quarter. If only a year is selected, data is shown for the
   entire year.

   .. image:: global_filters/example-date.png
      :alt: A date filter to filter on quarter and year

   In the :guilabel:`Field matching` section of the :guilabel:`Filter properties`, the field
   :guilabel:`Order Date` has been selected as the matching date field. A matching date field is not
   needed for *List #1* as we will not use this filter on the data source in question.

   .. image:: global_filters/field-matching-date.png
      :alt: A date filter with the Order Date selected as the matching field
      :scale: 80%

.. _spreadsheet/global-filters/create-relation:

Relation
--------

.. note::
   A :guilabel:`Relation` filter can only match with a :ref:`Many2One
   <studio/fields/relational-fields-many2one>`, :ref:`One2Many
   <studio/fields/relational-fields-one2many>`, or :ref:`Many2Many
   <studio/fields/relational-fields-many2many>` field.

With the :guilabel:`Filter properties` pane open:

#. Enter a name for the new relation filter in the :guilabel:`Label` field.

#. In the :guilabel:`Related model` field, start typing the model name to reveal a list of all
   models, then select the appropriate one. Once a model is selected, the
   :guilabel:`Default value` and :guilabel:`Possible values` fields appear, as well as the
   :guilabel:`Field matching` section.

#. To set a :guilabel:`Default value`, select one of the available values; these are records from
   the model. If the related model is the *User* model, the option :guilabel:`Automatically filter
   on the current user` can be enabled.

#. To limit the values that can be shown, enable :guilabel:`Restrict values with a domain`, then
   click :ref:`Edit domain <search/custom-filters>` to add or edit rules.

#. In the :guilabel:`Field matching` section, check if the correct matching field has been
   assigned for each data source. If this is not the case, click below the data source name to
   select the correct field.

#. Click :guilabel:`Save`.

.. example::
   In the example below, a :guilabel:`Relation` filter has been created to allow the pivot table
   and chart to show sales data related to selected salespeople only. The *User* model was set as
   the :guilabel:`Related model`.

   .. image:: global_filters/example-relation.png
      :alt: Relation filter set on a pivot table

   In the :guilabel:`Field matching` section of the :guilabel:`Filter properties`, the field
   :guilabel:`Salesperson` was automatically assigned as the matching field for both the pivot table
   and the chart. A matching field is not needed for *List #1* as we will not use this filter on the
   data source in question.

   .. image:: global_filters/field-matching-relation.png
      :alt: A relation filter with the User model configured
      :scale: 80%

.. _spreadsheet/global-filters/create-text:

Text
----

.. note::
   A :guilabel:`Text` filter can only match with a :ref:`Text (char)
   <studio/fields/simple-fields-text>`, :ref:`Integer <studio/fields/simple-fields-integer>` or
   :ref:`Decimal (float) <studio/fields/simple-fields-decimal>` field.

With the :guilabel:`Filter properties` pane open:

#. Enter a name for the new text filter in the :guilabel:`Label` field.
#. Optionally, enable :guilabel:`Restrict values to a range`. Doing so allows you to input a
   spreadsheet range either by typing the range or selecting it from within the spreadsheet.
#. Optionally, enter a :guilabel:`Default value`.
#. In the :guilabel:`Field matching` section, for each data source click below the data source name
   and select the field the :guilabel:`Text` filter should match with.

#. Click :guilabel:`Save`.

.. example::
   In the example below, a :guilabel:`Text` global filter was created to allow the user to select a
   product from the :guilabel:`Product` filter and have both the pivot table and chart only show
   sales data related to that specific product.

   .. image:: global_filters/example-text.png
      :alt: Global filters set on a pivot table

   In the :guilabel:`Filter properties`, the :guilabel:`Possible values` of the filter were
   restricted to the range :guilabel:`'Products (List #1)'!A2:A34`. This corresponds to the range
   containing the :guilabel:`Display name` of the product on a list inserted in the spreadsheet.

   .. image:: global_filters/field-matching-text.png
      :alt: A text filter with a restricted range
      :scale: 80%

   With this configuration, the pivot table and chart can be filtered by product name by
   selecting one of the predefined values available in the text filter. In this case,
   :guilabel:`Furniture` has already been selected as the :guilabel:`Product category`, meaning
   that only products of this category can be selected as possible values.

   Furthermore, if the values in the range have been retrieved dynamically from the database, as in
   this case, the text filter is also dynamic, i.e., will reflect changes made to those values.

.. _spreadsheet/global-filters/manage:

Manage and use global filters
=============================

Click the :icon:`os-global-filters` :guilabel:`Filters` icon at the top right of an Odoo spreadsheet
to access the global filters that have been created for that spreadsheet.

It is possible to:

- **Apply one or more global filters** by selecting appropriate values per filter, as relevant.

  .. tip::
     Reloading the browser will cause any global filters to reset to their initial state or default
     value, as relevant. To refresh data in an inserted list, pivot table, or chart without losing
     global filters that have been applied, click :menuselection:`Data -->` :icon:`os-refresh-data`
     :menuselection:`Refresh all data` from the menu bar.

- **Change the order** of existing filters by hovering over a filter and using the
  :icon:`os-thin-drag-handle` :guilabel:`(drag handle)` icon to change the position.
- **Clear filter values** (whether default or selected values) by clicking the :icon:`fa-times`
  :guilabel:`(Clear)` icon next to the value in the filter.
- **Edit an existing filter** by selecting the :icon:`fa-cog` :guilabel:`(Edit)` icon to open the
  filter's :guilabel:`Filter properties` then editing as needed.
- **Delete an existing filter** by selecting the :icon:`fa-cog` :guilabel:`(Edit)` icon to open the
  filter's :guilabel:`Filter properties` then clicking :guilabel:`Remove`.
