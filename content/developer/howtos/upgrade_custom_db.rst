=============================
Upgrade a customized database
=============================


.. toctree::
  :titlesonly:
  :glob:

  upgrade/*


Upgrading to a new version of Odoo can be challenging, especially if the database you work on
contains custom modules. This page intent is to explain the technical process of upgrading a
database with customized modules. Refer to :doc:`Upgrade documentation </administration/upgrade>`
for guidance on how to upgrade a database without customized modules.

We consider a custom module, any module that extends the standard code of Odoo and that was not
built with the Studio app. Before upgrading such a module, or before requesting its upgrade, have a
look at the :ref:`upgrade/sla` to make sure who's responsible for it.

While working on what we refer to as the **custom upgrade** of your database, keep in mind the goals
of an upgrade:

#. Stay supported
#. Get the latest features
#. Enjoy the performance improvement
#. Reduce the technical debt
#. Benefit from security improvements

With every new version of Odoo, changes are introduced. These changes can impact modules on which
customization have been developed. This is the reason why upgrading a database that contains custom
modules requires additional steps in order to upgrade the source code.

These are the steps to follow to upgrade customized databases:

#. :ref:`Stop the devolopments and challenge them <upgrade_custom/stop_developments>`.
#. :ref:`upgrade_custom/request_upgrade`.
#. :ref:`Make your module installable on an empty database <upgrade_custom/empty_database>`.
#. :ref:`Make your module installable on the upgraded database <upgrade_custom/upgraded_database>`.
#. :ref:`Test extensively and do a rehearsal <upgrade_custom/testing_rehearsal>`.
#. :ref:`Upgrade in production <upgrade_custom/production>`.


.. _upgrade_custom/stop_developments:

Stop the developments
=====================

Starting an upgrade requires commitment and development resources. If developments keep being made
at the same time, those features will need to be re-upgraded and tested every time you change them.
This is why we recommend a complete freeze of the codebase when starting the upgrade process.
Needless to say, bug fixing is exempt from this recommendation.

Once you have stopped development, it is a good practice to assess the developments made and compare
them with the features introduced between your current version and the version you are targeting.
Challenge the developments as much as possible and find functional workarounds. Removing redundancy
between your developments and the standard version of Odoo will lead to an eased
upgrade process and reduce technical debt.

.. note::
   You can find information on the changes between versions in the `Release Notes
   <https:/odoo.com/page/release-notes>`_.


.. _upgrade_custom/request_upgrade:

Request an upgraded database
============================

Once the developments have stopped for the custom modules and the implemented features have been
challenged to remove redundancy and unnecessary code, the next step is to request an upgraded test
database. To do so, follow the steps mentioned in :ref:`upgrade/request-test-database`, depending on
the hosting type of your database.

The purpose of this stage is not to start working with the custom modules in the upgraded database,
but to make sure the standard upgrade process works seamlessly, and the test database is delivered
properly. If that's not the case, and the upgrade request fails, request the assistance of Odoo via
the `support page <https://odoo.com/help?stage=migration>`_ by selecting the option related to
testing the upgrade.


.. _upgrade_custom/empty_database:

Empty database
==============

Before working on an upgraded test database, we recommend to make the custom developments work on an
empty database in the targeted version of your upgrade. This ensures that the customization is
compatible with the new version of Odoo, allows to analyze how it behaves and interacts with the new
features, and guarantees that they will not cause any issues when upgrading the database.

Making the custom modules work in an empty database also helps avoid changes and wrong
configurations that might be present in the production database (like studio customization,
customized website pages, email templates or translations). They are not intrinsically related to
the custom modules and that can raise unwanted issues in this stage of the upgraded process.

To make custom modules work on an empty database we advise to follow these steps:

#. :ref:`upgrade_custom/empty_database/modules_installable`
#. :ref:`upgrade_custom/empty_database/test_fixes`
#. :ref:`upgrade_custom/empty_database/clean_code`
#. :ref:`Make standard tests run successfully <upgrade_custom/empty_database/standard_test>`

.. _upgrade_custom/empty_database/modules_installable:

Make custom modules installable
-------------------------------

The first step is to make the custom modules installable in the new Odoo version.
This means, starting by ensuring there are no tracebacks or warnings during their installation.
For this, install the custom modules, one by one, in an empty database of the new Odoo version and
fix the tracebacks and warnings that arise from that.

.. todo:: Add examples or references to PR such as attrs change

This process will help detect issues during the installation of the modules. For example:

- Invalid module dependencies.
- Syntax change: assets declaration, OWL updates, attrs.
- References to standard fields, models, views not existing anymore or renamed.
- Xpath that moved or were removed from views.
- Methods renamed or removed.
- ...

.. _upgrade_custom/empty_database/test_fixes:

Test and fixes
--------------

Once there are no more tracebacks when installing the modules, the next step is to test them.
Even if the custom modules are installable on an empty database, this does not guarantee there are
no errors during their execution. Because of this, we encourage to test thoroughly all the
customization to make sure everything is working as expected.

This process will help detect further issues that are not identified during the module installation
and can only be detected in runtime. For example, deprecated calls to standard python or OWL
functions, non-existing references to standard fields, etc.

We recommend to test all the customization, especially the following elements:

- Views
- Email templates
- Reports
- Server actions and automated actions
- Changes in the standard workflows
- Computed fields

We also encourage to write automated tests to save time during the testing iterations, increase the
test coverage, and ensure that the changes and fixes introduced do not break the existing flows.
If there are tests already implemented in the customization, make sure they are upgraded to the new
Odoo version and run successfully, fixing issues that might be present.

.. _upgrade_custom/empty_database/clean_code:

Clean the code
--------------

At this stage of the upgrade process, we also suggest to clean the code as much as possible.
This includes:

- Remove redundant and unnecessary code.
- Remove features that are now part of Odoo standard, as described in
  :ref:`upgrade_custom/stop_developments`.
- Clean commented code if it is not needed anymore.
- Refactor the code (functions, fields, views, reports, etc.) if needed.

.. _upgrade_custom/empty_database/standard_test:

Standard tests
--------------

Once the previous steps are completed, we advise to make sure all standard tests associated to the
dependencies of the custom module pass.
Standard tests ensure the validation of the code logic and prevent data corruption.
They will help you identify bugs or unwanted behavior before you work on your database.

In case there are standard test failing, we suggest to analyze the reason for their failure:

- The customization changes the standard workflow: Adapt the standard test to your workflow.
- The customization did not take into account a special flow: Adapt your customization to ensure it
  works for all the standard workflows.


.. _upgrade_custom/upgraded_database:

Upgraded database
=================

Once the custom modules are installable and working properly in an empty database, it is time to
make them work on an :ref:`upgraded database <upgrade/request-test-database>`.

To make sure the custom code is working flawlessly in the new version, follow these steps:

- :ref:`upgrade_custom/upgraded_database/migrate_data`
- :ref:`upgrade_custom/upgraded_database/test_custom`

.. _upgrade_custom/upgraded_database/migrate_data:

Migrate the data
----------------

During the upgrade of the custom modules, you might have to use :doc:`upgrade/migration_scripts` to
reflect changes from the source code to their corresponding data.

- Any technical data that was renamed during the upgrade of the custom code (models, fields,
  external identifiers) should be renamed using migration scripts to avoid data loss during the
  module upgrade.
- Data from standard models removed from the source code of the newer Odoo version and from the
  database during the standard upgrade process might need to be recovered from the old model table
  if it is still present.

.. todo:: Add example: rename_field, rename_model, rename_module, rename_xmlid
.. todo:: Add example: sale.subscription and/or account.invoice

Migration scripts can also be used to:

- Ease the processing time of an upgrade. For example, to store the value of computed stored fields
  on models with an excessive number of records by using SQL queries.
- Recompute fields in case the computation of their value has changed.
- Uninstall unwanted custom modules.
- Correct faulty data or wrong configurations.

.. todo:: Add example: recompute_fields
.. todo:: Add example: remove_module

.. _upgrade_custom/upgraded_database/test_custom:

Test the custom modules
-----------------------

To make sure the custom modules work properly with your data in the upgraded database, they need to
be tested as well. This helps ensure both the standard and the custom data stored in the database
are consistent and that nothing was lost during the upgrade process.

Things to pay attention to:

- Views not working: During the upgrade, if a view causes issues because of its content, it gets
  disabled. You can find the information on disabled views on the :ref:`Upgrade report
  <upgrade/upgrade_report>`. This view needs to be activated again. To achieve this, we recommend
  the use of migration scripts.
- :doc:`Module data <../tutorials/define_module_data>` not updated: Custom records that have the
  ``noupdate`` flag are not updated when upgrading the module in the new database. For the custom
  data that needs to be updated due to changes in the new version, we recommend to use migration
  scripts to do so.

.. todo:: add example update_record_from_xml


.. _upgrade_custom/testing_rehearsal:

Testing and rehearsal
=====================

When the custom modules are working properly in the upgraded database, it is crucial to do another
round of testing to assess the database usability and detect any issues that might have gone
unnoticed in previous tests. For further information about testing the upgraded database, check
:ref:`upgrade/test_your_db`.

As mentioned in :ref:`upgrade/upgrade-prod`, both standard upgrade scripts and your database are
constantly evolving. Therefore it is highly recommended to frequently request new upgraded test
databases and ensure that the upgrade process is still successful.

In addition to that, make a full rehearsal of the upgrade process the day before upgrading the
production database to avoid undesired behavior during the upgrade and to detect any issue that
might have occurred with the migrated data.


.. _upgrade_custom/production:

Production upgrade
==================

Once you are confident about upgrading your production database, follow the process described on
:ref:`upgrade/upgrade-prod`, depending on the hosting type of your database.
