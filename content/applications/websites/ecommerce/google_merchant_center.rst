======================
Google Merchant Center
======================

Google Merchant Center is a tool that allows ecommerce retailers to manage and submit product
data to Google. It serves as a central hub to upload and maintain product details, such as images,
prices, and descriptions so that products can appear across Google's platforms.

.. note::
   Google Merchant Center is only available for physical products and does not support services.

.. tip::
   We recommend using the tool alongside other Google services, such as :doc:`Google Search Console
   <../website/configuration/google_search_console>`, :ref:`Google Analytics
   <analytics/google-analytics>` or :ref:`Google Tag Manager <analytics/google-tag-manager>`
   to obtain detailed reports on product listing issues, improve marketing strategies, increase
   your products' online visibility, and enhance the overall sales performance.

Google Merchant Center setup
============================

To connect your ecommerce with the :abbr:`GMC (Google Merchant Center)` platform, proceed as
follows:

#. Create or sign in to a Google account using the following link:
   `<https://business.google.com/us/merchant-center>`_.
#. Indicate that you sell products online, and enter :guilabel:`Your store's website`.
#. Click :guilabel:`Continue`, then click :guilabel:`Continue to Merchant Center`.
#. Enter your business details by adding the :guilabel:`Business name` and the
   :guilabel:`Registered country`, then click the :guilabel:`Continue to Merchant Center` button
   twice.
#. Add the relevant information and click :guilabel:`Continue`, or click :guilabel:`Do it later`
   to skip this step for now.
#. Go to the :guilabel:`Business info` tab in the left menu, and click :guilabel:`Confirm online
   store`.
#. `Verify your website's ownership <https://support.google.com/merchants/answer/11586344?hl=en&visit_id=638883410905570193-1093311043&p=help_11586344&rd=1>`_
   in one of the following ways:

   - Via :ref:`HTML tag <website/google_search_console/HTML-tag>` or :ref:`HTML file
     <GSC-HTML-file-upload>`
   - Via :ref:`Google Tag Manager <analytics/google-tag-manager>`
   - Via :ref:`Google Analytics <analytics/google-analytics>`

   .. tip::
      You can also verify your website's ownership from Google Merchant Center's dashboard by
      navigating to :menuselection:`Settings --> Business Info` in the left menu.

#. Return to :abbr:`GMC (Google Merchant Center)`, click :guilabel:`Verify your online store`,
   and :guilabel:`Continue`.

.. seealso::
   `Google Merchant Center Help <https://support.google.com/merchants/answer/12564959?hl=en>`_

Linking Odoo to GMC
===================

.. important::
   To activate the :abbr:`GMC (Google Merchant Center)` integration in your Odoo database, at least
   one :ref:`pricelist <ecommerce/pricelists>` must be assigned to your website.

#. Navigate to :menuselection:`Website --> Configuration --> Settings`, scroll to the
   :guilabel:`SEO - Search Engine Optimization` section, and enable
   :guilabel:`Google Merchant Center Data Source`.
#. Click the :guilabel:`Copy file link`, then :guilabel:`Save`.

   .. note::
      By enabling the :guilabel:`Google Merchant Center Data Source` option, your website will
      generate a dynamic `/gmc.xml` feed containing essential product information and availability.
      This feed can be :ref:`customized <ecommerce/GMC/localized-feed>` to include multiple
      languages and pricelists, ensuring your products are displayed correctly for different regions
      and audiences.

#. Go to the :abbr:`GMC (Google Merchant Center)` dashboard, navigate to the
   :menuselection:`Your business --> Products` tab in the left menu, and click :guilabel:`Add
   products`.
#. Choose :guilabel:`Add products from a file` and paste the URL of the copied file.

   .. important::
      Make sure to select all the countries where you intend to sell your products. You are not
      able to proceed without selecting at least one target country. If necessary, enter
      a :guilabel:`feed label` as well.

      .. image:: google_merchant_center/gmc-select-countries.png
         :alt: Select countries in GMC.

#. Click :guilabel:`Continue`.

.. _ecommerce/GMC/localized-feed:

Localized feeds
===============

Languages/regions
-----------------

It is helpful to create language-specific feeds for each country/language you sell in. To add a
new feed, go to :guilabel:`Products` on the :abbr:`GMC` dashboard, click :guilabel:`Add products`,
and select :guilabel:`Add another product source` from the dropdown menu.

.. note::
   The selected :doc:`language </applications/general/users/language>` must first be enabled in
   your website's settings.

Currencies
----------

It is also possible to create different feeds for different currencies, which allows customers
to view prices in their local currency. To enable this feature, create a :ref:`pricelist
<ecommerce/pricelists>` with the foreign currency in Odoo. Then, go to the :guilabel:`Products` tab
in :abbr:`GMC`, click :guilabel:`Manage
product sources`, and choose a :guilabel:`Products source`. Navigate to the
:guilabel:`Data source setup` tab, click :guilabel:`Show advanced options`, and choose a
:guilabel:`Currency`.

.. seealso::
   `Google Merchant Center Product Feed Specifications <https://support.google.com/merchants/answer/7052112>`_.
