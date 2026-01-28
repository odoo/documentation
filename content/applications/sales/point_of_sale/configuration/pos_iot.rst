=====================
IoT system connection
=====================

To connect the POS with an :doc:`IoT system </applications/general/iot>`:

#. Make sure both the Point of Sale and Internet of Things (IoT) apps are installed on your
   database.
#. Set up the :doc:`/applications/general/iot/iot_box` or
   :doc:`/applications/general/iot/windows_iot`.
#. Connect the peripheral devices to the IoT system:

   .. list-table::
      :header-rows: 1
      :stub-columns: 1

      * - Device
        - Instructions
      * - Printer
        - Connect a supported receipt printer to a :abbr:`USB (Universal Serial Bus)` port or
          to the network, and power it on. Refer to :ref:`Order printing
          <pos/restaurant/orders-printing>`.
      * - Cash drawer
        - The cash drawer should be connected to the printer with an RJ25 cable.
      * - Barcode scanner
        - The barcode scanner must end barcodes with an `ENTER` character (keycode 28) in order for
          the barcode scanner to be compatible. This is most likely the barcode scanner's default
          configuration.
      * - Scale
        - :ref:`Connect the scale and power it on <pos/hardware/scale>`.
      * - Customer display
        - :ref:`Connect a screen <pos/hardware/display>` to the :abbr:`IoT (Internet of
          Things)` box to display the :abbr:`PoS (Point of Sale)` order.
      * - Payment terminal
        - The connection process depends on the terminal. Refer to the :doc:`payment terminals
          documentation </applications/sales/point_of_sale/payment_methods>`.

#. :doc:`Connect the IoT system to your Odoo database </applications/general/iot/connect>`.
#. In the :guilabel:`Connect to a Point of Sale` popup that opens, select the :guilabel:`Associated
   POS` and click :guilabel:`Continue`. The IoT system and its devices are automatically linked to
   the POS.

   .. tip::
      Alternatively, :ref:`access the POS settings <pos/use/settings>` and select the POS, or click
      the vertical ellipsis button (:guilabel:`⋮`) on a POS card and click :guilabel:`Edit`. Then,
      enable :guilabel:`IoT Box`, select the devices to use with the POS, and click
      :guilabel:`Save`.

.. seealso::
   - `List of supported hardware <https://www.odoo.com/page/point-of-sale-hardware>`_.
   - :doc:`IoT documentation </applications/general/iot>`

.. _pos/pos_iot/connect_schema:

Setup example
=============

.. image:: pos_iot/pos-connections.png
   :alt: A suggested configuration for a point of sale system.
