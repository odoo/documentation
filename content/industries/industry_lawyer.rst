:industry_module: industry_lawyer
:knowledge_xmlid: industry_lawyer.welcome_article

.. _industries/industry_lawyer:

========
Law firm
========

The **Law Firm** industry package helps law firms manage client intake, consultations, case tasks,
documents, billable work, expenses, and invoicing in Odoo. It connects each client matter from the
first consultation through its final invoice.

Use the package to organize case tasks and files, collect signed engagement letters, and record
billable time and expenses. Shared schedules and case information help lawyers and assistants
coordinate the work as the matter progresses.

.. _industries/industry_lawyer/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Calendar** app and the **Appointments** app: Arrange consultations, meetings, and
  case-related dates.
* The **CRM** app and the **Sales** app: Follow client intake and prepare service quotations.
* The **Contacts** app: Maintain client details and identity-document information.
* The **Project** app and the **Documents** app: Organize case tasks, milestones, and files.
* The **Timesheets** app: Record work against case tasks and billable sales-order items.
* The **Sign** app: Collect signatures on engagement letters and other agreements.
* The **Invoicing** app and the **Expenses** app: Invoice services and record firm or client-related
  costs.
* The **Knowledge** app: Keep client-intake notes, internal procedures, and reference articles.
* The **Website** app: Present the practice and collect client inquiries.

.. note::
   The Odoo mobile app provides access to the database from a phone.

.. _industries/industry_lawyer/arrange-consultations-and-case-dates:

Arrange consultations and case dates
====================================

Open the **Calendar** app and click a time slot to schedule a consultation, meeting, or court
appearance. Select the relevant lawyers' calendars to review availability before assigning the
meeting.

Configure Google Calendar or Outlook synchronization for users who also use an external calendar.
For online consultation booking, create an appointment type in the **Appointments** app and share
its booking link. Connect the booking option to the firm's website when appropriate.

:doc:`Google Calendar Integration <../applications/productivity/calendar/google>`

:doc:`Outlook Integration <../applications/productivity/calendar/outlook>`

.. _industries/industry_lawyer/open-a-client-matter:

Open a client matter
====================

.. _industries/industry_lawyer/client-intake-and-engagement:

Client intake and engagement
----------------------------

Record the client request in the **CRM** app and complete the firm's intake process. Use the
**Knowledge** app to keep assessment notes, client background, and risk information with the
opportunity. From the Knowledge icon, select the relevant article and click :guilabel:`Use as Notes`
to copy its content into the record.

Create a quotation or use the **Standard Lawyer Service Quotation** template. Adapt the service
lines and terms, then send the quotation for online acceptance. Alternatively, prepare an
**Engagement Letter** template in the **Sign** app and request the client's signature.

Confirm the agreed sales order. Products configured with a project template create the related case
project and tasks. A case project can also be created directly and linked to the relevant order.

:doc:`Record incoming client requests <../applications/sales/crm/acquire_leads/email_manual>`

.. _industries/industry_lawyer/client-identity-documents:

Client identity documents
-------------------------

Open the client's record in the **Contacts** app. Use the gear menu to request an identity document;
the request creates a follow-up activity. When the document arrives, complete the contact's
:guilabel:`ID` tab, including its expiration date.

Use :guilabel:`Expired IDs` to find records needing an update. The package's daily automation
requests expiring or expired documents; follow open requests in the **Documents** app.

:doc:`Contacts Documentation <../applications/essentials/contacts>`

.. _industries/industry_lawyer/organize-case-tasks:

Organize case tasks
===================

Open the case in the **Project** app and assign the responsible users. Arrange tasks in stages such
as :guilabel:`To Do`, :guilabel:`In Progress`, and :guilabel:`Done`, then set deadlines and
milestones for key events.

For example, a **First Hearing** milestone can group tasks to prepare arguments and review the
opposing party's submissions. Log time on each task or use its timer while working.

:doc:`Create case-project templates
<../applications/services/project/project_management/project_templates>`

.. _industries/industry_lawyer/record-billable-work:

Record billable work
====================

.. _industries/industry_lawyer/timesheets:

Timesheets
----------

Record time through the route that suits the work:

* On a task, open :guilabel:`Timesheets` and add a line or use the timer.
* On the project, open the :guilabel:`Timesheets` shortcut and add an entry.
* In the **Timesheets** app, create an entry with the project, task, date, and duration. The list
  view's :guilabel:`New` action provides another entry route.

Link billable entries to the appropriate sales-order item. Leave that item blank for work that is
recorded against the case but must not be invoiced. Use order sections, for example by year, and
service-line notes to organize a long-running engagement.

Set :guilabel:`Billing Time Target per month` on employees when the firm follows monthly
billable-time targets.

:doc:`Timesheets Documentation <../applications/services/timesheets>`

.. _industries/industry_lawyer/services-and-materials:

Services and materials
----------------------

For separately recorded billable work or costs, open :menuselection:`Sales --> To Invoice -->
Services & Materials`. Click :guilabel:`New`, select the order and product, enter the quantity and
note, and save. The relevant sales-order line's delivered quantity is updated for invoicing.

Configure the product's reinvoicing policy on its :guilabel:`Sales` tab under expenses before using
it through this workflow.

.. _industries/industry_lawyer/activity-based-suggestions:

Activity-based suggestions
--------------------------

In the **Timesheets** app, select :guilabel:`Want to track your activities` and follow the
Timesheets Assistant setup. Review the suggested entries, select the appropriate project and task,
and adjust the duration before recording the time.

.. _industries/industry_lawyer/organize-and-request-case-documents:

Organize and request case documents
===================================

.. _industries/industry_lawyer/project-folders-and-incoming-files:

Project folders and incoming files
----------------------------------

Use the case project's the **Documents** app folder for its files. Attach files from Documents when
sending a chatter message, or save chatter attachments into the relevant folder.

Add the :guilabel:`Documents` shortcut to the project's top bar, open the folder, and expand its
information panel. Set the case folder's email alias, the :guilabel:`Inbox` activity type, and the
activity assignee. New attachments emailed to the alias arrive in the root folder for processing;
move processed files into the appropriate subfolders.

.. note::
   For a new document sent to the folder alias, use a new email. Replies in an existing
   conversation do not follow the same direct-email attachment capture flow.

.. _industries/industry_lawyer/document-requests:

Document requests
-----------------

In the **Documents** app, click :guilabel:`New`, then :guilabel:`Request`. Enter the document name,
contact, and due date, then click :guilabel:`Request`. Check that the contact has an email address
before sending the request.

The request creates a placeholder for the file. The recipient uploads the document through the email
link, and the responsible user receives an activity. Mark that activity done after the document has
been processed.

For a court bundle, mark the required documents as favorites, select the relevant files, and merge
compatible documents into the bundle. Review the resulting contents before submission.

.. _industries/industry_lawyer/use-ai-for-case-administration:

Use AI for case administration
==============================

.. _industries/industry_lawyer/drafts-and-document-organization:

Drafts and document organization
--------------------------------

Use the AI assistant from an available record to summarize case material or draft routine text.
Examples include a deposition summary, a client update from recent chatter entries, a request for
missing intake documents, or a translation of an internal Knowledge article.

With document AI actions configured, use :guilabel:`Auto-sort` to organize incoming files into
folders such as Pleadings, Correspondence, Evidence, Invoices, and Client IDs. Configure the
relevant actions and destination folders for the case workflow.

Use the available AI data tools for questions about the firm's records, such as upcoming hearings,
unbilled hours, invoice timing, or expired identity documents. Review the records used in the
response before acting on it.

.. _industries/industry_lawyer/specialist-agents:

Specialist agents
-----------------

Install the **AI** app to create and customize agents. Define each agent's purpose, instructions,
skills, and sources. Enable :guilabel:`Restrict to Sources` when answers should use the active
attached material.

Possible sources and roles include:

* Case-law references for finding passages in selected judgments and statutes.
* Firm procedures, clause libraries, and precedent contracts for internal guidance.
* A matter's pleadings, correspondence, and reports for a case handover.
* Sector regulations and guidance notes for retrieving relevant source material.

Use the source documents to review generated summaries, drafts, and answers before incorporating
them into the firm's work.

See the :doc:`AI agent documentation <../applications/productivity/ai/agents>` for agent sources and
configuration.

.. _industries/industry_lawyer/invoice-the-client:

Invoice the client
==================

Create invoices from the confirmed sales order according to the service's invoicing policy and the
recorded billable quantities. Review timesheets, service entries, and chargeable expenses before
confirming and sending the invoice.

If the engagement includes an advance, create a fixed or percentage down-payment invoice, such as a
EUR 1,000 provision for the quoted services. Deduct the down payment when invoicing the remaining
balance at completion.

Use the **Sign** app for partner approval of a completed document when that is part of the firm's
process. Configure the relevant signer authentication; available authentication options are
described in the :doc:`Configure signer authentication
<../applications/productivity/sign/security_authentication>`.

Record internal costs, such as client meals or office supplies, in the **Expenses** app. Distinguish
those costs from expenses configured for reinvoicing to a client.

:doc:`Create and manage client invoices
<../applications/finance/accounting/customer_invoices/overview>`

.. _industries/industry_lawyer/go-further:
.. _industries/industry_lawyer/additional-apps:

Additional apps
===============

Client communication, staff records, and financial follow-up can be managed alongside the firm's
case work:

* Use the **VoIP** app and the **WhatsApp** app to make calls and exchange messages with clients
  from Odoo.
* Use the **SMS Marketing** app to send messages to selected client groups.
* Use the **Employees** app to maintain staff records and connect them to work and cost reporting.
* Use the **Accounting** app to manage payments, vendor bills, bank synchronization, and financial
  reports.
* Use the **AI** app to configure specialist agents for source retrieval and case administration.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
