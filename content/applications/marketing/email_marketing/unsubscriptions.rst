==================================
Manage unsubscriptions (Blacklist)
==================================

Providing recipients with the power to unsubscribe from mailing lists is not only a smart business
practice, it's often a legal requirement. By allowing recipients to unsubscribe from a mailing list
establishes a sense of trust with an audience, and helps companies appear genuine (and not spammy).

Enable the Blacklist feature
============================

First, the *Blacklist* feature must be enabled. To do that, navigate to :menuselection:`Email
Marketing app --> Configuration --> Settings`, enable to :guilabel:`Blacklist Options when
Unsubscribing`, and click :guilabel:`Save`.

.. image:: unsubscriptions/blacklist-feature.png
   :align: center
   :alt: View of the blacklist feature in the Settings page of the Odoo Email Marketing app.

With that feature activated, an *Unsubscribe* link appears in mailings. If a recipient clicks that
link, Odoo reveals a :guilabel:`Unsubscriptions` page, where they can directly manage their
subscriptions.

.. note::
   With a test mailing, clicking the :guilabel:`Unsubscribe` link reveals an error page (*error 403
   - Access Denied*). To make sure the link is working properly, create the mailing, and only send
   it to a personal email.

Blacklist
=========

In addition to having the option to *Unsubscribe* from specific mailing lists, the recipient can
also *Blacklist* themselves, meaning they will not receive *any* more emails.

.. note::
   The mailing list has to be configured as *Public* in order to be visible for users.

To view a complete collection of blacklisted email addresses, navigate to :menuselection:`Email
Marketing app --> Configuration --> Blacklisted Email Addresses`.

.. image:: unsubscriptions/blacklisted-email-addresses.png
   :align: center
   :alt: View of the blacklisted email addresses page in Odoo Email Marketing.

When a blacklisted record is selected from this page, Odoo reveals a separate page with that
blacklisted recipient's contact information.

.. image:: unsubscriptions/blacklisted-contact-form.png
   :align: center
   :alt: View of a blacklisted contact detail form in Odoo Email Marketing.

In the :guilabel:`Chatter` of this page, there's a time-stamped message, informing the user when
that recipient blacklisted themselves (via a :guilabel:`Mail Blacklist created` log note).

Unblacklist contacts
====================

To *Unblacklist* contacts, click the :guilabel:`Unblacklist` button in the upper-left corner to
remove the contact from the blacklist, allowing them to receive mailings once again.

When :guilabel:`Unblacklist` is clicked, a pop-up appears. In this pop-up, the specific email
address is listed, and there's a :guilabel:`Reason` field, in which a reason can be entered,
explaining why this particular contact was removed from the blacklist.

.. image:: unsubscriptions/unblacklist-popup.png
   :align: center
   :alt: View of the unblacklist pop-up window in the Odoo Email Marketing application.

After filling in the fields, click :guilabel:`Confirm` to officially remove that particular contact
from the blacklist.

.. seealso::
   - :doc:`/applications/marketing/email_marketing`
   - :doc:`/applications/marketing/email_marketing/mailing_lists`
