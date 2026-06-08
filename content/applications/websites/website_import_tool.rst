===================
Website Import Tool
===================

The **Website Import Tool** recreates an existing website inside Odoo by fetching its pages and rebuilding
them as Odoo website pages. Images, sitemap, header, and footer are also imported. Optionally,
products and blog posts can be imported at the same time.

The tool converts pages into standard Odoo building blocks so the result is fully editable in Odoo.
It is not a pixel-perfect clone, and some manual adjustments may be needed after import.

.. warning::

   By using this tool, you confirm that you own the website and all its associated content (such as
   images), and you take full responsibility for their use and any potential legal implications.

Getting There
-------------

Go to **Settings ▸ Website ▸ Import Website**.

Filling in the Form
-------------------

**Website URL**
   Paste the address of the site you want to import (e.g. ``https://www.example.com``).
   The limit for the number of pages is 500. If you need more, reach out to https://www.odoo.com/help

**Import products**
   Turn this on if your website sells products and you want them imported into your Odoo shop.
   The required module is installed automatically. By default, all products found will be imported.
   For some eCommerce platforms, the import tool requires an API key in order to access all the
   products information.

   Currently, we support product imports from:

   - Metadata
   - WooCommerce (API key required)
   - Shopify
   - :ref:`PrestaShop <website_import_tool/prestashop>` (API key required)

**Import blogs**
   Turn this on to import your blogs. The required module is installed automatically.
   By default, all blogs found will be imported. For some blog platforms, the tool requires an API
   key in order to access all the blogs information.

   Currently, we support blog imports from:

   - WordPress
   - :ref:`Ghost <website_import_tool/ghost>` (API key required)

Submitting the Request
----------------------

To submit the request, click on **Import my website**. Once the request is finished, you will receive an email or notification
with some information about the number of pages, products and blogs imported.

.. _website_import_tool/prestashop:

PrestaShop
----------

**Creating an API key**

To import PrestaShop products, you will need to turn on the Webservice setting and provide an API
key. For all versions from PrestaShop 1.7 and up, the process of creating an API key is the same.

1. Go to your website settings, e.g., ``https://example.com/admin1``

2. Navigate to *Advanced Parameters*

   .. image:: website_import_tool/prestashop-advanced-parameters.png
      :alt: Advanced Parameters

3. Click *Webservice*

   .. image:: website_import_tool/prestashop-webservice.png
      :alt: Webservice

4. *Enable PrestaShop's webservice*

   .. image:: website_import_tool/prestashop-toggle-webservice.png
      :alt: Enable PrestaShop's webservice

5. *Add new webservice key*

   .. image:: website_import_tool/prestashop-create-api-key.png
      :alt: Add new webservice key

6. Set the permissions. Below are the permissions required. If any are missing, it may not work as
   expected.

   .. list-table::
      :header-rows: 1

      * - Resource
        - Method
      * - categories
        - GET
      * - combinations
        - GET
      * - images
        - GET
      * - product_option_values
        - GET
      * - product_options
        - GET
      * - products
        - GET

7. Copy the API key and click save.

   .. image:: website_import_tool/prestashop-api-key.png
      :alt: Copy the API key and save

.. _website_import_tool/ghost:

Ghost
-----

**Creating an API key**

To import blogs from your Ghost website, you will need to create an API key. To do this, follow the
steps on `Ghost Content API documentation <https://docs.ghost.org/content-api#key>`_.
Copy the *Content API key* into the import form to import your blogs.

Note that no permissions need to be set, the import tool only needs an API key that gives access to
public data.

Tips
----

- You can go to `Website Import Tool Trial <https://www.odoo.com/fr_FR/page/startwebsite>`_ to get a
  fast sample of only 10 pages, ideal for a quick test.
- Creation of website pages is not mandatory, you can import the products and/or blogs
  independently.
- If a page does not look right after import, you can edit it directly in the Odoo website builder
  like any other page.
- Make sure your website is accessible and not protected by Cloudflare and/or other automated tool
  countermeasures.
- For the best result, make sure you have your database updated to the most recent version of Odoo.
