===============
Property fields
===============

Property fields, or properties, enable the customization of a :ref:`form
<studio/views/general/form>` view by adding various :ref:`field types <property_field/add>`. These
fields allow information storage and management by adding values.

.. admonition:: Property vs. regular fields

   Properties act as pseudo-fields; they behave like regular fields but are not saved as columns in
   the database. They also rely on a defined :ref:`parent record <property-fields/properties-apps>`.

   .. example::
      Adding a property to a *task* inserts a field in *all tasks* within the *same
      project* while other projects' tasks remain unaffected.

.. _property_field/add:

Add property fields
-------------------

To add a first property field to a :ref:`form view <studio/views/general/form>`, click the
:icon:`fa-cog` (:guilabel:`Actions`) icon, then select :icon:`fa-cogs` :guilabel:`Edit Properties`.

In the popover, enter the property's :guilabel:`Label`, choose a :guilabel:`Field Type`, and then
configure the field based on the selected type:

.. list-table::
   :header-rows: 1
   :widths: 15 30 55

   * - Field type
     - Use
     - Options
   * - :ref:`Text <studio/fields/simple-fields-text>`
     - Short text on a single line
     - Enter a :guilabel:`Default Value` if desired.
   * - :guilabel:`Multiline Text`
     - Full text on multiple lines
     - Enter a :guilabel:`Default Value` if desired.
   * - :ref:`HTML <text-editor>`
     - HTML field
     - Enter a :guilabel:`Default Value` if desired.
   * - :ref:`Checkbox <studio/fields/simple-fields-checkbox>`
     - Checked or unchecked status
     - Choose the :guilabel:`Default State`.
   * - :ref:`Integer <studio/fields/simple-fields-integer>`
     - Integer numbers (:dfn:`positive, negative, or zero, without a decimal`)
     - Enter a :guilabel:`Default Value` if desired.
   * - :ref:`Decimal <studio/fields/simple-fields-decimal>`
     - Decimal numbers (:dfn:`positive, negative, or zero, with a decimal`)
     - Enter a :guilabel:`Default Value` if desired.
   * - :ref:`Date <studio/fields/simple-fields-date>`
     - Selection of a date on a calendar
     - Select a :guilabel:`Default Value` if desired.
   * - :ref:`Date & Time <studio/fields/simple-fields-date-time>`
     - Selection of a date on a calendar and a time on a clock
     - Select a :guilabel:`Default Value` if desired.
   * - :ref:`Selection <studio/fields/simple-fields-selection>`
     - Selection of a value from a group of predefined values
     - Add a selectable option by clicking :icon:`fa-plus` :guilabel:`Add a Value` and entering the
       :guilabel:`Option Name`.

       If desired, set an option as default by clicking the :icon:`fa-star-o`
       (:guilabel:`Select Default`) button.

       Reorder the options by dragging and dropping them using the :icon:`oi-draggable`
       (:guilabel:`drag handle`) button.

       Delete an option by clicking the :icon:`fa-trash-o` (:guilabel:`Remove Property`) button.
   * - :ref:`Tags <studio/fields/relational-fields-tags>`
     - Selection of multiple values in the form of tags
     - Enter a :guilabel:`Tag` name and press `Enter` to save it.

       Change a tag's color by clicking it and selecting another one.
   * - :ref:`Many2one <studio/fields/relational-fields-many2one>`
     - Selection of a single record from another model
     - Enter the :guilabel:`Model` name. Configure its :ref:`Domain <search/custom-filters>` to
       filter records if needed.

       Select a :guilabel:`Default Value` if desired.
   * - :ref:`Many2many <studio/fields/relational-fields-many2many>`
     - Selection of multiple records from another model
     - Enter the :guilabel:`Model` name. Configure its :ref:`Domain <search/custom-filters>` to
       filter records if needed.

       Select a :guilabel:`Default Value` if desired.
   * - :guilabel:`Separator`
     - Group several properties under a foldable label
     -

Click outside the popover to save the added property.

.. note::
   - Select whether to display the property in the Kanban, List, or Calendar views cards for every
     field with the :guilabel:`Display in Cards` option.
   - To add another property, click :icon:`fa-plus` :guilabel:`Add a Property` at the bottom of the
     form while.

.. tip::
   To edit an existing property, hover the cursor over the property:

   - Click the :icon:`fa-pencil` (:guilabel:`pencil`) button to open a popover and modify the
     property. In the popover, click the :icon:`fa-chevron-up` (up) or :icon:`fa-chevron-down`
     (down) chevron to move a property upwards or downwards.
   - Click :icon:`fa-trash` :guilabel:`Delete`, then :guilabel:`Delete` to delete it. Deleting
     a property is permanent.
   - Use the :icon:`oi-draggable` (:guilabel:`drag handle`) icon to drag and drop the property to
     reorder or regroup.

.. _property-fields/properties-apps:

Properties across apps
----------------------

Property fields can be defined in the :ref:`form view <studio/views/general/form>` of multiple
models. Once set, the property is shared by all records that are linked to the same *parent*.

  .. list-table::
        :widths: 20 40 40
        :header-rows: 1
        :stub-columns: 1

        * - App
          - Model
          - Parent
        * - :guilabel:`Accounting`
          - :ref:`Asset/Revenue Recognition <create-assets-entry>`

            :doc:`Loan </applications/finance/accounting/bank/loans>`
          - :ref:`Asset model <assets/asset-model>`

            :ref:`Journal <cheat_sheet/journals>`
        * - :guilabel:`Appraisals`
          - :ref:`Employee Appraisal <appraisals/manual>`
          - :ref:`Department <employee/create-departments>`
        * - :guilabel:`Approvals`
          - Approval Request
          - Category
        * - :guilabel:`CRM`
          - :doc:`Lead/Opportunity </applications/sales/crm/acquire_leads/email_manual>`
          - :ref:`Sales team <crm/sales-team-dashboard>`
        * - :guilabel:`Employees`
          - :ref:`Employee <employees/general-info>`
          - :ref:`Company <employees/general-info>`
        * - :guilabel:`Events`
          - :doc:`Event Registration </applications/marketing/events/registration_desk>`
          - :ref:`Event <events/new-event>`
        * - :guilabel:`Fleet`
          - :doc:`Vehicle </applications/hr/fleet/new_vehicle>`
          - :ref:`Vehicle model <fleet/add-model>`
        * - :guilabel:`Frontdesk`
          - :ref:`Frontdesk Visitors <frontdesk/list>`
          - :ref:`Station <frontdesk/stations>`
        * - :guilabel:`Helpdesk`
          - :ref:`Ticket <helpdesk/follow>`
          - :ref:`Helpdesk team <helpdesk/create-team>`
        * - :guilabel:`Inventory`
          - :ref:`Lot/Serial <inventory/product_management/edit-lot>`

            :doc:`Transfer
            </applications/inventory_and_mrp/inventory/shipping_receiving/picking_methods/wave>`

            :ref:`Batch Transfer <inventory/misc/batch_picking>`
          - :ref:`Product variant <product-variants/add-product-variants>`

            :ref:`Operation type <inventory/product_management/operation-type-setting>`

            :ref:`Operation type <inventory/product_management/operation-type-setting>`
        * - :guilabel:`Knowledge`
          - :ref:`Knowledge Article <knowledge/articles_editing/create-article>`
          - :ref:`Parent article <knowledge/articles_editing/create-article>`
        * - :guilabel:`Maintenance`
          - :ref:`Maintenance Equipment <maintenance/equipment_management/add_new_equipment>`
          - :ref:`Equipment category <maintenance/equipment_management/add_new_equipment>`
        * - :guilabel:`Meeting Rooms`
          - Room
          - Office
        * - :guilabel:`Planning`
          - :ref:`Shift <planning/roles>`
          - :ref:`Role <planning/roles>`
        * - :guilabel:`Project` / :guilabel:`Field Service`
          - :ref:`Task <task_creation/task-configuration>`
          - :ref:`Project <project_management/configuration>`
        * - :guilabel:`Recruitment`
          - :ref:`Applicant <recruitment/quick-add-applicant>`

            :ref:`Job Position <recruitment/new_job_position/edit>`

            Candidate
          - :ref:`Job position <job-position/create-job-position>`

            :ref:`Company <companies/manage>`

            :ref:`Company <companies/manage>`
        * - :guilabel:`Repairs`
          - :ref:`Repair order <repairs/repair_orders/repair>`
          - :ref:`Company <companies/manage>`
        * - :guilabel:`Sales` / etc.
          - Product
          - Category
