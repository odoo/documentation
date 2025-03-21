======
Jordan
======

.. _localizations_jordan/configuration/modules:

Modules
=======

The following modules are installed automatically with the Jordanian localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Jordan - Accounting`
     - `l10n_jo`
     - Jordanian :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with
       the Jordanian chart of accounts, taxes, tax report, and fiscal positions
   * - :guilabel:`Jordan E-Invoicing`
     - `l10n_jo_edi`
     - Integration module for JoFotara to support Jordanian e-invoicing requirements

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. _localizations/jordan/specifics:

Localization overview
=====================

The Jordanian localization package ensures compliance with Jordanian fiscal and accounting
regulations. It includes tools for managing taxes, fiscal positions, reporting, and a predefined
chart of accounts tailored to Jordan's standards.

The Jordanian localization package provides the following key features to ensure compliance with
local fiscal and accounting regulations:

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Jordanian
  accounting standards
- :ref:`localizations/jordan/taxes`: pre-configured tax rates, including standard VAT, zero-rated,
  and exempt options
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status
- :ref:`localizations/jordan/tax-reporting`: detailed overview of your net tax liability
- :ref:`E-invoicing (JoFotara)<localizations/jordan/jofotara>`: integration for electronic invoicing
  in line with Jordanian government requirements

.. _localizations/jordan/taxes:

Taxes
-----

The following :doc:`taxes <../accounting/taxes>` are available by default with the Jordanian
localization package:

- standard sales tax (16%): applied to most goods and services within Jordan.
- exempt transactions: for sales and services not subject to VAT, such as financial services or
  healthcare.
- export tax (0%): zero-rated tax applied to goods and services exported outside Jordan.

.. _localizations/jordan/tax-reporting:

Tax reporting
-------------

The :doc:`VAT summary <../accounting/reporting/tax_returns>` provides a detailed breakdown of
taxable, zero-rated, and exempt transactions. Like other :doc:`financial reports
<../accounting/reporting>`, the VAT summary can be filtered by period, compared against other
periods, and exported in Excel and PDF formats, ensuring compliance with Jordanian tax laws.

.. _localizations/jordan/jofotara:

E-invoicing with JoFotara
=========================

E-invoicing with JoFotara is integrated with Odoo, ensuring compliance with Jordanian government's
technical and legal requirements for electronic invoicing. The JoFotara integration in Odoo directly
connects with the Jordanian e-invoicing platform, allowing companies to:

- generate compliant electronic invoices
- submit invoices in real time for validation
- track invoice statuses directly within Odoo

The integration requires first creating an account with JoFotara, then generating API credentials,
and finally entering those credentials in your Odoo database to link the two.

.. _manuals: https://istd.gov.jo/EN/List/Electronic_billing_User_Manual

`Government manuals <manuals_>`_ provide instructions for creating an account and generating the API
credentials.

.. _localizations/jordan/jofotara-configuration:

Configuration
-------------

.. _localizations/jordan/linking-jofotara:

Link Odoo to JoFotara
~~~~~~~~~~~~~~~~~~~~~

#. If you don't already have an account, create one by going to the `government manuals <manuals_>`_
   page and following the steps in the **Procedure Manual for Joining the Jordanian National
   Electronic Invoicing System**.
#. Generate API credentials (Activity Number, Secret Key, and Client ID) by going to the `government
   manuals <manuals_>`_ page and following the steps in **Procedure Manual for Linking to the
   Jordanian National Electronic Invoicing System**.
#. In your Odoo database, go to :menuselection:`Accounting --> Configuration --> Settings`. In the
   :guilabel:`Electronic Invoicing (Jordan)` section, enter the API credentials generated
   previously:

   - :guilabel:`Activity Number` (income source sequence)
   - :guilabel:`JoFotara Secret Key`
   - :guilabel:`JoFotara Client ID`

#. Enter the :guilabel:`Taxpayer type`:

   - :guilabel:`Unregistered in the sales tax`: for businesses not registered for sales tax. No tax
     on the invoice line is required.
   - :guilabel:`Registered in the sales tax`: for businesses registered under the standard sales tax
     system. One tax computed as a percentage is required per invoice line.
   - :guilabel:`Registered in the special sales tax`: for businesses subject to special sales tax
     regulations. One tax computed as a percentage and one fixed tax per invoice line are required
     per invoice.
   - :guilabel:`Registered in the special sales tax`: For businesses subject to special sales tax
     regulations.

     - One tax computed as a percentage and one fixed tax per invoice line are required per invoice.

#. Click :guilabel:`Save`.

.. tip::
   If the :guilabel:`Electronic Invoicing (Jordan)` section is missing from the
   :guilabel:`Settings`, make sure the :guilabel:`Jordan E-Invoicing` module is :ref:`installed
   <general/install>`.

.. _localizations/jordan/company-and-contacts:

Company and customers
~~~~~~~~~~~~~~~~~~~~~

The JoFotara invoicing workflow requires address information related to the company that sends the
invoices and the customers who receive them:

#. Go to :menuselection:`Settings --> Users & Companies --> Companies` and select the company that
   will use JoFotara.
#. Fill in the :guilabel:`Company Name`, :guilabel:`Tax ID` (TIN), and :guilabel:`Country`. If
   desired, fill in additional optional fields such as :guilabel:`Street`, :guilabel:`City`,
   :guilabel:`State`, and :guilabel:`ZIP`.

   .. important::
      - The :guilabel:`Country` must be set to :guilabel:`Jordan`.
      - The :guilabel:`Company Name` must match the name that is registered with the Income and
        Sales Tax Department (ISTD).
      - The company's :guilabel:`Currency` must be set to :guilabel:`JOD`.


#. Go to :menuselection:`Accounting --> Customers --> Customers`.
#. For each customer whose invoices will be sent to JoFotara, click on the customer to open the form
   view, and complete the :guilabel:`Country` and :guilabel:`Tax ID`. If desired, fill in additional
   optional fields such as :guilabel:`Street`, :guilabel:`City`, :guilabel:`State`, and
   :guilabel:`ZIP`.

.. _localizations/jordan/sending-invoices:

Sending invoices to JoFotara via Odoo
-------------------------------------

Once the company has been :ref:`linked with JoFotara <localizations/jordan/linking-jofotara>` and
the :ref:`company and customers have been properly configured
<localizations/jordan/company-and-contacts>`, invoices can be sent to JoFotara via Odoo:

#. Go to :menuselection:`Accounting --> Customers --> Invoices` and open a confirmed (posted)
   invoice.
#. Click :guilabel:`Send & Print`.
#. In the :guilabel:`Send` window, select :guilabel:`Send JoFotara e-invoice` and click
   :guilabel:`Send & Print`.

When an invoice is sent to JoFotara, Odoo does the following:

- generates the invoice in the required format (UBL 1.2)
- submits the invoice to JoFotara for validation
- receives the QR code from JoFotara on the invoice's PDF

.. tip::
   - Multiple invoices can be :ref:`sent at once <accounting/invoice/sending>` to JoFotara.
   - From the :guilabel:`Invoices` list view, filter the invoices by their
     :ref:`localizations/jordan/jofotara-state` to see the invoices that have either been sent or
     not been sent to JoFotara.
   - In the :icon:`oi-settings-adjust` (:guilabel:`adjust settings`) menu, add the
     :guilabel:`JoFotara State` and :guilabel:`JoFotara Error` fields to see the sending state and
     any errors in the list view, respectively.

.. important::
   There is an inherent difference in how values are approximated in Odoo and ISTD due to the
   differing system architectures. JOD values in Odoo are stored and approximated to three decimals,
   whereas ISTD expects values to have nine decimals. As a result, an insignificant difference is
   inevitable and arises between the values stores in Odoo and the values reported to ISTD, which
   can have an error margin of <0.01.

.. _localizations/jordan/jofotara-state:

JoFotara State
~~~~~~~~~~~~~~

The :guilabel:`JoFotara State` field in the :guilabel:`Other Info` tab of confirmed invoices
reflects the current state of the document in JoFotara. It can be changed manually to reflect the
actual state of the invoices in cases where a technical error or timeout prevents Odoo from updating
it automatically.

.. _localizations/jordan/qr-codes:

Validating QR codes (Sanad app)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To validate the QR code received from JoFotara on the invoice, follow these steps:

#. Install the `Sanad app <https://www.sanad.gov.jo/Default/en>`_.
#. Navigate to :guilabel:`More`.
#. Click on :guilabel:`Validate document` and scan the QR code.
#. Review results.

.. _localizations/jordan/debit-credit:

Debit and credit notes
~~~~~~~~~~~~~~~~~~~~~~

To send a debit or credit note to JoFotara, first create the :ref:`debit
<accounting/credit_notes/issue-debit-note>` or :ref:`credit note
<accounting/credit_notes/issue-credit-note>`. In the :guilabel:`Print and Send` window, click
:guilabel:`Send via JoFotara` to submit it for real-time validation. Upon successful validation, the
QR code from JoFotara is embedded in the debit or credit note PDF.

.. note::
   Ensure that the :guilabel:`Reason` for generating a debit/credit note aligns with ISTD
   regulations.

.. _localizations/jordan/discounts:

Discounts
~~~~~~~~~

JoFotara does not support negative quantities or negative prices on invoice lines. As a result,
global discount and fixed amount discount functionality are not supported.

Discounts must be applied **per invoice line as a percentage** instead of as a global discount or
fixed amount.

.. warning::
   Attempting to submit invoices to JoFotara with negative invoice lines will result in validation
   errors.

.. seealso::
   :ref:`Discount types <sales/pricing/discount-button>`
