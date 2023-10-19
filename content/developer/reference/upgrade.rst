=======================
Upgrade for developpers
=======================

.. _reference/upgrade/migration-scripts:

Migration scripts
=================

A migration script is a Python file containing a function called `migrate` which the upgrade process invokes at the appropriate time. Typically, this function executes one or multiple SQL queries and can also access Odoo's ORM, as well as the `upgrade-util package <https://github.com/odoo/upgrade-util/>`_.

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
        from odoo.upgrade import util

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
        from odoo.upgrade import util

        _logger = logging.getLogger(__name__)


        def migrate(cr, version):
            with util.edit_view(cr, "studio_customization.odoo_studio_project__e2f15f1a-2bdb-4003-a36e-ed731a1b9fae") as arch:
                node = arch.xpath("""//xpath[@expr="//group[field[@name='activity_summary']]"]""")[0]
                node.attrib["expr"] = "//field[@name='activity_summary']"


.. note::

    Only Odoo's employees can modify migration scripts in the standard upgrade process on the upgrade server. Third-party developers can only develop custom migration scripts that are executed when upgrading their custom module, after the standard upgrade process.

Positioning a migration script
------------------------------

Migration scripts are executed depending on their module, the version of Odoo, the version of the module, the phase of the migration script, and finally its name. The path of the file should follow this template:

`<module_name>/migrations/<major_version>.<minor_version>/{pre|post|end}-*.py`

- `<module_name>` Corresponds to the name of the folder of a module. For example `account` for the Accounting module, or `sale_subscription` for the Subscriptions module.

- `<major_version>` Corresponds to the major version of Odoo (e.g. `16.0` for Odoo 16).

- `<minor_version>` Corresponds to the minor version of the module (e.g. `1.2` for `the Accounting module in Odoo 16 <https://github.com/odoo/odoo/blob/c8a738610778d110734ca5b9b9cfe8723f70f8ce/addons/account/__manifest__.py#L5C17-L5C22>`_).

- `<pre|post|end>` Corresponds to :ref:`the phase of the migration script <upgrade/migration-scripts-phases>`.

- `*.py` Corresponds to the name of the migration script. Its name will determine the order in which it is executed for that module, version, and phase.

.. _upgrade/migration-scripts-phases:

Phases of migration scripts
===========================

The upgrade process consists of three phases for each version of each module :

    #. The pre-phase, before the module and its dependencies are loaded. The ORM is not available at that time.
    #. The post-phase, after the module and its dependencies are loaded and upgraded.
    #. The end-phase, after all modules have been upgraded for that version.

.. note::
    If you are unsure which phase to use, use the end-phase.

Migration scripts are grouped according to the first part of their filenames into the corresponding phase. So for example a file named `pre-upgrade_data.py` will execute before `post-do_upgrade_data.py` regardless of their lexical order. In each phase, files are then executed according to their lexical order.

.. spoiler:: Order of execution of example migration scripts for one module in one version.

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

Custom modules' source code maintained by third parties must be upgraded to be compatible with each new version of Odoo. This usually requires a static analysis of the code to find all the references of deprecated elements, but it can be also done by installing the module, and fixing the errors that occur during the installation.

Information on the changes between versions can be found in the `release notes <https:/odoo.com/page/release-notes>`_ and in the `upgrade report <upgrade/upgrade_report>`.


.. seealso::
    - :ref:`reference/views`
    - :ref:`reference/fields`
    - :ref:`reference/orm/models`


.. _upgrade/remove_customizations:

Removing customizations
-----------------------

Some customizations might become redundant with features brought by the new version of Odoo which means those customizations can be removed from your database. This can be done in a :ref:`migration script <reference/upgrade/migration-scripts>` using the `uninstall_module` method from the `upgrade-util package <https://github.com/odoo/upgrade-util/>`_ which will rename the field and the column in the database, but won't have any impact on views, reports, filters, mail templates, automated & server actions, etc ... that refer those fields. Those references must be found and removed from the database as well in the same migration script.

.. important::
    :ref:`Testing your database <upgrade/test_your_db>` is crucial, especially when uninstalling a custom module. Any customized view, report, filter, mail template, automated & server actions, etc refering an uninstall field will prevent them from working correctly and might block your processes in certain situations.

.. seealso::
    :ref:`upgrade/comparing_customizations`

Upgrading custom fields and their data
--------------------------------------

Any custom field that has a reference to a modified standard field must be adapted to the new version of Odoo. To find the corresponding field in the new version, we recommend looking at its properties, and find a field with matching properties. You can also make use of the :ref:`upgrade report <upgrade/upgrade_report>` and the `release notes <https:/odoo.com/page/release-notes>`_ to support your search.

.. example::
    In Odoo 12 and before, the model `account.invoice` had a field named `refund_invoice_id` (`source code <https://github.com/odoo/odoo/blob/f7431b180834a73fe8d3aed290c275cc6f8dfa31/addons/account/models/account_invoice.py#L273>`_) which is absent on the model `account.move` after Odoo 13. This field was renamed to `reversed_entry_id` during the upgrade process. It is possible to find this information by searching for another Many2one field in `account.move` that is related to `account.move`, for example in `Odoo 16 <https://github.com/odoo/odoo/blob/a0c1e2aa602ae46598a350ea6ae8d8b4a0c1c823/addons/account/models/account_move.py#L453>`_.

.. note::
    Renaming field can be done with the `rename_field` method from `the upgrade-util package <https://github.com/odoo/upgrade-util/blob/220114f217f8643f5c28b681fe1a7e2c21449a03/src/util/fields.py#L336>`_. However, this will only rename the field and the column name, hence custom views, reports, fields relations, automated actions, etc might still refer to the old field name and will need to be updated in the migration script as well.

Upgrading models and methods definitions
----------------------------------------

Upgrading custom models mostly consist of ensuring that the name of the module and its inheritances are correct. The :ref:`upgrade report <upgrade/upgrade_report>` and the `release notes <https:/odoo.com/page/release-notes>`_ can contain useful information in regards to various standard models being changed or renamed.

.. example::
    The model `sale.subscription` has a method `_prepare_invoice_data` `in Odoo 15 <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_ which has been moved and renmaed to `_prepare_invoice` in the model `sale.order` `in Odoo 16 <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_

In case of a custom model overriding standard methods, you must ensure that their name still matches the name of the method they are overriding. In case of changes, you can search the source code of the method in the new version to find its new name. If the method has been refactored, the source code might not match exactly and a manual search is therefore required.

Upgrading views definitions
---------------------------

Views defined in Odoo have an external identifier that corresponds to the attribute `id` of the `<record/>` tag of a view which can be used to match them between the 2 versions.

Most of the time, the incompatibility of a custom view will be expressed via an error when parsing the view which can happen during the update of a module, or when rendering it.

Custom views for custom models require upgrading only if its custom model has been changed by the third-party developer, while custom views inheriting from standard views can be impacted by changes in the standard views. In this case, the custom views' source code require an upgrade to be compatible with the new version of its parent view.

This can be done by retargetting the various Xpath expression to match an equivalent element that might have been moved or renamed.

Upgrading data
==============

Errors during upgrade
---------------------

If some important data is removed during the standard upgrade process or that an exception is raised, stopping the upgrade process, a migration script must be injected during the process to fix the issue, which can only be done by Odoo's employee. This is due to the fact only trusted code can be executed on the Upgrade server, and that custom migration scripts are only executed after the standard process succeeds.

This can be due to two things :

    - An inconsistency in the data of the original database, in which case the underlying issue can be fixed in production **after testing on a duplicated database**
    - An error during the generation of data during the upgrade, in which case the `intervention of a developer of the Upgrade team <https://www.odoo.com/help>`_ is required to fix the issue and restart the upgrade process.

.. spoiler:: Access error

    Access errors are raised when an user tries to access a record with not enough access rights (help me reformulate XPL please haha). In upgrades, the administrator user (with ID=2) is used to perform all the operations, and therefore has to have all access rights to all records.

    .. example::
        `odoo.exceptions.AccessError: You are not allowed to access 'Applicant' (hr.applicant) records.`

        Meaning : The administrator (ID=2) does not have the access rights to read a record of the model `hr.applicant` (Recruitment app > Applications). It is the same error message that can appear when trying to access a record from the web interface without the access rights to do so.

    This can be solved by giving back all administrator access rights to the administrator, even for custom groups or record rules.

    .. seealso::
        - :doc:`User rights </applications/general/users/manage_users>`
        - :doc:`Groups, access rights, and record rules </developer/tutorials/restrict_data_access>`

.. spoiler:: Validation Error

    Validation errors are raised by various safeguards implemented in the source code of Odoo, ensuring data is consistant. Thankfully, the error message is usually accompanied by the traceback which might show which record is causing the error.

    .. example::
        `odoo.exceptions.ValidationError: the tax group must have the same country_id as the tax using it.`

        This exception is raised in `this part of the code <https://github.com/odoo/odoo/blob/2e06b0e1ce9bb3d87a1e44d631dcdc1808c1bfcb/addons/account/models/account_tax.py#L179-L183>`_. We can conclude that this error message will appear if there is one record of the `account.tax` model for which the country set on the tax group is different than the country set on the tax itself.

        Therefore, we can search for the faulty taxes and fix them by setting their country to the country of their tax group (or the other way around). This can be done either manually via the web page of your database, with PSQL queries, or with the :ref:`Odoo shell <reference/cmdline/shell>`, depending on the hosting type.


.. seealso::
    - :ref:`reference/exceptions`
    - :doc:`/applications/general/users/access_rights`
    - :doc:`/applications/general/users/manage_users`
    - :doc:`Groups, access rights, and record rules </developer/tutorials/restrict_data_access>`

Upgrading server, scheduled, and automated actions
--------------------------------------------------

References to fields in server, scheduled, and automated actions might be broken due to change in the fields' definition. This is usually the case foractions that are set to "Execute Python Code", "Create a new Record", or "Update the Record".

Those actions are susceptible to be removed by the standard upgrade process, requiring the `intervention from a developer at Odoo <https://www.odoo.com/help>`_. Otherwise, it can be fixed with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. note::

    Actions can also be saved from their deletion by preemptively changing the reference(s) to the field before upgrading and restoring them after the upgrade process.

.. seealso::
    - :ref:`reference/actions/server`
    - :ref:`reference/upgrade/migration-scripts`

Upgrading studio customizations
===============================

.. _reference/upgrade/studio_views:

Studio views
------------

Odoo Studio view customizations are archived by the upgrade process if an issue is detected with their definition, in which case a warning will be displayed in the logs but the upgrade process will not halt.

Unarchiving the view after the upgrade will trigger any error detected in Xpath targets (the `expr` attribute) and show the complete error message, allowing you to find the broken Xpath expression. To ensure that the view is working properly, we recommend to open Odoo Studio on the unarchived view to ensure no issues remains.

Views can also be deleted from the database during the upgrade if their corresponding model becomes invalid, which can happen when models are deleted or changed. Deleted views cannot be restored after the standard upgrade process but their deletion can be prevented by `requesting assistance from a developer of the Upgrade team <https://www.odoo.com/help>`_.

.. note::
    Custom views generated by Odoo Studio do not always contain immuable target in their xpath definition. When developing custom views with Odoo Studio, it is a good practice to change the generated Xpath to improve their robustness.

.. spoiler:: The custom view `<view name>` (ID: <id>, Inherit: <inherit_id>, Model: <model>) caused validation issues.

    This warning is raised when a custom view created with Odoo Studio is not valid anymore due to Xpath targets that cannot be found in the parent view.

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

    This issue can be fixed by changing the Xpath target (the `expr` attribute) with a :ref:`migration script <reference/upgrade/migration-scripts>` using the `edit_view` method from the `upgrade-util package <https://github.com/odoo/upgrade-util/>`_ to match the same element in the new version of the view.

.. seealso::
    - :ref:`reference/exceptions`
    - :ref:`reference/views`
    - :ref:`reference/views/inheritance`

Studio fields
-------------

In case of invalid references on a field created by studio, such as the `model`, `related`, or `relation`, the field will be deleted by the standard upgrade process and will therefore not be accessible for the custom migration scripts or on the upgraded database.

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

The mechanism behind reports customization generated by Odoo Studio is the same as the one used for :ref:`reference/upgrade/studio_views`.

For custom reports duplicated from a standard one, the upgrade process will not upgrade the copy, meaning that it might be incompatible with the new version of Odoo. This can be fixed by re-copying the content of the upgraded report, and writing it over the content of the duplicated report. Please note that this might lead to issue with the studio customizations made on the duplicated, such as xpath targets that are not valid anymore.

.. important::

    The code of a duplicated report should not be modified in order to ensure its upgradeability. If you need to modify the code of a report, it is recommended to customize it with studio as stated in the banner

    .. image:: /developer/reference/upgrade/edit-standard-view-banner.png
        :alt: Screenshot of a blue banner showing the text "Be aware that editing the architecture of a standard view is not advised, since the changes will be overwritten during future module updates. We recommend applying modifications to standard views through inherited views or customization with Odoo Studio."
