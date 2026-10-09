==========================================
Chapter 4: Security - A Brief Introduction
==========================================

In the :doc:`previous chapter <03_basicmodel>`, we created our first table
intended to store business data. In a business application such as Odoo, one of the first questions
to consider is who\ [#who]_ can access the data. Odoo provides a security mechanism to allow access
to the data for specific groups of users.

The topic of security is covered in more detail in :doc:`../restrict_data_access`. This chapter aims
to cover the minimum required for our new module.

Data Files (CSV)
================

Odoo is a highly data driven system. Although behavior is customized using Python code, part of a
module's value is in the data it sets up when loaded. One way to load data is through a CSV
file. One example is the `list of country states
<{GITHUB_PATH}/odoo/addons/base/data/res.country.state.csv>`_ which is loaded at installation of the
`base` module.

.. code-block:: text

    "id","country_id:id","name","code"
    state_au_1,au,"Australian Capital Territory","ACT"
    state_au_2,au,"New South Wales","NSW"
    state_au_3,au,"Northern Territory","NT"
    state_au_4,au,"Queensland","QLD"
    ...

- ``id`` is an :term:`external identifier`. It can be used to refer to the record
  (without knowing its in-database identifier).
- ``country_id:id`` refers to the country by using its :term:`external identifier`.
- ``name`` is the name of the state.
- ``code`` is the code of the state.

These three fields are
`defined <https://github.com/odoo/odoo/blob/2ad2f3d6567b6266fc42c6d2999d11f3066b282c/odoo/addons/base/models/res_country.py#L108-L111>`__
in the ``res.country.state`` model.

By convention, a file importing data is located in the ``data`` folder of a module. When the data
is related to security, it is located in the ``security`` folder. When the data is related to
views and actions (we will cover this later), it is located in the ``views`` folder.
Additionally, all of these files must be declared in the ``data``
list within the ``__manifest__.py`` file. Our example file is defined
`in the manifest of the base module <https://github.com/odoo/odoo/blob/e8697f609372cd61b045c4ee2c7f0fcfb496f58a/odoo/addons/base/__manifest__.py#L29>`__.

Also note that the content of the data files is only loaded when a module is installed or
updated.

.. warning::

    The data files are sequentially loaded following their order in the ``__manifest__.py`` file.
    This means that if data ``A`` refers to data ``B``, you must make sure that ``B``
    is loaded before ``A``.

    In the case of the country states, you will note that the
    `list of countries <https://github.com/odoo/odoo/blob/e8697f609372cd61b045c4ee2c7f0fcfb496f58a/odoo/addons/base/__manifest__.py#L22>`__
    is loaded **before** the
    `list of country states <https://github.com/odoo/odoo/blob/e8697f609372cd61b045c4ee2c7f0fcfb496f58a/odoo/addons/base/__manifest__.py#L29>`__.
    This is because the states refer to the countries.

Why is all this important for security? Because all the security configuration of a model is loaded through
data files, as we'll see in the next section.

Access Rights
=============

**Reference**: the documentation related to this topic can be found in
:ref:`reference/security/access`.

When no access rights are defined on a model, Odoo determines that no users can access the data.

Access rights are defined as records of the model ``ir.access``. Each access
right is associated with a model, a group (or no group for restrictions), a set
of operations (a subset of create, read, update and delete\ [#delete]_) and an
optional domain.
Such access rights are usually defined in a CSV file named ``ir.access.csv``.

Here is an example for our previous `test_model`:

.. code-block:: text

    id,name,model_id,group_id/id,operation,domain
    access_test_model,access_test_model,test_model,base.group_user,crud,

- ``id`` is an :term:`external identifier`.
- ``name`` is the description of the ``ir.access``.
- ``model_id`` refers to the model which the access right applies to. The standard way to refer
  to the model is the ``_name`` of the model.
- ``group_id/id`` refers to the group which the access right applies to.
- ``operation``: specifies which operations on the model the access refers to
  (create, read, update, delete).  For instance, the string ``ru`` refers to the
  set {read, update}.
- ``domain``: permits or restricts the access to the records that satisfy the domain.
  If a group is given, the record provides permission to the users of the given group.
  Otherwise, the record restricts access to the users that satisfy the domain for all users.

.. exercise:: Add access rights.

    Create the ``ir.access.csv`` file in the appropriate folder and define it in the
    ``__manifest__.py`` file.

    Give the create, read, update and delete permissions to the group ``base.group_user``.

It's now time to finally :doc:`interact with the UI <05_firstui>`!

.. [#who] meaning which Odoo user (or group of users)

.. [#delete] the 'update' and 'delete' operations correspond to ORM methods
    ``write()`` and ``unlink()``, respectively.
