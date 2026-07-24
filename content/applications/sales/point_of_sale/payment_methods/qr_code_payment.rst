================
QR code payments
================

QR code payments allow users to generate a code that customers can scan with their mobile banking
app to initiate a bank transfer or pay instantly.

.. _pos/qrcode/configuration:

Activation
==========

To allow payments by scanning a QR code, go to :menuselection:`Invoicing --> Configuration -->
Settings`, scroll down to the :guilabel:`Customer Payments` section, and enable the :guilabel:`QR
Codes` setting.

QR code types vary by country. Refer to the corresponding documentation for the configuration
required for each type:

- :doc:`Pix (Brazil) <../../../finance/fiscal_localizations/brazil>`
- :ref:`FPS (Hong Kong) <localization/hong-kong/fps>`
- :ref:`QRIS (Indonesia) <localizations/indonesia/qris>`
- :ref:`PayNow (Singapore) <localization/singapore/paynow>`
- :doc:`QR-bill (Switzerland) <../../../finance/fiscal_localizations/switzerland>`
- :ref:`PromptPay (Thailand) <localization/thailand/promptpay>`
- :ref:`VietQR (Vietnam) <localizations/vietnam/qrcode>`
- :ref:`EPC (SEPA) <accounting/customer-invoices/epc>`

.. _pos/qrcode/payment-method:

QR code payment method
======================

To create a QR code :doc:`payment method <../payment_methods>` that allows customers to scan the
code and pay, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and click
   :guilabel:`New`.
#. Enter a name and set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Set the :guilabel:`Point of Sale` field to the relevant point of sale.
#. Set the :guilabel:`Integration` field to the desired option:

   - :guilabel:`Quick Pay (QR Code)`: Set the :guilabel:`Integrate with` field to :ref:`Bancontact
     Pay <belgium/pos/bancontact-pay>`.
   - :guilabel:`Bank App (QR Code)`: Set the :guilabel:`QR Code Format` field to the desired option.

     - Select :guilabel:`SEPA Credit Transfer QR` if your company is part of the Single Euro Payments
       Area (SEPA).
     - Select :guilabel:`EMV Merchant-Presented QR-code` for other QR code types.
#. Save the payment method.

.. important::
   The :ref:`journal <accounting/journals/bank>` selected in the payment method must be linked to a
   specific bank account to allow QR code payments to be registered with bank apps.

.. _pos/qrcode/payment-process:

QR code payments registration
=============================

To accept a QR code payment, select the relevant :ref:`payment method <pos/qrcode/payment-method>`
on the :ref:`payment screen <pos/use/sell>`, then click :guilabel:`Validate`. A QR code is generated
and displayed on the payment screen for customers to scan with their mobile banking app and complete
the payment. The payment is validated in Odoo once processed in the mobile banking app.
