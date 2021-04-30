================================================
How to choose the right flow to handle receipts?
================================================

Overview
========

Depending on factors such as the type of items you receive, the size of
your warehouse, the number of receipt you register everyday... the way you
handle receipts to your customers can vary a lot.

Odoo allows you to handle receipts from your warehouse in 3 different
ways:

-  **One step**: Receive goods directly in stock.

-  **Two steps**: Unload in input location then go to stock.

-  **Three steps**: Unload in input location, go through a quality control
   before being admitted in stock.

Odoo uses **routes** to define exactly how you will handle the different
receipt steps. The configuration is done at the level of the warehouse.
In standard, the reception is a one step process, but changing the
configuration can allow to have 2 or even 3 steps.

The principles are the following:

1. **One step**: You receive the goods directly in your stock.

2. **Two steps**: You receive the goods in an input area then transfer them
   from input area to your stock. As long as the goods are not
   transferred in your stock, they will not be available for further
   processing.

3. **Three steps**: In many companies, it is necessary to assess the
   received good. The goal is to check that the products
   correspond to the quality requirements agreed with the
   suppliers. Adding a quality control step in the goods receipt
   process can become essential.
   
   You receive the goods in an input area, then transfer them into
   quality area for quality control. When your quality check
   process finishes then you can move the goods from QC to stock.
   Of course, you may change the quantity and only transfer to
   Stock the quantity that is valid and decide that you will
   return the quantity that is not good.

Configuration
=============

One step flow
-------------

This is the default configuration in Odoo.

Two steps flow
--------------

Please read documentation on :doc:`two_steps`

Three steps flow
----------------

Please read documentation on :doc:`three_steps`

.. seealso::
    * :doc:`../delivery/inventory_flow`

.. todo::
    Add section when available
    -  How to analyse the performance of my vendors?