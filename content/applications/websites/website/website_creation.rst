================
Website creation
================

Odoo Website enables you to create and customize a website for presenting information, or
integrating an :doc:`online shop <../ecommerce>`, :doc:`eLearning platform <../elearning>`,
:doc:`forum <../forum>`, and/or :doc:`blog <../blog>`. You can either :ref:`create a new website
<website_creation/create>` or :ref:`import an existing one <website_creation/import>`.

.. _website_creation/create:

Create a new website
====================

.. _website_creation/website-builder:

After installing the **Website** app, Odoo prompts you to use its 4-step website builder to create
the website. You can:

#. Define the purpose of your website.
#. :guilabel:`Choose a Color Palette` or :icon:`fa-cloud-upload` :guilabel:`Upload` a logo to detect
   a matching color scheme and generate a brand style accordingly.
#. :guilabel:`Add Pages and Features`, such as an :doc:`online shop <../ecommerce>` or :doc:`events
   </applications/marketing/events>` page.
#. :guilabel:`Choose your favorite Theme`. You can still change and :doc:`customize
   <web_design/themes>` it later.

If you prefer to bypass this setup, click the :guilabel:`Skip and start from scratch` link.

.. note::
   Starting from scratch results in a blank website without a predefined design or content.

To create an additional website, follow these steps:

#. Navigate to :menuselection:`Website --> Configuration --> Settings`.
#. In the settings banner, click :icon:`fa-plus` :guilabel:`New Website`.
#. In the :guilabel:`Add Website` pop-up window:

   a. Enter a :guilabel:`Website Name`.
   #. Fill in the :doc:`Website Domain <configuration/domain_names>`, if applicable.
   #. In a :doc:`multi-company environment </applications/general/companies/multi_company>`, select
      a :guilabel:`Company`.
   #. In a :doc:`multilingual environment <configuration/translate>`, select the relevant
      :guilabel:`Languages` and define a :guilabel:`Default Language`.

      .. note::
         Languages already installed in the database are selected automatically.

#. Click :guilabel:`Create`.
#. Use the :ref:`website builder <website_creation/website-builder>` to complete the setup.

.. _website_creation/import:

Import an existing website
==========================

.. important::
   The website import tool is available only with an `Odoo Enterprise subscription
   <https://www.odoo.com/page/editions>`_.

The website import tool is a website scraper that searches for the specified website and analyzes
it. It then uses custom AI models to rebuild it as an Odoo website. The extraction is performed page
by page, preserving the original website's structure and content. Images, the sitemap, the
:ref:`header <website/header_footer/header-design>`, and the :ref:`footer
<website/header_footer/footer-design>` are also imported. Optionally, :doc:`product data
<../ecommerce/configuration/products>` can also be extracted. The tool converts pages into standard
Odoo :doc:`building blocks <web_design/building_blocks>`, making the imported website fully editable
in Odoo.

.. note::
   The imported website is not an exact replica of the original. Manual adjustments to layout,
   styling, or content may be needed after import.

.. important::
   - By using this tool, you confirm that you own the website and all its associated content (such
     as images), and that you take full responsibility for their use and any potential legal
     implications.
   - For the best results, ensure your database is up to date with the latest version of Odoo.
   - Do not edit the website during the import process. Importing data overwrites the content of
     the website currently being edited, potentially resulting in the loss of unsaved changes.

To import your current website, follow these steps:

#. Navigate to :menuselection:`Website --> Configuration --> Settings`.
#. In the settings banner, click :icon:`fa-plus` :guilabel:`Import Website`.
#. In the :guilabel:`Import Website` pop-up, enter the :guilabel:`Website URL` (e.g.,
   `https://www.example.com`).
#. Enable :guilabel:`Import Website`.
#. When running an online shop, enable :guilabel:`Import Products` to extract product data.

   .. note::
      If you want to import products to an existing website, i.e., without importing an external
      website, choose :guilabel:`All` or an existing website in the :guilabel:`Website` field.

#. If applicable, complete additional configuration steps for importing products. Odoo automatically
   detects the e-commerce platform used by the original website. Product extraction is supported
   only for e-commerce websites that expose product data through metadata schemes or that use
   `Shopify <https://www.shopify.com/>`_ or `WooCommerce <https://woocommerce.com/>`_.

   .. tabs::

      .. tab:: Metadata

         Odoo can extract product data from websites that expose product data through one of the
         following metadata schemes:

         - JSON-LD
         - RDFa
         - Open Graph
         - Microdata

         If no supported API or platform is detected, product data is extracted from supported
         metadata as a fallback.

      .. tab:: Shopify

         `Shopify <https://www.shopify.com/>`_ provides a public API that allows Odoo to extract
         product data without any additional configuration.

      .. tab:: WooCommerce

         `WooCommerce <https://woocommerce.com/>`_ requires
         `authentication <https://woocommerce.com/document/woocommerce-rest-api/#generate-keys>`_
         before products can be imported. Once a WooCommerce website is detected, follow these steps
         in the :guilabel:`Import Website` pop-up:

         #. Click :icon:`fa-key` :guilabel:`Connect via WooCommerce` next to
            :guilabel:`Authorization`.
         #. Log in to your WooCommerce store using your WooCommerce credentials.
         #. Click :guilabel:`Approve` to authorize Odoo to access the store's data.

#. To submit the request, click :guilabel:`Import my website`.

Once the import is complete, you will receive an email or a notification with details about the
number of pages and products imported. You can then further customize the website using the
:doc:`website editor <web_design>`.

.. note::
   - Blogs cannot be imported.
   - You can import up to **500** pages by default. Contact `Odoo support
     <https://www.odoo.com/help>`_ if you need more.
   - Importing products automatically installs the :doc:`eCommerce app <../ecommerce>` if it is not
     already installed.
   - The tool supports importing up to **100 000** products. Alternatively, :doc:`use a .csv file
     </applications/sales/sales/products_prices/products/import>`.
   - :doc:`Product variants </applications/sales/sales/products_prices/products/variants>` are
     imported along with their SKUs. The extracted SKU is stored in the :guilabel:`Internal
     Reference` field of each product variant.

.. tip::
   - Use the `Website Import Tool trial <https://www.odoo.com/fr_FR/page/startwebsite>`_ to test the
     website import feature by importing up to 10 pages from the original website into a trial
     database.
   - Ensure the original website is publicly accessible and not protected by :ref:`Cloudflare
     <website/spam_protection/cloudflare-turnstile>` or other anti-bot mechanisms.

.. seealso::
   :doc:`configuration/multi_website`
