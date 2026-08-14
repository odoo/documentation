.. _reference/populate:

========
Populate
========

The Populate module is a synthetic data generation framework for Odoo databases. It follows a
declarative **Blueprint** pattern: you describe *what data to create* in XML or JSON, and the
system generates records at scale, with support for parallel execution, statistical distributions,
and dependencies between generated targets.

Typical use cases:

- **Performance testing** -- generate thousands of records to stress-test queries, views, and
  reports.
- **Demo environments** -- ship a module with a realistic-looking dataset out of the box.
- **Development** -- quickly populate a local database so you can work on features that need
  existing data.

.. seealso::
   :ref:`reference/cmdline/duplicate` for a simpler tool that duplicates *existing* records in
   bulk.

.. _reference/populate/installation:

Installation
============

#. Install the ``populate`` Odoo module on your database.
#. (Optional) Install the `Faker <https://faker.readthedocs.io/>`_ library to unlock the
   ``fake.*`` generators:

   .. code-block:: console

      $ pip install -r odoo/addons/populate/requirements.txt

.. important::
   After installing a new module that ships blueprints, you must **upgrade the** ``populate``
   **module** so that its blueprints are discovered and loaded into the database:

   .. code-block:: console

      $ odoo-bin -d <database> -u populate

.. _reference/populate/cli:

CLI command
===========

.. program:: odoo-bin populate

.. code-block:: console

   $ odoo-bin populate -d <database> -b <blueprint>

.. option:: -d <database>, --database <database>

   Target database (required).

.. option:: -b <blueprint>, --blueprint <blueprint>

   Blueprint name or full xmlid (required, unless ``--resume`` is used).

.. option:: --seed <seed>

   Seed for the random number generator. If omitted, a random seed is chosen. Providing the
   same seed guarantees reproducible results (deterministic generation).

.. option:: --scale <factor>

   Multiply all record counts in the blueprint by this factor. Default: ``1``.

.. option:: -j <workers>, --jobs <workers>

   Number of parallel worker processes. Use ``auto`` to use all available CPU threads.
   Default: ``1``.

.. option:: --resume [session_id]

   Resume an interrupted session. Without an argument, resumes the most recent unfinished
   session. With a session ID, resumes that specific session.

.. option:: --profile

   Save profiler traces for each executable populate job in this run.

.. example::

   .. code-block:: console

      # Run a blueprint at 10x scale using all CPU cores
      $ odoo-bin populate -d mydb -b project.fake_project_demo --scale 10 -j auto

      # Run with a fixed seed for reproducibility
      $ odoo-bin populate -d mydb -b my_module.my_blueprint --seed 42

      # Resume the last interrupted session
      $ odoo-bin populate -d mydb --resume

      # Resume a specific session by ID
      $ odoo-bin populate -d mydb --resume 7

      # Save profiler traces for the generated workload
      $ odoo-bin populate -d mydb -b project.fake_project_demo --profile

.. _reference/populate/profiling:

Profiling populate runs
-----------------------

Use :option:`--profile` to measure the runtime cost of a populate run. The command creates
``ir.profile`` entries grouped under one profiler session named after the populate session and
blueprint.

The option only applies to the current command invocation, so the same interrupted session can be
resumed later with or without profiling:

.. code-block:: console

   $ odoo-bin populate -d mydb --resume 7 --profile

Profiling works in both single-worker and multi-worker mode. Each executable job creates its own
profile entry, including subjobs created when a large job is split for parallel execution. Planner
jobs, which only coordinate split subjobs and do not create or update records themselves, are not
profiled. Failed executable job attempts also create profile entries, so their traces remain
available for failure analysis.

.. _reference/populate/blueprints:

Blueprints
==========

A **Blueprint** is a record of ``populate.blueprint`` that declaratively describes what data to
create. Blueprints are typically shipped inside a module's ``populate/`` data folder and loaded
automatically when the ``populate`` module is upgraded.

If a module's ``populate/`` folder is a valid Python package (contains an ``__init__.py``), its
code is imported, allowing the module to register custom generators.

Blueprints can be defined in XML, JSON, or both. If both ``definition_xml`` and
``definition_json`` are set on the same record, the XML definition takes precedence.

.. _reference/populate/blueprints/operations:

Operation blocks
----------------

A blueprint definition is an ordered list of operation blocks. Use ``<create/>`` to create
records, ``<write/>`` to update targeted records, and ``<function/>`` to call a method on targeted
records. Fields are persisted through ORM ``create`` or ``write`` calls, while values are local
variables that can be reused by later fields, values, and function arguments in the same block.

.. example::

   .. code-block:: xml

      <create model="res.partner" count="500" id="my_partners">
          <value name="email_domain" eval="'example.com'"/>
          <field name="name" generator="fake.company"/>
          <field name="email"
                 eval="name.lower().replace(' ', '-') + '@' + email_domain"/>
          <field name="active" eval="True"/>
      </create>

      <write model="res.partner" ref="my_partners" batched="True">
          <value name="suffix" eval="'imported by populate'"/>
          <field name="comment" eval="suffix"/>
      </write>

      <function model="res.partner" name="message_subscribe"
                ref="my_partners" batched="True">
          <value name="current_partner" eval="env.user.partner_id.id"/>
          <arg eval="[current_partner]"/>
      </function>

``model`` (required)
    Odoo model technical name, e.g. ``res.partner``.

``name`` (required for ``function``)
    Name of the method to call.

``count`` (required for ``create``)
    Number of records to create.

``id``
    Reference tag for a ``create`` block. Later blocks can target these records using ``ref``.

``ref``
    For ``write`` and ``function`` blocks: reference to a previously created batch (its ``id``).

``domain``
    For ``write`` and ``function`` blocks: ORM domain selecting the target records. If neither
    ``ref`` nor ``domain`` is provided, all records of the model are targeted. ``create`` blocks
    cannot define a top-level ``domain`` because they create records instead of targeting existing
    ones.

``scale``
    ``True`` (default) or ``False``. Whether the :option:`--scale` factor applies to this
    block's ``count``.

``parallel``
    ``True`` (default) or ``False``. Whether this job can be split across parallel workers.
    Set to ``False`` when the model's constraints require sequential writes.

``batched``
    For ``write`` and ``function`` blocks only. With ``True``, generate one value set and perform
    one write or function call per executable job. The default is ``False``, which generates values
    and performs the operation once per target record. See :ref:`reference/populate/advanced/write`
    and :ref:`reference/populate/advanced/function`.

``context``
    A Python dict literal merged into the ORM context for the ``create``, ``write``, or function
    calls.

.. important::
   Operation blocks are executed in document order. A block that references another via ``ref`` can
   only target a block that was defined *earlier* in the blueprint. Define master data first,
   then the records that depend on it:

   .. example::

      .. code-block:: xml

         <!-- 1. Stage definitions (master data) -->
         <create model="project.task.type" count="8" id="task_types" scale="False">
             <field name="name" generator="fake.bs"/>
         </create>

         <!-- 2. Projects (reference stages) -->
         <create model="project.project" count="120" id="projects">
             <field name="type_ids" ref="task_types" count="8"/>
         </create>

         <!-- 3. Tasks (reference projects and stages) -->
         <create model="project.task" count="10000" id="tasks">
             <field name="project_id" ref="projects"/>
             <field name="stage_id"   ref="task_types"/>
         </create>

.. _reference/populate/blueprints/json:

JSON format
~~~~~~~~~~~

The JSON format mirrors the XML structure. The mandatory ``operation`` key corresponds to the XML
operation element name (``create``, ``write``, or ``function``). The top-level array maps to the
ordered list of operation blocks:

.. example::

   .. code-block:: json

      [
          {
              "operation": "create",
              "model": "res.partner",
              "count": 500,
              "id": "my_partners",
              "values": {
                  "email_domain": { "eval": "'example.com'" }
              },
              "fields": {
                  "name":   { "generator": "fake.company", "null_ratio": "0" },
                  "email":  { "eval": "name.lower().replace(' ', '-') + '@' + email_domain" },
                  "active": { "eval": "True" }
              }
          },
          {
              "operation": "write",
              "model": "res.partner",
              "ref": "my_partners",
              "batched": true,
              "values": {
                  "suffix": { "eval": "'imported by populate'" }
              },
              "fields": {
                  "comment": { "eval": "suffix" }
              }
          },
          {
              "operation": "function",
              "model": "res.partner",
              "name": "message_subscribe",
              "ref": "my_partners",
              "batched": true,
              "values": {
                  "current_partner": { "eval": "env.user.partner_id.id" }
              },
              "args": {
                  "0": { "eval": "[current_partner]" }
              }
          }
      ]

Each object's optional ``fields``, ``values``, and ``args`` keys map target names to their attribute
dictionaries -- the same keys you would write as XML attributes. Positional function arguments use
numeric string keys (``"0"``, ``"1"``, and so on).

.. _reference/populate/blueprints/fields:
.. _reference/populate/blueprints/targets:

Fields, values, and arguments
-----------------------------

Each ``<field/>``, ``<value/>``, and ``<arg/>`` declaration describes a generated target:

- ``<field/>`` is valid in ``create`` and ``write`` blocks and is persisted through the ORM.
- ``<value/>`` is valid in every operation block and defines a non-persisted local variable.
- ``<arg/>`` is valid in ``function`` blocks and defines a generated method argument. An argument
  with a ``name`` is passed as a keyword argument; an unnamed argument is passed positionally in
  declaration order.

They support the same generation attributes, except that ``name`` is optional for positional
``<arg/>`` declarations.

.. example::

   .. code-block:: xml

      <field name="age" generator="scalar.integer" start="18" end="65"
             distribution="normal(mean=35, std=12)"/>

``name`` (required for ``field`` and ``value``)
    ORM field name, local value name, or keyword argument name.

``generator``
    The generator to use (see :ref:`reference/populate/generators`). Mutually exclusive with
    ``eval``. For a field, if neither is provided, a
    :ref:`default generator <reference/populate/blueprints/defaults>` is selected based on the
    field type. Values and arguments have no ORM type from which to select a default.

``eval``
    A Python expression. Can reference other generated targets by name to produce computed values.
    Mutually exclusive with ``generator``.

``null_ratio``
    Probability (0--1) of generating ``False`` instead of a real value. Default: ``0``.
    Cannot be combined with required fields or weighted ``values``.

``unique``
    ``True`` to enforce uniqueness. For ORM fields, generated values are checked against both
    existing database records and previously generated values within the same job. For local values
    and arguments, uniqueness only applies within the current job because they are not persisted.

``values``
    An explicit value list or weighted dict. Examples: ``"['a', 'b', 'c']"`` (equal weights) or
    ``"{'a': 3, 'b': 1}"`` (``a`` is 3x more likely than ``b``).

``distribution``
    A statistical distribution specification, e.g. ``"normal(mean=50, std=10)"``. See
    :ref:`reference/populate/distributions`. Cannot be combined with weighted ``values``.

``domain``
    An ORM domain to filter related records. Only applies to relational and reference generators.
    Can contain generated-target references resolved at generation time -- see
    :ref:`reference/populate/generators/relational/domains`.

``ref``
    Restrict relational picks to records created under this reference tag. Supports dot-path
    traversal -- see :ref:`reference/populate/generators/relational/ref`.

``comodel_name``
    Required for relational values or arguments, where the comodel cannot be inferred from an ORM
    field.

``partition``
    ``True`` to partition comodel IDs across parallel workers. See
    :ref:`reference/populate/generators/relational/partition`.

.. _reference/populate/blueprints/defaults:

Default generators
------------------

When neither ``generator`` nor ``eval`` is specified for a field, a default generator is
automatically selected based on the field type:

.. list-table::
   :header-rows: 1
   :widths: 30 30

   * - Field type
     - Default generator
   * - ``boolean``
     - ``scalar.boolean``
   * - ``integer``
     - ``scalar.integer``
   * - ``float``
     - ``scalar.float``
   * - ``monetary``
     - ``scalar.monetary``
   * - ``char``
     - ``textual.char``
   * - ``text``
     - ``textual.text``
   * - ``html``
     - ``textual.text``
   * - ``date``
     - ``temporal.date``
   * - ``datetime``
     - ``temporal.datetime``
   * - ``selection``
     - ``choice.selection``
   * - ``binary``
     - ``binary.binary``
   * - ``many2one``
     - ``relation.one``
   * - ``one2many``
     - ``relation.many``
   * - ``many2many``
     - ``relation.many``
   * - ``many2one_reference``
     - ``reference.one``
   * - ``reference``
     - ``reference.raw``
   * - ``properties``
     - ``properties.value``
   * - ``properties_definition``
     - ``properties.definition``

If a field type is not listed above and no ``generator`` or ``eval`` is provided, an error is
raised.

.. _reference/populate/generators:

Generators
==========

Generators are the building blocks that produce fields, local values, and function arguments. Every
generator has a ``name`` (used to reference it in blueprints) and a set of compatible target types.

.. _reference/populate/generators/scalar:

Scalar generators
-----------------

Generate numeric and boolean values.

``scalar.boolean``
    Generates ``True`` or ``False``. With ``values``, you can weight the probability:
    ``values="{'True': 9, 'False': 1}"`` produces ``True`` ~90% of the time.

    Compatible targets: ``boolean`` fields and generated values or arguments.

``scalar.integer``
    Generates random integers in a range.

    Compatible targets: ``integer`` and ``float`` fields, and generated values or arguments.

    ``start``
        Lower bound (inclusive). Default: ``1``.

    ``end``
        Upper bound (inclusive). Default: ``1000000``.

    .. example::

       .. code-block:: xml

          <field name="quantity" generator="scalar.integer" start="1" end="100"/>

``scalar.float``
    Generates random floating-point numbers in a range.

    Compatible targets: ``float`` fields and generated values or arguments.

    ``start``
        Lower bound. Default: ``1.0``.

    ``end``
        Upper bound. Default: ``1000000.0``.

``scalar.monetary``
    Generates random monetary values in a range. Depends on the model's currency field -- a
    value for said field must be generated (or eval'd) in the same blueprint block.

    Compatible targets: ``monetary`` fields and generated values or arguments.

    ``start``
        Lower bound. Default: ``1.0``.

    ``end``
        Upper bound. Default: ``1000000.0``.

.. _reference/populate/generators/textual:

Textual generators
------------------

Generate random strings.

``textual.char``
    Generates a random string of fixed length from a character set.

    Compatible targets: ``char`` and ``html`` fields, and generated values or arguments.

    ``char_set``
        Characters to pick from. Default: ASCII letters and digits.

    ``length``
        Length of the generated string. Default: ``12``.

``textual.text``
    Generates a random text block of fixed length.

    Compatible targets: ``text`` and ``html`` fields, and generated values or arguments.

    ``char_set``
        Characters to pick from. Default: ASCII letters, digits, spaces, and newlines.

    ``length``
        Length of the generated text. Default: ``50``.

.. tip::
   For realistic-looking text (names, emails, addresses), use the ``fake.*`` generators instead.

.. _reference/populate/generators/temporal:

Temporal generators
-------------------

Generate dates and datetimes within a range, using a relative date syntax.

``temporal.date``
    Generates random dates.

    Compatible targets: ``date`` and ``datetime`` fields, and generated values or arguments.

    ``start``
        Start of the range. Default: ``None`` (beginning of time).

    ``end``
        End of the range. Default: ``None`` (end of time).

``temporal.datetime``
    Generates random datetimes.

    Compatible targets: ``datetime`` fields and generated values or arguments.

    ``start``
        Start of the range. Default: ``None`` (beginning of time).

    ``end``
        End of the range. Default: ``None`` (end of time).

Both generators accept a **relative date syntax** for ``start`` and ``end``:

- ``temporal.date`` uses ``today`` as the anchor: ``"today -6m"``, ``"today +1y"``
- ``temporal.datetime`` uses ``now`` as the anchor: ``"now -30d"``, ``"now +2h"``

Supported suffixes: ``y`` (years), ``m`` (months), ``w`` (weeks), ``d`` (days), ``h`` (hours),
``M`` (minutes), ``s`` (seconds).

.. example::

   .. code-block:: xml

      <field name="date_order" generator="temporal.date" start="today -6m" end="today"/>
      <field name="create_date" generator="temporal.datetime" start="now -30d" end="now"/>

.. _reference/populate/generators/choice:

Choice generators
-----------------

Pick values from a set.

``choice.sample``
    Picks from an explicit ``values`` list (required). Supports weighted values.

    Compatible targets: ``integer``, ``float``, ``char``, ``text``, ``html``, ``date``,
    ``datetime``, ``boolean``, and ``selection`` fields, and generated values or arguments.

    .. example::

       .. code-block:: xml

          <field name="priority" generator="choice.sample"
                 values="{'high': 1, 'medium': 5, 'low': 4}"/>

``choice.selection``
    Picks from the field's own selection keys. If ``values`` is provided, only those keys are
    used (with optional weights). Otherwise, all valid selection keys are equally likely.

    Compatible types: ``selection``.

    .. example::

       .. code-block:: xml

          <!-- All selection values equally likely -->
          <field name="state" generator="choice.selection"/>

          <!-- Only these values, with weights -->
          <field name="state" generator="choice.selection"
                 values="{'draft': 1, 'confirmed': 5, 'done': 3}"/>

.. _reference/populate/generators/binary:

Binary generators
-----------------

Generate binary data.

``binary.binary``
    Generates random binary data.

    Compatible targets: ``binary`` fields and generated values or arguments.

    ``size``
        Size in bytes. Default: ``1024``.

``binary.image``
    Generates a random solid-color image (PNG).

    Compatible targets: ``binary`` fields and generated values or arguments.

    ``width``
        Image width in pixels. Default: ``64``.

    ``height``
        Image height in pixels. Default: ``64``.

.. _reference/populate/generators/relational:

Relational generators
---------------------

Generate relational targets by picking from existing records.

``relation.one``
    Picks a single related record.

    Compatible targets: ``many2one`` fields and generated values or arguments.

    ``domain``
        ORM domain to filter candidates. See
        :ref:`reference/populate/generators/relational/domains`.

    ``ref``
        Restrict to records created under this reference tag. See
        :ref:`reference/populate/generators/relational/ref`.

    ``comodel_name``
        Required for generated values or arguments, where the comodel cannot be inferred from an
        ORM field.

    ``partition``
        Partition comodel IDs across parallel workers. See
        :ref:`reference/populate/generators/relational/partition`.

``relation.many``
    Picks multiple related records (for ``one2many`` and ``many2many`` fields).

    Compatible targets: ``one2many`` and ``many2many`` fields, and generated values or arguments.

    ``count``
        Average number of related records to link.

    ``std``
        Standard deviation for the count. Default: ``0`` (always exactly ``count``).

    ``groupby``
        Group linked records by a field on the comodel.

    ``domain``, ``ref``, ``comodel_name``, ``partition``
        Same as ``relation.one``.

    .. example::

       .. code-block:: xml

          <field name="tag_ids" generator="relation.many" count="3" std="2"/>

.. _reference/populate/generators/relational/domains:

Dynamic domains
~~~~~~~~~~~~~~~

The ``domain`` parameter on relational generators can contain **generated-target references** that
are resolved at generation time against the current record's already-generated values:

.. example::

   .. code-block:: xml

      <field name="project_id" generator="relation.one"/>
      <field name="task_id" generator="relation.one"
             domain="[('project_id', '=', project_id)]"/>

``project_id`` in the domain expression is automatically detected as a dependency. At
generation time the expression is evaluated with the actual value produced for ``project_id``,
so every ``task_id`` is guaranteed to belong to its sibling ``project_id``.

.. _reference/populate/generators/relational/ref:

Ref dot-path navigation
~~~~~~~~~~~~~~~~~~~~~~~

The ``ref`` attribute supports **dot-path traversal** to scope picks to *related* records of a
previously created batch:

.. example::

   .. code-block:: xml

      <!-- Create projects and their tasks -->
      <create model="project.project" count="10" id="my_projects">
          <field name="name" generator="fake.bs"/>
      </create>
      <create model="project.task" count="100">
          <field name="project_id" generator="relation.one" ref="my_projects"/>
      </create>

      <!-- Assign timesheets only to tasks that belong to our projects -->
      <create model="account.analytic.line" count="200">
          <field name="task_id" generator="relation.one" ref="my_projects.task_ids"/>
      </create>

``ref="my_projects.task_ids"`` resolves by fetching the records created under ``my_projects``,
traversing the ``task_ids`` relation, and restricting the pick to those IDs. Any valid ORM
dot-path works.

This is mainly useful for corecords that are not explicitly created in the blueprint, such as
``product.product`` records that are automatically created alongside ``product.template``.

.. _reference/populate/generators/relational/partition:

Partitioning for parallel execution
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Generators that pick from a comodel (``relation.one``, ``relation.many``, ``reference.one``,
``reference.raw``) support a ``partition`` parameter. When enabled in parallel jobs, comodel
IDs are distributed across workers using round-robin partitioning:

.. example::

   .. code-block:: xml

      <field name="user_id" generator="relation.one" partition="True"/>

This avoids conflicts when creating related records in parallel.

.. note::
   - Partitioning only takes effect when the job has sibling sub-jobs (i.e., it was split for
     parallel execution). In single-worker mode, the parameter has no effect.
   - Partitioning may introduce slight biases when used with non-uniform distributions. The
     general shape of the distribution is preserved, but the parameters won't be followed as
     precisely. For most cases this can be ignored.

.. _reference/populate/generators/reference:

Reference generators
--------------------

Generate values for reference-type fields.

``reference.one``
    Picks a record for a ``many2one_reference`` field. Implicitly depends on the field that
    stores the model name.

    Compatible types: ``many2one_reference``.

    ``partition``
        Partition IDs across parallel workers.

``reference.raw``
    Picks a record for a ``reference`` field (stores ``"model_name,id"`` string).

    Compatible types: ``reference``.

    ``res_model``
        Restrict to a specific model.

    ``res_id``
        Restrict to a specific record ID.

    ``ref``
        Restrict to records under this reference tag.

    ``partition``
        Partition IDs across parallel workers.

.. _reference/populate/generators/faker:

Faker generators (``fake.*``)
-----------------------------

Wraps the `Faker <https://faker.readthedocs.io/en/stable/providers.html>`__ library. Any method
from an allowed provider can be used directly as ``fake.<method_name>``:

.. example::

   .. code-block:: xml

      <field name="name"  generator="fake.name"/>
      <field name="email" generator="fake.email" locale="fr_FR"/>
      <field name="phone" generator="fake.phone_number"/>
      <field name="bio"   generator="fake.paragraph" nb_sentences="5"/>

Method-specific keyword arguments (e.g. ``nb_sentences``) are forwarded as-is to the Faker
method.

``locale``
    Locale for localized data. Default: ``en_US``.

**Allowed providers:** ``address``, ``automotive``, ``bank``, ``barcode``, ``color``,
``company``, ``credit_card``, ``currency``, ``emoji``, ``file``, ``geo``, ``internet``,
``isbn``, ``job``, ``lorem``, ``misc``, ``passport``, ``person``, ``phone_number``,
``profile``, ``sbn``, ``ssn``, ``user_agent``.

.. important::
   Faker must be installed separately. See :ref:`reference/populate/installation`.

.. _reference/populate/generators/misc:

Miscellaneous generators
------------------------

``misc.counter``
    Generates an arithmetic sequence. Wraps around to ``start`` if ``end`` is reached.

    Compatible targets: ``integer`` and ``float`` fields, and generated values or arguments.

    ``start``
        Initial value. Default: ``0``.

    ``step``
        Increment per record. Default: ``1``.

    ``end``
        Upper bound (wraps around). Default: ``None`` (no wrap).

    .. example::

       .. code-block:: xml

          <field name="sequence" generator="misc.counter" start="1" step="1"/>

``misc.cycle``
    Cycles through a ``values`` list in order, deterministically. Unlike ``choice.sample``,
    this is not random -- it repeats the sequence exactly.

    Compatible targets: ``integer``, ``float``, ``char``, ``text``, ``html``, ``date``, and
    ``datetime`` fields, and generated values or arguments.

    .. note::
       Weighted values are not allowed with ``misc.cycle`` -- values are always cycled in order.

    .. example::

       .. code-block:: xml

          <field name="day" generator="misc.cycle"
                 values="['Mon', 'Tue', 'Wed', 'Thu', 'Fri']"/>

``misc.eval``
    Evaluates a Python expression. Can reference other target names to produce computed values.

    Compatible types: any.

    The evaluation context contains:

    - ``env`` -- the Odoo environment
    - ``model`` -- the model being populated
    - ``Command`` -- ``odoo.fields.Command`` for building relation commands

    .. example::

       .. code-block:: xml

          <field name="display_name" generator="misc.eval"
                 eval="name + ' (' + str(email) + ')'"/>

.. _reference/populate/generators/properties:

Properties generators
---------------------

Generate values for the ``properties`` / ``properties_definition`` field system.

``properties.definition``
    Generates a property schema (list of property definitions).

    Compatible types: ``properties_definition``.

    ``props``
        Explicit list of property names.

    ``count``
        Number of properties to generate (used if ``props`` is not set).

    ``allowed_types``
        Restrict generated property types to this set.

    ``possible_values``
        For selection-type properties: dict mapping property names to their possible values.

``properties.prop``
    Helper for defining a single property entry. Used inside ``properties.definition``.

    Compatible targets: generated values or arguments.

    ``prop_type``
        The property type (e.g. ``char``, ``integer``, ``selection``).

    ``string``
        The display label for the property.

    ``possible_values``
        For selection-type: list of possible values.

``properties.value``
    Generates values for a ``properties`` field, matching the schema defined by its parent's
    ``properties_definition`` field.

    Compatible types: ``properties``.

.. _reference/populate/distributions:

Distributions
=============

By default, generators produce values uniformly at random within their range. Adding a
``distribution`` parameter changes **how likely** certain parts of the range are sampled.

.. example::

   .. code-block:: xml

      <field name="age"   generator="scalar.integer" start="18" end="90"
             distribution="normal(mean=35, std=12)"/>
      <field name="delay" generator="scalar.float"   start="0"  end="100"
             distribution="exponential(rate=0.05)"/>

.. _reference/populate/distributions/normal:

``normal(mean, std)`` -- Most values near the center
----------------------------------------------------

Produces a classic bell curve. Most values land close to ``mean``; the further from it, the
rarer. ``std`` (standard deviation) controls the spread -- a smaller ``std`` packs values
tighter around the mean.

**Use when** you want a realistic "average with natural variation" pattern.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Employee age
     - ``normal(mean=35, std=12)``
     - Most employees are around 35, fewer very young or very old
   * - Product price
     - ``normal(mean=50, std=15)``
     - Prices cluster around 50, with some cheaper/expensive outliers
   * - Task duration (hours)
     - ``normal(mean=8, std=3)``
     - Most tasks take about a day, some shorter or longer

.. _reference/populate/distributions/uniform:

``uniform()`` -- Any value is equally likely
--------------------------------------------

A flat distribution -- every value in the range has the exact same chance. This is the default
behavior when you omit ``distribution`` entirely, so you rarely need to write it out.

.. _reference/populate/distributions/exponential:

``exponential(rate)`` -- Lots of small values, rare large ones
--------------------------------------------------------------

A steep curve that starts high and drops off. Most generated values are small; large values are
increasingly rare. A higher ``rate`` makes it drop off faster.

**Use when** the data should be skewed toward the low end, with occasional spikes.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Days until deadline
     - ``exponential(rate=0.03)``
     - Most deadlines are soon, a few are months away
   * - Allocated hours
     - ``exponential(rate=0.1)``
     - Most tasks are quick, a few are very long
   * - Time between events
     - ``exponential(rate=0.05)``
     - Short gaps are common, long gaps are rare

.. _reference/populate/distributions/beta:

``beta(alpha, beta)`` -- Values between 0 and 1, shaped how you want
--------------------------------------------------------------------

Always produces values in [0, 1]. The generator maps this onto your ``start``/``end`` range
automatically. The two parameters shape the curve:

- ``alpha=2, beta=2`` -- bell-shaped, centered at 0.5 (like a bounded normal)
- ``alpha=1, beta=3`` -- skewed toward 0 (most values are low)
- ``alpha=3, beta=1`` -- skewed toward 1 (most values are high)
- ``alpha=0.5, beta=0.5`` -- U-shaped, values cluster near 0 and 1

**Use when** you are modeling percentages, progress, ratings, or any bounded proportion.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Project progress (%)
     - ``beta(alpha=2, beta=2)``
     - Most projects are roughly mid-way, few at 0% or 100%
   * - Discount rate
     - ``beta(alpha=1, beta=3)``
     - Most discounts are small, large discounts are rare
   * - Satisfaction score
     - ``beta(alpha=3, beta=1)``
     - Most scores are high

.. _reference/populate/distributions/poisson:

``poisson(lam)`` -- How many times something happens
----------------------------------------------------

Produces whole numbers representing a **count of occurrences**. ``lam`` (lambda) is the average
number of occurrences you expect. Values near ``lam`` are most likely; values far from it are
rare.

**Use when** you are generating "how many" -- e.g., number of items, events, or attempts.

.. list-table::
   :header-rows: 1
   :widths: 25 30 45

   * - Example field
     - Parameters
     - Reason
   * - Number of order lines
     - ``poisson(lam=5)``
     - Orders average 5 lines, some have 1, rarely 15+
   * - Support tickets per day
     - ``poisson(lam=3)``
     - About 3 per day on average
   * - Login attempts
     - ``poisson(lam=2)``
     - Usually 1--3 attempts, occasionally more

.. _reference/populate/distributions/triangular:

``triangular(min, max, mode)`` -- Three-point estimate
------------------------------------------------------

A simple triangle shape. ``mode`` is the peak (most likely value), ``min`` and ``max`` are the
absolute bounds. Values near ``mode`` are most common; probability falls off linearly to the
edges.

**Use when** you can estimate three points -- minimum, maximum, and most likely -- but don't
have more detailed data.

.. list-table::
   :header-rows: 1
   :widths: 25 35 40

   * - Example field
     - Parameters
     - Reason
   * - Task estimate (days)
     - ``triangular(min=1, max=30, mode=5)``
     - Most tasks take ~5 days, never less than 1 or more than 30
   * - Shipping cost
     - ``triangular(min=5, max=200, mode=25)``
     - Typically around 25, bounded by 5 and 200

.. _reference/populate/distributions/guide:

Quick decision guide
--------------------

.. list-table::
   :header-rows: 1
   :widths: 50 50

   * - You want...
     - Use
   * - Realistic clustering around an average
     - ``normal``
   * - Everything equally likely
     - ``uniform`` (or omit ``distribution``)
   * - Mostly small values, rare big ones
     - ``exponential``
   * - A percentage / bounded ratio
     - ``beta``
   * - A count of "how many times"
     - ``poisson``
   * - Three-point estimate (min / likely / max)
     - ``triangular``

.. _reference/populate/advanced:

Advanced topics
===============

.. _reference/populate/advanced/virtual:
.. _reference/populate/advanced/values:

Generated values
----------------

Fields are persisted values passed to ORM ``create`` or ``write``. By contrast, ``<value/>``
declarations are local variables that are generated but **not persisted**. They let you build
intermediate values that multiple fields depend on, avoiding duplication:

.. example::

   .. code-block:: xml

      <create model="account.move.line" count="1000">
          <field name="quantity"    generator="scalar.integer" start="1" end="100"/>
          <field name="price_unit"  generator="scalar.float"   start="5" end="500"/>
          <value name="subtotal" eval="quantity * price_unit"/>
          <field name="discount" eval="subtotal * 0.1 if subtotal > 200 else 0"/>
          <field name="price_total" eval="subtotal - discount"/>
      </create>

   Here ``subtotal`` is computed but never written to the database. Both ``discount`` and
   ``price_total`` reference it, so the ``quantity * price_unit`` logic lives in one place.

Generated values are also useful for **correlating** persisted fields:

.. example::

   .. code-block:: xml

      <create model="res.partner" count="200">
          <value name="first_name" generator="fake.first_name"/>
          <value name="last_name"  generator="fake.last_name"/>
          <field name="name"  eval="first_name + ' ' + last_name"/>
          <field name="email"
                 eval="first_name.lower() + '.' + last_name.lower() + '@example.com'"/>
      </create>

   Every record's ``name`` and ``email`` stay consistent with each other, without either
   intermediate value being stored on its own.

.. _reference/populate/advanced/write:

Write jobs
----------

Use ``<write/>`` to update existing records. The target records can be selected with ``ref``, with
a top-level ``domain``, or with both.

.. example::

   .. code-block:: xml

      <!-- Create partners and tag them with the "customers" reference -->
      <create model="res.partner" count="500" id="customers">
          <field name="name" generator="fake.company"/>
          <field name="active" values="{'True': 9, 'False': 1}"/>
          <field name="customer_rank" start="0" end="5"/>
      </create>

      <!-- Update all partners created under the "customers" reference -->
      <write model="res.partner" ref="customers">
          <field name="phone" generator="fake.phone_number"/>
      </write>

      <!-- Update all active customers, even if they were not created by this blueprint -->
      <write model="res.partner"
             domain="[('customer_rank', '&gt;', 0), ('active', '=', True)]">
          <field name="mobile" generator="fake.phone_number"/>
      </write>

      <!-- Update only active customers created under the "customers" reference -->
      <write model="res.partner" ref="customers"
             domain="[('customer_rank', '&gt;', 0), ('active', '=', True)]">
          <field name="email" generator="fake.company_email"/>
      </write>

The targeting rules are:

.. list-table::
   :header-rows: 1

   * - Attributes
     - Target records
   * - ``ref`` only
     - Records created under that populate reference.
   * - ``domain`` only
     - Existing records of the job model matching the domain.
   * - ``ref`` and ``domain``
     - Referenced records that also match the domain.
   * - Neither
     - All existing records of the job model.

Domains on ``write`` jobs are evaluated once to select the target records; they are not dynamic per
generated record. ``create`` jobs cannot define a top-level ``domain`` because they create new
records instead of targeting existing ones.

By default, values are generated and written once per target record. With ``batched="True"``, one
value set is generated for the whole executable job or subjob, and one ORM ``write`` call updates
that recordset:

.. example::

   .. code-block:: xml

      <write model="res.partner" ref="customers" batched="True">
          <field name="active" eval="True"/>
      </write>

``batched`` is only valid on ``write`` and ``function`` blocks. ``create`` blocks do not accept it,
because ORM ``create`` already receives a list of generated values. Large jobs can still be split
into subjobs, so each subjob performs its own write.

.. _reference/populate/advanced/function:

Function jobs
-------------

Use ``<function/>`` to call a model method on targeted records. This is useful when records cannot
be created directly in their final business state and must go through a transition method. For
example, invoices are created as drafts and can then be posted by calling ``_post``:

.. example::

   .. code-block:: xml

      <function model="account.move" name="_post" ref="moves" batched="True">
          <arg name="soft" eval="False"/>
      </function>

Function blocks follow the same ``ref`` and ``domain`` targeting rules as write blocks. The
``name`` attribute selects the method. Methods decorated with ``@api.model`` are called on the
empty model recordset once per job; regular record methods are called on the targeted records.

Declare method arguments with ``<arg/>``. Arguments support the same generation attributes as
``<value/>``. Named arguments become keyword arguments, while unnamed arguments become positional
arguments in declaration order:

.. example::

   .. code-block:: xml

      <function model="x.model" name="action" ref="records">
          <arg eval="'first positional'"/>
          <arg eval="42"/>
          <arg name="flag" eval="True"/>
      </function>

In JSON, positional arguments use numeric string keys such as ``"0"`` and ``"1"``. With the
default ``batched="False"``, arguments are generated and the method is called once per target
record. With ``batched="True"``, one argument set is generated and the method is called once on the
target recordset of each executable job or subjob. This batching distinction applies to regular
record methods; ``@api.model`` methods are always called once per job.

.. _reference/populate/advanced/inheritance:

Blueprint inheritance
---------------------

Blueprints support Odoo-style view inheritance via ``inherit_id``. A child blueprint applies
XPath or positional specs to its parent's XML definition:

.. example::

   .. code-block:: xml

      <record id="custom_blueprint" model="populate.blueprint">
          <field name="name">Custom Blueprint</field>
          <field name="inherit_id" ref="base_module.parent_blueprint"/>
          <field name="definition_xml" type="xml">
              <!-- Change record count -->
              <create model="res.partner" position="attributes">
                  <attribute name="count">2000</attribute>
              </create>
              <!-- Add a new field to an existing create block -->
              <create model="res.partner" position="inside">
                  <field name="website" generator="fake.url"/>
              </create>
              <!-- Add a new create block after an existing one -->
              <create model="res.partner" position="after">
                  <create model="res.users" count="50" id="new_users">
                      <field name="name" generator="fake.name"/>
                      <field name="login" generator="fake.user_name" unique="True"/>
                  </create>
              </create>
          </field>
      </record>

Supported positions: ``attributes``, ``inside``, ``before``, ``after``, ``replace``. XPath
expressions (``<xpath expr="..." position="...">``) work as well. Chained inheritance
(grandchild blueprints) is supported; circular inheritance is detected and rejected.

.. _reference/populate/advanced/sessions:

Sessions and resuming
---------------------

Each run creates a **Session** (``populate.session``) that tracks every job and the records it
produced. If execution is interrupted (``Ctrl+C``, crash, etc.), you can resume where you left
off:

.. example::

   .. code-block:: console

      # Resume the most recent unfinished session
      $ odoo-bin populate -d mydb --resume

      # Resume a specific session by ID
      $ odoo-bin populate -d mydb --resume 42

Sessions also guarantee **deterministic generation**: providing the same ``--seed`` with the
same blueprint produces the same data every time.

.. _reference/populate/advanced/parallel:

Parallel execution
------------------

Pass :option:`-j` (or ``-j auto``) to split large jobs across multiple worker processes. Each
job that exceeds the internal batch size is automatically divided into sub-jobs distributed to
the pool.

.. example::

   .. code-block:: console

      $ odoo-bin populate -d mydb -b my_blueprint --scale 50 -j auto

Parallelism can be disabled per operation block with ``parallel="False"`` when the model's
constraints require sequential writes. The multiprocessing backend is controlled by the
environment variable ``ODOO_POPULATE_MULTIPROCESS_ENABLE`` (defaults to ``True``).

.. _reference/populate/advanced/retry:

Automatic retry on constraint violations
----------------------------------------

The session executor includes a retry mechanism for transient database constraint failures.
When a job triggers one of the following PostgreSQL violations, the job's seed is re-rolled and
the entire job is re-executed with a fresh set of random values (up to 5 attempts):

.. list-table::
   :header-rows: 1
   :widths: 25 35 40

   * - Violation
     - Common cause
     - Hint
   * - ``UniqueViolation``
     - Two generated records collide on a unique index
     - Use a generator that produces more varied values, or add ``unique="True"``
   * - ``NotNullViolation``
     - A required column received ``NULL``
     - Add ``null_ratio="0"`` on the offending field
   * - ``CheckViolation``
     - A generated value fails a ``CHECK`` constraint
     - Adjust generator parameters to stay within the constraint
   * - ``ExclusionViolation``
     - Generated values violate an exclusion constraint
     - Adjust generator parameters to stay within the constraint

This means blueprints don't need to be perfectly tuned upfront -- occasional constraint
failures due to randomness are handled transparently. Only violations that persist across all
retry attempts surface as errors.

.. _reference/populate/custom-generators:

Writing custom generators
=========================

You can create custom generators by subclassing
``odoo.addons.populate.generators.Generator`` and placing the code in your module's
``populate/`` package (with an ``__init__.py``). The generator is automatically registered when
the module is loaded.

.. example::

   .. code-block:: python

      from odoo.addons.populate.generators import Generator


      class SequentialEmail(Generator):
          """Generates email addresses like user_0001@example.com, user_0002@example.com, ..."""

          name = 'my_module.sequential_email'
          allowed_on = ('char', 'value')

          def __init__(self, domain_name='example.com', **kwargs):
              super().__init__(**kwargs)
              self.domain_name = domain_name
              self._counter = 0

          def _next(self, known_vals):
              self._counter += 1
              return f'user_{self._counter:04d}@{self.domain_name}'

          @classmethod
          def convert_to_kwargs(cls, attrs):
              kwargs = super().convert_to_kwargs(attrs)
              if 'domain_name' in attrs:
                  kwargs['domain_name'] = attrs['domain_name']
              return kwargs

Key requirements:

``name`` (class attribute, required)
    A unique string identifier for the generator. Convention: ``<module_name>.<generator_name>``.

``allowed_on`` (class attribute, optional)
    Tuple of compatible :ref:`field types <reference/orm/fields>`. Include ``value`` to allow the
    generator on generated values and arguments. Set to ``None`` to allow any target.

``_next(self, known_vals)`` (method, required)
    Generate and return the next value. ``known_vals`` is a dict of target names to their
    already-generated values for the current record (only targets listed in ``depends`` are
    guaranteed to be present).

``convert_to_kwargs(cls, attrs)`` (classmethod, optional)
    Override to convert XML/JSON attributes into ``__init__`` keyword arguments. Always call
    ``super().convert_to_kwargs(attrs)`` first to handle the standard attributes (``values``,
    ``null_ratio``, ``distribution``, ``unique``).

Once registered, the generator can be used in any blueprint:

.. example::

   .. code-block:: xml

      <field name="email" generator="my_module.sequential_email"
             domain_name="mycompany.com"/>

.. _reference/populate/guidelines:

Guidelines
==========

The following guidelines are not hard rules, but they will help you write blueprints,
and handle some edge-cases.

Choose counts that scale cleanly across tiers
---------------------------------------------

A blueprint's ``count`` values should produce a useful, browsable dataset at ``--scale 1`` and
remain coherent at higher scales. A practical approach is to target three tiers:

- **1x (base)** -- a standalone demo or development dataset. Large enough to exercise pagination,
  search, and filters, but small enough to populate in seconds. Around **10 000** records for
  the main transactional model is a reasonable baseline.
- **10x** -- load-testing size (~100 000 records). Reveals UI slowdowns and unindexed query
  bottlenecks.
- **100x** -- stress-test size (~1 000 000 records). Surfaces ORM or PostgreSQL scalability
  limits.

.. example::

   .. code-block:: console

      $ odoo-bin populate -d mydb -b my_module.demo              # 1x  — 10 000 tasks
      $ odoo-bin populate -d mydb -b my_module.demo --scale 10   # 10x — 100 000 tasks
      $ odoo-bin populate -d mydb -b my_module.demo --scale 100  # 100x — 1 000 000 tasks

**Keep ratios realistic.** Absolute counts matter less than the ratio between related models.
If you create 120 projects and 10 000 tasks, that is roughly 80 tasks per project -- a
plausible average. At 100x, that becomes 12 000 projects and 1 000 000 tasks, which keeps the
same ratio.

**Master data ignores scale.** Stage definitions, attribute sets, and similar configuration
records should always use ``scale="False"`` so they stay at their fixed count across all tiers.
Eight task stages at 1x is still eight task stages at 100x.

Use ``context`` to disable side effects
---------------------------------------

Bulk population is significantly faster when mail notifications, field tracking, and automatic
record creation are disabled.

.. example::

   .. code-block:: xml

      <create model="account.move" count="15000" id="invoices"
              context="{'mail_auto_subscribe_no_notify': True}">
          ...
      </create>

Use ``partition="True"`` to avoid serialization errors in multi-worker mode
---------------------------------------------------------------------------

When creating child records in parallel (e.g. order lines for orders), you
should add ``partition="True"`` on the parent field whenever the parent model
has a **stored computed field that depends on the children**.

.. example::

   .. code-block:: xml

      <create model="sale.order.line" count="20000" id="order_lines">
          <field name="order_id" ref="sale_orders" partition="True"/>
      </create>

Without partitioning, workers pick parent IDs at random. Two workers can end
up creating lines for the same order simultaneously. Because ``sale.order``
has stored computed fields that recompute when ``order_line`` changes,
both workers will try to write to the same order row at the same time.
PostgreSQL detects this conflict and raises a **serialization error**.

With ``partition="True"``, each worker is assigned a distinct, non-overlapping
subset of parent IDs. No two workers ever touch the same parent, so the
concurrent writes never collide and the serialization error cannot occur.

Use generated values for intermediate logic
-------------------------------------------

Generated values are never written to the database, but make blueprints clearer and more
maintainable. Use them for:

**Correlated fields** -- generate a value once, reuse it in several persisted fields:

.. example::

   .. code-block:: xml

      <value name="first_name" generator="fake.first_name"/>
      <value name="last_name"  generator="fake.last_name"/>
      <field name="name" eval="first_name + ' ' + last_name"/>
      <field name="email"
             eval="first_name.lower() + '.' + last_name.lower() + '@example.com'"/>

**Multi-field uniqueness** -- pack multiple fields into a tuple and mark it unique, then
unpack:

.. example::

   .. code-block:: xml

      <value name="generated_product_id" generator="relation.one"
             comodel_name="product.product" ref="products"/>
      <value name="generated_partner_id" generator="relation.one"
             comodel_name="res.partner" ref="customers"/>
      <value name="unique_pair" eval="(generated_product_id, generated_partner_id)" unique="True"/>
      <field name="product_id" eval="unique_pair[0]"/>
      <field name="partner_id" eval="unique_pair[1]"/>

Necessary when there is a composite unique constraint on two fields, but adding ``unique=True``
on only one of the fields will restrain the possible combinations too much.

**Computed quantities** -- derive a ratio, then apply it:

.. example::

   .. code-block:: xml

      <value name="ratio" generator="scalar.float"
             start="0" end="1" distribution="beta(alpha=2, beta=2)"/>
      <field name="qty_delivered" eval="product_uom_qty * ratio"/>

Use ``eval`` to derive values from parent records
-------------------------------------------------

When a child record needs a value that matches its parent (e.g. a subtask inherits its parent's
project), use ``eval`` with ``model.browse()`` or ``env[...]``:

.. example::

   .. code-block:: xml

      <!-- Subtasks inherit the project from their parent task -->
      <field name="parent_id" ref="parent_tasks"/>
      <field name="project_id" eval="model.browse(parent_id).project_id.id"/>

      <!-- Invoice currency matches the journal's currency -->
      <field name="currency_id"
             eval="(journal := env['account.journal'].browse(journal_id)).currency_id.id
                   or journal.company_id.currency_id.id"/>

Use write blocks for two-phase creation
---------------------------------------

Some models require fields to be set in a specific order, or need a second pass to simulate
realistic state transitions. Use ``<write/>`` to update records that were created earlier:

.. example::

   .. code-block:: xml

      <!-- Phase 1: create product templates without variants -->
      <create model="product.template" count="5000" id="templates"
              context="{'create_product_product': False}">
          <field name="name" generator="fake.catch_phrase"/>
      </create>

      <!-- Phase 2: add attribute lines (triggers variant creation) -->
      <create model="product.template.attribute.line" count="8000" id="attr_lines">
          <field name="product_tmpl_id" ref="templates"/>
          ...
      </create>

      <!-- Phase 3: update the generated variants -->
      <write model="product.product" ref="templates.product_variant_ids">
          <field name="default_code" generator="fake.ean13" unique="True"/>
      </write>
