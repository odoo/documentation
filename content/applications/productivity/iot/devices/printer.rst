=================
Connect a Printer
=================

When using your *IoT Box* in Odoo, you could need to use a printer.
Doing so is easy and convenient as it can be done in a few steps. Then,
you can use it to print receipts, orders or even reports in different
Odoo apps.

Connection
==========

The IoT Box supports printers connected through USB, network or Bluetooth.
`Supported printers <https://www.odoo.com/page/iot-hardware>`__ will be
detected automatically and will appear in the *Devices* list of your IoT app.

.. note::
         The printer can take up to two minutes to appear in your devices list.

.. image:: printer/printer_01.png
   :align: center

Link the Printer
================

To Work Orders
--------------

You can link *Work Orders* to printers via a *Quality Control Point*
to print labels for manufactured products.

To do so, you need to create a *Quality Control Point* from the
*Quality* app. Then, you can select the correct manufacturing
operation and the work order operation. In type, choose *Print Label*
and hit save.

.. image:: printer/printer_03.png
   :align: center

Now, each time you reach the quality control point for the chosen
product, a *Print Label* button will appear.

.. image:: printer/printer_04.png
   :align: center

To Reports
----------

You can also link a type of report to a certain printer. In the *IoT*
app, go to the *Devices* menu and select the printer you want to set
up.

.. image:: printer/printer_05.png
   :align: center

Now, go to the *Printer Reports* tab.

.. image:: printer/printer_06.png
   :align: center

Hit edit and then, click on *Add a line*. In the window that shows up,
check all the types of reports that should be linked to this printer.
Click on select and save.

.. image:: printer/printer_07.png
   :align: center

Now, each time you click on *Print* in the control panel, instead of
downloading a PDF, it will send it to the selected printer and
automatically print it.

Print Receipts from the PoS
---------------------------

You can link a printer to your *Point of Sale* app so you can print
receipts directly from your *PoS*.

Doing so is really easy. Go to your *Point of Sale* app and open your
*Point of Sale* settings, under *Configuration*. There, click on *Edit*
and check the *IoT Box* feature. Then, choose your *Receipt Printer*
from the dropdown.

.. image:: printer/printer_08.png
   :align: center

Now, you will be able to print different kinds of tickets from your *POS*:
**receipts**, **sale details** and **bills**.

Receipts are printed once the order is validated. The process is
automated when you enable the feature in your *PoS* configuration.

Sales details can be printed by clicking on the printer icon on the
navbar at the top of the *PoS*. It will print the details of the sales
of the current day.

.. image:: printer/printer_09.png
   :align: center

As for the bill, it is only available in restaurant mode. In your
restaurant settings, activate *Print Bills* and a *Bill* button will
appear in the left panel of the *PoS*.

.. image:: printer/printer_10.png
   :align: center

Print Orders in the kitchen
---------------------------

In restaurant mode, you can send order tickets to the kitchen.

To do so, go to the *PoS* app and open your *PoS* settings. Then,
tick *Order Printer*.

.. image:: printer/printer_11.png
   :align: center

Now, go to the *Printers* menu. Hit create, select the printer from
the dropdown and, in the *Printer Product Categories* field, choose
all the categories of products that should be printed on this printer.

.. image:: printer/printer_12.png
   :align: center

In the *PoS*, when you add or remove a product from one of the
selected categories, the button *Order* will be green. If you click on
it, the IoT Box will print a receipt on the corresponding printer.
