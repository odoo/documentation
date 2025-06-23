=====================
Document digitization
=====================

Document digitization refers to the process of converting paper or digital documents into records
in a database. Using :abbr:`OCR (optical character recognition)` and artificial intelligence
technologies, Odoo reads the content and automatically creates and fills in the record's details.
This process is mainly used for vendor bills (or refunds).

.. note::
   Although less common, this digitization process can also be applied to customer invoices and
   credit notes. The :ref:`settings <accounting/bill-digitization/configuration>` need to be
   adjusted accordingly.

.. seealso::
   - `Test Odoo's invoice digitization <https://www.odoo.com/app/invoice-automation>`_
   - `Odoo Tutorials: Vendor Bill Digitization
     <https://www.odoo.com/slides/slide/vendor-bill-digitization-7065>`_
   - :doc:`/applications/essentials/in_app_purchase`

.. _accounting/bill-digitization/configuration:

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Settings` and navigate to the
:guilabel:`Digitization` section. Enable the :guilabel:`Document Digitization` option and choose
whether :guilabel:`Vendor Bills` should be processed automatically or on demand.

.. note::
   If the :guilabel:`Single Invoice Line Per Tax` option is enabled, only one line is created per
   tax in the new vendor bill, regardless of the number of lines on it.

.. _accounting/bill-digitization/vendor-bills-upload:

Vendor bills upload
===================

Vendor bills are :ref:`uploaded manually <accounting/bill-digitization/manual-upload>` or sent to a
:ref:`designated email alias <accounting/bill-digitization/email-alias>` to be digitized. They can
also be :ref:`automatically posted <accounting/bill-digitization/auto-post-bills>` for selected
vendors.

.. note::
   Once the bill is uploaded, the document preview appears on the right side of the screen.

.. seealso::
   :doc:`Vendor bills <../vendor_bills>`

.. _accounting/bill-digitization/manual-upload:

Manual upload
-------------

In the Accounting dashboard, drag and drop vendor bills into the desired purchase journal or click
:guilabel:`Upload` on the purchase journal.

.. _accounting/bill-digitization/email-alias:

Upload via email alias
----------------------

Vendor bills can be uploaded via an email alias associated with the relevant journal in two ways:

- scanned from a connected scanner configured to send email to an email alias;
- sent directly to an email alias.

Each PDF attached to the email is automatically converted into a new draft vendor bill.

.. note::
   - Only PDF and XML formats are processed via an email alias associated with a journal.
   - JPEG files must be processed via :ref:`email alias in the Documents app
     <documents/email-aliases>`.

To add an email alias to a journal, follow these steps:

#. Make sure an :doc:`alias domain <../../../websites/website/configuration/domain_names>` has been
   configured.
#. The default email alias `vendor-bills@` followed by the alias domain is automatically created
   and available in the :guilabel:`Advanced Settings` tab of the :guilabel:`Vendor Bills` journal.
#. To change a default email alias, go to :menuselection:`Accounting --> Configuration -->
   Journals`, select the corresponding journal, and edit the :guilabel:`Email Alias` in the
   :guilabel:`Advanced Settings` tab.
#. Configure the connected scanner to send scanned documents to the email alias, if needed.

.. note::
   Alternatively, an :ref:`email alias in the Documents app <documents/email-aliases>` can be used
   to automatically send vendor bills to the :guilabel:`Finance` :ref:`folder
   <documents/folders>` (e.g., `inbox-financial@example.odoo.com`).

.. _accounting/bill-digitization/auto-post-bills:

Automatic vendor bill posting
-----------------------------

.. note::
   To use the :guilabel:`Auto-post bills` option, the :guilabel:`Digitize automatically` setting in
   the :ref:`Document Digitization <accounting/bill-digitization/configuration>` section must be
   enabled for vendor bills.

To automatically post digitized vendor bills for specific vendors, go to :menuselection:`Accounting
--> Vendors --> Vendors` and click the desired vendor. In the :guilabel:`Accounting` tab of the
contact form, select an :guilabel:`Auto-post bills` option in the :guilabel:`Automation` section:

- :guilabel:`Always`
- :guilabel:`Ask after 3 validations without edits`: When the third uploaded bill is confirmed
  without any edits, an :guilabel:`Autopost Bills` window appears. The following options can be
  chosen: :guilabel:`Activate auto-validation`, :guilabel:`Ask me later`, or :guilabel:`Never for
  this vendor`.
- :guilabel:`Never`

.. note::
   Since automation is triggered after three validated bills without edits, the contact name must
   already exist in the database, and each uploaded vendor bill must include a bill date.

.. _accounting/bill-digitization/digitization:

Digitization and data recognition with AI
=========================================

Depending on the :ref:`settings <accounting/bill-digitization/configuration>`, documents are either
automatically digitized or require manual processing if digitization is set to on-demand only.

To manually digitize an :ref:`uploaded document
<accounting/bill-digitization/vendor-bills-upload>`, click :guilabel:`Digitize document`.

Once the document has been digitized, a blue banner appears; click :icon:`oi-arrow-right`
:guilabel:`Refresh`. Review and correct any information uploaded during digitization: click on the
related field(s) to edit them, or click :guilabel:`Reload AI data` to refresh the data.

Then, click :guilabel:`Confirm` to post the document.

.. tip::
   Once a document has been digitized, the :guilabel:`Vendor` field remains empty if the vendor
   doesn't exist in the database. To add it, click the :icon:`fa-caret-down` :guilabel:`(down arrow)`
   in the :guilabel:`Vendor` field; the vendor name appears highlighted in the document preview on
   the right. Click it to open a new vendor form with the name pre-filled.

.. note::
   The following vendor bill fields are recognized by OCR:

   - :guilabel:`Vendor`, :guilabel:`Bill Reference`, :guilabel:`Bill Date`, :guilabel:`Payment
     Reference` (only in the Belgian +++xxx/xxxx/xxxxx+++ format), :guilabel:`Recipient Bank`,
     :guilabel:`Due Date`, and the currency (in a :doc:`multi-currency
     <../get_started/multi_currency>` environment and if the currency is activated).
   - From the :guilabel:`Invoices Lines` tab: :guilabel:`Product` description/label,
     :guilabel:`Quantity`, unit :guilabel:`Price`, :guilabel:`Taxes` (if the :ref:`tax is activated
     <taxes/list_activation>`; this field is not recognized by OCR for the :doc:`Indian
     localization <../../fiscal_localizations/india>`), :guilabel:`Untaxed Amount`, and
     :guilabel:`Total`.

.. _accounting/bill-digitization/vendor-bills-matching-po:

Purchase order matching
=======================

When a digitized vendor bill is recognized by :abbr:`OCR (optical character recognition)`, Odoo
searches the database for a matching purchase order. If found, the vendor bill can be manually
matched with the existing open purchase order lines.

Once a vendor bill has been :ref:`uploaded <accounting/bill-digitization/vendor-bills-upload>` and
:ref:`digitized <accounting/bill-digitization/digitization>`, click the :guilabel:`Purchase
matching` smart button to access the :guilabel:`Purchase matching` list view, displaying all
purchase order lines linked to the vendor assigned to the vendor bill. Then, select the relevant
purchase order lines and the draft vendor bill (shown in grey), and click :guilabel:`Match`.

.. tip::
   In the :guilabel:`Purchase Matching` list view, update the :guilabel:`Quantity` and
   :guilabel:`Price` in the purchase order lines, if necessary.

If there is no existing purchase order related to the vendor of the uploaded vendor bill, a new
purchase order can be directly created from the vendor bill lines. To do so, follow these steps:

#. Once the vendor bill is uploaded, make sure the :guilabel:`Vendor` field is filled in with the
   correct vendor.
#. Click the :guilabel:`Purchase matching` smart button, select the draft vendor bill in the list
   (shown in grey), and click :guilabel:`Add to PO`.
#. In the :guilabel:`Add to Purchase Order` window, start typing in the :guilabel:`Purchase Order`
   field and select :guilabel:`Create and edit`.
#. In the :guilabel:`Create Purchase Order` window, select the vendor assigned to the vendor bill,
   then complete all :ref:`required fields <purchase/manage_deals/create-new-rfq>` and click
   :guilabel:`Confirm`.
#. In the :guilabel:`Purchase Matching` list view, select the relevant purchase order lines and the
   draft vendor bill (shown in grey), and click :guilabel:`Match`.

.. Note::
   If any information required for the purchase order fields is missing, click :guilabel:`Save and
   Close` in the :guilabel:`Create Purchase Order` window. Then, open the Purchase app to fill in
   the fields and :ref:`confirm the purchase order <purchase/manage_deals/confirm-order>`.

.. tip::
   - Electronic vendor bills with embedded XML ensure more accurate and efficient processing.
   - Alternatively, the :ref:`Auto-complete <accounting/vendor_bills/bill-completion>` feature
     can transfer information from the purchase order to the vendor bill, without requiring OCR.

.. _accounting/bill-digitization/pricing:

Pricing
=======

The document digitization feature is an In-App Purchase (IAP) service requiring prepaid credits.
Digitizing one document uses one credit.

To buy credits, :ref:`go to the Settings app <iap/buying_credits>` or :menuselection:`Accounting -->
Configuration --> Settings`, navigate to the :guilabel:`Digitization` section, and click
:guilabel:`Buy credits`.

.. note::
   - Odoo Enterprise users with a valid subscription get free credits to test IAP features before
     purchasing more credits for the database. This includes demo/training databases, educational
     databases, and one-app-free databases.
   - XML files don't require OCR credits because they contain structured data that can be processed
     directly, without OCR.

.. seealso::
   - `Odoo In-App Purchase Privacy Policy <https://iap.odoo.com/privacy#header_6>`_
   - :doc:`/applications/essentials/in_app_purchase`
