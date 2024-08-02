===============
QR Code Payment
===============

This feature allows users to generate a quick response code, or QR code, at the POS terminal.
Customers can scan the code with their mobile banking app to initiate a bank transfer and pay
instantly at the cashier.

Configuration
=============

Install Accounting localization module
--------------------------------------

Install or upgrade the Accounting module for the latest localized features in your country and
activate QR code transactions.

.. list-table::
   :header-rows: 1

   * - QR code types
     - Module name
     - Technical name
     - Description
   * - Pix
     - :doc:`Brazilian - Accounting<../../../finance/fiscal_localizations/brazil>`
     - `l10n_br`
     - The base module to manage chart of accounting and localization for Brazil.
   * - FPS
     - :doc:`Hong Kong - Accounting<../../../finance/fiscal_localizations/hong_kong>`
     - `l10n_hk`
     - The base module to manage chart of accounting and localization for Hong Kong.
   * - QRIS
     - :doc:`Indonesian - Accounting<../../../finance/fiscal_localizations/indonesia>`
     - `l10n_id`
     - The base module to manage chart of accounting and localization for Indonesia.
   * - PayNow
     - :doc:`Singapore - Accounting<../../../finance/fiscal_localizations/singapore>`
     - `l10n_sg`
     - The base module to manage chart of accounting and localization for Singapore.
   * - QR-bill
     - :doc:`Switzerland - Accounting<../../../finance/fiscal_localizations/switzerland>`
     - `l10n_ch`
     - The base module to manage chart of accounting and localization for Switzerland.
   * - PromptPay
     - :doc:`Thailand - Accounting<../../../finance/fiscal_localizations/thailand>`
     - `l10n_th`
     - The base module to manage chart of accounting and localization for Thailand.
   * - VietQR
     - :doc:`Vietnam - Accounting<../../../finance/fiscal_localizations/vietnam>`
     - `l10n_vn`
     - The base module to manage chart of accounting and localization for Vietnam.
   * - SEPA
     - :doc:`Account SEPA QR Code<../../../finance/accounting/customer_invoices/epc_qr_code>`
     - `account_qr_code_sepa`
     - This module adds support for SEPA Credit Transfer QR-code generation.

Activate QR code payment
------------------------

Refer to the documentation in the table above to activate the QR code payments of your choice on
your database.

On the :guilabel:`POS app` and go to :menuselection:`Configuration --> Payment Methods`. Add
:guilabel:`QR code` as the new payment method under :guilabel:`Payment Methods` and select its
respective bank journal. Select :guilabel:`Bank App (QR Code)` on the :guilabel:`Integration`
dropdown menu. Depending on your country and payment type, an extra :guilabel:`QR Code Format` field
appears. Choose your QR code format from the dropdown menu.

.. image:: qr_code_payment/qr-payment-methods-setting.png
   :alt: QR code payment method configuration

On :menuselection:`Configuration --> Settings`, add :guilabel:`QR code` as a new payment method
under :guilabel:`Payment Methods`.

.. image:: qr_code_payment/qr-configuration-setting.png
   :alt: Enable QR code payment method

Generate QR code on POS register
================================

The QR code payment method is available at the POS register upon activation.

After entering the POS order, hit the :guilabel:`Payment` button and select :guilabel:`QR code` as
the payment method. A QR code is generated and appears on the screen for the customer to scan and
pay with their mobile banking app.

.. image:: qr_code_payment/qr-payment-example.png
   :alt: QR code payment example

Hit :guilabel:`Confirm Payment`, and the transaction is done.

.. important::
   Odoo does *not* check the bank payment. It is recommended that users verify payments for validity
   before confirming them on the POS register.
