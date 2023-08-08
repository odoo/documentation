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

Epson configuration special case
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Most Epson printers support printing receipts in Odoo :abbr:`POS (Point of Sale)` using the `GS v 0`
command. However, the following Epson printer models do not support this command:

- TM-U220
- TM-U230
- TM-P60
- TMP-P60II

Bypass this issue by configuring the printer to use the `ESC *` command instead.

Process to force ESC * command
******************************

Epson printer compatibility
^^^^^^^^^^^^^^^^^^^^^^^^^^^

The first step is to check whether the printer is incompatible with `GS v 0` command.

.. seealso::

   - `Epson GS v 0 documentation <https://reference.epson-biz.com/modules/ref_escpos/index.php?
     content_id=94>`_ for `GS v 0` compatible printers.
   - `Epson ESC * documentation <https://reference.epson-biz.com/modules/ref_escpos/index.php
     ?content_id=88>`_ for `ESC *` compatible printers.

If the printer is not compatible with the `ESC *` command then the following process is not
possible. Should the printer be compatible to use the `ESC *` command to print, follow this process
to configure the printer with the :abbr:`IoT (Internet of Things)` box.

IoT box configuration for ESC *
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

To configure the :abbr:`IoT (Internet of Things)` box to use the `ESC *` command to print, go to the
:abbr:`IoT (Internet of Things)` box homepage by navigating to :menuselection:`IoT app --> IoT
Boxes`. Then click on the :guilabel:`IP address` and this will direct to the :abbr:`IoT (Internet of
Things)` box homepage.

**Choosing the printer**

Now click on the :guilabel:`Printers server` button. This will redirect the browser to the *CUPS*
page. Next, go to :menuselection:`Administration --> Printers --> Add Printer`, choose the printer
that should be modified, and then click :guilabel:`Continue`.

.. tip::
   If the name of the printer is still uncertain, take the following steps:

   #. Take note of the listed printers on the *CUPS* page.
   #. Turn the printer off and refresh the page.
   #. Now compare the difference with the first list to see which printer disappeared.
   #. Turn the printer back on and refresh the page again.
   #. Double-check the list again to see if the printer re-appears.
   #. The printer that disappeared and reappears again on the listed printers is the name of the
      printer in question.

   .. note::
      This can be :guilabel:`Unknown` under :guilabel:`Local printers`.

**CUPS naming convention**

`CUPS` will prompt the admin for three pieces of information: the :guilabel:`Name`,
:guilabel:`Description` and the :guilabel:`Location`. The last two pieces of information do not need
to be specific, however, the :guilabel:`Name` should follow a particular convention to work with the
`ESC *` command.

The :guilabel:`Name` should match this convention:
`<printer_name>__IMC_<param_1>_<param_2>_..._<param_n>__`

A breakdown of the naming convention:

- `printer_name`: This is the printer name. It can be any character as long as it does not contain
  `_`, `/`, `#`, or ` ` (space character).
- `IMC`: This stands for *Image Mode Column* (the simplified name for `ESC *`).
- `param_1`: This stands for the specific parameter:

  - `SCALE<X>`: Scale of the picture (with the same aspect ratio). `X` should be an integer
    describing the scale percentage that should be used.

    .. example::
       `100` is the original size, `50` is half the size, `200` is twice the size.

  - `LDV`: *Low Density Vertical* (will be set to *High Density Vertical* if not specified).
  - `LDH`: *Low Density Horizontal* (will be set to *High Density Horizontal* if not specified).

    .. note::
       *Density* parameters might need to be configured in a particular way depending on the printer
       model.

.. seealso::
   Visit `Epson's ESC * documentation
   <https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=88>`_ and click on the
   printer model printer in the table above to see if the printer should set these parameters.

.. example::
   The following are examples of proper and improper name formatting:

   Proper name formatting:

   - `EPSONTMm30II__IMC__`
   - `EPSON_TM_U220__IMC_LDV_LDH_SCALE80__`

   Improper name formatting (this will not prevent printing, but the result might not have the
   expected printed output):

   - `EPSON TMm 30II` -> The name can't have spaces.
   - `EPSONTMm30II` -> The name itself is correct, but it won't use `ESC *`.
   - `EPSONTMm30II__IMC` -> This name is missing the end `__`.
   - `EPSONTMm30II__IMC_XDV__` -> The parameter `XDV` does not match any existing parameters.
   - `EPSONTMm30II__IMC_SCALE__` -> The parameter `SCALE` is missing the scale value.

**Finish adding a printer**

After setting the name of the printer with the appropriate naming convention, click
:guilabel:`Continue`. Next, set the :guilabel:`Make` value to :guilabel:`Raw` and for the
:guilabel:`Model` value, set this to :guilabel:`Raw Queue (en)`.

After completing these steps, click :guilabel:`Add Printer`. If everything was done correctly, the
page should redirect to the *Banners* page.

At this point the printer should have been created, now the :abbr:`IoT (Internet of Things)` box
just needs to detect it and then sync to Odoo's server (this could take a few minutes).

**Adding the printer to Odoo PoS**

Once the printer is visible on the Odoo database, don't forget to choose it in the :abbr:`PoS (Point
of Sale)`configuration as the :abbr:`IoT (Internet of Things)` printer. Navigate to
:menuselection:`Pos App --> Settings --> Connected Devices --> IoT Box --> Receipt Printer -->
Save`.

.. note::
   If the printer was set up incorrectly (it is still printing random text or the printed receipt is
   too big or small), then it cannot be modified via the printer name with *CUPS*. Instead, the
   above process can be repeated to set up another printer from scratch to create one with modified
   parameters.

**Example setup of the Epson TM-U220B printer using ESC**

.. spoiler::
   Click this text to reveal the example

   The following is an example of the troubleshooting process for a TM-U220B printer model using the
   `ESC *` command. The receipt pictured below is an example of a receipt that is printing correctly
   due to proper formatting (in theory):

   .. image:: troubleshooting/receipt-example.png
      :align: center
      :alt: Properly formatted receipt picture from a demo database.

   Trying to print this receipt right-away prior to the proper formatting will not work as the
   TM-U220B printer model does not support `GS v 0`. Instead random characters will print:

   .. image:: troubleshooting/receipt-print-random-letters.png
      :align: center
      :alt: Printer paper with seemingly random characters.

   To properly configure formatting for the Epson TM-U220B printer model take the following steps.

   After consulting Epson's website for compatibility for both of the commands: `GS v 0
   <https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=94>`_ and `ESC *
   <https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=88>`_, it can be seen
   that indeed the TM-U220B is not compatible with `GS v 0`, but is compatible with `ESC *`.

   .. image:: troubleshooting/epson-compatibility-compare.png
      :align: center
      :alt: Epson compatibility evaluation from Epson website.

   When adding the printer, *CUPS* will ask which printer should be added:

   .. image:: troubleshooting/add-printer.png
      :align: center
      :alt: Administration menu, add printer selection.

   In this case, the printer is connected via :abbr:`USB (Universal Serial Bus)` so it won' be part
   of the :guilabel:`Discovered Network Printers`. Instead it is likely part of the
   :guilabel:`Unknown` selection under :guilabel:`Local Printers`. By unplugging the printer's
   :abbr:`USB (Universal Serial Bus)` cable from the :abbr:`IoT (Internet of Things)` box and
   refreshing the page, the :guilabel:`Unknown` printer disappears. By plugging it back in, the
   printer reappears, so it can be said that this is the printer in question.

   For the naming convention, since it will need to print using the `ESC *` command, it is
   imperative to add `__IMC`. Reference the printer model on `Epson's ESC * site
   <https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=88>`_ to find out more
   about the *density* parameters.

   .. image:: troubleshooting/epson-tm-u220-specification.png
      :align: center
      :alt: Epson TM-U220 specifications on manufacturer's website.

   For this particular model, TM-U220, `m` should be equal to 0 or 1. While referencing the
   :guilabel:`Description` below the pink box in the above picture, the `m` values could be 0, 1, 32
   or 33. So in this printers case, the `m` value can NOT be 32 or 33 (otherwise there will be
   random characters printed).

   The table includes the numeric values: 32 and 33, they both occur if the :guilabel:`Number of
   bits for vertical data` is set to 24. This means that is a *High Vertical Density*. In the case
   of configuring the Epson TM-U220, the *Low Vertical Density* will need to be forced, as this
   printer model does not support *High Vertical Density* for this command `ESC *`.

   To add a *Low Vertical Density*, add the `LDV` parameter to the naming convention.

   .. image:: troubleshooting/add-printer-filled.png
      :align: center
      :alt: Add a *Low Vertical Density* (the `LDV` parameter) to the naming convention.

   Click :guilabel:`Continue` to proceed. Next, set the :guilabel:`Make` value to :guilabel:`Raw`
   and for the :guilabel:`Model` value, set this to :guilabel:`Raw Queue (en)`.

   .. image:: troubleshooting/add-printer-add.png
      :align: center
      :alt: Epson TM-U220 specifications on manufacturers website.

   However when trying to print with the naming convention: `EpsonTMU220B__IMC_LDV__`, it will print
   the receipt, but it will be too big and outside the margin. To resolve this, add a new printer
   (and naming convention) with the `SCALE<X>` parameter to adapt to our receipt size.

   Here are some examples:

   .. list-table::
      :header-rows: 1

      * - Printer Naming Convention
        - `EpsonTMU220B__IMC_LDV__`
        - `EpsonTMU220B__IMC_LDV_SCALE75__`
        - `EpsonTMU220B__IMC_LDV_LDH__`
        - `EpsonTMU220B__IMC_LDV_LDH_SCALE35__`
      * - .. image:: troubleshooting/receipt-example.png
             :align: center
             :alt: Receipt example format.
        - .. image:: troubleshooting/tm-u220-ldv.png
             :align: center
             :alt: Receipt format using naming convention: EpsonTMU220B__IMC_LDV__.
        - .. image:: troubleshooting/tm-u220-ldv-scale75.png
             :align: center
             :alt: Receipt format using naming convention: EpsonTMU220B__IMC_LDV_SCALE75__.
        - .. image:: troubleshooting/tm-u220-ldv-hdv.png
             :align: center
             :alt: Receipt format using naming convention: EpsonTMU220B__IMC_LDV_LDH__.
        - .. image:: troubleshooting/tm-u220-ldv-hdv-scale35.png
             :align: center
             :alt: Receipt format using naming convention: EpsonTMU220B__IMC_LDV_LDH_SCALE35__.

The Zebra printer doesn't print anything
----------------------------------------

Zebra printers are quite sensitive to the format of the Zebra Programming Language (ZPL) code that
is printed. If nothing comes out of the printer or blank labels are printed, try changing the format
of the report that is sent to the printer by accessing :menuselection:`Settings --> Technical -->
User Interface --> Views` in :ref:`developer mode <developer-mode>` and look for the corresponding
template.

.. seealso::
   Check out Zebra's instructions on printing :abbr:`ZPL (Zebra Programming Language)` files `here
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
