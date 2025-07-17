:show-content:

===========
Spreadsheet
===========

.. toctree::
   :titlesonly:

   spreadsheet/templates
   spreadsheet/functions
   spreadsheet/insert
   spreadsheet/dynamic_pivot_tables
   spreadsheet/global_filters

**Odoo Spreadsheet** allows you to organize, manipulate, analyze, and visualize data. It offers
similar functionality to other spreadsheet solutions with the added benefit of integrating directly
with your Odoo database.

With Odoo Spreadsheet, you can:

- :ref:`create spreadsheets <spreadsheet/create-new>` or :ref:`upload existing files
  <spreadsheet/upload-existing-files>` and open them as Odoo spreadsheets
- create :doc:`templates <spreadsheet/templates>`
- :doc:`use functions, including Odoo-specific functions <spreadsheet/functions>`
- :doc:`insert and link to Odoo data <spreadsheet/insert>`
- :doc:`create and use dynamic pivot tables <spreadsheet/dynamic_pivot_tables>`
- filter data across multiple Odoo data sources using :doc:`global filters
  <spreadsheet/global_filters>`
- visualize data using charts and formatting
- share files internally and externally

The Odoo Spreadsheet module is part of **Odoo Documents**.

.. _spreadsheet/create-new:

Create a new spreadsheet
========================

To create a new spreadsheet:

#. Open Odoo Documents and navigate to the section or folder in which the spreadsheet should be
   created.
#. Click :menuselection:`New --> Spreadsheet`.

   .. tip::
      Alternatively, from the :guilabel:`All` folder, click :menuselection:`New --> Spreadsheet`,
      then select in which :guilabel:`Workspace` the spreadsheet should be created. If :ref:`file
      centralization <documents/file-centralization>` has been enabled for spreadsheets, you will
      also have the option to save the new spreadsheet in the :guilabel:`Spreadsheet` workspace.

#. Click :guilabel:`Blank spreadsheet` or, to create a new spreadsheet using an existing
   :doc:`template <spreadsheet/templates>`, select the relevant template.
#. Click :guilabel:`Create`.

Click on `Untitled spreadsheet` at the top of the screen to edit the name of the spreadsheet.

.. note::
   Most lists, pivot tables, and charts from other Odoo apps can be :doc:`inserted into a new or
   existing spreadsheet <spreadsheet/insert>` directly from the app in question.

   When a new spreadsheet is created in this way, it is saved in Odoo Documents in the
   :icon:`fa-hdd-o` :guilabel:`My Drive` personal workspace or, if :ref:`file centralization
   <documents/file-centralization>` file centralization has been enabled for spreadsheets, in the
   :guilabel:`Spreadsheet` workspace.

.. _spreadsheet/upload-existing-files:

Upload existing files
=====================

Spreadsheets in `.xlsx` format can be uploaded into Odoo Documents and opened as an Odoo
spreadsheet. To do so:

#. Open Odoo Documents and navigate to the section or folder where the spreadsheet should be saved.
#. Click :menuselection:`New --> Upload`.
#. Select the relevant `.xlsx` file and click :guilabel:`Open`.
#. Click on the uploaded file.
#. Opt whether or not to delete the source `.xlsx` file.
#. Click :guilabel:`Open with Odoo Spreadsheet`.

The file is now an Odoo spreadsheet and can be fully edited in Odoo Spreadsheet.

.. _spreadsheet/manage-spreadsheets:

Manage spreadsheets
===================

Users with :guilabel:`Editor` rights to a specific spreadsheet have various options for managing the
spreadsheet via the :guilabel:`File` menu:

- :icon:`os-copy-file` :guilabel:`Make a copy`: creates a duplicate of the current spreadsheet with
  the same :ref:`regional settings <spreadsheet/manage-spreadsheets/regional-settings>`.
- :icon:`os-save` :guilabel:`Save as template`: allows the current spreadsheet to be used as a
  :doc:`template <spreadsheet/templates>` for future spreadsheets.
- :icon:`os-download` :guilabel:`Download`: downloads the spreadsheet in `.xlsx` format.

  .. important::
     When you download a spreadsheet in `.xlsx` format, any spreadsheet formulas that retrieve Odoo
     data from your database, e.g., via an :doc:`inserted list <spreadsheet/insert>` or via other
     :doc:`Odoo-specific functions <spreadsheet/functions>`, are converted to the values they would
     have returned at the moment the spreadsheet was downloaded.

  .. tip::
     Users with :guilabel:`Viewer` rights can also download a spreadsheet in `.xlsx` format.

- :icon:`os-version-history` :guilabel:`See version history`: provides read-only :ref:`access to
  previous versions <spreadsheet/manage-spreadsheets/version-history>` of the current spreadsheet,
  which can be named and restored if needed.
- :icon:`fa-print` :guilabel:`Print`: prints a copy of the spreadsheet on a connected printer.
- :icon:`os-cog` :guilabel:`Settings`: allows you to view and change the :ref:`regional settings
  <spreadsheet/manage-spreadsheets/regional-settings>`, or locale, of the current spreadsheet.

.. _spreadsheet/manage-spreadsheets/version-history:

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
  :menuselection:`Make a copy`. A copy of the version will open as a new spreadsheet.
- **Create named versions** by clicking on the date and time of the relevant version and entering
  the desired name. The date and time of the version are then displayed below the new name.

.. tip::
   When viewing an earlier, read-only version of a spreadsheet, it is still possible to search the
   spreadsheet by clicking :menuselection:`Edit -->` :icon:`fa-search` :menuselection:`Find and
   replace` or to copy an individual cell or selected area by clicking :menuselection:`Edit -->`
   :icon:`fa-clipboard` :menuselection:`Copy`.

.. _spreadsheet/manage-spreadsheets/regional-settings:

Regional settings
-----------------

To ensure data is displayed consistently for all users, the regional settings, or locale, of a
spreadsheet, are managed at spreadsheet level. This locale affects the following settings and
formats:

- thousand and decimal separators
- date and time formats
- first day of the week

By default, a new spreadsheet inherits the regional settings of the user who created it. For
example, any spreadsheets created by a user whose language is set to :guilabel:`French (BE) /
Français (BE)` will follow Belgian French conventions.

A spreadsheet's locale can be viewed and changed at any time by a user with :guilabel:`Editor`
rights.

To view the locale of a spreadsheet, click :menuselection:`File -->` :icon:`os-cog`
:menuselection:`Settings` from the menu bar. The :guilabel:`Spreadsheet settings` panel opens on the
right of the spreadsheet. To change the locale, select the appropriate locale from the dropdown.

.. tip::
   When you open a spreadsheet that has a different locale to that of your user profile, a blue
   :icon:`fa-globe` :guilabel:`(globe)` icon appears at the top right of the spreadsheet. Hovering
   over the icon reveals a warning message that indicates the spreadsheet locale and highlights
   formats that differ.

   .. image:: spreadsheet/locale-difference.png
      :alt: Warning about difference between user and spreadsheet locale

   If no :icon:`fa-globe` :guilabel:`(globe)` icon is shown, this means the spreadsheet's locale is
   the same as that of your user profile.
