.. _reference/hr/hr_organization:

==============================
Organization and configuration
==============================

.. py:currentmodule:: odoo.addons.hr.models

Besides employees and versions, `hr` defines the models describing the organization
(departments, job positions, work locations), the classification of employees (tags, employee
types, salary structure types), the departures, and a mixin for models linked to employees.

Unless stated otherwise, these models are readable by every internal user and managed by HR
officers (`hr.group_hr_user`); see :ref:`reference/hr/access`.

.. _reference/hr/hr_organization/department:

Departments
-----------

A department (`hr.department`) belongs to a company and may have a parent department
(`parent_id`, with `_parent_store`): `complete_name` is the full path (`R&D / Backend`) and
`master_department_id` the root of the tree. `member_ids` are the employees whose **current
version** has the department (the department is a version field), and `manager_id` is an
employee.

Setting a new manager on a department (:meth:`~hr_department.HrDepartment.write`) makes it the
manager (`parent_id`) of the department members who were managed by the previous manager
(:meth:`~hr_department.HrDepartment._update_employee_manager`); members of child departments and
members with another manager are not changed.

Besides the HR officers, the manager of a department can update it, and so can the employees
the manager reports to (directly or indirectly).

.. code-block:: python

   alice = env['hr.employee'].create({'name': 'Alice'})
   bob = env['hr.employee'].create({'name': 'Bob'})
   rd = env['hr.department'].create({'name': 'R&D'})
   backend = env['hr.department'].create({
       'name': 'Backend', 'parent_id': rd.id, 'manager_id': alice.id,
   })
   dev = env['hr.employee'].create({
       'name': 'Dev', 'department_id': backend.id, 'parent_id': alice.id,
   })
   backend.complete_name, backend.master_department_id.name  # ('R&D / Backend', 'R&D')
   rd.get_children_department_ids().mapped('name')  # ['Backend', 'R&D']

   backend.manager_id = bob
   dev.parent_id.name  # 'Bob'

`member_of_department` (on versions and public employees) is a searchable flag matching the
employees of the current user's department and its child departments.

.. _reference/hr/hr_organization/job:

Job positions
-------------

A job position (`hr.job`) is unique per name, department and company. Employees reference it in
their version (`job_id`); `job_title` is a free text computed from it and editable.
`no_of_employee` counts the employees in the position, `no_of_recruitment` is the recruitment
target and `expected_employees` their sum. The recruitment application extends the model
heavily.

.. _reference/hr/hr_organization/location:

Work locations
--------------

A work location (`hr.work.location`) is a place with a type (`location_type`: `home`, `office`
or `other`) and an address. The version holds the main work location (`work_location_id`); the
employee holds a default location for each weekday (`monday_location_id`, ...,
`sunday_location_id`), and `hr.employee.location` records an exceptional location for a given
date (one per employee and date). `work_location_name` and `work_location_type` on the employee
give today's location. A location used by employees cannot be deleted.

.. _reference/hr/hr_organization/classification:

Tags, employee types and salary structure types
-----------------------------------------------

`hr.employee.category`
   Tags of the employees (`category_ids` on the employee, not time-dependent). Names are unique.

`hr.employee.type`
   The kind of employment (*Employee*, *Student*, *Intern*, ...), referenced by the version
   (`employee_type_id`, HR administrators only). It can be restricted to a country
   (`country_id`); `code` defaults to the name and is meant to be used by localizations.

`hr.payroll.structure.type`
   Defined in `hr` although it is mostly a payroll concept: a name, a country and a default
   working schedule (`default_resource_calendar_id`). The version references it
   (`structure_type_id`, HR administrators only); by default, the first structure type of the
   company's country, or one without country. `hr_payroll` adds the salary structures and the
   payroll configuration to it (see :ref:`reference/payroll/hr_salary_rule`).

.. _reference/hr/hr_organization/departure:

Departures and departure reasons
--------------------------------

`hr.employee.departure` records the end of the collaboration of an employee: the reason
(`departure_reason_id`, required), the dismissal date (start of the departure process), the
departure date (equal to the dismissal date in `hr`, computed by
:meth:`~hr_employee_departure.HrEmployeeDeparture._compute_departure_date` so that localizations
can add a notice period), the date at which the employee is archived (`action_date`) and the date
at which the departure was applied (`apply_date`). How it ends the contract and archives the
employee is explained in :ref:`reference/hr/hr_employee/departure`.

`hr.departure.reason` lists the reasons, optionally per country. The default reasons
(*Fired*, *Resigned*, *Retired*) cannot be deleted.

.. _reference/hr/hr_organization/mixin:

The `hr.mixin` mixin
--------------------

Writing a many2many field requires read access to its comodel. Users without access to
`hr.employee` (see :ref:`reference/hr/hr_employee/public`) could therefore not set a
many2many field to employees, e.g. the cashiers of a point of sale. A model inheriting
`hr.mixin` gets read access to all employees during its own `create` and `write` (through a
private context marker checked by `hr.employee._access_domain`).

.. code-block:: python

   class PosConfig(models.Model):
       _inherit = ['hr.mixin', 'pos.config']

       cashier_employee_ids = fields.Many2many('hr.employee', ...)

.. _reference/hr/hr_organization/reference:

Reference
---------

.. automodel:: odoo.addons.hr.models.hr_department.HrDepartment()
   :main:

   .. autofield:: name
   .. autofield:: complete_name
   .. autofield:: parent_id
   .. autofield:: manager_id
   .. autofield:: member_ids
   .. autofield:: master_department_id
   .. autofield:: company_id

   .. automethod:: write
   .. automethod:: _update_employee_manager
   .. automethod:: get_children_department_ids
   .. automethod:: get_department_hierarchy

.. automodel:: odoo.addons.hr.models.hr_job.HrJob()
   :main:

   .. autofield:: name
   .. autofield:: department_id
   .. autofield:: employee_ids
   .. autofield:: no_of_employee
   .. autofield:: no_of_recruitment
   .. autofield:: expected_employees

.. automodel:: odoo.addons.hr.models.hr_work_location.HrWorkLocation()
   :main:

   .. autofield:: name
   .. autofield:: location_type
   .. autofield:: address_id

.. automodel:: odoo.addons.hr.models.hr_employee_location.HrEmployeeLocation()
   :main:

   .. autofield:: employee_id
   .. autofield:: date
   .. autofield:: work_location_id

.. automodel:: odoo.addons.hr.models.hr_employee_category.HrEmployeeCategory()
   :main:

   .. autofield:: name

.. automodel:: odoo.addons.hr.models.hr_employee_type.HrEmployeeType()
   :main:

   .. autofield:: name
   .. autofield:: code
   .. autofield:: country_id

.. automodel:: odoo.addons.hr.models.hr_payroll_structure_type.HrPayrollStructureType()
   :main:

   .. autofield:: name
   .. autofield:: country_id
   .. autofield:: default_resource_calendar_id

.. automodel:: odoo.addons.hr.models.hr_employee_departure.HrEmployeeDeparture()
   :main:

   .. autofield:: employee_id
   .. autofield:: departure_reason_id
   .. autofield:: dismissal_date
   .. autofield:: departure_date
   .. autofield:: action_date
   .. autofield:: apply_date
   .. autofield:: last_contract_date_end

   .. automethod:: create
   .. automethod:: action_register
   .. automethod:: _cron_apply_departure
   .. automethod:: _compute_departure_date
   .. automethod:: _get_departures_to_archive

.. automodel:: odoo.addons.hr.models.hr_departure_reason.HrDepartureReason()
   :main:

   .. autofield:: name
   .. autofield:: country_id

.. automodel:: odoo.addons.hr.models.hr_mixin.HrMixin()
   :main:
