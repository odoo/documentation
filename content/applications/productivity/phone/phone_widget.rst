.. |VOIP| replace:: :abbr:`VoIP (Voice over Internet Protocol)`

============
Phone widget
============

The **Phone** widget is a companion to the **Phone** app that can be used to :ref:`handle calls
<phone/phone_widget/handle-calls>` and :ref:`manage related records
<phone/phone_widget/manage-related-records>`. The widget stays open when navigating other Odoo apps,
turning voice communication into a seamless part of the Odoo workflow.

.. _phone/phone_widget/navigation:

Navigation
==========

To open the **Phone** widget, click the :icon:`oi-voip` :guilabel:`(Show Softphone)` icon in the top
corner of the screen. The widget also opens when clicking :icon:`fa-phone` :guilabel:`Call` next to
a contact's phone number to initiate a call.

Click the :icon:`oi-voip` :guilabel:`(Hide Softphone)` icon again to close the widget.

The **Phone** widget contains four tabs:

- :icon:`oi-numpad` :guilabel:`Keypad`: Makes :ref:`outbound calls
  <phone/phone_widget/outbound-call>`. Use the numeric keypad to dial a number, or type a name or
  number to search for a contact. Click the :icon:`fa-globe` and/or :guilabel:`(country flag)` icon
  to fill in a country code.
- :icon:`fa-history` :guilabel:`Recent`: Lists recent :ref:`inbound calls
  <phone/phone_widget/inbound-call>` and :ref:`outbound calls <phone/phone_widget/outbound-call>` on
  the account, grouped by date. Click a call from the list to see the contact's phone number and
  company name, and click the :icon:`fa-list-ul` :guilabel:`(Open full history)` icon to view the
  full call history in the **Phone** app.
- :icon:`fa-address-book-o` :guilabel:`Contacts`: Lists :doc:`contacts <../../essentials/contacts>`
  that have a saved phone number. Click the :icon:`fa-phone` :guilabel:`(Call)` icon next to a
  contact to call them, or click the contact's name to view their company name and phone number.
- :icon:`fa-clock-o` :guilabel:`Activities`: Lists call :doc:`activities
  <../../essentials/activities>` assigned to the user, grouped by due date.

.. _phone/phone_widget/configuration:

Configuration
=============

To make calls through the **Phone** widget, enable microphone and speaker access in the browser
settings.

Click the :icon:`fa-microphone` :guilabel:`(microphone)` icon at the top of the widget and select
:guilabel:`Click to Activate`, then click :guilabel:`Use Microphone` to open the browser settings.
In the settings, select the option to allow access. When microphone and speaker access is allowed,
the icon has a purple :icon:`fa-cog` icon :guilabel:`(Audio settings)`.

If the Odoo database does not have permission to access the microphone and speaker, the
:icon:`fa-microphone` :guilabel:`(microphone)` icon at the top of the widget has a red
:icon:`fa-exclamation-circle` icon :guilabel:`(Microphone access has not been granted yet)` instead.

.. _phone/phone_widget/handle-calls:

Handle calls
============

.. _phone/phone_widget/outbound-call:

Make an outbound call
---------------------

To make an outbound call, click the :icon:`oi-voip` :guilabel:`(Show Softphone)` icon to open the
**Phone** widget. Select a contact or activity, then click the :icon:`fa-phone` :guilabel:`(Call)`
icon next to that entry to start the call. Use the :ref:`Contacts or Keypad tabs
<phone/phone_widget/navigation>` to search for a specific contact by name or number.

.. tip::
   Calls can also be initiated by hovering over a phone number in a record, then clicking the
   :icon:`fa-phone` :guilabel:`(Call)` button.

.. _phone/phone_widget/inbound-call:

Receive an inbound call
-----------------------

When receiving an inbound call in Odoo, the **Phone** widget rings and displays a notification. To
hide the widget, click the :icon:`fa-window-minimize` :guilabel:`(Hide)` icon in the top corner of
the widget screen.

.. _phone/phone_widget/active-call-controls:

Active call controls
--------------------

During an active call, the contact and the call duration are displayed, as well as the
:guilabel:`Create`, :guilabel:`Go to`, and :guilabel:`Log` :ref:`related record menus
<phone/phone_widget/manage-related-records>`.

The call can be managed using the following controls:

- :icon:`oi-transfer` :guilabel:`Transfer`: Transfer the call to another user or phone number.
- :icon:`fa-plus` :guilabel:`Add Call`: Add another call to make it a conference call.
- :icon:`fa-pause` :guilabel:`Hold`: Put the call on hold. Click again to end the hold.
- :icon:`oi-record` :guilabel:`Record`: Start recording the call. Click again to stop recording.
- :icon:`fa-microphone-slash` :guilabel:`Mute`: Mute the microphone. Click again to unmute.
- :icon:`fa-phone fa-rotate-135` :guilabel:`Hang up`: End the call.
- :icon:`oi-numpad` :guilabel:`Keypad`: Open the numeric keypad to dial another number.

.. _phone/phone_widget/transfer-call:

Transfer a call
---------------

To transfer an active call, follow the steps below:

#. Click :icon:`oi-transfer` :guilabel:`Transfer` and the contact list appears.
#. Search for a contact to transfer the call to, or click the :icon:`oi-numpad` :guilabel:`Keypad`
   to dial a number.
#. Click :icon:`oi-transfer` :guilabel:`Transfer` again.
#. Select one of three options:

   - :guilabel:`Direct Transfer`: Transfer the call immediately without speaking to the selected
     contact.
   - :guilabel:`Ask First`: Speak to the selected contact before transferring the call. Click
     :icon:`oi-transfer` :guilabel:`Confirm Transfer` to complete the transfer, or click
     :icon:`fa-phone fa-rotate-135` :guilabel:`Hang up` to cancel the transfer.
   - :guilabel:`Cancel transfer`: Cancel the transfer and return to the contact selection screen.
     Click :icon:`oi-arrow-left` :guilabel:`(Back)` to return to the active call.

If the user does not pick up the call or is busy with another call, calls may be automatically
transferred depending on the |VOIP| service provider configuration.

.. _phone/phone_widget/switch-devices:

Move a call to another device
-----------------------------

Calls can be switched to another device signed into the same account. This is helpful for moving a
call from a desktop to a mobile device for portable use, or moving a call from a mobile device to a
desktop for screen sharing. During a call, the **Phone** widget on other devices displays *Active
call(s) on another device*.

Click :guilabel:`Switch here` on another device to move the call to that device.

.. _phone/phone_widget/crm-calls:

Add and remove CRM calls
------------------------

Call activities can be added and removed from the :doc:`CRM Pipeline <../../sales/crm>` without
opening the opportunity record.

To add a **CRM** call activity from the queue, open the **CRM** app and select the :ref:`Kanban view
<studio/views/multiple-records/kanban>`. Hover over the desired opportunity, then click the
:icon:`fa-phone` :guilabel:`(phone)` icon with a green plus :icon:`fa-plus` :guilabel:`(Add to Call
Queue)`. The call activity for the opportunity appears in the :guilabel:`Activities` tab.

To remove a **CRM** call activity from the queue, hover over the opportunity and click the
:icon:`fa-phone` :guilabel:`(phone)` icon with a red minus :icon:`fa-minus` :guilabel:`(Remove from
Call Queue)` icon. The call activity for the opportunity disappears from the :guilabel:`Activities`
tab.

.. note::
   Moving calls to another device is not supported in demo mode.

.. _phone/phone_widget/manage-related-records:

Manage related records
======================

Select a record in the :guilabel:`Recent`, :guilabel:`Contacts`, or :guilabel:`Activities` tab to
view the following drop-down action menus:

- :icon:`fa-plus` :guilabel:`Create`: Create a lead, ticket, applicant, or task related to the
  contact record.
- :icon:`fa-ellipsis-v` :guilabel:`Go to`: Send an email or SMS, and open records related to the
  contact. Depending on the type of contact, this can include call details, contacts, leads,
  tickets, tasks, sales, and subscriptions.
- :icon:`fa-history` :guilabel:`Log (Recents tab only)`: Log the call as an activity in a related
  record.
- :icon:`fa-clock-o` :guilabel:`Activity (Activities tab only)`: Complete, edit, or cancel the
  activity.

.. _phone/phone_widget/troubleshooting:

Troubleshooting
===============

Each section below goes through common issues with the **Phone** widget and how to resolve them.

.. _phone/phone_widget/missing-parameter:

Missing parameter
-----------------

If a *Missing Parameter* error message appears in the **Phone** widget, refresh the window, and try
again.

.. _phone/phone_widget/incorrect-number:

Incorrect number
----------------

If an *Incorrect Number* error message appears in the **Phone** widget, make sure to use the
international format, leading with the :icon:`fa-plus` :guilabel:`(plus)`, followed by the
international country code (e.g., +15555555555, where `+1` is the international prefix for the
United States.)

.. _phone/phone_widget/websocket-connection-lost:

The websocket connection with the server has been lost
------------------------------------------------------

If a *The websocket connection with the server has been lost. Please try to refresh the page.* error
message appears in the **Phone** widget, then refresh the page close other browser tabs.

This error is caused by returning to the database after a period of inactivity, like lunch, or if
there are too many browser tabs open.

.. _phone/phone_widget/failed-to-start-user-agent:

Failed to start the user agent
------------------------------

If a *Failed to start the user agent. The URL of the websocket may be wrong. Please have an
administrator verify the websocket server URL in the General Settings.* error message appears in the
*Phone* widget, then update the browser and computer.

This error is caused by the browser or computer not being up-to-date (and can also cause issues with
the microphone).

.. _phone/phone_widget/grayed-out-phone-widget:

Grayed-out Phone widget
-----------------------

If the **Phone** widget is completely grayed out and cannot be interacted with, then update the
browser and computer, and delete the Google Chrome extension causing the problem.

.. _phone/phone_widget/cannot-connect-to-voip:

Cannot connect to the VoIP phone number
---------------------------------------

If the user cannot connect to their |VOIP| phone number, then their Odoo profile is missing their
|VoIP| :guilabel:`Secret`. To add it, :menuselection:`Settings app --> Users & Companies --> Users`
select the user, and click the *VoIP* tab. Under the *Credentials* section, enter the user's
:guilabel:`Secret`. This is the user's password to their account for their |VOIP| service provider.
