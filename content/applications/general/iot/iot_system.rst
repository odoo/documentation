:nosearch:
:show-content:
:show-toc:

==========
IoT System
==========

Prerequisite
============

Network
-------

The IoT system needs to be connected to the **same network** as the devices connected to Odoo and the IoT devices.
We do also suppose that the network have an internet access and does not block any communication to and from the IoT system.

.. note::
      The internet protocol itself does not matter. The IoT system and the Odoo users can be connected to the network via WiFi or Ethernet.


Odoo Subscription
-----------------
An "IoT box subscription" line is required on your Odoo subscription in order to use the :abbr:`IoT (Internet of Things)` system with a secured connection
  
  .. seealso::
     :doc:`config/https_certificate_iot`


System Details
--------------

.. |fa-windows-awesome| raw:: html

   <i class="fa fa-windows" aria-hidden="true"></i>

.. |fa-box-awesome| raw:: html

   <i class="fa fa-archive" aria-hidden="true"></i>

Before you start using Odoo IoT app, you need to choose an IoT system between:

.. toctree::
   :titlesonly:
   
   iot_system/iot_box
   iot_system/windows_iot


.. list-table:: IoT System comparison
   :widths: 50 50
   :header-rows: 1

   * - |fa-box-awesome| IoT Box (physical IoT box, raspberry pi IoT box)
     - |fa-windows-awesome| Windows IoT (Virtual IoT)
   * - Credit cart-size micro-computer with IoT program pre-installed
     - Windows program installable on a Windows computer
   * - Row 2, column 1
     - Row 2, column 3

FAQ
===

What IoT system is the best for me?
-----------------------------------

It depends on your needs. 
Windows IoT can be installed on any Windows computer. If you happen to already use it to browse on Odoo, it might be the best choice for you.
If you need a plug-and-play device, the IoT Box is the best choice.

Can I use several IoT systems at the same time?
------------------------------------------------

Yes, you can use several IoT systems at the same time.


Can I use a Mac / Linux computer as an IoT system?
--------------------------------------------------

No, it is only compatible with Windows IoT or raspberry pi (IoT Box).

You can however use third-party software to virtualize Windows IoT on your Mac / Linux computer by using a Windows virtual machine.
However you will receive no support from Odoo on this configuration.
