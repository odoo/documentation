=========
Hong Kong
=========

Configuration
=============

:ref:`Install <general/install>` the following modules to get the latest features of the Hong Kong
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Hong Kong - Accounting`
     - `l10n_hk`
     - The base module to manage chart of accounting and localization for Hong Kong.
   * - :guilabel:`Hong Kong - Payroll`
     - `l10n_hk_hr_payroll`
     - Enables :ref:`payroll <payroll/l10n_hk/payroll>` specific localization features for Odoo *Payroll*
       app. This module also installs :guilabel:`Hong Kong - Payroll with Accounting` and
       :guilabel:`Documents - Hong Kong Payroll`.
   * - :guilabel:`Hong Kong - Payroll with Accounting`
     - `l10n_hk_hr_payroll_account`
     - Installs the link between Hong Kong payroll and accounting.
   * - :guilabel:`Documents - Hong Kong Payroll`
     - `documents_l10n_hk_hr_payroll`
     - Integrates employee ir56 forms in the Odoo *Documents* app.

FPS QR codes on invoices
========================

:abbr:`FPS (Faster Payment System)` is a payment service platform that allows customers to make
instant domestic payments to individuals and merchants in Hong Kong dollars or Renminbi via online
and mobile banking.

Activate QR codes
-----------------

Go to :menuselection:`Accounting app --> Configuration --> Settings`. Under the :guilabel:`Customer
Payments` section, tick the checkbox beside the :guilabel:`QR Codes` feature. Then, click
:guilabel:`Save`.

FPS bank account configuration
------------------------------

Go to :menuselection:`Contacts app --> Configuration --> Bank Accounts section --> Bank Accounts`.
Then select the bank account for FPS activation. Proceed to set the :guilabel:`Proxy Type` and fill
in the :guilabel:`Proxy Value` field, depending on the type chosen.

Remember to include the invoice number in the QR code, by ticking the :guilabel:`Include Reference`
checkbox.

.. image:: hong_kong/hk-fps-bank-setting.png
   :align: center
   :alt: FPS bank account configuration.

.. important::
   - The account holder's country must be set to `Hong Kong` on its contact form.
   - The account holder's city is mandatory.
   - You could also include the invoice number in the QR code by checking the :guilabel:`Include
     Reference` checkbox.

.. seealso::
   :doc:`../accounting/bank`

Bank journal configuration
--------------------------

Go to :menuselection:`Accounting app --> Configuration --> Journals` and open the bank journal.
Then, fill out the :guilabel:`Account Number` and :guilabel:`Bank` fields, located in the
:guilabel:`Journal Entries` tab.

.. image:: hong_kong/hk-bank-account-journal-setting.png
   :align: center
   :alt: Bank Account's journal configuration.

Issue invoices with FPS QR codes
--------------------------------

When creating a new invoice, open the :guilabel:`Other Info` tab and set the :guilabel:`Payment
QR-code` option to :guilabel:`EMV Merchant-Presented QR-code`.

.. image:: hong_kong/hk-qr-code-invoice-setting.png
   :align: center
   :alt: Select EMV Merchant-Presented QR-code option.

Ensure that the :guilabel:`Recipient Bank` is configured, as Odoo uses this field to generate the
FPS QR code.
