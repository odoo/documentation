:show-content:

=========================
Discover the JS framework
=========================

.. toctree::
    :titlesonly:
    :glob:

    discover_js_framework/*

This two parts tutorial is designed to introduce you to the basics of the Odoo Javascript framework. Whether
you are new to the framework or have some prior experience, this tutorial will provide you with a
solid foundation for using the Odoo JavaScript framework in your projects.

The first part covers the basics of Owl components, which
are a key part of the Odoo JS framework. Owl components are reusable UI components that can be used
to build complex web interfaces quickly and efficiently. We will explore how to create and use Owl
components in Odoo. Then, in the second part of this tutorial, we focus on creating a dashboard using various
features of Odoo. Dashboards are an essential part of any web application, and provide a nice starting
point to use and interact with the Odoo codebase.

This tutorial assumes that you have some basic knowledge of development with Odoo in general
(models, controllers, QWeb, ...). If you are new to Odoo, we recommend that you start with the
:doc:`Getting started </developer/tutorials/getting_started>` tutorial before proceeding with this
one.

.. note::

    Each chapter of this tutorial is an independant project.  If you feel comfortable with Owl, you can
    start directly with chapter 2.

.. _tutorials/discover_js_framework/setup:

Setup
=====

#. Clone the `official Odoo tutorials repository <https://github.com/odoo/tutorials>`_ and switch to
   the branch `{CURRENT_MAJOR_BRANCH}`.
#. Add the cloned repository to your :option:`--addons-path <odoo-bin --addons-path>`.
#. Start a new Odoo database and install the modules `awesome_owl` (for chapter 1) and `awesome_dashboard`
   (for chapter 2).

Content
=======

- :doc:`discover_js_framework/01_owl_components`
- :doc:`discover_js_framework/02_build_a_dashboard`
