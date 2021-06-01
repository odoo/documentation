=========================
Advanced Project Settings
=========================

Projects can be created for a specific customer or team, and can be coordinated among your
employees through visibility options. Stages can be shared among tasks, and the exact time spent on
each project can be tracked. All of it in favor of a more integrated and dynamic organization.

Create advanced projects
========================
| Go to :menuselection:`Project --> Configuration --> Projects --> Create`.
| Choose a *Customer* in order to create a project specifically for him. If not, simply leave the
  field blank.

.. image:: media/advanced_project.png
   :align: center
   :alt: Click on create and enable multiple options for an advanced project in Odoo Project

Choose who can access a project
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create a project for specific teams, under *Visibility*, choose who can have access to the
project:

- *Invited employees*: the ones who are followers (see :doc:`../tasks/collaborate`)
- *All employees*.
- *Portal users and all employees*: it enables the option *Share*. Recipients receive an
  email with an invitation to access the document (project).

Choose an *Analytic Account* to track the profitability of your project in a specific account.

Timesheet and record time on tasks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

| To track the time spent on tasks, enable *Timesheets*.
| In order to be able to launch a timer, also enable *Timesheet timer*.

.. image:: media/timesheet.png
   :align: center
   :alt: Tab timesheet is being shown under a task in Odoo Project

Create sales orders from a task
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To invoice the time (service) and material used on a task, enable *Bill from tasks*. Then, choose
the service/product which you would like to bill, or create one on the fly.

.. image:: media/create_sales_order.png
   :align: center
   :height: 270
   :alt: Menu create sales order is being shown under a task in Odoo Project

Track the material used on a task
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

After enabling *Bill from Tasks*, enable *Products on Tasks* to track the products/material used
during the work on a specific task.

.. image:: media/track_material.png
   :align: center
   :alt: Menu to add products is being shown under a task in Odoo Project

Take advantage of worksheets
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Worksheets are reports of the work done. To customize and include them in your tasks, enable
*Worksheets*. Choose an existing template or create one on the fly.

.. image:: media/worksheets.png
   :align: center
   :alt: Options worksheet and send report being shown under a task in Odoo Project

Schedule shifts on projects
~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create shifts to manage your tasks, assign employees, and stay organized, enable *Planning*.

.. image:: media/planning_menu.png
   :align: center
   :width: 290
   :alt: Shortcut to planning from the dashboard in Odoo Project

.. image:: media/planning_view.png
   :align: center
   :alt: Planning view from a project in Odoo Project

Manage employees work hours
~~~~~~~~~~~~~~~~~~~~~~~~~~~

*Working time* defines the number of your employees’ working hours. It adjusts the Gantt
planning view of your interventions. Open the external link to adjust the daily hours.

.. image:: media/work_hours.png
   :align: center
   :height: 380
   :alt: Edit the working hours from Odoo Project

Share stages across projects
============================

| In order to have a clean Kanban view that works across projects, and to avoid duplicates,
  delineate specific stages for different projects.
| Activate the :ref:`developer mode <developer-mode>` then go to :menuselection:`Project -->
  Configuration --> Stages`. Choose the respective one and add the projects among which you would
  like to share stages.

.. image:: media/share_stages.png
   :align: center
   :alt: Open a stage and choose the projects to share it with in Odoo Project


