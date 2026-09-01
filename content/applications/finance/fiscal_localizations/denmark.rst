=======
Denmark
=======

.. _localizations_denmark/configuration/modules:

Modules
=======

The following modules are installed automatically with the Danish localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Denmark - Accounting`
     - `l10n_dk`
     - Danish :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with
       the Danish chart of accounts, taxes, tax report, and fiscal positions
   * - :guilabel:`Denmark - Accounting Reports`
     - `l10n_dk_reports`
     - Module providing Danish accounting reports
   * - :guilabel:`Denmark - E-invoicing`
     - `l10n_dk_oioubl`
     - Module providing e-Invoicing support for Denmark
   * - :guilabel:`Denmark EDI - Nemhandel`
     - `l10n_dk_nemhandel`
     - Send and receive documents via Nemhandel network in OIOUBL 2.1 format
   * - :guilabel:`Denmark - Nemhandel Business Response`
     - `l10n_dk_nemhandel_response`
     - Enables the rejection and approval of sent and received documents
   * - :guilabel:`Denmark - FIK Number`
     - `l10n_dk_fik`
     - Support Danish FIK number as payment references on customer invoices

Additionally, the following modules must be manually :ref:`installed <general/install>`:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Denmark - Intrastat`
     - `l10n_dk_intrastat`
     - Enables the Intrastat report
   * - :guilabel:`Denmark - RSU`
     - `l10n_dk_rsu`
     - Enables submitting your tax reports to the Danish tax authorities
   * - :guilabel:`Denmark - SAF-T Import`
     - `l10n_dk_saft_import`
     - Enables the import of SAF-T files

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually
   :ref:`installed <general/install>`.

.. seealso::
   :doc:`Documentation on e-invoicing's legality and compliance in Denmark
   <../accounting/customer_invoices/electronic_invoicing/denmark>`

.. _denmark/configuration:

Configuration
=============

The Danish localization package ensures compliance with Danish fiscal and accounting regulations. It
includes tools for managing taxes, fiscal positions, reporting, and a predefined chart of accounts
tailored to Denmark's standards.

The Danish localization package provides the following key features to ensure compliance with local
fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Danish
  accounting standards
- :ref:`localizations/denmark/taxes`: pre-configured tax rates, including standard VAT, zero-rated,
  and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`localizations/denmark/eds`: integration with NemHandel and Peppol to meet electronic
  document regulations

.. _localizations/denmark/coa:

Chart of accounts
-----------------

In the :doc:`chart of accounts <../accounting/get_started/chart_of_accounts>`, accounts are
automatically mapped to their corresponding taxes and default accounts payable and accounts
receivable fields.

.. _localizations/denmark/taxes:

Taxes
-----

:doc:`Taxes <../accounting/taxes>` are automatically created and configured when the Danish
localization is installed.

.. _localizations/denmark/eds:

Electronic document solutions
-----------------------------

The Danish localization ensures compliance with the `Danish Digital Bookkeeping Act
<electronic_invoicing/denmark/dba-compliance>`_ and `Danish Executive Order on Electronic Invoicing
<https://www.retsinformation.dk/>`_.

Through the NemHandel and Peppol integration, Odoo enables the automated transmission, reception,
and management of e-documents in accordance with the :abbr:`DBA (Danish Bookkeeping Act)` and Danish
Executive Order on Electronic Invoicing. The main functionalities of the integration include:

- sending and receiving electronic invoices and digital vouchers directly through the NemHandel and
  Peppol networks

- maintaining immutable, traceable transaction records and prohibiting deletion of posted entries
  and attachments

- retaining transactional data and mandatory digital vouchers in encrypted storage for a minimum of
  five years (extended to six years of cloud backup retention upon subscription termination)

- exporting transaction history and attached documents at any time in decrypted, machine-readable
  formats (SQL dumps and ZIP archives)

.. _denmark/nemhandel:

NemHandel integration
=====================

To activate NemHandel E-Delivery, go to :menuselection:`Accounting --> Configuration --> Settings`,
scroll down to the :guilabel:`Nemhandel E-Delivery` section and click :guilabel:`Start sending via
Nemhandel`. Then, fill out the following fields:

- :guilabel:`CVR`, :guilabel:`EAN/GLN`, :guilabel:`IBAN`, or :guilabel:`SE`: Select one of the
  options and enter the related number.
- :guilabel:`Email`: Enter your company's email.
- :guilabel:`Phone`: Enter your company's phone number.

When done, click :guilabel:`Activate Nemhandel`.

Updating contact details
------------------------

To update NemHandel contact details, go to the :ref:`Nemhandel section <denmark/nemhandel>`. Select
an :guilabel:`Incoming Invoices Journal` and :guilabel:`Contact Email` of your choice, and then
click :guilabel:`Update contact details`.

To deregister your Odoo database from the NemHandel system, click :guilabel:`Deregister`.

.. note::
   Your **NemHandel ID** is found in this section.

.. _denmark/peppol:

PEPPOL Electronic Invoicing
===========================

To activate PEPPOL Electronic Invoicing, go to :menuselection:`Accounting --> Configuration -->
Settings`, scroll down to the :guilabel:`PEPPOL Electronic Invoicing` section and click
:guilabel:`Activate Electronic Invoicing`. Then, fill out the following fields:

- :guilabel:`Denmark P`, :guilabel:`Denmark CVR`, or :guilabel:`Denmark SE`: Select one of the
  options and enter the related number.
- :guilabel:`Email`: Enter your company's email.
- :guilabel:`Phone`: Enter your company's phone number.

When done, click :guilabel:`Activate Peppol`.

Updating contact details
------------------------

To update PEPPOL contact details, go to the :ref:`PEPPOL Electronic Invoicing section
<denmark/peppol>`. Select an :guilabel:`Incoming Invoices Journal` and
:guilabel:`Primary contact Email` of your choice, and then click :guilabel:`Update`.

To remove your Odoo database from the PEPPOL system, click :guilabel:`Remove from Peppol`.

.. tip::
   To disable the reception of documents through PEPPOL but maintain the ability to send customer
   invoices, click :guilabel:`Disable the reception`. To re-enable it, click :guilabel:`Allow
   reception`.

.. note::
   Your **PEPPOL ID** is found in this section.

SAF-T import
============

To import your data into Odoo, :doc:`install <../../general/apps_modules>` the module
:guilabel:`Denmark - SAF-T import`. Then, go to :menuselection:`Accounting --> Configuration -->
Settings`. Under the :guilabel:`Accounting Import` section, click :icon:`oi-arrow-right`
:guilabel:`Import` and click :guilabel:`SAF-T`.

Check :guilabel:`Import account opening balances` if you wish to import account opening balances,
then click :guilabel:`Upload your file` and select the SAF-T file to import.

Once redy, click :guilabel:`Import` to import your data into Odoo.
