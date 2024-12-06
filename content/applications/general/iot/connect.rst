==============================
IoT system connection to Odoo
==============================

Prerequisites
=============

To connect the IoT system to an Odoo database, the following prerequisites must be met:

- The Odoo database must be a **production** instance.
- The IoT app must be installed.
- The IoT system must be connected to the network.
- The computer used to connect to Odoo must be connected to the same network as the IoT system.

.. seealso::
   - :doc:`iot_box`
   - :doc:`windows_iot`

Connection
==========

The IoT system can be connected to the Odoo database using a :ref:`pairing code
<iot/connect/pairing-code>` or a :ref:`connection token <iot/connect/token>`.

.. _iot/connect/pairing-code:

Connection using a pairing code
-------------------------------

#. Retrieve the IoT's system pairing code:

   .. tabs::

      .. group-tab:: IoT box

         Connect the IoT box to an external monitor or printer. If the IoT box was already plugged
         prior to this, reboot it by unplugging it for a few seconds and replugging it.

         - External monitor: The pairing code should be displayed on the screen a few minutes after
           rebooting the IoT box.
         - Printer: The pairing code should be printed automatically.

         .. tip::
            If no external monitor or printer is connected to the IoT box, access the :ref:`IoT
            box's homepage <iot/iot-box/homepage>`; the code is displayed in the :guilabel:`Pairing
            Code` section.

      .. group-tab:: Windows virtual IoT

         On the computer where the Windows virtual IoT is installed, open the IoT system's homepage
         in a web browser by navigating to the URL `http://localhost:8069`. Then, scroll to the
         :guilabel:`Pairing Code` section.

#. In Odoo, open the IoT app and click :guilabel:`Connect`.
#. In the :guilabel:`Connect an IoT Box` popup that opens, enter the :guilabel:`Pairing code`.
#. Click :guilabel:`Pair`.

.. note::
   By default, the pairing code is displayed for up to 5 minutes after the IoT system starts. If the
   code is no longer visible, reboot the IoT box or :ref:`restart the
   Windows virtual IoT service <iot/windows_iot/restart>` to display the pairing code again.
   Alternatively, connect the IoT system to the database using a :ref:`connection token
   <iot/connect/token>`.

.. _iot/connect/token:

Connection using a connection token
-----------------------------------

#. In Odoo, open the IoT app and click :guilabel:`Connect`.
#. In the :guilabel:`Connect an IoT Box` popup that opens, copy the :guilabel:`Token`.
#. Access the :ref:`IoT box's <iot/iot-box/homepage>` or :ref:`Windows virtual IoT's
   <iot/windows-iot/homepage>` homepage.
#. In the :guilabel:`Odoo database connected` section, click :guilabel:`Configure`.
#. Paste the token into the :guilabel:`Server Token` field and click :guilabel:`Connect`.

.. _iot/connect/IoT-form:

IoT system form
===============

Once the IoT system is connected to the Odoo database, it is displayed as a card in the IoT app.
Click the IP address on the card to access the IoT system's homepage.

.. seealso::
   - :ref:`Access the IoT box's homepage <iot/windows-iot/homepage>`
   - :ref:`Access the Windows virtual IoT's homepage <iot/iot-box/homepage>`.

Click the card to access the list of :doc:`devices <devices>` connected to the IoT system and the
IoT's system's :guilabel:`Technical Information` such as its :guilabel:`Identifier`,
:guilabel:`Domain address` and :guilabel:`Image version`.

Click :guilabel:`Download Logs` to download

.. note::
   By default, drivers are automatically :ref:`udpated <iot_updating_iot/handlers>` every time the
   IoT system is restarted. To disable automatic updates, uncheck the :guilabel:`Automatic drivers
   update` option.

.. _iot/connect/troubleshooting:

Troubleshooting
===============

The pairing code does not appear or does not work
-------------------------------------------------

The :ref:`pairing code <iot/connect/pairing-code>` might not be displayed or printed under the
following circumstances:

- The IoT system is not connected to the Internet.
- The IoT system is already connected to an Odoo database.
- The :ref:`pairing code <iot/connect/pairing-code>` display time has expired. Reboot the IoT box
  or :ref:`restart the Windows virtual IoT service <iot/windows_iot/restart>` to display the pairing
  code again.
- The IoT system's image version is too old and needs to be :ref:`updated
  <iot/updating_iot/image-code>`.

The IoT system is connected but does not appear in the database
---------------------------------------------------------------

The IoT system might take a few minutes to restart when it connects to a database. If it still does
not appear after a few minutes:

- Make sure the database can reach the database and the server does not use a multi-database
  environment.
- Reboot the IoT box or :ref:`restart the Windows virtual IoT service <iot/windows_iot/restart>` .

The IoT box is connected to the Odoo database but cannot be reached
-------------------------------------------------------------------

Make sure that the IoT system and the computer running the Odoo database are connected to the same
network.

The Windows virtual IoT's homepage cannot be accessed from another device
-------------------------------------------------------------------------

Check the :ref:`iot/windows-iot/firewall`.

The IoT system is disconnected from the database after an Odoo upgrade
----------------------------------------------------------------------

:ref:`Update the IoT system's image <iot/updating_iot/image-code>` by flashing the IoT box's card or
:ref:`uninstalling the Windows virtual IoT program <iot/windows_iot/uninstall>` and
:ref:`reinstalling <iot/windows-iot/installation>` the latest package.

.. toctree::
   :titlesonly:

   connect/ssh_connect
