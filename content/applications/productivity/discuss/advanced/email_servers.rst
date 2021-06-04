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

.. note:: Office 365 email servers don't easily allow to send external emails from hosts like Odoo.
    Refer to `Microsoft's documentation <https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`__
    to make it work.

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
Office 365 SMTP relays are not compatible with Odoo Online unless you configure
Odoo to force the outgoing "From" address (see below).

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

Choose allowed "From" email addresses
-------------------------------------

Sometimes, an email's "From" (outgoing) address can belong to a different
domain, and that can be a problem.

For example, if a customer with address *mary@customer.example.com* responds to
a message, Odoo will try to redistribute that same email to other subscribers
in the thread. But if the domain *customer.example.com* forbids that kind of
usage for security (kudos for that), the Odoo's redistributed email would get
rejected by some recipients' mail servers.

To avoid those kind of problems, you should make sure all emails use a "From"
address from your authorized domain.

If your MTA supports `SRS (Sender Rewriting Scheme)
<https://en.wikipedia.org/wiki/Sender_Rewriting_Scheme>`_, you can enable it
to handle these situations. However, that is more complex and requires more
technical knowledge that is not meant to be covered by this documentation.

Instead, you can also configure Odoo to do something similar by itself:

#.  Set your domain name in the General Settings.

    .. image:: media/alias_domain.png
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

.. _discuss/email_servers/inbound_messages:

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
   :ref:`developer mode <developer-mode>`.

 Then go to :menuselection:`Settings --> Technical --> Parameters --> System Parameters`
 to customize the aliases (*mail.catchall.alias* & * mail.bounce.alias*).

 .. image:: media/system_parameters.png
    :align: center

.. note:: By default inbound messages are fetched every 5 minutes in Odoo on-premise.
   You can change this value in :ref:`developer mode <developer-mode>`.
   Go to :menuselection:`Settings --> Technical --> Automation -->
   Scheduled Actions` and look for *Mail: Fetchmail Service*.

.. _Office 365 documentation:
    https://support.office.com/en-us/article/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-office-365-69f58e99-c550-4274-ad18-c805d654b4c4

Set up different dedicated servers for transactional and mass mails
===================================================================

Odoo's e-mail server has the capability of sending 200 e-mails per day on Odoo SH Cloud Platform.
However, if needed, you can use a separate Mail Transfer Agent (MTA) servers for transactional
e-mails and mass mailings.
Example: use Odoo's own mail server for transactional e-mails, and Sendgrid, Amazon SES, or Mailgun
for mass mailings. Another alternative is to use Postmark for transactional e-mails, and Amazon SES
or Sendgrid for mass mailings.

.. note::
   A default outgoing email server is already configured. You should not create an alternative one
   unless you want to use a specific external outgoing email server for technical reasons.

To do this, you should first activate the :ref:`developer mode <developer-mode>` and then go to
:menuselection:`Settings --> Technical --> Outgoing` e-mail servers. There you have to create two
e-mail MTA server settings. One for transactional e-mails and one for mass mail servers. Be sure to
mark the priority of transactional e-mail servers as low as the mass email servers.

Now, go to :menuselection:`Email Marketing --> Settings` and enable *Dedicated Server*.
With these settings, Odoo uses the server with the lower priority for transactional emails, and the
server here selected for mass mails.
Note that in this case, you have to set your domain's Sender Policy Framework (SPF) records to
include both transactional and mass mail servers. If your server resides with xxxx.odoo.com, the
available options are Sendinblue and Mailchimp, as your e-mails would be originated from the
xxxx.odoo.com domain.