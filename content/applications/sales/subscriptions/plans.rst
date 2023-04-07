==================
Subscription plans
==================

Subscription plans are :doc:`quotation templates <../sales/send_quotations/quote_template>` specific
to **subscriptions** used to preconfigure selectable **plans** and **recurrence periods** to
configure quotations quickly.

Configuration
=============

To create a new subscription plan or edit an existing one, go to :menuselection:`Subscriptions -->
Configuration --> Plans`, and click :guilabel:`New` or select an existing plan.

.. image:: plans/subplan-configuration.png
   :alt: Subscription plan (quotation template) configuration

When creating a subscription plan, several options are available:

- The **name** of the plan;
- :guilabel:`Quotation expires after`: after how many days the quotation expires;
- :guilabel:`Online confirmation`: if the customer's :guilabel:`Signature` or
  :guilabel:`Payment` confirms the order. Enable both to leave the choice to the customer;
- :guilabel:`Confirmation Mail`: the **mail template** used for the order confirmation mail;
- :guilabel:`Recurrence`: the recurrence of **recurring products** used with this template.

Selecting a :guilabel:`Recurrence` enables the following additional options:

- :guilabel:`Duration`: whether **recurring products** used with this template have no **end date**,
  or if they have a :guilabel:`Fixed` duration. Selecting :guilabel:`Fixed` enables an additional
  option to select the **duration**;
- :guilabel:`Self Closable`: if enabled, the **customer** can terminate their subscription from
  their **customer portal**;
- :guilabel:`Automatic Closing`: the number of days after which **unpaid** subscriptions *past* the
  due date are automatically closed;
- :guilabel:`Invoicing Journal`: if set, subscriptions with this template are invoiced in the set
  journal. If none, the sales journal with the lowest sequence is used.

.. note::
   On each template, you can add specific :doc:`Terms & Conditions
   <../sales/send_quotations/terms_and_conditions>`. If **terms and conditions** are specified on a
   template, these will be used instead of the default **terms and conditions** set in the **Sales**
   app settings (if any are set).

.. image:: plans/subplan-terms.png
   :alt: Terms and conditions of subscription plan
