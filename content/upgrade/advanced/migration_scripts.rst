============================
What are migration scripts ?
============================

Migration scripts form the backbone of Odoo's upgrade process. Each migration script is a Python file containing a function called "migrate," which the upgrade process invokes at the appropriate time. Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, thanks to the "util" package TODO: link to util package.

The standard upgrade process involves a sequence of migration scripts, each responsible for upgrading a specific part of a module's data. When all these scripts have been executed, the data in the PSQL database aligns with the source code of Odoo for the targetted version.

.. example::
    Between Odoo 15 and Odoo 16, the `sale.subscription` model was merged into `sale.order` in the standard code of Odoo. This change required the development of standard migration scripts to transfer rows from the `sale_subscription` PSQL table to the `sale_order` table, ensuring no data is lost. Then, once the standard data has been migrated, the table `sale_subscription` gets removed by another standard migration script.

In this documentation, we make a distinction between *standard* and *custom* migration scripts. Standard migration scripts are those that are part of the source code of Odoo that are developed and maintained by Odoo S.A.. *Custom* migration scripts are any migration scripts that are developed for a custom module, that is a module not created or maintained by the R&D team Odoo S.A.. There is no difference in the code of a standard or custom migration script, but the distinction is important for the upgrade process.

.. seealso::
    `Migrations in Django <https://docs.djangoproject.com/en/4.2/topics/migrations/>`_


.. example::
    
    A migration script to add an exclamation mark at the end of the name of each partner in PSQL would look like this:

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


In summary, the Odoo Shell allows you to execute Python instructions interactively, enabling access to any model and record using the ORM. Migration scripts, on the other hand, are pre-defined Python files executed at specific points during an upgrade.

The Importance of Placement
---------------------------
Unlike the Odoo Shell, allowing you to run code on your database at will, migration scripts must be prepared before launching your Odoo instance and are executed at precise moments during module upgrades. These scripts follow a structured pattern:

`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py``


This complex structure allows an exact ordering of the execution of all the stnadard migration scripts during the upgrade process. They are neatly organized in various folders based on the module, major version (Odoo version), minor version (module version), and ordered by their names, split in 3 phases.

Module name
===========

The module folder is the first part of the file path, found in the "addons/" or "enterprise/" folder of the source code of Odoo. For instance, all migration scripts written for the Accounting module of Odoo, named "account," are placed under `account/migrations/`.

Major version
=============

The second part is pretty simple as the major version is straightforward. If the script must run when the database is running Odoo 16, then the `<major_version>` has to be `16.0`.

.. important::
    Migrations scripts for a specific version of Odoo will be ran in that version. Therefore the script cannot use features that are not available in that version, such as certain features of Python, or referencing fields or methods that have been changed.

Minor version
=============

The minor version corresponds to your module's version in the manifest. It is independant of the major version.

.. example::
    The Accounting (`account`) module of Odoo 16 is currently in the version `1.2` as written in  `its manifest <https://github.com/odoo/odoo/blob/c8a738610778d110734ca5b9b9cfe8723f70f8ce/addons/account/__manifest__.py#L5>`_. Therefore, a migration script that must be executed when upgrading the account module from version 1.1 to version 1.2 in Odoo 16 must be placed here in `account/migrations/16.0.1.2`



Migration script name and the 3 phases
======================================

TODO be reviewed by rd-upgrade.

The upgrade process consists of three phases for each version of each module. It starts with the pre-phase, followed by post- and then end-. Migration scripts are grouped according to the first part of their filenames into the corresponding phase.

The pre-phase is executed before the module and its dependencies are loaded, meaning that you cannot use the ORM to access any model or record, but executing PSQL queries in that phase is possible. The post-phase is executed after the module and its dependencies are loaded and upgraded. At that time, the ORM becomes available and you can refer any model or record. 

The end-phase is a little bit different, as it is executed after all modules have been upgraded for the major version. This phase is useful to perform operations that require the whole database to be upgraded, or to perform operations for which the order is not important such as modifying views.

Migration scripts are grouped according to the first part of their filenames into the corresponding phase. So for example a file named `pre-upgrade_data.py` will execute before `post-do_upgrade_data.py` regardless of their lexical order. In each phase, files are then executed according to their lexical order.

.. example::
    The following example shows the execution order of migration scripts with various names in various phases:
    - pre-zzz.py
    - pre-~do_something.py
    - post--testing.py
    - post-01-zzz.py
    - post-migrate.py
    - post-other_module.py
    - post-~migrate.py
    - end--migrate.py
    - end-01-migrate.py
    - end-aaa.py
    - end-~migrate.py

The placement of the scripts can be important to better organize your custom migration scripts. Furthermore, it allows Upgrade technician to inject custom migration scripts in the standard upgrade process to restore fields or views when reported with our :doc:`Assistance page </upgrade/assistance>`.
