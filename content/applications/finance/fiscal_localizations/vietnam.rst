=======
Vietnam
=======

.. _SInvoice: https://www.sinvoice.vn/
.. _eTax-electronic-tax-system: https://thuedientu.gdt.gov.vn/

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
====================================

SInvoice_ is an e-invoice service platform provided by Viettel, one of the biggest e-invoice service
provider in Vietnam. Odoo supports integration with SInvoice to submit the invoices generated in
Odoo.

To send electronic invoices to SInvoice, :guilabel:`Invoice template` and
:guilabel:`Invoice symbol` are required to be created in SInvoice followed by legal notice issance
on eTax-electronic-tax-system_ for the invoice template created. Account manager assigned from
SInvoice can guide the steps needed.

.. seealso::
   - `Invoice template <https://www.sinvoice.vn/2021/02/hdsd-tai-lieu-nghiep-vu-tao-mau-hoa-don-dien-tu.html?debug=1>`_
   - `Legal notice <https://www.sinvoice.vn/2020/11/hdsd-cach-gui-thong-bao-phat-hanh-hoa-don-dien-tu-qua-mang.html>`_

.. _vietnam/sinvoice/setup:

Set-up
------

.. _vietnam/sinvoice/setup/sinvoice:

Configuration in SInvoice
~~~~~~~~~~~~~~~~~~~~~~~~~

.. _vietnam/sinvoice/setup/sinvoice/registration:

SInvoice registration
*********************

Log into SInvoice_. Use the :guilabel:`Username` and :guilabel:`Password` used to register for
the account.

.. note::
   To create an account, contact :guilabel:`SInvoice` directly on the portal.

.. _vietnam/sinvoice/setup/sinvoice/template:

Invoice template creation
*************************

#. On the left side of the overview page, click :guilabel:`Create business information` menu under
   :guilabel:`Release management`. In the :guilabel:`Update key information` step, fill in the
   following fields and other optional information, and click :guilabel:`Update`.

   - :guilabel:`Unit name`
   - :guilabel:`Address`
   - :guilabel:`Contact person`
   - :guilabel:`Type of representative documents`

#. In the :guilabel:`Look up digital certificate` step, click :guilabel:`Add new` to add a digital
   certificate. Choose the :guilabel:`Branch/Enterprise` and
   :guilabel:`Type of digital certificate` and required field for each type needed. Once all the
   required information is filled, click :guilabel:`Generate key pair` and then :guilabel:`Record`
   to save.

#. In the :guilabel:`Manage invoice templates` step, add a new :guilabel:`Invoice template`. Choose
   the :guilabel:`Invoice type`, :guilabel:`Invoice template code`,
   :guilabel:`Invoice template name` and other optional information to set the template, and click
   :guilabel:`Update`.

.. _vietnam/sinvoice/setup/sinvoice/symbol:

Invoice symbol creation
***********************

On the left side of the main screen, click :guilabel:`Invoice symbol` menu under
:guilabel:`Release management`. Click :guilabel:`Add new` and choose the
:guilabel:`Invoice template`, :guilabel:`Status` and add :guilabel:`Invoice symbol`. Status must be
:guilabel:`Active` to activate the symbol. Choose the remaining options applicable, and click
:guilabel:`Record` to save.

.. image:: vietnam/sinvoice-set-up-symbol.png
   :alt: SInvoice symbol set-up

.. _vietnam/sinvoice/setup/sinvoice/notice:

Legal notice issuance
*********************

#. On the eTax-electronic-tax-system_ page, click :guilabel:`Business` and :guilabel:`Login`.

   .. note::
      To create an account, click :guilabel:`Register` instead of login.

#. After a successful login, click :guilabel:`Online declaration` under :guilabel:`Tax declaration`
   menu. On the :guilabel:`Online declaration` menu, select `TB01/AC - Thông báo phát hành hóa đơn` and
   click :guilabel:`Continue`.

   .. Note::
      The business needs to register for `TB01/AC - Thông báo phát hành hóa đơn` to select it.

#. Enter :guilabel:`Ward/Commune information` and click :icon:`fa-ellipsis-h` to choose the
   :guilabel:`Invoice type` to create a release notification.
#. On the declaration form, fill in the following information.

   - :guilabel:`Denominator`
   - :guilabel:`Symbol`
   - :guilabel:`Quantity`
   - :guilabel:`From`
   - :guilabel:`To`
   - :guilabel:`Start date of use`
   - :guilabel:`Name of printing company/software provider`:
     `TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI`
   - :guilabel:`Tax code of printing company/software provider`: `0100109106`
   - :guilabel:`Legal representative`: Name of the director

   Choose the :guilabel:`Tax authority receiving the notification`, and click
   :guilabel:`Complete declaration`. Use USB token for authentication and click
   :guilabel:`Sign and submit`.
#. Go to :guilabel:`Declaration` under :guilabel:`Search` menu to select the declaration for
   `TTB01/AC - Thông báo phát hành hóa đơn`, and click :guilabel:`Search`. Find the declaration
   file submitted and upload the sample in :file:`.doc` or :file:`.docx` format, and click
   :guilabel:`Submit Declaration`.

.. _vietnam/sinvoice/setup/odoo:

Configuration in Odoo
~~~~~~~~~~~~~~~~~~~~~

To connect Odoo with SInvoice, go to :menuselection:`Accounting --> Configuration --> Settings`.
In the :guilabel:`Vietnamese Integration` section, fill in the :guilabel:`Username` and
:guilabel:`Password` to set up SInvoice. Add a :guilabel:`Default symbol` to generate
a prefix of the invoice number manged in SInvoce if needed.

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
:guilabel:`Sent`` when the submission is successful. The :guilabel:`SInvoice Number`,
:guilabel:`Issue Date`, :guilabel:`Secret Code` and :guilabel:`eInvoice Number` field are also updated.
The same information is available on SInvoice portal.

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
   :guilabel:`Replaced` for a replacement invoice or :guilabel:`Adjusted` for an adjustment invoice.

.. _vietnam/sinvoice/workflow/cancel:

Invoice cancellation
~~~~~~~~~~~~~~~~~~~~

If an invoice needs to be canceled, open the invoice and click :guilabel:`Request Cancel`. In the
guilabel:`Invoice Cancellation` window, enter the cancellation :guilabel:`Reason`,
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
the bank account for which you want to activate Vietnamese QR banking. Set the
:guilabel:`Bank Identifier Code` on the bank. Then set the :guilabel:`Proxy Type` and fill in the
:guilabel:`Proxy Value` field depending on the type you chose.

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

When creating a new invoice, open the :guilabel:`Other Info` tab and set the :guilabel:`Payment
QR-code` option to *EMV Merchant-Presented QR-code*.

Ensure that the :guilabel:`Recipient Bank` is the one you configured, as Odoo uses this field to
generate the Vietnamese QR banking QR code.
