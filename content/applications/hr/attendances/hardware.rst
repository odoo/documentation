========
Hardware
========

Employees who are **not** database users, and therefore, do **not** have access to the
**Attendances** app, must check in and out of work using a kiosk. The following are the physical
requirements for setting up a kiosk.

Kiosk devices
=============

A kiosk is a self-service station, where employees can :ref:`check in and out of work
<attendances/kiosk-mode-entry>` with either a :ref:`badge <attendances/hardware/badges>` or an
:ref:`RFID key fob <attendances/hardware/rfid>`. Typically, these devices are dedicated as kiosks
only, but any device with an internet browser can be set up as a kiosk.

A kiosk is used by navigating to the webpage specified in the :ref:`configuration
<attendances/kiosk-settings>` section of the **Attendances** app.

Kiosks are set up using one of the following types of devices:

- Laptop or Desktop computer
- Tablet
- Mobile phone (Android or iOS)

.. tip::
   Touchscreens are easy to use, and tablets and mobile phones take up less space. That is why most
   consider using a smaller device with a touchscreen as a kiosk.

   It is recommended to place kiosks on a secure stand, or mount them securely on a wall.

.. _attendances/hardware/badges:

Badges
======

Badges can be scanned by the kiosk's camera to check in or check out an employee.

To generate a badge, first navigate to the :menuselection:`Employees app`. Next, click on the
desired employee card to open the employee's form, then click the *Settings* tab.

#. Under the *ATTENDANCE/POINT OF SALE* section (*ATTENDANCE/POINT OF SALE/MANUFACTURING* if the
   **Manufacturing** app is installed), locate the :guilabel:`RFID/Badge Number` field.
#. (optional) To use an existing badge or RFID key fob, click :guilabel:`Read a badge`, and scan
   it.
#. If the field is blank, click :guilabel:`Generate` to populate it with a new badge number.
#. Click :guilabel:`Print Badge` to create a PDF of the badge.

If a badge number is already present on the employee form, there is no :guilabel:`Generate` button,
only a :guilabel:`Print Badge` button.

The employee's badge contains their photo, name, job position, company logo, and a barcode
that can be scanned at a kiosk to check in and out.

Badges can be printed for employees using any thermal or inkjet printer.

.. image:: hardware/badge.png
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

Follow the manufacturer's instructions to connect the barcode scanner to the kiosk device.

.. tip::
   If the barcode scanner is connected directly to a computer, it :doc:`must be configured
   <../../inventory_and_mrp/barcode/setup/hardware>` to use the computer's keyboard layout.

.. note::
   An IoT box is **not** required to use a barcode scanner.

.. _attendances/hardware/rfid:

RFID key fob readers
====================

Instead of using a :ref:`badge <attendances/hardware/badges>`, employees can scan a personal
:abbr:`RFID (Radio Frequency Identification)` key fob with an RFID reader to check in and out of
work.

It is **required** to purchase *both* RFID key fobs and an RFID reader to use this method to check
in and out. Follow the manufacturer's directions to install the RFID reader, and set up the RFID key
fob.

.. note::
   An IoT box is **not** required to use RFID key fobs.
