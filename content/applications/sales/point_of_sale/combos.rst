==============
Product combos
==============

A product combo consists of a set of items known as combo choices and offers combination options at
a special price.

.. _pos/combos/choices:

Combo choices creation
======================

To create the combo choices that will be added to the product combo, follow the next steps:

#. Go to :menuselection:`Point of Sale --> Products --> Combo Choices` and click :guilabel:`New`.
#. Enter a name for the combo choice.
#. Set the maximum selectable items for the combo using the :guilabel:`Maximum items` field.
#. Set the number of items included in the combo using the :guilabel:`Includes free` field.
#. Click :guilabel:`Add a line` under the :guilabel:`Options` section to add items that constitute
   the combo choices.

.. note::
   - The :guilabel:`Combo Price` field automatically calculates and displays the price for an extra
     item based on the price of the least expensive item in the selection.
   - Defining an :guilabel:`Extra Price` for an item alters the price of the product combo. The
     :guilabel:`Extra Price` differs from the :guilabel:`Combo Price`.

.. image:: combos/combo-form.png
   :scale: 75%

.. _pos/combos/combo-creation:

Product combo creation
======================

To create a specific product to gather combo choices, follow the next steps:

#. Go to :menuselection:`Point of Sale --> Products --> Products` and click :guilabel:`New`.
#. Enter a product name.
#. Set the :guilabel:`Product Type` to :guilabel:`Combo` and select the relevant :guilabel:`Combo
   Choices`.
#. Add a :guilabel:`Sales Price`.
#. Optionally, click the :guilabel:`Point of Sale` tab to select the preferred :guilabel:`Category`.

.. note::
   The sales price of the combo product is fixed and does not vary based on the individual prices
   of included items or the quantity of items in the combo. The combo product price is only
   affected by the extra price optionally defined at the combo choice creation, or if a variant of
   one of the items has a specified extra price.

.. _pos/combos/application:

Practical application
=====================

To use combos, follow these steps:

#. Open the POS register.
#. Click the desired combo, and select the preferred items.
#. Click :guilabel:`Add to order`.
#. Continue with the order process.
