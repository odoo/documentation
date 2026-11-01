=============
Accrual plans
=============

Some time off is granted to employees up front, while other kinds of time off are earned through an
*accrual plan*, meaning that for every specified amount of time an employee works (hour, day, week,
etc), they earn or *accrue* a specified amount of time off.

.. example::
   If an employee accrues a vacation day for every week they work, they would earn 0.2 vacation days
   for each hour they worked. At the end of a 40-hour work week, they would earn one full vacation
   day (8 hours).

Create an accrual plan
======================

To create a new accrual plan, navigate to :menuselection:`Time Off app --> Configuration --> Accrual
Plans`. Then, click the :guilabel:`New` button, which reveals a blank *Accrual Plans* form.

First, enter a :guilabel:`Title` for the accrual plan, then configure the following fields:

- :guilabel:`Time Type`: Select the :doc:`time type <time_off_types>` accrued with this plan. Only
  the time types that require an allocation and are available for time off can be selected. When
  set, the accrual plan can only be used in allocations of this time type.
- :guilabel:`Company`: This field only appears in a multi-company database. Using the drop-down
  menu, select the company the accrual plan applies to. If left blank, the accrual plan is available
  for all companies.

Next, configure the following sections of the form:

Configuration section
---------------------

Configure the following fields in the *Configuration* section of the form:

- :guilabel:`When the time is accrued?`: Select when the employee receives the accrued time off,
  either :guilabel:`At the start of the accrual period` or :guilabel:`At the end of the accrual
  period`.
- :guilabel:`It is based on worked time?`: This question only appears if the time is accrued at the
  end of the accrual period. Select how time off accrual is determined. The options are:

  - :guilabel:`Yes, consider the worked hours, excluding any time off taken during that period`:
    Time off of time types considered as an *absence* does **not** contribute to the accrual,
    unless the :guilabel:`Eligible for Accrual Rate` option is ticked on the :ref:`time type
    <time_off/time-off-config>`.
  - :guilabel:`No, always consider the entire accrual period (whole calendar days)`: Every day is
    calculated when determining worked time, with no exclusions.

  .. example::
     An employee is granted time off from an accrual plan configured to accrue one day of vacation
     for every five days worked. The accrual plan is based on the employee's worked time (the
     :guilabel:`Yes, consider the worked hours, excluding any time off taken during that period`
     option is selected), which means they **only** earn vacation time for the five weekdays they
     work, *not* the entire seven-day week period.

     The employee works a standard 40-hour week. According to the accrual plan, they should earn
     four vacation days per month.

     The employee takes five days off using a :doc:`time type <time_off_types>` with the
     :guilabel:`Considered as` field set to :guilabel:`Absence`. Because the plan grants vacation
     only for worked time, those five days do not count toward accrual.

     As a result, the employee accrues only three vacation days that month instead of four.

- :guilabel:`What should happen to the unused accrued time?`: Select what happens to the unused
  accrued time. The options are either :guilabel:`They should be carried over` or :guilabel:`They
  should be lost (reset)`.
- :guilabel:`When should unused accrued time be reset/carried over?`: Select when the unused
  accrued time is reset or carried over. The options are:

  - :guilabel:`At the start of the year`: Select this if the accrual rolls over on January 1 of the
    upcoming year.
  - :guilabel:`At the allocation date`: Select this if the accrual rolls over as soon as time is
    allocated to the employee.
  - :guilabel:`Custom date`: Select this option if neither of the other two options is applicable.
    Once selected, set the date using the two drop-down menus, one for the day and one for the
    month.

- :guilabel:`Switch employees to the new accrual level:` This field only appears once the plan has
  more than one milestone. Select when the employee moves to the next milestone. The options are
  either :guilabel:`Immediately` or :guilabel:`After this accrual's period`.

.. image:: accrual_plans/accrual-plan-form.png
   :alt: An accrual plan form filled out for a Seniority Plan, with two milestones.

Milestones
----------

Milestones must be created for employees to accrue time off from the accrual plan. Each milestone
determines when and how much time off the employee earns.

To create the first milestone, click the :guilabel:`Create a milestone` button, or to create
*additional* milestones, click the :guilabel:`Add a milestone` button. Both options open a pop-up
window. Fill out the following sections on the form.

.. tip::
   Once milestones have been configured, click on a milestone to make edits in the *Milestone
   Edition* pop-up window, click the :icon:`fa-trash-o` :guilabel:`(Delete)` icon to delete it, or
   click :guilabel:`Add a milestone` to create additional milestones.

Accrual level options section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This section determines how much the employee earns, and when.

- :guilabel:`Set the employee accrual frequency`: Configure how many hours or days the employee
  earns in a set period of time.

  The first two fields set *how much* time off the employee earns, while the remaining fields
  determine *how often* the employee earns the time off.

  Enter the numerical amount the employee earns in the first field. The numerical format is
  `X.XXXX`, so that partial days or hours can be earned. Next, set the middle field to either
  :guilabel:`Day(s)` or :guilabel:`Hour(s)`.

  In the last field, use the drop-down menu to set the frequency the employee earns the time
  configured in the first two fields. Some options require additional fields to be configured. The
  default options are:

  - :guilabel:`Hourly`: The employee earns the set amount of time for every hour worked. There are
    no additional fields needed.
  - :guilabel:`Daily`: The employee earns the set amount of time for every day worked. There are no
    additional fields needed.
  - :guilabel:`Weekly`: The employee earns the set amount of time for every week worked. When
    selected, use the drop-down menu to select the specific day of the week in the field that
    appears.
  - :guilabel:`Twice a month`: The employee earns the set amount of time, twice a month, on two
    specific days. When selected, use the drop-down menus to select the specific days of the month
    in the two fields that appear.
  - :guilabel:`Monthly`: The employee earns the set amount of time for every month worked. When
    selected, use the drop-down menu to select the specific day of the month in the field that
    appears.
  - :guilabel:`Twice a year`: The employee earns the set amount of time, twice a year, on two
    specific dates. When selected, use the drop-down menus to select the specific day and month, in
    the four fields that appear.
  - :guilabel:`Yearly`: The employee earns the set amount of time, once a year, on a specific day.
    When selected, use the drop-down menus to select the specific day and month in the two fields
    that appear.
  - :guilabel:`Per Hour Worked`: The employee earns the set amount of time for every hour recorded
    in the **Attendances** app. This option is only available if the **Attendances** app is
    installed, and if the time is accrued at the end of the accrual period.

- :guilabel:`Gain for the year`: This read-only field displays an estimate of the time off earned
  in a year with this milestone. If the plan is based on worked time, it is labeled
  :guilabel:`Maximum gain for the year`.

- :guilabel:`This milestone will be reached`: This selection determines *when* the employee starts
  to earn the time off. The options are:

  - :guilabel:`At allocation creation`: The time off starts accruing immediately.
  - :guilabel:`After (#) (Time) from the start of the allocation`: Use the first two fields to set
    the time period the employee achieves the milestone. Enter a number in the first field, then set
    the middle field to either :guilabel:`Days`, :guilabel:`Months`, or :guilabel:`Years`.

Carry over options section
~~~~~~~~~~~~~~~~~~~~~~~~~~

This section determines what happens to any unused time off at the end of the year. Configure the
following field:

This section only appears if the unused accrued time is carried over on the accrual plan.

- :guilabel:`After a year, unused accrued time will be`: Select :guilabel:`Lost` if any unused time off
  is lost, and does **not** carry over to the following year. Select :guilabel:`Carried over` if
  time off is rolled over to the next year. When this option is selected, two additional sections
  appear:

  - :guilabel:`How much time can be carried over`: Select :guilabel:`Unlimited` if *all* time off
    can be carried over. Select :guilabel:`Up to (#) Day(s)` if there *is* a limit. Enter the total
    number of days the employee can carry over from one year to the next in the blank field.
  - :guilabel:`Define a carry over validity?`: If there is an expiration date for the carried over
    time off, enable this option. When enabled, the following appears: :guilabel:`The days carried
    over will be effective for (#) (Days or Months)`. Enter a number in the first field, then set
    the second field to either :guilabel:`Days` or :guilabel:`Months`.

Cap options section
~~~~~~~~~~~~~~~~~~~

This section sets limits on total time off earned.

- :guilabel:`Define a yearly cap?`: Enable this option to set a limit on the total amount of time
  that can be accrued every calendar year. When enabled, the following line appears:
  :guilabel:`Accrual will stop until next carry-over date if accrued time's reach (#) Day(s).` Enter
  the maximum number of days the employee can earn in the number field.
- :guilabel:`Define a balance cap?`: If there is a maximum amount of time the employee can accrue
  with this plan, enable this option. When enabled, the following line appears: :guilabel:`The plan
  will be on hold if the balance reach (#) Day(s) of available time.` Enter the maximum number of
  days the employee can have at any given time in the number field. Any time off beyond this
  parameter is lost.

When completed, click :guilabel:`Save` to save the milestone, or :guilabel:`Save & New` to save the
milestone and create a new one.

.. image:: accrual_plans/accrual-levels.png
   :alt: A milestone granting 1.25 days per month, with a carry over limit and a balance cap.

.. example::
   The *Seniority Plan* shown above is configured so the employee earns 1.25 days per month (15 days
   a year) when the allocation starts, and 1.5 days per month (18 days a year) after three years.
   The time is accrued at the end of each month.

   At the start of each year, up to five unused days are carried over during the first three years,
   and up to ten days afterwards; the rest is lost. The accrual is put on hold whenever the
   employee's balance reaches 30 days during the first three years, or 40 days afterwards.
