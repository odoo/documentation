:show-content:

=========
Marketing
=========

Point of Sale marketing uses the Point of sale to reach customers. Promotional offers are sent via
email and WhatsApp.

Configuration
=============

You must enable :menuselection:`Configuration --> Setting --> WhatsApp Enabled` to store mobile
while sending receipts on WhatsApp.

.. image:: pos_based_marketing/whatsapp-enabled.png
   :align: center
   :alt: Needed to store mobile while sending receipt on WhatsApp

You must enable :menuselection:`Configuration --> Setting --> SMS Enabled` to store mobile while
sending receipts on SMS.

.. image:: pos_based_marketing/sms-enabled.png
   :align: center
   :alt: Needed to store mobile while sending receipt on SMS

Basic Flow for Storing Contact Details:
=======================================

-  Open the Point of Sale session.
-  Create and validate an order.
-  If a partner is selected, their contact details are saved with the order.
-  If no partner is selected, contact details are saved after sending the receipt via email, SMS,
   or WhatsApp.

.. image:: pos_based_marketing/store-contact-details.png
   :align: center
   :alt: How to store contact details

-  After that, you can move forward with the email and WhatsApp marketing steps outlined in the
   Email Marketing and WhatsApp Marketing documents.

.. seealso::
   - :doc:`pos_based_marketing/email`
   - :doc:`pos_based_marketing/whatsapp`

.. toctree::
   :titlesonly:

   pos_based_marketing/email
   pos_based_marketing/whatsapp
