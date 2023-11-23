
========================
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