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
      - The `groups_id` field is set using the `Command.link` method, like in business code.

.. seealso::
   Reference documentation on :ref:`user groups <reference/security/groups>`.

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
          <field name="model_id" ref="model_product"/>
          <field name="domain_force">[('active', '=', True)]</field>
      </record>

      <record id="product.product_published_rule" model="ir.rule">
          <field name="name">Product: Sales representatives can only access published products</field>
          <field name="model_id" ref="model_product"/>
          <field name="domain_force">[('is_published', '=', True)]</field>
          <field name="groups" eval="[Command.link(ref('product.sales_representative_group'))]"/>
          <field name="perm_write" eval="False"/>
      </record>

      <record id="product.product_manager_rule" model="ir.rule">
          <field name="name">Product: Managers can access all products</field>
          <field name="model_id" ref="model_product"/>
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
   - Ensure real estate agents can only update their assigned properties or properties that are not
     assigned to any agent. They should still be able to read all properties.
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
              <field name="model_id" ref="model_real_estate_property"/>
              <field name="domain_force">['|', ('salesperson_id', '=', False), ('salesperson_id', '=', user.id)]</field>
              <field name="groups" eval="[Command.link(ref('real_estate.agent_group'))]"/>
              <field name="perm_read" eval="False"/>
          </record>

          <record id="real_estate.property_manager_rule" model="ir.rule">
              <field name="name">Real Estate: Managers can access all properties</field>
              <field name="model_id" ref="model_real_estate_property"/>
              <field name="domain_force">[(1, '=', 1)]</field>
              <field name="groups" eval="[Command.link(ref('real_estate.manager_group'))]"/>
          </record>

      </odoo>

.. _tutorials/server_framework_101/multi_company:

Separate company data
=====================

tmp

Let's adapt our real estate app to support multiple agencies while keeping their data separate.

.. _tutorials/server_framework_101/bypass_security:

Bypass security checks
======================

tmp

.. todo: sudo

Let's apply security overrides in our real estate app to safely bypass restrictive checks when
necessary.

.. exercise::
   tmp

.. todo: write on street field (res.partner)
.. todo: sudo read setting set on company

----

.. todo: add incentive for next chapter
