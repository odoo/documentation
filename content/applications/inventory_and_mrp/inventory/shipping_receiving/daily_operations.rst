:show-content:
:hide-page-toc:

==========================
Inbound and outbound flows
==========================

Configuring inbound and outbound flows in Odoo is key to optimizing efficiency, traceability, and
cost. Warehouse managers must balance speed and control, choosing between a streamlined process or
added checkpoints.

Odoo offers one-step, two-step, and three-step flows, with more steps providing greater control but
increasing operations. The best setup depends on quality checks, packaging, and warehouse size.

This guide helps businesses determine the most suitable configuration.

One-step flow
=============

The *one-step inventory flow* is the simplest option, with minimal handling steps and the least
traceability. In this setup, products move directly from vendors to stock or from stock to
customers, with Odoo only tracking when items enter or leave the warehouse. This makes it ideal for
businesses with high-volume, low-risk products or fast-moving operations where additional validation
steps aren’t necessary.

- **Receiving**: Products go directly into stock.
- **Shipping**: Products ship directly from stock.
- **Best for**: Small warehouses, low stock levels, and non-perishable items, where minimal
  processing is needed before products are stored or shipped.

.. seealso::
   :doc:`daily_operations/receipts_delivery_one_step`

Two-step flow
=============

A *two-step flow* adds an input or output area for processing products before storage or shipment.
Incoming goods can be unboxed and inspected before shelving, while outgoing shipments are sorted and
consolidated before dispatch. This setup improves efficiency by assigning storage teams to picking
and stocking, while dedicated teams handle unboxing, (possibly) packing, and final verification to
reduce order fulfillment errors.

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

A three-step flow builds on the two-step process by adding a quality check and packing area,
enforcing stricter processes and improving oversight.

.. important::
   While this setup enhances process control, separating picking and packing requires validation at
   each step. If the same person handles both, it may cause redundancy and slow operations.

   Quality checks and packing do not require a three-step flow. Enable :doc:`quality control points
   <../../quality/quality_management/quality_control_points>` separately or activate the
   :ref:`Packages feature <inventory/warehouses_storage/enable-package>` in Odoo to incorporate
   these processes without adding extra transfer steps.

- **Receiving**: Products follow a structured process: *input area* → *quality control* → *stock*.
- **Shipping**: Products are *picked*, *packed*, and then *shipped*, ensuring proper handling and
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

To organize and store products efficiently, use:

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

Tailor the outgoing shipment process to fit the business needs. Picking methods and removal
strategies control how products are reserved for orders, while dropshipping determines how they
move. Configuring these options in Odoo ensures visibility into product movement and confirms that
items reach customers efficiently.

.. cards::

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

Odoo's flexible framework enables businesses to tailor workflows to match specific operational
needs.

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
   daily_operations/stock_warehouses
   daily_operations/owned_stock
   daily_operations/dropshipping
