=========
Contracts
=========

Every employee in Odoo is required to have a running contract in order to be paid. A contract
outlines the terms of an employee's position, compensation, working hours, and any other relevant
terms.

Contracts are created and managed in the *Payroll* tab of an :ref:`employee record
<employees/payroll>`. Employee records can be found by navigating to :menuselection:`Payroll app -->
Employees --> Employees`, or on the main dashboard of the **Employees** app.

.. important::
   Contract documents (PDFs) are uploaded and organized using the **Documents** application, and are
   signed using the **Sign** application. Ensure these applications are installed to send and sign
   contracts. Please refer to the :doc:`../../productivity/documents` and
   :doc:`../../productivity/sign` documentation for more information.

.. _payroll/new-contract:

Create a contract
=================

Contracts are created by uploading a :ref:`contract template <payroll/contract-template>` and making
any necessary modifications for the specific employee. Contract templates eliminate the need to
configure new contracts every time an employee is hired.

Contract templates are created through the configuration menu of the **Payroll** or **Employees**
apps and stored in the **Documents** app. If no contract templates exist, or if a new contract
template is needed, :ref:`create a new template <payroll/contract-template>`.

Having multiple contract templates allows for faster contract creation for commonly filled
employment positions, such as full time, part time, seasonal, etc.

To create a new contract from a template, open the employee record and click into the *Payroll* tab.
Click :guilabel:`Load a Template`, and a *Contract Template Load* pop-up window appears.

Using the drop-down menu, select the contract template for the employee, then click
:guilabel:`Load`. The various fields from the template populate the corresponding fields in the
*Payroll* tab, and the updates are recorded in the chatter. Additional sections may appear,
depending on the contract template. Then, make any required modifications to the fields in the
various sections of the *Payroll* tab.

.. important::
   To access contract templates, the **Salary Configurator** (`hr_contract_salary`) module **must**
   be :ref:`installed <general/install>`. Depending on the installed :doc:`payroll localization
   <payroll_localizations>`, different sections and fields may appear in the *Payroll* tab.

.. _payroll/gen-info:

Contract overview section
-------------------------

The only field *not* modified after loading a :ref:`contract template <payroll/contract-template>`
is the :guilabel:`Contract` field. This field specifies the start date of the contract.

Click into the :guilabel:`Contract` field to reveal a calendar selector. Click the start date for
the contract. Once a date is selected, a :guilabel:`to` field appears next to the start date. By
default, :guilabel:`Indefinite` is displayed in gray, indicating the contract does not expire. If
there is a set end date for the contract, click into the :guilabel:`Indefinite` field, and click on
the contract end date to select it.

.. note::
   This field may remain blank if a start date is not known. Once the contract is signed, that date
   is set as the :guilabel:`Start Date`.

.. _payroll/contract-template:

Create contract templates
=========================

To create a new contract template, navigate to :menuselection:`Payroll app --> Configuration -->
Templates`, or :menuselection:`Employees app --> Configuration --> Contract Templates`. Both methods
open the *Contract Templates* dashboard.

Click the :guilabel:`New` button, and a blank contract template form loads. Configure the following
fields in the various sections of the form:

General information section
---------------------------

- :guilabel:`Template Name`: Enter a brief descriptive name for the template. This should be clear
  and easily understood, as this name appears in the **Recruitment** application, as well.
- :guilabel:`Job`: Select the :doc:`job position <../recruitment/new_job>` the contract template
  applies to from the drop-down menu. If blank, the template applies to all job positions.
- :guilabel:`Department`: Select the department the contract template applies to from the drop-down
  menu. If blank, the template applies to all departments.
- :guilabel:`HR Responsible`: Select the employee responsible for validating contracts, using this
  template, using the drop-down menu.

Contract overview section
-------------------------

- :guilabel:`Wage Type`: Select either :guilabel:`Fixed Wage` or :guilabel:`Hourly Wage` from the
  drop-down menu. Select :guilabel:`Fixed Wage` for salaried employees, and select :guilabel:`Hourly
  Wage` for employees who are paid based on their logged work hours.
- :guilabel:`Pay Schedule`: Using the drop-down menu, select how often the employee is paid. The
  default options are: :guilabel:`year`, :guilabel:`half-year`, :guilabel:`quarter`, :guilabel:`2
  months`, :guilabel:`month`, :guilabel:`half-month`, :guilabel:`2 weeks`, :guilabel:`week`, or
  :guilabel:`day`.
- :guilabel:`Wage`: Enter the gross wage. The time period presented in this field  reflects what is
  selected for the :guilabel:`Pay Schedule` field.

  .. tip::
     It is recommended to populate the :guilabel:`Yearly Cost (Real)` field *first*, since that
     value is used to automatically calculate the :guilabel:`Wage`. If the :guilabel:`Yearly Cost
     (Real)` is updated, the :guilabel:`Wage` field updates as well.

- :guilabel:`Contract Type`: Using the drop-down menu, select one of the 18 default types of
  contracts. This list is the same as the *employment type*.
- :guilabel:`Pay Category`: Select one of the default pay categories using the drop-down menu. The
  default pay categories are :guilabel:`Employee` or :guilabel:`Worker`, which are pulled from the
  configured *salary structures* in the **Payroll** app. A :ref:`new pay category
  <payroll/salaries/new-structure-type>` can be created, if needed.

  .. note::
     In previous versions of Odoo, the :guilabel:`Pay category` was called :guilabel:`Salary
     Structure Types`.

     To view, modify, or add pay categories, navigate to :menuselection:`Payroll app -->
     Configuration --> Structure Types`.

     The :guilabel:`Pay Category` drop-down menu displays all the available working schedules. To
     modify or add to this list, navigate to :menuselection:`Payroll app --> Configuration -->
     Working Schedules`. Click :guilabel:`New`, and create a new working schedule, or click on an
     existing working schedule and make edits.

Employer costs section
----------------------

- :guilabel:`Yearly Cost`: Enter the total yearly cost the employee costs the employer. When this
  value is entered, the :guilabel:`Monthly Cost` and :guilabel:`Wage` fields are automatically
  updated.
- :guilabel:`Monthly Cost`: This field is **not** editable. The value is automatically populated
  after the :guilabel:`Yearly Cost (Real)` is entered.

.. important::
   The :guilabel:`Wage`, :guilabel:`Yearly Cost`, and :guilabel:`Monthly Cost` fields are all
   linked. If any of these fields are updated, the other two fields automatically update to reflect
   the change. It is best practice to check these three fields if any modifications have been made,
   to ensure they are accurate.

- :guilabel:`Wage on Signature`: Enter the monthly wage in the field.

Schedule section
----------------

Configure the following two fields in this section, to configure when the employee is expected to
work:

.. _payroll/work-entry-source:

- :guilabel:`Work Entry Source`: Using the drop-down menu, select how the :doc:`work entries
  <work_entries>` are generated. This field is **required**. The options are:

  - :guilabel:`Working Schedule`: Work entries are generated based on the selected
    :guilabel:`Working Schedule`.
  - :guilabel:`Attendances`: Work entries are generated based on the employee's check-in records in
    the **Attendances** app. (This requires the **Attendances** app to be installed).
  - :guilabel:`Planning`: Work entries are generated based on the planned schedule for the employee
    from the **Planning** app. (This requires the **Planning** app to be installed).

- :guilabel:`Working Hours`: Select one of the available :guilabel:`Working Hours` the employee is
  expected to work, using the drop-down menu. The selected working hours determine how :doc:`work
  entries <work_entries>` are generated, which determines the employees schedule and compensation.
  If this field is left blank, the employee can work as many or as few hours as desired each week,
  with no restrictions. The default options are :guilabel:`Standard 40 hours/week`, and
  :guilabel:`Appointment Resource Default Calendar`

  .. note::
     In previous versions of Odoo, :guilabel:`Working Hours` were called :guilabel:`Working
     Schedules`.

Benefits and deductions
-----------------------

Depending on the :doc:`payroll localization <payroll_localizations>` for the company, the remaining
sections either vary, or may not appear at all. For example, some entries may pertain to retirement
accounts, health insurance benefits, and commuter benefits.

Enter the monetary amounts or percentages to specify how much of the employee's salary goes to the
various benefits and deductions.

Signatories tab
---------------

This tab outlines which contract template to use when creating a new contract for an employee, and
which to use when updating an existing contract. This section also outlines which signatures are
required.  Configure the following fields:

- New Contract :guilabel:`PDF Template`: Select the default PDF that a new employee has to sign to
  accept an offer.
- Contract Update :guilabel:`PDF Template`: Select the default PDF that a current employee has to
  sign to update their contract.

Once a PDF contract is uploaded, the following fields appear:

- :guilabel:`Contract Role`: The label of the signature field to be signed. This field is configured
  on the PDF itself, through the **Sign** app, and cannot be modified.
- :guilabel:`Signatory`: Using the drop-down menu, select the person who must sign for the
  :guilabel:`Contract Role`. The default options are:

  - :guilabel:`Employee`: Select this for the employee to sign the field.
  - :guilabel:`HR Responsible`: Select this to specify the user listed as the :guilabel:`HR
    Responsible` on the job position.
  - :guilabel:`Specific Partner`: Select this to have a specific individual sign the contract. When
    selected, the :guilabel:`Partner` field becomes active. Using the drop-down menu, select the
    specific user who must sign the contract in the :guilabel:`Partner` field.

.. seealso::
   - :doc:`../../productivity/documents`
   - :doc:`../../productivity/sign`
