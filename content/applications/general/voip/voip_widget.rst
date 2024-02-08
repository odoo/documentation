===========
VoIP widget
===========

The *VoIP* widget is an add-on made available to Odoo users through the *VoIP* module. It is used to
incorporate virtual telephony into the database. The widget is the control center for making and
managing calls in Odoo.

Phone calls
===========

To make phone calls while in the Odoo database, click the :guilabel:`☎️ (phone)` icon, located in
the top navigation bar.

When clicked, a :guilabel:`VOIP` pop-up widget appears in the lower-left corner of the Odoo
database. The widget allows users to freely navigate throughout the database, while making and
receiving calls.

When receiving calls in Odoo, the :guilabel:`VOIP` widget rings,and displays a notification. To
close the widget, click the :guilabel:`X (close)` icon in the upper-right of the widget's screen.

.. note::
   The :abbr:`VoIP (Voice over Internet Protocol)` number is the one provided by Axivox. It can be
   accessed by navigating to `https://manage.axivox.com/ <https://manage.axivox.com/>`_. After
   logging into the portal, go to :menuselection:`Users --> Outgoing number` (column).

.. image:: voip_widget/call.png
   :align: center
   :alt: VoIP call in Odoo.

Troubleshooting
===============

.. tip::
   If a *Missing Parameter* error message appears in the Odoo *VoIP* widget, refresh the Odoo
   window, and try again.

   .. image:: voip_widget/missing-parameter.png
      :align: center
      :alt: "Missing Parameter" error message in the Odoo softphone.

.. tip::
   If an *Incorrect Number* error message appears in the Odoo *VoIP* widget, make sure to use the
   international format, leading with the :guilabel:`+ (plus)` sign, followed by the international
   country code.

   (E.g., +16506913277, where `+1` is the international prefix for the United States.)

   .. image:: voip_widget/incorrect-number.png
      :align: center
      :alt: "Incorrect Number" error message in the Odoo softphone.

Tabs
====

In all, there are three tabs (:guilabel:`Recent`, :guilabel:`Next Activities`, and
:guilabel:`Contacts`) present in the *VoIP* widget, which are used for managing calls and day-to-day
activities in Odoo.

Recent
------

Under the :guilabel:`Recent` tab of the *VoIP* widget, the call history for the user is available.
This includes incoming and outgoing calls. Any number can be clicked to begin a call.

Next activities
---------------

Under the :guilabel:`Next Activities` tab of the *VoIP* widget, a user can see any activities
assigned to them, and which ones are due to be completed for the day.

Click an activity from this tab to perform any actions including: Sending an email, accessing their
contact, scheduling another activity, or accessing a linked record (such as a Sales Order,
Lead/Opportunity, or Project Task).

The user can also mark the activity as complete, edit the details of the activity, or cancel it.

To call the customer related to a scheduled activity, click the :guilabel:`📞 (phone)` icon, or
click the :guilabel:`⌨️ (keyboard)` icon to dial another number for the customer.

.. image:: voip_widget/activity-widget.png
   :align: center
   :alt: Activity control center on the VoIP widget.

Some other icons appear in the *VoIP* widget, categorized by two sections: :guilabel:`Document` and
:guilabel:`Activity`.

Under the :guilabel:`Document` section, from right to left:

- :guilabel:`✉️ (envelope)` icon: sends an email
- :guilabel:`👤 (person icon)` icon: redirects to the contact card
- :guilabel:`📄 (document)` icon: redirects to the attached record in Odoo
- :guilabel:`🕓 (clock)` icon: schedule an activity

Under the :guilabel:`Activity` section, from left to right:

- :guilabel:`✔️ (checkmark)` icon: mark activity as done
- :guilabel:`✏️ (pencil)` icon: edit the activity
- :guilabel:`✖️ (cancel)` icon: cancel the activity

Contacts
--------

Under the :guilabel:`Contacts` tab of the *VoIP* widget, a user can access a contact in the
*Contacts* app.

Any contact can easily be called by clicking into the contact from the *VoIP* widget's
:guilabel:`Contacts` tab.

A search feature is also available in the upper-right side of the widget, represented by a
:guilabel:`🔍 (magnifying glass)` icon.
