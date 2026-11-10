:industry_module: takeaway_restaurant
:knowledge_xmlid: takeaway_restaurant.welcome_article

.. _industries/takeaway_restaurant:

===================
Takeaway restaurant
===================

The **Takeaway Restaurant** industry package helps takeaway restaurants manage menu offers, online
and counter orders, kitchen preparation, pickup, delivery, and supplies in Odoo. It connects each
customer’s dishes and payment with the preparation and handover needed for service.

Use the package to organize dishes and extras, send orders through the configured preparation
workflow, and follow ingredients and packaging. Table service can use the same menu when the
restaurant also welcomes customers to eat on site.

.. _industries/takeaway_restaurant/basics:

Basics
======

The main dashboard provides access to every installed app in the database.

* The **Website** app: Present the menu and link to the configured online-ordering route.
* The **Point of Sale** app: Take counter and table orders and follow kitchen preparation displays.
* The **Inventory** app: Follow tracked ingredients, packaging, and stock movements.
* The **Purchase** app: Order supplies and configure vendor purchasing information.
* The **Invoicing** app: Issue requested customer invoices and follow the related sales records.

.. note::
   The Odoo mobile app provides access to the database from a phone.

Use a separate `Odoo trial database <http://Odoo.com/trial>`__ for the sample ordering workflows.

.. _industries/takeaway_restaurant/prepare-the-menu-and-order-channels:

Prepare the menu and order channels
===================================

Create products for dishes, sides, and drinks. Set their prices and Point of Sale categories. Use
product variants for the size or topping choices offered, and combo products for a menu that
includes several selections.

Present the menu on the website and configure the ordering route used by the restaurant. For online
orders, set the available pickup or delivery options, payment method, delivery fee, and any
preparation information collected at checkout.

Configure how those online orders reach Point of Sale and the kitchen. Follow the order's reference
and payment status through that configured integration.

:doc:`Configure self-ordering options <../applications/sales/point_of_sale/extra/self_order>`

.. _industries/takeaway_restaurant/take-and-prepare-orders:

Take and prepare orders
=======================

.. _industries/takeaway_restaurant/counter-and-takeaway-orders:

Counter and takeaway orders
---------------------------

Open the **Point of Sale** app session and enter the customer's dishes and extras. Add the required
preparation notes and the order's pickup or delivery information.

Send the order to the configured preparation display or printer. Follow it through the kitchen
stages and mark it ready when preparation is complete. Record the handover or delivery through the
restaurant's configured workflow.

Take payment using an enabled method and print or email the receipt. Review existing online payment
records before collecting another payment for the same order.

:doc:`Point of Sale documentation <../applications/sales/point_of_sale>`

.. _industries/takeaway_restaurant/table-service:

Table service
-------------

If customers also eat on site, configure the restaurant floor plan and tables. Select the table,
enter the order, and send it to preparation. Add notes for the customer's requested service order.

Use the configured bill-splitting, discounts, and promotions when settling the table. Preparation
staff follow the same display stages used for the restaurant's other orders.

For repeat-customer offers, configure loyalty rules and eligible rewards in Point of Sale. Apply the
relevant reward at checkout rather than treating a loyalty program as a separate app.

.. _industries/takeaway_restaurant/purchase-ingredients-and-packaging:

Purchase ingredients and packaging
==================================

Maintain vendor prices and lead times for regularly purchased ingredients and packaging. Create
requests for quotation in the **Purchase** app, compare offers, and confirm the agreed orders.
Follow incoming receipts in the **Inventory** app and record the quantities actually received.

Configure the products' costs for margin reporting. Use reordering rules and the appropriate
purchase routes when requests should be generated from stock thresholds. Review draft requests and
confirm the purchasing records before expecting a vendor delivery.

.. _industries/takeaway_restaurant/follow-stock-and-supplies-used:

Follow stock and supplies used
==============================

Configure inventory tracking for the supplies that need stock counts. Record receipts, stock
movements, and counts through the restaurant's inventory process.

A sale of a finished dish does not by itself identify every ingredient used. Configure the relevant
production or consumption process when ingredient usage should affect stock. Review physical
quantities and record adjustments when counts differ from the recorded stock.

Use sales reporting for top-selling dishes and the purchasing records for replenishment needs.

.. seealso::
   :doc:`Configure kitchen preparation displays
   <../applications/sales/point_of_sale/extra/preparation>`

.. _industries/takeaway_restaurant/go-further:
.. _industries/takeaway_restaurant/additional-apps:

Additional apps
===============

Table bookings, customer messages, and campaigns can support the restaurant alongside its ordering
and preparation workflow:

* Use the **Appointments** app to offer table bookings and collect the preparation questions used by
  the restaurant.
* Use the **WhatsApp** app to exchange order updates and agreed customer messages through configured
  business messaging.
* Use the **Email Marketing** app to send menus and offers to the selected subscriber audience.
* Use the **Accounting** app to follow daily takings, supplier bills, reconciliation, and financial
  reporting.

For further training, explore `Odoo Tutorials
<https://www.odoo.com/slides/tag/odoo-tutorials-9?prevent_redirect=True>`__.

.. note::
   `Contact Odoo <https://www.odoo.com/contactus>`__ to discuss the setup or request a
   demonstration.
