======
Charts
======

Charts present data visually, making them a user-friendly way to show patterns, trends, and
relationships between data.

.. tip::
   Charts can be :ref:`created manually based on spreadsheet data
   <spreadsheet/visualize/create-chart>` or :ref:`inserted directly from an Odoo graph view
   <spreadsheet/insert/chart>`.

.. _spreadsheet/visualize/create-chart:

Create a chart
--------------

To create a chart manually:

#. Select the cells containing the data you want to represent using a chart.
#. Click :menuselection:`Insert --> Chart` from the menu bar.

   .. tip:: Odoo uses the most appropriate :ref:`chart type <spreadsheet/visualize/chart-types>` for
      the selected data; this can be changed in the configuration section of the :ref:`chart
      properties <spreadsheet/visualize/chart-properties>`, which opens on the right side of the
      spreadsheet.

#. Make any desired changes to the configuration or design of the chart in the :ref:`chart
   properties <spreadsheet/visualize/chart-properties>`.

.. _spreadsheet/visualize/chart-types:

Chart types
-----------

When a chart is:

- :ref:`created manually <spreadsheet/visualize/create-chart>`, any of the chart types in the tabs
  below can be selected;
- :ref:`inserted directly from an Odoo graph view <spreadsheet/insert/chart>`, any chart type except
  those
  shown in the :guilabel:`Other` tab can be selected.

.. tabs::

   .. tab:: Line
      .. image:: charts/chart-type-line.png
         :alt: Line chart icon

      :guilabel:`Line`: best for showing trends or changes over time, such as sales
      growth across months or temperature variations.

      .. image:: charts/chart-type-line-stacked.png
         :alt: Stacked line chart icon

      :guilabel:`Stacked Line`: useful for visualizing cumulative trends where multiple series
      contribute to a total, like revenue by department over time.

   .. tab:: Column

      .. image:: charts/chart-type-column.png
         :alt: Column chart icon

      :guilabel:`Column`: ideal for comparing values across discrete categories, such as sales per
      product or revenue by region.

      .. image:: charts/chart-type-column-stacked.png
         :alt: Stacked column chart icon

      :guilabel:`Stacked Column`: displays part-to-whole relationships within categories, such as
      regional contributions to total sales.

   .. tab:: Area

      .. image:: charts/chart-type-area.png
         :alt: Area chart icon

      :guilabel:`Area`: similar to a line chart but fills the area beneath the lines to emphasize
      magnitude, perfect for cumulative metrics over time.

      .. image:: charts/chart-type-area-stacked.png
         :alt: Stacked area chart icon

      :guilabel:`Stacked Area`: visualizes the composition of changes over time, such as market
      share by product category.

   .. tab:: Pie

      .. image:: charts/chart-type-pie.png
         :alt: Pie chart icon

      :guilabel:`Pie`: best for showing proportions or percentages of a whole, such as market
      share or budget allocation.

   .. tab:: Other

      .. image:: charts/chart-type-line-combo.png
         :alt: Combo chart icon

      :guilabel:`Combo`: combines multiple chart types (e.g., bars and lines) to compare different
      data types or highlight key metrics alongside trends.

      .. image:: charts/chart-type-bar.png
         :alt: Bar chart icon

      :guilabel:`Bar`: similar to a column chart but horizontal, making it better for comparing
      long category names or datasets.

      .. image:: charts/chart-type-bar-stacked.png
         :alt: Stacked bar chart icon

      :guilabel:`Stacked Bar`: highlights cumulative contributions across categories, often used
      in demographic or resource allocation analysis.

      .. image:: charts/chart-type-doughnut.png
         :alt: Doughnut chart icon

      :guilabel:`Doughnut`: A variation of the pie chart with a hollow center, offering similar
      use cases but with a modern aesthetic.

      .. image:: charts/chart-type-scatter.png
         :alt: Scatter chart icon

      :guilabel:`Scatter`: ideal for analyzing relationships or correlations between two numerical
      variables, such as price vs. quantity sold.

      .. image:: charts/chart-type-gauge.png
         :alt: Gauge chart icon

      :guilabel:`Gauge`: displays progress toward a goal or a single key metric, such as
      performance against a target.

      .. image:: charts/chart-type-scorecard.png
         :alt: Scorecard icon

      :guilabel:`Scorecard`: used to summarize key performance indicators (KPIs) in a compact
      format, such as total sales or conversion rates, and compare to a baseline or a previous
      value.

      .. image:: charts/chart-type-waterfall.png
         :alt: Waterfall chart icon

      :guilabel:`Waterfall`: ideal for visualizing cumulative effects of sequential positive and
      negative values, such as profit/loss analysis.

      .. image:: charts/chart-type-population-pyramid.png
         :alt: Population pyramid chart icon

      :guilabel:`Population Pyramid`: a specialized chart for comparing distributions, often used
      in demographics, such as age and gender group analysis.

.. _spreadsheet/visualize/chart-properties:

Chart properties
----------------

When you :ref:`create a chart manually <spreadsheet/visualize/create-chart>` or :ref:`insert a
chart from an Odoo graph view <spreadsheet/insert/chart>` into a spreadsheet, the chart properties
appear in a pane on the right side of the spreadsheet. Here, it is possible to modify various
aspects of the chart's configuration and design via the :icon:`fa-sliders` :ref:`Configuration
<spreadsheet/visualize/charts-configuration>` and :icon:`fa-paint-brush` :ref:`Design
<spreadsheet/visualize/charts-design>` tabs respectively.

.. tip::
   A chart's properties can be accessed at any time, as follows:

   - For any chart, whether manually created or inserted from an Odoo view, hover over
     the chart then click the :icon:`fa-bars` :guilabel:`(menu)` icon and click
     :icon:`fa-pencil-square-o` :guilabel:`Edit`.
   - For a chart inserted from an Odoo graph view, click :guilabel:`Data` on the menu bar then
     select the relevant chart, as prefaced by the :icon:`fa-bar-chart` :guilabel:`(chart)` icon,
     e.g., :icon:`fa-bar-chart` *(#1) Sales Analysis*.

.. _spreadsheet/visualize/charts-configuration:

Configuration
~~~~~~~~~~~~~

The :icon:`fa-sliders` :guilabel:`Configuration` tab includes the following sections:

- :ref:`Chart type <spreadsheet/visualize/chart-types>`: the type of chart. For a chart that has
  been:

  - manually created, this is by default the chart type suggested by Odoo;
  - inserted from an Odoo graph view, this is by default the type of chart selected in the graph
    view before the chart was inserted in the spreadsheet.

  To change the chart type, click the dropdown menu to select the desired chart type.

- :guilabel:`Domain`: the rules used to determine which records are shown. Click :ref:`Edit domain
  <search/custom-filters>` to add or edit rules.
- :guilabel:`Link to Odoo menu`: to add a :ref:`clickable link <spreadsheet/insert/clickable-links>`
  from a chart to an Odoo menu item, i.e., a specific view of a model.

.. _spreadsheet/visualize/charts-design:

Design
~~~~~~

Depending on the chart type, the :icon:`fa-paint-brush` :guilabel:`Design` tab has one or more
sections.

The :guilabel:`General` section lets you modify the following elements:

- :guilabel:`Background color`: Add or change the background color by clicking on the color dot.
  Choose one of the standard colors or click the :icon:`fa-plus` icon to manually select a custom
  color.
- :guilabel:`Chart title`: Edit the chart title, if needed. The font formatting, horizontal
  alignment and color of the title can be modified using the editor.
- :guilabel:`Vertical axis position`: Choose whether the vertical axis is placed on the left or
  right in line, column, and area charts.
- :guilabel:`Legend position`: Change the position of the legend or opt to have no legend.
- Enable :guilabel:`Show values` to add numeric values to the data points on the
  chart.
- Enable :guilabel:`Show trend line` to add a trend line to line, column, and area charts.

For line, column, and area charts, the :guilabel:`Axis` section lets you add a title to one or both
axes. The font formatting, horizontal alignment, and color of the title can be modified using the
editor.
