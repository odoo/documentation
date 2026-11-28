:show-content:

=======
Payroll
=======

Odoo's **Payroll** app computes employees' pay, based on their contract, their worked time, and the
payroll rules of their country, and creates the corresponding payslips. It works together with other
Odoo apps, such as **Employees**, **Time Off**, **Attendances**, and **Accounting**.

The contractual terms of each employee, such as their wage, pay category, and working schedule, are
set in the *Payroll* tab of their employee record. Each change is kept in a dated version of the
employee record. Refer to the :doc:`contracts <payroll/contracts>` documentation.

.. important::
   It is critical to install the correct :doc:`country-specific localization
   <payroll/payroll_localizations>`, as this configures all local and national rules, regulations,
   and applicable taxes for the selected country.

When it is time to run payroll according to the business's schedule (monthly, weekly, etc.),
payslips are created in groups, called :doc:`pay runs <payroll/pay_runs>`, or individually as
:doc:`off-cycle payslips <payroll/payslips>`. Odoo computes the :doc:`worked time
<payroll/work_entries>` of each employee from their working schedule (or their attendances), their
approved time off, and the public holidays. Additional amounts, such as commissions or deductions,
are added through :doc:`payslip adjustments <payroll/salary_attachments>`.

The :doc:`payroll dashboard <payroll/dashboard>` lists the next pay runs to process and the issues
to fix before computing the payslips, such as missing bank accounts or time off waiting for
approval.

Once the payslips are correct, they are :ref:`validated <payroll/payslips/process>`, and the
employees are :ref:`paid <payroll/payslips/pay-employee>`, usually with a payment file sent to the
bank.

Settings
========

To configure the **Payroll** app, navigate to :menuselection:`Payroll app --> Configuration -->
Settings`. The following sections are available: :ref:`payroll <payroll-payroll-settings>`,
:ref:`accounting <payroll-accounting>`, and the :ref:`localization <payroll-localizations>`
settings.

.. _payroll-payroll-settings:

Payroll
-------

- :guilabel:`Contract Expiration Notice Period`: Enter the number of days before the end of a
  contract when Odoo notifies the HR responsible of the employee, with an activity.
- :guilabel:`Work Permit Expiration Notice Period`: Enter the number of days before the expiration
  of an employee's work permit when Odoo notifies the HR responsible.
- :guilabel:`YTD Reset Date`: Select the day and month when the :abbr:`YTD (Year To Date)` amounts
  of the payslips are reset. By default, this is January 1st.
- :guilabel:`First Payrun Date`: Select the date when the company starts using Odoo for its
  payroll. The :doc:`payroll dashboard <payroll/dashboard>` proposes pay runs from this date.
- :guilabel:`Send payslips to employees`: Select when the PDF of the payslips is generated and sent
  to the employees: :guilabel:`When Confirmed` (when the payslip is validated), :guilabel:`When
  Paid`, or :guilabel:`Manually`.
- :guilabel:`Payroll Closing Date`: Select the day of the month on which the monthly pay runs are
  usually closed. The dashboard uses it to set the deadline of the pay run cards.

.. _payroll-accounting:

Accounting
----------

- :guilabel:`Anonymize Journal Entries`: Enable this option to merge the journal entries of the
  payslips of a pay run, so that the amounts of individual employees cannot be distinguished in
  accounting. This also disables the :guilabel:`Pay` button on individual payslips. This option is
  available if the **Accounting** app is installed.
- :guilabel:`Payroll SEPA`: Enable this option to generate :abbr:`SEPA (Single Euro Payments Area)`
  payment files when paying employees. This option is only available for companies located in a
  SEPA country.

.. _payroll-localizations:

Localizations
-------------

*Localizations* are country-specific settings, which account for all taxes, fees, and allowances for
that particular country. Depending on the :doc:`localization installed
<payroll/payroll_localizations>`, additional sections appear on the settings page.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required due to
   special circumstances. For example, a new law is passed that changes basic salary rules, or a
   company is exempt from specific taxes.

.. note::
   Odoo can handle multi-company configurations, for example when a company has offices or branches
   in several countries. Each company can have a different localization, since rules and laws
   differ from one country to another.

   For more information on companies, refer to the :doc:`companies <../general/companies>`
   documentation, or the :doc:`multi-company <../general/companies/multi_company>` documentation.

.. seealso::
   - :doc:`payroll/dashboard`
   - :doc:`payroll/contracts`
   - :doc:`payroll/salaries`
   - :doc:`payroll/salary_rules`
   - :doc:`payroll/work_entries`
   - :doc:`payroll/working_schedules`
   - :doc:`payroll/time_off_to_report`
   - :doc:`payroll/salary_attachments`
   - :doc:`payroll/payslips`
   - :doc:`payroll/pay_runs`
   - :doc:`payroll/commissions`
   - :doc:`payroll/headcount`
   - :doc:`payroll/reporting`
   - :doc:`payroll/payroll_localizations`

.. toctree::
   :titlesonly:

   payroll/dashboard
   payroll/contracts
   payroll/salaries
   payroll/salary_rules
   payroll/work_entries
   payroll/working_schedules
   payroll/time_off_to_report
   payroll/salary_attachments
   payroll/payslips
   payroll/pay_runs
   payroll/commissions
   payroll/headcount
   payroll/reporting
   payroll/payroll_localizations
