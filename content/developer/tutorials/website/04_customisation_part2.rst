.. _website/customisation_part2:

==================================
Chapter 4 - Customisation, Part II
==================================

.. _website/customisation_part2/background_shape:

Create a custom background shape
================================

Shapes are decorative elements that can be applied to backgrounds or images. These are SVG files
that can be animated and customized with different colors.

First, to better align with the website’s desired atmosphere, create a custom background shape that
the client can reuse on different blocks.

Create your custom shape using the following setup :

- | Declare your shape.
  | You can find the SVG shape `here <{GITHUB_PATH}img/>`_.
- Set the base color of the shape to the theme's green, and add it to the list of available shapes.

.. image:: 04_customisation_part2/shape.png

.. tip::
   | **Be careful,** there is a trick!
   | In your shape SVG file, you have to use the colors from the default Odoo palette.
   | Here, I want it to match my primary color 3 (`#CEF8A1`). Therefore, in the SVG file, you must
     use color 3 from Odoo’s default palette (`#F6F6F6`).

.. seealso::
   Documentation on :ref:`custom background shapes
   <ANCOR website_themes/shapes/background_shape_custom>`.

Based on the Airproof design, apply the shape you just added to a `Text-Image` building block on the
homepage :

- Ensure the shape is in the right position.
- Set its color to the theme’s light blue.

.. tip::
   Unlike a standard Odoo shapes, when applying a custom shape to a section, replace `web_editor`
   with `illustration` in the shape class.

.. seealso::
   Documentation on how to use :ref:`<ANCOR website_themes/shapes/background_shapes>`.

.. _website/customisation_part2/background_gradient:

Add a background gradient
=========================

Apply a custom background gradient to your ”*Latest products*” block, transitioning from blue
`rgb(11, 142, 230)` to dark blue `rgb(41, 128, 187)`.

.. seealso::
   Documentation on :ref:`<ANCOR website_themes/gradients>`.

.. _website/customisation_part2/animations:

Animations
==========

The client loves the overall design but finds the page a bit static. Enhance page interactivity with
animations such as fade-in, rotate, bounce, etc. These can be applied to columns, images, texts,
buttons…

Based on the airproof design, animate the following elements: 

- the text of the first slide of the carousel.
- the sticker and the photo of the drone from the first slide.
- the 4 columns with icons.

Adjust animation delays for smoother transitions.

.. image:: 04_customisation_part2/animations.gif

.. seealso::
   Documentation on :ref:`<ANCOR website_themes/animations>`.

.. _website/customisation_part2/forms:

Forms
=====

The forms in Odoo are very powerful. They can send emails directly to a personal inbox or integrate
directly with other Odoo applications.

This is great, as one of your client's main priorities is after-sales service. Therefore, the
contact form must be properly configured.

| Based on the airproof design, create a contact page. Remember to disable the default one and add
  the new page to the menu.
| The client has the following requests for their contact form: 

- “*Conditional VAT*” field displayed only if “*Company name*” is filled in.
- All fields should be mandatory, except for "*Company name*".
- Form submission must trigger an email.
- After form submission, the thank-you message should remain visible on the contact page.

.. tip::
   To determine the correct code for your form :
   
   - | Create a test page via the website builder.
     | Drag & drop the building block that interests you and give it the right design.
     | Use the code generated through :guilabel:`Editor HTML/SCSS`.
   - You can also find the original building block code in Odoo :
     :file:`odoo/addons/website/views/snippets/s_website_form.xml`.

.. seealso::
   | For page creation, refer to the documentation on 
     
     - :ref:`<ANCOR website_themes/pages/default_pages>`,
     - :ref:`<ANCOR website_themes/pages/theme_pages>`,
     - :ref:`<ANCOR website_themes/navigation/menu_item>`.
   | And see documentation on :ref:`<ANCOR website_themes/forms>`.
