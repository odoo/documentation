===================================
Upgrading your studio customization
===================================


Finding the tag causing the issue
=================================

Unarchiving the view in your database will trigger the validation error if the view is not valid and you will see the complete error message in the web client, allowing you to find the tag that is causing the issue.

.. important::
    Successfully unarchiving a view does not always mean that the view is working properly, as the issue can hide in an invisible field or a field that the user does not have access to for example. In any case, navigating to the view and opening Odoo Studio will show you the validation error message in most cases.

If the error message is not specific enough for you to find which tag is causing the issue, you can comment out half the xpath and save. If the error message is gone, the problematic tag is in the half you commented out. You can then repeat the process until you find the tag causing the issue.

.. _retargeting_the_xpath:

Retargeting the xpath
=====================

Solving the validation issue is usually a matter of finding the right target for the xpath. The first step would be to find which XML tag in the parent view the xpath is targetting in your database, and then change the xpath to target the same XML tag in the upgraded database.

You can make use of the function `edit_view` of util package TODO link util package to obtain the Etree element (from lxml library) by providing the xml_id of the view as parameter. Then you can use various method on those elments such as `xpath()`, `getparent()`, `remove()`, ... to apply your modifications.

.. example::
    .. code-block:: python

        with util.edit_view(cr, "studio_customization.odoo_studio_project__e2f15f1a-2bdb-4003-a36e-ed72391a9fa2") as arch:
            node = arch.xpath("""//xpath[@expr="//group[field[@name='activity_summary']]"]""")[0]
            node.attrib["expr"] = "//field[@name='activity_summary']"

Missing x_studio fields and how to retrieve them
------------------------------------------------

During the upgrade process, the migration scripts will ensure a certain synchronisation between the fields defined in the source code of your Odoo instance and the actual column names in the table of your PSQL database. In case of a mismatch, some actions can be taken on those columns, such as removing them.

This happens frequently with fields created by Odoo Studio, which we call x_studio fields, on models that have been removed or fields that are related to such models. In those cases, the standard migration scripts will drop the table from the PSQL database after moving the standard data of the fields to the new table, *and not any custom field*. Thus the data of the x_studio fields will be lost.

.. example::
    In the upgrade between Odoo 12 and Odoo 13, the model `account.invoice` was merged with `account.move` and was then subsequentely removed. The standard migrations scripts took care of moving the standard data from the PSQL table `account_invoice` to `account_move`, such as the columns `partner_id`, `name`, `amount_residual`, ...  but any custom field created by the user will not be automatically moved. Then, once the migration of the data to `account_move` is completed, the table `account_invoice` is dropped, with all the custom data still in it.

This is why we insist on thoroughly testing your upgraded database since any data loss will be unrecoverable once the upgrade of your production database is completed.

Retrieving the fields
=====================

Since the removal of your custom studio fields are executed by the standard migration scripts, you can not retrieve them by writing a custom migration script that is executed after the standard ones. Retrieving such fields is a manual process that can be done by the Upgrade team at Odoo. 

You can contact the Upgrade team by following the instructions in :doc:`/upgrade/assistance` and by specifying the following : 
- The name of the field(s) removed from your database
- The name of the model(s) they were on
- The reason why they were removed (model removed, relation removed, related field removed, ...)
- Which new model, relation, or related field they should be on
- Any additional information that could help us retrieve the fields

With that information, the Upgrade team will be able to save your field(s) by changing their definition before their deletion. This is usually done with PSQL queries or with methods from the util package TODO link util package at a very specific time during the standard upgrade process : between when the new model or the related field is created and when the old model or field is removed

Upgrading your reports
----------------------

Fixing Studio report customisations is fortunately very similar to fixing Studio view customisations as both of them are based on the same xpath mechanis. The only difference being that the reports are built manually using `<t/>`, `<div/>`, `<table/>`, ... elements, and therefore the xpath take action on those tags, instead of the usual `<field/>`, `<group/>`, `<page/>`, ... tags.

By following the processes explained in :ref:`upgrade_studio_views` and :ref:`upgrade_views`, you should be able to fix your customization on reports in the same way you would fix your views.

However, when dealing with entirely custom report, there is another situation that can arise. In Odoo, when duplicating a standard report, a copy of it is created at the time of the duplication with the same structure as the original. This means that once the source code of the original report is upgraded to match the new name of the various fields that were changed, the copy of the report will not be upgraded automatically. Thanfkully, this can be fixed quite easily by re-duplicating the original report, either with the Duplicate action, or by manually copying the source code from the original report to the copy. Then, you can apply the same process as explained in :ref:`upgrade_studio_views` and :ref:`upgrade_views` to fix the customization on the copied report.