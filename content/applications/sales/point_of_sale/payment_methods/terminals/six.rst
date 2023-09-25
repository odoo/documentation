===
SIX
===

Connecting a **SIX payment terminal** allows you to offer a fluid payment flow to your customers and
ease the work of your cashiers.

.. warning::
   Even though Worldline has acquired SIX Payment Services and both companies use Yomani payment
   terminals, the firmware they run is different. Terminals received from Worldline are, therefore,
   not compatible with this integration.

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
Windows OS only) IoT box </applications/productivity/iot/config/connect>`.

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

From your database, go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` to
create a new payment method specifically for Six. Click :guilabel:`New`, enter a :guilabel:`Name`,
set the :guilabel:`Journal` field as :guilabel:`Bank`, the :guilabel:`Use a Payment Terminal` field
as :guilabel:`SIX IOT`, and select the corresponding device in the :guilabel:`Payment Terminal
Device` field.

.. image:: six/new-payment-method.png
   :alt: Creating a new payment method for the SIX payment terminal

Pay with a payment terminal
===========================

When processing a payment, select :ref:`your Six payment method <six/configure>` in the
:guilabel:`Payment Method` section and click :guilabel:`Send`. To cancel the payment request, click
:guilabel:`Cancel`. Once the payment is successful, the status switches to :guilabel:`Payment
Successful`.

.. image:: six/payment.png
   :alt: Paying with Six

.. note::
   - Once your payment is processed, the type of card used and the transaction ID appear on the
     payment record.
   - The language used for error messages is the same as the Six terminal. Configure the terminal to
     change the language or contact Six.
   - By default, the port used by the Six terminal is `7784`.

.. tip::
   If there are connection issues between the payment terminal and Odoo, you can still force the
   payment validation in Odoo using the :guilabel:`Force Done` button.
