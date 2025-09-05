===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`Organizing the floors and tables <pos/restaurant/floors>`;
- :ref:`Managing the register <pos/restaurant/orders>`;
- :ref:`Notifying the kitchen or bar through the POS <pos/restaurant/orders-printing>`;
- :ref:`Printing and splitting bills <pos/restaurant/bills>`;
- :ref:`Collecting tips <pos/restaurant/tips>`;
- :doc:`Setting different taxes for takeout orders <pricing/fiscal_position>`.

Three main buttons in the POS interface allow for navigating between tables, the register, and
orders:

- :guilabel:`Tables`: Access the :ref:`Floor plan <pos/restaurant/floors>` view to manage table
  occupancy.
- :guilabel:`Register`: Access the :ref:`POS register <pos/restaurant/orders>` to process orders.
- :guilabel:`Orders`: Access the :ref:`overview of all orders <pos/restaurant/orders-overview>`.

.. important::
   To configure restaurant-specific settings, the :guilabel:`Is a Bar/Restaurant` setting under the
   :guilabel:`Point of Sale` section must be enabled in the :ref:`POS settings
   <configuration/settings>`.

.. note::
   - When :guilabel:`Booking` is enabled in the :ref:`POS settings <configuration/settings>`,
     a :ref:`Booking <pos/restaurant/floors/booking>` button appears on the main interface for
     viewing and managing bookings.
   - To decide whether to start from the :ref:`Floor plan <pos/restaurant/floors>` view or the
     :ref:`register <pos/restaurant/orders>`, go to the :ref:`POS settings
     <configuration/settings>`, scroll down to the :guilabel:`PoS Interface` section, and select
     :guilabel:`Tables` or :guilabel:`Register` under the :guilabel:`Default Screen` setting.

.. _pos/restaurant/floors:

Floors and tables
=================

The :guilabel:`Floor plan` view allows for managing restaurant floors and tables, monitoring table
status in real time (occupancy, reservations, kitchen orders), and using the following action
buttons to perform these operations:

- :icon:`fa-plus` :guilabel:`New Order`: :ref:`Create a direct sales order
  <pos/restaurant/orders/process>` that is not linked to any table. Start adding products, click
  :guilabel:`Set Table` to assign the order to an existing table, or click :guilabel:`Set Tab` to
  record the customer's name in an open order.
- :guilabel:`Main Floor/Patio`: Navigate between :ref:`configured floors
  <pos/restaurant/floors/backend>`.
- :icon:`fa-hashtag` (:guilabel:`Table Selector`): Enter an existing table number and click
  :guilabel:`Jump` to access it.

.. note::
   - Selecting a table on the :guilabel:`Floor plan` view or accessing it through the
     :guilabel:`Table Selector` automatically confirms the table's occupancy.
   - In the :ref:`POS settings <configuration/settings>`, under the :guilabel:`Mobile self-order &
     Kiosk` section, first select a :guilabel:`QR menu`. Then, click :icon:`fa-qrcode` :guilabel:`Get
     QR Codes` in the :guilabel:`Floor plan` view to order free QR codes adapted to the floor
     plan. This `offer <https://www.odoo.com/app/point-of-sale-restaurant-qr-code>`_ is
     available worldwide and for all subscription types.

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

The :guilabel:`Booking` setting allows for managing table online booking for a designated point of
sale. :ref:`Configure the setting <pos/restaurant/floors/booking/configuration>` from the backend
and :ref:`manage bookings <pos/restaurant/floors/booking/management>` from the frontend.

.. note::
   Enabling the :guilabel:`Booking` setting automatically installs the Appointments app.

.. _pos/restaurant/floors/booking/configuration:

Booking configuration
~~~~~~~~~~~~~~~~~~~~~

To enable and configure the :guilabel:`Booking` setting, follow these steps:

#. Go to the :ref:`POS settings <configuration/settings>`, scroll down to the :guilabel:`PoS
   Interface` section, and enable :guilabel:`Booking`.
#. Enter a name in the :guilabel:`Appointment type` field and click :guilabel:`Create and edit`.
#. Click the :icon:`fa-expand` (:guilabel:`expand`) icon on the popover and configure the
   :ref:`Appointment type <appointments/configure>` form.
#. Click the :icon:`fa-globe` (:guilabel:`Go to Website`) icon and activate the
   :guilabel:`Published` toggle to publish the appointment page online.

Customers can book a table directly from the website.

.. important::
   In the :guilabel:`Appointment type` form, set the :guilabel:`Book` field to :guilabel:`Resources`
   to ensure that only existing resources can be booked. Then, enable :guilabel:`Manage Capacities`
   to define the maximum amount each resource can handle.

.. tip::
   - To access or modify the :guilabel:`Appointment type` form, go to the :ref:`POS settings
     <configuration/settings>`, scroll down to the :guilabel:`PoS Interface` section, select the
     :guilabel:`Appointment type` under the :guilabel:`Booking` section, and click the
     :icon:`oi-arrow-right` (:guilabel:`Internal link`) icon.
   - To accommodate a booking that exceeds the capacity of a single table, click the
     :icon:`fa-cubes` (:guilabel:`Resources`) icon on the :guilabel:`Appointment Type` form, select
     a table, and add additional tables in the :guilabel:`Linked Resource` field to merge them.

.. _pos/restaurant/floors/booking/management:

Booking management
~~~~~~~~~~~~~~~~~~

From the POS interface, click :guilabel:`Booking` to access the booking overview. The following
actions are available on the :guilabel:`Booking` screen:

- :guilabel:`New`: Create a booking from the frontend. Add a name, the date, the number of guests,
  the phone number, the duration, and the resources, then click :guilabel:`Save`.
- Click a booking to :guilabel:`Edit` or :guilabel:`Delete` it. Additionally, update the stage from
  :guilabel:`Booked` to :guilabel:`Check-In` (when guests arrive) or :guilabel:`No Show` (when
  guests are absent).

.. tip::
   To quickly edit a booking from the :ref:`Floor plan <pos/restaurant/floors>` view, click the
   booked table. Check in or cancel the booking, edit the :guilabel:`Date`, :guilabel:`Number of
   guests`, :guilabel:`Phone number`, :guilabel:`Duration`, or :guilabel:`Resources`, then
   :guilabel:`Save`.

.. _pos/restaurant/orders:

Register management
===================

The POS register allows for :ref:`processing <pos/restaurant/orders/process>` and :ref:`transferring
<pos/restaurant/floors/transfer>` orders, defining :ref:`presets <pos/restaurant/orders/preset>`,
and managing :ref:`courses <pos/restaurant/orders/courses>`. To open it, access the Point of Sale
app and click :guilabel:`Open Register`. In the POS interface, click :guilabel:`Register` to manage
transactions.

.. _pos/restaurant/orders/process:

Order process
-------------

To process an order from the :ref:`POS register <pos/restaurant/orders>`, follow these steps:

#. Start adding products.
#. Define how the order is handled:

   - Click :guilabel:`Set Table` to link the order to a table. Enter a table number and click
     :guilabel:`Assign`.
   - Click :guilabel:`Set Tab` to link the order to a customer. Enter the customer's name and click
     :guilabel:`Apply`.
#. Click :guilabel:`Order` to validate the order.

When ready, :ref:`process the order payment <pos/restaurant/bills/payment>`.

.. note::
   Clicking :guilabel:`Order` redirects to the :ref:`Floor plan <pos/restaurant/floors>` view if
   :guilabel:`Tables` is selected as the :guilabel:`Default Screen`.

.. tip::
   - To cancel an order, click the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then
     :guilabel:`Cancel Order`. If an :ref:`order printer is configured
     <pos/restaurant/orders-printing>`, a cancellation ticket is automatically printed for a
     processed order.
   - Click :guilabel:`Release table` to cancel a table's occupancy.
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

Presets are preconfigured settings that determine whether an order is for :guilabel:`Dine In`,
:guilabel:`Takeout`, and :guilabel:`Delivery`. They also control whether customer contact
information is required and apply capacity limits based on opening hours and order quantity.

.. seealso::
   - :doc:`/applications/sales/point_of_sale/preparation`
   - :doc:`/applications/sales/point_of_sale/online_food_delivery`

.. _pos/restaurant/orders/preset/backend:

Preset editing
~~~~~~~~~~~~~~

To edit preconfigured presets, follow these steps:

#. Go to the :ref:`POS settings <configuration/settings>` and scroll down to the the
   :guilabel:`Take out / Delivery / Members` setting under the :guilabel:`Point of Sale` section.
#. Click :icon:`oi-arrow-right` :guilabel:`Configure Presets` under the :guilabel:`Default` field,
   then click the desired preset.
#. Apply or edit the following options on the :guilabel:`Presets` form:

   - :guilabel:`Pricelist`: Select or :doc:`configure a pricelist
     </applications/sales/sales/products_prices/prices/pricing>` to adapt prices depending on the
     product.
   - :guilabel:`Fiscal Position`: Select or :doc:`configure a fiscal position
     </applications/finance/accounting/taxes/fiscal_positions>` based on the order type.
   - :guilabel:`Manage orders by time`: Select a :guilabel:`Working Time` in the :guilabel:`Schedule
     based on` field, determine the :guilabel:`Preparation capacity` and the duration of the slots,
     and configure the working hours on the :guilabel:`Schedule` tab.
   - :guilabel:`Identification`: Specify whether identification details (such as :guilabel:`Name` or
     :guilabel:`Address`) are required.
   - :guilabel:`Return mode`: Process a return. All items added to the cart are entered as negative
     quantities, while the correct pricelist and fiscal position remain applied.
   - :guilabel:`Color`: Define the color of the preset button in the :ref:`register
     <pos/restaurant/orders>`.
#. Determine which information and options are visible to customers on the website and the
   self-order interface:

   - :guilabel:`Schedule`: Configure weekly working hours by selecting the days and corresponding
     time slots.
   - :guilabel:`Self Ordering`: To make the preset available in the self-order interface, enable
     :guilabel:`Available in self`. Select a service type in the :guilabel:`Service at` field and
     select or :doc:`configure an email template </applications/general/companies/email_template>`
     in the :guilabel:`Email Confirmation` field.
   - :guilabel:`Options`: To force guest selection when :ref:`taking an order
     <pos/restaurant/orders>`, enable :guilabel:`Guest`.
#. Save.

.. important::
   To apply a default preset, access the :guilabel:`Take out / Delivery / Members` setting, and
   select the preferred preset in the :guilabel:`Default` field. Applying a default preset allows
   for saving and using the available presets.

.. note::
   - The :guilabel:`Schedule` tab only appears when the :guilabel:`Manage orders by time` option is
     enabled.
   - The :guilabel:`Service at` and :guilabel:`Email Confirmation` fields only appear when the
     :guilabel:`Available in self` option is enabled in the :guilabel:`Self Ordering` tab.

.. tip::
   - To create a preset, go to the :ref:`POS settings <configuration/settings>` and scroll down to
     the :guilabel:`Take out / Delivery / Members` setting under the :guilabel:`Point of Sale`
     section. Enter a name in the :guilabel:`Available` field and click :guilabel:`Create and edit`.
   - To access presets quickly, go to :menuselection:`Point of Sale --> Configuration --> Presets`.

.. _pos/restaurant/orders/preset/use:

Preset use
~~~~~~~~~~

To process preconfigured presets from the :ref:`register <pos/restaurant/orders>`, select the
preferred preset, and :ref:`process the order <pos/restaurant/orders/process>`:

- :guilabel:`Dine In`: Set a :ref:`table or a tab <pos/restaurant/orders/process>`.

- :guilabel:`Takeout`: Enter the customer's name and click :guilabel:`Apply`, then select a date
  and a time slot.

- :guilabel:`Delivery`: Choose a customer. To create one, click :guilabel:`Create`, enter a name,
  phone number, an email, and an address, then click :guilabel:`Save`.

.. _pos/restaurant/orders/courses:

Courses
-------

Odoo Point of Sale allows orders to be split into multiple courses, sending each course to the
kitchen in sequence when using the :guilabel:`Dine In` :ref:`preset
<pos/restaurant/orders/preset/use>`.

To split an order into courses from the :ref:`register <pos/restaurant/orders>`, click
:guilabel:`Course` and start adding products. Repeat the action as many times as needed. Set a
:ref:`table or a tab <pos/restaurant/orders/process>`, then click :guilabel:`Order` to send the
order to the kitchen, which also fires the first course.

When ready for the second course, retrieve the order from the :ref:`Floor plan
<pos/restaurant/floors>` view or the :ref:`Orders overview <pos/restaurant/orders-overview>`, and
click :guilabel:`Fire Course 2`. Repeat the action as many times as needed.

.. tip::
   To transfer a product or an entire course into another course, select it in the cart, click the
   :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :icon:`fa-arrow-down`
   :guilabel:`Transfer course`, and select the preferred course.

.. _pos/restaurant/orders-overview:

Orders overview
===============

The :guilabel:`Orders` overview allows for viewing, searching, retrieving, and loading all orders.

To view orders specific to a preset, click the relevant preset.

To search for orders, type the :guilabel:`Reference`, :guilabel:`Receipt Number`, :guilabel:`Date`,
or :guilabel:`Customer` in the search bar.

To filter orders based on their status, click the dropdown menu and select one of the following
options:

- :guilabel:`Active`: Orders in progress, either marked as :guilabel:`Ongoing` or in the
  :guilabel:`Payment` stage.
- :guilabel:`Receipt`: Orders with the receipt emailed to the customer.
- :guilabel:`Paid`: Paid orders.

To navigate between pages, click the :icon:`fa-caret-left` :icon:`fa-caret-right`
(:guilabel:`caret`) icons.

To access an order in the register, click it, then click :guilabel:`Load Order`.

.. note::
   Paid orders can be :ref:`refunded <pos/refund>`.

.. tip::
   - To define the number of orders visible on a page, click `1-x / x`. Enter a number lower than
     the total number of pages, and click :guilabel:`Ok`.
   - Click the :icon:`fa-trash` (:guilabel:`trash`) icon next to an :guilabel:`Active` order to
     delete it.
   - Click the preset again to go back to the main overview.

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
   - In case of a printing issue, click the :icon:`fa-cutlery` (:guilabel:`order`) icon in the
     :ref:`POS register <pos/restaurant/orders>` to reprint the last kitchen order.

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
   - Splitting a bill requires ordering at least two products and creates a sub-order, which must
     be paid before returning to the main order.
   - Transferring only one product during the order split implies transferring the sub-order.

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
   Finally, :guilabel:`validate` the payment.

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
