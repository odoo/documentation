==============
SMS via Twilio
==============

What is Twilio
==============

Twilio is a third-party provider that enables you to send SMS messages to your clients. Odoo
provides an easy way to use this service within your Odoo apps.

Why would I need it?
--------------------

Although Odoo already comes with an out-of-the-box (IAP) solution for SMS messages, it might not
work in some countries with stricter legal requirements. Currently, Odoo registers itself when
possible to avoid extra setup for its customers, however in some countries that is not enough and
the client itself must do it. This can be done through Twilio.

Setup your Twilio account
=========================

By creating a Twilio account, you will be able to create a virtual phone number from which you will
be able to send SMS messages. These cost credits that are to be bought on Twilio, not Odoo.

#. Go to `Twilio <https://www.twilio.com>`_
#. Sign up and create a Twilio account
#. Within your Twilio account, you can create multiple accounts (e.g. one for testing, one for each
   sub-company, etc.)
#. Create a new account

   #. Enter the name, and select :guilabel:`Twilio` for the type
   #. Select your :guilabel:`Billing Country` and click :guilabel:`Create new account`
   #. Select the different options that match your needs

      - For the :guilabel:`Twilio product`, select :guilabel:`SMS`
      - For :guilabel:`How to build with Twilio`, select :guilabel:`With no code at all`
      - For your :guilabel:`goal`, select :guilabel:`3rd party integrations`
   #. Click on :guilabel:`Get Started with Twilio`
#. You account is now created, and you should arrive on your :guilabel:`Dashboard`
#. Go to :menuselection:`Phone Numbers --> Manage --> Buy a number`
#. Buy a number (it is a paying service, but you should have received some credits to start with)
#. Go back to bottom of the :guilabel:`Dashboard` page
#. Copy the :guilabel:`Account SID` and :guilabel:`Auth Token`

Beware that sending SMS to some countries (such as the US or Canada) might require a registration.
This can only be done by you, and not by Odoo. Please check out `Twilio's Help Center
<https://help.twilio.com>`_


Setup Odoo to use Twilio
========================

#. :ref:`Install <general/install>` the :guilabel:`Twilio SMS` module (`sms_twilio`)
#. In Odoo, go to :menuselection:`Settings --> General Settings --> Contacts --> Send SMS`, select
   :guilabel:`Twilio` in the list of options, and save your change.
#. Go back to that option, and click :guilabel:`Manage Twilio Connection`
#. Paste the copied credentials accordingly
#. Click on :guilabel:`Reload numbers`
#. Your newly bought phone number should appear in the list
#. You can use the testing section to send an SMS

You can have multiple numbers (for instance once per country, or one per campaign), in that case,
you can reorder the numbers. By default, when sending an SMS to a client, Odoo will select the
number whose country is the same as the client. If none matches, Odoo will use the first number
available from the list respecting the order you have chosen.
