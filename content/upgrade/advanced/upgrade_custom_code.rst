=============================
Upgrading your custom modules
=============================

If your Odoo database has custom modules installed, you will have to make sure that they are compatible with the new version of Odoo. The standard modules developed by Odoo S.A. exist in each version of Odoo starting from the version of their creation since they are upgraded to be part of the standard package of Odoo for the next version. 

However, custom modules developed by third parties have to be maintained by their developers. If you are the developer of a custom module, you will have to upgrade its code to make it compatible with the new version of Odoo. Otherwise, you should ask the developer responsible for its maintenance to create a version of the module compatible with the new version of Odoo.

There are many ways to go about upgrading your custom modules. Here are the recommended main steps to follow:

- Initialize a database with the new version of Odoo
- Install your module in the new database
- Fix the errors during the installation and during the testing.


Making your custom module installable
-------------------------------------

The first step of upgrading a custom module is to make it installable in the new version of Odoo. To do so, modules must be made compatible with that version of Odoo. This means that all references to fields, models, views, methods, reports, etc. must be updated to match the new version of Odoo.

.. example::
    Between Odoo 14 and Odoo 15, the field `user_id` of the model `project.task` has been renamed to `user_ids`. Therefore, when upgrading a module from before Odoo 14 to after Odoo 15, any reference of `user_id` must be changed to `user_ids` in the code of the module.

This requires a static analysis of the code to find all the references of deprecated elements, but it can be also done by installing the module, and fixing the errors that occur during the installation.

.. important::
    When changing the name of fields in the code, their data stored in a PSQL column must be moved with :doc:`migration scripts </upgrade/advanced/migration_scripts>` to the new column. Furthermore, fields can also be referenced in other parts of the database such as automated actions, views, reports, etc ... which can be stored in the database independently from the code.


Upgrading your fields and models inheritance
=============================================

Finding the new name of a field or model after an upgrade can be quite challenging as it requires some investigation work. The best way to do so is to look at the properties of the fields and models in the current version of Odoo, and match them with the properties of the fields and models in the new version of Odoo.

.. example::
    In Odoo 12 and before, the model `account.invoice` had a field named `refund_invoice_id` (`source code <https://github.com/odoo/odoo/blob/f7431b180834a73fe8d3aed290c275cc6f8dfa31/addons/account/models/account_invoice.py#L273>`_) which cannot be found in the new model `account.move` after Odoo 13. This field was actually renamed to `reversed_entry_id` during the upgrade process. It is possible to find this information by searching for another Many2one field in `account.move` that is related to `account.move` in the upgraded version of Odoo.

The logs of the upgrade process can also be helpful to determine the corresponding field since some migration scripts will explicitely log the renaming.

Models being renamed is more rare and usually easier to discover since there are not many models in an Odoo module. Therefore it is simply a matter of comparing the filenames of the models in the old and new version of Odoo. The :ref:`upgrade-faq/upgrade-report` can also contain useful information about the renaming of models.

Upgrading your method overriding
================================

Just like fields and models, methods can also change between two versions of Odoo. For any override of standard method in a custom module, it is necessary to check if the method has been renamed or refactored in the new version of Odoo.

It can sometimes be tricky to find its new name, especially since they are never logged in the upgrade process. The best way to find the new name of a method is to look at the source code of that method in the old version of Odoo to match it with the source code of the method in the new version of Odoo. This works wonderfully for methods that have simply been renamed, but it can be more difficult for methods that have been refactored.

.. example::
    In Odoo 15, the model `sale.subscription` has a method `_prepare_invoice_data` (`source code <https://github.com/odoo/enterprise/blob/e07fd8650246d52c7289194dbe2b15b22c6b65e0/partner_commission/models/sale_subscription.py#L86-L92>`_) which has been renamed to `_prepare_invoice` in the model `sale.order` (`source code <https://github.com/odoo/enterprise/blob/b4182d863a3b925dc3fe082484c27dbb1f2a57d8/partner_commission/models/sale_order.py#L62-L68>`_)

It is very important to make sure to rename the method in the same way as it has been renamed in the new version of Odoo. This is because if a method calls its parent using `super()` in the code of a custom module, it will not match the method of the standard code of Odoo in its new version. This will lead to an error message appearing when the function is triggered which can be very difficult to predict. This is one of the reasons why it is very important to spend a significant amount of time in the testing phase of the upgrade process.

.. _upgrade_views:

Upgrading your view inheritance
================================

Views defined in the standard code of Odoo have an external identifier that corresponds to the attribute `id` of the `<record/>` tag of a view. It is very rare to have this external identifier change between two versions of Odoo, and can therefore be used to match 

Making your custom data compatible
----------------------------------

Now that your custom module works just as well in the new version of Odoo, the last step of upgrading it is to ensure that your custom data is compatible with the new version of the module. This is done with :doc:`Migration scripts </upgrade/advanced/migration_scripts>`
