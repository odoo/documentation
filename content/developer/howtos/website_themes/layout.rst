======
Layout
======

In this chapter, you will learn how to:

- Create a custom header.
- Create a custom footer.
- Modify a standard template.
- Add a copyright section.
- Improve your website's responsiveness.

.. _website_themes/layout/default :

Default
=======

An Odoo page combines cross-page and unique elements. Cross-page elements are the same on every
page, while unique elements are only related to a specific page. By default, a page has two
cross-page elements, the header and the footer, and a unique main element that contains the specific
content of that page.

.. code-block:: xml

   <div id="wrapwrap">
      <header/>
         <main>
            <div id="wrap" class="oe_structure">
               <!-- Page Content -->
            </div>
         </main>
      <footer/>
   </div>

Any Odoo XML file starts with encoding specifications. After that, you must write your code inside
an `<odoo>` tag.

.. code-block:: xml

   <?xml version="1.0" encoding="utf-8" ?>
   <odoo>
      ...
   </odoo>

.. note::
   Using precise template names is important to find information through all modules quickly.
   Template names should only contain lowercase alphanumerics and underscores.

   Always add an empty line at the end of your file. This can be done automatically by configuring
   your IDE.

.. _website_themes/layout/xpath :

XPath
=====

XPath (XML Path Language) is an expression language that enables you to navigate through elements
and attributes in an XML document easily. XPath is used to extend standard Odoo templates.

A view is coded the following way.

.. code-block:: xml

   <template id="..." inherit_id="..." name="...">
      <!-- Content -->
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - id
     - ID of the modified view
   * - inherited_id
     - ID of the standard view (using the following pattern: `module.template`)
   * - name
     - Human-readable name of the modified view

For each XPath, you modify two attributes: **expression** and **position**.

.. example::
   .. code-block:: xml
      :caption: ``/website_airproof/views/website_templates.xml``

      <template id="layout" inherit_id="website.layout" name="Welcome Message">
         <xpath expr="//header" position="before">
            <!-- Content -->
         </xpath>
      </template>

   This XPath adds a welcome message right before the page content.

.. warning::
   Be careful when replacing default elements' attributes. As your theme extends the default one,
   your changes will take priority over any future Odoo update.

.. note::
   - You should update your module every time you create a new template or record.
   - *XML IDs* of inheriting views should use the same *ID* as the original record. It helps to find
     all inheritance at a glance. As final *XML IDs* are prefixed by the module that creates them,
     there is no overlap.

.. _website_themes/layout/xpath/expressions :

Expressions
-----------

XPath uses path expressions to select nodes in an XML document. Selectors are used inside the
expression to target the right element. The most useful ones are listed below.

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Descendent selectors
     - Description
   * - /
     - Selects from the root node.
   * - //
     - Selects nodes in the document from the current node that matches the selection no matter
       where they are.

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute selectors
     - Description
   * - \*
     - Selects any XML tag. `*` can be replaced by a specific tag if the selection needs to be
       more precise.
   * - \*[@id="id"]
     - Selects a specific ID.
   * - \*[hasclass("class")]
     - Selects a specific class.
   * - \*[@name="name"]
     - Selects a tag with a specific name.
   * - \*[@t-call="t-call"]
     - Selects a specific t-call.

.. _website_themes/layout/xpath/position :

Position
--------

The position defines where the code is placed inside the template. The possible values are listed
below:

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Position
     - Description
   * - replace
     - Replaces the targeted node with the XPath content.
   * - inside
     - Adds the XPath content inside the targeted node.
   * - before
     - Adds the XPath content before the targeted node.
   * - after
     - Adds the XPath content after the targeted node.
   * - attributes
     - Adds the XPath content inside an attribute.

.. example::
   This XPath removes the first element with a `.breadcrumb` class.

   .. code-block:: xml

      <xpath expr="//*[hasclass('breadcrumb')]" position="replace"/>

   This XPath adds an extra `<li>` element after the last child of the `<ul>` element.

   .. code-block:: xml

      <xpath expr="//ul" position="inside">
         <li>Last element of the list</li>
      </xpath>

   This XPath adds a `<div>` before the `<nav>` that is a direct child of the `<header>`.

   .. code-block:: xml

      <xpath expr="//header/nav" position="before">
         <div>Some content before the header</div>
      </xpath>

   This XPath removes `x_airproof_header` in the class attribute of the header. In this case, you
   don't need to use the `separator` attribute.

   .. code-block:: xml

      <xpath expr="//header" position="attributes">
         <attribute name="class" remove="x_airproof_header" />
      </xpath>

   This XPath adds `x_airproof_header` in the class attribute of the header. You also need to define
   a `separator` attribute to add a space before the class you are adding.

   .. code-block:: xml

      <xpath expr="//header" position="attributes">
         <attribute name="class" add="x_airproof_header" separator=" "/>
      </xpath>

   This XPath moves the element with `.o_footer_scrolltop_wrapper` class before the element with the
    `footer` ID attribute.

   .. code-block:: xml

      <xpath expr="//div[@id='footer']" position="before">
         <xpath expr="//div[@id='o_footer_scrolltop_wrapper']" position="move" />
      </xpath>

.. tip::
   Using `move` directives inside an other XPath forces you to use only this kind of directives.

   .. example::
      | **Good example:**

      .. code-block:: xml

         <xpath expr="//*[hasclass('o_wsale_products_main_row')]" position="before">
         <xpath expr="//t[@t-if='opt_wsale_categories_top']" position="move" />
         </xpath>
         <xpath expr="//*[hasclass('o_wsale_products_main_row')]" position="before">
         <div><!-- Content --></div>
         </xpath>

      | **Bad example:**

      .. code-block:: xml

         <xpath expr="//*[hasclass('o_wsale_products_main_row')]" position="before">
         <xpath expr="//t[@t-if='opt_wsale_categories_top']" position="move" />
         <div><!-- Content --></div>
         </xpath>


.. seealso::
   You can find more information about XPath in this `cheat sheet <https://devhints.io/xpath>`_.

.. _website_themes/layout/qweb :

QWeb
====

QWeb is the primary templating engine used by Odoo. It is an XML templating engine mainly used to
generate HTML fragments and pages.

.. seealso::
   :doc:`QWeb templates documentation <../../reference/frontend/qweb>`.

.. _website_themes/layout/custom_fields :

Custom fields
=============

Depending on your needs, you can create custom fields to save data in the database.

.. _website_themes/layout/custom_fields/declaration :

Declaration
-----------

First, create a record to declare the field. This field has to be linked to an existing model.

.. code-block:: xml
   :caption: ``/website_airproof/data/fields.xml``

   <record id="x_post_category" model="ir.model.fields">
      <field name="name">x_post_category</field>
      <field name="field_description">...</field>
      <field name="ttype">html</field>
      <field name="state">manual</field>
      <field name="index">0</field>
      <field name="model_id" ref="website_blog.model_blog_post"/>
   </record>

.. note:: Fields creation is also possible (and recommended) through `a model using Python </developer/tutorials/backend>`_.

.. _website_themes/layout/custom_fields/backend :

Back-end
--------

Add the field to the relevant view through an XPath. Therefore, the user can see the field in the
interface and fill it afterwards.

.. code-block:: xml
   :caption: ``/website_airproof/views/backend/website_blog_views.xml``

   <record id="view_blog_post_form_category" model="ir.ui.view">
      <field name="name">view_blog_post_form_category</field>
      <field name="model">blog.post</field>
      <field name="inherit_id" ref="website_blog.view_blog_post_form"/>
      <field name="arch" type="xml">
         <xpath expr="//field[@name='blog_id']" position="before">
            <field name="x_post_category" string="..." placeholder="..."/>
         </xpath>
      </field>
   </record>

.. _website_themes/layout/custom_fields/frontend :

Front-end
---------

The field value can be shown somewhere in a page by calling `model_name.field_name` like this:

.. code-block:: xml
   :caption: ``/website_airproof/views/website_blog_templates.xml``

   <h1 t-field="blog_post.x_post_category"/>

.. _website_themes/layout/background :

Background
==========

You can define a color or an image as the background of your website.

.. _website_themes/layout/background/colors :

Colors
------

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-color-palettes: map-merge($o-color-palettes,
      (
         'airproof': (
            'o-cc1-bg':                     'o-color-5',
            'o-cc5-bg':                     'o-color-1',
         ),
       )
   );

.. _website_themes/layout/background/image_pattern :

Image/pattern
-------------

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-website-values-palettes: (
      (
         'body-image': '/website_airproof/static/src/img/background-lines.svg',
         'body-image-type': 'image' or 'pattern'
      )
   );

.. _website_themes/layout/header :

Header
======

By default, the header contains two distinct templates (desktop and mobile) which display the  main
navigation, the company's logo and other optional elements (call-to-action, language selector, etc).
Depending on the situation, choose between enabling/disabling existing elements with a standard
template or building a brand new custom template.

.. _website_themes/layout/header/standard :

Standard
--------

The Odoo Website Builder distinguishes between desktop templates and the mobile template in order to
facilitate the adaptation of the user experience according to the device.

.. _website_themes/layout/header/standard/desktop :

Desktop template
~~~~~~~~~~~~~~~~

Enable one of the header default templates.

.. important::
   Don't forget that you may need to disable the active header template first.

   .. example::

      .. code-block:: xml
         :caption: ``/website_aiproof/data/presets.xml``

         <record id="website.template_header_default" model="ir.ui.view">
            <field name="active" eval="False"/>
         </record>

Explicitly set the desired template in the `primary_variables.scss` file.

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-website-values-palettes: (
      (
         'header-template': 'Contact',
      ),
   );

.. code-block:: xml
   :caption: ``/website_airproof/data/presets.xml``

   <record id="website.template_header_contact" model="ir.ui.view">
      <field name="active" eval="True"/>
   </record>

.. _website_themes/layout/header/standard/mobile :

Mobile template
~~~~~~~~~~~~~~~

Each header template comes with the `template_header_mobile` template ensuring a seamless user
experience accross every devices.

.. seealso::
   `Mobile header template on Odoo's Git repository <https://github.com/odoo/odoo/blob/d053ea84d45f2ba50a31c2773f2d3ded9fd1ee6b/addons/website/views/website_templates.xml#L343>`_


.. _website_themes/layout/header/custom :

Custom
------

Create your own template and add it to the list.

.. important::
   Don't forget that you may need to disable the active header template first before enabling the
   custom one.

**Option**

Use the following code to add an option for your new custom header on the Website Builder.

.. code-block:: xml
   :caption: ``/website_airproof/views/website_templates.xml``

   <template id="template_header_opt" inherit_id="website.snippet_options" name="Header Template - Option">
      <xpath expr="//we-select[@data-variable='header-template']" position="inside">
         <we-button title="airproof"
            data-customize-website-views="website_airproof.header"
            data-customize-website-variable="'airproof'"  data-img="/website_airproof/static/src/img/wbuilder/template_header_opt.svg"/>
      </xpath>
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - data-customize-website-views
     - The template to enable
   * - data-customize-website-variable
     - The name given to the variable
   * - data-img
     - The thumbnail of the custom template shown in the templates selection on the Website Builder

Now you have to explicitly define that you want to use your custom template in the Odoo SASS
variables.

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-website-values-palettes: (
      (
         'header-template': 'airproof',
      ),
   );

**Template**

.. code-block:: xml
   :caption: ``/website_airproof/views/website_templates.xml``

   <template id="header" inherit_id="website.layout" name="Airproof - Header" active="True">
      <xpath expr="//header//nav" position="replace">
         <!-- Static Content -->
         <!-- Components -->
         <!-- Editable areas -->
      </xpath>
   </template>

Don't forget to adapt the `template_header_mobile` accordingly to keep consistency between desktop
and mobile:

.. code-block:: xml
   :caption: ``website_airproof/views/website_templates.xml``

   <template id="template_header_mobile" inherit_id="website.template_header_mobile" name="Airproof - Template Header Mobile">
      <!-- Xpaths -->
   </template>

.. _website_themes/layout/header/components :

Components
----------

In your custom header, you can call several sub-templates using the `t-call` directive from QWeb:

.. _website_themes/layout/header/components/logo :

Logo
~~~~

.. code-block:: xml

   <t t-call="website.placeholder_header_brand">
      <t t-set="_link_class" t-valuef="..."/>
   </t>

.. important::

   Don't forget to :ref:`create a record of the website logo <website_themes/media/images/use/logo>`
   logo in the database.

.. _website_themes/layout/headers/components/menu :

Menu
~~~~

.. code-block:: xml

   <t t-foreach="website.menu_id.child_id" t-as="submenu">
      <t t-call="website.submenu">
         <t t-set="item_class" t-valuef="nav-item"/>
         <t t-set="link_class" t-valuef="nav-link"/>
      </t>
   </t>

.. _website_themes/layout/header/components/signin :

Sign in
~~~~~~~

.. code-block:: xml

   <t t-call="portal.placeholder_user_sign_in">
      <t t-set="_item_class" t-valuef="nav-item"/>
      <t t-set="_link_class" t-valuef="nav-link"/>
   </t>

.. _website_themes/layout/header/components/user_dropdown :

User dropdown
~~~~~~~~~~~~~

.. code-block:: xml

   <t t-call="portal.user_dropdown">
      <t t-set="_user_name" t-value="true"/>
      <t t-set="_icon" t-value="false"/>
      <t t-set="_avatar" t-value="false"/>
      <t t-set="_item_class" t-valuef="nav-item dropdown"/>
      <t t-set="_link_class" t-valuef="nav-link"/>
      <t t-set="_dropdown_menu_class" t-valuef="..."/>
   </t>

.. _website_themes/layout/header/components/language_selector :

Language selector
~~~~~~~~~~~~~~~~~

.. code-block:: xml

   <t t-call="website.placeholder_header_language_selector">
      <t t-set="_div_classes" t-valuef="..."/>
   </t>

.. _website_themes/layout/header/components/cta :

Call to action
~~~~~~~~~~~~~~

.. code-block:: xml

   <t t-call="website.placeholder_header_call_to_action">
      <t t-set="_div_classes" t-valuef="..."/>
   </t>

.. _website_themes/layout/header/components/navbar_toggler :

Navbar toggler
~~~~~~~~~~~~~~

.. code-block:: xml

   <t t-call="website.navbar_toggler">
      <t t-set="_toggler_class" t-valuef="..."/>
   </t>

.. seealso::
   You can add a :ref:`header overlay <website_themes/pages/theme_pages/header_overlay>` to position your header over the content of
   your page. It has to be done on each page individually.

.. _website_themes/layout/footer :

Footer
======

By default, the footer contains a section with some static content. You can easily add new elements
or create your own template.

.. _website_themes/layout/footer/standard :

Standard
--------

Enable one of the default footer templates. Don't forget that you may need to disable the active
footer template first.

.. important::
   Don't forget that you may need to disable the active footer template first.

   .. example::

      .. code-block:: xml
         :caption: ``/website_aiproof/data/presets.xml``

         <record id="website.footer_custom" model="ir.ui.view">
            <field name="active" eval="False"/>
         </record>

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-website-values-palettes: (
      (
         'footer-template': 'Links',
      ),
   );

.. code-block:: xml
   :caption: ``/website_airproof/data/presets.xml``

   <record id="website.template_footer_links" model="ir.ui.view">
      <field name="active" eval="True"/>
   </record>

.. _website_themes/layout/footer/custom :

Custom
------

Create your own template and add it to the list. Don't forget that you may need to disable the
active footer template first.

**Option**

.. code-block:: xml
   :caption: ``/website_airproof/views/website_templates.xml``

   <template id="template_footer_opt" inherit_id="website.snippet_options" name="Footer Template - Option">
      <xpath expr="//we-select[@data-variable='footer-template']" position="inside">
         <we-button title="airproof"
            data-customize-website-views="website_airproof.footer"
            data-customize-website-variable="'airproof'"
            data-img="/website_airproof/static/src/img/wbuilder/template_footer_opt.svg"/>
      </xpath>
   </template>

**Declaration**

.. code-block:: scss
   :caption: ``/website_airproof/static/src/scss/primary_variables.scss``

   $o-website-values-palettes: (
      (
         'footer-template': 'airproof',
      ),
   );

**Template**

.. code-block:: xml
    :caption: ``/website_airproof/views/website_templates.xml``

    <template id="footer" inherit_id="website.layout" name="Airproof - Footer" active="True">
      <xpath expr="//div[@id='footer']" position="replace">
         <div id="footer" class="oe_structure oe_structure_solo" t-ignore="true" t-if="not no_footer">
            <!-- Content -->
         </div>
      </xpath>
    </record>

.. _website_themes/layout/copyright :

Copyright
=========

There is only one template available at the moment for the copyright bar.

To replace the content or modify its structure, you can add your own code to the following XPath.

.. code-block:: xml
    :caption: ``/website_airproof/views/website_templates.xml``

    <template id="copyright" inherit_id="website.layout">
       <xpath expr="//div[hasclass('o_footer_copyright')]" position="replace">
          <div class="o_footer_copyright" data-name="Copyright">
             <!-- Content -->
          </div>
       </xpath>
    </template>

.. _website_themes/layout/dropzone :

Drop zone
=========

Instead of defining the complete layout of a page, you can create building blocks (snippets) and
let the user choose where to drag and drop them, creating the page layout on their own. We call
this *modular design*.

You can define an empty area that the user can fill with snippets.

.. code-block:: xml

   <div id="oe_structure_layout_01" class="oe_structure"/>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Class
     - Description
   * - oe_structure
     - Define a drag-and-drop area for the user.
   * - oe_structure_solo
     - Only one snippet can be dropped in this area.
   * - oe_structure_not_nearest
     - If a building block is dropped outside of a Drop zone having this class, the block will be
       moved in the nearest Drop Zone.

You can also populate an existing drop zone with your content.

.. code-block:: xml

    <template id="oe_structure_layout_01" inherit_id="..." name="...">
       <xpath expr="//*[@id='oe_structure_layout_01']" position="replace">
          <div id="oe_structure_layout_01" class="oe_structure oe_structure_solo">
             <!-- Content -->
          </div>
       </xpath>
    </template>

.. _website_themes/layout/responsive :

Responsive
==========

Odoo in general relies on the Bootstrap framework which eases the responsiveness of your website on
 desktop and mobile. On Odoo 16, you can mainly take action on 3 aspects:

#. Automatic computed font sizes depending on the device
#. Column sizes on desktop (the columns are automatically stacked on mobile)
#. Visibility conditions (Show/Hide something on desktop/mobile)

.. seealso::
   - `Bootstrap documentation on display property
     <https://getbootstrap.com/docs/5.1/utilities/display/>`_

.. _website_themes/layout/reponsive/font_sizes :

Font sizes
----------

In Bootstrap 5, responsive font sizes are enabled by default, allowing text to scale more naturally
across device and viewport sizes (relying on the `$enable-rfs` variable).

.. seealso::
   - `Bootstrap documentation about responsive font sizes
     <https://getbootstrap.com/docs/5.1/getting-started/rfs/>`_

.. _website_themes/layout/reponsive/column_sizes :

Column sizes
------------

Bootstrap uses a grid made of rows and columns to layout a page. Thanks to this structure, columns
can be sized differently on mobile and desktop. In this version, the Website Builder allows to set
mobile sizes (`col-12` for example) and desktop ones (`col-lg-4` for example) but not the
medium breakpoints (`col-md-4` for example).

.. warning::
   The medium sizes can be set but the end-user is not able to edit them within the Website Builder.

.. seealso::
   - `Bootstrap documentation on responsive breakpoints <https://getbootstrap.com/docs/5.1/layout/breakpoints/>`_
   - `Bootstrap documentation about the grid <https://getbootstrap.com/docs/5.1/layout/grid/>`_

.. _website_themes/layout/reponsive/visibility_conditions :

Visibility conditions
---------------------

In the Odoo Website Builder, entire sections or specific columns can be hidden on mobile or desktop.
 This functionality leverages Bootstrap along with Odoo-specific classes:

- `o_snippet_mobile_invisible`
- `o_snippet_desktop_invisible`

Hide a section on desktop:

.. code-block:: xml

   <section class="s_text_block o_cc o_cc1 o_colored_level pt16 pb16 d-lg-none o_snippet_desktop_invisible" data-snippet="s_text_block" name="Text">
       <!-- Content -->
   </section>

Hide a column on mobile:

.. code-block:: xml

   <section class="s_text_block o_cc o_cc1 o_colored_level pt16 pb16" data-snippet="s_text_block" name="Text">
      <div class="container s_allow_columns">
         <div class="row">
            <div class="col-12 col-lg-6 d-none d-lg-block o_snippet_mobile_invisible">
               Column 1
            </div>
            <div class="col-12 col-lg-6">
               Column 2
            </div>
         </div>
      </div>
   </section>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Class
     - Description
   * - o_snippet_mobile_invisible
     - It tells the Website Builder that the element is hidden and is using visibility conditions
       option.
   * - o_snippet_desktop_invisible
     - It tells the Website Builder that the element is hidden **on desktop and** is using visibility
       conditions option.
   * - d-none
     - Hide the element in every situations.
   * - d-lg-block
     - Show the element from the "large" breakpoint (on desktop).

.. important::
   `o_snippet_mobile_invisible` / `o_snippet_desktop_invisible` classes have to be specified to keep
    the visibility conditions option functional. Even if an element is hidden on desktop, the
    Website Builder displays a list of these elements allowing the end-user to force show the
    element and edit it without switching between mobile and desktop mode.

   .. image:: layout/screenshot-visibility.png
      :alt: Force show a hidden element on the current device.
