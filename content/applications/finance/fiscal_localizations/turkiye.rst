=======
Türkiye
=======

.. |GİB| replace:: :abbr:`GİB (Turkish Revenue Administration (Gelir İdaresi Başkanlığı))`

.. _localizations_turkiye/configuration/modules:

Modules
=======

The following modules are installed automatically with the Turkish localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Türkiye - Accounting`
     - `l10n_tr`
     - Base Turkish :ref:`fiscal localization package <fiscal_localizations/packages>` complete with
       the Turkish chart of accounts, taxes, financial reports, and fiscal positions
   * - :guilabel:`Türkiye - Accounting Reports`
     - `l10n_tr_reports`
     - Türkiye-specific tax and profit and loss reporting.
   * - :guilabel:`Türkiye - e-Irsaliye (e-Dispatch)`
     - `l10n_tr_nilvera_edispatch`
     - Enables the generation and upload of e-Dispatch files

Additionally, the following modules must be manually :ref:`installed <general/install>` in order to
use the :ref:`localizations/turkiye/nilvera` for managing electronic documents:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Türkiye - Nilvera`
     - `l10n_tr_nilvera`
     - Integration module enabling communication with Nilvera and enabling the generation of
       e-Ledger files
   * - :guilabel:`Türkiye - Nilvera E-Invoice`
     - `l10n_tr_nilvera_einvoice`
     - For sending and receiving basic scenario electronic invoices to/from Nilvera.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. seealso::
   :doc:`Turkish Payroll localization documentation <../../hr/payroll/payroll_localizations/turkey>`

.. _localizations/turkiye/specifics:

Localization overview
=====================

The Turkish localization package ensures compliance with Turkish fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Türkiye's standards.

The Turkish localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Turkish
  accounting standards
- :ref:`localizations/turkiye/taxes`: pre-configured tax rates, including standard VAT, zero-rated,
  and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`localizations/turkiye/eds`: integration with Nilvera to meet electronic document regulations

.. _localizations/turkiye/coa:

Chart of accounts
-----------------

In the :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>`, accounts are
automatically mapped to their corresponding taxes and default accounts payable and accounts
receivable fields.

.. note::
   The Türkiye chart of accounts is based on the Turkish Revenue Administration's (Gelir İdaresi
   Başkanlığı's (GİB)) 7/A accounts, which provide a baseline of the necessary accounts. 7/B
   accounts are archived and can be unarchived if required.

.. _localizations/turkiye/taxes:

Taxes
-----

:doc:`Taxes <../accounting/taxes>` are automatically created and configured when the Turkish
localization is installed.

.. warning::
   Do not delete taxes, as they are used for e-invoice and e-archive invoices. However, new taxes
   can be generated, such as for :ref:`withholding tax reasons <localizations/turkiye/tax-creation>`
   that do not exist yet in the database.

.. _localizations/turkiye/eds:

Electronic document solutions
-----------------------------

The Turkish localization ensures compliance with the |GİB|'s requirements for e-invoice, e-archive,
e-dispatch, and e-ledger processes.

Through the Nilvera integration, Odoo enables the automated transmission, reception, and management
of e-documents in accordance with the |GİB|'s electronic document standards. The main
functionalities of the Nilvera integration include:

- :ref:`creating and validating e-archives and e-invoices <localizations/turkiye/send>` directly
  from Odoo
- :ref:`receiving and processing responses from Nilvera/GİB <localizations/turkiye/receive>`
- storing transmitted XML and PDF versions for auditing
- :ref:`creating and uploading e-dispatch XML to and from Nilvera <localizations/turkiye/dispatch>`

.. _localizations/turkiye/contacts:

Company and contacts
====================

Before activating the Türkiye localization, ensure the following information is correctly configured
in your company's contact record:

.. important::
   To access all of these fields, go to the company's contact record in the Contacts application or
   by going to :menuselection:`Accounting --> Customers --> Customers`, removing the
   :guilabel:`Customer Invoices` filter, and selecting the company's contact record. This is
   different from accessing the company record itself through the general settings.

- :guilabel:`Company Name`: Must match the |GİB| registration
- :guilabel:`Turkish Tax Office`: Registered tax office
- :guilabel:`Tax ID`: VKN/TCKN - 10 digits for companies, 11 for individuals
- :guilabel:`Address`: Complete legal address
- :guilabel:`Country`: Registered country
- :guilabel:`Tags`: Enter the Mersis number as a tag and set the :guilabel:`Category` to
  :guilabel:`MERSISNO`
- :guilabel:`eInvoice format`: Türkiye (UBL TR 1.2)
- :guilabel:`eInvoice Alias`: Acquired from Nilvera
- :guilabel:`eDispatch Alias`: Acquired from Nilvera

.. note::
   - The :guilabel:`eInvoice format` is set automatically based on the contact's country. To edit
     this field, enable :ref:`developer mode <developer-mode>` to display the field and then
     manually adjust it.
   - The :guilabel:`eInvoice Alias` and :guilabel:`eDispatch Alias` fields are only visible once the
     company's :guilabel:`Nilvera Status` is :guilabel:`E-Invoice`.

For each customer and vendor:

- Ensure the :guilabel:`Address`, :guilabel:`City`, :guilabel:`State`, :guilabel:`Country`,
  :guilabel:`Tax ID`, and :guilabel:`eInvoice format` are configured.
- If the partner is not registered for e-invoicing, Odoo automatically defaults to e-Archive.

.. _localizations/turkiye/tax-creation:

Tax creation
============

Create exception reasons
------------------------

To create additional exception reasons, follow these steps:

#. Enable :ref:`developer mode <developer-mode>` and navigate to :menuselection:`Accounting -->
   Configuration --> GIB Codes`.
#. Click the :guilabel:`New` button.
#. Enter a :guilabel:`Reason` and a :guilabel:`Reason Code` that match the values in `Nilvera's
   documentation <https://developer.nilvera.com/kod-listeleri>`_.
#. Select the corresponding code type:

   - :guilabel:`Withholding` for withholding tax reasons
   - :guilabel:`Exception` for tax-exempt reasons
   - :guilabel:`Export exception` for export exception reasons
   - :guilabel:`Export registration` for export-registered reasons
#. For :guilabel:`Withholding` reasons, enter the corresponding percentage.

Create withholding taxes
------------------------

#. Navigate to :menuselection:`Accounting --> Configuration --> Taxes`.
#. Click the :guilabel:`New` button to first create the base tax.
#. Set the :doc:`Tax Computation <../accounting/taxes/tax_computation>` to :guilabel:`Percentage`,
   and set the :guilabel:`Withholding Tax Reason` field that appears for taxes of this type.
#. Complete the other mandatory fields of the form (:guilabel:`Tax Name`, :guilabel:`Tax Type`,
   :guilabel:`Amount`, etc.).
#. Create additional taxes with :doc:`Tax Computation <../accounting/taxes/tax_computation>` set to
   :guilabel:`Group of Taxes`. These group taxes should be composed of the base tax created in the
   previous steps and additional percentage taxes.

.. tip::
   The :guilabel:`WH 20%` tax illustrates this configuration. To use a different withholding reason,
   duplicate the base tax, update the reason, and replace the old base tax in duplicated group
   taxes.

.. _localizations/turkiye/nilvera:

Nilvera integration
===================

Odoo integrates with Nilvera, a |GİB|-approved electronic document intermediary, to manage
e-invoice, e-archive, e-dispatch, and e-ledger processes.

The integration handles:

- XML data generation in a |GİB|-compliant format
- secure transmission to Nilvera
- synchronization of documents and statuses within Odoo.

Supported document types
------------------------

- e-Invoice

  - Basic scenario

    - Sales
    - Withholding
    - Registered for export
    - Tax exempt
    - Return
    - Withholding Return

  - Public Scenario

    - Sales
    - Withholding
    - Tax exempt

  - Export Scenario
  - Commercial Scenario
    - Sales
    - Withholding
    - Registered for export
    - Tax exempt

- e-Archive invoice

  - Sales
  - Withholding
  - Registered for export
  - Tax exempt
  - Return
  - Withholding Return
- e-Dispatch note

.. note::
   Return invoices can only be sent via credit notes.

Configuration
-------------

The `Nilvera documentation <https://test-setup.obs.tr-west-1.myhuaweicloud.com/odoo/Nilvera_Odoo_Integration_Information.pdf>`_
provides instructions for accessing the sandbox and generating the API credentials.

To configure the Nilvera integration with your database, follow these steps:

#. Make sure the :guilabel:`Türkiye - Nilvera` module is :ref:`installed <general/install>`.
#. Navigate to :menuselection:`Accounting --> Configuration --> Settings` and scroll to the
   :guilabel:`Türkiye Electronic Integrations` section.
#. Configure:

   - :guilabel:`Nilvera API credentials` (generated in Nilvera)
   - :guilabel:`Incoming Invoices Journal` (i.e., :guilabel:`Purchases`)

To configure your customer contact records to be able to send them e-invoices via Nilvera, follow
these steps:

#. Navigate to :menuselection:`Accounting --> Customers --> Customers`.
#. Remove the :guilabel:`Customer Invoices` filter (if necessary), and select the partner to contact
   via Nilvera.
#. Open the :guilabel:`Accounting` tab and click :guilabel:`Verify` next to :guilabel:`Nilvera
   Status`.

.. _localizations/turkiye/send:

Send e-Invoices via Nilvera
---------------------------

e-Invoice/e-Archive is a government-approved digital invoice system that replaces traditional paper
invoices, allowing businesses to issue, transmit, and store invoices electronically in compliance
with Turkish tax regulations. While e-Invoices are for customers who are registered with the |GİB|,
e-Archives can be sent to customers who are not registered with the |GİB|, ensuring senders can
comply with government regulations even when dealing with foreign customers or B2C workflows.

To send an e-Invoice/e-Archive, follow these steps:

#. When :ref:`creating a customer invoice <accounting/invoice/creation>`, after selecting a
   :guilabel:`Customer`,

   - if the customer's :guilabel:`Nilvera Status` is :guilabel:`e-Archive`, two fields will appear:

     - :guilabel:`Is GIB Export`: used for product export invoices to partners outside of Türkiye
     - :guilabel:`Invoice Type`: determines the type of invoice
   - if the customer's :guilabel:`Nilvera Status` is :guilabel:`e-Invoice`, the
     :guilabel:`Invoice Scenario` field will appear: Select the scenario of the invoice to be sent
     to the |GİB|.
#. :ref:`Send <accounting/invoice/sending>` the invoice, and ensure :guilabel:`by Nilvera` is
   selected to issue an e-invoice.

.. _localizations/turkiye/receive:

Receive e-Invoices via Nilvera
------------------------------

Update Nilvera status
~~~~~~~~~~~~~~~~~~~~~

To update the :guilabel:`Nilvera Status` of invoices in Odoo, follow these steps:

#. Open the :guilabel:`Accounting Dashboard`.
#. Click on the :guilabel:`Sales` journal.
#. Click the :icon:`fa-cog` (:guilabel:`Actions`) icon, then click :guilabel:`Refresh e-Invoices
   Status`. This action updates the :guilabel:`Nilvera Status` field on each invoice.

.. _localizations/turkiye/fetch-invoice:

Fetch e-invoice PDFs
~~~~~~~~~~~~~~~~~~~~

There are two methods to fetch PDFs of e-invoices:

#. From the invoice list view:

   #. Go to :menuselection:`Accounting --> Customers --> Invoices`.
   #. Select one or multiple invoices.
   #. Click the :guilabel:`Fetch Nilvera PDF`
#. From an invoice form view: Once the :guilabel:`Nilvera Status` is :guilabel:`Successful`, click
   the :guilabel:`Fetch Nilvera PDF` button.

.. _localizations/turkiye/receive-purchase:

Receive purchase e-invoices
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To fetch e-invoices generated in Nilvera and received by your company:

#. Open the :guilabel:`Accounting Dashboard`.
#. Click on the :guilabel:`Purchase` journal.
#. Click the :icon:`fa-cog` (:guilabel:`Actions`) icon, then click :guilabel:`Fetch e-invoices`. The
   received e-invoices are created as vendor bills in :guilabel:`Draft` status.

.. _localizations/turkiye/fetch-bill:

Fetch PDFs of bills generated in Odoo
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For vendor bills that were created in Odoo, PDF retrieval works the same way as for customer
invoices:

#. Go to :menuselection:`Accounting --> Vendors --> Bills`.
#. Select one or multiple vendor bills.
#. Click the :guilabel:`Fetch Nilvera PDF` button.

.. _localizations/turkiye/e-ledger:

Generate e-Ledger
-----------------

The e-Ledger is an electronic system that enables businesses to digitally store and submit their
accounting records to the government for tax and regulatory compliance. In Odoo, users can generate
the e-Ledger as a zipped CSV file and report company records seamlessly through the Nilvera
integration.

#. Navigate to :menuselection:`Accounting --> Reporting --> General Ledger`.
#. Click the :icon:`fa-cog` (:guilabel:`Actions`) icon.
#. Click :guilabel:`Generate e-Ledger` to generate the file and download it to your computer.

.. _localizations/turkiye/dispatch:

Manage e-Dispatch files
-----------------------

Generate e-Dispatch files
~~~~~~~~~~~~~~~~~~~~~~~~~

The e-Dispatch is an electronic document that replaces traditional paper delivery notes, allowing
businesses to digitally issue, transmit, and track shipment details for goods in transit. In Odoo,
users can generate e-Dispatch documents as XML and upload them through the Nilvera integration,
ensuring compliant and traceable delivery operations.

#. Navigate to :menuselection:`Inventory --> Operations --> Deliveries`.
#. Open an existing delivery order or create a new one.
#. Once a :guilabel:`Delivery Address` is selected, fill in the necessary information in the
   :guilabel:`e-Dispatch` tab that appears.
#. Once the delivery order is validated, click the :guilabel:`Send GİB e-Dispatch (XML)` button that
   appears to send the XML file. To generate the file without sending it, click the
   :icon:`fa-cog` :guilabel:`(Actions)` icon, then click :guilabel:`Generate GIB e-Dispatch (XML)`.
#. Download the generated file attached to the delivery order and upload it to Nilvera for
   processing.

Upload e-Dispatch files
~~~~~~~~~~~~~~~~~~~~~~~

#. Download the received e-Dispatch XML from Nilvera.
#. Navigate to :menuselection:`Inventory --> Operations --> Receipts`.
#. Click the :guilabel:`Upload e-Receipt (XML)` button and select the downloaded file.

Manage e-Receipt files
----------------------

Stock moves can be updated from their relative **Order Receipts** using the XML file. To do so:

#. Open the **Inventory** app, and go to :menuselection:`Operations --> Receipts`.
#. Open a receipt order, click the :guilabel:`e-Dispatch` tab, and select the XML corresponding to
   the order receipt from the :guilabel:`e-Dispatch XML` field. Then, click
   :guilabel:`Update from GIB e-Dispatch (XML)` to:
   - Update your stock according to the stock moves stored in the XML file.
   - Update both the :guilabel:`Operations` and :guilabel:`e-Dispatch` tab with info such as
   :guilabel:`Product`, :guilabel:`Carrier`, :guilabel:`Delivery Notes`, etc.
   - Log the corresponding e-Receipt PDF file in the chatter.

.. note::
   The system auto-fetches XML receipts through a CRON every 12 hours.

Mandatory compliance information
--------------------------------

The following rules are mandatory for all users of the Türkiye localization integration. Compliance
with these requirements is essential for the legal validity of e-Documents issued through the |GİB|
via Nilvera.

Document numbering structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All generated invoices and dispatch documents must follow a specific numbering structure: `three
alphanumeric characters` + `document year` + `sequential number`.

.. example::
   INV/2025/00001

The numbering must be unique, sequential, and continuous. Each document must have a distinct
identifier.

Once a file has been submitted, even if it returns an error, the same sequence number cannot be
used; a new document must be created.

.. seealso::
   - :doc:`../accounting/customer_invoices/sequence`
   - :doc:`../accounting/vendor_bills/sequence`

e-Dispatch numbering structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To access the e-Dispatch numbering structure, navigate to :menuselection:`Inventory -->
Configuration --> Operation Types`, then select an operation matching the :guilabel:`Delivery
Orders` type.

An arbitrary alphanumerical :guilabel:`Sequence Prefix` can be set. The system uses only the last
three characters of that prefix. The prefix must contain at least three characters; any shorter
prefix is automatically denied by the system.

.. example::
   In the sequence WH/OUT/948224, the system will only send **224**.

.. tip::
   You can preview the sequence by going to :menuselection:`Inventory --> Configuration -->
   Operation Types --> Delivery Orders`. Once the sequencing is configured, the banner at the top
   shows a preview:

   .. image:: turkiye/banner-preview.png
      :alt: Banner preview of sequencing of e-Dispatch.

Sequential number gaps
~~~~~~~~~~~~~~~~~~~~~~

If a sequence number is skipped, the previous missing numbers must be issued within 7 days.

.. example::
   If INV/2025/00002 is issued before INV/2025/00001, INV/2025/00001 must be issued within 7 days.

No sequence number can remain unissued beyond this period.

Discount rules
~~~~~~~~~~~~~~

Global discounts (discounts shown as a separate invoice line) cannot be issued. All discounts must
be applied at the product line level within the invoice.

e-Ledger compliance
~~~~~~~~~~~~~~~~~~~

The first issued invoice must represent the opening balance for the accounting period. All
subsequent invoices must follow the sequential numbering pattern.

.. example::
   INV/2025/00001, INV/2025/00002, INV/2025/00003, etc.

Sequential numbering must be maintained consistently across the e-Ledger to ensure data integrity
and compliance.

Nilvera e-Invoice subscriptions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::
   Turkish e-Invoice law permits only one date range per invoice, at the header level, not per
   individual line item. Therefore, items with different subscription date ranges cannot be mixed on
   the same invoice. However, an item with a subscription date range can be mixed with items that
   that have no date range at all.

If the invoice is generated from the subscription order in the
:doc:`Subscriptions <../../sales/subscriptions>` app, the subscription order's date is used as the
invoice's date, at the header level.

Subscription dates must match across lines.

Manage Commercial Invoices
==========================

Commercial invoice scenarios are managed in the **Accounting** app through :menuselection:`Customers
--> Invoices` for outgoing invoices and :menuselection:`Vendors --> Bills` for incoming vendor
bills.

Outgoing commercial invoices
----------------------------

On a draft (non-posted) invoice, select a scenario from the :guilabel:`Invoice Scenario` field
and specify the type in the :guilabel:`Is` field. Depending on the selection, the
:guilabel:`Exemption Reason` field may become available. If applicable, enter an exemption reason.

Once a commercial scenario invoice is confirmed and sent, its :guilabel:`Nilvera Status` changes to
:guilabel:`Waiting`. The customer must then accept or reject the invoice on their end.

If the customer rejects the invoice, the rejection reason is logged in the invoice chatter.

.. note::
   - |GİB| automatically accepts an invoice if the recipient does not accept or reject it within
     **8 days** of reception.
   - Accepted invoices display one of two statuses:
     - **Accepted**: Manually accepted by the customer.
     - **Accepted Automatically**: Automatically acknowledged by |GİB| under the 8-day rule.

Incoming commercial bills
-------------------------

The system automatically fetches incoming commercial bills from Nilvera and creates corresponding
draft bills in Odoo.

A status banner appears at the top of fetched bills with options to :guilabel:`Accept` or
:guilabel:`Reject`:

- :guilabel:`Accept`: Validates the bill.
- :guilabel:`Reject`: Opens a pop-up window requiring a rejection reason. After clicking
  :guilabel:`Proceed`, the rejection response is sent to Nilvera. **This action cannot be undone.**
