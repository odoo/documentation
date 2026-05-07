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

.. cards::

   .. card:: New employees
      :target: employees/new_employee

      Set up new employee records.

   .. card:: Onboarding
      :target: employees/onboarding

      Ensure new employees are properly trained and ready to work.

   .. card:: Departments
      :target: employees/departments

      Create and manage the departments employees are a part of.

   .. card:: Learning
      :target: employees/learning

      Create and manage virtual and in-person employee training.

   .. card:: Contracts
      :target: payroll/contracts

      Manage and create employee contracts.

   .. card:: Certifications
      :target: employees/certifications

      Certify employees as subject-matter experts with certifications.

   .. card:: Badges
      :target: employees/badges

      Grant badges to employees for performance and achievements.

   .. card:: Equipment
      :target: employees/equipment

      Manage and track employee equipment.

   .. card:: Offboarding
      :target: employees/offboarding

      Take care of employee records when collaboration ends.

   .. card:: Employee retention report
      :target: employees/retention_report

      Gain insight into a company's retention rate.

.. _employees/settings:

Settings
========

To view and configure the available settings, navigate to :menuselection:`Employees app -->
Configuration --> Settings`.

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

- :guilabel:`Skills Management`: Enable this option to display the :ref:`resumé tab
  <employees/resume>` on employee profiles. This allows for the display of :ref:`work experience
  <employees/resume>`, :ref:`skills <employees/skills>`, and :doc:`certifications
  <employees/certifications>`.

Work organization
-----------------

Using the drop-down menu, select the default :guilabel:`Company Working Hours`. The default options
are a :guilabel:`Standard 40 hours/week` or an :guilabel:`Appointment Resource Default Calendar`.

The available working hours listed are the same as the configured :doc:`working schedules
<payroll/working_schedules>` in the **Payroll** app. Working hours can be created and modified from
both the **Payroll** and **Employees** apps.

Contract
--------

Define the number of days in advance that a manager is notified about an upcoming contract or work
permit expiration in the respective :guilabel:`Contract Expiration Notice Period` and
:guilabel:`Work Permit Expiration Notice Period` fields.

Salary configurator
-------------------

Define how long an offer remains valid when extending a job offer or changing a salary. Enter the
duration, in days, in the :guilabel:`Salary Package Configurator` field.

This field only appears if the **Salary Configurator** module is installed.

Extra time off allocation
-------------------------

During salary package negotiations, enable the checkbox in this section if additional time off
requests are allowed. When enabled, select the :doc:`Time Off Type <time_off/time_off_types>`
created for the additional days using the drop-down menu.

The default available options are :guilabel:`Paid Time Off`, :guilabel:`Compensatory Days`, and
:guilabel:`Extra Time Off`. If other time off types are configured in the **Time Off** app, they are
available in the drop-down menu.

This field only appears if the **Salary Configurator** module is installed.


.. toctree::
   :titlesonly:

   employees/new_employee
   employees/onboarding
   employees/departments
   employees/learning
   employees/certifications
   employees/badges
   employees/equipment
   employees/offboarding
   employees/retention_report
