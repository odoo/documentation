:industry_module: summer_camps
:knowledge_xmlid: summer_camps.welcome_article

.. _industries/summer_camps:

============
Summer camps
============

The **Summer Camps** industry package helps camp organizers manage family inquiries, session
registrations, consent forms, preparation tasks, staffing, and payments in Odoo. It connects each
session’s attendees with the information and supplies needed before arrival.

Use the package to present camps online, offer family information meetings, and manage the
preparation tasks behind each stay. Confirmation messages and shared forms keep practical
information with the registration workflow.

.. _industries/summer_camps/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* **Website**: Present camp options and link to registration and meeting booking.
* **Events**: Configure camp sessions, tickets, registration questions, and attendance.
* **Project**: Organize materials, staffing tasks, and preparation deadlines.
* **Appointments**: Offer information calls or meetings with families.
* **CRM**: Follow family inquiries and school or group booking requests.
* **Sales**: Prepare quotations for group or other customized camp offers.
* **Sign**: Collect signatures on the camp’s parental authorization forms.

.. _industries/summer_camps/present-camp-options-and-follow-inquiries:

Present camp options and follow inquiries
=========================================

Create website pages with the camp activities, dates, location, accommodation, and practical
information. Link :guilabel:`Register Now` to the appropriate event registration and configure
online payments for paid tickets.

Configure contact forms to create CRM opportunities. Assign the responsible organizer and use stages
such as :guilabel:`New`, :guilabel:`Contacted`, :guilabel:`Quotation Sent`, and
:guilabel:`Confirmed`. Add relevant tags, record discussions and attachments in the chatter, and
schedule follow-up activities.

For a group request, create a quotation from the opportunity with the agreed services and terms.
Keep its confirmation linked to the participants' registration arrangements.

.. _industries/summer_camps/configure-sessions-and-registration:

Configure sessions and registration
===================================

Create each camp session in the **Events** app using a template for recurring formats. Add tags for
the camp type, duration, lodging, or meal plan. Set ticket prices, sale periods, early-booking
offers, and capacity limits.

Use registration questions for the participant information needed to prepare the camp, such as age,
dietary requirements, and the relevant preparation information. Configure confirmation, reminder,
and follow-up messages.

.. image:: summer_camps/camp-event.png
   :alt: Camp event with its registration and communication settings.

.. _industries/summer_camps/add-priced-registration-options:

Add priced registration options
-------------------------------

The package can add products according to an attendee's selected answer. Set the question type to
:guilabel:`Selection`, then select the new or existing product in the answer's :guilabel:`Event
Product` column.

The selected option's product appears during checkout and on the sales order associated with the
registration. Review the products and their prices when preparing the ticket's options.

.. image:: summer_camps/event-product-question.png
   :alt: Selection answers linked to additional registration products.

.. _industries/summer_camps/follow-attendees-and-arrivals:

Follow attendees and arrivals
-----------------------------

Use the event's registrations and reports to follow participant details, registration counts, and
camp revenue. Group participants using tags or registration answers where needed for the organizer's
communication and preparation.

Open :guilabel:`Registration Desk` when campers arrive to scan their ticket or select the attendee
and record check-in.

.. _industries/summer_camps/collect-parental-authorization:

Collect parental authorization
==============================

Prepare reusable templates in the **Sign** app for the forms used by the camp. Add the required
text, date, and signature fields, including the relevant contact and authorization information.
Assign the signer roles and generate the template's share link.

Open the camp event's communication settings to edit its confirmation email template.

.. image:: summer_camps/camp-communication.png
   :alt: Camp event communications and link to the confirmation email template.

Add that link to the confirmation email so a parent or guardian can complete the form before
arrival. In the email editor, type `/` to choose formatting options, or use `/buttons` to add a
button linked to the shared Sign form.

.. image:: summer_camps/confirmation-email.png
   :alt: Confirmation email with a button linking to the consent form.

Use the template's :guilabel:`Attachments` section for the packing list and other files sent with
the message. Create separate templates and associate them with the relevant event communications.

Follow completed signature requests in Sign. To export the recorded form answers, open the Sign
template's gear menu and select :guilabel:`Export Answers`.

.. _industries/summer_camps/arrange-family-information-meetings:

Arrange family information meetings
===================================

Create appointment types in the **Appointments** app for calls and in-person information sessions.
Set available times and assign the organizers responsible for particular camp types or age groups.
Share the booking page through the website or an inquiry response.

Configure confirmations and reminders. Add SMS reminders when the service is configured, and set
Google or Outlook synchronization for organizers using those external calendars.

.. _industries/summer_camps/prepare-the-camp-s-operations:

Prepare the camp's operations
=============================

Create a project in the **Project** app for each session or preparation period. Add tasks for
materials, equipment logistics, staff assignments, and pre-camp checklists. Set their owners and
deadlines, then follow task progress through preparation and on-site activity coordination.

.. _industries/summer_camps/additional-apps:

Additional apps
===============

- **Email Marketing**: Announce upcoming camps and send selected post-camp messages.
- **Social Marketing** Schedule camp updates on connected social accounts.
- **Surveys**: Collect feedback from families and participants.
- **Accounting**: Follow camp invoices, payments, and financial reporting.

Explore the :doc:`Odoo documentation <../../index>` and `Odoo tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`_ for more guidance.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
