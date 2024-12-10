================
Delivery methods
================

Depending on your shipping strategy, you have the choice to either use your :ref:`own delivery
methods <ecommerce-own-shipping>`, or use an integration with an :ref:`existing delivery provider
<ecommerce-shipping-providers>`.

.. _ecommerce-own-shipping:

.. seealso::
   :doc:`../checkout_payment_shipping/checkout`

Own delivery methods
====================

You can create your own custom delivery methods and define rules to compute delivery costs. To do
so, go to :menuselection:`Website --> Configuration --> Delivery Methods`, and either select an
**existing** delivery method, or :guilabel:`Create` one. When creating a delivery method, you can
choose between :ref:`Fixed Price <inventory/shipping/fixed>`, :ref:`Based on Rules
<inventory/shipping/rules>`, and :guilabel:`Pickup in store`.

Pick up in store
----------------

To enable :guilabel:`Pick up in store`, follow these steps:

#. **Enable Click & Collect**

   Go to the website settings :menuselection:`Website -->
   Configuration --> Settings --> Delivery section`, then check the box for :guilabel:`Click &
   Collect`.

#. **Select stores for a pick-up**

   Choose stores represented by your warehouses where customers can pick up their orders from.

#. **Set address information**

   Ensure that each selected warehouse has a partner assigned, along with complete address data.
   This is essential for localizing the warehouse and displaying its accurate location to customers.

#. **(Optional) Configure warehouse opening hours**

   You can set the opening hours for each warehouse which enhances the user experience by informing
   customers of the operational hours for pick-up locations.

#. **Publish the provider**

   Once all settings are configured, publish the provider to make it available to customers.

After publishing, customers will be able to choose a pick-up location using a **location selector**
if a product is in stock. This selector will be available on the **product page** and during the
**checkout process** when selecting delivery methods.

.. note::
   - Services are not available for **Pick up in store**.
   - Customers can not select a pick-up location if a product is out of stock at that location. The
     `Continue selling` option when out of stock is not supported.
   - If the `Show Available Qty` setting is activated on the product, customers will be able to view
     the available stock quantity for each warehouse in the location selector on the product page.
   - Customers will not be able to complete the checkout if any of the selected products are out of
     stock at the chosen pick-up location.

.. seealso::
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/invoicing`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/cancel`

.. _ecommerce-shipping-providers:

Delivery providers
==================

Another solution is to use one of the integrations with an existing delivery provider. The advantage
of using an integration is that delivery costs are automatically computed based on each order as
well as generating shipping labels.



.. seealso::
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/ups_credentials`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dhl_credentials`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels`

Website availability
====================

Shipping methods can be made available on **specific** websites *only*, if desired. To do so, go to
:menuselection:`Website --> Configuration --> Settings --> Shipping Methods`, and select the desired
**shipping method**. In the :guilabel:`Website` field, set the website you want the delivery method
to be restrained to. Leave the field **empty** for the method to be available on *all* websites.
