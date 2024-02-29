=======================
Expected revenue report
=======================

Expected Revenue is the total cash value of leads that are expected to close by a certain date,
usually the end of the current month.

An *expected revenue report* compiles all active leads in a sales pipeline that have a set expected
closing date, and compares how sales teams are performing in a given month.

By pulling a monthly expected revenue report, sales managers can see which team members are reaching
goals and which may need additional assistance to close valuable deals.

Create an expected revenue report
=================================

To create an expected revenue report, first navigate to :menuselection:`CRM app --> Reporting -->
Pipeline`. This opens the :guilabel:`Pipeline Analysis` report.

On the top-left of the report, click :guilabel:`Measures`, then select :guilabel:`Expected Revenue`
from the drop-down menu.

At the top of the page, click the arrow to the right of the search bar to open the
:guilabel:`Filters` drop-down menu. Select :guilabel:`Add a Custom Filter`.

Add custom filters
------------------

On the :guilabel:`Add Custom Filter` pop-up window, click into the first field of the new rule.
Type `Expected Closing` into the search bar, or scroll to select it from the list. Click in the
second field and select :guilabel:`is set`.

Click the :guilabel:`➕ (plus)` icon to the right of the rule to duplicate it.

Click the second field of the new rule, and select :guilabel:`is between` from the drop-down menu.
Click in the date fields and use the calendar drop-down to add a start and end date. This is usually
the beginning and ending of the current month.

Click :guilabel:`New Rule`. Click in the new rule's first field, then type `Salesperson` in the
search bar, or scroll through the list to select it. Click in the rule's second field and select
:guilabel:`is set` from the drop-down menu. This will exclude any results without an assigned
salesperson.

.. important::
   At the top of the :guilabel:`Add Custom Filter` form, there is an option to match :guilabel:`any`
   or :guilabel:`all` of the rules. In order to properly run the report, only records that match
   **all** of the following filters should be included. Before adding the filters, make sure
   :guilabel:`all` is selected in this field.

At the bottom of the :guilabel:`Add Custom Filter` form, click :guilabel:`Add`.

Save as a favorite
------------------

To save this report as a favorite, click on the arrow to the right of the search bar, then click
:guilabel:`Save current search`. Enter a name for this report, then click :guilabel:`Save`.

.. tip::
   Before saving, additional selections can be made from this drop-down menu. For example, to view
   expected revenue by individual salesperson, selected :guilabel:`Salesperson` under the
   :guilabel:`Group By` heading.

View options
============

The expected revenue report benefits from utilizing multiple views. The default graph view can be
used to identify which salespeople are expected to bring in the most revenue, while the list view
and pivot view provide more detail on specific deals.

.. tabs::

   .. tab:: Graph view

      graph

   .. tab:: List view

      The list view provides a list of all leads that are expected to close by the designated date.
      Clicking on a lead in list view opens the record for detailed analysis, but many insights can
      be gleaned from the basic view.

   .. tab:: Pivot view

      The pivot view arranges all leads that are expected to close by the designated date into a
      table with sales people along the Y axis and stages along the X axis. Additional measurements
      like the Count of leads can be added to the table, and the table itself can be inserted in
      spreadsheet if the Documents app is installed in the database.

