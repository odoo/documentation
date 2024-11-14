===============================
Flashing the SD card on IoT box
===============================

.. important::
   This update does **not** apply to the Windows :abbr:`IoT (Internet of Things)` box (Odoo 16 and
   higher).

In some circumstances, the :abbr:`IoT (Internet of Things)` box's micro SD Card may need to be
re-flashed with *Etcher* software to benefit from Odoo's latest :abbr:`IoT (Internet of Things)`
image update. This means the Odoo :abbr:`IoT (Internet of Things)` box software may need to be
updated in instances of a new :abbr:`IoT (Internet of Things)` box, or when a handler's update, or
an update from the :abbr:`IoT (Internet of Things)` box home page, does not resolve issues.

.. note::
   - It is often necessary to re-flash the :abbr:`IoT (Internet of Things)` box's image after
     upgrading the Odoo database to a new version.
   - A computer with a micro SD card reader/adapter is **required** to re-flash the micro SD card.

First, begin by downloading `Etcher <https://www.balena.io/etcher#download-etcher>`_. It is a free,
open-source utility, used for burning image files onto drives. After the download completes, install
and launch the program on the computer.

Then, download the latest :abbr:`IoT (Internet of Things)` image from `nightly
<http://nightly.odoo.com/master/iotbox>`_, which will be labeled as `iotbox-latest.zip`. This
particular image is compatible with *all* supported versions of Odoo.

After this step is complete, insert the :abbr:`IoT (Internet of Things)` box's micro SD card into
the computer or reader. Open *Etcher*, and select :guilabel:`Flash from file`, then find and select
the `iotbox-latest.zip` image and extract it. Next, select the drive the image should be burned to.

Lastly, click :guilabel:`Flash`, and wait for the process to finish.

.. image:: updating_iot/etcher-app.png
   :align: center
   :alt: Balena's Etcher software dashboard.

.. tip::
   Balena's *Etcher* software also allows for the administrator to flash the :abbr:`SD (Secure
   Digital)` card from a :abbr:`URL (Uniform Resource Locator)`. To flash from a :abbr:`URL (Uniform
   Resource Locator)`, simply click :guilabel:`Flash from URL`, instead of :guilabel:`Flash from
   file`.

   Then, enter the following: `http://nightly.odoo.com/master/iotbox/iotbox-latest.zip`.

   .. image:: updating_iot/url-flash.png
      :align: center
      :alt:  A view of Balena's Etcher software, with the flash from URL option highlighted.

.. note::
   An alternative software for flashing the micro SD card is `Raspberry Pi Imager
   <https://www.raspberrypi.com/software/>`_.