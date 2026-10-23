:show-content:

.. _reference/hr:

===============
Human Resources
===============

The `hr` module (*Employees* application) defines the employees, their data over time and their
contracts, and the organization of the company (departments, job positions, work locations). It
is the base of every HR application: Time Off, Attendances, Payroll, Appraisals, Recruitment,
Expenses, Planning, ...

It relies on the :ref:`resource <reference/resource>` module for the working schedules and the
time computations.

.. _reference/hr/models:

Models overview
---------------

.. graphviz::

   digraph hr {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      employee [label="hr.employee\n(the person in a company)"];
      version [label="hr.version\n(data over time, contract)"];
      public [label="hr.employee.public\n(SQL view, public data)"];
      resource [label="resource.resource\n(calendar, timezone)"];
      user [label="res.users"];
      partner [label="res.partner\n(work contact)"];
      departure [label="hr.employee.departure"];
      department [label="hr.department"];
      job [label="hr.job"];
      employee -> version [label="version_ids\nversion_id (_inherits)"];
      public -> employee [label="employee_id\n(same id)"];
      employee -> resource [label="resource_id"];
      employee -> user [label="user_id"];
      employee -> partner [label="work_contact_id"];
      employee -> employee [label="parent_id"];
      version -> department [label="department_id"];
      version -> job [label="job_id"];
      version -> departure [label="departure_id"];
   }

:ref:`hr.employee <reference/hr/hr_employee>`
   A person working for a company. It holds the data that does not change over time and links
   to a resource (working schedule, timezone), a work contact and optionally a user.

:ref:`hr.version <reference/hr/hr_version>`
   *Employee Record*: the data of an employee that changes over time (job, department, working
   schedule, wage, private address, ...), effective from a date. The contract is carried by the
   contract dates of the versions. A version without employee is a contract template.

:ref:`hr.employee.public <reference/hr/hr_employee/public>`
   A read-only SQL view exposing the non-sensitive data of the employees to every internal user.

:ref:`hr.department, hr.job, hr.work.location, ... <reference/hr/hr_organization>`
   The organization and the configuration: departments, job positions, work locations, employee
   tags and types, salary structure types, departures and departure reasons.

:ref:`hr.leave, hr.leave.allocation <reference/hr/time_off>` (`hr_holidays`)
   Time off requests and their approval, allocations, balances and accrual plans. Time off types
   are work entry types.

:ref:`hr.attendance <reference/hr/hr_attendance>` (`hr_attendance`)
   Check-ins and check-outs of the employees, their worked and overtime hours.

.. _reference/hr/versions:

Employees and versions in short
-------------------------------

- `hr.employee` inherits `hr.version` by delegation (`_inherits`): every version field can be
  read and written on the employee, e.g. `employee.wage`.
- The version read and written is `version_id`: the **current version** (`current_version_id`,
  the latest version effective today), or the version whose id is in the context key
  `version_id`.
- Writing a version field on the employee changes that version; to change data from a date on,
  create a new version with `employee.create_version({'date_version': ..., ...})`.
- A version is in contract when `contract_date_start` is set; a contract is the set of versions
  sharing the same contract dates.
- Time computations (calendars, expected work time) follow the versions in contract.

Read :ref:`reference/hr/hr_version` before writing any code on employees.

.. _reference/hr/access:

Access rights
-------------

`hr` defines two groups: *Officer: Manage all employees* (`hr.group_hr_user`) and
*Administrator* (`hr.group_hr_manager`, implying the former).

.. list-table::
   :header-rows: 1

   * - Model
     - Internal users
     - HR officers
     - Multi-company rule
   * - `hr.employee`
     - none (they use `hr.employee.public`; settings administrators can read)
     - all
     - `company_id` in the allowed companies or empty
   * - `hr.version`
     - none
     - all
     - `company_id` in the allowed companies
   * - `hr.employee.public`
     - read
     - read
     - none
   * - `hr.department`
     - read; update for the department's manager and the employees above that manager
     - all
     - `company_id` in the allowed companies or empty
   * - `hr.job`
     - read
     - all
     - `company_id` in the allowed companies or empty
   * - `hr.employee.category`
     - read
     - all
     - none
   * - `hr.work.location`
     - read
     - read (all for administrators)
     - none
   * - `hr.employee.location`
     - all, for their own employee
     - all
     - none
   * - `hr.employee.departure`, `hr.departure.reason`, `hr.employee.type`
     - none
     - all
     - per company (departures) or per country of the allowed companies
   * - `hr.payroll.structure.type`
     - none
     - none (all for administrators)
     - per country of the allowed companies

Within `hr.employee`, many fields are restricted further with `groups` (e.g. `wage`,
`structure_type_id` and `employee_type_id` are for administrators only). The rule to follow when
adding fields is explained in :ref:`reference/hr/hr_employee/public`.

.. toctree::
   :titlesonly:

   hr/hr_version
   hr/hr_employee
   hr/hr_organization
   hr/time_off
   hr/time_off_allocation
