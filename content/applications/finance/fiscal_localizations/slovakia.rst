========
Slovakia
========

.. _localizations_slovakia/configuration/modules:

Modules
=======

The following modules are installed automatically with the Slovak localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Slovak - Accounting`
     - `l10n_sk`
     - Slovak :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with
       the Slovak chart of accounts, taxes, tax report, and fiscal positions.
   * - :guilabel:`Slovak - E-Invoicing (Peppol)`
     - `l10n_sk_peppol`
     - Enables the integration of Peppol and registering of the company via the Slovak KYC system.
   * - :guilabel:`Slovakia - Payroll`
     - `l10n_sk_hr_payroll`
     - Includes the necessary rules for Slovak payroll.
   * - :guilabel:`Slovakia - Payroll with Accounting`
     - `l10n_sk_hr_payroll_account`
     - Includes the necessary accounting data for Slovak payroll rules.

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing's legality and compliance in Slovakia
   <../accounting/customer_invoices/electronic_invoicing/slovakia>`

.. _localizations/slovakia/specifics:

Localization overview
=====================

The Slovak localization package ensures compliance with Slovak fiscal and accounting regulations. It
includes tools for managing taxes, fiscal positions, reporting, and a predefined chart of accounts
tailored to Slovakia's standards.

The Slovak localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Slovak
  accounting standards.
- Taxes: pre-configured tax rates, including standard VAT, zero-rated,
  and exempt options.
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status.
- :ref:`localizations/slovakia/peppol`: integration with Peppol to meet electronic document
  regulations.

.. _localizations/slovakia/peppol:

Electronic invoicing with Peppol
================================

To activate Peppol, go to :menuselection:`Accounting --> Configuration --> Settings`, scroll down to
the :guilabel:`PEPPOL Electronic Invoicing` section and click :guilabel:`Activate Electronic
Invoicing`.

Before you can send and receive electronic invoices via Peppol, you must complete your registration
on the official government portal:

#. Go to the `governmental portal <https://vpds.financnasprava.sk/>`_ and designate Odoo as your
   service provider (Access Point).
#. Retrieve the validation token sent to you by email.

   .. note::
      The token will also be sent to Odoo to confirm your identity.

#. In Odoo, enter the token received by email in the :guilabel:`Enter the verification token below`
   field.
#. Finally, click :guilabel:`Activate Peppol`.

Tax data documents
------------------

Every invoice sent or received via :ref:`Peppol <localizations/slovakia/peppol>` generates a tax
data document containing the invoice data required by the Slovak Financial Administration. This
document is automatically sent to the Slovak Financial Administration, a copy of it retrieved by
your Odoo database and attached to the related invoice or bill.

.. tip::
   To manually retrieve tax data documents, enable the :doc:`/applications/general/developer_mode`,
   go to :menuselection:`Settings --> Technical --> Scheduled Actions`, and search for
   `PEPPOL: retrieve new tax data documents`. Open it, and click :guilabel:`Run Manually`.

.. seealso::
   :doc:`../accounting/reporting`
