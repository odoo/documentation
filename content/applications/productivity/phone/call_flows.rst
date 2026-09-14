.. meta::
   :description: Call flows route inbound calls to the appropriate users, groups, queues, menus,
                 voicemail, or external numbers. This page covers the configuration required, the
                 nodes available in the call flow builder, and the process of designing a flow.

.. |VOIP| replace:: :abbr:`VoIP (Voice over Internet Protocol)`

==========
Call flows
==========

A *call flow* determines what happens to an inbound call when it reaches an Odoo phone number: who
it rings, which menu it plays, and where it goes if nobody answers. The **Phone** app provides a
*call flow builder* to design call routes as a diagram of nodes.

This article covers the :ref:`configuration <phone/call_flows/configuration>` required to use call
flows, the :ref:`nodes <phone/call_flows/nodes>` available in the *call flow builder*, and the
:ref:`process <phone/call_flows/design>` of designing a call flow.

.. _phone/call_flows/configuration:

Configuration
=============

Call flows require at least one phone number purchased through the Odoo Phone Service. To purchase a
number, go to :menuselection:`Phone app --> Phone Numbers --> Phone Numbers`.

The following resources can be attached to a call flow, and are managed under :menuselection:`Phone
--> Configuration`:

- :guilabel:`Extensions`: Internal numbers used to reach an Odoo Phone user directly.
- :guilabel:`Time Conditions`: Business hour schedules used to route calls differently when the
  business is open or closed.
- :guilabel:`Groups`: Sets of Odoo users that ring together.
- :guilabel:`Menus`: Interactive voice menus (IVRs) for self-service routing.
- :guilabel:`Queues`: Agent queues that calls wait in until an agent is available.
- :guilabel:`Voice Mailboxes`: Voicemail boxes tied to a user or a queue.
- :guilabel:`Sounds` and :guilabel:`Music on Hold`: Audio played to the inbound caller.

.. tip::
   These resources do not need to be configured in advance. Every node in the call flow builder can
   create a related record on the spot.

.. _phone/call_flows/nodes:

Call flow nodes
===============

Every call flow starts with a circular green :guilabel:`Start` node, representing the moment a call
comes in.

The following nodes can be added from the sidebar, either by clicking or dragging onto the canvas:

- :guilabel:`Call a User`: Rings a specific user, on their assigned extension or device.
- :guilabel:`Call a Contact`: Rings a phone number stored on a contact record.
- :guilabel:`Call a Group`: Rings every member of a call group at once.
- :guilabel:`Send to a Queue`: Places the caller in an agent queue until an agent is available.
- :guilabel:`Open a Menu`: Plays an interactive voice menu (IVR) that routes the caller based on the
  keys they press.
- :guilabel:`Play Audio`: Plays an uploaded or text-to-speech-generated audio message.
- :guilabel:`Send to Voicemail`: Forwards the caller directly to a voicemail box.
- :guilabel:`Redirect to an Extension`: Transfers the call to an internal extension number.
- :guilabel:`Redirect to an External Number`: Transfers the call to a number outside Odoo.
- :guilabel:`Time Condition`: Routes the call differently depending on whether it arrives during an
  :guilabel:`Open` period or a :guilabel:`Closed` period.
- :guilabel:`Hang Up`: Ends the call. Displays as a circular red node.

Use the pop-up window that appears to search for and select a related record, or click
:guilabel:`Create New` to add a record without leaving the flow.

For the :guilabel:`Redirect to an Extension` node, enter a phone number and click :guilabel:`Apply`.

.. _phone/call_flows/design:

Design a call flow
==================

To create a call flow, go to :menuselection:`Phone --> Configuration --> Call Flows` and click
:guilabel:`New`. Enter a :guilabel:`Name` for the flow, then complete the following steps:

#. **Add nodes**: Click a node in the sidebar, or drag it to the canvas. Select an existing record
   in the pop-up window, or click :guilabel:`Create New` to create a new record on the spot.
#. **Connect nodes**: Click and drag between the small circles on each node to create connections.
#. **Add ending nodes**: Make sure every branch ends with a :guilabel:`Hang Up`, :guilabel:`Send to
   Voicemail`, or :guilabel:`Redirect to an Extension/External Number` node.

.. tip::

   Use the zoom controls in the top corner of the canvas to navigate a large flow:

   - :icon:`fa-minus` :guilabel:`(Zoom out)`
   - :icon:`fa-expand` :guilabel:`(Fit to content)`
   - :icon:`fa-plus` :guilabel:`(Zoom in)`


When the call flow is ready, click the :icon:`fa-cloud-upload` :guilabel:`(Save manually)` icon,
then open the phone number that should use this flow and select the call flow in the :guilabel:`Call
Flow` form field.


.. _phone/call_flows/troubleshooting:

Troubleshooting
===============

.. _phone/call_flows/troubleshooting-no-numbers:

No Phone numbers yet
--------------------

When no phone number has been purchased yet, node pop-up windows display the :guilabel:`Buy a
Number` button instead of a list of records. Purchase a phone number using the Odoo Phone Service,
then reopen the node.

.. _phone/call_flows/troubleshooting-time-condition-closed:

Time Condition always takes the Closed branch
---------------------------------------------

A :guilabel:`Time Condition` node warns when it has no :guilabel:`Open` period configured, becacuse
every call will default to the :guilabel:`Closed` period flow regardless of when it arrives. Open
the node and add at least one open period to fix this.

.. _phone/call_flows/troubleshooting-old-members:

A queue or group node still shows old members
---------------------------------------------

Nodes refresh after the configuration is saved. If a node still displays outdated members or agents,
close and reopen the call flow to force a refresh.
