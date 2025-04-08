========
Delivery
========

Odoo eCommerce allows you to configure various delivery methods, enabling customers to choose
their preferred option at :doc:`checkout <checkout>`. These methods include :ref:`external providers
<ecommerce/shipping/external-provider>`, :ref:`custom options <ecommerce/shipping/custom-method>`
such as flat-rate or free shipping, local carriers via
:doc:`Sendcloud </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/sendcloud_shipping>`
or :ref:`Based on Rules <inventory/shipping/rules>`, and
:ref:`in-store pickup <ecommerce/shipping/instore-pickup>`.

.. _ecommerce/shipping/external-provider:

External provider integration
=============================

To handle product delivery, you can connect your database to :doc:`third-party shipping carriers
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`
like :doc:`FedEx </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/fedex>`,
:doc:`UPS </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/ups_credentials>`,
or :doc:`DHL </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dhl_credentials>`.
A shipping connector links to these providers, automating :doc:`tracking labels
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels>` and shipping
processes.

To enable a third-party delivery provider, go to :menuselection:`Website --> Configuration -->
Settings`, scroll to the :guilabel:`Delivery` section, select the desired delivery provider(s),
and :guilabel:`Save`.

Go to :menuselection:`Website --> Configuration --> Delivery Methods` and select the delivery method
in the list to :ref:`configure it <inventory/shipping_receiving/configure-delivery-method>`.

.. seealso::
   :doc:`Third-party shipping carriers
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`

.. important::
   The field used to define additional fees **must** be filled **in your third-party delivery
   provider account**, even if you do not plan to charge customers any additional fee. If you do not
   want to apply a fee, enter `0`. If the field is left empty, the delivery price cannot be
   calculated, and an error message prompts the customer to select an alternative delivery method.

Margin on delivery rate
-----------------------

To add an additional fee to the base shipping rate (e.g., to cover extra costs), log into your
carrier account and set the desired fee in the related field. The shipping connector retrieves this
fee and includes it in the final price at checkout. Contact your carrier for further assistance
with this configuration.

Alternatively, enter `0` in your third-party shipping provider account, then set the fee in Odoo.
To do so, access the desired :ref:`shipping method's form
<inventory/shipping_receiving/configure-delivery-method>` and enter the fee in the :guilabel:`Margin
on Rate` field to add a percentage to the shipping costs and/or the :guilabel:`Additional margin`
field to add a fixed amount.

.. important::
   The field used to define additional fees cannot be left empty in your third-party shipping
   provider account.

.. _ecommerce/shipping/custom-method:

Custom delivery method
======================

Custom delivery methods must be created, for example:

- to integrate delivery carriers through :doc:`Sendcloud
  </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/sendcloud_shipping>`;
- to configure specific rules (e.g., to offer free shipping for orders above a specific amount) for
  a specific provider;
- to configure :ref:`Fixed Price <inventory/shipping/fixed>` shipping, or shipping :ref:`Based on
  Rules <inventory/shipping/rules>`.

To create a custom delivery method, go to :menuselection:`Website --> Configuration --> Delivery
Methods`, click :guilabel:`New`, and fill in the :ref:`fields
<inventory/shipping_receiving/shipping-methods-details>`.

In the :guilabel:`Provider` field, select :ref:`Based on Rules <inventory/shipping/rules>` or
:ref:`Fixed Price <inventory/shipping/fixed>`.

.. tip::
   Upon :ref:`configuring <inventory/shipping_receiving/configure-delivery-method>` a delivery
   method, you can:

   - Restrict it :doc:`to a specific website <../website/configuration/multi_website>` by
     selecting it in the :guilabel:`Website` field.
   - Click the :guilabel:`Test Environment` smart button to switch to the
     :guilabel:`Production Environment`. Then, click :guilabel:`Unpublished` to :guilabel:`Publish`
     the delivery method and make it available to website visitors.
   - Use the :guilabel:`Availability` tab to define :ref:`conditions
     <inventory/shipping_receiving/availability>` for the delivery method based on the order's
     content or destination.

.. _ecommerce/shipping/instore-pickup:

Click & Collect
===============

To allow customers to reserve products online and pay for/collect them in-store, follow these steps:

#. Go to :menuselection:`Website --> Configuration --> Settings`.
#. Scroll to the :guilabel:`Delivery` section, enable :guilabel:`Click & Collect`, and
   :guilabel:`Save`.
#. Click :icon:`fa-arrow-right` :guilabel:`Configure Pickup Locations` to :ref:`configure
   <inventory/shipping_receiving/configure-delivery-method>` the delivery method and ensure the
   :guilabel:`Provider` field is set to :guilabel:`Pick up in store`.
#. In the :guilabel:`Stores` tab, click :guilabel:`Add a line` and select the warehouse(s) where
   customers can collect their orders.
#. Once your setup is complete, click the :guilabel:`Unpublish` button to change the status to
   :guilabel:`Publish` and make the delivery method available to customers.

.. note::
   - When the product is in stock, a location selector is displayed on the :doc:`product
     <products>` and :doc:`checkout <checkout>` pages. Customers cannot select a pickup location
     if the product is out of stock at that location. The :ref:`Continue selling
     <ecommerce/products/stock-management>` option for out-of-stock products is not supported.
   - If the :ref:`Show Available Qty <ecommerce/products/stock-management>` option is enabled for a
     product, customers can view the stock quantity available for each warehouse in the location
     selector on the product page.
   - Each warehouse must have a **complete address** to ensure its location is accurately displayed
     to customers. Incomplete addresses prevent the warehouse from being shown.
   - The Click & Collect option is not available for services.
