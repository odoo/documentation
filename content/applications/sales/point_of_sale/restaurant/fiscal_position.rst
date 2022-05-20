=============================
Using fiscal positions in PoS
=============================

In Odoo, *Fiscal Positions* let you apply different taxes based on
the customer location. In a *Point of Sale*, such as a restaurant, it can
be used to apply different taxes depending if the customer eats in or
takes away.

Set up fiscal positions for PoS
===============================

To enable this feature, go to :menuselection:`Point of Sale --> Configuration --> Point of Sale` 
and check *Fiscal Position per Order*. Now, you can choose the fiscal positions
you want for your *PoS*.

.. image:: fiscal_position/fiscal_position_01.png
    :align: center

.. note::
   You need to create your fiscal positions before using this feature.

Using fiscal positions
======================

Once on your *PoS* interface, click on the *Tax* button.
Now, choose the fiscal position you need for the current order.

.. image:: fiscal_position/fiscal_position_02.png
    :align: center

Set up a default fiscal position
================================

If you want to use a default fiscal position, meaning that a preexisting value is always 
automatically assigned, go to :menuselection:`Point of Sale --> Configuration 
--> Point of Sale` and enable *Fiscal Position*. Now, choose one to set as the default one.

.. image:: fiscal_position/fiscal_position_03.png
    :align: center

.. note::
   Now, the *tax* button is replaced by a *on site* button when on the *PoS* interface.