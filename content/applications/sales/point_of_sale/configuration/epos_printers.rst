=============
ePOS printers
=============

ePOS printers are designed to work seamlessly with Point of Sale systems. Once connected, these
devices automatically share information, allowing for direct printing of tickets from the POS system
to the ePOS printer.

.. important::
   - Epson printers using Wi-Fi/Ethernet connections and following the `EPOS SDK Javascript protocol
     <https://download4.epson.biz/sec_pubs/pos/reference_en/technology/epson_epos_sdk.html>`_ are
     compatible with Odoo **without** needing an :doc:`IoT Box
     </applications/general/iot/devices/printer>`.
   - Thermal printers using ESC/POS or StarPRNT protocol are compatible **with** an :doc:`IoT Box
     </applications/general/iot/devices/printer>`.
   - Epson printers using only USB connections are compatible **with** an :doc:`IoT Box
     </applications/general/iot/devices/printer>`.
   - Epson printers that connect via Bluetooth are **not compatible**.

.. seealso::
   - :doc:`https`
   - :doc:`epos_ssc`

Directly supported ePOS printers
================================

The following ePOS printers are directly compatible with Odoo without needing an :doc:`IoT Box
</applications/general/iot/devices/printer>`.

- Epson TM-m30 i/ii/iii (Wi-Fi/Ethernet models only; Recommended)
- Epson TM-H6000IV-DT (Receipt printer only)
- Epson TM-T70II-DT
- Epson TM-T88V-DT
- Epson TM-L90-i
- Epson TM-T70-i
- Epson TM-T82II-i
- Epson TM-T83II-i
- Epson TM-U220-i
- Epson TM-m10
- Epson TM-P20 (Wi-Fi® model)
- Epson TM-P60II (Receipt: Wi-Fi® model)
- Epson TM-P60II (Peeler: Wi-Fi® model)
- Epson TM-P80 (Wi-Fi® model)

ePOS printers with IoT Box integration
======================================

The following printers require an :doc:`IoT Box </applications/general/iot/devices/printer>` to be
compatible with Odoo:

- Epson TM-T20 family (incompatible ePOS software)
- Epson TM-T88 family (incompatible ePOS software)
- Epson TM-U220 family (incompatible ePOS software)
