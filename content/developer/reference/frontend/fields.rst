
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
   * - :ref:`BinaryField <frontend/fields/binary_field>`
     - `binary`
     - `binary`
     - transfer files in the client
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
   * - :ref:`EmailField <frontend/fields/email_field>`
     - `text`
     - `char`
     - display email addresses
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
   * - :ref:`PercentageField <frontend/fields/percentage_field>`
     - `text`
     - `float`
     - display percentages
   * - :ref:`PhoneField <frontend/fields/phone_field>`
     - `text`
     - `char`, `integer`
     - display phone numbers
   * - :ref:`PriorityField <frontend/fields/priority_field>`
     - `priority`
     - `selection`
     - description...
   * - :ref:`ProgressBarField <frontend/fields/progress_bar_field>`
     - `priority`
     - `integer`, `float`
     - display a progress bar
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
   * - :ref:`UrlField <frontend/fields/url_field>`
     - `text`
     - `char`
     - display URLs


.. _frontend/fields/binary_field:

BinaryField
-----------

- Location: `@web/fields/image_field`
- Technical name: `image`
- Supported types: `binary`

The purpose of this component is to upload files to the web client. In readonly
mode, you are able to download the file if one is available from the field. Otherwise,
the field indicates that no file is available. 

When a file has been uploaded, the field let you replace the file by clicking on the
field or its dedicated `edit` button. A button lets you delete the uploaded file.

It supports the following options:

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `filename`
     - `string`
     - optional. used to display a name in the field. It can be the name of
       a value from the record, or any value given as a `string`.

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

.. _frontend/fields/progress_bar_field:

ProgressBarField
----------------

- Location: `@web/fields/progress_bar_field`
- Technical name: `priority`
- Supported types: `integer`, `float`

The `ProgressBarField` component indicates a progress with a bar. It is a more visual way to
indicate a form of progression. The progress value can be displayed in two ways, depending
if a maximum value is set explicitly or not. In the first case, a ratio is shown. Otherwise,
a percentage is shown instead.

The main entry point to edit the value is the `editable` option. If you use a percentage, 
you will edit the value and see the changes directly on the left progress bar.
But if you use a ratio (with a maximum value), you will edit the values following the
specific options that were given. By default, you will only edit the current value. But if 
any of the specific options `edit_max_value` and/or the `edit_current_value` are set, then 
you will only be able to edit those fields.

It supports the following options:

.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `editable`
     - `boolean`
     - optional. set if the value is editable
   * - `edit_current_value`
     - `boolean`
     - optional. set if the current value is editable
   * - `edit_max_value`
     - `boolean`
     - optional. set if the maximum value is editable
   * - `current_value`
     - `integer`, `float`
     - required. this is the current value of the progress. It can be the name of another field 
       that is present in the view, or any numerical value set directly.
   * - `max_value`
     - `integer`, `float`
     - optional. this value is used to set a maximum value. It can be the name of another field 
       that is present in the view, or any numerical value set directly.

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


.. _frontend/fields/statusbar_field:

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
