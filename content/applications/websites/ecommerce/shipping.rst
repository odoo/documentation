================
Delivery methods
================

Odoo eCommerce allows you to configure various delivery methods, enabling customers to choose their
preferred option at :ref:`checkout <ecommerce/checkout/steps>`. These methods include integrations
with :ref:`external providers <ecommerce/shipping/external-provider>` as well as :ref:`custom
options <ecommerce/shipping/custom-method>` such as flat-rate shipping, free shipping, or
:ref:`in-store pickup <ecommerce/shipping/instore-pickup>`.

.. seealso::
   :doc:`Configuring delivery methods
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration>`

.. _ecommerce/shipping/external-provider:

External provider integration
=============================

You can integrate with :doc:`third-party shipping carriers
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`,
such as :doc:`FedEx </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/fedex>`,
:doc:`UPS </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/ups_credentials>`,
or :doc:`DHL </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/dhl_credentials>`
to streamline shipping operations. Connecting with an external provider allows to generate
:doc:`tracking labels
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/labels>`
automatically and to offer customers several delivery options at :ref:`checkout
<ecommerce/checkout/steps>`.

To enable a third-party delivery provider:

#. Go to :menuselection:`Website --> Configuration --> Settings`.
#. Scroll to the :guilabel:`eCommerce` section.
#. Under :guilabel:`Configure Delivery Methods`, click :icon:`fa-arrow-right` :guilabel:`Find a
   Delivery Provider`.
#. On the :guilabel:`New Providers` page, click the :guilabel:`Delivery Methods` button of an
   already-installed provider to access the delivery method's form, or :guilabel:`Install` a new
   provider.
#. :doc:`Configure the delivery method
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/third_party_shipper>`.

.. note::
   The :ref:`shipping price <inventory/shipping/calculate-delivery-cost>`, including the
   :guilabel:`Margin on Rate` or :guilabel:`Additional margin` configured on the :ref:`delivery
   method <inventory/shipping_receiving/configure-delivery-method>` (if applicable), is displayed
   when selecting the provider during :ref:`checkout <ecommerce/checkout/steps>`.

.. tip::
   It is also possible to connect your e-commerce to shipping aggregators, such as :doc:`Sendcloud
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/sendcloud_shipping>`
   or :doc:`Envia.com
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/envia_shipping>`,
   or to fulfillment platforms like :doc:`Gelato </applications/sales/sales/gelato>`.

.. _ecommerce/shipping/custom-method:

Custom delivery method
======================

Custom delivery methods must be created, for example:

- to configure :ref:`fixed-price <inventory/shipping/fixed>` shipping that applies to all orders;
- to configure shipping :ref:`based on rules <inventory/shipping/rules>`;
- to configure the :ref:`Click & Collect <ecommerce/shipping/instore-pickup>` option.

To create a custom :doc:`delivery method
</applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/new_delivery_method>`,
go to :menuselection:`Website --> Configuration --> Delivery Methods`, click :guilabel:`New`, and
:ref:`configure it <inventory/shipping_receiving/delivery-product>`.

Upon :ref:`configuring <inventory/shipping_receiving/delivery-product>` a delivery method, you can:

- Use the :guilabel:`Availability` tab to define :ref:`conditions
  <inventory/shipping_receiving/availability>` for the delivery method based on the order's content
  or destination.
- Enable the :ref:`Cash on Delivery <payment_providers/inperson_payments/cash_on_delivery>` option
  so customers can pay upon delivery.
- Add a :guilabel:`Tracking Link` to allow customer to track their order via the customer portal.
- Use the :guilabel:`eCommerce` tab to:

  - Restrict it :doc:`to a specific website <../website/configuration/multi_website>` by selecting
    it in the :guilabel:`Website` field.
  - Define an :guilabel:`Estimated Delivery` date to indicate when the order is planned to be
    delivered. To do so:

    - Select the number of :guilabel:`working days` to set a fixed duration for order processing and
      delivery.
    - Fill in the :guilabel:`Allow selection up to` field to let customers choose the delivery date.
      This might be especially useful for :ref:`ecommerce/shipping/instore-pickup` orders.
    - Select the :doc:`working schedule </applications/hr/payroll/working_schedules>` in the
      :guilabel:`Based on` field.

    .. example::
       Your expected delivery period is 5 working days. You allow the customer to choose up to
       2 additional working days.
       If the customer orders on *06/17/2026*, the expected delivery date is *06/24/2026*. Since
       customers can select up to 2 additional days, they can choose a delivery date between
       *06/24/2026*, *06/25/2026*, and *06/26/2026*.

       .. image:: shipping/estimated-deliver-date.png
          :alt: Estimated delivery date at checkout.
          :scale: 70%

.. _ecommerce/shipping/instore-pickup:

Click & Collect
---------------

To allow customers to reserve products online and collect them in-store, follow these steps:

#. Go to :menuselection:`Website --> Configuration --> Settings`.
#. Scroll to the :guilabel:`eCommerce` section, enable :guilabel:`Click & Collect`, and
   :guilabel:`Save`.
#. Click :icon:`fa-arrow-right` :guilabel:`Configure Pickup Locations` to :doc:`configure the
   delivery method
   </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/new_delivery_method>`,
   if needed, and ensure the :guilabel:`Provider` field is set to :guilabel:`Pick up in store`.
#. In the :guilabel:`Stores` tab, click :guilabel:`Add a line` and select the warehouse(s) where
   customers can collect their orders.
#. Once the setup is complete, click the :guilabel:`Unpublished` button to change the status to
   :guilabel:`Published` and make the delivery method available to customers.

.. note::
   - When the product is in stock, a location selector is displayed on the :doc:`product page
     <configuration/products>` and the :guilabel:`Address` :ref:`checkout
     <ecommerce/checkout/delivery>` page. Customers cannot select a pick-up location if the product
     is out of stock at that location, unless the :ref:`Continue selling
     <ecommerce/products/stock-management>` option for out-of-stock products is enabled.
   - If the :ref:`Show Available Qty <ecommerce/products/stock-management>` option is enabled for a
     product, customers can view the stock quantity available for each warehouse in the location
     selector on the product page.
   - Each warehouse must have a **complete address** to ensure its location is accurately displayed
     to customers. Incomplete addresses prevent the warehouse from being shown.
   - In a multi-company environment, the company assigned to the warehouse must match the company
     assigned to the website on which the delivery method is used. If the companies differ, the
     pickup location cannot be selected.
   - The :guilabel:`Click & Collect` option is not available for services.
   - By default, the :ref:`Pay on Site <payment_providers/inperson_payments/pay_on_site>` payment
     method is :ref:`enabled and published <payment_providers/add_new>` when the :guilabel:`Click &
     Collect` feature is activated.

.. seealso::
   :ref:`ecommerce/products/stock-management`
