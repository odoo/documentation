=================
View architecture
=================

Generic view
============

The architecture of a view is defined by XML data interpreted by the JavaScript framework.

For each view, there is a :file:`\*.rng` file defining the attributes and possible architectures.

.. note:: The current context and user access rights may also impact the view abilities.

.. seealso::
   :doc:`view_records`

.. _reference/view_architecture/python_expression:

Python expression
=================

When evaluating node attributes, e.g. the `readonly` modifier, it is possible to provide a **Python
expression** that will be executed in an environment that has access to the following variables:

- The names of all fields present in the current view, containing the value of the current record,
  except for `column_invisible` in :ref:`list view <reference/view_architecture/list/field>`;
  relational fields are given as a list of IDs;
- `parent`: the record that refers to the container; only inside sub-views of :ref:`relational
  fields <studio/fields/relational-fields>`;
- `context` (dict_): the current view's context;
- `uid` (integer_): the id of the current user;
- `today` (string_): the current local date in the `YYYY-MM-DD` format;
- `now` (string_): the current local datetime in the `YYYY-MM-DD hh:mm:ss` format.

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

.. ....................................................................

.. _reference/view_architecture/form:

Form
====

Form views are used to display the data from a single record. Their root element is
``<form>``. They are composed of regular HTML_ with additional structural and semantic
components.

.. code-block:: xml

  <form>
    ...
  </form>

Optional attributes_ are added on root element ``<form>`` to customize the view.

:string:
  string_ (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  boolean_ (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  boolean_ (default: ``True``)

  Disable/enable record editing on the view.

:duplicate:
  boolean_ (default: ``True``)

  Disable/enable record duplication on the view through the **Action** dropdown.

:delete:
  boolean_ (default: ``True``)

  Disable/enable record deletion on the view through the **Action** dropdown.

:js_class:
  string_ (optional)

  Name of the javascript component the webclient will instantiating instead of
  the form the view.

:disable_autofocus:
  boolean_ (default: ``False``)

  Disable automatic focussing of the first field in the view.

.. _reference/view_architecture/form/semantic:

Semantic components
-------------------

Semantic components tie into the Odoo system and allow interaction with it.
remark: (with the remark style)
Placeholders are denoted in all caps.

.. _reference/view_architecture/form/field:

<field>: render formatted values
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <field name="FIELD_NAME"/>
  </form>

renders (and allow editing of, possibly) a single field of the current
record. Using several times a field in a form view is supported and the
fields can receive different values for modifiers 'invisible' and
'readonly'. This fields have the same values but can be display
differentaly. However, the behavior is not guaranteed when several
fields exist with different values for modifier 'required'. ``<field>``
can have the following attributes:

:name:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name

  the name of the field to render
:string:
  string_ (default: `string` value from :class:`~odoo.fields.Field`)

  the label to display. By default display the field's label coming
  from the field definition in the model.
:id:
  string_ (optional)

  the node id. Useful when there are several occurrences of the same field in
  the view (see ``label`` component below). Default is the field name.

:widget:
  string_ (optional)

  fields have a default rendering based on their type
  (e.g. :class:`~odoo.fields.Char`, :class:`~odoo.fields.Many2one`).

  The ``widget`` attributes allows using a different rendering method and context.
  See more information in :ref:`reference/js/widgets`

  .. code-block:: xml

    <field name="tag_ids" widget="many2many_tags"/>

:options:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a dict_ (default: ``{}``)

  JSON object specifying configuration option for the field's widget
  (including default widgets)

  .. code-block:: xml

    <field name="tag_ids" widget="many2many_tags" options="{'color_field': 'FIELD_NAME', 'no_quick_create': True}"/>

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  only displays the field for specific users

  .. code-block:: xml

    <field name="fname" groups="base.group_no_one,!base.group_multi_company"/>

:domain:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a :ref:`reference/orm/domains` (default: ``[]``)

  for relational fields only, filters to apply when displaying existing
  records for selection

  .. code-block:: xml

    <field name="fname_id" domain="[('fname_a', '=', parent.fname_b)]"/>

:context:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a dict_ (default: ``{}``)

  for relational fields only, context to pass when fetching possible values.
  The default values ``default_FIELD_NAME`` (e.g. ``{'default_name': 'toto'}``) will be used to
  create the linked record. ``OTHER_BUSINESS_KEY`` is every keys depending of the model/module.

  .. code-block:: xml

    <field name="fname" context="{
        'TYPE_view_ref': 'ADDON.MODEL_view_TYPE',
        'group_by': 'FIELD_NAME',
        'default_FIELD_NAME': ANY,
        'search_default_FIELD_NAME': True,
        'OTHER_BUSINESS_KEY': ANY,
      }"/>

:readonly:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  Whether the field can be modified by the user (``False``) or is read only (``True``).

  .. code-block:: xml

    <field name="fname_a" readonly="True"/>
    <field name="fname_b" readonly="name_a in [fname_b, parent.fname_d]"/>

:required:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  Whether the field can be left empty (``False``) or must be set (``True``).

  .. code-block:: xml

    <field name="fname_a" required="True"/>
    <field name="fname_b" required="fname_c != 3 and fname_a == parent.fname_d"/>

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  Whether the field can be visible (``False``) or must be hide (``True``).

  There are two uses for field ``invisible`` attribute:

  * Usability: not to overload the view and to make it easier for the user to read depending on the content;
  * Technical: fetched by the webclient for evaluating :ref:`python expression <reference/view_architecture/python_expression>`

  .. code-block:: xml

    <field name="fname_a" invisible="True"/> <!-- necessary to evaluate invisible attribute of 'fname_b' field -->
    <field name="fname_b" invisible="fname_c != 3 and fname_a == parent.fname_d"/>
    <field name="fname_c"/>

:nolabel:
  boolean_ (default: ``False``)

  if ``True``, do not automatically display the field's label, only
  makes sense if the field is a direct child of a ``group`` element

:placeholder:
  string_ (optional)

  help message to display in *empty* fields. Can replace field labels in
  complex forms. *Should not* be an example of data as users are liable to
  confuse placeholder text with filled fields

:mode:
  `Comma-separated values`_ (default: ``tree``) whose choices are: ``kanban``, ``from``, ``tree``

  for :class:`~odoo.fields.One2many`, display mode (view type) to use for
  the field's linked records. One of ``tree``, ``form``, ``kanban`` or
  ``graph``. The default is ``tree`` (a list display)

:help:
  string_ (optional)

  tooltip displayed for users when hovering the field or its label

:class:
  string_ (optional) `HTML class`_

  `HTML class`_ to set on the generated element.

  The styling use the Bootstrap_ framework and :doc:`UI icons <icons>`.

  Below are the common Odoo_ classes:

  ``oe_inline``: prevent the usual line break following fields and limit their span.

  ``oe_left``, ``oe_right``: floats_ the field to the corresponding direction

  ``oe_read_only``, ``oe_edit_only``: only displays the field in the corresponding form mode

  ``oe_avatar``: for image fields, displays images as "avatar" (square, 90x90 maximum size, some image decorations)

:filename:
  string_ (optional)

  for binary fields, name of the related field providing the name of the file

:password:
  boolean_ (default: ``False``)

  if is ``True`` indicates that a :class:`~odoo.fields.Char` field stores a
  password and that its data shouldn't be displayed

:kanban_view_ref:
  string_ (optional) defined by the pattern: ``%(ADDON.MODEL_view_TYPE)s`` (target the :doc:`view reference <view_records>`)

  for opening specific kanban view when selecting records from m2o/m2m in mobile
  environment

:default_focus:
  boolean_ (default: ``False``)

  If True, defines that this field is the fields that will be focussed when the view
  opens. Cannot be present on more than one field of a view.

.. note::
  :ref:`Relational fields <studio/fields/relational-fields>` node can contain specific
  subviews.

  .. code-block:: xml

    <field name="children_ids">
      <tree>
        <field name="name"/>
      </tree>
      <form>
        <field name="id"/>
        <field name="name"/>
      </form>
    </field>

.. _reference/view_architecture/form/label:

<label>: displays other field label
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

    <form>
      <div class="col col-md-auto">
        <label for="FIELD_NAME" string="LABEL"/>
        <div>
          <field name="FIELD_NAME" class="oe_inline"/>
        </div>
      </div>
    </form>


when a :ref:`field <reference/view_architecture/form/field>` component
isn't placed directly inside a :ref:`group <reference/view_architecture/form/group>`,
or when its ``nolabel`` attribute is set, the field's label isn't
automatically displayed alongside its value. The ``<label>`` component is the
manual alternative of displaying the label of a field. ``<label>`` can have the
following attributes:

:for:
  string_ (mandatory)

  the reference to the field associated with the label. Can be either the name
  of a field, or its id (``id`` attribute set on the
  :ref:`field <reference/view_architecture/form/field>`). When there are several
  occurrences of the same field in the view, and there are several ``label``
  components associated with these :ref:`field <reference/view_architecture/form/field>`
  nodes, those labels must have unique ``for`` attributes (in this case
  referencing the ``id`` attribute of the corresponding
  :ref:`field <reference/view_architecture/form/field>` nodes).

:string:
  string_ (default: ``''``)

  the label to display. Display the field's label (coming from the field
  definition in the model) by default.

:class:
  string_ `HTML class`_ (default: ``''``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.


.. _reference/view_architecture/form/button:

<button>: displays button to call action
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <button type="object" name="ACTION" string="LABEL"/>
    <button type="object" name="ACTION" icon="FONT_AWESOME"/>
  </form>

``<button>`` can have the following attributes:

:icon:
  string_ (optional)

  icon to use to display the button (:doc:`UI icons <icons>`)

  .. code-block:: xml

    <button type="object" name="remove" icon="fa-trash"/>

:string:
  string_ (default: ``''``)

  * if there is no ``icon``, the button's text
  * if there is an ``icon``, ``alt`` text for the icon

  .. code-block:: xml

      <button type="object" name="action_create_new" string="Create document"/>

:help:
  string_ (optional)

  add a tooltip message when hover with the mouse cursor

  .. code-block:: xml

    <button type="object" name="remove" icon="fa-trash" help="Revoke"/>

:context:
  `python expression`_ that evaluates to a dict_ (default: ``{}``)

  merged into the view's context when performing the button's Odoo call

  .. code-block:: xml

    <button name="button_confirm" type="object" context="{'BUSINESS_KEY': ANY}" string="LABEL"/>

:type:
  string_ chooses from ``object`` or ``action`` (mandatory)

  type of button, indicates how it clicking it affects Odoo:

  .. rst-class:: o-definition-list

  ``object``
      call a method on the list's model. The button's ``name`` is the
      method, which is called with the current row's record id and the
      current context.

      .. web client also supports a @args, which allows providing
          additional arguments as JSON. Should that be documented? Does
          not seem to be used anywhere

  ``action``
      load an execute an ``ir.actions``, the button's ``name`` is the
      database id of the action. The context is expanded with the list's
      model (as ``active_model``), the current row's record
      (``active_id``) and all the records currently loaded in the list
      (``active_ids``, may be just a subset of the database records
      matching the current search)

  .. code-block:: xml

      <button type="object" name="action_create_new" string="Create document"/>
      <button type="action" name="%(addon.action_create_view)d" string="Create and Edit"/>

:name:
  string_ (optional)

  see ``type``

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  same as for :ref:`form field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`form field <reference/view_architecture/form/field>` component.

:class:
  string_ (optional) `HTML class`_

  see class attribute from :ref:`form field <reference/view_architecture/form/field>` component.

  In form view, in addition to the classic behavior, the special class
  ``oe_stat_button`` define a particular rendering in order to
  dynamically display information while being clickable to target an
  action.

  .. code-block:: xml

    <button type="object" name="ACTION" class="oe_stat_button" icon="FONT_AWESOME" help="HELP">
      <div class="o_field_widget o_stat_info">
        <span class="o_stat_value"><FIELD/></span>
        <span class="o_stat_text">TEXT</span>
      </div>
    </button>

:special:
  string_ (optional) chooses from ``save`` or ``cancel``

  for form views opened in dialogs: ``save`` to save the record and
  close the dialog, ``cancel`` to close the dialog without saving.

  .. code-block:: xml

    <button special="cancel" icon="fa-trash"/>

:confirm:
  string_ (optional)

  confirmation message to display (and for the user to accept) before
  performing the button's Odoo call (also works in Kanban views).

  .. code-block:: xml

    <button name="action_destroye_gate" string="Send the goa'uld" type="object" confirm="Do you confirm the action?"/>

:data-hotkey:
  string_ (optional) only one char or ``shift+`` + one char

  Define a hotkey (`keyboard_shortcut`_ similar to an accesskey_) enable when
  ``alt`` keypress to facilitate access to the action.

  .. code-block:: xml

    <button type="object" name="action_tear" string="Tear the sheet" data-hotkey="shift+k"/>

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

Messaging features
~~~~~~~~~~~~~~~~~~

Chatter is the communication and log tool located on most records. It
allows you to email colleagues and customers directly from a record
(task, order, invoice, event, note...).

The element must be a div with classname ``oe_chatter``.

The widget is linked to specific python code of this :ref:`reference/mixins/mail`.

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

Attachment/Document preview
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The element must be an empty div with classname ``o_attachment_preview``.

.. code-block:: xml

    <form>
      <sheet>
        ...
      </sheet>
      <div class="o_attachment_preview"/>
    <form>


.. _reference/view_architecture/form/structural:

Structural components
---------------------

Structural components provide structure or "visual" features with little
logic. They are used as elements or sets of elements in form views.
Placeholders are denoted in all caps.

.. _reference/view_architecture/form/group:

<group>: Columns layout
~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <group>
      ...
    </group>
  </form>

Used to define column layouts in forms. By default, groups define 2 columns and most
direct children of groups take a single column.
:ref:`<field> <reference/view_architecture/form/field>` direct children of groups
display a ``label`` by default, and the label and the field itself have a colspan of 1
each.

Children are laid out horizontally (tries to fill the next column before changing row).

``<group>`` can have the following attributes:

:col:
  integer_ (default: ``2``)

  number of columns in a ``<group>``

:colspan:
  integer_ (default: ``1``)

  number of columns taken by an element

:string:
  string_ (default: ``''``)

  displayed a group’s title

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

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

  .. image:: view_architecture/form_group.svg
    :class: col-xxl-6

.. _reference/view_architecture/form/sheet:

<sheet>: Responsive layout
~~~~~~~~~~~~~~~~~~~~~~~~~~

``<sheet>`` can be used as a direct child to ``<form>`` for a narrower and more responsive
form layout (center page, margin...). Usually it contains :ref:`<group> <reference/view_architecture/form/group>`.

.. code-block:: xml

  <form>
    <sheet>
      ...
    </sheet>
  </form>

.. _reference/view_architecture/form/notebook:

<notebook> & <page>: tabbed section
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <notebook>
      <page string="LABEL">
        ...
      </page>
    </notebook>
  </form>

``notebook`` defines a tabbed section. Each tab is defined through a ``page``
child element.

``<page>`` can have the following attributes:

:string:
  string_ (default: ``''``)

  the title of the tab

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

  Can be apply on ``notebook`` and ``page`` nodes.

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

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

  .. image:: view_architecture/form_notebook.svg
    :class: col-xxl-6

.. note:: Note that ``notebook`` should not be placed within ``group``

.. _reference/view_architecture/form/newline:

<newline>: new row
~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <group>
      ...
      <newline/>
      ...
    </group>
  </form>

only useful within :ref:`<group> <reference/view_architecture/form/group>`
elements, ends the current row early and immediately switches to a new row
(without filling any remaining column beforehand)

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <form>
      <group string="Title 1">
        <group string="Title 1.1">...</group>
        <newline/>
        <group string="Title 1.2">...</group>
        <group string="Title 1.3">...</group>
      </group>
    </form>

  .. image:: view_architecture/form_newline.svg
    :class: col-xxl-6

.. _reference/view_architecture/form/separator:

<separator>: horizontal spacing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    ...
    <separator/>
    ...
  </form>

small horizontal spacing. ``<separator>`` can have the following attributes:

:string:
  string_ (default: ``''``)

  the title as a section title

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

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

  .. image:: view_architecture/form_separator.svg
    :class: col-xxl-6

.. _reference/view_architecture/form/header:

<header>: workflow buttons and status
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <header>
      <BUTTONS/>
    </header>
    <sheet>
      ...
    </sheet>
  </form>

combined with :ref:`<sheet> <reference/view_architecture/form/sheet>`,
provides a full-width location above the sheet itself, generally used to
display workflow :ref:`buttons <reference/view_architecture/form/button>`
and a :ref:`field <reference/view_architecture/form/field>` display as
status widget.

Below is an example with the status widget with some options.

.. code-block:: xml

  <header>
    <button string="Reset" type="object" name="set_draft" invisible="state != 'done'"/>
    <field name="state" widget="statusbar" statusbar_visible="draft,posted" options="{'clickable': 1}"/>
  </header>

.. _reference/view_architecture/form/footer:

<footer>: bottom/dialog buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

  <form>
    <sheet>
      ...
    </sheet>
    <footer>
      <BUTTONS/>
    </footer>
  </form>

Display button at the bottom of the dialog. Used with :ref:`buttons <reference/view_architecture/form/button>`

The special action from ``<button>`` can save or cancel the form view displayed into the
dialog.

.. code-block:: xml

  <footer>
      <button string="Save" special="save"/>
      <button string="Feature action" type="object" name="my_action" class="btn-primary"/>
      <button string="Discard" special="cancel"/>
  </footer>

.. _reference/view_architecture/form/container:

container for buttons
~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

    <form>
      <div name="button_box">
        <BUTTONS/>
      </div>
    <form>

Container for specific rendering to display :ref:`buttons <reference/view_architecture/form/button>`

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <form>
      <div name="button_box">
        <button type="edit" name="edit"
            icon="fa-edit" string="Button1"/>

        <button type="object" name="my_action"
            icon="fa-dollar">
          <field name="total_inv" widget="statinfo"
              string="Invoices"/>
        </button>
      </div>
      ...
    <form>

  .. image:: view_architecture/form_button_box.svg
    :class: col-xxl-6

container for a title
~~~~~~~~~~~~~~~~~~~~~

.. code-block:: xml

    <form>
      <sheet>
        <div class="oe_title">
          <h1><FIELD/></h1>
        </div>
      </sheet>
    <form>

Container for specific rendering to display a :ref:`<field> <reference/view_architecture/form/field>` as title.

.. ....................................................................

.. _reference/view_architecture/settings:

Settings Form View
==================

The settings form view is a customization of the :ref:`form view <reference/view_architecture/form>`.
It's used to centralize all the settings of Odoo.

This view differs from a generic form view because it has a search bar, a sidebar and accepts 3
additional tags: ``app``, ``block`` and ``setting``.

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

.. _reference/view_architecture/settings/app:

<app>: declare the application
------------------------------

.. code-block:: xml

  <form>
    <app string="NAME" name="TECHNICAL_NAME">
    ...
    </app>
  </form>

The ``app`` tag is used to declare the application on the settings view. It
creates an entry with its logo on the sidebar of the view. It also acts as
delimiter when searching. ``<app>`` can have the following attributes:

:string:
  string_ (mandatory)

  The name of the application.

:name:
  string_ (mandatory)

  The technical name of the application (the name of the module).

:logo:
  path_ (optional)

  The `relative path`_ to the logo. If not set, the logo is created using
  the ``name`` parameter : ``/{name}/static/description/icon.png``.

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  same as for :ref:`field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

.. _reference/view_architecture/settings/block:

<block>: declare a group of settings
------------------------------------

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

The ``block`` tag is used to declare a group of settings. This group can have
a title and a description/help. ``<block>`` can have the following attributes:

:title:
  string_ (optional)

  The title of the block of settings, you can perform research on its text.

:help:
  string_ (optional)

  The description/help of the block of settings, you can perform research on
  its text.

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  same as for :ref:`field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

.. _reference/view_architecture/settings/setting:

<setting>: declare the setting
------------------------------

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

The ``setting`` tag is used to declare the setting itself. The first field in
the setting is used as the main field (optional). This field is placed on the
left panel (if it's a boolean field) or on the top of the right panel
(otherwise). The field is also used to create the setting label if a
``string`` is not defined. The ``setting`` tag can also contain more elements
(e.g. html), all of these elements are rendered in the right panel.
``<setting>`` can have the following attributes:

:type:
  string_ (optional)

  By default, a setting is visually separated on two panels (left and right),
  and is used to edit a given field. By defining ``type='header'``, a special
  kind of setting is rendered instead. This setting is used to modify the
  scope of the other settings. For example, on the website application, this
  setting is used to indicate to which website the other settings apply. The
  header setting is visually represented as a yellow banner on the top of the
  screen.

:string:
  string_ (optional)

  The text used as label of the setting. If it's not defined, the first field
  is used as label.

:title:
  string_ (optional)

  The text used as tooltip.

:help:
  string_ (optional)

  The help/description of the setting. This text is displayed just below the
  setting label (with classname ``text-muted``).

:company_dependent:
  ``1`` (optional)

  If this attribute is set to "1" an icon is displayed next to the setting
  label to explicit that this setting is company-specific.

:documentation:
  path_ (optional)

  If this attribute is set, an icon is added next to the setting label, this
  icon is a link to the documentation. Note that you can use relative or
  absolute path. The `relative path`_ is relative to ``https://www.odoo.com/documentation/<server_version>``,
  so it's not necessary to hard-code the server version on the arch anymore.

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  same as for :ref:`field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`field <reference/view_architecture/form/field>` component.

.. ....................................................................

.. _reference/view_architecture/list:

List
====

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      ...
    </tree>

  .. image:: view_architecture/list.svg
    :class: col-xxl-6

The root element of list views is ``<tree>``\ [#treehistory]_. The list view's
root can have the following attributes_:

:sample:
  boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

:banner_route:
  path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

:string:
  string_ (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  boolean_ (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  boolean_ (default: ``True``)

  Disable/enable record editing on the view.

  If the ``edit`` attribute is set to ``false``, the ``editable`` option will be ignored.

:delete:
  boolean_ (default: ``True``)

  Disable/enable record deletion on the view through the **Action** dropdown.

:import:
  boolean_ (default: ``True``)

  Disable/enable record import data on the view.

:export_xlsx:
  boolean_ (default: ``True``)

  Disable/enable record export data on the view.

:editable:
  string_ (optional) chooses from ``top`` or ``bottom``

  by default, selecting a list view's row opens the corresponding
  :ref:`form view <reference/view_architecture/form>`. The ``editable`` attributes
  makes the list view itself editable in-place.

  Valid values are ``top`` and ``bottom``, making *new* records appear respectively at
  the top or bottom of the list.

  The architecture for the inline :ref:`form view <reference/view_architecture/form>`
  is derived from the list view. Most attributes valid on a :ref:`form view
  <reference/view_architecture/form>`'s fields and buttons are thus accepted by list
  views although they may not have any meaning if the list view is non-editable.

  If the ``edit`` attribute is set to ``false``, the ``editable`` option **will be ignored**.

:multi_edit:
  ``1`` (optional)

  editable or not editable list can activate the multi-editing feature that allows to
  change the same field to the same value for multiple records in a single operation by
  defining the ``multi_edit="1"``

:default_group_by:
  string_ (optional) :ref:`model <reference/orm/model>` field name

  whether the list view should be grouped if no grouping is specified via the action or
  the current search. Should be the name of the field to group by when no grouping is
  otherwise specified

:default_order:
  `Comma-separated values`_ (optional)

  overrides the ordering of the model, replacing the model's order (:attr:`~odoo.models.BaseModel._order` model attribute).
  The value is a comma-separated list of :ref:`fields <reference/orm/fields>`, postfixed by ``desc`` to
  sort in reverse order:

  .. code-block:: xml

    <tree default_order="sequence,name desc">
      ...
    </tree>

:decoration-bf:
:decoration-it:
:decoration-danger:
:decoration-warning:
:decoration-info:
:decoration-muted:
:decoration-primary:
:decoration-success:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  allow changing the style of a cell's text based on the corresponding
  record's attributes:

  * ``bf`` for ``font-weight: bold``
  * ``it`` for ``font-style: italic``
  * ``danger``, ``info``, ``muted``, ``primary``, ``success`` or ``warning`` add relative `bootstrap contextual color`_.

  Define a conditional display of a record in the style of a row's text based
  on the corresponding record's attributes. For each record, the expression is
  evaluated with the record's attributes as context values and if ``true``, the
  corresponding style is applied to the row.

  .. code-block:: xml

    <tree decoration-danger="field_qty > field_limit">
      ...
    </tree>

:limit:
  integer_ (default: ``80`` for list view and ``40`` for x2many list in form view)

  the default size of a page. It must be a positive integer

:groups_limit:
  integer_ (default: ``80`` for list view and ``40`` for x2many list in form view)

  when the list view is grouped, the default number of groups of a page. It must be a
  position integer

:expand:
  boolean_ (default: ``False``)

  when the list view is grouped, automatically open the first level of groups if set
  to true. (Warning: It may be slow depending on the number of groups)

Possible children elements of the list view are: ``button``, ``field``, ``groupby``,
``header`` or ``control``

.. _reference/view_architecture/list/field:

<field>: render formatted values
--------------------------------

.. code-block:: xml

  <tree>
    <field name="FIELD_NAME"/>
  </tree>

defines a column where the corresponding field should be displayed for
each record. Can use the following attributes:

:name:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name

  the name of the field to display in the current model. A given name
  can only be used once per view

:string:
  string_ (optional)

  the title of the field's column (by default, uses the ``string`` of
  the model's field)

:optional:
  string_ (optional) chooses from ``hide`` or ``show``

  if set, the visibility of the field is optional. The display can be chosen
  via a button in the list view. By default fields will be visible if the value
  is `show` or not visible if `hide`.

  .. code-block:: xml

    <field name="fname_a" optional="hide"/>

:readonly:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  standard dynamic attributes based on record values. If the value is truthy
  or if the evaluate expression is truthy, display the field in both readonly
  and edit mode, but never make it editable.

  .. code-block:: xml

    <field name="fname_a" readonly="True"/>
    <field name="fname_b" readonly="name_a in [fname_b, parent.fname_d]"/>

:required:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  standard dynamic attributes based on record values. If the value is truthy
  or if the evaluate expression is truthy, generates an error and prevents
  saving the record if the field doesn't have a value.

  .. code-block:: xml

    <field name="fname_a" required="True"/>
    <field name="fname_b" required="fname_c != 3 and fname_a == parent.fname_d"/>

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  standard dynamic attributes based on record values. Hide the field if truthy
  or if the evaluate expression is truthy.

  Fetches and stores the field, but doesn't display the column in the
  table. Necessary for fields which shouldn't be displayed but are
  used by e.g. ``@colors`` or an expression.

  .. code-block:: xml

    <field name="fname_a" invisible="True"/>
    <field name="fname_b" invisible="fname_c != 3 and fname_a == parent.fname_d"/>

:column_invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  Fetches and stores the field, but doesn't display the column in the table.
  Necessary for fields which shouldn't be displayed but are used by e.g.
  ``@colors`` or an expression.

  Unlike ``invisible``, if the evaluate expression is truly the entire column
  invisible and is evaluate without the subtree values.

  .. code-block:: xml

    <field name="product_is_late" column_invisible="parent.has_late_products == False"/>

  .. note::
    Only in case of list sub-views (One2many/Many2many display in a form view).

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  lists the groups which should be able to see the field (removed server side
  if the user's groups do not match)

  .. code-block:: xml

    <field name="fname" groups="base.group_no_one,!base.group_multi_company"/>

:decoration-bf:
:decoration-it:
:decoration-danger:
:decoration-warning:
:decoration-info:
:decoration-muted:
:decoration-primary:
:decoration-success:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  allow changing the style of a cell's text based on the corresponding
  record's attributes:

  * ``bf`` for ``font-weight: bold``
  * ``it`` for ``font-style: italic``
  * ``danger``, ``info``, ``muted``, ``primary``, ``success`` or ``warning`` add relative `bootstrap contextual color`_.

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

    <tree decoration-info="state == 'draft'"
          decoration-danger="state == 'help_needed'"
          decoration-bf="state == 'busy'">
      ...
    </tree>

:widget:
  string_ (optional) chooses from ``handle`` or ``progressbar``

  alternate representations for a field's display. Possible list view
  values are (among others):

  .. rst-class:: o-definition-list

  ``handle``
    for ``sequence`` (or ``integer``) fields by which records are
    sorted, instead of displaying the field's value just displays a
    drag&drop icon to reorder records.
  ``progressbar``
    displays ``float`` fields as a progress bar.

  See more information in :ref:`reference/js/widgets`

  .. code-block:: xml

    <tree>
        <field name="sequence" widget="handle"/>
        <field name="level_progress" widget="progressbar"/>
    </tree>

:sum, avg:
  string_ (optional)

  displays the corresponding aggregate at the bottom of the column. The
  aggregation is only computed on *currently displayed* records. The
  aggregation operation must match the corresponding field's
  ``group_operator``

  .. code-block:: xml

    <tree>
      <field name="sent" sum="Total" />
      <field name="clicks_ratio" avg="Average"/>
    </tree>

:width:
  string_/integer_ (for ``editable``) (optional)

  when there is no data in the list, the width of a column can be forced
  by setting this attribute. The value can be an absolute width (e.g.
  '100px'). Note that when there are records in the list, we let the
  browser automatically adapt the column's widths according to their
  content, and this attribute is thus ignored.

:nolabel:
  ``1`` (optional)

  if set to "1", the column header will remain empty. Also, the column
  won't be sortable.

.. note::

  if the list view is ``editable``, any field attribute from the
  :ref:`form view <reference/view_architecture/form>` is also valid and will
  be used when setting up the inline form view.

.. note:: When a list view is grouped, numeric fields are aggregated and
  displayed for each group. Also, if there are too many records in a group,
  a pager will appear on the right of the group row. For this reason, it is
  not a good practice to have a numeric field in the last column, when the
  list view is in a situation where it can be grouped (it is however fine
  for x2manys field in a form view: they cannot be grouped).

.. _reference/view_architecture/list/button:

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      <field name="name" string="My Custom Name"/>
      <field name="amount" sum="Total"/>
      <field name="company_id" invisible="1"/>
      <field name="currency_id"/>
      <field name="tax_id"/>
    </tree>

  .. image:: view_architecture/list_field.svg
    :class: col-xxl-6

<button>: display button to call action
---------------------------------------

.. code-block:: xml

  <tree>
    <button type="object" name="ACTION" string="LABEL"/>
    <button type="object" name="ACTION" icon="FONT_AWESOME"/>
  </tree>

``<button>`` can have the following attributes:

:icon:
  string_ (optional)

  icon to use to display the button (:doc:`UI icons <icons>`)

  .. code-block:: xml

    <button type="object" name="remove" icon="fa-trash"/>

:string:
  string_ (default: ``''``)

  * if there is no ``icon``, the button's text
  * if there is an ``icon``, ``alt`` text for the icon

  .. code-block:: xml

      <button type="object" name="action_create_new" string="Create document"/>

:help:
  string_ (optional)

  add a tooltip message when hover with the mouse cursor

  .. code-block:: xml

    <button type="object" name="remove" icon="fa-trash" help="Revoke"/>

:context:
  `python expression`_ that evaluates to a dict_ (default: ``{}``)

  merged into the view's context when performing the button's Odoo call

  .. code-block:: xml

    <button name="button_confirm" type="object" context="{'BUSINESS_KEY': ANY}" string="LABEL"/>

:type:
  string_ chooses from ``object`` or ``action`` (mandatory)

  type of button, indicates how it clicking it affects Odoo:

  .. rst-class:: o-definition-list

  ``object``
      call a method on the list's model. The button's ``name`` is the
      method, which is called with the current row's record id and the
      current context.

      .. web client also supports a @args, which allows providing
          additional arguments as JSON. Should that be documented? Does
          not seem to be used anywhere

  ``action``
      load an execute an ``ir.actions``, the button's ``name`` is the
      database id of the action. The context is expanded with the list's
      model (as ``active_model``), the current row's record
      (``active_id``) and all the records currently loaded in the list
      (``active_ids``, may be just a subset of the database records
      matching the current search)

  .. code-block:: xml

      <button type="object" name="action_create_new" string="Create document"/>
      <button type="action" name="%(addon.action_create_view)d" string="Create and Edit"/>

:name:
  string_ (optional)

  see ``type``

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  same as for :ref:`form field <reference/view_architecture/form/field>` component.

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`form field <reference/view_architecture/form/field>` component.

:class:
  string_ (optional) `HTML class`_

  same as for :ref:`form field <reference/view_architecture/form/field>` component.

:column_invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  same as for :ref:`list field <reference/view_architecture/list/field>` component.

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      <field name="name"/>
      <button
          type="edit" name="edit"
          icon="fa-edit" title="Edit"/>
      <button
          type="object" name="my_method"
          string="Button1"
          column_invisible="context.get('hide_button')"
          invisible="amount &gt; 3"/>
      <field name="amount"/>
      <field name="currency_id"/>
      <field name="tax_id"/>
    </tree>

  .. image:: view_architecture/list_button.svg
    :class: col-xxl-6

.. _reference/view_architecture/list/groupby:

<groupby>: custom headers when grouping
---------------------------------------

.. code-block:: xml

  <tree>
    ...
    <groupby name="FIELD_NAME">
      <BUTTONS/>
      <FIELDS/>
    </groupby>
  </tree>

defines custom headers (with ``buttons``) for the current view when grouping
records on many2one fields. It is also possible to add ``field``, inside the
``groupby`` which can be used for modifiers. These fields thus belong on the
many2one comodel. These extra fields will be fetched in batch.

:name:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name

  the name of a many2one field (on the current model). Custom header will be
  displayed when grouping the view on this field name.

  A special button (``type="edit"``) can be defined to open the many2one form view.

Below is a possible structure and the representation of its rendering when
group the record by the selected.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      <field name="name"/>
      <field name="amount"/>
      <field name="currency"/>
      <field name="tax_id"/>

      <groupby name="partner_id">
        <button
            type="edit" name="edit"
            icon="fa-edit" title="Edit"/>

        <field name="email"/>
        <button
            type="object" name="my_method"
            string="Button1"
            invisible="email == 'jhon@conor.com'"/>
      </groupby>
    </tree>

  .. image:: view_architecture/list_groupby.svg
    :class: col-xxl-6

.. note::

  The ``fields`` inside ``<groupby>`` are only used to fetches and stores the
  value but are never displayed.

.. _reference/view_architecture/list/header:

<header>: custom buttons in control panel
-----------------------------------------

.. code-block:: xml

  <tree>
    <header>
      <BUTTONS/>
    </header>
    ...
  </tree>

.. rst-class:: o-definition-list

``<button>``
  Defines custom buttons similar to :ref:`list view buttons <reference/view_architecture/list/button>` in the control panel
  that perform an action/call a model's method. The buttons which accepts an extra attribute when placed in a `header`:

  :display:
    string_ chooses from ``display`` or ``always`` (default: ``display``)

    By default, those buttons are only displayed when some records are
    selected, and they apply on the selection. When the attribute ``display``
    is set to ``always``, the button is available all the time, even if there's
    no selection.

  .. code-block:: xml

    <header>
        <button name="toDoAlways" type="object" string="Always displayed" display="always"/>
        <button name="toDoSelection" type="object" string="Displayed if selection"/>
    </header>

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      <header>
        <button type="object" name="to_draft"
            string="Button1"
            invisible="context.get('hide_button')"/>
      </header>
      <field name="name"/>
      <field name="amount"/>
      <field name="currency"/>
      <field name="tax_id"/>
    </tree>

  .. image:: view_architecture/list_header.svg
    :class: col-xxl-6

.. _reference/view_architecture/list/control:

<control> & <create>: customize "add a line"
--------------------------------------------

.. code-block:: xml

  <tree>
    <control>
      <create string="LABEL"/>
      <BUTTONS/>
    </control>
    ...
  </tree>

defines custom controls for the current view. Does not support any attribute,
but can have children ``<create>``.

``<create>`` adds a button to create a new element on the current list.
It can have the following attributes:

:string:
  string_ (mandatory)

  The text displayed on the button.

:context:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a dict_ (default: ``{}``)

  This context will be merged into the existing context
  when retrieving the default value of the new record.

  For example it can be used to override default values.

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <tree>
      <field name="name"/>
      <field name="amount"/>
      <field name="currency"/>
      <field name="tax_id"/>
      <control>
        <create string="Add a item"/>
        <create string="Add a section"
            context="{'default_type': 'section'}"/>
        <create string="Add a note"
            context="{'default_type': 'note'}"/>
      </control>
    </tree>

  .. image:: view_architecture/list_control.svg
    :class: col-xxl-6

.. note:: ``<control>`` makes sense if the parent ``tree`` view is inside a
  :class:`~odoo.fields.One2many` :ref:`relational field <studio/fields/relational-fields>`.

  If any ``<create>`` is defined as children, it will overwrite the default
  "**add a line**" button.

.. [#treehistory] for historical reasons, it has its origin in tree-type views
                later repurposed to a more table/list-type display

.. ....................................................................

.. _reference/view_architecture/search:

Search
======

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <search>
      ...
    </search>

  .. image:: view_architecture/search.svg
    :class: col-xxl-6

Search views are different from other view types: they don't display
*content*. Although they apply to a specific model, they are used to filter
another view's content (generally aggregated views
e.g. :ref:`reference/view_architecture/list` or :ref:`reference/view_architecture/graph`).

The root element of search views is ``<search>``. It takes no attributes.

Possible children elements of the list view are: ``field``, ``filter``, ``separator``,
``group`` or ``searchpanel``

.. _reference/view_architecture/search/field:

<field>: field usable as filter
-------------------------------

.. code-block:: xml

  <search>
    <field name="FIELD_NAME"/>
  </search>

fields define domains or contexts with user-provided values. When search
domains are generated, field domains are joined with each other and
with filters using the **AND** operator.

Fields can have the following attributes:

:name:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name (mandatory)

  the name of the field to filter on

:string:
  string_ (optional)

  the field's label

:operator:
  string_ (default: ``=``)

  by default, fields generate domains of the form :samp:`[({name},
  {operator}, {provided_value})]` where ``name`` is the field's name and
  ``provided_value`` is the value provided by the user, possibly
  filtered or transformed (e.g. a user is expected to provide the
  *label* of a selection field's value, not the value itself).

  The ``operator`` attribute allows overriding the default operator,
  which depends on the field's type (e.g. ``=`` for float fields but
  ``ilike`` for char fields or ``child_of`` for many2one)

:filter_domain:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a :ref:`reference/orm/domains` (default: ``False``)

  complete domain to use as the field's search domain, can use a
  ``self`` variable to inject the provided value in the custom
  domain. Can be used to generate significantly more flexible domains
  than ``operator`` alone (e.g. searches on multiple fields at once)

  If both ``operator`` and ``filter_domain`` are provided,
  ``filter_domain`` takes precedence.

:context:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a dict_ (default: ``{}``)

  allows adding context keys, including the user-provided values (which
  as for ``domain`` are available as a ``self`` variable, an array of
  values e.g. ``[id_1, id_2]`` for a :class:`~odoo.fields.Many2one` field).
  By default, fields don't generate domains.

  .. note:: the domain and context are inclusive and both are generated
            if a ``context`` is specified. To only generate context
            values, set ``filter_domain`` to an empty list:
            ``filter_domain="[]"``

:domain:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a :ref:`reference/orm/domains` (default: ``False``)

  if the field can provide an auto-completion
  (e.g. :class:`~odoo.fields.Many2one`), filters the possible
  completion results.

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  make the field only available to specific users

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  standard dynamic attributes based on record values. Hide the field
  if truthy or if the evaluate expression is truthy.

  .. code-block:: xml

    <field name="fname_a" invisible="True"/>
    <field name="fname_b" invisible="fname_c != 3 and fname_a == parent.fname_d"/>

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <search>
      <field name="name" string="My Custom Name"/>
      <field name="amount"/>
      <field name="company_id" invisible="1"/>
      <field name="currency_id"/>
      <field name="ref" filter_domain="[('name', 'like', self)]"/>
    </search>

  .. image:: view_architecture/search_field.svg
    :class: col-xxl-6

.. _reference/view_architecture/search/filter:

<filter>: predefined Filters
----------------------------

.. code-block:: xml

  <search>
    <filter string="LABEL" domain="DOMAIN"/>
  </search>

a filter is a predefined toggle in the search view, it can only be enabled
or disabled. Its main purposes are to add data to the search context (the
context passed to the data view for searching/filtering), or to append new
sections to the search filter.

Filters can have the following attributes:

:string:
  string_ (mandatory)

  the label of the filter

:domain:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a :ref:`reference/orm/domains` (default: ``False``)

  will be appended to the action's domain as part of the search domain.

:date:
  string_ (optional) :ref:`model <reference/orm/model>` field name

  the name of a field of type ``date`` or ``datetime``.
  Using this attribute has the effect to create
  a set of filters available in a submenu
  of the filters menu. The filters proposed are time dependent
  but not dynamic in the sense that their domains are evaluated
  at the time of the control panel instantiation.

  Example:

  .. code-block:: xml

    <filter name="filter_create_date" date="create_date" string="Creation Date"/>

  The example above allows to easily search for records with creation date field
  values in one of the periods below (if the current month is August 2019).

  .. code-block:: text

    Create Date >
      August
      July
      June
      Q4
      Q3
      Q2
      Q1
    --------------
      2019
      2018
      2017

  Multi selection of options is allowed.

:default_period:
  string_ (optional)  chooses from ``today``, ``this_week``, ``this_month``, ``last_month``,
  ``antepenultimate_month``, ``fourth_quarter``, ``third_quarter``, ``second_quarter``,
  ``first_quarter``, ``this_year``, ``last_year`` or ``antepenultimate_year``

  only makes sense for a filter with non empty ``date`` attribute.
  determines which periods are activated if the filter is in the
  default set of filters activated at the view initialization. If not provided,
  'this_month' is used by default.

  The attribute accepts comma separated values.

  Examples:

  .. code-block:: xml

    <filter name="filter_create_date" date="create_date" string="Creation Date" default_period="this_week"/>
    <filter name="filter_create_date" date="create_date" string="Creation Date" default_period="this_year,last_year"/>

:context:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a dict_ (default: ``{}``)

  a Python dictionary, merged into the action's domain to generate the
  search domain

  The key ``group_by`` can be used to define a groupby available in the
  'Group By' menu. The 'group_by' value can be a valid field name.

  .. code-block:: xml

      <filter name="groupby_category" string="Category" context="{'group_by': 'category_id'}"/>

  The groupby defined above allows to group data by category.

  When the field is of type ``date`` or ``datetime``, the filter generates a submenu of the Group By
  menu in which the following interval options are available: day, week, month, quarter, year.

  In case the filter is in the default set of filters activated at the view initialization,
  the records are grouped by month by default. This can be changed by using the syntax
  'date_field:interval' as in the following example.

  Example:

  .. code-block:: xml

      <filter name="groupby_create_date" string="Creation Date" context="{'group_by': 'create_date:week'}"/>

  .. note::
      The results of read_groups grouped on a field may be influenced by its group_expand attribute,
      allowing to display empty groups when needed.  For more information, please refer to
      :class:`~odoo.fields.Field` attributes documentation.

:name:
  string_ (optional)

  logical name for the filter, can be used to :ref:`enable it by default
  <reference/view_architecture/search/defaults>`, can also be used as
  :ref:`inheritance hook <reference/view_records/inheritance>`

:help:
  string_ (optional)

  a longer explanatory text for the filter, may be displayed as a
  tooltip

:groups:
  `Comma-separated values`_ (optional) whose choices are the :class:`~odoo.addons.base.models.res_users.Groups` reference

  make the field only available to specific users

:invisible:
  :ref:`python expression <reference/view_architecture/python_expression>` that evaluates to a boolean_ (default: ``False``)

  standard dynamic attributes based on record values. Hide the field
  if truthy or if the evaluate expression is truthy.

  .. code-block:: xml

    <field name="fname_a" invisible="True"/>
    <field name="fname_b" invisible="fname_c != 3 and fname_a == parent.fname_d"/>

.. note::

  Sequences of filters (without non-filters separating them) are treated
  as inclusively composited: they will be composed with ``OR`` rather
  than the usual ``AND``, e.g.

  .. code-block:: xml

    <filter domain="[('state', '=', 'draft')]"/>
    <filter domain="[('state', '=', 'done')]"/>

  if both filters are selected, will select the records whose ``state``
  is ``draft`` or ``done``, but

  .. code-block:: xml

    <filter domain="[('state', '=', 'draft')]"/>
    <separator/>
    <filter domain="[('delay', '&lt;', 15)]"/>

  if both filters are selected, will select the records whose ``state``
  is ``draft`` **and** ``delay`` is below 15.

  .. note:: XML does not allow ``<`` to be used within XML elements,
    an entity reference (``&lt;``) should be used instead.

Below is a possible structure and the representation of its rendering.

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <search>
      <filter string="My Custom Name"
          domain="[('name', 'ilike', 'AAA')]"/>
      <filter string="My orders"
          domain="[('user_id', '=', uid)]"/>
      <filter string="Category"
          context="{'group_by': 'category_id'}"/>
    </search>

  .. image:: view_architecture/search_filter.svg
    :class: col-xxl-6

.. _reference/view_architecture/search/separator:

<separator>: separate groups of filters
---------------------------------------

.. code-block:: xml

  <search>
    <FILTERS/>
    <separator/>
    <FILTERS/>
  </search>

can be used to separates groups of :ref:`filters <reference/view_architecture/search/filter>` in simple search views.
`group` is more readable.

.. user_interface/view_architecture/search/group:

<group>: separate groups of filters
-----------------------------------

.. code-block:: xml

  <search>
    <group expand="0" string="LABEL">
      <FILTERS/>
    </group>
  </search>

can be used to separate groups of :ref:`filters <reference/view_architecture/search/filter>`, more readable than
``separator`` in complex search views

<searchpanel>: display a search panel
-------------------------------------

.. code-block:: xml

  <search>
    <searchpanel>
      <FIELDS/>
    </searchpanel>
  </search>

allows to display a search panel on the left of any multi records view.

This tool allows to quickly filter data on the basis of given fields. The fields
are specified as direct children of the ``searchpanel`` with tag name ``field``.

.. rst-class:: o-definition-list

``<field>``
  Fields in searchpanel can have the following attributes:

  :name:
    string_ (mandatory) :ref:`model <reference/orm/model>` field name

    the name of the field to filter on

  :select:
    string_ chooses from ``one``, ``multi``, ``groups``, ``string``, ``icon`` or ``color`` (default: ``one``)

    determines the behavior and display.

    .. rst-class:: o-definition-list

    ``one`` (default)
      at most one value can be selected. Supported field types are
      many2one and selection.

    ``multi``
      several values can be selected (checkboxes). Supported field
      types are many2one, many2many and selection.

    ``groups``
      restricts to specific users

    ``string``
      determines the label to display

    ``icon``
      specifies which icon is used

    ``color``
      determines the icon color

    Additional optional attributes are available in the ``multi`` case:

    .. rst-class:: o-definition-list

    ``enable_counters``
      default is false. If set to true the record counters will be computed and
      displayed if non-zero.

      This feature has been implemented in case performances would be too bad.

      Another way to solve performance issues is to properly override the
      ``search_panel_select_range`` and ``search_panel_select_multi_range`` methods.

    ``expand``
      default is false. If set to false categories or filters with 0 records will be hidden.

    ``limit``
      default is 200. Integer determining the maximal number of values to fetch for the field.
      If the limit is reached, no values will be displayed in the search panel and an error message will
      appear instead because we consider that is useless / bad performance-wise. All values will be
      fetched if set to 0.

    Additional optional attributes are available according to the chosen case:

    - For the ``one`` case:

      .. rst-class:: o-definition-list

      ``hierarchize``
        (only available for many2one fields) default is true. Handles the display style of categories :

        If set to true child categories will appear under their related parent.
        If not, all categories will be displayed on the same level.

    - For the ``multi`` case:

      .. rst-class:: o-definition-list

      ``domain``:
        determines conditions that the comodel records have to satisfy.

    A domain might be used to express a dependency on another field (with select="one")
    of the search panel. Consider
    /!\ This attribute is incompatible with a select="one" with enabled counters; if a select="multi"
    has a `domain` attribute, all select="one" will have their counters disabled.

    .. code-block:: xml

      <searchpanel>
        <field name="department_id"/>
        <field name="manager_id" select="multi" domain="[('department_id', '=', department_id)]"/>
      </searchpanel>

    In the above example, the range of values for manager_id (manager names) available at screen
    will depend on the value currently selected for the field ``department_id``.

  :groupby:
    string_ (optional) :ref:`model <reference/orm/model>` field name

    field name of the comodel (only available for many2one and many2many fields). Values will be grouped by that field.

.. _reference/view_architecture/search/defaults:

Search defaults
---------------

Search fields and filters can be configured through the action's ``context``
using :samp:`search_default_{name}` keys. For fields, the value should be the
value to set in the field, for filters it's a boolean value or a number. For instance,
assuming ``foo`` is a field and ``bar`` is a filter an action context of:

.. code-block:: python

  {
    'search_default_foo': 'acro',
    'search_default_bar': 1
  }

will automatically enable the ``bar`` filter and search the ``foo`` field for
*acro*.

A numeric value (between 1 and 99) can be used to describe the order of default groupbys.
For instance if ``foo`` and ``bar`` refer to two groupbys

.. code-block:: python

  {
    'search_default_foo': 2,
    'search_default_bar': 1
  }

has the effect to activate first ``bar`` then ``foo``.

.. ....................................................................

.. _reference/view_architecture/kanban:

Kanban
======

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <kanban>
      ...
    </kanban>

  .. image:: view_architecture/kanban.svg
    :class: col-xxl-6

The kanban view is a `kanban board`_ visualisation: it displays records as
"cards", halfway between a :ref:`list view <reference/view_architecture/list>` and a
non-editable :ref:`form view <reference/view_architecture/form>`. Records may be grouped
in columns for use in workflow visualisation or manipulation (e.g. tasks or
work-progress management), or ungrouped (used simply to visualize records).

.. note:: The kanban view will load and display a maximum of ten columns.
          Any column after that will be closed (but can still be opened by
          the user).

The root element of the Kanban view is ``<kanban>``, it can use the following
attributes_:

:sample:
  boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

:banner_route:
  path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

:string:
  string_ (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  boolean_ (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  boolean_ (default: ``True``)

  Disable/enable record editing on the view.

:delete:
  boolean_ (default: ``True``)

  Disable/enable record deletion on the view through the **Action** dropdown.

:default_group_by:
  string_ (optional) :ref:`model <reference/orm/model>` field name

  whether the kanban view should be grouped if no grouping is specified via
  the action or the current search. Should be the name of the field to group
  by when no grouping is otherwise specified

:default_order:
  string_ (optional)

  cards sorting order used if the user has not already sorted the records (via
  the list view)

:class:
  string_ (optional) `HTML class`_

  adds HTML classes to the root HTML element of the Kanban view

:examples:
  string_ (optional)

  if set to a key in the `KanbanExamplesRegistry`_, examples on column setups will be available in the grouped kanban view. `Here <https://github.com/odoo/odoo/blob/99821fdcf89aa66ac9561a972c6823135ebf65c0/addons/project/static/src/js/project_task_kanban_examples.js#L27>`_ is an example of how to define those setups.

:group_create:
  boolean_ (default: ``True``)

  whether the "Add a new column" bar is visible or not.

:group_delete:
  boolean_ (default: ``True``)

  whether groups can be deleted via the context menu.

:group_edit:
  boolean_ (default: ``True``)

  whether groups can be edited via the context menu.

:archivable:
  boolean_ (default: ``True``)

  whether records belonging to a column can be archived / restored if an
  ``active`` field is defined on the model.

:quick_create:
  boolean_ (default: ``True``)

  whether it should be possible to create records without switching to the
  form view. By default, ``quick_create`` is enabled when the Kanban view is
  grouped by many2one, selection, char or boolean fields, and disabled when not.

:quick_create_view:
  string_ (optional)

  :ref:`Form <reference/view_architecture/form>` view reference, specifying the view used for records quick creation.

:records_draggable:
  boolean_ (default: ``True``)

  whether it should be possible to drag records when kanban is grouped.

  Set to ``true`` to always enable it, and to ``false`` to always disable it.

:groups_draggable:
  boolean_ (default: ``True``)

  whether it should be possible to resequence colunms when kanban is grouped.

  Set to ``true`` to always enable it, and to ``false`` to always disable it.

.. todo:: VFE missing information on on_create attribute of kanban views.

Possible children elements of the kanban view are: ``field``, ``progressbar`` or ``templates``

.. _reference/view_architecture/kanban/field:

<field>: render formatted values
--------------------------------

.. code-block:: xml

  <kanban>
    <field name="FIELD_NAME"/>
    ...
  </kanban>

declares fields to use in kanban *logic*. If the field is simply displayed in
the kanban view, it does not need to be pre-declared.

Fields can use the following attributes:

:name:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name

  the name of the field to fetch

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <kanban>
      <templates>
        <t t-name="kanban-box">
          <div>
            <field name="name"/>
          </div>
        </t>
      </templates>
    </kanban>

  .. image:: view_architecture/kanban_field.svg
    :class: col-xxl-6

.. _reference/view_architecture/kanban/header:

<header>: custom buttons in control panel
-----------------------------------------

.. code-block:: xml

  <kanban>
    <header>
      <BUTTONS/>
    </header>
    ...
  </kanban>

.. rst-class:: o-definition-list

``<button>``
  Defines custom buttons similar to :ref:`list view buttons <reference/view_architecture/list/button>` in the control panel
  that perform an action/call a model's method. The buttons which accepts an extra attribute when placed in a `header`:

  :display:
    string_ chooses from ``display`` or ``always`` (default: ``display``)

    By default, those buttons are only displayed when some records are
    selected, and they apply on the selection. When the attribute ``display``
    is set to ``always``, the button is available all the time, even if there's
    no selection.

  .. code-block:: xml

    <header>
        <button name="toDoAlways" type="object" string="Always displayed" display="always"/>
        <button name="toDoSelection" type="object" string="Displayed if selection"/>
    </header>

.. note::

  Currently, only the ``always`` option is usable because it is not yet possible
  to select records in a kanban view. This should happen soon.

.. _reference/view_architecture/kanban/progressbar:

<progressbar>: progressbar on top of columns
--------------------------------------------

.. code-block:: xml

  <kanban>
    <progressbar field="FIELD_NAME"/>
    ...
  </kanban>

declares a progressbar element to put on top of kanban columns.

Possible attributes are:

:field:
  string_ (mandatory) :ref:`model <reference/orm/model>` field name

  the name of the field whose values are used to subgroup column's records in
  the progressbar

:colors:
  JSON_ (mandatory)

  JSON mapping the above field values to either "danger", "warning", "success"
  or "muted" colors

:sum_field:
  string_ (optional) :ref:`model <reference/orm/model>` field name

  the name of the field whose column's records' values will be summed and
  displayed next to the progressbar (if omitted, displays the total number of
  records)

.. container:: row

  .. code-block:: xml
    :class: col-xxl-6

    <kanban>
      <progressbar field="activity_state"
          colors="{'planned': 'success', 'today': 'warning', 'overdue': 'danger'}"
          sum_field="expected_revenue"/>
      <templates>
        ...
      </templates>
    </kanban>

  .. image:: view_architecture/kanban_progressbar.svg
    :class: col-xxl-6

.. _reference/view_architecture/kanban/templates:

<templates>: template of card
-----------------------------

.. code-block:: xml

  <kanban>
    ...
    <templates>
      <t t-name="kanban-box">
        <div>
          <field name="name"/>
        </div>
      </t>
    </templates>
  </kanban>

defines a list of :ref:`reference/qweb` templates. Cards definition may be
split into multiple templates for clarity, but kanban views *must* define at
least one root template ``kanban-box``, which will be rendered once for each
record.

Two additional templates can be defined: ``kanban-menu`` and ``kanban-tooltip``.
If defined, the ``kanban-menu`` template is rendered inside a dropdown that can be
toggled with a vertical ellipsis (:guilabel:`⋮`) on the top right of the card.
The ``kanban-tooltip`` template is rendered inside a tooltip when hovering kanban cards.

The kanban view uses mostly-standard :ref:`javascript qweb
<reference/qweb/javascript>` and provides the following context variables:

.. rst-class:: o-definition-list

``widget``
  the current :js:class:`KanbanRecord`, can be used to fetch some
  meta-information. These methods are also available directly in the
  template context and don't need to be accessed via ``widget``
``record``
  an object with all the requested fields as its attributes. Each field has
  two attributes ``value`` and ``raw_value``, the former is formatted
  according to current user parameters, the latter is the direct value from
  a :meth:`~odoo.models.Model.read` (except for date and datetime fields
  that are `formatted according to user's locale
  <https://github.com/odoo/odoo/blob/a678bd4e/addons/web_kanban/static/src/js/kanban_record.js#L102>`_)
``context``
  the current context, coming from the action, and the one2many or many2many
  field in the case of a Kanban view embedded in a Form view
``user_context``
  self-explanatory
``read_only_mode``
  self-explanatory
``selection_mode``
  set to true when kanban view is opened in mobile environment from m2o/m2m field
  for selecting records.

  .. note:: clicking on m2o/m2m field in mobile environment opens kanban view


  .. rubric:: buttons and fields

  While most of the Kanban templates are standard :ref:`reference/qweb`, the
  Kanban view processes ``field``, ``button`` and ``a`` elements specially:

  * by default fields are replaced by their formatted value, unless the
    ``widget`` attribute is specified, in which case their rendering and
    behavior depends on the corresponding widget. Possible values are (among
    others):

    .. rst-class:: o-definition-list

    ``handle``
        for ``sequence`` (or ``integer``) fields by which records are
        sorted, allows to drag&drop records to reorder them.

    .. todo:: list widgets?

  * buttons and links with a ``type`` attribute become perform Odoo-related
    operations rather than their standard HTML function. Possible types are:

    .. rst-class:: o-definition-list

    ``action``, ``object``
      standard behavior for :ref:`Odoo buttons
      <reference/view_architecture/list/button>`, most attributes relevant to standard
      Odoo buttons can be used.
    ``open``
      opens the card's record in the form view in read-only mode
    ``edit``
      opens the card's record in the form view in editable mode
    ``delete``
      deletes the card's record and removes the card

  .. todo::

      * kanban-specific CSS
      * kanban structures/widgets (vignette, details, ...)

If you need to extend the Kanban view, see :js:class:`KanbanRecord`.

.. ....................................................................

.. _reference/view_architecture/qweb:

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

.. ....................................................................

.. _reference/view_architecture/graph:

Graph
=====

The graph view is used to visualize aggregations over a number of records or
record groups. Its root element is ``<graph>`` which can take the following
attributes:

.. rst-class:: o-definition-list

``sample`` boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

``banner_route`` path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

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

.. ....................................................................

.. _reference/view_architecture/pivot:

Pivot
=====

The pivot view is used to visualize aggregations as a `pivot table`_. Its root
element is ``<pivot>`` which can take the following attributes:

.. rst-class:: o-definition-list

``sample`` boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

``banner_route`` path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

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

.. ....................................................................

.. _reference/view_architecture/calendar:

Calendar
========

Calendar views display records as events in a daily, weekly, monthly or yearly
calendar.

.. note:: By default the calendar view will be centered around the current date
   (today). You can pass a specific initial date to the context of the action in
   order to set the initial focus of the calendar on the period (see `mode`) around
   this date (the context key to use being `initial_date`)

Their root element is ``<calendar>``. Available attributes_ on the
calendar view are:

:string:
  string_ (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  boolean_ (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  boolean_ (default: ``True``)

  Disable/enable record editing on the view.

:delete:
  boolean_ (default: ``True``)

  Disable/enable record deletion on the view through the **Action** dropdown.

.. rst-class:: o-definition-list

``date_start`` (required)
    name of the record's field holding the start date for the event
``date_stop``
    name of the record's field holding the end date for the event, if
    ``date_stop`` is provided records become movable (via drag and drop)
    directly in the calendar
``date_delay``
    alternative to ``date_stop``, provides the duration of the event instead of
    its end date (unit: day)
``color``
    name of a record field to use for *color segmentation*. Records in the
    same color segment are allocated the same highlight color in the calendar,
    colors are allocated semi-randomly.
    Displayed the display_name/avatar of the visible record in the sidebar
``form_view_id``
    view to open when the user create or edit an event. Note that if this attribute
    is not set, the calendar view will fall back to the id of the form view in the
    current action, if any.
``event_open_popup``
    If the option 'event_open_popup' is set to true, then the calendar view will
    open events (or records) in a FormViewDialog. Otherwise, it will open events
    in a new form view (with a do_action)
``quick_add``
    enables quick-event creation on click: only asks the user for a ``name``
    (the field to which this values is saved can be controlled through
    ``rec_name``) and tries to create a new event with just that and the clicked
    event time. Falls back to a full form dialog if the quick creation fails
``create_name_field``
    name of the record's field holding the textual representation of the record,
    this is used when creating records through the 'quick create' mechanism
``all_day``
    name of a boolean field on the record indicating whether the corresponding
    event is flagged as day-long (and duration is irrelevant)
``mode``
    Default display mode when loading the calendar.
    Possible attributes are: ``day``, ``week``, ``month``, ``year``
``scales``
    Comma-separated list of scales to provide. By default, all scales are
    available. See mode for possible scale values.
``create``, ``delete``
    allows disabling the corresponding action in the view by setting the
    corresponding attribute to ``false``
``<field>``
  declares fields to aggregate or to use in kanban *logic*. If the field is
  simply displayed in the calendar cards.

  Fields can have additional attributes:

  .. rst-class:: o-definition-list

  ``invisible``
    use "True" to hide the value in the cards
  ``avatar_field``
    only for x2many field, to display the avatar instead of the display_name
    in the cards
  ``write_model`` and ``write_field`` and ``filter_field``
    you can add a filter and save the result in the defined model, the
    filter is added in the sidebar. The ``filter_field`` is optional and allows
    you to specify the field that will hold the status of the filter.
  ``filters`` and ``color``
    use "True" to add this field in filter in the sidebar. You can specify
    a ``color`` field used to colorize the checkbox.


Model Commons
-------------

.. currentmodule:: odoo.addons.base.models.ir_ui_view
.. autoattribute:: Model._date_name
    :noindex:

.. ....................................................................

.. _reference/view_architecture/activity:

Activity
========

The Activity view is used to display the activities linked to the records. The
data are displayed in a chart with the records forming the rows and the activity
types the columns. The first cell of each row displays a (customizable, see
``templates``, quite similarly to :ref:`reference/view_architecture/kanban`) card representing
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
  (see :ref:`reference/view_architecture/kanban` for more details):

  .. rst-class:: o-definition-list

  ``widget``
    the current :js:class:`ActivityRecord`, can be used to fetch some
    meta-information. These methods are also available directly in the
    template context and don't need to be accessed via ``widget``
  ``record``
    an object with all the requested fields as its attributes. Each field has
    two attributes ``value`` and ``raw_value``

.. ....................................................................

.. _reference/view_architecture/cohort:

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

``sample`` boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

``banner_route`` path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

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

.. ....................................................................

.. _reference/view_architecture/grid:

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

.. ....................................................................

.. _reference/view_architecture/gantt:

Gantt
=====

.. raw:: html

   <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

Gantt views appropriately display Gantt charts (for scheduling).

The root element of gantt views is ``<gantt/>``, it has no children but can
take the following attributes_:

:sample:
  boolean_ (default: ``False``)

  Populate the view with a set of sample records if none are found for the current model.
  This attribute is false by default.

  These fake records will have heuristics for certain field names/models. For example,
  a field 'display_name' on the model 'res.users' will be populated with sample people names
  while an 'email' field will be in the form 'firstname.lastname@sample.demo'.

  The user will not be able to interact with these data and they will be discarded as soon as
  an action is performed (record created, column added, etc.)

:banner_route:
  path_ (optional)

  a route address to be fetched and prepended to the view.

  If this attribute is set, the
  :ref:`controller route url<reference/controllers>` will be fetched and
  displayed above the view. The json response from the controller should
  contain an "html" key.

  If the html contains a stylesheet <link> tag, it will be
  removed and appended to <head>.

  To interact with the backend you can use <a type="action"> tags. Please take
  a look at the documentation of the useActionLinks (*addons/web/static/src/views/view_hook.js*)

  for more details.

  Only views extending AbstractView and AbstractController can use this
  attribute, like :ref:`reference/view_architecture/form`, :ref:`reference/view_architecture/kanban`,
  :ref:`reference/view_architecture/list`, ...

  Example:

  .. code-block:: xml

      <tree banner_route="/module_name/hello" />

  .. code-block:: python

      class MyController(odoo.http.Controller):
          @http.route('/module_name/hello', auth='user', type='json')
          def hello(self):
              return {
                  'html': """
                      <div>
                          <link href="/module_name/static/src/css/banner.css"
                              rel="stylesheet">
                          <h1>hello, world</h1>
                      </div> """
              }

:string:
  string_ (default: ``''``)

  This view title is displayed only if you open an action that has no name and
  whose target is 'new' (opening a dialog)

:create:
  boolean_ (default: ``True``)

  Disable/enable record creation on the view.

:edit:
  boolean_ (default: ``True``)

  Disable/enable record editing on the view.

:delete:
  boolean_ (default: ``True``)

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
  `python expression`_ that evaluates to a boolean_

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

.. ....................................................................

.. _reference/view_architecture/map:

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

.. ....................................................................

.. _`accesskey`: https://www.w3.org/TR/html5/editing.html#the-accesskey-attribute
.. _`attributes`: https://en.wikipedia.org/wiki/HTML_attribute
.. _`boolean`: https://docs.python.org/3/library/stdtypes.html#boolean-values
.. _`Bootstrap`: https://getbootstrap.com/
.. _`bootstrap contextual color`: https://getbootstrap.com/docs/3.3/components/#available-variations
.. _`Comma-separated values`: https://en.wikipedia.org/wiki/Comma-separated_values
.. _`dict`: https://docs.python.org/3/library/stdtypes.html#mapping-types-dict
.. _`floats`: https://developer.mozilla.org/en-US/docs/Web/CSS/float
.. _`geoforwarding`: https://nominatim.org/release-docs/develop/
.. _`HTML`: https://en.wikipedia.org/wiki/HTML
.. _`HTML class`: https://en.wikipedia.org/wiki/HTML_attribute
.. _`integer`: https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex
.. _`JSON`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
.. _`kanban board`: https://en.wikipedia.org/wiki/Kanban_board
.. _`KanbanExamplesRegistry`: https://github.com/odoo/odoo/blob/99821fdcf89aa66ac9561a972c6823135ebf65c0/addons/web/static/src/js/views/kanban/kanban_examples_registry.js
.. _`keyboard_shortcut`: https://en.wikipedia.org/wiki/Keyboard_shortcut
.. _`MapBox`: https://docs.mapbox.com/api/
.. _`Odoo`: https://www.odoo.com/
.. _`path`: https://en.wikipedia.org/wiki/Path_(computing)
.. _`pivot table`: https://en.wikipedia.org/wiki/Pivot_table
.. _`python expression`: https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not
.. _`relative path`: https://en.wikipedia.org/wiki/URL
.. _`signing up`: https://account.mapbox.com/auth/signup/
.. _`string`: https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str
.. _`tiles`: https://wiki.openstreetmap.org/wiki/Tile_data_server
