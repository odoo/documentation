===============
Recurring tasks
===============

When handling a project, the same task often needs to be performed several times: for example,
weekly meetings or status reports. The **recurring tasks** feature allows you to automate the
creation of those tasks.

.. seealso::
   `Odoo Tutorials: Recurring tasks <https://www.odoo.com/slides/slide/recurring-tasks-1946>`_

Configuration
=============

To enable recurring tasks, go to :menuselection:`Project --> Configuration --> Settings`, then
activate :guilabel:`Recurring Tasks`, and press :guilabel:`Save`.

Set up task recurrence
----------------------

In an existing task, click the :icon:`fa-repeat` (:guilabel:`Recurrent`) button next to the
:guilabel:`Deadline` field. Then, configure the :guilabel:`Repeat Every` field according to your
needs.

A new task in recurrence will be created once the status of the previous task is set to
:guilabel:`Done` or :guilabel:`Canceled`.

The new task is created on the project dashboard with the following configuration:

- :guilabel:`Stage`: is set to the first stage of the project dashboard (:guilabel:`New` or
  equivalent);
- :guilabel:`Name`, :guilabel:`Description`, :guilabel:`Project`, :guilabel:`Assignees`,
  :guilabel:`Customer`, :guilabel:`Tags`: are copied from the original task;
- :guilabel:`Deadline`: is updated based on the :guilabel:`Repeat Every` field (e.g., if the task is
  set to repeat once a week, 7 days will be added to the deadline);
- :guilabel:`Milestones`, :guilabel:`Timesheets`, :guilabel:`Chatter`,
  :guilabel:`Activities`, :guilabel:`Subtasks`: are **not** copied from the original task.

Once a recurrence is configured, a **smart button** on the task displays the total number of
existing recurrences.

Edit or stop task recurrence
----------------------------

**To edit** the recurrence, open the last task in recurrence. Any changes made on the task will be
applied to the tasks that will be created in the future.

**To stop** the recurrence, open the last task in recurrence and press the :guilabel:`Recurrent`
button next to the :guilabel:`Planned date`.
