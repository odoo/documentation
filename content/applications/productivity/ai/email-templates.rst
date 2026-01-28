=====================
AI in email templates
=====================

.. |AI| replace:: :abbr:`AI (artificial intelligence)`

Odoo allows |AI| prompts to be embedded directly into email templates.

When an email is sent, the prompt is evaluated in context, and the generated content is inserted
into the message automatically. This feature makes it possible to create dynamic, personalized
emails at scale, while keeping templates concise and reusable.

An AI-enabled email template contains one or more AI prompts that are evaluated at send time. Unlike
static templates, AI prompts:

 - Adapt the message content to the current record
 - Use available context such as customer data, document content, or related records
 - Generate natural language text automatically

How AI prompts are evaluated in email templates
===============================================

When the database creates an email based on a template with an AI prompt, the prompt uses the
current record as context to complete the prompt's objective. If the email is sent in bulk, the
prompt is evaluated separately for each record. This allows a single template to produce
personalized content for multiple recipients.

Adding an AI prompt to an email template
========================================

First, navigate to :menuselection:`Settings --> Technical --> Email Templates`.

.. note::
   :ref:`Developer mode <developer-mode/activation>` needs to be activated to view the *Technical*
   menu.

Select an existing template, or click :guilabel:`New` to create a new one. In the body of the
template, type `/`, to open the :ref:`powerbox <essentials/html_editor/commands>`. Select
:guilabel:`Prompt` from the drop-down menu. This adds a banner to the template. In the  banner,
enter a prompt describing the expected output.

To utilize :ref:`dynamic placeholders <email_template/dynamic-placeholders>` within the prompt, type
`/`, then select :guilabel:`Dynamic Placeholder` from the drop-down menu.

.. note::
   Dynamic placeholders reference specific fields within the database to produce unique data in the
   template. Adding these placeholders is what allows the database to customize the email based on
   the record referenced.

.. example::
   A customer support team wants to enhance the automated emails they send upon receiving a
   **Helpdesk** ticket. They add a prompt to the email template, *Helpdesk: Ticket Received* that
   estimates a wait time based on the ticket content, and the number of other tickets in the same
   stage.

    .. image:: email-templates/template-prompt.png
      :alt: An email template with an AI prompt.

    The prompt generates an estimated wait time, as well as an explanation for any delays.

    .. image:: email-templates/example-email.png
       :alt: A sample email generated from an AI prompt.

Example use cases
=================

- Sales follow-ups: Automatically generate tailored follow-up emails based on opportunity stage,
  customer activity, or recent communication.
- HR communication: Generate personalized onboarding or interview emails based on application or
  employee data.
- Project updates: Create progress summaries using task descriptions and recent activity.

.. seealso::
   :doc:`../../general/companies/email_template`

