====
Iraq
====

The **Iraq Payroll** localization provides a complete implementation of Iraqi payroll
regulations, including :abbr:`SSPC (Social Security and Pension Corporation)` contributions with
different rates for oil & gas and non-oil industries, end-of-service benefit calculations, and
annual leave provision accruals and payouts.

Before configuring the Iraq localization, refer to the general
:doc:`payroll <../../payroll>` documentation for basic information common to all
localizations, as well as all universal settings and fields.

.. _payroll/iq_apps:

Apps & Modules
==============

:ref:`Install <general/install>` the following modules to get all the features of the
Iraq payroll localization:

.. list-table::
   :header-rows: 1

   * - Name
     - Technical name
     - Description
   * - :guilabel:`Iraq - Payroll`
     - ``l10n_iq_hr_payroll``
     - Provides the salary structure, SSPC contributions, end-of-service benefits, and
       annual leave provision rules for Iraqi payroll.
   * - :guilabel:`Iraq - Payroll with Accounting`
     - ``l10n_iq_hr_payroll_account``
     - Adds accounting entries and journal mappings for payslips generated under the Iraq
       localization.

General configuration
=====================

Navigate to :menuselection:`Payroll app --> Configuration --> Settings` and configure the
following options under the :guilabel:`Iraq Localization` section:

- :guilabel:`Oil & Gas Company`: Tick this checkbox if the company operates in the oil and
  gas sector. This changes the employer SSPC contribution rate from **12%** to **25%**.
- :guilabel:`Annual Leave Work Entry Type`: Select the work entry type used for annual leave.
  This is required for the remaining-leave compensation calculation on termination.

Employee configuration
======================

The following fields on an employee's active contract are used in payroll calculations:

- :guilabel:`Annual Leave Provision Eligibility (days/year)`: The number of annual leave days
  the employee is entitled to per year (default: 21 days). This figure drives both the monthly
  leave provision accrual and the termination payout.

Salary structure
================

When the Iraq localization is installed, a single salary structure is available:
**Iraq: Monthly Pay** (code ``IQMONTHLY``), linked to the **Iraq: Employee** structure type
with a monthly payment schedule.

Salary rules
------------

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Code
     - Name
     - Description
   * - ``BASIC``
     - Basic Salary
     - Employee's monthly wage as defined on the contract.
   * - ``BONUS``
     - Bonus
     - Optional monthly bonus entered as a payslip input.
   * - ``OTHER_ALLOWANCE``
     - Other Allowance
     - Fixed category allowance; adjusted proportionally for unpaid days.
   * - ``EXPENSES``
     - Expenses Reimbursement
     - Monthly expense reimbursement entered as a payslip input.
   * - ``GROSS``
     - Taxable Salary
     - Sum of basic salary and all allowances.
   * - ``SSPC_EMPLOYEE``
     - SSPC Employee Contribution
     - 5% of the wage base deducted from the employee (see `SSPC contributions`_).
   * - ``SSPC_EMPLOYER``
     - SSPC Employer Contribution
     - Employer's SSPC share; not shown on the employee payslip.
   * - ``EOSP``
     - End of Service Provision
     - Monthly accrual for the future end-of-service liability (not shown to employee).
   * - ``EOSB``
     - End of Service Benefit
     - Lump-sum payment on contract termination (see `End of service benefit`_).
   * - ``ANNUAL_LEAVE_PROVISION``
     - Annual Leave Provision
     - Monthly accrual for annual leave liability (not shown to employee).
   * - ``ANNUAL_LEAVE_PPAYOUT``
     - Annual Leave Payout
     - Amount paid out when the employee takes annual leave.
   * - ``RLC``
     - Remaining Leaves Compensation
     - Paid on termination for unused accrued leave (see `Remaining leaves compensation`_).
   * - ``NET``
     - Net Salary
     - Final take-home pay (basic + allowances − SSPC employee contribution).
   * - ``NETCOST``
     - Net Cost
     - Total employer cost (net pay + all employer contributions); used for costing reports.

SSPC contributions
==================

The :abbr:`SSPC (Social Security and Pension Corporation)` is Iraq's mandatory social
insurance scheme.

**Employee contribution:** 5% of the wage base (first payslip of the year is exempt as
no prior base is available).

**Employer contribution:** varies by sector and employee nationality:

.. list-table::
   :header-rows: 1
   :widths: 50 25 25

   * - Company / Employee type
     - Rate
     - Notes
   * - Oil & gas company (all employees)
     - 25 %
     -
   * - Non-oil & gas company — Iraqi employees
     - 12 %
     -
   * - Non-oil & gas company — non-Iraqi employees
     - 20 %
     - 12% base + 8% surcharge

.. note::
   The oil & gas classification is set on the company record. Refer to
   `General configuration`_ above.

The contribution base is derived from the employee's salary on the **first payslip of
the calendar year**. Subsequent payslips use that amount as the fixed base, so mid-year
salary changes do not affect SSPC until the following year.

End of service benefit
======================

The **End of Service Benefit (EOSB)** is a lump-sum gratuity paid to employees when their
contract ends for reasons other than misconduct.

**Monthly provision (EOSP):** Each month, the following amount is accrued by the company
(not deducted from the employee):

.. math::

   \text{Monthly Provision} = \frac{\text{Contract Wage}}{2 \times 12}

**Lump-sum payment (EOSB):** On contract termination (departure reason = *Contract
Terminated*):

.. math::

   \text{EOSB} = \text{Contract Wage} \times 0.5 \times \text{Service Duration (years)}

Service duration is calculated from contract start to departure date, including partial
years (months ÷ 12 + remaining days ÷ 365), minus any unpaid days.

.. important::
   EOSB is **not** paid if the departure reason is set to :guilabel:`Misconduct`. Configure
   the departure reason on the employee record when archiving the employee to trigger the
   correct calculation.

Annual leave provision
======================

Each month, Odoo accrues the following leave liability:

.. math::

   \text{Monthly Provision} = \frac{\text{Contract Wage}}{\text{Total Days}} \times
   \frac{\text{Eligible Days/Year}}{12}

When the employee actually takes annual leave, the ``ANNUAL_LEAVE_PPAYOUT`` rule pays out
the equivalent daily wage for the leave taken.

Remaining leaves compensation
=============================

On contract termination (*Contract Terminated* only), if the employee has accrued but
unused leave days, the :guilabel:`Remaining Leaves Compensation` rule pays:

.. math::

   \text{RLC} = \frac{\text{Contract Wage}}{\text{Total Days}} \times
   \text{Remaining Balance (days)}

The remaining balance is read from the employee's current leave allocation.
