========
Products
========

Products can be created from the backend or the POS interface. To manage products from the backend,
go to :menuselection:`Point of Sale --> Products --> Products`. Click :guilabel:`New` to create a
product, or open an existing one to edit. Update the fields as needed and enable the
:guilabel:`Point of Sale` checkbox at the top of the form to make the product available for sale.

.. note::
   The :guilabel:`Point of Sale` checkbox on a product form is automatically checked by default for
   products created directly from the Point of Sale application.

To create products from the POS interface, access the POS register, click the :icon:`fa-bars`
(:guilabel:`hamburger menu`) icon, and :guilabel:`Create Product`. Enter the product details in the
pop-up window and click :guilabel:`Save`. The product is immediately available in the register.

To update an existing product from the POS register, long-click a product to open the information
pop-up, and click :guilabel:`Edit`. Change the necessary product details and click :guilabel:`Save`
to return to the POS register.

POS product categories
======================

POS product categories provide a means to organize products and ensure a structured POS register.

To manage POS categories, follow these steps:

#. Navigate to :menuselection:`Point of Sale --> Configuration --> PoS Product Categories`.
#. Create a :guilabel:`New` category, or click any existing category to update it.
#. Classify and build a hierarchy between categories: Associate a category with a parent
   category by filling in the :guilabel:`Parent Category` field. A parent category groups one or
   more child categories (eg.,: Use `Drinks` to regroup `Hot beverages` and `Soft drinks`).

Once POS product categories are created, assign them to specific products:

#. Go to :menuselection:`Point of Sale --> Products --> Products` and open a product form.
#. Navigate to the :guilabel:`Point of Sale` tab and fill in the :guilabel:`Category` field with one
   or multiple POS categories.

Restrict categories
-------------------

To limit the categories displayed on the POS register, navigate to the :ref:`POS settings
<pos/use/settings>` and choose the specific categories to display in the :guilabel:`Restrict
Categories` field within the :guilabel:`Product & PoS categories` section.
