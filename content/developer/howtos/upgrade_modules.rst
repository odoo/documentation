:show-content:
:hide-page-toc:
:show-toc:

======================
Upgrade for developers
======================

.. note::
   This page is intended to explain the technical aspects of Upgrading. For a more
   general overview, please refer to the :ref:`upgrade documentation <upgrade>`.

For a custom module to be used in a database running the new version of Odoo, a new version of its
source code be compatible with the latest changes in the source code of Odoo must bereleased.
Those changes usually include fields, models, methods, or views being renamed or refactored.

Renaming references might not be enough, as the :ref:`ORM <reference/orm>` would not be able to
differenciate a field being deleted and another being created, from a simple renaming of a field.
Therefore, you might have to write :ref:`custom migration scripts </developer/howtos/upgrade/migration_scripts>`
to reflect certain changes in the source code of your custom modules to their corresponding data.

For the standard modules of Odoo, the new version of its source code, with their migration
scripts, are published by Odoo alongside the release of the new version, while for custom modules,
the new version with its migration scripts must be developed by the maintainer of the module.

.. important::
   When committing to upgrading custom modules, it is crucial to halt the development of new
   features since they would have to be upgraded as well, and might create new issues during the
   upgrade process. Once the new version of your module has been released, you may resume the
   development.

.. seealso::
   `Upgrade-util package <https://github.com/odoo/upgrade-util/>`_

In a nutshell, upgrading your customizations consists of:

#. Halting the development of new customizations
#. Requesting an upgraded database and upgrading the custom modules' source code
#. Testing the upgraded modules on a new database, to catch any issue with the code
#. Testing the upgraded database with the new version of its modules, to catch any issue with the
   data

.. toctree::
    :maxdepth: 2

    upgrade/migration_scripts
    upgrade/upgrading_customizations

TODO : bottom of this page moved to its own how to page

Upgrading data
==============

Errors during upgrade
---------------------

Suppose some critical data is removed during the standard upgrade process or an exception is raised,
stopping the upgrade process. In that case, a migration script must be injected during the process
to fix the issue. It can only be done by Odoo employees, as only trusted code can be executed on the
Upgrade server, and custom migration scripts are only executed after the standard process succeeds.

Errors can be due to two things:

  - An inconsistency in the data of the original database, in which case the underlying issue can be
    fixed in production **after testing on a duplicated database**
  - An error during the generation of data during the upgrade, in which case the `intervention of a
    developer of the Upgrade team <https://www.odoo.com/help>`_ is required to fix the issue and
    restart the upgrade process

.. spoiler:: Access error

   Access errors are raised when a user tries to access a record without the proper access rights.
   During upgrades, the administrator user (`ID=2`) is used to perform all operations and,
   therefore, should be able to access all records.

    .. example::
       `odoo.exceptions.AccessError: You are not allowed to access 'Applicant' (hr.applicant)
       records.`

       This message means the administrator (`ID=2`) does not have the access rights to read a
       record of the model `hr.applicant` (Recruitment app). The same error message can appear when
       trying to access a record from the web interface without the access rights to do so.

    The error can be solved by giving back all administrator access rights to the administrator,
    even for custom groups or record rules.

.. spoiler:: Validation error

   Validation errors are raised by various safeguards implemented in the source code of Odoo,
   ensuring data is consistent. The message is usually accompanied by the traceback, which might
   display which record is causing the error.

    .. example::
       `odoo.exceptions.ValidationError: the tax group must have the same country_id as the tax
       using it.`

       This error is raised in `this part of the code <https://github.com/odoo/odoo/blob/2e06b0e1ce9bb3d87a1e44d631dcdc1808c1bfcb/addons/account/models/account_tax.py#L179-L183>`_.
       It is possible to conclude that this error appears if there is a record of the `account.tax`
       model for which the country set on the tax group differs from the country set on the tax
       itself.

       Therefore, fixing the error requires searching for faulty taxes and fixing them by setting
       their country to the country of their tax group (or vice versa), either manually via the web
       page of the database, with PSQL queries, or with the :ref:`Odoo shell
       <reference/cmdline/shell>`, depending on the hosting type.

.. seealso::
    - :ref:`reference/exceptions`
    - :doc:`Data access restriction <../tutorials/restrict_data_access>`
    - :doc:`Access rights <../../applications/general/users/access_rights>`
    - :doc:`User management <../../applications/general/users/manage_users>`

Upgrading server, scheduled, and automated actions
--------------------------------------------------

References to fields in server, scheduled, and automated actions might be broken due to changes in
the fields' definitions. This is usually the case for the actions *Execute Python Code*, *Create a
new Record*, or *Update the Record*.

Those actions are susceptible to being removed by the standard upgrade process, requiring
`intervention from an Odoo developer <https://www.odoo.com/help>`_. Otherwise, it can be fixed
with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. note::
   To prevent actions from being removed, it is possible to preemptively change the reference(s) to
   a field before upgrading and restoring them after the upgrade process.

.. seealso::
   :ref:`Server actions <reference/actions/server>`

Upgrading studio customizations
===============================

.. _reference/upgrade/studio_views:

Studio views
------------

The upgrade process archives Odoo Studio view customizations if an issue is detected with their
definition. The logs will display a warning, but the upgrade process will not halt.

Unarchiving the view after the upgrade will trigger any error detected in Xpath targets (the `expr`
attribute) and show the complete error message, allowing you to find the broken Xpath expression. It
is recommended to open Odoo Studio on the unarchived view to ensure the view is working properly.

Views can also be deleted from the database during the upgrade if their corresponding model becomes
invalid, which can happen when models are deleted or changed. Deleted views cannot be restored after
the standard upgrade process, but their deletion can be prevented by `requesting assistance from a
developer of the Upgrade team <https://www.odoo.com/help>`_.

.. note::
   Custom views generated by Studio do not always contain immutable targets in their Xpath
   definition. When developing custom views with Studio, changing the generated Xpath to improve
   their robustness is a good practice.

.. spoiler:: The custom view <name> caused validation issues

   This warning is raised when a custom view created with Studio is not valid anymore due to Xpath
   targets that cannot be found in the parent view.

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

   This issue can be fixed by changing the Xpath target (the `expr` attribute) with a
   :ref:`migration script <reference/upgrade/migration-scripts>` using the `edit_view` method from
   the `upgrade-util package <https://github.com/odoo/upgrade-util/>`_ to match the same element in
   the new version of the view.

.. seealso::
    - :ref:`reference/exceptions`
    - :ref:`reference/views`
    - :ref:`reference/views/inheritance`

Studio fields
-------------

In case of invalid references on a field created by Studio, such as the `model`, `related`, or
`relation`, the field will be deleted by the standard upgrade process. It will, therefore, not be
accessible for the custom migration scripts or on the upgraded database.

This is why it is necessary to thoroughly test an upgraded database since lost data will **not** be
recoverable once the upgrade of the production database is completed.

.. example::
   In the upgrade from Odoo 12 to Odoo 13, the `account.invoice` model was merged with
   `account.move` and was then subsequently removed. The standard migration scripts took care of
   moving the standard data from the PSQL table `account_invoice` to `account_move` (such as the
   columns `partner_id`, `name`, `amount_residual`, etc.). Custom field created by users were not
   automatically moved. Once the data migration to `account_move` was completed, the
   `account_invoice` table was dropped, with all the custom data still in it.

In those situations, you can `request assistance from Odoo <https://www.odoo.com/help>`_ to upgrade
your custom fields during the standard upgrade process by specifying the following:

- The name of the field(s) removed from your database
- The name of the model(s) they were on
- The reason why they were removed (model removed, relation removed, related field removed, etc.)
- Which new model, relation, or related field they should be on
- Any additional information that could help retrieve the fields

Studio reports
--------------

The mechanism behind reports customization generated by Studio is the same as the one used for
:ref:`reference/upgrade/studio_views`.

For custom reports duplicated from a standard one, the upgrade process will not upgrade the copy,
meaning that it might be incompatible with the new version of Odoo. This can be fixed by re-copying
the content of the upgraded report and writing it over the content of the duplicated report. Note
that this might lead to issues with the Studio customizations made on the duplicate, such as
invalid Xpath targets.

.. important::
   The code of a duplicated report should not be modified to ensure it is upgradable. If you need
   to modify the code of a report, it is recommended to customize it with Studio.