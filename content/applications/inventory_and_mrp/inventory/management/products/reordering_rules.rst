================
Reordering rules
================

.. _inventory/management/reordering_rules:

Reordering rules are used to keep forecasted stock levels above a certain threshold without
exceeding a specified upper limit. This is accomplished by specifying a minimum quantity that stock
should not fall below and a maximum quantity that stock should not exceed.

Reordering rules can be configured for each product based on the route used to replenish it. If a
product uses the *Buy* route, then a Request for Quotation (RFQ) is created when the reordering rule
is triggered. If a product uses the *Manufacture* route, then a Manufacturing Order (MO) is created
instead. This is the case regardless of the selected replenishment route.

Configure products for reordering rules
=======================================

In order to use reordering rules for a product, it must first be correctly configured. Begin by
navigating to :guilabel:`Inventory --> Products --> Products`, then select an existing product, or
create a new one by clicking :guilabel:`Create`.

First, on the :guilabel:`General Information` tab, make sure that the :guilabel:`Product Type` is
set to :guilabel:`Storable Product`. This is necessary because Odoo only tracks stock quantities for
storable products, and this number is used to trigger reordering rules.

.. image:: reordering_rules/product-type.png
   :align: center
   :alt: Set the Product Type as Storable.

Next, click on the :guilabel:`Inventory` tab and select one or more routes from the
:guilabel:`Routes` section. Doing so tells Odoo which route to use to replenish the product.

.. image:: reordering_rules/select-routes.png
   :align: center
   :alt: Select one or more routes on the Inventory tab.

If the product is reordered using the :guilabel:`Buy` route, confirm that the :guilabel:`Can be
Purchased` checkbox is enabled under the product name. This makes the :guilabel:`Purchase` tab
appear. Click on the :guilabel:`Purchase` tab, and specify at least one vendor, and the price that
they sell the product for, so that Odoo knows which company the product should be purchased from.

.. image:: reordering_rules/specify-vendor.png
   :align: center
   :alt: Specify a vendor and price on the Purchase tab.

If the product is replenished using the :guilabel:`Manufacture` route, it needs to have at least one
Bill of Materials (BoM) associated with it. This is necessary because Odoo only creates
manufacturing orders for products with a :abbr:`BoM (Bill of Materials)`.

If a :abbr:`BoM (Bill of Materials)` does not already exist for the product, select the
:guilabel:`Bill of Materials` smart button at the top of the product form, then click
:guilabel:`Create` to configure a new :abbr:`BoM (Bill of Materials)`.

.. image:: reordering_rules/bom-smart-button.png
   :align: center
   :alt: The Bill of Materials smart button on a product form.

Create new reordering rules
===========================

To create a new reordering rule, navigate to :menuselection:`Inventory --> Configuration -->
Reordering Rules`, then click :guilabel:`Create`, and fill out the new line as follows:

- :guilabel:`Product`: The product that is replenished by the rule.
- :guilabel:`Location`: The location where the product is stored.
- :guilabel:`Min Quantity`: The minimum quantity that can be forecasted without the rule being
  triggered. When forecasted stock falls below this number, a replenishment order for the product is
  created.
- :guilabel:`Max Quantity`: The maximum quantity that stock is replenished up to.
- :guilabel:`Multiple Quantity`: Specify if the product should be replenished in batches of a
  certain quantity (e.g., a product could be replenished in batches of 20).
- :guilabel:`UoM`: The unit of measure used for reordering the product. This value can simply be
  `Units` or a specific unit of measurement for weight, length, etc.

.. image:: reordering_rules/reordering-rule-form.png
   :align: center
   :alt: The form for creating a new reordering rule.

.. tip::
   Reordering rules can also be created from each product form. To do so, navigate to
   :menuselection:`Inventory --> Products --> Products`, then select a product. Click on
   :menuselection:`Reordering Rules --> Create`, then fill out the new line as detailed above.

Once a reordering rule has been created for a product, if its forecasted quantity is below the
rule's minimum quantity when the scheduler runs, a replenishment order for the product is
automatically generated. By default, the scheduler runs once each day.

.. tip::
   To manually trigger a reordering rule before the scheduler runs, select :menuselection:`Inventory
   --> Operations --> Run Scheduler`. Then, select the green :guilabel:`Run Scheduler` button on the
   pop-up that appears. Be aware that this also triggers any other scheduled actions.

If the :guilabel:`Buy` route is selected, then an :abbr:`RFQ (Request for Quotation)` is generated.
To view and manage :abbr:`RFQs (Requests for Quotation)`, navigate to :menuselection:`Purchase -->
Orders --> Requests for Quotation`.

If the :guilabel:`Manufacture` route is selected, then an :abbr:`MO (Manufacturing Order)` is
generated. To view and manage :abbr:`MOs (Manufacturing Orders)`, navigate to
:menuselection:`Manufacturing --> Operations --> Manufacturing Orders`.

Set a preferred route for reordering
====================================

Odoo allows for multiple routes to be selected under the :guilabel:`Inventory` tab on each product
form. For instance, it is possible to select both :guilabel:`Buy` and :guilabel:`Manufacture`, thus
enabling the functionality of both routes.

Odoo also enables users to set a preferred route for a product's reordering rule. This is the route
that the rule defaults to if multiple are selected. To select a preferred route, begin by navigating
to :menuselection:`Inventory --> Configuration --> Reordering Rules`.

By default, the :guilabel:`Preferred Route` column is hidden on the :guilabel:`Reordering Rules`
page. Enable it by selecting the :guilabel:`⋮ (three-dot)` option button on the right side of the
page and checking the :guilabel:`Preferred Route` checkbox. Doing so reveals the
:guilabel:`Preferred Route` column.

Click inside of the column on the row of a reordering rule and a drop-down menu shows all available
routes for that rule. Select one to set it as the preferred route.

.. image:: reordering_rules/select-preferred-route.png
   :align: center
   :alt: Select a preferred route from the drop-down.

.. important::
   If multiple routes are enabled for a product but no preferred route is set for its reordering
   rule, the product is reordered using the selected route that is listed first on the
   :guilabel:`Inventory` tab of the product form.
