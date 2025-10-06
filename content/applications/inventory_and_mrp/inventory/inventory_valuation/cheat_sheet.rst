:code-column:
:custom-css: valuation.css
:custom-js: misc.js,valuation-data.js,valuation-journal.js,valuation-accounting.js

=====================
Valuation cheat sheet
=====================

.. rst-class:: full-width


Costing Methods
===============

Odoo supports 3 costing methods configured in accounting's settings and, optionally,
the product's category.

.. rst-class:: alternatives doc-aside

Standard Cost: fixed unit cost, updated manually
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

Average Cost: weighted average of all units
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

FIFO: first in, first out
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


Accounting Methods
==================

There are two accounting practices on how to maintain your accounts:

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
* :green:`Inventory Adjustment` on the Inventory Loss location
  (optional, recommended for Anglo-Saxon accounting)
* :darkblue:`Expense` on the stock account
  (for perpetual Continental accounting only)

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

.. h:div:: accounting-entries doc-aside

   .. placeholder


.. _journal-entries:

Journal Entries Configuration
=============================


.. h:div:: journal-entries doc-aside

    .. placeholder


Reporting
=========

In Inventory
------------

Open :menuselection:`Inventory -- > Reporting --> Stock` to view your current inventory level and
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

To view a list of sales and purchase orders for which accrual entries should be encoded, go to
:menuselection:`Accounting --> Review` and select the relevant menu item (:guilabel:`Invoices not
received`, :guilabel:`Invoices to be issued`, :guilabel:`Prepaid expenses`, or :guilabel:`Deferred
Revenues`).

With Anglo-Saxon perpetual accounting, this will also help to distribute recorded inventory
variations to accounts such as Bills to Receive/:abbr:`GRNI (goods received not invoiced)` or
:abbr:`COGS (cost of goods sold)` as shown in the :ref:`Accounting Entries <accounting-entries>`
and :ref:`Journal Entries Configuration <journal-entries>` sections.

.. h:div:: doc-aside

  .. image:: cheat_sheet/valuation-accounting.png
