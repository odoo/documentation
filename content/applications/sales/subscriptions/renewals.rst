===================
Renew subscriptions
===================

The foundation of any subscription business model is recurring payments. This is when customers
reliably pay a regular amount at specific intervals, in exchange for access to a subscription
product or service.

Subscription renewal is the process customers follow when they willingly choose to continue
participating in, and paying for, a subscription product or service.

Subscribers experience the renewal process at different intervals -- weekly, monthly, annually, etc.
-- depending on the duration of the agreed-upon contract.

Most companies that offer subscriptions prefer to automate the renewal process for customers.
However, manual subscription renewals are still used in some cases.

With the Odoo **Subscriptions** application, a company can manage all of its subscriptions in one
place. Renewals can be processed automatically, or manually, include additional products or upsells
per renewal order, and be filtered in batch views to quickly locate customers who need to renew
their subscriptions.

Subscription renewals
=====================

In order to renew a subscription, a quotation with a subscription product **must** be confirmed,
with a configured *Recurring Plan* selected.

To open a subscription quotation, navigate to :menuselection:`Subscriptions app --> Subscriptions
--> Quotations`, and select the desired quotation from the list. Or, create a new one by clicking
:guilabel:`New` to open a new quotation form.

.. note::
  - Only a singular product is required.
  - A subscription service counts as a product, as it is considered a recurring product.

Subscription quotations **must** be confirmed, and payment from the customer for the
initial subscription **must** be invoiced and registered in order to successfully open a *Renewal
Quotation*.

.. seealso::
   For more information on the above process of confirming quotations and invoicing payments,
   see:
   - :doc:`../sales/send_quotations/create_quotations`
   - :doc:`../sales/send_quotations/get_paid_to_validate`

Once the payment from the subscription quotation is confirmed, the quotation turns into a sales
order. An :guilabel:`In Progress` tag is applied to the sales order form, and a series of buttons
also appear at the top of the sales order, including a :guilabel:`Renew` button.

.. image:: renewals/renew-button.png
  :align: center
  :alt: Renew button on subscription sales order with Odoo Subscriptions.

When the :guilabel:`Renew` button is clicked, Odoo instantly presents a new renewal quotation,
complete with a :guilabel:`Renewal Quotation` tag.

.. image:: renewals/renewal-quotation.png
  :align: center
  :alt: Renewal quotation in the Odoo Subscriptions application.

From here, a standard sales flow can occur to confirm the quotation. This typically begins
by clicking :guilabel:`Send by Email`, which sends a copy of the quotation to the customer, by
email, for them to confirm, and eventually, pay for.

.. note::
  In the chatter of the :guilabel:`Renewal Quotation`, it is mentioned that this subscription is
  the renewal of the subscription from the original sales order.

Once the :guilabel:`Renewal Quotation` is confirmed, it becomes a sales order, and a
:guilabel:`Sales History` smart button appears at the top of the page.

.. image:: renewals/sales-history-smart-button.png
  :align: center
  :alt: Sales History smart button in the Odoo Subscriptions application.

When that :guilabel:`Sales History` smart button is clicked, Odoo reveals a separate page,
showcasing the different sales orders attached to this subscription, along with their individual
:guilabel:`Subscription Status`.

.. image:: renewals/sales-history-page.png
  :align: center
  :alt: Renewal quotation in the Odoo Subscriptions application.

Additionally, once the :guilabel:`Renewal Quotation` is confirmed, an :guilabel:`MRR` smart button
also appears at the top of the sales order.

.. image:: renewals/mrr-smart-button.png
  :align: center
  :alt: MRR smart button in the Odoo Subscriptions application.

When clicked, Odoo reveals an :guilabel:`MRR Analysis` page, detailing the monthly recurring revenue
related to this specific subscription.

.. important::
   On rare occasions, automatic payment can fail, which results in a *Payment Failure* tag on the
   top-right of the sales order, if there is an error in the payment method.

   This is done to prevent the system from charging the customer again the next time a scheduled
   action is run. Because the status of the payment is unknown, Odoo requests a manual operation to
   check if the payment has been made, before the payment can be used again.

   To do this, navigate to :menuselection:`Subscriptions app --> Subscriptions --> Quotations`.
   Click into the desired subscription, then check the *Chatter* to see if the payment was made.

   If the payment was **not** made, first enter :doc:`debug mode <../../general/developer_mode>`.
   Then, click the :guilabel:`Other Info` tab, and untick the checkbox next to :guilabel:`Contract
   in exception`. Reload the sales order, and the :guilabel:`Payment Failure` tag is gone.

   If the payment **was** made, a new invoice must be made and posted manually. This automatically
   updates the next invoice date of the subscription. Once created, enter :doc:`debug mode
   <../../general/developer_mode>`, and navigate to the new sales order. Click the :guilabel:`Other
   Info` tab, and untick the checkbox next to :guilabel:`Contract in exception`.
   Reload the sales order, and the :guilabel:`Payment Failure` tag is gone.

   .. figure:: renewals/contract-in-exception.png
      :align: center
      :alt: The "contract in exception" option selected with the "payment failure" tag shown.

      The :guilabel:`contract in exception`` option selected with the :guilabel:`payment failure`
      tag shown.

   In both cases, once the :guilabel:`Contract in exception` option is no longer selected, Odoo
   handles renewals automatically again. If the subscription remains in *payment failure*, it is
   skipped by Odoo until the sales order is closed.

.. seealso::
   - :doc:`../subscriptions`
   - :doc:`plans`
   - :doc:`products`
