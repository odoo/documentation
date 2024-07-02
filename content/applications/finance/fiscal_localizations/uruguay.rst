=======
Uruguay
=======

.. |DGI| replace:: :abbr:`DGI (Dirección General Impositiva)`
.. |EDI| replace:: :abbr:`EDI (Electronic Data Interchange)`

.. _uruguay/intro:

Introduction
============

With the Uruguayan localization, you can generate electronic documents with its XML, fiscal folio,
electronic signature and connection to tax authority Dirección General Impositiva (DGI) through
Uruware.

The supported documents are:

- e-Invoice, e-Invoice Credit Note, e-Invoice Debit Note;
- e-Ticket, e-Ticket Credit Note, e-Ticket Debit Note;
- Export e-Invoice, Export e-Invoice Credit Note, Export e-Invoice Debit Note.

The localization requires an Uruware account, which enables users to generate electronic documents
within Odoo.

Glossary
--------

The following terms are used throughout the Uruguayan localization:

- **DGI**: *Dirección General Impositiva* is the government entity responsible for enforcing tax
  payments in Uruguay.
- **EDI**: *Electronic Data Interchange* refers to the sending of electronic documents.
- **Uruware**: is the third-party organization that facilitates the interchange of electronic
  documents between companies and the Uruguayan government.

Configuration
=============

Modules installation
--------------------

:ref:`Install <general/install>` the following modules to get all the features of the Uruguayan
localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Uruguay - Accounting`
     - `l10n_uy`
     - The default :doc:`fiscal localization package <../fiscal_localizations>`, adds accounting
       characteristics for the Uruguayan localization, which represent the minimum configuration
       required for a company to operate in Uruguay according to the guidelines set by the |DGI|.
       The module's installation automatically loads: chart of accounts, taxes, documents types, and
       tax supported types.
   * - :guilabel:`Uruguay Accounting EDI`
     - `l10n_uy_edi`
     - Includes all the technical and functional requirements to generate and validate
       :doc:`Electronics Documents <../accounting/customer_invoices/electronic_invoicing>`, based on
       the technical documentation published by the |DGI|. The authorized documents are :ref:`listed
       above <uruguay/intro>`.

.. note::
   Odoo automatically installs the base module *Uruguay - Accounting* when a database is installed
   with `Uruguay` selected as the country. However, to enable electronic invoicing, the *Uruguay
   Accounting EDI* (`l10n_uy_edi`) module needs to be manually :ref:`installed <general/install>`.

Configure your company
----------------------

To configure your company information, go to the :menuselection:`Settings --> Companies: Update
Info` and configure the following:

- :guilabel:`Company Name`
- :guilabel:`Address`:

  - :guilabel:`Street`
  - :guilabel:`City`
  - :guilabel:`State`
  - :guilabel:`ZIP`
  - :guilabel:`Country`

- :guilabel:`Tax ID`: enter the identification number for the selected taxpayer type.
- :guilabel:`DGI Main Branch Code`:

After configuring the company in the database settings, navigating to :menuselection:`Contacts` and
search for your company to verify the following:

- Company type is set to :guilabel:`Company`.
- Verify the :guilabel:`Identification Number` :guilabel:`Type` is :guilabel:`RUT / RUC`.

.. _l10n_uy/uruware-account:

Set up Uruware account
----------------------

To generate electronic documents in Odoo, a Uruware account is necessary.

To set up a Uruware account, first be sure to have a valid Odoo subscription. Then follow the steps
proceeding steps:

Locate the Uruware credentials settings by navigating to the :menuselection:`Accounting -->
Configuration --> Settings: Uruguay Localization section`. Take a note of the admin email address
that is set, this will be the same email used in Uruware. Click on :guilabel:`Create Uruware
Account`.

.. note::
   This action will create an account with Uruware with the following information:

   - Legal name (razón social)
   - RUT from the company
   - Administrator email
   - User name and last name
   - Odoo database link

   Add in any of the information that is missing to create your account.

Once the account is created, a confirmation email is sent to the email used to create the account,
containing the account credentials to configure the account directly in the Uruware portal:

- Testing portal: https://odootest.ucfe.com.uy/Gestion/
- Production portal: https://prod6109.ucfe.com.uy/Gestion/

Use the account credentials in the email to log in to the portal.

.. important::
   Be sure to configure a testing account and a production account in the Uruware portal. The same
   Uruware account can be used for both environments.

Electronic invoice data
-----------------------

To configure the electronic invoice data, an environment and credentials need to be configured. To
do so, navigate to :menuselection:`... --> ...`.

First, select the :guilabel:`UCFE Web Services` environment:

- :guilabel:`Production`: for production databases. In this mode, electronic documents are sent to
  |DGI| through Uruware for their validation.
- :guilabel:`Testing`: for test databases. In this mode, the direct connection flows can be tested,
  with the files sent to the |DGI| testing environment through Uruware.
- :guilabel:`Demo`: files are created and accepted automatically in demo mode but are **not** sent
  to the |DGI|. For this reason, rejection errors will not appear in this mode. Every internal
  validation can be tested in demo mode. Avoid selecting this option in a production database.

Then, enter the :guilabel:`Uruware Credentials`:

- :guilabel:`Uruware WS Password`
- :guilabel:`Commerce Code`
- :guilabel:`Terminal Code`

.. image:: uruguay/electronic-invoice-data.png
   :alt: Required information for electronic invoice.
   :align: center

.. note::
   These credentials can be obtained from the Uruware portal, after configuring the :ref:`Uruware
   account <l10n_uy/uruware-account>`.

Configure master data
---------------------

Chart of accounts
~~~~~~~~~~~~~~~~~

The :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` is installed by default
as part of the set of data included in the localization module, the accounts are mapped
automatically in taxes, default accounts payable, and default accounts receivable.

Accounts can by added or deleted according to the company's needs.

.. seealso::
   :doc:`../accounting/get_started/chart_of_accounts`

Contacts
~~~~~~~~

To create a contact, navigate to :menuselection:`Contacts app` and select :guilabel:`New`. Then
enter the following information:

- :guilabel:`Company Name`
- :guilabel:`Address`:

  - :guilabel:`Street`: required to confirm an electronic invoice.
  - :guilabel:`City`
  - :guilabel:`State`
  - :guilabel:`ZIP`
  - :guilabel:`Country`: required to confirm an electronic invoice.

- :guilabel:`Identification Number`:

  - :guilabel:`Type`: select a identification number type.
  - :guilabel:`Number`: required to confirm an electronic invoice.

Review taxes
~~~~~~~~~~~~

As part of the Uruguay localization module, taxes are automatically created with its configuration
and related financial accounts.

.. image:: uruguay/taxes.png
   :align: center
   :alt: Taxes for Uruguay.

Review document types
~~~~~~~~~~~~~~~~~~~~~

Some accounting transactions like *Customer Invoices* and *Vendor Bills* are classified by document
types. These are defined by the government fiscal authorities, in this case by the |DGI|.

Each document type can have a unique sequence per journal where it is assigned. The data is created
automatically when the localization module is installed, and the information required for the
document types is included by default.

.. note::
   In Uruguay, CAEs **must** be uploaded in Uruware. Sequences (and PDFs) are received in Odoo from
   Uruware, based on their CAEs. CAEs are **only** used in production. When testing, only a range of
   sequences used in Uruware need to be set.

.. image:: uruguay/document-types.png
   :align: center
   :alt: Document types for Uruguay.

Sales journals
~~~~~~~~~~~~~~

To generate and confirm an electronic document that will be validated by |DGI|, the sales journal
needs to be configured with the following:

- :guilabel:`Invoicing Type`: manual invoices are for open invoices previously stamped in another
  system, for example directly in the |DGI|. Electronic invoices will not be sent to Uruware.
- :guilabel:`Use Documents?`: Activate this option if this journal will use documents from the list
  of document types in Odoo.

Workflows
=========

Once you have configured your database, you can create your documents.

Sales documents
---------------

Customer invoices
~~~~~~~~~~~~~~~~~

:guilabel:`Customer invoices` are electronic documents that, when validated, are sent to |DGI| via
Uruware. These documents can be created from your sales order or manually. They must contain the
following data:

- :guilabel:`Customer`: type the customer's information.
- :guilabel:`Due date`: to compute if the invoice is due now or later (contado or crédito
  respectively).
- :guilabel:`Journal`: select the electronic sales journal.
- :guilabel:`Document Type`: document type in this format, for example, `(111) e-Invoice`.
- :guilabel:`Products`: specify the product with the correct taxes.

.. note::
   Every document type has a specific credit note and debit note (e.g., the document type *(111)
   e-Invoice* has an *e-Invoice* credit note).

Customer credit note
~~~~~~~~~~~~~~~~~~~~

The :doc:`Customer credit note <../accounting/customer_invoices/credit_notes>` is an electronic
document that, when validated, is sent to |DGI| via Uruware. It is necessary to have a validated
(posted) invoice to register a credit note. On the invoice there is a button named :guilabel:`Credit
note`, click this button to be directed to the :guilabel:`Create credit note` form, then complete
the following information:

- :guilabel:`Reason`: type the reason for the credit note.
- :guilabel:`Journal`: select the journal that has to be electronic and has the :guilabel:`Use
  Documents?` option active.
- :guilabel:`Document Type`: select the credit note document type.
- :guilabel:`Reversal Date`: type the date.

Customer debit note
~~~~~~~~~~~~~~~~~~~

The :doc:`Customer debit note <../accounting/customer_invoices/credit_notes>` is an electronic
document that, when validated, is sent to |DGI| via Uruware. It is necessary to have a validated
(posted) invoice to register a debit note. On the action within an invoice there is a option named
:guilabel:`Debit note`, click on this action to be directed to the :guilabel:`Create credit note`
form, then complete the following information:

- :guilabel:`Reason`: type the reason for the debit note.
- :guilabel:`Journal`: select the journal that has to be electronic and has the :guilabel:`Use
  Documents?` option active.
- :guilabel:`Copy lines`: mark checkbox to copy the invoice lines to the debit note.
- :guilabel:`Debit note date`: type the date.

.. note::
   The document sequence (number) is brought from Uruware once the document has been processed.

.. note::
   The PDF of the validated document is pulled from Uruware following the specification by the
   Uruguayan government (DGI).

Addendas and disclosures
========================

*Addendas* and *disclosures* are additional notes and comments added to an electronic document that
can be mandatory or optional. To create a new addenda, go to :menuselection:`Accounting --> Settings
--> DGI --> Addendas and disclosures`.

To create an addenda, the following information is required:

- :guilabel:`Name`: Name of the Addenda or Mandatory Disclosure.
- :guilabel:`Type`: Select the type of remark, this will add it to the specific section in the XML.
- :guilabel:`Is legend`: Select this box if the text is a mandatory disclosure, leave it blank if it
  is additional information.
- :guilabel:`Content`: Add the complete text of the addenda or disclosure.

Leyenda and additional information in product
---------------------------------------------

To add a leyenda or additional information to the product and XML, it is necessary to add the
preconfigured addenda and disclosure to the product in the invoice line. The field called
:guilabel:`Disclosure` will be used to add the leyenda to the product specified in the line.

Leyenda and additional information in document
----------------------------------------------

To add a leyenda or additional information to the electronic document and XML, it is necessary to
add the preconfigured addenda and disclosure to the document using the field :guilabel:`Addenda and
Disclosures` that can be found in the *Other Info* tab in the document form view. The addenda and
disclosures added here will appear in the XML and visibly in the PDF document.
