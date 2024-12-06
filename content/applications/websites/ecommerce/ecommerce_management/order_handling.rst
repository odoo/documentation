==============
Order handling
==============

In Odoo's eCommerce workflow, each purchase creates key documents:
:ref:`Sales orders <ecommerce/handling/sales>` upon order confirmation,
:ref:`Delivery orders <ecommerce/handling/delivery>` for handling picking, packaging, and
:doc:`shipping <../checkout_payment_shipping/shipping>`,
and :ref:`Invoices <ecommerce/handling/legal>` sent to the customer as the final step.

.. _ecommerce/handling/sales:

Sales orders
============

A sales order is automatically created when a customer confirms an online purchase.

Sales order are available in :menuselection:`Website --> eCommerce --> Orders: Orders`. Click on a
sales order to open it. The status bar lets you know the payment status:

- :guilabel:`Quotation`: a new product is added to the cart, but the customer has not gone through
  the :doc:`checkout <../checkout_payment_shipping/checkout>` process yet;
- :guilabel:`Quotation Sent`: the customer has gone through the checkout process and confirmed the
  order, but the :doc:`payment <../../../finance/payment_providers>` is not yet confirmed;
- :guilabel:`Sales Order`: the customer has completed the checkout process, confirmed the order, and
  the payment is received.

You can assign a :doc:`sales teams <../../../sales/crm/pipeline/manage_sales_teams>` or salesperson
to manage your online orders by navigating to
:menuselection:`Website --> Configuration --> Settings`. In the :guilabel:`Shop - Checkout Process`
section, go to :guilabel:`Assignment` and select the desired :guilabel:`Sales Team` or
:guilabel:`Salesperson`.

Abandoned cart
--------------

An abandoned cart is an order where the customer did not finish the
:doc:`checkout <../checkout_payment_shipping/checkout>` confirmation process. You can view abandoned
carts by navigating to :menuselection:`Website --> eCommerce --> Orders: Abandoned Carts`.

To automate **email reminders** for abandoned carts, go to :menuselection:`Website --> Configuration -->
Settings`. Go to the :guilabel:`Email & Marketing` section and enable
:guilabel:`Automatically send abandoned checkout emails`. Once enabled, you can enter the delay
after the email is sent in the :guilabel:`Send after` field and click on
:guilabel:`Customize abandoned email template`.

.. note::
   Abandoned cart emails can only be sent if the customer either entered their contact details
   during checkout or was logged in when
   :doc:`adding items to their cart <../checkout_payment_shipping/cart>`.

.. _ecommerce/handling/delivery:

Delivery orders
===============

Once a quotation is confirmed, a delivery order is automatically created to process the delivery.

From your sales order, click the :guilabel:`Delivery` button to access the delivery order,
or go to :menuselection:`Inventory --> Operations --> Deliveries`, go to the
:guilabel:`Source Document` column, and select your sales order.

.. note::
   The :guilabel:`Delivery` button is not displayed on the sales order when the product type is set
   to :guilabel:`Service` or if you selected :guilabel:`Recurring` product in the :ref:`product form
   <ecommerce/products/product-form>`.

Packing eCommerce orders usually requires picking the product, preparing the
:doc:`packaging <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack>`,
:doc:`printing the shipping label(s) <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels>`,
and :doc:`shipping <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/invoicing>`
to the customer.

.. tip::
   You can send an automatic confirmation email when delivery orders are completed by enabling the
   feature in :menuselection:`Inventory --> Configuration --> Settings`, scrolling to the
   :guilabel:`Shipping` section, and ticking the :guilabel:`Email Confirmation` box.

.. note::
   If customers are allowed to pay when :ref:`picking up <inventory/shipping/pickup>` their order in
   stores or by wire transfer, the quotation is **not** confirmed and the stock is **not** reserved.
   Orders must be confirmed manually to reserve products in stock.

Returns and refunds
-------------------

Customers can :doc:`return </applications/sales/sales/products_prices/returns>` products through
their portal by navigating to :guilabel:`My Orders` section, selecting the relevant order, and
clicking :guilabel:`Return`. A return document is then generated to include in the parcel.

.. Note::
   - Depending on the :doc:`return </applications/sales/sales/products_prices/returns>` strategy or
     product type, it may not be possible to return products.
   - Full :doc:`refunds </applications/sales/sales/products_prices/returns>` can be sent to
     customers directly from within the order interface. First, a refund-compatible
     :ref:`payment provider <payment_providers/supported_providers>` needs to be enabled.

.. seealso::
   - :doc:`/applications/services/helpdesk/advanced/after_sales`

.. _ecommerce/handling/legal:

Invoices
========

The final step in an e-commerce order is to generate the invoice.

:doc:`Invoices </applications/finance/accounting/customer_invoices/overview>` are typically created
automatically for B2B transactions, while in B2C transactions, they are generated upon customer
request.

This process can be fully automated upon :doc:`online payment </applications/finance/payment_providers>`
confirmation. To enable automatic invoicing, navigate to
:menuselection:`Website --> Configuration --> Settings` and activate the
:guilabel:`Automatic Invoice` option in the :guilabel:`Invoicing` section.
