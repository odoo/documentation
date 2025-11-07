============
Translations
============

The website can be translated into multiple languages to allow visitors to view the content in their
preferred language.


To make the content available in other languages, install the required languages and add them to the
website. Once this is done, a :ref:`Language selector <translate/language-selector>` is
automatically added to the website, allowing visitors to choose their preferred language.

Install languages
=================

To allow translation on the website, first :doc:`install <../../../general/users/language>`
the required languages. To do so, go to :menuselection:`Website -->
Configuration --> Settings`.
And, under the :guilabel:`General` section, click :icon:`oi-arrow-right`
:guilabel:`Install new languages`. In the dialog box, select the :guilabel:`Languages`
from the dropdown menu, click :guilabel:`Add`, and click :guilabel:`Close`.

Then, add the language to the website by clicking on the :guilabel:`Languages` field, selecting the
desired language and clicking :guilabel:`Save`.To remove a language from the website, click the
:icon:`oi-close` :guilabel:`(close)` next to it.

.. _translate/default-language:

If the visitor’s browser language is not available, the website will display its content in the
database’s :ref:`default language <translate/default-language>`. To edit the default language, go to
:menuselection:`Website --> Configuration --> Settings`. Under the :guilabel:`General` section,
select the desired language in the :guilabel:`Default` field.

.. _translate/language-selector:

Language selector
=================

Once other languages are installed and added to the website, a :guilabel:`Language selector`
appears on the website, allowing the switch between languages. It automatically appears in
the header as a dropdown menu and in the :guilabel:`Copyright` section at the very bottom of the
page.

.. tip::
   After new languages have been added, refreshing the page might be necessary to see them in the
   :ref:`Language selector <translate/language-selector>`.

To hide or customize the appearance of each :guilabel:`Language selector`, go to the website in the
default language, click :guilabel:`Edit`, then click the :guilabel:`Language Selector`.

For the one from the header:

#. In the sidebar, scroll down to :guilabel:`Language Selector` section.
#. Set the :guilabel:`Style` field to either :guilabel:`Dropdown`, :guilabel:`Inline`,
   Click :guilabel:`None` if the :guilabel:`Language selector` is not intended to be displayed.
#. Set the :guilabel:`Label` to either :guilabel:`Text`, :guilabel:`Flag`, :guilabel:`Flag and Text`,
   :guilabel:`Code`, or :guilabel:`Flag and Code`.
#. Click :guilabel:`Save`.

For the on from the :guilabel:`Copyright` section:

#. Set the :guilabel:`Language selector` field to either :guilabel:`Dropdown`, :guilabel:`Inline` or
   :guilabel:`None`.
#. Set the :guilabel:`Label` to either :guilabel:`Text`, :guilabel:`Flag`, :guilabel:`Flag and Text`,
   :guilabel:`Code`, or :guilabel:`Flag and Code`.
#. Click :guilabel:`Save`.

.. _translate/translate:

Translate website's page
========================

To translate a website page, switch to the language to translate and click
:menuselection:`Edit --> Translate` in the top-right corner to activate the translation mode.

Depending on the language added, default content provided is translated, but all the content you
added can be translated using the :guilabel:`Translate` feature. The translated text is highlighted
in green, while the text that is not translated is highlighted in
yellow.

Translate the entire page by clicking on the green language button in the top-right corner to
automatically translate all content highlighted in yellow. Or translate the required text manually
by clicking the block, editing its contents, then clicking :guilabel:`Save`.

.. image:: translate/translated-text.png
   :alt: Entering the translation mode


.. note::
   - The :guilabel:`Edit` button opens the translation mode only while viewing the page in a language
     that is not the default one. In this mode, only translations can be edited. Any other type of
     modification with the website builder must be carried out while using the default language.
     Any changes made to the default language pages are automatically applied to the pages of all
     other languages.

   - When a website supports multiple languages, the core URL structure remains consistent across
     languages, while specific elements like product names or categories are translated. For example,
     `https://www.mywebsite.com/shop/product/my-product-1` is the English version of a product page,
     while `https://www.mywebsite.com/fr/shop/product/mon-produit-1` is the French version of the same
     page. The structure (/shop/product/) stays unchanged, but the elements (e.g., product
     name) are translated to the selected language.

.. tip::
   Once the desired language is installed, some elements can also be translated from the backend
   (e.g., the :ref:`Translation <ecommerce/products/translation>` of a product name in the
   product form).

Translation for SEO
-------------------

Once the pages are translated, translate the :ref:`alt tags <seo/alt-tag>` and
:ref:`meta tags <seo/meta-tags>` to help the
:ref:`Search Engine Optimization <seo/content-optimization>`.

To translate the alt tags, switch to the language to translate,
click on :menuselection:`Edit --> Translate` and click on the image. In the
:guilabel:`Translate Attribute` box, add translation to the :guilabel:`title` and/or the
:guilabel:`alt`.

To add translation to :ref:`meta tags <seo/meta-tags>`, go to
:menuselection:`Website --> Site --> Optimized SEO`. In the :guilabel:`Keywords` section, select the
language and add the keywords manually in the selected language.

.. note::
   When viewing the website in its default language, you will see all the added keywords,
   regardless of their language. However, if you switch the website to a different language, such as
   French, you will only see the keywords relevant to that language. Filtering all keywords by each
   language is not possible.

Content visibility by language
==============================

You can hide content (such as images or videos) depending on the language. To do so:

#. Click :guilabel:`Edit` and select an element of your website;
#. Go to the :guilabel:`Title - Image` section and :guilabel:`Visibility`;
#. Click :guilabel:`No condition` and select :guilabel:`Conditionally` instead;
#. Go to :guilabel:`Languages` to configure the condition(s) to apply by selecting
   :guilabel:`Visible for` or :guilabel:`Hidden for`, and click :guilabel:`Choose a record` to
   decide which languages are impacted.
