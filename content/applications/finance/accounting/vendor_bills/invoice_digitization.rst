================================
AI-powered document digitization
================================

**Digitization** converts paper documents into vendor bills and customer invoices.

Odoo recognizes the content of documents using :abbr:`OCR (optical character recognition)` and
artificial intelligence technologies. Based on the scanned documents, vendor bills and customer
invoices are automatically created and populated.

.. seealso::
   - `Test Odoo's invoice digitization <https://www.odoo.com/app/invoice-automation>`_
   - `Odoo Tutorials: Vendor Bill Digitization
     <https://www.odoo.com/slides/slide/vendor-bill-digitization-7065>`_
   - :doc:`/applications/essentials/in_app_purchase`

.. _accounting/invoice-digitization/configuration:

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Settings` and navigate to the
:guilabel:`Digitization` section. Enable the :guilabel:`Document Digitization` option and choose
whether :guilabel:`Vendor Bills` and :guilabel:`Customer Invoices` should be processed automatically
or on demand.

.. note::
   If the :guilabel:`Single Invoice Line Per Tax` option is enabled, only one line is created per
   tax in the new bill/invoice, regardless of the number of lines on it.

.. _accounting/invoice-digitization/vendor-bills-invoices-upload:

Vendor bills and invoices upload
================================

Vendor bills and invoices are :ref:`uploaded manually
<accounting/invoice-digitization/manual-upload>` or sent to a :ref:`designated email alias
<accounting/invoice-digitization/email-alias>` to be digitized.

.. seealso::
   :doc:`Vendor bills <../vendor_bills>`

.. _accounting/invoice-digitization/manual-upload:

Uploading manually
------------------

From the :guilabel:`Accounting Dashboard`, click :guilabel:`Upload` on the :guilabel:`Vendor
Bills` journal.

Alternatively, go to :menuselection:`Accounting --> Vendors --> Bills` or :menuselection:`Accounting
--> Customers --> Invoices` and click :guilabel:`Upload`.

.. _accounting/invoice-digitization/email-alias:

Uploading using an email alias
------------------------------

Vendor bills (or customer invoices) can be uploaded with an email alias in two ways:

- scanned from a connected scanner configured to send email to an email alias;
- sent directly to an email alias.

Each PDF attached to the email is automatically converted into a new draft vendor bill (or customer
invoices).

.. note::
   - Only PDF and XML formats are processed via email alias associated with a journal.
   - JPEG files must be processed via :ref:`email alias in the Documents app <documents/upload>`

To add an email alias to a journal, follow these steps:

#. Open the Settings app, navigate to the :guilabel:`Discuss` section, enable :guilabel:`Custom
   Email Servers`, and :guilabel:`Save`.
#. :ref:`Add an Alias Domain <email-inbound-custom-domain>`.
#. The default email aliases `vendor-bills@` and `customer-invoices@` followed by the
   :guilabel:`Alias Domain` set, are automatically created and available in the :guilabel:`Advanced
   Settings` tab of the :guilabel:`Vendor Bills` and :guilabel:`Customer Invoices` journals,
   respectively.
#. To change a default email alias, go to :menuselection:`Accounting --> Configuration -->
   Journals`, select the corresponding journal, and edit the :guilabel:`Email Alias` on the
   :guilabel:`Advanced Settings` tab.
#. Configure the connected scanner to send scanned documents to the email alias, if needed.

.. note::
   Alternatively, an :ref:`email alias in the Documents app <documents/upload>` can be used to
   automatically send scanned bills/invoices to the :guilabel:`Finance` workspace (e.g.,
   `inbox-financial@example.odoo.com`).

.. _accounting/invoice-digitization/digitization:

Digitization and data recognition with AI
=========================================

Depending on the :ref:`settings <accounting/invoice-digitization/configuration>`, the document is
either digitized automatically or requires manual processing.

To manually digitize an :ref:`uploaded vendor bill
<accounting/invoice-digitization/vendor-bills-invoices-upload>`, follow these steps:

#. In the uploaded vendor bill, click :guilabel:`Digitize document`.
#. A blue :guilabel:`All fields will be automated by Artificial Intelligence, it might take 5
   seconds` banner appears; click :icon:`oi-arrow-right` :guilabel:`Refresh` if needed.
#. If necessary, review and correct the information uploaded during digitization. Click on the
   related field(s) to edit and make updates, or click :guilabel:`Reload AI data` to refresh the
   data.
#. Click :guilabel:`Confirm` to post the document.

This process helps the AI learn and improves data recognition for future digitizations.

.. _accounting/invoice-digitization/vendor-bills-matching-po:

Vendor bills matching with purchase orders
------------------------------------------

When a purchase order is detected on a vendor bill through OCR, Odoo searches the database for a
matching purchase order number. If found, it pulls in as much information as possible from the
purchase order and replaces the OCR-detected data on the vendor bill.

For example, the vendor :guilabel:`Bill Reference` number is overwritten by the :guilabel:`Vendor
Reference` from the purchase order.

.. note::
   - All changes are logged in the chatter.
   - A smart button linking to the related purchase order is available on the vendor bill.

To correct any mismatches, either edit the incorrect section of the purchase order or leave it
blank.

.. tip::
   - Use electronic invoices with embedded XML to ensure more accurate and efficient processing.
   - Alternatively, the :ref:`Auto-complete <accounting/vendor_bills/bill-completion>` feature
     transfers information from the purchase order to the vendor bill without OCR required.

.. _accounting/invoice-digitization/pricing:

Pricing
=======

The **invoice digitization** is an In-App Purchase (IAP) service that requires prepaid credits to
work. Digitizing one document consumes one credit.

To buy credits, :ref:`go to the Settings app <iap/buying_credits>` or :menuselection:`Accounting -->
Configuration --> Settings`, navigate to the :guilabel:`Digitization` section, and click
:guilabel:`Buy credits`.

.. note::
   Enterprise Odoo users with a valid subscription get free credits to test IAP features before
   purchasing more credits for the database. This includes demo/training databases, educational
   databases, and one-app-free databases.

.. seealso::
   - `Our Privacy Policy <https://iap.odoo.com/privacy#header_6>`_
   - :doc:`/applications/essentials/in_app_purchase`
