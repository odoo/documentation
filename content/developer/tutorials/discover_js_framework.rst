:show-content:

=========================
Discover the JS Framework
=========================

.. toctree::
    :titlesonly:
    :glob:

    discover_js_framework/*

This tutorial is designed to introduce you to the basics of the Odoo Javascript framework. Whether
you are new to the framework or have some prior experience, this tutorial will provide you with a
solid foundation for using the Odoo JavaScript framework in your projects.

This tutorial is divided into two parts. The first part covers the basics of Owl components, which
are a key part of the Odoo JS framework. Owl components are reusable UI components that can be used
to build complex web interfaces quickly and efficiently. We will explore how to create and use Owl
components in Odoo.

The second part of the tutorial focuses on creating a dashboard using various features of Odoo.
Dashboards are an essential part of any web application, and provide a nice starting point to use
and interact with the Odoo codebase.

This tutorial assumes that you have some basic knowledge of development with Odoo in general
(models, controllers, QWeb, ...). If you are new to Odoo, we recommend that you start with the
:doc:`Getting started </developer/tutorials/getting_started>` tutorial before proceeding with this
one.

.. _tutorials/discover_js_framework/setup:

Setup
=====

#. Clone the `official Odoo tutorials repository <https://github.com/odoo/tutorials>`_ and switch to
   the branch `{CURRENT_MAJOR_BRANCH}`.
#. Add the cloned repository to the :option:`--addons-path <odoo-bin --addons-path>`.
#. Start a new Odoo database and install the modules `owl_playground` and `awesome_tshirt`.

Content
=======

- :doc:`discover_js_framework/01_owl_components`
- :doc:`discover_js_framework/02_web_framework`
