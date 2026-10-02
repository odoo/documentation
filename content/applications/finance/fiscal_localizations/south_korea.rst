===========
South Korea
===========

.. _localizations/south_korea/modules:

Modules
=======

The following modules are :ref:`installed <general/install>` automatically with the South Korean
localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Republic of Korea - Accounting`
     - `l10n_kr`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`. This module
       includes the chart of accounts, taxes, fiscal positions, and the VAT reports for general and
       simplified taxpayers.
   * - :guilabel:`Republic of Korea - Accounting Reports`
     - `l10n_kr_reports`
     - This module includes the Balance Sheet and Profit and Loss reports, and the VAT returns for
       South Korea.
   * - :guilabel:`Republic of Korea - Sales`
     - `l10n_kr_sale`
     - This module adds the :ref:`proof of issuance <localizations/south_korea/proof_of_issuance>`
       to sales orders. It is installed automatically when the :guilabel:`Sales` app is installed.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :doc:`installed
   <../../general/apps_modules>`.

.. _localizations/south_korea/loc-overview:

Localization overview
=====================

The South Korean localization package ensures compliance with South Korean fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to South Korea's standards.

The South Korean localization package provides the following key features to ensure compliance
with local fiscal and accounting regulations:

- :ref:`Chart of accounts <localizations/south_korea/chart_of_accounts>`: a predefined structure
  based on the Korean Generally Accepted Accounting Principles (K-GAAP)
- :ref:`Reporting <localizations/south_korea/reporting>`
- :ref:`Taxes <localizations/south_korea/taxes>`: pre-configured VAT rates, including standard,
  zero-rated, and exempt options, as well as taxes for simplified taxpayers
- :ref:`Fiscal positions <localizations/south_korea/fiscal_positions>`: automated tax mapping for
  domestic and foreign customers and vendors

.. _localizations/south_korea/chart_of_accounts:

Chart of accounts
-----------------

The :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>` follows K-GAAP, and uses
six-digit account codes, organized in a parent-account hierarchy.

Fixed asset accounts are pre-configured with their depreciation and expense accounts. The following
:doc:`depreciation models <../accounting/vendor_bills/assets>` are also available: no depreciation,
and 5, 20, or 40 years of straight-line depreciation.

.. _localizations/south_korea/reporting:

Reporting
---------

The localization includes dedicated :ref:`Balance Sheet <accounting/reporting/balance-sheet>` and
:ref:`Profit and Loss <accounting/reporting/profit-and-loss>` reports that follow K-GAAP, based on
the :ref:`chart of accounts <localizations/south_korea/chart_of_accounts>`.

To access these reports, go to :menuselection:`Accounting --> Reporting` and select
:guilabel:`Balance Sheet` or :guilabel:`Profit and Loss`.

.. note::
   By default, the South Korean :guilabel:`(KR)` versions of these two reports are selected.

.. _localizations/south_korea/taxes:

Taxes
-----

The localization includes pre-configured :doc:`taxes <../accounting/taxes>`. To view them, go to
:menuselection:`Accounting --> Configuration --> Taxes`.

The taxes are designed to feed the :ref:`VAT reports
<localizations/south_korea/accounting/tax_report>`. Each tax is assigned to a tax grid, so that
amounts are automatically classified and totaled. The box in which an amount is reported also
depends on the :ref:`proof of issuance <localizations/south_korea/proof_of_issuance>` of the invoice
or bill.

.. _localizations/south_korea/taxes/sales:

Sales taxes
~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Tax name
     - When it applies
   * - :guilabel:`10%`
     - Standard taxable domestic sales
   * - :guilabel:`0%`
     - Zero-rated sales, such as direct exports and sales under a local letter of credit
   * - :guilabel:`Exempt`
     - VAT-exempt sales

.. _localizations/south_korea/taxes/purchases:

Purchase taxes
~~~~~~~~~~~~~~

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Tax name
     - When it applies
   * - :guilabel:`10%`
     - Standard taxable domestic purchases. The input VAT is deductible.
   * - :guilabel:`10% FA`
     - Purchases of fixed assets, such as machinery or vehicles, reported separately from other
       purchases. The input VAT is deductible.
   * - :guilabel:`10% ND`
     - Purchases for which the input VAT is not deductible, such as entertainment expenses. The VAT
       is added to the cost of the expense instead of being recorded as receivable.
   * - :guilabel:`10% FA ND`
     - Purchases of fixed assets for which the input VAT is not deductible, such as non-business
       passenger cars. The VAT is added to the cost of the asset.
   * - :guilabel:`0%`
     - Zero-rated purchases, such as purchases under a local letter of credit
   * - :guilabel:`Exempt`
     - Purchases of tax-exempt goods, supported by a tax-exempt invoice
   * - :guilabel:`10% IM (Tax Only)`
     - Import tax invoices issued by customs. Only the 10% VAT is recorded as payable, as the base
       amount is deducted from the total of the bill.
   * - :guilabel:`4% DP`
     - **Deemed input tax**: purchases of exempt agricultural, livestock, or fishery products used
       to supply taxable goods or services. The deductible input VAT is extracted from the price at
       the rate of 4/104.
   * - :guilabel:`3% RP`
     - Purchases of recycled waste or used goods from non-business persons. The deductible input
       VAT is extracted from the price at the rate of 3/103.

.. _localizations/south_korea/taxes/purchases/deemed_input:

Deemed input tax at another rate
********************************

The :guilabel:`4% DP` tax is provided as a sample for deemed input tax. To create a deemed input
tax at another statutory rate, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Taxes`.
#. Open the :guilabel:`4% DP` tax.
#. Click the :icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` icon and select
   :guilabel:`Duplicate`.
#. Update the :guilabel:`Tax Name` and the :guilabel:`Amount`, for example, `6` for a 6/106 rate.
#. Keep the tax grids unchanged, so that the amounts are reported with the other deemed input
   purchases.

.. _localizations/south_korea/taxes/simplified:

Taxes for simplified taxpayers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A **simplified taxpayer** calculates VAT on the total price (supply value and
VAT), using the value-added rate of their industry. The following taxes are inactive by default. To
use them, :ref:`activate <taxes/list_activation>` them from the list of taxes.

.. list-table::
   :header-rows: 1
   :widths: 20 15 65

   * - Tax name
     - Value-added rate
     - Industry
   * - :guilabel:`10% RETAIL`
     - 15%
     - Retail, restaurants, and similar businesses
   * - :guilabel:`10% MFG`
     - 20%
     - Manufacturing, agriculture, forestry, and fishing
   * - :guilabel:`10% STAY`
     - 25%
     - Accommodation
   * - :guilabel:`10% CONST`
     - 30%
     - Construction, information and communications, and similar businesses
   * - :guilabel:`10% PPT`
     - 40%
     - Real estate rental, finance, and similar businesses

Each of these sales taxes computes 10% of the supply value. Only the share that corresponds to the
value-added rate is recorded as VAT payable, and the rest is recorded as revenue.

.. example::
   For a retail sale with a supply value of 100,000 won, the :guilabel:`10% RETAIL` tax computes
   10,000 won. The VAT payable is 1,650 won (110,000 × 15% × 10%), and the remaining 8,350 won is
   recorded as revenue.

For purchases, use the :guilabel:`10% Simplified` tax. A simplified taxpayer can only deduct 0.5%
of the total price of purchases supported by a tax invoice, a credit card slip, or a cash receipt.
This tax records 5.5% of the VAT as deductible, which equals 0.5% of the total price. The remaining
VAT is added to the cost of the expense or asset.

.. note::
   - Simplified taxpayers must use :guilabel:`10% Simplified` for purchases of fixed assets, instead
     of :guilabel:`10% FA`.
   - For purchases with non-deductible input VAT, continue using :guilabel:`10% ND` or
     :guilabel:`10% FA ND`.
   - Simplified taxpayers must also use the :ref:`VAT Return (Simplified Taxpayer)
     <localizations/south_korea/accounting/tax_report>`.

.. _localizations/south_korea/fiscal_positions:

Fiscal positions
----------------

The following :doc:`fiscal positions <../accounting/taxes/fiscal_positions>` are available:

.. list-table::
   :header-rows: 1
   :widths: 25 20 55

   * - Fiscal position
     - Applied automatically
     - Use
   * - :guilabel:`Domestic`
     - Yes, for South Korean partners
     - Standard domestic transactions. The fixed asset, non-deductible, deemed input, and recycled
       purchase taxes are only available with this fiscal position.
   * - :guilabel:`Overseas (Export/Import)`
     - Yes, for foreign partners
     - Exports and imports. Sales taxes are set to :guilabel:`0%`, and purchase taxes to
       :guilabel:`Exempt`. The :guilabel:`10% IM (Tax Only)` tax is available for import tax
       invoices.
   * - :guilabel:`Indirect Export`
     - No
     - Zero-rated domestic transactions, such as supplies under a local letter of credit or a
       purchase confirmation. Taxes are set to :guilabel:`0%`.
   * - :guilabel:`Domestic Exempt`
     - No
     - VAT-exempt domestic transactions. Taxes are set to :guilabel:`Exempt`.

.. _localizations/south_korea/contacts:

Contacts
========

To configure contact information, open the :doc:`Contacts <../../essentials/contacts>` app, search
for the contact, and access its form. Then, configure the following fields:

- :guilabel:`Name`
- :guilabel:`Phone`
- :guilabel:`Email`
- :guilabel:`Address`: When the :guilabel:`Country` is South Korea, the address fields follow the
  Korean address format, in the following order:

  - :guilabel:`Country`
  - :guilabel:`State`: The province or metropolitan city (-do).
  - :guilabel:`City`: The city, county, or district (-si, -gun, -gu), followed by the town or
    township (-eup, -myeon), if any.
  - :guilabel:`Street 2`: The road name and building number.
  - :guilabel:`Street`: The apartment or building name, and the unit details, such as the building
    (-dong) and floor.
  - :guilabel:`Zip Code`

- :guilabel:`BRN`: Business registration number, the 10-digit number issued by the National Tax
  Service to identify a business for tax purposes, for example, `123-45-67890`.

In the :guilabel:`Invoicing` tab, under the :guilabel:`Customer Invoices` section, select the
contact's default :ref:`Proof of Issuance <localizations/south_korea/proof_of_issuance>`. It
automatically applies to their sales orders, invoices, and bills.

.. _localizations/south_korea/accounting:

Accounting
==========

.. _localizations/south_korea/proof_of_issuance:

Proof of issuance
-----------------

A **proof of issuance** is the government-verified document that supports a
transaction, such as a tax invoice or a cash receipt. It determines in which box of the :ref:`VAT
report <localizations/south_korea/accounting/tax_report>` the transaction is reported.

The :guilabel:`Proof of Issuance` field is displayed on invoices and bills, and is filled in by
default from the :ref:`contact <localizations/south_korea/contacts>`. The following options are
available:

- :guilabel:`Tax Invoice`
- :guilabel:`Tax-exempt Invoice`
- :guilabel:`Credit Card`
- :guilabel:`Cash Receipt`
- :guilabel:`Other`
- :guilabel:`Tax Invoice issued by Purchaser`: only available on invoices and bills, not as a
  default on contacts.

In the :guilabel:`Other Info` tab of an invoice or bill, enter the :guilabel:`e-Document Number`:
the approval number given by HomeTax or the payment provider. It has 24 digits for e-tax invoices,
and 9 digits for cash receipts.

.. note::
   Invoices or bills without proof of issuance cannot be reported in the correct VAT box. In this
   case, the :ref:`VAT report <localizations/south_korea/accounting/tax_report>` displays a warning
   banner. Click the link within the warning to display the list of unassigned documents.

.. _localizations/south_korea/accounting/tax_report:

Tax report
----------

To access the South Korean VAT reports, go to :menuselection:`Accounting --> Reporting --> Tax
Report`, and select one of the following:

- :guilabel:`VAT Report - General Taxpayer`
- :guilabel:`VAT Report - Simplified Taxpayer`

.. note::
   The reports are automatically filled in from the taxes and tax grids applied to transactions, and
   the total lines are calculated. Amounts that cannot be computed must be entered manually by
   clicking the :icon:`fa-pencil` :guilabel:`(pencil)` icon next to the amount.

Each report has its own :doc:`tax return <../accounting/reporting/tax_returns>`:

- :guilabel:`VAT Return`: for general taxpayers, quarterly by default. It is active by default.
- :guilabel:`VAT Return (Simplified Taxpayer)`: for simplified taxpayers, yearly by default. It is
  inactive by default.

To use the simplified taxpayer return instead of the general one, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Settings`.
#. In the :guilabel:`Tax Return Periodicity` section, click :icon:`east` :guilabel:`Configure your
   tax returns`.
#. Enable the :guilabel:`Active` toggle for :guilabel:`VAT Return (Simplified Taxpayer)` and disable
   the one for :guilabel:`VAT Return`.

.. _localizations/south_korea/payment_providers:

Payment providers
-----------------

The :doc:`Toss Payments <../payment_providers/tosspayments>` payment provider is available for
South Korea. It allows businesses to accept a wide variety of local payment methods online.

.. _localizations/south_korea/sales:

Sales
=====

With the Sales app installed, the :ref:`Proof of Issuance
<localizations/south_korea/proof_of_issuance>` field is also displayed in the :guilabel:`Other Info`
tab of sales orders. It is filled in by default from the :ref:`contact
<localizations/south_korea/contacts>`, and copied to the invoices created from the order.

When several sales orders are invoiced at once, orders with different proofs of issuance are
invoiced separately, as they are reported in different boxes of the :ref:`VAT report
<localizations/south_korea/accounting/tax_report>`.
