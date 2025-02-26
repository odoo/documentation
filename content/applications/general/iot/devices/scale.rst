===============
Connect a scale
===============

.. important::
   - In EU member states, `certification is legally required
     <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.096.01.0107.01.ENG>`_
     to use a scale as an integrated device.
   - Odoo is not certified in several countries, including France, Germany, and Switzerland. If you
     reside in one of these countries, you can still use a scale but without integration into your
     Odoo database. Alternatively, you can acquire a *non-integrated* certified scale that prints
     certified labels, which can then be scanned into your Odoo database.

To connect a scale to the IoT system, use a USB cable. In some cases, you may need a serial-to-US
adapter to complete the connection. If the scale is `compatible with an IoT system
<https://www.odoo.com/page/iot-hardware>`_, no additional setup is required; the scale is
automatically detected as soon as it is connected. If the scale is not detected, reboot the IoT box
or :ref:`restart the Windows virtual IoT service <iot/windows_iot/restart>` and :ref:`update the
scale's drivers <iot_updating_iot/handlers>`.

.. note::
   If the scale still does not function after updating the drivers, it might not be `compatible with
   the Odoo IoT system <https://www.odoo.com/page/iot-hardware>`_. In such cases, a different scale
   must be used.

Once the scale is connected to the IoT system, follow these steps to configure it in the POS
settings:

#. :ref:`Access the POS settings <configuration/settings>` and select your POS, or click the
   vertical ellipsis button (:guilabel:`⋮`) on a POS card and click :guilabel:`Edit`.
#. Scroll down to the :guilabel:`Connected Devices` section and enable :guilabel:`IoT Box`.
#. Select the scale in the :guilabel:`Electronic Scale` field.
#. Click :guilabel:`Save`.

.. seealso::
   :doc:`Connect an IoT system to a POS </applications/sales/point_of_sale/configuration/pos_iot>`

The scale is then available in all the :doc:`POS's sessions </applications/sales/point_of_sale>`.
If a product is configured with a price per weight, selecting it on the :guilabel:`PoS screen` opens
the scale popup. The cashier can then weigh the product to automatically add the correct price to
the cart.

.. image:: scale/scale-view.png
   :scale: 80%
   :alt: Electronic Scale dashboard view when no items are being weighed.

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
   The scale should then appear as `Toledo 8217`, as opposed to the previous display, where it
   appeared as `Adam Equipment Serial`.
