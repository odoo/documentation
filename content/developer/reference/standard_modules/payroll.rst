:show-content:

.. _reference/payroll:

=======
Payroll
=======

The Payroll application computes the payslips of employees: from the contractual data of the
employee and the time actually worked, a set of **salary rules** produces the lines of the payslip
(basic salary, allowances, social contributions, taxes, net salary, ...).

The application is split over several modules:

`hr_work_entry` (community)
   Generates the **work entries** of employees: what kind of time (worked, sick, holiday,
   overtime, ...) was spent when. See :ref:`reference/payroll/work_entries`.

`hr_payroll` (enterprise)
   Payslips, pay runs, salary structures and rules, rule parameters, salary attachments and
   yearly declarations. It is generic: it does not compute any tax by itself.

`l10n_xx_hr_payroll` (enterprise)
   The **payroll localizations**. They provide the salary structures, rules and parameters of a
   country, and the legal reports and declarations. See :ref:`reference/payroll/localization`.

The payroll builds on the employee *versions*: the wage, the working schedule and the salary
structure type of an employee are fields of `hr.version`. Read
:ref:`reference/hr/hr_version` first if you are not familiar with them.

.. note::
   In Odoo 20.0, there is no `hr.contract` model anymore (contractual data lives on `hr.version`)
   and work entries are no longer stored records (they are generated when needed).

.. _reference/payroll/models:

Models overview
---------------

.. graphviz::

   digraph payroll {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      stype [label="hr.payroll.structure.type"];
      struct [label="hr.payroll.structure"];
      rule [label="hr.salary.rule"];
      categ [label="hr.salary.rule.category"];
      version [label="hr.version\n(wage, schedule,\nstructure type)"];
      payslip [label="hr.payslip"];
      wd [label="hr.payslip.worked_days"];
      input [label="hr.payslip.input"];
      line [label="hr.payslip.line"];
      run [label="hr.payslip.run"];
      wet [label="hr.work.entry.type"];
      stype -> struct [label="struct_ids,\ndefault_struct_id"];
      struct -> rule [label="rule_ids"];
      rule -> categ [label="category_ids"];
      version -> stype [label="structure_type_id"];
      payslip -> version [label="version_id"];
      payslip -> struct [label="struct_id"];
      payslip -> wd [label="worked_days_line_ids"];
      payslip -> input [label="input_line_ids"];
      payslip -> line [label="line_ids"];
      run -> payslip [label="slip_ids"];
      wd -> wet [label="work_entry_type_id"];
      line -> rule [label="salary_rule_id"];
      input -> rule [label="salary_rule_id"];
   }

:ref:`hr.payroll.structure.type, hr.payroll.structure <reference/payroll/hr_salary_rule>`
   A structure type (e.g. *Employee*, *Worker*) groups the salary structures applicable to a kind
   of contract; one of them is its regular pay structure. A structure (e.g. *Regular Pay*,
   *13th Month*) is an ordered set of salary rules.

:ref:`hr.salary.rule, hr.salary.rule.category <reference/payroll/hr_salary_rule>`
   A salary rule computes one line of the payslip, with Python code or simple formulas. Rules are
   grouped in categories (e.g. `BASIC`, `GROSS`, `DED`, `NET`) whose totals other rules can use.

:ref:`hr.rule.parameter <reference/payroll/hr_rule_parameter>`
   Legal values that change over time (tax brackets, ceilings, rates), read by the rules.

:ref:`hr.payslip <reference/payroll/hr_payslip>`
   A payslip: an employee, a version, a structure and a period. It holds the worked days, the
   inputs and the computed lines.

:ref:`hr.payslip.run <reference/payroll/hr_payslip_run>`
   A pay run, i.e. a batch of payslips computed and validated together.

:ref:`hr.salary.attachment <reference/payroll/hr_salary_attachment>`
   A recurring or one-time amount (garnishment, advance, child support) added to the payslips of
   an employee through a salary rule.

.. _reference/payroll/flow:

Computing a payslip
-------------------

.. graphviz::

   digraph flow {
      rankdir=TB;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      version [label="hr.version\ncalendar, wage, structure type"];
      sources [label="time off, attendances,\npublic holidays"];
      we [label="work entry values\n(generated)"];
      wd [label="worked days\n(per work entry type)"];
      inputs [label="inputs\n(manual, attachments, properties)"];
      localdict [label="evaluation context\n(localdict)"];
      rules [label="salary rules of the structure\n(by sequence)"];
      lines [label="payslip lines\n(categories, net)"];
      version -> we; sources -> we;
      we -> wd;
      wd -> localdict; inputs -> localdict; version -> localdict;
      localdict -> rules -> lines;
      rules -> localdict [style=dashed, label=" results feed\n the next rules"];
   }

#. A payslip is created for an employee and a period. Its version and its structure (the regular
   pay structure of the version's structure type, by default) are computed.
#. The **work entries** of the period are generated from the version (working schedule, time off,
   attendances...) and aggregated by work entry type into **worked days** lines (days, hours and
   amount). See :ref:`reference/payroll/work_entries`.
#. **Inputs** are added: manual inputs, salary attachments, values set on the employee.
#. `compute_sheet()` builds the evaluation context of the rules (the *localdict*: employee,
   version, worked days, inputs, category totals, ...) and evaluates the rules of the structure
   one after the other. Each rule whose condition is satisfied produces a payslip line; its total
   is added to its categories and made available to the next rules. See
   :ref:`reference/payroll/hr_payslip`.
#. The payslip is validated, then marked as paid. With `hr_payroll_account`, the validation
   creates the journal entry of the payslip.

.. example::

   Computing a payslip from the shell:

   .. code-block:: python

      from datetime import date

      employee = env['hr.employee'].search(
          [('version_id.contract_date_start', '!=', False)], limit=1,
      )
      payslip = env['hr.payslip'].create({
          'employee_id': employee.id,
          'date_from': date(2026, 10, 1),
          'date_to': date(2026, 10, 31),
      })
      payslip.struct_id.name  # 'Worker Pay', the regular pay structure of the version
      payslip.compute_sheet()
      payslip.line_ids.mapped(lambda line: (line.code, line.total))
      # [('BASIC', 129.26), ('GROSS', 129.26), ('NET', 129.26)] with the generic demo data;
      # a localization adds its contributions and taxes between GROSS and NET

.. toctree::
   :titlesonly:

   payroll/work_entries
   payroll/hr_payslip
   payroll/hr_payslip_run
   payroll/hr_salary_rule
   payroll/hr_rule_parameter
   payroll/hr_version
   payroll/hr_salary_attachment
   payroll/declarations
   payroll/salary_configurator
   payroll/localization
