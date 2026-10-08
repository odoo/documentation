:show-content:

====================
Marketing Automation
====================

Use the Odoo **Marketing Automation** application to create dynamic campaigns with actions that
automatically occur within a defined duration, such as sending a series of timed mass emails or
engaging with leads based on their interactions with marketing campaigns.

While the application is designed to be user-friendly for creating, launching, and reviewing
marketing campaigns, it also provides advanced features to automate repetitive tasks throughout the
database.

.. seealso::
   - `Odoo Tutorials: Marketing <https://www.odoo.com/slides/marketing-27>`_
   - `Magic Sheet - Marketing Automation [PDF]
     <https://drive.google.com/drive/folders/1MMMGcYIG1tm160jC2JaXVc_D5b6x3cJd>`_

.. cards::

   .. card:: Audience targeting
      :target: marketing_automation/target_audience

      Configure the target audience for a campaign.

   .. card:: Workflow activities
      :target: marketing_automation/workflow_activities

      Define the activities that occur within a campaign.

   .. card:: Testing/running campaigns
      :target: marketing_automation/testing_running

      Launch a test or run a campaign.

   .. card:: Campaign metrics
      :target: marketing_automation/understanding_metrics

      Review the metrics of a campaign.

.. _marketing_automation/marketing_automation/configuration:

Configuration
=============

To begin, make sure the **Marketing Automation** application is :ref:`installed <general/install>`.

.. important::
   Installing the **Marketing Automation** application also installs the :doc:`Email Marketing
   <email_marketing>` app, as most features of Odoo **Marketing Automation** are dependent on that
   specific application.

   Additionally, install the :doc:`CRM <../sales/crm>` and :doc:`SMS Marketing <sms_marketing>`
   applications to access *all* of the features available in **Marketing Automation**.

   The following documentation assumes that all three of these dependent applications are installed
   on the database.

.. _marketing_automation/marketing_automation/campaigns:

Campaigns
=========

A *campaign* refers to a :ref:`workflow <marketing_automation/marketing_automation/workflow>` of
activities that are automatically executed to a target audience based on customizable filters,
triggers, and durations of activities.

To access a dashboard of marketing campaigns, navigate to :menuselection:`Marketing Automation app
--> Campaigns`. By default, the dashboard displays a :icon:`oi-view-kanban` :guilabel:`(Kanban)`
view, staged by *New*, *Running*, or *Stopped* campaigns.

To create a campaign, navigate to the :menuselection:`Marketing Automation` application and click
:guilabel:`New`.

Start by entering a :guilabel:`Name` for the campaign.

Then, in the menu, select one of the following options:

- :guilabel:`Define a Trigger`: :ref:`Create a new campaign
  <marketing_automation/marketing_automation/campaigns/create-campaign>` from scratch.
- :guilabel:`Load a Template`: Start by configuring a :ref:`campaign template
  <marketing_automation/marketing_automation/campaigns/campaign-templates>`.
- :guilabel:`Ask AI`: Create a campaign by entering an AI prompt.

.. _marketing_automation/marketing_automation/campaigns/create-campaign:

Create a campaign from scratch
------------------------------

Each workflow consists of exactly one *trigger*, a rule that initiates the campaign and decides when
specific records (i.e., the target audience) become participants in the campaign.

On the *Define a Trigger* pop-up window, enter a name for the campaign, then configure the remaining
:doc:`trigger options <marketing_automation/target_audience>` (i.e., the target, trigger type, and
any additional filters).

Finally, click :guilabel:`Save` to add the trigger to the :ref:`workflow builder
<marketing_automation/activities>`.

.. seealso::
   - :doc:`marketing_automation/target_audience`
   - :doc:`marketing_automation/workflow_activities`

.. _marketing_automation/marketing_automation/campaigns/campaign-templates:

Campaign templates
------------------

Odoo provides the following campaign templates to help users get started.

Misc
~~~~

- :guilabel:`Tag Hot Contacts`: Send a welcome email to contacts and tag them when they click it.
- :guilabel:`Commercial prospection`: Send a free catalog and follow-up according to reactions.

Marketing
~~~~~~~~~

- :guilabel:`Welcome Flow`: Send a welcome email to new subscribers, and remove the address that
  bounced.
- :doc:`Double Opt-in <marketing_automation/campaign_templates/double_optin>`: Send an email to new
  recipients to confirm their consent.

CRM
~~~

- :guilabel:`Scheduled Calls`: If lead is created for an existing contact, schedule a call with
  their salesperson.
- :guilabel:`Prioritize Hot Leads`: Send an email to new leads and assign them a high priority if
  they open it.

eCommerce
~~~~~~~~~

- :guilabel:`Anniversary Discount`: Celebrate contacts that registered one year ago.
- :guilabel:`Purchase Follow-up`: Send an email to customers that bought a specific product after
  their purchase.
- :guilabel:`Create Repeat Customers`: Turn one-time visitors into repeat buyers.

.. _marketing_automation/marketing_automation/workflow:

Workflow
========

A *workflow* consists of an activity, many activities, or a sequence of activities organized in a
campaign. A campaign's workflow is defined in the section below the campaign form.

.. _marketing_automation/marketing_automation/workflow/activities:

Activities
----------

*Activities* are the methods of communication or server actions, organized in a workflow, that are
executed within a campaign. Once running, each activity displays the number of participants that are
engaged by the activity as *Success* and *Rejected* counts.

To create one of the following activities, click :guilabel:`Add new activity` and configure the
activity.

.. seealso::
   :doc:`marketing_automation/workflow_activities`

.. _marketing_automation/marketing_automation/testing-running:

Testing and running
===================

Once a campaign has been created, it can be tested to ensure the workflow is functioning as
expected, to check for errors, and correct any mistakes before it reaches its target audience.

After testing, the campaign can be launched to start engaging the target audience. The campaign can
also be launched *without* testing if the user is confident in the workflow.

.. seealso::
   :doc:`marketing_automation/testing_running`

.. _marketing_automation/marketing_automation/reporting:

Reporting
=========

A range of reporting metrics are available to measure the success of each campaign. Navigate to
:menuselection:`Marketing Automation app --> Reporting` to access the following menu options:

- :guilabel:`Link Tracker`: Track the number of clicks through links.
- :guilabel:`Traces`: Track the status of all activities across all campaigns.
- :guilabel:`Participants`: Track participant metrics across all campaigns.

Additionally, each activity within the workflow of a campaign displays its engagement metrics.

.. seealso::
   :doc:`marketing_automation/understanding_metrics`

.. toctree::
   :titlesonly:

   marketing_automation/target_audience
   marketing_automation/workflow_activities
   marketing_automation/testing_running
   marketing_automation/understanding_metrics
   marketing_automation/campaign_templates
