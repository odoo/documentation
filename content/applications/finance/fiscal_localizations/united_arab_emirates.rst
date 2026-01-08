====================
United Arab Emirates
====================

.. _localizations/uae/modules:

Modules
=======

The following modules related to the United Arab Emirates localization are available:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`United Arab Emirates - Accounting`
     - `l10n_ae`
     - Default :doc:`fiscal localization package </applications/finance/fiscal_localizations>` for
       the UAE.
   * - :guilabel:`United Arab Emirates - Accounting Reports`
     - `l10n_ae_reports`
     - Adds VAT and corporate tax reporting capabilities.
   * - :guilabel:`United Arab Emirates - Point of Sale`
     - `l10n_ae_pos`
     - Adds local compliance behavior for PoS receipts.

.. note::
   The localization's core modules are installed automatically with the localization. The rest can
   be manually :doc:`installed </applications/general/apps_modules>`.

.. seealso::
   :doc:`United Arab Emirates Payroll localization documentation <../../hr/payroll/payroll_localizations/united_arab_emirates>`

.. _localizations/uae/loc-review:

Localization overview
=====================

The UAE fiscal localisation provides a fully configured accounting setup aligned with national VAT
and corporate tax regulations. It includes a localised chart of accounts, VAT-compliant tax groups,
standard journals, fiscal year configurations, and reporting features that ensure accuracy and
compliance with the Federal Tax Authority (FTA).

The UAE localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :ref:`Chart of accounts <localizations/uae/coa>`: a predefined structure aligned with UEA
  accounting standards
- :ref:`Taxes <localizations/uae/taxes>`: preconfigured tax groups and templates based on UAE VAT
  rules
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments to handle local and
  cross-border transactions
- :ref:`VAT return <localizations/uae/tax-return>`: structured according to the UAE VAT return
  format, as issued by the :abbr:`FTA (Federal Tax Authority)`
- :ref:`Corporate Tax Report <localizations/uae/corporate-tax-report>`: structured according to the
  UAE Corporate Tax Report, as issued by the :abbr:`FTA (Federal Tax Authority)`

.. _localizations/uae/coa:

Chart of accounts
-----------------

The UAE :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` is aligned with
:abbr:`IFRS (International Financial Reporting Standards)` and :abbr:`FTA (Federal Tax Authority)`
tax requirements. This includes classified accounts for assets, liabilities, equity, income, and
expenses, as well as separate accounts for VAT payable and VAT receivable.

This structure ensures compatibility with UAE reporting obligations, VAT, and corporate income tax
filings.

.. _localizations/uae/taxes:

Taxes
-----

The UAE localization includes preconfigured VAT rates and :doc:`taxes <../accounting/taxes>` as
defined by the :abbr:`FTA (Federal Tax Authority)`:

- | Standard VAT (5%): The prevailing VAT rate applied to most taxable goods and services supplied
    within the UAE.
  | The supplier charges 5% VAT on the sale (Output VAT). VAT-registered businesses may generally
    recover the VAT paid on eligible business purchases (Input VAT).

  .. example::
     Most commercial sales, retail goods, telecommunication services, non-exempt private education,
     and non-exempt private healthcare.

- | Zero-Rated VAT (0%): Taxable supplies on which VAT is applied at a rate of 0%.
  | No VAT is collected on the sale, but the supplier remains fully entitled to recover input VAT
    related to making these supplies.

  .. example::
     - Exports of goods and services (subject to qualifying conditions)
     - International transport and related services
     - Designated sectors such as specific healthcare and education services
     - First supply of residential property (subject to conditions)

- | Exempt VAT: Supplies that fall outside the taxable category and are not subject to VAT.
  | The supplier does not charge VAT and cannot recover input VAT on costs related to exempt
    activities.

  .. example::
     - Financial services: Interest on loans, bank account operations, and life insurance (when no
       explicit fee is charged).
     - Local passenger transport: Taxis, buses, metro services, and domestic flights within the UAE.

- | Import VAT: VAT that is applied to goods imported into the UAE.
  | Import VAT is recorded at the applicable rate (generally 5%). In UAE VAT reporting, only the VAT
    amount is declared; the import base amount is not required in the tax report.
  | Applied when recording customs-import transactions or imports recognized through the VAT return.

- | Out of Scope: Transactions that fall outside the scope of UAE VAT legislation.

  .. example::
     - Transactions entirely outside the UAE
     - Internal accounting adjustments
     - Certain government-mandated transfers

  .. note::
     These taxes can be applied directly to products or managed dynamically through fiscal
     positions.

.. _localizations/uae/reverse-charge-mechanism:

Reverse charge mechanism (RCM)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Description: Mechanism that transfers the obligation to account for VAT from the non-resident
  supplier to the UAE VAT-registered recipient.
- Mechanism: The recipient declares VAT as both output VAT and input VAT in the VAT return. This
  typically results in a net-zero impact when fully recoverable.
- Application: Commonly used for imported services and cross-border B2B transactions where the
  supplier has no UAE VAT registration.

.. _localizations/uae/tax-return:

VAT return (VAT201)
-------------------

The UAE :ref:`VAT Return report <accounting/tax-returns/vat-report>` includes:

- Output VAT
- Input VAT
- Reverse charge VAT
- Zero-rated and exempt sales

 .. note::
    The report structure follows the official :abbr:`FTA (Federal Tax Authority)` format and can
    be exported in both Excel and PDF formats for manual submission.

.. _localizations/uae/corporate-tax-report:

Corporate tax report
--------------------

The UAE Corporate Tax Report helps companies prepare for compliance with local corporate tax
regulations. The report is found under :menuselection:`Accounting --> Reporting --> Corporate Tax
Report` and includes:

- Net profit
- Exempt income
- Allowable deductions
- Adjustments for non-deductible (disallowed) expenses
- Corporate tax amount

As part of this report, users can set :ref:`exempt income
<localizations/uae/exempt-income-accounts>`, :ref:`allowable deductions
<localizations/uae/allowable-deductions-accounts>`, and :ref:`disallowed expenses accounts
<localizations/uae/disallowed-expenses>`.

.. important::
   No default fiscal categories, disallowed expenses, allowable deduction accounts, or exempt income
   accounts are configured. Users must classify them manually according to their tax situation.

.. _localizations/uae/exempt-income-accounts:

Exempt income accounts
~~~~~~~~~~~~~~~~~~~~~~

Exempt income generally refers to revenue that is not subject to corporate tax under UAE rules.
Examples may include:

- Dividends received from qualifying shareholdings
- Capital gains on the sale of qualifying shares

To classify exempt income, navigate to the :doc:`chart of accounts
<../accounting/get_started/chart_of_accounts>`, open the relevant account, and assign the tag
:guilabel:`Corporate Tax Report – Exempted Income Accounts`. Tagging these accounts ensures that
exempt income is reported accurately without being included in the taxable base.

.. _localizations/uae/allowable-deductions-accounts:

Allowable deductions accounts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allowable deductions are expenses that are incurred solely for business purposes. Examples
include:

- Employee salaries and benefits
- Office rent, utilities, and professional services

To classify allowable deductions, navigate to the :doc:`chart of accounts
<../accounting/get_started/chart_of_accounts>`, open the relevant expense account, and assign the
tag :guilabel:`Corporate Tax Report – Allowable Deductions Accounts`. Tagging these accounts ensures
that they effectively reduce taxable profits.

.. _localizations/uae/disallowed-expenses:

Disallowed expenses
~~~~~~~~~~~~~~~~~~~

Some expenses are not deductible for corporate tax purposes. Examples include:

- Fines and penalties (e.g., traffic or administrative violations)
- Non-business or personal expenses
- Excessive entertainment costs beyond permitted limits
- Certain related-party costs that do not meet transfer-pricing requirements

To configure these expenses, navigate to the :doc:`chart of accounts
<../accounting/get_started/chart_of_accounts>`, open the relevant account, and assign a fiscal
category. Then, in the :guilabel:`Fiscal Rates` tab, configure the start date and the fiscal rate.

.. _localizations/uae/automatic-currency-rates:

Automatic currency rates
------------------------

The UAE localization includes automatic synchronization of foreign :ref:`currency rates
<multi-currency/config-rates>` through a built-in connection with the Central Bank of the UAE.
Exchange rates are retrieved :ref:`automatically <multi-currency/automatic-update>` and applied
across transactions when the :guilabel:`Automatic Currency Rates` option is enabled.

.. note::
   Rates are updated automatically, but can also be :ref:`manually updated
   <multi-currency/manual-update>` when necessary.

.. _localizations/uae/invoicing-language:

Invoicing language
==================

Invoices can be issued in different languages to meet regional or customer-specific requirements at
two levels:

- Customer level: To assign a preferred language to a customer, go to :menuselection:`Accounting -->
  Customers --> Customers` or :menuselection:`Point of Sale --> Orders --> Customers`, and open the
  relevant customer form.  In the :guilabel:`Language` field, update the language preference. All
  documents for that customer are then automatically generated in the selected language.
- Company level: To add Arabic as a secondary language to meet business needs:

  - For :guilabel:`Tax Invoices`: Go to :menuselection:`Accounting --> Configuration --> Settings`,
    in the :guilabel:`Customer Invoices` section.
  - For Point of Sale receipts: Go to :menuselection:`Point of Sale --> Configuration --> Settings`,
    and navigate to the :guilabel:`Bills & Receipts` section.

  Then, enable the :guilabel:`Gulf Cooperation Council Format` option, and :guilabel:`Save`.

.. _localizations/uae/invoice-types:

Invoice types
=============

The type of invoice to be issued depends on the following criteria:

- :guilabel:`Tax Invoices (B2B)`: A :guilabel:`Tax Invoice`, used for business-to-business
  transactions, contains all the details required for VAT recovery, including the supplier and
  customer legal names, addresses, :abbr:`TRN (Tax Registration Number)` numbers (where applicable),
  itemized VAT amounts, and total amounts. This is the standard document required when a customer
  intends to reclaim VAT.
- :guilabel:`Simplified Tax Invoices (B2C)`: A :guilabel:`Simplified Tax Invoice` is primarily
  used for business-to-consumer (B2C) transactions, where the customer is not expected to reclaim
  VAT. It contains reduced customer information (customer :abbr:`TRN (Tax Registration Number)` is
  not required), focusing instead on supplier details, VAT charged, and the total amount payable.

.. important::
   A :guilabel:`Simplified Tax Invoice` is still a legally valid tax invoice under VAT law.
