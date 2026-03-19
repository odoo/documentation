====================
Insert a pivot table
====================

There are two main ways to integrate live Odoo data into a :doc:`pivot table
<../work_with_data/pivot_tables>` in Odoo Spreadsheet:

- :ref:`Insert a pivot table from an Odoo pivot view <spreadsheet/insert_pivot_table/from_view>`
  into an Odoo spreadsheet, Odoo dashboard, or quote calculator spreadsheet.

- :ref:`Insert a pivot table that retrieves Odoo data directly from an Odoo spreadsheet
  <spreadsheet/pivot-tables/create>`. This option allows you to pull data from any model, including
  models for which no pivot view is available, e.g., the *Sales Order Line* model.

In both cases, the pivot table is connected to the underlying database data thanks to its unique
:ref:`data source <spreadsheet/insert/data-sources>`, which keeps the data up-to-date and allows you
to :ref:`access the underlying data <spreadsheet/insert/accessing-data>` directly from the
spreadsheet. However, it is important to understand the difference between :ref:`static and dynamic
pivot tables <spreadsheet/insert-pivot-table/static-vs-dynamic>` in Odoo.

.. note::
   It is also possible to :ref:`create a pivot table from a range of data
   <spreadsheet/pivot-tables/create>` already present in a spreadsheet. This could be a range of
   static, manually entered data or a range of Odoo data inserted into the spreadsheet, e.g., from
   an Odoo list view.

.. _spreadsheet/insert-pivot-table/static-vs-dynamic:

Static vs dynamic pivot tables
==============================

When a pivot table from an Odoo pivot view is inserted into an Odoo spreadsheet, it is, by default,
a *static* pivot table, where each cell retrieves data from your database via an
:ref:`Odoo-specific function <spreadsheet/insert-pivot-table/static-functions>`. The pivot table's
data is kept up to date, but it does not expand to accommodate new data, e.g., sales data for a new
quarter or for a newly hired salesperson, and its dimensions and measures cannot be
:ref:`manipulated <spreadsheet/pivot-tables/build-manipulate>`.

A static pivot table can be :ref:`converted to a dynamic pivot table
<spreadsheet/insert-pivot-table/static-convert>` to allow the pivot table to evolve with your
business and be manipulated to gain different and deeper insights.

Inserting a pivot table that retrieves Odoo data directly from an Odoo spreadsheet results in a
*dynamic* pivot table, where a single :ref:`Odoo-specific array function
<spreadsheet/insert-pivot-table/dynamic-function>` retrieves data from your database. The
pivot table's data is kept up to date, it expands for new data, and its dimensions and measures can
be manipulated. A pivot table :ref:`inserted from a range of data <spreadsheet/pivot-tables/create>`
is also a dynamic pivot table.

If needed, there are various ways to :ref:`see the individual functions of a dynamic pivot table
<spreadsheet/insert-pivot-table/static-convert>`.

.. _spreadsheet/insert-pivot-table/static-functions:

Static pivot table functions
----------------------------

A static pivot table uses the following :ref:`Odoo-specific functions <spreadsheet/functions/odoo>`
to retrieve the header and field values, respectively, via its :ref:`data source
<spreadsheet/insert/data-sources>`:

.. code-block:: text

   =PIVOT.HEADER(pivot_id, [domain_field_name, …], [domain_value, …])
   =PIVOT.VALUE(pivot_id, measure_name, [domain_field_name, …], [domain_value, …])

The arguments of the functions are as follows:

- `pivot_id`: the ID assigned when the pivot table is inserted. The first pivot table inserted
  in a spreadsheet is assigned pivot ID `1`, the second, pivot ID `2`, etc.
- `domain_field_name`: the technical name of the field used as a dimension, e.g., `user_id`, or, if
  the dimension is a time period, the technical name of the date field, followed by the time period,
  e.g., `date_order:month`.
- `measure_name`: the technical name of what is being measured, followed by the type of aggregation,
  e.g., `product_uom_qty:sum`.
- `domain_value`: the ID of the record, or, if the dimension is a time period, the date or time
  period targeted.

.. tip::
   Clicking on an individual cell displays the related formula, if relevant, in the formula bar. To
   display all the formulas of a spreadsheet at the same time, click :menuselection:`View -->`
   :icon:`fa-eye` :menuselection:`Show --> Formulas` on the menu bar. The example below shows the
   function used to retrieve the total amount of sales for the salesperson :guilabel:`Anita Rodman`
   for :guilabel:`Q2 2024`.

   .. image:: insert_pivot_table/pivot-function-static.png
      :alt: Functions of a static pivot table

.. _spreadsheet/insert-pivot-table/static-convert:

Convert a static pivot table to a dynamic pivot table
-----------------------------------------------------

To :ref:`manipulate the dimensions and measures <spreadsheet/pivot-tables/build-manipulate>` of a
pivot table that has been inserted from an Odoo pivot view, it first has to be converted to a
:ref:`dynamic pivot table <spreadsheet/insert-pivot-table/static-vs-dynamic>`.

There are two main ways to do so:

- **Duplicate the static pivot table from the pivot table properties**: :ref:`Open the pivot table's
  properties panel <spreadsheet/pivot-tables/properties>`, click the :icon:`fa-cog`
  (:guilabel:`gear`) icon at the top right of the pane, then click :icon:`fa-clone`
  :guilabel:`Duplicate`.

  A new data source is created and a dynamic version of the pivot table is inserted into a new
  sheet. The dynamic pivot table has the same styling as the original pivot table.

  .. note::
     When you use this method, your new dynamic pivot table gets the next available pivot ID. This
     means you can create multiple pivot views associated with the same model, but with distinct
     settings, groupings, or calculations.

- **Re-insert the dynamic pivot table from the Data menu**: On the sheet that contains your static
  pivot table, position your cursor in an empty cell. Click :menuselection:`Data -->`
  :icon:`os-insert-pivot` :menuselection:`Re-insert dynamic pivot` from the menu bar, then select
  the relevant pivot table.

  A new, dynamic pivot table appears, with the same styling as the original pivot table.

  .. tip::
     It is also possible to re-insert the dynamic pivot table by entering the :ref:`function of the
     dynamic pivot table <spreadsheet/insert-pivot-table/dynamic-function>` in an empty cell,
     e.g., `=PIVOT(1)`, where `1` is the :ref:`pivot table ID
     <spreadsheet/pivot-tables/properties-id>`. However, with this method, the table styling needs
     to be re-applied manually.

  .. note::
     When you re-insert the dynamic pivot table from the data menu or via the dynamic pivot table
     function, your static and dynamic pivot share the same data source, and, consequently, the same
     pivot ID. To avoid confusion, delete the original static pivot table.

The top-left cell of the new dynamic pivot table contains an :ref:`Odoo-specific array function that
retrieves data <spreadsheet/insert-pivot-table/dynamic-function>` from your your database.

.. _spreadsheet/insert-pivot-table/dynamic-function:

Dynamic pivot table function
----------------------------

Instead of each cell containing a unique function that retrieves data via the :ref:`data source
<spreadsheet/insert/data-sources>`, as in a :ref:`static pivot table
<spreadsheet/insert-pivot-table/static-functions>`, a dynamic pivot table has a single
:ref:`Odoo-specific array function <spreadsheet/functions/odoo>`:

.. code-block:: text

   =PIVOT(pivot_id, [row_count], [include_total], [include_column_titles], [column_count],
    [include_measure_titles] )

This function allows the pivot table to expand automatically to accommodate the results of the
function. The arguments of the function are as follows:

- `pivot_id`: the ID assigned when the pivot table is inserted. The first pivot table
  inserted in a spreadsheet is assigned pivot ID `1`, the second, pivot ID `2`, etc.
- `row_count` and `column_count`: set a value to limit the number of rows and columns respectively.
- `include_total`: set a value of `0` to hide the totals; this can be useful when creating a graph.
- `include_column_titles` and `include_measure_titles`: set a value of `0` to remove the column and
  measure titles respectively.

.. tip::
   To set a value for an argument of the function, with the function open in the formula bar or
   the top-left cell of the pivot table, position your cursor after the pivot ID then type `,` to
   advance to the argument you want to modify. In the example below, adding the value `0` for
   `[include_total]` removes both the row total and column total from the pivot table.

   .. image:: insert_pivot_table/pivot-function-dynamic.png
      :alt: Array function of a dynamic pivot table

.. _spreadsheet/insert-pivot-table/dynamic-convert:

Convert a dynamic pivot table to a static pivot table
-----------------------------------------------------

There are two main ways to convert a dynamic pivot table to a :ref:`static pivot table
<spreadsheet/insert-pivot-table/static-vs-dynamic>`, where each cell has an individual function that
retrieves data from the data source:

- **Re-insert the static pivot table from the Data menu**: On the sheet that contains your dynamic
  pivot table, position your cursor in an empty cell. Click :menuselection:`Data -->`
  :icon:`os-insert-pivot` :menuselection:`Re-insert static pivot` from the menu bar, then select the
  relevant pivot table.

  A new static pivot table appears, with the same styling as the original pivot table. Click on a
  cell to see the function in the formula bar.

- **Use the 'Convert to individual formulas' option**: Right-click on any cell in the pivot table,
  then click :icon:`oi-view-pivot` :guilabel:`Convert to individual formulas`. Every populated cells
  is replaced by an individual function; click on a cell to see the function in the formula bar.

.. tip::
   To see the individual functions behind specific cells of a dynamic pivot table, copy the relevant
   cells and paste them elsewhere in the spreadsheet; click on a pasted cell to see the function in
   the formula bar.

.. _spreadsheet/insert_pivot_table/from_view:

Insert a pivot table from a pivot view
======================================

To insert a pivot table from an :ref:`Odoo pivot view <studio/views/reporting/pivot>` into an Odoo
spreadsheet:

#. With the relevant pivot view open in your database, click :guilabel:`Insert in Spreadsheet`.
#. In the window that opens, edit the :guilabel:`Name of the pivot` if needed. This name is used as
   the sheet name and in the :ref:`pivot table properties
   <spreadsheet/pivot-tables/properties>`, and can be edited later, if needed.

#. Click :guilabel:`Blank spreadsheet` to create a new spreadsheet, or select in which existing
   spreadsheet the pivot table should be inserted.

   .. note::
      When inserting a pivot table into a new spreadsheet, the spreadsheet is saved in the **Odoo
      Documents** app in the :icon:`fa-hdd-o` :guilabel:`My Drive` personal folder.

#. Click :guilabel:`Confirm`.

The pivot table is inserted into a new sheet in the spreadsheet; the sheet name is the pivot table
name followed by the :ref:`pivot table ID <spreadsheet/pivot-tables/properties-id>`, e.g., *Sales
Analysis by Sales Team (Pivot #1)*. By default, the pivot table is a :ref:`static pivot table
<spreadsheet/insert-pivot-table/static-vs-dynamic>`, where each cell contains an :ref:`Odoo-specific
function <spreadsheet/insert-pivot-table/static-functions>` that retrieves data from your database.

A panel on the right side of the spreadsheet shows the :ref:`pivot table properties
<spreadsheet/pivot-tables/properties>`.

.. tip::
   - To allow the pivot table to be manipulated, :ref:`convert it to a dynamic pivot table
     <spreadsheet/insert-pivot-table/static-convert>`.
   - To sever the link between an inserted pivot table and your database, select the entire pivot
     table, right-click and select :icon:`fa-clone` :guilabel:`Copy`, then right-click again and
     select :menuselection:`Paste special --> Paste as value`.

.. seealso::
   :ref:`Manipulate a pivot table <spreadsheet/pivot-tables/build-manipulate>`

.. _spreadsheet/insert_pivot_table/from_spreadsheet:

Insert a pivot table that retrieves Odoo data from a spreadsheet
================================================================

To insert a pivot table using Odoo data directly from an Odoo spreadsheet:

#. Open the relevant Odoo spreadsheet from the **Documents** app or :ref:`create a new blank
   spreadsheet <spreadsheet/get-started/create-spreadsheet>`.
#. Click :menuselection:`Insert -->` :icon:`oi-view-pivot` :menuselection:`Pivot table`
   :icon:`fa-caret-right` :menuselection:`From Odoo data` from the menu bar.
#. In the :guilabel:`New Odoo Pivot` panel at the right of the sheet, select the :guilabel:`Model`
   from which data should be retrieved, then click :guilabel:`Save`.

A new sheet opens with an empty pivot table in the top-left corner of the sheet; the sheet name is
the model name followed by the :ref:`pivot table ID <spreadsheet/pivot-tables/properties-id>`, e.g.,
*Sales Order (Pivot #1)*. By default, the pivot table is a :ref:`dynamic pivot table
<spreadsheet/insert-pivot-table/static-vs-dynamic>`, where the top-left cell contains an
:ref:`Odoo-specific array function <spreadsheet/insert-pivot-table/dynamic-function>` that
retrieves data from your database once :ref:`columns, rows, and measures have been added
<spreadsheet/pivot-tables/build-manipulate>`.

A panel on the right side of the spreadsheet shows the :ref:`properties of the pivot table
<spreadsheet/pivot-tables/properties>`.

.. seealso::
   :ref:`Build and manipulate a pivot table <spreadsheet/pivot-tables/build-manipulate>`
