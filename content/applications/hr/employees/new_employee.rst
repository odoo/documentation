==================
Add a new employee
==================

When a new employee is hired, the first step is to create a new employee form. Starting in the
:menuselection:`Employees` app dashboard, click the :guilabel:`Create` button to create a new
employee form. Fill out the required information (underlined in bold) and any additional details,
then click :guilabel:`Save`.

.. image:: new_employee/new-employee-form.png
   :align: center
   :alt: Create a new employee card.

.. note::
   The current company phone number and name is populated in the :guilabel:`Work Phone` and
   :guilabel:`Company` fields.

General information
===================

Required fields
---------------

- :guilabel:`Name`: Enter the employee's name.
- :guilabel:`Company`: Select the company from the drop-down menu that the new employee is hired by,
  or create a new company by typing the name in the field.

.. image:: new_employee/employee-new.png
   :align: center
   :alt: Create a new employee card.

Optional fields
---------------

- :guilabel:`Photo`: In the top right image box of the employee card, click on the :guilabel:`✏️
  (pencil)` edit icon to select a photo to upload.
- :guilabel:`Job Position`: Enter the employee's job position title.
- Tags: Click on a tag in the drop-down menu to add any tags applicable to the employee. Any tag can
  be created in this field by typing it in. Once created, the new tag is available for all employee
  cards. There is no limit to the amount of tags that can be added.
- Work Contact Information: Enter the employees :guilabel:`Work Mobile`, :guilabel:`Work Phone`,
  :guilabel:`Work Email`, and/or :guilabel:`Company` name.
- :guilabel:`Department`: Select the employee's department from the drop-down menu.
- :guilabel:`Manager`: Select the employee's manager from the drop-down menu.
- :guilabel:`Coach`: Select the employee's coach from the drop-down menu.

.. note::
   After a :guilabel:`Manager` is selected, if the :guilabel:`Coach` field is blank, the selected
   manager automatically populates the :guilabel:`Coach` field.

.. tip::
   To make edits to the selected :guilabel:`Department`, :guilabel:`Manager`, :guilabel:`Coach`, or
   :guilabel:`Company`, click the :guilabel:`External Link` button next to the respective selection.
   The :guilabel:`External Link` button opens the selected form, allowing for modifications. Click
   :guilabel:`Save` after any edits are made.

Additional information tabs
===========================

Resumé tab
----------

Resumé
~~~~~~

Next, enter the employee's work history in the :guilabel:`Resumé` tab. Each resumé line must be
entered individually. Click :guilabel:`Create a New Entry`, and the :guilabel:`Create Resumé lines`
form appears. Enter the following information for each entry.

.. image:: new_employee/resume-lines.png
   :align: center
   :alt: Add information for the previous work experience in this form.

- :guilabel:`Title`: Type in the title of the previous work experience.
- :guilabel:`Type`: From the drop-down menu, select either :guilabel:`Experience`,
  :guilabel:`Education`, :guilabel:`Internal Certification`, :guilabel:`Internal Training`, or type
  in a new entry.
- :guilabel:`Display Type`: Select either :guilabel:`Classic`, :guilabel:`Certification`, or
  :guilabel:`Course` from the drop-down menu.
- :guilabel:`Date Start` and :guilabel:`Date End`: Enter the start and end dates for the work
  experience. To select a date, use the :guilabel:`< (left)` and :guilabel:`> (right)` arrow icons
  to scroll to the desired month, then click on the day to select it.
- :guilabel:`Description`: Enter any relevant details in the field.

Once all the information is entered, click the :guilabel:`Save & Close` button if there is only one
entry to add, or click the :guilabel:`Save & New` button to save the current entry and create
another resumé line.

.. note::
   After the new employee form is saved, the current position and company is automatically added to
   the :guilabel:`Resumé` tab as :guilabel:`Experience`, with the end date listed as
   :guilabel:`Current`.

Skills
~~~~~~

An employee's skills can be entered in the :guilabel:`Resumé` tab in the same manner a resumé line
is created. Click the :guilabel:`Create a New Entry` button under :guilabel:`Skills` and a
:guilabel:`Create Skills` form appears. Fill in the information on the form.

.. image:: new_employee/create-skills.png
   :align: center
   :alt: Create a new skill for the employee.

- :guilabel:`Skill Type`: Select a :ref:`skill type <employees/skill-types>` by clicking the radio
  button next to the skill type.
- :guilabel:`Skill`: The corresponding skills associated with the selected :guilabel:`Skill Type`
  appear in a drop-down menu. For example, selecting :guilabel:`Language` as the :guilabel:`Skill
  Type` presents a variety of languages to select from under the :guilabel:`Skills` field. Select
  the appropriate pre-configured skill, or type in a new one.
- :guilabel:`Skill Level`: Pre-defined skill levels associated with the selected :guilabel:`Skill
  Type` appear in a drop-down menu. Select a skill level, then the progress bar automatically
  displays the pre-defined progress for that skill level. Skill levels and progress can be modified
  in the :guilabel:`Skill Level` pop-up form, which is accessed via the :guilabel:`External Link`
  button next to :guilabel:`Skill Level` field.

Once all the information is entered, click the :guilabel:`Save & Close` button if there is only one
entry to add, or click the :guilabel:`Save & New` button to save the current entry and create
another skill.

To delete any line from the :guilabel:`Resumé` tab, click the :guilabel:`🗑️ (trash can)` icon to
delete the entry. Add a new line by clicking the :guilabel:`Add` button next to the corresponding
section.

.. _employees/skill-types:

Skill types
***********

In order to add a skill to an employee's form, the :guilabel:`Skill Types` must be configured. Go to
:menuselection:`Employees app --> Configuration --> Skill Types` to view the currently configured
skill types and create new skill types. Click :guilabel:`Create` and a new :guilabel:`Skill Type`
form appears. Fill out all the details and then click :guilabel:`Save`. Repeat this for all the
skill types needed.

- :guilabel:`Skill Type`: Enter the name of the skill type. This should be somewhat generic, since
  the specific skills listed will be housed under this category.
- :guilabel:`Skills`: Click :guilabel:`Add a line` and enter the information for the new skill, then
  repeat for all other needed skills.
- :guilabel:`Levels`:  Click :guilabel:`Add a line` and a :guilabel:`Create Levels` form appears.
  Enter the name of the level, and assign a percentage (0-100) for that level. Click :guilabel:`Save
  & New` to save the entry and add another level, or click :guilabel:`Save & Close` to save the
  level and close the form.

  .. example::
     To add a math skill set, enter `Math` in the :guilabel:`Name` field. Next, in the
     :guilabel:`Skills` field, enter `Algebra`, `Calculus`, and `Trigonometry`. Last, in the
     :guilabel:`Levels` field enter `Beginner`, `Intermediate`, and `Expert`, with the
     :guilabel:`Progress` listed as `25`, `50`, and `100`, respectively. Then, either click
     :guilabel:`Save & Close` or :guilabel:`Save & New`.

     .. image:: new_employee/math-skills.png
        :align: center
        :alt: Add new math skills and levels with the skill types form.

.. _employees/work-info-tab:

Work information tab
--------------------

The :guilabel:`Work Information` tab is where the employee's specific job related information is
housed. Their working schedule, various roles, who approves their specific requests (time off,
timesheets, and expenses), and specific work location details are listed here. Enter the following
information for the new employee.

- :guilabel:`Location`: Select the :guilabel:`Work Address` and :guilabel:`Work Location` from the
  corresponding drop-down menus. The work address :guilabel:`External Link` button opens up the
  selected company form in a window, and allows for editing. The :guilabel:`Work Location` is the
  specific location details, such as a floor or building. If a new work location is needed, add the
  location by typing it in the field.
- :guilabel:`Approvers`: Using the drop-down menus, select the users responsible for approving
  :guilabel:`Time Off`, :guilabel:`Expenses`, and :guilabel:`Timesheets` for the employee. The
  :guilabel:`External Link` button opens a form with the approver's :guilabel:`Name`,
  :guilabel:`Email Address`, :guilabel:`Company`, :guilabel:`Phone`, and :guilabel:`Mobile` fields.
  These can be modified, if needed. Click :guilabel:`Save` after making any edits.
- :guilabel:`Schedule`: Select the :guilabel:`Working Hours` and :guilabel:`Timezone` (both
  required) for the employee. The :guilabel:`External Link` button opens up a detailed view of the
  specific daily working hours. Working hours can be modified or deleted here. Click
  :guilabel:`Save` to save any changes.
- :guilabel:`Planning`: The :guilabel:`Planning` section affects the *Planning* app, and will only
  appear if the *Planning* app is installed. Click on a planning role from the drop-down menu for
  both the :guilabel:`Default Planning Role` and the :guilabel:`Planning Roles` fields to add a
  role. There is no limit to the amount of :guilabel:`Planning Roles` that can be selected for an
  employee, but there can only be one :guilabel:`Default Planning Role`. The default is the
  *typical* role that the employee performs, where the :guilabel:`Planning Roles` are *all* the
  specific roles the employee is able to perform.

  .. image:: new_employee/work-info.png
     :align: center
     :alt: Add the work information to the Work Information tab.

.. tip::
   The users that appear in the drop-down menu for the :guilabel:`Approvers` section must have
   *Administrator* rights set for the corresponding human resources role. To check who has these
   rights, go to :menuselection:`Settings app --> Users --> Manage Users`. Click on an employee, and
   check the :guilabel:`Human Resources` section of the :guilabel:`Access Rights` tab.

   - In order for the user to appear as an approver for :guilabel:`Expenses`, they must have either
     :guilabel:`Team Approver`, :guilabel:`All Approver`, or :guilabel:`Administrator` set for the
     :guilabel:`Expenses` role.
   - In order for the user to appear as an approver for :guilabel:`Time Off`, they must have either
     :guilabel:`Officer` or :guilabel:`Administrator` set for the :guilabel:`Time Off` role.
   - In order for the user to appear as an approver for :guilabel:`Timesheets`, they must have
     either :guilabel:`Manager`, :guilabel:`Officer`, or :guilabel:`Administrator` set for the
     :guilabel:`Payroll` role.

.. note::
   :guilabel:`Working Hours` are related to a company's working times, and an employee cannot have
   working hours that are outside of a company's working times.

   Each individual working time is company-specific, so for multi-company databases, each company
   needs to have its own working hours set.

   If an employee's working hours are not configured as a working time for the company, new working
   times can be added, or existing working times can be modified. To add or modify a working time,
   go to the :menuselection:`Payroll app --> Configuration --> Working Times`, and add a new working
   time or edit an existing one.

   After the new working time is created, set the working hours for the employee.

Private information tab
-----------------------

No information in the :guilabel:`Private Information` tab is required, however, some information in
this section may be critical for the company's payroll department. In order to properly process
payslips and ensure all deductions are accounted for, the employee's personal information should be
entered.

Here, the employee's :guilabel:`Private Contact`, :guilabel:`Marital Status`, :guilabel:`Emergency
Contact`, :guilabel:`Education`, :guilabel:`Citizenship`, :guilabel:`Dependant`, and :guilabel:`Work
Permit` information is entered. Fields are entered either using a drop-down menu, clicking a check
box, or typing in the information.

- :guilabel:`Private Contact`: Enter the personal :guilabel:`Address` for the employee. The
  selection can be made with the drop-down menu. If the information is not available, type in the
  name for the new address. To edit the new address, click the :guilabel:`External Link` button to
  open the address form. On the address form, enter the necessary details, then click
  :guilabel:`Save`

  Some other information in the :guilabel:`Private Contact` section may auto-populate, if the
  address is already listed in the drop-down menu.

  Next, enter the employee's :guilabel:`Email` address and :guilabel:`Phone` number in the
  corresponding fields.

  Select the employee's preferred :guilabel:`Language` from the drop-down menu.

  Enter the employee's :guilabel:`Bank Account Number` using the drop-down menu. If the bank is not
  already configured (the typical situation when creating a new employee) enter the bank account
  number, and click :guilabel:`Create and Edit`. A :guilabel:`Create: Bank Account Number` for
  appears. Fill in the information, then click :guilabel:`Save`.

  Finally, enter the :guilabel:`Home-Work Distance` in the field. This field is only necessary if
  the employee is receiving any type of commuter benefits.

- :guilabel:`Marital Status`: Select either :guilabel:`Single`, :guilabel:`Married`,
  :guilabel:`Legal Cohabitant`, :guilabel:`Widower`, or :guilabel:`Divorced` from the drop-down
  menu.
- :guilabel:`Emergency`: Type in the name and phone number of the employee's emergency contact.
- :guilabel:`Education`: Select the highest level of education completed by the employee from the
  :guilabel:`Certificate Level` drop-down menu. Options include :guilabel:`Graduate`,
  :guilabel:`Bachelor`, :guilabel:`Master`, :guilabel:`Doctor`, or :guilabel:`Other`. Type in the
  :guilabel:`Field of Study`, and the name of the :guilabel:`School` in the respective fields.
- :guilabel:`Citizenship`: This section houses all the information relevant to the citizenship of
  the employee. Some selections use a drop-down menu, as does the :guilabel:`Nationality (Country)`,
  :guilabel:`Gender`, and :guilabel:`Country of Birth` sections. The :guilabel:`Date of Birth` uses
  a calendar module to select the date. First, click on the name of the month, then the year, to
  access the year ranges. Use the :guilabel:`< (left)` and :guilabel:`> (right)` arrow icons,
  navigate to the correct year range, and click on the year. Next, click on the month. Last, click
  on the day to select the date. Type in the information for the :guilabel:`Identification No`,
  :guilabel:`Passport No`, and :guilabel:`Place of Birth` fields.
- :guilabel:`Dependant`: If the employee has any children, enter the :guilabel:`Number of Children`
  in the field.
- :guilabel:`Work Permit`: If the employee has a work permit, enter the information in this section.
  Type in the :guilabel:`Visa No` and/or :guilabel:`Work Permit No` in the corresponding fields.
  Using the calendar module, select the :guilabel:`Visa Expire Date` and/or the :guilabel:`Work
  Permit Expiration Date` to enter the expiration date(s). If available, upload a digital copy of
  the work permit document. Click :guilabel:`Upload Your File`, navigate to the work permit file in
  the file explorer, and click :guilabel:`Open`.

.. image:: new_employee/private-info.png
   :align: center
   :alt: Add the private information to the Private Information tab.

.. _employees/hr-settings:

HR settings tab
---------------

This tab provides various fields for different information, depending on the country the company is
located. Different fields are configured for different locations, however some sections appear
regardless.

- :guilabel:`Status`: Select an :guilabel:`Employee Type` and, if applicable, a :ref:`Related User
  <employees/related-user>`, with the drop-down menus.
- :guilabel:`Payroll`: Select the :guilabel:`Current Contract` and :guilabel:`Job Position` from the
  drop-down menus. If applicable, enter the :guilabel:`Registration Number` in this section.
- :guilabel:`Previous Employer`: This section appears only for Belgian companies, and will not be
  visible for other locations. These are days that will be paid to the new employee. Enter any
  :guilabel:`Simple Holiday Pay to Recover`, :guilabel:`Number of Days to recover`, and
  :guilabel:`Recovered Simple Holiday Pay` from a previous employer, for both N and N-1 categories.
- :guilabel:`Previous Occupations`: This section appears ony for Belgian companies, and will not be
  visible for other locations. Click :guilabel:`Add a line` to enter information for each previous
  occupation. Enter the number of :guilabel:`Months`, the :guilabel:`Amount`, and the
  :guilabel:`Occupational Rate` in the corresponding fields. Click the :guilabel:`🗑️ (trash can)`
  icon to delete a line.
- :guilabel:`Attendance/Point of Sale`: The employee's :guilabel:`Badge ID` and :guilabel:`PIN Code`
  can be entered here, if the employee needs/has one. Click :guilabel:`Generate` next to the
  :guilabel:`Badge ID` to create a badge ID.
- :guilabel:`Application Settings`: If applicable, enter the :guilabel:`Fleet Mobility Card` number.
  Enter the employee's cost per hour in a $XX.XX format. This is factored in when the employee is
  working at a :doc:`work center
  <../../inventory_and_mrp/manufacturing/management/using_work_centers>`. This value affects the
  manufacturing costs for a product, if the value of the manufactured product is not a fixed amount.

.. image:: new_employee/hr-settings.png
   :align: center
   :alt: Enter any information prompted in the HR Settings tab for the employee.

.. _employees/related-user:

.. important::
   Employees do not also need to be users. An employee does **not** count towards billing, while
   *Users* **do** count towards billing. If the new employee should also be a user, the user must
   be created.

   In the :guilabel:`Related User` field, type in the name of the user to add, then click
   :guilabel:`Create and Edit...`. A :guilabel:`Create: Related User` form appears. Type in the
   :guilabel:`Name`, :guilabel:`Email Address`, and then select the :guilabel:`Company` from the
   drop-down menu. Click :guilabel:`Save` after the information is entered. Once the record is
   saved, the new user appears in the :guilabel:`Related User` field.

Documents
=========

All documents associated with an employee are stored in the *Documents* app. The number of documents
associated with the employee appear in the :guilabel:`Documents` smart button on the employee form.
Click on the smart button, and all the documents appear. For more information on the *Documents*
app, refer to the :doc:`Documents documentation </applications/finance/documents>`.

.. image:: new_employee/documents.png
   :align: center
   :alt: All uploaded documents associated with the employee appear in the documents smart-button.
