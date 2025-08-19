=========
Worldline
=========

`Worldline <https://worldline.com/>`_ offers payment solutions through :doc:`payment terminals
<../terminals>` to handle customer transactions.

.. important::
   - Connecting a Worldline payment terminal to Odoo requires an :doc:`IoT system
     </applications/general/iot/connect>`.
   - Worldline is only available in **Belgium**, **the Netherlands**, and **Luxembourg** with Odoo.
   - Odoo is compatible with Worldline terminals that use the CTEP protocol (e.g., the **Yomani XR**
     and **Yoximo** terminals). Contact the payment provider to confirm the terminal's
     compatibility if necessary.

.. _pos/worldline/configuration:

Worldline configuration
=======================

First, enable the Worldline payment terminal in the :ref:`POS settings <configuration/settings>`
under :guilabel:`Payment Terminals`. Then :doc:`connect the IoT system to Odoo
</applications/general/iot/connect>` and follow these steps on the terminal:

#. **Configure the ECR protocol**:

   #. Press :menuselection:`"." --> 3 --> Stop --> 3 --> 0 --> 9`.
   #. Enter the technician password **1235789** and press **OK**.
   #. Press :menuselection:`4 --> 2 --> CTEP (ECR protocol)`. Press **OK** to confirm each of the
      following checks: **CTEP ticket ECR**, **ECR ticket width**, and **Character set**.
   #. Press **Stop** three times; the terminal restarts automatically.
#. **Set the hostname**:

   #. Press :menuselection:`"." --> 3 --> Stop --> 3 --> 0 --> 9`.
   #. Enter the technician password **1235789** and press **OK**.
   #. Press :menuselection:`4 --> 9 --> TCP/IP (ECR physical conf.)` and **OK** twice.
   #. Enter the :ref:`IoT's IP address <iot/connect/IoT-form>` on the **Hostname** screen by
      confirming each number with **OK** until the colon symbol, then confirm the step with **OK**.
      For example, if the IP address is `10.30.19.4:8069`, press :menuselection:`10 --> OK --> 30
      --> OK --> 19 --> OK --> 4 --> OK --> OK`.
#. **Set the port number**:

   #. Enter **9001** (if using an :doc:`IoT box </applications/general/iot/iot_box>`) or **9050**
      (if using a :doc:`Windows virtual IoT </applications/general/iot/windows_iot>`) on the
      **Network domain name** screen and press **OK** twice.
   #. Press **Stop** three times; the terminal restarts automatically.

The terminal is now active and displays the **Read card** screen.

.. important::
   The `9050` port must be added as a :ref:`Windows Firewall exception <iot/windows-iot/firewall>`
   for the :doc:`Windows virtual IoT </applications/general/iot>`.

.. tip::
   To check the terminal's connection status, open the IoT app and click the :ref:`IoT system's
   card <iot/connect/IoT-form>`.

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
   - If a setup uses separate cashier and customer payment terminals, :ref:`configure
     <pos/worldline/configuration>` the cashier terminal first.
   - To prevent connection loss, set a fixed IP address on the IoT Box’s router or :ref:`restart
     the virtual IoT server <iot/windows_iot/restart>`.
