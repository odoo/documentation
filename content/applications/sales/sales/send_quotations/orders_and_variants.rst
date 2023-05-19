===============================================
Product variants on quotations and sales orders
===============================================

Product variants can be added to quotations and sales orders using the *product configurator*,
*variant grid entry*, or both.

Configuration
=============

To enable product variants on quotations and sales orders, go to :menuselection:`Sales app -->
Configuration --> Settings`, and under the :guilabel:`Product Catalog` heading, activate one (or
both) of the :guilabel:`Product Configurator` and :guilabel:`Variant Grid Entry` settings. Finally,
click :guilabel:`Save` to apply the settings.

.. image:: orders_and_variants/activating-entry-type-settings.png
   :align: center
   :alt: Activating entry type settings.

After saving the settings, it's time to configure the product form.

To do that, navigate to :menuselection:`Sales app --> Products --> Products`, and select the desired
product to configure (or click :guilabel:`Create` to open a blank product form, and create a new
one).

On the product form, click :guilabel:`Edit`, and select the :guilabel:`Variants` tab. Click
:guilabel:`Add a line` to add an attribute in the :guilabel:`Attribute` column, like `Color` or
`Size`, for example.

Once the attribute is chosen, select the desired values to apply to that attribute in the
:guilabel:`Values` column. To select the desired values, click into the blank field beneath the
:guilabel:`Values` column.

Then, select an option from the drop-down menu that appears. Or, create a new value by typing in the
new value, and click :guilabel:`Create` from the drop-down menu that appears beneath the new value.

When a product has *at least* two variants (one attribute with two values), the :guilabel:`Sales
Variant Selection` option appears at the bottom of the :guilabel:`Variants` tab. That is the
**only** way to make that option appear, so keep that in mind.

Under :guilabel:`Sales Variant Selection`, choose either :guilabel:`Product Configurator` or
:guilabel:`Order Grid Entry`. This selection determines which method is used to add the product to
quotations or sales orders.

- :guilabel:`Product Configurator`: choose attribute values to add the matching product variant to
  the order.
- :guilabel:`Order Grid Entry`: add several variants at once from the grid of attribute values.

Once a selection is made, click :guilabel:`Save` on the product form to apply the setting.

.. image:: orders_and_variants/sales-variant-selection.png
   :align: center
   :alt: Sales variant selection.

Product configurator
====================

The *product configurator* appears on a quotation or sales order when products that have **both**
variants configured are added, and the :guilabel:`Product Configurator` option is selected on the
product form.

The product configurator lets salespeople choose exactly which product variant to add to
the quotation or sales order, using a format similar to online shopping. Color options display any
HTML color codes set up in the :guilabel:`Color` attribute.

Features with an additional cost display the additional cost next to their name. Once the desired
product variant attributes are selected, click :guilabel:`Add` to add the product variant to the
quotation or sales order.

.. image:: orders_and_variants/configurator-price-extras.png
   :align: center
   :alt: Product Configurator and Price Extras.

By default, the product variant attributes are displayed on the quotation or sales order in the
:guilabel:`Description` column, but a dedicated :guilabel:`Product Variant` column can be added, via
the additional options menu (represented by the :guilabel:`⋮ (3 vertical dots)` icon, on the
far-right side of the columns, in the :guilabel:`Order Lines` tab).

.. image:: orders_and_variants/product-variant-column-option.png
   :align: center
   :alt: Product variant column option in order lines tab of quotation.

Just click the checkbox next to :guilabel:`Product Variant`, and that column appears in the
:guilabel:`Order Lines` tab.

Variant grid entries
====================

*Variant grid entries* appear on a quotation or sales order when products that have both variants
configured are added, and the :guilabel:`Order Grid Entry` option is selected on the product form.

The grid entry feature streamlines the process of creating large, varied quotations by letting
salespeople enter exact quantities of each product variant all at once.

The :guilabel:`Choose Product Variants` pop-up form that appears, displays a grid of every variant
available for that specific product.

From the :guilabel:`Choose Product Variants` pop-up form, choose the exact quantities of each
product variant for a quotation or sales order by typing in the number or using the arrows in each
column. The :guilabel:`Not Available` warning is displayed when a particular variant has been
deactivated in the database.

Once all the product variants and their quantities have been set in the pop-up form, click
:guilabel:`Confirm` to add them to the quotation or sales order.

.. image:: orders_and_variants/grid-entry-popup-amounts.png
   :align: center
   :alt: Variant Grid Entry pop-up form.

Each product variant appears as an individual line item on the quotation or sales order with the
chosen quantity from the :guilabel:`Choose Product Variants` pop-up form, because each of these
items has its own stock.

.. image:: orders_and_variants/grid-variants-line-items.png
   :align: center
   :alt: Line items for grid variants.
