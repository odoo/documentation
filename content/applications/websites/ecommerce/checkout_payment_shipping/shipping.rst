========
Shipping
========

Odoo eCommerce allows you to configure various shipping methods, enabling customers to choose
their preferred option at checkout. These methods include :ref:`external providers <ecommerce/shipping/external-provider>`,
:ref:`custom options <ecommerce/shipping/custom-method>` such as flat-rate or free shipping, local
carriers via :doc:`Sendcloud <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/sendcloud_shipping>`
or :ref:`Based on Rules <inventory/shipping/rules>`,
and :ref:`pick up in-store <ecommerce/shipping/pick-up-in-store>`.

.. tip::
   Upon :ref:`configuring <inventory/shipping_receiving/configure-delivery-method>` a delivery
   method, you can:

   - restrict it :doc:`to a specific website <../../website/configuration/multi_website>` by
     selecting it in :guilabel:`Website` field.
   - use the :guilabel:`Destination availability` tab to filter the delivery carriers displayed
     based on the customer's area.
   - click the :guilabel:`Test Environment` smart button to switch to
     the :guilabel:`Production Environment`, then click :guilabel:`Unpublished` to
     :guilabel:`Publish` the shipping method and make it available to website visitors.

.. _ecommerce/shipping/external-provider:

External provider integration
=============================

To handle product delivery, you can connect your system to :doc:`third-party shipping carriers <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`
like :doc:`FedEx <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/fedex>`,
:doc:`UPS <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/ups_credentials>`,
or :doc:`DHL <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dhl_credentials>`.
A shipping connector links your business platform to these providers, automating
:doc:`tracking labels <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels>`,
and shipping processes.

To enable a third-party shipping provider, go to :menuselection:`Website --> Configuration -->
Settings`, scroll to the :guilabel:`Shipping` section, select the shipping provider(s) you want,
and :guilabel:`Save`.

Go to :menuselection:`Website --> Configuration --> Shipping Methods` and select the shipping method
in the list to :ref:`configure it <inventory/shipping_receiving/configure-delivery-method>`.

.. note::
   Enter the delivery cost you wish to charge your customers on your carrier account. The shipping
   connector retrieves this information and displays the final price next to the shipping method at
   checkout. If no cost is provided to the carrier, they cannot calculate the delivery
   price, resulting in an error message prompting the client to select another shipping method. For
   assistance, contact your carrier shipping manager.

.. _ecommerce/shipping/custom-method:

Custom shipping method
======================

Custom shipping methods must be created, for example:

- to integrate shipping carriers through :doc:`Sendcloud <../../../inventory_and_mrp/inventory/shipping_receiving/setup_configuration/sendcloud_shipping>`;

- to configure specific rules (e.g., to offer free shipping for orders above a specific amount) for a specific provider;

- to configure :ref:`Fixed Price <inventory/shipping/fixed>` shipping or shipping :ref:`Based on Rules <inventory/shipping/rules>`.

To create a custom shipping method, go to :menuselection:`Website --> Configuration --> Shipping Methods`,
click :guilabel:`New` and fill in the :ref:`fields <inventory/shipping_receiving/shipping-methods-details>`.

In the :guilabel:`Provider` field, select :ref:`Based on Rules <inventory/shipping/rules>`,
:ref:`Fixed Price <inventory/shipping/fixed>`, or :ref:`Pickup in store <inventory/shipping/pickup>`
if the shiping method does not involve any specific provider.

.. _ecommerce/shipping/pick-up-in-store:

Pick up in store
================

You can allow customers to book a product online and pay in person at your store.

To enable product pick up in store, go to :menuselection:`Website --> Configuration --> Settings`,
scroll to the :guilabel:`Shipping` section, tick the :guilabel:`On Site Payments & Picking`
checkbox, and :guilabel:`Save`.

Then, go to :menuselection:`Website --> Configuration --> Shipping Methods`, click on
the method, select :guilabel:`Pickup in store` in the :guilabel:`Provider` field, and
:ref:`configure <inventory/shipping_receiving/configure-delivery-method>` the other fields.
