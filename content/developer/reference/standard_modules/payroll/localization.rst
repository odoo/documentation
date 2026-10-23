.. _reference/payroll/localization:

==============================
Writing a payroll localization
==============================

`hr_payroll` computes nothing country-specific: the salary structures, rules, parameters and
legal reports of a country come from its **payroll localization**, a module named
`l10n_xx_hr_payroll` (`xx` being the country code). This page describes how such a module is
organized, using the Bangladeshi localization (`l10n_bd_hr_payroll`), a small and recent one,
as example. The large localizations (`l10n_be_hr_payroll`, `l10n_ch_hr_payroll`,
`l10n_au_hr_payroll`...) follow the same structure with many more models.

A localization is usually made of two modules:

`l10n_xx_hr_payroll`
   Depends on `hr_payroll` only: structure types, structures, categories, rules, parameters,
   work entry type configuration, reports and declarations.

`l10n_xx_hr_payroll_account`
   Depends on `hr_payroll_account`, the accounting localization `l10n_xx` and
   `l10n_xx_hr_payroll`: the accounts of the rules, and the payslip **tests** (which need a
   company with a chart of accounts).

.. _reference/payroll/localization/manifest:

Manifest
--------

.. code-block:: python
   :caption: `l10n_bd_hr_payroll/__manifest__.py` (shortened)

   {
       'name': 'Bangladesh - Payroll',
       'countries': ['bd'],
       'category': 'Human Resources/Payroll',
       'depends': ['hr_payroll'],
       'auto_install': ['hr_payroll'],
       'data': [
           'data/resource_calendar_data.xml',
           'data/hr_rule_parameters_data.xml',
           'data/hr_payroll_structure_type_data.xml',
           'data/hr_work_entry_type_data.xml',
           'data/hr_payroll_structure_data.xml',
           'data/hr_salary_rule_category_data.xml',
           'data/hr_salary_rule_data.xml',
       ],
       'demo': ['data/l10n_bd_hr_payroll_demo.xml'],
       'license': 'OEEL-1',
       'post_init_hook': '_l10n_bd_hr_payroll_post_install',
   }

- `countries` and `auto_install: ['hr_payroll']`: the module is installed automatically with
  the payroll in a company of the country.
- The data files are loaded in order: structure types before structures, categories before the
  rules using them. Rule parameters can be loaded anywhere: rules read them at computation time.
- The post-init hook replaces the generic work entry types by the country ones on existing
  data (calendars, allocations, structure types, time off):

  .. code-block:: python
     :caption: `l10n_bd_hr_payroll/__init__.py`

     def _l10n_bd_hr_payroll_post_install(env):
         env.ref('base.bd')._adapt_work_entry_types_to_country()

.. _reference/payroll/localization/data:

Payroll data
------------

.. _reference/payroll/localization/data/structure_type:

Structure type and structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_payroll_structure_type_data.xml`

   <record id="structure_type_employee_bd" model="hr.payroll.structure.type">
       <field name="name">Bangladeshi Employee</field>
       <field name="wage_type">monthly</field>
       <field name="default_schedule_pay">monthly</field>
       <field name="country_id" ref="base.bd"/>
       <field name="default_resource_calendar_id"
              eval="ref('resource.resource_calendar_std', raise_if_not_found=False)"/>
   </record>

The structure references its type, and the type references its regular pay structure: the
second reference is set by a second record on the type, once the structure exists. The same
record sets the work entry type of regular attendances. Note `rule_ids` set to `[]`, which
prevents the copy of the generic default rules
(see :ref:`reference/payroll/hr_salary_rule/structure`).

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_payroll_structure_data.xml`

   <record id="hr_payroll_structure_bd_employee_salary" model="hr.payroll.structure">
       <field name="name">Bangladesh: Regular Pay</field>
       <field name="country_id" ref="base.bd"/>
       <field name="type_id" ref="l10n_bd_hr_payroll.structure_type_employee_bd"/>
       <field name="rule_ids" eval="[]"/>
   </record>
   <record id="l10n_bd_hr_payroll.structure_type_employee_bd" model="hr.payroll.structure.type">
       <field name="default_struct_id" ref="hr_payroll_structure_bd_employee_salary"/>
       <field name="default_work_entry_type_id"
              ref="hr_work_entry.bd_work_entry_type_attendance"/>
   </record>

Other structures of the type (13th month, final pay...) are declared the same way, without
being the default structure.

.. _reference/payroll/localization/data/work_entry_types:

Work entry types
~~~~~~~~~~~~~~~~

The work entry types of each country (attendance `002.00`, legal leaves, sick leaves...) are
defined in the community module `hr_work_entry` (`hr_work_entry/data/hr_work_entry_type_data.xml`,
XML ids such as `hr_work_entry.bd_work_entry_type_attendance`). The payroll localization only
configures their payroll fields, mainly the categories that receive the amount of the worked
days of each type (see :ref:`reference/payroll/hr_salary_rule/categories`):

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_work_entry_type_data.xml` (extract)

   <record id="hr_work_entry.bd_work_entry_type_attendance" model="hr.work.entry.type">
       <field name="category_ids" eval="[(6, 0, [ref('hr_payroll.BASIC')])]"/>
   </record>
   <record id="hr_work_entry.bd_work_entry_type_sick_leave" model="hr.work.entry.type">
       <field name="category_ids" eval="[(6, 0, [ref('hr_payroll.BASIC')])]"/>
   </record>

A paid type credits `BASIC`; an unpaid type credits no category, or a category the rules
subtract. See :ref:`reference/payroll/work_entries` for the other fields of the work entry types.

.. _reference/payroll/localization/data/categories:

Categories
~~~~~~~~~~

Add the country categories, as children of the base ones when they must be summed with them:

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_salary_rule_category_data.xml` (extract)

   <record id="rule_category_taxes" model="hr.salary.rule.category">
       <field name="name">Taxes</field>
       <field name="code">TAXES</field>
       <field name="parent_id" ref="hr_payroll.DED"/>
       <field name="country_id" ref="base.bd"/>
   </record>

.. _reference/payroll/localization/data/rules:

Salary rules
~~~~~~~~~~~~

Each rule is linked to its structures with `struct_ids`. Python code is written as the text of
the field:

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_salary_rule_data.xml` (extract)

   <record id="l10n_bd_hr_payroll_structure_bd_employee_salary_basic_salary_rule"
           model="hr.salary.rule">
       <field name="category_ids" eval="[(5, 0, 0)]"/>
       <field name="name">Basic Salary</field>
       <field name="sequence">1</field>
       <field name="code">BASIC</field>
       <field name="condition_select">none</field>
       <field name="amount_select">code</field>
       <field name="amount_python_compute">
   result = categories['BASIC']
       </field>
       <field name="struct_ids" eval="[(6, 0, [
           ref('l10n_bd_hr_payroll.hr_payroll_structure_bd_employee_salary'),
       ])]"/>
       <field name="country_id" ref="base.bd"/>
   </record>

   <record id="l10n_bd_income_tax_rule" model="hr.salary.rule">
       <field name="name">Income Tax</field>
       <field name="category_ids" eval="[(6, 0, [ref('l10n_bd_hr_payroll.rule_category_taxes')])]"/>
       <field name="struct_ids" eval="[(6, 0, [
           ref('l10n_bd_hr_payroll.hr_payroll_structure_bd_employee_salary'),
       ])]"/>
       <field name="code">TAXES</field>
       <field name="sequence">115</field>
       <field name="condition_select">none</field>
       <field name="amount_select">code</field>
       <field name="amount_python_compute">
   yearly_taxable_amount = result_rules['TAXABLE_AMOUNT']['total'] * 12
   ...
   result = -max(income_tax, payslip._rule_parameter('l10n_bd_yearly_minimum_tax')) / 12
       </field>
       <field name="country_id" ref="base.bd"/>
   </record>

The rules declared in module data must be complete, because the reset of a rule (see
:ref:`reference/payroll/hr_salary_rule/reset`) only rewrites the fields present in the file:

- always set `condition_select`, `amount_select`, `category_ids` and `country_id`;
- set the fields of the chosen condition and amount types: `condition_python` or
  `condition_domain`; `amount_fix` and `quantity`; `amount_percentage`, `amount_percentage_base`
  and `quantity`; `amount_python_compute`; `input_usage_employee` and `input_usage_payslip` for
  `property_input` rules;
- set `category_ids` with a single `[(5, 0, 0)]` (no category) or `[(6, 0, [...])]` command.

A warning is logged at install for each rule breaking these conventions. The python code
reference is in :ref:`reference/payroll/hr_salary_rule/python`.

.. _reference/payroll/localization/data/inputs:

Inputs
~~~~~~

Values entered by the users are rules too (there is no input type model):

- an input on the **payslip** or from a payslip adjustment: `input_usage_payslip`;
- a value on the **employee version**: `input_usage_employee`, with an `input_section`.

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_salary_rule_data.xml` (extract)

   <record id="l10n_bd_other_allowances_rule" model="hr.salary.rule">
       <field name="name">Other Allowances</field>
       <field name="category_ids" eval="[(6, 0, [ref('hr_payroll.ALW')])]"/>
       <field name="input_usage_employee" eval="False"/>
       <field name="input_default_value" eval="0.0"/>
       <field name="struct_ids" eval="[(6, 0, [
           ref('l10n_bd_hr_payroll.hr_payroll_structure_bd_employee_salary'),
       ])]"/>
       <field name="code">OTHER_ALLOW</field>
       <field name="sequence">5</field>
       <field name="condition_select">property_input</field>
       <field name="amount_select">property_input</field>
       <field name="input_usage_payslip" eval="True"/>
       <field name="input_section" ref="hr_payroll.default_salary_rule_section"/>
       <field name="country_id" ref="base.bd"/>
   </record>

See :ref:`reference/payroll/hr_salary_rule/inputs`.

.. _reference/payroll/localization/data/parameters:

Rule parameters
~~~~~~~~~~~~~~~

Rates, ceilings and brackets are rule parameters with dated values (see
:ref:`reference/payroll/hr_rule_parameter/data`), never constants in the python code: a new
legal year then only adds `hr.rule.parameter.value` records.

.. code-block:: xml
   :caption: `l10n_bd_hr_payroll/data/hr_rule_parameters_data.xml` (extract)

   <record id="l10n_bd_rule_parameter_yearly_tax_rates" model="hr.rule.parameter">
       <field name="name">Bangladesh: Yearly Tax Rates</field>
       <field name="code">l10n_bd_yearly_tax_rates</field>
       <field name="country_id" ref="base.bd"/>
   </record>
   <record id="l10n_bd_rule_parameter_yearly_tax_rates_2024" model="hr.rule.parameter.value">
       <field name="parameter_value">[
           (100000, 0.05),
           (300000, 0.10),
           ...
       ]</field>
       <field name="rule_parameter_id" ref="l10n_bd_rule_parameter_yearly_tax_rates"/>
       <field name="date_from" eval="datetime(2024, 1, 1).date()"/>
   </record>

.. _reference/payroll/localization/python:

Python overrides
----------------

The small localizations need very little code. `l10n_bd_hr_payroll` restricts the pay
frequencies and declares its data files:

.. code-block:: python
   :caption: `l10n_bd_hr_payroll/models/hr_payroll_structure_type.py`

   class HrPayrollStructureType(models.Model):
       _inherit = 'hr.payroll.structure.type'

       def _get_selection_schedule_pay(self):
           if self.env.company.country_code == 'BD':
               return [('monthly', self.env._('month'))]
           return super()._get_selection_schedule_pay()

.. code-block:: python
   :caption: `l10n_bd_hr_payroll/models/hr_payslip.py`

   class HrPayslip(models.Model):
       _inherit = "hr.payslip"

       def _get_data_files_to_update(self):
           # Note: file order should be maintained
           return super()._get_data_files_to_update() + [(
               'l10n_bd_hr_payroll', [
                   'data/hr_rule_parameters_data.xml',
                   'data/hr_salary_rule_data.xml',
               ])]

`hr.payslip._get_data_files_to_update()` lists the files reloaded by the reset buttons of the
rules and parameters, and by `hr.payslip._update_payroll_data(country_code)`. The same hook on
`hr.work.entry.type` lists the work entry type files (`data/hr_work_entry_type_data.xml`).
Declare every file holding rules, parameters or work entry type configuration.

Bigger localizations commonly override:

- `hr.payslip._get_localdict` or `_get_base_local_dict`, to add variables or helpers to the rule
  context; `_get_payslip_line_total`, to round the line totals; `_compute_input_line_ids`, to
  add inputs (see :ref:`reference/payroll/hr_payslip`);
- `hr.version`, to add contractual fields read by the rules (add them to
  `_get_fields_that_recompute_payslip`, see :ref:`reference/payroll/hr_version`);
- `hr.salary.rule.category._get_seized_categories`, for the seizable salary;
- declaration sheets (see :ref:`reference/payroll/declarations`) and payroll warnings.

The `_account` module assigns accounts to the rules in `account.chart.template`
(`_configure_payroll_account_xx`) and sets flags such as `employee_move_line` on the net rule.

.. _reference/payroll/localization/tests:

Tests
-----

Payslip tests live in the `_account` module, e.g.
`l10n_bd_hr_payroll_account/tests/test_salary_rules.py`. They inherit from
`TestPayslipValidationCommon` (`hr_payroll_account/tests/common.py`), which combines the payroll
helpers of `TestPayrollBase` (`hr_payroll/tests/common.py`) with a company of the country with
its chart of accounts:

.. code-block:: python

   from datetime import date

   from odoo.tests.common import tagged
   from odoo.addons.hr_payroll_account.tests.common import TestPayslipValidationCommon


   @tagged('post_install', 'post_install_l10n', '-at_install', 'payslips_validation')
   class TestPayslipValidation(TestPayslipValidationCommon):

       @classmethod
       @TestPayslipValidationCommon.setup_country('bd')
       def setUpClass(cls):
           super().setUpClass()
           cls._setup_common(
               country=cls.env.ref('base.bd'),
               structure=cls.env.ref('l10n_bd_hr_payroll.hr_payroll_structure_bd_employee_salary'),
               structure_type=cls.env.ref('l10n_bd_hr_payroll.structure_type_employee_bd'),
               employee_fields={'sex': 'male'},
               resource_calendar=cls.env.ref('l10n_bd_hr_payroll.resource_calendar_def_40h'),
           )

       def test_male_payslip_1(self):
           self.version.wage = 40000.0
           payslip = self._generate_payslip(date(2024, 1, 1), date(2024, 1, 31))
           payslip_results = {'BASIC': 40000.0, 'GROSS': 40000.0, 'TAXABLE_AMOUNT': 26666.67,
                              'TAXES': -416.67, 'NET': 39583.33}
           self._validate_payslip(payslip, payslip_results)

The helpers of `TestPayrollBase`:

`_setup_common(country, structure, structure_type, ...)`
   Sets the country on the company and creates `cls.employee` and its version `cls.version`
   (contract from 2016-01-01, wage 1000, a 40 hours/week calendar using the `002.00` work entry
   type of the country). `version_fields`, `employee_fields` and `version_properties` (payroll
   properties by rule code) customize them.

`_generate_payslip(date_from, date_to, struct_id=False, input_line_ids=False, ...)`
   Creates the payslip and computes it.

`_validate_payslip(payslip, results)`
   Compares the totals of the payslip lines with `results` (`{rule code: total}`, 2 decimals).
   It fails on wrong amounts, on expected rules that were not computed, and on computed lines
   missing from `results` (unless `skip_lines=True`). The failure message prints the actual
   values as a dict ready to paste.

`_validate_worked_days(payslip, {code: (days, hours, amount)})`
   The same for the worked days lines.

`_add_other_input(payslip, rule, amount)`
   Adds an input line to the payslip.

`_add_rule_parameter_value(code, value, date)`
   Creates or updates the value of a rule parameter at a date.

`_generate_leave(employee, date_from, date_to, work_entry_type_id)`
   Creates (and approves) a time off.

`_validate_rule_computed(payslip, code, expected=True)`
   Checks that a rule was (or was not) computed.

Without `results`, `_validate_payslip` compares the lines with a JSON snapshot,
`<module>/tests/test_files/payslips/<test file>/<test method>.json` (the file must exist, empty
for a new test). Append `,SAVE_JSON` to `--test-tags` to write the snapshots, or
`,SAVE_JSON_ON_FAIL` to only rewrite those that differ, then review the diff.

Run the tests of a localization on a new database without demo data:

.. code-block:: console

   $ odoo-bin -d <db> -i l10n_bd_hr_payroll_account --test-tags /l10n_bd_hr_payroll_account \
       --stop-after-init
