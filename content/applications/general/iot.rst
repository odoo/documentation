:show-content:
:hide-page-toc:
:nosearch:

========================
Internet of Things (IoT)
========================

Odoo IoT allows to connect physical devices such as barcode scanners, receipt printers, payment
terminals, measurement tools, etc. to an Odoo database using an IoT system.

The following IoT systems are supported:

- :doc:`IoT box <iot/iot_box>`: micro-computer, plug-and-play device (IoT program pre-installed)
- :doc:`Windows virtual IoT <iot/windows_iot>`: Windows program that can be installed on a Windows
  computer.

.. important::
   An IoT box subscription is required in order to use IoT systems with a secured connection.

.. note::
   - :abbr:`MRP (Material Requirement Planning)` devices, including cameras and measurement tools,
     are not compatible with Windows virtual IoT.
   - You can use multiple IoT systems at the same time.
   - It is also possible to create a Windows Virtual Machine a on MacOS/Linux computer. However,
     this option isn't supported by Odoo, and no troubleshooting assistance will be provided.

.. cards::

   .. card:: IoT box
      :target: iot/iot_box
      :large:

      Set up an IoT box.

   .. card:: Windows virtual IoT
      :target: iot/windows_iot
      :large:

      Set up Windows virtual IoT.

   .. card:: IoT system connection to Odoo
      :target: iot/connect

      Connect the IoT system to your Odoo database and troubleshoot potential connection issues.

   .. card:: Devices
      :target: iot/devices

      Connect devices such as printers, screens, measurement tools, etc. to the IoT system.

   .. card:: HTTPS certificate
      :target: iot/https_certificate_iot

      Verify your IoT system and database meets the eligibility requirements for HTTPS certificate
      generation and address any potential issues.

   .. card:: IoT system updates
      :target: iot/connect

      Update your IoT system's image, core code, and handlers.

.. seealso::
   - `Odoo's compatible IoT devices <https://www.odoo.com/app/iot-hardware>`_
   - `Odoo Tutorials: Internet of Things (IoT) Tutorials
     <https://www.odoo.com/slides/internet-of-things-iot-175>`_

.. toctree::
   :titlesonly:

   iot/iot_box
   iot/windows_iot
   iot/connect
   iot/https_certificate_iot
   iot/updating_iot
   iot/devices
