:industry_module: tattoo_shop
:knowledge_xmlid: tattoo_shop.welcome_article

.. _industries/tattoo_shop:

===========
Tattoo shop
===========

The **Tattoo Shop** industry package helps tattoo studios manage custom inquiries, artist bookings,
consent forms, service sales, and supplies in Odoo. It connects each client’s idea and conversation
with the artist, session, and preparation needed for the work.

Use the package to present the artists' portfolios, arrange appointments, and keep the client's
conversation with the related records. Purchasing and scheduled social posts support the studio's
work between sessions.

.. _industries/tattoo_shop/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **CRM** app: Follow custom requests, consultations, and client activities.
* The **Sign** app: Request signatures on consent forms and other studio agreements.
* The **Website** app: Present artists, portfolios, booking links, and the custom-request form.
* The **Appointments** app: Offer sessions according to artist and resource availability.
* The **Social Marketing** app: Schedule studio posts on connected social accounts.
* The **Purchase** app: Order ink, gloves, needles, and other studio supplies.
* The **Sales** app and the **Invoicing** app: Prepare offers and bill the agreed services.

Use a separate `Odoo trial database <http://Odoo.com/trial>`__ for the sample studio workflows.

.. _industries/tattoo_shop/present-the-studio-and-collect-requests:

Present the studio and collect requests
=======================================

Use the **Website** app to introduce artists and display their work. Link the booking pages for
flash tattoos or piercings, and use a contact form for custom tattoo inquiries.

The package links CRM tags to the custom-request form. Add the relevant tags and expose the
corresponding choices so visitors can describe the type of work they want.

Maintain the site's page titles and descriptions, link its social accounts, and keep artist and
service information current.

:doc:`Configure custom-request forms
<../applications/websites/website/web_design/building_blocks/forms>`

.. _industries/tattoo_shop/follow-the-client-conversation:

Follow the client conversation
==============================

Open the inquiry in the **CRM** app, assign the artist or responsible team member, and record the
consultation and next activity. Use the chatter for client messages, internal notes, and files.

Create a quotation from the opportunity when the design and service are ready to price. Add the
agreed services, extras, and terms, send the offer, and confirm it after acceptance.

Reuse activity templates for recurring follow-up. Configure stage email actions when a booking
invitation or consent request should be sent at a particular point in the studio's process.

:doc:`Create quotations from opportunities <../applications/sales/crm/acquire_leads/send_quotes>`

.. _industries/tattoo_shop/arrange-sessions:

Arrange sessions
================

Create appointment types in the **Appointments** app with the service duration, artist availability,
and assigned resources. Publish or share their booking links.

The package's booking flow creates CRM opportunities for the appointments. Follow the session and
its related conversation from the opportunity and calendar. Add appointment types as the studio
introduces other bookable services.

:doc:`Calendar documentation <../applications/productivity/calendar>`

.. _industries/tattoo_shop/collect-consent-and-other-agreements:

Collect consent and other agreements
====================================

Prepare consent forms or contract templates in the **Sign** app. Place the required fields and
assign each field to its signer role. A document can use several signer roles when multiple parties
need to complete it.

Send the request to the intended recipients and follow its completion in Sign. Configure the
studio's stage automation when the request should be sent automatically as an opportunity
progresses. Keep the signed agreement with its related client records.

The same template workflow can be used for employment contracts or other studio agreements.

:doc:`Request consent-form signatures <../applications/productivity/sign/request_signatures>`

.. _industries/tattoo_shop/invoice-services-and-purchase-supplies:

Invoice services and purchase supplies
======================================

Create the eligible invoice from the confirmed sales order. Review the service lines and payment
terms, confirm and send it, and follow payment status in the **Invoicing** app.

In the **Purchase** app, maintain vendors and request the supplies needed. Review quantities,
prices, and arrival dates before confirming the order. Configure stock-based replenishment when the
studio also tracks those supplies in Inventory.

:doc:`Create and send service quotations
<../applications/sales/sales/sales_quotations/create_quotations>`

.. _industries/tattoo_shop/share-studio-news:

Share studio news
=================

Connect the studio's supported accounts in the **Social Marketing** app. Prepare campaigns for new
work, artist introductions, and upcoming booking opportunities. Select the relevant channels and
schedule the posts.

Use the available engagement and campaign reports to follow the published content.

:doc:`Create and schedule studio posts <../applications/marketing/social_marketing/social_posts>`

.. _industries/tattoo_shop/go-further:
.. _industries/tattoo_shop/additional-apps:

Additional apps
===============

Counter payments, multi-session designs, and supply counts can be managed alongside client bookings
and consent records:

* Use the **Point of Sale** app to take immediate payments for sessions and retail products.
* Use the **SMS Marketing** app to send selected client messages and configured session reminders.
* Use the **Project** app to organize design and preparation work for tattoos requiring several
  sessions.
* Use the **Inventory** app to count supplies and follow receipts and usage.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
