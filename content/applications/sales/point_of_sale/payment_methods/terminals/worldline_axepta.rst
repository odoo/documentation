==============================
Worldline & Axepta BNP Paribas
==============================

`Worldline <https://worldline.com/>`_ and `Axepta BNP Paribas <https://www.axeptabnpparibas.be/>`_
offer payment solutions through :doc:`payment terminals<../terminals>` to handle customer transactions.

.. important::
   - Connecting a Worldline or an Axepta BNP Paribas payment terminal to Odoo requires an
     :doc:`IoT system </applications/general/iot/connect>`.
   - Both Worldline and Axepta BNP Paribas are only available in **Belgium**, **the Netherlands**,
     and **Luxembourg** with Odoo.
   - Odoo is compatible with terminals that use the CTEP protocol (e.g., the **Yomani XR**,
      **Yoximo**, **AXIUM5000**, and **AXIUM8000** terminals). Contact the payment provider to confirm the terminal's compatibility if necessary.
   - The configuration of Axepta BNP Paribas payment terminals is identical to that of Worldline terminals.

.. _pos/worldline/configuration:

Worldline/Axepta BNP Paribas configuration
==========================================

First, go to :menuselection:`Point of Sale --> Configuration --> Settings`,
scroll down to the :guilabel:`Payment Terminals` section, and enable the Worldline or the Axepta BNP Paribas payment terminal.
Then :doc:`connect the IoT system to Odoo </applications/general/iot/connect>`.

To configure the terminal, follow the next steps:

   #. Configure the CTEP protocol.
   #. Set the hostname to the :ref:`IoT's IP address <iot/connect/IoT-form>`.
   #. Enter port number **9001** (if using an :doc:`IoT box </applications/general/iot/iot_box>`) or **9050** (if using a :doc:`Windows virtual IoT </applications/general/iot/windows_iot>`).
   #. Reboot the terminal to apply the settings.

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
   - Only one terminal can be connected to an IoT Box.
   - For the configuration of the **AXIUM5000** and **AXIUM8000** terminals, contact your payment provider.
