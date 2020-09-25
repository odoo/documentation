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


The envelop is red in the chatter
=================================

As a first step of investigation it might be interesting to check if you have no SMTP error message.
To do so, you can go to :menuselection:`Settings --> Technical --> Emails`.

Click on a red email and select the tab `Failure Reason`.

.. image:: media/failure_reason.png
   :align: center
   :alt: failure reason email tab and explanations.

Sometimes, Odoo is not capable of providing the error message. To get more information, you should check with the administrator of the email server or contact the Odoo Support.

.. note::
   To enable the developper mode and see the Technical menu, please see the following explanation
   :doc:`../../../general/developer_mode/activate`


My outgoing email server is not properly configured
===================================================

If you choose to use your own email server, you will have to set it up.
It may happen that some errors occur in the setup. To check it, go in :menuselection:`Settings --> Technical --> Outgoing Mail Server`.

.. image:: media/setting_outgoing_mail_server.png
   :align: center
   :alt: setting up an outgoing email server.

Emails providers might have their own limitation, here is a few example of existing ones:

- Gmail accounts have a limitation of 500 mails per day.
- Yahoo is not working properly with Odoo as they defined a blocking DMARC policy few years ago that is not compatible with the way Odoo is working.
- Office 365 email servers don't allow easily to send external emails from hosts like Odoo.
    Refer to the `Microsoft's documentation <https://support.office.com/en-us/article/How-to-set-up-a-multifunction-device-or-application-to-send-email-using-Office-365-69f58e99-c550-4274-ad18-c805d654b4c4>`
    to make it work.

.. note::
   Please find more information on our page regarding outgoing emails servers:
   :doc: `../advanced/email_servers`


My email is not going out and there is a red envelop
====================================================

It might happen that some emails are not going out properly and Odoo has no power on this.
For diverses reason, during the transit of the email, an error occurs and a bounce email is sent back to the sender to letting him know that it didn't reach its destination.

In case the email is sent using Odoo, the bounce email should reach the Odoo database and display a red envelop. To be able to investigate, please refer to the subsection `The envelop is red in the chatter`

For now, Odoo is not always capable of providing the information on the reason it failed.
The technology of the mails is old and extensible, the different providers implement a personalized policy of the mails.