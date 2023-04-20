======
Shapes
======

Shapes are handy if you want to add personality to your website.

In this chapter, you will learn how to add standard and custom background and image shapes.

Background shapes
=================

Background shapes are SVG files that you can add as a decorative background in your different
sections. Each shape has one or several customizable colors, and some of them are animated.

Standard
--------

A large selection of default background shapes is available.

**Use**

.. code-block:: xml

   <section data-oe-shape-data="{'shape':'web_editor/Zigs/06'}">
       <div class="o_we_shape o_web_editor_Zigs_06"/>
       <div class="container">
           <!-- Content -->
        </div>
   </section>

`data-oe-shape-data` is the location of your shape.

Flip the shape horizontally or vertically by using the X or Y axis.

.. code-block:: xml

   <section data-oe-shape-data="{'shape':'web_editor/Zigs/06','flip':[x,y]}">
       <div class="o_we_shape o_we_flip_x o_we_flip_y o_web_editor_Zigs_06"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Colors mapping
~~~~~~~~~~~~~~

You can also change the default color mapping of your shape.

Switch colors mapping
*********************

First, put the c* color (here `4`).

Then, the replacement color (here `3`). These replacement colors also range from 1 to 5:

- `1` = background color of the color preset 1 (o-cc1).
- `2` = background color of the color preset 2 (o-cc2).
- `3` = background color of the color preset 3 (o-cc3).
- `4` = background color of the color preset 4 (o-cc4).
- `5` = background color of the color preset 5 (o-cc5).

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/boostrap_overridden.scss``

   $o-bg-shapes: change-shape-colors-mapping('web_editor', 'Zigs/06', (4: 3, 5: 1));

Add extra colors mapping
************************

Adding extra color mapping allows you to add a color variant to the template of a shape while
keeping the original.

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/boostrap_overridden.scss``

   $o-bg-shapes: add-extra-shape-colors-mapping('web_editor', 'Zigs/06', 'second', (4: 3, 5: 1));

.. code-block:: xml

   <section data-oe-shape-data="{'shape':'web_editor/Zigs/06'}">
       <div class="o_we_shape o_web_editor_Zigs_06 o_second_extra_shape_mapping"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Custom
------

Sometimes, your design might require creating one or several custom shapes.

Firstly, you need to create an SVG file for your shape.

.. code-block:: xml
   :caption: ``/website_airproof/static/shapes/hexagons/01.svg``

   <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="86" height="100">
       <polygon points="0 25, 43 0, 86 25, 86 75, 43 100, 0 75" style="fill: #3AADAA;"/>
   </svg>

Make sure to use colors from the default Odoo palette for your shape.

.. code-block:: scss

   default_palette = {
       '1': '#3AADAA',
       '2': '#7C6576',
       '3': '#F6F6F6',
       '4': '#FFFFFF',
       '5': '#383E45',
   }

Declare your shape file.

.. code-block:: xml
   :caption: ``/website_airproof/data/shapes.xml``

   <record id="shape_hexagon_01" model="ir.attachment">
       <field name="name">01.svg</field>
       <field name="datas" type="base64" file="website_airproof/static/shapes/hexagons/01.svg"/>
       <field name="url">/web_editor/shape/illustration/hexagons/01.svg</field>
       <field name="public" eval="True"/>
   </record>

.. todo:: Missing description in table ...

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Field
     - Description
   * - name
     - Name of the shape
   * - datas
     - Path to the shape
   * - url
     - ...
   * - public
     - Makes the shape available for later editing.

Define the styles of your shape.

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-bg-shapes: map-merge($o-bg-shapes,
       (
           'illustration': map-merge(
               map-get($o-bg-shapes, 'illustration') or (),
               (
                   'hexagons/01': ('position': center center, 'size': auto 100%, 'colors': (1), 'repeat-x': true, 'repeat-y': true),
               ),
           ),
       )
   );

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Key
     - Description
   * - File location
     - `hexagons/01` corresponds to the location of your file in the `shapes` folder.
   * - position
     - Defines the position of your shape.
   * - size
     - Defines the size of your shape.
   * - colors
     - Defines the color c* you want it to have (this will override the color you specified in your
       SVG).
   * - repeat-x
     - Defines if the shape is repeated horizontally. This key is optional and only needs to be
       defined if set to `true`.
   * - repeat-y
     - Defines if the shape is repeated vertically. This key is optional and only needs to be
       defined if set to `true`.

Lastly, add your shape to the list of shapes available on the Website Builder.

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="snippet_options_background_options" inherit_id="website.snippet_options_background_options" name="Shapes">
       <xpath expr="//*[hasclass('o_we_shape_menu')]/*[last()]" position="after">
           <we-select-page string="Theme">
               <we-button data-shape="illustration/hexagons/01" data-select-label="Hexagon 01"/>
           </we-select-page>
       </xpath>
   </template>

Your custom shape can now be used the same way as standard shapes.

Image shapes
============

Image shapes are SVG files you can add as a clipping mask on your images. Some shapes have
customizable colors, and some are animated.

Standard
--------

A large selection of default image shapes is available.

**Use**

.. code-block:: xml

   <img src="..."
       class="img img-fluid mx-auto"
       alt="..."
       data-shape="web_editor/solid/blob_2_solid_str"
       data-shape-colors="#35979C;;;;"
   >

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - data-shape
     - Location of the shape
   * - data-shape-colors
     - Colors applied to the shape

.. warning::
   Sometimes, your image shape might not be applied after adding your changes. To fix the issue,
   open the Website Builder and save the page to force the shape to load.
