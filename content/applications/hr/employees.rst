:show-content:

=========
Employees
=========

Odoo **Employees** centralizes :doc:`personnel files <employees/new_employee>`, employment
:doc:`contracts <payroll/contracts>`, and :doc:`departmental hierarchies <employees/departments>` in
one system. In addition, each employee record tracks :doc:`certifications
<employees/certifications>` and :doc:`training <employees/learning>`, earned :doc:`badges
<employees/badges>`, and all assigned :doc:`equipment <employees/equipment>`. Customizable
:doc:`onboarding <employees/onboarding>` and :doc:`offboarding <employees/offboarding>` programs
ensure all employees are trained and ready for work, and all required steps are taken when they
leave.

Properly configuring the settings in the **Employees** app ensures the dashboard shows each
employee's real-time attendance and work location—data that drives payroll accuracy, capacity
planning, and compliance reporting.

HR officers manage employee records from :menuselection:`Employees app --> Management`. All users
can consult their colleagues' public information, such as their job position, department, and
work contact details, in :menuselection:`Employees app --> Directory`.

.. cards::

   .. card:: New employees
      :target: employees/new_employee

      Set up new employee records.

   .. card:: Onboarding
      :target: employees/onboarding

      Ensure new employees are properly trained and ready to work.

   .. card:: Working hours
      :target: employees/working_hours

      Create schedules for employees and equipment.

   .. card:: Departments
      :target: employees/departments

      Create and manage the departments employees are a part of.

   .. card:: Learning
      :target: employees/learning

      Create and manage virtual and in-person employee training.

   .. card:: Certifications
      :target: employees/certifications

      Certify employees as subject-matter experts with certifications.

   .. card:: Badges
      :target: employees/badges

      Grant badges to employees for performance and achievements.

   .. card:: Equipment
      :target: employees/equipment

      Manage and track employee equipment.

   .. card:: Skills inventory
      :target: employees/skills_inventory

      View all current employee's skills.

   .. card:: Offboarding
      :target: employees/offboarding

      Take care of employee assets and documents when collaboration ends.

   .. card:: End of collaboration
      :target: employees/archive

      Register an employee's departure and archive their employee record.

   .. card:: Training attendances
      :target: employees/training_attendances

      See what training each employee has completed.

.. _employees/settings:

Settings
========

To view and configure the available settings, navigate to :menuselection:`Employees app -->
Configuration --> Settings`.

Work organization
-----------------

- :guilabel:`Company Working Hours`: Using the drop-down menu, select the default working schedule
  of the company, such as :guilabel:`40 hours/week`. This schedule is selected by default on new
  employees. Click the :icon:`arrow_forward` :guilabel:`(Internal link)` icon to open and modify the
  working schedule.

  The available working hours listed are the same as the configured :doc:`working schedules
  <employees/working_hours>`. Working hours can be created and modified from both the **Payroll**
  and **Employees** apps.
- :guilabel:`Company Timezone`: Select the timezone of the company. Employees created from the
  employee form get the timezone of the user who creates them. The company timezone is used for the
  employees created without a timezone, for example by import, unless they are linked to a user who
  has a timezone.
- :guilabel:`Default Tracking`: Tick this checkbox if the employees' payslips are computed from
  their attendance records by default. This sets the default value of the :ref:`Attendance Based
  <employees/schedule>` checkbox of new employees. This setting is only available if the
  **Attendances** and **Payroll** apps are installed.

Employees
---------

- :guilabel:`Presence Display`: Select how the employee's availability status is calculated.

  - :guilabel:`Based on attendances`: Employees are marked available when :ref:`checked into
    <attendances/check-in>` the **Attendances** app.
  - :guilabel:`Based on user status in system`: Employees are marked available when they :doc:`log
    in to Odoo <attendances/check_in_check_out>`.

- :guilabel:`Advanced Presence Control`: When enabled, presence status can be calculated from
  operational signals rather than check-ins or logins:

  - :guilabel:`Based on number of emails sent`: An employee is marked present if they send at least
    # emails per hour; otherwise, they are marked absent. Enter the minimum number of emails that
    must be sent in the :guilabel:`Sent Emails` field.
  - :guilabel:`Based on IP Address`: An employee is marked present only when connected from one of
    the specified corporate IP addresses. Enter the IP addresses in the :guilabel:`IP Addresses`
    field, separating each address with a comma.

- :guilabel:`Skills Management`: Enable this option to display the :ref:`resume tab
  <employees/resume>` on employee profiles. This allows for the display of :ref:`work experience
  <employees/resume>`, :ref:`skills <employees/skills>`, and :doc:`certifications
  <employees/certifications>`.

Contract
--------

Define the number of days in advance that the employee's HR responsible is notified about an
upcoming contract or work permit expiration in the respective :guilabel:`Contract Expiration Notice
Period` and :guilabel:`Work Permit Expiration Notice Period` fields.

Every day, a scheduled action checks the end date of the employees' contracts and the expiration
date of their work permits. When one of them falls within the notice period, a *To-Do* activity is
scheduled on the employee record, with the expiration date as due date. It is assigned to the
employee's :ref:`HR Responsible <employees/approvers>`, or to the current user if no HR responsible
is set.

Salary configurator
-------------------

Define how long an offer remains valid when sending a salary package to an employee. Enter the
duration, in days, in the :guilabel:`Salary Package Configurator` field.

This field only appears if the **Salary Configurator** module is installed.

.. toctree::
   :titlesonly:

   employees/new_employee
   employees/onboarding
   employees/working_hours
   employees/departments
   employees/learning
   employees/certifications
   employees/badges
   employees/equipment
   employees/skills_inventory
   employees/offboarding
   employees/archive
   employees/training_attendances
