:classes: stripe

=================================
Double-Entry Inventory Management
=================================

A double-entry inventory has no stock input, output (disparition of products)
or transformation. Instead, all operations are stock moves between locations
(possibly virtual).

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

Inventory analysis can use products count or products value (= number of
products * product cost).

For each inventory location, multiple data points can be analysed:

.. raw:: html

   <ul class="highlighter-list" data-target=".analysis-table">
     <li data-highlight=".analysis-valuation">inventory valuation</li>
     <li data-highlight=".analysis-creation">
       value creation (difference between the value of manufactured products
       and the cost of raw materials used during manufacturing) (negative)
     </li>
     <li data-highlight=".analysis-lost">value of lost/stolen products</li>
     <li data-highlight=".analysis-scrapped">value of scrapped products</li>
     <li data-highlight=".analysis-delivered">value of products delivered to clients over a period</li>
     <li data-highlight=".analysis-transit">value of products in transit between locations</li>
   </ul>

.. h:div:: force-right analysis-table

 .. raw:: html

   <table class="table table-condensed highlighter-target">
     <thead>
       <tr>
         <th>Location</th> <th class="text-right">Value</th>
       </tr>
     </thead>
     <tbody>
       <tr class="analysis-valuation">
         <th>Physical Locations</th> <td class="text-right">$1,000</td>
       </tr>
       <tr>
         <th>&#8193;Warehouse 1</th> <td class="text-right">$600</td>
       </tr>
       <tr>
         <th>&#8193;Warehouse 2</th> <td class="text-right">$400</td>
       </tr>
       <tr>
         <th>Partner Locations</th> <td class="text-right">- $1,500</td>
       </tr>
       <tr class="analysis-delivered">
         <th>&#8193;Customers</th> <td class="text-right">$2,000</td>
       </tr>
       <tr>
         <th>&#8193;Suppliers</th> <td class="text-right">- $3,500</td>
       </tr>
       <tr>
         <th>Virtual Locations</th> <td class="text-right">$500</td>
       </tr>
       <tr class="analysis-transit">
         <th>&#8193;Transit Location</th> <td class="text-right">$600</td>
       </tr>
       <tr>
         <th>&#8193;Initial Inventory</th> <td class="text-right">$0</td>
       </tr>
       <tr class="analysis-lost">
         <th>&#8193;Inventory Loss</th> <td class="text-right">$350</td>
       </tr>
       <tr class="analysis-scrapped">
         <th>&#8193;Scraped</th> <td class="text-right">$550</td>
       </tr>
       <tr class="analysis-creation">
         <th>&#8193;Manufacturing</th> <td class="text-right">- $1,000</td>
       </tr>
     </tbody>
  </table>

Procurements & Procurement Rules
================================

A procurement is a request for a specific quantity of products to a specific
location. They can be created manually or automatically triggered by:

.. rst-class:: alternatives force-right

New sale orders
  Effect
    A procurement is created at the customer location for every product
    ordered by the customer (you have to deliver the customer)
  Configuration
    Procurement Location: on the customer, field “Customer Location” (property)
Minimum Stock Rules
  Effect
    todo
  Configuration
    todo
Custom rules
  Effect
    todo
  Configuration
    todo

*Procurement rules* describe how procurements on specific locations should be
fulfilled e.g.:

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

Push rules trigger when products enter a specific location. They automatically
move the product to a new location. Whether a push rule can be used depends on
applicable routes.

.. rst-class:: alternatives force-right

Quality Control
  * Product lands in Arrival Zone
  * Push 1: Arrival Zone → Quality Control
  * Push 2: Quality Control → Inventry
Transit Warehouse 1
  * Product lands in ?

Procurement Groups
==================

Routes and rules define inventory moves. For every rule, a document type is
provided:

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
