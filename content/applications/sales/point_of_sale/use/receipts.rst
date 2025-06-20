.. _pos/configuration/receipts:

========
Receipts
========

POS receipts display the following elements:

- The company logo
- The receipt and order number
- The customizable header and footer
- The cashier and customer names
- The complete order, discounts, prices, and used payment methods
- Optionally, a QR code or URL link for customer to generate invoices

To set up POS receipts, navigate to the :ref:`POS settings <pos/use/settings>` and scroll down to
the :guilabel:`Bills & Receipts` section.

- To customize the header and footer, activate the :guilabel:`Header & Footer` setting
  and fill in both fields with the information to be printed on the receipts.
- To print receipts automatically once a payment is registered, enable the :guilabel:`Automatic
  Receipt Printing` setting.
- To print receipts that don't display product prices, enable the :guilabel:`Basic Receipt` setting.
- Receipts can be sent by email by default, but also by SMS or through WhatsApp. To do so, activate
  the :guilabel:`SMS Enabled` or :guilabel:`WhatsApp Enabled` option(s).

  .. note::
     If the :guilabel:`WhatsApp Enabled` setting is not available, :ref:`install <general/install>`
     the :guilabel:`WhatsApp Messaging` module.

.. seealso::
   - :ref:`pos/restaurant/bills`
   - :doc:`../configuration/epos_printers`

Reprint a receipt
=================

To reprint a receipt, navigate to the :ref:`POS interface <pos/use/open-register>`, click
:guilabel:`Orders`, open the dropdown selection menu next to the search bar, and change the default
:guilabel:`All active orders` filter to :guilabel:`Paid`. Then, select the order and click
:guilabel:`Print Receipt`.

.. tip::
   Filter the list of orders using the search bar: type in your reference and select
   :guilabel:`Receipt Number`, :guilabel:`Date`, or :guilabel:`Customer`.