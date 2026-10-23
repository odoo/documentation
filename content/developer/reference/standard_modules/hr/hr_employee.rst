.. _reference/hr/hr_employee:

=========
Employees
=========

.. py:currentmodule:: odoo.addons.hr.models

An employee (`hr.employee`) is a person working for a company. A person working for two
companies has two employees. The model is the hub of the HR applications: time off, attendances,
payroll, appraisals, expenses, ... all point to it.

An employee is made of several records, each one with its own role:

- the employee itself, holding the data that does not change over time;
- its **versions** (`hr.version`), holding the data that changes over time, including the
  contract (see :ref:`reference/hr/hr_version`, to read first);
- a **resource** (`resource.resource`), through `resource.mixin`, which gives the employee a
  working schedule and a timezone for the time computations;
- a **work contact** (`res.partner`), used for the messaging and as the partner of the bank
  accounts;
- optionally a **user** (`res.users`).

.. _reference/hr/hr_employee/resource:

Resource, user and work contact
-------------------------------

Resource (`resource_id`, required)
   Created with the employee (:meth:`~hr_employee.HrEmployee._prepare_resource_values`). It
   carries `name`, `user_id` and `active`: these employee fields are related to the resource.
   `resource.employee_id` is the reverse link (a one2many holding at most one employee).

   The calendar and the timezone of an employee are on its versions. The resource's
   `calendar_id` and `tz` **mirror the current version**: they are computed from
   `employee_id.current_version_id`, so they follow any change of the current version or of its
   calendar and timezone. Writing the resource's calendar or timezone writes the current
   version.

User (`user_id`)
   A user has at most one employee per company (`unique(user_id, company_id)`). On the user side,
   `user.employee_id` is the employee **in the current company** (`env.company`),
   `user.employee_ids` the employees in the allowed companies (`env.companies`) and
   `user.all_employee_ids` the employees in all companies.

   Linking a user (:meth:`~hr_employee.HrEmployee._sync_user`) sets the user's partner as work
   contact and copies the user's image (if the employee has none) and timezone. Afterwards:

   - writing `name`, `email` (copied to `work_email`), `image_1920`, `tz` or the weekly work
     locations on the user writes them on its employees of the current company
     (:meth:`~res_users.ResUsers._get_employee_fields_to_sync`);
   - writing `tz` on the employee writes it on the user when both have the same company.

   A user can be created with an employee (`create_employee=True` in the values of
   `res.users.create`) or bound to an existing one (`create_employee_id`);
   :meth:`~res_users.ResUsers.action_create_employee` creates the employee of an existing user.
   :meth:`~hr_employee.HrEmployee._get_or_create_light_user` returns a user for an employee,
   creating an internal user with reduced rights if needed.

   Many employee fields are exposed on `res.users` (preferences form) with
   `related_employee_field()`: a user reads their own employee in sudo, and writes it in sudo
   for the fields declared with `user_writeable=True`.

Work contact (`work_contact_id`)
   Created if missing when the employee is created. `work_email` and `work_phone` are computed
   from it, and writing them on the employee writes the partner. The private address is not a
   partner: it is stored on the version (`private_street`, `private_city`, ...).
   `partner.employee_ids` lists the employees of a partner; such partners cannot be deleted.

.. example::

   .. code-block:: python

      user = env['res.users'].create({
          'name': 'John Smith',
          'login': 'john.smith@example.com',
          'email': 'john.smith@example.com',
          'tz': 'Europe/Brussels',
      })
      employee = env['hr.employee'].create({'name': 'John Smith', 'user_id': user.id})
      employee.work_contact_id == user.partner_id, employee.work_email, employee.tz
      # (True, 'john.smith@example.com', 'Europe/Brussels')
      employee.resource_id.user_id == user, user.employee_id == employee  # (True, True)

      user.write({'email': 'john@example.com'})
      employee.work_email  # 'john@example.com'
      employee.tz = 'Europe/Paris'
      user.tz, employee.resource_id.tz  # ('Europe/Paris', 'Europe/Paris')

      other = env['hr.employee'].create({'name': 'Ann Lee', 'work_email': 'ann@example.com'})
      other.work_contact_id.name, other.work_contact_id.email  # ('Ann Lee', 'ann@example.com')

.. _reference/hr/hr_employee/public:

Public employees and access rights
----------------------------------

Only HR officers (`hr.group_hr_user`) have access to `hr.employee` and `hr.version`. Yet every
internal user needs to see the name, job, department, manager or work phone of their colleagues
(e.g. in an avatar card, the organization chart, a many2one to an employee). This is what
`hr.employee.public` is for: a read-only SQL view (`_auto = False`) readable by every internal
user, exposing the non-sensitive data. Its ids are the employee ids, and its columns come from
the employee joined with its **current version**
(:meth:`~hr_employee_public.HrEmployeePublic.init`).
`employee_id` links a public employee to its employee.

To keep business code simple, `hr.employee` redirects the operations of users without access to
the public model: `search`, `fetch`, `get_views`, `get_formview_id`,
`get_record_default_action`, ... (see :meth:`~hr_employee.HrEmployee._search`,
:meth:`~hr_employee.HrEmployee.search_fetch` and :meth:`~hr_employee.HrEmployee.fetch`). Such a
user searching `hr.employee` gets an `hr.employee` recordset whose public values are filled from
`hr.employee.public`, including the public fields inherited from the version (`job_title`,
`department_id`, ...); reading a field that is not on the public model raises an
`AccessError`.

.. example::

   As a user who is not an HR officer:

   .. code-block:: python

      from odoo.exceptions import AccessError

      demo = env.ref('base.user_demo')
      employees = env['hr.employee'].with_user(demo).search([], limit=2)
      employees._name, employees.mapped('name'), employees[0].work_email
      # ('hr.employee', ['Abigail Peterson', 'Anita Oliver'], 'abigail.peterson39@example.com')
      try:
          employees[0].private_email
      except AccessError:
          pass  # not a public field

      public = env['hr.employee.public'].with_user(demo).browse(employees.ids)
      public.mapped('job_title'), public.mapped('department_id.name')
      # (['Consultant', 'Experienced Developer'],
      #  ['Professional Services', 'Research & Development'])

.. tip::
   Code running for regular users (portlets, avatar cards, controllers, ...) should read
   `hr.employee.public` explicitly rather than relying on the redirection, or use `sudo()` when
   reading private data is legitimate.

.. important::
   **Rule for adding a field to** `hr.employee` **(or** `hr.version` **)**: a field that is not on
   `hr.employee.public` must have `groups="hr.group_hr_user"` (or a stricter group). Otherwise,
   the prefetching of fields loads it for users without access to employees, and their reads
   fail. This is stated in the class docstring of `HrEmployee`.

To make a field public, declare it on `hr.employee.public` with the same name:

- a **stored** field becomes a column of the view automatically, read from the current version
  if it is a stored `hr.version` field, from the employee otherwise
  (:meth:`~hr_employee_public.HrEmployeePublic._get_fields`);
- otherwise, use `related='employee_id.<field>'` (computed in sudo) or a compute calling
  :meth:`~hr_employee_public.HrEmployeePublic._compute_from_employee`.

.. code-block:: python

   class HrEmployee(models.Model):
       _inherit = 'hr.employee'

       expense_manager_id = fields.Many2one('res.users', string='Expense Approver')


   class HrEmployeePublic(models.Model):
       _inherit = 'hr.employee.public'

       expense_manager_id = fields.Many2one('res.users', readonly=True)  # column of the view

Data that only managers should see on a public profile is declared by overriding
:meth:`~hr_employee_public.HrEmployeePublic._get_manager_only_fields`: such fields are filled
by :meth:`~hr_employee_public.HrEmployeePublic._compute_manager_only_fields` for the user's own
employee and the employees below it (`is_manager`), and are `False` otherwise.

Models with a many2many field to `hr.employee` should inherit `hr.mixin`
(see :ref:`reference/hr/hr_organization/mixin`), so that users without access to employees can
still write that field.

The access rights defined by `hr` are summarized in :ref:`reference/hr/access`.

.. _reference/hr/hr_employee/hierarchy:

Hierarchy
---------

`parent_id` is the manager, `child_ids` the direct (active) subordinates, and
`subordinate_ids` all the direct and indirect subordinates
(:meth:`~hr_employee.HrEmployee._get_subordinates`, safe against cycles). `coach_id` defaults to
the manager. Setting a new manager on a department (`hr.department.manager_id`) makes it the
manager of the department members who were managed by the previous one.

Archiving an employee empties the many2one fields pointing to it on other employees: `parent_id`
and `coach_id` by default, extended by overriding
:meth:`~hr_employee.HrEmployee._get_employee_m2o_to_empty_on_archived_employees` (fields to
`hr.employee`) or :meth:`~hr_employee.HrEmployee._get_user_m2o_to_empty_on_archived_employees`
(fields to `res.users`, e.g. the time off approver in `hr_holidays`).

.. code-block:: python

   boss = env['hr.employee'].create({'name': 'Boss'})
   sub = env['hr.employee'].create({'name': 'Sub', 'parent_id': boss.id})
   env['hr.employee'].create({'name': 'Sub of sub', 'parent_id': sub.id})
   sub.coach_id == boss, boss.child_ids.mapped('name'), boss.subordinate_ids.mapped('name')
   # (True, ['Sub'], ['Sub of sub', 'Sub'])

   boss.action_archive()
   sub.parent_id, sub.coach_id, boss.resource_id.active  # (hr.employee(), hr.employee(), False)

.. _reference/hr/hr_employee/time:

Working time and calendars
--------------------------

`hr.employee` inherits the time computations of `resource.mixin` (see
:ref:`reference/resource/resource_resource/mixin`), but its working schedule and timezone come
from its versions, so they change over time. `hr` adapts the resource methods in two ways:

- the calendar of an employee at a date is the one of the version **in contract** on that date;
- for an employee who has ever had a contract, the periods **out of contract** have no calendar,
  hence no work time.

Employees who never had a contract (and non-employee resources) keep the plain `resource`
behavior: their current calendar over the whole period.

The methods below take `date` objects or **timezone-aware** datetimes (see
:ref:`reference/resource/conventions`); they work in batch unless stated otherwise.

:meth:`~hr_employee.HrEmployee._get_calendars`
   `{employee_id: resource.calendar}`. With a date, the calendar of the version in contract on
   that date; employees out of contract keep the current calendar. Without date, the current
   calendar. :meth:`~hr_employee.HrEmployee._get_hours_per_week_batch` and
   :meth:`~hr_employee.HrEmployee._get_hours_per_day_batch` follow the same rule.

:meth:`~hr_employee.HrEmployee._get_calendar_periods`
   `{employee record: [(date_from, date_to, resource.calendar), ...]}`: the calendars in contract
   within a period, see :ref:`reference/hr/hr_version/api`.

:meth:`~hr_employee.HrEmployee._get_expected_attendances` (single employee)
   The work intervals of each version in contract during the period (calendar and timezone of
   each version), leaves counted as absence deducted.

:meth:`~hr_employee.HrEmployee._get_calendar_attendances` (single employee)
   `{'days': float, 'hours': float}`: the work time of each version in contract during the
   period, summed.

:meth:`~hr_employee.HrEmployee._get_unusual_days` (single employee)
   `{'YYYY-MM-DD': bool}`: the days to grey out in calendar widgets. Takes
   `'%Y-%m-%d %H:%M:%S'` strings. Days between contract periods are unusual.

:meth:`~hr_employee.HrEmployee._get_employee_unavailable_intervals`
   The unavailable intervals of each employee, version by version, for Gantt views.

:meth:`~hr_employee.HrEmployee._get_working_periods_by_field`
   The contract periods of the employees, keyed by a many2one of the employee (`resource_id`,
   `user_id`, ...), for the Gantt views of other models.

:meth:`~hr_employee.HrEmployee._get_tz` / :meth:`~hr_employee.HrEmployee._get_resources_per_tz`
   The timezone of the version in effect on a date (the current one by default), and the
   `{ZoneInfo: resource.resource}` grouping expected by the `resource.calendar` methods.

On the resource side, `hr` overrides
:meth:`~resource.ResourceResource._get_calendars_validity_within_period` (one entry per calendar
of the versions in contract, valid only while in contract) and
:meth:`~resource.ResourceResource._get_calendar_data_at`. Hence
`resource.resource._get_valid_work_intervals` (see
:ref:`reference/resource/resource_resource/validity`) is the method to use to get the work
intervals of employees whose calendar may change.

.. warning::
   Not every method splits the period per version:

   - the `resource.mixin` methods use **one** calendar per employee for the whole period:
     `_get_work_days_data_batch` uses the one of :meth:`~hr_employee.HrEmployee._get_calendars`
     at the start of the period (the current calendar if the employee is out of contract on
     that date), `_list_work_time_per_day` and `_get_leave_days_data_batch` use the current
     calendar (`resource_calendar_id`);
   - when **no** version is in contract during the period, `_get_expected_attendances` and
     `_get_calendar_attendances` use the current calendar for the whole period, and
     `_get_unusual_days` returns every day as not unusual.

.. example::

   An employee working full time, then three days a week from July, with a first contract ending
   on December 31 and a second one starting on February 1:

   .. code-block:: python

      from datetime import date, datetime
      from zoneinfo import ZoneInfo

      full_time = env.ref('resource.resource_calendar_std')
      part_time = full_time.copy({'name': 'Monday to Wednesday'})
      part_time.attendance_ids.filtered(lambda a: a.dayofweek in ('3', '4')).unlink()

      employee = env['hr.employee'].create({
          'name': 'Jane Doe',
          'date_version': date(2026, 1, 1),
          'contract_date_start': date(2026, 1, 1),
          'contract_date_end': date(2026, 12, 31),
          'resource_calendar_id': full_time.id,
          'tz': 'Europe/Brussels',
      })
      employee.create_version({
          'date_version': date(2026, 7, 1),
          'resource_calendar_id': part_time.id,
      })
      employee.create_contract(date(2027, 2, 1))

      employee._get_calendars(date(2026, 3, 1))[employee.id].name  # '40 hours/week'
      employee._get_hours_per_week_batch(date(2026, 8, 1))  # {employee.id: 24.0}
      [(start, stop, calendar.name) for start, stop, calendar
       in employee._get_calendar_periods(date(2026, 6, 1), date(2027, 3, 31))[employee]]
      # [(date(2026, 6, 1), date(2026, 6, 30), '40 hours/week'),
      #  (date(2026, 7, 1), date(2026, 12, 31), 'Monday to Wednesday'),
      #  (date(2027, 2, 1), date(2027, 3, 31), 'Monday to Wednesday')]

      # the week from Monday June 29 to Sunday July 5 spans both versions
      brussels = ZoneInfo('Europe/Brussels')
      start = datetime(2026, 6, 29, tzinfo=brussels)
      end = datetime(2026, 7, 5, 23, 59, tzinfo=brussels)
      employee._get_calendar_attendances(start, end)  # {'days': 3.0, 'hours': 24.0}
      [(a.strftime('%m-%d %H:%M'), b.strftime('%H:%M'))
       for a, b, _attendance in employee._get_expected_attendances(start, end)]
      # [('06-29 08:00', '16:00'), ('06-30 08:00', '16:00'), ('07-01 08:00', '16:00')]
      work_intervals, _calendar_intervals = employee.resource_id._get_valid_work_intervals(
          start, end)
      len(work_intervals[employee.resource_id.id])  # 3, the same intervals
      employee._get_work_days_data_batch(start, end)  # {employee.id: {'days': 5.0, 'hours': 40.0}}
      # (resource.mixin: the full-time calendar of June 29 for the whole week)

      employee._get_unusual_days('2026-12-30 00:00:00', '2027-01-04 00:00:00')
      # {'2026-12-30': False, '2026-12-31': True, '2027-01-01': True, '2027-01-02': True,
      #  '2027-01-03': True, '2027-01-04': True}
      # (December 31 is a Thursday, January is out of contract)

Presence
   `hr_presence_state` (`present`, `absent`, `out_of_working_hour`) and `hr_icon_display` are
   computed by :meth:`~hr_employee.HrEmployee._compute_presence_state` and
   :meth:`~hr_employee.HrEmployee._compute_presence_icon`. `hr` only implements the presence
   based on the user's login (company setting); `hr_attendance` and `hr_holidays` extend them.

.. _reference/hr/hr_employee/lifecycle:

Lifecycle
---------

Creation
   :meth:`~hr_employee.HrEmployee.create` creates, for each employee, the resource, the first
   version (values of version fields go to it, see :ref:`reference/hr/hr_version/inherits`),
   the work contact if missing and an avatar if there is no image. Employees are created per
   company, so that each version gets the company of its employee.

Changes over time
   New versions and contracts: see :ref:`reference/hr/hr_version/api`.

Archiving
   `active` is related to the resource. :meth:`~hr_employee.HrEmployee.action_archive` also
   empties the references of other employees (see :ref:`reference/hr/hr_employee/hierarchy`).

.. _reference/hr/hr_employee/departure:

Departure
---------

The end of a collaboration is an `hr.employee.departure` record
(:ref:`reference/hr/hr_organization/departure`), created by the *End of collaboration* wizard
(:meth:`~hr_employee.HrEmployee.action_new_departure`, which requires the employee to be in
contract today) or in code. It goes through two steps:

1. :meth:`~hr_employee_departure.HrEmployeeDeparture.create` links the departure to the versions
   of the contract in effect on the departure date (`departure_id`) and ends that contract on the
   departure date (`contract_date_end`). The previous end date is kept in
   `last_contract_date_end`.
2. :meth:`~hr_employee_departure.HrEmployeeDeparture.action_register` applies it: the versions
   starting after the departure date are deleted, the employee is archived, and so is its user if
   all the user's active employees are leaving; `apply_date` is set. The departures whose date
   is reached are applied by the daily cron *HR: Apply employee departures*
   (:meth:`~hr_employee_departure.HrEmployeeDeparture._cron_apply_departure`).

:meth:`~hr_employee.HrEmployee.action_cancel_departure` unarchives the employee, restores the
contract end date and deletes the departure; deleted versions are not restored.

.. example::

   .. code-block:: python

      from datetime import date

      leaver = env['hr.employee'].create({
          'name': 'Leaver',
          'date_version': date(2026, 1, 1),
          'contract_date_start': date(2026, 1, 1),
      })
      leaver.create_version({'date_version': date(2026, 11, 1), 'wage': 2000})
      departure = env['hr.employee.departure'].create({
          'employee_id': leaver.id,
          'departure_reason_id': env.ref('hr.departure_resigned').id,
          'dismissal_date': date(2026, 9, 30),
      })
      departure.departure_date  # date(2026, 9, 30): no notice period in hr
      [(v.date_version, v.contract_date_end) for v in leaver.version_ids]
      # [(date(2026, 1, 1), date(2026, 9, 30)), (date(2026, 11, 1), date(2026, 9, 30))]

      departure.action_register()
      leaver.active, leaver.with_context(active_test=False).version_ids.mapped('date_version')
      # (False, [date(2026, 1, 1)])

      leaver.action_cancel_departure()
      leaver.active, leaver.version_ids.mapped('contract_date_end')  # (True, [False])

Localizations hook into the departure with
:meth:`~hr_employee_departure.HrEmployeeDeparture._compute_departure_date` (notice period) and
:meth:`~hr_employee_departure.HrEmployeeDeparture._get_departures_to_archive`.

.. _reference/hr/hr_employee/multi_company:

Multi-company
-------------

- `company_id` is required on the employee; the company of its versions follows it. Record
  rules restrict employees to `company_id in company_ids + [False]` and versions to
  `company_id in company_ids`. `hr.employee.public` has no record rule in `hr`.
- One employee per user and company; `user.employee_id` depends on `env.company`.
- Moving an employee to another company is discouraged (the form shows a warning): create a new
  employee in the other company.
- The default salary structure type of a version is the one of its company's country (or one
  without country).

.. _reference/hr/hr_employee/extending:

Extension points
----------------

Besides the fields (see :ref:`reference/hr/hr_version/extending` and
:ref:`reference/hr/hr_employee/public`), the methods commonly overridden are:

- :meth:`~hr_employee.HrEmployee._get_employee_m2o_to_empty_on_archived_employees` and
  :meth:`~hr_employee.HrEmployee._get_user_m2o_to_empty_on_archived_employees`;
- :meth:`~hr_employee.HrEmployee._compute_presence_state` and
  :meth:`~hr_employee.HrEmployee._compute_presence_icon`;
- :meth:`~hr_employee.HrEmployee._get_new_hire_field` (field used for "newly hired");
- :meth:`~hr_employee.HrEmployee._get_splitting_legal_name_countries` (countries where the legal
  name is split into first and last names);
- :meth:`~hr_employee.HrEmployee._get_related_partners`;
- :meth:`~hr_employee.HrEmployee._adjust_leaves` (leaves of duration-based calendars, used by
  `hr_holidays`);
- :meth:`~hr_employee_public.HrEmployeePublic._get_manager_only_fields`;
- :meth:`~res_users.ResUsers._get_employee_fields_to_sync`.

.. _reference/hr/hr_employee/pitfalls:

Pitfalls
--------

- An employee field without `groups` must exist on `hr.employee.public`.
- The resource's calendar and timezone are those of the current version only; use the employee
  methods above for other dates.
- `_get_version_periods`/`_get_calendar_periods` are keyed by employee record, most other
  methods by employee id.
- `user.employee_id` is the employee of the current company; use `employee_ids` or
  `all_employee_ids` across companies.

.. _reference/hr/hr_employee/reference:

Reference
---------

.. automodel:: odoo.addons.hr.models.hr_employee.HrEmployee()
   :main:

   .. autofield:: name
   .. autofield:: version_id
   .. autofield:: current_version_id
   .. autofield:: version_ids
   .. autofield:: user_id
   .. autofield:: company_id
   .. autofield:: work_contact_id
   .. autofield:: work_email
   .. autofield:: resource_calendar_id
   .. autofield:: tz
   .. autofield:: contract_date_start
   .. autofield:: contract_date_end
   .. autofield:: first_contract_date
   .. autofield:: parent_id
   .. autofield:: coach_id
   .. autofield:: category_ids
   .. autofield:: hr_presence_state

   .. automethod:: create
   .. automethod:: write
   .. automethod:: action_archive
   .. automethod:: _compute_version_id
   .. automethod:: _compute_current_version_id
   .. automethod:: _cron_update_current_version_id
   .. automethod:: _get_version
   .. automethod:: create_version
   .. automethod:: create_contract
   .. automethod:: check_no_existing_contract
   .. automethod:: _is_in_contract
   .. automethod:: _get_contracts
   .. automethod:: _get_contract_versions
   .. automethod:: _get_all_contract_dates
   .. automethod:: _get_contract_dates
   .. automethod:: _get_versions_with_contract_overlap_with_period
   .. automethod:: _get_all_versions_with_contract_overlap_with_period
   .. automethod:: _get_first_contract_version_at
   .. automethod:: _get_version_periods
   .. automethod:: _get_first_contract_date
   .. automethod:: _get_last_consecutive_versions
   .. automethod:: _get_calendars
   .. automethod:: _get_hours_per_week_batch
   .. automethod:: _get_hours_per_day_batch
   .. automethod:: _get_calendar_periods
   .. automethod:: _get_expected_attendances
   .. automethod:: _get_calendar_attendances
   .. automethod:: _get_unusual_days
   .. automethod:: _get_employee_unavailable_intervals
   .. automethod:: _get_working_periods_by_field
   .. automethod:: _adjust_leaves
   .. automethod:: _get_tz
   .. automethod:: _get_resources_per_tz
   .. automethod:: _is_flexible
   .. automethod:: _is_fully_flexible
   .. automethod:: _prepare_resource_values
   .. automethod:: _sync_user
   .. automethod:: _get_or_create_light_user
   .. automethod:: _get_subordinates
   .. automethod:: _get_employee_m2o_to_empty_on_archived_employees
   .. automethod:: _get_user_m2o_to_empty_on_archived_employees
   .. automethod:: _compute_presence_state
   .. automethod:: _compute_presence_icon
   .. automethod:: _get_employee_working_now
   .. automethod:: _get_new_hire_field
   .. automethod:: _get_splitting_legal_name_countries
   .. automethod:: _get_related_partners
   .. automethod:: _search
   .. automethod:: search_fetch
   .. automethod:: fetch
   .. automethod:: action_new_departure
   .. automethod:: action_cancel_departure

.. automodel:: odoo.addons.hr.models.hr_employee_public.HrEmployeePublic()
   :main:

   .. autofield:: employee_id
   .. autofield:: is_manager

   .. automethod:: init
   .. automethod:: _get_fields
   .. automethod:: _compute_from_employee
   .. automethod:: _get_manager_only_fields
   .. automethod:: _compute_manager_only_fields

.. automodel:: odoo.addons.hr.models.resource.ResourceResource()

   .. autofield:: employee_id

   .. automethod:: _get_calendars_validity_within_period
   .. automethod:: _get_contracts_valid_periods
   .. automethod:: _get_resource_without_contract
   .. automethod:: _get_calendar_data_at

.. automodel:: odoo.addons.hr.models.res_users.ResUsers()

   .. autofield:: employee_id
   .. autofield:: employee_ids

   .. automethod:: create
   .. automethod:: write
   .. automethod:: action_create_employee
   .. automethod:: _get_employee_fields_to_sync
   .. automethod:: _get_personal_info_partner_ids_to_notify
