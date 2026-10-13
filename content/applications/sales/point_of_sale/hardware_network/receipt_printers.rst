================
Receipt printers
================

Receipt printers integrate with Point of Sale systems to receive print jobs directly from the POS.
Once properly configured and connected, this integration enables automatic receipt printing for
every completed transaction.

.. important::
   Epson printers are strongly recommended. The following printers are compatible with Odoo:

   - Network-based printers that support the ePOS communication protocol (without IoT), such as
     the TM-m30 iii (model 112 or 152).
   - ePOS printers with USB connectivity that need to be connected to an :doc:`IoT system
     </applications/general/iot/connect>`.
   - ESC/POS printers that require a connection via an :doc:`IoT system
     </applications/general/iot/connect>` using either a USB or network-based interface.

   Bluetooth printers are not compatible with Odoo.

.. seealso::
   - `Receipt printers without IoT (video tutorial)
     <https://youtu.be/OUUi6N_xT-U?si=NZ9PPrsXDUcJ4kSy>`_
   - `Receipt printers with IoT (video tutorial)
     <https://youtu.be/ORojunUs5Bs?si=FrDJ0N-9f8SJlQrA>`_

.. _pos/epos-printers/configuration:

Configuration
=============

To configure the printer, connect it to a power source, then to the network using either Wi-Fi or
an Ethernet cable. Then, power the printer on; an automatic ticket with the printer’s IP address
gets printed upon connection. Keep it for the configuration process.

To link the printer with Point of Sale, follow the next steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Connected Devices` section and enable :guilabel:`ePos Printer`.
#. Type the printer's IP address in the dedicated field.
#. Click :guilabel:`Save`.

Enable :doc:`pos_lna` to allow Point of Sale to communicate directly with the printer on the
same network. Alternatively, once the printer is connected to Odoo, ensure the connection is
secure and reliable by generating a :ref:`self-signed certificate <pos/epos-ssc/certificate>`.

.. note::
   Leave the IP address field empty if using an :ref:`iMin POS device
   <pos/epos-printers/imin-printer>`, as these devices do not provide an IP address.

.. seealso::
   - :doc:`pos_lna`
   - :doc:`epos_ssc`
   - :doc:`/applications/general/iot/devices/printer`

.. _pos/epos-printers/supported-printers:

Directly supported ePOS printers
================================

The **Epson TM-m30 i/ii/iii (Wi-Fi or Ethernet only) models** are strongly recommended, as they have
been fully tested with Odoo Point of Sale.

Other Wi-Fi or Ethernet Epson printer models that support the **ePoS protocol** should also be
compatible. Some other example including:
- Epson TM-m10/ m50/ m50ii/ m55
- Epson TM-H6000IV-DT (Receipt printer only)
- Epson TM-T70II-DT
- Epson TM-T88V-DT
- Epson TM-T88V-DT/ T88VI/ T88VII 
- Epson TM-L90-i
- Epson TM-T20III or later
- Epson TM-T70-i
- Epson TM-T82II-i
- Epson TM-T83II-i
- Epson TM-U220-i
- Epson TM-m10
- Epson TM-P20 (Wi-Fi® model)
- Epson TM-P60II (Receipt: Wi-Fi® model)
- Epson TM-P60II (Peeler: Wi-Fi® model)
- Epson TM-P80 (Wi-Fi® model)
- Epson TM-P20 (Wi-Fi® model only)
- Epson TM-P60II (Receipt: Wi-Fi® model only)
- Epson TM-P60II (Peeler: Wi-Fi® model only)
- Epson TM-P80/ P80II (Wi-Fi® model only)

The following ePOS printers require a supported Epson network interfaces (such as UB-E04 / UB-R04)
along with the model's latest firmware.

- Epson TM-T70/ T70II
- Epson TM-T88V
- Epson TM-T90
- Epson TM-L90
- Epson TM-H6000IV or later

.. important::
   - The printer must be capable of operating in HTTP mode.
   - When using :doc:`Local Network Access (LNA) <pos_lna>`, the printer must have a **static
     IP address**; otherwise, it may become unreachable. The static IP should be configured
     through the router.

.. _pos/epos-printers/imin-printer:

iMin POS systems
----------------

`iMin POS devices <https://www.imin.com/products/#desktop>`_ are Android-based systems that combine
POS management and printing functionality.

.. note::
   - Odoo is compatible with `Swan 2 <https://www.imin.com/product/swan-2/>`_ and `Falcon 2
     <https://www.imin.com/product/falcon-2/>`_ POS devices, which can be purchased from `iMin
     business partners <https://www.imin.com/contact-us/>`_.
   - `Falcon 2 <https://www.imin.com/product/falcon-2/>`_ devices require the base device to be
     connected to the dock before printing receipts.
   - iMin POS devices are network-based and do not require an IoT system to operate.

.. important::
   Do not use iMin POS devices to :ref:`print preparation orders <pos/restaurant/orders-printing>`.

To configure an iMin POS device, connect it to a network via Ethernet or WI-Fi, then follow the
next steps:

#. Install the latest iMinOS version.
#. Download and install the Odoo and Android System WebView apps from iMin's App Store.
#. Optionally, install a security certificate if any connected devices require HTTPS, such as
   :doc:`payment terminals <../payment_methods/terminals>` or :ref:`preparation printers
   <pos/restaurant/orders-printing>`. To do so, go to :menuselection:`Settings --> Security --> More
   security settings --> Encryption & credentials`, then click :guilabel:`Install a certificate`.

Once the device is set up, :ref:`install <general/install>` the :guilabel:`POS iMin` module and
:ref:`connect the device to your Odoo database<pos/epos-printers/configuration>`, leaving the IP
address field empty. This action automatically links the device with Odoo.

.. tip::
   To ensure the device's printer works correctly, access the :guilabel:`TestTools` app on the
   device interface. A test ticket is automatically printed. If not, click :guilabel:`Print`.

.. seealso::
   `iMin device troubleshooting guide
   <https://oss-sg.imin.sg/docs/demo/Troubleshooting%20Guide%20for%20iMin%20Device(Eng).pdf>`_

.. _pos/epos-printers/iot-supported-printers:

Printers with IoT system integration
====================================

The following printers require an :doc:`IoT system </applications/general/iot/devices/printer>` to
be compatible with Odoo:

- Non-Epson-TM products
- Epson TM-T88IV or older generation
- Epson TM-P60 (original model)
- Epson TM-T20 family (incompatible ePOS software)
- Epson TM-T88 family (incompatible ePOS software)
- Epson TM-T82X/ T82X-II: most other model number with an 'X' that comes after, 
or any Epson model in aserial/ parallel/ USB-only configuration.

.. _pos/epos-printers/troubleshooting:

Troubleshooting
===============

To resolve common hardware issues, including connectivity failures, configuration errors, and
physical maintenance, follow the instructions below:

- If Google Chrome denies access to local devices, printers and IoT boxes will fail to connect.
  :ref:`Grant the necessary browser permissions <pos/lna/browser-permission>` to restore the
  connection.
- Check the printer's blinking lights to help identify the source of a problem.
- If the printer does not print the first automatic ticket with the IP address, check the network
  cable or Wi-Fi connection.
- If the receipt comes out blank, the paper roll may be upside down; try flipping it.
- If the POS cannot connect to the printer, make sure the printer's IP address entered in Odoo
  matches the one on the first automatically printed ticket. Also, ensure the router assigns the
  printer a static IP address.
