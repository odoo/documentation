===========================
Chapter 5: Connect the dots
===========================

In this chapter, we'll add business logic to the models to automate the processes of our application
and turn it into a dynamic and useful tool. This will involve defining actions, constraints,
automatic computations, and other model methods.

.. _tutorials/server_framework_101/computed_fields:

Automate field computations
===========================

So far, we have built an object model capable of handling the essential data for a real estate
business. However, requiring users to manually set every field value can be inconvenient, especially
when some values are derived from other fields. Fortunately, the server framework provides the
ability to define **computed fields**.

Computed fields are a special type of field whose value are derived through programmatic computation
rather than stored directly in the database. The server computes these values on the fly whenever
the field is accessed. This makes computed fields highly convenient for tasks such as displaying
calculation results in views, automating repetitive processes, or assisting users during data entry.

In Odoo, computed fields are implemented by defining a Python method and linking it to a field
declaration using the `compute` argument. This method operates on a **recordset** :dfn:`a collection
of records from the same model` accessible through the `self` argument. The method must iterate over
the records to compute and set the field's value for each one. Additionally, compute methods must be
decorated with the :code:`@api.depends()` decorator when they depend on other fields. This decorator
specifies the fields that trigger an automatic recomputation whenever their values change, ensuring
that computed fields remain consistent.

.. example::
   In the example below, the computed `margin`, `is_profitable` and `breadcrumb` fields are added to
   the `product` model.

   .. code-block:: python

      from odoo import api, fields, models


      class Product(models.Model):
          _name = 'product'

          name = fields.Char(string="Name", required=True)
          price = fields.Float(string="Sales Price", required=True)
          cost = fields.Float(string="Manufacturing Cost")
          margin = fields.Float(string="Profit Margin", compute='_compute_margin')
          is_profitable = fields.Boolean(string="Profitable", compute='_compute_is_profitable')
          category_id = fields.Many2one(
              string="Category", comodel_name='product.category', ondelete='restrict', required=True
          )
          breadcrumb = fields.Char(
              string="Breadcrumb",
              help="The path to the product. For example: 'Home Decor / Coffee table'",
              compute='_compute_breadcrumb',
          )

          @api.depends('price', 'cost')
          def _compute_margin(self):
              for product in self:
                  product.margin = product.price - product.cost

          @api.depends('margin')
          def _compute_is_profitable(self):
              for product in self:
                  product.is_profitable = product.margin > 0

          @api.depends('name', 'category_id.name')
          def _compute_breadcrumb(self):
              for product in self:
                  category = product.category_id
                  product.breadcrumb = f"{category.name} / {product.name}"

   .. note::
      - Compute methods are referenced using their names as strings in the `compute` field argument,
        rather than directly linking the method object. This allows placing them after the field
        declaration.
      - Model methods should be private :dfn:`prefixed with an underscore` to keep them hidden from
        the :doc:`external API <../../reference/external_api>`.
      - Numeric field values default to `0` when not explicitly set.
      - A compute method can depend on another computed field.
      - Field values for related models can be accessed via their `Many2one`, `One2many`, or
        `Many2many` field.
      - Variables used for relational field values are typically not suffixed with `_id` or `_ids`.
        While the field itself represents the stored ID(s), the variable holds the corresponding
        recordset in memory.

.. seealso::
   - :ref:`Reference documentation for computed fields <reference/fields/compute>`
   - :ref:`Reference documentation for recordsets <reference/orm/recordsets>`
   - Reference documentation for the :meth:`@api.depends() <odoo.api.depends>` decorator
   - :ref:`Coding guidelines on naming and ordering the members of model classes
     <contributing/coding_guidelines/model_members>`

Our real estate models could benefit from several computed fields to automate common calculations.
Let's implement them.

.. exercise::
   Add the following fields to the corresponding models and relevant views:

   - **Total Area** (`real.estate.property`): The sum of the floor and garden areas.
   - **Expiry Date** (`real.estate.offer`): The start date offset by the validity period.
   - **Best Offer** (`real.estate.property`): The maximum amount of all offers.

   .. tip::
      - Use the :meth:`mapped <odoo.models.Model.mapped>` method to extract a recordset's field
        values into a list.
      - Import the `odoo.tools.date_utils` package to simplify operations on `Date` fields.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1,8,13,16-27

      from odoo import api, fields, models

      class RealEstateProperty(models.Model):
          [...]
          garden_area = fields.Integer(
              string="Garden Area", help="The garden area excluding the building."
          )
          total_area = fields.Integer(string="Total Area", compute='_compute_total_area')
          [...]
          offer_ids = fields.One2many(
              string="Offers", comodel_name='real.estate.offer', inverse_name='property_id'
          )
          best_offer_amount = fields.Float(string="Best Offer", compute='_compute_best_offer_amount')
          tag_ids = fields.Many2many(string="Tags", comodel_name='real.estate.tag')

          @api.depends('floor_area', 'garden_area')
          def _compute_total_area(self):
              for property in self:
                  property.total_area = property.floor_area + property.garden_area

          @api.depends('offer_ids.amount')
          def _compute_best_offer_amount(self):
              for property in self:
                  if property.offer_ids:
                      property.best_offer_amount = max(property.offer_ids.mapped('amount'))
                  else:
                      property.best_offer_amount = 0

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 5,15,22

      <record id="real_estate.property_list" model="ir.ui.view">
          [...]
              <list>
                  [...]
                  <field name="total_area" optional="hide"/>
              </list>
          [...]
      </record>

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <group string="Listing Information">
                  <field name="type_id"/>
                  <field name="selling_price"/>
                  <field name="best_offer_amount"/>
                  <field name="availability_date"/>
                  <field name="active"/>
              </group>
              <group string="Building Specifications">
                  [...]
                  <field name="garden_area"/>
                  <field name="total_area"/>
                  [...]
              </group>
          [...]
      </record>

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1-2,9,12-15

      from odoo import api, fields, models
      from odoo.tools import date_utils

      class RealEstateOffer(models.Model):
          [...]
          validity = fields.Integer(
              string="Validity", help="The number of days before the offer expires.", default=7
          )
          expiry_date = fields.Date(string="Expiry Date", compute='_compute_expiry_date')
          [...]

          @api.depends('date', 'validity')
          def _compute_expiry_date(self):
              for offer in self:
                  offer.expiry_date = date_utils.add(offer.date, days=offer.validity)

   .. code-block:: xml
      :caption: `real_estate_offer_views.xml`
      :emphasize-lines: 5,16

      <record id="real_estate.offer_list" model="ir.ui.view">
          [...]
              <list>
                  [...]
                  <field name="expiry_date"/>
                  <field name="state"/>
              </list>
          [...]
      </record>

      <record id="real_estate.offer_form" model="ir.ui.view">
          [...]
              <group>
                  [...]
                  <field name="validity"/>
                  <field name="expiry_date"/>
              </group>
          [...]
      </record>

.. _tutorials/server_framework_101/inverse_methods:

Make computed fields editable
-----------------------------

You might have noticed that computed fields are read-only by default. This is expected since their
values are typically determined programmatically rather than set manually by users. However, this
behavior can be limiting when users need to adjust the computed value themselves. **Inverse
methods** address this limitation by allowing edits to computed fields and propagating the changes
back to their dependent fields.

To make a computed field editable, a Python method must be defined and linked to the field
declaration using the `inverse` argument. This method specifies how updates to the computed field
should be applied to its dependencies.

.. example::
   In the example below, an inverse method is added to the `margin` field.

   .. code-block:: python

      margin = fields.Float(
          string="Profit Margin", compute='_compute_margin', inverse='_inverse_margin'
      )

      def _inverse_margin(self):
          for product in self:
              # As the cost is fixed, the sales price is increased to match the desired margin.
              product.price = product.cost + product.margin

Now that we have seen how inverse methods make computed fields editable, let's put this concept in
practice.

.. exercise::
   Make the Expiry Date field editable on real estate offers.

   .. tip::
      You'll need to save the property form view to trigger the computation.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1-3,6-8

      expiry_date = fields.Date(
          string="Expiry Date", compute='_compute_expiry_date', inverse='_inverse_expiry_date'
      )
      [...]

      def _inverse_expiry_date(self):
          for offer in self:
              offer.validity = date_utils.relativedelta(dt1=offer.expiry_date, dt2=offer.date).days

.. _tutorials/server_framework_101/store_computed_fields:

Store computed fields
---------------------

As computed fields are calculated on the fly, recalculating their values repeatedly can become
inefficient, especially when they are frequently accessed or used in models with large datasets.
Another consequence is that they cannot be used in search queries by default. **Stored computed
fields** address both these issues by saving their values in the database and automatically updating
them only when their dependent data changes. Storing a computed field also enables the database to
index the field's column, significantly improving query performance for large datasets.

Computed fields can be stored in the database by including the `store=True` argument in their field
declaration. The :code:`@api.depends()` decorator ensures that computed fields remain consistent not
only in the cache, but also when they are stored in the database.

However, storing computed fields should be carefully considered. Every update to a dependency
triggers a recomputation, which can significantly impact performance on production servers with a
large number of records.

.. example::
   In the example below, the `margin` field is stored in the database.

   .. code-block:: python

      margin = fields.Float(
          string="Profit Margin", compute='_compute_margin', inverse='_inverse_margin', store=True
      )

To make our real estate app more efficient and scalable, we can store certain computed fields in the
database. Let’s store one for now and see how it translates into the database schema.

.. exercise::
   #. Store the `total_area` field in the database.
   #. Use `psql` to check that the field is stored in the database.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1

      total_area = fields.Integer(string="Total Area", compute='_compute_total_area', store=True)

   .. code-block:: text
      :caption: terminal

      $ psql -d tutorials

      tutorials=> \d real_estate_property
                                                  Table "public.real_estate_property"
            Column       |            Type             | Collation | Nullable |                     Default
      -------------------+-----------------------------+-----------+----------+--------------------------------------------------
       [...]
       total_area        | integer                     |           |          |

.. _tutorials/server_framework_101/search_methods:

Search computed fields
----------------------

As mentioned before, computed fields cannot be used in search queries unless they are stored in the
database. This limitation arises because searches are performed at the database level, which is not
aware of the existence of non-stored computed fields. However, storing every field that we wish to
search on would be inefficient. **Search methods** provide a way to overcome this limitation.

To enable searching on a computed field, a Python method must be defined and linked to the field
declaration using the `search` argument. This method receives the search query's `operator` and
`value` and should return a search domain that specifies how the query should filter records. The
domain must be constructed using stored fields only.

.. example::
   In the example below, a search method is added to allow searching on the `is_profitable` field.

   .. code-block:: python

      is_profitable = fields.Boolean(
          string="Profitable", compute='_compute_is_profitable', search='_search_is_profitable'
      )

      def _search_is_profitable(self, operator, value):
          if (operator == '=' and value is True) or (operator == '!=' and value is False):
              return [('margin', '>', 0)]
          elif (operator == '=' and value is False) or (operator == '!=' and value is True):
              return [('margin', '<=', 0)]
          else:
              raise NotImplementedError()

   .. note::
      - Search methods return a search domain that matches the computation of the searched field.
      - It is not required to implement all search operators.

Our real estate app would be more powerful if we could add a set of search filters based on computed
fields to the property views. Let’s leverage search methods to achieve this.

.. exercise::
   Add the following search filters to the real estate property views:

   - **Stalled**: The property is past its availability date.
   - **Priority**: The property has an offer that expires in less than two days.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 2,8,13-15,18-55

      from odoo import api, fields, models
      from odoo.tools import date_utils


      class RealEstateProperty(models.Model):
          [...]
          availability_date = fields.Date(string="Availability Date")
          stalled = fields.Boolean(string="Stalled", compute='_compute_stalled', search='_search_stalled')
          [...]
          offer_ids = fields.One2many(
              string="Offers", comodel_name='real.estate.offer', inverse_name='property_id'
          )
          is_priority = fields.Boolean(
              string="Priority", compute='_compute_is_priority', search='_search_is_priority'
          )
          [...]

          @api.depends('availability_date')
          def _compute_stalled(self):
              for property in self:
                  property.stalled = property.availability_date < fields.Date.today()

          def _search_stalled(self, operator, value):
              if (operator == '=' and value is True) or (operator == '!=' and value is False):
                  return [('availability_date', '<', fields.Date.today())]
              elif (operator == '=' and value is False) or (operator == '!=' and value is True):
                  return [('availability_date', '>=', fields.Date.today())]
              else:
                  raise NotImplementedError()

          @api.depends('offer_ids.expiry_date')
          def _compute_is_priority(self):
              for property in self:
                  is_priority = False
                  for offer in property.offer_ids:
                      if offer.expiry_date <= fields.Date.today() + date_utils.relativedelta(days=2):
                          is_priority = True
                          break
                  property.is_priority = is_priority

          def _search_is_priority(self, operator, value):
              if (operator == '=' and value is True) or (operator == '!=' and value is False):
                  return [(
                      'offer_ids.expiry_date',
                      '<=',
                      fields.Date.today() + date_utils.relativedelta(days=2),
                  )]
              elif (operator == '=' and value is False) or (operator == '!=' and value is True):
                  return [(
                      'offer_ids.expiry_date',
                      '>',
                      fields.Date.today() + date_utils.relativedelta(days=2),
                  )]
              else:
                  raise NotImplementedError()

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 5

      expiry_date = fields.Date(
          string="Expiry Date",
          compute='_compute_expiry_date',
          inverse='_inverse_expiry_date',
          store=True,
      )

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 10-11,14

      <record id="real_estate.property_search" model="ir.ui.view">
          [...]
              <search>
                  [...]
                  <filter
                      name="filter_for_sale"
                      string="For Sale"
                      domain="[('state', 'in', ['new', 'offer_received'])]"
                  />
                  <separator/>
                  <filter name="filter_priority" string="Priority" domain="[('is_priority', '=', True)]"/>
                  <separator/>
                  <filter name="filter_availability" date="availability_date"/>
                  <filter name="filter_stalled" string="Stalled" domain="[('stalled', '=', True)]"/>
                  [...]
              </search>
          [...]
      </record>

.. _tutorials/server_framework_101/related_fields:

Simplify related record access
------------------------------

While computed fields make it easier to derive values programmatically, there are cases where the
desired data already exists in related records. Manually computing such values would be redundant
and error-prone. **Related fields** solve this by dynamically fetching data from related records. As
a special case of computed fields, they simplify access to information without requiring explicit
computation.

In practice, related fields are defined like regular fields, but with the `related` argument set to
the path of the related record's field. Related fields can also be stored with the `store=True`
argument, just like regular computed fields.

.. example::
   In the example below, the related `category_name` field is derived from the `category_id` field.

   .. code-block:: python

      category_name = fields.Char(string="Category Name", related='category_id.name')

.. seealso::
   :ref:`Reference documentation for related fields <reference/fields/related>`

In :doc:`04_relational_fields`, we introduced several relational fields. Retrieving information from
their related models often requires additional steps from the user, but we can use related fields to
simplify this process.

.. exercise::
   #. Use a related field to display the phone number of buyers in the offer list view.
   #. Use a related field to display the street of properties in form view and allow searching by
      street without implementing a search method.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 2

      buyer_id = fields.Many2one(string="Buyer", comodel_name='res.partner', required=True)
      phone = fields.Char(string="Phone", related='buyer_id.phone')

   .. code-block:: xml
      :caption: `real_estate_offer_views.xml`
      :emphasize-lines: 6

      <record id="real_estate.offer_list" model="ir.ui.view">
          [...]
              <list>
                  [...]
                  <field name="buyer_id"/>
                  <field name="phone"/>
                  [...]
              </list>
          [...]
      </record>

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 2

      address_id = fields.Many2one(string="Address", comodel_name='res.partner', required=True)
      street = fields.Char(string="Street", related='address_id.street', store=True)

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 5,15

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <group string="Listing Information">
                  <field name="type_id"/>
                  <field name="street"/>
                  [...]
              </group>
          [...]
      </record>

      <record id="real_estate.property_search" model="ir.ui.view">
          [...]
              <search>
                  [...]
                  <field name="street"/>
                  <field name="selling_price" string="Maximum Price" operator="&lt;="/>
                  [...]
              </search>
          [...]
      </record>

.. _tutorials/server_framework_101/onchanges:

Provide real-time feedback
==========================

**Onchange methods** are a feature of the server framework designed to respond to changes in field
values directly within the user interface. They are executed when a user modifies a field in a form
view, even before saving the record to the database. This allows for real-time updates of other
fields and provides immediate user feedback, such as blocking user errors, non-blocking warnings, or
suggestions. However, because onchange methods are only triggered by changes made in the UI,
specifically from a form view, they are best suited for assisting with data entry and providing
feedback, rather than implementing core business logic in a module.

In Odoo, onchange methods are implemented as Python methods and linked to one or more fields using
the :code:`@api.onchange()` decorator. These methods are triggered when the specified fields' values
are altered. They operate on the in-memory representation of a single-record recordset received
through `self`. If field values are modified, the changes are automatically reflected in the UI.

.. example::
   In the following example, onchange methods are implemented to:

   - unpublish products when all sellers are removed;
   - warn the user if changing the sales price would result in a negative margin;
   - raise a blocking user error if the category is changed after sales have been made.

   .. code-block:: python

      from odoo import _, api, fields, models
      from odoo.exceptions import UserError


      class Product(models.Model):
          is_published = fields.Boolean(string="Published")

          @api.onchange('seller_ids')
          def _onchange_seller_ids_unpublish_if_no_sellers(self):
              if not self.seller_ids:
                  self.is_published = False

          @api.onchange('price')
          def _onchange_price_warn_if_margin_is_negative(self):
              if self.margin < 0:
                  return {
                      'warning': {
                          'title': _("Warning"),
                          'message': _(
                              "The sales price was changed from %(before_price)s to %(new_price)s, which"
                              " would result in a negative margin. A sales price of minimum %(min_price)s"
                              " is recommended.",
                              before_price=self._origin.price, new_price=self.price, min_price=self.cost,
                          ),
                      }
                  }

          @api.onchange('category_id')
          def _onchange_category_id_block_if_existing_sales(self):
              existing_sales = self.env['sales.order'].search([('product_id', '=', self._origin.id)])
              if existing_sales:
                  raise UserError(_(
                      "You cannot change the category of a product that has already been sold; unpublish"
                      " it instead."
                  ))

   .. note::
      - It is recommended to give self-explanatory names to onchange methods as multiple onchange
        methods can be defined for a single field.
      - Onchange methods don't need to iterate over the records as `self` is always a recordset of
        length 1.
      - The :code:`_()` function from the `odoo` package marks display strings :dfn:`strings shown
        to the user and denoted with double quotes` for translation.
      - Regular string interpolation isn't possible withing the translation function. Instead,
        values to interpolate are passed as either positional arguments when using the :code:`%s`
        format, or as keyword arguments when using the :code:`%(name)s` format.
      - The `_origin` model attribute refers to the original record before user modifications.
      - The `env` model attribute is an object that allows access to other models and their classes.
      - The `search` method can be used to query a model for records matching a given search domain.
      - In onchanges methods, the `id` attribute cannot be used to directly access the record's ID.
      - Blocking user errors are raised as exceptions.

.. seealso::
   - Reference documentation for the :meth:`@api.onchange() <odoo.api.onchange>` decorator
   - :doc:`How-to guide on translations </developer/howtos/translations>`
   - Reference documentation for the :class:`UserError <odoo.exceptions.UserError>` exception
   - :ref:`Reference documentation for the environment object <reference/orm/environment>`
   - Reference documentation for the :meth:`search <odoo.models.Model.search>` method

In our real estate app, data entry could be more intuitive and efficient. Let's use onchange methods
to automate updates and guide users as they edit data.

.. exercise::
   #. Set the garden area to zero if the garden checkbox is unchecked.
   #. Set the garden checkbox to checked if the garden area is set.
   #. Display a non-blocking warning if the garden area is set to zero and the garden checkbox is
      checked.
   #. Prevent archiving a property that has **pending** offers.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1-2, 9-40

      from odoo import _, api, fields, models
      from odoo.exceptions import UserError
      from odoo.tools import date_utils


      class RealEstateProperty(models.Model):
          [...]

          @api.onchange('active')
          def _onchange_active_block_if_existing_offers(self):
              if not self.active:
                  existing_offers = self.env['real.estate.offer'].search(
                      [('property_id', '=', self._origin.id), ('state', '=', 'waiting')]
                  )
                  if existing_offers:
                      raise UserError(
                          _("You cannot change the active state of a property that has pending offers.")
                      )

          @api.onchange('has_garden')
          def _onchange_has_garden_set_garden_area_to_zero_if_unchecked(self):
              if not self.has_garden:
                  self.garden_area = 0

          @api.onchange('garden_area')
          def _onchange_garden_area_uncheck_garden_if_zero(self):
              if self.garden_area and not self.has_garden:
                  self.has_garden = True

          @api.onchange('garden_area')
          def _onchange_garden_area_display_warning_if_zero_and_checked(self):
              if not self.garden_area and self.has_garden:
                  return {
                      'warning': {
                          'title': _("Warning"),
                          'message': _(
                              "The garden area was set to zero, but the garden checkbox is checked."
                          ),
                      }
                  }

.. _tutorials/server_framework_101/constraints:

Enforce data integrity
======================

**Constraints** are rules that enforce data integrity by validating field values and relationships
between records. They ensure that the data stored in your application remains consistent and meets
business requirements, preventing invalid values, duplicate entries, or inconsistent relationships
from being saved to the database.

In Odoo, constraints can be implemented at two different levels: directly in the database schema
using **SQL constraints**, or in the model's logic using **constraint methods**. Each type has its
own advantages and use cases, allowing developers to choose the most appropriate validation method
based on their specific needs. Unlike onchange methods, constraints are enforced when saving records
to the database, not when they are altered in the UI.

.. _tutorials/server_framework_101/sql_constraints:

SQL constraints
---------------

SQL constraints are database-level rules that are enforced directly by PostgreSQL when records are
created or modified. They are highly efficient in terms of performance, but they cannot handle
complex logic or access individual records. As a result, they are best suited for straightforward
use cases, such as ensuring that a field value is unique or falls within a specific range.

.. todo: Update for https://github.com/odoo/odoo/pull/175783 in 18.1

SQL constraints are defined in the model using the `_sql_constraints` class attribute. This
attribute contains a list of tuples, with each tuple specifying the constraint's name, the SQL
expression to validate, and the error message to display if the constraint is violated.

.. example::
   The following example defines SQL constraints to enforce a positive product sales price and
   ensure that product category names remain unique.

   .. code-block:: python

      class Product(models.Model):
          _name = 'product'
          _description = "Storable Product"
          _sql_constraints = [
              ('positive_price', 'CHECK (price >= 0)', "The sales price must be positive.")
          ]

      class ProductCategory(models.Model):
          _name = 'product.category'
          _description = "Product Category"
          _sql_constraints = [
              ('unique_name', 'unique(name)', "A category name must be unique.")
          ]

.. seealso::
   - Reference documentation for the :attr:`_sql_constraints
     <odoo.models.BaseModel._sql_constraints>` class attribute
   - `Reference documentation for PostgreSQL's constraints
     <https://www.postgresql.org/docs/current/ddl-constraints.html>`_

.. exercise::
   #. Enforce that the selling price of a property and the amount of an offer are strictly positive.
   #. Ensure that property types and tag names are unique.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 4-8

      class RealEstateProperty(models.Model):
          _name = 'real.estate.property'
          _description = "Real Estate Property"
          _sql_constraints = [(
              'positive_price',
              'CHECK (selling_price > 0)',
              "The selling price must be strictly positive.",
          )]

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 4-6

      class RealEstateOffer(models.Model):
          _name = 'real.estate.offer'
          _description = "Real Estate Offer"
          _sql_constraints = [
              ('positive_amount', 'CHECK (amount > 0)', "The amount must be strictly positive.")
          ]

   .. code-block:: python
      :caption: `real_estate_property_type.py`
      :emphasize-lines: 4-6

      class RealEstatePropertyType(models.Model):
          _name = 'real.estate.property.type'
          _description = "Real Estate Property Type"
          _sql_constraints = [
              ('unique_name', 'unique(name)', "A property type name must be unique.")
          ]

   .. code-block:: python
      :caption: `real_estate_tag.py`
      :emphasize-lines: 4-6

      class RealEstateTag(models.Model):
          _name = 'real.estate.tag'
          _description = "Real Estate Tag"
          _sql_constraints = [
              ('unique_name', 'unique(name)', "A property tag name must be unique.")
          ]

.. _tutorials/server_framework_101/constraint_methods:

Constraint methods
------------------

Constraint methods are record-level rules implemented through Python methods defined on the model.
Unlike SQL constraints, they allow for flexible and context-aware validations based on business
logic. However, they come with a higher performance cost compared to SQL constraints, as they are
evaluated server-side on recordsets. Use cases include ensuring that certain fields align with
specific conditions or that multiple fields work together in a valid combination.

Constraint methods are defined in the model as methods decorated with :code:`@api.constrains()`,
which specifies the fields that trigger the validation when they are altered. Upon activation, they
perform custom validation and raise blocking validation errors if the constraint is violated.

.. example::
   The following example shows how a constraint method can be defined to ensure that the price of a
   product is higher than the minimum price of its category.

   .. code-block:: python

      from odoo import _, api, fields, models
      from odoo.exceptions import UserError, ValidationError


      class ProductCategory(models.Model):
         _name = 'product.category'

         min_price = fields.Float(string="Minimum Sales Price", required=True)


      class Product(models.Model):
         _name = 'product.product'

         @api.constrains('price', 'category_id')
         def _check_price_is_higher_than_category_min_price(self):
             for product in self:
                 if product.price < product.category_id.min_price:
                     raise ValidationError(
                         _("The price must be higher than %s.", product.category_id.min_price)
                     )

.. seealso::
   - Reference documentation for the :meth:`@api.constrains <odoo.api.constrains()>` decorator
   - Reference documentation for the :class:`ValidationError <odoo.exceptions.ValidationError>`
     exception

.. exercise::
   #. Ensure that a property's availability date is no more than one year from today.
   #. Ensure that a buyer's new offer for a property has a higher amount than their previous offers
      for the same property.
   #. Ensure that only one offer can be accepted for a property at a time.

   .. tip::
      - Use the :meth:`filtered <odoo.models.Model.filtered>` method to filter records of a
        recordset based on a predicate.
      - Recordsets can be counted using the `len` function.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 2,9-13

      from odoo import _, api, fields, models
      from odoo.exceptions import UserError, ValidationError
      from odoo.tools import date_utils


      class RealEstateProperty(models.Model):
          [...]

          @api.constrains('availability_date')
          def _check_availability_date_under_1_year(self):
              for property in self.filtered('availability_date'):
                  if property.availability_date > fields.Date.today() + date_utils.relativedelta(years=1):
                      raise ValidationError(_("The availability date must be in less than one year."))

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1-2,9-22

      from odoo import _, api, fields, models
      from odoo.exceptions import ValidationError
      from odoo.tools import date_utils


      class RealEstateOffer(models.Model):
          [...]

          @api.constrains('amount')
          def _check_amount_higher_than_previous_offers(self):
              for offer in self:
                  if offer.amount < max(offer.property_id.offer_ids.mapped('amount')):
                      raise ValidationError(_(
                          "The amount of the new offer must be higher than the amount of the previous "
                          "offers."
                      ))

          @api.constrains('state')
          def _check_state_is_accepted_for_only_one_offer(self):
              for offer in self.filtered(lambda o: o.state == 'accepted'):
                  if len(offer.property_id.offer_ids.filtered(lambda o: o.state == 'accepted')) > 1:
                      raise ValidationError(_("Only one offer can be accepted for a property."))

.. _tutorials/server_framework_101/defaults:

Set default field values
========================

When creating new records, pre-filling certain fields with default values can simplify data entry
and reduces the likelihood of errors. Defaults are particularly useful when values are derived from
the system or context, such as the current date, time, or logged-in user.

Fields can be assigned a default value by including the `default` argument in their declaration.
This argument can be set to a static value or dynamically generated using a callable function, such
as a model method or a lambda function. In both cases, the `self` argument provides access to the
environment but does not represent the current record, as no record exists yet during the creation
process.

.. todo: real.estate.offer.amount::default -> property.selling_price
.. todo: salesperson_id = fields.Many2one(default=lambda self: self.env.user)
.. todo: availability_date = fields.Date(default=lambda self: date_utils.add(fields.Date.today(), months=2))
.. todo: real.estate.tag.color -> default=_default_color ;  def _default_color(self): return random.randint(1, 11)  (check if lambda works)
.. todo: copy=False on some fields

.. _tutorials/server_framework_101/action_buttons:

Trigger business workflows
==========================

**Action buttons** allow users to trigger specific workflows directly from the user interface. These
buttons can be of type **action**, defined in XML, or **object**, implemented in the model.
Together, these types of buttons facilitate the integration of user interactions with business
logic.

.. todo: note: mention that the method is public so it can be called directly by the client.
   always return something in public methods as they are part of the :ref:external API and can be called through XML-RPC

.. _tutorials/server_framework_101/crud_methods:

CRUD methods
------------

tmp

.. todo: def create of offer -> write state of the property to offer received
.. todo: def unlink: _unlink_if_state_is_valid (new or cancelled)

.. _tutorials/server_framework_101/action_type_actions:

XML-defined actions
-------------------

Action-type buttons link to actions defined in XML and are typically used to display specific views
or trigger server actions. These buttons allow developers to link workflows to the UI without
writing Python code, making them ideal for simple, preconfigured tasks.

We already saw :ref:`how to link XML-defined window actions to menu items
<tutorials/server_framework_101/define_window_actions>`. To link a button to an XML-defined action,
a `button` element must be added to the view, with its `type` attribute set to `action`. The `name`
attribute should reference the XML ID of the action to execute.

.. exercise::
   .. tip::
      Rely on the reference documentation for :ref:`action buttons
      <reference/view_architectures/form/button>` and :ref:`headers
      <reference/view_architectures/form/header>` in form views.

.. todo: "view offers" statbutton with count + remove notebook page of offers

.. _tutorials/server_framework_101/object_type_actions:

Model-defined actions
---------------------

Object-type buttons link to model methods that execute custom business logic. These methods enable
more complex workflows, such as processing the current records, configuring actions depending on
these records, or integrating with external systems.

To link a button to a model-defined action, its `type` attribute must be set to `object`, and its
`name` attribute must be set to the name of the model method to call when the button is clicked. The
method receives the current recordset through `self` and should return a dictionary acting as an
action descriptor.

.. todo: accept/refuse offer buttons -> auto refuse others when accepting (write)
.. todo: multi-checkbox refuse offers in bulk
.. todo: "assign myself as salesperson" action

----

.. todo: add incentive for chapter 6
