:industry_module: veterinary_clinic
:knowledge_xmlid: veterinary_clinic.welcome_article

=================
Veterinary clinic
=================

A veterinary visit starts with an owner finding a suitable appointment and continues through the
pet's record, consultation, and payment. Odoo brings those steps together so reception staff and
veterinarians can work from the same client and pet information.

Use the package to present the clinic's services, book visits, record consultation details, and
prepare the products and services for checkout. Pet profiles keep the animal's history with its
owner, while digital forms and sales records support the clinic's administrative work.

.. _industries/veterinary/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* **Website** app: Present the clinic, its services, and appointment-booking links.
* **Appointments** app: Offer available visits and send configured booking confirmations and
  reminders.
* **Contacts** app: Maintain pet-owner details for communication and billing.
* **Pets** app: Maintain pet profiles, consultation records, and associated attachments.
* **Sales** app: Prepare products and services for charging after a consultation.
* **Point of Sale** app: Collect front-desk payments for consultations and product sales.
* **Invoicing** app: Issue invoices and follow customer payment records.
* **Sign** app: Request signatures on consent forms and employee contracts.

.. note::
   The Odoo mobile app provides access to the database from a phone.

A separate `Odoo trial database <http://www.odoo.com/trial>`_ can hold the sample clinic records.

.. _industries/veterinary/present-the-clinic-and-book-visits:

Present the clinic and book visits
==================================

With the **Website** app, create pages for services, the veterinary team, and common administrative
questions. Add contact details and booking links, and use the website's search-engine settings to
describe the clinic and its location.

Configure appointment types for the visits the clinic offers. Set their duration, available
veterinarians or rooms, booking times, and any buffer between visits. Publish the booking link or
embed it on the relevant service page.

Configure confirmation emails and reminders for each appointment type. SMS reminders require the
relevant configuration and credits. Calendar synchronization with Google or Outlook also requires
the corresponding calendar connection.

Review the veterinarian's agenda and available rooms when accepting or changing a booking. Use the
appointment's owner and pet information to prepare the reception and consultation.

.. seealso::
   - :doc:`Website Documentation <../../applications/websites/website>`
   - :doc:`Appointments Documentation <../../applications/productivity/appointments>`

.. _industries/veterinary/maintain-pet-and-owner-records:

Maintain pet and owner records
==============================

Create the owner in the **Contacts** app, then link that contact to the pet's record in the **Pets**
app. Record the pet identifier, breed, color, microchip details, and photo where applicable.

Maintain the vaccination history and due dates in the pet record. Add the fields needed for the
clinic's records, such as weight, insurance information, allergies, and behavior notes. Review the
owner link before preparing communications or billing documents.

.. image:: veterinary/pets-app.png
   :alt: View of the Pets app

.. _industries/veterinary/record-a-consultation:

Record a consultation
=====================

Open the pet and create or open its consultation record. Complete the relevant fields, such as
vaccination details, aggression level, observed illnesses, and the veterinarian's notes. Use
consistent entries so the team can follow the history at a later visit.

Use the product catalog to select the products and services used during the consultation. Add notes,
instructions, and sections to the associated sales order when the receptionist needs context for the
charge.

Attach laboratory results, X-rays, and referral letters in the **Lab Tests & Diagnostics** tab. Use
the chatter to record the discussion associated with the consultation, taking account of the
record's access rights and message recipients.

.. image:: veterinary/consultation.png
   :alt: Example of a consultation

.. _industries/veterinary/prepare-products-and-stock-records:

Prepare products and stock records
==================================

Maintain the prices and barcodes for services, vaccines, medications, and other clinic products.
Configure the sale unit and compatible purchase units where conversion is needed; record package
sizes separately when they are not interchangeable units.

When stock tracking is enabled, configure lots or serial numbers and expiration dates for products
that need them. Record those identifiers on receipts and outgoing stock operations. Reordering rules
using a purchase route can generate draft supplier quotations for low stock; review quantities and
supplier details before confirming them.

Configure pricelists or promotions for eligible wellness packages and other offers. Keep the product
prices, package contents, and validity conditions clear for reception staff.

.. image:: veterinary/products.png
   :alt: Example of veterinary products

.. _industries/veterinary/collect-payment-after-the-visit:

Collect payment after the visit
===============================

Review the products and services selected from the consultation's **Catalog**. Confirm the
associated sales order, including its notes, quantities, prices, and payment terms.

For front-desk checkout, open the **Point of Sale** app, select :guilabel:`Quotation/Order`, and
load the relevant sales order. Use the appropriate settlement option, review the amount due, and
collect payment with an enabled method. Card payments through a bank terminal require a compatible,
configured terminal. Cash and vouchers also follow the register's configuration.

Add separately purchased products to the same checkout when needed, using their barcodes or catalog
entries. Issue the receipt or invoice requested by the owner. Follow the selected sales order
settlement or invoicing route so the same consultation is not billed twice.

When payment is handled through Invoicing, create the invoice from the eligible sales order, review
it, and record the payment. Use agreed deposits or payment terms for visits that are paid in stages.

.. _industries/veterinary/request-signed-forms:

Request signed forms
====================

In **Sign**, prepare templates for consent documents, longer care arrangements, and employee
contracts. Place the required fields and assign each field to the correct signing role.

Send the document to the intended recipients and follow the request's status. Configure reminders
where needed, and retain the completed document with the relevant administrative record.

.. _industries/veterinary/additional-apps:

Additional apps
===============

Staff leaves, mobile visits, owner communications, and financial reporting can support the clinic's
booking and consultation work:

- Use the **Accounting** app to manage clinic income, supplier bills, and financial reporting with
  the relevant localization.
- Use the **Time Off** app to manage staff leave alongside veterinary appointment availability.
- Use the **Expenses** app to record reimbursable clinic purchases and travel expenses.
- Use the **Fleet** app to follow vehicles used for home visits or transporting clinic supplies.
- Use the **Email Marketing** app to send owner newsletters and selected follow-up campaigns to an
  appropriate audience.
- Use the **Live Chat** app to answer website visitors when clinic staff are available.
- Use the **Dashboards** app to review appointment activity, sales, and other configured clinic
  measures.

Explore the :doc:`Odoo documentation <../../index>` and `Odoo tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`_ for more guidance.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`_ to discuss the setup or request a
   demonstration.
