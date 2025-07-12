================
Customer display
================

The **customer display** feature provides real-time updates on a secondary screen for customers
during the checkout process. This screen shows the :ref:`items in the cart <pos/sell>`, the subtotal
as items are added, and details throughout the payment process. It also displays the total amount,
the selected :doc:`payment method <../payment_methods>`, and any change to be returned.

.. image:: customer_display/display.png
   :alt: customer screen
   :scale: 50 %

.. note::
   Both the customer display and POS display should be at least 6 inches. However, a larger screen
   is recommended for improved end-user readability.

Configuration
=============
Depending on the POS setup, feature can be displayed :ref:`directly on a secondary screen
<customer_display/local>` connected via USB-C or HDMI, :ref:`on another device remotely
<customer_display/remote>`, or :ref:`on a screen connected through an IoT system
<customer_display/iot>`.

To activate the feature, follow these steps:

#. Navigate to the :ref:`POS settings <configuration/settings>`.
#. Scroll down to the :guilabel:`Connected Devices` section.
#. Open the dropdown menu under the :guilabel:`Customer Display` section and select one of the
   following options:

   - :guilabel:`None`: To disable the customer display.
   - :guilabel:`The same device`: To use the secondary screen connected with an HDMI or USB-C cable.
   - :guilabel:`Another device`: To connect to a remote device connected to the database.
   - :guilabel:`IOT-connected screen` for displays connected via an :doc:`IoT system
     <../../../general/iot>`.

For displays connected using an :doc:`IoT system <../../../general/iot>`:

#. From the same section, tick the :guilabel:`IoT Box` checkbox to activate the IoT system in POS.
#. Select the IoT-connected screen from the dropdown menu in the :guilabel:`Customer Display` field.

Reaching the customer display
=============================

.. _customer_display/local:

Local
-----

To open the customer display on a second screen connected to a POS system using an HDMI or USB-C
cable, follow these steps:

#. :ref:`Open a POS session <pos/session-start>`.
#. Click the :icon:`fa-bars` icon (:guilabel:`hamburger menu`).
#. Click the :icon:`fa-desktop` icon (:guilabel:`customer screen`), which opens a new window to drag
   onto the second screen.

For POS terminals running the Odoo Android app with dual-screen support,

#. :doc:`Activate the Point of Sale Mobile module <../../../general/apps_modules>` to enable the
   customer display.
#. :ref:`Open a POS session <pos/session-start>`.
#. Click the :icon:`fa-bars` icon (:guilabel:`hamburger menu`).
#. Click the :icon:`fa-desktop` icon (:guilabel:`customer screen`), which opens the customer display
   on the terminal's secondary screen.

.. _customer_display/remote:

Remote
------

To open the customer display on a remote device, (any computer, tablet, or smartphone), follow these
steps:

#. Access your database from the other device.
#. Navigate to :menuselection:`Point of Sale --> Dashboard`.
#. Click the :icon:`fa-ellipsis-v` icon (:guilabel:`vertical ellipsis`) on a POS card.
#. Click :guilabel:`Customer Display` to open the display remotely.

.. note::
   The two devices are not required to share the same network as long as they are connected to the
   same database.

.. _customer_display/iot:

IoT system
----------

To open the customer display onto an IoT-connected screens:

#. :ref:`Open a POS session <pos/session-start>`.
#. Click the :icon:`fa-bars` icon (:guilabel:`hamburger menu`).
#. Click the :icon:`fa-desktop` icon (:guilabel:`customer screen`), which opens the customer display
   onto the IoT-connected display.

.. note::
   Both devices need to be connected to the same local network.

.. seealso::
   - :doc:`../configuration/pos_iot`
   - :doc:`../../../general/iot`
