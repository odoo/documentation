===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`organizing the floors and tables <restaurant/floors>`;
- :ref:`taking orders <restaurant/orders>`;
- :ref:`communicating with the kitchen or bar through the POS <restaurant/orders-printing>`;
- :ref:`printing and splitting bills <restaurant/bills>`;
- :ref:`collecting tips <restaurant/tips>`;
- :doc:`setting different taxes for takeaway food <pricing/fiscal_position>`.

.. _restaurant/configuration:

Configuration
=============

To enable the restaurant and bar-specific features, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Select the Point of Sale in the top-left dropdown menu.
#. Activate :guilabel:`Is a Bar/Restaurant` under the :guilabel:`Restaurant Mode` section.

.. _restaurant/floors:

Floors and tables
=================

The :guilabel:`Plan` view enables managing restaurant floors and tables, and monitoring
table status in real time, including occupancy, reservations, and kitchen orders.

Configuration
-------------

.. _restaurant/floors/backend:

From the POS backend
~~~~~~~~~~~~~~~~~~~~

To create floors and tables from the backend, go to :menuselection:`Point of Sale --> Configuration
--> Floor Plans`, and click :guilabel:`New`. Follow the next steps to configure the floor plan:

#. Enter a :guilabel:`Floor Name`.
#. Select the related :guilabel:`Point of Sales`.
#. Hover the mouse over the placeholder image and click the :icon:`fa-pencil` (:guilabel:`Edit`)
   icon to add a background image to the restaurant layout.
#. Click :guilabel:`Add a line` to create and set a table:

   - Enter a :guilabel:`Table Number`.
   - Fill in the number of :guilabel:`Seats`.
   - Select a :guilabel:`Square` or :guilabel:`Round` table shape.
#. (Optional) Activate additional settings by clicking the :icon:`oi-settings-adjust`
   (:guilabel:`settings`) icon:

   - Assign an :guilabel:`Appointment resource` to make the table bookable.
   - Adjust the :guilabel:`Height`, :guilabel:`Width`, and :guilabel:`Color`.
   - Tick the :guilabel:`Active` box to make a table available or not.
#. Click the :icon:`fa-trash-o` (:guilabel:`trash`) icon to delete a table.

.. tip::
   To create a floor plan quickly, go to the :guilabel:`Floors & Tables Map` section in the POS
   settings. Type the floor name in the :guilabel:`Floors` field, press `Enter`, or click
   :guilabel:`Create and edit`.

.. _restaurant/floors/frontend:

From the POS front end
~~~~~~~~~~~~~~~~~~~~~~

To create floors and tables from the front end, :ref:`open a POS session <pos/session-start>`, click
the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon in the top right corner, then :guilabel:`Edit
Plan`. Follow the next steps to configure the floor plan:

#. Click the :icon:`fa-plus` (:guilabel:`Add Floor`) icon to add a floor
#. Enter a :guilabel:`Floor name` and click :guilabel:`Apply`.
#. Click the :icon:`fa-paint-brush` (:guilabel:`paintbrush`) icon to perform one of the following
   editing actions:

   - Select a background color.
   - Click :icon:`fa-camera` :guilabel:`File` to upload an image.
#. Click :icon:`fa-plus-circle` :guilabel:`Table` to add a new table.
#. (Optional) Click a table, then click one of the following icons to edit the table:

   - The :icon:`fa-user` (:guilabel:`Seats`) icon adds or changes the number of seats.
   - The :icon:`fa-square-o` (:guilabel:`Square`) or :icon:`fa-circle-o` (:guilabel:`Round`)
     icon switches the shape of the table.
   - The :icon:`fa-paint-brush` (:guilabel:`Change Floor Background`) icon changes the table's
     color.
   - The :icon:`fa-pencil-square-o` (:guilabel:`Rename`) icon changes the table number.
   - The :icon:`fa-copy` (:guilabel:`Clone`) icon adds a table.
   - The :icon:`fa-trash` (:guilabel:`Delete`) icon removes the table.
#. Click :guilabel:`Save`.

.. warning::
   Removing a table or a floor is permanent.

.. _restaurant/floors/transfer:

Table transfer
--------------

To transfer an order to another table from the :guilabel:`Plan` view, follow these steps:

#. Select a table to go to the POS interface.
#. Start an order.
#. Click :menuselection:`Actions --> Transfer/Merge`.
#. In the :guilabel:`Plan` view, choose the target table:

   - Select a free table to transfer customers and their orders.
   - Select an occupied table to merge customers and their orders.

.. _restaurant/orders:

Order management
================

To take an order, open the register and follow these steps:

#. Select a :guilabel:`Plan` view.
#. Click a table to access the POS interface.
#. Start taking the order. The system automatically associates the order with the table.
#. Click :guilabel:`Order` to validate the order.
#. Click :guilabel:`Plan` to return to the :guilabel:`Plan` view.

To proceed with the order payment, click on the related table in the :guilabel:`Plan` view, then
follow these steps:

#. Click :guilabel:`Payment`.
#. Select a payment method, such as :guilabel:`Cash`, :guilabel:`Card`, and :guilabel:`Customer
   Account`.
#. (Optional) Select a customer and/or send an invoice to customers:

   - Click :icon:`fa-user` :guilabel:`Customer` to select or create a customer account.
   - Tick the :icon:`fa-file-text-o` :guilabel:`Invoice` checkbox to send an invoice to a customer.
#. Click :guilabel:`Validate`.

.. note::
   Clicking a table sets the guest count to one. If the wrong table is selected, click
   :guilabel:`Release table` to free it or :ref:`transfer the customer <restaurant/floors/transfer>`
   to another table.

.. _restaurant/orders-printing:

Order printing
==============

Configuration
-------------

To enable sending orders to a kitchen or bar printer, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Preparation` section, and enable the :guilabel:`Preparation
   Printers` feature.
#. Type in the printer's name in the :guilabel:`Printers` field.
#. Press `Enter` or click :guilabel:`Create and edit` to open the :ref:`printer setup form
   <restaurant/orders-printing/setup>`.

.. _restaurant/orders-printing/setup:

Printer setup form
------------------

To access the printer setup form, click :guilabel:`--> Printers` under the :guilabel:`Preparation
Printers` feature of the :guilabel:`Preparation` section.

To create a printer, click :guilabel:`New`, add a :guilabel:`Printer Name`, and select the
:guilabel:`Printer Type`:

- If the printer is connected to an IoT system, select :guilabel:`Use a printer connected to the
  IoT Box` and add the hostname of the IoT device in the :guilabel:`Proxy IP Address` field.
- If using an Epson printer that does not require an IoT system, select :guilabel:`Use an Epson
  printer` and enter the printer's IP address in the :guilabel:`Epson Printer IP Address` field.

.. seealso::
   - :doc:`/applications/general/iot/connect`
   - :doc:`/applications/general/iot/devices/printer`

Set the printer to print specific products based on their POS category. To do so, click
:guilabel:`Add a line` in the :guilabel:`Printed Product Categories` field. Select a category or
click :guilabel:`New` to create a new one.

When creating a :guilabel:`Printed Product Category`, follow these steps:

#. Type a name.
#. Click the :icon:`fa-pencil` (:guilabel:`Edit`) icon to add an image.
#. Select a :guilabel:`Parent Category`.
#. Choose a preferred :guilabel:`Color`.
#. Determine the product availability.
#. Click :guilabel:`Save & Close` or :guilabel:`Save & New`.

Kitchen preparation
-------------------

From an open POS session, start :ref:`taking an order <restaurant/orders>`, then click
:guilabel:`Order` to send it to the bar or the kitchen.

.. _restaurant/bills:

Bills
=====

There are two features to request or split a bill before payment: :ref:`Receipt printing
<restaurant/bills/printing>` and :ref:`Bill splitting <restaurant/bills/splitting>`.

Configuration
-------------

To allow bill printing and splitting, go to :menuselection:`Point of Sale --> Configuration -->
Settings`, select the POS, and enable the :guilabel:`Early Receipt Printing` and :guilabel:`Allow
Bill Splitting` features in the :guilabel:`Restaurant Mode` section.

.. _restaurant/bills/printing:

Receipt printing
----------------

From an open POS session, follow the :ref:`order process <restaurant/orders>` until the payment
is successful, then click :icon:`fa-print` :guilabel:`Print Full Receipt` to generate and print a
bill.

.. note::
   Any change to the order is reflected in the bill.

.. _restaurant/bills/splitting:

Bill splitting
--------------

From an open POS session, start :ref:`selecting items <restaurant/orders>` and follow these steps:

#. Click :menuselection:`Actions --> Split`.
#. Select the items to split.
#. Click :guilabel:`Split Order`.
#. Proceed with the payment.
#. Click :icon:`fa-chevron-right` :guilabel:`Continue` and repeat the process for each guest.

.. note::
   The :icon:`fa-files-o` :guilabel:`Split` button is available when at least two items are ordered.

.. _restaurant/tips:

Tips
====

Point of Sale allows tipping in :ref:`shops <pos/sell>`, bars, and restaurants.

Configuration
-------------

To allow tipping in a POS, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Enable the :guilabel:`Tips` feature under the :guilabel:`Payment` section.
#. Add a :guilabel:`Tip Product` in the corresponding field:

   - Enter a product's name in the field and press `Enter` or click :guilabel:`Create`.
   - To select a tip product in a POS session, enter a product's name, click :guilabel:`Create and
     edit`, tick the :guilabel:`Point of Sale` checkbox, and click :guilabel:`Save & Close`.
#. (Optional) Tick the :guilabel:`Add tip after payment` and/or :guilabel:`Add tip through payment
   terminal (Adyen)` checkboxes for additional tipping configuration:

   - :guilabel:`Add tip after payment` generates a bill that indicates the tip value that the
     customer gives after the payment.
   - :guilabel:`Add tip through payment terminal (Adyen)` enables tipping with an :doc:`Adyen
     <../../../applications/sales/point_of_sale/payment_methods/terminals/adyen>` payment terminal.
#. Click :guilabel:`Save`.

.. important::
   - To use the :guilabel:`Add tip after payment` feature, the selected payment method must have a
     bank journal attributed to it.
   - To use the :guilabel:`Add tip through payment terminal (Adyen)` feature, select
     :guilabel:`Adyen` under the :guilabel:`Payment Terminals` section in the settings.

.. note::
   - When you create a product to use as a tip, leave the **product type** as :guilabel:`Consumable`
     to avoid unnecessary inventory movements.
   - You can only select one tip product per POS, but you can choose a different one for each.

.. _restaurant/tips/add-tips:

Add tips during checkout
------------------------

Tip after payment
~~~~~~~~~~~~~~~~~

To tip after payment, follow these steps:

#. :ref:`Process an order <restaurant/orders>` until payment.
#. In the **Payment** view, select a payment method.
#. Click :icon:`fa-heart` :guilabel:`Tip` to open a popover.
#. Add the tip amount to the popover and click :guilabel:`Ok`.
#. Click :guilabel:`Close Tab` to validate the payment and the tip.

Tip using an Adyen terminal
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To tip using an Adyen terminal, follow these steps:

#. Create an :ref:`Adyen payment method <adyen/method-creation>`.
#. Go to :menuselection:`Configuration --> Settings --> Payment` and add the created
   :guilabel:`Adyen` payment method to the :guilabel:`Payment Methods` field.
#. Click :guilabel:`Save`.
#. Go to the POS and :ref:`process an order <restaurant/orders>`.
#. Select the :guilabel:`Adyen` payment method during checkout. The :guilabel:`Adyen` terminal
   displays the transaction and suggests adding tips.
#. Add a tip amount in the terminal and validate.
#. Click :icon:`fa-heart` :guilabel:`Tip` to open a popover in Odoo POS.
#. Add the same tip amount to the popover and click :guilabel:`Ok`.
#. Click :guilabel:`Close Tab` to validate the payment and the tip.
