==============
Link Odoo data
==============

You can insert and link several elements from your database in your spreadsheets, namely:

- pivots,
- graphs,
- lists, and
- links to menus (i.e., a clickable link to a view of a specific model).

Before inserting :ref:`pivots <reporting/views/pivot>`, :ref:`graphs <reporting/views/graph>`, or
lists, ensure they are tailored to your needs, as some elements are more quickly - or only -
configurable in their respective view.

- To insert pivots and graphs, click :guilabel:`Insert in spreadsheet` from any pivot or graph view.
- To insert lists, click :menuselection:`Favorites --> Insert list in spreadsheet` from any list
  view.
- To insert links to menus, click :menuselection:`Favorites --> Link menu in spreadsheet` from any
  view.

In the pop-up box, either create a new spreadsheet by selecting :guilabel:`Blank spreadsheet` or
insert it in an existing one by selecting it and clicking :guilabel:`Confirm`.

.. image:: insert/insert-spreadsheet.png
   :align: center
   :alt: Inserting a pivot in a spreadsheet

.. note::
   By default, new spreadsheets are saved under the :guilabel:`Spreadsheet` workspace of the
   Documents app.

.. _insert/update:

Updating data
=============

Once inserted in a spreadsheet, your data is kept up-to-date, reflecting any changes made to your
database. Reopening the spreadsheet reloads the linked data.

.. note::
   To update pivots and lists data without reopening a spreadsheet, go to the menu bar and click
   :menuselection:`Data --> Refresh all data`.

Pivot data
----------

Using :guilabel:`Refresh all data` only updates existing pivot cells. If new cells need to be added,
go to the menu bar and click :menuselection:`Data --> Re-insert pivot` to fully update the pivot.
Alternatively, click :guilabel:`Insert pivot`, select the pivot, and tick :guilabel:`Display missing
cells only` to preview first the missing data.

   .. image:: insert/missing-cells.png
      :align: center
      :alt: Displaying missing cells in a pivot

To change which records are :ref:`used by the pivot <search/preconfigured-filters>`, right-click on
a pivot cell, select :guilabel:`See pivot properties`, and click :guilabel:`Edit domain`.
