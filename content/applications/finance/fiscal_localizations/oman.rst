====
Oman
====

.. _localizations/oman/modules:

Modules
=======

The following modules related to the Omani localization are available:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Oman - Accounting`
     - `l10n_om`
     - Omani :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with the
       local chart of accounts, taxes, tax report, and fiscal positions.
   * - :guilabel:`Oman - Accounting Reports`
     - `l10n_om_reports`
     - Accounting reports for Oman.

.. note::
   The module automatically installs core configurations. A manual :doc:`update
   </applications/general/apps_modules>` may be required for missing elements or updates.

.. _localizations/oman/loc-review:

Localization overview
=====================

The Omani localization package provides the necessary accounting setup for companies operating in
Oman, including a pre-configured chart of accounts, taxes, fiscal positions, and a standard tax
report format. It ensures alignment with Oman VAT regulations and Royal Decree requirements.

The Omani localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :ref:`Chart of Accounts <localizations/oman/chart-of-accounts>`: based on Omani standards, with
  mapped account groups and default account mappings.
- :ref:`Taxes <localizations/oman/taxes>`: standard 5% VAT, zero-rated domestic as well as exports,
  exempt, imports, and reverse charge taxes.
- :doc:`Fiscal Positions <../accounting/taxes/fiscal_positions>`: automated tax adjustments based
  on customer or supplier registration status.
- :ref:`Tax Report <localizations/oman/tax-report>`: structured according to the Oman VAT return
  format, as issued by the Tax Authority.

.. _localizations/oman/chart-of-accounts:

Chart of accounts
-----------------

The Omani :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` is based on the
local rules and regulations. This includes pre-configured account groups and mapped default
accounts. Use the :ref:`predefined structure <chart-of-account/create>` or create new accounts, as
needed.

.. note::
   Accounts are grouped under relevant categories such as assets, liabilities, income, and expenses
   in line with local standards.

.. _localizations/oman/taxes:

Taxes
-----

The following :doc:`Taxes <../accounting/taxes>`, included in the Omani VAT system, are available by
default with the Omani localization package:

- Standard Rate 5%: Applies to the sale of most goods and services within Oman.
- Zero-Rated Supplies (0%): Applies to essential supplies where the seller can still reclaim input
  VAT.
- Exports (0%): Applies to the supply of goods and services that are exported outside Oman.
- Exempt Supplies: Applies to supplies that are not subject to VAT, and for which the supplier
  cannot reclaim input VAT on related purchases.
- Reverse Charge Mechanism (RCM): Applies to taxable businesses in Oman receiving services or goods
  from non-resident suppliers not registered for VAT in Oman.
- Import VAT (5%): Applies to the importation of most goods into Oman, charged at the customs
  point of entry.

.. _localizations/oman/tax-report:

Tax report
----------

The :ref:`VAT return <accounting/tax-returns/report>` provides a consolidated overview of the
taxable sales and purchases, VAT collected and paid, and the total amount owed or refundable for the
reporting period.

.. important::
   - The tax return aligns with official declarations required by `Oman's Tax Authority
     <https://tms.taxoman.gov.om/portal/web/taxportal/home>`_.
   - `VAT Taxpayer Guide
     <https://tms.taxoman.gov.om/portal/documents/20126/1414820/VAT+Taxpayer+Guide+-+VAT+Return+Filing.pdf/fae31d0c-e7e7-0014-9f28-a4c506b36614?t=1733169613409>`_.
