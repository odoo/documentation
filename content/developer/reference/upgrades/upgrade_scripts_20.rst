===============
Upgrade scripts
===============

An upgrade script is a Python file containing a function called :meth:`migrate`, which the upgrade
process invokes during the update of a module.

.. method:: migrate(cr, version)

   :param cr: current database cursor
   :type cr: :class:`~odoo.sql_db.Cursor`
   :param str version: installed version of the module

Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, as
well as the :doc:`./upgrade_utils`.

Writing upgrade scripts
=======================

Upgrade scripts follow a specific tree structure with a naming convention which determines when they
are executed.

The structure of an upgrade script path is :file:`$module/migrations/$version/{pre,post,end}-*.py`,
where `$module` is the module for which the script will run, `$version` is the full version of the
module (including Odoo's major version and the module's minor version) and `{pre|post|end}-*.py` is
the file that needs to be executed. The file's name will determine the :ref:`phase
<upgrade-scripts/phases>` and order in which it is executed for that module and version.

.. note::
   From Odoo 13 the top-level directory for the upgrade scripts can also be named `upgrades`. This
   naming is preferred since it has the correct meaning: *migrate* can be confused with *moving out
   of Odoo*. Thus :file:`$module/upgrades/$version/` is also valid.

.. note::
   Upgrade scripts are only executed when the module is being updated. Therefore, the
   module's minor version set in the `$version` directory needs to be higher than the module's
   installed version and equal or lower to the updated version of the module.

.. example::

   Directory structure of an upgrade script for a custom module named `awesome_partner` upgraded
   to version `2.0` on Odoo 17.

   .. code-block:: text

      awesome_partner/
      |-- migrations/
      |   |-- 17.0.2.0/
      |   |   |-- pre-exclamation.py

   Two upgrade scripts examples with the content of the :file:`pre-exclamation.py`, file adding
   "!" at the end of partners' names:

   .. code-block:: python

      import logging

      _logger = logging.getLogger(__name__)


      def migrate(cr, version):
          cr.execute("UPDATE res_partner SET name = name || '!'")
          _logger.info("Updated %s partners", cr.rowcount)

   .. code-block:: python

      import logging
      from odoo.upgrade import util

      _logger = logging.getLogger(__name__)


      def migrate(cr, version):
          env = util.env(cr)

          partners = env["res.partner"].search([])
          for partner in partners:
              partner.name += "!"

          _logger.info("Updated %s partners", len(partners))

   Note that in the second example, the script takes advantage of the :doc:`./upgrade_utils` to
   access the ORM. Check the documentation to find out more about this library.

.. _upgrade-scripts/phases:

Phases of upgrade scripts
=========================

The upgrade process consists of three phases for each version of each module:

  #. The pre-phase, before the module is loaded.
  #. The post-phase, after the module and its dependencies are loaded and updated.
  #. The end-phase, after all modules have been loaded and updated for that version.

Upgrade scripts are grouped according to the first part of their filenames into the corresponding
phase. Within each phase, the files are executed according to their lexical order.

.. admonition:: Execution order of example scripts for one module in one version

   #. :file:`pre-10-do_something.py`
   #. :file:`pre-20-something_else.py`
   #. :file:`post-do_something.py`
   #. :file:`post-something.py`
   #. :file:`end-01-migrate.py`
   #. :file:`end-migrate.py`
