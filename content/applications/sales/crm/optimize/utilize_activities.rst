==================================
Utilize activities for sales teams
==================================

*Activities* are follow-up tasks tied to a record in an Odoo database. Activities can be scheduled
on any page of the database that contains a chatter thread, Kanban view, list view, or activities
view of an application.

.. figure:: utilize_activities/activities-view.png
   :align: center
   :alt: The summary view of activities for leads and opportunities in an Odoo database.

   Planned Activities for Leads and Opportunities.

Activity types
--------------

A set of preconfigured activity types is available in the *CRM* app. To view the list of available
activity types, navigate to the :menuselection:`CRM app --> Configuration --> Activity Types`.

.. note::
   Additional activity types are available within the database, and can be utilized through
   different applications. To access the complete list of activity types, go to the
   :menuselection:`Settings app`, then scroll to the :guilabel:`Discuss` section, and click
   :guilabel:`Activity Types`.

The preconfigured activity types for the *CRM* app are as follows:

 - :guilabel:`Email`: adds a reminder to the chatter that prompts the salesperson to send an email.
 - :guilabel:`Call`: opens a calendar link where the salesperson can schedule time to call the
   contact.
 - :guilabel:`Meeting`: opens a calendar link where the salesperson can schedule time to have a
   meeting with the contact.
 - :guilabel:`To Do`: adds a general reminder task to the chatter.
 - :guilabel:`Upload Document`: adds a link on the activity where an external document can be
   uploaded. Note that the *Documents* app is **not** required to utilize this activity type.

.. note::
   If other applications are installed, such as *Sales* or *Accounting*, other activity types are
   made available in the *CRM* app.

Create a new activity type
~~~~~~~~~~~~~~~~~~~~~~~~~~

To create a new activity type, click :guilabel:`Create` at the top-left of the page to open a blank
form.

At the top of the form, start by choosing a :guilabel:`Name` for the new activity type.

Activity settings
*****************

Action
^^^^^^

The *Action* field specifies the intent of the activity. Some actions trigger specific behaviors
after an activity is scheduled.

- If :guilabel:`Upload Document` is selected, a link to upload a document is added directly to the
  planned activity in the chatter.
- If either :guilabel:`Phonecall` or :guilabel:`Meeting` are selected, users have the option to open
  their calendar to schedule a time for this activity.
- If :guilabel:`Request Signature` is selected, a link is added to the planned activity in the
  chatter that opens a signature request pop-up window.

.. image:: utilize_activities/action-field.png
   :align: center
   :alt: The Activity settings on a new activity type with emphasis on the Action field.

.. note::
   The actions available to select on an activity type vary, depending on the applications currently
   installed in the database.

Default user
^^^^^^^^^^^^

To automatically assign this activity to a specific user when this activity type is scheduled,
choose a name from the :guilabel:`Default User` drop-down menu. If this field is left blank, the
activity is assigned to the user who creates the activity.

Default summary
^^^^^^^^^^^^^^^

To include notes whenever this activity type is created, enter them into the :guilabel:`Default
Summary` field.

.. note::
   The information in the :guilabel:`Default User` and :guilabel:`Default Summary` fields are
   included when an activity is created. However, they can be altered before the activity is
   scheduled or saved.

Next activity
*************

To automatically suggest, or trigger, a new activity after an activity has been marked complete, the
:guilabel:`Chaining Type` must be set.

Suggest next activity
^^^^^^^^^^^^^^^^^^^^^

In the :guilabel:`Chaining Type` field, select :guilabel:`Suggest Next Activity`. Upon doing so, the
field underneath changes to: :guilabel:`Suggest`. Click the :guilabel:`Suggest` field drop-down menu
to select any activities to recommend as follow-up tasks to this activity type.

In the :guilabel:`Schedule` field, choose a default deadline for these activities. To do so,
configure a desired number of :guilabel:`Days`, :guilabel:`Weeks`, or :guilabel:`Months`. Then,
decide if it should occur :guilabel:`after completion date` or :guilabel:`after previous activity
deadline`.

This :guilabel:`Schedule` field information can be altered before the activity is scheduled.

When all configurations are complete, click :guilabel:`Save`.

.. note::
   If an activity has the :guilabel:`Chaining Type` set to :guilabel:`Suggest Next Activity`, and
   has activities listed in the :guilabel:`Suggest` field, users are presented with recommendations
   for activities as next steps.

   .. image:: utilize_activities/suggest-next-activity.png
      :align: center
      :alt: A schedule activity pop-up with emphasis on the recommended activities.

Trigger next activity
^^^^^^^^^^^^^^^^^^^^^

Setting the :guilabel:`Chaining Type` to :guilabel:`Trigger Next Activity` immediately launches the
next activity once the previous one is completed.

If :guilabel:`Trigger Next Activity` is selected in the :guilabel:`Chaining Type` field, the field
beneath changes to: :guilabel:`Trigger`. From the :guilabel:`Trigger` field drop-down menu, select
the activity that should be launched once this activity is completed.

In the :guilabel:`Schedule` field, choose a default deadline for these activities. To do so,
configure a desired number of :guilabel:`Days`, :guilabel:`Weeks`, or :guilabel:`Months`. Then,
decide if it should occur :guilabel:`after completion date` or :guilabel:`after previous activity
deadline`.

This :guilabel:`Schedule` field information can be altered before the activity is scheduled.

When all configurations are complete, click :guilabel:`Save`.

.. note::
   When an activity has the :guilabel:`Chaining Type` set to :guilabel:`Trigger Next Activity`,
   marking the activity as *Done* immediately launches the next activity listed in the
   :guilabel:`Trigger` field.

Activity tracking
-----------------

To keep the pipeline up to date with the most accurate view of the status of activities, as soon as
a lead is interacted with, the associated activity should be marked as *Done*. This ensures the next
activity can be scheduled as needed. It also prevents the pipeline from becoming cluttered with
past due activities.

The pipeline is most effective when it is kept up-to-date and accurate to the interactions it is
tracking.

Activity plans
--------------

Activity types with the *Chaining Type* set to *Trigger New Activity* provide the opportunity to
preplan a sequence of customized activities. Once an activity is marked as *Done*, the next activity
is automatically scheduled.

The *Chaining Type* setting on an activity type provides the opportunity to preplan a sequence of
events, that can aide in the sales process.

.. example::
   A salesperson adds a new lead to their pipeline, and schedules an *Email* activity for the
   following day. The email activity type is configured with the following settings:

   - :guilabel:`Chaining Type`: `Suggest Next Activity`
   - :guilabel:`Suggest`: `Call` `Meeting`
   - :guilabel:`Schedule`: `2 days after previous activity deadline`

   After sending an email to the lead, the salesperson clicks :guilabel:`DONE & SCHEDULE NEXT` on
   the :guilabel:`Schedule Activity` pop-up window. This opens a new pop-up window, where the
   suggested next activities are listed as recommendations for next steps.

   .. image:: utilize_activities/recommended-activities.png
      :align: center
      :alt: Schedule an activity pop-up window with recommended activities.

The *suggested* or *triggered* activities will vary, depending on a variety of factors. See below
for some suggested sequences:

.. tabs::

   .. tab:: Sample #1

      - A salesperson adds a lead to the pipeline and schedules an *email* activity.
      - The *email* activity suggests scheduling a *call* or a *meeting* within two days of the
        previous deadline.
      - Both the *call* and the *meeting* activities trigger a *create quote* activity.
      - After the quote is sent, a *follow-up on quote* activity is scheduled within five days.

   .. tab:: Sample #2

      - A lead is :doc:`added to the pipeline <../acquire_leads/generate_leads>` through the
        website's contact form. The salesmanager assigns a salesperson and schedules an activity
        for a *call*.
      - The *call* activity triggers an *upload document* activity, so the salesperson can send over
        a proposal after a successful phone call.
      - The *upload document* activity suggests scheduling a *request signature* activity or a
        *meeting*. The salesperson chooses to schedule a meeting.

   .. tab:: Sample #3

      - A salesmanager notices several of their salespeople are neglecting to follow-up on their
        leads in a timely manner. As a result, high-value targets are not receiving adequate
        attention.
      - The salesmanager creates a new activity type, titled *follow-up*, which is configured with
        the :guilabel:`Action` set to :guilabel:`Reminder`.
      - The salesmanager adds *follow-up* as the next activity triggered or suggested to all of
        their teams activities.
      - After a salesperson schedules an *email* activity, a *follow-up* activity is scheduled for
        the next day. After they schedule a *meeting* activity, a *follow-up* activity is scheduled
        two days later.

.. seealso::
 - :doc:`Activities </applications/essentials/activities>`
