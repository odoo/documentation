===================================
Upgrading your studio customization
===================================

Warning during the upgrade : The different types
------------------------------------------------

Unlike with data, the most common encounters you will have with Odoo studio in the logs will be warnings and not errors. The main difference between the two is that warnings will not block the upgrade process, meaning that it will be able to succeed and generate an upgraded database in which the problem displayed in the logs might still be present. 

Since the warnings are not blocking the upgrade process, we can fix the issues they are displaying in the custom part of the upgrade process. This means that the fix will be applied after the standard part of the upgrade process, and will be applied only if you are hosted on Odoo SH or On-Premise. For Odoo Online customers, you could either manually fix the issue after the upgrade using the web client, or :doc:`request assistance </upgrade/assistance>`.

.. _upgrade_studio_views:

Missing views customization and how to retrieve them
----------------------------------------------------

The most frequent and common issues raised by users during an upgrade is a significant difference in one or multiple views of their database. There are three reasons why a view can be different after an upgrade

.. tabs::

    .. group-tab:: A view you did not modify is different

        The change you notice is due to the change of the standard code of Odoo which is normal when upgrading to a new version.

    .. group-tab:: A view you modified with Odoo Studio is different

        If the source code of a standard view has changed, it may invalidate your custom view due to the nature of Odoo Studio customizations. In this case, you will have to adapt the code of your Odoo Studio view to match the new version view which is explained in :ref:`retargeting_the_xpath`

    .. group-tab:: A view you modified with a custom module is different

        This situation is covered in :ref:`Advanced : Upgrading your view inheritance <upgrade_views>`.

In any case, the following warning will appear in the logs of your upgrade

.. code-block:: 

    The custom view `<view_name>` (ID: <id>, Inherit: <inherit_id>, Model: <model>) caused validation issues.
    Disabling it for the migration ...

Where `<view_name>` is the name of the view, `<id>` is the id of the view in the database, `<inherit_id>` is the id of the view it customizes, and `<model>` is the model on which the view is defined, for example `sale.order`. It can also be accompanied by validation error itself, a Python error traceback that will allow you to see which xpath in the view caused the whole view to be invalid.

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

This warning usually means that the target of one or more xpath are not found in the inherited view. This results in the view customization not being applied to the parent view, leading to missing customization or ill-formed views. It can be the case if the name of the targeted field has changed, or more likely if a new field was added above or below. For example, the xpath with target `//div[3]/group[2]/div[2]/field[1]` has many single points of failure possible given all the condition that the parent view must fulfill.

If any of those elements are removed from the view, or moved to a different position, the target of the xpath has great chances of not being valid anymore. This is why we consider this kind of target for an xpath to be very fragile, as opposed to a target like `//field[@name='a_field_name']`` which can only break if the field is renamed, or if it is removed from the view.

.. note::
    To minimize the chance of your Odoo studio views causing validation issues for this upgrade and in future upgrades, we recommend to preemptively rewrite the most fragile xpath in your views if you have the time or resources. It is not necessary for your upgrade to rewrite all of them, but it is a good thing to do to increase the health and resilience of your views. Moreover, fixing them preemptively in your database will ensure that you won't have to write a migration script to fix them after the upgrade, or :doc:`request assistance </upgrade/assistance>`

.. seealso::
    :ref:`reference/views`
    :ref:`reference/views/inheritance`

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

By following the processes explained in :ref:`upgrade_studio_views` and :ref:`upgrade_views`, you should be able to fix your reports in the same way you would fix your views.