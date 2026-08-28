.. meta::
   :description:  Learn how receipts, deliveries, manufacturing, returns, and other inventory
                  operations affect stock valuation under the FIFO and AVCO costing methods.

.. |FIFO| replace:: :abbr:`FIFO (First In First Out)`
.. |AVCO| replace:: :abbr:`AVCO (Average Costing)`

=====================================================
Valuation of stock movements and inventory operations
=====================================================

The **Inventory** app maintains a real-time valuation of stock based on the physical movement of
goods. Every time an operation moves goods in or out of the company's stock, the value that came in
or went out is recorded on the :ref:`stock movement
<inventory/operations_valuation/stock-movements>`, and the product's :ref:`unit cost and total value
<inventory/operations_valuation/stock-movement-reported-values>` are recalculated.

.. note::
  This article covers inventory operations that affect the stock valuation reported in the
  **Inventory** app under the |AVCO| or |FIFO| costing methods, which are set per product category.
  Products using the *Standard Price* costing method behave differently, since their unit cost is
  set manually and is never recalculated by an operation.

These operations change product valuation in the **Inventory** app immediately, whether or not the
corresponding accounting entry exists yet. The difference between the **Inventory** and
**Accounting** app valuations is reported as :ref:`stock variation
<accounting/inventory-valuation/inventory-valuation-report>` in the **Accounting** app.

.. seealso::
   - :doc:`cheat_sheet`\: For visual examples that illustrate the impact of different **Inventory**
     configurations and operations.
   - :doc:`../../../finance/accounting/get_started/inventory_valuation`\: For configuration and
     reporting from the **Accounting** perspective.

.. _inventory/operations_valuation/types:

Types of inventory operations
=============================

.. _inventory/operations_valuation/types-stock-movement:

Stock movement
--------------

Most inventory operations generate *stock moves*, which record the movement of a given product from
a source location to a destination location. The following operations increase or decrease inventory
value through a stock movement:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Operation
     - Valuation effect
   * - :ref:`inventory/operations_valuation/receipts`
     - Increase
   * - :ref:`inventory/operations_valuation/finished-goods`
     - Increase
   * - :ref:`inventory/operations_valuation/customer-returns`
     - Increase
   * - :ref:`inventory/operations_valuation/deliveries`
     - Decrease
   * - :ref:`inventory/operations_valuation/component-consumption`
     - Decrease
   * - :ref:`inventory/operations_valuation/vendor-returns`
     - Decrease
   * - :ref:`inventory/operations_valuation/scrap`
     - Decrease

.. _inventory/operations_valuation/types-other:

Other
-----

Some operations do not create a stock move, but still change the quantity or value of a product. The
following corrections and updates can be made manually without a corresponding stock movement:

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - Operation
     - Valuation change
   * - :ref:`inventory/operations_valuation/update-cost`
     - Difference between old and new cost, multiplied by quantity on hand
   * - :ref:`inventory/operations_valuation/inventory-adjustments`
     - Cost multiplied by the difference in quantity
   * - :ref:`inventory/operations_valuation/negative-stock`
     - Decrease based on recent cost, updates to match actual cost
   * - :ref:`inventory/operations_valuation/adjust-valuation`
     - Difference between old and new value for a specific move

.. _inventory/operations_valuation/stock-movements:

About stock movements
=====================

Most inventory operations generate *stock moves*, which record the movement of a given product from
a source location to a destination location. *Stock moves* can be divided into three categories:

- **Inbound (outside → inventory)**: Adds quantity and value, and starts out with a remaining
  quantity equal to the quantity received.
- **Outbound (inventory → outside)**: Removes quantity and value, and decreases the remaining
  quantity of earlier inbound moves.
- **Internal (inventory → inventory)**: Changes stock location, but does not change the quantity
  owned by the company. Does not affect unit cost or total value.

.. important::
   Completed operations only affect valuation when they move goods *in* or *out* of inventory.

.. _inventory/operations_valuation/stock-movement-location-types:

Location types
--------------

Odoo databases use the following :ref:`location types <inventory/warehouses_storage/location-type>`:

.. list-table::
   :header-rows: 1
   :widths: 30 20 50

   * - Location type
     - In inventory?
     - Typical use
   * - Internal
     - Yes
     - Warehouse stock, input, quality control, packing, and output zones
   * - Transit
     - Yes
     - Goods in transit between two warehouses of the same company
   * - Customers/Rental
     - Yes
     - Goods being rented out to a customer
   * - Vendors
     - No
     - Goods not yet received from a supplier
   * - Customers
     - No
     - Goods delivered to a customer
   * - Production
     - No
     - Where raw materials are consumed, and manufactured products are created
   * - Inventory Loss
     - No
     - Inventory adjustments and scrap
   * - Virtual
     - N/A
     - Non-physical locations for structure and organization, should not hold stock

.. example::
   - Receiving 10 units from the *vendor* location into an *internal* location would **increase**
     valuation.
   - Moving those same 10 units from the *input zone* to a *shelf* would **not** affect valuation,
     because the product moves between *internal* locations and does not enter or leave stock.
   - Delivering those units to a *customer* location would **decrease** valuation, because the goods
     leave stock and are no longer owned by the company.

.. _inventory/operations_valuation/stock-movement-tracked-values:

Tracked values
--------------

Value is recorded on the *stock moves*, and inbound moves also record the remaining quantity and
value:

- :guilabel:`Value`: The *value* of the units that entered or left the company's stock through the
  move.
- :guilabel:`Remaining Quantity`: The *quantity* of the units that entered the company's stock
  through the move and are *still* in stock.
- :guilabel:`Remaining Value`: The *value* of the units that entered the company's stock through the
  move and are *still* in stock.

.. _inventory/operations_valuation/stock-movement-reported-values:

Reported values
---------------

Each product has two key reporting figures calculated using the value from *stock moves*:

- :guilabel:`Total Value`: The total value of goods on hand. Sums the :guilabel:`Remaining Value` of
  inbound moves that still have a :guilabel:`Remaining Quantity`.
- :guilabel:`Unit Cost`: The unit cost of a product, specific to each stock movement. Calculated
  based on the :ref:`costing method <costing-methods>` set for the product group.

.. important::

   The :guilabel:`Unit Cost` on a stock movement is distinct from the *Cost* field in the *product
   form*. The *Cost* field displays the average price of the product, even if the product group is
   configured to use the |FIFO| costing method. As a result, the *Cost* field on the product form is
   affected by outbound stock movements when using the |FIFO| costing method.

   The value in the *Cost* field is used as the unit price for
   :ref:`inventory/operations_valuation/inventory-adjustments`, even when using the |FIFO| costing
   method.


.. _inventory/operations_valuation/stock-movement-operations:

Stock movement operations
=========================

.. _inventory/operations_valuation/receipts:

Receipts
--------

A validated receipt moves goods from the *vendor* location into stock. Its value is the quantity
received multiplied by the unit price on the source purchase order line, converted to the company's
currency. When no purchase order is involved, the product's current cost is used instead.

Additional costs attached to a receipt, such as freight or duties, raise the value of goods already
received without changing their quantity.

.. seealso::
   :doc:`landed_costs`

.. _inventory/operations_valuation/finished-goods:

Finished goods
--------------

Finished goods move from the *production* location into stock, which adds value.

The value of the finished good includes the cost of the components consumed, valued by their own
costing methods, plus the labor cost of the work centers and employees involved. Because labor is
added on top of the components, finished goods usually raise total inventory value: consumed
component value is returned to inventory as part of the finished good, plus the cost of the work
performed. To record production costs, configure a
:ref:`accounting/inventory-valuation/cost-of-production` account.

.. example::
   A manufacturing order consumes three components valued at $78.00, $180.00, and $20.00, and
   records $200.00 of labor. The finished good enters stock with a value of $478.00.

.. _inventory/operations_valuation/customer-returns:

Customer returns
----------------

A return brings goods back from the *customer* location into stock, so it increases value. When the
return is created from the original delivery, the returned goods are valued at the unit cost at
which they left, effectively reversing the delivery rather than revaluing the goods at today's cost.

.. _inventory/operations_valuation/deliveries:

Deliveries
----------

A validated delivery moves goods from stock to the *customer* location. The quantity is derived from
the delivery order, and the unit cost is calculated according to the :ref:`costing method
<inventory/cheat_sheet/accounting-methods>`.

.. _inventory/operations_valuation/component-consumption:

Component consumption
---------------------

Components consumed by a manufacturing order are moved from inventory to the *production* location,
and their value is removed at the cost determined by their own costing method. That value is
included in the :ref:`finished good <inventory/operations_valuation/finished-goods>`, as described
above.

.. note::
   Components sent to a subcontractor remain company-owned: the subcontracting location is an
   internal location, so shipping components there does not change inventory value.

   The finished good arrives through a receipt, which is where value changes. Its value combines the
   components consumed by the subcontractor and the price of the subcontracting service on the
   purchase order.


.. _inventory/operations_valuation/vendor-returns:

Vendor returns
--------------

Returning goods to a vendor moves them from stock back to the vendor location, and removes their
value on the same basis as any other outbound move, using the selected costing method. For granular
visibility into purchasing costs, enable valuation by lots/serial numbers.

.. seealso::
   - :doc:`../../../finance/accounting/get_started/avg_price_valuation`
   - :doc:`valuation_by_lots`


.. _inventory/operations_valuation/scrap:

Scrap
-----

Scrapping a product decreases inventory value, following the same costing rules as any other
outbound move.

.. seealso::
   :doc:`scrapped_inventory_valuation`

.. _inventory/operations_valuation/other-operations:

Other operations
================

Several inventory operations change quantity or value without creating a stock move:

.. _inventory/operations_valuation/update-cost:

Updating product costs
----------------------

Manually changing the cost of a product revalues the quantity currently on hand. The value increases
or decreases based on the difference between the old cost and the new cost, multiplied by the
quantity on hand. The quantity itself does not change.

.. _inventory/operations_valuation/inventory-adjustments:

Inventory adjustments
---------------------

Discrepancies between the recorded quantity and counted quantity can be reconciled through inventory
adjustments. The difference is applied as a move to or from a virtual *Inventory adjustment*
location, which is outside stock, so the adjustment changes inventory value as well as quantity.
Adjustments increase or decrease value based on the difference between the counted quantity and the
expected quantity:

- A counted quantity **higher** than expected produces an *inbound* move and *increases* inventory
  value.
- A counted quantity **lower** than expected produces an *outbound* move and *decreases* inventory
  value.

Inventory adjustments use the product's current averaged cost as the :ref:`unit cost
<inventory/operations_valuation/stock-movement-reported-values>` for the stock movement.

.. seealso::
   :doc:`../warehouses_storage/inventory_management/count_products`

.. _inventory/operations_valuation/negative-stock:

Negative stock
--------------

When goods are sold before their receipt has been recorded, stock goes negative and there is no
inbound move for the outbound move to draw from. Odoo values the outbound move at the last known
cost of the product. The negative stock value is included in :ref:`stock variation
<accounting/inventory-valuation/inventory-valuation-report>` in the **Accounting** app.

The negative value is resolved once the receipt is recorded. If the units that arrive are acquired
at a different price, Odoo modifies the value of the outbound move to match the actual cost.

.. _inventory/operations_valuation/adjust-valuation:

Adjusting the value of a move
-----------------------------

When a move was valued incorrectly at the time of the operation, the value recorded on the completed
move can be corrected using the :guilabel:`Adjust Valuation` action in the :ref:`Moves Analysis
<inventory/operations_valuation/moves-analysis>` report. The correction takes a new value and a
description explaining the reason, and applies to that move alone.

.. _inventory/operations_valuation/reporting:

Reporting
=========

Stock movements and related valuation impacts can be found in the :ref:`Moves Analysis
<inventory/operations_valuation/moves-analysis>` and :ref:`Stock report
<inventory/operations_valuation/stock-report>` in the **Inventory** app.

.. seealso::
   :ref:`changes-in-19`

.. _inventory/operations_valuation/moves-analysis:

Moves Analysis
--------------

The :doc:`../warehouses_storage/reporting/moves_analysis` lists moves with their source location,
destination location, quantity, and value, along with the :guilabel:`Remaining Quantity` and
:guilabel:`Remaining Value` still in stock. The value of an individual move can also be corrected
from this report, as described in :ref:`inventory/operations_valuation/adjust-valuation`. It also
includes an :guilabel:`Aging Report` favorite for tracking remaining quantity and value by month.

.. _inventory/operations_valuation/stock-report:

Stock report
------------

The :doc:`../warehouses_storage/reporting/stock` lists products with the quantity on hand. It also
displays :guilabel:`Unit Cost`, and :guilabel:`Total Value`, which can be clicked for more details.
The value of stock at an earlier date can be viewed using the :guilabel:`Inventory at Date` option.

.. important::
   The default *Stock* report view calculates values across the entire company, even when product
   stock is spread across multiple warehouses. To view the inventory valuation for a specific
   warehouse, select the warehouse using the :guilabel:`Warehouses` filter in the side panel.
