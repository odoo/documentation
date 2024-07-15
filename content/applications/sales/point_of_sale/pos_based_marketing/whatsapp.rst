:show-content:

==================
Whatsapp Marketing
==================

In Point of Sale, we use the mobile numbers saved in POS orders for WhatsApp marketing.

Configuration
=============

Configuring the "WhatsApp Message" Server Action:
-------------------------------------------------

 #.  Obtain approved marketing templates with the :guilabel:`Applies to` field set to :guilabel:`Point of Sale Orders` and the :guilabel:`Phone Field`
     set to :guilabel:`mobile` or :menuselection:`Partner --> Mobile`.
 #.  Click the :guilabel:`Allow Multi` button to create a server action in the POS orders list view.

Flow for WhatsApp marketing:
============================

-   After creating an order with contact details, the user selects orders from the POS orders list view.
-   Then the user has to open the server action menu and click on the :guilabel:`WhatsApp Message` server action.

.. image:: whatsapp/whatsapp-message-server-action.png
   :align: center
   :alt: How to open whatsapp composer

-   This will open a WhatsApp composer.

.. image:: whatsapp/whatsapp-composer.png
   :align: center
   :alt: whatsapp composer view

-   Select the desired marketing template for the message.
-   Click the :guilabel:`Send Message` button.

.. note::
    - Users can send marketing templates only from the POS order's :guilabel:`Send WhatsApp` server action.
    - Approved marketing templates with the allow multi option enabled and :guilabel:`Point of Sale Orders` in the applies to field
      are required for WhatsApp marketing in the Point of Sale.

.. image:: whatsapp/whatsapp-template.png
   :align: center
   :alt: whatsapp template view

.. tip::
    Users can also send standalone WhatsApp marketing messages from the Point of Sale orders form.

.. image:: whatsapp/standalone-whatsapp-marketing.png
   :align: center
   :alt: How to do standalone whatsapp marketing
