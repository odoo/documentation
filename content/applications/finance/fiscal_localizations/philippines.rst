===========
Philippines
===========

.. _localizations/philippines/modules:

Modules
=======

:ref:`Install <general/install>` the following modules to get all the features of the Philippines
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Philippines - Accounting`
     - `l10n_ph`
     - This module includes the default
       :ref:`fiscal localization package <fiscal_localizations/packages>`.
   * - :guilabel:`Philippines - Accounting Reports`
     - `l10n_ph_reports`
     - This module includes the accounting reports for the Philippines.
   * - :guilabel:`Philippines Checks Layout`
     - `l10n_ph_check_printing`
     - This module includes the features required to enable the PCHC check format.

.. note::
   In some cases, such as when upgrading to a version with additional modules, modules may not be
   installed automatically. Any missing modules can be manually :ref:`installed <general/install>`.

.. _localizations/philippines/specifics:

Localization overview
=====================

The Philippine localization package ensures compliance with Philippine fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to the Philippines' standards.

The Philippine localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Philippine
  accounting standards
- :ref:`localizations/philippines/taxes`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`Tax reporting <localizations/philippines/tax-reporting>`: detailed overview of your net tax
  liability

.. _localizations/philippines/taxes:

Taxes
-----

Installing the :guilabel:`Philippines - Accounting` (`l10n_ph`) and :guilabel:`Philippines -
Accounting Reports` (`l10n_ph_reports`) modules automatically creates default :doc:`taxes
<../accounting/taxes>` for :ref:`tax reports <localizations/philippines/tax-reporting>` generation.
The following categories are linked to the relevant accounts:

- :guilabel:`Sales and Purchase VAT`: 12%
- :guilabel:`Sales and Purchase VAT Zero-Rated`: 0%
- :guilabel:`Sales and Purchase VAT Exempt`: Exempt
- :guilabel:`Withholding Tax`: Expanded Withholding Tax (EWHT), Final Withholding Tax (FWHT), and
  Withholding VAT (WVAT).

.. tip::
   Default taxes are pre-configured and mapped to the relevant reports. To create a new tax, it is
   recommended to **duplicate** an existing one to preserve this configuration. To do so, select
   the tax, click :icon:`fa-cog` :guilabel:`Actions`, and select :guilabel:`Duplicate`.

.. _localizations/philippines/taxes/atc:

ATC codes
~~~~~~~~~

ATC codes are essential for generating :ref:`BIR 2306 and 2307 <localizations/philippines/reports/bir2306_2307>`,
:ref:`localizations/philippines/reports/sawt_qap` reports. These codes ensure compliance with
regulatory requirements.

To configure a withholding tax, go to :menuselection:`Accounting --> Configuration --> Taxes`,
select the tax, and fill in the :guilabel:`Philippines ATC` (Alphanumeric Tax Code) field under the
:guilabel:`Philippines` tab.

.. _localizations/philippines/tax-reporting:

Reports
-------

.. _localizations/philippines/reports/2550q:

2550Q
~~~~~

The **BIR Form 2550Q** summarizes sales, purchases, output VAT, input VAT, and the resulting
VAT payable or refundable for the period.

To access it, navigate to :menuselection:`Accounting --> Reporting --> Tax Report`, click
:icon:`fa-book` :guilabel:`Report`, and select :guilabel:`2550Q (PH)`.

.. _localizations/philippines/reports/sawt_qap:

SAWT and QAP
~~~~~~~~~~~~

To access these reports, navigate to :menuselection:`Accounting --> Reporting --> Tax Report`,
click :icon:`fa-book` :guilabel:`Report`, and select :guilabel:`SAWT & QAP (PH)`.

* **Summary of Alphalist of Withholding Taxes (SAWT)**: Displays all customer invoices that have
  sales withholding taxes applied. This export is used as a supporting document for forms
  **1701Q**, **1701**, **1702Q**, and **1702**.
* **Quarterly Alphalist of Payees (QAP)**: Includes all vendor bills that have purchase
  withholding taxes applied. This export is used as a supporting document for forms **1601EQ** and
  **1604E**.

.. note::
   The generated file is based on the specific **period** selected in the calendar report filter.
   For example, while the **1601EQ** is a quarterly report, `.DAT` files are submitted monthly.
   Make sure to filter by :guilabel:`Month` and select the appropriate month before exporting.

Both SAWT and QAP reports can be exported in `.DAT` format, which is compatible with the BIR
:abbr:`Alpha (Alphalist Data Entry and Validation)` module. To do so, follow these steps:

#. Make sure to filter by the appropriate month.
#. On the report page, click the :icon:`fa-cog` :guilabel:`(gear)` icon and select :guilabel:`Export
   SAWT & QAP`.
#. In the :guilabel:`DAT Export Options` window, choose the relevant :guilabel:`Attachment For
   (e.g., 1601EQ)` and click :guilabel:`Export`.

.. _localizations/philippines/reports/slsp:

SLSP
~~~~

The **SLSP (Summary lists of sales and purchases)** is an electronic schedule required from
VAT‑registered taxpayers listing sales and purchase transactions.

To access it, navigate to :menuselection:`Accounting --> Reporting --> Summary Lists of Sales and
Purchases`.

- **Summary List of Sales (SLS)**: Detailed sales per customer with amounts and output VAT.
- **Summary List of Purchases (SLP)**: Detailed purchases per supplier with amounts and input VAT.

.. note::
   - The :guilabel:`Summary List of Purchases` report excludes imports by default. To include import
     transactions, click :icon:`fa-sliders` :guilabel:`Posted Entries` and select
     :guilabel:`Including Importations`.
   - The generated file is based on the specific **period** selected in the calendar report filter.
     For example, while the **2550Q** is a quarterly report, `.DAT` files are submitted monthly.
     Make sure to filter by :guilabel:`Month` and select the appropriate month before exporting.

SLS and SLP reports can be exported in `.DAT` format, which is compatible with the :abbr:`ReLiEf
(Reconciliation of Listings for Enforcement)` module. To do so, follow these steps:

#. Make sure to filter by the appropriate month.
#. On the report page, click the :icon:`fa-cog` :guilabel:`(gear)` icon and select :guilabel:`Export
   SLSP`.
#. In the :guilabel:`DAT Export Options` window, click :guilabel:`Export`.

.. _localizations/philippines/reports/bir2306_2307:

BIR 2306 & 2307
~~~~~~~~~~~~~~~

Odoo supports the generation of **BIR Form 2306** (Certificate of Final Tax Withheld at Source) and
**BIR Form 2307** (Certificate of Creditable Tax Withheld at Source) in latest BIR PDF format.

To access them, navigate to :menuselection:`Accounting --> Reporting --> Tax Report`, click
:icon:`fa-book` :guilabel:`Report`, and select :guilabel:`2306 & 2307`.

Based on the period filtered, Odoo displays the transactions subject to each :abbr:`EWHT (Expanded
Withholding Tax)` and :abbr:`FWHT (Final Withholding Tax)` grouped by ATC code per partner level.

To export the certificates into PDF:

#. Make sure to filter by the appropriate **Month** or **Quarter** using the calendar filter.
#. By default, Odoo exports certificates for all the partners. To select a partner, use the
   :guilabel:`Partners` filter.
#. Click the :guilabel:`PDF` button to export the BIR-compliant PDF certificate.

.. note::
   If the export contains multiple certificates, Odoo gathers them in a single ZIP file.

.. _localizations/philippines/company:

Company information
===================

To use all the features of this fiscal localization, the following fields are required on the
:doc:`company record </applications/general/companies>`:

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`,
  and :guilabel:`Country`.

  - In the :guilabel:`Street` field, enter the street name, number, and any additional address
    information.
  - In the :guilabel:`Street 2` field, enter the barangay.

- :guilabel:`Tax ID`: Taxpayer Identification Number (TIN) should follow the `NNN-NNN-NNN-NNNNN`
  format
- :guilabel:`Company Branch code` uses the last 3 to 5 digits of the :guilabel:`Tax ID`, or defaults
  to `000` if not provided.
- :guilabel:`RDO`: Revenue District Office code.
- :guilabel:`Phone`
- :guilabel:`Email`

.. _localizations/philippines/contacts:

Contacts
========

The Philippine localization utilizes specific fields on contact forms to generate
:abbr:`BIR (Bureau of Internal Revenue)` reports and files used for submission.

The :guilabel:`Tax ID` field is used to register the :abbr:`TIN (tax identification number)` for
both companies and individuals. Filling in this field is recommended to ensure the accuracy of
:ref:`tax reports <localizations/philippines/reports/slsp>`.

For individuals not associated with a company, use the following additional fields to identify
them:

- :guilabel:`First Name`
- :guilabel:`Middle Name`
- :guilabel:`Last Name`

.. _localizations/philippines/accounting:

Accounting
==========

.. _localizations/philippines/payments:

Payments by check
-----------------

The Philippines check print layout adheres to the **New Check Design Standards and Specifications**
(CICS OM No. 23-040).

To use check payments, :ref:`activate the check payment option
<accounting/pay-checks/activate-methods>`, then, in the :guilabel:`Check Layout` field, select
:guilabel:`Print Check - PH`.

When :ref:`paying a vendor bill by check <accounting/pay-checks/pay-bill-check>`, enter the check
number manually during the printing process to match the physical check stock.

.. image:: philippines/philippines-check-number.png
   :alt: check number log

.. seealso::
   :doc:`../../finance/accounting/payments/pay_checks`

.. _localizations/philippines/payment_providers:

Payment providers
-----------------

Odoo supports two payment providers available for the Philippines:
:doc:`../payment_providers/xendit` and :doc:`../payment_providers/asiapay`.
