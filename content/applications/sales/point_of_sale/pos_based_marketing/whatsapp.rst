========
Whatsapp
========

In Point of Sale, we use the mobile numbers saved in Point of Sale orders for WhatsApp marketing.

Configuration
=============

Configuring the "WhatsApp Message" Server Action:
-------------------------------------------------

 #.  Get marketing templates approved with the :guilabel:`Applies to` field set to
     :guilabel:`Pointof Sale Orders`, and the :guilabel:`Phone Field` set to either
     :guilabel:`mobile` or :menuselection:`Partner --> Mobile`.
 #.  Click the :guilabel:`Allow Multi` button to create a server action in the POS orders list view.

Flow for WhatsApp marketing:
============================

-  After creating orders with contact details, select them from the POS orders list view.
-  Then, open the server action menu and click on the :guilabel:`WhatsApp Message` option.

.. image:: whatsapp/whatsapp-message-server-action.png
   :align: center
   :alt: How to open whatsapp composer

-  This will open a WhatsApp composer.

.. image:: whatsapp/whatsapp-composer.png
   :align: center
   :alt: whatsapp composer view

-  Select the desired marketing template for the message.
-  Click the :guilabel:`Send Message` button.

.. note::
   - You can send marketing templates only from the POS order's :guilabel:`Send WhatsApp` server
     action.
   - Approved marketing templates with the allow multi option enabled and
     :guilabel:`Point of Sale Orders,` in the "applies to" field
     are required for WhatsApp marketing in the Point of Sale.

.. image:: whatsapp/whatsapp-template.png
   :align: center
   :alt: whatsapp template view
