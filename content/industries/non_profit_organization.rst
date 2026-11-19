:industry_module: non_profit_organization
:knowledge_xmlid: non_profit_organization.welcome_article

.. _industries/non_profit_organization:

======================
Nonprofit organization
======================

The **Nonprofit Organization** industry package helps nonprofit organizations manage supporter
records, donations, campaigns, events, volunteer schedules, and expenses in Odoo. It connects
participation in the mission with the contributions and costs supporting each initiative.

Use the package to publish donation and petition forms, arrange events, and schedule volunteers.
Contact records and mailing tools support the conversations that continue after a campaign, while
donation receipts and financial records help the team prepare its period-end reporting.

.. _industries/non_profit_organization/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Community** app: Maintain donation records and prepare donor receipts.
* The **Project** app: Organize campaign tasks, responsibilities, and deadlines.
* The **Contacts** app: Maintain donors, members, volunteers, and partner records.
* The **CRM** app: Follow supporter and partner conversations and planned activities.
* The **Events** app: Arrange awareness events, volunteer actions, and member meetings.
* The **Website** app and the **eCommerce** app: Publish support forms and sell merchandise and
  memberships online.
* The **Subscriptions** app: Manage memberships with recurring fees.
* The **Planning** app: Assign volunteer roles and shifts.
* The **Calendar** app: Schedule meetings, briefings, and training sessions.
* The **Email Marketing** app: Send newsletters and campaign messages to selected supporters.
* The **Expenses** app: Record and approve campaign and operational expenses.
* The **Sales** app and the **Invoicing** app: Follow merchandise orders, partnership offers, and
  invoices.

.. note::
   The Odoo mobile app provides access to the database from a phone.

.. _industries/non_profit_organization/collect-donations-and-prepare-receipts:

Collect donations and prepare receipts
======================================

Use the donation block in the **Website** app to collect contributions and the donor information
needed by the organization. The package records donations in a dedicated journal.

Prepare receipts at the end of the reporting period:

1. Review the donor's donation invoices and payments for the period.
2. Create the donation receipt in :guilabel:`Community`, grouping the relevant donations for that
   donor.
3. Use :guilabel:`Send message` in the chatter and select the :guilabel:`Donation Receipt` template
   to prepare and send the receipt.
4. Select the period's receipts and print the :guilabel:`Donation Receipt Summary` for the
   organization's reporting process.

To send several prepared receipts together, select them in the list and use the send-email action.
Add the required signature to the user profile so it appears on the documents. Review the receipt
information and the organization's applicable requirements before sending it.

.. _industries/non_profit_organization/organize-events-and-volunteer-activities:

Organize events and volunteer activities
========================================

Create an event in the **Events** app for a public talk, fundraiser, volunteer day, or annual
meeting. The demonstration includes a General Assembly and a World Rivers Day walk.

Set the dates, venue, ticket types, and attendance limits. Add entry slots when participants should
choose a time. Prepare the website event page with practical information and configure confirmation
messages and reminders.

Publish public events or share the event link with the intended audience. Review the page's access
settings when participation should be restricted. Share registration links through email or social
posts.

For recurring volunteer actions, such as **Refugee Welcome Pack Distribution**, create the upcoming
events and send the schedule so volunteers can select the actions they can attend.

.. _industries/non_profit_organization/present-the-mission-and-support-options-online:

Present the mission and support options online
==============================================

Use the **Website** app to explain the organization's mission, current projects, and ways to
participate. Add donation and petition forms and link the event pages with their booking options.

For merchandise, create products such as **Uplift Candle** with descriptions, images, and prices.
Publish them in the **eCommerce** app and configure the payment provider and delivery options used
for online orders. Membership pages can describe the benefits and link to the purchase option.

For memberships with recurring fees, configure the product and recurring plan in the
**Subscriptions** app. Follow active memberships and renewal invoices from the subscription records.

Set bulk pricing when resellers receive quantity discounts:

1. Open :menuselection:`Sales --> Configuration --> Pricelists` and create **Reseller Bulk
   Pricing**.
2. Add the price rules and their minimum quantities.
3. Assign the pricelist to the relevant reseller contacts.
4. Use that pricelist on their orders so the matching rules determine the prices.

.. _industries/non_profit_organization/coordinate-campaign-tasks:

Coordinate campaign tasks
=========================

Create a project for a fundraising or awareness campaign in the **Project** app. Add tasks such as
**Design flyers**, :guilabel:`Contact sponsors`, and **Organize event logistics**.

Assign each task to a team member or volunteer, set its priority and deadline, and update its status
as work progresses. Use task discussions and attachments to keep campaign files with the related
work. Follow outstanding tasks and progress from the project overview.

.. _industries/non_profit_organization/maintain-supporter-relationships:

Maintain supporter relationships
================================

Use the **Contacts** app to maintain donor, member, volunteer, and partner information. Apply tags
that reflect those roles, then use them to find the relevant audience for a follow-up or campaign.

In the **CRM** app, record partner or supporter conversations, schedule activities, and follow open
opportunities. Keep communication and notes on the related records so the next person following up
can see the discussion.

.. _industries/non_profit_organization/send-campaign-updates:

Send campaign updates
=====================

Create a mailing in the **Email Marketing** app for a newsletter, donation appeal, event invitation,
or thank-you message. Select :guilabel:`Contacts` as the recipient type and filter the audience
using tags such as **Donors**, **Volunteers**, **Partners**, or **Signatories**.

Save a frequently used audience filter as a favorite. Prepare the message in the editor and use
dynamic fields where personalization is needed. Review the selected recipients, then send or
schedule the mailing. Follow opens and clicks in the mailing's reporting.

.. _industries/non_profit_organization/schedule-volunteers-and-internal-meetings:

Schedule volunteers and internal meetings
=========================================

Assign volunteer roles, such as **Outreach Coordinator** or **Event Assistant**, in the relevant
employee records. Set their availability, then create shifts in the **Planning** app.

Use :guilabel:`Auto Plan` to assign eligible volunteers according to the configured roles and
available time. Publish the schedule so they receive their assignments by email or through the
planning portal. Update and republish shifts when the plan changes.

Use the **Calendar** app for briefings, team meetings, fieldwork planning, and training. Select the
date and time, add the attendees, and compare their calendars when choosing a slot. Configure Google
or Outlook synchronization for users who also maintain an external calendar.

.. _industries/non_profit_organization/follow-expenses-orders-and-payments:

Follow expenses, orders, and payments
=====================================

.. _industries/non_profit_organization/campaign-expenses:

Campaign expenses
-----------------

Team members submit expense records with their receipts in the **Expenses** app. Link expenses to
the campaign's analytic account when campaign cost tracking is configured. Submit the records for
approval, then follow the approved reimbursement and accounting workflow.

.. _industries/non_profit_organization/sales-and-invoicing:

Sales and invoicing
-------------------

Create quotations in the **Sales** app for merchandise in bulk or an agreed partnership package. Use
the package's donation records for contributions collected through its donation workflow.

Confirm an accepted quotation to create the sales order. Click :guilabel:`Create Invoice` when the
order is ready to invoice according to its products' policies. Review, confirm, and send the
invoice, then follow payment status and reminders in the **Invoicing** app.

.. _industries/non_profit_organization/run-a-campaign-from-start-to-finish:

Run a campaign from start to finish
===================================

The **Stop Child Labor** example brings the workflows together:

1. Create the campaign project with tasks for awareness materials and outreach to schools and local
   authorities.
2. Publish a donation form and petition page.
3. Arrange **Community Talks** or **Film Screenings** in Events.
4. Define volunteer roles and publish the shifts in Planning.
5. Sell campaign merchandise, such as a **Stop Child Labor** badge, through eCommerce.
6. Record campaign expenses and link their costs to the project where configured.
7. Follow donations received through the website.
8. Prepare and send donor receipts at the end of the reporting period.
9. Send updates and thank-you messages to the relevant supporters and petition signers.

.. seealso::
   - :doc:`Create mailing lists and select audiences
     <../applications/marketing/email_marketing/mailing_lists>`
   - :doc:`Configure staff and volunteer shifts <../applications/services/planning>`

.. _industries/non_profit_organization/go-further:
.. _industries/non_profit_organization/additional-apps:

Additional apps
===============

Campaign finances, field communication, and stocks of fundraising materials can be followed
alongside supporter and volunteer activities:

* Use the **Accounting** app to use campaign analytic accounts and follow financial reporting.
* Use the **WhatsApp** app to communicate with field volunteers through configured business
  messaging.
* Use the **Social Marketing** app to schedule campaign posts and follow engagement on connected
  accounts.
* Use the **Inventory** app to track merchandise and materials used in campaigns.
* Use the **Purchase** app to order campaign supplies and follow vendor costs.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
