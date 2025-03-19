=================================
Configure ICE servers with Twilio
=================================

Odoo Discuss uses WebRTC API and peer-to-peer connections for voice and video calls. If one of the
call attendees is behind a symmetric NAT, you need to configure an ICE server to establish a
connection to the call attendee. To set up an ICE server, first, create a Twilio account for video
calls, and then, connect that Twilio account to Odoo.

Create a Twilio account
=======================

First, go to `Twilio <https://www.twilio.com>`_ and click :guilabel:`Sign up` to create a new
Twilio account. Next, enter your name and email address, create a password, and accept Twilio's
terms of service. Then, click :guilabel:`Start your free trial`. Verify your email address with
Twilio, as per their instructions.

Next, enter your phone number into Twilio. Then, Twilio will send you an SMS text message
containing a verification code. Enter the verification code into Twilio to verify your phone
number.

After that, Twilio redirects to a welcome page. Use the following list to answer Twilio's
questions:

- For :guilabel:`Which Twilio product are you here to use?`, select :guilabel:`Video`.
- For :guilabel:`What do you plan to build with Twilio?`, select :guilabel:`Other`.
- For :guilabel:`How do you want to build with Twilio?`, select :guilabel:`With no code at all`.
- For :guilabel:`What is your goal today?`, select :guilabel:`3rd party integrations`.

.. image:: ice_servers/twilio-welcome.png
   :align: center
   :alt: The Twilio welcome page.

If necessary, change the billing country. Finally, click :guilabel:`Get Started with Twilio`.

Locate the Twilio Account SID and Auth Token
============================================

To locate the Account SID and Auth Token, go to the Twilio account dashboard. Then, click
:guilabel:`Develop` on the sidebar. In the :guilabel:`Account Info` section, locate the
:guilabel:`Account SID` and the :guilabel:`Auth Token`. Both of these are needed to connect Twilio
to Odoo.

.. image:: ice_servers/twilio-acct-info.png
   :align: center
   :alt: The Twilio Account SID and Auth Token can be found uner the Account Info section.

Connect Twilio to Odoo
======================

Open the Odoo database and go to :menuselection:`Settings --> General Settings --> Discuss`. Check
the box next to :guilabel:`Use Twilio ICE servers` and enter the Twilio account's
:guilabel:`Account SID` and :guilabel:`Auth Token`. Finally, click :guilabel:`Save` to apply these
changes.

.. image:: ice_servers/connect-twilio-to-odoo.png
   :align: center
   :alt: Enable the "Use Twilio ICE servers" option in Odoo General Settings.

Define a list of custom ICE servers
===================================

This step is not required for the Twilio configuration. However, if Twilio is not configured or is
not working at any given moment, Odoo will fall back on the custom ICE servers list. The user must
define the list of custom ICE servers.

In :menuselection:`Settings --> General Settings --> Discuss`, click the :guilabel:`ICE Servers`
button under :guilabel:`Custom ICE server list`.

.. image:: ice_servers/custom-ice-servers-list.png
   :align: center
   :alt: The "ICE Servers" button in Odoo General Settings.

Odoo will redirect to the :guilabel:`ICE servers` page. Here you can define your own list of ICE
servers.

.. image:: ice_servers/ice-servers-page.png
   :align: center
   :alt: The "ICE servers" page in Odoo.

.. note::
   For on-premise instances of Odoo, the package `python3-gevent` is necessary for the Discuss
   module to run calls/video calls on Ubuntu (Linux) servers.
