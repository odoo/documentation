=====================
IoT system connection
=====================

The Internet of Things (IoT) is a system that acts as a bridge connecting physical devices to the
Point of Sale app, such as :doc:`printers <receipt_printers>`, :doc:`scales <scale>`, :doc:`payment
terminals <../payment_methods/terminals>`, and/or the :ref:`Belgian blackbox <belgium/fdm>`. When
Odoo cannot connect directly to a device using its IP address, the IoT system acts as an
intermediary. It establishes a secure connection between the device and Odoo by generating and
managing its own security certificate.

.. important::
   - For optimal reliability, a :doc:`physical IoT system </applications/general/iot/iot_box>` is
     recommended over a :doc:`virtual one </applications/general/iot/windows_iot>`.
   - For maximum stability, choose an Ethernet connection over a Wi-Fi connection. Enable
     :doc:`pos_lna` to allow Odoo to communicate with the IoT system on the local network.
   - :doc:`Ingenico <../payment_methods/terminals/ingenico>` terminals require an IoT connection and
     must be connected to their own IoT system.
   - Devices directly connected to the IoT box must be located near the box.

To connect the point of sale with an :doc:`IoT system </applications/general/iot>`, follow these
steps:

#. Download the IoT app in Odoo.
#. Set up the :doc:`/applications/general/iot/iot_box` or
   :doc:`/applications/general/iot/windows_iot`.
#. Connect the desired device(s) to the IoT system:

   - :ref:`Belgian blackbox <belgium/fdm>`
   - :doc:`Printer <receipt_printers>`
   - :doc:`Scale <scale>`
   - :doc:`Customer display <customer_display>`
   - :doc:`Ingenico terminal <../payment_methods/terminals/ingenico>`

#. Access the IoT app and click :guilabel:`Connect` to :ref:`connect the IoT system to your Odoo
   database <iot/connect/connection>`.
#. In the :guilabel:`Connect to a Point of Sale` popover, set the :guilabel:`Associated POS` field
   to the relevant point of sale, then click :guilabel:`Continue`.

.. image:: pos_iot/pos-connections.png
   :alt: A suggested configuration for a point of sale system.

.. note::
   Selecting the point of sale in the :guilabel:`Associated POS` field enables the :guilabel:`IoT
   Box` setting in the :ref:`POS settings <pos/use/settings>`. The connected device(s) need to be
   added individually.

.. seealso::
   - :doc:`/applications/general/iot`
   - `Fundamentals of the IoT (video) <https://www.youtube.com/watch?v=XKuDb685LIQ>`_
   - :doc:`pos_lna`
