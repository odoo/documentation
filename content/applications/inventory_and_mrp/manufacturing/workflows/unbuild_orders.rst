==============
Unbuild orders
==============

.. |BoM| replace:: :abbr:`BoM (Bill of Materials)`

In some cases, it is necessary to dismantle manufactured products into their individual components.
This may be required if too many units of a product were built, or if the components of one product
must be reclaimed to use in the manufacturing of another.

In Odoo *Manufacturing*, products can be dismantled, and their components returned to inventory,
using *unbuild orders*. By using unbuild orders to accomplish this task, inventory counts for the
finished product and its components remain accurate, based on the quantity of products dismantled,
and the quantity of components reclaimed.

Create unbuild order
====================

A new unbuild order can be created by navigating to :menuselection:`Manufacturing app --> Operations
--> Unbuild Orders`, and clicking :guilabel:`New`.

Begin filling out the new unbuild order by selecting a :guilabel:`Product` to unbuild. After doing
so, the :guilabel:`Bill of Material` field auto-populates with the corresponding bill of materials
(BoM). If a different |BoM| should be used, click on the :guilabel:`Bill of Material` field, and
select it from the drop-down menu.

Alternatively, a specific |BoM| can be selected in the :guilabel:`Bill of Material` field before
selecting a product, which causes the corresponding product to auto-populate in the
:guilabel:`Product` field.

Next, specify the :guilabel:`Quantity` of the product that is being unbuilt.

If the product being unbuilt was originally manufactured in a specific manufacturing order (MO),
select it in the :guilabel:`Manufacturing Order` field.

In the :guilabel:`Source Location` field, select the location where the product being unbuilt is
currently stored.

In the :guilabel:`Destination Location` field, select the location where the reclaimed components
are stored after the unbuild order is completed.

If the *Lots & Serial Numbers* feature is enabled in the settings of the *Inventory* app, a
:guilabel:`Lot/Serial Number` field appears on the unbuild order, which can be used to specify the
lot(s) or serial number(s) of the product being unbuilt, if any are assigned.

If the Odoo database has been configured with multiple companies, a :guilabel:`Company` field
appears on the unbuild order, which can be used to specify the company that owns the product being
unbuilt.

Finally, once the product has been unbuilt, click the :guilabel:`Unbuild` button at the top of the
order to confirm that it has been completed.

.. image:: unbuild_orders/unbuild-order.png
   :align: center
   :alt: A filled-out unbuild order.

.. warning::
   While it is possible to create unbuild orders for products that have zero (or fewer) units
   on-hand, this is not advised, since it can lead to inventory inconsistencies.

   If an unbuild order is created for a product with zero (or fewer) units on-hand, a pop-up window
   appears, warning the user that there is an insufficient quantity to unbuild.

   To ignore the warning, and proceed with the unbuild order, click :guilabel:`Confirm` at the
   bottom of the pop-up window. To return to the unconfirmed unbuild order, click
   :guilabel:`Discard`, instead.

   .. image:: unbuild_orders/insufficient-quantity.png
      :align: center
      :alt: The insufficient quantity pop-up that appears after trying to confirm an unbuild order
            for a product with zero or fewer units on hand.

After completing an unbuild order, inventory counts automatically update, based on the quantity of
products unbuilt, and the quantity of components reclaimed.

.. example::
   A `Coat Rack` product is comprised of one `Wooden Pole` component and six `Wooden Dowel`
   components.

   An unbuild order is created for one unit of the `Coat Rack`. Once the order is completed, the
   on-hand quantity of `Coat Racks` decreases by one, while the on-hand quantities of `Wooden Poles`
   and `Wooden Dowels` increase by one and six, respectively.

Scrap unusable components
=========================

In some cases, components may be unusable after the unbuilding process is completed. To ensure that
inventory counts accurately reflect the quantity of usable components on-hand, any component that
can no longer be used should be removed from inventory using a :doc:`scrap order
<../../inventory/warehouses_storage/inventory_management/scrap_inventory>`.
