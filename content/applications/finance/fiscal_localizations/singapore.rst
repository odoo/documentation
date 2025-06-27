=========
Singapore
=========

Add PayNow QR codes to invoices
===============================

PayNow is a payment service platform that allows customers to make instant domestic payments to
individuals and merchants in Singapore dollars via online and mobile banking.

Activate QR codes
-----------------

Go to :menuselection:`Accounting --> Configuration --> Settings`. Under the :guilabel:`Customer
Payments` section, activate the :guilabel:`QR Codes` feature.

PayNow bank account configuration
---------------------------------

Go to :menuselection:`Contacts --> Configuration --> Bank Accounts` and select the bank account to
activate PayNow. Set the :guilabel:`Proxy Type` and fill in the :guilabel:`Proxy Value` field
depending on the chosen type.

.. important::
   - The account holder's country must be set to `Singapore` on its contact form.
   - The account holder's city is mandatory.
   - You could also include the invoice number in the QR code by checking the :guilabel:`Include
     Reference` checkbox.

.. image:: singapore/sg-paynow-bank-setting.png
   :alt: PayNow bank account configuration

.. seealso::
   :doc:`../accounting/bank`

Bank journal configuration
--------------------------

Go to :menuselection:`Accounting --> Configuration --> Journals`, open the bank journal, then fill
out the :guilabel:`Account Number` and :guilabel:`Bank` under the :guilabel:`Journal Entries` tab.

.. image:: singapore/sg-bank-account-journal-setting.png
   :alt: Bank Account's journal configuration

Issue invoices with PayNow QR codes
-----------------------------------

When creating a new invoice, open the :guilabel:`Other Info` tab and set the :guilabel:`Payment
QR-code` option to *EMV Merchant-Presented QR-code*.

.. image:: singapore/sg-qr-code-invoice-setting.png
   :alt: Select EMV Merchant-Presented QR-code option

Ensure that the :guilabel:`Recipient Bank` is the one you configured, as Odoo uses this field to
generate the PayNow QR code.

.. _singapore/employment-hero:

Employment Hero payroll
=======================

If your business is already up and running with :doc:`Employment Hero
<../../hr/payroll/payroll_localizations/employment_hero>`, you can use our connector as an
alternative payroll solution.

.. important::
   To :ref:`configure the Employment Hero API <employment_hero/configuration>` for **Singapore**,
   use the following value as :guilabel:`Payroll URL`: `HTTPS://apisg.yourpayroll.io/`.

