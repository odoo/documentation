======================
Chapter 6 - Going live
======================

.. _tutorials/website_theme/going_live/translations:

Translations
============

Congratulations! Your client has a beautifully designed homepage and contact page, and the eCommerce
is fully adapted to the Airproof design. Amazing!

Now, the client wants the website translated into French. To do so:

#. Add French to the website in the settings and enable the language switcher in the header via
   presets.
#. Then for the translations you have several options (normally to do after the production launch).
   For the exercise we will test 2 of them in local:

   - Translate the content of the `Airproof Mini` product page through the editor.
   - Translate the content of the homepage carousel through the views.

.. seealso::
   See reference documentation on :ref:`website_themes/translations/frontend` and
   :ref:`website_themes/translations/backend` translations.

.. note::
   You can also create translations through the :ref:`export/import <website_themes/translations/export>`
   of a :file:`.po` file. However, this method only works once during the module's import. It's quite
   complicated to make changes afterwards via the :file:`.po` file. That's why we advise you to make translations through the editor or directly via the views.

.. spoiler:: Solutions

   The preset to add for the language switcher is:

   .. code-block:: xml
         :caption: ``/website_airproof/data/presets.xml``

         <?xml version="1.0" encoding="utf-8"?>
         <odoo>
            <!-- Activate language selector -->
            <record id="website.header_language_selector" model="ir.ui.view">
               <field name="active" eval="True" />
            </record>
         </odoo>

   For translations via the editor:

   #. Switch the website to French.
   #. Go on the product page.
   #. Click on :menuselection:`Edit --> Translate`.
   #. Modify all the parts highlighted in `yellow`.

   For translations via the views:

   #. Activate developer mode.
   #. Go to the settings then in the menu :menuselection:`Technical --> User Interface: Views`.
   #. Search for the name of the page you want to translate. In this case, search in the `View
      Architecture` for `homepage`.
   #. Once you have found your page, click on :guilabel:`EN` (located at the top of the page
      architecture).
   #. This opens a popup in which you first see the English section. Then further down, all the
      translations you can make for French.

.. _tutorials/website_theme/going_live/module_import:

Module import
=============

Great job! The website is now completely finished and your module is ready for installation in the
client's SaaS database.

Just before that, test the import process on a new database.

.. seealso::
   See reference documentation on how to :doc:`deploy a module
   </developer/howtos/website_themes/going_live>` on an Odoo SaaS database.

.. tip::
   - Ensure the `base_import_module` is installed on the database before the module installation.
   - Verify all required applications are installed.
   - Skip the theme installation steps and start from scratch.

Conclusion
==========

Congratulations on completing the **Build a module for a website theme** tutorial!
You've successfully navigated through every stage, from setting up your development environment to
launching a fully customized Odoo website theme.

Throughout this journey, you've mastered:

| ✅ **Theme module creation** - setting up the structure, declaring Odoo and Bootstrap variables.
| ✅ **Website building** - creating pages, adding media, and constructing dynamic building blocks.
| ✅ **Advanced customization** - implementing custom SCSS, JavaScript, headers, footers, and unique
  design elements.
| ✅ **Visual enhancements** - designing background and image shapes, gradients, and animations for
  an engaging user experience.
| ✅ **eCommerce optimization** - adapting shop and product templates for a seamless shopping
  experience.
| ✅ **Final preparations** - managing translations and ensuring a smooth module import.

| With these skills, you're now ready to design and develop professional, fully customized website
  themes. Well done!
| We can't wait to see the amazing themes you'll create in the future.
