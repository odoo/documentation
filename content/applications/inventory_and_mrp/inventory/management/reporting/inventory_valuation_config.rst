:code-column:
:custom-css: accounting.css
:custom-js: coa-valuation-continental.js,coa-valuation-anglo-saxon.js,misc.js

=================================
Inventory valuation configuration
=================================

Inventory valuation refers to how you value your stock. It’s a very
important aspect of a business as the inventory can be the biggest asset
of a company.

Inventory valuation implies two main choices:

-  The cost method you use to value your goods (standard, fifo, avco)
-  The way you record this value into your accounting books (manually or automatically)

Those two concepts are explained in the sections below.

Costing Methods: Standard, FIFO, AVCO
=====================================

The costing method is defined in the product category. There are three
options available. Each of them is explained in detail below.

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
       - €10
       - 0
       -
       - €0
     * - Receive 8 Products at €10
       - €10
       - 8
       - +8*€10
       - €80
     * - Receive 4 Products at €16
       - €10
       - 12
       - +4*€10
       - €120
     * - Deliver 10 Products
       - €10
       - 2
       - | -10*€10
         |
       - €20
     * - Receive 2 Products at €9
       - €10
       - 4
       - +2*€10
       - €40

  In **Standard Price**, any product will be valued at the cost that you defined
  manually on the product form. Usually, this cost is an estimation based
  on the material and labor needed to obtain the product. This cost must
  be reviewed periodically.

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
       - €0
       - 0
       -
       - €0
     * - Receive 8 Products at €10
       - €10
       - 8
       - +8*€10
       - €80
     * - Receive 4 Products at €16
       - €12
       - 12
       - +4*€16
       - €144
     * - Deliver 10 Products
       - €12
       - 2
       - | -10*€12
         |
       - €24
     * - Receive 2 Products at €6
       - €9
       - 4
       - +2*€6
       - €36

  In **AVCO (Average Cost)**, each product has the same value and this
  value is the average purchase cost of the product. With this costing method, the
  cost of the product is recomputed as each receipt.

  The average cost does not change when products leave the warehouse.

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
       - €0
       - 0
       -
       - €0
     * - Receive 8 Products at €10
       - €10
       - 8
       - +8*€10
       - €80
     * - Receive 4 Products at €16
       - €12
       - 12
       - +4*€16
       - €144
     * - Deliver 10 Products
       - €16
       - 2
       - | -8*€10
         | -2*€16
       - €32
     * - Receive 2 Products at €6
       - €11
       - 4
       - +2*€6
       - €44

  In **FIFO (First In First Out)**, the products are valued at their
  purchase cost. When a product leaves the stock, that’s the “First in,
  first out” rule that applies.

  Pay attention, that this is a financial FIFO. The first value “in”
  is the first value “out”, no matter the storage location, warehouse
  or serial number.

  FIFO is advised if you manage all your workflows into Odoo (Sales,
  Purchases, Inventory). It suits any kind of users.

Inventory Valuation: Manual or Automated
========================================

There are two ways to record your inventory valuation in your accounting
books. As the costing method, this is defined in your product category.
Those two methods are detailed below.

It is important to also note that the accounting entries will depend on
your accounting mode: it can be continental or anglo-saxon. In
continental accounting, the cost of a good is taken into account as soon
as the product is received in stock. In anglo-saxon accounting, the cost
of a good is only recorded as an expense when this good is invoiced to a
final customer. In the tables below, you can easily compare those two
accounting modes.

Usually, based on your country, the correct accounting mode will be
chosen by default. If you want to verify your accounting mode, activate
the :ref:`developer mode <developer-mode>` and open your accounting
settings.

Manual Inventory Valuation
--------------------------

In this case, goods receipts and deliveries won’t have any direct impact
on your accounting books. Periodically, you create a manual journal
entry representing the value of what you have in stock. To know that
value, go in :menuselection:`Inventory --> Reporting --> Inventory Valuation`.

This is the default configuration in Odoo and it works
out-of-the-box. Check following operations and find out how
Odoo is managing the accounting postings.

Continental Accounting
~~~~~~~~~~~~~~~~~~~~~~

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
    * Purchased Goods: defined on the product or on the internal category of related product (Expense Account field)
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
    * Revenues: defined on the product or on the internal category of related product (Income Account field)
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

Create a journal entry to move the stock variation value from your
Profit&Loss section to your assets.

.. h:div:: doc-aside

  .. rst-class:: values-table

  ===================================== ===== ======
  \                                     Debit Credit
  ===================================== ===== ======
  Assets: Inventory                         X
  Expenses: Inventory Variations                   X
  ===================================== ===== ======

  If the stock value decreased, the **Inventory** account is credited
  and the **Inventory Variations** debited.

.. raw:: html

   <hr style="float: none; visibility: hidden; margin: 0;">

Anglo-Saxon Accounting
~~~~~~~~~~~~~~~~~~~~~~

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

Automated Inventory Valuation
-----------------------------

In that case, when a product enters or leaves your stock, an accounting
entry will be automatically created. This means your accounting books
are always up-to-date. This mode is dedicated to expert accountants and
advanced users only. As opposed to periodic valuation, it requires some
extra configuration & testing.

First, you need to define the accounts that will be used for those
accounting entries. This is done on the product category.

Continental Accounting
~~~~~~~~~~~~~~~~~~~~~~

.. h:div:: valuation-chart-continental doc-aside

   .. placeholder

.. raw:: html

   <hr style="float: none; visibility: hidden; margin: 0;">

.. h:div:: doc-aside

   **Configuration:**

   - Accounts Receivable/Payable: defined on the partner (Accounting tab)

   - Deferred Tax Assets/Liabilities: defined on the tax used on the invoice line

   - Revenues/Expenses: defined by default on product's internal category; can be
     also set in product form (Accounting tab) as a replacement value.

   - Inventory Variations: to set as Stock Input/Output Account in product's internal
     category

   - Inventory: to set as Stock Valuation Account in product's internal category

Anglo-Saxon Accounting
~~~~~~~~~~~~~~~~~~~~~~

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
