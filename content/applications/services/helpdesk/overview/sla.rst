===============================
Service level agreements (SLAs)
===============================

A *service level agreement* (SLA) defines the level of service a customer can expect from a
supplier. :abbr:`SLAs (Service Level Agreements)` provide a timeline that tells customers when they
can expect results, and keeps the support team on target.

.. note::
   The *SLA Policies* feature **must** be enabled on newly-created *Helpdesk* teams.

   To enable the feature, navigate to :menuselection:`Helpdesk app --> Configuration --> Helpdesk
   Teams`. Click on a team to open that team's configuration page.

   From here, scroll to the :guilabel:`Performance` section. To turn on the :abbr:`SLAs (Service
   Level Agreements)` feature for the team, tick the :guilabel:`SLA Policies` checkbox. Click
   :guilabel:`Save` to save the changes. The page may need to be refreshed.

   .. image:: sla/sla-enable.png
      :align: center
      :alt: The configuration page for a Helpdesk team with the SLA feature enabled.

Create SLA policy
=================

To create a new policy, go to :menuselection:`Helpdesk app --> Configuration --> SLA Policies`, and
click :guilabel:`Create`.

Alternatively, go to :menuselection:`Helpdesk app --> Configuration --> Helpdesk Teams`, and click
on a team. Then, click the :guilabel:`SLA Policies` smart button at the top of the team's settings
page, and click :guilabel:`Create`.

On the blank :guilabel:`SLA Policies` form, enter a name on the blank line at the top of the form,
and a description in the :guilabel:`Description of the policy...` field. Then, proceed to fill out
the form using the steps below.

Define SLA policy criteria
--------------------------

The :guilabel:`Criteria` section is used to identify which tickets this policy is applied to.

Fill out the following fields to adjust the selection criteria:

.. note::
   Unless otherwise indicated, multiple selections can be made for each field.

- :guilabel:`Helpdesk Team`: a policy can only be applied to one team. *This field is required.*
- :guilabel:`Minimum Priority`: the priority level for a ticket is identified by selecting one, two,
  or three of the :guilabel:`⭐ (star)` icons, representing the priority level on the Kanban card, or
  on the ticket itself. The :abbr:`SLA (Service Level Agreement)` is **only** applied after the
  priority level has been updated on the ticket to match the :abbr:`SLA (Service Level Agreement)`
  criteria. If no selection is made in this field, this policy applies to all priority levels.
- :guilabel:`Type`: ticket types can be helpful when indicating when a ticket is a customer
  question that can be solved with a quick response, or an issue that may require additional
  investigation. Multiple ticket types can be selected for this field. If no selection is made, this
  policy applies to all ticket types.
- :guilabel:`Tags`: tags are used to indicate what the ticket is about. Multiple tags can be applied
  to a single ticket.
- :guilabel:`Customers`: individual contacts or companies may be selected in this field.
- :guilabel:`Sales Order Items`: this field is available only if a team has the *Timesheets* feature
  enabled. This allows the ticket to link directly to a specific line on a sales order, which must
  be indicated on the ticket in the :guilabel:`Sales Order Items` field.

Establish an SLA policy target
------------------------------

The :guilabel:`Target` section of an :abbr:`SLA (Service Level Agreement)` policy form, identifies
the stage a ticket needs to reach, and the time allotted to reach that stage, to satisfy the
:abbr:`SLA (Service Level Agreement)` policy. Any stage assigned to a team may be selected for the
:guilabel:`Reach Stage` field.

.. example::
   An :abbr:`SLA (Service Level Agreement)` titled `8 Hours to Close` tracks the working time before
   a ticket is completed, and would have `Solved` as the :guilabel:`Reach Stage`. Simultaneously, an
   :abbr:`SLA (Service Level Agreement)` titled `2 Days to Start` tracks the working time before
   work on a ticket has begun, and would have `In Progress` as the :guilabel:`Reach Stage`.

Time spent in stages selected in the :guilabel:`Excluding Stages` field are **not** included in the
calculation of the :abbr:`SLA (Service Level Agreement)` deadline.

Meet SLA deadlines
==================

As soon as it is determined that a ticket fits the criteria of an :abbr:`SLA (Service Level
Agreement)` policy, a deadline is calculated. The deadline is based on the creation date of the
ticket, and the targeted working hours.

.. note::
   The value indicated next to the :guilabel:`Working Hours` field of an :abbr:`SLA (Service Level
   Agreement)` policy is used to determine the deadline. By default, this is determined by the value
   set in the :guilabel:`Company Working Hours` field. To view, or update, this setting, first
   enable :doc:`developer mode <../../../general/developer_mode/>`.  Then, navigate to
   :menuselection:`Settings app --> Technical --> Resources --> Working Times`.

The deadline is then added to the ticket, as well as a tag indicating the name of the :abbr:`SLA
(Service Level Agreement)` applied.

When a ticket satisfies an :abbr:`SLA (Service Level Agreement)` policy, the :abbr:`SLA (Service
Level Agreement)` tag turns green, and the deadline disappears from view on the ticket.

.. figure:: sla/sla-tags.png
   :align: center
   :alt: A Helpdesk ticket with two SLA tags attached.

   This Helpdesk ticket has two SLA policies applied to it. One of the policies has been satisfied,
   so the tag has turned green. The other policy is in progress.

.. important::
   If a ticket fits the criteria for more than one :abbr:`SLA (Service Level Agreement)`, the
   earliest occurring deadline is displayed on the ticket. After that deadline has passed, the next
   deadline is displayed.

   .. image:: sla/sla-deadline.png
      :align: center
      :alt: A Helpdesk ticket with emphasis on the deadline field.

If the :abbr:`SLA (Service Level Agreement)` deadline passes and the ticket has not moved to the
:guilabel:`Reach Stage`, the :abbr:`SLA (Service Level Agreement)` tag turns red. After the
:abbr:`SLA (Service Level Agreement)` has failed, the red tag stays on the ticket, even after the
ticket is moved to the :guilabel:`Reach Stage`.

Analyze SLA performance
=======================

The *SLA Status Analysis* report tracks how quickly an :abbr:`SLA (Service Level Agreement)` is
fulfilled, as well as the performance of individual team members. Navigate to the report, and
corresponding pivot table, by going to :menuselection:`Helpdesk app --> Reporting --> SLA Status
Analysis`.

Pivot view
----------

By default, the report displays in a :guilabel:`Pivot` view. Any :abbr:`SLA (Service Level
Agreement)` policies in the database with tickets that failed to fulfill a policy, are in progress,
or have satisfied a policy are listed.

.. image:: sla/sla-status-analysis.png
   :align: center
   :alt: The pivot view of the SLA Analysis report.

To change the display, or add additional measurements, click the :guilabel:`Measures` button to
reveal a drop-down menu of reporting criteria, and choose from the options available.

Whenever a measurement is picked, a :guilabel:`✔️ (checkmark)` icon appears in the drop-down menu to
indicate that the measurement is included, and a corresponding new column emerges in the pivot table
to show the relevant calculations.

To add a group to a row or column, click the :guilabel:`➕ (plus)` icon next to the policy name and
then select one of the groups. To remove one, click the :guilabel:`➖ (minus)` icon next to the
policy name.

Graph view
----------

The :guilabel:`SLA Status Analysis` report can also be viewed as a *Bar Chart*, *Line Chart*, or
*Pie Chart*. Toggle between these views by first selecting the :guilabel:`Graph` button at the
top-right of the dashboard. Then, select the appropriate chart icon at the top-left of the graph.

.. tabs::

   .. tab:: Bar Chart

       .. figure:: sla/sla-report-bar.png
          :align: center
          :alt: View of the SLA status analysis report in bar view.

          A bar chart can deal with larger data sets, and compare data across several categories.

   .. tab:: Line Chart

       .. figure:: sla/sla-report-line.png
          :align: center
          :alt: View of the SLA status analysis report in line view.

          A line chart can visualize data trends or changes over time.

   .. tab:: Pie Chart

       .. figure:: sla/sla-report-pie.png
          :align: center
          :alt: View of the SLA status analysis report in pie chart view.

          A pie chart compares data among a small number of categories.

.. tip::
   Both the :guilabel:`Bar Chart` and :guilabel:`Line Chart` views can be :guilabel:`Stacked` by
   selecting the :guilabel:`Stacked` icon. This displays two or more groups on top of each other,
   instead of next to each other, making it easier to compare data.

   .. image:: sla/sla-report-stacked.png
      :align: center
      :alt: An example of the SLA analysis report, displaying the stacked bar graph view.

.. seealso::
   :doc:`../advanced/close_tickets`
