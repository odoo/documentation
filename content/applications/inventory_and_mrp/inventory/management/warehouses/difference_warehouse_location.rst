========================================================
What is the difference between warehouses and locations?
========================================================

.. _inventory/management/difference-warehouse-location:

In Odoo, a **Warehouse** is the actual building/place in which your items
are stocked. You can setup multiple warehouses and create moves between
warehouses.

.. _inventory/warehouses/location-definition:

A **Location**, is a specific space within your warehouse. It can be
considered as a sublocation of your warehouse, as a shelf, a floor, an
aisle, etc. Therefore, a location is part of one warehouse only and it
is not possible to link one location to multiple warehouses. You can
configure as many locations as you need under one warehouse.

There are 3 types of locations:

-   The **Physical Locations** are internal locations that are part of the
    warehouses for which you are the owner. They can be the loading and
    unloading area of your warehouse, a shelf or a department, etc.

-   The **Partner Locations** are spaces within a customer and/or vendor's
    warehouse. They work the same way as Physical Locations with the only
    difference being that you are not the owner of the warehouse.

-   The **Virtual Locations** are places that do not exist, but in which
    products can be placed when they are not physically in an inventory yet
    (or anymore). They come in handy when you want to place lost products
    out of your stock (in the **Inventory loss**), or when you want to take into
    account products that are on their way to your warehouse (**Procurements**).

In Odoo, locations are structured hierarchically. You can structure your
locations as a tree, dependent on a parent-child relationship. This
gives you more detailed levels of analysis of your stock operations and
the organization of your warehouses.
