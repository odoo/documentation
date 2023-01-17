============
View Records
============

Views are what define how records should be displayed to end-users. They are specified in XML which
means that they can be edited independently from the models that they represent. They are flexible
and allow a high level of customization of the screens that they control. There exist various types
of views. Each of them represents a mode of visualization: *form*, *list*, *kanban*, etc.

.. todo:: Build doc of ir_ui_view.py ?

.. _reference/view_records/structure:

Generic structure
=================

Basic views generally share the common structure defined below. Placeholders are denoted in all
caps.

.. code-block:: xml

    <record id="ADDON.MODEL_view_TYPE" model="ir.ui.view">
      <field name="name">NAME</field>
      <field name="model">MODEL</field>
      <!--
      <field name="groups_id" eval="GROUPS"/>
      <field name="priority">PRIORITY</field>
      -->
      <!--
      <field name="inherit_id" ref="REFERENCE"/>
      <field name="mode">PRIMARY</field>
      -->
      <field name="arch" type="xml">
        <VIEW_TYPE>
          <views/>
        </VIEW_TYPE>
      </field>
    </record>

.. _reference/view_records/types:

View types
==========

- :ref:`Form <reference/view_architecture/form>` ->
  display and edit the data from a single record
- :ref:`List <reference/view_architecture/list>` ->
  view and edit multiple records
- :ref:`Search <reference/view_architecture/search>` ->
  apply filters and perform searches (the result are displayed in the current view list, kanban...)
- :ref:`Kanban <reference/view_architecture/kanban>` ->
  displays records as "cards" configurable as a small template
- :ref:`Qweb <reference/view_architecture/qweb>` ->
  templating of reporting, website...
- :ref:`Graph <reference/view_architecture/graph>` ->
  visualize aggregations over a number of records or record groups
- :ref:`Pivot <reference/view_architecture/pivot>` ->
  display aggregations as a `pivot table`_
- :ref:`Calendar <reference/view_architecture/calendar>` ->
  display records as events in a daily, weekly, monthly or yearly calendar

.. raw:: html

  <span class="badge" style="background-color:#AD5E99">Enterprise feature</span>

- :ref:`Cohort <reference/view_architecture/cohort>` ->
  display and understand the way some data changes over a period of time
- :ref:`Gantt <reference/view_architecture/gantt>` ->
  display records as a Gantt charts (for scheduling)
- :ref:`Grid <reference/view_architecture/grid>` ->
  display computed information in numerical cells are hardly configurable
- :ref:`Map <reference/view_architecture/map>` ->
  display records on a map and the routes between them

.. _reference/view_records/fields:

Fields
======

View objects expose a number of fields. They are optional unless specified otherwise.

:name:
  :class:`~odoo.fields.Char`

  Only useful as a mnemonic/description of the view when looking for one in a list of some sort.
  Most Odoo view names start with the name of the addon and end with the type of view being discussed.

:model:
  :class:`~odoo.fields.Char` (mandatory)

  The model linked to the view, if applicable.

:arch:
  :class:`~odoo.fields.Text`

  The description of the view layout depending on :doc:`view type <view_architecture>`

:groups_id:
  :class:`~odoo.fields.Many2many` -> :class:`~odoo.addons.base.models.res_users.Groups`

  The groups allowed to use/access the current view.

  If the view extends an existing view, the extension will only be applied
  for a given user if the user has access to the provided ``groups_id``.

:priority:
  :class:`~odoo.fields.Integer`

  When a view is requested by ``model`` and ``type``, the view matching the
  model and the type, with the lowest priority will be returned (it is the
  default view).

  It also defines the order of views application during :ref:`view
  inheritance <reference/view_records/inheritance>`. When a view is requested
  by ``id``, if its mode is not ``primary`` its *closest* parent with ``mode``
  ``primary`` is matched.

:inherit_id:
  :class:`~odoo.fields.Many2one`

  Reference to the parent view on which the inheritance will be applied. It
  value is uset by default. Specify the parent using the ``ref`` attribute as
  `ref="ADDON.MODEL_parent_view_TYPE"`. The addon name (separate by dot) is
  not necessary if the inheritance is done on a record of the same module.

  See :ref:`inheritance <reference/view_records/inheritance>` information

:mode:
  :class:`~odoo.fields.Selection`: ``extension`` / ``primary``

  Only applies if this view inherits from an other one (inherit_id is not False/Null).

  **extension** (default)
    if this view is requested the closest primary view is looked up (via inherit_id),
    then all views inheriting from it with this view's model are applied
  **primary**
    the closest primary view is fully resolved (even if it uses a different model than
    this one), then this view's inheritance specs (<xpath/>) are applied, and the result
    is used as if it were this view's actual arch.

  An example of where you would want to override ``mode`` while using
  ``inherit_id`` is delegation inheritance.
  In that case your derived model will be separate from its parent and views
  matching with one won't match with the other. Suppose you inherit from a view
  associated with the parent model and want to customize the derived view to
  show data from the derived model. The ``mode`` of the derived view needs to
  be set to ``primary``, because it's the base (and maybe only) view for that
  derived model. Otherwise the :ref:`view matching <reference/view_records/inheritance/view-matching>`
  rules won't apply.

  See :ref:`inheritance <reference/view_records/inheritance>` information

.. note:: The current context and user access rights may also impact the view abilities.

.. _reference/view_records/inheritance:

Inheritance
===========

Inheritance allows you to customize delivered views. This makes it possible, for example,
to add content according to the modules installed, or to deliver different displays
according to the action.

Inherit views generally share the common structure defined below. Placeholders are
denoted in all caps. This synthetic view will update a node targeted by an xpath, and
an other targeted by his name and attributes.

The two following :ref:`view fields <reference/view_records/fields>` `inherit_id` and
`mode` are used to specify inherited views.

.. code-block:: xml

    <record id="ADDON.MODEL_view_TYPE" model="ir.ui.view">
      <field name="model">MODEL</field>
      <field name="inherit_id" ref="VIEW_REFERENCE"/>
      <!--
      <field name="mode">PRIMARY</field>
      -->
      <field name="arch" type="xml">
        <xpath expr="XPATH" position="inside">
          CONTENT
        </xpath>
        <NODE ATTRIBUTES="VALUES" position="replace">
          <CONTENT/>
        </NODE>
      </field>
    </record>

.. _reference/view_records/inheritance/view-matching:

View resolution
---------------

Resolution generates the final ``arch`` for a requested/matched ``primary``
view:

#. if the view has a parent, the parent is fully resolved then the current
   view's inheritance specs are applied
#. if the view has no parent, its ``arch`` is used as-is
#. the current view's children with mode ``extension`` are looked up  and their
   inheritance specs are applied depth-first (a child view is applied, then
   its children, then its siblings)

The inheritance is applied according to ``inherit_id``. If several view
record inherit the same view, the order is determined by the ``priority``.

The result of applying children views yields the final ``arch``

.. todo:: NOTE on fields_view_get and link to ORM ?

Inheritance specs
-----------------

Inheritance specs are comprised of an element locator, to match
the inherited element in the parent view, and children element that
will be used to modify the inherited element.

There are three types of element locators for matching a target element:

* An ``xpath`` element with an ``expr`` attribute. ``expr`` is an XPath_
  expression\ [#hasclass]_ applied to the current ``arch``, the first node
  it finds is the match
* a ``field`` element with a ``name`` attribute, matches the first ``field``
  with the same ``name``. All other attributes are ignored during matching
* any other element: the first element with the same name and identical
  attributes (ignoring ``position`` and ``version`` attributes) is matched

.. code-block:: xml

  <xpath expr="page[@name='pg']/group[@name='gp']/field" position="inside">
    <field name="description"/>
  </xpath>

  <div name="name" position="replace">
    <field name="name2"/>
  </div>

The view's specs are applied sequentially.

.. [#hasclass] an extension function is added for simpler matching in QWeb
               views: ``hasclass(*classes)`` matches if the context node has
               all the specified classes

Inheritance position
--------------------

The inheritance spec may have an optional ``position`` attribute specifying
how the matched node should be altered. By default the value is ``inside``.

:inside:
    the content of the inheritance spec is appended to the matched node

    .. code-block:: xml

      <notebook position="inside">
          <page string="New feature">
              ...
          </page>
      </notebook>

:after:
    the content of the inheritance spec is added to the matched node's
    parent, after the matched node

    .. code-block:: xml

      <xpath expr="//field[@name='x_field']" position="after">
          <field name="x_other_field"/>
      </xpath>

:before:
    the content of the inheritance spec is added to the matched node's
    parent, before the matched node

    .. code-block:: xml

      <field name=x_field" position="before">
          <field name="x_other_field"/>
      </field>

:replace:
    the content of the inheritance spec replaces the matched node.
    Any text node containing only ``$0`` within the contents of the spec will
    be replaced  by a complete copy of the matched node, effectively wrapping
    the matched node.

    .. code-block:: xml

      <xpath expr="//field[@name='x_field']" position="replace">
          <div class="wrapper">
              $0
          </div>
      </xpath>

:attributes:
    the content of the inheritance spec should be ``attribute`` elements
    with a ``name`` attribute and an optional body:

    * if the ``attribute`` element has a body, a new attributed named
      after its ``name`` is created on the matched node with the
      ``attribute`` element's text as value
    * if the ``attribute`` element has no body, the attribute named after
      its ``name`` is removed from the matched node. If no such attribute
      exists, an error is raised
    * if the ``attribute`` element has an ``add`` attribute, a ``remove`` attribute, or both, the
      value of the matched node's attribute named after ``name`` is recomputed to include the
      value(s) of ``add`` (separated by ``separator``) and delete the value(s) of ``remove``
      (separated by ``separator``). If ``separator`` is not provided, ``,`` is used instead.

    .. code-block:: xml

      <field name="x_field" position="attributes">
          <attribute name="invisible">True</attribute>
          <attribute name="class" add="mt-1 mb-1" remove="mt-2 mb-2" separator=" "/>
      </field>

:move:
    can be used as a direct child of a inheritance spec
    with a ``inside``, ``replace``, ``after`` or ``before`` ``position`` attribute
    to move a node.

    .. code-block:: xml

      <xpath expr="//@target" position="after">
          <xpath expr="//@node" position="move"/>
      </xpath>

      <field name="target_field" position="after">
          <field name="my_field" position="move"/>
      </field>

Model Commons
=============

.. currentmodule:: odoo.addons.base.models.ir_ui_view
.. automethod:: Model.get_views
.. automethod:: Model.get_view


.. _pivot table: https://en.wikipedia.org/wiki/Pivot_table
.. _XPath: https://en.wikipedia.org/wiki/XPath
.. _path: https://en.wikipedia.org/wiki/Path_(computing)
.. _boolean: https://docs.python.org/3/library/stdtypes.html#boolean-values
