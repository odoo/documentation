:show-content:

=============
Subscriptions
=============

Use Odoo **Subscriptions** to manage everything related to recurring businesses: :ref:`sell new
contracts <subscriptions/quotations>`, :doc:`upsell customers
</applications/sales/subscriptions/upselling>`, and keep the churn under control.

With Odoo **Subscriptions**, :doc:`generate reports </applications/sales/subscriptions/reports>` on
the main :abbr:`KPIs (Key Performance Indicators)`: :abbr:`MRR (Monthly Recurring Revenue)`,
:abbr:`ARR (Annual Recurring Revenue)`, retention, churn, and more.

.. seealso::
   - `Odoo Tutorials: Subscriptions <https://www.odoo.com/slides/subscription-20>`_

.. cards::

   .. card:: Subscription products
      :target: subscriptions/products

      Discover how to create subscription products.

   .. card:: Subscriptions in the eCommerce shop
      :target: subscriptions/ecommerce

      Learn how to sell subscription products in the Odoo eCommerce shop.

   .. card:: Subscription plans
      :target: subscriptions/plans

      Apply specific quotation templates are used to preconfigure quotations for subscription
      products.

   .. card:: Upsell subscriptions
      :target: subscriptions/upselling

      Explore the various ways to upsell customers on their subscriptions.

   .. card:: Renew subscriptions
      :target: subscriptions/renewals

      Process subscription renewals automatically or manually, include additional products, upsell,
      and more.

   .. card:: Close subscriptions
      :target: subscriptions/closing

      Decide whether customers should self-manage their subscriptions, or restrict their ability to
      do so.

   .. card:: Automation rules
      :target: subscriptions/automatic_alerts

      Utilize custom automation rules to set up emails, create tasks for salespeople, and even send
      satisfaction surveys to evaluate their experience.

   .. card:: Scheduled actions
      :target: subscriptions/scheduled_actions

      Automate certain tasks within a database using preconfigured processes.

   .. card:: Subscription reports
      :target: subscriptions/reports

      Analyze subscription performance with reporting pages provided by Odoo.

.. _subscriptions/quotations:

Subscription quotations
=======================

.. important::
   Sales orders with a defined *Recurring Plan* become subscriptions.

To create a new subscription, click on :guilabel:`New` from the **Subscriptions** or the :doc:`Sales
</applications/sales>` app. Then, from the resulting quotation, either:

- Select a :doc:`subscription plan </applications/sales/subscriptions/plans>` to auto-populate the
  quotation instantly.
- Or, fill out the quotation normally, making sure to select a recurrence, specify an end date (if
  necessary), and add :doc:`recurrent products </applications/sales/subscriptions/products>`.

.. tip::
   Define different invoice and delivery addresses by enabling the :doc:`Customer Addresses
   </applications/finance/accounting/customer_invoices/customer_addresses>` feature.

.. _subscriptions/confirmation:

Confirmation
============

Send the quotation to the customer for confirmation by clicking :guilabel:`Send by Email`, or
confirm it immediately by clicking :guilabel:`Confirm`.

.. tip::
   Click :guilabel:`Customer Preview` to preview the quote from the customer's point-of-view. From
   there, customers can sign and pay, as well as message the company, if needed.

.. _subscriptions/automatic-payments:

Automatic payments
==================

Require the customer to set up an automatic payment method, and pre-pay the subscription's first
occurrence before they can confirm their quotation. To do so, go to the :guilabel:`Other Info` tab
of the quotation form, and tick the :guilabel:`Online payment` checkbox. Then, designate what
percentage of the total should be paid.

If you leave :guilabel:`Online payment` unchecked, the customer does not have to pre-pay to start
the subscription. This means the payment is *not* automatic, and the customer **must** pay each
invoice manually.

.. important::
   If the online confirmation requires pre-payment, the customer can **only** select
   :ref:`payment providers <payment_providers/supported_providers>` that have the :ref:`tokenization
   feature <payment_providers/tokenization>`. This ensures the customer is automatically charged at
   each new period.

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
