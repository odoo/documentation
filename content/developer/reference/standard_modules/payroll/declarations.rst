.. _reference/payroll/declarations:

.. py:currentmodule:: odoo.addons.hr_payroll.models

============
Declarations
============

Most countries require yearly documents per employee built from the payslips: tax certificates,
individual accounts, tax deduction cards... `hr_payroll` provides the generic part of these
**declarations**: a *sheet* model for the period and the company, one line per employee, and the
asynchronous generation of one PDF per employee. Localizations only provide the data and the
report.

.. graphviz::

   digraph declarations {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      sheet [label="sheet (l10n_ke.tax.deduction.card...)\ninherits hr.payroll.declaration.mixin"];
      decl [label="hr.payroll.employee.declaration\n(one per employee, PDF)"];
      employee [label="hr.employee"];
      sheet -> decl [label="line_ids\n(res_model, res_id)"];
      decl -> employee [label="employee_id"];
   }

.. _reference/payroll/declarations/models:

Sheets and employee declarations
--------------------------------

`hr.payroll.declaration.mixin` (abstract)
   The model of a sheet inherits from it. It gets a `year` (a selection of strings from `'1990'`
   to the current year, the previous year by default), a `company_id`, the declarations of the
   employees (`line_ids`) and `pdf_error`, the error message of the last PDF generation.

`hr.payroll.employee.declaration`
   The declaration of an employee for a sheet. As it can belong to any sheet model, it points to
   its sheet with `res_model` and `res_id` (a sheet's `line_ids` is a one2many on `res_id`, so
   always set `res_model` too). It holds the `employee_id`, the `version_id` (by default the
   version of the employee at the end of the `year` of the sheet), the generated `pdf_file` and
   `pdf_filename`, and `declaration_error`. Its `state` is `draft`, `pdf_to_generate`,
   `pdf_generated` or `error`. An employee has at most one declaration per sheet.

Declarations whose sheet no longer exists are deleted by the autovacuum. With
`documents_hr_payroll`, the generated PDFs can be posted in the *Documents* app of the
employees.

.. _reference/payroll/declarations/flow:

Generation flow
---------------

#. The user creates a sheet. If
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._country_restriction` returns
   a country code, the current company must be of that country (checked in `default_get`).
#. :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin.action_generate_declarations`
   fills `line_ids` with one declaration per eligible employee. The base implementation only
   raises if there is none: each sheet overrides it to create the lines, then calls `super()`.
#. :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin.action_generate_pdf` flags the
   declarations (`pdf_to_generate`) and triggers the cron
   `hr_payroll.ir_cron_generate_payslip_pdfs`, which generates the queued payslip PDFs first,
   then the declarations, by batches.
#. :meth:`~hr_payroll_employee_declaration.HrPayrollEmployeeDeclaration._generate_pdf` processes
   the declarations sheet by sheet: it calls the
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._get_rendering_data` of the
   sheet with the employees, then
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._post_process_rendering_data_pdf`,
   and renders the report of
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._get_pdf_report` for each
   employee, in the employee's language. The files, named by
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._get_pdf_filename`, are stored
   on the declarations by
   :meth:`~hr_payroll_declaration_mixin.HrPayrollDeclarationMixin._process_files`.

:meth:`~hr_payroll_employee_declaration.HrPayrollEmployeeDeclaration.action_print_pdf` generates
the PDF of a single declaration synchronously and downloads it.

`_get_rendering_data(employees)` returns `{employee: data}`. The report (an `ir.actions.report`
on `hr.employee`) is rendered with the employee as document and receives in its `data`:

- `report_data`: the data of the employee;
- `employee`, `company_id` (the employee's company) and `payroll_config_id` (the current payroll
  configuration of that company).

Two keys of the result are special:

`'error'`
   A message: no PDF is generated for the sheet, and the message is stored in its `pdf_error`.
   Raising a `UserError` in `_get_rendering_data` has the same effect.

`'employees_with_error'`
   `{employee: message}`: the messages are stored in the `declaration_error` of these
   employees' declarations. These employees must not be keys of the result: their PDFs are not
   generated.

.. _reference/payroll/declarations/implementing:

Implementing a declaration
--------------------------

A declaration needs a sheet model, its views and menu, a QWeb report on `hr.employee`, and
access rights. The model overrides the hooks of the mixin. The tax deduction card of
`l10n_ke_hr_payroll` (`l10n_ke_hr_payroll/models/l10n_ke_tax_deduction_card.py`) is a short
example; shortened:

.. code-block:: python

   import datetime

   from odoo import api, fields, models


   class L10n_KeTaxDeductionCard(models.Model):
       _name = 'l10n_ke.tax.deduction.card'
       _inherit = ['hr.payroll.declaration.mixin']
       _description = 'HR Tax Deduction Card Report By Employee'

       name = fields.Char(required=True, compute='_compute_name', readonly=False, store=True)

       def _country_restriction(self):
           return 'KE'

       def action_generate_declarations(self):
           for sheet in self:
               payslips = self.env['hr.payslip'].search([
                   ('date_from', '>=', datetime.date(int(sheet.year), 1, 1)),
                   ('date_to', '<=', datetime.date(int(sheet.year), 12, 31)),
                   ('state', 'in', ['validated', 'paid']),
                   ('company_id', '=', sheet.company_id.id),
               ])
               sheet.write({
                   'line_ids': [(5, 0, 0)] + [(0, 0, {
                       'employee_id': employee.id,
                       'res_model': self._name,
                       'res_id': sheet.id,
                   }) for employee in payslips.employee_id],
               })
           return super().action_generate_declarations()

       def _get_rendering_data(self, employees):
           self.ensure_one()
           payslips = self.env['hr.payslip'].search([
               ('employee_id', 'in', employees.ids),
               ('state', 'in', ['validated', 'paid']),
               # ... payslips of the year
           ])
           result = {employee: {'year': int(self.year), 'p9_lines': [...]}
                     for employee in payslips.employee_id}
           line_values = payslips._get_line_values(['BASIC', 'GROSS', 'PAYE', ...])
           for payslip in payslips:
               ...  # line_values['GROSS'][payslip.id]['total'] for the month of the payslip
           return result

       def _get_pdf_report(self):
           return self.env.ref('l10n_ke_hr_payroll.action_report_tax_deduction_card')

       def _get_pdf_filename(self, employee):
           self.ensure_one()
           return self.env._('%(employee)s-tax-deduction-card-%(year)s',
                             employee=employee.name, year=self.year)

The template then reads `report_data`, e.g. `<t t-out="report_data['year']"/>`.

.. tip::
   - Read the payslip amounts with `hr.payslip._get_line_values(codes)` (one query for all the
     payslips and codes, see :ref:`reference/payroll/hr_payslip`) rather than browsing the
     lines of each payslip.
   - Read the legal values of the period with `env['hr.rule.parameter']._get_parameter_from_code`
     at a date of the period (see :ref:`reference/payroll/hr_rule_parameter`).
   - If the declaration relies on the version of the employee at another date than the end of
     the year, override `_compute_version_id` of the declarations, or set `version_id` when
     creating them.

Other implementations: `l10n_be_hr_payroll` (281.xx tax forms, individual accounts),
`l10n_ch_hr_payroll` (individual accounts), `l10n_hk_hr_payroll` (IRD forms),
`l10n_in_hr_payroll` (salary statements), `l10n_ph_hr_payroll` (BIR form 2316, which uses
`employees_with_error`).

.. _reference/payroll/declarations/reference:

Reference
---------

.. automodel:: odoo.addons.hr_payroll.models.hr_payroll_declaration_mixin.HrPayrollDeclarationMixin()
   :main:

   .. autofield:: year
   .. autofield:: line_ids
   .. autofield:: pdf_error

   .. automethod:: action_generate_declarations
   .. automethod:: action_generate_pdf
   .. automethod:: _country_restriction
   .. automethod:: _get_rendering_data
   .. automethod:: _post_process_rendering_data_pdf
   .. automethod:: _get_pdf_report
   .. automethod:: _get_pdf_filename
   .. automethod:: _process_files

.. automodel:: odoo.addons.hr_payroll.models.hr_payroll_employee_declaration.HrPayrollEmployeeDeclaration()
   :main:

   .. autofield:: res_model
   .. autofield:: res_id
   .. autofield:: employee_id
   .. autofield:: version_id
   .. autofield:: state

   .. automethod:: _generate_pdf
   .. automethod:: action_generate_pdf
   .. automethod:: action_print_pdf
