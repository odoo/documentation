.. _reference/payroll/salary_configurator:

.. py:currentmodule:: odoo.addons.hr_contract_salary.models

===================
Salary configurator
===================

The salary configurator (`hr_contract_salary`, enterprise, *Salary Configurator* in the apps)
lets an applicant or an employee build their own salary package on a public web page, within an
employer budget set by HR: they choose their benefits (company car, meal vouchers, extra time
off...), see the gross and net salary computed live by the payroll, enter their personal
information and sign their contract. The signature creates a new version of the employee.

The module depends on `hr_payroll`, `hr_recruitment`, `sign` and `hr_sign`. In Odoo 20.0, the
former bridge modules `hr_contract_salary_payroll` and `hr_contract_salary_holidays` are merged
into it, and the benefit models (`hr.contract.salary.benefit` and its type) are defined by
`hr_payroll`, which uses them to compute the yearly cost of the versions.

.. seealso::
   - :ref:`reference/hr/hr_version`: versions and contract templates, on which the configurator
     is built;
   - :ref:`reference/payroll/hr_version`: the wage, the yearly cost and the payroll properties of
     the versions;
   - :ref:`reference/payroll/hr_payslip`: the payslip computation used for the simulation.

.. _reference/payroll/salary_configurator/models:

Models
------

.. graphviz::

   digraph salary_configurator {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      applicant [label="hr.applicant"];
      employee [label="hr.employee"];
      job [label="hr.job"];
      offer [label="hr.contract.salary.offer"];
      template [label="hr.version\n(contract template)"];
      version [label="hr.version\n(employee version)"];
      signatory [label="hr.contract.signatory"];
      request [label="sign.request"];
      stype [label="hr.payroll.structure.type"];
      benefit [label="hr.contract.salary.benefit"];
      btype [label="hr.contract.salary.benefit.type"];
      resume [label="hr.contract.salary.resume"];
      info [label="hr.contract.salary.personal.info"];
      applicant -> offer [label="salary_offer_ids"];
      employee -> offer [label="employee_id"];
      job -> template [label="contract_template_id"];
      offer -> template [label="contract_template_id"];
      offer -> version [label="employee_version_id"];
      version -> offer [label="originated_offer_id"];
      offer -> signatory [label="sign_template_signatories_ids"];
      offer -> request [label="sign_request_ids"];
      version -> stype [label="structure_type_id"];
      stype -> benefit [label="salary_benefits_ids"];
      benefit -> btype [label="benefit_type_id"];
      resume -> benefit [label="benefit_ids"];
      info -> stype [label="structure_type_id"];
   }

`hr.contract.salary.offer` (*Offer*)
   A salary proposal for an applicant (`applicant_id`) or an employee (`employee_id`), based on a
   **contract template** (`contract_template_id`, an `hr.version` without employee, see
   :ref:`reference/hr/hr_version/templates`). It holds the employer budget, the contract dates,
   the document to sign (`sign_template_id`) and its signatories, the access token and the
   expiration date of the link, and a state.

`hr.contract.salary.benefit` (*Benefit*)
   A benefit of a salary structure type, stored in a field of `hr.version` (`res_field_id`) or in
   a payroll property (`salary_rule_id`). `hr_payroll` defines the model and its cost
   (`cost_res_field_id`); `hr_contract_salary` adds how it is displayed in the configurator.
   `hr.contract.salary.benefit.type` groups the benefits and gives their `periodicity`
   (`monthly` or `yearly`); `hr.contract.salary.benefit.value` holds the options of the radio
   and dropdown benefits.

`hr.contract.salary.personal.info` (*Personal Info*)
   A personal information asked to the applicant (address, bank account, ID card...): a field of
   `hr.employee`, `hr.version` or `res.partner.bank`, grouped by
   `hr.contract.salary.personal.info.type`.

`hr.contract.salary.resume` (*Salary Package Summary*)
   A line of the package summary displayed next to the benefits (gross, net, monthly benefits,
   employer cost...), grouped by `hr.contract.salary.resume.category`.

`hr.contract.signatory`
   Who signs a role of the contract document: the employee, the HR responsible of the version or
   a specific partner, in a given order. Contract templates hold the signatories of the new
   contract document (`sign_template_signatories_ids`) and of the contract update document
   (`contract_update_signatories_ids`); offers copy them.

A benefit always belongs to one structure type; personal infos and resume lines without
structure type are generic and apply to every structure type.

.. _reference/payroll/salary_configurator/lifecycle:

Offer lifecycle
---------------

#. **Generation.** HR generates an offer from an applicant
   (:meth:`~hr_applicant.HrApplicant.action_generate_offer`), from a version
   (:meth:`~hr_version.HrVersion.action_generate_offer`) or from an employee
   (:meth:`~hr_employee.HrEmployee.action_generate_offer`, which opens a new simulation offer
   form). The contract template of an applicant offer is the one of the job
   position (`hr.job.contract_template_id`), else any template of the company
   (:meth:`hr_applicant.HrApplicant._get_contract_template`); for an employee offer, it is the
   version itself. The initial budget is the `final_yearly_costs` of the template.
#. **Configuration.** The applicant opens `/salary_package/simulation/offer/<offer id>?token=...`
   (the `url` field). Each change of a benefit calls the `/salary_package/update_salary` route,
   which simulates the package and returns the new summary. Nothing is written in the database.
#. **Submission.** The `/salary_package/submit` route creates an **archived** version (and an
   archived employee for an applicant) with the chosen benefits and personal information, and a
   signature request of the offer document, linked to the version and to the offer.
#. **Signature.** When the applicant signs, the offer becomes `half_signed` (*Partially Signed*).
   When all the signatories have signed, it becomes `full_signed`: the new version, the employee
   and its work contact are activated, and the applicant moves to the *Hired* stage.

An offer can also be `refused`
(:meth:`~hr_contract_salary_offer.HrContractSalaryOffer.action_refuse_offer`, or by the applicant
from the page), `expired` (daily cron
:meth:`~hr_contract_salary_offer.HrContractSalaryOffer._cron_update_state`, once `offer_end_date`
is passed) or `cancelled` (when its signature request is cancelled). Refusing or cancelling an
offer deletes the archived version it created
(:meth:`~hr_contract_salary_offer.HrContractSalaryOffer.unlink_archived_version_offer`).

**Simulation offers** (`is_simulation_offer`, created from the employee form) only show the
salary computation to HR: they cannot be submitted, only the personal infos impacting the net
salary are displayed, and a cron deletes them after a while.

.. example::

   An offer for an applicant, whose job uses a US contract template:

   .. code-block:: python

      template = env['hr.version'].search([
          ('name', '=', 'Developer USA'),
          ('employee_id', '=', False),
      ])
      template.wage, template.final_yearly_costs
      # (3000.0, 36000.0)
      applicant = env['hr.applicant'].search([('partner_name', '=', 'Johan Duck')], limit=1)
      applicant.job_id.contract_template_id = template

      action = applicant.action_generate_offer()
      offer = env['hr.contract.salary.offer'].browse(action['res_id'])
      offer.state, offer.contract_template_id.name, offer.budget_type, offer.final_yearly_costs
      # ('open', 'Developer USA', 'yearly_employer', 36000.0)
      offer.employee_id
      # hr.employee()
      offer.url
      # 'http://localhost:8069/salary_package/simulation/offer/7?final_yearly_costs=36000.0&t...'
      offer.gross_wage, round(offer.net_wage, 2), offer.monthly_employer_cost
      # (3000.0, 2500.41, 3000.0)

      reason = env.ref('hr_contract_salary.refusal_reason_others')
      offer.action_refuse_offer(refusal_reason=reason.id)
      offer.state, offer.refusal_reason.name
      # ('refused', 'Others')

.. _reference/payroll/salary_configurator/simulation:

Simulation context
------------------

To compute a package, the configurator writes on a version, may create an employee, and creates
a payslip, then throws everything away. This is done in a savepoint by the
`hr_version_context()` context manager (`odoo.addons.hr_contract_salary.utils.hr_version`): it
flushes, opens a savepoint, yields the records (or the request) with the `salary_simulation`,
`is_simulation_offer` and `tracking_disable` context keys, and **rolls back** the savepoint at the
end. With `invalidate=True`, it also invalidates the cache of the versions afterwards; with
`employees=...`, it prevents the recomputation of their existing payslips.

The methods meant to run only in such a context are decorated with
`@requires_hr_version_context()` and raise a `RuntimeError` otherwise:

- :meth:`~hr_contract_salary_offer.HrContractSalaryOffer._get_version` returns the version used
  for the simulation: the current version of the employee of the offer or, for an applicant, of
  a new archived employee (named after the applicant) on which the contract template values are
  applied. Its wage is set from the yearly cost of the offer
  (:meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion._get_wage_from_yearly_costs`).
  For a `half_signed` offer, it returns the version created by the offer instead.
- :meth:`~hr_version.HrVersion._generate_salary_simulation_payslip` creates a payslip of the
  current period for the version, with one worked days line for the whole working schedule
  (time off is not considered). Its lines are read with `_get_payslip_lines()` (see
  :ref:`reference/payroll/hr_payslip/computation`). The payslip has the `salary_simulation`
  context key, which salary rules can test, and the `simulation_working_schedule` context key
  (`'80'`, `'50'`...) simulates a part time.

.. example::

   .. code-block:: python

      from odoo.addons.hr_contract_salary.utils.hr_version import hr_version_context

      offer._get_version()
      # RuntimeError: Method '_get_version' must be called within a savepoint context. Use
      # `hr_version_context(...)` context manager before calling this method.

      with hr_version_context(offer) as sim_offer:
          version = sim_offer._get_version()
          version.employee_id.name, version.employee_id.active, version.wage
          # ('Johan Duck', False, 3000.0)
          payslip = version._generate_salary_simulation_payslip()
          payslip.date_from, payslip.date_to, payslip.struct_id.name
          # (date(2026, 10, 1), date(2026, 10, 31), 'United States: Regular Pay')
          [(line['code'], round(line['total'], 2)) for line in payslip._get_payslip_lines()
           if line['code'] in ('BASIC', 'GROSS', 'FIT', 'NET')]
          # [('BASIC', 3000.0), ('GROSS', 3000.0), ('FIT', -178.33), ('NET', 2500.41)]

      env['hr.employee'].with_context(active_test=False).search_count([
          ('name', '=', 'Johan Duck'),
      ])
      # 0: the simulated employee was rolled back

.. _reference/payroll/salary_configurator/budget:

Employer budget and package
---------------------------

The budget of an offer is `salary_amount`, expressed according to `budget_type`;
`final_yearly_costs` (*Employer Budget*) is the corresponding yearly employer cost
(:meth:`~hr_contract_salary_offer.HrContractSalaryOffer._compute_final_yearly_costs`):

`yearly_employer` (default)
   `salary_amount` is the yearly employer cost.

`monthly_gross`
   `salary_amount` is the gross per pay period, converted with
   :meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion._get_employer_costs_from_gross`
   (`gross * pay periods per year + benefits costs`).

`monthly_net`
   `salary_amount` is the net: the gross giving this `NET` payslip line is searched by
   iterations on simulated payslips, then converted as above.

From the yearly cost, the wage of the simulated version is
:meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion._get_wage_from_yearly_costs`, the
inverse of :meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion._get_yearly_cost_from_wage`:
the yearly cost of the benefits (their cost fields) is deducted before the wage is computed, so
choosing a more expensive benefit lowers the wage at constant budget. These hooks, and the way
localizations override them, are described in :ref:`reference/payroll/hr_version/yearly_cost`.

The offer then shows the package of the simulated version
(:meth:`~hr_contract_salary_offer.HrContractSalaryOffer._compute_salary`): `gross_wage` and
`net_wage` (the `BASIC` and `NET` lines of the simulated payslip), `monthly_benefits` and
`yearly_benefits` (:meth:`~hr_contract_salary_offer.HrContractSalaryOffer._get_benefits`, the
`sum` resume lines of the *Monthly Benefits* and *Yearly Benefits* categories),
`yearly_employer_cost` and `monthly_employer_cost`.

.. example::

   With the offer above (no benefit with a cost on this structure type):

   .. code-block:: python

      offer.write({'budget_type': 'monthly_gross', 'salary_amount': 3500})
      offer.final_yearly_costs, offer.gross_wage, round(offer.net_wage, 2)
      # (42000.0, 3500.0, 2873.66)
      offer.write({'budget_type': 'monthly_net', 'salary_amount': 3000})
      round(offer.final_yearly_costs, 2), round(offer.gross_wage, 2), round(offer.net_wage, 2)
      # (44030.9, 3669.24, 3000.0)

.. _reference/payroll/salary_configurator/benefits:

Benefits
--------

A benefit is defined per structure type (`structure_type_id`) and has a **source**:

`field`
   The value is the `hr.version` field `res_field_id` (`field` is its name). The usable fields
   are those of :meth:`~odoo.addons.hr_payroll.models.hr_version.HrVersion._get_benefit_fields`,
   restricted to the generic fields and to those of the localization of the structure type.

`rule`
   The value is the payroll property of the salary rule `salary_rule_id` (an employee input,
   see :ref:`reference/payroll/hr_version/properties`). When a version is created from the
   configurator, these values are written with `_set_property_input_value()`. The display type
   must be `always`, `radio`, `slider` or `manual`.

`cost_res_field_id` is the version field holding the cost of the benefit for the employer; the
yearly cost of the benefits (12 times the monthly ones, depending on the `periodicity` of the
benefit type, plus the yearly ones) is part of the yearly cost of the version.

The configurator part of the benefit (`hr_contract_salary`):

- `is_configurable_benefit`: only these benefits are displayed on the page;
- `display_type`: `always` (displayed, not editable), `dropdown`, `dropdown-group` (options
  grouped by section), `radio`, `slider` (`slider_min`, `slider_max`, `slider_step`), `manual`
  (free input, written in `manual_res_field_id` if set), `text`. The options of the dropdown and
  radio benefits are `value_ids`;
- `folded` with `fold_res_field_id`: the benefit is behind a checkbox (e.g. *Company Car*) whose
  value is the boolean field `fold_field`; an unchecked folded benefit is ignored in the sums;
- `benefit_ids` (*Mandatory Benefits*): benefits that must be selected to enable this one;
- `activity_type_id` (with `activity_creation` and `activity_creation_type`) and
  `sign_template_id`: an activity scheduled, or an additional document to sign, when the
  benefit is chosen, at the employee signature (`running`) or at the countersignature;
- `requested_documents_field_ids`: binary fields of the version (e.g. driving license) asked
  when the benefit is chosen; the matching personal infos become required.

The page groups the benefits by benefit type. The inputs of a benefit are named after its field:
`<field>` for its value, `fold_<field>` for the checkbox of a folded benefit, `<field>_manual`,
`<field>_radio`, `<field>_text` and `select_<field>` depending on the display type.

.. example::

   A monthly meal allowance stored in a new version field, also used as its cost. A manual field
   is created here for the example; a module would declare a `fields.Float` on `hr.version`.

   .. code-block:: python

      env['ir.model.fields'].create({
          'model_id': env['ir.model']._get_id('hr.version'),
          'name': 'x_meal_allowance',
          'field_description': 'Meal Allowance',
          'ttype': 'float',
      })
      field = env['ir.model.fields']._get('hr.version', 'x_meal_allowance')
      version = env['hr.employee'].search([('name', '=', 'Troy Cruz')]).version_id
      version.structure_type_id.name, version.wage, version.final_yearly_costs
      # ('United States: Employee', 8700.0, 104400.0)

      benefit = env['hr.contract.salary.benefit'].create({
          'name': 'Meal Allowance',
          'structure_type_id': version.structure_type_id.id,
          # "Monthly Benefit in Kind"
          'benefit_type_id': env.ref('hr_payroll.l10n_be_monthly_benefit').id,
          'res_field_id': field.id,
          'cost_res_field_id': field.id,
          'is_configurable_benefit': True,
          'display_type': 'slider',
          'slider_min': 0,
          'slider_max': 200,
          'slider_step': 10,
      })
      env['hr.contract.salary.resume'].create({
          'name': 'Meal Allowance',
          'category_id': env.ref(
              'hr_contract_salary.hr_contract_salary_resume_category_monthly_benefits').id,
          'structure_type_id': version.structure_type_id.id,
          'value_type': 'sum',
          'benefit_ids': [(6, 0, benefit.ids)],
      })

      version.x_meal_allowance = 100
      version.wage, version.final_yearly_costs, version._get_benefits_costs()
      # (8700.0, 105600.0, 1200.0)

      offer = env['hr.contract.salary.offer'].browse(version.action_generate_offer()['res_id'])
      offer.employee_id.name, offer.contract_template_id == version, offer.final_yearly_costs
      # ('Troy Cruz', True, 105600.0)
      offer.gross_wage, offer.monthly_benefits
      # (8700.0, 100.0)
      offer.salary_amount = 110400  # yearly employer budget
      offer.gross_wage, version.wage
      # (9100.0, 8700.0): (110400 - 1200) / 12, the version itself is unchanged

.. _reference/payroll/salary_configurator/summary:

Personal infos and package summary
----------------------------------

A personal info writes the field `res_field_id` of the model given by `applies_on`:
`employee` (`hr.employee`), `version_personal` (`hr.version`) or `bank_account`
(`res.partner.bank`, the bank account of the employee is found or created). `display_type`
gives the input (`text`, `radio`, `checkbox`, `date`, `dropdown`, `integer`, `email`,
`document`); the options of a `dropdown` come from `value_ids` or, with `dropdown_selection`,
from the countries, states or languages. Personal infos can be nested (`parent_id`): the
children are hidden depending on the value of the parent
(:meth:`~hr_contract_salary_personal_info.HrContractSalaryPersonalInfo._hide_children`). With
`impacts_net_salary`, a change triggers a new salary computation (e.g. the home-work distance in
Belgium).

A resume line gets its value according to `value_type`:

- `fixed`: `fixed_value`;
- `version`: the version field `code`;
- `sum`: the sum of the values of `benefit_ids` (skipping unchecked folded benefits);
- `payslip`: the total of the payslip lines of code `code` (`BASIC`, `GROSS`, `NET`...) of the
  simulated payslip;
- `monthly_total`: the sum of the lines flagged `impacts_monthly_total` (yearly categories
  divided by 12).

The selection of `code` is
:meth:`~hr_contract_salary_resume.HrContractSalaryResume._get_available_fields`: the version
fields and a few payslip line codes; localizations add theirs.

.. _reference/payroll/salary_configurator/controller:

The configurator controller
---------------------------

The page and its JSON routes are in `hr_contract_salary/controllers/main.py`, class
`HrContractSalary`. Each route opens the offer as superuser, checks the access
(`check_access_to_salary_configurator()`: HR manager, valid token, or user of the employee) and
works in the simulation context. The values of the page are sent back as `benefits`, a
dictionary of inputs by section (`version`, `version_personal`, `employee`, `address`,
`bank_account`); the values are **strings** (or booleans for checkboxes), cast them.

The routes delegate to methods meant to be overridden:

`/salary_package/simulation/offer/<offer_id>` (page)
   `_compute_salary_package()` renders the page with `_get_default_template_values()`, which
   gathers the personal infos (`_get_personal_infos()`, filtered by
   `_should_add_personal_info()`, dropdown options from `_get_personal_infos_countries()`,
   `_get_personal_infos_states()` and `_get_personal_infos_langs()`) and the benefits
   (`_get_benefits()` and `_get_benefits_values()`, which return the initial value of each
   input).

`/salary_package/onchange_benefit`
   `_compute_onchange_benefit()` returns `{'new_value', 'description', 'extra_values'}`: the
   value to set on the input, the description of the benefit (the result of
   `hr.version._get_description_<field>(new_value)` if that method exists), and
   `[(input name, value)]` to update other inputs.

`/salary_package/update_salary`
   `_compute_update_salary()` creates the new version in the simulation context
   (`create_new_version()`) and returns `_get_compute_results()`: the `wage`, the
   `resume_lines_mapped` by category and code (`(name, value, uom symbol, explanation,
   currency position, uom)`) and the displayed `payslip_lines`.

`/salary_package/submit`
   `_compute_submit()` returns the values of the current version, then `create_new_version()`
   creates, outside the simulation context, the archived version (values from
   `_get_new_version_values()`) and employee, and writes the personal infos
   (`_update_personal_info()`). The summary (`_get_email_info()`) and the differences with the
   current version are posted, then the signature request is created.

`_get_new_version_values()` writes the value of each benefit field found in the inputs; when
`hr.version` has a method `_get_benefit_values_<field>(version_vals, benefits)`, its result is
written instead, which is how a benefit stored in several fields is handled.

The signature itself is handled by `SignContract._update_version_on_signature()`, an override of
the `sign` controller, which updates the offer state, activates the version and the employee,
and creates the benefit activities and signature requests.

.. _reference/payroll/salary_configurator/localization:

Extending the configurator
--------------------------

A localization (`l10n_xx_hr_contract_salary`, auto-installed with `hr_contract_salary` and the
payroll localization) typically:

- declares its benefits on `hr.contract.salary.benefit` records of its structure types: the
  payroll part (field, cost field, type) in `l10n_xx_hr_payroll`, the configurator part
  (`is_configurable_benefit`, `display_type`, icon, folding...) in
  `l10n_xx_hr_contract_salary`, e.g. `l10n_be_hr_payroll.l10n_be_transport_company_car`;
- declares its personal infos and resume lines (with `structure_type_id`), and adds codes to
  `_get_available_fields()`;
- adds the non-stored benefit fields to `_benefit_white_list()` and the salary sacrifices to
  `_get_sacrifice_fields()`, and overrides the yearly cost hooks (see
  :ref:`reference/payroll/hr_version/yearly_cost`), e.g. `l10n_ae_hr_contract_salary` adds the
  labor compliance costs to `_get_benefits_costs()`;
- overrides the controller methods, always checking the country first (several localizations
  can be installed together), and the offer hooks (`_get_benefits()` in
  `l10n_in_hr_contract_salary`, `_get_simulation_required_fields()` in
  `l10n_be_hr_contract_salary`).

.. example::

   Excerpts of `l10n_be_hr_contract_salary`. A benefit stored in two fields, and a dynamic
   description (`hr.version`):

   .. code-block:: python

      def _get_benefit_values_insured_relative_spouse(self, version_vals, benefits):
          return {'insured_relative_spouse': benefits['fold_insured_relative_spouse']}

      def _get_description_commission_on_target(self, new_value=None):
          self.ensure_one()
          return '<span class="form-text">The commission is scalable [...]</span>' % (...)

   Hiding a generic personal info, and copying more fields on the new version (controller):

   .. code-block:: python

      class HrContractSalary(main.HrContractSalary):

          def _should_add_personal_info(self, personal_info, version):
              identification_number_ref_id = self.env.ref(
                  "hr_contract_salary.hr_contract_salary_personal_info_identification_id")
              ...
              if (version.country_code == 'BE'
                      and personal_info.id == identification_number_ref_id.id):
                  return False
              return super()._should_add_personal_info(personal_info, version)

          def _get_new_version_values(self, version_vals, employee, benefits, offer):
              res = super()._get_new_version_values(version_vals, employee, benefits, offer)
              if offer.country_code != 'BE':
                  return res
              fields_to_copy = ['work_time_rate', 'rd_percentage', 'no_onss', ...]
              for field_to_copy in fields_to_copy:
                  if field_to_copy in version_vals:
                      res[field_to_copy] = version_vals.get(field_to_copy)
              ...
              return res

   Reacting to a benefit change: the IP benefit is a checkbox in the page, but the version
   stores a rate:

   .. code-block:: python

      def _compute_onchange_benefit(self, version, benefit_field, new_value, offer, benefits, **kw):
          res = super()._compute_onchange_benefit(
              version, benefit_field, new_value, offer, benefits, **kw)
          if offer.country_code != 'BE':
              return res
          if benefit_field == 'ip_value':
              res['new_value'] = version.ip_wage_rate if float(new_value) else 0
          ...
          return res

.. _reference/payroll/salary_configurator/pitfalls:

Pitfalls
--------

- Calling :meth:`~hr_contract_salary_offer.HrContractSalaryOffer._get_version` or
  :meth:`~hr_version.HrVersion._generate_salary_simulation_payslip` outside
  `hr_version_context()` raises a `RuntimeError`. Inside, everything written is rolled back at
  the end of the block: compute the values you need inside it, and do not keep the records.
- Code triggered by a write on a version (overrides of `write`, computed fields, automated
  actions) also runs during the simulations. Test the `salary_simulation` context key to skip
  side effects.
- A benefit value is taken from the contract template of an applicant offer only if its field is
  in `_get_whitelist_fields_from_template()` (see :ref:`reference/hr/hr_version/templates`);
  otherwise the simulated version starts with the default value.
- The benefit methods and controller hooks are generic: a localization override must return the
  `super()` result untouched for the other countries (`version.country_code`,
  `offer.country_code`) or structure types.
- The values received from the page are strings: `float(...)`, `int(...)` them, and handle the
  empty string.
- The resume lines and the gross and net amounts read payslip line codes (`BASIC`, `GROSS`,
  `NET`...): the structure of the localization must use these codes.
- The configurator assumes a monthly pay: the *Monthly* summary category is relabeled for the
  other pay frequencies, but the amounts are those of one pay period.

.. _reference/payroll/salary_configurator/reference:

Reference
---------

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_offer.HrContractSalaryOffer()
   :main:

   .. autofield:: state
   .. autofield:: applicant_id
   .. autofield:: employee_id
   .. autofield:: employee_version_id
   .. autofield:: contract_template_id
   .. autofield:: budget_type
   .. autofield:: salary_amount
   .. autofield:: final_yearly_costs
   .. autofield:: gross_wage
   .. autofield:: net_wage
   .. autofield:: contract_start_date
   .. autofield:: offer_end_date
   .. autofield:: access_token
   .. autofield:: is_simulation_offer
   .. autofield:: sign_template_id
   .. autofield:: sign_template_signatories_ids

   .. automethod:: _get_version
   .. automethod:: _compute_final_yearly_costs
   .. automethod:: _compute_salary
   .. automethod:: _get_benefits
   .. automethod:: _copy_contract_template_signatories
   .. automethod:: action_refuse_offer
   .. automethod:: unlink_archived_version_offer
   .. automethod:: _archive_future_versions
   .. automethod:: _get_simulation_required_fields
   .. automethod:: check_simulation_required_fields
   .. automethod:: action_open_salary_configurator
   .. automethod:: _cron_update_state
   .. automethod:: action_cron_remove_simulation_offers

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_offer_refusal_reason.HrContractSalaryOfferRefusalReason()
   :main:

.. automodel:: odoo.addons.hr_payroll.models.hr_contract_salary_benefit.HrContractSalaryBenefit()
   :main:

   .. autofield:: source
   .. autofield:: res_field_id
   .. autofield:: cost_res_field_id
   .. autofield:: salary_rule_id
   .. autofield:: benefit_type_id
   .. autofield:: structure_type_id

.. automodel:: odoo.addons.hr_payroll.models.hr_contract_salary_benefit.HrContractSalaryBenefitType()
   :main:

   .. autofield:: periodicity

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_benefit.HrContractSalaryBenefit()

   .. autofield:: is_configurable_benefit
   .. autofield:: display_type
   .. autofield:: value_ids
   .. autofield:: folded
   .. autofield:: fold_res_field_id
   .. autofield:: manual_res_field_id
   .. autofield:: benefit_ids
   .. autofield:: activity_type_id
   .. autofield:: sign_template_id
   .. autofield:: requested_documents_field_ids

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_benefit.HrContractSalaryBenefitValue()
   :main:

   .. automethod:: _get_value

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_personal_info.HrContractSalaryPersonalInfo()
   :main:

   .. autofield:: applies_on
   .. autofield:: res_field_id
   .. autofield:: display_type
   .. autofield:: dropdown_selection
   .. autofield:: info_type_id
   .. autofield:: structure_type_id
   .. autofield:: impacts_net_salary
   .. autofield:: parent_id

   .. automethod:: _hide_children

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_personal_info.HrContractSalaryPersonalInfoType()
   :main:

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_personal_info.HrContractSalaryPersonalInfoValue()
   :main:

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_resume.HrContractSalaryResume()
   :main:

   .. autofield:: value_type
   .. autofield:: code
   .. autofield:: benefit_ids
   .. autofield:: category_id
   .. autofield:: impacts_monthly_total

   .. automethod:: _get_available_fields

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_salary_resume.HrContractSalaryResumeCategory()
   :main:

.. automodel:: odoo.addons.hr_contract_salary.models.hr_contract_signatory.HrContractSignatory()
   :main:

   .. autofield:: signatory
   .. autofield:: sign_role_id
   .. autofield:: partner_id
   .. autofield:: order

   .. automethod:: create_empty_signatories

.. automodel:: odoo.addons.hr_contract_salary.models.hr_version.HrVersion()

   .. autofield:: originated_offer_id
   .. autofield:: origin_version_id
   .. autofield:: applicant_id
   .. autofield:: sign_template_id
   .. autofield:: sign_template_signatories_ids
   .. autofield:: contract_update_template_id
   .. autofield:: contract_update_signatories_ids
   .. autofield:: salary_offer_ids

   .. automethod:: action_generate_offer
   .. automethod:: _get_offer_values
   .. automethod:: _get_values_dict
   .. automethod:: _generate_salary_simulation_payslip

.. automodel:: odoo.addons.hr_contract_salary.models.hr_applicant.HrApplicant()

   .. autofield:: salary_offer_ids

   .. automethod:: action_generate_offer
   .. automethod:: _get_offer_values
   .. automethod:: _get_contract_template
   .. automethod:: _move_to_hired_stage

.. automodel:: odoo.addons.hr_contract_salary.models.hr_employee.HrEmployee()

   .. automethod:: action_generate_offer
   .. automethod:: _get_offer_values

.. automodel:: odoo.addons.hr_contract_salary.models.hr_job.HrJob()

   .. autofield:: contract_template_id

.. autofunction:: odoo.addons.hr_contract_salary.utils.hr_version.hr_version_context

.. autoclass:: odoo.addons.hr_contract_salary.controllers.main.HrContractSalary()

   .. automethod:: check_access_to_salary_configurator
   .. automethod:: _compute_salary_package
   .. automethod:: _get_default_template_values
   .. automethod:: _get_salary_package_values
   .. automethod:: _get_personal_infos
   .. automethod:: _should_add_personal_info
   .. automethod:: _get_benefits
   .. automethod:: _get_benefits_values
   .. automethod:: _compute_onchange_benefit
   .. automethod:: _compute_update_salary
   .. automethod:: _get_compute_results
   .. automethod:: create_new_version
   .. automethod:: _get_new_version_values
   .. automethod:: _update_personal_info
   .. automethod:: _update_version_payroll_properties
   .. automethod:: _get_email_info
   .. automethod:: submit

.. autoclass:: odoo.addons.hr_contract_salary.controllers.main.SignContract()

   .. automethod:: _update_version_on_signature
   .. automethod:: _create_activity_benefit
   .. automethod:: _send_benefit_sign_request
