=================
Connect a printer
=================

.. |iot| replace:: :abbr:`IoT (Internet of Things)`
.. |usb| replace:: :abbr:`USB (Universal Serial Bus)`

Printer installation can be done in a few easy steps. The printer can be used to print receipts,
labels, orders, or even reports from the different Odoo apps. In addition, printer actions can be
assigned as an *action on a trigger* during the manufacturing process, or added onto a quality
control point or a quality check.

.. warning::
   The **only** way to connect a printer directly to an Odoo database is through the use of an |iot|
   box.

   Without an |iot| box, printing can still occur, but it is managed through the printer itself,
   which is not the recommended process.

Connection
==========

The |iot| box supports printers connected through |usb|, network connection, or Bluetooth.
`Supported printers <https://www.odoo.com/page/iot-hardware>`__ are detected automatically, and
appear in the :guilabel:`Devices` list of the *IoT* app.

.. image:: printer/printer-detected.png
   :align: center
   :alt: The printer as it would appear in the IoT app devices list.

.. note::
   Printers can take up to two minutes to appear in the *IoT* app :guilabel:`Devices` list.

Link printer
============

Link printer to work orders
---------------------------

*Work Orders* can be linked to printers, via a quality control point, to print labels for
manufactured products.

In the *Quality app*, a device can be set up on a quality control point. To do that, go to the
:menuselection:`Quality app --> Quality Control --> Control Points`, and open the desired control
point to which the printer will be linked.

.. important::
   A *Manufacturing Operation* and *Work Order Operation* need to be attached to a quality control
   point before the :guilabel:`Type` field allows for the :guilabel:`Print Label` option to be
   selected.

From here, edit the control point, by selecting the :guilabel:`Type` field, and selecting
:guilabel:`Print Label` from the drop-down menu of options. Doing so reveals a field called
:guilabel:`Device`, where the attached *device* can be selected. :guilabel:`Save` the changes, if
required.

.. image:: printer/printer-controlpoint.png
   :align: center
   :alt: This is the quality control point setup.

The printer can now be used with the selected quality control point. When the quality control point
is reached during the manufacturing process, the database presents the option to print labels for a
specific product.

.. image:: printer/printer-prompt.png
   :align: center

.. tip::
   Quality control points can also be accessed by navigating to :menuselection:`IoT App -->
   Devices`, then select the device. There is a :guilabel:`Quality Control Points` tab, where they
   can be added with the device.

.. note::
   On a quality check detail form, the :guilabel:`Type` of check can also be specified to
   :guilabel:`Print Label`. To create :doc:`new quality checks
   <../../../inventory_and_mrp/quality/quality_management/quality_checks>`, navigate to
   :menuselection:`Quality app --> Quality Control --> Quality Checks --> New`.

.. seealso::
   - :doc:`../../../inventory_and_mrp/quality/quality_management/quality_control_points`
   - :doc:`../../../inventory_and_mrp/quality/quality_management/quality_alerts`

.. _iot/link-printer:

Link printer to reports
-----------------------

It is possible to link report types to a specific printer. In the *IoT* app, go to the
:guilabel:`Devices` menu, and select the desired printer to be configured.

From here, go to the :guilabel:`Printer Reports` tab, and click :guilabel:`Add a line`. In the
window that appears, check all the types of :guilabel:`Reports` that should be linked to this
printer.

.. image:: printer/printer-reports.png
   :align: center
   :alt: The list of reports assigned to a printer in the IoT app.

.. tip::
   Reports can also be configured in the *Technical* menu of the *Settings* app, while in
   :ref:`debug mode <developer-mode>`. To do that, navigate to :menuselection:`Settings App -->
   Technical --> Actions: Reports`. From here, select the desired report from the list. Then, an
   :guilabel:`IoT Device` can be set on the report.

The first time a linked report is selected to print, a :guilabel:`Select Printers` pop-up window
appears. Tick the checkbox next to the correct printer for the report, and click :guilabel:`Print`.
At that point, the report is linked to the printer.

Clear device printer cache
~~~~~~~~~~~~~~~~~~~~~~~~~~

After a printer is linked to print a report, the setting is saved in a browser's cache. This means
a user can have different devices saved in their cache for different reports, based on the device
they use to access Odoo. It also means different users can have a report automatically printed from
different printers, based on their preferences.

To unlink a report from a printer, navigate to :menuselection:`IoT app --> Clear Selected Devices`.
This generates a list of reports that are linked to a printer on the current device. Click the
:guilabel:`Unlink` button next to each report to remove the link.

.. important::
   This step **only** prevents the report from automatically printing to the listed printer from
   the current browser. The report is still :ref:`linked <iot/link-printer>` on the device, under
   the :guilabel:`Printer Reports` tab.

.. image:: printer/clear-reports.png
   :align: center
   :alt: A list of reports currently linked to a printer in the IoT app.

.. seealso::
   :doc:`POS Order Printing <../../../sales/point_of_sale/restaurant/kitchen_printing>`

Potential issues
================

The printer is not detected
---------------------------

If a printer does not appear in the devices list, go to the :abbr:`IoT (Internet of Things)` box
homepage and make sure that it is listed under :guilabel:`Printers`.

.. image:: troubleshooting/printer-status.png
   :align: center
   :alt: The IoT box Home Page landing page.

If the printer is not present on the :abbr:`IoT (Internet of Things)` box homepage, click
:guilabel:`Printers Server`, go to the :guilabel:`Administration` tab and click on :guilabel:`Add
Printer`. If the printer is not present in the list, it is likely not connected properly.

The printer outputs random text
-------------------------------

For most printers, the correct driver should be automatically detected and selected. However, in
some cases, the automatic detection mechanism might not be enough, and if no driver is found, the
printer might print random characters.

The solution is to manually select the corresponding driver. On the :abbr:`IoT (Internet of Things)`
box homepage, click on :guilabel:`Printers Server`, go to the :guilabel:`Printers` tab and select
the printer in the list. In the :guilabel:`Administration` drop-down menu, click on
:guilabel:`Modify Printer`. Follow the steps and select the *make* and *model* corresponding to the
printer.

.. image:: troubleshooting/modify-printer.png
   :align: center
   :alt: Edit the printer connected to the IoT box.

.. note::
   Epson receipt printers and Zebra label printers do not need a driver to work. Make sure that no
   driver is selected for those printers.

The printer is detected but is not recognized correctly
-------------------------------------------------------

If the printer is not recognized correctly by Odoo and the :abbr:`IoT (Internet of Things)` box, go
to the form view of the device (:menuselection:`IoT App --> Devices -->Printer Device`) and change
the subtype. The three options available are: :guilabel:`Receipt Printer`, :guilabel:`Label
Printer`, and :guilabel:`Office Printer`.

.. image:: troubleshooting/sub-type.png
   :align: center
   :alt: Sub-type selection in a printer IoT device.

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

`CUPS` will prompt the administrator for three pieces of information: the :guilabel:`Name`,
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

   - `EPSON TMm 30II` -> The name cannot have spaces.
   - `EPSONTMm30II` -> The name itself is correct, but it will not use `ESC *`.
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

Once the printer is visible on the Odoo database, do not forget to choose it in the :abbr:`PoS
(Point of Sale)`configuration as the :abbr:`IoT (Internet of Things)` printer. Navigate to
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

   For the naming convention, since it needs to print using the `ESC *` command, it is imperative to
   add `__IMC`. Reference the printer model on `Epson's ESC * site
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

   However, when trying to print with the naming convention: `EpsonTMU220B__IMC_LDV__`, it prints
   the receipt, but it is too big and outside the margin. To resolve this, add a new printer (and
   naming convention) with the `SCALE<X>` parameter to adapt to our receipt size.

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

DYMO LabelWriter print issue
----------------------------

The DYMO LabelWriter has a known issue in printing with the :abbr:`IoT (Internet of Things)` box.
The OpenPrinting CUPS server installs the printer using :guilabel:`Local RAW Printer` drivers. In
order to print anything, the correct :guilabel:`Make and Model` needs to be set, so the correct
driver is referenced when using the device.

Additionally, a new printer needs to be added to reduce a print delay that occurs after updating the
driver.

.. important::
   The DYMO LabelWriter 450 DUO printer is the recommended DYMO printer for use with Odoo and the
   :abbr:`IoT (Internet of Things)` box. It **must** already be connected to, and recognized on, the
   :abbr:`IoT (Internet of Things)` box.

   The DYMO LabelWriter 450 DUO printer contains two printers in one: a label printer and a tape
   printer. Choosing the correct model (either DYMO LabelWriter 450 DUO Label (en) or DYMO
   LabelWriter 450 DUO Tape (en)) is crucial when configuring the following processes.

   To keep things consistent, both of the following processes detail the configuration for the DYMO
   LabelWriter 450 DUO Label (en) model. Change the model when needed.

.. _troubleshooting/dymo/update_drivers:

DYMO LabelWriter not printing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In the case where the DYMO LabelWriter is not printing anything, a new driver needs to be installed.

First, open the OpenPrinting CUPS console by clicking :menuselection:`Printers server` at the bottom
of the :abbr:`IoT (Internet of Things)` box homepage. Next, click on :menuselection:`Printers` in
the top menu. Click into the printer in question, and select :guilabel:`Maintenance` in the first
drop-down menu. Then, select :guilabel:`Modify Printer` in the second drop-down menu.

.. image:: troubleshooting/main-modify.png
   :align: center
   :alt: Modify the make and model of the DYMO LabelWriter. Maintenance and Modify drop-down menus
         highlighted.

Next, select the specific network connection/printer that the modification should be made on. Click
:guilabel:`Continue`.

.. image:: troubleshooting/modify-select-printer.png
   :align: center
   :alt: Printer selection screen with Continue highlighted.

On the next page, click :guilabel:`Continue` to proceed to set the :guilabel:`Make` of the printer.

.. image:: troubleshooting/modify-printer-dymo.png
   :align: center
   :alt: Printer modification screen with Continue highlighted.

Under :guilabel:`Make` select :guilabel:`DYMO` from the menu. Click on :guilabel:`Continue` to set
the :guilabel:`Model`.

.. image:: troubleshooting/setting-make.png
   :align: center
   :alt: Setting the make page, with DYMO and continue highlighted.

On the following page, set the :guilabel:`Model` to :guilabel:`DYMO LabelWriter 450 DUO Label (en)`
(or whichever DYMO printer model is being used). Click on :guilabel:`Modify Printer` to complete
setting the new driver, a confirmation page will appear.

.. image:: troubleshooting/setting-model.png
   :align: center
   :alt: Setting the printer model page with DYMO LabelWriter 450 DUO Label (en) highlighted.

After being redirected to a confirmation page, acknowledging a successful update, click on the
:menuselection:`Printers` button in the top menu.

All the printers installed on the OpenPrinting CUPS server appear, including the newly updated:
:guilabel:`DYMO LabelWriter 450 DUO Label` (or whichever DYMO printer model is being used). Click
into the printer that was just updated.

To print a test label, click on the :guilabel:`Maintenance` drop-down menu to the left of the
:guilabel:`Administration` drop-down menu, and select :guilabel:`Print Test Page`. The test label
will print out with a ten-second delay if the driver update was successful.

.. image:: troubleshooting/print-test.png
   :align: center
   :alt: Printing a test page from the administration drop-down menu in the OpenPrinting CUPs
         server.

To reduce this delay a new printer will need to be added, follow the process below.

DYMO LabelWriter print delay
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To resolve the delay issue after modifying the driver, the printer **must** be reinstalled. To
reinstall the printer, open the OpenPrinting CUPS administration page by clicking
:menuselection:`Printers server`, at the bottom of the :abbr:`IoT (Internet of Things)` box
homepage. Then, click on :menuselection:`Administration` in the top menu, then click :guilabel:`Add
a Printer`.

.. tip::
   If the DYMO LabelWriter 450 DUO printer is not printing at all, or is not recognizable (has a RAW
   driver type), then update the drivers on the device. See
   :ref:`troubleshooting/dymo/update_drivers`.

.. image:: troubleshooting/add-printer-dymo.png
   :align: center
   :alt: Add a printer button highlighted on the Printer CUPS management page.

On the next screen, in the :guilabel:`Local Printers` section, select the :guilabel:`DYMO
LabelWriter 450 DUO Label (DYMO LabelWriter 450 DUO Label)` (or whichever DYMO printer model is
being used) pre-installed printer. Click :guilabel:`Continue`.

.. image:: troubleshooting/local-printer.png
   :align: center
   :alt: Add a printer screen on OpenPrinting CUPS with DYMO LabelWriter 450 DUO Label highlighted.

On the following screen, modify the :guilabel:`Name` to something recognizable, as the original
printer will still be present. Click :guilabel:`Continue` to be taken to the next screen.

.. image:: troubleshooting/rename-printer.png
   :align: center
   :alt: Rename printer page in the 'Add a Printer' flow, with the name field highlighted.

Next, choose the :guilabel:`Model`. Select :guilabel:`DYMO LabelWriter 450 DUO Label (en)` (or
whichever DYMO printer model is being used), and finally, click :guilabel:`Add Printer` to complete
the installation.

.. image:: troubleshooting/choose-printer.png
   :align: center
   :alt: Choose model screen on the OpenPrinting CUPS console with model and add a printer
         highlighted.

After being redirected to a confirmation page, acknowledging a successful installation, click on the
:menuselection:`Printers` button in the top menu.

All the printers installed on the OpenPrinting CUPS server appear, including the newly installed:
:guilabel:`DYMO LabelWriter 450 DUO Label` (or whichever DYMO printer model is being used). Click
into the printer that was just installed.

.. image:: troubleshooting/printer-page.png
   :align: center
   :alt: Printer page with newly installed printer highlighted.

To print a test label, click on the :guilabel:`Maintenance` drop-down menu to the left of the
:guilabel:`Administration` drop-down menu, and select :guilabel:`Print Test Page`. The test label
should print out immediately (one-to-two seconds delay).

.. image:: troubleshooting/print-test.png
   :align: center
   :alt: Printing a test page from the administration drop-down menu in the OpenPrinting CUPs
         server.

The Zebra printer does not print anything
-----------------------------------------

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

The characters read by the barcode scanner do not match the barcode
-------------------------------------------------------------------

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

Barcode scanner processes barcode characters individually
---------------------------------------------------------

When accessing the mobile version of Odoo from a mobile device, or tablet, paired with a barcode
scanner, via the :abbr:`IoT (Internet of Things)` box, the scanner may process each barcode
character as an individual scan. In this case, the *Keyboard Layout* option **must** be filled out
with the appropriate language of the barcode scanner on the *Barcode Scanner* form page.

.. tip::
   Access the barcode scanner form page by navigating to :menuselection:`IoT App --> Devices -->
   Barcode Scanner`.

.. image:: troubleshooting/keyboard-layout.png
   :align: center
   :alt: Barcode scanner form page, with keyboard layout option highlighted.

The :guilabel:`Keyboard Layout` is language based, and the options available vary, depending on the
device and the language of the database. For example: :guilabel:`English (UK)`, :guilabel:`English
(US)`, etc.

Cash drawer --> where to put this??
===========

The cash drawer does not open
-----------------------------

The cash drawer should be connected to the printer and the :guilabel:`Cash drawer` checkbox should
be ticked in the :abbr:`PoS (Point of Sale)` configuration. To do so, navigate to
:menuselection:`POS app --> 3-Dot Menu on the POS --> IoT Box section --> Edit --> Receipt Printer
--> Cashdrawer checkbox`.
