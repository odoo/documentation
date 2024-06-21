========
Hardware
========

Employees who are **not** database users, and therefore, do **not** have access to the *Attendances*
app, must sign in and out of work using a kiosk. The following are the physical requirements for
setting up a kiosk.

Kiosk devices
=============

A kiosk is a self-service station, where employees can :ref:`check in and out of work
<attendances/kiosk-mode-entry>` with either a :ref:`badge <attendances/hardware/badges>` or an
:ref:`RFID key fob <attendances/hardware/rfid>`. Typically, these devices are dedicated as kiosks
only, but any device with an internet browser is able to be set up as a kiosk.

A kiosk is used by navigating to the webpage specified in the :ref:`configuration
<attendances/kiosk-settings>` section of the *Attendances* app.

Kiosks are set up using one of the following types of devices:

- Laptop or Desktop computer
- Tablet
- Mobile phone (Android or iOS)

.. tip::
   Touchscreens are easy to use, and tablets and mobile phones take up less space. That's why most
   consider using a smaller device with a touchscreen as a kiosk.

   It is recommended to place kiosks on a secure stand, or mount them securely on a wall.

.. _attendances/hardware/badges:

Badges
======

Badges are a way for employees to quickly sign in and out from a kiosk, as badges are scanned by the
kiosk's camera to quickly identify the employee.

To generate a badge, first navigate to the :menuselection:`Employees app`. Next, click on the
desired employee card to open the employee's form, then click the :guilabel:`HR Settings` tab.

Under the :guilabel:`ATTENDANCE/POINT OF SALE/MANUFACTURING` section, there is a :guilabel:`Badge
ID` field. If this field is blank, click :guilabel:`Generate` at the end of the :guilabel:`Badge
ID` line, and the field is automatically populated with a new badge ID number. Then, click
:guilabel:`Print Badge` at the end of the badge ID number to create a PDF file of the badge.

If a badge ID number is already present on the employee form, there is no :guilabel:`Generate`
button, only a :guilabel:`Print Badge` button.

The employee's badge contains the employee's photo, name, job position, company logo, and a barcode
that can be scanned at a kiosk to check in and out.

Badges can be printed for employees using any thermal or inkjet printer.

.. image:: hardware/badge.png
   :align: center
   :alt: A badge for an employee that is created from the Employees app.

.. note::
   Badges are **not** required, as employees can manually identify themselves on the kiosk.

Barcode scanners
----------------

When using badges to check in and out, the barcode **must** be scanned to identify the employee.
This can be done with the kiosk's camera, if one is available on the device.

If a camera is **not** available on the kiosk device, an external barcode scanner must be used to
scan badges.

Kiosks work with most USB barcode scanners. Bluetooth barcode scanners are also supported for
devices without USB ports, or if a wireless connection is desired.

Follow the manufacturer's instructions on the barcode scanner to properly connect the barcode
scanner to the kiosk device.

.. tip::
   If the barcode scanner is connected directly to a computer, it :doc:`must be configured
   <../../inventory_and_mrp/barcode/setup/hardware>` to use the computer's keyboard layout.

.. note::
   An IoT box is **not** required to use a barcode scanner.

.. _attendances/hardware/rfid:

RFID key fob readers
====================

Instead of using a :ref:`badge <attendances/hardware/badges>`, employees can scan a personal RFID
key fob with an RFID reader to check in and out of work.

It is **required** to purchase *both* RFID key fobs and an RFID reader to use this method to check
in and out. Follow the manufacturer's directions to install the RFID reader, and set up the RFID key
fob.

.. image:: hardware/rfid-reader.jpg
   :align: center
   :width: 50%
   :alt: An RFID key fob is placed on an RFID reader.

.. tip::
   A recommended RFID reader is the `Neuftech USB RFID Reader
   <https://neuftech.net/Neuftech-USB-RFID-Reader-ID-Kartenleseger%C3%A4t-Kartenleser-Kontaktlos-Card-Reader-f%C3%BCr-EM4100>`_.

.. note::
   An IoT box is **not** required to use RFID key fobs.
