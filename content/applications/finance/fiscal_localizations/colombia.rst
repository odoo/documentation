========
Colombia
========

.. |DIAN| replace:: :abbr:`DIAN (Dirección de Impuestos y Aduanas Nacionales)`
.. |NIT| replace:: :abbr:`NIT (El Número de Identificación Tributaria)`

The Colombian localization has the following `prerequisites
<https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/que-requieres-para-factura-electronicamente/>`_
when using the `DIAN Own Software
<https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/como-puedes-facturar-electronicamente/>`_
solution with Odoo:

- Be registered in the `RUT
  <https://www.dian.gov.co/tramitesservicios/tramites-y-servicios/tributarios/Paginas/RUT.aspx>`_
  (Registro Único Tributario) with a valid |NIT|.
- Have a valid digital signature certificate `approved by the ONAC
  <https://onac.org.co/directorio-de-acreditados/>`_.
- `Register and get enabled
  <https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/proceso-de-registro-y-habilitacion-como-facturador-electronico/>`_
  by completing the certification process required by the |DIAN|.

.. seealso::
   - For more information on how to complete the certification process for the |DIAN| module, review
     the following `webinar <https://www.youtube.com/watch?v=l0G6iDc7NQA>`_
   - `Smart Tutorial - Colombian Localization
     <https://www.odoo.com/slides/smart-tutorial-localizacion-de-colombia-132>`_
   - :doc:`Documentation on e-invoicing's legality and compliance in Colombia
     <../accounting/customer_invoices/electronic_invoicing/colombia>`

Modules
=======

The following modules are installed automatically with the Colombian localization:

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
     - This module includes accounting reports for sending certifications to suppliers for
       withholdings applied.
   * - :guilabel:`Colombian - Point of Sale`
     - `l10n_co_pos`
     - This module includes **Point of Sale** receipts for Colombian localization.
   * - :guilabel:`E-Commerce Colombian Localization`
     - `l10n_co_edi_website_sale`
     - Specific e-commerce localization module.
   * - :guilabel:`Electronic invoicing for Colombia with DIAN`
     - `l10n_co_dian`
     - This module includes the features required for integration with the |DIAN| as its own
       software, and adds the ability to generate electronic invoices and support documents based on
       |DIAN| regulations.
   * - :guilabel:`Electronic invoicing for Colombia with Carvajal`
     - `l10n_co_edi`
     - This module includes the features required for integration with Carvajal. Adds the ability to
       generate the electronic invoices and support documents, based on |DIAN| regulations.
   * - :guilabel:`Mandate invoicing for Colombia`
     - `l10n_co_edi_mandate`
     - EDI Mandate invoicing extension

Additionally, the following modules must be manually :ref:`installed <general/install>`:

.. list-table::
   :header-rows: 1
   :widths: 25 30 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Electronic invoicing for POS in Colombia`
     - `l10n_co_edi_pos`
     - This module enables electronic invoicing directly within the POS application, supporting the
       generation of both customer invoices and credit notes. It automatically appends required
       fiscal data and QR codes to POS receipts and includes the daily sales report mandated by
       DIAN.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :doc:`installed
   <../../general/apps_modules>`.

.. _localizations/colombia/loc-review:

Localization overview
=====================

The Colombian localization package ensures compliance with Colombian fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Colombia’s standards.

The Colombian localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :ref:`Chart of accounts <localization/colombia/chart-of-accounts>`: a predefined structure
  tailored to Colombian accounting standards
- :ref:`Taxes <localization/colombia/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options.
- :ref:`Reporting <localization/colombia/reports>`

.. _localization/colombia/chart-of-accounts:

Chart of accounts
-----------------

The :doc:`chart of accounts </applications/finance/accounting/get_started/chart_of_accounts>` is
installed by default as part of the localization module. The accounts are mapped automatically in
taxes, default account payable, and default account receivable. The chart of accounts for Colombia
is based on the PUC (Plan Unico de Cuentas).

.. _localization/colombia/taxes:

Taxes
-----

To create or modify taxes, go to :menuselection:`Accounting --> Configuration --> Taxes`, and select
the related tax.

If sales transactions include products with taxes, configure the :guilabel:`Value Type` field in the
:guilabel:`Advanced Options` tab. Retention tax types (:guilabel:`ICA`, :guilabel:`IVA`,
:guilabel:`Fuente`) are also included. This configuration is used to display taxes correctly on the
invoice.

.. image:: colombia/dian-taxes-configuration.png
   :alt: Specific tax configurations per DIAN regulations.


.. _localization/colombia/einvoice-configuration:

Electronic invoicing credentials and |DIAN| environment
-------------------------------------------------------

To configure the user credentials to be used to connect with the |DIAN|'s web service and the
|DIAN| environment, navigate to :menuselection:`Accounting --> Configuration --> Settings` and
scroll to the :guilabel:`Colombian Electronic Invoicing` section. Then, follow these steps:

#. Select :guilabel:`DIAN: Free Service` as the :guilabel:`Electronic Invoicing Provider`.
#. Configure the :guilabel:`Operation Modes` for the respective types of documents
   (*electronic invoices* or *support documents*) to be generated from Odoo. Click
   :guilabel:`Add a line`, then fill in the fields:

   - :guilabel:`Software Mode`: the type of document to be generated with the operation mode.
   - :guilabel:`Software ID`: the ID generated by |DIAN| for the specific operation mode.
   - :guilabel:`Software PIN`: the PIN selected in the operation mode configuration in the |DIAN|
     portal.
   - :guilabel:`Testing ID`: the testing ID generated by |DIAN| and obtained after testing the
     operation mode.

#. Configure the available :guilabel:`Certificates` to sign the electronic documents. Click
   :guilabel:`Add a line`, then fill in the fields:

   - :guilabel:`Name`: the name of the certificate.
   - :guilabel:`Certificate`: upload the certificate file in PEM format. In the :guilabel:`Private
     Key` field that appears on the screen, select an existing private key or create a new one. To
     do so, enter a key name and select :guilabel:`Create and edit`. Then, in the :guilabel:`Create
     Private Key` wizard, upload a valid :guilabel:`Key file` and click :guilabel:`Save & Close`.

     .. image:: colombia/dian-credentials-configuration.png
        :alt: Colombian electronic invoicing credentials configured.

#. Configure the |DIAN| environment; the |DIAN| electronic invoicing module offers four different
   |DIAN| environments to connect with:

   - **DIAN demo mode**: This environment allows to test electronic invoicing workflows using
     a demo digital certificate. Files are created and accepted automatically and are not sent
     to any |DIAN| environment. Every internal validation can be tested. To activate it, tick the
     :guilabel:`DIAN Demo Mode` checkbox.

     .. note::
        The :guilabel:`DIAN Demo Mode` checkbox is hidden from view when the :guilabel:`Test
        environment` checkbox is enabled.

   - **Certification environment**: This environment is useful to pass the |DIAN| certification
     process and obtain the *Enabled* status to invoice from Odoo. To activate it, enable both the
     :guilabel:`Test environment` and the :guilabel:`Activate the certification process` checkboxes.
   - **Testing environment**: This environment allows reproducing electronic invoicing flows
     and validations in the |DIAN| testing portal. To activate it, enable only the :guilabel:`Test
     Environment` checkbox.
   - **Production environment**: This environment allows generating valid electronic documents. To
     activate it, disable both the :guilabel:`Test environment` and the :guilabel:`Activate the
     certification process` checkboxes.

     .. important::
        Do not activate :guilabel:`DIAN Demo Mode` on a production database. This mode is intended
        for use in test environments only.

.. note::
   In a multi-company database, each company can have its own certificate.

.. seealso::
   For electronic invoicing configurations using the Carvajal solution, review the following video:
   `Configuración de Facturación Electrónica - Localización de Colombia
   <https://www.youtube.com/watch?v=bzweMwTEbfY&list=PL1-aSABtP6ABxZshems3snMjx7bj_7ZsZ&index=3>`_.

.. _localization/colombia/products:

Products
--------

Access the product's form via :menuselection:`Accounting --> Customers --> Products` and ensure
that either the :guilabel:`UNSPSC Category` field (found in the :guilabel:`Accounting tab`) or the
:guilabel:`Internal Reference` field (in the :guilabel:`General Information` tab) is configured.

.. _localization/colombia/journals:

Journals
--------

.. _localization/colombia/sales-journals:

Sales journals
~~~~~~~~~~~~~~

Once the |DIAN| has assigned the official sequence and prefix for the electronic invoice resolution,
the sales journals related to the invoices **must** be updated in Odoo. To do so, navigate
to :menuselection:`Accounting --> Configuration --> Journals` and select an existing sales journal
or create a new one with the :guilabel:`Create` button.

On the sales journal form, enter the :guilabel:`Journal Name` and :guilabel:`Type`, then set a
unique :guilabel:`Short Code` in the :guilabel:`Journals Entries` tab. Then, configure the following
data in the :guilabel:`Advanced Settings` tab:

- :guilabel:`Electronic invoicing`: enable UBL 2.1 (Colombia).
- :guilabel:`Invoicing Resolution`: resolution number issued by |DIAN| to the company via their test
  set.
- :guilabel:`Resolution Date`: initial effective date of the resolution.
- :guilabel:`Resolution End Date`: end date of the resolution's validity.
- :guilabel:`Range of Numbering (minimum)`: first authorized invoice number.
- :guilabel:`Range of Numbering (maximum)`: last authorized invoice number.
- :guilabel:`Technical Key`: control key received from the |DIAN| portal test set or from their web
  service in case of the production environment.

When the database is configured for the :ref:`production environment
<localization/colombia/einvoice-configuration>`, instead of configuring these fields manually,
click the :guilabel:`Reload DIAN configuration` button to obtain the |DIAN| resolution information
from the |DIAN| web service.

.. image:: colombia/reload-dian-configuration-button.png
   :alt: Reload DIAN configuration button in sale journals.

.. important::
   - The short code and resolution of the journal **must** match the ones received in the |DIAN|
     portal test set or from the MUISCA portal.
   - The :ref:`invoice sequence and prefix <localization/colombia/invoice-creation>` **must** be
     correctly configured when the first invoice is created. Odoo automatically assigns a prefix
     and sequence to the following invoices.

.. _localization/colombia/purchase-journals:

Purchase journals
~~~~~~~~~~~~~~~~~

Once the |DIAN| has assigned the official sequence and prefix for the *support document* related to
vendor bills, the purchase journals related to their supporting documents need to be updated in
Odoo. The process is similar to the configuration of the :ref:`sales journals
<localization/colombia/sales-journals>`.

.. seealso::
   For more information on support document journals using the Carvajal solution, review the
   `Documento Soporte - Localización de Colombia video
   <https://www.youtube.com/watch?v=UmYsFcD7xzE&list=PL1-aSABtP6ABxZshems3snMjx7bj_7ZsZ&index=8>`_.

.. _localization/colombia/reports:

Financial reports
-----------------

.. _localization/colombia/certificado-ica:

Certificado de Retención en ICA
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This report is a certification to vendors for withholdings made for the Colombian Industry and
Commerce (ICA) tax. The report can be found under :menuselection:`Accounting --> Reporting -->
Colombian Statements --> Certificado de Retención en ICA`.

Click the :icon:`fa-cog` :guilabel:`(gear)` icon to display options to :guilabel:`Download Excel`
and :guilabel:`Copy to Documents`.

.. image:: colombia/retencion-ica-dian.png
   :alt: Certificado de Retención en ICA report in Odoo Accounting.

.. _localization/colombia/certificado-iva:

Certificado de Retención en IVA
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This report issues a certificate on the amount withheld from vendors for VAT withholding. The report
can be found under :menuselection:`Accounting --> Reporting --> Colombian Statements --> Certificado
de Retención en IVA`.

Click the :icon:`fa-cog` :guilabel:`(gear)` icon to display options to :guilabel:`Download Excel`
and :guilabel:`Copy to Documents`.

.. image:: colombia/retencion-iva-dian.png
   :alt: Certificado de Retención en IVA report in Odoo Accounting.

.. _localization/colombia/certificado-fuente:

Certificado de Retención en la Fuente
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This certificate is issued to partners for the withholding tax that they have made. The report can
be found under :menuselection:`Accounting --> Reporting --> Colombian Statements --> Certificado de
Retención en Fuente`.

Click the :icon:`fa-cog` :guilabel:`(gear)` icon to display options to :guilabel:`Download Excel`
and :guilabel:`Copy to Documents`.

.. image:: colombia/retencion-fuente-dian.png
   :alt: Certificado de Retención en Fuente report in Odoo Accounting.

.. _localization/colombia/workflows:

Multicurrency
-------------

The official exchange rate for Colombia is provided by the `Banco de la República
<https://suameca.banrep.gov.co/estadisticas-economicas/>`_.

To enable automatic exchange rate updates, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. Navigate to the :guilabel:`Currencies` section and enable :guilabel:`Automatic Currency Rates`.
#. Ensure that :guilabel:`[CO] Bank of the Republic` is selected as the :guilabel:`Service`.
#. Select an :guilabel:`Interval` for how frequently the currency rate should be automatically
   updated.

.. _localization/colombia/configuration/company-contacts:

Company and contacts
====================

To configure your company information:

#. Access your company's contact form:

   - Go to the :guilabel:`Contacts` app and search for your company or;
   - Go to the :guilabel:`Settings` app, activate the :ref:`developer mode <developer-mode>`, and in
     the :guilabel:`Companies` section, click :guilabel:`Update Info`. Then, in the
     :guilabel:`Contact` field, click on the company name.

#. Configure the following information:

   - :guilabel:`Company Name`.
   - :guilabel:`Address`: Including :guilabel:`City`, :guilabel:`Department`, and :guilabel:`ZIP`
     code.
   - :guilabel:`Identification Number`: Select the :guilabel:`Identification Type` (:guilabel:`NIT`,
     :guilabel:`Cédula de Ciudadanía`, :guilabel:`Registro Civil`, etc.). When the
     :guilabel:`Identification Type` is :guilabel:`NIT`, the
     :guilabel:`Identification Number` **must** have the *verification digit* at the end of the ID
     prefixed by a hyphen (`-`).

#. Go to the :guilabel:`Sales & Purchase` tab and configure the :guilabel:`Fiscal Information`:

   - :guilabel:`Obligaciones y Responsabilidades`: Select the fiscal responsibility for the company.
     (:guilabel:`O-13` Gran Contribuyente, :guilabel:`O-15` Autorretenedor,
     :guilabel:`O-23` Agente de retención IVA, :guilabel:`O-47` Regimen de tributación simple,
     :guilabel:`R-99-PN` No Aplica).
   - :guilabel:`Gran Contribuyente`: If the company is *Gran Contribuyente*, enable this option.
   - :guilabel:`Fiscal Regimen`: Select the Tribute Name for the company (:guilabel:`IVA`,
     :guilabel:`INC`, :guilabel:`IVA e INC`, or :guilabel:`No Aplica`)
   - :guilabel:`Commercial Name`: If the company uses a specific commercial name and it needs to be
     displayed in the invoice.

   .. note::
      The :guilabel:`Fiscal Information` fields should also be configured on :doc:`contacts form
      <../../essentials/contacts>`

   .. tip::
      The data configured in the :guilabel:`Fiscal Information` section is printed in the valid
      fiscal PDF reports.

Configure the following fields on the :doc:`contact form <../../essentials/contacts>`:

- :guilabel:`Identification Number` (VAT): Select the identification number type and enter the
  identification number. If the identification number type is :guilabel:`NIT`, the identification
  number must include the verification digit at the end, prefixed by a hyphen (`-`).

.. _localization/colombia/accounting:

Accounting
==========

.. _localization/colombia/electronic-invoices:

Electronic invoices
-------------------

The following is a breakdown of the main workflow for electronic invoices with the Colombian
localization:

#. The user creates an invoice.
#. Odoo generates the legal XML file.
#. Odoo generates the CUFE (Invoice Electronic Code) with the electronic signature.
#. Odoo sends a notification to DIAN.
#. |DIAN| validates the invoice.
#. |DIAN| accepts or rejects the invoice.
#. Odoo generates the PDF invoice with a QR code.
#. Odoo compresses the attached document (containing the sent XML file and the DIAN validation
   response) and the fiscal valid PDF into a :file:`.zip` file.
#. The user sends the invoice (:file:`.zip` file) via Odoo to the acquirer.

.. _localization/colombia/invoice-creation:

Invoice creation
~~~~~~~~~~~~~~~~

.. note::
   The functional workflow taking place before an invoice validation does **not** alter the main
   changes introduced with the electronic invoice.

Electronic invoices are generated and sent to both the |DIAN| and the customer. These documents can
be created from the sales order or manually generated. To create a new invoice, go to
:menuselection:`Accounting --> Customers --> Invoices`, and select :guilabel:`Create`. On the
invoice form, configure the following fields:

- :guilabel:`Customer`: customer's information.
- :guilabel:`Journal`: journal used for electronic invoices.
- :guilabel:`Electronic Invoice Type`: Select the type of document. By default, :guilabel:`Factura
  de Venta` is selected.
- :guilabel:`Invoice Lines`: Specify the products with the correct taxes.

.. important::
   When creating the first invoice related to an electronic invoicing journal, it is required to
   manually change the *sequence* of the invoice to the |DIAN| format: `Prefix + Sequence`.

   For example, format the sequence from `SETP/2024/00001` to `SETP1`.

When done, click :guilabel:`Confirm`.

.. _localization/colombia/send-electronic-invoice:

Electronic invoice sending
~~~~~~~~~~~~~~~~~~~~~~~~~~

After the :ref:`invoice confirmation <localization/colombia/invoice-creation>`, click
:guilabel:`Send`. In the wizard that appears, make sure to enable the :guilabel:`DIAN` and
:guilabel:`Email` checkboxes to send an XML to the |DIAN| web service and the validated invoice to
the client fiscal email and click :guilabel:`Send`. Then:

- The XML document is created.
- The CUFE is generated.
- The XML is processed synchronously by the |DIAN|.
- If accepted, the file is displayed in the chatter and the email to the client with the
  corresponding :file:`.zip` file.

.. image:: colombia/zip-xml-chatter-colombia.png
   :alt: EDI documents available in the chatter.

The :guilabel:`DIAN` tab then displays the following:

- :guilabel:`Signed Date`: timestamp recorded of the XML creation.
- :guilabel:`Status`: Status result obtained in the |DIAN| response. If the invoice was
  rejected, the error messages can be seen here.
- :guilabel:`Testing Environment`: To know if the document sent was delivered to the |DIAN| testing
  environment.
- :guilabel:`Certification Process`: To know if the document was sent as part of the certification
  process with the |DIAN|.
- :guilabel:`Download`: To download the sent XML file, even if the |DIAN| result was
  rejected.
- :guilabel:`Fetch Attached Document`: To download the generated attached document file included in
  the delivered :file:`.zip` file to the client.

.. image:: colombia/dian-tab-electronic-document.png
   :alt: EDI document record available in DIAN tab.

.. _localization/colombia/credit-notes:

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

.. _localization/colombia/debit-notes:

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

.. _localization/colombia/support-document:

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

.. _localization/colombia/common-errors:

Common errors
-------------

During the XML validation, the most common errors are related to missing master data, such as:

- :ref:`Chart of accounts <localization/colombia/chart-of-accounts>`
- :ref:`Taxes <localization/colombia/taxes>`
- :ref:`Products <localization/colombia/products>`
- :ref:`Sales journals <localization/colombia/sales-journals>`
- :ref:`Purchase journals <localization/colombia/purchase-journals>`
- :ref:`Contacts <localization/colombia/configuration/company-contacts>`

In such cases, a validation error message is displayed and sending is blocked.

If the invoice was sent and set as *Rejected* by the |DIAN|, the error messages are visible by
clicking the :icon:`fa-info-circle` :guilabel:`(info circle)` icon next to the :guilabel:`Status`
field in the :guilabel:`DIAN` tab. Using the reported error codes, it is possible to review
solutions to apply before re-sending.

.. image:: colombia/rejected-invoice-error-message.png
   :alt: Example of error messages on rejected invoices.

After the master data or other issues are corrected, it is possible to reprocess the XML again. Do
so by following the :ref:`electronic invoice sending
<localization/colombia/send-electronic-invoice>` flow.

.. _localization/colombia/pos:

Point of Sale
=============

.. _localization/colombia/pos-einvoicing:

Point of Sale electronic invoicing
----------------------------------

.. note::
   Make sure to :ref:`install <general/install>` the :guilabel:`Electronic Invoicing for POS in
   Colombia` (`l10n_co_edi_pos`) module.

The :guilabel:`Electronic Invoicing for POS in Colombia` module enables the following features and
configurations:

- Generate and send electronic invoicing documents from the *Point of Sale* app.
- Support the required fiscal fields for contacts created in the *Point of Sale* app.
- Set a :guilabel:`POS Serial Number` per point of sale.
- Follow the status of the document sent to the :abbr:`DIAN (Dirección de Impuestos y Aduanas
  Nacionales)` directly from the *Point of Sale* order.
- Print the required fiscal data and QR in ticket format.
- Generate the daily sales report with the fiscal required data mandated by DIAN.

For the module to function correctly, the master data configurations, such as :ref:`Chart of
accounts <localization/colombia/chart-of-accounts>`, :ref:`Taxes <localization/colombia/taxes>`,
:ref:`Products <localization/colombia/products>`, :ref:`Sales journals
<localization/colombia/sales-journals>`, :ref:`Purchase journals
<localization/colombia/purchase-journals>`, and :ref:`Contacts
<localization/colombia/configuration/company-contacts>`, should already be completed.

.. _localization/colombia/pos-einvoicing-config:

Configuration
~~~~~~~~~~~~~

To configure the *Point of Sale*, follow these steps:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. In the yellow banner at the top, click the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon
   and select the relevant :guilabel:`Point of Sale`.
#. In the :guilabel:`PoS serial number` field, enter the unique serial number assigned to this
   specific point of sale and its daily sales reports.
#. In the :guilabel:`Accounting` section, under :guilabel:`Default Journals`, select the default
   journals used for the *Point of Sale* orders and invoices:

   - :guilabel:`Orders`: Select the electronic invoicing sales journal used in the *Accounting* app
     to generate invoices from the POS to customers who provide their fiscal data.
   - :guilabel:`Credit Notes`: Select the journal used to generate credit notes during the refund
     process.
   - :guilabel:`Final Consumer Invoices`: Select the electronic invoicing sales journal used to
     generate invoices to the *Consumidor Final* contact (for customers who do not request an
     invoice).

.. _localization/colombia/pos-einvoicing-customer-journal:

Final Consumer journal
~~~~~~~~~~~~~~~~~~~~~~

Sales to *Consumidor Final* (customers who do not request an invoice) require a dedicated journal
with its own resolution.

Configure the journal using the specific :ref:`sales journal steps
<localization/colombia/sales-journals>`. In the :guilabel:`Advanced Settings` tab, under the
:guilabel:`Resolución DIAN` section, enable the :guilabel:`Journal for Final Consumer POS` checkbox.

This enables a new sequence for this journal, which will be used as the :guilabel:`DIAN number
sequence` for each POS order.

.. _localization/colombia/pos-einvoicing-payment-methods:

Payment methods
~~~~~~~~~~~~~~~

Each payment method used in the *Point of Sale* must be mapped to a payment method recognized by the
:abbr:`DIAN (Dirección de Impuestos y Aduanas Nacionales)`.

To do so, go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`, select a
payment method, and select the best :guilabel:`Payment Option` for reporting when this method is
used for an order.

.. important::
   Repeat this process for each payment method available in the *Point of Sale*.

.. _localization/colombia/pos-einvoicing-invoicing-flow:

Invoicing flow
~~~~~~~~~~~~~~

By default, the *Consumidor Final* contact is selected as the customer when initiating any POS
order. An existing client can also be selected, or a new one can be created.

Once the order is validated, the electronic document is automatically generated and sent to the
:abbr:`DIAN (Dirección de Impuestos y Aduanas Nacionales)`, using one of the following methods:

- The :guilabel:`Final Consumer Invoices journal`: When the assigned customer is the *Consumidor
  Final* contact.
- The :guilabel:`Orders journal`: When the assigned customer is a specific company or person.

When the sending process is complete, the printed ticket includes the fiscal data and a QR code
that serves as a physical representation of the accepted electronic invoice.

To track the status of the sent document, go to :menuselection:`Point of Sale --> Orders -->
Orders` and open the form view. The following fields will be available:

- The :guilabel:`DIAN Name` field shows the official sequence number of the electronic document.
- The DIAN tab is used for :ref:`electronic invoice sending features
  <localization/colombia/send-electronic-invoice>`.

.. note::
   If the POS order has a company or person contact assigned, an invoice is generated in the
   **Accounting** app for the order.
