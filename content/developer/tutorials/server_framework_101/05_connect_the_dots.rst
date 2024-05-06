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
   In the following example, the computed `margin`, `is_profitable` and `breadcrumb` fields are
   added to the `product` model.

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
   - :ref:`Reference documentation on computed fields <reference/fields/compute>`
   - :ref:`Reference documentation on recordsets <reference/orm/recordsets>`
   - Reference documentation on the :meth:`@api.depends() <odoo.api.depends>` decorator
   - :ref:`Coding guidelines on naming and ordering the members of model classes
     <contributing/coding_guidelines/model_members>`

Our real estate models could benefit from several computed fields to automate common calculations.
Let's implement them.

.. exercise::
   Add the following fields to the corresponding models and relevant views:

   - :guilabel:`Total Area` (`real.estate.property`): The sum of the floor and garden areas.
   - :guilabel:`Best Offer` (`real.estate.property`): The maximum amount of all offers.
   - :guilabel:`Expiry Date` (`real.estate.offer`): The start date offset by the validity period.

   .. tip::
      - Use the :meth:`mapped <odoo.models.Model.mapped>` model method to extract a recordset's
        field values into a list.
      - Import the `odoo.tools.date_utils` package to simplify operations on `Date` fields.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1,9,14,17-28

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
      :emphasize-lines: 1-2,10,13-16

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
   In the following example, an inverse method is added to the `margin` field.

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
   Make the :guilabel:`Expiry Date` field editable on real estate offers.

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
   In the following example, the `margin` field is stored in the database.

   .. code-block:: python

      margin = fields.Float(
          string="Profit Margin", compute='_compute_margin', inverse='_inverse_margin', store=True
      )

To make our real estate app more efficient and scalable, we can store certain computed fields in the
database. Let’s store one for now and see how it translates into the database schema.

.. exercise::
   #. Store the :guilabel:`Total Area` field in the database.
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
   In the following example, a search method is added to allow searching on the `is_profitable`
   field.

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

   - :guilabel:`Stalled`: The property is past its availability date.
   - :guilabel:`Priority`: The property has an offer that expires in less than two days.

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
   In the following example, the related `category_name` field is derived from the `category_id`
   field.

   .. code-block:: python

      category_name = fields.Char(string="Category Name", related='category_id.name')

.. seealso::
   :ref:`Reference documentation on related fields <reference/fields/related>`

In :doc:`04_relational_fields`, we introduced several relational fields. Retrieving information from
their related models often requires additional steps from the user, but we can use related fields to
simplify this process.

.. exercise::
   #. Use a related field to display the phone number of buyers in the offer list view.
   #. Use a related field to display the street of properties in form view. Allow editing the field
      and searching by street without implementing a search method.

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
      street = fields.Char(string="Street", related='address_id.street', readonly=False, store=True)

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
      - The `search` environment method can be used to query a model for records matching a given
        search domain.
      - In onchanges methods, the `id` attribute cannot be used to directly access the record's ID.
      - Blocking user errors are raised as exceptions.

.. seealso::
   - Reference documentation on the :meth:`@api.onchange() <odoo.api.onchange>` decorator
   - :doc:`How-to guide on translations </developer/howtos/translations>`
   - Reference documentation on the :class:`UserError <odoo.exceptions.UserError>` exception
   - :ref:`Reference documentation on the environment object <reference/orm/environment>`
   - Reference documentation on the :meth:`search <odoo.models.Model.search>` method

In our real estate app, data entry could be more intuitive and efficient. Let's use onchange methods
to automate updates and guide users as they edit data.

.. exercise::
   #. Set the garden area to zero if :guilabel:`Garden` is unchecked.
   #. Set :guilabel:`Garden` to checked if the garden area is set.
   #. Display a non-blocking warning if the garden area is set to zero and :guilabel:`Garden` is
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
   - Reference documentation on the :attr:`_sql_constraints
     <odoo.models.BaseModel._sql_constraints>` class attribute
   - `Reference documentation on PostgreSQL's constraints
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
   - Reference documentation on the :meth:`@api.constrains <odoo.api.constrains()>` decorator
   - Reference documentation on the :class:`ValidationError <odoo.exceptions.ValidationError>`
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
                  same_buyer_offers = offer.property_id.offer_ids.filtered(
                      lambda o: o.buyer_id == offer.buyer_id
                  )
                  if offer.amount < max(same_buyer_offers.mapped('amount')):
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
and reduce the likelihood of errors. Defaults are particularly useful when values are derived from
the system or context, such as the current date, time, or logged-in user.

Fields can be assigned a default value by including the `default` argument in their declaration.
This argument can be set to a static value or dynamically generated using a callable function, such
as a model method reference or a lambda function. In both cases, the `self` argument provides access
to the environment but does not represent the current record, as no record exists yet during the
creation process.

.. example::
   In the following example, a default value is assigned to the `price` and `category_id` fields.

   .. code-block:: python

      price = fields.Float(string="Sales Price", required=True, default=100)
      category_id = fields.Many2one(
          string="Category",
          comodel_name='product.category',
          ondelete='restrict',
          required=True,
          default=lambda self: self.env.ref('product.category_apparel'),
      )

   .. note::
      The `ref` environment method can be used to retrieve a record by its XML ID, similar to how
      it's done in data files.

.. seealso::
   Reference documentation on the :meth:`ref <odoo.api.Environment.ref>` method.

To make our real estate app more user-friendly, we can help with data entry by pre-filling key
fields with default values.

.. exercise::
   #. Set the default date of offers to today.
   #. Set the current user as the default salesperson for new properties.
   #. Set the default availability date of properties to two months from today.
   #. Assign a random default color to property tags.

   .. tip::
      - Ensure you pass callable function references as default values, and not the result of
        function calls, to avoid setting fixed defaults.
      - The current user can be accessed through the `user` environment property.
      - Color codes range from 1 to 11.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1

      date = fields.Date(string="Date", required=True, default=fields.Date.today)

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1-4,6-8

      availability_date = fields.Date(
          string="Availability Date",
          default=lambda self: date_utils.add(fields.Date.today(), months=2)
      )
      [...]
      salesperson_id = fields.Many2one(
          string="Salesperson", comodel_name='res.users', default=lambda self: self.env.user
      )

   .. code-block:: python
      :caption: `real_estate_tag.py`
      :emphasize-lines: 1,9-10,13

      import random

      from odoo import fields, models


      class RealEstateTag(models.Model):
          [...]

          def _default_color(self):
              return random.randint(1, 11)

          name = fields.Char(string="Label", required=True)
          color = fields.Integer(string="Color", default=_default_color)

.. _tutorials/server_framework_101/business_workflows:

Trigger business workflows
==========================

.. _tutorials/server_framework_101/crud_methods:

CRUD methods
------------

CRUD :dfn:`Create, Read, Update, Delete` operations are the foundation of a model's business logic.
They define how data is stored, retrieved, and modified.

In Odoo, these operations are handled through predefined model methods, which can be overridden to
implement additional business logic:

- `create`: Called on a model class (`env['model_name']`) with a dictionary of field values (or a
  list of dictionaries) as an argument. It returns the newly created record(s).
- `write`: Called on an existing recordset with a dictionary of field values to update all records
  in the set.
- `unlink`: Called on a recordset to delete the records permanently.

Unlike the other CRUD operations, reading data does not require a method call; record fields can be
accessed directly using :code:`record.field`.

.. example::
   In the following example, a product is automatically archived if its category is inactive.

   .. code-block:: python

      class Product(models.Model):
          _name = 'product'

          active = fields.Boolean(default=True)

          @api.model_create_multi
          def create(self, vals_list):
              for vals in vals_list:
                  if category_id := vals.get('category_id'):  # A category is specified in the values.
                      category = self.env['product.category'].browse(category_id).exists()
                      if category and not category.active:  # The category exists and is archived.
                          vals['active'] = False  # Create the product in the inactive state.
              return super().create(vals_list)

          def write(self, vals):
              if new_category_id := vals.get('category_id'):  # The category of the product is updated.
                  new_category = self.env['product.category'].browse(new_category_id).exists()
                  if new_category and not new_category.active:  # The category exists and is archived.
                      vals['active'] = False  # Archive the product.
              return super().write(vals)

      class ProductCategory(models.Model):
          _name = 'product.category'

          active = fields.Boolean(default=True)

          def write(self, vals):
              if self.active and vals.get('active') is False:  # The category is being archived.
                  self.product_ids.active = False  # Archive all products of the category.
              return super().write(vals)

   .. note::
      - Both the `create` and the `write` methods of `product` are overridden to ensure that the
        behavior is enforced consistently. The `write` method override is necessary because it is
        not called during record creation.
      - The `create` method must support batch processing, which is why it is decorated with
        :code:`api.model_create_multi` and processes a list of dictionaries (`vals_list`).
      - The `browse` model method can be used to retrieve a record by its ID. Not to be confused
        with the `ref` method.
      - The `browse` method always returns a recordset, even if no record exists. Therefore,
        chaining `exists` ensures that only existing records are considered before reading field
        values.
      - A field can be updated directly on a recordset with :code:`recordset.field = value`, which
        is equivalent to calling :code:`recordset.write({'field': value})`.

.. seealso::
   - Reference documentation on the :meth:`@api.model_create_multi <odoo.api.model_create_multi>`
     decorator.
   - Reference documentation on the :meth:`create <odoo.models.Model.create>` method.
   - Reference documentation on the :meth:`write <odoo.models.Model.write>` method.
   - Reference documentation on the :meth:`unlink <odoo.models.Model.unlink>` method.
   - Reference documentation on the :meth:`browse <odoo.models.Model.browse>` method.
   - Reference documentation on the :meth:`exists <odoo.models.Model.exists>` method.

.. exercise::
   #. Move a property to the :guilabel:`Offer Received` state when its first offer is received.
   #. Move a property back to the :guilabel:`New` state when all its offers are deleted.
   #. Make the :guilabel:`Address` field optional and automatically assign an address when creating
      a new property.
   #. If no address is set, automatically assign one when the street is updated.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 3-18

      [...]

      @api.model_create_multi
      def create(self, vals_list):
          offers = super().create(vals_list)
          for offer in offers:
              if offer.property_id.state == 'new':
                  offer.property_id.state = 'offer_received'
          return offers

      def unlink(self):
          for offer in self:
              property_offers = offer.property_id.offer_ids
              if (
                  offer.property_id.state in ('offer_received', 'under_option')
                  and not (property_offers - self)  # All the property's offers are being deleted.
              ):
                  offer.property_id.state = 'new'
          return super().unlink()

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 1,4-26

      address_id = fields.Many2one(string="Address", comodel_name='res.partner')
      [...]

      @api.model_create_multi
      def create(self, vals_list):
          for vals in vals_list:
              if not vals.get('address_id'):  # No address is provided at creation time.
                  # Create and assign a new one based on the property name.
                  address = self.env['res.partner'].create({
                      'name': vals.get('name'),
                  })
                  vals['address_id'] = address.id
          return super().create(vals_list)

      def write(self, vals):
          res = super().write(vals)
          if vals.get('street'):  # The street has been updated.
              for property in self:
                  if not property.address_id:  # The property has no address record.
                      # Create and assign a new one based on the property name and the street.
                      address = self.env['res.partner'].create({
                          'name': property.name,
                          'street': vals['street'],
                      })
                      property.address_id = address.id
          return res

.. _tutorials/server_framework_101/xml_actions:

XML actions
-----------

**Action buttons** allow users to trigger workflows directly from the user interface. The simplest
type of action button is **action**. These buttons are linked to actions defined in XML and are
typically used to open specific views or trigger server actions. These buttons allow developers to
link workflows to the UI without needing to write Python code, making them ideal for simple,
preconfigured tasks.

We have already seen how to :ref:`link menu items to XML-defined window actions
<tutorials/server_framework_101/define_window_actions>`. To link a **button** to an XML-defined
action, add a `button` element to the view, with its `type` attribute set to `action`. Use the
`name` attribute to reference the XML ID of the action to execute, following the format
`%(XML_ID)d`.

.. example::
   In the following example, a button is added to the product form view to display all other
   products in the same category.

   .. code-block:: xml

      <record id="view_similar_products_action" model="ir.actions.act_window">
          <field name="name">Products</field>
          <field name="res_model">product</field>
          <field name="domain">
              [("id", "!=", active_id), ("category_id", "=", context.get('current_category_id'))]
          </field>
          <field name="view_mode">list,form</field>
      </record>

      <record id="product_form" model="ir.ui.view">
          <form>
              <sheet>
                  <div name="button_box">
                      <button
                          string="Similar Products"
                          type="action"
                          name="product.view_similar_products_action"
                          context="{
                              'current_category_id': category_id,
                              'create': False,
                              'edit': False,
                          }"
                      />
                  </div>
              </sheet>
          </form>
      </record>

   .. note::
      - The button is placed at the top of the form view by using a button container (`button_box`).
      - The `context` attribute is used to:

        - Pass the current category ID to the action which filters out products from other
          categories.
        - Prevent users from creating or editing products when browsing them through the button.

.. seealso::
   - Reference documentation on :ref:`button containers
     <reference/view_architectures/form/button_container>`.
   - Reference documentation on :ref:`environment variables for Python expressions in views
     <reference/view_architectures/python_expression>`.

.. exercise::
   Replace the :guilabel:`Offers` notebook page in the property form view with a **stat button**.
   This button should:

   - Be placed at the top of the property form view.
   - Display the total number of offers for the property.
   - Use a relevant icon.
   - Allow users to browse offers in list and form views.

   .. tip::
      - Refer to the documentation on :ref:`action buttons
        <reference/view_architectures/form/button>` in form views.
      - Find icon codes (`fa-<something>`) in the `Font Awesome v4 catalog
        <https://fontawesome.com/v4/icons/>`_.
      - Ensure your count computations :ref:`remain efficient as the number of records to process
        grow <performance/good_practices/batch>`.
      - Use the `default_<field>` context key to set default values when creating new records
        through that button.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 4,7-14

      offer_ids = fields.One2many(
          string="Offers", comodel_name='real.estate.offer', inverse_name='property_id'
      )
      offer_count = fields.Integer(string="Offer Count", compute='_compute_offer_count')
      [...]

      @api.depends('offer_ids')
      def _compute_offer_count(self):
          offer_data = self.env['real.estate.offer']._read_group(
              [('property_id', 'in', self.ids)], groupby=['property_id'], aggregates=['__count'],
          )
          property_data = {property.id: count for property, count in offer_data}
          for property in self:
              property.offer_count = property_data.get(property.id, 0)

   .. code-block:: xml
      :caption: `real_estate_offer_views.xml`
      :emphasize-lines: 1-10

      <record id="real_estate.view_offers_action" model="ir.actions.act_window">
          <field name="name">Offers</field>
          <field name="res_model">real.estate.offer</field>
          <field name="view_mode">list,form</field>
          <field name="help" type="html">
              <p class="o_view_nocontent_smiling_face">
                  Create a new offer.
              </p>
          </field>
      </record>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 1

      'views/real_estate_property_views.xml',  # Depends on `real_estate_offer_views.xml`.

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 4-14

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <sheet>
                  <div name="button_box">
                      <button
                          string="Offers"
                          icon="fa-handshake-o"
                          type="action"
                          name="real_estate.view_offers_action"
                          context="{'default_property_id': id}"
                      >
                          <field string="Offers" name="offer_count" widget="statinfo"/>
                      </button>
                  </div>
                  [...]
              </sheet>
          [...]
      </record>

.. _tutorials/server_framework_101/model_actions:

Model actions
-------------

Another, more versatile type of action button is **object**. These buttons are linked to model
methods that execute custom business logic. These methods enable more complex workflows, such as
processing the current records, configuring client actions depending on these records, or
integrating with external systems.

To link a button to a model-defined action, set its `type` attribute to `object`, and use the `name`
attribute to specify the model method that should be called when the button is clicked. The method
receives the current recordset through `self` and should return a value indicating the result of the
action.

.. example::
   In the following example, a button is added to the product category form view to ensure that all
   products in the category have a positive margin.

   .. code-block:: xml

      <button string="Ensure Positive Margins" type="object" name="action_ensure_positive_margins"/>

   .. code-block:: python

      def action_ensure_positive_margins(self):
          self.product_ids.filtered(lambda p: p.margin <= 0).margin = 0
          return True

   .. note::
      Action methods should be public :dfn:`not prefixed with an underscore` to make them callable
      by the client. Since these methods are automatically exposed in the :doc:`external API
      <../../reference/external_api>`, they should always return a meaningful value. In case of
      doubt, return `True`.

.. exercise::
   #. Add a button next to the :guilabel:`Salesperson` field of properties to assign the current
      user as the salesperson.
   #. Add two buttons for each offer in the offer list view.

      - :guilabel:`Accept`: Accepts the offer, which changes the property state to :guilabel:`Under
        Option`, and automatically refuses other offers.
      - :guilabel:`Refuse`: Rejects only that offer.

   #. Add a button in the header of the property form view to remove the property listing. The
      button should:

      #. Display a confirmation warning.
      #. Refuse all offers.
      #. Set the property to a new :guilabel:`Cancelled` state.
      #. Archive the property.

   .. tip::
      - Refer to the documentation on :ref:`fields <reference/view_architectures/form/field>`,
        :ref:`labels <reference/view_architectures/form/label>`, and :ref:`headers
        <reference/view_architectures/form/header>` in form views, as well as the documentation on
        :ref:`buttons <reference/view_architectures/list/button>` in list views.
      - Use the `o_row` class to fit multiple elements on one line.
      - Use the `btn-success` and `btn-danger` classes to style your buttons.

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `real_estate_property_views.xml`
      :emphasize-lines: 4-9,18-26

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <header>
                  <button
                      string="Cancel Listing"
                      type="object"
                      name="action_cancel_listing"
                      confirm="Are you sure you want to cancel this property listing?"
                  />
                  <field name="state" widget="statusbar" options="{'clickable': True}"/>
              </header>
          [...]
              <page string="Other Info">
                  <group>
                      <group>
                          <field name="address_id"/>
                          <field name="seller_id"/>
                          <label for="salesperson_id"/>
                          <div class="o_row">
                              <field name="salesperson_id" class="oe_inline"/>
                              <button
                                  string="Assign Myself"
                                  type="object"
                                  name="action_assign_user_as_salesperson"
                              />
                          </div>
                      </group>
                  </group>
              </page>
          [...]
      </record>

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 8,15-24

      state = fields.Selection(
          string="State",
          selection=[
              ('new', "New"),
              ('offer_received', "Offer Received"),
              ('under_option', "Under Option"),
              ('sold', "Sold"),
              ('cancelled', "Cancelled"),
          ],
          required=True,
          default='new',
      )
      [...]

      def action_cancel_listing(self):
          for property in self:
              property.offer_ids.action_refuse()
              property.write({
                  'state': 'cancelled',
                  'active': False,
              })
          return True

      def action_assign_user_as_salesperson(self):
          self.salesperson_id = self.env.user.id
          return True

   .. code-block:: xml
      :caption: `real_estate_offer_views.xml`
      :emphasize-lines: 4,11-12

      <record id="real_estate.view_offers_action" model="ir.actions.act_window">
          <field name="name">Offers</field>
          <field name="res_model">real.estate.offer</field>
          <field name="domain">[("property_id", "=", active_id)]</field>
          [...]
      </record>

      <record id="real_estate.offer_list" model="ir.ui.view">
          [...]
              <field name="state"/>
              <button string="Accept" type="object" name="action_accept" class="btn-success"/>
              <button string="Refuse" type="object" name="action_refuse" class="btn-danger"/>
          [...]
      </record>

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1-7

      def action_accept(self):
          self.state = 'accepted'
          self.property_id.state = 'under_option'
          (self.property_id.offer_ids - self).state = 'refused'
          return True

      def action_refuse(self):
          self.state = 'refused'
          return True


.. _tutorials/server_framework_101/scheduled_actions:

Scheduled actions
-----------------

**Scheduled actions**, also known as cron jobs, are automated tasks that run periodically at
predefined intervals. They enable the automation of recurring operations and allow to offload
compute-intensive tasks to dedicated workers. Scheduled actions are typically used for background
operations such as data cleanup, third-party synchronization, report generation, and other tasks
that don't require immediate user interaction.

In Odoo, scheduled actions are implemented through the `ir.cron` model. When triggered, they execute
arbitrary code on a specified model, most commonly by calling a model method that implements the
desired business logic. Creating a scheduled action is simply a matter of adding a record to
`ir.cron`, after which a cron worker will execute it at the specified intervals.

.. example::
   The following example implements a scheduled action that automatically reassigns inactive
   products or products without sellers to the default seller.

   .. code-block:: xml

      <record id="reassign_inactive_products_cron" model="ir.cron">
          <field name="name">Reassign Inactive Products</field>
          <field name="model_id" ref="model_product"/>
          <field name="code">model._reassign_inactive_products()</field>
          <field name="interval_number">1</field>
          <field name="interval_type">weeks</field>
      </record>

   .. code-block:: python

    from odoo import api, models
    from odoo.fields import Command


    class Product(models.Model):

        @api.model
        def _reassign_inactive_products(self):
            # Clear sellers from underperfoming products.
            underperforming_products = self.search([('sales_count', '<', 10)])
            underperforming_products.write({
                'seller_ids': [Command.clear()],  # Remove all sellers.
            })

            # Assign the default seller to products without sellers.
            products_without_sellers = self.search([('seller_ids', '=', False)])
            if products_without_sellers:
                default_seller = self.env.ref('product.default_seller')
                products_without_sellers.write({
                    'seller_ids': [Command.set(default_seller.ids)]  # Replace with default seller.
                })

   .. note::
      - The cron is scheduled to run weekly thanks to `interval_number=1` and
        `interval_type='weeks'`.
      - The `@api.model` decorator indicates the method operates on the model and records in `self`
        are not relevant. This serves both as documentation and enables RPC calls without requiring
        record IDs.
      - Field commands are required for `One2many` and `Many2many` fields since they cannot be
        assigned values directly.
      - `Command.set` takes a list of IDs as argument, which the `ids` recordset attribute
        conveniently provides.

.. seealso::
   - Reference documentation on :ref:`scheduled actions <reference/actions/cron>`.
   - Reference documentation on the :meth:`@api.model <odoo.api.model>` decorator.
   - Reference documentation on :ref:`field commands <reference/fields/command>`.

.. exercise::
   #. Create a scheduled action that automatically refuses offers that have expired.
   #. Create a scheduled action that automatically applies a 10% discount and adds the "Price
      Reduced" tag to inactive properties. A property is considered inactive if it didn't receive
      any offers 2 months after it was listed.

   .. tip::
      To test your crons manually, activate the :doc:`developer mode
      </applications/general/developer_mode>`, then go to :menuselection:`Settings --> Technical
      --> Scheduled Actions`, and click :guilabel:`Run Manually` in form view.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 3

      'data': [
          # Model data
          'data/ir_cron_data.xml',
          [...]
      ],

   .. code-block:: xml
      :caption: `ir_cron_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.discount_inactive_properties_cron" model="ir.cron">
              <field name="name">Real Estate: Discount Inactive Properties</field>
              <field name="model_id" ref="model_real_estate_property"/>
              <field name="code">model._discount_inactive_properties()</field>
              <field name="interval_number">1</field>
              <field name="interval_type">days</field>
          </record>

          <record id="real_estate.refuse_expired_offers_cron" model="ir.cron">
              <field name="name">Real Estate: Refuse Expired Offers</field>
              <field name="model_id" ref="model_real_estate_offer"/>
              <field name="code">model._refuse_expired_offers()</field>
              <field name="interval_number">1</field>
              <field name="interval_type">days</field>
          </record>

      </odoo>

   .. code-block:: python
      :caption: `real_estate_offer.py`
      :emphasize-lines: 1-4

      @api.model
      def _refuse_expired_offers(self):
          expired_offers = self.search([('expiry_date', '<', fields.Date.today())])
          expired_offers.action_refuse()

   .. code-block:: xml
      :caption: `real_estate_tag_data.xml`
      :emphasize-lines: 1-4

      <record id="real_estate.tag_price_reduced" model="real.estate.tag">
          <field name="name">Price Reduced</field>
          <field name="color">1</field>
      </record>

   .. code-block:: python
      :caption: `real_estate_property.py`
      :emphasize-lines: 3,10-24

      from odoo import _, api, fields, models
      from odoo.exceptions import UserError, ValidationError
      from odoo.fields import Command
      from odoo.tools import date_utils


      class RealEstateProperty(models.Model):
          [...]

          @api.model
          def _discount_inactive_properties(self):
              two_months_ago = fields.Date.today() - date_utils.relativedelta(months=2)
              price_reduced_tag = self.env.ref('real_estate.tag_price_reduced')
              inactive_properties = self.search([
                  ('create_date', '<', two_months_ago),
                  ('active', '=', True),
                  ('state', '=', 'new'),
                  ('tag_ids', 'not in', price_reduced_tag.ids),  # Only discount once.
              ])
              for property in inactive_properties:
                  property.write({
                      'selling_price': property.selling_price * 0.9,
                      'tag_ids': [Command.link(price_reduced_tag.id)],
                  })

----

.. todo: add incentive for chapter 6
