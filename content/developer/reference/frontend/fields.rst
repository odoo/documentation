
======
Fields
======

In Odoo, the word *field* is mostly used to denote a part of a model, usually
represented by a column in a database. Fields are represented by components in
the user interface (mostly in the form and list view). In this page, we document
how these field components work and how to use them.

How to define a field
=====================

TODO

How to use a field
==================

TODO

Reference List
==============

.. list-table::
   :widths: 15 20 20 45
   :header-rows: 1

   * - Name
     - Technical name
     - Type
     - Short Description
   * - :ref:`EmailField <frontend/fields/email_field>`
     - `text`
     - `char`
     - display email addresses
   * - :ref:`FieldText <frontend/fields/field_text>`
     - `text`
     - `char`
     - display text values
   * - :ref:`PercentageField <frontend/fields/percentage_field>`
     - `text`
     - `char`
     - display percentages
   * - :ref:`PhoneField <frontend/fields/phone_field>`
     - `text`
     - `char`, `number`
     - display phone numbers
   * - :ref:`UrlField <frontend/fields/url_field>`
     - `text`
     - `char`
     - display URLs
   * - :ref:`OtherField <frontend/fields/other_field>`
     - `other_name`
     - `text`, `many2one`
     - represents some values

.. _frontend/fields/email_field:

EmailField
----------

- Location: `@web/fields/email_field`
- Technical name: `email`
- Supported types: `char`

The `EmailField` component represents a textual value containing an email address. The field
is an input with the `email` type in edit mode, and a link with an `href` in readonly mode with 
the `mailto:` prefix. It allows the user to handle the click to open an email application if available.

.. _frontend/fields/field_text:

FieldText
---------

- Location: `@web/fields/text_field`
- Technical name: `text`
- Supported types: `char`

The `FieldText` component represents a textual value. It is the default field
for all fields of type `char`.

.. _frontend/fields/percentage_field:

PercentageField
---------------

- Location: `@web/fields/percentage_field`
- Technical name: `percentage`
- Supported types: `number`

The `PercentageField` component represents a percentage. To use the field, you must give a 
float value between 0 and 1. Then, the field will format the value to an understandable value
in percent (e.g. `0.567` would be converted to `56.7%`). When the user enters the edit mode, 
the value is still visible as a percentage, but the value that is saved is always a float value.

.. _frontend/fields/phone_field:

PhoneField
----------

- Location: `@web/fields/phone_field`
- Technical name: `phone`
- Supported types: `char`, `number`

The `PhoneField` component represents a textual value containing a phone number. The field
is an input with the `phone` type in edit mode, and a link with an `href` in readonly mode with 
the `tel:` prefix. It allows the user to handle the click to start a call to the number.

.. _frontend/fields/url_field:

UrlField
--------

- Location: `@web/fields/url_field`
- Technical name: `url`
- Supported types: `char`

The `UrlField` component represents a textual value containing a URL. The field
is a text input in edit mode, and a link with an `href` to the given value. 

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

.. _frontend/fields/other_field:

Other Field
-----------

- Location: `@web/fields/other_field`
- Technical name: `blabla`
- Supported types: `char`, `many2one`

The `OtherField` component represents ...

.. code-block:: xml

    <field name="my_field" widget="blabla" options="{'horizontal':true}"/>

It supports the following options:


.. list-table::
   :widths: 20 20 60
   :header-rows: 1

   * - Name
     - Type
     - Description
   * - `horizontal`
     - `boolean`
     - optional. if `true`, radio buttons will be displayed horizontally (default=`false`)
