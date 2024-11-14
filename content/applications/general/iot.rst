:show-content:
:hide-page-toc:
:nosearch:

========================
Internet of Things (IoT)
========================

Odoo Internet of Things (IoT) allows to connect physical devices such as barcode scanners, receipt
printers, payment terminals, measurement tools, etc. to an Odoo database using an IoT system.

The following IoT systems are supported:

- :doc:`IoT box <iot/iot_box>`: micro-computer, plug-and-play device (i.e., the Odoo IoT program is
  pre-installed);
- :doc:`Windows virtual IoT <iot/windows_iot>`: Odoo IoT program for Windows that can be installed
  on a Windows computer.

.. note::
   - :abbr:`MRP (Material Requirement Planning)` devices, including cameras and measurement tools,
     are not compatible with Windows virtual IoT.
   - Multiple IoT systems can be used at the same time.
   - It is also possible to create a Windows Virtual Machine on a MacOS/Linux computer. However,
     this option is not supported by Odoo, and no troubleshooting assistance will be provided.

.. _iot/iot/iot-subscription:

IoT box subscription
====================

An IoT box subscription is required for production use of IoT systems. If you have issues related
to your subscription, contact the database's account manager or Odoo partner for assistance.

.. tip::
   If the subscription is linked to an `Odoo.com <https://www.odoo.com>`_ portal user, check the
   information on the portal's subscription page.

.. seealso::
   - `Odoo's compatible IoT devices <https://www.odoo.com/app/iot-hardware>`_
   - `Odoo Tutorials: Internet of Things (IoT) Tutorials
     <https://www.odoo.com/slides/internet-of-things-iot-175>`_
   - `IoT system FAQ <https://www.odoo.com/app/iot-faq>`_

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

      Connect devices such as printers, screens, measurement tools, etc., to the IoT system.

   .. card:: HTTPS certificate
      :target: iot/iot_advanced/https_certificate_iot

      Verify your IoT system and database meet the eligibility requirements for HTTPS certificate
      generation and address any related issues.

   .. card:: IoT system updates
      :target: iot/iot_advanced/updating_iot

      Update your IoT system's image, core code, and handlers to benefit from the latest IoT fixes
      and features or reset the IoT system if needed.

.. toctree::
   :titlesonly:

   iot/iot_box
   iot/windows_iot
   iot/connect
   iot/iot_advanced
   iot/devices
