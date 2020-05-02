==================================
Add Users and Manage Access Rights
==================================

Odoo defines a *user* as someone who has access to a database to perform daily tasks. You can add as
many users as you need and, in order to restrict the type of information each user can access, rules
can be applied. Users and access rights can be added and changed at any point.

.. _general/odoo_basics/add_individual_user:

Add individual users
====================

Go to :menuselection:`Settings --> Manage Users` and click on *Create*.

.. image:: media/manage_users.png
   :align: center
   :height: 280
   :alt: View of the settings page emphasizing the manage users field in Odoo

| Fill in the form with the needed information. Under the tab
  :ref:`Access Rights <general/odoo_basics/add_user/access_rights>` choose the group within
  each application the user can have access to.
| The list of applications shown is based on the applications installed on the database.

.. image:: media/new_user.png
   :align: center
   :alt: View of a user’s form emphasizing the access rights tab in Odoo

When you are done editing the page and have *Saved* it, an invitation email is automatically sent to
the user. The user must click on it to accept the invitation and create a login.

.. image:: media/invitation_email.png
   :align: center
   :alt: View of a user’s form with a notification that the invitation email has been sent in Odoo

.. note::
   Remember that subscription prices follow the number of users. Refer to our
   `pricing page <https://www.odoo.com/pricing>`_
   for more information.

With the :doc:`Developer mode <../../general/developer_mode/activate>` activated, *User Types* can
be selected.

.. image:: media/user_type.png
   :align: center
   :height: 300
   :alt: View of a user’s form in developer mode emphasizing the user type field in Odoo

The *Portal* and *Public* options do not allow you to choose access rights. Members have specific
ones (such as record rules and restricted menus) and usually do not belong to the usual Odoo
groups.

.. _general/odoo_basics/add_user/access_rights:

Access Rights in detail
=======================

Activate the :doc:`Developer mode <../../general/developer_mode/activate>`, then go to
:menuselection:`Settings --> Users & Companies --> Groups`.

Groups
~~~~~~

| When choosing the groups the user can have access under
  :ref:`Access Rights <general/odoo_basics/add_individual_user>`, details of the rules and
  inheritances of that group are not shown, so this is when the menu *Groups* comes along. *Groups*
  are created to define rules to models within an application.
| Under *Users*, have a list of the current ones. The ones with administrative rights are shown
  in black.

.. image:: media/groups_users.png
   :align: center
   :alt: View of a group’s form emphasizing the tab users in Odoo

*Inherited* means that users added to this application group are automatically added to the
following ones. In the example below, users who have access to the group *Administrator* of *Sales*
also have access to *Website/Restricted Editor* and *Sales/User: All Documents*.

.. image:: media/groups_inherited.png
   :align: center
   :height: 330
   :alt: View of a group’s form emphasizing the tab inherited in Odoo

.. important::
   Remember to always test the settings being changed in order to ensure that they are being applied
   to the needed and right users.

The *Menus* tab is where you define which menus (models) the user can have access to.

.. image:: media/groups_menus.png
   :align: center
   :height: 330
   :alt: View of a group’s form emphasizing the tab menus in Odoo

*Access Rights* rules are the first level of rights. The field is composed of the object name, which
is the technical name given to a model. For each model, enable the following options as appropriate:

- *Read*: the values of that object can be only seen by the user.
- *Write*: the values of that object can be edited by the user.
- *Create*: values for that object can be created by the user.
- *Delete*: the values of that object can be deleted by the user.

.. image:: media/groups_access_rights.png
   :align: center
   :alt: View of a group’s form emphasizing the tab access rights in Odoo

| As a second layer of editing and visibility rules, *Record Rules* can be formed. They overwrite,
  or refine, the *Access Rights*.
| A record rule is written using a *Domain*. Domains are conditions used to filter or searching
  data. Therefore, a domain expression is a list of conditions. For each rule, choose among the
  following options: *Read*, *Write*, *Create* and *Delete* values.

.. image:: media/groups_record_rules.png
   :align: center
   :alt: View of a group’s form emphasizing the tab record rules in Odoo

.. important::
   Making changes in access rights can have a big impact on the database. For this reason, we
   recommend you to contact your Odoo Business Analyst or our Support Team, unless you have
   knowledge about Domains in Odoo.

Multi Companies
===============

The *Multi Companies* field allows you to set to which of the multiple companies database you hold
the user can have access.

.. note::
   Note that if not handled correctly, it may be the source of a lot of inconsistent multi-company
   behaviors. Therefore, a good knowledge of Odoo is required. For technical explanations refer
   to `this <https://www.odoo.com/documentation/13.0/howtos/company.html>`_ documentation.

.. image:: media/multi_companies.png
   :align: center
   :height: 300
   :alt: View of a user’s form emphasizing the multi companies field in Odoo

.. seealso::
   - :doc:`../../db_management/documentation`