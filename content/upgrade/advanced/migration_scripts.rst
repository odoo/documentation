============================
What are migration scripts ?
============================

Migration scripts form the backbone of Odoo's upgrade process. Each migration script is a Python file containing a function called "migrate," which the upgrade process invokes at the appropriate time. Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, thanks to the "util" package TODO: link to util package.

The standard upgrade process involves a sequence of migration scripts, each responsible for upgrading a specific part of a module's data. When all these scripts have been executed, the data in the PSQL database aligns with the source code of Odoo for the targetted version.

.. example::
    Between Odoo 15 and Odoo 16, the `sale.subscription` model was merged into `sale.order` in the standard code of Odoo. This change required the development of standard migration scripts to transfer rows from the `sale_subscription` PSQL table to the `sale_order` table, ensuring no data is lost. Then, once the standard data has been migrated, the table `sale_subscription` gets removed by another standard migration script.

In this documentation, we make a distinction between *standard* and *custom* migration scripts. Standard migration scripts are those that are part of the source code of Odoo that are developed and maintained by Odoo S.A.. *Custom* migration scripts are any migration scripts that are developed for a custom module, that is a module not created or maintained by the R&D team Odoo S.A.. There is no difference in the code of a standard or custom migration script, but the distinction is important for the upgrade process.

.. seealso::
    `Migrations in Django <https://docs.djangoproject.com/en/4.2/topics/migrations/>`


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
Unlike the Odoo Shell, allowing you to run code on your database at will, migration scripts must be prepared before launching your Odoo instance and are executed at precise moments during module upgrades. These scripts follow a structured pattern:

<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py
This structure may seem complex at first, but it's designed for a reason. During Odoo's upgrade process, which allows your database to transition from, say, Odoo 14 to Odoo 16, hundreds of migration scripts run in a specific order. Imagine the chaos if a migration script meant to be ran between Odoo 15 and Odoo 16 were executed before the one meant for Odoo 14 to Odoo 15 – it would be a mess! Hence, scripts are neatly organized in various folders based on the module, major version (Odoo version), minor version (module version), and ordered by their names with some considerations.

Let's break down the pattern with an example 🌠.

- The module folder is the first part of the file path, found in the "addons/" or "enterprise/" folder of Odoo's source code . For instance, if you want to create a migration script for Odoo's Account module, named "account," your file would go here:

account/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py
- The second part is pretty simple as the major version is straightforward. If your script should run when your database is on Odoo 16, "<major_version>" is 16.0.

account/migrations/16.0.<minor_version>/{pre|post|end}-*.py
- The minor version corresponds to your module's version in the manifest. For example, at present, Odoo 16's accounting module is at version 1.2, as indicated on GitHub. Therefore, if you want your script to run when upgrading the account module from version X to version 1.2 in Odoo 16, you'd place your file here:



account/migrations/16.0.1.2/{pre|post|end}-*.py


- Now, the interesting part: pre-, post-, and end-scripts. The upgrade process has three phases for each version of each module – it starts with the pre-phase, followed by post- and then end-. Migration scripts are grouped according to the first part of their filenames into the corresponding phase. So, a file named "pre-upgrade_data.py" will execute before "post-do_upgrade_data.py" regardless of their lexicographical order.

- As for when these scripts execute in relation to the module's update, pre-scripts run before the module is updated, post-scripts run after the module is updated, and end-scripts run after all modules are updated. Keep in mind that pre-scripts may run before other modules are fully loaded, depending on the module hierarchy.

Back to our example, if we want our migration script to run after the standard migration script "account/migrations/16.0.1.2/pre-migrate.py" and before "account/migrations/16.0.1.2/end-migrate.py" we could name it any of the following examples:

pre-zzz.py
pre-~do_something.py
post--testing.py
post-01-zzz.py
post-migrate.py
post-other_module.py
post-~migrate.py
end--migrate.py
end-01-migrate.py
end-aaa.py
end-~migrate.py
Odoo will execute the migration script between the two other migration scripts. As a result, the final path for our migration script, pertaining to the "account" module in Odoo 16 at version 1.2, between "pre-migrate.py" and "end-migrate.py" can be expressed as follows:

account/migrations/16.0.1.2/pre-~do_something_in_between.py
It's important to note that the examples provided earlier are organized according to the order outlined in this section. Conversely, if we name our script as shown below:

pre-aaa.py
pre-01-test.py
pre--test.py
pre-before_migrate.py
It will be executed prior to "pre-migrate.py." On the other hand, if we name it as follows:

end-~migrate.py
end-zzz.py
It will be executed after "end-migrate.py" due to the lexicographical order that determines when they are executed.