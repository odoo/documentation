:show-content:

===================
Restaurant features
===================

Odoo Point of Sale provides various features to manage a restaurant or a bar:

- :ref:`Organizing the floor plan <pos/restaurant/floors>`;
- :ref:`Managing orders <pos/restaurant/orders>`;
- :ref:`Notifying the kitchen or bar through the POS <pos/restaurant/orders-printing>`;
- :ref:`Printing and splitting bills <pos/restaurant/bills>`;
- :ref:`Collecting tips <pos/restaurant/tips>`;
- :ref:`Setting different taxes for takeout orders <pos/pricing/taxes>`.

To :ref:`create a restaurant <pos/use/create-pos>` from scratch, go to the :ref:`POS settings
<pos/use/settings>` and click :guilabel:`+ New Shop`. Enter a name and enable the :guilabel:`Is a
Bar/Restaurant` setting, then click :guilabel:`Save`.

Three main buttons in the POS interface allow for navigating between tables, the register, and
orders:

- :guilabel:`Tables`: Access the :ref:`Floor plan <pos/restaurant/floors>` view to manage table
  occupancy.
- :guilabel:`Register`: Access the :ref:`POS register <pos/restaurant/orders>` to process orders.
- :guilabel:`Orders`: Access the :ref:`overview of all orders <pos/use/orders>`.

.. note::
   When :guilabel:`Booking` is enabled in the :ref:`POS settings <pos/use/settings>`, a
   :ref:`Booking <pos/restaurant/floors/booking>` button appears in the POS interface to view
   and manage bookings.

.. cards::

   .. card:: Online food delivery
      :target: restaurant/urban_piper
      :large:

      Integrate third-party delivery platforms via UrbanPiper to centralize and manage external
      orders directly within the POS.

.. _pos/restaurant/default:

Default start screen
====================

To define the point of sale's default start screen, go to the :ref:`POS settings
<pos/use/settings>`, scroll down to the :guilabel:`PoS Interface` section, and set the
:guilabel:`Default Screen` setting to :guilabel:`Tables` (i.e., :ref:`Floor plan
<pos/restaurant/floors>` view) or :ref:`Register <pos/restaurant/orders>`.

.. _pos/restaurant/floors:

Floors and tables
=================

Creating a restaurant from scratch creates a :guilabel:`Floor` in the :guilabel:`Floors & Tables
Map` setting, under the :guilabel:`Point of Sale` section of the :ref:`POS settings
<pos/use/settings>`, that is named after the database and automatically assigned to the restaurant.

There are two alternatives to create a floor plan:

  - Go to the :guilabel:`Point of Sale` section of the :ref:`POS settings <pos/use/settings>`.
    Under :guilabel:`Floors & Tables Map`, type the floor name in the :guilabel:`Floors` field, and
    press `Enter`.
  - Go to :menuselection:`Point of Sale --> Configuration --> Floor Plans` and click
    :guilabel:`New`.

.. tip::
   To edit the names of automatically-created floor plans in the backend, go to
   :menuselection:`Point of Sale --> Configuration --> Floor Plans` and click the desired floor
   plan. In the :ref:`frontend <pos/restaurant/edit-floor>`, click the :icon:`fa-pencil`
   (:guilabel:`Edit Floor`) icon.

The :guilabel:`Floor plan` view allows for managing restaurant floors and tables and monitoring
table status in real time (occupancy, reservations, kitchen orders) using the following action
buttons:

- :icon:`fa-plus` :guilabel:`New Order`: :ref:`Create a direct sales order
  <pos/restaurant/orders/process>` that is not linked to any table. Take the order, click
  :guilabel:`Set Table` to assign it to an existing table, or click :guilabel:`Set Tab` to
  record the open order's name.
- Buttons for navigating between :ref:`configured floors <pos/restaurant/edit-floor>`
  (e.g., :guilabel:`Main Floor/Patio`).
- :icon:`fa-pencil-square-o` (:guilabel:`Edit Floor Plan`): :ref:`Edit
  <pos/restaurant/edit-floor>` the floor plan.
- :icon:`fa-hashtag` (:guilabel:`Table Selector`): Enter an existing table number and click
  :guilabel:`Jump` to access it.

.. note::
   - Following the onboarding by selecting the :guilabel:`Restaurant` card automatically creates
     and assigns the :guilabel:`Main Floor` and :guilabel:`Patio` floor plans to the restaurant.
   - Selecting a table on the :guilabel:`Floor plan` view or accessing it through the
     :guilabel:`Table Selector` automatically confirms the table's occupancy.
   - To order free physical QR codes adapted to the floor plan, activate the :doc:`QR menu
     <extra/self_order>` setting, then click  :icon:`fa-qrcode` :guilabel:`Get QR Codes` in the
     :guilabel:`Floor plan` view. This `offer <https://www.odoo.com/app/point-of-sale-restaurant-qr-code>`_
     is available worldwide and for all subscription types.

.. example::
   .. image:: restaurant/floor-plan.png
      :alt: example of a floor plan view with visual keys to understand it.
      :scale: 90 %

   - **Table 1**: The table is occupied.
   - **Table 2**: The table is available but booked for 15:15.
   - **Table 3**: The 14:00 table is running late.
   - **Table 4**: The table is available.
   - **Table 5**: The table has been merged with **Table 6** for a larger group.
   - :guilabel:`Decor`: :ref:`Edit the floor plan <pos/restaurant/edit-floor>` with walls, images,
     and shapes.

.. _pos/restaurant/edit-floor:

Floor plan configuration
------------------------

To edit a floor plan from the frontend, open the POS register, access the :ref:`Floor plan view
<pos/restaurant/default>`, click the :icon:`fa-pencil-square-o` (:guilabel:`Edit Floor Plan`) icon
in the top-right corner to open the :guilabel:`Floor plan editor`, then customize the plan using
the relevant buttons:

- The **dropdown menu** (e.g., :guilabel:`Main Floor` :icon:`fa-caret-down`): Select the floor plan
  to edit. Additionally, click :icon:`fa-plus` :guilabel:`Add Floor` to create a new one.
- :guilabel:`Add Table`: Select the table shape among :guilabel:`Square`, :guilabel:`Rectangular`,
  :guilabel:`Round`, and :guilabel:`Oval`.
- :guilabel:`Add Decor`: Customize the :guilabel:`Floor plan` with :guilabel:`Walls`,
  :guilabel:`Images`, and :guilabel:`Shapes`.
- :icon:`fa-pencil` (:guilabel:`Edit Floor`): Change the floor's :guilabel:`Name`, select a
  :guilabel:`Background`, or click :guilabel:`Set a Background Image` to upload your own. To delete
  the :guilabel:`Floor plan`, click :guilabel:`Delete Floor`.

Click an existing table or decor to perform additional actions:

- :icon:`fa-pencil` (:guilabel:`Properties`): Edit the table or decor using the tools in the side
  panel.
- :icon:`fa-files-o` (:guilabel:`Duplicate`): Copy the table's or decor's properties.
- :icon:`fa-trash` (:guilabel:`Delete`): Delete the table or decor.
- Click the turquoise borders to manually reduce or increase the table's or decor's shape. Hold the
  :icon:`fa-refresh` (:guilabel:`spin`) icon to rotate the table.

The following table and decor editing tools are available. To discard all changes, click
:guilabel:`Discard`. To save all changes, click :guilabel:`Save`:

.. tabs::

      .. list-table::
         :widths: 40 60
         :header-rows: 1
         :stub-columns: 1

         * - Tool
           - Use
         * - :guilabel:`Alignment`
           - Set the text alignment.
         * - :guilabel:`Color`
           - Click the preferred color.
         * - :guilabel:`Corner rounding` / :guilabel:`Size` / :guilabel:`Thickness`
           - Adjust the slider using the cursor.
         * - :guilabel:`Layers`
           - Arrange the order within the :guilabel:`Floor plan`. Send backward or move forward.
         * - :guilabel:`Number of Seats`
           - Click :icon:`fa-plus` the (:guilabel:`plus`) or :icon:`fa-minus` (:guilabel:`minus`)
             icons to increase or decrease the number of seats.
         * - :guilabel:`Shape`
           - Click the desired shape.
         * - :guilabel:`Style (Text)`
           - Select the preferred text formatting style.
         * - :guilabel:`Style (Walls)`
           - Select the preferred line style.
         * - :guilabel:`Table Number`
           - Enter a number.
         * - :guilabel:`Text`
           - Enter a text and click :guilabel:`Apply`.

.. warning::
   Removing a :guilabel:`Table`, :guilabel:`Decor`, or the whole :guilabel:`Floor plan` is
   permanent.

.. note::
   To revert the last change or reapply the last undone change, click the :icon:`fa-undo`
   (:guilabel:`undo`) or :icon:`fa-repeat` (:guilabel:`redo`) icons.

.. tip::
   To get a simpler :guilabel:`Floor plan` view, click the :icon:`fa-bars` (:guilabel:`hamburger`)
   menu, then :guilabel:`Switch Floor View`. Repeat this action to get back to the customizable
   view.

.. _pos/restaurant/floors/booking:

Booking
-------

The :guilabel:`Booking` setting allows for creating and managing reservations for a designated
point of sale directly from the POS interface.

.. note::
   Enabling the :guilabel:`Booking` setting automatically installs the :doc:`Appointments
   </applications/productivity/appointments>` app.

.. seealso::
   `Booking (video tutorial) <https://youtu.be/t_MCzbETS4k?si=nHy8S0RanO2aAzcy>`_

.. _pos/restaurant/floors/booking/configuration:

Booking configuration
~~~~~~~~~~~~~~~~~~~~~

To enable and configure bookings, follow these steps:

#. Go to the :ref:`POS settings <pos/use/settings>`, scroll down to the :guilabel:`PoS
   Interface` section, and enable :guilabel:`Booking`.
#. Enter a name in the :guilabel:`Appointment type` field and click :guilabel:`Create and edit`.
#. Configure the :ref:`Appointment type <appointments/configure>` form and click :guilabel:`Save`.
#. Click :guilabel:`Save` in the :ref:`POS settings <pos/use/settings>`.

.. important::
   To ensure that only existing resources can be booked for a specific point of sale, set the
   :guilabel:`Book` field to :guilabel:`Resources` in the :guilabel:`Appointment type` form and
   select tables. Then, enable :guilabel:`Manage Capacities` to define the maximum amount each
   resource can handle.

.. tip::
   To accommodate a booking that exceeds the capacity of a single table, click the :icon:`fa-cubes`
   (:guilabel:`Resources`) icon in the :guilabel:`Appointment Type` form, select a table, and add
   additional tables in the :guilabel:`Linked Resource` field to merge them.

.. seealso::
   :doc:`/applications/productivity/appointments`

.. _pos/restaurant/floors/booking/management:

Booking management
~~~~~~~~~~~~~~~~~~

To manage table bookings from the POS interface, click :guilabel:`Booking`, then:

- Click :guilabel:`New` to create a booking. Add a name, the date and time, number of guests, phone
  number, duration, :ref:`resources <appointments/resources>`, and comments, then click
  :guilabel:`Save`.
- Click a booking to :guilabel:`Edit` or :guilabel:`Delete` it. Click a stage name (e.g.,
  :guilabel:`Booked`, :guilabel:`Checked-In`, or :guilabel:`No Show`), or drag the booking card to
  the relevant stage.

.. tip::
   To quickly edit a booking from the :ref:`Floor plan <pos/restaurant/floors>` view, click the
   booking notification on the booked table.

.. _pos/restaurant/orders:

Order management
================

The POS register allows for :ref:`processing <pos/restaurant/orders/process>` and :ref:`transferring
<pos/restaurant/floors/transfer>` orders, defining :doc:`presets <extra/presets>`,
and managing :ref:`courses <pos/restaurant/orders/courses>`.

.. _pos/restaurant/orders/process:

Order process
-------------

To process an order from the POS register, follow these steps:

#. Click products to add them to the cart.
#. Define how the order is handled:

   - Click :guilabel:`Set Table` to link the order to a table. Enter a table number and click
     :guilabel:`Assign`, or click :guilabel:`Plan` to return to the :guilabel:`Floor plan` view and
     manually select a table.
   - Click :guilabel:`Set Tab` to enter the open order's name and click :guilabel:`Apply`.

#. Click :guilabel:`Send` to validate the order.
#. When ready, :ref:`process the order payment <pos/restaurant/bills/payment>`.

.. note::
   Clicking :guilabel:`Send` redirects to the :ref:`Floor plan <pos/restaurant/floors>` view if
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
     printer when clicking :guilabel:`Send`.
   - Use :doc:`presets <extra/presets>` when offering different service types, e.g., :guilabel:`Dine
     In`, :guilabel:`Takeout`, or :guilabel:`Delivery`.
   - If the order is a direct sale not linked to any table, its name can be modified by clicking the
     :icon:`fa-ellipsis-v` (:guilabel:`Actions`) menu and selecting :icon:`fa-pencil-square-o`
     :guilabel:`Edit Order Name`.

.. seealso::
   - :doc:`extra/preparation`
   - :doc:`UrbanPiper order management for food delivery <restaurant/urban_piper>`

.. _pos/restaurant/floors/transfer:

Order transfer
--------------

To transfer an order to another table from the :ref:`POS register <pos/restaurant/orders>`, click
the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :guilabel:`Transfer/Merge`, and choose
the target table in the :ref:`Floor plan <pos/restaurant/floors>` view:

   - Select an available table to transfer customers and their orders.
   - Select an occupied table to merge customers and their orders.

.. _pos/restaurant/orders/courses:

Courses
-------

The :guilabel:`Course` button allows for splitting orders into multiple courses, sending each course
to the kitchen sequentially.

To split an order into courses from the :ref:`register <pos/restaurant/orders>`, click
:guilabel:`Course` and add products. Repeat the action as many times as needed, then click
:guilabel:`Send` to send the order to the kitchen, which also fires the first course.

When ready for the second course, retrieve the order from the :ref:`Floor plan
<pos/restaurant/floors>` view or the :guilabel:`Orders` overview, and click :guilabel:`Fire Course
2`. Repeat the action as many times as needed.

.. tip::
   - Alternatively, click :guilabel:`Course` as often as needed to display the desired number of
     courses in the cart. Then, click each course, add products, and click :guilabel:`Send`.
   - To transfer a product or an entire course into another course, select it in the cart, click
     the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :icon:`fa-arrow-down`
     :guilabel:`Transfer course`, and select the preferred course.

.. seealso::
   `Courses (video tutorial) <https://youtu.be/5W2S9HwSrDQ?si=Pauk9gyuypl4NU-M>`_

.. _pos/restaurant/orders-printing:

Order printing
==============

To enable sending orders to a kitchen or a bar printer, :doc:`connect a printer
<hardware_network/receipt_printers>` to Odoo, go to the :ref:`POS settings <pos/use/settings>`, and
follow these steps:

#. Scroll down to the :guilabel:`Preparation` section and enable the :guilabel:`Preparation
   Printers` setting.
#. Type the printer's name in the :guilabel:`Printers` field and click :guilabel:`Create and edit`.
#. Set the :guilabel:`Type` field to :guilabel:`Preparation`.
#. Enter the :guilabel:`Printer IP Address`.
#. Optionally, enable the :doc:`Use Local Network Access <hardware_network/pos_lna>` setting to allow
   connecting the printer to the browser without requiring an :doc:`SSL certificate
   <hardware_network/epos_ssc>`.
#. Select the relevant categories in the :guilabel:`Printed Product Categories` field.
#. Click :guilabel:`Save`.
#. In the :ref:`POS settings <pos/use/settings>`, click :guilabel:`Save`.

The printer is then connected to the point of sale and can print preparation tickets.

.. note::
   To create a :guilabel:`Printed Product Category` on the :guilabel:`Create Preparation Printers`
   form, click inside the :guilabel:`Printed Product Categories` field, then click
   :guilabel:`Search more`. In the :guilabel:`Search: Printed Product Categories` popover, click
   :guilabel:`Create New`. Enter a name, select a :guilabel:`Parent Category`, choose a
   :guilabel:`Color`, indicate the type of :guilabel:`Course` it belongs to, click the
   :icon:`fa-pencil` (:guilabel:`Edit`) icon to add an image, determine the product availability,
   then click :guilabel:`Save`.

.. tip::
   - To test the printer's configuration in the :guilabel:`Create Preparation Printers` form, click
     :guilabel:`Test`.
   - To access all created printers from the :ref:`POS settings <pos/use/settings>`, scroll down
     to the :guilabel:`Preparation` section and click :icon:`oi-arrow-right` :guilabel:`Manage
     Printers`. Alternatively, go to :menuselection:`Point of Sale --> Configuration --> Printers`.
   - After :ref:`processing an order <pos/restaurant/orders/process>`, click the :icon:`fa-cutlery`
     (:guilabel:`order`) icon in the :ref:`POS register <pos/restaurant/orders>` next to
     :guilabel:`Payment` to reprint a duplicate of the last kitchen order.
   - Access the :doc:`preparation display <extra/preparation>` through the **Kitchen Display** app
     to manage orders without using paper.

.. seealso::
   - :doc:`Connect an IoT system to a POS <hardware_network/pos_iot>`
   - :doc:`hardware_network/receipt_printers`
   - :doc:`/applications/general/iot/devices/printer`
   - :doc:`/applications/general/iot/connect`
   - :doc:`extra/preparation`

.. _pos/restaurant/bills:

Bills and payment
=================

.. _pos/restaurant/bills/splitting:

Bill splitting
--------------

To split a bill from the :ref:`POS register <pos/restaurant/orders>`, follow these steps:

#. Click the :icon:`fa-ellipsis-v` (:guilabel:`Actions`) icon, then :guilabel:`Split`.
#. Select at least one product and perform one of the following actions:

   - :guilabel:`Payment`: Process the direct payment for the selected product(s).
   - :guilabel:`Split Order`: Create a sub-order.
   - :guilabel:`Transfer`: Transfer one or all products to another table.
#. Process the :ref:`payment <pos/restaurant/bills/payment>`.
#. Click :guilabel:`Continue` and repeat the process for each guest.

.. note::
   Splitting a bill requires ordering at least two products and creates a sub-order that must be
   paid before returning to the main order.

.. seealso::
   `Bill splitting (video tutorial) <https://youtu.be/njUpZPk4VNo?si=eqK1Av9Q6WKhFINd>`_

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
:guilabel:`Print` to generate and print a bill.

.. important::
   If a printer is :doc:`configured and linked <hardware_network/receipt_printers>` to a point of sale,
   the receipt is automatically printed upon payment confirmation.

.. seealso::
   :doc:`use/receipts`

.. _pos/restaurant/tips:

Tips
====

Configuration
-------------

To allow tipping in a POS, go to the :ref:`POS settings <pos/use/settings>`, scroll down to the
:guilabel:`Payment` section, enable :guilabel:`Tips`, and click :guilabel:`Save`.

.. important::
   - The :guilabel:`Add tip after payment` setting only works for a POS in the United States
     of America with an :doc:`Adyen <payment_methods/terminals/adyen>` or a :doc:`Stripe
     <payment_methods/terminals/stripe>` :ref:`payment terminal <pos/terminals/configuration>`.
   - The :guilabel:`Add tip through payment terminal (Adyen)` setting only works with an
     :ref:`Adyen <adyen/tips>` terminal.

.. note::
   Saving the :guilabel:`Tips` setting automatically fills the :guilabel:`Tip product` field with
   the preconfigured :guilabel:`[TIPS] Tips` product, which is only used for tips. When selecting
   another product in the :guilabel:`Tip product` field, the chosen product is no longer available
   on the :ref:`POS register <pos/restaurant/orders>`.

.. _pos/restaurant/tips/add-tips:

Tip and payment
---------------

To process a tip during :ref:`payment <pos/restaurant/bills/payment>`, follow these steps:

#. Click :icon:`fa-heart` :guilabel:`Tip`, then :icon:`fa-eur` (:guilabel:`euro`) to add an amount
   or :icon:`fa-percent` (:guilabel:`percent`) to add a percentage, and click :guilabel:`Confirm`.
#. Select a :doc:`payment method <payment_methods>`.
#. Click :guilabel:`Validate`.

.. tip::
   If the order and the tip are paid using different payment methods, select a :doc:`payment method
   <payment_methods>` for the order first. Then, select a payment method for the tip, click
   :icon:`fa-heart` :guilabel:`Tip`, add the tip amount, and click :guilabel:`Confirm`.
   Finally, :guilabel:`Validate` the payment.

Tip after payment (US only)
---------------------------

To allow tipping after payment for a POS in the United States of America, ensure the :guilabel:`Add
tip after payment` setting is enabled in the :ref:`POS settings <pos/use/settings>`. To process tips
after payment, follow these steps:

#. On the :guilabel:`Payment` screen, select a :guilabel:`Card` payment method linked to a
   :doc:`Stripe <payment_methods/terminals/stripe>` or :doc:`Adyen
   <payment_methods/terminals/adyen>` terminal.
#. Click :guilabel:`Close Tab` and select the relevant option in the :guilabel:`Add a tip` screen:

   - :guilabel:`15%`, :guilabel:`20%`, or :guilabel:`25%`: Tip rates based on order total.
   - :guilabel:`No Tip`.
   - :guilabel:`Tip Amount`: Enter the relevant amount in the field.
#. Click :guilabel:`Settle` to validate.

.. toctree::
   :titlesonly:

   restaurant/urban_piper
