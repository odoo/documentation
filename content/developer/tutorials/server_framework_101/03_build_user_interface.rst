===================================
Chapter 3: Build the user interface
===================================

In this chapter, we will bring our application to life by building a :abbr:`UI (User Interface)`
that allows users to interact with the models. This will require defining menu items, actions, and
views. By the end of this chapter, we will have a fully functional interface to manage real estate
properties!

.. _tutorials/server_framework_101/menu_items:

Add menus items
===============

**Menus items** are the first thing users see and interact with. They give users access to the
different parts of Odoo and can be nested to form a hierarchical structure. This allows the
functionalities of complex applications to be organized into categories and sub-categories and makes
them easier to navigate. The top level of the menu structure typically contains the menu items for
the main applications (like "Contacts", "Sales", and "Accounting"). These top-level menu items can
also be visually enhanced with custom icons for better recognition.

Menu items can take on two distinct roles:

- **Category menu items**: They serve as organizational containers and simply expand to show their
  submenu when clicked.
- **Action menu items**: They trigger a specific action in the UI when clicked. While menu items
  often trigger actions, they are separate entities. The same action can be triggered by different
  menu items, or even buttons.

In Odoo, menu items are actually records of the `ir.ui.menu` model whose key fields are:

.. rst-class:: o-definition-list

`name` (required)
   The title of the menu item.
`sequence`
   Determines the ordering of same-level menu items.
`parent_id`
   The ID of the parent menu item's record.
`web_icon`
   The path to the icon file to use as a menu item icon.
`action`
   The action to trigger when the menu item is clicked.

Like for any other model, one can automatically create records of the `ir.ui.menu` model by means of
a data file. Let’s do just that and add menu items to our real estate app!

.. exercise::
   #. Create and declare a new :file:`menus.xml` file at the root of the `real_estate` module.
   #. Describe a new "Real Estate" menu item to serve as root menu for our real estate app.

      - Leave the `parent_id` field empty to place the menu item in the top-level menu.
      - Use the `static/description/icon.png` file as `web_icon`, in the format
        `<module>,<icon_file_path>`.

   #. Nest new "Properties" and "Settings" menu items under the root menu item. As we have not yet
      created an action to browse properties or open settings, reference the following existing
      actions instead:

      - `base.open_module_tree` that opens the list of modules.
      - `base.action_client_base_menu` that opens the general settings.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 3

      'data': [
          'ir.model.access.csv',
          'menus.xml',
          'real_estate_property_data.xml',
      ],

   .. code-block:: xml
      :caption: `menus.xml`

      <?xml version="1.0"?>
      <odoo>

          <record id="real_estate.root_menu" model="ir.ui.menu">
              <field name="name">Real Estate</field>
              <field name="web_icon">real_estate,static/description/icon.png</field>
          </record>

          <record id="real_estate.properties_menu" model="ir.ui.menu">
              <field name="name">Properties</field>
              <field name="sequence">10</field>
              <field name="parent_id" ref="real_estate.root_menu"/>
              <field name="action" ref="base.open_module_tree"/>
          </record>

          <record id="real_estate.settings_menu" model="ir.ui.menu">
              <field name="name">Settings</field>
              <field name="sequence">20</field>
              <field name="parent_id" ref="real_estate.root_menu"/>
              <field name="action" ref="base.action_client_base_menu"/>
          </record>

      </odoo>

If you go to the app switcher :dfn:`the top-level menu of Odoo`, you should now see a menu item for
our real estate app! Click it to open the app and automatically trigger the first action in its
sub-menu. If you referenced the `base.open_module_tree` action, you should now see a list of Odoo
modules.

.. _tutorials/server_framework_101/menuitem_shortcut:

Use the `menuitem` shortcut
---------------------------

As an application grows in size, so do its menus, and it becomes increasingly complicated to define
and nest menu items. While defining menu items using the `record` data operation works perfectly
fine, the server framework provides a shortcut that makes the process easier and more intuitive,
especially for nesting menu items: the `menuitem` data operation.

The `menuitem` tag is a special XML element that is specifically designed for creating menu items;
it simplifies the syntax and automatically handles some technical details for you.

.. example::
   Our fictional `product` module could define menu items as follows:

   .. code-block:: xml

      <menuitem id="product.root_menu" name="Product" web_icon="product,static/description/product.png">
          <menuitem id="product.all_products_menu" name="All Products" sequence="1" action="product.view_all_products_action"/>
          <menuitem id="product.new_products_menu" name="New Products" sequence="2" action="product.view_new_products_action"/>
      </menuitem>

   .. note::
      - The outer `menuitem` data operation creates the top-level "Product" menu item.
      - The specifications (`name`, `web_icon`, `sequence`, `action`, ...) of menu items are set
        through attributes of the XML element.
      - The menu items hierarchy is defined by nesting their XML elements.

Why keep complex code when you can simplify it? It's already time for our first **code
refactoring**!

.. exercise::
   Rewrite the description of the menu items of our real estate app using the `menuitem` data
   operation instead of `record`.

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `menus.xml`
      :emphasize-lines: 4-21

      <?xml version="1.0"?>
      <odoo>

          <menuitem
              id="real_estate.root_menu"
              name="Real Estate"
              web_icon="real_estate,static/description/icon.png"
          >
              <menuitem
                  id="real_estate.properties_menu"
                  name="Properties"
                  sequence="1"
                  action="base.open_module_tree"
              />
              <menuitem
                  id="real_estate.settings_menu"
                  name="Settings"
                  sequence="2"
                  action="base.action_client_base_menu"
              />
          </menuitem>

      </odoo>

.. _tutorials/server_framework_101/define_window_actions:

Define window actions
=====================

**Actions** define what happens when a user interacts with the UI, such as clicking a menu item.
They connect the user interface with the underlying business logic. There exist different types of
actions in Odoo, the most common one being **window actions** (`ir.actions.act_window`), that
display the records of a specific model in a view. Other types of actions allow for different
behaviors, like **URL actions** that open URLs (`ir.actions.act_url`) or **server actions**
(`ir.actions.server`) that execute custom code.

In Odoo, actions can be stored in the database as records or returned as Python dictionaries
interpreted as action descriptors when business logic is executed. Window actions are described by
the `ir.actions.act_window` model whose key fields include:

.. rst-class:: o-definition-list

`name` (required)
   The title of the action; is often used as the page title.
`res_model` (required)
   The model on which the action operates.
`view_mode`
   A comma-separated list of view types to enable for this action; for example, `list,form,kanban`.
`help`
   An optional help text for the users when there are no records to display.

.. example::
   The example below defines an action to open existing products in either list or form view.

   .. code-block:: xml

      <record id="product.view_products_action" model="ir.actions.act_window">
          <field name="name">Products</field>
          <field name="res_model">product</field>
          <field name="view_mode">list,form</field>
          <field name="help" type="html">
              <p class="o_view_nocontent_smiling_face">
                  Create a new product.
              </p>
          </field>
      </record>

   .. note::
      The content of the `help` field can be written in different formats thanks to the `type`
      attribute of the :ref:`field <reference/data/field>` data operation.

.. seealso::
   :doc:`Reference documentation for actions <../../reference/backend/actions>`

As promised, we'll finally get to interact with our real estate properties in the UI. All we need
now is an action to assign to the menu item.

.. exercise::
   #. Create and declare a new :file:`actions.xml` file at the root of the `real_estate` module.
   #. Describe a new "Properties" window action that opens `real.estate.property` records in list
      and form views, and assign it to the "Properties" menu item. Be creative with the help text!
      For reference, the list of supported classes can be found in the `view.scss
      <{GITHUB_PATH}/addons/web/static/src/views/view.scss>`_ file.

   .. tip::
      Pay attention to the declaration order of data files in the manifest; you might introduce a
      data operation that depends on another one.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 2,4

      'data': [
          'actions.xml',
          'ir.model.access.csv',
          'menus.xml',  # Depends on `actions.xml`
          'real_estate_property_data.xml',
      ],

   .. code-block:: xml
      :caption: `actions.xml`

      <?xml version="1.0"?>
      <odoo>

          <record id="real_estate.view_properties_action" model="ir.actions.act_window">
              <field name="name">Properties</field>
              <field name="res_model">real.estate.property</field>
              <field name="view_mode">list,form</field>
              <field name="help" type="html">
                  <!-- Turns out I didn't feel like being creative with the help text ¯\_(ツ)_/¯ -->
                  <p class="o_view_nocontent_smiling_face">
                      Create a new property.
                  </p>
              </field>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `menus.xml`
      :emphasize-lines: 5

      <menuitem
          id="real_estate.properties_menu"
          name="Properties"
          sequence="10"
          action="real_estate.view_properties_action"
      />

Clicking the "Properties" menu item now displays a list view of the default properties we created
earlier. As we specified in the action that both list and form views were allowed, you can click any
property record to display its form view. Delete all three records to see the help text you created.

.. _tutorials/server_framework_101/create_custom_views:

Create custom views
===================

**Views** are the UI's building blocks, defining how model data is displayed on screen. They are
structures written in XML that describe the layout and behavior of various UI components.

Odoo supports different types of views, each serving a different purpose. The most common types
include **list views** for listing multiple records in a table-like format, **form views** for
displaying and editing individual records, **kanban views** for presenting records in a card layout,
and **search views** for defining search and filtering options.

In Odoo, views are records of the `ir.ui.view` model. Each view is associated with a specific model,
determining which data it displays and interacts with. Key fields include:

.. rst-class:: o-definition-list

`name` (required)
   A unique name for the view.
`model` (required)
   The model the view is associated with.
`arch` (required)
   The view architecture as an XML string.

The `arch` field holds the view's XML architecture, which is composed of a root element determining
the type of the view, and various inner components that depend on the view type. The root element
(e.g., `list`, `form`, `search`) defines the view type, while the inner components describe the
structure and content of the view. These components can be structural (like `sheet` that makes the
layout responsive, or `group` that defines column layouts) or semantic (like `field` that displays
field labels and values).

.. example::
   The following examples demonstrate how to define simple list, form and search views for the
   `product` model.

   .. code-block:: xml
      :caption: A list view for `product`

      <record id="product_list" model="ir.ui.view">
          <field name="name">Product List</field>
          <field name="model">product</field>
          <field name="arch" type="xml">
              <list>
                  <field name="name"/>
                  <field name="price"/>
                  <field name="category"/>
              </list>
          </field>
      </record>

   .. code-block:: xml
      :caption: A form view for `product`

      <record id="product_form" model="ir.ui.view">
          <field name="name">Product Form</field>
          <field name="model">product</field>
          <field name="arch" type="xml">
              <form>
                  <sheet>
                      <group>
                          <field name="name"/>
                          <field name="description"/>
                          <field name="price"/>
                          <field name="category"/>
                      </group>
                  </sheet>
              </form>
          </field>
      </record>

   .. code-block:: xml
      :caption: A search view for `product`

      <record id="product_search" model="ir.ui.view">
          <field name="name">Product Search</field>
          <field name="model">product</field>
          <field name="arch" type="xml">
              <search>
                  <field name="name"/>
                  <field name="description"/>
              </search>
          </field>
      </record>

   .. note::

      - The XML structure differs between view types.
      - The `description` field is omitted from the list view because it wouldn't fit visually.

.. seealso::
   - :doc:`Reference documentation for view records <../../reference/user_interface/view_records>`
   - :doc:`Reference documentation for view architectures
     <../../reference/user_interface/view_architectures>`

In :ref:`the previous section <tutorials/server_framework_101/define_window_actions>`, we defined
the `view_mode` of our action to display `real.estate.property` records in list and form view.
Although we haven't created the corresponding views yet, the server framework had our back and
automatically provided generic views. The generic list and form views were hard to miss, but a
generic search view was also provided; when searching for properties, you are in fact searching on
property names because it's the only field of the generic view.

However convenient, we should almost never rely on these generic views in business applications.
They are incomplete, badly structured, and often use the wrong field widgets. Let's create our own
custom views for a better :abbr:`UX (User experience)`.

.. _tutorials/server_framework_101/list_view:

List view
---------

For a start, the list view could use more fields than just the name.

.. exercise::
   #. Create a new :file:`real_estate_property_views.xml` file at the root of the `real_estate`
      module.
   #. Create a custom list view to display the following fields of the `real.estate.property` model
      in the given order: name, state, type, selling price, availability date, floor area, number of
      bedrooms, presence of a garage, presence of a garden, and garden area.
   #. Make the visibility of the floor area and all following fields optional so that only the floor
      area is visible by default, while the remaining fields are hidden by default and must be
      displayed by accessing the view's column selector (:icon:`oi-settings-adjust` button).
   #. After restarting the server to load the new data, refresh the browser to see the result.

   .. tip::
      Rely on the reference documentation for :ref:`the field component in list views
      <reference/view_architectures/list/field>`.

   The final result should look like this:

   .. image:: 03_build_user_interface/custom-list-view.png
      :align: center

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 6

      'data': [
          'actions.xml',
          'ir.model.access.csv',
          'menus.xml',  # Depends on `actions.xml`
          'real_estate_property_data.xml',
          'real_estate_property_views.xml',
      ],

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.property_list" model="ir.ui.view">
              <field name="name">Property List</field>
              <field name="model">real.estate.property</field>
              <field name="arch" type="xml">
                  <list>
                      <field name="name"/>
                      <field name="state"/>
                      <field name="type"/>
                      <field name="selling_price"/>
                      <field name="availability_date"/>
                      <field name="floor_area" optional="show"/>
                      <field name="bedrooms" optional="hide"/>
                      <field name="has_garage" optional="hide"/>
                      <field name="has_garden" optional="hide"/>
                      <field name="garden_area" optional="hide"/>
                  </list>
              </field>
          </record>

      </odoo>

.. _tutorials/server_framework_101/form_view:

Form view
---------

.. exercise::
   In the :file:`real_estate_property_views.xml` file, create a custom form view to display all
   fields of the `real.estate.property` model in a well-structured manner:

   - The state should be displayed as a status bar in the header and should be able to be updated
     with a click.
   - The form should have margins (hint: use the `sheet` component).
   - The name should be displayed as the title of the form, should have its label on top, and should
     have a placeholder.
   - The image should be displayed as a thumbnail on the right side of the form.
   - The fields should be grouped in two sections displayed next to each other:

     - Listing Information: Type, Selling Price, Availability Date, Active
     - Building Specifications: Floor Area, Number of Bedrooms, Garage, Garden, Garden Area

   - The description should be displayed at the bottom of the form in its own section, should have
     no label, should have a placeholder, and should take the full width.

   .. tip::
      - Rely on the reference documentation for :ref:`structural components
        <reference/view_architectures/form/structural>` and :ref:`the field component
        <reference/view_architectures/form/field>` in form views.
      - Add the :option:`--dev xml <odoo-bin --dev>` argument to the server start-up command to
        instruct the server to load records defined in XML from your filesystem rather than from the
        database. This avoids restarting the server after modifying an XML file.

   The final result should look like this:

   .. image:: 03_build_user_interface/custom-form-view.png
      :align: center

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`

      <record id="real_estate.property_form" model="ir.ui.view">
          <field name="name">Property Form</field>
          <field name="model">real.estate.property</field>
          <field name="arch" type="xml">
              <form>
                  <header>
                      <field name="state" widget="statusbar" options="{'clickable': True}"/>
                  </header>
                  <sheet>
                      <field name="image" widget="image" class="oe_avatar"/>
                      <div class="oe_title">
                          <label for="name" string="Property Name"/>
                          <h1>
                              <field name="name" placeholder="e.g. Tiny House"/>
                          </h1>
                      </div>
                      <group>
                          <group string="Listing Information">
                              <field name="type"/>
                              <field name="selling_price"/>
                              <field name="availability_date"/>
                              <field name="active"/>
                          </group>
                          <group string="Building Specifications">
                              <field name="floor_area"/>
                              <field name="bedrooms"/>
                              <field name="has_garage"/>
                              <field name="has_garden"/>
                              <field name="garden_area"/>
                          </group>
                      </group>
                      <separator string="Description"/>
                      <field
                          name="description"
                          nolabel="1"
                          colspan="2"
                          placeholder="Write a description about this property."
                      />
                  </sheet>
              </form>
          </field>
      </record>

.. _tutorials/server_framework_101/search_view:

Search view
-----------

The `name` and `active` fields we added earlier to the model are not ordinary fields; they're
examples of **reserved fields**. When set on a model, these special fields enable specific
pre-defined behaviors. For example, the `active` field enables **archiving** (`active = False`) and
**unarchiving** (`active = True`) records through the :icon:`oi-archive` :guilabel:`Archive` and
:icon:`oi-unarchive` :guilabel:`Unarchive` buttons in the action menu. Archived records are
automatically excluded from searches. You can observe this behavior by deselecting the
:guilabel:`Active` checkbox for one of your property records: you'll notice the record no longer
appears upon returning to the list view.

To facilitate the browsing of archived properties, we need to create a search view. Unlike list and
form views, search views are not used to display record data on screen. Instead, they define the
search behavior and enable users to search on specific fields. They also provide pre-defined
**filters** that allow for quickly searching with complex queries and grouping records by particular
fields.

The most common way to set up filters is through **search domains**. Domains are used to select
specific records of a model by defining a list of criteria. Each criterion is a triplet in the
format :code:`(<field_name>, <operator>, <value>)`.

.. example::
   The example search domain below selects only products of the category "Home Decor" whose price is
   less than 1000.

   .. code-block:: python

      [('category', '=', 'home_decor'), ('price', '<', 1000)]

By default, domain criteria are combined with an implicit logical `&` (AND) operator, meaning
*every* criterion must be satisfied for a record to match a domain. Criteria can also be combined
with the logical `|` (OR) and `!` (NOT) operators in prefix form :dfn:`the operator is inserted
before its operands`.

.. example::
   The example search domain below selects only products that belong to the category "Electronics"
   *or* whose price is *not* between 1000 and 2000.

   .. code-block:: python

      ['|', ('category', '=', 'electronics'), '!', '&', ('price', '>=', 1000), ('price', '<', 2000)]

.. seealso::
   - :ref:`Reference documentation for search views <reference/view_architectures/search>`
   - :ref:`Reference documentation for search domains <reference/orm/domains>`
   - :ref:`Reference documentation for the list of reserved field names
     <reference/orm/fields/reserved>`

All the generic search view only allows for is searching on property names; that's the bare minimum.
Let's enhance the search capabilities.

.. exercise::
   #. Create a custom search view with the following features:

      - Enable searching on the these fields:

        - Name: Match records whose name contain the search value.
        - Description: Match records whose description *or* name contains the search value.
        - Selling price: Match records with a price *less than or equal to* the search value.
        - Floor area: Match records with a floor area *at least* the search value.
        - Number of bedrooms: Match records with *at least* the given number of bedrooms.

      - Implement these filters:

        - For Sale: The state is "New" or "Offer Received".
        - Availability Date: Display a list of pre-defined availability date values.
        - Garage: The property has a garage.
        - Garden: The property has a garden.
        - Archived: The property is archived.

      - Combine selected filters with a logical AND, except for Garage and Garden, which should use
        OR when both are selected.
      - Enable grouping properties by state and type.

   #. Modify the window action to display only properties available for sale by default.
   #. Make sure that everything works!

   .. tip::

      - Rely on the reference documentation for :ref:`search view components
        <reference/view_architectures/search/components>`, :ref:`search domains
        <reference/orm/domains>`, and :ref:`search defaults
        <reference/view_architectures/search/defaults>`.
      - In XML, use entity references to avoid parsing errors: `&lt;` for `<`, `&gt;` for `>`,  and
        `&amp;` for `&`.

   The final result should look like this:

   .. image:: 03_build_user_interface/custom-search-view-fields.png
      :align: center

   .. image:: 03_build_user_interface/custom-search-view-filters.png
      :align: center

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`

      <record id="real_estate.property_search" model="ir.ui.view">
          <field name="name">Property Search</field>
          <field name="model">real.estate.property</field>
          <field name="arch" type="xml">
              <search>
                  <!-- Fields -->
                  <field name="name"/>
                  <field
                      name="description"
                      filter_domain="['|', ('name', 'ilike', self), ('description', 'ilike', self)]"
                  />
                  <field name="selling_price" string="Maximum Price" operator="&lt;="/>
                  <field name="floor_area" string="Minimum Floor Area" operator="&gt;="/>
                  <field name="bedrooms" string="Minimum Bedrooms" operator="&gt;="/>

                  <!-- Filters -->
                  <filter
                      name="filter_for_sale"
                      string="For Sale"
                      domain="[('state', 'in', ['new', 'offer_received'])]"
                  />
                  <separator/>
                  <filter name="filter_availability" date="availability_date"/>
                  <separator/>
                  <filter name="filter_garage" string="Garage" domain="[('has_garage', '=', True)]"/>
                  <filter name="filter_garden" string="Garden" domain="[('has_garden', '=', True)]"/>
                  <separator/>
                  <filter name="filter_inactive" string="Archived" domain="[('active', '=', False)]"/>

                  <!-- Group by -->
                  <filter name="group_by_state" context="{'group_by': 'state'}"/>
                  <filter name="group_by_type" context="{'group_by': 'type'}"/>
              </search>
          </field>
      </record>

   .. code-block:: xml
      :caption: `actions.xml`
      :emphasize-lines: 4

      <record id="real_estate.view_properties_action" model="ir.actions.act_window">
          <field name="name">Properties</field>
          <field name="res_model">real.estate.property</field>
          <field name="context">{'search_default_filter_for_sale': True}</field>
          <field name="view_mode">list,form</field>
          <field name="help" type="html">
              <!-- Turns out I didn't feel like being creative with the help text ¯\_(ツ)_/¯ -->
              <p class="o_view_nocontent_smiling_face">
                  Create a new property.
              </p>
          </field>
      </record>

----

We now have a shiny UI to manage real estate properties, but our information model is still quite
basic. We have a limited set of property types and a few building specifications, but that's not
enough for a good real estate application. In the next chapter, we'll :doc:`connect properties to
new models <04_relational_fields>` to transform our basic real estate app into a feature-rich tool.
