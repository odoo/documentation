==================================================
What is a Removal Strategy (FIFO, LIFO, and FEFO)?
==================================================

Usually, *Removal Strategies* are defined in picking operations to select the best products to 
optimize the distance for the worker, for quality control purposes, or to first move the products 
with the closest expiration date.

When a product movement needs to be done, Odoo finds available products that can be assigned to 
the transfer. The way Odoo assigns these products depends on the *Removal Strategy* defined in 
the *Product Category* or on the *Location*.

What happens inside the warehouse?
==================================

Imagine a generic warehouse plan, with receiving docks and area, storage locations, picking and 
packing areas, and shipping docks. All products go through all these locations, but some rules, 
such as removal strategies, can have an effect on which products are taken for the pickings.

.. image:: removal/empty-dock.png
   :align: center
   :alt: empty stock waiting for deliveries at the docks.

Here, vendor trucks unload pallets of goods at the docks. Then, operators scan the products in the 
receiving area, with the receiving date and, if the product has an expiration date, the expiration 
date. After that, products are stored in their respective locations.

.. image:: removal/entering-stocks.png
   :align: center
   :alt: products entering stock via the receiving area.

Next, several orders for the same product are made, but you didn’t receive the goods the same day 
and they don’t have the same expiration date. In that situation, you logically prefer sending those 
with the closest date first. Depending on the removal strategy you chose, Odoo generates a transfer 
with the products fitting your settings the best.

.. image:: removal/packing-products.png
   :align: center
   :alt: products being packed at packing area for delivery, taking expiration dates into account.

.. note::
   On the transfer form, you can find the product’s lot/serial number to pick for delivery.

How does it work?
=================

First In, First Out (FIFO)
--------------------------

When using a **First In, First Out** strategy, a demand for some products triggers a removal rule 
which requests a transfer for the lot/serial number that has entered your stock the first.

To be clearer, let’s imagine that you have three lots of nails in your warehouse. Those three have 
the following lot numbers: 00001, 00002, 00003, each with 5 nails boxes in it. 00001 entered the 
stock on the 23rd of May, 00002 on the 25th of May, and 00003 on the 1st of June. A customer orders 
you 6 boxes on the 11th of June. With the *FIFO* strategy selected, a transfer is requested for the 
five boxes of 00001 and one of the boxes in 00002 because 00001 has entered your stock before the 
others. The box from 00002 is taken because it has the oldest enter date after 00001.

So, for every order of a product with the *FIFO* strategy selected, Odoo requests a transfer for the 
good that has been in your stock for the longest period.

Last In, First Out (LIFO)
-------------------------

The same way as for FIFO, the **Last In, First Out** strategy is based on moving products based on the 
date they entered the stock. Here, a demand for some products triggers a removal rule that requests a 
transfer for the lot/serial number that has entered your stock the last.

To better understand, let’s imagine three lots of screws in your warehouse. Those three have the 
following numbers: 10001, 10002, 10003, each with 10 screw boxes in it. 10001 has entered the stock 
on the 1st of June, 10002 on the 3rd of June, and 10003 on the 6th of June. A customer orders 
7 boxes on the 8th of June. With the *LIFO* strategy selected, a transfer is requested for seven 
boxes of 10003 because that lot is the last one to have entered the stock.

So, basically, for every order of a product with the *LIFO* strategy used, a transfer for the last 
one to have entered the stock is requested.

.. note::
   This strategy is banned in many countries and can lead to only have old or obsolete products 
   in your stock.

First Expire, First Out (FEFO)
------------------------------

The **First Expire, First Out** strategy is a bit different from the two others. Here, it is the 
expiration date that is important and not the date the product entered the stock.

Let’s imagine three lots of 6-eggs boxes (in this specific case, don’t forget to use 
:doc:`units of measure <../../management/products/uom>`). Those three have the following numbers: 
20001, 20002, and 20003, each with 5 boxes in it. 20001 has entered the stock on the 1st of July 
and expires on the 15th of July, 20002 on the 2nd and expires on the 14th of July, and 20003 on 
the 4th and expires on the 21st of July. A customer orders 6 boxes on the 5th of July. With the 
*FEFO* strategy selected, a transfer is requested for the five boxes of 20002 and one from 20001. 
The transfer for all the boxes of the lot 20002 is because they have the closest expiration date. 
The transfer also requests one box from 20001 because it’s the lot that expires the sooner after 20002.

Then, you can remember that for every order of a product with the *FEFO* strategy, a transfer is 
requested for the product that has the nearest expiration date from the order date.

Use Removal Strategies
======================

To identify some units from other ones, you need to track them, either by *lot* or by *serial number*. 
To do so, go to :menuselection:`Configuration --> Settings`. Then, activate *Storage Location*, 
*Multi-Steps Routes*, and *Lots & Serial Numbers*.

.. image:: removal/enabled-features.png
   :align: center
   :alt: features to enable in order to properly use removal strategies.

.. note::
   To work with the *FEFO* strategy, activate the *Expiration Dates* feature.

Next, you need to define your removal strategy, on *Product Categories* via 
:menuselection:`Inventory --> Configuration --> Product Categories`.

.. image:: removal/first-in-first-out.png
   :align: center
   :alt: force removal strategy set up as first in first out.

FIFO (First In, First Out)
--------------------------

As said, a *FIFO* strategy implies that products stocked first move out first. Companies should use 
that method if they are selling products with short demand cycles, such as clothes, and to ensure 
they are not stuck with outdated styles in stock.

For this example, we created three lots of white shirts. Those are from the All/Clothes category, 
where we put *FIFO* as the removal strategy. In our stock location (WH/Stock), we now find the 
three lots available.

.. image:: removal/inventory-valuation.png
   :align: center
   :alt: view of the white shirt lots inventory valuation.

The lot 000001 contains 5 shirts, 000002 contains 3 shirts, and 000003 contains 2. As it can be 
seen above, 000001 has entered the stock first. Let’s create a sale order of six white shirts 
to check that products from that lot are the first ones to move out.

On the delivery order linked to the picking, you can see that the oldest lot numbers have been 
reserved thanks to the *FIFO* strategy.

.. image:: removal/reserved-lots-FIFO.png
   :align: center
   :alt: two lots being reserved for sell with the FIFO strategy.

LIFO (Last In, First Out)
-------------------------

With a *LIFO* strategy, that’s quite the opposite. In fact, the products that are brought the 
last move out the first. It is mostly used in case of products without a shelf life.

Even if our white shirts are clothes, we can say that they are timeless. So, let’s use them to 
test our *LIFO* strategy. Once again, open the product category via :menuselection:`Inventory 
--> Configuration --> Product Categories` and change the removal strategy to *LIFO*.

.. image:: removal/last-in-first-out.png
   :align: center
   :alt: last in first out strategy set up as forced removal strategy.

Now, create a sale order for 4 white shirts and check that the reserved products are from lots 
000003 and 000002.

.. image:: removal/reserved-lots-LIFO.png
   :align: center
   :alt: two lots being reserved for sell with the LIFO strategy.

.. important::
   Don’t forget that the *LIFO* strategy is banned in many countries!

FEFO (First Expiry, First Out)
------------------------------

With the *FEFO* strategy, the way products are picked is not based on the reception date. In this 
particular case, they are dispatched according to their expiration date.

.. note::
   To have more information about Expiration date, please have a look at 
   :doc:`the related doc <../../management/lots_serial_numbers/expiration_dates>`.

By activating *Expiration Dates*, it becomes possible to define different dates on the serial/lot 
numbers to be used in *FEFO*. These dates can be set by going to :menuselection:`Inventory --> 
Master Data --> Lots/Serial Numbers`.

.. image:: removal/removal-date.png
   :align: center
   :alt: view of the removal date for 0000001.

Lots are picked based on their removal date, from earliest to latest. Lots without a removal date 
defined are picked after lots with removal dates.

.. note::
   Other dates are for informational and reporting purposes only. If not removed from the stock, 
   lots that are past the expiration dates may still be picked for delivery orders!

To use the *FEFO* strategy, once again go to :menuselection:`Inventory --> Configuration --> 
Product Categories` and choose *FEFO* as the *Force Removal Strategy*.

.. image:: removal/first-expiry-first-out.png
   :align: center
   :alt: view of the FEFO strategy being set up as forced removal strategy.

For this particular case, let’s use hand cream. As usual, we have three lots of them.

+-----------------------+---------------+-----------------------+
| **Lot / Serial No**   | **Product**   | **Expiration Date**   |
+=======================+===============+=======================+
| 0000001               | Hand Cream    | 09/30/2019            |
+-----------------------+---------------+-----------------------+
| 0000002               | Hand Cream    | 11/30/2019            |
+-----------------------+---------------+-----------------------+
| 0000003               | Hand Cream    | 10/31/2019            |
+-----------------------+---------------+-----------------------+

When we realize a sale for 25 units of Hand Cream, we can see that the lot numbers which have been 
automatically reserved by Odoo are the ones with the closest expiration date, meaning 0000001 and 
0000003.

.. image:: removal/reserved-hand-cream.png
   :align: center
   :alt: two hand cream lots reserved for sell with the FEFO strategy.