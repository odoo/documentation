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
      properties <spreadsheet/visualize/customize-charts>`, which opens on the right side of the
      spreadsheet.

#. Make any desired changes to the configuration or design of the chart in the :ref:`chart
   properties <spreadsheet/visualize/customize-charts>`.

.. _spreadsheet/visualize/customize-charts:

Customize charts
----------------

A chart that has been :ref:`created manually <spreadsheet/visualize/create-chart>` or :ref:`inserted
from an Odoo graph view <spreadsheet/insert/chart>` can be further customized via the
:ref:`chart properties <spreadsheet/visualize/customize-charts>`.

Here, it is possible to modify various aspects of the chart's configuration and design via the
:icon:`fa-sliders` :ref:`Configuration <spreadsheet/visualize/charts-configuration>` and
:icon:`fa-paint-brush` :ref:`Design <spreadsheet/visualize/charts-design>` tabs respectively.

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

.. _spreadsheet/visualize/chart-types:

Chart types
***********

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

      .. image:: charts/chart-type-line-combo.png
         :alt: Combo chart icon

      :guilabel:`Combo`: combines multiple chart types (e.g., bars and lines) to compare different
      data types or highlight key metrics alongside trends.

   .. tab:: Column

      .. image:: charts/chart-type-column.png
         :alt: Column chart icon

      :guilabel:`Column`: ideal for comparing values across discrete categories, such as sales per
      product or revenue by region.

      .. image:: charts/chart-type-column-stacked.png
         :alt: Stacked column chart icon

      :guilabel:`Stacked Column`: displays part-to-whole relationships within categories, such as
      regional contributions to total sales.

   .. tab:: Bar

      .. image:: charts/chart-type-bar.png
         :alt: Bar chart icon

      :guilabel:`Bar`: similar to a column chart but horizontal, making it better for comparing
      long category names or datasets.

      .. image:: charts/chart-type-bar-stacked.png
         :alt: Stacked bar chart icon

      :guilabel:`Stacked Bar`: highlights cumulative contributions across categories, often used
      in demographic or resource allocation analysis.

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

      .. image:: charts/chart-type-doughnut.png
         :alt: Doughnut chart icon

      :guilabel:`Doughnut`: A variation of the pie chart with a hollow center, offering similar
      use cases but with a modern aesthetic.

   .. tab:: Hierarchical

      .. image:: charts/chart-type-sunburst.png
         :alt: Sunburst chart icon

      :guilabel:`Sunburst`: a variation of the doughnut chart with hierarchical rings, showcasing
      part-to-whole relationships across multiple levels.

      .. image:: charts/chart-type-treemap.png
         :alt: Treemap chart icon

      :guilabel:`Treemap`: a multi-level rectangular chart that displays hierarchical data through
      nested rectangles, ideal for illustrating proportions and categories.

   .. tab:: Miscellaneous

      .. image:: charts/chart-type-scatter.png
        :alt: Scatter chart icon

      :guilabel:`Scatter`: ideal for analyzing relationships or correlations between two numerical
      variables, such as price vs. quantity sold.

      .. image:: charts/chart-type-waterfall.png
         :alt: Waterfall chart icon

      :guilabel:`Waterfall`: ideal for visualizing cumulative effects of sequential positive and
      negative values, such as profit/loss analysis.

      .. image:: charts/chart-type-population-pyramid.png
         :alt: Population pyramid chart icon

      :guilabel:`Population Pyramid`: a specialized chart for comparing distributions, often used
      in demographics, such as age and gender group analysis.

      .. image:: charts/chart-type-radar.png
         :alt: Radar chart icon

      :guilabel:`Radar`: displays multivariate data as a polygon on axes radiating from a center,
      allowing for profile comparisons across multiple variables.

      .. image:: charts/chart-type-filled-radar.png
         :alt: Filled radar chart icon

      :guilabel:`Filled radar`: fills the area within the radar chart's polygon, emphasizing the
      overall magnitude of values across different attributes for comparison.

      .. image:: charts/chart-type-geo.png
         :alt: Geo chart icon

      :guilabel:`Geo`: visualizes data on a map using color variations to represent values or
      categories across different geographical regions.

      .. image:: charts/chart-type-funnel.png
         :alt: Funnel chart icon

      :guilabel:`Funnel`: visualizes data that progressively decreases over stages of a process,
      with the option to display cumulative data for each stage.

   .. tab:: Other

      When creating a chart from spreadsheet data, rather than inserting one from a graph view,
      the following chart types are also available:

      .. image:: charts/chart-type-gauge.png
         :alt: Gauge chart icon

      :guilabel:`Gauge`: displays progress toward a goal or a single key metric, such as
      performance against a target.

      .. image:: charts/chart-type-scorecard.png
         :alt: Scorecard icon

      :guilabel:`Scorecard`: used to summarize key performance indicators (KPIs) in a compact
      format, such as total sales or conversion rates, and compare to a baseline or a previous
      value.

.. _spreadsheet/visualize/charts-design:

Design
~~~~~~

Depending on the chart type, the :icon:`fa-paint-brush` :guilabel:`Design` tab has one or more
sections.

The :guilabel:`General` section allows you to modify the following elements:

- :guilabel:`Background color`: Add or change the background color by clicking on the color dot.
  Choose one of the standard colors or click the :icon:`fa-plus` icon to manually select a custom
  color.
- :guilabel:`Chart title`: Edit the chart title, if needed. The font formatting, horizontal
  alignment, font size, and color of the title can be modified using the editor.
- :guilabel:`Legend position`: Change the position of the legend or opt to have no legend.
- Enable :guilabel:`Show values` to add numeric values to the data points on the
  chart.

The :guilabel:`Data Series` section allows you to modify the following elements:

- :guilabel:`Series color`: With the relevant data series selected, change the color of the related
  data points on the chart by clicking on the color dot circle. Choose one of the standard colors or
  click the :icon:`fa-plus` icon to manually select a custom color.
- :guilabel:`Series name`: Edit the name of a data series, if needed.
- :guilabel:`Serie type`: For each data series of a :guilabel:`Combo` chart, determine whether the
  series is shown as a :guilabel:`Bar` or :guilabel:`Line`.
- :guilabel:`Vertical axis`: For the selected data series of a :guilabel:`Line`, :guilabel:`Area`,
  or :guilabel:`Column` chart, select whether it should be displayed on the :guilabel:`Left`
  (primary) or :guilabel:`Right` (secondary) vertical axis.
- :guilabel:`Trend line`: With the relevant data series selected, enable :guilabel:`Show trend line`
  then select the type of trend line from the dropdown; the options are :guilabel:`Linear`,
  :guilabel:`Exponential`, :guilabel:`Polynomial`, :guilabel:`Logarithmic`, and :guilabel:`Trailing
  moving average`. The color of the trend line can be changed by clicking on the color circle.

The :guilabel:`Axes` section allows you add a title to one or both axes of a chart. The font
formatting, horizontal alignment, font size, and color of the title can be modified using the
editor.

Waterfall charts have a dedicated :guilabel:`Waterfall design` section.

.. _spreadsheet/visualize/manage-charts:

Manage charts
-------------

To reposition a chart within the same sheet, select the chart then drag it to the desired position.
Resize a chart by selecting it, then clicking and dragging the blue markers until the chart is the
desired size.

Hovering over the chart reveals a :icon:`fa-bars` :guilabel:`(menu)` icon in the top right corner of
the chart. Click the menu to reveal the following options:

- :icon:`fa-edit` :guilabel:`Edit` to open the :ref:`chart properties
  <spreadsheet/visualize/customize-charts>`, where various aspects of the chart's configuration and
  design can be modified.

- :icon:`fa-clipboard` :guilabel:`Copy` or :icon:`os-cut` :guilabel:`Cut` to copy or cut a chart
  with the intention of pasting it *within the same spreadsheet*. Alternatively, with the chart
  selected, use the relevant keyboard shortcut to copy or cut the chart.

  Paste the chart in the desired location by clicking :menuselection:`Edit -->` :icon:`os-paste`
  :menuselection:`Paste` from the menu bar or use the relevant keyboard shortcut.

  .. note::
     For a chart inserted from an Odoo graph view, copying/cutting and pasting a chart in this way
     maintains the :ref:`link between the chart and your database
     <spreadsheet/insert/data-sources>`. The data in the pasted chart remains up-to-date, and
     :ref:`clicking on a data point <spreadsheet/insert/accessing-data>` opens the related list view
     in the database.

- :icon:`os-copy-as-image` :guilabel:`Copy as image` to copy an image of a chart to your clipboard
  with the intention of pasting it *in any location within or outside your spreadsheet*.

  Paste the image in the desired location using the paste function of the destination program or the
  relevant keyboard shortcut.

  .. note::
     For a chart inserted from an Odoo graph view, copying and pasting a static image of a chart
     implies there is no longer any link between the chart and your database.

- :icon:`fa-download` :guilabel:`Download` to download an image of the chart as as `.png` file.

- :icon:`fa-trash-o` :guilabel:`Delete` to delete a chart from the spreadsheet. Alternatively, use
  your preferred keyboard command to delete a chart.

  .. note::
     For a chart inserted from an Odoo graph view, deleting a chart also deletes the chart's
     underlying :ref:`data source <spreadsheet/insert/data-sources>`.
