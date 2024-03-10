Below is an updated and corrected version of the provided section, formatted for GitHub:

```rst
.. _tutorials/getting_started/04_basicmodel:

==================================
Chapter 4: Models And Basic Fields
==================================

At the end of the :ref:`previous chapter <tutorials/getting_started/03_newapp>`, we were able to
create an Odoo module. However, at this point, it is still an empty shell which doesn't allow us to
store any data. In our real estate module, we want to store the information related to the
properties (name, description, price, living area...) in a database. The Odoo framework provides
tools to facilitate database interactions.

Before moving forward in the exercise, make sure the ``estate`` module is installed, i.e., it
must appear as 'Installed' in the Apps list.

.. warning::

   Do not use mutable global variables.

   A single Odoo instance can run several databases in parallel within the same Python process.
   Distinct modules might be installed on each of these databases; therefore, we cannot rely on
   global variables that would be updated depending on installed modules.

Object-Relational Mapping
=========================

**Reference**: the documentation related to this topic can be found in the
:ref:`reference/orm/model` API.

.. note::

    **Goal**: At the end of this section, the table ``estate_property`` should be created:

    .. code-block:: text

        $ psql -d rd-demo
        rd-demo=# SELECT COUNT(*) FROM estate_property;
        count
        -------
            0
        (1 row)

A key component of Odoo is the `ORM`_ layer.
This layer avoids having to manually write most `SQL`_
and provides extensibility and security services\ [#rawsql]_.

Business objects are declared as Python classes extending
:class:`~odoo.models.Model`, which integrates them into the automated
persistence system.

Models can be configured by setting attributes in their
definition. The most important attribute is
:attr:`~odoo.models.Model._name`, which is required and defines the name for
the model in the Odoo system. Here is a minimum definition of a
model::

    from odoo import models

    class TestModel(models.Model):
        _name = "test_model"

This definition is enough for the ORM to generate a database table named `test_model`. By
convention, all models are located in a `models` directory, and each model is defined in its own
Python file.

Take a look at how the ``crm_recurring_plan`` table is defined and how the corresponding Python
file is imported:

1. The model is defined in the file ``crm/models/crm_recurring_plan.py``
   (see `here <https://github.com/odoo/odoo/blob/e80911aaead031e7523173789e946ac1fd27c7dc/addons/crm/models/crm_recurring_plan.py#L1-L9>`__)
2. The file ``crm_recurring_plan.py`` is imported in ``crm/models/__init__.py``
   (see `here <https://github.com/odoo/odoo/blob/e80911aaead031e7523173789e946ac1fd27c7dc/addons/crm/models/__init__.py#L15>`__)
3. The folder ``models`` is imported in ``crm/__init__.py``
   (see `here <https://github.com/odoo/odoo/blob/e80911aaead031e7523173789e946ac1fd27c7dc/addons/crm/__init__.py#L5>`__)

.. exercise:: Define the real estate properties model.

    Based on the example given in the CRM module, create the appropriate files and folder for the
    ``estate_property`` table.

    When the files are created, add a minimum definition for the
    ``estate.property`` model.

Any modification of the Python files requires a restart of the Odoo server. When we restart
the server, we will add the parameters ``-d`` and ``-u``:

.. code-block:: console

    $ ./odoo-bin --addons-path=addons,../enterprise/,../tutorials/ -d rd-demo -u estate

``-u estate`` means we want to upgrade the ``estate`` module, i.e., the ORM will
apply database schema changes. In this case, it creates a new table. ``-d rd-demo`` means
that the upgrade should be performed on the ``rd-demo`` database. ``-u`` should always be used in
combination with ``-d``.

During the startup, you should see the following warnings:

.. code-block:: text

    ...
    WARNING rd-demo odoo.models: The model estate.property has no _description
    ...
    WARNING rd-demo odoo.modules.loading: The model estate.property has no access rules, consider adding one...
    ...

If this is the case, then you should be good! To be sure, double-check with ``psql`` as demonstrated in
the **Goal**.

.. exercise:: Add a description.

    Add a ``_description`` to your model to get rid of one of the warnings.

Model fields
============

**Reference**: the documentation related to this topic can be found in the
:ref:`reference/orm/fields` API.

Fields are used to define what the model can store and where they are stored. Fields are
defined as attributes in the model class::

    from odoo import fields, models

    class TestModel(models.Model):
        _name = "test_model"
        _description = "Test Model"

        name = fields.Char()

The ``name`` field is a :class:`~odoo.fields.Char` which will be represented as a Python
unicode ``str`` and a SQL ``VARCHAR``.

Types
-----

.. note::

    **Goal**: At the end of this section, several basic fields should have been added to the table
    ``estate_property``:

    .. code-block:: text

        $ psql -d rd-demo

        rd-demo=# \d estate_property;
                                                    Table "public.estate_property"
            Column       |            Type             | Collation | Nullable |                   Default
        --------------------+-----------------------------+-----------+----------+---------------------------------------------
        id                 | integer                     |           | not null | nextval('estate_property_id_seq'::regclass)
        create_uid         | integer                     |           |          |
        create_date        | timestamp without time zone |           |          |
        write_uid          | integer                     |           |          |
        write_date         | timestamp without time zone |           |          |
        name               | character varying           |           |          |
        description        | text                        |           |          |
        postcode           | character varying           |           |          |
        date_availability  | date                        |           |          |
        expected_price     | double precision            |           |          |
        selling_price      | double precision            |           |          |
        bedrooms           | integer                     |           |          |
        living_area        | integer                     |           |          |
        facades            | integer                     |           |          |
        garage             | boolean                     |           |          |
        garden             | boolean                     |           |          |
        garden_area        | integer                     |           |          |
