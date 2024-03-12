=========
Singapore
=========

Introduction
============

Odoo will automatically configure the accounting module to reflect your chosen package
when you install a localisation package. In this case, you will get the following benefits
when installing the Singaporean localisation.

Configuration
=============

The Singapore localisation package can be installed in two ways.

A. via Company Set-up
---------------------

B. via App installation
------------------------

Search for the 'Apps' icon in the Odoo Dashboard.

Removed the filter in the search bar and search 'Singapore'

Company Information & Contacts Set-up
=====================================

The following fields will replace the tax ID field when you install the SG localisation:
- GST No.
- UEN

Company Information
~~~~~~~~~~~~~~~~~~~

.. image:: 
   :align: center 
   :alt: Company information

Contact form
~~~~~~~~~~~~

.. image:: 
   :align: center
   :alt: Contact form


These fields need to be filled in order 

Chart of Accounts
=================

The Singaporean chart of accounts is included in Singapore - Accounting module. 

Taxes & GST
===========
Source:

The taxes are from the IRAS website. Here are the taxes for Singapore in Odoo 17.

.. note:: 
   Each tax in Odoo is configured in such a way that it will be reflected in the Tax Report.
   The taxes are updated in accordance with the Singaporean government. New accounts in the CoA
   will be created in anticipation of these changes. Older accounts for previous taxes are
   eventually archived.

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

Go to :menuselection:`Contacts --> Configuration --> Bank Accounts` and select the bank account for
which you want to activate PayNow. Set the :guilabel:`Proxy Type` and fill in the :guilabel:`Proxy
Value` field depending on the type you chose.

.. important::
   - The account holder's country must be set to Singapore on its contact form.
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
