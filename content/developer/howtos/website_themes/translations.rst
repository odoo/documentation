============
Translations
============

With Odoo, you can translate your website into different languages.

In this chapter, you will learn how to:

- Translate the content of a module.
- Import and export translations.
- Integrate translations to a module.

Frontend
========

To translate your pages with the Website Builder, go to your website and click on the language
selector to switch to it. If your website was never translated to the target language, click
:guilabel:`Add a language...`, select it in the pop-up window, and click :guilabel:`Add`.

Click :guilabel:`Translate` to start translating. Depending on the language, some text is
automatically translated and highlighted in green, while everything that should be translated
manually is highlighted in yellow.

.. image:: translations/translate-button.png
   :alt: Translate button
   :width: 570

Backend
=======

Translating pages directly from the backend allows you to translate several languages at the same
time. To do so, go to :menuselection:`Settings --> Technical --> User Interface: Views`, search for
the name of the page you want to translate, and click the :guilabel:`Edit Translations` button.

.. image:: translations/edit-translations.png
   :alt: Edit translations
   :width: 718

Export
======

Once you are done translating, you need to export the translations to integrate them into your
module. To export everything at once, open your database, activate :ref:`developer mode
<developer-mode>`, and go to :menuselection:`Settings --> Translations --> Export Translation`.
Select the :guilabel:`Language` you translated, *PO File* under :guilabel:`File Format`, and
*website_airproof* as the :guilabel:`Apps To Export`.

Download the file and move it to the :file:`i18n` folder. If needed, you can manually edit the
:file:`.po` file afterward.

PO file
=======

You can translate directly by editing a :file:`.po` file or creating the file yourself. Check out
the :doc:`translating modules documentation <../translations>` to write your translations.

.. code-block:: po
   :caption: ``/website_coconuts/i18n/fr_BE.po``

   #. module: website_airproof
   #: model_terms:ir.ui.view,arch_db:website_airproof.s_custom_snippet
   msgid "..."
   msgstr "..."

Import
======

To import your translation files into Odoo, go to :menuselection:`Settings --> Translations -->
Import Translation` and upload them.
