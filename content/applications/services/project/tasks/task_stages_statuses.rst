========================
Task stages and statuses
========================

Task stages
===========

Task stages are displayed as columns in the project's Kanban view, and allow you to update the
progress of its tasks with a drag-and-drop. In most projects, the stages will be akin to **New**,
**In progress**, **Backlog**, etc.

By default, task stages are project-specific but can be shared across multiple projects that follow
the same workflow.

Creating task stages
--------------------

Odoo Project doesn’t provide default stages but instead allows you to create custom stages tailored
to your specific business needs. You are prompted to do so immediately after :ref:`creating a new
project <project_management/configuration>`.

To create a stage, type its name into the :guilabel:`Stage...` field, then click :guilabel:`Add`.

.. tip::
   Click :guilabel:`See examples` to find ideas for stage names applicable to your line of business.

Editing task stages
-------------------

To edit the task stage, click the :icon:`fa-cog` (:guilabel:`cog`) icon next to its name. From
there, click one of the following:

 - :guilabel:`Fold`: to hide the task stage and all of the tasks in this stage from the Kanban view.
 - :guilabel:`Edit`:

   - :guilabel:`Name`: to change the name of the stage.
   - :guilabel:`SMS/Email Template`: to automatically send an email or SMS notification to the
     customer when a task reaches this stage.
   - :guilabel:`Folded in Kanban`: to hide the task stage and all of the tasks in this stage from
     the Kanban view.
   - :guilabel:`Projects`: to share this task stage between several projects.
   - :guilabel:`Automations`: to create :doc:`custom rules that trigger automatic actions
     <../../../studio/automated_actions>` (e.g., creating activities, adding followers, or sending
     webhook notifications). Note that this will activate Studio in your database, which may impact
     your pricing plan.

 - :guilabel:`Delete`: to delete this stage.
 - :guilabel:`Archive/Unarchive all`: to archive or unarchive all of the tasks in this stage.

Task statuses
=============

Task statuses are used to track the status of tasks within the Kanban stage, as well as to close the
task when it’s done or canceled. Unlike Kanban stages, they cannot be customized; five task statuses
exist in Odoo and are used as follows:

 - :guilabel:`In Progress`: this is the default state of all tasks, meaning that work required for
   the task to move to the next Kanban stage is ongoing.
 - :guilabel:`Changes Requested`: to highlight that changes, either requested by the customer or
   internally, are needed before the task is moved to the next Kanban stage.
 - :guilabel:`Approved`: to highlight that the task is ready to be moved to the next stage.
 - :guilabel:`Canceled`: to cancel the task.
 - :guilabel:`Done`: to close the task once it's been completed.

.. note::

   - The :guilabel:`Changes Requested` and :guilabel:`Approved` task statuses are cleared as soon as
     the task is moved to another Kanban stage. The task status reverts to the default :guilabel:`In
     Progress` status so that :guilabel:`Changes Requested` or :guilabel:`Approved` status can be
     applied again once the necessary work has been completed in this Kanban stage.
   - The :guilabel:`Done` and :guilabel:`Canceled` statuses are independent from the Kanban stage.
     Once a task is marked as :guilabel:`Done` or :guilabel:`Canceled`, it is closed. If needed, it
     can be reopened by changing its status.
