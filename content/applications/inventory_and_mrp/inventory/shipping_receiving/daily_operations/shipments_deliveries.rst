======================================
Incoming shipments and delivery orders
======================================

In Odoo, there are many different ways to process receipts and deliveries for products moving in and
out of a warehouse.

A company's preferred method of receiving, or shipping, products depends on several factors, such as
the type of products stocked and sold, the size of the warehouse, the amount of receipts and
delivery orders processed daily, and so on.

Enabling the *Multi-Step Routes* feature in Odoo's *Inventory* app settings allows users to change
the manner in which receipts and deliveries are processed in the database.

.. seealso::
   - `Using Routes (eLearning Tutorial) <https://www.odoo.com/slides/slide/using-routes-1018>`_
   - `Push & Pull Rules (eLearning Tutorial)
     <https://www.odoo.com/slides/slide/push-pull-rules-5789>`_

The default incoming and outgoing routes in Odoo are set to receive and deliver goods in one step.
However, once the *Multi-Step Routes* feature is enabled, the incoming and outgoing routes can be
changed to either two steps or three steps.

.. note::
   To activate the *Multi-Step Routes* feature, navigate to :menuselection:`Inventory app -->
   Configuration --> Settings`. Under the :guilabel:`Warehouse` section, tick the checkbox next to
   :guilabel:`Multi-Step Routes`, and click :guilabel:`Save`.

   Doing so *also* enables the :guilabel:`Storage Locations` feature, if not already enabled.

Adding additional steps to receipts and deliveries moving in and out of the warehouse adds
additional operations that must be completed *before* a product is finally received or shipped.

These configurations vary, depending on the needs of the business. They also depend on any
requirements for the products stored, including the performance of quality control checks on
received products, or the use of special packaging on shipped products.

One-step flow
=============

The receiving and shipping rules for a one-step configuration are as follows:

- **Receipt**: receive products directly from vendors into stock. *No* intermediate steps between
  receipt and input to stock occur.
- **Shipping**: ship products directly from warehouse stock to customer. *No* intermediate steps
  occur before shipping.
- Can *only* be used if **not** using First In, First Out (FIFO), Last In, First Out (LIFO), or
  First Expired, First Out (FEFO) removal strategies.
- Items are received or shipped directly into/from stock.
- Suited for warehouses that require receipts and/or deliveries to be handled quickly.
- Recommended for small warehouses with low stock levels, and for non-perishable items.

.. seealso::
   :doc:`receipts_delivery_one_step`

Two-step flow
=============

The receiving and shipping rules for a two-step configuration are as follows:

- **Input + stock**: bring products to an input location *before* moving into stock. Products can be
  organized by different internal storage locations, such as various shelves, freezers, and locked
  areas, before being stocked in the warehouse.
- **Pick + ship**: bring products to an output location before shipping. Packages can be organized
  by different carriers, or moved to shipping docks before being shipped.
- Minimum requirement to use lot numbers, or serial numbers, to track products with a :abbr:`FIFO
  (First In, First Out)`, :abbr:`LIFO (Last In, First Out)`, or :abbr:`FEFO (First Expired, First
  Out)` removal strategy.
- Products received will not be available for manufacturing, shipping, etc., until they are
  transferred into warehouse stock.
- Recommended for larger warehouses with high stock levels, or when stocking large items (e.g.,
  mattresses, large furniture, heavy machinery, etc.).

.. seealso::
   :doc:`receipts_delivery_two_steps`

Three-step flow
===============

The receiving and shipping rules for a three-step configuration are as follows:

- **Input + quality + stock**: receive products at the input location, transfer them to a quality
  control area, and move the ones that pass inspection into stock.
- **Pick + pack + ship**: pick products according to their removal strategy, pack them in a
  dedicated packing area, and bring them to an output location for shipping.
- Can be used when tracking products by lot or serial numbers when using :abbr:`FIFO (First In,
  First Out)`, :abbr:`LIFO (Last In, First Out)`, or :abbr:`FEFO (First Expired, First Out)` removal
  strategy.
- Products received will not be available for manufacturing, shipping, etc., until they are
  transferred into stock.
- Required for any warehouse needing to perform quality control inspections before receiving items
  into stock.
- Recommended for very large warehouses with very high stock levels.

.. seealso::
   - :doc:`receipts_three_steps`
   - :doc:`delivery_three_steps`
