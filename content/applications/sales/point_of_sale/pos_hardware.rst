========
Hardware
========

Odoo Point of Sale supports integration with a variety of hardware, including :doc:`payment
terminals <payment_methods/terminals>` and cash drawers, as well as :doc:`customer displays
<shop/customer_display>`, :ref:`scales <pos/scale>`, :doc:`barcode scanners <shop/barcode>`,
:doc:`ePOS printers <configuration/epos_printers>`, and in-store :doc:`electronic shelf labels
<pricing/electronic_labels>`.

.. _pos/scale:

Scale
=====

.. important::
   In EU member states, `certification is legally required
   <https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv%3AOJ.L_.2014.096.01.0107.01.ENG>`_
   to use a scale as an integrated device.

Prerequisite
------------

Connecting a scale requires the use of an **IoT System**.

.. seealso::
   - :doc:`../../general/iot/connect`
   - :doc:`../../general/iot/devices/scale`

Configuration
-------------

Scale connection
~~~~~~~~~~~~~~~~

#. :ref:`Access the POS settings <configuration/settings>`.
#. Scroll down to the :guilabel:`Connected Devices` section and enable :guilabel:`IoT Box`.
#. Select the scale in the :guilabel:`Electronic Scale` field.
#. Click :guilabel:`Save`.

.. tip::
   Alternatively, click the :icon:`fa-ellipsis-v` (:guilabel:`Dropdown menu`) icon on a POS card and
   click :guilabel:`Edit` to access this setting.

Product configuration
~~~~~~~~~~~~~~~~~~~~~

In order to weigh products using an integrated scale, go to :menuselection:`Point of Sale -->
Products --> Products`, create a product or open an existing product form, and configure it as
follows:

#. Ensure the :guilabel:`Point of Sale` checkbox is activated for the product to be available in
   POS.
#. On the :guilabel:`General Information` tab, define a :guilabel:`Sales Price` per :guilabel:`kg`.

   .. note::
      This step requires to enable the :doc:`Units of Measure
      <../../inventory_and_mrp/inventory/product_management/configure/uom>` feature. To activate it:

      #. Go to :menuselection:`Inventory --> Configuration --> Settings`.
      #. Scroll down to the :guilabel:`Products` section and activate :guilabel:`Units of Measure`.
#. Go to the :guilabel:`Point of Sale` tab and activate :guilabel:`To Weigh With Scale`. This
   enables the product to be weighed directly on the connected scale at the POS.

.. important::
   The selected unit of measure for weighable products must be :guilabel:`kg` to ensure compliance
   with **European regulations**.

.. seealso::
   :doc:`../../inventory_and_mrp/inventory/product_management/configure/uom`

European regulations
--------------------

When using scales in commercial transactions, the database integrated with a scale must be
configured to meet specific European requirements. This includes supporting at least three decimal
places for accuracy and using proper rounding for units of measure, such as `kg` instead of generic
`units`.

If the database is not compliant, a red :icon:`fa-balance-scale` (:guilabel:`scale`) icon displays
as a warning. Click this icon to view the reasons for non-compliance and then select
:guilabel:`Apply changes` to automatically apply the necessary changes to the settings. Once the
database meets all regulatory requirements, the :icon:`fa-balance-scale` (:guilabel:`scale`) icon
turns green.

.. image:: pos_hardware/legal-requirements.png
   :scale: 75 %

.. admonition:: Additional guidelines

   Both the :doc:`customer <shop/customer_display>` and POS displays must have a minimum diagonal
   size of 6 inches. For optimal readability, larger screens are recommended.

Using a scale in PoS
--------------------

#. :ref:`Open a POS session <pos/session-start>`.
#. Select the product to weigh on the order screen or scan its barcode.
#. Place the product on the scale and wait for the weight to be displayed in the popup window.
#. Once the weight is determined, the price is automatically computed.
#. Click :guilabel:`Order` :icon:`fa-angle-double-right` to add the product to the cart.
#. Remove the previous product from the scale.

.. image:: pos_hardware/weigh.png
   :alt: weighing window
   :scale: 85 %

.. important::
   Make sure the scale returns to `zero` before weighing a new product. If it does not, the
   :guilabel:`Order` :icon:`fa-angle-double-right` button remains unclickable until it is reset.
