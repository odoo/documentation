:show-content:

====================
Hardware and network
====================

Odoo Point of Sale supports integration with a variety of hardware, including :doc:`payment
terminals <payment_methods/terminals>`, cash drawers, :doc:`customer displays
<hardware_network/customer_display>`, :doc:`scales <hardware_network/scale>`, :doc:`barcode scanners
</applications/inventory_and_mrp/barcode/setup/hardware>`, :doc:`receipt printers
<hardware_network/receipt_printers>`, and in-store :doc:`electronic shelf labels
<hardware_network/electronic_labels>`.

.. cards::

   .. card:: Local Network Access
      :target: hardware_network/pos_lna

      Enable direct browser communication with local hardware, like ePOS printers, without requiring
      SSL certificates.

   .. card:: IoT system connection
      :target: hardware_network/pos_iot

      Link your POS to an IoT system to connect and coordinate hardware peripherals like printers,
      scales, and scanners.

   .. card:: Receipt printers
      :target: hardware_network/receipt_printers

      Configure directly supported printers and identify which models require an IoT system for
      connection.

   .. card:: Electronic shelf labels
      :target: hardware_network/electronic_labels

      Integrate with the Pricer platform to configure and update digital shelf labels.

   .. card:: Customer display
      :target: hardware_network/customer_display

      Set up a secondary screen to show order details and prices to customers during checkout.

   .. card:: Scale
      :target: hardware_network/scale

      Configure and use scales in the POS, including settings for European legal requirements.

   .. card:: Self-signed certificate for ePOS printers
      :target: hardware_network/epos_ssc
      :large:

      Generate and install self-signed SSL certificates for secure HTTPS communication with ePOS
      printers.

.. _pos/hardware-network/recommendations:

Recommendations
===============

.. |yes| raw:: html

   <span class="text-success" role="img" aria-label="Yes" style="font-size: 28px; font-weight: bold; line-height: 28px; display: inline-block; vertical-align: middle;">✓</span>

.. |no| raw:: html

   <span class="text-danger" role="img" aria-label="No" style="font-size: 28px; font-weight: bold; line-height: 28px; display: inline-block; vertical-align: middle;">✕</span>

Odoo Point of Sale supports a wide range of devices. Most devices connect directly to the
database or over the network, while some require an :doc:`IoT gateway <hardware_network/pos_iot>`
to connect to Point of Sale. Check the following recommendations to ensure to purchase the
required hardware for your point of sale.


.. tabs::
   .. tab:: Barcode scanners

      .. list-table::
         :widths: 20 40 40
         :header-rows: 1
         :stub-columns: 1

         * - Type
           - Connection
           - Model
         * - Android
           - Wifi and Bluetooth
           - Zebra TC22, Zebra TC27, and Honeywell ScanPal
         * - USB
           - USB and Bluetooth
           - Netum NT-M1
         * - Webcam
           - Integrated or USB
           - All models

      .. seealso::
         - :doc:`/applications/inventory_and_mrp/barcode/setup/hardware`
         - `Barcode scanner (video tutorial) <https://www.youtube.com/watch?v=-Yjq_Am4dc0>`_

   .. tab:: Cash drawer

      .. list-table::
         :widths: 30 35 35
         :header-rows: 1
         :stub-columns: 1

         * - Type
           - Compatibility
           - Model
         * - Printer-driven
           - ePOS protocol and RJ12 connection to printer
           - Metapace K-2

      .. seealso::
         `Cash drawer (video tutorial) <https://www.youtube.com/watch?v=CWeUR7W2QBY>`_

   .. tab:: Cash machines

      .. list-table::
         :widths: 30 35 35
         :header-rows: 1
         :stub-columns: 1

         * - Brand
           - Connection
           - Model
         * - :doc:`payment_methods/cash_machines/cashdro`
           - Ethernet and Wifi
           - All models
         * - :doc:`payment_methods/cash_machines/cashmatic`
           - Ethernet
           - All models
         * - :doc:`payment_methods/cash_machines/glory`
           - Ethernet
           - Glory CI-5, CI-10, and CI-10X

   .. tab:: Fiscal Data Modules (Blackbox)

      .. list-table::
         :widths: 20 15 45 20
         :header-rows: 1
         :stub-columns: 1

         * - Provider
           - Type
           - Model
           - IoT gateway
         * - :ref:`Boitenoire.be <belgium/pos-restaurant-certification>`
           - SCE 1.0
           - BMC01, BMC04,and BMC06
           - |yes|
         * - Odoo
           - SCE 2.0
           - OBOX
           - |no|

      .. seealso::
         `Blackbox (video tutorial) <https://www.youtube.com/watch?v=q5gbbepaxPE>`_

      .. note::
         - The Blackbox is a mandatory legal requirement for all table-service restaurants and
           caterers in Belgium.
         - The OBOX is free for Odoo clients.

   .. tab:: Label printers

      .. list-table::
         :widths: 20 40 20 20
         :header-rows: 1
         :stub-columns: 1

         * - Type
           - Model
           - Connection
           - IoT gateway
         * - Thermal
           - Zebra ZD410, ZD411, ZD220, and GK420t
           - USB
           - |yes|
         * - Network
           - All models
           - Wifi and Ethernet
           - |yes|
         * - PDF
           - Dymo LabelWriter 450/550
           - USB and Wifi
           - |yes|
         * - ePOS
           - EPSON TM-L100
           - Wifi and Ethernet
           - |yes|

      .. seealso::
         `ZPL printers (video tutorial) <https://www.youtube.com/watch?v=Z6UkJ3z7h3I>`_

   .. tab:: Payment terminals

      .. list-table::
         :widths: 30 35 35
         :header-rows: 1
         :stub-columns: 1

         * - Provider
           - Model
           - IoT gateway
         * - :doc:`Adyen <payment_methods/terminals/adyen>`
           - All models
           - |yes|
         * - :doc:`DPOPay <payment_methods/terminals/dpo>`
           - All models
           - |yes|
         * - :doc:`Ingenico <payment_methods/terminals/ingenico>`
           - Lane/5000, Desk/5000, and Move/5000
           - |yes|
         * - :doc:`Mercado Pago <payment_methods/terminals/mercado_pago>`
           - Point Smart 1 and Point Smart 2
           - |no|
         * - :doc:`Mollie <payment_methods/terminals/mollie>`
           - All models
           - |no|
         * - :doc:`Pine Labs <payment_methods/terminals/pine_labs>`
           - All models
           - |no|
         * - :doc:`QFPay <payment_methods/terminals/qfpay>`
           - All models
           - |no|
         * - :doc:`Razorpay <payment_methods/terminals/razorpay>`
           - All models
           - |no|
         * - :doc:`SIX <payment_methods/terminals/six>`
           - Saturn 1000 Pin Pad
           - |yes|
         * - :doc:`Stripe <payment_methods/terminals/stripe>`
           - All models
           - |no|
         * - :doc:`Tyro <payment_methods/terminals/tyro>`
           - All models
           - |no|
         * - :doc:`Viva.com <payment_methods/terminals/viva_com>`
           - All models
           - |no|
         * - :doc:`Worldline <payment_methods/terminals/worldline>`
           - Yomani XR and Yoximo
           - |yes|

      .. note::
         Each payment terminal is used in its specific country or region. Check their respective
         :doc:`documentation <payment_methods/terminals>` to ensure which terminal is compatible
         with your point of sale's location.

   .. tab:: Receipt printers

      .. list-table::
         :widths: 20 45 20 15
         :header-rows: 1
         :stub-columns: 1

         * - Type
           - Connection
           - Model
           - IoT gateway
         * - EPSON ePOS
           - Ethernet and Wifi (ePOS SDK JavaScript protocol)
           - TM-M30III
           - |no|
         * - Android
           - Ethernet and Wifi
           - iMin Swan 2 and Falcon 2
           - |no|
         * - ESC/POS
           - Ethernet, Wifi, and USB
           - All models
           - |yes|
         * - USB ePOS
           - USB
           - All models
           - |yes|

      .. seealso::
         - :doc:`hardware_network/receipt_printers`
         - `Receipt printers without IoT (video tutorial)
           <https://youtu.be/OUUi6N_xT-U?si=NZ9PPrsXDUcJ4kSy>`_
         - `Receipt printers with IoT (video tutorial)
           <https://youtu.be/ORojunUs5Bs?si=FrDJ0N-9f8SJlQrA>`_

   .. tab:: Weighing scale

      .. list-table::
         :widths: 25 25 25 25
         :header-rows: 1
         :stub-columns: 1

         * - Type
           - Compatibility
           - Model
           - IoT gateway
         * - Serial or USB
           - 8217 protocol
           - Mettler Toledo Ariva-S
           - |yes|

      .. seealso::
         - :doc:`hardware_network/scale`
         - `Scale (video tutorial) <https://www.youtube.com/watch?v=vGNe-PmulAA>`_

      .. note::
         Integration is optional; manual entry from any standalone scale is supported. Tare is
         supported, unless the model requires official scale certification.

.. toctree::
   :titlesonly:

   hardware_network/pos_lna
   hardware_network/pos_iot
   hardware_network/receipt_printers
   hardware_network/electronic_labels
   hardware_network/customer_display
   hardware_network/scale
   hardware_network/epos_ssc
