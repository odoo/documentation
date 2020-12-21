=================================================
Purchase in different unit of measures than sales
=================================================

In day-to-day business, it may happen that your supplier uses a
different unit of measure than you do in sales. This can cause confusion
between sales and purchase representative and even make you lose a lot
of time converting measures. Luckily in Odoo, you can handle different
units of measures between sales and purchase very easily.

Let's take the following examples:

1)  You buy water from a supplier. The supplier is american and sells his
    water in **Gallons**. Your customers however are European. You would
    thus like to see your purchases quantities expressed in **Gallons**
    and the sold quantities in **Liters**.

2)  You buy curtains from a supplier. The supplier sells you the curtains
    in the unit **roll** and you sell the curtains in **square meters**.

Configuration
=============

Install purchase and sales modules
----------------------------------

The first step is to make sure that the apps **Sales** and **Purchase** are
correctly installed.

+------------+------------+
|  |uom01|   |  |uom02|   |
+============+============+
+------------+------------+

Enable the Unit of Measures option
----------------------------------

Enter the purchase module, select :menuselection:`Configuration --> Settings` 
and tick the **Some products may be sold/purchased in different unit of measures
(advanced)** box.

.. image:: media/uom08.png
    :align: center

Specify sales and purchase unit of measures
-------------------------------------------

Standard units of measures
~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's take the classic units of measures existing in Odoo as first
example. Please remember that differents units of measures between sales
and purchase necessarily need to share the same category. Categories
include: **Unit**, **weight**, **working time**, **volume**, etc.

.. tip::
    It is possible to create your own category and unit of measure if 
    it is not standard in Odoo (see next chapter).

Let's assume we buy water from our vendors in **Gallons** and sell to our
customers in **Liters**.

We go into the purchase module select :menuselection:`Purchase --> Products`.

Create your own product or select an existing one. In the products
general information you have the possibility to select the **Unit of
measure** (will be used in sales, inventory,...) and the **Purchase Unit
of Measure** (for purchase).

In this case select **Liters** for **Unit of Measure** and **Gallons** for
**Purchase Unit of Measure**.

.. image:: media/uom05.png
    :align: center

Create your own unit of measure and unit of measure category
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's take now our second example (you buy curtains from a supplier, the
supplier sells you the curtains in the unit **roll** and you sell the
curtains in **square meters**).

The two measures are part of two different categories. Remember, you
cannot relate an existing measure from one category with an existing
measure of another category. We thus first have to create a shared
**Measure Category** where both units have a conversion relationship.

To do so, go into your sales module select 
:menuselection:`Configuration --> Products --> Unit of Measure`. 
Create a new unit of **Measure Category** by selecting
the dropdown list and clicking on create and edit (see picture below).

.. image:: media/uom03.png
    :align: center

Create a new unit of measure. In this case our category will be called
**Inter-Category-Computation**.

.. image:: media/uom06.png
    :align: center

The next step is to create the **Rolls** and **Square meter** units of
measure and to link them to the new category. To do so, go into your
purchase module select :menuselection:`Configuration --> Products --> Units of Measure`.

Create two new units:

-   The **Roll** unit who is part of the Inter-Category-Computation
    category and is the **Reference Unit type** (see picture below). The
    Reference Unit type is the measure set as a reference within the
    category. Meaning that other measures will be converted depending
    on this measure (ex: 1 roll = 10 square meters, 2 rolls = 20
    square meters, etc.).

.. image:: media/uom04.png
    :align: center

-   For the **Square Meter**, we will specify that ``1 Roll = 10 square meters``
    of curtain. It will thus be necessary to specify that as type,
    the square meter is bigger than the reference unit. The **Bigger
    Ratio** is ``10`` as ``one Roll = 10 square meters``.

.. image:: media/uom09.png
    :align: center

It is now possible to input **square meters** as Unit of measure and a
**Roll** as Purchase Unit of Measure in the product form.

.. image:: media/uom07.png
    :align: center

.. |uom01| image:: ./media/uom01.png
.. |uom02| image:: ./media/uom02.png
