====================================
Manage Unsubscriptions and Blacklist
====================================
It is best practice, and legally required, to allow recipients to unsubscribe from mailing lists
as you do not want your audience to think that your company is using any tactics that are dishonest
or spammy.

Enable the Blacklist feature
============================
Go to :menuselection:`Configuration --> Settings` and enable the option *Blacklist Option when
unsubscribing*.


.. image:: media/manage1.png
   :align: center
   :alt: Blacklist in Odoo Email Marketing

Now, once the user clicks on the *Unsubscribe* link on your email, he will be redirected to the
following page:

.. note::
   After clicking the unsubscribe button when using the test feature, you will be sent to 
   an error page (error 403 - Access Denied). If you want to be sure the link is working properly, 
   you should create your mass mail and then send it only to a personal email.

.. image:: media/manage2.png
   :align: center
   :height: 350
   :alt: Blacklist in Odoo Email Marketing


In addition to having the option of unsubscribing from specific mailing lists, the user can also
blacklist himself, meaning that he will not receive *any* more emails from you.

.. note::
   The mailing list has to be configured as *Public* in order to be visible for users.


| Under :menuselection:`Configuration --> Blacklist`, blacklisted email addresses will be shown.
| When opening the record, as a *Log note*, a description-history is kept.

.. image:: media/manage3.png
   :align: center
   :alt: Blacklist in Odoo Email Marketing


.. seealso::
   - :doc:`send_emails`

   - :doc:`mailing_lists`