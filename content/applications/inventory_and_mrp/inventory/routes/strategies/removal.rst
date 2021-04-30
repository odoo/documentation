==================================================
What is a removal strategy (FIFO, LIFO, and FEFO)?
==================================================

Overview
========

Removal strategies are usually in picking operations to select the best
products in order to optimize the distance for the worker, for quality
control purpose or due to reason of product expiration.

When a product movement needs to be done, Odoo will find available
products that can be assigned to shipping. The way Odoo assign these
products depend on the **removal strategy** that is defined on the **product 
category** or on the **location**.

Configuration
=============

In the **Inventory** application, go to :menuselection:`Configuration
--> Settings`:

.. image:: media/removal01.png
    :align: center

.. image:: media/removal02.png
    :align: center

Check **Track lots or serial numbers**, **Manage several location per
warehouse** and **Advanced routing of products using rules**, then click
on **Apply**.

Then, open :menuselection:`Configuration --> Locations` 
and open the location on which you want to apply a removal strategy.

.. image:: media/removal03.png
    :align: center

Types of removal strategy
=========================

FIFO ( First In First Out )
---------------------------

A **First In First Out** strategy implies that the products that were
stocked first will move out first. Companies should use FIFO method if
they are selling perishable goods. Companies selling products with
relatively short demand cycles, such as clothes, also may have to pick
FIFO to ensure they are not stuck with outdated styles in inventory.

Go to :menuselection:`Inventory --> Configuration --> Locations`, 
open the stock location and set **FIFO** removal strategy.

Let's take one example of FIFO removal strategy.

In your warehouse stock (``WH/Stock``) location, there are ``3`` lots of ``iPod
32 Gb`` available.

You can find details of available inventory in inventory valuation
report.

.. image:: media/removal04.png
    :align: center

Create one sales order ``25`` unit of ``iPod 32 GB`` and confirm it.

You can see in the outgoing shipment product that the ``Ipod 32
Gb`` are assigned with the **oldest** lots, using the FIFO removal
strategy.

.. image:: media/removal05.png
    :align: center

LIFO (Last In First Out)
------------------------

In this warehouse management, the products which are brought in the
last, moves out the first. LIFO is used in case of products which do not
have a shelf life.

Go to :menuselection:`Inventory --> Configuration --> Locations`, 
open the stock location and set **LIFO** removal strategy.

In our example, let's check the current available stock of ``Ipod 32 Gb``
on ``WH/Stock`` location.

.. image:: media/removal06.png
    :align: center

Create a sale order with ``10`` units of ``Ipod 32 Gb``.

You can see in the outgoing shipment product that the ``Ipod 32
Gb`` are assigned with the **newest** lots, using the LIFO removal
strategy.

.. image:: media/removal07.png
    :align: center

FEFO ( First Expiry First Out ) 
--------------------------------

In FEFO warehouse management, the products are dispatched from the
warehouse according to their expiration date.

Go to :menuselection:`Inventory --> Configuration --> Setting`. 
Check the option **Define Expiration date on serial numbers**. 
Then click on **Apply** to save changes.

.. image:: media/removal08.png
    :align: center

This will allow you to set four expiration fields for each lot or serial number: 
**best before date**, **end of life date**, **alert date** and **removal date**.
These dates can be set from :menuselection:`Inventory Control --> Serial Numbers/Lots`.

.. image:: media/removal09.png
    :align: center

-   **Best Before Date**: This is the date on which the goods with this
    serial/lot number start deteriorating, without being dangerous yet.

-   **End of Life Date:** This is the date on which the goods with this
    serial/lot number may become dangerous and must not be consumed.

-   **Removal Date:** This is the date on which the goods with this
    serial/lot number should be removed from the stock. Using the FEFO
    removal strategy goods are picked for delivery orders using this date.

-   **Alert Date:** This is the date on which an alert should be sent
    about the goods with this serial/lot number.

Lots will be picked based on their **removal date**, from earliest 
to latest. Lots without a removal date defined will be picked after 
lots with removal dates.

All dates except **removal date** are for informational and reporting purposes only. 
Lots that are past any or all of the above expiration dates may still be picked 
for delivery orders, and no alerts will be sent when lots pass their **alert date**.

Expiration dates on lots can also be set automatically when goods are received into stock.
After enabling expiration dates on serial numbers, four new fields will become available 
in the inventory tab of the product form: **product life time**, **product use time**, 
**product removal time**, and **product alert time**. When an integer is entered into one 
of these fields, the expiration date of a lot/serial of the product in question will be set 
to the creation date of the lot/serial number plus the number of days entered in the time
increment field. If the time increment field is set to zero, then the expiration date of 
a lot/serial must be defined manually after the lot has been created.

Each of these time increment fields is used to generate one of the lot expiration date fields as follows:

Product Use Time --> Best Before Date

Product Removal Time --> Removal Date

Product Life Time --> End of Life Date

Product Alert Time --> Alert Date

To set the removal strategy on location, go to 
:menuselection:`Configuration --> Locations` and choose FEFO.

.. image:: media/removal10.png
    :align: center

Let's take an example, there are ``3`` lots of ``ice cream`` available in
``WH/Stock`` location: ``LOT0001``, ``LOT0002``, ``LOT0003`` with 
different expiration date.

+-----------------------+---------------+-----------------------+
| **Lot / Serial No**   | **Product**   | **Expiration Date**   |
+=======================+===============+=======================+
| LOT0001               | Ice Cream     | 08/20/2015            |
+-----------------------+---------------+-----------------------+
| LOT0002               | Ice Cream     | 08/10/2015            |
+-----------------------+---------------+-----------------------+
| LOT0003               | Ice Cream     | 08/15/2015            |
+-----------------------+---------------+-----------------------+

We will create a sale order with ``15kg`` of ``ice cream`` and confirm it.

The outgoing shipment related to sale order will make the move based on
removal strategy **FEFO**.

It will take ``10kg`` from ``LOT0002`` and ``5kg`` from ``LOT0003`` based on the
removal dates.

.. image:: media/removal11.png
    :align: center

.. seealso::

    * :doc:`../../management/reporting/valuation_methods_continental`
    * :doc:`../../management/reporting/valuation_methods_anglo_saxon`
