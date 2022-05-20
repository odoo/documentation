====================================================
Send and Receive Emails in Odoo with an Email Server
====================================================

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
unlike `Odoo Online <https://www.odoo.com/trial>`_ & `Odoo.sh <https://www.odoo.sh>`_.


.. warning::
    If no one in your company is used to manage email servers, we strongly recommend that
    you opt for those Odoo hosting solutions. Their email system
    works instantly and is monitored by professionals.
    Nevertheless you can still use your own email servers if you want
    to manage your email server's reputation yourself.

You will find here some useful
information on how to integrate your own email solution with Odoo.

.. note:: 
   Office 365 email servers don't easily allow to send external emails from hosts like Odoo. Refer
   to `Microsoft's documentation <https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`_ 
   to make it work.

How to manage outbound messages
===============================
As a system admin, go to :menuselection:`Settings --> General Settings`
and check *External Email Servers*. Then, click *Outgoing Mail Servers* to create one and reference 
the SMTP data of your email server. Once all the information has been filled out, click on 
*Test Connection*.

Here is a typical configuration for a G Suite server.

.. image:: email_servers/outgoing-server.png
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
Office 365 SMTP relays are not compatible with Odoo Online unless you configure
Odoo to :ref:`force the outgoing "From" address <email_communication/default_from>` .

Please refer to `Microsoft's documentation
<https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`_
to configure a SMTP relay for your Odoo's IP address.

How to use a G Suite server
---------------------------
You can use an G Suite server for any Odoo hosting type.
To do so you need to setup the SMTP relay service. The configuration steps are explained in 
`Google documentation <https://support.google.com/a/answer/2956491?hl=en>`__.

Restriction
-----------
Please note that port 25 is blocked for security reasons on our SaaS and Odoo.sh platform. Try using
465, 587, or 2525.

.. _email_communication/default_from:

Use a default "From" email address
----------------------------------

Sometimes, an email's "From" (outgoing) address can belong to a 
different domain, and that can be a problem.

For example, if a customer with address *mary@customer.example.com* responds to
a message, Odoo will try to redistribute that same email to other subscribers
in the thread. But if the domain *customer.example.com* forbids that kind of
usage for security, the Odoo's redistributed email would get
rejected by some recipients' mail servers.

To avoid those kind of problems, you should make sure all emails use a "From"
address from your authorized domain.

If your MTA supports `SRS (Sender Rewriting Scheme)
<https://en.wikipedia.org/wiki/Sender_Rewriting_Scheme>`_, you can enable it
to handle these situations. However, that is more complex and requires more
technical knowledge that is not meant to be covered by this documentation.

Instead, you can also configure Odoo to do something similar by itself:

#.  Set your domain name in the General Settings.

    .. image:: email_servers/alias-domain.png
       :align: center

#.  In developer mode, go to :menuselection:`Settings --> Technical -->
    Parameters --> System Parameters`.

#.  Add one system parameter from these:

    * If you want *all* your outgoing messages to use the same "From" address,
      use the key ``mail.force.smtp.from`` and set that address as value
      (such as ``outgoing@mycompany.example.com``).

    * If you want to keep the original "From" address for emails that use your
      same domain, but change it for emails that use a different domain, use
      the key ``mail.dynamic.smtp.from`` and set as value the email address
      that should be used in those cases (such as
      ``outgoing@mycompany.example.com``).

.. _email_communication/inbound_messages:

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

  .. image:: email_servers/alias-domain.png
      :align: center

* If you use Odoo on-premise, create an *Incoming Mail Server* in Odoo for each alias. 
  You can do it from the General Settings as well. Fill out the form according 
  to your email provider’s settings. 
  Leave the *Actions to Perform on Incoming Mails* blank. Once all the 
  information has been filled out, click on *TEST & CONFIRM*.

.. image:: email_servers/incoming-server.png
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
   :ref:`developer mode <developer-mode>`.

 Then go to :menuselection:`Settings --> Technical --> Parameters --> System Parameters`
 to customize the aliases (*mail.catchall.alias* & * mail.bounce.alias*).

 .. image:: email_servers/system-parameters.png
    :align: center

.. note:: By default inbound messages are fetched every 5 minutes in Odoo on-premise.
   You can change this value in :ref:`developer mode <developer-mode>`.
   Go to :menuselection:`Settings --> Technical --> Automation -->
   Scheduled Actions` and look for *Mail: Fetchmail Service*.
    

Set up different dedicated servers for transactional and mass mails
===================================================================

If needed, you can use a separate Mail Transfer Agent (MTA) servers for transactional
e-mails and mass mailings.
Example: use Postmark for transactional e-mails, and Amazon SES
or Sendgrid for mass mailings.

.. note::
   A default outgoing email server is already configured. You should not create an alternative one
   unless you want to use a specific external outgoing email server for technical reasons.

To do this, you should first activate the :ref:`developer mode <developer-mode>` and then go to
:menuselection:`Settings --> Technical --> Outgoing` e-mail servers. There you have to create two
outgoing mail servers. One for transactional emails and one for mass mail servers. Make sure you set the server for transactional emails to have priority over the server for mass mailing.

Now, go to :menuselection:`Email Marketing --> Settings` and enable *Dedicated Server*.
With these settings, Odoo uses the server with the lower priority for transactional emails, and the
server here selected for mass mails.
Note that in this case, you have to set your domain's Sender Policy Framework (SPF) records to
include both transactional and mass mail servers.
