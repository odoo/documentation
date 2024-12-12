=======
Ecuador
=======

With the Ecuadorian localization, it is possible to generate electronic documents using XML, fiscal
folio, electronic signature, and direct connection to tax authority SRI.

The supported documents are invoices, credit notes, debit notes, purchase liquidations, and
withholdings.

The localization also includes automation to easily predict the withholding tax to be applied to
each purchase invoice.

.. seealso::
   - `App Tour - Localización de Ecuador <https://www.youtube.com/watch?v=BQOXVSDeeK8>`_
   - `Smart Tutorial - Localización de Ecuador
     <https://www.odoo.com/slides/smart-tutorial-localizacion-de-ecuador-170>`_
   - :doc:`Documentation on e-invoicing's legality and compliance in Ecuador
     <../accounting/customer_invoices/electronic_invoicing/ecuador>`

.. _l10n_ec/glossary:

Glossary
========

Here are some terms that are essential to the Ecuadorian localization:

- **SRI**: Stands for *Servicio de Rentas Internas*, which is the government organization that
  enforces the payment of taxes in Ecuador.
- **SRI certificate**: Document or digital credential issued by the *SRI* that is crucial for
  compliance with Ecuadorian tax laws.
- **EDI**: Stands for *Electronic Data Interchange*, which refers to the electronic transmission of
  documents.
- **RIMPE**: Stands for *Regimen Simplificado para Emprendedores y Negocios*, which is the type of
  taxpayer qualified for SRI.

Configuration
=============

.. _l10n_ec/module-installation:

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Ecuadorian
localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Ecuadorian - Accounting`
     - `l10n_ec`
     - The default :doc:`fiscal localization package <../fiscal_localizations>`, adds accounting
       characteristics for the Ecuadorian localization, which represent the minimum configuration
       required for a company to operate in Ecuador according to the guidelines set by the
       :abbr:`SRI (servicio de rentas internas)`. The module's installation automatically loads:
       Chart of Accounts, taxes, documents types, tax support types. Additionally, the generation of
       forms 103 and 104 are automatic.
   * - :guilabel:`Ecuadorian Accounting EDI`
     - `l10n_ec_edi`
     - Includes all the technical and functional requirements to generate and validate
       :doc:`Electronics Documents <../accounting/customer_invoices/electronic_invoicing>`, based on
       the technical documentation published by the SRI. The authorized documents are: Invoices,
       Credit Notes, Debit Notes, Withholdings and Purchase liquidations.
   * - :guilabel:`Ecuadorian Accounting Reports`
     - `l10n_ec_reports`
     - Includes all the technical and functional requirements to generate forms 103 and 104.
   * - :guilabel:`Ecuador - ATS Report`
     - `l10n_ec_reports_ats`
     - Includes all the technical and functional requirements to generate the ATS report XML file
       ready to be uploaded to the *DIMM Formularios*.
   * - :guilabel:`Ecuadorian Website`
     - `l10n_ec_website_sale`
     - Includes all the technical and functional requirements to generate automatic electronic
       invoices from a Website sale.
   * - :guilabel:`Ecuadorian Point of Sale`
     - `l10n_ec_edi_pos`
     - Includes all the technical and functional requirements to generate automatic electronic
       invoices from a POS sale.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   those modules may not be installed automatically. Any missing modules can be manually installed.

.. _l10n_ec/configure-your-company:

Configure a company or individual contact
-----------------------------------------

.. seealso::
   :doc:`Configure a company or individual contact <../../essentials/contacts>`

The following fields should be completed for localization purposes on the contact form:

- :guilabel:`Name`: Enter the company or individual's name.
- :guilabel:`Address`: The :guilabel:`Street` sub-field is required to confirm electronic invoices.
- :guilabel:`Identification Number`: For a company, enter the :guilabel:`Ruc`. For individuals,
  enter the :guilabel:`Cedula` or :guilabel:`Passport` number.
- :guilabel:`SRI Taxpayer Type`: Select the contact's SRI taxpayer type.
- :guilabel:`Phone`: Enter the company or individual's phone number.
- :guilabel:`Email`: Enter the company or individual's email. This email is used to send electronic
  documents, such as invoices.

.. note::
   The :guilabel:`SRI Taxpayer Type` indicated on the contact form determines which :ref:`VAT and
   profit withholding <l10n_ec/VAT-withholding>` taxes apply when using this contact on a vendor
   bill.

Electronic documents
--------------------

To upload information for electronic documents, go to :menuselection:`Accounting --> Configuration
--> Settings`, and scroll to the :guilabel:`Ecuadorian Localization` section.

Configure the following information, starting with the :guilabel:`Electronic Invoicing` section:

- :guilabel:`Company legal name`
- :guilabel:`Regime`: Select whether the company is in the :guilabel:`Regular Regime (without
  additional messages in the RIDE)` or is qualified as in the :guilabel:`RIMPE Regime`.
- :guilabel:`Special Taxpayer Number`: If the company is qualified as a special taxpayer, complete
  this field with the company's corresponding tax contributor number.
- :guilabel:`Forced to Keep Accounting Books`: Enable this option if needed.

:guilabel:`Withholding` section:

- :guilabel:`Consumables`: Enter the code of the default withholding tax used when purchasing goods.
- :guilabel:`Services`: Enter the code of the default withholding tax used when purchasing services.
- :guilabel:`Credit Card`: Enter the code of the default withholding tax used when purchasing with
  credit cards.
- :guilabel:`Withhold Agent Number`: Enter the company's withholding agent resolution number, if
  applicable.

:guilabel:`SRI Connection` section:

- :guilabel:`Certificate file for SRI`: Select the company's :ref:`SRI certificate
  <l10n_ec/glossary>`. Click :icon:`oi-arrow-right` :guilabel:`SRI Certificates` to upload one, if
  necessary.
- :guilabel:`Use production servers`: Enable this option if electronic documents are used in the
  production environment; leave it disabled if the testing environment is used instead.

:guilabel:`Withholding accounts` section:

- :guilabel:`Sales Tax Base Account`: Enter the company's sales tax base account.
- :guilabel:`Purchase Tax Base Account`: Enter the company's sales tax purchase account.

.. important::
   When using the testing environment, EDI data is sent to test servers.

.. note::
   - The values entered in the :guilabel:`Consumables` and :guilabel:`Services` withholding fields
     are used as default values for domestic **only when** no withholdings are set up on the *SRI
     Taxpayer Type*.
   - The entered :guilabel:`Credit Card` withholding value is always applied when a credit or debit
     card SRI payment method is used.

.. _l10n_ec/VAT-withholding:

VAT withholding
---------------

.. note::
   This configuration applies only if the SRI recognizes the company as a withholding agent. If not,
   skip this step.

To configure a VAT withholding, go to :menuselection:`Accounting --> Configuration --> Taxpayer Type
SRI`.

Configure the :guilabel:`Name` of the taxpayer type, the :guilabel:`Goods VAT Withholding`, and the
:guilabel:`Services VAT Withholding`.

.. tip::
   If the :guilabel:`Taxpayer Type` is :guilabel:`Rimpe`, configure the :guilabel:`Profit Withhold`
   percentage.

Printer points
--------------

*Printer points* need to be configured for each type of electronic document used, such as customer
invoices, credit notes, and debit notes.

To configure printer points, navigate to :menuselection:`Accounting --> Configuration -->
Journals`.

For each electronic document, click :guilabel:`New`, and enter the following information on the
journal form:

- :guilabel:`Journal Name`: Enter in this format: `[Emission Entity]-[Emission Point] [Document
  Type]`, e.g., `001-001 Sales Documents`.
- :guilabel:`Type`: Refers to the journal type; select :guilabel:`Sales`.

Once the :guilabel:`Type` is selected, complete the following fields:

- :guilabel:`Use Documents?`: Enable this option if legal invoicing (invoices, debit/credit notes)
  is used, as this is the standard configuration. If not, select the option to record accounting
  entries unrelated to legal invoicing documents, such as receipts, tax payments, or journal
  entries.
- :guilabel:`Emission Entity`: Enter the facility number.
- :guilabel:`Emission Point`: Enter the printer point.
- :guilabel:`Emission address`: Enter the address of the facility.

In the :guilabel:`Journal Entries` tab, under the :guilabel:`Accounting information` section, fill
in the following fields:

- :guilabel:`Default Income Account`: Enter the default income account.
- :guilabel:`Dedicated Credit Note Sequence`: Enable this option if *credit notes* should be
  generated from this printer point (i.e., the journal).
- :guilabel:`Dedicated Debit Note Sequence`: Enable this option if *debit notes* should be
  generated from this printer point (i.e., the journal).
- :guilabel:`Short Code`: Enter a unique 5-digit code for the accounting entry sequence (e.g.,
  VT001).

Customer invoices, credit notes, and debit notes need to use the same journal as the
:guilabel:`Emission Point`, whereas the :guilabel:`Entity Point` should be unique per journal.

Finally, in the :guilabel:`Advanced Settings` tab, check the :guilabel:`Electronic invoicing`
checkbox to enable sending XML/EDI invoices.

.. seealso::
   :doc:`../accounting/customer_invoices/electronic_invoicing`

Withholding
-----------

To define a *withholding journal*, go to :menuselection:`Accounting --> Configuration --> Journals`.
For each withholding journal, click :guilabel:`New`, and enter the following information:

- :guilabel:`Journal Name`: Enter this format: `[Emission Entity]-[Emission Point] [Document Type]`,
  e.g.,`001-001 Withholding`.
- :guilabel:`Type`: Refers to the journal type. Select :guilabel:`Miscellaneous`.
- :guilabel:`Withhold Type`: Select :guilabel:`Purchase Withhold`.

Once the :guilabel:`Type` and :guilabel:`Withhold Type` are selected, complete the following fields:

- :guilabel:`Emission Entity`: Enter the facility number.
- :guilabel:`Emission Point`: Enter the printer point.
- :guilabel:`Emission address`: Enter the address of the facility.

In the :guilabel:`Journal Entries` tab, under the :guilabel:`Accounting information` section, fill
in the following fields:

- :guilabel:`Default Account`: Configure the default income account.
- :guilabel:`Short Code`: Enter a unique 5-digit code for the accounting entry sequence (e.g.,
  `WT001`).

Finally, in the :guilabel:`Advanced Settings` tab, check the :guilabel:`Electronic invoicing`
checkbox to enable sending XML/EDI invoices.

Purchase liquidations
---------------------

A specific journal must be created for *purchase liquidations*. Go to :menuselection:`Accounting -->
Configuration --> Journals`. Click :guilabel:`New`, and enter the following information:

- :guilabel:`Journal Name`: Enter this format: `[Emission Entity]-[Emission Point] [Document Type]`,
  e.g., `001-001 Purchase Liquidations`.
- :guilabel:`Type`: Refers to the journal type. Select :guilabel:`Purchase`.

Once the :guilabel:`Type` is selected, complete the following fields:

- :guilabel:`Purchase Liquidations`: Tick this checkbox to enable purchase liquidations.
- :guilabel:`Use Documents?`: Enable this option if legal invoicing (invoices, debit/credit notes)
  is used, as this is the standard configuration. If not, select the option to record accounting
  entries unrelated to legal invoicing documents, such as receipts, tax payments, or journal
  entries.
- :guilabel:`Emission Entity`: Enter the facility number.
- :guilabel:`Emission Point`: Enter the printer point.
- :guilabel:`Emission address`: Enter the address of the facility.
- :guilabel:`Short Code`: Enter a unique 5-digit code for the accounting entry sequence (e.g.,
  `PT001`).

Finally, in the :guilabel:`Advanced Settings` tab, check the :guilabel:`Electronic invoicing`
checkbox to enable sending XML/EDI invoices.

Configure master data
---------------------

Chart of accounts
~~~~~~~~~~~~~~~~~

The :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` is installed by default
as part of the set of data included in the localization module. The accounts are mapped
automatically in *Taxes*, *Default Account Payable*, *Default Account Receivable*.

Ecuador's chart of accounts is based on the most updated version of the *Superintendency of
Companies*, which is grouped into several categories and is compatible with NIIF accounting.

Accounts can be added or deleted according to the company's needs.

Products
~~~~~~~~

If products have any withholding taxes, they must be configured on the product form.

Go to :menuselection:`Accounting --> Vendors --> Products`. On the :guilabel:`General Information`
tab, specify both :guilabel:`Purchase Taxes` and :guilabel:`Profit Withhold`.

Taxes
~~~~~

The localization module automatically creates and configures taxes. If new taxes need to be created,
it is recommended to base them on the configuration of the existing ones.

To manage taxes, navigate to :menuselection:`Accounting --> Configuration --> Taxes`. Depending on
the tax type, the following options may be required for additional configuration:

- :guilabel:`Tax Name`: Follows a specific format depending on the tax type:

  - | **For IVA (Value-Added Tax)**:
    | `IVA [percent] (104, [form code] [tax support code] [tax support short name])`
    | Example: `IVA 12% (104, RUC [tax support code] IVA)`
  - | **For Income Tax Withholding codes**:
    | `Code ATS [percent of withhold] [withhold name]`
    | Example: `Code ATS 10% Retención a la Fuente`

- :guilabel:`Tax Support`: Configure only for the IVA tax. This option is used to register purchase
  withholdings.
- :guilabel:`Code ATS`: Configure only for income tax withholding codes, as it is necessary to
  register a withholding.

In the :guilabel:`Definition` tab:

- :guilabel:`Tax Grids`: Configure the code of a 104 form if it is an IVA tax, and the code of a
  103 form if it is an income tax withholding code.

.. seealso::
   :doc:`Configuring taxes <../accounting/taxes>`

Document types
~~~~~~~~~~~~~~

Some accounting transactions like *customer invoices* and *vendor bills* are classified by *document
types*. These are defined by the government fiscal authorities, which in this case is the SRI.

To access or configure document types, go to :menuselection:`Accounting --> Configuration -->
Document Types`.

Each document type can have a unique sequence per journal where it is assigned. As part of the
localization, the document type includes the country in which the document is applicable; also the
data is created automatically when the localization module is installed.

The information required for the document types is included by default and doesn't need to be
changed.

Workflows
=========

Once a company's database is configured, documents can be registered to enable workflows across
Odoo's applications, such as **Accounting**, **Inventory**, and **Sales**.

Sales documents
---------------

Customer invoices
~~~~~~~~~~~~~~~~~

:guilabel:`Customer invoices` are electronic documents that, when validated, are sent to SRI. These
documents can be :doc:`created from your sales order or manually
<../accounting/customer_invoices/overview>`.

They must contain the following data:

- :guilabel:`Journal`: Select the option matching the customer invoice's printer point.
- :guilabel:`Document Type`: Type the document type in this format: `(01) Invoice`.
- :guilabel:`Payment Method (SRI)`: Select how the invoice will be paid.

.. seealso::
   :doc:`Manage customer invoices <../accounting/customer_invoices/overview>`

Customer credit note
~~~~~~~~~~~~~~~~~~~~

The :doc:`customer credit note <../accounting/customer_invoices/credit_notes>` is an electronic
document that, when validated, is sent to SRI. A validated (posted) invoice is necessary to register
a credit note.

On the invoice, click :guilabel:`Credit note` and complete the following information in the
:guilabel:`Credit note` window:

- :guilabel:`Reason`: Type the reason for the credit note.
- :guilabel:`Journal`: Select the journal for the reversal.
- :guilabel:`Document Type`: By default, :guilabel:`(04) Credit Note` is selected.
- :guilabel:`Reversal date`: Set the date for the reversal.

Then, click :guilabel:`Reverse` to first review the invoice or click :guilabel:`Reverse and Create
Invoice`.

.. note::
   When creating the first credit note, select :guilabel:`Reverse` and assign the first credit note
   number or by default Odoo assigns `NotCr 001-001-000000001` as the first credit note number.

Once the credit note is created, modify :guilabel:`Product` and :guilabel:`Quantity` if needed. Make
sure the correct :guilabel:`Customer`, :guilabel:`Journal`, and :guilabel:`Document Type` are
specified, and the products listed on the :guilabel:`Invoice Lines` tab are configured with the
correct taxes.

To validate, click :guilabel:`Confirm`.

Customer debit note
~~~~~~~~~~~~~~~~~~~

The :ref:`customer debit note <accounting/credit_notes/issue-debit-note>` is an electronic document
that, when validated, is sent to SRI.

A validated (posted) invoice is necessary to register a debit note. Select the related invoice to
issue a debit note in the :guilabel:`Invoices` list view, click :icon:`fa-cog` :guilabel:`Actions`
and select :guilabel:`Create Debit Note`. Then, complete the following information in the
:guilabel:`Create Debit Note` window.

- :guilabel:`Reason`: Enter the reason for the debit note.
- :guilabel:`Debit note date`: Set the debit note date.
- :guilabel:`Copy lines`: Select this option to register a debit note with the same lines of
  invoice.
- :guilabel:`Use Specific Journal`: Select the printer point for your credit note, or leave it empty
  to use the same journal as the original invoice.

Then, click :guilabel:`Create Debit Note`.

The debit note amount can be changed, if desired.

Customer withholding
~~~~~~~~~~~~~~~~~~~~

The :guilabel:`Customer withholding` is a non-electronic document issued by the client in order to
apply a withholding to a sale.

A validated (posted) invoice is necessary to register a customer withholding. On the invoice, click
:guilabel:`Add Withhold` and complete the following information in the :guilabel:`Customer
withholding` window:

- :guilabel:`Document Number`: Enter the withholding number.
- :guilabel:`Withhold Lines`: Select the taxes that the customer is withholding.

Before validating the withholding, review that the amounts for each tax are the same as the original
document.

Purchase Documents
------------------

.. _l10n_ec/vendor-bills:

Vendor bill
~~~~~~~~~~~

:doc:`Vendor bills <../accounting/vendor_bills>` are non-electronic documents issued by vendors when
a company generates a purchase. Vendor bills can be created from purchase orders or manually.

.. important::
   A vendor bill journal must be created to create vendor bill documents.

Create a vendor bill journal
****************************

To create a new journal, go to :menuselection:`Accounting --> Configuration --> Journals`, and click
:guilabel:`New`.

Then, configure the following:

- Select :guilabel:`Purchase` as the :guilabel:`Type`.
- **Do not** tick the :guilabel:`Purchase Liquidations` checkbox.
- Add a :guilabel:`Default Expense Account`.

Configure a vendor bill
***********************

To configure a vendor bill, make sure also to complete the following Ecuador specific fields:

- :guilabel:`Document Type`: Enter this document type: `(01) Invoice`.
- :guilabel:`Document number`: Enter the document number.
- :guilabel:`Payment Method (SRI)`: Select how the vendor bill will be paid.

.. important::
   When creating the purchase withholding, verify that the bases (base amounts) are correct. If you
   need to edit the amount of the tax in the :guilabel:`Vendor bill`, click :guilabel:`Edit`. Or,
   from the :guilabel:`Journal Items` tab, click :guilabel:`Edit` and set the adjustment as desired.

.. _l10n_ec/purchase-liquidation:

Purchase liquidation
~~~~~~~~~~~~~~~~~~~~

The *purchase liquidation* is an electronic document that, when validated, is sent to SRI.

Companies issue them when they make a purchase but the vendor does not provide an invoice, due to
one or more of the following reasons:

- Non-residents of Ecuador provided services.
- Foreign companies provided services without residency or facility in Ecuador.
- Purchase of goods or services from natural persons not registered with a RUC, who cannot issue
  sales receipts or customer invoices.
- Reimbursement for purchasing goods or services must be given to employees in a dependency
  relationship (full-time employee).
- Members of collegiate bodies have provided services in the exercise of their function.

In these cases, a purchase liquidation journal must be created.

Create a purchase liquidation journal
*************************************

To create a new journal, go to :menuselection:`Accounting --> Configuration --> Journals`, and click
:guilabel:`New`.

Then, configure the following:

- Select :guilabel:`Purchase` as the :guilabel:`Type`.
- Tick the :guilabel:`Purchase Liquidations` checkbox.
- Add a :guilabel:`Default Expense Account`.

Create a purchase liquidation
*****************************

These types of electronic documents can be created from the *purchase order* or manually from the
*vendor bills* form. Purchase liquidations must contain the following data:

- :guilabel:`Vendor`: Enter the vendor's information.
- :guilabel:`Journal`: Select the :guilabel:`Purchase Liquidation` journal with the correct printer
  point.
- :guilabel:`Document Type`: Enter this document type: `(03) Purchase Liquidation`
- :guilabel:`Document number`: Enter the document number (sequence). This must only be entered once,
  and the sequence will automatically be assigned to the subsequent documents.
- :guilabel:`Payment Method (SRI)`: Select how the invoice is going to be paid.
- :guilabel:`Products`: Specify the product with the correct taxes.

Once the information has been reviewed, validate the :guilabel:`Purchase Liquidation`.

Purchase withholding
~~~~~~~~~~~~~~~~~~~~

The *Purchase withholding* is an electronic document that, when validated, is sent to SRI.

An invoice in a validated state is necessary before registering a :guilabel:`Purchase withholding`.
On the invoice, click :guilabel:`Add Withhold` and complete the following fields in the
:guilabel:`Withholding` window:

- :guilabel:`Document number`: Enter the document number (sequence). This must only be entered once,
  and the sequence will automatically be assigned for the next documents.
- :guilabel:`Withhold lines`: The taxes appear automatically according to the configuration of
  products and vendors. Review if the taxes and tax support are correct. If not, edit and select
  the correct taxes and tax support.

Then, validate the :guilabel:`Withholding`.

.. note::
   Tax support types must be configured on the :guilabel:`Vendor Bill`. To do so, go to the tax
   applied on the :guilabel:`Vendor Bill` and change the :guilabel:`Tax Support` there.

A withholding tax can be divided into two or more lines, depending on whether two or more
withholdings percentages apply.

.. example::
   The system suggests a VAT withholding of 30% with tax support 01. VAT withholding of 70% can be
   added in a new line with the same tax support. Odoo allows it if the base total matches the
   :guilabel:`Vendor Bill`'s total.

Expense reimbursement
---------------------

Expense reimbursements apply to the following cases:

- :guilabel:`Individual`: reimbursement to an employee for miscellaneous expenses (e.g. purchase
  liquidations)
- :guilabel:`Legal Entity`: reimbursement for incurred expenses, such as representation expenses
  (e.g. hiring a lawyer)

To enable an expense reimbursement, make sure a :ref:`purchase liquidation journal
<l10n_ec/purchase-liquidation>` has been created for an individual or a :ref:`vendor bills journal
<l10n_ec/vendor-bills>` for a legal entity.

.. note::
   In the vendor bills journal, be sure the following necessary configurations are set for a legal
   entity:

   - Select :guilabel:`Purchase` as the :guilabel:`Type`.
   - **Do not** tick the :guilabel:`Purchase Liquidations` checkbox.
   - Add a :guilabel:`Default Expense Account`.

Next, to create a reimbursement, :ref:`create a vendor bill <l10n_ec/vendor-bills>` using the
*purchase liquidation* or *vendor bills* journal. On the vendor bill, configure the following
fields:

- :guilabel:`Vendor`: This field should be an employee.
- :guilabel:`Document Type`: Verify that this field is accurately populated from the journal.
- :guilabel:`Payment Method (SRI)`: Select a payment method.
- :guilabel:`Reimbursement Lines` tab: Click :guilabel:`Auto Fill Invoice Lines` to automatically
  populate the invoice lines or add the expenses line by line, and provide the following details for
  each expense:

  - :guilabel:`Partner or authorization number`
  - :guilabel:`Date`
  - :guilabel:`Document Type`
  - :guilabel:`Document Number`
  - :guilabel:`Tax Base`
  - :guilabel:`Tax`

Then, click :guilabel:`Confirm Vendor Bill` and :guilabel:`Process Now`. The XML and authorization
number for the purchase liquidation are recorded, and the purchase withholding created from this
vendor bill includes the reimbursement information.

.. image:: ecuador/l10n-ec-individual-flow.png
   :alt: Expense Reimbursement.

eCommerce
---------

The :ref:`ATS Report module <l10n_ec/ats>` enables the following:

- Choose the *SRI Payment Method* for each payment method's configuration.
- Customers can manually input their identification type and number during eCommerce checkout.
- Automatically generate a valid electronic invoice for Ecuador at the end of the checkout process.

.. seealso::
   :doc:`eCommerce documentation <../../websites/ecommerce>`

Online payments
~~~~~~~~~~~~~~~

To enable online payments, add the relevant :doc:`payment provider(s) <../payment_providers>` and
configure the necessary :ref:`payment methods <payment_providers/payment_methods>`. It is mandatory
to set the :guilabel:`SRI Payment Method` for each method.

.. note::
   Adding the :guilabel:`SRI Payment Method` is necessary to correctly generate the electronic
   invoice from an eCommerce sale. Select a **payment method** to access its configuration menu and
   field.

Automatic invoice
~~~~~~~~~~~~~~~~~

To generate an invoice after the checkout process, navigate to :menuselection:`Website -->
Configuration --> Settings` and activate the :guilabel:`Automatic Invoice` option found under the
:guilabel:`Invoicing` section.

.. tip::
   The invoice's email template can be modified from the :guilabel:`Invoice Email Template` field
   under the :guilabel:`Automatic Invoice` option.

.. important::
   The sales journal used for invoicing is the first in the sequence of priority in the
   :guilabel:`Journal` menu.

eCommerce workflow
~~~~~~~~~~~~~~~~~~

Identification type and number
******************************

The client who is making a purchase will have the option to indicate their identification type and
number during the checkout process. This information is required to correctly generate the
electronic invoice after the checkout is completed.

.. note::
   Verification is done to ensure the :guilabel:`Identification Number` field is completed and has
   the correct number of digits. For RUC identification, 13 digits are required. For Cédula, 9
   digits are required.

After finishing the checkout process, a confirmed invoice is generated, ready to be sent manually or
asynchronously to the SRI.

Point of sale electronic invoicing
----------------------------------

Make sure the *Ecuadorian module for Point of Sale* (`l10n_ec_edi_pos`) is :ref:`installed
<l10n_ec/module-installation>` to enable the following features and configurations:

- Choose the SRI payment method in each payment method configuration.
- Manually input the customer's identification type and identification number when creating a new
  contact on *POS*.
- Automatically generate a valid electronic invoice for Ecuador at the end of the checkout process.

Payment method configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To :doc:`create a payment method for a point of sale <../../sales/point_of_sale/payment_methods>`,
go to :menuselection:`Point of Sale --> Configuration --> Payment Methods`. Then, set the
:guilabel:`SRI Payment Method` in the payment method form.

Invoicing flows
~~~~~~~~~~~~~~~

Identification type and number
******************************

The P0S cashier can :ref:`create a new contact for a customer <pos/customers>` who requests an
invoice from an open POS session.

The *Ecuadorian Module for Point of Sale* adds two new fields to the contact creation form:
:guilabel:`Identification Type` and :guilabel:`Tax ID`.

.. note::
   As the identification number length differs depending on the identification type, Odoo
   automatically checks the :guilabel:`Tax ID` field upon saving the contact form. To manually
   ensure the length is correct, know that the :guilabel:`RUC` and :guilabel:`Citizenship` types
   require 13 and 10 digits, respectively.

Electronic invoice: anonymous end consumer
******************************************

When clients do not request an electronic invoice for their purchase, Odoo automatically sets the
customer as :guilabel:`Consumidor Final` and generates an electronic invoice anyway.

.. note::
   If the client requests a credit note due to a return of this type of purchase, the credit note
   should be made using the client's real contact information. Credit notes cannot be created to
   *Consumidor Final* and can be managed :ref:`directly from the POS session <pos/refund>`.

Electronic invoice: specific customer
*************************************

If a customer requests an invoice for their purchase, it is possible to select or create a contact
with their fiscal information. This ensures the invoice is generated with accurate customer details.

.. note::
   If the client requests a credit note due to a return of this type of purchase, the credit note
   and return process can be managed :ref:`directly from the POS session <pos/refund>`.

Financial reports
=================

In Ecuador, there are fiscal reports that the company presents to SRI. Odoo supports two of the main
financial reports used by companies: **reports 103** and **104**.

To get these reports, go to :menuselection:`Accounting --> Reporting --> Tax Return`.  Click the
:icon:`fa-book` :guilabel:`Report:` icon and select `103 (EC)` or `104 (EC)`.

Report 103
----------

This report provides details on income tax withholdings in a given period and can be reported
monthly or semi-annually. It includes information about base, tax amounts, and tax codes, and can be
used for SRI reporting.

Report 104
----------

This report provides details on VAT tax and VAT withholding for a given period and can be generated
monthly or semi-annually. It includes information about base, tax amounts, and tax codes, and can be
used for SRI reporting.

.. _l10n_ec/ats:

ATS report
----------

:ref:`Install <general/install>` the *ATS Report* (`l10n_ec_reports_ats`) module to enable
downloading the ATS report in XML format.

.. note::
   The Ecuadorian *ATS Report* module depends on the previous installation of the *Accounting* app
   and the *Ecuadorian EDI module*.

Configuration
~~~~~~~~~~~~~

To issue electronic documents, ensure the company is configured as explained in the
:ref:`electronic invoice <l10n_ec/configure-your-company>` section.

In the :abbr:`ATS (Anexo Transaccional Simplificado)`, every document generated in Odoo (invoices,
vendor bills, sales and purchases withholdings, credit notes, and debit notes) will be included.

Vendor bills
************

When generating a vendor bill, it is necessary to register the authorization number from the
vendor's invoice. To do so, go to :menuselection:`Accounting --> Vendors --> Bills` and select the
bill. Then, enter the number from the vendor's invoice in the :guilabel:`Authorization Number`
field.

Credit and debit notes
**********************

When generating a credit note or debit note manually or through an import, it is necessary to link
this note to the sales invoice that is being modified by it.

.. note::
   Remember to add all required information to the documents before downloading the :abbr:`ATS
   (Anexo Transaccional Simplificado)` file. For example, add the *Authorization Number* and the
   *SRI Payment Method* on documents, when needed.

XML generation
~~~~~~~~~~~~~~

To generate the :abbr:`ATS (Anexo Transaccional Simplificado)` report, go to
:menuselection:`Accounting --> Reporting --> Tax Return`. Choose a time period for the desired
:abbr:`ATS (Anexo Transaccional Simplificado)` report, then click :guilabel:`ATS`.

The downloaded XML file is ready to be uploaded to *DIMM Formularios*.

.. note::
   When downloading the :abbr:`ATS (Anexo Transaccional Simplificado)` report, Odoo generates a
   warning pop-up alerting the user if a document(s) has missing or incorrect data. Nevertheless,
   the XML file can still be downloaded.
