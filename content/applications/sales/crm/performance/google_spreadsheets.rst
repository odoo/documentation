=====================================================
How to use Google Spreadsheet in Addition to my Data?
=====================================================

Create custom dashboards in Google Spreadsheet that retrieves data directly from Odoo using
spreadsheet formula. You can use it to create sales commission plans, budgets, project forecasts,
etc. Formulas are written in Python but programming skills are not required.

Configuration
=============

From the *General Settings*, activate *Google Drive* and *Google Spreadsheet*. The options
*Authorization Code* and *Get Authorization Code* are now available.

.. image:: google_spreadsheets/authori.png
   :align: center
   :alt: Enable the Google Drive and Google Spreadsheet features in Odoo

Now, link your Google account with Odoo by following these steps:

#. Get Authorization Code
#. Select your Google account
#. Enter your password
#. Copy the code
#. Paste it into the Authorization Code field

Create a new Spreadsheet
------------------------

From the *CRM* app, for example, go to *Favorites* and click on *Add to Google Spreadsheet*.

.. image:: google_spreadsheets/add_to_google_spread.png
   :align: center
   :alt: From the CRM application, for example, click on add to Google Spreadsheet in Odoo

A new spreadsheet will be automatically created in your Google Drive.

.. note::
   When you opening this new file, a second sheet is created automatically by Odoo with a
   tutorial/documentation on *How to use Google Spreadsheet*.

Link a Spreadsheet with Odoo
----------------------------

| From this new file, configure your database.
| Go to :menuselection:`Odoo --> Server Settings --> Database Name --> Username --> Password`.

.. image:: google_spreadsheets/odoo_menu.png
   :align: center
   :alt: Menu called Odoo is shown on the settings bar in the Spreadsheet

Applications
============

You have two different formulas available when using Google Spreadsheet in Odoo: *retrieve data* and
*retrieve grouped sums*.

.. warning::
   Google Drive limits the execution time of scripts; if the data you requested takes
   too long to be delivered, you might get an error. There is no specific size limit, since the
   time for Odoo to respond depends on several factors - although reading data regarding several
   thousand records is usually fine.


Retrieve Data
-------------

| The theoretical formula is :command:`= oe_browse (table;columns;filters;orderby:limit)`.
  Used it if you want to display the information without grouping it (e.g.: each sales
  order in the database).
| Find some the arguments in the table below.

.. image:: google_spreadsheets/retrieve_data.png
   :align: center
   :alt: Table with examples of arguments to use in Odoo

Retrieve Grouped Sums
---------------------

| The theoretical formula is :command:`= oe_read_group (table;columns;group_by;filters;orderby:limit)`.
  Use it when you want to display a sum of data (e.g.: total invoiced).
| Find some arguments in the table below.

.. image:: google_spreadsheets/retrieve_sums.png
   :align: center
   :alt: Table with examples of grouped sum arguments to use in Odoo

Other uses
----------

Mix Odoo data with spreadsheet data, add traditional formulas, and create Dynamic Tabled and Graphs.
