:classes: stripe

====================
Inventory Valuations
====================

Costing Method
==============

International accounting standards define several ways to compute product
costs:

.. rst-class:: alternatives force-right

Standard Price
  .. rst-class:: values-table

  .. list-table::
     :widths: 28 18 18 18 18
     :header-rows: 1
     :stub-columns: 1

     * - Operation
       - Unit Cost
       - Qty On Hand
       - Delta Value
       - Inventory Value
     * - Receive 8 Products at $10
       - $10
       - 10
       - +8*$10
       - $80
     * - Receive 4 Products at $12
       - $10
       - 12
       - +4*$10
       - $120
     * - Deliver 10 Products
       - $10
       - 2
       - | -10*$10
         |
       - $20
     * - Receive 2 Products at $9
       - $10
       - 4
       - +2*$10
       - $40
Average Price
  .. rst-class:: values-table

  .. list-table::
     :widths: 28 18 18 18 18
     :header-rows: 1
     :stub-columns: 1

     * - Operation
       - Unit Cost
       - Qty On Hand
       - Delta Value
       - Inventory Value
     * - Receive 8 Products at $10
       - $10
       - 8
       - +8*$10
       - $80
     * - Receive 4 Products at $16
       - $12
       - 12
       - +4*$16
       - $144
     * - Deliver 10 Products [#average-removal]_
       - $12
       - 2
       - | -10*$12
         |
       - $24
     * - Receive 2 Products at $6
       - $9
       - 4
       - +2*$6
       - $36
FIFO
  .. rst-class:: values-table

  .. list-table::
     :widths: 28 18 18 18 18
     :header-rows: 1
     :stub-columns: 1

     * - Operation
       - Unit Cost
       - Qty On Hand
       - Delta Value
       - Inventory Value
     * - Receive 8 Products at $10
       - $10
       - 8
       - +8*$10
       - $80
     * - Receive 4 Products at $16
       - $12
       - 12
       - +4*$16
       - $144
     * - Deliver 10 Products
       - $16
       - 2
       - | -8*$10
         | -2*$16
       - $32
     * - Receive 2 Products at $6
       - $11
       - 4
       - +2*$6
       - $44
LIFO (not accepted in IFRS)
  .. rst-class:: values-table

  .. list-table::
     :widths: 28 18 18 18 18
     :header-rows: 1
     :stub-columns: 1

     * - Operation
       - Unit Cost
       - Qty On Hand
       - Delta Value
       - Inventory Value
     * - Receive 8 Products at $10
       - $10
       - 8
       - +8*$10
       - $80
     * - Receive 4 Products at $16
       - $12
       - 12
       - +4*$16
       - $144
     * - Deliver 10 Products
       - $10
       - 2
       - | -4*$16
         | -6*$10
       - $20
     * - Receive 2 Products at $6
       - $8
       - 4
       - +2*$6
       - $32

The costing method is defined on the product form: standard, average or real
price.

For "real price", the costing is further refined by the removal strategy (on
the warehouse location or product category), FIFO by default.

Periodic Inventory Valuation
============================

In a periodic inventory valuation, goods reception and outgoing shipments have
no direct impact in the accounting. At the end of the month or year, the
accountant post one journal entry representing the value of the physical
inventory.

.. rst-class:: alternatives force-right

Supplier Invoice
  .. rst-class:: values-table

  ============================= ===== ======
  \                             Debit Credit
  ============================= ===== ======
  Assets: Uninvoiced Inventory     50
  Assets: Deferred Tax Assets    4.68
  Expenses: Price Difference        2
  Liabilities: Accounts Payable	       56.68
  ============================= ===== ======

  Explanation:
    * A temporary account is used to note goods to receive
    * The purchase order provides prices of goods, the actual invoice may
      include extra costs such as shipping
    * The company still needs to pay the vendor (traded an asset against a
      liability)
  Configuration:
    * Uninvoiced Inventory: defined on the product or the category of related
      product, field: Stock Input Account
    * Deferred Tax Assets: defined on the tax used on the purchase order line
    * Accounts Payable: defined on the supplier related to the bill

  In this scenario, the purchase order was $50 but the company received an
  invoice for $52 as there were extra shipping costs.
Goods Receptions
  No Journal Entry
Customer Invoice
  .. rst-class:: values-table

  ===================================== ===== ======
  \                                     Debit Credit
  ===================================== ===== ======
  Revenue: Goods                                 100
  Liabilities: Deferred Tax Liabilities            9
  Assets: Accounts Receivable             109
  Assets: Inventory                               50
  Expenses: Cost of Goods Sold                    50
  ===================================== ===== ======

  Explanation:
    * Revenues increase by $100
    * A tax to pay at the end of the month of $9
    * The customer owns you $109
    * The inventory is decreased by $50 (shipping of the goods)
    * The cost of goods sold decreases the gross profit by $50
  Configuration:
    * Revenue: defined on the product, or the product category if not on the
      product, field Income Account
    * Deferred Tax Liabilities: defined on the tax used on the invoice line
    * Accounts Receivable: defined on the customer (property)
    * Inventory: defined on the category of the related product (property)
    * Expenses: defined on the product, or the category of product (property)

  The fiscal position used on the invoice may have a rule that replaces the
  Income Account or the tax defined on the product by another one.
Customer Shipping
  No Journal Entry
Manufacturing Orders
  No Journal Entry

.. raw:: html

   <hr style="float: none; visibility: hidden; margin: 0;">

At the end of the month/year, the company do a physical inventory (or just
rely on the inventory in Odoo). They multiply the quantity of each product by
its cost to know the inventory value of the company.

.. h:div:: force-right

   Current Values in Accounting:

   .. rst-class:: values-table

   =============== ====== ====== =======
   Account         Debit  Credit Balance
   =============== ====== ====== =======
   14000 Inventory $5,000 $800   $4,200
   =============== ====== ====== =======

   Real Inventory Valuation: $4,800

   Journal Entry to create:

   .. rst-class:: values-table

   ========================== ==== ====
   14000 Inventory            $600
   14700 Inventory Variations      $600
   ========================== ==== ====


Perpetual Inventory Valuation
=============================

In a perpetual inventory valuation, goods reception and outgoing shipments are
directly posted in the accounting. The inventory valuation is always
up-to-date.

.. h:div:: valuation-chart force-right

   .. placeholder

.. [#average-removal] products leaving the stock have no impact on the average
                      price.
