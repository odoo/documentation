============================
Creating field service tasks
============================

Tasks in Odoo Field Service can be created manually or automatically, including from sales orders or
helpdesk tickets.

Manual task creation
====================

To create a new field service task:

#. Open the Field service app and go to :menuselection:`Field Service --> All Tasks --> All Tasks`.
#. Click :guilabel:`New`.
#. Fill in the task title, :guilabel:`Customer` and any other :ref:`optional field <task_creation/task-configuration>`,
   then save manually.

Task creation from a sales order
================================

This feature allows for field service tasks to be automatically created from a sales order. When you
create a quotation with the :ref:`service product <sales/invoicing/configured-service-product>`
and confirm it, a task is automatically created in your Field Service project. Click the
:guilabel:`Tasks` smart button to access it from the sales order.

Task creation from a helpdesk ticket
====================================

If you have the Helpdesk app installed, you can :ref:`create field service tasks from a helpdesk
ticket <helpdesk/field>`.
