=================================================
Troubleshooting issues related to outgoing emails
=================================================

*"Why wasn't my email sent?"*

Here is a list of the most common reasons that can explain it.


You reached your daily limit
============================

.. warning:
    Applies to Odoo Online and Odoo.sh platforms only.

Odoo caps the number of emails that can be sent every day, for security and
stability reasons.

Here are the default limits for new databases:

- 200 emails/day for Odoo Online and Odoo.sh databases,
- 50 emails/day for Odoo Online "2 weeks free trial" database.

// TODO RIM One app free?
// TODO RIM pas clair

In case you hit the limit, you can:


// TODO RIM lien vers le support form
- either ask our support team to increase your daily limit (we will analyze your
  situation: how many users in your database, which apps, how much traffic...)

- either use your own outgoing email server: you can do (nearly) whatever you want, it's your server!
  In that case, here is our documentation about how to configure it:
      * :doc:`../../email_communication/advanced/email_servers`


**Beware: the counter is global to your database and can rise quite fast!**
For example: if a customer replies to an invoice followed by 10 people (internal users, other contacts for the same customer, etc.),
a copy of their message is automatically sent to these 10 people,
generating 10 outgoing emails.

You can mitigate this by **receiving your notifications in Odoo Discuss**.
Go to "My Profile" (click on your user on the top right corner of the screen),
then pick the "Preferences" tab and choose "Handle notifications within Odoo" (not by email).


.. image:: media/user_pref_handle_notifications.png
   :align: center
   :alt: user preferences handle notifications.


"The envelop is red"
====================

// TODO RIM screenshot red envelop + click on it


If your email wasn't delivered, Odoo might have recorded the SMTP error explaining why.
The menu :menuselection:`Settings --> Technical --> Emails` displays the whole email queue,
including emails that could not be sent..

Click on an email marked in red and select the tab `Failure Reason`.

.. image:: media/failure_reason.png
   :align: center
   :alt: failure reason email tab and explanations.

If Odoo was not able of providing you with an error message, you should ask the administrator
of the email server to have a look at the log files of the Odoo server and the SMTP server
(or contact the Odoo Support if you are hosted on one of our cloud platforms).
s
.. note::
   The "Technical" menu is visible in Deveoper mode only, see
   :doc:`../../../general/developer_mode/activate`


Your outgoing email server is not properly configured
=====================================================

If made the choice to to use your own email server, you have to set it up.
An incorrect setup may prevent the delivery of your emails.


In order to check your outgoing mail settings, go to :menuselection:`Settings --> Technical --> Outgoing Mail Server`.

.. image:: media/setting_outgoing_mail_server.png
   :align: center
   :alt: setting up an outgoing email server.

If you use a well-known email provider like Gmail or Office 365, you have to comply to its limitations, e.g:

- **Gmail** accounts cannot send more than 500 emails a day. // TODO RIM ref?
- **Office 365** email servers don't allow easily to send external emails from hosts like Odoo.
    Refer to `Microsoft's documentation <https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`
    to make it work.
- Yahoo is not working properly with Odoo as they enforce a strict DMARC policy that is not compatible with Odoo at the moment.

.. note::
   For more advanced information regarding outgoing emails servers, see:
   :doc: `../advanced/email_servers`


Emails went out of Odoo but you still see ared envelop
======================================================

// TODO RIM merge with section "envelop is red"

It might happen that some emails are not going out properly and Odoo has no power on this.
For diverses reason, during the transit of the email, an error occurs and a bounce email is sent back to the sender to letting him know that it didn't reach its destination.

In case the email is sent using Odoo, the bounce email should reach the Odoo database and display a red envelop. To be able to investigate, please refer to the subsection `The envelop is red in the chatter`

For now, Odoo is not always capable of providing the information on the reason it failed.
The technology of the mails is old and extensible, the different providers implement a personalized policy of the mails.