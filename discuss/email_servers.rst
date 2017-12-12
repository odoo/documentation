=================================================================
How to use my own email servers to send and receive emails in Odoo
=================================================================

When is it needed
=================
Using your own email servers is required to send and receive messages
in Odoo instances running on-premise. Odoo Online embeds an out-of-box 
email solution. However you can still use
your own email servers with the online edition. Some insights 
are provided here below.

How to set it up in Odoo
========================
As a system admin, go to :menuselection:`Settings --> General Settings` 
and check *External Email Servers*.
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
Enter the domain name of your email server (e.g. mycompany.com)
in General Settings.

.. image:: media/alias_domain.png
    :align: center

This domain name is used for the reply-to address of your outgoing emails,
along with the alias mentioned here below. It is also used to generate new 
business records from incoming emails (Leads & Opportunities in Odoo CRM, 
Tickets in Odoo Helpdesk, etc.).

Create a catchall address
-------------------------
When a contact replies to an email sent out from Odoo, the *reply-to* address
is a generic address used to route the reply to the right discussion thread
in Odoo and to the inbox of all its followers.
By default the alias of this address is "catchall@" but it can be changed. 

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


What to set up outside Odoo
===========================
Sending out emails from Odoo requires a few additional steps to prevent your
messages to be flagged as spam by receivers.

Be SPF-compliant
----------------
Sender Policy Framework (SPF) is an email-validation system that checks that 
incoming emails have been sent from a host authorized by the email domain's 
administrator. Such a security system is used in most email servers. 
If you don't comply with it, your emails sent from Odoo will be likely
flagged as spam.

To be SPF-compliant, you need to authorize Odoo as a sending host 
in your domain name settings:

* Sign in to your domain’s account at your domain host.
* Locate the page for updating your domain’s DNS records. 
* If no TXT record is set, create one with following definition:
  v=spf1 include:_spf.odoo.com ~all
* In case a TXT record is already set, add "include:_spf.odoo.com".
  
  e.g. for a Gmail server it should be:

  v=spf1 include:_spf.odoo.com include:_spf.google.com ~all

Find `here <https://www.mail-tester.com/spf/>`__ the exact procedure to 
create or modify TXT records in your own domain registrar.

Your new SPF record can take up to 48 hours to go into effect, 
but this usually happens more quickly.

.. note:: Adding more than one SPF record for a domain can cause problems 
   with mail delivery and spam classification. Instead, we recommend using 
   only one SPF record by modifying it to authorize Odoo.


Allow DKIM
----------
Like SPF, Domain Keys Identified Mail (DKIM) aims to make your outgoing emails
legitimate when they get to the receiver side. It does so by providing your 
emails with an encrypted signature related to your domain name. 
Odoo enables automatic DKIM signature for all domains. 

To be valid you should add a DNS "odoo._domainkey" CNAME record to 
"odoo._domainkey.odoo.com". 
For example, for "foo.com" they should have a record "odoo._domainkey.foo.com" 
that is a CNAME with the value "odoo._domainkey.odoo.com".

This is especially useful if your domain is hosted by Office 365 and if you
want to enable the DKIM option in Office 365.

What if my email domain is hosted by Office 365
===============================================

For domains hosted by Office 365, the previous 2 points are important, 
but not always enough to send emails from Odoo.
To improve your trust score, make sure that the domain name in Odoo's 
General Settings is your Office 365 domain (e.g. "mycompany.com" rather than 
"mycompany.odoo.com") and that your catchall and bounce aliases redirects to
Odoo, as explained here above. 

Please note that you can only use your Office 365 email server to send emails 
from Odoo when your Odoo installation is on-premise. 
Odoo Online does not support such a configuration. 
Fetching incoming messages is however possible for any hosting type of Odoo
(online & on-premise).


How to choose between Odoo and my traditional email box
=======================================================
Odoo Discuss is a perfect tool to send and read messages related to
business documents. However it doesn't aim to replace a full-featured email 
solution (Gmail, Outlook, Yahoo, AOL, etc.). 
We recommend to take the most out of both systems without mingling them: 
What is related to Odoo business objects or applications goes into Odoo; 
What is not can be managed into your external email box. 

To do so, create specific email aliases to use in Odoo (to generate leads 
or opportunities, helpdesk tickets, etc.). If you take an email alias 
already used for messaging outside of Odoo, incoming messages will land 
into both systems. This will negatively impact your productivity.


How to use my own email servers with Odoo Online
================================================
Odoo Online comes up with an embedded and ready-to-use email 
solution with *@yourcompany.odoo.com* as domain.
We recommend to keep this default setup as it is really convenient. 

Nevertheless you can still use your own email servers if you want
to manage your email server's reputation (blacklisting, etc).
The configuration for both incoming and outgoing mail servers is
given here above.

However when it comes to incoming messages, we don't recommend
to exclusively use your own email server. Indeed, Odoo Online is fetching
incoming messages from the email server once every hour only. 
To receive emails in real time, you should rather use
a **catchall redirection** (your server -> Odoo server). To do so:

* Create a catchall address in your email server settings (e.g. catchall).
* Still from such settings, set a redirection
  from this catchall address to Odoo's one:
  catchall@yourdomain.ext -> catchall@yourcompany.odoo.com.
* In Odoo check *External Email Servers* in :menuselection:`Settings --> General Settings`
  and enter your email domain name (i.e. yourdomain.ext).
* No need to set up an incoming email server in such a case.
