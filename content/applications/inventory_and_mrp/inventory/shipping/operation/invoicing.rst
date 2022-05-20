=================================================
How to invoice the shipping cost to the customer?
=================================================

Overview
========

There are two ways to invoice the shipping costs:

1.  Agree with the customer over a cost and seal it down in the sale
    order

2.  Invoice the real cost of the shipping.

Configuration
=============

To configure the price of your delivery methods, go to the **Inventory**
app, click on :menuselection:`Configuration --> Delivery --> Delivery Methods`.

You can manually set a price for the shipping: It can be fixed or based
on rules.

Or you can use the transportation company computation system. Read the
document :doc:`../setup/third_party_shipper`

How to invoice the shipping costs to the customer?
==================================================

Invoice the price set on the sale order
---------------------------------------

On your sale order, choose the carrier that will be used. Click on
**Delivery Method** to choose the right one.

.. image:: invoicing/invoicing06.png
   :align: center

The price is computed when you **save** the sale order or when you click on
**Set price**.

To invoice the price of the delivery charge on the sale order, click on
**Set price**, it will add a line with the name of the delivery method as
a product. It may vary from the real price.

When you create the invoice, it will take the price set on the sale
order.

.. image:: invoicing/invoicing01.png
   :align: center

Invoice the real shipping costs
-------------------------------

On your sale order, choose the carrier that will be used. Click on
**Delivery Method** to choose the right one.

.. image:: invoicing/invoicing05.png
   :align: center

The price is computed when you **save** the sale order. Confirm the sale
order and proceed to deliver the product.

The real shipping cost is computed when the delivery order is
validated, you can see the real cost in the chatter of the delivery order.

.. image:: invoicing/invoicing02.png
   :align: center

Go back to the sale order, the real cost is now added to the sale
order.

.. image:: invoicing/invoicing03.png
   :align: center

When you create the invoice, it will take the price computed by the
carrier.

.. image:: invoicing/invoicing04.png
   :align: center

.. note::
    If you split the delivery and make several ones, each delivery
    order will add a line to the sale order.

.. seealso::
    * :doc:`../setup/third_party_shipper`
    * :doc:`labels`
