:code-column:
:custom-css: valuation.css
:custom-js: misc.js,valuation-data.js,valuation-journal.js,valuation-accounting.js

===================
Inventory valuation
===================

.. role:: good
.. role:: meh
.. role:: bad

.. important::
   This documentation is for Odoo 19 or later.
   :ref:`Discover why we changed. <changes-in-19>`


Costing Methods
===============

Odoo supports 3 costing methods configured in accounting's settings and, optionally,
the product's category.

.. rst-class:: alternatives doc-aside

Standard Cost: fixed unit cost, updated manually
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
    * - Receive 8 products at $10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 products at $16
      - $10
      - 12
      - +4×$10
      - $120
    * - Deliver 10 products
      - $10
      - 2
      - | -10×$10
        |
      - $20
    * - Receive 2 products at $9
      - $10
      - 4
      - +2×$10
      - $40

Average Cost: weighted average of all units
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
    * - Receive 8 products at $10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 products at $16
      - $12
      - 12
      - +4×$16
      - $144
    * - Deliver 10 products
      - $12
      - 2
      - | -10×$12
        |
      - $24
    * - Receive 2 products at $6
      - $9
      - 4
      - +2×$6
      - $36

FIFO: First In, First Out
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
    * - Receive 8 products at $10
      - $10
      - 8
      - +8×$10
      - $80
    * - Receive 4 products at $16
      - $12
      - 12
      - +4×$16
      - $144
    * - Deliver 10 products
      - $16
      - 2
      - | -8×$10
        | -2×$16
      - $32
    * - Receive 2 products at $6
      - $11
      - 4
      - +2×$6
      - $44

.. note:: Removal strategies also support :abbr:`LIFO (Last In, First Out)` and
  :abbr:`FEFO (First Expiry, First Out)`, but they only impact which product is first picked, not
  the valuation method. For example, you can pick using LIFO, but using Average Cost for valuation,
  as LIFO is not allowed by :abbr:`IFRS (International Financial Reporting Standards)`.


Inventory vs Accounting
=======================

.. rst-class:: inventory-app-paragraph

   :doc:`The inventory app </applications/inventory_and_mrp/inventory>` keeps track of the inventory
   value in real time as you **receive and deliver goods**. The reporting menu allows analysing
   inventory on hand and values per company, location, product, etc.

.. rst-class:: accounting-app-paragraph

   :doc:`The accounting app </applications/finance/accounting>` updates accounts when you receive
   **invoices or bills**. Even though receipts and invoices differ, it’s not practical for
   accountants to post journal entries for every inventory movement. So, they post a closing entry
   to account for the difference between what has been invoiced and received/delivered. This closing
   process happens usually once a year for SMEs, or once a month for larger companies.

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
entry by reducing expenses (stock variation). It’s the best practice in Europe.

**Perpetual:** Post vendor bills as assets (stock valuation), report expenses when goods are sold
(cost of goods sold). It’s the best practice in countries that follow Anglo-Saxon accounting, like
the USA and India.

.. role:: pink
.. role:: yellow
.. role:: green
.. role:: blue
.. role:: darkblue
.. role:: purple
.. role:: washed

* :purple:`Stock Account`: defined on the product's category
* :yellow:`Stock Variation`: defined on the stock account
* :blue:`Expense/Cost of Goods Sold`: defined on the product/product category
* :green:`Inventory Adjustment`: defined on the Inventory Loss location
  (optional, recommended for Anglo-Saxon accounting)
* :pink:`Cost of Production`: defined on the Production location
  (optional, recommended for Anglo-Saxon accounting)
* :darkblue:`Expense`: defined on the stock account
  (necessary only for perpetual Continental accounting)

.. rst-class:: config-table

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   -

      - OPERATION
      - BE Periodic
      - US Perpetual
      - US Periodic
      - BE Perpetual
      - Debit
      - Credit
   -

      - ADJUSTMENT
      -
      - :purple:`Stock`
      -
      -
      -
      - 40
   -

      -
      -
      - :green:`Loss`
      -
      -
      - 40
      -
   -

      - BILL
      - :blue:`Expenses`
      - :purple:`Stock`
      - :blue:`COGS`
      - :purple:`Stock`
      - 500
      -
   -

      -
      - :washed:`Payable`
      - :washed:`Payable`
      - :washed:`Payable`
      - :washed:`Payable`
      -
      - :washed:`500`
   -

      - INVOICE
      -
      - :blue:`COGS`
      -
      - :blue:`Expenses`
      - 400
      -
   -

      -
      -
      - :purple:`Stock`
      -
      - :purple:`Stock`
      -
      - 400
   -

      -
      - :washed:`Income`
      - :washed:`Income`
      - :washed:`Income`
      - :washed:`Income`
      -
      - :washed:`750`
   -

      -
      - :washed:`Receivable`
      - :washed:`Receivable`
      - :washed:`Receivable`
      - :washed:`Receivable`
      - :washed:`750`
      -
   -

      - MANUFACTURING
      -
      - :purple:`Stock`
      -
      -
      - 52
      -
   -

      -
      -
      - :pink:`COP`
      -
      -
      -
      - 52
   -

      -
      -
      - :purple:`Stock`
      -
      -
      -
      - 50
   -

      -
      -
      - :pink:`COP`
      -
      -
      - 50
      -
   -

      - CLOSING
      - :yellow:`Stock Variation`
      -
      -
      -
      -
      - 62 [#copc-stockvar]_
   -

      -
      - :purple:`Stock`
      -
      -
      -
      - 62
      -
   -

      -
      -
      - :yellow:`Stock Variation`
      -
      -
      - 0 [#aspl-stockvar]_
      -
   -

      -
      -
      - :purple:`Stock`
      -
      -
      -
      - 0
   -

      -
      -
      -
      - :yellow:`COGS`
      -
      -
      - 100 [#aspc-cogs]_
   -

      -
      -
      -
      - :purple:`Stock`
      -
      - 100
      -
   -

      -
      -
      -
      - :pink:`COP`
      -
      -
      - 52
   -

      -
      -
      -
      - :purple:`Stock`
      -
      - 52
      -
   -

      -
      -
      -
      - :pink:`COP`
      -
      - 50
      -
   -

      -
      -
      -
      - :purple:`Stock`
      -
      -
      - 50
   -

      -
      -
      -
      - :green:`Loss`
      -
      - 40
      -
   -

      -
      -
      -
      - :purple:`Stock`
      -
      -
      - 40
   -

      -
      -
      -
      -
      - :blue:`Expenses`
      - 38 [#copl-expenses]_
      -
   -

      -
      -
      -
      -
      - :purple:`Stock`
      -
      - 38
   -

      -
      -
      -
      -
      - :yellow:`Stock Variation`
      -
      - 62 [#copl-stockvar]_
   -

      -
      -
      -
      -
      - :darkblue:`Expenses`
      - 62
      -

.. [#copc-stockvar] Inventory - Stock = 102 - 40

.. [#aspl-stockvar] Inventory - Stock = 0

.. [#aspc-cogs] Inventory - Stock = 140 - 40
                (What comes from loss/:abbr:`COP (Cost of Production)` is done separately.)

.. [#copl-expenses] Inventory - Stock = 102 - 140

.. [#copl-stockvar] Stock Y - Stock Y-1 = 102 - 40

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


What does it look like in Odoo?
===============================

In Inventory
------------

Open :menuselection:`Reporting --> Stock` to have a view on the current average cost for the product
and the total value of the stock. They can both be open to display details.

.. image:: cheat_sheet/valuation-stock.png


AVCO product
~~~~~~~~~~~~

You can open :guilabel:`Unit Cost` to check all existing updates and their origins. In
:abbr:`AVCO (Average Cost)` this allows you to understand how the currently used value was
calculated.

.. image:: cheat_sheet/avco-justification.png

By opening :guilabel:`Total Value`, you can see all incoming quantities for which you still have a
remaining quantity and the value used for their valuation. In AVCO or standard cost, the used value
is always the current average unit cost.

.. image:: cheat_sheet/avco-valuation.png


FIFO product
~~~~~~~~~~~~

In :abbr:`FIFO (First In, First Out)`, remaining units from each previous incoming move keep their
own individual valuation as shown in :guilabel:`Total Value`.

.. image:: cheat_sheet/fifo-valuation.png

In FIFO or AVCO remaining quantities from a previous incoming move can have their value adjusted if
necessary.

.. image:: cheat_sheet/fifo-adjust.png


In Accounting
-------------

Open :menuselection:`Review --> Inventory Valuation` to have a look at the difference between the
accounting stock value and the current inventory value recorded thanks to the incoming moves with a
remaining quantity.

Click on :guilabel:`Generate Entry` to get a new accounting entry to review and post.

.. image:: cheat_sheet/valuation-accounting.png

Open
:menuselection:`Review --> Invoices not received, Invoices to be issued, Prepaid expenses and Deferred Revenues`
to easily record these entries.

With Anglo-Saxon perpetual accounting, this will also help to distribute recorded Inventory
Variations to accounts such as Bill to Receive/:abbr:`GRNI (Goods Received Not Invoiced)` or
:abbr:`COGS (Cost of Goods Sold)` as shown in the :ref:`Accounting Entries <accounting-entries>`
and :ref:`Journal Entries Configuration <journal-entries>` sections.
