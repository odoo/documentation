=============
Insert a list
=============

There are two ways to insert an Odoo list into an Odoo spreadsheet:

- :ref:`Insert a list from an Odoo list view <spreadsheet/insert-list/from-view>` into an Odoo
  spreadsheet, Odoo dashboard, or quote calculator spreadsheet.

- :ref:`Insert a list that retrieves Odoo data directly from an Odoo spreadsheet
  <spreadsheet/insert-list/from-spreadsheet>`. This option allows data to be pulled from any model,
  including models for which no list view is available, e.g., the *Sales Order Line* model.

In both cases, the list is connected to the underlying database data thanks to its unique :ref:`data
source <spreadsheet/insert/data-sources>`, which keeps the data up-to-date and provides :ref:`access
to the underlying data <spreadsheet/insert/accessing-data>` directly from the spreadsheet. However,
whether or not the list expands to accommodate new records depends on whether it is a
:ref:`static or dynamic list <spreadsheet/insert-list/static-vs-dynamic>`.

.. _spreadsheet/insert-list/static-vs-dynamic:

Static vs dynamic lists
=======================

When a list from an Odoo list view is inserted into an Odoo spreadsheet, it is, by default,
a *static* list, where each cell retrieves data from the database via an :ref:`Odoo-specific
function <spreadsheet/insert-list/static-functions>`. The list's data is kept up to date, but it
does not expand to accommodate new records.

.. example::
   A company currently has ten product categories and a list of these categories is inserted into a
   spreadsheet. If an 11th product category is created and the inserted list only had ten rows, the
   new category will be inserted in the appropriate position in the spreadsheet, thereby removing an
   existing category.

Inserting an Odoo list directly from an Odoo spreadsheet results in a *dynamic* list, where a single
:ref:`Odoo-specific array function <spreadsheet/insert-list/dynamic-function>` retrieves data from
the database. The list's data is kept up to date and, if desired, the array function :ref:`can be
modified <spreadsheet/insert-list/dynamic-all-records>` to allow the list to expand to accommodate
new records.

.. tip::
   A static list can be :ref:`converted to a dynamic list <spreadsheet/insert-list/static-convert>`
   and a dynamic list can be :ref:`converted to a static list
   <spreadsheet/insert-list/dynamic-convert>` if needed.

.. _spreadsheet/insert-list/from-view:

Insert an Odoo list from a list view
====================================

.. tip::
   - Before inserting a list into a spreadsheet, consider which fields should be visible as well as
     how the records are filtered and/or sorted. This can impact both the loading time and the
     user-friendliness of the spreadsheet.
   - :doc:`Property fields <../../../essentials/property_fields>` visible in a list
     view are included when inserting the list into a spreadsheet.

To insert a list from an :ref:`Odoo list view <studio/views/multiple-records/list>` into an Odoo
spreadsheet:

#. With the relevant list view open, click the :icon:`fa-cog` :guilabel:`(Actions)` icon beside the
   name of the view, then :menuselection:`Spreadsheet -->` :icon:`oi-view-list`
   :menuselection:`Insert list in spreadsheet`.

   .. tip::
      To insert only specific records, select the relevant records, click the :icon:`fa-cog`
      :guilabel:`Actions` button that appears at the top center of the screen, then
      :icon:`oi-view-list` :guilabel:`Insert in spreadsheet`.

#. In the window that opens, edit the :guilabel:`List name` if needed.

#. Edit the number of :guilabel:`Records`, i.e., rows, to be inserted, if needed.

   By default, the number shown is the number of records visible on the first page of the list view.
   For example, if the list contains 150 records but only 80 are visible, this field will show 80.

   .. tip::
      A list inserted from an Odoo list view is a :ref:`static list
      <spreadsheet/insert-list/static-vs-dynamic>` that will not automatically expand to accommodate
      new records. If it is likely that new records will be added in the database, consider adding
      extra rows when inserting the list.

#. Click :guilabel:`Blank spreadsheet` to create a new spreadsheet, or select in which existing
   spreadsheet the list should be inserted.

#. Click :guilabel:`Confirm`.

The list is inserted into a new sheet in the spreadsheet. The sheet tab in the bottom bar shows the
name of the list followed by the list ID, e.g., *Quotations by Total (List #1)*. A panel on the
right side of the spreadsheet shows the :ref:`list properties <spreadsheet/insert-list/properties>`.

By default, the list is a :ref:`static list <spreadsheet/insert-list/static-vs-dynamic>`, where
each cell contains an :ref:`Odoo-specific function <spreadsheet/insert-list/static-functions>` that
retrieves data from the database.

.. note::
   - The list name is used in the sheet name and in the :ref:`list properties
     <spreadsheet/insert-list/properties>`, and can be edited at any time.
   - Records/rows can also be :ref:`added manually <spreadsheet/insert-list/static-add-records>`
     after the spreadsheet has been inserted. Alternatively, the inserted list can be
     :ref:`converted to a dynamic list <spreadsheet/insert-list/static-convert>` to allow it to
     expand to accommodate new records.
   - When inserting a list into a new spreadsheet, the spreadsheet is saved in the **Odoo
     Documents** app in the :icon:`fa-hdd-o` :guilabel:`My Drive` personal folder.
   - To sever the link between an inserted list and the database, select the entire list,
     right-click and select :icon:`fa-clipboard` :guilabel:`Copy`, then right-click again and select
     :menuselection:`Paste special --> Paste as value`.

.. _spreadsheet/insert-list/static-functions:

Static list functions
---------------------

A static list uses the following :ref:`Odoo-specific functions <spreadsheet/functions/odoo>`
to retrieve the header and field values, respectively, via its :ref:`data source
<spreadsheet/insert/data-sources>`:

.. code-block:: text

   =ODOO.LIST.HEADER(list_id, field_name)
   =ODOO.LIST.VALUE(list_id, index, field_name)

The arguments of the function are as follows:

- `list_id`: the ID assigned when the list is inserted. The first list inserted into a spreadsheet
  is assigned list ID `1`, the second, list ID `2`, etc.
- `index`: identifies the line on which the record appeared in the list before insertion. The
  first line has an index of `1`, the second an index of `2`, etc.
- `field_name`: the technical name of the field.

.. tip::
   Clicking on an individual cell displays the related formula, if relevant, in the formula bar. To
   display all the formulas of a spreadsheet at the same time, click :menuselection:`View -->`
   :icon:`fa-eye` :menuselection:`Show --> Formulas` on the menu bar. The example below shows the
   functions used to retrieve list headers and values.

   .. image:: insert_list/list-formulas.png
      :alt: Viewing formulas of spreadsheet cells

.. _spreadsheet/insert-list/static-convert:

Convert a static list to a dynamic list
---------------------------------------

To allow an inserted list to expand and accommodate new records, convert the list to a :ref:`dynamic
list <spreadsheet/insert-list/static-vs-dynamic>`, then :ref:`update the array function
<spreadsheet/insert-list/dynamic-all-records>`.

There are two main ways to convert a static list to a dynamic list:

- :ref:`Duplicate the list from the list properties <spreadsheet/insert-list/duplicate>`. The new
  dynamic list has the same styling as the original list.

  .. note::
     With this method, the new dynamic list is assigned the next available list ID. This
     means multiple lists can be associated with the same model, but have distinct
     configurations or calculations.

- **Re-insert a dynamic list from the Data menu.** On the sheet that contains the static
  list, position the cursor in an empty cell. Click :menuselection:`Data -->`
  :icon:`os-insert-list` :menuselection:`Re-insert dynamic list` from the menu bar, then select
  the relevant list.

  A new dynamic list appears, with the same styling as the original list.

  .. tip::
     It is also possible to re-insert a dynamic list by entering the :ref:`function of the
     dynamic list <spreadsheet/insert-list/dynamic-function>` in an empty cell, e.g.,
     `=ODOO.LIST(1)`, where `1` is the :ref:`list ID <spreadsheet/insert-list/properties-id>`.
     However, with this method, the table styling needs to be re-applied manually.

  .. note::
     When a dynamic list is re-inserted from the data menu or by manually entering the dynamic list
     function, the static and dynamic lists share the same data source and, consequently, the same
     list ID. To avoid confusion, delete the original static list.

The top-left cell of the new dynamic list contains an :ref:`Odoo-specific array function
<spreadsheet/insert-list/dynamic-function>` that retrieves data from the database.

.. seealso::
   :ref:`Determine the number of records displayed in a dynamic list
   <spreadsheet/insert-list/dynamic-all-records>`

.. _spreadsheet/insert-list/from-spreadsheet:

Insert an Odoo list from a spreadsheet
======================================

To insert an Odoo list directly from an Odoo spreadsheet:

#. Open the relevant Odoo spreadsheet from the **Documents** app or :ref:`create a new blank
   spreadsheet <spreadsheet/get-started/create-spreadsheet>`.
#. Click :menuselection:`Insert -->` :icon:`oi-view-list` :menuselection:`Odoo list`
   from the menu bar.
#. In the :guilabel:`New Odoo list` panel at the right of the sheet, select the :guilabel:`Model`
   from which data should be retrieved, then click :guilabel:`Save`.

.. _spreadsheet/insert-list/from-spreadsheet-default:

The default list for the model is inserted into a new sheet in the spreadsheet. The sheet name in
the bottom bar shows the model name followed by the :ref:`list ID
<spreadsheet/insert-list/properties-id>`, e.g., *Sales Order (List #1)*. A panel on the right side
of the spreadsheet shows the :ref:`properties of the list <spreadsheet/insert-list/properties>`.

By default, the list is a :ref:`dynamic list <spreadsheet/insert-list/static-vs-dynamic>`, where the
top-left cell contains an :ref:`Odoo-specific array function
<spreadsheet/insert-list/dynamic-function>` that retrieves data from the database.

.. tip::
   When a dynamic list is first inserted into a spreadsheet, a maximum of 80 records are
   displayed. :ref:`Edit the array function <spreadsheet/insert-list/dynamic-all-records>` to
   change the maximum number of records to display or to display all records and allow the list to
   expand to accommodate new records.

.. _spreadsheet/insert-list/dynamic-function:

Dynamic list function
---------------------

Unlike a :ref:`static list <spreadsheet/insert-list/static-functions>`, where each cell contains a
unique function that retrieves data via the :ref:`data source <spreadsheet/insert/data-sources>`, a
dynamic list has a single :ref:`Odoo-specific array function <spreadsheet/functions/odoo>`:

.. code-block:: text

   =ODOO.LIST(list_id, [row_count])

The arguments of the function are as follows:

- `list_id`: the ID assigned when the list is inserted. The first list inserted in a spreadsheet is
  assigned list ID `1`, the second, list ID `2`, etc.
- `row_count`: set a value to limit the number of rows/records.

.. seealso::
   :ref:`Determine the number of records displayed in a dynamic list
   <spreadsheet/insert-list/dynamic-all-records>`

.. _spreadsheet/insert-list/dynamic-convert:

Convert a dynamic list to a static list
---------------------------------------

In some situations, for example, to be able to add a column containing a manually entered formula,
it may be necessary to convert a dynamic list to a :ref:`static list
<spreadsheet/insert-list/static-vs-dynamic>`, where each cell has an individual function that
retrieves data from the data source. To do so, follow these steps:

#. On the sheet that contains the dynamic list, position the cursor in an empty cell.
#. Click :menuselection:`Data -->` :icon:`os-insert-list` :menuselection:`Re-insert static list`
   from the menu bar, then select the relevant list.

A new static list appears, with the same styling as the original list. Click on a cell to see the
function in the formula bar.

.. _spreadsheet/insert-list/properties:

List properties
===============

The list properties appear on the right side of the screen when a list is inserted. They can be
accessed at any time via the :guilabel:`Data` menu by clicking the relevant list, as prefaced by
the :icon:`oi-view-list` :guilabel:`(list)` icon, or by right-clicking anywhere on the list and
clicking :icon:`oi-view-list` :guilabel:`See list properties`.

The following list properties are shown, some of which can be edited:

.. _spreadsheet/insert-list/properties-id:

- :guilabel:`List #`: the list ID, which is used to identify the list for the lifetime of the
  spreadsheet. List IDs are assigned sequentially as additional lists are inserted into the
  spreadsheet.

- :guilabel:`List Name`: the name of the list. Edit this if needed. Note that editing the list name
  in the list properties does not modify the list name shown in the sheet name, and vice versa.

- :guilabel:`Model`: the model from which the data has been extracted and the total number of
  records in the model. The number of records is re-calculated each time the spreadsheet is opened
  or each time the browser or spreadsheet is refreshed.

- :guilabel:`Columns`: the columns that were visible in the list view when the list was inserted, or
  the list's default columns if the list was inserted from the spreadsheet.

- :ref:`Sorting <spreadsheet/insert-list/manipulate-sort>`: how the data is sorted, if applicable.

- :guilabel:`Domain`: the rules used to determine which records are shown. Click :guilabel:`Edit
  domain` to :ref:`add or edit rules <search/custom-filters>`.

To :ref:`duplicate <spreadsheet/insert-list/duplicate>` or :ref:`delete
<spreadsheet/insert-list/delete>` a list's data source, click the :icon:`fa-cog` :guilabel:`(gear)`
icon, then click :icon:`fa-clone` :guilabel:`Duplicate` or :icon:`fa-trash` :guilabel:`Delete` as
relevant.

  .. note::
     - For a :ref:`dynamic list <spreadsheet/insert-list/static-vs-dynamic>`, columns can only be
       added, hidden, or deleted via the list properties; these actions cannot be performed in the
       list itself. For a :ref:`static list <spreadsheet/insert-list/static-vs-dynamic>`, the
       opposite is true; columns can only be added, hidden, or deleted in the list itself.
     - When :doc:`global filters <../work_with_data/global_filters>` are used, the
       :guilabel:`Domain` is combined with the selected values of the global filter before the data
       is loaded into the spreadsheet.

.. _spreadsheet/insert-list/manipulate:

Manipulate an inserted list
===========================

.. _spreadsheet/insert-list/manipulate-sort:

Sort columns
------------

.. note::
   Unlike standard spreadsheet filters, which only act on visible data, the :guilabel:`Sorting`
   functionality in the list properties panel acts on a spreadsheet's underlying :ref:`data sources
   <spreadsheet/insert/data-sources>`.

To sort a list by a specific column:

#. Open the :ref:`list's properties panel <spreadsheet/insert-list/properties>`.
#. In the :guilabel:`Sorting` section, click :guilabel:`Add`.
#. Select the appropriate field. The table is then sorted based on the selected field, in ascending
   order.
#. Change the sorting :guilabel:`Order` to :guilabel:`Descending` if desired.

To delete a sorting rule, click the :icon:`fa-trash` :guilabel:`(delete)` icon on the field's
card.

.. tip::
   Add multiple sorting rules to create hierarchical sorting where data is first sorted by the
   first sorting column, then by subsequent columns in order. For example, with hierarchical
   sorting, customer could be shown in ascending alphabetical order, with their respective sales
   orders displayed in descending order by total amount. To change the order in which hierarchical
   sorting is applied, click on a field's card and drag it to the desired position.

.. _spreadsheet/insert-list/manipulate-static:

Manipulate a static list
------------------------

After a list from an Odoo list view has been inserted into an Odoo spreadsheet, it is possible to:

- :ref:`add rows/records <spreadsheet/insert-list/static-add-records>`
- :ref:`add columns/fields <spreadsheet/insert-list/static-columns>`

.. _spreadsheet/insert-list/static-add-records:

Add rows/records
~~~~~~~~~~~~~~~~

To add rows/records to a static list, use one of the following methods:

- Select the last row of the table, then hover over the blue square until the plus icon appears.
  Click and drag down to add the desired number of rows. The cells of the new rows are populated
  with the :ref:`appropriate formula <spreadsheet/insert-list/static-functions>` to retrieve the
  list values. If there is corresponding data in the database, the cells are populated.

  .. image:: insert_list/list-add-records.png
     :alt: Add rows/records by dragging the cell down

- Position the cursor in the top left cell of the sheet, click :menuselection:`Data --> Re-insert
  list` from the menu bar, then select the appropriate list. In the pop-up window, indicate the
  number of rows/records to insert and click :guilabel:`Confirm`. An updated list is inserted,
  overwriting the previous list.

.. tip::
   The above methods can also be used to add additional blank rows to a spreadsheet table. This
   may be useful for lists where additional records are likely to be generated in the database,
   e.g., new product categories or new salespersons.

.. _spreadsheet/insert-list/static-columns:

Add, hide, delete, or rename columns
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To add columns to a static list:

#. Select the column to the right or left of where the new column should be inserted.
#. Click :menuselection:`Insert -->` :icon:`os-insert-col` :menuselection:`Insert column` then
   :icon:`os-insert-col-before` :menuselection:`Column left` or :icon:`os-insert-col-after`
   :menuselection:`Column right` from the menu bar, or right-click then :icon:`os-insert-col-before`
   :guilabel:`Insert column left` or :icon:`os-insert-col-after` :guilabel:`Insert column right` as
   appropriate.
#. Copy the header cell of any column, paste it into the header cell of the new column, and press
   `Enter`.
#. Double-click the new header cell, then select and delete the field name that appears in the first
   set of quotation marks; a list of all the technical names of the fields of the related model
   appears.

   .. image:: insert_list/list-add-columns.png
      :alt: Add fields/columns by editing the formula

#. Select the appropriate field from the list.

   .. tip::
      - Hover over the technical name of a field to reveal the field's label.
      - To add a :ref:`related field <studio/fields/relational-fields-related-field>`, click the
        :icon:`oi-chevron-right` :guilabel:`(right arrow)` on the line of a field to access the
        list of related fields. Select the appropriate field or type `.` then type the technical
        name of the field. For example, to display a column with the customer's country in a list
        from the *Sales Order* model, use the related field `partner_id.country` by selecting
        :guilabel:`Customer`, then :guilabel:`Country`.

#. :ref:`Edit the field label <spreadsheet/insert-list/static-columns-edit-name>` if desired.
#. Select the header cell, then double-click on the blue square in the bottom-right corner of the
   cell. The cells of the column are populated with the appropriate formula to retrieve the list
   values. If there is corresponding data in the database, the cells are populated.

To hide a column in a static list, right-click on the column letter header, then click
:icon:`os-hide-col` :guilabel:`Hide column`. To unhide a column, click the :icon:`fa-caret-left` or
:icon:`fa-caret-right` :guilabel:`(left or right caret)` on the header on either side of the hidden
column(s).

To delete a column in a static list, right-click on the column letter header, then click
:icon:`fa-trash` :guilabel:`Delete column`.

.. _spreadsheet/insert-list/static-columns-edit-name:

To rename a column in a static list, double-click the header cell, then edit the field label that
appears in the second set of quotation marks. To revert to the default Odoo field label, remove the
field label entirely.

.. _spreadsheet/insert-list/manipulate-dynamic:

Manipulate a dynamic list
-------------------------

.. _spreadsheet/insert-list/dynamic-all-records:

Determine the number of rows/records displayed
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, when an Odoo list is inserted directly from a spreadsheet or when a list is
:ref:`duplicated via the list properties <spreadsheet/insert-list/duplicate>`, a maximum of 80
records are inserted.

.. note::
   The total number of records in the model is shown below :guilabel:`Model` in the :ref:`list
   properties <spreadsheet/insert-list/properties>`.

To modify the number of rows/records displayed, double-click the top-left cell of the table, then:

   - change the second value in brackets, i.e., the row count, to the desired number; or
   - remove the row count value to display *all* records and allow the list to expand to
     accommodate new records.

.. _spreadsheet/insert-list/dynamic-add-fields:

Add, hide, or delete columns in a dynamic list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To add columns to an inserted Odoo list:

#. Open the :ref:`list's properties panel <spreadsheet/insert-list/properties>`.
#. In the :guilabel:`Columns` section, click :guilabel:`Add`.
#. Select the appropriate field.
#. Rename the column if desired by clicking on the column's card, then typing the new name.

To hide or unhide a column, click the :icon:`fa-eye` :guilabel:`(hide)` or :icon:`fa-eye-slash`
:guilabel:`(unhide)` icon on the column’s card.

To delete a column, click the :icon:`fa-trash` :guilabel:`(delete)` icon on the column’s card.

.. _spreadsheet/insert-list/duplicate-delete:

Duplicate or delete an inserted list
====================================

.. note::
   When :ref:`duplicating <spreadsheet/insert-list/duplicate>` or :ref:`deleting
   <spreadsheet/insert-list/delete>` an inserted list, it is important to remember that each
   list also has a :ref:`data source <spreadsheet/insert/data-sources>`.

.. _spreadsheet/insert-list/duplicate:

Duplicate an inserted list
--------------------------

Duplicating an inserted list via the list's properties creates an additional :ref:`data source
<spreadsheet/insert/data-sources>`. This allows for different manipulations to be performed on the
same data within one spreadsheet.

To duplicate an inserted list:

#. With the :ref:`list properties <spreadsheet/insert-list/properties>` open, click the
   :icon:`fa-cog` :guilabel:`(gear)` icon next to the :guilabel:`List Name`, then :icon:`fa-clone`
   :guilabel:`Duplicate`. The duplicated list is automatically inserted into a new sheet in the
   spreadsheet, with the list properties open in the right panel.

#. Edit the :guilabel:`List Name` in the properties panel and the sheet tab if desired.

The new data source is assigned the next available list ID. For example, if no other lists have been
inserted in the meantime, duplicating *List #1* results in the creation of *List #2*.

.. note::
   - Duplicating an inserted list by copying and pasting it or by duplicating the sheet into which
     it has been inserted does not create a new data source. Any changes made to such a list's
     properties would therefore impact all copies of the list.
   - Duplicating a:

     - static list results in the insertion of the default :ref:`dynamic list
       <spreadsheet/insert-list/from-spreadsheet-default>` for that model, i.e., with default
       columns and a maximum of 80 records;
     - dynamic list results in the insertion of a list with the same columns as the original list
       and a maximum of 80 records, even if the original list had been :ref:`modified to have a
       different or no limit <spreadsheet/insert-list/dynamic-all-records>`.

.. _spreadsheet/insert-list/delete:

Delete an inserted list
-----------------------

To fully delete an inserted list and the underlying data source from a spreadsheet, perform the
following steps in any order:

- Delete the spreadsheet table containing the list using the preferred method, e.g., via keyboard
  commands, spreadsheet menus, or by deleting the sheet. This deletes the visual representation of
  the data.
- From the :ref:`properties panel <spreadsheet/insert-list/properties>` of the list, click the
  :icon:`fa-cog` :guilabel:`(gear)` icon, then :icon:`fa-trash` :guilabel:`Delete`. This deletes
  the data source of the list from the spreadsheet.
