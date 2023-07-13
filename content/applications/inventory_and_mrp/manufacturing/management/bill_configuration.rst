==========================
Create a bill of materials
==========================

.. _manufacturing/management/bill-configuration:

A *Bill of Materials* (or *BoM* for short) is a document that defines the quantity of each
component required to make or deliver a finished product. It can also include various operations
and the individual step guidelines needed to complete a production process.

In Odoo Manufacturing, multiple :abbr:`BoMs (Bills of Materials)` can be linked to each product, so
that even product variants can have their own tailored :abbr:`BoMs (Bills of Materials)`.

Correctly setting up a :abbr:`BoM (Bill of Materials)` helps optimize the manufacturing process and
save time.

Set up a bill of materials (BoM)
================================

The simplest :abbr:`BoM (Bill of Materials)` setup is one without operations or instructions, only
components. In this case, the production is solely managed using *Manufacturing Orders*.

To create a :abbr:`BoM (Bill of Materials)` from the :guilabel:`Manufacturing` module, go to
:menuselection:`Products --> Bills of Materials`. Then, click :guilabel:`Create`. Next, specify the
:guilabel:`Product`.

.. note::
   A :abbr:`BoM (Bill of Materials)` can also be created directly from the product form, in which
   case the :guilabel:`Product` field is pre-filled.

For a standard :abbr:`BoM (Bill of Materials)`, set the :guilabel:`BoM Type` to
:guilabel:`Manufacture this Product`. Then, click :guilabel:`Add a Line` to specify the various
components that make up the production of the final product and their respective quantities. New
components can be created quickly through the :abbr:`BoM (Bill of Materials)`, or can be created
beforehand in :menuselection:`Manufacturing --> Products --> Products --> Create`. Finally, click
:guilabel:`Save` to finish creating the :abbr:`BoM (Bill of Materials)`.

.. image:: bill_configuration/bom-form.png
   :align: center
   :alt: Set up a Bill of Materials.

Specify a bill of materials (BoM) for a product variant
-------------------------------------------------------

:abbr:`BoMs (Bills of Materials)` can also be assigned to specific *Product Variants*, with two
setup options available to choose from.

.. note::
   In order to assign :abbr:`BoMs (Bills of Materials)` to product variants, the product's variant
   attributes must already be configured on the product form.

The first method is to create one :abbr:`BoM (Bill of Materials)` per variant by creating a new
:abbr:`BoM (Bill of Materials)` and specifying the :guilabel:`Product Variant`. The second method
is to create one master :abbr:`BoM (Bill of Materials)` that contains all of the components, and
specify which variant each component applies to using the :guilabel:`Apply on Variants` column.

.. image:: bill_configuration/bom-variants.png
   :align: center
   :alt: Product Variants in the Bill of Materials.

Set up operations
=================

Add an :guilabel:`Operation` to a :abbr:`BoM (Bill of Materials)` to specify instructions for
production and register time spent on an operation. To use this feature, first enable the
:guilabel:`Work Orders` feature in :menuselection:`Manufacturing --> Configuration --> Settings -->
Operations`.

Then, when creating a new :abbr:`BoM (Bill of Materials)`, click on the :guilabel:`Operations` tab
and click :guilabel:`Add a line` to add a new operation. In the :guilabel:`Create Operations` box,
give the operation a name, specify the :guilabel:`Work Center` and duration settings. Like
components, Odoo gives the option to specify a product variant in the :guilabel:`Apply on Variants`
field so the operation only applies to that variant. Finally, click :guilabel:`Save & Close`.

.. note::
   Each operation is unique, as it is always exclusively linked to one :abbr:`BoM (Bill of
   Materials)`. Operations can be reused when configuring a new :abbr:`BoM (Bill of Materials)`,
   with the :guilabel:`Copy Existing Operations` feature.

.. image:: bill_configuration/copy-existing-operations.png
   :align: center
   :alt: Copy Existing Operations feature.

Add by-products to a bill of materials (BoM)
============================================

A *By-Product* is a residual product that is created during production in addition to the main
product of a :abbr:`BoM (Bill of Materials)`. Unlike the primary product, there can be more than
one by-product on a :abbr:`BoM (Bill of Materials)`.

To add by-products to a :abbr:`BoM (Bill of Materials)`, first enable the :guilabel:`By-Products`
feature in :menuselection:`Manufacturing --> Configuration --> Settings --> Operations`.

Once the feature is enabled, you can add by-products to a :abbr:`BoM (Bill of Materials)` by
clicking on the :guilabel:`Operations` tab and clicking :guilabel:`Add a line`. Then, name the
by-product and indicate the :guilabel:`Quantity` and the :guilabel:`Unit of Measure`. If the
:abbr:`BoM (Bill of Materials)` has configured operations, specify exactly which operation the
by-product is produced from in the :guilabel:`Produced in Operation` field. Finally, click
:guilabel:`Save`.
