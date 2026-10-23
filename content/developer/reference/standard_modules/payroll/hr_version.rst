.. _reference/payroll/hr_version:

.. py:currentmodule:: odoo.addons.hr_payroll.models

========================
Payroll data of versions
========================

There is no contract model in Odoo 20.0: the contractual data of an employee lives on its
versions (`hr.version`, see :ref:`reference/hr/hr_version`). `hr_payroll` extends `hr.version`
with what the payroll needs (wage, pay frequency, salary structure, payroll properties, yearly
cost), and exposes most of these fields on `hr.employee`.

.. _reference/payroll/hr_version/employee_fields:

Fields on the employee and on the version
-----------------------------------------

The payroll fields of the version are also fields of the employee, declared as
`related='version_id.<field>', inherited=True` (`hr_payroll/models/hr_employee.py`): `wage`,
`hourly_wage`, `wage_type`, `schedule_pay`, `structure_type_id`, `structure_id`,
`payroll_properties`, `final_yearly_costs`, `work_time_rate`, `disabled`... Reading
`employee.wage` reads the **current version** of the employee, and writing it writes the current
version. To read the data valid at another date (e.g. in a payslip), use the version itself:
`payslip.version_id`, or `employee._get_version(date)`.

Most payroll fields are restricted to the payroll users (`hr_payroll.group_hr_payroll_user`).

.. _reference/payroll/hr_version/wage:

Wage and pay frequency
----------------------

`wage_type`
   `monthly` (*Fixed Wage*: the wage of a pay period is `wage`) or `hourly` (the wage is
   `hourly_wage` per hour). Computed from the structure type when it changes, editable.

`wage`, `hourly_wage`
   The gross wage per pay period, and the hourly wage.

`schedule_pay`
   The pay frequency (`monthly`, `weekly`, `bi-weekly`, ...), computed from the
   `default_schedule_pay` of the structure type, editable. It gives the default period of new
   payslips.

Use the helpers rather than reading the fields directly, as their logic is overridden by
localizations:

`_get_contract_wage()`
   The wage of the version, i.e. the value of the field returned by
   :meth:`~hr_version.HrVersion._get_contract_wage_field`: `hourly_wage` for hourly versions,
   `wage` otherwise (localizations return other fields, e.g. a wage on payroll).

:meth:`~hr_version.HrVersion._get_salary_costs_factor`
   The number of pay periods per year for `schedule_pay`: 12 for monthly, 52 for weekly, 26 for
   bi-weekly, 52 times the days per week of the calendar for daily...

:meth:`~hr_version.HrVersion._get_normalized_wage`
   The hourly wage: `hourly_wage` for hourly versions, else
   `wage * pay periods per year / 52 / hours per week`.

.. example::

   .. code-block:: python

      version = employee.version_id
      version.wage_type, version.schedule_pay, version.wage
      # ('monthly', 'monthly', 35000.0)
      version._get_contract_wage(), version._get_contract_wage_field()
      # (35000.0, 'wage')
      version._get_salary_costs_factor(), version._get_normalized_wage()
      # (12, 201.92307692307693) for a 40 hours/week calendar: 35000 * 12 / 52 / 40

.. _reference/payroll/hr_version/structure:

Salary structure
----------------

`structure_type_id` (defined in `hr`) selects the kind of contract. `structure_id` is a stored
related field on `structure_type_id.default_struct_id`: the regular pay structure of the
version. It is not set per version: changing the default structure of a structure type changes
it on all its versions. See :ref:`reference/payroll/hr_salary_rule`.

`work_time_rate` is the ratio between the weekly hours of the working schedule of the version
and those of its reference (full time) calendar, e.g. `0.8` for a 4/5 time.

.. _reference/payroll/hr_version/properties:

Payroll properties
------------------

`payroll_properties` is a properties field whose definition is the
`version_properties_definition` of `structure_id`: one float property per salary rule of the
structure flagged `input_usage_employee`, named after the rule code (see
:ref:`reference/payroll/hr_salary_rule/inputs`). It holds the values specific to the employee
(number of dependents, a fixed allowance, a pension fund rate...). When a payslip of the regular
structure is created, these values become input lines of the payslip, read by the rules as
`inputs['CODE'].amount`.

Read and write the values with :meth:`~hr_version.HrVersion._get_property_input_value` (0.0 if
the structure has no such rule or the version no value) and
:meth:`~hr_version.HrVersion._set_property_input_value` (raises a `ValidationError` if the rule
is not an employee input).

.. example::

   In `l10n_bd_hr_payroll`, `DISABLEDDEDUCTION` is an employee input (number of disabled
   dependents) increasing the tax exemption:

   .. code-block:: python

      from datetime import date

      version._set_property_input_value('DISABLEDDEDUCTION', 2)
      dict(version.payroll_properties)
      # {'DISABLEDDEDUCTION': 2}
      version._get_property_input_value('DISABLEDDEDUCTION')
      # 2

      payslip = env['hr.payslip'].create({
          'employee_id': version.employee_id.id,
          'date_from': date(2026, 9, 1),
          'date_to': date(2026, 9, 30),
      })
      payslip.input_line_ids.mapped(lambda line: (line.code, line.amount))
      # [('DISABLEDDEDUCTION', 2.0)]

      version._set_property_input_value('NET', 3)
      # ValidationError: Cannot set value for 'Net Salary': no version property definition
      # found for this salary rule.

.. _reference/payroll/hr_version/work_hours:

Work hours
----------

The worked days of the payslips are computed from the work entries generated for the versions
(see :ref:`reference/payroll/work_entries`).
:meth:`~hr_version.HrVersion.get_work_hours` aggregates generated work entry values by work entry
type: it returns `{(work entry type, category options): hours}`. The keys are **tuples of
records**, not ids; the category options are an `hr.salary.rule.category` recordset, empty
in most cases. :meth:`~hr_version.HrVersion._preprocess_work_hours_data` is a hook to adapt these
hours in place.

.. example::

   .. code-block:: python

      from datetime import date

      work_entries = version.generate_work_entries(date(2026, 9, 1), date(2026, 9, 30))
      dict(version.get_work_hours(date(2026, 9, 1), date(2026, 9, 30), work_entries))
      # {(hr.work.entry.type(177,), hr.salary.rule.category()): 176.0}

:meth:`~hr_version.HrVersion._get_occupation_dates` groups consecutive versions of an employee
with the same employee type and work time rate (gaps shorter than 4 days are ignored) into
occupations: `[(versions, date_from, date_to or False)]`. Localizations use it to compute
seniority or the periods to declare.

.. _reference/payroll/hr_version/yearly_cost:

Yearly cost
-----------

`final_yearly_costs` (*Yearly Cost*) is the yearly employer cost of the version. It is computed
from the wage by :meth:`~hr_version.HrVersion._get_yearly_cost_from_wage`::

   benefits costs + pay periods per year * wage / sacrifice ratio + fixed sacrifice

and it is editable: its inverse sets the wage giving that cost
(:meth:`~hr_version.HrVersion._get_wage_from_yearly_costs`). The terms are hooks overridden by
the localizations and the salary configurator (`hr_contract_salary`):

- :meth:`~hr_version.HrVersion._get_benefits_costs`: the yearly cost of the salary benefits of
  the structure type (`hr.contract.salary.benefit` with a cost field);
- :meth:`~hr_version.HrVersion._get_yearly_cost_sacrifice_ratio` (`1 - holidays / 231` by
  default) and :meth:`~hr_version.HrVersion._get_yearly_cost_sacrifice_fixed` (0), for the
  salary sacrifices (:meth:`~hr_version.HrVersion._get_sacrifice_fields`, `holidays` by
  default);
- :meth:`~hr_version.HrVersion._get_benefit_fields`,
  :meth:`~hr_version.HrVersion._benefit_white_list` and
  :meth:`~hr_version.HrVersion._benefit_black_list`: the version fields usable as benefits,
  which are the dependencies of `final_yearly_costs`.

.. example::

   .. code-block:: python

      version.wage, version.final_yearly_costs
      # (35000.0, 420000.0)
      version._get_wage_from_yearly_costs(480000)
      # 40000.0

.. _reference/payroll/hr_version/recompute:

Impact on the payslips
----------------------

Writing on a version a field returned by
:meth:`~hr_version.HrVersion._get_fields_that_recompute_payslip` (`wage`, `hourly_wage`,
`payroll_properties`) refreshes the draft regular payslips of the current company overlapping
the version (:meth:`~hr_version.HrVersion._recompute_payslips`). Add your fields to this hook
when your salary rules read them.

.. example::

   .. code-block:: python

      payslip.compute_sheet()
      payslip.line_ids.filtered(lambda line: line.code == 'BASIC').total
      # 35000.0
      employee.wage = 40000  # writes the current version
      payslip.line_ids.filtered(lambda line: line.code == 'BASIC').total
      # 40000.0

A version with validated payslips cannot be deleted or archived.

Other payroll fields of the version: `is_non_resident`, `disabled`, `holidays` (extra paid time
off days per year), `payroll_config_id` (the payroll configuration valid at the version date),
`issues` (the payroll warnings concerning the version, see
:ref:`reference/payroll/hr_payslip_run`).

.. _reference/payroll/hr_version/employee:

Employee
--------

Besides the related version fields, `hr_payroll` adds to `hr.employee`:

- `slip_ids` (payslips) and `salary_attachment_ids` (payslip adjustments, see
  :ref:`reference/payroll/hr_salary_attachment`); archiving an employee closes its running
  adjustments;
- `registration_number`, unique per company;
- `review_state` and `date_to_review`: when a user who is not payroll officer changes a tracked
  field of the employee, the employee is flagged *To Review* for the payroll officers;
- tracking messages about payroll fields are posted with the
  `hr_payroll.mt_hr_payroll_sensitive` subtype, hidden to the users without payroll rights.

.. _reference/payroll/hr_version/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_version.HrVersion()

   .. autofield:: wage_type
   .. autofield:: hourly_wage
   .. autofield:: schedule_pay
   .. autofield:: structure_id
   .. autofield:: payroll_properties
   .. autofield:: work_time_rate
   .. autofield:: final_yearly_costs

   .. automethod:: _get_contract_wage_field
   .. automethod:: _get_salary_costs_factor
   .. automethod:: _get_normalized_wage
   .. automethod:: _get_property_input_value
   .. automethod:: _set_property_input_value
   .. automethod:: get_work_hours
   .. automethod:: _get_work_hours
   .. automethod:: _preprocess_work_hours_data
   .. automethod:: _get_occupation_dates
   .. automethod:: _get_yearly_cost_from_wage
   .. automethod:: _get_wage_from_yearly_costs
   .. automethod:: _get_benefits_costs
   .. automethod:: _get_yearly_cost_sacrifice_ratio
   .. automethod:: _get_yearly_cost_sacrifice_fixed
   .. automethod:: _get_sacrifice_fields
   .. automethod:: _get_benefit_fields
   .. automethod:: _benefit_white_list
   .. automethod:: _benefit_black_list
   .. automethod:: _get_employer_costs_from_gross
   .. automethod:: _get_fields_that_recompute_payslip
   .. automethod:: _recompute_payslips

.. automodel:: odoo.addons.hr_payroll.models.hr_employee.HrEmployee()

   .. autofield:: slip_ids
   .. autofield:: salary_attachment_ids
   .. autofield:: registration_number

   .. automethod:: action_add_payslip_to_payrun
   .. automethod:: _recompute_worked_days_lines
