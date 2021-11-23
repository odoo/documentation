
======
Fields
======

In Odoo, the word *field* is mostly used to denote a part of a model, usually
represented by a column in a database. Fields are represented by components in
the user interface (mostly in the form, kanban and list view). In this page, we document
how these field components work and how to use them.

How to define a field
=====================

Fields are simply owl components registered in the fields registry.

.. code-block:: javascript

    import { registry } from "@web/core/registry";
    const { Component } = owl;
    const { xml } = owl.tags;

    class CounterField extends Component {
        increment() {
            if (!this.props.readonly) {
                this.props.update(this.props.value + 1);
            }
        }
    }
    CounterField.template = xml`
        <div t-on-click="increment">
            <t t-esc="props.value">
        </div>
    `;

    registry.category("fields").add("counter", CounterField);

The component of a field receives several props:

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `archs`
     - `object?`
     - description...
   * - `attrs`
     - `object`
     - description...
   * - `id`
     - `string?`
     - description...
   * - `name`
     - `string`
     - The field's name
   * - `options`
     - `object`
     - description...
   * - `readonly`
     - `boolean`
     - description...
   * - `required`
     - `boolean`
     - description...
   * - `record`
     - `DataPoint`
     - description...
   * - `type`
     - `string`
     - The field's base type.
   * - `update`
     - `function`
     - description...
   * - `value`
     - `any`
     - description...


How to use a field
==================

.. code-block:: xml

    <Field name="'my_field'" record="getRecord()" type="'counter'" readonly="true" required="false" />

Reference List
==============

.. list-table::
   :widths: 15 20 20 45
   :header-rows: 1

   * - Name
     - Technical name
     - Type
     - Short Description
   * - :ref:`BooleanFavoriteField <frontend/fields/boolean_favorite_field>`
     - `boolean_favorite`
     - `boolean`
     - description...
   * - :ref:`BooleanField <frontend/fields/boolean_field>`
     - `boolean`
     - `boolean`
     - Displays a checkbox
   * - :ref:`BooleanToggleField <frontend/fields/boolean_toggle_field>`
     - `boolean_toggle`
     - `boolean`
     - description...
   * - :ref:`CharField <frontend/fields/char_field>`
     - `char`
     - `char`
     - description...
   * - :ref:`ColorField <frontend/fields/color_field>`
     - `color`
     - `char`
     - description...
   * - :ref:`ColorPickerField <frontend/fields/color_picker_field>`
     - `color_picker`
     - `integer`
     - description...
   * - :ref:`DateField <frontend/fields/date_field>`
     - `date`
     - `date`, `datetime`
     - description...
   * - :ref:`DateTimeField <frontend/fields/datetime_field>`
     - `datetime`
     - `datetime`
     - description...
   * - :ref:`HandleField <frontend/fields/handle_field>`
     - `handle`
     - `integer`
     - description...
   * - :ref:`ImageField <frontend/fields/image_field>`
     - `image`
     - `binary`
     - description...
   * - :ref:`Many2ManyCheckboxesField <frontend/fields/many2many_checkboxes_field>`
     - `many2many_checkboxes`
     - `many2many`
     - description...
   * - :ref:`Many2ManyTagsField <frontend/fields/many2many_tags_field>`
     - `many2many_tags`
     - `many2many`
     - description...
   * - :ref:`Many2oneField <frontend/fields/many2one_field>`
     - `many2one`
     - `many2one`
     - description...
   * - :ref:`PriorityField <frontend/fields/priority_field>`
     - `priority`
     - `selection`
     - description...
   * - :ref:`RadioField <frontend/fields/radio_field>`
     - `radio`
     - `many2one`, `selection`
     - description...
   * - :ref:`RemainingDaysField <frontend/fields/remaining_days_field>`
     - `remaining_days`
     - `date`, `datetime`
     - description...
   * - :ref:`SelectionField <frontend/fields/selection_field>`
     - `selection`
     - `selection`
     - description...
   * - :ref:`StatInfoField <frontend/fields/stat_info_field>`
     - `statinfo`
     - `float`, `integer`
     - description...
   * - :ref:`StatusBarField <frontend/fields/statusbar_field>`
     - `statusbar`
     - `many2one`, `selection`
     - description...
   * - :ref:`TextField <frontend/fields/text_field>`
     - `text`
     - `html`, `text`
     - description...


.. _frontend/fields/boolean_favorite_field:

BooleanFavoriteField
--------------------

- Location: `@web/fields/boolean_favorite_field`
- Technical name: `boolean_favorite`
- Supported types: `boolean`

.. code-block:: xml

    <field name="my_field" widget="boolean_favorite" />


.. _frontend/fields/boolean_field:

BooleanField
------------

- Location: `@web/fields/boolean_field`
- Technical name: `boolean`
- Supported types: `boolean`

The `BooleanField` component represents a boolean value. It is the default field
for all fields of type `boolean`.

.. code-block:: xml

    <field name="my_field" widget="boolean" />


.. _frontend/fields/boolean_toggle_field:

BooleanToggleField
------------------

- Location: `@web/fields/boolean_toggle_field`
- Technical name: `boolean_toggle`
- Supported types: `boolean`


.. _frontend/fields/char_field:

CharField
---------

- Location: `@web/fields/char_field`
- Technical name: `char`
- Supported types: `char`


.. _frontend/fields/color_field:

ColorField
----------

- Location: `@web/fields/color_field`
- Technical name: `color`
- Supported types: `char`


.. _frontend/fields/color_picker_field:

ColorPickerField
----------------

- Location: `@web/fields/color_picker_field`
- Technical name: `color_picker`
- Supported types: `integer`


.. _frontend/fields/date_field:

DateField
---------

- Location: `@web/fields/date_field`
- Technical name: `date`
- Supported types: `date`, `datetime`


.. _frontend/fields/datetime_field:

DateTimeField
-------------

- Location: `@web/fields/datetime_field`
- Technical name: `datetime`
- Supported types: `datetime`


.. _frontend/fields/handle_field:

HandleField
-----------

- Location: `@web/fields/handle_field`
- Technical name: `handle`
- Supported types: `integer`


.. _frontend/fields/image_field:

ImageField
----------

- Location: `@web/fields/image_field`
- Technical name: `image`
- Supported types: `binary`


.. _frontend/fields/many2many_checkboxes_field:

Many2ManyCheckboxesField
------------------------

- Location: `@web/fields/many2many_checkboxes_field`
- Technical name: `many2many_checkboxes`
- Supported types: `many2many`


.. _frontend/fields/many2many_tags_field:

Many2ManyTagsField
------------------

- Location: `@web/fields/many2many_tags_field`
- Technical name: `many2many_tags`
- Supported types: `many2many`


.. _frontend/fields/many2one_field:

Many2OneField
-------------

- Location: `@web/fields/many2one_field`
- Technical name: `many2one`
- Supported types: `many2one`


.. _frontend/fields/priority_field:

PriorityField
-------------

- Location: `@web/fields/priority_field`
- Technical name: `priority`
- Supported types: `selection`


.. _frontend/fields/radio_field:

RadioField
----------

- Location: `@web/fields/radio_field`
- Technical name: `radio`
- Supported types: `many2one`, `selection`


.. _frontend/fields/remaining_days_field:

RemainingDaysField
------------------

- Location: `@web/fields/remaining_days_field`
- Technical name: `remaining_days`
- Supported types: `date`, `datetime`


.. _frontend/fields/selection_field:

SelectionField
--------------

- Location: `@web/fields/selection_field`
- Technical name: `selection`
- Supported types: `selection`


.. _frontend/fields/stat_info_field:

StatInfoField
-------------

- Location: `@web/fields/stat_info_field`
- Technical name: `statinfo`
- Supported types: `float`, `integer`


.. _frontend/fields/status_field:

StatusBarField
--------------

- Location: `@web/fields/statusbar_field`
- Technical name: `statusbar`
- Supported types: `many2one`, `selection`


.. _frontend/fields/text_field:

TextField
---------

- Location: `@web/fields/text_field`
- Technical name: `text`
- Supported types: `html`, `text`
