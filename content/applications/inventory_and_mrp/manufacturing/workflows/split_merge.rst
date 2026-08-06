====================================
Split and merge manufacturing orders
====================================

.. |MO| replace:: :abbr:`MO (manufacturing order)`
.. |MOs| replace:: :abbr:`MOs (manufacturing orders)`
.. |BoM| replace:: :abbr:`BoM (bill of materials)`

In Odoo **Manufacturing**, it is possible to create manufacturing orders (MOs) for a single unit of
an item, or multiple units of the same item. A partially produced manufacturing order may be split
to account for both completed units and remaining production requirements. This process ensures that
the current |MO| reflects only the quantity actually finished, while supplementary |MOs| track the
balance.

An |MO| should be split if the remaining quantity cannot be completed immediately due to internal or
external constraints.

When a split is executed, the system updates the original |MO| to reflect the specific quantity that
has been produced and is ready for closing. Then, new |MOs| are automatically generated for the
difference between the original planned quantity and the actual produced quantity. This ensures that
lead times, labor costs, and material consumption remain accurately allocated to the specific time
frame in which the work occurred.

Splits can be set up from the |MO| form or the *Manufacturing Orders* page.

.. important::
   An |MO| can only contain one unit of a product, or multiple units of a single product that all
   use the same bill of materials (BoM). As a result, it is only possible to merge |MOs| for the
   same products with the same |BoM|.

Split manufacturing orders
==========================

|MOs| can be split in two ways:

- :ref:`manufacturing/split_merge/mo-page-split`
- :ref:`manufacturing/split_merge/mo-actions-menu`

.. _manufacturing/split_merge/mo-page-split:

From the Manufacturing Orders page
----------------------------------

Navigate to :menuselection:`Manufacturing app --> Operations --> Manufacturing Orders`.

Select the checkbox next to the |MO| to be split. Click :icon:`fa-cog` :menuselection:`Actions -->
Split`. A *Split production* pop-up window appears.

In the :guilabel:`Max Batch Size` field, enter the number of units that each batch should be split
into, then click outside of the field. The :guilabel:`# Splits` field updates with the total number
of |MOs| that will be created. A table appears below, with a line for each new |MO| that will be
created by the split. In the :guilabel:`Quantity To Produce` column, enter the number of units that
will be assigned to each new |MO|. Finally, click :guilabel:`Split` to split the |MO|.

.. example::
   A work order for `5` units of the `Drawer` product are split with a :guilabel:`Max Batch Size` of
   `2`. This creates 3 splits; two of the splits contain `2` units each, and the final split
   contains a single unit.

   .. image:: split_merge/split-production-window.png
      :alt: The Split production pop-up window for a manufacturing order.

After clicking :guilabel:`Split`, the original |MO| is split into the number of orders that was
specified in the :guilabel:`# Split` field. The reference numbers for the new |MOs| are the
reference number for the original order with `-###` tags added to the end.

.. example::
   |MO| `WH/MO/00012` is split into three separate orders. The reference numbers for the new orders
   are:

   - `WH/MO/00012-001`
   - `WH/MO/00012-002`
   - `WH/MO/00012-003`

.. _manufacturing/split_merge/mo-actions-menu:

From the actions menu of an |MO|
--------------------------------

To split an |MO| into multiple orders, begin by navigating to :menuselection:`Manufacturing app -->
Operations --> Manufacturing Orders`, then select a confirmed |MO|. At the top of the page, next to
the :guilabel:`New` button, the |MO|'s reference number appears with a :icon:`fa-cog`
:guilabel:`(Actions)` icon next to it.

Click the :icon:`fa-cog` :guilabel:`(Actions)` icon to reveal the drop-down menu for the |MO|, then
select :guilabel:`Split`.

.. image:: split_merge/settings-split.png
   :alt: The Actions menu on a manufacturing order.

After selecting :guilabel:`Split`, a *Split production* pop-up window appears. In the :guilabel:`Max
Batch Size` field, enter the number of units that each batch should be split into, then click
outside of the field. The :guilabel:`# Splits` field updates with the total number of |MOs| that
will be created. A table appears below, with a line for each new |MO| that will be created by the
split. In the :guilabel:`Quantity To Produce` column, enter the number of units that will be
assigned to each new |MO|. Finally, click :guilabel:`Split` to split the |MO|.

After clicking :guilabel:`Split`, the original |MO| is split into the number of orders that was
specified in the :guilabel:`# Split` field. The reference numbers for the new |MOs| are the
reference number for the original order with `-###` tags added to the end.

To complete the |MOs|, complete all work orders, then click the :guilabel:`Produce All` button on
the |MO| form.

Merge manufacturing orders
==========================

To merge two or more |MOs| using the same |BoM| into a single order, begin by navigating to
:menuselection:`Manufacturing app --> Operations --> Manufacturing Orders`. Select the |MOs| that
will be merged by selecting the checkbox to the side of the name of each order.

.. image:: split_merge/select-orders.png
   :alt: Select at least two orders using the same BoM to merge.

Once all |MOs| have been selected, click :icon:`fa-cog` :menuselection:`Actions --> Merge`.

The selected |MOs| are merged into a single order. The reference number for the new |MO| is the next
sequential number that has *not* already been assigned to an order.

.. example::
   The last reference number used for an |MO| was `WH/MO/00012`. Two |MOs|, `WH/MO/00008` and
   `WH/MO/00009`, are merged into a single order. The reference number for the |MO| created by the
   merger is `WH/MO/00013`.
