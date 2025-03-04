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
   In the example below, we create two groups for our fictional product management application and
   assign the default admin user to one of them.

   .. code-block:: xml

      <record id="product.sales_representative_group" model="res.groups">
          <field name="name">Sales Representative</field>
      </record>

      <record id="product.product_manager_group" model="res.groups">
          <field name="name">Product Manager</field>
      </record>

      <record id="base.user_admin" model="res.users">
          <field name="groups_id" eval="[
              Command.link(ref('product_tutorial.sales_representative_group')),
              Command.link(ref('product_tutorial.product_manager_group')),
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

Control model access
====================

tmp

.. todo: Reference the basic access rights created in chapter 2

Let's apply these concepts to our real estate app by defining who can access our models and what
they can do with them.

.. exercise::
   tmp

   .. todo: prevent users who are not real estate agents to access the application and its records
   .. todo: only managers can create and delete properties
   .. todo: restrict who can manage property types and tags (agents can read)

.. tip::
   - Try logging in as the agent and manager users to verify that they have the expected access
     rights.

.. _tutorials/server_framework_101/record_rules:

Define record access rules
==========================

tmp

.. example::

   tmp

.. todo: note: the rule is not global (ref below)

Our real estate app needs more granular control over property records. Let's define rules to ensure
agents can only manage their assigned properties.

.. exercise::
   tmp

.. todo: real estate agents can only manage (create/write/unlink) properties they are assigned to or that are not assigned
.. todo: real estate managers can manage all properties

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

.. todo: sudo read setting set on company

----

.. todo: add incentive for next chapter
