============
Cycle counts
============

For most companies, warehouse stock only needs to be counted once a year. This is why, by default,
after making an *inventory adjustment* in Odoo, the scheduled date for the next inventory count is
set for the 31st of December of the current year.

However, for some businesses, it's crucial to have an accurate inventory count at all times. These
companies use *cycle counts* to keep critical stock levels accurate. Cycle counting is a method by
which companies count their inventory more often in certain *locations*, to ensure that their
physical inventory counts match their inventory records.

Activate storage locations
==========================

In Odoo, cycle counts are location-based. Therefore, the *storage locations* feature needs to be
enabled before performing a cycle count.

To enable this feature, navigate to :menuselection:`Inventory app --> Configuration --> Settings`,
and scroll down to the :guilabel:`Warehouse` section. Then, click the checkbox next to
:guilabel:`Storage Locations`. Click :guilabel:`Save` to save all changes.

.. image:: cycle_counts/cycle-counts-enabled-setting.png
   :align: center
   :alt: Enabled storage locations setting in inventory settings.

Change inventory count frequency by location
============================================

Now that the storage locations setting is enabled, the inventory count frequency can be changed for
specific locations created in the warehouse.

To view and edit locations, navigate to :menuselection:`Inventory app --> Configuration -->
Locations`. This reveals a :guilabel:`Locations` page containing every location currently created
and listed in the warehouse.

From this page, click into a location to reveal the settings and configuration page for that
location. Click :guilabel:`Edit` to edit the location settings.

Under the :guilabel:`Cyclic Inventory` section, locate the :guilabel:`Inventory Frequency (Days)`
field, which should be set to `0` (if this location has not been edited previously). In this field,
change the value to whichever number of days is desired.

.. image:: cycle_counts/cycle-counts-location-frequency.png
   :align: center
   :alt: Location frequency setting on location.

.. example::
   A location that needs an inventory count every 30 days should have the :guilabel:`Inventory
   Frequency (Days)` value set to `30`.

Once the frequency has been changed to the desired number of days, click :guilabel:`Save` to save
changes. Now, once an inventory adjustment is applied to this location, the next scheduled count
date is automatically set, based on the value entered into the :guilabel:`Inventory Frequency
(Days)` field.

Count inventory by location
===========================

To perform a cycle count for a specific location in the warehouse, navigate to
:menuselection:`Inventory app --> Operations --> Inventory Adjustments`. This reveals an
:guilabel:`Inventory Adjustments` page containing all products currently in stock, with each product
listed on its own line.

From this page, the :guilabel:`Filters` and :guilabel:`Group By` buttons (at the top of the page,
under the :guilabel:`Search...` bar), can be used to select specific locations and perform inventory
counts.

.. image:: cycle_counts/cycle-counts-inventory-adjustments-page.png
   :align: center
   :alt: Inventory adjustments page.

To select a specific location and view all products within that location, click :guilabel:`Group
By`, then click :guilabel:`Add Custom Group` to reveal a new drop-down menu to the right.

Click :guilabel:`Location` from the drop-down menu, then click :guilabel:`Apply`. The page now
displays condensed drop-down menus of each location in the warehouse that has products in stock, and
a cycle count can be performed for all products in that location.

.. tip::
   In large warehouses with multiple locations and a high volume of products, it might be easier to
   search for the specific location desired. To do this, from the :guilabel:`Inventory Adjustments`
   page, click :guilabel:`Filters`. Then, click :guilabel:`Add Custom Filter` to reveal a new menu
   to the right. Click this menu to reveal three drop-downs.

   For the first field, click and select :guilabel:`Location` from the drop-down. For the second
   field, leave the :guilabel:`contains` value as is. For the third field, type in the name of the
   location that is being searched for. Click :guilabel:`Apply` for that location to appear on the
   page.

.. image:: cycle_counts/cycle-counts-filters.png
   :align: center
   :alt: Applied filters and group by on inventory adjustments page.

Change full inventory count frequency
=====================================

While cycle counts are typically performed per location, the scheduled date for full inventory
counts of everything in-stock in the warehouse can also be manually changed to push the date up
sooner than the date listed.

To modify the default scheduled date, go to :menuselection:`Inventory app --> Configuration -->
Settings`. Then, in the :guilabel:`Operations` section, locate the :guilabel:`Annual Inventory Day
and Month` setting field, which includes a drop-down that is set to `31` :guilabel:`December` by
default.

.. image:: cycle_counts/cycle-counts-frequency-settings.png
   :align: center
   :alt: Frequency field in inventory app settings.

To change the day, click the `31`, and change it to a day within the range `1-31`, depending on the
desired month of the year.

Then, to change the month, click :guilabel:`December` to reveal the drop-down menu, and select the
desired month.

Once all changes have been made, click :guilabel:`Save` to save all changes.

.. seealso::
   :doc:`../inventory_management/count_products`
