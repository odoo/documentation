:show-content:
:hide-page-toc:
:show-toc:

===============================
Upgrading a customized database
===============================

.. note::
   This page is intended to explain the technical aspects of Upgrading. For a more
   general overview, please refer to the :ref:`upgrade documentation <upgrade>`.

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
   When committing to upgrading custom modules, it is crucial to halt the development of new
   features since they would have to be upgraded as well, and might create new issues during the
   upgrade process. Once the new version of your module has been released, you may resume the
   development.

.. seealso::
   `Upgrade-util package <https://github.com/odoo/upgrade-util/>`_

In a nutshell, upgrading your customized database requires the following steps:

#. Halting the development of new customizations
#. Requesting an upgraded database and upgrading the custom modules' source code
#. Testing the upgraded modules on a new database, to catch any issue with the code
#. Testing the upgraded database with the new version of its modules, to catch any issue with the
   data

.. toctree::
   :maxdepth: 2

   upgrade/migration_scripts
   upgrade/upgrading_custom_modules
   upgrade/upgrading_data
   upgrade/upgrading_studio_customizations