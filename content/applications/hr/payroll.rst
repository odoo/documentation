:show-content:

=======
Payroll
=======

Odoo's **Payroll** app is used to calculate employee's worked time in conjunction with other Odoo
apps, such as **Employees**, **Time Off**, **Attendances**, and **Planning**, and create
corresponding payslips.

When an employee is hired, they must sign a :doc:`contract <payroll/contracts>`. The contract
outlines how the employee is compensated, including the salary structure and rules their pay is
calculated from, when they work (their `working schedule`), and what benefits the receive.

.. important::
   It is critical to install the correct :doc:`country-specific localization
   <payroll/payroll_localizations>`, as this configures all local and national rules, regulations,
   and applicable taxes for the selected country.

In addition to the employee contract, any :doc:`salary attachments <payroll/salary_attachments>`
must be configured before running payroll.

When it is time to run payroll according to the business's schedule (monthly, weekly, bi-weekly,
etc,), :doc:`payslips <payslips>` can be created individually or in :doc:`groups <payroll/batches>`.
Odoo calculates when the employees worked, based on their :doc:`work entries
<payroll/work_entries>`. These are created according to their contracts, either from the
**Attendances**, **Planning**, or

**Timesheets** apps. Any errors with work entries **must** be resolved *before* continuing to
process payroll.

After all issues or conflicts are resolved, payslips are calculated then validated.

Once that is complete, employees are paid either with a wire transfer or a physical check.

.. note::
   It is possible to pay employees with cash, but this is not typical.

Settings
========

Before running payroll, various settings for the **Payroll** app **must** be configured. Navigate to
:menuselection:`Payroll app --> Configuration --> Settings`. The various settings for
:ref:`accounting <payroll-accounting>`, :ref:`localizations <payroll-localizations>`, :ref:`time
off <payroll-time-off>`, and :ref:`general payroll settings <payroll-payroll-settings>` are
specified here.

.. _payroll-accounting:

Accounting
----------

The accounting section of the configuration menu contains three options:

- :guilabel:`Payroll Entries`: Enable this option to post payroll slips in accounting.
- :guilabel:`Payroll SEPA`: Enable this option to create :abbr:`SEPA (Single Euro Payments Area)`
  payments.
- :guilabel:`Batch Account Move Lines`: Enable this option to have a single account move line
  created from all the accounting entries from the same period. This disables the generation of
  single payments.

.. _payroll-localizations:

Localizations
-------------

*Localizations* are country-specific settings preconfigured in Odoo at the creation of the
database, which account for all taxes, fees, and allowances for that particular country.

The :guilabel:`Localization` section of the **Payroll** app :guilabel:`Settings` page includes
specific settings that need to be configured for the specific country.

The settings and options shown in this section varies, depending on the :doc:`localization enabled
<payroll_localizations>` for the database.

.. warning::
   It is **not** recommended to alter the localization settings, unless specifically required.

.. note::
   Odoo can handle a multi-company configuration. This is generally done when there is a main
   company or office location, such as a headquarters, and there are other offices/branches around
   the country or globe, that fall under that main company or headquarters. In Odoo, each company,
   including the headquarters, must be set up as their own company/branch using the multi-company
   method.

   Each individual company can have a different localization setting, since locations can vary
   anywhere in the world, where rules and laws differ.

   For more information on companies, refer to the :doc:`Companies <../general/companies>`
   documentation, which covers how to set up companies.

.. seealso::
   :doc:`payroll_localizations`

.. _payroll-time-off:

Time off
--------

- :guilabel:`Deferred Time Off`: If time off is taken *after* payslips are validated, the time off
  needs to be applied to the following pay period. Select the person that is notified for these
  specific time off situations using the drop-down menu in the :guilabel:`Responsible` field.

  .. example::
     An employee is paid on the 15th of the month and the last day of the month. Payslips are
     typically processed a day before.

     If an employee's payslip is approved and processed on the 30th, but that same employee takes an
     unexpected sick day on the 31st, the time off needs to be logged.

     Since the employee is already paid for a regular work day on the 31st, to keep the time off
     balances correct, the sick day is moved/applied to the 1st of the next month (the next pay
     period).

.. _payroll-payroll-settings:

Payroll
-------

- :guilabel:`Payslip PDF Display`: Enable this option to show the payslip's PDF when the state is
  validated.
- :guilabel:`Contract Expiration Notice Period`: Enter the number of :guilabel:`Days` before a
  contract expires, when Odoo notifies the responsible person about the upcoming expiration.
- :guilabel:`Work Permit Expiration Notice Period`: Enter the number of :guilabel:`Days` before a
  work permit expires, when Odoo notifies the responsible person about the upcoming expiration.
- :guilabel:`YTD Reset Date`: Enter the date when the :abbr:`YTD (Year To Date)` is reset to. By
  default, this field is set to January first.

.. seealso::
   - :doc:`payroll/contracts`
   - :doc:`payroll/work_entries`
   - :doc:`payroll/time_off_to_report`
   - :doc:`payroll/salary_attachments`
   - :doc:`payroll/payslips`
   - :doc:`payroll/batches`
   - :doc:`payroll/commissions`
   - :doc:`payroll/reporting`
   - :doc:`payroll/headcount`
   - :doc:`payroll/work_entry_analysis`
   - :doc:`payroll/payroll_localizations`

.. toctree::
   :titlesonly:

   payroll/contracts
   payroll/work_entries
   payroll/time_off_to_report
   payroll/salary_attachments
   payroll/payslips
   payroll/batches
   payroll/commissions
   payroll/reporting
   payroll/headcount
   payroll/work_entry_analysis
   payroll/payroll_localizations
