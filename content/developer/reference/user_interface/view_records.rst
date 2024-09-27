============
View records
============

Views are what define how records should be displayed to end-users. They are specified in XML and
stored as records themselves, meaning they can be edited independently from the models that they
represent. They are flexible and allow a high level of customization of the screens that they
control. There exist various :ref:`types of views <reference/view_records/types>`. Each represents a
visualization mode: *form*, *list*, *kanban*, etc.

.. _reference/view_records/structure:

Generic structure
=================

Basic views generally share the common minimal structure defined below. Placeholders are denoted in
all caps.

.. code-block:: xml

    <record id="ADDON.MODEL_view_TYPE" model="ir.ui.view">
      <field name="name">NAME</field>
      <field name="model">MODEL</field>
      <field name="arch" type="xml">
        <VIEW_TYPE>
          <views/>
        </VIEW_TYPE>
      </field>
    </record>

.. _reference/view_records/types:

View types
==========

:ref:`Form <reference/view_architectures/form>`
  Display and edit the data from a single record.
:ref:`List <reference/view_architectures/list>`
  View and edit multiple records.
:ref:`Search <reference/view_architectures/search>`
  Apply filters and perform searches. The results are displayed in the current list, kanban... view.
:ref:`Kanban <reference/view_architectures/kanban>`
  Display records as "cards", configurable as a small template.
:ref:`Qweb <reference/view_architectures/qweb>`
  Templating of reporting, website...
:ref:`Graph <reference/view_architectures/graph>`
  Visualize aggregations over a number of records or record groups.
:ref:`Pivot <reference/view_architectures/pivot>`
  Display aggregations as a `pivot table <https://en.wikipedia.org/wiki/Pivot_table>`_.
:ref:`Calendar <reference/view_architectures/calendar>`
  Display records as events in a daily, weekly, monthly, or yearly calendar.
:ref:`Cohort <reference/view_architectures/cohort>` |enterprise|
  Display and understand the way some data changes over a period of time.
:ref:`Gantt <reference/view_architectures/gantt>` |enterprise|
  Display records as a Gantt chart.
:ref:`Grid <reference/view_architectures/grid>` |enterprise|
  Display computed information in numerical cells; are hardly configurable.
:ref:`Map <reference/view_architectures/map>` |enterprise|
  Display records on a map, and the routes between them.

.. |enterprise| raw:: html

   <span class="badge" style="background-color:#714B67">Enterprise feature</span>

.. _reference/view_records/fields:

Fields
======

View records expose a number of fields.

.. autoclass:: odoo.addons.base.models.ir_ui_view.IrUiView()

   .. attribute:: name

      Only useful as a mnemonic/description of the view when looking for one in a list of some sort.
      Most Odoo view names start with the name of the addon and end with the type of view being
      discussed.

      :requirement: Optional
      :type: :class:`~odoo.fields.Char`

   .. attribute:: model

      The model linked to the view, if applicable.

      :requirement: Mandatory
      :type: :class:`~odoo.fields.Char`

   .. attribute:: arch

      The description of the view layout depending on the :doc:`view type <view_architectures>`.

      :requirement: Optional
      :type: :class:`~odoo.fields.Text`

   .. attribute:: groups_id

      The groups allowed to use/access the current view.

      If the view extends an existing view, the extension will be applied only for a given user, if
      that user has access to the provided `groups_id`.

      :requirement: Optional
      :type: :class:`~odoo.fields.Many2many` -> :class:`~odoo.addons.base.models.res_users.Groups`

   .. attribute:: priority

      When requesting a view by specifying the `model` and `type`, the matching view with the lowest
      priority is returned (it is the default view).

      It also defines the order of views application during :ref:`view resolution
      <reference/view_records/inheritance/resolution>`. When a view is requested by `id` and its
      mode is not `primary`, its *closest* parent with `mode` = `primary` is matched.

      :requirement: Optional
      :type: :class:`~odoo.fields.Integer`

   .. attribute:: inherit_id

      Reference to the parent view on which the :ref:`inheritance
      <reference/view_records/inheritance>` will be applied. Its value is used by default. Specify
      the parent using the `ref` attribute with :code:`ref="ADDON.MODEL_parent_view_TYPE"`.

      The addon name (before the dot) is not necessary if the inheritance is done on a record of the
      same module.

      See :ref:`reference/view_records/inheritance` for more information.

      :requirement: Optional
      :type: :class:`~odoo.fields.Many2one`

   .. attribute:: mode

      Only applies if this view inherits from an other one (`inherit_id` is set).

      .. attribute:: extension

         If the view is requested, the closest primary view is looked up (via `inherit_id`). Then,
         all views inheriting from it with this view's model are applied.

      .. attribute:: primary

         The closest primary view is fully resolved (even if it uses a different model than the
         current one). Then, the view's :ref:`inheritance specs
         <reference/view_records/inheritance/specs>` are applied, and the result is used as if it
         were this view's actual arch.

      A case in which one would want to override `mode` while using `inherit_id` is delegation
      inheritance. In that case, your derived model is separated from its parent, and views
      matching with one won't match with the other. Assuming one inherits from a view associated
      with the parent model and wants to customize the derived view to show data from the derived
      model, the `mode` of the derived view needs to be set to `primary` because it is the base (and
      maybe only) view for that derived model. Otherwise, the :ref:`view matching
      <reference/view_records/inheritance/resolution>` rules won't apply.

      See :ref:`reference/view_records/inheritance` for more information.

      :requirement: Optional
      :type: :class:`~odoo.fields.Selection`: `extension` / `primary`
      :default: `extension`

.. note::
   The current context and user access rights may also impact the view abilities.

.. _reference/view_records/inheritance:

Inheritance
===========

Inheritance allows for customizing delivered views. It makes it possible, for example, to add
content as modules are installed, or to deliver different displays according to the action.

Inherit views generally share the common structure defined below. Placeholders are denoted in all
caps. This synthetic view will update a node targeted by an XPath, and another targeted by its name
and attributes.

.. code-block:: xml

   <record id="ADDON.MODEL_view_TYPE" model="ir.ui.view">
       <field name="model">MODEL</field>
       <field name="inherit_id" ref="VIEW_REFERENCE"/>
       <field name="mode">MODE</field>
       <field name="arch" type="xml">
           <xpath expr="XPATH" position="POSITION">
               <CONTENT/>
           </xpath>
           <NODE ATTRIBUTES="VALUES" position="POSITION">
               <CONTENT/>
           </NODE>
       </field>
   </record>

The `inherit_id` and `mode` fields determine the :ref:`view resolution
<reference/view_records/inheritance/resolution>`. The `xpath` or `NODE` elements indicate the
:ref:`inheritance specs <reference/view_records/inheritance/specs>`. The `expr` and `position`
attributes specify the :ref:`inheritance position <reference/view_records/inheritance/position>`.

.. _reference/view_records/inheritance/resolution:

View resolution
---------------

Resolution generates the final `arch` for a requested/matched `primary` view as follow:

#. if the view has a parent, the parent is fully resolved, then the current view's inheritance specs
   are applied;
#. if the view has no parent, its `arch` is used as-is;
#. the current view's children with mode `extension` are looked up, and their inheritance specs are
   applied depth-first (a child view is applied, then its children, then its siblings).

The inheritance is applied according to the `inherit_id` field. If several view records inherit the
same view, the order is determined by the `priority`.

The result of applying children views yields the final `arch`.

.. todo:: NOTE on fields_view_get and link to ORM ?

.. _reference/view_records/inheritance/specs:

Inheritance specs
-----------------

Inheritance specs are applied sequentially and are comprised of:

#. an element locator to match the inherited element in the parent view;
#. children element to modify the inherited element.

There are three types of element locators:

- An `xpath` element with an `expr` attribute. `expr` is an `XPath
  <https://en.wikipedia.org/wiki/XPath>`_ expression\ [#hasclass]_ applied to the current `arch`,
  matching the first node it finds;
- A `field` element with a `name` attribute, matching the first field with the same `name`.

  .. note::
     All other attributes are ignored.

- Any other element, matching the first element with the same `name` and identical attributes.

  .. note::
     The attributes `position` and `version` are ignored.

.. [#hasclass] An extension function is added for simpler matching in QWeb views:
               `hasclass(*classes)` matches if the context node has all the specified classes.

.. example::
   .. code-block:: xml

      <xpath expr="page[@name='pg']/group[@name='gp']/field" position="inside">
          <field name="description"/>
      </xpath>

      <div name="name" position="replace">
          <field name="name2"/>
      </div>

.. _reference/view_records/inheritance/position:

Inheritance position
--------------------

The inheritance specs accept an optional `position` attribute, defaulting to `inside`, that
specifies how the matched node should be modified.

.. attribute:: inside

   The content of the inheritance spec is appended to the matched node.

   .. example::

      .. code-block:: xml

         <notebook position="inside">
             <page string="New feature">
                 ...
             </page>
         </notebook>

.. attribute:: after

   The content of the inheritance spec is appended to the matched node's parent after the matched
   node.

   .. example::

      .. code-block:: xml

         <xpath expr="//field[@name='x_field']" position="after">
             <field name="x_other_field"/>
         </xpath>

.. attribute:: before

   The content of the inheritance spec is appended to the matched node's parent before the matched
   node.

   .. example::

      .. code-block:: xml

         <field name=x_field" position="before">
             <field name="x_other_field"/>
         </field>

.. attribute:: replace

   The content of the inheritance spec replaces the matched node. Any text node containing only `$0`
   within the contents of the spec is replaced by a copy of the matched node, effectively wrapping
   the matched node.

   .. example::

      .. code-block:: xml

         <xpath expr="//field[@name='x_field']" position="replace">
             <div class="wrapper">
                 $0
             </div>
         </xpath>

.. attribute:: attributes

   The content of the inheritance spec should be made of only `attribute` elements, each with a
   `name` attribute and an optional body.

   - If the `attribute` element has a body, a new attributed named after its `name` is added to the
     matched node with the `attribute` element's text as value.
   - If the `attribute` element has no body, the attribute named after its `name` is removed from the
     matched node.
   - If the `attribute` element has an `add` attribute, a `remove` attribute, or both, the value of
     the matched node's attribute named after `name` is recomputed to account for the value(s) of
     `add`, `remove`, and an optional `separator` attribute defaulting to `,`. `add` includes its
     value(s), separated by `separator`. `remove` removes its value(s), separated by `separator`.

   .. example::
      .. code-block:: xml

         <field name="x_field" position="attributes">
             <attribute name="invisible">True</attribute>
             <attribute name="class" add="mt-1 mb-1" remove="mt-2 mb-2" separator=" "/>
         </field>

.. attribute:: move

   The attribute `position="move"` is set on the content of the inheritance spec to specify how nodes
   are moved relatively to the inheritance spec's element locator, on which the attribute `position`
   must also be set, with values `inside`, `replace`, `after`, or `before`.

   .. example::
      .. code-block:: xml

         <xpath expr="//@target" position="after">
             <xpath expr="//@node" position="move"/>
         </xpath>

         <field name="target_field" position="after">
             <field name="my_field" position="move"/>
         </field>

.. _reference/view_records/model_commons:

Model commons
=============

.. autoclass:: odoo.addons.base.models.ir_ui_view.Base()
   :noindex:

   .. automethod:: Base.get_views
   .. automethod:: Base.get_view
