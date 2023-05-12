================================
AI-powered document digitization
================================

**Invoice digitization** is the process of converting paper documents into vendor bill and customer
invoice forms in your accounting.

Odoo uses :abbr:`OCR (optical character recognition)` and artificial intelligence technologies to
recognize the content of the documents. Vendor bill and customer invoice forms are automatically
created and populated based on the scanned invoices.

.. seealso::
   - `Test Odoo's invoice digitization <https://www.odoo.com/app/invoice-automation>`_
   - `Odoo Tutorials: Invoice Digitization with OCR
     <https://www.odoo.com/slides/slide/digitize-bills-with-ocr-1712>`_

Configuration
=============

In :menuselection:`Accounting --> Configuration --> Settings --> Digitization`, check the box
:guilabel:`Document Digitization` and choose whether :guilabel:`Vendor Bills` and
:guilabel:`Customer Invoices` (this includes customer credit notes) should be processed
automatically or on demand.

If you enable the :guilabel:`Single Invoice Line Per Tax` option, only one line is created per tax
in the new bill, regardless of the number of lines on the invoice.

Invoice upload
==============

Upload invoices manually
------------------------

From the :guilabel:`Accounting Dashboard`, click on the :guilabel:`Upload` button of your vendor
bills journal.
Alternatively, go to :menuselection:`Accounting --> Customers --> Invoices` or
:menuselection:`Accounting --> Vendors --> Bills` and select :guilabel:`Upload`.

.. _invoice-digitization/email-alias:

Upload invoices using an email alias
------------------------------------

You can configure your connected scanner to send scanned documents to an email alias. Emails sent to
these aliases are converted into new draft customer invoices or vendor bills.

You can modify the email alias of a journal. To do so, go to the :guilabel:`Settings` app. Under
:guilabel:`General Settings: Discuss`, enable :guilabel:`Custom Email Servers`, add an
:guilabel:`Alias Domain`, and :guilabel:`Save`.

The email alias is now available in the :guilabel:`Advanced Settings` tab of the journal. Emails
sent to this address will be converted automatically into new invoices or bills.

.. note::
   If you use the :doc:`Documents <../../documents>` app, you can automatically send your scanned
   invoices to the :guilabel:`Finance` workspace (e.g., `inbox-financial@example.odoo.com`).

The default email aliases `vendor-bills@` and `customer-invoices@` followed by the
:guilabel:`Alias Domain` you set are automatically created for the :guilabel:`Vendor Bills` and
:guilabel:`Customer Invoices` journals, respectively. Emails sent to these addresses are converted
automatically into new invoices or bills.

To change a default email alias, go to
:menuselection:`Accounting --> Configuration --> Accounting: Journals`. Select the journal you want
to edit, click on the :guilabel:`Advanced Settings` tab, and edit the `Email Alias`.

Invoice digitization
====================

According to your settings, the document is either processed automatically, or you need to click on
:guilabel:`Send for digitization` to do it manually.

Once the data is extracted from the PDF, you can correct it if necessary by clicking on the
respective tags (available in :guilabel:`Edit` mode) and selecting the proper information instead.

Data recognition with AI
========================

It is essential to review and correct (if needed) the information uploaded during digitization.
Then, you have to post the document by clicking on :guilabel:`Confirm`. In this manner, the AI
learns, and the system identifies the correct data for future digitizations.

Pricing
=======

The **invoice digitization** is an In-App Purchase (IAP) service that requires prepaid credits to
work. Digitizing one document consumes one credit.

To buy credits, go to :menuselection:`Accounting --> Configuration --> Settings --> Digitization`
and click on :guilabel:`Buy credits`, or go to :menuselection:`Settings --> Odoo IAP` and click on
:guilabel:`View My Services`.

.. important::
   If you are on Odoo Online and have the Enterprise version, you benefit from free trial credits to
   test the feature.

.. seealso::
   - `Our Privacy Policy <https://iap.odoo.com/privacy#header_6>`_
   - :doc:`/applications/general/in_app_purchase`
