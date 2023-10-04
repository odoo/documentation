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


.. spoiler:: Two similar migration scripts that each add an exclamation mark at the end of the name of each partner

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

.. spoiler:: A migration script that fixes a studio view
    .. code-block:: python

        import logging
        from odoo.upgrade import util  # TODOUPG: link to util package

        _logger = logging.getLogger(__name__)


        def migrate(cr, version):
            with util.edit_view(cr, "studio_customization.odoo_studio_project__e2f15f1a-2bdb-4003-a36e-ed731a1b9fae") as arch:
                node = arch.xpath("""//xpath[@expr="//group[field[@name='activity_summary']]"]""")[0]
                node.attrib["expr"] = "//field[@name='activity_summary']"


Positioning a migration script
------------------------------

Migration scripts are executed depending on their module, the version of Odoo, the version of the module, the phase of the migration script, and finally its name. The path of a migration script is as follows:

`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py`

- `<module_name>` Corresponds to the name of the folder of a module. For example `account` for the Accounting module, or `sale_subscription` for the Subscription module.

- `<major_version>` Corresponds to the major version of Odoo. For example `16.0` for Odoo 16.

- `<minor_version>` Corresponds to the minor version of the module. For example `1.2` for `the Accounting module in Odoo 16 <https://github.com/odoo/odoo/blob/c8a738610778d110734ca5b9b9cfe8723f70f8ce/addons/account/__manifest__.py#L5C17-L5C22>`_.

- `<pre|post|end>` Corresponds to :ref:`the phase of the migration script <upgrade/migration-scripts-phases>`.

- `*` Corresponds to the name of the migration script. Its name will determine the order in which it is executed for that module, version, and phase.

.. important::

    Only employees of Odoo can develop a migration script specifically targetted at one database to be executed during the standard upgrade process. Migration scripts that are part of custom modules will be executed after retrieval of the database from the upgrade server. More information about this process is available in :ref:`upgrade/request-test-database`.

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

.. _upgrade/upgrading_customizations:

Upgrading customizations
========================

Custom modules developed by third parties are maintained by their developers, this usually means fixing issues and bugs, but also includes offering a new version of the module for each new version of Odoo, which is also known as upgrading the custom module. This usually requires a static analysis of the code to find all the references of deprecated elements, but it can be also done by installing the module, and fixing the errors that occur during the installation.


.. seealso::
    - :ref:`reference/views`
    - :ref:`reference/fields`
    - :ref:`reference/orm/models`


.. _upgrade/remove_customizations:

Removing customizations
-----------------------

During an upgrade when :ref:`comparing customizations with the new version of Odoo <upgrade/comparing_customizations>`, there might be some part of the customizations that are not necessary anymore and that can be removed. To do so, a :ref:`migration script <reference/upgrade/migration-scripts>` must be used to uninstall the module from the database during the upgrade process. However, this will only remove the table and columns from the database, and won't have any impact on views, reports, filters, mail templates, automated & server actions, etc ... that refer those fields. Those references must be found and removed from the database in a :ref:`migration script <reference/upgrade/migration-scripts>` ensure a smooth uninstallation.

.. important::
    :ref:`upgrade/test_your_db` is crucial, especially when uninstalling a module that adds new fields. Any view customization refering an uninstall field will prevent the view from being rendered and will therefore not be accessible.

Upgrading custom fields and their data
--------------------------------------

During an upgrade, standard fields can be renamed or moved, in which cases any custom field that has a reference to them must be adapted to the new version of Odoo. To do so, we recommend looking at the properties of the field in the current version of Odoo, and match them with the properties of the fields in the new version of Odoo to find the new name of the field.

.. example::
    In Odoo 12 and before, the model `account.invoice` had a field named `refund_invoice_id` (`source code <https://github.com/odoo/odoo/blob/f7431b180834a73fe8d3aed290c275cc6f8dfa31/addons/account/models/account_invoice.py#L273>`_) which is absent on the model `account.move` after Odoo 13. This field was actually renamed to `reversed_entry_id` during the upgrade process. It is possible to find this information by searching for another Many2one field in `account.move` that is related to `account.move` in the upgraded version of Odoo, for example in `Odoo 16 <https://github.com/odoo/odoo/blob/a0c1e2aa602ae46598a350ea6ae8d8b4a0c1c823/addons/account/models/account_move.py#L453>_`.

.. important::
    When changing the name of fields in the code, their data stored in a PSQL column must be moved with :ref:`migration scripts <reference/upgrade/migration-scripts>` to the new column. Furthermore, fields can also be referenced in other parts of the database such as automated actions, views, reports, etc ... which can be stored in the database independently from the code that also needs to be moved.

The logs of the upgrade process can also be helpful to determine the corresponding field since some migration scripts will explicitely log the renaming.

Upgrading models and methods definitions
----------------------------------------

For upgrading models definitions (which does not happen often), it is simply a matter of comparing the filenames of the models in the old and new version of Odoo. The :ref:`upgrade report <upgrade/upgrade_report>` can also contain useful information about the big changes in the new version of Odoo.

Methods names can also change between two versions of Odoo. For any override of standard method in a custom module, it is necessary to check if the method has been renamed or refactored in the new version of Odoo. The best way to find the new name of a method is to look at the source code of that method in the old version of Odoo and try to match it with the source code of a method in the new version of Odoo. This works wonderfully for methods that have simply been renamed, but it can be more difficult for methods that have been refactored.

.. example::
    The model `sale.subscription` has a method `_prepare_invoice_data` `in Odoo 15 <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_ which has been moved and renmaed to `_prepare_invoice` in the model `sale.order` `in Odoo 16 <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_

Upgrading views definitions
---------------------------

Views defined in Odoo have an external identifier that corresponds to the attribute `id` of the `<record/>` tag of a view. It is very rare to have this external identifier change between two versions of Odoo, and can therefore be used to match them between the 2 versions

Most of the time, the incompatibility of a custom view will be expressed via an error when parsing the view which can happen during the update of a module, or when rendering it.

Custom views on custom models rarely require changes during an upgrade since they do not depend on a model maintained by Odoo S.A., while custom views inheriting from standard views can be impacted by changes in the standard views. In this case, the solution is to compare the same view in the two versions to see how the xpath currently used in the custom view can be adapted to the new version of the standard view.

Upgrading data
==============

Errors during upgrade
---------------------

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
    - :ref:`reference/exceptions`
    - :doc:`/applications/general/users/access_rights`
    - :doc:`/applications/general/users/manage_users`

Upgrading server & automated actions
------------------------------------

Since server and automated actions contain reference to fields, those references might be deprecated when changing version. This is usually applicable to server actions that are set to "Execute Python Code", "Create a new Record", or "Update the Record".

If such action is removed during the standard upgrade process, an intervention from a developer at Odoo is necessary, which you can request via the `assistance page <https://www.odoo.com/help>`_. Otherwise, it can be fixed with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. seealso::
    - :ref:`reference/actions/server`
    - :ref:`reference/upgrade/migration-scripts`

Upgrading studio customizations
===============================

.. _reference/upgrade/studio_views:

Studio views
------------

Issues with the data of Odoo Studio customizations will generally not raise a blocking exception, but will archive the view and issue a warning in the logs. This means that the upgrade process will not stop and therefore custom migration scripts can be written to fix the issue raised in the logs

Unarchiving the view in your database will trigger the validation error if the view is not valid and will show the complete error message, allowing you to find the tag that is causing the issue. However, that might not be the case for invisible or restricted fields. In any case, navigating to the view and opening Odoo Studio will show you the validation error message in most cases.

.. note::
    Custom views generated by Odoo Studio do not always contain immuable target in their xpath definition. Therefore we recommend to take a look at the generated view to see if any improvement can be applied to ensure more robust xpath expressions.

.. spoiler:: The custom view `<view name>` (ID: <id>, Inherit: <inherit_id>, Model: <model>) caused validation issues.

    This warning is raised when a custom view defined in Odoo Studio is not valid anymore in the new version of Odoo. This can happen when a field is removed from the model, or when the xpath target of the view is not valid anymore.

    .. example::
        .. code-block:: console

            2023-09-04 15:04:33,686 28 INFO database odoo.addons.base.models.ir_ui_view: Element '<xpath expr="//group[field[@name='activity_summary']]">' cannot be located in parent view

            View name: Odoo Studio: crm.lead.tree.opportunity customization
            Error context:
            view: ir.ui.view(1137,)
            xmlid: studio_customization.odoo_studio_crm_lead_378fc723-a146-2f5b-b6a7-a2f7e15922f8
            view.model: crm.lead
            view.parent: ir.ui.view(902,)

            2023-09-04 15:04:34,315 28 WARNING db_1146520 odoo.addons.base.maintenance.migrations.base.pre-models-ir_ui_view: The custom view `Odoo Studio: crm.lead.tree.opportunity customization` (ID: 1137, Inherit: 902, Model: crm.lead) caused validation issues.
            Disabling it for the migration ...

    Fixing this issue can be done by ensuring all the elements used as target of the xpath are still present in the parent view. This might require retargetting the xpath if its target has moved position, or if the field was renamed, etc ...
    Our recommendation is to find the element targetted by the xpath in the base version of Odoo, and then modify the target of the xpath to match the same position it in the upgraded version.

.. seealso::
    - :ref:`reference/exceptions`
    - :ref:`reference/views`
    - :ref:`reference/views/inheritance`

Studio fields
-------------

In case of invalid references on a field created by studio, such as the `model`, `related`, or `relation`, the field will be removed by the standard upgrade process and will therefore not be accessible for the custom migration scripts or on the upgraded database.

This is why we insist on thoroughly testing your upgraded database since any data loss will be unrecoverable once the upgrade of your production database is completed.

.. example::
    In the upgrade between Odoo 12 and Odoo 13, the model `account.invoice` was merged with `account.move` and was then subsequentely removed. The standard migrations scripts took care of moving the standard data from the PSQL table `account_invoice` to `account_move`, such as the columns `partner_id`, `name`, `amount_residual`, ...  but any custom field created by the user will not be automatically moved. Then, once the migration of the data to `account_move` is completed, the table `account_invoice` is dropped, with all the custom data still in it.

In those situations, you can `request assistance <https://www.odoo.com/help>`_ from Odoo to upgrade your custom fields during the standard upgrade process by specifying the following:

- The name of the field(s) removed from your database
- The name of the model(s) they were on
- The reason why they were removed (model removed, relation removed, related field removed, ...)
- Which new model, relation, or related field they should be on
- Any additional information that could help retrieving the fields

Studio reports
--------------

The mechanism behind reports customization generated by Odoo Studio is the same as the one used for :ref:`reference/upgrade/studio_views`, but there could be other issues related to the duplication of a report.

When duplicating a report to customize it, Odoo Studio will create a new report by copying the code of the original report. The original report might change throughout the version but since the copy can be altered by the user, the copy remains untouched. This means that the copy might not be compatible anymore with the new version of Odoo.

This can be fixed easily by re-copying the content of the upgraded report, and writing it over the content of the duplicated report. Please note that this might lead to issue with the studio customizations made on the duplicated, such as xpath targets that are not valid anymore.

