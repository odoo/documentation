.. _reference/payroll/hr_salary_rule:

.. py:currentmodule:: odoo.addons.hr_payroll.models

===========================
Salary structures and rules
===========================

The computation of a payslip is entirely defined by data: a **salary structure**
(`hr.payroll.structure`) is an ordered list of **salary rules** (`hr.salary.rule`), and each rule
computes one line of the payslip. Rules credit their totals to **categories**
(`hr.salary.rule.category`), whose running totals the next rules read (e.g. the net salary is
the sum of the basic, allowance and deduction categories). Structures are grouped by **structure
type** (`hr.payroll.structure.type`), which is what an employee version points to.

.. graphviz::

   digraph structures {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      version [label="hr.version"];
      stype [label="hr.payroll.structure.type\n(e.g. Employee)"];
      struct [label="hr.payroll.structure\n(e.g. Regular Pay, 13th Month)"];
      rule [label="hr.salary.rule\n(BASIC, GROSS, TAX, NET...)"];
      categ [label="hr.salary.rule.category\n(BASIC, ALW, DED, NET...)"];
      section [label="hr.salary.rule.section"];
      version -> stype [label="structure_type_id"];
      version -> struct [label="structure_id\n(= default_struct_id)"];
      stype -> struct [label="struct_ids,\ndefault_struct_id"];
      struct -> rule [label="rule_ids"];
      rule -> categ [label="category_ids"];
      rule -> section [label="input_section"];
      categ -> categ [label="parent_id"];
   }

Localizations ship their structures, rules and categories as module data (see
:ref:`reference/payroll/localization`); users can adapt them or create their own.

.. _reference/payroll/hr_salary_rule/structure_type:

Structure types
---------------

The model `hr.payroll.structure.type` is defined in `hr` (name, country, default working
schedule, see :ref:`reference/hr/hr_organization`), so that employee versions can reference it
without the payroll. `hr_payroll` adds the payroll configuration:

`struct_ids`, `default_struct_id`
   The structures of the type, and the **regular pay** structure among them. A payslip is
   *regular* (`hr.payslip.is_regular`) when its structure is the `default_struct_id` of its
   type; other structures are used for off-cycle payslips (13th month, double holidays, final
   pay...). New payslips take the `default_struct_id` of the version's structure type.

`wage_type`
   `monthly` (*Fixed Wage*) or `hourly`. Copied to `hr.version.wage_type` when the structure type
   of a version changes; see :ref:`reference/payroll/hr_version`.

`default_schedule_pay`
   The pay frequency (`monthly`, `weekly`, `bi-weekly`, ...), copied to
   `hr.version.schedule_pay`. The available frequencies come from
   :meth:`~hr_payroll_structure_type.HrPayrollStructureType._get_selection_schedule_pay`, which
   localizations override to restrict them (e.g. `l10n_bd_hr_payroll` only keeps `monthly`
   for Bangladeshi companies).

`default_work_entry_type_id`
   The work entry type of regular attendances. By default, the `002.00` type of the company
   country, or the generic attendance type. See :ref:`reference/payroll/work_entries`.

`salary_benefits_ids`
   The salary benefits taken into account in the yearly cost of the versions.

.. _reference/payroll/hr_salary_rule/structure:

Structures
----------

A structure (`hr.payroll.structure`) has a required `type_id`, a `country_id` and the list of
its rules (`rule_ids`). Rules are many2many: a rule can belong to several structures, and its
`code` must be unique within each of its structures.

Other fields configure the payslips using the structure:

- `report_id`: the QWeb PDF report of the payslips;
- `payslip_name`: the name of the payslips (e.g. *End of Year Bonus*), *Salary Slip* if empty;
- `use_worked_day_lines`: if unset, the payslips have no worked days lines (bonus structures);
  `categories` is then not pre-filled (see
  :ref:`below <reference/payroll/hr_salary_rule/categories>`);
- `ytd_computation`: displays the year-to-date amounts on the payslips;
- `employee_type_ids`: the employee types the structure is meant for;
- `schedule_pay`: related to the pay frequency of the structure type.

.. important::
   A structure created without `rule_ids` gets copies of the generic rules of the archived
   `hr_payroll.default_structure` (basic salary, gross, net, attachments, deductions,
   reimbursements), see :meth:`~hr_payroll_structure.HrPayrollStructure._get_default_rule_ids`.
   This is convenient in the user interface but not in module data, where the rules are declared
   separately: data files always set `<field name="rule_ids" eval="[]"/>` on structures.

`version_properties_definition` holds the definition of the payroll properties of the versions
using the structure (`hr.version.payroll_properties`): one float property per rule flagged
`input_usage_employee`, grouped by section. It is rebuilt by
:meth:`~hr_payroll_structure.HrPayrollStructure._sync_properties_to_definition` each time a rule
is created, modified or deleted; never write it directly. See
:ref:`reference/payroll/hr_salary_rule/inputs`.

.. _reference/payroll/hr_salary_rule/categories:

Categories
----------

A category (`hr.salary.rule.category`) is a named amount the rules contribute to: its `code` is
the key of the `categories` dictionary available in the rules. During the computation of a
payslip:

#. `categories` is **pre-filled from the worked days**: the amount of each worked days line is
   added to the categories of its work entry type (`hr.work.entry.type.category_ids`) and to
   their ancestors. This is how the attendance and paid time off amounts reach the `BASIC`
   category without any rule.
#. Each computed rule adds its total to its categories (`category_ids`, a rule can have several)
   and to their ancestors.

The parent of a category (`parent_id`) is therefore not only for reporting, despite its help
text: a rule in `TAXES` (child of `DED`) also increases `categories['DED']`.

`hr_payroll` defines the base categories, without parents: `BASIC`, `ALW` (allowances), `GROSS`,
`DED` (deductions), `NET`, `COMP` (company contributions) and `EXTRA_HOURS`. Localizations add
their own categories, usually as children of these ones (`country_id` set to their country).
The usual conventions are:

- the basic salary rule is `result = categories['BASIC']`, **without category** (it would
  double the amount already pre-filled from the worked days);
- deductions are negative amounts, so that the net salary is a plain sum:
  `result = categories['BASIC'] + categories['ALW'] + categories['DED']`;
- employer costs (`COMP`) are not part of the net.

.. example::

   On a payslip of an employee working the whole month for a wage of 35000, before any rule
   is computed:

   .. code-block:: python

      localdict = payslip._get_localdict()
      dict(localdict['categories'])
      # {'BASIC': 35000.0}, from the worked days line of the attendance type 002.00

Categories also carry the **premium pay** configuration (`is_premium_pay`,
`premium_amount_per_hour`, `premium_amount_per_day`, `premium_percentage_hourly_rate`), and can
be offered as *options* on time off of some work entry types (`optional_on_work_entry_type_ids`):
the hours carrying an option are summed by category code in the `category_options` variable of
the rules.

.. _reference/payroll/hr_salary_rule/rules:

Salary rules
------------

A rule (`hr.salary.rule`) has a `name` (the default label of the payslip line), a `code` (the
variable name of its total in the next rules: use a valid Python identifier), its structures
(`struct_ids`, required), its categories (`category_ids`) and a `country_id`. Then:

Order of computation
   Rules are computed by increasing `sequence`. Rules with a higher `round_of_computation` are
   computed later: all the payslips computed together (e.g. a pay run) run round 0, then round 1,
   etc. This is needed when a rule depends on the results of other payslips of the same batch
   (see :ref:`reference/payroll/hr_payslip`).

Condition and amount
   `condition_select` and `amount_select`, with the related fields; see
   :ref:`reference/payroll/hr_salary_rule/python`.

Display
   `appears_on_payslip` (`always`, `never`, `non_zero`) filters the lines **on the PDF only**:
   the line is always created and always counts in its categories. `title`, `bold`, `italic`,
   `underline`, `indented`, `space_above`, `color`, `hide_amount` and `note` control the
   rendering; `display_in_pdf_extra_info` moves the amount to an *Additional Information*
   section.

Explanation
   `explanation_template` is a translatable `str.format` template filled with the
   `explanation_info` dict set by the rule code, stored on the line (`explanation`).

Accounting and costs
   `partner_id` is the third party paid by the rule (with `hr_payroll_account`, which also adds
   the accounts). `appears_on_employee_cost_dashboard` includes the line in the employer cost.

Copying a rule appends `_COPY` to its code, to keep codes unique in its structures.

.. _reference/payroll/hr_salary_rule/python:

Condition and amount of a rule
------------------------------

For each payslip, the engine resets the outputs of the rule (`result = None`, `result_qty = 1.0`,
`result_rate = 100`, `result_name = False`, `explanation_info = {}`), evaluates the condition
(:meth:`~hr_salary_rule.HrSalaryRule._satisfy_condition`), and if it is satisfied, computes the
amount, quantity and rate of the line (:meth:`~hr_salary_rule.HrSalaryRule._compute_rule`). The
total of the line is::

   total = amount * quantity * rate / 100

(`hr.payslip._get_payslip_line_total`, which localizations override to round the totals).

.. list-table:: Conditions (`condition_select`)
   :header-rows: 1
   :widths: 20 80

   * - Value
     - The rule is computed if...
   * - `none`
     - always (*Always Present*).
   * - `python`
     - the code of `condition_python` assigns a truthy value to `result`. A code that does not
       assign `result` is false.
   * - `domain`
     - the payslip matches the domain of `condition_domain`. The domain applies to `hr.payslip`,
       e.g. `[('employee_id.disabled', '=', False)]`.
   * - `property_input`
     - the payslip has an input line with the code of the rule and a non-zero amount (*Input
       Value*). Choosing it also sets `amount_select` to `property_input`.

.. list-table:: Amounts (`amount_select`)
   :header-rows: 1
   :widths: 20 80

   * - Value
     - amount, quantity and rate of the line
   * - `fix`
     - `amount_fix`; the evaluation of `quantity` (an expression, `'1.0'` by default); 100.
   * - `percentage`
     - the evaluation of `amount_percentage_base`; the evaluation of `quantity`;
       `amount_percentage`.
   * - `code`
     - the code of `amount_python_compute` is executed: `result`, `result_qty` and
       `result_rate`.
   * - `property_input`
     - the amount of the input line with the code of the rule (0 if there is none); 1; 100.

.. _reference/payroll/hr_salary_rule/python/code:

Python code of a rule
---------------------

`condition_python`, `amount_python_compute`, `quantity` and `amount_percentage_base` are
evaluated with :func:`~odoo.tools.safe_eval.safe_eval` in the **evaluation context of the
payslip** (the *localdict*). A python condition or amount code is a sequence of statements and
sets these variables:

`result`
   The amount of the line (python amount), or the value of the condition (python condition).

`result_qty`
   The quantity of the line (default `1.0`).

`result_rate`
   The rate of the line, in percent (default `100`).

`result_name`
   The label of the line, instead of the name of the rule.

`explanation_info`
   The values used to format `explanation_template`.

The main variables of the context are listed below. The full description of the localdict, and
how to add keys to it, is in :ref:`reference/payroll/hr_payslip`.

.. list-table::
   :header-rows: 1
   :widths: 25 75

   * - Variable
     - Content
   * - `payslip`, `employee`, `version`, `company`
     - The `hr.payslip` being computed, its `hr.employee`, `hr.version` and `res.company`, e.g.
       `version.wage`, `employee.disabled`, `payslip.date_to`. `payroll_config` is the payroll
       configuration (`payroll.config.settings`) of the payslip.
   * - `categories`
     - `{category code: total so far}`, missing codes are 0: `categories['GROSS']`.
   * - `result_rules`
     - `{rule code: {'total', 'amount', 'quantity', 'rate', 'ytd'}}` of the rules computed so
       far, zeros for missing codes: `result_rules['GROSS']['total']`.
   * - `<RULE_CODE>`
     - The total of a rule already computed, e.g. `BASIC`. Raises `NameError` if the rule was
       not computed (condition not satisfied, or later sequence).
   * - `worked_days`
     - `{work entry type code: hr.payslip.worked_days}`, fields `number_of_days`,
       `number_of_hours`, `amount`. Missing codes raise `KeyError`.
   * - `inputs`
     - `{rule code: hr.payslip.input}`, field `amount` (and `name`). Missing codes raise
       `KeyError`.
   * - `category_options`
     - `{category code: hours}` of the worked days carrying a category option.
   * - `work_entries`
     - The generated work entry values (dicts) of the payslip period.
   * - helpers
     - `float_round`, `float_compare`, `relativedelta`, `ceil`, `floor`, `date`, `datetime`,
       `defaultdict`, `UserError`.

Methods of the payslip are commonly used in rules: `payslip._rule_parameter(code)` (see
:ref:`reference/payroll/hr_rule_parameter`), `payslip._sum(code, from_date, to_date)` (totals of
a rule on the previous validated payslips of the employee), `payslip._sum_category(...)`,
`payslip._sum_worked_days(...)`.

.. example::

   Typical rules (real ones from `l10n_bd_hr_payroll/data/hr_salary_rule_data.xml`):

   .. code-block:: python

      # BASIC, no category: the amount of the worked days
      result = categories['BASIC']

      # ATTACH_SALARY, condition (python)
      result = 'ATTACH_SALARY' in inputs
      # ATTACH_SALARY, amount (python): a deduction is negative
      result = -inputs['ATTACH_SALARY'].amount
      result_name = inputs['ATTACH_SALARY'].name

      # TAXES (shortened): progressive brackets from a rule parameter
      yearly_taxable_amount = result_rules['TAXABLE_AMOUNT']['total'] * 12
      income_tax = 0
      for amount, rate in payslip._rule_parameter('l10n_bd_yearly_tax_rates'):
          taxable_in_current = min(yearly_taxable_amount, amount)
          yearly_taxable_amount -= taxable_in_current
          income_tax += taxable_in_current * rate
      result = -income_tax / 12

      # NET
      result = categories['BASIC'] + categories['ALW'] + categories['DED']

.. example::

   Adding rules to a structure: a meal allowance per worked day, using `result_qty` and
   `result_name`, and a seniority bonus with an explanation.

   .. code-block:: python

      from odoo.fields import Command

      struct = env.ref('l10n_bd_hr_payroll.hr_payroll_structure_bd_employee_salary')
      env['hr.salary.rule'].create([{
          'name': 'Meal Allowance',
          'code': 'MEAL',
          'sequence': 50,
          'struct_ids': [Command.link(struct.id)],
          'category_ids': [Command.link(env.ref('hr_payroll.ALW').id)],
          'condition_select': 'python',
          'condition_python': "result = '002.00' in worked_days",
          'amount_select': 'code',
          'amount_python_compute': (
              "days = sum(worked_days['002.00'].mapped('number_of_days'))\n"
              "result = 150\n"
              "result_qty = days\n"
              "result_name = 'Meal Allowance (%s days)' % days\n"
          ),
      }, {
          'name': 'Seniority Bonus',
          'code': 'SENIORITY',
          'sequence': 6,
          'struct_ids': [Command.link(struct.id)],
          'category_ids': [Command.link(env.ref('hr_payroll.ALW').id)],
          'condition_select': 'none',
          'amount_select': 'code',
          'amount_python_compute': (
              "years = relativedelta(payslip.date_to, version.contract_date_start).years\n"
              "result = BASIC * 0.01\n"
              "result_qty = years\n"
              "explanation_info = {'basic': BASIC, 'years': years}\n"
          ),
          'explanation_template': "1% of {basic} x {years} years",
      }])
      payslip.compute_sheet()
      payslip.line_ids.filtered(lambda l: l.code in ('MEAL', 'SENIORITY')).mapped(
          lambda l: (l.code, l.name, l.amount, l.quantity, l.total, l.explanation))
      # [('SENIORITY', 'Seniority Bonus', 350.0, 6.0, 2100.0, '1% of 35000.0 x 6 years'),
      #  ('MEAL', 'Meal Allowance (22.0 days)', 150.0, 22.0, 3300.0, False)]

   And a percentage rule with a domain condition, which gives a line of amount -35000, rate 5
   and total -1750 to the employees who are not disabled:

   .. code-block:: python

      env['hr.salary.rule'].create({
          'name': 'Pension Fund',
          'code': 'PENSION',
          'sequence': 150,
          'struct_ids': [Command.link(struct.id)],
          'category_ids': [Command.link(env.ref('hr_payroll.DED').id)],
          'condition_select': 'domain',
          'condition_domain': "[('employee_id.disabled', '=', False)]",
          'amount_select': 'percentage',
          'amount_percentage_base': "-categories['BASIC']",
          'amount_percentage': 5.0,
          'quantity': '1.0',
      })

An error in the code of a rule raises a `UserError` giving the employee, the payslip, the rule
and the original error, e.g. `KeyError('LEAVE110')` for `worked_days['LEAVE110']` on a payslip
without such worked days.

.. _reference/payroll/hr_salary_rule/python/pitfalls:

Writing robust rule code
------------------------

- `worked_days[code]` and `inputs[code]` raise `KeyError` when the code is absent: test
  `'X' in worked_days` first, or use `inputs.get('X')`. On the contrary, `categories` and
  `result_rules` return 0 for any code, so a misspelled code silently gives 0.
- `worked_days[code]` is a recordset that may contain several lines (several versions in the
  period, category options): use `sum(worked_days[code].mapped('amount'))` rather than
  `worked_days[code].amount`.
- Several input lines with the same code are aggregated in `inputs[code]` (summed `amount`), and
  the rule is computed **once per input line**, producing one payslip line each. In that case,
  the rule code is not defined as a variable for the next rules: use `result_rules`.
- Every variable assigned by a rule stays in the context for the next rules of the payslip. Do
  not rely on a variable set by another rule (it may not be computed), and initialize the
  variables you use: a variable assigned only in some branches keeps the value of a previous
  rule in the others.
- A rule code is a variable only once the rule is computed: use `result_rules['CODE']['total']`
  to read the total of a rule that may not apply.
- The order is given by `round_of_computation`, then `sequence`, not by the order of the
  records: a rule must come after the rules it reads.

.. _reference/payroll/hr_salary_rule/inputs:

Rules as inputs
---------------

A rule can also define an **input**: a value entered by the user and read by the rule through
`inputs[code]`. Input values come from three sources, all stored as `hr.payslip.input` lines
pointing to the rule (`salary_rule_id`):

`input_usage_employee`
   The value is set on the employee version, as a payroll property named after the rule code
   (`hr.version.payroll_properties`, see :ref:`reference/payroll/hr_version/properties`).
   `input_name`, `input_suffix`, `input_default_value` and `input_section` define the property.

`input_usage_payslip` (*Available on Payslip*)
   The value is entered on the payslip, or comes from a salary attachment (*payslip adjustment*)
   of the employee, see :ref:`reference/payroll/hr_salary_attachment`.

`input_selected_by_default`
   New payslips get an input line with `input_default_value`, even if it is 0.

`user_instructions` explains to the user what to enter. A rule whose condition or amount is
`property_input` must have `input_usage_employee` or `input_usage_payslip` (otherwise it could
never receive a value), and its code may only contain letters, digits and underscores.

Sections (`hr.salary.rule.section`) group the employee inputs in the version form: each section
is a separator of the properties definition, ordered by `sequence`. A rule without section is
not part of the definition. `hr_payroll.default_salary_rule_section` (*Inputs*) is the default
section.

.. _reference/payroll/hr_salary_rule/reset:

Customized rules and resets
---------------------------

Localization data is updated with the law, but users also adapt rules. To combine both, when a
user changes a field of the computation (:meth:`~hr_salary_rule.HrSalaryRule._get_critical_fields`:
code, categories, structures, sequence, condition and amount fields) on a rule created by the
system, the rule is flagged `modified_by_user` and its XML ids become `noupdate`: module updates
no longer overwrite it. :meth:`~hr_salary_rule.HrSalaryRule.action_reset_rule` reverts this and
reloads the payroll data files of the country. Rules created by the system cannot be deleted by
users, only archived.

A reset rewrites only the fields present in the data files. This is why the rules declared in
module data must explicitly set the fields relevant to their type
(:meth:`~hr_salary_rule.HrSalaryRule._get_reset_required_explicit_fields`), and set
`category_ids` with a single `[(5, 0, 0)]` or `[(6, 0, [...])]` command: otherwise, a warning
is logged at install. See :ref:`reference/payroll/localization`.

.. _reference/payroll/hr_salary_rule/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_payroll_structure_type.HrPayrollStructureType()

   .. autofield:: default_struct_id
   .. autofield:: struct_ids
   .. autofield:: wage_type
   .. autofield:: default_schedule_pay
   .. autofield:: default_work_entry_type_id

   .. automethod:: _get_selection_schedule_pay

.. automodel:: odoo.addons.hr_payroll.models.hr_payroll_structure.HrPayrollStructure()
   :main:

   .. autofield:: type_id
   .. autofield:: rule_ids
   .. autofield:: report_id
   .. autofield:: use_worked_day_lines
   .. autofield:: version_properties_definition

   .. automethod:: _get_default_rule_ids
   .. automethod:: _sync_properties_to_definition

.. automodel:: odoo.addons.hr_payroll.models.hr_salary_rule.HrSalaryRule()
   :main:

   .. autofield:: code
   .. autofield:: struct_ids
   .. autofield:: category_ids
   .. autofield:: sequence
   .. autofield:: round_of_computation
   .. autofield:: condition_select
   .. autofield:: amount_select
   .. autofield:: appears_on_payslip
   .. autofield:: input_usage_employee
   .. autofield:: input_usage_payslip

   .. automethod:: _satisfy_condition
   .. automethod:: _compute_rule
   .. automethod:: _get_critical_fields
   .. automethod:: _get_reset_required_explicit_fields
   .. automethod:: action_reset_rule
   .. automethod:: _get_report_field_name

.. automodel:: odoo.addons.hr_payroll.models.hr_salary_rule_category.HrSalaryRuleCategory()
   :main:

   .. autofield:: code
   .. autofield:: parent_id
   .. autofield:: is_premium_pay

   .. automethod:: _get_codes_with_ancestors
   .. automethod:: _get_seized_categories

.. automodel:: odoo.addons.hr_payroll.models.hr_salary_rule_section.HrSalaryRuleSection()
   :main:
