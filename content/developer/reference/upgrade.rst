======================
Upgrade for developers
======================

The upgrade process
===================

TODOUPG re-analyze to see if necessary

#. Exporting the database to a file
#. Uploading the file to the upgrade server
#. Running a series of :ref:`standard migration scripts <reference/upgrade/migration-scripts>` to
   upgrade standard modules
#. Downloading the upgraded database
#. Importing the file into a database
#. (*If applicable*) :ref:`Custom migration scripts <reference/upgrade/migration-scripts>`
   developed by the maintainer of your custom modules are ran to upgrade them.

.. _reference/upgrade/migration-scripts:

Migration scripts
=================

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

.. spoiler:: Migration script: fixing a Studio view

   .. code-block:: python

      import logging
      from odoo.upgrade import util

      _logger = logging.getLogger(__name__)


      def migrate(cr, version):
          with util.edit_view(cr, "studio_customization.odoo_studio_project__e2f15f1a-2bdb-4003-a36e-ed731a1b9fae") as arch:
              node = arch.xpath("""//xpath[@expr="//group[field[@name='activity_summary']]"]""")[0]
              node.attrib["expr"] = "//field[@name='activity_summary']"

.. note::
   Only Odoo's employees can modify migration scripts in the standard upgrade process on the upgrade
   server. Third-party developers can develop custom migration scripts for their custom modules.

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

.. _upgrade/upgrading_customizations:

Upgrading customizations
========================

The source code of custom modules maintained by third parties must be upgraded to be compatible with
each new version of Odoo. This usually requires a static analysis of the code to find all the
references of deprecated elements. However, it can also be done by installing the module and fixing
the errors that occur during the installation.

Information on the changes between versions can be found in the `release notes
<https:/odoo.com/page/release-notes>`_ and the :ref:`upgrade report <upgrade/upgrade_report>`.

.. seealso::
   - :ref:`reference/views`
   - :ref:`reference/fields`
   - :ref:`reference/orm/models`

.. _upgrade/comparing_customizations:

Comparing customizations to the new version
-------------------------------------------

As many new features are added with each new version, some customizations may become obsolete when
equivalent features become part of the standard version of Odoo.

Therefore, exploring the new features and comparing them with your customizations is recommended.
Removing unnecessary customizations reduces the work needed to maintain and upgrade your database.

.. _upgrade/remove_customizations:

Removing customizations
-----------------------

Customizations that have become redundant with the release of a new version of Odoo can be removed
from your database with a :ref:`migration script <reference/upgrade/migration-scripts>` using the
`uninstall_module` method from the `upgrade-util package <https://github.com/odoo/upgrade-util/blob/master/src/util/modules.py#L71>`__.
This method renames the field and the column in the database but does not impact views, reports,
filters, mail templates, automated and server actions, etc., that refer to those fields. Those
references must be found and removed from the database, as well as in the same migration script.

.. important::
   :ref:`Testing your database <upgrade/test_your_db>` is crucial, especially when uninstalling a
   custom module. Any customized view, report, filter, mail template, automated and server actions,
   etc., referring to an uninstall field will prevent them from working correctly and might block
   your processes in certain situations.

.. seealso::
   :ref:`upgrade/comparing_customizations`

Upgrading custom fields and their data
--------------------------------------

Any custom field that has a reference to a modified standard field must be adapted to the new
version of Odoo. To find the corresponding field in the new version, we recommend looking at its
properties and finding a field with matching properties. You can also use the :ref:`upgrade report
<upgrade/upgrade_report>` and the `release notes <https:/odoo.com/page/release-notes>`_ to support
your search.

.. example::
   In Odoo 12 and before, the `account.invoice` model had a field named `refund_invoice_id` (`source
   code <https://github.com/odoo/odoo/blob/f7431b180834a73fe8d3aed290c275cc6f8dfa31/addons/account/models/account_invoice.py#L273>`_),
   which is absent on the `account.move` model after Odoo 13. This field was renamed to
   `reversed_entry_id` during the upgrade process. It is possible to find this information by
   searching for another Many2one field in `account.move` related to `account.move`, for example,
   `in Odoo 16 <https://github.com/odoo/odoo/blob/a0c1e2aa602ae46598a350ea6ae8d8b4a0c1c823/addons/account/models/account_move.py#L453>`_.

.. note::
   Renaming fields can be done with the `rename_field` method from `the upgrade-util package <https://github.com/odoo/upgrade-util/blob/220114f217f8643f5c28b681fe1a7e2c21449a03/src/util/fields.py#L336>`_.
   However, this only renames the field and column names. Therefore, custom views, reports, field
   relations, automated actions, etc., might still refer to the old field name and need to be
   updated in the migration script as well.

Upgrading models and methods definitions
----------------------------------------

Upgrading custom models consists mainly of ensuring that the module name and its inheritances
are correct. The :ref:`upgrade report <upgrade/upgrade_report>` and the `release notes
<https:/odoo.com/page/release-notes>`_ can contain helpful information concerning  various standard
models being changed or renamed.

.. example::
   The `sale.subscription` model has a `_prepare_invoice_data` method `in Odoo 15 <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_
   that has been moved and renamed to `_prepare_invoice` in the `sale.order` model `of Odoo 16 <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_.

If a custom model overrides standard methods, you must ensure that their name still matches the
name of the method they are overriding. In case of changes, you can search the method's source code
in the new version to find its new name. If the method has been refactored, the source code might
not exactly match, and a manual search is then required.

Upgrading views definitions
---------------------------

Views defined in Odoo have an external identifier corresponding to the `id` attribute of a view's
`<record/>` tag, which can happen during a module update or when rendering it.

Most of the time, the incompatibility of a custom view is expressed via an error when parsing the
view, which can happen during the update of a module or when rendering it.

Custom views for custom models only require upgrading if the custom model has been changed. In
contrast, custom views inheriting from standard views can be impacted by changes in the standard
views. In this case, the custom views' source code requires an upgrade to be compatible with the new
version of its parent view. This can be done by retargetting the various Xpath expressions to match
an equivalent element that might have been moved or renamed.

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