:industry_module: concert_halls
:knowledge_xmlid: concert_halls.welcome_article

.. _industries/concert_halls:

=============
Concert halls
=============

The concert halls industry brings together ticket sales, artist bookings, technical preparation, and on-site
services for each performance. The concert schedule, venue capacity, and staff responsibilities
need to be ready before tickets go on sale and attendees arrive.

Use the **Events** app to organize concerts and registrations, and the **Website** app to publish
the program and accept online bookings. The **Project** app coordinates preparation, while the
**CRM** app tracks artist, sponsor, and business inquiries. During the concert, the **Point of Sale**
app handles ticket desk, bar, and merchandise sales.

.. _industries/concert_halls/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* **Events** app: Create concerts, sell tickets, and manage registrations and entrance scanning.
* **Website** app: Publish the concert program and provide access to online bookings.
* **Point of Sale** app: Sell tickets, drinks, food, and merchandise at the venue.
* **CRM** app: Follow artist, sponsor, and business customer inquiries.
* **Project** app: Organize transport, accommodation, technical work, and event preparation.
* **Social Marketing** app: Publish concert announcements and follow campaign links.

.. _industries/concert_halls/create-and-publish-concerts:

Create and publish concerts
==========================

Create one event for each concert so its schedule, ticket availability, and registrations can be
managed together:

#. Open the **Events** app and click :guilabel:`New`.
#. Enter the :guilabel:`Event Name`, :guilabel:`Date`, and :guilabel:`Venue`, and assign a
   :guilabel:`Responsible` user. Set :guilabel:`Display Timezone` for the website schedule.
#. Enable :guilabel:`Limit Registrations` and enter the concert's capacity when attendance is
   limited.
#. In the :guilabel:`Tickets` tab, click :guilabel:`Add a line`. Select the registration product,
   name the ticket tier, and set its :guilabel:`Price`, :guilabel:`Sales Start`, and
   :guilabel:`Sales End`. Set a :guilabel:`Maximum` quantity for tiers with limited availability.
#. In the :guilabel:`Communication` tab, configure booking confirmations and reminders using the
   appropriate templates and triggers.
#. Click :guilabel:`Go to Website` to edit the concert page in the **Website** app. Add the artist
   lineup, program, and practical information, then switch :guilabel:`Unpublished` to
   :guilabel:`Published` when the page is ready.

For early-bird sales, create a separate ticket tier with its own price and sales dates. Keep its
availability consistent with the other tiers and the concert's overall registration limit.

See :doc:`event configuration <../applications/marketing/events/event_setup/create_events>` for
further setup options and :ref:`online ticket sales <events/sell-tickets/website>` for the
attendee booking process.

.. _industries/concert_halls/ticket-sales-setup:

Ticket sales setup
==================

Enable the sales channels used by the venue before creating paid tickets:

#. Go to :menuselection:`Events --> Configuration --> Settings`.
#. In the :guilabel:`Registration` section, enable :guilabel:`Online Ticketing` for website sales
   and :guilabel:`Tickets with PoS` for ticket desk sales. Enable :guilabel:`Tickets with Sale` if
   bookings also require sales orders, such as group reservations.
#. Click :guilabel:`Save`.

For ticket products, set :guilabel:`Product Type` to :guilabel:`Service` and
:guilabel:`Create on Order` to :guilabel:`Event Registration`. This configuration links ticket
sales to attendee registrations.

.. _industries/concert_halls/coordinate-concert-logistics:

Coordinate concert logistics
===========================

Create a project in the **Project** app for the concert's operational work. Add tasks for artist
transport, accommodation, sound and lighting, stage setup, and other preparation. Assign each task
to the responsible team member and set its :guilabel:`Deadline`. Keep technical requirements and
team discussions in the task description and chatter.

Review task stages and statuses before the performance to identify unfinished work. For recurring
concert arrangements, use :doc:`project templates
<../applications/services/project/project_management/project_templates>` to reuse stages and tasks,
then adjust assignments and dates for each concert.

When a sold service should create a project, configure the service product's
:guilabel:`Create on Order` field to :guilabel:`Project` or :guilabel:`Project & Task` and select a
billable :guilabel:`Project Template`. Keep this service separate from registration products,
which use :guilabel:`Event Registration`.

.. _industries/concert_halls/manage-artist-and-sponsor-opportunities:

Manage artist and sponsor opportunities
======================================

Use the **CRM** app to track discussions with artists, agencies, sponsors, and companies requesting
private bookings. Record the contact and proposed arrangement on an opportunity, keep discussions
in its chatter, and schedule activities for the next follow-up. Update the opportunity as
negotiations progress so the pipeline reflects current booking and partnership activity.

For a customer-facing offer, open the opportunity and click :guilabel:`New Quotation`. The
**Sales** app must be installed. Add the agreed services and prices, send the quotation, and follow
the resulting sales order and invoicing process when the offer is accepted. Artist procurement
and supplier payments require their own purchasing and accounting records.

See :doc:`creating and sending quotations from opportunities
<../applications/sales/crm/acquire_leads/send_quotes>` for the detailed workflow.

If website inquiries need tags based on a form's radio-button choices, treat that mapping as a
customization using the **Studio** app rather than assuming every selection creates a tag.

.. _industries/concert_halls/promote-the-concert-program:

Promote the concert program
==========================

Once the concert page is published, use the **Social Marketing** app to prepare announcements for
connected accounts, such as Facebook or Instagram. Include the concert page link so readers can
reach the program and booking options.

To prepare a post in advance, select :guilabel:`Schedule later` in the :guilabel:`When` field,
enter its :guilabel:`Scheduled Date`, and click :guilabel:`Schedule`. Coordinate these posts with
newsletter announcements in the **Email Marketing** app and with the event's attendee reminders.

Follow the :doc:`social post workflow
<../applications/marketing/social_marketing/social_posts>` to manage announcements and tracked
links. Use campaign results to decide which channels to prioritize for future concerts.

.. _industries/concert_halls/sell-at-the-venue:

Sell at the venue
=================

Use the **Point of Sale** app for drinks, snacks, merchandise, and available concert tickets.
Enable the :guilabel:`Point of Sale` checkbox on products sold at a register, including event
registration products used at the ticket desk.

Organize products into point-of-sale categories so staff can find them quickly. If the bar and
ticket desk use separate registers, restrict each register to the relevant categories. See
:doc:`point-of-sale product configuration <../applications/sales/point_of_sale/products>` for the
catalog setup and :ref:`ticket sales at a register <events/sell-tickets/pos>` for event tickets.

At the entrance, open :menuselection:`Events --> Registration Desk` on a mobile device. Allow camera
access to scan ticket codes and record attendance. If an attendee cannot present a scannable code,
use :guilabel:`Select Attendee` to find their registration and record their arrival manually.
See :doc:`registration desk <../applications/marketing/events/registration_desk>` for both methods.

.. _industries/concert_halls/review-concert-results:

Review concert results
======================

After the concert, compare registrations and attendance in :menuselection:`Events --> Reporting
--> Attendees`. Group the records by event or ticket type to understand participation. Review
:menuselection:`Events --> Reporting --> Revenues` for ticket income, and use the **Point of Sale**
app's sales reports for bar and merchandise activity.

Use these results, together with the team's preparation notes, when planning the next concert's
ticket tiers, stock requirements, and staffing.

.. seealso::
   - :doc:`Attendance reporting
     <../applications/marketing/events/event_reporting/attendees_report>`
   - :doc:`Ticket revenue reporting
     <../applications/marketing/events/event_reporting/revenues_report>`
   - :doc:`Point-of-sale reporting <../applications/sales/point_of_sale/reporting>`

.. _industries/concert_halls/go-further:
.. _industries/concert_halls/additional-apps:

Additional apps
===============

Depending on the venue's operations, use these apps alongside the concert workflow:

- The **Planning** app schedules volunteers, bar staff, and sound teams.
- The **Purchase** app manages orders for bar supplies and merchandise, while the **Inventory**
  app tracks stock used by the venue and its points of sale.
- The **eCommerce** app sells concert merchandise online.
- The **Sign** app collects signatures on artist and venue agreements.
- The **Accounting** app records ticket income, donations, sponsor payments, and venue expenses.
- The **Dashboards** app brings attendance and sales information together for ongoing review.
