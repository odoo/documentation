================
Delivery methods
================

When activated in Odoo, the *Delivery Methods* setting adds the option of calculating the cost of
shipping on sales orders and e-commerce shopping carts.

When integrated with a :ref:`third-party carrier <inventory/shipping/third_party>`, shipping prices
are calculated based on the carrier's pricing and packaging information.

.. seealso::
   - :ref:`Third-party shipping carrier setup <inventory/shipping/third_party>`
   - `Odoo Tutorials: Delivery Prices
     <https://www.odoo.com/slides/slide/delivery-prices-613?fullscreen=1>`_

Configuration
=============

To calculate shipping on sales orders and e-commerce, the *Delivery Costs* module must be installed.
To do so, navigate to the :menuselection:`Apps` application from the main Odoo dashboard.

Then, remove the :guilabel:`Apps` filter, and type in `Delivery Costs` in the :guilabel:`Search...`
bar. After finding the :guilabel:`Delivery Costs` module, click :guilabel:`Activate` to install it.

.. image:: delivery_method/install-module.png
   :align: center
   :alt: Install the *Delivery Costs* module.

Add shipping method
===================

To configure delivery methods, go to :menuselection:`Inventory app --> Configuration --> Shipping
Methods`.

.. note::
   If the :guilabel:`Shipping Methods` option is not available from the :guilabel:`Configuration`
   drop-down menu, verify whether the feature is enabled by following these steps:

   #. Go to :menuselection:`Inventory app --> Configuration --> Settings`.
   #. Scroll to the :guilabel:`Shipping` section and enable the :guilabel:`Delivery Methods` feature
      by checking the corresponding checkbox.

   .. image:: delivery_method/enable-delivery.png
      :align: center
      :alt: Enable the *Delivery Methods* feature by checking the box in Configuration > Settings.

On the :guilabel:`Shipping Methods` page, add a method by clicking :guilabel:`New`. Doing so opens
a form to provide details about the shipping provider, including:

- :guilabel:`Shipping Method` (*Required field*): the name of the delivery method (e.g. `flat-rate
  shipping`, `same day delivery`, etc.).
- :guilabel:`Provider` (*Required field*): choose the delivery service, like Fedex, if using a
  :ref:`third-party carrier <inventory/shipping/third_party>`. Ensure the integration with the
  shipping carrier is properly installed and select the provider from the drop-down menu.

  For more details on configuring custom shipping methods, such as :ref:`fixed price
  <inventory/shipping/fixed>`, :ref:`based on rules <inventory/shipping/rules>`, or :ref:`pickup in
  store <inventory/shipping/pickup>` options, refer to their respective sections below.
- :guilabel:`Website`: configure shipping methods for an e-commerce page. Select the applicable
  website from the drop-down menu, or leave it blank to apply the method to all web pages.
- :guilabel:`Company`: if the shipping method should apply to a specific company, select it from the
  drop-down menu. Leave the field blank to apply the method to all companies.
- :guilabel:`Delivery Product` (*Required field*): the product listed on the :ref:`sales order line
  <inventory/shipping/sales-order>` as the delivery charge.
- :guilabel:`Free if order amount is above`: checking this box enables free shipping if the customer
  spends above the specified amount.

For examples on how to configure specific shipping methods, refer to the sections below.

.. _inventory/shipping/fixed:

Fixed price
-----------

To configure a shipping price that is the same for all orders, go to :menuselection:`Inventory app
--> Configuration --> Shipping Methods`. Then, click :guilabel:`New`, and on the shipping method
form, set the :guilabel:`Provider` to the :guilabel:`Fixed Price` option. Selecting this option
makes the :guilabel:`Fixed Price` field become available, which is where the fixed rate shipping
amount is defined.

To enable free shipping if the amount of the order exceeds a specified amount, check the box
:guilabel:`Free if order amount is above` and fill in the amount.

.. example::
   To set up `$20` flat-rate shipping that becomes free if the customer spends over `$100`, fill in
   the following fields:

   - :guilabel:`Shipping Method`: `Flat-rate shipping`
   - :guilabel:`Provider`: :guilabel:`Fixed Price`
   - :guilabel:`Fixed Price`: `$20.00`
   - :guilabel:`Free if order amount is above`: `$100.00`
   - :guilabel:`Delivery Product`: `[SHIP] Flat`

   .. image:: delivery_method/new-shipping-method.png
      :align: center
      :alt: Example of filling out a shipping method.

.. _inventory/shipping/rules:

Based on rules
--------------

To calculate the price of shipping based on pricing rules, set the :guilabel:`Provider` field to the
:guilabel:`Based on Rules` option. Optionally, adjust :guilabel:`Margin on Rate` and
:guilabel:`Additional margin` to include additional shipping costs.

Create pricing rules
~~~~~~~~~~~~~~~~~~~~

Navigate to the :guilabel:`Pricing` tab and click :guilabel:`Add a line`. Doing so opens the
:guilabel:`Create Pricing Rules` window, where the :guilabel:`Condition` related to the product
weight, volume, price, or quantity is compared to a defined amount to calculate the
:guilabel:`Delivery Cost`.

Once finished, click either :guilabel:`Save & New` to add another rule, or :guilabel:`Save & Close`.

.. example::
   To charge customers $20 in shipping for orders with five or fewer products, set the
   :guilabel:`Condition` to `Quantity <= 5.00`, and the :guilabel:`Delivery Cost` to `$20`.

   .. image:: delivery_method/pricing-rule.png
      :align: center
      :alt: Display window to add a pricing rule. Set a condition and delivery cost.

To restrict shipping to specific destinations on the eCommerce website, in the shipping method form,
navigate to the :guilabel:`Destination Availability` tab and define the :guilabel:`Countries`,
:guilabel:`States`, and :guilabel:`Zip Prefixes`. Leave these fields empty if all locations apply.

Calculate delivery cost
~~~~~~~~~~~~~~~~~~~~~~~

Shipping cost is the :guilabel:`Delivery cost` specified in the rule that satisfies the
:guilabel:`Condition`, plus any extra charges from the :guilabel:`Margin on rate` and
:guilabel:`Additional margin`.

.. math::
   Total = Rule's~Delivery~Cost + (Margin~on~rate \times Rule's~Delivery~Cost) + Additional~margin

.. example::
   With the two following rules set up:

   #. If the order contains five or fewer products, shipping is $20
   #. If the order contains more than five products, shipping is $50.

   :guilabel:`Margin on Rate` is `10%` and :guilabel:`Additional margin` is `$9.00`.

   .. image:: delivery_method/delivery-cost-example.png
      :align: center
      :alt: Show example of "Based on rules" shipping method with margins configured.

   When the first rule is applied, the delivery cost is $31 (20 + (0.1 * 20) + 9). When the second
   rule is applied, the delivery cost is $64 (50 + (0.1 * 50) + 9).

.. _inventory/shipping/pickup:

Pickup in store
---------------

To configure in-store pickup, select :guilabel:`Pickup in store` in the :guilabel:`Provider` field
and specify the pickup location in :guilabel:`Warehouse`.

To invoice the customer for the shipping cost to the pickup location, choose the :guilabel:`Get Rate
and Create Shipment` option in the :guilabel:`Integration Level` field. Then, pick either the
:guilabel:`Estimated cost` or :guilabel:`Real cost` radio options in the :guilabel:`Invoicing
Policy` field to decide whether the added shipping charge on the sales order is the precise cost
from the shipping carrier.

.. seealso::
   :ref:`Invoice cost of shipping <inventory/shipping/invoice>`

.. _inventory/shipping/sales-order:

Add shipping
============

Shipping methods can be added to sales orders in the form of delivery products, which appear as
individual line items. First, navigate to the desired sales order by going to :menuselection:`Sales
app --> Orders --> Orders`.

On the sales order, click the :guilabel:`Add shipping` button, which opens the :guilabel:`Add a
shipping method` pop-up window. Then, choose a :guilabel:`Shipping Method` from the list.

The :guilabel:`Total Order Weight` is pre-filled based on product weights (that are defined in the
:guilabel:`Inventory` tab for each product form). Edit the field to specify the exact weight, and
then click :guilabel:`Add` to add the shipping method.

.. note::
   The amount defined in :guilabel:`Total Order Weight` overwrites the total product weights defined
   on the product form.

The shipping cost is added to the *sales order line* as the :guilabel:`Delivery Product` detailed on
the shipping method form.

.. example::
   `Furniture Delivery`, a delivery product with a fixed rate of `$200`, is added to sales order
   `S00088`.

     .. image:: delivery_method/delivery-product.png
        :align: center
        :alt: Show delivery order on the sales order line.

Delivery order
--------------

The shipping method added to the sales order is linked to the shipping carrier details on the
delivery order. To add or change the delivery method on the delivery itself, go to the
:guilabel:`Additional Info` tab and modify the :guilabel:`Carrier` field.

.. image:: delivery_method/delivery-order.png
   :align: center
   :alt: Shipping carrier information on the delivery form.
