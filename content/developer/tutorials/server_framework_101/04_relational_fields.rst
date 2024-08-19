==================================
Chapter 4: Extend the model family
==================================

In Odoo, data rarely exists in isolation. The true power of an application lies in its ability to
connect and relate different pieces of information. In this chapter, we'll explore the three
fundamental types of model relationships in Odoo: Many2One, One2Many, and Many2Many. Mastering these
connections will allow us to create rich, interconnected data structures that will form the backbone
of our real estate application.

.. _tutorials/server_framework_101/module_structure:

Organize your module structure
==============================

As our `real_estate` module grows, you may notice that we've already created a dozen files for just
one model, along with its menu items, actions and views. With more models on the horizon, our module
directory could quickly become cluttered. To address this potential issue, Odoo provides **module
structure guidelines** that offer several benefits:

- **Improved maintainability**: A well-organized directory structure makes it easier to navigate the
  module and locate specific files.
- **Scalability**: Proper organization prevents the module from becoming cluttered as it grows in
  complexity and size.
- **Collaboration**: A standardized structure facilitates understanding among contributors and
  ensures easier integration with the Odoo ecosystem.

.. example::
   Let's consider a possible structure for our example `product` module:

   .. code-block:: text

      product/
      │
      ├── data/
      │   └── product_data.xml
      │
      ├── models/
      │   ├── __init__.py
      │   └── product.py
      │
      ├── security/
      │   └── ir.model.access.csv
      │
      ├── views/
      │   ├── menus.xml
      │   └── product_views.xml
      │
      ├── static/
      │   ├── description/
      │   │   └── icon.png
      │   │
      │   └── img/
      │       ├── coffee_table.png
      │       └── t_shirt.png
      │
      ├── __init__.py
      └── __manifest__.py

   .. note::
      - The :file:`models` directory contains its own :file:`__init__.py` file, simplifying Python
        imports. The root :file:`__init__.py` file imports the :file:`models` Python package, which
        in turns imports individual model files.
      - Security-related files, such as :file:`ir.model.access.csv`, are placed in the dedicated
        :file:`security` directory.
      - UI files (:file:`menus.xml`, and view definitions) are organized within the :file:`views`
        directory.
      - There is no :file:`actions.xml` file. That is because managing actions is easier when they
        are defined in the same file as the views they're linked to.
      - The app icon resides in :file:`static/description`, while other image assets are stored in
        :file:`static/img`.
      - The :file:`__init__.py` and :file:`__manifest__.py` files remain in the module's root
        directory.

.. seealso::
   :ref:`Coding guidelines on module directories
   <contributing/coding_guidelines/module_structure/directories>`

.. exercise::
   Restructure the `real_estate` module according to the guidelines.

   .. tip::
      Use `[CLN]` for your :ref:`commit message tag
      <contributing/git_guidelines/commit_tag_module>`.

.. spoiler:: Solution

   .. code-block:: text
      :caption: Module structure

      real_estate/
      │
      ├── data/
      │   └── real_estate_property_data.xml.xml
      │
      ├── models/
      │   ├── __init__.py
      │   └── real_estate_property.py
      │
      ├── security/
      │   └── ir.model.access.csv
      │
      ├── views/
      │   ├── menus.xml
      │   └── real_estate_property_views.xml
      │
      ├── static/
      │   ├── description/
      │   │   └── icon.png
      │   │
      │   └── img/
      │       ├── country_house.png.png
      │       ├── loft.png
      │       └── mixed_use_commercial.png.png
      │
      ├── __init__.py
      └── __manifest__.py

   .. code-block:: python
      :caption: `models/__init__.py`

      from . import real_estate_property

   .. code-block:: python
      :caption: `__init__.py`
      :emphasize-lines: 1

      from . import models

   .. code-block:: xml
      :caption: `data/real_estate_property_data.xml`
      :emphasize-lines: 3,9,15

      <record id="real_estate.country_house" model="real.estate.property">
          [...]
          <field name="image" type="base64" file="real_estate/static/img/country_house.png"/>
          [...]
      </record>

      <record id="real_estate.loft" model="real.estate.property">
          [...]
          <field name="image" type="base64" file="real_estate/static/img/loft.png"/>
          [...]
      </record>

      <record id="real_estate.mixed_use_commercial" model="real.estate.property">
          [...]
          <field name="image" type="base64" file="real_estate/static/img/mixed_use_commercial.png"/>
          [...]
      </record>

   .. code-block:: xml
      :caption: `data/real_estate_property_views.xml`
      :emphasize-lines: 4-15

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

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

          [...]

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 2-10

      'data': [
          # Model data
          'data/real_estate_property_data.xml',

          # Security
          'security/ir.model.access.csv',

          # Views
          'views/real_estate_property_views.xml',
          'views/menus.xml',  # Depends on `real_estate_property_views.xml`
      ],

.. _tutorials/server_framework_101/many2one:

Many-to-one relationships
=========================

As promised at the end of :doc:`the previous chapter <03_build_user_interface>`, we'll now expand
our app's capabilities by adding new models to manage additional information. This expansion
naturally leads us to an important question: How will our `real.estate.property` model connect to
these new models?

In relational databases, including Odoo's, **many-to-one relationships** play a crucial role. These
relationships allow you to link *multiple* records in one model to a *single* record in another
model.

In Odoo, many-to-one relationships are established by adding a `Many2one` field to the model
representing the *many* side of the relationship. The field is represented in the database by a
`foreign key <https://en.wikipedia.org/wiki/Foreign_key>`_ that references the ID of the connected
record. By convention, `Many2one` field names end with the `_id` suffix, indicating that they store
the referenced record's ID.

.. example::
   In the example below, the `Selection` field of the `product` model is replaced by a `Many2one`
   field to create a more flexible and scalable model structure.

   .. code-block:: python

      from odoo import fields, models


      class Product(models.Model):
          _name = 'product'
          _description = "Storable Product"

          [...]
          category_id = fields.Many2one(
              string="Category", comodel_name='product.category', ondelete='restrict', required=True
          )

      class ProductCategory(models.Model):
          _name = 'product.category'
          _description = "Product Category"

          name = fields.Char(string="Name")

   .. note::
      - The relationship only needs to be declared on the *many* side to be established.
      - The `ondelete` argument on the `Many2one` field defines what happens when the referenced
        record is deleted.

.. seealso::
   :ref:`Reference documentation for Many2one fields <reference/fields/many2one>`

In our real estate app, we currently have a fixed set of property types. To increase flexibility,
let's replace the current `type` field with a many-to-one relationship to a separate model for
managing property types.

.. exercise::
   #. Create a new `real.estate.property.type` model.

      - Update the :file:`ir.model.access.csv` file to grant all database administrators access to
        the model.
      - Replace the dummy :guilabel:`Settings` menu item with a new :menuselection:`Configuration
        --> Property Types` menu item.
      - Create a window action to browse property types only in list view.
      - Create the list view for property types.
      - In a data file, describe at least as many default property types as the `type` field of the
        `real.estate.property` model supports.

   #. Replace the `type` field on the `real.estate.property` model by a many-to-one relationship to
      the `real.estate.property.type` model. Prevent deleting property types if a property
      references them.

   .. tip::

      - As the window action doesn't allow opening property types in form view, clicking the
        :guilabel:`New` button does nothing. To allow editing records in-place, rely on the
        reference documentation for :ref:`root attributes of list views
        <reference/view_architectures/list/root>`
      - The server will throw an error at start-up because it can't require a value for the new,
        currently empty field. To avoid fixing that manually in the database, run the command
        :command:`dropdb tutorials` to delete the database and start from scratch.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property_type.py`

      from odoo import fields, models


      class RealEstatePropertyType(models.Model):
          _name = 'real.estate.property.type'
          _description = "Real Estate Property Type"

          name = fields.Char(string="Name", required=True)

   .. code-block:: python
      :caption: `__init__.py`
      :emphasize-lines: 2

      from . import real_estate_property
      from . import real_estate_property_type

   .. code-block:: csv
      :caption: `ir.model.access.csv`
      :emphasize-lines: 3

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      real_estate_property_system,real.estate.property.system,model_real_estate_property,base.group_system,1,1,1,1
      real_estate_property_type_system,real.estate.property.type.system,model_real_estate_property_type,base.group_system,1,1,1,1

   .. code-block:: xml
      :caption: `menus.xml`
      :emphasize-lines: 3-9

      <menuitem id="real_estate.root_menu"> <!-- truncated -->
          <menuitem id="real_estate.properties_menu"/> <!-- truncated -->
          <menuitem id="real_estate.configuration_menu" name="Configuration" sequence="20">
              <menuitem
                  id="real_estate.property_types_menu"
                  name="Property Types"
                  action="real_estate.view_property_types_action"
              />
          </menuitem>
      </menuitem>

   .. code-block:: xml
      :caption: `real_estate_property_type_views.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.view_property_types_action" model="ir.actions.act_window">
              <field name="name">Property Types</field>
              <field name="res_model">real.estate.property.type</field>
              <field name="view_mode">list</field>
          </record>

          <record id="real_estate.property_type_list" model="ir.ui.view">
              <field name="name">Property Type List</field>
              <field name="model">real.estate.property.type</field>
              <field name="arch" type="xml">
                  <list editable="bottom">
                      <field name="name"/>
                  </list>
              </field>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `real_estate_property_type_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.type_house" model="real.estate.property.type">
              <field name="name">House</field>
          </record>

          <record id="real_estate.type_apartment" model="real.estate.property.type">
              <field name="name">Apartment</field>
          </record>

          <record id="real_estate.type_office" model="real.estate.property.type">
              <field name="name">Office Building</field>
          </record>

          <record id="real_estate.type_retail" model="real.estate.property.type">
              <field name="name">Retail Space</field>
          </record>

          <record id="real_estate.type_warehouse" model="real.estate.property.type">
              <field name="name">Warehouse</field>
          </record>

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 3,4,7,9

      'data': [
          # Model data
          'data/real_estate_property_type_data.xml',
          'data/real_estate_property_data.xml',  # Depends on `real_estate_property_type_data.xml`
          [...]
          # Views
          'views/real_estate_property_type_views.xml',
          'views/real_estate_property_views.xml',
          'views/menus.xml',  # Depends on actions in views.
      ],

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1-3

      type_id = fields.Many2one(
          string="Type", comodel_name='real.estate.property.type', ondelete='restrict', required=True
      )

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 5,14,27

      <record id="real_estate.property_list" model="ir.ui.view">
          [...]
              <list>
                  [...]
                  <field name="type_id"/>
                  [...]
              </list>
          [...]
      </record>

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <group string="Listing Information">
                  <field name="type_id"/>
                  <field name="selling_price"/>
                  <field name="availability_date"/>
                  <field name="active"/>
              </group>
          [...]
      </record>

      <record id="real_estate.property_search" model="ir.ui.view">
          [...]
              <search>
                  [...]
                  <filter name="group_by_state" context="{'group_by': 'state'}"/>
                  <filter name="group_by_type" context="{'group_by': 'type_id'}"/>
              </search>
          [...]
      </record>

   .. code-block:: xml
      :caption: `real_estate_property_data.xml`
      :emphasize-lines: 3,9,15

      <record id="real_estate.country_house" model="real.estate.property">
          [...]
          <field name="type_id" ref="real_estate.type_house"/>
          [...]
      </record>

      <record id="real_estate.loft" model="real.estate.property">
          [...]
          <field name="type_id" ref="real_estate.type_apartment"/>
          [...]
      </record>

      <record id="real_estate.mixed_use_commercial" model="real.estate.property">
          [...]
          <field name="type_id" ref="real_estate.type_retail"/>
          [...]
      </record>

.. _tutorials/server_framework_101/generic_models:

Generic models
--------------

In the previous exercise, we created a many-to-one relationship with a custom model within the
`real_estate` module. However, Odoo provides several generic models that can extend your app's
capabilities without defining new models. These generic models are part of the default `base` module
and are typically prefixed with `res` or `ir`.

Two frequently used models in Odoo are:

- `res.users`: Represents user accounts in the database. They determine access rights to records and
  can be `internal` (have access to the backend), `portal` (have access to the portal, e.g., to view
  their invoices), or `public` (not logged in).
- `res.partner`: Represents physical or legal entities. They can be a company, an individual, or a
  contact address.

.. seealso::
   `The list of generic models in the base module <{GITHUB_PATH}/odoo/addons/base/models>`_

To make our real estate properties more informative, let's add two pieces of information: the seller
of the property and the salesperson managing the property.

.. exercise::
   #. Add the following fields to the `real.estate.property` model:

      - **Seller** (required): The person putting their property on sale; it can be any individual.
      - **Salesperson**: The employee of the real estate agency overseeing the sale of the property.
      - **Address** (required): The address of the property.

   #. Modify the form view of properties to include a notebook component. The property description
      should be in the first page, and the three new fields should be in the second page.

   .. tip::
      - You don't need to define any new UI component to browse the seller you assigned to your
        default properties! Just go to :menuselection:`Apps` and install the :guilabel:`Contacts`
        app.
      - In Odoo, addresses are usually represented by a partner.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1-3

      address_id = fields.Many2one(string="Address", comodel_name='res.partner', required=True)
      seller_id = fields.Many2one(string="Seller", comodel_name='res.partner', required=True)
      salesperson_id = fields.Many2one(string="Salesperson", comodel_name='res.users')

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 3-19

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <notebook>
                  <page string="Description">
                      <field
                          name="description"
                          placeholder="Write a description about this property."
                      />
                  </page>
                  <page string="Other Info">
                      <group>
                          <group>
                              <field name="address_id"/>
                              <field name="seller_id"/>
                              <field name="salesperson_id"/>
                          </group>
                      </group>
                  </page>
              </notebook>
          [...]
      </record>

   .. code-block:: xml
      :caption: `res_partner_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

           <record id="real_estate.country_house_address" model="res.partner">
              <field name="name">Country House</field>
              <field name="street">Chaussée de Namur 40</field>
              <field name="city">Grand-Rosière-Hottomont</field>
              <field name="zip">1367</field>
              <field name="country_id" ref="base.be"/>
          </record>

          <record id="real_estate.loft_address" model="res.partner">
              <field name="name">Loft</field>
              <field name="street">Rue des Bourlottes 9</field>
              <field name="city">Grand-Rosière-Hottomont</field>
              <field name="zip">1367</field>
              <field name="country_id" ref="base.be"/>
          </record>

          <record id="real_estate.mixed_use_commercial_address" model="res.partner">
              <field name="name">Mixed use commercial building</field>
              <field name="street">Rue de Ramillies 1</field>
              <field name="city">Grand-Rosière-Hottomont</field>
              <field name="zip">1367</field>
              <field name="country_id" ref="base.be"/>
          </record>

          <record id="real_estate.bafien_carpink" model="res.partner">
              <field name="name">Bafien Carpink</field>
          </record>

          <record id="real_estate.antony_petisuix" model="res.partner">
              <field name="name">Antony Petisuix</field>
          </record>

          <record id="real_estate.amyfromthevideos" model="res.partner">
              <field name="name">AmyFromTheVideos</field>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `real_estate_property_data.xml`
      :emphasize-lines: 3-4,9-10,15-16

      <record id="real_estate.country_house" model="real.estate.property">
          [...]
          <field name="address_id" ref="real_estate.country_house_address"/>
          <field name="seller_id" ref="real_estate.amyfromthevideos"/>
      </record>

      <record id="real_estate.loft" model="real.estate.property">
          [...]
          <field name="address_id" ref="real_estate.loft_address"/>
          <field name="seller_id" ref="real_estate.antony_petisuix"/>
      </record>

      <record id="real_estate.mixed_use_commercial" model="real.estate.property">
          [...]
          <field name="address_id" ref="real_estate.mixed_use_commercial_address"/>
          <field name="seller_id" ref="real_estate.bafien_carpink"/>
      </record>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 3,5,6

      'data': [
          # Model data
          'data/res_partner_data.xml',
          'data/real_estate_property_type_data.xml',
          # Depends on `res_partner_data.xml`, `real_estate_property_type_data.xml`
          'data/real_estate_property_data.xml',
          [...]
      ],

.. _tutorials/server_framework_101/one2many:

One-to-many relationships
=========================

After exploring how to connect multiple records to a single one with many-to-one relationships,
let's consider their counterparts: **one-to-many relationships**. These relationships represent the
inverse of the many-to-one relationships we just discussed, enabling a *single* record in one model
to be associated with *multiple* records in another model.

In Odoo, one-to-many relationships are established by adding a `One2many` field to the model
representing the *one* side of **an already existing** many-to-one relationship. It's important to
note that `One2many` fields don't store data in the database; instead, they provide a virtual field
that Odoo computes based on the referenced `Many2one` field. By convention, `One2many` field names
end with the `_ids` suffix, indicating that they allow accessing the IDs of the connected records.

.. example::
   In the example below, a `One2many` field is added to the `product.category` model to allow quick
   access to the connected products from the product category.

   .. code-block:: python

      from odoo import fields, models


      class Product(models.Model):
          _name = 'product'
          _description = "Storable Product"

          [...]
          category_id = fields.Many2one(
              string="Category", comodel_name='product.category', ondelete='restrict', required=True
          )

      class ProductCategory(models.Model):
          _name = 'product.category'
          _description = "Product Category"

          name = fields.Char(string="Name")
          product_ids = fields.One2many(
              string="Products", comodel_name='product', inverse_name='category_id'
          )

   .. note::
      The `One2many` field must reference its `Many2one` counterpart through the `inverse_name`
      argument.

.. seealso::
   :ref:`Reference documentation for One2many fields <reference/fields/one2many>`

A good use case for a one-to-many relationship in our real estate app would be to connect properties
to a list of offers received from potential buyers.

.. exercise::
   #. Create a new `real.estate.offer` model. It should have the following fields:

      - **Amount** (required): The amount offered to buy the property.
      - **Buyer** (required): The person making the offer.
      - **Date** (required; defaults to the creation date): When the offer was made.
      - **Validity** (defaults to 7): The number of days before the offer expires.
      - **State** (required): Either "Waiting", "Accepted", or "Refused".

   #. Create a list and form views for the `real.estate.offer` model. It's not necessary to create
      menu items or actions, as offers will be accessible from properties, but feel free to do it
      anyway!
   #. Allow connecting properties to multiple offers.
   #. Modify the form view of properties to display offers in a new notebook page titled "Offers".

   .. tip::
      The `default` field argument expects a callable function, not a precalculated value. If you
      mistakenly pass the result of calling the `fields.Date.today` helper function, the field's
      default value will be set to the server's start-up time, not the correct date at runtime.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_offer.py`

      from odoo import fields, models


      class RealEstateOffer(models.Model):
          _name = 'real.estate.offer'
          _description = "Real Estate Offer"

          amount = fields.Float(string="Amount", required=True)
          buyer_id = fields.Many2one(string="Buyer", comodel_name='res.partner', required=True)
          date = fields.Date(string="Date", required=True, default=fields.Date.today)
          validity = fields.Integer(
              string="Validity", help="The number of days before the offer expires.", default=7
          )
          state = fields.Selection(
              string="State",
              selection=[
                  ('waiting', "Waiting"),
                  ('accepted', "Accepted"),
                  ('refused', "Refused"),
              ],
              required=True,
              default='waiting',
          )
          property_id = fields.Many2one(
              string="Property", comodel_name='real.estate.property', required=True
          )

   .. code-block:: python
      :caption: `__init__.py`
      :emphasize-lines: 1

      from . import real_estate_offer
      from . import real_estate_property
      from . import real_estate_property_type

   .. code-block:: csv
      :caption: `ir.model.access.csv`
      :emphasize-lines: 2

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      real_estate_offer_system,real.estate.offer.system,model_real_estate_offer,base.group_system,1,1,1,1
      real_estate_property_system,real.estate.property.system,model_real_estate_property,base.group_system,1,1,1,1
      real_estate_property_type_system,real.estate.property.type.system,model_real_estate_property_type,base.group_system,1,1,1,1

   .. code-block:: xml
      :caption: `real_estate_offer_views.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.offer_list" model="ir.ui.view">
              <field name="name">Offer List</field>
              <field name="model">real.estate.offer</field>
              <field name="arch" type="xml">
                  <list>
                      <field name="amount"/>
                      <field name="buyer_id"/>
                      <field name="date"/>
                      <field name="validity"/>
                      <field name="state"/>
                  </list>
              </field>
          </record>

          <record id="real_estate.offer_form" model="ir.ui.view">
              <field name="name">Offer Form</field>
              <field name="model">real.estate.offer</field>
              <field name="arch" type="xml">
                  <form>
                      <sheet>
                          <group>
                              <group>
                                  <field name="amount"/>
                                  <field name="buyer_id"/>
                                  <field name="state"/>
                              </group>
                              <group>
                                  <field name="date"/>
                                  <field name="validity"/>
                              </group>
                          </group>
                      </sheet>
                  </form>
              </field>
          </record>

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 4

      'data': [
          [...]
          # Views
          'views/real_estate_offer_views.xml',
          'views/real_estate_property_type_views.xml',
          'views/real_estate_property_views.xml',
          'views/menus.xml',  # Depends on actions in views.
      ],

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1-3

      offer_ids = fields.One2many(
          string="Offers", comodel_name='real.estate.offer', inverse_name='property_id'
      )

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 3-5

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <page string="Offers">
                  <field name="offer_ids"/>
              </page>
          [...]
      </record>

.. _tutorials/server_framework_101/many2many:

Many-to-many relationships
==========================

After the many-to-one and one-to-many relationships, let's consider a more complex use case:
**many-to-many relationships**. These relationships enable *multiple* records in one model to be
associated with *multiple* records in another model, creating a bidirectional connection between
sets of records.

In Odoo, many-to-many relationships are established by adding a `Many2many` field to one or both of
the models. The server framework implements many-to-many relationships by automatically creating an
intermediate (junction) table in the database. This table stores pairs of IDs, each pair
representing a connection between a record of the first model and a record of the second model. By
convention, `Many2many` field names end with the `_ids` suffix, like for `One2many` fields.

.. example::
   In the example below, a many-to-many relationship is established between the `product` model and
   the `res.partner` model, which is used to represent sellers offering products for sale.

   .. code-block:: python

      from odoo import fields, models


      class Product(models.Model):
          _name = 'product'
          _description = "Storable Product"

          [...]
          seller_ids = fields.Many2many(
              string="Sellers",
              help="The sellers offering the product for sale.",
              comodel_name='res.partner',
              relation='product_seller_rel',
              column1='product_id',
              column2='partner_id',
          )

   .. note::
      - It is not necessary to add a `Many2many` field to both models of the relationship.
      - The optional `relation`, `column1`, and `column2` field arguments allow specifying the name
        of the junction table and of its columns.

.. seealso::
   :ref:`Reference documentation for Many2many fields <reference/fields/many2many>`

Let's conclude this extension of the model family by allowing to associate multiple description tags
with each property.

.. exercise::
   #. Create a new `real.estate.tag` model. It should have the following fields:

      - Name (required): The label of the tag.
      - Color: The color code to use for the tag, as an integer.

   #. In a data file, describe various default property tags. For example, "Renovated".
   #. Create all necessary UI components to manage tags from the :guilabel:`Configuration` category
      menu item.
   #. Allow connecting properties to multiple tags, and tags to multiple properties.
   #. Modify the form view of properties to display their associated tags. It should not be possible
      to create new tags from the form view of properties.

   .. tip::
      Rely on the reference documentation for :ref:`the field component
      <reference/view_architectures/form/field>` in form views to find a nice display for property
      tags.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_tag.py`

      from odoo import fields, models


      class RealEstateTag(models.Model):
          _name = 'real.estate.tag'
          _description = "Real Estate Tag"

          name = fields.Char(string="Label", required=True)
          color = fields.Integer(string="Color")

   .. code-block:: python
      :caption: `__init__.py`
      :emphasize-lines: 4

      from . import real_estate_offer
      from . import real_estate_property
      from . import real_estate_property_type
      from . import real_estate_tag

   .. code-block:: csv
      :caption: `ir.model.access.csv`
      :emphasize-lines: 3

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      [...]
      real_estate_tag_system,real.estate.tag.system,model_real_estate_tag,base.group_system,1,1,1,1

   .. code-block:: xml
      :caption: `real_estate_tag_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.tag_eco_passive" model="real.estate.tag">
              <field name="name">Eco Passive</field>
              <field name="color">1</field>
          </record>

          <record id="real_estate.tag_modern" model="real.estate.tag">
              <field name="name">Modern</field>
              <field name="color">2</field>
          </record>

          <record id="real_estate.tag_renovated" model="real.estate.tag">
              <field name="name">Renovated</field>
              <field name="color">3</field>
          </record>

          <record id="real_estate.tag_rural" model="real.estate.tag">
              <field name="name">Rural</field>
              <field name="color">4</field>
          </record>

          <record id="real_estate.tag_suburban" model="real.estate.tag">
              <field name="name">Suburban</field>
              <field name="color">5</field>
          </record>

          <record id="real_estate.tag_urban" model="real.estate.tag">
              <field name="name">Urban</field>
              <field name="color">6</field>
          </record>

          <record id="real_estate.tag_waterfront" model="real.estate.tag">
              <field name="name">Waterfront</field>
              <field name="color">7</field>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `menus.xml`
      :emphasize-lines: 3-7

      <menuitem id="real_estate.configuration_menu" name="Configuration" sequence="20">
          [...]
          <menuitem
              id="real_estate.tags_menu"
              name="Tags"
              action="real_estate.view_tags_action"
          />
      </menuitem>

   .. code-block:: xml
      :caption: `real_estate_tag_views.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.views_tag_action" model="ir.actions.act_window">
              <field name="name">Tags</field>
              <field name="res_model">real.estate.tag</field>
              <field name="view_mode">list</field>
          </record>

          <record id="real_estate.tag_list" model="ir.ui.view">
              <field name="name">Tag List</field>
              <field name="model">real.estate.tag</field>
              <field name="arch" type="xml">
                  <list editable="bottom">
                      <field name="name"/>
                      <field name="color" widget="color_picker"/>
                  </list>
              </field>
          </record>

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 3,5

      'data': [
          [...]
          'data/real_estate_tag_data.xml',
          [...]
          'views/real_estate_tag_views.xml',
          [...]
      ],

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1

      tag_ids = fields.Many2many(string="Tags", comodel_name='real.estate.tag')

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 3-7

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <field
                  name="tag_ids"
                  widget="many2many_tags"
                  options="{'color_field': 'color', 'no_quick_create': True, 'no_create_edit': True}"
              />
          [...]
      </record>

----

Congratulations! You've learned the art of forging connections between your Odoo models. You're now
well-equipped to build complex, interconnected data structures. In the next chapter, we'll
:doc:`add custom business logic to the models <05_connect_the_dots>`, turning your application from
a simple data management tool into a smart, automated system that can handle complex business
processes.
