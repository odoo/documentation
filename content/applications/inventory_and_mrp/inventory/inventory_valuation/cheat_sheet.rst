:code-column:
:custom-css: cheat-sheet.css,valuation.css
:custom-js: valuation-cheat-sheet.js

=====================
Valuation cheat sheet
=====================

.. rst-class:: full-width

   .. important::
      This documentation is for Odoo 19 or later.
      :ref:`Discover why we changed. <changes-in-19>`

.. _costing-methods:

Costing Methods
===============

Odoo supports 3 costing methods configured in accounting's settings and, optionally, the product's
category.

.. rst-class:: alternatives doc-aside

**Standard Cost:** fixed unit cost, updated manually
  .. list-table::
    :widths: 28 18 18 18 18
    :header-rows: 1
    :stub-columns: 1
    :class: values-table

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
    * - Receive 8 @$10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 @$16
      - $10
      - 12
      - +4×$10
      - $120
    * - Deliver 10
      - $10
      - 2
      - | -10×$10
        |
      - $20
    * - Receive 2 @$9
      - $10
      - 4
      - +2×$10
      - $40

**Average Cost:** weighted average of all units
  .. list-table::
    :widths: 28 18 18 18 18
    :header-rows: 1
    :stub-columns: 1
    :class: values-table

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
    * - Receive 8 @$10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 @$16
      - $12
      - 12
      - +4×$16
      - $144
    * - Deliver 10
      - $12
      - 2
      - | -10×$12
        |
      - $24
    * - Receive 2 @$6
      - $9
      - 4
      - +2×$6
      - $36

**FIFO:** first in, first out
  .. list-table::
    :widths: 28 18 18 18 18
    :header-rows: 1
    :stub-columns: 1
    :class: values-table

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
    * - Receive 8 @$10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 @$16
      - $12
      - 12
      - +4×$16
      - $144
    * - Deliver 10
      - $16
      - 2
      - | -8×$10
        | -2×$16
      - $32
    * - Receive 2 @$6
      - $11
      - 4
      - +2×$6
      - $44


.. rst-class:: alternatives-note

   .. note:: Removal strategies also support :abbr:`LIFO (last in, first out)` and :abbr:`FEFO
      (first expiry, first out)`, but they only impact which product is first picked, not the
      valuation method. For example, you can pick using LIFO, but using average cost for valuation,
      as LIFO is not allowed by :abbr:`IFRS (International Financial Reporting Standards)`.


Inventory vs Accounting
=======================

.. rst-class:: inventory-app-paragraph

   The :doc:`Inventory app </applications/inventory_and_mrp/inventory>` keeps track of the inventory
   value in real time as you **receive and deliver goods**. The reporting menu lets you analyze
   inventory quantities and values by company, location, product, and more.

.. rst-class:: accounting-app-paragraph

   The :doc:`Accounting app </applications/finance/accounting>` updates accounts when you receive
   **invoices or bills**. Even though receipts and invoices differ, it’s not practical for
   accountants to post journal entries for every inventory movement. So, they post a closing entry
   to account for the difference between what has been invoiced and received/delivered. This closing
   process happens usually once a year for SMEs, or once a month for larger companies.

.. role:: good
.. role:: meh
.. role:: bad

.. h:div:: feature-table doc-aside

  +------------------+------------+-----------+
  |                  | Accounting | Inventory |
  +==================+============+===========+
  | Purchase Order   | :meh:`/`   | :meh:`/`  |
  +------------------+------------+-----------+
  | Receipt          | :meh:`/`   | :good:`✓` |
  +------------------+------------+-----------+
  | Vendor Bill      | :good:`✓`  | :meh:`/`  |
  +------------------+------------+-----------+
  | Sales Order      | :meh:`/`   | :meh:`/`  |
  +------------------+------------+-----------+
  | Customer Invoice | :good:`✓`  | :meh:`/`  |
  +------------------+------------+-----------+
  | Delivery         | :meh:`/`   | :good:`✓` |
  +------------------+------------+-----------+
  | Closing Entry    | :good:`✓`  | :meh:`/`  |
  +------------------+------------+-----------+

.. _inventory/cheat_sheet/accounting-methods:

Accounting Methods
==================

There are two accounting practices on how to maintain your accounts, defined in
:menuselection:`Accounting app --> Configuration --> Settings`, under the :guilabel:`Inventory
Valuation` section:

**Periodic:** Post vendor bills as expenses by nature, and update stock valuation in the closing
entry by reducing expenses (stock variation). This is the best practice in Europe.

**Perpetual:** Post vendor bills as assets (stock valuation), report expenses when goods are sold
(cost of goods sold). This is the best practice in countries that follow Anglo-Saxon accounting,
like the USA and India.

.. role:: yellow
.. role:: green
.. role:: blue
.. role:: darkblue
.. role:: purple
.. role:: washed
.. role:: washed-green
  :class: washed green
.. role:: washed-darkblue
  :class: washed darkblue
.. role:: washed-purple
  :class: washed purple

* :purple:`Stock Account` on the product's category
* :yellow:`Stock Variation` on the stock account
* :blue:`Expense/Cost of Goods Sold` on the product/category
* :green:`Inventory Adjustment` on the Inventory Loss location (optional, recommended for
  Anglo-Saxon accounting)
* :darkblue:`Expense` on the stock account (for perpetual Continental accounting only)

.. seealso::
   - :doc:`../../../finance/accounting/get_started/inventory_valuation`: For more detailed
     instructions on the accounting aspects of configuring inventory valuation.
   - :doc:`operations_valuation`: For more information about the impact of stock movements and
     adjustments on inventory valuation.

.. h:div:: doc-aside

  .. list-table::
    :stub-columns: 1
    :header-rows: 1
    :class: config-table

    * -
      - EU Periodic
      - EU Perpetual
      - US Periodic
      - US Perpetual
    * - ADJUSTMENT
      -
      - :purple:`Stock`
      -
      - :purple:`Stock`
    * -
      -
      - :green:`LOSS`
      -
      - :green:`Shrinkage`
    * -
      -
      -
      -
      -
    * - BILL
      - :blue:`Expense`
      - :purple:`Stock`
      - :blue:`COGS`
      - :purple:`Stock`
    * -
      - :washed:`Payable`
      - :washed:`Payable`
      - :washed:`Payable`
      - :washed:`Payable`
    * -
      -
      -
      -
      -
    * - INVOICE
      -
      - :blue:`Expense`
      -
      - :blue:`COGS`
    * -
      -
      - :purple:`Stock`
      -
      - :purple:`Stock`
    * -
      - :washed:`Income`
      - :washed:`Income`
      - :washed:`Income`
      - :washed:`Income`
    * -
      - :washed:`Receivable`
      - :washed:`Receivable`
      - :washed:`Receivable`
      - :washed:`Receivable`
    * -
      -
      -
      -
      -
    * - Closing
      - :purple:`Stock`
      - :washed-purple:`Stock`
      - :purple:`Stock`
      - :washed-purple:`Stock`
    * - [1]
      - :yellow:`Variation`
      - :washed-darkblue:`Expense`
      - :yellow:`Variation`
      - :yellow:`Variation`
    * - [2]
      - :washed-green:`LOSS`
      -
      - :washed-green:`Shrinkage`
      -
    * - [3]
      -
      - :yellow:`Variation`
      -
      -
    * -
      -
      - :darkblue:`Expense`
      -
      -

  1. Inventory valuation - Accounting valuation
  2. Inventory valuation lost,
     only if an account is set on the loss location
  3. Accounting valuation end of period -
     Valuation beginning of period


.. _accounting-entries:

Accounting Entries
==================

.. h:div:: valuation-controls accounting-controls

   .. rst-class:: control-heading

   Choose a standard:

   .. rst-class:: standard-continental

   Continental (Expenses = Purchase Expenses)

   .. rst-class:: standard-anglo-saxon

   Anglo-Saxon (Expenses = Cost of Goods Sold)

   .. rst-class:: control-heading

   Choose an accounting method:

   .. rst-class:: method-periodic

   Periodic: focuses on expenses by nature

   .. rst-class:: method-perpetual

   Perpetual: focuses on inventory value

   .. rst-class:: control-heading

   Activate operations to see the impact:

   .. rst-class:: operation-initial-inventory

   Initial Inventory (Goods for Resale $50)

   .. rst-class:: operation-supplier-reception

   Supplier Goods Reception (PO $50, Bill $50)

   .. rst-class:: operation-supplier-bill

   Supplier Bill (PO $50, Bill $50)

   .. rst-class:: operation-supplier-reception-extra

   Supplier Goods Reception (PO $48, Bill $50)

   .. rst-class:: operation-supplier-bill-extra

   Supplier Bill (PO $48, Bill $50)

   .. rst-class:: operation-customer-shipping

   Customer Shipping (SO $100, Invoice $100, Good Value $50)

   .. rst-class:: operation-customer-invoice

   Customer Invoice (SO $100, Invoice $100, Good Value $50)

   .. rst-class:: operation-manufacturing-order

   Manufacturing Order (Finished Product at $52, Component at $50)

   .. rst-class:: operation-inventory-loss

   Inventory Loss (Scrap $30)

   .. rst-class:: control-group

   Closing

   .. rst-class:: operation-unreceived

   Bill To Receive

   .. rst-class:: operation-uninvoiced

   Invoices To Be Issued

   .. rst-class:: operation-prepaid

   Billed Not Received

   .. rst-class:: operation-deferred

   Invoiced Not Delivered

   .. rst-class:: operation-closing

   Inventory Valuation


.. h:div:: accounting-entries chart-of-accounts doc-aside

   .. list-table::
      :header-rows: 1
      :widths: auto
      :class: table-sm values-table valuation-chart chart-continental

      * - ..
        - Debit
        - Credit
        - Balance
      * - .. rst-class:: account-1 category

          1 Equity and Liabilities
        -
        -
        -
      * - .. rst-class:: account-2 category

          2 Fixed Assets
        -
        -
        -
      * - .. rst-class:: account-3 category

          3 Stock (Current Assets)
        -
        -
        -
      * - .. rst-class:: account-300000 item

          300000 Inventory Raw Materials
        -
        -
        -
      * - .. rst-class:: account-320000 item

          320000 Work in Progress
        -
        -
        -
      * - .. rst-class:: account-330000 item

          330000 Inventory Finished Goods
        -
        -
        -
      * - .. rst-class:: account-340000 item

          340000 Inventory Goods Purchase for Resale
        -
        -
        -
      * - .. rst-class:: account-4 category

          4 Receivables and Payables
        -
        -
        -
      * - .. rst-class:: account-400000 item

          400000 Customers
        -
        -
        -
      * - .. rst-class:: account-411000 item

          411000 VAT Recoverable
        -
        -
        -
      * - .. rst-class:: account-414000 item

          414000 Income Receivable
        -
        -
        -
      * - .. rst-class:: account-440000 item

          440000 Suppliers
        -
        -
        -
      * - .. rst-class:: account-444000 item

          444000 Invoices to Be Received
        -
        -
        -
      * - .. rst-class:: account-451000 item

          451000 VAT Payable
        -
        -
        -
      * - .. rst-class:: account-490000 item

          490000 Deferred Charges
        -
        -
        -
      * - .. rst-class:: account-493000 item

          493000 Deferred Income
        -
        -
        -
      * - .. rst-class:: account-5 category

          5 Financial Accounts and Cash
        -
        -
        -
      * - .. rst-class:: account-6 category

          6 Expenses
        -
        -
        -
      * - .. rst-class:: account-600000 item

          600000 Raw Materials
        -
        -
        -
      * - .. rst-class:: account-600200 item

          600200 Cost of Finished Goods
        -
        -
        -
      * - .. rst-class:: account-604000 item

          604000 Goods for Resale
        -
        -
        -
      * - .. rst-class:: account-609000 item

          609000 Decrease (Increase) in Stocks of Raw Materials
        -
        -
        -
      * - .. rst-class:: account-609400 item

          609400 Decrease (Increase) in Stocks of Goods Purchased for Resale
        -
        -
        -
      * - .. rst-class:: account-7 category

          7 Revenues
        -
        -
        -
      * - .. rst-class:: account-700000 item

          700000 Sales
        -
        -
        -
      * - .. rst-class:: account-712000 item

          712000 Increase (Decrease) in Stocks of Work in Progress
        -
        -
        -
      * - .. rst-class:: account-713000 item

          713000 Increase (Decrease) in Stocks of Finished Goods
        -
        -
        -
      * - .. rst-class:: account-0 category

          General Balance for Inventory Initial Value
        -
        -
        -

   .. list-table::
      :header-rows: 1
      :widths: auto
      :class: table-sm values-table valuation-chart chart-anglo-saxon

      * - ..
        - Debit
        - Credit
        - Balance
      * - .. rst-class:: account-1 category

          1 Assets
        -
        -
        -
      * - .. rst-class:: account-101401 item

          101401 Bank
        -
        -
        -
      * - .. rst-class:: account-110100 item

          110100 Inventory
        -
        -
        -
      * - .. rst-class:: account-110101 item

          110101 Raw Materials Inventory
        -
        -
        -
      * - .. rst-class:: account-110102 item

          110102 Manufactured Products Inventory
        -
        -
        -
      * - .. rst-class:: account-110400 item

          110400 Cost of Production
        -
        -
        -
      * - .. rst-class:: account-110600 item

          110600 Inventory Variations
        -
        -
        -
      * - .. rst-class:: account-121000 item

          121000 Accounts Receivable
        -
        -
        -
      * - .. rst-class:: account-121200 item

          121200 Uninvoiced Receivable
        -
        -
        -
      * - .. rst-class:: account-128000 item

          128000 Prepaid Expenses
        -
        -
        -
      * - .. rst-class:: account-131000 item

          131000 Tax Paid
        -
        -
        -
      * - .. rst-class:: account-2 category

          2 Liabilities
        -
        -
        -
      * - .. rst-class:: account-211000 item

          211000 Accounts Payable
        -
        -
        -
      * - .. rst-class:: account-211100 item

          211100 Bills to Receive/Goods Received Not Invoiced
        -
        -
        -
      * - .. rst-class:: account-212000 item

          212000 Deferred Revenue
        -
        -
        -
      * - .. rst-class:: account-251000 item

          251000 Tax Received
        -
        -
        -
      * - .. rst-class:: account-3 category

          3 Equity
        -
        -
        -
      * - .. rst-class:: account-303000 item

          303000 Common Stock
        -
        -
        -
      * - .. rst-class:: account-4 category

          4 Revenue
        -
        -
        -
      * - .. rst-class:: account-400000 item

          400000 Product Sales
        -
        -
        -
      * - .. rst-class:: account-5 category

          5 Expenses
        -
        -
        -
      * - .. rst-class:: account-500000 item

          500000 Cost of Goods Sold
        -
        -
        -
      * - .. rst-class:: account-530000 item

          530000 Price Difference
        -
        -
        -
      * - .. rst-class:: account-609100 item

          609100 Inventory Loss Expense
        -
        -
        -
      * - .. rst-class:: account-609000 item

          609000 Miscellaneous Expenses
        -
        -
        -
      * - .. rst-class:: account-0 category

          General Balance for Inventory Initial Value
        -
        -
        -


.. _journal-entries:

Journal Entries Configuration
=============================


.. h:div:: valuation-controls journal-controls

   .. rst-class:: control-heading

   Choose a standard:

   .. rst-class:: standard-continental

   Continental (Expenses = Purchase Expenses)

   .. rst-class:: standard-anglo-saxon

   Anglo-Saxon (Expenses = Cost of Goods Sold)

   .. rst-class:: control-heading

   Choose an accounting method:

   .. rst-class:: method-periodic

   Periodic: focuses on expenses by nature

   .. rst-class:: method-perpetual

   Perpetual: focuses on inventory value

   .. rst-class:: control-heading

   Activate operations to see the impact:

   .. rst-class:: operation-initial-inventory

   Initial Inventory (Goods for Resale $50)

   .. rst-class:: operation-supplier-reception

   Supplier Goods Reception (PO $50, Bill $50)

   .. rst-class:: operation-supplier-bill

   Supplier Bill (PO $50, Bill $50)

   .. rst-class:: operation-supplier-reception-extra

   Supplier Goods Reception (PO $48, Bill $50)

   .. rst-class:: operation-supplier-bill-extra

   Supplier Bill (PO $48, Bill $50)

   .. rst-class:: operation-customer-shipping

   Customer Shipping (SO $100, Invoice $100, Good Value $50)

   .. rst-class:: operation-customer-invoice

   Customer Invoice (SO $100, Invoice $100, Good Value $50)

   .. rst-class:: operation-manufacturing-order

   Manufacturing Order (Finished Product at $52, Component at $50)

   .. rst-class:: operation-inventory-loss

   Inventory Loss (Scrap $30)

   .. rst-class:: control-group

   Closing

   .. rst-class:: operation-unreceived

   Bill To Receive

   .. rst-class:: operation-uninvoiced

   Invoices To Be Issued

   .. rst-class:: operation-prepaid

   Billed Not Received

   .. rst-class:: operation-deferred

   Invoiced Not Delivered

   .. rst-class:: operation-closing

   Inventory Valuation


.. h:div:: journal-entries doc-aside

   .. h:div:: entries-panel entry-initial-inventory mode-continental-periodic mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           - 50
           -
         * - General Balance for Inventory Initial Value
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

   .. h:div:: entries-panel entry-initial-inventory mode-anglo-saxon-periodic mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           - 50
           -
         * - General Balance for Inventory Initial Value
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

   .. h:div:: entries-panel entry-supplier-reception mode-continental-periodic mode-anglo-saxon-periodic

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a periodic inventory valuation, goods' receipts are not directly posted in the
         accounting.

         The inventory value is updated when entries are generated from Inventory Valuation report
         at closing.

   .. h:div:: entries-panel entry-supplier-reception mode-continental-perpetual mode-anglo-saxon-perpetual

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a perpetual inventory valuation, goods receipts are not directly posted in the
         accounting.

         The inventory value is updated:

         * when the invoice/bill is posted
         * when entries are generated from Inventory Valuation report at closing

   .. h:div:: entries-panel entry-supplier-bill mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 604000 Goods for Resale
           - 50
           -
         * - 440000 Suppliers
           -
           - 54.5
         * - 411000 VAT Recoverable
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-supplier-bill mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           - 50
           -
         * - 440000 Suppliers
           -
           - 54.5
         * - 411000 VAT Recoverable
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Account Payable Account: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

   .. h:div:: entries-panel entry-supplier-bill mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 500000 Cost of Goods Sold
           - 50
           -
         * - 211000 Accounts Payable
           -
           - 54.5
         * - 131000 Tax Paid
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-supplier-bill mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           - 50
           -
         * - 211000 Accounts Payable
           -
           - 54.5
         * - 131000 Tax Paid
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-supplier-reception-extra mode-continental-periodic mode-anglo-saxon-periodic

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a periodic inventory valuation, goods' receipts are not directly posted in the
         accounting.

         The inventory value is updated when entries are generated from Inventory Valuation report
         at closing.

   .. h:div:: entries-panel entry-supplier-reception-extra mode-continental-perpetual mode-anglo-saxon-perpetual

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a perpetual inventory valuation, goods receipts are not directly posted in the
         accounting.

         The inventory value is updated:

         * when the invoice/bill is posted
         * when entries are generated from Inventory Valuation report at closing

   .. h:div:: entries-panel entry-supplier-bill-extra mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 604000 Goods for Resale
           - 50
           -
         * - 440000 Suppliers
           -
           - 54.5
         * - 411000 VAT Recoverable
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-supplier-bill-extra mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           - 50
           -
         * - 440000 Suppliers
           -
           - 54.5
         * - 411000 VAT Recoverable
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Account Payable Account: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

   .. h:div:: entries-panel entry-supplier-bill-extra mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 500000 Cost of Goods Sold
           - 50
           -
         * - 211000 Accounts Payable
           -
           - 54.5
         * - 131000 Tax Paid
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-supplier-bill-extra mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           - 50
           -
         * - 211000 Accounts Payable
           -
           - 54.5
         * - 131000 Tax Paid
           - 4.5
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Payable: defined on the supplier contact

         Tax Account: defined on the account from the Purchase Taxes set on the product

         Expense Account: defined on the product/product category

   .. h:div:: entries-panel entry-customer-shipping mode-continental-periodic mode-anglo-saxon-periodic

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a periodic inventory valuation, goods shipments are not directly posted in the
         accounting.

         The inventory value is updated when entries are generated from Inventory Valuation report
         at closing.

   .. h:div:: entries-panel entry-customer-shipping mode-continental-perpetual mode-anglo-saxon-perpetual

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a perpetual inventory valuation, goods shipments are not directly posted in the
         accounting.

         The inventory value is updated:

         * when the invoice/bill is posted
         * when entries are generated from Inventory Valuation report at closing

   .. h:div:: entries-panel entry-customer-invoice mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 400000 Customers
           - 109
           -
         * - 451000 VAT Payable
           -
           - 9
         * - 700000 Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Receivable Account: defined on the customer contact

         Tax Account: defined on the account from the Sales Taxes set on the product

         Income Account: defined on the product/product category

   .. h:div:: entries-panel entry-customer-invoice mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           -
           - 50
         * - 604000 Goods for Resale
           - 50
           -
         * - 400000 Customers
           - 109
           -
         * - 451000 VAT Payable
           -
           - 9
         * - 700000 Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Expense/COGS Account: defined on the product/product category

         Account Receivable Account: defined on the customer contact

         Tax Account: defined on the account from the Sales Taxes set on the product

         Income Account: defined on the product/product category

   .. h:div:: entries-panel entry-customer-invoice mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 121000 Accounts Receivable
           - 109
           -
         * - 251000 Tax Received
           -
           - 9
         * - 400000 Product Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Account Receivable Account: defined on the customer contact

         Tax Account: defined on the account from the Sales Taxes set on the product

         Income Account: defined on the product/product category

   .. h:div:: entries-panel entry-customer-invoice mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           -
           - 50
         * - 500000 Cost of Goods Sold
           - 50
           -
         * - 121000 Accounts Receivable
           - 109
           -
         * - 251000 Tax Received
           -
           - 9
         * - 400000 Product Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Expense/COGS Account: defined on the product/product category

         Account Receivable Account: defined on the customer contact

         Tax Account: defined on the account from the Sales Taxes set on the product

         Income Account: defined on the product/product category

   .. h:div:: entries-panel entry-manufacturing-order mode-continental-periodic mode-anglo-saxon-periodic

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a periodic inventory valuation manufacturing orders are not directly posted in the
         accounting.

         The inventory value is updated when entries are generated from Inventory Valuation report
         at closing.

   .. h:div:: entries-panel entry-manufacturing-order mode-continental-perpetual

      .. h:div:: entries-listing

         .. rubric:: Explanation

         No 'Cost of Production' account is set on the production location, therefore variations in
         inventories of manufactured goods and components will be recorded at closing.

   .. h:div:: entries-panel entry-manufacturing-order mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110102 Manufactured Products Inventory
           - 52
           -
         * - 110400 Cost of Production
           -
           - 52
         * - 110101 Raw Materials Inventory
           -
           - 50
         * - 110400 Cost of Production
           - 50
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account for manufactured product: defined on the product category

         Stock Account for component: defined on the product category

         Cost of Production Account: defined on the production location

   .. h:div:: entries-panel entry-inventory-loss mode-continental-periodic mode-anglo-saxon-periodic

      .. h:div:: entries-listing

         .. rubric:: Explanation

         In a periodic inventory valuation, inventory adjustments are not directly posted in the
         accounting.

         The inventory value is updated when entries are generated from Inventory Valuation report
         at closing.

   .. h:div:: entries-panel entry-inventory-loss mode-continental-perpetual

      .. h:div:: entries-listing

         .. rubric:: Explanation

         No 'Inventory Loss' account is set on the inventory loss location, therefore variations in
         inventories coming from inventory adjustments will be recorded at closing.

   .. h:div:: entries-panel entry-inventory-loss mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           -
           - 30
         * - 609100 Inventory Loss Expense
           - 30
           -

      .. h:div:: entries-listing

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Inventory Adjustment Account: defined on the inventory loss location

   .. h:div:: entries-panel entry-unreceived mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 444000 Invoices to Be Received
           -
           - 50
         * - 604000 Goods for Resale
           - 50
           -
         * - 444000 Invoices to Be Received
           -
           - 48
         * - 604000 Goods for Resale
           - 48
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that expenses are recognized in the period in which they are incurred, regardless
         of when cash is paid.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         GRNI Account: defined when generating accrual entries from 'Bill To Receive'

   .. h:div:: entries-panel entry-unreceived mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 444000 Invoices to Be Received
           -
           - 50
         * - 604000 Goods for Resale
           - 50
           -
         * - 444000 Invoices to Be Received
           -
           - 48
         * - 604000 Goods for Resale
           - 48
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that expenses are recognized in the period in which they are incurred, regardless
         of when cash is paid.

         They are reverted after the period we are closing.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         GRNI Account: defined when generating accrual entries from 'Bill To Receive'

   .. h:div:: entries-panel entry-unreceived mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 211100 Bills to Receive/Goods Received Not Invoiced
           -
           - 50
         * - 500000 Cost of Goods Sold
           - 50
           -
         * - 211100 Bills to Receive/Goods Received Not Invoiced
           -
           - 48
         * - 500000 Cost of Goods Sold
           - 48
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that expenses are recognized in the period in which they are incurred, regardless
         of when cash is paid.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         GRNI Account: defined when generating accrual entries from 'Bill To Receive'

   .. h:div:: entries-panel entry-unreceived mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 211100 Bills to Receive/Goods Received Not Invoiced
           -
           - 50
         * - 110600 Inventory Variations
           - 50
           -
         * - 211100 Bills to Receive/Goods Received Not Invoiced
           -
           - 48
         * - 110600 Inventory Variations
           - 48
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Accrual entries are adjusting journal entries made at the end of an accounting period to
         ensure that revenues/expenses are recognized in the period in which they are
         earned/incurred, regardless of when cash is received / paid.

         They are reverted after the period we are closing.

         From a stock point of view, it also enables us to specify a part of the origin of stock
         variations (between Accounting Stock and Inventory Stock) recorded from the Inventory
         Valuation report.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet

         .. rubric:: Configuration

         Inventory Variation Account: defined on the used Stock Account for the product category

         GRNI Account: defined when generating accrual entries from 'Bill To Receive'

   .. h:div:: entries-panel entry-uninvoiced mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 414000 Income Receivable
           - 100
           -
         * - 700000 Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that revenues are recognized in the period in which they are earned, regardless
         of when cash is received.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
         yet

         .. rubric:: Configuration

         Revenue Account: defined on the product/product category

         Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices To Be
         Issued'

   .. h:div:: entries-panel entry-uninvoiced mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 414000 Income Receivable
           - 100
           -
         * - 700000 Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that revenues are recognized in the period in which they are earned, regardless
         of when cash is received.

         They are reverted after the period we are closing.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
         yet

         .. rubric:: Configuration

         Revenue Account: defined on the product/product category

         Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices To Be
         Issued'

   .. h:div:: entries-panel entry-uninvoiced mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 121200 Uninvoiced Receivable
           - 100
           -
         * - 400000 Product Sales
           -
           - 100

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that revenues are recognized in the period in which they are earned, regardless
         of when cash is received.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
         yet

         .. rubric:: Configuration

         Revenue Account: defined on the product/product category

         Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices To Be
         Issued'

   .. h:div:: entries-panel entry-uninvoiced mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 121200 Uninvoiced Receivable
           - 100
           -
         * - 400000 Product Sales
           -
           - 100
         * - 110600 Inventory Variations
           -
           - 50
         * - 500000 Cost of Goods Sold
           - 50
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         These accrual entries are adjusting journal entries made at the end of an accounting period
         to ensure that revenues/expenses are recognized in the period in which they are
         earned/incurred, regardless of when cash is received/paid.

         From a stock point of view, it also enables us to specify a part of the origin of stock
         variations (between Accounting Stock and Inventory Stock) recorded from the Inventory
         Valuation report.

         They are reverted after the period we are closing.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
         yet

         .. rubric:: Configuration

         Inventory Variation Account: defined on the used Stock Account for the product category

         Uninvoiced Receivable Account: defined when generating accrual entries from 'Invoices To Be
         Issued'

         Revenue Account: defined on the product/product category

         Expense/COGS Account: defined on the product/product category

   .. h:div:: entries-panel entry-prepaid mode-continental-periodic mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 490000 Deferred Charges
           - 50
           -
         * - 604000 Goods for Resale
           -
           - 50
         * - 490000 Deferred Charges
           - 50
           -
         * - 604000 Goods for Resale
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Billed Not Received are journal entries made during closing when a supplier bill is
         received before goods or services are received, so the amount is recorded as an asset until
         the expense is recognized.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is not done but the bill is received
         2) Supplier Goods Reception (PO $48, Bill $50) is not done but the bill is received

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         Prepaid Expense Account: defined when generating entries from 'Billed Not Received'

   .. h:div:: entries-panel entry-prepaid mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 128000 Prepaid Expenses
           - 50
           -
         * - 500000 Cost of Goods Sold
           -
           - 50
         * - 128000 Prepaid Expenses
           - 50
           -
         * - 500000 Cost of Goods Sold
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Billed Not Received are journal entries made during closing when a supplier bill is
         received before goods or services are received, so the amount is recorded as an asset until
         the expense is recognized.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is not done but the bill is received
         2) Supplier Goods Reception (PO $48, Bill $50) is not done but the bill is received

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         Prepaid Expense Account: defined when generating entries from 'Billed Not Received'

   .. h:div:: entries-panel entry-prepaid mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 128000 Prepaid Expenses
           - 50
           -
         * - 110600 Inventory Variations
           -
           - 50
         * - 128000 Prepaid Expenses
           - 50
           -
         * - 110600 Inventory Variations
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Billed Not Received are journal entries made during closing when a supplier bill is
         received before goods or services are received, so the amount is recorded as an asset until
         the expense is recognized.

         From a stock point of view, it also enables us to specify a part of the origin of stock
         variations (between Accounting Stock and Inventory Stock) recorded from the Inventory
         Valuation report.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is not done but the bill is received
         2) Supplier Goods Reception (PO $48, Bill $50) is not done but the bill is received

         .. rubric:: Configuration

         Inventory Variation Account: defined on the used Stock Account for the product category

         Prepaid Expense Account: defined when generating entries from 'Billed Not Received'

   .. h:div:: entries-panel entry-deferred mode-continental-periodic mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 493000 Deferred Income
           -
           - 100
         * - 700000 Sales
           - 100
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Invoiced Not Delivered are journal entries made during closing when an invoice has been
         issued but goods or services are not delivered yet, so the amount has to be recorded as a
         liability until the revenue is earned.

         They are reverted after the period we are closing.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is not done but the invoice is
         sent

         .. rubric:: Configuration

         Revenue Account: defined on the product/product category

         Deferred Revenue Account: defined when generating accrual entries from 'Invoiced Not
         Delivered'

   .. h:div:: entries-panel entry-deferred mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 212000 Deferred Revenue
           -
           - 100
         * - 400000 Product Sales
           - 100
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Invoiced Not Delivered are journal entries made during closing when an invoice has been
         issued but goods or services are not delivered yet, so the amount has to be recorded as a
         liability until the revenue is earned.

         They are reverted after the period we are closing.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is not done but the invoice is
         sent

         .. rubric:: Configuration

         Revenue Account: defined on the product/product category

         Deferred Revenue Account: defined when generating accrual entries from 'Invoiced Not
         Delivered'

   .. h:div:: entries-panel entry-deferred mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 212000 Deferred Revenue
           -
           - 100
         * - 400000 Product Sales
           - 100
           -
         * - 110600 Inventory Variations
           - 50
           -
         * - 500000 Cost of Goods Sold
           -
           - 50

      .. h:div:: entries-listing

         .. rubric:: Explanation

         Invoiced Not Delivered are journal entries made during closing when an invoice has been
         issued but goods or services are not delivered yet, so the amount has to be recorded as a
         liability until the revenue is earned.

         From a stock point of view, it also enables us to specify a part of the origin of stock
         variations (between Accounting Stock and Inventory Stock) recorded from the Inventory
         Valuation report.

         They are reverted after the period we are closing.

         Related operation:

         Customer Shipping (SO $100, Invoice $100, Good Value $50) is not done but the invoice is
         sent

         .. rubric:: Configuration

         Inventory Variation Account: defined on the used Stock Account for the product category

         Deferred Revenue Account: defined when generating accrual entries from 'Invoiced Not
         Delivered'

         Revenue Account: defined on the product/product category

         Expense/COGS Account : defined on the product/product category

   .. h:div:: entries-panel entry-closing mode-continental-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           - 20
           -
         * - 609400 Decrease (Increase) in Stocks of Goods Purchased for Resale
           -
           - 20
         * - 330000 Inventory Finished Goods
           - 52
           -
         * - 300000 Inventory Raw Materials
           -
           - 50
         * - 713000 Increase (Decrease) in Stocks of Finished Goods
           -
           - 52
         * - 609000 Decrease (Increase) in Stocks of Raw Materials
           - 50
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         At closing, Inventory Valuation must be updated to reflect reality. This will be done by
         generating entries from the Inventory Valuation report. This will recognize value coming
         from operations such as the following ones:

         1) Supplier Goods Reception (PO $50, Bill $50)
         2) Supplier Goods Reception (PO $48, Bill $50)
         3) Customer Shipping (SO $100, Invoice $100, Good Value $50)
         4) Inventory Loss (Scrap $30)
         5) Manufacturing Order (Finished Product at $52, Component at $50)

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Inventory Variation Account: defined on the used Stock Account

   .. h:div:: entries-panel entry-closing mode-continental-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 340000 Inventory Goods Purchase for Resale
           - 18
           -
         * - 604000 Goods for Resale
           -
           - 18
         * - 330000 Inventory Finished Goods
           - 52
           -
         * - 600200 Cost of Finished Goods
           -
           - 52
         * - 300000 Inventory Raw Materials
           -
           - 50
         * - 600000 Raw Materials
           - 50
           -
         * - 609400 Decrease (Increase) in Stocks of Goods Purchased for Resale
           -
           - 18
         * - 604000 Goods for Resale
           - 18
           -
         * - 600000 Raw Materials
           -
           - 50
         * - 609000 Decrease (Increase) in Stocks of Raw Materials
           - 50
           -
         * - 600200 Cost of Finished Goods
           - 52
           -
         * - 713000 Increase (Decrease) in Stocks of Finished Goods
           -
           - 52

      .. h:div:: entries-listing

         .. rubric:: Explanation

         At closing Accounting Stock and Inventory Stock must have the same value.

         A difference could come from cases such as the ones listed below and this will be corrected
         thanks to the Inventory Valuation report closing entry.

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet
         3) Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
            yet
         4) Inventory Loss (Scrap $30)
         5) Manufacturing Order (Finished Product at $52, Component at $50)

         At closing, an adjusting entry is created to ensure that the values are correctly recorded
         in the variation and expenses accounts according to continental accounting logic. Indeed,
         even though expenses are recorded according to the COGS logic of Anglo-Saxon accounting
         during the period, at closing the expenses recorded should represent what was actually
         purchased during this period.

         The variation is known thanks to the calculation (Stock Account y - Stock Account y-1) for
         each of the following categories:

         a. Purchased good for resale
         b. Component
         c. Finished product

         .. rubric:: Configuration

         Expense Account: defined on the product/product category

         Stock Account: defined on the product category

         Inventory Variation Account: defined on the used Stock Account

         Expense Account for adjusting entry: defined on the used Stock Account

   .. h:div:: entries-panel entry-closing mode-anglo-saxon-periodic

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           - 50
           -
         * - 500000 Cost of Goods Sold
           -
           - 50
         * - 110100 Inventory
           -
           - 30
         * - 609100 Inventory Loss Expense
           - 30
           -
         * - 110102 Manufactured Products Inventory
           - 52
           -
         * - 110400 Cost of Production
           -
           - 52
         * - 110101 Raw Materials Inventory
           -
           - 50
         * - 110400 Cost of Production
           - 50
           -

      .. h:div:: entries-listing

         .. rubric:: Explanation

         At closing, Inventory Valuation must be updated to reflect reality. This will be done by
         generating entries from the Inventory Valuation report. This will recognize value coming
         from operations such as the following ones:

         1) Supplier Goods Reception (PO $50, Bill $50)
         2) Supplier Goods Reception (PO $48, Bill $50)
         3) Customer Shipping (SO $100, Invoice $100, Good Value $50)
         4) Inventory Loss (Scrap $30)
         5) Manufacturing Order (Finished Product at $52, Component at $50)

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Inventory Variation Account: defined on the used Stock Account

         Inventory Adjustment Account: defined on the Inventory Loss location

         Cost of Production Account: defined on the Production location

   .. h:div:: entries-panel entry-closing mode-anglo-saxon-perpetual

      .. list-table::
         :header-rows: 1
         :widths: auto
         :class: table-sm d-c-table

         * - Account
           - Debit
           - Credit
         * - 110100 Inventory
           - 48
           -
         * - 110600 Inventory Variations
           -
           - 48

      .. h:div:: entries-listing

         .. rubric:: Explanation

         At closing, Accounting Stock and Inventory Stock must have the same value.

         A difference could come from cases such as the ones listed below and this will be corrected
         thanks to the Inventory Valuation report closing entry.

         Related operations:

         1) Supplier Goods Reception (PO $50, Bill $50) is done but no bill is received yet
         2) Supplier Goods Reception (PO $48, Bill $50) is done but no bill is received yet
         3) Customer Shipping (SO $100, Invoice $100, Good Value $50) is done but no invoice is sent
            yet

         .. rubric:: Configuration

         Stock Account: defined on the product category

         Inventory Variation Account: defined on the used Stock Account


Reporting
=========

In Inventory
------------

Open :menuselection:`Inventory --> Reporting --> Stock` to view your current inventory level and
valuation for each product, or to review historical data as of a previous date.

.. h:div:: doc-aside

  .. image:: cheat_sheet/valuation-stock.png


Unit cost
~~~~~~~~~

To check a product's existing unit price updates and their origins, click on the product's
:guilabel:`Unit Cost`. In :abbr:`AVCO (average cost)` this allows you to understand how the
currently used value was calculated.

.. h:div:: doc-aside

  .. image:: cheat_sheet/unit-cost.png


Total value
~~~~~~~~~~~

To see all incoming quantities for which you still have a remaining quantity and the value used for
their valuation, click on a product's :guilabel:`Total Value`.

- In AVCO or standard cost, the used value is always the current average unit cost.
- In FIFO, remaining units from each previous incoming move retain their own individual valuation.

In FIFO or AVCO, remaining quantities from a previous incoming move can have their value adjusted if
necessary: Select the incoming moves to be adjusted, click :icon:`fa-cog` :guilabel:`Actions`, and
then click :guilabel:`Adjust Valuation`. Enter the new :guilabel:`Value` and, optionally, a
:guilabel:`Description`.

.. h:div:: doc-aside

  .. image:: cheat_sheet/total-value.png


In Accounting
-------------

To view the difference between the accounting stock value and the current inventory value recorded
thanks to the incoming moves with a remaining quantity, go to :menuselection:`Accounting --> Review
--> Inventory Valuation`.

To generate a new accounting entry to review and post, click :guilabel:`Generate Entry`.

.. h:div:: doc-aside

  .. image:: cheat_sheet/valuation-accounting.png

To view a list of sales and purchase orders for which accrual entries should be encoded, go to
:menuselection:`Accounting --> Review` and select the relevant menu item (:guilabel:`Bill To
Receive`, :guilabel:`Invoices To Be Issued`, :guilabel:`Billed Not Received` and :guilabel:`Invoiced
Not Delivered`). Select the desired lines and click :guilabel:`Create Accrual Entries`.

With Anglo-Saxon perpetual accounting, this will also help to distribute recorded inventory
variations to accounts such as Bills to Receive/:abbr:`GRNI (goods received not invoiced)` or
:abbr:`COGS (cost of goods sold)` as shown in the :ref:`Accounting Entries <accounting-entries>` and
:ref:`Journal Entries Configuration <journal-entries>` sections.

.. h:div:: doc-aside

  .. image:: cheat_sheet/accrual.png
  .. image:: cheat_sheet/accrual1.png
  .. image:: cheat_sheet/accrual2.png
  .. image:: cheat_sheet/accrual3.png


.. _changes-in-19:

Changes in Odoo 19
==================

Before Odoo 19, the Perpetual accounting method was implemented by posting real-time accounting
entries at each stock movement. That created a lot of journal items in accounting, which was an
issue for performance, general ledger clarity and auditability.

Since Odoo 19, the Perpetual method impacts the stock valuation account at the invoice level. The
closing entry is then used to manage bills to receive, invoices to issue, deferred revenues, prepaid
expenses, and other gaps between inventory values and accounting ones.

.. h:div:: feature-table doc-aside

  +-----------------------+--------------------------------+--------------------------------+
  |                       | Odoo 18                        | Odoo 19                        |
  +=======================+================================+================================+
  | Periodic Continental  | :meh:`Manual closing`          | :good:`Automated closing`      |
  +-----------------------+--------------------------------+--------------------------------+
  | Periodic Anglo-Saxon  | :bad:`Not supported`           | :good:`Fully supported`        |
  +-----------------------+--------------------------------+--------------------------------+
  | Perpetual Continental | :meh:`Manual closing`          | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Perpetual Anglo-Saxon | :meh:`Manual closing`          | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Accounting valuation  | :meh:`Requires inventory`      | :good:`Accounting only`        |
  +-----------------------+--------------------------------+--------------------------------+
  | Perpetual Entries     | :good:`Invoices + every moves` | :good:`Invoices + one closing` |
  +-----------------------+--------------------------------+--------------------------------+
  | Invoices to issue     | :bad:`✗`                       | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Prepaid expenses      | :bad:`✗`                       | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Bills to receive      | :bad:`✗`                       | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Deferred revenues     | :bad:`✗`                       | :good:`✓`                      |
  +-----------------------+--------------------------------+--------------------------------+
  | Performance           | :bad:`Slower`                  | :good:`Faster`                 |
  +-----------------------+--------------------------------+--------------------------------+
  | General ledger        | :good:`More journal entries`   | :good:`Fewer journal entries`  |
  +-----------------------+--------------------------------+--------------------------------+
