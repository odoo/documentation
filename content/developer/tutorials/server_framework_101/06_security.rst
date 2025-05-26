===========================
Chapter 6: Tighten security
===========================

Odoo is a data-driven application, making security a key concern. Protecting data from unauthorized
access is essential to prevent leakage of sensitive information and unauthorized modifications. In
this chapter, we'll explore the security features available in the server framework, focusing on
user groups, access rights, and record rules.

.. _tutorials/server_framework_101/user_groups:

Organize users in groups
========================

In any business application, users are organized into **user groups** based on their roles or
responsibilities. Rather than managing permissions individually for each user, administrators assign
users to appropriate groups, which define access rights that are then inherited by all members. This
approach makes security management much more maintainable, reducing administrative overhead and
minimizing the risk of errors, especially as the number of users grows.

In Odoo, groups are records of the `res.groups` model. Users are assigned to groups through the
`groups_id` many-to-many field defined on the `res.users` model, thus allowing a user to belong to
multiple groups at once.

.. example::
   In the example below, we create two groups for our fictional product management module and assign
   the default admin user to one of them.

   .. code-block:: xml

      <record id="product.sales_representative_group" model="res.groups">
          <field name="name">Sales Representative</field>
      </record>

      <record id="product.product_manager_group" model="res.groups">
          <field name="name">Product Manager</field>
      </record>

      <record id="base.user_admin" model="res.users">
          <field name="groups_id" eval="[
              Command.link(ref('product.sales_representative_group')),
              Command.link(ref('product.product_manager_group')),
          ]"/>
      </record>

   .. note::
      - By convention, all security-related data files are placed inside the module's
        :file:`security` directory.
      - For convenience, we reuse the `base.user_admin` record to assign the default admin user to
        the `sales_representative_group`.
      - The `field` data operation accepts an `eval` attribute to evaluate Python expressions and
        assign the result to the field.
      - The `groups_id` field is set using the `Command.link` method, like in business code.

.. seealso::
   - Reference documentation on :ref:`user groups <reference/security/groups>`.
   - Reference documentation on :doc:`data files <../../reference/backend/data>`.

Now that we understand the purpose of groups, let's organize the users of our real estate app into
meaningful roles.

.. exercise::
   #. Define a new group for real estate agents and one for managers. Belonging to the manager group
      implies also belonging to the agent group.
   #. Assign the default admin user to the manager group.
   #. Define a new default user assigned to the agent and `base.group_user` groups.
   #. Go to :menuselection:`Settings --> Users & Companies --> Users`, activate the :doc:`developer
      mode </applications/general/developer_mode>`, and verify that the users are assigned to the
      correct groups.

   .. tip::
      Search for the definition of the `res.users` model in the `base
      <{GITHUB_PATH}/odoo/addons/base/>`_ module.

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `security/res_groups.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.agent_group" model="res.groups">
              <field name="name">Real Estate Agent</field>
          </record>

          <record id="real_estate.manager_group" model="res.groups">
              <field name="name">Real Estate Manager</field>
              <field name="implied_ids" eval="[Command.link(ref('real_estate.agent_group'))]"/>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `security/res_users.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="base.user_admin" model="res.users">
              <field name="groups_id" eval="[Command.link(ref('real_estate.manager_group'))]"/>
          </record>

          <record id="real_estate.agent_user" model="res.users">
              <field name="partner_id" ref="real_estate.bafien_carpink"/>
              <field name="login">bafien</field>
              <field name="password">carpink</field>
              <field
                  name="groups_id"
                  eval="[Command.set([ref('base.group_user'), ref('real_estate.agent_group')])]"
              />
          </record>

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 5-6

      'data': [
          [...]

          # Security
          'security/res_groups.xml',
          'security/res_users.xml',  # Depends on `res_partner_data.xml`, `res_groups.xml`.
          'security/ir.model.access.csv',

          [...]
      ],


.. _tutorials/server_framework_101/access_rights:

Grant model access
==================

**Access control lists** (ACLs) are an essential security mechanism that defines who can access
specific resources and what operations they're allowed to perform. ACLs help prevent unauthorized
data access and operations by explicitly defining access rights for different user and groups.

In Odoo, ACLs operate at the model level, controlling access to all records of a particular model
rather than individual records. Each ACL links a user group with a model and specifies which
:abbr:`CRUD (Create, Read, Update, Delete)` operations the group members can perform. Odoo follows a
default-deny approach: if no access right explicitly applies to a user for a particular model,
access is denied. When a user belongs to multiple groups with overlapping access rights, the
permissions are granted in an *additive* manner and the most permissive set of permissions is given.

ACLs are implemented as records of the `ir.model.access` model whose key fields include:

.. rst-class:: o-definition-list

`name` (required)
   A descriptive, human-readable name for the access right.
`model_id` (required)
   The model whose access the ACL controls.
`group_id`
   The user group receiving the permissions. If not specified, the ACL applies to all users.

.. example::
   In the following example, we define ACLs to allow all internal users to read and update the
   product catalog, and read categories, but only product managers can create or delete records.

   .. code-block:: csv

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      product_user,product.user,model_product,base.group_user,1,1,0,0
      product_manager,product.manager,model_product,product.product_manager_group,1,1,1,1
      product_category_user,product.category.user,model_product_category,base.group_user,1,0,0,0
      product_category_manager,product.category.manager,model_product_category,product.product_manager_group,1,1,1,1

   .. note::
      - Access rights are typically defined in CSV files named :file:`ir.model.access.csv` within
        the module's :file:`security` directory.
      - The last four columns represent boolean flags for the read, write, create, and delete
        permissions.
      - UI elements linked to a model for which the user does not have access are automatically
        hidden. This includes menu items, the :guilabel:`New` button in list views, the
        :guilabel:`Delete` button in form views, the :guilabel:`Create` and :guilabel:`Create and
        edit...` buttons in dropdowns, etc.

.. seealso::
   - Reference documentation on :ref:`access rights <reference/security/acl>`.
   - The :ref:`tutorials/server_framework_101/csv_data_files` section in which we defined the first
     access right for the `real.estate.property` model.

Now let's update our real estate app to specify who can access our property listings and what they
can do with them.

.. exercise::
   #. Prevent users who are not real estate agents to access the application and its records.
   #. Allow real estate agents to:

      - Read and update properties.
      - Read, update, create, and delete offers.
      - Read property types and tags.

   #. Allow only managers to read, update, create and delete all records of the application.

   .. tip::
      Try logging in as the agent and manager users to verify that they have the expected access
      rights.

.. spoiler:: Solution

   .. code-block:: csv
      :caption: `security/ir.model.access.csv`
      :emphasize-lines: 2-9

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      real_estate_offer_agent,real.estate.offer.agent,model_real_estate_offer,real_estate.agent_group,1,1,1,1
      real_estate_offer_manager,real.estate.offer.manager,model_real_estate_offer,real_estate.manager_group,1,1,1,1
      real_estate_property_agent,real.estate.property.agent,model_real_estate_property,real_estate.agent_group,1,1,0,0
      real_estate_property_manager,real.estate.property.manager,model_real_estate_property,real_estate.manager_group,1,1,1,1
      real_estate_property_type_agent,real.estate.property.type.agent,model_real_estate_property_type,real_estate.agent_group,1,0,0,0
      real_estate_property_type_manager,real.estate.property.type.manager,model_real_estate_property_type,real_estate.manager_group,1,1,1,1
      real_estate_tag_agent,real.estate.tag.agent,model_real_estate_tag,real_estate.agent_group,1,0,0,0
      real_estate_tag_manager,real.estate.tag.manager,model_real_estate_tag,real_estate.manager_group,1,1,1,1

.. _tutorials/server_framework_101/record_rules:

Restrict record access
======================

While :abbr:`ACLs (Access Control Lists)` control access at the model level, **record rules**
provide more granular security by filtering which specific records within a model a user can access.
This fine-grained approach enables complex business rules, such as "this group of users can access
all records, but this other group can only access their own records."

Unlike ACLs which follow a default-deny approach, record rules follow a default-allow principle.
This means that if no rule exists for a model and operation, all records are accessible to users who
have the appropriate model-level permissions.

Record rules are implemented as records of the `ir.rule` model and rely on search domains to filter
records. Its key fields include:

.. rst-class:: o-definition-list

`name`
   A descriptive, human-readable name for the rule.
`model_id` (required)
   The model to which the rule applies.
`domain_force`
   The search domain that filters which records are accessible.
`groups`
   The user groups to which the rule applies. If empty, the rule applies globally to all users.
`perm_read`, `perm_write`, `perm_create`, `perm_unlink`
   Whether the rule applies to the given operation.

Record rules come in two types, which combine differently depending on their scope:

- **Global rules** (no group specified): Apply to all users and are combined using **AND** logic
  (intersection). A record must satisfy *all* applicable global rules to be accessible. Each new
  global rule further restricts the accessible records.
- **Group rules** (specific to some user groups): Apply only to members of the specified groups and
  are combined using **OR** logic (union) within the same operation. A record is accessible if it
  matches *any* of the applicable group rules. Each new group rule expands the set of accessible
  records, but not beyond the bounds defined by global rules.

.. example::
   In the example below, we define record rules to control access to products based on their active
   and publication status.

   .. code-block:: xml

      <record id="product.product_active_rule" model="ir.rule">
          <field name="name">Product: Users can only access active products</field>
          <field name="model_id" ref="product.model_product"/>
          <field name="domain_force">[('active', '=', True)]</field>
      </record>

      <record id="product.product_published_rule" model="ir.rule">
          <field name="name">Product: Sales representatives can only access published products</field>
          <field name="model_id" ref="product.model_product"/>
          <field name="domain_force">[('is_published', '=', True)]</field>
          <field name="groups" eval="[Command.link(ref('product.sales_representative_group'))]"/>
          <field name="perm_write" eval="False"/>
      </record>

      <record id="product.product_manager_rule" model="ir.rule">
          <field name="name">Product: Managers can access all products</field>
          <field name="model_id" ref="product.model_product"/>
          <field name="domain_force">[(1, '=', 1)]</field>
          <field name="groups" eval="[Command.link(ref('product.product_manager_group'))]"/>
      </record>

   .. note::
      - Unlike ACLs, record rules are defined in XML files, due to their more complex field values.
      - The `product_active_rule` rule is not assigned to any group, making it a global rule. It
        prevents users from accessing inactive products.
      - The `product_published_rule` rule is assigned to the `sales_representative_group` group,
        making it a group rule. It allows sales representatives to access inactive products, but
        only if they are published.
      - As `perm_<operation>` flags default to `True` and only `perm_write` is set to `False` for
        `product_published_rule`, the rule leaves the write operation unaffected.
      - The domain of the `product_manager_rule` rule is always true, which overrides the previous
        rules. This rule allows managers to access all products, regardless of their active or
        published status.

.. seealso::
   Reference documentation on :ref:`record rules <reference/security/rules>`.

Our real estate app needs more granular control over property records. Let's define rules to tighten
access to property records.

.. exercise::
   - Ensure real estate agents can only update the properties assigned to them or not assigned to
     any agent. They should still be able to read all properties.
   - Allow real estate managers to access all property records, regardless of assignment.

   .. tip::
      Verify that the rules work as expected by logging in as the agent and manager users.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 4

      'data': [
          [...]
          'security/res_groups.xml',
          'security/ir_rule.xml',  # Depends on `res_groups.xml`.
          [...]
      ],

   .. code-block:: xml
      :caption: `security/ir_rule.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.property_assignment_rule" model="ir.rule">
              <field name="name">Real Estate: Agents can only update their assigned properties</field>
              <field name="model_id" ref="real_estate.model_real_estate_property"/>
              <field name="domain_force">['|', ('salesperson_id', '=', False), ('salesperson_id', '=', user.id)]</field>
              <field name="groups" eval="[Command.link(ref('real_estate.agent_group'))]"/>
              <field name="perm_read" eval="False"/>
          </record>

          <record id="real_estate.property_manager_rule" model="ir.rule">
              <field name="name">Real Estate: Managers can access all properties</field>
              <field name="model_id" ref="real_estate.model_real_estate_property"/>
              <field name="domain_force">[(1, '=', 1)]</field>
              <field name="groups" eval="[Command.link(ref('real_estate.manager_group'))]"/>
          </record>

      </odoo>

.. _tutorials/server_framework_101/multi_company:

Separate company data
=====================

In enterprise environments, organizations often need to manage multiple distinct entities within the
same system. This approach allows different branches, subsidiaries, franchises, or even completely
different companies to operate independently while sharing common resources and functionalities.

In Odoo, the **multi-company** feature enables managing multiple companies within a single database.
Each company can have its own configuration and data, while still allowing users to access data from
multiple companies. This is implemented through several key mechanisms:

- **Company field**: Adding a `company_id` many-to-one field to a model allows linking its records
  to a specific company (represented by the generic `res.company` model). Records can be:

  - **Company-specific**: When `company_id` has a value, making the record belong to one company.
  - **Company-shared**: When `company_id` is empty, making the record accessible across all
    companies.

- **Company-dependent fields**: The `company_dependent=True` attribute set on a field creates a
  separate value for each company. The values are stored in a JSON object in the database and the
  right value is automatically retrieved based on the current company.
- **Company context**: The `with_company(company)` model method returns a new recordset with the
  current company changed to `company` in the environment. This is useful when accessing data like
  company-dependent fields, allowing to retrieve values and trigger workflows from a specific
  company's perspective.
- **Context-aware dependencies**: The `@api.depends_context('company')` decorator ensures that
  computed fields are computed depending on the current company (`self.env.company`).
- **Company consistency checks**: The `check_company=True` attribute on a relational field ensures
  that the linked records either belong to the same company, or are shared records. The check can be
  made automatic by setting the `_check_company_auto=True` class attribute. Otherwise, the check
  must be implemented manually by calling the `_check_company` model method.
- **Company rules**: Record rules can be defined to restrict access to records based on the company
  they belong to. When their domain is evaluated, the `company_ids` variable contains the companies
  selected by the current user in the company switcher.

.. example::
   In the example below, we extend the product and product category models to support multi-company,
   and define record rules to ensure proper data isolation between companies.

   .. code-block:: python

      class Product(models.Model):
          _name = 'product'
          _check_company_auto = True

          company_id = fields.Many2one(string="Company", comodel_name='res.company')
          price = fields.Float(string="Sales Price", required=True, default=100)
          cost = fields.Float(string="Manufacturing Cost", company_dependent=True)
          margin = fields.Float(
              string="Profit Margin", compute='_compute_margin', inverse='_inverse_margin'
          )
          category_id = fields.Many2one(
              string="Category",
              comodel_name='product.category',
              ondelete='restrict',
              required=True,
              default=lambda self: self.env.ref('product.category_apparel'),
              check_company=True,
          )

          @api.depends('price', 'cost', 'company_id')
          @api.depends_context('company')
          def _compute_margin(self):
              for product in self:
                  product.margin = product.price - product.with_company(product.company_id).cost

      class ProductCategory(models.Model):
          _name = 'product.category'
          _check_company_auto = True

          company_id = fields.Many2one(
              string="Company",
              comodel_name='res.company',
              required=True,
              default=lambda self: self.env.company.id,
          )
          product_ids = fields.One2many(
              string="Products", comodel_name='product', inverse_name='category_id', check_company=True
          )

   .. code-block:: xml

      <record id="product.product_category_company_rule" model="ir.rule">
          <field name="name">Product: Access product categories in own companies only</field>
          <field name="model_id" ref="product.model_product_category"/>
          <field name="domain_force">[('company_id', 'parent_of', company_ids)]</field>
      </record>

      <record id="product.product_company_rule" model="ir.rule">
          <field name="name">Product: Access products in own companies only</field>
          <field name="model_id" ref="product.model_product"/>
          <field name="domain_force">['|', ('company_id', '=', False), ('company_id', 'parent_of', company_ids)]</field>
      </record>

   .. note::
      - A `company_id` field is added to the `product` and `product.category` models, allowing them
        to be company-specific.
      - The `company_id` field is optional on the `product` model, allowing products to be shared
        between companies. It is however required for the `product.category` model, making
        categories company-specific.
      - It's a good practice to provide a default value for the `company_id` field, as it eases the
        creation of new records, especially since the company can be hidden from view when the user
        doesn't have access to multiple companies.
      - The `cost` field is company-dependent, giving each company its own cost value for the same
        product.
      - The `_compute_margin` method is decorated with `@api.depends_context('company')` to trigger
        recomputation when switching companies. Although not strictly necessary in this case, it
        also uses `with_company` to ensure retrieving cost values from the correct company.
      - The `_check_company_auto=True` attribute is set on both models to ensure that relational
        fields with the `check_company=True` attribute are properly checked. This prevents linking a
        product to a category belonging to a different company.
      - Multi-company rules are usually global, as additional group rules could otherwise bypass
        them.
      - The rules use the `parent_of` operator to allow accessing records from branches :dfn:`child
        companies` of the current company.
      - The rule for products is relaxed to allow access to both company-specific records and shared
        records.

.. seealso::
   - Reference documentation on the :meth:`company_id <odoo.models.Model.company_id>` reserved
     field.
   - Reference documentation on the :meth:`with_company <odoo.models.Model.with_company>` method.
   - Reference documentation on the :meth:`@api.depends_context <odoo.api.depends_context>`
     decorator.
   - Reference documentation on the :meth:`company <odoo.api.Environment.company>` environment
     property.
   - The :ref:`reference/howtos/company` how-to guide.

Let's adapt our real estate app to support multiple agencies while keeping their data separate.

.. exercise::
   #. Create a second company and assign it to the admin user.
   #. In the company switcher, tick the checkbox of the new company to have access to both companies
      at once. Then, switch from one company to another by clicking on the company name.
   #. Add support for the multi-company feature to the real estate app:

      - Property and offer records should be company-specific.
      - Property types and tags should be either company-specific or shared between companies.

   #. Ensure cross-company consistency: It should not be possible to link a property to a type, tag,
      user, or partner that belongs to a different company.
   #. Prevent users from one company to access the properties, offers, types, and tags of another
      company.
   #. Add a new :guilabel:`Average Price` field to the property type model. It should compute the
      average price of all properties of that type that are currently accessible to the user.

   .. tip::
      - Reminder: The sources for generic models can be found in the
        `base <{GITHUB_PATH}/odoo/addons/base/>`_ module.
      - For some models, you might prefer linking the company to the parent model's company, through
        a related field, for example

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `data/res_company_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.second_company" model="res.company">
              <field name="name">YourSecondCompany</field>
              <field name="partner_id" ref="real_estate.second_company_address"/>
          </record>

      </odoo>

   .. code-block:: xml
      :caption: `data/res_partner_data.xml`
      :emphasize-lines: 7-9

          [...]

          <record id="real_estate.amyfromthevideos" model="res.partner">
              <field name="name">AmyFromTheVideos</field>
          </record>

          <record id="real_estate.second_company_address" model="res.partner">
              <field name="name">YourSecondCompany Address</field>
          </record>

      </odoo>

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 4

      'data': [
          [...]
          'data/res_partner_data.xml',
          'data/res_company_data.xml',  # Depends on `res_partner_data.xml`.
          [...]
      ],

   .. code-block:: xml
      :caption: `security/res_users.xml`
      :emphasize-lines: 5

      [...]

      <record id="base.user_admin" model="res.users">
          <field name="groups_id" eval="[Command.link(ref('real_estate.manager_group'))]"/>
          <field name="company_ids" eval="[Command.link(ref('real_estate.second_company'))]"/>
      </record>

      [...]

   .. code-block:: python
      :caption: `models/real_estate_property.py`
      :emphasize-lines: 2,10,13,14-17,22,25-31

      [...]
      _check_company_auto = True

      [...]
      type_id = fields.Many2one(
          string="Type",
          comodel_name='real.estate.property.type',
          ondelete='restrict',
          required=True,
          check_company=True,
      )
      [...]
      address_id = fields.Many2one(string="Address", comodel_name='res.partner', check_company=True)
      [...]
      seller_id = fields.Many2one(
          string="Seller", comodel_name='res.partner', required=True, check_company=True
      )
      salesperson_id = fields.Many2one(
          string="Salesperson",
          comodel_name='res.users',
          default=lambda self: self.env.user,
          check_company=True,
      )
      [...]
      tag_ids = fields.Many2many(string="Tags", comodel_name='real.estate.tag', check_company=True)
      company_id = fields.Many2one(
          string="Company",
          comodel_name='res.company',
          required=True,
          default=lambda self: self.env.company.id,
      )

   .. code-block:: xml
      :caption: `views/real_estate_property_views.xml`
      :emphasize-lines: 5

      <record id="real_estate.property_form" model="ir.ui.view">
          [...]
              <group string="Listing Information">
                  [...]
                  <field name="company_id"/>
                  <field name="active"/>
              </group>
          [...]
      </record>

   .. code-block:: python
      :caption: `models/real_estate_offer.py`
      :emphasize-lines: 1

      company_id = fields.Many2one(related='property_id.company_id')

   .. code-block:: python
      :caption: `models/real_estate_property_type.py`
      :emphasize-lines: 1,6,9-30

      from odoo import api, fields, models


      class RealEstatePropertyType(models.Model):
          [...]
          _check_company_auto = True

          name = fields.Char(string="Name", required=True)
          property_ids = fields.One2many(
              string="Properties",
              comodel_name='real.estate.property',
              inverse_name='type_id',
              check_company=True,
          )
          average_price = fields.Float(string="Average Price", compute='_compute_average_price')
          company_id = fields.Many2one(
              string="Company", comodel_name='res.company', default=lambda self: self.env.company.id
          )

          # In practice, this computation will not work in all cases. It is merely given as an exercise to
          # understand the concept of multi-company, but it should not be used as-is in production.
          @api.depends('property_ids.selling_price')
          @api.depends_context('company')
          def _compute_average_price(self):
              for type in self:
                  properties = type.property_ids.filtered(lambda p: p.company_id in self.env.companies)
                  if properties:
                      type.average_price = sum(properties.mapped('selling_price')) / len(properties)
                  else:
                      type.average_price = 0.0

   .. code-block:: xml
      :caption: `views/real_estate_property_type_views.xml`
      :emphasize-lines: 5-6

      <record id="real_estate.property_type_list" model="ir.ui.view">
          [...]
              <list editable="bottom">
                  <field name="name"/>
                  <field name="average_price"/>
                  <field name="company_id"/>
              </list>
          [...]
      </record>

   .. code-block:: python
      :caption: `models/real_estate_tag.py`
      :emphasize-lines: 2,5-10

      [...]
      _check_company_auto = True

      [...]
      property_ids = fields.Many2many(
          string="Properties", comodel_name='real.estate.property', check_company=True
      )
      company_id = fields.Many2one(
          string="Company", comodel_name='res.company', default=lambda self: self.env.company.id
      )

   .. code-block:: xml
      :caption: `views/real_estate_tag_views.xml`
      :emphasize-lines: 6

      <record id="real_estate.tag_list" model="ir.ui.view">
          [...]
              <list editable="bottom">
                  <field name="name"/>
                  <field name="color" widget="color_picker"/>
                  <field name="company_id"/>
              </list>
          [...]
      </record>

   .. code-block:: xml
      :caption: `security/ir_rule.xml`
      :emphasize-lines: 3-25

          [...]

          <record id="real_estate.property_company_rule" model="ir.rule">
              <field name="name">Real Estate: Access properties in own companies only</field>
              <field name="model_id" ref="real_estate.model_real_estate_property"/>
              <field name="domain_force">[('company_id', 'parent_of', company_ids)]</field>
          </record>

          <record id="real_estate.offer_company_rule" model="ir.rule">
              <field name="name">Real Estate: Access offers in own companies only</field>
              <field name="model_id" ref="real_estate.model_real_estate_offer"/>
              <field name="domain_force">[('company_id', 'parent_of', company_ids)]</field>
          </record>

          <record id="real_estate.property_type_company_rule" model="ir.rule">
              <field name="name">Real Estate: Access property types in own companies only</field>
              <field name="model_id" ref="real_estate.model_real_estate_property_type"/>
              <field name="domain_force">['|', ('company_id', '=', False), ('company_id', 'parent_of', company_ids)]</field>
          </record>

          <record id="real_estate.tag_company_rule" model="ir.rule">
              <field name="name">Real Estate: Access tags in own companies only</field>
              <field name="model_id" ref="real_estate.model_real_estate_tag"/>
              <field name="domain_force">['|', ('company_id', '=', False), ('company_id', 'parent_of', company_ids)]</field>
          </record>

      </odoo>

.. _tutorials/server_framework_101/bypass_security:

Bypass security checks
======================

Sometimes, an operation must go through even if the user does not have the right permissions. This
is often the case for automated workflows or server actions that need to work on records regardless
of the current user's permissions, or when performing operations on behalf of another user.

To make these scenarios possible, the server framework provides the **sudo mode**, available through
the `sudo` model method. This method returns a new version of the recordset that behaves as if it
was accessed by the superuser. It bypasses all access rights and record rules, elevating the user's
privileges in the scope of the operation.

.. important::
   Always use `sudo` with caution. Since it bypasses all security checks, it's your responsibility
   to ensure the operation is safe. You should verify that the user is authorized through other
   means, such as custom checks (API keys, authentication tokens, etc.) or by checking that the
   operation is intended.

The following model methods can be used to verify that the current user has the right to perform the
given operation on a recordset:

- :meth:`has_access(operation: str) <odoo.models.Model.has_access>`: Return `True` if the user has
  the right to perform the operation on the recordset, `False` otherwise.
- :meth:`check_access(operation: str) <odoo.models.Model.check_access>`: Raise an
  :class:`AccessError <odoo.exceptions.AccessError>` if the user does not have the right to perform
  the operation on the recordset.

.. example::
   In the following example, a mechanism is added to automatically archive a product category when
   all its products are archived.

   .. code-block:: python

      def write(self, vals):
          res = super().write(vals)
          for product in self:
              if not product.active and vals.get('active') is False:  # The product has been archived.
                  if not product.category_id.product_ids:  # All the category's products are archived.
                      # Archive the category in sudo mode to allow writing on the category.
                      product.category_id.sudo().active = False
          return res

   .. note::
      - Just like in views, inactive record are automatically excluded from searches by default.
      - It is both necessary and safe to archive product categories in sudo mode, as the user might
        have the right to write on products but not on product categories, while we want to archive
        categories regardless of the user's permissions.
      - A comment explaining the reason for using `sudo` is strongly recommended.
      - Another good practice is to suffix variable names with `_sudo` when they hold a sudoed
        recordset. As those recordsets remain in sudo mode during their lifetime, it's important to
        be aware of their elevated privileges when performing further operations on them.

.. seealso::
   Reference documentation on the :meth:`sudo <odoo.models.Model.sudo>` method.

You might have noticed that access errors are raised when you attempt to modify the street or
address of a property while logged in as a non-admin, real estate agent. This is because we didn't
explicitly grant real estate agents write access to the `res.partner` model. Let's see what we can
do about that.

.. exercise::
   Rather than giving real estate agents write access to the `res.partner` model, which would allow
   them to modify *any* partner, identify the specific flows that require partner modifications
   regardless of the user's permissions, and add security bypasses where necessary.

   .. tip::
      The `create` and `write` parent methods already perform access checks. Therefore, it's not
      necessary to call `has_access` or `check_access` before or after calling them.

.. spoiler:: Solution

   .. code-block:: xml
      :caption: `data/real_estate_property_data.xml`
      :emphasize-lines: 3-4,9-10,15-16

      <record id="real_estate.country_house" model="real.estate.property">
          [...]
          <!-- Clear to prevent the root user from being assigned. -->
          <field name="salesperson_id" eval="None"/>
      </record>

      <record id="real_estate.loft" model="real.estate.property">
          [...]
          <!-- Clear to prevent the root user from being assigned. -->
          <field name="salesperson_id" eval="None"/>
      </record>

      <record id="real_estate.mixed_use_commercial" model="real.estate.property">
          [...]
          <!-- Clear to prevent the root user from being assigned. -->
          <field name="salesperson_id" eval="None"/>
      </record>

   .. code-block:: python
      :caption: `models/real_estate_property.py`
      :emphasize-lines: 4-6,9,11-16,20-25,27-28,32,34-36

      @api.model_create_multi
      def create(self, vals_list):
          for vals in vals_list:
              # Extract the street from the vals to set it directly on the address partner to avoid
              # infinite recursion due to the street field being a stored related field.
              street = vals.pop('street', None)
              if not vals.get('address_id'):  # No address is provided at creation time.
                  # Create and assign a new one based on the property name.
                  address_sudo = self.env['res.partner'].sudo().create({
                      'name': vals.get('name'),
                      'street': street,
                  })  # In sudo mode to allow real estate agents to create an address.
                  vals['address_id'] = address_sudo.id
              elif street:  # Both a street and the address partner are specified.
                  address = self.env['res.partner'].browse(vals['address_id'])
                  address.sudo().street = street
          return super().create(vals_list)

      def write(self, vals):
          # Extract the street from the vals to set it directly on the address partner in sudo mode to
          # allow real estate agents to update the address, and to avoid infinite recursion due to the
          # street field being a stored related field.
          if street := vals.pop('street', None):
              self.address_id.sudo().street = street

          res = super().write(vals)

          if street:  # The street has been updated.
              for property in self:
                  if not property.address_id:  # The property has no address record.
                      # Create and assign a new one based on the property name and the street.
                      address_sudo = self.env['res.partner'].sudo().create({
                          'name': property.name,
                          'street': street,
                      })  # In sudo mode to allow real estate agents to create an address.
                      property.address_id = address_sudo.id
          return res


----

.. todo: add incentive for next chapter
