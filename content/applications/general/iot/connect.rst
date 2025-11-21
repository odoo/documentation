=============================
IoT system connection to Odoo
=============================

Prerequisites
=============

To connect the IoT system to an Odoo database, the following prerequisites must be met:

- The Internet of Things (IoT) app must be :ref:`installed <general/install>`.
- The IoT system must be connected to the network.
- The device connecting to Odoo must be on the same network as the IoT system.

.. note::
   It is recommended to connect the IoT system to a **production** instance, as other types of
   environments may cause issues (e.g., with :ref:`HTTPS certificate generation
   <iot/https_certificate_iot/iot-eligibility>`).

.. seealso::
   - :doc:`iot_box`
   - :doc:`windows_iot`

Connection
==========

To connect the IoT system to an Odoo database, open the IoT app and click :guilabel:`Connect`.

The browser then scans the network to which the computer is connected for available IoT systems. If
an IoT system is detected, it is connected automatically. If multiple IoT systems are found, select
the appropriate one in the popup that opens, then click :guilabel:`Connect`. If no IoT system is
detected automatically, try connecting it to the database using a :ref:`pairing code
<iot/connect/pairing-code>` or a :ref:`connection token <iot/connect/token>`.

.. tip::
   The IoT system’s name is composed of either the :doc:`IoT box <iot_box>` or the
   :doc:`Windows computer <windows_iot>`’s motherboard serial number, followed by its :ref:`pairing
   code <iot/connect/pairing-code>`.

.. _iot/connect/pairing-code:

Connection using a pairing code
-------------------------------

.. note::
   - The pairing code is valid for up to 2 hours after the IoT system powers on. If the code is
     no longer valid, restart the IoT box or :ref:`restart the Windows virtual IoT service
     <iot/windows_iot/restart>` to display another pairing code. Alternatively, connect the IoT
     system to the database using a :ref:`connection token <iot/connect/token>`.
   - The pairing code is not displayed if the IoT system is already connected to a database (e.g.,
     a test database). If necessary, :ref:`disconnect the IoT system from the database
     <iot/connect/disconnect>`.

#. Retrieve the IoT system's pairing code:

   .. tabs::

      .. group-tab:: IoT box

         Connect the IoT box to an external monitor or a USB printer. If the IoT box was already plugged
         prior to this, :ref:`restart <iot/iot-box/restart>` it.

         - External monitor: The pairing code will be displayed on the screen after (re)starting the
           IoT box.
         - USB-connected printer: The pairing code should be printed automatically.

         .. tip::
            If no external monitor or printer is connected to the IoT box, access the :ref:`IoT
            box's homepage <iot/iot-box/homepage>`; the code is displayed in the :guilabel:`Pairing
            Code` section.

      .. group-tab:: Windows virtual IoT

         On the computer with the Windows virtual IoT installed, open the IoT system's homepage
         in a web browser by navigating to the URL `http://localhost:8069`. Then, scroll to the
         :guilabel:`Pairing Code` section.

#. In Odoo, open the IoT app and click :guilabel:`Connect`.
#. In the :guilabel:`Searching for an IoT Box` popup that opens, click :guilabel:`Use Pairing Code`.
#. Enter the :guilabel:`Pairing code` and click :guilabel:`Connect`.

.. _iot/connect/token:

Connection using a connection token
-----------------------------------

#. :ref:`Enable the developer mode <developer-mode>`.
#. In Odoo, open the IoT app and click :guilabel:`Connect`.
#. In the :guilabel:`Searching for an IoT Box` popup that opens, click :guilabel:`Offline pairing`.
#. In the :guilabel:`Pair an IoT Box offline` popup that opens, copy the :guilabel:`Token`.
#. Access the :ref:`IoT box's <iot/iot-box/homepage>` or :ref:`Windows virtual IoT's
   <iot/windows-iot/homepage>` homepage.
#. In the :icon:`fa-link` :guilabel:`Odoo database connected` section, click :guilabel:`Configure`.
#. Paste the token into the :guilabel:`Server Token` field and click :guilabel:`Connect`.

.. note::
   Once the IoT system is connected to a database:

   - If the :doc:`Point of Sale app </applications/sales/point_of_sale>` is installed, a popup
     appears to select the :doc:`POS the IoT system should be associated with
     </applications/sales/point_of_sale/configuration/pos_iot>`.
   - If using an :doc:`IoT box <iot_box>`, wait a few minutes for it to update before using the
     connected :doc:`devices <devices>`.
   - The IoT system automatically requests an :ref:`HTTPS certificate
     <iot/connect/https_certificate>` and its homepage is updated to a new HTTPS URL ending with
     `.odoo-iot.com` when it becomes available.

.. seealso::
   :doc:`iot_advanced/troubleshooting`

.. _iot/connect/IoT-form:

IoT system form
===============

Once the IoT system is connected to the Odoo database, it is displayed as a card in the IoT app.
Click the card to access the IoT system's form, which allows to access the :ref:`IoT box's
<iot/iot-box/homepage>` or :ref:`Windows virtual IoT's <iot/windows-iot/homepage>` homepage and
view the list of :doc:`devices <devices>` connected to the IoT system.

.. tip::
   Enable the :ref:`developer mode <developer-mode>` to access the IoT system's :guilabel:`Technical
   Information`, such as its :guilabel:`Domain Address`, :guilabel:`Image Version`, and
   :ref:`SSL Certificate <iot/connect/https_certificate>` :guilabel:`End Date`.
   By default, drivers are automatically :ref:`updated <iot_updating_iot/handlers>` every time the
   IoT system is restarted. To disable automatic updates, uncheck the :guilabel:`Automatic drivers
   update` option.

.. _iot/connect/disconnect:

Disconnecting an IoT system from a database
===========================================

To disconnect the IoT system from a database, follow these steps:

#. Open the IoT app and click the relevant IoT system's card.
#. Click the :icon:`fa-cog` :guilabel:`(Actions)` icon, and select :guilabel:`Delete`.

.. tip::
   Alternatively:

   #. Access the :ref:`IoT box's <iot/iot-box/homepage>` or :ref:`Windows virtual IoT's
      <iot/windows-iot/homepage>` homepage.
   #. Click :guilabel:`Configure` in the :icon:`fa-link` :guilabel:`Odoo database connected`
      section.
   #. Click :guilabel:`Disconnect` in the popup that opens.

.. _iot/connect/https_certificate:

HTTPS certificate
=================

:abbr:`HTTPS (Hypertext Transfer Protocol Secure)` is the secure, encrypted version of :abbr:`HTTP
(Hypertext Transfer Protocol)`. It uses :abbr:`TLS (Transport Layer Security)` (previously
:abbr:`SSL (Secure Sockets Layer)`) certificates to authenticate the server and protect the data
exchanged between a browser and a website. Some network devices, such as payment terminals, require
a valid HTTPS certificate to communicate with the IoT system; without it, they cannot interact
properly.

.. note::
   In this documentation and throughout Odoo, the term *HTTPS certificate*  refers to a valid
   SSL certificate that allows an HTTPS connection.

When the IoT system is (re-)started and connected to a database, it automatically downloads the
HTTPS certificate if the database meets the following eligibility criteria:

.. _iot/https_certificate_iot/iot-eligibility:

- The database must be a **production** instance. The database instance should not be a copy, a
  duplicate, a staging, or a development environment.
- The Odoo subscription must be ongoing (:guilabel:`In Progress` status).

When the certificate has been received:

- The IoT system's homepage address is updated to a new HTTPS URL ending with `.odoo-iot.com`.
- The :guilabel:`HTTPS certificate` banner displays the certificate's validity period. To view this
  information, click the :icon:`fa-cogs` (:guilabel:`cogs`) button at the top-right of the IoT
  system's homepage.

  .. image:: connect/https-valid.png
     :alt: IoT box homepage with HTTPS certificate validity date.

.. seealso::
   :ref:`iot/troubleshooting/https_certificate`
