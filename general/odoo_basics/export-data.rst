======================
Export Data From Odoo
======================

When working with a database, it sometimes is necessary to export your data in a distinct file. 
Doing so can help to do reporting over your activities (even if Odoo offers a precise and easy 
reporting tool with each available application).

With Odoo, you can export the values from any field in any record. To do so, 
activate the list view on the items that need to be exported, click on *Action*, and, then, 
on *Export*.

.. image:: media/list-view-export.png
   :align: center
   :alt: view of the different things to enable/click to export data

Pretty simple, this action still comes with some specificities. In fact,
when clicking on *Export*, a pop-up window appears with several
options for the data to export:

.. image:: media/export-data-overview.png
   :align: center
   :alt: overview of all the options to take into account when exporting data in Odoo

1. With the *I want to update data* option ticked, the system only
   shows the fields which can be imported. This is very helpful in
   case you want to update existing records. Basically, this works
   like a filter. Leaving the box unticked gives way more field
   options because it shows all the fields, not just the ones which
   can be imported.
2. When exporting, you can choose between two formats: .csv and .xls.
   With .csv, items are separated with a comma, while .xls holds information about all the 
   worksheets in a file, including both content and formatting.
3. Those are the items you may want to export. Use the arrows to display
   more sub-field options. Of course, you can use the search bar to
   find specific fields more easily. To use the search option more
   efficiently, display all the fields by clicking on all the
   arrows!
4. The + button is there to add fields to the “to export” list.
5. The “handles” next to the selected fields allow you to move the fields up and down to
   change the order in which they must be displayed in the exported
   file.
6. The trashcan is there if you need to remove fields.
7. For recurring reports, it might be interesting to save export presets. 
   Select all the needed ones and click on the template bar.
   There, click on *New template* and give a name to yours. The
   next time you need to export the same list, simply select the
   related template.

.. tip::
   It’s good to keep the field’s external identifier in mind. For example,
   *Related Company* is equal to *parent_id*. Doing so helps export
   only what you would like to import next.