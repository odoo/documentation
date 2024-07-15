=============
Putaway rules
=============

Putaway is the process of routing products to appropriate storage locations upon shipment arrival.

Odoo can accomplish this seamlessly using *putaway rules*, which dictate how products move through
specified warehouse locations.

Upon shipment arrival, operations are generated based on putaway rules to efficiently move products
to specified locations, and ensure easy retrieval for future delivery orders.

In warehouses that process specific kinds of products, putaway rules can also prevent volatile
substances from being stored in close proximity, by directing them to different locations determined
by the warehouse manager.

.. seealso::
   `Odoo Tutorials: Putaway Rules <https://www.youtube.com/watch?v=nCQMf6sj_w8>`_

Configuration
=============

To use putaway rules, navigate to :menuselection:`Inventory app --> Configuration --> Settings`, and
activate the :guilabel:`Multi-Step Routes` feature under the :guilabel:`Warehouse` section. By doing
so, the :guilabel:`Storage Locations` feature is also automatically activated.

Finally, click :guilabel:`Save`.

.. image:: putaway/activate-multi-step-routes.png
   :align: center
   :alt: Activate Multi-Step Routes in Inventory configuration settings.

.. _inventory/routes/putaway-rule:

Define putaway rule
-------------------

To manage where specific products are routed for storage, navigate to :menuselection:`Inventory app
--> Configuration --> Putaway Rules`. Use the :guilabel:`Create` button to configure a new putaway
rule on a :guilabel:`Product` or :guilabel:`Product Category` that the rule affects.

.. important::
   Putaway rules can be defined either per product/product category, and/or package type (the
   *Packages* setting must be enabled in :menuselection:`Inventory app --> Configuration -->
   Settings` for that).

In the same line, the :guilabel:`When product arrives in` location is where the putaway rule is
triggered to create an operation to move the product to the :guilabel:`Store to` location.

For this to work, the :guilabel:`Store to` location must be a *sub-location* of the first (e.g.,
`WH/Stock/Fruits` is a specific, named location inside `WH/Stock` to make the products stored here
easier to find).

.. example::
   In a warehouse location, **WH/Stock**, there are the following sub-locations:

   - WH/Stock/Fruits
   - WH/Stock/Vegetables

   Ensure all apples are stored in the fruits section by filling the field :guilabel:`Store to` with
   the location `WH/Stock/Fruits` when the :guilabel:`Product`, `Apple` arrives in `WH/Stock`.

   Repeat this for all products and hit :guilabel:`Save`.

   .. image:: putaway/create-putaway-rules.png
      :align: center
      :alt: Create putaway rules for apples and carrots.

Putaway rule priority
---------------------

Odoo selects a putaway rule based on the following priority list (from highest to lowest) until a
match is found:

#. Package type and product
#. Package type and product category
#. Package type
#. Product
#. Product category

.. example::
   The product `Lemonade can` has the following putaway rules configured:

   #. When receiving a `Pallet` (:guilabel:`Package Type`) of `Lemonade cans`, it is redirected to
      `WH/Stock/Pallets/PAL1`.
   #. `Lemonade can`'s :guilabel:`Product Category` is `All/drinks`, and when receiving a `Box` of
      any item in this product category, items are redirected to `WH/Stock/Shelf 1`.
   #. Any product on a `Pallet` is redirected to `WH/Stock/Pallets`
   #. The product `Lemonade can` is redirected to `WH/Stock/Shelf 2`
   #. Items in the `All/drinks` product category are redirected to `WH/Stock/Small Refrigerator`.

  .. image:: putaway/putaway-example.png
     :align: center
     :alt: Some examples of putaway rules.

.. _inventory/warehouses_storage/storage-category:

Storage categories
==================

A *storage category* is an extra location attribute. Storage categories allow the user to define
the quantity of products that can be stored in the location, and how the location will be selected
with putaway rules.

Configuration
-------------

To enable storage categories, go to :menuselection:`Inventory app --> Configuration --> Settings`,
and activate the :guilabel:`Storage Categories` feature in the :guilabel:`Warehouse` section. Then,
click :guilabel:`Save`.

.. important::
   The :guilabel:`Storage Locations` feature **must** be enabled to enable :guilabel:`Storage
   Categories`.

Define storage category
-----------------------

To create a storage category, go to :menuselection:`Inventory app --> Configuration --> Storage
Categories` and click :guilabel:`Create`.

On the storage category form, type a name for the :guilabel:`Storage Category` field.

Options are available to limit the capacity by weight, by product, or by package type. The
:guilabel:`Allow New Product` field defines when the location is considered available to store a
product:

- :guilabel:`If location is empty`: a product can be added there only if the location is empty.
- :guilabel:`If products are the same`: a product can be added there only if the same product is
  already there.
- :guilabel:`Allow mixed products`: several different products can be stored in this location at
  the same time.

.. example::
   Create putaway rules for pallet-stored items and ensure real-time storage capacity checks by
   creating the `High Frequency pallets` storage category.

   Name the :guilabel:`Storage Category`, and select :guilabel:`If all products are same` in the
   :guilabel:`Allow New Product` field.

   Then, define package capacity in the :guilabel:`Capacity by Package` tab, specifying the number
   of packages for the designated :guilabel:`Package Type` and setting a maximum of `2.00` `Pallets`
   for a specific location.

   .. image:: putaway/storage-category.png
      :align: center
      :alt: Create a storage category on the page.

Once the storage category settings are saved, the storage category can be linked to a location.

To do that, navigate to the location by going to :menuselection:`Inventory app --> Configuration -->
Locations`, and select the location. Click :guilabel:`Edit` and select the created category in the
:guilabel:`Storage Category` field.

.. example::
   Assign the `High Frequency pallets` storage category to the `WH/Stock/pallets/PAL 1`
   sub-location.

   .. image:: putaway/location-storage-category.png
      :align: center
      :alt: When a Storage Category is created, it can be linked to a warehouse location.

Storage categories in putaway rules
-----------------------------------

To continue the example from above, apply the `High Frequency Pallets` on the `PAL1` and `PAL2`
locations and :ref:`rework the putaway rules <inventory/routes/putaway-rule>` as follows:

Assume one pallet of lemonade cans is received:

- If PAL1 and PAL2 are empty, the pallet will be redirected to WH/Stock/Pallets/PAL1.
- If PAL1 is full, the pallet will be redirected to WH/Stock/Pallets/PAL2.
- If PAL1 and 2 are full, the pallet will be redirected to WH/Stock/Pallets.

.. image:: putaway/smart-putaways.png
   :align: center
   :alt: Storage Categories used in a variety of putaway rules.
