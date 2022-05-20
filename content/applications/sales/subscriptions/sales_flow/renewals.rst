====================
Renew a subscription
====================

The key feature of a subscription business model is the recurring nature of payments. In this model,
customers pay a recurring amount in exchange for access to a product or a service.

.. raw:: html

   <div align="center" style="color:#AD5E99; font-size: 2rem ;margin: 20px 0"> <b>The renewal of a
   subscription is the process followed by each customer when willing to pursue a
   subscription.</b> </div>

Each subscriber experiences this renewal process monthly, annually, or sometimes more, depending on
the duration of the contract. Most subscription companies choose to automate their renewal processes
but, in some cases, manual subscription renewals are still the preferred option.

With **Odoo Subscriptions**, you can have all your subscriptions in one application, suggest an
automatic subscription renewal to your customers (as well as a manual one) and, finally, filter all
your subscriptions and easily find those to renew (with the help of the tag *To renew*).

Renew your first subscription
=============================

Before renewing a subscription, be sure to check out our documentation on how to
:doc:`Create a quotation <../../subscriptions/sales_flow/create_a_quotation>` using subscription
products. Indeed, once confirmed, a quotation becomes a sales order and a new subscription is
automatically created. Therefore, this subscription has the status *In progress*. From there, you
have the possibility to renew the subscription. In the Other Info tab, underneath the To Renew
section, you can activate the *To renew* option. When activated, a yellow tag automatically appears
in the upper right corner of the subscription.

.. image:: renewals/renew-your-subscription.png
  :align: center
  :alt: Renew your subscription with Odoo Subscriptions

.. important::
   The *To renew* tag is automatically ticked when a payment fails. This indicator also appears
   on the customer portal. To visualize that, you just have to click on the *Customer preview*
   button. The tag *To renew* appears on the top right corner.

   .. image:: renewals/customer-preview-of-a-renewal.png
     :align: center
     :alt: Customer preview of a renewal with Odoo Subscriptions

When a subscription needs to be renewed, you have the possibility to use a new button called
*Renewal quotation*. By clicking on it, a new quotation is created. From there, start a basic sales
flow allowing you to send the quotation by email to your customers or to confirm it. It is better to
first *Send by email* the quotation to your customers in order to have their confirmation and, then,
*Confirm* it in **Odoo Sales**.

.. note::
   In the Chatter of this new quotation, it is mentioned that "This renewal order has been created
   from the previous subscription". Once confirmed by your customers, this quotation becomes a
   sales order and a new sale is mentioned in the upper right corner of the subscription.

   .. image:: renewals/renew-a-quotation.png
     :align: center
     :alt: Renew a quotation with Odoo Subscriptions

   By clicking on the *Sales* button, you have a summary of your sales orders in a list view.
   The only difference between your two quotations is the description underneath the
   *Subscription Management* category. There, you can easily visualize which one is your renewal.

   .. image:: renewals/subscription-management-category.png
     :align: center
     :alt: Renewal as Subscription Management form in Odoo Subscriptions

Visualize your subscriptions to renew
=====================================

Finally, if you want to visualize all your subscriptions and easily find those to renew, you can go
to your *Subscriptions dashboard* and use the filter *To renew*.

.. image:: renewals/subscriptions-dashboard-with-the-to-renew-filter.png
  :align: center
  :alt: List view of all subscriptions and use of the filter to renew in Odoo Subscriptions

.. seealso::
  - :doc:`../../subscriptions/configuration/subscription_templates`
  - :doc:`../../subscriptions/configuration/subscription_products`
  - :doc:`../../subscriptions/sales_flow/create_a_quotation`
