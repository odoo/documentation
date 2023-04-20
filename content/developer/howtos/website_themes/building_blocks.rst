===============
Building blocks
===============

Building blocks, also known as snippets, are how users design and layout pages. They are important
XML elements of your design.

The building blocks are classified into four categories:

#. **Structure blocks**: to give a basic structure to the website
#. **Feature blocks**: to describe the features of a product or service
#. **Dynamic Content blocks**: blocks that are animated or interact with the backend
#. **Inner Content blocks**: blocks used inside other building blocks

In this chapter, you will learn how to create custom building blocks and options.

File structure
==============

The layout's file structure is the following.

::

    views
    ├── snippets
    │   └── options.xml
    │   └── s_snippet_name.xml

The styles' file structure is the following.

::

    static
    ├── src
    │   └── snippets
    │       └── options.scss
    │       └── s_snippet_name
    │           └── 000.js
    │           └── 000.scss
    │           └── 000.xml
    │           └── option.js

.. seealso::
   `XML templates of the different snippets
   <{GITHUB_PATH}/addons/website/views/snippets/snippets.xml>`_

.. admonition:: Demo page

   http://localhost:8069/website/demo/snippets

Layout
======

Snippets are editable by the user using the Website Builder. Some Bootstrap classes are important as
**they trigger some Website Builder options**.

Wrapper
-------

The standard main container of any snippet is a `section`. Any section element can be edited like a
block of content that you can move or duplicate.

.. code-block:: xml

   <section class="s_snippet_name" data-name="..." data-snippet="...">
       <!-- Content -->
   </section>

For inner content snippets, any other HTML tag can be used.

.. code-block:: xml

   <div class="s_snippet_name" data-name="..." data-snippet="...">
       <!-- Content -->
   </div>

.. todo:: Missing description in table ...

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - class
     - Unique class name for this snippet
   * - data-name
     - Displayed in the right panel as the name of the snippet. If not found, it will fall back to
       *Block*.
   * - data-snippet
     - Used by the system to identify the snippet

The system automatically adds the `data-name` and `data-snippet` attributes during the drag and
drop based on the template's name.

.. warning::
   Those attributes should be specifically added when a snippet is declared on a theme page.

.. warning::
   Avoid adding a `section` tag inside another `section` tag: this will trigger twice the Website
   Builder's options. You can use inner content snippets instead.

Columns
-------

Any large Bootstrap columns directly descending from a `.row` element (respecting Bootstrap
structure) will be triggered by the Website Builder to make them resizable.

.. code-block:: css

   .row > .col-lg-*

Add padding on columns and sections.

.. code-block:: xml

   class="pt80 pb80"

Add a background based on the color palette for columns and sections.

.. code-block:: xml

   class="o_cc o_cc*"

Make an element not editable.

.. code-block:: xml

   <div class="o_not_editable">

Enable the columns selector.

.. code-block:: xml

   <div class="container s_allow_columns">

Disable the columns option.

.. code-block:: xml

   <div class="row s_nb_column_fixed">

Disable the size option of all child columns.

.. code-block:: xml

   <div class="row s_col_no_resize">

Disable the size option for one column.

.. code-block:: xml

   <div class="col-lg-* s_col_no_resize">

Disable the background color option for all columns.

.. code-block:: xml

   <div class="row s_col_no_bgcolor">

Disable the background color option of one column.

.. code-block:: xml

   <div class="col-lg-* s_col_no_bgcolor">

Add parallax effect.

.. code-block:: xml

   <section class="parallax s_parallax_is_fixed s_parallax_no_overflow_hidden" data-scroll-background-ratio="1">
       <span class="s_parallax_bg oe_img_bg o_bg_img_center" style="background-image: url('...'); background-position: 50% 75%;"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Add a black color filter with an opacity of 50%.

.. code-block:: xml

   <section>
       <div class="o_we_bg_filter bg-black-50"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Add a white color filter with an opacity of 85%.

.. code-block:: xml

   <section>
       <div class="o_we_bg_filter bg-white-85"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Add a custom color filter.

.. code-block:: xml

   <section>
       <div class="o_we_bg_filter" style="background-color: rgba(39, 110, 114, 0.54) !important;"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Add a custom gradient filter.

.. code-block:: xml

   <section>
       <div class="o_we_bg_filter" style="background-image: linear-gradient(135deg, rgba(255, 204, 51, 0.5) 0%, rgba(226, 51, 255, 0.5) 100%) !important;"/>
       <div class="container">
           <!-- Content -->
       </div>
   </section>

Styles
======

Compatibility system
--------------------

When a snippet has a `data-vcss` or `data-vjs` attribute, it means it is an updated version, not the
original one.

.. code-block:: xml

   <section class="s_snippet_name" data-vcss="..." data-js="...">
       <!-- Content -->
   </section>

The `data-vcss` and `data-js` attributes indicate to the system which file version to load for that
snippet (e.g., :file:`001.js`, :file:`002.scss`).

Custom
======

Create the snippet's content.

**Declaration**

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/s_airproof_snippet.xml``

   <?xml version="1.0" encoding="utf-8"?>
   <odoo>

       <template id="s_airproof_snippet" name="...">
           <section class="s_airproof_snippet">
               <!-- Content -->
           </section>
       </template>

   </odoo>

.. warning::
   `data-name` and `data-snippet` attributes have to be specified when a snippet is declared on a
   theme page.

.. tip::
   - Use Bootstrap native classes as much as possible.
   - Prefix all your custom classes.
   - Use underscore lowercase notation to name classes, e.g., `.x_nav`, `.x_nav_item`.
   - Avoid using ID tag.

Add your custom snippet to the list of default snippets, so the user can drag and drop it on the
page, directly from the edit panel.

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="snippets" inherit_id="website.snippets" name="Custom Snippets">
       <xpath expr="//*[@id='default_snippets']" position="before">
           <t id="x_theme_snippets">
               <div id="x_theme_snippets_category" class="o_panel">
                   <div class="o_panel_header">Theme</div>
                   <div class="o_panel_body">
                       <t t-snippet="website_airproof.s_airproof_snippet" t-thumbnail="/website_airproof/static/src/img/wbuilder/s_airproof_snippet.svg">
                           <keywords>Snippet</keywords>
                       </t>
                   </div>
               </div>
           </t>
       </xpath>
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - t-snippet
     - The template to use
   * - t-thumbnail
     - The path to the snippet thumbnail

Options
-------

Options allow users to edit a snippet's appearance using the Website Builder. You can create
snippet options easily and automatically add them to the Website Builder.

Groups properties
-----------------

Options are wrapped in groups. Groups can have properties that define how the included options
interact with the user interface.

`data-selector` binds all the options included in the group to a particular element. It can be used
in combination with `data-target` and `data-exclude`.

.. code-block:: xml

   <div data-selector="section, h1, .custom_class, #custom_id">

`data-js` binds custom JavaScript methods.

.. code-block:: xml

   <div data-js="CustomMethodName" data-selector="...">

`data-drop-in` defines the list of elements where the snippet can be dropped into.

.. todo:: no css selector ...

.. code-block:: xml

   <div data-selector="..." data-drop-in="...">

`data-drop-near` defines the list of elements where the snippet can be dropped beside.

.. code-block:: xml

   <div data-selector="..." data-drop-near="...">

SCSS options
------------

Options can apply standard or custom CSS classes to the snippet. Depending on the method that you
choose, the user interface will behave differently.

`data-select-class="..."`

More `data-select-class` in the same group defines a list of classes the user can apply. Only one
option can be enabled at a time.

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="snippet_options" inherit_id="website.snippet_options" name="...">
       <xpath expr="." position="inside">

           <div data-selector="h1, h2, h3, h4, h5, h6">
               <we-select string="Headings">
                   <we-button data-select-class="">Default</we-button>
                   <we-button data-select-class="x_custom_class_01">01</we-button>
                   <we-button data-select-class="x_custom_class_02">02</we-button>
               </we-select>
           </div>

       </xpath>
   </template>

.. seealso::
   `XML templates of the different snippets
   <{GITHUB_PATH}/addons/website/views/snippets/snippets.xml>`_

JavaScript options
------------------

The `data-js` attribute can be assigned to an options group in order to define a custom method.

.. code-block:: javascript

   /** @odoo-module */

   import options from 'web_editor.snippets.options';

   options.registry.CustomMethodName = options.Class.extend({
       //
   });

The Website Builder provides several events you can use to trigger your custom functions.

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Event
     - Description
   * - start
     - Occurs when the publisher selects the snippet for the first time in an editing session or
       when the snippet is drag-and-dropped on the page.
   * - onFocus
     - Occurs each time the snippet is selected by the user or when the snippet is drag-and-dropped
       on the page.
   * - onBlur
     - Occurs when a snippet loses focus.
   * - onClone
     - Occurs just after a snippet is duplicated.
   * - onRemove
     - Occurs just before the snippet is removed.
   * - onBuilt
     - Occurs just after the snippet is drag-and-dropped on a drop zone. When this event is
       triggered, the content is already inserted in the page.
   * - cleanForSave
     - Occurs before the publisher saves the page.

Dynamic Content templates
-------------------------

By default, Dynamic Content blocks have a selection of templates available in the Website Builder.
You can also add your own template to the list.

Blog posts
~~~~~~~~~~

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="dynamic_filter_template_blog_post_airproof" name="...">
       <div t-foreach="records" t-as="data" class="s_blog_posts_post">
           <t t-set="record" t-value="data['_record']"/>
           <!-- Content -->
       </div>
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - id
     - The ID of the template. Has to start with `dynamic_filter_template_blog_post_`
   * - name
     - Human-readable name of the template

Products
~~~~~~~~

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="dynamic_filter_template_product_product_airproof" name="...">
       <t t-foreach="records" t-as="data" data-number-of-elements="4" data-number-of-elements-sm="1" data-number-of-elements-fetch="8">
           <t t-set="record" t-value="data['_record']"/>
           <!-- Content -->
       </t>
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 40 60

   * - Attribute
     - Description
   * - id
     - The ID of the template. Has to start with `dynamic_filter_template_product_product_`
   * - name
     - Human-readable name of the template
   * - data-number-of-elements
     - Number of products per slide on desktop
   * - data-number-of-elements-sm
     - Number of products per slide on mobile
   * - data-number-of-elements-fetch
     - The total amount of fetched products

Events
~~~~~~

.. code-block:: xml
   :caption: ``/website_airproof/views/snippets/options.xml``

   <template id="dynamic_filter_template_event_event_airproof" name="...">
       <div t-foreach="records" t-as="data" class="s_events_event">
           <t t-set="record" t-value="data['_record']._set_tz_context()"/>
           <!-- Content -->
       </div>
   </template>

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Attribute
     - Description
   * - id
     - The ID of the template. Has to start with `dynamic_filter_template_event_event_`
   * - name
     - Human-readable name of the template
