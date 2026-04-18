===========
Get started
===========

.. _spreadsheet/get-started/create-spreadsheet:

Create a new spreadsheet
========================

To create a new spreadsheet:

#. Open Odoo Documents and navigate to the section or folder in which the spreadsheet should be
   created.
#. Click :guilabel:`New` and select :guilabel:`Spreadsheet`.

   .. tip::
      Alternatively, from the :icon:`fa-folder-o` :guilabel:`All` folder, click :guilabel:`New` and
      select :guilabel:`Spreadsheet`, then select in which :guilabel:`Workspace` (i.e., folder) the
      spreadsheet should be created. If :ref:`file centralization <documents/file-centralization>`
      has been enabled for spreadsheets, you will also have the option to save the new spreadsheet
      in the :guilabel:`Spreadsheet` folder.

#. Click :guilabel:`Blank spreadsheet` or, to create a new spreadsheet using an existing
   :ref:`template <spreadsheet/get-started/templates>`, select the relevant template.
#. Click :guilabel:`Create`.
#. Click on `Untitled spreadsheet` at the top of the screen to edit the name of the spreadsheet.

.. tip::
   It is also possible to create a new spreadsheet by:

   - clicking :menuselection:`File -->` :icon:`os-clear-and-reload` :menuselection:`New` from the
     menu bar of an open spreadsheet; or
   - :doc:`inserting a list, pivot table, or chart from another Odoo app <insert>` into
     a new spreadsheet directly from the app in question.

   In these cases, the new spreadsheet is saved in Odoo Documents in the :icon:`fa-hdd-o`
   :guilabel:`My Drive` personal folder or, if :ref:`file centralization
   <documents/file-centralization>` has been enabled for spreadsheets, in the
   :guilabel:`Spreadsheet` folder.

.. _spreadsheet/get-started/templates:

Templates
---------

Spreadsheet templates allow you to quickly create spreadsheets without starting from scratch. For
example, you could create a template for a monthly budget report or a quarterly sales commission
report.

.. note::
   Templates are available to all users on the database.

.. _spreadsheet/get-started/templates-create:

Create a template
~~~~~~~~~~~~~~~~~

Any spreadsheet can be saved as a template.

To create a template:

#. Open the relevant spreadsheet or :ref:`create a new one
   <spreadsheet/get-started/create-spreadsheet>`.
#. From the menu bar, click :menuselection:`File -->` :icon:`os-save` :menuselection:`Save as
   template`. Modify the default :guilabel:`Template Name` if needed and click :guilabel:`Confirm`.

.. important::
   Once a spreadsheet is saved as a template, any further changes to the open spreadsheet are
   saved only in that spreadsheet. To make changes to the template, you need to :ref:`edit
   the template <spreadsheet/get-started/templates-manage>`.

You can also create a template by :ref:`making a copy of an existing template and editing it
<spreadsheet/get-started/templates-manage>`.

.. _spreadsheet/get-started/templates-use:

Use templates
~~~~~~~~~~~~~

To create a new spreadsheet using a template, open the Documents app and click :menuselection:`New
--> Spreadsheet`. Select the relevant template and click :guilabel:`Create`.

Alternatively, go to :menuselection:`Documents --> Configuration --> Spreadsheet Templates` then,
on the line of the relevant template, click :icon:`fa-plus` :guilabel:`New spreadsheet`.

.. note::
   By default, the new spreadsheet inherits the name of the template, which is shown at the top of
   the screen. To rename the spreadsheet, click the name and edit it.

.. _spreadsheet/get-started/templates-manage:

Manage and edit templates
~~~~~~~~~~~~~~~~~~~~~~~~~

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

.. _spreadsheet/get-started/upload-files:

Upload files
============

Spreadsheets in `.xlsx` format can be uploaded into Odoo Documents and opened as an Odoo
spreadsheet. To do so:

#. Open Odoo Documents and navigate to the section or folder where the spreadsheet should be saved.
#. Click :guilabel:`New` and select :guilabel:`Upload`.
#. Select the relevant `.xlsx` file and click :guilabel:`Open`.
#. Click on the uploaded file.
#. By default, the original `.xlsx` file is deleted when it is opened as an Odoo Spreadsheet. To
   preserve the original file in the same folder in Odoo Spreadsheet, disable :guilabel:`Send source
   file to trash`.
#. Click :guilabel:`Open with Odoo Spreadsheet`.

The file is now an Odoo spreadsheet and can be fully edited in Odoo Spreadsheet.

.. _spreadsheet/get-started/manage-spreadsheets:

Manage spreadsheets
===================

Users with :guilabel:`Editor` rights to a specific spreadsheet have various options for managing the
spreadsheet via the :guilabel:`File` menu:

- :icon:`os-copy-file` :guilabel:`Make a copy`: creates a duplicate of the current spreadsheet with
  the same :ref:`regional settings <spreadsheet/get-started/manage-spreadsheets-locale>` (or
  locale).
- :icon:`os-save` :guilabel:`Save as template`: allows the current spreadsheet to be used as a
  :ref:`template <spreadsheet/get-started/templates>` for future spreadsheets.
- :icon:`os-download` :guilabel:`Download`: downloads the spreadsheet in `.xlsx` format.

  .. important::
     When you download a spreadsheet in `.xlsx` format, any spreadsheet formulas that retrieve Odoo
     data from your database, e.g., via an :doc:`inserted list <insert>` or via other
     :doc:`Odoo-specific functions <work_with_data/functions>`, are converted to the values they
     would have returned at the moment the spreadsheet was downloaded.

  .. tip::
     Users with :guilabel:`Viewer` rights can also download a spreadsheet in `.xlsx` format.

- :icon:`os-version-history` :guilabel:`See version history`: provides read-only :ref:`access to
  previous versions <spreadsheet/get-started/manage-spreadsheets-versioning>` of the current
  spreadsheet, which can be named and restored if needed.
- :icon:`fa-print` :guilabel:`Print`: prints a copy of the spreadsheet on a connected printer.
- :icon:`os-cog` :guilabel:`Settings`: allows you to view and change the :ref:`locale
  <spreadsheet/get-started/manage-spreadsheets-locale>` of the current spreadsheet.
- :icon:`os-add-to-dashboard` :guilabel:`Add to dashboard`: :ref:`converts
  <spreadsheet/get-started/convert-to-dashboard>` the current spreadsheet into an Odoo dashboard.

.. _spreadsheet/get-started/manage-spreadsheets-versioning:

Version history
---------------

Odoo Spreadsheet automatically saves versions of spreadsheets as changes are made, allowing users
with :guilabel:`Editor` rights to browse and restore previous versions.

To access the version history of a spreadsheet, click :menuselection:`File -->`
:icon:`os-version-history` :menuselection:`See version history` from the menu bar. Saved versions
appear in a panel on the right of the spreadsheet. The name of the user who made the change is
shown, as well as the date and time of the change.

The following actions are possible:

- **View an earlier version** in read-only format by clicking on the relevant version.
- **Restore an earlier version** by clicking :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)`
  then :guilabel:`Restore this version`.
- **Copy an earlier version** by clicking :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` then
  :menuselection:`Make a copy`. A copy of the version opens as a new spreadsheet.
- **Create named versions** by clicking on the date and time of the relevant version and entering
  the desired name. The date and time of the version are then displayed below the new name.

.. tip::
   When viewing an earlier, read-only version of a spreadsheet, the following actions are still
   possible:

   - Search the spreadsheet by clicking :menuselection:`Edit -->` :icon:`fa-search`
     :menuselection:`Find and replace` or using the shortcut `Ctrl` + `H`.
   - Copy an individual cell or selected area by clicking :menuselection:`Edit -->`
     :icon:`fa-clipboard` :menuselection:`Copy` or using the shortcut `Ctrl` + `C`.

.. _spreadsheet/get-started/manage-spreadsheets-locale:

Regional settings
-----------------

To ensure data is displayed consistently for all users, the regional settings (or locale) of a
spreadsheet, are managed at spreadsheet level. This locale affects the following settings and
formats:

- thousand and decimal separators
- date and time formats
- first day of the week

By default, a new spreadsheet inherits the regional settings of the user who created it. For
example, any spreadsheets created by a user whose language is set to :guilabel:`French (BE) /
Français (BE)` will follow Belgian French conventions.

A spreadsheet's locale can be viewed and changed at any time by a user with :guilabel:`Editor`
rights. To view the locale of a spreadsheet, click :menuselection:`File -->` :icon:`os-cog`
:menuselection:`Settings` from the menu bar. The :guilabel:`Spreadsheet settings` panel opens on the
right of the spreadsheet. To change the locale, select the appropriate locale from the dropdown.

.. tip::
   When you open a spreadsheet that has a different locale to that of your user profile, a blue
   :icon:`fa-globe` :guilabel:`(globe)` icon appears at the top right of the spreadsheet. Hovering
   over the icon reveals a warning message that indicates the spreadsheet locale and highlights
   formats that differ.

   .. image:: get_started/locale-difference.png
      :alt: Warning about difference between user and spreadsheet locale

   If no :icon:`fa-globe` :guilabel:`(globe)` icon is shown, this means the spreadsheet's locale is
   the same as that of your user profile.

.. _spreadsheet/get-started/convert-to-dashboard:

Convert a spreadsheet into a dashboard
--------------------------------------

A user with the appropriate :ref:`access rights <access-rights/groups>` can convert an Odoo
spreadsheet into a dashboard that is then accessible via
:doc:`Odoo Dashboards <../../../applications/productivity/dashboards>`. To do so:

#. Click :menuselection:`File -->` :icon:`os-add-to-dashboard` :menuselection:`Add to dashboard`
   from the menu bar.
#. Enter the :guilabel:`Dashboard Name`.
#. Select the relevant :guilabel:`Dashboard Section` from the dropdown or, to create a new dashboard
   section, type the name of the new section, then click :guilabel:`Create`.
#. If necessary, modify the :guilabel:`Access Groups` to determine which :ref:`user groups
   <dashboards/access-and-sharing>` can access the dashboard.
#. Click :guilabel:`Create`.

.. tip::
   - By default, the first tab of the spreadsheet serves as the front end of the dashboard.
   - It is also possible to convert a spreadsheet to a dashboard from within the :ref:`Dashboard
     configuration settings <dashboards/configuration>`, by directly adding the spreadsheet to
     an existing or new dashboard section.
   - After a spreadsheet has been converted to a dashboard, it is deleted from Odoo Documents. Any
     subsequent :ref:`modifications <build_and_customize_dashboards/customize>` need to be made via
     Odoo Dashboards.
