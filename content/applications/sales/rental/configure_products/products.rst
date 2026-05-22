========================
Physical rental products
========================

The Odoo **Rental** app allows users to customize scheduling, pricing, and inventory for physical
rental products that require stock movement, otherwise known as *Goods*. Users can set up multiple
pickup and drop-off locations and track rental products by serial number.

.. _rental/products/default-settings:

Settings
========

The **Rental** app offers many app-integration features. Depending on the installed Odoo apps,
specific settings are available. To learn more about the default setting for rental products, refer
to the :ref:`Settings <rental/product_type/settings>` section of the *Rental product type* page. The
following configurations assume the **Rental** and **Inventory** apps are installed.

Navigate to :menuselection:`Rental app --> Configuration --> Settings`, configure the
:guilabel:`Default Delay Costs` in the *Rental* section for late fees. Optionally, configure the
:guilabel:`Default Padding Time` to make rentals unavailable for booking. Refer to the
:ref:`rental/products/rental-transfer-feature` section to learn what it does and how to configure
it.

In the **Rental** section, under the :guilabel:`Default Delay Costs` subsection, fill in the
:guilabel:`Apply after` field.

.. note::
   For more control, configure the costs of late returns in the :guilabel:`Per Hour` and
   :guilabel:`Per Day` fields on the product form. If the defaults apply to all products, leave the
   :guilabel:`Product` field blank.

Click **Save** to apply the changes.

.. image:: products/settings-rental-section.png
   :alt: Example of configured Default Delay Cost and Padding settings in the Rental app.

.. _rental/products/physical-product:

Create a new physical product
=============================

To set up a new physical rental product, go to the :menuselection:`Rental app --> Products`, then
click :guilabel:`New`. On the rental product form, fill out each tab accordingly:

General Information tab
-----------------------

In the new product window, the :guilabel:`Rental` checkbox is already ticked by default. Select the
:guilabel:`Product Type` as :guilabel:`Goods`.

Tick the :guilabel:`Track Inventory` checkbox and select :guilabel:`By Quantity` from the drop-down
menu. For the :guilabel:`Category` field, select :guilabel:`Goods` from the drop-down menu or create
a new category by typing in the name and clicking :guilabel:`Create`.

.. image:: products/new-product.png
   :alt: The new product view in the Rental app.

Attributes & Variants tab
-------------------------

.. important::
   The *Variant* feature in the **Inventory** app must be enabled for this tab to display.

Click :guilabel:`Add a line`, then select a default option from the :guilabel:`Attribute` drop-down
menu. To create a new one, enter the name, then click :guilabel:`Create and edit…` to
:ref:`configure the attribute and its values <products/variants/attributes>`.

.. _rental/products/rental-prices-tab:

Rental prices tab
-----------------

Click the :guilabel:`Rental prices` tab and in the :guilabel:`Pricing` section, click :guilabel:`Add
a price` to enter a new rental rate. Choose a *pricing period* (:dfn:`the unit of duration of the
rental`) in the :guilabel:`Period` column, or create a new pricing period by typing in the name and
clicking :guilabel:`Create and edit`.

.. note::
   Creating a new pricing period opens a pop-up *Create period* window. Fill in the
   :guilabel:`Name`, :guilabel:`Duration`, and :guilabel:`Unit`, and click :guilabel:`Save`. The new
   pricing period automatically applies.

   .. image:: products/new-rental-period.png
      :alt: Sample of a New Period view in the Rental app.

Next, enter the :guilabel:`Price` for that specific :guilabel:`Period`. To apply the configured
rental rate to an existing pricelist, click in the :guilabel:`Pricelist` column and select the
desired list from the drop-down menu.

In the :guilabel:`Reservations` section, fill in the :guilabel:`Hourly Fine`, :guilabel:`Daily
Fine`, and the :guilabel:`Reserve product` time. These values are automatically populated from the
:guilabel:`Default Delay Costs` section, provided they have been configured in the
:menuselection:`Rental app --> Configuration --> Settings`.

Click the :icon:`fa-cloud-upload` :guilabel:`(Save manually)` icon near the top to save.

.. example::
   A bike rental business rents tandem bikes for two hours at the local park. The hourly rental rate
   for their tandem bikes is $20, but since tandem bikes are popular, they want to set a new price
   of $35. To ensure the business gets their bikes returned on time, they set the late return fee as
   $20 per hour and $160 per day ($20 x 8 hrs).

   Create a new pricing period by navigating to :menuselection:`Rental app --> Configuration -->
   Rental periods`. Click :guilabel:`New`, then configure the period for `2` hours.

   Navigate to the tandem bike product and in the :guilabel:`Rental prices` tab add the `2` hour
   period set at `$35`. Manually save to apply changes.

   .. image:: products/rental-prices-tab-with-rental-period.png
       :alt: Sample of a rental product with the custom rental period applied.

.. _rental/products/configure-product-tracking:

Configure a physical rental product for product tracking
========================================================

.. important::
   To configure a physical rental product for product tracking, the **Inventory** app must be
   installed, and :doc:`Lots & Serial Numbers must be enabled
   <../../../inventory_and_mrp/inventory/product_management/product_tracking>`.

Go to the :menuselection:`Rental app --> Products`, then click :guilabel:`New`. In the new product
window, the :guilabel:`Rental` checkbox is already ticked by default.

Select the :guilabel:`Product Type` as :guilabel:`Goods`. Tick the :guilabel:`Track Inventory`
checkbox and select either :guilabel:`By Lots` or :guilabel:`By Unique Serial Number` from the
drop-down menu.

For the :guilabel:`Category` field, select :guilabel:`Goods` from the drop-down menu or create a new
category by typing in the name and clicking :guilabel:`Create`. Configure rental rates on the
:ref:`rental/products/rental-prices-tab`. Click the :icon:`fa-cloud-upload` :guilabel:`(Save
manually)` icon near the top to save.

.. _rental/products/rental-transfer-feature:

Rental Transfers feature
========================

The *Rental Transfers* feature automatically creates a delivery receipt when the rental product is
picked up and a return receipt when it is returned to stock. Documenting stock movement creates a
clean paper trail and has a variety of uses:

- Tracking high-value products.
- Tracking stock levels across multiple stores or warehouse locations.
- Tracking products between different store locations that allow pick up and returns.

To enable the :guilabel:`Rental Transfers` feature, navigate to the :menuselection:`Rental app -->
Configuration --> Settings` and in the *Rental* section, tick the :guilabel:`Rental Transfers`
checkbox.

.. image:: products/rental-transfers-checkbox.png
   :alt: Sample of the Rental settings with the Rental Transfers enabled.

.. note::
   The **Inventory** app automatically creates an internal default location once the *Rental
   Transfers* feature is enabled. Odoo uses the new default location, :guilabel:`Customer/Rental`,
   to track products during the rental period (moving them from :guilabel:`Stock` to
   :guilabel:`Customer/Rental` upon rental, and back upon return). Do not modify to avoid corrupting
   inventory tracking.

.. _rental/products/multi-location:

Multi-location management and transfers
=======================================

.. important::
   The **Inventory** app must be installed to set up this configuration. The **Inventory** app
   automatically creates an internal default location once the *Rental Transfers* feature is
   enabled. Odoo uses the new default location, :guilabel:`Customer/Rental`, to track products
   during the rental period (moving them from :guilabel:`Stock` to :guilabel:`Customer/Rental` upon
   rental, and back upon return). Do **not** modify to avoid corrupting inventory tracking.

Tracking the location of high-value physical products between locations is essential. The **Rental**
app helps with the *Rental Transfers* feature. Activating rental transfers means the system treats
rental movements similarly to sales, requiring a receipt and a delivery order every time a physical
product is rented or returned.

For multi-location management and rental item transfer tracking, navigate to the
:menuselection:`Rental app --> Configuration --> Settings` and in the :guilabel:`Rental` section,
tick the :guilabel:`Rental Transfers` checkbox.

Next, go to the :menuselection:`Inventory app --> Configuration --> Settings` and in the
:guilabel:`Warehouse` section, tick the :guilabel:`Storage Locations` checkbox. Click
:guilabel:`Save` to apply the changes.

To configure new locations, navigate to :menuselection:`Inventory app --> Configuration -->
Locations`. Click :guilabel:`New` to configure a new internal location.

On the new location page, enter the :guilabel:`Location Name` and ensure the :guilabel:`Parent
Location` field is set to :guilabel:`WH`. Click the :icon:`fa-cloud-upload` :guilabel:`Save
manually` icon near the top to save.

.. example::
   A bike rental business has two store locations within the same city. Both locations allow for
   pick-up and drop-off of their bikes. The company wants to track its bikes accurately at each
   location.

   Ensure the **Rental** and **Inventory** apps are configured by enabling :guilabel:`Rental
   Transfers` in the **Rental app** and :guilabel:`Storage Locations` in the **Inventory** app.

   Next, go to the :menuselection:`Inventory app > Configuration > Locations`. Create a new location
   for each storefront.

   .. image:: products/configured-locations.png
      :alt: Sample of internal inventory locations that represent different rental store locations.

.. _rental/products/pickup-products:

Pickup products
===============

When a customer picks up products, navigate to the appropriate rental order, click
:guilabel:`Pickup`. The **Rental** app displays a warehouse delivery form listing the reserved
rental products. Click :guilabel:`Validate` to move the order to the :guilabel:`Done` stage.

.. image:: products/pickup-page.png
   :alt: Sample of a Pickup page in the Rental app.

Doing so places a :guilabel:`Pickedup` status banner on the rental order.

.. _rental/return-products:

Return products
===============

When a customer returns products, navigate to the desired rental order and click :guilabel:`Return`.
The **Rental** app displays a warehouse receipt form listing the checked-out rental products.

Enter the same number of products the customer returned in the :guilabel:`Quantity` column. If any
of the products have serial numbers, enter them into the :guilabel:`Serial Numbers` column.

.. image:: products/return-page.png
   :alt: Sample of the Return page in the Rental app.

Click :guilabel:`Validate` to move the order to the :guilabel:`Done` stage. A :guilabel:`Returned`
status banner appears on the rental order.

.. _rental/products/print-receipts:

Print pickup and return receipts
================================

Pickup and return receipts can be printed for customers when they pick up and return rental
products.

To print pickup and/or return receipts, navigate to the appropriate rental order, click the
:icon:`fa-cog` :guilabel:`(Actions)` icon to reveal a drop-down menu.

.. image:: products/print-pickup-return-receipt.png
   :alt: The pickup and return receipt print option in the Odoo Rental application.

From this drop-down menu, hover over the :guilabel:`Print` option to reveal a sub-menu. Then select
:guilabel:`Pickup and Return Receipt`.

Odoo generates and downloads a PDF detailing all information about the current status of the rented
items.

.. seealso::
   - :doc:`../../../inventory_and_mrp/inventory`
   - `Tutorial: Your First Rental Product <https://youtu.be/CE-SahTUC9A?si=kWfYEOTd2nT_ASp9>`_

