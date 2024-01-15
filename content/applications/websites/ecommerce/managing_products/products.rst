==================
Product management
==================

Odoo allows you to create, import, and manage your products' pages all within the **Website** app.

Add products to the catalog
===========================

To add a product to your catalog, you can either do it in:

- From anywhere on your website, click :menuselection:`+ New --> Product`. Enter the name of your
  product, and :guilabel:`Save`;
- :menuselection:`Website --> eCommerce --> Products --> Create`;
- or by :ref:`importing data <import-data>` using XLSX or CSV files. To do so, go to
  :menuselection:`Website --> eCommerce --> Products`. Click on :guilabel:`Favorites` and
  :ref:`Import records <import-data>`.

.. seealso::
   - :doc:`../managing_products/catalog`
   - :doc:`../../../sales/sales/products_prices/products/import`
   - :doc:`Product-related documentation <../../../sales/sales>`

Publish
-------

Upon creation, products are defaulted as :guilabel:`Unpublished` in your eCommerce catalog. To make
a product visible to visitors, go to :menuselection:`Website --> Site --> Homepage`, click on your
**main shop** page, select the product, and enable it as :guilabel:`Published` in the top-right
corner.

.. tip::
   To publish **large batches** of products, the most convenient fashion is to go to
   :menuselection:`Website --> eCommerce --> Products`. Here, remove the :guilabel:`Published`
   filter by clicking on the :guilabel:`x` right to it, and then select the :guilabel:`List` view.
   Next, click the :guilabel:`dropdown toggle` button (located right below the :guilabel:`List`
   button) and enable :guilabel:`Is published`. Click the :guilabel:`Is Published` column to
   re-order it either by **published** or **unpublished** products. Finally, select the products to
   publish by ticking their box on the extreme-right, and tick any box of the selected products in
   the :guilabel:`Is Published` column to publish them all.

.. image:: products/products-buttons.png
   :align: center
   :alt: List and dropdown toggle buttons

Product page design
===================

Once a product is created, you can access its **product page** through the :guilabel:`Shop` page by
clicking on the product, and then clicking :guilabel:`Edit`. Here, you can change the page's
**additional functions**, **layout**, **add content**, etc. Note that **enabled functions** apply to
*all* product pages.

.. _ecommerce-functions:

Additional functions
--------------------

In the **website builder** window, click :guilabel:`Customize` to enable additional functions:

- :guilabel:`Customers: Rating` allows customers to submit :ref:`product reviews <product-reviews>`;
  :guilabel:`Share` adds social media and email icon buttons to share the product via those
  channels;
- :guilabel:`Select Quantity`: if enabled, allows to choose the quantity added to cart;
- :guilabel:`Tax Indication`: notifies if the price is **VAT included** or **excluded**;
- :guilabel:`Variants`: shows all possible
  :doc:`variants </applications/sales/sales/products_prices/products/variants>` of the product as a
  :guilabel:`Products List`; :guilabel:`Options` as selectable options to compose the variant
  yourself;
- :guilabel:`Cart`: :guilabel:`Buy Now` adds a :ref:`checkout button <cart/buy-now>` taking the
  customer directly to the checkout page; :guilabel:`Wishlist` allows to add the product to a
  wishlist;
- :guilabel:`Specification`: allows you to select where the :guilabel:`Specifications` section is
  displayed. This option displays a list of all variant attributes and values of a product, but only
  works for products *with* variants.

.. note::
   - To allow **wishlists**, the option must be enabled in :menuselection:`Website --> Configuration
     --> Settings --> Shop - Products`;
   - To access the :guilabel:`Variants` options, the :doc:`Product Variants
     <../../../sales/sales/products_prices/products/variants>` option must first be enabled under
     :menuselection:`Website --> Configuration --> Settings --> Shop - Products`.

Layout
------

Within the same :guilabel:`Customize` tab as the :ref:`functions <ecommerce-functions>`, the layout
configuration can be changed according to your needs.

- :guilabel:`Images Width`: changes the width of the product images displayed on the page;
- :guilabel:`Layout`: the :guilabel:`Carousel` layout displays a large, main image with smaller ones
  underneath; whereas the :guilabel:`Grid` displays four images in a square layout (see pictures
  below);
- :guilabel:`Image Zoom`: choose which image zooms are available, either
  :guilabel:`Pop-up on Click`, when hovering over the image (:guilabel:`Magnifier on hover`), on
  :guilabel:`Both`, or :guilabel:`None`;
- :guilabel:`Thumbnails`: decide how the thumbnails should be aligned, either **vertically**
  (:guilabel:`Left`), or **horizontally** (:guilabel:`Right`);
- :guilabel:`Main Image`: click :guilabel:`Replace` to change the product's main image;
- :guilabel:`Extra Images`: click :guilabel:`Add` or :guilabel:`Remove all` to add or remove extra
  product images. You can also add images and videos via **URL**.

.. note::
   Images must either be in PNG or JPG format. To trigger the zoom, the image has to be bigger than
   1024x1024.

.. image:: products/products-layout.png
   :align: center
   :alt: Product images layout

Add content
-----------

You can use **building blocks** (:menuselection:`Edit --> Blocks`) to add content to your product
page. These blocks can be used to add extra text and picture galleries, features such as
:guilabel:`Call to Actions`, :guilabel:`Comparisons`, etc.

Depending on *where* you drop the **building block**, it may be available either on the product page
*only*, or on the *whole* website. **Building blocks** dropped at the very top or very bottom of the
page are available on the *whole* website, where **building blocks** put underneath the product
description are only displayed on the *product* page *(see image below)*.

.. image:: products/products-blocks.png
   :align: center
   :alt: Building blocks on product page

Download link
-------------

To add a downloadable file (ex.: user's manual, notice of use, etc.) on the product page, drag and
drop a :guilabel:`Text` block from :menuselection:`Edit --> Blocks` on the page. Once placed, click
within the :guilabel:`Text` block, and under the :guilabel:`Inline Text` section, select either
:menuselection:`Insert Media --> Documents` or :guilabel:`Insert or edit link` and enter the URL in
the :guilabel:`Your URL` field.

.. note::
   The difference with :ref:`digital files <ecommerce-digital-file>` is that digital files can only
   be downloaded *after* checkout.

.. image:: products/products-media.png
   :align: center
   :alt: Media and link buttons

.. _ecommerce-digital-file:

Digital files
-------------

Should your product be sold with a certificate, manual user, or any other relevant document, it is
possible to add a download link for customers at the end of the checkout. To do that, first enable
:guilabel:`Digital Content` under :menuselection:`Website --> Configuration --> Settings --> Shop -
Checkout Process`. Then, on the **product's template**, click on :menuselection:`More --> Digital
Files` and :guilabel:`Create` a new file.

.. image:: products/products-digital-files.png
   :align: center
   :alt: Digital Files menu

For the configuration:

- :guilabel:`Name`: the name of your file;
- :guilabel:`Type:` select if it is either a **file** or a **URL**. Accordingly, you either have a
  :guilabel:`File Content (base64)` field to upload your file, or a :guilabel:`URL` field to enter
  your URL.
- :guilabel:`Website`: the website on which that file is *available*. If you want it available for
  *all* websites, leave it empty.

The file is then available after checkout in the **purchase order** section found on the customer's
portal.

Product configuration
=====================

Multiple languages
------------------

If multiple languages are available on your website and you wish to have the product's information
translated, it is necessary to encode this translated information in the **product's template**.
Fields with multiple languages available are identifiable by their abbreviation language (ex.
:abbr:`EN (English)`) next to their field.

.. image:: products/products-field-translation.png
   :align: center
   :alt: Field translation

The **eCommerce-related** fields to translate are:

- :guilabel:`Product name`;
- :guilabel:`Out-of-Stock Message` (under the :guilabel:`Sales` tab);
- :guilabel:`Sales Description` (under the :guilabel:`Sales` tab);

.. note::
   Having untranslated content on a web page may be detrimental to the user experience and
   :doc:`SEO <../../../websites/website/pages/seo>`.
.. note::
   To check the language(s) of your website, go to :menuselection:`Website --> Configuration -->
   Settings --> Website Info section`.

.. seealso::
   - :doc:`../../../websites/website/pages/seo`

Website availability
--------------------

A product can be set available on either *one* or *all* websites, but it is not possible to select
*some* websites and not others. To define a product's availability, go to :menuselection:`Website
--> eCommerce --> Products`, select your product, and in the :guilabel:`Sales` tab, click the
:guilabel:`Website` you wish the product to be available on. Leave the field empty for the products
to be available on *all* websites.

Stock management
================

Under the :menuselection:`Website --> Configuration --> Settings --> Shop - Products`, you can
enable and configure inventory management options.

.. important::
   To display the stock level on the product page, the :guilabel:`Product Type` on the **product's
   form** must be set to :guilabel:`Storable` (only available when the **Inventory** app is
   installed).

Inventory
---------

In the :guilabel:`Inventory Defaults` sub-section, you can select the eCommerce selling strategy of
products:

- :guilabel:`Warehouse`: if you have multiple warehouses, you can define the warehouse associated to
  your website. If you have multiple websites, you can select a different one per website;
- :guilabel:`Out-of-Stock (Continue Selling)`: enabling it allows customers to continue placing
  orders even when the product is **out-of-stock**.
  Leave it  unchecked to **prevent orders**;
- :guilabel:`Show Available Qty`: enabling it displays the available quantity left under a specified
  threshold on the product page. The available quantity is calculated based on the 'On hand'
  quantity minus the quantity already reserved for outgoing transfers.

.. seealso::
   :ref:`Allow only selected customers to buy <cart/prevent-sale>`

Selling as kit
--------------

If you are selling non-prepackaged kits (i.e., the kits are made of individual products), we
recommend you read the related documentation to keep track of your stock.

.. seealso::
   :doc:`../../../inventory_and_mrp/manufacturing/management/kit_shipping`

Product comparison
==================

You can enable a **product comparison tool** for your eCommerce by going to
:menuselection:`Website --> Configuration --> Settings --> Shop - Products`, and ticking
:guilabel:`Product Comparison Tool`. This tool allows to save products' **specifications** and
compare them against each other on a single page.

On the product page, scroll down to the :guilabel:`Specifications` section and click
:guilabel:`Compare`. Repeat the same process for all products you wish to compare. Then, click the
:guilabel:`Compare` button of the pop-up window at the bottom of the page to reach the comparison
summary.

.. note::
   The :guilabel:`Product Comparison Tool` can only be used if :doc:`attributes <variants>` are set
   on the **product's template**.

.. image:: products/products-compare.png
   :align: center
   :alt: Product comparison window
