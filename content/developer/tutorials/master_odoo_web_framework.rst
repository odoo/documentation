:show-content:

========================
Master the web framework
========================

.. toctree::
    :titlesonly:
    :glob:

    master_odoo_web_framework/*

This tutorial is designed for those who have completed the :doc:`discover_js_framework` tutorial and
are looking to deepen their knowledge of the web framework. It is organized in four independent
projects, each focusing on different features of Odoo.

.. note::

    Each of these chapters can be done independantly, in any order. Also, be aware that some of them
    cover a lot of material, so they may be quite long.

The first project is about building a `clicker game <https://en.wikipedia.org/wiki/Incremental_game>`_.
While working on it, you will learn various aspects of the web framework: systray, command palette,
dialogs, notifications, customizing existing components and much more.

In the context of the web framework, views usually refers to the javascript implementation of a
component that represents one or many records, depending on a description (`ir.ui.view`). Such
components are actually quite complicated and usually requires various sub systems (a renderer,
a model, a controller, a arch parser, ...). In chapter 2, we create a new view from scratch to
represent a list of images.

Finally, the last project in chapter 3 is about customizing an existing view (a kanban view) by
adding a search panel on its left. It is interesting to see how one can take existing code, and
modify it to suit our needs. Also, it is a realistic project, that will feature many common issues
that arises while working on Odoo.


.. _tutorials/master_odoo_web_framework/setup:

Setup
=====

#. Clone the `official Odoo tutorials repository <https://github.com/odoo/tutorials>`_ and switch to
   the branch `{CURRENT_MAJOR_BRANCH}`.
#. Add the cloned repository to your :option:`--addons-path <odoo-bin --addons-path>`.
#. Start a new Odoo database and install the modules for each chapter that you want to work on:
   `awesome_clicker` (for chapter 1), `awesome_gallery` (for chapter 2) or `awesome_kanban` (for chapter 3).

Content
=======

- :doc:`master_odoo_web_framework/01_build_clicker_game`
- :doc:`master_odoo_web_framework/02_create_gallery_view`
- :doc:`master_odoo_web_framework/03_customize_kanban_view`
