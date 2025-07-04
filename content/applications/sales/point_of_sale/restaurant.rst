===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`Organizing the floors and tables <pos/restaurant/floors>`;
- :ref:`Taking orders <pos/restaurant/orders>`;
- :ref:`Communicating with the kitchen or bar through the POS <pos/restaurant/orders-printing>`;
- :ref:`Printing and splitting bills <pos/restaurant/bills>`;
- :ref:`Collecting tips <pos/restaurant/tips>`;
- :doc:`Setting different taxes for takeaway food <pricing/fiscal_position>`.

Three main buttons in the POS register allow for navigating between the :ref:`Floor plan
<pos/restaurant/floors>` view, tables, and :ref:`orders <pos/restaurant/orders>`:

- :guilabel:`Plan`: Access the :ref:`Floor plan <pos/restaurant/floors>` view.
- :guilabel:`Table`: Enter a table or order number, then click :guilabel:`Jump` to access them. The
  button's label updates to display the selected number. When applicable, click :guilabel:`Book
  table` to confirm the table's occupancy.
- :icon:`fa-plus-circle` (:guilabel:`order`): :ref:`Create a direct sales order <pos/restaurant/orders>`
  that is not linked to any table. Each click generates the next order in the sequence. Click
  :guilabel:`Release Order` to cancel the order (if no products have been added) and return to the
  :ref:`Floor plan <pos/restaurant/floors>` view.

.. note::
   - When :guilabel:`Table Booking` is enabled in the :ref:`POS settings <configuration/settings>`,
     a :guilabel:`Booking` button appears on the main interface for viewing and managing bookings.
   - Entering a number through the :guilabel:`Table` button that does not match an existing table
     number creates a direct sales order.

.. important::
   To configure restaurant-specific settings, the :guilabel:`Is a Bar/Restaurant` setting under the
   :guilabel:`Restaurant Mode` section must be enabled in the :ref:`POS settings
   <configuration/settings>`.

.. _pos/restaurant/floors:

Floors and tables
=================

The :guilabel:`Floor plan` view is the first screen displayed when :ref:`accessing the POS register
<pos/session-start>`. It enables managing restaurant floors and tables, and monitoring
table status in real time (occupancy, reservations, and kitchen orders).

.. example::
   .. image:: restaurant/plan-understand.png
      :alt: example of a floor plan view with visual keys to understand it.
      :scale: 90 %

   - Table 101: The table is currently available but booked for 15:00.
   - Table 102: The table is booked, and an order is sent to the kitchen.
   - Table 103: The 12:00 table is running late.
   - Table 104: The table has a pending order.
   - Table 105: The table is available.

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
#. Click :guilabel:`Add a line` to create and configure a table:

   - Enter a :guilabel:`Table Number`.
   - Fill in the number of :guilabel:`Seats`.
   - Set the table's :guilabel:`Shape`.
#. Optionally, activate additional settings by clicking the :icon:`oi-settings-adjust`
   (:guilabel:`settings`) icon:

   - Adjust the :guilabel:`Height`, :guilabel:`Width`, and :guilabel:`Color`.
   - Tick the :guilabel:`Active` checkbox to make a table available or not.
#. Save.

.. note::
   - Enable the :guilabel:`Table Booking` setting to assign an :guilabel:`Appointment resource` and
     make a table bookable.
   - Click the :icon:`fa-trash-o` (:guilabel:`trash`) icon to delete a table.

.. tip::
   To create a :guilabel:`Floor plan` quickly, go to the :guilabel:`Restaurant Mode` section of the
   :ref:`POS settings <configuration/settings>`. Under :guilabel:`Floors & Tables Map`, type the
   floor name in the :guilabel:`Floors` field, and press `Enter`.

.. _pos/restaurant/floors/frontend:

From the POS frontend
~~~~~~~~~~~~~~~~~~~~~

To create floors and tables from the frontend, :ref:`open the POS register <pos/session-start>`,
click the :icon:`fa-bars` (:guilabel:`hamburger menu`) icon in the top right corner of the
:guilabel:`Floor plan` view, then :guilabel:`Edit Plan`. To configure the :guilabel:`Floor plan`,
follow the next steps:

#. Click the :icon:`fa-plus` (:guilabel:`Add Floor`) icon to add a floor.
#. Enter a :guilabel:`Floor name` and click :guilabel:`Apply`.
#. Click the :icon:`fa-paint-brush` (:guilabel:`Change Floor Background`) icon to select a
   background color, or click :icon:`fa-camera` :guilabel:`File` to upload an image.
#. Optionally, click the :icon:`fa-pencil-square-o` (:guilabel:`Rename`) icon to rename the
   :guilabel:`Floor plan`, the :icon:`fa-files-o` (:guilabel:`Clone`) icon to create a copy, or
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

To take an order, :ref:`open the POS register <pos/session-start>` and follow these steps:

#. Select a :ref:`floor plan <pos/restaurant/floors>` and click a table or click the
   :icon:`fa-plus-circle` (:guilabel:`order`) button at the top to create a direct sales order.
#. Add products to the order.
#. Click :guilabel:`Order` to validate the order.

When ready, :ref:`process the order payment <pos/restaurant/bills/payment>`.

.. tip::
   - To cancel a processed order, click :guilabel:`Actions`, then :guilabel:`Cancel Order`. If an
     :ref:`order printer is configured <pos/restaurant/orders-printing>`, a cancellation ticket is
     automatically printed.
   - To switch to another table order, click the button with the table number at the top of the POS
     interface, enter a table number, and click :guilabel:`Jump`.
   - Click :guilabel:`Release table` to cancel a table's occupancy.
   - :ref:`Configure a printer <pos/restaurant/orders-printing>` to send an order to the kitchen
     printer when clicking :guilabel:`Order`.

.. _pos/restaurant/floors/transfer:

Order transfer
--------------

To transfer an order to another table from the :ref:`POS interface <pos/restaurant/orders>`, click
:guilabel:`Actions`, then :guilabel:`Transfer/Merge`, and choose the target table in the
:ref:`Floor plan <pos/restaurant/floors>` view:

   - Select an available table to transfer customers and their orders.
   - Select an occupied table to merge customers and their orders.

.. _pos/restaurant/orders-printing:

Order printing
==============

Configuration
-------------

To enable sending orders to a kitchen or a bar printer, :doc:`connect a printer
<configuration/epos_printers>` to Odoo, go to the :ref:`POS settings <configuration/settings>`, and
follow these steps:

#. Scroll down to the :guilabel:`Preparation` section and enable the :guilabel:`Preparation
   Printers` setting.
#. Type the printer's name in the :guilabel:`Printers` field and click :guilabel:`Create and edit`.
#. On the printer setup form, select the :guilabel:`Printer Type`:

   - If the printer is connected to an :doc:`IoT system </applications/general/iot>`, select
     :guilabel:`Use a printer connected to the IoT`, and choose the relevant :doc:`device
     </applications/general/iot/devices/printer>`. This process requires the IoT app and an IoT
     system.
   - If using an :doc:`Epson printer that does not require an IoT system connection
     <configuration/epos_printers>`, select :guilabel:`Use an Epson printer` and enter the
     :guilabel:`Epson Printer IP Address`.
#. Define the product categories to be printed by clicking :guilabel:`Add a line` in the
   :guilabel:`Printed Product Categories` field and selecting the preferred category from the
   popover.
#. Click :guilabel:`Save & Close`.
#. In the :ref:`POS settings <configuration/settings>`, click :guilabel:`Save`.

The printer is then connected to the point of sale and can print kitchen orders and order receipts.

.. note::
   - Printing kitchen orders requires assigning a :guilabel:`PoS Product Category`.
   - To create a :guilabel:`Printed Product Category` on the :guilabel:`Add: Printed Product
     Categories` popover, click :guilabel:`New`. Enter a name, select a :guilabel:`Parent Category`,
     choose a :guilabel:`Color`, click the :icon:`fa-pencil` (:guilabel:`Edit`) icon to add an
     image, determine the product availability, then click :guilabel:`Save & Close`.

.. tip::
   To access all preparation printers from the :ref:`POS settings <configuration/settings>`, scroll
   down to the :guilabel:`Preparation` section, and click :icon:`oi-arrow-right`
   :guilabel:`Printers`. Alternatively, go to :menuselection:`Point of Sale --> Orders -->
   Preparations Printers`.

.. seealso::
   - :doc:`Connect an IoT system to a POS <configuration/pos_iot>`
   - :doc:`/applications/general/iot/devices/printer`
   - :doc:`/applications/general/iot/connect`
   - :doc:`/applications/sales/point_of_sale/preparation`

.. _pos/restaurant/bills:

Bills and payment
=================

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
   - Splitting a bill requires ordering at least two products and creates a sub-order, which must
     be paid before returning to the main order.
   - Clicking :guilabel:`Split Order` without selecting any product creates an empty sub-order.

.. _pos/restaurant/bills/payment:

Order payment
-------------

To proceed with the order payment from the :ref:`POS interface <pos/restaurant/orders>`, follow
these steps:

#. Click :guilabel:`Payment`.
#. Select a :doc:`payment method <payment_methods>`.
#. Optionally, select a customer and send an invoice to them:

   - Click :icon:`fa-user` :guilabel:`Customer` to select or create a customer account.
   - Enable :icon:`fa-file-text-o` :guilabel:`Invoice` to allow sending an invoice to the
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
   If a printer is :doc:`configured and linked <configuration/epos_printers>` to a point of sale,
   the receipt is automatically printed upon payment confirmation.

.. seealso::
   :doc:`/applications/sales/point_of_sale/receipts_invoices`

.. _pos/restaurant/tips:

Tips
====

Configuration
-------------

To allow tipping in a POS, go to the :ref:`POS settings <configuration/settings>`, scroll down to
the :guilabel:`Payment` section, enable :guilabel:`Tips`,  and click :guilabel:`Save`.

.. important::
   - The :guilabel:`Add tip after payment` setting only works for a POS in the United States
     of America with an :doc:`Adyen <payment_methods/terminals/adyen>` or a :doc:`Stripe
     <payment_methods/terminals/stripe>` :ref:`payment terminal <terminals/configuration>`.
   - The :guilabel:`Add tip through payment terminal (Adyen)` setting only works with an
     :ref:`Adyen <adyen/tips>` terminal.

.. note::
   - Saving the :guilabel:`Tips` setting automatically fills the :guilabel:`Tip product` field
     with the preconfigured :guilabel:`[TIPS] Tips` product, which is only used for tips. When
     selecting another product in the :guilabel:`Tip product` field, the chosen product is no
     longer available on the :ref:`POS interface <pos/restaurant/orders>`.
   - Choose only one tip product per POS.

.. _pos/restaurant/tips/add-tips:

Tip and payment
---------------

To process a tip during :ref:`payment <pos/restaurant/bills/payment>`, follow these steps:

#. Click :icon:`fa-heart` :guilabel:`Tip`, add the amount, then click :guilabel:`Ok`.
#. Select a :doc:`payment method <payment_methods>` for the order and the tip.
#. Click :guilabel:`Validate`.

.. tip::
   If the order and the tip are paid using different payment methods, select a :doc:`payment method
   <payment_methods>` for the order, click :icon:`fa-heart` :guilabel:`Tip`, add the tip amount, and
   click :guilabel:`Ok`. Then, select a payment method for the tip and :guilabel:`Validate` the
   payment.

Tip after payment (US only)
---------------------------

To allow tipping after payment for a POS in the United States of America, ensure the :guilabel:`Add
tip after payment` setting is enabled in the :ref:`POS settings <configuration/settings>`. To
process tips after payment, follow these steps:

#. On the :guilabel:`Payment` screen, select a :guilabel:`Card` payment method linked to a
   :doc:`Stripe <payment_methods/terminals/stripe>` or :doc:`Adyen
   <payment_methods/terminals/adyen>` terminal.
#. Click :guilabel:`Close Tab` and select the relevant option in the :guilabel:`Add a tip` screen:

   - :guilabel:`15%`, :guilabel:`20%`, or :guilabel:`25%`: Tip rates based on order total.
   - :guilabel:`No Tip`.
   - :guilabel:`Tip Amount`: Enter the relevant amount in the field.
#. Click :guilabel:`Settle` to validate.
