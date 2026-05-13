======
France
======

.. |DGFiP| replace:: :abbr:`DGFiP (Direction Générale des Finances Publiques)`

.. _localizations/france/configuration/modules:

Modules
=======

The following modules are installed automatically with the French localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`France - Accounting`
     - `l10n_fr_account`
     - French :ref:`fiscal localization package <fiscal_localizations/packages>` that applies only
       to companies based in mainland France and does not include DOM-TOMs (*Départements
       d’Outre-Mer et Territoires d’Outre-Mer*, i.e., France's overseas departments and
       territories).
   * - :guilabel:`France - Accounting Reports`
     - `l10n_fr_reports`
     - Export of the French VAT report, which can be sent to DGFiP, an OGA, or a professional
       accountant.
   * - :guilabel:`France - VAT Anti-Fraud Certification for Point of Sale (CGI 286 I-3 bis)`
     - `l10n_fr_pos_cert`
     - :ref:`VAT anti-fraud certification <localizations/france/vat-anti-fraud-certification>` for
       points of sale.
   * - :guilabel:`France - E-Invoicing (Approved Platform)`
     - `l10n_fr_pdp`
     - Support for mandatory electronic invoicing in France to send and receive documents via
       the Odoo-approved platform.
   * - :guilabel:`France - E-reporting for POS`
     - `l10n_fr_pdp_pos`
     - PDP Flux 10 e-reporting for POS.

Additionally, the following modules must be manually :ref:`installed <general/install>`:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`France - FEC Import`
     - `l10n_fr_fec_import`
     - Import of standard FEC files, useful for importing accounting history.
   * - :guilabel:`France - Payroll with Accounting`
     - `l10n_fr_hr_payroll_account`
     - Includes the necessary accounting data for the French payroll rules.
   * - :guilabel:`France - Peppol integration with Chorus Pro`
     - `l10n_fr_facturx_chorus_pro`
     - Adds fields needed for :ref:`submitting invoices to Chorus Pro
       <localizations/france/e-invoicing>`.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :doc:`installed
   <../../general/apps_modules>`.

.. _localizations/france/loc-overview:

Localization overview
=====================

The French localization package ensures compliance with French fiscal and accounting regulations. It
includes tools for managing taxes, fiscal positions, reporting, and a predefined chart of accounts
tailored to France’s standards.

The French localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to French
  accounting standards
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :doc:`Taxes <../accounting/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options
- :doc:`Payroll </applications/hr/payroll>`
- :ref:`Reporting <localizations/france/reporting>`

.. _localizations/france/reporting:

Reporting
---------

To have access to these accounting reports specific to France, :doc:`Install
</applications/general/apps_modules>` the :guilabel:`France - Accounting` (`l10n_fr_account`):

- :guilabel:`Bilan comptable (FR)` (:guilabel:`Balance Sheet`)
- :guilabel:`Compte de résultats (FR)` (:guilabel:`Profit and Loss`)
- :guilabel:`Rapport de taxes (FR)` (:guilabel:`Tax Report`)
- :ref:`DAS2 report <localizations/france/reporting-das2>`
- :ref:`Simplified Fiscal Declaration <localizations/france/reporting-fiscal-declaration>`

.. _localizations/france/reporting-das2:

DAS2 report
~~~~~~~~~~~

Any individual or legal entity that pays commissions, brokerage fees, rebates, gratuities, or other
similar compensation to third parties during their professional activities must file a fee
declaration (DAS2 report).

To access the DAS2 report, go to :menuselection:`Accounting --> Reporting --> DAS2 Report`.

.. tip::
   Specific tags, related to the DAS2 report, indicate the nature of payments, including
   :guilabel:`Fees (H)`, :guilabel:`Commissions (C)`, :guilabel:`Brokerage (CO)`, :guilabel:`Rebates
   (R)`, :guilabel:`Attendance fees (JP)`, :guilabel:`Copyright (DA)`, :guilabel:`Inventor's rights
   (DI)`, and :guilabel:`Other remuneration (AR)`.

.. seealso::
   - `Guide utilisateur français pour la transmission des informations relatives à la DAS2
     Honoraires <https://edificas.org/download/document/ab4310d4-3bba-400e-87fe-a6e75f96e674/zip>`_
   - `Formulaire n°DAS2 - Etat des honoraires, vacations, commissions, courtages, ristournes et
     jetons <https://www.impots.gouv.fr/formulaire/das2/etat-des-honoraires-vacations-commissions-courtages-ristournes-et-jetons>`_

.. _localizations/france/das2-contact:

Contact
*******

To provide the necessary contact information, include the following details:

- :guilabel:`Name`: Provide the full name for individuals or the business name.
- :guilabel:`Address`: Include the :guilabel:`Street`, :guilabel:`ZIP` code, :guilabel:`City`, and
  :guilabel:`Country`.
- :guilabel:`SIRET` number: In the :guilabel:`VAT` field, click the :icon:`fa-plus`
  :guilabel:`(plus)` icon and select :guilabel:`SIRET` to enter the :guilabel:`SIRET` number.
- :guilabel:`DAS2 - Profession`: In the :guilabel:`Accounting tab`, fill in the :guilabel:`DAS2 -
  Profession` field located in the :guilabel:`General` section.

.. note::
   The partner's birth date is required for DAS2 beneficiaries who are EU residents (excluding
   France) and received copyright royalties (DA) or inventor's fees (DI).

.. _localizations/france/das2-submit:

Submit
******

.. note::
   - A minimum total payment of €2,400 is required for the corresponding line to be included in the
     DAS2 report.
   - To successfully send the EDI DAS2 report, the :guilabel:`APE` and the company's main
     :guilabel:`Activity` fields must be completed on the :doc:`company record
     </applications/general/companies>`.

The DAS2 report includes the total amount of the sums paid, including VAT if beneficiaries are
subject to VAT. To submit the EDI DAS2 report, follow these steps:

#. In the :guilabel:`DAS2 Report` view, click the :icon:`fa-cog` (:guilabel:`gear`) icon, and select
   :guilabel:`EDI DAS2`.
#. In the :guilabel:`DAS2 Report Generation` window, update the :guilabel:`Point of Contact` field
   if necessary by selecting the contact responsible for directly sending the report to |DGFiP|.
#. Click :guilabel:`Send DAS2 Report`.

.. tip::
   Alternatively, follow these steps for a step-by-step submission process:

   #. Go to :menuselection:`Accounting --> Reporting --> DAS2 Report`. In the :guilabel:`DAS2
      Report` view, click :guilabel:`Returns`.
   #. Remove the :guilabel:`To do` filter in the Tax Return list view to display the :guilabel:`DAS2
      Report` line.
   #. The :guilabel:`DAS2 Report` line includes:

      - A period (year).
      - A deadline date.
      - The related company and :ref:`branch(es) <general/branches>`, if applicable.
      - Action steps, such as :guilabel:`Review` and :guilabel:`Submit`, which turn green when
        completed.
      - A :guilabel:`DAS2 Report (FR)` button to open the report.
      - A :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` menu for additional options.

   #. Click the :guilabel:`DAS2 Report` line, then click the :guilabel:`DAS2 Report (FR)` button to
      access and review it.
   #. After reviewing, click :guilabel:`Tax Return` in the breadcrumbs to return to the
      :guilabel:`DAS2 Report` item.
   #. Click :guilabel:`Validate` to complete the :guilabel:`Review` step; the DAS2 report PDF is
      then available in the chatter.
   #. Click :guilabel:`Submit` to submit the DAS2 Report to |DGFiP|.
   #. In the :guilabel:`DAS2 Report` window, update the :guilabel:`Point of Contact` field if
      necessary, select the contact responsible for directly sending the report to |DGFiP|, and
      click :guilabel:`Send DAS2 Report`.

.. _localizations/france/reporting-fiscal-declaration:

Simplified fiscal declaration
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Most taxpayers are required to file a simplified fiscal declaration as part of the standard
procedure.

To access the declaration, go to :menuselection:`Accounting --> Reporting --> Fiscal Declaration`.
The fiscal declaration includes various sections, such as :guilabel:`2033 - A` and :guilabel:`2031
- Annexes`. Use the section buttons to navigate through the report.

.. tip::
   - To update values, click the :icon:`fa-pencil` :guilabel:`(pencil)` icons; changes are saved
     automatically.
   - For lines requiring information, such as an accountant's name or an address, click the
     :icon:`fa-caret-down` :guilabel:`(down arrow)` icon to select the relevant
     :doc:`contact <../../essentials/contacts>`.
   - Where available, click :guilabel:`Add` or :guilabel:`Add new section` lines to insert lines or
     sub-sections within the report.
   - To generate an XML file, click the :icon:`fa-cog` :guilabel:`(gear)` icon and select
     :guilabel:`Download XML`.

.. _localizations/france/fiscal-declaration-submit:

Submit
******

To submit the fiscal declaration directly to |DGFiP| through Odoo, follow these steps:

#. Go to :menuselection:`Accounting --> Reporting --> Fiscal Declaration` and click
   :guilabel:`Returns`.
#. Remove the :guilabel:`To Do` filter to display the :guilabel:`Fiscal Declaration` line.
#. The :guilabel:`Fiscal Declaration` line includes:

   - A period (year).
   - A deadline date.
   - The related company and :ref:`branch(es) <general/branches>`, if applicable.
   - Action steps, such as :guilabel:`Review` and :guilabel:`Submit`, which turn green when
     completed.
   - A :guilabel:`Fiscal Declaration` button to open the fiscal declaration.
   - A :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` menu for additional options.

#. Click the :guilabel:`Fiscal Declaration` line, then click the :guilabel:`Fiscal Declaration`
   button to access and review it.
#. After reviewing, click :guilabel:`Tax Return` in the breadcrumbs to return to the
   :guilabel:`Fiscal Declaration` item.
#. Click :guilabel:`Validate` to complete the :guilabel:`Review` step; the fiscal declaration PDF is
   then available in the chatter.
#. Click :guilabel:`Submit` to submit the fiscal declaration to |DGFiP|.
#. In the :guilabel:`Fiscal Declaration` window, select the :guilabel:`Type of tax`, indicate
   whether it's a :guilabel:`Transfer/cessation of business or special circumstances`, choose the
   reports that must be sent, and click :guilabel:`Send Fiscal Declaration`.

The fiscal declaration is then submitted to |DGFiP| through ASPOne.

.. _localizations/france/accounting:

Accounting
==========

.. _localizations/france/e-invoicing:

E-invoicing
-----------

.. _localizations/france/b2b-b2c:

B2B and B2C invoicing
~~~~~~~~~~~~~~~~~~~~~

France's `electronic invoicing reform
<https://www.impots.gouv.fr/professionnel/je-passe-la-facturation-electronique>`_
*(reforme de la facturation électronique)* impacts all VAT-registered French companies, and is being
rolled out in two phases:

- From **September 1, 2026**:

  - every company must be able to receive domestic B2B e-invoices via *plateformes agréées*
    (approved platforms) :ref:`(e-invoicing) <localizations/france/e-invoicing-fac-elec-einvoicing>`
  - large enterprises (GE) and mid-sized enterprises (ETI) must send domestic B2B e-invoices
    :ref:`(e-invoicing) <localizations/france/e-invoicing-fac-elec-einvoicing>` and must submit data
    to the tax authorities about certain operations, such as B2C and cross-border B2B operations
    :ref:`(e-reporting) <localizations/france/e-invoicing-fac-elec-reporting>`

- From **September 1, 2027**, every company, including small and medium-sized enterprises (PME) and
  micro-enterprises are subject to the same :ref:`e-invoicing
  <localizations/france/e-invoicing-fac-elec-einvoicing>` and :ref:`e-reporting
  <localizations/france/e-invoicing-fac-elec-reporting>` requirements.

Odoo is officially certified as a *plateforme agréée* (approved platform) on the e-invoicing
network. It supports the receipt of documents in various formats (Facture-X, UBL, and CII) and the
sending of documents exclusively in UBL format.

.. note::
   VAT-exempt transactions under Articles 261-261E are excluded.

.. _localizations/france/e-invoicing-fac-elec-config:

Configuration
*************

To activate the e-invoicing and e-reporting features, follow these configuration steps:

#. Make sure the :guilabel:`France - E-Invoicing (Approved Platform)` (`l10n_fr_pdp`) module is
   :doc:`installed </applications/general/apps_modules>`.
#. In the **Accounting** or **Invoicing** app, go to :menuselection:`Configuration --> Settings`,
   scroll down to the :guilabel:`French Electronic Invoicing` section, and click :guilabel:`Activate
   Electronic Invoicing`.
#. In the :guilabel:`Send via French electronic invoicing` window, fill in the :guilabel:`Email`
   field with the email address of a legal representative and click :guilabel:`Authenticate`:

   - In the pop-up window, click :guilabel:`Begin authentication`.
   - In the :guilabel:`Accessing the legal representatives of your company` window, click
     :guilabel:`Check status`, then select your name in the :guilabel:`Please select who you are`
     list, and :guilabel:`Confirm`.
   - To verify your identity, click :icon:`oi-launch` :guilabel:`Open authentication page`.
   - In the :guilabel:`Authentication` window, click :guilabel:`Receive a code`, then enter the
     5-digit code received by email and :guilabel:`Confirm`.
   - In the :guilabel:`Identity verification` window, click :guilabel:`Next`.
   - To complete verification, click the :icon:`fa-plus` :guilabel:`(plus)` icon under
     :guilabel:`Add your document here` to upload a copy of your ID card, passport, or residence
     permit, then click :guilabel:`Next`.
   - To electronically sign the :guilabel:`Attestation de désignation de plateforme agréée`
     (certificate of designation of an approved platform), click :guilabel:`Next` to review it, then
     click :guilabel:`Next` again and enable both options:

     - :guilabel:`I acknowledge having read all the documents`.
     - :guilabel:`I accept the general conditions of use of VIALNIK 360 and the signature
       certificate`.

   - Click :guilabel:`Sign`.
   - Once the signature is confirmed, the signed attestation and terms and conditions can be
     downloaded, if needed.

   Authentication is then successful, and the page can be closed.

#. In the :guilabel:`Send via French electronic invoicing` window, click :guilabel:`Refresh`.
#. Verify that the :guilabel:`Identifier` field is filled in with your :abbr:`SIREN (Système
   d'identification du répertoire des entreprises, Business Directory Identification System)`
   number, enable the :guilabel:`Pilot Phase` option if you are configuring electronic invoicing
   before September 1, 2026, and click :guilabel:`Validate Registration`.
#. Your French e-invoicing ID is now ready to send and receive e-invoices and credit notes. Enable
   the following options, as needed:

   - :guilabel:`Incoming Invoices Journal`: Automatically set, update if necessary.
   - :guilabel:`Enable e-reporting & sending of invoices to the PPF`: Enable this option if
     e-reporting and e-invoicing are :ref:`required for your company
     <localizations/france/b2b-b2c>`.
   - :guilabel:`Participate in the pilot phase`: This option should only be enabled until the pilot
     phase ends on September 1, 2026.

     .. note::
        Changes to enable or disable this option will take effect the following day.

   - :guilabel:`E-Reporting Periodicity`: Set the periodicity of the :ref:`e-reporting
     <localizations/france/e-invoicing-fac-elec-reporting>`.

Registration in the `annuaire de la facturation électronique (electronic invoicing directory)
<https://facturation.chorus-pro.gouv.fr/annuaire/#/>`_ is effective the day after the configuration
is completed.

.. tip::
   To disconnect from the e-invoicing network, click :guilabel:`Remove from Approved Platform`.

.. important::
   Once registered on the e-invoicing network, users are automatically registered on Peppol. No
   separate Peppol registration is then needed.

.. _localizations/france/e-invoicing-fac-elec-contacts:

Contacts
^^^^^^^^

Before sending an e-invoice to a contact, make sure the contact is registered on the e-invoicing
network and ready to receive e-invoices. To do so, follow these steps:

#. In the **Accounting** or **Invoicing** app, go to :menuselection:`Customers --> Customers` and
   access the customer's form.
#. Make sure the customer's :guilabel:`Country` is set to `France`.
#. Ensure the :guilabel:`SIREN` number is completed. If it's not, click the :icon:`fa-plus`
   :guilabel:`(plus)` icon in the :guilabel:`VAT` field, select :guilabel:`SIREN`, and enter the
   information.

   .. note::
      The :guilabel:`SIREN` number is then automatically added in the :guilabel:`France FRCTC
      Electronic Address` field in the :guilabel:`Accounting tab`, under the :guilabel:`Customer
      Invoices` section.

#. In the :guilabel:`Accounting tab`, under the :guilabel:`Customer Invoices` section, click
   :guilabel:`Verify` to verify the contact. If the contact is found on the e-invoicing network,
   :guilabel:`Partner is in the annuaire` is shown.

.. tip::
   Set the preferred :ref:`Invoice sending <accounting/invoice/sending>` method for a customer to
   :guilabel:`French E-Invoicing` in the :guilabel:`Customer Invoices` section of the customer
   form's :guilabel:`Accounting` tab.

.. _localizations/france/e-invoicing-fac-elec-einvoicing:

E-invoicing
***********

E-invoices for domestic B2B operations can be :ref:`sent
<localizations/france/e-invoicing-fac-elec-invoices>` and :ref:`received
<localizations/france/e-invoicing-fac-elec-bills>` via the e-invoicing network.

.. note::
   - B2C invoices or cross-border B2B invoices cannot be sent via the e-invoicing network. However,
     once confirmed in Odoo, these invoices are submitted to the tax authorities via
     :ref:`e-reporting <localizations/france/e-invoicing-fac-elec-reporting>`.
   - Domestic B2B invoices that are paid in cash are also submitted to the tax authorities via
     :ref:`e-reporting <localizations/france/e-invoicing-fac-elec-reporting>`.

.. _localizations/france/e-invoicing-fac-elec-invoices:

Send customer invoices
^^^^^^^^^^^^^^^^^^^^^^

Posted domestic B2B invoices to be sent via the e-invoicing network are marked as :guilabel:`Ready
to send` in the invoice's :guilabel:`E-invoicing Status` field.

.. note::
   All invoices that are ready to be sent via the e-invoicing network can be viewed in the
   following ways:

   - In the :guilabel:`Invoices` list view, use the :icon:`oi-settings-adjust` (:guilabel:`adjust
     settings`) button to add the :guilabel:`E-invoicing Status` column or apply the
     :guilabel:`E-Invoicing Ready` filter in the search bar.
   - In the Accounting dashboard, click :guilabel:`E-invoicing ready invoices` on the relevant sales
     journal.

Once an invoice is :ref:`created <accounting/invoice/creation>` and :ref:`confirmed
<accounting/invoice/confirmation>`, follow these steps to send the invoice to the customer via
the e-invoicing network:

#. Check that the :ref:`contact is registered in the electronic invoicing directory
   <localizations/france/e-invoicing-fac-elec-contacts>`.
#. Make sure each invoice line includes at least one product or label, and exactly one tax.
#. Click :guilabel:`Send` on the confirmed invoice form.
#. In the :guilabel:`Print & Send` window, make sure the :guilabel:`French E-Invoicing` option is
   enabled and click :guilabel:`Send`.

.. tip::
   - To avoid selecting the sending method each time, verify that a :ref:`preferred method has been
     set on the contact form <localizations/france/e-invoicing-fac-elec-contacts>`.
   - :ref:`Multiple invoices <accounting/invoice/sending-multiple-invoices>` can also be sent in
     batches via the e-invoicing network.

In the :guilabel:`French Invoicing Info` section of the :guilabel:`Other Info` tab, the
:guilabel:`E-Invoicing Status` is updated to :guilabel:`Done` once the invoices have been
successfully delivered to the contact’s approved platform.

.. note::
   - The invoice delivery status is also displayed in the :guilabel:`E-Invoicing Status` column of
     the :guilabel:`Invoices` list view.
   - If an error occurs during the tax authority's delivery of the invoice, the error details are
     displayed in the invoice's chatter.

.. tip::
   To manually trigger the scheduled action used to check the delivery status of invoices, go to the
   Accounting dashboard and click :guilabel:`Fetch E-invoicing Status` on the corresponding sales
   journal.

.. important::
   For domestic B2B invoices, the :guilabel:`Reset to Draft` option is not available for invoices
   that have already been sent via :ref:`e-reporting
   <localizations/france/e-invoicing-fac-elec-reporting>`.

.. _localizations/france/e-invoicing-fac-elec-bills:

Receive vendor bills
^^^^^^^^^^^^^^^^^^^^

Odoo checks for new documents received via the e-invoicing network multiple times a day, and
automatically imports vendor bills into the purchase journal set in the :guilabel:`Incoming Invoices
Journal` field during :ref:`configuration <localizations/france/e-invoicing-fac-elec-config>`.
Corresponding vendor bills are created as drafts and appear in the vendor bills list view.

Open a vendor bill and click one of the following options:

- :guilabel:`Confirm`: To confirm the vendor bill.
- :guilabel:`Cancel`: To refuse the vendor bill. In the :guilabel:`Send Response` window, fill in
  the following fields, then click :guilabel:`Send`:

  - :guilabel:`Reason Code`: Select the reason why you are refusing the vendor bill.
  - :guilabel:`Enter an optional note here`: Add a message to explain your refusal to the vendor, if
    desired.

.. tip::
   To manually trigger the scheduled action to retrieve incoming vendor bills, go to the Accounting
   dashboard and click :guilabel:`Fetch E-invoicing Documents` on the purchase journal set in the
   :guilabel:`Incoming Invoices Journal` field during configuration.

.. _localizations/france/e-invoicing-fac-elec-reporting:

E-reporting
***********

E-reporting consists of submitting transaction and payment data to tax authorities for
:ref:`confirmed <accounting/invoice/confirmation>` invoices within the e-reporting scope, including
B2C transactions and cross-border B2B operations. Every ten days, Odoo automatically submits an XML
report with this data to the tax authorities.

To view e-reports and their submission status, in the **Accounting** app, go to
:menuselection:`Reporting --> E-reporting`. E-reports have one of the following statuses:

- :guilabel:`Ready`: Ready for submission.
- :guilabel:`Error`: Submission failed, the e-report will be re-submitted in 5-7 days.
- :guilabel:`Sent`: Submitted, awaiting confirmation.
- :guilabel:`Completed`: Successfully processed.

.. tip::
   - To manually trigger the scheduled action used to send e-reporting, open the relevant e-report
     from the :guilabel:`E-Reporting` list view and click :guilabel:`Send`.
   - To display the list of invoices or payments included in an e-report, click the
     :guilabel:`Invoices` or :guilabel:`Payments` smart button, then click the
     :icon:`fa-caret-right` :guilabel:`(right arrow)` icon to display the list.

.. important::
   For B2C invoices, cross-border B2B invoices, and domestic B2B invoices paid in cash, if an
   invoice previously sent via :ref:`e-reporting
   <localizations/france/e-invoicing-fac-elec-reporting>` needs to be reset to draft for
   corrections, the e-reporting correction is sent when the draft invoice is confirmed.

.. seealso::
   `Frequency and deadlines for submitting transaction and payment data (e-reporting)
   <https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/japprof_frequences-et-delais-de-transmission.pdf>`_

.. _localizations/france/e-invoicing-choruspro:

B2G invoicing - Chorus Pro
~~~~~~~~~~~~~~~~~~~~~~~~~~

The `Chorus Pro <https://portail.chorus-pro.gouv.fr/aife_csm>`_ portal, managed by the AIFE (Agence
pour l'Informatique financière de l'État), is the official platform for submitting electronic
invoices to French public entities. It allows businesses to send and manage invoices, track their
processing status, and access payment updates. Since January 2020, electronic invoicing has been
mandatory for all business-to-government (B2G) transactions in France. Odoo supports integration
with Chorus Pro to submit invoices generated in Odoo.

.. _localizations/france/e-invoicing-choruspro-configuration:

Configuration
*************

To send invoices to Chorus Pro, the following configuration is required:

#. :doc:`Install </applications/general/apps_modules>` the :guilabel:`France - Factur-X integration
   with Chorus Pro` (`l10n_fr_facturx_chorus_pro`) module.
#. :ref:`Register <accounting/e-invoicing/peppol-registration>` with Peppol, as invoices are sent
   from Odoo to Chorus Pro via the :ref:`Peppol <accounting/e-invoicing/peppol>` network.
#. If you don’t already have a Chorus Pro account, go to the `Chorus Pro
   <https://portail.chorus-pro.gouv.fr/aife_csm>`_ page, click :guilabel:`Créer un compte`, and
   create one.
#. :ref:`Configure the relevant customers' contact form
   <localizations/france/e-invoicing-choruspro-contacts>`.

.. seealso::
   `Chorus Pro documentation <https://portail.chorus-pro.gouv.fr/aife_documentation>`_

.. _localizations/france/e-invoicing-choruspro-contacts:

Customers
^^^^^^^^^

To submit invoices to Chorus Pro, configure the relevant customers' contact form as follows:

#. Verify the :guilabel:`Country`, :guilabel:`VAT`, and :guilabel:`SIRET` fields are filled out.
#. In the :guilabel:`Accounting` tab, fill in the following fields in the :guilabel:`Customer
   Invoices` section:

   - :guilabel:`eInvoice format`: Select :guilabel:`BIS Billing 3.0`.
   - Make sure :guilabel:`France SIRET` is selected in the next field, then type `11000201100044`,
     the reference used by Chorus Pro.

.. _localizations/france/e-invoicing-choruspro-invoices:

Sending invoices to Chorus Pro
******************************

To send invoices to Chorus Pro, follow these steps:

#. Make sure the :guilabel:`SIRET` field is completed in the :doc:`company record
   </applications/general/companies>`.
#. In the **Accounting** app, go to :menuselection:`Customers --> Invoices` and open or create the
   invoice.
#. Make sure the following fields are filled in the :guilabel:`Other Info` tab:

   - :guilabel:`Buyer Reference`: :guilabel:`Service Exécutant` in Chorus Pro
   - :guilabel:`Contract Reference`: :guilabel:`Numéro de Marché` in Chorus Pro
   - :guilabel:`Purchase Order Reference`: :guilabel:`Engagement Juridique` in Chorus Pro

#. Confirm the invoice.
#. Click :guilabel:`Send` and, in the :guilabel:`Send` window, enable :guilabel:`By Peppol`.
#. Click :guilabel:`Send`.

Once the invoice is sent, the Peppol status of the invoice is updated to :guilabel:`Done`.

.. seealso::
   :ref:`Peppol <accounting/e-invoicing/peppol>`

.. _localizations/france/fec:

FEC - Fichier des Écritures Comptables
--------------------------------------

An FEC :dfn:`Fichier des Écritures Comptables` audit file contains all the accounting data and
entries recorded in all the accounting journals for a financial year. The entries in the file must
be arranged in chronological order. Since January 2014, every French company is required to produce
and transmit this file upon request by the tax authorities for audit purposes.

.. _localizations/france/fec-import:

FEC Import
~~~~~~~~~~

:doc:`Install </applications/general/apps_modules>` the :guilabel:`France - FEC Import`
(`l10n_fr_fec_import`) module to import FEC files from other software.

To enable this feature, in the **Accounting** app, go to :menuselection:`Configuration -->
Settings`. In the :guilabel:`Accounting Import` section, click :icon:`oi-arrow-right`
:guilabel:`Import` and :guilabel:`Import FEC`. Then, in the :guilabel:`FEC Import` window, upload
the FEC file and click :guilabel:`Import`.

.. note::
   Importing FEC files from different years requires no particular actions or computations. However,
   if multiple files contain RAN :dfn:`Reports à Nouveaux` with the starting balance for the year,
   these entries are automatically marked as unnecessary in Odoo and may need to be deleted.

.. _localizations/france/fec-file-formats:

File formats
************

.. note::
   - FEC files must be in CSV format, as XML format is not supported.
   - The FEC CSV file is a plain text file structured as a data table. The first line serves as the
     header, defining the list of fields for each entry, and each following line represents a single
     accounting entry without any specific order.

FEC files must comply with the following technical specifications:

- **Encoding**: UTF-8, UTF-8-SIG and iso8859_15.
- **Separator**: any of these: `;` or `|` or `,` or `TAB`.
- **Line terminators**: both CR+LF (`\\r\\n`) and LF (`\\n`) character groups are supported.
- **Date format**: `%Y%m%d`

.. _localizations/france/fec-fields:

Fields description and use
**************************

+----+---------------+--------------------------------------+-----------------------------------+-----------------+
|  # | Field name    | Description                          | Use                               | Format          |
+====+===============+======================================+===================================+=================+
| 01 | JournalCode   | Journal Code                         | `journal.code` and `journal.name` | Alphanumeric    |
|    |               |                                      | if `JournalLib` is not provided   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 02 | JournalLib    | Journal Label                        | `journal.name`                    | Alphanumeric    |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 03 | EcritureNum   | Numbering specific to each journal   | `move.name`                       | Alphanumeric    |
|    |               | sequence number of the entry         |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 04 | EcritureDate  | Accounting entry Date                | `move.date`                       | Date (yyyyMMdd) |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 05 | CompteNum     | Account Number                       | `account.code`                    | Alphanumeric    |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 06 | CompteLib     | Account Label                        | `account.name`                    | Alphanumeric    |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 07 | CompAuxNum    | Secondary account Number             | `partner.ref`                     | Alphanumeric    |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 08 | CompAuxLib    | Secondary account Label              | `partner.name`                    | Alphanumeric    |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 09 | PieceRef      | Document Reference                   | `move.ref` and `move.name`        | Alphanumeric    |
|    |               |                                      | if `EcritureNum` is not provided  |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 10 | PieceDate     | Document Date                        | `move.date`                       | Date (yyyyMMdd) |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 11 | EcritureLib   | Account entry Label                  | `move_line.name`                  | Alphanumeric    |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 12 | Debit         | Debit amount                         | `move_line.debit`                 | Float           |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 13 | Credit        | Credit amount                        | `move_line.credit`                | Float           |
|    |               | (Field name "Crédit" is not allowed) |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 14 | EcritureLet   | Accounting entry cross reference     | `move_line.fec_matching_number`   | Alphanumeric    |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 15 | DateLet       | Accounting entry date                | unused                            | Date (yyyyMMdd) |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 16 | ValidDate     | Accounting entry validation date     | unused                            | Date (yyyyMMdd) |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 17 | Montantdevise | Currency amount                      | `move_line.amount_currency`       | Float           |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 18 | Idevise       | Currency identifier                  | `currency.name`                   | Alphanumeric    |
|    |               | (accepts null)                       |                                   |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+

These two fields appear in the same order as the others, replacing them.

+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 12 | Montant       | Amount                               | `move_line.debit`                 | Float           |
|    |               |                                      | or `move_line.credit`             |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+
| 13 | Sens          | Can be "C" for Credit                | determines `move_line.debit`      | Char            |
|    |               | or "D" for Debit                     | or `move_line.credit`             |                 |
+----+---------------+--------------------------------------+-----------------------------------+-----------------+

.. _localizations/france/fec-implementation:

Implementation details
**********************

The following accounting entities are imported from the FEC files: **Accounts, Journals, Partners**,
and **Moves**. The module automatically determines the encoding, line terminator, and separator used
in the file. Next, a check is performed to ensure that each line has the correct number of fields
matching the header. If the check is successful, the entire file is read, stored in memory, and
scanned. Accounting entities are then imported one type at a time in the following order.

.. _localizations/france/fec-accounts:

Accounts
^^^^^^^^

Each accounting entry is associated with an account identified by the :guilabel:`CompteNum` field.

.. _localizations/france/fec-code-matching:

Code matching
^^^^^^^^^^^^^

If an account with the same code already exists, the existing one is used rather than creating a new
one. In Odoo, account numbers follow the default digit length of the fiscal localization. Since the
FEC module is tied to the French localization, the default account length is 6 digits.
This means that trailing zeros in account codes are removed, and the comparison between the account
codes in the FEC file and those already in Odoo is made based only on the first six digits of the
codes.

.. example::
   The account code `65800000` in the file is matched with an existing `658000` account in Odoo,
   and the existing account is used instead of creating a new one.

.. _localizations/france/fec-reconcilable-flag:

Reconcilable flag
^^^^^^^^^^^^^^^^^

An account is technically flagged as *reconcilable* if the first line in which it appears has the
:guilabel:`EcritureLet` field filled out, indicating that the accounting entry will be reconciled
with another one.

.. note::
   The field can be left empty on the line, but the entry must still be reconciled with an
   unrecorded payment. The account is flagged as reconcilable once the import of the move lines
   requires it.

.. _localizations/france/fec-account-type:

Account type and templates matching
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Since the account **type** is not specified in the FEC format, **new** accounts are created with the
default type :guilabel:`Current Assets`. After the import process, they are matched against the
installed Chart of Account templates. The *reconcile* flag is also determined this way.

The matching is performed by comparing the left-most digits, starting with all digits, followed by
3 digits, and then 2 digits.

.. example::

   +------------+------------+-----------------+---------------------+---------------------+
   | Name       | Code       | Full comparison | 3-digits comparison | 2-digits comparison |
   +============+============+=================+=====================+=====================+
   | Template   | `400000`   | `400000`        | `400`               | `40`                |
   +------------+------------+-----------------+---------------------+---------------------+
   | CompteNum  | `40100000` | `40100000`      | `401`               | `40`                |
   +------------+------------+-----------------+---------------------+---------------------+
   | **Result** |            |                 |                     | Match **found**     |
   +------------+------------+-----------------+---------------------+---------------------+

The account type is then flagged as :guilabel:`payable` and :guilabel:`reconcilable` based on the
account template.

.. _localizations/france/fec-journals:

Journals
^^^^^^^^

Journals are checked against the existing ones in Odoo to avoid duplicates, even when importing
multiple FEC files.

If a journal with the same code already exists, the existing journal is used instead of creating a
new one.

New journals have the prefix :guilabel:`FEC-` added to their name. For example, :guilabel:`ACHATS`
becomes :guilabel:`FEC-ACHATS`.

.. note::
   Journals are *not* archived, allowing the user to manage them as desired.

.. _localizations/france/fec-journal-type:

Journal type determination
^^^^^^^^^^^^^^^^^^^^^^^^^^

The journal type is not specified in the format (similar to the accounts) and is initially created
with the default type :guilabel:`general`.

At the end of the import process, the journal type is determined based on the following rules
regarding related moves and accounts:

- | :guilabel:`bank`: Moves in these journals always include a line (debit or credit) impacting a
    liquidity account.
  | :guilabel:`cash` / :guilabel:`bank` can be interchanged, so :guilabel:`bank` is assigned when
    this condition is met.
- | :guilabel:`sale`: Moves in these journals mostly have debit lines on receivable accounts and
    credit lines on tax income accounts.
  | Sale refund journal items are debit/credit inverted.
- | :guilabel:`purchase`: Moves in these journals mostly have credit lines on payable accounts and
    debit lines on expense accounts.
  | Purchase refund journal items are debit/credit inverted.
- | :guilabel:`general`: Used for everything else.

.. note::
   - A minimum of three moves is required to identify the journal type.
   - A threshold of 70% of the moves must meet the criteria for a journal type to be determined.

.. example::
   Suppose we are analyzing the moves that share a certain :guilabel:`journal_id`.

   +------------------------------------------------------------+-------+------------+
   | Moves                                                      | Count | Percentage |
   +============================================================+=======+============+
   | that have a sale account line and no purchase account line | 0     | 0          |
   +------------------------------------------------------------+-------+------------+
   | that have a purchase account line and no sale account line | 1     | 25%        |
   +------------------------------------------------------------+-------+------------+
   | that have a liquidity account line                         | 3     | **75%**    |
   +------------------------------------------------------------+-------+------------+
   | **Total**                                                  | 4     | 100%       |
   +------------------------------------------------------------+-------+------------+

   The journal :guilabel:`type` would be :guilabel:`bank`, because the bank's move percentage (75%)
   exceeds the threshold (70%).

.. _localizations/france/fec-partners:

Contacts
^^^^^^^^

Each contact keeps its :guilabel:`Reference` from the :guilabel:`CompAuxNum` field.

.. note::
   These fields are searchable based on previous FEC imports for fiscal/audit purposes.

.. tip::
   Similar and potential duplicate contacts can be merged using the Data Cleaning App.

.. _localizations/france/fec-moves:

Moves
^^^^^

Entries are posted and reconciled immediately upon submission, with the :guilabel:`EcritureLet`
field used to match the entries.

The :guilabel:`EcritureNum` field represents the name of the moves, but it may sometimes be left
empty. In such cases, the :guilabel:`PieceRef` field is used instead.

.. _localizations/france/fec-rounding-issue:

Rounding issues
^^^^^^^^^^^^^^^

A rounding tolerance is applied based on currency precision for debit and credit amounts (i.e., 0.01
for EUR). If the difference falls under this tolerance, a new line is added to the move, called
:guilabel:`Import rounding difference`, targeting the following accounts:

- `658000` Charges diverses de gestion courante, for added debits
- `758000` Produits divers de gestion courante, for added credits

.. _localizations/france/fec-missing-move-name:

Missing move name
^^^^^^^^^^^^^^^^^

If the the :guilabel:`EcritureNum` field is not filled out and :guilabel:`PieceRef` field is not
suited to determine the move name (it may be used as an accounting move line reference), it becomes
impossible to identify which lines should be grouped into a single move, and effectively preventing
the creation of balanced moves.

In such cases, a final attempt is made to group all lines by the same journal and date
(:guilabel:`JournalLib`, :guilabel:`EcritureDate`). If this grouping generates balanced moves
(sum(credit) - sum(debit) = 0), then each different combination of journal and date creates a new
move.

.. example::
   `ACH` + `2021/05/01` --> new move on journal `ACH` with name `20210501`.

If this attempt fails, an error message is displayed, listing all the move lines that are considered
unbalanced.

.. _localizations/france/fec-partner-information:

Contact information
^^^^^^^^^^^^^^^^^^^

If a line includes contact information, it is copied to the accounting move itself, provided the
targeted journal is of type :guilabel:`payable` or :guilabel:`receivable`.

.. _localizations/france/fec-export:

FEC Export
~~~~~~~~~~

To download the FEC, in the **Accounting** app, go to :menuselection:`Reporting --> General Ledger`.
Click the :icon:`fa-cog` :guilabel:`(gear)` icon and select :guilabel:`FEC`. In the
:guilabel:`FEC File Generation` window, fill in the following fields:

- :guilabel:`Start Date`
- :guilabel:`End Date`
- :guilabel:`Test File`: Enable this option to test the FEC file generation.
- :guilabel:`Exclude lines at 0`: Enable this option if needed.
- :guilabel:`Excluded Journals`: Select the journal(s) to exclude.

Then, click :guilabel:`Generate`.

.. seealso::
   - `Official Technical Specification (fr)
     <https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027804775>`_
   - `Test-Compta-Demat (Official FEC Testing tool)
     <https://github.com/DGFiP/Test-Compta-Demat>`_

.. _localization/france/liasse-fiscale:

Liasse fiscale
--------------

The *liasse fiscale* (tax declaration) is a collection of standardized financial documents that
businesses must submit annually to the tax authorities. It comprehensively summarizes the company’s
financial activities and determines corporate taxes.

`Teledec <https://www.teledec.fr>`_ is a platform used to prepare and submit tax declaration using
data from accounting records. To synchronize your accounting data stored in Odoo with Teledec and
electronically send your company's *liasse fiscale* to |DGFiP|, follow these steps:

#. :ref:`localization/france/teledec-account`
#. :ref:`localization/france/teledec-registration`
#. :ref:`localization/france/teledec-synchronization`

.. _localization/france/teledec-account:

Teledec account creation
~~~~~~~~~~~~~~~~~~~~~~~~

To create a Teledec account, access the `Teledec account creation page <https://www.teledec.fr/s-enregistrer>`_
and fill in the :guilabel:`Adresse e-mail` field with an email address. Choose a secure password,
accept the general terms and conditions by checking the box, and click :guilabel:`S'enregistrer` to
save. Then, enter the :abbr:`SIREN (Système d'identification du répertoire des entreprises,
Business Directory Identification System)` number of the company.

.. note::
   If the account has already been created, click :guilabel:`Déjà enregistré?` (Already registered).

.. _localization/france/teledec-registration:

Company registration and fiscal year information
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To register the company on Teledec, go to :guilabel:`Vos entreprises` (Your companies) and click
:guilabel:`Enregistrer votre entreprise` (Register your company). Make sure to fill in the following
company information in the :guilabel:`Coordonnées de l'entreprise` (Company's details) and
:guilabel:`Représentant légal` (Legal representative) sections:

- :guilabel:`Nom de l'entreprise`: Company's name.
- :guilabel:`Forme juridique`: Select the company's legal form.
- :guilabel:`Les comptes sont clôturés le`: Closing date.
- :guilabel:`Régime d'imposition, choix de la liasse`: Select the tax scheme or the tax declaration
  option.
- :guilabel:`Adresse du siège social`: Head office address.
- :guilabel:`Nom du représentant légal`: Legal representative's name.
- :guilabel:`Agissant en qualité de`: Legal representative's function.
- :guilabel:`Numéro de téléphone`: Phone number.

Click :guilabel:`Sauvegarder` (Save) to display the next step
:guilabel:`Informations générales sur l'exercice déclaré` (General information about the declared
fiscal year). Then, fill in information on the financial year, such as the fiscal year start and end
dates or the closing date and duration of the previous fiscal period. After saving, the list of
documents included in the *liasse fiscale* is displayed, including both standard tax forms and
those customized for the company’s tax declaration.

.. tip::
   - The :guilabel:`Etat` (Status) column shows the progress of the document filing.
   - Click :guilabel:`Compléter` to fill out a document, then :guilabel:`Sauvegarder` to save.
   - To print a blank version of the declaration, click :guilabel:`Imprimer la déclaration` and
     select the :guilabel:`Imprimer la déclaration avec les notices` option.

.. _localization/france/teledec-synchronization:

Odoo synchronization
~~~~~~~~~~~~~~~~~~~~

To enable Odoo to automatically fill in the data for the :guilabel:`Liasse fiscale`, click
:guilabel:`Autres actions` (Other actions) in the top-right corner and select
:guilabel:`Synchroniser avec un logiciel tiers` (Synchronize with third-party software), then
:guilabel:`Synchroniser cette liasse avec Odoo` (Synchronize this *liasse* with Odoo).

In the :guilabel:`Synchroniser cette liasse avec Odoo` window, fill in the following
information to complete the synchronization:

- :guilabel:`Nom / URL complète de la base de données Odoo`: Odoo database name or URL. To provide
  the full URL of the database, enable :guilabel:`Je voudrais donner une url complète hors .odoo.com`
  option.
- :guilabel:`Nom de l'utilisateur`: User name associated with the Odoo account.
- :guilabel:`Clé API`: :ref:`API key <api/external_api/keys>` generated by the Odoo instance.

.. note::
   In a multi-company setup, the following configurations are required in Odoo:

   - The user linked to the generated :ref:`API key <api/external_api/keys>` must have
     :ref:`access <general/companies/users>` to the company intended for synchronization.
   - This company must also be set as the user's :guilabel:`Default Company`, as Teledec always
     synchronizes with the user's default company.

Next, click :guilabel:`Importer` to synch data from Odoo. In the
:guilabel:`Confirmation de la synchronisation de liasse avec Odoo` window, review the amounts and
make any necessary changes. Then click :guilabel:`Importer la balance` to confirm the
synchronization of the *liasse fiscale* with Odoo and import the balance.

.. important::
   Clicking :guilabel:`Importer la balance` may overwrite or alter any manual updates made
   previously.

To make payment and send the declaration to the tax authorities, click :guilabel:`Paiement & envoi
de la déclaration`.

.. _localization/france/edi-tva:

EDI tax return
--------------

.. note::
   A valid Odoo Enterprise subscription is required to use this service.

The EDI tax return (VAT report) can be submitted directly to |DGFiP| through Odoo. To do so, follow
these steps:

#. :ref:`Review and validate <accounting/tax-returns/vat-return-review>` the tax return (VAT
   report).
#. Click :guilabel:`Submit`, or in the :guilabel:`Tax Return` view, click the :guilabel:`Tax Report
   (FR)` button, then the :icon:`fa-cog` (:guilabel:`gear`) icon, and select :guilabel:`EDI VAT`.
#. In the :guilabel:`EDI VAT` window, make sure a valid VAT :guilabel:`ROF` (Référence d’Obligation
   Fiscale) is entered.
#. If needed, enable the :guilabel:`Add express mention` option and include a comment.
#. - If payment to |DGFiP| is required:

     - Click :guilabel:`Add a line` in the :guilabel:`IBAN` column to enter an IBAN account number
       and BIC for the payment.
     - In the :guilabel:`Amount` field, enter the total :guilabel:`VAT to pay`; the
       :guilabel:`Amount to pay` field updates automatically.

     .. tip::
        A yellow banner appears if the entered amount does not match the required payment, as
        partial payments are not allowed.

   - If reimbursement from |DGFiP| is expected:

     - Enable the :guilabel:`Add reimbursement comment` option and include a comment if needed.
     - Click :guilabel:`Add the line` in the :guilabel:`IBAN` column to enter an IBAN account number
       and BIC for the payment.
     - Select the :guilabel:`Reimbursement type`:

       - :guilabel:`First asking`: Select the company's creation :guilabel:`Date`.
       - :guilabel:`Assignment, cessation, death, entry into a VAT group`: Update the
         :guilabel:`Date` accordingly.

     - In the :guilabel:`Amount` field, enter the total or partial :guilabel:`Amount` to be
       received; the :guilabel:`Amount to receive` field updates automatically.

     .. tip::
        A yellow banner appears if the amount does not match the amount that needs to be received.
        If proceeding without matching the VAT amount, the difference will be carried over to the
        next period.

#. Click :guilabel:`Send VAT Report` to submit the tax return (VAT report) to |DGFiP|.

The :guilabel:`Submit` action step turns orange, and a submission message appears in the chatter,
then turns green when |DGFiP| confirms reception.

.. note::
   To access the tax report XML file, go to :menuselection:`Accounting --> Reporting --> EDI
   Exports`.

.. _localizations/france/pos:

Point of sale
=============

.. _localizations/france/vat-anti-fraud-certification:

VAT anti-fraud certification
----------------------------

Since January 2018, new anti-fraud legislation has been in effect in France and its overseas
territories (DOM-TOM). This legislation establishes specific requirements for the integrity,
security, storage, and archiving of sales data. Odoo complies with these legal requirements by
providing a module and a downloadable certificate of conformity.

Anti-fraud cash register software, such as Odoo (CGI art. 286, I. 3° bis), is required for companies
taxable in France or DOM-TOM, where some customers are private individuals (B2C). This rule applies
to all company sizes, but auto-entrepreneurs exempt from VAT are unaffected.

.. seealso::
   - `Frequently Asked Questions
     <https://www.economie.gouv.fr/files/files/directions_services/dgfip/controle_fiscal/actualites_reponses/logiciels_de_caisse.pdf>`_
   - `Official Statement
     <http://bofip.impots.gouv.fr/bofip/10691-PGP.html?identifiant=BOI-TVA-DECLA-30-10-30-20160803>`_
   - `Item 88 of Finance Law 2016
     <https://www.legifrance.gouv.fr/affichTexteArticle.do?idArticle=JORFARTI000031732968&categorieLien=id&cidTexte=JORFTEXT000031732865>`_

.. _localizations/france/pos-odoo-certification:

Odoo certification
~~~~~~~~~~~~~~~~~~

The tax administration requires all companies to provide a certificate of conformity confirming that
their software complies with anti-fraud legislation. In case of non-compliance, a €7,500 fine may be
imposed.

.. note::
   This `certificate <https://www.odoo.com/my/contract/french-certification/>`_ is granted by Odoo
   SA to Odoo Enterprise users with a subscription number.

To get the certification, follow these steps:

#. :doc:`Install </applications/general/apps_modules>` the :guilabel:`France - VAT Anti-Fraud
   Certification for Point of Sale (CGI 286 I-3 bis)` (`l10n_fr_pos_cert`) module.
#. Set the :guilabel:`Country` field on the :doc:`company record </applications/general/companies>`
   to encrypt entries for the inalterability check.
#. Download the mandatory `certificate of conformity
   <https://www.odoo.com/my/contract/french-certification/>`_ delivered by Odoo SA.

.. _localizations/france/pos-anti-fraud-features:

Anti-fraud features
~~~~~~~~~~~~~~~~~~~

The anti-fraud module introduces the following features:

- :ref:`Inalterability <localizations/france/pos-inalterability>`
- :ref:`Security <localizations/france/pos-security>`
- :ref:`Storage <localizations/france/pos-storage>`

.. _localizations/france/pos-inalterability:

Inalterability
**************

All methods to cancel or modify key data in POS orders, invoices, and journal entries are
deactivated for companies located in France or any DOM-TOM.

.. note::
   In a multi-company environment, only the documents of such companies are impacted.

.. _localizations/france/pos-security:

Security
********

To ensure inalterability, every order or journal entry is encrypted upon validation. This number
(or hash) is calculated from the document's key data and the hash of the precedent documents. The
module introduces an interface to test the data's inalterability. The test will fail if any
information is modified on a document after its validation. The algorithm recomputes all the hashes
and compares them against the initial ones. In case of failure, the system points out the first
corrupted document recorded in the system.

Only users with :doc:`administrator </applications/general/users/access_rights>` access rights can
initiate the inalterability check:

- For POS orders, go to :menuselection:`Point of Sales --> Reporting --> POS Inalterability Check`;
- For journal entries, in the **Accounting** or **Invoicing** app, go to
  :menuselection:`Configuration --> Settings`. In the :guilabel:`Reporting` section, click
  :guilabel:`Download the Data Inalterability Check Report`.

.. _localizations/france/pos-storage:

Storage
*******

The system also processes automatic sales closings daily, monthly, and annually. Such closings
compute the sales total for the period and the cumulative grand totals from the very first sales
entry recorded in the system.

To access closings, either go to :menuselection:`Point of Sales --> Reporting --> Sales Closings` or
in the **Accounting** or **Invoicing** app, go to :menuselection:`Reporting --> Sales Closings`.

.. note::
   - Closings compute the totals for journal entries of sales journals (Journal Type = Sales).
   - For multi-companies environments, such closings are performed by company.
   - POS orders are posted as journal entries at the closing of the POS register. Closing the POS
     register can be done at any time. To prompt users to do it daily, the module prevents them from
     resuming a session that was opened more than 24 hours ago. Such a session must be closed before
     selling again.
   - A period’s total is computed from all the journal entries posted after the previous closing of
     the same type, regardless of their posting date. Recording a new sales transaction for a
     period already closed will be counted in the very next closing.

.. tip::
   For test & audit purposes, closings can be manually generated in :ref:`developer mode
   <developer-mode>`. To do so, go to :menuselection:`Settings --> Technical --> Scheduled Actions`.
   In the scheduled actions list view, open the desired :guilabel:`Sale Closing` action and click
   :guilabel:`Run manually`.

.. _localizations/france/pos-responsibilities:

Responsibilities
~~~~~~~~~~~~~~~~

Uninstalling this module will reset the security hashes. This means the system will no longer
guarantee the integrity of the past data.

Users are responsible for their Odoo system and must operate it carefully. Modifying source code
responsible for ensuring data integrity is not allowed.

Odoo is not responsible for any issues with this module's functionality if caused by uncertified
third-party applications.
