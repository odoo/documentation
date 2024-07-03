==================================
Managing products in Field Service
==================================

When field service workers perform on-site, they commonly use products for the service. Odoo’s
**Field Service** app allows them to record the products they’re using. Doing so keeps your
inventory up-to-date in real-time and automatically adds these products to the invoice.

Add products to a task
======================

#. Go to :guilabel:`Field Service`
#. Select a task
#. Click the :guilabel:`Products` Smart Button
#. Click a product card to add it to your task. You can click anywhere on the card to add the
   product.
#. If needed, add more products or remove some using the :guilabel:`-` and :guilabel:`+` buttons

Going back to your task, the smart button now displays the amount of products you added and the
price.

Create an invoice from a task
=============================

Recording the products used to perform a field service allows you to easily create and send an
invoice right from its related task.

When the field service work is complete and you've added the products used to the task, click
:guilabel:`Mark As Done`. This will make the :guilabel:`Create Invoice` button appear; click on it
and select the type of invoice you want to create:

 - Regular Invoice
 - Down payment (percentage)
 - Down payment (fixed amount)

A draft of your invoice opens for you to review and make adjustments if needed. By clicking
:guilabel:`Preview`, you can view your invoice draft formatted for PDF or print, just like your
customer will receive it. When you’re invoice is ready, click :guilabel:`Confirm`, then click
:guilabel:`Send & Print` to send your invoice to your customer.

.. note::
  Along with the used products, time sheets are typically required in field service work and
  therefore may need to be part of an invoice. Find out more about `time sheets in Odoo
  <https://www.youtube.com/watch?v=OTT15neTSrk>`_.
