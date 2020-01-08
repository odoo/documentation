=====================================
Organize a cross-dock in a warehouse
=====================================

Cross-docking is the process of sending products that are received directly to the customers, without making them enter the stock. The trucks are simply unloaded in a *Cross-Dock* area in order to reorganize products and load another truck.

.. image:: media/cross1.png
   :align: center

.. note::
   For more information on how to organize your warehouse, read our blog: `What is cross-docking and is it for me? <https://www.odoo.com/blog/business-hacks-1/post/what-is-cross-docking-and-is-it-for-me-270>`__

Configuration
==============

In the *Inventory* app, open :menuselection:`Configuration --> Settings` and activate the *Multi-Step Routes*.

.. image:: media/cross2.png
   :align: center

.. note::
   Doing so will also enable the *Storage Locations* feature.

Now, both *Incoming* and *Outgoing* shipments should be configured to work with 2 steps. To adapt
the configuration, go to :menuselection:`Inventory --> Configuration --> Warehouses` and edit your
warehouse.

.. image:: media/cross3.png
   :align: center

This modification will lead to the creation of a *Cross-Docking* route that can be found in
:menuselection:`Inventory --> Configuration --> Routes`.

.. image:: media/cross4.png
   :align: center

Configure products with Cross-Dock Route
=========================================

Create the product that uses the *Cross-Dock Route* and then, in the inventory tab, select the routes *Buy* and *Cross-Dock*. Now, in the purchase tab, specify the vendor to who you buy the product and set a price for it.

.. image:: media/cross5.png
   :align: center

.. image:: media/cross6.png
   :align: center

Once done, create a sale order for the product and confirm it. Odoo will automatically create two transfers which will be linked to the sale order. The first one is the transfer from the *Input Location* to the *Output Location*, corresponding to the move of the product in the *Cross-Dock* area. The second one is the delivery order from the *Output Location* to your *Customer Location. Both are in state *Waiting Another Operation* because we still need to order the product to our supplier.

.. image:: media/cross7.png
   :align: center

.. image:: media/cross8.png
   :align: center

Now, go to the *Purchase* app. There, you will find the purchase order that has been automatically triggered by the system. Validate it and receive the products in the *Input Location*.

.. image:: media/cross9.png
   :align: center

.. image:: media/cross10.png
   :align: center

When the products have been received from the supplier, you can go back to your initial sale order and validate the internal transfer from *Input* to *Output*.

.. image:: media/cross11.png
   :align: center

.. image:: media/cross12.png
   :align: center

The delivery order is now ready to be processed and can be validated too.

.. image:: media/cross13.png
   :align: center

.. image:: media/cross14.png
   :align: center
