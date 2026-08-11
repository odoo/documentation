.. _pos/configuration/receipts:

========
Receipts
========

Point of Sale allows users to :ref:`configure <pos/configuration/receipt-configuration>` receipts
to be :ref:`printed <pos/configuration/receipt-printing>` or shared with customers via email
or text message.

+----------------------------------------------------------+---------------------------------+
| POS receipts display the following elements:             |                                 |
|                                                          |                                 |
| - The company logo                                       | .. image:: receipts/receipt.png |
| - The receipt and order number                           |                                 |
| - The customizable header and footer                     |                                 |
| - The name of the cashier and the customer               |                                 |
|   (provided a customer was :ref:`set for the order       |                                 |
|   <pos/use/customers>`)                                  |                                 |
| - The complete order, discounts, prices, and used        |                                 |
|   payment methods                                        |                                 |
| - Optionally, a QR code or URL link for customers to     |                                 |
|   generate :ref:`invoices <pos/invoices/qr-codes>`       |                                 |
+----------------------------------------------------------+---------------------------------+

.. _pos/configuration/receipt-configuration:

Configuration
=============

To set up POS receipts, go to :menuselection:`Point of Sale --> Configuration --> Settings`, scroll
down to the :guilabel:`Bills & Receipts` section, then:

- Enable :guilabel:`Custom header & Footer`, then enter the desired text in the :guilabel:`Header`
  and :guilabel:`Footer` fields to customize receipts.
- Enable :guilabel:`Automatic Receipt Printing` to print receipts automatically upon payment
  confirmation. If preferred, enable the :guilabel:`Skip Preview Screen` setting to skip the payment
  confirmation screen when the receipt is generated and printed.
- Enable :guilabel:`Basic Receipt` to generate receipts that do not display product prices.
- Enable :guilabel:`SMS Enabled` and/or, if the :ref:`WhatsApp <whatsapp/odoo-templates>` app is
  installed, :guilabel:`WhatsApp Enabled` to allow users to share receipts with customers via SMS or
  WhatsApp. Then, create or select a template from the :guilabel:`Receipt template` field.
- Enable :guilabel:`Self-service invoicing` to add a QR code and URL on the receipt, allowing
  customers to :ref:`request an invoice <pos/invoices/qr-codes>`.
- Enable :guilabel:`Early Receipt Printing` to generate and print the receipt before the payment
  process.
- Enable :guilabel:`Customise info` to add the point of sale's phone number, email address, website,
  address, and/or logo if they differ from those of your company.

.. note::
   If a :ref:`fiscal data module (black box) <belgium/fdm>` is connected to your Odoo database, the
   :guilabel:`Skip Preview Screen` setting is automatically enabled.

.. seealso::
   - :ref:`pos/restaurant/bills`
   - :doc:`pos_invoices`
   - :doc:`../hardware_network/receipt_printers`
   - `Receipts and Invoices (video tutorial) <https://youtu.be/w_DKgHcIV0U?si=Gnf6untzAz2zvNku>`_

.. _pos/configuration/receipt-printing:

Receipt printing, sending, and reprinting
=========================================

To print the receipt from the :ref:`POS register <pos/use/open-register>`, click :icon:`fa-print`
:guilabel:`Print Full Receipt` on the payment confirmation screen after the payment is completed.

To send the receipt from the :ref:`POS register <pos/use/open-register>` via email or text
message/WhatsApp after the payment process, enter the customer's email address and/or phone number
in the dedicated field, then click the relevant icon.

To reprint a receipt, follow these steps:

#. Access the :ref:`POS register <pos/use/open-register>`.
#. Click :guilabel:`Orders` on the POS interface.
#. Open the dropdown selection menu next to the search bar, and set the filter to :guilabel:`Paid`.
#. Select the desired order and click :icon:`fa-print` :guilabel:`Print Receipt`.

.. tip::
   - Filter the list of orders using the search bar: type in your reference, then select
     :guilabel:`Receipt Number`, :guilabel:`Date`, or :guilabel:`Customer`.
   - To generate and print the receipt if the :guilabel:`Early Receipt Printing` setting is
     enabled, add products to the cart, click the :icon:`fa-ellipsis-v` (:guilabel:`vertical
     ellipsis`) icon, then :icon:`fa-print` :guilabel:`Bill`.

.. note::
   - If a :ref:`receipt printer <pos/epos-printers/configuration>` is configured and the
     :guilabel:`Automatic Receipt Printing` setting is enabled, the receipt is automatically printed
     when the payment is completed.
   - If a receipt printer is not configured, clicking :icon:`fa-print` :guilabel:`Print Full
     Receipt` on the payment confirmation screen triggers the browser's print function.
