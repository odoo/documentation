=========================
Add subscription products
=========================

To properly sell your subscriptions using our amazing **Odoo Subscriptions** application, you must
follow these steps:

1. **Create your own subscription templates**
2. **Create your own subscription products with the right settings**

As a result, you will be able to manage your subscriptions like any other product, create your
quotations and continue the sales flow to track the number of subscriptions you sell and manage the
revenue they generate.

Configuration
=============

Go to :menuselection:`Subscriptions --> Subscription products` to learn how you can configure your
own subscription products. You have the possibility to create a new product or edit an existing one.
Once named, be careful to select the option *Can be sold* and deselect *Can be purchased*. For the
product type, it is recommended to use *Service* for subscription products as they are non-material
products that you provide to your customers. Finally, you can adapt your prices and also add an
internal reference.

.. image:: subscription_products/subscription-products-configuration.png
  :align: center
  :alt: View of a subscription product form in Odoo Subscriptions

.. note::
   In the Sales tab, underneath the Subscriptions section, make sure the *Subscription products*
   option is activated. In fact, if you create a subscription product from the **Odoo Subscriptions**
   application, this option is selected by default. However, if you create a product from another
   application, it is not the case.

   .. image:: subscription_products/subscription-products-form.png
     :align: center
     :alt: View of a subscription product form in Odoo Subscriptions

   You can also choose the subscription templates you want to use.

   .. image:: subscription_products/subscription-products-using-subscription-templates.png
     :align: center
     :alt: View of a subscription product form in Odoo Subscriptions

.. important::
   Be sure to check out our documentation on how to create, edit and manage your own
   :doc:`Subscription templates <../../subscriptions/configuration/subscription_templates>`
   before creating your own subscription products. Once created, check out our documentation on how to
   :doc:`Create a quotation using subscription products <../../subscriptions/sales_flow/create_a_quotation>`,
   to complete the sales flow.

.. seealso::
  - :doc:`../../subscriptions/configuration/subscription_templates`
  - :doc:`../../subscriptions/sales_flow/create_a_quotation`
