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

In some cases, like for a retail shop storing vegetables and fruits, we have to store products in different locations to maintain product quality. 

Let’s suppose there are one warehouse location *WH/Stock* and two sub-locations *WH/Stock/Vegetables* and *WH/Stock/Fruits*.

To manage those locations, we will create putaway rules. To do so, open the *Inventory* app and go
to :menuselection:`Configuration --> Putaway Rules`. Then, click on create and configure your first
rule indicating the main location the product will enter before being redirected to the right
location.

.. note::
   The putaway rules can be defined either per product or per product category.

.. image:: putaway/putaw2.png
   :align: center

Now, if I purchase apples and carrots to my supplier, they will be grouped in the same receipt but redirected to the right location automatically, thanks to putaway rules. This information is available from *Inventory Report*, under the reporting menu.

.. image:: putaway/putaw3.png
   :align: center

.. image:: putaway/putaw4.png
   :align: center

.. image:: putaway/putaw5.png
   :align: center
