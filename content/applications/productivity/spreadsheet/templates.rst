=========
Templates
=========

Spreadsheet templates allow you to quickly create spreadsheets without starting from scratch. For
example, you could create a template for a monthly budget report or a quarterly sales commission
report.

.. note::
   Templates are available to all users on the database.

.. _spreadsheet/templates/create:

Create a template
=================

Any spreadsheet can be saved as a template. Open the relevant spreadsheet or :ref:`create a new one
<documents/spreadsheet>`. From the menu bar, click :menuselection:`File --> Save as template`.
Modify the default :guilabel:`Template Name` if needed and click :guilabel:`Confirm`.

.. important::
   Once a spreadsheet is saved as a template, any further changes to the open spreadsheet are
   saved only in that spreadsheet. To make changes to the template, you need to :ref:`edit
   the template <spreadsheet/templates/manage>`.

You can also create a template by :ref:`making a copy of an existing template and editing it
<spreadsheet/templates/manage>`.

.. _spreadsheet/templates/use:

Use templates
=============

To create a new spreadsheet using a template, open the Documents app and click
:menuselection:`New --> Spreadsheet`. Select the relevant template and click :guilabel:`Create`.

Alternatively, go to :menuselection:`Documents --> Configuration --> Spreadsheet Templates` then,
on the line of the relevant template, click :icon:`fa-plus` :guilabel:`New spreadsheet`.

.. note::
   By default, the new spreadsheet inherits the name of the template, which is shown at the top of
   the screen. To rename the spreadsheet, click the name and edit it.

.. _spreadsheet/templates/manage:

Manage and edit templates
=========================

Manage templates by going to :menuselection:`Documents --> Configuration --> Spreadsheet Templates`.
Remove the :guilabel:`My Templates` :ref:`filter <search/preconfigured-filters>` to view all
templates in the database.

Various actions are possible:

- Copy an existing template by clicking :icon:`fa-clone` :guilabel:`Make a copy` at the right of
  the screen. The new template appears at the bottom of the list. Click the :guilabel:`Name` to
  edit it.

- Edit an existing template (including one you just copied) by clicking :icon:`fa-pencil`
  :guilabel:`Edit`, then making the required changes. Modifications are
  automatically saved.

- Delete a template by ticking the checkbox next to it, clicking :icon:`fa-cog`
  :guilabel:`Actions`, then :guilabel:`Delete`.

.. tip::
   Use the download button under the :guilabel:`Spreadsheet file` column to export a template in
   JSON format. The file can be imported into another database.
