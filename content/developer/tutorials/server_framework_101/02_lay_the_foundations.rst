==============================
Chapter 2: Lay the foundations
==============================

In this chapter, we'll focus on the fundamental building blocks of Odoo's data structure: models,
fields, and records. We'll use them together to lay the foundations of our real estate application.

.. _tutorials/server_framework_101/install_app:

Install the app
===============

If you followed the :doc:`setup guide <../setup_guide>` carefully, you should now have a running
Odoo server with the `odoo/tutorials` repository in the `addons-path`, and be logged in as an
administrator.

**Let's install our real estate app!** In your browser, open Odoo and navigate to
:menuselection:`Apps`. Search for :guilabel:`Real Estate` and click :guilabel:`Activate`.

Nothing has changed? That's normal; the `real_estate` module you just installed is currently an
empty shell. It doesn't even have a menu entry. Currently, it only contains three files:

- An empty :file:`__init__.py` file to make Python treat the :file:`real_estate` directory as a
  package.
- The :file:`__manifest__.py` file that declares the :file:`real_estate` Python package as an Odoo
  module.
- The optional :file:`static/description/icon.png` file that serves as the app icon.

The first two files are the minimum requirements for a directory to be considered an Odoo module.

.. exercise::
   Search for each key of the :file:`real_estate/__manifest__.py` file in the :ref:`reference
   documentation <reference/module/manifest>` and understand the base metadata that defines the
   `real_estate` module.

.. seealso::
   `The manifest file of the Sales app <{GITHUB_PATH}/addons/sale/__manifest__.py>`_

.. _tutorials/server_framework_101/create_first_model:

Create the first model
======================

Now that our module is recognized by Odoo, it's time to build towards the business features. Data is
essential for any real-world application, and our real estate application won't be an exception.

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
user interface, `help` provides a tooltip  when hovering the field in the user interface, `required`
makes filling in the field mandatory, and `default` provides a default field value.

Individual data entries are called **records**. They are based on the structure defined by models
and contain the actual data for each field specified in the model. In Python, records are
represented as instances of the model's class, allowing developers to interact with data using
object-oriented programming techniques. For example, in a real estate application using a tenant
model, each specific tenant (such as "Bafien Carpink") would be a separate record of that model.

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
          price = fields.Float(string="Sales Price", required=True)
          category = fields.Selection(
              string="Category",
              help="The category of the product; if none are suitable, select 'Other'.",
              selection=[
                  ('apparel', "Clothing"),
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

.. seealso::
   For the full list of fields and their attributes, see the :ref:`reference documentation
   <reference/orm/fields>`.

Building on these new concepts, let's now create the first model for our real estate app. We'll
create a model with some fields to represent real estate properties and their characteristics.

.. exercise::
   #. Create a new :file:`real_estate_property.py` file at the root of the `real_estate` module.
   #. Update the :file:`real_estate/__init__.py` file to relatively import the
      :file:`real_estate_property.py` file, like so:

      .. code-block:: python

         from . import real_estate_property

   #. Define a new model with `real.estate.property` as `_name` and a short `_description`.
   #. Add fields to represent the following characteristics:

      - **Name** (required)
      - **Description**
      - **Image** (max 600x400 pixels)
      - **Active** (whether the property listing is active; defaults to true)
      - **State** (new, offer received, under option, or sold; required; defaults to new)
      - **Type** (house, apartment, office building, retail space, or warehouse; required; defaults to
        house)
      - **Selling Price** (without currency; with help text; required)
      - **Availability Date**
      - **Floor Area** (in square meters; with help text)
      - **Number of Bedrooms** (defaults to two)
      - **Garage** (whether there is a garage)
      - **Garden** (whether there is a garden)
      - **Garden Area** (in square meters; with help text)

   .. tip::
      - The class name doesn't matter, but the convention is to use the model's upper-cased `_name`
        (without dots).
      - Rely on the reference documentation for :ref:`fields <reference/orm/fields>` to select the
        right class and attributes for each field.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__init__.py`

      from . import real_estate_property

   .. code-block:: python
      :caption: `real_estate_property.py`

      from odoo import fields, models


      class RealEstateProperty(models.Model):
          _name = 'real.estate.property'
          _description = "Real Estate Property"

          name = fields.Char(string="Name", required=True)
          description = fields.Text(string="Description")
          image = fields.Image(string="Image")
          active = fields.Boolean(string="Active", default=True)
          state = fields.Selection(
              string="State",
              selection=[
                  ('new', "New"),
                  ('offer_received', "Offer Received"),
                  ('under_option', "Under Option"),
                  ('sold', "Sold"),
              ],
              required=True,
              default='new',
          )
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
          availability_date = fields.Date(string="Availability Date")
          floor_area = fields.Integer(
              string="Floor Area", help="The floor area in square meters excluding the garden."
          )
          bedrooms = fields.Integer(string="Number of bedrooms", default=2)
          has_garage = fields.Boolean(string="Garage")
          has_garden = fields.Boolean(string="Garden")
          garden_area = fields.Integer(
              string="Garden Area", help="The garden area excluding the building."
          )

Congrats, you have just defined the first model of our real estate app! However, the changes have
not yet been applied to the database. To do so, you must add the `-u real_estate` argument to the
server start-up command and restart the server. The :option:`-u <odoo-bin --update>` argument
instructs the server to update the specified modules at start-up.

.. _tutorials/server_framework_101/inspect_sql_table:

Inspect the SQL table
=====================

Earlier, we quickly introduced models as a convenient way to store and handle data in Odoo. In fact,
these models not only define the structure and behavior of data in Python, but they also correspond
to SQL tables in the database. The `_name` attribute of their model is taken (with dots replaced by
underscores) as the name of the corresponding table. For example, the `real.estate.property` model
is linked to the `real_estate_property` table.

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
      :caption: terminal

      $ psql -d tutorials

      tutorials=> \d real_estate_property
                                                  Table "public.real_estate_property"
            Column       |            Type             | Collation | Nullable |                     Default
      -------------------+-----------------------------+-----------+----------+--------------------------------------------------
       id                | integer                     |           | not null | nextval('real_estate_property_id_seq'::regclass)
       floor_area        | integer                     |           |          |
       bedrooms          | integer                     |           |          |
       garden_area       | integer                     |           |          |
       create_uid        | integer                     |           |          |
       write_uid         | integer                     |           |          |
       name              | character varying           |           | not null |
       state             | character varying           |           | not null |
       type              | character varying           |           | not null |
       availability_date | date                        |           |          |
       description       | text                        |           |          |
       active            | boolean                     |           |          |
       has_garage        | boolean                     |           |          |
       has_garden        | boolean                     |           |          |
       create_date       | timestamp without time zone |           |          |
       write_date        | timestamp without time zone |           |          |
       selling_price     | double precision            |           | not null |
      Indexes:
          "real_estate_property_pkey" PRIMARY KEY, btree (id)
      Foreign-key constraints:
          "real_estate_property_create_uid_fkey" FOREIGN KEY (create_uid) REFERENCES res_users(id) ON DELETE SET NULL
          "real_estate_property_write_uid_fkey" FOREIGN KEY (write_uid) REFERENCES res_users(id) ON DELETE SET NULL

      exit

   - Each field, except the image that is saved as an attachment, is represented in the
     `real_estate_property` SQL table by a column whose type is determined by the field's class:

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

.. _tutorials/server_framework_101/load_data_files:

Load data files
===============

Now that we have created our first model, let's consider an important question: What's missing from
our database? The answer is simple: data!

While we could create new records directly from the user interface, this approach has some
limitations. It would be quite tedious and time-consuming, especially for large amounts of data, and
the changes would only affect the current database.

.. _tutorials/server_framework_101/xml_data_files:

XML data files
--------------

Fortunately, the server framework allows for a different approach: describe data operations in XML
format in so-called **data files** that the server automatically loads at start-up in sequential
order. This automates the process of populating the database, saving time and effort, and allows
developers to include default data or configurations directly in their modules.

The most common data operation is creating new records through the `record` and `field` XML
elements, but other operations exist, such as `delete`, which deletes previously created records, or
even `function`, which allows executing arbitrary code.

Some data operations require their data elements to be uniquely identified by the system. This is
achieved by means of the `id` attribute, also known as the **XML ID** or **external identifier**. It
provides a way for other elements to reference it with the `ref` attribute and links data elements
to the records they create or update. XML IDs are automatically prefixed with their module name when
created from a data file so that records can be referenced by their full XML ID `<module>.<id>`.

.. example::
   Let's again take the `product` model as an example and describe a few product records in a data
   file.

   .. code-block:: xml

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="coffee_table" model="product">
              <field name="name">Coffee table</field>
              <field name="description">A dark wood table easy to match with other furnishing.</field>
              <field name="price">275</field>
              <field name="category">home_decor</field>
          </record>

          <record id="product.tshirt" model="product">
              <field name="name">T-shirt</field>
              <field name="price">29.99</field>
              <field name="shop_id" ref="product.tshirt_shop"/>
          </record>

      </odoo>

   .. note::
      As we can see, data files are rather straightforward:

      - The root element must be `odoo`.
      - Multiple data operations can be described inside a single `odoo` element.
      - The `id` attribute can be written with the module prefix included for clarity.
      - Required fields must be provided a value if they don't have a default one.
      - Non-required fields can be omitted.
      - The `ref` attribute is used to reference other records by their XML ID and use their record
        ID as value.

.. seealso::
   :doc:`Reference documentation for XML data files <../../reference/backend/data>`

Let's now load some default real estate properties in our database.

.. exercise::
   #. Create a new :file:`real_estate_property_data.xml` file at the root of the `real_estate`
      module.
   #. Update the manifest to let the server know that it should load our data file. To do so, have
      the `data` key list our data file name.
   #. Use the `record` and `field` data operation to describe at least three default properties
      records. Try to vary property types and set different values than the default ones. Add the
      image files for the various properties at the root of the `real_estate` module and assign them
      to the properties' Image field.
   #. Restart the server, again with the `-u real_estate` argument, to load the module data at
      server start-up.
   #. In the terminal, execute the command `psql -d tutorials` and enter the command
      `SELECT * FROM real_estate_property;` to verify that the records were loaded.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 2

      'data': [
          'real_estate_property_data.xml',
      ],

   .. code-block:: text
      :caption: `country_house.png`

      <binary data>

   .. code-block:: text
      :caption: `loft.png`

      <binary data>

   .. code-block:: text
      :caption: `mixed_use_commercial.png`

      <binary data>

   .. code-block:: xml
      :caption: `real_estate_property_data.xml`

      <?xml version="1.0" encoding="utf-8"?>
      <odoo>

          <record id="real_estate.country_house" model="real.estate.property">
              <field name="name">Country house</field>
              <field name="description">In the charming village of Grand-Rosière-Hottomont, 5 minutes from all facilities (shops, schools, public transport, ...), we offer this superb newly renovated country house!</field>
              <field name="image" type="base64" file="real_estate/country_house.png"/>
              <field name="type">house</field>
              <field name="selling_price">745000</field>
              <field name="availability_date">2024-08-01</field>
              <field name="floor_area">416</field>
              <field name="bedrooms">5</field>
              <field name="has_garage">True</field>
              <field name="has_garden">True</field>
              <field name="garden_area">2100</field>
          </record>

          <record id="real_estate.loft" model="real.estate.property">
              <field name="name">Loft</field>
              <field name="description">Located on the 1st floor of a small, fully renovated building, magnificent 195 m² three-bedroom apartment with parking space.</field>
              <field name="image" type="base64" file="real_estate/loft.png"/>
              <field name="type">apartment</field>
              <field name="selling_price">339000</field>
              <field name="availability_date">2025-01-01</field>
              <field name="floor_area">195</field>
              <field name="bedrooms">3</field>
              <field name="has_garage">True</field>
              <field name="has_garden">False</field>
          </record>

          <record id="real_estate.mixed_use_commercial" model="real.estate.property">
              <field name="name">Mixed use commercial building</field>
              <field name="description">The property is a former bank agency which consists of a retail ground floor, a basement and 2 extra office floors.</field>
              <field name="image" type="base64" file="real_estate/mixed_use_commercial.png"/>
              <field name="type">retail</field>
              <field name="selling_price">335000</field>
              <field name="availability_date">2024-10-02</field>
              <field name="floor_area">370</field>
              <field name="bedrooms">0</field>
              <field name="has_garage">False</field>
              <field name="has_garden">False</field>
          </record>

      </odoo>

.. _tutorials/server_framework_101/csv_data_files:

CSV data files
--------------

In addition to XML data files, the server framework allows loading data files in CSV format. This
format is often more convenient for describing records with simple field values belonging to the
same model. It also loads faster, making it the go-to format when performance matters most.

.. example::
   See below for an example of how a subset of `country states can be loaded into Odoo
   <{GITHUB_PATH}/odoo/addons/base/data/res.country.state.csv>`_.

   .. code-block:: csv
      :caption: `res.country.state.csv`

      "id","country_id:id","name","code"
      state_ca_ab,ca,"Alberta","AB"
      state_ca_bc,ca,"British Columbia","BC"
      state_ca_mb,ca,"Manitoba","MB"
      state_ca_nb,ca,"New Brunswick","NB"
      state_ca_nl,ca,"Newfoundland and Labrador","NL"
      state_ca_nt,ca,"Northwest Territories","NT"
      state_ca_ns,ca,"Nova Scotia","NS"
      state_ca_nu,ca,"Nunavut","NU"
      state_ca_on,ca,"Ontario","ON"
      state_ca_pe,ca,"Prince Edward Island","PE"
      state_ca_qc,ca,"Quebec","QC"
      state_ca_sk,ca,"Saskatchewan","SK"
      state_ca_yt,ca,"Yukon","YT"

   .. note::
      - The file name must match the model name.
      - The first line lists the model fields to populate.
      - XML IDs are specified via the special `id` field.
      - The `:id` suffix is used to reference other records by their XML ID and use their record ID
        as value.
      - Each subsequent line describes one new record.

.. seealso::
   :ref:`Reference documentation for CSV data files <reference/data/csvdatafiles>`

In business applications like Odoo, one of the first questions to consider is who can access the
data. By default, access to newly created models is restricted until it is explicitly granted.
Granting access rights is done by creating records of the `ir.model.access` model, which specifies
who has access to which model.

The topic of security will be covered in detail in :doc:`../restrict_data_access`. For now, we'll
just give ourselves access rights to the `real.estate.property` model to get rid of the warning that
began being logged at server start-up after creating the model:

.. code-block:: text

   WARNING tutorials odoo.modules.loading: The models ['real.estate.property'] have no access rules [...]

.. exercise::
   #. Create a new :file:`ir.model.access.csv` file at the root of the `real_estate` module.
   #. Declare it in the manifest as you did for the :file:`real_estate_property_data.xml` file.
   #. Grant access to the `real.estate.property` model to all administrators of the database by
      adding new access rights with the following specifications:

      - XML ID: `real_estate_property_system`
      - `name`: `real.estate.property.system`
      - `model_id`: The record ID of `model_real_estate_property`
      - `group_id`: The record ID of `base.group_system`
      - `perm_read`, `perm_write`, `perm_create`, and `perm_unlink`: `1`

   .. tip::
      In Odoo, modules and models are automatically given an XML ID computed by prefixing their name
      with `module_` and `model_` respectively.

.. spoiler:: Solution

   .. code-block:: python
      :caption: `__manifest__.py`
      :emphasize-lines: 2

      'data': [
          'ir.model.access.csv',
          'real_estate_property_data.xml',
      ],

   .. code-block:: csv
      :caption: `ir.model.access.csv`

      id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
      real_estate_property_system,real.estate.property.system,model_real_estate_property,base.group_system,1,1,1,1

After restarting the server, the warning should no longer appear.

----

In the next chapter, we'll :doc:`create user interface elements <03_build_user_interface>` to
interact with the property model.
