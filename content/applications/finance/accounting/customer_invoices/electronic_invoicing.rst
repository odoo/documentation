================================================================
Electronic invoicing (:abbr:`EDI (electronic data interchange)`)
================================================================

EDI, or electronic data interchange, is the inter-company communication of business documents, such
as purchase orders and invoices, in a standard format. Sending documents according to an EDI
standard ensures that the system receiving the message can interpret the information correctly.
Various EDI file formats are available depending on your company's country.

The EDI feature allows companies to automate administrative processes. It may also be required by
some governments for fiscal control or to support administrative procedures. Electronic sending of
documents such as customer invoices, credit notes, or vendor bills is one application of EDI.

Odoo supports e-invoicing in many countries. Refer to the :ref:`country's page
<accounting/e-invoicing/peppol-country-specific>` for more details.

.. seealso::
   :doc:`Fiscal localizations documentation <../../fiscal_localizations>`

.. _accounting/e-invoicing/configuration:

Configuration
=============

By default, the format available in the :ref:`send window <accounting/e-invoicing/generation>`
depends on the customer's country.

To define a specific e-invoicing format for a customer, go to :menuselection:`Accounting -->
Customers --> Customers`, access the customer form, go to the :guilabel:`Accounting` tab, and select
the appropriate :guilabel:`Format` in the :guilabel:`Customer invoices` section.

.. _accounting/e-invoicing/generation:

E-invoice generation
====================

From a confirmed invoice, click :guilabel:`Send`. In the :guilabel:`Print & Send` window, enable the
relevant e-invoicing format option (e.g., :guilabel:`by Peppol`), then click :guilabel:`Send` to
generate and attach the corresponding e-invoicing XML file.

.. _accounting/e-invoicing/peppol:

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
   - Peppol registration is **free** and available in Odoo Community.
   - Supported formats for sending documents include **BIS Billing 3.0, XRechnung CIUS, and
     NLCIUS**.
   - | The following **countries** are eligible for **Peppol registration in Odoo**:
     | Andorra, Albania, Austria, Bosnia and Herzegovina, Belgium, Bulgaria, Switzerland, Cyprus,
       Czech Republic, Germany, Denmark, Estonia, Spain, Finland, France, United Kingdom, Greece,
       Croatia, Hungary, Ireland, Iceland, Italy, Liechtenstein, Lithuania, Luxembourg, Latvia,
       Monaco, Montenegro, North Macedonia, Malta, Netherlands, Norway, Poland, Portugal, Romania,
       Serbia, Sweden, Slovenia, Slovakia, San Marino, Turkey, Holy See (Vatican City State).

.. _accounting/e-invoicing/peppol-registration:

Registration
------------

To register on Peppol, go to :menuselection:`Accounting --> Configuration --> Settings` and scroll
to the :guilabel:`PEPPOL Electronic Invoicing` section. Then, follow these steps:

#. Click :guilabel:`Activate Electronic Invoicing` and fill in the following fields:

   - Using the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon, make sure the relevant
     country-specific Peppol endpoint identifier is selected in the dropdown list, then enter your
     Peppol endpoint (usually a Company Registry or VAT number).
   - :guilabel:`Email`
   - :guilabel:`Phone`, including the country code (e.g., `+32` in Belgium)

#. Click :guilabel:`Activate Peppol`. The registration is then pending activation and should be
   automatically activated within a day.

   .. seealso::
      `Peppol endpoint - OpenPeppol eDEC Code Lists <https://docs.peppol.eu/edelivery/codelists/>`_
      (open the "Participant Identifier Schemes" as HTML page)

#. Define where documents should be received:

   - :guilabel:`Receive in Journal`: If necessary, select another purchase journal in the
     :guilabel:`Incoming Invoices Journal` field.
   - :doc:`Receive in Documents <../../../productivity/documents>`: Select a folder in the
     :guilabel:`Document Workspace` field if multiple purchase journals are used.

#. Click :guilabel:`Save`.

All invoices and vendor bills can then be sent/received directly using Peppol.

.. note::
   - To update the :guilabel:`Primary contact email`, click :icon:`oi-arrow-right`
     :guilabel:`Advanced Configuration`, modify it, and click :guilabel:`Save`.
   - If you are using an access point from a previous provider, make sure to deregister from it
     first, then register with your new access point, unless it's Hermes (BOSA). If using Hermes
     (BOSA), no action is needed; the migration is handled automatically.

.. tip::
   - To manually trigger the scheduled action used to check the Peppol registration status, enable
     :ref:`developer mode <developer-mode>`, open the Settings app, go to :menuselection:`Settings
     --> Technical --> Scheduled actions`, and search for :guilabel:`Peppol: update participant
     status`. Open the scheduled action, then click :guilabel:`Run Manually`.
   - To try Peppol without sending real data, enable demo mode by selecting :guilabel:`Odoo Demo
     ID` as the Peppol endpoint identifier. To switch back to production mode, :ref:`deregister from
     the demo mode <accounting/e-invoicing/peppol-deregister>` and :ref:`register
     <accounting/e-invoicing/peppol-registration>` in production.

.. _accounting/e-invoicing/contact-verification:

Contact verification
--------------------

Before sending an invoice to a contact using Peppol, make sure the contact is registered as a Peppol
participant. To do so, follow these steps:

#. Go to :menuselection:`Accounting --> Customers --> Customers` and access the customer's form.
#. In the :guilabel:`Accounting tab`, check the following information in the :guilabel:`Customer
   invoices` section:

   - :guilabel:`eInvoice format`: Select the relevant format.
   - Using the :icon:`fa-caret-down` :guilabel:`(down arrow)` icon, make sure the relevant
     country-specific Peppol endpoint identifier is selected in the dropdown list, then enter the
     customer's endpoint identifier, usually a Company Registry or VAT number.

#. To verify the contact, enable :ref:`developer mode <developer-mode>` and click
   :guilabel:`Verify`. Its :guilabel:`Peppol endpoint verification` is marked as :guilabel:`Valid`
   if the contact is found on the Peppol network.

.. image:: electronic_invoicing/customer-form.png
   :alt: verify contact registration

.. important::
   While Odoo prefills the endpoint number based on the information available for a contact,
   verifying these details with the contact is recommended.

.. _accounting/e-invoicing/send-invoices:

Send invoices
-------------

All posted invoices that are ready to be sent via Peppol can be viewed in the :guilabel:`Invoices`
list view in the following ways:

- Use the :icon:`oi-settings-adjust` (:guilabel:`adjust settings`) button to add the
  :guilabel:`Peppol status` column.
- Apply the :guilabel:`Peppol Ready` filter in the search bar.

To send the invoice to the customer via Peppol, click :guilabel:`Send` on the confirmed invoice
form. In the :guilabel:`Send` window, enable the :guilabel:`by Peppol` option and click
:guilabel:`Send`.

.. tip::
   - :ref:`Multiple invoices <accounting/invoice/sending-multiple-invoices>` can also be sent in
     batches via Peppol.
   - Set the preferred :ref:`Invoice sending <accounting/invoice/sending>` method for a customer to
     :guilabel:`by Peppol` in the :guilabel:`Customer Invoices` section of the customer form's
     :guilabel:`Accounting` tab.

The status is updated to :guilabel:`Done` once the invoices have been successfully delivered to the
contact's access point.

.. _accounting/e-invoicing/receive-vendor-bills:

Receive vendor bills
--------------------

New documents received via Peppol are checked multiple times a day. Depending on the
:ref:`registration settings <accounting/e-invoicing/peppol-registration>`, received documents
are automatically:

- either imported into the purchase journal set in the :guilabel:`PEPPOL Electronic Invoicing`
  section, and corresponding vendor bills are created as drafts;
- or received via the :ref:`Documents app
  <accounting/e-invoicing/receive-vendor-bills-documents-app>`.

.. tip::
   To manually trigger the scheduled action used to retrieve incoming Peppol documents, enable
   :ref:`developer mode <developer-mode>`, open the Settings app, go to :menuselection:`Settings -->
   Technical --> Scheduled actions`, and search for :guilabel:`Peppol: retrieve new documents`. Open
   the scheduled action, then click :guilabel:`Run Manually`.

.. _accounting/e-invoicing/receive-vendor-bills-documents-app:

Vendor bills reception in Documents
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::
   Make sure the :guilabel:`Documents - Import from Peppol` (`documents_account_peppol`) module is
   :ref:`installed <general/install>`.

To receive vendor bills via the :doc:`Documents app <../../../productivity/documents>`, follow these
steps:

#. In the Documents app, create a specific :ref:`folder <documents/folders>` or enable :ref:`file
   centralization <documents/file-centralization>` for :guilabel:`Accounting` documents.
#. Open the Accounting app, go to :menuselection:`Accounting --> Configuration --> Settings`, and
   scroll to the :guilabel:`PEPPOL Electronic Invoicing` section.
#. In the :guilabel:`Document Workspace` field, choose the relevant folder.
#. Use the :guilabel:`Document Tags` field to add tags to incoming Peppol documents for easy
   identification.
#. Click :guilabel:`Save`.

Then, open the Document app, navigate to the appropriate folder, select the relevant vendor bills,
and click :guilabel:`Create Vendor Bill`. The corresponding vendor bill is then created.

.. _accounting/e-invoicing/peppol-deregister:

Peppol deregistration from Odoo
-------------------------------

Only one Peppol receiver registration can be active for each Peppol endpoint identifier at a time.
To stop using Odoo as the Peppol access point, e.g., to switch to another provider or reconfigure
the registration for a new database, you must first deregister from Peppol. To do so, go to
:menuselection:`Accounting --> Configuration --> Settings`, scroll down to the :guilabel:`PEPPOL
Electronic Invoicing` section, and click :icon:`oi-arrow-right` :guilabel:`Advanced Configuration`.
Then click :guilabel:`Remove from Peppol` and confirm.

Once removed, the Peppol registration is deleted from the database, and documents can no longer be
sent or received via Peppol in Odoo.

.. _accounting/e-invoicing/peppol-country-specific:

Country-specific e-invoicing details
====================================

Refer to the following pages for detailed, country-specific information:

- :doc:`Argentina <electronic_invoicing/argentina>`
- :doc:`Austria <electronic_invoicing/austria>`
- :doc:`Belgium <electronic_invoicing/belgium>`
- :doc:`Brazil <electronic_invoicing/brazil>`
- :doc:`Chile <electronic_invoicing/chile>`
- :doc:`Colombia <electronic_invoicing/colombia>`
- :doc:`Croatia <electronic_invoicing/croatia>`
- :doc:`Ecuador <electronic_invoicing/ecuador>`
- :doc:`Estonia <electronic_invoicing/estonia>`
- :doc:`Finland <electronic_invoicing/finland>`
- :doc:`Guatemala <electronic_invoicing/guatemala>`
- :doc:`Hungary <electronic_invoicing/hungary>`
- :doc:`Ireland <electronic_invoicing/ireland>`
- :doc:`Italy <electronic_invoicing/italy>`
- :doc:`Latvia <electronic_invoicing/latvia>`
- :doc:`Lithuania <electronic_invoicing/lithuania>`
- :doc:`Luxembourg <electronic_invoicing/luxembourg>`
- :doc:`Mexico <electronic_invoicing/mexico>`
- :doc:`Netherlands <electronic_invoicing/netherlands>`
- :doc:`Norway <electronic_invoicing/norway>`
- :doc:`Peru <electronic_invoicing/peru>`
- :doc:`Romania <electronic_invoicing/romania>`
- :doc:`Spain <electronic_invoicing/spain>`
- :doc:`Spain - Basque Country <electronic_invoicing/basque_country>`
- :doc:`Uruguay <electronic_invoicing/uruguay>`
