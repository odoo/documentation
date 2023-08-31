===============
Cluster picking
===============

.. _inventory/misc/cluster_picking:

.. |SO| replace:: :abbr:`SO (Sales Order)`
.. |SOS| replace:: :abbr:`SOs (Sales Orders)`

Cluster picking is an advanced order fulfillment approach derived from :ref:`batch picking
<inventory/misc/batch_picking>`.

In this strategy, pickers load a cart with multiple packages, each designated for a specific *sales
order* (SO). Then, the picker travels to each storage location, and places the products directly in
the package of the associated order.

This method is most efficient for medium-sized companies, with high order volumes, and relatively
few unique products, since the method eliminates the need for sorting products into packages for
customers after picking.

However, cluster picking does have some disadvantages. For instance, urgent orders cannot be
prioritized, and optimized batches must be manually created beforehand. As a result, the picking
process can lead to bottlenecks.

.. _inventory/misc/cluster_picking/example:

.. example::
   #. |SO| 1 calls for one apple and orange
   #. |SO| 2 calls for one apple and banana
   #. |SO| 3 calls for one apple, orange, and banana

   Apples are stored in Shelf A, oranges in Shelf B, and bananas in Shelf C.

   To pick products for three orders at once, the cart is loaded with three empty packages.

   Starting at Shelf A, the picker places apples into each package. Next, the picker navigates to
   Shelf B, and places oranges in the packages designated for |SO| 1 and |SO| 3. Finally, the picker
   pushes the cart to Shelf C, and loads packages for |SO| 2 and |SO| 3 with a banana, each.

   With the packages for all three |SOS| packed, the picker pushes the cart to the output location,
   where the packages are sealed and prepared for shipment.

   .. image:: cluster_picking/cluster-example.png
      :align: center
      :alt: Show example of fulfilling sales orders 2 and 3 at once.

Configuration
=============

To enable cluster picking, begin by navigating to :menuselection:`Inventory app --> Configuration
--> Settings`. Under the :guilabel:`Operations` heading, activate the :guilabel:`Packages` and
:guilabel:`Batch Transfers` options.

.. image:: cluster_picking/configs.png
   :align: center
   :alt: Activate *Packages* and *Batch Transfers* features in the settings.

Since batch picking is used to optimize the *pick* operation in Odoo, the :guilabel:`Storage
Locations` and :guilabel:`Multi-Step Routes` options, under the :guilabel:`Warehouse` heading, must
also be checked on this settings page.

*Storage locations* allow products to be stored in specific locations they can be picked from, while
*multi-step routes* enable the picking operation itself.

When finished, click :guilabel:`Save`.

.. image:: cluster_picking/locations-routes-checkbox.png
   :align: center
   :alt: Enable *Storage Locations* and *Multi-Step Routes* Inventory > Configuration > Settings.

.. _inventory/misc/create-package:

Packages setup
--------------

After the :guilabel:`Packages` feature is enabled, navigate to :menuselection:`Inventory app -->
Products --> Packages`, and click the :guilabel:`New` button to create a new package.

On the new package form, the :guilabel:`Package Reference` is pre-filled with the next available
`PACK` number in the system. :guilabel:`Pack Date` is automatically set to the creation date of the
form.

For the :guilabel:`Package Use` field, the :guilabel:`Disposable Box` option should be selected if
the package is used for a shipping. Alternatively, the :guilabel:`Reusable Box` option should be
selected if the package is simply used as a method of grouping products from the same |SO| together
before they are moved to the intended shipping box at the output location.

.. seealso::
   :ref:`Packages <inventory/management/packages>`

.. example::
   A package intended for cluster picking is named `CLUSTER-PACK-3` for easy identification. For
   this workflow, the products are directly packed using their intended shipping boxes, so
   :guilabel:`Package Use` is set to :guilabel:`Disposable Box`.

   .. image:: cluster_picking/cluster-package.png
      :align: center
      :alt: Create new package form.

Create cluster batch
====================

To see how cluster picking works in Odoo, navigate to the :menuselection:`Sales` app, and create
|SOS| that will be fulfilled together in the same batch. After confirming an |SO|, the
:guilabel:`Delivery` smart button becomes visible. Displayed inside the icon is a number
representing the amount of steps in the outgoing shipment process.

.. example::
   Begin by creating three |SOS| for the apples, oranges, and bananas, as shown in the :ref:`example
   above <inventory/misc/cluster_picking/example>`.

   After confirming the |SO|, the :guilabel:`Delivery` smart button displays the number `2`,
   indicating there are two operations to complete: `Pick` and `Delivery`.

   .. image:: cluster_picking/create-sales-order.png
      :align: center
      :alt: Example sales order for an apple, orange, and banana.

With the |SOS| created, orders now must be grouped into batches. To do so, navigate to the
*Inventory* dashboard and select the operation type card, :guilabel:`Delivery Orders` or
:guilabel:`Pick` (whichever is the first operation in the delivery flow).

Doing so displays a filtered list of outgoing operations with the :guilabel:`Ready` status,
indicating that all the products in the |SO| are in stock.

.. note::
   Cluster pick batches can be created for outgoing shipments in one, two, or three steps.

.. seealso::
   - :ref:`Delivery in one step <inventory/receipts_delivery_one_step>`
   - :ref:`Delivery in two steps <inventory/receipts_delivery_two_steps>`
   - :ref:`Delivery in three steps <inventory/delivery_three_steps>`

Click the checkbox to the left of the corresponding outgoing operation to add them to the batch.
With the desired pickings selected, click the :guilabel:`⚙️ Actions (gear)` button, and select the
:guilabel:`Add to batch` option from the resulting drop-down menu.

.. example::
   To create a cluster batch, as shown in the :ref:`example above
   <inventory/misc/cluster_picking/example>`, in a warehouse configured with two-step outgoing
   shipments, the following pick operations are selected:

   - `WH/PICK/00007`: linked to |SO| 88 for one apple and orange.
   - `WH/PICK/00008`: linked to |SO| 89 for one apple and banana.
   - `WH/PICK/00009`: linked to |SO| 90 for one apple, orange, and banana.

   .. image:: cluster_picking/select-picks.png
      :align: center
      :alt: Use *Add to batch* button, from the *Action* button's list.

Doing so opens an :guilabel:`Add to batch` pop-up window, wherein the employee
:guilabel:`Responsible` for the picking can be assigned.

Choose from the two options in the :guilabel:`Add to` field to either: add to :guilabel:`an existing
batch transfer`, or create :guilabel:`a new batch transfer`.

To create draft batch pickings to be confirmed at a later date, select the :guilabel:`Draft`
checkbox.

Conclude the process by clicking :guilabel:`Confirm`.

.. image:: cluster_picking/add-to-batch-window.png
   :align: center
   :alt: Show *Add to batch* window to create a batch transfer.

Process batches
===============

To process batches, navigate to :menuselection:`Inventory app --> Operations --> Batch Transfers`.
Click on a batch to select it.

In the :guilabel:`Detailed Operations` tab, products that are to be picked are grouped by location.

Under the :guilabel:`Source Package` or :guilabel:`Destination Package` field, enter the package
used for the picking.

.. note::
   Use the :guilabel:`Source Package` field when the picking package is configured as *reusable* on
   the :ref:`package form <inventory/misc/create-package>`. This means the products are temporarily
   placed in a container during picking, before getting transferred to their final shipping box.

   Alternatively, use the :guilabel:`Destination Package` field when the product is directly placed
   in its *disposable* shipping box during picking.

.. example::
   Process the cluster batch for the three orders of apples, oranges, and bananas :ref:`example
   <inventory/misc/cluster_picking/example>` by assigning each picking to a dedicated package.

   At the storage location for apples, `WH/Stock/Shelf A`, assign the apples in all three pickings
   to one of the three disposable packages, `CLUSTER-PACK-1`, `CLUSTER-PACK-2`, or `CLUSTER-PACK-3`.

   Record this in Odoo using the :guilabel:`Destination Package` field in the :guilabel:`Detailed
   Operations` tab.

   .. image:: cluster_picking/cluster-batch-example.png
      :align: center
      :alt: Example of processing cluster pickings in *Inventory*.

In Barcode
----------

To process cluster pickings directly from the *Barcode* app, select the :guilabel:`Batch Transfers`
button from the *Barcode* dashboard. Then, select the desired batch.

On the batch transfer screen, the products in the picking are grouped by location, and each line is
color-coded to associate products in the same picking together.

Then, follow the prompt to :guilabel:`Scan the source location` barcode for the storage location of
the first product. Then, scan the barcode for the product and package to process the transfer.

Repeat this for all products, and click the :guilabel:`Validate` button.

.. note::
   To find the package barcode, navigate to :menuselection:`Inventory app --> Products -->
   Packages`, select the desired package, click the :guilabel:`⚙️ (gear)` icon at the top of the
   package form, and select the :guilabel:`Print` option.

   Next, select one of the three print options to generate the package barcode from the
   :guilabel:`Package Reference` field.

   .. image:: cluster_picking/find-package-barcode.png
      :align: center
      :alt: Display where the package barcode can be generated.

.. example::
   Begin processing the cluster picking by going to the first storage location, `Shelf A`, and
   scanning the :ref:`location barcode <barcode/setup/location>`. Doing so highlights all the
   pickings that need products from this particular location.

   Scan the barcode for the apple, which highlights the picking (labeled in red) for the product
   `Apple`, for the picking, `WH/PICK/00007`.

   Then, scan the `CLUSTER-PACK-1` package barcode, and place the product in the designated package.

   .. image:: cluster_picking/batch-barcode.png
      :align: center
      :alt: Example of cluster batch from the *Barcode* app.

.. tip::
   After creating a batch transfer and assigning a package to a picking, Odoo suggests the specified
   package by displaying the name *in italics* under the product name, ensuring pickers place
   products into the correct boxes.

