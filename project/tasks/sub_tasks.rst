===================
Work with Sub-tasks
===================

Being a dynamic and organized company is important as it also helps you to not overload your
employees. For that, split large tasks into smaller ones by creating subs-tasks, timesheet
on them, and have an overview of all hours recorded.

Configuration
=============

Go to :menuselection:`Project --> Configuration --> Settings --> Sub-tasks`.

.. image:: media/config.png
   :align: center
   :alt: Enable the feature under settings in Odoo Project

From now on, a *Sub-tasks* menu is available within your task.

.. image:: media/sub_task_menu.png
   :align: center
   :alt: Overview of a task and the sub-tasks menu being shown in Odoo Project

Select a specific project in which sub-tasks will be created by default
-----------------------------------------------------------------------

By default, sub-tasks are created under the same project. However, you can select another one
by going to :menuselection:`Project --> Configuration --> Projects --> Sub-task Project`.

.. image:: media/specific_project.png
   :align: center
   :alt: Under the settings of a project, select the sub-task project in Odoo Project

Timesheet on sub-tasks
======================

Make sure the feature *Timesheets* is enabled under :menuselection:`Project --> Configuration -->
Settings` and under the settings of the needed *Project*. Now you are able to timesheet on your
tasks and sub-tasks. The time recorded on a sub-task is counted on the parent task.

.. image:: media/timesheet_sub_tasks.png
   :align: center
   :alt: Timesheets tab being shown under a task in Odoo Project

Transform an existing task into a sub-task
==========================================

| Go to :menuselection:`Settings --> Activate the developer mode`.
| Now access your task, *Edit*, and add a *Parent Task*.

.. image:: media/task_subtask.png
   :align: center
   :alt: A tab extra info with a field parent task is being shown in Odoo Project

Unlink a sub-task from a parent task
====================================

| Go to :menuselection:`Settings --> Activate the developer mode`.
| Open and *Edit* the respective sub-task to remove the *Parent Task*.

.. image:: media/unlink_sub.png
   :align: center
   :alt: A tab extra info with a field parent task is being shown in Odoo Project

.. seealso::
   - :doc:`../record_and_invoice/time_record`
