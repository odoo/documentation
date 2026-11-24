:industry_module: furniture_store
:knowledge_xmlid: furniture_store.welcome_article

.. _industries/furniture_store:

===============
Furniture store
===============

The **Furniture Store** industry package helps furniture retailers manage showroom and online sales,
product variants, stock, delivery, returns, and supplier orders in Odoo. It follows customer choices
about size, finish, pickup, and home delivery through the store’s catalog and order records.

Use the package to prepare product variants, follow orders through preparation and delivery, and
replenish the range from suppliers. Customer requests and returns stay connected to the same sales
and inventory records.

.. _industries/furniture_store/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Point of Sale** app: Handle showroom purchases, pickup orders, and later delivery.
* The **Inventory** app: Follow furniture stock, warehouse locations, deliveries, and returns.
* The **Barcode** app: Scan goods when receiving, counting, or preparing orders.
* The **Purchase** app: Order furniture and accessories from vendors.
* The **Sales** app and the **Invoicing** app: Prepare tailored offers and bill customer orders.
* The **Website** app and the **eCommerce** app: Publish the range and offer online ordering.
* The **CRM** app: Follow inquiries submitted through the website.

.. note::
   The Odoo mobile app provides access to the database from a phone.

.. _industries/furniture_store/prepare-the-catalog:

Prepare the catalog
===================

In the **Inventory** app, create a product and add the attributes and variants used for choices such
as size, material, or finish. Configure variant prices and pictures to show the available options.

Organize the catalog with the category types used by each channel:

* Product categories classify goods internally.
* eCommerce categories organize the online catalog.
* Point of Sale categories organize the register display.

Configure promotional pricing and publish the products that should appear in the online store.

:doc:`Product variants <../applications/sales/sales/products_prices/products/variants>`

.. _industries/furniture_store/sell-furniture:

Sell furniture
==============

.. _industries/furniture_store/online-orders:

Online orders
-------------

Configure the payment methods, delivery options, and additional services in the **eCommerce** app.
The demonstration enables click and collect and payment on site, allowing customers to order online
and collect and pay at the store.

:doc:`Configure online delivery and pickup <../applications/websites/ecommerce/shipping>`

.. _industries/furniture_store/showroom-purchases:

Showroom purchases
------------------

1. Open the **Point of Sale** app and start the store's session.
2. Select the customer when the order needs an invoice, customer-specific price, or delivery.
3. Select or scan the products.
4. For home delivery, select :guilabel:`Ship later`, check the customer address, and choose the
   delivery date.
5. Select the payment method and validate the order.

Use :guilabel:`Note` to add instructions for the preparation team.

:doc:`Point Of Sale <../applications/sales/point_of_sale>`

.. _industries/furniture_store/click-and-collect-orders:

Click-and-collect orders
------------------------

In the register, open the three-dot menu and choose :guilabel:`Quotation/Order`. Select the online
order and click :guilabel:`Settle the order`. Review the products and complete the payment before
handing over the furniture.

.. _industries/furniture_store/prepare-and-deliver-orders:

Prepare and deliver orders
==========================

.. _industries/furniture_store/order-preparation:

Order preparation
-----------------

Open the :guilabel:`Preparation Display` from the **Point of Sale** app, select the order being
prepared, and gather its products. Mark the preparation as completed. If the store uses a
customer-facing status screen, the order's progress can also be displayed there.

.. _industries/furniture_store/warehouse-deliveries:

Warehouse deliveries
--------------------

Use the **Inventory** app to follow stock and deliveries. Enable storage locations in the Inventory
settings before adding locations for the showroom, warehouse, or storage areas.

Open the delivery, record the quantities sent, and validate it. For a partial delivery, enter only
the shipped quantities and create a backorder when prompted for the remaining goods.

Use the **Barcode** app with a mobile device or scanner to process the warehouse operations.

:doc:`Inventory <../applications/inventory_and_mrp/inventory>`

:doc:`Barcode <../applications/inventory_and_mrp/barcode>`

.. _industries/furniture_store/handle-returns-and-exchanges:

Handle returns and exchanges
============================

Open the original delivery or Point of Sale order and click :guilabel:`Return`. Select the products
and quantities, then choose the appropriate return option.

When :guilabel:`Return for exchange` is available, use it to create the replacement delivery. Follow
the return and any refund or exchange payment in the corresponding inventory and sales records.

.. _industries/furniture_store/replenish-the-range:

Replenish the range
===================

.. _industries/furniture_store/reordering-rules:

Reordering rules
----------------

Add vendor information and lead times to products, then configure minimum and maximum quantities in
their reordering rules.

Open :menuselection:`Inventory --> Replenishment` to review shortages and order the required supply.
Products configured with the purchase route create requests for quotation in the **Purchase** app.

.. note::
   An automatic trigger creates supplier requests when the rule is triggered. Use a
   :guilabel:`Manual`
   trigger when staff should review replenishment before ordering.

:doc:`Configure reordering rules
<../applications/inventory_and_mrp/inventory/warehouses_storage/replenishment/reordering_rules>`

.. _industries/furniture_store/purchase-orders-and-receipts:

Purchase orders and receipts
----------------------------

Open an existing supplier request or create one in the **Purchase** app. Add the required furniture
and accessories, then send the request to the vendor. Confirm the purchase order when agreed.

Open the receipt created for the order and process it when the goods arrive. Compatible draft
requests for the same vendor can be merged before confirmation.

:doc:`Create and confirm supplier orders
<../applications/inventory_and_mrp/purchase/manage_deals/rfq>`

.. _industries/furniture_store/follow-customer-requests:

Follow customer requests
========================

Use the **Website** app to explain store policies, present new arrivals, and publish an inspiration
blog. Adapt the contact form to collect the information needed for a furniture request and configure
its action to create an opportunity in the **CRM** app.

Follow the inquiry in CRM and create a tailored quotation when the customer's requirements are
clear. Use quotation templates and the quotation builder for proposals that need product
presentations or supporting documents.

:doc:`Collect customer requests through website forms
<../applications/websites/website/web_design/building_blocks/forms>`

:doc:`Create quotations from opportunities <../applications/sales/crm/acquire_leads/send_quotes>`

.. _industries/furniture_store/go-further:
.. _industries/furniture_store/additional-apps:

Additional apps
===============

Delivery updates, new-collection campaigns, and furniture sold as component kits can add workflows
around the showroom sale:

* Use the **WhatsApp** app to communicate delivery arrangements with customers.
* Use the **Social Marketing** app to schedule posts featuring new furniture and showroom displays.
* Use the **Accounting** app to manage customer payments, vendor bills, and financial reporting.
* Use the **Manufacturing** app to configure kits for furniture sold as a set of components.
* Use the **Website** app and the **eCommerce** app to add a catalog or ordering route for business
  customers.
* Use the **Studio** app to configure management approval rules for large discounts.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
