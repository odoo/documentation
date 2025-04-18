:show-content:

================
Automation rules
================

Automation rules allow the execution of one or more predefined actions in response to a specific
trigger, e.g., create an activity when a field is set to a specific value, or archive a record 7
days after its last update.

To create an automation rule with **Studio**, proceed as follows:

#. :ref:`Open Studio <studio/access>` and click :guilabel:`Automations`, then :guilabel:`New`.
#. Name the automated action.
#. Select the :ref:`trigger <studio/automated-actions/trigger>` and, if necessary, fill in the
   fields that appear on the screen based on the chosen trigger.
#. Click :guilabel:`Add an action`, then select the :guilabel:`Type` of
   :ref:`action <studio/automated-actions/action>` and fill in the fields that appear on the screen
   based on your selected action.
#. Click :guilabel:`Save & Close` or :guilabel:`Save & New`.

.. important::
   For automation rules that require custom code, note that maintenance of custom code is not
   included in the *Standard* or *Custom* pricing plans and incurs :ref:`additional fees
   <charges_standard>`.

.. example::

   To ensure follow-up on less satisfied clients, this automation rule creates an activity three
   months after a sales order is created for clients with a satisfaction percentage lower than 30%.

   .. image:: automated_actions/create-activity-conditions.png
      :alt: Example of an automated action on the Subscription model

.. tip::
   - Name automation rules clearly and use the :guilabel:`Notes` section to document their
     purpose and functioning to facilitate maintenance and enhance collaboration between users.
   - To modify the :doc:`model <models_modules_apps>` targeted by the automation rule, switch models
     before clicking :guilabel:`Automations` in Studio, or :ref:`activate the developer mode
     <developer-mode>`, create or edit an automation rule, and select the :guilabel:`Model` in the
     :guilabel:`Automation Rules` form.
   - Automation rules can be created from any kanban stage by clicking the :icon:`fa-cog`
     :guilabel:`(Settings)` icon that appears when hovering over the kanban stage name, then
     selecting :guilabel:`Automations`. In this case, the :guilabel:`Trigger` is set to
     :guilabel:`Stage is set to` by default, but can be changed if necessary.

     .. image:: automated_actions/automations-kanban.png
        :alt: Create automations from a kanban stage

.. _studio/automated-actions/trigger:

Trigger
=======

The :guilabel:`Trigger` is used to define when the automation rule should be applied. The available
triggers depend on the :doc:`model <models_modules_apps>`. Five trigger categories are available
overall:

- :ref:`studio/automated-actions/trigger-values-updated`
- :ref:`studio/automated-actions/trigger-email-events`
- :ref:`studio/automated-actions/trigger-timing-conditions`
- :ref:`studio/automated-actions/trigger-custom`
- :ref:`studio/automated-actions/trigger-external`

.. _studio/automated_actions/before-update-domain:

.. tip::
   You can also define a :guilabel:`Before Update Domain` to specify the conditions that must be met
   *before* the automation rule is triggered. In contrast, the conditions defined using the
   :ref:`Extra Conditions <studio/automated-actions/trigger-timing-conditions>` and
   :ref:`Apply on <studio/automated-actions/trigger-custom>` filters are checked *during* the
   execution of the automation rule.

   To define a :guilabel:`Before Update Domain`, :ref:`activate the developer mode
   <developer-mode>`, create or edit an automation rule, click :guilabel:`Edit Domain`, then click
   :guilabel:`New Rule`.

   For example, if you want the automated action to happen when an email address is set on a
   contact that did not have an address before (in contrast to modifying their existing address),
   use :guilabel:`Email is not set` as the :guilabel:`Before Update Domain` and :guilabel:`Email is
   set` as the :guilabel:`Apply on` domain.

   .. image:: automated_actions/before-update-domain.png
      :alt: Example of a trigger with a Before Update Domain

.. _studio/automated-actions/trigger-values-updated:

Values Updated
--------------

Trigger automated actions when specific changes happen in the database. The triggers available in
this category depend on the model and are based on common changes, such as adding a specific tag
(e.g., to a task) or setting a field's value (e.g., setting the :guilabel:`User` field).

Select the trigger, then select a value if required.

.. _studio/automated-actions/trigger-email-events:

Email Events
------------

Trigger automated actions upon receiving or sending emails.

.. _studio/automated-actions/trigger-timing-conditions:

Timing Conditions
-----------------

.. important::
   By default, the scheduler checks for time-triggered automation rules every 240 minutes, or 4
   hours, meaning lower granularity in timing conditions may not always be honored.

Trigger automated actions at a point in time relative to a date field. The following triggers are
available:

- :guilabel:`Based on date field`: Select the field to be used next to the :guilabel:`Delay` field.
- :guilabel:`After creation`: The action is triggered a defined period of time after the creation
  of a record.
- :guilabel:`After last update`: The action is triggered when an existing record is edited and
  saved.

You can then define:

- a :guilabel:`Delay`: Specify the number of minutes, hours, days, or months. To trigger the action
  before the trigger date, specify a negative number. If you selected the :guilabel:`Based on date
  field` trigger, you must also select the date field to be used to determine the delay.
- :guilabel:`Extra Conditions`: Click :guilabel:`Add condition`, then specify the conditions to be
  met to trigger the automation rule. Click :guilabel:`New Rule` to add another condition.

The action is triggered when the delay is reached and the conditions are met.

.. example::
   To send a reminder email 30 minutes *before* the start of a calendar event, select the
   :guilabel:`Start (Calendar Event)` under :guilabel:`Trigger` and set the :guilabel:`Delay` to
   `-30` :guilabel:`Minutes`.

   .. image:: automated_actions/timing-conditions-trigger.png
      :alt: Example of a Based on date field trigger

.. _studio/automated-actions/trigger-custom:

Custom
------

Trigger automated actions:

- :guilabel:`On save`: when a record is saved;
- :guilabel:`On deletion`: when a record is deleted;
- :guilabel:`On UI change`: when a field's value is changed on the :ref:`Form view
  <studio/views/general/form>`, even before the record is saved.

For the :guilabel:`On save` and :guilabel:`On UI change` triggers, you **must** then select the
field(s) to be used to trigger the automation rule in the :guilabel:`When updating` field.

.. warning::
   If no field is selected in the :guilabel:`When updating` field, the automated action may be
   executed multiple times per record.

Optionally, you can also define additional conditions to be met to trigger the automation rule in
the :guilabel:`Apply on` field.

.. example::
   To trigger an automated action *upon* the creation of record, e.g., when a new contact is
   created, select the :ref:`On save <studio/automated-actions/trigger-custom>` trigger and use
   :guilabel:`ID is not set` as the :ref:`Before Update Domain
   <studio/automated_actions/before-update-domain>` and :guilabel:`ID is set` as the
   :guilabel:`Apply on` domain. Make sure the correct field is selected in the :guilabel:`When
   updating` field.

   When a new contact is saved, it is automatically assigned a database ID, thereby triggering the
   automation rule.

   .. image:: automated_actions/on-save-on-creation.png
      :alt: Example of a triggering an action upon creation of a record
      :scale: 80%

.. note::
   The :guilabel:`On UI change` trigger can only be used with the
   :ref:`studio/automated-actions/action-execute-code` action and only works when a modification is
   made manually. The action is not executed if the field is changed through another automation
   rule.

.. _studio/automated-actions/trigger-external:

External
--------

Trigger automated actions based on a specific event in an external system or application using a
:doc:`webhook <automated_actions/webhooks>`.

After the webhook is configured in Odoo, where the webhook's URL is generated and the target record
defined, it needs to be implemented in the external system.

   .. image:: automated_actions/webhook-update-record.png
      :alt: Example of a Based on date field trigger
      :scale: 80%

.. warning::
  It is *highly recommended* to consult with a developer, solution architect, or another technical
  role when deciding to use webhooks and throughout the implementation process. If not properly
  configured, webhooks may disrupt the Odoo database and can take time to revert.

.. note::
   It is also possible to set up an automated action that :ref:`sends data to a external system's
   webhook <studio/automated-actions/action-webhook>` when an event occurs in your Odoo database.

.. _studio/automated-actions/action:

Actions
=======

Once you have defined the automation rule's :ref:`trigger <studio/automated-actions/trigger>`, click
:guilabel:`Add an action` in the :guilabel:`Actions To Do` tab to define the action to be executed.

.. tip::
   You can define multiple actions for the same automation rule. By default, actions are executed in
   the order in which they were defined.

   This means, for example, that if you define an :guilabel:`Update record` action and then a
   :guilabel:`Send email` action, the email uses the updated values. However, if the :guilabel:`Send
   email` action is defined before the :guilabel:`Update record` action, the email uses the values
   set *before* the update action is run.

   To change the order of defined actions, click the :icon:`oi-draggable` (drag handle) icon beside
   an action and drag it to the desired position.

.. _studio/automated-actions/action-update-record:

Update Record
-------------

This action updates one of the record's (related) fields. Click the :guilabel:`Update` field and, in
the list that opens, select or search for the field to be updated; click the right arrow next to the
field name to access the list of related fields if needed.

If you selected a :ref:`many2many field <studio/fields/relational-fields-many2many>`, choose whether
the field must be updated by :guilabel:`Adding`, :guilabel:`Removing`, or :guilabel:`Setting it to`
the selected value or by :guilabel:`Clearing it`.

.. example::
   If you want the automated action to remove a tag from the customer record, set the
   :guilabel:`Update` field to :guilabel:`Customer > Tags`, select :guilabel:`By Removing`, then
   select the tag.

   .. image:: automated_actions/update-record-tags.png
      :alt: Example of an Update Record action

.. tip::
   Alternatively, you can also set a record's field dynamically using Python code. To do so, select
   :guilabel:`Compute` instead of :guilabel:`Update`, then enter the code to be used for computing
   the field's value. For example, if you want the automation rule to compute a custom
   :ref:`datetime field <studio/fields/simple-fields-date-time>` when a task's priority is set to
   `High` (by starring the task), you can define the trigger :guilabel:`Priority is set to` to
   `High` and define the :guilabel:`Update Record` action as follows:

   .. image:: automated_actions/update-record-compute.png
      :alt: Compute a custom datetime field using a Python expression

.. _studio/automated-actions/action-create-activity:

Create Activity
---------------

This action is used to schedule a new activity linked to the record. Select an :guilabel:`Activity
Type`, enter a :guilabel:`Title` and description, then specify when you want the activity to be
scheduled in the :guilabel:`Due Date In` field, and select a :guilabel:`User type`:

- To always assign the activity to the same user, select :guilabel:`Specific User` then add the user
  in the :guilabel:`Responsible` field;
- To target a user linked to the record dynamically, select :guilabel:`Dynamic User (based on
  record)` and change the :guilabel:`User Field` if necessary.

.. example::
   After a lead is turned into an opportunity, you want the automated action to set up a call for
   the user responsible for the lead. To do so, set the :guilabel:`Activity Type` to
   :guilabel:`Call` and the :guilabel:`User Type` to :guilabel:`Dynamic User (based on record)`.

   .. image:: automated_actions/create-activity-action.png
      :alt: Example of a Create Activity action

.. _studio/automated-actions/action-send-email-sms:

Send Email and Send SMS
-----------------------

These actions are used to send an email or a text message to a contact linked to a specific record.
To do so, select or create an :guilabel:`Email Template` or an :guilabel:`SMS Template`, then, in
the :guilabel:`Send Email As` or :guilabel:`Send SMS As` field, choose how you want to send the
email or text message:

- :guilabel:`Email`: to send the message as an email to the recipients of the :guilabel:`Email
  Template`.
- :guilabel:`Message`: to post the message on the record and notify the record's followers.
- :guilabel:`Note`: to send the message as an internal note visible to internal users in the
  chatter.
- :guilabel:`SMS (without note)`: to send the message as a text message to the recipients of the
  :guilabel:`SMS template`.
- :guilabel:`SMS (with note)`: to send the message as a text message to the recipients of the
  :guilabel:`SMS template` and post it as an internal note in the chatter.
- :guilabel:`Note only`: to only post the message as an internal note in the chatter.

.. _studio/automated-actions/action-send-whatsapp:

Send WhatsApp
-------------

.. important::
   To automate the sending of WhatsApp messages, one or more
   :ref:`WhatsApp templates <productivity/whatsapp/templates>` must be created.

This action is used to send a WhatsApp message to a contact linked to a specific record.
To do so, select the appropriate :guilabel:`WhatsApp Template` from the drop-down menu.

.. _studio/automated-actions/action-add-remove-followers:

Add Followers and Remove Followers
----------------------------------

This action is used to subscribe/unsubscribe existing contacts to/from the record.

.. _studio/automated-actions/action-create-record:

Create Record
-------------

This action is used to create a new record on any model.

Select the required model in the :guilabel:`Record to Create` field; it contains the current model
by default. Specify a :guilabel:`Name` for the record, and then, if you want to create the record on
another model, select a field in the :guilabel:`Link Field` field to link the record that
triggered the creation of the new record.

.. note::
   The dropdown list related to the :guilabel:`Link Field` field only contains :ref:`one2many fields
   <studio/fields/relational-fields-one2many>` existing on the current model that are linked to a
   :ref:`many2one field <studio/fields/relational-fields-many2one>` on the target model.

.. tip::
   You can create another automation rule with :ref:`studio/automated-actions/action-update-record`
   actions to update the fields of the new record if necessary. For example, you can use a
   :guilabel:`Create Record` action to create a new project task and then assign it to a specific
   user using an :guilabel:`Update Record` action.

.. _studio/automated-actions/action-execute-code:

Execute Code
------------

This action is used to execute Python code. You can write your code into the :guilabel:`Code` tab
using the following variables:

- `env`: environment on which the action is triggered
- `model`: model of the record on which the action is triggered; is a void recordset
- `record`: record on which the action is triggered; may be void
- `records`: recordset of all records on which the action is triggered in multi-mode; this may be
  left empty
- `time`, `datetime`, `dateutil`, `timezone`: useful Python libraries
- `float_compare`: utility function to compare floats based on specific precision
- `log(message, level='info')`: logging function to record debug information in ir.logging
  table
- `_logger.info(message)`: logger to emit messages in server logs
- `UserError`: exception class for raising user-facing warning messages
- `Command`: x2many commands namespace
- `action = {...}`: to return an action

.. tip::
   The available variables are described both in the :guilabel:`Code` and :guilabel:`Help` tabs.

.. _studio/automated-actions/action-webhook:

Send Webhook Notification
-------------------------

This action is used to send a `POST` API request with the values of the selected :guilabel:`Fields`
to the webhook URL specified in the :guilabel:`URL` field.

The :guilabel:`Sample Payload` provides a preview of the data included in the request using a random
record's data or dummy data if no record is available.

.. note::
   It is also possible to set up an automated action that :doc:`uses a webhook to receive data from
   an external system <automated_actions/webhooks>` when an predefined event occurs in that system.

.. _studio/automated-actions/action-existing-actions:

Execute Existing Actions
------------------------

The action is used to trigger multiple actions (linked to the current model) at the same time. To do
so, click on :guilabel:`Add a line`, then, in the :guilabel:`Add: Child Actions` pop-up, select an
existing action or click :guilabel:`New` to create a new one.

.. toctree::
   :titlesonly:

   automated_actions/webhooks
