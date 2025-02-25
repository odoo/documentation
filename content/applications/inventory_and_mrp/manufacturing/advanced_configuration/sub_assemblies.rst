===============
Multilevel BoMs
===============

.. |BOM| replace:: :abbr:`BoM (Bill of Materials)`
.. |BOMs| replace:: :abbr:`BoMs (Bills of Materials)`

Use a multilevel bill of materials (BoM) when a manufactured product is part of another assembly.
This method nests |BOMs| within other |BOMs|, organizing complex products while simplifying
manufacturing by defining each procurement and production step separately.

Sublevel |BOMs| (subassemblies or semifinished products) streamline these production workflows, and
are beneficial when the subassembly is used across multiple finished products (meaning they'd appear
on multiple top-level |BOMs|). The more complicated a product is to build or procure, the more value
a multilevel |BOM| can provide.

Create a multilevel BoM
=======================

To set up a multilevel |BOM|, the top-level product and sublevel products's |BOMs| must be created.
If starting from scratch, build the |BOMs| from the bottom up. Start with the lowest-level product
|BOMs|, then include those products as components in higher-level |BOMs|.

For example, a printed circuit board (PCB) for a custom keyboard would be composed of hundreds of
electronic components, such as transistors, resistors, and capacitors. Instead of listing all of
those components out, a sublevel product and |BOM| for `PCB` is created, to track the quantities of
transistors and other small components, without needing to overcrowd the toplevel |BOM| for custom
keyboard with listing them. Instead, the custom keyboard's |BOM| consists of an assortment of
components and sublevel |BOMs| alike, like keycaps, switches, the PCB, and keyboard plate.

:doc:`Learn how to build a simple bill of materials <../basic_setup/bill_configuration>`. For the
PCB, this would include the transistors, resistors, and other components.

.. image:: sub_assemblies/sublevel-bom.png
   :alt: A bill of materials for a PCB.

After the sublevel products (like the PCB, keycaps, and keyboard plate) are fully configured, create
the top-level product by navigating to :menuselection:`Manufacturing --> Products --> Products`, and
then selecting :guilabel:`New`. From here, configure the product's specifications as needed.

Once the top-level product (the keyboard) is configured, click the :guilabel:`Bill of Materials`
smart button on the product form, and then select :guilabel:`New` to make a |BOM| for the top-level
product. Add the sublevel products to this |BOM|, along with any other necessary components.

.. image:: sub_assemblies/top-level-bom.png
   :alt: A bill of materials for a keyboard, containing a bill of materials for a PCB.

Manage production planning
==========================

The two options below are two of the best ways to manage manufacturing order automation for products
with multilevel |BOMs|.

.. note::
   Complex |BOMs| are specifically used to manage products that require manufactured components. If
   a BoM is being created to organize components or bundle sellable products, :doc:`use a kit
   <kit_shipping>` instead.

To automatically trigger manufacturing orders for sublevel products after confirming a manufacturing
order for the main product, there are two options:

- **Option 1 (recommended):** Create *Reordering Rules* for the sublevel products and set both the
  minimum and maximum needed stock quantities to `0`.
- **Option 2:** Activate the :guilabel:`Replenish on Order (MTO)` and :guilabel:`Manufacture` routes
  under the :guilabel:`Inventory` tab of the sublevel product's product form.

.. seealso::
   :doc:`../../purchase/products/reordering`
   :doc:`../../inventory/warehouses_storage/replenishment/mto`

Option 1 is more flexible than Option 2 and is recommended. Reordering rules do not directly link
demand to replenishment, allowing stock to be unreserved and reassigned as needed. The Replenish on
Order (MTO) route, however, uniquely links sublevel and top-level products, reserving quantities for
the confirmed top-level manufacturing order.

In both methods, sublevel products must be fully manufactured before starting the top-level product.
