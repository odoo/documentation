==========
Activities
==========

*Activities* are follow-up tasks tied to a record in an Odoo database.

.. _activities/important:

The icon used to display activities varies depending on the :ref:`activity type <activities/types>`:

- :guilabel:`🕘 (clock)`: the default icon, which appears if nothing is scheduled.
- :guilabel:`📞 (phone)`: this icon appears if a phone call is scheduled.
- :guilabel:`✉️ (envelope)`: this icon appears if an email is scheduled.
- :guilabel:`✔️ (checkmark)`: this icon appears if a to-do is scheduled.
- :guilabel:`(group of people)`: this icon appears if a meeting is scheduled.
- :guilabel:`(arrow pointing up above a line)`: this icon appears if a document is scheduled to be
  uploaded.
- :guilabel:`(pencil in a box)`: this icon appears if a signature request is scheduled.

Schedule activities
===================

Activities can be scheduled on any page of the database that contains a :ref:`chatter
<activities/chatter>` thread, :ref:`Kanban view <activities/kanban>`, :ref:`list view
<activities/list>`, or :ref:`activities view <activities/activity>` of an application.

.. _activities/chatter:

Chatter
-------

Activities can be created from the chatter on any record.

To schedule a new activity, click the :guilabel:`Activities` button, located at the top of the
chatter. In the :guilabel:`Schedule Activity` pop-up window that appears, :ref:`fill out the
Schedule Activity form <activities/form>`.

.. image:: activities/chatter.png
   :align: center
   :alt: New activity type form.

.. _activities/kanban:

Kanban view
-----------

Another way that activities are created is from the Kanban view in an application.

.. image:: activities/kanban.png
   :align: center
   :alt: The Kanban icon in the top menu, highlighted.

To do so, click on the :guilabel:`🕘 (clock)` icon located at the bottom of an individual record.

Click :guilabel:`+ Schedule An Activity`, then proceed to :ref:`fill out the Schedule Activity form
<activities/form>`.

.. image:: activities/schedule-kanban-activity.png
   :align: center
   :alt: Kanban view of the CRM pipeline and the option to schedule an activity.

.. note::
   If a record already has a scheduled activity, the :guilabel:`🕘 (clock)` icon is replaced by the
   icon that represents the existing scheduled activity. Click on the activity type's icon to
   schedule another activity.

.. _activities/list:

List view
---------

Activities can also be created from a list view.

If the :guilabel:`Activities` column is hidden, reveal it using the :guilabel:`(additional options
toggle)` icon in the far-right of the top row, represented by two horizontal lines with two dots.

Then, click on the :guilabel:`🕘 (clock)` icon for the record the activity is being added to, then
click :guilabel:`+ Schedule an activity`. Proceed to :ref:`fill out the Schedule Activity form
<activities/form>` that appears.

.. note::
   If a record already has a scheduled activity, the :guilabel:`🕘 (clock)` icon is replaced by the
   icon that represents the existing scheduled activity. Click on the activity type's icon to
   schedule another activity.

.. image:: activities/schedule-list-activity.png
   :align: center
   :alt: List view of the CRM pipeline and the option to schedule an activity.

.. _activities/activity:

Activity view
-------------

Most applications in Odoo have an *Activity* view available. If available, a :guilabel:`🕘 (clock)`
activity icon is visible in the top-right of the main menu bar.

To open the activity view, click the :guilabel:`🕘 (clock)` activity icon.

.. image:: activities/activities.png
   :align: center
   :alt: Top-right menu with the Activities icon called out.

In this view, all the available activities are listed in the columns, while the horizontal entries
represent all the individual records.

Activities that appear green have a due date in the future, activities that appear orange are due
today, while activities appearing red are overdue.

Color bars in each column represent records for specific activity types, and display a number
indicating how many activities are scheduled for that type.

If multiple activity types are scheduled for a record, a number appears in the box, indicating the
total number of scheduled activities.

.. note::
   Activity colors, and their relation to an activity's due date, is consistent throughout Odoo,
   regardless of the activity type, or the view.

To schedule an activity for a record, hover over the corresponding field, and a :guilabel:`➕ (plus
sign)` appears. Click the :guilabel:`➕ (plus sign)`, and then :ref:`fill out the Schedule Activity
form <activities/form>`.

.. image:: activities/activity-view.png
   :align: center
   :alt: Activity view of the CRM pipeline and the option to schedule an activity.

.. _activities/form:

Schedule Activity form
----------------------

Activities can be scheduled from many different places, such as from the :ref:`chatter
<activities/chatter>` of a record, or from one of multiple views in an application, when available:
the :ref:`Kanban view <activities/kanban>`, :ref:`list view <activities/list>`, or :ref:`activity
view <activities/activity>`.

Enter the following information on the form:

- :guilabel:`Activity Type`: select the type of activity from the drop-down menu. The default
  options are: :guilabel:`Email`, :guilabel:`Call`, :guilabel:`Meeting`, or :guilabel:`To-Do`.
  Depending on what other applications are installed, additional options may be available.

  .. note::
     Individual applications have a list of dedicated :ref:`activity types <activities/types>`. For
     example, installing the *Sales* application makes :guilabel:`Order Upsell` available, while
     installing the *Sign* application makes :guilabel:`Request Signature` available.

- :guilabel:`Summary`: enter a short title for the activity, such as `Discuss Proposal`.
- :guilabel:`Due Date`: using the calendar popover, select the activity's deadline.
- :guilabel:`Assigned to`: by default, the current user populates this field. To assign a different
  user to the activity, select them from the drop-down menu.
- :guilabel:`Notes`: add any additional information for the activity in this field.

When the :guilabel:`Schedule Activity` pop-up window is completed, click one of the following
buttons:

- :guilabel:`Open Calendar`: opens the user's calendar to add and schedule the activity.

  Click on the desired date and time for the activity, and a :guilabel:`New Event` pop-up window
  appears. The summary from the *Schedule Activity* pop-up window populates the :guilabel:`Title`
  field.

  Enter the information in the :guilabel:`New Event` pop-up window, then click :guilabel:`Save &
  Close` to schedule it. Once scheduled, the activity is added to the chatter under the
  :guilabel:`Planned Activities` section.

  .. important::
    The :guilabel:`Open Calendar` button **only** appears if the :guilabel:`Activity Type` is set
    to either :guilabel:`Call` or :guilabel:`Meeting`.

- :guilabel:`Schedule`: schedules the activity, and adds the activity to the chatter under
  :guilabel:`Planned Activities`.
- :guilabel:`Schedule & Mark as Done`: adds the details of the activity to the chatter under
  :guilabel:`Today`. The activity is not scheduled, and is automatically marked as done.
- :guilabel:`Done & Schedule Next`: adds the details of the activity to the chatter under
  :guilabel:`Today`. The activity is not scheduled, is automatically marked as done, and a new
  :guilabel:`Schedule Activity` pop-up window appears.
- :guilabel:`Cancel`: discards any changes made on the :guilabel:`Schedule Activity` pop-up window.

.. image:: activities/schedule-pop-up.png
   :align: center
   :alt: View of CRM leads and the option to schedule an activity.

.. _activities/all:

All scheduled activities
========================

To view a consolidated list of activities, organized by application, click the :guilabel:`🕘
(clock)` icon in the header menu, located in the top-right.

If any activities are scheduled, the number of activities appear in a red bubble on the
:guilabel:`🕘 (clock)` icon.

All activities for each application are further divided into subsections, indicating where in the
application the activity is to be completed. Each sub-section lists the number of scheduled
activities that are :guilabel:`Late`, due :guilabel:`Today`, and scheduled in the
:guilabel:`Future`.

.. example::
   In the *Time Off* application, one activity is scheduled to be done in the *All Time Off*
   requests dashboard, and six activities are scheduled to be done in the *Allocations* dashboard.

   These requests appear in two separate lists in the all activities drop-down menu: one labeled
   `Time Off` and one labeled `Time Off Allocation`.

   .. image:: activities/activities-menu.png
      :align: center
      :alt: The list of activities that is accessed from the main menu bar. Two entries for the Time
            Off application are highlighted.

Request a document
------------------

The option to :guilabel:`Request a Document` is available at the bottom of the list of :ref:`all
scheduled activities <activities/all>`, the option to :guilabel:`Request a Document` appears. Click
:guilabel:`Request a Document`, and a :guilabel:`Request a file` pop-up window appears.

Enter the following information on the form:

- :guilabel:`Document Name`: enter a name for the document being requested.
- :guilabel:`Request To`: select the user the document is being requested from using the drop-down
  menu.
- :guilabel:`Due Date In`: enter a numerical value indicating when the document is due. Next to
  this field, a :guilabel:`Days` field is visible. Click :guilabel:`Days`, the default option, to
  reveal a drop-down menu. Select the desired time-frame option from the list. The options are
  :guilabel:`Days`, :guilabel:`Weeks`, or :guilabel:`Months`.
- :guilabel:`Workspace`: using the drop-down menu, select the specific :ref:`Workspace
  <documents/workspaces>` the document is being uploaded to.
- :guilabel:`Tags`: select any desired tags from the drop-down menu. The available tags displayed
  are based on the tags configured for the selected :guilabel:`Workspace`.
- :guilabel:`Message`: enter a message to clarify the document request in this field.

When all the fields are completed, click :guilabel:`Request` to send the document request.

.. image:: activities/request-doc.png
   :align: center
   :alt: The Request a file form, with all fields filled out to request a contract.

.. _activities/types:

Activity types
==============

To view the currently configured types of activities in the database, navigate to
:menuselection:`Settings app --> Discuss section --> Activities setting --> Activity Types`.

.. image:: activities/settings-activities-types.png
   :align: center
   :alt: Activity Types button in the Settings application under the Discuss section.

Doing so reveals the :guilabel:`Activity Types` page, where the existing activity types are found.

.. image:: activities/activity-list.png
   :align: center
   :alt: The list of activity types already configured and available.

Edit activity types
-------------------

To edit an existing :ref:`activity type <activities/types>`, click on the activity type, and the
activity type form loads.

Make any desired changes to the activity type form. The form automatically saves, but it can be
saved manually at any time by clicking the :guilabel:`Save Manually` option, represented by a
:guilabel:`(cloud upload)` icon, located in the top-left corner of the page.

Create new activity types
-------------------------

To create a new :ref:`activity type <activities/types>`, click :guilabel:`New` from the
:guilabel:`Activity Types` page, and a blank activity type form loads.

Enter a :guilabel:`Name` for the activity type at the top of the form, then enter the following
information on the form.

Activity Settings section
~~~~~~~~~~~~~~~~~~~~~~~~~

- :guilabel:`Action`: using the drop-down menu, select an action associated with this new activity
  type. Some actions trigger specific behaviors after an activity is scheduled, such as:

  - :guilabel:`Upload Document`: if selected, a link to upload a document is automatically added to
    the planned activity in the chatter.
  - :guilabel:`Call` or :guilabel:`Meeting`: if selected, users have the option to open their
    calendar to select a date and time for the activity.
  - :guilabel:`Request Signature`: if selected, a link to open a signature request pop-up window is
    automatically added to the planned activity in the chatter. This requires the Odoo *Sign*
    application to be installed.

  .. note::
     Available activity types vary based on the installed applications in the database.

- :guilabel:`Folder`: select a specific :ref:`workspace <documents/workspaces>` folder to save a
  document to. This field **only** appears if :guilabel:`Upload Document` is selected for the
  :guilabel:`Action`.

  Using the drop-down menu, select the :guilabel:`Folder` the document is saved to.

- :guilabel:`Default User`: select a user from the drop-down menu to automatically assign this
  activity to the selected user when this activity type is scheduled. If this field is left blank,
  the activity is assigned to the user who creates the activity.
- :guilabel:`Default Summary`: enter a note to include whenever this activity type is created.

  .. note::
     The information in the :guilabel:`Default User` and :guilabel:`Default Summary` fields are
     included when an activity is created. However, they can be altered before the activity is
     scheduled or saved.

- :guilabel:`Keep Done`: tick this checkbox to keep activities that have been marked as `Done`
  visible in the :ref:`activity view <activities/activity>`.
- :guilabel:`Default Note`: enter any notes to appear with the activity.

Next Activity section
~~~~~~~~~~~~~~~~~~~~~

It is possible to have another activity either suggested or triggered. To do so, configure the
:guilabel:`Next Activity` section.

- :guilabel:`Chaining Type`: select either :guilabel:`Suggest Next Activity` or :guilabel:`Trigger
  Next Activity` from the drop-down menu. Depending on the selected option, either the
  :guilabel:`Suggest` or :guilabel:`Trigger` field is displayed.

  .. note::
     The :guilabel:`Chaining Type` field does **not** appear if :guilabel:`Upload Document` is
     selected for the :guilabel:`Action`.

- :guilabel:`Suggest/Trigger`: depending on what is selected for the :guilabel:`Chaining Type`, this
  field either displays :guilabel:`Suggest` or :guilabel:`Trigger`. Using the drop-down menu, select
  the activity to recommend or schedule as a follow-up task to the activity type.
- :guilabel:`Schedule`: configure when the next activity is suggested or triggered.

  First, enter a numerical value indicating when the activity is suggested or triggered.

  Next to this field, a :guilabel:`Days` field is visible. Click :guilabel:`Days`, the default
  option, to reveal a drop-down menu. Select the desired time-frame option from the list. The
  options are :guilabel:`Days`, :guilabel:`Weeks`, or :guilabel:`Months`.

  Lastly, using the drop-down menu, select whether the activity is scheduled or triggered either
  :guilabel:`after previous activity deadline` or :guilabel:`after completion date`.

.. image:: activities/new-activity.png
   :align: center
   :alt: A new Activity form with all the fields filled out.

.. seealso::
   - :doc:`../productivity/discuss`
   - :doc:`../productivity/discuss/team_communication`
