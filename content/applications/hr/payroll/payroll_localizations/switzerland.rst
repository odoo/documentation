===========
Switzerland
===========

.. |CH| replace:: :abbr:`CH (Switzerland)`
.. |AVS| replace:: :abbr:`AVS (Assurance Vieillesse et Survivants — Old Age and Survivors' Insurance)`
.. |AC| replace:: :abbr:`AC (Assurance Chômage — Unemployment Insurance)`
.. |LPP| replace:: :abbr:`LPP (Loi sur la Prévoyance Professionnelle — Occupational Pension)`
.. |LAA| replace:: :abbr:`LAA (Loi sur l'Assurance Accidents — Accident Insurance)`
.. |LAAC| replace:: :abbr:`LAAC (Assurance-accidents complémentaire — Supplementary Accident Insurance)`
.. |IJM| replace:: :abbr:`IJM (Indemnité Journalière en cas de Maladie — Daily Sickness Benefit)`
.. |CAF| replace:: :abbr:`CAF (Caisse d'Allocations Familiales — Family Allowance Fund)`
.. |ELM| replace:: :abbr:`ELM (Einheitliches Lohnmeldeverfahren — Uniform Salary Declaration Process)`
.. |IAP| replace:: :abbr:`IAP (In-App Purchase)`

The **Switzerland Payroll** localization is **Swissdec ELM 5.0 certified** and provides a
comprehensive implementation of Swiss payroll law. It covers all mandatory insurances
(|AVS|/|AC|, |LPP|, |LAA|, |LAAC|, |IJM|, |CAF|), source tax (*impôt à la source*)
with canton-specific progressive rate tables, three wage types (monthly, hourly, and
lesson-based), 13th/14th month salary support, cross-border commuter handling, and direct
declaration transmission to Swiss authorities via the Swissdec platform.

Before configuring the Switzerland localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/ch_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Switzerland payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Switzerland - Swissdec Certified ELM 5.0 - Payroll`
     - ``l10n_ch_hr_payroll``
     - Core Swiss payroll: ELM 5.0 salary structure, all insurance rules, source tax, 13th
       month, and Swissdec declarations.
   * - :guilabel:`Switzerland - Payroll with Accounting`
     - ``l10n_ch_hr_payroll_account``
     - Adds accounting entries and journal mappings for Swiss payslips.

Company configuration
=====================

Navigate to :menuselection:`Settings app --> Users & Companies --> Companies`, select the
company, and open the :guilabel:`Switzerland` tab to configure:

**Company identification**

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`IDE-OFS / UID`
     - Unique company identifier (validated with Modulo 11 checksum). Required for all
       Swissdec transmissions.
   * - :guilabel:`Transmission Language`
     - Language used in Swissdec declarations (German, French, or Italian).
   * - :guilabel:`30-Day Method`
     - Enable to use the 30-day calculation method for monthly salaried employees.
   * - :guilabel:`Agricultural Company`
     - Mark if the company operates in the agricultural sector.

**Insurance institutions**

Add the insurance providers used by the company. Each institution type has its own
sub-list:

- |AVS| / |AC| institutions
- |LPP| pension funds
- :abbr:`AAP/AANP (Accident Insurance Mandatory/Non-Mandatory)` institutions (LAA)
- |LAAC| supplementary accident insurance institutions
- |IJM| sickness insurance institutions
- |CAF| family allowance funds

**Work locations**

Each distinct work location is configured as a :guilabel:`Location Unit` with a
:guilabel:`BUR-REE` number (Swiss statistical office identifier), municipality, canton,
and weekly working hours or lessons.

**Delegation (optional)**

If payroll is processed by an external payroll bureau, enable
:guilabel:`Uses External Payroll Provider` and enter the delegate's company name,
:abbr:`UID (Unique Identifier)`, and address.

Employee configuration
======================

The Swiss payroll employee form contains extensive fields organised into several sections.

Social insurance
----------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`SV/AS Number`
     - Employee's 13-digit Swiss social insurance number (*Sozialversicherungsnummer*).
       Required for all declarations.
   * - :guilabel:`AVS/AC Institution`
     - The |AVS|/|AC| institution covering this employee.
   * - :guilabel:`LPP Insurance`
     - The occupational pension fund assigned to the employee.
   * - :guilabel:`LPP Not Insured`
     - Tick if the employee is exempt from |LPP| (e.g., part-time below the threshold).
   * - :guilabel:`Accident Insurance Group`
     - Determines the |LAA| accident insurance rate (A–Z risk groups).
   * - :guilabel:`Supplementary Accident Insurance`
     - |LAAC| coverage lines (can have multiple).
   * - :guilabel:`Sickness Insurance`
     - |IJM| daily sick-pay insurance lines (can have multiple).
   * - :guilabel:`Family Allowance Fund`
     - |CAF| institution for child allowances.

Source tax (Impôt à la source)
--------------------------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Tax Scale Type`
     - Choose between a standard *TaxAtSourceCode* or a *RelativelyApprovedTaxScale*.
   * - :guilabel:`Pre-defined Tax Scale`
     - Select a standard scale category (e.g., married, single, with children).
   * - :guilabel:`Custom Tax Scale Code`
     - Enter a manually-defined scale code if using an open/custom scale.
   * - :guilabel:`Tax Model`
     - **Monthly** (most cantons) or **Yearly** (required for GE, FR, TI, VS, VD which use
       annual retrospective calculations).
   * - :guilabel:`Source Tax Canton`
     - Derived automatically from the employee's residence address.
   * - :guilabel:`Specially Approved by ACI`
     - Tick for employees whose tax rate has been specifically approved by the cantonal
       tax authority (*ACI*).

Employment details
------------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Work Location`
     - The :guilabel:`Location Unit` where the employee works (BUR-REE number).
   * - :guilabel:`Occupation Rate (%)`
     - Employment percentage (e.g., 100% for full-time, 50% for part-time).
   * - :guilabel:`Weekly Hours`
     - Contractual weekly working hours.
   * - :guilabel:`13th Month`
     - Tick to include a 13th monthly salary for this employee.
   * - :guilabel:`14th Month`
     - Tick to include a 14th monthly salary.
   * - :guilabel:`Contractual 13th Month Rate`
     - Percentage used to calculate the 13th month accrual (default: 8.3333%).
   * - :guilabel:`Vacation Pay`
     - Tick to pay out vacation pay monthly rather than in a lump sum.
   * - :guilabel:`Annual Leave Days`
     - Number of contractual annual leave days.

Multiple employment
-------------------

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Other Employment`
     - Tick if the employee has another employer simultaneously.
   * - :guilabel:`Other Activity Percentage`
     - Occupation rate at the other employer.
   * - :guilabel:`Other Activity Gross`
     - Monthly gross income from the other employer (used for source tax calculation).
   * - :guilabel:`Other Activity Type`
     - Nature of the other employment (salaried or self-employed).

Cross-border commuters
----------------------

For employees who reside abroad but work in Switzerland, enable
:guilabel:`Cross-Border Commuter` and complete the following:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Foreign Tax ID`
     - Tax identifier in the employee's country of residence.
   * - :guilabel:`Cross-Border Start Date`
     - Date from which the cross-border status applies.
   * - :guilabel:`Residence Type`
     - :guilabel:`Daily` — the employee returns home every evening;
       :guilabel:`Weekly` — the employee stays in Switzerland during the week.
   * - Weekly residence address
     - Swiss address where the employee stays during the week (canton, municipality,
       street, zip, city).

Wage types
==========

Swiss payroll supports three wage types, which can be combined on a single employee:

.. list-table::
   :header-rows: 1
   :widths: 20 80

   * - Wage type
     - Description
   * - **Monthly salary**
     - Fixed gross amount paid each month. The standard wage type.
   * - **Hourly salary**
     - Paid per hour worked, entered as hours in the payslip worked-day lines.
       Suitable for variable-hour employees.
   * - **Lesson wage**
     - Per-lesson rate for teachers or trainers.

Wage components can be configured as one-time (bonuses) or recurrent (regular allowances)
directly on the employee record under :guilabel:`Wage Components`.

Salary structure
================

When the Switzerland localization is installed, a single salary structure is available:
**Switzerland: ELM Salaries** (code ``CHMONTHLYELM``), which is |ELM| 5.0 certified.
It does not use traditional worked-day lines — all wage calculations follow the Swissdec
standard.

Insurance contributions
=======================

Insurance contributions are calculated automatically based on the institutions and
coverage lines configured on the employee record. The rules reference the rates stored
for each institution.

AVS / AC (1st pillar)
---------------------

.. list-table::
   :header-rows: 1
   :widths: 50 25 25

   * - Contribution
     - Employee
     - Employer
   * - |AVS| (Old Age and Survivors')
     - 5.3 % (typical)
     - 5.3 % (typical)
   * - |AC| (Unemployment)
     - Varies by institution
     - Varies by institution
   * - Administration fees
     - —
     - ~1.2 %

Rates and thresholds are defined per institution and updated annually.

LPP (2nd pillar — Occupational Pension)
-----------------------------------------

|LPP| contributions are configured per insurance solution on the employee's assigned LPP
fund. The employee and employer shares, entry and withdrawal reasons, and the LPP
solutions (benefit codes) are all managed through the insurance institution records.

- **LPP forecast:** contributions are projected to the 13th month automatically (factor 13).
- **LPP retroactive:** used for variable-pay employees (hourly/lesson) whose LPP base
  is known only after hours are entered.
- **Not insured:** employees below the LPP income threshold can be flagged as exempt.

LAA — Accident insurance (3rd pillar)
---------------------------------------

Accident insurance is mandatory in Switzerland. The rate depends on the employee's
**accident insurance group** (A–Z), which reflects occupational risk level.

.. list-table::
   :header-rows: 1
   :widths: 35 30 35

   * - Coverage
     - Abbr.
     - Notes
   * - Occupational accident (AAP)
     - Employer only
     - Mandatory; rate from group
   * - Non-occupational accident (AANP)
     - Employee contribution
     - Mandatory for employees ≥ 8h/week; rate from group
   * - Supplementary (LAAC)
     - Employee and/or employer
     - Optional additional coverage

LAAC and IJM
------------

:guilabel:`Supplementary Accident Insurance (LAAC)` and
:guilabel:`Daily Sickness Insurance (IJM)` are optional additional coverages.
Multiple lines can be assigned to a single employee, each with its own rate.

CAF — Family allowances
------------------------

The |CAF| institution pays statutory child allowances to employees with dependent children.
Rates vary by canton and are configured on the compensation fund institution record.

Source tax
==========

Source tax (*impôt à la source*) is withheld from employees who are not permanent
Swiss residents. The tax is calculated using progressive tables that are specific to
each canton.

Importing tax rates
--------------------

Tax rate tables are imported directly from the Swiss tax authority. Navigate to
:menuselection:`Payroll app --> Configuration --> Import Tax Rates` to import the latest
tables.

The wizard supports:

- Importing **all cantons** at once or a **single canton**.
- Selecting the **tax year** (2024, 2025, 2026).
- Automatic download from official sources or **manual file upload**.

.. important::
   Import updated tax rates each year before processing the first January payslips.

Tax models
----------

Source tax uses two calculation models:

- **Monthly model**: Tax is calculated and withheld each month based on that month's
  gross income. Used by most cantons.
- **Yearly model**: Tax is calculated annually and distributed across the year.
  Required for the cantons of **GE, FR, TI, VS, and VD**.

Tax scale
----------

Each employee is assigned a tax scale code that reflects their family and income
situation. The scale determines which progressive rate table applies. Odoo automatically
derives the canton from the employee's home address.

13th and 14th month salary
===========================

The 13th (and optionally 14th) month salary is managed automatically:

- When :guilabel:`13th Month` is enabled on the employee, Odoo accrues 1/12 of the annual
  13th month amount each regular payslip (if :guilabel:`Vacation Pay` is enabled) or
  pays it out as a separate payslip.
- The contractual 13th month rate defaults to **8.3333%** (1/12) of the annual salary.
- Alternatively, a :guilabel:`Contractual Annual Wage` can be set and divided by 12 to
  derive a fixed monthly accrual.
- To pay all employees their 13th month in a payslip batch, enable
  :guilabel:`Pay 13th Month` on the payslip run.

Work interruptions
==================

Leaves that constitute a work interruption (parental leave, long-term illness, etc.) are
flagged on the leave record using :guilabel:`Swissdec Work Interruption`. Such interruptions:

- Must span complete calendar months (1st to last day).
- Prevent payslip creation for the covered period.
- Allow optional continuation of |LPP| contributions (:guilabel:`Continue LPP During
  Interruption`).
- Can record a :guilabel:`Continued Pay Percentage` (0–100%) and a
  :guilabel:`Disability Percentage` for partial pay scenarios.

Swissdec declarations
=====================

Odoo transmits payroll data directly to Swiss authorities (AVS funds, tax offices,
statistical offices) using the Swissdec ELM 5.0 standard. This is done via
:abbr:`IAP (In-App Purchase)` credits.

Navigate to :menuselection:`Payroll app --> Reporting --> Swissdec Declarations` to
manage transmissions.

For each transmission, Odoo:

#. Generates an ELM-compliant XML payload containing all required payroll data.
#. Sends the payload to the Swissdec gateway.
#. Polls for the processing result and displays plausibility checks and any errors.
#. Archives the XML for audit purposes.

Test mode is available to verify declarations before submitting to live systems.

Payroll reports
===============

The Switzerland localization includes the following reports:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Report
     - Description
   * - :guilabel:`Swiss Payslip`
     - Employee payslip in ELM-certified format with wage component breakdown and insurance
       detail.
   * - :guilabel:`Individual Account`
     - Employee-level earnings record covering contributions, tax withholding, and pension
       accumulation.
   * - :guilabel:`Monthly Summary`
     - Aggregated payroll summary by insurance institution and statistical category.
   * - :guilabel:`Master Data Report`
     - Company and employee master data including insurance assignments and location units.
   * - :guilabel:`Wage Type Report`
     - Breakdown of all wage components by Swissdec wage-type code (used for statistics).
   * - :guilabel:`Salary Certificate`
     - Annual salary certificate (*certificat de salaire*) transmitted to tax authorities.

Rule parameters
===============

Switzerland uses over 100 rule parameters to store all insurance rates, tax tables,
thresholds, and wage-type mappings. Navigate to
:menuselection:`Payroll app --> Configuration --> Rule Parameters` to review them.

Key parameter groups:

.. list-table::
   :header-rows: 1
   :widths: 45 55

   * - Parameter group
     - Description
   * - ``l10n_ch_withholding_tax_rates_*``
     - Canton-specific source tax tables (all 26 cantons, church tax variants)
   * - ``l10n_ch_avs_rates``
     - |AVS|/|AC| contribution rates by date
   * - ``l10n_ch_lpp_rates``
     - |LPP| contribution rates by insurance solution
   * - ``l10n_ch_laa_rates``
     - |LAA| accident insurance rates by risk group
   * - ``l10n_ch_bfs_municipalities``
     - :abbr:`BFS (Bundesamt für Statistik)` municipality codes and canton mapping

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Swiss insurance or tax regulations. Use the :guilabel:`Import Tax Rates` wizard to
   update source tax tables.
