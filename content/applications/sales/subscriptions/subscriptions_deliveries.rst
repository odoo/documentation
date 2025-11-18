=============================
Subscriptions with deliveries
=============================

Subscriptions and subscription products are compatible with deliveries. With some minor
configuration, it is possible to offer customers subscriptions of regularly delivered physical goods
such as a meal delivery box or magazine.

.. example::
   An independent coffee shop offers local customers a monthly coffee bean subscription service.
   Each month, Odoo automatically generates a sales order and invoice in the Sales app and a
   delivery order in the Inventory app to ensure that the coffee beans get delivered to subscribed
   customers.

Configuration
=============

Selling deliverable subscription products requires that two different apps be :ref:`installed
<general/install>`: the **Subscriptions** app and the **Inventory** app. The **Subscriptions** app
allows for the creation and management of subscription products while the **Inventory** app, in
addition to managing inventory, allows for adding shipping information to quotations and
automatically creating delivery orders when invoices are created.

After installing both **Subscriptions** and **Inventory**, enter the **Settings** app, search for
"delivery", and tick the :doc:`Delivery Methods
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration>` box in the
:guilabel:`Inventory` section. This allows for adding the cost of shipping to quotations and
invoices.

Creating a subscription delivery product
========================================

To create a deliverable subscription product, navigate to :menuselection:`Subscriptions app -->
Products --> Products`. Click an existing product or create a new one and set the :guilabel:`Product
Type` to `Goods`. Click the :guilabel:`Recurring prices` tab and :guilabel:`Add a line`. Choose an
existing :guilabel:`Recurring plan` or create a new one, and add a :guilabel:`Pricelist`.

Choosing a delivery method
--------------------------

Navigate to :menuselection:`Inventory app --> Configuration --> Delivery Methods`. By default there
is only one delivery method available: Standard delivery. Businesses with more substantial delivery
needs can :doc:`create new delivery methods
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/new_delivery_method>`
or :doc:`add third-party shipping carrier integration
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`
to their Odoo databases.

Creating a subscription delivery quotation
==========================================

As with creating a subscription delivery product, creating a subscription delivery quotation is
similar to :ref:`the regular process <subscriptions/quotations>`, but with an additional step.
After entering all other information for the quotation, click the :guilabel:`Add shipping` button in
the :guilabel:`Order Lines` tab. Choose a shipping method from the dropdown and, if necessary, enter
the item's weight and dimensions and click the :guilabel:`Get rate` button. Then click
:guilabel:`Add` to add the delivery details as a line item to the quotation. From here, proceed with
confirming the quotation and generating a sales order as normal.

Validating delivery orders
==========================

Once the sales order for a subscription delivery product has been finalized, a :guilabel:`Delivery`
smart button appears that opens the delivery order for the sale. After clicking through, if there is
enough stock to fulfill the delivery order, it appears as being in the :guilabel:`Ready` stage. If
there is not enough stock to fulfill the order, it appears as being :guilabel:`In Progress` instead.
Once the delivery order is in the Ready stage, click :guilabel:`Validate` to advance the stage to
:guilabel:`Done` and automatically generate a delivery slip and send it to the customer.

.. seealso::
   - :doc:`../subscriptions`
   - :doc:`../subscriptions/renewals`
   - :doc:`../sales/sales_quotations/create_quotations`
   - :doc:`../sales/sales_quotations/get_paid_to_validate`
   - :doc:`../sales/products_prices/prices/pricing`
   - :doc:`../subscriptions/automatic_payments`
