:show-content:
:hide-page-toc:

==========================
Inbound and outbound flows
==========================

Setting up inbound and outbound flows is a critical step in configuring inventory management in
Odoo. The chosen setup impacts operational efficiency, traceability, and cost.

Warehouse managers must balance speed and accountability when designing inventory flows. Businesses
may opt for a streamlined process for faster operations or implement additional checkpoints to
enhance traceability and control.

Odoo supports three inventory flow configurations: one-step, two-step, and three-step. The default
one-step flow is the simplest, while additional steps add control but require more operations. The
best choice depends on factors like quality checks, packaging needs, and warehouse size.

This guide helps the business determine the most suitable setup.

One-step flow
=============

- **Receiving**: Products go directly into stock.
- **Shipping**: Products ship directly from stock.
- **Best for**: Small warehouses, low stock levels, and non-perishable items, where minimal
  processing is needed before products are stored or shipped.

.. seealso::
   :doc:`daily_operations/receipts_delivery_one_step`

Two-step flow
=============

- **Receiving**: Products move to an *input* area before being transferred into stock.

  - Until transferred, received products are not automatically reserved for manufacturing, shipping,
    or other operations.

- **Shipping**: Products move to an *output* before shipping to allow for :doc:`sorting or
  consolidation <picking_methods>`.
- **Best for**: Large warehouses, high stock levels, bulky items, and workflows that separate
  receiving from storage to improve organization and efficiency.

.. seealso::
   :doc:`daily_operations/receipts_delivery_two_steps`

Three-step flow
===============

- **Receiving**: Products follow a structured process— *input area* → *quality control* → *stock*.
- **Shipping**: Products are *picked*, *packed*, then *shipped*, ensuring proper handling and
  organization.
- **Best for**: Very large warehouses with strict quality control requirements, dedicated picking
  and packing workflows, and a need for clear traceability across multiple handling stages. Suitable
  when multiple teams manage different steps before products are stocked or shipped.

.. seealso::
   - :doc:`daily_operations/receipts_three_steps`
   - :doc:`daily_operations/delivery_three_steps`

Add-ons
=======

To optimize each flow, Odoo provides additional features that can enhance the process.

Storage
-------

.. cards::

   .. card:: Putaway rules
      :target: daily_operations/putaway

      Guide products to specific storage locations based on predefined rules

   .. card:: Storage categories
      :target: daily_operations/storage_category

      Set item or weight limits to prevent overstocking at the location and ensure proper
      organization

   .. card:: Consignment
      :target: daily_operations/owned_stock

      Keep track of products owned by third parties

Delivery
--------

.. cards::

   .. card:: Cross dock
      :target: daily_operations/cross_dock

      Receive products and immediately transfer them to another warehouse without storing them

   .. card:: Dropshipping
      :target: daily_operations/dropshipping

      Coordinate with vendors to deliver orders directly to customers, bypassing internal stock

   .. card:: Picking methods
      :target: picking_methods

      Optimize picking operations using piece, batch, cluster, or wave picking techniques

   .. card:: Removal strategies
      :target: removal_strategies

      Use FIFO, LIFO, or FEFO strategies to automate the selection of products for delivery

Customization
-------------

.. cards::

   .. card:: Custom routes
      :target: daily_operations/use_routes

      Define tailored receiving or delivery workflows to meet specific business needs

.. toctree::
   :titlesonly:

   daily_operations/use_routes
   daily_operations/receipts_delivery_one_step
   daily_operations/receipts_delivery_two_steps
   daily_operations/receipts_three_steps
   daily_operations/delivery_three_steps
   daily_operations/putaway
   daily_operations/storage_category
   daily_operations/cross_dock
   daily_operations/stock_warehouses
   daily_operations/owned_stock
   daily_operations/dropshipping
