================================================================
Electronic invoicing (:abbr:`EDI (electronic data interchange)`)
================================================================

EDI, or electronic data interchange, is the inter-company communication of business documents, such
as purchase orders and invoices, in a standard format. Sending documents according to an EDI
standard ensures that the machine receiving the message can interpret the information correctly.
Various EDI file formats exist and are available depending on your company's country.

EDI feature enables automating the administration between companies and might also be required by
some governments for fiscal control or to facilitate the administration.

Electronic invoicing of your documents such as customer invoices, credit notes or vendor bills is
one of the application of EDI.

Odoo supports, among others, the following formats.

.. list-table::
   :header-rows: 1

   * - Format Name
     - Applicability
   * - Factur-X (PDF/A-3)
     - For French and German companies
   * - Peppol BIS Billing 3.0 (UBL BIS Billing 3.0)
     - For companies whose countries are part of the `EAS list
       <https://docs.peppol.eu/poacc/billing/3.0/codelist/eas/>`_
   * - E-FFF
     - For Belgian companies
   * - XRechnung (UBL)
     - For German companies
   * - Fattura PA (IT)
     - For Italian companies
   * - CFDI (4.0)
     - For Mexican companies
   * - Peru UBL 2.1
     - For Peruvian companies
   * - SII IVA Llevanza de libros registro (ES)
     - For Spanish companies
   * - UBL 2.1 (Columbia)
     - For Colombian companies
   * - Egyptian Tax Authority
     - For Egyptian companies
   * - E-Invoice (IN)
     - For Indian companies
   * - NLCIUS (Netherlands)
     - For Dutch companies
   * - EHF 3.0
     - For Norwegian companies
   * - SG BIS Billing 3.0
     - For Singaporean companies
   * - A-NZ BIS Billing 3.0
     - For Australian/New Zealand companies
   * - Peppol
     - For :ref:`Peppol<e-invoicing/peppol>`

.. seealso::
   :ref:`fiscal_localizations/packages`

.. _e-invoicing/configuration:

Configuration
=============

Go to :menuselection:`Accounting --> Configuration --> Journals --> Customer Invoices --> Advanced
Settings --> Electronic Invoicing` and enable the formats you need for this journal.

.. image:: electronic_invoicing/formats.png
   :align: center
   :alt: Select the EDI format you need

Once an electronic invoicing format is enabled, XML documents are generated when clicking on
:guilabel:`Confirm` in documents such as invoices, credit notes, etc. These documents are either
visible in the attachment section, or embedded in the PDF.

.. note::
   - For E-FFF, the xml file only appears after having generated the PDF (:guilabel:`Print` or
     :guilabel:`Send & Print` button), since the PDF needs to be embedded inside the xml.
   - Every PDF generated from Odoo contains a :guilabel:`Factur-X` XML file (for interoperability purpose).
     For German and French companies, the option :guilabel:`Factur-X (PDF/A-3)` in addition enables
     validation checks on the invoice and generates a PDF/A-3 compliant file, required by plaftorms like Chorus Pro.
   - The formats available depend on the country registered in your company's :guilabel:`General
     Information`.
   - Odoo supports the **Peppol BIS Billing 3.0** format that can be used via existing access
     points.

.. _e-invoicing/peppol:

Peppol
======

The `Peppol <https://peppol.org/about/>`_ network ensures the exchange of documents and information
between companies and governmental authorities. It is primarily used for electronic invoicing, and
its access points (connectors to the Peppol network) allow companies to send electronic documents
such as customer invoices and credit notes and receive documents like vendor bills and refunds.

In this case, Odoo acts as both an **access point** and an :abbr:`SMP (Service Metadata Publisher)`
and enables electronic invoicing transactions without the need to send invoices or bills by email or
post.

.. note::
   - Make sure to :ref:`install <general/install>` the :guilabel:`Peppol` module (`account_peppol`).
   - Peppol registration is **free** and available in Odoo Community.
   - Supported formats for sending documents include **BIS Billing 3.0, XRechnung CIUS, and
     NLCIUS**.
   - | The following **countries** are eligible for **Peppol registration in Odoo**:
     | Andorra, Albania, Austria, Bosnia and Herzegovina, Belgium, Bulgaria, Switzerland, Cyprus,
       Czech Republic, Germany, Denmark, Estonia, Spain, Finland, France, United Kingdom, Greece,
       Croatia, Hungary, Ireland, Iceland, Italy, Liechtenstein, Lithuania, Luxembourg, Latvia,
       Monaco, Montenegro, North Macedonia, Malta, Netherlands, Norway, Poland, Portugal, Romania,
       Serbia, Sweden, Slovenia, Slovakia, San Marino, Turkey, Holy See (Vatican City State)

.. _e-invoicing/peppol-registration:

Registration
------------

To register on Peppol, go to :menuselection:`Accounting --> Configuration --> Settings`, scroll
to the :guilabel:`PEPPOL Electronic Document Invoicing` section, and fill in the following
information:

- :guilabel:`Peppol EAS`: Peppol Electronic Address Scheme, which usually depends on the
  company's country. This field is often prefilled with your country's most commonly used EAS
  code. For example, the preferred EAS code for most companies in Belgium is `0208`.
- :guilabel:`Peppol Endpoint`: usually a Company Registry number or a VAT number
- :guilabel:`Mobile Number`, including the country code (e.g., `+32` in Belgium)
- :guilabel:`Primary contact email`

   .. seealso::
      - `Peppol EAS - European Commision <https://ec.europa.eu/digital-building-blocks/wikis/display/DIGITAL/Code+lists/>`_
      - `Peppol endpoint - OpenPeppol eDEC Code Lists <https://docs.peppol.eu/edelivery/codelists/>`_
        (open the "Participant Identifier Schemes" as HTML page)

#. Click :guilabel:`Validate registration`.

#. The registration should be automatically activated, and the :guilabel:`Application status`
   should be updated within a day.

#. Select another purchase journal in the :guilabel:`Incoming Invoices Journal` field if necessary.

All invoices can then be sent directly using Peppol.

.. note::
   - To update the :guilabel:`Primary contact email`, modify it and click :guilabel:`Update contact
     details`.
   - If you are using an access point from a previous provider, make sure to deregister from it
     first, then register with your new access point, unless it's Hermes (BOSA). If using Hermes
     (BOSA), no action is needed; the migration is handled automatically.

.. tip::
   - To manually trigger the scheduled action used to check the Peppol registration status, enable
     :ref:`developer mode <developer-mode>`, open the Settings app, go to :menuselection:`Settings
     --> Technical --> Scheduled actions`, and search for :guilabel:`Peppol: update participant
     status`. Open the scheduled action, then click :guilabel:`Run Manually`.
   - To try Peppol without sending real data, use the demo mode by setting the
     :guilabel:`account_edi_proxy_client.demo` system parameter to `demo`. This has to be done
     before clicking :guilabel:`Validate registration`.
   - For advanced testing on Peppol's dedicated test network, use the test mode by setting the
     :guilabel:`account_edi_proxy_client.demo` system parameter to `test`. This option is intended for
     experienced users only. This has to be done before clicking :guilabel:`Validate registration`.

.. _e-invoicing/contact-verification:

Contact verification
--------------------

Before sending an invoice to a contact using Peppol, make sure the contact is registered as a Peppol
participant. To do so, follow these steps:

#. Go to :menuselection:`Accounting --> Customers --> Customers` and access the customer's form.
#. In the :guilabel:`Accounting tab`, check the following information in the :guilabel:`Electronic
   Invoicing` section:

   - :guilabel:`Format`: :guilabel:`BIS Billing 3.0`, :guilabel:`XRechnung CIUS`, or
     :guilabel:`NLCIUS`.
   - :guilabel:`Peppol e-address (EAS)`: Select the relevant EAS code in the dropdown list.
   - :guilabel:`Peppol Endpoint`: Enter the customer's endpoint identifier.

#. Click :guilabel:`Verify`. Its :guilabel:`Peppol endpoint validity` is marked as :guilabel:`Valid`
   if the contact is found on the Peppol network.

.. important::
   While Odoo prefills both the EAS code and the endpoint number based on the information available
   for a contact, verifying these details with the contact is recommended.

.. _e-invoicing/send-invoices:

Send invoices
-------------

To generate Peppol documents for invoices of a journal
:ref:`enable the EDI format called 'Peppol' on the journal<e-invoicing/configuration>`.
This should have happened automatically for countries in which Peppol is used by installing the module.
Then confirming an invoice will generate Peppol a document in the format selected on the partner
during the :ref:`contact verification<e-invoicing/contact-verification>`.


Posted invoices to be sent via Peppol are marked as :guilabel:`Ready to send` in the invoice's
:guilabel:`PEPPOL status` field.

.. note::
   All invoices that are ready to be sent via Peppol can be viewed in the following ways:

   - In the :guilabel:`Invoices` list view, use the :icon:`oi-settings-adjust` (:guilabel:`adjust
     settings`) button to add the :guilabel:`PEPPOL status` column or apply the :guilabel:`Peppol
     Ready` filter in the search bar.
   - In the Accounting dashboard, click :guilabel:`Peppol ready invoices` on the relevant sales
     journal.

To send the invoice to the customer via Peppol, click :guilabel:`Send & Print` on the confirmed
invoice form. In the :guilabel:`Send` window, enable  :guilabel:`Send via PEPPOL` options, then click
:guilabel:`Send & Print` (or :guilabel:`Send` or :guilabel:`Send (Peppol)` or :guilabel:`Print`
depending on which of the :guilabel:`Print` and :guilabel:`Email` options are selected).

.. tip::
   Multiple invoices can also be sent in batches via Peppol by using the :guilabel:`Invoices`
   list view.

Once the invoices are sent via Peppol, their :guilabel:`PEPPOL status` is changed to
:guilabel:`Processing`.

The status is updated to :guilabel:`Done` once the invoices have been successfully delivered to the
contact's access point.

.. tip::
   To manually trigger the scheduled action used to check the invoices' status, go to the
   Accounting dashboard and click :guilabel:`Fetch Peppol invoice status` on the corresponding sales
   journal.

.. _e-invoicing/receive-vendor-bills:

Receive vendor bills
--------------------

New documents received via Peppol are checked multiple times a day. Received documents are
automatically imported into the purchase journal set in the :guilabel:`PEPPOL Electronic Document
Invoicing` section, and corresponding vendor bills are created as drafts and appear in the vendor
bills list view.

.. tip::
   To manually trigger the scheduled action to retrieve incoming Peppol documents, go to the
   Accounting dashboard and click :guilabel:`Fetch from Peppol` on the main Peppol purchase journal.

.. _e-invoicing/peppol-deregister:

Peppol deregistration from Odoo
-------------------------------

Only one Peppol receiver registration can be active for each Peppol endpoint identifier at a time.
To stop using Odoo as the Peppol access point, e.g., to switch to another provider or reconfigure
the registration for a new database, you must first deregister from Peppol. To do so, go to
:menuselection:`Accounting --> Configuration --> Settings`, scroll down to the :guilabel:`PEPPOL
Electronic Invoicing` section, and click :guilabel:`Deregister from Peppol`.

Once removed, the Peppol registration is deleted from the database, and documents can no longer be
sent or received via Peppol in Odoo.
