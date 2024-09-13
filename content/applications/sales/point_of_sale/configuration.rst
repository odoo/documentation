:show-content:
:show-toc:

=============
Configuration
=============

.. _configuration/settings:

Access the POS settings
=======================

To access the general POS settings, go to :menuselection:`Point of Sale --> Configuration -->
Settings`.

To access the settings of a specific point of sale, go to :menuselection:`Point of Sale -->
Configuration --> Point of Sale`. Alternatively, from the Point of Sale dashboard, click the
vertical ellipsis (:guilabel:`⋮`) button on a POS card, then on :guilabel:`Settings`.

Make products available
=======================

To make products available for sale, go to :menuselection:`Point of Sale --> Products --> Products`,
and select a product to open the product form. In the :guilabel:`Sales` tab, enable
:guilabel:`Available in POS`.

.. image:: configuration/pos-available.png
   :alt: Making a product available in your POS.

PoS product categories
======================

Configuration
-------------

POS product categories allow users to categorize products and get a more structured and clean
POS interface.

To manage PoS categories, go to :menuselection:`Point of Sale --> Configuration --> PoS Product
Categories`. To add a new category, click :guilabel:`Create`. Then, name it in the
:guilabel:`Category Name` field.

To associate a category with a parent category, fill in the :guilabel:`Parent Category` field. A
parent category groups one or more child categories.

.. example::
   .. image:: configuration/parent-categories.png
      :alt: The PoS product categories grouped by parent categories

Assign PoS product categories
-----------------------------

Go to :menuselection:`Point of Sale --> Products --> Products` and open a product form. Then, go to
the :guilabel:`Sales` tab and fill in the :guilabel:`Category` field under the :guilabel:`Point of
Sale` section.

.. image:: configuration/form-pos-category.png
   :alt: Sales tab of a product form to add a PoS product category

.. toctree::
   :titlesonly:

   configuration/epos_printers
   configuration/https
   configuration/epos_ssc
