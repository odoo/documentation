
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
     - 
   * - `attrs`
     - `object`
     - 
   * - `id`
     - `string?`
     - 
   * - `name`
     - `string`
     - The field's name
   * - `options`
     - `object`
     - 
   * - `readonly`
     - `boolean`
     - 
   * - `required`
     - `boolean`
     - 
   * - `record`
     - `DataPoint`
     - 
   * - `type`
     - `string`
     - The field's base type.
   * - `update`
     - `function`
     - 
   * - `value`
     - `any`
     - 


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
     - 
   * - :ref:`BooleanField <frontend/fields/boolean_field>`
     - `boolean`
     - `boolean`
     - Displays a checkbox
   * - :ref:`BooleanToggleField <frontend/fields/boolean_toggle_field>`
     - `boolean_toggle`
     - `boolean`
     - 
   * - :ref:`CharField <frontend/fields/char_field>`
     - `char`
     - `char`
     - 
   * - :ref:`ColorField <frontend/fields/color_field>`
     - `color`
     - `char`
     - 
   * - :ref:`ColorPickerField <frontend/fields/color_picker_field>`
     - `color_picker`
     - `integer`
     - 
   * - :ref:`DateField <frontend/fields/date_field>`
     - `date`
     - `date`, `datetime`
     - 
   * - :ref:`DateTimeField <frontend/fields/datetime_field>`
     - `datetime`
     - `datetime`
     - 
   * - :ref:`EmailField <frontend/fields/email_field>`
     - `email`
     - `char`
     - display email addresses
   * - :ref:`HandleField <frontend/fields/handle_field>`
     - `handle`
     - `integer`
     - 
   * - :ref:`ImageField <frontend/fields/image_field>`
     - `image`
     - `binary`
     - 
   * - :ref:`Many2ManyCheckboxesField <frontend/fields/many2many_checkboxes_field>`
     - `many2many_checkboxes`
     - `many2many`
     - 
   * - :ref:`Many2ManyTagsField <frontend/fields/many2many_tags_field>`
     - `many2many_tags`
     - `many2many`
     - 
   * - :ref:`Many2oneField <frontend/fields/many2one_field>`
     - `many2one`
     - `many2one`
     - 
   * - :ref:`PercentageField <frontend/fields/percentage_field>`
     - `percentage`
     - `float`
     - display percentages
   * - :ref:`PhoneField <frontend/fields/phone_field>`
     - `phone`
     - `char`, `integer`
     - display phone numbers
   * - :ref:`PriorityField <frontend/fields/priority_field>`
     - `priority`
     - `selection`
     - 
   * - :ref:`RadioField <frontend/fields/radio_field>`
     - `radio`
     - `many2one`, `selection`
     - 
   * - :ref:`RemainingDaysField <frontend/fields/remaining_days_field>`
     - `remaining_days`
     - `date`, `datetime`
     - 
   * - :ref:`SelectionField <frontend/fields/selection_field>`
     - `selection`
     - `selection`
     - 
   * - :ref:`StatInfoField <frontend/fields/stat_info_field>`
     - `statinfo`
     - `float`, `integer`
     - 
   * - :ref:`StatusBarField <frontend/fields/statusbar_field>`
     - `statusbar`
     - `many2one`, `selection`
     - 
   * - :ref:`TextField <frontend/fields/text_field>`
     - `text`
     - `html`, `text`
     - 
   * - :ref:`UrlField <frontend/fields/url_field>`
     - `url`
     - `char`
     - display URLs


.. _frontend/fields/boolean_favorite_field:

BooleanFavoriteField
--------------------

- Location: `@web/fields/boolean_favorite_field`
- Technical name: `boolean_favorite`
- Supported types: `boolean`

The `BooleanFavoriteField` is displayed as an empty (or not) star depending on a boolean value.

.. code-block:: xml

    <field name="is_favorite" widget="boolean_favorite" />


.. _frontend/fields/boolean_field:

BooleanField
------------

- Location: `@web/fields/boolean_field`
- Technical name: `boolean`
- Supported types: `boolean`

The `BooleanField` component represents a boolean value. It is the default field for all fields of type `boolean`.

.. code-block:: xml

    <field name="is_checked" widget="boolean" />


.. _frontend/fields/boolean_toggle_field:

BooleanToggleField
------------------

- Location: `@web/fields/boolean_toggle_field`
- Technical name: `boolean_toggle`
- Supported types: `boolean`

The `BooleanToggleField` component displays a toggle switch to represent a boolean.

.. code-block:: xml

    <field name="switch" widget="boolean_toggle" />


.. _frontend/fields/char_field:

CharField
---------

- Location: `@web/fields/char_field`
- Technical name: `char`
- Supported types: `char`

The `CharField` represents a single line text value. It is the default field for all fields of type `char`.

.. code-block:: xml

    <field name="display_name" widget="char" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `autocomplete`
     - 
   * - `password`
     - if defined then displays "*" instead of the characters.
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/color_field:

ColorField
----------

- Location: `@web/fields/color_field`
- Technical name: `color`
- Supported types: `char`

.. code-block:: xml

    <field name="color" widget="color" />


.. _frontend/fields/color_picker_field:

ColorPickerField
----------------

- Location: `@web/fields/color_picker_field`
- Technical name: `color_picker`
- Supported types: `integer`

.. code-block:: xml

    <field name="color" widget="color_picker" />


.. _frontend/fields/date_field:

DateField
---------

- Location: `@web/fields/date_field`
- Technical name: `date`
- Supported types: `date`, `datetime`

.. code-block:: xml

    <field name="invoice_date" widget="date" />


.. _frontend/fields/datetime_field:

DateTimeField
-------------

- Location: `@web/fields/datetime_field`
- Technical name: `datetime`
- Supported types: `datetime`

.. code-block:: xml

    <field name="now" widget="datetime" />


.. _frontend/fields/email_field:

EmailField
----------

- Location: `@web/fields/email_field`
- Technical name: `email`
- Supported types: `char`

The `EmailField` component represents a textual value containing an email address. The field
is an input with the `email` type in edit mode, and a link with an `href` in readonly mode with 
the `mailto:` prefix. It opens an email application if available whenever a click is made by the user.


.. _frontend/fields/handle_field:

HandleField
-----------

- Location: `@web/fields/handle_field`
- Technical name: `handle`
- Supported types: `integer`

.. code-block:: xml

    <field name="sequence" widget="handle" />


.. _frontend/fields/image_field:

ImageField
----------

- Location: `@web/fields/image_field`
- Technical name: `image`
- Supported types: `binary`

.. code-block:: xml

    <field name="picture" widget="image" />


.. _frontend/fields/many2many_checkboxes_field:

Many2ManyCheckboxesField
------------------------

- Location: `@web/fields/many2many_checkboxes_field`
- Technical name: `many2many_checkboxes`
- Supported types: `many2many`

.. code-block:: xml

    <field name="options" widget="many2many_checkboxes" />


.. _frontend/fields/many2many_tags_field:

Many2ManyTagsField
------------------

- Location: `@web/fields/many2many_tags_field`
- Technical name: `many2many_tags`
- Supported types: `many2many`

.. code-block:: xml

    <field name="tags" widget="many2many_tags" />


.. _frontend/fields/many2one_field:

Many2OneField
-------------

- Location: `@web/fields/many2one_field`
- Technical name: `many2one`
- Supported types: `many2one`

.. code-block:: xml

    <field name="currency_id" widget="many2one" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/percentage_field:

PercentageField
---------------

- Location: `@web/fields/percentage_field`
- Technical name: `percentage`
- Supported types: `float`

The `PercentageField` component represents a percentage. To use the field, you must give a
float value. Then, the field will format and display the value to a percentage, using a single
decimal (e.g. `0.5671` would be converted to `56.7%`). When the user enters the edit mode, the
value is still visible as a percentage, but the inner value is not rounded this time. In the
end, the value is always saved as a float value.


.. _frontend/fields/phone_field:

PhoneField
----------

- Location: `@web/fields/phone_field`
- Technical name: `phone`
- Supported types: `char`, `integer`

The `PhoneField` component represents a phone number. This field is used as
an input with the `phone` type in edit mode, and a link with an `href` in readonly mode.
The link contains the `tel:` prefix which means that it starts a call to the given number 
whenever a user clicks on it.


.. _frontend/fields/priority_field:

PriorityField
-------------

- Location: `@web/fields/priority_field`
- Technical name: `priority`
- Supported types: `selection`

.. code-block:: xml

    <field name="priority_level" widget="priority" />


.. _frontend/fields/radio_field:

RadioField
----------

- Location: `@web/fields/radio_field`
- Technical name: `radio`
- Supported types: `many2one`, `selection`

.. code-block:: xml

    <field name="question_type" widget="radio" />

`options` attribute supports the following properties:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `horizontal`
     - 


.. _frontend/fields/remaining_days_field:

RemainingDaysField
------------------

- Location: `@web/fields/remaining_days_field`
- Technical name: `remaining_days`
- Supported types: `date`, `datetime`

.. code-block:: xml

    <field name="meeting_date" widget="remaining_days" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/selection_field:

SelectionField
--------------

- Location: `@web/fields/selection_field`
- Technical name: `selection`
- Supported types: `many2one`, `selection`

The `SelectionField` component displays a `<select>` html tag.

.. code-block:: xml

    <field name="taxes" widget="selection" placeholder="Select a tax" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/stat_info_field:

StatInfoField
-------------

- Location: `@web/fields/stat_info_field`
- Technical name: `statinfo`
- Supported types: `float`, `integer`

.. code-block:: xml

    <field name="meeting_count" widget="statinfo" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/statusbar_field:

StatusBarField
--------------

- Location: `@web/fields/statusbar_field`
- Technical name: `statusbar`
- Supported types: `many2one`, `selection`

.. code-block:: xml

    <field name="status" widget="statusbar" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/text_field:

TextField
---------

- Location: `@web/fields/text_field`
- Technical name: `text`
- Supported types: `html`, `text`

.. code-block:: xml

    <field name="description" widget="text" />

It supports the following attributes:

.. list-table::
   :widths: 20 80
   :header-rows: 1

   * - Name
     - Description
   * - `placeholder`
     - a string which is used to display some info when no value is selected.


.. _frontend/fields/url_field:

UrlField
--------

- Location: `@web/fields/url_field`
- Technical name: `url`
- Supported types: `char`

The `UrlField` component represents a URL. That field
has a text input in edit mode, and a link with an `href` to the given value. By default,
the URL value is displayed when the view is readonly, but if an other value is given as
the `text` attribute, the link will display the given value instead.

It supports the following options:

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `website_path`
     - `boolean`
     - optional. if `true`, the href will be the exact given value. No prefix will be added to format the URL
