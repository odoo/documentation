======
Charts
======

Charts present data visually, making them a user-friendly way to show patterns, trends, and
relationships between data.

.. tip::
   Charts can be :ref:`created manually based on spreadsheet data
   <spreadsheet/charts/create>` or :doc:`inserted directly from an Odoo graph view
   <../insert/insert_chart>`.

.. _spreadsheet/charts/create:

Create a chart
--------------

To create a chart manually:

#. Select the cells containing the data to represent using a chart.
#. Click :menuselection:`Insert -->` :icon:`bar_chart` :menuselection:`Chart` from the menu bar.

   .. note:: Odoo uses the most appropriate :ref:`chart type
      <spreadsheet/charts/customize-configuration-type>` for the selected data; this can be changed
      in the :icon:`tune` :ref:`Configuration <spreadsheet/charts/customize-configuration>` tab of
      the chart properties.

Once the chart has been created, it can be :ref:`customized <spreadsheet/charts/customize>` via the
chart properties.

.. _spreadsheet/charts/customize:

Customize charts
----------------

A chart that has been :ref:`created manually <spreadsheet/charts/create>` or :doc:`inserted
from an Odoo graph view <../insert/insert_chart>` can be further customized via the
chart properties, which open in a panel to the right of the spreadsheet.

Here, it is possible to modify various aspects of the chart's configuration and design via the
:icon:`tune` :ref:`Configuration <spreadsheet/charts/customize-configuration>` and
:icon:`design_services` :ref:`Design <spreadsheet/charts/customize-design>` tabs respectively.

.. tip::
   A chart's properties can be accessed at any time, as follows:

   - For any chart, whether manually created or inserted from an Odoo view, hover over
     the chart, click the :icon:`more_vert` :guilabel:`(menu)` icon, then click
     :icon:`edit_square` :guilabel:`Edit`.
   - For a chart inserted from an Odoo graph view, click :guilabel:`Data` on the menu bar, then
     select the relevant chart from the :icon:`bar_chart` :guilabel:`Charts` section.

.. _spreadsheet/charts/customize-configuration:

Configuration tab
~~~~~~~~~~~~~~~~~

The :icon:`tune` :guilabel:`Configuration` tab includes the following fields:

- :ref:`Chart type <spreadsheet/charts/customize-configuration-type>`: the type of chart. For a
  chart that has been:

  - manually created, this is by default the chart type suggested by Odoo;
  - inserted from an Odoo graph view, this is by default the type of chart selected in the graph
    view before the chart was inserted into the spreadsheet.

  Click the dropdown menu to select a different chart type.

- :guilabel:`Model` and :guilabel:`Domain`: for a chart inserted from an Odoo graph view, the model
  from which the data has been extracted and rules used to determine which records are shown,
  respectively. Click :icon:`east` :ref:`Edit domain <search/custom-filters>` to add or edit rules.
- :guilabel:`Link to Odoo menu`: to add a :doc:`clickable link <../insert/insert_clickable_links>`
  from a chart to an Odoo menu item, i.e., a specific view of a model.

Depending on the chart type, other fields may also be displayed.

.. _spreadsheet/charts/customize-configuration-type:

Chart types
***********

When a chart is:

- :ref:`created manually <spreadsheet/charts/create>`, any of the chart types in the tabs below can
  be selected;
- :doc:`inserted directly from an Odoo graph view <../insert/insert_chart>`, any chart type except
  those shown in the :guilabel:`Other` tab can be selected.

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

      .. image:: charts/chart-type-funnel.png
         :alt: Funnel chart icon

      :guilabel:`Funnel`: visualizes data that progressively decreases over stages of a process,
      with the option to display cumulative data for each stage.

   .. tab:: Other

      When creating a chart from spreadsheet data, rather than inserting one from a graph view,
      the following chart types are also available:

      .. image:: charts/chart-type-bubble.png
         :alt: Bubble chart icon

      :guilabel:`Bubble`: Visualizes multi-dimensional data across categories using circle size and
      position.

      .. image:: charts/chart-type-gauge.png
         :alt: Gauge chart icon

      :guilabel:`Gauge`: displays progress toward a goal or a single key metric, such as
      performance against a target.

      .. image:: charts/chart-type-scorecard.png
         :alt: Scorecard icon

      :guilabel:`Scorecard`: used to summarize key performance indicators (KPIs) in a compact
      format, such as total sales or conversion rates, and compare to a baseline or a previous
      value.

      .. image:: charts/chart-type-geo.png
         :alt: Geo chart icon

      :guilabel:`Geo`: visualizes data on a map using color variations to represent values or
      categories across different geographical regions.

      .. image:: charts/chart-type-calendar.png
         :alt: Calendar chart icon

      :guilabel:`Calendar`: shows activity over a long, continuous span of time, such as
      months or years. This chart type can be used to illustrate fluctuations based on e.g.,
      specific days of the week or for tracking long-term trends.

.. _spreadsheet/charts/customize-design:

Design tab
~~~~~~~~~~

The :icon:`design_services` :guilabel:`Design` tab contains several sections, depending on the
:ref:`type of chart <spreadsheet/charts/customize-configuration-type>`. The fields and options
available within sections may also vary depending on the chart type.

.. _spreadsheet/charts/design-general:

General
*******

The :guilabel:`General` section allows the following elements to be modified:

- :guilabel:`Background color`: Add or change the background color by clicking the color dot, then
  :ref:`choosing the desired color <spreadsheet/charts/design-color>`.
- :guilabel:`Chart title`: Edit the chart title, if needed. The font formatting, horizontal
  alignment, font size, and color of the title can be modified using the editor.
- :guilabel:`Legend position`: Change the position of the legend or opt to have no legend.
- :guilabel:`Show values`: Add numeric values to the data points on the chart.
- :guilabel:`Zoom`: Enable :guilabel:`Show slicer` to be able to zoom in on a portion of the
  horizontal axis and scroll forwards and backwards.
- :guilabel:`Number formatting`: Enable :guilabel:`Use compact format` to display, e.g., $200k
  instead of $200,000.00.

.. _spreadsheet/charts/design-color:

.. tip::
   To choose a color from the color selector, use one of the following methods:

   - select one of the standard colors
   - click the :icon:`add_circle` :guilabel:`(plus)` icon to manually select a custom color
   - click the :icon:`colorize` :guilabel:`(dropper)` icon to copy any color from the device's
     screen

.. _spreadsheet/charts/design-annotation:

Annotation
**********

The :guilabel:`Annotation` section allows the addition of :guilabel:`Text` to provide context or
additional information about the chart and/or a :guilabel:`See more link`.

.. tip::
   Annotations added to a chart can be viewed by hovering over the chart, then clicking the
   :icon:`info` :guilabel:`(Chart Info)` icon in the top right corner.

.. _spreadsheet/charts/design-data-series:

Data Series
***********

The :guilabel:`Data Series` section allows the following elements to be modified:

- :guilabel:`Series color`: With the relevant data series selected, change the color of the related
  data points on the chart by clicking on the color dot and :ref:`choosing the desired color
  <spreadsheet/charts/design-color>`.
- :guilabel:`Series name`: Edit the name of a data series, if needed.
- :guilabel:`Series type`: For each data series of a :guilabel:`Combo` chart, determine whether the
  series is shown as a :guilabel:`Bar` or :guilabel:`Line`.
- :guilabel:`Vertical axis`: For the selected data series of a :guilabel:`Line`, :guilabel:`Area`,
  or :guilabel:`Column` chart, select whether it should be displayed on the :guilabel:`Left`
  (primary) or :guilabel:`Right` (secondary) vertical axis.
- :guilabel:`Trend line`: With the relevant data series selected, enable :guilabel:`Show trend line`
  then select the :guilabel:`Type` of trend line: :guilabel:`Linear`, :guilabel:`Exponential`,
  :guilabel:`Polynomial`, :guilabel:`Logarithmic`, or :guilabel:`Trailing moving average`. To change
  the color of the trend line, click the color dot, then :ref:`choose the desired color
  <spreadsheet/charts/design-color>`.

.. _spreadsheet/charts/design-axes:

Axes
****

The :guilabel:`Axes` section allows the following elements to be modified:

- :guilabel:`Axis title`: Add a title to the :guilabel:`Horizontal axis` or :guilabel:`Vertical
  axis`. The font formatting, horizontal alignment, font size, and color of the
  title can be modified using the editor.

- For horizontal or vertical axes that display numerical scales, it is also possible to modify the
  following elements:

  - :guilabel:`Axis range`: To restrict the range shown by an axis, enter a minimum and/or maximum
    value. This can be used, for example, to avoid having empty space at the bottom of a chart if
    all the values are well above zero, or to focus on a specific range of data.
  - :guilabel:`Gridlines`: By default, only major horizonal/vertical gridlines are shown. Enable
    minor horizonal/vertical gridlines if desired.

.. _spreadsheet/charts/design-pie-slice:

Pie Slice
*********

The :guilabel:`Pie Slice` section allows the color of pie chart slices, or categories of data, to be
modified. With the relevant data series selected, change the color of the related pie chart slice by
clicking the color dot and :ref:`choosing the desired color <spreadsheet/charts/design-color>`.

.. _spreadsheet/charts/design-other:

Other chart type-specific sections
**********************************

Sunburst, treemap, bubble, gauge, scorecard, waterfall, geo, funnel, and calendar charts have
dedicated design sections.

.. _spreadsheet/charts/manage:

Manage charts
-------------

.. _spreadsheet/charts/manage-basic-actions:

Basic actions
~~~~~~~~~~~~~

Hover over a chart, then click the :icon:`more_vert` :guilabel:`(menu)` icon to reveal the following
options:

- :icon:`edit_square` :guilabel:`Edit` to open the chart's properties, where various aspects of the
  chart's configuration and design can be :ref:`customized <spreadsheet/charts/customize>`.

- :icon:`assignment` :guilabel:`Copy` or :icon:`os-cut` :guilabel:`Cut` to copy or cut a chart
  with the intention of pasting it *within the same spreadsheet*. Alternatively, with the chart
  selected, use the relevant keyboard shortcut to copy or cut the chart.

  Paste the chart in the desired location by clicking :menuselection:`Edit -->` :icon:`os-paste`
  :menuselection:`Paste` from the menu bar or use the relevant keyboard shortcut.

  .. note::
     For a chart inserted from an Odoo graph view, copying/cutting and pasting a chart in this way
     maintains the :ref:`link between the chart and the database
     <spreadsheet/insert/data-sources>`. The data in the pasted chart remains up-to-date, and
     :ref:`clicking on a data point <spreadsheet/insert/accessing-data>` opens the related list view
     in the database.

- :icon:`os-copy-as-image` :guilabel:`Copy as image` to copy an image of a chart to the clipboard
  with the intention of pasting it *in any location within or outside the spreadsheet*.

  Paste the image in the desired location using the paste function of the destination program or the
  relevant keyboard shortcut.

  .. note::
     For a chart inserted from an Odoo graph view, copying and pasting a static image of a chart
     implies there is no longer any link between the chart and the database.

- :icon:`download` :guilabel:`Download` to download an image of the chart as a `PNG` file.

- :icon:`delete` :guilabel:`Delete` to delete a chart from the spreadsheet. Alternatively, use
  the relevant keyboard command to delete a chart.

  .. note::
     For a chart inserted from an Odoo graph view, deleting a chart also deletes the chart's
     underlying :ref:`data source <spreadsheet/insert/data-sources>`.

.. _spreadsheet/charts/manage-reposition-resize:

Reposition or resize charts
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Reposition a chart within the same sheet by dragging it to the desired position; to reposition
multiple items at once, e.g., images, charts, or carousels, hold `CTRL` or `SHIFT` (or `Command`),
select the items, then drag them to the desired position.

Resize a chart by selecting it, then dragging the blue markers until the chart is the desired size.

      .. image:: charts/resize-chart.png
         :alt: Resize a chart using the blue markers
