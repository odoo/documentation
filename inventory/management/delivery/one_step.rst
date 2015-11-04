======================================================
How to process delivery orders in one step (shipping)?
======================================================

Overview
========

When an order goes to the shipping department for final delivery, Odoo
is set up by default to utilize a one-step operation: once all goods are
available, they are able to be shipped in a single delivery order.

Configuration
=============

There is no configuration needed. The default outgoing shipments are
configured to be directly delivered from the stock.

However, if **advance routes** is activated and you set another shipping
configuration on your warehouse, you can set it back to the one-step
delivery configuration. Go to :menuselection:`Configuration --> Warehouses` 
and edit the concerned warehouse.

Set the outgoing shippings the option to **Ship directly from stock
(Ship Only)**

.. image:: media/one_step01.png
   :align: center

Create a Sales Order
====================

Create a sales order (From quotation to sales order) with some products
to deliver.

Notice that we now see ``1`` delivery associated with this sales order
in the **stat button** above the sales order.

.. image:: media/one_step03.png
   :align: center

If you click on the **1 Delivery** stat button, you should now see your
picking.

Process a Delivery
==================

Go to **Inventory** and click on the **# TO DO** link under the
**Delivery Orders** kanban card.

.. image:: media/one_step02.png
   :align: center

Click on the picking that you want to process.

Click on **Validate** to complete the move from **WH/Output** to the
**customer**.

This has completed the **Shipping Step** and the WH/OUT should now show
**Done** in the status column at the top of the page, which means the
product has been shipped to the customer.


.. todo::
    Ajouter un lien vers ces pages quand elles existeront
    -  Process Overview: From sales orders to delivery orders

    -  Process Overview: From purchase orders to receptions