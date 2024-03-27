==============
Updating (IoT)
==============

Due to the complexity of the :abbr:`IoT (Internet of Things)` box, and virtual Windows :abbr:`IoT
(Internet of Things)` box, the term 'updating' can mean several different things.

The actual drivers can be updated, the core code on the :abbr:`IoT (Internet of Things)` box can be
updated, or a new image can be flashed (using a physical :abbr:`IoT (Internet of Things)` box).

This document explores the various ways to update :abbr:`IoT (Internet of Things)` boxes to ensure
smooth operation of :abbr:`IoT (Internet of Things)` box processes and devices.

.. _iot/config/flash:

Flashing the SD card on IoT box
===============================

.. important::
   This update does **not** apply to the Windows :abbr:`IoT (Internet of Things)` box (Odoo 16 and
   higher).

   To update the Windows :abbr:`IoT (Internet of Things)`, first, uninstall the previous version of
   the Odoo Windows program, and then reinstall it using the most up-to-date installation package.

   To begin the installation, navigate to the Odoo 16 (or higher) installation package for
   Enterprise or Community - Windows edition, at `Odoo's download page
   <https://odoo.com/download>`_.

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

Windows IoT update
==================

Windows virtual :abbr:`IoT (Internet of Things)` box may occasionally need an update to work
properly.

The following processes cover the uninstallation and re-installation of the Windows virtual
:abbr:`IoT (Internet of Things)` box.

.. important::
   Before proceeding with the uninstallation of a previous version of the Windows virtual
   :abbr:`IoT (Internet of Things)` box, check Odoo's latest download page to ensure a newer version
   of Odoo's virtual :abbr:`IoT (Internet of Things)` box is available.

   To reach the download site for the latest update, use the following URL:
   `https://nightly.odoo.com/16.0/nightly/windows/`.

   It is imperative that the `16.0` be replaced with the version of Odoo that the database is
   running on (only full versions or long supported versions). The most recent file has `latest` in
   its filename.

   .. warning::
      Note the date of the upload to the right of the filename. If the date is after the last
      Windows virtual :abbr:`IoT (Internet of Things)` box installation then download the new
      *latest* version. To install an update a new file download is required.

Uninstalling Windows IoT
------------------------

Prior to upgrading the Windows virtual :abbr:`IoT (Internet of Things)` box, the previous version
should be uninstalled first.

Uninstalling the Windows virtual :abbr:`IoT (Internet of Things)` box is done through the Windows
program manager.

Using any Windows version, search for `program`. Then, from the control panel, select :guilabel:`Add
or Remove Programs`. Next, search for `Odoo`, and click the :guilabel:`... (three dot)` menu to
uninstall.

Confirm the uninstallation, and follow the steps to uninstall through the Odoo uninstall wizard.

Download and re-install
-----------------------

To begin the re-installation, navigate to the latest installation package for Enterprise or
Community - Windows edition at  `Odoo's nightly download page
<https://nightly.odoo.com/16.0/nightly/windows/>`_.

.. important::
   It is imperative that the `16.0` be replaced with the version of Odoo that the database is
   running on. The latest file has `latest` in its filename.

Next, install and setup the Odoo :file:`.exe` file. After the instructions screen, click
:guilabel:`Next` to start the installation, and agree to the :abbr:`TOS (Terms of Service)`.

During the next step of the re-installation, select :guilabel:`Odoo IoT` from the :guilabel:`Select
the type of install` drop-down menu.

.. example::
   For reference, the following should be installed:

   - :guilabel:`Odoo server`
   - :guilabel:`Odoo IoT`
   - :guilabel:`Nginx WebServer`
   - :guilabel:`Ghostscript interpreter`

Ensure there is enough space on the computer for the installation, then click :guilabel:`Next`.

Set the destination and complete the installation
-------------------------------------------------

To complete the re-installation, select the :guilabel:`Destination Folder`, and click
:guilabel:`Install`.

.. warning::
   Choosing `C:\\odoo` as the install location allows for the *Nginx* server to start. Odoo's Windows
   virtual :abbr:`IoT (Internet of Things)` box software should **not** be installed inside any of
   the Windows user's directories. Doing so does **not** allow for *Nginx* to initialize.

The installation may take a few minutes. When complete, click :guilabel:`Next` to continue.

Then, ensure that the :guilabel:`Start Odoo` box is checked, and click :guilabel:`Finish`. After
installation, the Odoo server runs, and automatically opens `http://localhost:8069` on a web browser.
The webpage should display the :abbr:`IoT (Internet of Things)` box homepage.

.. tip::
   A restart of the Windows IoT program may be necessary if the web browser does not display
   anything. :ref:`iot/restart_windows_iot`

.. _iot/config/homepage-upgrade:

Update from the IoT box home page
=================================

In the background, the :abbr:`IoT (Internet of Things)` box uses a version of Odoo code to run and
connect to the Odoo database. This code may need to be updated in order for the :abbr:`IoT (Internet
of Things)` box to operate effectively. This operation should be completed on a routine basis, to
ensure the :abbr:`IoT (Internet of Things)` system, and its processes, stay up-to-date.

Go to the :abbr:`IoT (Internet of Things)` box home page by navigating to :menuselection:`IoT app
--> IoT Boxes`, and clicking on the :guilabel:`IP address` of the :abbr:`IoT (Internet of Things)`
box. Then, click on :guilabel:`Update` (next to the version number).

If a new version of the :abbr:`IoT (Internet of Things)` box image is available, an
:guilabel:`Upgrade to _xx.xx_` button appears at the bottom of the page. Click this button to
upgrade the unit, at which point the :abbr:`IoT (Internet of Things)` box flashes itself to the
newer version. All of the previous configurations are then saved.

.. important::
   This process can take more than 30 minutes. Do **not** turn off, or unplug, the :abbr:`IoT
   (Internet of Things)` box, as it would leave it in an inconsistent state. This means the
   :abbr:`IoT (Internet of Things)` box needs to be :ref:`re-flashed <iot/config/flash>` with a new
   image.

.. image:: updating_iot/flash-upgrade.png
   :align: center
   :alt: IoT box software upgrade in the IoT Box Home Page.

Handler (driver) update
=======================

There may be some instances where drivers or interfaces need to be updated for individual devices
(e.g. scales, measurement tools, etc.). The IoT handler's (drivers and interfaces) code can be
modified by syncing them with the configured server handler's code.

This can be helpful in instances where :abbr:`IoT (Internet of Things)` devices (e.g. scales,
measurement tools, etc.) are not working properly with the :abbr:`IoT (Internet of Things)` box.

For both the Windows :abbr:`IoT (Internet of Things)` (Odoo 16 and higher) and physical :abbr:`IoT
(Internet of Things)` box, this process can be performed manually from the :abbr:`IoT (Internet of
Things)` box home page. Go to the :abbr:`IoT (Internet of Things)` box home page by navigating to
:menuselection:`IoT app --> IoT Boxes`, and clicking on the :guilabel:`IP address` of the :abbr:`IoT
(Internet of Things)` box.

Next, click :guilabel:`Handlers list`, and then select :guilabel:`Load Handlers` at the bottom of
the page.

.. image:: updating_iot/load-handlers.png
   :align: center
   :alt: Handlers list on an IoT box with the load handlers button highlighted.

.. important::
   Handler's code is fetched from the configured server, and it needs to be up-to-date to have the
   latest fixes and patches.

.. note::
   A handler update is also performed automatically each time the :abbr:`IoT (Internet of Things)`
   box is restarted. The only exception to this process is if the *Automatic drivers update* is
   unchecked in the form view of the :abbr:`IoT (Internet of Things)` box on the Odoo server. This
   setting can be reached by going to :menuselection:`IoT App --> Select the IoT box --> Automatic
   drivers update`.
