============
Translations
============

Your website is displayed in the language that matches your visitor’s browser. If the browser’s
language is not installed, the content is shown in the :ref:`default language <translate/default-language>`.
When additional languages are installed, users can choose their preferred language using the
:ref:`Language Selector <translate/language-selector>`.

The :ref:`Translate <translate/translate>` feature on your website allows automatic translation of
standard terms and provides tools to translate custom content manually.

Install languages
=================

To allow translation of your website, you must first add the required languages.

.. _translate/default-language:

Default language
----------------

When multiple languages are available on your website, you can set a default language to be used if
the visitor’s browser language is not installed. To do so, go to :menuselection:`Website –->
Configuration -–> Settings`, and select a language in the :guilabel:`Default` field.

.. note::
  This field is only visible if multiple languages are installed on your website.

.. _translate/language-selector:

Language selector
=================

Your website’s visitors can switch languages using the :guilabel:`Language Selector`, available by
default in the :guilabel:`Copyright` section at the bottom of the page. To edit the
:guilabel:`Language Selector` menu:

#. Go to your website and click :guilabel:`Edit`.
#. Click the language selector available in the :guilabel:`Copyright` block, and go to the
  :guilabel:`Copyright` section of the website builder.
#. Set the :guilabel:`Language selector` field to either :guilabel:`Dropdown` or :guilabel:`Inline`.
  Click :guilabel:`None` if you do not want to display the  :guilabel:`Language selector`.

  .. image:: translate/language-selector.png
     :alt: Add a language selector menu.

#. Click :guilabel:`Save`.

.. tip::
  You can also add the :guilabel:`Language selector` in the :guilabel:`Header` of your page. To do
  so, click the :guilabel:`Header` block and go to the :guilabel:`Navbar` section to edit the
  :guilabel:`Language selector`.

.. _translate/translate:

Translate your website
======================

Select your desired language from the :guilabel:`Language selector` to see your content in another
language. Then, click the :guilabel:`Translate` button in the top-right corner to manually activate
the translation mode so that you can translate what has not been translated automatically by Odoo.

Translated text strings are highlighted in green; Text strings that were not translated
automatically are highlighted in yellow.

.. image:: translate/translated-text.png
  :alt: Entering the translation mode

In this mode, you can only translate texts. To change the page's structure, you must edit the master
page. Each modification on the master page is automatically applied to all translated versions.

.. note::
  When a website supports multiple languages, the content is accessible through different URLs,
  depending on the language selected.
  `https://www.mywebsite.com/shop/product/my-product-1` --> URL to the master page, in English.
  `https://www.mywebsite.com/fr_FR/shop/product/mon-produit-1` --> URL to the French version.

To replace the original text with the translation, click the block, edit its contents, and save.

.. tip::
  Once the desired language is installed, you can translate some items from the backend (e.g., the
  :guilabel:`product’s name` in the product template). To do so, click :guilabel:`EN` next to the
  text you want to translate and add the translation.

Block customization per language
--------------------------------

You can hide content (such as images or videos) that can not be translated. To do so,

#. Click :guilabel:`Edit` and select an element of your website.
#. Go to the :guilabel:`Text - Image` section and :guilabel:`Visibility`.
#. Click :guilabel:`No condition` and select :guilabel:`Conditionally` instead.
#. Go to :guilabel:`Languages` to configure the condition(s) to apply by selecting
  :guilabel:`Visible for` or :guilabel:`Hidden for`, and click :guilabel:`Choose a record` to
  decide which languages are impacted.
