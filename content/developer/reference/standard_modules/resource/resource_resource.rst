.. _reference/resource/resource_resource:

=========
Resources
=========

.. py:currentmodule:: odoo.addons.resource.models

A resource (`resource.resource`) is something that works according to a
:ref:`working schedule <reference/resource/resource_calendar>` (`calendar_id`, required), in a
timezone (`tz`, required). It is either a human (`resource_type = 'user'`, optionally linked to a
user) or a material resource (a machine, a meeting room).

Business models rarely use `resource.resource` directly: they inherit from the abstract
`resource.mixin`, which creates a resource for each record and exposes its calendar, timezone and
the work time computations. `hr.employee` and `mrp.workcenter` are the main examples.

.. _reference/resource/resource_resource/mixin:

The resource mixin
------------------

A model inheriting from `resource.mixin` gets:

- `resource_id`: the `resource.resource` of the record, created automatically on `create`
  (`_prepare_resource_values` builds its values);
- `resource_calendar_id`, `company_id` and `tz`, related to the resource.

.. code-block:: python

   class MaintenanceTeam(models.Model):
       _name = 'my.maintenance.team'
       _inherit = ['resource.mixin']
       _description = 'Maintenance Team'

       name = fields.Char(related='resource_id.name', store=True, readonly=False)

The mixin provides the usual work time computations for a batch of records. Contrary to the
calendar-level methods of `resource.calendar`, they take the **leaves of each resource** into
account:

:meth:`~resource_mixin.ResourceMixin._get_work_days_data_batch`
   The work duration of each record between two datetimes, as
   `{record_id: {'days': float, 'hours': float}}`.

:meth:`~resource_mixin.ResourceMixin._get_leave_days_data_batch`
   The leave duration of each record, in the same format.

:meth:`~resource_mixin.ResourceMixin._list_work_time_per_day`
   The work hours of each record, per day: `{record_id: [(date, hours), ...]}`.

:meth:`~resource_mixin.ResourceMixin._adjust_to_calendar`
   Snaps a period to the working hours of each record: the first work interval start of the
   start day and the last work interval end of the end day.

:meth:`~resource_mixin.ResourceMixin._get_calendars`
   The calendar of each record at a date. `hr.employee` overrides it to return the calendar of
   the employee's version at that date.

.. example::

   .. code-block:: python

      from datetime import datetime
      from zoneinfo import ZoneInfo

      employees = env['hr.employee'].search([], limit=3)
      brussels = ZoneInfo('Europe/Brussels')
      start = datetime(2026, 10, 19, tzinfo=brussels)
      end = datetime(2026, 10, 24, tzinfo=brussels)

      employees._get_work_days_data_batch(start, end)
      # {employee_id: {'days': 5.0, 'hours': 40.0}, ...}
      employees._list_work_time_per_day(start, end)
      # {employee_id: [(date(2026, 10, 19), 8.0), (date(2026, 10, 20), 8.0), ...], ...}

.. _reference/resource/resource_resource/validity:

Resources with several calendars
--------------------------------

The calendar of a resource can change over time. In `resource`, a resource has a single
calendar, but `hr` makes it follow the versions of the employee. To support this, the methods of
`resource.resource` work with **calendar validity periods**:

:meth:`~resource_resource.ResourceResource._get_calendars_validity_within_period`
   Returns `{resource_id: {calendar: Intervals}}`: which calendar applies to each resource,
   when, within a period. In `resource`, one calendar over the whole period.

:meth:`~resource_resource.ResourceResource._get_valid_work_intervals`
   Returns the work intervals of each resource, computed with the right calendar on each
   period, as a tuple `({resource_id: Intervals}, {calendar_id: Intervals})`. **This is the
   method to use** to get the work intervals of resources whose calendar may change, e.g. in
   planning applications.

:meth:`~resource_resource.ResourceResource._get_calendar_data_at`
   The calendar, hours per week and hours per day valid at a date.

:meth:`~resource_resource.ResourceResource._get_unavailable_intervals`
   The unavailable intervals of each resource, in UTC, for Gantt views.

.. example::

   .. code-block:: python

      resources = employees.resource_id
      work_intervals, calendar_intervals = resources._get_valid_work_intervals(start, end)
      work_intervals[resources[0].id]  # Intervals of the first resource

.. _reference/resource/resource_resource/flexible:

Flexible resources
------------------

Planning applications need a work *budget* rather than work intervals for resources with a
:ref:`flexible calendar <reference/resource/resource_calendar/flexible>`:
:meth:`~resource_resource.ResourceResource._get_flexible_resource_valid_work_intervals` returns
whole-day intervals with a daily and a weekly hours budget, and
:meth:`~resource_resource.ResourceResource._get_flexible_resource_work_hours` computes how many
hours can be consumed in some intervals within these budgets.

.. _reference/resource/resource_resource/pitfalls:

Pitfalls
--------

- `_get_work_interval` is deprecated: use `_adjust_to_calendar`.
- `_adjust_to_calendar` and the mixin methods accept naive datetimes and consider them as UTC.
- `_get_leave_days_data_batch` and `_list_work_time_per_day` use the current calendar of the
  records (`resource_calendar_id`), while `_get_work_days_data_batch` uses `_get_calendars`.
- Pass `compute_leaves=False` in the context of `_list_work_time_per_day` to ignore leaves.

.. _reference/resource/resource_resource/reference:

Reference
---------

.. automodel:: odoo.addons.resource.models.resource_resource.ResourceResource
   :main:

   .. autofield:: name
   .. autofield:: resource_type
   .. autofield:: calendar_id
   .. autofield:: tz
   .. autofield:: user_id
   .. autofield:: company_id
   .. autofield:: time_efficiency

   .. automethod:: _get_resources_per_tz
   .. automethod:: _get_calendars_validity_within_period
   .. automethod:: _get_valid_work_intervals
   .. automethod:: _get_calendar_data_at
   .. automethod:: _get_unavailable_intervals
   .. automethod:: _adjust_to_calendar
   .. automethod:: _is_flexible
   .. automethod:: _is_fully_flexible
   .. automethod:: _get_flexible_resource_valid_work_intervals
   .. automethod:: _get_flexible_resource_work_hours

.. automodel:: odoo.addons.resource.models.resource_mixin.ResourceMixin
   :main:

   .. autofield:: resource_id
   .. autofield:: resource_calendar_id
   .. autofield:: company_id
   .. autofield:: tz

   .. automethod:: _get_calendars
   .. automethod:: _get_work_days_data_batch
   .. automethod:: _get_leave_days_data_batch
   .. automethod:: _list_work_time_per_day
   .. automethod:: _adjust_to_calendar
   .. automethod:: _prepare_resource_values
