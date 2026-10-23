.. _reference/payroll/hr_payslip_run:

.. py:currentmodule:: odoo.addons.hr_payroll.models

=====================
Pay runs and warnings
=====================

A **pay run** (`hr.payslip.run`) groups the payslips of a period and a salary structure, so that
they are generated, computed, validated and paid together. **Payroll warnings**
(`hr.payroll.warning`) are configurable checks, written as a domain or as Python code, displayed
on the payroll dashboard and on the payslips, where they can block the validation.

.. seealso::
   :ref:`reference/payroll/hr_payslip` for the computation and the states of the payslips.

.. _reference/payroll/hr_payslip_run/payrun:

Pay runs
--------

A pay run has a period (`date_start`, `date_end`), a structure (`structure_id`), a company and
optionally employee types (`employee_type_ids`). Its versions (`version_ids`) are the employee
versions to pay, and its payslips (`slip_ids`) point to it with `hr.payslip.payslip_run_id`. A
payslip without pay run is an *off-cycle* payslip.

When the structure has a pay schedule, the period defaults to the period following the last done
or paid pay run of the structure (:meth:`~hr_payslip_run.HrPayslipRun._compute_date_start`,
:meth:`~hr_payslip_run.HrPayslipRun._compute_date_end`), and the name to the period, e.g.
`Nov 2026`.

.. _reference/payroll/hr_payslip_run/states:

Pay run states
--------------

`state` is computed from the versions and the payslips
(:meth:`~hr_payslip_run.HrPayslipRun._compute_state`), so writing it has no lasting effect:

`00_draft` (*Draft*)
   Some versions have no payslip yet.

`01_ready` (*Ready*)
   At least one payslip is draft.

`02_close` (*Done*)
   No draft payslip, at least one validated payslip.

`03_paid` (*Paid*)
   No draft or validated payslip, at least one paid payslip.

`04_cancel` (*Cancelled*)
   Otherwise: all the payslips are cancelled (or the pay run has neither version nor payslip).

.. _reference/payroll/hr_payslip_run/generation:

Generating the payslips
-----------------------

The versions of a new pay run are computed at its creation
(:meth:`~hr_payslip_run.HrPayslipRun._compute_version_ids`) by
:meth:`~hr_payslip_run.HrPayslipRun._get_valid_versions`: one version per employee contract
running in the period, among the versions of active employees of the company with the structure
type of the structure, started before the end of the period, and of the employee types of the
pay run (and of the structure, if it restricts them). See
:meth:`~hr_payslip_run.HrPayslipRun._get_valid_versions_domain_payrun`.

Then:

- :meth:`~hr_payslip_run.HrPayslipRun._generate_payslips` creates one payslip per version
  without payslip, for the period of the pay run and its structure, and computes them;
- :meth:`~hr_payslip_run.HrPayslipRun.action_open_payslips` (the button) generates the missing
  payslips of a draft pay run, then opens them;
- :meth:`~hr_payslip_run.HrPayslipRun.action_start_payrun` creates a pay run from values,
  generates its payslips and opens them.
  :meth:`~hr_payslip_run.HrPayslipRun.action_start_payrun_with_warnings`, used by the user
  interface, first checks for common issues
  (:meth:`~hr_payslip_run.HrPayslipRun._get_start_payrun_warnings`: employees to review, time off
  to approve, no time off at all in the period) and displays them before starting.

Versions can be added to an existing pay run with
:meth:`~hr_payslip_run.HrPayslipRun.action_add_versions` or replaced with
:meth:`~hr_payslip_run.HrPayslipRun.action_assign_versions` (both take employee ids).

.. note::
   Employee types with `payroll_auto_post` get their monthly pay run created, computed and
   validated by a cron
   (:meth:`~hr_payslip_run.HrPayslipRun._cron_generate_payrun_for_employee_types_with_auto_post`).

.. _reference/payroll/hr_payslip_run/actions:

Pay run actions
---------------

The actions of the pay run apply the payslip actions to its payslips:

:meth:`~hr_payslip_run.HrPayslipRun.action_confirm`
   Computes the draft payslips.

:meth:`~hr_payslip_run.HrPayslipRun.action_re_compute_payslips`
   Recomputes the draft payslips of a draft or ready pay run.

:meth:`~hr_payslip_run.HrPayslipRun.action_validate`
   Validates the computed, non-cancelled payslips (`hr.payslip.action_payslip_done()`). Users
   who are not payroll officers cannot validate a pay run with warnings or errors.

:meth:`~hr_payslip_run.HrPayslipRun.action_paid`
   Marks the payslips as paid.

:meth:`~hr_payslip_run.HrPayslipRun.action_unpaid`
   Sets the paid payslips back to validated.

:meth:`~hr_payslip_run.HrPayslipRun.action_draft`
   Sets the payslips back to draft, which regenerates their worked days and lines. Refused if a
   payslip is paid.

:meth:`~hr_payslip_run.HrPayslipRun.action_correct`
   For a done or paid pay run: creates a correction pay run holding a refund and a correction of
   each payslip (see :ref:`reference/payroll/hr_payslip/refunds`), and opens it.

:meth:`~hr_payslip_run.HrPayslipRun.off_cycle_version`
   Removes a version from the pay run; its payslips become off-cycle payslips.

.. example::

   .. code-block:: python

      from datetime import date

      struct = env.ref('hr_payroll.structure_002')  # Regular Pay
      run = env['hr.payslip.run'].create({
          'date_start': date(2026, 11, 1),
          'date_end': date(2026, 11, 30),
          'structure_id': struct.id,
      })
      run.name, run.state, len(run.version_ids)  # ('Nov 2026', '00_draft', 13)

      slips = run._generate_payslips()  # created and computed
      len(slips), run.state, set(slips.mapped('state'))  # (13, '01_ready', {'draft'})
      run.gross_sum, run.net_sum  # (98896.0, 81828.5)

      run.action_validate()
      run.state  # '02_close'
      run.action_paid()
      run.state  # '03_paid'

      run.action_correct()  # returns the action opening the correction pay run
      correction_run = env['hr.payslip.run'].search([('name', '=', 'Nov 2026 (Correction)')])
      correction_run.state, len(correction_run.slip_ids)  # ('01_ready', 26)
      set(correction_run.slip_ids.mapped(lambda slip: (slip.is_refund_payslip, slip.state)))
      # {(True, 'validated'), (False, 'draft')}: validated refunds, draft corrections

.. _reference/payroll/hr_payslip_run/warnings:

Payroll warnings
----------------

A payroll warning finds the records needing attention: employees without bank account,
payslips without running contract, time off to approve, etc. Its records belong to `model_id`
(`hr.employee`, `hr.version`, `hr.payslip` or `hr.leave`, see
:meth:`~hr_payroll_warning.HrPayrollWarning._get_allowed_models`), and it is displayed:

- on the payroll **dashboard** (`display_on_dashboard`): one card per warning with the number of
  records, a due date and a button opening them;
- on the **records** (`display_on_model`): only payslips are supported by the computation of
  the issues (see below).

A warning applies to the companies of its `country_id`, or to all companies without country.
`warning_color_class` gives its color and, on payslips, its level: `danger` is an error,
anything else a warning. `block_payslips` prevents the validation of the payslips concerned
(the payslips themselves, or the payslips of the employees matched).

.. _reference/payroll/hr_payslip_run/warnings/types:

Domain and Python warnings
--------------------------

`warning_type` decides how the records are found:

`domain`
   `warning_domain` is a domain on the model, restricted to the allowed companies (and the
   country of the warning) by
   :meth:`~hr_payroll_warning.HrPayrollWarning._get_warning_domain_records`. With
   `is_in_contract`, the dashboard only keeps the records with a running contract (for
   employees and versions).

`python`
   `evaluation_code` is executed with `safe_eval` by
   :meth:`~hr_payroll_warning.HrPayrollWarning._get_warning_python_records`. It must set
   `warning_records` (a recordset), and may set:

   - `warning_details`: `{record: [{'message': str, 'level': 'danger' or 'warning',
     'action_text': str, 'action': dict}]}`, the issues to display on each record instead of the
     description of the warning;
   - `warning_title`, `warning_description`, `warning_count`, `warning_button`,
     `warning_action`, `warning_deadline`: overrides of the dashboard card;
   - `additional_context`, `warning_multi_results` (several cards from one warning).

   The code can use `self` (the warning, hence `self.env`), `model` (empty recordset of the
   model), `records`, `date`, `datetime`, `relativedelta`, `dateutil`, `float_compare`,
   `defaultdict`, `json` and `_get_payroll_translation`. When computing the payslip issues,
   `records` and `active_ids` are the payslips to check; on the dashboard, the code also gets
   `company`, `closing_date`, `Domain` and `literal_eval`, and searches the records itself.

.. _reference/payroll/hr_payslip_run/warnings/issues:

Payslip issues
--------------

:meth:`~odoo.addons.hr_payroll.models.hr_payslip.HrPayslip._compute_issues` evaluates the active
warnings displayed on `hr.payslip` records on the draft and validated payslips (and the paid
payslips with outdated data). It stores:

- `issues`: a JSON dict `{index: {'message', 'level', ...}}`;
- `error_count` (`danger` issues) and `warning_count`.

Payslips with errors cannot be validated nor paid. The issues are recomputed when one of the
fields of :meth:`~odoo.addons.hr_payroll.models.hr_payslip.HrPayslip._issues_dependencies`
changes; localizations adding payslip warnings on other fields extend it.

.. example::

   A blocking domain warning and a Python warning giving details per payslip:

   .. code-block:: python

      warning = env['hr.payroll.warning'].create({
          'name': 'High net salary',
          'description': 'Net salary above 6000.',
          'warning_type': 'domain',
          'model_id': env['ir.model']._get_id('hr.payslip'),
          'warning_domain': "[('net_wage', '>', 6000)]",
          'warning_color_class': 'danger',  # error: blocks the validation
          'display_on_dashboard': False,
          'display_on_model': True,
          'country_id': False,
      })
      python_warning = env['hr.payroll.warning'].create({
          'name': 'Unpaid days',
          'warning_type': 'python',
          'model_id': env['ir.model']._get_id('hr.payslip'),
          'display_on_dashboard': False,
          'display_on_model': True,
          'country_id': False,
          'evaluation_code': """
      warning_details = defaultdict(list)
      for payslip in records.filtered(lambda p: p.state == 'draft'):
          unpaid_wds = payslip.worked_days_line_ids.filtered(lambda wd: not wd.is_paid)
          unpaid = sum(unpaid_wds.mapped('number_of_days'))
          if unpaid:
              warning_details[payslip].append({
                  'message': '%s unpaid days' % unpaid, 'level': 'warning',
              })
      warning_records = records.filtered(lambda p: p in warning_details)
      """,
      })

      # the employee of the payslip examples, with 2 days of unpaid time off in November
      employee = env['hr.employee'].search([('name', '=', 'Ronnie Hart')])
      slip = env['hr.payslip'].create({'employee_id': employee.id, 'date_from': date(2026, 11, 1)})
      slip.compute_sheet()
      slip.net_wage, slip.error_count, slip.state_display  # (6079.05, 1, '01_error')
      [issue for issue in slip.issues.values()
       if issue['message'] in ('Net salary above 6000.', '2.0 unpaid days')]
      # [{'message': 'Net salary above 6000.', 'level': 'danger'},
      #  {'message': '2.0 unpaid days', 'level': 'warning'}]
      slip.action_payslip_done()
      # ValidationError:  • Net salary above 6000.

      records, details, *_ = python_warning._get_warning_python_records({'active_ids': slip.ids})
      dict(details)
      # {hr.payslip(...): [{'message': '2.0 unpaid days', 'level': 'warning'}]}

   (The payslip may also show the issues of the warnings installed by the modules.)

.. _reference/payroll/hr_payslip_run/warnings/dashboard:

Dashboard
---------

The dashboard loads progressively:
:meth:`~hr_payroll_warning.HrPayrollWarning.get_payroll_dashboard_data` returns the pay run
closing dates of the company and the ids of the applicable warnings (company country or no
country, not snoozed), then
:meth:`~hr_payroll_warning.HrPayrollWarning.get_payroll_dashboard_warning_cards` evaluates them
and returns one card per warning, pay schedule and due date
(:meth:`~hr_payroll_warning.HrPayrollWarning._serialize_card`: `name`, `description`, `count`,
`color_class`, `warning_date`, `warning_records`, `button_name`, `button_action`, ...). A warning
that fails gives an error card instead of breaking the dashboard.

The due date of a card (:meth:`~hr_payroll_warning.HrPayrollWarning._get_warning_date`) is the
reference date of `closing_on` (next pay run closing date, contract start or end, end of the
month, quarter or year, ...) shifted by `warning_offset_days`. A warning with an `email_message`
sends an email `email_alert_days` after its due date
(:meth:`~hr_payroll_warning.HrPayrollWarning._cron_payroll_warning_email_alert`).
`snooze_date` hides a warning until that date.

:meth:`~odoo.addons.hr_payroll.models.hr_payslip.HrPayslip.action_payslip_done` also uses
:meth:`~hr_payroll_warning.HrPayrollWarning.get_payroll_dashboard_warning_cards`, with
`block_payslips=True`, to find the blocking warnings.

.. _reference/payroll/hr_payslip_run/pitfalls:

Pitfalls
--------

- The state of a pay run is computed: change the state of its payslips instead.
- :meth:`~hr_payslip_run.HrPayslipRun._generate_payslips` raises a `UserError` when the pay run
  has no version, and skips the versions of another structure type than the structure of the
  pay run.
- A Python warning must set `warning_records`; an exception in its code raises a `UserError`
  naming the warning (on the dashboard, an error card).
- `warning_color_class = 'danger'` blocks the payslips through their issues, while
  `block_payslips` blocks them through the dashboard warnings: both prevent the validation.
- Payslip issues are not computed in tests unless the context has
  `hr_payroll_force_compute_issue`.

.. _reference/payroll/hr_payslip_run/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_payslip_run.HrPayslipRun
   :main:

   .. autofield:: date_start
   .. autofield:: date_end
   .. autofield:: structure_id
   .. autofield:: state
   .. autofield:: slip_ids
   .. autofield:: version_ids
   .. autofield:: employee_type_ids
   .. autofield:: company_id

   .. automethod:: _get_valid_versions
   .. automethod:: _get_valid_versions_domain_payrun
   .. automethod:: _compute_version_ids
   .. automethod:: _compute_state
   .. automethod:: _compute_date_start
   .. automethod:: _compute_date_end
   .. automethod:: _generate_payslips
   .. automethod:: action_open_payslips
   .. automethod:: action_start_payrun
   .. automethod:: action_start_payrun_with_warnings
   .. automethod:: _get_start_payrun_warnings
   .. automethod:: action_add_versions
   .. automethod:: action_assign_versions
   .. automethod:: action_confirm
   .. automethod:: action_re_compute_payslips
   .. automethod:: action_validate
   .. automethod:: action_paid
   .. automethod:: action_unpaid
   .. automethod:: action_draft
   .. automethod:: action_correct
   .. automethod:: off_cycle_version
   .. automethod:: _cron_generate_payrun_for_employee_types_with_auto_post

.. automodel:: odoo.addons.hr_payroll.models.hr_payroll_warning.HrPayrollWarning
   :main:

   .. autofield:: warning_type
   .. autofield:: model_id
   .. autofield:: warning_domain
   .. autofield:: evaluation_code
   .. autofield:: country_id
   .. autofield:: warning_color_class
   .. autofield:: block_payslips
   .. autofield:: display_on_dashboard
   .. autofield:: display_on_model
   .. autofield:: is_in_contract
   .. autofield:: warning_offset_days
   .. autofield:: snooze_date

   .. automethod:: _get_allowed_models
   .. automethod:: _get_warning_domain_records
   .. automethod:: _get_warning_python_records
   .. automethod:: _get_warning_issue
   .. automethod:: get_payroll_dashboard_data
   .. automethod:: get_payroll_dashboard_warning_cards
   .. automethod:: _iter_applicable_payroll_warnings
   .. automethod:: _get_applicable_payroll_warnings
   .. automethod:: _get_effective_warning_domain
   .. automethod:: _serialize_card
   .. automethod:: _get_warning_date
   .. automethod:: _cron_payroll_warning_email_alert
