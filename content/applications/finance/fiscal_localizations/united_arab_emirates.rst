====================
United Arab Emirates
====================

.. _localizations/uae/modules:

Modules
=======

The following modules are automatically installed with the Emirati localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`United Arab Emirates - Accounting`
     - `l10n_ae`
     - Default :doc:`fiscal localization package </applications/finance/fiscal_localizations>`.
       Includes all accounts, taxes, and reports.
   * - :guilabel:`United Arab Emirates - Corporate Tax Report`
     - `l10n_ae_corporate_tax_report`
     - Adds the Corporate Tax report.
   * - :guilabel:`United Arab Emirates - Accounting Reports`
     - `l10n_ae_reports`
     - Accounting reports for UAE.

Additionally, the following modules are available but must be manually :doc:`installed
</applications/general/apps_modules>`.

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`United Arab Emirates - Payroll`
     - `l10n_ae_hr_payroll`
     - Includes the necessary rules for United States payroll.
   * - :guilabel:`United Arab Emirates - Payroll with Accounting`
     - `l10n_ae_hr_payroll_account`
     - Contains the necessary accounting data for the payroll rules.
   * - :guilabel:`United Arab Emirates - UBL PINT`
     - `l10n_ae_ubl_pint`
     - Generates documents in the UBL XML PINT AE format and adds the UAE-specific fields on
       contacts, products, taxes, invoices and invoice lines.

.. seealso::
   :doc:`United Arab Emirates Payroll localization documentation
   <../../hr/payroll/payroll_localizations/united_arab_emirates>`

.. _localizations/uae/overview:

Localization overview
=====================

The Emirati localization package ensures compliance with the Emirati fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to the United Arab Emirates' standards.

- :doc:`Chart of accounts <../accounting/get_started/chart_of_accounts>`: a predefined structure
  tailored to Emirati accounting standards.
- :ref:`Taxes <localizations/uae/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options.
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status.
- :ref:`Electronic document solution <localizations/uae/edi>`: integration with PINT AE to meet
  electronic document regulations.

.. _localizations/uae/chart-of-accounts:

Chart of accounts
-----------------

In the :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>`, accounts are
automatically mapped to their corresponding taxes and default accounts payable and accounts
receivable fields.

.. important::
   It is advised to **keep the accounts below active**, as they are used as transitory accounts by
   Odoo or are specific to the **UAE localization package**.

   .. list-table::
      :header-rows: 1

      * - Code
        - Account Name
        - Type
      * - 102011
        - Accounts Receivable
        - Receivable
      * - 102012
        - Accounts Receivable (POS)
        - Receivable
      * - 201002
        - Payables
        - Payable
      * - 101004
        - Bank
        - Bank and Cash
      * - 105001
        - Cash
        - Bank and Cash
      * - 100001
        - Liquidity Transfer
        - Current Assets
      * - 101002
        - Outstanding Receipts
        - Current Assets
      * - 101003
        - Outstanding Payments
        - Current Assets
      * - 104041
        - VAT Input
        - Current Assets
      * - 100103
        - VAT Receivable
        - Non-current Assets
      * - 101001
        - Bank Suspense Account
        - Current Liabilities
      * - 201017
        - VAT Output
        - Current Liabilities
      * - 202001
        - End of Service Provision
        - Current Liabilities
      * - 202003
        - VAT Payable
        - Non-current Liabilities
      * - 999999
        - Undistributed Profits/Losses
        - Current Year Earnings
      * - 400003
        - Basic Salary
        - Expenses
      * - 400004
        - Housing Allowance
        - Expenses
      * - 400005
        - Transportation Allowance
        - Expenses
      * - 400008
        - End of Service Indemnity
        - Expenses

.. _localizations/uae/taxes:

Taxes
-----

To access your taxes, go to :menuselection:`Accounting --> Configuration --> Taxes`.
Activate/deactivate, or :doc:`configure </applications/finance/accounting/taxes/>` the
taxes relevant to your business by clicking on them. Remember to only set tax accounts on the **5%**
tax group, as other groups do not need closing. To do so, enable the :doc:`developer mode
<../../general/developer_mode>` and go to :menuselection:`Accounting --> Configuration --> Tax
Groups`. Then, set a :guilabel:`Tax current account (payable)`, :guilabel:`Tax current account
(receivable)`, and an :guilabel:`Advance Tax payment account` for the **5%** group.

e-Invoice line tax reporting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The tax applied to each invoice line determines how the line is reported in the e-Invoice. Each Odoo
tax is converted to one of the ePINT AE Tax Category Codes. The table lists the taxes available with
UAE localization and what they change in the e-Invoice.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Tax examples
     - VAT Category
     - Effect on the e-Invoice
   * - Standard rate (5% DU, 5% AZ, 5% TR TS)
     - S: Standard rate
     - The rate sent is 5.00%. The VAT amount of the line is converted to AED. Each emirate-specific
       5% taxes are reported separately in the VAT return (report?).
   * - Zero rate (0%)
     - Z: Zero rate
     - The goods or services are taxed at 0%. The line is reported with the rate of 0%.
   * - Exempt (0% EXT)
     - E: Exempt from tax
     - No rate and no VAT amount are sent. An exemption reason is required to be set on the tax.
   * - Reverse charge (5% RC)
     - AE: VAT Reverse Charge
     - The line's VAT amount sent is zero; the buyer accounts for the VAT required. Requires the
       **RCM Goods Type**.
   * - Out of scope
     - O: Not subject to tax
     - For supplies, outside the scope of VAT. Used on commercial invoices, which must not contain
       tax details.
   * - `-`
     - N: Standard rate additional VAT
     - Used with the **Profit margin scheme** transaction type. Indicates that the VAT is calculated
       on an additional taxable base that is not included in the totals of the document.

.. note::
   Taxes that use an **E: Exempt from tax** VAT category must include one of the following reasons:

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Code
        - Description
      * - DL8.46.1
        - Certain financial services
      * - DL8.46.2
        - Supply of residential units (lease or sale)
      * - DL8.46.3
        - Bare land
      * - DL8.46.4
        - Local passenger transport

.. _localizations/uae/rcm:

Reverse Charge Mechanism (RCM)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The :abbr:`Reverse Charge Mechanism (RCM)` shifts the responsibility to report and pay from the
supplier to the buyer. In the UAE, this applies to a limited list of goods. :doc:`Set a type
</applications/inventory_and_mrp/inventory/product_management/configure/type>` of RCM Goods Type in
the product's accounting tab.

A line that uses a reverse charge tax must have an RCM goods type, and the buyer’s TRN must be
filled in.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Code
     - Description
   * - DL8.48.8.1
     - Gold and diamonds
   * - DL8.48.8.2
     - Electronic devices
   * - DL8.48.3.1
     - Crude or refined oil
   * - DL8.48.3.2
     - Unprocessed or processed natural gas
   * - DL8.48.3.3
     - Pure hydrocarbons

.. _localizations/uae/edi:

Electronic document solution
----------------------------

.. note::
   The :ref:`United Arab Emirates - UBL PINT <localizations/uae/modules>` module must be installed
   to generate FTA-compliant e-Invoices.

The United Arab Emirates is introducing mandatory electronic invoicing for :abbr:`B2B
(Business-to-business)` and :abbr:`B2G (Business-to-government)` transactions. The system uses the
Peppol network and a decentralized five-corner model: the seller issues the invoice from their
accounting software, the seller’s :abbr:`Accredited Service Provider (ASP)` validates the invoice
and sends it to the buyer’s ASP. Then, the buyer’s ASP delivers the invoice to the buyer, and both
ASPs report the tax data to the :abbr:`FTA (Federal Tax Authority)`. Only ASPs accredited by the
Ministry of Finance can send and receive documents in this network.

The Odoo Emirati localization ensures compliance with the FTA requirements by:

- Generating invoices, credit notes, and self-billed invoices as a **UBL XML** file in the **PINT
  AE** format, which is the :abbr:`PINT (Peppol International)` billing model adapted for the
  United Arab Emirates and required by the Ministry of Finance.
- Adds the PINT AE-format required fields on contacts, products, taxes, invoices and invoice lines.

.. important::
   - While Odoo continues to progress through its native ASP accreditation journey in preparation
     for the upcoming mandates, Odoo is not an Accredited Service Provider (ASP) in the UAE, so it
     does not exchange documents with the Peppol network or the FTA directly. Odoo generates a PINT
     AE compliant document and hands it to the ASP.
   - To send electronic documents, an ASP connection is required. You can use the ClearTax module...
     (to fill in later).

.. seealso::
   - `United Arab Emirates Ministry of Finance portal <https://mof.gov.ae/en/about-us/initiatives/einvoicing/>`_
   - `PINT AE Billing <https://docs.peppol.eu/poac/ae/pint-ae/>`_

.. _localizations/uae/currency-exchange-rates:

Currency exchange rates
-----------------------

To update the currency exchange rates, go to :menuselection:`Accounting --> Configuration -->
Settings` and scroll down to the :guilabel:`Currencies` section. Then, click the :icon:`fa-refresh`
:guilabel:`(refresh)` icon in the :guilabel:`Next Run` field.

To launch the update automatically at set intervals, change the :guilabel:`Interval` from
:guilabel:`Manually` to the desired frequency.

.. note::
   By default, the UAE Central Bank exchange rates web service is used. Several other providers are
   available under the :guilabel:`Service` field.

(e)-Invoices
============

.. tip::
   The UAE localization package allows the generation of invoices in English, Arabic, or both. The
   localization also includes a line to display the **VAT amount** per line.

Product configuration
---------------------

The FTA requires specific information to be set on products for an e-Invoice to be compliant. To
configure these fields, follow these steps:

#. Go to :menuselection:`Accounting --> Customers --> Products`.
#. Open a product and go to the :guilabel:`Accounting` tab.
#. Configure the following settings:

   - :guilabel:`Is Both Good and Service`: Tick this box for products that combine both goods and
     services. If left empty, Odoo uses the :doc:`product type
     </applications/inventory_and_mrp/inventory/product_management/configure/type>` set on the
     product.
   - :guilabel:`RCM Goods Type`: Only for products subject to the :ref:`Reverse Charge mechanism
     <localizations/uae/rcm>`. Select a type from the dropdown menu.
   - :guilabel:`HS Code`: The **Harmonized System** code of the product, only applies to *Goods*
     product type. The code is copied to the invoice line.

HS and SAC codes
~~~~~~~~~~~~~~~~

Every product line must be classified according to its **product type** using a code: :abbr:`HS
(Harmonised System)` for *Goods*; :abbr:`SAC (Service Accounding Code)` for *Services*, classified
by type or nature. Products that are both *Goods* and *Services* bear both an HS and SAC code
accordingly.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Product type
     - Code required
     - Scheme sent
   * - Goods (G)
     - HS Code
     - HS
   * - Services (S)
     - Service Accounting Code
     - SAC
   * - Both
     - HS Code and Service Accounting Code
     - HS and SAC

.. admonition:: Examples of HS codes

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Level
        - Digits
        -
      * - Chapter
        - 2
        - 72: Iron and steel
      * - Heading
        - 4
        - 7214: Other bars and rods of iron or non-alloy steel
      * - Subheading
        - 6
        - 7214.10: Forged
      * - National tariff line
        - 8
        - Used by customs in the country. Check the code on your customs documents.

.. note::
   As of 25/11/2026, the UAE has not yet fixed the **minimum number of digits** for HS and SAC
   codes; the **PINT AE rule (IBR-187-AE)** leaves it undefined. The Ministry of Finance has not yet
   published an official list of SAC values yet.

Mandatory information
---------------------

The FTA requires specific information from an e-Invoice to be compliant and vary depending on the
**invoice type** selected. To select an invoice type, go to :menuselection:`Accounting --> Customers
--> Invoices` and open an existing invoice or click :guilabel:`New`. Then, select a type from the
:guilabel:`Invoice Type` field.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Field
     - What to enter
   * - :ref:`Invoice type <localizations/uae/invoice-types>`
     - The type of document: :guilabel:`Tax`, :guilabel:`Commercial`, or :guilabel:`Simplified`. The
       type determines which of the other fields are mandatory.
   * - :ref:`Transaction Type <localizations/uae/transaction-types>`
     - One or more flags describing the nature of the supply. Can be left empty if none are
       applicable, or several slags can be selected at once.
   * - Beneficiary ID
     - Required for :guilabel:`Free trade zone` transaction type and found in the :guilabel:`Other
       Info` tab, under the :guilabel:`FTA` section. The TRN or TIN of the beneficiary of a free
       trade zone supply.
   * - :guilabel:`Principal ID`
     - Required for :guilabel:`Agent billing` transaction type and found in the :guilabel:`Other
       Info` tab, under the :guilabel:`FTA` section. The TRN of the principal when you invoice on
       behalf of someone else as a disclosed agent. It must differ from your own TRN.

.. tip::
   To display the :guilabel:`HS Code`, :guilabel:`Service Account Code`, and :guilabel:`RCM Goods
   Type` columns on an invoice line, click the :icon:`oi-settings-adjust` :guilabel:`(settings
   adjust)` button and select the columns to display.

.. _localizations/uae/invoice-types:

Invoice types
-------------

The :guilabel:`Invoice Type` field defines the legal nature of the document. It determines the
mandatory fields, and whether VAT details appear on the invoice. The table below shows the invoice
types within the e-Invoicing system and the ones outside of VAT.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Type
     - Code
     - Credit note
     - In the e-Invoicing system?
     - Subject to VAT?
   * - :ref:`Tax invoice <localizations/uae/tax-invoice>`
     - 380
     - 381
     - Yes (B2B and B2G)
     - Yes
   * - :ref:`Simplified tax invoice <localizations/uae/simplified-invoice>`
     - None
     - None
     - No: sales to consumers (B2C) are outside the scope
     - Yes (VAT shown in the total)
   * - :ref:`Self-billed tax invoice <localizations/uae/self-invoice>`
     - 389
     - 261
     - Yes
     - Yes
   * - :ref:`Commercial invoice <localizations/uae/commercial-invoice>`
     - 480
     - 81
     - Yes (B2B and B2G)
     - No: not a tax document (non-VAT-registered seller or supply out of the VAT scope)

.. note::
   Some persons and transactions are excluded from e-Invoicing by Ministerial Decision No. 243 of
   2025 (Article 4). Check the decision for your case.

.. _localizations/uae/tax-invoice:

Tax invoice
~~~~~~~~~~~

Tax invoice is the standard document type for supplies by a VAT-registered seller to B2B or B2G customer.
It carries VAT details and allows the buyer to recover input VAT. It is sent as a PINT AE invoice
with type code 380. Credit notes that correct it use code 381.

Required fields:

- Seller: name, address, TRN (tax ID), and legal registration identifier with its type. The TIN is
  used as the Peppol endpoint.
- Buyer: name, address, and TRN. The Peppol endpoint is filled in automatically from the TRN.
- Document: invoice number, date, due date, currency, payment means, and the :guilabel:`Transaction
  Type` (all flags can be left unselected when no special transaction applies).
- Item classification: HS Code for goods and Service Accounting Code for services. Both are required
  for items of type 'Both'.
- Reverse Charge Lines: RCM Goods Type, plus the buyer's TRN.

.. _localizations/uae/simplified-invoice:

Simplified tax invoice
**********************

A simplified tax invoice is a short-form VAT invoice for B2C sales. It has no PINT AE document type
and is **not sent through Peppol**, as supplies to consumers are outside the scope of UAE
e-Invoicing. It is not used for B2B sales: a supply to a business customer must be e-Invoiced as a
tax invoice or commercial invoice. It also cannot be used for reverse charge supplies.

Required content under the VAT law: the words "Tax invoice"; the seller's name, address and TRN; the
date of issue; a description of the goods and services; the total playable including VAT; and the
VAT amount in AED. The customer's details and a line-by-line breakdown are not mandatory.

.. _localizations/uae/self-invoice:

Self-billed invoices
~~~~~~~~~~~~~~~~~~~~

In self-billing, your customer creates the invoice for you, instead of you creating it yourself. The
customer already knows what was delivered and what it costs, so the invoice is created from their
data and sent to you electronically. It is a tax invoice (code 389) or a tax credit note (code 261),
issued by the buyer on behalf of the supplier.

Required fields:

- Self-billed invoices use the same data model, and therefore the same fields and
  rules, as a tax invoice.
- Fill in the PINT AE fields on a vendor bill as you would on a customer
  invoice: the Bill type (for example, Tax), the transaction type if one applies, and the tax and item
  details each line.
- The vendor is the supplier on whose behalf you issue the invoice, so make sure
  their TRN is filled in on their contact form.

When you receive a self-billed invoice as a supplier, make sure it is correct. If so, record it as
your sale and *do not issue your own invoice for the same transaction*. If something is incorrect,
ask your customer to correct it with a self-billed credit note and a new self-billing invoice.

.. tip::
   If you issue self-billed invoices regularly, you can use a dedicated purchase journal. Go to
   :menuselection:`Accounting --> Configuration --> Journals`, open the purchase journal, click the
   :guilabel:`Advanced Settings` tab, and tick the :guilabel:`Self Billing` checkbox. Bills created
   in this journal are numbered with a separate sequence for each partner, so each supplier gets
   their own numbering.

.. _localizations/uae/commercial-invoice:

Commercial invoice
~~~~~~~~~~~~~~~~~~

A commercial invoice is the standard document when the seller is not VAT-registered, or when the
supply falls outside the scope of the UAE VAT. It does not require tax details or tax registration
information. It is sent with type code **480**. Credit notes that correct it use code (4)81.

Required fields:

- Seller: name, address, and legal registration identifier with its type. If the seller has no TRN,
  the TIN is used as the tax identifier.
- Buyer: name, address, :guilabel:`Registration identifier Type` and :guilabel:`Registration
  Identifier`. These replace the buyer's TRN, which is not required.
- Document: the same general fields as a tax invoice (number, date, currency, payment means,
  transaction type).
- Lines: quantity, price, and the tax category **Not subject to VAT**. The **VAT Amount** in AED and
  the line amount in AED are not required.

A commercial invoice cannot be combined with the **Deemed supply, Profit margin scheme** or
**Summary invoice** transaction types.

.. _localizations/uae/transaction-types:

Transaction types
-----------------

The transaction type is sent to the FTA as a sequence of eight flags, one per type. Odoo builds the
sequence from the options you select. The table below shows what each options requires.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Transaction type
     - Meaning
   * - Free trade zone
     - Supply of goods or services in a free trade zone.
   * - Deemed supply
     - Supply of goods or services without consideration.
   * - Profit margin scheme
     - Supply of goods under the profit margin scheme.
   * - Summary invoice
     - Several supplies to the same person within the same calendar month.
   * - Continuous supply
     - Goods or services supplied ona recurrent basis.
   * - Agent billing
     - A registered agent supplies on behalf of a principal.
   * - Supply through e-commerce
     - Goods or services supplied through e-commerce.
   * - Exports
     - Goods or services supplied outside the UAE.

Payment terms and method
------------------------

PINT AE requires every invoice with an amount higher than 0.00AED to contain both :doc:`payment terms <../accounting/customer_invoices/payment_terms>`
and :ref:`payment method <accounting/payments/payment-methods>`. If no payment method is set, Odoo
defaults the invoice type code to `1 - Instrument not defined`.

.. seealso::
   ClearTax AE: how to activate ClearTax and send documents.

Payroll
=======

.. _localizations/uae/salary-rules:

Salary rules
------------

To apply these rules to an employee's contract, go to :menuselection:`Payroll --> Contracts -->
Contracts` and select the employee's contract. In the :guilabel:`Salary Structure Type` field,
select :guilabel:`UAE Employee`.

Under the :guilabel:`Salary Information` tab, you can find details such as the:

- :guilabel:`Wage`;
- :guilabel:`Housing Allowance`;
- :guilabel:`Transportation Allowance`;
- :guilabel:`Other Allowances`;
- :guilabel:`Number of Days`: used to calculate the :ref:`end of service provision
  <localizations/uae/end-of-service-provision>`.

.. note::
   - **Leave deductions** are calculated using a salary rule linked to the **unpaid leave** time-off
     type.
   - Any other deductions or reimbursements are made *manually* using other inputs.
   - **Overtimes** are added *manually* by going to :menuselection:`Payroll --> Work Entries -->
     Work Entries`.
   - **Salary attachments** are generated by going to :menuselection:`Payroll --> Contracts -->
     Salary Attachments`. Then, :guilabel:`Create` an attachment and select the :guilabel:`Employee`
     and the :guilabel:`Type (Attachment of Salary, Assignment of Salary, Child Support)`.

.. tip::
   To prevent a rule from appearing on a paycheck, go to :menuselection:`Payroll --> Configuration
   --> Rules`. Click on :guilabel:`UAE Employee Payroll Structure`, select the rule to hide, and
   uncheck :guilabel:`Appears on Payslip`.

.. _localizations/uae/end-of-service-provision:

End of service provision
------------------------

The provision is defined as the total monthly allowance *divided* by 30 and then *multiplied* by the
number of days set in the field :guilabel:`Number of days` at the bottom of a contract's form.

The provision is then calculated via a salary rule associated with two accounts: the **End Of
Service Indemnity (Expense account)** and the **End of Service Provision (Non-current Liabilities
account)**. The latter is used to pay off the **end of service amount** by settling it with the
**payables account**.

.. note::
   The end of service amount is calculated based on the gross salary and the start and end dates of
   the employee’s contract.

e-Invoices
==========

.. Important::
   The following information **must** be filled in for your own company *and* your customers and
   vendors.

- :guilabel:`VAT`: The **tax registration number** of the contact.

  - For contacts located *in* the United Arab Emirates, enter the :abbr:`TIN (Tax Identification
    Number)` (15 digits, starting with 1 and ending with 03) in the field, or fill in the
    :guilabel:`UAE Tax Identification Number` under the :guilabel:`Customer Invoices` section, in
    the :guilabel:`Accounting` tab of the contact.
  - For contacts located *outside* the United Arab Emirates, enter any equivalent tax identifier
    (for example, their VAT number) in the VAT field. (Check with product owner, nothing checks out)

- :guilabel:`Registration Identifier Type`: The type of registration document used to register. This
  is **mandatory** for contacts registered on the UAE Peppol network (UAE or non-UAE), whose
  participant identifier scheme is `0235`, found in the :guilabel:`UAE Tax Identification Number`.

  - :guilabel:`Authority Name`: If :guilabel:`Commercial/Trade license` is selected, enter the
    authority which issued the license.
  - :guilabel:`Passport Issuing Country`: If :guilabel:`Passport` is selected, enter country which
    issued the passport.