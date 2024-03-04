=====
Views
=====

Views are the interface that allows displaying the data contained in a model. One model can have
several views, which are simply different ways to show the same data. In Studio, views are organized
into four categories: :ref:`general <studio/views/general>`, :ref:`multiple records
<studio/views/multiple-records>`, :ref:`timeline <studio/views/timeline>`, and :ref:`reporting
<studio/views/reporting>`.

.. tip::
   To change the default view of a model, go to :menuselection:`Studio --> Views --> Dropdown menu
   (⋮) --> Set as Default`.

.. note::
   You can modify views by using the built-in XML editor. To do so, activate :ref:`Developer mode
   <developer-mode>`, go to the view you want to edit, select the :guilabel:`View` tab and then
   click on :guilabel:`</> XML`.

   .. important::
      If you are editing a view using the XML editor, avoid making changes directly to standard
      views and inherited views, as those would be reset and would not be kept in case of an update
      or module upgrade. Always make sure you select the right Studio inherited views. Indeed, when
      you modify a view in Studio by drag-and-dropping a new field, a specific Studio inherited view
      and its XPath, the latter which defines which part of the view is modified, are automatically
      generated.

.. _studio/views/general:

General views
=============

.. note::
   The settings described below are found under the view's :guilabel:`View` tab unless specified
   otherwise.

.. _studio/views/general/form:

Form
----

The :guilabel:`Form` view is used when creating and editing records, such as contacts, sales orders,
products, etc.

- To structure a form, drag-and-drop the :guilabel:`Tabs and Columns` element found under the
  :guilabel:`+ Add` tab.
- To prevent users from creating, editing, or deleting records, untick :guilabel:`Can Create`,
  :guilabel:`Can Edit`, or :guilabel:`Can Delete`.

.. example::

   .. image:: views/form-sales-order.png
      :align: center
      :alt: Sales order model's Form view

.. _studio/views/general/activity:

Activity
--------

The :guilabel:`Activity` view is used to schedule and have an overview of activities (emails, calls,
etc.) linked to records.

.. note::
   This view can only be modified within Studio by editing the XML code.

.. example::

   .. image:: views/activity-lead-opportunity.png
      :align: center
      :alt: Lead/Opportunity model's Activity view

.. _studio/views/general/search:

Search
------

The :guilabel:`Search` view is added on top of other views to filter, group, and search records.

- To add custom :guilabel:`Filters` and structure them using :guilabel:`Separators`, go to the
  :guilabel:`+ Add` tab and drag and drop them under :guilabel:`Filters`.
- To add an existing field under the search dropdown menu, go to the :guilabel:`+ Add` tab and
  drag-and-drop it under :guilabel:`Autocompletion Fields`.

.. example::

   .. image:: views/search-project-kanban.png
      :align: center
      :alt: Project model's Search view on the Kanban view

.. _studio/views/multiple-records:

Multiple records views
======================

.. note::
   The settings described below are found under the view's :guilabel:`View` tab unless specified
   otherwise.

.. _studio/views/multiple-records/kanban:

Kanban
------

The :guilabel:`Kanban` view is often used to support business flows by moving records across stages
or as an alternative way to display records inside *cards*.

.. note::
   If the :guilabel:`Kanban` view exists, it is used by default to display data on mobile devices
   instead of the :ref:`List view <studio/views/multiple-records/list>`.

- To prevent users from creating new records, untick :guilabel:`Can Create`.
- To create records directly within the view, in a minimalistic form, enable :guilabel:`Quick
  Create`.
- To change the way records are grouped by default, select a new group under :guilabel:`Default
  Group by`.

.. example::

   .. image:: views/kanban-project.png
      :align: center
      :alt: Project model's Kanban view

.. _studio/views/multiple-records/list:

List
----

The :guilabel:`List` view is used to overview many records at once, look for records, and edit
simple records.

- To prevent users from creating, editing, or deleting records, untick :guilabel:`Can Create`,
  :guilabel:`Can Edit`, or :guilabel:`Can Delete`.
- To create and edit records directly within the view, select either :guilabel:`New record on top`
  or :guilabel:`New record at the bottom` under :guilabel:`Editable`.

  .. note::
     This prevents users from opening records in :ref:`Form view <studio/views/general/form>` from the
     :guilabel:`List` view.

- To edit several records at once, tick :guilabel:`Enable Mass Editing`.
- To change the way records are sorted by default, select a field under :guilabel:`Sort By`.

.. tip::
   To add a drag handle icon to reorder records manually, add an :ref:`Integer field
   <studio/fields/simple-fields/integer>` with the :guilabel:`Handle` widget.

   .. image:: views/list-drag-handle.png
      :align: center
      :alt: Drag handle icon enabling to sort records manually in List view

.. example::

   .. image:: views/list-sales-order.png
      :align: center
      :alt: Sales order model's List view

.. _studio/views/multiple-records/map:

Map
---

The :guilabel:`Map` view is used to display records on a map. For example, it is used in the Field
Service app to plan an itinerary between different tasks.

.. note::
   A :ref:`Many2One field <studio/fields/relational-fields/many2one>` linked to the *Contact* model
   is required to activate the view, as the contact address is used to position records on the map.

- To select which kind of contact should be used on the map, select it under :guilabel:`Contact
  Field`.
- To hide the name or the address of the record, tick :guilabel:`Hide name` or :guilabel:`Hide
  Address`.
- To add information from other fields, select them under :guilabel:`Additional Fields`.
- To have a route suggested between the different records, tick :guilabel:`Enable Routing` and
  select which field should be used to sort records for the routing.

.. example::

   .. image:: views/map-task.png
      :align: center
      :alt: Task model's Map view

.. _studio/views/timeline:

Timeline views
==============

.. note::
   - When you first activate one of the timeline views, you need to select which :ref:`Date
     <studio/fields/simple-fields/date>` or :ref:`Date & Time
     <studio/fields/simple-fields/date-time>` fields on your model should be used to define when the
     records start and stop in order to display them on the view. You can modify the
     :guilabel:`Start Date Field` and :guilabel:`Stop Date Field` after activating the view.
   - The settings described below are found under the view's :guilabel:`View` tab unless specified
     otherwise.

.. _studio/views/timeline/calendar:

Calendar
--------

The :guilabel:`Calendar` view is used to overview and manage records inside a calendar.

- To create records directly within the view instead of opening the :ref:`Form view
  <studio/views/general/form>`, enable :guilabel:`Quick Create`.

  .. note::
     This only works on specific models that can be *quick-created* using only a *name*. However,
     most models do not support quick creation and open the :guilabel:`Form` view to fill in the
     required fields.

- To color records on the calendar, select a field under :guilabel:`Color`. All the records sharing
  the same value for that field are displayed using the same color.

  .. note::
     As the number of colors is limited, the same color can end up being assigned to different
     values.

- To display events lasting the whole day at the top of the calendar, select a :ref:`Checkbox field
  <studio/fields/simple-fields/checkbox>` that specifies if the event lasts the whole day.

- To choose the default time scale used to display events, select :guilabel:`Day`, :guilabel:`Week`,
  :guilabel:`Month`, or :guilabel:`Year` under :guilabel:`Default Display Mode`.

.. note::
   You can also use :guilabel:`Delay Field` to display the duration of the event in hours by
   selecting a :ref:`Decimal <studio/fields/simple-fields/decimal>` or :ref:`Integer
   <studio/fields/simple-fields/integer>` field on the model which specifies the duration of the
   event. However, if you set an :guilabel:`End Date Field`, the :guilabel:`Delay Field` will not be
   taken into account.

.. example::

   .. image:: views/calendar-event.png
      :align: center
      :alt: Calendar Event model's Calendar view

.. _studio/views/timeline/cohort:

Cohort
------

The :guilabel:`Cohort` view is used to examine the life cycle of records over a time period. For
example, it is used in the Subscriptions app to view the subscriptions' retention rate.

- To display a measure (i.e., the aggregated value of a given field) by default on the view, select
  a :guilabel:`Measure Field`.
- To choose which time interval is used by default to group results, select :guilabel:`Day`,
  :guilabel:`Week`, :guilabel:`Month`, or :guilabel:`Year` under :guilabel:`Interval`.
- To change the cohort :guilabel:`Mode`, select either :guilabel:`Retention` :dfn:`the percentage
  of records staying over a period of time, it starts at 100% and decreases with time` or
  :guilabel:`Churn` :dfn:`the percentage of records moving out over a period of time - it starts at
  0% and increases with time`.
- To change the way the :guilabel:`Timeline` (i.e., the columns) progresses, select either
  :guilabel:`Forward` (from 0 to +15) or :guilabel:`Backward` (from -15 to 0). For most purposes,
  the :guilabel:`Forward` timeline is used.

.. example::

   .. image:: views/cohort-subscription.png
      :align: center
      :alt: Subscription model's Cohort view

.. _studio/views/timeline/gantt:

Gantt
-----

The :guilabel:`Gantt` view is used to forecast and examine the overall progress of records. Records
are represented by a bar under a time scale.

- To prevent users from creating or editing records, untick :guilabel:`Can Create` or :guilabel:`Can
  Edit`.
- To fill cells in gray whenever a record should not be created there (e.g., on weekends for
  employees), tick :guilabel:`Display Unavailability`.

  .. note::
     The underlying model must support this feature, and support for it cannot be added using
     Studio. It is supported for the Project, Time Off, Planning, and Manufacturing apps.

- To show a total row at the bottom, tick :guilabel:`Display Total row`.
- To collapse multiple records in a single row, tick :guilabel:`Collapse First Level`.
- To choose which way records are grouped by default on rows (e.g., per employee or project), select
  a field under :guilabel:`Default Group by`.
- To define a default time scale to view records, select :guilabel:`Day`, :guilabel:`Week`,
  :guilabel:`Month`, or :guilabel:`Year` under :guilabel:`Default Scale`.
- To color records on the view, select a field under :guilabel:`Color`. All the records sharing the
  same value for that field are displayed using the same color.

  .. note::
     As the number of colors is limited, the same color can be assigned to different values.

- To specify with which degree of precision each time scale should be divided by, select
  :guilabel:`Quarter Hour`, :guilabel:`Half Hour`, or :guilabel:`Hour` under :guilabel:`Day
  Precision`, :guilabel:`Half Day` or :guilabel:`Day` under :guilabel:`Week Precision`, and
  :guilabel:`Month Precision`.

.. example::

   .. image:: views/gantt-planning.png
      :align: center
      :alt: Planning Shift model's Gantt view

.. _studio/views/reporting:

Reporting views
===============

.. note::
   The settings described below are found under the view's :guilabel:`View` tab unless specified
   otherwise.

.. _studio/views/reporting/pivot:

Pivot
-----

The :guilabel:`Pivot` view is used to explore and analyze the data contained in records in an
interactive manner. It is especially useful to aggregate numeric data, create categories, and drill
down the data by expanding and collapsing different levels of data.

- To access all records whose data is aggregated under a cell, tick :guilabel:`Access records from
  cell`.
- To divide the data into different categories, select field(s) under :guilabel:`Column grouping`,
  :guilabel:`Row grouping - First level`, or :guilabel:`Row grouping - Second level`.
- To add different types of data to be measured using the view, select a field under
  :guilabel:`Measures`.
- To display a count of records that made up the aggregated data in a cell, tick :guilabel:`Display
  count`.

.. example::

   .. image:: views/pivot-purchase-report.png
      :align: center
      :alt: Purchase Report model's Pivot view

.. _studio/views/reporting/graph:

Graph
-----

The :guilabel:`Graph` view is used to showcase data from records in a bar, line, or pie chart.

- To change the default chart, select :guilabel:`Bar`, :guilabel:`Line`, or :guilabel:`Pie` under
  :guilabel:`Type`.
- To choose a default data dimension (category), select a field under :guilabel:`First dimension`
  and, if needed, another under :guilabel:`Second dimension`.
- To select a default type of data to be measured using the view, select a field under
  :guilabel:`Measure`.
- *For Bar and Line charts only*: To sort the different data categories by their value, select
  :guilabel:`Ascending` (from lowest to highest value) or :guilabel:`Descending` (from highest to
  lowest) under :guilabel:`Sorting`.
- *For Bar and Pie charts only*: To access all records whose data is aggregated under a data
  category on the chart, tick :guilabel:`Access records from graph`.
- *For Bar charts only*: When using two data dimensions (categories), display the two columns on top
  of each other by default by ticking :guilabel:`Stacked graph`.

.. example::

   .. image:: views/graph-sales-report.png
      :align: center
      :alt: Sales Analysis Report model's Bar chart on Graph view

.. _studio/views/reporting/dashboard:

Dashboard
---------

The :guilabel:`Dashboard` view is used to display multiple reporting views and key performance
indicators. Which elements are displayed on the view depends on the configuration of the other
reporting views.

.. example::

   .. image:: views/dashboard-sales-report.png
      :align: center
      :alt: Sales Analysis Report model's Dashboard view
