:show-content:

========
Planning
========

**Odoo Planning** allows you to plan your team's schedule and manage shifts and resources.

Handling your team's planning comes with specific requirements that may vary widely depending on
your business needs. The following concepts were introduced in Odoo Planning to meet those needs:

**Shifts** are dispatched to **resources**, which can be either :ref:`human <planning/employees>`
(employees) or :ref:`material <planning/materials>` (e.g., equipment). The resources are assigned
:ref:`roles <planning/roles>`, which allows for organization of work within the team.

Once the initial configuration is done, :ref:`planning shifts <planning/shifts>` can be done
manually or automated by using the :ref:`Auto Plan <planning/open-shifts>` feature.

An integration between the Planning and Sales apps allows the linking of sold services to roles and
shifts in Planning. Additionally, integration with :doc:`Project <project>` allows dedicating
shifts, and thus time and resources, to specific projects.

.. seealso::
   `Odoo tutorials: Planning <https://www.odoo.com/slides/planning-60>`_

.. _planning/configuration:

Configuration
=============

.. _planning/roles:

Roles
-----

To define the roles your resources perform (e.g., chef, bartender, waiter), go to
:menuselection:`Planning --> Configuration --> Roles`, then click :guilabel:`New`, and fill in the
:guilabel:`Name` (e.g., assistant, receptionist, manager). Then, choose the :guilabel:`Resources`
that will perform this role. Resources can be either :ref:`Employees <planning/employees>` or
:ref:`Materials <planning/materials>`.

.. note::
   - If the Sales app is installed in your database, the :guilabel:`Services` field appears,
     allowing you to specify which roles are needed to perform services so that the shifts are
     dispatched to the right person.
   - Roles are taken into account when using the :ref:`Auto Plan feature <planning/open-shifts>`.

Property fields and roles
~~~~~~~~~~~~~~~~~~~~~~~~~

**Property fields** allow you to add custom fields to forms across several Odoo applications.
Planning includes the possibility of adding property fields linked to roles to shifts.

To create a property field, switch to the list view from any schedule. From there, click
:guilabel:`View` on the shift that you wish to edit. If the :guilabel:`Role` field is empty, fill it
in with the desired role, then click the cog icon and select :guilabel:`Add Properties`.
:doc:`Configure <../productivity/knowledge/properties>` the new field according to your needs.

.. image:: planning/add-properties.png
   :alt: Creating a new property field in Planning.

The property field is linked to the role and is included in the shift form of all shifts performed
by this role.

.. example::
   Some of the use cases of role property fields include:

   - **Accreditation**: for roles that require a specific permit (e.g., driving license)
   - **Location**: in companies that operate in multiple locations (e.g., shops or restaurants)
   - **Language**: in a multi-lingual environment (e.g., consulting company)

.. _planning/employees:

Employees
---------

All employees can be included in the planning and assigned shifts.

To adapt the employee's planning settings, go to :menuselection:`Planning --> Configuration -->
Employees`, and choose the employee for whom you want to edit the settings. Then, go to the
:guilabel:`Work Information` tab.

.. image:: planning/employee-tab.png
   :alt: Employee profile and the work information tab.

.. tip::
   You can do the same from the **Employees** app, which is installed by default along with
   Planning.

Two sections of the employee's :guilabel:`Work Information` tab have an impact on Planning:
:guilabel:`Schedule` (namely, the :guilabel:`Working Hours` field) and :guilabel:`Planning`.

Working hours
~~~~~~~~~~~~~

The :guilabel:`Working Hours` are taken into account when the :guilabel:`Allocated Time` and its
percentage is calculated for :ref:`shifts <planning/templates>`. If the :guilabel:`Working Hours`
field is left blank, the employee is considered to be working flexible hours.

To create individual :guilabel:`Working Hours`, for example, for employees working part-time, click
:guilabel:`Search more...`, then :guilabel:`New`.

.. note::
   The :guilabel:`Working Hours` and the :guilabel:`Allocated Time` in Planning can impact
   **Payroll**, if the employee's contract is configured to generate work entries based on shifts.

.. seealso::
   :ref:`Payroll documentation on working schedules <payroll/working-times>`

Planning roles
~~~~~~~~~~~~~~

Once an employee has one or more :guilabel:`Roles`:

- When creating a shift for this employee, only the shift templates from the roles chosen in this
  field are displayed.
- When a schedule is published, the employee is only notified of open shifts for the roles that are
  assigned to them.
- When auto-assigning open shifts or planning sales orders, the employee is only assigned shifts for
  the roles assigned to them.

Additionally, when a :guilabel:`Default role` is defined:

- When creating a shift for the employee, the default role is automatically selected.
- This role also has precedence over the other roles of the employee when auto-assigning open shifts
  or planning sales orders.

.. note::
   If the Planning roles fields are left empty, there are no restrictions in the shift templates and
   open shifts shared with the employee. However, it’s not possible to use the **Auto Plan** feature
   for employee with no roles.

.. _planning/materials:

Materials
---------

**Materials** are resources that can be assigned shifts and working hours but are not employees.
For example, a construction company could use materials to create shifts for shared machines
(e.g., cranes, forklifts).

Similarly to employees, materials can be assigned roles and working time.

.. _planning/templates:

Shift templates
---------------

To create a shift template, click :guilabel:`New` on any schedule, then fill in the
:ref:`details of the shift <planning/create-shift>`. In order for the shift to be saved as a
template, tick :guilabel:`Save as Template`.

.. image:: planning/save-template.png
   :alt: Shift form with the option `save template` ticked.

Alternatively, you can go to :menuselection:`Planning --> Configuration --> Shift Templates`, then
click :guilabel:`New`. Fill in the :guilabel:`Start Hour` and :guilabel:`Shift Duration`. The
shift’s :guilabel:`End Time` is then calculated based on the :guilabel:`Working Hours`, taking into
account working time as well as breaks.

.. example::
   The employee's working hours are Monday to Friday, 8 am to 5 pm, with a break between 12 and 1
   pm.

   - Creating a shift template with a start hour of 9 am and a duration of 8 hours will result in
     the end hour being 5 pm, based on the working hours and the 1-hour break.
   - Creating a shift template with a start hour of 10 am and a duration of 10 hours will result in
     the end hour of 10 am the following day, as the company is closed at 5 pm according to the
     working hours.

Additionally, for each shift template, you can also configure:

- :guilabel:`Role`: to link the shift to this specific role.
- :guilabel:`Project`: to keep track of shifts that are dedicated to work on a project.

.. _planning/shifts:

Planning shifts
===============

On opening the Planning app, the users see their own schedule. Users with admin roles can also see
:guilabel:`Schedule by Resource`, :guilabel:`Role`, :guilabel:`Project`, or :guilabel:`Sales Order`,
as well as reporting and configuration menus.

.. note::
   The schedule is displayed in the Gantt view, which allows you to edit (with a drag and drop),
   resize, split, and duplicate shifts without having to open them.

.. image:: planning/schedule.png
   :alt: A schedule displaying various visual elements.

The following visual elements are used on the shifts in the schedules:

- **Full color**: shifts that are planned and published.
- **Diagonal stripes**: shifts that are planned but have yet to be published.
- **Grayed-out background**: employees that are on time off.
- **Progress bar**: currently ongoing shifts with timesheets linked to them.
- **Grayed-out shift**: when copying shifts, the copied shifts are shown in full color, whereas
  previously existing shifts are temporarily greyed out. The color changes back to full color or
  diagonal stripes on the next refresh of the page or by removing the filter.

.. _planning/create-shift:

Create a shift
--------------

To create a shift, go to any schedule, then click :guilabel:`New`. In the pop-up window that opens,
fill in the following details:

- **Templates**: If there is one or more templates existing in your database, they are
  displayed in the upper section of the pop-up window. Once selected, a template prefills the
  shift form accordingly.
- :guilabel:`Resource`: Resources can be both employees or materials. If this field is left empty,
  the shift is considered an :ref:`open shift <planning/open-shifts>`.
- :guilabel:`Role`: Select the role that the resource assigned will be performing. This field is
  used when :ref:`auto-planning <planning/open-shifts>` shifts. Once you select a role, the shift
  templates associated with it are displayed in the upper section of the pop-up window.
- :guilabel:`Project`: If the Project app is installed in your database, this field allows you to
  link the project to the shift is available, allowing you to plan and track shifts dedicated to
  work on the selected project.
- :guilabel:`Sales Order Item`: If the Sales app is installed in your database, this field allows
  you to link a sales order to the shift.
- :guilabel:`Repeat`: Tick the checkbox and configure the :guilabel:`Repeat Every` field according
  to your needs. The following rules apply to recurring shifts:

  - All fields (e.g., :guilabel:`Resource`, :guilabel:`Role`, :guilabel:`Project`) are copied from
    the original shift except for the date, which is adjusted according to the
    :guilabel:`Repeat Every` field.
  - Recurrences are planned but not published.
  - By default, planned shifts are created six months in advance, after which they are created
    gradually. To change the time frame, :ref:`activate the Developer mode <developer-mode>`, then
    go to :menuselection:`Planning --> Configuration --> Settings` and edit the
    :guilabel:`Recurring Shifts`.

- :guilabel:`Save as Template`: When this option is ticked, a shift template is created with the
  same :guilabel:`Start and End hours`, :guilabel:`Allocated time`, :guilabel:`Role`,
  and :guilabel:`Project`.
- :guilabel:`Additional note sent to the employee`: Click on the field to add a note.
- :guilabel:`Date`: Choose the date and time of your shift. This is the only mandatory field when
  creating a shift.
- :guilabel:`Allocated time`: Is calculated based on the date and the employee’s :guilabel:`Working
  Schedule`. See more in :ref:`Shift Templates <planning/templates>`.

Click :guilabel:`Publish & Save` to confirm the shift and send the assigned employee their schedule
by email.

.. note::
   The draft is visible on the admin planning view and can be identified by diagonal lines. The
   employee is only notified of the shift once it's published.

   Two kinds of notifications are sent to the employees depending on their account configuration:

   - Employees without user accounts are redirected to a dedicated **Planning portal**.
   - Employees with a user account are redirected to the :guilabel:`My Planning` view in the
     backend view of Odoo.

.. _planning/open-shifts:

Open shifts and auto planning
-----------------------------

The :guilabel:`Auto Plan` button allows you to assign **Open shifts** (shifts with no resource
assigned) and create and assign shifts linked to sales orders or project.

The following features have an impact on auto planning:

- **Roles**: Open shifts are only assigned to resources (employees or materials) that have the
  corresponding role assigned. It is not possible to use the :guilabel:`Auto Plan` feature for
  employee with no roles.
- **Default roles**: The default role assigned to a resource is given priority over the other roles
  they have assigned to them.
- **Conflicts**: Employees or materials cannot be assigned multiple shifts at the same time.
- **Time off**: The employees’ time off is taken into account, as well as public holidays.
- **Company working hours**: Are taken into account when assigning shifts to employees or materials.
- **Contracts**: Employees without an active contract cannot be assigned shifts.

Click :guilabel:`Publish` to confirm the schedule and notify the employees of their planning.

.. _planning/switching-unassignment:

Switching shifts and unassignment
---------------------------------

Two features are available to allow employees to make changes to their schedule:
**switching shifts** and **unassignment**.

.. note::
   These features are mutually exclusive. Switching shifts is possible by default and cannot be
   disabled. However, once the **Allow unassignment** feature is enabled, it replaces the option to
   switch shifts.

Switching shifts
~~~~~~~~~~~~~~~~

Once shifts are planned and published, employees receive an email notification. If an employee
wishes to switch a shift, they can click the unwanted shift and click :guilabel:`Ask to switch`.

The shift remains assigned to the original employee, but in the schedule, a notification
informing that the assigned employee would like to switch shifts is visible on the shift.

The shift is then displayed to other employees who share the same role, and if they wish to assign
it to themselves, they can click the :guilabel:`I take it` button.

.. note::
   The following rules apply:

   - Only the shifts matching the employee's roles are displayed as available to them.
   - Switching shifts is only available for shifts that are in the future.

Unassignment
~~~~~~~~~~~~

To allow employees to unassign themselves from shifts, go to
:menuselection:`Planning --> Configuration --> Settings`, then tick the checkbox
:guilabel:`Allow Unassignment`. Then, specify the maximum number of days that the employees can
unassign themselves before the shift.

Once shifts are planned and published, employees receive an email notification. If shift
unassignment is allowed, the employees can click the :guilabel:`I am unavailable` button, and the
shift reverts to an open shift.

.. note::
   The following rules apply:

   - Only the shifts matching the employee's roles are displayed in their schedule.
   - Switching shifts is only available for shifts that are in the future.
