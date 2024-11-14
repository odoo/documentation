==================
IoT system updates
==================

Due to the complexity of IoT systems, the term *updating* can refer to several processes, including:

- :ref:`Updating the IoT system's image and core code <iot/updating_iot/image-code>`;
- :ref:`Updating the handlers <iot_updating_iot/handlers>`, which include the interfaces and drivers.

.. _iot/updating_iot/image-code:

Image and core code update
==========================

.. tip::
   Updating the IoT system's image is often required after upgrading the Odoo database to a newer
   version.

.. tabs::

   .. group-tab:: IoT box

      To update the IoT box's image, flash its SD card. Flashing can be performed using
      `balenaEtcher <https://etcher.balena.io>`_, a free and open-source tool for writing disk
      images to SD cards.

      .. note::
         - A computer with a micro SD card reader/adapter is required to flash the micro SD card.
         - An alternative software for flashing the micro SD card is `Raspberry Pi Imager
           <https://www.raspberrypi.com/software/>`_.

      #. `Download balenaEtcher. <https://etcher.balena.io/#download-etcher>`_
      #. Go to `nightly <http://nightly.odoo.com/master/iotbox>`_, click
         :guilabel:`iotbox-latest.zip` to download the latest IoT image (compatible with *all*
         supported versions of Odoo), and extract the files.
      #. Insert the IoT box's micro SD card into the computer or adapter.
      #. Open balenaEtcher, click :guilabel:`Flash from file`, and select :file:`iotbox-latest.zip`.

         .. tip::
            You can also flash from a URL: Click :guilabel:`Flash from URL` and enter the following
            URL: `http://nightly.odoo.com/master/iotbox/iotbox-latest.zip`.

      #. Click :guilabel:`Select target` and select the SD card.
      #. Click :guilabel:`Flash` and wait for the process to finish.

      .. image:: updating_iot/etcher-flash.png
         :alt:  Flashing the SD card with balenaEtcher

      Alternatively, you can also update the IoT box's image and/or core code (depending on the IoT
      box's current version) from the IoT box's homepage:

      #. :ref:`Access the IoT box's homepage <iot/iot-box/homepage>`.
      #. Click the :icon:`fa-cogs` (:guilabel:`cogs`) button at the top-right and, in the
         :guilabel:`Version` section, click :guilabel:`Update`.
      #. Scroll to the end of the :guilabel:`Upgrade IoT box` popup and click the :guilabel:`Upgrade
         to xx.xx` or :guilabel:`Upgrade` button (where `xx.xx` is the version number).

      .. important::
         This process may take over 30 minutes. **Do not** turn off or unplug the IoT box during
         this time, as doing so could leave the device in an inconsistent state, requiring the IoT
         box to be reflashed with a new image.

      .. tip::
         Click the :icon:`fa-cog` (:guilabel:`gear`) button to return to the IoT system's homepage.

   .. group-tab:: Windows virtual IoT

      To update the Windows virtual IoT's image and code, :ref:`uninstall the program
      <iot/windows_iot/uninstall>` and :ref:`reinstall <iot/windows-iot/installation>` the latest
      package.

.. _iot_updating_iot/handlers:

Handler (driver) update
=======================

To update the IoT system's handlers (drivers and interfaces) and synchronize them with the
configured server handler's code, for example, to resolve issues where :doc:`devices <../devices>`
are not functioning properly with the IoT system:

#. Access the :ref:`IoT box's <iot/iot-box/homepage>` or :ref:`Windows virtual IoT's
   <iot/windows-iot/homepage>` homepage.
#. Click the :icon:`fa-cogs` (:guilabel:`cogs`) button at the top-right, then, at the bottom, click
   the :guilabel:`Log level` button.
#. In the :guilabel:`Handler logging` popup, scroll down to the :guilabel:`Debug` section and
   click :guilabel:`Load IOT Handlers`.

.. important::
   If you have an :doc:`on-premise </administration/on_premise>` or :doc:`Odoo.sh
   </administration/odoo_sh/overview/introduction>` database, the configured server must be
   up-to-date to ensure the handlers' code includes the latest fixes and patches.

.. note::
   A handler update is also performed automatically every time the IoT system is restarted unless
   the :guilabel:`Automatic drivers update` option is disabled in the :guilabel:`Technical
   information` tab in the :ref:`IoT system's form <iot/connect/IoT-form>` in Odoo.
