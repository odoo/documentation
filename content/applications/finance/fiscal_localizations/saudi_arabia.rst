============
Saudi Arabia
============

.. _localizations/saudi-arabia/modules:

Modules
=======

The following modules related to the Saudi Arabian localization are available:

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Name
     - Technical name
     - Description
   * - Saudi Arabia - Accounting
     - `l10n_sa`
     - Default :ref:`fiscal localization package <fiscal_localizations/packages>` for Saudi Arabia
       with Phase 1 QR code support.
   * - Saudi Arabia - Accounting Reports
     - `l10n_sa_reports`
     - Accounting reports for Saudi Arabia
   * - Saudi Arabia - E-invoicing
     - `l10n_sa_edi`
     - Enables ZATCA Phase 2 API integration for e-invoicing compliance.
   * - Saudi Arabia - E-invoicing (Simplified)
     - `l10n_sa_edi_pos`
     - Enables e-invoicing through PoS.
   * - Saudi Arabia - Point of Sale
     - `l10n_sa_pos`
     - Adds compliance fields and behavior for PoS invoices.
   * - Saudi Arabia - Withholding Tax
     - `l10n_sa_withholding_tax`
     - Forces the installation of the Withholding Tax on Payment module.

.. note::
   The localization's core modules are installed automatically with the localization. The rest can
   be manually :doc:`installed </applications/general/apps_modules>`.

.. seealso::
   :doc:`Saudi Arabia Payroll localization documentation <../../hr/payroll/payroll_localizations/saudi_arabia>`

.. _localizations/saudi-arabia/loc-review:

Localization overview
=====================

The Saudi Arabian localization package ensures compliance with Saudi Arabian fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Saudi Arabia's standards.

The Saudi Arabian localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure aligned with Saudi
  Arabian regulations
- :ref:`localizations/saudi-arabia/taxes`: preconfigured tax rates, including standard 15% VAT,
  zero-rated, and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`Withholding taxes <localizations/saudi-arabia/withholding-taxes>`: predefined withholding
  tax rules for applicable service categories
- :ref:`localizations/saudi-arabia/tax-reporting`: automated tax reports
- :ref:`E-invoicing (ZATCA) <localizations/saudi-arabia/zatca>`: integration for electronic
  invoicing in line with Saudi Arabian government requirements

.. _localizations/saudi-arabia/taxes:

Taxes
-----

The Saudi Arabian localization includes preconfigured sales, purchase, and withholding :doc:`taxes
<../accounting/taxes>`:

- | Standard VAT (15%): The prevailing rate applied to the majority of goods and services supplied
    within the Kingdom.
  | The supplier charges 15% VAT on the sale (Output VAT) and is generally entitled to deduct the
    VAT paid on its business purchases (Input VAT).

  .. example::
     Most commercial sales, retail goods, telecommunication services, non-exempt private education,
     and non-exempt private healthcare.

- | Zero-rated VAT (0%): These are taxable supplies where the rate of tax applied is 0%.
  | The supplier charges no VAT on the sale, but, critically, is fully entitled to recover the input
    VAT paid on costs related to making those supplies.

  .. example::
     - Exports: Supplies of goods and services to a non-:abbr:`GCC (Gulf Cooperation Council)`
       resident or for consumption outside the Kingdom.
     - International transport: Services for the international transport of passengers and goods,
       and related services.
     - Specific goods: Supplies of qualifying medicines and qualifying medical equipment, as
       specified by ZATCA/Ministry of Health.
     - Residential property: First supply of a new residential building/property to a Saudi citizen,
       up to a value of SAR 1,000,000 (subject to specific conditions).
     - Investment metals: Qualifying gold, silver, and platinum of 99% purity or higher (supplied
       for investment).

- | Exempt transactions: These transactions fall outside the scope of VAT, meaning they are not
    subject to the tax.
  | The supplier does not charge any VAT on the sale and is not entitled to recover the input VAT
    paid on costs related to making these supplies (resulting in an unrecoverable cost).

  .. example::
     - Financial services: interest on loans, provision of credit, operations of
       current/deposit/savings accounts, issuance or transfer of money or securities, and life
       insurance.
     - Real estate: bare rental (leasing) of residential property.

- | Import VAT: VAT is levied on goods brought into the Kingdom from a non-:abbr:`GCC (Gulf
    Cooperation Council)` country.
  | VAT is typically calculated at the standard rate (15%) and is paid to the Customs Authority at
    the point of importation.

.. important::
   When assigning :doc:`discounts <../../sales/sales/products_prices/prices/discounts>` to invoices,
   assign a 15% tax on the line containing a global discount to comply with ZATCA rules.

Reverse charge mechanism (RCM)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- Description: Mechanism that shifts the responsibility for accounting for VAT from the non-resident
  supplier to the resident recipient of the goods or services.
- Mechanism: The VAT-registered recipient must calculate and account for the VAT (as both output VAT
  and input VAT) in their :ref:`VAT return <accounting/tax-returns/vat-report>`. This typically
  results in a net zero effect on the VAT return, provided the input tax is fully deductible.
- Application: Primarily used for B2B supplies of services from a non-resident supplier to a
  VAT-registered business in Saudi Arabia.

.. _localizations/saudi-arabia/withholding-taxes:

Withholding taxes
-----------------

There are two available methods for calculating withholding tax: gross and deducted.

- Gross withholding: This is the primary configuration, where the withholding amount is calculated
  in addition to the bill total. For example, if the total bill is entered as 115 SAR, the system
  calculates the base plus Withholding Tax (WHT) without reducing the payment amount.
- Deducted withholding: It reduces the payable amount by the withholding amount directly, meaning
  the total payment reflects the deduction upfront. This affects how the accounting entries and
  payable lines are booked, as seen in the comparison screenshots provided.

.. note::
   Deducted withholding taxes are not enabled by default. To activate it, go to Accounting -->
   Configuration --> Taxes and enable the relevant withholding tax.

The following Withholding Tax (WHT) configurations are preloaded and available for use:

- 5% Withholding Tax: Applied on payments for rent, dividends, technical and consulting services,
  air and maritime freight, as well as interest, insurance, and reinsurance premiums.
- 15% Withholding Tax: Applies to royalties and other general service payments made to
  non-residents.
- 20% Withholding Tax: Reserved for management fees and specific high-value service payments.

.. _localizations/saudi-arabia/tax-reporting:

Tax reporting
-------------

The :ref:`VAT and Withholding Return <accounting/tax-returns/vat-report>` provide a detailed
breakdown of taxable, zero-rated, exempt, and withholding transactions. Like other financial
reports, the :guilabel:`VAT` and :guilabel:`Withholding Return` can be filtered by period, compared
against other periods, and exported in Excel and PDF formats, ensuring compliance with Saudi Arabia
tax laws.

.. _localizations/saudi-arabia/company-contacts:

Company and contacts
====================

To ensure proper integration with :ref:`ZATCA <localizations/saudi-arabia/zatca>`, the following
fields are required on the :ref:`company record <general/companies/company>`:

- :guilabel:`Company Name` (must match exactly VAT certificate)
- All relevant :guilabel:`Address` fields, including the :guilabel:`District`, :guilabel:`Building
  Number`, and :guilabel:`Plot Identification`
- :guilabel:`Identification Scheme`

  - :guilabel:`Tax Identification Number`
  - :guilabel:`Commercial Registration Number`
  - :guilabel:`Momra License`
  - :guilabel:`MLSD License`
  - :guilabel:`700 Number`
  - :guilabel:`Sagia License`

- :guilabel:`VAT Number`
- :guilabel:`Currency` must be set to :guilabel:`SAR`.

.. important::
   All fields must be completed accurately to avoid rejection during :ref:`ZATCA onboarding
   <localizations/saudi-arabia/zatca>`.

.. note::
   The same configuration applies to all relevant :doc:`contact <../../essentials/contacts>` forms.

.. _localizations/saudi-arabia/branches:

Branches configuration
----------------------

Set up your company :ref:`branches <general/branches>` in compliance with :ref:`ZATCA rules
<localizations/saudi-arabia/company-contacts>`.

.. important::
   On the branch contact form, enter the same :guilabel:`VAT Number` as the parent company and enter
   the branch :guilabel:`Commercial Registration Number (CRN)` in the :guilabel:`Identification
   Scheme` field.

.. note::
   Either use the parent company’s sales journal to follow a centralized billing system model, or
   onboard a new branch-specific journal to set up a multi-threaded system with parallel invoice
   processing.

.. _localizations/saudi-arabia/invoicing-language:

Invoicing language
==================

Invoices can be issued in different languages to meet regional or customer-specific requirements at
two levels:

- Customer level: To assign a preferred language to a customer, go to :menuselection:`Accounting -->
  Customers --> Customers` or :menuselection:`Point of Sale --> Orders --> Customers`, and open the
  relevant customer form.  In the :guilabel:`Language` field, update the language. All documents are
  then automatically generated in the selected language for that customer.

  .. important::
     Saudi Arabia's VAT regulations require :guilabel:`Tax Invoices` and :guilabel:`Simplified Tax
     Invoices` (along with corresponding credit notes or debit notes) to be in Arabic, mandatorily.
     Invoices can be bilingual, including English.

- Company level: To add Arabic as a secondary language to meet Saudi Arabia VAT regulations:

  - For :guilabel:`Tax Invoices`: Go to :menuselection:`Accounting --> Configuration --> Settings`,
    in the :guilabel:`Fiscal Localization` section.
  - For Point of Sale receipts: Go to :menuselection:`Point of Sale --> Configuration --> Settings`,
    and navigate to the :guilabel:`Bills & Receipts` section.

  Then, enable the :guilabel:`Gulf Cooperation Council Format` option, and :guilabel:`Save`.

.. _localizations/saudi-arabia/zatca:

Electronic invoicing with ZATCA
===============================

The ZATCA e-invoicing system is designed to streamline and digitize the invoicing process for
businesses operating in Saudi Arabia.

ZATCA Phase 2 employs a clearance e-invoicing model for Business-to-Business (B2B) transactions.
Conversely, for Business-to-Consumer (B2C) transactions, Odoo generates a QR code and
subsequently reports these transactions to the Fatoora reporting endpoint.

In a B2B scenario, a :guilabel:`Tax Invoice` is issued, whereas in a B2C scenario, a
:guilabel:`Simplified Tax Invoice` is generated.

.. seealso::
   `ZATCA e-invoicing page <https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx>`_

.. _localizations/saudi-arabia/step-by-step:

Step-by-step process
--------------------

When onboarding to ZATCA (Phase 2), there are three modes:

- :ref:`Sandbox <localizations/saudi-arabia/sandbox>`: Common pre-configured testing environment;
  use it to simulate integration functionality out of the box.
- :ref:`Simulation (Pre-Production) <localizations/saudi-arabia/simulation>`: User-specific testing
  environment; use it to simulate your unique integration.
- :ref:`Production <localizations/saudi-arabia/production>`: Live environment

.. _localizations/saudi-arabia/sandbox:

Sandbox
~~~~~~~

.. Tip::
   Use VAT Number 399999999900003 on your company setup for sandbox testing.

#. | Set the database
   | Go to :menuselection:`Accounting --> Configuration --> Settings` and, in the :guilabel:`Saudi
     Arabia Electronic Invoicing` section, ensure the :guilabel:`ZATCA API mode` is set to
     :guilabel:`Sandbox`.

#. | Company information verification
   | Make sure all :ref:`company <localizations/saudi-arabia/company-contacts>` information is
     complete.

#. Onboard sales journals

   - Go to :menuselection:`Accounting --> Configuration --> Journals`.
   - Open the :guilabel:`Sales` journal.
   - Under the ZATCA tab, click :icon:`fa-refresh` :guilabel:`Onboard`.
   - In the :guilabel:`Enter the OTP` window, the 6-digit :guilabel:`OTP` is pre-populated. Click
     :guilabel:`Confirm`.

#. Invoice testing

   - :ref:`Create <accounting/invoice/creation>` and :ref:`confirm
     <accounting/invoice/confirmation>` customer invoices.
   - Once the invoice is confirmed, a blue banner appears; click :guilabel:`Process now`.
   - Ensure the :ref:`response from the API <localizations/saudi-arabia/invoice-submission>` is
     :guilabel:`Action Successful`. If not, review the API response displayed in the chatter and
     take the appropriate actions.

.. _localizations/saudi-arabia/simulation:

Simulation (Pre-Production)
~~~~~~~~~~~~~~~~~~~~~~~~~~~

#. Set the database

   - Duplicate your Live/Production database.
   - Go to :menuselection:`Accounting --> Configuration --> Settings` and, in the :guilabel:`Saudi
     Arabia Electronic Invoicing` section, ensure the :guilabel:`ZATCA API mode` is set to
     :guilabel:`Simulation (Pre-Production)`.

#. | Company information verification
   | Make sure all :ref:`company <localizations/saudi-arabia/company-contacts>` information is
     complete.

#. Onboard sales journals

   - Go to :menuselection:`Accounting --> Configuration --> Journals`.
   - Open the :guilabel:`Sales` journal.
   - Under the ZATCA tab, click :icon:`fa-refresh` :guilabel:`Onboard`.
   - In the :guilabel:`Enter the OTP` window, enter the 6-digit :guilabel:`OTP` retrieved from the
     Fatoora Simulation Portal under the Testing Environment. Then click :guilabel:`Confirm`.

#. Invoice testing

   - :ref:`Create <accounting/invoice/creation>` and :ref:`confirm
     <accounting/invoice/confirmation>` customer invoices.
   - Once the invoice is confirmed, a blue banner appears; click :guilabel:`Process now`.
   - Ensure the :ref:`response from the API <localizations/saudi-arabia/invoice-submission>` is
     :guilabel:`Action Successful`. If not, review the API response displayed in the chatter and
     take the appropriate actions.

.. note::
   :guilabel:`Simulation (Pre-Production)` mode invoices are not legally valid.

.. _localizations/saudi-arabia/production:

Production
~~~~~~~~~~

#. | In your Live/Production database
   | Go to :menuselection:`Accounting --> Configuration --> Settings` and, in the :guilabel:`Saudi
     Arabia Electronic Invoicing` section, ensure the :guilabel:`ZATCA API mode` is set to
     :guilabel:`Production`.

#. | Company information verification
   | Make sure all :ref:`company <localizations/saudi-arabia/company-contacts>` information is
     complete.

#. Onboard sales journals

   - Go to :menuselection:`Accounting --> Configuration --> Journals`.
   - Open the :guilabel:`Sales` journal.
   - Under the ZATCA tab, click :icon:`fa-refresh` :guilabel:`Onboard`.
   - In the :guilabel:`Enter the OTP` window, enter the 6-digit :guilabel:`OTP` retrieved from the
     Fatoora Portal under the Production Environment. Then click :guilabel:`Confirm`.

#. Invoice synchronization

   - :ref:`Create <accounting/invoice/creation>` and :ref:`confirm
     <accounting/invoice/confirmation>` customer invoices.
   - Once the invoice is confirmed, a blue banner appears; click :guilabel:`Process now`.
   - Ensure the :ref:`response from the API <localizations/saudi-arabia/invoice-submission>` is
     :guilabel:`Action Successful`. If not, review the API response displayed in the chatter and
     take the appropriate actions.

.. note::
   Each :guilabel:`Sales` journal must be onboarded separately.

If a sales journal is no longer needed as a ZATCA solution unit, make sure to revoke it in your
Fatoora portal. To do so, click :guilabel:`View List of Solutions And Devices`, select the relevant
solution and device under :guilabel:`Revoke CSID`, then click :guilabel:`Revoke` and
:guilabel:`Confirm`.

.. warning::
   - Once the API mode is switched to :guilabel:`Production` and an invoice is submitted to ZATCA,
     it cannot be changed back to :guilabel:`Sandbox` or :guilabel:`Simulation (Pre-Production)`.
   - OTP’s generated from either the Fatoora Simulation or Production portal expire after 60 minutes
     and need to be regenerated.

.. _localizations/saudi-arabia/invoice-submission:

Invoice submission to ZATCA
---------------------------

After submitting the invoice to ZATCA, a structured response message is returned by the API in the
chatter.

.. example::
   [202] BR-KSA-F-13 : [BR-KSA-F-13] - Please recheck Other Seller/Buyer ID (BT-29 or BT-46) as it
   contains an invalid value.

Common codes that can be received:

.. list-table::
   :header-rows: 1

   * - Code
     - Action
   * - :guilabel:`200 – Action Successful`
     - No action required.
   * - :guilabel:`202 – Action Successful (with Warnings)`
     - - Share the warnings with the solution provider to correct them as soon as possible.
       - Warnings are temporarily accepted but may become rejections in the future.
       - Frequent warnings may trigger investigation, education, or auditing by ZATCA.
   * - :guilabel:`303 – Clearance Switched Off`
     - Submit the invoice through the reporting flow instead of clearance.
   * - :guilabel:`400 – Action Failed (Rejected)`
     - Review the detailed error message, correct the issue, and resubmit.
   * - :guilabel:`401 – Unauthorized`
     - - Check the authentication certificate and secret key.
       - Correct the credentials and resubmit.
   * - :guilabel:`413 – Payload Too Large (Invoice Not Received)`
     - Reduce the invoice payload size and resend.
   * - :guilabel:`429 – Too Many Requests (Invoice Not Received)`
     - Resend the invoice.
   * - :guilabel:`500 – Internal Server Error (Invoice Not Received)`
     - Resend the invoice.
   * - :guilabel:`503 – Service Unavailable (Invoice Not Received)`
     - Resend the invoice.
   * - :guilabel:`504 – Request Timed Out (Invoice Not Received)`
     - Resend the invoice.

The color of the message displayed in the chatter after an invoice is confirmed and submitted
indicates the following information:

- Green: invoice successfully accepted - The invoice is fully compliant and has been successfully
  validated by ZATCA.
- Yellow: invoice accepted with warnings - The invoice is legally valid but was accepted with a
  warning. The issue should be reviewed and corrected for future submissions.
- Red: invoice was rejected - The invoice was not accepted by ZATCA and is not legally valid. It
  must be corrected and resubmitted.

If the invoice is rejected, an error message is displayed in the invoice’s chatter. Correct the
underlying issue described in the message description in the invoice or company settings. Then, to
resubmit the invoice, click :guilabel:`Retry`.

.. important::
   - Invoices rejected by ZATCA remain in a :guilabel:`Rejected` state and are not considered
     legally valid.
   - In case of any incidents, technical errors, or emergency matters that prevent the generation of
     e-invoices/e-receipts, notify `ZATCA <https://zatca.gov.sa/en/E-Invoicing/FailureNotifications/Pages/VerifyTaxpayer.aspx>`_.
     Once the issue has been resolved, contact ZATCA again using the same communication channel. For
     specific failure scenarios, refer to the steps outlined in `ZATCA's guidelines (page 45)
     <https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf>`_.

.. _localizations/saudi-arabia/qr-code-verification:

QR code verification
--------------------

To verify the QR Code on the invoice, scan it using the official `ZATCA app
<https://zatca.gov.sa/en/AboutUs/ZATCAApps/Pages/default.aspx>`_.

Once in the app, click :guilabel:`Services`. In the :guilabel:`E-Invoice Validation` section, click
:guilabel:`Start Service`. Then, begin scanning the invoices' QR codes.

.. note::
   - The QR verification output does not display a currency symbol. The invoice amount is always
     shown as a plain numeric value, irrespective of the currency used.
   - An invoice with a related contact (e.g., Invoicing Address) is sent to the clearance API (B2B).


.. _localizations/saudi-arabia/debit-and-credit-notes:

Debit and credit notes
----------------------

To create a :ref:`credit <accounting/credit_notes/issue-credit-note>` or :ref:`debit
<accounting/credit_notes/issue-debit-note>` note, include a ZATCA-approved reason from the
:guilabel:`ZATCA Reason` field in the :guilabel:`Credit`/:guilabel:`Debit` window, as required by
ZATCA regulations:

- Cancellation or suspension of the supplies after their occurrence, either wholly or partially.
- Essential change or amendment in the supply that results in a change to the VAT due.
- Amendment of the supply value that was pre-agreed between the supplier and the consumer.
- Goods or services refund.
- Change in the seller’s or buyer’s information.

.. tip::
   The :guilabel:`ZATCA Reason` field is also available in the credit/debit note :guilabel:`Other
   Info` tab.

.. note::
   Whenever the credit/debit note is unrelated/independent, fill in the sequential number of the
   original invoice(s) that the credit/debit note is related to in the :guilabel:`Customer
   Reference` field.

.. _localizations/saudi-arabia/advance-payments:

Down payments (advance payments)
--------------------------------

Handle :doc:`down payments (advance payments) <../../sales/sales/invoicing/invoicing_policy>` in
compliance with `ZATCA’s guidelines
<https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-Invoicing_Detailed__Guideline.pdf>`_.

.. _localizations/saudi-arabia/retention:

Retention
---------

Retention is an amount temporarily held by the customer, defined by the commercial contract, to
ensure the quality and completion of the work. It is usually a percentage of the invoice value
(e.g., 5-10%) and serves as security against future defects; it is ultimately paid back to the
contractor once the warranty period expires.

For ZATCA, the commonly applied rule is that VAT is calculated based on the full invoice amount,
even if the customer withholds a portion as retention. ZATCA advises taxpayers to first determine
the tax position, specifically whether the retention amount reduces the taxable amount or not. Tax
position depends on contractual terms.

The Odoo retention workflow ensures, through tax position, that the retention amount does not reduce
the taxable amount.

.. note::
   Any negative tax (e.g., -20%) configured with the :guilabel:`Is Retention` checkbox enabled has
   no impact on the UBL 2.1. It only applies when this retention tax is used in conjunction with a
   generic tax (e.g., 15%) on the invoice line and represents a percentage of that invoice line. For
   example, if a taxpayer wants to retain 20% of the invoiced goods, both the 15% tax and the -20%
   retention tax would be applied to the invoice line.

Within this same tax position, retention can also be applied at the invoice level as an separate
negative invoice line using a 0% (Not Subject to VAT) tax rate.

.. warning::
   - Using a negative tax with :guilabel:`Is Retention` enabled, along with a generic tax on the
     invoice line, usually indicates that VAT has been paid on the full taxable amount. Therefore,
     the final invoice for releasing the retention amount does not qualify as a :guilabel:`Tax
     Invoice` and should not be submitted to ZATCA.
   - The 0% (Not Subject to VAT) tax is already preconfigured according to ZATCA rules; do not
     modify it.

.. important::
   - When creating a new retention tax, create a :guilabel:`Retention` tax group and assign it to
     this newly created retention tax to comply with ZATCA rules.
   - To add the :guilabel:`Retention Amount` as a note on the invoice line, click :guilabel:`Add a
     note` to comply with ZATCA rules. For example - Retention Amount: `[retention amount] SAR`

.. _localizations/saudi-arabia/generated-documents:

Generated documents
-------------------

Once an invoice is submitted, a UBL 2.1 XML file is generated and sent to ZATCA API endpoints.
For auditability, this XML file is stored in the chatter. To display it, click the
:icon:`fa-paperclip` :guilabel:`(attachments)` icon.

Additionally, the invoice PDF generated when using :guilabel:`Send` is displayed in the chatter.
Both the XML and PDF files are permanently attached to the invoice and cannot be deleted to
ensure compliance with ZATCA regulations.

.. important::
   Successfully ZATCA-submitted invoices can only be reset to draft in :ref:`Sandbox
   <localizations/saudi-arabia/sandbox>` or :ref:`Simulation (Pre-Production)
   <localizations/saudi-arabia/simulation>` modes.

.. tip::
   To automatically generate a PDF/A-3 with the embedded UBL 2.1, click :guilabel:`Send`.

.. _localizations/saudi-arabia/pos:

Point of sale
=============

.. _localizations/saudi-arabia/pos-zatca-configuration:

ZATCA integration configuration
-------------------------------

.. note::
   Make sure the :guilabel:`Saudi Arabia - E-invoicing (Simplified) (l10n_sa_edi_pos)` module is
   :ref:`installed <general/install>`.

PoS orders must be properly reported in compliance with ZATCA Phase 2. To do so, follow these steps:

- Onboard the :guilabel:`Invoices` default journal in the :ref:`PoS settings
  <configuration/settings>`:

  - Go to :menuselection:`Point of Sale --> Configuration --> Settings`. In the yellow banner,
    select the relevant :guilabel:`Point of Sale`, then navigate to the :guilabel:`Accounting`
    section.
  - In the :guilabel:`Default Journals` section, find the :guilabel:`Invoices` field and click the
    :icon:`oi-arrow-right` :guilabel:`(right arrow)` to open the default :guilabel:`Sales` journal.
  - Under the ZATCA tab, click :icon:`fa-refresh` :guilabel:`Onboard`.
  - In the :guilabel:`Enter the OTP` window, enter the 6-digit :guilabel:`OTP` retrieved from the
    Fatoora Portal under the Production Environment. Then click :guilabel:`Confirm`.

- :ref:`Assign a customer <pos/customers>` to the order before finalizing the transaction.

These steps ensure that each receipt is processed as a compliant e-invoice and reported to the ZATCA
portal in real time. Once the receipt is generated, the Phase 2 QR code automatically appears on
both the printed receipt and the PDF.
