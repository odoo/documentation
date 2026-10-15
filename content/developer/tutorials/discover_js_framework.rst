:show-content:

==========================
Discover the web framework
==========================

.. toctree::
    :titlesonly:
    :glob:

    discover_js_framework/*

This two-part tutorial introduces the Odoo web framework, the JavaScript code behind the web client.
Whether you are new to the framework or have some prior experience, it will give you a solid
foundation for your own projects.

The first part is about `Owl <https://github.com/odoo/owl>`_, the component framework the web client
is built on. Owl has its own interactive tutorials, which run in the browser, so this part is short:
an overview of the main ideas, then two tutorials to follow in the Owl playground. The second part
builds a dashboard in an Odoo addon. It is mostly an excuse to discover and practice many features
of the web framework: the common layout, plugins, server calls, lazy loading, registries, and
dialogs.

This tutorial assumes that you have some basic knowledge of development with Odoo in general
(models, controllers, QWeb, ...). If you are new to Odoo, we recommend that you start with the
:doc:`/developer/tutorials/server_framework_101` tutorial before proceeding with this one.

.. important::
   Since Odoo 20.0, the web client runs on Owl 3, and the framework changed with it. Signals replace
   `useState`, and most services became plugins. This tutorial is written for Owl 3. You will still
   meet the Owl 2 style in older code and in older tutorials. The `Owl 2 to Owl 3 migration guide
   <https://odoo.github.io/owl/documentation/v3/owl/migration_owl2_to_owl3.html>`_ lists the
   differences.

.. note::
   Each chapter of this tutorial is an independent project. If you feel comfortable with Owl, you
   can start directly with chapter 2.

Content
=======

- :doc:`discover_js_framework/01_owl_components`
- :doc:`discover_js_framework/02_build_a_dashboard`
