==================
Subscription plans
==================

*Subscription plans* are :doc:`quotation templates
</applications/sales/sales/send_quotations/quote_template>` used to preconfigure quotations with
subscription products. Use subscription plans to quickly create subscription orders.

Configure subscription plans
============================

To configure subscription plans, go to :menuselection:`Subscriptions --> Configuration --> Plans`.
Then, click :guilabel:`New` to create a new plan, or select an existing plan to edit it.

Since the Odoo *Subscriptions* app is integrated closely with the *Sales* app, subscription plans
use the same form as quotation templates.

.. image:: plans/subplan-quotation-template.png
   :align: center
   :alt: Subscription plan (quotation template) configuration form.

The subscription plan form contains the following options:

- :guilabel:`Name`: Enter a name for the subscription plan at the top of the page.
- :guilabel:`Quotation expires after`: Enter the number of days after which the quotation expires,
  starting from the day the quotation is sent to the customer. Leave this field at zero for the
  quotation to never expire.
- :guilabel:`Online Confirmation`: Check the boxes next to :guilabel:`Signature` or
  :guilabel:`Payment` to enable the customer to confirm their subscription order by signing or
  paying for the quotation. Enable both to leave the choice to the customer. Enable neither to only
  confirm the quotation in the backend.
- :guilabel:`Confirmation Mail`: Select an :doc:`email template
  </applications/general/email_communication/email_template>` for the confirmation email that is
  automatically sent to the customer after the quotation is confirmed. Leave this field blank to
  send nothing.

  - To create a new email template, enter a name for the template, then click :guilabel:`Create and
    edit`.
  - To edit an existing email template, select one from the drop-down menu, then click on the
    :guilabel:`Internal link` arrow at the end of the line.

- :guilabel:`Recurrence`: Select the recurrence period used for the plan. The recurrence periods
  available here are the same ones that are configured in :menuselection:`Subscriptions -->
  Configuration --> Recurrence Periods`.

Selecting a :guilabel:`Recurrence` turns the quotation template into a subscription plan and enables
the following additional options:

- :guilabel:`Duration`: Choose whether the subscription plan has no end date (:guilabel:`Forever`)
  or a :guilabel:`Fixed` duration.

  - If the duration is :guilabel:`Forever`, then the subscription plan will continually renew until
    either the customer or the company manually ends the subscription.
  - If the duration is :guilabel:`Fixed`, then enter an :guilabel:`End After` date, which determines
    the amount of time after which the subscription will automatically end.

- :guilabel:`Self Closable`: Check this box to enable the customer to terminate their subscription
  from the :doc:`customer portal
  </applications/websites/ecommerce/ecommerce_management/customer_accounts>`.
- :guilabel:`Automatic Closing`: Enter the number of days after which *unpaid* subscriptions *past*
  the due date are automatically closed.
- :guilabel:`Invoicing Journal`: Select the accounting journal in which invoices for this
  subscription plan are recorded. Leave this field blank to use the sales journal with the lowest
  sequence.

.. image:: plans/subplan-recurrence.png
   :align: center
   :alt: Subscription plan with Recurrence selected.

In the :guilabel:`Lines` tab, create the order lines for the quotation. Click :guilabel:`Add a
product`, select a product to include in the plan, and then enter the :guilabel:`Quantity` and
:guilabel:`Unit of Measure`. Add as many products as desired to the order lines.

In the :guilabel:`Optional Products` tab, enter any optional products that the customer can add to
their quotation before confirming the order.

If the subscription plan has unique :doc:`terms and conditions
</applications/finance/accounting/customer_invoices/terms_conditions>`, add them in the
:guilabel:`Terms & Conditions` tab. If terms conditions are specified on a plan, these will be used
instead of the default terms and conditions set up in the *Sales* app settings.

.. image:: plans/subplan-terms-conditions.png
   :align: center
   :alt: Subscription plan Terms & Conditions tab.

Use subscription plans on quotations
====================================

Quotations for subscription products can be created in both the *Subscriptions* app and the *Sales*
app.

From the :guilabel:`Subscriptions` dashboard, click :guilabel:`New` to create a new quotation. Then,
select a subscription plan in the :guilabel:`Subscription Plan` field.

The :guilabel:`Recurrence`, products, and other information from the plan are automatically filled
in. The quotation can then be modified further as needed.

From the :guilabel:`Sales` dashboard, click :guilabel:`New` to create a new quotation. Then, select
a subscription plan in the :guilabel:`Quotation Template` field.

All subscription orders will appear on the :guilabel:`Subscriptions` dashboard regardless of whether
they were created in the *Subscriptions* app or the *Sales* app.
