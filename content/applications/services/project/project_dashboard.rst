=================
Project dashboard
=================

The project dashboard allows you to get a comprehensive overview of your project's status. It
displays information such as the total number of tasks, timesheets, and planned hours linked to the
project, as well as detailed information about project milestones and its costs and revenues.

Within the project dashboards, you can create :guilabel:`Project updates`, which allow you to take
a snapshot of the project's status at a certain point in time.

As such, it is a crucial tool for effective project management and for ensuring that your project
stays on track.

To access the project dashboard, open the **Project** app, click the vertical ellipsis
(:guilabel:`⋮`), and select :guilabel:`Dashboard`.

.. seealso::
   :doc:`Odoo Reporting <../../../applications/essentials/reporting>`

Using the project dashboard
===========================

The following information is displayed on the project dashboard:

- Totals smart buttons:

  - :guilabel:`Tasks`: the number of completed (in :guilabel:`Done` or :guilabel:`Canceled`
    :ref:`status <project/tasks/task_stages_statuses/statuses>`) and all tasks, in format
    completed/all, as well as the entire project's completion percentage estimation.
    Click the smart button to access the Kanban view of the project.
  - :guilabel:`Timesheets`: the number of hours or days (depending on the **Timesheets** app
    configuration) linked to the project. This includes all timesheets, whether or not they have
    been validated.
  - :guilabel:`Planned`: the number of hours that have been planned for shifts in the **Planning**
    app. This includes all planned shifts, including past shifts and shifts that have not yet been
    published.
  - :guilabel:`Documents`: number of documents in the project’s workspace.
  - :guilabel:`Burndown Chart`: click the smart button to access a report on the status of the
    project’s tasks over time.
  - :guilabel:`Timesheets and Planning`: click the smart button to access a report on the project’s
    timesheets and shifts.
  - **Additional fields**, such as :guilabel:`Sales Orders`, :guilabel:`Sales Order Items`,
    :guilabel:`Purchase Orders` and more, that represent number or records linked to the project.

.. tip::
   Use the project dashboard smart buttons to update the project records easily. Click
   :guilabel:`Timesheets` to validate timesheets, :guilabel:`Planned` to create project planning,
   :guilabel:`Documents` to view and validate documents, etc.

Project updates
===============

Project updates allow you to take a snapshot of the project’s overall status at a given point in
time, for example, during a periodic (weekly, bi-weekly, or monthly) review. This allows you to
compare specific data points, note any aspects of the project that need improvement, and estimate
if the project is on or off track.

To create a new project update, go to the project dashboard, then click :guilabel:`New`. You can
fill in the following fields:

  - :guilabel:`Status`: choose between :guilabel:`On Track`, :guilabel:`At Risk`, :guilabel:`Off
    Track`, :guilabel:`On Hold`, and :guilabel:`Done`. Once the status is set, a color-coded dot is
    displayed on the project’s Kanban card, allowing the project manager to easily identify which
    projects need attention.
  - :guilabel:`Progress`: manually input the completion percentage according to how the work on the
    project is going.
  - :guilabel:`Date` and :guilabel:`Author`: those fields are automatically filled in with
    appropriate information.
  - :guilabel:`Description`: a rich text field that you can use to gather notes. Depending on the
    project configuration (e.g., if the project is billable), this field may be pre-filled with
    current information on aspects such as profitability, budget, milestones, etc.
