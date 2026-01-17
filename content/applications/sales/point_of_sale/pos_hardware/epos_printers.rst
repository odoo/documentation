=============
ePOS printers
=============

.. danger::
   When using ePOS printer, a static IP address is absolutely necessary for the printer.
   Without it, the printer may become unreachable.

   The IP address must be set from the router.
.. _pos_lna:

ePOS printers are designed to work seamlessly with Point of Sale systems. Once connected, these
devices automatically share information, allowing for direct printing of tickets from the POS system
to the ePOS printer.

Configuration
=============

To use an ePoS printer in the Point of Sale, it is very important to use a **static IP address**.
If the printer does not use a fixed IP, there is a risk that its IP address will change.
It will then no longer be accessible from the PoS.

To set an IP address, contact your internet service provider.

#. :ref:`Access the POS settings <configuration/settings>`.
#. Activate the :guilabel:`ePos Printer` feature.
#. Fill in the field with your ePos IP address.

.. image:: epos_printers/setting.png
   :alt: setting to enable the ePos printer feature

.. note::
   When the printer connects to a network, it automatically prints a ticket with its IP address.

Directly supported ePOS printers
================================

We strongly recommend using the **Epson TM-m30 i/ii/iii (Wi-Fi/Ethernet models only)**
model, which has been tested by us.

However, other Epson Wi-Fi/Ethernet models compatible with ePoS should also work.

.. seealso::
   - :doc:`pos_lna`
   - :doc:`epos_ssc`
