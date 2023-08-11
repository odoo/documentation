
=================
Customize a field
=================

Subclass an existing field component
====================================

Let's take an example where we want to extends the `BooleanField` to create a boolean field
displaying "Late!" in red whenever the checkbox is checked.

#. Create a new widget component extending the desired field component.

   .. code-block:: javascript
      :caption: :file:`late_order_boolean_field.js`

      /** @odoo-module */

      import { registry } from "@web/core/registry";
      import { BooleanField } from "@web/views/fields/boolean/boolean_field";
      import { Component, xml } from "@odoo/owl";

      class LateOrderBooleanField extends BooleanField {}
      LateOrderBooleanField.template = "my_module.LateOrderBooleanField";

#. Create the field template.

   The component uses a new template with the name `my_module.LateOrderBooleanField`. Create it by
   inheriting the current template of the `BooleanField`.

   .. code-block:: xml
      :caption: :file:`late_order_boolean_field.xml`

      <?xml version="1.0" encoding="UTF-8" ?>
      <templates xml:space="preserve">
          <t t-name="my_module.LateOrderBooleanField" t-inherit="web.BooleanField">
              <xpath expr="//CheckBox" position="after">
                    <span t-if="props.value" class="text-danger"> Late! </span>
              </xpath>
          </t>
      </templates>

#. Register the component to the fields registry.

   .. code-block::
      :caption: :file:`late_order_boolean_field.js`

      registry.category("fields").add("late_boolean", LateOrderBooleanField);

#. Add the widget in the view arch as an attribute of the field.

   .. code-block:: xml

      <field name="somefield" widget="late_boolean"/>

Create a new field component
============================

Assume that we want to create a field that displays a simple text in red.

#. Create a new Owl component representing our new field

   .. code-block:: js
      :caption: :file:`my_text_field.js`

      /** @odoo-module */

      import { standardFieldProps } from "@web/views/fields/standard_field_props";
      import { Component, xml } from "@odoo/owl";
      import { registry } from "@web/core/registry";

      export class MyTextField extends Component {

          /**
          * @param {boolean} newValue
          */
          onChange(newValue) {
              this.props.update(newValue);
          }
      }

      MyTextField.template = xml`
          <input t-att-id="props.id" class="text-danger" t-att-value="props.value" onChange.bind="onChange" />
      `;
      MyTextField.props = {
          ...standardFieldProps,
      };
      MyTextField.supportedTypes = ["char"];

   The imported `standardFieldProps` contains the standard props passed by the `View` such as
   the `update` function to update the value, the `type` of the field in the model, the
   `readonly` boolean, and others.

#. In the same file, register the component to the fields registry.

   .. code-block:: js
      :caption: :file:`my_text_field.js`

      registry.category("fields").add("my_text_field", MyTextField);

   This maps the widget name in the arch to its actual component.

#. Add the widget in the view arch as an attribute of the field.

   .. code-block:: xml

      <field name="somefield" widget="my_text_field"/>
