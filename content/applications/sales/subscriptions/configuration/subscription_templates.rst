==========================
Use subscription templates
==========================

The subscription business model is becoming more popular. Are you wondering why?

- For **customers**, value lies in **convenience**:

  - Subscriptions simplify the business process. Indeed, subscribers never have to remember to renew
    their orders every month, which gives them the assurance that they will have everything they
    need before they actually need it.
  - Subscriptions help customers stay on budget.

- For **businesses**, value lies in the **ability to predict recurring revenue**:

  - Subscriptions reduce customer churn rate and significantly increase customer retention.
  - Subscriptions provide much higher payment security for your business. They stabilize and
    maintain recurring revenue streams by guaranteeing monthly revenues and adding value to your
    business.

.. raw:: html

   <div align="center" style="color:#017e84; font-size: 1.5rem ;margin: 20px 0"> <b>Simplicity.
   Higher customer retention. Opportunities for marketing. <br/>Business consistency. Better cash flow
   management.</b> </div>

**Odoo Subscriptions** help you save time and money. Subscription templates can help you generate
recurring invoices and manage renewals at a fast pace. With Odoo you have the possibility to create,
edit, and manage your own subscription templates.

Configuration
=============

Go to :menuselection:`Subscriptions --> Configuration --> Subscription templates`. By default, Odoo
suggests you two types of subscription (MON - Monthly subscription *vs* YEA - Yearly subscription).
You can also create your own ones.

.. image:: subscription_templates/default-subscription-templates.png
  :align: center
  :alt: Default subscription templates on Odoo Subscriptions

.. important::
   The **Odoo Subscriptions** application automatically installs **Odoo Sales** and **Odoo Invoicing**
   as they work integrated.

Create your first template
==========================

You can create a new template or edit an existing one. The first thing you need to do is give your
template a name. After that, choose an *Invoicing period* and specify whether you would like to
invoice your customers per *Days*, *Weeks*, *Months* or *Years*. On *Duration*, determine if
the subscription must go on *Forever* (until it’s manually closed), or for a *Fixed amount* of time.
Among the payment options, an additional field called *Invoice email* appears when you choose
*Send*, *Send & try to charge* or *Send after successful payment*. This field allows you to add an
invoice email template to your subscription templates.

.. image:: subscription_templates/creation-of-subscription-templates.png
  :align: center
  :alt: Create your own subscription templates on Odoo Subscriptions

For each template, you can also choose if you want your customers to be able to close their
subscriptions or not. If enabled, you can set an *Automatic closing* limit and specify the
*Group of subscription* and *Journal* options.

.. note::
   On each template, you can add your **Terms and Conditions**. Specifying terms and conditions is
   essential to set out important contractual points between the customers and the sellers (payment,
   refund policy, cancellation, complaints, etc.).

   .. image:: subscription_templates/terms-and-conditions-on-subscription-templates.png
     :align: center
     :alt: Terms & conditions on Odoo Subscriptions

   Finally, if you want to know the basic running health status of your subscriptions, you also have
   access to a specific tab called **Health Check**. There, you can edit and create your own
   filters to define what is a subscription in good health *vs* bad health. The system automatically
   summarizes all the records corresponding to these filters and you are able to manage them in one
   click.

   .. image:: subscription_templates/health-check-on-subscription-templates.png
     :align: center
     :alt: Health check on Odoo Subscriptions

.. important::
   After creating your own subscription templates, be sure to check out our documentation on how to
   create, edit and manage your own
   :doc:`Subscription products <../../subscriptions/configuration/subscription_products>`,
   to complete the sales flow.

.. seealso::
  - :doc:`../../subscriptions/configuration/subscription_products`
