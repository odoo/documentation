=================
Project templates
=================

Templates allow you to create new projects with predefined settings, reducing the need to manually
set up similar projects repeatedly.

Creating templates
==================

To create a project template, an existing project is required and used as a base to be converted
into a template. Converting a project into a template transfers the entire project's properties to
the template. This includes the project’s stages, tasks, sub-tasks, and their respective
configurations, such as planned dates, statuses, assignees, and more.

First, access the settings of the project that you want to convert into a template by going to
:guilabel:`Projects`, hovering your mouse over the project's card, clicking the :icon:`fa-ellipsis-v`
(:guilabel:`vertical ellipsis`) icon, and selecting :guilabel:`Settings`. Review
and adjust the project’s properties to ensure it reflects your desired template setup.

Once your project is ready, click the :icon:`fa-cog` (:guilabel:`cog`) icon and select
:guilabel:`Convert to Template`. The :guilabel:`Template` banner indicates that the project has been
successfully converted into a template.

.. warning::
   Converting a project into a template will also archive the original project used to create the
   template. To keep using a project that you want to convert into a template, duplicate
   it first by hovering your mouse over the project's card, clicking the
   :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`) icon, and selecting :guilabel:`Duplicate`.

.. tip::
   To edit or delete a template, go to :menuselection:`Projects --> New`.
   Next to the name of the template, click the :icon:`fa-pencil` (:guilabel:`pencil`) icon to edit
   it or the :icon:`fa-trash` (:guilabel:`trash`) icon to delete it.
   Editing or deleting a template does not affect the projects that were previously created from it.

Project roles in templates
--------------------------

Templates enable you to pre-select specific roles for tasks within your template, making the
selection of assignees faster during the creation of a new project using a template.

Go to :menuselection:`Projects --> New`, and click the :icon:`fa-pencil` (:guilabel:`pencil`)
icon next to the name of the template you want to edit. Then click on the :guilabel:`Tasks` smart
button, and on one of the tasks. In the :guilabel:`Project Roles` field, type or select the roles
that you want to perform this task, then click :guilabel:`Save`.

Create a project based on this template: go to :menuselection:`Projects --> New`, and click on
the name of the template. The :guilabel:`Create a project from template` form then includes
:guilabel:`Project Roles`. For each of them, you can select assignees by clicking on the
:guilabel:`Assignees` field. This automatically dispatches the right tasks to the right employees.

Task scheduling in templates
----------------------------

In a project template, task scheduling can be automated according to the planned dates specified
within the template.

.. important::
   Project and task planned dates are not saved when converting a project into a template. These
   require to be added to the template after it is created.

On the project template, define the :guilabel:`Planned dates` for both the project and each task.
When tasks have planned start dates in the template, Odoo calculates the number of working days
between the project’s start date and the first scheduled task. This time window is referred to as
the *delta*.

When a new project is generated from this template:

 - The system uses the project’s start date as a reference.
 - Each task’s start date is automatically planned according to its delta.
 - If no start date is set on the new project, the current date is used as the default start date.
 - Task end dates are then determined automatically by Odoo’s scheduling algorithm.

.. note::
   To ensure that all project roles and tasks are planned without conflict according to the team’s
   availability and workload, the scheduling algorithm calculates the end date of each task based on
   the allocated time, while also considering task dependencies and assignee’s availability, working
   schedule, time off, and public holidays.

Using templates
===============

To create a new project from a template, go to :menuselection:`Projects --> New`, and click on a
template in the :guilabel:`Project Templates` section. Enter a name for your project. Optionally,
add a :guilabel:`Customer`, a :guilabel:`Planned Date`, and set up the task creation email. Then,
click :guilabel:`Create Project`.

Templates can also be linked to specific products. To do so, the project template must be set as
:guilabel:`Billable`:

- Go to :menuselection:`Projects --> New` and click the :icon:`fa-pencil` (:guilabel:`pencil`) icon
  next to the name of the template you want to edit.
- Click the :guilabel:`Settings` tab, tick the :guilabel:`Billable` checkbox, and click
  :guilabel:`Save`.

Once this is done, configure the product by:

- Selecting :guilabel:`Service` as the :guilabel:`Product Type`.
- Selecting :guilabel:`Project` or :guilabel:`Project & Task` in the :guilabel:`Create on Order` field.
- Selecting a :guilabel:`Project Template` and clicking :guilabel:`Save`.
