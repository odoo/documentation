=============================
Voicemails and audio messages
=============================

.. _axivox_admin: https://manage.axivox.com/

Managing voicemail is an important part of any business. A company needs to access their messages
with ease, and stay on top of any missed calls. Recording audio messages, like thanking a caller for
reaching out, or directing them to the right extension, is also a great way to personalize the
business interaction, and set the tone with the customer.

This document covers the configuration of both voicemail and audio messages in the Axivox
administrative portal.

.. _voip/axivox/global_language:

Set global language
===================

To start using voicemails and audio messages with Axivox, the global language should be set in the
Axivox admin portal settings. To do that, navigate to `manage.axivox.com <axivox_admin_>`_. After
logging into the portal, go to :menuselection:`Settings --> Global language (e.g.: voicemail
messages,...)`.

From here, set the language to either: :guilabel:`Francais`, :guilabel:`English`,
:guilabel:`Espanol`, or :guilabel:`Deutsch`.

Then, click :guilabel:`Save`, followed by :guilabel:`Apply changes` in the upper-right corner of the
:guilabel:`General Settings` page to implement the change into production.

.. _voip/axivox/activate_voicemail:

Activate voicemail
==================

In order for a user to utilize voicemail in Axivox, the voicemail feature **must** be turned on in
the Axivox administrative portal. To begin using voicemail with a user, navigate to
`manage.axivox.com <axivox_admin_>`_. Then, log in with the appropriate administrator credentials.

On the left menu of the Axivox administrative panel, click into :guilabel:`Users`.

Then, click into the specific user the voicemail should be activated for. Under the section marked,
:guilabel:`Voicemail`, open the drop-down menu, and click on :guilabel:`Yes`.

Lastly, :guilabel:`Save` the change, then click :guilabel:`Apply changes` in the upper-right corner
of the screen.

Voicemail
=========

The next step is to set up the individual voicemail boxes on the Axivox administrative portal. To
access the portal, visit `manage.axivox.com <axivox_admin_>`_ and log in. Then, navigate to
:menuselection:`Voicemails`, located in the menu on the left.

If the voicemail option was activated in the user profile, using this process
:ref:`voip/axivox/activate_voicemail`, then a voicemail is automatically created on the
:guilabel:`Voicemails` page.

.. tip::
   It should be noted that some of the administrative portal language is in French, as Axivox is a
   Belgian company. The global language is still set to one of the four options as seen here:
   :ref:`voip/axivox/global_language`.

Manually create voicemail
-------------------------

To manually create a new voicemail box, click :guilabel:`Add a voicemail` on the
:guilabel:`Voicemails` page. Or, edit an existing voicemail box, by clicking :guilabel:`Edit` to the
far-right of an existing voicemail box on the :guilabel:`Voicemails` page.

.. example::
   Suppose a sales or support team needs a general voicemail box. The voicemail would need to be
   created manually, and attached to an incoming number.

The new, manually-created voicemail box should be attached to an incoming number, so it can receive
messages. To do so, navigate to :menuselection:`Incoming numbers`, located in the menu on the left.
Then, click :guilabel:`Edit` to the far-right of the specific number the voicemail should be linked
to.

In the :guilabel:`Destination type for voice call` field, click the drop-down menu, and select
:guilabel:`Voicemail`. Then, open the drop-down menu on the next line labeled,
:guilabel:`Voicemail`, and select the manually-created voicemail box.

.. important::
   If an incoming number is capable of receiving SMS/text messages, an additional field,
   :guilabel:`Destination email address for Incoming SMS`, is present.

   To determine whether an incoming number is capable of receiving SMS/text messages, click
   :guilabel:`Incoming numbers` from the menu on the left, then check the :guilabel:`SMS compatible`
   column for the incoming number.

Then, if applicable, in the field labeled, :guilabel:`Destination email address for Incoming SMS`,
enter an email to which incoming text messages sent to the incoming number can be received. Some
incoming numbers (US +1) in Axivox are capable of receiving text messages from individuals and
automated numbers.

Should this field be left empty, the default destination address is used, instead (as previously set
in the beginning of the process for manually creating a voicemail).

Once all desired configurations are complete, click :guilabel:`Save`, then click :guilabel:`Apply
changes` in the upper-right corner of the screen to implement the change into production.

Notifications
-------------

Now, whenever a voicemail is received on any of the automatically pre-configured or manually-linked
voicemail boxes, an email is sent to the user's email address, as listed in the
:guilabel:`Voicemails` page, or in the user's Axivox profile.

This information can be accessed by navigating to :menuselection:`Users` in the left menu, and
clicking :guilabel:`Edit` next to the specific user in question.

.. _voip/axivox/vm_forwarding:

Forwarding to voicemail
=======================

In Axivox, there are also numerous forwarding settings for a user. To access these forwarding
settings, go to `manage.axivox.com <axivox_admin_>`_ and log in.

Next, navigate to :menuselection:`Users`, located in the menu on the left.

From there, click into the specific user the forwarding should be added to. Then, open the
:guilabel:`Forwardings` tab.

If the user is busy on another call, or away from the phone, there is an option present in this tab
to :guilabel:`Send to voicemail as a last resort`, located in the :guilabel:`Forwarding on no
answer` and :guilabel:`Forwarding on busy` fields.

.. image:: vm_audio_messages/forwardings.png
   :align: center
   :alt: Send to voicemail as a last resort options highlighted on the Forwardings tab of the user.

If the :guilabel:`Send to voicemail as a last resort` box is ticked, when the forwarding actions
stated in each section are not successful, the caller is routed to the voicemail set on the
particular user.

.. seealso::
   For more information on forwarding and transfers, visit :ref:`voip/axivox/forwardings_tab`.

When all the desired configurations are complete, click :guilabel:`Save`, then click
:guilabel:`Apply changes` in the upper-right corner of the screen to implement the change.

.. _voip/axivox/audio_messages:

Audio messages
==============

It is possible to add audio messages *before* a customer's call is even taken, to inform them about
the waiting time for deliveries, the availability of a product, or any other important promotional
messages.

To record an audio message in Axivox, navigate to `manage.axivox.com <axivox_admin_>`_ and log in.

Next, click on :guilabel:`Audio messages` in the menu on the left. From the :guilabel:`Audio
messages` page, click :guilabel:`Add a message`.

Type in a :guilabel:`Name`, and click :guilabel:`Save`.

Upon clicking :guilabel:`Save`, the browser redirects back to the main :guilabel:`Audio messages`
page, where the newly-created message can be found on the list.

There are two different ways to make the audio message. The user could either record the message
over the phone, or type the message (in text), and select a computer-generated speaker to read the
message.

Record audio message
--------------------

To record an audio message over the phone, click the orange button labeled,
:guilabel:`Record/Listen`, located to the right of the desired message on the list to record, on the
:guilabel:`Audio messages` page.

When clicked, a :guilabel:`Record / listen to a message` pop-up window appears. From here, the
message is then recorded, via one of the extensions that is associated with the user. Under
:guilabel:`Extension to use for message management` field, click the drop-down menu, and select the
extension where Axivox should call to record the message.

Then, click :guilabel:`OK` to begin the call.

.. note::
   The user **must** be active in the production database with :abbr:`VoIP (Voice over Internet
   Protocol)` configured. To configure :abbr:`VoIP (Voice over Internet Protocol)` for a user, see
   this documentation: :doc:`axivox_config`.

Upon connecting to the Axivox audio recorder management line, a recorded French-speaking operator
provides the following options:

#. Press `1` to record a message.
#. Press `2` to listen to the current message.

Press either `1` or `2`, depending on whether or not there is already a message present in the
system for this particular audio message that requires a review, before recording a new one.

Record the new audio message after pressing `1`, then press `#` to end the recording.

The French-speaking operator returns to the line presenting the first set of questions again:

#. Press `1` to record a message.
#. Press `2` to listen to the current message.

Press `#` to end the call.

Write audio message
-------------------

To type the message, and select a computerized speaker to say the text, navigate to the
:menuselection:`Audio messages` in the menu on the left.

From the :guilabel:`Audio messages` page, select the blue button labeled, :guilabel:`Text message`,
next to the corresponding audio message :guilabel:`Name` that the message should be attached to.

Doing so reveals a :guilabel:`Convert text to message` pop-up window.

From the :guilabel:`Convert to text message` pop-up window, click the drop-down menu next to the
field labeled, :guilabel:`Voice`, and select an option for the :guilabel:`Text` to be read in.

After the :guilabel:`Voice` selection has been made, and the message has been written in the
:guilabel:`Text` field, click :guilabel:`Generate` to process the audio file.

The text is read in the same language it is written in the :guilabel:`Text` field. Should the
language differ in the :guilabel:`Voice` field, then an accent is used by the computerized speaker.

Finally, when these steps are complete, click :guilabel:`Save` to save the audio message.

To implement the changes, click :guilabel:`Apply changes` in the upper-right corner of the screen.

.. image:: vm_audio_messages/sample-message.png
   :align: center
   :alt:  Convert text to message window with voice, text, generate button and save highlighted.

.. tip::
   To set a greeting or audio message in a dial plan element double-click on the element. This could
   be a :guilabel:`Play a file` element, or a :guilabel:`Menu` element, in which the caller should
   encounter an urgent message, or a dial-by-number directory.

   For more information on dial plans see this documentation: :doc:`dial_plan_basics` or
   :doc:`dial_plan_advanced`.

.. _voip/axivox/music_on_hold:

Music on-hold
=============

Axivox has the option to add custom hold music to the call whenever a caller is waiting for their
call to be answered. To add hold music to the Axivox administrative portal, navigate to the
`manage.axivox.com <axivox_admin_>`_, and log in.

Then, click on :guilabel:`Music on hold` from the menu on the left, and a :guilabel:`Change the
music on hold` pop-up window appears.

On the :guilabel:`Change the music on hold` pop-up window, click the :guilabel:`Choose File` button
to select an MP3 (MPEG Audio Layer 3) or WAV (Waveform Audio File Format ) file to be uploaded.

.. note::
   Only :abbr:`MP3 (MPEG Audio Layer 3)` or :abbr:`WAV (Waveform Audio File Format)` files can be
   uploaded to the Axivox administrative portal.

Once the file is selected, the :guilabel:`Progression` bar shows an upload status. When this
activity completes, the window can be closed, by clicking :guilabel:`Close`.

When the desired changes are complete, click :guilabel:`Apply changes` in the upper-right corner of
the screen.
