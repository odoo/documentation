============================
Insert and link to Odoo data
============================

Several elements from your Odoo database can be inserted into an Odoo spreadsheet, namely:

- lists, i.e., data from a :ref:`list view <studio/views/multiple-records/list>`
- pivot tables, i.e., data from a :ref:`pivot view <studio/views/reporting/pivot>`
- charts, i.e. data from a :ref:`graph view <studio/views/reporting/graph>`

Each time a list, pivot table or chart is inserted, a :ref:`data source
<spreadsheet/insert/data-sources>` is created. This data source connects the spreadsheet to the your
Odoo database, retrieving up-to-date information every time the spreadsheet is opened or reloaded.

:ref:`Inserted lists <insert/list>` and :ref:`inserted pivot tables <insert/pivot-table>` use
formulas with Odoo-specific :ref:`list functions <insert/list/functions>` and :ref:`pivot table
functions <insert/pivot-table/functions-static>` to retrieve data from your database and can be
further manipulated in the spreadsheet. Certain elements of :ref:`inserted charts <insert/chart>`
can be modified, but no data manipulation or computation is possible.

.. tip::
   If you intend to use :doc:`global filters <global_filters>` to dynamically filter Odoo data in
   a spreadsheet or dashboard, do not use the same filter conditions to establish the initial
   list, pivot table or chart.

It is also possible to:

- :ref:`insert financial data <insert/financial-data>` from your Odoo database using
  Odoo-specific spreadsheet :doc:`functions <functions>`
- :ref:`add clickable links <insert/clickable-links>` to specific views of Odoo models, to other
  sheets of the same spreadsheet, or to external urls
- paste data from another Odoo spreadsheet, Excel spreadsheet or Google Sheet directly into any
  Odoo spreadsheet

.. _spreadsheet/insert/data-sources:

Data sources
============

Data sources, which are created each time a :ref:`list <insert/list>`, :ref:`pivot table
<insert/pivot-table>` or :ref:`graph <insert/chart>` is inserted into an Odoo spreadsheet, connect
the spreadsheet and the relevant :doc:`model <../../studio/models_modules_apps>` in your database.

Each data source is defined by properties that can be accessed via the :guilabel:`Data` menu. Data
sources are identified by their respective :icon:`oi-view-pivot` (pivot table),
:icon:`oi-view-list` (list) or :icon:`fa-bar-chart` (chart) icon, followed by their ID and name,
e.g., :icon:`oi-view-pivot` *(#1) Sales Analysis by Product*.

   .. image:: insert/data-menu.png
      :alt: Data sources listed in Data menu

Clicking on a data source opens its properties in a pane on the right of the spreadsheet.

.. tip::
   Once the properties of a specific data source are open, they remain open even when navigating
   between spreadsheet tabs. To close the properties pane, click the :icon:`fa-times` icon at the
   top right of the pane.

.. note::
   Deleting an inserted list or pivot table from a sheet or deleting the sheet in which it has been
   inserted does not delete the underlying data source; the data source of a list or pivot table can
   only be deleted via the data source's properties.

   Deleting an inserted chart, on the other hand, also deletes the underlying data source.

.. _insert/list:

Insert a list
=============

.. important::
   Before inserting a list in a spreadsheet, ensure the list is tailored to your needs. Consider
   which fields should be visible as well as how the records are filtered and/or sorted. This can
   impact both the loading time and the user-friendliness of your spreadsheet.

To insert a list in a spreadsheet:

#. From the :guilabel:`List` :icon:`oi-view-list` view, click the :icon:`fa-cog`
   :guilabel:`(Actions)` icon beside the model name, then :menuselection:`Spreadsheet --> Insert
   list in spreadsheet`.

   .. note::
      To insert only specific records, select the relevant records, click the :icon:`fa-cog`
      :guilabel:`Actions` button that appears at the top center of the screen, then
      :guilabel:`Insert in spreadsheet`.

#. In the window that opens, edit the :guilabel:`Name of the list` if needed.

   By default, the name of the list is the model name. If the list was sorted before insertion,
   this is mentioned in the list name. For example, in the screenshot below, the list of
   *Quotations* was sorted by *Total*, giving the assigned but editable list name
   :guilabel:`Quotations by Total`.

   The list name is used in the sheet name and in the :ref:`list properties
   <insert/list/properties>`.

   .. image:: insert/insert-list.png
      :alt: Inserting a list in a spreadsheet

#. Edit the number of list records, i.e., rows, to be inserted if needed.

   By default, the number shown is the number of records visible on the first page of the list. For
   example, if the list contains 150 records but only 80 are visible, this field will show 80.

   .. note::
      While the data in your list is kept up to date thanks to the connection to your database, an
      inserted list will not automatically expand to accommodate new records, e.g., a new product
      category or a new salesperson.

      If you anticipate new records being added, consider adding extra rows when inserting the list.
      Records/rows can also be added manually once the spreadsheet has been inserted.

      .. example::
         Your company currently has ten product categories and you insert this list in a
         spreadsheet. If an 11th product category is created and your inserted list only had ten
         rows, the new category will be inserted in the appropriate position in the spreadsheet,
         thereby removing an existing category.

         One way to avoid this is to add extra rows when inserting the list.

#. Click :guilabel:`Blank spreadsheet` or select in which existing spreadsheet the list should be
   inserted.

   .. note::
      New spreadsheets are saved in the Documents app in either the :icon:`fa-hdd-o` :guilabel:`My
      Drive` personal workspace or, if :guilabel:`Files Centralization` has been enabled for
      spreadsheets, in the :guilabel:`Spreadsheet` workspace.

#. Click :guilabel:`Confirm`.

The list is inserted in a new sheet in the spreadsheet. The tab shows the name of the list
followed by the list ID, e.g., *Quotations by Total (List #1)*. A pane on the right side of the
screen shows the :ref:`list properties <insert/list/properties>`.

.. tip::
   - To sever the link between an inserted list and your database, select the entire list, right
     click and select :icon:`fa-clipboard` :guilabel:`Copy` then right click again and select
     :menuselection:`Paste special --> Paste as value`.
   - Do not modify the list ID in the sheet name as the inserted list retains this ID for the
     lifetime of the spreadsheet. This list ID is used in the :ref:`spreadsheet functions
     <insert/list/functions>` that retrieve data from your database.

.. _insert/list/functions:

List functions
--------------

When a list is inserted in a spreadsheet, the following :ref:`functions <functions>` are used to
retrieve the header and field values respectively:

.. code-block:: text

   =ODOO.LIST.HEADER( list_id, field_name)
   =ODOO.LIST( list_id, index, field_name)

The elements of the function are as follows:

- `list_id`: the ID assigned when the list is inserted. The first list inserted in a spreadsheet is
  assigned list ID 1, the second, list ID 2, etc.
- `index`: identifies the line on which the record appeared in the list before insertion. The
  first line has an index of 1, the second an index of 2, etc.
- `field_name`: the technical name of the field.

.. tip::
   To see the formulas of spreadsheet cells, click :menuselection:`View --> Show --> Formulas` on
   the menu bar.

   .. image:: insert/spreadsheet-formulas.png
      :alt: Viewing formulas of spreadsheet cells

.. _insert/list/properties:

List properties
---------------

The list properties appear on the right side of the screen when a list is inserted. They can be
accessed at any time via the :guilabel:`Data` menu by clicking the relevant list, as prefaced by
the :icon:`oi-view-list` (list) icon.

The following list properties are shown, some of which can be edited:

- :guilabel:`List #`: the list ID. List IDs are assigned sequentially as additional lists are
  inserted in the spreadsheet.
- :guilabel:`List Name`: the name of the list. Edit this if needed. Note that editing the list name
  in the list properties does not modify the list name shown in the sheet name, and vice versa.
- :guilabel:`Model`: the model from which the data has been extracted.
- :guilabel:`Columns`: the fields of the model that were visible when the list was inserted.
- :guilabel:`Domain`: the rules used to determine which records are shown. Click
  :ref:`Edit domain <search/custom-filters>` to add or edit rules.

  .. note::
     When :doc:`global filters <global_filters>` are used, this domain is combined with the selected
     values of the global filter before the data is loaded into the spreadsheet.

- :guilabel:`Sorting`: how the data is sorted, if applicable. To add a sorting rule, click
  :guilabel:`Add`, select the field, then choose whether sorting should be :guilabel:`Ascending` or
  :guilabel:`Descending`. Delete a sorting rule by clicking the :icon:`fa-times` icon.

To :ref:`duplicate <insert/list/duplicate>` or :ref:`delete <insert/list/delete>` a list's data
source, click the :icon:`fa-cog` icon then :icon:`fa-copy` :guilabel:`Duplicate` or :icon:`fa-trash`
:guilabel:`Delete` as relevant.

.. _insert/list/manage:

Manage an inserted list
-----------------------

Once a list has been inserted, you can:

- :ref:`add records <insert/list/add-records>`, i.e., rows
- :ref:`add fields <insert/list/add-fields>`, i.e., columns
- :ref:`duplicate the list <insert/list/duplicate>` to create a new, identical data source
- :ref:`delete the list and its underlying data source <insert/list/delete>`

.. _insert/list/add-records:

Add records to a list
~~~~~~~~~~~~~~~~~~~~~

To add records to a list, use one of the following methods:

- Select the last row of the table then hover over the blue square until the cross icon appears.
  Click and drag down to add the desired number of rows. The
  :ref:`spreadsheet formula <insert/list/functions>` is extended to the new cells. If there is
  corresponding data in your database, the cells are populated.

  .. image:: insert/list-add-records.png
     :alt: Add records/rows by dragging cell down

- Position your cursor in the top left cell of the sheet, click :menuselection:`Data --> Re-insert
  list` from the menu bar then select the appropriate list. In the pop-up window, indicate the
  number of records/rows to insert and click :guilabel:`Confirm`. An updated list is inserted,
  overwriting the previous list.

.. tip::
   The above methods can also be used to add additional blank rows to your spreadsheet table. This
   may be useful for lists where you expect additional records to be generated in your database,
   e.g., example, new product categories or new salespersons.

.. _insert/list/add-fields:

Add fields/columns to a list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To add fields/columns to a list:

#. Select the column to the right or left of where the new column should be inserted.
#. Click :menuselection:`Insert --> Insert column --> Column right` or :guilabel:`Column left` from
   the menu bar or right-click then :guilabel:`Insert column right` or
   :guilabel:`Insert column left` as appropriate.
#. Copy the header cell of any column and paste it into the header cell of the new column.
#. Double-click the cell then click on the field name which appears in quotation marks at the end of
   the formula; a list of all the technical names of the fields of the related model appears.

   .. image:: insert/list-add-columns.png
      :alt: Add fields/columns by editing the formula

#. Select the appropriate field name and press `Enter`. The field's label appears in the header.

   .. tip::
      To know a field's technical name, navigate to the revelant view,
      :ref:`activate developer mode <developer-mode>` and check the :guilabel:`Field` name by
      hovering over the question mark beside a field's label.

#. With the header cell selected, double-click on the blue square in the bottom-right corner; the
   cells of the column are populated with the appropriate formula to retrieve the list values. If
   there is corresponding data in your database, the cells are populated.

.. _insert/list/duplicate:

Duplicate a list
~~~~~~~~~~~~~~~~

Duplicating a list via the list's properties creates an additional data source. This allows for
different manipulations to be performed on the same data within one spreadsheet.

.. note::
   Duplicating a list by copying and pasting it or by duplicating the sheet does not create a new
   data source. Any changes made to the list's properties would therefore impact any copies of the
   list.

With the :ref:`list properties <insert/list/properties>` open, click the :icon:`fa-cog` icon then
:icon:`fa-clone` :guilabel:`Duplicate`.

The new data source is assigned the next available list ID. For example, if no other lists have been
inserted in the meantime, duplicating *List #1* results in the creation of *List #2*.

Unlike when you insert a list, a duplicated list is not automatically inserted in the spreadsheet.
To insert it:

#. Add a new sheet by clicking the :icon:`fa-plus` icon at the bottom left of the screen.
#. Click :menuselection:`Data --> Re-insert list` from the menu bar then select the appropriate
   list.
#. Define the number of records to insert and click :guilabel:`Confirm`.
#. Edit the :guilabel:`List Name` in the list properties pane if needed.
#. Rename the sheet by right-clicking on the tab, selecting :guilabel:`Rename` and entering the new
   sheet name.

.. _insert/list/delete:

Delete a list
~~~~~~~~~~~~~

To fully delete a list and the underlying data source from a spreadsheet, perform the following
steps in any order:

- Delete the spreadsheet table using your preferred means, e.g., via keyboard commands, spreadsheet
  menus, or by deleting the sheet. This deletes the visual representation of the data.
- From the :ref:`properties pane <insert/list/properties>` of the relevant list, click the
  :icon:`fa-cog` icon then :icon:`fa-trash` :guilabel:`Delete`. This deletes the data source of the
  list.

.. _insert/pivot-table:

Insert a pivot table
====================

.. tip::
   When a pivot table is inserted in a spreadsheet, it is by default static. Converting a static
   pivot table to a :doc:`dynamic pivot table <dynamic_pivot_tables>` ensures the pivot table can
   expand to accommodate new data series, such as sales data for a new quarter, and allows you to
   modify the dimensions (i.e., columns and rows) and measures.

   It is therefore possible to insert a basic pivot table with minimal configuration and refine it
   directly in the spreadsheet after converting it to a dynamic pivot table.

To insert a pivot table in a spreadsheet:

#. From the :guilabel:`Pivot` :icon:`oi-view-pivot` view, click :guilabel:`Insert in spreadsheet`.
#. In the window that opens, edit the :guilabel:`Name of the pivot` if needed.

   By default, the name of the pivot table is the model name or name of the report, followed by the
   first dimension added as a column, if relevant, e.g., *Sales Analysis by Sales Team*.

   This name is used in the sheet name and in the :ref:`pivot table properties
   <insert/pivot-table/properties>`.

   .. image:: insert/insert-pivot-table.png
      :alt: Inserting a pivot table in a spreadsheet

#. Click :guilabel:`Blank spreadsheet` or select in which existing spreadsheet the pivot table
   should be inserted.

   .. note::
      New spreadsheets are saved in the Documents app in either the :icon:`fa-hdd-o` :guilabel:`My
      Drive` personal workspace or, if :guilabel:`Files Centralization` has been enabled for
      spreadsheets, in the :guilabel:`Spreadsheet` workspace.

#. Click :guilabel:`Confirm`.

The pivot table is inserted in the spreadsheet in a new sheet, with the tab showing the name of the
pivot table followed by the pivot table ID, e.g., *Sales Analysis by Sales Team (Pivot #1)*. A pane
on the right side of the screen shows the
:ref:`pivot table properties <insert/pivot-table/properties>`.

.. _insert/pivot-table/functions-static:

Static pivot table functions
----------------------------

An inserted static pivot table uses the following :ref:`functions <functions>` to retrieve the
header and field values respectively:

      .. code-block:: text

         =PIVOT.HEADER( pivot_id, [domain_field_name, …], [domain_value, …])
         =PIVOT.VALUE( pivot_id, measure_name, [domain_field_name, …], [domain_value, …])

The arguments of the functions are as follows:

- `pivot_id`: the id assigned when the pivot table is inserted. The first pivot table inserted
  in a spreadsheet is assigned pivot id 1, the second, pivot id 2, etc.
- `measure_name`: the name of the quantitative data you are aggregating.
- `domain_field_name`: identifies the line on which the value appeared in the list before
  insertion. The first line has an index of 1, the second an index of 2, etc.
- `domain_value`: the technical name of the field.

.. tip::
   To see the formulas of spreadsheet cells, go to :menuselection:`View --> Show --> Formulas` from
   the menu bar. The examples below show the functions for a static and dynamic pivot table
   respectively.

   .. image:: insert/pivot-table-formulas.png
      :alt: Functions of a static and dynamic pivot table

.. _insert/pivot-table/properties:

Pivot table properties
----------------------

The pivot table properties appear on the right side of the screen when a pivot table is inserted.
They can be accessed at any time via the :guilabel:`Data` menu by clicking the relevant pivot table,
as prefaced by the :icon:`oi-view-pivot` (pivot) icon, or by right-clicking anywhere on the pivot
table and clicking :icon:`oi-view-pivot` :guilabel:`See pivot properties`.

The following pivot table properties are shown, some of which can be edited:

- :guilabel:`Pivot #`: the pivot table ID. Pivot table IDs are assigned sequentially as additional
  pivot tables are inserted in the spreadsheet.
- :guilabel:`Name`: the name of the pivot table. Edit this if needed. Note that editing the name
  in the pivot table properties does not modify the name shown in the sheet name, and vice versa.
- :guilabel:`Model`: the model from which the data has been extracted.
- :guilabel:`Columns` and :guilabel:`Rows`: dimensions you are using to categorize or group data
  from the model.
- :guilabel:`Measures`: the data you are measuring, or analyzing, based on the dimensions you have
  chosen.

  .. tip::
     If you attempt to make changes to the columns, rows or measures of a pivot table that has just
     been inserted in a spreadsheet, an error will appear at the top right of the screen.

      .. image:: dynamic_pivot_tables/pivot-table-error.png
         :alt: Error message when trying to manipulate static pivot table

     To be able to manipulate a pivot table's properties, convert a static pivot table to a
     :ref:`dynamic pivot table <dynamic_pivot_tables/create>`.

- :guilabel:`Domain`: the rules used to determine which records are shown. Click
  :ref:`Edit domain <search/custom-filters>` to add or edit rules.

  .. note::
     When :doc:`global filters <global_filters>` are used, this domain is combined with the selected
     values of the global filter before the data is loaded into the spreadsheet.

To :ref:`duplicate <insert/pivot-table/duplicate>` or :ref:`delete <insert/pivot-table/delete>` a
pivot table's data source, click the :icon:`fa-cog` icon then :icon:`fa-copy` :guilabel:`Duplicate`
or :icon:`fa-trash` :guilabel:`Delete`.

.. _insert/pivot-table/manage:

Manage an inserted pivot table
------------------------------

Once a pivot table has been inserted, you can:

- :doc:`convert it to a dynamic pivot table <dynamic_pivot_tables>` to be able to manipulate
  the dimensions and measures
- :ref:`duplicate the pivot table <insert/list/duplicate>` to create a new, identical data source
- :ref:`delete the pivot table and its underlying data source <insert/list/delete>`

.. _insert/pivot-table/duplicate:

Duplicate a pivot table
~~~~~~~~~~~~~~~~~~~~~~~

Duplicating a pivot table via the pivot table's properties creates an additional data source. This
allows for different manipulations to be performed on the same data within one spreadsheet.

For example, you can see the same data aggregated by different dimensions or use global filters to
offset the date and create pivot tables that compare the current period's data with a previous
period.

.. note::
   Duplicating a pivot table by copying and pasting it or by duplicating the sheet does not create a
   new data source. Any changes made to the pivot table's properties would therefore impact any
   copies of the pivot table.

To duplicate a pivot table:

#. With the :ref:`pivot table properties <insert/pivot-table/properties>` open, click the
   :icon:`fa-cog` icon then :icon:`fa-clone` :guilabel:`Duplicate`.

   The duplicated pivot table is automatically inserted in the spreadsheet in a new sheet with the
   pivot table properties open in the right pane.
#. Edit the :guilabel:`Name` in the properties pane and the sheet name as needed.

The new data source is assigned the next available pivot table ID. For example, if no other pivot
tables have been inserted in the meantime, duplicating *Pivot #1* results in the creation of
*Pivot #2*.

.. _insert/pivot-table/delete:

Delete a pivot table
~~~~~~~~~~~~~~~~~~~~

To fully delete a pivot table and the underlying data source from a spreadsheet, perform the
following steps in any order:

- Delete the spreadsheet table using your preferred means, e.g., via keyboard commands, spreadsheet
  menus, or by deleting the sheet. This deletes the visual representation of the data.
- From the :ref:`properties pane <insert/pivot-table/properties>` of the relevant pivot table, click
  the :icon:`fa-cog` icon then :icon:`fa-trash` :guilabel:`Delete`. This deletes the data source of
  the pivot table.

.. _insert/chart:

Insert a chart
==============

To insert a chart in a spreadsheet:

#. From the :guilabel:`Graph` :icon:`fa-area-chart` view, click :guilabel:`Insert in spreadsheet`.
#. In the window that opens, edit the :guilabel:`Name of the graph` if needed.

   By default, the name of the chart is the model name or report name.

#. Click :guilabel:`Blank spreadsheet` or select in which existing spreadsheet the chart should be
   inserted.

   .. note::
      New spreadsheets are saved in the Documents app in either the :icon:`fa-hdd-o` :guilabel:`My
      Drive` personal workspace or, if :guilabel:`Files Centralization` has been enabled for
      spreadsheets, in the :guilabel:`Spreadsheet` workspace.

#. Click :guilabel:`Confirm`.

Charts are inserted on the first sheet of the spreadsheet.

.. _insert/graph/properties:

Chart properties
----------------

When you insert a chart into a spreadsheet, the chart properties appear on the right side of the
screen. Access these at any time via the :guilabel:`Data` menu by clicking the relevant chart, as
prefaced by the :icon:`fa-bar-chart` icon. Alternatively, hover over the chart then click the
:icon:`fa-bars` icon and click :icon:`fa-pencil-square-o` :guilabel:`Edit`.

In the chart properties, the :guilabel:`Configuration` and :guilabel:`Design` tabs let you modify
various elements of the chart.

The :guilabel:`Configuration` tab includes the following sections:

- :guilabel:`Chart type`: the type of chart you selected in the graph view in the database before
  inserting the chart in the spreadsheet.

  Once a chart has been inserted, more chart types are available; click the drop-down menu to select
  the most appropriate chart type for the data.

  .. tabs::

     .. tab:: Line

        .. image:: insert/chart-type-line.png
           :alt: Line chart icon

        :guilabel:`Line`: best for showing trends or changes over time, such as sales
        growth across months or temperature variations.

        .. image:: insert/chart-type-line-stacked.png
           :alt: Stacked line chart icon

        :guilabel:`Stacked Line`: useful for visualizing cumulative trends where multiple series
        contribute to a total, like revenue by department over time.

        .. image:: insert/chart-type-line-combo.png
           :alt: Combo chart icon

        :guilabel:`Combo`: combines multiple chart types (e.g., bars and lines) to compare
        different data types or highlight key metrics alongside trends.

     .. tab:: Column

        .. image:: insert/chart-type-column.png
           :alt: Column chart icon

        :guilabel:`Column`: ideal for comparing values across discrete categories, such as sales per
        product or revenue by region.

        .. image:: insert/chart-type-column-stacked.png
           :alt: Stacked column chart icon

        :guilabel:`Stacked Column`: displays part-to-whole relationships within categories, such as
        regional contributions to total sales.

     .. tab:: Bar

        .. image:: insert/chart-type-bar.png
           :alt: Bar chart icon

        :guilabel:`Bar`: similar to a column chart but horizontal, making it better for comparing long
        category names or datasets.

        .. image:: insert/chart-type-bar-stacked.png
           :alt: Stacked bar chart icon

        :guilabel:`Stacked Bar`: highlights cumulative contributions across categories, often used in
        demographic or resource allocation analysis.

     .. tab:: Area

        .. image:: insert/chart-type-area.png
           :alt: Area chart icon

        :guilabel:`Area`: similar to a line chart but fills the area beneath the lines to emphasize
        magnitude, perfect for cumulative metrics over time.

        .. image:: insert/chart-type-area-stacked.png
           :alt: Stacked area chart icon

        :guilabel:`Stacked Area`: visualizes the composition of changes over time, such as market
        share by product category.

     .. tab:: Pie

        .. image:: insert/chart-type-pie.png
           :alt: Pie chart icon

        :guilabel:`Pie`: best for showing proportions or percentages of a whole, such as market share
        or budget allocation.

        .. image:: insert/chart-type-doughnut.png
           :alt: Doughnut chart icon

        :guilabel:`Doughnut`: A variation of the pie chart with a hollow center, offering similar use
        cases but with a modern aesthetic.

     .. tab:: Miscellaneous

        .. image:: insert/chart-type-scatter.png
           :alt: Scatter chart icon

        :guilabel:`Scatter`: ideal for analyzing relationships or correlations between two numerical
        variables, such as price vs. quantity sold.

        .. image:: insert/chart-type-waterfall.png
           :alt: Waterfall chart icon

        :guilabel:`Waterfall`: ideal for visualizing cumulative effects of sequential positive and
        negative values, such as profit/loss analysis.

        .. image:: insert/chart-type-population-pyramid.png
           :alt: Population pyramid chart icon

        :guilabel:`Population Pyramid`: a specialized chart for comparing distributions, often used in
        demographics, such as age and gender group analysis.

        .. image:: insert/chart-type-radar.png
           :alt: Radar chart icon

        :guilabel:`Radar`: displays multivariate data as a polygon on axes radiating from a center,
        allowing for profile comparisons across multiple variables.

        .. image:: insert/chart-type-filled-radar.png
           :alt: Radar chart icon

        :guilabel:`Filled Radar`: fills the area within the radar chart's polygon, emphasizing the
        overall magnitude of values across different attributes for comparison.

     .. tab:: Other

        When creating a chart in a spreadsheet, rather than inserting one from a database view, the
        following chart types are also available:

        .. image:: insert/chart-type-gauge.png
           :alt: Gauge chart icon

        :guilabel:`Gauge`: displays progress toward a goal or a single key metric, such as performance
        against a target.

        .. image:: insert/chart-type-scorecard.png
           :alt: Scorecard icon

        :guilabel:`Scorecard`: used to summarize key performance indicators (KPIs) in a compact
        format, such as total sales or conversion rates, and compare to a baseline or a previous
        value.

        .. image:: insert/chart-type-geo.png
           :alt: Radar chart icon

        :guilabel:`Geo`: visualizes data on a map using color variations to represent values or
        categories across different geographical regions.

- :guilabel:`Domain`: the rules used to determine which records are shown. Click
  :ref:`Edit domain <search/custom-filters>` to add or edit rules.
- :guilabel:`Link to Odoo menu`: to add a :ref:`clickable link <insert/clickable-links>` from a
  chart to an Odoo menu, i.e., i.e, a view of a specific model.

Depending on the chart type, the :guilabel:`Design` tab has one or more sections.

The :guilabel:`General` section lets you modify the following elements of any chart type:

- :guilabel:`Background color`: Add or change the background color by clicking on the circle. Choose
  one of the standard colors or click the :icon:`fa-plus` icon to manually select a custom color.
- :guilabel:`Chart title`: Edit the chart title or rename the chart. The font formatting, horizontal
  alignment, size and color of the title can be modified using the editor.
- :guilabel:`Legend position`: Change the position of the legend or opt to have no legend.
- :guilabel:`Values`: Enable :guilabel:`Show values` to add numeric values to the data points on the
  chart.

For charts with a horizontal and vertical axis, the :guilabel:`Axes` section lets you add a title to
one or both axes. The font formatting, horizontal alignment, size and color of the title can be
modified using the editor.

For charts other than :guilabel:`Pie` and :guilabel:`Doughnut` charts, depending on the chart type,
the :guilabel:`Data series` section lets you modify aspects such as:

- the color of the data series
- the name of the data series
- whether the vertical axis is placed on the left or right
- adding a trend line; this can be :guilabel:`Linear`, :guilabel:`Exponential`,
  :guilabel:`Polynomial`, :guilabel:`Logarithmic` or :guilabel:`Trailing moving average` and the
  trend line color can be modified

:guilabel:`Waterfall` charts have a dedicated :guilabel:`Waterfall design` section.

.. _insert/clickable-links:

Insert clickable links
======================

Adding links to related or supporting information can make your report or dashboard more
user-friendly and effective.

You can :ref:`insert a clickable link from any spreadsheet cell <insert/clickable-links/cell>` to:

  - another sheet inside the same spreadsheet
  - an Odoo menu, i.e, a view of a specific model
  - an external url

You can :ref:`insert a clickable link from any chart <insert/clickable-links/chart>` to an Odoo
menu, i.e, a view of a specific model.

.. note::
   It is also possible to insert a clickable link to an Odoo menu in a spreadsheet starting from the
   model itself. However, as this method inserts each new link in a new sheet, it more efficient to
   create links to Odoo menus starting from the spreadsheet.

.. _insert/clickable-links/cell:

Insert a clickable link from a cell
-----------------------------------

To insert a clickable link from a cell:

#. Click :menuselection:`Insert -->` :icon:`fa-link` :guilabel:`Link` from the menu bar or
   right-click on the cell then click :icon:`fa-link` :guilabel:`Insert link`. Next, depending on
   the desired outcome, perform one of the following actions:

   - click the :icon:`fa-bars` (menu) icon, then :guilabel:`Link sheet`, then choose the relevant sheet
     from the current spreadsheet.
   - click the :icon:`fa-bars` (menu) icon, then :guilabel:`Link an Odoo menu`. Select the relevant menu
     from the list or click :guilabel:`Search more` to choose from a list of all menu items. Click
     :guilabel:`Confirm`.
   - under :guilabel:`Link`, type a url.

#. Enter or edit the label for the link in the :guilabel:`Text` field.
#. Click :guilabel:`Confirm`.

.. _insert/clickable-links/chart:

Insert a clickable link from a chart
------------------------------------

To insert a clickable link from a chart to an Odoo menu:

#. Hover over the top right of the chart's box then click the :icon:`fa-bars` icon, then
   :icon:`fa-pencil-square-o` :guilabel:`Edit`. The chart properties appear at the right of the
   screen.
#. At the bottom of the :icon:`fa-sliders` :guilabel:`Configuration` tab of the chart properties
   pane, click under :guilabel:`Link to Odoo menu` then select a menu.

   Hover over the top right of the chart's box to see that a new :icon:`fa-external-link` icon has
   been added.

.. tip::
   Clicking on a data point in a chart takes you to the relevant database view. In the example
   below, clicking on :guilabel:`Jessica Childs` takes to the list view of all sales by this
   salesperson that match the domain of the chart.

   .. image:: insert/clickable-link-chart.png
      :alt: A clickable link to an Odoo menu plus clickable data point

.. _insert/financial-data:

Insert financial data
=====================

When building reports and dashboards, it may be useful to include certain accounting-related data,
such as account IDs, credits and debits for specific accounts, and dates of the start and end of the
tax year.

:ref:`Odoo-specific spreadsheet functions <spreadsheet/functions/odoo>` exist that allow you to
retrieve such accounting data from your database and insert them in a spreadsheet.
