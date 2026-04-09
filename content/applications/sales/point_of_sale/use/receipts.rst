.. _pos/configuration/receipts:

========
Receipts
========

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

To set up POS receipts, go to :menuselection:`Point of Sale --> Configuration --> Settings`, and
scroll down to the :guilabel:`Bills & Receipts` section.

- To customize the header and footer, enable the :guilabel:`Custom Header & Footer` setting and
  enter the information to be printed on the receipts in both fields.
- To print receipts automatically upon payment confirmation, enable the :guilabel:`Automatic
  Receipt Printing` setting.
- To print receipts that don't display product prices, enable the :guilabel:`Basic Receipt` setting.
- To allow for sending receipts via email, SMS, or WhatsApp from the :ref:`Receipt <pos/use/sell>`
  screen, enable the :guilabel:`SMS Enabled` and/or :guilabel:`WhatsApp Enabled` setting(s).

  .. note::
     The :guilabel:`WhatsApp Enabled` setting is only available if the :guilabel:`WhatsApp
     Messaging` module is :ref:`installed <general/install>`.

.. seealso::
   - :ref:`pos/restaurant/bills`
   - :doc:`pos_invoices`
   - :doc:`../hardware_network/receipt_printers`
   - `Receipts and Invoices (video tutorial) <https://youtu.be/w_DKgHcIV0U?si=Gnf6untzAz2zvNku>`_

.. _pos/configuration/receipt-reprint:

Receipt reprint
===============

To reprint a receipt, follow the next steps:

#. Access the :ref:`POS register <pos/use/open-register>`.
#. Click :guilabel:`Orders` on the POS interface.
#. Open the dropdown selection menu next to the search bar, and set the filter to :guilabel:`Paid`.
#. Select the desired order and click :icon:`fa-print` :guilabel:`Print Receipt`.

.. tip::
   Filter the list of orders using the search bar: type in your reference and select
   :guilabel:`Receipt Number`, :guilabel:`Date`, or :guilabel:`Customer`.
