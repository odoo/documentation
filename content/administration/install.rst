:show-content:

=======
Install
=======

Depending on the intended use case, there are multiple ways to install Odoo - or not install it at
all.

- :doc:`Online <install/online>` is the easiest way to use Odoo in production or to try it.

- :doc:`Packaged installers <install/packages>` are suitable for testing Odoo and developing
  modules. They can be used for long-term production with additional deployment and maintenance
  work.

- :doc:`Source install <install/source>` provides greater flexibility, as it allows, for example,
  running multiple Odoo versions on the same system. It is adequate to develop modules and can be
  used as a base for production deployment.

- A `Docker <https://hub.docker.com/_/odoo/>`_ base image is available for development or
  deployment.

.. _install/editions:

Editions
========

There are two different editions.

**Odoo Community** is the free and open-source version of the software, licensed under the `GNU
LGPLv3 <https://github.com/odoo/odoo/blob/master/LICENSE>`_. It is the core upon which Odoo
Enterprise is built.

**Odoo Enterprise** is the shared source version of the software, giving access to more
functionalities, including functional support, upgrades, and hosting. `Pricing
<https://www.odoo.com/pricing-plan>`_ starts from one app free.

.. tip::
   :doc:`Switch from Community to Enterprise <maintain/enterprise>` at any time (except for the
   source install).

.. toctree::

   install/online
   install/packages
   install/source
   install/deploy
   install/cdn
   install/email_gateway
   install/geo_ip
