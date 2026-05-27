==================
IoT system updates
==================

.. _iot/updating_iot/image-code:

IoT Boxes and Virtual IoT Boxes update themselves automatically every week.
You can still force an update if you think your IoT system is not up-to-date
by accessing the :ref:`homepage <iot/iot-box/homepage>`, clicking the
:icon:`fa-cogs` (:guilabel:`cogs`) button at the top-right, then :guilabel:`Update`
in the :guilabel:`Version` section.

.. warning::
  **Do not turn off or unplug the IoT box** during the update process, as doing so could leave
  the device in an inconsistent state, requiring the IoT box to be reflashed with a new image.

In extreme cases, you might need to perform a full reset of the IoT system,
which requires flashing the IoT box's SD card or uninstalling and reinstalling
the Windows virtual IoT package.

.. tabs::

   .. group-tab:: IoT box

      .. note::
         - A computer with a micro SD card reader/adapter is required to flash the micro SD card.
         - An alternative software for flashing the micro SD card is `Raspberry Pi Imager
           <https://www.raspberrypi.com/software/>`_.

      #. `Download balenaEtcher <https://etcher.balena.io/#download-etcher>`_
         (a free and open-source tool for writing disk images to SD cards).
      #. Insert the IoT box's micro SD card into the computer or adapter.
      #. | Open balenaEtcher, click :guilabel:`Flash from URL`, and enter the following URL:
         | `http://nightly.odoo.com/master/iotbox/iotbox-latest.zip`.
      #. Click :guilabel:`Select target` and select the SD card.
      #. Click :guilabel:`Flash` and wait for the process to finish.

      .. image:: updating_iot/etcher-flash.png
         :alt:  Flashing the SD card with balenaEtcher

   .. group-tab:: Windows virtual IoT

      :ref:`Uninstall the program <iot/windows_iot/uninstall>` and
      :ref:`reinstall <iot/windows-iot/installation>` the latest package.
