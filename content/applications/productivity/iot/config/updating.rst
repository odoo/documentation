:show-content:
:hide-page-toc:
:show-toc:

========
Updating
========

Due to the complexity of the IoT box, the term "updating" is ambiguous as several part can be updated individually.

Handlers update
===============
Might also be referred as "drivers update" or "interfaces update".

Modify the IoT handlers (drivers and interfaces) code by syncing it with the configured server drivers code.

For both Windows and Iot-box, this can be performed manually in IoT boh homepage > Handlers list > Load Handlers
https://drive.google.com/file/d/1Y1CL4tsVD6WW2EQrKIK88R52uNO-qIP-/view?usp=sharing

.. note::
   This update is also performed automatically each time the IoT is restarted.
   Except, if you uncheck "Automatic Drivers update" in the form view of the IoT box on the Odoo server


Code update
===========
Might also be referred as "IoT Odoo update".

Behind the scene, the IoT uses Odoo core to run. To update its code the steps are different.

For IoT:
IoT box homepage > Version ... update
If the button simply show "upgrade" you can click it
It it show "Upgrade to _xx.xx_ it will actually perform an image upgrade

.. note::
   Unlike the handlers update this one will fetch the code from Odoo github repository and NOT the configured server.
   It means that you can benefit from the latest fix and features even if they are not deployed on your server yet

.. note::
   The code update is automatically done if the configured server version change (after an upgrade for instance)

For windows:
There is no way to individually do this, you will need to uninstall the current version then reinstall it, see windows_iot.rst


Image update
============
Might also be referred as "image upgrade" or "OS update".

Only for the IoT box as it does not make sense for windows IoT.
The IoT box run a particular OS (Operating System) which have some software installed by default in order to make some features of the IoT work.
Depending on the Odoo's version that your server uses, you might need to update your IoT box image in order to be compatible with it.

In order to update your image you need to reflash the SD card

TODO: merge the "Flashing the SD card" rst into this one ? In this case make so that the previous URL to the reflash page
redirect to this title

.. toctree::
   :titlesonly:

   updating/flash_sdcard
