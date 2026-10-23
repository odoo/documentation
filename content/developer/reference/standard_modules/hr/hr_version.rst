.. _reference/hr/hr_version:

======================
Versions and contracts
======================

.. py:currentmodule:: odoo.addons.hr.models

Employee data changes over time: a promotion changes the job and the wage, a move changes the
private address, a part-time arrangement changes the working schedule. Payroll, time off or
planning computations of last March must use the data of last March, not today's.

In `hr`, the data that can change over time lives on `hr.version` (*Employee Record* in the user
interface), not on `hr.employee`. An employee has one or several **versions**, each one effective
from a date (`date_version`). The **contract** is not a separate model either: it is carried by
the contract dates of the versions. There is no `hr.contract` model.

This page is the one to read first: almost every HR, payroll or time computation depends on it.

.. _reference/hr/hr_version/inherits:

How an employee delegates to its versions
-----------------------------------------

`hr.employee` delegates to `hr.version` with `_inherits = {'hr.version': 'version_id'}`. As with
any delegation inheritance, every field of `hr.version` that is not redefined on the employee is
available on the employee as an *inherited* field, i.e. a related field `version_id.<field>`:
`employee.wage` reads `employee.version_id.wage`, `employee.job_id` reads
`employee.version_id.job_id`, and so on.

The particularity is that `version_id` is **not stored**. It is computed by
:meth:`~hr_employee.HrEmployee._compute_version_id`:

- by default, it is the **current version** of the employee (`current_version_id`, stored);
- if the context key `version_id` holds the id of a version of the employee, it is that version.
  This is how the employee form displays and edits a past or future version
  (`hr.version.get_record_default_action` and `action_open_version` put the key in the context).
  Other employees of the recordset are not affected.

Consequences for code:

- **Reading** an inherited field returns the value of the current version (or of the version of
  the context).
- **Writing** an inherited field on the employee (`employee.write({'wage': 3600})`) writes it on
  that version, for its whole period. It does **not** create a new version. To change data from a
  given date on, create a version with :meth:`~hr_employee.HrEmployee.create_version`.
- **Creating** an employee creates its first version: the values of version fields
  (`date_version`, `contract_date_start`, `wage`, `job_id`, `resource_calendar_id`, ...) given to
  `hr.employee.create` go to that version.

.. example::

   .. code-block:: python

      from datetime import date

      employee = env['hr.employee'].create({
          'name': 'Jane Doe',
          'date_version': date(2026, 1, 1),
          'contract_date_start': date(2026, 1, 1),
          'wage': 3000,
          'resource_calendar_id': env.ref('resource.resource_calendar_std').id,
          'tz': 'Europe/Brussels',
      })
      v1 = employee.version_id
      len(employee.version_ids), v1 == employee.current_version_id  # (1, True)
      employee.wage, v1.wage  # (3000.0, 3000.0)

      # a raise from June 1st: a new version
      v2 = employee.create_version({'date_version': date(2026, 6, 1), 'wage': 3500})
      [(v.date_version, v.date_start, v.date_end, v.wage) for v in employee.version_ids]
      # [(date(2026, 1, 1), date(2026, 1, 1), date(2026, 5, 31), 3000.0),
      #  (date(2026, 6, 1), date(2026, 6, 1), False, 3500.0)]
      employee.current_version_id == v2, employee.wage  # (True, 3500.0)  (today: 2026-10-23)

      # read and write another version through the context
      employee.with_context(version_id=v1.id).wage  # 3000.0

      employee.write({'wage': 3600})  # writes the current version only
      v1.wage, v2.wage  # (3000.0, 3600.0)
      employee.with_context(version_id=v1.id).write({'wage': 3100})
      v1.wage, v2.wage  # (3100.0, 3600.0)

.. note::
   Some version fields are redefined on the employee with
   `related='version_id.<field>', inherited=True` (contract dates, `structure_type_id`, `tz`,
   `resource_calendar_id`, departure fields, ...), mainly because `resource.mixin` defines fields
   with the same names or because other attributes are needed. They behave as the automatically
   inherited fields.

.. _reference/hr/hr_version/fields:

Where fields live
-----------------

On `hr.version` (time-dependent)
   `date_version` (*Effective Date*, required), personal data that may change (`country_id`,
   `identification_id`, `passport_id`, `sex`, private address `private_*`, `marital`,
   `spouse_*`, `children`, `km_home_work`, ...), work data (`department_id`, `job_id`,
   `job_title`, `address_id`, `work_location_id`, `resource_calendar_id`, `tz`), contract data
   (`contract_date_start`, `contract_date_end`, `fixed_term`, `trial_date_end`,
   `contract_template_id`, `structure_type_id`, `wage`, `employee_type_id`,
   `hr_responsible_id`) and the departure (`departure_id` and its related fields).
   Applications add their own (e.g. `hr_payroll` adds the wage type, the schedule pay, ...;
   see :ref:`reference/payroll/hr_version`).

On `hr.employee` (not time-dependent)
   The identity and links of the person: `name`, `resource_id`, `user_id`, `work_contact_id`,
   `company_id`, `active`, work and private contact data (`work_email`, `work_phone`,
   `mobile_phone`, `private_email`, `private_phone`), `birthday`, bank accounts, permits,
   `parent_id` (manager), `coach_id`, `category_ids`, `barcode`, `pin`, the weekly work
   locations, `hourly_cost`, `first_contract_date`, and the versions themselves
   (`version_ids`, `current_version_id`, `version_id`).

Contract templates are versions too: see :ref:`reference/hr/hr_version/templates`.

.. _reference/hr/hr_version/dates:

Version dates
-------------

A version has an effective date (`date_version`, stored) and an effective period
(`date_start` and `date_end`, computed by :meth:`~hr_version.HrVersion._compute_dates`, both
inclusive):

- `date_start` is `date_version`, or `contract_date_start` if it is later;
- `date_end` is the day before the next active version of the employee, capped by
  `contract_date_end`; it is `False` for the last version of an open-ended contract (or of an
  employee without contract).

`date_start` and `date_end` are not stored but can be used in domains. Versions are ordered by
`date_version`, so `employee.version_ids[0]` is the oldest active version (`version_ids` only
contains active versions), and an employee cannot have two active versions with the same
`date_version` (unique index). An employee always keeps at least one active version: archiving,
reassigning or deleting all of them is refused.

The flags `is_current`, `is_past` and `is_future` compare this period with today.

.. _reference/hr/hr_version/contracts:

Contracts
---------

A version is *in contract* when `contract_date_start` is set. A **contract** is the set of active
versions of an employee sharing the same `contract_date_start` (and `contract_date_end`). An
employee may have several successive contracts, but they cannot overlap
(`_check_dates`), and a contract end date requires a start date.

The timeline below is the one of the examples of this page: two versions in a first contract,
a gap in January 2027, then a second contract.

.. code-block:: text

   date_version  2026-01-01         2026-06-01                     2027-02-01
                 |                  |                              |
   versions      [v1: 3100 ........][v2: 3600 ....................]  [v3: 3600 .........>
   contracts     [contract 2026-01-01 -> 2026-12-31 ..............]  [contract 2027-02-01 -> open >
                                                      out of contract ^ (January 2027)

   v1: date_start 2026-01-01, date_end 2026-05-31
   v2: date_start 2026-06-01, date_end 2026-12-31 (capped by the contract end)
   v3: date_start 2027-02-01, date_end False (open-ended)

The contract dates are kept consistent by :meth:`~hr_version.HrVersion.write`: writing
`contract_date_start` or `contract_date_end` on a version of a contract writes them on **all**
the versions of that contract. Writing them on versions of different contracts at once raises a
`ValidationError`. Pass `sync_contract_dates=True` in the context to write the values as is,
without propagation.

.. example::

   Following the previous example:

   .. code-block:: python

      employee._get_contract_dates(date(2026, 3, 1))  # (date(2026, 1, 1), False)

      # end the contract: written on v2, propagated to v1
      v2.write({'contract_date_end': date(2026, 12, 31)})
      [(v.date_version, v.contract_date_end) for v in employee.version_ids]
      # [(date(2026, 1, 1), date(2026, 12, 31)), (date(2026, 6, 1), date(2026, 12, 31))]

      # start a new contract
      employee.check_no_existing_contract(date(2027, 2, 1))  # raises if already in contract
      v3 = employee.create_contract(date(2027, 2, 1))
      v3.date_version, v3.contract_date_start, v3.contract_date_end, v3.wage
      # (date(2027, 2, 1), date(2027, 2, 1), False, 3600.0)

      employee._get_all_contract_dates()
      # [(date(2026, 1, 1), date(2026, 12, 31)), (date(2027, 2, 1), False)]

.. _reference/hr/hr_version/in_contract:

Two meanings of "in contract"
-----------------------------

Two methods have the same name and different meanings:

:meth:`hr.employee._is_in_contract(date) <hr_employee.HrEmployee._is_in_contract>`
   Whether a **contract** of the employee covers the date, whatever the version in effect.

:meth:`hr.version._is_in_contract(date) <hr_version.HrVersion._is_in_contract>`
   Whether **this version** has a contract and is in effect on the date
   (`date_start <= date <= date_end`). An older version of a still running contract answers
   `False`. The computed field `is_in_contract` uses it with today's date, and
   `employee.is_in_contract` is the one of `version_id`.

.. code-block:: python

   # July 2026, in the first contract, v2 in effect
   employee._is_in_contract(date(2026, 7, 1))  # True
   v1._is_in_contract(date(2026, 7, 1))  # False: v1 ended on May 31
   v2._is_in_contract(date(2026, 7, 1))  # True

.. _reference/hr/hr_version/current:

The current version
-------------------

`current_version_id` (stored) is computed by
:meth:`~hr_employee.HrEmployee._compute_current_version_id`: it is the active version with the
latest `date_version` on or before today (in the user's timezone); if all versions are in the
future, the first one. :meth:`~hr_employee.HrEmployee._get_version` applies the same rule to any
date.

Two things to keep in mind:

- **Contract dates are ignored**: after the end of a contract, the current version is still the
  last version of that contract, out of contract. Check `_is_in_contract` when it matters.
- The value depends on today's date, which the ORM cannot track: a future version only becomes
  current when the daily cron *HR Employee: Update Current Version*
  (:meth:`~hr_employee.HrEmployee._cron_update_current_version_id`) runs.

The `resource.resource` of the employee mirrors the calendar and timezone of the current
version: see :ref:`reference/hr/hr_employee/resource`.

.. _reference/hr/hr_version/api:

Working with versions
---------------------

The methods to use, all on `hr.employee` unless stated otherwise:

:meth:`~hr_employee.HrEmployee.create_version`
   Creates a version effective from `values['date_version']` (mandatory): a copy of the version
   in effect on that date, on which `values` are written. The contract dates default to those
   of the contract running on that date. **If a version already exists on that exact date, it is
   returned unchanged**: `values` are not written.

:meth:`~hr_employee.HrEmployee.create_contract`
   Starts a contract on a date and returns the version carrying it (an existing version on that
   date, or a new one created with `create_version`). The contract ends the day before the next
   future contract, or is open-ended. Call
   :meth:`~hr_employee.HrEmployee.check_no_existing_contract` before, as the user interface does.

:meth:`~hr_employee.HrEmployee._get_version`
   The version in effect on a date (today by default), ignoring contracts.

:meth:`~hr_employee.HrEmployee._get_contract_dates`
   The `(start, end)` of the contract covering a date, `(False, False)` if none.

:meth:`~hr_employee.HrEmployee._get_all_contract_dates`
   The `(start, end)` of all the contracts of the employee.

:meth:`~hr_employee.HrEmployee._get_contract_versions`
   Batch: the versions of the contracts overlapping a period,
   `{employee_id: {contract_date_start: hr.version}}`. **On an empty recordset, it returns the
   versions of all employees.**

:meth:`~hr_employee.HrEmployee._get_contracts`
   Batch: one version per contract overlapping a period, `{employee_id: hr.version}`; the one in
   effect at the end of the period (`use_latest_version=True`, default) or at its start.

:meth:`~hr_employee.HrEmployee._get_versions_with_contract_overlap_with_period`
   Batch: the versions in contract **and in effect** at least one day of the period. This is the
   method behind the contract-aware calendar methods. Its model-level variant
   :meth:`~hr_employee.HrEmployee._get_all_versions_with_contract_overlap_with_period` searches
   all the accessible employees.

:meth:`~hr_employee.HrEmployee._get_first_contract_version_at`
   `{employee_id: version}` for the employees in contract on a date.

:meth:`~hr_employee.HrEmployee._get_version_periods`
   Batch: splits a period into the periods covered by each version,
   `{employee record: [(date_from, date_to, value), ...]}`, where `value` is the version, a field
   value or a tuple of field values. `check_contract=True` drops the periods out of contract.

`first_contract_date` (stored) is the start of the last uninterrupted block of contracts: a gap
with working days between two contracts resets it (see
:meth:`~hr_employee.HrEmployee._get_first_contract_date`).

.. example::

   With the employee of the timeline above:

   .. code-block:: python

      {d: versions.mapped('date_version')
       for d, versions in employee._get_contract_versions()[employee.id].items()}
      # {date(2026, 1, 1): [date(2026, 1, 1), date(2026, 6, 1)],
      #  date(2027, 2, 1): [date(2027, 2, 1)]}
      contracts = employee._get_contracts(date(2026, 1, 1), date(2027, 12, 31))
      contracts[employee.id].mapped('date_version')
      # [date(2026, 6, 1), date(2027, 2, 1)]

      employee._get_version_periods(date(2025, 12, 1), date(2027, 3, 31), 'wage')
      # {hr.employee(...): [(date(2026, 1, 1), date(2026, 5, 31), 3100.0),
      #                     (date(2026, 6, 1), date(2026, 12, 31), 3600.0),
      #                     (date(2027, 2, 1), date(2027, 3, 31), 3600.0)]}
      employee._get_versions_with_contract_overlap_with_period(
          date(2026, 7, 1), date(2026, 7, 31)).mapped('date_version')  # [date(2026, 6, 1)]

      employee.first_contract_date  # date(2027, 2, 1): January 2027 has working days

      # create_version on an existing date returns the existing version unchanged
      employee.create_version({'date_version': date(2026, 6, 1), 'wage': 9999}) == v2  # True
      v2.wage  # 3600.0

Ending a contract is done by writing `contract_date_end` on one of its versions, or with a
departure (see :ref:`reference/hr/hr_employee/departure`).

.. _reference/hr/hr_version/templates:

Contract templates
------------------

A **contract template** is an `hr.version` without `employee_id`, with a `name`. Selecting it
in `contract_template_id` copies the fields listed by
:meth:`~hr_version.HrVersion._get_whitelist_fields_from_template` (job, department, employee
type, structure type, wage, working schedule, HR responsible, ...) onto the version:

- `hr.version.create` fills the missing values from the `contract_template_id` given in the
  values;
- `create_version` applies the `contract_template_id` given in the values on the new version;
- in the employee form, an onchange applies it.

:meth:`~hr_version.HrVersion.get_values_from_contract_template` returns the values to copy.

.. example::

   .. code-block:: python

      job = env['hr.job'].create({'name': 'Developer'})
      template = env['hr.version'].create({
          'name': 'Developer (full time)',
          'job_id': job.id,
          'wage': 4000,
      })
      v4 = employee.create_version({
          'date_version': date(2027, 6, 1),
          'contract_template_id': template.id,
      })
      v4.job_id.name, v4.wage, v4.contract_date_start  # ('Developer', 4000.0, date(2027, 2, 1))

.. _reference/hr/hr_version/extending:

Adding a field
--------------

Data that changes over time
   Define the field on `hr.version`, with `groups` (see :ref:`reference/hr/hr_employee/public`)
   and `tracking=True` if relevant. Through `_inherits`, it is automatically available on
   `hr.employee` with the same `groups`: it can be put in the employee form view, and writing it
   from the employee writes the version displayed. Add it to
   :meth:`~hr_version.HrVersion._get_whitelist_fields_from_template` if contract templates should
   fill it.

   .. code-block:: python

      class HrVersion(models.Model):
          _inherit = 'hr.version'

          attendance_based = fields.Boolean(
              string="Attendance Based",
              groups="hr.group_hr_user",
              default=lambda self: self.env.company.sudo().attendance_based,
          )

          @api.model
          def _get_whitelist_fields_from_template(self):
              return super()._get_whitelist_fields_from_template() + ['attendance_based']

   Redeclare it on the employee only if it needs other attributes there (another group,
   `readonly=False` on a computed field, ...), and keep `inherited=True` so that the value given
   to `hr.employee.create` still goes into the version:

   .. code-block:: python

      class HrEmployee(models.Model):
          _inherit = 'hr.employee'

          attendance_based = fields.Boolean(
              related='version_id.attendance_based', inherited=True, readonly=False,
              groups="hr.group_hr_user",
          )

Data that does not change over time
   Define the field on `hr.employee`, with `groups="hr.group_hr_user"` (or stricter) unless it is
   also declared on `hr.employee.public`. See :ref:`reference/hr/hr_employee/public`.

Other hooks of `hr.version` meant to be overridden: `_get_contract_wage_field` (the field
holding the contractual wage, e.g. the hourly wage in `hr_payroll`), `_get_salary_costs_factor`
(wage to yearly cost) and `_is_continuous_with` (used by
:meth:`~hr_version.HrVersion._get_field_block_start_date`, e.g. to compute a seniority in a
salary scale).

.. _reference/hr/hr_version/pitfalls:

Pitfalls
--------

- `employee.write({...})` on version fields modifies the version displayed (the current one by
  default) for its whole period, not "from today". Use `create_version`.
- `create_version` with an existing `date_version` returns the existing version and ignores the
  values.
- `employee._is_in_contract` (contract) and `version._is_in_contract` (version period) differ.
- `current_version_id` ignores contract dates and only moves to a future version when the daily
  cron runs.
- `_get_contract_versions` on an empty recordset returns all the employees' versions.
- The returned dictionaries are keyed by **employee record** for `_get_version_periods` and
  `_get_calendar_periods`, and by **employee id** for `_get_contracts`,
  `_get_contract_versions`, `_get_first_contract_version_at`, `_get_calendars`, ...
- Version helpers take `date` objects; the calendar methods take timezone-aware datetimes (see
  :ref:`reference/hr/hr_employee/time`).
- `version_ids` only contains active versions; use `with_context(active_test=False)` to see
  archived ones.

.. _reference/hr/hr_version/reference:

Reference
---------

.. automodel:: odoo.addons.hr.models.hr_version.HrVersion
   :main:

   .. autofield:: employee_id
   .. autofield:: date_version
   .. autofield:: date_start
   .. autofield:: date_end
   .. autofield:: contract_date_start
   .. autofield:: contract_date_end
   .. autofield:: contract_template_id
   .. autofield:: resource_calendar_id
   .. autofield:: tz
   .. autofield:: department_id
   .. autofield:: job_id
   .. autofield:: wage
   .. autofield:: structure_type_id
   .. autofield:: employee_type_id
   .. autofield:: is_in_contract
   .. autofield:: departure_id

   .. automethod:: create
   .. automethod:: write
   .. automethod:: _compute_dates
   .. automethod:: _is_in_contract
   .. automethod:: _is_overlapping_period
   .. automethod:: check_contract_finished
   .. automethod:: _get_current_versions_domain
   .. automethod:: _get_whitelist_fields_from_template
   .. automethod:: get_values_from_contract_template
   .. automethod:: get_record_default_action
   .. automethod:: _get_contract_wage
   .. automethod:: _get_contract_wage_field
   .. automethod:: _get_normalized_wage
   .. automethod:: _get_salary_costs_factor
   .. automethod:: _get_reference_calendar
   .. automethod:: _get_tz
   .. automethod:: _get_resources_per_tz
   .. automethod:: _get_field_block_start_date
   .. automethod:: _has_work_hours_between_versions
   .. automethod:: _is_continuous_with
