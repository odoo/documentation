=====
Kenya
=====

.. |NSSF| replace:: :abbr:`NSSF (National Social Security Fund)`
.. |KRA| replace:: :abbr:`KRA (Kenya Revenue Authority)`
.. |SHIF| replace:: :abbr:`SHIF (Social Health Insurance Fund)`
.. |NHIF| replace:: :abbr:`NHIF (National Health Insurance Fund)`
.. |PAYE| replace:: :abbr:`PAYE (Pay As You Earn)`
.. |SHA| replace:: :abbr:`SHA (Social Health Authority)`

The Kenya **Payroll** localization package enables payroll management that complies with Kenyan
statutory requirements.

Configuration
=============

:ref:`Install <general/install>` the following modules to get all the features of the Kenya
**Payroll** localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Kenya - Payroll`
     - `l10n_ke_hr_payroll`
     - Payroll module includes all employee details, salary rules, allowances, deductions, and leave
       management, for compliance with Kenyan laws.
   * - :guilabel:`Kenya - Payroll with Accounting`
     - `l10n_ke_hr_payroll_account`
     - Adds account mappings related to payroll calculations.
   * - :guilabel:`Documents - Kenyan Payroll`
     - `documents_l10n_ke_hr_payroll`
     - Employee Tax Deduction Card forms are automatically integrated to the **Documents** app.

.. seealso::
   :doc:`Kenya fiscal localization documentation <../../../finance/fiscal_localizations/kenya>`

Setting up employees
====================

Some employee information is crucial in generating payslips and payroll reports. Ensure the
following fields in the various sections are configured on each :doc:`employee record
<../../employees/new_employee>`.

.. _payroll/l10n_ke/personal:

Personal tab
------------

Some personal employee information is required for payroll processing. Open the *Personal* tab of
the employee record, and ensure the following fields are configured in the *Citizenship* section:

- :guilabel:`Identification No`: Enter the employee's government-issued national identification
  number.
- :guilabel:`KRA PIN`: Enter the employee's 11-digit alphanumeric PIN. This is used when generating
  payslip, P9, and P10 reports.
- :guilabel:`Mortgage interest`: Populate the employee's mortgage interest rate, if applicable.
- :guilabel:`NSSF Number`: Enter the employee's 9 or 10 digit |NSSF| number. This field is required
  for generating payslips and |NSSF| reports.
- :guilabel:`SHIF Number`: Enter the employee's 7 or 8 digit |SHIF| number. This field is required
  for generating |SHIF| reports.

In the *Personal Information* section of the *Personal* tab, ensure the employee's
:guilabel:`Birthday` is configured.

Additionally, if the employee has been legally declared a person with a disability, check the
:guilabel:`Disabled` box in the *Family* section. Odoo automatically adjusts the |PAYE| computation
in line with Kenyan tax regulations.

Payroll tab
-----------

Different fields in the *Payroll* tab must be configured for :ref:`full-time employees
<payroll/l10n_ke/full-time>` and :ref:`secondary employers <payroll/l10n_ke/secondary>`.

.. _payroll/l10n_ke/full-time:

Full-time employees
~~~~~~~~~~~~~~~~~~~

In the *Payroll* tab of the employee form, create or update the :doc:`employee contract
<../contracts>` in the *Contract Overview* section. Next, ensure the following sections and fields
are configured:

- :guilabel:`Pay Category`: Must be set to :guilabel:`Kenya:Employee` to access specific rules and
  computations as required by Kenyan laws.
- :guilabel:`Pension Contribution`: Enter the employee's monthly pension contribution.

  .. important::
     The monthly tax-deductible cap for pension contributions is 30,000 Ksh per month. To automate
     this deduction along with the |NSSF|, ensure the monthly pension amount is entered in this
     field.

- :guilabel:`Allowances`: Enter the various monthly allowances for :guilabel:`Food`,
  :guilabel:`Airtime`, :guilabel:`Pension`, :guilabel:`Commuter`, and :guilabel:`Housing` if
  provided. This information is automated to calculate taxes based on the applicable benefit caps.

  .. note::
     The :guilabel:`Housing` allowance can be configured either as a set cost per month
     (:guilabel:`/month`) or a percentage :guilabel:`(% Percentage)`.

- :guilabel:`Insurance`: Enter the monthly :guilabel:`Voluntary Medical insurance`, :guilabel:`Life
  Insurance`, and :guilabel:`Education` insurance costs for the employee.

.. _payroll/l10n_ke/secondary:

Secondary employers
~~~~~~~~~~~~~~~~~~~

Click the checkbox next to :guilabel:`Secondary Contract` if the employee has a primary contract
with another employer. When checked, the *Insurance* section is removed from the *Payroll* tab, as
insurance is managed by the primary employer.

Selecting this checkbox allows Odoo to automatically apply statutory requirements in compliance with
Kenyan regulations for secondary employment.

Run Kenyan payroll
==================

Payslips are generated either :doc:`individually <../payslips>` or in a group, referred to as
:doc:`pay runs <../pay_runs>`.

The following sections are particularly important to consider when processing payroll in Kenya.

Salary inputs
-------------

The *Salary Inputs* tab of a payslip includes additional benefits and deductions that may vary per
employee, such as :abbr:`HELB (Higher Education Loans Board)` loan repayments, salary advances,
fringe benefits, and other salary attachments.

Entries that occur consistently can be automated using :doc:`salary attachments
<../salary_attachments>`, and are automatically added as *salary inputs*. Other inputs that are
one-off items, such as a salary advance, can be manually added as a salary input.

To manually add a salary input, click the :icon:`fa-plus` :guilabel:`Add Inputs` button.

Salary computation tab
----------------------

The *Salary Computation* tab contains the computations used to generate the final figures displayed
on the payslip, as well as the amounts posted to the accounting journal entries.

.. note::
   No tax deductions are applied in the computation of income tax since they are already factored in
   by the employee's primary employer.

Reports
=======

The reports in the following sections are available, including Kenya specific reports. All reports
can be downloaded.

.. important::
   A valid National ID number, |NSSF| number, and |NHIF|/|SHIF| number **must** be configured in the
   *Personal* tab of the :ref:`employee's record <employees/private-info>` to generate :ref:`NSSF
   <payroll/l10n_ke/nssf>` and :ref:`SHIF/NHIF <payroll/l10n_ke/shif>` reports.

Master payroll
--------------

To generate a master payroll report by month, navigate to :menuselection:`Payroll app --> Reporting
--> Payslip Lines`. Next, click into the search bar and click the :guilabel:`Date` drop-down menu,
revealing various months and quarters. Click the desired month, and the report displays all payslips
for that month.

P9 report
---------

Employers in Kenya are required to provide each employee with a document summarizing their total
earnings, various deductions, and tax contributions made that year, so that taxes can be properly
calculated and paid.

The P9 report is what the company creates, which contains all the tax information.

Each individual employee receives a *tax deduction card*, which contains all their various earnings.

The various *tax deduction cards* together make up the P9 report.

.. note::
   All payslips for the desired year must have a status of :guilabel:`Done` to generate the P9
   report.

To generate the P9 report, navigate to :menuselection:`Payroll app --> Reporting --> P9 Report`.
Click the :guilabel:`New` button, and a *Tax Deduction card* form loads, and an :icon:`fa-users`
:guilabel:`Eligible Employees` smart button appears at the top, displaying `0` (zero).

Using the drop-down menu, select the :guilabel:`Year` in the corresponding field. Update the
:guilabel:`Description`, if needed, then click :guilabel:`Populate`. The :icon:`fa-users`
:guilabel:`Eligible Employees` smart button updates with the number of employees included in the
report for that year.

To view the employees and generate the individual cards, click the :icon:`fa-users`
:guilabel:`Eligible Employees` smart button, and a list of all employees appears. Select all the
employees by clicking the checkbox next to :guilabel:`Employee` at the top, then click the
:guilabel:`Generate Reports (#)` button.

Once the reports are processed, each corresponding report appears in the :guilabel:`PDF File` column
of the employee list. All successfully generated reports have a :guilabel:`State` of
:guilabel:`Generated PDF`.

Next, select where the document is stored using the drop-down menu in the :guilabel:`Document`
column. Once a destination is selected, the :guilabel:`State` of the PDF changes to
:guilabel:`Posted PDF`.

To download and view any of the PDF files, click on the file link, and select where to save the
file.

.. _payroll/l10n_ke/shif:

SHIF (NHIF) report
------------------

A |SHIF| report is required by Kenya's |SHA| and details each employee's contributions and benefits.

.. note::
   In 2025, Kenya switched from the |NHIF| to the |SHIF|.

To create the |SHIF| report, navigate to :menuselection:`Payroll app --> Reporting --> SHIF (NHIF)
report`, and a *SHIF (NHIF) Report* pop-up window loads. Only two fields must be configured: the
:guilabel:`Month` and :guilabel:`Year` fields. The current month and year populate the corresponding
dates by default, but can be modified using the drop-down menu.

All relevant payslips for the selected time period appear in the window in a list view. Each entry
displays the :guilabel:`Payslip Name`, :guilabel:`Employee`, :guilabel:`Identification No`,
:guilabel:`SHIF Number`, and :guilabel:`SHIF Amount`.

Any individual payslip can be removed from the report by clicking the :icon:`fa-trash-o`
:guilabel:`(Delete)` icon at the end of the row.

Click the :guilabel:`Export XLSX` button, and the report is generated.

.. note::
   All payslips for the selected month must have a status of :guilabel:`Done` to generate the SHIF
   report.

.. tip::
   |SHIF| excel reports can be uploaded directly to |SHIF| (|NHIF|) portals.

.. important::
   |SHIF| reports are not applicable to employees under a secondary employer contract.

.. _payroll/l10n_ke/nssf:

NSSF report
-----------

An |NSSF| report logs all the necessary information regarding employee payments and contributions to
the |NSSF|.

.. important::
   Tier 11 |NSSF| and voluntary pension can be remitted to either |NSSF| or a third party insurance,
   and must be defined on the employee's contract.

   On the employee contract, in the :guilabel:`Pension Remit To` field, select either
   :guilabel:`NSSF` or :guilabel:`Insurance`.

To access this report, navigate to :menuselection:`Payroll app --> Reporting --> NSSF Report`, and
an *NSSF Report* pop-up window loads.

The :guilabel:`Month` and :guilabel:`Year` fields are automatically populated with the current month
and year. If needed, these dates can be modified.

Odoo automatically populates the various fields for employees with generated entries for the
selected time period.

To generate |NSSF| reports for an employee, the employee **must** have the following fields
configured in the *Citizenship* section of the :ref:`Personal <payroll/l10n_ke/personal>` tab of
their employee record:

- :guilabel:`Identification No`
- :guilabel:`NSSF Number`
- :guilabel:`NHIF Number` or :guilabel:`SHIF Number`

To generate the report, click the :guilabel:`Export XLSX` button, select the location to save the
file, then click :guilabel:`Save`. The report is exported, and stored in the selected location.

.. note::
   All payslips for the selected month must have a status of :guilabel:`Done` to generate the |NSSF|
   report.

.. important::
   |NSSF| reports are not applicable to employees under a secondary employer contract.

.. tip::
   |NSSF| excel reports can be uploaded directly to |NSSF| portals.
