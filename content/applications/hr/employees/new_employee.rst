=============
New employees
=============

When a new employee is hired, the first step is to create a new employee record. This record is a
centralized place where all important information about the employee is stored, including
:ref:`general information <employees/general-info>`, :ref:`contract and payroll information
<employees/payroll>`, :ref:`job history and skills <employees/resume>`, :ref:`various work
information <employees/work-info-tab>`, :ref:`personal details <employees/private-info>`, and
various :ref:`settings <employees/hr-settings>` that affect integrations with other apps in the
database.

To begin, navigate to :menuselection:`Employees app --> Management`, then click the
:guilabel:`New` button in the upper-left corner. Doing so reveals a blank employee form.

Proceed to fill out the required information, along with any additional details.

.. tip::
   The employee form automatically saves as data is entered. However, the form can be saved manually
   at any time by clicking the :icon:`cloud_upload` :guilabel:`(Save manually)` icon.

.. important::
   **All** employee records are considered :ref:`light users <access-rights/roles>` and incur any
   corresponding fees. For more information, refer to `Odoo's billing page
   <https://www.odoo.com/pricing>`_.

.. _employees/general-info:

General information
===================

Fill out the following employee details in the top section of the employee form.

- :guilabel:`Employee's Name`: Enter the employee's name. This field is required.
- :icon:`mail_f` :guilabel:`(Work Email)`: Enter the employee's work email address. If an
  internal user of the database, not yet linked to an employee of the company, uses this email
  address, the employee is automatically linked to that user.
- :icon:`phone_f` :guilabel:`(Work Phone)`: Enter the employee's work phone number.
- :icon:`smartphone` :guilabel:`(Work Mobile)`: Enter the employee's work mobile number.
- :icon:`sell` :guilabel:`(Tags)`: Select any tags from the drop-down menu to add relevant tags to
  the employee. Any tag can be created in this field by typing it in. Once created, the new tag is
  available for all employee records. There is no limit to the amount of tags that can be added on
  an employee form.
- :guilabel:`Photo`: Upload a photo of the employee in the photo placeholder. If no photo is added,
  an avatar with the employee's initial is generated.

.. image:: new_employee/gen-info.png
   :alt: The top section of an employee form, with the versions timeline in the upper-right corner.

.. _employees/form-header:

Employee form header
--------------------

Once the employee record is saved, the following elements appear at the top of the form:

- :guilabel:`Invite`: Creates a user for the employee and sends an invitation to the
  :guilabel:`Work Email` address. Refer to the :ref:`Invite the employee <employees/invite-user>`
  section for more information. This button is hidden once the employee is linked to a user.
- *User status*: A badge displays whether the employee has access to the database:
  :guilabel:`Not Invited`, :guilabel:`Invited`, :guilabel:`Confirmed`, or :guilabel:`Archived`.
  Click the badge to access related actions, such as :guilabel:`Resend Invitation`, :guilabel:`Copy
  Invitation Link`, :guilabel:`Reset Password`, or :guilabel:`Deactivate`.
- *Versions timeline*: The dates in the upper-right corner are the start dates of the versions of
  the employee record. Each time contractual information changes (wage, working hours, job, etc.), a
  new version can be created with an effective date, so the history of the employee's terms is kept.
  Click a date to display the employee record as it was on that date, or click the :icon:`add`
  :guilabel:`(New Employee Record)` button to create a new version. Versions are explained in detail
  in the :doc:`contracts <../payroll/contracts>` documentation.
- *Smart buttons*: Depending on the installed apps, smart buttons give access to the employee's
  documents, appraisals, goals, payslips, time off, timesheets, company cars, and more. The
  :guilabel:`History` smart button, under :guilabel:`More`, lists all the versions of the employee
  record.

.. note::
   If the **Payroll** app is installed, a badge in the upper-right corner of the employee form
   indicates whether the latest changes to the employee's contractual information have been
   :guilabel:`Reviewed`. Refer to the :doc:`contracts <../payroll/contracts>` documentation for more
   information.

.. _employees/payroll:

Payroll tab
===========

The *Payroll* tab holds the employee's contractual information: contract dates, wage, working
hours, etc. These fields are stored on the current *version* of the employee record, so their
changes can be tracked over time.

Depending on the installed :doc:`payroll localization <../payroll/payroll_localizations>`, the
sections and fields in this tab may vary considerably. Due to the specific nature of localizations
and the variety of information that may be requested in this tab, it is recommended to check with
the accounting department to fill out this section correctly.

The *Contract Overview* and *Schedule* sections are the **only** universal sections for all payroll
localizations. All other sections in the *Payroll* tab are country-specific.

.. seealso::
   :doc:`Payroll localizations <../payroll/payroll_localizations>`

Contract overview
-----------------

This section contains the employee's contractual terms:

- :guilabel:`Load a Template`: Copies the values of a contract template to the employee record.
- :guilabel:`Employee Type`: The type of employment, such as :guilabel:`Employee`,
  :guilabel:`Student`, or :guilabel:`Intern`. Some payroll localizations add country-specific
  types.
- :guilabel:`Contract`: The start and end dates of the employee's contract. Leave the end date
  empty for an indefinite contract.
- :guilabel:`Wage Type`: :guilabel:`Fixed Wage` or :guilabel:`Hourly Wage`.
- :guilabel:`Wage`: The gross wage, followed by the pay frequency.
- :guilabel:`Employer Cost`: The yearly cost of the employee for the company.
- :guilabel:`Pay Category`: The kind of employee, used to determine the default salary structure in
  the **Payroll** app.

Refer to the :doc:`contracts <../payroll/contracts>` documentation for detailed information on
setting up and modifying the employee's contract.

.. _employees/schedule:

Schedule
--------

This section defines when the employee is expected to work. Configure the following fields:

- :guilabel:`Working Hours`: Select the hours the employee is expected to work using the drop-down
  menu. By default, the company's working hours, defined in the :ref:`Employees app settings
  <employees/settings>`, are selected. Only working schedules without a company, or belonging to
  the employee's company (or to its parent company), are available.

  .. note::
     If an employee's working hours are not configured as a working schedule, new working schedules
     can be added, or existing working schedules can be modified.

     Working hours can be modified in both the **Employees** and **Payroll** apps, where they are
     referred to as :guilabel:`Working Schedules`.

     For more information on how to create or modify :guilabel:`Working Schedules`, refer to the
     :doc:`working hours <working_hours>` documentation.

  .. important::
     The :guilabel:`Working Hours` field is **required** and cannot be left blank. For employees
     with no fixed schedule, :ref:`create a new fully-flexible working schedule
     <payroll/new-working-schedule>`, then select it.

- :guilabel:`Attendance Based`: Tick this checkbox to compute the employee's payslips from their
  attendance records, for example when they :ref:`check in and out at an attendance kiosk
  <attendances/kiosk-mode-entry>`. If left unchecked, the employee's :guilabel:`Working Hours`
  are used to compute their worked time. Time off is always taken into account. The default value
  of this checkbox is defined by the :guilabel:`Default Tracking` setting.

Payslip adjustments tab
=======================

The *Payslip Adjustments* tab houses **all** additional payslip adjustments, including
:doc:`salary adjustments <../payroll/salary_attachments>`, child support, commissions, tips,
bonuses, expense reimbursements, and any other deduction taken out of the employee's paycheck.

Add each individual :ref:`payslip adjustment <payroll/salary_attachments/create>` to this tab.

.. _employees/work-info-tab:

Work tab
========

This tab is visible for all employees, and does not require any other apps to be installed.

Work
----

- :guilabel:`Company`: Select the company the new employee was hired by using the drop-down menu.
  This field is required, but only appears when in a multi-company database.
- :guilabel:`Department`: Select the employee's department from the drop-down menu.
- :guilabel:`Job Position`: Select the employee's job position from the drop-down menu. If using the
  **Recruitment** app, this list reflects configured job positions.
- :guilabel:`Job Title`: This field is automatically populated with the selection made in the
  :guilabel:`Job Position` field. Adjust the text, if desired, to best reflect the employee's role.

  .. example::
     Specific details can be added in the :guilabel:`Job Title` field, if desired.

     For example, a consultant position configured as :guilabel:`Consultant` in the
     **Recruitment** app can be selected for the :guilabel:`Job Position` field.

     The :guilabel:`Job Title` field can be more specific, such as `Consultant - Retail Clients` if
     the employee is focused solely on retail clients.

     .. image:: new_employee/job-title-fields.png
        :alt: Both job position fields entered but with different information.

- :guilabel:`Manager`: Select the employee's manager using the drop-down menu.
- :guilabel:`Next Appraisal Date`: If the **Appraisals** app is installed, this field displays the
  date of the next appraisal for the employee, computed from the appraisal plan. If an appraisal is
  already in progress, :guilabel:`Ongoing` is displayed instead.

.. _employees/work-location:

Location
--------

This section states where the employee is expected to work on any given workday.

Using the drop-down menu, select the typical place the employee works from in the :guilabel:`Usual
Work Location` field. By default, :guilabel:`Home`, :guilabel:`Office`, and :guilabel:`Other`
locations are available.

Below the :guilabel:`Usual Work Location` field is a list of the days of the week. To indicate that
the employee works from another location on a specific day, select that location in the
corresponding field. Leave the field blank (:guilabel:`Unspecified`) to use the :guilabel:`Usual
Work Location`. The location of the day is reflected on the employee's Kanban card.

.. tip::
   To create a new location, type the location in the field, click :guilabel:`Create and edit...`,
   and a *Create Usual Work Location* pop-up form loads.

   The entered name populates the :guilabel:`Name` field, but can be modified. Click the
   corresponding button to select the :guilabel:`Location Type`: :guilabel:`Home`,
   :guilabel:`Office`, or :guilabel:`Other` (some payroll localizations add other types). Unless the
   location is the employee's home, select the :guilabel:`Work Address` using the drop-down menu. In
   a multi-company database, a :guilabel:`Company` field appears, and is populated with the current
   company by default but can be modified if needed.

   Click :guilabel:`Save` when the form is complete. The window closes, and the newly configured
   location appears in the field.

   Work locations can also be managed by navigating to :menuselection:`Employees app -->
   Configuration --> Employee --> Work Locations`.

.. image:: new_employee/location.png
   :alt: A new work location form with all fields filled out.

Note
----

Enter any relevant notes in this field.

Organization chart
------------------

The employee's managers appear in this section, illustrating where in the company the employee
works. The numbers to the right of each person listed indicates how many direct or indirect reports
each employee has. Click :guilabel:`Full Chart` to open the organization chart of the whole company,
centered on the employee.

.. note::
   After a :guilabel:`Department` is selected, the department's configured manager automatically
   populates the :guilabel:`Manager` field.

.. image:: new_employee/org-chart.png
   :alt: The organizational chart including the employee's manager.

.. _employees/resume:

Resume tab
==========

Resume
------

Enter the employee's work history in the *Resume* tab. Each resume line must be entered
individually. When creating an entry for the first time, click the :guilabel:`Create Resume Lines`
button, and a *New Resume Line* form appears. Once a section, such as *Education*, contains an
entry, an :guilabel:`Add` button appears next to it, to add another entry to that section. Enter
the following information for each entry:

- *Type*: Click the corresponding button to reflect the *type* of experience being added. The
  default options are :guilabel:`Other Experience`, :guilabel:`Education`, :guilabel:`Training`,
  :guilabel:`Side Projects`, and :guilabel:`Internal Certification`.
- :guilabel:`Title`: Type in the title of the experience, such as the name of the previous
  employer.
- :guilabel:`Duration`: Enter the start and end dates for the experience using the calendar
  selector in the corresponding fields. Leave the end date empty (:guilabel:`Forever`) for an
  ongoing experience.
- :guilabel:`Certificate`: If there is a relevant certificate to attach, click the :icon:`upload`
  :guilabel:`(Upload)` icon, select the desired file, and click :guilabel:`Select`. The file name
  appears in the field, not an image of the certificate.
- :guilabel:`Description`: Enter any relevant details in this field.

Once all the information is entered, click the :guilabel:`Save & Close` button if there is only one
entry to add, or click the :guilabel:`Save & New` button to save the current entry and create
another resume line.

.. image:: new_employee/resume-lines.png
   :alt: A resume entry form with all the information populated.

.. note::
   The employee's experience in the company is automatically displayed at the top of the *Resume*
   tab. It is built from the versions of the employee record: one line per :guilabel:`Job Title`,
   from the start date of the version (or of the contract) to the day before the next job title or
   the end of the contract, with `Current` as end date when the contract has no end date.

.. _employees/skills:

Skills & certifications
-----------------------

An employee's skills and certifications can be entered in the *Resume* tab, in the *Skills &
Certifications* section.

To add a skill to an employee record, the skill type must first be configured. By default, Odoo
comes with several :guilabel:`Skill Types` preconfigured, such as *Languages* and *Soft Skills*.
:ref:`Configure the rest of the skill types <employees/skill-types>` before adding any skills to the
employee record.

When adding the first skill to an employee record, a :guilabel:`Pick a skill from the list` button
appears in the *Skills & Certifications* section of the *Resume* tab. Click the :guilabel:`Pick a
skill from the list` button, and a blank *Update Skills* pop-up window loads. Configure the
following information for each skill:

- :guilabel:`Category`: Select a :ref:`skill type <employees/skill-types>` by clicking it.
- :guilabel:`Skill`: After selecting the :guilabel:`Category`, all corresponding skills associated
  with that selected category appear in individual buttons. For example, selecting
  :guilabel:`Languages` for the :guilabel:`Category` presents a variety of languages to select from
  in the :guilabel:`Skill` section. Click the appropriate skill from the list.

  .. important::
     If the desired skill does not appear in the list, it is **not** possible to add the new skill
     from this window. New skills must be added from the :ref:`Skill Types <employees/skill-types>`
     dashboard.

- :guilabel:`Skill Level`: Pre-defined skill levels associated with the selected
  :guilabel:`Category` appear. Click on a :guilabel:`Skill Level` to select it. Skill levels can be
  created and modified from the :ref:`Skill Types <employees/skill-types>` dashboard.

If the selected category is a certification, the :guilabel:`Validity` dates and a
:guilabel:`Certificate` field also appear. Refer to the :ref:`Certifications tab
<employees/certifications>` section for more information.

Click the :guilabel:`Save & Close` button if there is only one skill to add, or click the
:guilabel:`Save & New` button to save the current entry and immediately add another skill.

Once a skill is added, the skills are grouped by skill type, and an :guilabel:`Add` button appears
next to each skill type of the employee, to add another skill of the same type.

.. image:: new_employee/skills.png
   :alt: A skill form with the information filled out.

When the level of a skill is changed, Odoo keeps the previous level in the employee's skill
history. Click :icon:`show_chart` :guilabel:`Timeline` in the *Skills & Certifications* section
to view the evolution of the employee's skill levels over time in the *Skills Report*.

.. important::
   Only users with :guilabel:`Officer: Manage all employees` or :guilabel:`Administrator` rights for
   the **Employees** app can add or edit skills.

.. _employees/skill-types:

Skill types
~~~~~~~~~~~

To add a skill to an employee's form, the :guilabel:`Skill Types` must be configured. Navigate to
:menuselection:`Employees app --> Configuration --> Employee --> Skill Types` to view the currently
configured skill types and create new skill types.

Click the :guilabel:`New` button in the corner, and a new *Skill Type* form loads. Fill out the
following details for the new skill type. Repeat this for all the needed skill types.

- :guilabel:`Skill Type`: Enter a name for the type of skill. This acts as the parent category for
  more specific skills and should be generic.
- :guilabel:`Color`: Click on the existing color to view the available colors. Click the desired
  color to select it.
- :guilabel:`Certification`: Click the toggle to indicate the skills of this type are
  certifications. The toggle turns green, and the skills can then be added to the
  :ref:`certifications <employees/certifications>` tab, with a validity period.
- :guilabel:`Skills`: Click :guilabel:`Add a line` and enter the :guilabel:`Name` for the new skill,
  then repeat for all other needed skills.
- :guilabel:`Levels`: Click :guilabel:`Add a line`, and enter a :guilabel:`Name` and
  :guilabel:`Progress` percentage (`0`-`100`) for each level.

  Set a :guilabel:`Default Level` by clicking the toggle on the desired line. Only **one** level
  can be selected. The toggle turns green to indicate the default level. Typically, the lowest level
  is chosen, but any level can be selected.

  .. example::
     To add math skills in yellow, enter `Math` in the :guilabel:`Skill Type` field, and click the
     colored circle next to :guilabel:`Color`, and select yellow. Then, in the :guilabel:`Skills`
     field, enter `Algebra`, `Calculus`, and `Trigonometry`. Next, in the :guilabel:`Levels` field,
     enter `Beginner`, `Intermediate`, and `Expert`, with the :guilabel:`Progress` listed as `25`,
     `50`, and `100`, respectively. Click the :guilabel:`Default Level` toggle on the `Beginner`
     line to set this as the default skill level.

     .. image:: new_employee/math-skills.png
        :alt: A skill form for a Math skill type, with all the information entered.

.. tip::
   Once the form is saved, the :guilabel:`Levels` are sorted by :guilabel:`Progress`, with the
   highest level at the top, and the lowest at the bottom, regardless of the default level and the
   order they were entered.

.. _employees/certifications:

Certifications tab
==================

This tab houses all the employee's certifications, which can be important for employees who are
required to hold specific certifications to perform their job, such as a :abbr:`CPA (Certified
Public Accountant)` certification for accountants, or a :abbr:`CSM (Certified Safety Manager)`
certification for a construction manager.

The tab lists each :guilabel:`Certification` in a line, and displays the validity period in the
:guilabel:`From` and :guilabel:`To` fields.

.. note::
   This tab **only** appears if *at least one* :ref:`skill type <employees/skill-types>` is
   configured as a *certification*. When adding certifications, **only** skill types marked as a
   certification can be selected.

To add a certification, click :guilabel:`Add a line` in the *Certifications* tab and a blank *Create
Certification* pop-up window loads. Enter the following information on the form:

- :guilabel:`Category`: Click on the type of certification being added. This field only appears
  if several skill types are configured as certifications.
- :guilabel:`Skill`: Click on the specific certification being added.
- :guilabel:`Validity`: Click into the two fields, and select the start and end dates for the
  certification, using the calendar selector. Leave the second field empty if the certification
  does not expire.
- :guilabel:`Certificate`: If a proof of certification document is available, such as a course
  completion certificate, it can be added in this field. Click the :icon:`upload`
  :guilabel:`(Upload)` icon, navigate to the file, and click :guilabel:`Select`.

When the form is complete, click :guilabel:`Save & New` to add the certification and add another, or
:guilabel:`Save & Close` to add the certification and close the pop-up window.

.. image:: new_employee/certifications.png
   :alt: The certification pop-up with everything configured for a Scrum Master certification.

.. _employees/private-info:

Personal tab
============

No information in the *Personal* tab is required to create an employee. However, some information in
this section may be necessary for the company's payroll department.

To properly process payslips and ensure all deductions are accounted for, it is recommended to check
with the accounting department and payroll department to ensure all required fields are populated.
For example, to pay employees with direct deposit, they **must** have a trusted account listed in
the :guilabel:`Bank Accounts` field.

Enter the various information in the following sections and fields of the *Personal* tab. Fields are
entered either using a drop-down menu, clicking a checkbox, or typing in the information.

.. note::
   Depending on the localization setting, other fields or sections may be present.

.. _employees/private-contact:

Private contact
---------------

Fill out the following fields in this section:

- :guilabel:`Email`: Enter the employee's personal email address.
- :guilabel:`Phone`: Enter the employee's personal phone number.
- :guilabel:`Bank Accounts`: Select the employee's bank accounts using the drop-down menu. If the
  bank account does not exist, :ref:`create a new bank account <employees/add-bank>` and select it.
  An employee can have several bank accounts.

  When the employee has one bank account, :guilabel:`Trusted` or :guilabel:`Untrusted` is displayed
  next to it. Click the :icon:`toggle_off` :guilabel:`(Trust Bank Account)` icon to trust the
  account, or the :icon:`toggle_on` :guilabel:`(Untrust Bank Account)` icon to distrust it.

  When the employee has several bank accounts, save the employee record, then click
  :guilabel:`Salary Allocation` to define how the salary is split between them. In the *Bank Account
  Allocation* pop-up window, drag the bank
  accounts to order them by priority (the first one is the primary account), enter the
  :guilabel:`Amount` and its :guilabel:`Type` (a fixed amount or a percentage) for each account,
  enable the :guilabel:`Trusted` toggle of each trusted account, then click :guilabel:`Save`.

.. _employees/add-bank:

Add a bank account
~~~~~~~~~~~~~~~~~~

When an employee is added to the database, their bank account must also be added to pay them using
the **Payroll** app. To add a new bank account, click into the :guilabel:`Bank Accounts` field in
the *Private Contact* section, type the account number, then click :guilabel:`Create and edit...`.

A blank *Create Bank Accounts* pop-up window loads. Enter the following information on the form:

- :guilabel:`Account Number`: Enter the bank account number in this field.
- :guilabel:`Clearing Number`: The default name for this field is :guilabel:`Clearing Number` but
  may be different depending on the country of the company. For example, the United States
  displays :guilabel:`Routing Number` while the United Kingdom displays :guilabel:`Sort Code`.
  Enter the corresponding code in this field.
- :guilabel:`BIC/SWIFT`: Enter the Bank Identifier Code in this field. This is used for
  international wire transfers.
- :guilabel:`Bank Account Type`: Select the kind of account being added. The options are
  :guilabel:`Checking` or :guilabel:`Savings`.
- :guilabel:`Holder Name`: The employee's name populates this field by default. Modify it if the
  account holder's name is different.
- :guilabel:`Trust bank account`: Click the toggle so it appears green, indicating it is a trusted
  bank account.
- :guilabel:`Company`: This field only appears in a multi-company environment. Select a company to
  restrict the bank account to be used **only** with the selected company. Leaving this field blank
  makes this information visible to all companies.
- :guilabel:`Employee`: The employee record the bank account is being added to automatically appears
  in this field and **cannot** be modified.
- *Note* tab: Enter any relevant notes in the *Note* tab.
- *Bank Information* tab: Enter the :guilabel:`Bank Name`, :guilabel:`Bank Address`, and the
  :guilabel:`Intermediary SWIFT` code in the corresponding fields.

.. image:: new_employee/bank.png
   :alt: The Create Bank Account form with all the information filled out.

.. important::
   To ensure payments are processed and sent to the bank account, mark the bank account as
   :guilabel:`Trusted`. Having an untrusted bank account for an employee causes an error in the
   **Payroll** application when processing direct deposits.

   If issuing paper checks or paying via cash, the :guilabel:`Bank Accounts` field does not need to
   be configured.

Personal information
--------------------

The *Personal Information* section houses some basic information used primarily for payroll and tax
purposes. Fill out the following fields in this section:

- :guilabel:`Legal Name`: Enter the employee's legal name in this field. By default, the name
  entered in the :ref:`general information section <employees/general-info>` populates this field.
  This is the name that typically is used for filing taxes.
- :guilabel:`Birthday`: Select the birthday of the employee using the calendar selector.
- :guilabel:`Show Birthday To Employees`: Once a birthday is entered, enable this toggle to display
  the employee's birthday to the other employees.
- :guilabel:`Place of Birth`: Enter both the city or town the employee was born in the first field,
  and select the country in the second field using the drop-down menu.
- :guilabel:`Sex`: Select the employee's legal sex recognized by the state from the drop-down menu.
  The default options are :guilabel:`Male` and :guilabel:`Female`.
- :guilabel:`Disabled`: Check this box if the employee is considered legally disabled.
- :guilabel:`Payslip Language`: Select the language used when printing the employee's payslips.
  Each language must be :doc:`added to the database <../../general/users/language>` to appear in the
  drop-down menu.

Citizenship
-----------

The *Citizenship* section outlines all the information relating to the employee's citizenship. This
section is primarily for employees who are working in a different country than their citizenship.
For employees working outside of their home country, for example on a work visa, this information
may be required. Different fields may be visible, depending on the localization installed. Fill out
the following fields in this section:

- :guilabel:`Nationality (Country)`: Select the country the employee is from using the drop-down
  menu.
- :guilabel:`Non-resident`: Click this checkbox if the employee is not a legal resident of the
  country where they are employed.
- :guilabel:`Identification No`: Enter the employee's national identification number issued by the
  government in this field. Some examples are Aadhaar, :abbr:`SIN (Social Insurance Number)`, or
  :abbr:`NIN (National Identification Number)`.
- :guilabel:`Passport No`: Enter the employee's passport number. When entered, an :guilabel:`Expires
  on` field appears. Select the date the passport expires using the calendar selector.

.. note::
   Depending on the installed :doc:`payroll localization <../payroll/payroll_localizations>`,
   additional fields may appear in this section, such as the :guilabel:`US: Social Security Number`
   field for the United States.

Visa & work permit
------------------

This section should be filled in if the employee is working on some type of work permit or visa.
This section may be left blank if they do not require any work permits or visas for employment.
Enter the applicable following fields in this section:

- :guilabel:`Visa No`: Enter the employee's visa number. When entered, an :guilabel:`Expires on`
  field appears. Select the date the visa expires using the calendar selector.
- :guilabel:`Work Permit No`: Enter the employee's work permit number. When entered, an
  :guilabel:`Expires on` field appears. Select the date the work permit expires using the calendar.
  When the expiration date falls within the :guilabel:`Work Permit Expiration Notice Period`
  defined in the :ref:`settings <employees/settings>`, a daily scheduled action creates a to-do
  activity for the employee's :ref:`HR Responsible <employees/approvers>`.
- :guilabel:`Document`: click the :icon:`upload` :guilabel:`(Upload)` icon, then navigate to the
  work permit or visa file in the file explorer, and click :guilabel:`Select` to upload it.

  .. note::
     Typically, an employee needs either a visa *or* a work permit, not both. For this reason, only
     one document can be added to the :guilabel:`Document` field.

Emergency contact
-----------------

This section details the person to contact in the event of an emergency. Enter the following fields:

- :guilabel:`Contact Name`: Enter the emergency contact's name.
- :guilabel:`Phone`: Enter the emergency contact's phone number. It is recommended to enter a phone
  number that the person has the most access to, typically a mobile phone.

.. _employees/location:

Location
--------

The *Location* section is visible for all employees, and does not require any other apps to be
installed for this section to be visible. Enter the following information in this section:

- :guilabel:`Private Address`: Enter the employee's current home address in the street, city,
  state, ZIP, and country fields. The country of the company is selected by default.
- :guilabel:`Home-Work Distance`: Enter the number of miles or kilometers the employee commutes to
  work, in one direction. The unit of measure can be changed from kilometers (:guilabel:`km`) to
  miles (:guilabel:`mi`) using the drop-down menu. This field is **only** required if the employee
  is receiving any type of commuter benefits or tax deductions based on commute distances.

Family
------

The *Family* section is used for tax purposes and affects the **Payroll** app. Enter the following
information in the following fields:

- :guilabel:`Marital Status`: Select the marital status for the employee using the drop-down menu.
  The default options are :guilabel:`Single`, :guilabel:`Married`, :guilabel:`Legal Cohabitant`,
  :guilabel:`Widower`, and :guilabel:`Divorced`.

  If :guilabel:`Married` or :guilabel:`Legal Cohabitant` is selected, two additional fields appear:
  :guilabel:`Spouse Legal Name` and :guilabel:`Spouse Birthdate`. Enter these fields with the
  respective information.
- :guilabel:`Dependent Children`: Enter the number of dependent children. This number is the same
  number used for calculating tax deductions, and should follow all tax regulations regarding
  applicable dependents.

Education
---------

The *Education* section allows for only one entry, and should be populated with the highest degree
the employee has earned. Configure the following fields:

- :guilabel:`Certificate Level`: Select the highest degree the employee has earned using the
  drop-down menu. The default options are: :guilabel:`Graduate`, :guilabel:`Bachelor`,
  :guilabel:`Master`, :guilabel:`Doctor`, and :guilabel:`Other`.
- :guilabel:`Field of Study`: Type in the subject the employee studied, such as `Business` or
  `Marketing and Communications`.

Documents
---------

The *Documents* section allows for uploading any relevant documents on the employee form. Click the
:icon:`upload` :guilabel:`(Upload)` icon next to the corresponding document name, navigate to the
file, then click :guilabel:`Select` to upload the file.

The documents that can be uploaded are:

- :guilabel:`ID Card Copy`: Upload any relevant IDs that may be required by the payroll or HR
  department.
- :guilabel:`Driving License`: Upload the employee's driver's license. This field may be necessary
  if the employee drives as part of their job, or is given a company car to use.
- :guilabel:`SIM Card Copy`: Upload a copy of the SIM card if the employee is using a work-issued
  mobile phone.
- :guilabel:`Internet Subscription Invoice`: If the employee is receiving benefits or compensation
  for their internet service, upload their invoice in this field.

  .. note::
     The :guilabel:`Internet Subscription Invoice` field is for documentation purposes only.
     Employees must use the :doc:`Expenses app <../../finance/expenses>` to request reimbursement
     for expenses, or define compensation in the *Payslip Adjustments* tab.

End of collaboration tab
========================

The *End of Collaboration* tab only appears once the :ref:`end of collaboration
<employees/end-of-collaboration>` of the employee has been registered. It displays the end reason,
the dismissal date, and the date on which the employee is archived.

Badges tab
==========

The *Badges* tab is where all earned and awarded :doc:`badges <badges>` are housed. This tab only
appears if the employee is linked to a :ref:`user <employees/hr-settings>`.

.. _employees/hr-settings:

Settings tab
============

The *Settings* tab provides various fields for different applications within the database. Depending
on the installed applications, different fields and sections may appear in this tab.

User
----

- :guilabel:`User`: If desired, select a user in the database to link to this employee using the
  drop-down menu, or :ref:`create a new user <employees/new-user>`.
- :guilabel:`Timezone`: Select the timezone for the employee using the drop-down menu. This field is
  required, and is used to compute the employee's working hours. If the employee is linked to a
  user, the timezone is kept in sync with the user's timezone.

.. _employees/new-user:

Create a user
~~~~~~~~~~~~~

If the new employee also needs access to the database, click into the drop-down menu next to the
:guilabel:`User` field. Click :icon:`mail` :guilabel:`Invite teammates via email` and an
*Invite teammates* pop-up window appears.

The pop-up window displays the employee's name, as well as the work email, work phone, and company
from the :ref:`general information <employees/general-info>` section of the form.

Click the :guilabel:`Send Invitation` button, an email is sent, and a notification briefly appears.

Once the user is created, it populates the :guilabel:`User` field.

.. tip::
   Users can also be :doc:`created manually <../../general/users/>`.

.. image:: new_employee/new-user.png
   :alt: The invite a user pop-up window, configured.

.. _employees/approvers:

Approvers
---------

To view this section, the user must have :guilabel:`Administrator` rights set for the **Employees**
app. For the category to appear, the respective app must be installed. For example, if the **Time
Off** app is not installed, the :guilabel:`Time Off` approvers field does not appear. Only one
selection can be made for each field.

.. important::
   Only users with the corresponding approval rights appear in the drop-down menus.

   To check these rights, navigate to :menuselection:`Settings app --> Users & Companies --> Users`,
   and click on a user. Check the settings of the respective app in the *Access Rights* tab.

- :guilabel:`HR Responsible`: Select the user responsible for validating the employee's contracts
  using the drop-down menu. This field is required.
- :guilabel:`Expense`: Select the user responsible for approving all expenses for the employee using
  the drop-down menu. If left empty, expenses are approved by the department manager or the
  employee's manager, or are automatically validated if there is none (:guilabel:`Auto-validation`).
- :guilabel:`Time Off`: Select the user responsible for approving all time off requests from this
  employee using the drop-down menu. If left empty, the approval is done by a **Time Off**
  administrator or approver.
- :guilabel:`Timesheet`: Select the user responsible for approving all the employee's timesheet
  entries using the drop-down menu. If left empty, the approval is done by a **Timesheets**
  administrator or a user with access to all timesheets.
- :guilabel:`Attendance`: Select the user who can access and edit the attendance records of the
  employee in the **Attendances** app, using the drop-down menu.

Planning
--------

This section is **only** visible if the **Planning** app is installed, as this section affects what
the employee can be assigned in the **Planning** app.

- :guilabel:`Roles`: Select all the roles the employee can perform using the drop-down menu. There
  are no preconfigured roles available, so all roles must be :ref:`configured in the Planning app
  <planning/roles>`. There is no limit to the number of roles assigned to an employee.
- :guilabel:`Default Role`: Select the default role the employee will typically perform using the
  drop-down menu. If the :guilabel:`Default Role` is selected before the :guilabel:`Roles` field is
  configured, the selected role is automatically added to the list of :guilabel:`Roles`.

Application settings
--------------------

This section affects the **Manufacturing** and **Timesheets** apps. Enter the following information
in this section.

- :guilabel:`Hourly Cost`: Enter the hourly cost for the employee, in a `##.##` format. This cost is
  factored in when the employee is working at a :doc:`work center
  <../../inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers>`, and to value
  the employee's timesheets.

  .. note::
     Manufacturing costs are added to the costs for producing a product if the value of the
     manufactured product is **not** a fixed amount. This cost does **not** affect the **Payroll**
     application.

.. _employees/new_employee/hr-attn-pos:

Attendance/Point of Sale
------------------------

This section determines how employees sign in to the **Attendances**, **Point Of Sale**, and
**Manufacturing** apps. When the **Manufacturing** app is installed with work orders, the section
is named *Attendance/Point of Sale/Manufacturing*.

- :guilabel:`PIN Code`: Enter the employee's PIN code in this field. This code is used to sign in
  and out of **Attendances** app kiosks, the **Point Of Sale** app, and the **Manufacturing** app's
  *Shop Floor* companion module.
- :guilabel:`RFID/Badge Number`: Click :guilabel:`Generate` at the end of the :guilabel:`RFID/Badge
  Number` line to create a unique number. Once generated, the number populates the
  :guilabel:`RFID/Badge Number` field, and the :guilabel:`Generate` option is hidden. Click
  :guilabel:`Print Badge` to create a PDF file of the employee's badge. The badge can be printed and
  used to log into a :abbr:`POS (point of sale)` system or :ref:`check in
  <attendances/kiosk-mode-entry>` on an **Attendances** app kiosk.

  If the employee uses an RFID token or already has an ID badge issued with a barcode, click
  :guilabel:`Read a badge` and the system allows the barcode or RFID token to be read. Once read,
  the number populates the :guilabel:`RFID/Badge Number` field.

  .. tip::
     To create a new :guilabel:`RFID/Badge Number`, delete the current number, and the
     :guilabel:`Generate` option reappears. Click :guilabel:`Generate` and a new number appears.

- :guilabel:`ZKTeco Employee ID`: If the :guilabel:`Attendances ZKTeco BioTime` module is installed,
  this field appears. Enter the ZKTeco BioTime employee ID in this field.

Export
------

This section is used when exporting data to a third party. Enter the relevant code in the
:guilabel:`External Code` field.

.. _employees/invite-user:

Invite the employee
===================

After the employee is created, click the :guilabel:`Invite` button in the top corner of the employee
record. A user is created for the employee, an email is sent to the address entered in the
:icon:`mail_f` :guilabel:`(Work Email)` field in the :ref:`General Information
<employees/general-info>` section, and a notification stating `A signup link was sent by email`
briefly appears.

The user status badge then displays :guilabel:`Invited`, until the employee accepts the invitation.
