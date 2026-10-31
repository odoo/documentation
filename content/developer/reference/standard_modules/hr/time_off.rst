.. _reference/hr/time_off:

.. py:currentmodule:: odoo.addons.hr_holidays.models

========
Time off
========

The `hr_holidays` module (*Time Off* application) lets employees request time off, managers
approve it, and HR grant the time that can be taken. It is built on:

- the **work entry types** (`hr.work.entry.type`): in 20.0, `hr.leave.type` was merged into
  them, so a time off type *is* a work entry type, extended by `hr_holidays` with the time off
  configuration;
- the **time off requests** (`hr.leave`): a period of absence (or of working time out of the
  office) of an employee, which goes through an approval flow;
- the **allocations** (`hr.leave.allocation`): the time granted to an employee for a type,
  fixed or earned over time with accrual plans, see :ref:`reference/hr/time_off_allocation`;
- the **resource leaves** (`resource.calendar.leaves`): validated time off creates one, which
  removes the time from the working schedule, hence from the work entries and the payslips;
- the **mandatory days** (`hr.leave.mandatory.day`): days on which employees cannot request
  time off.

This page covers the types, the requests and their effects; allocations, balances and accruals
are covered in :ref:`reference/hr/time_off_allocation`.

.. seealso::
   :ref:`reference/resource/resource_calendar` for the schedules and leaves the durations are
   computed from, :ref:`reference/hr/hr_employee/time` for the calendars of employees over time
   and :ref:`reference/payroll/work_entries` for the work entries and the time rules.

.. note::
   The examples run in `odoo-bin shell` on a database with `hr_holidays` and its demo data. The
   shell runs as superuser, which bypasses the approval checks: the examples first switch to the
   administrator, a time off administrator, with `env = env(user=env.ref('base.user_admin'))`.

.. _reference/hr/time_off/types:

Time off types
--------------

A time off type is a `hr.work.entry.type` with `time_off_selectable` set. Its work entry fields
(`code`, `country_id`, `count_as`, `amount_rate`, see :ref:`reference/payroll/work_entries/types`)
apply to the time off as to any work entry. `hr_holidays` adds:

`requires_allocation`
   Whether the time must be granted by an allocation first (e.g. paid time off), or can be taken
   freely (e.g. sick leave, unpaid leave). It cannot be changed once requests of the type exist.

`request_unit`
   The granularity of the requests: `day`, `half_day` or `hour` (*Custom Hours*). Requests of a
   type by hour can also be taken by day or half day.

`unit_of_measure`
   The unit the type is allocated and counted in: `hour` (default) or `day`. Balances are
   expressed in this unit.

`leave_validation_type` and `allocation_validation_type`
   Who approves the requests and the allocations: `no_validation`, `hr` (*By HR Responsible*,
   default), `manager` (*By Time Off Approver*) or `both` (time off approver, then HR). See
   :ref:`reference/hr/time_off/lifecycle`.

`count_days_as`
   `working` (default): the duration counts the working days of the schedule; `calendar`: every
   day counts. `include_public_holidays_in_duration` (*Ignore Public Holidays*) counts the public
   holidays as time off instead of deducting them. `count_days_as` cannot be changed once
   requests of the type exist, `include_public_holidays_in_duration` once requests of the
   current year overlap a public holiday.

`allows_negative` and `max_allowed_negative`
   Let the balance go below zero, down to `-max_allowed_negative`.

`employee_requests`
   Whether employees can request allocations of the type themselves.

`allow_request_on_top`
   Allow other requests to overlap the requests of this type; only for working time types.

`elligible_for_accrual_rate`
   Whether the time off counts as worked time for the accrual plans based on worked time.
   Always set for working time types.

`create_calendar_meeting`, `support_document`, `color`, `hide_on_dashboard`, ...
   User interface options: a calendar event per validated request, a supporting document
   notice, dashboard display.

The type also has non-stored fields computed for the employee of the context (`employee_id` or
`default_employee_id`, else the user's employee): `max_leaves`, `leaves_taken`,
`virtual_remaining_leaves` and `has_valid_allocation`. With `employee_id` in the context, the
display name also shows the balance.

.. warning::
   `count_as` defaults to `working_time` on `hr.work.entry.type`. An absence type must set
   `count_as = 'absence'`, otherwise its time off counts as worked time in the schedules, the
   work entries and the payslips.

.. example::

   .. code-block:: python

      from datetime import date

      env = env(user=env.ref('base.user_admin'))
      employee = env['hr.employee'].search([('name', '=', 'Ronnie Hart')])
      pto, unpaid = env['hr.work.entry.type'].create([{
          'name': 'Paid Time Off',
          'code': 'DOCPTO',
          'count_as': 'absence',
          'requires_allocation': True,
          'request_unit': 'half_day',
          'unit_of_measure': 'day',
          'leave_validation_type': 'manager',
      }, {
          'name': 'Unpaid Leave',
          'code': 'DOCUNPAID',
          'count_as': 'absence',
          'amount_rate': 0.0,
          'requires_allocation': False,
          'request_unit': 'hour',
          'leave_validation_type': 'no_validation',
      }])
      pto.country_id.code, pto.allocation_validation_type, pto.elligible_for_accrual_rate
      # ('US', 'hr', False): the country of the company, defaults

      env['hr.leave.allocation'].create({
          'employee_id': employee.id,
          'work_entry_type_id': pto.id,
          'number_of_days': 20,
          'date_from': date(2026, 1, 1),
      }).action_approve()
      pto.with_context(employee_id=employee.id).read(['max_leaves', 'virtual_remaining_leaves'])
      # [{'id': ..., 'max_leaves': 20.0, 'virtual_remaining_leaves': 20.0}]
      pto.with_context(employee_id=employee.id).display_name
      # 'Paid Time Off (20 remaining out of 20 days)'

.. _reference/hr/time_off/requests:

Time off requests
-----------------

A request (`hr.leave`) belongs to an employee (`employee_id`) and has a type
(`work_entry_type_id`). Its period is **entered** with the request fields, and **computed** into
`date_from` and `date_to`:

`request_date_from`, `request_date_to`
   The first and last days (`date`), in the employee's timezone.

`request_date_from_period`, `request_date_to_period`
   `am` or `pm`, for types by half day: a request from Monday afternoon to Wednesday morning is
   `('pm', 'am')`.

`request_hour_from`, `request_hour_to`
   Float hours (`13.5` is 13:30) in the employee's timezone, for types by hour. When both are
   `0`, the hours of the schedule are used.

`date_from`, `date_to`
   Naive UTC datetimes, computed by :meth:`~hr_leave.HrLeave._compute_date_from_to`. A day
   starts at the first working hour and ends at the last working hour of the schedule of the
   employee's version on that day (a day off takes the hours of the nearest working day, see
   :meth:`~hr_employee.HrEmployee._get_hours_for_date`); a half day starts or ends at noon.
   **Never write them**: write the request fields.

`resource_calendar_id`
   The working schedule of the version in contract during the request, computed. A request
   cannot span versions with different schedules
   (:meth:`~hr_leave.HrLeave._check_contracts`).

`number_of_days`, `number_of_hours`
   The duration, computed, see :ref:`reference/hr/time_off/durations`.

`request_duration` (`full`, `am`, `pm`, `specific`) and `request_date_hour_from` /
`request_date_hour_to` are form and calendar view helpers, converted from and to the request
fields.

.. example::

   Paid time off from Monday to Wednesday morning, created by the administrator for another
   employee, and an unpaid leave of two hours and a half:

   .. code-block:: python

      leave = env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': pto.id,
          'request_date_from': date(2026, 11, 16),
          'request_date_to': date(2026, 11, 18),
          'request_date_to_period': 'am',
      })
      leave.date_from, leave.date_to, leave.tz
      # (datetime.datetime(2026, 11, 16, 7, 0), datetime.datetime(2026, 11, 18, 11, 0),
      #  'Europe/Brussels'): 8:00 to 12:00 local time
      leave.number_of_days, leave.number_of_hours, leave.state
      # (2.5, 20.0, 'validate')
      leave.display_name
      # 'Ronnie Hart on Paid Time Off: 2.5 days (11/16/2026 to 11/18/2026)'

      hourly = env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': unpaid.id,
          'request_date_from': date(2026, 11, 20),
          'request_date_to': date(2026, 11, 20),
          'request_hour_from': 13.5,
          'request_hour_to': 16.0,
      })
      hourly.date_from, hourly.date_to, hourly.number_of_days, hourly.number_of_hours
      # (datetime.datetime(2026, 11, 20, 12, 30), datetime.datetime(2026, 11, 20, 15, 0),
      #  0.313, 2.5)

   The paid time off is approved at once: see :ref:`reference/hr/time_off/lifecycle`.

.. _reference/hr/time_off/durations:

Durations
---------

`number_of_days` and `number_of_hours` are computed by :meth:`~hr_leave.HrLeave._get_durations`,
which can also be called directly (it returns `{leave.id: (days, hours)}` without assigning the
fields). The hours are the working hours of the request's schedule between `date_from` and
`date_to`, for the employee (see :ref:`reference/resource/resource_resource/mixin`), minus the
absence leaves: public holidays and other validated absences of the employee, but not the
request itself. Then:

- types by day round the days up to whole days, types by half day to half days;
  :meth:`~hr_leave.HrLeave._get_durations` with `check_work_entry_type=False` gives the real
  number of working days;
- with `count_days_as = 'calendar'`, every day of the period counts (public holidays still
  deducted, unless `include_public_holidays_in_duration`), at the hours per day of the schedule;
- with `include_public_holidays_in_duration`, public holidays are not deducted;
- a single day request of an employee with a flexible schedule counts the real length of the
  request (minus public holidays), the hours of a flexible schedule having no position in the
  day;
- working time types outside the schedule (e.g. a business trip on a Saturday) count their
  days, or their clock hours for types by hour.

The days of a request by hour are its hours divided by the hours of a day of the schedule.

.. example::

   One week, Monday to Sunday, with a public holiday on Tuesday:

   .. code-block:: python

      from datetime import datetime

      day_type, half_type, hour_type = env['hr.work.entry.type'].create([{
          'name': f'Leave by {unit}',
          'code': f'DOC{unit.upper()}',
          'count_as': 'absence',
          'requires_allocation': False,
          'request_unit': unit,
          'leave_validation_type': 'no_validation',
      } for unit in ('day', 'half_day', 'hour')])
      env['resource.calendar.leaves'].create({
          'name': 'Founders Day',  # no resource: a public holiday
          'date_from': datetime(2026, 12, 8, 7, 0),
          'date_to': datetime(2026, 12, 8, 15, 0),
          'company_id': employee.company_id.id,
      })

      week = env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': day_type.id,
          'request_date_from': date(2026, 12, 7),
          'request_date_to': date(2026, 12, 13),
      })
      week.number_of_days, week.number_of_hours  # (4.0, 32.0)

      ph_counted, calendar_days = env['hr.work.entry.type'].create([{
          'name': 'PH counted', 'code': 'DOCPH', 'count_as': 'absence',
          'requires_allocation': False, 'include_public_holidays_in_duration': True,
      }, {
          'name': 'Calendar days', 'code': 'DOCCAL', 'count_as': 'absence',
          'requires_allocation': False, 'count_days_as': 'calendar',
      }])
      for leave_type in (ph_counted, calendar_days):
          probe = env['hr.leave'].new({
              'employee_id': employee.id,
              'work_entry_type_id': leave_type.id,
              'request_date_from': date(2026, 12, 7),
              'request_date_to': date(2026, 12, 13),
          })
          print(leave_type.name, probe.number_of_days, probe.number_of_hours)
      # PH counted 5.0 40.0
      # Calendar days 6.0 48.0

   The same afternoon requested with each unit (the hours are ignored by the types by day and
   half day, the periods by the type by hour):

   .. code-block:: python

      for leave_type in (day_type, half_type, hour_type):
          probe = env['hr.leave'].new({
              'employee_id': employee.id,
              'work_entry_type_id': leave_type.id,
              'request_date_from': date(2026, 12, 15),
              'request_date_to': date(2026, 12, 15),
              'request_date_from_period': 'pm',
              'request_date_to_period': 'pm',
              'request_hour_from': 9.0,
              'request_hour_to': 11.0,
          })
          print(leave_type.request_unit, probe.date_from, probe.date_to,
                probe.number_of_days, probe.number_of_hours)
      # day 2026-12-15 07:00:00 2026-12-15 15:00:00 1.0 8.0
      # half_day 2026-12-15 11:00:00 2026-12-15 15:00:00 0.5 4.0
      # hour 2026-12-15 08:00:00 2026-12-15 10:00:00 0.25 2.0

.. _reference/hr/time_off/lifecycle:

States and approval
-------------------

.. graphviz::

   digraph leave_states {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      confirm [label="confirm\n(To Approve)"];
      validate1 [label="validate1\n(Second Approval)"];
      validate [label="validate\n(Approved)"];
      refuse [label="refuse\n(Refused)"];
      cancel [label="cancel\n(Cancelled)"];
      confirm -> validate1 [label="first approval\n(type 'both')"];
      confirm -> validate [label="action_approve"];
      validate1 -> validate [label="action_approve"];
      confirm -> refuse [label="action_refuse"];
      validate1 -> refuse;
      validate -> refuse;
      validate -> confirm [label="action_back_to_approval"];
      validate -> cancel [label="_action_user_cancel"];
   }

A request is created in `confirm`. The validation type of its type decides who approves it:

`no_validation`
   The request is approved on creation.

`hr`
   A time off officer (`hr_holidays.group_hr_holidays_user`) approves it.

`manager`
   The employee's time off approver (`hr.employee.leave_manager_id`, *Time Off Approver*,
   defaulting to the manager's user) approves it, or an officer.

`both`
   The time off approver gives a first approval (`validate1`), then an officer approves it.

On creation, :meth:`~hr_leave.HrLeave._process_auto_approve_activities` approves the request
right away when its type has no validation **or when an officer creates it for another
employee**; otherwise, it schedules an approval activity for
:meth:`~hr_leave.HrLeave._get_responsible_for_approval`: the time off approver (or the manager's
user, or the HR responsible) for `manager` and the first step of `both`, the employee's HR
responsible (`hr_responsible_id`) for `hr` and the second step of `both`.

The actions are:

:meth:`~hr_leave.HrLeave.action_approve`
   Validates the request if the user can (:meth:`~hr_leave.HrLeave._action_validate`), else
   gives the first approval of a `both` type. Officers validate in one step, whatever the type.
   With `check_state=False`, rights are not checked.

:meth:`~hr_leave.HrLeave.action_refuse`
   Refuses a request to approve or approved.

:meth:`~hr_leave.HrLeave.action_back_to_approval`
   Resets approved requests to `confirm`.

:meth:`~hr_leave.HrLeave._action_user_cancel` and :meth:`~hr_leave.HrLeave._force_cancel`
   Cancel a request, the first one checking that the user can (an employee can cancel their own
   requests unless they started). The *Cancel* button opens the `hr.holidays.cancel.leave`
   wizard, which calls the first one with a reason.

What the current user may do is given by :meth:`~hr_leave.HrLeave._get_next_states_by_state`
(`{state: set(next_states)}`) and checked by :meth:`~hr_leave.HrLeave._check_approval_update`,
which writing `state` also calls. The fields `can_approve`, `can_validate`, `can_refuse`,
`can_cancel` and `can_back_to_approve` expose it to the views. The superuser bypasses these
checks.

.. example::

   Marc Demo (user `base.user_demo`) requests time off; his time off approver is the
   administrator:

   .. code-block:: python

      demo = env.ref('base.user_demo')
      marc = demo.employee_id
      marc.leave_manager_id.name  # 'Mitchell Admin'

      vacation = env['hr.work.entry.type'].create({
          'name': 'Vacation',
          'code': 'DOCVAC',
          'count_as': 'absence',
          'requires_allocation': False,
          'leave_validation_type': 'manager',
      })
      leave = env['hr.leave'].with_user(demo).create({
          'employee_id': marc.id,
          'work_entry_type_id': vacation.id,
          'request_date_from': date(2026, 12, 7),
          'request_date_to': date(2026, 12, 8),
      })
      leave.state  # 'confirm'
      leave.activity_ids.mapped(lambda a: (a.activity_type_id.name, a.user_id.name))
      # [('Time Off Approval', 'Mitchell Admin')]
      leave._get_next_states_by_state()['confirm']  # set(): Marc cannot approve it

      leave.with_user(env.user).action_approve()
      leave.state, leave.first_approver_id.name  # ('validate', 'Mitchell Admin')

   With a type validated twice, Marc approves the request of Randall Lewis, whose time off
   approver he is, then the administrator validates it:

   .. code-block:: python

      vacation.leave_validation_type = 'both'
      randall = env['hr.employee'].search([('name', '=', 'Randall Lewis')])
      leave = env['hr.leave'].with_user(demo).create({
          'employee_id': randall.id,
          'work_entry_type_id': vacation.id,
          'request_date_from': date(2026, 12, 9),
          'request_date_to': date(2026, 12, 9),
      })
      leave.action_approve()
      leave.state, leave.first_approver_id.name  # ('validate1', 'Marc Demo')
      leave.with_user(env.user).action_approve()
      leave.state, leave.second_approver_id.name  # ('validate', 'Mitchell Admin')

`hr_holidays` defines the groups *Employee* (`group_hr_holidays_employee`, every internal
user), *Time Off Responsible* (`group_hr_holidays_responsible`, given automatically to the users
set as time off approvers), *Officer: Manage all requests* (`group_hr_holidays_user`) and
*Administrator* (`group_hr_holidays_manager`). Users who are not officers only access their
own requests and the requests of the employees they approve; officers access all the requests
of their companies. The description of a request (`name`, stored in `private_name`) is only
readable by officers, the employee and their time off approver.

.. _reference/hr/time_off/checks:

Checks
------

Creating or changing a request checks that:

- it does not overlap another request of the employee with the same `count_as`, unless one of
  their types has `allow_request_on_top` (`_check_date`, skipped with the context key
  `leave_skip_date_check`);
- it is covered by the allocations of the employee when the type requires one
  (:meth:`~hr_leave.HrLeave._check_validity`, see :ref:`reference/hr/time_off_allocation/balances`);
- it is not on a mandatory day, for users who are not officers (same method);
- an approved request is not moved without being reset first (`_check_date_state`);
- an absence by hour does not exceed the planned hours of its days
  (:meth:`~hr_leave.HrLeave._get_max_allowed_absence_hours`);
- it does not span versions with different schedules
  (:meth:`~hr_leave.HrLeave._check_contracts`).

Validating an absence of zero hours, e.g. on a public holiday, raises a `ValidationError`
(*The following employees are not supposed to work during that period*), except for a few sick
and work accident types (:meth:`~hr_leave.HrLeave._get_leaves_on_public_holiday`).

.. _reference/hr/time_off/resource_leaves:

Resource leaves
---------------

Validation (:meth:`~hr_leave.HrLeave._validate_leave_request`) creates a
`resource.calendar.leaves` record per request
(:meth:`~hr_leave.HrLeave._create_resource_leave`), from
:meth:`~hr_leave.HrLeave._prepare_resource_leave_vals`: the employee's resource, the request's
schedule, `date_from` and `date_to`, the type (`work_entry_type_id`, `count_as`,
`elligible_for_accrual_rate`) and the request itself (`holiday_id`). This leave is what the rest
of Odoo sees: the work intervals of the employee (see :ref:`reference/resource/resource_calendar`),
the planning and Gantt views, the work entries and the payslips.

It follows the request: leaving the `validate` state (refusal, reset, cancellation, deletion)
removes it (:meth:`~hr_leave.HrLeave._remove_resource_leave`), and changing the dates or the
type of a validated request rewrites it (:meth:`~hr_leave.HrLeave._amend_resource_leave_dates`).
Validation also creates a calendar event (`meeting_id`) when the type has
`create_calendar_meeting`.

.. example::

   .. code-block:: python

      leave = env['hr.leave'].search([('employee_id', '=', marc.id), ('state', '=', 'validate'),
                                      ('work_entry_type_id', '=', vacation.id)])
      env['resource.calendar.leaves'].search([('holiday_id', '=', leave.id)]).read(
          ['resource_id', 'calendar_id', 'date_from', 'date_to', 'work_entry_type_id',
           'count_as'])
      # [{'id': ..., 'resource_id': (3, 'Marc Demo'), 'calendar_id': (1, '40 hours/week'),
      #   'date_from': datetime.datetime(2026, 12, 7, 7, 0),
      #   'date_to': datetime.datetime(2026, 12, 8, 15, 0),
      #   'work_entry_type_id': (..., 'Vacation'), 'count_as': 'absence'}]

      leave.action_refuse()
      leave.state  # 'refuse'
      env['resource.calendar.leaves'].search_count([('holiday_id', '=', leave.id)])  # 0

.. _reference/hr/time_off/public_holidays:

Public holidays
---------------

Public holidays are global leaves: `resource.calendar.leaves` without `resource_id`, for a
company and optionally a calendar (see :ref:`reference/resource/resource_calendar/leaves`). Two
public holidays of the same company and calendar cannot overlap. `hr_holidays`:

- deducts them from the duration of the requests, unless the type has
  `include_public_holidays_in_duration`;
- recomputes the requests overlapping a public holiday when it is created, changed or deleted
  (:meth:`~resource_calendar_leaves.ResourceCalendarLeaves._reevaluate_leaves`): their duration
  changes, the employee is notified, and a request no longer covered by its allocations is
  refused;
- creates the public holidays of the next year from the CSV files of
  `hr_holidays/data/public_holidays/`, with a monthly cron
  (:meth:`~resource_calendar_leaves.ResourceCalendarLeaves._cron_generate_public_holidays`) and
  the *Load Public Holidays* wizard (which gives them the type of code `006.00`).

In the work entries, a public holiday wins over a time off on the same day, unless the type
code of the time off is listed by `_get_bypassing_work_entry_type_codes` (see
:ref:`reference/payroll/work_entries/generation/raw`).

.. example::

   Continuing the previous examples, a request on the public holiday only, then a second public
   holiday during the week of time off of the durations example:

   .. code-block:: python

      env['hr.leave'].create({
          'employee_id': marc.id,
          'work_entry_type_id': day_type.id,
          'request_date_from': date(2026, 12, 8),
          'request_date_to': date(2026, 12, 8),
      })
      # ValidationError: The following employees are not supposed to work during that period:
      #  Marc Demo

      env['resource.calendar.leaves'].create({
          'name': 'Extra day',
          'date_from': datetime(2026, 12, 10, 7, 0),
          'date_to': datetime(2026, 12, 10, 15, 0),
          'company_id': employee.company_id.id,
      })
      week.number_of_days, week.state  # (3.0, 'validate')

.. _reference/hr/time_off/mandatory_days:

Mandatory days
--------------

A mandatory day (`hr.leave.mandatory.day`) is a period (`start_date` to `end_date`) during which
employees must work, e.g. an inventory. It applies to the employees of its `company_id`, and can
be restricted to a working schedule (`resource_calendar_id`), job positions (`job_ids`) and
departments (`department_ids`, sub-departments included).
:meth:`~hr_employee.HrEmployee._get_mandatory_days` returns the ones applying to an employee.

Users who are not time off officers cannot create requests overlapping a mandatory day; officers
can, and the request's `has_mandatory_day` is then set. The calendar views show them with
:meth:`~hr_employee.HrEmployee.get_special_days_data`.

.. example::

   .. code-block:: python

      env['hr.leave.mandatory.day'].create({
          'name': 'Year-end inventory',
          'start_date': date(2026, 12, 17),
          'end_date': date(2026, 12, 18),
          'color': 2,
      })
      marc._get_mandatory_days(date(2026, 12, 1), date(2026, 12, 31)).mapped('name')
      # ['Year-end inventory']
      marc.get_mandatory_days(date(2026, 12, 1), date(2026, 12, 31))
      # {'2026-12-17': 2, '2026-12-18': 2}

      vals = {
          'employee_id': marc.id,
          'work_entry_type_id': vacation.id,
          'request_date_from': date(2026, 12, 18),
          'request_date_to': date(2026, 12, 18),
      }
      env['hr.leave'].with_user(demo).create(vals)
      # ValidationError: You are not allowed to request time off on a Mandatory Day.
      env['hr.leave'].create(vals).has_mandatory_day  # True

.. _reference/hr/time_off/work_entries:

Work entries and payroll
------------------------

Validated time off reaches the work entries through its resource leave (see
:ref:`reference/payroll/work_entries/generation/raw`). `hr_holidays` extends `hr.version`
(:class:`~hr_version.HrVersion`) so that:

- the type of a leave interval is the type of its time off
  (:meth:`~hr_version.HrVersion._get_leave_work_entry_type`), and overlapping leaves are
  arbitrated by :meth:`~hr_version.HrVersion._get_interval_leave_work_entry_type`: bypassing
  types first, then public holidays, then time off;
- the values carry the time off in `leave_ids`;
- the duration of time off not requested by hour is the planned hours of the schedule
  (:meth:`~hr_version.HrVersion._generate_work_entries_postprocess_adapt_to_calendar`): a day of
  time off counts as a working day, whatever the request's hours;
- the leaves of the employee's time off are found whatever their calendar
  (:meth:`~hr_version.HrVersion._get_sub_leave_domain`).

The `count_as` and type used are the ones **stored on the resource leave**, copied at
validation; the paid rate comes from `amount_rate`. Payroll then turns the work entries into
worked days by type code.

.. example::

   The week of the durations example (two public holidays):

   .. code-block:: python

      vals_list = employee.version_id.generate_work_entries(date(2026, 12, 7), date(2026, 12, 11))
      sorted((vals['date'].isoformat(), vals['work_entry_type_id'].code, vals['duration'],
              vals.get('leave_ids')) for vals in vals_list)
      # [('2026-12-07', 'DOCDAY', 8.0, hr.leave(...)), ('2026-12-08', '006.00', 8.0, None),
      #  ('2026-12-09', 'DOCDAY', 8.0, hr.leave(...)), ('2026-12-10', '006.00', 8.0, None),
      #  ('2026-12-11', 'DOCDAY', 8.0, hr.leave(...))]

**Time rules.** `hr.leave` is a time rule source (`hr.time.rule.source.mixin`, see
:ref:`reference/payroll/work_entries/time_rules/sources`): when a validated request is created
or changed, the rules whose `condition_work_entry_type_ids` include its type reclassify the time
beyond (or missing from) their threshold. The outputs are validated requests linked to their
source (`source_leave_id`, `output_leave_ids`, `time_rule_id`); a source cut by a rule is
flagged `is_time_rule_trimmed`. Absences are clipped to the schedule before being measured
(:meth:`~hr_leave.HrLeave._get_pipeline_intervals_local`). Rules can also credit the excess to
an allocation, see :ref:`reference/hr/time_off_allocation/time_rules`.
:meth:`~hr_leave.HrLeave._get_generated_leave_domain` matches the requests created by rules.

.. _reference/hr/time_off/versions:

Versions, departures and splits
-------------------------------

Requests follow the contract of the employee:

- creating or changing a version (contract dates, `date_version`, `resource_calendar_id`)
  gives the requests the schedule of their version and recomputes them; a request now spanning
  versions with different schedules is split into one request per version, the last part being
  to approve again (:meth:`~hr_version.HrVersion._populate_all_new_leave_vals_from_split_leave`);
  approved requests starting before a new contract and overlapping it are refused;
- registering a departure (`hr.employee.departure.action_register`) cuts the requests at the
  departure date, cancels the approved ones after it, deletes the others (or refuses them, see
  :meth:`~hr_employee_departure.HrEmployeeDeparture._check_refuse_future_leaves_condition`) and
  ends or deletes the allocations
  (:meth:`~hr_employee_departure.HrEmployeeDeparture._cleanup_employee_departure_leaves`).

Two helpers split requests:

:meth:`~hr_leave.HrLeave._split_leaves`
   Removes a period from the requests, keeping the parts before and after it; returns the
   created requests.

:meth:`~hr_leave.HrLeave._create_leaves_from_split`
   Splits a request into consecutive requests of other types, e.g. a sick leave paid by the
   employer for its first days then by the social security; localizations compute the split
   and :meth:`~hr_leave.HrLeave._get_work_entry_type_change_warning` describes it.

.. _reference/hr/time_off/pitfalls:

Pitfalls
--------

- Write the request fields (`request_date_from`, `request_hour_from`, ...), never `date_from`
  and `date_to`: they are recomputed from the request fields.
- An officer creating a request for another employee approves it, with all its effects
  (resource leave, work entries, time rules); create it in `confirm` with another user, or reset
  it with :meth:`~hr_leave.HrLeave.action_back_to_approval`.
- Approved requests must be reset to `confirm` before their dates change.
- The shell runs as superuser: rights and transitions are not checked. Test approval flows with
  `with_user()`.
- A failed `create` in a `try` block may leave partial data in the transaction (e.g. the first
  part of a batch): use `env.cr.savepoint()`.
- `max_leaves` and `virtual_remaining_leaves` on types depend on the employee in the context;
  without it, they are computed for the current user's employee.
- The resource leave keeps the `count_as` of the type at validation: changing the type's
  `count_as` does not change approved requests.

.. _reference/hr/time_off/extending:

Extending
---------

Resource leave
   :meth:`~hr_leave.HrLeave._prepare_resource_leave_vals` to add values to the resource leave.

Approval
   :meth:`~hr_leave.HrLeave._get_next_states_by_state`,
   :meth:`~hr_leave.HrLeave._check_approval_update` and
   :meth:`~hr_leave.HrLeave._get_responsible_for_approval`.

Durations
   :meth:`~hr_leave.HrLeave._get_durations` (called by the compute, and by the forms),
   :meth:`~hr_leave.HrLeave._get_max_allowed_absence_hours` for the maximum hours of an absence.

Splits and departures
   :meth:`~hr_leave.HrLeave._get_extra_default_leave_values_for_split`,
   :meth:`~hr_employee_departure.HrEmployeeDeparture._check_refuse_future_leaves_condition`.

Work entries
   The `hr.version` hooks of :ref:`reference/payroll/work_entries/extending`, e.g.
   `_get_leave_work_entry_type_dates` to change the type of a long absence after some days.

.. _reference/hr/time_off/reference:

Reference
---------

.. automodel:: odoo.addons.hr_holidays.models.hr_leave.HrLeave()
   :main:

   .. autofield:: employee_id
   .. autofield:: work_entry_type_id
   .. autofield:: state
   .. autofield:: request_date_from
   .. autofield:: request_date_to
   .. autofield:: request_date_from_period
   .. autofield:: request_date_to_period
   .. autofield:: request_hour_from
   .. autofield:: request_hour_to
   .. autofield:: date_from
   .. autofield:: date_to
   .. autofield:: number_of_days
   .. autofield:: number_of_hours
   .. autofield:: resource_calendar_id
   .. autofield:: validation_type
   .. autofield:: first_approver_id
   .. autofield:: second_approver_id
   .. autofield:: meeting_id
   .. autofield:: has_mandatory_day
   .. autofield:: time_rule_id
   .. autofield:: source_leave_id
   .. autofield:: output_leave_ids
   .. autofield:: is_time_rule_trimmed

   .. automethod:: create
   .. automethod:: write
   .. automethod:: unlink
   .. automethod:: _compute_date_from_to
   .. automethod:: _get_hour_from_to
   .. automethod:: _to_utc
   .. automethod:: _get_durations
   .. automethod:: _plans_hours_on_the_clock
   .. automethod:: _inverse_number_of_hours
   .. automethod:: _subtract_public_holidays
   .. automethod:: _get_allowed_request_durations
   .. automethod:: _get_request_duration
   .. automethod:: _get_request_date_hours
   .. automethod:: _get_request_vals_from_date_hours
   .. automethod:: _reader_tz
   .. automethod:: reschedule_from_calendar
   .. automethod:: _check_validity
   .. automethod:: _get_allocation_balance
   .. automethod:: _check_contracts
   .. automethod:: _get_overlapping_contracts
   .. automethod:: _get_max_allowed_absence_hours
   .. automethod:: _check_double_validation_rules
   .. automethod:: _process_auto_approve_activities
   .. automethod:: action_approve
   .. automethod:: _action_validate
   .. automethod:: action_refuse
   .. automethod:: action_back_to_approval
   .. automethod:: _move_validate_leave_to_confirm
   .. automethod:: _action_user_cancel
   .. automethod:: _force_cancel
   .. automethod:: _post_leave_cancel
   .. automethod:: _prepare_leave_unlink
   .. automethod:: _get_next_states_by_state
   .. automethod:: _check_approval_update
   .. automethod:: _get_responsible_for_approval
   .. automethod:: activity_update
   .. automethod:: _notify_leave_request
   .. automethod:: _notify_manager
   .. automethod:: _notify_change
   .. automethod:: _get_leaves_on_public_holiday
   .. automethod:: _validate_leave_request
   .. automethod:: _prepare_resource_leave_vals
   .. automethod:: _create_resource_leave
   .. automethod:: _remove_resource_leave
   .. automethod:: _amend_resource_leave_dates
   .. automethod:: _split_leaves
   .. automethod:: _get_split_hour_vals
   .. automethod:: _create_leaves_from_split
   .. automethod:: _get_extra_default_leave_values_for_split
   .. automethod:: _get_work_entry_type_change_warning
   .. automethod:: _get_request_date_to
   .. automethod:: _get_request_date_to_with_period
   .. automethod:: _get_calendar_days
   .. automethod:: _get_calendar_days_between_leaves
   .. automethod:: _cancel_invalid_leaves
   .. automethod:: get_unusual_days
   .. automethod:: _get_generated_leave_domain
   .. automethod:: _get_search_request_date_hour_from_to_domain
   .. automethod:: _apply_record_output
   .. automethod:: _get_pipeline_intervals_local
   .. automethod:: _get_source_extra_fields_domain
   .. automethod:: _get_write_source_extra_source_fields
   .. automethod:: _get_time_rule_end_write_vals
   .. automethod:: _get_time_rule_deficit_occupied
   .. automethod:: _get_time_rule_output_vals
   .. automethod:: _get_time_rule_remainder_vals

.. automodel:: odoo.addons.hr_holidays.models.hr_work_entry_type.HrWorkEntryType()

   .. autofield:: requires_allocation
   .. autofield:: request_unit
   .. autofield:: unit_of_measure
   .. autofield:: leave_validation_type
   .. autofield:: allocation_validation_type
   .. autofield:: employee_requests
   .. autofield:: count_days_as
   .. autofield:: include_public_holidays_in_duration
   .. autofield:: allows_negative
   .. autofield:: max_allowed_negative
   .. autofield:: allow_request_on_top
   .. autofield:: elligible_for_accrual_rate
   .. autofield:: time_off_selectable
   .. autofield:: create_calendar_meeting
   .. autofield:: max_leaves
   .. autofield:: leaves_taken
   .. autofield:: virtual_remaining_leaves
   .. autofield:: has_valid_allocation

   .. automethod:: get_allocation_data
   .. automethod:: get_allocation_data_request
   .. automethod:: get_work_entry_types_with_valid_allocations
   .. automethod:: has_accrual_allocation
   .. automethod:: has_future_allocation
   .. automethod:: _get_closest_expiring_leaves_date_and_count
   .. automethod:: _get_carried_over_days_expiration_data
   .. automethod:: _search_valid
   .. automethod:: _search
   .. automethod:: _model_sorting_key
   .. automethod:: _check_allow_request_on_top
   .. automethod:: _check_elligible_for_accrual_rate
   .. automethod:: _check_overlapping_public_holidays
   .. automethod:: _check_leaves_for_count_days_as
   .. automethod:: check_allocation_requirement_edit_validity

.. automodel:: odoo.addons.hr_holidays.models.hr_leave_mandatory_day.HrLeaveMandatoryDay()
   :main:

   .. autofield:: start_date
   .. autofield:: end_date
   .. autofield:: company_id
   .. autofield:: resource_calendar_id
   .. autofield:: department_ids
   .. autofield:: job_ids

.. automodel:: odoo.addons.hr_holidays.models.hr_employee.HrEmployee()

   .. autofield:: leave_manager_id
   .. autofield:: current_leave_state
   .. autofield:: leave_date_from
   .. autofield:: leave_date_to
   .. autofield:: is_absent

   .. automethod:: create
   .. automethod:: write
   .. automethod:: _get_consumed_leaves
   .. automethod:: _get_hours_per_day
   .. automethod:: _get_hours_for_date
   .. automethod:: _get_mandatory_days
   .. automethod:: get_mandatory_days
   .. automethod:: get_mandatory_days_data
   .. automethod:: _get_public_holidays
   .. automethod:: get_public_holidays_data
   .. automethod:: get_special_days_data
   .. automethod:: get_time_off_dashboard_data
   .. automethod:: get_allocations_number
   .. automethod:: _get_contextual_employee
   .. automethod:: _compute_leave_status
   .. automethod:: _get_first_working_interval_batch
   .. automethod:: _adjust_leaves

.. automodel:: odoo.addons.hr_holidays.models.hr_version.HrVersion()

   .. automethod:: create
   .. automethod:: write
   .. automethod:: _check_contracts
   .. automethod:: _get_leaves
   .. automethod:: _get_leaves_from_vals
   .. automethod:: _check_overlapping_contract
   .. automethod:: _update_leave_calendar
   .. automethod:: _update_leave_state
   .. automethod:: _populate_all_new_leave_vals_from_split_leave
   .. automethod:: _create_all_new_leave
   .. automethod:: _get_leave_work_entry_type
   .. automethod:: _get_more_vals_leave_interval
   .. automethod:: _get_interval_leave_work_entry_type
   .. automethod:: _get_sub_leave_domain
   .. automethod:: _generate_work_entries_postprocess_adapt_to_calendar
   .. automethod:: _get_work_entry_source_fields
   .. automethod:: _action_trigger_accrual_plan_working_schedule

.. automodel:: odoo.addons.hr_holidays.models.resource_calendar_leaves.ResourceCalendarLeaves()

   .. autofield:: holiday_id
   .. autofield:: elligible_for_accrual_rate

   .. automethod:: _check_compare_dates
   .. automethod:: _reevaluate_leaves
   .. automethod:: _get_domain
   .. automethod:: _get_time_domain_dict
   .. automethod:: _prepare_public_holidays_data
   .. automethod:: _cron_generate_public_holidays
   .. automethod:: _ensure_datetime

.. automodel:: odoo.addons.hr_holidays.models.hr_employee_departure.HrEmployeeDeparture()

   .. automethod:: _cleanup_employee_departure_leaves
   .. automethod:: _check_refuse_future_leaves_condition

.. automodel:: odoo.addons.hr_holidays.models.resource_resource.ResourceResource()

   .. autofield:: leave_date_to

   .. automethod:: _format_leave

.. automodel:: odoo.addons.hr_holidays.models.hr_leave_display_name_mixin.HrLeaveDisplayNameMixin()
   :main:

   .. automethod:: _get_leave_duration_display
   .. automethod:: _get_leave_display_date
