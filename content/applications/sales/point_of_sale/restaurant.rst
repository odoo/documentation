===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`organizing the floors and tables <pos/restaurant/floors>`;
- :ref:`taking orders <pos/restaurant/orders>`;
- :ref:`communicating with the kitchen or bar through the POS <pos/restaurant/orders-printing>`;
- :ref:`printing and splitting bills <pos/restaurant/bills>`;
- :ref:`collecting tips <pos/restaurant/tips>`;
- :doc:`setting different taxes for takeaway food <pricing/fiscal_position>`.

.. important::
   In the :ref:`POS settings <configuration/settings>`, the :guilabel:`Is a Bar/Restaurant`
   setting under the :guilabel:`Restaurant Mode` section must be enabled, and allows configuring
   the restaurant.

.. _pos/restaurant/floors:

Floors and tables
=================

The :guilabel:`Floor plan` view enables managing restaurant floors and tables, and monitoring
table status in real time, (occupancy, reservations, and kitchen orders). It also contains
the following main actions:

- :guilabel:`Plan`: Access the :guilabel:`Floor plan` view.
- :guilabel:`Table`: Enter the table number, click :guilabel:`Jump` to access the :ref:`POS
  interface <pos/restaurant/orders>` for the selected table, then click :guilabel:`Book table` to
  confirm its occupancy.
- :icon:`fa-plus-circle` (:guilabel:`order`): :ref:`Create an order <pos/restaurant/orders>` and
  start adding products.

.. admonition:: Floor plan integration

   Booked tables, selected products on the POS interface, and table occupancy or
   availability are reflected in the :guilabel:`Floor plan` view.

   .. example::
      .. image:: restaurant/plan-understand.png
         :alt: example of a floor plan view with visual keys to understand it.
         :scale: 90 %

      - Table 101: The table is currently available but booked for 15:00.
      - Table 102: The table is booked, and an order is sent to the kitchen.
      - Table 103: The 12:00 table is running late.
      - Table 104: The table has a pending order.
      - Table 105: The table is available.

.. note::
   - After clicking the :icon:`fa-plus-circle` (:guilabel:`order`) icon, click :guilabel:`Release
     Order` to cancel the order if no products are added.
   - If the :guilabel:`Table Booking` setting is enabled, a :guilabel:`Booking` action is available
     in the :guilabel:`Floor plan` view to manage all bookings.

Configuration
-------------

Creating floors and tables allows managing table selection and :ref:`orders
<pos/restaurant/orders>`.

.. _pos/restaurant/floors/backend:

From the POS backend
~~~~~~~~~~~~~~~~~~~~

To create floors and tables from the backend, go to :menuselection:`Point of Sale --> Configuration
--> Floor Plans`, and click :guilabel:`New`. Follow the next steps to configure the :guilabel:`Floor
plan`:

#. Enter a :guilabel:`Floor Name`.
#. Select the related :guilabel:`Point of Sales`.
#. Optionally, hover the mouse over the placeholder image and click the :icon:`fa-pencil`
   (:guilabel:`Edit`) icon to add a background image to the restaurant layout.
#. Click :guilabel:`Add a line` to create and set a table:

   - Enter a :guilabel:`Table Number`.
   - Fill in the number of :guilabel:`Seats`.
   - Set the table's :guilabel:`Shape`.
#. Optionally, activate additional settings by clicking the :icon:`oi-settings-adjust`
   (:guilabel:`settings`) icon:

   - Adjust the :guilabel:`Height`, :guilabel:`Width`, and :guilabel:`Color`.
   - Tick the :guilabel:`Active` checkbox to make a table available or not.
   - Click the :icon:`fa-trash-o` (:guilabel:`trash`) icon to delete a table.
#. Save.

.. note::
   To assign an :guilabel:`Appointment resource` as an additional setting and make the table
   bookable from the website, enable the :guilabel:`Table Booking` setting and configure an
   :ref:`Appointment type <appointments/configure>`.

.. tip::
   To create a :guilabel:`Floor plan` quickly, go to the :guilabel:`Restaurant Mode` section of the
   :ref:`POS settings <configuration/settings>`. Under :guilabel:`Floors & Tables Map`, type the
   floor name in the :guilabel:`Floors` field, and press `Enter`.

.. _pos/restaurant/floors/frontend:

From the POS frontend
~~~~~~~~~~~~~~~~~~~~~

To create floors and tables from the frontend, :ref:`open a POS session <pos/session-start>`, click
the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon in the top right corner, then :guilabel:`Edit
Plan`. To configure the :guilabel:`Floor plan`, follow the next steps:

#. Click the :icon:`fa-plus` (:guilabel:`Add Floor`) icon to add a floor.
#. Enter a :guilabel:`Floor name` and click :guilabel:`Apply`.
#. Click the :icon:`fa-paint-brush` (:guilabel:`Change Floor Background`) icon to select a
   background color, or click :icon:`fa-camera` :guilabel:`File` to upload an image.
#. Optionally, click the :icon:`fa-pencil-square-o` (:guilabel:`Rename`) icon to rename the
   :guilabel:`Floor plan`, the :icon:`fa-files-o` (:guilabel:`Clone`) icon to create its copy, or
   the :icon:`fa-trash` (:guilabel:`Delete`) icon to delete it.
#. Click :icon:`fa-plus-circle` :guilabel:`Table` to add a new table. To edit a table, select it
   and click one of the following icons:

      - :icon:`fa-user` (:guilabel:`Seats`): Add or change the number of seats.
      - :icon:`fa-square-o` (:guilabel:`Square`) or :icon:`fa-circle-o` (:guilabel:`Round`): Change
        the table's shape.
      - :icon:`fa-paint-brush` (:guilabel:`Change Floor Background`): Change the table's color.
      - :icon:`fa-pencil-square-o` (:guilabel:`Rename`): Change the table number.
      - :icon:`fa-copy` (:guilabel:`Clone`): Clone the table's attributes using the following table
        number.
      - :icon:`fa-trash` (:guilabel:`Delete`): Remove the table.
#. Click :guilabel:`Save`.

.. warning::
   Removing a table or a floor is permanent.

.. _pos/restaurant/orders:

Order management
================

To take an order, open the point of sale's register and follow these steps:

#. Select a :ref:`Floor plan <pos/restaurant/floors>`.
#. Click a table or the :icon:`fa-plus-circle` (:guilabel:`order`) icon to access the POS interface.
#. Add products to the order. The system automatically associates the order with the table.
#. Click :guilabel:`Order` to validate the order.

When ready, :ref:`process the order payment <pos/restaurant/bills/payment>`.

.. note::
   - If the wrong table is selected, click :guilabel:`Release table` to cancel its occupancy level
     or :ref:`transfer the order <pos/restaurant/floors/transfer>` to another table.
   - :ref:`Configure a printer <pos/restaurant/orders-printing>` to send an order to the kitchen
     printer when clicking :guilabel:`Order`.

.. tip::
   To switch to another table order, access the :guilabel:`Table Selector` from the POS interface,
   click the table number in the top-left corner, enter a table number, and click :guilabel:`Jump`.

.. _pos/restaurant/floors/transfer:

Order transfer
--------------

To transfer an order to another table from the :ref:`POS interface <pos/restaurant/orders>`, click
:menuselection:`Actions --> Transfer/Merge`, and choose the target table in the :ref:`Floor plan
<pos/restaurant/floors>` view:

   - Select an available table to transfer customers and their orders.
   - Select an occupied table to merge customers and their orders.

.. _pos/restaurant/orders-printing:

Order printing
==============

Configuration
-------------

To enable sending orders to a kitchen or a bar printer, :doc:`connect a printer
</../../../applications/sales/point_of_sale/configuration/epos_printers>` to Odoo, go to
the :ref:`POS settings <configuration/settings>`, and follow these steps:

#. Scroll down to the :guilabel:`Preparation` section and enable the :guilabel:`Preparation
   Printers` setting.
#. Type the printer's name in the :guilabel:`Printers` field and click :guilabel:`Create and edit`
   to open the printer setup form.
#. On the printer setup form, select the :guilabel:`Printer Type`:

   - If the printer is connected to an IoT system, select :doc:`Use a printer connected to the IoT
     Box </../../../applications/sales/point_of_sale/configuration/pos_iot>` and click inside the
     :guilabel:`IoT Device` field to choose a
     :doc:`device </../../../applications/general/iot/devices/printer>`.
   - If using an Epson printer that does not require an IoT system connection, select :doc:`Use an
     Epson printer </../../../applications/sales/point_of_sale/configuration/epos_printers>` and
     enter the printer's IP address in the :guilabel:`Epson Printer IP Address` field.
#. To set printing specific products based on their :guilabel:`PoS Product Category`, click
   :guilabel:`Add a line` in the :guilabel:`Printed Product Categories` field, then select an
   existing category on the :guilabel:`Add: Printed Product Categories` popover.

#. Click :guilabel:`Save & Close`.
#. In the :ref:`POS settings <configuration/settings>`, click :guilabel:`Save`.

The printer is now connected to the point of sale and can print kitchen orders and order receipts.

.. note::
   - Not selecting a :guilabel:`PoS Product Category` does not allow printing kitchen orders.
   - To create a :guilabel:`Printed Product Category` on the :guilabel:`Add: Printed Product
     Categories` popover, click :guilabel:`New`. Enter a name, select a :guilabel:`Parent Category`,
     choose a :guilabel:`Color`, click the :icon:`fa-pencil` (:guilabel:`Edit`) icon to add an
     image, determine the product availability, then click :guilabel:`Save & Close`.
   - The :guilabel:`IoT Device` field requires the IoT app to be installed. If the app is not
     installed, the :guilabel:`Proxy IP Address` field appears instead. In this case, paste the
     printer's proxy IP address to establish the printer's connection.

.. tip::
   To access all preparation printers from the :ref:`POS settings <configuration/settings>`, scroll
   down to the :guilabel:`Preparation` section, and click :icon:`oi-arrow-right`
   :guilabel:`Printers`. Alternatively, go to :menuselection:`Point of Sale --> Orders -->
   Preparations Printers`.

.. seealso::
   - :doc:`/applications/general/iot/connect`
   - :doc:`/applications/general/iot/devices/printer`

.. _pos/restaurant/bills:

Bills and payment
=================

Two options are available to manage bills and payments: :ref:`splitting the bill
<pos/restaurant/bills/splitting>` before :ref:`payment <pos/restaurant/bills/payment>` or
requesting a :ref:`receipt <pos/restaurant/bills/printing>`.

.. _pos/restaurant/bills/splitting:

Bill splitting
--------------

To allow bill splitting, go to :menuselection:`Point of Sale --> Configuration --> Settings`, and
enable :guilabel:`Allow Bill Splitting` under the :guilabel:`Restaurant Mode` section.

To split a bill from the :ref:`POS interface <pos/restaurant/orders>`, follow these steps:

#. Click :guilabel:`Actions`, then :guilabel:`Split`.
#. Select at least one product and click :guilabel:`Split Order`.
#. Proceed with the :ref:`payment <pos/restaurant/bills/payment>`.
#. Click :icon:`fa-chevron-right` :guilabel:`Continue` and repeat the process for each guest.

.. note::
   - Splitting a bill requires ordering at least two products.
   - Clicking :guilabel:`Split Order` without selecting any product creates a sub-order requiring
     :ref:`ordering new products <pos/restaurant/orders>`.

.. example::
   Splitting a bill creates a sub-order: When splitting order `205`, it creates order `205B` that
   needs to be paid first.

.. _pos/restaurant/bills/payment:

Order payment
-------------

To proceed with the order payment from the :ref:`POS interface <pos/restaurant/orders>`, follow
these steps:

#. Click :guilabel:`Payment`.
#. Select a :doc:`payment method <../../../applications/sales/point_of_sale/payment_methods>`.
#. Optionally, select a customer and send an invoice to them:

   - Click :icon:`fa-user` :guilabel:`Customer` to select or create a customer account.
   - Tick the :icon:`fa-file-text-o` :guilabel:`Invoice` checkbox to allow sending an invoice to the
     customer.
#. Click :guilabel:`Validate`.

.. _pos/restaurant/bills/printing:

Receipt printing
----------------

To allow receipt printing, go to :menuselection:`Point of Sale --> Configuration --> Settings`, and
enable :guilabel:`Early Receipt Printing` under the :guilabel:`Restaurant Mode` section.

After a successful :ref:`order payment <pos/restaurant/bills/payment>`, click :icon:`fa-print`
:guilabel:`Print Full Receipt` to generate and print a bill.

.. important::
   If a printer is :doc:`configured and linked
   <../../../applications/sales/point_of_sale/configuration/epos_printers>` to a point of sale, the
   receipt printing occurs automatically upon payment confirmation.

.. seealso::
   :doc:`/applications/sales/point_of_sale/receipts_invoices`

.. _pos/restaurant/tips:

Tips
====

Configuration
-------------

To allow tipping in a POS, go to the :ref:`POS settings <configuration/settings>` and select a
:guilabel:`Point of Sale`. Scroll down to the :guilabel:`Payment` section, enable the
:guilabel:`Tips` setting, and click :guilabel:`Save`.

.. important::
   - The :guilabel:`Add tip after payment` setting only works for a POS in the United States
     of America with an :doc:`Adyen
     </../../../applications/sales/point_of_sale/payment_methods/terminals/adyen>`, or a
     :doc:`Stripe </../../../applications/sales/point_of_sale/payment_methods/terminals/stripe>`
     :ref:`payment terminal <terminals/configuration>`.
   - The :guilabel:`Add tip through payment terminal (Adyen)` setting only works with an
     :ref:`Adyen <adyen/tips>` terminal.

.. note::
   - Saving the :guilabel:`Tips` setting automatically fills the :guilabel:`Tip product` field
     with the preconfigured :guilabel:`[TIPS] Tips` product, which is only used for tips. When
     selecting another product as a tip product, the selected product no longer appears on the
     :ref:`POS interface <pos/restaurant/orders>`.
   - Choose only one tip product per POS.

.. _pos/restaurant/tips/add-tips:

Tip and payment
---------------

To process a tip during :ref:`payment <pos/restaurant/bills/payment>`, follow these steps:

#. On the :guilabel:`Payment` screen, select a :doc:`payment method
   <../../../applications/sales/point_of_sale/payment_methods>` for the order.
#. Click :icon:`fa-heart` :guilabel:`Tip`, add the tip amount in the popover, then click
   :guilabel:`Ok`.
#. Select a payment method for the tip and click :guilabel:`Validate`.

US tip setting
--------------

If the :guilabel:`Add tip after payment` setting is enabled for a POS in the United States of
America, follow these steps to process a tip:

#. On the :guilabel:`Payment` screen, select a :guilabel:`Card` payment method linked to a
   :doc:`Stripe </../../../applications/sales/point_of_sale/payment_methods/terminals/stripe>` or
   :doc:`Adyen </../../../applications/sales/point_of_sale/payment_methods/terminals/adyen>`
   terminal.
#. Click :guilabel:`Close Tab` to display the :guilabel:`Add a tip` screen with the following
   options:

   - :guilabel:`15%`, :guilabel:`20%`, or :guilabel:`25%`: Tip rates based on order total.
   - :guilabel:`No Tip`.
   - :guilabel:`Tip Amount`: Manual tip addition.
#. Click :guilabel:`Settle` to validate.
