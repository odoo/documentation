=========
Gradients
=========

In this chapter, you will discover how to:

- Add a gradient to a section or a title.
- Add a custom gradient to the Website Builder palette.

.. _website_themes/gradients/standard:

Standard
========

In standard, several gradients can be selected directly from the Website Builder. However, for
custom themes, gradients have to be added directly in the `section` tag with a `style` attribute.

**Use**

.. code-block:: xml

    <section class="s_text_image" data-snippet="s_text_image" data-name="Text - Image" style="background-image: linear-gradient(135deg, rgb(255, 204, 51) 0%, rgb(226, 51, 255) 100%) !important;">
        <!-- Content -->
    </section>

To apply a gradient to text, use a `font` tag with the `text-gradient` class.

.. code-block:: xml

   <h2>
       <font class="text-gradient" style="background-image: linear-gradient(135deg, rgb(203, 94, 238) 0%, rgb(75, 225, 236) 100%);">A Section Subtitle</font>
   </h2>

.. _website_themes/gradients/custom:

Custom
======

Add a custom gradient to the Website Builder. This way, the user can easily use them without
manually recreating them.

.. code-block:: javascript
   :caption: ``/website_airproof/static/src/builder/airproof_gradients.js``

    import { ColorPickerGradientTab } from "@html_editor/main/font/color_picker_gradient_tab";
    import { registry } from "@web/core/registry";
    import { _t } from "@web/core/l10n/translation";

    export class AirproofColorPickerGradientTab extends ColorPickerGradientTab {
        setup() {
            super.setup();
            this.DEFAULT_GRADIENT_COLORS = [
                ...this.DEFAULT_GRADIENT_COLORS,
                "linear-gradient(0deg, rgb(41, 128, 187) 0%, rgb(11, 142, 230) 100%)",
            ];
        }
    }

    const colorPickerTabs = registry.category("color_picker_tabs");

    colorPickerTabs.remove("html_editor.gradient");
    colorPickerTabs.add(
        "html_editor.gradient",
        {
            id: "gradient",
            name: _t("Gradient"),
            component: AirproofColorPickerGradientTab,
        },
        { sequence: 60 }
    );


.. note::
   Add the JavaScript file to the `website.website_builder_assets` bundle so the editor loads it.
