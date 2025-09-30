===========================
Epson Server Direct Printer
===========================

The Epson Server Direct setting allows for receipt printing from Point of Sale systems. Once
enabled, the POS register sends tickets directly to the Epson Server Direct printer.

.. note::
   No SSL certificate configuration is needed.

.. _epson-direct/pos-configuration:

Point of Sale configuration
===========================

To configure an Epson Server Direct printer in Point of Sale, follow these steps:

#. :ref:`Access the POS settings <configuration/settings>`.
#. Enable the :guilabel:`Epson Server Direct Printer` setting.
#. Optionally, select :guilabel:`Cashdrawer` if using a cash drawer connected to the printer.
#. Click the :icon:`fa-clipboard` :guilabel:`Copy URL` and :icon:`fa-clipboard` :guilabel:`Copy ID`
   clipboard buttons to copy the URL and ID for the :ref:`printer configuration
   <epson-direct/printer-configuration>`.

.. image:: epson_server_direct_print/pos_config.png
   :alt: setting to enable the Server Direct Print feature

.. note::
   When the printer connects to a network, it automatically prints a receipt with an IP address.

.. _epson-direct/printer-configuration:

Printer configuration
=====================

To configure an Epson Server Direct printer, follow the next steps:

#. Connect the printer to the Internet and find the IP address on the automatically-printed receipt.
#. Open an Internet browser, enter the printer's IP address in the search bar, and press `Enter`.
#. On the printer homepage, click :guilabel:`Advanced Settings`, then :guilabel:`Administrator
   Login`.
#. Enter the printer's password.
#. Go to :menuselection:`TM-i Settings --> Services --> Server Direct Print`.
#. Set the :guilabel:`Server Direct Print` field to :guilabel:`Enable`.
#. In the :guilabel:`URL` field, paste the printer setup URL from the :ref:`POS configuration
   <epson-direct/pos-configuration>`.
#. In the :guilabel:`Interval` section, set the value to :guilabel:`5`.
#. In the :guilabel:`ID` field, paste the printer setup ID from the :ref:`POS configuration
   <epson-direct/pos-configuration>`.
#. Click :guilabel:`Apply & Restart`.

.. image:: epson_server_direct_print/printer_configuration.png
   :alt: configuration in the printer settings

.. note::
   - The same printer can be used for multiple POS configurations.
   - Setting the :guilabel:`Interval` field to :guilabel:`5` ensures a balance between printing
     speed and server load; the printer processes all queued receipts at each interval.
   - Ensure the printer `Device ID` is set to `local_printer` in the `Device Admin` section.

.. tip::
   Find the printer's password on the back of the device next to the :icon:`fa-lock`
   (:guilabel:`lock`) icon.

.. _epson-direct/printers:

Supported Epson printers
========================

TM-Intelligent printers, like :guilabel:`Epson TM-M30 iii`, are :doc:`compatible
</applications/general/iot/devices/printer>` with Odoo without connecting to an :doc:`IoT system
</applications/general/iot/connect>`.

.. tip::
  Update the printer firmware before enabling the print confirmations  .

.. seealso::
   :doc:`epos_printers`
