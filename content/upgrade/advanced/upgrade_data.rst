=============================
Upgrading your data if needed
=============================

Errors during upgrade : the different types
-------------------------------------------

During the upgrade process for your database, you might encounter an error that prevents your upgrade request to be completed. By analyzing the logs and the error message, you can determine the type of error you are facing and deduce the solution to fix it.

.. seealso::
    :ref:`reference/exceptions`

Access Error
============

During the upgrade process, the user searching and modifying the data, as dictated by the migration scripts, is the user with ID=2 by default, which is the administrator of the database. If that user lacks certain access right, you might encounter this error `odoo.exceptions.AccessError: Due to security restrictions, you are not allowed to access '<model name>' (<model>) records.`

.. example::
    `odoo.exceptions.AccessError: You are not allowed to access 'Applicant' (hr.applicant) records.`

    This error message means that the user with ID=2 does not have the access rights to read the records of the model `hr.applicant` (Recruitment app > Applications). It is the same error message that can appear when trying to access a record from the web interface, if the user does not have the access rights to read that record.

Such an access error can arrise due to the fact that there are many situations in the code where data must be accessed regardless of which user is currently connected, such as with compute methods which can sometimes recomputed during the upgrade, by the administrator user. This is why, in Odoo, the administrator user with ID=2 must always have full access rights to all the models and data.

.. figure:: /upgrade/advanced/upgrade_data/admin_access_rights.png
    :width: 100%
    :alt: Form view of the user with ID 2 which has the highest rights for all groups

    What the groups should look like for the admin user. If some groups are missing, you expose yourself to many potential issues during and after the upgrade process.

Therefore, if you modified that user to match one of your actual Odoo user/employee instead of creating a new one from scratch, you expose yourself to many access errors if any access rights are taken away from that user.

The solution is simply to give back all the default admin access rights and groups to that user. You can modify those access rights by going to Settings > Users & Companies and selecting the user with ID=2. Then, you will be able to modify all the groups under the "Access Rights" tab, giving that user the most powerful rights for each group

.. seealso::
    :doc:`/applications/general/users/access_rights`

Validation Error
================

This type of error is related to the various safeguards implemented everywhere in the code of Odoo, ensuring that your data does not have any inconsistency. Those error messages can be raised in the standard code of Odoo or in a customization, but there will always be the traceback of the exception, showing you where in the code the error is triggered. 

.. example::
    `odoo.exceptions.ValidationError: the tax group must have the same country_id as the tax using it.`

    We can find the source code that raises the issue by searching for the error message in the code base of Odoo which leads us to `this part of the code <https://github.com/odoo/odoo/blob/2e06b0e1ce9bb3d87a1e44d631dcdc1808c1bfcb/addons/account/models/account_tax.py#L179-L183>`_. With a little bit of technical knowledge, we can extrapolate that this error message will appear if there is one record of the `account.tax` model for which the country set on the tax group is different than the country set on the tax itself.

    With that in mind, we can now search in our database for the faulty taxes and fix them by setting their country to the country of their tax group (or the other way around). This can be done either manually via the web page of your database, or with PSQL queries or the Odoo shell, if you have access to those tools on your database.

In regards to fixing the issue, we recommend that you first create a duplicate of your production database to test the fix on it, before applying the fix on your production database. Doing it this way ensures that you can catch any potential side effect of the fix.

However, please note that sometimes the data in your production database does not trigger the issue, but some migration scripts in the upgrade process might create or modify records that would later down the line raise the exception and crash the upgrade process. In any case, you can always :doc:`request assistance </upgrade/assistance>` that have the necessary tools to help you fix the issue.

Upgrading server actions
------------------------

During an Upgrade, server actions can be problematic if they refer to fields that have been removed or renamed. They can either be entereliy removed from the database by the ORM or they can be kept but trigger an error when executed.

Usually, only server actions for which the "Action To Do" is set to 

- Execute Python Code
- Create a new Record
- Update the Record

can be problematic, since they would refer specific fields that can be changed with the upgrade.

Thankfully though, fixing them is quite easy, since it only require you to fix the reference to the missing field. If your server action is still present on your upgraded database, you can do it manually but we recommend fixing it with a custom migration script. However, if your server action is removed by the standard upgrade process, you will have to take an action before submitting the upgrade request, or :doc:`request assistance </upgrade/assistance>` from the Upgrade Team for more information.

.. seealso::
    - :ref:`reference/actions/server`
    - :doc:`/upgrade/advanced/migration_scripts`

Upgrading Automated Actions
---------------------------

Automated actions can be upgraded in the same way as server actions, since they can both suffer from the same issues.

This means that, just like server actions, when you upgrade your Odoo database you might encounter issues with the compatibility of your automated action, if the targeted model is changed or the field is not found anymore, etc .

In case of deleted automated action
===================================

If your upgraded database does not contain your automated action anymore, this means that it has been deleted by the standard upgrade process, most likely due to the fact that the corresponding model has been removed by that process. In which case, you could either manually temporarily set the model of your automated action to a different one, just for upgrading, or you can request :doc:`request assistance </upgrade/assistance>` of the Upgrade team to help you fix the issue.

In case of error message when executed
======================================

Another other type of issue you can encounter with automated actions is an error message when they are triggered. For automated actions that execute Python code, this usually means that the Python code is not compatible with the upgraded version of your database, probably due to functions being renamed, fields being moved, etc. This means that you will have to upgrade the code, using the various tips and tricks written in :doc:`/upgrade/advanced/upgrade_custom_code`.

.. seealso::
    :doc:`/applications/productivity/studio/automated_actions`