===============
Connect a scale
===============

.. important::
   In EU member states, `certification is legally required
   <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.096.01.0107.01.ENG>`_
   to use a scale as an integrated device.

To connect a scale to the IoT system, use a USB cable. In some cases, you may need a serial-to-USB
adapter to complete the connection. If the scale is `compatible with an IoT system
<https://www.odoo.com/page/iot-hardware>`_, no additional setup is required; the scale is
automatically detected as soon as it is connected. If the scale is not detected, reboot the IoT box
or :ref:`restart the Windows virtual IoT service <iot/windows_iot/restart>` and :ref:`update the
scale's drivers <iot_updating_iot/handlers>`.

.. note::
   If the scale still does not function after updating the drivers, it might not be `compatible with
   the Odoo IoT system <https://www.odoo.com/page/iot-hardware>`_. In such cases, a different scale
   must be used.

Once the scale is connected to the IoT system, :ref:`configure it in the POS settings <pos/scale>`.

.. seealso::
   :doc:`Connect an IoT system to a POS </applications/sales/point_of_sale/configuration/pos_iot>`

Ariva S scales
==============

For Ariva S series scales (manufactured by Mettler-Toledo, LLC.) to function with IoT systems, a
specific setting must be modified, and a dedicated Mettler USB-to-proprietary RJ45 cable is required.

.. important::
   The official Mettler USB-to-RJ45 cable (Mettler part number 72256236) must be used. Contact
   Mettler or a partner to purchase an authentic cable. **No other** cable works for this
   configuration.

To configure the Ariva S scale for IoT system recognition, refer to page 17 of `Mettler's Setup
Guide for Ariva S series scales <https://www.mt.com/dam/RET_DOCS/Ariv.pdf>`_ and follow these steps:

#. Hold the **>T<** button for eight seconds, or until :guilabel:`CONF` appears.
#. Press **>T<** until :guilabel:`GRP 3` appears, then press **>0<** to confirm.
#. At step :guilabel:`3.1`, make sure the value is set to :guilabel:`1` (USB Virtual COM ports) by
   pressing **>T<** to cycle through the options.
#. Press **>0<** until :guilabel:`3.6` (if available, otherwise skip the next step).
#. At step :guilabel:`3.6`, make sure the value is set to :guilabel:`3` (8217 Mettler-Toledo (WO))
   by pressing **>T<** to cycle through the options.
#. Press **>0<** (multiple times if necessary) until :guilabel:`GRP 4` appears.
#. Press **>T<** until :guilabel:`EXIT` appears.

   .. important::
      Do **not** make any other changes unless otherwise needed.

#. Press **>0<**.
#. Press **>0<** again to :guilabel:`SAVE`; the scale restarts.
#. Reboot the IoT box or :ref:`restart the Windows virtual IoT service <iot/windows_iot/restart>`.
   The scale should then appear as `Toledo 8217`.
