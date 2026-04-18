================
Attendees report
================

The Odoo **Events** application creates custom reports based on event-related data and analytics.

The following documentation focuses on reporting options related to event *Attendees*.

.. _events/attendees_report:

Attendees reporting page
========================

To access the *Attendees* reporting page, navigate to :menuselection:`Events app --> Reporting -->
Attendees`.

Reporting views
---------------

Once opened, the :guilabel:`Attendees` page offers five different view options.

.. tabs::

    .. tab:: Graph

       By default, the :guilabel:`Attendees` page opens in the :icon:`fa-area-chart`
       :guilabel:`(Graph)` view, allowing users to visually compare attendance data across events.

       The graph view provides three available charts to display different insights about event
       attendance:

       - :icon:`fa-bar-chart` :guilabel:`(Bar)`/:icon:`fa-line-chart` :guilabel:`(Line)`: Compare
         attendance trends across events.
       - :icon:`fa-pie-chart` :guilabel:`(Pie)`: View attendance distribution across events.

       .. image:: attendees_report/attendees-graph.png
          :alt: Graph view in the Attendees reporting graph view in Odoo Events.

       For more information about customizing the graph view, see the :doc:`Reporting
       <../../../essentials/reporting>` documentation.

    .. tab:: Pivot

       The :icon:`oi-view-pivot` :guilabel:`(pivot)` view displays a pivot table, allowing users to
       break down subsets of attendee-related data into specific categories or groups for more
       precise analysis.

       For example, using the :ref:`Group By <events/attendees_report/groups>` options, users can
       organize an event's total registration count (subset) by its count for each ticket type
       (group) to draw more granular insights about each ticket type's popularity across events.

       .. image:: attendees_report/attendees-pivot.png
           :alt: Pivot view in the Attendees reporting graph view in Odoo Events.

       For more information about using the pivot view, see the :doc:`Reporting
       <../../../essentials/reporting>` documentation.

    .. tab:: Kanban

       The :icon:`oi-view-kanban` :guilabel:`(Kanban)` view displays a Kanban, providing users with
       an at-a-glance overview of all registered attendees across events along with their ticket
       type and registration status.

       By applying specific :ref:`Group By <events/attendees_report/groups>` options, users can
       group all attendees by specific criteria (e.g., registration status or ticket type) into
       separate, vertical stages to get a quick overview of their attendees' records.

       .. note::
          In *Attendees reporting*, only attendees **without** a specified ticket type can be
          dragged between stages.

       .. image:: attendees_report/attendees-kanban.png
           :alt: Kanban view in the Attendees reporting graph view in Odoo Events.

       For more information about using the Kanban view, see the :ref:`Kanban
       <studio/views/multiple-records/kanban>` documentation.

    .. tab:: List

       The :icon:`oi-view-list` :guilabel:`(list)` view displays a list of all registered attendees
       along with additional information such as contact information and registration status.

       The list view provides users the option to view detailed records of their attendees in a
       centralized view. By applying the :ref:`Group By <events/attendees_report/groups>` options,
       users can then collapse long lists of records into smaller groups by specific criteria such
       as event or ticket type.

       .. image:: attendees_report/attendees-list.png
          :alt: List view in the Attendees reporting graph view in Odoo Events.

       For more information about using the List view, see the :ref:`List
       <studio/views/multiple-records/list>` documentation.

    .. tab:: Cohort

       The :icon:`oi-view-cohort` :guilabel:`(cohort)` view displays the percentage of event
       registrations per time interval over a certain time period.

       The cohort view allows users to view broader registration patterns over a customizable time
       frame. For example, users can track the change in percentage of registrations over days,
       weeks, months, or years to identify trends at specific moments in time.

       .. image:: attendees_report/attendees-cohort.png
          :alt: Cohort view in the Attendees reporting graph view in Odoo Events.

       For more information about using the Cohort view, see the :ref:`Cohort
       <studio/views/timeline/cohort>` documentation.

The option to select a :ref:`measure <reporting/choosing-measures>` from the :guilabel:`Measures`
drop-down menu is available only on the Kanban, pivot, and cohort views. Additionally, only the
:guilabel:`Count` option is available as a measure for the :guilabel:`Attendees` reporting page.

.. _events/attendees_report/filters:

Filter options
--------------

The :guilabel:`Filters` column in the search bar's drop-down menu sorts attendee data by specific
criteria in any given view. Multiple filters can be selected at once.

The :guilabel:`Filters` column has the following options:

- :guilabel:`Ongoing Events`: Filter by ongoing events.
- :guilabel:`Taken`: Filter by events with sold tickets.
- :guilabel:`Unconfirmed`: Filter by unconfirmed attendees.
- :guilabel:`Registered`: Filter by registered attendees.
- :guilabel:`Registration Date`: Filter by a specific registration date. Click the
  :icon:`fa-caret-down` :guilabel:`(down)` arrow to reveal a list of month, quarter, and year
  options.
- :guilabel:`Event Start Date`: Filter by a specific event start date. Click the
  :icon:`fa-caret-down` :guilabel:`(down)` arrow to reveal a list of month, quarter, and year
  options.
- :guilabel:`Attended Date`: Filter by a specific attendance date. Click the :icon:`fa-caret-down`
  :guilabel:`(down)` arrow to reveal a list of month, quarter, and year options.
- :guilabel:`Last 30 days`: Filter by the last 30 days of attendee data.
- :guilabel:`Archived`: Filter by archived attendee records.
- :guilabel:`Add Custom Filter`: Create a :ref:`custom filter <search/custom-filters>` to analyze
  event-related attendee data.

.. _events/attendees_report/groups:

Group By options
----------------

The :guilabel:`Group By` column in the search bar's drop-down menu sorts attendee data by specific
criteria in any given view. Multiple grouping criteria can be selected at once.

.. note::
   Grouping options are **not** available in the Cohort view.

The :guilabel:`Group By` column has the following options:

- :guilabel:`Partner`: Group data based on the partner of attendees' registered events.
- :guilabel:`Event`: Group data based on attendees' registered events.
- :guilabel:`Ticket Type`: Group data based on the type of event ticket purchased by attendees.
- :guilabel:`Status`: Group data based on attendees' registration status.
- :guilabel:`Registration Date`: Group data based on a specific registration date. Click the
  :icon:`fa-caret-down` :guilabel:`(down)` arrow to reveal a list of day, week, month, quarter, and
  year options.
- :guilabel:`Campaign`: Group data based on marketing :ref:`campaigns
  <marketing_automation/campaigns>`.
- :guilabel:`Add Custom Group`: Create a :ref:`custom group <search/group>` to organize data by
  additional fields. Click the :icon:`fa-caret-down` :guilabel:`(down)` arrow to reveal a drop-down
  of grouping options. Multiple selections can be made.

.. example::
   A local production company recently organized a music festival and wants to measure the
   distribution of ticket registrations across concerts. Using the event attendance report, the
   production company created a graph showing the count of ticket registrations in the last 30 days,
   grouped by individual events and attendees' ticket types.

   .. image:: attendees_report/attendees-sample-report.png
      :alt: A sample report in Attendees reporting in Odoo Events.

   To create this report, use the default graph view, with the :icon:`fa-bar-chart`
   :guilabel:`(Bar)` and :icon:`fa-database` :guilabel:`(Stacked)` options selected. Remove the
   default filters in the search bar.

   Then, click the :icon:`fa-caret-down` :guilabel:`(down)` arrow to the right of the search bar to
   open the drop-down menu of filter and grouping options.

   Select the :guilabel:`Last 30 days` filter from the :guilabel:`Filters` column to filter the
   data.

   Next, select the :guilabel:`Event` and :guilabel:`Ticket Type` options from the :guilabel:`Group
   By` column **in that sequential order**. This groups the data by event, then by ticket type.

   .. important::
      The order in which the options are selected in the :guilabel:`Group By` columns directly
      affects how the data is grouped and displayed in the report.

.. seealso::
    :doc:`revenues_report`
