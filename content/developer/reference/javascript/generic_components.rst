==================
Generic Components
==================

The Odoo web client is built with `Owl <https://github.com/odoo/owl>`_ components.
To make it easier, the Odoo javascript framework provides a suite of generic
components that can be reused in some common situations, such as dropdowns,
checkboxes or datepickers. This page explains how to use these generic components.

CheckBox
========

Location
--------

`@web/core/checkbox/checkbox`

Description
-----------

This is a simple checkbox component with a label next to it. The checkbox is
linked to the label: the checkbox is toggled whenever the label is clicked.

.. code-block:: xml

  <CheckBox value="boolean" disabled="boolean" t-on-change="onValueChange">
    Some Text
  </CheckBox>

Props
-----

.. list-table::
    :widths: 20 20 60
    :header-rows: 1

    * - Name 
      - Type
      - Description
    * - `value`
      - `boolean`
      - if true, the checkbox is checked, otherwise it is unchecked
    * - `disabled`
      - `boolean`
      - if true, the checkbox is disabled, otherwise it is enabled


