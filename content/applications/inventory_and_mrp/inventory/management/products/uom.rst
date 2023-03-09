==============================
Use different units of measure
==============================

.. _inventory/management/products/units_of_measure:

In some cases, handling products in different units of measure is necessary. For example, a
business can buy products from a country that uses the metric system, and then sell those products
in a country that uses the imperial system, so the business needs to convert the units. Another
case for unit conversion is when a business buys products in a big pack from a supplier and then
sells those products in individual units.

Odoo can be set up to use different units of measure for one product.

Configuration
=============

To use different units of measure in Odoo, first go to :menuselection:`Inventory --> Configuration
--> Settings --> Products` and activate the :guilabel:`Units of Measure` setting. Then, click
:guilabel:`Save`.

.. image:: uom/uom-enable-setting.png
   :align: center
   :alt: Enable Units of Measure in the Inventory settings.

Units of measure categories
===========================

After enabling the units of measure setting, view the default units of measure categories in
:menuselection:`Inventory --> Configuration --> Units of Measures --> UoM Categories`. The
category is important for unit conversion, Odoo can only convert a product's units from one unit to
another only if both units belong to the same category.

.. image:: uom/uom-categories.png
   :align: center
   :alt: Set units of measure categories.

Each units of measure category has a reference unit. The reference unit is highlighted in blue in
the :guilabel:`Uom` column of the :guilabel:`Units of Measure Categories` page. Odoo uses the
reference unit as a base for any new units.

To create a new unit, first select the correct category. For example, to sell a product in a box of
six units, click on the :guilabel:`Unit` category line. Next, click :guilabel:`Edit`. After that,
click :guilabel:`Add a line`. Then, in the :guilabel:`Unit of Measure` field, title the new unit
`Box of 6`. In the :guilabel:`Type` field, select :guilabel:`Bigger than the reference Unit of
Measure`. In the :guilabel:`Ratio` field, enter `6.00000` since a box of six is six times bigger
than the reference unit (`1.00000`). Finally, click :guilabel:`Save`.

Click on the :guilabel:`Unit` category.

Click :guilabel:`Add a line`. As an example, we will create a Box of 6 units that we will use for
the Egg product. The box of 6 is 6 times bigger than the reference unit of measure for the category
which is “Units” here.

.. image:: uom/convert-products-by-unit.png
   :align: center
   :alt: Convert products from one unit to another as long as they belong to the same category.

Specify a product's units of measure
====================================

To set units of measure on a product, first go to :menuselection:`Inventory --> Products -->
Products` and click on a product to open its settings. Then, click on :guilabel:`Edit`.

In the :guilabel:`General Information` tab, edit the :guilabel:`Unit of Measure` field to specify
the unit of measure that the product is sold in. The specified unit will also be the unit used to
keep track of the product's inventory and internal transfers. Edit the :guilabel:`Purchase UoM`
field to specify the unit of measure that the product is purchased in.

Unit conversion
===============

Buy products in the Purchase UoM
--------------------------------

When creating a new request for quotation (RFQ) in the Purchase app, Odoo automatically uses the
product's specified purchase unit of measure. However, if needed, the :guilabel:`UoM` can be
manually edited on the RFQ.

After the RFQ is confirmed into a purchase order (PO), click on the :guilabel:`Receipt` smart
button at the top right corner of the PO. Odoo automatically converts the purchase unit of measure
into the product's sales/inventory unit of measure, so the :guilabel:`Demand` column of the
delivery receipt shows the converted quantity.

For example, if the product's purchase UoM is `Box of 6` and its sales/inventory unit of measure is
`Units`, the PO shows the quantity in boxes of six, and the delivery receipt shows the quantity in
units.

Replenishment
-------------

A request for quotation for a product can also be generated directly from the product form using
the :guilabel:`Replenish` button. After clicking :guilabel:`Replenish`, a replenish assistant box
pops up. The purchase unit of measure can be manually edited here if needed. Then, click
:guilabel:`Confirm` to create the RFQ.

Next, click the :guilabel:`Units Forecasted` smart button on the product form and scroll down to
:menuselection:`Forecasted Inventory --> Requests for quotation`. Click on the RFQ reference number
to open the draft RFQ. The purchase UoM can also be edited here if needed.

Sell in a different UoM
-----------------------

When creating a new quotation in the Sales app, Odoo automatically uses the product's specified
unit of measure. However, if needed, the :guilabel:`UoM` can be manually edited on the quotation.

After the quotation is sent to the customer and confirmed into a sales order (SO), click on the
:guilabel:`Delivery` smart button at the top right corner of the SO. Odoo automatically converts
the unit of measure into the product's inventory unit of measure, so the :guilabel:`Demand` column
of the delivery shows the converted quantity.

For example, if the product's UoM on the SO was changed to `Box of 6`, but its inventory unit of
measure is `Units`, the SO shows the quantity in boxes of six, and the delivery shows the quantity
in units.
