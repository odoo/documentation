===============
Property fields
===============

A property field allows for the storage and management of information by adding values without
changing the base model. It is used to customize a model through various field types.

.. _property_field/add:

Add property fields
-------------------

To add a property field from a :ref:`form view <studio/views/general/form>`, click the :icon:`fa-cog`
(:guilabel:`cog`) icon, then :icon:`fa-cogs` :guilabel:`Add Properties`.

Click :icon:`fa-plus` :guilabel:`Add a Property` on the form for a quick addition.

Once the property field is added, the following field types must be selected and completed, then
click outside the property field window to save it:

- :ref:`Text <studio/fields/simple-fields-text>`
- :ref:`Checkbox <studio/fields/simple-fields-checkbox>`
- :ref:`Integer <studio/fields/simple-fields-integer>`
- :ref:`Decimal <studio/fields/simple-fields-decimal>`
- :ref:`Date <studio/fields/simple-fields-date>`
- :ref:`Date & Time <studio/fields/simple-fields-date-time>`
- :ref:`Selection <studio/fields/simple-fields-selection>`: add a selectable option by clicking
  :icon:`fa-plus` :guilabel:`Add a Value` and entering the :guilabel:`Option Name`. Click the
  :icon:`fa-star-o` (:guilabel:`Select Default`) icon to set an option as default if desired.

 .. tip::
    :guilabel:`Selection`: Click the :icon:`oi-draggable` (:guilabel:`drag handle`) icon to
    reorder the options and the :icon:`fa-trash-o` (:guilabel:`trash`) icon to remove an option.

- :ref:`Tags <studio/fields/relational-fields-tags>`: enter a :guilabel:`Tag` name and press `Enter`
  to save it. Click on a tag to select another tag color.
- :ref:`Many2one <studio/fields/relational-fields-many2one>`: to display selectable records from
  another model with *one* option, enter the :guilabel:`Model` name. Configure its :ref:`Domain
  <search/custom-filters>` to filter records and select a :guilabel:`Default Value` if desired.
- :ref:`Many2many <studio/fields/relational-fields-many2many>`: to display selectable records from
  another model with *one or more* options, enter the :guilabel:`Model` name. Configure its
  :ref:`Domain <search/custom-filters>` to filter records and select one :guilabel:`Default Value`
  or several if desired.
- :guilabel:`Separator`: Create a section between properties.

.. note::
  - With the :guilabel:`Many2one` and :guilabel:`Many2many` field types, editing the
    :ref:`Domain <search/custom-filters>` restricts the choice of values, while adding a
    :guilabel:`Default value` suggests preselected values.
  - To remove a property, hover over its name, click the :icon:`fa-pencil` (:guilabel:`pencil`)
    icon, then click :menuselection:`Delete --> Delete`. Deleting a property is permanent.

.. tip::
   Click the :icon:`fa-cogs` (:guilabel:`cogs`) icon to hide the property sidebar panel. Exiting
   and returning to the article causes the panel to reappear.

Where using properties
----------------------

Property fields apply to several apps in various contexts.

  .. list-table::
        :widths: 20 80
        :header-rows: 1
        :stub-columns: 1

        * - App
          - Model
        * - :guilabel:`Accounting`
          - :ref:`Assets <create-assets-entry>`
        * - :guilabel:`Accounting`
          - :doc:`Loans </applications/finance/accounting/bank/loans>`
        * - :guilabel:`Appraisal`
          - :ref:`Employee appraisal <appraisals/configuration>`
        * - :guilabel:`Approvals`
          - Approval request
        * - :guilabel:`CRM`
          - :doc:`Lead record </applications/sales/crm/acquire_leads/email_manual>`
        * - :guilabel:`Employee`
          - :ref:`Employee record <employees/general-info>`
        * - :guilabel:`Events`
          - :doc:`Event registration </applications/marketing/events/registration_desk>`
        * - :guilabel:`Fleet`
          - :doc:`Vehicle </applications/hr/fleet/new_vehicle>`
        * - :guilabel:`Frontdesk`
          - :ref:`Frontdesk visitors <frontdesk/list>`
        * - :guilabel:`Helpdesk`
          - Helpdesk ticket
        * - :guilabel:`Inventory`
          - Lot/Serial number
        * - :guilabel:`Inventory`
          - :ref:`Product moves <inventory/warehouses_storage/moves-history-report>`
        * - :guilabel:`Inventory`
          - Transfer
        * - :guilabel:`Inventory`
          - Batch transfer
        * - :guilabel:`Knowledge`
          - :ref:`Knowledge nested article <knowledge/articles_editing/create-article>`
        * - :guilabel:`Maintenance`
          - :ref:`Maintenance equipment <maintenance/equipment_management/add_new_equipment>`
        * - :guilabel:`Meeting Rooms`
          - Room record
        * - :guilabel:`Planning`
          - :ref:`Planning shift <planning/roles>`
        * - :guilabel:`Project`
          - :ref:`Task <task_creation/task-configuration>`
        * - :guilabel:`Recruitment`
          - :ref:`Candidate record <recruitment/quick-add-applicant>`
        * - :guilabel:`Recruitment`
          - :ref:`Job position <recruitment/new_job_position/edit>`
        * - :guilabel:`Repairs`
          - :ref:`Repair order <repairs/repair_orders/repair>`
        * - :guilabel:`Sales`
          - Product
