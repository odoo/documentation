==================
Pro-forma invoices
==================

A *pro-forma invoice* is an abridged or estimated invoice sent in advance of a delivery of goods. It
notes the kind and quantity of goods, their value, and other important information, such as weight
and transportation charges.

Pro-forma invoices are commonly used as preliminary invoices with a quotation. They are also used
for customs purposes during importation. They differ from a normal invoice in that they are not a
demand (or request) for payment.

Activate the feature
====================

In order to utilize pro-forma invoices, the *Pro-Forma Invoice* feature **must** be activated. To do
that, navigate to :menuselection:`Sales app --> Configuration --> Settings`, and in the
:guilabel:`Quotations & Orders` section, click the checkbox next to :guilabel:`Pro-Forma Invoice`.
Then, click :guilabel:`Save` to save all changes.

.. image:: proforma/pro-forma-setting.png
   :align: center
   :alt: The Pro-Forma Invoice feature setting in the Odoo Sales application.

Send a pro-forma invoice
========================

With the :guilabel:`Pro-Forma Invoice` feature activated, the option to send a pro-forma invoice is
now available on any quotation or sales order, via the :guilabel:`Send Pro-Forma Invoice` button.

.. image:: proforma/send-pro-forma-invoice-button.png
   :align: center
   :alt: The Send Pro-Forma Invoice button on a typical sales order in Odoo Sales.

When the :guilabel:`Send Pro-Forma Invoice` button is clicked, an email pop-up appears. The
:guilabel:`Recipients` field is auto-populated with the customer from the sales order or quotation.
Then, if needed, modify the :guilabel:`Subject` field and the body of the email. The pro-forma
invoice is automatically added as an attachment to the email.

When ready, click :guilabel:`Send`, and Odoo instantly sends the email, with the attached pro-forma
invoice, to the customer.

.. image:: proforma/pro-forma-email-message-popup.png
   :align: center
   :alt: The email pop-up window that appears with pro-forma invoice attached in Odoo Sales.

.. tip::
   To preview what the pro-forma invoice looks like, click on the PDF at the bottom of the email
   pop-up window *before* clicking :guilabel:`Send`. When clicked, the pro-forma invoice is
   downloaded instantly. Open that PDF to view (and review) the pro-forma invoice.

   .. image:: proforma/pro-forma-pdf.png
      :align: center
      :alt: Sample pro-forma invoice PDF from Odoo Sales.
