.. _upgrade/migration-scripts:

=================
Migration scripts
=================

TODOUPG this page should be about migration scripts :

#. What they are (python scripts that receives the psql cursor and the version)
#. What they are for : applying a modification on the data of your database when upgrading a module
#. In what circumstances you should use them : when changing the source code of your module between
2 versions of Odoo
#. How to write them : examples, upgrade-util package
#. The different phases and what is their impact: pre no ORM, before module is loaded so before
your new field gets created
#. Where to put them : in <module_name>/migration**s**
#. How to test them Odoo SH : branch in upgrade mode, push a commit, On-premise: receive your
dump, run it and upgrade all modules via starting odoo-bin

A migration script is a Python file containing a function called `migrate`, which the upgrade
process invokes at the appropriate time. Typically, this function executes one or multiple SQL
queries and can also access Odoo's ORM, as well as the `upgrade-util package
<https://github.com/odoo/upgrade-util/>`__.

.. example::
    Between Odoo 15 and Odoo 16, the `sale.subscription` model was merged into the `sale.order` model
    in the standard code of Odoo. This change required the development of standard migration scripts
    to transfer rows from the `sale_subscription` PSQL table to the `sale_order` table, ensuring no
    data is lost. Then, once the standard data has been migrated, the table `sale_subscription` gets
    removed by another standard migration script.

.. seealso::
    `DjangoProject.com documentation: Migrations
    <https://docs.djangoproject.com/en/4.2/topics/migrations/>`_

.. spoiler:: Two migration scripts: adding "!" at the end of partners' names

    .. code-block:: python

        import logging

        _logger = logging.getLogger(__name__)


        def migrate(cr, version):
            cr.execute(
            """
            UPDATE res_partner
               SET name = name || '!'
            """
            )
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

.. spoiler:: Migration script: renaming a field

    .. code-block:: python

        import logging
        from odoo.upgrade import util

        _logger = logging.getLogger(__name__)


        def migrate(cr, version):
            util.rename_field(cr, "account.analytic.line", "analytic_group", "analytic_plan_id")
    

Positioning a migration script
------------------------------

Migration scripts are executed depending on their module, the version of Odoo, the version of the
module, the phase of the migration script, and its name. The path of the file should follow this
template: :file:`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py`

- :file:`<module_name>` corresponds to the folder name of a module. For example, :file:`account` for
    the Accounting module, or :file:`sale_subscription` for the Subscriptions module.
- :file:`<major_version>` corresponds to the major version of Odoo (e.g., :file:`16.0` for Odoo 16).
- :file:`<minor_version>` corresponds to the minor version of the module (e.g., :file:`1.2` for the
    `Accounting module in Odoo 16 <https://github.com/odoo/odoo/blob/c8a738610778d110734ca5b9b9cfe8723f70f8ce/addons/account/__manifest__.py#L5C17-L5C22>`_).
- :file:`<pre|post|end>` corresponds to :ref:`the phase of the migration script
    <upgrade/migration-scripts-phases>`.
- :file:`*.py` corresponds to the name of the migration script. Its name will determine the order in
    which it is executed for that module, version, and phase.

.. _upgrade/migration-scripts-phases:

Phases of migration scripts
---------------------------

The upgrade process consists of three phases for each version of each module:

    #. The pre-phase, before the module and its dependencies are loaded. The ORM is not available at
    that time.
    #. The post-phase, after the module and its dependencies are loaded and upgraded.
    #. The end-phase, after all modules have been upgraded for that version.

.. note::
    If you are unsure which phase to use, use the end-phase.

Migration scripts are grouped according to the first part of their filenames into the corresponding
phase. So, for example, a file named :file:`pre-upgrade_data.py` will execute before
:file:`post-do_upgrade_data.py` regardless of their lexical order. In each phase, files are then
executed according to their lexical order.

.. spoiler:: Execution order of example scripts for one module in one version

    - :file:`pre-zzz.py`
    - :file:`pre-~do_something.py`
    - :file:`post--testing.py`
    - :file:`post-01-zzz.py`
    - :file:`post-migrate.py`
    - :file:`post-other_module.py`
    - :file:`post-~migrate.py`
    - :file:`end--migrate.py`
    - :file:`end-01-migrate.py`
    - :file:`end-aaa.py`
    - :file:`end-~migrate.py`