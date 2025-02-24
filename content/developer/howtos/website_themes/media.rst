=====
Media
=====

Images
======

.. _howto/website_themes/media_logo :

Logo
----

.. code-block:: xml
   :caption: ``/website_airproof/views/website_templates.xml``

   <t t-call="website.placeholder_header_brand">
      <t t-set="_link_class" t-valuef="..."/>
   </t>

Don't forget to create a record of the website logo in the database.

.. code-block:: xml
   :caption: ``/website_airproof/data/website.xml``

   <record id="website.default_website" model="website">
      <field name="logo" type="base64" file="website_airproof/static/src/img/content/logo.png"/>
   </record>
