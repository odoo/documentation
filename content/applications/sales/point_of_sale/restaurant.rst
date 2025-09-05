===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`Organizing the floors and tables <pos/restaurant/floors>`;
- :ref:`Managing orders <pos/restaurant/orders>`;
- :ref:`Notifying the kitchen or bar through the POS <pos/restaurant/orders-printing>`;
- :ref:`Printing and splitting bills <pos/restaurant/bills>`;
- :ref:`Collecting tips <pos/restaurant/tips>`;
- :doc:`Setting different taxes for takeout orders <pricing/fiscal_position>`.

Three main buttons in the POS interface allow for navigating between tables, the register, and
orders:

- :guilabel:`Tables`: Access the :ref:`Floor plan <pos/restaurant/floors>` view to manage table
  occupancy.
- :guilabel:`Register`: Access the :ref:`POS register <pos/restaurant/orders>` to process orders.
- :guilabel:`Orders`: Access the overview of all orders.

.. important::
   To configure restaurant-specific settings, the :guilabel:`Is a Bar/Restaurant` setting under the
   :guilabel:`Point of Sale` section must be enabled in the :ref:`POS settings
   <configuration/settings>`.

.. note::
   When :guilabel:`Booking` is enabled in the :ref:`POS settings <configuration/settings>`, a
   :ref:`Booking <pos/restaurant/floors/booking>` button appears on the main interface for viewing
   and managing bookings.

.. _pos/restaurant/default:

Default start screen
====================

To define the point of sale's default start screen, go to the :ref:`POS settings
<configuration/settings>`, scroll down to the :guilabel:`PoS Interface` section, and set the
:guilabel:`Default Screen` setting to :guilabel:`Tables` (i.e., :ref:`Floor plan
<pos/restaurant/floors>` view) or :ref:`Register <pos/restaurant/orders>`.

.. _pos/restaurant/floors:

Floors and tables
=================

The :guilabel:`Floor plan` view allows for managing restaurant floors and tables and monitoring
table status in real time (occupancy, reservations, kitchen orders) using the following action
buttons:

- :icon:`fa-plus` :guilabel:`New Order`: :ref:`Create a direct sales order
  <pos/restaurant/orders/process>` that is not linked to any table. Take the order, click
  :guilabel:`Set Table` to assign it to an existing table, or click :guilabel:`Set Tab` to
  record the open order's name.
- Buttons for navigating between :ref:`configured floors <pos/restaurant/floors/backend>`
  (e.g., :guilabel:`Main Floor/Patio`).
- :icon:`fa-hashtag` (:guilabel:`Table Selector`): Enter an existing table number and click
  :guilabel:`Jump` to access it.

.. note::
   - Selecting a table on the :guilabel:`Floor plan` view or accessing it through the
     :guilabel:`Table Selector` automatically confirms the table's occupancy.
   - To order free physical QR codes adapted to the floor plan, activate the :doc:`QR menu
     </applications/sales/point_of_sale/self_order>` setting, then click  :icon:`fa-qrcode`
     :guilabel:`Get QR Codes` in the :guilabel:`Floor plan` view. This `offer
     <https://www.odoo.com/app/point-of-sale-restaurant-qr-code>`_ is available worldwide and for
     all subscription types.

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

Creating floors and tables allows for managing table selection and :ref:`orders
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
   - Enable the :guilabel:`Booking` setting to assign an :guilabel:`Appointment resource` and make
     a table bookable.
   - Click the :icon:`fa-trash-o` (:guilabel:`trash`) icon to delete a table.

.. tip::
   To create a :guilabel:`Floor plan` quickly, go to the :guilabel:`Point of Sale` section of the
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

.. _pos/restaurant/floors/booking:

Booking
-------

The :guilabel:`Booking` setting allows for creating and managing reservations for a designated
point of sale directly from the POS interface.

.. note::
   Enabling the :guilabel:`Booking` setting automatically installs the :doc:`Appointments
   </applications/productivity/appointments>` app.

.. _pos/restaurant/floors/booking/configuration:

Booking configuration
~~~~~~~~~~~~~~~~~~~~~

To enable and configure the bookings, follow these steps:

#. Go to the :ref:`POS settings <configuration/settings>`, scroll down to the :guilabel:`PoS
   Interface` section, and enable :guilabel:`Booking`.
#. Enter a name in the :guilabel:`Appointment type` field and click :guilabel:`Create and edit`.
#. Configure the :ref:`Appointment type <appointments/configure>` form and click :guilabel:`Save`.
#. Click :guilabel:`Save` in the POS settings.

.. important::
   To ensure that only existing resources can be booked for a specific point of sale, set the
   :guilabel:`Book` field to :guilabel:`Resources` in the :guilabel:`Appointment type` form and
   select tables. Then, enable :guilabel:`Manage Capacities` to define the maximum amount each
   resource can handle.

.. tip::
   To accommodate a booking that exceeds the capacity of a single table, click the
   :icon:`fa-cubes` (:guilabel:`Resources`) icon in the :guilabel:`Appointment Type` form, select
   a table, and add additional tables in the :guilabel:`Linked Resource` field to merge them.

.. seealso::
   :doc:`/applications/productivity/appointments`

.. _pos/restaurant/floors/booking/management:

Booking management
~~~~~~~~~~~~~~~~~~

To manage table bookings from the POS interface, click :guilabel:`Booking`, then:

- Click :guilabel:`New` to create a booking. Add a name, the date and time, number of guests, phone
  number, duration, and :ref:`resources <appointments/resources>`, then click :guilabel:`Save`.
- Click a booking to :guilabel:`Edit` or :guilabel:`Delete` it. Click a stage name (e.g.,
  :guilabel:`Booked`, :guilabel:`Checked-In`, or :guilabel:`No Show`) or drag the booking card to
  move it to the relevant stage.

.. tip::
   To quickly edit a booking from the :ref:`Floor plan <pos/restaurant/floors>` view, click the
   booking notification on the booked table.

.. _pos/restaurant/orders:

Order management
================

The POS register allows for :ref:`processing <pos/restaurant/orders/process>` and :ref:`transferring
<pos/restaurant/floors/transfer>` orders, defining :ref:`presets <pos/restaurant/orders/preset>`,
and managing :ref:`courses <pos/restaurant/orders/courses>`.

.. _pos/restaurant/orders/process:

Order process
-------------

To process an order from the POS register, follow these steps:

#. Click products to add them to the cart.
#. Define how the order is handled:

   - Click :guilabel:`Set Table` to link the order to a table. Enter a table number and click
     :guilabel:`Assign`.
   - Click :guilabel:`Set Tab` to enter the open order's name and click :guilabel:`Apply`.
#. Click :guilabel:`Order` to validate the order.

When ready, :ref:`process the order payment <pos/restaurant/bills/payment>`.

.. note::
   Clicking :guilabel:`Order` redirects to the :ref:`Floor plan <pos/restaurant/floors>` view if
   :guilabel:`Tables` is selected as the :ref:`default start screen <pos/restaurant/default>`.

.. tip::
   - To cancel an order, click the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then
     :guilabel:`Cancel Order`. If an :ref:`order printer is configured
     <pos/restaurant/orders-printing>`, a cancellation ticket is automatically printed for an
     order sent to the kitchen.
   - After selecting a table in the :ref:`Floor plan <pos/restaurant/floors>` view, click
     :guilabel:`Release table` in the cart to cancel the table's occupancy. This action is
     available when the cart is empty.
   - :ref:`Configure a printer <pos/restaurant/orders-printing>` to send an order to the kitchen
     printer when clicking :guilabel:`Order`.

.. _pos/restaurant/floors/transfer:

Order transfer
--------------

To transfer an order to another table from the :ref:`POS register <pos/restaurant/orders>`, click
the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :guilabel:`Transfer/Merge`, and choose
the target table in the :ref:`Floor plan <pos/restaurant/floors>` view:

   - Select an available table to transfer customers and their orders.
   - Select an occupied table to merge customers and their orders.

.. _pos/restaurant/orders/preset:

Presets
-------

Presets are used to apply preconfigured settings to orders and determine whether an order is for
:guilabel:`Dine In`, :guilabel:`Takeout`, or :guilabel:`Delivery`. They also control whether
customer contact information is required and apply capacity limits based on opening hours and order
quantity.

To use preconfigured presets, go to the :ref:`POS settings <configuration/settings>` and
enable the :guilabel:`Take out / Delivery / Members` setting under the :guilabel:`Point of Sale`
section. Set the :guilabel:`Default` field to the preferred preset, then save. From the
:ref:`register <pos/restaurant/orders>`, select the relevant preset, and :ref:`process the order
<pos/restaurant/orders/process>`:

- :guilabel:`Dine In`: Assign a :ref:`table or open a tab <pos/restaurant/orders/process>`.
- :guilabel:`Takeout`: Enter the order's name and click :guilabel:`Apply`, then select a date
  and a time slot.
- :guilabel:`Delivery`: Select an existing customer, or click :guilabel:`Create` to add one. Then,
  select a time slot.

.. tip::
   Click the preset button to switch to another one.

.. seealso::
   - :doc:`/applications/sales/point_of_sale/preparation`
   - :doc:`/applications/sales/point_of_sale/online_food_delivery`

.. _pos/restaurant/orders/courses:

Courses
-------

The :guilabel:`Course` button allows for splitting orders into multiple courses, sending each course
to the kitchen sequentially.

To split an order into courses from the :ref:`register <pos/restaurant/orders>`, click
:guilabel:`Course` and add products. Repeat the action as many times as needed, then click
:guilabel:`Order` to send the order to the kitchen, which also fires the first course.

When ready for the second course, retrieve the order from the :ref:`Floor plan
<pos/restaurant/floors>` view or the :guilabel:`Orders` overview, and click :guilabel:`Fire Course
2`. Repeat the action as many times as needed.

.. tip::
   - Alternatively, click :guilabel:`Course` as often as needed to display the desired number of
     courses in the cart. Then, click each course, add products, and click :guilabel:`Order`.
   - To transfer a product or an entire course into another course, select it in the cart, click
     the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :icon:`fa-arrow-down`
     :guilabel:`Transfer course`, and select the preferred course.

.. _pos/restaurant/orders-printing:

Order printing
==============

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
#. Click :guilabel:`Save`.
#. In the :ref:`POS settings <configuration/settings>`, click :guilabel:`Save`.

The printer is then connected to the point of sale and can print kitchen orders and order receipts.

.. note::
   - Printing kitchen orders requires assigning a :guilabel:`PoS Product Category`.
   - To create a :guilabel:`Printed Product Category` on the :guilabel:`Add: Printed Product
     Categories` popover, click :guilabel:`New`. Enter a name, select a :guilabel:`Parent Category`,
     choose a :guilabel:`Color`, click the :icon:`fa-pencil` (:guilabel:`Edit`) icon to add an
     image, determine the product availability, then click :guilabel:`Save & Close`.

.. tip::
   - To access all preparation printers from the :ref:`POS settings <configuration/settings>`,
     scroll down to the :guilabel:`Preparation` section and click :icon:`oi-arrow-right`
     :guilabel:`Printers`. Alternatively, go to :menuselection:`Point of Sale --> Orders -->
     Preparations Printers`.
   - After :ref:`processing an order <pos/restaurant/orders/process>`, click the :icon:`fa-cutlery`
     (:guilabel:`order`) icon in the :ref:`POS register <pos/restaurant/orders>` next to
     :guilabel:`Payment` to reprint a duplicate of the last kitchen order.

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
enable :guilabel:`Allow Bill Splitting` under the :guilabel:`Point of Sale` section.

To split a bill from the :ref:`POS register <pos/restaurant/orders>`, follow these steps:

#. Click the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :guilabel:`Split`.
#. Select at least one product and perform one of the following actions:

   - :guilabel:`Payment`: Process the direct payment for the selected product(s).
   - :guilabel:`Split Order`: Create a sub-order.
   - :guilabel:`Transfer`: Transfer one or all products to another table.
#. Process the :ref:`payment <pos/restaurant/bills/payment>`.
#. Click :icon:`fa-chevron-right` :guilabel:`Continue` and repeat the process for each guest.

.. note::
   Splitting a bill requires ordering at least two products and creates a sub-order, which must
   be paid before returning to the main order.

.. _pos/restaurant/bills/payment:

Order payment
-------------

To proceed with the order payment from the :ref:`POS register <pos/restaurant/orders>`, follow
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
enable :guilabel:`Early Receipt Printing` under the :guilabel:`Point of Sale` section.

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
the :guilabel:`Payment` section, enable :guilabel:`Tips`, and click :guilabel:`Save`.

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
     longer available on the :ref:`POS register <pos/restaurant/orders>`.
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
   <payment_methods>` for the order first. Then, select a payment method for the tip, click
   :icon:`fa-heart` :guilabel:`Tip`, add the tip amount, and click :guilabel:`Ok`.
   Finally, :guilabel:`Validate` the payment.

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
