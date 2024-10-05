===================
Production analysis
===================

.. |MO| replace:: :abbr:`MO (manufacturing order)`
.. |MOs| replace:: :abbr:`MOs (manufacturing orders)`

The *Production Analysis* report provides statistics about products manufactured using Odoo's
*Manufacturing* app. The report is useful when trying to understand production costs, manufacturing
durations, and other important statistics about manufactured products.

To open the Production Analysis report, navigate to :menuselection:`Manufacturing app --> Reporting
--> Production Analysis`.

.. important::
   The :guilabel:`Production Analysis` report is one of many reports available across the Odoo app
   suite. This documentation only covers the measures specific to the :guilabel:`Production
   Analysis` report, along with a few use case examples.

   For a full overview of the basic features available in most Odoo reports, see the documentation
   on :doc:`reporting essentials <../../../essentials/reporting>`.

Measures
========

*Measures* are the datasets that can be selected in the :guilabel:`Production Analysis` report. Each
dataset represents a specific statistic about |MOs| in the database. Choose a measure by clicking
the :guilabel:`Measures` :icon:`fa-caret-down` button, and selecting one of the options from the
drop-down menu:

The options displayed in the :guilabel:`Measures` :icon:`fa-caret-down` drop-down menu, and the
order they appear in, differ depending on the filters, groupings, and comparisons enabled in the
:guilabel:`Search...` bar. By default, the available measures appear as follows:

- :guilabel:`Average Employee Cost/Unit`: the average cost paid to employees to produce one unit of
  the product.
- :guilabel:`By-Products Total Cost`: the total value of all by-products created by manufacturing
  the product.
- :guilabel:`Component Cost/Unit`: the average cost of the components required to produce one unit
  of the product.
- :guilabel:`Cost/Unit`: the average cost of producing one unit of the product, including component,
  employee, operation, and subcontracting costs.
- :guilabel:`Duration of Operations/Unit`: the average total duration of operations required to
  produce one unit of the product.
- :guilabel:`Quantity Demanded`: the total number of units of the product included in |MOs|.
- :guilabel:`Quantity Produced`: the total number of units of the product that have actually been
  produced.
- :guilabel:`Total Component Cost`: the total amount spent on the product's components, across every
  |MO| for the product.
- :guilabel:`Total Cost`: the total amount spent manufacturing every unit of the product produced so
  far.
- :guilabel:`Total Duration of Operations`: the cumulative duration of every operation completed
  while manufacturing the product.
- :guilabel:`Total Employee Cost`: the cumulative amount paid to employees to manufacture the
  product.
- :guilabel:`Total Operation Cost`: the cumulative amount spent on operations required to produce
  the product.
- :guilabel:`Total Operation Cost/Unit`: the average cost of the operations required to produce one
  unit of the product.
- :guilabel:`Total Subcontracting Cost`: the cumulative amount paid to subcontractors to produce the
  product.
- :guilabel:`Total Subcontracting Cost/Unit`: the average cost of engaging a subcontractor to
  produce one unit of the product.
- :guilabel:`Yield Percentage (%)`: the total quantity of the product produced versus the total
  quantity demanded, represented as a percentage.
- :guilabel:`Count`: the total count of |MOs| created for the product.

.. tip::
   Only one measure can be selected at a time when one of the :icon:`fa-area-chart`
   :guilabel:`(graph view)` options is enabled. However, multiple measures, and varying group-by
   criteria (on the x and y axes), can be selected when using the :icon:`oi-view-pivot`
   :guilabel:`(pivot table)`.

Use case: compare products
==========================

One of the best uses for the :guilabel:`Production Analysis` report is comparing statistics about
two or more products. This is accomplished by entering the products into the :guilabel:`Search...`
bar, then selecting the necessary measure, filter, and grouping, to see the desired data.

.. example::
   Toy manufacturer *Tommy's Toys* is trying to reduce their manufacturing operation costs. To
   accomplish this, they have decided to identify redundant products and cease manufacturing the
   ones with higher operational costs.

   Two of the toys that have been singled out for analysis are the *pogo stick* and *moon shoes*.
   Tommy's Toys believes these two toys are so similar that they can stop manufacturing one, without
   significantly impacting their product offering.

   To compare operation costs for the toys, business analyst Mike opens the
   :menuselection:`Manufacturing` app, and navigates to the :guilabel:`Production Analysis` page. In
   the :guilabel:`Search...` bar, he enters the names of both products. Then, he opens the
   :guilabel:`Search...` bar drop-down menu, and clicks :guilabel:`Product` in the :guilabel:`Group
   By` section.

   Below the :guilabel:`Search...` bar, Mike clicks on the :guilabel:`Measures`
   :icon:`fa-caret-down` drop-down menu, and selects the :guilabel:`Total Operation Cost/Unit`
   option. Finally, he selects the :icon:`fa-bar-chart` :guilabel:`(bar chart)` graph type.

   With these options selected, the :guilabel:`Production Analysis` report shows a bar chart for the
   current year, with one bar for each product, signifying the average operation cost for one unit
   of the product.

   With this data, Mike is able to see that the average operation cost for the moon shoes is almost
   twice the cost of the pogo stick. Using this insight, Tommy's Toys decides to cease production of
   moon shoes, thus lowering their average cost of manufacturing operations.

   .. image:: production_analysis/use-case.png
      :align: center
      :alt: The bar chart comparing the operation costs of the pogo stick and moon shoes.

Use case: compare time periods
==============================

The :guilabel:`Production Analysis` report can also be used to compare data for two different time
periods. This is accomplished using the options in the :guilabel:`Comparison` section of the
:guilabel:`Search...` bar.

.. example::
   Furniture company *Fanny's Furnishings* wants to compare their production costs for the first and
   second quarters of 2024, to see which products they spent the most money producing in each
   quarter.

   To compare the two time periods, shop floor supervisor Adam opens the
   :menuselection:`Manufacturing` app, and navigates to the :guilabel:`Production Analysis` page. He
   begins by selecting the :icon:`fa-pie-chart` :guilabel:`(pie chart)` graph type option at the top
   of the page.

   .. important::
      The :guilabel:`Comparison` feature is meant to be used with the :icon:`fa-pie-chart`
      :guilabel:`(pie chart)` graph type, or the :icon:`oi-view-pivot` :guilabel:`(pivot)` view.

      A :guilabel:`Comparison` option can still be selected with the other view types enabled, but
      doing so does not change the way data is displayed on the report.

   Next, Adam selects the :guilabel:`Total Cost` option from the :guilabel:`Measures`
   :icon:`fa-caret-down` drop-down menu. This option displays the total amount spent producing each
   product.

   In the :guilabel:`Search...` bar drop-down menu, he leaves the :guilabel:`2024` filter enabled in
   the :guilabel:`End Date` section, and enables the :guilabel:`Q2` filter as well. With both of
   these time periods selected, the pie chart shows data for the second quarter of 2024.

   Finally, Adam selects the :guilabel:`End Date: Previous Period` option in the
   :guilabel:`Comparison` section of the :guilabel:`Search...` bar. Doing so causes the pie chart to
   be split into an inner circle, and an outer ring.

   The outer ring shows data for the selected time period, quarter two of 2024. The inner circle
   shows data for the previous time period, quarter one of 2024.

   .. note::
      If :guilabel:`End Date: Previous Year` is selected instead of :guilabel:`End Date: Previous
      Period`, the inner circle shows data for the selected time period, one *year* previous.

      In the case of this example, it would show data for quarter two of 2023.

   Using this report, Adam can see that the products with the highest total cost for quarter two are
   the *bicycle* and *tricycle*. On the other hand, in quarter one, the *roller skates* had the
   highest total cost.

   .. image:: production_analysis/comparison.png
      :align: center
      :alt: The pie chart view of the Production Analysis report, with a comparison filter enabled.
