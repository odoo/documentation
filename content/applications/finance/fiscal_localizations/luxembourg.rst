==========
Luxembourg
==========

.. _localizations/luxembourg/modules:

Modules
=======

The following modules are installed automatically with the Luxembourgish localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Luxembourg - Accounting`
     - `l10n_lu`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`
   * - :guilabel:`Luxembourg - Accounting Reports`
     - `l10n_lu_reports`
     - Country-specific reports

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing’s legality and compliance in Luxembourg
   <../accounting/customer_invoices/electronic_invoicing/luxembourg>`

.. _localizations/luxembourg/overview:

Localization overview
=====================

The Luxembourgish localization includes the following features:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined set of accounts that follows the
  current official accounting standards (PCN 2020)
- :ref:`localizations/luxembourg/taxes`: pre-configured tax rates, including standard (17%),
  reduced (14%, 8%, and 3%) and zero-rated VAT, intra-community, and zero-rated export taxes
- :doc:`../accounting/taxes/fiscal_positions`: automated account and tax adjustments based on
  customer or supplier
- :ref:`localizations/luxembourg/e-invoicing`: E-invoicing with Peppol
- :ref:`localizations/luxembourg/tax-reporting`: detailed overview of your VAT liability, and
  generation of monthly and annual VAT declarations in XML format to upload to the :abbr:`eCDF
  platform (plateforme électronique de Collecte des Données Financières)`
- :ref:`localizations/luxembourg/faia`: generation of audit files in the :abbr:`FAIA (Fichier
  d’Audit Informatisé AED)` (Luxembourgish SAF-T) format

.. _localizations/luxembourg/taxes:

Taxes
-----

The following :doc:`taxes <../accounting/taxes>` are available by default with the Luxembourgish
localization package:

- standard VAT (17%): applied to most goods and services within Luxembourg
- reduced VAT (14%, 8%, and 3%): applied to some goods and services within Luxembourg
- zero-rated VAT: applied to goods and services not subject to VAT
- intra-community VAT: applied to goods and services sold to or purchased from VAT-registered
  persons located in other EU countries
- export tax (0%): zero-rated tax applied to goods and services exported outside Luxembourg

.. _localizations/luxembourg/e-invoicing:

E-invoicing
-----------

Odoo users in Luxembourg can register on the :ref:`accounting/e-invoicing/peppol` network, which
allows exchanging e-invoices and credit notes with other participants on the network.

The e-invoice format in Luxembourg is **BIS Billing 3.0**.

.. important:: E-invoicing via Peppol is mandatory for all B2G transactions in Luxembourg.

.. _localizations/luxembourg/tax-reporting:

Tax reporting
=============

In Luxembourg, companies must submit a VAT declaration on a monthly, quarterly, or annual basis to
the tax office, depending on their turnover. Companies that submit a monthly or quarterly
declaration are also required to submit the annual declaration.

Both monthly/quarterly and annual VAT declarations can be exported as XML files to upload on the
:abbr:`eCDF platform (plateforme électronique de Collecte des Données Financières)`.

Monthly / quarterly declaration
-------------------------------

Go to :menuselection:`Accounting --> Reporting --> Tax Report`.

In the :icon:`fa-book` :guilabel:`Report` selector, select :guilabel:`Tax Report (LU)`.

In the :icon:`fa-calendar` (:guilabel:`Period`) selector, choose the month or quarter for which to
generate the declaration.

Check the amounts generated for all four sections of the report.

If you sold to customers under a VAT exemption for SMEs during the period, you need to manually
enter the value of such sales in the editable fields at section I, items 481 and 482. To find the
amounts for these items, you can use the :guilabel:`Partner Ledger` report:

- Go to :menuselection:`Accounting --> Reporting --> Partner Ledger`.
- In the :icon:`fa-calendar` (:guilabel:`Period`) selector, choose the appropriate month or
  quarter.
- In the :icon:`fa-user` (:guilabel:`Account`) selector, choose :guilabel:`Receivable`.
- In the :icon:`fa-folder-open` (:guilabel:`Partners`) selector, choose the partners that fall under
  the exemption.
- Copy the total :guilabel:`Balance` for those partners for the given period.

Once the declaration is correct, click the :icon:`fa-cog` (:guilabel:`action menu`) icon, then click
:guilabel:`XML` to export and download it in XML format. You can then submit the XML file on the
eCDF platform.

Annual declaration
------------------

.. _luxembourg/account-tag-configuration:

Account tag configuration
~~~~~~~~~~~~~~~~~~~~~~~~~

The following configuration allows values to be generated automatically for sections I and III, and
Appendix A of the report, based on journal entries that impact accounts associated with each report
line.

This requires using a different :doc:`account <../accounting/get_started/chart_of_accounts>` for
each type of operation subject to VAT, output and input VAT, and expense listed in those sections.

Assign the following account :ref:`tags <chart-of-account/tags>` to accounts you use for each type
of operation subject to VAT listed in the declaration, if applicable:

- `001 - Supply of inhouse manufactured goods`
- `002 - Supply of goods not manufactured inhouse`
- `003 - Net profit margin`
- `004 - Supply of services`
- `005 - Disposal of tangible and intangible capital assets`
- `008 - Application of goods for private use or for that of the staff`
- `009 - Application for the purpose of business of goods`
- `010 - Use of goods considered business assets`
- `011 - Supply of services carried out free of charge`
- `013 - IC supply of goods`
- `202 - IC supply of new means of transport`
- `203 - Supply of goods carried out abroad`

Assign the following account tags to the accounts you use for each type of output and input VAT, if
applicable:

- `077 - VAT on stock entries invoiced by other taxable persons`
- `081 - VAT on capital expenditures invoiced by other taxable persons`
- `085 - VAT on operational expenditures invoiced by other taxable persons`
- `078 - VAT on stock entries due in respect of IC acquisitions`
- `082 - VAT on capital expenditures due in respect of IC acquisitions`
- `086 - VAT on operational expenditures due in respect of IC acquisitions`
- `079 - VAT on stock entries of importations of goods`
- `083 - VAT on capital expenditures of importations of goods`
- `087 - VAT on operational expenditures of importations of goods`
- `404 - VAT on stock entries due under the reverse charge`
- `405 - VAT on capital expenditures due under the reverse charge`
- `406 - VAT on operational expenditures due under the reverse charge`

Assign the following account tags to the expense accounts you use for each type of expense, if
applicable:

- `188 - Appendix A - Expenses for other work carried out by third parties`
- `190 - Appendix A - Car expenses`
- `239 - Appendix A - Gross salaries`
- `244 - Appendix A - Gross wages`
- `247 - Appendix A - Occasional salaries`
- `250 - Appendix A - Compulsory social security contributions (employer's share)`
- `253 - Appendix A - Accident insurance`
- `260 - Appendix A - Staff travel and representation expenses`
- `269 - Appendix A - Accounting and bookkeeping fees`
- `283 - Appendix A - Employer's travel and representation expenses`
- `285 - Appendix A - Electricity`
- `289 - Appendix A - Gas`
- `293 - Appendix A - Employer's travel and representation expenses`
- `301 - Appendix A - Telecommunications`
- `305 - Appendix A - Renting/leasing of immovable property with application of VAT`
- `307 - Appendix A - Renting/leasing of immovable property with no application of VAT`
- `310 - Appendix A - Renting/leasing of permanently installed equipment and machinery`
- `316 - Appendix A - Property tax`
- `324 - Appendix A - Business tax`
- `326 - Appendix A - Interest paid for long-term debts`
- `327 - Appendix A - Interest paid for short-term debts`
- `328 - Appendix A - Other financial costs`
- `330 - Appendix A - Stock and business equipment insurance`
- `331 - Appendix A - Public and professional third party liability insurance`
- `332 - Appendix A - Office expenses`
- `336 - Appendix A - Fees and subscriptions paid to professional associations and learned societies`
- `337 - Appendix A - Papers and periodicals for business purposes`
- `343 - Appendix A - Shipping and transport expenses`
- `345 - Appendix A - Work clothes`
- `347 - Appendix A - Advertising and publicity`
- `349 - Appendix A - Packaging`
- `351 - Appendix A - Repair and maintenance of equipment and machinery`
- `353 - Appendix A - Other repairs`
- `355 - Appendix A - New acquisitions (tools and equipment) if their cost can be fully allocated to the year of acquisition or creation`
- `358 - Appendix A - Custom (value)`
- `361 - Appendix A - Total 'Appendix to Operational expenditures'`

Opening the declaration
~~~~~~~~~~~~~~~~~~~~~~~

Go to :menuselection:`Accounting --> Reporting --> Tax Report`.

In the :icon:`fa-book` :guilabel:`Report` selector, select :guilabel:`Annual VAT Declaration (LU)`.

In the :icon:`fa-calendar` (:guilabel:`Period`) selector, choose the fiscal year dates for which to
generate the declaration.

Completing the declaration
~~~~~~~~~~~~~~~~~~~~~~~~~~

The annual declaration contains five sections labelled I to V, seven appendices labelled A to G, and
an additional Appendix to Operational Expenditures.

Sections I, III, and Appendix A can be pre-populated automatically based on the :ref:`account tag
configuration <luxembourg/account-tag-configuration>`. After configuring the account tags,
:ref:`set the tax lock date <accounting/tax-returns/lock-date>` to the end of the fiscal year. This will
trigger the pre-computation of those values.

.. image:: luxembourg/annual-tax-report.png
   :alt: Odoo Accounting populates a Luxembourgish annual VAT declaration based on account tags.

Alternatively, the year's total VAT debit and credit can be manually distributed among the various
report lines in sections I and III. You can use the :icon:`fa-pencil` (:guilabel:`Edit`) icon to
manually enter the value for each report line.

Sections II and IV are automatically computed.

You then need to manually complete appendices B through G, as well as the Appendix to Operational
Expenditures, with any additional information to be reported.

Exporting the declaration
~~~~~~~~~~~~~~~~~~~~~~~~~

Once the declaration is complete and correct, click the :icon:`fa-cog` (:guilabel:`action menu`)
icon, then click :guilabel:`XML` to export and download it in XML format. You can then submit the
XML file on the eCDF platform.

.. seealso::
   - :doc:`../accounting/reporting/tax_returns`
   - `Tax office website - VAT declaration <https://guichet.public.lu/en/entreprises/fiscalite/impots-benefices/tva/declarations/declaration-tva.html>`_
   - `Platform for electronic gathering of financial data (eCDF) <http://www.ecdf.lu>`_

.. _localizations/luxembourg/faia:

FAIA audit file export
======================

:abbr:`FAIA (Fichier d’Audit Informatisé AED)` is the Luxembourgish version of the SAF-T format for
accounting data interchange. It allows exporting complete accounting data for a period from a
taxpayer's accounting system to the tax office.

Odoo can generate an XML file in the FAIA format that contains the entire accounting data for a
period.

To generate and download the FAIA file, open :menuselection:`Accounting --> Reporting --> General
Ledger`, choose the desired period, click the :icon:`fa-cog` (:guilabel:`action menu`) icon, and
click :guilabel:`Export FAIA`.
