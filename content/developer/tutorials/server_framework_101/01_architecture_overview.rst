================================
Chapter 1: Architecture overview
================================

Before we start building our app, let's take a high level glance at the architecture of Odoo.

.. _tutorials/server_framework_101/multitier_app:

Multitier application
=====================

Odoo leverages a `multitier architecture <https://en.wikipedia.org/wiki/Multitier_architecture>`_,
meaning that the presentation, the business logic, and the data storage are separated. More
specifically, it uses a three-tier architecture (image from Wikipedia):

.. image:: 01_architecture_overview/three-tier-architecture.svg
    :align: center
    :alt: Overview of a three-tier application

The presentation tier of Odoo is a combination of HTML5, JavaScript, and CSS. The logic tier is
exclusively written in Python, while the data tier only supports PostgreSQL as an :abbr:`RDBMS
(Relational Database Management System Software)`.

Depending on the scope of your Odoo development, it can be done in any of these tiers. Therefore,
before going any further, it may be a good idea to refresh your memory if you don't have an
intermediate level in these topics. In order to go through this tutorial, you will need a very basic
knowledge of HTML and an intermediate level of Python. There are plenty of tutorials that are freely
accessible, so we cannot recommend one over another since it depends on your background. For
reference, this is the official `Python tutorial <https://docs.python.org/3/tutorial/>`_.

.. _tutorials/server_framework_101/modules:

Odoo modules
============

Odoo relies on modular components called **modules** to extend its functionality. These modules are
essentially self-contained packages of code and data that serve a specific purpose within the
system. You can think of them as building blocks.

Modules offer two main ways to customize Odoo:

- Adding new functionality: You can create entirely new features with modules, such as a real-time
  bus fleet visualization module.
- Extending existing functionality: Modules can also be used to modify or enhance existing Odoo
  features, like adding your country's accounting rules to the generic accounting support.

Terminology:

- Developers group their business features in Odoo *modules*.
- The main user-facing modules are flagged and exposed as *Apps*, but a majority of the modules are
  not Apps.
- *Modules* may also be referred to as *addons*.

In practice, modules are represented by directories. They are placed in a designated location called
the **addons path**, which the server scans to discover available modules.

In the :doc:`setup guide <../setup_guide>`, we cloned the `odoo/tutorials` repository and included
it in the `addons-path` argument when starting the server. The directories present in the repository
are all modules that can be installed on your Odoo server.

.. exercise::
   In your file explorer, navigate to the `odoo/tutorials` repository and inspect the available
   modules. You should find the `real_estate` module in which we will build our real estate
   application throughout this tutorial.

You must have noticed that the module directories are not empty; they all contain at least two
essential files: :file:`__init__.py` and :file:`__manifest__.py`. These files are what makes a
simple directory an Odoo module. We'll get back to it in the next chapter.

----

Ready to start? Let's now :doc:`lay the foundations <02_lay_the_foundations>` of our first Odoo app!
