:industry_module: dropshipping
:knowledge_xmlid: dropshipping.welcome_article

.. _industries/dropshipping:

============
Dropshipping
============

The **Dropshipping** industry package helps online retailers manage storefront sales, supplier
fulfillment, and marketing campaigns in Odoo. Suppliers send orders directly to customers, while
the team follows each sale from product selection through delivery.

The online catalog can organize products by category and variant, offer delivery options, and
apply promotional benefits. Configured dropshipping routes create the supplier-side work from
customer orders, while marketing tools support product announcements and follow-up with shoppers.

.. _industries/dropshipping/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Website** and **eCommerce** apps: Publish the product catalog and accept customer orders and
  payments.
* The **Purchase** app: Review supplier orders and arrange fulfillment of customer purchases.
* The **Social Marketing** app: Schedule product announcements and campaigns on configured social
  accounts.
* The **Email Marketing** app: Send product offers and customer campaigns.
* The **Marketing Automation** app: Organize follow-up campaigns based on customer interests and
  activity.

.. _industries/dropshipping/prepare-the-online-catalog:

Prepare the online catalog
==========================

Organize products into website categories and use tags to help shoppers explore the range.
Configure attributes and values for variants, such as sizes or colors, and complete each
product's description and images.

Set the payment methods, shipping options, and delivery fees offered at checkout. Configure
discount codes and loyalty programs for the intended offers, and enable wishlists and gift
cards when they are part of the store's customer experience.

Use newsletter sign-up forms, banners, or pop-ups to invite shoppers to receive updates.
Customer accounts provide access to order information and support repeat purchases.

.. seealso::
   :doc:`Configure online products and their visibility
   <../applications/websites/ecommerce/configuration/products>`

.. _industries/dropshipping/arrange-supplier-fulfillment:

Arrange supplier fulfillment
============================

Link each product to its suppliers and review its :guilabel:`Dropship` route. Confirming a
customer order for a dropshipped product creates a supplier request for quotation in the
**Purchase** app. Review that request before committing to the supplier order.

1. Open the confirmed customer order and use its :guilabel:`Purchase` smart button to access the
   linked supplier request.
2. Check the products, quantities, supplier, and customer delivery address.
3. Send the request to the supplier and confirm the agreed purchase order.
4. Open the purchase order's :guilabel:`Dropship` transfer. Follow the supplier's shipment, then
   validate the transfer when the customer receives the goods.

Configure the shipping-carrier integration when it is needed for the available shipping and
tracking workflow.

For products available from several suppliers, compare location, lead time, quantity conditions,
and price before choosing the vendor. Keep those records current as supplier offers change.

.. seealso::
   - :doc:`Configure and fulfill dropship orders
     <../applications/inventory_and_mrp/inventory/shipping_receiving/daily_operations/dropshipping>`
   - :ref:`Configure third-party shipping carriers <inventory/shipping/third_party>`

.. _industries/dropshipping/promote-products-and-follow-customer-interest:

Promote products and follow customer interest
=============================================

Use the **Social Marketing** app to schedule product posts and follow the configured social
channels. Plan campaigns around product launches, seasonal offers, and partnerships, with discount
codes that identify the relevant promotion.

Use the **Email Marketing** app to send offers to the appropriate customer groups. Review campaign
engagement and use product interest or previous purchases to prepare more relevant messages.

In the **Marketing Automation** app, define the audience, timing, and follow-up actions for each
campaign. A sequence can introduce a product range, follow customer interest, and support a later
purchase when the corresponding triggers and actions are configured.

.. tip::
   Keep product descriptions, supplier lead times, and delivery information current. Review
   campaign results alongside customer orders to identify which offers lead to purchases.

.. seealso::
   - :ref:`Create an email campaign <email_marketing/create-mailing>`
   - :doc:`Prepare and schedule social posts
     <../applications/marketing/social_marketing/social_posts>`
   - :ref:`Create an automated campaign
     <marketing_automation/marketing_automation/campaigns/create-campaign>`

.. _industries/dropshipping/go-further:
.. _industries/dropshipping/additional-apps:

Additional apps
===============

Customer support, text campaigns, and supplier-order customization can complement dropshipping:

* Use the **SMS Marketing** app to send product and promotion messages to the selected customer
  audience.
* Use the **Helpdesk** app to follow questions about orders, deliveries, and returns.
* Use the **Studio** app to adapt purchase-order documents and configure supplier communication
  workflows.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
