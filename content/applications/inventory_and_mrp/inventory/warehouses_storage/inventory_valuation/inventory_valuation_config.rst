=================================
Inventory valuation configuration
=================================

.. _inventory/management/inventory_valuation_config:

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

.. _inventory/inventory_valuation_config/accounting:

Types of accounting
-------------------

Accounting entries will depend on the accounting mode: *Continental* or *Anglo-Saxon*.

.. tip::
   Verify the accounting mode by activating the :ref:`developer-mode` and navigating to
   :menuselection:`Accounting --> Configuration --> Settings`.

In *Anglo-Saxon* accounting, the costs of goods sold (COGS) are reported when products are sold or
delivered. This means that the cost of a good is only recorded as an expense when a customer is
invoiced for a product. *Interim Stock Accounts* are used for the input and output accounts, and are
both *Asset Accounts* in the balance sheet.

In *Continental* accounting, the cost of a good is reported as soon as a product is received into
stock. Additionally, a single *Expense* account is used for both input and output accounts in
the balance sheet.

.. _inventory/inventory_valuation_config/costing_methods:

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
   :ref:`Using the inventory valuation<inventory/reporting/using_inventory_val>`

.. note::
   When choosing :guilabel:`Average Cost (AVCO)` as the :guilabel:`Costing Method`, changing the
   numerical value in the :guilabel:`Cost` field for products in the respective product category
   creates a new record in the *Inventory Valuation* report to adjust the value of the product. The
   :guilabel:`Cost` amount will then automatically update based on the average purchase price both
   of inventory on hand and the costs accumulated from validated purchase orders.

When the :guilabel:`Costing Method` is changed, products already in stock that were using the
:guilabel:`Standard` costing method **do not** change value; rather, the existing units keep their
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
