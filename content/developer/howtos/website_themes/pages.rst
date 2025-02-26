=====
Pages
=====

In this chapter, you will learn how to declare static pages.

Default pages
=============

In Odoo, websites come with a few default static pages (Home, Contact us, 404, ...). They are built
the following way.

.. code-block:: xml

   <template id="website.homepage" name="Homepage">
       <t t-call="website.layout">

           <!-- Variables -->
           <t t-set="additional_title" t-value="'Home'" />

           <div id="wrap" class="oe_structure oe_empty">

               <!-- Content -->

           </div>

       </t>
   </template>

Define the meta title.

.. code-block:: xml

   <t t-set="additional_title" t-value="'...'"/>

Define the meta description.

.. code-block:: xml

   <t t-set="meta_description" t-value="'...'"/>

Add a CSS class to the page.

.. code-block:: xml

   <t t-set="pageName" t-value="'...'"/>

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
   - `Odoo eLearning: Search Engine Optimization (SEO)
     <https://www.odoo.com/slides/slide/search-engine-optimization-seo-648>`_
   - :doc:`Odoo Documentation on SEO <../../../applications/websites/website/pages/seo>`

Theme pages
===========

You can add as many pages as you want to your website. Instead of defining a `<template>`, create a
page object.

**Declaration**

.. code-block:: xml
   :caption: ``/website_airproof/data/pages/about_us.xml``

   <record id="page_about_us" model="website.page">
       <field name="name">About us</field>
       <field name="is_published" eval="True"/>
       <field name="key">website_airproof.page_about_us</field>
       <field name="url">/about-us</field>
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

.. todo:: Missing description in table ...

.. list-table::
   :header-rows: 1
   :stub-columns: 1
   :widths: 20 80

   * - Field
     - Description
   * - name
     - Page name.
   * - is_published
     - Define if the page is published (visible to visitors).
   * - key
     - View key (must be unique)
   * - url
     - URL where the page is reachable.
   * - type
     - View type
   * - arch
     - View architecture

With `<t t-call="website.layout">` you use the Odoo default page layout with your code.

.. _header_overlay:

Header overlay
--------------

Make the header background transparent and stand on top of the page content.

.. code-block:: xml

   <field name="header_overlay" eval="True"/>

.. image:: pages/header-overlay.png
   :alt: Header overlay
