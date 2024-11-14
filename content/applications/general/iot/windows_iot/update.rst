=================
IoT system update
=================



.. _iot/update/image:

Image update
============




   To update the Windows :abbr:`IoT (Internet of Things)`, first, uninstall the previous version of
   the Odoo Windows program, and then reinstall it using the most up-to-date installation package.

   To begin the installation, navigate to the Odoo 16 (or higher) installation package for
   Enterprise or Community - Windows edition, at `Odoo's download page
   <https://odoo.com/download>`_.



Windows virtual :abbr:`IoT (Internet of Things)` box may occasionally need an update to work
properly.

The following processes cover the :ref:`uninstallation <iot/config/uninstall-windows-iot>` and
:ref:`re-installation <iot/config/re-install-windows-iot>` of the Windows virtual :abbr:`IoT
(Internet of Things)` box.

.. _iot/config/uninstall-windows-iot:

Uninstalling Windows IoT
========================

Prior to upgrading the Windows virtual :abbr:`IoT (Internet of Things)` box, the previous version
should be uninstalled first.

.. important::
   Before uninstalling a previous version of the Windows virtual :abbr:`IoT (Internet of Things)`
   box, ensure that there is a newer version of Windows virtual :abbr:`IoT (Internet of Things)` box
   available, compared to the version currently installed. To do so, navigate to the `Odoo Nightly
   builds <https://nightly.odoo.com/>`_ page.

   On the :guilabel:`Odoo Nightly builds` page, navigate to :menuselection:`Builds (stable version)
   --> windows/` to view the date next to the :file:`odoo_(version).latest.exe` file; where
   *(version)* is equal to the version of Odoo (e.g. 16.0, 17.0). The latest version of the Windows
   virtual :abbr:`IoT (Internet of Things)` box can be downloaded by selecting this file, or it is
   always available at the `Odoo Download <https://odoo.com/download/>`_ page.

Uninstalling the Windows virtual :abbr:`IoT (Internet of Things)` box is done through the Windows
program manager.

On any version of Windows, search for `program` to open the :menuselection:`Programs --> Programs
and Features` section of the :guilabel:`Control Panel`. Then, select :guilabel:`Uninstall or change
a program`. Next, search for `Odoo`, and click the :guilabel:`... (three dot)` menu on the
:guilabel:`Odoo.exe` program to uninstall.

Confirm the uninstallation, and follow the steps to uninstall through the Odoo uninstall wizard.

.. _iot/config/re-install-windows-iot:

Download and re-install
=======================

The latest version of the Windows virtual :abbr:`IoT (Internet of Things)` box can be downloaded
from the `Odoo Nightly builds <https://nightly.odoo.com/>`_ page or it is always available at the
`Odoo Download <https://odoo.com/download/>`_ page.

To download from the :guilabel:`Odoo Nightly builds` page, navigate to :menuselection:`Builds
(stable version) --> windows/` to and select the :file:`odoo_(version).latest.exe` file; where
*(version)* is equal to the version of Odoo (e.g. 16.0, 17.0).

To download from the :guilabel:`Odoo Download` page, find the section for the version of Odoo (e.g.
16.0, 17.0), and select the :guilabel:`Download` button for :guilabel:`Windows`.

Next, install and setup the downloaded Odoo :file:`.exe` file. After the instructions screen, click
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
=================================================

To complete the re-installation, select the :guilabel:`Destination Folder`, and click
:guilabel:`Install`.

.. warning::
   Choosing `C:\\odoo` as the install location allows for the *Nginx* server to start. Odoo's
   Windows virtual :abbr:`IoT (Internet of Things)` box software should **not** be installed inside
   any of the Windows user's directories. Doing so does **not** allow for *Nginx* to initialize.

The installation may take a few minutes. When complete, click :guilabel:`Next` to continue.

Then, ensure that the :guilabel:`Start Odoo` box is checked, and click :guilabel:`Finish`. After
installation, the Odoo server runs, and automatically opens `http://localhost:8069` on a web
browser. The webpage should display the :abbr:`IoT (Internet of Things)` box homepage.

.. tip::
   A :ref:`restart <iot/restart_windows_iot>` of the Windows IoT program may be necessary if the web
   browser does not display anything.
