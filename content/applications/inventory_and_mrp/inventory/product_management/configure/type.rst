============
Product type
============

.. |BOM| replace:: :abbr:`BOM (Bill of Materials)`
.. |BOMs| replace:: :abbr:`BOMs (Bills of Materials)`

In Odoo, goods and services are both set up as *products*. When setting up a new product, several
fields should be carefully selected, as they determine how to invoice and track a business's goods
or services.

To configure an existing product, go to :menuselection:`Inventory app --> Products --> Products`,
and select the desired product from the list. Alternatively, from the :guilabel:`Products` page,
click :guilabel:`New` to create a new product.

.. _inventory/product_management/for-sale-or-purchase:

For sale vs. purchase
=====================

Goods and services can be designated as those that can be bought, sold, or both. On the product
form, select the :guilabel:`Sales` checkbox if the product can be *sold* to customers (e.g.,
finished goods). Select :guilabel:`Purchase` if the product can be *purchased* (e.g., raw
materials).

.. example::
  If a resale clothing shop buys discounted denim jackets and sells them at a higher cost to the end
  consumer, the `Jacket` product form should have *both* the :guilabel:`Sales` and
  :guilabel:`Purchase` checkboxes selected.

  On the other hand, imagine the store occasionally sews new jackets from denim and thread. In the
  `Denim` and `Thread` product forms, only :guilabel:`Purchase` should be selected, whereas in the
  `Handmade Jacket` product form, only :guilabel:`Sales` should be selected.

.. _inventory/product_management/goods-or-services:

Goods vs. services
==================

When configuring a product, a :guilabel:`Product Type` must be selected on the *General Information*
tab of a product form. Each product type impacts different operations in other Odoo applications,
such as **Sales** and **Purchase**, and should be chosen carefully.

- :guilabel:`Goods`: tangible, material objects (e.g., anything from a hamburger to a house)
- :guilabel:`Service`: intangible, immaterial offerings (e.g., a repair, a haircut, call center
  assistance)
- :guilabel:`Combo`: any mix of goods and services (e.g., a new car (*good*) with an oil change
  included (*service*))

.. note::
   Due to their immaterial nature, services are not trackable in Odoo's **Inventory** application.

.. _inventory/product_management/manufacture:

Configure goods
===============

Selecting :guilabel:`Goods` as the :guilabel:`Product Type` enables a few fields and tabs in the
product form:

- :ref:`Invoicing Policy <inventory/product_management/invoicing-policy>` field: This field
  determines at what point in the sales process a customer is invoiced.

  .. important::
     The :guilabel:`Invoicing Policy` field **only** appears if the **Sales** app is installed.

- :ref:`Track Inventory <inventory/product_management/tracking-inventory>` field: This checkbox
  determines whether Odoo tracks inventory for this product.
- *Inventory* tab: From here, :doc:`purchasing and manufacturing routes
  <../../shipping_receiving/daily_operations/use_routes>`, as well as product logistics such as
  product weight and customer lead time, can be specified.
- Smart buttons: Some smart buttons appear above the form when :guilabel:`Goods` is selected;
  others appear when :guilabel:`Track Inventory` is selected. For example, the :guilabel:`Forecasted
  Report` button displays when :guilabel:`Track Inventory` is selected. In general, most smart
  buttons on a product form link to :ref:`inventory operations
  <inventory/product_management/inventory-ops-by-product-type>`.

.. image:: type/product-form.png
   :alt: Designate a product as a good or service.

.. _inventory/product_management/invoicing-policy:

Invoicing policy
----------------

The :guilabel:`Invoicing Policy` field appears on the product form only when a product is for sale
(i.e., when :guilabel:`Sales` is selected, and the **Sales** app is installed).

When configuring a product for sale, it is necessary to choose an :doc:`invoicing policy
<../../../../sales/sales/invoicing/invoicing_policy>`:

- :guilabel:`Ordered quantities`: Customers are invoiced when the sales order is confirmed.
- :guilabel:`Delivered quantities`: Customers are invoiced when the delivery is completed.

.. _inventory/product_management/tracking-inventory:

Tracked vs. untracked goods
---------------------------

The :guilabel:`Track Inventory` field on the product form drives many of Odoo's **Inventory**
operations.

*Tracked* products are those for which stock and inventory are maintained. Examples include finished
goods and, often, the raw materials or components needed to make them.

When :guilabel:`Track Inventory` is selected, a drop-down menu appears, offering three ways to track
inventory: :guilabel:`By Unique Serial Number`, :guilabel:`By Lots`, or :guilabel:`By Quantity`.

.. image:: type/tracked.png
   :alt: Configure a tracked good.

*Untracked* products (sometimes referred to as *non-inventory* products) are typically consumed
quickly, so stock (or inventory) does *not* need to be maintained. Non-inventory products are often
essential, but exact counts are unnecessary. Examples include: office supplies, packaging materials,
or items used in production that do not need to be individually tracked.

.. tip::
   Select the :guilabel:`Track Inventory` checkbox if it is necessary to track a product's stock at
   various locations, for inventory valuation, with lots or serial numbers, or when using reordering
   rules.

.. seealso::
   :doc:`Tracking storable products using lot and serial numbers <../product_tracking>`

.. _inventory/product_management/inventory-ops-by-product-type:

Inventory operations by product type
------------------------------------

:ref:`Whether a good is tracked or untracked <inventory/product_management/tracking-inventory>`
affects common **Inventory** operations, like transfers and reordering rules.

The table below summarizes which operations (and smart buttons) are enabled for tracked vs.
untracked goods. Click highlighted chart items to navigate to detailed sections and related
documents.

.. list-table::
   :header-rows: 1
   :stub-columns: 1

   * - Inventory operation
     - Tracked
     - Untracked
   * - :ref:`Show on-hand quantity <inventory/product_management/on-hand>`
     - Yes
     - No
   * - :ref:`Show forecasted quantity <inventory/product_management/on-hand>`
     - Yes
     - No
   * - :ref:`Use reordering rules <inventory/product_management/replenishment>`
     - Yes
     - No
   * - :ref:`Can be included in a purchase order <inventory/product_management/po>`
     - Yes
     - Yes
   * - :ref:`Use putaway rules <inventory/product_management/putaway>`
     - Yes
     - Yes
   * - :ref:`Can be manufactured, subcontracted, or used in another good's BoM
       <inventory/product_management/manufacturing>`
     - Yes
     - Yes
   * - :doc:`Use inventory adjustments
       <../../warehouses_storage/inventory_management/count_products>`
     - Yes
     - No
   * - :doc:`Use inventory valuation <../../inventory_valuation/cheat_sheet>`
     - Yes
     - No
   * - :ref:`Create transfer <inventory/product_management/transfer-store>`
     - Yes
     - Yes
   * - :doc:`Use lot/serial number tracking <../product_tracking>`
     - Yes
     - No
   * - :doc:`Can be placed in a kit <../../../manufacturing/advanced_configuration/kit_shipping>`
     - Yes
     - Yes
   * - :ref:`Can be placed in a package <inventory/product_management/package>`
     - Yes
     - Yes
   * - :ref:`Appears on inventory reports <inventory/product_management/report>`
     - Yes
     - No

Inventory
~~~~~~~~~

.. _inventory/product_management/on-hand:

On-hand and forecasted quantities
*********************************

A tracked product's on-hand and forecasted quantities, based on incoming and outgoing orders, are
reflected on the product form with the :icon:`fa-area-chart` Forecasted Report button:

- :guilabel:`On-Hand Quantity`: This represents the number of units currently available in
  inventory. It appears in purple on the top line of the smart button.
- :guilabel:`Forecasted`: This represents the number of units *expected* to be available in
  inventory after all orders are taken into account. In other words,
  :math:`\text{forecasted} = \text{on hand quantity} + \text{incoming shipments} - \text{outgoing shipments}`.
  The forecasted quantity appears in blue on the second line of the smart button.

Click the button to view the *Forecasted Report*. This report is also where the
:guilabel:`Replenish` button can be found, allowing goods to be restocked directly from the
*Forecasted Report*.

.. image:: type/forecasted-report-button.png
   :alt: Review on-hand and forecasted quantities at a glance with the Forecasted Report button.

.. seealso::
  - :doc:`Replenishment <../../warehouses_storage/replenishment>`
  - `Odoo Tutorials: Replenishment Methods for Manufacturing
    <https://www.youtube.com/watch?v=vtjeMGcG8aM>`_

On the other hand, untracked products are regarded as *always* available. Consequently,
:guilabel:`On-Hand Quantity` is not tracked, and there is no :guilabel:`Forecasted` quantity
available.

.. _inventory/product_management/putaway:

Putaway rules and storage
*************************

Both tracked and untracked goods can optimize storage using:

- :icon:`fa-random` :doc:`Putaway Rules <../../shipping_receiving/daily_operations/putaway>`:
  This represents putaway rules that apply to a good, such as where to store it when a new shipment
  arrives.
- :icon:`fa-cubes`
  :doc:`Storage Capacities <../../shipping_receiving/daily_operations/storage_category>`:
  This represents any storage capacity limitations specified for this good. For example, a warehouse
  may require that only 10 (or fewer) sofas be stored there at any given time, due to their large
  size.

.. _inventory/product_management/replenishment:

Replenishment
*************

Reordering rules
^^^^^^^^^^^^^^^^

Only tracked products can trigger :doc:`reordering rules
<../../warehouses_storage/replenishment/reordering_rules>` to generate purchase orders. Untracked
goods *cannot* be managed using reordering rules.

Reordering rules can be configured directly on the product form via the :icon:`fa-refresh`
:guilabel:`(refresh)` icon.

.. note::
   If reordering rules already exist on a product, Odoo re-labels this button to :guilabel:`Min /
   Max` to show the minimum and maximum number of units that must be in stock.

.. _inventory/product_management/po:

Create purchase orders
^^^^^^^^^^^^^^^^^^^^^^

Both tracked and untracked products can be included in a request for quotation in the **Purchase**
app. However, when receiving untracked products, their on-hand quantity does not change upon
validating the receipt (`WH/IN`).

.. _inventory/product_management/manufacturing:

Manufacturing
~~~~~~~~~~~~~

Both tracked and untracked products can be manufactured, :doc:`subcontracted
<../../../manufacturing/subcontracting>`, or included in another product's :doc:`bill of
materials (BOM) <../../../manufacturing/basic_setup/bill_configuration>`.

.. _inventory/product_management/BoM:

On the product form for a tracked or untracked good, there are several smart buttons that may
appear for manufacturing operations:

- :icon:`fa-flask` :guilabel:`Bill of Materials`: This shows the |BOMs| used to make this product.
- :icon:`fa-level-up` :guilabel:`Used In`: This shows other goods that include this product in their
  |BOM|.

.. _inventory/product_management/transfer-store:

Transfer goods
~~~~~~~~~~~~~~

*Transfers* are warehouse operations that involve moving goods. Examples of transfers include
:doc:`deliveries and receipts
<../../shipping_receiving/daily_operations/receipts_delivery_one_step>`, as well as
:doc:`internal transfers <../../warehouses_storage/replenishment/resupply_warehouses>` between
warehouses.

When creating a transfer for tracked products in the **Inventory** app, transfers modify the on-hand
quantity at each location. For example, transferring five units from the internal location
`WH/Stock` to `WH/Packing Zone` decreases the recorded quantity at `WH/Stock` and increases it at
`WH/Packing Zone`.

For untracked products, transfers can be created, but exact quantities at each storage location are
not tracked.

.. _inventory/product_management/package:

Packages
~~~~~~~~

Both tracked and untracked (non-inventory) products can be placed in :doc:`packages <package>`.

However, for non-inventory products, the quantity is not tracked, and the product is not listed in
the package's :guilabel:`Contents` (which can be accessed by going to :menuselection:`Inventory app
--> Products --> Packages`, and selecting the desired package).

.. figure:: type/package-content.png
   :alt: Show Packages page, containing the package contents list.

   An untracked product was placed in the package, but the **Content** section does not list it.

Additionally, if the *Move Entire Packages* feature is enabled, moving a package updates the
location of the contained tracked products but not the contained untracked products. To enable this
feature, navigate to :menuselection:`Inventory app --> Configuration --> Operations Types`, and
select any operation. On the *Operation Type* form, in the *Barcode App* tab, select the
:guilabel:`Move Entire Packages` checkbox.

.. _inventory/product_management/report:

Inventory reports
~~~~~~~~~~~~~~~~~

**Only** tracked products appear on the following reports.

.. important::
   These reports are only available to users with :doc:`administrator access
   <../../../../general/users/access_rights>`.

- :doc:`Stock report <../../warehouses_storage/reporting/stock>`: This report provides a
  comprehensive list of all on-hand, unreserved, incoming, and outgoing tracked inventory. This
  includes a detailed record of the monetary value of all tracked inventory. To access the report,
  go to :menuselection:`Inventory app --> Reporting --> Stock`.
- :doc:`Locations report  <../../warehouses_storage/reporting/locations>`: This report shows a
  breakdown of which tracked products are held at each location. The report is only available with
  the *Storage Locations* feature activated (:menuselection:`Inventory app --> Configuration -->
  Settings`). To access it, go to :menuselection:`Inventory app --> Reporting --> Locations`.
- :doc:`Moves History report <../../warehouses_storage/reporting/moves_history>`: This report
  summarizes where and when goods have moved in or out of stock. To access the report, go to
  :menuselection:`Inventory app --> Reporting --> Moves History`. Alternatively, click the
  :icon:`fa-exchange` :guilabel:`In / Out` smart button on a product form to filter the report
  on that product's specific move history.
- :guilabel:`Moves Analysis`: This report provides a pivot table view of inventory transfers by
  operation type.
