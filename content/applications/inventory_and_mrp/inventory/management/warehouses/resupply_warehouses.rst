===============================
Resupply from another Warehouse
===============================

A common use case for multiple warehouses is to have one central warehouse that
resupplies shops, each shop is considered as a local warehouse. When a shop want 
to replenish a product, this product is ordered to the central stock.
Odoo allows you to set easily which warehouse(s) can resupply a warehouse.

Configuration
=============

In order to be able to resupply from another warehouse, you need to
activate *multi-step routes*.

.. image:: resupply_warehouses/virtual-warehouses-settings.png
   :align: center
   :alt: Enable Multi-Step Routes in an Odoo database's settings

You can then access your warehouses via :menuselection:`Inventory --> Configuration -->
Warehouses`.
Open the warehouse which should be resupplied by the another one. You will
have the possibility to directly indicate through which warehouse(s) it
can be resupplied.

.. image:: resupply_warehouses/virtual_warehouses_02.png
   :align: center

By activating this option, a new route will now be available on your
products *Supply Product from Second warehouse*. It can now be
selected, along with either a *reordering rule* or a *make to
order*.

.. image:: resupply_warehouses/virtual_warehouses_03.png
   :align: center

In this example, a reordering rule is set with a minimum of 5 units
in stock and a maximum of 10 units in stock, having currently 0 units on
hand.

The system automatically creates two pickings, one *delivery order*
from my Second Warehouse which contains the necessary products, and a
receipt in my main warehouse WH/Stock for the same products. The source
document is the *reordering rule* which triggered the route *Supply
Product from Second warehouse*. 
The location between the delivery and the receipt is a transit location.

.. image:: resupply_warehouses/virtual_warehouses_05.png
   :align: center

.. image:: resupply_warehouses/virtual_warehouses_06.png
   :align: center

.. image:: resupply_warehouses/virtual_warehouses_07.png
   :align: center
