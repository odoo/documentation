==============================
Build and customize dashboards
==============================

In addition to consulting :ref:`standard dashboards <dashboards/standard>`, users
with the appropriate :ref:`access rights <dashboards/access-and-sharing/customize-configure-build>`
can :ref:`build custom dashboards from scratch <build_and_customize_dashboards/build>` or
:ref:`customize existing dashboards <build_and_customize_dashboards/customize>` to respond to
specific business needs.

.. _build_and_customize_dashboards/build:

Build a dashboard
=================

In its most simple terms, building a dashboard involves :doc:`inserting Odoo data into a spreadsheet
<../../../applications/productivity/spreadsheet/insert>` then :ref:`converting that spreadsheet into
a dashboard <spreadsheet/manage-spreadsheets/convert-to-dashboard>`.

However, to build a dashboard that delivers relevant and valuable insights, it is important to
consider the process in terms of three key stages: :ref:`preparation
<build_and_customize_dashboards/build-preparation>`, :ref:`data insertion and manipulation
<build_and_customize_dashboards/build-insertion-manipulation>`, and :ref:`data visualization
<build_and_customize_dashboards/build-visualization>`.

.. _build_and_customize_dashboards/build-preparation:

Preparation
-----------

This stage involves:

- defining the purpose of the dashboard, in other words, the business questions it needs to answer,
  and deciding what data would answer those questions;
- determining where to find the relevant Odoo data and deciding which :doc:`type of view
  <../../../applications/studio/views>` (i.e., list, pivot table, or chart) is most suited for the
  data analysis needed;
- preparing the Odoo data by refining the views to focus on the most relevant information, e.g., by
  using :doc:`search filters <../../../applications/essentials/search>`, by making only certain list
  fields visible, or by deciding which dimensions and measures a pivot table should use;
- sourcing any other information needed to support the dashboard.

.. _build_and_customize_dashboards/build-insertion-manipulation:

Data insertion and manipulation
-------------------------------

This stage involves:

- :doc:`inserting the prepared lists, pivot tables or charts
  <../../../applications/productivity/spreadsheet/insert>` into the spreadsheet you will use to
  build your dashboard;
- manipulating the data, if needed, to be able to draw the necessary insights. This may involve
  performing calculations or creating custom metrics using :doc:`standard or Odoo-specific functions
  and formulas <../../../applications/productivity/spreadsheet/functions>`, referencing data from
  various sources within the spreadsheet, or :doc:`converting static pivot tables to dynamic pivot
  tables <../../../applications/productivity/spreadsheet/dynamic_pivot_tables>`.

.. _build_and_customize_dashboards/build-visualization:

Data visualization
------------------

This stage involves:

- presenting the data on at least the first sheet of your spreadsheet (i.e., the sheet that will
  serve as the front end of your dashboard) in a clear, visual, and meaningful way so it is easy to
  interpret. Concretely, this means deciding on the layout and order of elements such as tables and
  charts, as well as using tools and techniques to guide the user, such as clear and descriptive
  headings, text formatting and colors, carefully chosen chart types, and conditional formatting to
  highlight specific data visually;
- :ref:`inserting clickable links <spreadsheet/insert/clickable-links>`, if relevant, to provide
  access to Odoo menu items, URLs, or other sheets within the same spreadsheet if these should also
  be accessible from the front end of your dashboard;
- :doc:`creating global filters <../../../applications/productivity/spreadsheet/global_filters>` to
  allow users to tailor the view to their needs;
- :ref:`converting the spreadsheet into a dashboard
  <spreadsheet/manage-spreadsheets/convert-to-dashboard>`, determining whether to add the dashboard
  to an existing or new dashboard section, and :ref:`managing access rights to the dashboard
  <dashboards/access-and-sharing/manage-view-access>`.

.. tip::
   - Use standard dashboards as inspiration for how to best present and visualize data. For example,
     for charts, :ref:`open the underlying spreadsheet
     <build_and_customize_dashboards/customize/open-spreadsheet>` of a standard dashboard, hover
     over a chart and click the :icon:`fa-bars` :guilabel:`(menu)` icon, then
     :icon:`fa-pencil-square-o` :guilabel:`Edit` to see the chart properties on the right side of
     the screen.
   - The possibility to link to other sheets within the same spreadsheet allows the creation of a
     multi-page dashboard, with users able to navigate between pages thanks to clickable links.
     Global filters apply across all pages of a dashboard.

.. seealso::
  `Odoo Tutorial: Dashboard from scratch
  <https://www.odoo.com/slides/slide/dashboard-from-scratch-8957>`_

.. _build_and_customize_dashboards/customize:

Customize a dashboard
=====================

A dashboard can be customized by :ref:`opening its underlying spreadsheet
<build_and_customize_dashboards/customize/open-spreadsheet>`, i.e., the Odoo spreadsheet from which
the dashboard has been created, and :ref:`making any desired changes
<dashboards/customize-dashboard/edit-spreadsheet>`.

.. _build_and_customize_dashboards/customize/open-spreadsheet:

Open the underlying spreadsheet
-------------------------------

.. important::
   When customizing a :ref:`standard dashboard <dashboards/standard>`, it is highly recommended to
   :ref:`duplicate the dashboard <build_and_customize_dashboards/customize/duplicate-dashboard>`
   and make any changes on the underlying spreadsheet of the duplicated version. Standard
   dashboards are reinstalled at each Odoo version upgrade, meaning any customizations on the
   original version are lost.

To open a dashboard's underlying spreadsheet:

#. In the Dashboards app, go to :menuselection:`Configuration --> Dashboards`.
#. Open the relevant dashboard section, then, on the line of the relevant dashboard, click
   :icon:`fa-pencil` :guilabel:`Edit`.

.. tip::
   - To temporarily unpublish a dashboard while you make changes, disable :guilabel:`Is Published`
     *before* editing the dashboard, making note to republish it when the customization has been
     finalized.
   - Users who do not have the appropriate :ref:`access rights
     <dashboards/access-and-sharing/customize-configure-build>` to customize a dashboard can still
     access a read-only version of the dashboard's underlying spreadsheet.
   - With :ref:`developer mode <developer-mode>` activated, click on the :icon:`fa-pencil`
     :guilabel:`(Edit)` icon beside the name of a dashboard in the left panel to open its underlying
     spreadsheet.

The spreadsheet that opens typically consists of at least two sheets:

- **The first sheet** always serves as the front end of your dashboard, and contains the tables
  and charts used to structure and visualize the data.

- **The second and any subsequent sheets** typically contain data used for the calculation of key
  metrics shown on the first sheet.

.. note::
   The :ref:`data sources <spreadsheet/insert/data-sources>` that maintain the connection between
   the spreadsheet and the relevant models in your database can be viewed by clicking
   :menuselection:`Data` on the spreadsheet's menu bar. These data sources are identified by
   their respective :icon:`oi-view-pivot` :guilabel:`(pivot table)`, :icon:`oi-view-list`
   :guilabel:`(list)` or :icon:`fa-bar-chart` :guilabel:`(chart)` icon, followed by their ID and
   name, e.g., :icon:`oi-view-pivot` *(#1) Sales Analysis by Product*.

   For :ref:`standard dashboards <dashboards/standard>`, while the data sources
   are still active and visible in the :menuselection:`Data` menu, the corresponding lists and pivot
   tables have been removed from the spreadsheet for better performance and a neater appearance.

.. _build_and_customize_dashboards/customize/duplicate-dashboard:

Duplicate a dashboard
~~~~~~~~~~~~~~~~~~~~~

To duplicate a dashboard:

#. In the Dashboards app, go to :menuselection:`Configuration --> Dashboards`.
#. Open the relevant dashboard section, then, on the line of the dashboard you want to duplicate,
   click :icon:`fa-pencil` :guilabel:`Edit`.
#. In the spreadsheet that opens, click :menuselection:`File -->` :icon:`os-copy-file`
   :menuselection:`Make a copy`.
#. Rename the duplicated dashboard by clicking the name of the spreadsheet at the top left of the
   screen and editing as needed.

.. tip::
   - To return to the overview of the dashboard section, click the name of the original dashboard at
     the top left of the page, then the name of the dashboard section.
   - After duplicating a dashboard, delete the original dashboard by clicking the :icon:`fa-trash`
     :guilabel:`(trash)` icon or rename it by clicking on the name then editing it.

.. _dashboards/customize-dashboard/edit-spreadsheet:

Add, edit, or remove dashboard elements
---------------------------------------

Dashboards can be customized in various ways, such as by:

- adding new tables and charts based on previously inserted or :ref:`newly inserted Odoo data
  <dashboards/customize-dashboard/edit-spreadsheet-new-odoo-data>`. This requires a similar approach
  to :ref:`building a dashboard from scratch <build_and_customize_dashboards/build>`;
- :doc:`adding new global filters <../../../applications/productivity/spreadsheet/global_filters>`
  or editing or deleting existing ones;
- :ref:`adding or editing clickable links <spreadsheet/insert/clickable-links>` to Odoo menus, URLs,
  or to other sheets within the same spreadsheet.

.. tip::
   - The first tab of the spreadsheet serves as the front end of the dashboard. Any tables or charts
     that should be visible on the final dashboard need to be added to this sheet.
   - Dashboard elements that are no longer needed can be deleted from the spreadsheet. If, after
     deleting a dashboard element, a :ref:`data source <spreadsheet/insert/data-sources>` is no
     longer being used in the spreadsheet, this is indicated by a :icon:`fa-exclamation-triangle`
     :guilabel:`(warning)` icon in the :guilabel:`Data` menu.

   .. image:: build_and_customize_dashboards/list-deleted.png
      :alt: Warning to indicate data source no longer used in spreadsheet

.. _dashboards/customize-dashboard/edit-spreadsheet-new-odoo-data:

Insert new Odoo data
~~~~~~~~~~~~~~~~~~~~

New Odoo data, such as lists, pivot tables, or charts, can be inserted into a dashboard, starting
from the relevant list view, pivot view, or graph view. Concretely, a list or pivot table is
inserted into a new sheet in the dashboard's underlying spreadsheet; a chart is inserted on the
first sheet of the spreadsheet.

To insert new data:

#. With the relevant list view, pivot view or graph view open in your database, proceed as follows:

   - For a list view, click the :icon:`fa-cog` :guilabel:`(Actions)` icon beside the name of the
     view, then :guilabel:`Spreadsheet -->` :icon:`oi-view-list` :menuselection:`Insert list in
     spreadsheet`.
   - For a pivot or graph view, click :guilabel:`Insert in Spreadsheet` at the top left of the view.

#. In the window that opens, edit the name if needed. For a list, edit the number of records, i.e.,
   rows to be inserted, if needed.
#. Click the :guilabel:`Dashboards` tab then select in which dashboard the list, pivot table, or
   chart should be inserted.

The dashboard's underlying spreadsheet opens, with the new data inserted either on a new sheet (list
or pivot table) or on the first sheet (chart).

.. seealso::
   :doc:`Inserting Odoo data into a spreadsheet
   <../../../applications/productivity/spreadsheet/insert>`
