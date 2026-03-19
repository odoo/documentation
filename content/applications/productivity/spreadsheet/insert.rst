:show-content:

============================
Insert and link to Odoo data
============================

.. toctree::
   :titlesonly:

   insert/insert_list
   insert/insert_pivot_table
   insert/insert_chart
   insert/insert_clickable_links
   insert/insert_financial_data

Several elements from your Odoo database can be inserted into an Odoo spreadsheet, namely:

- :doc:`lists <insert/insert_list>`, i.e., data from a :ref:`list view
  <studio/views/multiple-records/list>`
- :doc:`pivot tables <insert/insert_pivot_table>`, i.e., data from a :ref:`pivot view
  <studio/views/reporting/pivot>`
- :doc:`charts <insert/insert_chart>`, i.e., data from a :ref:`graph view
  <studio/views/reporting/graph>`

Each time a list, pivot table, or chart is inserted, a :ref:`data source
<spreadsheet/insert/data-sources>` is created, directly connecting the spreadsheet to the
underlying data.

.. note::
   - Lists, pivot tables, and charts from different apps and models can be inserted into the same
     spreadsheet.
   - It is also possible to :ref:`insert a pivot table that retrieves Odoo data directly from an
     Odoo spreadsheet <spreadsheet/insert_pivot_table/from_spreadsheet>`.

.. tip::
   If you intend to use :doc:`global filters <work_with_data/global_filters>` to dynamically filter
   Odoo data in a spreadsheet or dashboard, do not use the same conditions to establish the initial
   list, pivot table, or chart in your database.

It is also possible to:

- :doc:`add clickable links <insert/insert_clickable_links>` to Odoo menu items, to other
  sheets of the same spreadsheet, or to external URLs
- :doc:`insert financial data <insert/insert_financial_data>` from your Odoo database using
  Odoo-specific spreadsheet :doc:`functions <work_with_data/functions>`

.. _spreadsheet/insert/data-sources:

Data sources
============

When you :doc:`insert a list <insert/insert_list>` or :doc:`chart <insert/insert_chart>` from an
Odoo list or chart view into an Odoo spreadsheet, or insert a pivot table referencing Odoo data
:ref:`from an Odoo pivot view <spreadsheet/insert_pivot_table/from_view>` or :ref:`directly from a
spreadsheet <spreadsheet/insert_pivot_table/from_spreadsheet>`, the spreadsheet is automatically
connected to the underlying data thanks to a unique 'data source.'

This connection ensures that the data in the spreadsheet is updated when the corresponding data
in your database changes, and allows you to :ref:`access the underlying data
<spreadsheet/insert/accessing-data>`.

.. note::
   - Data in a list, pivot table, or chart linked to an Odoo model is refreshed every time the
     spreadsheet is opened or the browser page is reloaded. It is also possible to manually refresh
     data by clicking :menuselection:`Data -->` :icon:`os-refresh-data` :menuselection:`Refresh all
     data` from the menu bar.
   - Inserting a pivot table :ref:`from a range of data <spreadsheet/pivot-tables/create>` also
     creates a data source that connects the pivot table to the underlying spreadsheet range.

Each data source is identified by a unique ID, with each source type (i.e., list, pivot table, or
chart) numbered separately, and each new list, pivot table, or chart numbered sequentially, e.g.,
*List #1*, *List #2*, *Pivot #1*, etc.

The properties of a data source can be accessed via the :guilabel:`Data` menu, where they are
identified by their respective :icon:`oi-view-pivot` :guilabel:`(pivot table)`,
:icon:`oi-view-list` :guilabel:`(list)` or :icon:`fa-bar-chart` :guilabel:`(chart)` icon, followed
by their ID and name, e.g., :icon:`oi-view-pivot` *(#1) Sales Analysis by Product*.

   .. image:: insert/list-deleted.png
      :alt: Warning message about unused list

Clicking on a data source opens the related properties in a panel on the right of the spreadsheet.

.. note::
   Deleting an inserted list or pivot table, or deleting the sheet into which it was inserted, does
   not delete the underlying data source; this can only be deleted via the data source's properties.
   Deleting an inserted chart, however, also deletes the underlying data source.

   If an inserted list or pivot table is deleted, but not its data source, a warning appears beside
   the data source in the :guilabel:`Data` menu indicating that the data is not currently being
   used in the spreadsheet.

.. tip::
   - The properties panel can also be opened by right-clicking any cell of an inserted list or pivot
     table, then clicking :icon:`oi-view-list` :guilabel:`See list properties` or
     :icon:`oi-view-pivot` :guilabel:`See pivot properties`, or by clicking the :icon:`fa-bars`
     :guilabel:`(menu)` icon at the top right of an inserted chart, then clicking
     :icon:`fa-pencil-square-o` :guilabel:`Edit`.
   - Once the properties of a specific data source are open, they remain open even when navigating
     between spreadsheet tabs. To close the properties panel, click the :icon:`fa-times`
     :guilabel:`(close)` icon at the top right of the panel.
   - To collapse the properties panel, click the :icon:`fa-angle-double-right` :guilabel:`(double
     chevron)` icon at the top of the panel.
   - To pin the properties panel and allow another panel, such as the :doc:`global filters
     <work_with_data/global_filters>` panel, to open beside it, click the :icon:`fa-thumb-tack` :guilabel:`(pin)`
     icon at the top of the panel.

.. _spreadsheet/insert/accessing-data:

Accessing underlying data
=========================

The underlying data of an inserted list, pivot table, or chart can be accessed at any time. To view:

- an individual record of an **inserted list**, right-click any cell of the relevant row, then
  select :icon:`fa-eye` :guilabel:`See record`
- a list of records referenced by an individual cell of an **inserted pivot table**, right-click the
  cell, then select :icon:`fa-eye` :guilabel:`See records`
- a list of records represented by a data point of an **inserted chart**, click the data point.

.. tip::
   Use the middle mouse button or `Ctrl` + left-click (Microsoft/Linux), or `Command` + left-click
   (Mac OS) to open the results in a new browser tab.

To return to the spreadsheet after viewing the underlying data, click the name of the spreadsheet in
the breadcrumbs at the top of the page.
