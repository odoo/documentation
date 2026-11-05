.. _reference/hr/time_off_allocation:

.. py:currentmodule:: odoo.addons.hr_holidays.models

=================================
Time off allocations and accruals
=================================

An **allocation** (`hr.leave.allocation`) grants an employee an amount of time off of a type
that requires it (`requires_allocation`, see :ref:`reference/hr/time_off/types`). The amount is
either fixed, or earned over time by an **accrual plan** (`hr.leave.accrual.plan`) and its
**levels** (`hr.leave.accrual.level`). The time off requests of the employee are deducted from
the allocations to compute the **balance**, which is checked when requesting time off.

Allocations are also created by `hr_holidays` itself: from the accrual plan of a working
schedule, and from the time rules crediting overtime as compensatory time off.

.. seealso::
   :ref:`reference/hr/time_off` for the time off types and requests.

.. note::
   As in :ref:`reference/hr/time_off`, the examples run in `odoo-bin shell` with the demo data,
   as the administrator: `env = env(user=env.ref('base.user_admin'))`.

.. _reference/hr/time_off_allocation/allocations:

Allocations
-----------

An allocation belongs to an employee (`employee_id`) and a type (`work_entry_type_id`), and is
valid from `date_from` to `date_to` (both `date`; no `date_to` means no end). Time off is only
deducted from an allocation for its part within the validity of the allocation.

`number_of_days`
   The amount granted, **always in days**, also for types allocated in hours.
   `number_of_hours` is computed from it with the hours per day of the employee's schedule at
   `date_from` (24 for a fully flexible schedule) and can be written, which sets
   `number_of_days` (for an accrual allocation, the schedule at its next accrual is used).
   `type_request_unit` is the unit the allocation is displayed and accrued in:
   the `added_value_type` of the accrual plan, else the type's `unit_of_measure`
   (:meth:`~hr_leave_allocation.HrLeaveAllocation._get_request_unit`).

`state`
   `confirm` (*To Approve*, the only state allowed at creation), `validate1` (*Second
   Approval*), `validate` (*Approved*) or `refuse`. Only approved allocations count.

`accrual_plan_id`
   Set for accrual allocations, see :ref:`reference/hr/time_off_allocation/accruals`; the plan's
   type must be the allocation's type.

The approval works as for time off requests, with the type's `allocation_validation_type`:
types without validation are approved on creation, the others with
:meth:`~hr_leave_allocation.HrLeaveAllocation.action_approve` (to `validate`, or to `validate1`
for the first approval of a type validated twice) and
:meth:`~hr_leave_allocation.HrLeaveAllocation.action_refuse`. Only time off administrators
approve their own allocations. Employees can request allocations of the types with
`employee_requests`.

An approved allocation cannot be reduced below the time already taken from it; only
allocations to approve or refused, without time off taken, can be deleted. A negative
allocation is only allowed for types allowing a negative balance, within their
`max_allowed_negative`.

.. _reference/hr/time_off_allocation/balances:

Balances
--------

:meth:`~hr_employee.HrEmployee._get_consumed_leaves` is the core of every balance. For a set of
employees and types, it deducts the requests to approve and approved (`confirm`, `validate1`,
`validate`) from the approved allocations, request by request in chronological order, and
allocation by allocation in this order:

#. the allocations with an end date, the one ending first first;
#. the accrual allocations without end date;
#. the other allocations without end date.

A request is only deducted from the allocations valid on its dates; the part of a request that
no allocation covers is an **excess**. The result distinguishes:

- the **approved** amounts: `leaves_taken` and `remaining_leaves`, counting approved requests
  only;
- the **virtual** amounts: `virtual_leaves_taken` and `virtual_remaining_leaves`, also counting
  the requests to approve. The virtual remaining amount is what can still be requested.

Amounts are in the `unit_of_measure` of the type: keys are prefixed with `days_` or `hours_`
(e.g. `days_virtual_remaining_leaves`), and the other unit is also given as `<unit>_taken` and
`<unit>_remaining`. Types without allocation use the key `False` instead of an allocation.

On top of it:

:meth:`~hr_work_entry_type.HrWorkEntryType.get_allocation_data`
   The balance per employee and type on a date, summed over the allocations valid on that date:
   `{employee: [(type name, data, requires_allocation, type id), ...]}`. It feeds the time off
   dashboard (through `get_allocation_data_request`) and the checks of the requests.

The computed fields `max_leaves`, `leaves_taken` and `virtual_remaining_leaves`
   On `hr.leave.allocation` (per allocation, today), on `hr.work.entry.type` (for the employee
   of the context) and on `hr.leave` (`max_leaves`, `virtual_remaining_leaves`, for the request's
   employee and type). They are for display: code should call the methods above.

Creating or changing a request of a type requiring an allocation checks that the virtual balance
on its first day covers it (:meth:`~hr_leave.HrLeave._check_validity`), down to
`-max_allowed_negative` when the type allows a negative balance.

.. example::

   Marc Demo has an allocation of 3 days valid in 2026 and an open-ended one of 10 days, an
   approved request of 4 days and a request of half a day to approve:

   .. code-block:: python

      from datetime import date

      env = env(user=env.ref('base.user_admin'))
      demo = env.ref('base.user_demo')
      marc = demo.employee_id
      pto = env['hr.work.entry.type'].create({
          'name': 'Paid Time Off',
          'code': 'DOCPTO',
          'count_as': 'absence',
          'requires_allocation': True,
          'request_unit': 'half_day',
          'unit_of_measure': 'day',
          'leave_validation_type': 'manager',
          'allocation_validation_type': 'hr',
      })
      yearly, open_ended = env['hr.leave.allocation'].create([{
          'employee_id': marc.id,
          'work_entry_type_id': pto.id,
          'number_of_days': 3,
          'date_from': date(2026, 1, 1),
          'date_to': date(2026, 12, 31),
      }, {
          'employee_id': marc.id,
          'work_entry_type_id': pto.id,
          'number_of_days': 10,
          'date_from': date(2026, 1, 1),
      }])
      yearly.state, yearly.name  # ('confirm', 'Paid Time Off (3.0 day(s))')
      (yearly | open_ended).action_approve()
      yearly.state, yearly.approver_id.name  # ('validate', 'Mitchell Admin')

      approved = env['hr.leave'].create({
          'employee_id': marc.id,
          'work_entry_type_id': pto.id,
          'request_date_from': date(2026, 12, 1),
          'request_date_to': date(2026, 12, 4),
      })
      pending = env['hr.leave'].with_user(demo).create({
          'employee_id': marc.id,
          'work_entry_type_id': pto.id,
          'request_date_from': date(2026, 12, 14),
          'request_date_to': date(2026, 12, 14),
          'request_date_to_period': 'am',
      })
      (approved.state, approved.number_of_days), (pending.state, pending.number_of_days)
      # (('validate', 4.0), ('confirm', 0.5))

      consumed, to_recheck = marc._get_consumed_leaves(pto)
      dict(consumed[marc][pto][yearly])  # a defaultdict
      # {'days_max_leaves': 3.0, 'days_accrual_bonus': 0, 'days_leaves_taken': 3.0,
      #  'days_virtual_leaves_taken': 3.0, 'days_remaining_leaves': 0.0,
      #  'days_virtual_remaining_leaves': 0.0, 'hours_taken': 24.0, 'hours_remaining': 0.0}
      dict(consumed[marc][pto][open_ended])
      # {'days_max_leaves': 10.0, 'days_accrual_bonus': 0, 'days_leaves_taken': 1.0,
      #  'days_virtual_leaves_taken': 1.5, 'days_remaining_leaves': 9.0,
      #  'days_virtual_remaining_leaves': 8.5, 'hours_taken': 8.0, 'hours_remaining': 68.0}

      name, data, requires_allocation, type_id = pto.get_allocation_data(marc)[marc][0]
      {key: data[key] for key in ('max_leaves', 'leaves_taken', 'remaining_leaves',
                                  'virtual_leaves_taken', 'virtual_remaining_leaves',
                                  'leaves_requested')}
      # {'max_leaves': 13.0, 'leaves_taken': 4.0, 'remaining_leaves': 9.0,
      #  'virtual_leaves_taken': 4.5, 'virtual_remaining_leaves': 8.5, 'leaves_requested': 0.5}

      env['hr.leave'].create({
          'employee_id': marc.id,
          'work_entry_type_id': pto.id,
          'request_date_from': date(2026, 12, 15),
          'request_date_to': date(2026, 12, 31),
      })
      # ValidationError: Marc Demo does not have a valid allocation for the leave type
      # Paid Time Off to cover that request.

.. _reference/hr/time_off_allocation/accruals:

Accrual plans
-------------

An accrual plan (`hr.leave.accrual.plan`) earns time for its type (`work_entry_type_id`) over
time. Its **levels** (`level_ids`, *Milestones*), ordered by start, each define a rate:

`start_count`, `start_type`, `milestone_date`
   When the level starts, after the start of the allocation (`milestone_date = 'creation'`:
   immediately). The first level may start later than the allocation.

`added_value`, `added_value_type`
   The amount earned per period, in days or hours. The first level's unit is the unit of the
   plan (`added_value_type` of the plan) and of its allocations (`type_request_unit`).

`frequency`
   `hourly` (per worked hour, see below), `daily`, `weekly` (`week_day`), `bimonthly`
   (`first_day`, `second_day`), `monthly` (`first_day`), `biyearly` (`first_month`,
   `first_month_day`, `second_month`, `second_month_day`) or `yearly` (`yearly_month`,
   `yearly_day`): the accrual dates, computed by
   :meth:`~hr_leave_accrual_plan_level.HrLeaveAccrualLevel._get_next_date` and
   :meth:`~hr_leave_accrual_plan_level.HrLeaveAccrualLevel._get_previous_date`.

`cap_accrued_time`, `maximum_leave`
   A cap on the balance (earned minus taken): accrual stops while the balance is at the cap.

`cap_accrued_time_yearly`, `maximum_leave_yearly`
   A cap on the amount earned per year (between two carry-over dates).

`action_with_unused_accruals`, `carryover_options`, `max_carriedover_duration`
   What happens to the balance on the carry-over date: `lost` (reset), or carried over, without
   limit or up to `max_carriedover_duration`.

`accrual_validity`, `accrual_validity_count`, `accrual_validity_type`
   The time carried over expires after this period.

On the plan:

`accrued_gain_time`
   `end` (default): the time of a period is earned at its end (on the next accrual date);
   `start`: at its start.

`transition_mode`
   `immediately`: a level starts on its start date; `end_of_accrual`: on its first accrual date
   from its start date, so that a period is never split between two levels
   (:meth:`~hr_leave_allocation.HrLeaveAllocation._get_lvls_boundaries`).

`is_based_on_worked_time`
   Prorate the earned time on the worked time of the period: absences whose type is not
   `elligible_for_accrual_rate` reduce it
   (:meth:`~hr_leave_allocation.HrLeaveAllocation._get_accrual_plan_level_work_entry_prorata`).
   With `hourly` levels, the amount is earned per hour of the period (worked hours with this
   option, all planned hours without).

`can_be_carryover`, `carryover_date`, `carryover_day`, `carryover_month`
   Whether unused time is carried over at all (otherwise it is lost on the carry-over date), and
   when: the start of the year, the anniversary of the allocation, or a custom day.

The first period of an allocation starting between two accrual dates is prorated on its number
of days, unless the plan is based on worked time.

.. _reference/hr/time_off_allocation/accrual_computation:

Running the accruals
--------------------

An accrual allocation stores its progress: `number_of_days` (earned so far), `lastcall` and
`nextcall` (the last and next accrual **events**: accrual dates, level transitions, carry-over
dates, expirations), `last_accrual`, `yearly_accrued_days`,
`previous_carryover_number_of_days` and `carried_over_days_expiration_date`.

The daily cron (*Accrual Time Off: Updates the number of time off*) runs
`model._get_to_update_accrual_allocations()._update_accrual()`:
:meth:`~hr_leave_allocation.HrLeaveAllocation._get_to_update_accrual_allocations` selects the
approved accrual allocations valid today whose `nextcall` is due, and
:meth:`~hr_leave_allocation.HrLeaveAllocation._update_accrual` processes every event up to today
and writes the result. A new allocation starting in the past catches up at its first run.

:meth:`~hr_leave_allocation.HrLeaveAllocation._process_accrual_plans` does the computation
without writing: it starts from the stored values (or the `precomputed_allocations` given),
processes the events up to a date and returns `{allocation: allocation_data}`. The *Accrual
inconsistent* helper methods (see the class docstring of
:class:`~hr_leave_allocation.HrLeaveAllocation`) only read and update `allocation_data`, so that
the same code serves:

- the cron, which writes the result;
- the **future balance**: the balance on a future date includes what the accrual will have
  earned by then (`accrual_bonus`,
  :meth:`~hr_leave_allocation.HrLeaveAllocation._get_additionnal_future_leaves_on`), and future
  requests are checked against it (`to_recheck_leaves`, `exceeding_duration` in the second
  result of :meth:`~hr_employee.HrEmployee._get_consumed_leaves`);
- the allocation form, which simulates the plan from `date_from` until today.

A second daily cron (:meth:`~hr_leave.HrLeave._cancel_invalid_leaves`) cancels the requests of
the next 31 days that the accruals will not cover.

.. example::

   A plan earning 1.5 days per month at the end of the month, carrying over at most 5 days at
   the start of the year, and 2 days per month after two years:

   .. code-block:: python

      from odoo.fields import Command

      plan = env['hr.leave.accrual.plan'].create({
          'name': 'Monthly 1.5 days',
          'work_entry_type_id': pto.id,
          'accrued_gain_time': 'end',
          'can_be_carryover': True,
          'carryover_date': 'year_start',
          'level_ids': [Command.create({
              'added_value': 1.5,
              'added_value_type': 'day',
              'frequency': 'monthly',
              'first_day': '1',
              'action_with_unused_accruals': 'all',
              'carryover_options': 'limited',
              'max_carriedover_duration': 5,
          }), Command.create({
              'milestone_date': 'after',
              'start_count': 2,
              'start_type': 'year',
              'added_value': 2,
              'added_value_type': 'day',
              'frequency': 'monthly',
              'first_day': '1',
              'action_with_unused_accruals': 'all',
          })],
      })
      employee = env['hr.employee'].search([('name', '=', 'Ronnie Hart')])
      allocation = env['hr.leave.allocation'].create({
          'employee_id': employee.id,
          'work_entry_type_id': pto.id,
          'accrual_plan_id': plan.id,
          'date_from': date(2026, 1, 1),
          'number_of_days': 0,
      })
      allocation.action_approve()
      allocation.number_of_days, allocation.nextcall  # (0.0, False): not run yet

      allocation._update_accrual()  # what the cron does (today is 2026-10-23)
      allocation.number_of_days, allocation.lastcall, allocation.nextcall
      # (13.5, datetime.date(2026, 10, 1), datetime.date(2026, 11, 1)): 9 months
      allocation._get_lvls_boundaries()
      # [datetime.date(2026, 1, 1), datetime.date(2028, 1, 1)]

      allocation._process_accrual_plans(date(2027, 1, 1))[allocation]
      # {'last_accrual': datetime.date(2027, 1, 1), 'lastcall': datetime.date(2027, 1, 1),
      #  'nextcall': datetime.date(2027, 2, 1), 'allocated_duration': 6.5,
      #  'yearly_accrued_duration': 0, 'carried_over_days_expiration_date': False,
      #  'previous_carryover_allocated_duration': 5, 'leaves_taken': 0}
      allocation.number_of_days  # 13.5: nothing written

      data = pto.get_allocation_data(employee, date(2026, 12, 31))[employee][0][1]
      data['max_leaves'], data['accrual_bonus']  # (16.5, 3.0)

   On January 1, 2027, the 16.5 days earned in 2026 are capped to 5 by the carry-over, then
   December's 1.5 days are earned (at the end of the period): 6.5 days.

.. _reference/hr/time_off_allocation/schedule:

Allocations from working schedules
----------------------------------

A working schedule can have an accrual plan (`resource.calendar.leave_accrual_plan_id`). When an
employee's version uses a schedule with a work time rate above 100% and such a plan, the version
gets an accrual allocation of the plan over its period
(`hr.version.allocation_from_working_schedule_id`), recreated when the version's schedule
changes (:meth:`~hr_version.HrVersion._action_trigger_accrual_plan_working_schedule`). It
compensates schedules longer than the legal working time with time off.

.. _reference/hr/time_off_allocation/time_rules:

Allocations from time rules
---------------------------

`hr_holidays` adds two fields to the time rules (`hr.time.rule`, see
:ref:`reference/payroll/work_entries/time_rules`): `allocation_type_id` (*Allocate to*, a type
requiring an allocation) and `leave_compensation_rate` (*Allocate %*). The excess hours of such a
rule, times the rate, divided by the employee's hours per day, are credited to the employee's
approved allocation **without end date** of that type, created and approved if needed
(:meth:`~hr_time_rule.HrTimeRule._apply_allocation_credits`); the missing hours of an undertime
rule are deducted from it, unless the allocation cannot cover them all
(:meth:`~hr_time_rule.HrTimeRule._filter_deficit_exceeding_allocation`).

Each credit is logged in a `hr.time.rule.allocation.log` record (the source record `res_model`
and `res_id`, the allocation and the days). When the source is evaluated again, changed,
refused or deleted, its logged credits are reversed first
(:meth:`~hr_time_rule.HrTimeRule._reverse_allocation_credits`); a reversal that would bring the
allocation below what was already taken raises a `ValidationError`.

The sources are the time off requests (validated working time requests exceeding the schedule,
e.g. a long business trip) and, with `hr_holidays_attendance`, the attendances: see
:ref:`reference/hr/hr_attendance/holidays`.

.. example::

   A business trip of 12 hours on a day of 8 planned hours, with a rule crediting the excess
   as compensatory days:

   .. code-block:: python

      trip, compensatory = env['hr.work.entry.type'].create([{
          'name': 'Business Trip',
          'code': 'DOCTRIP',
          'count_as': 'working_time',
          'requires_allocation': False,
          'request_unit': 'hour',
          'leave_validation_type': 'no_validation',
      }, {
          'name': 'Compensatory Days',
          'code': 'DOCCOMP',
          'count_as': 'absence',
          'requires_allocation': True,
          'request_unit': 'half_day',
          'unit_of_measure': 'day',
      }])
      env['hr.time.rule'].create({
          'name': 'Trip overtime to compensatory days',
          'company_id': employee.company_id.id,
          'threshold_operator': 'exceed',
          'working_hours_mode': 'schedule_day',
          'condition_work_entry_type_ids': [Command.set(trip.ids)],
          'leave_compensation_rate': 1.0,
          'allocation_type_id': compensatory.id,
      })
      leave = env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': trip.id,
          'request_date_from': date(2026, 12, 2),
          'request_date_to': date(2026, 12, 2),
          'request_hour_from': 7.0,
          'request_hour_to': 19.0,
      })
      leave.state, leave.number_of_hours  # ('validate', 12.0)
      credit = env['hr.leave.allocation'].search([
          ('employee_id', '=', employee.id), ('work_entry_type_id', '=', compensatory.id),
      ])
      credit.state, credit.number_of_days, credit.date_to  # ('validate', 0.5, False)
      env['hr.time.rule.allocation.log'].search([]).read(['res_model', 'res_id', 'days'])
      # [{'id': ..., 'res_model': 'hr.leave', 'res_id': leave.id, 'days': 0.5}]

      leave.action_refuse()
      credit.number_of_days  # 0.0: the credit is reversed

.. _reference/hr/time_off_allocation/pitfalls:

Pitfalls
--------

- `number_of_days` is in days even for types allocated in hours; the hours are converted with
  the employee's hours per day, so an allocation in hours keeps its hours when the schedule
  changes only because `hr.version` rewrites `number_of_days`.
- The computed balance fields (`max_leaves`, `virtual_remaining_leaves`, ...) are computed for
  today, or for the employee of the context on types: use
  :meth:`~hr_work_entry_type.HrWorkEntryType.get_allocation_data` with a date in code.
- Approving an accrual allocation does not run its plan: `number_of_days` stays at its initial
  value until the cron or a call to :meth:`~hr_leave_allocation.HrLeaveAllocation._update_accrual`.
- A request is deducted from the allocations valid on its dates only: an allocation starting
  after the request, or ending before it, does not cover it, and an allocation ending during a
  request only covers its first part.
- The accrual helpers flagged *Accrual inconsistent* must not read the allocation fields nor
  write: override them consistently with `allocation_data`.
- Time rule credits go to the allocation without end date of the type: a fixed allocation of the
  same type without end date receives them too.

.. _reference/hr/time_off_allocation/extending:

Extending
---------

Accrual frequencies
   :meth:`~hr_leave_accrual_plan_level.HrLeaveAccrualLevel._get_hourly_frequencies` (frequencies
   accruing per hour), with
   :meth:`~hr_leave_accrual_plan_level.HrLeaveAccrualLevel._get_next_date` and
   :meth:`~hr_leave_accrual_plan_level.HrLeaveAccrualLevel._get_previous_date` for new
   frequencies; `hr_holidays_attendance` adds a frequency on attendances this way.

Accrual amounts
   :meth:`~hr_leave_allocation.HrLeaveAllocation._get_accrual_plan_level_work_entry_prorata` and
   :meth:`~hr_leave_allocation.HrLeaveAllocation._get_period_added_duration`.

Balances
   :meth:`~hr_leave_allocation.HrLeaveAllocation._set_leaves_from_consumption_data` to reuse an
   already computed :meth:`~hr_employee.HrEmployee._get_consumed_leaves`.

Time rule credits
   :meth:`~hr_time_rule.HrTimeRule._get_output_leave_merge_key` (when consecutive outputs make
   one request) and the source hooks of :ref:`reference/payroll/work_entries/time_rules/sources`.

.. _reference/hr/time_off_allocation/reference:

Reference
---------

.. automodel:: odoo.addons.hr_holidays.models.hr_leave_allocation.HrLeaveAllocation()
   :main:

   .. autofield:: employee_id
   .. autofield:: work_entry_type_id
   .. autofield:: state
   .. autofield:: date_from
   .. autofield:: date_to
   .. autofield:: number_of_days
   .. autofield:: number_of_hours
   .. autofield:: type_request_unit
   .. autofield:: accrual_plan_id
   .. autofield:: max_leaves
   .. autofield:: leaves_taken
   .. autofield:: virtual_remaining_leaves
   .. autofield:: last_accrual
   .. autofield:: lastcall
   .. autofield:: nextcall
   .. autofield:: yearly_accrued_days
   .. autofield:: previous_carryover_number_of_days
   .. autofield:: carried_over_days_expiration_date

   .. automethod:: create
   .. automethod:: write
   .. automethod:: action_approve
   .. automethod:: _action_validate
   .. automethod:: action_refuse
   .. automethod:: _check_approval_update
   .. automethod:: _get_next_states_by_state
   .. automethod:: _get_responsible_for_approval
   .. automethod:: _check_negative_allocation
   .. automethod:: _set_leaves_from_consumption_data
   .. automethod:: _get_request_unit
   .. automethod:: _get_employee_hours_per_day
   .. automethod:: _convert_duration
   .. automethod:: _convert_to_type_request_unit
   .. automethod:: _convert_from_type_request_unit
   .. automethod:: _get_to_update_accrual_allocations
   .. automethod:: _update_accrual
   .. automethod:: _process_accrual_plans
   .. automethod:: _get_accrual_allocation_data
   .. automethod:: _init_accrual_calls
   .. automethod:: _process_accrual_start
   .. automethod:: _process_accrual_end
   .. automethod:: _add_days_to_allocation
   .. automethod:: _get_period_added_duration
   .. automethod:: _get_accrual_plan_level_work_entry_prorata
   .. automethod:: _process_carryover_date
   .. automethod:: _get_next_carryover_date
   .. automethod:: _has_expiring_days
   .. automethod:: _get_days_after_expiration
   .. automethod:: _get_lvls_boundaries
   .. automethod:: _get_next_lvl_start
   .. automethod:: _get_current_accrual_plan_levels
   .. automethod:: _get_current_accrual_plan_level_idx
   .. automethod:: _get_current_accrual_plan_level_idx_for_accrual
   .. automethod:: _get_additionnal_future_leaves_on
   .. automethod:: _get_init_accrual_plan_values
   .. automethod:: _onchange_process_accrual_plans

.. automodel:: odoo.addons.hr_holidays.models.hr_leave_accrual_plan.HrLeaveAccrualPlan()
   :main:

   .. autofield:: work_entry_type_id
   .. autofield:: level_ids
   .. autofield:: accrued_gain_time
   .. autofield:: transition_mode
   .. autofield:: is_based_on_worked_time
   .. autofield:: can_be_carryover
   .. autofield:: carryover_date
   .. autofield:: added_value_type

.. automodel:: odoo.addons.hr_holidays.models.hr_leave_accrual_plan_level.HrLeaveAccrualLevel()
   :main:

   .. autofield:: start_count
   .. autofield:: start_type
   .. autofield:: added_value
   .. autofield:: added_value_type
   .. autofield:: frequency
   .. autofield:: cap_accrued_time
   .. autofield:: maximum_leave
   .. autofield:: cap_accrued_time_yearly
   .. autofield:: maximum_leave_yearly
   .. autofield:: action_with_unused_accruals
   .. autofield:: carryover_options
   .. autofield:: max_carriedover_duration
   .. autofield:: accrual_validity

   .. automethod:: _get_hourly_frequencies
   .. automethod:: _get_next_date
   .. automethod:: _get_previous_date
   .. automethod:: _get_start_date
   .. automethod:: _get_level_transition_date

.. automodel:: odoo.addons.hr_holidays.models.hr_time_rule.HrTimeRule()

   .. autofield:: allocation_type_id
   .. autofield:: leave_compensation_rate

   .. automethod:: _apply_leave_output
   .. automethod:: _apply_allocation_credits
   .. automethod:: _filter_deficit_exceeding_allocation
   .. automethod:: _reverse_allocation_credits
   .. automethod:: _get_output_leave_vals
   .. automethod:: _get_output_leave_merge_key
   .. automethod:: _resolve_output_intervals

.. automodel:: odoo.addons.hr_holidays.models.hr_time_rule.HrTimeRuleSourceMixin()

   .. automethod:: _on_sources_collected

.. automodel:: odoo.addons.hr_holidays.models.hr_time_rule_allocation_log.HrTimeRuleAllocationLog()
   :main:

   .. autofield:: res_model
   .. autofield:: res_id
   .. autofield:: allocation_id
   .. autofield:: days

.. automodel:: odoo.addons.hr_holidays.models.resource_calendar.ResourceCalendar()

   .. autofield:: leave_accrual_plan_id
