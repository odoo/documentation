.. attribute:: class
   :noindex:

   The `HTML class <https://en.wikipedia.org/wiki/HTML_attribute>`_ to set on the generated element.

   The styling uses the `Bootstrap <https://getbootstrap.com>`_ framework and :ref:`UI icons
   <reference/user_interface/ui_icons>`. Common Odoo classes include:

   - `oe_inline`: prevents the usual line break following fields, and limits their span;
   - `oe_left`, `oe_right`: `floats <https://developer.mozilla.org/en-US/docs/Web/CSS/float>`_ the
     element to the corresponding direction;
   - `oe_read_only`, `oe_edit_only`: only displays the element in the corresponding form mode;
   - `oe_avatar`: for image fields, displays images as an "avatar" (max 90x90 square);
   - `oe_stat_button`: defines a particular rendering to dynamically display information while being
     clickable to target an action.

   .. example::
      .. code-block:: xml

         <field name="fname" class="oe_inline oe_left oe_avatar"/>

   .. example::
      .. code-block:: xml

         <button type="object" name="ACTION" class="oe_stat_button" icon="FONT_AWESOME" help="HELP">
            <div class="o_field_widget o_stat_info">
               <span class="o_stat_value"><FIELD/></span>
               <span class="o_stat_text">TEXT</span>
            </div>
         </button>

   :requirement: Optional
   :type: str
   :default: `''`
