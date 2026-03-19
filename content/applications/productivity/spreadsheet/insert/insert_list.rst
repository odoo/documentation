=============
Insert a list
=============

.. important::
   Before inserting a list in a spreadsheet, ensure the list is tailored to your needs. Consider
   which fields should be visible as well as how the records are filtered and/or sorted. This can
   impact both the loading time and the user-friendliness of your spreadsheet.

To insert a list:

#. With the relevant list view open in your database, click the :icon:`fa-cog`
   :guilabel:`(Actions)` icon beside the name of the view, then :menuselection:`Spreadsheet -->`
   :icon:`oi-view-list` :menuselection:`Insert list in spreadsheet`.

   .. note::
      To insert only specific records, select the relevant records, click the :icon:`fa-cog`
      :guilabel:`Actions` button that appears at the top center of the screen, then
      :icon:`oi-view-list` :guilabel:`Insert in spreadsheet`.

#. In the window that opens, edit the :guilabel:`Name of the list` if needed.

   The list name is used in the sheet name and in the :ref:`list properties
   <spreadsheet/insert-list/properties>`.

   .. image:: insert_list/insert-list.png
      :alt: Inserting a list in a spreadsheet

#. Edit the number of records, i.e., rows, to be inserted if needed.

   By default, the number shown is the number of records visible on the first page of the list. For
   example, if the list contains 150 records but only 80 are visible, this field will show 80.

   .. note::
      While the data in your list is kept up to date thanks to the connection to your database, an
      inserted list will not automatically expand to accommodate new records, e.g., a new product
      category or a new salesperson.

      If you anticipate new records being added, consider adding extra rows when inserting the list.
      Records/rows can also be :ref:`added manually <spreadsheet/insert-list/add-records>` after the
      spreadsheet has been inserted.

      .. example::
         Your company currently has ten product categories and you insert this list in a
         spreadsheet. If an 11th product category is created and your inserted list only had ten
         rows, the new category will be inserted in the appropriate position in the spreadsheet,
         thereby removing an existing category.

         One way to avoid this is to :ref:`add extra rows <spreadsheet/insert-list/add-records>`
         when inserting the list.

#. Click :guilabel:`Blank spreadsheet` to create a new spreadsheet, or select in which existing
   spreadsheet the list should be inserted.

   .. note::
      When inserting a list into a new spreadsheet, the spreadsheet is saved in the **Odoo
      Documents** app in the :icon:`fa-hdd-o` :guilabel:`My Drive` personal folder.

#. Click :guilabel:`Confirm`.

The list is inserted into a new sheet in the spreadsheet. The sheet tab in the bottom bar shows the
name of the list followed by the list ID, e.g., *Quotations by Total (List #1)*. A panel on the
right side of the screen shows the :ref:`list properties <spreadsheet/insert-list/properties>`.

.. tip::
   - To sever the link between an inserted list and your database, select the entire list,
     right-click and select :icon:`fa-clipboard` :guilabel:`Copy` then right-click again and select
     :menuselection:`Paste special --> Paste as value`.
   - Do not modify the list ID in the sheet name, as the inserted list retains this ID for the
     lifetime of the spreadsheet.  This list ID is used in the :ref:`spreadsheet functions
     <spreadsheet/insert-list/functions>` that retrieve data from your database.

.. _spreadsheet/insert-list/functions:

List functions
--------------

When a list is inserted into a spreadsheet, the following :doc:`functions
<../work_with_data/functions>` are used to retrieve the header and field values, respectively:

.. code-block:: text

   =ODOO.LIST.HEADER(list_id, field_name)
   =ODOO.LIST(list_id, index, field_name)

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

.. _spreadsheet/insert-list/properties:

List properties
---------------

The list properties appear on the right side of the screen when a list is inserted. They can be
accessed at any time via the :guilabel:`Data` menu by clicking the relevant list, as prefaced by
the :icon:`oi-view-list` :guilabel:`(list)` icon, or by right-clicking anywhere on the list and
clicking :icon:`oi-view-list` :guilabel:`See list properties`.

The following list properties are shown, some of which can be edited:

- :guilabel:`List #`: the list ID. List IDs are assigned sequentially as additional lists are
  inserted into the spreadsheet.
- :guilabel:`List Name`: the name of the list. Edit this if needed. Note that editing the list name
  in the list properties does not modify the list name shown in the sheet name, and vice versa.
- :guilabel:`Model`: the model from which the data has been extracted.
- :guilabel:`Columns`: the fields of the model that were visible when the list was inserted.
- :guilabel:`Domain`: the rules used to determine which records are shown. Click
  :ref:`Edit domain <search/custom-filters>` to add or edit rules.

  .. note::
     When :doc:`global filters <../work_with_data/global_filters>` are used, this domain is combined
     with the selected values of the global filter before the data is loaded into the spreadsheet.

- :guilabel:`Sorting`: how the data is sorted, if applicable. To add a sorting rule, click
  :guilabel:`Add`, select the field, then choose whether sorting should be :guilabel:`Ascending` or
  :guilabel:`Descending`. Delete a sorting rule by clicking the :icon:`fa-times`
  :guilabel:`(delete)` icon.

To :ref:`duplicate <spreadsheet/insert-list/duplicate>` or :ref:`delete
<spreadsheet/insert-list/delete>` a list's data source, click the :icon:`fa-cog` :guilabel:`(gear)`
icon, then click :icon:`fa-clone` :guilabel:`Duplicate` or :icon:`fa-trash` :guilabel:`Delete` as
relevant.

.. _spreadsheet/insert-list/manage:

Manage an inserted list
-----------------------

After a list from an Odoo database has been inserted into an Odoo spreadsheet, you can:

- :ref:`add records <spreadsheet/insert-list/add-records>`, i.e., rows
- :ref:`add fields <spreadsheet/insert-list/add-fields>`, i.e., columns
- :ref:`duplicate the list <spreadsheet/insert-list/duplicate>` to create a new, identical data
  source
- :ref:`delete the list and its underlying data source <spreadsheet/insert-list/delete>`

.. _spreadsheet/insert-list/add-records:

Add records/rows to a list
~~~~~~~~~~~~~~~~~~~~~~~~~~

To add records to a list, use one of the following methods:

- Select the last row of the table, then hover over the blue square until the plus icon appears.
  Click and drag down to add the desired number of rows. The cells of the new rows are populated
  with the :ref:`appropriate formula <spreadsheet/insert-list/functions>` to retrieve the list
  values. If there is corresponding data in your database, the cells are populated.

  .. image:: insert_list/list-add-records.png
     :alt: Add records by dragging the cell down

- Position your cursor in the top left cell of the sheet, click :menuselection:`Data --> Re-insert
  list` from the menu bar, then select the appropriate list. In the pop-up window, indicate the
  number of records to insert and click :guilabel:`Confirm`. An updated list is inserted,
  overwriting the previous list.

.. tip::
   The above methods can also be used to add additional blank rows to your spreadsheet table. This
   may be useful for lists where you expect additional records to be generated in your database,
   e.g., new product categories or new salespersons.

.. _spreadsheet/insert-list/add-fields:

Add fields/columns to a list
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To add fields/columns to a list:

#. Select the column to the right or left of where the new column should be inserted.
#. Click :menuselection:`Insert -->` :icon:`os-insert-col` :menuselection:`Insert column` then
   :icon:`os-insert-col-before` :menuselection:`Column left` or :icon:`os-insert-col-after`
   :menuselection:`Column right` from the menu bar, or right-click then :icon:`os-insert-col-before`
   :guilabel:`Insert column left` or :icon:`os-insert-col-after` :guilabel:`Insert column right` as
   appropriate.
#. Copy the header cell of any column, paste it into the header cell of the new column, and press
   `Enter`.
#. Double-click the new header cell then click on the field name that appears in quotation marks at
   the end of the formula; a list of all the technical names of the fields of the related model
   appears.

   .. image:: insert_list/list-add-columns.png
      :alt: Add fields/columns by editing the formula

#. Select the appropriate field name and press `Enter`. The field's label appears in the header.

   .. tip::
      To know a field's technical name, navigate to the relevant view, :ref:`activate developer mode
      <developer-mode>`, then check the field name by hovering over the question mark beside a
      field's label.

#. With the header cell selected, double-click on the blue square in the bottom-right corner. The
   cells of the column are populated with the appropriate formula to retrieve the list values. If
   there is corresponding data in your database, the cells are populated.

.. _spreadsheet/insert-list/duplicate:

Duplicate a list
~~~~~~~~~~~~~~~~

Duplicating a list via the list's properties creates an additional data source. This allows for
different manipulations to be performed on the same data within one spreadsheet.

With the :ref:`list properties <spreadsheet/insert-list/properties>` open, click the :icon:`fa-cog`
:guilabel:`(gear)` icon then :icon:`fa-clone` :guilabel:`Duplicate`.

The new data source is assigned the next available list ID. For example, if no other lists have been
inserted in the meantime, duplicating *List #1* results in the creation of *List #2*.

Unlike when you insert a list, a duplicated list is not automatically inserted into the spreadsheet.
To insert it, perform the following steps:

#. Add a new sheet by clicking the :icon:`os-plus` :guilabel:`(add sheet)` icon at the bottom left
   of the spreadsheet.
#. Click :menuselection:`Data --> Re-insert list` from the menu bar, then select the appropriate
   list.
#. Define the number of records to insert and click :guilabel:`Confirm`.
#. Edit the :guilabel:`List Name` in the properties panel if needed.
#. Rename the sheet by right-clicking on the sheet tab, selecting :guilabel:`Rename`, and entering
   the new sheet name.

.. note::
   Duplicating an inserted list by copying and pasting it or by duplicating the sheet into which it
   has been inserted does not create a new data source. Any changes made to the list's properties
   would therefore impact any copies of the list.

.. _spreadsheet/insert-list/delete:

Delete a list
~~~~~~~~~~~~~

To fully delete a list and the underlying data source from a spreadsheet, perform the following
steps in any order:

- Delete the spreadsheet table using your preferred means, e.g., via keyboard commands, spreadsheet
  menus, or by deleting the sheet. This deletes the visual representation of the data.
- From the :ref:`properties panel <spreadsheet/insert-list/properties>` of the relevant list, click
  the :icon:`fa-cog` :guilabel:`(gear)` icon then :icon:`fa-trash` :guilabel:`Delete`. This deletes
  the data source of the list from the spreadsheet.
