=====================
Follow-up on invoices
=====================

A follow-up message can be sent to customers when a payment is overdue. Odoo helps you identify late
payments and allows you to schedule and send the appropriate reminders using **follow-up actions**
that automatically trigger one or more actions according to the number of overdue days. You can send
your follow-ups via different means, such as email, post, or SMS.

.. seealso::
   - `Odoo Tutorials: Payment Follow-up <https://www.odoo.com/slides/slide/payment-follow-up-1682>`_

Configuration
=============

To configure a :guilabel:`Follow-Up Action`, go to :menuselection:`Accounting --> Configuration -->
Follow-up Levels`. Several follow-up actions are available by default, but you can create new ones
if required, and can change the **name** and the **number of days** after which the follow-up
actions are triggered. The follow-up :guilabel:`Actions` available are:

- :guilabel:`Send an email`;
- :ref:`Send an SMS message <pricing/pricing_and_faq>`;
- :guilabel:`Print a letter`;
- :ref:`Send a letter <customer_invoices/snailmail>`;
- :guilabel:`Manual action` (creates a task).

It is possible to automatically send a reminder by enabling the :guilabel:`Auto Execute` option, and
attaching the *open* invoice(s) by enabling :guilabel:`Join open invoices`, within a specific
follow-up action.

Depending on the :guilabel:`Actions` enabled, the :guilabel:`Message` tab contains different message
options:

- The :guilabel:`Email Subject` and the :guilabel:`Description` or content of the email
  automatically used;
- If you selected :guilabel:`SMS`, the content of the SMS text;
- If you enabled :guilabel:`Manual Action`, you can assign someone in the :guilabel:`Assign a
  Responsible` field to manage that follow-up and the :guilabel:`Manual Action Type`
  (:guilabel:`Email`, :guilabel:`Call`, etc.), as well as input a description of the
  :guilabel:`Action To Do`.

.. note:: The text between `%(text)s` automatically fetches the partner's info.

   - **%(partner_name)s**: Partner name;
   - **%(date)s**: Current date;
   - **%(amount_due)s**: Amount due by the partner;
   - **%(user_signature)s**: User name;
   - **%(company_name)s**: User's company name.

.. tip::
   Set a negative number of days to send a reminder before the actual due date.

Follow-up reports
=================

Overdue invoices you need to follow up on are available in :menuselection:`Accounting --> Customers
--> Follow-up Reports`. By default, Odoo filters by :guilabel:`Customer Invoices` that are
:guilabel:`In need of action`.

When selecting an invoice, you see all of the customer's unpaid invoices (overdue or not), and their
payments. The due dates of late invoices appear in red. Select the invoices that are *not* late by
clicking the :guilabel:`Excluded` column to exclude them from the reminder you send.

It is up to you to decide how to remind your customer. You can select :guilabel:`Print Letter`,
:guilabel:`Send By Email`, :guilabel:`Send By Post`, :guilabel:`Send By SMS`. Then, click on
:guilabel:`Done` to view the next follow-up that needs your attention.

.. note::
   - The contact information on the invoice or the contact form is used to send the reminder.
   - When the reminder is sent, it is documented in the chatter of the invoice.
   - If it is not the right time for a reminder, you can specify the :guilabel:`Next Reminder Date`
     and click on :guilabel:`Remind me later`. You will get the next report according to the next
     reminder date set on the statement.

.. tip::
   Reconcile all bank statements right before launching the follow-up process to avoid sending a
   reminder to a customer that has already paid.

Debtor's trust level
--------------------

To know whether a customer usually pays late or not, you can set a trust level by marking them as
:guilabel:`Good Debtor`, :guilabel:`Normal Debtor`, or :guilabel:`Bad Debtor` on their follow-up
report. To do so, click on the bullet next to the customer's name and select a trust level.

.. image:: follow_up/debtors-trust-level.png
    :alt: Set debtor's trust level

Send reminders in batches
-------------------------

You can send reminder emails in batches from the :guilabel:`Follow-up Reports` page. To do so,
select all the reports you would like to process, click on the :guilabel:`Action` gear icon, and
select :guilabel:`Process follow-ups`.

.. seealso::
   - :doc:`/applications/essentials/in_app_purchase`
   - :doc:`/applications/marketing/sms_marketing/pricing/pricing_and_faq`
   - :doc:`../customer_invoices/snailmail`
