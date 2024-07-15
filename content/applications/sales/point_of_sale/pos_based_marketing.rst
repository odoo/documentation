:show-content:

===================
PoS-based Marketing
===================

Point of Sale-based marketing is a method of marketing that utilizes Point of Sale. We use Email and WhatsApp to send promotional
offers to potential customers.

Configuration
=============

We need to enable :menuselection:`Configuration --> Setting --> WhatsApp Enabled` to store mobile while sending receipts on WhatsApp.

.. image:: pos_based_marketing/whatsapp-enabled.png
   :align: center
   :alt: Needed to store mobile while sending receipt on WhatsApp

We need to enable :menuselection:`Configuration --> Setting --> SMS Enabled` to store mobile while sending receipts on SMS.

.. image:: pos_based_marketing/sms-enabled.png
   :align: center
   :alt: Needed to store mobile while sending receipt on SMS

Here is the basic flow for storing contact details:
===================================================

-   Open the Point of Sale session.
-   Make an order and validate it.
-   If the partner is selected, their contact details will be stored in the PoS order.
-   If the partner is not selected, the contact details will be stored after sending the receipt from the receipt screen
    via Email, SMS and WhatsApp.

.. image:: pos_based_marketing/store-contact-details.png
   :align: center
   :alt: How to store store contact details

-   After that, the user can continue the Email marketing and WhatsApp marketing flow as detailed in the Email marketing and
    WhatsApp marketing Docs.

.. seealso::
   - :doc:`pos_based_marketing/email`
   - :doc:`pos_based_marketing/whatsapp`

.. toctree::
   :titlesonly:

   pos_based_marketing/email
   pos_based_marketing/whatsapp
