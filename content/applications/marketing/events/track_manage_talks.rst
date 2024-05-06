============================
Talks, proposals, and agenda
============================

With Odoo *Events*, users can utilize a fully-integrated event website, where attendees can quickly
access various tracks (talks, presentations, etc.), view entire agendas, and propose talks for the
event.

Event website
=============

To access an event website, navigate to the specific event form in the Odoo *Events* app, and click
the :guilabel:`Go to Website` smart button. Or, while on the Odoo-built website for the company,
click the :guilabel:`Events` header option, and select the desired event to view that event's
website.

On the event website, there is an event-specific subheader menu with different options to choose
from.

With the *Schedule & Tracks* setting enabled in the Odoo *Events* app, the following links are
automatically added to the subheader menu, located on the event website: :guilabel:`Talks`,
:guilabel:`Talk Proposals`, and :guilabel:`Agenda`.

.. image:: track_manage_talks/track-submenu-options.png
   :align: center
   :alt: The track-related event submenu options on an event website built with Odoo Events.

To enable the :guilabel:`Schedule & Tracks` setting, navigate to :menuselection:`Events app -->
Configuration --> Settings`, tick the checkbox beside :guilabel:`Schedule & Tracks`, and click
:guilabel:`Save`.

Talks page
----------

The :guilabel:`Talks` link takes the attendee to a page filled with all the planned tracks for the
event.

.. image:: track_manage_talks/talks-page.png
   :align: center
   :alt: The Talks page on an event website built through the Odoo Events application.

At the top of :guilabel:`Talks` page, there are drop-down filter menus beside a :guilabel:`Search
a talk...` search bar.

The first drop-down filter menu (with the starting title: :guilabel:`Favorites`) is the only
drop-down filter menu that appears by default. When clicked, the resulting menu presents two
options: :guilabel:`Favorites` and :guilabel:`All Talks`.

Selecting :guilabel:`Favorites` shows *only* the tracks that have been favorited by the attendee.

.. note::
   If no tracks have been favorited, and the :guilabel:`Favorites` filter is selected, Odoo presents
   all the event tracks.

Selecting :guilabel:`All Talks` shows *all* the tracks, regardless if they have been favorited or
not.

The other drop-down filter menus that appear on this page are related to any configured tags (and
tag categories) created for event tracks in the backend.

.. tip::
   To add tags and tag categories to track forms, open a desired event track form, and start typing
   a new tag in the :guilabel:`Tags` field. Then, click :guilabel:`Create and edit...` from the
   resulting drop-down menu.

   Doing so reveals a :guilabel:`Create Tags` pop-up form.

   .. image:: track_manage_talks/create-tags-popup.png
      :align: center
      :alt: The Create Tags pop-up form that coincides with drop-down filter menus on Talks page.

   From here, users see the recently added tag in the :guilabel:`Tag Name` field. Beneath that,
   there is an option to add a specific :guilabel:`Color Index` to the tag for added organization.

   Lastly, there is the :guilabel:`Category` field, where users can either select a pre-existing
   category for this new tag, or create a new one.

   All options in the :guilabel:`Category` field for tags appear as their own drop-down filter menu
   on the :guilabel:`Talks` page, located on the event website.

Beneath the drop-down filter menus at the top of the :guilabel:`Talks` page, there is a list of
planned tracks for the specific event, organized by day.

If an attendee wishes to favorite a track, they can click the :icon:`fa-bell-o` :guilabel:`(empty
bell)` icon, located to the right of the track title. Attendees will know a track has been favorited
when they notice the icon has been changed to :icon:`fa-bell` :guilabel:`(filled bell)` icon.

Favoriting a track this way places it on the list of :guilabel:`Favorites`, which is accessible from
the default drop-down filter menu, located at the top of the :guilabel:`Talks` page.

Talk Proposals page
-------------------

The :guilabel:`Talk Proposals` link takes attendees to a page on the event website, wherein they can
formerly submit a proposal for a talk (:dfn:`track`) for the event, via a custom online form.

.. image:: track_manage_talks/talk-proposals-page.png
   :align: center
   :alt: The Talk Proposals page on the event website built with the Odoo Events application.

In addition to the form, an introduction to the page, along with any other pertinent information
related to the types of talks the event will feature can be added, if needed.

The talk proposal form can be modified in a number of different ways, via the web builder tools,
accessible by clicking :guilabel:`Edit` while on the specific page.

Then, proceed to edit any of the default fields, or add new forms with the :guilabel:`Form` building
block (located in the :guilabel:`Blocks` section of the web builder tools sidebar).

Once all the necessary information is entered into the form, the attendees just need to click the
:guilabel:`Submit Proposal` button.

Then, that talk, and all the information entered on the form, can be accessed on the
:guilabel:`Event Tracks` page for that specific event in the :guilabel:`Proposal` stage, which is
accessible via the :guilabel:`Tracks` smart button on the event form.

At that point, an internal user can review the proposed talk, and choose to accept or deny the
proposal.

If accepted, the internal user can then move the track to the next appropriate stage in the Kanban
pipeline on the :guilabel:`Event Tracks` page for the event. Then, they can open that track form,
and click the :guilabel:`Go to Website` smart button to reveal that track's page on the event
website.

From there, they can toggle the :guilabel:`Unpublished` switch in the header to
:guilabel:`Published`, which allows all event attendees to view and access the talk.

Agenda page
-----------

The :guilabel:`Agenda` link takes attendees to a page on the event website, showcasing an event
calendar, depicting when (and where) events are taking place for that specific event.

.. image:: track_manage_talks/event-agenda-page.png
   :align: center
   :alt: The event Agenda page on the event website built with the Odoo Events application.

Clicking any track on the calendar takes the attendee to that specific track's detail page on the
event website.

If an attendee wishes to favorite a track, they can click the :icon:`fa-bell-o` :guilabel:`(empty
bell)` icon, located to the right of the track title. Attendees will know a track has been favorited
when they notice the icon has been changed to :icon:`fa-bell` :guilabel:`(filled bell)` icon.
