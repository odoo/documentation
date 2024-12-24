=======
Vietnam
=======

.. _SInvoice: https://www.sinvoice.vn/

.. _vietnam/configuration:

Configuration
=============

.. _vietnam/configuration/modules:

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get the latest features of the Vietnamese
localization:

.. list-table::
    :header-rows: 1

    * - Name
      - Technical name
      - Description
    * - :guilabel:`Vietnam - Accounting`
      - `l10n_vn`
      - This module includes the default
        :ref:`fiscal localization package <fiscal_localizations/packages>`.
    * - :guilabel:`Vietnam - E-invoicing`
      - `l10n_vn_edi_viettel`
      - This module includes the features required for integration with SInvoice.

.. note::
   When `Vietnam` is selected for a company's :guilabel:`Fiscal Localization`, Odoo automatically
   installs :guilabel:`Vietnam - Accounting` module.

.. _vietnam/configuration/company:

Company configuration
---------------------

To configure your company information, go to the :guilabel:`Contacts` app, search for your company,
and select it. Then configure the following fields:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

   - In the :guilabel:`Street` field, enter the street name, number, and any additional address
     information.
   - In the :guilabel:`Street 2` field, enter the neighborhood.

- :guilabel:`Tax ID`: The tax identification number

.. _vietnam/sinvoice:

E-invoice integration with SInvoice
===================================

SInvoice_ is an e-invoice service platform provided by Viettel, one of the biggest e-invoice service
providers in Vietnam. Odoo supports integration with SInvoice to submit the invoices generated in
Odoo.

.. _vietnam/sinvoice/setup:

Set-up
------

.. _vietnam/sinvoice/setup/sinvoice:

Configuration in SInvoice
~~~~~~~~~~~~~~~~~~~~~~~~~

To send electronic invoices to SInvoice, :guilabel:`Invoice template` and
:guilabel:`Invoice symbol` are required to be created in SInvoice followed by issuing a
:guilabel:`Invoice issuance notice` for the invoice template created. Account manager assigned from
SInvoice can guide the steps needed.

.. seealso::
   - `Invoice template <https://www.sinvoice.vn/2021/02/hdsd-tai-lieu-nghiep-vu-tao-mau-hoa-don-dien-tu.html?debug=1>`_
   - `Legal notice <https://sinvoice.viettel.vn/ho-tro/huong-dan-su-dung/15-huong-dan-lap-thong-bao-phat-hanh>`_

.. _vietnam/sinvoice/setup/sinvoice/registration:

SInvoice registration
*********************

To create an account, contact SInvoice_ directly on the portal.

To log into SInvoice_, enter the :guilabel:`Username` and :guilabel:`Password` used during account
registration.

.. _vietnam/sinvoice/setup/sinvoice/template:

Invoice template creation
*************************

#. On the left side of the overview page, in the :guilabel:`Release management` menu, click
   :guilabel:`Create business information`.
#. In the :guilabel:`Update key information` step:

   - Fill in the following fields and other optional information if needed:

     - :guilabel:`Unit name`
     - :guilabel:`Address`
     - :guilabel:`Contact person`
     - :guilabel:`Type of representative documents`

   - Click :guilabel:`Update`.

#. In the :guilabel:`Look up digital certificate` step:

   - To add a digital certificate, click :guilabel:`Add new`.
   - Select the :guilabel:`Branch/Enterprise` and the :guilabel:`Type of digital certificate`, then
     all the required fields for each type.

     - :guilabel:`Supplier`: CloudCA
     - :guilabel:`Signer ID`: CloudCA
     - :guilabel:`Digital Certificate`: CloudCA
     - :guilabel:`How to downlaod file`: HSM
     - :guilabel:`File Upload`: HSM, USB-TOKEN

   - Click :guilabel:`Generate key pair` to generate encryption keys for authentication, then
     :guilabel:`Save` to save.

#. In the :guilabel:`Manage invoice templates` step:

   - Add a new :guilabel:`Invoice template`.
   - Select the :guilabel:`Invoice type` and fill in the :guilabel:`Invoice template code`,
     :guilabel:`Invoice template name` and other optional information if needed.
   - Click :guilabel:`Update`.

.. _vietnam/sinvoice/setup/sinvoice/symbol:

Invoice symbol creation
***********************

On the left side of the main screen, in the :guilabel:`Release management` menu, click
:guilabel:`Invoice symbol` and follow these steps:

  - Click :guilabel:`Add new`, select the :guilabel:`Invoice template`, set the :guilabel:`Status`
    to :guilabel:`Active` to activate the symbol, and fill in the :guilabel:`Invoice symbol`.
  - Check :guilabel:`Stop automatic sending to tax authorities` checkbox and
    :guilabel:`Default for built-in API` checkbox based on preference.
  - Click :guilabel:`Save` to save.

.. _vietnam/sinvoice/setup/sinvoice/notice:

Invoice issuance notice
***********************

On the left side of the main screen, in the :guilabel:`Release management` menu, click
:guilabel:`Create issuance notice` and follow these steps:

  - Click :guilabel:`Add new`, select the
    :guilabel:`Name of the business unit to issue an e-invoice` and the
    :guilabel:`Tax agency name`. Based on the unit and tax agency selected, :guilabel:`Tax code`,
    :guilabel:`Address`, :guilabel:`Phone number` and :guilabel:`Separator used` automatically fill
    in and are ineditable.
  - Click :guilabel:`Select the invoice type for issuance`, and then select and fill in the
    required information below:

    - :guilabel:`Invoice type`: The invoice type to declare an issuance notice on
    - :guilabel:`Invoice template`: Select from the list of items available based on the invoice
      type
    - :guilabel:`Symbol`: Select from the list of items available based on the invoice type
    - :guilabel:`Quantity`: Total number of invoice to issue for the type selected. Based on the
      type and template selected, the field is filled in automatically but manually adjustable
    - :guilabel:`Start date of use`: The date from which the invoice template, range and quantity
      are used with the notice issued in active status

  - Click :guilabel:`Save` and select more invoice type if necessary by repeating the step above.
    Once all invoice types to declare are included, click :guilabel:`Save` to finish drafting of
    the notice. Once ready, click :guilabel:`Send to tax authorities` for an approval. After the
    approval, :guilabel:`Status` of the notice is changed to :guilabel:`Active`.

.. _vietnam/sinvoice/setup/odoo:

Configuration in Odoo
~~~~~~~~~~~~~~~~~~~~~

To connect Odoo with SInvoice, go to :menuselection:`Accounting --> Configuration --> Settings`.
In the :guilabel:`Vietnamese Integration` section, fill in the :guilabel:`Username` and
:guilabel:`Password` to set up SInvoice. Add a :guilabel:`Default symbol` to generate a prefix for
the invoice number managed in SInvoice if needed.

To create SInvoice templates, go to :menuselection:`Accounting --> Configuration --> Templates`.
Click :guilabel:`New` and add a :guilabel:`Template code` and a :guilabel:`Template Invoice Type`.
The :guilabel:`Template code` is the initial sequence of digits in the name assigned by SInvoice.
For example, if the invoice template is `1/001 - Hóa đơn GTGT - ND123`, the
:guilabel:`Template code` is `1/001`. The SInvoice templates in Odoo need to match with the ones
in SInvoice.

To add an :guilabel:`Invoice Symbols`, click :guilabel:`Add a new line`.

.. _vietnam/sinvoice/workflow:

Workflow
--------

.. _vietnam/sinvoice/workflow/sending:

Invoice creation
~~~~~~~~~~~~~~~~

Invoices can be sent to SInvoice once they have been confirmed. To do so, follow the
:ref:`invoice sending <accounting/invoice/sending>` steps, and in the :guilabel:`Send` window,
enable the :guilabel:`Send to SInvoice` option and click :guilabel:`Send & Print`.

SInvoice status
***************

In the :guilabel:`SInvoice` tab of the invoice, the :guilabel:`SInvoice Status` is updated to
:guilabel:`Sent` when the submission is successful. The :guilabel:`SInvoice Number`,
:guilabel:`Issue Date`, :guilabel:`Secret Code` and :guilabel:`eInvoice Number` fields are also
updated. The same information is available on SInvoice.

.. _vietnam/sinvoice/workflow/adjustment:

Replacement or adjustment invoices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A replacement invoice is issued to correct an invoice that has **yet to be tax declared**, while an
adjustment invoice is issued to correct one **already tax declared**. Follow these steps to issue a
replacement/adjustment invoice:

#. Open the invoice and click :guilabel:`Credit Note`.
#. In the :guilabel:`Credit Note` window, fill in the following fields:

   - :guilabel:`Reason displayed on Credit Note`
   - :guilabel:`Adjustment type`
   - :guilabel:`Agreement Name`
   - :guilabel:`Agreement Date`
   - :guilabel:`Journal`
   - :guilabel:`Reversal date`

   Click :guilabel:`Reverse and Create Invoice` to issue a replacement invoice, or
   :guilabel:`Reverse` to issue an adjustment invoice.
#. The :guilabel:`SInvoice Status` in the :guilabel:`SInvoice` invoice tab is updated to
   :guilabel:`Replaced` for a replacement invoice or :guilabel:`Adjusted` for an adjustment
   invoice.

.. _vietnam/sinvoice/workflow/cancel:

Invoice cancellation
~~~~~~~~~~~~~~~~~~~~

If an invoice needs to be canceled, open the invoice and click :guilabel:`Request Cancel`. In the
:guilabel:`Invoice Cancellation` window, enter the cancellation :guilabel:`Reason`,
:guilabel:`Agreement Name` and :guilabel:`Agreement Date`, and click
:guilabel:`Request Cancellation`.

The :guilabel:`SInvoice Status` in the :guilabel:`SInvoice` invoice tab is updated to
:guilabel:`Canceled`.

.. _vietnam/qrcode:

QR banking codes
================

Vietnamese QR banking is a payment service platform that allows customers to make instant domestic
payments to individuals and merchants in Vietnamese dong via online and mobile banking.

.. _vietnam/qrcode/set-up:

Set-up
------

.. _vietnam/qrcode/set-up/activate:

QR codes activation
~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Settings`. Under the
:guilabel:`Customer Payments` section, activate the :guilabel:`QR Codes` feature.

.. _vietnam/qrcode/set-up/bank:

QR banking account configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the Contacts app, go to :menuselection:`Contacts --> Configuration --> Bank Accounts` and select
the bank account to activate QR banking. Fill in the :guilabel:`Bank Identifier Code` specific to
the bank. Set the :guilabel:`Proxy Type` and fill in the :guilabel:`Proxy Value` field depending on
the type you chose. The :guilabel:`Proxy Type` depends on the information used to identify the
:guilabel:`Merchant Account` such as card number and bank account number.

.. important::
   - The account holder's country must be set to `Vietnam` on its contact form.
   - The account holder's city is mandatory.
   - You could also include the invoice number in the QR code by checking the
     :guilabel:`Include Reference` checkbox.

.. seealso::
   :doc:`../accounting/bank`

.. _vietnam/qrcode/set-up/journal:

Bank journal configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Configuration --> Journals`, open the bank journal, then fill
out the :guilabel:`Account Number` and :guilabel:`Bank` under the :guilabel:`Journal Entries` tab.

.. _vietnam/qrcode/workflow:

Workflow
--------

.. _vietnam/qrcode/workflow/issue:

When creating a new invoice, open the :guilabel:`Other Info` tab and select
:guilabel:`EMV Merchant-Presented QR-code` in the :guilabel:`Payment QR-code` field.

Ensure that the :guilabel:`Recipient Bank` is configured, as Odoo uses this field to generate QR
banking codes.
