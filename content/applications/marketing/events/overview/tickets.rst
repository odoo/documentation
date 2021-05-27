===============
Selling Tickets
===============

If you automate processes, you save time. If you give attendees multiple payment options to choose
from, you allow flexibility and open margins for more registrations to happen.

Configuration
=============

| Go to :menuselection:`Configuration --> Settings` and activate *Tickets* and *Online Ticketing*.
| *Tickets* allow tickets to be sold :ref:`events/create_event/through_sales_orders`. *Online
  Ticketing* allows the sale of tickets to happen :ref:`events/create_event/through_the_website`.

.. image:: media/registration_tickets_online.png
   :align: center
   :alt: View of the settings page for Odoo Events

.. _events/create_event/through_sales_orders:

Through Sales Orders
--------------------

On the *Sales* application, choose the event product you created and add it as a product line. A
window pops-up, allowing you to choose the event for which you want to create the sales order.

.. image:: media/ticket_sales_order.png
   :align: center
   :alt: View of a sales order and the option to choose the event as the product line in Odoo Events

.. important::
   Remember to create a product form for the event registration, under *Product*, in the *Sales*
   application, and to add that same product under your event’s form.

   .. image:: media/tickets_product.png
      :align: center
      :alt: View of an event form highlighting the column product under the tab tickets in Odoo
            Events

.. _events/create_event/through_the_website:

Through the Website
-------------------

On the website, once tickets are added to the cart, the user can continue the transaction choosing
among the payment methods you chose to have available.

.. image:: media/website_ticket_transaction.png
   :align: center
   :alt: View of website transaction for Odoo Events

.. seealso::
   - :doc:`/applications/general/payment_acquirers`
