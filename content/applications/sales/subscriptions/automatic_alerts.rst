================
Automation rules
================

With subscriptions up-and-running, it is important to stay up-to-date with customers. It is
efficient to use automation to avoid having to manually go through the list of subscribers to see
how things are going. That is where Odoo's *automation rules* feature comes into play.

The Odoo *Subscriptions* application allows users to set up automatic emails, create tasks for
salespeople, and even send satisfaction surveys for subscribers to evaluate their experience.

Create automation rules
=======================

To create an automated rule, start by navigating to :menuselection:`Subscriptions app -->
Configuration --> Automation Rules`. This is where all the automation rules for subscriptions can be
found.

The :guilabel:`Automation Rules` page shows each rule's :guilabel:`Name`, :guilabel:`Action To Do`,
what the automated rule will :guilabel:`Trigger On`, and the :guilabel:`Company` to which the rule
applies.

To view or modify any existing automation rule, simply click the desired rule from this page.

.. note::
   When modifying an existing automation rule, Odoo "grays-out" the :guilabel:`Action` section of
   the form, and provides the following warning: *Action data can not be updated to avoid unexpected
   behaviors. Create a new action instead.*

To create a new automation rule, click :guilabel:`New`.

.. image:: automatic_alerts/automation-rules-page.png
   :align: center
   :alt: The Automation Rules page in the Odoo Subscriptions application.

Clicking :guilabel:`New` reveals a blank :guilabel:`Automation Rules` form with numerous fields to
configure.

.. image:: automatic_alerts/automation-rules-form.png
   :align: center
   :alt: A sample Automation Rules form in the Odoo Subscriptions application.

Automation rule form fields
---------------------------

- :guilabel:`Action Name`: title of the automated action rule.

Apply On section
~~~~~~~~~~~~~~~~

The :guilabel:`Apply On` section dictates which subscription orders/customers this automated action
applies to.

- :guilabel:`MRR Between`: designate a range of monthly recurring revenue to target.
- :guilabel:`MRR Change More`: designate a change of monthly recurring revenue to target, in either
  percentage or unit of currency.
- :guilabel:`Over`: choose a period of time over which the designated KPIs (Key Performance
  Indicators) are calculated.
- :guilabel:`Rating Satisfaction`: designate satisfaction as :guilabel:`greater than` or
  :guilabel:`less than` a percentage.
- :guilabel:`Status`: select the status of the subscriptions to be included in this automation rule.
  The options are: :guilabel:`Quotation`, :guilabel:`Quotation Sent`, :guilabel:`Sales Order`, and
  :guilabel:`Cancelled`.
- :guilabel:`Stage goes from`: designate when the automation rule should be activated using two
  fields that represent two different stages of the subscription.
- :guilabel:`Subscription Plans`: choose specific subscription plans to target with the automation
  rule.
- :guilabel:`Products`: select specific product(s) to target with the automation rule.
- :guilabel:`Customers`: select specific customer(s) to target with the automation rule.
- :guilabel:`Company`: in a multi-company environment, select a specific company's subscription data
  to target with the automation rule.
- :guilabel:`Sales Team`: select the data of specific sales team(s) to target with the automation
  rule.

.. note::
   If any field is left blank, the rule applies to every subscription without that specific
   designation.

.. tip::
   The number of subscriptions that match the configured criteria of the customized automation rule
   are displayed at the bottom of the :guilabel:`Apply On` field.

   If that green subscriptions link is clicked, Odoo reveals a separate page showcasing all the
   subscriptions that meet that automation rule's criteria.

Action section
~~~~~~~~~~~~~~

The :guilabel:`Action` section dictates what action occurs when an automated rule is triggered.

In the :guilabel:`Action To Do` field, choose the action that will occur once the automated rule is
triggered. When clicked, the following options become available on a drop-down menu:

- :guilabel:`Create next activity`: creates the next activity to occur, which is configured in the
  :guilabel:`Activity` section that appears at the bottom of the automation rule form.
- :guilabel:`Send an email to the customer`: sends an email to the customer(s) who fit the specified
  criteria of the automation rule.
- :guilabel:`Send an SMS Text Message to the customer`: sends an SMS message to the customer(s) who
  fit the specified criteria of the automation rule.
- :guilabel:`Set Contract Health value`: set the health value of the subscription contract.

If :guilabel:`Send an email to the customer` is selected in the :guilabel:`Action To Do` field, the
following field appears:

- :guilabel:`Email Template`: create (and edit) a new email template *or* select from a list of
  pre-configured email templates to send to the customer(s).

If :guilabel:`Send an SMS Text Message to the customer` is selected in the :guilabel:`Action To Do`
field, the following field appears:

- :guilabel:`SMS Template`: create (and edit) a new SMS template *or* select from a list of
  pre-configured SMS templates to send to the customer(s).

If :guilabel:`Set Contract Health value` is selected in the :guilabel:`Action To Do` field, the
following field appears:

- :guilabel:`Health`: designate the health of the subscription by choosing one of the following
  options: :guilabel:`Neutral`, :guilabel:`Good`, or :guilabel:`Bad`.

In the :guilabel:`Trigger On` field, decide whether the automated rule should be triggered on a
:guilabel:`Modification` or :guilabel:`Timed Condition`.

.. note::
   A :guilabel:`Trigger Now` button appears at the top of the automation rule form *only* when a
   trigger has been configured for the rule.

.. warning::
   When the :guilabel:`Trigger Now` button is clicked, Odoo will trigger the action on *all* linked
   subscriptions, regardless of possible timed conditions.

.. note::
   Sending a SMS text message in Odoo requires In-App Purchase (IAP) credit or tokens. For more
   information on :abbr:`IAP (In-App Purchase)`, visit :doc:`../../essentials/in_app_purchase`.
   For more information on sending SMS messages, visit
   :doc:`../../marketing/sms_marketing`.

If :guilabel:`Timed Condition` is selected in the :guilabel:`Trigger On` field, the following fields
appear:

- :guilabel:`Trigger Date`: represents when the condition should be triggered. If left blank, the
  action is created upon subscription creation *and* updates.
- :guilabel:`Delay After Trigger`: select a delayed amount of time (:guilabel:`Minutes`,
  :guilabel:`Hours`, :guilabel:`Days`, or :guilabel:`Months`) for Odoo to wait before triggering the
  configured action. If a negative number is entered, the "delay" will occur *before* the
  :guilabel:`Trigger Date`.

Activity section
****************

If :guilabel:`Create next activity` is selected in the :guilabel:`Action To Do` field, an
:guilabel:`Activity` section appears at the bottom of the :guilabel:`Automation Rules` form.

- :guilabel:`Activity Type`: select an pre-configured activity type from the drop-down menu.
- :guilabel:`Title`: enter a custom title for the chosen activity.
- :guilabel:`Note`: leave a note for the employee to whom the activity is assigned.
- :guilabel:`Due Date In`: enter an amount of days within which the activity should be completed.
- :guilabel:`Assign To`: choose to assign the specified activity to either: :guilabel:`Subscription
  Salesperson`, :guilabel:`Sales Team Leader`, or :guilabel:`Specific Users`.

.. note::
   If :guilabel:`Specific Users` is selected as the :guilabel:`Assign To` option, a new
   :guilabel:`Specific Users` field appears beneath it, where a specific employee(s) can be chosen
   as the assignee(s) for the configured activity.

.. seealso::
   - :doc:`../subscriptions`
   - :doc:`plans`
   - :doc:`products`
   - :doc:`../../essentials/in_app_purchase`
