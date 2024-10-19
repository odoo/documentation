
===================
Install Windows IoT
===================

The latest version of the Windows :abbr:`IoT (Internet of Things)` can be downloaded
from `Odoo Download <https://odoo.com/download/>`_ page.

To download from the :guilabel:`Odoo Download` page, find the section for the version of Odoo (e.g.
16.0, 17.0), and select the :guilabel:`Download` button for :guilabel:`Windows`.

Next, install and setup the downloaded Odoo :file:`.exe` file. After the instructions screen, click
:guilabel:`Next` to start the installation, and agree to the :abbr:`TOS (Terms of Service)`.

During the next step of the installation, select :guilabel:`Odoo IoT` from the :guilabel:`Select
the type of install` drop-down menu.

.. example::
   For reference, the following should be installed:

   - :guilabel:`Odoo server`
   - :guilabel:`Odoo IoT`
   - :guilabel:`Nginx WebServer`
   - :guilabel:`Ghostscript interpreter`

Ensure there is enough space on the computer for the installation, then click :guilabel:`Next`.

To complete the installation, select the :guilabel:`Destination Folder`, and click
:guilabel:`Install`.

.. warning::
   Choosing `C:\\odoo` as the install location allows for the *Nginx* server to start. Odoo's
   Windows virtual :abbr:`IoT (Internet of Things)` box software should **not** be installed inside
   any of the Windows user's directories. Doing so does **not** allow for *Nginx* to initialize.

The installation may take a few minutes. When complete, click :guilabel:`Next` to continue.

Then, ensure that the :guilabel:`Start Odoo` box is checked, and click :guilabel:`Finish`. After
installation, the Odoo server runs, and automatically opens `http://localhost:8069` on a web
browser. The webpage should display the windows :abbr:`IoT (Internet of Things)` homepage.

.. tip::
   A :ref:`restart <iot/restart_windows_iot>` of the Windows IoT program may be necessary if the web
   browser does not display anything.
