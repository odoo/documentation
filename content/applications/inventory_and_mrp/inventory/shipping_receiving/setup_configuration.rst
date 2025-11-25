:show-content:

================
Delivery methods
================

In Odoo, *delivery methods* make it possible to calculate shipping costs directly on sales orders
and e-commerce carts, providing customers and sales teams with accurate shipping fee information.
This transparency helps close sales by showing customers the exact cost for each shipping carrier or
delivery timeframe.

When activated in Odoo, the *Delivery Methods* setting adds the option of calculating the cost of
shipping on sales orders and e-commerce shopping carts.

When integrated with a :ref:`third-party carrier <inventory/shipping/third_party>`, shipping prices
are calculated based on the carrier's pricing information.

.. seealso::
   - :ref:`Third-party shipping carrier setup <inventory/shipping/third_party>`
   - `Odoo Tutorials: Delivery Prices
     <https://www.odoo.com/slides/slide/delivery-prices-613?fullscreen=1>`_

Configuration
=============

To calculate shipping on sales orders and e-commerce, the **Delivery Costs** module must be
installed. To do so, navigate to the :menuselection:`Apps` application from the main Odoo dashboard.

Then, remove the :guilabel:`Apps` filter, and type in `Delivery Costs` in the search bar. After
finding the :guilabel:`Delivery Costs` module, click :guilabel:`Install` to install it.

.. image:: setup_configuration/install-module.png
   :alt: Install the Delivery Costs module.

.. _inventory/shipping/sales-order:

Add shipping
============

Shipping methods are added to sales orders in the form of delivery products, which appear as
individual line items. First, navigate to the desired sales order by going to :menuselection:`Sales
app --> Orders --> Orders`.

Open the desired sales order, then click the :guilabel:`Add shipping` button. The :guilabel:`Add a
shipping method` pop-up window opens. Then, using the drop-down menu, select an available shipping
method.

The :guilabel:`Total Order Weight` is pre-filled based on product weights (that are defined in the
:ref:`Inventory <inventory/product_management/manufacture>` tab for each product form). Edit the
field to specify the exact weight, and then click :guilabel:`Add` to add the shipping method.

.. important::
   The amount defined in :guilabel:`Total Order Weight` overwrites the total product weights defined
   on the product form.

.. note::
   Some connected shipping methods require obtaining rates from the carrier. In this situation,
   click the :icon:`oi-arrow-right` :guilabel:`Get rate` button, and the shipping costs are
   automatically updated from the carrier. These rates cannot be modified.

The shipping cost is added as a line item in the :guilabel:`Order Lines` tab as the
:guilabel:`Delivery Product` detailed on the shipping method form.

.. example::
   A customer purchased a left-sided desk with storage and requested the item be delivered by hand.
   This delivery method is defined as `Furniture Delivery (Manual)` and has a cost of `$200`. The
   sales order contains two line items: one for the desk, and another for the delivery method.

     .. image:: setup_configuration/delivery-product.png
        :alt: Show delivery order on the sales order line.

Delivery order
--------------

The shipping method added to the sales order is linked to the shipping carrier details on the
delivery order. After confirming the order, a :icon:`fa-truck` :guilabel:`Delivery` smart button
appears at the top of the page. Click the :icon:`fa-truck` :guilabel:`Delivery` smart button to open
the warehouse delivery form. To add or change the delivery method on the delivery itself, open the
:guilabel:`Additional Info` tab and modify the :guilabel:`Carrier` field.

.. image:: setup_configuration/delivery-order.png
   :alt: Shipping carrier information on the delivery form.

.. toctree::
   :titlesonly:

   setup_configuration/new_delivery_method
   setup_configuration/third_party_shipper
   setup_configuration/labels
   setup_configuration/bpost
   setup_configuration/dhl_credentials
   setup_configuration/envia_shipping
   setup_configuration/fedex
   setup_configuration/sendcloud_shipping
   setup_configuration/starshipit_shipping
   setup_configuration/ups_credentials
   setup_configuration/zebra
   setup_configuration/cancel
   setup_configuration/invoicing
   setup_configuration/label_type
   setup_configuration/multipack
   setup_configuration/print_on_validation
   setup_configuration/dispatch
