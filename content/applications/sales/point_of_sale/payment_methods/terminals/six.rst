===
SIX
===

Connecting a SIX payment terminal allows you to offer a fluid payment flow to your customers and
ease the work of your cashiers.

.. warning::
   - Starting in July 2022, it will **not** be possible anymore to connect and use a Six payment
     terminal in PoS.
   - Even though Worldline has recently acquired SIX Payment Services and both companies use Yomani
     payment terminals, the firmware they run is different. Terminals received from Worldline are
     therefore not compatible with this integration.

Configuration
=============

Install the POS IoT Six module
------------------------------

To activate the POS IoT Six module, go to :guilabel:`Apps`, remove the :guilabel:`Apps` filter, and
search for **POS IoT Six**. This module adds the necessary driver and interface to your database to
detect Six terminals.

.. note::
   This module replaces the **POS Six** module.

Connect an IoT box
------------------

Connecting a Six payment terminal to Odoo is requires :doc:`using a Raspberry Pi or virtual (for
Windows OS only) IoT box </applications/general/iot/config/connect>`.

Configure the terminal ID
-------------------------

Navigate to your IoT Box homepage, where you can find the  :guilabel:`Six payment terminal` field
once your database server is connected to the IoT box. Click :guilabel:`Configure`, fill in the
:guilabel:`Terminal ID` field with the ID received from Six, and click :guilabel:`Connect`. Your
Six terminal ID should appear in the :guilabel:`Current Terminal Id` section.

.. image:: six/terminal-id.png
   :alt: Setting the Six terminal ID

Odoo automatically restarts the IoT box when the Six terminal ID is configured. If your Six terminal
is online, it will be automatically detected and connected to the database. Check the IoT box
homepage under the :guilabel:`Payments` section to confirm the connection.

.. image:: six/id-configured.png
   :alt: Confirming the connection to the Six payment terminal

.. _six/configure:

Configure the payment method
----------------------------

Enable the payment terminal :ref:`in the application settings <configuration/settings>` and
:doc:`create the related payment method <../../payment_methods>`. Set the journal type as
:guilabel:`Bank` and select :guilabel:`SIX IOT` in the :guilabel:`Use a Payment Terminal` field.
Then, select your terminal device in the :guilabel:`Payment Terminal Device` field.

.. image:: six/new-payment-method.png
   :alt: Creating a new payment method for the SIX payment terminal
