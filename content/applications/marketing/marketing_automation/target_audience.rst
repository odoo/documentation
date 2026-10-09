==================
Audience targeting
==================

In Odoo **Marketing Automation**, each campaign is initiated by a *trigger* that defines the
campaign's target audience and how these target records become participants in the campaign.

A campaign consists of exactly one trigger. The following documentation covers the various
configuration options for a trigger.

Define a trigger
================

When creating a new campaign, click the :guilabel:`Define a Trigger` button to open the
configuration window.

.. note::
   An existing campaign trigger can also be modified by clicking the first activity node in the
   workflow view.

On the *Define a Trigger* pop-up window, begin by entering a name for the campaign.

Enrollment tab
--------------

The *Enrollment* tab provides options to define the target audience and campaign triggers.

In the :guilabel:`Target` field, specify the model the participant comes from (e.g., Contact, Event
Sponsor, Applicant).

Then, select the :guilabel:`Trigger type` to specify when a record becomes a participant via one of
the following options:

- :guilabel:`Filter`: Add any record that matches the filter rules set in the :guilabel:`Dynamic
  Lists` or :guilabel:`Filter` fields.
- :guilabel:`Event`: Add a record when one of the following events occurs: :guilabel:`Subscribed to
  List`, :guilabel:`Page Visited`, :guilabel:`Form Submitted`, :guilabel:`Product in Cart`, or
  :guilabel:`Product Bought`. This option **only** applies to Contacts or Leads.
- :guilabel:`Date`: Add a record at a specific time before or after a date. In the :guilabel:`Date
  field`, specify the appropriate date on the chosen :guilabel:`Target`. In the :guilabel:`Delay`
  field, choose a duration before or after which the record should be created.
- :guilabel:`Anniversary`: Add a record at a specific time relative to its date, repeating every
  year. In the :guilabel:`Date field`, specify the appropriate date on the chosen
  :guilabel:`Target`. In the :guilabel:`Delay` field, choose a duration before or after which the
  record should be created.
- :guilabel:`Manual`: Add a record manually **only**.
- :guilabel:`Webhook`: Add a record when an external app sends a request to a specified URL.

.. _marketing_automation/defining-filters:

Defining filters
~~~~~~~~~~~~~~~~

Use the *Extra Filter* section to further restrict the target audience:

- :guilabel:`Dynamic Lists`: Select a filter rule saved as a template.
- :guilabel:`Filter`: Define filter rules to restrict target records based on specific criteria.

By default, the campaign :guilabel:`Filter` is set to :guilabel:`Match all records` (i.e., the
campaign targets **all** records of the chosen :guilabel:`Target` model). The :guilabel:`#
record(s)` link below opens a *Selected records* pop-up window listing the targeted records.

To modify the filter, click the :guilabel:`Edit Domain` button to reveal a *Domain* pop-up window
with configurable rule parameters.

.. tip::
   After a filter rule is modified, users can save it by clicking :guilabel:`Save as a Dynamic
   List`. Saved filters can be managed from the :menuselection:`Marketing Automation app -->
   Configuration --> Favorite Filters` page.

.. seealso::
   :ref:`Search, filter, and group records <search/custom-filters>`

Options tab
-----------

The *Options* tab contains additional trigger settings:

- :guilabel:`Participants can re-enroll`: Select the checkbox to allow records to re-enter the
  activity workflow.
- :guilabel:`Deduplication via`: Select the specific field of the chosen target model for which to
  avoid duplicate records.
- :guilabel:`Use Calendar`: If using a date-related trigger type, select a calendar by which to
  calculate specific dates.

Finally, click :guilabel:`Save` to add the trigger to the :ref:`workflow builder
<marketing_automation/activities>`.

.. tip::
   A :guilabel:`Responsible` user can be assigned to the campaign by activating
   :ref:`developer-mode`.

.. note::
   Each activity in a campaign's workflow can target a subset of the target audience; see the
   :doc:`workflow_activities` documentation for more information.

.. example::
   To target all leads and opportunities from the *CRM* app that are in the *New* stage, and have an
   expected revenue greater than $1,000, the following trigger options should be entered:

   - :guilabel:`Target`: `Lead`
   - :guilabel:`Trigger type`: `Filter`
   - :guilabel:`Domain`: Match `all` of the following rules:

     #. `Stage` `is equal to` `New`
     #. `Expected Revenue` `greater than` `1,000`

   Additionally, in the *Options* tab, duplicate records are removed by setting
   :guilabel:`Deduplication via` to `Email (Lead)`.

   With the above configuration, the campaign targets :guilabel:`14 record(s)`.

   .. image:: target_audience/filter-scenario-one.png
      :alt: A domain configuration in a Marketing Automation campaign.

.. seealso::
   - :ref:`Domain developer documentation <reference/orm/domains>`
   - :doc:`workflow_activities`
   - :doc:`testing_running`
   - :doc:`understanding_metrics`
