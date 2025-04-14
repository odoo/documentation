:custom-css: showcase_tables.css

==================
View architectures
==================

Generic architecture
====================

The architecture of a view is defined by XML data interpreted by the JavaScript framework.

For most views, there is a :file:`\*.rng` file defining the attributes and possible architectures.
Some views are not ruled by such a file either because they accept HTML content, or for performance
reasons.

.. note::
   The current context and user access rights may impact the view abilities.

.. seealso::
   :doc:`view_records`

.. _reference/view_architectures/python_expression:

Python expression
=================

When evaluating node attributes, e.g. the `readonly` modifier, it is possible to provide a **Python
expression** that will be executed in an environment that has access to the following variables:

- The names of all fields present in the current view, containing the value of the current record,
  except for `column_invisible` in :ref:`list view <reference/view_architectures/list/field>`;
  relational fields are given as a list of IDs;
- The ID of the current record;
- `parent`: the record that refers to the container; only inside sub-views of :ref:`relational
  fields <studio/fields/relational-fields>`;
- `context (dict)`: the current view's context;
- `uid (int)`: the id of the current user;
- `today (str)`: the current local date in the `YYYY-MM-DD` format;
- `now (str)`: the current local datetime in the `YYYY-MM-DD hh:mm:ss` format.

.. example::
   .. code-block:: xml

      <field name="field_a" readonly="True"/>
      <field name="field_b" invisible="context.get('show_me') and field_a == 4"/>

.. example::
   .. code-block:: xml

      <field name="field_a"/>
      <field name="x2m">
          <!-- sub-view -->
          <form>
              <field name="field_b" invisible="parent.field_a"/>
          </form>
      </field>

.. _reference/view_architectures/form:

Form
====

Form views are used to display the data from a single record. They are composed of regular HTML_
with additional semantic and structural components.

The root element of form views is `form`.

.. code-block:: xml

   <form>
       ...
   </form>

.. _reference/view_architectures/form/root:

Root attributes
---------------

Optional attributes can be added to the root element `form` to customize the view.

.. include:: view_architectures/root_attribute_string.rst

.. include:: view_architectures/root_attribute_create.rst

.. include:: view_architectures/root_attribute_edit.rst

.. attribute:: duplicate
   :noindex:

   Disable/enable record duplication on the view through the **Action** dropdown.

   :requirement: Optional
   :type: bool
   :default: `True`

.. include:: view_architectures/root_attribute_delete.rst

.. attribute:: js_class
   :noindex:

   The name of the JavaScript component the webclient will instantiate instead of the form view.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: disable_autofocus
   :noindex:

   Disable automatic focusing on the first field in the view.

   :requirement: Optional
   :type: bool
   :default: `False`

.. _reference/view_architectures/form/semantic:

Semantic components
-------------------

Semantic components tie into the Odoo system and allow interaction with it.

Form views accept the following children semantic components: :ref:`field
<reference/view_architectures/form/field>`, :ref:`label <reference/view_architectures/form/label>`,
:ref:`button <reference/view_architectures/form/button>`,
:ref:`reference/view_architectures/form/chatter`, and
:ref:`reference/view_architectures/form/attachment`.

Placeholders are denoted in all caps.

.. _reference/view_architectures/form/field:

`field`: display field values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `field` element renders (and allows editing of, possibly) a single field of the current record.

Using the same field multiple times in a form view is supported, and the fields can receive
different values for the `invisible` and `readonly` attributes. These fields may have the same
values but can be displayed differently. However, the behavior is not guaranteed when several fields
exist with different values for the `required` attribute.

.. code-block:: xml

   <form>
       <field name="FIELD_NAME"/>
   </form>

The `field` element can have the following attributes:

.. include:: view_architectures/field_attribute_name.rst

.. attribute:: id
   :noindex:

   The node id. Useful when there are several occurrences of the same field in the view (see
   :ref:`reference/view_architectures/form/label`).

   :requirement: Optional
   :type: str
   :default: The field name

.. include:: view_architectures/field_attribute_string.rst

.. attribute:: help
   :noindex:

   The tooltip displayed when hovering the field or its label.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: options
   :noindex:

   The configuration options for the field's widget (including default widgets), as a Python
   expression that evaluates to a dict.

   For relation fields, the following options are available: `no_create`, `no_quick_create`,
   `no_open`, and `no_create_edit`.

   .. example::
      .. code-block:: xml

         <field name="tag_ids" widget="many2many_tags" options="{'color_field': 'FIELD_NAME', 'no_quick_create': True}"/>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`

.. include:: view_architectures/field_attribute_readonly.rst

.. include:: view_architectures/field_attribute_required.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. include:: view_architectures/generic_attribute_groups.rst

.. attribute:: domain
   :noindex:

   The filters to apply when displaying existing records for selection, as a Python expression that
   evaluates to a :ref:`domain <reference/orm/domains>`.

   .. example::
      .. code-block:: xml

         <field name="fname" domain="[('fname_a', '=', parent.fname_b)]"/>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `[]`
   :scope: Relational fields

.. attribute:: context
   :noindex:

   .. todo:: extensive documentation on all the magic context values (TYPE_view_ref, group_by,
             search_default_FIELD...

   The context to use when fetching possible values and creating or searching records, as a Python
   expression that evaluates to a dict.

   .. example::
      .. code-block:: xml

         <field name="fname" context="{
             'TYPE_view_ref': 'ADDON.MODEL_view_TYPE',
             'group_by': 'FIELD_NAME',
             'default_FIELD_NAME': ANY,
             'search_default_FIELD_NAME': True,
             'OTHER_BUSINESS_KEY': ANY,
           }"/>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`
   :scope: Relational fields

.. attribute:: nolabel
   :noindex:

   Whether the field label should be hidden.

   :requirement: Optional
   :type: bool
   :default: `False`
   :scope: Fields that are a direct child of a `group` element

.. attribute:: placeholder
   :noindex:

   The help message to display on *empty* fields. It can replace field labels in complex forms.
   However, it *should not* be an example of data, as users may confuse placeholder text with filled
   fields.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: mode
   :noindex:

   The comma-separated list of display modes (view types) to use for the field's linked records.
   Allowed modes are: `list`, `form`, `kanban`, and `graph`.

   :requirement: Optional
   :type: str
   :default: `list`
   :scope: :class:`~odoo.fields.One2many` and :class:`~odoo.fields.Many2many` fields

.. include:: view_architectures/generic_attribute_class.rst

.. attribute:: filename
   :noindex:

   The name of the related field providing the name of the file.

   :requirement: Optional
   :type: str
   :default: `''`
   :scope: :class:`~odoo.fields.Binary` fields

.. attribute:: password
   :noindex:

   Whether the field stores a password and thus its data should not be displayed.

   :requirement: Optional
   :type: bool
   :default: `False`
   :scope: :class:`~odoo.fields.Char` fields

.. attribute:: kanban_view_ref
   :noindex:

   The XMLID of the specific Kanban :doc:`view record <view_records>` that should be used when
   selecting records in a mobile environment.

   :requirement: Optional
   :type: str
   :default: `''`
   :scope: Relational fields

.. attribute:: default_focus
   :noindex:

   Whether the field is focused when the view opens. It can be applied to only one field of a view.

   :requirement: Optional
   :type: bool
   :default: `False`

.. note::
   :ref:`Relational fields <studio/fields/relational-fields>` nodes can contain specific subviews.

   .. example::
      .. code-block:: xml

         <field name="children_ids">
            <list>
               <field name="name"/>
            </list>
            <form>
               <field name="id"/>
               <field name="name"/>
            </form>
         </field>

.. _reference/view_architectures/form/label:

`label`: display field labels
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When a :ref:`field <reference/view_architectures/form/field>` component is not placed directly
inside a :ref:`group <reference/view_architectures/form/group>`, or when its `nolabel` attribute is
set, the field's label is not automatically displayed alongside its value. The `label` component is
the manual alternative of displaying the label of a field.

.. code-block:: xml

    <form>
        <div class="col col-md-auto">
            <label for="FIELD_NAME" string="LABEL"/>
            <div>
                <field name="FIELD_NAME" class="oe_inline"/>
            </div>
        </div>
    </form>

The `label` element can have the following attributes:

.. attribute:: for
   :noindex:

   The reference to the field associated with the label. It can be either the name of the field, or
   its id (the `id` attribute set on the :ref:`field <reference/view_architectures/form/field>`).

   When there are several occurrences of the same field in the view, and there are several `label`
   components associated with these field nodes, these labels must have unique `for` attribute; in
   this case, referencing the `id` attribute of the corresponding field nodes.

   :requirement: Mandatory
   :type: str

.. attribute:: string
   :noindex:

   The label to display.

   :requirement: Optional
   :type: str
   :default: The field's label coming from the field definition on the model

.. include:: view_architectures/generic_attribute_class.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. _reference/view_architectures/form/button:

`button`: display action buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

   <form>
       <button type="object" name="ACTION" string="LABEL"/>
       <button type="object" name="ACTION" icon="FONT_AWESOME"/>
   </form>

The `button` element can have the following attributes:

.. include:: view_architectures/button_attribute_type.rst

.. include:: view_architectures/button_attribute_name.rst

.. include:: view_architectures/button_attribute_string.rst

.. include:: view_architectures/button_attribute_icon.rst

.. include:: view_architectures/button_attribute_help.rst

.. include:: view_architectures/button_attribute_context.rst

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. include:: view_architectures/generic_attribute_class.rst

.. attribute:: special
   :noindex:

   The behavior of the button for form views opened in dialog. It can have two different values:

   .. attribute:: save
      :noindex:

      Save the record and close the dialog.

   .. attribute:: cancel
      :noindex:

      Close the dialog without saving.

   .. example::
      .. code-block:: xml

         <button special="cancel" icon="fa-trash"/>

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: confirm
   :noindex:

   The confirmation message to display (and for the user to accept) before performing the button's
   action.

   .. example::
      .. code-block:: xml

         <button name="action_destroye_gate" string="Send the goa'uld" type="object" confirm="Do you confirm the action?"/>

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: data-hotkey
   :noindex:

   The hotkey (`keyboard_shortcut`_, similar to an accesskey_) that is bound to the button. It is
   enabled when the `alt` key is pressed together with the selected character, or together with the
   `shift` key and the selected character when `shift+` is prepended to the value.

   .. example::
      .. code-block:: xml

         <button type="object" name="action_confirm" string="Confirm" data-hotkey="c"/>
         <button type="object" name="action_tear" string="Tear the sheet" data-hotkey="shift+k"/>

   :requirement: Optional
   :type: str
   :default: `''`

.. _reference/view_architectures/form/chatter:

Chatter widget
~~~~~~~~~~~~~~

The :ref:`chatter widget <reference/mixins/mail/chatter>` is the communication and log tool allowing
to email colleagues and customers directly from a record (task, order, invoice, event, note...).

It is added with a `div` element with the class `oe_chatter` when the model inherits the
`mail.thread` mixin.

.. example::
   .. code-block:: xml

      <form>
          <sheet>
              ...
          </sheet>
          <div class="oe_chatter">
              <field name="message_follower_ids"/>
              <field name="activity_ids"/>
              <field name="message_ids" options="OPTIONS"/>
          </div>
      </form>

.. _reference/view_architectures/form/attachment:

Attachments preview widget
~~~~~~~~~~~~~~~~~~~~~~~~~~

The attachment preview widget is added with an *empty* `div` element with the class
`o_attachment_preview`.

.. example::
   .. code-block:: xml

      <form>
          <sheet>
              ...
          </sheet>
          <div class="o_attachment_preview"/>
      <form>

.. _reference/view_architectures/form/structural:

Structural components
---------------------

Structural components provide structure or "visual" features with little logic. They are used as
elements or sets of elements in form views.

Form views accept the following children structural components: :ref:`group
<reference/view_architectures/form/group>`, :ref:`sheet <reference/view_architectures/form/sheet>`,
:ref:`notebook <reference/view_architectures/form/notebook>`,
:ref:`notebook <reference/view_architectures/form/notebook>`,
:ref:`newline <reference/view_architectures/form/newline>`,
:ref:`separator <reference/view_architectures/form/separator>`,
:ref:`header <reference/view_architectures/form/header>`,
:ref:`footer <reference/view_architectures/form/footer>`,
:ref:`reference/view_architectures/form/button_container`, and
:ref:`reference/view_architectures/form/title_container`.

Placeholders are denoted in all caps.

.. _reference/view_architectures/form/group:

`group`: define columns layouts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `group` element is used to define column layouts in forms. By default, groups define 2 columns,
and most direct children of groups take a single column.

:ref:`field <reference/view_architectures/form/field>` elements that are direct children of groups
display a `label` by default, and the label and the field itself have a `colspan` of `1` each.

Children are laid out horizontally (they try to fill the next column before changing row).

.. code-block:: xml

   <form>
       <group>
           ...
       </group>
  </form>

The `group` element can have the following attributes:

.. attribute:: string
   :noindex:

   The title displayed for the group.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: col
   :noindex:

   The number of columns in a `group`.

   :requirement: Optional
   :type: int
   :default: `2`

.. attribute:: colspan
   :noindex:

   The number of columns taken by a child element.

   :requirement: Optional
   :type: int
   :default: `1`

.. include:: view_architectures/generic_attribute_invisible.rst

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/form_group.svg
             :align: center

      * - .. code-block:: xml

             <group>
                 <field name="a" string="custom"/>
                 <field name="b"/>
             </group>
             <group string="title 1">
                 <group string="title 2">
                     <field name="c"/>
                     <field name="d"/>
                 </group>
                 <group>
                     <field name="e"/>
                     <field name="f"/>
                     <field name="g"/>
                 </group>
             </group>
             <group col="12">
                 <group colspan="8">
                     <field name="h"/>
                 </group>
                 <group colspan="4">
                     <field name="i"/>
                 </group>
             </group>

.. _reference/view_architectures/form/sheet:

`sheet`: make the layout responsive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `sheet` element can be used as a direct child of the :ref:`form
<reference/view_architectures/form>` root element for a narrower and more responsive form layout
(centered page, margin...). It usually contains :ref:`group
<reference/view_architectures/form/group>` elements.

.. code-block:: xml

   <form>
       <sheet>
           ...
       </sheet>
   </form>

.. _reference/view_architectures/form/notebook:

`notebook` & `page`: add tabbed sections
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `notebook` element defines a tabbed section. Each tab is defined through a `page` child element.

The `notebook` element should not be placed within `group` elements.

.. code-block:: xml

   <form>
       <notebook>
           <page string="LABEL">
               ...
           </page>
       </notebook>
   </form>

The `page` element can have the following attributes:

.. attribute:: string
   :noindex:

   The title of the tab.

   :requirement: Optional
   :type: `str`
   :default: `''`

.. include:: view_architectures/generic_attribute_invisible.rst

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/form_notebook.svg
             :align: center

      * - .. code-block:: xml

             <form>
                 <notebook>
                     <page string="Page1">
                         ...
                     </page>
                     <page string="Page2">
                         ...
                     </page>
                 </notebook>
             </form>

.. _reference/view_architectures/form/newline:

`newline`: start new group rows
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `newline` element is used within :ref:`group <reference/view_architectures/form/group>`
elements to end the current row early and immediately switch to a new row, without filling any
remaining column beforehand.

.. code-block:: xml

   <form>
       <group>
           ...
           <newline/>
           ...
       </group>
   </form>

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/form_newline.svg
             :align: center

      * - .. code-block:: xml

             <form>
                 <group string="Title 1">
                     <group string="Title 1.1">...</group>
                     <newline/>
                     <group string="Title 1.2">...</group>
                     <group string="Title 1.3">...</group>
                 </group>
             </form>

.. _reference/view_architectures/form/separator:

`separator`: add horizontal spacing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `separator` element adds vertical spacing between elements within a group.

.. code-block:: xml

   <form>
       ...
       <separator/>
       ...
   </form>

The `<separator>` element can have the following attributes:

.. attribute:: string
   :noindex:

   The title as a section title.

   :requirement: Optional
   :type: `str`
   :default: `''`

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/form_separator.svg
             :align: center

      * - .. code-block:: xml

             <form>
                 <group>
                     <FIELD/>
                     <separator string="Title 1"/>
                     <FIELD/>
                     <group>
                         <FIELD/>
                         <separator string="Title 2"/>
                         <FIELD/>
                     </group>
                     <group>
                         <FIELD/>
                         <FIELD/>
                     </group>
                 </group>
             </form>

.. tip::
   The `separator` element can be used to achieve visual separation between elements within the same
   inner `group` element while keeping them horizontally aligned.

.. _reference/view_architectures/form/header:

`header`: display workflow buttons and a status
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `header` element combined with the :ref:`sheet <reference/view_architectures/form/sheet>`
element provides a full-width location above the sheet itself generally used to display workflow
:ref:`button <reference/view_architectures/form/button>` elements and a :ref:`field
<reference/view_architectures/form/field>` element rendered as status widget.

.. code-block:: xml

   <form>
       <header>
           <BUTTONS/>
       </header>
       <sheet>
           ...
       </sheet>
   </form>

.. example::

   .. code-block:: xml

      <header>
          <button string="Reset" type="object" name="set_draft" invisible="state != 'done'"/>
          <field name="state" widget="statusbar" statusbar_visible="draft,posted" options="{'clickable': 1}"/>
      </header>

.. _reference/view_architectures/form/footer:

`footer`: display dialog buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `footer` element is used to display :ref:`buttons <reference/view_architectures/form/button>`
elements at the end of dialogs.

.. code-block:: xml

   <form>
       <sheet>
           ...
       </sheet>
       <footer>
           <BUTTONS/>
       </footer>
   </form>

.. example::
   .. code-block:: xml

      <footer>
          <button string="Save" special="save"/>
          <button string="Feature action" type="object" name="my_action" class="btn-primary"/>
          <button string="Discard" special="cancel"/>
      </footer>

When no `footer` element is specified, the view's standard buttons (like Save or Discard) will be
present by default. It is also possible to avoid replacing the standard buttons in form or x2many
dialogs by using the `replace` attribute. This attribute defaults to `True` if not specified but
setting it to `False` (or 0) will make it so that the specified `footer` will be added next to the
default buttons instead of replacing them.

.. example::
   .. code-block:: xml

      <footer replace="0">
          <button string="Custom added action" type="object" name="my_action" class="btn-primary"/>
      </footer>

.. _reference/view_architectures/form/button_container:

Buttons container
~~~~~~~~~~~~~~~~~

A :ref:`button <reference/view_architectures/form/button>` elements container can be created with a
`div` element with the class `button_box`.

.. code-block:: xml

   <form>
       <div name="button_box">
           <BUTTONS/>
       </div>
   <form>

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/form_button_box.svg
             :align: center

      * - .. code-block:: xml

             <form>
                 <div name="button_box">
                     <button type="edit" name="edit" icon="fa-edit" string="Button1"/>
                     <button type="object" name="my_action" icon="fa-dollar">
                         <field name="total_inv" widget="statinfo" string="Invoices"/>
                     </button>
                 </div>
             <form>

.. _reference/view_architectures/form/title_container:

Title container
~~~~~~~~~~~~~~~

A title :ref:`field <reference/view_architectures/form/field>` element container can be created with
a `div` element with the class `oe_title`.

.. code-block:: xml

   <form>
       <sheet>
           <div class="oe_title">
               <h1><FIELD/></h1>
           </div>
       </sheet>
   <form>

.. _reference/view_architectures/settings:

Settings
========

Settings views are a customization of the :ref:`form <reference/view_architectures/form>` view. They
are used to display settings in a centralized place. They differ from generic form views in that
they have a search bar and a sidebar.

.. example::

   .. code-block:: xml

      <app string="CRM" name="crm">
          <setting type="header" string="Foo">
              <field name="foo" title="Foo?."/>
              <button name="nameAction" type="object" string="Button"/>
          </setting>
          <block title="Title of group Bar">
              <setting help="this is bar" documentation="/applications/technical/web/settings/this_is_a_test.html">
                  <field name="bar"/>
              </setting>
              <setting string="This is Big BAR" company_specific="1">
                  <field name="bar"/>
              </setting>
          </block>
          <block title="Title of group Foo">
              <setting string="Personalize setting" help="this is full personalize setting">
                  <div>This is a different setting</div>
              </setting>
          </block>
      </app>

.. _reference/view_architectures/settings/components:

Components
----------

Settings views accept the :ref:`field <reference/view_architectures/form/field>`, :ref:`label
<reference/view_architectures/form/label>` and :ref:`button
<reference/view_architectures/form/button>` elements of :ref:`form
<reference/view_architectures/form>` views, as well as three additional children elements:
:ref:`app <reference/view_architectures/settings/app>`, :ref:`block
<reference/view_architectures/settings/block>`, and :ref:`setting
<reference/view_architectures/settings/setting>`.

Placeholders are denoted in all caps.

.. _reference/view_architectures/settings/app:

`app`: declare the application
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `app` element is used to declare the application on the settings view. It creates an entry with
the logo of the application on the sidebar of the view. It also acts as delimiter when searching.

.. code-block:: xml

   <form>
       <app string="NAME" name="TECHNICAL_NAME">
       ...
       </app>
   </form>

The `app` element can have the following attributes:

.. attribute:: string
   :noindex:

   The name of the application.

   :requirement: Mandatory
   :type: str

.. attribute:: name
   :noindex:

   The technical name of the application (the name of the module).

   :requirement: Mandatory
   :type: str

.. attribute:: logo
   :noindex:

   The `relative path`_ to the logo.

   :requirement: Optional
   :type: path_
   :default: A path computed with the `name` attribute: :file:`/{name}/static/description/icon.png`

.. todo: document attribute notApp

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. _reference/view_architectures/settings/block:

`block`: declare a group of settings
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `block` element is used to declare a group of settings. This group can have a title and a
description.

.. code-block:: xml

   <form>
       <app string="NAME" name="TECHNICAL_NAME">
           ...
           <block title="TITLE">
               ...
           </block>
           ...
       </app>
  </form>

The `block` element can have the following attributes:

.. attribute:: title
   :noindex:

   The title of the block of settings. One can search on its value.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: help
   :noindex:

   The description of the block of settings. One can search on its value.

   :requirement: Optional
   :type: str
   :default: `''`

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. _reference/view_architectures/settings/setting:

`setting`: declare the setting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `setting` element is used to declare the setting itself.

The first :ref:`field <reference/view_architectures/form/field>` element in the setting is used as
the main field. It is placed on the left panel if it is a boolean field, and on the top of the right
panel otherwise. The field is also used to create the setting label if a `string` attribute is not
defined.

The `setting` element can also contain additional elements (e.g., HTML). All of those elements are
rendered in the right panel.

.. code-block:: xml

   <form>
       <app string="NAME" name="TECHNICAL_NAME">
           <block title="TITLE">
               ...
               <setting string="SETTING_NAME">
                   ...
                   <field name="FIELD_NAME"/>
                   ...
               </setting>
               ...
           </block>
       </app>
   </form>

The `<setting>` element can have the following attributes:

.. attribute:: type
   :noindex:

   By default, a setting is visually separated on two panels (left and right), and is used to edit a
   given :ref:`field <reference/view_architectures/form/field>`. By defining `type="header"`, a
   special kind of setting is rendered instead. This setting is used to modify the scope of the
   other settings. For example, on the Website application, this setting is used to indicate to
   which website the other settings apply. The header setting is visually represented as a banner on
   top of the screen.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: string
   :noindex:

   The text used as the label of the setting.

   :requirement: Optional
   :type: str
   :default: The first field's label

.. attribute:: title
   :noindex:

   The text used as a tooltip.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: help
   :noindex:

   The description of the setting. This text is displayed just below the setting label (with the
   class `text-muted`).

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: company_dependent
   :noindex:

   Whether the setting is company-specific. If set, an icon is displayed next to the setting label.

   It accepts only the value `'1'`.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: documentation
   :noindex:

   The `path`_ to the documentation on the setting. If set, a clickable icon is displayed next to
   the setting label. The path can be both an absolute or a `relative path`_. In the latter case, it
   is relative to `https://www.odoo.com/documentation/<version>`.

   :requirement: Optional
   :type: `path_`
   :default: `''`

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. _reference/view_architectures/list:

List
====

The root element of list views is `list` (the previous name was `tree`).

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 ...
             </list>

.. _reference/view_architectures/list/root:

Root attributes
---------------

Optional attributes can be added to the root element `list` to customize the view.

.. include:: view_architectures/root_attribute_string.rst

.. include:: view_architectures/root_attribute_create.rst

.. include:: view_architectures/root_attribute_edit.rst

.. include:: view_architectures/root_attribute_delete.rst

.. attribute:: import
   :noindex:

   Disable/enable record import from data on the view.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: export_xlsx
   :noindex:

   Disable/enable record export to data on the view.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: editable
   :noindex:

   Make the view's records editable in-place, and allow creating new records from a row of the list.
   It can have two different values:

   .. attribute:: top
      :noindex:

      New records are created from the top of the list.

   .. attribute:: bottom
      :noindex:

      New records are created from the bottom of the list.

   The architecture for the inline :ref:`form <reference/view_architectures/form>` view is derived
   from the list view. Most attributes valid on a form view's fields and buttons are thus accepted
   by list views, although they may not have any meaning if the list view is non-editable.

   .. important::
      This behavior is disabled if the `edit` attribute is set to `False`.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: multi_edit
   :noindex:

   Activate the multi-editing feature that allows updating a field to the same value for multiple
   records at once.

   It accepts only the value `'1'`.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: open_form_view
   :noindex:

   Display a button at the end of each row to open the record in a form view.

   It has no effect if the view is non-editable.

   :requirement: Optional
   :type: bool
   :default: `False`

.. include:: view_architectures/root_attribute_default_group_by.rst

.. include:: view_architectures/root_attribute_default_order.rst

.. attribute:: decoration-<style>
   :noindex:

   The style that should be applied to matching records' rows, as a Python expression that evaluates
   to a bool.

   `<style>` must be replaced by one of `bf` (bold), `it` (italic), `info`, `warning`, `danger`,
   `muted`, `primary`, and `success`.

   .. example::
      .. code-block:: xml

         <list decoration-danger="field_qty &gt; field_limit">
             ...
         </list>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `False`

.. attribute:: limit
   :noindex:

   The default size of a page. It must be strictly positive.

   :requirement: Optional
   :type: int
   :default: `80` for list views, `40` for X2many lists in form views

.. attribute:: groups_limit
   :noindex:

   The default number of groups on a page when the list view is grouped. It must be strictly
   positive.

   :requirement: Optional
   :type: int
   :default: `80` for list views, `40` for X2many lists in form views

.. attribute:: expand
   :noindex:

   Whether the first level of groups should be opened by default when the list view is grouped.

   .. warning::
      It may be slow, depending on the number of groups.

   :requirement: Optional
   :type: bool
   :default: `False`

.. include:: view_architectures/root_attribute_sample.rst

.. _reference/view_architectures/list/components:

Components
----------

List views accept the following children elements: :ref:`field
<reference/view_architectures/list/field>`, :ref:`button
<reference/view_architectures/list/button>`, :ref:`groupby
<reference/view_architectures/list/groupby>`, :ref:`header
<reference/view_architectures/list/header>`, :ref:`control, and create
<reference/view_architectures/list/control>`.

Placeholders are denoted in all caps.

.. _reference/view_architectures/list/field:

`field`: display field values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `field` element renders (and allows editing of, possibly) a single field of all current records
as a column.

Using the same field multiple times in a list view is not supported

.. code-block:: xml

   <list>
       <field name="FIELD_NAME"/>
   </list>

The `field` element can have the following attributes:

.. include:: view_architectures/field_attribute_name.rst

.. include:: view_architectures/field_attribute_string.rst

.. attribute:: optional
   :noindex:

   Make the visibility of the field optional. The field's column can be hidden or shown through a
   button on the view's header.

   It can have two different values:

   .. attribute:: show
      :noindex:

      The field is shown by default.

   .. attribute:: hide
      :noindex:

      The field is hidden by default.

   .. example::
      .. code-block:: xml

         <field name="fname_a" optional="show"/>
         <field name="fname_b" optional="hide"/>

   :requirement: Optional
   :type: str

.. include:: view_architectures/field_attribute_readonly.rst

.. include:: view_architectures/field_attribute_required.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. include:: view_architectures/generic_attribute_column_invisible.rst

.. include:: view_architectures/generic_attribute_groups.rst

.. attribute:: decoration-<style>
   :noindex:

   The style that should be applied to matching records' field, as a Python expression that
   evaluates to a bool.

   `<style>` must be replaced by one of `bf` (bold), `it` (italic), `info`, `warning`, `danger`,
   `muted`, `primary`, and `success`.

   .. example::
      .. code-block:: xml

         <field name="name" decoration-bf="1"/>
         <field name="quantity" decoration-info="state == 'draft'"/>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `False`

.. attribute:: sum, avg
   :noindex:

   The aggregate to display at the bottom of the column. The aggregation is computed on only
   records that are currently displayed. The aggregation operation must match the corresponding
   field's `aggregator`.

   .. example::
      .. code-block:: xml

         <field name="sent" sum="Total" />
         <field name="clicks_ratio" avg="Average"/>

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: width
   :noindex:

   The list view always tries to optimize the available space among columns. For some field types,
   this is done by enforcing a width, depending on the field type. For instance, we know exactly the
   number of pixels required to display a date, so we can ensure that a column for a date field
   doesn't take more space than what is strictly necessary, thus leaving the extra space for the
   other columns. However, the framework can't guess the adequate width for every field types. For
   instance, char fields can be used to encode large values, or 3-letter country codes. In the
   latter case, one can set the width directly in the arch (e.g. `width="40px"`). It represents
   the width (always in pixels) required to render the values inside the cells. The width of the
   column will then be the sum of the given value and the cells' left and right paddings.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: nolabel
   :noindex:

   Whether the field's column header should remain empty. If set, the column will not be sortable.

   It accepts only the value `'1'`

   :requirement: Optional
   :type: str
   :default: `''`

.. note::
   When a list view is grouped, numeric fields are aggregated and displayed for each group. Also, if
   there are too many records in a group, a pager appears on the right of the group row. For this
   reason, it is a bad practice to have a numeric field in the last column when the list view is in
   a situation where it can be grouped. However, it does not pose a problem for X2many fields in a
   form view, as they cannot be grouped.

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list_field.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 <field name="name" string="My Custom Name"/>
                 <field name="amount" sum="Total"/>
                 <field name="currency_id"/>
                 <field name="tax_id"/>
             </list>

.. _reference/view_architectures/list/button:

`button`: display action buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

   <list>
       <button type="object" name="ACTION" string="LABEL"/>
       <button type="object" name="ACTION" icon="FONT_AWESOME"/>
   </list>

The `button` element can have the following attributes:

.. include:: view_architectures/button_attribute_type.rst

.. include:: view_architectures/button_attribute_name.rst

.. include:: view_architectures/button_attribute_string.rst

.. include:: view_architectures/button_attribute_icon.rst

.. include:: view_architectures/button_attribute_help.rst

.. include:: view_architectures/button_attribute_context.rst

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. include:: view_architectures/generic_attribute_column_invisible.rst

.. include:: view_architectures/generic_attribute_class.rst

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list_button.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 <field name="name"/>
                 <button type="edit" name="edit" icon="fa-edit" title="Edit"/>
                 <button type="object" name="my_method" string="Button1" column_invisible="context.get('hide_button')" invisible="amount &gt; 3"/>
                 <field name="amount"/>
                 <field name="currency_id"/>
                 <field name="tax_id"/>
             </list>

.. _reference/view_architectures/list/groupby:

`groupby`: define group headers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `groupby` element is used to define group headers with :ref:`button
<reference/view_architectures/list/button>` elements when grouping records on
:attr:`~odoo.fields.Many2one` fields. It also accepts :ref:`field
<reference/view_architectures/list/field>` elements, which can be used for modifiers. These fields
thus belong on the Many2one co-model. These extra fields are fetched in batch.

.. code-block:: xml

   <list>
       ...
       <groupby name="FIELD_NAME">
           <BUTTONS/>
           <FIELDS/>
       </groupby>
   </list>

The `groupby` element can have the following attributes:

.. attribute:: name
   :noindex:

   The name of the a :attr:`~odoo.fields.Many2one` field to use as header.

   A special :ref:`button <reference/view_architectures/list/button>` element with `type="edit"` can
   be defined to open the Many2one field's form view.

   :requirement: Mandatory
   :type: str

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list_groupby.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 <field name="name"/>
                 <field name="amount"/>
                 <field name="currency"/>
                 <field name="tax_id"/>

                 <groupby name="partner_id">
                     <button type="edit" name="edit" icon="fa-edit" title="Edit"/>
                     <field name="email"/>
                     <button type="object" name="my_method" string="Button1" invisible="email == 'jhon@conor.com'"/>
                 </groupby>
             </list>

.. note::
   Fields inside the `groupby` element are used only to fetch and store the value, but they are
   never displayed.

.. _reference/view_architectures/list/header:

`header`: display workflow buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

   <list>
       <header>
           <BUTTONS/>
       </header>
       ...
   </list>

The `header` element accepts the following children elements:

.. attribute:: button
   :noindex:

   The `button` element allows defining buttons in the control panel. It is the same element as the
   :ref:`button element in list views <reference/view_architectures/list/button>`, but it accepts
   one more attribute when placed inside a `header` element:

   .. attribute:: display
      :noindex:

      Make the button available at all time, without having to select records.

      It accepts only the value `always`.

      .. example::

         .. code-block:: xml

            <header>
                <button name="toDoAlways" type="object" string="Always displayed" display="always"/>
                <button name="toDoSelection" type="object" string="Displayed if selection"/>
            </header>

      :requirement: Optional
      :type: str
      :default: `''`

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list_header.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 <header>
                     <button type="object" name="to_draft" string="Button1" invisible="context.get('hide_button')"/>
                 </header>
                 <field name="name"/>
                 <field name="amount"/>
                 <field name="currency"/>
                 <field name="tax_id"/>
             </list>

.. _reference/view_architectures/list/control:

`control`: customize create and delete actions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `control` element allows to customize the create and delete actions. In particular, it allows
to add special create buttons with specific contexts, to use regular view buttons as create
actions, and to make the create and delete actions available only under certain conditions.

.. important::
   The `control` element is only supported in list views inside :class:`~odoo.fields.One2many` or
   :class:`~odoo.fields.Many2many` fields.

.. code-block:: xml

   <list>
      <control>
          <create string="LABEL"/>
          <BUTTONS/>
          <delete invisible="parent.is_sent">
       </control>
       ...
   </list>

The `control` element takes no attributes. It accepts the following children elements:

.. attribute:: create
   :noindex:

   The given `create` elements replace the default :guilabel:`Add a line` button.
   A `create` element can have the following attributes:

   .. attribute:: string
      :noindex:

      The button's text.

      :requirement: Mandatory
      :type: str

   .. attribute:: context
      :noindex:

      The context that is merged into the view's context when performing the button's call, as a Python
      expression that evaluates to a dict.

      :requirement: Optional
      :type: :ref:`Python expression <reference/view_architectures/python_expression>`
      :default: `{}`

   .. attribute:: invisible
      :noindex:

      Whether the element is visible (`False`) or hidden (`True`), as a Python expression that evaluates to a
      bool. The parent record and the context can be used in the expresion.

      :requirement: Optional
      :type: :ref:`Python expression <reference/view_architectures/python_expression>`
      :default: `False`

.. attribute:: button
   :noindex:

   Like :ref:`regular view buttons <reference/view_architectures/list/button>`

.. attribute:: delete

   The `delete` element allows to conditionnaly hide the delete icon, row by row. There can only be
   one child of this type. It can have only one attribute:

   .. attribute:: invisible
      :noindex:

      Same as for `create`, except that in this case the record itself can also be used in the
      expresion.

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/list_control.svg
             :align: center

      * - .. code-block:: xml

             <list>
                 <field name="name"/>
                 <field name="amount"/>
                 <field name="currency"/>
                 <field name="tax_id"/>
                 <control>
                     <create string="Add an item"/>
                     <create string="Add a section" context="{'default_type': 'section'}"/>
                     <create string="Add a note" context="{'default_type': 'note'}"/>
                 </control>
             </list>

.. _reference/view_architectures/search:

Search
======

Search views are different from other view types in that they are not used to display content.
Although they apply to a specific model, they are used to filter another view's content (usually
aggregated views; e.g., :ref:`reference/view_architectures/list` and
:ref:`reference/view_architectures/graph`).

The root element of search views is `search`.

It takes no attributes.

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/search.svg
             :align: center

      * - .. code-block:: xml

             <search>
                 ...
             </search>

.. _reference/view_architectures/search/components:

Components
----------

Search views accept the following children elements: :ref:`field
<reference/view_architectures/search/field>`, :ref:`filter
<reference/view_architectures/search/filter>`, :ref:`separator
<reference/view_architectures/search/separator>`, :ref:`group
<reference/view_architectures/search/group>`, and :ref:`searchpanel
<reference/view_architectures/search/searchpanel>`.

Placeholders are denoted in all caps.

.. _reference/view_architectures/search/field:

`field`: filter based on field values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `field` element defines domains or contexts with user-provided values. When search domains are
generated, field domains are joined with each other and with filters using the **AND** operator.

.. code-block:: xml

   <search>
       <field name="FIELD_NAME"/>
   </search>

The `field` element can have the following attributes:

.. attribute:: name
   :noindex:

   The name of the field to filter on.

   :requirement: Mandatory
   :type: str

.. include:: view_architectures/field_attribute_string.rst

.. attribute:: operator
   :noindex:

   By default, fields generate domains of the form :samp:`[(name, {operator}, value)]`, where `name`
   is the field's name and `value` is the value provided by the user, possibly filtered or
   transformed (e.g., a user is expected to provide the *label* of a selection field's value, not
   the value itself).

   The `operator` attribute allows overriding the default operator, which depends on the field's
   type (e.g., `=` for float fields, but `ilike` for char fields and `child_of` for many2one).

   :requirement: Optional
   :type: str
   :default: `=`

.. attribute:: filter_domain
   :noindex:

   The domain to use as the field's search domain, as a Python expression that evaluates to a
   :ref:`domain <reference/orm/domains>`.

   It  can use the `self` variable to inject the provided value in the custom domain. It can be used
   to generate significantly more flexible domains than with the `operator` attribute alone (e.g.,
   search on multiple fields at once).

   If both the `operator` and `filter_domain` attributes are provided, `filter_domain` takes
   precedence.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `[]`

.. attribute:: context
   :noindex:

   The context to merge into the context of the view that the search view is targeting, as a Python
   expression that evaluates to a dict.

   It can contain user-provided values, which are available under the `self` variable.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`

.. attribute:: domain
   :noindex:

   The filters to apply to the completion results for fields that allow for auto-completion (e.g.,
   :class:`~odoo.fields.Many2one`).

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `[]`

.. include:: view_architectures/generic_attribute_groups.rst

.. include:: view_architectures/generic_attribute_invisible.rst

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/search_field.svg
             :align: center

      * - .. code-block:: xml

             <search>
                 <field name="name" string="My Custom Name"/>
                 <field name="amount"/>
                 <field name="currency_id"/>
                 <field name="ref" filter_domain="[('name', 'like', self)]"/>
             </search>

.. _reference/view_architectures/search/filter:

`filter`: create pre-defined filters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `filter` element is used to create pre-defined filters that can be toggled in the search view.
It allows adding data to the search context :dfn:`the context passed to the data view for
searching/filtering`, or appending new sections to the search filter.

.. code-block:: xml

   <search>
       <filter string="LABEL" domain="DOMAIN"/>
   </search>

The `filter` element can have the following attributes:

.. attribute:: name
   :noindex:

   The technical name of the filter. It can be used to :ref:`enable it by default
   <reference/view_architectures/search/defaults>` or as an :ref:`inheritance hook
   <reference/view_records/inheritance>`.

   :requirement: Mandatory
   :type: str

.. attribute:: string
   :noindex:

   The label of the filter.

   :requirement: Mandatory
   :type: str

.. attribute:: help
   :noindex:

   The tooltip displayed when hovering the filter.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: domain
   :noindex:

   The domain to append to the action's domain as part of the search domain.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `[]`

.. attribute:: date
   :noindex:

   The name of the `date` or `datetime` field to filter on.

   When used, this attribute creates a set of filters available in a sub-menu of the
   :guilabel:`Filters` menu. The available filters are time-dependent but not dynamic in the sense
   that their domains are evaluated at the time of the control panel instantiation.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date"/>

   By default, these filters contain a dropdown with different sub-filters that allow you to filter based on months, quarters and years.
   Additionally, you can create custom sub-filters that allow filtering using domains.
   These custom filters must have the following attributes: `name`, `string` and `domain`.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date">
            <filter name="create_date_last_30_days" string="Last 30 Days" domain="[('create_date', '&gt;', datetime.datetime.combine(context_today() - relativedelta(days=30), datetime.time(23, 59, 59)).to_utc())]"/>
         </filter>

   Note that all custom filters defined this way are mutually exclusive with each other and with the other sub-filters.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: start_month
   :noindex:

   The earliest month that will show up in the dropdown of a date filter, as an offset relative to the current month.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" start_month="-3"/>

      If the current month is February, the earliest month selectable in the dropdown will be November.

   :requirement: Optional
   :type: int
   :default: `-2`
   :scope: Filters with a non-empty `date` attribute

.. attribute:: end_month
   :noindex:

   The latest month that will show up in the dropdown of a date filter, as an offset relative to the current month.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" end_month="2"/>

      If the current month is February, the latest month selectable in the dropdown will be March.

   :requirement: Optional
   :type: int
   :default: `0`
   :scope: Filters with a non-empty `date` attribute

.. attribute:: start_year
   :noindex:

   The earliest year that will show up in the dropdown of a date filter, as an offset relative to the current year.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" start_year="-3"/>

      If the current year is 2024, the earliest year selectable in the dropdown will be 2021.

   :requirement: Optional
   :type: int
   :default: `-2`
   :scope: Filters with a non-empty `date` attribute

.. attribute:: end_year
   :noindex:

   The latest year that will show up in the dropdown of a date filter, as an offset relative to the current year.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" end_year="2"/>

      If the current year is 2024, the latest year selectable in the dropdown will be 2025.

   :requirement: Optional
   :type: int
   :default: `0`
   :scope: Filters with a non-empty `date` attribute

.. attribute:: default_period
   :noindex:

   The default period of the time-based filter (with a `date` attribute). It must be one of, or a
   comma-separated list of valid filter ids.

   Valid filter ids include the following:

   - `first_quarter`, `second_quarter`, `third_quarter` and `fourth_quarter`.
   - One of `month`, `month-x` and `month+x`, where `x` is a non-zero integer value between `start_month` and `end_month`.
   - One of `year`, `year-x` and `year+x`, where `x` is a non-zero integer value between `start_year` and `end_year`.
   - The `name` of any custom filter defined within the filter, prepended with `custom_`.

   The filter must be in the default set of filters activated at the view initialization.

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" default_period="year,month-1"/>

   .. example::
      .. code-block:: xml

         <filter string="Creation Date" name="filter_create_date" date="create_date" default_period="custom_create_date_last_30_days">
            <filter name="create_date_last_30_days" string="Last 30 Days" domain="[('create_date', '&gt;', datetime.datetime.combine(context_today() - relativedelta(days=30), datetime.time(23, 59, 59)).to_utc())]"/>
         </filter>

   :requirement: Optional
   :type: str
   :default: `month`, or the closest value to the current month if unavailable
   :scope: Filters with a non-empty `date` attribute

.. include:: view_architectures/generic_attribute_invisible.rst

.. include:: view_architectures/generic_attribute_groups.rst

.. attribute:: context
   :noindex:

   The context merged into the action's domain to generate the search domain

   The context key `group_by` set with a field as value can be used to define a group available in
   the :guilabel:`Group By` menu. When the field is of type `date` or `datetime`, the filter
   generates a submenu of the :guilabel:`Group By` menu with the following interval options
   available: :guilabel:`Year`, :guilabel:`Quarter`, :guilabel:`Month`, :guilabel:`Week`, and
   :guilabel:`Day`.

   .. example::
      .. code-block:: xml

         <filter string="Category" name="groupby_category" context="{'group_by': 'category_id'}"/>
         <filter string="Creation Date" name="groupby_create_date" context="{'group_by': 'create_date:week'}"/>

   .. note::
      The results of `formatted_read_group` grouped on a field may be influenced by its `group_expand`
      attribute, allowing to display empty groups when needed. For more information, please refer to
      :class:`~odoo.fields.Field`.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`

.. caution::
   Sequences of filters (without non-filters elements separating them) are treated as inclusively
   composited: they will be composed with `OR` rather than the usual `AND`.

   .. example::
      .. code-block:: xml

         <filter domain="[('state', '=', 'draft')]"/>
         <filter domain="[('state', '=', 'done')]"/>

      Records whose `state` field is `draft` or `done` are shown.

   .. example::
      .. code-block:: xml

         <filter domain="[('state', '=', 'draft')]"/>
         <separator/>
         <filter domain="[('delay', '&lt;', 15)]"/>

      Records whose `state` field is `draft` **and** `delay` field is below 15.

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/search_filter.svg
             :align: center

      * - .. code-block:: xml

             <search>
                 <filter string="My Custom Name" domain="[('name', 'ilike', 'AAA')]"/>
                 <filter string="My orders" domain="[('user_id', '=', uid)]"/>
                 <filter string="Category" context="{'group_by': 'category_id'}"/>
             </search>

.. _reference/view_architectures/search/separator:

`separator`: separate groups of filters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `separator` element is used to separates groups of :ref:`filters
<reference/view_architectures/search/filter>` in simple search views. For more complex search views,
the :ref:`group <reference/view_architectures/search/group>` element is recommended.

.. code-block:: xml

   <search>
       <FILTERS/>
       <separator/>
       <FILTERS/>
   </search>

The `separator` element takes no attributes.

.. _reference/view_architectures/search/group:

`group`: separate groups of filters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `group` element is used to separate groups of :ref:`filters
<reference/view_architectures/search/filter>` in cluttered search views. In simpler search views, it
can be substituted for the :ref:`separator <reference/view_architectures/search/group>` element.

.. code-block:: xml

   <search>
       <group>
           <FILTERS/>
       </group>
   </search>

The `group` element takes no attributes.

.. _reference/view_architectures/search/searchpanel:

`searchpanel`: display search panels
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `searchpanel` element displays a search panel to the left of multi-records views. It allows for
quickly filtering data on the basis of given fields.

.. code-block:: xml

   <search>
       <searchpanel>
           <FIELDS/>
       </searchpanel>
   </search>

The `searchpanel` element accepts only `field` children elements.

The `field` element used as a child element of a `searchpanel` element can have the following
attributes:

.. attribute:: name
   :noindex:

   The name of the field to filter on.

   :requirement: Mandatory
   :type: str

.. include:: view_architectures/field_attribute_string.rst

.. attribute:: select
   :noindex:

   The behavior and display of the field. It can have two different values:

   .. attribute:: one
      :noindex:

      At most one value can be selected. Supported field types are `many2one` and `selection`.

   .. attribute:: multi
      :noindex:

      Several values can be selected. Supported field types are `many2one`, `many2many` and
      `selection`.

   :requirement: Optional
   :type: str
   :default: `one`

.. include:: view_architectures/generic_attribute_groups.rst

.. attribute:: icon
   :noindex:

   The icon of the field.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: color
   :noindex:

   The color of the field.

   :requirement: Optional
   :type: str
   :default: `''`

When the `field` element has the `select=one` attribute set, it can have the following additional
attributes:

.. attribute:: hierarchize
   :noindex:

   Whether child categories should appear under their parent category, or at the same hierarchy
   level.

   :requirement: Optional
   :type: bool
   :default: `True`
   :scope: :class:`~odoo.fields.Many2one` fields

.. attribute:: depth
   :noindex:

   If set to a non zero integer, the hierarchy (if any) will be unfold up to the given level.

   :requirement: Optional
   :type: integer
   :default: `0`
   :scope: :class:`~odoo.fields.Many2one` fields

When the `field` element has the `select=multi` attribute set, it can have the following additional
attributes:

.. attribute:: enable_counters
   :noindex:

   Whether the record counters is computed and displayed if non-zero.

   .. tip::
      This attribute exists to avoid impacting performance. Another way to address performance
      issues is to override the `search_panel_select_range` and `search_panel_select_multi_range`
      methods.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: expand
   :noindex:

   Whether categories and filters with no records should be shown.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: limit
   :noindex:

   The maximal number of values to fetch for the field. If the limit is reached, no values are
   displayed on the search panel, and an error message is shown instead. If set to 0, all values are
   fetched.

   :requirement: Optional
   :type: int
   :default: `200`

.. attribute:: domain
   :noindex:

   The conditions that the records have to satisfy.

   .. example::
      .. code-block:: xml

         <searchpanel>
             <field name="department_id"/>
             <field name="manager_id" select="multi" domain="[('department_id', '=', department_id)]"/>
         </searchpanel>

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `[]`

.. attribute:: groupby
   :noindex:

   The name of the field name on which values should be grouped.

   :requirement: Optional
   :type: str
   :default: `''`
   :scope: :class:`~odoo.fields.Many2one` and :class:`~odoo.fields.Many2many` fields

.. _reference/view_architectures/search/defaults:

Search defaults
---------------

Search fields and filters can be configured through the action's `context` using
:samp:`search_default_{name}` keys. For fields, the value must be the value to set to the field. For
filters, it must be a boolean value or a number.

.. example::
   With `foo`, a field, and `bar`, a filter, the following action context will search `foo` on
   `acro` and enable `bar` by default:

   .. code-block:: python

      {
          'search_default_foo': 'acro',
          'search_default_bar': 1
      }

A numeric value (between 1 and 99) can be used to define the order of default *groupby* filters.

.. example::
   With `foo` and `bar`, two *groupby* filters, the following action context will first enable
   `bar`, then `foo`.

   .. code-block:: python

      {
          'search_default_foo': 2,
          'search_default_bar': 1
      }

.. _reference/view_architectures/kanban:

Kanban
======

Kanban views are used as a `kanban board <https://en.wikipedia.org/wiki/Kanban_board>`_
visualisation: they display records as "cards", halfway between a :ref:`list
<reference/view_architectures/list>` and a :ref:`form <reference/view_architectures/form>` view.

Records may be grouped in columns for use in workflow visualisation or manipulation (e.g., tasks or
work-progress management), or ungrouped (used simply to visualize records).

The root element of Kanban views is `kanban`.

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/kanban.svg
             :align: center

      * - .. code-block:: xml

             <kanban>
                 ...
             </kanban>

.. note::
   Kanban views load and display a maximum of ten columns. Any column after that is closed but can
   still be opened by the user.

.. _reference/view_architectures/kanban/root:

Root attributes
---------------

Optional attributes can be added to the root element `kanban` to customize the view.

.. include:: view_architectures/root_attribute_string.rst

.. include:: view_architectures/root_attribute_create.rst

.. include:: view_architectures/root_attribute_edit.rst

.. include:: view_architectures/root_attribute_delete.rst

.. include:: view_architectures/root_attribute_default_group_by.rst

.. include:: view_architectures/root_attribute_default_order.rst

.. attribute:: class
   :noindex:

   Add HTML classes to the root HTML element of the view.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: examples
   :noindex:

   The key in the `KanbanExamplesRegistry` of the examples that can be browsed when creating a new
   column in the grouped kanban view.

   .. seealso::
      `Use of the examples attribute in the utm module
      <{GITHUB_PATH}/addons/utm/static/src/js/utm_campaign_kanban_examples.js>`_

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: group_create
   :noindex:

   Whether the :guilabel:`Add a new column` bar is visible.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: group_delete
   :noindex:

   Whether columns can be deleted via the cog menu.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: group_edit
   :noindex:

   Whether columns can be edited via the cog menu.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: groups_draggable
   :noindex:

   Whether columns can be reordered.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: records_draggable
   :noindex:

   Whether records can be dragged when the kanban view is grouped.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: archivable
   :noindex:

   Whether records belonging to a column can be archived and unarchived when the `active` field is
   defined on the model.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: quick_create
   :noindex:

   Whether it should be possible to create records without switching to the form view.

   :requirement: Optional
   :type: bool
   :default: `True` when the kanban view is grouped by many2one, selection, char, or boolean fields,
             otherwise `False`

.. attribute:: quick_create_view
   :noindex:

   The reference of the :ref:`form <reference/view_architectures/form>` view to open when using the
   quick creation of records.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: on_create
   :noindex:

   The custom action to call when clicking on :guilabel:`Create`.

   If set to `'quick_create'`, the quick creation of records is used instead. If the quick creation
   is disabled, the standard create action is called.

   :requirement: Optional
   :type: str
   :default: `''`

.. attribute:: can_open
   :noindex:

   By default, clicking on a kanban card opens the corresponding record in a form view.
   This behavior can be disabled by setting the attribute `can_open` to `False`.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: highlight_color
   :noindex:

   Name of the integer field used to color the left border of the kanban cards.

   :requirement: Optional
   :type: str

.. include:: view_architectures/root_attribute_sample.rst

.. _reference/view_architectures/kanban/components:

Components
----------

Kanban views accept the following children elements: :ref:`templates
<reference/view_architectures/kanban/templates>`, :ref:`field
<reference/view_architectures/kanban/field>`, :ref:`header
<reference/view_architectures/kanban/header>`, :ref:`progressbar
<reference/view_architectures/kanban/progressbar>`.

.. _reference/view_architectures/kanban/templates:

`templates`: define cards structure
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `templates` element is used to define the :ref:`QWeb templates <reference/qweb>` that structure
the kanban cards.

The definition of a card's structure can be split into multiple templates for clarity, but at least
one root `card` template must be defined.

An additional template can be defined: `menu`. If defined, it is rendered inside a dropdown
that can be toggled with a vertical ellipsis (:guilabel:`⋮`) on the top right of the card.

The templates are written in :ref:`JavaScript QWeb <reference/qweb/javascript>`.

.. code-block:: xml

   <kanban>
      <templates>
         <t t-name="card">
            <field name="name"/>
         </t>
      </templates>
   </kanban>

.. warning::

   These are QWeb templates, not `Owl <https://github.com/odoo/owl>`_ templates, meaning that
   directives like `t-on-click` aren't available.

Fields
******

Inside those templates, the `field` element allows to render a field. It can have the following
attributes:

.. include:: view_architectures/field_attribute_name.rst

By default, field nodes are replaced by a `span` containing their formatted value, unless the
`widget` attribute is specified, in which case their rendering and behavior depends on the
corresponding widget. The `widget` attribute can have different values including:

   .. attribute:: handle
     :noindex:

     Allows reordering records with a drag and drop, using the corresponding field as order.

   .. attribute:: kanban_color_picker
     :noindex:

     Allows editing a color (integer) field. Combined with the root attribute `highlight_color`,
     allows editing the color of the cards.

See the :ref:`Field section <reference/js/widgets>` to discover
various widgets and their options.

Rendering Context
*****************

Kanban templates being rendered with the :ref:`QWeb engine <reference/qweb/javascript>`, they have
a *rendering context*, a set of variables available in the templates, containing useful information
and tools. Here're the available variables:

.. attribute:: record
   :noindex:

   An object with all the fields defined in the view. Each field has two attributes: `value`
   and `raw_value`. The former is formatted according to current user parameters, while the latter
   is the raw value (e.g. the `id` for a many2one field). This object is useful for instance, for
   using field values inside `t-if` conditions. For display purposes, we recommend using the
   `<field>` tag.

   .. example::
      .. code-block:: xml

         <kanban>
            <templates>
               <field name="is_company"/>
               <t t-name="card">
                  <field name="name"/>
                  <field t-if="!record.is_company.raw_value" name="parent_id">
               </t>
            </templates>
         </kanban>

.. attribute:: widget
   :noindex:

   An object with 2 keys defining the available actions for the user:

   - `editable`: true if the user can edit records, false otherwise;
   - `deletable`: true if the user can delete records, false otherwise.

   This is useful to conditionally display elements requiring specific access rights.

   .. example::
      .. code-block:: xml

         <kanban>
            <templates>
               <t t-name="card">
                  <field name="name"/>
               </t>
               <t t-name="menu">
                  <a t-if="widget.deletable" role="menuitem" type="delete" class="dropdown-item">Delete</a>
               </t>
            </templates>
         </kanban>

.. attribute:: context
   :noindex:

   The current context propagated from either the action that opens the kanban view, or the one2many
   or many2many field that embeds the kanban view in a form view.

.. attribute:: read_only_mode
   :noindex:

   Indicates that the view is readonly.

   :type: bool

.. attribute:: selection_mode
   :noindex:

   Whether the kanban view is opened when selecting a many2one or many2many field (in mobile
   environment).

   :type: bool

.. attribute:: luxon
   :noindex:

   The `luxon <https://moment.github.io/luxon/api-docs/index.html>`_ object, allowing to
   manipulate date and datetime field values.

.. attribute:: JSON
   :noindex:

   The Javascript `JSON <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>`_
   namespace object containing a `parse` method allowing to parse json field values into Javascript
   Objects.

Buttons and links
*****************

While most of the kanban templates are standard :ref:`QWeb templates <reference/qweb>`, the kanban
view processes `button` and `a` elements is a special way. Buttons and links with a `type` attribute
perform different operations than their standard HTML function. The `type` attribute can have the
values `action` and `object` of :ref:`regular buttons <reference/view_architectures/list/button>`,
or the following values:

  .. attribute:: open
     :noindex:

     Clicking the element opens the card's record in form view.

  .. attribute:: delete
     :noindex:

     Clicking the element deletes the card's record and removes the card.

  .. attribute:: archive
     :noindex:

     Clicking the element archives the card's record and removes the card.

  .. attribute:: unarchive
     :noindex:

     Clicking the element unarchives the card's record and removes the card.

  .. attribute:: set_cover
     :noindex:

     Clicking the element allows to select an image to set as cover image of the record.

Widgets
*******

The `widget` element allows to insert dynamically generated (in Javascript) html inside the cards. It
has a mandatory `name` attribute, referring to a Javascript implementation (an Owl component)
registered to the `view_widgets` registry.

.. todo: document view_widgets registry and standard widgets

See the :ref:`Widget section <reference/javascript_reference/view_widgets>` to discover various
widgets and their options.

Layouts
*******

Several card layouts can be easily obtained using standard html elements and `Bootstrap utility
classes <https://getbootstrap.com/docs/5.0/utilities/api/>`_. By default, the card is a `flexbox
container <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox>`_
with `column` direction.

.. example::
   .. code-block:: xml

      <kanban>
         <templates>
            <t t-name="card">
               <field class="fw-bold fs-5" name="display_name"/>
               <field class="text-muted" name="parent_id"/>
               <field name="tag_ids" widget="many2many_tags"/>
            </t>
         </templates>
      </kanban>

The `footer` html element is styled to stick to the bottom of the card, and is as a flexbox
container with `row` direction, allowing to easily display several fields on the same line.

.. example::
   .. code-block:: xml

      <kanban>
         <templates>
            <t t-name="card">
               <field class="fw-bold fs-5" name="display_name"/>
               <field class="text-muted" name="parent_id"/>
               <field name="tag_ids" widget="many2many_tags"/>
               <footer>
                  <field name="priority" widget="priority"/> <!-- bottom left corner -->
                  <field class="ms-auto" name="activity_ids" widget="kanban_activity"/> <!-- bottom right corner -->
               </footer>
            </t>
         </templates>
      </kanban>

To display some content, like an image, on the side of the card, one can use `aside` and `main` html
elements, with the `flex-row` classname on the card. The `main` node is a flexbox container like the
card is when there's no `aside`.

.. example::
   .. code-block:: xml

      <kanban>
         <templates>
            <t t-name="card" class="flex-row">
               <aside>
                  <field name="avatar_128" widget="image" alt="Avatar"/>
               </aside>
               <main class="ms-2">
                  <field class="fw-bold fs-5" name="display_name"/>
                  <field class="text-muted" name="parent_id"/>
                  <field name="tag_ids" widget="many2many_tags"/>
                  <footer>
                     <field name="priority" widget="priority"/>
                     <field class="ms-auto" name="activity_ids" widget="kanban_activity"/>
                  </footer>
               </main>
            </t>
         </templates>
      </kanban>

.. tip::
   The classname `o_kanban_aside_full` set on the `aside` element removes the padding so that the
   image spreads to the borders of the card.

.. _reference/view_architectures/kanban/field:

`field`: declare more fields to fetch
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `field` element can also be used *outside* the kanban :ref:`templates
<reference/view_architectures/kanban/templates>`. In that case, it allows to declare fields that are
not displayed in the card, but still need to be fetched, for instance because their value is used
in a `t-if` condition.

.. example::
   .. code-block:: xml

      <kanban>
         <templates>
            <field name="is_company"/>
            <t t-name="card">
               <field name="name"/>
               <field t-if="!record.is_company.raw_value" name="parent_id">
            </t>
         </templates>
      </kanban>

.. _reference/view_architectures/kanban/header:

`header`: display buttons in the control panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `header` element is used to insert custom buttons in the control panel.

.. code-block:: xml

   <kanban>
      <header>
         ...
      </header>
      ...
   </kanban>

The `header` element accepts only `button` children elements, similar to :ref:`list views' button
<reference/view_architectures/list/button>` elements.

The `button` element used as a child element of the `header` element can have the following
additional attributes:

.. attribute:: display
   :noindex:

   The display mode of the button. It can have two different values:

   .. attribute:: display
      :noindex:

      The button is displayed only when some records are selected; their action applies to the
      selected records.


   .. attribute:: always
      :noindex:

      The button is displayed at all times, even if no records are selected.

   .. important::
      Only the `always` display mode is available because it is not yet possible to select records
      in a kanban view.

   .. example::
      .. code-block:: xml

         <header>
             <button name="toDoAlways" type="object" string="Always displayed" display="always"/>
             <button name="toDoSelection" type="object" string="Displayed if selection"/>
         </header>

   :requirement: Optional
   :type: str
   :default: `display`

.. _reference/view_architectures/kanban/progressbar:

`progressbar`: show progress bars on top of columns
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The `progressbar` element is used to define a progress bar to display on top of kanban columns in
grouped kanban views.

.. code-block:: xml

   <kanban>
       <progressbar field="FIELD_NAME"/>
       ...
   </kanban>

The `progressbar` element can have the following attributes:

.. attribute:: field
   :noindex:

   The name of the field on which the progress bar's sub-groups
   are based.

   :requirement: Mandatory
   :type: str

.. attribute:: colors
   :noindex:

   The mapping of the progress bar's field values to the color values `muted`, `success`, `warning`,
   and `danger`.

   :requirement: Mandatory
   :type: `JSON
          <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON>`_

.. attribute:: sum_field
   :noindex:

   The name of the field to use in a sum displayed next to the progress bar. If not set, the total
   number of records is displayed instead.

   :requirement: Optional
   :type: str
   :default: `''`

.. admonition:: Possible structure and representation of its rendering

   .. list-table::
      :class: o-showcase-table

      * - .. image:: view_architectures/kanban_progressbar.svg
             :align: center

      * - .. code-block:: xml

             <kanban>
                 <progressbar field="activity_state"
                              colors="{'planned': 'success', 'today': 'warning', 'overdue': 'danger'}"
                              sum_field="expected_revenue"/>
                 <templates>
                     ...
                 </templates>
             </kanban>

`control`: customize create and delete actions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Like for :ref:`list views <reference/view_architectures/list/control>`.

.. todo::
  - kanban-specific CSS
  - kanban structures/widgets (vignette, details, ...)

.. ALL VIEWS BELOW HAVE NOT YET BEEN CONVERTED TO THE NEW REFERENCE DOCUMENTATION FORMAT

.. _reference/view_architectures/qweb:

QWeb
====

QWeb views are standard :ref:`reference/qweb` templates inside a view's
``arch``. They don't have a specific root element. Because QWeb views don't
have a specific root element, their type must be specified explicitly (it can
not be inferred from the root element of the ``arch`` field).

QWeb views have two use cases:

* they can be used as frontend templates, in which case
  :ref:`reference/data/template` should be used as a shortcut.
* they can be used as actual qweb views (opened inside an action), in which
  case they should be defined as regular view with an explicit ``type`` (it
  can not be inferred) and a model.

The main additions of qweb-as-view to the basic qweb-as-template are:

* qweb-as-view has a special case for a ``<nav>`` element bearing the CSS
  class ``o_qweb_cp_buttons``: its contents should be buttons and will be
  extracted and moved to the control panel's button area, the ``<nav>`` itself
  will be removed, this is a work-around to control panel views not existing
  yet
* qweb-as-view rendering adds several items to the standard qweb rendering
  context:

  .. rst-class:: o-definition-list

  ``model``
    the model to which the qweb view is bound
  ``domain``
    the domain provided by the search view
  ``context``
    the context provided by the search view
  ``records``
    a lazy proxy to ``model.search(domain)``, this can be used if you just
    want to iterate the records and not perform more complex operations
    (e.g. grouping)
* qweb-as-view also provides additional rendering hooks:

  - ``_qweb_prepare_context(view_id, domain)`` prepares the rendering context
    specific to qweb-as-view
  - ``qweb_render_view(view_id, domain)`` is the method called by the client
    and will call the context-preparation methods and ultimately
    ``env['ir.qweb'].render()``.

.. _reference/view_architectures/graph:

Graph
=====

The graph view is used to visualize aggregations over a number of records or
record groups. Its root element is ``<graph>`` which can take the following
attributes:

.. rst-class:: o-definition-list

``type`` (optional)
  one of ``bar`` (default), ``pie`` and ``line``, the type of graph to use

``stacked`` (optional)
  only used for ``bar`` charts. Set to ``0`` to prevent the bars within a group
  to be stacked initially.

``disable_linking`` (optional)
  set to ``1`` to prevent from redirecting clicks on graph to list view

``order`` (optional)
  if set, x-axis values will be sorted by default according their measure with
  respect to the given order (``asc`` or ``desc``). Only used for ``bar`` and
  ``pie`` charts.

``string`` (optional)
  string displayed in the breadcrumbs when redirecting to list view.

.. include:: view_architectures/root_attribute_sample.rst

The only allowed element within a graph view is ``field`` which can have the
following attributes:

.. rst-class:: o-definition-list

``name`` (mandatory)
  the name of a field to use in the view. If used for grouping (rather
  than aggregating)

``invisible`` (optional)
  if true, the field will not appear either in the active measures nor in the
  selectable measures.

``type`` (optional)
  if set to ``measure``, the field will be used as an aggregated value within a
  group instead of a grouping criteria. It only works for the last field
  with that attribute but it is useful for other fields with string attribute
  (see below).

``interval`` (optional)
  on date and datetime fields, groups by the specified interval (``day``,
  ``week``, ``month``, ``quarter`` or ``year``) instead of grouping on the
  specific datetime (fixed second resolution) or date (fixed day resolution).
  Default is ``month``.

``string`` (optional)
  only used for field with ``type="measure"``. The name that will be used to
  display the field in the graph view, overrides the default python String
  attribute of the field.

The measures are automatically generated from the model fields; only the
aggregatable fields are used. Those measures are also alphabetically
sorted on the string of the field.

.. warning::

   graph view aggregations are performed on database content, non-stored
   function fields can not be used in graph views


In Graph views, a ``field`` can have a ``widget`` attribute to dictate its format.
The widget should be a field formatter, of which the most interesting are
``float_time``, and ``monetary``.

.. code-block:: xml

   <field name="working_hours_close" widget="float_time"/>

.. _reference/view_architectures/pivot:

Pivot
=====

The pivot view is used to visualize aggregations as a `pivot table`_. Its root
element is ``<pivot>`` which can take the following attributes:

.. rst-class:: o-definition-list

``disable_linking`` (optional)
  Set to ``1`` to remove table cell's links to list view.
``display_quantity`` (optional)
  Set to ``1`` to display the Quantity column by default.
``default_order`` (optional)
  The name of the measure and the order (asc or desc) to use as default order
  in the view.

  .. code-block:: xml

     <pivot default_order="foo asc">
        <field name="foo" type="measure"/>
     </pivot>

The only allowed element within a pivot view is ``field`` which can have the
following attributes:

.. rst-class:: o-definition-list

``name`` (mandatory)
  the name of a field to use in the view. If used for grouping (rather
  than aggregating)

``string`` (optional)
  the name that will be used to display the field in the pivot view,
  overrides the default python String attribute of the field.

``type`` (optional)
  indicates whether the field should be used as a grouping criteria or as an
  aggregated value within a group. Possible values are:

  .. rst-class:: o-definition-list

  ``row`` (default)
    groups by the specified field, each group gets its own row.
  ``col``
    creates column-wise groups
  ``measure``
    field to aggregate within a group
  ``interval``
    on date and datetime fields, groups by the specified interval (``day``,
    ``week``, ``month``, ``quarter`` or ``year``) instead of grouping on the
    specific datetime (fixed second resolution) or date (fixed day resolution).

``invisible`` (optional)
  if true, the field will not appear either in the active measures nor
  in the selectable measures (useful for fields that do not make sense aggregated,
  such as fields in different units, e.g. € and $).

.. include:: view_architectures/root_attribute_sample.rst

The measures are automatically generated from the model fields; only the
aggregatable fields are used. Those measures are also alphabetically
sorted on the string of the field.

.. warning::

    like the graph view, the pivot aggregates data on database content
    which means that non-stored function fields can not be used in pivot views


In Pivot view a ``field`` can have a ``widget`` attribute to dictate its format.
The widget should be a field formatter, of which the most interesting are
``date``, ``datetime``, ``float_time``, and ``monetary``.

For instance a timesheet pivot view could be defined as::

    <pivot string="Timesheet">
        <field name="employee_id" type="row"/>
        <field name="date" interval="month" type="col"/>
        <field name="unit_amount" type="measure" widget="float_time"/>
    </pivot>

.. _reference/view_architectures/calendar:

Calendar
========

Calendar views display records as events in a daily, weekly, monthly or yearly
calendar.

.. note:: By default the calendar view will be centered around the current date
   (today). You can pass a specific initial date to the context of the action in
   order to set the initial focus of the calendar on the period (see `mode`) around
   this date (the context key to use being `initial_date`)

Their root element is ``<calendar>``. Available attributes on the root node are:

.. rst-class:: o-definition-list

.. attribute:: date_start
   :noindex:

   Name of the record's field holding the start date for the event.

   :requirement: Mandatory
   :type: str

.. attribute:: date_stop
   :noindex:

   Name of the record's field holding the end date for the event.

   :requirement: Optional
   :type: str

.. attribute:: date_delay
   :noindex:

   Alternative to ``date_stop``. Provides the duration of the event instead of
   its end date (unit: hour).

   :requirement: Optional
   :type: str

.. attribute:: scales
   :noindex:

   Comma-separated list of available scales, among ``day``, ``week``, ``month``,
   ``year``. By default, all scales are available.

   :requirement: Optional
   :type: str
   :default: `"day,week,month,year"`

.. attribute:: mode
   :noindex:

   Default scale of the calendar.

   :requirement: Optional
   :type: `"day"`, `"week"`, `"month"` or `"year"`
   :default: `"week"`

.. attribute:: color
   :noindex:

   Name of the record's field to use for *color segmentation*. Records in the
   same color segment are allocated the same highlight color in the calendar.

   :requirement: Optional
   :type: str

.. attribute:: all_day
   :noindex:

   Name of the record's boolean field indicating whether the corresponding
   event is flagged as day-long, in which case duration is irrelevant.

   :requirement: Optional
   :type: str

.. attribute:: aggregate
   :noindex:

   Name of the record's field to use to display aggregated values next to
   filters, in the filter side panel. The aggregator can be explicitly given
   (e.g. `aggregate="expected_revenue:sum"`). If not given, the aggregator of
   the field is used. Supported aggregators are `sum`, `avg`, `min`, `max`,
   `count` and `count_distinct`.

   :requirement: Optional
   :type: str

.. attribute:: event_limit
   :noindex:

   Limits the number of events displayed in calendar cells, in `month` scale, and
   for all-day events in `week` and `day` scales. If there are more events than
   the limit, a "more" button is added to show the rest of the events in a popover.

   :requirement: Optional
   :type: int
   :default: 5

.. attribute:: show_unusual_days
   :noindex:

   If set to true weekend days and public holidays have a greyed out background.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: hide_date
   :noindex:

   Set it to true to hide the date part in the record's popover.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: hide_time
   :noindex:

   Set it to true to hide the time part in the record's popover.

   :requirement: Optional
   :type: bool
   :default: False

.. attribute:: month_overflow
   :noindex:

   By default, in month mode, the last days of the previous month and the first
   days of the next months are displayed, as well as their events. This option
   allows to disable this such that those sibling days are greyed out and their
   events aren't displayed.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: show_date_picker
   :noindex:

   By default, a mini calendar (in month mode) is displayed in the side panel,
   next to the main calendar. This option allows to remove it by setting it to
   `False`.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: event_open_popup
   :noindex:

   If true, open events in dialog to edit them, otherwise, open them in a
   classical form view.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: form_view_id
   :noindex:

   View to open when the user creates or edits an event. By default, uses the
   form view of the current action, if any.

   :requirement: Optional
   :type: int

.. attribute:: quick_create
   :noindex:

   Enables quick event creation on click: only asks the user for a ``name`` and
   tries to create a new event with just that and the clicked event time. Falls
   back to a full form view if the quick creation fails.

   :requirement: Optional
   :type: bool
   :default: `True`

.. attribute:: create_name_field
   :noindex:

   Name of the record's field holding the display name of the record. This field
   is used when creating records through the 'quick create' mechanism.

   :requirement: Optional
   :type: str
   :default: `name`

.. attribute:: quick_create_view_id
   :noindex:

   Id of the form view to open when the attribute ``quick_create`` is set and the
   user creates an event, instead of the default dialog which only allows to
   specify a name.

   :requirement: Optional
   :type: int

.. attribute:: multi_create_view
   :noindex:

   Reference of a form view. When set, in **month** scale, allows to create (and
   delete) records in batches by clicking on calendar cells or by selecting an
   area of calendar cells. One record is then created for each selected cell and
   for each active filter's value, with the values of the multi create form view,
   which is displayed in the side panel. In delete mode, all records displayed
   in selected cells are deleted.

   Note: if the side panel contains multiple filter sections, only the first one
   is used, to avoid a combinatorial explosion.

   :requirement: Optional
   :type: str

.. include:: view_architectures/root_attribute_create.rst

.. include:: view_architectures/root_attribute_edit.rst

.. attribute:: delete
   :noindex:

   Disable/enable record deletion on the view.

   :requirement: Optional
   :type: bool
   :default: `True`

.. include:: view_architectures/root_attribute_string.rst

.. _reference/view_architectures/calendar/components:

Components
----------

Calendar views accept a single type of child elements: ``<field>``. Those fields
are displayed in a popover, in the given order, which opens when a record
(a calendar event) is clicked.

.. note:: Fields in the popover are readonly. If the `edit` action is available,
   an `Edit` button is displayed in the popover, to open a form view where fields
   can be edited.

Field nodes can have the following attributes:

.. include:: view_architectures/field_attribute_name.rst

.. attribute:: invisible
   :noindex:

   Python expression indicating whether the field should be displayed or not.
   Other fields of the model can be used in the expression, as long as those
   fields are also declared here.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `False`

.. attribute:: options
   :noindex:

   Python expression encoding an object of options for the field. In particular,
   the option `icon`, allowing to specify, as classnames, which icon to display
   in front of the field in the popover (for instance, `fa fa-users`). If no
   icon is given, the option `string` can be set, and its value is then used as
   label, displayed in front of the field.

   :requirement: Optional
   :type: :ref:`Python expression <reference/view_architectures/python_expression>`
   :default: `{}`

Specifying a ``<field>`` in a calendar arch also allows to customize the filter
side panel, by setting the `filters` attribute. Extra attributes are then
available for that matter:

.. attribute:: filters
   :noindex:

   If set to true, the field can be used as filter, from the side panel of the
   calendar.

   :requirement: Optional
   :type: bool
   :default: `False`

.. attribute:: avatar_field
   :noindex:

   Only for relational fields. Specify the name of the field on the co-model to
   use to display as avatar in front of field values in the side panel filters.

   :requirement: Optional
   :type: str

.. attribute:: color
   :noindex:

   Specify which field to use to colorize the checkbox in the side panel filters.
   By default, the color attribute of the calendar view is used to match events
   with values in the filters.

   :requirement: Optional
   :type: str

.. attribute:: write_model
   :noindex:

   Allows to create new filter values on the fly. The given model is then used
   as model for those filters.  To combine with `write_field`.

   :requirement: Optional
   :type: str

.. attribute:: write_field
   :noindex:

   Combined with `write_model`, specifies the field name, in the given model,
   to use to encode the filter value.

   :requirement: Optional
   :type: str

.. attribute:: filter_field
   :noindex:

   Combined with `write_model`, specifies the field name, in the given model,
   to use to encode the status of the filter (whether it is checked or not).

   :requirement: Optional
   :type: str

.. _reference/view_architectures/activity:

Activity
========

The Activity view is used to display the activities linked to the records. The
data are displayed in a chart with the records forming the rows and the activity
types the columns. The first cell of each row displays a (customizable, see
``templates``, quite similarly to :ref:`reference/view_architectures/kanban`) card representing
the corresponding record. When clicking on others cells, a detailed description
of all activities of the same type for the record is displayed.

.. warning::

   The Activity view is only available when the ``mail`` module is installed,
   and for the models that inherit from the ``mail.activity.mixin``.

The root element of the Activity view is ``<activity>``, it accepts the following
attributes:

.. rst-class:: o-definition-list

``string`` (mandatory)
    A title, which should describe the view

Possible children of the view element are:

.. rst-class:: o-definition-list

``field``
  declares fields to use in activity *logic*. If the field is simply displayed
  in the activity view, it does not need to be pre-declared.

  Possible attributes are:

  .. rst-class:: o-definition-list

  ``name`` (required)
    the name of the field to fetch

``templates``
  defines the :ref:`reference/qweb` templates. Cards definition may be
  split into multiple templates for clarity, but activity views *must* define at
  least one root template ``activity-box``, which will be rendered once for each
  record.

  The activity view uses mostly-standard :ref:`javascript qweb
  <reference/qweb/javascript>` and provides the following context variables
  (see :ref:`reference/view_architectures/kanban` for more details):

  .. rst-class:: o-definition-list

  ``widget``
    the current :js:class:`ActivityRecord`, can be used to fetch some
    meta-information. These methods are also available directly in the
    template context and don't need to be accessed via ``widget``
  ``record``
    an object with all the requested fields as its attributes. Each field has
    two attributes ``value`` and ``raw_value``

.. _reference/view_architectures/cohort:

Cohort
======

.. raw:: html

   <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

The cohort view is used to display and understand the way some data changes over
a period of time.  For example, imagine that for a given business, clients can
subscribe to some service.  The cohort view can then display the total number
of subscriptions each month, and study the rate at which client leave the service
(churn). When clicking on a cell, the cohort view will redirect you to a new action
in which you will only see the records contained in the cell's time interval;
this action contains a list view and a form view.

.. note:: By default the cohort view will use the same list and form views as those
   defined on the action. You can pass a list view and a form view
   to the context of the action in order to set/override the views that will be
   used (the context keys to use being `form_view_id` and `list_view_id`)

For example, here is a very simple cohort view:

.. code-block:: xml

    <cohort string="Subscription" date_start="date_start" date_stop="date" interval="month"/>

The root element of the Cohort view is <cohort>, it accepts the following
attributes:

.. rst-class:: o-definition-list

``string`` (mandatory)
    A title, which should describe the view

``date_start`` (mandatory)
    A valid date or datetime field. This field is understood by the view as the
    beginning date of a record

``date_stop`` (mandatory)
    A valid date or datetime field. This field is understood by the view as the
    end date of a record.  This is the field that will determine the churn.

``disable_linking`` (optional)
  Set to ``1`` to prevent from redirecting clicks on cohort cells to list view.

``mode`` (optional)
    A string to describe the mode. It should be either 'churn' or
    'retention' (default). Churn mode will start at 0% and accumulate over time
    whereas retention will start at 100% and decrease over time.

``timeline`` (optional)
    A string to describe the timeline. It should be either 'backward' or 'forward' (default).
    Forward timeline will display data from date_start to date_stop, whereas backward timeline
    will display data from date_stop to date_start (when the date_start is in future / greater
    than date_stop).

``interval`` (optional)
    A string to describe a time interval. It should be 'day', 'week', 'month''
    (default) or 'year'.

``measure`` (optional)
    A field that can be aggregated.  This field will be used to compute the values
    for each cell.  If not set, the cohort view will count the number of occurrences.

``<field>`` (optional)
  allows to specify a particular field in order to manage it from the available measures, it's
  main use is for hiding a field from the selectable measures:

  .. rst-class:: o-definition-list

  ``name`` (mandatory)
    the name of the field to use in the view.
  ``string`` (optional)
    the name that would be used to display the field in the cohort view, overrides the
    default python String attribute of the field.
  ``invisible`` (optional)
    if true, the field will not appear either in the active measures nor in the selectable
    measures (useful for fields that do not make sense aggregated, such as fields in different
    units, e.g. € and $).
    If the value is a domain, the domain is evaluated in the context of the current row's
    record, if ``True`` the corresponding attribute is set on the cell.
  ``widget`` (optional)
    alternate representations for a field's display.

.. include:: view_architectures/root_attribute_sample.rst

.. _reference/view_architectures/grid:

Grid
====

.. raw:: html

   <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

Limitations
-----------

This view is a work in progress and may have to be expanded or altered.

* only ``date`` column fields have been tested, ``selection`` and ``many2one``
  are nominally implemented and supported but have not been tested,
  ``datetime`` is not implemented at all.
* column cells are hardly configurable and must be numerical
* cell adjustment is disabled by default and must be configured to be enabled
* ``create``, ``edit`` and ``delete`` ACL metadata doesn't get automatically
  set on the view root due to limitations in ``fields_view_get``
  post-processing (there's a fixed explicit list of the view types getting
  those attributes)

Schema
------

The grid view has its own schema and additional validation in this module. The
view architecture is:

``<grid>`` (1)
    architecture root element

    * mandatory ``string`` attribute
    * optional ``create``, ``edit`` and ``delete`` attributes
    * optional ``adjustment`` and ``adjust_name`` attributes

      ``adjustment`` can be either ``object`` or ``action`` to indicate
      whether a cell's adjustment should be performed through a method call
      or an action execution. ``adjust_name`` provides respectively the method
      name and the action id.

      In both cases, the adjustment parameters are provided as a
      ``grid_adjust`` context member, in the ``object`` case, the parameters
      are also provided as positional function parameters (next to an empty
      list of ids):

      ``row_domain``
        the domain matching the entire row of the adjusted cell
      ``column_field``
        the name of the column for the adjusted cell
      ``column_value``
        the value of the column for the adjusted cell
      ``cell_field``
        the measure field of the adjusted cell
      ``change``
        the difference between the old value of the cell and the adjusted one,
        may be positive or negative

    * optional ``hide_line_total`` and ``hide_column_total`` attributes

      ``hide_line_total``
        set to true to hide total line (default false)
      ``hide_column_total``
        set to true to hide total column (default false)

    * optional ``barchart_total`` attribute

      ``barchart_total``
        set to ``true`` in order to display a bar chart at the bottom of the grid, based on
        the totals of the columns (default false).

    * optional ``create_inline`` and ``display_empty`` attributes

      ``create_inline``
        set to ``true`` in order to display an additional row at bottom of the grid with an
        ``Add a line`` button (default false). When this option is set to ``true``, the ``Add a line`` button
        from the control panel is hidden. When no data is available and when ``display_empty`` is
        not set (so when the help content is displayed), the the ``Add a line`` button from the
        control panel is shown in order to let the user create a first record.
      ``display_empty``
        set to ``true`` in order to keep displaying the grid when there is no data (default false). This can
        be useful when you want the user to be able to keep track of the current period (as dates
        are displayed in the columns headers). As a reminder, when no data are present and when this
        attribute is no set, the help content is displayed instead of the grid.

``<button>`` (0+)
    Regular Odoo action buttons, displayed in the view header

    * mandatory ``string`` attribute (the button label)
    * mandatory ``type`` attribute, either ``object`` or ``action``

      .. note:: workflow buttons are not supported

    * mandatory ``name`` attribute, either the name of the method to call, or
      the ID of the action to execute
    * optional ``context``

    The server callback is provided with all the record ids displayed in the
    view, either as the ids passed to the method (``object`` button) or as
    the context's ``active_ids`` (``action`` buttons)

``<field type="row">`` (1+)
    Row grouping fields, will be replaced by the search view's groupby filter
    if any.

    The order of ``row`` fields in the view provides their grouping depth:
    if the first field is ``school`` and the second is ``age`` the records
    will be grouped by ``school`` first and by ``age`` within each school.

``<field type="col">`` (1)
    Column grouping field.

    The col field can contain 0+ ``<range>`` elements which specify
    customisable column ranges. ``range`` elements have the following
    mandatory attributes

    ``name``
        can be used to override the default range (the first one by default)
        through the ``grid_range`` context value
    ``string``
        the range button's label (user-visible)
    ``span``
        symbolic name of the span of all columns to display at once in the
        view, may trigger pagination.

        For ``date`` fields, valid spans are currently ``week`` and ``month``.
    ``step``
        symbolic name of the step between one column and the previous/next

        For ``date`` fields, the only valid span is currently ``day``.
``<field type="measure">`` (1)
    Cell field, automatically accumulated (by ``read_group``).

    The measure field can take a ``widget`` attribute to customise its
    display.

Server interactions
-------------------

Aside from optional buttons, the grid view currently calls two methods:

* ``read_grid`` (provided on all models by the module) returns almost the
  entirety of the grid's content as a dict:

  * the row titles is a list of dictionaries with the following keys:

    ``values`` (required)
        this maps to a dictionary with a key per ``row`` field, the values are
        *always* of the form ``[value, label]``.
    ``domain`` (required)
        the domain of any record at the source of this row, in case it's
        necessary to copy a record during cell adjustment

  * the column titles is a list of dictionaries with at least one key:

    ``values`` (required)
        see row title values
    ``domain`` (required)
        see column domain value
    ``current`` (optional)
        boolean, marks/highlights a column

  * the grid data as a list (of rows) of list (of cells) of cell dicts each
    with the following keys:

    ``value``
        the numeric value associated with the cell
    ``domain``
        the domain matching the cell's records (should be assumed opaque)
    ``size``
        the number of records grouped in the cell
    ``readonly`` (optional)
        a boolean indicating that this specific cell should not be
        client-editable
    ``classes`` (optional)
        a list of classes (as strings) to add on the cell's container (between
        the cell's TD and the cell's potentially-editable element).

        In case of conflicts between this list and the base classes (prefixed
        with ``o_grid_cell_``), the classes in this list are ignored.

    Note that the grid data is *dense*, if querying the database yields no
    group matching a cell a cell will generate an "empty" cell with default
    values for required keys.
  * ``prev`` and ``next`` which can be either falsy (no pagination) or a
    context item to merge into the view's own context to ``read_grid`` the
    previous or next page, it should be assumed to be opaque

* ``read_grid_domain(field, range)`` (provided on al models by the module)
  returns the domain matching the current configured "span" of the grid. This
  is also done internally by ``read_grid``, but can be useful or necessary to
  call independently to use with separate e.g. ``search_count`` or
  ``read_group``.

* ``adjust_grid``, for which there currently isn't a blanket implementation
  and whose semantics are likely to evolve with time and use cases

Server Hooks
------------

``read_grid`` calls a number of hooks allowing the customisation of its
operations from within without having to override the entire method:

``_grid_format_cell(group, cell_field)``
    converts the output of a read_group (group-by-group) into cells in the
    format described above (as part of "the grid data")
``_grid_make_empty_cell(row_domain, column_domain, view_domain)``
    generates an empty version of a cell (if there is no corresponding group)
``_grid_column_info(name, range)``
    generates a ColumnMetadata object based on the column type, storing values
    either returned directly (as part of ``read_grid``) or used query and
    reformat ``read_group`` into ``read_grid``:

    ``grouping``
        the actual grouping field/query for the columns
    ``domain``
        domain to apply to ``read_group`` in case the column field is
        paginated, can be an empty list
    ``prev`` and ``next``
        context segments which will be sent to ``read_grid`` for pages before
        and after the current one. If ``False``, disables pagination in that
        direction
    ``values``
        column values to display on the "current page", each value is a
        dictionary with the following keys:

        ``values``
            dictionary mapping field names to values for the entire column,
            usually just ``name`` -> a value
        ``domain``
            domain matching this specific column
        ``is_current``
            ``True`` if the current column should be specifically outlined in
            the grid, ``False`` otherwise
        ``format``
            how to format the values of that column/type from ``read_group``
            formatting to ``read_grid`` formatting (matching ``values`` in
            ColumnInfo)

ACL
---

* if the view is not editable, individual cells won't be editable
* if the view is not creatable, the ``Add a Line`` button will not be
  displayed (it currently creates a new empty record)

Context Keys
------------

``grid_range``
    selects which range should be used by default if the view has multiple
    ranges
``grid_anchor``
    if applicable, used as the default anchor of column ranges instead of
    whatever ``read_grid`` defines as its default.

    For date fields, the reference date around which the initial span will be
    computed. The default date anchor is "today" (in the user's timezone)

.. _reference/view_architectures/gantt:

Gantt
=====

.. raw:: html

   <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

Gantt views appropriately display Gantt charts (for scheduling).

The root element of gantt views is ``<gantt/>``, it has no children but can
take the following attributes:

:string:
  string (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  bool (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  bool (default: ``True``)

  Disable/enable record edition on the view.

:delete:
  bool (default: ``True``)

  Disable/enable record deletion on the view through the **Action** dropdown.

.. rst-class:: o-definition-list

``date_start`` (required)
  name of the field providing the start datetime of the event for each
  record.
``date_stop`` (required)
  name of the field providing the end duration of the event for each
  record.
``dependency_field``
  name of the ``many2many`` field that provides the dependency relation between two records.
  If B depends on A, ``dependency_field`` is the field that allows getting A
  from B. Both this field and ``dependency_inverted_field`` field are used to
  draw dependency arrows between pills and reschedule them.
``dependency_inverted_field`` (required if ``dependency_field`` is provided)
  name of the ``many2many`` field that provides the invert dependency relation than
  ``dependency_field``. If B depends on A, ``dependency_inverted_field`` is
  the field that allows getting B from A.
``color``
  name of the field used to color the pills according to its value
``decoration-{$name}``
  `python expression`_ that evaluates to a bool

  allow changing the style of a cell's text based on the corresponding
  record's attributes.

  ``{$name}`` can be one of the following `bootstrap contextual color`_ (``danger``,
  ``info``, ``secondary``, ``success`` or ``warning``).

  Define a conditional display of a record in the style of a row's text based on the corresponding
  record's attributes.

  Values are Python expressions. For each record, the expression is evaluated
  with the record's attributes as context values and if ``true``, the
  corresponding style is applied to the row. Here are some of the other values
  available in the context:

  * ``uid``: the id of the current user,
  * ``today``: the current local date as a string of the form ``YYYY-MM-DD``,
  * ``now``: same as ``today`` with the addition of the current time.
    This value is formatted as ``YYYY-MM-DD hh:mm:ss``.

  .. code-block:: xml

    <gantt decoration-info="state == 'draft'"
          decoration-danger="state == 'help_needed'"
          decoration-bf="state == 'busy'">
      ...
    </gantt>
``default_group_by``
  name of a field to group tasks by
``disable_drag_drop``
  if set to true, the gantt view will not have any drag&drop support
``consolidation``
  field name to display consolidation value in record cell
``consolidation_max``
  dictionary with the "group by" field as key and the maximum consolidation
  value that can be reached before displaying the cell in red
  (e.g. ``{"user_id": 100}``)
``consolidation_exclude``
  name of the field that describes if the task has to be excluded
  from the consolidation
  if set to true it displays a striped zone in the consolidation line
``create``, ``cell_create``, ``edit``, ``delete``, ``plan``
    allows *dis*\ abling the corresponding action in the view by setting the
    corresponding attribute to ``false`` (default: ``true``).

    * ``create``: If enabled, an ``Add`` button will be available in the control
      panel to create records.
    * ``cell_create``: If enabled and ``create`` enabled, a "**+**" button will be
      displayed while hovering on a time slot cell to create a new record on that slot.
    * ``edit``: If enabled, the opened records will be in edit mode (thus editable).
    * ``plan``: If enabled and ``edit`` enabled, a "magnifying glass" button will be displayed
      on time slots to plan unassigned records into that time slot.

    .. example::

        When you do not want to create records on the gantt view and the beginning and end
        dates are required on the model, the planning feature should be disabled
        because no record will ever be found.
``offset``
  Depending on the scale, the number of units to add to today to compute the
  default period. Examples: An offset of +1 in default_scale week will open the
  gantt view for next week, and an offset of -2 in default_scale month will open
  the gantt view of 2 months ago.
``progress``
  name of a field providing the completion percentage for the record's event,
  between 0 and 100
``string``
  title of the gantt view
``precision``
  JSON object specifying snapping precisions for the pills in each scale.

  Possible values for scale ``day`` are (default: ``hour``):

  - ``hour``: records times snap to full hours (ex: 7:12 becomes 8:00)

  - ``hour:half``: records times snap to half hours (ex: 7:12 becomes 7:30)

  - ``hour:quarter``: records times snap to half hours (ex: 7:12 becomes 7:15)

  Possible values for scale ``week`` are (default: ``day:half``):

  - ``day``: records times snap to full days (ex: 7:28 AM becomes 11:59:59 PM of the previous day, 10:32 PM becomes 12:00 PM of the current day)

  - ``day:half``: records times snap to half hours (ex: 7:28 AM becomes 12:00 PM)

  Possible values for scale ``month`` are (default: ``day:half``):

  - ``day``: records times snap to full days (ex: 7:28 AM becomes 11:59:59 PM of the previous day, 10:32 PM becomes 12:00 PM of the current day)

  - ``day:half``: records times snap to half hours (ex: 7:28 AM becomes 12:00 PM)

  Scale ``year`` always snap to full day.

  Example of precision attribute: ``{"day": "hour:quarter", "week": "day:half", "month": "day"}``
``total_row``
  boolean to control whether the row containing the total count of records should
  be displayed. (default: ``false``)
``collapse_first_level``
  boolean to control whether it is possible to collapse each row if grouped by
  one field. (default: ``false``, the collapse starts when grouping by two fields)
``display_unavailability``
  boolean to mark the dates returned by the ``gantt_unavailability`` function of
  the model as available inside the gantt view. Records can still be scheduled
  in them, but their unavailability is visually displayed. (default: ``false``)
``default_scale``
  default scale when rendering the view. Possible values are (default: ``month``):

  * ``day``
  * ``week``
  * ``month``
  * ``year``

``scales``
  comma-separated list of allowed scales for this view. By default, all scales
  are allowed. For possible scale values to use in this list, see ``default_scale``.

``templates``
  defines the :ref:`reference/qweb` template ``gantt-popover`` which is used
  when the user hovers over one of the records in the gantt view.

  The gantt view uses mostly-standard :ref:`javascript qweb
  <reference/qweb/javascript>` and provides the following context variables:

  .. rst-class:: o-definition-list

  ``widget``
    the current :js:class:`GanttRow`, can be used to fetch some
    meta-information. The ``getColor`` method to convert in a color integer is
    also available directly in the template context without using ``widget``.

  ``on_create``
    If specified when clicking the add button on the view, instead of opening a generic dialog, launch a client action.
    this should hold the xmlid of the action (eg: ``on_create="%(my_module.my_wizard)d"``

``form_view_id``
  view to open when the user create or edit a record. Note that if this attribute
  is not set, the gantt view will fall back to the id of the form view in the
  current action, if any.

``dynamic_range``
  if set to true, the gantt view will start at the first record,
  instead of starting at the beginning of the year/month/day.

``pill_label``
  If set to true, the time appears in the pill label when the scale is set on week or month. (e.g.
  `7:00 AM - 11:00 AM (4h) - DST Task 1`)

``thumbnails``
  This allows to display a thumbnail next to groups name if the group is a relationnal field.
  This expects a python dict which keys are the name of the field on the active model.
  Values are the names of the field holding the thumbnail on the related model.

  Example: tasks have a field user_id that reference res.users. The res.users model has a field image that holds the avatar,
  then:

  .. code-block:: xml

     <gantt
        date_start="date_start"
        date_stop="date_stop"
        thumbnails="{'user_id': 'image_128'}"
      >
      </gantt>

  will display the users avatars next to their names when grouped by user_id.

.. include:: view_architectures/root_attribute_sample.rst

.. _reference/view_architectures/map:

Map
===

.. raw:: html

   <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

This view is able to display records on a map and the routes between them. The records are represented by pins. It also allows the visualization of fields from the model in a popup tied to the record's pin.

.. note::

    The model on which the view is applied should contain a `res.partner` many2one since the view relies on the `res.partner`'s address and coordinates fields to localize the records.

API
---

The view uses location data platforms' API to fetch the tiles (the map's background), do the geoforwarding (converting addresses to a set of coordinates) and fetch the routes.
The view implements two API, OpenStreetMap and MapBox. OpenStreetMap is used by default and is able to fetch `tiles`_ and do `geoforwarding`_. This API does not require a token.
As soon as a valid `MapBox`_ token is provided in the general settings the view switches to the MapBox API. This API is faster and allows the computation of routes. A token can be obtained by `signing up`_ to MapBox.

Structural components
---------------------

The view's root element is ``<map>``. It can have the following attributes:


.. rst-class:: o-definition-list

``res_partner``
    Contains the `res.partner` many2one. If not provided the view resorts to create an empty map.
``default_order``
    If a field is provided the view overrides the model's default order. The field must be part of the model on which the view is applied, not from `res.partner`.
``routing``
    if ``1`` display the routes between the records. The view needs a valid MapBox token and at least two located records (i.e the records have a `res.partner` many2one and the partner has an address or valid coordinates).
``hide_name``
    if ``1`` hide the name from the pin's popup (default: ``0``).
``hide_address``
    if ``1`` hide the address from the pin's popup (default: ``0``).
``hide_title``
    if ``1`` hide the title from the pin list (default: ``0``).
``panel_title``
    String to display as title of the pin list. If not provided, the title is the action's name or "Items" if the view is not in an action.
``limit``
    Maximum number of records to fetch (default: ``80``). It must be a positive integer.

The ``<map>`` element can contain multiple ``<field>`` elements. Each ``<field>`` element is interpreted as a line in the pin's popup. The field's attributes are the following:

.. rst-class:: o-definition-list

``name``
    The field to display.
``string``
    String to display before the field's content. It can be used as a description.

For example here is a map:
    .. code-block:: xml

        <map res_partner="partner_id" default_order="date_begin" routing="1" hide_name="1">
            <field name="partner_id" string="Customer Name"/>
        </map>

.. _`accesskey`: https://www.w3.org/TR/html5/editing.html#the-accesskey-attribute
.. _`bootstrap contextual color`: https://getbootstrap.com/docs/3.3/components/#available-variations
.. _`Comma-separated values`: https://en.wikipedia.org/wiki/Comma-separated_values
.. _`floats`: https://developer.mozilla.org/en-US/docs/Web/CSS/float
.. _`geoforwarding`: https://nominatim.org/release-docs/develop/
.. _`HTML`: https://en.wikipedia.org/wiki/HTML
.. _`integer`: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
.. _`keyboard_shortcut`: https://en.wikipedia.org/wiki/Keyboard_shortcut
.. _`MapBox`: https://docs.mapbox.com/api/
.. _`Odoo`: https://www.odoo.com/
.. _`path`: https://en.wikipedia.org/wiki/Path_(computing)
.. _`pivot table`: https://en.wikipedia.org/wiki/Pivot_table
.. _`python expression`: https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not
.. _`relative path`: https://en.wikipedia.org/wiki/URL
.. _`signing up`: https://account.mapbox.com/auth/signup/
.. _`tiles`: https://wiki.openstreetmap.org/wiki/Tile_data_server
