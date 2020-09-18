==========================================
Send Emails Marketing and Manage Campaigns
==========================================

Emails allow you to effectively, and at a low cost, reach a large number of consumers while being
able to customize your message in a way that resonates with them. It is measurable, and a
call-to-action oriented channel.

Choose the right target and create the message
==============================================

| Go to :menuselection:`Mailings --> Create`.
| Choosing *Contacts* as *Recipients* (for example), allows you to add specifications to match
  just certain contacts, filtering your target.

.. image:: media/sendemails1.png
   :align: center
   :alt: Send mass mailing in Odoo Email Marketing

.. note::
   With a trial databases, you have a limit of 50 emails per day; on Odoo SH Cloud
   Platform and SaaS the limit is 200. There is a possibility to increase these numbers by contacting Odoo
   Support. To contact Support, `click here <https://www.odoo.com/help>`_.

Under *Mail Body*, choose a layout and make the modifications needed by dragging, dropping and
double-clicking on content. Note that it is possible to start from scratch selecting the *blank*
template option.

.. image:: media/sendemails2.png
   :align: center
   :alt: Send mass mailing in Odoo Email Marketing

| Under *Settings*, you can assign someone else as the responsible sender if you do not want it to
  be you. To do so, change the email address used as the sender (*Send From*).
| With the *Reply To* radio button, you can also choose to gather answers either on the respective
  recipients’ records or on a specific email address. Note that this option is not available if you
  target mailing contacts or contacts as recipients.

.. image:: media/sendemails3.png
   :align: center
   :height: 400
   :alt: Send mass mailing in Odoo Email Marketing

Test, send or schedule a mailing
================================

.. image:: media/sendemails4.png
   :align: center
   :height: 350
   :alt: Send mass mailing in Odoo Email Marketing

| *Save*: the work is allocated in the *draft* column in the Kanban view. Modifications can be
  made while being in this stage. The option *Discard* deletes the email.
| Click on *Test* and send your message to one, or even multiple, test contacts to avoid errors.
| *Send* triggers the email with the next run and put the work on the *queue* column in the
  Kanban view.
| *Schedule* allows you to choose a date and time, and puts the email in the *queue* column in
  the Kanban view.

.. note::
   The daily limit is applied for **all emails** sent, in other words, throughout all applications.
   Therefore, if at the end of the day you have remaining ones to be sent, note that they *will not*
   be sent automatically the next day. You need to force that by opening the email and
   clicking on *Retry*.
   A solution can be to use an outgoing email servers, see :doc:`../../email_communication/advanced/email_servers`

Manage campaigns
================

| Go to :menuselection:`Configuration --> Settings` and enable *Mailing Campaigns*.
| The campaign option is effective as it allows you to organize your marketing efforts and have a
  centralized view of its metrics.
| Go to *Campaign* and click on *Create* to start one.

.. image:: media/sendemails5.png
   :align: center
   :height: 300
   :alt: manage campaigns in Odoo Email Marketing

.. note::
   If you use the SMS and Social Marketing applications, as well as the Push Notification feature,
   you see the option to create content for those channels. You also see the *Campaign*
   menu within those applications. All of this is possible because the applications work integrated.

.. seealso::
   - :doc:`../../email_communication/advanced/email_servers`
   - :doc:`../../social_marketing/overview/campaigns`

