.. _reference/payroll/hr_salary_attachment:

.. py:currentmodule:: odoo.addons.hr_payroll.models

===================
Payslip adjustments
===================

A payslip adjustment (`hr.salary.attachment`, *Salary Attachment* in older versions) is an
amount to take into account in the payslips of an employee during a period: a garnishment
ordered by a court, the repayment of an advance or a loan, a child support, a recurring
allowance... It does not compute anything by itself: it feeds the **input** of a salary rule,
and the rule computes the payslip line.

.. _reference/payroll/hr_salary_attachment/model:

Adjustments
-----------

`employee_id`, `company_id`, `description`
   The employee, the company and the label of the adjustment (the label of the input line).

`salary_rule_id`
   The salary rule receiving the amount. Only rules flagged `input_usage_payslip` (*Available on
   Payslip*) and belonging to a structure of the structure type of the employee can be selected
   (see :ref:`reference/payroll/hr_salary_rule/inputs`). There is no adjustment type model: the
   rule is the type. `salary_rule_warning` warns when no structure of the employee's structure
   type has a rule with the same code flagged *Available on Payslip*: the adjustment would have
   no effect.

`amount`, `is_recurring`
   The amount, strictly positive, in the unit of the rule (its `input_suffix`, e.g. days or %;
   a currency amount otherwise). A **recurring** adjustment (`is_recurring`) adds `amount` to
   every payslip until it is closed. A **one-time** adjustment adds its remaining amount to the
   next payslip.

`paid_amount`, `remaining_amount`
   What has been paid so far, and what remains: `amount - paid_amount` for one-time
   adjustments, `amount` for recurring ones.

`date_start`, `date_estimated_end`, `date_end`, `state`
   The adjustment applies to the payslips ending after `date_start`; `date_estimated_end`
   (recurring adjustments only) and `date_end` stop it. `state` is `1_open` (*Running*) or
   `2_close` (*Done*); :meth:`~hr_salary_attachment.HrSalaryAttachment.action_close` closes the
   adjustment with today as `date_end`.

`sequence`
   The priority of payment when the payslip cannot pay all the adjustments of a rule (lower
   first).

`beneficiary_bank_account_id`
   The bank account to which the payment reports send the amount (e.g. the child support).

`is_seized` tells whether the rule is a seizure of salary, i.e. one of its categories is
returned by `hr.salary.rule.category._get_seized_categories()`, a hook empty by default and
overridden by localizations (e.g. `l10n_be_hr_payroll`).

.. _reference/payroll/hr_salary_attachment/flow:

From the adjustment to the payslip
----------------------------------

#. **Input lines.** When the input lines of a payslip are computed, the running adjustments of
   the employee overlapping the payslip period, whose rule code belongs to a rule of the payslip
   structure flagged *Available on Payslip*, are grouped by rule code. Each group gives **one**
   input line: its amount is the sum of their remaining amounts
   (:meth:`~hr_salary_attachment.HrSalaryAttachment._get_active_amount`, negated on credit
   notes) and its name joins their descriptions. These lines are rebuilt each time the inputs
   are recomputed; the input lines of other rules (entered manually) are kept.
#. **Computation.** The salary rule reads the input, usually as a negative amount for a
   deduction: `result = -inputs['ATTACH_SALARY'].amount`.
#. **Payment.** When the payslip is marked as paid, the total of its lines with the rule code
   (not the input amount: the rule may have capped it) is recorded on the adjustments with
   :meth:`~hr_salary_attachment.HrSalaryAttachment.record_payment`. The amount is distributed by
   `sequence`: each priority group receives its remaining amounts if possible, or a prorated
   part of what is left. One-time adjustments whose remaining amount reaches 0 are closed.

Creating or modifying an adjustment recomputes the draft payslips of the employee it concerns.

.. example::

   With `l10n_bd_hr_payroll`, whose `ATTACH_SALARY` rule deducts its input:

   .. code-block:: python

      from datetime import date

      rule = env.ref('l10n_bd_hr_payroll.'
                     'l10n_bd_hr_payroll_structure_bd_employee_salary_attachment_of_salary_rule')
      loan, court = env['hr.salary.attachment'].create([{
          'employee_id': employee.id,
          'salary_rule_id': rule.id,
          'description': 'Car loan',
          'amount': 3000,
          'date_start': date(2026, 9, 1),
      }, {
          'employee_id': employee.id,
          'salary_rule_id': rule.id,
          'description': 'Court order',
          'amount': 500,
          'is_recurring': True,
          'date_start': date(2026, 9, 1),
      }])

      payslip = env['hr.payslip'].create({
          'employee_id': employee.id,
          'date_from': date(2026, 9, 1),
          'date_to': date(2026, 9, 30),
      })
      payslip.compute_sheet()
      payslip.input_line_ids.mapped(lambda line: (line.code, line.name, line.amount))
      # [('ATTACH_SALARY', 'Car loan, Court order', 3500.0)]
      payslip.line_ids.filtered(lambda line: line.code == 'ATTACH_SALARY').total
      # -3500.0

      payslip.action_payslip_done()
      payslip.action_payslip_paid()
      (loan | court).mapped(lambda a: (a.paid_amount, a.remaining_amount, a.state))
      # [(3000.0, 0.0, '2_close'), (500.0, 500.0, '1_open')]

   The payslip of the next month only receives the recurring adjustment:
   `[('ATTACH_SALARY', 'Court order', 500.0)]`.

.. note::
   A one-time adjustment is paid in a single payslip, for its whole remaining amount. To spread
   a repayment over several months, use a recurring adjustment with an estimated end date.

Inputs can also be set without adjustment, on a single payslip: use
`payslip._set_input_value(code, amount)` (see :ref:`reference/payroll/hr_payslip`), or
`hr.payslip.input` records pointing to the rule.

.. _reference/payroll/hr_salary_attachment/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_salary_attachment.HrSalaryAttachment
   :main:

   .. autofield:: employee_id
   .. autofield:: salary_rule_id
   .. autofield:: amount
   .. autofield:: is_recurring
   .. autofield:: remaining_amount
   .. autofield:: state

   .. automethod:: create
   .. automethod:: action_close
   .. automethod:: record_payment
   .. automethod:: _get_active_amount
   .. automethod:: _get_payment_amount
