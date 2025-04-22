==========
Properties
==========

Properties are fields containing data that any user with `Can edit` :ref:`access rights
<knowledge/management/rights>` can add to :ref:`nested articles <knowledge/management/structure>`
or :ref:`article items <knowledge/articles_editing/commands>`.

Add property fields
===================

To add property fields, follow these steps:

#. Click the :icon:`fa-ellipsis-v` (:guilabel:`ellipsis`) icon, then :menuselection:`Add Properties
   --> Add a Property`.
#. Type in the :guilabel:`label`.
#. Select a :ref:`field type <knowledge/properties/field-types>`.
#. Add a :guilabel:`default value`.
#. (Optional) Tick the :guilabel:`Display in Cards` checkbox to show the properties in an
   :ref:`article item's view <knowledge/articles_editing/commands>`.

.. _knowledge/properties/field-types:

Field types
-----------

The aspect of the properties depends on the field types selected. The following types assess the
content of the field.

.. list-table::
   :widths: 20 80
   :header-rows: 1
   :stub-columns: 1

   * - Type
     - Use
   * - :guilabel:`Text`
     - Add a text.
   * - :guilabel:`Checkbox`
     - Add a checkbox.
   * - :guilabel:`Integer`
     - Add integer numbers.
   * - :guilabel:`Decimal`
     - Add decimal numbers.
   * - :guilabel:`Date`
     - Select a date.
   * - :guilabel:`Date & Time`
     - Select a date and time.
   * - :guilabel:`Separator`
     - Create a separation between properties.

The following types need configuring:

.. list-table::
   :widths: 20 80
   :header-rows: 1
   :stub-columns: 1

   * - Type
     - Use
   * - :guilabel:`Selection`
     - To add a drop-down selection menu with choices, click :guilabel:`Add a Value`, type the name
       of the choice, and press `Enter` to save it. Repeat this for each value.
   * - :guilabel:`Tags`
     - To create tags, type a tag name in the :guilabel:`Tag` field and press `Enter` or click
       :guilabel:`Create "new_tag"` to save it. Click on a tag to select a different color for it.
   * - :guilabel:`Many2one`
     - Select one 0 or 1 record from a different model as the field value. Configure by clicking
       inside the :guilabel:`Model` field, then select the model type from which to choose a record.
       After saving the property, click inside the property field to manually select values, which
       replaces the previous selection.
   * - :guilabel:`Many2many`
     - Select multiple records from a different model as the field value. Configure by clicking the
       :guilabel:`Model` field, then select the model type from which to choose any number of
       records. After saving the property, click inside the property field to manually select
       various values manually.

.. note::
   - Click outside the property field window to save a property.
   - With the :guilabel:`Many2one` and :guilabel:`Many2many` field types, editing the
     :guilabel:`Domain` restricts the choice of values, while adding a :guilabel:`Default value`
     suggests preselected values.

.. tip::
   Hover over the property name and click the :icon:`fa-pencil` (:guilabel:`pencil`) icon to edit
   it or the :icon:`oi-draggable` (:guilabel:`drag`) icon to move it above or below another
   property.

Delete property fields
======================

To remove a property, hover over its name, click the :icon:`fa-pencil` (:guilabel:`pencil`)
icon, then click :menuselection:`Delete --> Delete`.

.. note::
   Deleting a property is permanent, and deleting all properties removes the property sidebar
   panel.

Hide the property panel
=======================

Click the :icon:`fa-cogs` (:guilabel:`cogs`) icon to hide the property sidebar panel. Exiting and
returning to the article causes the panel to reappear.
