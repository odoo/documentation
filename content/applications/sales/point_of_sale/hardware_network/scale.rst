=====
Scale
=====

.. important::
   - In EU member states, `certification is legally required
     <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.096.01.0107.01.ENG>`_
     for the use of a scale as an integrated device.
   - The **Mettler Toledo scale (Ariva S)** using protocol 8217 is recommended with Odoo.
   - Connecting a scale to Odoo requires setting up an :doc:`IoT system
     </applications/general/iot>`. For optimal reliability, it is recommended to use a
     :doc:`physical IoT system </applications/general/iot/iot_box>` rather than a :doc:`virtual one
     </applications/general/iot/windows_iot>`.

.. _pos/scale/configuration:

Configuration
=============

.. _pos/scale/config-connection:

Scale connection
----------------

To connect the scale with Point of Sale, follow these steps:

#. Turn on the scale before starting the IoT system to ensure it is detected during setup.
#. Connect the :ref:`IoT system to Odoo <iot/iot-odoo/connection>`.
#. In the :guilabel:`Connect to a Point of Sale` popover, set the :guilabel:`Associated PoS` field
   to the relevant point of sale, then click :guilabel:`Continue`.
#. Go to :menuselection:`Point of Sale --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Connected Devices` section, then select the scale in the
   :guilabel:`Electronic Scale` field.
#. Click :guilabel:`Save`.

.. tip::
   - If the scale is not recognized by the IoT system, :ref:`reconfigure it by following the
     setup guidelines <iot/scale/ariva-s>`. If the issue persists, restart the IoT system.
   - Alternatively, to connect the IoT system to the database, go to the :ref:`POS settings
     <pos/use/settings>`, scroll down to the :guilabel:`Connected Devices` section, and enable the
     :guilabel:`IoT Box` setting.
   - Alternatively, to enable and configure the :guilabel:`IoT Box` setting, click the
     :icon:`fa-ellipsis-v` (:guilabel:`Dropdown menu`) icon on a POS card, then click
     :guilabel:`Configure`.

.. seealso::
   - :doc:`/applications/general/iot/connect`
   - :doc:`/applications/general/iot/devices/scale`
   - `Odoo Point of Sale: Scales (video) <https://www.youtube.com/watch?v=vGNe-PmulAA>`_

.. _pos/scale/config-product:

Product configuration
---------------------

To configure the scale to weigh products and display their weight in the :ref:`POS register
<pos/use/open-register>`, follow these steps:

#. Go to :menuselection:`Inventory --> Configuration --> Settings`.
#. Scroll down to the :guilabel:`Products` section, enable the :doc:`Units of Measure & Packagings
   </applications/inventory_and_mrp/inventory/product_management/configure/uom>` setting, and click
   :guilabel:`Save`.
#. Go to :menuselection:`Point of Sale --> Products --> Products`.
#. Click :guilabel:`New` to :ref:`create a product <pos/products/creation>` or click an existing
   product form.
#. On the :guilabel:`General Information` tab, set the :guilabel:`Sales Price` to the relevant
   unit of mass.
#. Click the :guilabel:`Point of Sale` tab and enable :guilabel:`To Weigh With Scale` to weigh the
   product directly on the connected scale.
#. Save the product form.

.. important::
   To comply with :ref:`European regulations <pos/scale/eu-regulations>`, the unit of measure for
   weighable products must be set to `kg`.

.. tip::
   Ensure the :guilabel:`Point of Sale` checkbox is activated on the product form to make the
   product available in Point of Sale.

.. seealso::
   :doc:`/applications/inventory_and_mrp/inventory/product_management/configure/uom`

.. _pos/scale/eu-regulations:

European regulations
====================

When using scales in commercial transactions, the database to which the scale is connected must be
configured to comply with specific European requirements. This includes supporting at least three
decimal places for accuracy and using proper rounding for units of measure, such as `kg` rather than
generic `units`.

If the database is not compliant, a red :icon:`fa-balance-scale` (:guilabel:`scale`) icon displays
as a warning. Click this icon to view the reasons for non-compliance and then select
:guilabel:`Apply changes` to automatically apply the necessary changes to the settings. Once the
database meets all regulatory requirements, the :icon:`fa-balance-scale` (:guilabel:`scale`) icon
turns green.

.. image:: scale/legal-requirements.png
   :scale: 75 %

.. admonition:: Additional guidelines

   Both the :doc:`customer <customer_display>` and POS displays must have a minimum diagonal
   size of 6 inches. For optimal readability, larger screens are recommended.

.. _pos/scale/product-weighing:

Product weighing
================

To weigh a product in the :ref:`POS register <pos/use/open-register>` using the :ref:`connected
scale <pos/scale/config-connection>`, follow these steps:

#. Select the :ref:`created product <pos/scale/config-product>` in the grid. A popover displays the
   product's name.
#. Place the physical product on the scale. Once the weight is determined, the price is
   automatically computed in the popover.
#. Click :guilabel:`Order` :icon:`fa-angle-double-right` to add the product to the cart.
#. Remove the product from the scale and continue with the order.

.. image:: scale/weigh.png
   :alt: weighing window
   :scale: 85 %

.. important::
   Make sure the scale returns to zero before weighing a new product. If it does not, the
   :guilabel:`Order` :icon:`fa-angle-double-right` button remains unclickable until it is reset.

.. tip::
   Click :guilabel:`Tare` in the popover to reset the scale to zero and subtract the container's
   weight.
