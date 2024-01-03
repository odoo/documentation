===================
Renew subscriptions
===================

The foundation of any subscription business model is recurring payments. That's when customers
reliably pay a regular amount at specific intervals, in exchange for access to a subscription
product or service.

The renewal of a subscription is the process followed by customers when they willingly choose to
continue their participation (and payment) for a subscription product or service.

Subscribers experience the renewal process at different intervals -- weekly, monthly, annually, etc.
-- depending on the duration of the agreed-upon contract.

Most companies that offer subscriptions prefer to automate the renewals process for customers, but,
in some cases, manual subscription renewals are still used.

With the Odoo *Subscriptions* application, a company can manage all of their subscriptions in one
place. Renewals can be processed automatically or manually, include additional products or upsells
per renewal order, and be filtered in batch views to quickly locate customers who need to renew
their subscriptions.

Subscription renewals
=====================

In order to renew a subscription, a quotation with a subscription product **must** be confirmed,
with a configured :guilabel:`Recurring Plan` selected, which turns it into a sales order.

.. note::
  - Only a singular product is required.
  - A subscription service is still a product (albeit a digital, recurring one)

Then, that sales order needs to be confirmed, and payment from the customer for the initial
subscription has to be invoiced and registered.

When those steps are complete, an :guilabel:`In Progress` tag is applied to the sales order form,
and a series of buttons appear at the top of the sales order -- including a button titled,
:guilabel:`Renew`.

.. image:: renewals/renew-button.png
  :align: center
  :alt: Renew button on subscription sales order with Odoo Subscriptions.

When the :guilabel:`Renew` button is clicked, Odoo instantly presents a new renewal quotation,
complete with a :guilabel:`Renewal Quotation` tag.

.. image:: renewals/renewal-quotation.png
  :align: center
  :alt: Renewal quotation in the Odoo Subscriptions application.

From here, a standard sales flow can occur in order to confirm the quotation. This typically begins
by clicking :guilabel:`Send by Email`. This sends a copy of the quotation to the customer, by email,
for them to confirm, and eventually, pay for.

.. note::
  In the *Chatter* of the :guilabel:`Renewal Quotation`, it is mentioned that this subscription is
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

.. seealso::
   - :doc:`../subscriptions`
   - :doc:`plans`
   - :doc:`products`
