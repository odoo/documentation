.. _reference/payroll/hr_payslip:

.. py:currentmodule:: odoo.addons.hr_payroll.models

========
Payslips
========

A payslip (`hr.payslip`) is the salary computation of one employee for one period: an employee,
a version (`hr.version`, which holds the contract data such as the wage and the schedule), a
salary structure (`hr.payroll.structure`, which holds the salary rules) and the dates of the
period. Its computation goes through three kinds of lines:

- **worked days** (`hr.payslip.worked_days`): the time of the period by work entry type, built
  from the generated work entries;
- **inputs** (`hr.payslip.input`): values entered by the user or coming from the employee
  (salary attachments, version properties), each one read by a salary rule;
- **payslip lines** (`hr.payslip.line`): the results of the salary rules (basic salary, gross,
  taxes, net, ...).

.. graphviz::

   digraph payslip {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      version [label="hr.version\n(wage, schedule)"];
      we [label="work entry values\n(generated)", style="rounded,dashed"];
      wd [label="hr.payslip.worked_days"];
      input [label="hr.payslip.input"];
      slip [label="hr.payslip"];
      rules [label="hr.salary.rule\n(of the structure)"];
      line [label="hr.payslip.line"];
      version -> we [label="generate_work_entries"];
      we -> wd;
      wd -> slip [label="worked_days_line_ids"];
      input -> slip [label="input_line_ids"];
      slip -> rules [label="compute_sheet"];
      rules -> line [label="line_ids"];
   }

.. seealso::
   - :ref:`reference/payroll/work_entries` for the generation of the work entries;
   - :ref:`reference/payroll/hr_salary_rule` for the structures and the salary rules, including
     the fields of a rule and the meaning of `result`, `result_qty`, `result_rate`;
   - :ref:`reference/payroll/hr_payslip_run` for the pay runs, which create payslips in batch,
     and the payroll warnings.

.. _reference/payroll/hr_payslip/lifecycle:

.. _reference/payroll/hr_payslip/lifecycle/create:

Creating a payslip
------------------

Only the employee and the start date are needed; the other values are computed (stored computed
fields, so they can also be given):

- `version_id` (:meth:`~hr_payslip.HrPayslip._compute_version_id`): the first version of a
  contract overlapping the period, or else the version valid at `date_from`;
- `struct_id` (:meth:`~hr_payslip.HrPayslip._compute_struct_id`): the default structure of the
  structure type of the version;
- `date_to`: `date_from` plus the length of the pay schedule of the version
  (:meth:`~hr_payslip.HrPayslip._schedule_timedelta`, e.g. the end of the month for a monthly
  schedule), or the context key `default_date_to`;
- `worked_days_line_ids` and `input_line_ids`, see
  :ref:`reference/payroll/hr_payslip/worked_days` and :ref:`reference/payroll/hr_payslip/inputs`;
- `issues`, `error_count` and `warning_count`, see
  :ref:`reference/payroll/hr_payslip_run/warnings`.

A new payslip has **no lines**: call :meth:`~hr_payslip.HrPayslip.compute_sheet` to compute them.

.. _reference/payroll/hr_payslip/lifecycle/states:

Payslip states
--------------

`state` is `draft`, `validated`, `paid` or `cancel`. `state_display` adds the `01_error`
(*Blocked*) and `02_warning` states computed from the issues, for the views.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Transition
     - Method
     - Checks and effects
   * - compute
     - :meth:`~hr_payslip.HrPayslip.compute_sheet`
     - Draft payslips only: the lines are deleted and computed again, `compute_date` is set.
   * - draft → validated
     - :meth:`~hr_payslip.HrPayslip.action_payslip_done`
     - Payroll officer only. Refused for cancelled payslips, payslips with errors
       (`error_count`), payslips of an archived version, and payslips or employees targeted by a
       blocking payroll warning (`block_payslips`). Sets `done_date`; the time off of the period
       get `payslip_state = 'done'`. Does not compute the payslip.
   * - compute and validate
     - :meth:`~hr_payslip.HrPayslip.action_validate`
     - Computes the draft payslips without lines, then validates the draft payslips.
   * - validated → paid
     - :meth:`~hr_payslip.HrPayslip.action_payslip_paid`
     - Sets `paid_date` if empty and records the payments of the salary attachments.
   * - paid → validated
     - :meth:`~hr_payslip.HrPayslip.action_payslip_unpaid`
     -
   * - → draft
     - :meth:`~hr_payslip.HrPayslip.action_payslip_draft`
     - Removes the payment report and `done_date`. The worked days and lines are regenerated
       (see below).
   * - → cancel
     - :meth:`~hr_payslip.HrPayslip.action_payslip_cancel`
     - Payroll manager only for validated payslips. The time off get back
       `payslip_state = 'normal'`.
   * - delete
     - `unlink`
     - Draft and cancelled payslips only.

Validated and paid payslips are legal documents: their wages are not recomputed anymore. Most
localizations extend :meth:`~hr_payslip.HrPayslip.action_payslip_done` (accounting entries,
declarations, ...).

.. _reference/payroll/hr_payslip/lifecycle/write:

Side effects of write
---------------------

:meth:`~hr_payslip.HrPayslip.write` triggers part of the business logic, so writing on a payslip
is not neutral:

- changing the input lines recomputes the computed draft payslips (refunds excepted);
- editing the `name`, `amount`, `quantity` or `rate` of a line (`line_ids` update commands)
  recomputes the lines following it with the edited values forced
  (:meth:`~hr_payslip.HrPayslip._recompute_with_forced_lines`), flags the lines
  `manually_modified` and the payslip `edited`, and logs the changes in the chatter;
- setting `state` to `draft` on a non-draft payslip calls
  :meth:`~hr_payslip.HrPayslip.action_refresh_from_work_entries`;
- setting `state` to `paid` records the payments of the salary attachments;
- changing `struct_id` sets `ignore_worked_day_lines` (structure without worked days), and
  changing `ignore_worked_day_lines` recomputes the payslip.

An `edited` payslip is never refreshed from the work entries anymore: manual changes are kept.

.. example::

   .. code-block:: python

      from datetime import date

      from odoo.fields import Command

      employee = env['hr.employee'].search([('name', '=', 'Ronnie Hart')])  # wage 4000/month
      unpaid = env['hr.work.entry.type'].search([
          ('code', '=', '158.00'), ('country_id.code', '=', 'US'),
      ])
      env['hr.leave'].create({
          'employee_id': employee.id,
          'work_entry_type_id': unpaid.id,
          'request_date_from': date(2026, 11, 16),
          'request_date_to': date(2026, 11, 17),
      })

      slip = env['hr.payslip'].create({'employee_id': employee.id, 'date_from': date(2026, 11, 1)})
      slip.name, slip.date_to, slip.struct_id.name, slip.state
      # ('Payslip - Ronnie Hart - November 2026', datetime.date(2026, 11, 30), 'Regular Pay',
      #  'draft')
      [(wd.code, wd.number_of_days, wd.number_of_hours, wd.is_paid, round(wd.amount, 2))
       for wd in slip.worked_days_line_ids]
      # [('013.00', 3.0, 24.0, True, 571.43), ('158.00', 2.0, 16.0, False, 0.0),
      #  ('002.00', 16.0, 128.0, True, 3047.62)]
      slip.line_ids  # hr.payslip.line(): not computed yet

      slip.compute_sheet()
      [(line.code, line.amount, line.quantity, line.rate, line.total) for line in slip.line_ids]
      # [('BASIC', 3619.05, 1.0, 100.0, 3619.05), ('HRA', 4000.0, 1.0, 40.0, 1600.0),
      #  ('CA', 800.0, 1.0, 100.0, 800.0), ('CAGG', 600.0, 1.0, 100.0, 600.0),
      #  ('MA', 10.0, 16.0, 100.0, 160.0), ('SUMALW', 0.0, 1.0, 100.0, 0.0),
      #  ('GROSS', 6779.05, 1.0, 100.0, 6779.05), ('PF', 4000.0, 1.0, -12.5, -500.0),
      #  ('PT', -200.0, 1.0, 100.0, -200.0), ('NET', 6079.05, 1.0, 100.0, 6079.05)]
      slip.basic_wage, slip.gross_wage, slip.net_wage  # (3619.05, 6779.05, 6079.05)

   The employee earns 4000 for the 168 working hours of November 2026: the 128 hours of
   attendance are worth 4000 × 128 / 168 = 3047.62, the 24 hours of sick leave 571.43 and the 16
   hours of unpaid leave 0. `BASIC` sums the worked days amounts.

.. _reference/payroll/hr_payslip/worked_days:

Worked days
-----------

Worked days lines summarize the time of the period by work entry type. They are computed by
:meth:`~hr_payslip.HrPayslip._compute_worked_days_line_ids` when the employee, version,
structure or dates change, for the structures with `use_worked_day_lines` (and payslips without
`ignore_worked_day_lines`):

#. The versions taken into account are the version of the payslip and the other versions of the
   **same contract** (same employee and contract dates) starting during the period: a wage
   change in the middle of the month gives worked days lines for each version.
#. The work entries of these versions are generated (see :ref:`reference/payroll/work_entries`),
   from the day before to the day after the period.
#. :meth:`~hr_payslip.HrPayslip._get_worked_day_lines` calls, for each version,
   :meth:`~hr_payslip.HrPayslip._get_worked_day_lines_values`, which sums the hours of the
   period by work entry type (and category options) with
   :meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion.get_work_hours`, and converts them
   into days with the hours per day of the schedule
   (:meth:`~hr_payslip.HrPayslip._get_worked_day_lines_hours_per_day`). Days are rounded by
   :meth:`~hr_payslip.HrPayslip._round_days`, to the half or whole day for the types requested
   by day or half day, with the type `round_days_type`; the rounding difference is carried over
   to the type with the most hours, so the total is kept.
#. The parts of the period outside the contract (before its start, after its end, or the whole
   period without contract) give an **out-of-contract** line, of type `000.00` of the
   structure country (or `hr_work_entry.generic_hr_work_entry_type_out_of_contract`), measured
   on the schedule (:meth:`~hr_payslip.HrPayslip._get_out_of_period_duration`). Its amount is 0,
   which prorates the wage.

The `amount` of a line (:meth:`~hr_payslip_worked_days.HrPayslipWorkedDays._compute_amount`) is
`hourly rate × number_of_hours × amount_rate` of its type when the line is paid (`is_paid`: the
`amount_rate` of the type is not 0). For an hourly wage, the hourly rate is the wage; for a
monthly wage, it is the wage divided by the working hours of the schedule over the payslip
period. The amount is editable; it is not recomputed on edited or non-draft payslips.

Worked days are not regenerated by :meth:`~hr_payslip.HrPayslip.compute_sheet`. After a change in
the time off, attendances, schedule or version of the period, call
:meth:`~hr_payslip.HrPayslip.action_refresh_from_work_entries` (draft payslips only; edited
payslips are skipped), which regenerates the worked days and recomputes the lines. Changing the
wage, hourly wage or payroll properties of a version refreshes its draft payslips.

.. _reference/payroll/hr_payslip/inputs:

Inputs
------

An input line holds a value read by a salary rule through `inputs['<CODE>']`. It points to the
rule itself (`salary_rule_id`); its `code` is the rule code. (There is no
`hr.payslip.input.type` model anymore.) Only the rules of the structure reading an input can be
chosen: rules whose condition or amount is `property_input`, or with `input_usage_payslip`. See
:ref:`reference/payroll/hr_salary_rule/inputs`.

Input lines come from:

- the **salary attachments** of the employee open during the period: one line per rule code,
  rebuilt at each recomputation (see :ref:`reference/payroll/hr_salary_attachment`);
- the **version properties** (`hr.version.payroll_properties`) of the rules used as employee
  inputs, or the default value of the rules selected by default
  (:meth:`~hr_payslip.HrPayslip._compute_input_line_ids`). Existing lines are never overwritten;
- the user, or the code, with :meth:`~hr_payslip.HrPayslip._set_input_value` and
  :meth:`~hr_payslip.HrPayslip._set_input_values`: a falsy value removes the line. As the lines
  change, a computed draft payslip is recomputed.

.. example::

   With the draft payslip of the previous example:

   .. code-block:: python

      slip._set_input_value('DEDUCTION', 150)
      [(line.code, line.name, line.amount) for line in slip.input_line_ids]
      # [('DEDUCTION', 'Deduction', 150.0)]
      [(line.code, line.total) for line in slip.line_ids if line.code in ('DEDUCTION', 'NET')]
      # [('DEDUCTION', -150.0), ('NET', 5929.05)]: recomputed

.. _reference/payroll/hr_payslip/computation:

Computation
-----------

:meth:`~hr_payslip.HrPayslip.compute_sheet` computes the lines of the **draft** payslips of
`self` (the others are ignored):

#. The existing lines are deleted and `compute_date` is set.
#. Refunds get the negated lines of their origin payslip.
#. The other payslips are computed by employee, in chronological layers: the first payslip of
   every employee, then the second one, etc. This way, the cumulative rules of the second
   payslip of an employee (e.g. after a version change) see the first one. For each layer, the
   line values returned by :meth:`~hr_payslip.HrPayslip._get_payslip_lines` are created.
#. The year-to-date amounts of the worked days are set.

:meth:`~hr_payslip.HrPayslip._get_payslip_lines` evaluates the rules and returns the line values
without writing anything, which makes it the method to call to simulate a payslip:

#. It fetches the last payslip of each employee since the year-to-date reset date
   (:meth:`~hr_payslip.HrPayslip._get_last_ytd_payslips`) and generates the work entries of the
   versions of the worked days.
#. It builds the common values of the batch
   (:meth:`~hr_payslip.HrPayslip._get_common_localdict`).
#. For each structure, it evaluates the rules by **round** (`round_of_computation`, ascending),
   for all the payslips of the structure, so that a rule of round 2 can use the results of round
   1 of all the payslips. Before each round,
   :meth:`~hr_payslip.HrPayslip._get_round_common_localdict` may add values.
#. Each payslip gets one evaluation context, the **localdict**
   (:meth:`~hr_payslip.HrPayslip._get_localdict`), built once and kept across the rounds.
#. The rules of the round are evaluated by `sequence`. For each rule:

   - `result`, `result_qty`, `result_rate`, `result_name` and `explanation_info` are reset to
     `None`, `1.0`, `100`, `False` and `{}`;
   - if the condition is satisfied, the rule computes its amount, quantity and rate;
   - the total is given by :meth:`~hr_payslip.HrPayslip._get_payslip_line_total`
     (`amount × quantity × rate / 100`);
   - the total becomes a variable named after the rule code, `result_rules` is updated, and the
     total is added to `categories` for each category of the rule and its parent categories;
   - the line explanation is the `explanation_template` of the rule, formatted with
     `explanation_info`.

#. One line is returned per rule code and payslip. A rule whose code has several input lines is
   computed once per input line and gives one line each.

A line value contains `sequence`, `code`, `name`, `salary_rule_id`, `version_id`,
`employee_id`, `slip_id`, `explanation`, `amount`, `quantity`, `rate`, `total`, `ytd` and
`manually_modified`:

.. code-block:: python

   slip._get_payslip_lines()[0]
   # {'sequence': 1, 'code': 'BASIC', 'name': 'Basic Salary', 'salary_rule_id': 9,
   #  'version_id': 5, 'employee_id': 5, 'explanation': False, 'amount': 3619.0499999999997,
   #  'quantity': 1.0, 'rate': 100, 'total': 3619.05, 'slip_id': 86, 'ytd': 3619.05,
   #  'manually_modified': False}

.. note::
   The YTD (year to date) of a line is the YTD of the line of the same code in the last
   validated or paid payslip of the employee and structure since the YTD reset date of the
   company, plus the total of the line. The reference date of a payslip is its `date_to`
   (:meth:`~hr_payslip.HrPayslip._get_ytd_reference_date`, which some localizations replace by
   the payment date).

.. _reference/payroll/hr_payslip/localdict:

The localdict
-------------

The localdict is the dict in which the code of the salary rules is evaluated: every key is a
variable of the rule code, and `localdict` itself is also available. It is **shared by all the
rules of the payslip**: every variable assigned by a rule (`result`, but also any local variable)
stays in it for the next rules.

.. list-table::
   :header-rows: 1
   :widths: 22 28 50

   * - Key
     - Type
     - Usage
   * - `payslip`
     - `hr.payslip`
     - The payslip record: `payslip.date_from`, `payslip._rule_parameter('code')` (see
       :ref:`reference/payroll/hr_rule_parameter`), `payslip._sum('NET', date_from, date_to)`.
   * - `employee`
     - `hr.employee`
     - `employee.children`
   * - `version`
     - `hr.version`
     - The version of the payslip: `version.wage`, `version._get_contract_wage()`.
   * - `company`
     - `res.company`
     -
   * - `payroll_config`
     - `payroll.config.settings`
     - The payroll configuration of the company valid for the payslip.
   * - `categories`
     - `{category code: float}`
     - Totals by category so far, `0` for missing codes: `categories['GROSS']`. Initialized
       with the amounts of the worked days, by the categories of their work entry type (see
       below).
   * - `result_rules`
     - `{rule code: dict}`
     - `{'total', 'amount', 'quantity', 'rate', 'ytd'}` of the rules computed so far, zeros for
       missing codes: `result_rules['GROSS']['total']`.
   * - `<RULE_CODE>`
     - `float`
     - The total of a rule already computed: `GROSS`. Undefined (`NameError`) if the rule did
       not apply or comes later.
   * - `worked_days`
     - `{type code: hr.payslip.worked_days}`
     - Plain dict, missing codes raise `KeyError`. A code can have several lines (several
       versions, category options): `sum(worked_days['002.00'].mapped('number_of_days'))`.
   * - `inputs`
     - `{rule code: hr.payslip.input}`
     - Plain dict, missing codes raise `KeyError`: `inputs['DEDUCTION'].amount`,
       `inputs.get('DEDUCTION')`. Several lines with the same code are aggregated (summed
       `amount`).
   * - `same_type_input_lines`
     - `{rule code: hr.payslip.input}`
     - The codes having several input lines; used by the engine.
   * - `category_options`
     - `{category code: float}`
     - Hours of the worked days by category option (premium pays) and their parents:
       `category_options['PREMIUM_PAY_NIGHT']`. `0` for missing codes.
   * - `work_entries`
     - `list[dict]`
     - The work entry values of the period, for the versions of the worked days (see
       :ref:`reference/payroll/work_entries/values`).
   * - `rules`
     - legacy
     - Never filled: use `result_rules`.
   * - `global_line_values`
     - `{rule code: {payslip id or 'sum': dict}}`
     - The `amount`, `quantity` and `total` of the rules already computed for all the payslips
       of the batch.
   * - `result`, `result_qty`, `result_rate`, `result_name`, `explanation_info`
     - outputs
     - See :ref:`reference/payroll/hr_salary_rule/python/code`.
   * - helpers
     -
     - `float_round`, `float_compare`, `relativedelta`, `ceil`, `floor`, `date`, `datetime`,
       `defaultdict`, `UserError`, `_get_payroll_translation`.

The keys come from several methods, which are also the ways to add keys:

- :meth:`~hr_payslip.HrPayslip._get_base_local_dict`: the helpers (localizations add functions,
  e.g. `l10n_in_hr_payroll` adds `_`);
- :meth:`~hr_payslip.HrPayslip._get_localdict`: the records, the dicts and `work_entries`, for one
  payslip (e.g. `l10n_vn_hr_payroll` adds a gross-up flag);
- :meth:`~hr_payslip.HrPayslip._get_common_localdict`: values computed once for the whole batch,
  copied in each localdict (`global_line_values`);
- :meth:`~hr_payslip.HrPayslip._get_round_common_localdict`: values added before each round (e.g.
  `l10n_be_hr_payroll` computes tax exemptions shared between payslips in round 2).

`categories` starts with the worked days: the `amount` of each worked days line is added to the
categories of its work entry type (`hr.work.entry.type.category_ids`) and their parents. This is
why a `BASIC` rule can simply be `result = categories['BASIC']`. Structures without worked days
(or payslips with `ignore_worked_day_lines`) start with empty categories.

.. example::

   Inspecting the context of a payslip in a shell, to try expressions before writing a rule:

   .. code-block:: python

      work_entries = slip.version_id.generate_work_entries(slip.date_from, slip.date_to)
      localdict = slip._get_localdict(work_entries)
      worked_days, inputs = localdict['worked_days'], localdict['inputs']
      categories = localdict['categories']
      sorted(localdict)
      # ['UserError', '_get_payroll_translation', 'categories', 'category_options', 'ceil',
      #  'company', 'date', 'datetime', 'defaultdict', 'employee', 'float_compare',
      #  'float_round', 'floor', 'inputs', 'payroll_config', 'payslip', 'relativedelta',
      #  'result_rules', 'rules', 'same_type_input_lines', 'version', 'work_entries',
      #  'worked_days']
      sum(worked_days['002.00'].mapped('number_of_hours'))  # 128.0
      worked_days['LEAVE110']  # KeyError: 'LEAVE110'
      inputs.get('DEDUCTION')  # hr.payslip.input(19,)
      categories['BASIC'], categories['GROSS']  # (3619.0499999999997, 0): worked days only
      localdict['result_rules']['GROSS']
      # {'total': 0, 'amount': 0, 'quantity': 0, 'rate': 0, 'ytd': 0}

   Without argument, `_get_localdict()` gives an empty `work_entries`. The lines are not part
   of the context: rules are evaluated from scratch.

.. example::

   Two rules added to the structure of the payslip: a transport allowance per day of attendance,
   read from `work_entries` and overridable by an input, and a contribution reading the total of
   `GROSS`:

   .. code-block:: python

      struct = slip.struct_id
      env['hr.salary.rule'].create([{
          'name': 'Transport allowance',
          'code': 'TRANSPORT',
          'struct_ids': [Command.link(struct.id)],
          'category_ids': [Command.link(env.ref('hr_payroll.ALW').id)],
          'sequence': 95,  # before GROSS (100), which sums the ALW category
          'input_usage_payslip': True,  # the amount per day can be given on the payslip
          'condition_select': 'none',
          'amount_select': 'code',
          'amount_python_compute': """
      office_days = {
          vals['date'] for vals in work_entries
          if vals['work_entry_type_id'].code == '002.00'
      }
      result = inputs['TRANSPORT'].amount if 'TRANSPORT' in inputs else 5.0
      result_qty = len(office_days)
      """,
      }, {
          'name': 'Solidarity contribution',
          'code': 'SOLIDARITY',
          'struct_ids': [Command.link(struct.id)],
          'category_ids': [Command.link(env.ref('hr_payroll.DED').id)],
          'sequence': 160,  # after GROSS
          'condition_select': 'python',
          'condition_python': "result = GROSS > 5000",
          'amount_select': 'code',
          'amount_python_compute': """
      result = -GROSS
      result_rate = 1
      explanation_info = {'gross': GROSS, 'transport': result_rules['TRANSPORT']['total']}
      """,
          'explanation_template': '1% of {gross:.2f} (incl. {transport:.2f} transport)',
      }])
      slip.compute_sheet()
      [(line.code, line.amount, line.quantity, line.rate, line.total, line.explanation)
       for line in slip.line_ids if line.code in ('TRANSPORT', 'GROSS', 'SOLIDARITY', 'NET')]
      # [('TRANSPORT', 5.0, 16.0, 100.0, 80.0, False),
      #  ('GROSS', 6859.05, 1.0, 100.0, 6859.05, False),
      #  ('SOLIDARITY', -6859.05, 1.0, 1.0, -68.59, '1% of 6859.05 (incl. 80.00 transport)'),
      #  ('NET', 5940.46, 1.0, 100.0, 5940.46, False)]

      slip._set_input_value('TRANSPORT', 8)
      [(line.code, line.total) for line in slip.line_ids
       if line.code in ('TRANSPORT', 'SOLIDARITY', 'NET')]
      # [('TRANSPORT', 128.0), ('SOLIDARITY', -69.07), ('NET', 5987.98)]

.. _reference/payroll/hr_payslip/results:

Reading the results
-------------------

- The lines: `slip.line_ids.filtered(lambda line: line.code == 'NET').total`.
- The stored totals `basic_wage`, `gross_wage` and `net_wage`, sums of the lines whose codes are
  given by :meth:`~hr_payslip.HrPayslip._get_basic_wage_line_codes` (`BASIC`),
  :meth:`~hr_payslip.HrPayslip._get_gross_wage_line_codes` (`GROSS`) and
  :meth:`~hr_payslip.HrPayslip._get_net_wage_line_codes` (`NET`), and `employer_cost`. They are
  only recomputed on draft payslips.
- For many payslips, :meth:`~hr_payslip.HrPayslip._get_line_values` sums the lines by code and
  payslip in one query (`total` by default, also `amount`, `quantity`, `ytd`); missing codes
  give 0. :meth:`~hr_payslip.HrPayslip._get_worked_days_line_values` does the same for the
  worked days.
- Over a period, on the validated and paid payslips of the employee:
  :meth:`~hr_payslip.HrPayslip._sum` (rule code), :meth:`~hr_payslip.HrPayslip._sum_category`
  (category) and :meth:`~hr_payslip.HrPayslip._sum_worked_days` (work entry type). The end date
  defaults to today. These are usable in rule code, e.g. to cap a yearly amount.

.. code-block:: python

   slip.line_ids.filtered(lambda line: line.code == 'NET').total  # 5987.98
   slip._get_line_values(['NET'])['NET'][slip.id]['total']  # 5987.98
   # with several payslips: the sum over all the payslips
   slip._get_line_values(['GROSS', 'NET'], compute_sum=True)['NET']['sum']['total']  # 5987.98

.. _reference/payroll/hr_payslip/refunds:

Refunds and corrections
-----------------------

Validated and paid payslips are never changed. To cancel or fix them:

:meth:`~hr_payslip.HrPayslip._action_refund_payslips`
   Creates, for each payslip, a refund: a copy with `credit_note`, `is_refund_payslip` and
   `edited` set and `origin_payslip_id` pointing to the original, whose worked days, inputs and
   lines are negated. **Refunds are validated at once.** The original is flagged `is_refunded`
   and its time off get back `payslip_state = 'normal'`. :meth:`~hr_payslip.HrPayslip.refund_sheet`
   is the button calling it.

:meth:`~hr_payslip.HrPayslip._action_correct_payslips`
   Creates and computes, for each payslip, a correction: a new draft payslip of the same
   employee, version, structure and period, with `origin_payslip_id` and a copy of the input
   lines. The original is flagged `is_corrected`; `correction_net_delta` is the difference of
   net with the original.

The correction wizard (`hr.payslip.correction.wizard`) refunds, or refunds and corrects, the
selected payslips; the pay run correction (see :ref:`reference/payroll/hr_payslip_run/actions`)
refunds and corrects all the payslips of a pay run.
:meth:`~hr_payslip.HrPayslip._get_payslip_family` returns the payslips linked through
`origin_payslip_id`.

.. example::

   The payslip of the previous examples is validated, paid, then refunded and corrected:

   .. code-block:: python

      slip.action_payslip_done()
      slip.state  # 'validated'
      slip.paid_date = date(2026, 12, 1)
      slip.action_payslip_paid()
      slip.state, slip.paid_date  # ('paid', datetime.date(2026, 12, 1))

      refund = slip._action_refund_payslips()
      refund.name, refund.state, refund.net_wage
      # ('Refund: Payslip - Ronnie Hart - November 2026', 'validated', -5987.98)
      [(wd.code, wd.number_of_days) for wd in refund.worked_days_line_ids]
      # [('013.00', -3.0), ('158.00', -2.0), ('002.00', -16.0)]

      correction = slip._action_correct_payslips()
      correction.name, correction.state, correction.correction_net_delta
      # ('Correction: Payslip - Ronnie Hart - November 2026', 'draft', 0.0)
      [(line.code, line.amount) for line in correction.input_line_ids]
      # [('DEDUCTION', 150.0), ('TRANSPORT', 8.0)]

.. _reference/payroll/hr_payslip/pitfalls:

Pitfalls
--------

- Creating a payslip does not compute it, and :meth:`~hr_payslip.HrPayslip.compute_sheet` does
  not regenerate the worked days: use :meth:`~hr_payslip.HrPayslip.action_refresh_from_work_entries`
  after changing time data.
- :meth:`~hr_payslip.HrPayslip.action_payslip_done` does not compute the payslips; use
  :meth:`~hr_payslip.HrPayslip.action_validate` to compute the payslips without lines first.
- Edited payslips (manual line or worked days changes, refunds) are never refreshed from the
  work entries.
- In rules, `worked_days[code]` and `inputs[code]` raise `KeyError` for missing codes, while
  `categories` and `result_rules` silently return 0.
- `worked_days[code]` may hold several lines: `worked_days[code].number_of_days` then fails,
  use `mapped()`.
- Variables assigned in a rule leak into the next rules of the payslip; initialize the variables
  you use.
- Payslip issues are not computed when running tests, unless the context has
  `hr_payroll_force_compute_issue`.
- The rule parameters are read at the YTD reference date (`date_to` by default), not today.

.. _reference/payroll/hr_payslip/extending:

Extending
---------

The methods below are designed to be overridden; localization modules give many examples.

Context of the rules
   :meth:`~hr_payslip.HrPayslip._get_base_local_dict`, :meth:`~hr_payslip.HrPayslip._get_localdict`,
   :meth:`~hr_payslip.HrPayslip._get_common_localdict` and
   :meth:`~hr_payslip.HrPayslip._get_round_common_localdict` (see above).

Computation
   :meth:`~hr_payslip.HrPayslip._get_payslip_lines` (e.g. `l10n_vn_hr_payroll` computes the net
   to gross salaries by calling it in a loop), :meth:`~hr_payslip.HrPayslip._get_payslip_line_total`
   (rounding of the totals, e.g. `l10n_be_hr_payroll`, `l10n_ch_hr_payroll`) and
   :meth:`~hr_payslip.HrPayslip.compute_sheet` (e.g. to ask for missing data with a wizard: the
   action returned by `compute_sheet` is returned by `action_validate`).

Worked days
   :meth:`~hr_payslip.HrPayslip._get_worked_day_lines_values`,
   :meth:`~hr_payslip.HrPayslip._get_worked_day_lines`,
   :meth:`~hr_payslip.HrPayslip._get_worked_day_lines_hours_per_day`,
   :meth:`~hr_payslip.HrPayslip._round_days`,
   :meth:`~hr_payslip.HrPayslip._get_out_of_contract_calendar` and
   :meth:`~hr_payslip.HrPayslip._get_out_of_period_duration`.

Inputs
   :meth:`~hr_payslip.HrPayslip._compute_input_line_ids`, to add input lines computed from other
   data (e.g. `hr_payroll_expense` adds the expenses to reimburse).

Validation
   :meth:`~hr_payslip.HrPayslip.action_payslip_done` (accounting entries, declarations).

Periods and YTD
   :meth:`~hr_payslip.HrPayslip._schedule_timedelta`,
   :meth:`~hr_payslip.HrPayslip._get_ytd_reference_date` and
   :meth:`~hr_payslip.HrPayslip._get_ytd_date_field` (e.g. `l10n_us_hr_payroll` uses the payment
   date).

Issues
   :meth:`~hr_payslip.HrPayslip._issues_dependencies`, to recompute the issues when the fields
   used by the payroll warnings of a localization change.

Reports and data
   :meth:`~hr_payslip.HrPayslip._get_basic_wage_line_codes` (and gross, net),
   :meth:`~hr_payslip.HrPayslip._get_pdf_reports`,
   :meth:`~hr_payslip.HrPayslip._get_data_files_to_update` and
   :meth:`~hr_payslip.HrPayslip._get_payroll_translation`, see
   :ref:`reference/payroll/localization`.

.. _reference/payroll/hr_payslip/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_payslip.HrPayslip()
   :main:

   .. autofield:: employee_id
   .. autofield:: version_id
   .. autofield:: struct_id
   .. autofield:: date_from
   .. autofield:: date_to
   .. autofield:: state
   .. autofield:: line_ids
   .. autofield:: worked_days_line_ids
   .. autofield:: input_line_ids
   .. autofield:: payslip_run_id
   .. autofield:: credit_note
   .. autofield:: is_refund_payslip
   .. autofield:: origin_payslip_id
   .. autofield:: edited
   .. autofield:: ignore_worked_day_lines
   .. autofield:: compute_date
   .. autofield:: done_date
   .. autofield:: paid_date
   .. autofield:: basic_wage
   .. autofield:: gross_wage
   .. autofield:: net_wage
   .. autofield:: issues

   .. automethod:: compute_sheet
   .. automethod:: action_refresh_from_work_entries
   .. automethod:: action_payslip_done
   .. automethod:: action_validate
   .. automethod:: action_payslip_paid
   .. automethod:: action_payslip_unpaid
   .. automethod:: action_payslip_draft
   .. automethod:: action_payslip_cancel
   .. automethod:: write
   .. automethod:: _recompute_with_forced_lines
   .. automethod:: _compute_version_id
   .. automethod:: _compute_struct_id
   .. automethod:: _schedule_timedelta
   .. automethod:: _schedule_period_start
   .. automethod:: _compute_worked_days_line_ids
   .. automethod:: _get_new_worked_days_lines
   .. automethod:: _get_worked_day_lines
   .. automethod:: _get_worked_day_lines_values
   .. automethod:: _get_worked_day_lines_hours_per_day
   .. automethod:: _round_days
   .. automethod:: _get_out_of_contract_calendar
   .. automethod:: _get_out_of_period_duration
   .. automethod:: _compute_worked_days_ytd
   .. automethod:: _compute_input_line_ids
   .. automethod:: _set_input_value
   .. automethod:: _set_input_values
   .. automethod:: _get_input_line_amount
   .. automethod:: _get_payslip_lines
   .. automethod:: _get_base_local_dict
   .. automethod:: _get_localdict
   .. automethod:: _get_common_localdict
   .. automethod:: _get_round_common_localdict
   .. automethod:: _get_category_options_data
   .. automethod:: _get_premium_pay_additional_amount
   .. automethod:: _get_payslip_line_total
   .. automethod:: _get_last_ytd_payslips
   .. automethod:: _get_ytd_reference_date
   .. automethod:: _get_ytd_date_field
   .. automethod:: _rule_parameter
   .. automethod:: _sum
   .. automethod:: _sum_category
   .. automethod:: _sum_worked_days
   .. automethod:: _get_line_values
   .. automethod:: _get_worked_days_line_values
   .. automethod:: _get_category_data
   .. automethod:: _compute_basic_net
   .. automethod:: _get_basic_wage_line_codes
   .. automethod:: _get_gross_wage_line_codes
   .. automethod:: _get_net_wage_line_codes
   .. automethod:: _action_refund_payslips
   .. automethod:: _action_correct_payslips
   .. automethod:: refund_sheet
   .. automethod:: _get_payslip_family
   .. automethod:: _compute_issues
   .. automethod:: _issues_dependencies
   .. automethod:: _get_payslips_to_compute_issues
   .. automethod:: _get_error_message
   .. automethod:: _get_pdf_reports
   .. automethod:: _generate_pdf
   .. automethod:: _get_payslips_pdf_lang
   .. automethod:: _prepare_payslip_pdf_content
   .. automethod:: _pdf_post_create
   .. automethod:: _get_email_template
   .. automethod:: _check_send_payslip_mail
   .. automethod:: _get_data_files_to_update
   .. automethod:: _update_payroll_data
   .. automethod:: _get_payroll_translation

.. automodel:: odoo.addons.hr_payroll.models.hr_payslip_line.HrPayslipLine()
   :main:

   .. autofield:: slip_id
   .. autofield:: salary_rule_id
   .. autofield:: code
   .. autofield:: category_ids
   .. autofield:: amount
   .. autofield:: quantity
   .. autofield:: rate
   .. autofield:: total
   .. autofield:: ytd
   .. autofield:: explanation
   .. autofield:: manually_modified

   .. automethod:: create

.. automodel:: odoo.addons.hr_payroll.models.hr_payslip_worked_days.HrPayslipWorkedDays()
   :main:

   .. autofield:: payslip_id
   .. autofield:: work_entry_type_id
   .. autofield:: code
   .. autofield:: version_id
   .. autofield:: number_of_days
   .. autofield:: number_of_hours
   .. autofield:: is_paid
   .. autofield:: amount
   .. autofield:: category_options_ids
   .. autofield:: ytd

   .. automethod:: _compute_amount
   .. automethod:: _compute_is_paid
   .. automethod:: _compute_fte

.. automodel:: odoo.addons.hr_payroll.models.hr_payslip_input.HrPayslipInput()
   :main:

   .. autofield:: payslip_id
   .. autofield:: salary_rule_id
   .. autofield:: code
   .. autofield:: name
   .. autofield:: amount
