=====
Japan
=====

.. _localizations/japan/modules:

Modules
=======

The following modules are :ref:`installed <general/install>` automatically with the Japanese
localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Japan - Accounting`
     - `l10n_jp`
     - Includes the Japanese consumption tax (JCT) and fiscal localization package.
   * - :guilabel:`Japan - Accounting Reports`
     - `l10n_jp_reports`
     - Includes the accounting reports for Japan, such as the consumption tax returns.
   * - :guilabel:`Japan - Zengin Payment`
     - `l10n_jp_zengin`
     - Enables the generation of Zengin-compliant files to send to your bank in order to push a set
       of payments.

Additionally, the following module can be manually :ref:`installed <general/install>`:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Japan - UBL PINT`
     - `l10n_jp_ubl_pint`
     - Includes the UBL PINT e-invoicing format, based on the Peppol International (PINT) model for
       Billing.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :doc:`installed
   <../../general/apps_modules>`.

.. _localizations/japan/loc-overview:

Localization overview
=====================

The Japanese localization package supports compliance with Japanese laws, such as the consumption
tax (JCT), and accounting standards, and helps businesses operate in line with local standards and
business practices.

The Japanese localization package provides the following key features:

- :ref:`Consumption tax filing <localizations/japan/accounting/tax-report>`: pre-configured sales
  and purchase taxes, including the deduction rates of the :ref:`transition period for non-qualified
  invoices <localizations/japan/accounting/qualified-invoice-transition>`, and consumption tax
  returns
- :ref:`Qualified invoices <localizations/japan/accounting/qualified-invoice>`: registration number
  printed on invoices and other documents
- :ref:`Zengin <localizations/japan/accounting/zengin>`: bank statement import and creation of
  payment instruction files
- :doc:`../accounting/get_started/chart_of_accounts`: accounts used in the major accounting
  standards, based on the codes of the National Tax Agency
- :doc:`Taxes <../accounting/taxes>`: pre-configured tax rates, including standard VAT, zero-rated,
  and exempt options

.. _localizations/japan/company-and-contacts:

Company and contacts
====================

To configure your company, open the Settings app, and in the :guilabel:`Companies` section, click
:guilabel:`Update Info`.

- :guilabel:`Name`
- :guilabel:`Address`, including the :guilabel:`City`, :guilabel:`State`, :guilabel:`Zip Code`, and
  :guilabel:`Country`
- :guilabel:`Phone`
- :guilabel:`Email`
- :guilabel:`Tax ID`: The qualified invoice issuer ID (if any), which is `T` followed by 13 digits.
  It is printed on invoices and other documents.

.. _localizations/japan/accounting:

Accounting
==========

.. _localizations/japan/accounting/qualified-invoice:

Qualified invoices
------------------

A qualified invoice (適格請求書) is an invoice that contains the information required by the Japanese
qualified invoice system, including the issuer's registration number. Buyers can only deduct the
full consumption tax paid on a purchase if the vendor's invoice is a qualified invoice. Only
businesses registered with the National Tax Agency as qualified invoice issuers can issue them.

If your company is a registered qualified invoice issuer, enter your :ref:`Tax ID
<localizations/japan/company-and-contacts>`. The number is then printed
on invoices and other documents, as required for qualified invoices.

When an invoice is received from a vendor that is not a qualified invoice issuer, the deductible
share of the tax depends on the transaction date. :ref:`Check which taxes to select
<localizations/japan/accounting/qualified-invoice-transition>`.

.. _localizations/japan/accounting/tax-report:

Consumption tax filing
----------------------

The following tax returns are installed and active:

.. list-table::
   :header-rows: 1

   * - Tax return
     - Sales calculation
   * - :guilabel:`JCT Return (Sales Accumulation) (JP)`
     - Accumulation method (sum of the tax amounts on each invoice)
   * - :guilabel:`JCT Return (Sales Deduction) (JP)`
     - Deduction method (tax calculated from the tax-inclusive total)

In most cases, no further configuration is needed. Select the appropriate tax in the
:guilabel:`Taxes` column of each transaction line, then select the tax return that matches your
calculation method to display a draft of your return.

Additional taxes or tax returns must be activated for imported purchases, the :ref:`itemized
method <localizations/japan/accounting/itemized>`, and :ref:`simplified taxpayers
<localizations/japan/accounting/simplified-tax-payer>`. To activate a tax, go to
:menuselection:`Accounting --> Configuration --> Taxes`.

.. _localizations/japan/accounting/general-tax-payer:

General taxpayer
~~~~~~~~~~~~~~~~

Both the accumulation method and the deduction method are supported for the sales of general
taxpayers.

Go to :menuselection:`Accounting --> Reporting --> Tax Report` and select the tax return that
matches your calculation method. The tax return consists of Schedule 1-3 (tax base amounts) and
Schedule 2-3 (deductible purchase tax amounts).

- :guilabel:`JCT Return (Sales Accumulation) (JP)`: The accumulation method is applied to
  purchases.
- :guilabel:`JCT Return (Sales Deduction) (JP)`: Both the accumulation method and the deduction
  method are calculated for purchases, and the one with the larger deduction is applied
  automatically.

.. _localizations/japan/accounting/itemized:

Itemized method
***************

The itemized method calculates the deductible tax amount by managing expenses under three
purposes: taxable sales, non-taxable sales, and both.

To use the itemized method, go to :menuselection:`Accounting --> Configuration --> Taxes`, activate
the following taxes, and select the one matching the purpose of each purchase line:

- `10% Taxable` and `8% Taxable`: Purchases exclusively for taxable sales
- `10% Taxable + Non Taxable` and `8% Taxable + Non Taxable`: Purchases common to taxable and
  non-taxable sales

Taxes are also available for purchases from vendors that are not qualified invoice issuers, for each
deductible share of the :ref:`transition period
<localizations/japan/accounting/qualified-invoice-transition>`, such as `10% NQI 80% Taxable`
and `10% NQI 80% Taxable and Non Taxable`. Activate them as needed.

The standard 10% and 8% purchase taxes are counted neither as purchases exclusively for taxable
sales nor as common purchases. They are not deductible under the itemized method, as they are
treated as purchases exclusively for non-taxable sales. It is recommended to deactivate them to
prevent accidental use.

.. _localizations/japan/accounting/simplified-tax-payer:

Simplified taxpayer
~~~~~~~~~~~~~~~~~~~

Simplified taxpayers use different sales taxes for each business category (`Type 1` to `Type 6`).

#. Go to :menuselection:`Accounting --> Configuration --> Taxes` and activate the sales taxes that
   match your business category (e.g., `10% Type 5` and `8% Type 5`), as well as `0% ST` and
   `0% EXEMPT ST`.
#. Activate the :ref:`developer mode <developer-mode>`, and go to :menuselection:`Accounting -->
   Reporting --> Tax Report`.
#. Click the :icon:`add` :guilabel:`(add)` icon, then the :icon:`fa-toggle-off`
   :guilabel:`(toggle-off)` icon to enable :guilabel:`Schedule 4-3` (tax base amounts) and
   :guilabel:`Schedule 5-3` (deductible purchase tax amounts) for simplified taxpayers.
#. Click :guilabel:`Tax Return` to go back to the Tax Return and click the
   :icon:`settings_applications` :guilabel:`(settings_applications)` icon.
#. In the :guilabel:`JCT Return (Sales Accumulation)` view, click the :icon:`fa-toggle-on`
   :guilabel:`(toggle-on)` icon to deactivate :guilabel:`Schedule 1-3` and :guilabel:`Schedule 2-3`
   for general taxpayers.

For businesses operating in more than one category, Schedule 5-3 automatically calculates the
deductible purchase tax amount for each applicable calculation method: the principle calculation,
the special calculation if one type of business accounts for 75% or more of sales, and the special
calculation if two types of business together account for 75% or more of sales.

However, the calculation method to apply is not selected automatically. Click the :icon:`fa-pencil`
:guilabel:`(pencil)` icon to manually enter the result of the chosen method in the
:guilabel:`37. Amount selected from selectable calculation formula categories (20 to 36)` line of
Schedule 5-3.

.. _localizations/japan/accounting/qualified-invoice-transition:

Qualified invoice issuers: transition measures
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the vendor is not a qualified invoice issuer, select the tax that matches the deductible share
for the date of the transaction on the purchase line.

.. list-table::
   :header-rows: 1

   * - Period
     - Deductible share
     - Taxes
   * - Until September 30, 2026
     - 80%
     - `10% NQI 80%`, `8% NQI 80%`
   * - October 1, 2026 to September 30, 2028
     - 70%
     - `10% NQI 70%`, `8% NQI 70%`
   * - October 1, 2028 to September 30, 2029
     - 50%
     - `10% NQI 50%`, `8% NQI 50%`
   * - October 1, 2029 to September 30, 2031
     - 30%
     - `10% NQI 30%`, `8% NQI 30%`

.. important::
   Taxes whose transition period has ended are not deactivated automatically. When a period ends, go
   to :menuselection:`Accounting --> Configuration --> Taxes` and deactivate the tax.

.. _localizations/japan/accounting/zengin:

Zengin
------

.. note::
   Make sure to :ref:`install <general/install>` the :guilabel:`Japan - Zengin Payment` module
   (`l10n_jp_zengin`) to import statements in the Zengin format as bank transactions and to create
   bank transfer files in the Zengin format.

The Zengin format is a standard file format for exchanging data with banks, defined by the Japanese
Bankers Association. Companies use this format to import bank statements and to send files that
consolidate multiple payments into a single bank transfer request.

.. _localizations/japan/accounting/zengin/journal:

Bank statement import
~~~~~~~~~~~~~~~~~~~~~

To import Zengin statement files, the bank journal that receives the transactions must be
configured.

#. Go to :menuselection:`Accounting --> Configuration --> Journals`, and open the :guilabel:`Bank`
   journal to configure it or create a new one.
#. Click the :icon:`east` :guilabel:`(arrow-right)` icon in the :guilabel:`Bank Account Number`
   field to open and configure an existing bank account or create a new one.
#. Fill in the fields below. If they are not displayed, make sure the address in the
   :guilabel:`Bank Information` tab is set to :guilabel:`Japan`.

   .. list-table::
      :header-rows: 1

      * - Field
        - Value
        - Limit and notes
      * - :guilabel:`BIC/SWIFT`
        - Financial institution code
        - 4 digits
      * - :guilabel:`Zengin Branch Code (Clearing Number)`
        - Branch code
        - 3-digit number
      * - :guilabel:`Bank Name (Kana)`
        - Bank name in half-width kana
        - 15 characters maximum
      * - :guilabel:`Branch Name (Kana)`
        - Branch name in half-width kana
        - 15 characters maximum
      * - :guilabel:`Account Holder Name (Kana)`
        - Account holder name in half-width kana
        - 40 characters maximum
      * - :guilabel:`Account Type`
        - Account type
        - A :guilabel:`Savings` account cannot be used as the source of a transfer file.
      * - :guilabel:`Client Code`
        - Client code
        - 10-digit number. Required for your own bank account only.

#. If disabled, click the :icon:`fa-toggle-off` :guilabel:`(toggle-off)` icon to enable
   :guilabel:`Trust bank account`.
#. Click :guilabel:`Save`.

To import transactions from a Zengin file, drag and drop the file onto the configured bank journal,
or click :guilabel:`Import file` and select the file.

.. _localizations/japan/accounting/zengin/partner:

Transfer files
~~~~~~~~~~~~~~

A transfer file requires the bank code, branch, account, and account holder name in kana of the
recipient (contact). To register the bank account of a contact:

#. In the :doc:`Contacts <../../essentials/contacts>` app, open the relevant contact, and go to the
   :guilabel:`Invoicing` or :guilabel:`Accounting` tab.
#. Click the :icon:`east` :guilabel:`(arrow-right)` icon in the :guilabel:`Bank accounts` field to
   open and configure an existing bank account or create a new one.
#. Fill in the fields below, and save. If they are not displayed, make sure the address in the
   :guilabel:`Bank Information` tab is set to :guilabel:`Japan`.

   .. list-table::
      :header-rows: 1

      * - Field
        - Value
        - Limit and notes
      * - :guilabel:`Account Number`
        - Account number
        - 7 digits
      * - :guilabel:`Trust bank account`
        - Enable
        -
      * - :guilabel:`BIC/SWIFT`
        - Financial institution code
        - 4 digits. Used as the bank code in the transfer file.
      * - :guilabel:`Zengin Branch Code (Clearing Number)`
        - Branch code
        - 3-digit number
      * - :guilabel:`Bank Name (Kana)`
        - Bank name in half-width kana
        - 15 characters maximum
      * - :guilabel:`Branch Name`
        - Branch name
        -
      * - :guilabel:`Branch Name (Kana)`
        - Branch name in half-width kana
        - 15 characters maximum
      * - :guilabel:`Account Holder Name (Kana)`
        - Account holder name in half-width kana
        - 30 characters maximum

.. note::
   Values that are too long are truncated to the maximum number of characters above when the file is
   created. The kana input format (such as half-width kana) is not validated, so follow the
   instructions of the bank.

Once the bank accounts are configured, create the transfer file:

#. Open the vendor bill to pay, and click :guilabel:`Pay`.
#. In the :guilabel:`Journal` field, select the bank journal. In the :guilabel:`Payment Method`
   field, select :guilabel:`Zengin`. In the :guilabel:`Recipient Account` field, select the vendor's
   bank account and click :guilabel:`Create Payment`.
#. Go to :menuselection:`Accounting --> Vendors --> Payments`, select the payments to include in the
   batch, click :icon:`fa-cog` :guilabel:`Actions`, and select :guilabel:`Create batch payment`.
#. Review the batch, and click :guilabel:`Validate`. The transfer file is displayed in the chatter,
   on the right side of the batch payment.
