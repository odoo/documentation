======================
User default warehouse
======================

Setting up a **default warehouse** can be useful for field technicians who keep a supply in their
van or those who always resupply from the same warehouse. It also allows field workers to switch
between warehouses from their profiles.

Products in sales orders created during field interventions are always pulled from the default
warehouse, keeping the inventory accurate.

.. seealso::
   :doc:`../../inventory_and_mrp/inventory`

Configuration
=============

To set up a user default warehouse, the :doc:`storage locations
<../../inventory_and_mrp/inventory/management/warehouses/warehouses_locations>` feature needs to be
activated in the **Inventory** app. It is also necessary to have more than one warehouse in your
database.

You can either set it up :ref:`for your profile <default-warehouse/my-profile>`, or :ref:`for all
users <default-warehouse/all-users>`.

.. seealso::
   :doc:`../../inventory_and_mrp/inventory/management/warehouses/warehouses_locations`

.. _default-warehouse/my-profile:

For your profile
----------------

To set up a default warehouse for yourself, click your **profile icon** in the upper right corner of
the screen, then, go to :menuselection:`My Profile --> Preferences --> Default Warehouse`. Select
the default warehouse from the drop-down menu.

.. _default-warehouse/all-users:

For all users
-------------

To set up a default warehouse for a specific user, go to :menuselection:`Settings --> Users -->
Manage users`, select a user, then go to the :guilabel:`Preferences` tab. Scroll down to
:guilabel:`Inventory`, and select the default warehouse from the drop-down menu.

.. image:: default_warehouse/user-default.png
   :alt: Selection of a default warehouse on a user profile.

Use in field service tasks
==========================

Once a default warehouse has been configured for a user, the materials used for a sales order
related to a Field Service task are pulled from that specific warehouse. Open the related sales
order, go to the :guilabel:`Other Info` tab, then scroll down to :guilabel:`Delivery`. The default
warehouse is applied correctly.

Once the Field Service task is marked as done, the stock of the default warehouse is automatically
updated.
