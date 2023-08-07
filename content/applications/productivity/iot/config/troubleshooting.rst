===============
Troubleshooting
===============

IoT box connection
==================

Unable to locate the pairing code to connect the IoT box
--------------------------------------------------------

The pairing code should be printed on receipt printers connected to the :abbr:`IoT (Internet of
Things)` box and should also be displayed on connected monitors.

The pairing code doesn't show under the following circumstances:

- The :abbr:`IoT (Internet of Things)` box is already connected to an Odoo database.
- The :abbr:`IoT (Internet of Things)` box is not connected to the Internet.
- The code is only valid for 5 minutes after the :abbr:`IoT (Internet of Things)` box has started.
  It's automatically removed from connected displays when this time has expired.
- The version of the :abbr:`IoT (Internet of Things)` box image is too old. If the :abbr:`IoT
  (Internet of Things)` box image is from an earlier version, then the SD card of the :abbr:`IoT
  (Internet of Things)` box will need to be re-flashed to update the image (see :doc:`Flashing the
  SD Card <flash_sdcard>`).

If none of the cases listed above correct the issue, then make sure that the :abbr:`IoT (Internet of
Things)` box has correctly started, by checking that a fixed green LED is showing next to the power
port.

IoT box is connected but it's not showing in the database
---------------------------------------------------------

When an :abbr:`IoT (Internet of Things)` box connects to a database, it may restart. If so, it can
take up to five minutes before appearing in the database. If the :abbr:`IoT (Internet of Things)`
box is still not showing after five minutes, make sure that the :abbr:`IoT (Internet of Things)` box
can reach the database and that the server doesn't use a multi-database environment.

To access the database from the :abbr:`IoT (Internet of Things)` box, open a browser and type in the
database address.

The IoT box is connected to the Odoo database, but cannot be reached
--------------------------------------------------------------------

Make sure that the :abbr:`IoT (Internet of Things)` box and the computer running the browser are
located on the same network, as the :abbr:`IoT (Internet of Things)` box cannot be reached from
outside the local network.

The HTTPS certificate doesn't generate
--------------------------------------

In order to generate a :abbr:`HTTPS (Hypertext Transfer Protocol Secure)` certificate, an IoT box
subscription is required for the :abbr:`IoT (Internet of Things)` box. Connecting the :abbr:`IoT
(Internet of Things)` box prior to configuring an :abbr:`IoT (Internet of Things)` subscription for
the database and :abbr:`IoT (Internet of Things)` box with the Account Manager will result in an
unsecured connection.

In addition, a firewall can also prevent the :abbr:`HTTPS (Hypertext Transfer Protocol Secure)`
certificate from generating correctly. In this case, deactivate the firewall until the certificate
is successfully generated. It should also be noted that certain devices, such as a router that has
a built-in firewall, can prevent the :abbr:`HTTPS (Hypertext Transfer Protocol Secure)` certificate
from generating.

.. seealso::
   :doc:`HTTPS certificate (IoT) <https_certificate_iot>`

Printer
=======

The printer is not detected
---------------------------

If a printer doesn't show up in the devices list, go to the :abbr:`IoT (Internet of Things)` box
homepage and make sure that it is listed under :guilabel:`Printers`.

.. image:: troubleshooting/printer-status.png
   :align: center
   :alt: The IoT box Home Page landing page.

If the printer is not present on the :abbr:`IoT (Internet of Things)` box homepage, click
:guilabel:`Printers Server`, go to the :guilabel:`Administration` tab and click on :guilabel:`Add
Printer`. If the printer is not present in the list, it's likely not connected properly.

The printer outputs random text
-------------------------------

For most printers, the correct driver should be automatically detected and selected. However, in
some cases, the automatic detection mechanism might not be enough, and if no driver is found, the
printer might print random characters.

The solution is to manually select the corresponding driver. On the :abbr:`IoT (Internet of Things)`
box homepage, click on :guilabel:`Printers Server`, go to the :guilabel:`Printers` tab and select
the printer in the list. In the :guilabel:`Administration` dropdown, click on :guilabel:`Modify
Printer`. Follow the steps and select the *make* and *model* corresponding to the printer.

.. image:: troubleshooting/modify-printer.png
   :align: center
   :alt: Edit the printer connected to the IoT box.

.. note::
   Epson and Star receipt printers and Zebra label printers do not need a driver to work. Make sure
   that no driver is selected for those printers.

The Zebra printer doesn't print anything
----------------------------------------

Zebra printers are quite sensitive to the format of the Zebra Programming Language (ZPL) code that
is printed. If nothing comes out of the printer or blank labels are printed, try changing the format
of the report that is sent to the printer by accessing :menuselection:`Settings --> Technical -->
User Interface --> Views` in :ref:`developer mode <developer-mode>` and look for the corresponding
template.

.. seealso::
   Check out Zebra's instructions on printing :abbr:`ZPL (Zebra Programming Language)` files
   `here
   <https://supportcommunity.zebra.com/s/article/Print-a-zpl-file-using-the-Generic-Text-Printer>`_.

Barcode scanner
===============

The characters read by the barcode scanner don't match the barcode
------------------------------------------------------------------

By default, most barcode scanners are configured in the US QWERTY format. If the barcode scanner
uses a different layout, go to the form view of the device (:menuselection:`IoT App --> Devices -->
Barcode Device`) and select the correct format.

Nothing happens when a barcode is scanned
-----------------------------------------

Make sure that the correct device is selected in the :menuselection:`Point of Sale` configuration
and that the barcode is configured to send an `ENTER` character (keycode 28) at the end of every
barcode. To do so, navigate to :menuselection:`PoS app --> 3-Dot Menu on the PoS --> IoT Box section
--> Edit`.

The barcode scanner is detected as a keyboard
---------------------------------------------

.. important::
   Some barcode scanners do not advertise themselves as barcode scanners but as a USB keyboard
   instead, and will not be recognized by the :abbr:`IoT (Internet of Things)` box.

The device type can be manually changed by going to its form view (:menuselection:`IoT App -->
Devices --> Barcode Device`) and activating the :guilabel:`Is scanner` option.

.. image:: troubleshooting/barcode-scanner-settings.png
   :align: center
   :alt: Modifying the form view of the barcode scanner.

Cash drawer
===========

The cash drawer does not open
-----------------------------

The cash drawer should be connected to the printer and the :guilabel:`Cash drawer` checkbox should
be ticked in the :abbr:`PoS (Point of Sale)` configuration. To do so, navigate to
:menuselection:`POS app --> 3-Dot Menu on the POS --> IoT Box section --> Edit --> Receipt Printer
--> Cashdrawer checkbox`.
