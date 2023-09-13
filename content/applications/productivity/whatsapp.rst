========
WhatsApp
========

**WhatsApp** is a messaging mobile app that allows users to send messages, make calls, and share
content. Businesses can use `WhatsApp Business
<https://developers.facebook.com/products/whatsapp/>`_ to communicate with their customers by text,
send documents and provide support.

With the **Odoo WhatsApp** app, you can connect your WhatsApp Business Account (WABA) to your Odoo
database, which allows you to:

- Receive and reply to WhatsApp messages directly from your Odoo database
- Create new templates with dynamic placeholders
- Send pre-approved templates that use dynamic values, such as:

  - Quotations from the Sales app
  - Receipts and invoices from the Point of Sale app
  - Tickets from the Events app


The Whatsapp connector supports two flows: company initiated, and customer initiated. Company
can initiate a discussion by sending a template to one or a batch of people. Once the template
is sent, the recipient can answer to trigger a discussion between the sender and the receiver
(a discuss chat window will popup if the customer answers within 15 days).


If the discussion is initiated by client (e.g. by sending to your public whatsapp number), then
Odoo will open a group chat with all operators responsible for this whatsapp channel.

.. seealso::
   - `Meta Business: create message templates for your WhatsApp Business account <https://www.facebook.com/business/help/2055875911147364>`_
   - `Meta Business: connect your phone number to your WhatsApp Business account <https://www.facebook.com/business/help/456220311516626>`_
   - `Meta Business: change your WhatsApp Business display name <https://www.facebook.com/business/help/378834799515077>`_
