.. _reference/hr/hr_attendance:

.. py:currentmodule:: odoo.addons.hr_attendance.models

===========
Attendances
===========

An **attendance** (`hr.attendance`, module `hr_attendance`) is a period during which an employee
was present: a check in, and a check out once the employee leaves. Attendances are recorded
from a kiosk (badge or employee selection), from the systray of the backend, or manually. They
feed three other mechanisms:

- the **time rules** (`hr.time.rule`) of `hr_work_entry`, which reclassify the time beyond or
  missing from a threshold (overtime, undertime) on the attendances themselves;
- the **work entries**, which payroll turns into worked days: with `hr_holidays_attendance`,
  validated attendances produce work entries, and *attendance-based* versions are paid on
  attendances only;
- the **time off allocations**, credited with the overtime (`hr_holidays_attendance`).

In 20.0 there is no overtime model anymore (`hr.attendance.overtime` and the overtime rulesets
were removed): overtime is time rule output stored as attendances.

.. seealso::
   - :ref:`reference/payroll/work_entries`, for the time rule engine and the generation of work
     entries, which this page does not repeat;
   - :ref:`reference/hr/hr_employee` and :ref:`reference/hr/hr_version` for the employee and its
     versions;
   - :ref:`reference/resource/resource_calendar` for the schedules giving the expected hours.

.. _reference/hr/hr_attendance/model:

The attendance model
--------------------

`employee_id`, `check_in` and `check_out`
   The span, as naive UTC datetimes. An attendance without `check_out` is **open**: the
   employee is checked in.

`date`
   The local day of `check_in` in the employee's timezone (stored, indexed).

`worked_hours`
   `check_out - check_in` in hours minus `break_duration` (an unpaid break in hours, only
   allowed on closed attendances). The schedule is not used: a lunch break planned in the
   schedule is not deducted.

`work_entry_type_id` (*Time Type*)
   The type of the time, read by the time rules and the work entries. It defaults to the
   attendance type of the company (`res.company.attendance_work_entry_type_id`: the `002.00`
   type of the company's country, else the generic attendance type).

`state`
   `draft`, `validated` or `refused`, see :ref:`reference/hr/hr_attendance/validation`.

`in_mode` / `out_mode`
   How the employee checked in and out: `kiosk`, `systray`, `manual` (default, also used for
   records created in code), `technical` (absence detection) and, for the check out only,
   `auto_check_out`. `in_*` / `out_*` fields store the location, IP address, browser and GPS
   coordinates when the company enables `attendance_device_tracking`, and `in_image` the
   check-in picture (`attendance_capture_check_in`).

`time_rule_id`, `source_attendance_id`, `overtime_attendance_ids`, `source_stale`
   The time rule fields, see :ref:`reference/hr/hr_attendance/time_rules`.

Three constraints protect the data:
:meth:`~hr_attendance.HrAttendance._check_validity_check_in_check_out` (`check_out` after
`check_in`), :meth:`~hr_attendance.HrAttendance._check_break_duration` and
:meth:`~hr_attendance.HrAttendance._check_validity`: an employee has **at most one open
attendance and no overlapping attendances**. Attendances cannot be duplicated.

On `hr.employee`, `hr_attendance` adds `attendance_ids`, `last_attendance_id` (the last
attendance that started before now), `last_check_in`, `last_check_out`, `attendance_state`
(`checked_in` when the last attendance is open), `attendance_manager_id` (the *Attendance
Approver*, made attendance officer automatically) and the hour counters described in
:ref:`reference/hr/hr_attendance/hours`.

.. example::

   .. code-block:: python

      from datetime import date, datetime

      from odoo.exceptions import ValidationError

      employee = env['hr.employee'].create({
          'name': 'Ann Example',
          'tz': 'Europe/Brussels',
          'date_version': date(2026, 1, 1),
          'contract_date_start': date(2026, 1, 1),
      })
      attendance = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 5, 6, 0),    # 8:00 in Brussels
          'check_out': datetime(2026, 10, 5, 15, 30),  # 17:30 in Brussels
          'break_duration': 0.5,
      })
      (attendance.date, attendance.worked_hours, attendance.in_mode, attendance.state,
       attendance.work_entry_type_id.code)
      # (datetime.date(2026, 10, 5), 9.0, 'manual', 'validated', '002.00')

      try:
          with env.cr.savepoint():
              env['hr.attendance'].create({
                  'employee_id': employee.id,
                  'check_in': datetime(2026, 10, 5, 14, 0),
                  'check_out': datetime(2026, 10, 5, 16, 0),
              })
      except ValidationError as e:
          print(e)
      # Cannot create new attendance record for Ann Example, the employee was already checked in
      # on 10/05/2026 04:00:00 PM

   The constraints are checked when the records are flushed, after `create` returned: without
   the savepoint, the overlapping record would stay in the transaction.

   The next examples are independent of each other; they only assume the records of this first
   example (`employee`, and `company = employee.company_id`), plus the `overtime` type once
   defined.

.. _reference/hr/hr_attendance/check_in_out:

Checking in and out
-------------------

:meth:`~hr_employee.HrEmployee._attendance_action_change` is the single entry point of the
kiosk and the systray. Called on one employee, it checks the employee in (creates an
attendance starting now) or out (sets `check_out` on the open attendance), then sends the new
presence state on the bus. Its arguments are:

`geo_information`
   A dict written on the attendance with the `in_` prefix at check in and the `out_` prefix at
   check out: `mode`, and with device tracking `location`, `latitude`, `longitude`,
   `ip_address` and `browser`.

`check_in_image_data`
   `{'image': bytes, 'type': mimetype}`, stored in `in_image` and posted on the attendance.

It returns `False`, or a warning notification (`{'type': 'warning', 'message': ...}`) when the
company requires a check-in picture that was not given. It raises a `UserError` if there is
nothing to check out.

When the company enables `single_check_in` (only possible with the automatic check out), an
employee with a non flexible schedule cannot check out: the call does nothing, and raises a
`UserError` from the systray (context `is_from_systray_check_in_out`). The automatic check out
then closes the attendance.

.. example::

   .. code-block:: python

      employee.attendance_state  # 'checked_out'
      employee._attendance_action_change({'mode': 'kiosk', 'location': 'Brussels office'})
      # False
      attendance = employee.last_attendance_id
      (employee.attendance_state, attendance.in_mode, attendance.in_location,
       attendance.check_out)
      # ('checked_in', 'kiosk', 'Brussels office', False)

      employee._attendance_action_change({'mode': 'kiosk'})  # False
      employee.attendance_state, attendance.out_mode, bool(attendance.check_out)
      # ('checked_out', 'kiosk', True)

The HTTP layer is in `hr_attendance/controllers/main.py` (class `HrAttendance`):

Kiosk
   `/hr_attendance/<token>` renders the public kiosk of the company whose
   `attendance_kiosk_key` is `token` (`attendance_kiosk_url`; regenerating the key with
   :meth:`~res_company.ResCompany._regenerate_attendance_kiosk_key` invalidates the URL). Opening
   it logs out a user with a password. `res.company.attendance_kiosk_mode` selects how employees
   identify: `barcode` (badge or RFID: `/hr_attendance/attendance_barcode_scanned`, matching
   `hr.employee.barcode`), `manual` (selection in a list: `/hr_attendance/manual_selection`,
   checking `hr.employee.pin` when `attendance_kiosk_use_pin` is set) or both. These routes are
   `auth='public'`: the token is the only credential, and most of them work as superuser on
   the employees of the token's company.

Systray
   `/hr_attendance/systray_check_in_out` checks in or out the current user's employee (mode
   `systray`), if the company enables `attendance_from_systray`.

Breaks
   With `attendance_break_management`, `/hr_attendance/update_break_duration` sets the break of
   the last attendance after the check out, as long as it is not validated.

The static helpers of the controller build the responses and are the place to add data:
`_get_user_attendance_data` (state and hours of the employee, plus the company settings),
`_get_employee_info_response` (what the kiosk displays), `_get_geoip_response` (the
`geo_information` above) and `_get_validated_check_in_image_and_type` (decodes and checks the
picture: JPEG or WebP data URI, at most 20 KB decoded).

.. _reference/hr/hr_attendance/hours:

Worked and overtime hours
-------------------------

`worked_hours` is the only stored duration. The employee counters are computed on the fly:

- `hours_today`, `hours_previously_today` and `last_attendance_worked_hours`: the time worked
  today (employee's timezone) until now, the breaks being prorated
  (:meth:`~hr_attendance.HrAttendance._get_break_duration_within_period`);
- `hours_last_month` and `hours_last_month_overtime`: despite their names, the **current**
  month; the first sums the attendances that are not time rule outputs, the second those that
  are;
- `total_overtime`: the hours of the validated attendances produced or reclassified by a time
  rule (`time_rule_id` set), whatever their type and date.

:meth:`~hr_employee.HrEmployee.get_attendance_data_by_employee` returns, for a period, the
hours of the attendances overlapping it (full `worked_hours`, not clipped to the period), per
employee, with the overtime and one entry per type:
`{employee_id: {'worked_hours', 'overtime_hours', 'entries': [{'name', 'worked_hours',
'color'}]}}` (see the example in :ref:`reference/hr/hr_attendance/time_rules`).

The **expected** hours come from the schedule:
:meth:`~odoo.addons.hr.models.hr_employee.HrEmployee._get_expected_attendances` (see
:ref:`reference/hr/hr_employee/time`). The validation tolerance and the automatic check out use
it; the time rules compute their own schedule intervals.

.. _reference/hr/hr_attendance/validation:

Validation
----------

Only **validated** attendances count: they are the only time rule sources
(:meth:`~hr_attendance.HrAttendance._get_source_extra_fields_domain`), and the only attendances
producing work entries or accruing time off. The initial state is set at creation by
:meth:`~hr_attendance.HrAttendance.create`, according to `res.company.attendance_validation`:

`no_validation` (default)
   Attendances are created `validated`.

`manual_validation`
   Attendances are created `draft`; an officer validates
   (:meth:`~hr_attendance.HrAttendance.action_validate`) or refuses
   (:meth:`~hr_attendance.HrAttendance.action_refuse`) them.

`tolerance_validation`
   Closed draft attendances are validated automatically when their duration (break included)
   differs from the expected hours of the day by at most `attendance_validation_tolerance`
   hours, or when no hours are expected that day
   (:meth:`~hr_attendance.HrAttendance._update_tolerance_state`, called at creation and when
   `check_out` is written); the time rules then run on them. The others stay `draft`.

Time rule outputs (`time_rule_id` or `source_attendance_id` given) are always created
`validated`. Passing `state` in the values bypasses the policy.

.. example::

   .. code-block:: python

      company = employee.company_id
      company.write({
          'attendance_validation': 'tolerance_validation',
          'attendance_validation_tolerance': 0.5,
      })
      attendances = env['hr.attendance'].create([{
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 6, 6, 0),    # 8h15 for 8 expected hours
          'check_out': datetime(2026, 10, 6, 14, 15),
      }, {
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 7, 6, 0),    # 10 hours
          'check_out': datetime(2026, 10, 7, 16, 0),
      }])
      attendances.mapped('state')  # ['validated', 'draft']
      attendances[1].action_validate()
      attendances[1].state  # 'validated'

.. _reference/hr/hr_attendance/time_rules:

Time rules on attendances
-------------------------

`hr.attendance` inherits `hr.time.rule.source.mixin`: creating a validated attendance, or
changing the employee, span, type, state or break of one, runs the time rules (see
:ref:`reference/payroll/work_entries/time_rules` and
:ref:`reference/payroll/work_entries/time_rules/triggers`). By default, a rule created in an
attendance context matches the attendance type of the company
(`condition_work_entry_type_ids`).

The rules write their result on the attendances themselves:

- when the excess starts with the attendance, the attendance is **reclassified in place**: it
  gets the output type and `time_rule_id`, and ends where the excess ends;
- otherwise the attendance is **cut** at the start of the excess, and the excess becomes a new
  **output attendance**: same employee, the rule's type, `time_rule_id` set,
  `source_attendance_id` pointing to the source (inverse: `overtime_attendance_ids`), always
  validated;
- an undertime (`less_than`) rule creates output attendances for the missing hours, in the free
  slots of the period (:meth:`~hr_attendance.HrAttendance._get_time_rule_deficit_occupied`).

The span of an output is real time: the source and its outputs together cover the original
check in to check out. Output attendances are regular attendances: they appear in the views,
count in `worked_hours` and in the work entries with their own type.

Changing the span, employee, type or break of a source sets `source_stale` on the outputs that
existed before (:meth:`~hr_attendance.HrAttendance.write`, and on deletion of the source); the
rules run again on the source but do not delete the old outputs. A user reviews them, deletes
them or clears the flag (:meth:`~hr_attendance.HrAttendance.action_mark_reviewed`).

.. example::

   A daily overtime rule on the default 8-hour schedule (8:00-16:00):

   .. code-block:: python

      overtime = env['hr.work.entry.type'].search([('code', '=', 'USOVERTIME150')])
      rule = env['hr.time.rule'].create({
          'name': 'Daily overtime',
          'company_id': employee.company_id.id,
          'work_entry_type_id': overtime.id,
      })
      rule.condition_work_entry_type_ids == employee.company_id.attendance_work_entry_type_id
      # True

      attendance = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 5, 6, 0),    # Monday 8:00 in Brussels
          'check_out': datetime(2026, 10, 5, 16, 0),  # 18:00 in Brussels
      })
      attendance.check_out, attendance.worked_hours, attendance.work_entry_type_id.code
      # (datetime.datetime(2026, 10, 5, 14, 0), 8.0, '002.00'): cut at 16:00
      output = attendance.overtime_attendance_ids
      (output.check_in, output.check_out, output.work_entry_type_id.code,
       output.time_rule_id.name, output.state)
      # (datetime.datetime(2026, 10, 5, 14, 0), datetime.datetime(2026, 10, 5, 16, 0),
      #  'USOVERTIME150', 'Daily overtime', 'validated')
      employee.total_overtime  # 2.0
      employee.get_attendance_data_by_employee(datetime(2026, 10, 5), datetime(2026, 10, 6))
      # {38: {'worked_hours': 10.0, 'overtime_hours': 2.0,
      #       'entries': [{'name': 'Work', 'worked_hours': 8.0, 'color': 0},
      #                   {'name': 'Overtime (1.5x)', 'worked_hours': 2.0, 'color': 4}]}}

      # no schedule on Saturday: the whole attendance is overtime, reclassified in place
      saturday = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 10, 7, 0),
          'check_out': datetime(2026, 10, 10, 10, 0),
      })
      saturday.work_entry_type_id.code, saturday.time_rule_id.name, saturday.overtime_attendance_ids
      # ('USOVERTIME150', 'Daily overtime', hr.attendance())

      # shortening the source flags its output
      attendance.check_out = datetime(2026, 10, 5, 13, 0)
      attendance.worked_hours, output.source_stale  # (7.0, True)
      output.unlink()
      attendance.check_out = datetime(2026, 10, 5, 16, 0)  # evaluated again: new output
      attendance.check_out, attendance.overtime_attendance_ids.check_in
      # (datetime.datetime(2026, 10, 5, 14, 0), datetime.datetime(2026, 10, 5, 14, 0))

The attendance implementation of the source hooks is small: outputs are built by
:meth:`~hr_time_rule.HrTimeRule._get_output_attendance_vals` (override it to add fields to
outputs, as `hr_payroll_attendance` does), the result is applied by
:meth:`~hr_time_rule.HrTimeRule._apply_attendance_output`, and
:meth:`~hr_time_rule.HrTimeRule._get_applicable_employees` skips the employees without
schedule for the rules based on the employee schedule.

.. _reference/hr/hr_attendance/work_entries:

Attendance-based work entries
-----------------------------

With `hr_holidays_attendance` installed, the validated, closed attendances produce work
entries with their own type and their real duration (break deducted); each value carries its
attendances in `attendance_ids`. Two behaviors exist, chosen per version by
`hr.version.attendance_based` (*Attendance Based*, defaulted from
`res.company.attendance_based` and copied from contract templates):

static version (`attendance_based = False`)
   The schedule still produces work entries, except on the days with an attendance, where the
   attendances replace it.

attendance-based version
   :meth:`~odoo.addons.hr_holidays_attendance.models.hr_version.HrVersion.has_static_work_entries`
   returns `False`: the schedule produces nothing, only attendances and time off count.

In both cases absences are cut where the employee actually worked, and an attendance
overlapping a working time leave is resolved by the type sequence. The generation itself is
described in :ref:`reference/payroll/work_entries/generation/attendance`.

.. example::

   With the daily overtime rule above, 10 hours on Monday, 4 hours on Tuesday and nothing on
   Wednesday:

   .. code-block:: python

      env['hr.attendance'].create([{
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 5, 6, 0),    # Monday 8:00-18:00
          'check_out': datetime(2026, 10, 5, 16, 0),
      }, {
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 6, 7, 0),    # Tuesday 9:00-13:00
          'check_out': datetime(2026, 10, 6, 11, 0),
      }])
      version = employee.version_id

      def summary(vals_list):
          return sorted(
              (v['date'].isoformat(), v['work_entry_type_id'].code, v['duration'])
              for v in vals_list
          )

      version.attendance_based, version.has_static_work_entries()  # (False, True)
      summary(version.generate_work_entries(date(2026, 10, 5), date(2026, 10, 7)))
      # [('2026-10-05', '002.00', 8.0), ('2026-10-05', 'USOVERTIME150', 2.0),
      #  ('2026-10-06', '002.00', 4.0), ('2026-10-07', '002.00', 8.0)]

      version.attendance_based = True
      summary(version.generate_work_entries(date(2026, 10, 5), date(2026, 10, 7)))
      # [('2026-10-05', '002.00', 8.0), ('2026-10-05', 'USOVERTIME150', 2.0),
      #  ('2026-10-06', '002.00', 4.0)]

   On Wednesday, the static version is paid by its schedule; the attendance-based version is
   not. On Tuesday, both get the 4 hours worked, not the 8 hours of the schedule.

.. _reference/hr/hr_attendance/crons:

Scheduled actions
-----------------

*Attendance: Automatically check-out employees* (every 4 hours)
   :meth:`~hr_attendance.HrAttendance._cron_auto_check_out`, for the companies with
   `auto_check_out`. In `tolerance` mode
   (:meth:`~hr_attendance.HrAttendance._cron_auto_check_out_tolerance`), an open attendance is
   closed once the time worked on its day exceeds the expected hours plus
   `auto_check_out_tolerance`; the check out is set to the moment the limit was reached.
   Employees with a flexible schedule are skipped. In `specific_time` mode
   (:meth:`~hr_attendance.HrAttendance._cron_auto_check_out_specific_time`), open attendances
   are closed at `auto_check_out_specific_time` (local hour). The check out mode is
   `auto_check_out` and a message is posted.

*Attendance: Detect Absences for employees* (every 4 hours)
   :meth:`~hr_attendance.HrAttendance._cron_absence_detection`, for the companies with
   `absence_management`: for each employee in contract with a schedule and without attendance
   on the previous day, it creates a validated 1-second `technical` attendance at local
   midnight, so that the daily undertime rules see the day. Technical attendances that produce
   no output are deleted.

*Attendance: Process daily time rules* and *Attendance: Process weekly time rules* (daily)
   The crons of the source mixin, see :ref:`reference/payroll/work_entries/time_rules/triggers`.

.. example::

   .. code-block:: python

      company.write({
          'auto_check_out': True,
          'auto_check_out_mode': 'tolerance',
          'auto_check_out_tolerance': 2,
      })
      attendance = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 22, 6, 0),  # yesterday, 8:00 in Brussels
      })
      env['hr.attendance']._cron_auto_check_out()
      attendance.check_out, attendance.out_mode, attendance.worked_hours
      # (datetime.datetime(2026, 10, 22, 16, 0), 'auto_check_out', 10.0): 8 hours + 2

      # absence detection with a daily undertime rule
      unpaid = env['hr.work.entry.type'].search([
          ('code', '=', '158.00'), ('country_id.code', '=', 'US'),
      ])
      env['hr.time.rule'].create({
          'name': 'Daily undertime',
          'company_id': company.id,
          'threshold_operator': 'less_than',
          'work_entry_type_id': unpaid.id,
      })
      company.absence_management = True
      bob = env['hr.employee'].create({
          'name': 'Bob Example',
          'tz': 'UTC',
          'date_version': date(2026, 1, 1),
          'contract_date_start': date(2026, 1, 1),
      })
      env['hr.attendance']._cron_absence_detection()
      env['hr.attendance'].search([('employee_id', '=', bob.id)]).mapped(lambda a: (
          a.check_in, a.check_out, a.in_mode, a.work_entry_type_id.code, a.time_rule_id.name))
      # [(datetime.datetime(2026, 10, 22, 8, 0, 1), datetime.datetime(2026, 10, 22, 16, 0),
      #   'manual', '158.00', 'Daily undertime'),
      #  (datetime.datetime(2026, 10, 22, 0, 0), datetime.datetime(2026, 10, 22, 0, 0, 1),
      #   'technical', '002.00', False)]

.. _reference/hr/hr_attendance/holidays:

Overtime and time off: hr_holidays_attendance
---------------------------------------------

The bridge module `hr_holidays_attendance` (auto-installed with `hr_attendance` and
`hr_holidays`) adds, besides the work entries described above:

Compensatory allocations
   A rule with `leave_compensation_rate` (*Allocate %*) and `allocation_type_id` (a type
   requiring an allocation) credits `hours * rate / hours_per_day` days to an open-ended
   (`date_to = False`) validated allocation of the employee, created if needed; an undertime
   rule deducts them. Undertime that would overdraw the allocation is dropped entirely (no
   output, no deduction). Each credit is logged in `hr.time.rule.allocation.log` on the
   attendance that holds the time: the reclassified source, or the output attendance.

Reversal
   Deleting that attendance, changing its span or employee, or setting a validated attendance
   back to `draft` or `refused` reverses its logged credits (refusing a source also refuses its
   outputs)
   (:meth:`~odoo.addons.hr_holidays_attendance.models.hr_attendance.HrAttendance.write`);
   re-running the rules credits the new values. A reversal that would bring the allocation
   below what was already taken raises a `ValidationError`.

Public holidays
   Creating, changing or deleting a public holiday (`resource.calendar.leaves` without
   resource) re-runs the rules on the attendances of the affected employees
   (:meth:`~odoo.addons.hr_holidays_attendance.models.resource_calendar_leaves.ResourceCalendarLeaves._retrigger_time_rules`):
   a public holiday has no expected hours, so the time worked on it becomes excess.

Accrual on worked hours
   Accrual plan levels get the frequency *Per Hour Worked* (`worked_hours`): the accrued amount
   is prorated on the hours of the validated attendances of the period
   (:meth:`~odoo.addons.hr_holidays_attendance.models.hr_leave_allocation.HrLeaveAllocation._get_accrual_plan_level_work_entry_prorata`).
   It cannot be combined with an accrual at the start of the period.

The company attendance type (`attendance_work_entry_type_id`) is restricted to types that do
not require an allocation.

.. example::

   .. code-block:: python

      compensatory = env['hr.work.entry.type'].search([
          ('code', '=', 'LEAVE105'), ('country_id', '=', False),
      ])
      compensatory.name, compensatory.requires_allocation  # ('Compensatory Time Off', True)
      env['hr.time.rule'].create({
          'name': 'Daily overtime',
          'company_id': employee.company_id.id,
          'work_entry_type_id': overtime.id,
          'leave_compensation_rate': 1.0,  # 100% of the excess
          'allocation_type_id': compensatory.id,
      })
      attendance = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 5, 6, 0),    # 10 hours: 2 hours of overtime
          'check_out': datetime(2026, 10, 5, 16, 0),
      })
      allocation = env['hr.leave.allocation'].search([('employee_id', '=', employee.id)])
      (allocation.work_entry_type_id.name, allocation.number_of_days, allocation.state,
       allocation.date_to)
      # ('Compensatory Time Off', 0.25, 'validate', False): 2 hours / 8 hours per day
      output = attendance.overtime_attendance_ids
      env['hr.time.rule.allocation.log'].search([('allocation_id', '=', allocation.id)]).mapped(
          lambda log: (log.res_model, log.res_id == output.id, log.days))
      # [('hr.attendance', True, 0.25)]
      output.unlink()
      allocation.number_of_days  # 0.0

      env['resource.calendar.leaves'].create({
          'name': 'Public holiday',
          'company_id': employee.company_id.id,
          'date_from': datetime(2026, 10, 6, 22, 0),  # Wednesday in Brussels
          'date_to': datetime(2026, 10, 7, 21, 59, 59),
      })
      worked = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 7, 6, 0),
          'check_out': datetime(2026, 10, 7, 14, 0),
      })
      worked.work_entry_type_id.code, worked.time_rule_id.name, allocation.number_of_days
      # ('USOVERTIME150', 'Daily overtime', 1.0)

.. _reference/hr/hr_attendance/extending:

Extending
---------

Check in and out
   Override :meth:`~hr_employee.HrEmployee._attendance_action_change` (one employee, returns a
   notification or `False`). Extra values for the attendance are best passed through
   `geo_information` keys matching `in_<key>` / `out_<key>` fields. Add data to the kiosk and
   systray responses in the controller helpers `_get_user_attendance_data` and
   `_get_employee_info_response` (static methods: override them in a subclass of the
   controller and call `super(SubClass, SubClass)`).

Validation
   :meth:`~hr_attendance.HrAttendance._update_tolerance_state` implements the tolerance
   policy; :meth:`~hr_attendance.HrAttendance._get_source_extra_fields_domain` decides which
   attendances the rules see.

Time rule outputs
   :meth:`~hr_time_rule.HrTimeRule._get_output_attendance_vals` for the values of output
   attendances, :meth:`~hr_time_rule.HrTimeRule._apply_attendance_output` for side effects
   after the rules (keep returning the result of `super()`), and
   :meth:`~hr_attendance.HrAttendance._get_write_source_extra_source_fields` to re-run the rules
   when another field changes.

Work entries
   The `hr.version` hooks of :ref:`reference/payroll/work_entries/extending`;
   `hr_holidays_attendance` overrides
   :meth:`~odoo.addons.hr_holidays_attendance.models.hr_version.HrVersion._get_version_work_entries_values`
   and passes its intervals to the other hooks through the context.

.. _reference/hr/hr_attendance/pitfalls:

Pitfalls
--------

- `check_in` and `check_out` are naive UTC; `date` and every "day" (tolerance, automatic check
  out, hours today) are in the employee's timezone.
- `_check_validity` is skipped when the context has `skip_time_rules`, which the rule engine,
  the refusal and the automatic check out use. Code passing that
  context must keep the attendances consistent itself.
- A source reclassified or cut by a rule cannot be extended over its outputs: the overlap
  constraint fails. Delete the outputs first.
- Outputs are not deleted when their source changes, only flagged `source_stale`; code reading
  attendances (reports, payroll) must decide what to do with stale outputs.
- Only validated attendances are rule sources and produce work entries: with
  `manual_validation`, nothing happens until an officer validates.
- The time rules produce nothing for the days before `contract_date_start`.
- `hours_last_month*` cover the current month, and `total_overtime` all the validated time
  rule outputs ever, whatever their type (an undertime output counts too).
- Kiosk routes are public and run as superuser: protect the kiosk URL like a password, and
  check the company of every record received from the client in custom routes.

.. _reference/hr/hr_attendance/reference:

Reference
---------

.. automodel:: odoo.addons.hr_attendance.models.hr_attendance.HrAttendance()
   :main:

   .. autofield:: employee_id
   .. autofield:: check_in
   .. autofield:: check_out
   .. autofield:: date
   .. autofield:: worked_hours
   .. autofield:: break_duration
   .. autofield:: work_entry_type_id
   .. autofield:: state
   .. autofield:: in_mode
   .. autofield:: out_mode
   .. autofield:: time_rule_id
   .. autofield:: source_attendance_id
   .. autofield:: overtime_attendance_ids
   .. autofield:: source_stale

   .. automethod:: create
   .. automethod:: write
   .. automethod:: action_validate
   .. automethod:: action_refuse
   .. automethod:: action_reset_to_draft
   .. automethod:: action_mark_reviewed
   .. automethod:: _check_validity
   .. automethod:: _check_validity_check_in_check_out
   .. automethod:: _check_break_duration
   .. automethod:: _compute_worked_hours
   .. automethod:: _update_tolerance_state
   .. automethod:: _get_localized_times
   .. automethod:: _get_break_duration_within_period
   .. automethod:: _cron_auto_check_out
   .. automethod:: _cron_auto_check_out_tolerance
   .. automethod:: _cron_auto_check_out_specific_time
   .. automethod:: _cron_absence_detection
   .. automethod:: _apply_record_output
   .. automethod:: _get_time_rule_deficit_occupied
   .. automethod:: _get_time_rule_output_vals
   .. automethod:: _get_time_rule_remainder_vals
   .. automethod:: _get_source_extra_fields_domain
   .. automethod:: _get_time_rule_break_hours
   .. automethod:: _get_write_source_extra_source_fields
   .. automethod:: get_kiosk_url
   .. automethod:: get_unusual_days

.. automodel:: odoo.addons.hr_attendance.models.hr_employee.HrEmployee()

   .. autofield:: attendance_manager_id
   .. autofield:: attendance_ids
   .. autofield:: last_attendance_id
   .. autofield:: attendance_state
   .. autofield:: hours_today
   .. autofield:: hours_last_month
   .. autofield:: hours_last_month_overtime
   .. autofield:: total_overtime
   .. autofield:: attendance_based

   .. automethod:: _attendance_action_change
   .. automethod:: _has_attendance_check_in_ability
   .. automethod:: get_attendance_data_by_employee
   .. automethod:: _compute_hours_today
   .. automethod:: _compute_hours_last_month
   .. automethod:: _compute_presence_state
   .. automethod:: _notify_employee_presence_status
   .. automethod:: action_archive

.. automodel:: odoo.addons.hr_attendance.models.hr_version.HrVersion()

   .. autofield:: attendance_based

.. automodel:: odoo.addons.hr_attendance.models.hr_time_rule.HrTimeRule()

   .. automethod:: _get_applicable_employees
   .. automethod:: _get_output_attendance_vals
   .. automethod:: _apply_attendance_output

.. automodel:: odoo.addons.hr_attendance.models.res_company.ResCompany()

   .. autofield:: attendance_kiosk_mode
   .. autofield:: attendance_kiosk_key
   .. autofield:: attendance_kiosk_use_pin
   .. autofield:: attendance_from_systray
   .. autofield:: auto_check_out
   .. autofield:: auto_check_out_mode
   .. autofield:: auto_check_out_tolerance
   .. autofield:: auto_check_out_specific_time
   .. autofield:: single_check_in
   .. autofield:: absence_management
   .. autofield:: attendance_validation
   .. autofield:: attendance_validation_tolerance
   .. autofield:: attendance_work_entry_type_id
   .. autofield:: attendance_based

   .. automethod:: _regenerate_attendance_kiosk_key

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_attendance.HrAttendance()

   .. automethod:: write
   .. automethod:: _reverse_credits_on_unlink

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_version.HrVersion()

   .. automethod:: has_static_work_entries
   .. automethod:: _get_attendance_intervals
   .. automethod:: _get_version_work_entries_values
   .. automethod:: _get_real_attendances
   .. automethod:: _get_valid_leave_intervals
   .. automethod:: _generate_work_entries_postprocess_adapt_to_calendar
   .. automethod:: _get_more_vals_attendance_interval

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_time_rule.HrTimeRule()

   .. automethod:: _apply_attendance_output

.. automodel:: odoo.addons.hr_holidays_attendance.models.resource_calendar_leaves.ResourceCalendarLeaves()

   .. automethod:: _get_time_rule_affected
   .. automethod:: _retrigger_time_rules

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_leave_allocation.HrLeaveAllocation()

   .. automethod:: _get_accrual_plan_level_work_entry_prorata

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_leave_accrual_plan_level.HrLeaveAccrualLevel()

   .. autofield:: frequency

   .. automethod:: _check_worked_hours

.. automodel:: odoo.addons.hr_holidays_attendance.models.hr_employee.HrEmployee()

   .. automethod:: get_attendance_data_by_employee
