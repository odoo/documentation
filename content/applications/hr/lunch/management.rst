================
Lunch management
================

In Odoo's **Lunch** application, it is required to have someone manage the orders, vendors, and
products. In addition, someone must be responsible for the orders, and notifying employees when
their orders have arrived. This can be the same person.

Orders can be :ref:`cancelled <lunch/cancel>`, :ref:`sent to the vendor <lunch/send-orders>`,
:ref:`confirmed <lunch/confirm-orders>` upon arrival, and :ref:`employees can be notified
<lunch/notify>`, either from the :ref:`Today's Orders <lunch/todays-orders>` dashboard, or the
:ref:`Control Vendors <lunch/control_vendors>` dashboard.

To manage the **Lunch** app, users need the :guilabel:`Administrator` access rights for the
**Lunch** app (the other level, :guilabel:`User : Order your meal`, only allows users to order).
These can be set by navigating to the :menuselection:`Settings app` and selecting :guilabel:`Manage
Users`. Then, click on the desired user to view their access rights.

For more information on access rights, refer to the :doc:`Access rights
<../../general/users/access_rights/>` documentation.

.. note::
   Only users with administration rights are able to view the :guilabel:`Manager` and
   :guilabel:`Configuration` menus in the **Lunch** application.

.. _lunch/todays-orders:

Today's Orders
==============

To view and manage the orders for the day, navigate to :menuselection:`Lunch app --> Manager -->
Today's Orders`. All orders for the day are presented in a list view on the :guilabel:`Today's
Orders` dashboard, with a filter for :guilabel:`Today`, and grouped by :guilabel:`Vendor`, by
default.

The following information appears in the list:

- :guilabel:`Order Date`: the date the order was placed.
- :guilabel:`Vendor`: the vendor the product is being ordered from.
- :guilabel:`Product`: the specific product ordered.
- :guilabel:`Extras`: any extras selected for the product.
- :guilabel:`Notes`: any information needed to be sent to the vendor.
- :guilabel:`User`: the user who ordered the product.
- :guilabel:`Lunch Location`: where the product is set to be delivered.
- :guilabel:`Price`: the total price for the product, including all extras.
- :guilabel:`Status`: the current status of the product.
- :guilabel:`Company`: the company under which the order was placed. This only appears in a
  multi-company database.

The :guilabel:`Status` of each product is one of the following: :guilabel:`To Order` (orange, the
product was added to the user's cart but not ordered yet), :guilabel:`Ordered` (red),
:guilabel:`Sent` (blue), :guilabel:`Received` (green), or :guilabel:`Cancelled` (gray).

.. image:: management/today.png
   :alt: The Today's Orders list, grouped by vendor, with the Send Orders button and ordered
         products.

.. _lunch/cancel:

Cancel orders
-------------

Users can cancel their own orders from the :ref:`Order Your Lunch <lunch/cancel-one>` dashboard, as
long as the orders have not been sent to the vendor. **Lunch** managers can cancel any order that
has not been received yet.

To cancel an order from a vendor, individual products **must** be cancelled one at a time.

On the :guilabel:`Today's Orders` dashboard, a :icon:`fa-times` :guilabel:`Cancel` button is shown
at the far-right of each product line that can be cancelled (products with a :guilabel:`To Order`,
:guilabel:`Ordered`, or :guilabel:`Sent` status). Click the :icon:`fa-times` :guilabel:`Cancel`
button to cancel the order for that individual product. The amount paid for the product is credited
back to the user's lunch account.

To restore a cancelled order, click the :icon:`fa-undo` :guilabel:`Reset` button at the end of its
line. The product status changes back to :guilabel:`Ordered`.

.. _lunch/send-orders:

Send orders
-----------

The first step in managing the **Lunch** app is to send the orders to the vendors.

The :guilabel:`Send Orders` button appears next to the vendor's name and phone number when the
vendor has products with an :guilabel:`Ordered` status for the current day. Products with a
:guilabel:`To Order` status have not been paid for by the user, and are not sent.

How orders reach the vendor depends on the vendor's :ref:`Send Order By <lunch/orders>` setting:

- :guilabel:`Phone`: The manager responsible for sending orders **must** send the orders to the
  vendor, outside of the database (call, online order, etc.). Once orders have been placed with the
  vendor, click the :guilabel:`Send Orders` button.
- :guilabel:`Email`: The day's orders are automatically emailed to the vendor at the configured
  :guilabel:`Order Time`. To send them earlier, click the :guilabel:`Send Orders` button: the email
  is sent immediately.

Once sent, the :guilabel:`Send Orders` button changes to a :guilabel:`Confirm Orders` button, and
the :guilabel:`Status` column is updated from red :guilabel:`Ordered` tags to blue :guilabel:`Sent`
tags, indicating the order has been sent to the vendor. Users who have placed orders in the
**Lunch** app rely on the :guilabel:`Status` tags to track their orders.

.. _lunch/confirm-orders:

Confirm orders
--------------

After orders have been sent to the vendor, the next step is to confirm the orders after they have
been delivered.

On the :guilabel:`Today's Orders` dashboard, click the :guilabel:`Confirm Orders` button that
appears next to the vendor's name and phone number.

Once confirmed, the :guilabel:`Confirm Orders` button disappears, and the :guilabel:`Status` column
is updated from blue :guilabel:`Sent` tags to green :guilabel:`Received` tags, indicating the vendor
has delivered the orders.

In addition, the :icon:`fa-times` :guilabel:`Cancel` button at the end of each product line changes
to a :icon:`fa-envelope` :guilabel:`Send Notification` button.

If needed, instead of confirming all of the individual products from a vendor, individual products
can be confirmed one at a time. To confirm an individual product, click the :icon:`fa-check`
:guilabel:`Confirm` button at the end of the individual product line. When confirming individual
products with this method, the :guilabel:`Confirm Orders` button remains on the vendor line.

It is also possible to tick the checkbox of several product lines, and click the
:guilabel:`Receive` button that appears at the top of the list.

.. image:: management/confirm.png
   :alt: The Today's Orders list after sending the orders, with the Confirm Orders button, a
         received product, and sent products.

.. example::
   A vendor receives an order for three pizzas, and an order of garlic knots. When the delivery is
   made to the company, the **Lunch** manager notices the garlic knots are missing.

   The manager first marks the three pizzas as received, by individually confirming the products
   with the :icon:`fa-check` :guilabel:`Confirm`  button at the end of each product line.

   Later, when the vendor delivers the garlic knots, the manager can either click the
   :icon:`fa-check` :guilabel:`Confirm`  button at the end of the line for the garlic knots, or
   click the :guilabel:`Confirm Orders` button that appears next to the vendor's name and phone
   number.

.. _lunch/notify:

Notify employees
----------------

After products are received, and the orders are confirmed, the employees **must** be informed that
their orders have been delivered, and are ready to be picked up.

Unlike sending and confirming orders, notifications must be sent individually, and cannot be sent in
a batch.

To notify the user their product has arrived, click the :icon:`fa-envelope` :guilabel:`Send
Notification` button at the end of each product line. The user receives the :ref:`Reception
notification <lunch/settings>` message configured in the settings, in their **Discuss** inbox or by
email, depending on their notification preferences. Once the notification is sent, the button
disappears from the line.

.. _lunch/control_vendors:

Control Vendors
===============

All orders for all vendors, both past and present, can be found in the *Control Vendors* dashboard.
To access these records, navigate to :menuselection:`Lunch app --> Manager --> Control Vendors`.

All orders appear in a list view, grouped alphabetically by :guilabel:`Vendor`. The list loads with
all vendors expanded to show all order lines for every vendor, by default.

The following information appears in the list:

- :guilabel:`Order Date`: the date the order was placed.
- :guilabel:`Vendor`: the vendor the product is being ordered from.
- :guilabel:`Product`: the specific product ordered.
- :guilabel:`Extras`: any extras selected for the product.
- :guilabel:`Notes`: any information needed to be sent to the vendor.
- :guilabel:`User`: the user who ordered the product.
- :guilabel:`Lunch Location`: where the product is set to be delivered.
- :guilabel:`Price`: the total price for the product, including all extras.
- :guilabel:`Status`: the current status of the product.
- :guilabel:`Company`: the company under which the order was placed. This only appears in a
  multi-company database.

Orders can be :ref:`cancelled <lunch/cancel>`, :ref:`sent to the vendor <lunch/send-orders>`,
:ref:`confirmed <lunch/confirm-orders>` upon arrival, and :ref:`employees can be notified
<lunch/notify>` using the same method as on the :ref:`Today's Orders <lunch/todays-orders>`
dashboard.

.. image:: management/control.png
   :alt: The Control Vendors list, with the orders of every vendor grouped by vendor.

.. note::
   The difference between the :ref:`Today's Orders <lunch/todays-orders>` dashboard and the
   :ref:`Control Vendors <lunch/control_vendors>` dashboard is that the *Today's Orders* dashboard
   **only** displays orders for the current day, while the :guilabel:`Control Vendors` dashboard
   displays **all** orders made in the **Lunch** app.

.. seealso::
   - :doc:`../lunch`
   - :doc:`user-accounts`
