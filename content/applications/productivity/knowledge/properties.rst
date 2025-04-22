==========
Properties
==========

Properties are custom fields used for storing and managing information that any user with
`Can edit` :ref:`access rights <knowledge/management/rights>` can add to :ref:`nested articles
<knowledge/management/structure>` or :ref:`article items <knowledge/articles_editing/commands>`.

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

The following field types are available:

- :guilabel:`Text`
- :guilabel:`Checkbox`
- :guilabel:`Integer`
- :guilabel:`Decimal`
- :guilabel:`Date`
- :guilabel:`Date & Time`

The following field types need configuring:

- :guilabel:`Selection`: To add a drop-down selection menu with choices, click :guilabel:`Add a
  Value`, type the name of the choice, and press `Enter` to save it. Repeat this for each value.
- :guilabel:`Tags`: To create tags, type a tag name in the :guilabel:`Tag` field and press `Enter`
  or click :guilabel:`Create "new_tag"` to save it. Click on a tag to select a different color for
  it.
- :guilabel:`Separator`: Create a section between properties.

The :ref:`Many2one <studio/fields/relational-fields-many2one>` and :ref:`Many2many
<studio/fields/relational-fields-many2many>` field types are relational fields that allow the
selection of one or multiple records from a model:

#. Select one (**Many2one**) or multiple (**Many2many**) records from a different model as the field
   value.
#. Configure by clicking inside the :guilabel:`Model` field, then select the model type from which
   to choose a record.
#. After saving the property, click inside the property field to manually select values.

.. note::
   - Click outside the property field window to save a property.
   - With the :guilabel:`Many2one` and :guilabel:`Many2many` field types, editing the
     :ref:`Domain <search/custom-filters>` restricts the choice of values, while adding a
     :guilabel:`Default value` suggests preselected values.

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
