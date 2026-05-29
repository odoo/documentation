======
Poland
======

.. _localizations/poland/modules:

Modules
=======

The following modules are installed automatically with the Polish localization:

.. list-table::
   :header-rows: 1
   :widths: 25 25 50

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Poland - Accounting`
     - `l10n_pl`
     - Polish :ref:`fiscal localization package <fiscal_localizations/packages>`, complete with the
       local chart of accounts, taxes, tax report, and fiscal positions
   * - :guilabel:`Poland - Accounting Reports`
     - `l10n_pl_reports`
     - Accounting reports for Poland
   * - :guilabel:`Polish - E-Invoicing FA (3)`
     - `l10n_pl_edi`
     - Integration module for KSeF to support Polish e-Invoicing requirements
   * - :guilabel:`Poland - Taxable Supply Date`
     - `l10n_pl_taxable_supply_date`
     - Support for taxable supply dates
   * - :guilabel:`Poland - Accounting - Bank Account Verification`
     - `l10n_pl_bank_verification`
     - Verification of the VAT/Bank account number combination for PL-to-PL payments exceeding
       15,000 PLN
   * - :guilabel:`Poland - JPK FA Reports`
     - `l10n_pl_reports_jpk_fa`
     - Module to generate JPK_FA XML reports for Poland
   * - :guilabel:`Poland - JPK_VAT PoS Enterprise`
     - `l10n_pl_reports_pos_jpk`
     - Integration module for PoS information in the Polish JPK report
   * - :guilabel:`Poland - SAFT Income Tax Report (JPK KR PD)`
     - `l10n_pl_reports_account_saft`
     - Module to generate the JPK_KR_PD XML report for Poland

.. note::
   In some cases, such as when upgrading to a version with additional modules, it is possible that
   modules may not be installed automatically. Any missing modules can be manually :ref:`installed
   <general/install>`.

.. _localizations/poland/ksef:

E-invoicing with KSeF
=====================

`KSeF <https://ksef.podatki.gov.pl/>`_ is Poland's mandatory, centralized electronic invoicing
system used to issue, transmit, and store electronic invoices according to national regulations.

.. _localizations/poland/ksef-configuration:

.. seealso::
   `KSeF platform video tutorials of the Polish Ministry of Finance <https://www.youtube.com/watch?v=V6E1fGUFPw4&list=PLGj5OAFBHLKX0cEVGjcGplnbX6LpDFF38&index=1>`_

Configuration
-------------

To use KSeF e-Invoicing with Odoo, first `create a KSeF account <https://ap.ksef.mf.gov.pl/web/>`_
or log in using your company's NIP if you already have credentials. Next, request a certificate and
ensure you save the password created during this process, as it will be required later.

Once the certificate request is complete, download the `.pem` **certificate file** and save the
**private key** issued by KSeF. You will need both to complete the Odoo integration.

.. _localizations/poland/linking-ksef:

Link Odoo to KSeF
~~~~~~~~~~~~~~~~~

.. seealso::
   `KSeF test and pre-production environments <https://ksef.podatki.gov.pl/aplikacja-podatnika-ksef-20/>`_

#. Open the **Accounting** app and navigate to :menuselection:`Configuration --> Settings`.
#. Scroll down to the :guilabel:`Polish Localization` section and enable :guilabel:`Allow KSeF
   integration`.
#. Enter a name for your KSeF certificate in the newly enabled field, then select :guilabel:`Create
   and edit...` from the drop-down menu.
#. In the pop-up window, click :guilabel:`Upload your file` and select your **certificate**
   (`.pem`). In the :guilabel:`Certificate Password` field, enter the password created during the
   certificate application on the KSeF platform.
#. Once the certificate is uploaded, the :guilabel:`Private Key` field appears. Click the empty
   field, select :guilabel:`Create` from the drop-down menu, and enter your **private key**. The
   **public key** is embedded within the `.pem` file and is automatically filled in.
#. Finally, click :guilabel:`Save`.

.. _localizations/poland/company-and-contacts:

Company and customers
~~~~~~~~~~~~~~~~~~~~~

The KSeF invoicing workflow requires address information related to the company that sends the
invoices and the customers who receive them:

#. Go to :menuselection:`Settings --> Users & Companies --> Companies` and select the company that
   will use KSeF.
#. Fill in the :guilabel:`Company Name`, :guilabel:`VAT` (Tax ID), and :guilabel:`Country`. If
   desired, fill in additional optional fields such as :guilabel:`Street`, :guilabel:`City`,
   :guilabel:`State`, and :guilabel:`ZIP`.

   .. important::
      - The :guilabel:`Country` must be set to :guilabel:`Poland`.
      - The company must have a valid Polish VAT (**NIP**) number.

#. Open the **Accounting** app, and go to :menuselection:`Customers --> Customers`.
#. For each customer whose invoices will be sent to KSeF, click on the customer to open the form
   view, and complete the :guilabel:`Country` and :guilabel:`VAT`. If desired, fill in additional
   optional fields such as :guilabel:`Street`, :guilabel:`City`, :guilabel:`State`, and
   :guilabel:`ZIP`.

.. _localizations/poland/sending-invoices:

Sending invoices to KSeF via Odoo
---------------------------------

Once you have :ref:`linked your company with KSeF <localizations/poland/linking-ksef>` and
:ref:`configured your company and contacts <localizations/poland/company-and-contacts>`, you can
send invoices to KSeF directly through Odoo:

#. Open the **Accounting** app, go to :menuselection:`Customers --> Invoices`, and select a posted
   invoice.
#. Click :guilabel:`Send`.
#. In the pop-up window, check :guilabel:`Send via KSeF (e-Faktura)` and click :guilabel:`Send`.

When an invoice is sent, Odoo automatically:

- Generates the invoice in the required FA(3) XML format.
- Submits the file to KSeF for validation.
- Saves a copy of the XML file in the invoice's chatter.

You can also manually export the FA(3) XML and check the invoice's processing status:

#. Open a posted invoice.
#. Click :guilabel:`Export FA(3) XML` to download the invoice as an XML file to your browser's
   download folder.
#. To check its processing status, click :guilabel:`Check invoice status` next to the export option.
#. The live status is displayed on the invoice under the :guilabel:`eInvoice status` field.

Once the Polish government officially registers the invoice on the KSeF platform, it assigns an
**Official Receipt Certificate (UPO)**. To view it, open the invoice and click
:guilabel:`Check invoice UPO`.

.. _localizations/poland/ksef-import:

Automatic bill import
~~~~~~~~~~~~~~~~~~~~~

By default, the Polish localization automatically fetches vendor bills from KSeF every three hours.
To adjust this frequency or toggle the feature:

#. With :doc:`developer mode <../../general/developer_mode>` activated, open the **Settings** app
   and go to :menuselection:`Technical --> Scheduled Actions`.
#. Search for and open :guilabel:`Polish eInvoice: Download vendor bills from KSeF`.
#. Use the :guilabel:`Execute Every` field to change the frequency.
