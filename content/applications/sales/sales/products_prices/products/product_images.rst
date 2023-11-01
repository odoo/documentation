=================================
Product images with Google Images
=================================

Having appropriate product images in Odoo is useful for a number of reasons. However, if a lot of
products need images, assigning them can become incredibly time-consuming.

Fortunately, by configuring the *Google Custom Search* API within an Odoo database, finding product
images for products (based on their barcode) is extremely efficient.

.. _product_images/configuration:

Configuration
=============

In order to utilize *Google Custom Search* within an Odoo database, both the database and the Google
API must be properly configured.

.. note::
   Free Google accounts allow users to select up to 100 free images per day. If a higher amount is
   needed, a billing upgrade is required.

.. _product_images/google-api-dashboard:

Google API dashboard
--------------------

#. Go to the `Google Cloud Platform API & Services <https://console.developers.google.com/>`_ page
   to generate Google Custom Search API credentials. Then, log in with a Google account. Next, agree
   to their :guilabel:`Terms of Service` by checking the box, and clicking :guilabel:`Agree and
   Continue`.
#. From here, select (or create) an API project to store the credentials. Start by giving it a
   memorable :guilabel:`Project Name`, select a :guilabel:`Location` (if any), then click
   :guilabel:`Create`.
#. With the :guilabel:`Credentials` option selected in the left sidebar, click :guilabel:`Create
   Credentials`, and select :guilabel:`API key` from the drop-down menu.

   .. image:: product_images/credentials-api-key.png
      :align: center
      :alt: API & Services page on Google Cloud Platform.

#. Doing so reveals an :guilabel:`API key created` pop-up window, containing a custom :guilabel:`API
   key`. Copy and save :guilabel:`Your API key` in the pop-up window -- it will be used later. Once
   the key is copied (and saved for later use), click :guilabel:`Close` to remove the pop-up window.

   .. image:: product_images/api-key-pop-up.png
      :align: center
      :alt: The API key created pop-up window that appears.

#. On this page, search for `Custom Search API`, and select it.

   .. image:: product_images/custom-search-api-search-bar.png
      :align: center
      :alt: Search bar containing "Custom Search API" on Google Cloud Platform.

#. From the :guilabel:`Custom Search API` page, enable the API by clicking :guilabel:`Enable`.

   .. image:: product_images/gcp-custom-search-api-page.png
      :align: center
      :alt: "Custom Search API" page with Enable button highlighted on Google Cloud Platform.

.. _product_images/google-pse-dashboard:

Google Programmable Search dashboard
------------------------------------

#. Next, go to `Google Programmable Search Engine <https://programmablesearchengine.google.com/>`_,
   and click either of the :guilabel:`Get started` buttons. Log in with a Google account, if not
   already logged in.

   .. image:: product_images/google-pse-get-started.png
      :align: center
      :alt: Google Programmable Search Engine page with the Get Started buttons.

#. On the :guilabel:`Create a new search engine` form, fill out the name of the search engine, along
   with what the engine should search, and be sure to enable :guilabel:`Image Search` and
   :guilabel:`SafeSearch`.

   .. image:: product_images/create-new-search.png
      :align: center
      :alt: Create new search engine form that appears with search engine configurations.

#. Validate the form by clicking :guilabel:`Create`.
#. Doing so reveals a new page with the heading: :guilabel:`Your new search engine has been
   created`.

   .. image:: product_images/new-search-engine-has-been-created.png
      :align: center
      :alt: The Your New Search Engine Has Been Created page that appears with copy code.

#. From this page, click :guilabel:`Customize` to open the :menuselection:`Overview --> Basic` page.
   Then, copy the ID in the :guilabel:`Search engine ID` field. This ID is needed for the Odoo
   configuration.

   .. image:: product_images/basic-overview-search-engine-id.png
      :align: center
      :alt: Basic overview page with search engine ID field.

.. _product_images/setup-in-odoo:

Odoo
----

#. In the Odoo database, go to the :menuselection:`Settings app` and scroll to the
   :guilabel:`Integrations` section. From here, check the box beside :guilabel:`Google Images`.
   Then, click :guilabel:`Save`.

   .. image:: product_images/google-images-setting.png
      :align: center
      :alt: The Google Images setting in the Odoo Settings app page.

#. Next, return to the :menuselection:`Settings app`, and scroll to the :guilabel:`Integrations`
   section. Then, enter the :guilabel:`API Key` and :guilabel:`Search Engine ID` in the fields
   beneath the :guilabel:`Google Images` feature.
#. Click :guilabel:`Save`.

.. _product_images/get-product-images:

Product images in Odoo with Google Custom Search API
====================================================

Adding images to products in Odoo can be done on any product or product variant. This process can be
completed in any Odoo application that provides access to product pages (e.g. *Sales* app,
*Inventory* app, etc.).

Below is a step-by-step guide detailing how to utilize the *Google Custom Search API* to assign
images to products in Odoo using the Odoo *Sales* application:

#. Navigate to the :guilabel:`Products` page in the *Sales* app (:menuselection:`Sales app -->
   Products --> Products`). Or, navigate to the :guilabel:`Product Variants` page in the *Sales* app
   (:menuselection:`Sales app --> Products --> Product Variants`).
#. Select the desired product that needs an image.

   .. note::
      Only products (or product variants) that have a barcode, but **not** an image, are processed.

      If a product with one or more variants is selected, each variant that matches the
      aforementioned criteria is processed.

#. Click the :guilabel:`Action ⚙️ (gear)` icon on the product page, and select :guilabel:`Get
   Pictures from Google Images` from the menu that pops up.

   .. image:: product_images/get-pictures-from-google-action.png
      :align: center
      :alt: The Get Pictures from Google Images option from the Action drop-down menu in Odoo.

#. On the pop-up window that appears, click :guilabel:`Get Pictures`.

   .. image:: product_images/click-get-picture-from-pop-up.png
      :align: center
      :alt: The pop-up that appears in which the user should click Get Picture in Odoo Sales.

#. Once clicked, the image(s) will appear incrementally.

   .. note::
      Only the first 10 images are fetched immediately. If you selected more than 10, the rest are
      fetched as a background job.

      The background job processes about 100 images in a minute. If the quota authorized by Google
      (either with a free or a paid plan) is reached, the background job puts itself on hold for 24
      hours. Then, it will continue where it stopped the day before.

.. seealso::
   `Create, modify, or close your Google Cloud Billing account
   <https://cloud.google.com/billing/docs/how-to/manage-billing-account>`_
