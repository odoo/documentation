==============
Netherlands
===========

.. _localizations/netherlands/modules:

Modules
=======

The following modules are installed automatically with the Dutch localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

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

Additionally, the following modules must be manually :ref:`installed <general/install>` in order to
use the SBR reporting, Dutch-specific payroll features, and Intrastat reporting.

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

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
     - Generates Netherlands Intrastat report for declaration based on invoices
   * - :guilabel:`Netherlands - SBR`
     - `l10n_nl_reports_sbr`
     - Electronically submit Dutch tax declarations directly via SBR
   * - :guilabel:`Netherlands - SBR ICP`
     - `l10n_nl_reports_sbr_icp`
     - Electronically submit your Intracommunity Services to the Dutch tax authorities directly via
       SBR
   * - :guilabel:`Netherlands - SBR OB Nummer`
     - `l10n_nl_reports_sbr_ob_nummer`
     - Adds the missing Omzetbelastingnummer field for a correct exchange through SBR
   * - :guilabel:`Netherlands - SBR Status information service`
     - `l10n_nl_reports_sbr_status_info`
     - Allows you to check on the status of a submitted report to Digipoort

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually
   :ref:`installed <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing’s legality and compliance in the Netherlands
   <../accounting/customer_invoices/electronic_invoicing/netherlands>`

.. _localizations/netherlands/overview:

Localization overview
=====================

The Netherlands localization package ensures compliance with Dutch fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Türkiye’s standards.

The Dutch localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :doc:`Chart of accounts <../accounting/get_started/chart_of_accounts>`: a predefined structure
  tailored to Turkish account standards
- :ref:`Taxes <localizations/netherlands/taxes>`: pre-configured tax rates, including standard VAT,
  zero-rated, and exempt options
- :doc:`Fiscal positions (tax and account mapping) <../accounting/taxes/fiscal_positions>`:
  automated tax adjustments based on customer or supplier registration status
- :ref:`Electronic documents solutions` < >:

.. _localizations/netherlands/chart-of-accounts:

Chart of accounts
-----------------

In the :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>`, accounts are
automatically mapped to their corresponding taxes and default accounts payable and accounts
receivable fields.

.. note::
   test

.. _localizations/netherlands/fiscal-positions:

Fiscal positions
----------------

:doc:`Fiscal positions (tax and account mapping) < >` are automatically installed with the
Netherlands localizations.

Taxes
-----

:ref:`Taxes <localizations/netherlands/taxes>` are automatically created and configured when the
Netherlands localization is installed.

.. warning::
   Do not delete taxes, as they are used for e-invoice and e-archive invoices. However, new taxes
   can be generated, such as for :guilabel:`withholding tax reasons` that do no exist yet in the
   database.

.. _localizations/netherlands/taxes:

Taxes
=====

The following taxes are available by default with the Netherlands localization package:

- Standard Sales Tax (21%): applied to most goods and services
- Reduced Sales Tax (9%): applied to necessities like foods, books, and medical goods.
- Export Tax (0%): applied to intra-EU goods and services, exports, and other specific cases
- Exempt Tax (0%): for sales and services not subject to VAT

.. _localizations/netherlands/reporting:

Reporting
---------

The VAT summary :doc:` test < >`provides a detailed breakdown of taxable, zero-rated, and exempt transactions. Like
other :doc:`financial reports < >`, the VAT summary can be filtered by period, compared against other periods,
and exported in Excel and PDF formats, ensuring compliance with Dutch tax laws.

.. _localizations/netherlands/company-and-contacts:

Company
=======

To use all the features of this fiscal localization, the following fields is the minimum required on the
company record. You can access these by going to :menuselection:`Settings --> Users & Companies -->
Companies`:

- :guilabel:`Company Name`:
- :guilabel:`Country`:
- :guilabel:`VAT`:

You can fill out the remaining fields as you see fit.

SBR Reporting
=============

:abbr:`SBR (Standard Business Reporting)` electronic reporting is integrated within Odoo and allows
you to send your reports directly to the Dutch tax authorities. To use SBR reporting, make sure to
have the :ref:`Netherlands - SBR <localizations/netherlands/modules>` module installed.

To setup SBR reporting, open the **Accounting** app and go to :menuselection:`Configuration -->
Settings` and scroll down to the :guilabel:`Dutch Localization` section. Click the
:guilabel:`Digipoort Certificate` field, enter a name for the certificate, and then click
:guilabel:`Create and edit...`. In the pop-up window, fill out the fields:

- :guilabel:`Name`: the name previously entered. You can modify it if desired.
- :guilabel:`Certificate`: Click :guilabel:`Upload your file` to upload the certificate as `.pks` format.
- :guilabel:`Certificate Password`: enter the password of your `.pks` file.
- :guilabel:`Validity`: The date on which the certificate's validity starts.
- :guilabel:`Serial Number`: The serial number to add to electronic documents. this can be found...

XAF Export
==========

With the Dutch accounting localization installed, you will be able to
export all your accounting entries in XAF format. For this, you have to
go in :menuselection:`Accounting --> Reporting --> General Ledger`, you
define the entries you want to export using the filters (period, journals, ...)
and then you click on the button **EXPORT (XAF)**.
