.. _website/going_live:

======================
Chapter 6 - Going live
======================

.. _website/going_live/translations:

Translations
============

Congratulations! Your client has a beautifully designed homepage and contact page, and the eCommerce
is fully adapted to the Airproof design. Amazing!

Now, the client wants the website translated into French.

For the exercise, you will translate only the menu and the homepage carousel.

- Add French to the website in the settings.
- Enable the language switcher in the header via presets.
- Export the French :file:`.po` file for your Airproof module.
- Translate the required sections (using Poedit software, your code editor, or another translation
  tool).
- Place your translated file in the :file:`/i18n` translations folder.

.. note::
   - Be careful when using Poedit it doesn’t handle tags with style well and it generates an
     :file:`.mo` file.
   - You view your translations, restart your service. After the first restart, you will need to
     manually import the file to see any further updates.

.. seealso::
   Documentation on :ref:`translations <website_themes/translations/export>` and
   :doc:`translating modules <../../howtos/translations>` for more details.

.. spoiler:: Solutions

   Find the solution in our Airproof example on
   `i18n/fr_BE.po <https://github.com/odoo/tutorials/tree/16.0/website_airproof/i18n/fr_BE.po>`_.

.. _website/going_live/module_import:

Module import
=============

Great job! The website is now completely finished and your module is ready for installation in the
client's database.

Before that, test the import process on a new database.

.. tip::
   - Ensure the `base_import_module` is installed on the database before the module installation. 
   - Verify all required applications are installed.
   - Skip the theme installation steps and start from scratch.
   - Manually import translations after module installation, as they won’t apply automatically.

.. seealso::
   Documentation on :doc:`going live, module import and Odoo SaaS
   <../../howtos/website_themes/going_live>`.

Conclusion
==========

Congratulations on completing the **Build a module for a website theme** tutorial!
You've successfully navigated through every stage, from setting up your development environment to
launching a fully customized Odoo website theme.

Throughout this journey, you've mastered:

| ✅ **Theme module creation** – setting up the structure, declaring Odoo and Bootstrap variables.
| ✅ **Website building** – creating pages, adding media, and constructing dynamic building blocks.
| ✅ **Advanced customization** – implementing custom SCSS, JavaScript, headers, footers, and unique
  design elements.
| ✅ **Visual enhancements** – designing background shapes, gradients, and animations for an
  engaging user experience.
| ✅ **eCcommerce optimization** – adapting shop and product templates for a seamless shopping
  experience.
| ✅ **Final preparations** – managing translations and ensuring a smooth module import.

| With these skills, you’re now to design and develop professional, fully customized website themes.
  Well done! 🎉
| We can’t wait to see the amazing themes you’ll create in the future.
