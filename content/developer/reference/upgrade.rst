=======================
Upgrade for developpers
=======================

.. _reference/upgrade/migration-scripts:

Migration scripts
=================

A migration script is a Python file containing a function called `migrate` which the upgrade process invokes at the appropriate time. Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, thanks to the "util" package TODO: link to util package.

.. example::
    Between Odoo 15 and Odoo 16, the `sale.subscription` model was merged into `sale.order` in the standard code of Odoo. This change required the development of standard migration scripts to transfer rows from the `sale_subscription` PSQL table to the `sale_order` table, ensuring no data is lost. Then, once the standard data has been migrated, the table `sale_subscription` gets removed by another standard migration script.

.. seealso::
    `Migrations in Django <https://docs.djangoproject.com/en/4.2/topics/migrations/>`_


.. example:: Two similar migration scripts that each add an exclamation mark at the end of the name of each partner

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
        from odoo.upgrade import util  # TODOUPG: link to util package

        _logger = logging.getLogger(__name__)


        def migrate(cr, version):
            env = util.env(cr)

            partners = env["res.partner"].search([])
            for partner in partners:
                partner.name += "!"

            _logger.info("Updated %s partners", len(partners))


Positioning a migration script
------------------------------

Migration scripts are executed depending on their module, the version of Odoo, the version of the module, the phase of the migration script, and finally its name. The path of a migration script is as follows:

`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py``

- `<module_name>` Corresponds to the name of the folder of a module. For example `account` for the Accounting module, or `sale_subscription` for the Subscription module.

- `<major_version>` Corresponds to the major version of Odoo. For example `16.0` for Odoo 16.

- `<minor_version>` Corresponds to the minor version of the module. For example `1.2` for `the Accounting module in Odoo 16 <https://github.com/odoo/odoo/blob/c8a738610778d110734ca5b9b9cfe8723f70f8ce/addons/account/__manifest__.py#L5C17-L5C22>`_.

- `<pre|post|end>` Corresponds to :ref:`the phase of the migration script <upgrade/migration-scripts-phases>`.

- `*` Corresponds to the name of the migration script. Its name will determine the order in which it is executed for that module, version, and phase.

.. important::

    Only employees of Odoo can develop a migration script specifically targetted at one database to be executed during the standard upgrade process. Migration scripts that are part of custom modules will be executed after retrieval of the database from the upgrade server. More information about this process is available in :ref:`<upgrade/request-test-database>`.

.. _upgrade/migration-scripts-phases:

Phases of migration scripts
===========================

The upgrade process consists of three phases for each version of each module. It starts with the pre-phase, followed by post- and then end-. Migration scripts are grouped according to the first part of their filenames into the corresponding phase.

The pre-phase is executed before the module and its dependencies are loaded, meaning that you cannot use the ORM to access any model or record, but executing PSQL queries in that phase is possible. The post-phase is executed after the module and its dependencies are loaded and upgraded. At that time, the ORM becomes available and you can refer any model or record. 

The end-phase is a little bit different, as it is executed after all modules have been upgraded for the major version. This phase is useful to perform operations that require the whole database to be upgraded, or to perform operations for which the order is not important such as modifying views.

Migration scripts are grouped according to the first part of their filenames into the corresponding phase. So for example a file named `pre-upgrade_data.py` will execute before `post-do_upgrade_data.py` regardless of their lexical order. In each phase, files are then executed according to their lexical order.

.. example:: Execution of migration scripts with various names in different phases for the same module and version

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


Upgrading customizations
========================

Custom modules developed by third parties are maintained by their developers, this usually means fixing issues and bugs, but also includes offering a new version of the module for each new version of Odoo, which is also known as upgrading the custom module. This usually requires a static analysis of the code to find all the references of deprecated elements, but it can be also done by installing the module, and fixing the errors that occur during the installation.


.. seealso::
    - :ref:`reference/views`
    - :ref:`reference/fields`
    - :ref:`reference/orm/models`

Upgrading fields definitions
----------------------------

For upgrading fields definitions, we recommend looking at the properties of the field in the current version of Odoo, and match them with the properties of the fields and models in the new version of Odoo.

.. example::
    In Odoo 12 and before, the model `account.invoice` had a field named `refund_invoice_id` (`source code <https://github.com/odoo/odoo/blob/f7431b180834a73fe8d3aed290c275cc6f8dfa31/addons/account/models/account_invoice.py#L273>`) which cannot is absent on the model `account.move` after Odoo 13. This field was actually renamed to `reversed_entry_id` during the upgrade process. It is possible to find this information by searching for another Many2one field in `account.move` that is related to `account.move` in the upgraded version of Odoo.

.. important::
    When changing the name of fields in the code, their data stored in a PSQL column must be moved with :doc:`migration scripts <reference/upgrade/migration-scripts>` to the new column. Furthermore, fields can also be referenced in other parts of the database such as automated actions, views, reports, etc ... which can be stored in the database independently from the code.

The logs of the upgrade process can also be helpful to determine the corresponding field since some migration scripts will explicitely log the renaming.

Upgrading models and methods definitions
----------------------------------------

For upgrading models definitions (which does not happen often), it is simply a matter of comparing the filenames of the models in the old and new version of Odoo. The :ref:`upgrade report <upgrade-faq/upgrade-report>` can also contain useful information about the big changes in the new version of Odoo.

Methods names can also change between two versions of Odoo. For any override of standard method in a custom module, it is necessary to check if the method has been renamed or refactored in the new version of Odoo. The best way to find the new name of a method is to look at the source code of that method in the old version of Odoo and try to match it with the source code of a method in the new version of Odoo. This works wonderfully for methods that have simply been renamed, but it can be more difficult for methods that have been refactored.

.. example::
    The model `sale.subscription` has a method `_prepare_invoice_data` `in Odoo 15 <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_ which has been moved and renmaed to `_prepare_invoice` in the model `sale.order` `in Odoo 16 <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_

Upgrading views definitions
---------------------------

Views defined in Odoo have an external identifier that corresponds to the attribute `id` of the `<record/>` tag of a view. It is very rare to have this external identifier change between two versions of Odoo, and can therefore be used to match them between the 2 versions

Most of the time, the incompatibility of a custom view will be expressed via an error when parsing the view which can happen during the update of a module, or when rendering it.

TODOUPG talk about custom standalone view vs custom view inheritance. For standalone : probably need to find the new name for the fields, for view inheritance : probably need to change the xpath target

Upgrading data
--------------

Errors during upgrade
=====================

When the upgrade platform upgrades a database, an exception can be raised in the code, stopping the upgrade process. In those situation, an intervention of a developer (either from Odoo via the `assistance page <https://www.odoo.com/help>`_ or from the maintainer of the module) is required to fix the issue and restart the upgrade process. **It is important to test the fix on a duplicated database before applying to your production database, in case of any side effects.**

.. note::
    It is possible the issue does not depend on data in your production database, but on standard migration scripts that create or modify records in your database. In those situation, you can `create a ticket to request assistance <https://www.odoo.com/help>`_.

.. spoiler:: Access Error

    During the upgrade, every operation on the database is done by default through the administrator user, which has 2 as its id. This means that if the access rights of that user were changed, some records will be unaccessible and might hinder the upgrade process.

    .. example::
        `odoo.exceptions.AccessError: You are not allowed to access 'Applicant' (hr.applicant) records.`

        Meaning : The administrator (ID=2) does not have the access rights to read a record of the model `hr.applicant` (Recruitment app > Applications). It is the same error message that can appear when trying to access a record from the web interface without the access rights to do so.

    This can be solved by giving back all access rights to the user. More information can be found `here <application/general/users/manage_users>`

.. spoiler:: Validation Error

    This type of error is related to the various safeguards implemented everywhere in the code of Odoo, ensuring that your data does not have any inconsistency. Those error messages can be raised in the standard code of Odoo or in a customization, but there will always be the traceback of the exception, showing you where in the code the error is triggered. However, it might not show directly which record is causing the error.

    .. example::
        `odoo.exceptions.ValidationError: the tax group must have the same country_id as the tax using it.`

        This exception is raised in `this part of the code <https://github.com/odoo/odoo/blob/2e06b0e1ce9bb3d87a1e44d631dcdc1808c1bfcb/addons/account/models/account_tax.py#L179-L183>`_. We can conclude that this error message will appear if there is one record of the `account.tax` model for which the country set on the tax group is different than the country set on the tax itself.

        Therefore, we can search for the faulty taxes and fix them by setting their country to the country of their tax group (or the other way around). This can be done either manually via the web page of your database, with PSQL queries, or with the :ref:`Odoo shell <reference/cmdline/shell>`, depending on the hosting type.


.. seealso::
    :ref:`reference/exceptions`
    :doc:`application/general/users/access_rights`
    :doc:`application/general/users/manage_users`

Upgrading server & automated actions
------------------------------------

Since server and automated actions contain reference to fields, those references might be deprecated when changing version. This is usually applicable to server actions that are set to "Execute Python Code", "Create a new Record", or "Update the Record".

If such action is removed during the standard upgrade process, an intervention from a developer at Odoo is necessary, which you can request via the `assistance page <https://www.odoo.com/help>`_. Otherwise, it can be fixed with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. seealso::
    - :ref:`reference/actions/server`
    - :doc:`/upgrade/advanced/migration_scripts`

Upgrading studio customizations
-------------------------------

Upgrading custom modules
------------------------