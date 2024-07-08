=================
Scheduled actions
=================

*Scheduled actions* are pre-configured processes that allow users to automate certain tasks within a
database, based on a designated schedule or number of occurrences. These tasks can include sending
emails, generating invoices, data clean-up, and so much more.

In Odoo, some scheduled actions are active, by default, to ensure that certain functions are
triggered automatically, however there are *also* many scheduled action options that appear in the
database that are **not** activated by default.

In Odoo *Subscriptions*, there are two scheduled actions that initiate the billing process for
active recurring subscriptions, as well as when billing should stop due to subscription expiration.

They are turned on, by default and can be deactivated at any time in order to manage subscriptions
manually.

Access scheduled actions
========================

.. important::
   In order to access scheduled actions, :ref:`developer mode <developer-mode>` **must** be
   activated.

With developer mode activated, navigate to :menuselection:`Settings app --> Technical --> Scheduled
Actions`.

.. image:: scheduled_actions/scheduled-actions-technical-settings-page.png
   :align: center
   :alt: The scheduled actions option under the technical menu in the Odoo Settings application.

Doing so reveals a dedicated :guilabel:`Scheduled Actions` dashboard. On this page, there is a
complete list of scheduled actions for the entire database.

From here, enter `Subscription` in the search bar. Doing so provides three subscription-specific
results. The following documentation focuses on the last two results in the list:

- :guilabel:`Sale Subscription: generate recurring invoices and payments`
- :guilabel:`Sale Subscription: subscriptions expiration`

.. image:: scheduled_actions/scheduled-actions-page-subscription-results.png
   :align: center
   :alt: The subscription-related results on the scheduled actions page in Odoo Settings.

Determine if a scheduled action is active by looking under the :guilabel:`Active` column, in the
it's corresponding row on the :guilabel:`Scheduled Actions` dashboard, for a ticked checkbox; if
the checkbox is green with a check mark, the scheduled action is active.

If a scheduled action needs to be activated, click into the desired scheduled action from the list.

.. image:: scheduled_actions/scheduled-action-form.png
   :alt: The scheduled action form in the Odoo Settings application.

Then, from the scheduled action form, toggle the switch in the :guilabel:`Active` field to the
right. Doing so turns the switch green, indicating that the scheduled action is now `Active`.

The ability to set up how often the scheduled action runs is also available on the scheduled action
form, in the :guilabel:`Execute Every` field.

.. important::
   The scheduled action does **not** function correctly if the execution time is less than five
   minutes. This is a general rule for all scheduled actions.

   For more information, read the :doc:`Frequent Technical Questions
   </administration/odoo_sh/advanced/frequent_technical_questions>` documentation.

Generate recurring invoices and payments
========================================

In order for the :guilabel:`Sale Subscription: generate recurring invoices and payments` scheduled
action to properly generate recurring invoices and payments on subscriptions, the *Deferred Expense*
and *Deferred Revenue* accounts **must** be set up, in order for Odoo to process various invoices
and payments related to subscriptions.

To set up *Deferred Expense* and *Deferred Revenue* accounts, navigate to :menuselection:`Accounting
app --> Configuration --> Settings`. Both accounts can be configured in the :guilabel:`Default
Accounts` section.

.. image:: scheduled_actions/deferred-settings-accounting.png
   :align: center
   :alt: The necessary deferred account settings in the Odoo Accounting app's settings page.

Once the correct accounts are entered in the :guilabel:`Deferred Expense` and :guilabel:`Deferred
Revenue` drop-down menu fields, click :guilabel:`Save` in the upper-left corner.

Create invoice
--------------

Elements related to the :guilabel:`Sale Subscription: generate recurring invoices and payments`
scheduled action can be found on confirmed subscription sales orders.

To examine these elements, open any confirmed sales order in the *Subscriptions* application to
reveal the subscription sales order form.

On a confirmed subscription sales order form, focus on the :guilabel:`Recurring Plan` and
:guilabel:`Date of Next Invoice` fields.

.. image:: scheduled_actions/confirmed-subscription-sales-order-fields.png
   :align: center
   :alt: A confirmed subscription sales order in the Odoo Subscriptions application.

The scheduled action creates an invoice when today's date is the same date as the :guilabel:`Date of
Next Invoice`.

Odoo uses the information in the :guilabel:`Recurring Plan` field to update the next invoice date
accordingly.

.. warning::
   If the product invoicing policy is set to *Based on Delivered Quantities (Manual)*, and the
   delivered quantity is `0`, Odoo does **not** create an invoice, and the customer is not charged.

   Instead, the subscription is processed as a free recurring product, and is reflected as such in
   the *chatter* of the subscription sales order.

   When this occurs, the following message appears: `Automatic renewal succeeded. Free subscription.
   Next invoice:[date]. No email sent.`

Once the invoice for the subscription sales order is created, the invoice can be viewed by clicking
the :guilabel:`Invoices` smart button that appears at the top of the subscription sales order.

An email is sent to the customer notifying them of the recurring subscription charge, *if* there is
a :guilabel:`Payment Token` on the account.

To check if there is a :guilabel:`Payment Token`, open the :guilabel:`Other Info` tab, and look at
the :guilabel:`Payment Token` field, under the :guilabel:`Subscription` section.

.. image:: scheduled_actions/payment-token-field.png
   :align: center
   :alt: The Payment Token field under the Other Info tab on a subscription sales order form.

If there is no :guilabel:`Payment Token`, the invoice is created, and sent to the customer. The
payment **must** be registered manually in this case.

Closing invoices
----------------

The :guilabel:`Sale Subscription: generate recurring invoices and payments` scheduled action also
has the ability to close a subscription, if the following conditions are met:

- If the subscription has no :guilabel:`Payment Token`, create and post the invoice.
- If the subscription has a :guilabel:`Payment Token`, try to charge.

    - If the charge is successful, create and post the invoice.
    - If the charge fails, send reminders periodically.

        - Close the subscription if it continues to fail for more than fourteen days.

Subscriptions expiration
========================

The :guilabel:`Sale Subscription: subscriptions expiration` scheduled action checks for all other
conditions that may cause a subscription to close automatically. If certain conditions are met, the
scheduled action closes that subscription.

First, the :guilabel:`Sale Subscription: subscriptions expiration` scheduled action checks to see if
the end date has passed, which is configured on the subscription sales order.

.. image:: scheduled_actions/subscription-expiration-date.png
   :align: center
   :alt: The expiration date on a subscription sales order in Odoo Subscriptions.

Then, the :guilabel:`Sale Subscription: subscriptions expiration` scheduled action checks if the
invoice has not been paid within the payment terms deadline.

To access the invoices attached to a subscription, access the sales order for the subscription
product, and click the :guilabel:`Invoices` smart button. Then, look at the :guilabel:`Invoice Date`
column.

.. image:: scheduled_actions/invoices-invoice-date-column.png
   :align: center
   :alt: The Invoice Date column on subscriptions invoice page in Odoo Subscriptions app.

Unpaid subscriptions with an :guilabel:`Invoice Date` that are past the determined number of days in
the :guilabel:`Automatic Closing` field of a :guilabel:`Recurring Plan` are automatically closed by
the :guilabel:`Sale Subscription: subscriptions expiration` scheduled action.

.. image:: scheduled_actions/automatic-closing-field.png
   :align: center
   :alt: The Automatic Closing field on a Recurring Plan form in Odoo Subscriptions.

For example, if the next invoice date is July 1st, and the :guilabel:`Automatic Closing` is set to
'30 Days', the scheduled action would close the subscription on August 1st.

.. seealso::
   - :doc:`../subscriptions`
   - :doc:`plans`
   - :doc:`products`
   - :doc:`automatic_alerts`
