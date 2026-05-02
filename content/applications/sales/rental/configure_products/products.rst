========================
Physical rental products
========================

The Odoo **Rental** app allows users to customize scheduling, pricing, and inventory for physical
rental products. Users can set up multiple pickup and drop-off locations and track rental products
by serial number.

Settings
========

To configure default settings on rental products, navigate to :menuselection:`Rental app -->
Configuration --> Settings`.

.. image:: products/rental-settings.png
   :alt: The Rental setting view in the Rental app.

In the **Rental** section, tick the :guilabel:`Rental Transfers` checkbox.

Click **Save** to apply the change.

.. important::
   If the product has multiple rental rates, the **Sales** app is required, and
   :guilabel:`Pricelists` must be enabled.

View rental products
====================

To view all products that can be rented in the database, navigate to :menuselection:`Rentals app -->
Products`. By default, the :guilabel:`Rental` filter appears in the search bar, and the view is
Kanban.

Each product Kanban card displays the product name, rental rate, number of units on hand, and
product image (if applicable).

.. _rental/physical-products:

Create a new physical product
=============================

To set up a new physical rental product, go to the :menuselection:`Rental app --> Products`, then
click :guilabel:`New`. In the new product window, the :guilabel:`Sales` checkbox is already ticked
by default.

.. image:: products/new-product.png
   :alt: The new product view in the Rental app.

Select the :guilabel:`Product Type` as :guilabel:`Goods` and tick the :guilabel:`Track Inventory`
checkbox. Next to the :guilabel:`Track Inventory` checkbox, select the :guilabel:`By Unique Serial
Number` from the drop-down menu.

For the :guilabel:`Category` field, select :guilabel:`Goods` from the drop-down menu or create a new
category by typing in the name and clicking :guilabel:`Create`.

Set a base rental period and price
----------------------------------

Set up a base rental rate by entering the lowest rental price in the :guilabel:`Sales Price` field.
Next, click the :guilabel:`Sales` tab, then in the *Rental* section select a unit of time from the
:guilabel:`Periodicity` dropdown menu.

Then enter the :guilabel:`Padding Time` to make the product unavailable for pickup for the
configured duration.

.. important::
   To set a pricelist for additional rental rates, the **Sales** app must be installed, and
   *Pricelists* must be enabled. Otherwise, the :guilabel:`Prices` tab is not available.

.. image:: products/rental-periodicity.png
   :alt: Sample of the Rental product's Periodicity and Padding time in the Rental app.

Set additional rental periods and pricing
-----------------------------------------

There are two ways to configure additional rental rates in the **Rental** app: :ref:`Pricelists
<rental/products/pricelist>` and the :ref:`Prices tab <rental/products/price-tab>`.

.. _rental/products/pricelist:

Using the Pricelists method
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating a new :guilabel:`Pricelist` allows for better customization when applying rental rates to
specific time periods, products, or customers by using :guilabel:`Pricelist Rules`. To set up
additional rental rates, go to :menuselection:`Rental app --> Products --> Pricelists` and click
:guilabel:`New` to :ref:`create a new pricelist <sales/products/create-edit-pricelists>`. A *Create
Pricelist Rules* window displays.

.. tip::
   It is recommended to create a new :guilabel:`Pricelist` first, then select the customized
   :guilabel:`Pricelist` in the :guilabel:`Prices` tab instead of using the :guilabel:`Default`
   pricelist. Keeping the :guilabel:`Default` pricelist blank ensures there is a clean pricelist for
   the base rental rate.

.. image:: products/create-pricelist-rules-window.png
   :alt: Sample of the Create Pricelist Rules window in the Odoo Rental application.

.. _rental/products/price-tab:

Using the Prices tab method
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prices can also be configured directly on the product using the :guilabel:`Prices` tab. Navigate to
:menuselection:`Products --> Products`, then click the desired product.

Click the :guilabel:`Prices` tab and click :guilabel:`Add a price`. Select the desired
:guilabel:`Pricelist`, then enter the minimum time required for the price change to trigger in the
:guilabel:`Min. Quantity` column. The :guilabel:`Min. Quantity` column is based on the
:guilabel:`Periodicity` field in the :guilabel:`Sales` tab.

Lastly, enter the :guilabel:`Price` rate. Click the :icon:`fa-cloud-upload` :guilabel:`(Save
manually)` icon near the top to save.

.. example::
   A bike rental business rents out its bikes on an hourly and daily basis. The hourly rental rate
   for their tandem bikes is $20, but the daily rate is $128. All bike reservations require at least
   a 30-minute notice.

   Enter the :guilabel:`Sales Price`, then click the :guilabel:`Sales` tab to configure the
   :guilabel:`Periodicity` and :guilabel:`Padding Time`.

   .. image:: products/rental-sales-tab-rental-section.png
      :alt: Add alt text.

   Using the Pricelist method, navigate to :menuselection:`Rental app --> Products --> Pricelists`
   and click :guilabel:`New`. Configure :guilabel:`Pricelist Rules` for the daily rate.

   .. image:: products/example-rental-pricelist-rules.png
       :alt: Sample of a rental product with the custom rental pricelist applied.

   Using the :guilabel:`Prices` tab method, navigate to :menuselection:`Rental app --> Products -->
   Products` and click the Bike product.  Click the :guilabel:`Prices` tab, then add a new price for
   the daily rate.

   .. image:: products/example-rental-prices-tab.png
      :alt: Sample of a rental product's Price tab.

.. _rental/configure_products/multi-location:

Multi-location management and transfers
=======================================

The **Rental** app makes it easy to track the location of high-value physical products with the
:guilabel:`Rental Transfers` feature.

When the :guilabel:`Rental Transfers` feature is enabled, the system treats rental movements in the
same way as sales. The **Rental** app generates a receipt and a delivery order every time a physical
product is rented or returned.

For multi-location management and rental item transfer tracking, navigate to :menuselection:`Rental
app --> Configuration --> Settings` and in the :guilabel:`Rental` section, tick the
:guilabel:`Rental Transfers` checkbox.

.. image:: products/rental-settings.png
   :alt: Sample of the Rental settings with the Rental Transfers enabled.

The **Inventory** app automatically creates an internal default location when the *Rental Transfers*
feature is enabled. Odoo uses the new default location, :guilabel:`Customer/Rental`, to track
products during the rental period (moving them from :guilabel:`Stock` to :guilabel:`Customer/Rental`
upon rental, and back upon return).

.. warning::
   **Do not** modify the `Customer/Rental` location to avoid corrupting inventory tracking.

Next, go to :menuselection:`Inventory app --> Configuration --> Settings` and in the
:guilabel:`Warehouse` section, tick the :guilabel:`Storage Locations` checkbox. Click
:guilabel:`Save` to apply the changes.

To configure new locations, navigate to :menuselection:`Inventory app --> Configuration -->
Locations`. Click :guilabel:`New` to configure a new internal location.

On the new location page, enter the :guilabel:`Location Name` and for the :guilabel:`Parent
Location` field, select :guilabel:`WH`. Click the :icon:`fa-cloud-upload` (:guilabel:`Save
manually`) icon near the top to save.

.. example::
   A bike rental business has two store locations within the same city. Both locations allow for
   pickup and dropoff of their bikes. The company wants to track its bikes accurately at each
   location.

   Ensure the **Rental** and **Inventory** apps are configured by enabling :guilabel:`Rental
   Transfers` in the **Rental app** and :guilabel:`Storage Locations` in the **Inventory** app.

   Next, go to the :menuselection:`Inventory app > Configuration > Locations`. Create a new location
   for each storefront.

   .. image:: products/configured-locations.png
      :alt: Sample of internal inventory locations that represent different rental store locations.

Process a rental order pickup
=============================

When a customer picks up rental products, navigate to the desired rental order and click
:guilabel:`Pickup`. The **Rental** app displays a warehouse delivery form listing the reserved
rental products. Verify the list, then click :guilabel:`Validate` to move the order to the
:guilabel:`Done` stage.

.. image:: products/pickup-page.png
   :alt: Sample of a Pickup page in the Rental app.

Doing so places a :guilabel:`Pickedup` status banner on the rental order.

.. _rental/return-products:

Process a rental order return
=============================

When a customer returns products, navigate to the desired rental order and click :guilabel:`Return`.
The **Rental** app displays a warehouse receipt form listing the checked-out rental products.

Enter the same amount of each product being returned by the customer in the :guilabel:`Quantity`
column. If any of the products have serial numbers, enter them in the :guilabel:`Serial Numbers`
column.

.. image:: products/return-page.png
   :alt: Sample of the Return page in the Rental app.

Click :guilabel:`Validate` to move the order to the :guilabel:`Done` stage. A :guilabel:`Returned`
status banner appears on the rental order.

Download pickup and return receipts
===================================

Pickup and return receipts can be created and downloaded for customers when they pick up and/or
return rental products.

To create pickup and/or return receipts, navigate to the desired rental order, click the
:icon:`fa-cog` :guilabel:`(Actions)` icon to reveal a drop-down menu.

.. image:: products/print-pickup-return-receipt.png
   :alt: The pickup and return receipt print option in the Odoo Rental application.

From this drop-down menu, hover over the :guilabel:`Print` option to reveal a sub-menu. Then select
:guilabel:`Pickup and Return Receipt`.

Odoo downloads a PDF detailing all information about the current status of the rented items.

