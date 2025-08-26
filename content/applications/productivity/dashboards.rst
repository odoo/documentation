:show-content:

==========
Dashboards
==========

.. toctree::
   :titlesonly:

   dashboards/build_and_customize_dashboards
   dashboards/my_dashboard

**Odoo Dashboards** allows you to consult, customize, and build interactive dashboards that display
real-time data from your Odoo database in an easy-to-understand way. By centralizing data from
various Odoo sources in a single location, dashboards provide an overview of key business metrics
that can help you monitor business performance and make informed decisions.

:doc:`Odoo spreadsheets <../../applications/productivity/spreadsheet>` serve as the foundation for
dashboards, with tables and charts used to structure and visualize dynamic Odoo data. :ref:`Data
sources <spreadsheet/insert/data-sources>` connect a dashboard's underlying spreadsheet to your
database, ensuring the most recent data is retrieved every time the dashboard is opened or
refreshed.

With Odoo Dashboards, users can, depending on their :ref:`access rights
<dashboards/access-and-sharing>`:

- :ref:`consult dashboards <dashboards/consult-dashboards>`, including :ref:`standard,
  pre-configured dashboards <dashboards/consult-dashboards/standard>`
- :ref:`interact with dashboards <dashboards/use-dashboards/interact>` using filters and by
  accessing underlying data
- :ref:`share a snapshot of a dashboard <dashboards/access-and-sharing>` with internal users who do
  not have the appropriate access rights or with external users
- :doc:`build custom dashboards
  <../../applications/productivity/dashboards/build_and_customize_dashboards>` using Odoo
  Spreadsheet
- :ref:`customize dashboards <build_and_customize_dashboards/customize>` to modify what data is
  shown, the layout, or the filters available
- :ref:`manage access rights <dashboards/access-and-sharing>` to dashboards
- centralize frequently consulted Odoo views on a personal
  :doc:`../../applications/productivity/dashboards/my_dashboard` page

.. tip::
   - Once a spreadsheet has been converted into a dashboard, it can only be accessed via the
     Dashboards app.
   - Unlike other Odoo dashboards, :guilabel:`My Dashboard` is not based on Odoo Spreadsheet, but
     rather on :doc:`Odoo views <../studio/views>`.

.. _dashboards/consult-dashboards:

Consult dashboards
==================

On the main Dashboards page, the left panel lists all :ref:`dashboards a user has access to
<dashboards/access-and-sharing>`, grouped by section. Clicking on a dashboard name opens that
dashboard in the main part of the page.

.. tip::
   Clicking the :icon:`fa-angle-double-left` :guilabel:`(double chevron)` icon at the top of the
   left panel collapses the panel, maximizing the space available for dashboards.

.. _dashboards/consult-dashboards/standard:

Standard dashboards
-------------------

Depending on which apps are installed, a series of standard dashboards is available by default.

These pre-configured dashboards have been designed to provide the most relevant insights
for the topic in question. Data on specific aspects of the topic is presented in tables and charts,
while dashboard-specific filters allow users to tailor the view to their needs.

.. example::
   Within the :guilabel:`Sales` section in the Dashboards app, the :guilabel:`Sales` dashboard gives
   an overview of the number of quotations and orders, the revenue, and the average order value, as
   well as a chart showing monthly sales. It also includes tables listing top quotations and sales
   orders, top-performing products and salespeople, and top countries served.

   A series of pre-configured global filters at the top of the dashboard allows the entire dashboard
   to be filtered by, e.g., product or sales team. A default value of `Last 90 days` in the period
   filter means data from the previous 90 days is automatically retrieved every time the dashboard
   is opened or refreshed.

   .. image:: dashboards/sales-dashboard.png
      :alt: Overview of Sales dashboard

Standard dashboards can be :ref:`customized <build_and_customize_dashboards/customize>` by a user
with the appropriate :ref:`access rights <dashboards/access-and-sharing/customize-configure-build>`.
For example, dashboard elements like tables and charts, or global filters can be added, edited, or
removed.

.. important::
   When customizing a standard dashboard, it is highly recommended to :ref:`duplicate the dashboard
   <build_and_customize_dashboards/customize/duplicate-dashboard>` and make any changes on the
   duplicated version. Standard dashboards are reinstalled at each Odoo version upgrade, meaning any
   customizations on the original version are lost.

.. _dashboards/use-dashboards/interact:

Interact with dashboards
------------------------

In addition to consulting a dashboard for a high-level overview of key business data, it is also
possible to interact with the dashboard for a more detailed analysis:

- **Filter data**: Most standard dashboards have one or more :doc:`global filters
  <spreadsheet/global_filters>`, shown as dropdown menus, at the top of the dashboard. These filters
  allow all the data on the dashboard to be filtered at the same time, for example, to show data
  only for a specific period of time, or for one or more salespeople or customers.

- **Open underlying database records**: To access database records referenced by a dashboard, click
  on the relevant value in a table or on a data point on a chart. Doing so opens either the
  individual record, or, in the case of charts or tables displaying consolidated data, a list of the
  referenced records.

- **Open underlying database views**: To access the view from which the data for a specific chart
  or table is retrieved, click on the title of the chart or table. Doing so opens the corresponding
  list view, pivot view or graph view.

.. tip::
   To return to a dashboard after drilling down to underlying records or views, click the
   :guilabel:`Dashboards` breadcrumb at the upper left of the page.

.. _dashboards/configuration:

Configuration
=============

.. note::
   Only a user with the appropriate :ref:`access rights <access-rights/groups>` can configure or
   modify settings for dashboards and dashboard sections.

To manage dashboards and dashboard sections, go to :menuselection:`Configuration --> Dashboards`.
The following actions are possible at the level of dashboard sections:

- **Change the order of dashboard sections** by using the :icon:`oi-draggable` :guilabel:`(drag
  handle)` icon to move a section to a new position.

- **Duplicate a dashboard section** by selecting the relevant section name, clicking the
  :icon:`fa-cog` :guilabel:`Actions` button, and then :icon:`fa-clone` :guilabel:`Duplicate`. The
  dashboards within the section are not duplicated.

- **Delete a dashboard section** by selecting the relevant section name, clicking the :icon:`fa-cog`
  :guilabel:`Actions` button then :icon:`fa-trash-o` :guilabel:`Delete`.

   .. tip::
      Standard, pre-installed dashboard sections cannot be deleted; custom dashboard sections, on
      the other hand, can be deleted.

- **Create a new dashboard section** by clicking :guilabel:`New`, then entering the section name.
  When creating a new section, it is possible to add a dashboard to the new section
  directly by clicking :guilabel:`Add a spreadsheet`.

Clicking on an individual dashboard section lists all dashboards within that section. The following
actions are possible:

- **Change the order of a dashboard within its section** by using the :icon:`oi-draggable`
  :guilabel:`(drag handle)` icon to move the dashboard to a new position.

- **Edit the name of a dashboard section or dashboard** by clicking the name and modifying it.

- **Add or remove user groups** to :ref:`control access to the dashboard
  <dashboards/access-and-sharing>`.

- **Select a company** if, in a :doc:`multi-company
  <../../applications/general/companies/multi_company>` database, the dashboard should only be
  visible to users of one company. If this field is left blank, the dashboard is visible to all
  users with the appropriate access rights, regardless of which company is currently selected in the
  database.

- **Unpublish a dashboard** by disabling the :guilabel:`Is Published` toggle.

- **Edit the underlying spreadsheet** of a dashboard by clicking :icon:`fa-pencil` :guilabel:`Edit`
  on the line of the relevant dashboard.

  .. important::
     When customizing a standard dashboard, it is highly recommended to :ref:`duplicate the
     dashboard <build_and_customize_dashboards/customize/duplicate-dashboard>` and make any changes
     on the underlying spreadsheet of the duplicated version. Standard dashboards are reinstalled at
     each Odoo version upgrade, meaning any customizations on the original version are lost.

- **Delete a dashboard** by clicking the :icon:`fa-trash` :guilabel:`(trash)` icon.

  .. tip::
     A standard dashboard that is deleted is reinstalled at the next Odoo version upgrade.

- **Add a new dashboard to the section** by clicking :guilabel:`Add a spreadsheet`. Two options
  exist:

  - To convert an existing spreadsheet into a dashboard and add it to the new section, select the
    relevant spreadsheet, then click :guilabel:`Confirm`. Back in the section overview, update the
    :guilabel:`Group` and :guilabel:`Company` fields if needed.

  - To start creating a dashboard from scratch, select :guilabel:`Blank spreadsheet`. To return to
    the section overview, click the name of the section at the top left of the page. Update the
    :guilabel:`Group` and :guilabel:`Company` fields if needed.

  .. note::
     After a spreadsheet has been converted into a dashboard, it can only be :ref:`accessed and
     edited via the Dashboards app <build_and_customize_dashboards/customize>`.

  .. tip::
     - A newly created dashboard is by default accessible to users belonging to the default internal
       :ref:`user group <access-rights/groups>`. Edit this if needed via the configuration page of
       the relevant dashboard section.
     - It is also possible to :ref:`convert a spreadsheet into a dashboard
       <spreadsheet/manage-spreadsheets/convert-to-dashboard>` and add it to a dashboard section
       starting from the spreadsheet in the Documents app.

.. _dashboards/access-and-sharing:

Access rights and sharing
=========================

.. _dashboards/access-and-sharing/viewing:

Consulting dashboards
---------------------

The *right to view and interact with a dashboard* is based on :ref:`user groups
<access-rights/groups>`, and is managed in the :ref:`Configuration settings
<dashboards/access-and-sharing/manage-view-access>` of the Dashboards app. Only users who are part
of a group that has been granted access to a specific dashboard see that dashboard in the left-hand
panel on the main Dashboards page. Users with `Dashboard / Admin` access rights can view all
dashboards.

However, the *visibility of dynamic Odoo data within a dashboard* is handled separately. This is
based on a user's :ref:`access rights <access-rights/user-permissions>` to the model from which the
data has been retrieved, and takes into account any record rules that may restrict access.

.. important::
   User permissions are taken into account when a user opens a dashboard, with the dashboard only
   being populated with data the user is authorized to see. This means that a user could in theory
   be able to view a dashboard but, due to a lack of appropriate permissions, not be able to see the
   Odoo data the dashboard's creator intended to be displayed.

   Therefore, it is crucial to take user permissions into consideration when granting dashboard
   access to groups.

.. example::
   Granting the user group `Sales / User: Own Documents Only` access to the :guilabel:`Sales`
   dashboard would serve little purpose. While users belonging to that group would be able to view
   and interact with the dashboard, they would only see data related to their own sales, rendering
   the overall dashboard misleading.

.. _dashboards/access-and-sharing/manage-view-access:

Manage access rights to view dashboards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To manage users' rights to view and interact with a dashboard:

#. In the Dashboards app, go to :menuselection:`Configuration --> Dashboards`.
#. From the list of dashboard sections, open the relevant section.
#. On the line of the relevant dashboard, in the :guilabel:`Group` column:

   - add a user group by clicking the field until a dropdown with user groups appears, then
     selecting the appropriate user group. In the dropdown, click :guilabel:`Search More` to access
     the full list of user groups;
   - remove a user group by clicking the relevant group name, then clicking :icon:`fa-times`
     :guilabel:`(Delete)`.

.. _dashboards/access-and-sharing/customize-configure-build:

Building, customizing and configuring dashboards
------------------------------------------------

Only users with `Dashboards / Admin` access rights can :ref:`customize dashboards
<build_and_customize_dashboards/customize>` or :ref:`configure dashboard settings
<dashboards/configuration>`. To :ref:`build a dashboard from scratch
<build_and_customize_dashboards/build>`, a user must have both `Dashboards / Admin` and `Documents
/ User` access rights.

.. _dashboards/access-and-sharing/sharing:

Share dashboard snapshot
------------------------

To share a frozen version of a dashboard with an internal user who does not have the appropriate
access or with an external party, click :icon:`fa-share-alt` :guilabel:`Share` at the top-right of
the page then click the :icon:`fa-clone` :guilabel:`(copy)` icon to copy a shareable link to your
clipboard.
