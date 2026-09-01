============
Event tracks
============

Odoo **Events** provides users the ability to create, schedule, and manage talks, lectures,
presentations, and other similar sub-events (known in Odoo as *tracks*).

Configuration
=============

To enable tracks in Odoo, navigate to :menuselection:`Events app --> Configuration --> Settings`,
and enable the checkbox for :guilabel:`Schedule & Tracks`.

.. image:: event_tracks/track-settings.png

Once enabled, two additional options appear beneath it:

- :guilabel:`Live Broadcast`: :ref:`Broadcast tracks online
  <events/additional-configs/live-broadcasting>` through a *YouTube* integration.
- :guilabel:`Event Gamification`: :ref:`Share quizzes with attendees
  <events/additional-configs/event-gamification>` after a track concludes.

Once all desired settings have been enabled, click the :guilabel:`Save` button in the corner of the
:guilabel:`Settings` page.

.. _events/tracks-dashboard:

Event tracks dashboard
======================

To access, modify, or create tracks for an event, open the :menuselection:`Events app` and either
select an existing event from the :guilabel:`Events` dashboard or :doc:`create a new one
<../event_setup/create_events>`.

On the selected event form, click the :icon:`fa-microphone` :guilabel:`Tracks` smart button at the
top to land on the *Event Tracks* page, which presents all scheduled and proposed tracks for the
event.

.. _events/tracks-dashboard/views:

Views
-----

The :guilabel:`Event Tracks` page can be displayed in six different views:

.. tabs::

   .. tab:: Kanban

      By default, the :guilabel:`Event Tracks` page opens in the :icon:`oi-view-kanban`
      :guilabel:`(Kanban)` view, providing users an at-a-glance overview of all tracks for the
      selected event.

      .. image:: event_tracks/event-tracks-page.png
         :alt: Typical event tracks page for an event in the Odoo Events application.

      In the default :icon:`oi-view-kanban` :guilabel:`(Kanban)` view, the tracks are categorized
      into several modifiable stages: :guilabel:`Proposal` :guilabel:`Confirmed`,
      :guilabel:`Announced`, :guilabel:`Published`, :guilabel:`Refused` (collapsed), and
      :guilabel:`Cancelled` (collapsed).

      Records displayed in the Kanban can be narrowed down using :ref:`grouping
      <events/tracks-dashboard/group>` and :ref:`filter <events/tracks-dashboard/filter>` options.

      For more information about using the Kanban view, see the :ref:`Kanban
      <studio/views/multiple-records/kanban>` documentation.

   .. tab:: List

      The :icon:`oi-view-list` :guilabel:`(List)` view displays a detailed list of all tracks for
      the selected event in a centralized view. Each track is displayed on a line along with its
      :guilabel:`Title`, the speaker's :guilabel:`Name`, :guilabel:`Email`, :guilabel:`Phone`, and
      the track's :guilabel:`Stage`.

      .. image:: event_tracks/track-page-list.png
         :alt: List view in the events tracks page for an event.

      Records displayed in the List view can be narrowed down using :ref:`grouping
      <events/tracks-dashboard/group>` and :ref:`filter <events/tracks-dashboard/filter>` options.

      For more information about using the List view, see the :ref:`List
      <studio/views/multiple-records/list>` documentation.

   .. tab:: Gantt

      The :icon:`fa-tasks` :guilabel:`(Gantt)` view displays all tracks as horizontal bars against
      an adjustable timeline, providing the user a chronological view of their tracks' progress.

      .. image:: event_tracks/track-page-gantt.png
         :alt: Gantt view in the events tracks page for an event.

      Records displayed in the List view can be narrowed down using :ref:`grouping
      <events/tracks-dashboard/group>` and :ref:`filter <events/tracks-dashboard/filter>` options.

      For more information about using the Gantt view, see the :ref:`Gantt
      <studio/views/timeline/gantt>` documentation.

   .. tab:: Calendar

      The :icon:`fa-calendar` :guilabel:`(Calendar)` view displays all tracks for the selected event
      as clickable entries in a calendar view, providing users an interactive schedule by day, week,
      month, or year.

      .. image:: event_tracks/track-page-calendar.png
         :alt: Calendar view in the events tracks page for an event.

      Records displayed in the Calendar view can be narrowed down using :ref:`filter
      <events/tracks-dashboard/filter>` options.

      For more information about using the Calendar view, see the :ref:`Calendar
      <studio/views/timeline/calendar>` documentation.

   .. tab:: Graph

      The :icon:`fa-area-chart` :guilabel:`(Graph)` view allows users to visually compare
      tracks-related data for the selected event using multiple different charts.

      .. image:: event_tracks/track-page-graph.png
         :alt: Graph view in the events tracks page for an event.

      Records displayed in the Graph view can be narrowed down using :ref:`grouping
      <events/tracks-dashboard/group>` and :ref:`filter <events/tracks-dashboard/filter>` options.

      For more information about using the Graph view, see the :ref:`Graph
      <studio/views/reporting/graph>` documentation.

   .. tab:: Activity

      The :icon:`fa-clock-o` :guilabel:`(Activity)` view displays a table of all scheduled
      activities linked to tracks for the selected event.

      .. image:: event_tracks/track-page-activity.png
         :alt: Activity view in the events tracks page for an event.

      Records displayed in the Activity view can be narrowed down using :ref:`filter
      <events/tracks-dashboard/filter>` options.

      For more information about using the Activity view, see the :ref:`Activity
      <studio/views/general/activity>` documentation.

.. _events/tracks-dashboard/filter:

Filter options
~~~~~~~~~~~~~~

The :guilabel:`Filters` column in the search bar's drop-down menu filters track-related data by
specific criteria in any given view. Multiple filters can be selected at once.

The :guilabel:`Filters` column has the following options:

- :guilabel:`My Tracks`: Filter by tracks with the *Responsible* user set to the current user
  profile.
- :guilabel:`Published`: Filter by published tracks.
- :guilabel:`Always Wishlisted`: Filter by tracks with the *Always Wishlisted* field enabled.
- :guilabel:`Track Date`: Filter by a specific track date. Click the :icon:`fa-caret-down`
  :guilabel:`(down)` arrow to reveal a list of month, quarter, and year options.
- :guilabel:`Archived`: Filter by archived tracks.
- :guilabel:`Custom Filter...`: Create and apply a :ref:`custom filter <search/custom-filters>`.

.. _events/tracks-dashboard/group:

Group By options
~~~~~~~~~~~~~~~~

The :guilabel:`Group By` column in the search bar's drop-down menu groups track-related data by
specific criteria in the Kanban, List, Gantt, and Graph views only. Multiple grouping options can be
selected at once.

The :guilabel:`Group By` column has the following options:

- :guilabel:`Responsible`: Group data by the *Responsible* user specified across all tracks.
- :guilabel:`Stage`: Group data by stage.
- :guilabel:`Date`: Group data by a specific date. Click the :icon:`fa-caret-down`
  :guilabel:`(down)` arrow to reveal a list of day, week, month, quarter, and year options.
- :guilabel:`Event`: Group data by event.
- :guilabel:`Location`: Group data by location.
- :guilabel:`Custom Group...`: Group data by a :ref:`custom group <search/group>`.

.. _events/event_tracks/create-track:

Create event track
==================

To create a new event track, click :guilabel:`New` in the corner to reveal a blank *Event Track*
form.

.. image:: event_tracks/event-track-form.png
   :alt: Typical event track form in the Odoo Events application.

Start by giving this track a :guilabel:`Title`. This field is **required**.

Optionally, upload an image for the track to be displayed on the track's webpage.

Next, enter details for the track in the following fields:

- :guilabel:`Track Date`: Using the calendar pop-over, specify the date and time of the track.
- :guilabel:`Location`: Using the drop-down menu, specify the track location.
- :guilabel:`Duration`: Enter the duration of the track in a `HH:MM` format.
- :guilabel:`Always Wishlisted`: Specify whether to automatically set the track as favorite for each
  registered attendee.
- :guilabel:`Responsible`: Select the database user responsible for managing the track. By default,
  this field is assigned to the user who initially created the track.
- :guilabel:`Event`: Select the track's associated event. By default, this field is already
  populated with the event from the *Event Tracks* page.
- :guilabel:`Tags`: Select one or multiple tags for the track to add as filters on the *Talks*
- :guilabel:`Tags`: Select any relevant tags for the track to add as filters on the *Talks* webpage.
- :guilabel:`Agenda Color`: Select a color to represent the track on the *Agenda* webpage.

.. tip::
   Locations can be used to designate names to physical areas (e.g., conference rooms, building
   levels) of an event venue, allowing users to :ref:`display track locations
   <events/additional-configs/location-display>` at in-person events.

   To access a complete list of locations for event tracks, which can be modified (and added to) at
   any time, navigate to :menuselection:`Events app --> Configuration --> Track Locations`.

.. _events/track-speaker-tab:

Speaker tab
-----------

The *Speaker* tab on an event track form contains various fields to configure information about the
track host or speaker.

.. image:: event_tracks/speaker-tab.png
   :alt: The Speaker tab on an event track form in the Odoo Events application.

Contact details section
~~~~~~~~~~~~~~~~~~~~~~~

In the *Contact Details* section, click the :guilabel:`Contact` drop-down field to select an
existing contact from the database as the main point of contact for the talk.

If this contact is not yet in the database, type in the name of the contact, and click
:guilabel:`Create` to create and edit the contact form later. Or, click :guilabel:`Create and
edit...` to add the contact and configure the rest of the contact details.

Click the event track breadcrumb to return to the *Event Track* form. The :guilabel:`Contact Email`
and :guilabel:`Contact Phone` fields are populated with the information on the selected contact
form. These fields **cannot** be modified.

Speaker bio section
~~~~~~~~~~~~~~~~~~~

In the *Speaker Bio* section, enter any information related to the specific speaker scheduled to
conduct or host the track.

If the chosen contact in the *Contact Details* section is properly configured, the :guilabel:`Name`,
:guilabel:`Email`, and :guilabel:`Phone` fields are automatically populated. Otherwise, manually
enter the information.

.. note::
   This information appears on the front-end of the event website, on the specific track webpage,
   providing more information about the speaker to the track attendees.

Optionally, upload an image to appear alongside the speaker biography on the event website.

Then, enter a :guilabel:`Job Position` for the designated speaker, followed by the
:guilabel:`Company Name` associated with the speaker.

In the :guilabel:`Biography` field, proceed to enter a custom biography with any speaker-related In
the :guilabel:`Biography` field, enter a custom biography with any speaker-related information.

.. _events/track-description-tab:

Description tab
---------------

The *Description* tab of an event track form contains a blank text field to enter any additional
information about the track. This information appears on the specific track page on the event
website.

.. _events/track-interactivity-tab:

Interactivity tab
-----------------

The *Interactivity* tab of the track form provides users with the option to display an interactive
button for additional attendee engagement.

.. image:: event_tracks/interactivity-tab.png
   :alt: The Interactivity tab on an event track form in the Odoo Events application.

When the :guilabel:`Magic Button` checkbox is enabled, Odoo displays a *call to action* button for
attendees on the sidebar of the track webpage while the track is taking place.

When enabled, three more options appear below to configure the button:

- :guilabel:`Button Title`: Enter a name for the button.
- :guilabel:`Button Target URL`: Enter the URL the button navigates to.
- :guilabel:`Show Button`: Enter how many :guilabel:`minutes after Track start` the button should
  appear.

.. note::
   The magic button **only** appears if there is more than one published track.

Publish event track
===================

Once all the desired configurations are complete on an event track form, publish the track in one of
three ways:

- On the individual *Track* page. Click the :guilabel:`Published` stage above the form.
- On the main *Event Tracks* dashboard. Drag-and-drop the Kanban card to the :guilabel:`Published`
  stage.
- On the *Event Track* webpage. On the *Event Track* form, click the :icon:`fa-globe` :guilabel:`Go
  to Website` smart button. Then, toggle the :guilabel:`Unpublished` :icon:`fa-toggle-off` button at
  the top of the page. The button changes to :guilabel:`Published` :icon:`fa-toggle-on` and the
  event is published. event website by clicking the :guilabel:`Published` stage in the upper corner.

.. image:: event_tracks/published-toggle.png
   :alt: The track-related event submenu options on an event website built with Odoo Events.

.. _events/additional-configs:

Additional configurations
=========================

Users can configure additional options on specific tracks, including live broadcasting,
gamification,  and displaying track schedules for specific events on physical screens at in-person
venues.

.. _events/additional-configs/live-broadcasting:

Live broadcasting
-----------------

If the :guilabel:`Live Broadcast` setting is enabled in the **Events** app settings, the option to
add a corresponding link in the :guilabel:`YouTube Video Link` field appears in the track form.

.. _events/additional-configs/event-gamification:

Event gamification
------------------

If the :guilabel:`Event Gamification` setting is enabled, an :guilabel:`Add Quiz` button appears at
the top of a track form, allowing the user to create a quiz for attendees to complete after the
track ends.

Track quiz form
~~~~~~~~~~~~~~~

To add a quiz to the event track, click the :guilabel:`Add Quiz` button. Doing so opens a form to
configure the quiz.

.. image:: event_tracks/add-quiz.png
   :alt: The Add Quiz page in the Odoo Events application for an event track.

Start by entering a title for the quiz in the blank field at the top of the page.

If participants are allowed to take the quiz multiple times, tick the checkbox beside
:guilabel:`Allow multiple tries`.

The :guilabel:`Event` and :guilabel:`Event Track` fields are automatically populated with the
corresponding event and track. These fields are non-modifiable.

Add questions and answers
*************************

To add questions to the quiz, click :guilabel:`Add a line` beneath the :guilabel:`Question` column.
Doing so reveals a :guilabel:`Create Questions` pop-up window.

.. note::
   **All** track quiz questions are multiple choice.

From the pop-up window, enter the question in the blank field at the top. Then, click :guilabel:`Add
a line` to add an answer option.

Optionally, fill in the following fields:

- :guilabel:`Correct`: Designate whether the option is the correct response.
- :guilabel:`Points`: Specify a point value for the answer option.
- :guilabel:`Extra Comment`: Add any additional comments that should accompany the answer option.

.. image:: event_tracks/create-questions.png
   :alt: The Create Questions pop-up window on an event-specific track quiz in the Odoo Events app.

Once all desired answer options are completed, click :guilabel:`Save & Close` to save the question,
close the pop-up window, and return to the track quiz form. Or, click :guilabel:`Save & New` to save
this question and instantly start creating another question on a new :guilabel:`Create Questions`
pop-up form.

.. _events/additional-configs/location-display:

Track location display
----------------------

When a :guilabel:`Location` is specified on a :ref:`track form <events/event_tracks/create-track>`,
Odoo generates a display page showing all scheduled tracks at the specified location, starting from
the user's current date and time. This page can be left open on a screen or kiosk at the physical
location.

Configuration
~~~~~~~~~~~~~

To begin, ensure that the *Event Location Display* module is installed in Odoo **Apps**.

Additionally, to ensure that a track appears on the display page, verify that the following options
are configured:

- The :guilabel:`Showcase Tracks` option is enabled for the track's respective event.
  :doc:`Developer mode <../../../general/developer_mode>` **must** be enabled to access this setting
  on an event form.
- Both the event website **and** the track must be published.

Access location displays
~~~~~~~~~~~~~~~~~~~~~~~~

To access track location pages, click the :icon:`fa-map-marker` :guilabel:`Track Locations` smart
button at the top of an event form. This opens the *Event Locations* dashboard, which lists each
:guilabel:`Location` and its :guilabel:`Location Display Link`.

.. image:: event_tracks/event-locations.png
   :alt: Event Locations page in Odoo Events.

Click the :guilabel:`Location Display Link` to open the location's display page. The date and
location name are displayed at the upper corner. Upcoming tracks are displayed below, including
their scheduled time, title, and speaker name.

.. note::
   Track location display pages are **only** accessible to database users or administrators.

.. image:: event_tracks/track-location-display.png
   :alt: Track location display for an event location.

.. seealso::
   - :doc:`../event_setup/create_events`
   - :doc:`../attendee_experience/track_manage_talks`
