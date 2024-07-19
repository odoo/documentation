:show-content:

=============
Subscriptions
=============

Odoo *Subscriptions* is used to run recurring businesses: :ref:`sell new contracts
<subscriptions/quotations>`, :doc:`upsell customers </applications/sales/subscriptions/upselling>`,
keep the churn under control, and :doc:`generate reports
</applications/sales/subscriptions/reports>` on the main :abbr:`KPIs (Key Performance Indicators)`:
:abbr:`MRR (Monthly Recurring Revenue)`, :abbr:`ARR (Annual Recurring Revenue)`, retention, churn,
etc.

.. seealso::
   - `Odoo Tutorials: Subscriptions <https://www.odoo.com/slides/subscription-20>`_
   - :doc:`/applications/sales/subscriptions/products`
   - :doc:`/applications/sales/subscriptions/ecommerce`
   - :doc:`/applications/sales/subscriptions/plans`
   - :doc:`/applications/sales/subscriptions/upselling`
   - :doc:`/applications/sales/subscriptions/renewals`
   - :doc:`/applications/sales/subscriptions/closing`
   - :doc:`/applications/sales/subscriptions/automatic_alerts`
   - :doc:`/applications/sales/subscriptions/scheduled_actions`
   - :doc:`/applications/sales/subscriptions/reports`

.. _subscriptions/quotations:

Subscription quotations
=======================

.. important::
   Sales orders with a defined recurrence become subscriptions.

To create a new subscription, click on :guilabel:`New` from the *Subscription* or the :doc:`Sales
</applications/sales>` app. You can either:

- Select a :doc:`subscription plan </applications/sales/subscriptions/plans>` to prefill the
  quotation instantly, or
- Fill out the quotation normally, making sure to select a recurrence and an end date if necessary
  and adding :doc:`recurrent products </applications/sales/subscriptions/products>`.

.. tip::
   You can define different invoice and delivery addresses by enabling the :doc:`Customer Addresses
   </applications/finance/accounting/customer_invoices/customer_addresses>` feature.

.. _subscriptions/confirmation:

Confirmation
============

Send the quotation to the customer for confirmation by clicking on :guilabel:`Send by email`, or
confirm it immediately by clicking on :guilabel:`Confirm`.

.. tip::
   Click on :guilabel:`Customer Preview` to preview the customer portal where the customer can view
   their quotation, sign and pay it, and communicate with you.

.. _subscriptions/automatic-payments:

Automatic payments
==================

You can require the customer to set an automatic payment method and pre-pay the subscription's first
occurrence before they can confirm their quotation. To do so, go to the :guilabel:`Other Info` tab
of the quotation and check the :guilabel:`Payment` option in the :guilabel:`Online confirmation`
field.

If you leave :guilabel:`Payment` unchecked, the customer doesn't have to pre-pay to start the
subscription. This means that the payment is not automatic and that the customer must pay each
invoice manually.

.. important::
   If the online confirmation requires a pre-payment, your customer can select only the
   :ref:`payment providers <payment_providers/supported_providers>` that have the :ref:`tokenization
   feature <payment_providers/tokenization>`. This ensures that the customer is automatically
   charged at each new period.

.. toctree::
   :titlesonly:

   subscriptions/products
   subscriptions/ecommerce
   subscriptions/plans
   subscriptions/upselling
   subscriptions/renewals
   subscriptions/closing
   subscriptions/automatic_alerts
   subscriptions/scheduled_actions
   subscriptions/reports
   subscriptions/payment_providers
