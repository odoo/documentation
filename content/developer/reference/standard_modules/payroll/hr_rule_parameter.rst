.. _reference/payroll/hr_rule_parameter:

.. py:currentmodule:: odoo.addons.hr_payroll.models

===============
Rule parameters
===============

Legal values change over time: tax brackets, ceilings, contribution rates, minimum wages... A rule
parameter (`hr.rule.parameter`) stores such a value under a **code**, with one dated value
(`hr.rule.parameter.value`) per period of validity. Salary rules read the value valid at the
date of the payslip, so that:

- a new legal year only requires a new dated value, not a change of the salary rules;
- recomputing an old payslip uses the values of its period.

.. _reference/payroll/hr_rule_parameter/model:

Parameters and values
---------------------

`hr.rule.parameter`
   `name`, `code` (unique among the active parameters), `country_id` and
   `parameter_version_ids`, the dated values. `salary_rule_ids` lists the rules whose python code
   mentions the code between quotes.

`hr.rule.parameter.value`
   `rule_parameter_id`, `date_from` and `parameter_value`. A value is valid from its `date_from`
   until the `date_from` of the next value: there is no end date. Two values of a parameter
   cannot start on the same day; creating a value at an existing `date_from` **replaces** the
   existing one.

`parameter_value` is a text holding a python literal, evaluated with
:func:`~odoo.tools.safe_eval.expr_eval`: numbers, strings, lists, tuples, dicts, sets,
arithmetic, comparisons and calls to `min`, `max`, `round`, `float`, `int` and `set`. There are
no variables. Invalid expressions are refused when the value is saved. Typical values are:

.. code-block:: python

   450000                                         # an amount
   0.13                                           # a rate
   [(100000, 0.05), (300000, 0.10), (400000, 0.15)]  # tax brackets
   {'single': 3000, 'married': 4500}             # values by case

.. _reference/payroll/hr_rule_parameter/reading:

Reading a parameter
-------------------

In a salary rule, call `payslip._rule_parameter(code)`: it returns the value valid at the
reference date of the payslip (its `date_to` by default, see
:ref:`the payslip page <reference/payroll/hr_payslip>`). A `reference_date` can be given
explicitly.

.. code-block:: python

   # amount_python_compute of the TAXABLE_AMOUNT rule of l10n_bd_hr_payroll
   yearly_income_exempt = min(payslip._rule_parameter('l10n_bd_maximum_yearly_exempt'),
                              result_rules['GROSS']['total'] * 12 / 3)
   result = result_rules['GROSS']['total'] - yearly_income_exempt / 12

Outside of the payslips, use
:meth:`~hr_rule_parameter.HrRuleParameter._get_parameter_from_code`, which returns the value of
the most recent value with `date_from <= date` (today if no date is given). If there is none, it
raises a `UserError`, or returns `None` with `raise_if_not_found=False`.

.. example::

   .. code-block:: python

      from datetime import date

      Parameter = env['hr.rule.parameter']
      Parameter._get_parameter_from_code('l10n_bd_maximum_yearly_exempt', date(2026, 1, 1))
      # 450000
      Parameter._get_parameter_from_code('l10n_bd_yearly_tax_rates', date(2026, 1, 1))
      # [(100000, 0.05), (300000, 0.1), (400000, 0.15), (500000, 0.2), (99999999999999999, 0.25)]
      Parameter._get_parameter_from_code(
          'l10n_bd_maximum_yearly_exempt', date(2020, 1, 1), raise_if_not_found=False)
      # None (the first value starts on 2024-01-01)

      # A new value for the second half of 2026
      param = env.ref('l10n_bd_hr_payroll.l10n_bd_rule_parameter_maximum_yearly_exempt')
      env['hr.rule.parameter.value'].create({
          'rule_parameter_id': param.id,
          'date_from': date(2026, 7, 1),
          'parameter_value': '500000',
      })
      Parameter._get_parameter_from_code('l10n_bd_maximum_yearly_exempt', date(2026, 6, 30))
      # 450000
      Parameter._get_parameter_from_code('l10n_bd_maximum_yearly_exempt', date(2026, 7, 1))
      # 500000

The lookup is cached per code, date and allowed companies. The cache is invalidated when values
are created or when their `date_from` or `parameter_value` change. The returned value is a deep
copy: a rule can modify the list or dict it receives without altering the next payslips.

.. _reference/payroll/hr_rule_parameter/data:

Parameters in module data
-------------------------

Localization modules declare parameters and their values in a data file (usually
`data/hr_rule_parameters_data.xml`), e.g. in `l10n_bd_hr_payroll`:

.. code-block:: xml

   <record id="l10n_bd_rule_parameter_maximum_yearly_exempt" model="hr.rule.parameter">
       <field name="name">Bangladesh: Maximum Yearly Exempt</field>
       <field name="code">l10n_bd_maximum_yearly_exempt</field>
       <field name="country_id" ref="base.bd"/>
   </record>
   <record id="l10n_bd_rule_parameter_maximum_yearly_exempt_2024" model="hr.rule.parameter.value">
       <field name="parameter_value">450000</field>
       <field name="rule_parameter_id" ref="l10n_bd_rule_parameter_maximum_yearly_exempt"/>
       <field name="date_from" eval="datetime(2024, 1, 1).date()"/>
   </record>

Prefix the codes with the localization (`l10n_xx_`): codes are global to the database. A new
legal year is a new `hr.rule.parameter.value` record; never modify the value of a past period,
as it would change the result of recomputed payslips.

As for salary rules, a parameter created by the module data and later modified by a user is
flagged `modified_by_user`, and its XML ids (and those of its values) are set `noupdate`, so
that module updates no longer overwrite the user's changes.
:meth:`~hr_rule_parameter.HrRuleParameter.action_reset_rule_parameter` reverts this: it deletes
the values created by users and reloads the payroll data files of the country (see
:ref:`reference/payroll/localization`). Users cannot delete parameters or values created by the
system; they can archive the parameter instead.

.. tip::
   In tests, `TestPayrollBase._add_rule_parameter_value(code, value, date)`
   (`hr_payroll/tests/common.py`) creates or updates a value at a date.

.. _reference/payroll/hr_rule_parameter/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_rule_parameter.HrRuleParameter()
   :main:

   .. autofield:: code
   .. autofield:: country_id
   .. autofield:: parameter_version_ids

   .. automethod:: _get_parameter_from_code
   .. automethod:: action_reset_rule_parameter

.. automodel:: odoo.addons.hr_payroll.models.hr_rule_parameter_value.HrRuleParameterValue()
   :main:

   .. autofield:: rule_parameter_id
   .. autofield:: date_from
   .. autofield:: parameter_value
