=======================
Unattended leads report
=======================

*Unattended leads* are leads that have scheduled activities that are either due or past due.
Whenever an activity is scheduled, *Odoo* tracks the due date and sends email reminders to the users
the activity is assigned to.

An *unattended leads report* compiles all active leads in the pipeline with due or past due
activities, allowing a sales manager to identify which opportunities require immediate attention.

By pulling a daily unattended leads report, sales managers can remind their teams to address
outstanding activities before they become past due, helping avoid neglected leads and reinforcing
proactive behaviors in their salespeople.

.. example::

   A sales manager starts their day by pulling an unattended leads report, and upon switching to
   list view, they see the following:

   .. image:: unattended_leads_report/unattended-leads-example.png
      :align: center
      :alt: List view of a sample Unattended Leads report with the activities emphasized.

  Their team member, Mitchell, has two leads in the Proposition stage with activities that are due.
  The yellow :guilabel:`📞 (phone)` icon indicates that the `5 VP Chairs` lead has a phone call
  activity scheduled for today. The red :guilabel:`✉️ (envelope)` icon indicates that the `Modern
  Open Space` lead has an email activity scheduled that is past due.

  Clicking on the `Modern Open Space` lead, the sales manager opens the record of the lead and
  reviews the chatter. They see that the email was scheduled to be sent two days ago, but Mitchell
  never marked this activity as done.

  .. image:: unattended_leads_report/overdue-activities-email.png
     :align: center
     :alt: Example of overdue activities notification in the chatter of a lead.

.. important::
   In order to pull an unattended leads report, activity track **must** be utilized in the *CRM*
   pipeline.

   For more information, refer to :ref:`Activity Tracking
   <track_leads/unattended_leads_report/activity tracking>`

Create an unattended leads report
=================================

To create an unattended leads report, first navigate to :menuselection:`CRM app --> Reporting -->
Pipeline` to open the :guilabel:`Pipeline Analysis` report. Click into the search bar at the top of
the page. The :guilabel:`Created on` filter can remain active, though if any other filters are
present, they should be removed.

Click the down arrow to the right of the search bar to open the filters drop-down menu. Click
:guilabel:`Add Custom Filter`. This opens a :guilabel:`Add Custom Filter` pop-up window.

.. important::
   At the top of the :guilabel:`Add Custom Filter` form, there is an option to match :guilabel:`any`
   or :guilabel:`all` of the rules. In order to properly run the report, only records that match
   **all** of the following filters should be included. Before adding the filters, make sure
   :guilabel:`all` is selected in this field.

   .. image:: unattended_leads_report/all-custom-filter.png
     :align: center
     :alt: Example of overdue activities notification in the chatter of a lead.

Add filter for past due activities
----------------------------------

Click the first field for the new rule, and type `Activities` in the search bar, or scroll to search
through the list. Then, next to :guilabel:`Activities`, click the arrow to open a new drop-down menu
with secondary conditions. Select :guilabel:`Due Date`.

  .. image:: unattended_leads_report/activities-due.png
     :align: center
     :alt: Custom filter pop-up with emphasis on the options for activities and due date.

In the rule's second field, select :guilabel:`<=` from the drop-down menu. Selecting this filter
includes all activities with a due date up to, and including the date selected in the next field.

Either leave the rule's third field as today's date, or adjust it as needed.

Exclude unassigned leads
------------------------

Click :guilabel:`New Rule`. Click the first field for the new rule, and type `Salesperson` in the
search bar, or scroll to search through the list.

In the rule's second field, select :guilabel:`is set` from the drop-down menu. Selecting this filter
excludes any leads that have note been assigned to a specific salesperson.

Add a Sales team
----------------

Click :guilabel:`New Rule`. Click the first field for the new rule, and type `Sales Team` in the
search bar, or scroll to search through the list.

In the rule's second field, select :guilabel:`is in` from the drop-down menu.

In the third field, enter the name of the desired sales team. Multiple teams can be selected in this
field.

.. note::
   This filter is optional. To view results for the entire company, do **not** add this filter.

.. figure:: unattended_leads_report/configured-custom-rules.png
   :align: center
   :alt: An example of the Custom Filter pop-up window with all of the rules configured.

   An example of the Add Custom Filter pop-up window with all of the rules configured.

View results
------------

After the filters are configured, click :guilabel:`Add`. The resulting report displays all leads
assigned to a salesperson where an activity is due on the current date, or is past due. The default
display is a bar graph, where the leads are grouped by *stage*.

To group the results by salesperson, click the down arrow to the right of the search bar. Under the
:guilabel:`Group By` heading, select :guilabel:`Salesperson`.

.. note::
   The option to group by :guilabel:`Sales Team` is available under the :guilabel:`Group By` heading
   as well.

To change to a *list* view, click the :guilabel:`≣ (bars)` icon in the top-right corner of the
screen.

.. tip::
   Clicking the :guilabel:`(sliders) icon` opens a drop-down menu of additional columns that can be
   added to the report.

   Some options that are beneficial for this report include:

   - :guilabel:`Activities`: the summary of the latest activity for this lead.
   - :guilabel:`Expected Closing`: estimated date on which the lead will be won.
   - :guilabel:`Probability`: estimated success rate based on the stage.

  .. image:: unattended_leads_report/additional-options.png
     :align: center
     :alt: Custom filter pop-up with emphasis on the options for activities and due date.

.. _track_leads/unattended_leads_report/activity tracking:

Activity tracking
=================

:doc:`Activities </applications/productivity/discuss/overview/plan_activities>` are follow-up tasks
tied to a record in the database. Activities can be scheduled on any page of the database that
contains a chatter thread, Kanban view, list view, or activities view of an application.

A best practice for pipeline management is scheduling activities or marking them as *done* anytime a
lead is interacted with. Ensuring that all members of the sales team properly schedule and follow up
on activities allows the *Pipeline Analysis* to pull useful and actionable metrics.

.. tip::
   Activity colors, and their relation to an activity's due date, are consistent throughout the
   database, regardless of the activity type, or the view.

    - *Green* indicates that the due date is in the future.
    - *Yellow* indicates that the due date is today.
    - *Red* indicates that the due date has passed.

   .. image:: unattended_leads_report/activity-colors.png
     :align: center
     :alt: Custom filter pop-up with emphasis on the options for activities and due date.
