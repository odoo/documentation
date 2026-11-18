:industry_module: food_trucks
:knowledge_xmlid: food_trucks.welcome_article

.. _industries/food_trucks:

===========
Food trucks
===========

The **Food Trucks** industry package helps food truck operators manage event inquiries, service
quotations, team schedules, on-site food sales, and organizer billing in Odoo. It connects corporate
and private-event bookings with the service delivered at each stop.

Use the package to keep event details with the job and distinguish the organizer's agreed fee from
sales made to attendees. The same records support follow-up and invoicing after the truck returns.

.. _industries/food_trucks/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **CRM** app: Follow event inquiries and booking opportunities.
* The **Sales** app: Quote attendance time and other agreed event charges.
* The **Planning** app: Schedule field-service visits and assign the truck team.
* The **Point of Sale** app: Take food and drink orders and payments on site.
* The **Invoicing** app: Bill the event organizer for the booked services.


.. _industries/food_trucks/follow-event-bookings:

Follow event bookings
=====================

Record corporate and private-event inquiries in the **CRM** app. Move opportunities through the
Kanban stages, add tags for the booking type, and schedule activities for follow-up. Keep
conversations and event details in the chatter.

:doc:`Follow incoming event requests <../applications/sales/crm/acquire_leads/email_manual>`

.. _industries/food_trucks/prepare-the-offer:

Prepare the offer
=================

When the event requirements are clear, create a quotation in the **Sales** app. Include the
attendance duration, services, and any other charges agreed with the organizer. Send the offer and
confirm the order when accepted.

:doc:`Create and send event quotations
<../applications/sales/sales/sales_quotations/create_quotations>`

.. _industries/food_trucks/plan-the-event-visit:

Plan the event visit
====================

For service products configured to create a field-service task, confirming the order creates the
linked task in the **Project** app. Open it to assign the team, set the visit time, and record the
equipment or preparation needed for the event.

Use the **Planning** app to schedule field-service shifts for upcoming visits. An intervention can
also be created directly in Planning when no CRM opportunity or sales quotation is needed. Link the
shift to the relevant customer and sales order, then publish it.

:doc:`Field Service Documentation <../applications/services/planning/field_service>`

.. _industries/food_trucks/sell-food-on-site:

Sell food on site
=================

Open a **Point of Sale** app session at the event. Add the menu products, quantities, and
preparation notes, then collect payments from the organizer or individual attendees as appropriate.

Configure discounts and pricelists for the offers the truck uses. Group products and food combos
into categories so sales reports show how the menu performs.

:doc:`Configure menu products <../applications/sales/point_of_sale/products>`

.. _industries/food_trucks/invoice-the-organizer:

Invoice the organizer
=====================

Create the organizer's invoice from the sales order for the agreed attendance and service fees.
Include the terms and conditions in the invoice layout and send the invoice from Odoo. Keep those
booked services separate from attendee purchases already paid through Point of Sale.

:doc:`Create and manage organizer invoices
<../applications/finance/accounting/customer_invoices/overview>`

.. _industries/food_trucks/go-further:
.. _industries/food_trucks/additional-apps:

Additional apps
===============

Ingredient purchases, vehicle-side stock, and announcing the truck’s next stop can be managed
alongside event bookings:

* Use the **Purchase** app and the **Inventory** app to order ingredients and follow stock used by
  the truck.
* Use the **Social Marketing** app to schedule posts about upcoming locations and events.
* Use the **Email Marketing** app to keep past event organizers informed about services and
  availability.
* Use the **Accounting** app to manage event payments, counter sales, and supplier bills.
* Use the **Website** app to publish the menu, event services, and booking contact details.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
