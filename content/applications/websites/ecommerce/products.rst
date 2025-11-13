:show-content:

========
Products
========

**Odoo eCommerce** allows you to :ref:`add products <ecommerce/products/add-products>` and manage
your :ref:`product pages <ecommerce/products/product-page>` directly from the Website app. It also
allows you to add :ref:`digital files <ecommerce/products/digital-files>`, :ref:`translate
<ecommerce/products/translation>` the product page content, and :ref:`manage the stock
<ecommerce/products/stock-management>`.

.. _ecommerce/products/add-products:

Add products
============

.. _ecommerce/products/create-products:

Create products
---------------

To create a product from the frontend, click :guilabel:`+ New` in the top-right corner, then
:guilabel:`Product`. Enter the :guilabel:`Product Name`, :guilabel:`Sales Price`, the default
:guilabel:`Customer Taxes` for local transactions, and :guilabel:`Save`. You can then update the
product's details, add an image, and :ref:`customize <ecommerce/products/customization>` the product
page. When you :guilabel:`Save`, the product page is automatically published.

.. tip::
   - You can also create a product from the backend by going to
     :menuselection:`Website --> eCommerce --> Products` and clicking :guilabel:`New`.
   - Products created from the frontend are automatically :ref:`published <website/pages/un-publish-page>`,
     while products created from the backend are not. To publish a product, click the
     :guilabel:`Go to Website` smart button to access the product page, then toggle the switch from
     :guilabel:`Unpublished` to :guilabel:`Published`.

.. seealso::
   - :doc:`Create new products using the Barcode Lookup database
     </applications/inventory_and_mrp/barcode/setup/barcodelookup>`.
   - :doc:`Configure the Gelato connector in Odoo to synchronize the product catalog and automate
     order fulfilment with Gelato </applications/sales/sales/gelato>`.

.. _ecommerce/products/import-products:

Import products
---------------

To :ref:`import product data <essentials/export_import_data/import-data>` using XLSX or CSV files,
go to :menuselection:`Website --> eCommerce --> Products`, click the :icon:`fa-cog`
(:guilabel:`gear`) icon, then :ref:`Import records <essentials/export_import_data/import-data>`.

.. tip::
   To publish **large batches** of products, follow these steps:

   #. Go to :menuselection:`Website --> eCommerce --> Products`.
   #. Remove the :guilabel:`Published` filter and switch to the :guilabel:`List` view.
   #. Click the :icon:`fa-sliders` (:guilabel:`dropdown toggle`) icon and enable
      :guilabel:`Is published`.
   #. Click the :guilabel:`Is Published` column to re-order it by **published** or **unpublished**
      products.
   #. Select the products to publish by ticking their box.
   #. In the :guilabel:`Is Published` column, tick the box for any of the selected products, then
      :guilabel:`Confirm` to publish them.

.. _ecommerce/products/product-page:

Product page customization
==========================

.. _ecommerce/products/customization:

Product information
-------------------
.. _ecommerce/products/product-form:

To add general information about a product, navigate to :menuselection:`Website -->
eCommerce --> Products` and select the product. You can configure the product page from the form
by adding :ref:`variants <ecommerce/categories_variants/product-variants>`, :ref:`digital documents
<ecommerce/products/digital-files>`, or :ref:`translating <ecommerce/products/translation>` content.

.. _ecommerce/products/description:

You can also add an e-commerce-specific product description to be displayed below
the product name on the product's page. To do so, go to the :guilabel:`Sales`
tab, scroll down to the :guilabel:`Ecommerce description` section, and add a description. Use Odoo's
:doc:`rich-text editor <../../essentials/html_editor>` features to personalize the content.

.. tip::
   Click the :guilabel:`Go to Website` smart button to return to the frontend product's page.

.. _ecommerce/products/product-presentation:

Product presentation
--------------------

To customize the product presentation on the website, go to the :guilabel:`Shop` and click on the
product. Click :guilabel:`Edit` to :ref:`customize <ecommerce/products/customization>` the page,
:ref:`edit its images <ecommerce/products/image-customization>` or add
:doc:`building blocks <../../websites/website/web_design/building_blocks>`.

.. tip::
   - When dragging and dropping a building block on the product page, placing it above or below
     the top or bottom blue lines makes it visible on all product pages.
   - You can edit any text on your website by clicking on it while in :guilabel:`Edit` mode.

Use the :guilabel:`Customize` tab to modify the page layout or add features:

- :guilabel:`Terms and Conditions`: Toggle the switch to display a link to your
  :doc:`terms and conditions <../../finance/accounting/customer_invoices/terms_conditions>` on the
  product page.

- :guilabel:`Customers`:

   - :guilabel:`Rating`: Allow logged-in portal users to submit product reviews by clicking the
     stars below the product's name and sharing their experience in the :guilabel:`Customer Reviews`
     section at the bottom. Reviews are visible from the product page using the :icon:`fa-plus`
     (:guilabel:`plus`) icon next to the :guilabel:`Customer Reviews` heading or from the product
     form's chatter. To restrict visibility to internal employees, toggle the :guilabel:`Public`
     switch next to the review comment.
   - :guilabel:`Share`: Add social media and email icon buttons allowing customers to share the
     product through those channels.

- :guilabel:`Quantity`: Toggle the switch to allow customers to select the product quantity
  they want to purchase.

- :guilabel:`Tax Indication`: Toggle the switch to indicate if the price is
  :ref:`VAT included or excluded <ecommerce/prices/taxes>`.

- :guilabel:`Variants`: Show all possible product :ref:`variants
  <ecommerce/categories_variants/product-variants>` vertically as a :guilabel:`Products List`
  or horizontally as selectable :guilabel:`Options` to compose the variant yourself.

- :guilabel:`Product Tags`: Toggle the switch to display the :guilabel:`Product Template Tags` on
  the product page and allow customers to filter products using those tags.

- :guilabel:`Cart`:

   - :guilabel:`Buy Now`: Add a :icon:`fa-bolt` :guilabel:`Buy Now` option to take the customer to
     the checkout page.
   - :guilabel:`Wishlist`: Add an :icon:`fa-heart-o` :guilabel:`Add to wishlist` option allowing
     logged-in customers to save products in a :ref:`wishlist
     <ecommerce/products/additional_features/wishlists>`.
   - :guilabel:`Compare`: Add a :icon:`fa-exchange` :guilabel:`Compare` option, allowing customers
     to :ref:`compare products <ecommerce/products/additional_features/product-comparison>`
     based on their attributes.

- :guilabel:`Specification`: Select :guilabel:`Bottom of Page` to display a detailed list of the
  attributes and their values available for the product. This option only works for products with
  :ref:`variants <ecommerce/categories_variants/product-variants>` if the
  :ref:`Product comparison tool <ecommerce/products/additional_features/product-comparison>` is
  enabled in the Website :guilabel:`Settings`.

.. note::
   - :guilabel:`Product Variants` must be enabled by going to :menuselection:`Website -->
     Configuration --> Settings`, in the :guilabel:`eCommerce` section.
   - Enabled functions apply to all product pages.
   - Products with single values for their attributes do not generate variants but are still
     displayed in the :guilabel:`Product Specifications`.

.. _ecommerce/products/image-customization:

Product images and videos
-------------------------

To add more media items, such as images and videos, navigate to the
:ref:`product form <ecommerce/products/product-form>`, then go to the :guilabel:`Sales` tab
and click :guilabel:`Add Media` under the :guilabel:`Ecommerce Media` section. In the
:guilabel:`Select a media` pop-up window, go to the :guilabel:`Images` tab, select an image,
click :guilabel:`Upload an image` or :guilabel:`Add URL`. Or navigate to the :guilabel:`Videos` tab,
paste a video URL or embed code. Once done, click :guilabel:`Add`.

To customize the images or videos, go to the e-commerce product page, click :guilabel:`Edit`
and select the relevant media. In the :guilabel:`Customize` tab, use the following features:

- :guilabel:`Images Width`: Changes the width of the product images displayed on the page.
- :guilabel:`Layout`: The :guilabel:`Carousel` layout allows customers to navigate from one image to
  the next using the :icon:`fa-angle-left` (:guilabel:`left arrow`) or :icon:`fa-angle-right`
  (:guilabel:`right arrow`); whereas the :guilabel:`Grid` displays four images in a square layout.
- :guilabel:`Image Zoom`: Select the zoom effect for product images: :guilabel:`Magnifier on hover`
  :guilabel:`Pop-up on Click`, :guilabel:`Both`, or :guilabel:`None`.
- :guilabel:`Thumbnails`: Align thumbnails on the :icon:`fa-long-arrow-left` (:guilabel:`Left`)
  or at
  the :icon:`fa-long-arrow-down` (:guilabel:`Bottom`).
- :guilabel:`Main Image`: Click :guilabel:`Replace` to change the product's main image.
- :guilabel:`Extra Images`: :guilabel:`Add` more extra images or videos (including via URL) or
  :guilabel:`Remove all`.

.. _ecommerce/products/digital-files:

Digital files
=============

You can link digital files like certificates, eBooks, or user manuals to the products. These
documents are available :ref:`before payment <ecommerce-products-digital-files-before-payment>` on
the product page or in the customer portal
:ref:`after checkout <ecommerce-products-digital-files-after-payment>`.

To link a digital file to a product, go to the :ref:`product form <ecommerce/products/product-form>`
and click the :guilabel:`Documents` smart button. Then, click :guilabel:`Upload` to upload a file
directly, or for additional options, click :guilabel:`New`, then :guilabel:`Upload your file`.

.. tip::
   - You can link a URL instead of a digital file. To do so, click :guilabel:`New`, go to the
     :guilabel:`Type` field, and select :guilabel:`URL`.
   - To edit an existing file, click the :icon:`fa-ellipsis-v` (:guilabel:`dropdown menu`) in the
     top-right corner of the document card and click :guilabel:`Edit`.

.. _ecommerce-products-digital-files-before-payment:

Digital files available before payment
--------------------------------------

To make the file available on the product page (before payment), leave the :guilabel:`Visibility`
field blank and toggle the :guilabel:`Show on product page` switch.

.. image:: products/digital-files.png
   :alt: digital file available before payment on the  product page

.. _ecommerce-products-digital-files-after-payment:

Digital files available after payment
-------------------------------------

To make the file available (after payment), set the :guilabel:`Visibility` field to
:guilabel:`Confirmed order` and turn off the :guilabel:`Show on product page` switch.

.. _ecommerce/products/translation:

Translation
===========

If multiple languages are available on your website, you can translate a product's information
directly on the :ref:`product form <ecommerce/products/product-form>`. Fields that support multiple
languages are identifiable by their abbreviation language (e.g., EN) next to their field.

The e-commerce-related fields to translate are:

- :guilabel:`Product name`.
- :guilabel:`Out-of-Stock Message` (under the :guilabel:`Sales` tab).
- :guilabel:`Sales Description` (under the :guilabel:`Sales` tab).

.. note::
   - Having untranslated content on a web page may be detrimental to the user experience and
     :doc:`SEO <../../websites/website/structure/seo>`. You can use the
     :doc:`Translate <../website/configuration/translate>` feature to translate the page's content.
   - To check the language(s) of your website, go to :menuselection:`Website --> Configuration -->
     Settings` and go to the :guilabel:`Website Info` section.

.. _ecommerce/products/website-availability:

Website availability
--------------------

To set the product's website availability, navigate to the :ref:`product form
<ecommerce/products/product-form>`, go to the :guilabel:`Sales` tab, and in the
:guilabel:`eCommerce shop` section, select the :guilabel:`Website` you wish the product to be
available on. Leave the field blank to make the product available on *all* websites.

.. note::
   - You can make a product available on either *one* website or *all* websites, but selecting only
     *some* websites is not possible. To sell the product on multiple specific websites without
     making it available on all, **duplicate** the product for each website and assign the
     corresponding website to each duplicate.
   - Enable the :guilabel:`Is Published` toggle to make sure the product is available for website
     visitors.

.. _ecommerce/products/stock-management:

Stock management
================

To enable and configure inventory management options, go to :menuselection:`Website -->
Configuration --> Settings`, scroll down to the :guilabel:`Shop - Products` section and the
:guilabel:`Inventory Defaults` sub-section.

.. important::
   - The **Inventory** app must be installed to see the inventory management options.
   - To display the stock level on the product page, the :guilabel:`Product Type` field must be set
     to :guilabel:`Storable` in the :ref:`product form <ecommerce/products/product-form>`.

.. tip::
   If a unique reference is needed for inventory management, install the :doc:`Manufacturing app
   </applications/inventory_and_mrp/manufacturing>`, and create :doc:`Kit bills of materials
   </applications/inventory_and_mrp/manufacturing/advanced_configuration/kit_shipping>`. Each
   kit links its published "virtual" products to the main reference tracked in Inventory. This
   ensures that any item sold on the website is converted into the corresponding stocked item in
   the delivery order.

Inventory
---------

In the :guilabel:`Inventory Defaults` sub-section, fill in those fields:

- :doc:`Warehouse <../../inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses>`.
- :guilabel:`Out-of-Stock`: Enable :guilabel:`Continue Selling` to allow customers to place orders
  even when the product is **out of stock**. Leave the box unchecked to **prevent orders**.
- :guilabel:`Show Available Qty`: Displays the available quantity left under a specified threshold
  on the product page. The available quantity is calculated based on the :guilabel:`On hand`
  quantity minus the quantity already reserved for outgoing transfers.

.. toctree::
   :titlesonly:

   products/catalog
   products/prices
   products/cross_upselling
   products/additional_features
   products/categories_variants
