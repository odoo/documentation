===========
Netherlands
===========

.. _localizations/netherlands/modules:

Modules
=======

The following modules are installed automatically with the Dutch localization:

.. list-table::
   :header-rows: 1
   :widths: 25 30 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Netherlands - Accounting`
     - `l10n_nl`
     - Base Dutch :ref:`fiscal localization <fiscal_localizations/packages>` complete with the Dutch
       chart of accounts, taxes, financial reports, and fiscal positions
   * - :guilabel:`Netherlands - Accounting Reports`
     - `l10n_nl_reports`
     - Dutch-specific tax and profit-and-loss reporting
   * - :guilabel:`Netherlands - Accounting Reports (post wizard)`
     - `l10n_nl_reports_vat_pay_wizard`
     - Enables the VAT wizard when posting a tax return journal entry

Additionally, the following modules must be manually :ref:`installed <general/install>` to
use SBR reporting, Dutch-specific payroll features, and Intrastat reporting:

.. list-table::
   :header-rows: 1
   :widths: 25 30 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Netherlands - Payroll`
     - `l10n_nl_hr_payroll`
     - Dutch-specific payroll rules including employee details, passport-based contracts, etc.
   * - :guilabel:`Netherlands - Payroll with Accounting`
     - `l10n_nl_hr_payroll_account`
     - Accounting data for Netherlands payroll rules
   * - :guilabel:`Netherlands Intrastat Declaration`
     - `l10n_nl_intrastat`
     - Generates Netherlands Intrastat report for declarations based on invoices
   * - :guilabel:`Netherlands - SBR`
     - `l10n_nl_reports_sbr`
     - Electronically submit Dutch tax declarations directly via SBR
   * - :guilabel:`Netherlands - SBR ICP`
     - `l10n_nl_reports_sbr_icp`
     - Electronically submit your Intracommunity Services to the Dutch tax authorities directly via
       SBR
   * - :guilabel:`Netherlands - SBR OB Nummer`
     - `l10n_nl_reports_sbr_ob_nummer`
     - Adds the missing Omzetbelastingnummer field for correct exchange through SBR
   * - :guilabel:`Netherlands - SBR Status information service`
     - `l10n_nl_reports_sbr_status_info`
     - Allows you to check the status of a submitted report to Digipoort

.. note::
   In some cases, such as when upgrading to a version with additional modules, modules may not be
   installed automatically. Any missing modules can be manually :ref:`installed <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing’s legality and compliance in the Netherlands
   <../accounting/customer_invoices/electronic_invoicing/netherlands>`

.. _localizations/netherlands/overview:

Localization overview
=====================

The Netherlands localization package ensures compliance with Dutch fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Dutch standards.

The Dutch localization package provides the following key features:

- :ref:`Chart of accounts <localizations/netherlands/chart-of-accounts>`: a predefined structure
  tailored to Dutch accounting standards.
- :ref:`Taxes <localizations/netherlands/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options.
- :doc:`Fiscal positions (tax and account mapping) <../accounting/taxes/fiscal_positions>`:
  automated tax adjustments based on customer or supplier registration status.
- :ref:`Electronic document solutions <localizations/netherlands/sbr>`: integration with SBR
  reporting to meet electronic document regulations.

.. _localizations/netherlands/chart-of-accounts:

Chart of accounts
-----------------

In the :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>`, accounts are
automatically mapped to their corresponding taxes and default accounts payable and accounts
receivable fields.

.. _localizations/netherlands/taxes:

Taxes
-----

:ref:`Taxes <localizations/netherlands/taxes>` are automatically created and configured when the
Netherlands localization is installed.

.. _localizations/netherlands/company:

Company
=======

To use all the features of this fiscal localization, the following fields are the minimum required
on the company record. You can access these by going to :menuselection:`Settings --> Users &
Companies --> Companies`:

- :guilabel:`Company Name`: The name of the company based in the Netherlands.
- :guilabel:`Country`: Set to `Netherlands` for the company.
- :guilabel:`VAT`: The tax identification number of the company.

You can fill out the remaining fields as needed.

.. _localizations/netherlands/sbr:

SBR Integration
===============

.. _localizations/netherlands/sbr-configuration:

Configuration
-------------

.. seealso::
   - `PKIoverheid <https://www.logius.nl/onze-dienstverlening/toegang/pkioverheid>`_
   - `Requesting a certificate <https://www.logius.nl/onze-dienstverlening/toegang/pkioverheid/pkioverheidcertificaat-aanvragen>`_

:abbr:`SBR (Standard Business Reporting)` electronic reporting is integrated within Odoo and allows
you to send your reports directly to the Dutch tax authorities. To use SBR reporting, ensure that
the :ref:`Netherlands - SBR <localizations/netherlands/modules>` module is installed.

To set up SBR reporting, open the **Accounting** app, go to :menuselection:`Configuration -->
Settings`, and scroll down to the :guilabel:`Dutch Localization` section. Click the
:guilabel:`Digipoort Certificate` field, enter a name for the certificate, and click
:guilabel:`Create and edit...`. In the pop-up window, fill out the following fields:

- :guilabel:`Name`: enter the name previously specified (you can modify it if desired).
- :guilabel:`Certificate`: click :guilabel:`Upload your file` to upload the certificate file.
- :guilabel:`Certificate Password`: enter the password for your certificate file.
- Click :guilabel:`Save & Close`.

.. _localizations/netherlands/sbr-reporting:

Reporting
---------

Once :ref:`enabled <localizations/netherlands/sbr-configuration>`, you can establish an XBRL
connection with the Dutch tax authorities by navigating to :menuselection:`Reporting --> Tax Return`
in the **Accounting** app, clicking the :icon:`fa-cog` :guilabel:`(gear)` icon, and selecting
:guilabel:`XBRL`.

In the pop-up window, fill out the following fields:

- :guilabel:`Contact Initials`: The initials of the contact person creating the SBR file.
- :guilabel:`Contact Last Name`: The last name of the contact person.
- :guilabel:`Contact Name Infix`: The prefix or middle name of the contact person.
- :guilabel:`Contact Phone`: The phone number of the contact person.
- :guilabel:`Contact Type`: Select :guilabel:`Taxpayer (BPL)` if you are filing the turnover tax
  return for your own business, or :guilabel:`Intermediary (INT)` if the return is filed by a tax
  professional.
- :guilabel:`Tax Consultant Number`: If you selected :guilabel:`Intermediary (INT)`, enter the
  6-digit tax advisor registration number (*Beconnummer*).
- :guilabel:`Tax Consultant Order`: If applicable, enter the membership or registration number for
  your professional tax association (e.g., NOB, RB, NBA, etc.).
- :guilabel:`Is Test`: Tick this box to submit the file to a pre-production environment. A valid
  PKIoverheid certificate is required, and :doc:`developer mode <../../general/developer_mode>`
  must be enabled.

Click :guilabel:`Download` to save the `.XBRL` file to your computer, or click :guilabel:`Send`
to transmit the SBR tax report directly to the Dutch tax authorities.

.. _localizations/netherlands/xaf-report:

XAF Export
==========

To export accounting entries in XAF format, open the **Accounting** app and go to
:menuselection:`Reporting --> General Ledger`. Use the filters to select the range of entries to
export, click the :icon:`fa-cog` :guilabel:`(gear)` icon, and then click :guilabel:`XAF`.

.. _localizations/netherlands/sepa:

SEPA Credit Transfer
====================

To enable SEPA Credit Transfer as a payment method, follow :ref:`these steps
<accounting/sepa_payments/sct>` and enter `Belastingdienst` as the :guilabel:`Issuer`.
