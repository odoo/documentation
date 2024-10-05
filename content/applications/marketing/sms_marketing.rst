:show-content:

=============
SMS Marketing
=============

Utilizing :abbr:`SMS (Short Message Service)` outreach in communication strategies can help
companies expand their market reach, especially in some countries, where emails might not be very
common, or even used at all.

Odoo's *SMS Marketing* application can also help boost conversion rates around valuable actions,
such as event registrations, free trials, purchases, etc., since text and mobile-based marketing
channels typically yield higher :abbr:`CTOR (click-to-open rate)` and :abbr:`CTR (click-through
rate)` outcomes.

.. seealso::
   `Odoo Tutorials: Marketing <https://www.odoo.com/slides/marketing-27>`_

.. cards::

   .. card:: Create SMS messages
      :target: sms_marketing/create_sms

      Explore how to create, configure, send, and schedule SMS messages.

   .. card:: SMS analysis
      :target: sms_marketing/sms_analysis

      Examine detailed reporting metrics related to every aspect of sent SMS messages.

   .. card:: SMS marketing campaigns
      :target: sms_marketing/marketing_campaigns

      Discover how to create and customize SMS marketing campaigns for any occasion with Odoo.

   .. card:: Mailing lists and blacklists
      :target: sms_marketing/mailing_lists_blacklists

      Set up custom mailing lists and blacklists to ensure all SMS messages reach the right
      recipients.

   .. card:: Pricing and FAQ
      :target: sms_marketing/pricing_and_faq

      Find out more about Odoo's SMS pricing, and check out some of the most frequently asked
      questions.

SMS marketing dashboard
=======================

When the application is opened, Odoo displays the main :guilabel:`SMS Marketing` dashboard, which
showcases the various SMS mailings that have been created, along with pertinent information and data
related to that specific message.

The :icon:`oi-view-kanban` :guilabel:`Kanban` view is the default Odoo uses when the application is
opened, which provides an organized display of the SMS mailings that have been created, and what
their current status is at the moment.

.. note::
   An :abbr:`SMS (Short Message Service)` mailing can have one of the following statuses:
   :guilabel:`Draft`, :guilabel:`In Queue`, :guilabel:`Sending`, or :guilabel:`Sent`.

In the upper right corner of the main :guilabel:`SMS Marketing` dashboard, there are a few different
view options to choose from. Each one provides a unique take on the same SMS information.

The :icon:`oi-view-list` :guilabel:`List` view provides the same useful data related to SMS
mailings, but in a more traditional list layout.

The :icon:`fa-calendar` :guilabel:`Calendar` view shows when SMS mailings are scheduled or have been
sent. Clicking a future date opens a blank SMS template to be scheduled for that date.

Lastly, the :icon:`fa-area-chart` :guilabel:`Graph` view visualizes that same SMS-related data in
series of graphs and charts. Odoo also provides various ways to sort and group the data for more
detailed analysis.

.. toctree::
   :titlesonly:

   sms_marketing/create_sms
   sms_marketing/sms_analysis
   sms_marketing/marketing_campaigns
   sms_marketing/mailing_lists_blacklists
   sms_marketing/pricing_and_faq
