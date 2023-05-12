=====================
Follow-up on invoices
=====================

A follow-up message can be sent to customers when a payment is overdue. Odoo helps you identify late
payments and allows you to schedule and send the appropriate reminders using **follow-up actions**
that trigger automatically one or more actions according to the number of overdue days. You can send
your follow-ups via different means such as email, post, or SMS.

.. seealso::
   - `Odoo Tutorials: Payment Follow-up <https://www.odoo.com/slides/slide/payment-follow-up-1682>`_

Configuration
=============

To configure a :guilabel:`Follow-Up Action`, go to :menuselection:`Accounting --> Configuration -->
Follow-up Levels`. Several follow-up actions are available by default under the
:guilabel:`Notification`, but you can create new ones if required, and can change the **name** and
the **number of days** after which the follow-up actions are triggered. The follow-up
:guilabel:`Actions` available are:

- :guilabel:`Send Email`;
- :ref:`Send a Letter <customer_invoices/snailmail>`;
- :ref:`Send an SMS message <pricing/pricing_and_faq>`.

You can use a pre-filled template for your messages by selecting a :guilabel:`Content Template`. To
change the template used, hover over the the field and click the :guilabel:`-->`. If enabled, SMS
messages have a specific :guilabel:`Sms Template` field.

It is possible to automatically send a reminder by enabling the :guilabel:`Automatic` option, and
attaching the *open* invoice(s) by enabling :guilabel:`Attach Invoices`, within a specific follow-up
action.

By clicking on the :guilabel:`Activity` tab, it's possible to schedule activities (tasks). That way,
when the follow-up is triggered, an activity is automatically scheduled. To do so, enable
:guilabel:`Schedule Activity`, and select a :guilabel:`Responsible` person for the task. Choose an
:guilabel:`Activity Type`, and enter a :guilabel:`Summary` on how to handle the activity, if
desired.

.. tip::
   To send a reminder before the actual due date is reached, set a negative number of due days.

Follow-up reports
=================

Overdue invoices you need to follow up on are available in :menuselection:`Accounting --> Customers
--> Follow-up Reports`. By default, Odoo filters by :guilabel:`Customer Invoices` that are
:guilabel:`In need of action`.

When selecting an invoice, you can see all of the customer's unpaid invoices (overdue or not), with
due dates of late invoices appearing in red. You can exclude invoices from a reminder by clicking
:guilabel:`Exclude from Follow-ups`. You can set either :guilabel:`Automatic` or :`Manual` reminders
as well as a :guilabel:`Responsible` person for that customer.

To send reminders, click on :guilabel:`Follow up`, and select the action(s) you want to perform
from:

- :guilabel:`Print`;
- :guilabel:`Email`;
- :guilabel:`Sms`;
- :guilabel:`By post`.

You can :guilabel:`Attach Invoices` and change the templates of the content from this view. When
done, click :guilabel:`Send` or :guilabel:`Send & Print`.

.. note::
   - The contact information available on the invoice or on the contact form is used to send the
     reminder.
   - When the reminder is sent, it is documented in the chatter of the invoice.
   - If it is not the right time for a reminder, you can specify the :guilabel:`Next Reminder` date.
     You will get the next report according to the next reminder date set.
.. tip::
   Reconcile your bank statements right before launching your follow-up process to avoid sending a
   reminder to a customer that has already paid you.

Debtor's trust level
--------------------

To know whether a customer usually pays late or not, you can set a trust level by marking them as
:guilabel:`Good Debtor`, :guilabel:`Normal Debtor`, or :guilabel:`Bad Debtor` on their follow-up
report. To do so, click on the bullet next to the customer's name and select a trust level.

.. image:: followup/debtors-trust-level.png
    :align: center
    :alt: Set debtor's trust level

Send reminders in batches
-------------------------

You can send reminder emails in batches from the :guilabel:`Follow-up Reports` page. To do so,
select all the reports you would like to process, click on the :guilabel:`Action` gear icon, and
select :guilabel:`Process follow-ups`.

.. seealso::
   - :doc:`../../../../general/in_app_purchase`
   - :doc:`../../../../marketing/sms_marketing/pricing/pricing_and_faq`
   - :doc:`../customer_invoices/snailmail`
