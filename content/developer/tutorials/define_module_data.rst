==================
Define module data
==================

.. important::
   This tutorial is an extension of the :doc:`server_framework_101` tutorial. Make sure you have
   completed it and use the `estate` module you have built as a base for the exercises in this
   tutorial.

Data Types
==========

Master Data
-----------

Master data is usually part of the technical or business requirements for the module. In other
words, such data is often necessary for the module to work properly. This data will always be
installed when installing the module.

We already met technical data previously since we have defined :doc:`views
<../reference/user_interface/view_records>` and :doc:`actions <../reference/backend/actions>`. Those
are one kind of master data.

On top of technical data, business data can be defined, e.g. countries, currencies, units of measure,
as well as complete country localization (legal reports, tax definitions, chart of account), and much
more...

Demo Data
---------

In additional to master data, which are requirements for a module to work properly, we also like
having data for demonstration purposes:

* Help the sales representatives make their demos quickly.
* Have a set of working data for developers to test new features and see how these new features look
  with data they might not have added themselves.
* Test that the data is loaded correctly, without raising an error.
* Setup most of the features to be used quickly when creating a new database.

Demo data is automatically loaded when you start the server if you don't explicitly say you don't
want it. This can be done in the database manager or with the command line.

.. code-block:: console

  $ ./odoo-bin -h
  Usage: odoo-bin [options]

  Options:
  --version             show program's version number and exit
  -h, --help            show this help message and exit

  Common options:
    [...]
    --without-demo=WITHOUT_DEMO
                        disable loading demo data for modules to be installed
                        (comma-separated, use "all" for all modules). Requires
                        -d and -i. Default is none
  [...]

  $ ./odoo-bin --addons-path=... -d db -i account --without-demo=all

Data Declaration
================

Manifest
--------

**Reference**: the documentation related to this topic can be found in
:ref:`Module Manifests<reference/module/manifest>`.

Data is declared either in CSV or in XML.
Each file containing data must be added in the manifest for them to be loaded.

The keys to use in the manifest to add new data are ``data`` for the master data and ``demo`` for
the demo data. Both values should be a list of strings representing the relative paths to the files
declaring the data.

Usually, demo data is in a ``demo`` folder, views and actions are in a ``views``
folder, security related data is in a ``security`` folder, and other data is in a
``data`` folder.

If your work tree looks like this:

.. code-block:: bash

  estate
  ├── data
  │   └── master_data.xml
  ├── demo
  │   └── demo_data.xml
  ├── models
  │   ├── *.py
  │   └── __init__.py
  ├── security
  │   └── ir.model.access.csv
  ├── views
  │   └── estate_property_offer_views.xml
  ├── __init__.py
  └── __manifest__.py

Your manifest should look like this:

.. code-block:: python

  # -*- coding: utf-8 -*-

  {
      "name": "Real Estate",
      "depends": [
          ...
      ],
      "data": [
          "security/ir.model.access.csv",  # CSV and XML files are loaded at the same place
          "views/estate_property_offer_views.xml",  # Views are data too
          "data/master_data.xml",  # Split the data in multiple files depending on the model
      ],
      "demo": [
          "demo/demo_data.xml",
      ]
      "application": True,
  }

CSV
---

**Reference**: the documentation related to this topic can be found in
:ref:`CSV data files<reference/data/csvdatafiles>`.

The easiest way to declare simple data is by using the CSV format. This is however limited in terms
of features: use it for long lists of simple models, but prefer XML otherwise.

.. code-block:: text

    id,field_a,field_b,related_id:id
    id1,valueA1,valueB1,module.relatedid
    id2,valueA2,valueB2,module.relatedid

.. tip:: Your IDE has probably an extension to have a syntax highlighting of the CSV files

  * `Atom <https://atom.io/packages/rainbow-csv>`__.
  * `PyCharm/IntelliJ <https://plugins.jetbrains.com/plugin/10037-csv-plugin>`__.
  * `Vim <https://github.com/mechatroner/rainbow_csv>`__.
  * `Visual Studio <https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv>`__.

.. exercise:: Add some standard Real Estate Property Types for the `estate` module: Residential,
  Commercial, Industrial and Land. These should always be installed.

XML
---

**Reference**: the documentation related to this topic can be found in
:ref:`Data Files<reference/data>`.

When the data to create is more complex it can be useful, or even necessary, to do it in XML.

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="field_a">valueA1</field>
        <field name="field_b">valueB1</field>
      </record>

      <record id="id2" model="tutorial.example">
        <field name="field_a">valueA2</field>
        <field name="field_b">valueB2</field>
      </record>
    </odoo>

.. exercise:: Create some demo data for the `estate` module.

  ================== ==================== ======================
  Field              Values               Values
  ================== ==================== ======================
  name               Big Villa            Trailer home
  state              New                  Cancelled
  description        A nice and big villa Home in a trailer park
  postcode           12345                54321
  date_availability  2020-02-02           1970-01-01
  expected_price     1,600,000            100,000
  selling_price                           120,000
  bedrooms           6                    1
  living_area        100                  10
  facades            4                    4
  garage             True                 False
  garden             True
  garden_area        100000
  garden_orientation South
  ================== ==================== ======================

Data Extension
~~~~~~~~~~~~~~

During the Core Training, we saw in the :doc:`server_framework_101_legacy/12_inheritance` chapter we
could inherit (extend) an existing view. This was a special case of data extension: any data can be
extended in a module.

When you are adding new fields to an existing model in a new module, you might want to populate
those fields on the records created in the modules you are depending on. This is done by giving the
`xml_id` of the record you want to extend. It won't replace it, in this case we will set the
``field_c`` to the given value for both records.

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="field_c">valueC1</field>
      </record>

      <record id="id2" model="tutorial.example">
        <field name="field_c">valueC2</field>
      </record>
    </odoo>


``ref``
~~~~~~~

Related fields can be set using the ``ref`` key. The value of that key is the ``xml_id`` of the
record you want to link. Remember the ``xml_id`` is composed of the name of the module where the
data is first declared, followed by a dot, followed by the ``id`` of the record (just the ``id``
works too if you are in the module declaring it).

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="related_id" ref="module.relatedid"/>
      </record>
    </odoo>

.. exercise:: Create some demo data offers for the properties you created.

  Create offers using the partners defined in ``base``

  ============== ========= ======= ========
  Partner        Estate    Price   Validity
  ============== ========= ======= ========
  Azure Interior Big Villa 10000   14
  Azure Interior Big Villa 1500000 14
  Deco Addict    Big Villa 1500001 14
  ============== ========= ======= ========

.. exercise:: Ensure both of your demo properties are created with their Property Type set to Residential.

``eval``
~~~~~~~~

The value to assign to a field is not always a simple string and you might need to compute it.
It can also be used to optimize the insertion of related values, or because a constraint forces you
to add the related values in batch. See ::ref:`Add X2many fields
<tutorials/define_module_data/x2m>`.

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="year" eval="datetime.now().year+1"/>
      </record>
    </odoo>

.. exercise:: The offers you added should always be in a date relative to the installation of the
  module.

``search``
~~~~~~~~~~

Sometimes, you need to call the ORM to do a ``search``. This is not feasible with the CSV format.

.. code-block:: xml

    <odoo>
      <record id="id1" model="account.move.line">
        <field name="account_id" search="[
          ('user_type_id', '=', ref('account.data_account_type_direct_costs')),
          ('company_id', '=', obj().env.company.id)]
        "/>
      </record>
    </odoo>

In this code snippet, it is needed because the master data depends on the localization
installed.

``function``
~~~~~~~~~~~~

You might also need to execute python code when loading data.

.. code-block:: xml

  <function model="tutorial.example" name="action_validate">
      <value eval="[ref('demo_invoice_1')]"/>
  </function>

.. exercise:: Validate one of the demo data offers by using the "Accept Offer" button. Refuse the
  others.


.. _tutorials/define_module_data/x2m:

Add X2many fields
-----------------

**Reference**: the documentation related to this topic can be found in
:class:`~odoo.fields.Command`.

If you need to add related data in a One2many or a Many2many field, you can do so by using the
:class:`~odoo.fields.Command` methods.

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="related_ids" eval="[
            Command.create({
                'name': 'My name',
            }),
            Command.create({
                'name': 'Your name',
            }),
            Command.link(ref('model.xml_id')),
        ]"/>
      </record>
    </odoo>

.. exercise:: Create one new Property, but this time with some offers created directly inside the
  One2many field linked to the Offers.

Accessing the data
==================

.. warning:: You should never access demo data outside of the demo data declaration, not even in
  tests.

There are multiple ways to access the master/demo data.

In python code, you can use the ``env.ref(self, xml_id, raise_if_not_found=True)`` method. It
returns the recordset linked to the ``xml_id`` you specify.

In XML, you can use the `ref` key like this

.. code-block:: xml

    <odoo>
      <record id="id1" model="tutorial.example">
        <field name="related_id" ref="module.relatedid"/>
      </record>
    </odoo>

It will call the ref method, and store the id of the record returned on the field ``related_id`` of
the record of type ``tutorial.example`` with id ``id1``.

In CSV, the title of the column must be suffixed with ``:id`` or ``/id``.

.. code-block:: text

  id,parent_id:id,name
  "child1","module.parent","Name1"
  "child2","module.parent","Name2"
  "child3","module.parent","Name3"

In SQL, it is more complicated, see :ref:`the advanced section
<tutorials/define_module_data/xml_id>`.

.. warning:: Data can always be deleted by the user. Always code defensively, taking this into
  account.




Advanced
========

.. _tutorials/define_module_data/xml_id:

What is the XML id?
-------------------

Because we don't want a column ``xml_id`` in every single SQL table of the database, we need a
mechanism to store it. This is done with the ``ir.model.data`` model.

It contains the name of the record (the ``xml_id``) along with the module in which it is defined,
the model defining it, and the id of it.

No update
---------

The records created with the ``noupdate`` flag won't be updated when upgrading the module that
created them, but it will be created if it didn't exist yet.

.. note:: ``odoo-bin -i module`` will bypass this setting and always load the data. But normally
  one shouldn't do this on a production database.

.. code-block:: xml

    <odoo noupdate="1">
      <record id="id1" model="model">
        <field name="fieldA" eval="True"/>
      </record>
    </odoo>


Import as SQL
-------------

In some cases, it makes sense to do the import directly in SQL. This is however discouraged as it
bypasses all the features of the ORM, computed fields (including metadata) and python constraints.

.. note:: Generally using raw SQL also bypasses ACLs and increases the risks of injections.

  **Reference**: :ref:`Security in Odoo<reference/security>`

* It can help to speed the import time by a lot
  `with huge files <https://github.com/odoo/enterprise/blob/d46cceef8c594b9056d0115edb7169e207a5986f/product_unspsc/hooks.py#L19>`__.
* For more complex imports like for the
  `translations <https://github.com/odoo/odoo/blob/e1f8d549895cd9c459e6350430f30d541d02838a/odoo/addons/base/models/ir_translation.py#L24>`__.
* It can be necessary to
  `initialize the database <https://github.com/odoo/odoo/blob/e1f8d549895cd9c459e6350430f30d541d02838a/odoo/addons/base/data/base_data.sql>`__.
