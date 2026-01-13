==========================
Account for scrapped goods
==========================

It's essential to strike a balance between having sufficient stock on hand to meet demand while
avoiding overpurchasing. When working with perishable products, or when inventoried goods have
defects that prevent the product from being sold, occasionally, products must be scrapped and
removed from inventory. It's important to account for these losses in the :ref:`Profit and Loss
report <accounting/reporting/profit-and-loss>`.

Generally, follow this process to account for scrapped goods in the *Profit and Loss* report:

#. :ref:`Enable settings in the Inventory configuration
   <inventory/inventory_valuation/scrap-enable>`.
#. :ref:`Configure the product category <inventory/inventory_valuation/scrap-category>`.
#. :ref:`Set up a scrap location and its scrap journal
   <inventory/inventory_valuation/scrap-location>`.
#. :ref:`Scrap products <inventory/inventory_valuation/scrap-products>`.
#. :ref:`View scrapped products in the Profit and Loss report
   <inventory/inventory_valuation/view-profit-loss>`.

.. _inventory/inventory_valuation/scrap-enable:

Enable settings
===============

To ensure scrapped goods can be seen in the *Profit and Loss* report, open :menuselection:`Inventory
app --> Configuration --> Settings`. In the :guilabel:`Warehouse` section, enable :guilabel:`Storage
Locations`.

.. _inventory/inventory_valuation/scrap-category:

Configure the product category
==============================

Next, configure the product category. Open :menuselection:`Inventory app --> Configuration -->
Categories`. Open or create a product category.

Next, set the :guilabel:`Costing Method` to either :guilabel:`First In First Out (FIFO)` or
:guilabel:`Average Cost (AVCO)`:

- :guilabel:`First In First Out (FIFO)`: Inventory is valued, and the cost of goods sold (COGS) is
  calculated by assuming the oldest items purchased are the first ones sold, tracking costs by
  specific receipt lots. It's a precise method for fluctuating costs, and requires tracking units by
  their entry time (load/serial numbers) for accurate removal from stock.
- :guilabel:`Average Cost (AVCO)`: Inventory value is calculated by dynamically averaging the cost
  of all units in stock, updating with each new purchase or manufacturing receipt to reflect
  fluctuating prices, making it ideal for varied vendor costs, with the system automatically
  recalculating the unit cost and value for assets and COGS. Odoo handles the math, adjusting the
  average cost automatically as products are bought or sold, but doesn't change it when products
  sell, only updating when new stock arrives at a different price.

Next, set the :guilabel:`Inventory Valuation` field to :guilabel:`Perpetual (at invoicing)`. This
setting ensures that real-time journal entries are created in the *Accounting* app whenever stock
enters or leaves the company's warehouse.

.. _inventory/inventory_valuation/scrap-location:

Set up a scrap location and its scrap journal
=============================================

Next, you must create or edit an existing scrap location. Open :menuselection:`Inventory app -->
Configuration --> Locations`. Open an existing location or create a new one by clicking
:guilabel:`New`.

.. note::
    By default, the :guilabel:`Locations` list is filtered to show only internal locations. Remove
    this filter to view all locations, including *Inventory Loss* locations.

Update the :guilabel:`Location Type` field to select :guilabel:`Inventory Loss`.

Specify a :guilabel:`Loss Account` by selecting the account used for scrapped goods.

.. example::
    The `WH/Scrap` location is an :guilabel:`Inventory Loss` location that uses the `600001 Scrapped
    Goods` journal as its :guilabel:`Loss Account`.

    .. image:: scrapped_inventory_valuation/example-scrap-location.png
       :alt: Specify an Inventory Loss Location Type and a Loss Account.

.. _inventory/inventory_valuation/scrap-products:

Scrap products
==============

After the product category and location are set up, :doc:`products can be scrapped
<../warehouses_storage/inventory_management/scrap_inventory>`. Be sure to select the scrap location
in the :guilabel:`Scrap Location` field.

.. example::
    `20` units of `Under-Eye Masks` are scrapped to `WH/Scrap`.

    .. image:: scrapped_inventory_valuation/example-scrap-order.png
       :alt: Specify the Product, Quantity, and Scrap Location.

.. _inventory/inventory_valuation/view-profit-loss:

View scrapped products in the Profit and Loss report
====================================================

After products have been scrapped to the correct scrap location, view items scrapped to it in the
Profit and Loss report. Open :menuselection:`Accounting app --> Reporting --> Profit and Loss`. To
view the scrap order in the report, under the :guilabel:`Gross Profit` section, expand the
:guilabel:`Expense` category. Search for the scrap journal in the list and click the
:icon:`fa-ellipsis-v` :guilabel:`(vertical ellipsis)` icon next to the scrap account and select
:guilabel:`General Ledger`.

.. example::
    `$100` worth of `Under-Eye Masks` appear as a debit in the Profit and Loss' General Ledger.

    .. image:: scrapped_inventory_valuation/scrapped-profit-loss.png
       :alt: View the General Ledger to see scrapped items in the Profit and Loss report.

.. seealso::
   :ref:`Profit and Loss report <accounting/reporting/profit-and-loss>`
