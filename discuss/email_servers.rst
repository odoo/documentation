====================================================================
How to use my own email servers to send and receive messages in Odoo
====================================================================

When is it needed
=================
You need it if you use Odoo Community or Enterprise. 

What if I use Odoo Online
=========================
You are done! Odoo Online comes up with an embedded and ready-to-use email 
server (*@yourcompany.odoo.com*).
We recommend to keep this default setting as is as it is really convenient. 

Indeed, while it is branded by Odoo, the visible source of any message
sent from Odoo will be your personal email address (your Odoo login). 
Your contacts will therefore trust your messages. 

How does it work when a contact replies to an email sent from Odoo
==================================================================
Default reply-to is a generic address used to automatically route 
any incoming email to the discussion thread of the origin business object 
(opportunity, order, task, etc.) and to the inbox of all its followers.
By default this address is "catchall@" but it can be changed. 
Thanks to it, you get a perfect message thread in Odoo and you don't 
pollute your external email box with Odoo-related topics. 

How to use my own email servers
===============================
You need to be a system admin to set this up.
Go to :menuselection:`Settings --> General Settings` and check *External 
Email Servers* (watch out: this checkbox only shows up after Odoo 10).
Then, go through the following steps.

Set an outgoing email server for outbound messages
--------------------------------------------------
You need the SMTP data of your email provider (Gmail, Outlook, 
Yahoo, AOL, etc.) as well as your admin credentials. 
Once all the information has been filled out, click on *Test Connection*.

.. image:: media/outgoing_server.png
    :align: center

Set an incoming email server for inbound messages
-------------------------------------------------
Fill out the form according to your email provider’s settings. 
Leave the *Actions to Perform on Incoming Mails* blank. Once all the 
information has been filled out, click on *TEST & CONFIRM*.

.. image:: media/incoming_server.png
    :align: center

.. note:: By default inbound messages are fetched every 5 minutes. 
   You can change this value in developer mode.
   Go to :menuselection:`Settings --> Technical --> Automation --> 
   Scheduled Actions` and look for *Mail: Fetchmail Service*.

Set the domain name
-------------------
Enter the domain name of your email servers (e.g. mycompany.com)
in General Settings.

.. image:: media/alias_domain.png
    :align: center

Create a catchall address
-------------------------
Create a catchall address in your email server settings. We advise
you to use "catchall@" so that everything works out straight away.
If you want to use another alias, you have extra steps in Odoo:

- Activate the developer mode from your Settings Dashboard.

.. image:: media/developer_mode.png
    :align: center

- Refresh your screen. Then go to :menuselection:`Settings --> Technical
  --> Parameters --> System Parameters` and enter your custom catchall alias
  in *mail.catchall.alias*.

.. image:: media/system_parameters.png
    :align: center

.. note:: You can edit the email alias used for bounced messages the same way.

How to perfectly combine Odoo Discuss and my traditional email tool
===================================================================
Odoo Discuss is a perfect tool to send and read messages related to 
business objects. But it doesn't aim to replace a full-featured email 
software (Gmail, Outlook, Yahoo, AOL, etc.). 
We recommend to take the most out of both systems without mingling them: 
What is related to Odoo business objects or applications goes into Odoo; 
What is not stays into your external email boxes. 

To do so, create specific email aliases to use in Odoo (to generate leads 
or opportunities, helpdesk tickets, etc.). If you take an email alias 
already used for messaging outside of Odoo, incoming messages will land 
into both systems.
This will negatively impact your productivity when it comes to process them.
