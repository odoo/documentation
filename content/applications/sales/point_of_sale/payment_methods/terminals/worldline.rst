=========
Worldline
=========

Connect a Worldline payment terminal to an Odoo point of sale and offer payment solutions for
customer transactions.

.. important::
   - Connecting a Worldline payment terminal to Odoo requires an :doc:`IoT system
     </applications/general/iot/connect>`. For more information, refer to the :doc:`IoT
     documentation </applications/general/iot>`.
   - Worldline is only available in **Belgium**, **the Netherlands**, and **Luxembourg** with Odoo.
   - Odoo is compatible with Worldline terminals that use the CTEP protocol (e.g., the **Yomani XR**
     and **Yoximo** terminals). Contact the payment provider to confirm the terminal's
     compatibility when in doubt.

.. _pos/worldline/configuration:

Worldline configuration
=======================

First, enable the Worldline payment terminal in the :ref:`POS settings <configuration/settings>`
under :guilabel:`Payment Terminals`. Then :doc:`connect the IoT Box to Odoo
</applications/general/iot/connect>` and follow these steps on the terminal:

#. **Configure the ECR protocol**:

   #. Press :menuselection:`"." --> 3 --> Stop --> 3 --> 0 --> 9`.
   #. Enter the technician password **1235789** and press **OK**.
   #. Press :menuselection:`4 --> 2 --> CTEP (ECR PROTOCOL)`. Press **OK** to confirm each of the
      following checks: **CTEP TICKET ECR**, **ECR TICKET WIDTH**, and **CHARACTER SET**.
   #. Press **Stop** three times; the terminal restarts automatically.
#. **Set the hostname**:

   #. Press :menuselection:`"." --> 3 --> Stop --> 3 --> 0 --> 9`.
   #. Enter the technician password **1235789** and press **OK**.
   #. Press :menuselection:`4 --> 9 --> TCP/IP (ECR PHYSICAL CONF.)` and press **OK** twice.
   #. Enter the IoT's IP address on the **HOSTNAME** screen by confirming each number with **OK**
      until the colon symbol.
   #. Press **OK** twice.
#. **Set the port number**:

   #. Enter **9001** on the **NETWORK DOMAIN NAME** screen and press **OK** twice.
   #. Press **Stop** three times; the terminal restarts automatically.

The terminal is now active and displays the **READ CARD** screen.

.. warning::
   The `9050` port must be added as a :ref:`Windows Firewall exception <iot/windows-iot/firewall>`
   for the :doc:`Windows virtual IoT </applications/general/iot>`.

.. note::
   Enter **9050** on the **NETWORK DOMAIN NAME** screen when using a :ref:`Windows virtual IoT
   system <iot/windows-iot/installation>`.

.. example::
   Here's an IP address sequence: `10.30.19.4:8069`.
   On the **HOSTNAME** screen, type :menuselection:`10 --> OK --> 30 --> OK --> 19 --> OK --> 4
   --> OK --> OK`.

.. tip::
   In the IoT app, open the :ref:`IoT system's card <iot/connect/IoT-form>` to view its IP address
   and check the terminal's connection status.

.. _pos/worldline/odoo-configuration:

Odoo configuration
==================

To connect the Worldline terminal with Odoo Point of Sale, follow these steps:

#. Go to :menuselection:`Point of Sale --> Configuration --> Payment Methods` and :doc:`create a
   payment method <../../payment_methods>`.
#. Set the :guilabel:`Journal` field to :guilabel:`Bank`.
#. Set the :guilabel:`Integration` field to :guilabel:`Terminal`.
#. Set the :guilabel:`Integrate with` field to :guilabel:`Worldline`.
#. Select the configured device in the :guilabel:`Payment Terminal Device` field and save.
#. Go to :menuselection:`Point of Sale --> Configuration --> Settings` and add the created payment
   method to the :guilabel:`Payment Methods` list to make it available in the POS interface.
#. Click :guilabel:`Save`.

.. _worldline/yomani-info:

.. tip::
   - To reach Wordline's technical assistance, `visit their website
     <https://worldline.com/en/home/main-navigation/git>`_ and click :guilabel:`Get in touch`
     under :guilabel:`Merchants`.
   - Configure the cashier terminal if both a customer and a cashier terminal are in use.
   - To avoid blocking the terminal, check the initial configuration beforehand.
   - Set a fixed IP address on the IoT Box’s router to prevent connection loss.
