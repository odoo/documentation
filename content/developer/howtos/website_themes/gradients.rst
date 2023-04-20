=========
Gradients
=========

In this chapter, you will discover how to:

- Add a gradient to a section or a title.
- Add your own gradient to the Website Builder palette.

Standard
========

In standard, you can select several gradients directly from the Website Builder. However, for custom
themes, you must add the gradients directly in the section tag with a style attribute.

**Use**

.. code-block:: xml

    <section class="s_text_image" data-snippet="s_text_image" data-name="Text - Image" style="background-image: linear-gradient(135deg, rgb(255, 204, 51) 0%, rgb(226, 51, 255) 100%) !important;">
        <!-- Content -->
    </section>

To apply a gradient to text, use a font tag with the `text-gradient` class.

.. code-block:: xml

   <h2>
       <font class="text-gradient" style="background-image: linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%);">A Section Subtitle</font>
   </h2>

Custom
======

You can also add your own custom gradients to the Website Builder. This way, the user can easily
use them without manually recreating them.

.. code-block:: xml
   :caption: ``/website_airproof/data/presets.xml``

   <record id="colorpicker" model="ir.ui.view">
       <field name="key">website_airproof.colorpicker</field>
       <field name="name">Custom Gradients</field>
       <field name="type">qweb</field>
       <field name="inherit_id" ref="web_editor.colorpicker"/>
       <field name="website_id">1</field>
       <field name="arch" type="xml">
           <xpath expr="//*[@data-name='predefined_gradients']/*" position="before">
               <button class="w-50 o_we_color_btn" style="background-image: linear-gradient(145deg, rgb(5, 85, 94) 0%, rgb(0, 131, 148) 100%);" data-color="linear-gradient(145deg, rgb(5, 85, 94) 0%, rgb(0, 131, 148) 100%)"></button>
           </xpath>
       </field>
   </record>
