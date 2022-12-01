:show-content:

=================================
Discover the JavaScript Framework
=================================

.. toctree::
    :titlesonly:
    :glob:

    discover_js_framework/*

For this training, we will step into the shoes of the IT staff at the fictional company Awesome
T-Shirt, which is dedicated to printing custom t-shirts for online customers. The Awesome T-Shirt
company uses Odoo to manage orders and has created a dedicated Odoo module to manage their workflow.
The project is currently a simple kanban view, with a few columns.

The usual process is as follows: a customer looking for a nice t-shirt can simply order it from the
Awesome T-Shirt site and give the url for any image they want. They must also fill in some basic
information, such as the desired size and quantity of t-shirts. Once they have confirmed their
order, and once the payment has been validated, the system will create a task in our application.

The big boss of Awesome T-shirt, Bafien Carpink, is unhappy with our implementation. He believes
that by micromanaging more, he will be able to get more revenue from his employees. As the IT staff
for Awesome T-shirt, we are responsible with improving the system. Various independent tasks must be
performed.

Let us now practice our Odoo skills!

.. _howtos/discover_js_framework/setup:

Setup
=====

To follow the training, it is necessary to have basic knowledge on Git and a recent version of Odoo
installed. If you have not installed it yet, we recommend installing it from :ref:`source
<setup/install/source>` (:dfn:`running Odoo from source code`).

To setup your development environment, you can also follow the dedicated chapter in :doc:`Getting
Started: Development environment setup <rdtraining/02_setup>` tutorial.

The last things to do are:

- Clone the `official Odoo tutorials repository <https://github.com/odoo/tutorials>`_ and switch to
  the branch `{BRANCH}`.
- Add the cloned repository to the :option:`--addons-path <odoo-bin --addons-path>`.
- Start a new Odoo database and install the modules `owl_playground`, `awesome_tshirt`, and
  `awesome_gallery`.

Exercises
=========

* :doc:`discover_js_framework/01_components`
