=================================
Inventory valuation configuration
=================================

.. _inventory/inventory_valuation_config:

All of a company's stock on-hand contributes to the valuation of its inventory. That value should
be reflected in the company's accounting records to accurately show the value of the company and
all of its assets.

By default, Odoo uses a periodic inventory valuation (also known as manual inventory valuation).
This method implies that the accounting team posts journal entries based on the physical inventory
of the company, and that warehouse employees take the time to count the stock. In Odoo, this method
is reflected inside each product category, where the :guilabel:`Costing Method` field will be set
to `Standard Price` by default, and the :guilabel:`Inventory Valuation` field will be set to
`Manual`.

.. image:: inventory_valuation_config/inventory-valuation-fields.png
   :align: center
   :alt: The Inventory Valuation fields are located on the Product Categories form.

Alternatively, automated inventory valuation is an integrated valuation method that updates the
inventory value in real-time by creating journal entries whenever there are stock moves initiated
between locations in a company's inventory.

.. note::
   Automated inventory valuation is a method recommended for expert accountants, given the extra
   steps involved in journal entry configuration. Even after the initial setup, the method will
   need to be periodically checked to ensure accuracy, and adjustments may be needed on an ongoing
   basis depending on the needs and priorities of the business.

Types of accounting
-------------------

Accounting entries will depend on the accounting mode: *Anglo-Saxon* or *Continental*.

.. tip::
   Verify the accounting mode by activating the :ref:`developer-mode` and navigating to
   :menuselection:`Accounting --> Configuration --> Settings`.

In *Anglo-Saxon* accounting, the costs of goods sold (COGS) are reported when products are sold or
delivered. This means that the cost of a good is only recorded as an expense when a customer is
invoiced for a product. *Interim Stock Accounts* are used for the input and output accounts, and are
both *Asset Accounts* in the balance sheet.

In *Continental* accounting, the cost of a good is reported as soon as a product is received into
stock. Additionally, a single *Current Assets* account is used for both input and output accounts in
the balance sheet.

Examples
~~~~~~~~

Below are accounting tables with example journal entries for the creation and payment of a vendor
bill, using each of the two accounting modes: **Anglo-Saxon** and **Continental**.

.. tabs::

   .. group-tab:: Anglo-Saxon

      At the end of the year, companies do physical inventory counts, or rely on the recorded
      inventory in Odoo to value the stock into their books. Then, the purchase balance is broken
      down into both the inventory and the cost of goods sold (COGS), using the following formula:
      `Cost of goods sold (COGS) = Starting inventory value + Purchases - Closing inventory value`.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * -
           - Debit
           - Credit
         * - Assets: Inventory
           - 50
           -
         * - Assets: Deferred Tax Assets
           - 4.68
           -
         * - Liabilities: Accounts Payable
           -
           - 54.68

      **Configuration:**
        - **Purchased Goods:** defined on the product or on the internal category of a related
          product (Expense Account Field).
        - **Deferred Tax Assets:** defined on the tax used on the purchase order line.
        - **Accounts Payable:** defined on the vendor related to the bill.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * -
           - Debit
           - Credit
         * - Assets: Inventory (closing value)
           - X
           -
         * - Expenses: Cost of Goods Sold
           - X
           -
         * - Expenses: Purchased Goods
           -
           - X
         * - Assets: Inventory (starting value)
           -
           - X

   .. group-tab:: Continental

      At the end of the year, companies do physical inventory counts, or rely on the recorded
      inventory in Odoo to value the stock into their books. Then, a journal entry must be created
      to move the stock variation value from the Profit & Loss sheet into their assets.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * -
           - Debit
           - Credit
         * - Assets: Inventory
           - 50
           -
         * - Assets: Deferred Tax Assets
           - 4.68
           -
         * - Liabilities: Accounts Payable
           -
           - 54.68

      **Configuration:**
        - **Purchased Goods:** defined on the product or on the internal category of a related
          product (Expense Account Field).
        - **Deferred Tax Assets:** defined on the tax used on the purchase order line.
        - **Accounts Payable:** defined on the vendor related to the bill.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * -
           - Debit
           - Credit
         * - Assets: Inventory
           - X
           -
         * - Expenses: Inventory Variations
           -
           - X

      If the value of the stock decreased, the :guilabel:`Inventory` account is credited, and the
      :guilabel:`Inventory Variations` account is debited.

Costing methods
---------------

Below are the three costing methods that can be used in Odoo for inventory valuation.

- **Standard Price**: is the default costing method in Odoo. The cost of the product is manually
  defined on the product form, and this cost is used to compute the valuation. Even if the purchase
  price on a purchase order differs, the valuation will still use the cost defined on the product
  form.
- **Average Cost (AVCO)**: calculates the valuation of a product based on the average cost of that
  product, divided by the total number of available stock on-hand. With this costing method,
  inventory valuation is *dynamic*, and constantly adjusts based on the purchase price of products.
- **First In First Out (FIFO)**: tracks the costs of incoming and outgoing items in real-time and
  uses the real price of the products to change the valuation. The oldest purchase price is used as
  the cost for the next good sold until an entire lot of that product is sold. When the next
  inventory lot moves up in the queue, an updated product cost is used based on the valuation of
  that specific lot. This method is arguably the most accurate inventory valuation method for a
  variety of reasons, however, it's highly sensitive to input data and human error.

.. warning::
   Changing the costing method greatly impacts inventory valuation. It's highly recommended to
   consult an accountant first before making any adjustments here.

Examples
~~~~~~~~

Below are accounting tables with example journal entries using each of the three costing methods in
Odoo: **Standard Price**, **Average Cost (AVCO)**, and **First In First Out (FIFO)**.

.. tabs::

   .. group-tab:: Standard Price

       Using **Standard Price**, products are valued at the cost manually defined on the product
       form. Usually, this cost is an estimation based on the material and labor needed to obtain
       the product. This cost must be reviewed periodically.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * - Operation
           - Unit Cost
           - Qty. On Hand
           - Delta Value
           - Inventory Value
         * -
           - $10.00
           - 0
           -
           - $0.00
         * - Receive 8 products at $10.00
           - $10.00
           - 8
           - +8*$10.00
           - $80.00
         * - Receive 4 products at $16.00
           - $10.00
           - 12
           - +4*$10.00
           - $120.00
         * - Deliver 10 products
           - $10.00
           - 2
           - -10*$10.00
           - $20.00
         * - Receive 2 products at $9.00
           - $10.00
           - 4
           - +2*$10.00
           - $40.00

   .. group-tab:: Average Cost (AVCO)

      Using **Average Cost (AVCO**), a product's value is the average purchase cost of the product,
      and the cost of the product is recomputed at each receipt. The average cost does *not* change
      when products leave the warehouse.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * - Operation
           - Unit Cost
           - Qty. On Hand
           - Delta Value
           - Inventory Value
         * -
           - $0.00
           - 0
           -
           - $0.00
         * - Receive 8 products at $10.00
           - $10.00
           - 8
           - +8*$10.00
           - $80.00
         * - Receive 4 products at $16.00
           - $12.00
           - 12
           - +4*$16.00
           - $144.00
         * - Deliver 10 products
           - $12.00
           - 2
           - -10*$12.00
           - $24.00
         * - Receive 2 products at $6.00
           - $9.00
           - 4
           - +2*$6.00
           - $36.00

   .. group-tab:: First In First Out (FIFO)

      Using **First In First Out (FIFO)**, products are valued at their purchase cost. When a
      product leaves the stock, the :abbr:`FIFO (First In First Out)` rule applies, and the first
      value "in" is the first value "out", no matter the warehouse, location, serial number, etc.

      .. list-table::
         :header-rows: 1
         :stub-columns: 1

         * - Operation
           - Unit Cost
           - Qty. On Hand
           - Delta Value
           - Inventory Value
         * -
           - $0.00
           - 0
           -
           - $0.00
         * - Receive 8 products at $10.00
           - $10.00
           - 8
           - +8*$10.00
           - $80.00
         * - Receive 4 products at $16.00
           - $12.00
           - 12
           - +4*$16.00
           - $144.00
         * - Deliver 10 products
           - $16.00
           - 2
           - | -8*$10.00
             | -2*$16.00
           - $32.00
         * - Receive 2 products at $6.00
           - $11.00
           - 4
           - +2*$6.00
           - $44.00

Configure automated inventory valuation in Odoo
-----------------------------------------------

Make changes to inventory valuation options by navigating to :menuselection:`Inventory -->
Configuration --> Product Categories`, and choose the category/categories where the automated
valuation method should apply.

.. note::
   It is possible to use different valuation settings for different product categories.

Under the :guilabel:`Inventory Valuation` heading are two labels: :guilabel:`Costing Method` and
:guilabel:`Inventory Valuation`. Pick the desired :guilabel:`Costing Method` using the drop-down
menu (e.g. :guilabel:`Standard`, :guilabel:`Average Cost (AVCO)`, or :guilabel:`First In First Out
(FIFO)`) and switch the :guilabel:`Inventory Valuation` to :guilabel:`Automated`.

.. seealso::
   :doc:`Using inventory valuation
   </applications/inventory_and_mrp/inventory/management/reporting/using_inventory_valuation>`

.. note::
   When choosing :guilabel:`Average Cost (AVCO)` as the :guilabel:`Costing Method`, changing the
   numerical value in the :guilabel:`Cost` field for products in the respective product category
   creates a new record in the *Inventory Valuation* report to adjust the value of the product. The
   :guilabel:`Cost` amount will then automatically update based on the average purchase price both
   of inventory on hand and the costs accumulated from validated purchase orders.

When the :guilabel:`Costing Method` is changed, products already in stock that were using the
:guilabel:`Standard` costing method *do not* change value; rather, the existing units keep their
value, and any product moves from then on affect the average cost, and the cost of the product will
change. If the value in the :guilabel:`Cost` field on a product form is changed manually, Odoo will
generate a corresponding record in the *Inventory Valuation* report.

On the same screen, the :guilabel:`Account Stock Properties` fields will appear, as they are now
required fields given the change to automated inventory valuation. These accounts are defined as
follows:

- :guilabel:`Stock Valuation Account`: when automated inventory valuation is enabled on a product,
  this account will hold the current value of the products.
- :guilabel:`Stock Input Account`: counterpart journal items for all incoming stock moves will be
  posted in this account, unless there is a specific valuation account set on the source location.
  This is the default value for all products in a given category, and can also be set directly on
  each product.
- :guilabel:`Stock Output Account`: counterpart journal items for all outgoing stock moves will be
  posted in this account, unless there is a specific valuation account set on the destination
  location. This is the default value for all products in a given category, and can also be set
  directly on each product.

Access reporting data generated by inventory valuation
------------------------------------------------------

To start, go to :menuselection:`Accounting --> Reporting --> Balance Sheet`. At the top of the
dashboard, change the :guilabel:`As of` field value to :guilabel:`Today`, and adjust the filtering
:guilabel:`Options` to :guilabel:`Unfold All` in order to see all of the latest data displayed,
all at once.

Under the parent :guilabel:`Current Assets` line item, look for the nested :guilabel:`Stock
Valuation Account` line item, where the total valuation of all of the inventory on hand is
displayed.

Access more specific information with the :guilabel:`Stock Valuation Account` drop-down menu, by
selecting either the :guilabel:`General Ledger` to see an itemized view of all of the journal
entries, or by selecting :guilabel:`Journal Items` to review all of the individualized journal
entries that were submitted to the account. As well, annotations to the :guilabel:`Balance Sheet`
can be added by choosing :guilabel:`Annotate`, filling in the text box, and clicking
:guilabel:`Save`.

.. image:: inventory_valuation_config/stock-valuation-breakdown-in-accounting.png
   :align: center
   :alt: See the full inventory valuation breakdown in Odoo Accounting app.
