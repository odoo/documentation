:show-content:
:hide-page-toc:
:show-toc:

.. _upgrade/upgrade_custom_db:

=============================
Upgrade a customized database
=============================

.. note::
   This page is intended to explain the technical aspects of Upgrading. For a more
   general overview, please refer to the :doc:`upgrade documentation <administration/upgrade>`.

Upgrading a database that contains custom modules requires additional steps compared to 
databases running the standard modules of Odoo since the source code of the custom modules
must be upgraded as well.

For a custom module to be used in a database running the new version of Odoo, a new version of its
source code be compatible with the latest changes in the source code of Odoo must bereleased.
Those changes usually include fields, models, methods, or views being renamed or refactored.

Renaming references might not be enough, as the :ref:`ORM <reference/orm>` would not be able to
differenciate a field being deleted and another being created, from a simple renaming of a field.
Therefore, you might have to write :ref:`custom migration scripts <upgrade/migration-scripts>`
to reflect certain changes in the source code of your custom modules to their corresponding data.

For the standard modules of Odoo, the new version of its source code, with their migration
scripts, are published by Odoo alongside the release of the new version, while for custom modules,
the new version with its migration scripts must be developed by the maintainer of the module.

.. important::
   When committing to upgrading your custom database, it is crucial to halt the development of new
   features since they would have to be upgraded as well, and might create new issues later during
   the upgrade process. Once your upgrade is complete, you may resume their development.

.. seealso::
   `Upgrade-util package <https://github.com/odoo/upgrade-util/>`_

In a nutshell, upgrading your customized database requires the following steps:

#. :ref:`Requesting an upgraded database <upgrade/request-test-database>` and upgrading the
custom modules' source code 
#. Testing the upgraded modules on a new database, to catch any issue with the code
#. Testing the upgraded database with the new version of its modules, to catch any issue with the
   data
#. Upgrading the production database (see :ref:`upgrade/upgrade-prod`)

Upgrading custom modules
========================

TODOUPG this page should be about upgrading custom modules:
#. Why they are not compatible out of the box
#. The process of developing a new version of a custom module : make it installable on empty db,
upgrade a database using it to test the migration of data
#. How to find the derprecated elements
#. Don't forget to write migration scripts

Custom modules are usually not compatible out of the box with a new version of Odoo due to changes
in the standard modules, such as models being merged, fields being renamed, or methods being
refactored. Therefore, a new version of the modules must be created for each new version
of Odoo, in which its source code is adapted to the new version.

To make the process of releasing a new version easier, we recommend exploring the new features 
brought by the latest versions of Odoo to find out if any of your customizations have become
derprecated or can be replaced by a standard feature.

.. example::
   In Odoo 15, the `sale.subscription` model has been merged into the `sale.order` module. Therefore,
   any field added to the `sale.subscription` model must be ported over to the `sale.order` model.
   Other references such as related fields, views, reports, etc., must also be updated to match the
   new model name.

Information on the changes between versions can be found in the `release notes
<https:/odoo.com/page/release-notes>`_ and the :ref:`upgrade report <upgrade/upgrade_report>`.

.. seealso::
   - :doc:`/developer/reference/user_interface/view_records`
   - :ref:`reference/fields`
   - :ref:`reference/orm/models`

.. _upgrade/remove_customizations:

Removing customizations
-----------------------

Modules that have become redundant with the release of a new version of Odoo can be removed
from your database with a :ref:`migration script <upgrade/migration-scripts>` using the
`uninstall_module` method from the `upgrade-util package <https://github.com/odoo/upgrade-util/blob/master/src/util/modules.py#L71>`__.

If only a few elements of a module have become redundant, it is possible to remove them one by one
using `remove_field`, `remove_model`, `remove_view`, etc., from the `upgrade-util package
<https://github.com/odoo/upgrade-util/blob/master/src/util/>__`.

.. warning::
   Don't forget that fields, models, and views can still be referenced in other records such as
   automated and server actions, mail templates, filters, etc. . Those references must be found
   and removed from the database, preferably in the same migration script.

.. important::
   :ref:`Testing your database <upgrade/test_your_db>` is crucial, especially when removing
   customizations. Any customized view, report, filter, mail template, automated and server
   actions, etc., referring to a missing record will prevent them from working correctly and might
   block your processes in certain situations.

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
   The `sale.subscription` model has a `_prepare_invoice_data` method `in Odoo 15
   <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_
   that has been moved and renamed to `_prepare_invoice` in the `sale.order` model `of Odoo 16
   <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_.

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

Testing the upgraded module
===========================

Once the source code of the custom modules has been upgraded, it is time to test them on a new
database to ensure that they does not depend on a previous installation (e.g., modules
already installed, data already present, etc.). This testing can help you detect issues with
your modules' dependencies, computed fields, etc.

.. seealso::
   :ref:`Testing your database <upgrade/test_your_db>`

Upgrading data
==============

Upgrading server, scheduled, and automated actions
--------------------------------------------------

References to fields in server, scheduled, and automated actions might be broken due to changes in
the fields' definitions. This is usually the case for the actions :guilabel:`Execute Python Code`, :guilabel:`Create a
new Record`, or :guilabel:`Update the Record`.

TODOUPG: can they be removed, or will they simply be archived ?

Those actions are susceptible to being removed by the standard upgrade process, requiring
`intervention from an Odoo developer <https://www.odoo.com/help>`_. Otherwise, it can be fixed
with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. note::
   To prevent actions from being removed, it is possible to preemptively change the reference(s) to
   a field before upgrading and restoring them after the upgrade process.

.. seealso::
   :ref:`Server actions <reference/actions/server>`

.. _upgrade/migration-scripts:

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