:industry_module: night_clubs
:knowledge_xmlid: night_clubs.welcome_article

.. _industries/night_clubs:

==========
Nightclubs
==========

The **Night Clubs** industry package helps nightclubs manage advance and door ticket sales, guest
check-in, bar orders, event promotion, and supplier purchases in Odoo. It connects admission and
sales with the supplies and staffing needed for each opening.

Use the package to publish events, check in guests, and take payments at separate entrance and bar
sales points. Supplier records and campaign reporting help the team prepare for upcoming nights and
understand how each event performed.

.. _industries/night_clubs/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Website** app: Present upcoming events and provide their online booking pages.
* The **Events** app: Configure ticket types, capacity, confirmations, and guest check-in.
* The **Point of Sale** app: Take entrance and bar payments and follow sales by sales point.
* The **Social Marketing** app: Plan event promotion across connected, supported social accounts.
* The **Purchase** app: Order drinks and consumables from the club’s suppliers.

.. note::
   The Odoo mobile app provides access to the database from a phone.

Use a separate `Odoo trial database <http://Odoo.com/trial>`__ for the sample event workflows.

.. _industries/night_clubs/sell-tickets-and-welcome-guests:

Sell tickets and welcome guests
===============================

.. _industries/night_clubs/prepare-online-ticket-sales:

Prepare online ticket sales
---------------------------

Create an event in the **Events** app with its date, location, and attendance capacity. Add ticket
types, such as :guilabel:`General Admission` and **VIP**, with their prices and sale limits.

Prepare the event's page in the **Website** app with the lineup, entry information, and booking
options. Configure the required ticket-sales features and online payment provider, then publish the
page. Use the event's communication settings to send confirmation emails and tickets after
registration.

:doc:`Publish event pages and tickets
<../applications/marketing/events/promote_monetize/sell_tickets>`

.. _industries/night_clubs/sell-tickets-at-the-door:

Sell tickets at the door
------------------------

Configure the entrance the **Point of Sale** app with the event ticket products and enabled payment
methods. Open its session, select the ticket and event, record the attendee information required by
the ticket workflow, and complete payment. Issue the receipt and ticket using the configured
printing or email options.

Use the sales reports to compare entrance sales with advance bookings.

.. _industries/night_clubs/check-in-registered-guests:

Check in registered guests
--------------------------

Open :menuselection:`Events --> Registration Desk` at the entrance. Scan the code on the guest's
ticket with the configured scanner or device camera, or select the attendee directly to record
arrival. Camera scanning requires access to the device's camera. See the :doc:`Registration Desk
documentation <../applications/marketing/events/registration_desk>` for the available check-in
options.

.. _industries/night_clubs/run-the-bars:

Run the bars
============

Add drinks as products and group them into categories, such as cocktails, beer, and shots. Configure
a separate the **Point of Sale** app for each bar station when their sales and sessions should be
followed separately. Staff can use the interface on a touchscreen or tablet.

Use the configured restaurant floor plan and tables when orders should remain open as tabs. Add the
drinks to the order, apply the agreed customer account or discount where relevant, and take payment
using an enabled method.

For stock-tracked items, the sales create stock movements according to the sales-point
configuration. Use the **Inventory** app when bottle, mixer, and accessory stock needs detailed
tracking.

:doc:`Point of Sale app Documentation <../applications/sales/point_of_sale>`

.. _industries/night_clubs/promote-upcoming-nights:

Promote upcoming nights
=======================

Connect the club's supported social accounts in the **Social Marketing** app. Prepare and schedule
posts around event announcements, lineup updates, and booking deadlines. Select the connected
channels for each post and follow the engagement information available for those channels.

Use the **Email Marketing** app when newsletters should reach selected contacts, such as regular
guests or VIP audiences. Create the relevant contact groups or filters and use the matching audience
when preparing a campaign.

.. _industries/night_clubs/purchase-drinks-and-consumables:

Purchase drinks and consumables
===============================

Maintain vendors and purchasing information for drinks, mixers, and other consumables. In The
**Purchase** app, create a request for quotation, add the quantities needed, and review the vendor's
prices and expected arrival date. Confirm the purchase order when ready to order.

When stock is tracked in the **Inventory** app, follow the receipt and record the quantities
received. Configure reordering rules for regularly stocked items when replenishment should be based
on minimum quantities. Purchase records retain vendor prices for comparison between orders.

:doc:`Create and confirm supplier orders
<../applications/inventory_and_mrp/purchase/manage_deals/rfq>`

.. _industries/night_clubs/review-event-results:

Review event results
====================

Follow ticket sales, attendance, bar revenue, and purchasing costs in the related app reports. Use
the **Dashboards** app for a combined overview when the club needs those figures in one place.
Review the results alongside the event schedule when preparing the next opening.

.. seealso::
   :doc:`Create and schedule social posts <../applications/marketing/social_marketing/social_posts>`

.. _industries/night_clubs/go-further:
.. _industries/night_clubs/additional-apps:

Additional apps
===============

Staffing, bar stock, and communication between events can be managed alongside ticket and counter
sales:

* Use the **Planning** app to schedule entrance, bar, and security shifts.
* Use the **Payroll** app to manage staff pay with the relevant contracts and payroll configuration.
* Use the **Inventory** app to follow stocked bottles, mixers, and accessories and configure
  replenishment.
* Use the **Email Marketing** app to send event announcements and loyalty offers to selected
  contacts.
* Use the **Dashboards** app to review ticket sales, bar results, and costs together.
* Use the **Accounting** app to follow sales, payments, reconciliation, and financial reporting.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
