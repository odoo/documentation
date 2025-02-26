====
Kits
====

In Odoo, a *kit* is a type of bill of materials (BoM) that can be manufactured and sold. Kits are
sets of unassembled components sold to customers. They may be sold as standalone products, but are
also useful tools for managing more complex bills of materials (BoMs).

.. note::
   To use, manufacture, and sell kits, both the :guilabel:`Manufacturing` and :guilabel:`Inventory`
   apps need to be installed.

Create the kit as a product
===========================

To use a kit as a sellable product, or as a component organization tool, the kit should first
be created as a product.

To create a kit product, go to :menuselection:`Inventory app --> Products --> Products`, and click
:guilabel:`Create`.

Then, assign a name to the new kit product. Next, under the :guilabel:`General Information` tab, set
the :guilabel:`Product Type` to :guilabel:`Consumable`. Kit products work best as consumables,
because the stock on-hand for kits is typically not tracked.

.. note::
   Although kits should almost always be set to :guilabel:`Consumable`, companies using
   **Anglo-Saxon** accounting might need to create kits as a :guilabel:`Storable Product`. This is
   because when processing invoices for kits, the Cost of Goods Sold (COGS) are posted in
   accounting journals.

Unlike storable products, the :guilabel:`Routes` designation under the :guilabel:`Inventory` tab
does not matter for kits, since Odoo uses the routes of the kit's individual components for
replenishment purposes. All other parameters for the kit product may be modified according to
preference. Once ready, click :guilabel:`Save` to save the new product.

The kit's components must also be configured as products via :menuselection:`Inventory app -->
Products --> Products`. These components require no specific configuration.

Set up the kit BoM
==================

After fully configuring the kit product and its components, a new :abbr:`BoM (bill of materials)`
can be created for the kit product.

To do so, go to :menuselection:`Manufacturing app --> Products --> Bills of Materials`, and click
:guilabel:`Create`. Next to the :guilabel:`Product` field, click the drop-down menu to reveal a list
of products, and select the previously configured kit product.

Then, for the :guilabel:`BoM Type` field, select the :guilabel:`Kit` option. Finally, under the
:guilabel:`Components` tab, click :guilabel:`Add a line`, and add each desired component, and
specify their quantities under the :guilabel:`Quantity` column.

Once ready, click :guilabel:`Save` to save the newly-created :abbr:`BoM (bill of materials)`.

.. image:: kit_shipping/bom-kit-selection.png
   :alt: Kit selection on the bill of materials.

If the kit is solely being used as a sellable product, then only components need to be added under
the :guilabel:`Components` tab, and configuring manufacturing operations is not necessary.

.. note::
   When a kit is sold as a product, it appears as a single line item on the quotation and sales
   order. However, on delivery orders, each component of the kit is listed.

Kits can also be used for complex :abbr:`BoMs (Bills of Materials)`. This method nests BoMs within
other BoMs, organizing complex products while simplifying manufacturing by defining each procurement
and production step separately.

Sublevel BoMs (subassemblies or semifinished products) streamline these workflows, helping with
traceability efforts.

.. seealso::
   :doc:`sub_assemblies`
