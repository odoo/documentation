:code-column:

==========================================================
How to do an inventory valuation? (Anglo-Saxon Accounting)
==========================================================

Every year your inventory valuation has to be recorded in your 
balance sheet. This implies two main choices:

- the way you compute the cost of your stored items 
  (Standard vs. Average vs. Real Price);

- the way you record the inventory value into your books 
  (periodic vs. Perpetual).

Costing Method
==============
.. rst-class:: alternatives doc-aside

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
     * -
       - $10
       - 0
       -
       - $0
     * - Receive 8 Products at $10
       - $10
       - 8
       - +8*$10
       - $80
     * - Receive 4 Products at $16
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

  **Standard Price** means you estimate the cost price based 
  on direct materials, direct labor and manufacturing overhead 
  at the end of a specific period (usually once a year). You 
  enter this cost price in the product form.

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
     * -
       - $0
       - 0
       -
       - $0
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

  The **Average Price** method recomputes the cost price as a receipt order 
  has been processed, based on prices defined in tied purchase orders:
  FORMULA (see here attached)

  The average cost does not change when products leave the warehouse.

  From an accounting point of view, this method is mainly justified in 
  case of huge purchase price variations and is quite unusual due to its 
  operational complexity. Your actually need a software like Odoo to 
  easily keep this cost up-to-date.

  This method is dedicated to advanced users. It requires well established 
  business processes because the order in which you process receipt orders 
  matters in the cost computation.

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
     * -
       - $0
       - 0
       -
       - $0
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

  For **Real Price** (FIFO, LIFO, FEFO, etc), the costing is further 
  refined by the removal strategy set on the warehouse location 
  or product's internal category. The default strategy is FIFO. With 
  such method, your inventory value is computed from the real cost 
  of your stored products (cfr. Quantitative Valuation) and not from 
  the cost price shown in the product form. Whenever you ship items, 
  the cost price is reset to the cost of the last item(s) shipped. 
  This cost price is used to value any product not received from a 
  purchase order (e.g. inventory adjustments).

  FIFO is advised if you manage all your workflow into Odoo (Sales, 
  Purchases, Inventory). It suits any kind of users.

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
     * -
       - $0
       - 0
       -
       - $0
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

  For **Real Price** (FIFO, LIFO, FEFO, etc), the costing is further 
  refined by the removal strategy set on the warehouse location 
  or product's internal category. The default strategy is FIFO. 
  With such method, your inventory value is computed from the 
  real cost of your stored products (cfr. Quantitative Valuation) 
  and not from the cost price shown in the product form. Whenever 
  you ship items, the cost price is reset to the cost of the last 
  item(s) shipped. This cost price is used to value any product 
  not received from a purchase order (e.g. inventory adjustments).

  LIFO is not permitted outside the United States.

Odoo allows any method. The default one is **Standard Price**. 
To change it, check **Use a 'Fixed', 'Real' or 'Average' price 
costing method** in Purchase settings. Then set the costing 
method from products' internal categories. Categories show up 
in the Inventory tab of the product form.

Whatever the method is, Odoo provides a full inventory valuation
in :menuselection:`Inventory --> Reports --> Inventory Valuation` 
(i.e. current quantity in stock * cost price).

Periodic Inventory Valuation
============================

In a periodic inventory valuation, goods reception and 
outgoing shipments have no direct impact in the accounting. 
At the end of the month or year, the accountant posts one 
journal entry representing the value of the physical inventory. 

This is the default configuration in Odoo and it works 
out-of-the-box. Check following operations and find out how 
Odoo is managing the accounting postings.

.. rst-class:: alternatives doc-aside

Vendor Bill
  .. rst-class:: values-table

  ============================= ===== ======
  \                             Debit Credit
  ============================= ===== ======
  Assets: Inventory                50
  Assets: Deferred Tax Assets    4.68
  Liabilities: Accounts Payable        54.68
  ============================= ===== ======

  Configuration:
    * Purchased Goods: defined on the product or on the internal category of related product 
      (Expense Account field)
    * Deferred Tax Assets: defined on the tax used on the purchase order line
    * Accounts Payable: defined on the vendor related to the bill
Goods Receptions
  No Journal Entry
Customer Invoice
  .. rst-class:: values-table

  ===================================== ===== ======
  \                                     Debit Credit
  ===================================== ===== ======
  Revenues: Sold Goods                           100
  Liabilities: Deferred Tax Liabilities            9
  Assets: Accounts Receivable             109
  ===================================== ===== ======

  Configuration:
    * Revenues: defined on the product or on the internal category of related 
      product (Income Account field)
    * Deferred Tax Liabilities: defined on the tax used on the invoice line
    * Accounts Receivable: defined on the customer (Receivable Account)

  The fiscal position used on the invoice may have a rule that replaces the
  Income Account or the tax defined on the product by another one.
Customer Shipping
  No Journal Entry
Manufacturing Orders
  No Journal Entry

.. raw:: html

   <hr style="float: none; visibility: hidden; margin: 0;">

At the end of the month/year, your company does a physical inventory 
or just relies on the inventory in Odoo to value the stock into your books.

Then you need to break down the purchase balance into both the inventory and 
the cost of goods sold using the following formula:

Cost of goods sold (COGS) = Starting inventory value + Purchases – Closing inventory value

To update the stock valuation in your books, record such an entry:

.. h:div:: doc-aside

   .. rst-class:: values-table

  ===================================== ===== ======
  \                                     Debit Credit
  ===================================== ===== ======
  Assets: Inventory (closing value)         X     
  Expenses: Cost of Good Sold               X
  Expenses: Purchased Goods                        X
  Assets: Inventory (starting value)               X            
  ===================================== ===== ======

Perpetual Inventory Valuation
=============================

In a perpetual inventory valuation, goods receptions and 
outgoing shipments are posted in your books in real time. 
The books are therefore always up-to-date. This mode is 
dedicated to expert accountants and advanced users only. 
As opposed to periodic valuation, it requires some extra 
configuration & testing.

Let's take the case of a reseller.

.. h:div:: valuation-chart-anglo-saxon doc-aside

   .. placeholder

.. raw:: html

   <hr style="float: none; visibility: hidden; margin: 0;">

.. h:div:: doc-aside

   **Configuration:**

   - Accounts Receivable/Payable: defined on the partner (Accounting tab)

   - Deferred Tax Assets/Liabilities: defined on the tax used on the 
     invoice line

   - Revenues: defined on the product category as a default, or specifically
     to a specific product.

   - Expenses: this is where you should set the "Cost of Goods Sold" account.
     Defined on the product category as a default value, or specifically on
     the product form.

   - Goods Received Not Purchased: to set as Stock Input Account in product's 
     internal category

   - Goods Issued Not Invoiced: to set as Stock Output Account in product's 
     internal category

   - Inventory: to set as Stock Valuation Account in product's internal category

   - Price Difference: to set in product's internal category or in product 
     form as a specific replacement value

.. seealso::

  * :doc:`../../routes/strategies/removal`
  * :doc:`../../../accounting/others/inventory/avg_price_valuation`
  * :doc:`../../routes/costing/landed_costs`