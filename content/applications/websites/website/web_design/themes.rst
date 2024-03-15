==============
Website themes
==============

Odoo offers numerous themes to shape your website's style, including its colors, fonts, and layouts.
When setting up your site using the Odoo website configurator, you are prompted to select a theme
that aligns with your desired aesthetic. If you wish to modify the theme options later, navigate to
the website builder by clicking the :guilabel:`Edit` button and access the :guilabel:`Theme` tab.
The following sections are available:

- :guilabel:`Colors`: The website builder relies on palettes composed of five colors: two
  :guilabel:`Main` colors and three :guilabel:`Light & Dark` colors.

  You can also customize the :guilabel:`Color Presets` that have been defined automatically by the
  website builder according to the five colors defined above. Click the arrow next to a color preset
  to update it. Each color preset contains colors for your building block's :guilabel:`Background`,
  :guilabel:`Text`, :guilabel:`Headings`, :guilabel:`Links`, :guilabel:`Primary Buttons`, and
  :guilabel:`Secondary Buttons`.

  .. image:: themes/colors.png
     :alt: select the colors of your website
     :scale: 75%

  **To apply a color preset** to a building block of your site, select it, go to the
  :guilabel:`Customize` tab, click the :guilabel:`Background` button, and select the preset.

  .. note::
     Changing a color preset automatically updates the colors of both the default preset and the
     building blocks where the preset is used.

- :guilabel:`Website`: From this section, you can :guilabel:`Switch Theme`,
  :doc:`Add a Language <../configuration/translate>`, select the :guilabel:`Page Layout`, and
  customize the :guilabel:`Background` by uploading your own image.

- :guilabel:`Paragraph`: Customize the formatting of your website's paragraph `<p>` elements.

  .. tip::
     The :guilabel:`Font Family` field contains fonts that are hosted and served by Google servers.
     To add another font, click :guilabel:`Add a Google Font`, and, in the popup window, click
     :guilabel:`fonts.google.com`.

     .. image:: themes/add-a-font.png
        :alt: Select the font you like
        :scale: 75%

     Select a font you like, copy the address of the page, paste it in the :guilabel:`Google Font
     address` field, then click :guilabel:`Save and Reload`. The new font applies to your entire
     website.

- :guilabel:`Headings`: Customize the formatting of your headings.

- :guilabel:`Button`: Customize the :guilabel:`Primary Style` and :guilabel:`Secondary Style`
  buttons.

  .. image:: themes/buttons.png
     :alt: Two types of buttons in Odoo

- :guilabel:`Link`: To edit the style of the hyperlinks available on your website.

- :guilabel:`Input Fields`: Customize fields where you can enter data, e.g., a search bar or a form.

- :guilabel:`Advanced`: You can hide the header bar of your website using the
  :guilabel:`Show Header` button, inject :ref:`head and body code <analytics/google-tag-manager>`,
  enter your :guilabel:`Google Map Custom Key`, change the colors of the :guilabel:`Success`,
  :guilabel:`Info`, :guilabel:`Warning`, and :guilabel:`Error` pop up messages by clicking the
  related :guilabel:`Status Colors` buttons, and customize the :guilabel:`Grays` elements of your
  site.

  .. example::
     - The :guilabel:`Status Color` of the :guilabel:`Success` messages is set to green.

       .. image:: themes/advanced.png
          :alt: Status colors success message set to green.

       .. image:: themes/success.png
          :alt: Success message is green

     - Customizing the gray elements of your site.

       .. image:: themes/grays.png
          :alt: Customize the grays elements of your site
