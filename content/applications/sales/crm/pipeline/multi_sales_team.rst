====================
Multiple sales teams
====================

Use the *Sales Teams* feature to manage several sales teams, departments, or channels, each with
their own unique sales processes.


Create a new sales team
=======================

To create a new sales team, go to :menuselection:`CRM --> Configuration --> Sales Teams`, then
click :guilabel:`Create`.

On the creation page, set an :guilabel:`Email Alias` to automatically generate a lead/opportunity
for this sales team every time a message is sent to that unique email address. Choose whether to
accept emails from :guilabel:`Everyone`, :guilabel:`Authenticated Partners`, or :guilabel:`Followers
Only`.

Set an :guilabel:`Invoicing Target` if this team has specific monthly revenue goals. Set a
:guilabel:`Domain` to assign leads/opportunities to this sales team based on specific filters, such
as country, language, or campaign.

.. image:: multi_sales_team/sales-team-creation.png
   :align: center
   :alt: Create a sales team in Odoo CRM.

Add members to a sales team
---------------------------

To add team members, click :guilabel:`Add` under the :guilabel:`Members` tab when editing the sales
team's configuration page. Select a salesperson from the drop-down menu or create new salesperson.
Set a maximum number of leads that can be assigned to this salesperson in a 30-day period to ensure
that they do not overwork.

.. image:: multi_sales_team/add-a-salesperson.png
   :align: center
   :alt: Add a salesperson in Odoo CRM.

One person can be added as a team member or :guilabel:`Team Leader` to multiple sales teams,
allowing them to access all of the pipelines that they need to.

Sales team dashboard
====================

To view the sales team dashboard, go to :menuselection:`CRM --> Sales --> Teams`. Odoo users will
see any teams that they are a part of as dashboard tiles.

Each tile gives an overview of the sales team's open opportunities, quotations, sales orders, and
expected revenue, as well as a bar graph of new opportunities per week and an invoicing progress
bar.

.. image:: multi_sales_team/sales-team-overview.png
   :align: center
   :alt: Sales team overview dashboard in Odoo CRM.

Click on the three dots in the corner of a tile to open a navigational menu that lets users quickly
view documents or reports, create new quotations or opportunities, pick a color for this team, or
access the team's configuration page.

.. image:: multi_sales_team/team-overview-three-dot-menu.png
   :align: center
   :alt: Click the Three Dot Menu in Odoo CRM dashboard to view documents and create opportunities.

Click on the :guilabel:`Pipeline` button to go directly to that team's CRM pipeline.
