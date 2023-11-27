:show-content:
:show-toc:

.. _upgrade/upgrade_custom_db:

===============================
Upgrading a customized database
===============================

.. note::
   This page is intended to explain the technical aspects of upgrading a database with non-standard
   modules. For a more general overview, please refer to the
   :doc:`upgrade documentation </administration/upgrade>`.

Upgrading a database that contains custom modules requires additional steps compared to 
databases running the standard modules of Odoo since the source code of the custom modules
must be upgraded as well.

.. important::
   When committing to upgrading your custom database, it is crucial to halt the development of new
   features since they would have to be upgraded as well, and might create new issues later during
   the upgrade process. Once your upgrade is complete, you may resume their development.

Custom modules are usually not compatible out of the box with a new version of Odoo due to changes
in the standard modules, such as models being merged, fields being renamed, or methods being
refactored. Therefore, a new version of the modules must be created for each new version
of Odoo, in which its source code is adapted to the new version.

Our recommendation is to first assess your customization by comparing them to the features brought
by the new version of Odoo to detect any redundant customizations that can be removed from your
database, making your modules easier to maintain

Then, make your custom modules installable on a new, empty database to ensure dependencies are
still correct, fields definitions are still valid, etc. This also require some :ref:`testing
<upgrade/test_your_db>` to ensure that all the features of your modules are still working properly.

During that process, you can also :ref:`Request a test upgraded database
<upgrade/request-test-database>` to ensure the request can be successfully processed.

Once your modules are installable and working properly (see
:ref:`Testing your database <upgrade/test_your_db>`), it is time to make them work on an upgraded
database to ensure that they do not depend on a previous installation (e.g., modules already
installed, data already present, etc.). During this process, you might have to develop
:ref:`migration scripts <upgrade/migration-scripts>` to reflect changes in the source code of
your custom modules to their corresponding data.

After this step, it is crucial to do another :ref:`round of testing <upgrade/test_your_db>` to
assess your database usability, as well as to detect any issue with the migrated data.

At this stage, the rest of the upgrade process is the same as described in :doc:`/administration/upgrade`.

.. seealso::
   - :doc:`/developer/reference/user_interface/view_records`
   - :ref:`reference/fields`
   - :ref:`reference/orm/models`
   - `Upgrade-util package <https://github.com/odoo/upgrade-util/>`_

.. _upgrade/remove_customizations:

Assessing your customizations
=============================

Before upgrading your database, it is important to assess the features brought by the new version
of Odoo to determine if any of your customizations have become redundant and can be removed from
your database.

.. example::
   In Odoo 15, the `sale.subscription` model has been merged into the `sale.order` module. Therefore,
   any field added to the `sale.subscription` model must be ported over to the `sale.order` model.
   Other references such as related fields, views, reports, etc., must also be updated to match the
   new model name.

Information on the changes between versions can be found in the `release notes
<https:/odoo.com/page/release-notes>`_ and the :ref:`upgrade report <upgrade/upgrade_report>`.

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

Custom modules on an empty database
===================================

Installing custom modules on an empty database allows you to detect any discrepancies between the
source code of your modules and the new version of Odoo, such as missing dependencies in the
manifest, broken fields relations, views containing deprecated fields, etc.

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

.. important::
   Renaming fields in the source code of a module will not migrate the data from the old field to
   the new one. This requires writing a :ref:`migration script <upgrade/migration-scripts>`.

References to fields in server, scheduled, and automated actions might be broken due to changes in
the fields' definitions. This is usually the case for the actions :guilabel:`Execute Python Code`, :guilabel:`Create a
new Record`, or :guilabel:`Update the Record`.

TODOUPG: can they be removed, or will they simply be archived ?

Those actions are susceptible to being removed by the standard upgrade process, requiring
`intervention from an Odoo developer <https://www.odoo.com/help>`_. Otherwise, it can be fixed
with a custom `migration script <reference/upgrade/migration-scripts>`_.

.. seealso::
   :ref:`Server actions <reference/actions/server>`

More rarely, models can also be renamed or merged into another model. In this case, if a custom
model inherits from the renamed or merged model, its inherit attributes must be updated to match the
new model name.

.. example::
   - Between Odoo 12 and 13, the `account.invoice` model was merged into `account.move`.
   - Between Odoo 15 and 16, the `sale.subscription` model was merged into `sale.order`.
   - Between Odoo 15 and 16, the `account.analytic.group` model was renamed to `account.analytic.plan`.

If a custom model overrides standard methods, you must ensure that their name still matches the
name of the method they are overriding. In case of changes, you can search the method's source code
in the new version to find its new name. If the method has been refactored, the source code might
not exactly match, and a manual search is then required. The same goes for function calls to those methods.

.. example::
   The `sale.subscription` model has a `_prepare_invoice_data` method `in Odoo 15
   <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_
   that has been moved and renamed to `_prepare_invoice` in the `sale.order` model `of Odoo 16
   <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_.

Custom views are usually also impacted with the upgrade, as they may refer fields, models, or
other standard views that have been renamed or refactored. They should be adapted to the new
version of Odoo to avoid errors when loading them.

Once the source code of the custom modules has been upgraded, it is time to test them on a new
database to ensure that they does not depend on a previous installation (e.g., modules
already installed, data already present, etc.). This testing can help you detect issues with
your modules' dependencies, computed fields, etc.

.. seealso::
   :ref:`Testing your database <upgrade/test_your_db>`

Custom modules on an upgraded database
======================================

Reaching this step requires both the source code of your custom modules to be upgraded and a
successful :ref:`upgrade request <upgrade/request-test-database>`. If that is the case, you can
now test your modules on an upgraded database to ensure that the upgrade did not remove any
data, and that your modules are still working properly.

When renaming fields in the process of upgrading the source code of your custom modules, the data
from the old field must be migrated to the new one. This can be done via a :ref:`migration script
<upgrade/migration-scripts>` using the `rename_field` method from the `upgrade-util package
<https://github.com/odoo/upgrade-util/blob/220114f217f8643f5c28b681fe1a7e2c21449a03/src/util/fields.py#L336>`_.
However, this only renames the field and column names. Therefore, custom views, reports, field
relations, automated actions, etc., might still refer to the old field name and need to be
updated in the migration script as well.

This is why it is crucial to do another :ref:`round of testing <upgrade/test_your_db>` to ensure
that no data has been lost due to the upgrade of your custom modules.
