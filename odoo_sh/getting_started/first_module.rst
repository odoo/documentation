:banner: banners/odoo-sh.jpg

==================================
Your first module
==================================

Overview
========

This chapter helps you to create your first Odoo module and deploy it on Odoo.sh.
Basic use of git and Github is explained.

In this tutorial, *~/src* is assumed the directory where are located the Git repositories related to your Odoo projects.
Feel free to replace it by the directory of your choice.

Create the development branch
=============================

Clone your Github repository on your computer:

.. code-block:: bash

  $ mkdir ~/src; cd ~/src
  $ git clone https://github.com/<user>/<repository>.git

Replace:

* <user> with your Github user or organization name,
* <repository> with repository name.

Create a new branch:

.. code-block:: bash

  $ git checkout -b feature-1 master

Replace:
* *feature-1* by the name of your choice,
* *master* by the name of your production branch. If you just created your project, and do not have a production branch,
you can leave *master*.


Create the module structure
===========================

Scaffolding the module
----------------------

While not necessary, scaffolding avoids the tedium of setting the basic Odoo module structure.
It nevertheless requires *odoo-bin*, and therefore the
`installation of Odoo <https://www.odoo.com/documentation/11.0/setup/install.html#source-install>`_ on your computer.

Use *odoo-bin scaffold* to generate the module structure in your repository:

.. code-block:: bash

  $ ./odoo-bin scaffold my_module ~/src/<repository>/

Replace:

* <repository> with your repository name.

This will generate the below structure:

::

  my_module
  ├── __init__.py
  ├── __manifest__.py
  ├── controllers
  │   ├── __init__.py
  │   └── controllers.py
  ├── demo
  │   └── demo.xml
  ├── models
  │   ├── __init__.py
  │   └── models.py
  ├── security
  │   └── ir.model.access.csv
  └── views
      ├── templates.xml
      └── views.xml

.. Warning::

  Do not use special characters other than the underscore ( _ ) for your module name, not even an hyphen ( - ).
  This name is used for the Python classes of your module,
  and having classes name with special characters other than the underscore is not valid in Python.

Uncomment the content of the files:

* models/models.py,
  an example of model with its fields,
* views/views.xml,
  a tree and a form view, with the menus opening them,
* demo/demo.xml,
  Demo records for the above example model.
* controllers/controllers.py,
  an example of controller implementing some routes,
* views/templates.xml,
  two example qweb views used by the above controller routes,

Manually
--------

If you want to create your module structure manually,
you can follow `Build an Odoo module <https://www.odoo.com/documentation/11.0/howtos/backend.html>`_ to understand
the structure of a module and the content of each file.

Push the development branch
===========================

.. code-block:: bash

  $ git push -u origin feature-1
