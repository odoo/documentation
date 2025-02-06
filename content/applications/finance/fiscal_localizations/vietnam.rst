=======
Vietnam
=======

.. _SInvoice: https://www.sinvoice.vn/

.. _localizations/vietnam/modules:

Modules
=======

The following modules are installed automatically with the Vietnamese localization:

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
      - This module includes the features required for integration with :ref:`SInvoice
        <localizations/vietnam/sinvoice>`.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. _localizations/vietnam/company:

Company
=======

To use all the features of this fiscal localization, the following fields are required on the
:doc:`company record </applications/general/companies>`:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

   - In the :guilabel:`Street` field, enter the street name, number, and any additional address
     information.
   - In the :guilabel:`Street 2` field, enter the neighborhood.

- :guilabel:`Tax ID`: tax identification number.

.. _localizations/vietnam/sinvoice:

E-invoicing with SInvoice
=========================

SInvoice_ is an e-invoice service platform provided by Viettel, one of the biggest e-invoice service
providers in Vietnam. Odoo supports integration with SInvoice to submit invoices generated in Odoo.

Configuration
-------------

SInvoice platform
~~~~~~~~~~~~~~~~~

To send electronic invoices to SInvoice, the following must be created on SInvoice_:

- :ref:`SInvoice account <localizations/vietname/sinvoice-registration>`
- :ref:`Invoice template <localizations/vietname/sinvoice-template>`
- :ref:`Invoice symbol <localizations/vietname/sinvoice-symbol>`
- :ref:`Invoice issuance notice <localizations/vietname/sinvoice-notice>`

.. _localizations/vietname/sinvoice-registration:

SInvoice registration
*********************

To create an account, go to SInvoice_ and register for the desired plan. Fill in the form that
opens to be contacted by SInvoice_ to create an account.

Once you have an account, log into SInvoice_ using your :guilabel:`Username` and
:guilabel:`Password`.

.. _localizations/vietname/sinvoice-template:

Invoice template creation
*************************

#. On the left side of the overview page, in the :guilabel:`Release management` menu, click
   :guilabel:`Create business information`.
#. In the :guilabel:`Update key information` step, fill in the following fields and other optional
   information if needed: :guilabel:`Unit name`, :guilabel:`Address`, :guilabel:`Contact person`,
   :guilabel:`Type of representative documents`.
#. Click :guilabel:`Update`.
#. In the :guilabel:`Look up digital certificate` step, click :guilabel:`Add new` to add a digital
   certificate.
#. Select the :guilabel:`Branch/Enterprise` and the :guilabel:`Type of digital certificate`, then
   fill in the required fields for each type:

     - :guilabel:`Supplier`: CloudCA
     - :guilabel:`Signer ID`: CloudCA
     - :guilabel:`Digital Certificate`: CloudCA
     - :guilabel:`How to download file`: HSM
     - :guilabel:`File Upload`: HSM, USB-TOKEN

#. Click :guilabel:`Generate key pair` to generate encryption keys for authentication, and
   :guilabel:`Save`.
#. In the :guilabel:`Manage invoice templates` step, add a new :guilabel:`Invoice template`.
#. Select the :guilabel:`Invoice type` and fill in the :guilabel:`Invoice template code`,
   :guilabel:`Invoice template name`, and other optional information if needed.
#. Click :guilabel:`Update`.

.. seealso::
   `SInvoice documentation on electronic invoice template creation
   <https://www.sinvoice.vn/2021/02/hdsd-tai-lieu-nghiep-vu-tao-mau-hoa-don-dien-tu.html?debug=1>`_

.. _localizations/vietname/sinvoice-symbol:

Invoice symbol creation
***********************

On the left side of the main screen, in the :guilabel:`Release management` menu, click
:guilabel:`Invoice symbol` and follow these steps:

#. Click :guilabel:`Add new` and select the :guilabel:`Invoice template`.
#. Set the :guilabel:`Status` to :guilabel:`Active` to activate the symbol and fill in the
   :guilabel:`Invoice symbol`.
#. Enable :guilabel:`Stop automatic sending to tax authorities` and :guilabel:`Default for built-in
   API` based on preference.
#. Click :guilabel:`Save`.

.. _localizations/vietname/sinvoice-notice:

Invoice issuance notice
***********************

On the left side of the main screen, in the :guilabel:`Release management` menu, click
:guilabel:`Create issuance notice` and follow these steps:

#. Click :guilabel:`Add new`, select the :guilabel:`Name of the business unit to issue an e-invoice`
   and the :guilabel:`Tax agency name`. Based on the business unit and tax agency selected, the
   :guilabel:`Tax code`, :guilabel:`Address`, :guilabel:`Phone number`, and :guilabel:`Separator
   used` are automatically filled and uneditable.
#. Click :guilabel:`Select the invoice type for issuance`, and then select and fill in the
   following information :

   - :guilabel:`Invoice type`: The invoice type on which to declare an issuance notice.
   - :guilabel:`Invoice template`: Select from the list of templates available based on the invoice
     type.
   - :guilabel:`Symbol`: Select from the list of symbols available based on the invoice type.
   - :guilabel:`Quantity`: Total number of invoices to issue for the selected type. Based on the
     type and template selected, this field is filled in automatically. It can be changed if needed.
   - :guilabel:`Start date of use`: The date from which the invoice template, range, and quantity
     are used for the issuance notice.

#. Click :guilabel:`Save` and select more invoice types if necessary by repeating the steps above.
   Click :guilabel:`Save` to finish drafting the notice.
#. Click :guilabel:`Send to tax authorities` for approval. Once approved, the notice's
   :guilabel:`Status` is changed to :guilabel:`Active`.

.. _localizations/vietnam/sinvoice-odoo:

Odoo database
~~~~~~~~~~~~~

Link Odoo to SInvoice
*********************

To connect Odoo with SInvoice, go to :menuselection:`Accounting --> Configuration --> Settings`.
In the :guilabel:`Vietnamese Integration` section, fill in your SInvoice :guilabel:`Username` and
:guilabel:`Password`. Add a :guilabel:`Default symbol` to generate a prefix for the invoice number
managed in SInvoice if needed.

Invoice template
****************

To create SInvoice templates, go to :menuselection:`Accounting --> Configuration --> Templates`.
Click :guilabel:`New` and add a :guilabel:`Template code` and a :guilabel:`Template Invoice Type`.
The :guilabel:`Template code` is the initial sequence of digits in the name assigned by SInvoice.
For example, if the invoice template is `1/001 - Hóa đơn GTGT - ND123`, the :guilabel:`Template
code` is `1/001`. The SInvoice templates in Odoo must match the ones in SInvoice.

To add :guilabel:`Invoice Symbols`, click :guilabel:`Add a new line`.

Sending invoices to SInvoice
----------------------------

Invoices can be sent to SInvoice once they have been confirmed. To do so, follow the
:ref:`invoice sending <accounting/invoice/sending>` steps. In the :guilabel:`Send` popup, enable
:guilabel:`Send to SInvoice` and click :guilabel:`Send & Print`.

Once the invoice has been successfully submitted to SInvoice, the :guilabel:`SInvoice Status` field
in the :guilabel:`SInvoice` tab of the invoice is updated to :guilabel:`Sent`. The
:guilabel:`SInvoice Number`, :guilabel:`Issue Date`, :guilabel:`Secret Code` and :guilabel:`eInvoice
Number` fields are also updated. The same information is available on SInvoice.

Replacement or adjustment invoices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A replacement invoice is issued to correct an invoice that has **yet to be tax declared**, whereas
an adjustment invoice is issued to correct one that has **already been tax declared**. Follow these
steps to issue a replacement or adjustment invoice:

#. Open the invoice and click :guilabel:`Credit Note`.
#. In the :guilabel:`Credit Note` popup, fill in the following fields:

   - :guilabel:`Reason displayed on Credit Note`
   - :guilabel:`Adjustment type`
   - :guilabel:`Agreement Name`
   - :guilabel:`Agreement Date`
   - :guilabel:`Journal`
   - :guilabel:`Reversal date`

#. Click :guilabel:`Reverse and Create Invoice` to issue a replacement invoice, or
   :guilabel:`Reverse` to issue an adjustment invoice.

The :guilabel:`SInvoice Status` in the :guilabel:`SInvoice` invoice tab is updated to
:guilabel:`Replaced` for a replacement invoice or :guilabel:`Adjusted` for an adjustment invoice.

Invoice cancellation
~~~~~~~~~~~~~~~~~~~~

If an invoice needs to be canceled, open the invoice and click :guilabel:`Request Cancel`. In the
:guilabel:`Invoice Cancellation` popup, enter the cancellation :guilabel:`Reason`,
:guilabel:`Agreement Name`, and :guilabel:`Agreement Date`, and click :guilabel:`Request
Cancellation`.

The :guilabel:`SInvoice Status` in the :guilabel:`SInvoice` invoice tab is updated to
:guilabel:`Canceled`.

.. _localizations/vietnam/qrcode:

QR banking codes
================

Vietnamese QR banking is a payment service platform that allows customers to make instant domestic
payments to individuals and merchants in Vietnamese dong via online and mobile banking.

Configuration
-------------

To activate QR banking codes, go to :menuselection:`Accounting --> Configuration --> Settings` and
enable :guilabel:`QR Codes` in the :guilabel:`Customer Payments` section.

Bank account
~~~~~~~~~~~~

To activate QR banking for a bank account, go to :menuselection:`Contacts --> Configuration -->
Bank Accounts` and select the bank account. Fill in the :guilabel:`Bank Identifier Code`,
:guilabel:`Proxy Type` (based on the information used to identify the :guilabel:`Merchant Account`,
such as the card number and bank account numbers), and :guilabel:`Proxy Value` fields.

Enable :guilabel:`Include Reference` to include the invoice number in the QR code.

.. important::
   - The account holder's country must be set to `Vietnam`, and their city must be specified on the
     contact form.
   - The :ref:`account number <accounting/bank/account-number>` and bank must be set on the
     :guilabel:`Bank` journal.

.. seealso::
   :doc:`../accounting/bank`

Generating QR codes on invoices
-------------------------------

When creating a new invoice, open the :guilabel:`Other Info` tab and select :guilabel:`EMV
Merchant-Presented QR-code` in the :guilabel:`Payment QR-code` field.

.. note::
   Ensure the :guilabel:`Recipient Bank` is configured, as Odoo uses this field to generate QR
   codes.
