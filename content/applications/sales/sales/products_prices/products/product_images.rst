===================================================
Automatically get product images with Google Images
===================================================

The product images are very useful in Odoo, for example, to quickly find a product or check if you
scanned the right one, but it can be a bit painful to set up especially if you have a lot of
products. **Google Custom Search** allows finding images automatically for your product, based on
their barcode, keeping your focus on what matters in your business.

.. _product_images/configuration:

Configuration
=============

This functionnality requires configuration both on Google and on Odoo.

With a free Google account, you can get up to 100 free images per day. If you need a higher rate,
you'll have to upgrade to a billing account.

.. _product_images/google-api-dashboard:

Google API dashboard
--------------------

#. Go to the `Google Cloud Platform API & Services <https://console.developers.google.com/>`_ page
   to generate Google Custom Search API credentials. Log in with your Google account.

#. Select or create an API project to store the credentials. Give it an explicit name
   (e.g. Odoo Images).

#. In the credentials section, click on **Create Credentials** and select **API Keys**.

   .. image:: product_images/gcp-api-services.png
      :align: center
      :alt: API & Services page on Google Cloud Platform

#. Save your **API Key**. You'll need it for the next step in Odoo!

#. Use the search bar to look for **Google Custom Search API** and select it.

   .. image:: product_images/gcp-search.png
      :align: center
      :alt: Search bar containing "Custom Search API" on Google Cloud Platform

#. Enable the API.

   .. image:: product_images/gcp-custom-search-api.png
      :align: center
      :alt: "Custom Search API" tile with Enable button highlighted on Google Cloud Platform

.. _product_images/google-pse-dashboard:

Google Programmable Search dashboard
------------------------------------

#. Go to `Google Programmable Search Engine <https://programmablesearchengine.google.com/>`_ and
   click on **Get Started**. Log in with your Google account.

   .. image:: product_images/google-pse.png
      :align: center
      :alt: Google Programmable Search Engine page with the **Get Started** button on the up-right
            of the page

#. Fill the language and the name of the search engine. Give it an explicit name
   (e.g. Odoo Images).

   .. note::
      Google doesn't allow to create a search engine without having entered at least one specific
      site to search on. You can put any website (e.g. www.google.com) for this step, we will
      remove it later.

#. Validate the form by clicking on **Create**. Then, go to the edition mode of the search engine
   that you created (either by clicking on **Control Panel** on the confirmation page or by
   clicking on the name of your Search Engine on the Home page).

#. In the **basics** tab, make sure to enable **Image search**, **SafeSearch** and
   **Search the entire web**.

   .. note::
      Once **Search the entire web** is enabled, you can safely delete the site that you put at the
      previous step.

#. Save your **Search Engine Id**. You’ll need it for the next step in Odoo!

.. _product_images/setup-in-odoo:

Odoo
----

#. Go to :menuselection:`Settings --> General Settings --> Integrations`,
   activate **Google Images** and save.

#. Go back to :menuselection:`Settings --> General Settings--> Integrations`, enter your **API Key**
   and **Search Engine ID** in **Google Images** settings and save again.

.. _product_images/get-product-images:

Automatically get your product images in Odoo
=============================================

The action to automatically get your product images in Odoo appears in any Products or Product
Variants list view. Here is a step-by-step guide from the Inventory app.

#. Go to the Products menu (:menuselection:`Products --> Products` or :menuselection:`Products -->
   Product Variants`) from any application that uses products like Inventory or Sales.

#. On the list view, select the products that needs an image.

   .. important::
      Only the 10,000 first selected products or product variants will be processed.

   .. note::
      - Only the products or product variants with a barcode and without an image will be processed.
      - If you select a product that has one or more variants from the Products view, each variant
        matching the previous criteria will be processed.

#. In the action menu, select **Get Pictures from Google Images** and validate by clicking on
   **Get picture**.

#. You should see your images appearing incrementally.

   .. note::
      - Only the 10 first images are fetched immediatly. If you selected more than 10, the rest will
        be fetched as a background job.
      - The background job process about 100 images in a minute. If you reach the quota authorized
        by Google (either with a free or a paid plan), the background job will put itself on hold
        for 24 hours and continue where it stopped the day before.

.. seealso::
   - `Create, modify, or close your Google Cloud Billing account
     <https://cloud.google.com/billing/docs/how-to/manage-billing-account>`_
