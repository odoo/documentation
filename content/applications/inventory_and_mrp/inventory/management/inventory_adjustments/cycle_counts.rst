============
Cycle Counts
============

In most companies, the stock is only counted once a year. 
That's why by default, after making an inventory adjustment, the 
scheduled date for the next count is set on the 31th of decemeber.
But for some businesses it's crucial to have an accurate
inventory count. 

The goal of cycle counts is to count more often at key locations
to keep your critical stock levels accurate.

Configuration
=============

In Odoo, cycle counts are location-based. That means that the 
frequency of the counts is defined on the storage location. That
also means that to use cycle counts you need to activate the setting
**Storage Locations**. 

.. image:: cycle_counts/locations-settings.png
   :align: center
   :alt: Enable locations in an Odoo database's settings
   
Then, go to the locations via :menuselection:`Inventory --> Configuration -->
Locations`.

Open a location and change the Inventory Frequency. In this example we want to 
count items in this loctation every 30 days. That means that once an adjustment 
is applied on this location, the next scheduled date for this line will be 30 days
after.

.. image:: cycle_counts/inventory-frequency.png
   :align: center
   :alt: edit a location to change the inventory frequency


