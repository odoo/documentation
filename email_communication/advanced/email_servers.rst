============================================================
How to Use my Mail Server to Send and Receive Emails in Odoo
============================================================

If you are a user of Odoo Online or Odoo.sh...
==============================================

You have nothing to do! **Odoo sets up its own mail servers for your database.**
Outgoing and incoming emails work out-of-the-box!

Unless you plan to send large batches of mass mailing that could require the 
use of an external mail server, simply enjoy your new Odoo database.


Scope of this documentation
===========================

This document is **mainly dedicated to Odoo on-premise users** who don't
benefit from an out-of-the-box solution to send and receive emails in Odoo,
unlike `Odoo Online <https://www.odoo.com/trial>`__ & `Odoo.sh <https://www.odoo.sh>`__.


.. warning::

    If no one in your company is used to manage email servers, we strongly recommend that
    you opt for those Odoo hosting solutions. Their email system
    works instantly and is monitored by professionals.
    Nevertheless you can still use your own email servers if you want
    to manage your email server's reputation yourself.

You will find here below some useful
information on how to integrate your own email solution with Odoo.

How to manage outbound messages
===============================
As a system admin, go to :menuselection:`Settings --> General Settings`
and check *External Email Servers*.
Then, click *Outgoing Mail Servers* to create one and reference the SMTP data of your email server. 
Once all the information has been filled out, click on *Test Connection*.

Here is a typical configuration for a G Suite server.

.. image:: media/outgoing_server.png
    :align: center

Then set your email domain name in the General Settings.

.. note::
   If you get a ``[AUTHENTICATIONFAILED] Invalid credentials (Failure)`` warning when you *Test
   Connection* on a Gmail address, activate the *Less secure app access* option. A direct link can
   be `accessed here <https://myaccount.google.com/lesssecureapps?pli=1>`_.

   In addition to that, enable the IMAP setting on your Gmail account.


Can I use an Office 365 server
------------------------------
You can use an Office 365 server if you run Odoo on-premise.
Office 365 SMTP relays are not compatible with Odoo Online.

Please refer to `Microsoft's documentation <https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`__ 
to configure a SMTP relay for your Odoo's IP address.

How to use a G Suite server
---------------------------
You can use an G Suite server for any Odoo hosting type.
To do so you need to setup the SMTP relay service. The configuration steps are explained in 
`Google documentation <https://support.google.com/a/answer/2956491?hl=en>`__.

.. _discuss-email_servers-spf-compliant:

Be SPF-compliant
----------------
In case you use SPF (Sender Policy Framework) to increase the deliverability 
of your outgoing emails, don't forget to authorize Odoo as a sending host in your 
domain name settings. Here is the configuration for Odoo Online:

* If no TXT record is set for SPF, create one with following definition:
  v=spf1 include:_spf.odoo.com ~all
* In case a SPF TXT record is already set, add "include:_spf.odoo.com".
  e.g. for a domain name that sends emails via Odoo Online and via G Suite it could be:
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
You should do the same thing if DKIM (Domain Keys Identified Mail) 
is enabled on your email server. In the case of Odoo Online & Odoo.sh,
you should add a DNS "odoo._domainkey" CNAME record to 
"odoo._domainkey.odoo.com". 
For example, for "foo.com" they should have a record "odoo._domainkey.foo.com" 
that is a CNAME with the value "odoo._domainkey.odoo.com".

Restriction
-----------
Please note that the port 25 is blocked for security reasons. Try using 587, 465 or 2525.

How to manage inbound messages
==============================

Odoo relies on generic email aliases to fetch incoming messages.

* **Reply messages** of messages sent from Odoo are routed to their original 
  discussion thread (and to the inbox of all its followers) by the
  catchall alias (**catchall@**). 

* **Bounced messages** are routed to **bounce@** in order to track them in Odoo.
  This is especially used in `Odoo Email Marketing <https://www.odoo.com/page/email-marketing>`__ 
  to opt-out invalid recipients.    

* **Original messages**: Several business objects have their own alias to 
  create new records in Odoo from incoming emails:

  * Sales Channel (to create Leads or Opportunities in `Odoo CRM <https://www.odoo.com/page/crm>`__),
  
  * Support Channel (to create Tickets in `Odoo Helpdesk <https://www.odoo.com/page/helpdesk>`__),

  * Projects (to create new Tasks in `Odoo Project <https://www.odoo.com/page/project-management>`__),

  * Job Positions (to create Applicants in `Odoo Recruitment <https://www.odoo.com/page/recruitment>`__),

  * etc.

Depending on your mail server, there might be several methods to fetch emails.
The easiest and most recommended method is to manage one email address per Odoo
alias in your mail server.

* Create the corresponding email addresses in your mail server 
  (catchall@, bounce@, sales@, etc.).
* Set your domain name in the General Settings.

  .. image:: media/alias_domain.png
      :align: center

* If you use Odoo on-premise, create an *Incoming Mail Server* in Odoo for each alias. 
  You can do it from the General Settings as well. Fill out the form according 
  to your email provider’s settings. 
  Leave the *Actions to Perform on Incoming Mails* blank. Once all the 
  information has been filled out, click on *TEST & CONFIRM*.

.. image:: media/incoming_server.png
    :align: center

* If you use Odoo Online or Odoo.sh, We do recommend to redirect incoming messages 
  to Odoo's domain name rather than exclusively use your own email server. 
  That way you will receive incoming messages without delay. Indeed, Odoo Online is fetching
  incoming messages of external servers once per hour only. 
  You should set redirections for all the email addresses to Odoo's domain name in your 
  email server (e.g. *catchall@mydomain.ext* to *catchall@mycompany.odoo.com*).

.. tip:: All the aliases are customizable in Odoo. 
   Object aliases can be edited from their  respective configuration view.
   To edit catchall and bounce aliases, you first need to activate the
   :doc:`Developer mode <../../general/developer_mode/activate>`.

 Then go to :menuselection:`Settings --> Technical --> Parameters --> System Parameters`
 to customize the aliases (*mail.catchall.alias* & * mail.bounce.alias*).

 .. image:: media/system_parameters.png
    :align: center

.. note:: By default inbound messages are fetched every 5 minutes in Odoo on-premise. 
   You can change this value in :doc:`Developer mode <../../general/developer_mode/activate>`.
   Go to :menuselection:`Settings --> Technical --> Automation --> 
   Scheduled Actions` and look for *Mail: Fetchmail Service*.
   
.. _Office 365 documentation:
    https://support.office.com/en-us/article/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-office-365-69f58e99-c550-4274-ad18-c805d654b4c4
