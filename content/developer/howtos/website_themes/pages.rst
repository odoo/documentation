=====
Pages
=====

In this chapter, you will learn how to declare static pages.

.. _website_themes/pages/default :

Default pages
=============

In Odoo, websites come with a few default static pages (Home, Contact us, 404, ...). They are built
the following way.

.. code-block:: xml
   :caption: `/website/data/website_data.xml`

   <template id="website.homepage" name="Home">
      <t t-call="website.layout">
         <t t-set="pageName" t-value="'homepage'"/>
         <div id="wrap" class="oe_structure oe_empty" />
      </t>
   </template>

Each default page is a template with its own content saved into a record. This is the reason why,
:ref:`custom pages are created within a record <website_themes/pages/theme_pages>`.

The `<t -call='website.layout'>` has some variables that can be set:

Define the meta title.

.. code-block:: xml

   <t t-set="additional_title">My Page Title</t>

.. tip::
   The `t-set` here does not pass the value into a `t-value` or a `t-valuef` attribute.
   This is for translation purpose. The content of a `t-value` or a `t-valuef` is not explicitly
   exported for translation. Beside that, as it's written in XML, a string located between an opening
   and a closing tag is considered translatable by default.

   .. example::
      **Good example:**

      .. code-block:: xml

         <t t-set="additional_title">My title</t>

      **Bad example:**

      .. code-block:: xml

         <t t-set="additional_title" t-valuef="My title"/>

Define the meta description.

.. code-block:: xml

   <t t-set="meta_description">This is the description of the page that will appear on Search
   Engines.</t>

Add a CSS class to the page.

.. code-block:: xml

   <t t-set="pageName" t-valuef="..."/>

Hide the header.

.. code-block:: xml

   <t t-set="no_header" t-value="true"/>

Hide the footer.

.. code-block:: xml

   <t t-set="no_footer" t-value="true"/>

If needed, deactivate default pages.

.. code-block:: xml
   :caption: ``/website_airproof/data/pages/home.xml``

   <record id="website.homepage" model="ir.ui.view">
       <field name="active" eval="False"/>
   </record>

.. code-block:: xml
   :caption: ``/website_airproof/data/pages/contactus.xml``

   <record id="website.contactus" model="ir.ui.view">
       <field name="active" eval="False"/>
   </record>

Alternatively, replace the default content of these pages using XPath.

.. code-block:: xml
   :caption: ``/website_airproof/data/pages/404.xml``

   <template id="404" inherit_id="http_routing.404">
       <xpath expr="//*[@id='wrap']" position="replace">
           <t t-set="additional_title" t-value="'404 - Not found'"/>

           <div id="wrap" class="oe_structure">
               <!-- Content -->
           </div>
       </xpath>
   </template>

.. seealso::
   - :doc:`Odoo Documentation on SEO <../../../applications/websites/website/pages/seo>`

.. _website_themes/pages/theme_pages :

Theme pages
===========

You can add as many pages as you want to your website. Instead of defining a `<template>`, create a
page object.

**Declaration**

.. code-block:: xml
   :caption: ``/website_airproof/data/pages/about_us.xml``

   <odoo>
      <data noupdate="1">
         <record id="page_about_us" model="website.page">
               <field name="name">About us</field>
               <field name="is_published" eval="True"/>
               <field name="key">website_airproof.page_about_us</field>
               <field name="url">/about-us</field>
               <field name="website_id" eval="1" />
               <field name="type">qweb</field>
               <field name="arch" type="xml">
                  <t t-name="website_airproof.page_about_us">
                     <t t-call="website.layout">
                        <div id="wrap" class="oe_structure">
                           <!-- Content -->
                        </div>
                     </t>
                  </t>
               </field>
         </record>
      </data>
   </odoo>

.. admonition:: Multiwebsite and `website_id`

   In a module context, the record created above is available, by default, on every website
   available on the database. It's preferable to specify the `website_id` of the website where the
   page will be findable.

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Field
     - Description
   * - name
     - Page name (human-readable).
   * - is_published
     - Define if the page is published (visible to visitors).
   * - key
     - View key (must be unique)
   * - url
     - Relative path where the page is reachable.
   * - type
     - View type
   * - arch
     - View architecture (the markup of your page)

With `<t t-call="website.layout">` you use the Odoo default page layout with your code.

.. _website_themes/pages/theme_pages/noupdate :

`noupdate` attribute
--------------------

This attribute prevents data overwriting.

.. code-block:: xml

   <data noupdate="1">
      <!-- Your record -->
   </data>

**Use case**

There are several static pages created in the module. This one has been installed on the database
and the end-user has updated some of those pages. Some bug fixes must be applied on the
static pages while avoiding any loss of changes made by the end-user.

**Problem**

In case of a module update on the database, every record declared into the module will overwrite
those existing in the database even if the end-user has changed some of these records.

**Solution**

By wrapping the record (or all records declared in the file) into a `<data noupdate="1"></data>`
tag, the record declared is created at
the first module installation but not updated after a module update.

.. spoiler:: What happens if the record has been manually deleted (e.g.: a menu item) ?

   The system detects that this record doesn't exist and will re-create it.

.. spoiler:: Is this method only valid on static page records?

   Of course not. It's technically usable for every type of records.

.. _website_themes/pages/theme_pages/header_overlay :

Header overlay
--------------

Make the header background transparent and stand on top of the page content.

.. code-block:: xml

   <field name="header_overlay" eval="True"/>

.. image:: pages/header-overlay.png
   :alt: Header overlay

.. note::
   To create the content of a static page, use the Odoo way of doing things in order to remain
   editable by the Website Builder. Please note that Odoo takes advantage of Bootstrap framework (5.1.3).

   Find the available classes and components:

   - `Bootstrap cheat sheet <https://getbootstrap.com/docs/5.1/examples/cheatsheet/>`_
   - `Bootstrap documentation <https://getbootstrap.com/docs/5.1/getting-started/introduction/>`_
