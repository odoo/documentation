=======
Catalog
=======

The eCommerce catalog is the equivalent of your physical store shelves: it allows customers to
browse your products. Product categories, available options, sorting, and navigation threads help
to structure it efficiently.

Catalog layout
==============

A well-structured product catalog includes a :ref:`top bar <ecommerce-top-bar>`, a
:ref:`side panel <ecommerce-side-panel>` and a
:ref:`product listing area <ecommerce-product-listing>`. With Odoo, you can
:ref:`customize the layout <ecommerce-customize-layout>` and use
:ref:`additional features <ecommerce-additional-features>` according to your needs.

.. _ecommerce-top-bar:

Top bar
-------

The top bar can include a search bar, a currency selection,
:ref:`sort-by and display options <ecommerce-sort-by-and-display-option>` and
:ref:`category quick access <ecommerce-categories>`.

.. _ecommerce-sort-by-and-display-option:

Sort-by search and display options
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

From the main shop page, click :menuselection:`Edit --> Customize`, toggle the
:guilabel:`Search Bar`, display :ref:`categories <ecommerce-categories>` or
:ref:`attributes <ecommerce-attributes>`, and enable or disable the :guilabel:`Sort-By`
as well as the :ref:`Layout <ecommerce-layout>` buttons in the :guilabel:`Top Bar`.

When enabling the :guilabel:`Sort-by` button, choose a :guilabel:`Default Sort`:

- :guilabel:`None`
- :guilabel:`Featured`
- :guilabel:`Newest Arrivals`
- :guilabel:`Name (A-Z)`
- :guilabel:`Price - Low to High`
- :guilabel:`Price - High to Low`

The default sort applies to *all* :ref:`categories <ecommerce-categories>`.

.. tip::
   If you don't want to display a top bar or :ref:`side panel <ecommerce-side-panel>`, you can
   disable all related options in :guilabel:`Edit` mode.

.. _ecommerce-side-panel:

Side panel
----------

The side panel provides advanced filtering tools to organize your product categories.
To further categorize the catalog, you can activate various filters such as
:ref:`attribute <ecommerce-attributes>` filter.

.. _ecommerce-categories:

Product categorization in catalog
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In Odoo, there is a specific category model for the eCommerce. Visitors can use it
to view all products under the category they select.

To use eCommerce categories, go to :menuselection:`Website --> eCommerce --> Products`, select
the product you wish to modify, click on the :guilabel:`Sales` tab, navigate to the
:guilabel:`ECOMMERCE SHOP` section, and select the :guilabel:`Categories` it belongs to.

.. image:: catalog/catalog-categories.png
   :alt: eCommerce categories under the "Sales" tab

.. note::
   A single product can belong to multiple eCommerce categories.

Once the categories are configured, go to the main shop page and click
:menuselection:`Edit --> Customize`. In the :guilabel:`Categories` option, you can either enable
a menu on the :guilabel:`Left`, on the :guilabel:`Top`, or both. If you select the :guilabel:`Left`
category, the option :guilabel:`Collapsable Category Recursive` appears, allowing you to collapse
the :guilabel:`Left` category menu.

.. image:: catalog/catalog-panel-categories.png
   :alt: Categories options for your eCommerce website

.. seealso::
   :doc:`../products`

.. tip::
   - It is also possible to toggle the :guilabel:`Collapsable sidebar` to enable to fold the
     side bar in general.
   - You can also add a :guilabel:`Datepicker` option to display a date range calendar to check the
     availability of rental products over a specific period. The :doc:`Rental app
     <../../../sales/rental>` must be installed to use this feature.

.. _ecommerce-attributes:

Attributes
~~~~~~~~~~

Attributes refer to characteristics of a product, such as color or material, whereas
variants are the different combinations of attributes. To configure attributes and variants, go to
:menuselection:`Website --> eCommerce --> Products`, select a product, and click the
:guilabel:`Attributes & Variants` tab. Add as many attributes as desired.

.. seealso::
   - :doc:`../../../sales/sales/products_prices/products/variants`

.. image:: catalog/catalog-attributes.png
   :alt: Attributes and variants of your product

To enable attribute filtering, go to your main shop page, click the :menuselection:`Edit -->
Customize` tab, and next to :guilabel:`Attributes`, select either :guilabel:`Left` and/or display a
:icon:`fa-sliders` (:guilabel:`dropdown toggle`) icon at the :guilabel:`Top` allowing customers to
filter products based on their attributes.
When enabling :guilabel:`Attributes`, more options will become available:

  - :guilabel:`Price Filter`: Toggle the switch to display a :guilabel:`Price Range` bar, which
    allows customers to filter products according to a specific price range by dragging adjustable
    handles.
  - :guilabel:`Product Tags Filter`: Toggle the switch to display the :guilabel:`Product Tags` on
    the product page and allow customers to filter products using those tags by going to the
    :guilabel:`Tags` section in the left column.

.. note::
   - If you want to use tags on your ecommerce, go to :menuselection:`eCommerce --> Product Tags`
     and click :guilabel:`New`. On the product tags form in the :guilabel:`Product Templates` tab,
     add the products to link to the given tag. You can also add product variants in the
     :guilabel:`Product Variants` tab. You can find a summary of all selected products in
     the :guilabel:`All Products` tab.
   - Price filter work independently from attributes and, therefore, can be enabled on its own
     if desired.


.. tip::
   You can use attribute filters even if you do not work with product variants. When adding
   attributes to your products, make sure only to specify *one* value per attribute. Odoo does not
   create variants if no combination is possible.

.. _ecommerce-product-listing:

Product listing area
--------------------

.. _ecommerce-layout:

You can customize the product listing layout using the website builder.

.. important::
   Editing the layout of the category page is global; editing one category layout affects *all*
   category pages.

To do so, go to a :menuselection:`Category page --> Edit --> Customize`. Here, you can choose
the :ref:`layout <ecommerce-sort-by-and-display-option>`. You can choose between :guilabel:`Grid`
and :guilabel:`List` view.

Use the following options to further adjust the layout:

   - :guilabel:`Size`: Set the number of products displayed per page and line.
   - :guilabel:`Gap`: Define the gap between the products.
   - :guilabel:`Style`: Select :guilabel:`Default`, :guilabel:`Cards`, :guilabel:`Thumbnails`, or
     :guilabel:`Grid`.
   - :guilabel:`Image Size`: Choose the aspect ratio for the product images:
     :guilabel:`Landscape (4/3)`, :guilabel:`Default (1/1)`, :guilabel:`Portrait (4/5)`, or
     :guilabel:`Vertical (2/3)`. You can also adjust the display by changing the :guilabel:`Fill`
     options to best fit your design preferences.

Toggle the :guilabel:`Prod. Desc.` switch to display the product description below the product's
name.

.. image:: catalog/catalog-category-layout.png
   :alt: Layout options of the category pages.

.. tip::
   You can choose the size of the grid, but be aware that displaying too many products may affect
   performance and page loading speed.

In addition, you can manually edit the catalog's order of a product by going to the main shop
page and clicking the product. Under the :guilabel:`Product` section of the
:guilabel:`Customize` section, you can rearrange the order by using the arrows. `<<` `>>` move
the product to the extreme right or left, and `<` `>` move the product by one row to the
right or left. It is also possible to change the catalog's order of products in
:menuselection:`Website --> eCommerce --> Products` and drag-and-dropping the products within the
list.

.. image:: catalog/catalog-reorder.png
   :alt: Product rearrangement in the catalog

Product highlight
~~~~~~~~~~~~~~~~~

You can highlight products to make them more visible on the category or product page. On the page of
your choice, go to :menuselection:`Edit --> Customize` and click the product to highlight. In the
:guilabel:`Product` section, you can choose the size of the product image by clicking the grid,
and you can also add a ribbon or :guilabel:`Badge`. This displays a banner across the product's
image, such as:

- :guilabel:`Sale`
- :guilabel:`Sold out`
- :guilabel:`Out of stock`
- :guilabel:`New`

Alternatively, you can activate the :doc:`developer mode <../../../general/developer_mode>` on the
product's template, and under the :guilabel:`Sales` tab, change or create the ribbon from the
:guilabel:`Ribbon` field.

.. note::
   The :doc:`developer mode <../../../general/developer_mode>` is only intended for experienced
   users who wish to have access to advanced tools. Using the developer mode is *not*
   recommended for regular users.

.. image:: catalog/catalog-product-highlight.png
   :alt: Ribbon highlight

.. _ecommerce-customize-layout:

Customize overall layout
------------------------

You can use building blocks to add content on the category page, with a variety of blocks
ranging from :guilabel:`Structure` to :guilabel:`Dynamic Content`. When dragging and dropping
blocks, defined areas will be highlighted.

You can add headers and footers either for the whole product catalog or for a given category. In the
latter case, the header and footer appear **only** when filtering on this specific category.

 .. image:: catalog/catalog-header-footer.png
    :alt: Place building block in the header or footer.

.. tip::
   - Adding content to an eCommerce category page helps improving the SEO strategy. Using
     keywords linked to the products or the eCommerce categories improves organic traffic.
     Additionally, each category has its own specific URL that can be pointed to and is indexed by
     search engines.
   - eCommerce categories can also be added as mega menu items for quick access. Refer to the
     :ref:`Menu editor <website/header_footer/menu-editor>` documentation.

.. _ecommerce-additional-features:

Additional features
-------------------

You can access and enable additional feature buttons such as a :guilabel:`Add to cart` or
:guilabel:`Wishlist` button or a :guilabel:`comparison list`. To do so, go to the main shop page,
and at the end of the :guilabel:`Products Page` category, click the desired feature buttons.
All three buttons appear when hovering the mouse over a product's image.

- :icon:`fa-shopping-cart` (:guilabel:`Add to cart`): adds a button to
  :doc:`add the product to the cart <../checkout>`;
- :icon:`fa-exchange` (:guilabel:`Compare`): adds a button to compare products based on
  their price, variant, etc.;
- :icon:`fa-heart-o` (:guilabel:`Wishlist`): adds a button to wishlist the product.

.. image:: catalog/catalog-buttons.png
   :alt: Feature buttons for add to cart, comparison list, and wishlist

.. image:: catalog/catalog-features.png
   :alt: Appearance of buttons when hoovering over the mouse

.. tip::
   Go to :menuselection:`Website --> Configuration --> Settings`, scroll down to the
   :guilabel:`Privacy` section to restrict :guilabel:`Ecommerce Access` to :guilabel:`Logged in
   users` or to grant access for :guilabel:`All users`. Tick the
   :guilabel:`Shared Customer Accounts` checkbox to allow access to all websites with a single
   account.

.. seealso::
   :doc:`Products <../products>`
