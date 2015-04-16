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

.. rst-class:: alternatives force-right

Manufacturing Order
  Consume:
    | 2 Wheels: Warehouse → Manufacturing
    | 1 Bike Frame: Warehouse → Manufacturing
  Produce:
    1 Bicycle: Manufacturing → Warehouse
  Configuration:
    | Warehouse: the location the Manufacturing Order is initiated
    | Manufacturing: on the product form, field “Manufacturing Location”

Drop-shipping
  stuff 1
Picking ➔ Packing ➔ Shipping
  stuff 2
Inter-Warehouse transfert
  stuff 3
Loss of product
  stuff 4
Inventory
  stuff 5
Reception
  stuff 6

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

Procurements & Procurement Rules
================================

A procurement is a request for a specific quantity of products to a specific
location. They can be created manually or automatically triggered by:

.. rst-class:: alternatives force-right

Sale order
  Effect
    A procurement is created at the customer location for every product
    ordered by the customer (you have to deliver the customer)
  Configuration
    Procurement Location: on the customer, field “Customer Location” (property)
Minimum Stock Rule
  Effect
    todo
  Configuration
    todo
Rules
  Effect
    todo
  Configuration
    todo

*Procurement rules* describe how to fulfill procurements on specific
locations:

* where the product should come from (source location)
* whether the procurement is :abbr:`MTO (Made To Order)` or :abbr:`MTS (Made
  To Stock)`

.. h:div:: force-right

   .. todo:: needs schema thing from FP

Routes
======

Procurement rules are grouped in routes. Routes define paths the product must
follow. Routes may be applicable or not, depending on the products, sales
order lines, warehouse,...

To fulfill a procurement, the system will search for rules belonging to routes
that are defined in (by order of priority):

.. rst-class:: alternatives force-right

Warehouses
  Warehouse Route Example:
    Pick → Pack → Ship
  Picking List:
    Pick Zone → Pack Zone
  Pack List:
    Pack Zone → Gate A
  Delivery Order:
    Gate A → Customer

  Routes that describe how you organize your warehouse should be defined on the warehouse.
A Product
  Product Route Example:
    Supplier → Quality Control → Inventory
Product Category
  Product Category Route Example:
    Supplier → Cross-Docks → Pack Zone
Sale Order Line
  Sale Order Line Example: Drop-shipping
    Supplier → Customer

Push Rules
==========


Push rule are trigered when products arrive at a specific location and allows
to automatically move them to another location. Push rules applications also
depends on applicable routes.

.. rst-class:: alternatives force-right

Quality Control
  * Product lands in Arrival Zone
  * Push 1: Arrival Zone → Quality Control
  * Push 2: Quality Control → Inventry
Transit Warehouse 1
  * Product lands in ?

Procurement Groups
==================

Routes and rules defines the inventory moves. On every rule, the document type
is provided:

* Picking
* Packing
* Delivery Order
* Purchase Order
* ...

Moves are grouped within the same document type if their procurement group and
locations are the same.

A sale order creates a procurement group so that pickings and delivery orders
of the same order are grouped. But you can define specific groups on
reordering rules too. (e.g. to group purchases of specific products together)
