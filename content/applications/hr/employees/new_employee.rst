=============
New employees
=============

When a new employee is hired, the first step is to create a new employee record. This record is a
centralized place where all important information about the employee is stored, including
:ref:`general information <employees/general-info>`, :ref:`job history and skills
<employees/resume>`, :ref:`various work information <employees/work-info-tab>`, :ref:`personal
details <employees/private-info>`, :ref:`payroll-related information <employees/payroll>`, and
various :ref:`settings <employees/hr-settings>` that affect integrations with other apps in the
database.

To begin, open the :menuselection:`Employees` app, then click the :guilabel:`New` button in the
upper-left corner. Doing so reveals a blank employee form.

Proceed to fill out the required information, along with any additional details.

.. image:: new_employee/new-employee-form.png
   :alt: Create a new employee form with all fields filled out.

.. note::
   The current company phone number and name are populated in the :guilabel:`Work Phone` and
   :guilabel:`Company` fields. If the **Appraisals** application is installed, the :guilabel:`Next
   Appraisal Date` field is populated with a date six months from the current date.

.. _employees/general-info:

General information
===================

Fill out the following employee details.

.. tip::
   The employee form automatically saves as data is entered. However, the form can be saved manually
   at any time by clicking the :icon:`fa-cloud-upload` :guilabel:`(Save manually)` icon.

- :guilabel:`Employee's Name`: enter the employee's name. This field is required.
- :guilabel:`Job Position`: this field appears below the employee name and can be filled in
  manually. Alternatively, select a position from the drop-down menu in the :guilabel:`Job Position`
  field beneath the :guilabel:`Department` field to auto-populate the top field. The two fields do
  not need to match.

  .. example::
     While it is recommended to have the job positions match, the typed-in description in this top
     field can contain more specific information than the selected drop-down :guilabel:`Job
     Position`, if desired.

     For instance, if someone is hired for a sales representative position configured as
     :guilabel:`Sales Representative` in the **Recruitment** app, that can be selected in the
     drop-down :guilabel:`Job Position` field.

     In the typed-in :guilabel:`Job Position` field beneath the :guilabel:`Employee's Name`, the
     position can be more specific, such as `Sales Representative - Subscriptions` if the employee
     is focused solely on subscription sales.

     .. image:: new_employee/job-description-fields.png
        :alt: Both job position fields entered but with different information.

- :guilabel:`Photo`: in the top-right image box of the employee form, click on the :icon:`fa-pencil`
  :guilabel:`(Edit)` icon, then select a photo to upload.
- *Work Contact Information*: enter the employee's :guilabel:`Work Email`, :guilabel:`Work Phone`,
  and :guilabel:`Work Mobile`,  information, if not already auto-populated.
- :guilabel:`Tags`: select a tag from the drop-down menu to add relevant tags to the employee. Any
  tag can be created in this field by typing it in. Once created, the new tag is available for all
  employee records. There is no limit to the amount of tags that can be added on an employee form.
- :guilabel:`Company`: from the drop-down menu in this field, select the company the new employee
  was hired by, or create a new company by typing the name in the field, and clicking
  :guilabel:`Create` or :guilabel:`Create and edit...` from the mini drop-down menu that appears.
  This field is required.
- :guilabel:`Department`: select the employee's department from the drop-down menu.
- :guilabel:`Job Position`: select the employee's job position from the drop-down menu. If using the
  **Recruitment** app, this list reflects configured job positions. Once a selection is made, the
  :guilabel:`Job Position` field beneath the :guilabel:`Employee's Name` field automatically updates
  to reflect the currently selected job position, but is still editable.
- :guilabel:`Manager`: select the employee's manager from the drop-down menu.
- :guilabel:`Coach`: select the employee's coach from the drop-down menu.
- :guilabel:`Next Appraisal Date`: this field is **only** visible if the **Appraisals** application
  is installed. The date automatically populates with a date that is computed according to the
  settings configured in the **Appraisals** application. This date can be modified using the
  calendar selector.

.. note::
   After a :guilabel:`Department` is selected, the department's configured manager and coach
   automatically populates the respective :guilabel:`Manager` and :guilabel:`Coach` fields.

.. tip::
   To make edits to the selected :guilabel:`Department`, :guilabel:`Manager`, :guilabel:`Coach`, or
   :guilabel:`Company`, click the :icon:`oi-arrow-right` :guilabel:`(Internal link)` arrow next to
   the respective selection. The :icon:`oi-arrow-right` :guilabel:`(Internal link)` arrow opens the
   selected form, allowing for modifications. Click :guilabel:`Save` after any edits are made.

.. _employees/resume:

Resumé tab
==========

Resumé
------

Enter the employee's work history in the :guilabel:`Resumé` tab. Each resumé line must be entered
individually. When creating an entry for the first time, click :guilabel:`Create a new entry`, and
the :guilabel:`Create Resumé lines` form appears. After an entry is added, the :guilabel:`Create a
new entry` button is replaced with an :guilabel:`ADD` button. Enter the following information for
each entry.

- :guilabel:`Title`: type in the title of the previous work experience.
- :guilabel:`Employee`: select the employee from the drop-down menu.
- :guilabel:`Type`: from the drop-down menu, select either :guilabel:`Experience`,
  :guilabel:`Education`, :guilabel:`Social Media`, or :guilabel:`Internal Certification`. To create
  a new :guilabel:`Type`, enter the name of the type, then click :guilabel:`Create "(Type)"`.
- :guilabel:`Display Type`: from the drop-down menu, choose :guilabel:`Classic` for typical work
  experience, or :guilabel:`Certification` for experience gained through a certification.
- :guilabel:`Duration`: enter the start and end dates for the work experience. To select a date,
  click the first empty field to reveal a calendar pop-up window. Proceed to use the
  :icon:`oi-chevron-left` :guilabel:`(left arrow)` and :icon:`oi-chevron-right` :guilabel:`(right
  arrow)` icons to scroll to the desired month, then click on the day to select it. Repeat this
  process to locate and select the end date. When the desired dates have been selected, click
  :icon:`fa-check` :guilabel:`Apply`.
- :guilabel:`Description`: enter any relevant details in this field.

Once all the information is entered, click the :guilabel:`Save & Close` button if there is only one
entry to add, or click the :guilabel:`Save & New` button to save the current entry and create
another resumé line.

.. image:: new_employee/resume-lines.png
   :alt: A resumé entry form with all the information populated.

.. note::
   After the new employee form is saved, the current position and company is automatically added to
   the :guilabel:`Resumé` tab, with the end date listed as `current`.

.. _employees/skills:

Skills
------

An employee's skills can be entered in the :guilabel:`Resumé` tab in the same manner that a resumé
line is created.

In order to add a skill to an employee record, the skill types must first be configured. By default,
Odoo comes with two :guilabel:`Skill Types` preconfigured: *Languages* and *Soft Skills*.
:ref:`Configure the rest of the skill types <employees/skill-types>` before adding any skills to the
employee record.

When adding the first skill to an employee record, a :guilabel:`Pick a skill from the list` button
appears in the :guilabel:`Skills` section of the :guilabel:`Resumé` tab. Click the :guilabel:`Pick a
skill from the list` button, and select the following information for each skill.

- :guilabel:`Skill Type`: select a :ref:`skill type <employees/skill-types>` by clicking the radio
  button next to the skill type.
- :guilabel:`Skill`: after selecting a :guilabel:`Skill Type`, the corresponding skills associated
  with that selected :guilabel:`Skill Type` appear in a drop-down menu. For example, selecting
  :guilabel:`Language` as the :guilabel:`Skill Type` presents a variety of languages to select from
  under the :guilabel:`Skills` field. Select the appropriate preconfigured skill from the list.

  .. important::
     If the desired skill does not appear in the list, it is **not** possible to add the new skill
     from this window. New skills must be added from the :ref:`Skill Types <employees/skill-types>`
     dashboard.

- :guilabel:`Skill Level`: pre-defined skill levels associated with the selected :guilabel:`Skill
  Type` appear in a drop-down menu. First, select a :guilabel:`Skill Level`, then the progress bar
  automatically displays the pre-defined progress for that specific skill level. Skill levels can be
  created and modified from the :ref:`Skill Types <employees/skill-types>` dashboard.

Click the :guilabel:`Save & Close` button if there is only one skill to add, or click the
:guilabel:`Save & New` button to save the current entry and immediately add another skill.

At any point, a new line can be added by clicking the :guilabel:`ADD` button next to the
corresponding section.

.. image:: new_employee/select-skills.png
   :alt: A skill form with the information filled out.

.. important::
   Only users with :guilabel:`Officer: Manage all employees` or :guilabel:`Administrator` rights for
   the **Employees** app can add or edit skills.

.. _employees/skill-types:

Skill types
~~~~~~~~~~~

In order to add a skill to an employee's form, the :guilabel:`Skill Types` must be configured. Go to
:menuselection:`Employees app --> Configuration --> Skill Types` to view the currently configured
skill types and create new skill types.

.. note::
   The default skill of :guilabel:`Languages` is preconfigured with twenty-one skills, and the
   default :guilabel:`Soft Skills` is preconfigured with fifteen skills.

Click the :guilabel:`New` button in the upper-left corner, and a new :guilabel:`Skill Type` form
appears. Fill out the following details for the new skill type. Repeat this for all the needed skill
types.

- :guilabel:`Skill Type`: enter the name of the skill type. This acts as the parent category for
  more specific skills and should be generic.
- :guilabel:`SKILLS`: click :guilabel:`Add a line`, and enter the :guilabel:`Name` for the new
  skill, then repeat for all other needed skills.
- :guilabel:`LEVELS`: click :guilabel:`Add a line`, and enter a :guilabel:`Name` and
  :guilabel:`Progress` percentage (`0`-`100`) for each level.

  Set a :guilabel:`Default Level` by clicking the toggle on the desired line (only one level can be
  selected). The toggle turns green to indicate the default level. Typically, the lowest level is
  chosen, but any level can be selected.
- :guilabel:`DISPLAY`: click the colored box next to the :guilabel:`Color` field to reveal a list of
  available colors for the skill type. Click on a color to select it.

  .. example::
     To add a math skill set in yellow, enter `Math` in the :guilabel:`Name` field. Then, in the
     :guilabel:`Skills` field, enter `Algebra`, `Calculus`, and `Trigonometry`. Next, in the
     :guilabel:`Levels` field enter `Beginner`, `Intermediate`, and `Expert`, with the
     :guilabel:`Progress` listed as `25`, `50`, and `100`, respectively. Click :guilabel:`Set
     Default` on the `Beginner` line to set this as the default skill level. Last, click the colored
     box next to :guilabel:`Color`, and select yellow.

     .. image:: new_employee/math-skills.png
        :alt: A skill form for a Math skill type, with all the information entered.

.. tip::
   Once the form is completely filled out, click the :icon:`fa-cloud-upload` :guilabel:`(Save
   manually)` icon at the top of the screen, and the :guilabel:`Levels` rearrange in descending
   order, with the highest level at the top, and the lowest at the bottom, regardless of the default
   level and the order they were entered.

.. _employees/work-info-tab:

Work information tab
====================

The :guilabel:`Work Information` tab contains job-related details such as the employee's schedule,
roles, approvers (for time off, timesheets, and expenses), remote work setup, and work location.

Click on the :guilabel:`Work Information` tab to access this section, and enter the following
information for the new employee, for the various sections listed below.

LOCATION
--------

This section is visible for all employees, and does not require any other apps to be installed for
this section to be visible.

- :guilabel:`Work Address`: select the :guilabel:`Work Address` from the drop-down menu. The current
  company populates this field, by default. To modify the address, hover over the first line (if
  there are multiple lines) of the address to reveal an :icon:`oi-arrow-right` :guilabel:`(Internal
  Link)` arrow. Click the :icon:`oi-arrow-right` :guilabel:`(Internal Link)` arrow to open up the
  company form, and make any edits.

  Use the breadcrumb links to navigate back to the new employee form when done.

  If a new work address is needed, add the address by typing it in the field, then click
  :guilabel:`Create (new address)` to add the address, or :guilabel:`Create and edit...` to add the
  new address and edit the address form.
- :guilabel:`Work Location`: using the drop-down menu, select where the :guilabel:`Work Address` is
  located. The default options are :guilabel:`Home`, :guilabel:`Office`, or :guilabel:`Other`.

  To add a new location, type in the location name, then click :guilabel:`Create (new location)` to
  add the location, or :guilabel:`Create and edit...` to add the location, assign a :guilabel:`Work
  Address`, and a :guilabel:`Cover Image`.

APPROVERS
---------

To see this section, the user must have either :guilabel:`Administrator` or :guilabel:`Officer:
Manage all employees` rights set for the **Employees** application. For the category to appear, the
respective app **must** be installed. For example, if the **Time Off** app is not installed, the
:guilabel:`Time Off` approver field does not appear. Only one selection can be made for each field.

  .. important::
     The users that appear in the drop-down menu for the :guilabel:`Approvers` section **must** have
     *Administrator* rights set for the corresponding human resources role.

     To check who has these rights, go to :menuselection:`Settings app` and click
     :icon:`oi-arrow-right` :guilabel:`Manage Users` in the :guilabel:`Users` section. Then, click
     on an employee, then click into the :guilabel:`Access Rights` tab. Scroll to the
     :guilabel:`HUMAN RESOURCES` and check the various settings.

     - In order for the user to appear as an approver for :guilabel:`Expenses`, they **must** have
       either :guilabel:`Team Approver`, :guilabel:`All Approver`, or :guilabel:`Administrator` set
       for the :guilabel:`Expenses` role.
     - In order for the user to appear as an approver for :guilabel:`Time Off`, they **must** have
       either :guilabel:`Officer:Manage all Requests` or :guilabel:`Administrator` set for the
       :guilabel:`Time Off` role.
     - In order for the user to appear as an approver for :guilabel:`Timesheets`, they **must**
       have either :guilabel:`Officer:Manage all contracts` or :guilabel:`Administrator` set for the
       :guilabel:`Payroll` role.
     - In order for the user to appear as an approver for :guilabel:`Attendances`, they **must**
       have :guilabel:`Administrator` set for the :guilabel:`Payroll` role.

- :guilabel:`Expense`: using the drop-down menus, select the user responsible for approving all
  expenses for the employee.
- :guilabel:`Time Off`: using the drop-down menus, select the user responsible for approving all
  time off requests from this employee.
- :guilabel:`Timesheet`: using the drop-down menus, select the user responsible for approving all
  the employee's timesheet entries.
- :guilabel:`Attendance`: using the drop-down menus, select the user responsible for approving all
  attendance entries for the employee.

REMOTE WORK
-----------

This section **only** appears if the *Remote Work* setting is enabled in the configuration menu.

Use the drop-down menu to select the default location the employee works, for each day of the week.
The default options are :guilabel:`Home`, :guilabel:`Office`, or :guilabel:`Other`.

A new location can be typed into the field, then click either :guilabel:`Create (new location)` to
add the location, or :guilabel:`Create and edit...` to add the new location and edit the form.

After edits are done, click :guilabel:`Save & Close`, and the new location is added, and populates
the field.

Leave the field blank (:guilabel:`Unspecified`) for non-working days, such as Saturday and Sunday.

.. note::
   It is also possible to add or modify work locations by navigating to :menuselection:`Employees
   app --> Configuration --> Work Locations`. To modify a location, click on an existing location,
   then make any changes on the form.

   Click :guilabel:`New` to create a new location, then enter the following information on the form.
   All fields are **required**.

   - :guilabel:`Work Location`: enter the name for the location. This can be as general or as
     specific, as needed, such as `Home` or `Building 1, Second Floor`, respectfully.
   - :guilabel:`Work Address`: using the drop-down menu, select the address for the location.
   - :guilabel:`Cover Image`: click on the icon to select it for the :guilabel:`Cover Image`.
     Options are a :icon:`fa-home` :guilabel:`(home)` icon, an :icon:`fa-building-o`
     :guilabel:`(building)` icon, and a :icon:`fa-map-marker` :guilabel:`(map marker)` icon.
   - :guilabel:`Company`: using the drop-down menu, select the company the location applies to. The
     current company populates this field, by default. This field **only** appears in a
     multi-company database.

   .. image:: new_employee/location.png
      :alt: A new work location form with all fields filled out.

SCHEDULE
--------

This section defines when the employee is expected to work.

- :guilabel:`Working Hours`: using the drop-down menu, select the hours the employee is expected to
  work. By default, a :guilabel:`Standard 40 hour/week` working schedule is available. If the
  **Timesheets** app is installed, an :guilabel:`Appointment Resource Default Calendar` option is
  also available.

  To view and modify the specific daily working hours, click the :icon:`oi-arrow-right`
  :guilabel:`(Internal link)` arrow at the end of the :guilabel:`Working Hours` line. Working hours
  can be modified or deleted here.

   .. note::
     :guilabel:`Working Hours` are related to a company's working schedules, and an Employee
     **cannot** have working hours that are outside of a company's working schedule.

     Each individual working schedule is company-specific. For multi-company databases, each company
     **must** have its own working hours set.

     If an employee's working hours are not configured as a working schedule for the company, new
     working schedules can be added, or existing working schedules can be modified.

     Working hours can be modified in the **Payroll** application, where they are referred to as
     :guilabel:`Working Schedules`.

     For more information on how to create or modify :guilabel:`Working Schedules` in the
     **Payroll** application, refer to the :doc:`../../hr/payroll` documentation.

     After the new working time is created, or an existing one is modified, the :guilabel:`Working
     Hours` can be selected on the employee form.

- :guilabel:`Timezone`: using the drop-down menu, select the timezone for the employee.

PLANNING
--------

This section is **only** visible if the **Planning** app is installed, as this section affects what
the employee can be assigned in the **Planning** app.

- :guilabel:`Roles`: using the drop-down menu, select all the roles the employee can perform. There
  are no preconfigured roles available, so all roles must be :ref:`configured in the Planning app
  <planning/roles>`. There is no limit to the number of roles assigned to an employee.
- :guilabel:`Default Role`: using the drop-down menu, select the default role the employee will
  typically perform. If the :guilabel:`Default Role` is selected before the :guilabel:`Roles` field
  is configured, the selected role is automatically added to the list of :guilabel:`Roles`.

.. _employees/private-info:

Private information tab
=======================

No information in the :guilabel:`Private Information` tab is required to create an employee,
however, some information in this section may be necessary for the company's payroll department.

In order to properly process payslips and ensure all deductions are accounted for, it is recommended
to check with the accounting department and payroll department to ensure all required fields are
populated.

Enter the various information in the following sections and fields of the :guilabel:`Private
Information` tab. Fields are entered either using a drop-down menu, ticking a checkbox, or typing in
the information.

 .. note::
    Depending on the localization setting, other fields may be present. For example, for the United
    States, a :guilabel:`SSN No` (Social Security Number) field is present.

PRIVATE CONTACT
---------------

- :guilabel:`Private Address`: enter the employee's private home address.
- :guilabel:`Private Email`: enter the employee's personal email address.
- :guilabel:`Private Phone`: enter the employee's personal phone number.
- :guilabel:`Bank Account`: enter the bank account number for the employee, and click
  :guilabel:`Create and edit..`. A :guilabel:`Create Bank Account` form loads with the bank account
  number populating the :guilabel:`Account Number` field. Next, select the :guilabel:`Bank` using
  the drop-down menu.

  If the bank is not already configured, click :guilabel:`Create and edit...` and a blank
  :guilabel:`Create Bank` form loads, with the bank name populating the :guilabel:`Bank` field.
  Next, enter the :guilabel:`Bank Identifier Code`, also referred to as a BIC or SWIFT code. Then
  enter the :guilabel:`Bank Address`, :guilabel:`Phone`, and :guilabel:`Email`. Once the form is
  complete, click :guilabel:`Save & Close`, and the new bank populates the :guilabel:`Bank` field.

  Next, enter the :guilabel:`ABA/Routing` number for the bank account, then select the
  :guilabel:`Account Holder`, which is typically the employee.

  Finally, click the :guilabel:`Send Money` toggle. This changes the toggle color to green, and the
  status changes from :guilabel:`Untrusted` in black text, to :guilabel:`Trusted` in green text.

  .. image:: new_employee/bank.png
     :alt: The Create Bank Account form with all the information filled out.

  .. important::
     **All** bank accounts must be marked as :guilabel:`Trusted`, if not payments cannot be
     processed and sent to the bank account. Having an :guilabel:`Untrusted` bank account for an
     employee will cause an error in the **Payroll** application.

- :guilabel:`Home-Work Distance`: enter the number, in miles or kilometers, the employee commutes to
  work, in one direction. The unit of measure can be changed from kilometers (:guilabel:`km`) to
  miles (:guilabel:`mi`) using the drop-down menu. This field is only necessary if the employee is
  receiving any type of commuter benefits or tax deductions based on commute distances.
- :guilabel:`Private Car Plate`: enter the license plate for the employee's personal car.

EMERGENCY
---------

This section details the person to contact in the event of an emergency.

- :guilabel:`Contact Name`: enter the emergency contact's name.
- :guilabel:`Contact Phone`: enter the emergency contact's phone number. It is recommended to enter
  a phone number that the person has the most access to, typically a mobile phone.

FAMILY STATUS
-------------

This section is used for tax purposes, and affects the **Payroll** app. Enter the following
information in the fields.

- :guilabel:`Marital Status`: select the marital status for the employee using the drop-down menu.
  The default options are :guilabel:`Single`, :guilabel:`Married`, :guilabel:`Legal Cohabitant`,
  :guilabel:`Widower`, and :guilabel:`Divorced`.

  If :guilabel:`Married` or :guilabel:`Legal Cohabitant` is selected, two additional fields appear:
  :guilabel:`Spouse Complete Name` and :guilabel:`Spouse Birthdate`. Enter these fields with the
  respective information.
- :guilabel:`Number of Dependent Children`: enter the number of dependent children. This number is
  the same number used for calculating tax deductions, and should follow all tax regulations
  regarding applicable dependents.

CITIZENSHIP
-----------

This section outlines all the information relating to the employee's citizenship. This section is
primarily for employees who are working in a different country than their citizenship. For employees
working outside of their home country, for example on a work visa, this information may be required.
Information for all fields may not be available.

- :guilabel:`Nationality (Country)`: using the drop-down menu, select the country the employee is
  from.
- :guilabel:`Identification No`: enter the employee's identification number in this field.
- :guilabel:`SSN No`: enter the employee's social security number.
- :guilabel:`Passport No`: enter the employee's passport number.
- :guilabel:`Gender`: select the employee's gender from the drop-down menu. The default options are
  :guilabel:`Male`, :guilabel:`Female`, and :guilabel:`Other`.
- :guilabel:`Date of Birth`: using the calendar selector, select the birthday of the employee.
- :guilabel:`Place of Birth`: enter the city or town the employee was born.
- :guilabel:`Country of Birth`: using the drop-down menu, select the country the employee was born.
- :guilabel:`Non-resident`: tick this checkbox if the employee lives in a foreign country.

EDUCATION
---------

This section allows for only one entry, and should be populated with the highest degree the employee
has earned.

- :guilabel:`Certificate Level`: using the drop-down menu, select the highest degree the employee
  has earned. The default options are :guilabel:`Graduate`, :guilabel:`Bachelor`,
  :guilabel:`Master`, :guilabel:`Doctor`, and :guilabel:`Other`.
- :guilabel:`Field of Study`: type in the subject the employee studied, such as `Business` or
  `Computer Science`.
- :guilabel:`School`: type in the name of the school the employee earned the degree from.

WORK PERMIT
-----------

This section should be filled in if the employee is working on some type of work permit. This
section may be left blank if they do not require any work permits for employment.

- :guilabel:`Visa No`: enter the employee's visa number.
- :guilabel:`Work Permit No`: enter the employee's work permit number.
- :guilabel:`Visa Expiration Date`: using the calendar selector, select the date the employee's visa
  expires.
- :guilabel:`Work Permit Expiration Date`: using the calendar selector, select the date the
  employee's work permit expires.
- :guilabel:`Work Permit`: click :guilabel:`Upload your file`, then navigate to the work permit file
  in the file explorer, and click :guilabel:`Select` to add the permit.

.. _employees/payroll:

Payroll tab
===========

Depending on the installed :doc:`localization <../payroll/payroll_localizations>`, the sections and
fields in this tab may vary considerably. Due to the specific nature of localizations and the
variety of information that may be requested in this tab, it is recommended to check with the
accounting department to fill out this section correctly.

The following fields are universal for all localizations:

- :guilabel:`Legal Name`: enter the legal name for the employee. This is the name that typically is
  used for filing taxes.
- :guilabel:`Payslip Language`: enter the desired language to be used when printing payslips for
  this employee.
- :guilabel:`Registration Number of the Employee`: enter the employees registration number.

.. seealso::
   :doc:`Payroll localizations <../payroll/payroll_localizations>`

.. _employees/hr-settings:

Settings tab
============

This tab provides various fields for different applications within the database. Depending on what
applications are installed, different fields may appear in this tab.

STATUS
------

- :guilabel:`Employee Type`: using the drop-down menu, select the *type* of employee. The default
  options are :guilabel:`Employee`, :guilabel:`Worker`, :guilabel:`Student`, :guilabel:`Trainee`,
  :guilabel:`Contractor`, and :guilabel:`Freelancer`.
- :guilabel:`Related User`: using the drop-down menu, select a user in the database to link to this
  employee.

  .. important::
     Employees do **not** need to be users of the database.

     *Employees* do **not** count towards the Odoo subscription billing, while *Users* **do** count
     towards billing. If the new employee should also be a user, the user **must** be created.

     After the employee is created, click :guilabel:`Create User` at the end of the
     :guilabel:`Related User` line. A :guilabel:`Create User` form appears.

     The employee name populates the :guilabel:`Name` field by default. If the :guilabel:`Email
     Address`, :guilabel:`Phone`, :guilabel:`Mobile`, and :guilabel:`photo` are populated on the
     employee form, the corresponding fields are auto-populated on the :guilabel:`Create User` form.

    Once the form is completed, click the :guilabel:`Save` button. The user is created, and
    populates the :guilabel:`Related User` field.

     Users can also be created manually. For more information on how to manually add a user, refer
     to the :doc:`../../general/users/` document.

APPLICATION SETTINGS
--------------------

This section affects the **Fleet** and **Manufacturing** apps. Enter the following information in
this section.

- :guilabel:`Hourly Cost`: enter the hourly cost for the employee, in a XX.XX format. This cost is
  factored in when the employee is working at a :doc:`work center
  <../../inventory_and_mrp/manufacturing/advanced_configuration/using_work_centers>`.

  .. note::
     Manufacturing costs are added to the costs for producing a product, if the value of the
     manufactured product is **not** a fixed amount. This cost does **not** affect the **Payroll**
     application.

- :guilabel:`Fleet Mobility Card`: if applicable, enter the :guilabel:`Fleet Mobility Card` number

ATTENDANCE/POINT OF SALE
------------------------

This section determines how employees sign in to either the **Attendances** or **Point Of Sale**
apps, and only appear if either of these apps is installed.

- :guilabel:`PIN Code`: enter the employee's pin number in this field. This code is used to sign in
  and out of **Attendances** app kiosks, and a :abbr:`POS (Point Of Sale)` system.
- :guilabel:`Badge ID`: click :guilabel:`Generate` at the end of the :guilabel:`Badge ID` line to
  create a badge number. Once generated, the badge number populates the :guilabel:`Badge ID` field,
  and :guilabel:`Generate` changes to :guilabel:`Print Badge`. Click :guilabel:`Print Badge` to
  create a PDF file of the employee's badge. The badge can be printed and used to log into a
  :abbr:`POS (point of sale)` system or :ref:`check-in <attendances/kiosk-mode-entry>` on an
  **Attendances** app kiosk.
