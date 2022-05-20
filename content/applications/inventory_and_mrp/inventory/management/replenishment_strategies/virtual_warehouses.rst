===============================
Resupply from another Warehouse
===============================

Configuration
=============

In order to be able to resupply from another warehouse, you need to
activate \*multi-step routes\*.

.. image:: virtual_warehouses/virtual-warehouses-settings.png
   :align: center
   :alt: Enable Multi-Step Routes in an Odoo database's settings

You can then access your warehouses via :menuselection:`Inventory --> Configuration -->
Warehouses`.
Enter the warehouse which should be resupplied by another one. You will
have the possibility to directly indicate through which warehouse it
gets resupplied.

.. image:: virtual_warehouses/virtual_warehouses_02.png
   :align: center

By activating this option, a new route will now be available on your
products \*Supply Product from Second warehouse\*. It can now be
selected, along with either a \*reordering rule\* or a \*make to
order\*.

.. image:: virtual_warehouses/virtual_warehouses_03.png
   :align: center

For the demonstration, I set a reordering rule with a minimum of 5 units
in stock and a maximum of 10 units in stock, having currently 0 units on
hand. I will run the scheduler by going to :menuselection:`Inventory --> Operations -->
Run scheduler`.

.. image:: virtual_warehouses/virtual_warehouses_04.png
   :align: center

The system automatically creates two pickings, one \*delivery order\*
from my Second Warehouse which contains the necessary products, and a
receipt in my main warehouse WH/Stock for the same products. The source
document is the \*reordering rule\* which triggered the route \*Supply
Product from Second warehouse\*.

.. image:: virtual_warehouses/virtual_warehouses_05.png
   :align: center

.. image:: virtual_warehouses/virtual_warehouses_06.png
   :align: center

.. image:: virtual_warehouses/virtual_warehouses_07.png
   :align: center
