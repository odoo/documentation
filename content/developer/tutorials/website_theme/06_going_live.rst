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
#. Then for the translation itself, you have two options. We shall therefore test both:

   - Translate the content of the homepage carousel through the backend.
   - But for the menu, make the translations through the frontend.

#. Export the French :file:`.po` file for your Airproof module and place it in the :file:`/i18n`
   translations folder.
#. If you would like, you can add more translations directly by editing the :file:`.po`
   file. (Using Poedit software, your code editor, or another translation tool.)

.. seealso::
   See reference documentation on :ref:`website_themes/translations/backend` and
   :ref:`website_themes/translations/frontend` translations, and how to
   :ref:`website_themes/translations/export` them.

.. note::
   - Be careful when using Poedit, as it doesn't handle tags with styles well and generates an
     :file:`.mo` file.
   - To see the changes made directly via the :file:`.po` file, you will need to manually import the
     file.

.. spoiler:: Solutions

   Take a look at what the file `i18n/fr_BE.po <{GITHUB_TUTO_PATH}/website_airproof/i18n/fr_BE.po>`_
   of our Airproof example looks like.

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
   - Manually import translations after module installation, as they won't apply automatically.

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
| ✅ **Visual enhancements** - designing background shapes, gradients, and animations for an
  engaging user experience.
| ✅ **eCommerce optimization** - adapting shop and product templates for a seamless shopping
  experience.
| ✅ **Final preparations** - managing translations and ensuring a smooth module import.

| With these skills, you're now ready to design and develop professional, fully customized website
  themes. Well done!
| We can't wait to see the amazing themes you'll create in the future.
