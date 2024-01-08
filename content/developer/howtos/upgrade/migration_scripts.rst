.. _upgrade/migration-scripts:

=================
Migration scripts
=================

A migration script is a Python file containing a function called `migrate`, which the upgrade
process invokes at the appropriate time. 

The `migrate` function receives two parameters:

- cr: The current database cursor
- version: The installed version of the module

Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, as
well as the `Upgrade Util package <https://github.com/odoo/upgrade-util/>`_.

As described in :ref:`upgrade_custom/upgraded_database/migrate_data`, you might have to use
migration scripts to reflect changes from the source code to their corresponding data.


.. TODOUPG this page should be about migration scripts :

.. #. How to write them : examples, upgrade-util package
.. #. Check if needed: How to test them:
..       Odoo SH : branch in upgrade mode, push a commit
..       On-premise: receive your dump, run it and upgrade all modules via starting odoo-bin

.. .. example:
..    Between Odoo 15 and Odoo 16, the `sale.subscription` model was merged into the `sale.order` model
..    in the standard code of Odoo. This change required the development of standard migration scripts
..    to transfer rows from the `sale_subscription` table to the `sale_order` table, ensuring no data
..    is lost.
.. .. todo:: Check if needed

.. .. note:
..    Only Odoo's employees can modify migration scripts in the standard upgrade process on the upgrade
..    server. Third-party developers can develop custom migration scripts for their custom modules.

Positioning a migration script
==============================

The path of the file should follow this template:
:file:`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py`

- :file:`<module_name>` corresponds to the folder name of a module. For example, :file:`account` for
  the Accounting module, or :file:`sale_subscription` for the Subscriptions module.
- :file:`<major_version>` corresponds to the major version of Odoo (e.g., :file:`16.0` for Odoo 16).
- :file:`<minor_version>` corresponds to the minor version of the module (e.g., :file:`1.2` for the
  `Accounting module in Odoo 16
  <https://github.com/odoo/odoo/blob/16.0/addons/account/__manifest__.py#L5C17-L5C22>`_).
- :file:`<pre|post|end>` corresponds to the :ref:`phase of the migration script
  <upgrade/migration-scripts/phases>`.
- :file:`*.py` corresponds to the name of the migration script. Its name will determine the order in
  which it is executed for that module, version, and phase.


.. _upgrade/migration-scripts/phases:

Phases of migration scripts
===========================

The upgrade process consists of three phases for each version of each module:

  #. The pre-phase, before the module is loaded.
  #. The post-phase, after the module and its dependencies are loaded and upgraded.
  #. The end-phase, after all modules have been loaded and upgraded for that version.

Migration scripts are grouped according to the first part of their filenames into the
corresponding phase. Within each phase, the files are executed according to their lexical order.

.. note::
   If you are unsure which phase to use, use the end-phase.

.. spoiler:: Execution order of example scripts for one module in one version

   - :file:`pre-10-do_something.py`
   - :file:`pre-20-something_else.py`
   - :file:`post-do_something.py`
   - :file:`post-something.py`
   - :file:`end-01-migrate.py`
   - :file:`end-migrate.py`


Writing migration scripts
=========================

To write what we refer as a **custom migration script**, which is a migration script for a custom
module, follow this steps:
   #. Create a `migrations` folder inside the custom module.
   #. Create a `version` folder with the format: `<major_version>.<minor_version>` inside the
      `migrations` folder. Take into account that migration scripts are only executed when the module
      is being upgraded, this means that the version folder needs to be higher than the installed
      version on the database and equal or lower to the upgraded version of the module.
      For example, in an Odoo 16 database, if the custom module is installed in version 1.0 and the
      upgraded version is 1.1; the version folder should be 16.0.1.1.
   #. Create a Python file inside the `version` folder named according to the phase on which it needs
      to be executed. It should follow the template `{pre|post|end}-*.py`.
   #. Create a `migrate` function in the Python file that receives as parameters (cr, version).
   #. Add the logic needed inside the Python file.

.. spoiler:: Two migration scripts: adding "!" at the end of partners' names

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


.. _upgrade/migration-scripts/util:

Upgrade Util package
====================

The `Upgrade Util package <https://github.com/odoo/upgrade-util/>`_ is a library that contains
helper functions to facilitate the writing of upgrade scripts.
To make use of this package, you can follow the `Installation options
<https://github.com/odoo/upgrade-util?tab=readme-ov-file#installation>`_.

.. **Advantages**

.. - Reliability:
..    - The helper functions make sure the data is consitent in your database.
..    - Takes care of indirect references.
.. - Speed:
..    - Call functions and avoid writing code.
..    - Helpers allow to focus on what is important for the upgrade and not think of details.

Once installed, the following packages are available for the migration scripts:

- `odoo.upgrade.util`: the helper themself.
- `odoo.upgrade.testing`: base TestCase classes.

Using the Util package
----------------------

To use the Upgrade Util package in migration scripts, simply import it:

.. code-block:: python

   from odoo.upgrade import util


   def migrate(cr, version):
      # Rest of the script

Now, the helper functions are available to be called through `util`.

Util functions
--------------

The util package provides many useful functions to ease the upgrade process. Here, we will describe
some of the most useful ones. You can find them by going to the `upgrade-util repository
<https://github.com/odoo/upgrade-util/tree/master/src/util>`_.

Fields
~~~~~~

- remove_field
- move_field_to_module
- rename_field
- convert_field_to_html

Models
~~~~~~

- remove_model
- rename_model
- merge_model

Modules
~~~~~~~

- remove_module
- rename_module
- merge_module

ORM
~~~

- env
- recompute_fields

Misc
~~~~

- skippable_cm

PostgreSQL
~~~~~~~~~~

- parallel_execute
- explode_query_range
- create_column
- column_exists
- remove_column
- table_exists
- create_index
- rename_table
- create_m2m

Records
~~~~~~~

- remove_record
- remove_menus
- remove_group
- rename_xmlid
- ref
- ensure_xmlid_match_record
- update_record_from_xml
- reset_cowed_views
- convert_jinja_to_qweb

.. todo:: Add examples 