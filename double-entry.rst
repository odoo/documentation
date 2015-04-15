:classes: stripe

=================================
Double-Entry Inventory Management
=================================

In a double-entry inventory, there is no stock input, output (disparition) or
transformation. Instead, there are only stock moves between locations.

.. h:div:: force-right chart-of-locations

   .. placeholder

Operations
==========

Stock moves represent the transit of goods and materials between inventory
locations.

* Manufacturing Order
* Drop-shipping
* Picking ➔ Packing ➔ Shipping
* Inter-Warehouse transfert
* Loss of product
* Inventory
* Reception

Analysis
========

Inventory analysis can use products count or value (number of products *
products cost).

For each inventory location, multiple data points can be analysed:

* inventory valuation
* value creation (difference between the value of manufactured products and
  the cost of raw materials used during manufacturing)
* value of lost/stolen products
* value of scrapped products
* value of products delivered to clients over a period
* value of products in transit between locations

Procurements & Pull Rules
=========================

A procurement is a request for a specific quantity of products to a specific
location. They can be created manually or automatically triggered by:

* sale orders
* minimum stock rules
* rules

*Pull rules* describe how to fulfill procurements on specific locations:

* where the product should come from (source location)
* whether the procurement is :abbr:`MTO (Made To Order)` or :abbr:`MTS (Made
  To Stock)`

.. h:div:: force-right

   .. todo:: needs schema thing from FP

Routes
======

At each step or a procurement's fulfillment, multiple rules may be
available. *Routes* define which rules should be used based on the environment
(product, sales orders, warehouse, …). To fulfill a procurement, the system
will search for routes in the following order:

1. sale order line routes
2. product routes
3. product category routes
4. warehouse routes

Push Rules
==========

Push rules are triggered when a product enters a specific location, and allows
chaining locations. Push rules can also be configured and filtered using
routes.

Some example:
* quality control
* transit warehouse 1

.. warning:: push rules and pull rules are *not* symmetrical, pull rules are
             triggered by procurement requests whereas push rules are
             triggered by stock moves

Procurement Groups
==================
