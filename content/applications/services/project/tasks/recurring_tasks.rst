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

Recurring tasks are now activated on all existing projects. The feature can be deactivated
on an individual project by clicking the drop-down menu button :guilabel:`⋮` next to the project
name, then going to :menuselection:`Settings --> Settings --> Task Management` and disabling
:guilabel:`Recurring Tasks`.

Set up task recurrence
----------------------

In an existing task, press the :guilabel:`Recurrent` button next to the :guilabel:`Planned date`.
Then, configure :guilabel:`Repeat Every` field according to your needs.

A new task in recurrence will be created once either of this conditions is met:
- Previous task in recurrence has been closed.
- On the day of the planned recurrence.

The new task is created on your project dashboard with the following configuration:

- :guilabel:`Stage`: first stage of the project dashboard (:guilabel:`New` or equivalent);
- :guilabel:`Name`, :guilabel:`Description`, :guilabel:`Project`, :guilabel:`Assignees`,
  :guilabel:`Customer`, :guilabel:`Tags`: copied from the original task;
- :guilabel:`Milestones`, :guilabel:`Deadline`, :guilabel:`Timesheets`, :guilabel:`Chatter`,
  :guilabel:`Activities`, :guilabel:`Subtasks`: those fields are not copied;

- A **smart button** on the task displays the total number of existing recurrences.

Edit or stop task recurrence
----------------------------

**To edit** the recurrence, open the last task in recurrence. Any changes made on the task will be
applied to the tasks that will be created in the future.

**To stop** the recurrence, open the last task in recurrence and press the :guilabel:`Recurrent`
button next to the :guilabel:`Planned date`.
