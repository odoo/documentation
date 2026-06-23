========
Thailand
========

.. |WHT| replace:: :abbr:`WHT (withholding taxes)`

.. _localizations/thailand/modules:

Modules
=======

The following modules related to the Thailand localization are available:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Thailand - Accounting`
     - `l10n_th`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>`
   * - :guilabel:`Thailand - Accounting Reports`
     - `l10n_th_reports`
     - Thailand accounting reports

.. note::
   The localization's core modules are installed automatically with the localization. The rest can
   be manually :doc:`installed </applications/general/apps_modules>`.

.. _localizations/thailand/loc-overview:

Localization overview
=====================

The Thai localization package ensures compliance with Thai fiscal and accounting regulations. It
includes tools for managing taxes, fiscal positions, reporting, and a predefined chart of accounts
tailored to Thailand's standards.

The Thai localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Thai
  accounting standards
- :doc:`../accounting/taxes`: pre-configured tax rates, including standard VAT, zero-rated, and
  exempt options
- :ref:`localizations/thailand/fiscal-positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`Withholding taxes <localizations/thailand/withholding-taxes>`: predefined withholding tax
  rules for applicable service categories
- :ref:`localizations/thailand/tax-report`: detailed overview of your net tax liability

.. _localizations/thailand/fiscal-positions:

Fiscal positions
----------------

:doc:`../accounting/taxes/fiscal_positions` enable automatic mapping of taxes and accounts. In
Thailand, they are primarily used to differentiate between Domestic, BOI (Board of Investment), and
International transactions.

They can be :ref:`edited or created <fiscal_positions/configuration>`, with the Thai localization
typically including pre-defined positions such as:

- :guilabel:`Domestic`: For standard 7% VAT transactions within Thailand.
- :guilabel:`VAT Exempt`: For local entities or products that are not subject to VAT.
- :guilabel:`Export/Import`: For transactions outside of Thailand (0% VAT).

Fiscal positions can be applied to:

- :ref:`Taxes <fiscal_positions/tax-mapping>`:

  - BOI Companies: For companies under the Board of Investment, the standard 7% VAT is often mapped
    to 0% VAT.
  - International Transactions: Maps the standard VAT 7% to VAT 0% (Export) or VAT 0% (Import).

- :ref:`Specific customers or vendors <accounting/fiscal_positions/partner>`, such as a
  BOI-registered company.
- :doc:`../accounting/taxes/retention`: Since |WHT| is only applicable to specific services, the
  fiscal position can be set to :ref:`Detect Automatically <fiscal_positions/automatic>` based on
  the :guilabel:`VAT` or the :guilabel:`Country` of the partner.

  .. tip::
     For Thai :ref:`branches <accounting/branches>`, ensure the :guilabel:`Federal State` or
     :guilabel:`Zip Range` is specified if local tax variations apply.

.. _localizations/thailand/withholding-taxes:

Withholding taxes (WHT)
-----------------------

:doc:`Withholding tax <../accounting/taxes/retention>` follows a deduction at source logic. When
paying a vendor for services (such as rent or consulting), a percentage of the payment is withheld
to be paid directly to the `Revenue Department <https://www.rd.go.th/english/42379.html>`_.

.. _localizations/thailand/withholding-tax-configuration:

Configuration
~~~~~~~~~~~~~

The Thailand localization provides default |WHT| rates (1%, 2%, 3%, 5%). When :ref:`configuring
<accounting/withholding-taxes/configuration>` |WHT|, ensure the following parameters are set:

- :guilabel:`Tax Scope`: Purchases (for vendor bills)
- In the :guilabel:`Advanced Options` tab:

  - :guilabel:`Tax Group`: Select one of the :guilabel:`WHT` taxes.
  - :guilabel:`Included in Price`: Disable the option.

.. _localizations/thailand/wht-vendor-bills:

Vendor bills
~~~~~~~~~~~~

When :ref:`creating a vendor bill <accounting/vendor_bills/creation>` for a service, select the
:guilabel:`7%` VAT (if applicable) and the specific :guilabel:`WH` withholding tax (e.g.,
:guilabel:`3% WH`). |WHT| and VAT are both calculated on the untaxed amount.


.. important::
   Withholding tax is subtracted from the untaxed amount before VAT is added.

.. _localizations/thailand/reporting:

Reporting
~~~~~~~~~

:ref:`Tax Grids <accounting/tax-returns/tax-grids>` are used to ensure |WHT| lines appear in the
correct :ref:`CSV exports for the Revenue Department <localizations/thailand/pnd-tax-report>`:

- :guilabel:`PND3`: Applicable for individuals or natural persons.
- :guilabel:`PND53`: Applicable for legal entities or corporations.

.. _localizations/thailand/headquarter-branch-number:

Headquarters/branch number
--------------------------

To configure headquarters and branch numbers, go to the Contacts app, open the company's contact
form, and, in the :guilabel:`Sales & Purchase` tab, locate the :guilabel:`Company ID` field in the
:guilabel:`Misc` section:

- Branch: Add the 5-digit branch number (e.g., 00001).
- Headquarters: Leave the :guilabel:`Company ID` field blank.

.. note::
   The headquarters or branch number is automatically included in the :ref:`Tax Invoice
   <localizations/thailand/tax-invoice>` PDF and the :ref:`PND tax report
   <localizations/thailand/pnd-tax-report>` exports.

.. _localizations/thailand/tax-report:

Tax report
==========

XLSX files can be generated to submit VAT to the Revenue Department.

.. _localizations/thailand/sales-purchase-tax-report:

Sales and purchase tax report
-----------------------------

To generate a sales and purchase tax report, follow these steps:

#. Go to :menuselection:`Accounting --> Reporting --> Tax Report`.
#. Click :icon:`fa-calendar` :guilabel:`(calendar)` to use the date selector and choose a period.
#. Click the :icon:`fa-cog` :guilabel:`(gear)` icon, and select :guilabel:`Sales Tax Report (xlsx)`
   or :guilabel:`Purchase Tax Report (xlsx)`, respectively.

.. _localizations/thailand/pnd-tax-report:

Withholding PND tax report
--------------------------

:guilabel:`PND` report data displays the summarized amounts of the applicable withholding corporate
income tax returns (domestic) from vendor bills. It allows users to generate a CSV file of bills to
upload to the `RDprep for Thailand e-Filling application <https://efiling.rd.go.th/rd-cms/>`_.

.. note::
   Withholding corporate income tax returns (domestic) is the tax used in case the company has
   withheld the tax from **Personal (PND3)** or **Corporate (PND53)** services provided, such as
   rental, hiring, transportation, insurance, management fee, consulting, etc.

To generate a :guilabel:`PND` CSV file, follow these steps:

#. Go to :menuselection:`Accounting --> Reporting --> Tax Report`.
#. Click :icon:`fa-calendar` :guilabel:`(calendar)` to use the date selector and choose a period.
#. Click :icon:`fa-book` :guilabel:`Report:` and select :guilabel:`PND53 (TH)` or :guilabel:`PND3
   (TH)`, respectively.
#. Click the :icon:`fa-cog` :guilabel:`(gear)` icon, and select :guilabel:`PND53` or
   :guilabel:`PND3`, respectively.

The CSV file listing all vendor bill lines with the applicable withholding tax is then generated.

.. warning::
   Odoo cannot generate the PND, PDF report, or **withholding tax certificate** directly. The
   generated :file:`Tax Report PND3.csv` and :file:`Tax Report PND53.csv` files must be exported
   to an external tool to convert them into a **withholding PND** report or a **PDF** file.

.. _localizations/thailand/tax-invoice:

Tax invoice
===========

To print a **tax invoice**, click :guilabel:`Print` on the relevant invoice form. To print regular
invoices, or :guilabel:`Commercial invoices`, click the :icon:`fa-cog` :guilabel:`(gear)`
icon, select :icon:`fa-print` :guilabel:`Print`, then select :guilabel:`Commercial Invoice`.

.. note::
   The **tax invoice PDF** report can be generated through the Invoicing app.

.. _localizations/thailand/accounting:

Accounting
==========

.. _localizations/thailand/promptpay-qrcode:

PromptPay QR code
-----------------

The **PromptPay QR code** can be added to invoices to enable customers to pay their bills using the
PromptPay-supported bank mobile app. The QR code is generated based on the **invoice amount** and
one of the following **merchant information**:

- :guilabel:`Ewallet` ID
- :guilabel:`Merchant Tax ID`
- :guilabel:`Mobile Number`

.. _localizations/thailand/promptpay-configuration:

Bank account configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~

To configure a PromptPay QR bank account, follow these steps:

#. Go to :menuselection:`Accounting --> Configuration --> Settings` and scroll down to the
   :guilabel:`Customer Payments` section to enable the :guilabel:`QR Codes` option.
#. Go to :menuselection:`Contacts --> Configuration --> Bank Accounts` and the relevant Thai bank
   account.
#. Make sure the :guilabel:`Account Holder's City` is filled in, as it's mandatory for PromptPay
   activation.
#. In the :guilabel:`EMV QR Configuration` section, set the following:

   - :guilabel:`Proxy Type`: Select :guilabel:`Mobile Number`, :guilabel:`Merchant Tax ID`, or
     :guilabel:`E-wallet ID`.
   - :guilabel:`Proxy Value`: Enter the corresponding ID.

.. important::
   The :guilabel:`Include Reference` checkbox  is not supported for PromptPay QR codes.

.. seealso::
   :doc:`../accounting/bank`

.. _localizations/thailand/promptpay-bank-journal:

Bank journal configuration
~~~~~~~~~~~~~~~~~~~~~~~~~~

To enable the QR code on invoices, the :ref:`bank journal <accounting/journals/bank-cash-cc>` must
be properly linked to the :ref:`bank account <localizations/thailand/promptpay-configuration>`. To
do so:

#. Navigate to :menuselection:`Accounting --> Configuration --> Journals`.
#. Open the relevant :guilabel:`Bank` journal.
#. In the :guilabel:`Journal Entries` tab, ensure the :guilabel:`Bank Account Number` and
   :guilabel:`Bank` fields are completed.

.. _localizations/thailand/invoice-qr-code:

PromptPay QR code on invoices
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To display the PromptPay QR code on a customer invoice:

#. :ref:`Create a new invoice <accounting/invoice/creation>`.
#. In the :guilabel:`Other Info` tab, set the :guilabel:`Payment QR-code` field to :guilabel:`EMV
   Merchant-Presented QR-code`.
#. Ensure the :guilabel:`Recipient Bank` field matches the :ref:`bank account
   <localizations/thailand/promptpay-configuration>` configured for PromptPay.

.. note::
   The recipient bank information is used to generate the dynamic QR code based on the invoice
   total.
