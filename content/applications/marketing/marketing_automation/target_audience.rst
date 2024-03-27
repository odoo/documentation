==================
Audience targeting
==================

The *Target* and *Filter* section of the campaign form, also referred to as the domain, contains the
fields used to define the target audience for the campaign's reach (i.e., the unique contact records
in the database).

The target audience specifies the type of records available for use in the campaign, such as
*Lead/Opportunity*, *Event Registration*, *Contact*, and more.

This section can be found on a campaign form by selecting an existing campaign, or :ref:`creating a
new campaign <marketing_automation/campaigns>` from the :menuselection:`Marketing Automation app -->
Campaigns` dashboard.

- :guilabel:`Target`: defines the model of the target audience for the campaign. The assigned model
  determines the fields that are available throughout the campaign, including the fields available
  in the :guilabel:`Filter` section, and in dynamic placeholders.
- :guilabel:`Save as Favorite Filter`: saves the current :guilabel:`Filter` for future use with the
  current :guilabel:`Target` model, and can be managed from the :menuselection:`Marketing Automation
  app --> Configuration --> Favorite Filters` menu.
- :guilabel:`Unicity based on`: specifies the :guilabel:`Target` model field at which duplicates
  should be avoided. Traditionally, the :guilabel:`Email` field is used, but any available field can
  be used.
- :guilabel:`Filter`: contains an interactive form to refine the target audience on a specific
  subset of the :guilabel:`Target` model, detailed in the
  :ref:`marketing_automation/defining-filters` section.
- :guilabel:`Include archived`: allows or disallows the inclusion of archived records in the target
  audience.

.. tip::
   A :guilabel:`Responsible` user can be assigned to the campaign by activating
   :ref:`developer-mode`.

.. note::
   Each activity in a campaign's workflow can target a subset of the target audience, see the
   :doc:`workflow_activities` documentation for more information.

.. _marketing_automation/defining-filters:

Defining filters
================

The default campaign :guilabel:`Filter` configuration is set to :guilabel:`Match all records`,
indicating that the campaign is targeting **all** records of the :guilabel:`Target` model.

To refine the :guilabel:`Filter` rules of a campaign, click the :guilabel:`➕ Add condition` button
to reveal a new filter rule row.

.. image:: target_audience/domain-filters.png
   :align: center
   :alt: A new filter rule row on the campaign form Filters.

At the top-left of the filter rules is a drop-down menu with two options. The selected option
determines the criteria of how all of the rules are combined to filter the target audience:

- :guilabel:`Match all 🔽 of the following rules`: **all** of the filter rules must be met for a
  record to be targeted by the campaign. Logically, this is an *AND* (`&`) operation.
- :guilabel:`Match any 🔽 of the following rules`: **any** of the filter rules can be met for a
  record to be targeted by the campaign. Logically, this is an *OR* (`|`) operation.

  .. note::
     The :guilabel:`Match any 🔽 of the following rules` option is only available when there are two
     or more filter rules.

When a rule is added, three inline inputs become available to define the rule's filter criteria:

#. The first inline input is the *field name* of the :guilabel:`Target` model to filter by. Some
   fields have refined paramaters that are nested within another field. These fields have an
   :guilabel:`> (arrow)` icon beside them, which can be selected to reveal the nested fields.
#. The second inline input is the conditional *operator* used to compare the field name to the
   value. The :ref:`available conditional operators <reference/orm/domains>` are specific to the
   field's data type.
#. The third inline input is the variable *value* of the field name. The value input may appear as a
   drop-down menu, a text input, a number input, a date/time input, a boolean selector, or it may be
   blank, depending on the operator used and the field's data type.

Three inline buttons are also available to the right of the rule's filter criteria inputs:

#. :guilabel:`➕ (plus sign)`: adds a new rule below the existing rule.
#. :guilabel:`(Add branch)`: adds a new group of rules below the existing rule, with the
   :guilabel:`any` and :guilabel:`all` matching options available to define how each rule within
   this branch is applied to the filter. If the matching option is set to the same as the parent
   group, the fields are moved to join the parent group.
#. :guilabel:`🗑️ (garbage can)`: deletes the node. If a branch node is deleted, all children of
   that node are deleted, as well.

At the bottom of the filter rules is a :guilabel:`# record(s)` button, which indicates the total
number of records targeted by this domain. Select the :guilabel:`# record(s)` button to open a
:guilabel:`Selected records` pop-up window, in which the targeted records can be viewed.

.. tip::
   Activate :ref:`developer-mode` to reveal each field's technical name and data type, as well as
   the :guilabel:`# Code editor` text area below the filter rules, to view and edit the domain
   manually.

.. example::
   To target all leads and opportunities from the *CRM* app that are in the *New* stage, and have an
   expected revenue greater than $1,000, the following should be entered:

   - :guilabel:`Target`: `Lead/Opportunity`
   - :guilabel:`Unicity based on`: `Email (Lead/Opportunity)`
   - :guilabel:`Filter`: :guilabel:`Match` :guilabel:`all 🔽 (down arrow)` :guilabel:`of the
     following rules:`

     #. :guilabel:`Stage` :guilabel:`is in` :guilabel:`New`
     #. :guilabel:`Expected Revenue` :guilabel:`>` `1,000`
     #. :guilabel:`any 🔽 (down arrow)` :guilabel:`of:`

        - :guilabel:`Type` :guilabel:`=` :guilabel:`Lead`
        - :guilabel:`Type` :guilabel:`=` :guilabel:`Opportunity`

   With the above configuration, the campaign targets :guilabel:`157 record(s)`.

   .. image:: target_audience/filter-scenario-one.png
      :align: center
      :alt: A domain configuration in a Marketing Automation campaign.

.. seealso::
   - :ref:`Domain developer documentation <reference/orm/domains>`
   - :doc:`workflow_activities`
   - :doc:`testing_running`
   - :doc:`understanding_metrics`
