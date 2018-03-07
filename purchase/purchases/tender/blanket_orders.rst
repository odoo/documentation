=====================
Manage Blanket Orders
=====================

A Blanket Order is a purchase order which a customer places with its
supplier to allow multiple delivery dates over a period of time, often
negotiated to take advantage of predetermined pricing.

Configuration
=============

For this feature to work, go to :menuselection:`Purchases -->
Configuration --> Settings` and activate the *Purchase Agreements*
feature

.. image:: media/blanket_orders01.png
    :align: center

Start a Blanket Order
=====================

To use this feature go to :menuselection:`Purchases --> Purchase Agreements`.

Once you are creating the purchase agreement, access the *Agreement
Type* drop down menu and select *Blanket Order*.

.. image:: media/blanket_orders02.png
    :align: center

You can then create your new blanket order, select your vendor, the
product(s), agreement deadline, ordering date and delivery date.

When you are satisfied with your purchase agreement, confirm it. Its
status will change from*Draft* to *Ongoing* and a new
*RFQs/Orders* will appear in the top right corner of the document.

.. image:: media/blanket_orders03.png
    :align: center

RFQ from the Blanket Order
--------------------------

From your blanket order you can create a new quotation, Odoo will
auto-fill the document with the product(s) from your blanket order, you
only have to choose the quantity and confirm the order.

When you will go back on the blanket order, you will see how many
quantities you have already ordered from your blanket order.

Vendors prices on your product
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When a blanket order is validated, a new vendor line is added in your
product. You can see which one are linked to a blanket order and give
priority to the ones you want with the arrows on the left of the vendor
name.

Thanks to this, a blanket order can be used for automated replenishment
(using *reordering rules* or *made to order* configuration).

.. image:: media/blanket_orders04.png
    :align: center

.. tip::
    You can also create a *Request for Quotation* from the classic RFQ
    Menu and link them with an existing *Blanket Order*
