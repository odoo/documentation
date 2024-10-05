==========================
Scrap during manufacturing
==========================

.. |MO| replace:: :abbr:`MO (Manufacturing Order)`

During the manufacturing process, the need to scrap manufacturing components or finished products
may arise. This can be necessary if a component or product is damaged, or unusable for any other
reason.

By default, scrapping a component or finished product removes it from physical inventory and places
it in a virtual location titled *Virtual Locations/Scrap*. A virtual location is **not** a physical
space, but rather a designation in Odoo that is used to track items that are no longer in physical
inventory.

.. seealso::
   For more information, see the documentation about the different types of :doc:`locations
   <../../inventory/warehouses_storage/inventory_management>`.

Components can be scrapped from both the *Manufacturing* app and the *Shop Floor* module, before the
associated manufacturing order (MO) is closed. Finished products can only be scrapped from the
*Manufacturing* app, and only after closing the associated |MO|.

.. tip::
   Scrap orders can be viewed by navigating to :menuselection:`Inventory --> Operations --> Scrap`.
   Each scrap order shows the date and time the order was created, along with the product and
   quantity that was scrapped.

   To view the total quantity of each item scrapped, navigate to :menuselection:`Inventory -->
   Configuration --> Locations`, then remove the :guilabel:`Internal` filter from the
   :guilabel:`Search...` bar to display all virtual locations. From the list, select the
   :guilabel:`Virtual Locations/Scrap` location.

.. _manufacturing/management/scrap-window:

Scrap pop-up window
===================

Scrapping components and finished products is done through the :guilabel:`Scrap` pop-up window. The
pop-up window can be accessed from an |MO| in the backend, or the *Shop Floor* module.

Scrap component from Manufacturing
----------------------------------

To scrap a component from an |MO|, begin by navigating to :menuselection:`Manufacturing -->
Operations --> Manufacturing Orders`, and then select an |MO|. At the top of the |MO|, click the
:guilabel:`Scrap` button to open the :guilabel:`Scrap` pop-up window.

Scrap finished product from Manufacturing
-----------------------------------------

To scrap a finished product from an |MO|, begin by navigating to :menuselection:`Manufacturing -->
Operations --> Manufacturing Orders`. Select an open |MO|, and then click the :guilabel:`Produce
All` button to close it.

To select an |MO| that has already been closed, navigate to :menuselection:`Manufacturing -->
Operations --> Manufacturing Orders`, remove the :guilabel:`To Do` filter from the
:guilabel:`Search...` bar, and then select the desired |MO|.

Once closed, click the :guilabel:`Scrap` button at the top of the |MO| to open the :guilabel:`Scrap`
pop-up window.

Scrap component from Shop Floor
-------------------------------

To scrap a component from the *Shop Floor* module, begin by navigating to :menuselection:`Shop
Floor`. Then, either click the :guilabel:`⋮ (three vertical dots)` button on an |MO| card, or select
a work center from the top navigation, and click the :guilabel:`⋮ (three vertical dots)` button on a
work order card.

Either method opens the :guilabel:`What do you want to do?` pop-up window. Click the
:guilabel:`Scrap` button on the window to open the :guilabel:`Scrap` pop-up window.

Scrap pop-up window
===================

After opening the scrap pop-up window using one of the methods :ref:`detailed above
<manufacturing/management/scrap-window>`, select the component or finished product being scrapped,
from the :guilabel:`Product` drop-down menu.

In the :guilabel:`Quantity` field, enter the quantity being scrapped.

By default, the :guilabel:`Source Location` field is set to the warehouse's pre-production location,
while the :guilabel:`Scrap Location` field is set to the :guilabel:`Virtual Locations/Scrap`
location. If either the source or scrap location should be changed, select a different location from
their respective drop-down menus.

Enable the :guilabel:`Replenish Scrapped Quantities` checkbox if a picking order should be created
to replace the scrapped component(s) upon confirmation of the scrap order. This option should only
be enabled for warehouses with :doc:`two-step <../basic_setup/two_step_manufacturing>` or
:doc:`three-step <../basic_setup/three_step_manufacturing>` manufacturing enabled, since components
are not picked as part of the :doc:`one-step <../basic_setup/one_step_manufacturing>` manufacturing
process.

.. image:: scrap_manufacturing/scrap-window.png
   :align: center
   :alt: The Scrap pop-up window.

Click the :guilabel:`Scrap` button to scrap the selected component. After one or more scrap orders
have been created, a :guilabel:`Scraps` smart button appears at the top of the screen. Click it to
view a list of all scrap orders for the |MO|.

If a picking order was automatically created to replenish the scrapped components, it can be
accessed by opening the :menuselection:`Inventory` app, clicking the :guilabel:`# To Process` button
on the :guilabel:`Pick Components` card, and selecting the order.
