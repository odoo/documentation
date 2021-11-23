
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
   * - :ref:`FieldText <frontend/fields/field_text>`
     - `text`
     - `char`
     - display text values
   * - :ref:`OtherField <frontend/fields/other_field>`
     - `other_name`
     - `text`, `many2one`
     - represents some values

.. _frontend/fields/field_text:

FieldText
---------

- Location: `@web/fields/text_field`
- Technical name: `text`
- Supported types: `char`

The `FieldText` component represents a textual value. It is the default field
for all fields of type `char`.

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
