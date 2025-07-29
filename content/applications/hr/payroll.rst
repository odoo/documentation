:show-content:

=======
Payroll
=======

Odoo's **Payroll** app is used to calculate employees' worked time in conjunction with other Odoo
apps, such as **Employees**, **Time Off**, **Attendances**, and **Planning**, and create
corresponding payslips.

When an employee is hired, they must sign a :doc:`contract <payroll/contracts>`. The contract
outlines how the employee is compensated, including the salary structure and rules their pay is
calculated from, when they work (their `working schedule`), and what benefits they receive.

.. important::
   It is critical to install the correct :doc:`country-specific localization
   <payroll/payroll_localizations>`, as this configures all local and national rules, regulations,
   and applicable taxes for the selected country.

In addition to the employee contract, any :doc:`salary attachments <payroll/salary_attachments>`
must be configured before running payroll.

When it is time to run payroll according to the business's schedule (monthly, weekly, bi-weekly,
etc.), :doc:`payslips <payroll/payslips>` can be created individually or in :doc:`groups
<payroll/batches>`. Odoo calculates when the employees worked based on their :doc:`work entries
<payroll/work_entries>`. Work entries are created according to their :doc:`contracts
<payroll/contracts>`, based on information from the **Attendances**, **Planning**, or **Timesheets**
apps. Any errors with work entries **must** be resolved *before* continuing to process payroll.

After all issues or conflicts are resolved, payslips are :ref:`processed <payroll/process>`, and
then :ref:`employees are paid <payroll/pay-employee>`, either with a wire transfer or a physical
check.

.. note::
   It is possible to pay employees with cash, but this is not recommended.

Settings
========

Before running payroll, various settings for the **Payroll** app **must** be configured. Navigate to
:menuselection:`Payroll app --> Configuration --> Settings`. The various settings for
:ref:`accounting <payroll-accounting>`, :ref:`localizations <payroll-localizations>`, :ref:`time off
<payroll-time-off>`, and :ref:`general payroll settings <payroll-payroll-settings>` are specified
here.

.. _payroll-accounting:

Accounting
----------

Configure the following in the accounting section of the configuration menu:

- :guilabel:`Payroll Entries`: Enable this option to post payroll slips in the **Accounting** app,
  in a `Salaries` box on the main dashboard.
- :guilabel:`Payroll SEPA`: Enable this option to create :abbr:`SEPA (Single Euro Payments Area)`
  payments.
- :guilabel:`Batch Account Move Lines`: Enable this option to have a single account move line
  created from all the accounting entries of the same period. This anonymizes accounting entries and
  disables the creation of individual payments.

.. _payroll-localizations:

Localizations
-------------

*Localizations* are country-specific settings preconfigured in Odoo at the creation of the database,
which account for all taxes, fees, and allowances for that particular country.

The :guilabel:`Localization` section of the **Payroll** app :guilabel:`Settings` page includes
specific settings that need to be configured for the specific country.

The settings and options shown in this section vary, depending on the :doc:`localization enabled
<payroll/payroll_localizations>` for the database.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required due to
   special circumstances. For example, a new law is passed that changes basic salary rules, or a
   company is exempt from specific taxes.

.. note::
   Odoo can handle multi-company configurations. This is generally done when there is a main company
   or office location, such as a headquarters, with other offices or branches located either in the
   country or internationally, that fall under that main company or headquarters. In Odoo, each
   company, including the headquarters, **must** be set up as its own company or branch using the
   multi-company method.

   Each company can have a different localization setting, since locations can vary worldwide, where
   rules and laws differ.

   For more information on companies, refer to the :doc:`companies <../general/companies>`
   documentation, or the :doc:`multi-company <../general/companies/multi_company>` documentation,
   which covers how to set up multiple companies.

.. seealso::
   :doc:`payroll/payroll_localizations`

.. _payroll-time-off:

Time off
--------

:guilabel:`Deferred Time Off`: If time off is taken *after* payslips are validated, the time off
must be applied to the following pay period to avoid cancelling then reprocessing payslips. Select
the person responsible for these specific time off situations using the drop-down menu in the
:guilabel:`Responsible` field.

.. example::
   An employee is paid on the 15th of the month and the last day of the month. Payslips are
   typically processed one day before.

   An employee's payslip is approved and processed on the 30th, but that same employee took an
   unexpected sick day on the 31st.

   Since the employee was already paid for a regular workday on the 31st, to keep the time off
   balances correct, the sick day is applied to the 1st of the next month (during the next pay
   period).

.. _payroll-payroll-settings:

Payroll
-------

The payroll section allows for the installation of a :doc:`payroll localization
<payroll/payroll_localizations>`. Click :icon:`oi-arrow-right` :guilabel:`Choose a Payroll
Localization` and a Kanban view of all available payroll localizations loads. Click
:guilabel:`Install` on the desired localization to install it. If a localization has been installed,
only a :guilabel:`Module Info` button appears for that specific localization.

Once a localization has been installed, configure the following fields:

- :guilabel:`Contract Expiration Notice Period`: Enter the number of :guilabel:`Days` before a
  contract expires, when Odoo notifies the responsible person about the upcoming expiration.
- :guilabel:`Payslip PDF Display`: Enable this option to show the payslip's PDF when the state is
  validated.
- :guilabel:`Work Permit Expiration Notice Period`: Enter the number of :guilabel:`Days` before a
  work permit expires, when Odoo notifies the responsible person about the upcoming expiration.
- :guilabel:`YTD Reset Date`: Enter the date when the :abbr:`YTD (Year To Date)` is reset to. By
  default, this field is set to January 1st.

.. seealso::
   - :doc:`payroll/contracts`
   - :doc:`payroll/salaries`
   - :doc:`payroll/work_entries`
   - :doc:`payroll/working_schedules`
   - :doc:`payroll/time_off_to_report`
   - :doc:`payroll/salary_attachments`
   - :doc:`payroll/payslips`
   - :doc:`payroll/batches`
   - :doc:`payroll/commissions`
   - :doc:`payroll/payroll_analysis`
   - :doc:`payroll/headcount`
   - :doc:`payroll/work_entry_analysis`
   - :doc:`payroll/payroll_localizations`

.. toctree::
   :titlesonly:

   payroll/contracts
   payroll/salaries
   payroll/work_entries
   payroll/working_schedules
   payroll/time_off_to_report
   payroll/salary_attachments
   payroll/payslips
   payroll/batches
   payroll/commissions
   payroll/payroll_analysis
   payroll/headcount
   payroll/work_entry_analysis
   payroll/payroll_localizations
