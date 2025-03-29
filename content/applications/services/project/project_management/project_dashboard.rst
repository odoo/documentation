=================
Project dashboard
=================

The project dashboard allows you to get a comprehensive overview of your project's status. It
displays information such as the total number of tasks, timesheets, and planned hours linked to the
project, as well as detailed information about project milestones and its costs and revenues. Within
the project dashboard, you can create :guilabel:`Project updates`, which allow you to take a
snapshot of the project's status at a certain point in time. As such, it is a crucial tool for
effective project management and ensuring that your project stays on track.

Using the project dashboard
===========================

To access the project dashboard, open the **Project** app and navigate to the applicable project.
Click the :icon:`fa-sliders` (:guilabel:`sliders`) icon to add :guilabel:`Dashboard` to the
project's :ref:`top bar <project/project-management/top-bar>`.

.. tip::
   You can also access the project dashboard by hovering over the desired project’s card, clicking
   the :icon:`fa-ellipsis-v` (:guilabel:`vertical ellipsis`), and selecting :guilabel:`Dashboard`.

The left side of the dashboard displays a list of existing :ref:`project updates <project/project-dashboard/updates>`,
and the right side provides :ref:`detailed information about records linked to the project
<project/project-dashboard/smart-buttons>`, as well as :ref:`milestones <project/project-dashboard/milestones>`,
:ref:`profitability <project/project-dashboard/profitability>`, and :ref:`budgets
<project/project-dashboard/budgets>`.

.. note::
   The information displayed on the project dashboard varies depending on the applications installed
   on your database. For example, you will not see information about **Timesheets**, **Planning**,
   or **Purchase Orders** if the corresponding applications are not installed.

.. _project/project-dashboard/smart-buttons:

Totals smart buttons
--------------------

The following smart buttons are displayed on the top right of the project dashboard:

 - :guilabel:`Tasks`: the number of completed (i.e., :guilabel:`Done` or :guilabel:`Canceled`
   :ref:`tasks <project/tasks/task_stages_statuses/statuses>`) and all tasks, in format
   completed/all, as well as the entire project's completion percentage estimation.
 - :guilabel:`Timesheets`: the number of hours or days (depending on the **Timesheets** app
   configuration) allocated in the project’s **settings**. This includes all
   :doc:`timesheets </applications/services/timesheets>`, whether or not they have been validated.
 - :guilabel:`Planned`: the number of hours that have been planned for shifts in the **Planning**
   app. This includes all :doc:`planned shifts </applications/services/planning>`, including past
   shifts and shifts that have not yet been published.
 - :guilabel:`Documents`: number of :doc:`documents </applications/productivity/documents>` in the
   project’s workspace.
 - :guilabel:`Burndown Chart`: click the smart button to access a :doc:`report </applications/essentials/reporting>`
   on the status of the project’s tasks over time.
 - :guilabel:`Timesheets and Planning`: click the smart button to access a :doc:`report </applications/essentials/reporting>`
   on the project’s timesheets and shifts. This allows you to easily compare planned and effective
   hours of work on the project.
 - **Additional fields**, such as :guilabel:`Sales Orders`, :guilabel:`Sales Order Items`,
   :guilabel:`Purchase Orders`, and more, represent the number of records linked to the project.

.. tip::
   Use the project dashboard smart buttons to update the project records easily. Click
   :guilabel:`Timesheets` to validate timesheets, :guilabel:`Planned` to create project planning,
   :guilabel:`Documents` to view and validate documents, etc.

.. _project/project-dashboard/milestones:

Milestones
----------

This section is only visible if :doc:`milestones </applications/sales/sales/invoicing/milestone>`
have been enabled in the Project’s app settings. Click :guilabel:`Add Milestone` to create a new
milestone. Click a milestone in the checklist to edit it, enable its checkbox to mark it as
completed, or click the :icon:`fa-trash` (:guilabel:`trash`) icon to remove it.

The milestones are displayed in red if they’re past their deadline, or in green if they are ready to
be marked as reached (i.e. tasks linked to the milestone that have been marked with :guilabel:`done`
or :guilabel:`canceled` :ref:`status <project/tasks/task_stages_statuses/statuses>`).

.. _project/project-dashboard/profitability:

Profitability
-------------

The :doc:`profitability dashboard </applications/services/project/project_management/project_profitability>`
provides a breakdown of project costs and revenues, which are impacted by all records linked to the
project and its :doc:`Analytic account </applications/finance/accounting/reporting/analytic_accounting>`.

.. note::
   The profitability report is only displayed for billable projects.

.. _project/project-dashboard/budgets:

Budgets
-------

If a budget has been set for the project, its status and related details are displayed in this
section. Click :guilabel:`Add Budget` to create a new budget for the project.

.. note::
   :doc:`Budgets </applications/finance/accounting/reporting/budget>` must be enabled in your
   database’s **Accounting** application in order for this section to be displayed.

.. _project/project-dashboard/updates:

Project updates
===============

Project updates allow you to take a snapshot of the project’s overall status at a given point in
time, for example, during a periodic (weekly, bi-weekly, or monthly) review. This allows you to
compare specific data points, note any aspects of the project that need improvement, and estimate
if the project is on or off track.

To create a new project update, go to the project dashboard, click :guilabel:`New`, and fill in the
following fields:

  - :guilabel:`Status`: Choose between :guilabel:`On Track`, :guilabel:`At Risk`, :guilabel:`Off
    Track`, :guilabel:`On Hold`, and :guilabel:`Done`. Once the status is set, a color-coded dot is
    displayed on the project’s Kanban card, allowing the project manager to easily identify which
    projects need attention.
  - :guilabel:`Progress`: Manually input the completion percentage based on the project's progress.
  - :guilabel:`Date` and :guilabel:`Author`: These fields are automatically filled in with
    appropriate information based on the user who created the update and the current date.
  - :guilabel:`Description`: Use this rich-text field to gather notes. Depending on the project
    configuration (e.g., if the project is billable), this field may be pre-filled with current
    information on aspects such as profitability, budget, milestones, etc.
