:nosearch:

.. _reference/resource:

========
Resource
========

The `resource` module is the time engine shared by many applications: Employees, Time Off,
Planning, Project, Manufacturing, Field Service, Appointments, etc. It answers questions such as
*"when is this person supposed to work next week?"*, *"how many working hours are there between
these two dates?"* or *"when will a 10-hour task started on Monday at 9:00 end?"*.

It does not depend on any business application: the models are generic and other modules plug
into them (e.g. `hr` makes the working schedule of an employee change over time through its
versions).

.. _reference/resource/models:

Models overview
---------------

.. graphviz::

   digraph resource {
      rankdir=LR;
      node [shape=box, style=rounded, fontname="sans-serif", fontsize=10];
      edge [fontname="sans-serif", fontsize=9];
      calendar [label="resource.calendar\n(working schedule)"];
      attendance [label="resource.calendar.attendance\n(expected work slot)"];
      leave [label="resource.calendar.leaves\n(time off, public holiday)"];
      resource [label="resource.resource\n(human or material)"];
      mixin [label="resource.mixin\n(hr.employee, mrp.workcenter, ...)"];
      calendar -> attendance [label="attendance_ids"];
      calendar -> leave [label="leave_ids"];
      leave -> resource [label="resource_id\n(empty = global)"];
      resource -> calendar [label="calendar_id"];
      mixin -> resource [label="resource_id"];
   }

:ref:`resource.calendar <reference/resource/resource_calendar>`
   A working schedule (*Working Times* in the user interface). It defines when work is
   expected through its **attendances** (e.g. Monday 8:00-12:00) and holds the **leaves** that
   interrupt it (public holidays, time off).

:ref:`resource.calendar.attendance <reference/resource/resource_calendar>`
   One expected work slot of a calendar: a weekday and hours for regular schedules, a date
   (optionally recurring) for variable ones.

:ref:`resource.calendar.leaves <reference/resource/resource_calendar>`
   A period during which work is not expected. A leave without resource is **global** (public
   holiday for every resource of the company), otherwise it only applies to that resource.

:ref:`resource.resource <reference/resource/resource_resource>`
   Something that works according to a calendar, in a timezone: a human (linked to a user or an
   employee) or a material resource (a machine, a room).

:ref:`resource.mixin <reference/resource/resource_resource>`
   An abstract model giving a business model its own `resource.resource` record, hence a
   calendar and a timezone. `hr.employee` and `mrp.workcenter` inherit from it.

.. _reference/resource/intervals:

Intervals
---------

All the computations of the module are expressed with :class:`~odoo.tools.intervals.Intervals`
(`odoo/tools/intervals.py`): an ordered list of disjoint `(start, stop, records)` triples.
`start` and `stop` are timezone-aware datetimes and `records` is the recordset that produced the
interval (an attendance, a leave, ...), called the *payload*.

The list is normalized at construction: empty intervals are dropped, overlapping intervals are
merged and their payloads are united. Adjacent intervals are merged too, unless
`keep_distinct=True` is given (overlapping intervals are still merged in that case).

Intervals support set operations, which is how work time is derived from attendances and
leaves:

- `a | b`: union, payloads are united;
- `a & b`: intersection, **only the payload of** `a` **is kept**;
- `a - b`: difference, **only the payload of** `a` **is kept**.

.. example::

   .. code-block:: python

      from odoo.tools.intervals import Intervals

      work = Intervals([(0, 10, {'work'})])
      leaves = Intervals([(2, 3, {'leave'}), (5, 6, {'leave'})])

      list(work - leaves)  # [(0, 2, {'work'}), (3, 5, {'work'}), (6, 10, {'work'})]
      list(work & leaves)  # [(2, 3, {'work'}), (5, 6, {'work'})]
      list(Intervals([(0, 2, {'a'})]) | Intervals([(1, 3, {'b'})]))  # [(0, 3, {'a', 'b'})]

      # adjacent intervals are merged, unless keep_distinct is set
      list(Intervals([(1, 3, {'a'}), (3, 5, {'b'})]))  # [(1, 5, {'a', 'b'})]
      list(Intervals([(1, 3, {'a'}), (3, 5, {'b'})], keep_distinct=True))
      # [(1, 3, {'a'}), (3, 5, {'b'})]

To get a number of hours, sum the interval durations:

.. code-block:: python

   hours = sum((stop - start).total_seconds() / 3600 for start, stop, _records in intervals)

.. _reference/resource/conventions:

Conventions
-----------

The interval methods of the module share a few conventions that are worth knowing before
calling any of them.

Timezone-aware datetimes
   The `_*_intervals_batch` methods assert that `start_dt` and `end_dt` are timezone-aware.
   Attendance hours are *local* hours: an attendance from 8:00 to 12:00 means 8:00 to 12:00 in
   the timezone of the resource. The returned intervals are expressed in that timezone too
   (except for `_unavailable_intervals_batch`, which returns UTC intervals).

   Higher-level methods (`plan_hours`, `_adjust_to_calendar`, ...) also accept naive datetimes,
   which are then considered as **UTC** (Odoo always runs with the UTC process timezone), and
   return naive UTC datetimes.

Batch computation per timezone
   Batch methods take a `resources_per_tz` dictionary `{ZoneInfo: resource.resource}`, built
   with `resources._get_resources_per_tz()`, and return a dictionary
   `{resource_id: Intervals}`.

The `False` key
   In the returned dictionary, the key `False` holds the *calendar-level* result: the
   calendar's attendances minus its **global** leaves, for no specific resource. Resource keys
   also take the leaves of that resource into account.

Leave domains
   Leave methods take an optional `domain` (a list) on `resource.calendar.leaves`. `None` means
   `[('count_as', '=', 'absence')]`: leaves counted as working time (e.g. a training) are not
   deducted. Any other value, even `[]`, replaces that default.

.. toctree::
   :titlesonly:

   resource/resource_calendar
   resource/resource_resource
