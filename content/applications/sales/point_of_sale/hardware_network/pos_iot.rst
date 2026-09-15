==============
IoT connection
==============

Physical devices, such as :doc:`printers <receipt_printers>`, :doc:`scales <scale>`, :doc:`payment
terminals <../payment_methods/terminals>`, :doc:`customer displays <customer_display>`, and/or
the :ref:`Belgian blackbox <belgium/fdm>`, that cannot be connected to an Odoo database directly
using the device’s IP address can be connected using an IoT gateway. As well as serving as a
bridge between the device and the point of sale, the IoT gateway also manages SSL/TLS security
certificates.

.. important::
   - For optimal reliability, use a :doc:`physical IoT gateway </applications/general/iot/iot_box>`
     instead of a :doc:`virtual one </applications/general/iot/windows_iot>`.
   - For maximum network stability, use an Ethernet connection instead of a Wi-Fi connection. Enable
     :doc:`pos_lna` to allow Odoo to communicate with the IoT gateway on the local network.
   - :doc:`Ingenico <../payment_methods/terminals/ingenico>` terminals require an IoT connection and
     must be connected to their own IoT gateway.

To set up an IoT connection between the physical devices and the point of sale, follow these steps:

#. Download the Odoo IoT app.
#. Set up the :ref:`Odoo IoT Box <iot/iot_box/network>` or :ref:`Windows virtual IoT
   <iot/windows-iot/installation>`.
#. Connect the desired device(s) to the IoT gateway:

   - :ref:`Belgian blackbox <belgium/fdm>`
   - :doc:`Printer <receipt_printers>`
   - :doc:`Scale <scale>`
   - :doc:`Customer display <customer_display>`
   - :doc:`Ingenico terminal <../payment_methods/terminals/ingenico>`

#. Open the IoT app and click :guilabel:`Connect` to :ref:`connect the IoT gateway to your Odoo
   database <iot/connect/connection>`.
#. In the :guilabel:`Connect to a Point of Sale` popover, set the :guilabel:`Associated POS` field
   to the relevant point of sale, then click :guilabel:`Continue`.

.. note::
   Selecting the point of sale in the :guilabel:`Associated POS` field enables the :guilabel:`IoT
   Box` setting in the :ref:`POS settings <pos/use/settings>`. The connected device(s) need to be
   added individually.

.. image:: pos_iot/pos-connections.png
   :alt: A suggested configuration for a point of sale gateway.

.. seealso::
   - :doc:`/applications/general/iot`
   - `Fundamentals of the IoT (video) <https://www.youtube.com/watch?v=XKuDb685LIQ>`_
   - :doc:`pos_lna`
