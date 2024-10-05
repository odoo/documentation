=========
Sub-tasks
=========

When handling project tasks, you can often benefit from splitting the workload into smaller
**sub-tasks**, making it easier to track progress and manage the work.

Odoo’s sub-task feature is particularly useful in some of the following cases:

- The task workload is too big to handle in one record.
- There’s a clear sequence of steps to follow.
- Some parts of the workload fall under the scope of different projects and/or assignees.

The original task to which sub-tasks are linked is referred to as the **parent task**. The sub-tasks
of the parent task are known as **child tasks**.

Creating sub-tasks
==================

To create a sub-task:

#. Open the Project app, then go into your desired project.
#. Click the task where you want to add the sub-task, then click the :guilabel:`Sub-tasks` tab.
#. Click :guilabel:`Add a line`, then fill in the :guilabel:`Title`.
#. Click the :icon:`fa-cloud-upload` (:guilabel:`save`) icon to save the task manually.

.. tip::
   You can edit several fields of a sub-task directly from the parent task’s sub-task tab without
   opening the individual sub-task. By default, those are: :guilabel:`Title`, :guilabel:`Priority`,
   :guilabel:`Status`, and :guilabel:`Assignees`. Use the :icon:`fa-sliders` (:guilabel:`sliders`)
   icon to add or remove fields.

Once the new sub-task is created, the following changes occur in the parent task:

- A **smart button** displays the total number of sub-tasks, as well as the number of closed
  (**done** or **canceled**) sub-tasks. Click the smart button to access the list of the sub-tasks.
- The :guilabel:`Allocated time` displays the amount of time allocated to the parent task, as well
  as time allocated to the sub-tasks. This can be used to ensure that the time allocated to
  sub-tasks does not exceed time allocated to the parent task.
- The :guilabel:`Timesheets` tab includes a breakdown of time spent on the parent task as well as
  sub-tasks.

Click :guilabel:`View` to open the sub-task you created. The sub-task form is identical to the
:ref:`task form <task_creation/task-configuration>`.

.. tip::

 - A **smart button** allows to navigate back to the :guilabel:`Parent task`.
 - The :guilabel:`Sub-tasks` tab allows for further creation of sub-tasks.
 - Selecting a :guilabel:`Project` will trigger this sub-task to be displayed in the Kanban view of
   the selected project.
