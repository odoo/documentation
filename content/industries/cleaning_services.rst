:industry_module: cleaning_services
:knowledge_xmlid: cleaning_services.welcome_article

.. _industries/cleaning_services:

=================
Cleaning services
=================

The **Cleaning Services** industry package helps cleaning businesses manage quotations, visit
schedules, and invoicing for business and individual customers in Odoo. Customer inquiries,
service agreements, staff assignments, and records of completed work stay connected for each site.

Teams can prepare estimates for materials, labor, and travel, then organize the visits created from
approved orders. Recurring schedules and subscriptions support regular services, while field-service
interventions and timesheets record the work carried out. Customer discussions, supplier purchases,
and billing stay connected, giving office and on-site staff a shared view of each job.

.. _industries/cleaning_services/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **CRM** app: Follow customer inquiries, conversations, and planned follow-up activities.
* The **Sales** app: Prepare cleaning quotations and confirm service orders.
* The **Planning** app: Assign cleaning shifts, organize recurring visits, and record on-site work.
* The **Timesheets** app: Record time spent on each cleaning task.
* The **Subscriptions** app: Define recurring cleaning services and their prices.
* The **Invoicing** app: Bill services, manage credit notes, and follow payments.
* The **Purchase** app: Compare supplier offers and order cleaning materials and services.

.. _industries/cleaning_services/manage-customer-inquiries:

Manage customer inquiries
=========================

Use the **CRM** app to record inquiries and keep the discussion with each opportunity. Log notes and
send messages through the chatter. Type **@** followed by a colleague's name to notify that
colleague.

Schedule follow-up activities, such as calls or meetings, from the opportunity. Pending activities
appear above the chatter's message history.

.. _industries/cleaning_services/prepare-cleaning-quotations:

Prepare cleaning quotations
===========================

Create a quotation from the opportunity. Add lines for the materials used on the job and services
such as labor or travel. Review each line's price, discount, unit of measure, and tax.

Create reusable products for frequently quoted materials and services. Quotation templates can
also organize regular visits and standard offers.

Send the quotation by email. The message includes a PDF and a link to the online quotation. When
online signatures are enabled, the customer can confirm and sign it there. Replies are recorded
in the chatter, keeping the discussion and quotation changes available to the team.

Confirming the quotation creates a sales order. Both quotations and orders are available in the
**Sales** app.

.. note::
   Use the quotation calculator to prepare line calculations with a spreadsheet. The calculator
   can be linked to a quotation template for estimates that need more detailed computation.

.. seealso::
   - :doc:`Create quotations from opportunities
     <../applications/sales/crm/acquire_leads/send_quotes>`
   - :doc:`Configure quotation templates and calculations
     <../applications/sales/sales/sales_quotations/quote_template>`

.. _industries/cleaning_services/schedule-cleaning-visits:

Schedule cleaning visits
========================

Confirming an order creates shifts for service products with :guilabel:`Plan Services` enabled.
These shifts are linked to the sales order in the **Planning** app. Use :guilabel:`Auto Plan` to
assign shifts by role, or assign them manually to the responsible staff member. Publish the
schedule when assignments and dates are ready.

.. seealso::
   :ref:`Create shifts from sales orders <planning/shifts-sales-orders>`

.. _industries/cleaning_services/recurring-visits:

Recurring visits
----------------

Use recurring shifts for periodic cleaning appointments. Review the planned visits and prepare
the quotations or sales orders needed for subsequent work.

For subscription services, configure the product's recurrence and associated price in
the **Subscriptions** app. Recurring project tasks provide another option when repeated cleaning
work needs to be tracked without a subscription.

.. _industries/cleaning_services/record-cleaning-work:

Record cleaning work
====================

Use the **Planning** app to organize staff shifts by project and date. The Gantt view helps review
overlapping assignments, workloads, and replacement needs during leave. Use the field-service
map to locate the day's visits; each customer's contact needs a valid address to appear there.

For an on-site intervention, open the assigned shift and click :guilabel:`Sign In`. Record the work
in its notes and worksheet, then click :guilabel:`Complete` when finished. This updates the
intervention's recorded duration.

For cleaning work tracked on project tasks, record time in the task's :guilabel:`Timesheets` tab
and review the combined entries in the **Timesheets** app. Create task filters for useful views
of upcoming cleaning work.

.. seealso::
   :doc:`Record on-site interventions <../applications/services/planning/field_service>`

.. _industries/cleaning_services/invoice-services:

Invoice services
================

Use the **Invoicing** app to create and send customer invoices, record vendor bills, and manage
credit notes. Configure the payment terms, taxes, and fiscal positions required for each
transaction, and review the available financial reports.

.. _industries/cleaning_services/purchase-cleaning-supplies:

Purchase cleaning supplies
==========================

Create requests for quotation in the **Purchase** app and compare vendor offers. Confirm the
selected purchase orders, prepare draft vendor bills, and confirm the bills after reviewing them.

.. _industries/cleaning_services/go-further:
.. _industries/cleaning_services/additional-apps:

Additional apps
===============

Signed service agreements, staff records, and new customer inquiries can complement the cleaning
schedule:

* Use the **Sign** app to obtain signatures on cleaning contracts and service agreements.
* Use the **Employees** and **Attendances** apps to manage staff records and attendance.
* Use the **Website** app to present cleaning services and collect inquiries through a form
  connected to the **CRM** app.
* Use the **Accounting** app to synchronize bank transactions and configure payment reminders.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
