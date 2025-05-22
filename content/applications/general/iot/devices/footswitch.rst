====================
Connect a footswitch
====================

When working in a manufacturing environment, it's always better for an operator to have both hands
available at all times. Odoo's :abbr:`IoT (Internet of Things)` box makes this possible when using a
footswitch.

In fact, with a footswitch, the operator is able to go from one screen to another, and perform
actions using their foot. This can be configured in just a few steps on the work center in the
*Manufacturing* app.

Connection
==========

To connect a footswitch to the :abbr:`IoT (Internet of Things)` box, connect the two devices via
cable. More often than not, this is done with a :abbr:`USB (Universal Serial Bus)` cable.

If the footswitch is a `supported device <https://www.odoo.com/page/iot-hardware>`_, there is no
need to take further action, since it'll be automatically detected when connected.

.. image:: footswitch/footswitch-dropdown.png
   :alt: Footswitch recognized on the IoT box.

Link a footswitch to a work center in the Odoo Manufacturing app
================================================================

To link a footswitch to an action, it first needs to be configured on a work center. Navigate to
:menuselection:`Manufacturing --> Configuration --> Work Centers`. From here, go to the desired
:guilabel:`Work Center` in which the footswitch will be used, and add the device in the
:guilabel:`IoT Triggers` tab, under the :guilabel:`Device` column, by selecting :guilabel:`Add a
Line`. Doing so means the footswitch can be linked to an option in the :guilabel:`Action` column
drop-down, and optionally, a key can be added to trigger it. An example of an :guilabel:`Action` in
the *Manufacturing app* could be the :guilabel:`Validate` or :guilabel:`Mark as Done` buttons on a
manufacturing work order.

.. important::
   Triggers are executed in the order they appear, with the first one taking priority. To reorder
   the triggers, click the :icon:`oi-draggable` :guilabel:`(draggable)` icon to the left of each
   trigger, and drag it to the desired position.

.. tip::
   - To identify the key assigned to each pedal, connect the footswitch to any computer and press
     the pedals as if typing. Usually, the pedals are mapped by default to the keyboard keys `a`,
     `b`, and `c`.
   - The :guilabel:`Work Order` list includes a status indicator that shows whether the database is
     successfully connected to the footswitch.

.. seealso::
   :ref:`workcenter_iot`
