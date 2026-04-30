=======
Hungary
=======

.. _localizations_hungary/configuration/modules:

Modules
=======

The following modules are installed automatically with the Hungarian localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Hungary - Accounting`
     - `l10n_hu`
     - Hungarian :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with
       the Hungarian chart of accounts, taxes, tax report, and fiscal positions
   * - :guilabel:`Hungary - Accounting Reports`
     - `l10n_hu_reports`
     - Integration module of the Hungarian accounting reports
   * - :guilabel:`Hungary - E-invoicing`
     - `l10n_hu_edi`
     - Integration module to support the Hungarian tax authority e-Invoicing (NAV 3.0) requirements

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. _localizations/hungarian/specifics:

Localization overview
=====================

The Hungarian localization package offers key features and integration capabilities that ensure
compliance with local fiscal and accounting regulations. The package includes tools for managing
taxes, fiscal positions, reporting, and a predefined chart of accounts tailored to Hungarian
authorities' standards.

- :doc:`../accounting/get_started/chart_of_accounts`: a predefined structure tailored to Hungarian
  accounting standards.
- :ref:`localizations/hungary/taxes`: pre-configured tax rates, including standard VAT, compensatory
  surcharge, zero-rated, and exempt options.
- :doc:`../accounting/taxes/fiscal_positions`: automated tax adjustments based on customer or
  supplier registration status.
- :ref:`localizations/hungary/tax-reporting`: detailed overview of your net tax liability.
- :ref:`e-Invoicing <localizations/hungary/e-invoicing>`: integration for electronic invoicing using
  NAV 3.0 (Online Számlá) in line with the National Tax and Customs Administrations' requirements.

.. _localizations/hungary/taxes:

Taxes
-----

The following :doc:`taxes <../accounting/taxes>` are available by default with the Hungarian
localization package:

- Standard and Reduced VAT: standard sales tax (27%) and reduced rates (18% and 5%) applied to
  goods and services in Hungary.
- Agricultural Compensation Surcharge (7% or 12%): applied to specific agricultural and livestock
  products.
- Intra-Community and Trade taxes: zero-rated (0%) and tax-exempt options applied to EU
  intra-community sales, exports outside the EU, and domestic exemptions.

.. _localizations/hungary/tax-reporting:

Tax reporting
-------------

The :doc:`VAT summary <../accounting/reporting/tax_returns>` provides a detailed breakdown of
taxable, zero-rated, and exempt transactions. Like other :doc:`financial reports
<../accounting/reporting>`, the VAT summary can be filtered by period, compared against other
periods, and exported in Excel and PDF formats, ensuring compliance with Hungarian tax laws.

.. _localizations/hungary/e-invoicing:

e-Invoicing with NAV 3.0
========================

NAV 3.0 e-Invoicing is integrated within Odoo, allowing you to generate compliant electronic
invoices, submit invoices in real time for validation, and track invoice statuses directly within
Odoo.

.. _localizations/hungary/nav-configuration:

Configuration
-------------

NAV 3.0 user credentials
~~~~~~~~~~~~~~~~~~~~~~~~

To configure NAV 3.0:

#. Go to the `government's portal <https://onlineszamla.nav.gov.hu/home>`_ and log in using your
   **Ügyfélkapu+** details.
#. Select :guilabel:`Primary User` and log in via the KAÜ system. Select the correct taxpayer
   profile if prompted.
#. Go to the :guilabel:`Users` menu, click :guilabel:`New User`, and select :guilabel:`Technical
   User`.
#. Set a username and password, grant permissions for :guilabel:`Manage invoices` and
   :guilabel:`Query invoices`, and click :guilabel:`Save`.
#. On the users details page, click :guilabel:`Generate Key`. Copy and save the
   :guilabel:`Username`, :guilabel:`Password`, :guilabel:`XML Signing Key`, and :guilabel:`XML
   Cryptographic Key`.

.. _localizations/hungary/link-nav:

Link NAV 3.0 to Odoo
~~~~~~~~~~~~~~~~~~~~

To link NAV 3.0 e-Invoicing to Odoo:

#. Open the **Accounting** app and navigate to :menuselection:`Configuration --> Settings`.
#. Scroll to the :guilabel:`Hungarian Electronic Invoicing` section and select the desired
   :guilabel:`Mode`.
#. Input the credentials saved in the previous step:

   - :guilabel:`Username`
   - :guilabel:`Password`
   - :guilabel:`Signature Key` (corresponding to the **XML Signing Key**)
   - :guilabel:`Replacement Key` (corresponding to the **XML Cryptographic Key**)
#. Select the :guilabel:`NAV Tax Regime` if applicable, and click :guilabel:`Save`.

.. _localizations/hungary/company-and-contacts:

Company and customers
~~~~~~~~~~~~~~~~~~~~~

The NAV 3.0 invoicing workflow requires address information related to the company that sends the
invoices and the customers who receive them:

#. Go to :menuselection:`Settings --> Users & Companies --> Companies` and select the company that
   will use NAV 3.0.
#. Enter the :guilabel:`Company Name` that matches the name registered with the National Tax and
   Customs Administration. Then, fill in the :guilabel:`VAT` (TIN), and set the :guilabel:`Country`
   to :guilabel:`Hungary`. In addition, NAV 3.0 requires a valid :guilabel:`City`,
   :guilabel:`Street`, and :guilabel:`Zip`.

   .. Important::
      - The :guilabel:`VAT` must be a Hungarian TIN number.
      - The company's :guilabel:`Currency` can be set to either :guilabel:`HUF` or :guilabel:`EUR`.

#. Go to :menuselection:`Accounting --> Customers --> Customers`.
#. For each customer whose invoices will be sent using NAV 3.0, click on the customer to open the
   form view and complete the :guilabel:`Country` and :guilabel:`Tax ID` fields. If desired, fill in
   additional optional fields such as :guilabel:`Street`, :guilabel:`City`, :guilabel:`State`, and
   :guilabel:`ZIP`.

Sending invoices to NAV 3.0 via Odoo
------------------------------------

Once the company has been :ref:`linked with NAV 3.0 <localizations/hungary/link-nav>` and the
:ref:`company and customers have been properly configured
<localizations/hungary/company-and-contacts>`, invoices can be sent to NAV 3.0 via Odoo:

#. Go to :menuselection:`Accounting --> Customers --> Invoices` and open a confirmed (posted)
   invoice.
#. Click :guilabel:`Send`.
#. In the :guilabel:`Send` window, select :guilabel:`NAV 3.0` and click :guilabel:`Send`.

When an invoice is sent to NAV 3.0, Odoo does the following:

- Generates the required XML (XSD 3.0) file.
- Transmits the data directly to the NAV 3.0 platform.
- Upon transmission to the NAV 3.0, a PDF file is attached to the invoice chatter in Odoo.

.. tip::
   - Multiple invoices can be :ref:`sent to NAV 3.0 at once <accounting/invoice/sending>`.
   - From the :guilabel:`Invoices` view list, filter the invoices by their
     :guilabel:`NAV 3.0 status` to see the invoices that have either been sent or have not been sent
     to NAV 3.0.
   - In the :icon:`oi-settings-adjust` :guilabel:`(adjust settings)` menu, enable the
     :guilabel:`NAV 3.0 status` filter to see the sending state and any errors in the list view.

.. _localizations/hungary/storno-credit-notes:

Credit notes and Storno
-----------------------

Hungarian tax authorities distinguish between two types of corrections:

- **Credit note**: a document that partially modifies the amounts or items of an original invoice.
- **Storno**: a document that fully cancels an original invoice, effectively bringing the balance to
  zero.

Odoo handles both cases automatically. When a credit note is created that brings the total
outstanding amount of the original invoice to **0.00**, Odoo identifies this as a Storno operation.
This classification is then automatically communicated in the electronic reporting to NAV 3.0,
ensuring compliance without manual intervention.
