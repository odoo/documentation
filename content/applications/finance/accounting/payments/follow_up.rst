=====================
Follow-up on invoices
=====================

Follow-up messages can be sent to customers when payments are overdue. Odoo helps identify late
payments and allows scheduling and sending the appropriate reminders using **follow-up actions**
according to the number of overdue days. Follow-ups can be sent through different methods, including
email, WhatsApp message, SMS, or post.

.. seealso::
   - `Odoo Tutorials: Payment Follow-up <https://www.youtube.com/watch?v=50qy2ygS7eM>`_
   - :doc:`/applications/finance/accounting/customer_invoices/payment_terms`

.. _accounting/follow_up/configuration:

Configuration
=============

To configure :guilabel:`Follow-up actions`, go to :menuselection:`Accounting --> Configuration
--> Follow-up Levels`. In the :guilabel:`Follow-up Levels` list view, several follow-up levels and
actions are configured by default.

To modify a follow-up level, click on the record. From the form view, edit the
:guilabel:`Description` or adjust the number of days before a reminder is sent. In the
:guilabel:`Notification` tab, select :guilabel:`Actions` such as :guilabel:`Send Email`,
:doc:`Send WhatsApp message </applications/productivity/whatsapp>`, :ref:`Send SMS Message
<pricing/pricing_and_faq>`, and :ref:`Send a Letter <customer_invoices/snailmail>`.

.. note::
   Sending letters and WhatsApp or SMS messages in Odoo requires :doc:`In-App Purchase (IAP)
   </applications/essentials/in_app_purchase>` credit or tokens.

To use a pre-filled template when sending an email or letter, select a :guilabel:`Content Template`.
To modify it, click the :icon:`oi-arrow-right` :guilabel:`(internal link arrow)` icon next to the
:guilabel:`Content Template` field. If enabled, WhatsApp and SMS messages use a
specific :guilabel:`WhatsApp Template` or :guilabel:`Sms Template` field that can be modified by
clicking the :icon:`oi-arrow-right` :guilabel:`(internal link arrow)` icon.

Other options can be enabled in the :guilabel:`Options` section within the specific follow-up level:

- Automate the reminder with the :guilabel:`Automatic` option.
- :guilabel:`Attach Invoices` that are overdue in the reminder.
- :guilabel:`Add followers` on the related customer to receive notifications about any email reply
  made on the reminder's email.

In the :guilabel:`Activity` tab, enable the option to automatically schedule :doc:`activities
</applications/essentials/activities>` when the follow-up level is triggered. Select the
:guilabel:`Responsible` user and the :guilabel:`Activity Type`, and enter a :guilabel:`Summary`.

To add a new :guilabel:`Follow-up Level`, click :guilabel:`New` and fill in the fields.

.. tip::
   Set a negative number of days to send a reminder before the invoice due date.

.. _accounting/follow_up/invoice-follow-ups:

Invoice follow-ups
==================

.. note::
   Reconcile all bank transactions before starting the follow-up process to avoid sending reminders
   for invoices that have already been paid.

To view all overdue invoices, go to :menuselection:`Accounting --> Customers --> Invoices`. In the
:guilabel:`Invoices` list view, click into the search bar and filter on :guilabel:`Overdue`.

.. _accounting/follow_up/follow-ups-for-one-customer:

Follow-ups for one customer
---------------------------

For a detailed overview of a customer's invoice follow-up status, go to :menuselection:`Accounting
--> Customers --> Customers`. Open the customer's form and click the :guilabel:`Accounting` tab. In
the :guilabel:`Invoice follow-ups` section, click on the different levels to view the
:guilabel:`Follow-up Status` of each level. If actions are needed, click :guilabel:`Overdue
Invoices` to have a detailed list of the overdue invoices.

Additional options can be set:

- :guilabel:`Reminders`: :guilabel:`Automatic` or :guilabel:`Manual`.
- :guilabel:`Next reminder`: The date by which the next follow-up actions should be taken is
  automatically set when follow-ups are processed, but can be manually adjusted if needed.
- :guilabel:`Responsible`:  The user handling follow-up actions, who is automatically added as a
  follower in the chatter.

To manually send a payment reminder to a customer, click :guilabel:`Send` and select the actions in
the :guilabel:`Send and Print` window:

- :guilabel:`Print`;
- :guilabel:`Email`;
- :guilabel:`WhatsApp`;
- :guilabel:`Sms`;
- :guilabel:`By post`.

Enable the :guilabel:`Attach Invoices` option, and change the :guilabel:`Content Template`,
:guilabel:`WhatsApp Template`, or :guilabel:`Phone` if needed. Then, click :guilabel:`Send` or
:guilabel:`Send & Print`.

.. seealso::
   :doc:`/applications/essentials/in_app_purchase`

.. note::
   - The contact information on the invoice or the contact form is used to send the reminder.
   - The chatter keeps a full record of all follow-up actions.

.. _accounting/follow_up/follow-ups-for-all-customers:

Follow-ups for all customers due for action
-------------------------------------------

After setting up the additional :ref:`follow-up
<accounting/follow_up/follow-ups-for-one-customer>` options, review which customers have
overdue invoices or require follow-up. To do so, go to :menuselection:`Accounting --> Customers -->
Customers`. In the :guilabel:`Customers` kanban view, click the search bar and filter by
:guilabel:`Overdue Invoices` or :guilabel:`Requires Follow-up`.

To take follow-up actions for all relevant customers, switch to the list view and select the
customers requiring follow-up. Then, click :icon:`fa-cog` :guilabel:`(Actions)` and select
:guilabel:`Process Follow-ups`.

.. _accounting/follow_up/customer-statement:

Customer statement
==================

To get a comprehensive overview of a customer's account status, click the :guilabel:`Customer
Statement` smart button on the customer's form. This statement corresponds to the :ref:`Partner
Ledger <accounting/invoices/partner-ledger>` report's portion specific to that customer.

To send it to the customer, click :guilabel:`Send`, change the :guilabel:`Email Template` if needed,
and click :guilabel:`Print & Send`.

To view the customer statements for multiple customers at once, select the customers from the
:guilabel:`Customers` list view, click :icon:`fa-cog` :guilabel:`(Actions)`, and select
:guilabel:`Open Customer Statements`.

Click :guilabel:`PDF` or :guilabel:`XLSX` to generate a PDF or XLSX file, respectively.
