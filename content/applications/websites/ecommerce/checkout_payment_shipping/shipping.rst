================
Shipping methods
================

Depending on your shipping strategy, you have the choice to either use your :ref:`own shipping
methods <ecommerce-own-shipping>`, or use an integration with an :ref:`existing shipping provider
<ecommerce-shipping-providers>`.

.. _ecommerce-own-shipping:

.. seealso::
   :doc:`../checkout_payment_shipping/checkout`

Own shipping methods
====================

You can create your own custom shipping methods and define rules to compute shipping costs. To do
so, go to :menuselection:`Website --> Configuration --> Shipping Methods`, and either select an
**existing** shipping method, or :guilabel:`Create` one. When creating a shipping method, you can
choose between :ref:`Fixed Price <inventory/shipping/fixed>`, :ref:`Based on Rules
<inventory/shipping/rules>`, and :guilabel:`Pickup in store`.

Pickup in store
---------------

:guilabel:`Pickup in store` must first be **enabled** in the settings (:menuselection:`Website -->
Configuration --> Settings --> Shipping section)` by checking :guilabel:`On Site Payments &
Picking`. Once enabled, you can select and :guilabel:`Customize Pickup Sites`. :guilabel:`Picking
sites` can be made **website-specific**, but are by default available for *all* websites.

.. seealso::
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/invoicing`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/multipack`
   - :doc:`../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/cancel`

.. _ecommerce-shipping-providers:

Shipping providers
==================

Another solution is to use one of the integrations with an existing shipping provider. The advantage
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
**shipping method**. In the :guilabel:`Website` field, set the website you want the shipping method
to be restrained to. Leave the field **empty** for the method to be available on *all* websites.

Delivery method at checkout
===========================

Customers can choose the shipping method at the end of the checkout process, at the
:guilabel:`Confirm Order` step.

.. image:: shipping/shipping-checkout.png
   :align: center
   :alt: Delivery method choice at checkout
