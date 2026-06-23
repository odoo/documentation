=======
Morocco
=======

The **Morocco Payroll** localization provides a complete implementation of Moroccan payroll
regulations, including progressive income tax (:abbr:`IGR (Impôt Général sur le Revenu)`),
:abbr:`CNSS (Caisse Nationale de Sécurité Sociale)` and
:abbr:`AMO (Assurance Maladie Obligatoire)` contributions,
:abbr:`CIMR (Caisse Interprofessionnelle Marocaine de Retraite)` retirement fund,
seniority-based bonuses, and overtime premiums. Company-level settings record employer
contribution details and collective agreement references.

Before configuring the Morocco localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/ma_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Morocco payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Morocco - Payroll`
     - ``l10n_ma_hr_payroll``
     - Provides the salary structure, income tax, CNSS, AMO, CIMR contributions, seniority
       bonus, and overtime rules for Moroccan payroll.
   * - :guilabel:`Morocco - Payroll with Accounting`
     - ``l10n_ma_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Morocco
       localization.

General configuration
=====================

Navigate to :menuselection:`Settings app --> Users & Companies --> Companies`, select the
company, and configure the following fields in the :guilabel:`Morocco` section:

.. list-table::
   :header-rows: 1
   :widths: 35 65

   * - Field
     - Description
   * - :guilabel:`Employer Contribution (%)`
     - Company-wide employer contribution percentage used in reporting.
   * - :guilabel:`Social Security Organisation`
     - Name or code of the relevant body (e.g., CNSS, CIMR).
   * - :guilabel:`Collective Agreement`
     - Reference to the applicable collective labour agreement (*convention collective*).

Employee configuration
======================

The following fields on the employee record are specific to the Morocco localization:

.. list-table::
   :header-rows: 1
   :widths: 30 70

   * - Field
     - Description
   * - :guilabel:`CIN Number`
     - Employee's national identity card (*Carte d'Identité Nationale*) number.
   * - :guilabel:`CNSS Number`
     - Employee's CNSS social security registration number.
   * - :guilabel:`CIMR Number`
     - Employee's CIMR retirement fund number.
   * - :guilabel:`Mutual Insurance Number`
     - Employee's mutual insurance membership number.
   * - :guilabel:`Kilometric Exemption`
     - Monthly mileage deduction amount (non-taxable reimbursement).
   * - :guilabel:`Transport Exemption`
     - Monthly transport deduction (non-taxable reimbursement).
   * - :guilabel:`House Rent Allowance (HRA)`
     - Monthly housing allowance paid to the employee.
   * - :guilabel:`Dearness Allowance (DA)`
     - Monthly cost-of-living supplement.
   * - :guilabel:`Meal Allowance`
     - Monthly meal allowance (capped at 20% of basic salary).
   * - :guilabel:`Medical Allowance`
     - Monthly medical/health allowance.

Salary structure
================

When the Morocco localization is installed, a single salary structure is available:
**Moroccan Payroll Structure** (code ``MARMONTHLY``), linked to the
**Morocco: Employee** structure type with a monthly payment schedule.

Salary rules
------------

**Earnings**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``BASIC``
     - Monthly wage as defined on the contract.
   * - ``EXTRA_HOURS_25``
     - Overtime hours at a 25% premium (quantity input in hours).
   * - ``EXTRA_HOURS_50``
     - Overtime hours at a 50% premium.
   * - ``EXTRA_HOURS_100``
     - Overtime hours at a 100% premium.
   * - ``SENIORITY``
     - Seniority bonus based on years of service (see `Seniority bonus`_).
   * - ``KILOMETRIC_EXEMPTION``
     - Non-taxable mileage reimbursement.
   * - ``TRANSPORT_EXEMPTION``
     - Non-taxable transport reimbursement.
   * - ``HRA``
     - House Rent Allowance.
   * - ``DA``
     - Dearness Allowance.
   * - ``MEAL_A``
     - Meal Allowance (capped at 20% of basic).
   * - ``MED_A``
     - Medical Allowance.
   * - ``INDMTD``
     - Miscellaneous taxable indemnity (payslip input).
   * - ``INDMNTD``
     - Miscellaneous non-taxable indemnity (payslip input).

**Employee contributions (deducted from gross)**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``E_CNSS``
     - Employee CNSS contribution (4.48%, capped at MAD 6,000).
   * - ``JOB_LOSS_ALW``
     - Job loss insurance contribution (0.19%, capped at MAD 6,000).
   * - ``E_AMO``
     - Employee AMO health insurance contribution (2.26%).
   * - ``MEDICAL_ALW``
     - Medical allowance contribution (2.26%).
   * - ``CIMR``
     - CIMR retirement fund contribution (3%, capped at MAD 2,500).
   * - ``PRO_CONTRIBUTION``
     - Professional contribution (3%).

**Tax computation**

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Code
     - Description
   * - ``GROSS``
     - Total taxable earnings (basic + all allowances).
   * - ``TOTAL_UT_DED``
     - Sum of all non-taxable deductions (CNSS, Job Loss, AMO, Medical, CIMR,
       Professional Contribution).
   * - ``GROSS_TAXABLE``
     - Gross minus non-taxable deductions, capped at MAD 40,000.
   * - ``GROSS_INCOME_TAX``
     - Gross income tax using the progressive brackets.
   * - ``FAMILY_CHARGE``
     - Deduction for family charges.
   * - ``FAMILY_ALLOWANCE``
     - Employer family allowance calculation.
   * - ``NET_INCOME_TAX``
     - Net income tax after family deductions.
   * - ``NET``
     - Final take-home pay.

Seniority bonus
===============

The seniority bonus is a percentage of the basic salary that increases with years of
service:

.. list-table::
   :header-rows: 1
   :widths: 40 30 30

   * - Years of service
     - Rate
     - Notes
   * - Less than 2 years
     - 0 %
     -
   * - 2 – 4 years
     - 5 %
     -
   * - 5 – 11 years
     - 10 %
     -
   * - 12 – 19 years
     - 15 %
     -
   * - 20 – 24 years
     - 20 %
     -
   * - 25 years and above
     - 25 %
     -

Odoo automatically calculates seniority from the contract start date.

Income tax
==========

The taxable base (*assiette*) is computed as:

   Gross – Non-taxable deductions (CNSS, Job Loss, AMO, Medical, CIMR, Professional)

The base is then capped at MAD 40,000 (the social security ceiling). Progressive tax is
applied as follows:

.. list-table::
   :header-rows: 1
   :widths: 45 20 35

   * - Annual taxable income (MAD)
     - Rate
     - Fixed deduction (MAD)
   * - Up to 30,000
     - 0 %
     - 0
   * - 30,001 – 50,004
     - 10 %
     - 3,000
   * - 50,005 – 60,000
     - 20 %
     - 8,001
   * - 60,001 – 80,004
     - 30 %
     - 14,001
   * - 80,005 – 180,000
     - 34 %
     - 17,201
   * - Above 180,000
     - 38 %
     - 24,401

.. note::
   Morocco uses an annual tax base. Odoo divides the annual thresholds by 12 to arrive at
   the monthly equivalent for payslip computation.

Employer contributions
======================

The following employer costs are computed automatically but are **not** shown on the
employee payslip (they are for company costing purposes only):

.. list-table::
   :header-rows: 1
   :widths: 50 25 25

   * - Contribution
     - Rate
     - Cap (MAD)
   * - Family Allocation
     - 6.40 %
     - —
   * - Social Benefits (CNSS employer share)
     - 8.98 %
     - 6,000
   * - Professional Training
     - 1.60 %
     - —
   * - AMO (employer share)
     - 4.11 %
     - —
   * - Mutual Insurance (employer share)
     - 2.59 %
     - —
   * - CIMR (employer share)
     - 3.90 %
     - —

Rule parameters
===============

All rates, thresholds, and the seniority bracket table are stored as rule parameters.
Navigate to :menuselection:`Payroll app --> Configuration --> Rule Parameters` to
review them.

.. important::
   It is recommended **not to modify** rule parameters unless there is an official change
   in Moroccan tax or social security regulations.
