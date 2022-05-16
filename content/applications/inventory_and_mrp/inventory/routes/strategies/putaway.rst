========================
What is a Putaway Rule?
========================

A good warehouse implementation takes care that products automatically move to their appropriate destination location. To make that process easier, Odoo uses *Putaway rules*. But what is a putaway rule? Putaway is the process of taking products off the receiving shipments and directly putting them into the most appropriate location.

If, for example, a warehouse contains volatile substances, it is important to make sure that certain products are not stored close to each other because of a potential chemical reaction. That’s where putaway rules intervene, to avoid storing products wrongly.

Configuration
==============

In the *Inventory* app, go to :menuselection:`Configuration --> Settings` and activate the
*Multi-Step Routes*. By doing so, the *Storage Locations* will be automatically activated.

.. image:: putaway/putaw1.png
   :align: center

Setting up a Putaway Rule
==========================

In some cases, like for a retail shop storing vegetables and fruits, we have to store products in different locations depending on several factors like
frequency, size, product category, need to be in specific environment etc...

Let’s suppose there are one warehouse location *WH/Stock* with following sub-locations:
- WH/Stock/Pallets
-- WH/Stock/Pallets/PAL1
-- WH/Stock/Pallets/PAL2
-- WH/Stock/Pallets/PAL3
- WH/Stock/Shelf 1
- WH/Stock/Shelf 2
-- WH/Stock/Shelf 2/Small Refrigerator
- WH/Stock/Shelf 3

To manage those locations, we will create putaway rules. To do so, open the *Inventory* app and go
to :menuselection:`Configuration --> Putaway Rules`. Then, click on create and configure your first
rule indicating the main location the product will enter before being redirected to the right
location.

.. important::
   The putaway rules can be defined either per product/product category and or Package Type (Packages setting must be enabled for that). 
   Putaway rules are read sequetially until a match is found.

.. image:: putaway/putaway-example.png
   :align: center

I the following exampple:
- If I receive water (category All/drinks), whatever the package, it will be redirected to WH/Stock/Shelf 2/Small Refrigerator
- If I receive orange juice cans in a box, it will be redirected to WH/Stock/Shelf 2
- If I receive water or apple juice in a box, it will be redirected to WH/Stock/Shelf 3
- If I receive a Pallet of Lemonade cans, it will be redirected to WH/Stock/pallets/PAL1

========================
Using Storage Categories
========================

A **Storage category** is an extra location attribute. It allows to define the quantity of products that can be stored
in the location and how the location will be selected with putaway rules.

Configuration
==============

In the *Inventory* app, go to :menuselection:`Configuration --> Settings` and activate the
*Storage Categories*. By doing so, the *Storage Locations* will be automatically activated.

Create a Storage Category
=========================

In the *Inventory* app go to :menuselection:`Configuration --> Storage Categories`. 
Hit *Create*.

.. image:: putaway/storage-category.png
   :align: center

Fill a name. You can limit the capacity by weight, by product or package type.
The *Allow New Product* define when the location is considered available to store
a product:
- If location is empty: a product can be added there only if the location is empty
- If products are the same: a product can be added there only if the same product is already there
- Allow mixed products: several different products can be stored in this location at the same time

Now we can link a storage category to a location. 

.. image:: putaway/location-storage-category.png
   :align: center
   
Storage Categories in putaway rules
===================================

Lets continue our example from above we applied our 'High Frequency Pallets' on locations
PAL1 and PAL2 and reworked the putaway rules as follows. 
Assume I receive 1 pallet of lemonade cans:
- if PAL1 and PAL2 are empty, the pallet will be redirected to Stock/pallets/PAL1
- if PAL1 is full, the pallet will be redirected to stock/pallets/PAL2
- if PAL1 and 2 are full, the pallet will be redirected to stock/Pallets

.. image:: putaway/smart-putaways.png
   :align: center
   
   
