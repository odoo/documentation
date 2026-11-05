:show-content:
:hide-page-toc:
:nosearch:

========================
Internet of Things (IoT)
========================

Odoo IoT allows the connection of physical devices, such as barcode scanners, receipt printers,
payment terminals, measurement tools, and more to an Odoo database using an IoT gateway.

The following IoT gateways are supported:

- :doc:`IoT Box <iot/iot_box>`: micro-computer, plug-and-play device on which the Odoo IoT
  program is pre-installed;
- :doc:`Windows virtual IoT <iot/windows_iot>`: an Odoo IoT program for Windows that can be
  installed on a Windows computer.

.. note::
   - :abbr:`MRP (Material Requirement Planning)` devices, including cameras and measurement tools,
     are not compatible with the Windows virtual IoT.
   - Multiple IoT gateways can be used at the same time.
   - It is also possible to create a Windows Virtual Machine on a MacOS/Linux computer. However,
     this option is not supported by Odoo, and no troubleshooting assistance will be provided.

.. cards::

   .. card:: IoT Box
      :target: iot/iot_box
      :large:

      Set up an IoT Box.

   .. card:: Windows virtual IoT
      :target: iot/windows_iot
      :large:

      Set up a Windows virtual IoT.

   .. card:: IoT connection to Odoo
      :target: iot/connect

      Connect the IoT gateway to your Odoo database and troubleshoot potential connection issues.

   .. card:: Devices
      :target: iot/devices

      Connect devices such as printers, screens, measurement tools, etc., to the IoT gateway.

   .. card:: Troubleshooting
      :target: iot/iot_advanced/troubleshooting

      Diagnose and resolve common IoT connection and configuration issues.

   .. card:: IoT gateway updates
      :target: iot/iot_advanced/updating_iot

      Update your IoT gateway's image, core code, and handlers to benefit from the latest IoT fixes
      and features or reset the IoT gateway if needed.

.. toctree::
   :titlesonly:

   iot/iot_box
   iot/windows_iot
   iot/connect
   iot/iot_advanced
   iot/devices
