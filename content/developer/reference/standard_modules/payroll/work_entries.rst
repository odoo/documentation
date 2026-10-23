.. _reference/payroll/work_entries:

.. py:currentmodule:: odoo.addons.hr_work_entry.models

============
Work entries
============

A **work entry** tells how long an employee worked, or was absent, on a given day, and with which
**work entry type** (*Time Type* in the user interface): attendance, overtime, sick leave,
public holiday, etc. Payroll uses them to build the worked days of the payslips, which are the
base of the salary.

In 20.0, work entries are **not stored**: there is no `hr.work.entry` model anymore. They are
Python dicts computed on the fly from the employee's version (`hr.version`), its working
schedule, the leaves of the schedule and, when the corresponding modules are installed, the time
off (`hr.leave`) and attendances (`hr.attendance`) of the employee. Each payslip computation
generates them again, so there is nothing to regenerate, no conflicts to solve and no validated
state: changing a time off or an attendance is visible at the next refresh of the payslip.

The module `hr_work_entry` holds the work entry types, the generation and the **time rules**,
which reclassify attendances and time off (overtime, undertime). The other modules plug into it:

- `hr_holidays`: time off types *are* work entry types, validated time off produce leaves;
- `hr_attendance`: attendances are work entry sources for the time rules;
- `hr_holidays_attendance`: work entries generated from validated attendances;
- `hr_payroll` (Enterprise): worked days, and payroll fields on the types.

.. seealso::
   :ref:`reference/resource/resource_calendar` for the schedules, leaves and intervals the
   generation is built on, and :ref:`reference/payroll/hr_payslip/worked_days` for the
   conversion of work entries into worked days.

.. _reference/payroll/work_entries/types:

Work entry types
----------------

A `hr.work.entry.type` record classifies time. Its main fields drive the generation and the pay:

`code` (*Payroll Code*)
   The key used by everything downstream: worked days are grouped by code and salary rules read
   them with `worked_days['<code>']`. A code is unique per country, and a type without country
   conflicts with any type of the same code
   (:meth:`~hr_work_entry_type.HrWorkEntryType._check_code_unicity`).
   Localizations reuse the same codes for the same concepts, e.g. `002.00` for attendance,
   `006.00` for public holidays, `000.00` for out of contract.

`country_id`
   The localization of the type. Companies, schedule attendances and schedule leaves are offered
   the types of their country, or the types without country if the country has none. The
   generic types (`hr_work_entry/data/hr_work_entry_type_data.xml`, e.g.
   `hr_work_entry.generic_work_entry_type_attendance`) have no country.

`count_as`
   `working_time` or `absence`. During the generation, absence leaves replace the expected
   attendances while working time leaves (e.g. working from home) are worked time; the duration
   of an absence is computed from the schedule. A schedule attendance with an absence type is
   not working time.

`amount_rate`
   The paid rate: `1.0` is paid at 100%, `0` is unpaid, `1.5` is paid at 150%. A worked days line
   is paid if its rate is not zero, and its amount is multiplied by the rate.

`sequence`
   The display order, also the priority when an attendance and a working time leave overlap (the
   lowest sequence wins).

Since `hr.leave.type` was merged into `hr.work.entry.type`, `hr_holidays` adds its time off
fields to the same model: `request_unit` (`day`, `half_day` or `hour`), `requires_allocation`,
`time_off_selectable`, `include_public_holidays_in_duration`, etc. `hr.leave` points to its type
with `work_entry_type_id`. `hr_payroll` adds the payroll fields: `round_days_type` (rounding of
the days of the worked days), `category_ids` (salary rule categories credited with the amount of
the worked days, e.g. `BASIC`), `is_extra_hours` (type in the `EXTRA_HOURS` category) and the
reset mechanism shared with the salary rules (`modified_by_user`,
:meth:`~odoo.addons.hr_payroll.models.hr_work_entry_type.HrWorkEntryType.action_reset_rule`).
With `hr_payroll`, only the superuser can delete types; users archive them.

During the generation, the type of a work entry comes from:

- the schedule attendance (`resource.calendar.attendance.work_entry_type_id`), or else the
  default type of the version (:meth:`~hr_version.HrVersion._get_default_work_entry_type_id`:
  the `002.00` type of the company's country, or the generic attendance type; `hr_payroll`
  first takes the default type of the structure type);
- the attendance (`hr.attendance.work_entry_type_id`, by default the attendance type of the
  company);
- the leave (`resource.calendar.leaves.work_entry_type_id`, which is the time off type for the
  leaves created by time off). Global leaves default to the `006.00` type of the country.

.. _reference/payroll/work_entries/values:

Work entry values
-----------------

The generation returns a list of dicts. A **final** value holds:

`date`
   The day (`datetime.date`), in the timezone of the version.

`duration`
   The number of hours (`float`, never zero).

`work_entry_type_id`, `employee_id`, `version_id`, `company_id`
   **Records**, not ids: `vals['work_entry_type_id'].code`.

optional keys
   Added by extensions: `leave_ids` (`hr.leave`, `hr_holidays`), `attendance_ids`
   (`hr.attendance`, `hr_holidays_attendance`), `category_options_ids`
   (`hr.salary.rule.category`, premium pays, `hr_payroll`) and `trimmed_duration` (`hr_payroll`:
   the part of the duration coming from a time off split by a time rule, which payroll does not
   round to whole days).

There is at most one value per **merge key**
(:meth:`~hr_version.HrVersion._get_work_entry_merge_key`): date, type, employee, version
and company (and category options with `hr_payroll`). Merged values sum their durations and
unite the recordsets of :meth:`~hr_version.HrVersion._get_work_entry_source_fields`.

Internally, the generation first produces **raw** values, which hold a span instead of a day:
`date_start` and `date_stop` are naive UTC datetimes. A raw value may also directly give `date`
and `duration`, then it must not cross midnight.

.. example::

   An employee working 8:00-16:00 (Brussels) from Monday to Friday, with an unpaid time off on
   Monday and Tuesday:

   .. code-block:: python

      from datetime import date, datetime

      from odoo.fields import Command

      employee = env['hr.employee'].search([('name', '=', 'Ronnie Hart')])
      version = employee.version_id
      unpaid = env['hr.work.entry.type'].search([
          ('code', '=', '158.00'), ('country_id.code', '=', 'US'),
      ])
      leave = env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': unpaid.id,
          'request_date_from': date(2026, 11, 16),
          'request_date_to': date(2026, 11, 17),
      })
      leave.state  # 'validate': only validated time off produce work entries

      vals_list = version.generate_work_entries(date(2026, 11, 16), date(2026, 11, 20))
      vals_list[0]
      # {'work_entry_type_id': hr.work.entry.type(542,), 'employee_id': hr.employee(5,),
      #  'version_id': hr.version(5,), 'company_id': res.company(1,),
      #  'date': datetime.date(2026, 11, 18), 'duration': 8.0, 'trimmed_duration': 0.0}
      [(vals['date'].isoformat(), vals['work_entry_type_id'].code, vals['duration'])
       for vals in vals_list]
      # [('2026-11-18', '002.00', 8.0), ('2026-11-19', '002.00', 8.0),
      #  ('2026-11-20', '002.00', 8.0), ('2026-11-16', '158.00', 8.0),
      #  ('2026-11-17', '158.00', 8.0)]

      # raw values: spans in naive UTC
      version._get_work_entries_values(datetime(2026, 11, 16), datetime(2026, 11, 16, 23, 59))
      # [{'date_start': datetime.datetime(2026, 11, 16, 7, 0),
      #   'date_stop': datetime.datetime(2026, 11, 16, 15, 0),
      #   'work_entry_type_id': hr.work.entry.type(544,), 'employee_id': hr.employee(5,),
      #   'company_id': res.company(1,), 'version_id': hr.version(5,),
      #   'leave_ids': hr.leave(...)}]

.. _reference/payroll/work_entries/generation:

Generating work entries
-----------------------

:meth:`~hr_version.HrVersion.generate_work_entries` is the entry point. It takes two **dates**
(first and last day, included; datetimes raise an `AssertionError`) and returns the final values
of the versions of `self`. `hr.employee.generate_work_entries()` is a shortcut selecting the
versions of the employees with contract days in the period; on an **empty** recordset, it
processes all the employees.

The generation goes through these steps:

#. :meth:`~hr_version.HrVersion.generate_work_entries` turns the days into naive UTC datetimes
   (midnight to midnight in the timezone of each version), and processes the versions by company
   and timezone, **as superuser** and in the company of the versions.
#. :meth:`~hr_version.HrVersion._generate_work_entries` clips the period to the validity of each
   version (`hr.version.date_start` and `date_end`: a version is valid until the next version
   of the employee, and within the contract dates). Several versions in a period each produce
   their own values.
#. :meth:`~hr_version.HrVersion._get_work_entries_values` and
   :meth:`~hr_version.HrVersion._get_version_work_entries_values` compute the raw values (see
   below).
#. :meth:`~hr_version.HrVersion._generate_work_entries_postprocess` splits the spans at each
   local midnight, sets `date` and `duration`, calls
   :meth:`~hr_version.HrVersion._enrich_work_entry_val`, drops the zero durations and merges the
   values. The duration is the real duration of the span, or the hours planned by the schedule
   in the span when
   :meth:`~hr_version.HrVersion._generate_work_entries_postprocess_adapt_to_calendar` returns
   `True` (absences, and time off types not requested by hour), so that a full day of time off
   counts as the hours of a working day.

.. example::

   A span from 21:00 to 3:00 (Brussels) gives one value per day:

   .. code-block:: python

      work = env['hr.work.entry.type'].search([
          ('code', '=', '002.00'), ('country_id.code', '=', 'US'),
      ])
      vals_list = version._generate_work_entries_postprocess([{
          'date_start': datetime(2026, 11, 2, 20, 0),  # naive UTC: 21:00 in Brussels
          'date_stop': datetime(2026, 11, 3, 2, 0),    # 03:00 in Brussels
          'work_entry_type_id': work,
          'employee_id': employee,
          'version_id': version,
          'company_id': employee.company_id,
      }])
      [(vals['date'].isoformat(), vals['duration']) for vals in vals_list]
      # [('2026-11-02', 3.0), ('2026-11-03', 3.0)]

.. _reference/payroll/work_entries/generation/raw:

Computing the raw values
------------------------

:meth:`~hr_version.HrVersion._get_version_work_entries_values` combines three sets of intervals
(see :ref:`reference/resource/intervals`) for each version:

**Expected attendances**
   :meth:`~hr_version.HrVersion._get_attendance_intervals`: the attendance intervals of the
   schedule of the versions with :meth:`~hr_version.HrVersion.has_static_work_entries`, leaves
   not deducted. A fully flexible schedule gives one interval over the whole period, hence 24
   hours of work per day.

**Leaves**
   :meth:`~hr_version.HrVersion._get_resource_calendar_leaves` returns the
   `resource.calendar.leaves` of the period: global leaves of the company and the schedule, and
   leaves of the employee (:meth:`~hr_version.HrVersion._get_leave_domain`). They are split on
   the `count_as` **stored on the leave** into absences and worked leaves. The absences are
   intersected with the schedule: a time off on a day off produces nothing.

**Real attendances**
   The expected attendances minus all leaves (:meth:`~hr_version.HrVersion._get_real_attendances`).

Attendance intervals become values typed by
:meth:`~hr_version.HrVersion._get_interval_work_entry_type`; leave intervals are typed by
:meth:`~hr_version.HrVersion._get_interval_leave_work_entry_type`.
When a time off and a public holiday overlap, the public holiday wins, unless the time off type
code is in :meth:`~hr_version.HrVersion._get_bypassing_work_entry_type_codes` (e.g. `l10n_be`
lets some leaves win over public holidays).

.. _reference/payroll/work_entries/generation/attendance:

Static and attendance-based versions
------------------------------------

Without `hr_holidays_attendance`, work entries always come from the schedule. With it:

- validated attendances (`state = 'validated'`, with a check out) produce values, with their own
  type and their real duration (break deducted). An attendance and a working time time off that
  overlap are resolved by the type sequence;
- for a **static** version, the schedule still produces values, except on the days with a real
  attendance, where the attendances replace the schedule;
- for an **attendance-based** version (`hr.version.attendance_based`, defaulted from the
  company), :meth:`~hr_version.HrVersion.has_static_work_entries` returns `False`: the schedule
  produces nothing and only attendances and time off count.

Absences are cut where the employee actually worked. When attendances must be validated depends
on the company setting `attendance_validation`.

.. _reference/payroll/work_entries/payroll:

How payroll uses the values
---------------------------

`hr.payslip` generates the values of its version (and of the other versions of the same
contract starting in the period) from the day before to the day after its period, then filters
them on `date`. `hr_payroll` adds
:meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion.get_work_hours`, which sums the
durations of the values of a period by type and category options. The payslip turns these hours
into worked days, see :ref:`reference/payroll/hr_payslip/worked_days`.

.. code-block:: python

   work_hours = version.get_work_hours(
       date(2026, 11, 1), date(2026, 11, 30),
       version.generate_work_entries(date(2026, 11, 1), date(2026, 11, 30)),
   )
   {
       (wet.code, tuple(options.mapped('code'))): hours
       for (wet, options), hours in work_hours.items()
   }
   # {('002.00', ()): 128.0, ('158.00', ()): 16.0, ('013.00', ()): 24.0}

.. _reference/payroll/work_entries/time_rules:

Time rules
----------

Time rules (`hr.time.rule`) classify the time beyond, or missing from, a threshold: overtime,
night work, undertime, etc. Unlike work entries, they work on **stored records**, the sources:
`hr.attendance` and `hr.leave`. When a source is created or changed, the applicable rules run and
reclassify it in place (its `work_entry_type_id`, `time_rule_id` and span) and/or create output
records of the same model, linked to the source. The generation of work entries just reads these
records. Both mechanisms are independent: rules do not run during the generation.

A rule reads as: *when the time of the types* `condition_work_entry_type_ids`, *within the timing
window, exceeds* (or *is less than*) *the expected hours of the period, the excess* (or the missing
time) *gets the type* `work_entry_type_id`.

Applicability
   `company_id`, `country_id` and `employee_domain` (a domain on `hr.employee`).

Threshold
   `threshold_operator` (`exceed` for overtime, `less_than` for undertime) and
   `working_hours_mode`: `schedule_day` / `schedule_week` compare with the schedule of the
   employee or a reference schedule (`calendar_source`, `resource_calendar_id`), `day` / `week`
   compare with `expected_hours`. `quantity_period` (`day` or `week`) and `week_start` follow.
   `employer_tolerance` / `employee_tolerance` are the hours of excess / deficit ignored.

Timing window
   `apply_monday` to `apply_sunday`, `apply_on_public_holidays`, and `timing_start` /
   `timing_stop` (hours of the day, e.g. 22 to 24 for night work).

Output
   `work_entry_type_id` (*Set Excess to*), `amount_rate` (computed from the output type). Without
   output type, the rule only annotates the source. With `hr_holidays`,
   `leave_compensation_rate` and `allocation_type_id` credit the excess to (or deduct the deficit
   from) a time off allocation.

Rules run in `sequence` order and **compose**: once a rule has reclassified a part of the time,
the next rules see the new type. For instance, with a first rule giving the type *Overtime 200%*
to the attendance time beyond 9 hours per day, and a second rule giving *Overtime 150%* to the
attendance time beyond 8 hours, a 10-hour day gives 8 hours of attendance, 1 hour at 150% and 1
hour at 200%.

.. example::

   A daily overtime rule on a schedule of 8:00-16:00, and an attendance from 9:00 to 19:00:

   .. code-block:: python

      overtime = env['hr.work.entry.type'].search([('code', '=', 'USOVERTIME150')])
      rule = env['hr.time.rule'].create({
          'name': 'Daily overtime',
          'company_id': employee.company_id.id,
          'threshold_operator': 'exceed',
          'working_hours_mode': 'schedule_day',
          'condition_work_entry_type_ids': [Command.set(work.ids)],
          'work_entry_type_id': overtime.id,
          'sequence': 1,
      })
      rule.quantity_period, rule.calendar_source, rule.amount_rate  # ('day', 'employee', 1.5)

      attendance = env['hr.attendance'].create({
          'employee_id': employee.id,
          'check_in': datetime(2026, 10, 13, 7, 0),   # 9:00 in Brussels (summer time)
          'check_out': datetime(2026, 10, 13, 17, 0),  # 19:00 in Brussels
      })
      attendance.check_out, attendance.work_entry_type_id.code
      # (datetime.datetime(2026, 10, 13, 15, 0), '002.00'): the source is shortened to 8 hours
      output = attendance.overtime_attendance_ids
      output.check_in, output.check_out, output.work_entry_type_id.code, output.time_rule_id.name
      # (datetime.datetime(2026, 10, 13, 15, 0), datetime.datetime(2026, 10, 13, 17, 0),
      #  'USOVERTIME150', 'Daily overtime')

      [(vals['work_entry_type_id'].code, vals['duration'])
       for vals in version.generate_work_entries(date(2026, 10, 13), date(2026, 10, 13))]
      # [('002.00', 8.0), ('USOVERTIME150', 2.0)]

.. _reference/payroll/work_entries/time_rules/triggers:

When rules run
--------------

- On `create` and `write` of a source (employee, span, type, state, ...), unless the context has
  `skip_time_rules`. Only the rules that can already be decided run: the daily `exceed` rules
  always, the daily `less_than` rules if the record ended (in the employee's timezone) before
  today, the weekly `exceed` rules if it ended before the current week.
- Daily undertime rules run by cron on the previous day
  (:meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._cron_process_day_undertime_rules`),
  weekly rules on the past week
  (:meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._cron_process_week_time_rules`).
  Weekly undertime is only computed by the cron.
- With `hr_holidays_attendance`, creating or changing a public holiday re-runs the rules on the
  attendances of the affected employees.

Rules are evaluated by :meth:`~hr_time_rule.HrTimeRule._evaluate_rules`, which works in naive
local time (timezone of the employee) and writes nothing, then applied by the source model
(:meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._apply_record_output`, based on
:meth:`~hr_time_rule.HrTimeRule._apply_output`). Re-evaluating a source is idempotent: previous
outputs are taken into account and previous allocation credits are reversed.

.. _reference/payroll/work_entries/time_rules/sources:

Time rule sources
-----------------

`hr.time.rule.source.mixin` makes a model a source of the rules. `hr.attendance` (span
`check_in` / `check_out`, outputs `overtime_attendance_ids`, valid when validated) and `hr.leave`
(span `date_from` / `date_to`, outputs `output_leave_ids`, valid when approved; absences are
clipped to the schedule) inherit it. A new source model must:

- have `employee_id`, `work_entry_type_id` and `time_rule_id` fields;
- set `_time_rule_source_field` (many2one from an output to its source),
  `_time_rule_output_field` (the inverse one2many), `_time_rule_span_start_field` and
  `_time_rule_span_end_field`;
- implement :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._apply_record_output`,
  :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._get_time_rule_deficit_occupied`,
  :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._get_time_rule_output_vals` and
  :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._get_time_rule_remainder_vals`;
  usually also
  :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._get_source_extra_fields_domain`
  (e.g. only validated records) and
  :meth:`~hr_time_rule_source_mixin.HrTimeRuleSourceMixin._get_write_source_extra_source_fields`.

.. _reference/payroll/work_entries/pitfalls:

Pitfalls
--------

- Values hold records, not ids, and are not meant to be created anywhere: there is no model to
  create them in.
- `hr.version.generate_work_entries()` only accepts dates; the private methods take naive UTC
  datetimes and run with the current user, not as superuser.
- `date` is the local day of the version timezone and spans are split at local midnight: a night
  shift gives two values.
- With a fully flexible schedule, every day counts as 24 hours of work; with a flexible schedule,
  every day (weekends included) counts as the average hours per day of the schedule.
- The `count_as` used to classify a leave is the one stored on `resource.calendar.leaves`, copied
  from the time off type when the time off is validated.
- Overriding :meth:`~hr_version.HrVersion.has_static_work_entries` to return `False` also
  requires overriding :meth:`~hr_version.HrVersion._get_attendance_intervals`, which must still
  return a key for every resource.
- Time rules match the **records** of `condition_work_entry_type_ids`: a rule on the generic
  attendance type does not apply to a company whose country has its own `002.00` type.
- A daily undertime is only detected on days with at least one source record: a day without any
  attendance gives no deficit.

.. _reference/payroll/work_entries/extending:

Extending
---------

New localized types
   Data records of `hr.work.entry.type` with a `country_id` and a unique `code`, plus their payroll
   fields and the salary rules reading `worked_days['<code>']`. See
   :ref:`reference/payroll/localization`.

Default worked type
   :meth:`~hr_version.HrVersion._get_default_work_entry_type_id` returns its id.

Extra keys in the values
   :meth:`~hr_version.HrVersion._get_more_vals_attendance_interval` and
   :meth:`~hr_version.HrVersion._get_more_vals_leave_interval` return a list of `(key, value)`
   pairs. Add recordset keys to :meth:`~hr_version.HrVersion._get_work_entry_source_fields` so
   that merging unites them, or to :meth:`~hr_version.HrVersion._get_work_entry_merge_key` to
   keep values apart.

Leave types
   :meth:`~hr_version.HrVersion._get_leave_work_entry_type_dates` (type depending on the
   period), :meth:`~hr_version.HrVersion._get_bypassing_work_entry_type_codes` and
   :meth:`~hr_version.HrVersion._get_interval_leave_work_entry_type` (priority against public
   holidays).

Leave selection
   :meth:`~hr_version.HrVersion._get_resource_calendar_leaves`,
   :meth:`~hr_version.HrVersion._get_sub_leave_domain` and
   :meth:`~hr_version.HrVersion._get_valid_leave_intervals`.

Interval arithmetic
   :meth:`~hr_version.HrVersion._get_real_attendances`,
   :meth:`~hr_version.HrVersion._get_real_leaves_static`,
   :meth:`~hr_version.HrVersion._get_real_leaves_static_attendance` and
   :meth:`~hr_version.HrVersion._get_real_worked_leaves` return `Intervals`.

Adding or replacing values
   Override :meth:`~hr_version.HrVersion._get_version_work_entries_values`, call `super()` and
   add or change raw values (e.g. `hr_holidays_attendance` adds the attendances).

Durations
   :meth:`~hr_version.HrVersion._generate_work_entries_postprocess_adapt_to_calendar` (schedule
   or real duration) and :meth:`~hr_version.HrVersion._enrich_work_entry_val` (modify a final
   value in place before merging).

Time rules
   `hr.time.rule._get_pp_frozenset` and `_get_source_annotation_vals` attach premium pay
   categories to the reclassified time (`hr_payroll`), and the source mixin hooks described above
   add source models.

On the payroll side, see :ref:`reference/payroll/hr_payslip/extending`.

.. _reference/payroll/work_entries/reference:

Reference
---------

.. automodel:: odoo.addons.hr_work_entry.models.hr_work_entry_type.HrWorkEntryType()
   :main:

   .. autofield:: code
   .. autofield:: country_id
   .. autofield:: count_as
   .. autofield:: amount_rate
   .. autofield:: sequence
   .. autofield:: external_code
   .. autofield:: resource_calendar_selectable

   .. automethod:: _check_code_unicity

.. automodel:: odoo.addons.hr_payroll.models.hr_work_entry_type.HrWorkEntryType()

   .. autofield:: round_days_type
   .. autofield:: category_ids
   .. autofield:: optional_category_ids
   .. autofield:: is_extra_hours

   .. automethod:: action_reset_rule
   .. automethod:: _get_critical_fields
   .. automethod:: _get_data_files_to_update
   .. automethod:: _update_payroll_related_fields

.. automodel:: odoo.addons.hr_work_entry.models.hr_version.HrVersion()

   .. automethod:: generate_work_entries
   .. automethod:: _generate_work_entries
   .. automethod:: _get_work_entries_values
   .. automethod:: _get_version_work_entries_values
   .. automethod:: _generate_work_entries_postprocess
   .. automethod:: _generate_work_entries_postprocess_adapt_to_calendar
   .. automethod:: _enrich_work_entry_val
   .. automethod:: _get_work_entry_merge_key
   .. automethod:: _get_work_entry_source_fields
   .. automethod:: has_static_work_entries
   .. automethod:: _get_attendance_intervals
   .. automethod:: _get_real_attendance_work_entry_vals
   .. automethod:: _get_real_attendances
   .. automethod:: _get_real_leaves_static
   .. automethod:: _get_real_leaves_static_attendance
   .. automethod:: _get_real_worked_leaves
   .. automethod:: _get_default_work_entry_type_id
   .. automethod:: _get_interval_work_entry_type
   .. automethod:: _get_leave_work_entry_type
   .. automethod:: _get_leave_work_entry_type_dates
   .. automethod:: _get_interval_leave_work_entry_type
   .. automethod:: _get_bypassing_work_entry_type_codes
   .. automethod:: _get_more_vals_attendance_interval
   .. automethod:: _get_more_vals_leave_interval
   .. automethod:: _get_leave_domain
   .. automethod:: _get_sub_leave_domain
   .. automethod:: _get_resource_calendar_leaves
   .. automethod:: _get_valid_leave_intervals
   .. automethod:: _get_no_wet_or_wet_match

.. automodel:: odoo.addons.hr_work_entry.models.hr_time_rule.HrTimeRule()
   :main:

   .. autofield:: sequence
   .. autofield:: employee_domain
   .. autofield:: threshold_operator
   .. autofield:: working_hours_mode
   .. autofield:: calendar_source
   .. autofield:: resource_calendar_id
   .. autofield:: expected_hours
   .. autofield:: quantity_period
   .. autofield:: week_start
   .. autofield:: timing_start
   .. autofield:: timing_stop
   .. autofield:: employer_tolerance
   .. autofield:: employee_tolerance
   .. autofield:: condition_work_entry_type_ids
   .. autofield:: work_entry_type_id
   .. autofield:: amount_rate

   .. automethod:: _evaluate_rules
   .. automethod:: _evaluate_period
   .. automethod:: _apply_output
   .. automethod:: _resolve_output_intervals
   .. automethod:: _get_applicable_employees
   .. automethod:: _get_schedule_calendar
   .. automethod:: _get_work_intervals
   .. automethod:: _build_work_intervals_by_calendar
   .. automethod:: _build_rule_day_intervals
   .. automethod:: _build_hour_window_intervals
   .. automethod:: _dates_to_day_intervals
   .. automethod:: _get_pp_frozenset
   .. automethod:: _get_source_annotation_vals

.. automodel:: odoo.addons.hr_work_entry.models.hr_time_rule_source_mixin.HrTimeRuleSourceMixin()
   :main:

   .. automethod:: _trigger_time_rules
   .. automethod:: _trigger_time_rules_for_affected
   .. automethod:: _process_time_rules_for
   .. automethod:: _collect_time_rule_outputs
   .. automethod:: _cron_process_day_undertime_rules
   .. automethod:: _cron_process_week_time_rules
   .. automethod:: _get_source_records_for_time_rules
   .. automethod:: _on_sources_collected
   .. automethod:: _apply_record_output
   .. automethod:: _get_pipeline_intervals_local
   .. automethod:: _get_source_extra_fields_domain
   .. automethod:: _get_write_source_extra_source_fields
   .. automethod:: _get_time_rule_break_hours
   .. automethod:: _get_time_rule_end_write_vals
   .. automethod:: _get_time_rule_deficit_occupied
   .. automethod:: _get_time_rule_deficit_already_covered
   .. automethod:: _get_time_rule_output_vals
   .. automethod:: _get_time_rule_remainder_vals
