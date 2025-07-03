=======
Catalog
=======

The eCommerce catalog displays products for customers to browse.
It is organized using product categories, available options, sorting, and navigation paths.
The ecommerce catalog basically is the shop page of your website.

Ecommerce access restrictions
=============================

First of all, you can adapt the access rights for your ecommerce shop. To do so, go to
:menuselection:`Website --> Configuration --> Settings`, scroll down to the
:guilabel:`Privacy` section to restrict :guilabel:`Ecommerce Access` to :guilabel:`Logged in
users` or to grant access for :guilabel:`All users`. Tick the
:guilabel:`Shared Customer Accounts` checkbox to allow access to all websites with a single
account.


Catalog layout
==============

The product catalog includes a :ref:`top bar <ecommerce/catalog/top-bar>`, a
:ref:`side panel <ecommerce/catalog/side-panel>` and a
:ref:`product listing area <ecommerce/catalog/product-listing>`. With Odoo, you can
:ref:`customize the layout <ecommerce/catalog/customize-layout>` and use
:ref:`additional features <ecommerce/catalog/additional-features>` according to your needs.

You can customize the catalog using the website editor. To do so, click :guilabel:`Edit` in the
upper-right corner, and then :guilabel:`Customize`.

.. _ecommerce/catalog/top-bar:

Top bar
-------

The top bar can include a search bar, a currency selector,
:ref:`sort-by and display options <ecommerce/catalog/sort-by-and-display-option>` and
:ref:`category quick access <ecommerce/catalog/categories>`.

.. _ecommerce/catalog/sort-by-and-display-option:

Sort-by search and display options
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can toggle the :guilabel:`Search Bar`, display :ref:`categories <ecommerce/catalog/categories>`
and/or :ref:`attributes <ecommerce/catalog/attributes>`, and enable or disable the
:guilabel:`Sort-By` as well as the :ref:`Layout <ecommerce/catalog/layout>` buttons in
the :guilabel:`Top Bar`.

By default, the :guilabel:`Sort-by` button is toggled in the top bar. You can choose between the
following :guilabel:`Default Sort` options:

- :guilabel:`None`
- :guilabel:`Featured`
- :guilabel:`Newest Arrivals`
- :guilabel:`Name (A-Z)`
- :guilabel:`Price - Low to High`
- :guilabel:`Price - High to Low`

The default sort applies to *all* :ref:`categories <ecommerce/catalog/categories>`.

.. tip::
   If you don't want to display a top bar or :ref:`side panel <ecommerce/catalog/side-panel>`,
   you can disable all related options in the website editor.

.. _ecommerce/catalog/side-panel:

Side panel
----------

The side panel provides advanced filtering tools to organize your product categories.
To further categorize the catalog, you can activate various filters such as
:ref:`attribute <ecommerce/catalog/attributes>` filter.

Above that, you can add a :guilabel:`Datepicker` option to display a date range calendar to check
the availability of rental products over a specific period. The :doc:`Rental app
<../../../sales/rental>` must be installed to use this feature.

.. tip::
   To use a price or tags filter, you have to enable :ref:`attributes
   <ecommerce/catalog/attributes>` first.

.. _ecommerce/catalog/categories:

Product categorization in catalog
---------------------------------

eCommerce categories are used to organize products into groups, making it easier for customers
to browse the online store.

To create eCommerce categories, go to :menuselection:`Website --> eCommerce --> eCommerce Categories`
Click :guilabel:`New`. On the category form, add a :guilabel:`Name`. Optionally add the
:guilabel:`Parent Category` and the related :guilabel:`Website`. Write a :guilabel:`Category
Description`, if needed.

To use eCommerce categories, go to :menuselection:`Website --> eCommerce --> Products`, select
the product you wish to modify, click on the :guilabel:`Sales` tab, navigate to the
:guilabel:`Ecommerce shop` section, and select the :guilabel:`Categories` it belongs to.

.. note::
   A single product can belong to multiple eCommerce categories.

Once the categories are configured, go to the main shop page and click
:guilabel:`Edit` and navigate to the :guilabel:`Customize` tab. In the :guilabel:`Categories`
option, you can either enable
a menu on the :guilabel:`Left`, i.e. on the :ref:`side panel <ecommerce/catalog/side-panel>`,
on the :guilabel:`Top`, i.e. on the :ref:`top bar <ecommerce/catalog/top-bar>` or both.
If you select the :guilabel:`Left`
category, the option :guilabel:`Collapsable Category Recursive` appears, allowing you to collapse
the :guilabel:`Left` category menu.

.. image:: catalog/catalog-panel-categories.png
   :alt: Categories options for your eCommerce website

.. seealso::
   :doc:`../products`

.. tip::
   - It is also possible to toggle the :guilabel:`Collapsable sidebar` switch to make the
     categories in the side panel manually collapsible.
   - You can also add a :guilabel:`Datepicker` option to display a date range calendar to check the
     availability of rental products over a specific period. The :doc:`Rental app
     <../../../sales/rental>` must be installed to use this feature.

.. _ecommerce/catalog/attributes:

Attributes
~~~~~~~~~~

Attributes refer to characteristics of a product, such as color or material, whereas
variants are the different combinations of attributes. To configure attributes and variants, go to
:menuselection:`Website --> eCommerce --> Products`, select a product, and click the
:guilabel:`Attributes & Variants` tab. Add as many attributes as desired.

.. seealso::
   :doc:`../../../sales/sales/products_prices/products/variants`

.. image:: catalog/catalog-attributes.png
   :alt: Attributes and variants of your product

To enable attribute filtering, go to your main shop page, then, in the website editor, set
the :guilabel:`Attributes` field to :guilabel:`Left`
(ref:`side panel <ecommerce/catalog/side-panel>`) and/or :guilabel:`Top`
(:ref:`top bar <ecommerce/catalog/top-bar>`).

.. tip::
   When attribute filtering is enabled in the top bar, customers must click the :icon:`fa-sliders`
   (:guilabel:`dropdown toggle`) button to access it.

When enabling :guilabel:`Attributes`, more options become available:

  - :guilabel:`Price Filter`: Toggle the switch to display a :guilabel:`Price Range` bar, which
    allows customers to filter products according to a specific price range by dragging adjustable
    handles.
  - :guilabel:`Product Tags Filter`: Toggle the switch to display the :guilabel:`Product Tags` on
    the shop page and allow customers to filter products using those tags by going to the
    :guilabel:`Tags` section in the left column.

.. tip::
   - If you want to use tags on your ecommerce, go to :menuselection:`eCommerce --> Product Tags`
     and click :guilabel:`New`. On the product tags form in the :guilabel:`Product Templates` tab,
     add the products to link to the given tag. You can also add product variants in the
     :guilabel:`Product Variants` tab. You can find a summary of all selected products in
     the :guilabel:`All Products` tab.
   - Price filtering works independently from attributes and, therefore, can be enabled on its own
     if desired.

.. _ecommerce/catalog/product-listing:

Product listing area
--------------------

.. _ecommerce/catalog/layout:

You can customize the product listing layout using the website editor. Above that, you can
change the layout for individual category pages. To do so, navigate to the desired category page
and then open the website editor.

.. tip::
   You can also customize the individual :ref:`product pages <ecommerce/products/product-form>`.


In the website editor, you can choose
the :ref:`layout <ecommerce/catalog/sort-by-and-display-option>`. You can set the default layout
to either :guilabel:`Grid` and :guilabel:`List` view.

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

.. tip::
   You can choose the size of the grid, but be aware that displaying too many products may affect
   performance and page loading speed.

In addition, you can manually change a product’s position in the catalog. Go to the main shop
page, click the product, then, in the :guilabel:`Product` section of the
:guilabel:`Customize` tab, you can reorder the products by using the arrows. `<<` `>>` move
the product to the extreme right or left, and `<` `>` move the product by one row to the
right or left. It is also possible to change the products' positions in the catalog under
:menuselection:`Website --> eCommerce --> Products` and by drag-and-dropping the products within the
list.

.. image:: catalog/catalog-reorder.png
   :alt: Product rearrangement in the catalog

Product highlight
~~~~~~~~~~~~~~~~~

You can highlight products to make them more visible in the catalog. To do so, go
to :menuselection:`Edit --> Customize` and click the product to highlight. In the
:guilabel:`Product` section, you can choose the size of the product image by clicking the grid,
and you can also add :guilabel:`Ribbon`. This displays a banner across the product's
image, such as :guilabel:`Sale`, :guilabel:`Sold out`, :guilabel:`Out of stock` or :guilabel:`New`.


.. tip::
   Alternatively, you can activate the :doc:`developer mode <../../../general/developer_mode>`
   on the product's template, and under the :guilabel:`Sales` tab, change or create the ribbon
   from the :guilabel:`Ribbon` field.


.. image:: catalog/catalog-product-highlight.png
   :alt: Ribbon highlight

.. _ecommerce/catalog/customize-layout:

Shop and category page design
-----------------------------

You can use :doc:`building blocks <../../website/web_design/building_blocks>` to add content on
the category page.

You can customize the top and/or bottom section of the catalog, either for the whole product catalog
or for a given category. In the latter case, it appears *only* when filtering on this specific
category. To do so, move the block to the far top or bottom section to display it for the whole
catalog or to the area beneath the category's name at the top or beneath the product lists to
display it when filtering on this category.

 .. image:: catalog/catalog-header-footer.png
    :alt: Place building block in the header or footer.

.. tip::
   - Adding content to an eCommerce category page helps improving the
     :doc:`SEO <../../website/pages/seo>` strategy. Using
     keywords linked to the products or the eCommerce categories improves organic traffic.
     Additionally, each category has its own specific URL that can be pointed to and is indexed by
     search engines.
   - eCommerce categories can also be added as mega menu items for quick access. Refer to the
     :ref:`Menu editor <website/header_footer/menu-editor>` documentation.

.. _ecommerce/catalog/additional-features:

Additional features
===================

You can access and enable additional feature buttons such as a :guilabel:`Add to cart` or
:guilabel:`Wishlist` button or a :guilabel:`Comparison list`. To do so, go to the main shop page,
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

.. seealso::
   :doc:`Products <../products>`
