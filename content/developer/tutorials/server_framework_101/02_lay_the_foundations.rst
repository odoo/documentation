==============================
Chapter 2: Lay the foundations
==============================

In this chapter, we'll focus on the fundamental building blocks of Odoo's data structure: models,
fields, and records. Together, they form the foundations upon which we'll build our real estate
application.

Install the app
===============

If you followed the :doc:`setup guide <../setup_guide>` carefully, you should now have a running
Odoo server with the `odoo/tutorials` repository in the `addons-path`, and be logged in as an
administrator.

**Let's install our real estate app!** In your browser, open Odoo and navigate to
:menuselection:`Apps`. Search for :guilabel:`Real Estate` and click :guilabel:`Activate`.

Nothing has changed? That's normal; the `real_estate` module you just installed is currently an
empty shell. It doesn't even have a menu entry. Currently, it only contains two files:

- An empty :file:`__init__.py` file to make Python treat the :file:`real_estate` directory as a
  package.
- The :file:`__manifest__.py` file that declares the :file:`real_estate` Python package as an Odoo
  module.

Those two files are the minimum requirements for a directory to be considered an Odoo module.

.. exercise::
   Search for each key of the :file:`real_estate/__manifest__.py` file in the :ref:`reference
   documentation <reference/module/manifest>` and understand the base metadata that defines the
   `real_estate` module.

.. seealso::
   `The manifest file of the Sales app <{GITHUB_PATH}/addons/sale/__manifest__.py>`_

Create the first model
======================

Now that our module is recognized by Odoo, it's time to build towards the business features. Data is
essential for any real-world application, and our real estate module won't be an exception.

To store data effectively, we need two things: a way to define the structure of that data, and a
system to store and manipulate it. Fortunately, the server framework of Odoo comes equipped with the
perfect tool: the :abbr:`ORM (Object Relational Mapper)` layer. It's the ORM that takes care of
preparing and executing SQL queries for you when you manipulate data in Python.

The ORM simplifies data access and manipulation by allowing you to define **models**. Models act as
blueprints for your data; they define the structure and organization of information within your
module. You can see them as templates that specify what kind of data your module will handle. For
example, real estate properties, owners, or tenants. In Odoo, models are represented by Python
classes that inherit from the `odoo.models.Model` class provided by the ORM, and they are identified
by their `_name` attribute. In addition to `_name`, models also accept the `_description` attribute
to define a human-readable description of the model.

Each model is made of smaller components called **fields**. You can see them as the individual
characteristics that describe your data. Fields allow you to define the relevant data your
application needs to capture and manage. In the case of real estate properties, some example fields
could be the property name, the type (house, apartment, etc.), and the floor area. Within model
classes, fields are defined as class attributes. Each field is an instance of a class from the
`odoo.fields` package. For example, `Char`, `Float`, `Boolean`, each designed to handle different
types of data. When defining a field, developers can pass various arguments to finely control how
data is handled and presented in Odoo. For example, `string` defines the label for the field in the
user interface, `help` provides a tooltip  when hovering the field in the user interface, and
`required` makes filling in the field mandatory.

Individual data entries are called **records**. They are based on the structure defined by models
and contain the actual data for each field specified in the model. In Python, records are
represented as instances of the model's class, allowing developers to interact with data using
object-oriented programming techniques. For example, in a real estate application using a tenant
model, each specific tenant (such as "Bafien Carpink") would be a separate record of that model.

.. seealso::
   For the full list of fields and their attributes, see the :ref:`reference documentation
   <reference/orm/fields>`.

.. example::
   Before we dive into creating our own models, let's take a look at a basic example of a model that
   represents storable products. It defines a `product` model with the `Product` class inheriting
   from `models.Model`. Within this class, several fields are defined to capture product data:

   .. code-block:: python

      from odoo import fields, models


      class Product(models.Model):
          _name = 'product'
          _description = "Storable Product"

          name = fields.Char(string="Name", required=True)
          description = fields.Text(string="Description")
          price = fields.Float(string="Sale Price", required=True)
          category = fields.Selection(
              string="Category",
              help="The category of the product; if none are suitable, select 'Other'.",
              selection=[
                  ('apparel', "Clothing")
                  ('electronics', "Electronics"),
                  ('home_decor', "Home Decor"),
                  ('other', "Other"),
              ],
              required=True,
              default='apparel',
          )

   .. note::
      - `name` is a `Char` field while `description` is a `Text` field; `Char` fields are typically
        used for short texts, whereas `Text` fields can hold longer content and multiple lines.
      - The label of the `price` field is arbitrary and doesn't have to be the upper-cased version
        of the attribute name.
      - `category` is a `Selection` field with predefined options, each defined by a technical code
        and a corresponding label. Since it is required, a default value is provided.

Building on these new concepts, let's now create the first model for our real estate app. We'll
create a model with some fields to represent real estate properties and their characteristics.

.. exercise::

   #. Create a new file :file:`real_estate_property.py` at the root of the `real_estate` module.

   #. Update the :file:`real_estate/__init__.py` file to relatively import the
      :file:`real_estate_property.py` file, like so:

      .. code-block:: python

         from . import real_estate_property

   #. Define a new model with `real.estate.property` as `_name` and a short `_description`.

      .. tip::
         The class name doesn't matter, but the convention is to use the model's upper-cased `_name`
         (without dots).

   #. Add fields to represent the following characteristics:

      - Name (required)
      - Description
      - Type (house, apartment, office building, retail space, or warehouse; required)
      - Selling price (without currency; with help text; required)
      - Floor area (in square meters; with help text)
      - Number of bedrooms (default to two)
      - Whether there is a garden
      - Whether there is a garage
      - Availability date

.. spoiler:: Solution

   .. code-block:: python
      :caption: __init__.py

      from . import real_estate_property

   .. code-block:: python
      :caption: real_estate_property.py

      from odoo import fields, models


      class RealEstateProperty(models.Model):
          _name = 'real.estate.property'
          _description = "Real Estate Property"

          name = fields.Char(string="Name", required=True)
          description = fields.Text(string="Description")
          type = fields.Selection(
              string="Type",
              selection=[
                  ('house', "House"),
                  ('apartment', "Apartment"),
                  ('office', "Office Building"),
                  ('retail', "Retail Space"),
                  ('warehouse', "Warehouse"),
              ],
              required=True,
              default='house',
          )
          selling_price = fields.Float(
              string="Selling Price", help="The selling price excluding taxes.", required=True
          )
          floor_area = fields.Integer(
              string="Floor Area", help="The floor area in square meters excluding the garden."
          )
          bedrooms = fields.Integer(string="Number of bedrooms", default=2)
          has_garden = fields.Boolean(string="Garden")
          has_garage = fields.Boolean(string="Garage")
          availability_date = fields.Date(string="Availability Date")

Congrats, you have just defined the first model of our real estate app! However, the changes have
not yet been applied to the database. To do so, you must add `-u real_estate` to the server start-up
command and restart the server. The :option:`-u <odoo-bin --update>` argument tells the server to
upgrade the specified modules at start-up.

Inspect the SQL table
=====================

Earlier, we quickly introduced models as a convenient way to store and handle data in Odoo. These
models not only define the structure and behavior of data in Python, but they also correspond to SQL
tables in the database. The `_name` attribute of their model is taken (with dots replaced by
underscores) as the name of the corresponding table.

The same goes for fields that become columns in the SQL table of their model. The name of the class
attribute representing the field is taken as the column name while the field's class determines the
column type.

Once the server is running again, let's take a look in the database and see how the model and fields
you created translate into a new SQL table. We will use `psql`, the CLI
:dfn:`command-line interface` allowing to browse and interact with PostgreSQL databases.

.. exercise::

   #. In your terminal, execute the command :command:`psql -d tutorials`.
   #. Enter the command :command:`\\d real_estate_property` to print the description of the
      `real_estate_property` table.
   #. For each field of the `real.estate.property` model, try to understand how the field's
      attributes alter the table.
   #. Enter the command :command:`exit` to exit `psql`.

.. spoiler:: Solution

   .. code-block:: text

      $ psql -d tutorials

      tutorials=> \d real_estate_property
                                                  Table "public.real_estate_property"
            Column       |            Type             | Collation | Nullable |                     Default
      -------------------+-----------------------------+-----------+----------+--------------------------------------------------
       id                | integer                     |           | not null | nextval('real_estate_property_id_seq'::regclass)
       floor_area        | integer                     |           |          |
       create_uid        | integer                     |           |          |
       write_uid         | integer                     |           |          |
       name              | character varying           |           | not null |
       type              | character varying           |           | not null |
       availability_date | date                        |           |          |
       description       | text                        |           |          |
       has_garden        | boolean                     |           |          |
       has_garage        | boolean                     |           |          |
       create_date       | timestamp without time zone |           |          |
       write_date        | timestamp without time zone |           |          |
       selling_price     | double precision            |           | not null |
       bedrooms          | integer                     |           |          |
      Indexes:
          "real_estate_property_pkey" PRIMARY KEY, btree (id)
      Foreign-key constraints:
          "real_estate_property_create_uid_fkey" FOREIGN KEY (create_uid) REFERENCES res_users(id) ON DELETE SET NULL
          "real_estate_property_write_uid_fkey" FOREIGN KEY (write_uid) REFERENCES res_users(id) ON DELETE SET NULL

      exit

   - Each field is represented in the `real_estate_property` SQL table by a column whose type is
     determined by the field's class:

     +--------------------+----------------------+
     | Field class        | Column type          |
     +====================+======================+
     | `fields.Integer`   | `integer`            |
     +--------------------+----------------------+
     | `fields.Float`     | `double precision`   |
     +--------------------+----------------------+
     | `fields.Char`      | `character varying`  |
     +--------------------+----------------------+
     | `fields.Text`      | `text`               |
     +--------------------+----------------------+
     | `fields.Selection` | `character varying`  |
     +--------------------+----------------------+
     | `fields.Boolean`   | `boolean`            |
     +--------------------+----------------------+
     | `fields.Date`      | `date`               |
     +--------------------+----------------------+

   - The `required` attribute of a field prevents the corresponding column to be nullable.

   - The `default` attribute of a field does *not* set a default value on the column; instead, it's
     the ORM that takes care of setting default values for newly created records.

You might be surprised to find that the generated SQL table contains more columns than just the
fields you defined. That is because Odoo automatically adds several readonly :dfn:`you can read but
not write` fields to each model for internal purposes. Here are some additional fields you'll
typically find:

- `id`: A unique identifier that is automatically computed for each new record.
- `create_date`: The timestamp of when the record was created.
- `create_uid`: The ID of the user who created the record.
- `write_date`: The timestamp of the last modification to the record.
- `write_uid`: The ID of the user who last modified the record.

.. seealso::
   :ref:`Reference documentation for automatic fields <reference/fields/automatic>`

----

.. todo: update incentive description when chapter 3 is finished

In the next chapter, we'll :doc:`create elements to interact with the model in the user interface
<03_basicmodel>`.
