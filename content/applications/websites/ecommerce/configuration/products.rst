========
Products
========

Odoo eCommerce allows you to :ref:`create products <ecommerce/products/product-creation>` and
manage their :ref:`visibility <ecommerce/products/publish-products>` on the website. Products can be
:ref:`configured <ecommerce/products/product-configuration>` in various ways, including adding
:ref:`product images and videos <ecommerce/products/images>`, creating :ref:`product
combinations <ecommerce/products/combos>`, implementing :ref:`cross-selling and upselling strategies
<ecommerce/products/cross_upselling>`, attaching :ref:`digital files
<ecommerce/products/digital-files>`, :ref:`translating <ecommerce/products/translation>`
product information, :ref:`managing stock <ecommerce/products/stock-management>`, and
setting :ref:`packaging options <ecommerce/products/stock-management/packagings>`.

.. _ecommerce/products/product-creation:

Product creation
================

To create a product from the frontend, go to the Website app, click :guilabel:`New`
:icon:`fa-caret-down` in the top-right corner, then select :guilabel:`Product`. Enter the product
name and other relevant details, such as the :guilabel:`Barcode`, :guilabel:`Sales Price`, default
:guilabel:`Sales Taxes`, and a :ref:`Website Category <ecommerce/categories_variants/categories>`,
then add an image. Once you click :guilabel:`Save`, you are redirected to the product page where you
can :ref:`customize it <ecommerce_design/product_page/customization>` using the :doc:`website editor
</applications/websites/website/web_design>`. Once you are finished, click :guilabel:`Save`. To
configure additional advanced :ref:`product details <ecommerce/products/product-configuration>`,
click :guilabel:`Product` in the top-right corner to access the backend product form.

.. tip::
   It is also possible to create a product from the backend by navigating to :menuselection:`Website
   --> eCommerce --> Products`. Then:

   - Configure a new product by clicking :guilabel:`New`, or
   - :doc:`Import product data </applications/sales/sales/products_prices/products/import>` by
     clicking the :icon:`fa-cog` (:guilabel:`gear`) icon next to :guilabel:`Products`. Then:

     - Select :icon:`fa-download` :ref:`Import <essentials/export_import_data/import-data>`, then
       click :guilabel:`Upload` to import an XLSX or CSV file from your device; or
     - Click :icon:`fa-globe` :ref:`Import from website <website_creation/import>` to import the
       product catalog from an existing external website.

.. seealso::
   - :doc:`Create new products using the Barcode Lookup database
     </applications/inventory_and_mrp/barcode/setup/barcodelookup>`.
   - :doc:`Configure the Gelato connector in Odoo to synchronize the product catalog and automate
     order fulfillment with Gelato </applications/sales/sales/gelato>`.

Product visibility
==================

.. _ecommerce/products/publish-products:

To publish a product, access the product page on the website and switch the toggle from
:guilabel:`Unpublished` to :guilabel:`Published`.

.. tip::
   - To access the product page from the product form in the backend, click the :icon:`fa-globe`
     :guilabel:`Go to Website` smart button.
   - To publish products from the backend, navigate to the :guilabel:`eCommerce` tab of the
     :ref:`product form <ecommerce/products/product-form>`, then go to the :guilabel:`Shop` section
     and toggle the :guilabel:`Published` switch on or choose a date from the :guilabel:`Publish on`
     field to automatically publish the product on the given date and time.

To publish multiple products at once, follow these steps:

#. Go to :menuselection:`Website --> eCommerce --> Products`.
#. Remove the :guilabel:`Published` filter and switch to the :guilabel:`List` view.
#. Click the :icon:`fa-sliders` (:guilabel:`dropdown toggle`) icon on the far right of the view and
   enable :guilabel:`Is Published`.
#. Click the :guilabel:`Is Published` column to re-order it by *published* or *unpublished*
   products.
#. Select the products to publish by ticking their box on the far left.
#. In the :guilabel:`Is Published` column, tick the box for any of the selected products, then
   :guilabel:`Update` to publish them.

.. _ecommerce/products/website-availability:

.. note::
   When managing multiple websites, the availability of a product on each website can be set from
   the :ref:`product form <ecommerce/products/product-form>`. Navigate to the :guilabel:`eCommerce`
   tab, then in the :guilabel:`Shop` section, select the :guilabel:`Website` where the product
   should be available. Leave the field blank to make the product available on *all* websites.
   You can make a product available on either *one* website or *all* websites, but selecting only
   *some* websites is not possible. To sell the product on multiple specific websites without
   making it available on all of them, **duplicate** the product for each website and assign the
   corresponding website to each duplicate.

.. _ecommerce/products/product-configuration:

Product configuration
=====================

.. _ecommerce/products/product-form:

To add general information to a product, navigate to :menuselection:`Website --> eCommerce -->
Products` and select the relevant product. You can configure various options, such as choosing a
:doc:`product type </applications/inventory_and_mrp/inventory/product_management/configure/type>`,
adding :doc:`variants and categories <categories_variants>`, or defining :doc:`prices <prices>`.

.. _ecommerce/products/description:

Additionally, add an e-commerce-specific product description to be displayed below the product name
on the frontend :doc:`product page <../ecommerce_design/product_page>`. To do so, go to the
:guilabel:`eCommerce` tab, scroll down to the :guilabel:`Long description` section, and write a
description. Use Odoo's :doc:`rich-text editor </applications/essentials/html_editor>` to customize
the content.

.. tip::
   - Click the :icon:`fa-globe` :guilabel:`Go to Website` smart button to access the frontend
     product page and :doc:`customize <../ecommerce_design/product_page>` it using the :doc:`website
     editor <../../website/web_design>`.
   - Product descriptions can also be generated using :doc:`AI </applications/productivity/ai>`. To
     do so, type `/` in the :guilabel:`Long description` section and select :guilabel:`AI` to
     open the :doc:`AI agent </applications/productivity/ai/agents>`.

.. _ecommerce/products/images:

Product images and videos
-------------------------

To add media items, such as images and videos, navigate to the :ref:`product form
<ecommerce/products/product-form>` and go to the :guilabel:`eCommerce` tab. In the :guilabel:`Media`
section, click :guilabel:`Add Media`. In the :guilabel:`Select a media` pop-up window:

- To add an image, select an image, click :guilabel:`Add URL` or :guilabel:`Upload an image` in the
  :guilabel:`Images` tab.
- To add a video, navigate to the :guilabel:`Videos` tab, paste a video URL, or :ref:`embed HTML
  code <website/building_blocks/embed_code>`. Then, enable the relevant :ref:`video options
  <website/elements/videos>`.

Once the media is selected, click :guilabel:`Add`.

.. tip::
   :ref:`Customize product images and videos <ecommerce/product_page/image-customization>` using
   the :doc:`website editor <../../website/web_design>` from the frontend.

.. _ecommerce/products/combos:

Product combos
--------------

:ref:`Product combinations <pos/products/combos>` allow users to configure a
set of related products to buy as a bundle. To :ref:`configure combos <pos/products/combo-choices>`,
go to :menuselection:`Website --> eCommerce --> Combo Choices`. Once finished and published,
customers can choose the combo when adding the product to the cart. Depending on the configuration,
certain items may incur an additional charge.

.. image:: products/combo-choice.png
   :alt: Add the combo product to the cart.
   :scale: 75%

.. _ecommerce/products/cross_upselling:

Cross-selling & Upselling
-------------------------

Cross-selling and upselling are sales techniques used to present customers with additional or
higher-tier products and services from the :doc:`catalog
<../../ecommerce/ecommerce_design/catalog>`. Cross-selling focuses on recommending accessory or
:doc:`optional products </applications/sales/sales/sales_quotations/optional_products>` alongside
the item being purchased during ordering and checkout. Upselling, on the other hand, encourages
customers to choose a higher-priced or upgraded alternative product.

To configure these product suggestions, go to :menuselection:`Website --> eCommerce --> Products`,
select the relevant product, go to the :guilabel:`Sales` tab, and add the desired products in the
corresponding :guilabel:`Optional Products`, :guilabel:`Accessory Products`, and/or
:guilabel:`Alternative Products` fields.

.. tabs::

   .. tab:: Optional products

      Optional products are suggested when the customer clicks the :guilabel:`Add to cart` button to
      buy a specific product.

      .. image:: products/suggest-optional-products.png
         :alt: Optional products cross-selling.

   .. tab:: Accessory products

      Accessory products appear in the :guilabel:`Suggested accessories` section during the
      :guilabel:`Order summary` step, just prior to proceeding to checkout.

      .. image:: products/accessory-products.png
         :alt: Suggested accessories at checkout during cart review

      .. note::
         To hide this section, open the :doc:`website editor <../../website/web_design>`, go to the
         :guilabel:`Style` tab, and toggle the :guilabel:`Suggested Accessories` switch off.

   .. tab:: Alternative products

      Alternative products are displayed at the bottom of the :doc:`product page
      <../ecommerce_design/product_page>` under the :guilabel:`Alternative Products` heading.

      .. image:: products/alternative-products-ecommerce.png
         :alt: The alternative products section of an product page.

      .. tip::
         To customize this block, open the :doc:`website editor <../../website/web_design>`, click
         the block on the page, and :doc:`adapt the heading and text
         <../../website/web_design/elements>` if necessary. Go to the :guilabel:`Style` tab, scroll
         to the :guilabel:`Alternative Products` section, and modify the options as needed.

.. tip::
   To automatically add optional, accessory, and alternative products in the :guilabel:`Sales` tab,
   go to :menuselection:`Website --> Configuration --> Settings`, scroll down to the
   :guilabel:`eCommerce` section, and enable :guilabel:`Automate suggested products`. Suggested
   products are assigned to each product based on its :ref:`e-commerce category
   <ecommerce/categories_variants/categories>`.

.. _ecommerce/products/digital-files:

Digital files
-------------

It is possible to link digital files, such as certificates, eBooks, or user manuals, to the
products. To do so, go to the :ref:`product form <ecommerce/products/product-form>` and click the
:icon:`fa-file-text-o` :guilabel:`Documents` smart button. Then, click :guilabel:`Upload` to upload
a file directly, or for additional options, click :guilabel:`New`. Choose the :guilabel:`Type` of
attachment:

- :guilabel:`File`: :guilabel:`Upload your file`.
- :guilabel:`URL`: Insert the link to the file or media item.
- :guilabel:`Cloud Storage` (if applicable): Insert a link to your cloud storage to store the file
  on the :doc:`cloud storage </applications/general/integrations/cloud_storage>` platform instead of
  the database’s server.

These documents can be made available:

- On the product page (before checkout): Set the :guilabel:`Sales visibility` field to
  :guilabel:`Hidden` and enable :guilabel:`Publish on website`.
- In the :doc:`customer portal </applications/general/users/user_portals>` on the confirmed sales
  order (after checkout): Set the :guilabel:`Sales visibility` field to :guilabel:`On confirmed
  order` and disable :guilabel:`Publish on website`.

.. tip::
   In :ref:`Kanban <studio/views/multiple-records/kanban>` view, click the :icon:`fa-ellipsis-v`
   (:guilabel:`dropdown menu`) in the top-right corner of the document card to :guilabel:`Edit`,
   :guilabel:`Delete`, or :guilabel:`Download` the document.

.. _ecommerce/products/translation:

Translation
-----------

If a website is available in multiple languages, product information can be translated directly on
the :ref:`product form <ecommerce/products/product-form>`. Fields that support multiple languages
are identifiable by their language abbreviation (e.g., `EN`) next to the field, such as the
:guilabel:`Product name`, :ref:`Out-of-Stock Message <ecommerce/products/stock-management>`, the
:ref:`e-commerce description <ecommerce/products/description>`, :ref:`ribbon or badge
<ecommerce/products/additional_features/product-highlight>` names, :doc:`categories and variants
<categories_variants>` names, etc.

.. note::
   Having untranslated content on a web page may be detrimental to the user experience and
   :doc:`SEO </applications/websites/website/structure/seo>`. To avoid this, use the
   :ref:`Translate <translate/translate>` feature to translate any remaining untranslated content
   on the page.

.. seealso::
   :doc:`Website languages and translations
   </applications/websites/website/configuration/translate>`

.. _ecommerce/products/stock-management:

Stock management
----------------

To configure stock-related e-commerce options, go to :menuselection:`Website --> Configuration -->
Settings`, scroll down to the :guilabel:`eCommerce` section, then to the :guilabel:`Inventory
Defaults` subsection. The following settings are available:

- If multiple :doc:`warehouses
  </applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/warehouses>`
  exist, select the relevant one from the :guilabel:`Warehouse` dropdown menu to set it as the
  default.
- Next to :guilabel:`Out-of-Stock`, enable :guilabel:`Continue Selling` to allow customers to place
  orders even when the product is out of stock. Keep this option disabled to prevent customers from
  ordering products that are out of stock.
- Enable the :guilabel:`Show Available Quantity` option to display the remaining available quantity
  on the product page when it drops below a defined threshold. The available quantity is calculated
  based on the :guilabel:`On hand` quantity minus the quantity already :doc:`reserved
  </applications/inventory_and_mrp/inventory/shipping_receiving/reservation_methods>` for outgoing
  transfers.

These settings apply to *all* products, but can be adapted for individual products if needed. To do
so, go to the product form and ensure the :ref:`Track inventory option
<inventory/product_management/tracking-inventory>` is enabled.

.. note::
   When the :doc:`Inventory app </applications/inventory_and_mrp/inventory>` is installed, and
   :ref:`lots and serial numbers are enabled <inventory/product_management/enable-lot-serial>`,
   select an option from the :guilabel:`Tracking` dropdown menu.

Then, navigate to the :guilabel:`eCommerce` tab and, in the :guilabel:`Inventory` section, enable or
disable the relevant :guilabel:`Sell when Out-of-Stock` and :guilabel:`Show Available Qty` options.
You can also compose a custom :guilabel:`Out-of-Stock Message`. If the field is left empty, the
default message `Out of Stock` is displayed on the product page when the item is no longer in stock.

.. note::
   - Modifying the general :guilabel:`Inventory Defaults` settings does not automatically modify the
     related option(s) on the product form for existing products; it only affects products created
     after the feature is enabled/disabled.
   - To display the stock level on the product page, the :guilabel:`Product Type` field on the
     :ref:`product form <ecommerce/products/product-form>` must be set to :guilabel:`Goods` or
     :guilabel:`Combo`.
   - A :icon:`fa-envelope-o` (:guilabel:`envelope`) :guilabel:`Get notified when back in stock`
     button appears on the product page when an item is out of stock. Customers can click
     the link to enter their email address and receive a notification once the item is back
     in stock.
   - You can also add an :ref:`out-of-stock ribbon or badge
     <ecommerce/products/additional_features/product-highlight>` in the :guilabel:`Shop` section of
     the :guilabel:`eCommerce` tab on the :ref:`product form <ecommerce/products/product-form>`.
   - If the :ref:`Click & Collect <ecommerce/shipping/instore-pickup>` feature is enabled, the
     product availability is displayed on the product page based on the stock in the warehouse
     defined on the related :doc:`delivery method
     </applications/inventory_and_mrp/inventory/shipping_receiving/setup_configuration/new_delivery_method>`
     form.

.. example::
   Currently, the `Boko Chair` is not available in any warehouses. However, customers can click
   the :icon:`fa-envelope-o` (:guilabel:`envelope`) :guilabel:`Get notified when back in
   stock` link to receive a notification as soon as the product becomes available again. A custom
   :guilabel:`Out-of-Stock Message` can also be added to inform customers that the item will be
   replenished.

   .. image:: products/out-of-stock.png
      :alt: Example of a product that is out of stock, but which will be available again.

.. tip::
   If a unique reference is needed for inventory management, install the :doc:`Manufacturing app
   </applications/inventory_and_mrp/manufacturing>` and create :doc:`kit bills of materials
   </applications/inventory_and_mrp/manufacturing/advanced_configuration/kit_shipping>`. Each
   kit links its published "virtual" products to the main reference tracked in Inventory. This
   ensures that any item sold on the website is converted into the corresponding stocked item in
   the delivery order.

.. _ecommerce/products/stock-management/packagings:

Packagings
~~~~~~~~~~

To offer different product pack sizes to customers on the e-commerce, configure product
:doc:`packagings
</applications/inventory_and_mrp/inventory/product_management/configure/packaging>`. Then go to
the :ref:`product form <ecommerce/products/product-form>` and navigate to the
:guilabel:`Sales` tab. Under :guilabel:`Upsell & cross-sell`, add as many package types as needed
in the :guilabel:`Packagings` field. The available package types are displayed on the e-commerce
:doc:`product page <../ecommerce_design/product_page>`.

.. image:: products/product-packagings.png
   :alt: Product packages on the e-commerce page.

.. tip::
   - It is also possible to add packagings to a specific :ref:`product variant
     <ecommerce/categories_variants/product-variants>`. To do so, go to the product form, click the
     :icon:`fa-sitemap` :guilabel:`Variants` :ref:`smart button
     <products/variants/variants-smart-button>`, and select the relevant product variant. Under
     :guilabel:`Sales`, add as many package types as needed in the :guilabel:`Packagings` field.
   - To prevent selected packaging units from being sold on the e-commerce, go to
     :menuselection:`Website --> Configuration --> Settings`, and scroll down to the
     :guilabel:`eCommerce` section. Then, under :guilabel:`Restrict Packagings`, select the units
     that should not be available for sale.
