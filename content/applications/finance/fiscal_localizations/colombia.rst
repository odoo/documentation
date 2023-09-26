========
Colombia
========

.. |DIAN| replace:: :abbr:`DIAN (Dirección de Impuestos y Aduanas Nacionales)`

Odoo's Colombian localization package provides accounting, fiscal, and legal features for databases
in Colombia – such as chart of accounts, taxes, and electronic invoicing.

In addition, a series of videos on the subject is also available. These videos cover how to start
from scratch, set up configurations, complete common workflows, and provide in-depth looks at some
specific use cases as well.

.. seealso::
   `Smart Tutorial - Colombian Localization
   <https://www.odoo.com/slides/smart-tutorial-localizacion-de-colombia-132>`_.

.. _colombia/configuration:

Configuration
=============

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Colombian
localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Colombia - Accounting`
     - `l10n_co`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`. This module adds
       the base accounting features for the Colombian localization: chart of accounts, taxes,
       withholdings, and identification document type.
   * - :guilabel:`Colombian - Accounting Reports`
     - `l10n_co_reports`
     - Includes accounting reports for sending certifications to suppliers for withholdings applied.
   * - :guilabel:`Electronic invoicing for Colombia with Carvajal`
     - `l10n_co_edi`
     - This module includes the features required for integration with Carvajal, and
       generates the electronic invoices and support documents related to the vendor bills, based on
       |DIAN| regulations.
   * - :guilabel:`Colombian - Point of Sale`
     - `l10n_co_pos`
     - Includes Point of Sale receipts for Colombian localization.

.. note::
   When `Colombia` is selected for a company's :guilabel:`Fiscal Localization`, Odoo automatically
   installs certain modules.

Company configuration
---------------------

To configure your company information, go to the :menuselection:`Contacts` app, and search for your
company.

Alternatively, activate :ref:`developer mode <developer-mode>` and navigate to
:menuselection:`General Setting --> Company --> Update Info --> Contact`. Then, edit the contact
form and configure the following information:

- :guilabel:`Company Name`.
- :guilabel:`Address`: Including :guilabel:`City`, :guilabel:`Department` and :guilabel:`ZIP` code.
- :guilabel:`Identification Number`: Select the :guilabel:`Identification Type` (`NIT`, `Cédula de
  Ciudadanía`, `Registro Civil`, etc.). When the :guilabel:`Identification Type` is `NIT`, the
  :guilabel:`Identification Number` **must** have the *verification digit* at the end of the ID
  prefixed by a hyphen (`-`).

Next, configure the :guilabel:`Fiscal Information` in the :guilabel:`Sales & Purchase` tab:

- :guilabel:`Obligaciones y Responsabilidades`: Select the fiscal responsibility for the company
  (`O-13` Gran Contribuyente, `O-15` Autorretenedor, `O-23` Agente de retención IVA, `O-47` Regimen
  de tributación simple, `R-99-PN` No Aplica).
- :guilabel:`Gran Contribuyente`: If the company is *Gran Contribuyente* this option should be
  selected.
- :guilabel:`Fiscal Regimen`: Select the Tribute Name for the company (`IVA`, `INC`, `IVA e INC`,
  or `No Aplica`)
- :guilabel:`Commercial Name`: If the company uses a specific commercial name, and it needs to be
  displayed in the invoice.

Carjaval credentials configuration
----------------------------------

Once the modules are installed, the user credentials **must** be configured, in order to connect
with Carvajal Web Service. To do so, navigate to :menuselection:`Accounting --> Configuration -->
Settings` and scroll to the :guilabel:`Colombian Electronic Invoicing` section. Then, fill in the
required configuration information provided by Carvajal:

- :guilabel:`Username` and :guilabel:`Password`: Username and password (provided by Carvajal) to the
  company.
- :guilabel:`Company Registry`: Company's NIT number *without* the verification code.
- :guilabel:`Account ID`: Company's NIT number followed by `_01`.
- :guilabel:`Colombia Template Code`: Select one of the two available templates (`CGEN03` or
  `CGNE04`) to be used in the PDF format of the electronic invoice.

Enable the :guilabel:`Test mode` checkbox to connect with the Carvajal testing environment.

Once Odoo and Carvajal are fully configured and ready for production, deactivate the :guilabel:`Test
mode` checkbox to use the production database.

.. image:: colombia/carvajal-configuration.png
   :align: center
   :alt: Configure credentials for Carvajal web service in Odoo.

.. important::
   :guilabel:`Test mode` must **only** be used on duplicated databases, **not** the production
   environment.

Report data configuration
-------------------------

Report data can be defined for the fiscal section and bank information of the PDF as part of the
configurable information sent in the XML.

Navigate to :menuselection:`Accounting --> Configuration --> Settings`, and scroll to the
:guilabel:`Colombian Electronic Invoicing` section, in order to find the :guilabel:`Report
Configuration` fields. Here the header information for each report type can be configured.

- :guilabel:`Gran Contribuyente`
- :guilabel:`Tipo de Régimen`
- :guilabel:`Retenedores de IVA`
- :guilabel:`Autorretenedores`
- :guilabel:`Resolución Aplicable`
- :guilabel:`Actividad Económica`
- :guilabel:`Bank Information`

.. _colombia/master-data:

Master data configuration
-------------------------

Partner
~~~~~~~

Partner contacts can be created in the *Contacts* app. To do so, navigate to
:menuselection:`Contacts`, and click the :guilabel:`Create` button.

Then, name the contact, and using the radio buttons, select the contact type, either
:guilabel:`Individual` or :guilabel:`Company`.

Complete the full :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, and
:guilabel:`ZIP` code. Then, complete the identification and fiscal information.

Identification information
**************************

Identification types, defined by the |DIAN|, are available on the partner form, as part of the
Colombian localization. Colombian partners **must** have their :guilabel:`Identification Number`
(VAT) and :guilabel:`Document Type` set.

.. tip::
   When the :guilabel:`Document Type` is `NIT`, the :guilabel:`Identification Number` needs to be
   configured in Odoo, including the *verification digit at the end of the ID, prefixed by a hyphen
   (`-`)*.

Fiscal information
******************

The partner's responsibility codes (section 53 in the :abbr:`RUT (Registro único tributario)`
document) are included as part of the electronic invoicing module, as it is required by the |DIAN|.

The required fields can be found under :menuselection:`Partner --> Sales & Purchase Tab --> Fiscal
Information section`:

- :guilabel:`Obligaciones y Responsabilidades`: Select the fiscal responsibility for the company
  (`O-13` Gran Contribuyente, `O-15` Autorretenedor, `O-23` Agente de retención IVA, `O-47` Regimen
  de tributación simple, or `R-99-PN` No Aplica).
- :guilabel:`Gran Contribuyente`: If the company is *Gran Contribuyente* this option should be
  selected.
- :guilabel:`Fiscal Regimen`: Select the tribute name for the company (`IVA`, `INC`, `IVA e INC`, or
  `No Aplica`)
- :guilabel:`Commercial Name`: If the company uses a specific commercial name, and it needs to be
  displayed in the invoice.

Products
~~~~~~~~

To manage products, navigate to :menuselection:`Accounting --> Customers --> Products`, then click
on a product.

When adding general information on the product form, it is required that either the
:guilabel:`UNSPSC Category` (:guilabel:`Accounting` tab), or :guilabel:`Internal Reference`
(:guilabel:`General Information` tab) field is configured. Be sure to :guilabel:`Save` the product
once configured.

Taxes
~~~~~

To create or modify taxes, go to :menuselection:`Accounting --> Configuration --> Taxes`, and select
the related tax.

If sales transactions include products with taxes, the :guilabel:`Value Type` field in the
:guilabel:`Advanced Options` tab needs to be configured per tax. Retention tax types
(:guilabel:`ICA`, :guilabel:`IVA`, :guilabel:`Fuente`) are also included. This configuration is used
to display taxes correctly in the invoice PDF.

.. image:: colombia/retention-tax-types.png
   :align: center
   :alt: The ICA, IVA and Fuente fields in the Advanced Options tab in Odoo.

.. _co-journals:

Sales journals
~~~~~~~~~~~~~~

Once the |DIAN| has assigned the official sequence and prefix for the electronic invoice resolution,
the sales journals related to the invoice documents **must** be updated in Odoo. To do so, navigate
to :menuselection:`Accounting --> Configuration --> Journals`, and select an existing sales journal,
or create a new one with the :guilabel:`Create` button.

On the sales journal form, input the :guilabel:`Journal Name`, :guilabel:`Type`, and set a unique
:guilabel:`Short Code` in the :guilabel:`Journals Entries` tab. Then, configure the following data
in the :guilabel:`Advanced Settings` tab:

- :guilabel:`Electronic invoicing`: Enable :guilabel:`UBL 2.1 (Colombia)`.
- :guilabel:`Invoicing Resolution`: Resolution number issued by |DIAN| to the company.
- :guilabel:`Resolution Date`: Initial effective date of the resolution.
- :guilabel:`Resolution end date`: End date of the resolution's validity.
- :guilabel:`Range of Numbering (minimum)`: First authorized invoice number.
- :guilabel:`Range of Numbering (maximum)`: Last authorized invoice number.

.. note::
   The sequence and resolution of the journal **must** match the one configured in Carvajal and the
   |DIAN|.

Invoice sequence
****************

The invoice sequence and prefix **must** be correctly configured when the first document is created.

.. note::
   Odoo automatically assigns a prefix and sequence to the following invoices.

Purchase journals
*****************

Once the |DIAN| has assigned the official sequence and prefix for the *support document* related to
vendor bills, the purchase journals related to their supporting documents need to be updated in
Odoo. The process is similar to the configuration of the :ref:`sales journals <co-journals>`.

Chart of accounts
*****************

The :doc:`chart of accounts </applications/finance/accounting/get_started/chart_of_accounts>` is
installed by default as part of the localization module, the accounts are mapped automatically in
taxes, default account payable, and default account receivable. The chart of accounts for Colombia
is based on the PUC (Plan Unico de Cuentas).

.. _colombia/workflows:

Main workflows
==============

Electronic invoices
-------------------

The following is a breakdown of the main workflow for electronic invoices with the Colombian
localization:

#. Sender creates an invoice.
#. Electronic invoice provider generates the legal XML file.
#. Electronic invoice provider creates the CUFE (Invoice Electronic Code) with the electronic
   signature.
#. Electronic invoice provider sends a notification to |DIAN|.
#. |DIAN| validates the invoice.
#. |DIAN| accepts or rejects the invoice.
#. Electronic invoice provider generates the PDF invoice with a QR code.
#. Electronic invoice provider sends invoice to the acquirer.
#. Acquirer sends a receipt of acknowledgement, and accepts or rejects the invoice.
#. Sender downloads a :file:`.zip` file with the PDF and XML.

.. image:: colombia/workflow-electronic-invoice.png
   :align: center
   :alt: Electronic invoice workflow for Colombian localization.

.. _colombia/invoice-creation:

Invoice creation
~~~~~~~~~~~~~~~~

.. note::
   The functional workflow taking place before an invoice validation does **not** alter the main
   changes introduced with the electronic invoice.

Electronic invoices are generated and sent to both the |DIAN| and customer through Carvajal's web
service integration. These documents can be created from your sales order or manually generated. To
create a new invoice, go to :menuselection:`Accounting --> Customers --> Invoices`, and select
:guilabel:`Create`. On the invoice form configure the following fields:

- :guilabel:`Customer`: Customer's information.
- :guilabel:`Journal`: Journal used for electronic invoices.
- :guilabel:`Electronic Invoice Type`: Select the type of document. By default, :guilabel:`Factura
  de Venta` is selected.
- :guilabel:`Invoice Lines`: Specify the products with the correct taxes.

When done, click :guilabel:`Confirm`.

.. _colombia/invoice-validation:

Invoice validation
~~~~~~~~~~~~~~~~~~

After the invoice confirmation, an XML file is created and sent automatically to Carvajal. The
invoice is then processed asynchronously by the E-invoicing service UBL 2.1 (Colombia). The file is
also displayed in the chatter.

.. image:: colombia/invoice-sent.png
   :align: center
   :alt: Carvajal XML invoice file in Odoo chatter.

The :guilabel:`Electronic Invoice Name` field is now displayed in the :guilabel:`EDI Documents` tab,
with the name of the XML file. Additionally, the :guilabel:`Electronic Invoice Status` field is
displayed with the initial value :guilabel:`To Send`. To process the invoice manually, click on the
:guilabel:`Process Now` button.

.. _colombia/invoice-xml:

Reception of legal XML and PDF
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The electronic invoice vendor (Carvajal) receives the XML file, and proceeds to validate its
structure and information.

After validating the electronic invoice, proceed to generate a legal XML which includes a digital
signature and a unique code (CUFE), a PDF invoice that includes a QR code and the CUFE is also
generated. If everything is correct the :guilabel:`Electronic Invoicing` field value changes to
:guilabel:`Sent`.

A :file:`.zip` containing the legal electronic invoice (in XML format) and the invoice in (PDF
format) is downloaded and displayed in the invoice chatter:

.. image:: colombia/invoice-zip.png
   :align: center
   :alt: ZIP file displayed in the invoice chatter in Odoo.

The electronic invoice status changes to :guilabel:`Accepted`.

Credit notes
------------

The process for credit notes is the same as for invoices. To create a credit note with reference to
an invoice, go to :menuselection:`Accounting --> Customers --> Invoices`. On the invoice, click
:guilabel:`Add Credit Note`, and complete the following information:

- :guilabel:`Credit Method`: Select the type of credit method.

  - :guilabel:`Partial Refund`: Use this option when it is a partial amount.
  - :guilabel:`Full Refund`: Use this option if the credit note is for the full amount.
  - :guilabel:`Full refund and new draft invoice`: Use this option if the credit note is
    auto-validated and reconciled with the invoice. The original invoice is duplicated as a new
    draft.

- :guilabel:`Reason`: Enter the reason for the credit note.
- :guilabel:`Reversal Date`: Select if you want a specific date for the credit note or if it is the
  journal entry date.
- :guilabel:`Use Specific Journal`: Select the journal for your credit note or leave it empty if
  you want to use the same journal as the original invoice.
- :guilabel:`Refund Date`: If you chose a specific date, select the date for the refund.

Once reviewed, click the :guilabel:`Reverse` button.

Debit notes
-----------

The process for debit notes is similar to credit notes. To create a debit note with reference to an
invoice, go to :menuselection:`Accounting --> Customers --> Invoices`. On the invoice, click the
:guilabel:`Add Debit Note` button, and enter the following information:

- :guilabel:`Reason`: Type the reason for the debit note.
- :guilabel:`Debit note date`: Select the specific options.
- :guilabel:`Copy lines`: Select this option if you need to register a debit note with the same
  lines of invoice.
- :guilabel:`Use Specific Journal`: Select the printer point for your debit note, or leave it empty
  if you want to use the same journal as the original invoice.

When done, click :guilabel:`Create Debit Note`.

Support document for vendor bills
---------------------------------

With master data, credentials, and the purchase journal configured for support documents related to
vendor bills, you can start using *support documents*.

Support documents for vendor bills can be created from your purchase order or manually. Go to
:menuselection:`Accounting --> Vendors --> Bills` and fill in the following data:

- :guilabel:`Vendor`: Enter the vendor's information.
- :guilabel:`Bill Date`: Select the date of the bill.
- :guilabel:`Journal`: Select the journal for support documents related to the vendor bills.
- :guilabel:`Invoiced Lines`: Specify the products with the correct taxes.

Once reviewed, click the :guilabel:`Confirm` button. Upon confirmation, an XML file is created and
automatically sent to Carvajal.

.. _colombia/common-errors:

Common errors
-------------

During the XML validation, the most common errors are related to missing master data (*Contact Tax
ID*, *Address*, *Products*, *Taxes*). In such cases, error messages are shown in the chatter after
updating the electronic invoice status.

After the master data is corrected, it's possible to reprocess the XML with the new data and send
the updated version, using the :guilabel:`Retry` button.

.. image:: colombia/xml-validation-error.png
   :alt: XML validation errors shown in the invoice chatter in Odoo.

.. _colombia/reports:

Financial reports
=================

Certificado de Retención en ICA
-------------------------------

This report is a certification to vendors for withholdings made for the Colombian Industry and
Commerce (ICA) tax. The report can be found under :menuselection:`Accounting --> Reporting -->
Colombian Statements --> Certificado de Retención en ICA`.

.. image:: colombia/ica-report.png
   :align: center
   :alt: Certificado de Retención en ICA report in Odoo Accounting.

Certificado de Retención en IVA
-------------------------------

This report issues a certificate on the amount withheld from vendors for VAT withholding. The report
can be found under :menuselection:`Accounting --> Reporting --> Colombian Statements --> Certificado
de Retención en IVA`.

.. image:: colombia/iva-report.png
   :align: center
   :alt: Certificado de Retención en IVA report in Odoo Accounting.

Certificado de Retención en la Fuente
-------------------------------------

This certificate is issued to partners for the withholding tax that they have made. The report can
be found under :menuselection:`Accounting --> Reporting --> Colombian Statements --> Certificado de
Retención en Fuente`.

.. image:: colombia/fuente-report.png
   :align: center
   :alt: Certificado de Retención en Fuente report in Odoo Accounting.
