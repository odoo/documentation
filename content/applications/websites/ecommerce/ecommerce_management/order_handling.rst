==============
Order handling
==============

In Odoo's eCommerce workflow, every purchase generates **key documents** to ensure smooth order
processing from start to finish:
:ref:`Sales orders <ecommerce/handling/sales>` upon order confirmation,
:ref:`Delivery orders <ecommerce/handling/delivery>` to manage picking, packaging, and
:doc:`shipping <../checkout_payment_shipping/shipping>`,
and :ref:`Invoices <ecommerce/handling/legal>` as the final step.

.. _ecommerce/handling/sales:

Sales orders
============

A sales order (SO) is automatically created when a customer confirms an online purchase.

Sales order are available in :menuselection:`Website --> eCommerce --> Orders: Orders`. Click on a
sales order to open it. The status bar lets you know the payment status:

- :guilabel:`Quotation`: A new product is :doc:`added to the cart <../checkout_payment_shipping/cart>`
  but the customer has not gone through the :doc:`checkout <../checkout_payment_shipping/checkout>`
  process yet. If the customer is not logged in, the quotation is assigned to the default
  "Public User".
- :guilabel:`Quotation Sent`: The customer has gone through the checkout process and confirmed the
  order, but the :doc:`payment <../../../finance/payment_providers>` is not yet confirmed.
- :guilabel:`Sales Order`: The customer has completed the checkout process, confirmed the order, and
  the payment is received.

.. tip::
   You can assign a :doc:`sales team <../../../sales/crm/pipeline/manage_sales_teams>` or
   salesperson to manage your online orders by navigating to
   :menuselection:`Website --> Configuration --> Settings`. In the
   :guilabel:`Shop - Checkout Process` section, go to :guilabel:`Assignment` and select the desired
   :guilabel:`Sales Team` or :guilabel:`Salesperson`.

Abandoned cart
--------------

The order is considered an abandoned cart when a customer does not complete the
:doc:`checkout <../checkout_payment_shipping/checkout>` confirmation process.

To automate **email reminders** for abandoned carts, go to :menuselection:`Website --> Configuration
--> Settings`, scroll to the :guilabel:`Email & Marketing` section, and enable
:guilabel:`Automatically send abandoned checkout emails`. Set the delay in the
:guilabel:`Send after` field, and customize the email template by clicking
:icon:`fa-arrow-right` :guilabel:`Customize abandoned email template`. To track abandoned carts, go
to :menuselection:`Website --> eCommerce --> Orders: Abandoned Carts`.

.. note::
   - Abandoned cart emails can only be sent if the customer either entered their contact details
     during :doc:`checkout <../checkout_payment_shipping/checkout>` or was logged in when
     :doc:`adding items to their cart <../checkout_payment_shipping/cart>`.
   - Abandoned carts are not visible if the :guilabel:`Automatically send abandoned checkout emails`
     feature is not enabled.

.. _ecommerce/handling/delivery:

Delivery orders
===============

Once an online order is confirmed, a delivery order is automatically created. To access the delivery
order, click the :guilabel:`Delivery` button on the sales order. Alternatively, you can go to
:menuselection:`Inventory --> Operations --> Deliveries`, and search your sales order in the
:guilabel:`Source Document` column.

.. note::
   The :guilabel:`Delivery` button does not appear on the sales order when the product type is set
   to :guilabel:`Service` or if :guilabel:`Recurring` is selected in the :ref:`product form
   <ecommerce/products/product-form>`.

Packing eCommerce orders usually involves picking the product, preparing the
:doc:`packaging <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack>`,
:doc:`printing the shipping label(s) <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels>`,
and :doc:`shipping <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/invoicing>`
the items to the customer.

.. tip::
   - If customers can pay when :ref:`picking up <inventory/shipping/pickup>` their order in-store or
     by wire transfer, the quotation is **not** confirmed, and the stock is **not** reserved. Orders
     must be confirmed manually to reserve products in stock.
   - You can send an automatic confirmation email when delivery orders are completed by going to
     :menuselection:`Inventory --> Configuration --> Settings`, scrolling to the
     :guilabel:`Shipping` section, and enabling :guilabel:`Email Confirmation`.

Returns and refunds
-------------------

Customers can :doc:`return </applications/sales/sales/products_prices/returns>` products through
their :doc:`portal <../../../general/users/portal>` by navigating to :guilabel:`My Orders` section,
selecting the relevant order, and clicking :guilabel:`Return`. A return document is then generated
to include in the parcel.

.. Note::
   - Returning products may not be possible depending on the
     :doc:`return </applications/sales/sales/products_prices/returns>` strategy or product type.
   - Full :doc:`refunds </applications/sales/sales/products_prices/returns>` can be sent to
     customers directly from within the order interface. First, a refund-compatible
     :ref:`payment provider <payment_providers/supported_providers>` needs to be enabled.

.. seealso::
   :doc:`/applications/services/helpdesk/advanced/after_sales`

.. _ecommerce/handling/legal:

Invoices
========

The final step is generating the
:doc:`customer invoice </applications/finance/accounting/customer_invoices/overview>` and send it to
the customer.

Invoices are generated upon customer request for B2C transactions, while they are usually created
automatically for B2B transactions.

To enable automatic invoicing upon :doc:`online payment </applications/finance/payment_providers>`
confirmation, go to :menuselection:`Website --> Configuration --> Settings`, scroll to the
:guilabel:`Invoicing` section, and enable :guilabel:`Automatic Invoice`.
